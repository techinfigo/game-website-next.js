import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
import { getCorsHeaders } from '@/lib/cors';

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const res = await handlePOST(req);
  const headers = getCorsHeaders(req.headers.get('origin'));
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

// Records a "Request a Call" submission so the team can call the person back.
// No login required. Stored in the callbackRequests collection, visible in admin.
async function handlePOST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(body?.name || '').trim();
  const phone = String(body?.phone || '').replace(/\s+/g, '').trim();
  const exam = String(body?.exam || '').trim();
  const message = String(body?.message || '').trim();

  if (!name || !phone) {
    return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
  }
  if (!/^(\+?\d{1,3})?\d{10}$/.test(phone)) {
    return NextResponse.json({ error: 'Please enter a valid 10-digit phone number.' }, { status: 400 });
  }

  try {
    const db = getAdminDb();
    const nowIso = new Date().toISOString();
    const ref = await db.collection('callbackRequests').add({
      name, phone, exam, message,
      status: 'new',
      source: String(body?.source || 'website').slice(0, 40),
      createdAt: nowIso,
    });
    return NextResponse.json({ ok: true, id: ref.id });
  } catch (e) {
    console.error('callback request error:', e);
    return NextResponse.json({ error: 'Could not submit right now. Please try again.' }, { status: 500 });
  }
}
