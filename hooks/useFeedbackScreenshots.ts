'use client';

import { useEffect, useState } from 'react';
import { loadFirebase } from '@/lib/loadFirebase';

export interface FeedbackScreenshot {
  id: string | number;
  img: string;
  caption: string;
  type: 'whatsapp';
}

// Shown until the admin "Feedback Screenshots" section has entries. Mirrors the
// screenshots that ship in /public (whatsapp-result-1..12).
export const DEFAULT_FEEDBACK_SCREENSHOTS: FeedbackScreenshot[] = Array.from(
  { length: 12 },
  (_, i) => ({
    id: i + 1,
    img: `/whatsapp-result-${i + 1}.png`,
    caption: `Outstanding results with Gaurav Babu Sir's mentorship! Student feedback #${i + 1}`,
    type: 'whatsapp' as const,
  })
);

export function useFeedbackScreenshots(): { screenshots: FeedbackScreenshot[]; loading: boolean } {
  const [screenshots, setScreenshots] = useState<FeedbackScreenshot[]>(DEFAULT_FEEDBACK_SCREENSHOTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    loadFirebase()
      .then(({ db, firestore: { collection, getDocs } }) => getDocs(collection(db, 'feedbackScreenshots')))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;
        const fetched = snapshot.docs
          .map((doc) => {
            const data = doc.data() as Record<string, unknown>;
            const img = (data.imageUrl as string) || '';
            if (!img) return null;
            return {
              id: doc.id,
              img,
              caption: (data.caption as string) || '',
              type: 'whatsapp' as const,
            } as FeedbackScreenshot;
          })
          .filter((s): s is FeedbackScreenshot => s !== null);
        if (fetched.length > 0) setScreenshots(fetched);
      })
      .catch(console.error)
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { screenshots, loading };
}
