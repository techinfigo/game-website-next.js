// Server-side loader for the courses-page banners configured in the admin panel.
// Reads the "courseBanners" collection with the Firebase Admin SDK so the
// banners are rendered on the server (in the initial HTML) — no client-side
// fetch, so the banner never pops in late and shifts the page.
//
// Returns only active banners, ordered. Empty array on any failure or when
// none are configured (there are no built-in fallback banners).

import { getAdminDb } from './firebase-admin';

export interface CourseBanner {
  imageUrl: string;
  linkUrl?: string; // optional click-through target set in the admin panel
}

export async function getCourseBanners(): Promise<CourseBanner[]> {
  try {
    const snap = await getAdminDb().collection('courseBanners').get();
    return snap.docs
      .map((doc) => doc.data() as Record<string, unknown>)
      .filter((data) => data.active === true)
      .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0))
      .map((data) => ({
        imageUrl: data.imageUrl as string,
        linkUrl: typeof data.linkUrl === 'string' && data.linkUrl.trim().length > 0 ? (data.linkUrl as string).trim() : undefined,
      }))
      .filter((b) => typeof b.imageUrl === 'string' && b.imageUrl.length > 0);
  } catch (err) {
    console.warn('[courseBanners] failed to load; showing none:', err);
    return [];
  }
}
