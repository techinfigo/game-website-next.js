"use client";

import { useEffect, useState } from "react";
import { loadFirebase } from "@/lib/loadFirebase";

/**
 * Only banners configured in the admin panel (Firestore "courseBanners",
 * active === true) are shown. If none are configured, the carousel renders
 * nothing — there are no built-in fallback banners.
 */
export function useCourseBanners(): { banners: string[]; loading: boolean } {
  const [banners, setBanners] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, "courseBanners")))
      .then((snapshot) => {
        if (cancelled) return;

        const fetched = snapshot.docs
          .map((doc) => doc.data() as Record<string, unknown>)
          .filter((data) => data.active === true)
          .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0))
          .map((data) => data.imageUrl as string)
          .filter((imageUrl) => typeof imageUrl === "string" && imageUrl.length > 0);

        setBanners(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { banners, loading };
}
