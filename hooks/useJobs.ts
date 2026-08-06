"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { DEFAULT_JOBS, type Job } from "@/data/jobsData";

export type { Job };

export function useJobs(): { jobs: Job[]; loading: boolean } {
  const [jobs, setJobs] = useState<Job[]>(DEFAULT_JOBS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "jobUpdates"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const fetched = snapshot.docs.map((doc, idx) => {
          const data = doc.data() as Record<string, unknown>;
          return {
            id: idx + 1,
            notification: data.notification,
            eligibility: data.eligibility,
            branches: data.branches,
            startDate: data.startDate,
            endDate: data.endDate,
            status: data.status,
            pdfLink: data.pdfLink,
            usefulLinks: data.usefulLinks,
            recommendedCourse: data.recommendedCourse,
          } as Job;
        });

        setJobs(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { jobs: loading ? DEFAULT_JOBS : jobs, loading };
}
