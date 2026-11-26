import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Saves a School-page "learning interest" submission to the `schoolInterests`
// collection with the Admin SDK (so it works regardless of Firestore client
// rules). This is interest collection only — no phone/email is required and no
// admission or booking is implied. The admin panel reads it via /api/admin/leads.
const str = (v: unknown, max: number) => String(v ?? '').trim().slice(0, max);

export async function POST(req: NextRequest) {
  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const cls = str(body.class, 4);
  if (!['09', '10', '11', '12'].includes(cls)) {
    return NextResponse.json({ error: 'Please select your class.' }, { status: 400 });
  }

  const record = {
    class: cls,
    goal: str(body.goal, 40),
    name: str(body.name, 80),
    board: str(body.board, 60),
    subject: str(body.subject, 40),
    topic: str(body.topic, 400),
    source: 'school-page',
    createdAt: new Date().toISOString(),
  };

  try {
    const ref = await getAdminDb().collection('schoolInterests').add(record);
    return NextResponse.json({ ok: true, id: ref.id });
  } catch (e) {
    console.error('school-interest save error:', e);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
