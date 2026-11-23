import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public, read-only. Returns the admin-editable content for a built page
// (currently "nontech" and "school"), stored in the `pageContent` collection.
// Read via the Admin SDK so it works regardless of Firestore client rules.
// The website falls back to its built-in defaults when a field is empty, so an
// empty or missing document never breaks the page.
const ALLOWED = new Set(['nontech', 'school']);

export async function GET(req: NextRequest) {
  const page = (req.nextUrl.searchParams.get('page') || '').toLowerCase();
  if (!ALLOWED.has(page)) {
    return NextResponse.json({ error: 'Unknown page.' }, { status: 400 });
  }
  try {
    const snap = await getAdminDb().collection('pageContent').doc(page).get();
    const content = snap.exists ? snap.data() : null;
    return NextResponse.json({ ok: true, content }, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' },
    });
  } catch (e) {
    console.error('page-content error:', e);
    // Soft-fail: the page uses its built-in defaults.
    return NextResponse.json({ ok: true, content: null });
  }
}
