// Server-side loader for the courses-page banners configured in the admin panel.
// Reads the "courseBanners" collection with the Firebase Admin SDK so the
// banners are rendered on the server (in the initial HTML) — no client-side
// fetch, so the banner never pops in late and shifts the page.
//
// Returns only active banners, ordered. Empty array on any failure or when
// none are configured (there are no built-in fallback banners).

import { getAdminDb } from './firebase-admin';

export async function getCourseBanners(): Promise<string[]> {
  try {
    const snap = await getAdminDb().collection('courseBanners').get();
    return snap.docs
      .map((doc) => doc.data() as Record<string, unknown>)
      .filter((data) => data.active === true)
      .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0))
      .map((data) => data.imageUrl as string)
      .filter((imageUrl) => typeof imageUrl === 'string' && imageUrl.length > 0);
  } catch (err) {
    console.warn('[courseBanners] failed to load; showing none:', err);
    return [];
  }
}
