"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { DEFAULT_VIDEOS, type Video } from "@/data/videosData";

export type { Video };

function extractYouTubeId(url?: string): string {
  if (!url) return "";
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : "";
}

export function useVideos(): { videos: Video[]; loading: boolean } {
  const [videos, setVideos] = useState<Video[]>(DEFAULT_VIDEOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "videoLectures"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const fetched = snapshot.docs
          .map((doc, idx) => {
            const data = doc.data() as Record<string, unknown>;
            const videoId =
              (data.videoId as string) || extractYouTubeId(data.youtubeUrl as string);
            if (!videoId) return null;

            return {
              id: idx + 1,
              title: (data.title as string) ?? "",
              subtitle: (data.subtitle as string) ?? "",
              thumbnail:
                (data.thumbnailUrl as string) ||
                `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              duration: (data.duration as string) ?? "",
              views: (data.views as string) ?? "",
              tag: (data.tag as string) ?? "",
              videoId,
            } as Video;
          })
          .filter((v): v is Video => v !== null);

        if (fetched.length > 0) setVideos(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { videos: loading ? DEFAULT_VIDEOS : videos, loading };
}
