import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';

// Serves admin-only lead collections to the admin panel using the Firebase
// Admin SDK, which bypasses Firestore security rules. The public website writes
// these collections (callbackRequests, mentorshipLeads) with the Admin SDK, but
// the deployed Firestore rules don't grant client-SDK read access to them, so
// the admin panel cannot read them directly. This endpoint lets the admin read
// them after verifying the caller holds a valid Firebase ID token for this
// project (i.e. a logged-in admin).

// Only these collections may be read through this endpoint.
const ALLOWED_COLLECTIONS = new Set(['callbackRequests', 'mentorshipLeads', 'schoolInterests']);

// The admin panel is served from its own origin, so we reflect the request's
// Origin. Auth here is a bearer ID token (not a cookie), so opening CORS does
// not expose anything — the token is the real gate.
function corsHeaders(origin?: string | null) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    Vary: 'Origin',
  };
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: corsHeaders(req.headers.get('origin')) });
}

export async function GET(req: NextRequest) {
  const res = await handleGET(req);
  const headers = corsHeaders(req.headers.get('origin'));
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

async function handleGET(req: NextRequest) {
  const collectionName = req.nextUrl.searchParams.get('collection') || '';
  if (!ALLOWED_COLLECTIONS.has(collectionName)) {
    return NextResponse.json({ error: 'Unknown collection.' }, { status: 400 });
  }

  // Require a valid Firebase ID token (Authorization: Bearer <token>).
  const authHeader = req.headers.get('authorization') || '';
  const idToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  if (!idToken) {
    return NextResponse.json({ error: 'Not authorized.' }, { status: 401 });
  }

  try {
    await getAdminAuth().verifyIdToken(idToken);
  } catch {
    return NextResponse.json({ error: 'Session expired. Please sign in again.' }, { status: 401 });
  }

  try {
    const snap = await getAdminDb().collection(collectionName).get();
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    return NextResponse.json({ ok: true, items });
  } catch (e) {
    console.error(`admin leads read error (${collectionName}):`, e);
    return NextResponse.json({ error: 'Could not load records right now.' }, { status: 500 });
  }
}
