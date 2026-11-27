import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public, read-only. Returns the admin-editable content for a built page
// (currently "nontech" and "school"), stored in the `pageContent` collection.
// Read via the Admin SDK so it works regardless of Firestore client rules.
// The website falls back to its built-in defaults when a field is empty, so an
// empty or missing document never breaks the page.
const ALLOWED = new Set(['nontech', 'school', 'iit']);

export async function GET(req: NextRequest) {
  const page = (req.nextUrl.searchParams.get('page') || '').toLowerCase();
  if (!ALLOWED.has(page)) {
    return NextResponse.json({ error: 'Unknown page.' }, { status: 400 });
  }
  try {
    const db = getAdminDb();
    // The page's cards / FAQs / updates live in pageContent/<page>. Its hero
    // (banner images, or a hero video for School) is edited from the admin
    // "Exam Pages" screen and stored in examPageContent/<page> — the collection
    // the admin can write to — so we merge that hero in here.
    const [pcSnap, epcSnap] = await Promise.all([
      db.collection('pageContent').doc(page).get(),
      db.collection('examPageContent').doc(page).get(),
    ]);
    const pc = pcSnap.exists ? (pcSnap.data() as any) : null;
    const epc = epcSnap.exists ? (epcSnap.data() as any) : null;

    let content: any = pc ? { ...pc } : null;
    if (epc) {
      if (Array.isArray(epc.hero) && epc.hero.length) {
        content = { ...(content || {}), hero: epc.hero };
      }
      if (typeof epc.heroVideo === 'string' && epc.heroVideo.trim()) {
        // School reads its hero video from `physicsPlaylist`.
        content = { ...(content || {}), physicsPlaylist: epc.heroVideo.trim() };
      }
    }

    return NextResponse.json({ ok: true, content }, {
      headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' },
    });
  } catch (e) {
    console.error('page-content error:', e);
    // Soft-fail: the page uses its built-in defaults.
    return NextResponse.json({ ok: true, content: null });
  }
}
