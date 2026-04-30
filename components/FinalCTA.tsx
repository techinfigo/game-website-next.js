'use client';

import React from 'react';
import { Smartphone } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gameTeal text-white relative overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
       <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-6">Start Your Journey Today</h2>
          <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
             Choose the course best suited to your timeline and goals, and let GAME be your partner in achieving a top GATE score.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="https://clppenny.page.link/cTBm" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-gameTeal px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-xl flex items-center justify-center gap-2"
             >
                <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                   <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-127.3 60.1-60.1L104.6 499z" />
                </svg> Android App
             </a>
             <a 
               href="https://apps.apple.com/in/app/myinstitute/id1472483563" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-gameBlack text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-900 transition-all shadow-xl flex items-center justify-center gap-2"
             >
                <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                   <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-73.7-114.8-31.7-131.8zM232.1 56.9c20.7-25.2 34.2-59.8 30.3-94.5-29.9 1.2-66.1 20.3-87.5 45.3-19.2 22.3-35.9 57.7-31.4 91.4 33.1 2.6 67.9-18.9 88.6-42.2z" />
                </svg> iOS App
             </a>
          </div>
       </div>
    </section>
  );
};

export default FinalCTA;
