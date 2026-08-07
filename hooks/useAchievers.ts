"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import {
  DEFAULT_VIDEO_SHORTS,
  DEFAULT_GATE_TOPPERS,
  type VideoShort,
  type GateTopper,
  type RankerAchiever,
  type JobSelectionAchiever,
} from "@/data/achieversData";

export type { VideoShort, GateTopper, RankerAchiever, JobSelectionAchiever };

function extractYouTubeId(url?: string): string {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : "";
}

export function useAchievers(): {
  videoShorts: VideoShort[];
  gateToppers: GateTopper[];
  rankers: RankerAchiever[];
  jobSelections: JobSelectionAchiever[];
  loading: boolean;
} {
  const [videoShorts, setVideoShorts] = useState<VideoShort[]>(DEFAULT_VIDEO_SHORTS);
  const [gateToppers, setGateToppers] = useState<GateTopper[]>(DEFAULT_GATE_TOPPERS);
  const [rankers, setRankers] = useState<RankerAchiever[]>([]);
  const [jobSelections, setJobSelections] = useState<JobSelectionAchiever[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "achievers"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const docsWithIds = snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data() as Record<string, unknown>,
        }));
        const docs = docsWithIds.map((d) => d.data);

        const shorts = docs
          .filter((data) => data.type === "Video Short")
          .map((data, idx) => {
            const videoId =
              (data.videoId as string) || extractYouTubeId(data.youtubeUrl as string);
            return {
              id: idx + 1,
              type: "Video Short" as const,
              name: (data.name as string) ?? "",
              videoId,
            };
          })
          .filter((s) => s.videoId);

        const toppers = docs
          .filter((data) => data.type === "GATE Topper")
          .map((data, idx) => {
            const youtubeId = extractYouTubeId(data.youtubeUrl as string);
            const image =
              (data.photoUrl as string) ||
              (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "");
            return {
              id: idx + 1,
              type: "GATE Topper" as const,
              name: (data.name as string) ?? "",
              rank: (data.achievement as string) ?? "",
              exam: (data.exam as string) ?? "",
              image,
            };
          });

        const rankerDocs = docsWithIds
          .filter((d) => d.data.type === "Ranker")
          .map(({ id, data }) => {
            const youtubeId = extractYouTubeId(data.youtubeUrl as string);
            const image =
              (data.photoUrl as string) ||
              (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "");
            return {
              id,
              type: "Ranker" as const,
              name: (data.name as string) ?? "",
              image,
              college: (data.college as string) ?? "",
              organisation: (data.organisation as string) ?? "",
              selectionYear: (data.selectionYear as string) || (data.year as string) || "",
            };
          });

        const jobDocs = docsWithIds
          .filter((d) => d.data.type === "Job Selection")
          .map(({ id, data }) => {
            const youtubeId = extractYouTubeId(data.youtubeUrl as string);
            const image =
              (data.photoUrl as string) ||
              (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : "");
            return {
              id,
              type: "Job Selection" as const,
              name: (data.name as string) ?? "",
              image,
              organisation: (data.organisation as string) ?? "",
              designation: (data.designation as string) ?? "",
              branch: (data.branch as string) ?? "",
              selectionYear: (data.selectionYear as string) || (data.year as string) || "",
            };
          });

        if (shorts.length > 0) setVideoShorts(shorts);
        if (toppers.length > 0) setGateToppers(toppers);
        if (rankerDocs.length > 0) setRankers(rankerDocs);
        if (jobDocs.length > 0) setJobSelections(jobDocs);
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
    videoShorts: loading ? DEFAULT_VIDEO_SHORTS : videoShorts,
    gateToppers: loading ? DEFAULT_GATE_TOPPERS : gateToppers,
    rankers: loading ? [] : rankers,
    jobSelections: loading ? [] : jobSelections,
    loading,
  };
}
