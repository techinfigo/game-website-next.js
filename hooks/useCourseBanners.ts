"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

/**
 * Banners shown when Firestore has no active banners, is unreachable,
 * or is still loading. Keeps the carousel from ever rendering empty.
 */
export const DEFAULT_COURSE_BANNERS = [
  "/offer-1.png",
  "/offer-2.png",
  "/offer-3.png",
];

export function useCourseBanners(): { banners: string[]; loading: boolean } {
  const [banners, setBanners] = useState<string[]>(DEFAULT_COURSE_BANNERS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "courseBanners"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const fetched = snapshot.docs
          .map((doc) => doc.data() as Record<string, unknown>)
          .filter((data) => data.active === true)
          .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0))
          .map((data) => data.imageUrl as string)
          .filter((imageUrl) => typeof imageUrl === "string" && imageUrl.length > 0);

        // No usable banners configured — keep the defaults.
        if (fetched.length === 0) return;

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

  return { banners: loading ? DEFAULT_COURSE_BANNERS : banners, loading };
}
