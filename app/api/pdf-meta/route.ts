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
        // Admin-editable gallery and content lists (safe public fields only).
        images: Array.isArray(p.images) ? p.images.filter(Boolean).slice(0, 10) : [],
        purchaseIncludes: Array.isArray(p.purchaseIncludes) ? p.purchaseIncludes.filter(Boolean).slice(0, 12) : [],
        resourceDetails: Array.isArray(p.resourceDetails) ? p.resourceDetails.filter(Boolean).slice(0, 12) : [],
        reviews: Array.isArray(p.reviews)
          ? p.reviews
              .filter((r: any) => r && (r.text || r.name))
              .slice(0, 20)
              .map((r: any) => ({
                name: String(r.name || '').slice(0, 80),
                text: String(r.text || '').slice(0, 600),
                rating: Number(r.rating) > 0 ? Math.min(5, Math.round(Number(r.rating))) : 0,
                verified: r.verified === true,
              }))
          : [],
      },
    });
  } catch (e) {
    console.error('pdf-meta error:', e);
    return NextResponse.json({ error: 'server_error' }, { status: 500 });
  }
}
