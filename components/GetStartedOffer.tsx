
'use client';

import React from 'react';
import { ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const GetStartedOffer: React.FC = () => {
  return (
    <section className="py-16 px-8 md:px-10 lg:px-12 bg-white">
      <div className="max-w-[1200px] mx-auto">
         <div className="bg-[#075d63] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl">
            
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f2c537]/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
               
               <div className="lg:w-1/2 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2c537] text-black text-xs font-black uppercase tracking-widest rounded-full mb-6">
                     <Zap size={14} fill="currentColor" /> Limited Time Offer
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                     Start Your Preparation <br/>
                     <span className="text-[#f2c537]">Today</span>
                  </h2>
                  <p className="text-teal-100 text-lg mb-8 leading-relaxed font-medium">
                     Don&apos;t wait for the right moment. The best time to start your GATE & ESE journey is now. Get flat <span className="text-white font-bold">30% OFF</span> on Foundation Batches.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-10">
                     {['1200+ Hrs Content', '1:1 Mentorship', 'Hardcopy Notes'].map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
                           <CheckCircle2 size={16} className="text-[#f2c537]" />
                           <span className="text-sm font-bold">{feature}</span>
                        </div>
                     ))}
                  </div>

                  <button className="bg-white text-[#075d63] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1 flex items-center gap-2 group">
                     Enroll Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>

               <div className="lg:w-[40%] relative">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
                     <p className="text-teal-200 text-sm font-bold uppercase tracking-wider mb-2">Offer Ends In</p>
                     <div className="flex justify-center gap-4 text-white mb-6">
                        <div className="text-center">
                           <div className="text-3xl font-black bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-2">02</div>
                           <span className="text-[10px] uppercase font-bold text-teal-200">Days</span>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl font-black bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-2">14</div>
                           <span className="text-[10px] uppercase font-bold text-teal-200">Hours</span>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl font-black bg-white/20 rounded-lg w-16 h-16 flex items-center justify-center mb-2">45</div>
                           <span className="text-[10px] uppercase font-bold text-teal-200">Mins</span>
                        </div>
                     </div>
                     <p className="text-xs text-teal-200 opacity-80">*Terms & Conditions Apply</p>
                  </div>
               </div>

            </div>
         </div>
      </div>
    </section>
  );
};

export default GetStartedOffer;
