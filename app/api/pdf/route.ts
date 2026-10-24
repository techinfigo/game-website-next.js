import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Streams a PDF to the student portal's reader. The file is fetched from
// Storage on the server (so there is no browser CORS problem) and is only
// served if the student owns the PDF (or it is free), so paid files are never
// handed to someone who hasn't bought them.

const ALLOWED_ORIGINS = new Set([
  'https://student.gameacademy.in',
  'https://game-student-portal.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
]);

function corsHeaders(origin: string | null) {
  const envOrigin = process.env.PORTAL_ORIGIN;
  let allow = 'https://student.gameacademy.in';
  if (origin && (ALLOWED_ORIGINS.has(origin) || origin === envOrigin)) allow = origin;
  else if (envOrigin) allow = envOrigin;
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Range, Content-Type',
    'Access-Control-Expose-Headers': 'Content-Length, Content-Range, Accept-Ranges, Content-Type',
    Vary: 'Origin',
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req.headers.get('origin')) });
}

export async function GET(req: NextRequest) {
  const origin = req.headers.get('origin');
  const cors = corsHeaders(origin);
  const fail = (status: number, msg: string) =>
    new NextResponse(JSON.stringify({ error: msg }), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

  const pdfId = req.nextUrl.searchParams.get('pdfId');
  if (!pdfId) return fail(400, 'pdfId is required.');

  // Token from the Authorization header, or ?token= as a fallback.
  const authHeader = req.headers.get('authorization') || '';
  const idToken = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7)
    : req.nextUrl.searchParams.get('token') || '';
  if (!idToken) return fail(401, 'Please log in again.');

  let uid: string;
  try {
    uid = (await getAdminAuth().verifyIdToken(idToken)).uid;
  } catch {
    return fail(401, 'Please log in again.');
  }

  const db = getAdminDb();
  const snap = await db.collection('pdfs').doc(pdfId).get();
  if (!snap.exists) return fail(404, 'This PDF no longer exists.');
  const pdf = snap.data() as any;
  const fileUrl: string = pdf.fileUrl || '';
  if (!fileUrl) return fail(404, 'This PDF has no file.');

  // Access check: free, or the student owns it.
  if (pdf.isFree !== true) {
    const owned = await db.collection('purchases').where('uid', '==', uid).get();
    const hasIt = owned.docs.some((d) => (d.data() as any).pdfId === pdfId);
    if (!hasIt) return fail(403, 'You have not purchased this PDF.');
  }

  // Forward the request (including any Range) to Storage and stream it back.
  const range = req.headers.get('range');
  let upstream: Response;
  try {
    upstream = await fetch(fileUrl, { headers: range ? { Range: range } : {} });
  } catch {
    return fail(502, 'Could not fetch the PDF file.');
  }
  if (!upstream.ok && upstream.status !== 206) {
    return fail(502, 'Could not fetch the PDF file.');
  }

  const headers = new Headers(cors);
  headers.set('Content-Type', 'application/pdf');
  const passthrough = ['content-length', 'content-range', 'accept-ranges'];
  passthrough.forEach((h) => {
    const v = upstream.headers.get(h);
    if (v) headers.set(h, v);
  });
  if (!headers.has('accept-ranges')) headers.set('Accept-Ranges', 'bytes');
  // Let the student's browser cache the file so re-opening and paging are fast
  // (private = never cached by shared/CDN caches, only this user's browser).
  headers.set('Cache-Control', 'private, max-age=3600');

  return new NextResponse(upstream.body, { status: upstream.status, headers });
}
