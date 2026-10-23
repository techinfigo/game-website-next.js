import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';
import { getCorsHeaders } from '@/lib/cors';
import { applyCoupon } from '@/lib/coupons';

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const res = await handlePOST(req);
  const headers = getCorsHeaders(req.headers.get('origin'));
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

// Previews a coupon for a given PDF so the portal can show the discounted price
// before the student pays. The real discount is re-checked when the order is
// created, so this endpoint only needs to be good enough for display.
async function handlePOST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const { idToken, pdfId, couponCode } = body || {};
  if (!idToken || !pdfId || !couponCode) {
    return NextResponse.json({ error: 'idToken, pdfId and couponCode are required.' }, { status: 400 });
  }

  try {
    await getAdminAuth().verifyIdToken(idToken);
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
    return NextResponse.json({ error: 'This PDF is free.' }, { status: 400 });
  }

  const outcome = await applyCoupon(couponCode, price);
  if (!outcome.valid) {
    return NextResponse.json({ valid: false, message: outcome.reason || 'Invalid coupon.' }, { status: 200 });
  }

  return NextResponse.json({
    valid: true,
    code: outcome.code,
    originalAmount: outcome.originalAmount,
    discount: outcome.discount,
    finalAmount: outcome.finalAmount,
  });
}
