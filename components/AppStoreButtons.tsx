'use client';

import React from 'react';
import { Play, Apple } from 'lucide-react';

interface AppStoreButtonsProps {
  className?: string;
}

const ANDROID_APP_URL = 'https://clppenny.page.link/cTBm';
const IOS_APP_URL = 'https://apps.apple.com/in/app/myinstitute/id1472483563';

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({ className = '' }) => (
  <div className={`flex flex-wrap items-center gap-4 ${className}`}>
    <a
      href={ANDROID_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5"
    >
      <Play size={26} fill="currentColor" />
      <div className="text-left leading-tight">
        <p className="text-[9px] uppercase tracking-wider text-white/70">Get it on</p>
        <p className="text-base font-black">Google Play</p>
      </div>
    </a>
    <a
      href={IOS_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all shadow-lg hover:-translate-y-0.5"
    >
      <Apple size={26} fill="currentColor" />
      <div className="text-left leading-tight">
        <p className="text-[9px] uppercase tracking-wider text-white/70">Download on the</p>
        <p className="text-base font-black">App Store</p>
      </div>
    </a>
  </div>
);

export default AppStoreButtons;
