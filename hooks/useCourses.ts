"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export interface Course {
  title: string;
  tagline: string;
  image: string;
  tag: string;
  tagColor?: string;
  category: string;
  btnColor?: string;
  enrolledCount: string;
  liveCount: string;
  rating: number;
  branch: string;
  exam: string;
  duration: string;
  eligibility: string;
  language: string;
  mentorship: string;
  price: string;
  originalPrice: string;
  discount: string;
  features: string[];
  enrollLink: string;
}

export function useCourses(defaultCourses: Course[]): { courses: Course[]; loading: boolean } {
  const [courses, setCourses] = useState<Course[]>(defaultCourses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "courses"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const fetched = snapshot.docs.map((doc) => {
          const { imageUrl, ...rest } = doc.data() as Record<string, unknown>;
          return {
            ...rest,
            image: imageUrl,
          } as Course;
        });

        setCourses(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { courses: loading ? defaultCourses : courses, loading };
}
