import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAdminDb } from '@/lib/firebase-admin';
import { getCorsHeaders } from '@/lib/cors';
import { getRazorpayCreds } from '@/lib/razorpay';
import { sendMentorshipConfirmation } from '@/lib/mailer';

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders(req.headers.get('origin')) });
}

export async function POST(req: NextRequest) {
  const res = await handlePOST(req);
  const headers = getCorsHeaders(req.headers.get('origin'));
  Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
  return res;
}

// Verifies a completed 1:1 Mentorship payment (HMAC signature), marks the lead
// as paid, and emails the student a confirmation (best-effort).
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
  const { leadId, razorpay_order_id, razorpay_payment_id, razorpay_signature } = body || {};
  if (!leadId || !razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return NextResponse.json({ error: 'Missing payment details.' }, { status: 400 });
  }

  const expected = crypto
    .createHmac('sha256', creds.keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');
  if (expected !== razorpay_signature) {
    return NextResponse.json({ error: 'Payment could not be verified.' }, { status: 400 });
  }

  const db = getAdminDb();
  const leadRef = db.collection('mentorshipLeads').doc(leadId);
  const snap = await leadRef.get();
  if (!snap.exists) {
    return NextResponse.json({ error: 'Booking not found.' }, { status: 404 });
  }
  const lead = snap.data() as any;

  // Idempotent — if already marked paid, just succeed.
  if (lead.status !== 'paid') {
    await leadRef.update({
      status: 'paid',
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      paidAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    // Best-effort confirmation email.
    const emailed = await sendMentorshipConfirmation({
      name: lead.name, email: lead.email, phone: lead.phone, branch: lead.branch, amount: lead.amount,
    });
    if (emailed) {
      await leadRef.update({ emailSent: true }).catch(() => {});
    }
  }

  return NextResponse.json({ success: true });
}
