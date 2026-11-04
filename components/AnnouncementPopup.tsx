'use client';

import React, { useEffect, useState } from 'react';
import { X, Megaphone } from 'lucide-react';
import { useAnnouncements } from '@/hooks/useAnnouncements';

/**
 * Site-wide welcome popup. Shows the latest active announcement (managed in the
 * admin panel) shortly after the visitor lands, once per browser session per
 * announcement — so a new announcement re-appears, but it never nags on every
 * navigation. Renders nothing when there is no active announcement.
 */
export default function AnnouncementPopup() {
  const { announcement } = useAnnouncements();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!announcement) return;
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem('gameAnnouncementDismissed') === announcement.id;
    } catch {
      /* private mode / blocked storage — just show it */
    }
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, [announcement]);

  const close = () => {
    setOpen(false);
    try {
      if (announcement) sessionStorage.setItem('gameAnnouncementDismissed', announcement.id);
    } catch {
      /* ignore */
    }
  };

  if (!open || !announcement) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Announcement"
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close announcement"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-gameTeal/10 text-gameTeal flex items-center justify-center mb-5">
          <Megaphone size={26} />
        </div>

        {announcement.title && (
          <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{announcement.title}</h3>
        )}
        {announcement.message && (
          <p className="text-slate-600 leading-relaxed whitespace-pre-line">{announcement.message}</p>
        )}

        <button
          onClick={close}
          className="mt-6 w-full bg-gameTeal text-white py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gameTealDark transition-all"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
