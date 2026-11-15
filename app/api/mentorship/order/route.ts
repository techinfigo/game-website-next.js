import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';
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

const DEFAULT_FEE_INR = 999;

// Starts a 1:1 Mentorship booking. No login required — the student's details
// come from the form. Always records a lead (status 'pending') so unpaid /
// abandoned enquiries are still visible in admin. If Razorpay is configured,
// also creates an order so the browser can open checkout.
async function handlePOST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(body?.name || '').trim();
  const email = String(body?.email || '').trim();
  const phone = String(body?.phone || '').trim();
  const branch = String(body?.branch || '').trim();
  const message = String(body?.message || '').trim();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email and phone are required.' }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
  }

  const db = getAdminDb();

  // Fee comes from the admin Site Settings (settings/site → mentorship1on1Fee),
  // falling back to a default. Never trusted from the client.
  let fee = DEFAULT_FEE_INR;
  try {
    const s = await db.collection('settings').doc('site').get();
    const v = Number((s.data() as any)?.mentorship1on1Fee);
    if (v && v > 0) fee = v;
  } catch {
    /* use default */
  }

  const nowIso = new Date().toISOString();
  const leadRef = await db.collection('mentorshipLeads').add({
    name, email, phone, branch, message,
    amount: fee,
    status: 'pending',
    paymentId: '',
    orderId: '',
    createdAt: nowIso,
    updatedAt: nowIso,
  });

  const creds = getRazorpayCreds();
  if (!creds) {
    // Payments not configured yet — keep the lead as an enquiry.
    return NextResponse.json({ leadId: leadRef.id, paymentsDisabled: true });
  }

  const amount = Math.round(fee * 100); // paise
  const basic = Buffer.from(`${creds.keyId}:${creds.keySecret}`).toString('base64');
  let order: any = {};
  try {
    const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { Authorization: `Basic ${basic}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        currency: 'INR',
        receipt: `mentor_${leadRef.id}`.slice(0, 40),
        notes: { leadId: leadRef.id, type: 'mentorship', name, email },
      }),
    });
    order = await rzpRes.json().catch(() => ({}));
    if (!rzpRes.ok || !order.id) {
      return NextResponse.json({ error: order?.error?.description || 'Could not start the payment.' }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: 'Could not reach the payment service.' }, { status: 502 });
  }

  await leadRef.update({ orderId: order.id, updatedAt: new Date().toISOString() });

  return NextResponse.json({
    leadId: leadRef.id,
    orderId: order.id,
    amount,
    currency: 'INR',
    keyId: creds.keyId,
    name, email, phone,
  });
}
