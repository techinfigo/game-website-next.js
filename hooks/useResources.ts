"use client";

import { useEffect, useState } from "react";
import { loadFirebase } from "@/lib/loadFirebase";

export interface Resource {
  id: string;
  resourceKind: "free" | "paid";
  category: string;
  title: string;
  description: string;
  type: string; // pdf, video, note, pyq, ...
  fileOrLink: string;
  image?: string;
  action?: string;
  price?: string;
  tag?: string;
  examTag?: string;
}

/**
 * Reads the admin-managed `resources` collection (the "Free Resources" page in
 * the admin panel) so the public resources page shows real content.
 */
export function useResources(): { resources: Resource[]; loading: boolean } {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, "resources")))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;
        const fetched = snapshot.docs.map((doc) => {
          const data = doc.data() as Record<string, unknown>;
          return {
            id: doc.id,
            resourceKind: (data.resourceKind as "free" | "paid") ?? "free",
            category: (data.category as string) ?? "",
            title: (data.title as string) ?? "",
            description: (data.description as string) ?? "",
            type: (data.type as string) ?? "pdf",
            fileOrLink: (data.fileOrLink as string) ?? "",
            image: (data.image as string) ?? "",
            action: (data.action as string) ?? "Open",
            price: (data.price as string) ?? "",
            tag: (data.tag as string) ?? "",
            examTag: (data.examTag as string) ?? "",
          } as Resource;
        });
        if (fetched.length > 0) setResources(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { resources, loading };
}
