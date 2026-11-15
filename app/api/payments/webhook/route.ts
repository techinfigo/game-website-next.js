import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { getAdminDb } from '@/lib/firebase-admin';
import { sendMentorshipConfirmation } from '@/lib/mailer';

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

  const payment = event?.payload?.payment?.entity || {};
  const notes = payment.notes || {};

  // --- 1:1 Mentorship payments (backstop for the verify/failed calls) ---
  if (notes.type === 'mentorship' && notes.leadId) {
    const db = getAdminDb();
    const leadRef = db.collection('mentorshipLeads').doc(String(notes.leadId));
    const snap = await leadRef.get();
    if (snap.exists) {
      const lead = snap.data() as any;
      if (event?.event === 'payment.captured' && lead.status !== 'paid') {
        await leadRef.update({
          status: 'paid',
          paymentId: payment.id || '',
          orderId: payment.order_id || '',
          paidAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        if (!lead.emailSent) {
          const emailed = await sendMentorshipConfirmation({
            name: lead.name, email: lead.email, phone: lead.phone, branch: lead.branch, amount: lead.amount,
          });
          if (emailed) await leadRef.update({ emailSent: true }).catch(() => {});
        }
      } else if (event?.event === 'payment.failed' && lead.status !== 'paid') {
        await leadRef.update({
          status: 'failed',
          failReason: (payment?.error_description || 'Payment failed').toString().slice(0, 200),
          updatedAt: new Date().toISOString(),
        });
      }
    }
    return NextResponse.json({ ok: true });
  }

  if (event?.event === 'payment.captured') {
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
