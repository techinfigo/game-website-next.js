import { NextRequest, NextResponse } from 'next/server';
import { getAdminDb } from '@/lib/firebase-admin';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Returns the PUBLIC catalogue metadata for one paid PDF, for the on-site
// product/preview page. It deliberately never returns `fileUrl` (the real paid
// file) or any private field — only what a shopper may see before buying. The
// real file is served only by /api/pdf after an ownership check.
export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') || '';
  if (!id) return NextResponse.json({ error: 'id is required.' }, { status: 400 });

  try {
    const snap = await getAdminDb().collection('pdfs').doc(id).get();
    if (!snap.exists) return NextResponse.json({ error: 'not_found' }, { status: 404 });
    const p = snap.data() as any;

    // Hidden/unpublished or free items are not sold through this page.
    if (p.published === false) return NextResponse.json({ error: 'not_found' }, { status: 404 });

    return NextResponse.json({
      ok: true,
      pdf: {
        id: snap.id,
        title: p.title || '',
        description: p.description || '',
        category: p.category || 'PDF',
        thumbnailUrl: p.thumbnailUrl || '',
        price: Number(p.price) || 0,
        isFree: p.isFree === true,
        examTag: p.examTag || '',
        branch: p.branch || '',
        subject: p.subject || '',
        resourceType: p.resourceType || '',
        pages: Number(p.pages) || null,
        language: p.language || '',
        sampleUrl: p.sampleUrl || '',
        topics: Array.isArray(p.topics) ? p.topics.slice(0, 12) : [],
      },
    });
  } catch (e) {
    console.error('pdf-meta error:', e);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
