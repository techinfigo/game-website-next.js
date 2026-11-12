'use client';

import { useEffect, useState } from 'react';
import { loadFirebase } from '@/lib/loadFirebase';

export interface StrategyVideo {
  id: string;
  title: string;
  category: string;
  videoId: string;
  thumbnail: string;
}

function extractYouTubeId(url?: string): string {
  if (!url) return '';
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return m ? m[1] : '';
}

// The videos that ship with the page. Used until the admin "Strategy Videos"
// section has entries, then the live list replaces them.
export const DEFAULT_STRATEGY_VIDEOS: StrategyVideo[] = [
  { id: '1', title: 'How to do Parallel Revision?', category: 'Revision', videoId: 'D6HOo41x2Ls', thumbnail: 'https://img.youtube.com/vi/D6HOo41x2Ls/maxresdefault.jpg' },
  { id: '2', title: 'Subject Wise Weightage in GATE Exam', category: 'Exam Strategy', videoId: '1QV1hZ7c68Y', thumbnail: 'https://img.youtube.com/vi/1QV1hZ7c68Y/maxresdefault.jpg' },
  { id: '3', title: 'Crack GATE in 1st Attempt (Main Strategy)', category: 'Motivation', videoId: 'Vv9lARk4vcs', thumbnail: 'https://img.youtube.com/vi/Vv9lARk4vcs/maxresdefault.jpg' },
  { id: '4', title: 'How to Attempt GATE Exam?', category: 'Exam Strategy', videoId: 'bttDewEFDq4', thumbnail: 'https://img.youtube.com/vi/bttDewEFDq4/maxresdefault.jpg' },
  { id: '5', title: 'How to Avoid Silly Mistakes?', category: 'Tips & Tricks', videoId: 'Ta7gKIxxya0', thumbnail: 'https://img.youtube.com/vi/Ta7gKIxxya0/maxresdefault.jpg' },
  { id: '6', title: 'Prepare for Exams with a JOB', category: 'Time Management', videoId: 'gvK9V0trlaw', thumbnail: 'https://img.youtube.com/vi/gvK9V0trlaw/maxresdefault.jpg' },
];

export function useStrategyVideos(): { videos: StrategyVideo[]; loading: boolean } {
  const [videos, setVideos] = useState<StrategyVideo[]>(DEFAULT_STRATEGY_VIDEOS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, 'strategyVideos')))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;
        const fetched = snapshot.docs
          .map((doc) => {
            const data = doc.data() as Record<string, unknown>;
            const videoId = extractYouTubeId(data.youtubeUrl as string);
            if (!videoId) return null;
            return {
              id: doc.id,
              title: (data.title as string) ?? '',
              category: (data.category as string) || 'Strategy',
              videoId,
              thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
            } as StrategyVideo;
          })
          .filter((v): v is StrategyVideo => v !== null);
        if (fetched.length > 0) setVideos(fetched);
      })
      .catch(console.error)
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { videos, loading };
}
