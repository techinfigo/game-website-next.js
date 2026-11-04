"use client";

import { useEffect, useState } from "react";
import { loadFirebase } from "@/lib/loadFirebase";

export interface HeroSlide {
  id: string;
  badge?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaText2?: string;
  ctaLink2?: string;
  stats?: { value: string; label: string }[];
  imageUrl?: string;
  order?: number;
}

/**
 * Reads the admin-managed "heroSlides" collection (homepage hero carousel).
 * Returns only active slides, ordered. Empty when none are configured, so the
 * Hero component falls back to its built-in default content.
 */
export function useHeroSlides(): { slides: HeroSlide[]; loading: boolean } {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, "heroSlides")))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;
        const items = snapshot.docs
          .map((doc) => ({ id: doc.id, ...(doc.data() as Record<string, unknown>) }))
          .filter((s: Record<string, unknown>) => s.active !== false)
          .sort((a: Record<string, unknown>, b: Record<string, unknown>) => (Number(a.order) || 0) - (Number(b.order) || 0))
          .map((s: Record<string, unknown>) => ({
            id: s.id as string,
            badge: (s.badge as string) ?? "",
            headline: (s.headline as string) ?? "",
            subheadline: (s.subheadline as string) ?? "",
            ctaText: (s.ctaText as string) ?? "",
            ctaLink: (s.ctaLink as string) ?? "",
            ctaText2: (s.ctaText2 as string) ?? "",
            ctaLink2: (s.ctaLink2 as string) ?? "",
            stats: Array.isArray(s.stats) ? (s.stats as { value: string; label: string }[]) : [],
            imageUrl: (s.imageUrl as string) ?? "",
            order: Number(s.order) || 0,
          }));
        setSlides(items);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { slides, loading };
}
