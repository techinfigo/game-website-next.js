"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export interface Review {
  id: string;
  name: string;
  role: string;
  quote: string;
  image?: string;
  rating: number;
}

export function useReviews(): { reviews: Review[]; loading: boolean } {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "reviews"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const fetched = snapshot.docs.map((doc) => {
          const data = doc.data() as Record<string, unknown>;
          const course = (data.course as string) ?? "";
          const branch = (data.branch as string) ?? "";

          return {
            id: doc.id,
            name: (data.studentName as string) ?? "Student",
            role: `${course} ${branch ? `(${branch})` : ""}`.trim(),
            quote: (data.reviewText as string) ?? "",
            image: data.photoUrl as string | undefined,
            rating: (data.rating as number) ?? 5,
          } as Review;
        });

        setReviews(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { reviews, loading };
}
