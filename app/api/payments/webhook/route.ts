import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAdminDb } from '@/lib/firebase-admin';

// Razorpay webhook (reliability backup). If a student pays but their browser
// drops before the verify call, Razorpay still notifies this endpoint, so the
// purchase is recorded. Configure the webhook URL + secret in the Razorpay
// dashboard and set RAZORPAY_WEBHOOK_SECRET. Idempotent on payment id.
export async function POST(req: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  // Not configured yet — acknowledge so Razorpay doesn't retry forever.
  if (!secret) return NextResponse.json({ ok: true });

  const raw = await req.text();
  const signature = req.headers.get('x-razorpay-signature') || '';
  const expected = crypto.createHmac('sha256', secret).update(raw).digest('hex');
  if (expected !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  let event: any;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  if (event?.event === 'payment.captured') {
    const payment = event?.payload?.payment?.entity || {};
    const notes = payment.notes || {};
    const uid = notes.uid;
    const pdfId = notes.pdfId;
    const paymentId = payment.id;

    if (uid && pdfId && paymentId) {
      const db = getAdminDb();
      const existing = await db.collection('purchases').where('paymentId', '==', paymentId).limit(1).get();
      if (existing.empty) {
        const snap = await db.collection('pdfs').doc(pdfId).get();
        const pdf = snap.exists ? (snap.data() as any) : {};
        await db.collection('purchases').add({
          uid,
          pdfId,
          pdfTitle: pdf.title || 'PDF',
          amount: Number(pdf.price) || (Number(payment.amount) || 0) / 100,
          paymentId,
          orderId: payment.order_id || '',
          status: 'Success',
          date: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
      }
    }
  }

  return NextResponse.json({ ok: true });
}
