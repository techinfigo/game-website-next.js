"use client";

import { useEffect, useState } from "react";
import { loadFirebase } from "@/lib/loadFirebase";

export interface PaidPdf {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  price: number;
  examTag: string;
  category: string;
  branch: string;
  subject: string;
  resourceType: string;
  pages?: number;
  sampleUrl?: string;
}

/**
 * Reads the PDF Store's `pdfs` collection and keeps only the published, paid
 * ones — so the public website can promote them and link buyers to the portal.
 */
export function usePaidPdfs(): { pdfs: PaidPdf[]; loading: boolean } {
  const [pdfs, setPdfs] = useState<PaidPdf[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, "pdfs")))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;
        const items = snapshot.docs
          .map((doc) => ({ id: doc.id, ...(doc.data() as Record<string, unknown>) }))
          .filter((p: any) => p.published !== false && p.isFree !== true && Number(p.price) > 0)
          .map((p: any) => ({
            id: p.id,
            title: (p.title as string) ?? "",
            description: (p.description as string) ?? "",
            thumbnailUrl: (p.thumbnailUrl as string) ?? "",
            price: Number(p.price) || 0,
            examTag: (p.examTag as string) ?? "",
            category: (p.category as string) ?? "PDF",
            branch: (p.branch as string) ?? "",
            subject: (p.subject as string) ?? "",
            resourceType: (p.resourceType as string) ?? "",
            pages: Number(p.pages) || undefined,
            sampleUrl: (p.sampleUrl as string) ?? "",
          }));
        setPdfs(items);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { pdfs, loading };
}
