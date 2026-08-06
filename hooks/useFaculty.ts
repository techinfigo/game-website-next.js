"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Sparkles } from "lucide-react";
import { db } from "@/firebase";
import { DEFAULT_CHIEF_MENTOR, DEFAULT_FACULTY, type FacultyMember } from "@/data/facultyData";

export type { FacultyMember };

export function useFaculty(): {
  chiefMentor: FacultyMember;
  facultyMembers: FacultyMember[];
  loading: boolean;
} {
  const [chiefMentor, setChiefMentor] = useState<FacultyMember>(DEFAULT_CHIEF_MENTOR);
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>(DEFAULT_FACULTY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "faculty"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const docs = snapshot.docs.map((doc) => {
          const data = doc.data() as Record<string, unknown>;
          const stats = Array.isArray(data.stats)
            ? (data.stats as unknown[]).map((label) => ({
                label: String(label),
                icon: Sparkles,
              }))
            : [];

          return {
            name: (data.name as string) ?? "",
            role: (data.role as string) ?? "",
            expLabel: (data.expLabel as string) ?? "",
            exp: (data.experience as string) ?? "",
            img: (data.photoUrl as string) ?? "",
            stats,
            isChiefMentor: data.isChiefMentor === true,
          };
        });

        const chief = docs.find((d) => d.isChiefMentor);
        const rest = docs.filter((d) => d !== chief);

        if (chief) setChiefMentor(chief);
        if (rest.length > 0) setFacultyMembers(rest);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return {
    chiefMentor: loading ? DEFAULT_CHIEF_MENTOR : chiefMentor,
    facultyMembers: loading ? DEFAULT_FACULTY : facultyMembers,
    loading,
  };
}
