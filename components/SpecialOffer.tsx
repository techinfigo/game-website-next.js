
'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Video, Lightbulb, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialOffer: React.FC = () => {
  return (
    <section className="bg-[#18181b] text-white py-8 md:py-12 relative overflow-hidden">
       
       <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
             
             {/* Left Text Content */}
             <div className="relative z-20">
                
                {/* Floating Video Icon (Top Center relative to text area) */}
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 text-blue-500 hidden md:block"
                >
                   <div className="bg-[#27272a] p-3 rounded-2xl border border-white/10 shadow-xl transform -rotate-12">
                      <Video size={40} fill="currentColor" className="text-blue-500" />
                   </div>
                   {/* Chat bubble tail */}
                   <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#27272a] transform rotate-45 border-r border-b border-white/10"></div>
                </motion.div>

                {/* Floating Red Arrow - Pointing to Heading */}
                <motion.div 
                  animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 right-0 md:-right-4 text-[#ff4757] hidden md:block z-30"
                >
                   {/* Navigation icon rotated to point at text */}
                   <Navigation size={42} className="transform -rotate-[110deg] fill-current drop-shadow-2xl" strokeWidth={0} />
                   
                   {/* Dashed trail effect */}
                   <svg className="absolute top-2 -right-16 w-24 h-12 text-slate-500/40 pointer-events-none transform -rotate-12" viewBox="0 0 100 50">
                      <path d="M100,10 Q50,40 0,25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                   </svg>
                </motion.div>

                <div className="inline-block bg-[#f2c537] text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg shadow-yellow-500/20">
                   Limited-Time Power Deal
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-3 leading-[1.1] tracking-tight relative z-10 [text-wrap:balance]">
                   Get Upto <span className="text-[#f2c537]">30% OFF</span> & Supercharge Your Exam Prep
                </h2>
                
                <p className="text-slate-400 text-base mb-6 font-medium max-w-lg leading-relaxed">
                   Score higher, stress less – your AIR 1 journey starts NOW!
                </p>

                <button className="bg-[#075d63] hover:bg-[#054a4f] text-white pl-8 pr-2 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-4 transition-all shadow-[0_0_30px_rgba(7,93,99,0.4)] hover:shadow-[0_0_40px_rgba(7,93,99,0.6)] hover:-translate-y-1 group">
                   GRAB THE DEAL 
                   <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-[#f2c537] group-hover:text-black transition-colors">
                      <ArrowRight size={18} />
                   </div>
                </button>

                {/* Timer Section */}
                <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                   <div className="bg-transparent border border-slate-700 px-6 py-3 rounded-xl text-[#075d63] text-xs font-black uppercase tracking-widest shadow-inner">
                      Offer Ends In:
                   </div>
                   
                   <div className="flex items-center gap-6 md:gap-8">
                      <div className="text-center">
                         <div className="text-4xl font-black text-white leading-none">00</div>
                         <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-2">Days</div>
                      </div>
                      <div className="h-10 w-[1px] bg-slate-700/50"></div>
                      <div className="text-center">
                         <div className="text-4xl font-black text-white leading-none">00</div>
                         <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-2">Hours</div>
                      </div>
                      <div className="h-10 w-[1px] bg-slate-700/50"></div>
                      <div className="text-center">
                         <div className="text-4xl font-black text-white leading-none">00</div>
                         <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-2">Minutes</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Right Image Content */}
             <div className="relative h-full min-h-[250px] flex items-center justify-center md:justify-end">
                
                {/* Yellow Glow Background */}
                <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f2c537] rounded-full blur-[120px] opacity-20 z-0"></div>
                
                {/* Lightbulb Idea (Far Right Edge) */}
                <div className="absolute top-1/2 right-0 translate-x-1/2 text-orange-300 z-20 hidden lg:block">
                   <div className="bg-[#27272a] p-3 rounded-full border-4 border-[#18181b] shadow-xl">
                      <Lightbulb size={32} fill="currentColor" />
                   </div>
                </div>

                {/* Group Student Image */}
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-8 border-white/5 shadow-2xl w-[260px] md:w-[340px] aspect-[4/5]">
                   <Image 
                      src="/offer-image.jpg" 
                      alt="Special Offer" 
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                   />
                   {/* Gradient Overlay for integration */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] via-transparent to-transparent opacity-20"></div>
                </div>
             </div>

          </div>
       </div>
    </section>
  );
};

export default SpecialOffer;
