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

// Marks a mentorship lead as failed/abandoned when the student closes the
// Razorpay checkout or the payment errors. Best-effort — the lead already
// exists from the order step, so the record is never lost.
async function handlePOST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false });
  }
  const { leadId, reason } = body || {};
  if (!leadId) return NextResponse.json({ ok: false });

  try {
    const db = getAdminDb();
    const leadRef = db.collection('mentorshipLeads').doc(leadId);
    const snap = await leadRef.get();
    // Don't overwrite a successful payment (race between dismiss + verify).
    if (snap.exists && (snap.data() as any).status !== 'paid') {
      await leadRef.update({
        status: 'failed',
        failReason: String(reason || 'Payment not completed').slice(0, 200),
        updatedAt: new Date().toISOString(),
      });
    }
  } catch (e) {
    console.error('mentorship failed-update error:', e);
  }
  return NextResponse.json({ ok: true });
}
