'use client';

import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const GateEseIntro: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
       <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center">
          <div className="inline-block mb-6">
             <button className="flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-900 px-6 py-3 rounded-full hover:bg-slate-200 transition-all font-bold">
                Select Branch <ChevronDown size={16} />
             </button>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
             GATE / ESE <span className="text-gameTeal">Preparation</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-10 font-medium">
             <span className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">Build Concepts</span>
             <span className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">Sharpen Skills</span>
             <span className="px-4 py-2 bg-slate-50 rounded-lg border border-slate-200">Latest Pattern</span>
          </div>

          <button className="text-gameTeal font-bold hover:underline flex items-center gap-2 mx-auto">
             Know More About GATE / ESE Exam <ArrowRight size={16} />
          </button>
       </div>
    </section>
  );
};

export default GateEseIntro;