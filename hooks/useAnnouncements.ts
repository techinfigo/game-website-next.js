"use client";

import { useEffect, useState } from "react";
import { loadFirebase } from "@/lib/loadFirebase";

export interface Announcement {
  id: string;
  title: string;
  message: string;
  date?: string;
}

/**
 * Reads the admin-managed "announcements" collection and returns the latest
 * active announcement (by date), used for the site-wide welcome popup. Returns
 * null when none are active, so the popup simply doesn't show.
 */
export function useAnnouncements(): { announcement: Announcement | null; loading: boolean } {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, "announcements")))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;
        const items = snapshot.docs
          .map((doc) => ({ id: doc.id, ...(doc.data() as Record<string, unknown>) }))
          .filter((a: Record<string, unknown>) => a.active !== false)
          .map((a: Record<string, unknown>) => ({
            id: a.id as string,
            title: (a.title as string) ?? "",
            message: (a.message as string) ?? "",
            date: (a.date as string) ?? "",
          }))
          .filter((a) => a.title || a.message);
        // Newest first by date, falling back to document order.
        items.sort((a, b) => (Date.parse(b.date || "") || 0) - (Date.parse(a.date || "") || 0));
        if (items.length > 0) setAnnouncement(items[0]);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { announcement, loading };
}
