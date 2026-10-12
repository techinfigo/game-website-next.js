import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';
import { getCorsHeaders } from '@/lib/cors';
import { getRazorpayCreds } from '@/lib/razorpay';

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders() });
}

export async function POST(req: NextRequest) {
  const res = await handlePOST(req);
  const headers = getCorsHeaders();
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

// Creates a Razorpay order for a paid PDF. The price is read from Firestore on
// the server (never trusted from the client), and the buyer is identified from
// their Firebase ID token. The order carries uid + pdfId in its notes so the
// webhook can record the purchase even if the browser drops.
async function handlePOST(req: NextRequest) {
  const creds = getRazorpayCreds();
  if (!creds) {
    return NextResponse.json({ error: 'Payments are not set up yet. Please try again later.' }, { status: 503 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const { idToken, pdfId } = body || {};
  if (!idToken || typeof idToken !== 'string' || !pdfId || typeof pdfId !== 'string') {
    return NextResponse.json({ error: 'idToken and pdfId are required.' }, { status: 400 });
  }

  let uid: string;
  try {
    uid = (await getAdminAuth().verifyIdToken(idToken)).uid;
  } catch {
    return NextResponse.json({ error: 'Please log in again.' }, { status: 401 });
  }

  const db = getAdminDb();
  const snap = await db.collection('pdfs').doc(pdfId).get();
  if (!snap.exists) {
    return NextResponse.json({ error: 'This PDF no longer exists.' }, { status: 404 });
  }
  const pdf = snap.data() as any;
  const price = Number(pdf.price) || 0;
  if (pdf.isFree === true || price <= 0) {
    return NextResponse.json({ error: 'This PDF is free to read.' }, { status: 400 });
  }

  // Already purchased? (single-field uid query — no composite index needed)
  const owned = await db.collection('purchases').where('uid', '==', uid).get();
  if (owned.docs.some((d) => (d.data() as any).pdfId === pdfId)) {
    return NextResponse.json({ alreadyOwned: true });
  }

  const amount = Math.round(price * 100); // paise
  const basic = Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');
  let order: any = {};
  try {
    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `pdf_${pdfId}_${Date.now()}`.slice(0, 40),
        notes: { uid, pdfId },
      }),
    });
    order = await rzpRes.json().catch(() => ({}));
    if (!rzpRes.ok || !order.id) {
      return NextResponse.json({ error: order?.error?.description || 'Could not start the payment.' }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: 'Could not reach the payment service.' }, { status: 502 });
  }

  return NextResponse.json({
    orderId: order.id,
    amount,
    currency: 'INR',
    keyId: creds.keyId,
    pdfTitle: pdf.title || 'PDF',
  });
}
