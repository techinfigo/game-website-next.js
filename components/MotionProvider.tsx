'use client';

import React, { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';

/**
 * Reduces framer-motion work on small screens only.
 *
 * On phones (viewport <= 768px) we set reducedMotion="always", which makes
 * framer-motion skip transform/layout animations and snap elements to their
 * final position. Opacity fade-ins still run (framer treats them as safe), so
 * nothing stays hidden and the page looks the same — it just does far less
 * main-thread animation work, which helps mobile performance.
 *
 * On desktop it stays "never" — full animations, design completely unchanged.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState<'always' | 'never'>(() => {
    if (typeof window !== 'undefined') {
      try {
        if (window.matchMedia('(max-width: 768px)').matches) return 'always';
      } catch (_) {}
    }
    return 'never';
  });

  useEffect(() => {
    let mql: MediaQueryList;
    try {
      mql = window.matchMedia('(max-width: 768px)');
    } catch (_) {
      return;
    }
    const update = () => setReduced(mql.matches ? 'always' : 'never');
    update();
    // addEventListener is the modern API; fall back for older Safari.
    if (mql.addEventListener) mql.addEventListener('change', update);
    else mql.addListener(update);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener('change', update);
      else mql.removeListener(update);
    };
  }, []);

  return <MotionConfig reducedMotion={reduced}>{children}</MotionConfig>;
}
