import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';
import { getCorsHeaders } from '@/lib/cors';
import { getRazorpayCreds } from '@/lib/razorpay';

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const res = await handlePOST(req);
  const headers = getCorsHeaders(req.headers.get('origin'));
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

// Verifies a completed Razorpay payment (HMAC signature) and records the
// purchase in Firestore with the Admin SDK (bypasses security rules, which
// forbid client writes to `purchases`). Idempotent on payment id.
async function handlePOST(req: NextRequest) {
  const creds = getRazorpayCreds();
  if (!creds) {
    return NextResponse.json({ error: 'Payments are not set up yet.' }, { status: 503 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const { idToken, pdfId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = body || {};
  if (!idToken || !pdfId || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: 'Missing payment details.' }, { status: 400 });
  }

  let uid: string;
  try {
    uid = (await getAdminAuth().verifyIdToken(idToken)).uid;
  } catch {
    return NextResponse.json({ error: 'Please log in again.' }, { status: 401 });
  }

  const expected = crypto
    .createHmac('sha256', creds.keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');
  if (expected !== razorpay_signature) {
    return NextResponse.json({ error: 'Payment could not be verified.' }, { status: 400 });
  }

  const db = getAdminDb();

  // Idempotency: if this payment was already recorded, treat as success.
  const existing = await db.collection('purchases').where('paymentId', '==', razorpay_payment_id).limit(1).get();
  if (!existing.empty) {
    return NextResponse.json({ success: true });
  }

  const snap = await db.collection('pdfs').doc(pdfId).get();
  const pdf = snap.exists ? (snap.data() as any) : {};
  const amount = Number(pdf.price) || 0;

  await db.collection('purchases').add({
    uid,
    pdfId,
    pdfTitle: pdf.title || 'PDF',
    amount,
    paymentId: razorpay_payment_id,
    orderId: razorpay_order_id,
    status: 'Success',
    date: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
