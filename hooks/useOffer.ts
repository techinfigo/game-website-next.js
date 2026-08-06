"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { DEFAULT_OFFER, type Offer } from "@/data/offerData";

export type { Offer };
export { DEFAULT_OFFER };

export function useOffer(): { offer: Offer; loading: boolean } {
  const [offer, setOffer] = useState<Offer>(DEFAULT_OFFER);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "offers"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const offers = snapshot.docs.map((doc) => doc.data() as Record<string, unknown>);
        const picked = offers.find((data) => data.active === true) ?? offers[0];

        setOffer({
          badge: (picked.badge as string) ?? DEFAULT_OFFER.badge,
          title: (picked.title as string) ?? DEFAULT_OFFER.title,
          description: (picked.description as string) ?? DEFAULT_OFFER.description,
          ctaText: (picked.ctaText as string) ?? DEFAULT_OFFER.ctaText,
          ctaLink: (picked.ctaLink as string) ?? DEFAULT_OFFER.ctaLink,
          imageUrl: (picked.imageUrl as string) ?? DEFAULT_OFFER.imageUrl,
          expiryDate: (picked.expiryDate as string) ?? DEFAULT_OFFER.expiryDate,
          active: (picked.active as boolean) ?? DEFAULT_OFFER.active,
        });
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { offer: loading ? DEFAULT_OFFER : offer, loading };
}
