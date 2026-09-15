"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { DEFAULT_JOBS, type Job } from "@/data/jobsData";

export type { Job };

// Newest-first ordering: sort by createdAt (Firestore timestamp) when available.
// DEFAULT_JOBS has no createdAt and is appended oldest-last, so fall back to
// reversing it — matching the live site's previous [...jobs].reverse() behavior.
function sortNewestFirst<T extends { createdAt?: number }>(list: T[]): T[] {
  const hasTimestamps = list.some((job) => typeof job.createdAt === "number");
  if (hasTimestamps) {
    return [...list].sort((a, b) => (b.createdAt ?? 0) - (a.createdAt ?? 0));
  }
  return [...list].reverse();
}

function toMillis(value: unknown): number | undefined {
  if (value == null) return undefined;
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const t = Date.parse(value);
    return Number.isNaN(t) ? undefined : t;
  }
  if (typeof (value as { toMillis?: () => number }).toMillis === "function") {
    return (value as { toMillis: () => number }).toMillis();
  }
  if (typeof (value as { seconds?: number }).seconds === "number") {
    return (value as { seconds: number }).seconds * 1000;
  }
  return undefined;
}

const SORTED_DEFAULT_JOBS = sortNewestFirst(DEFAULT_JOBS);

export function useJobs(): { jobs: Job[]; loading: boolean } {
  const [jobs, setJobs] = useState<Job[]>(SORTED_DEFAULT_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "jobUpdates"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const fetched = snapshot.docs.map((doc) => {
          const data = doc.data() as Record<string, unknown>;
          return {
            notification: data.notification,
            eligibility: data.eligibility,
            branches: data.branches,
            startDate: data.startDate,
            endDate: data.endDate,
            status: data.status,
            pdfLink: data.pdfLink,
            usefulLinks: data.usefulLinks,
            recommendedCourse: data.recommendedCourse,
            createdAt: toMillis(data.createdAt),
          } as Omit<Job, "id">;
        });

        const ordered = sortNewestFirst(fetched).map((job, idx) => ({ ...job, id: idx + 1 }) as Job);

        setJobs(ordered);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { jobs: loading ? SORTED_DEFAULT_JOBS : jobs, loading };
}
