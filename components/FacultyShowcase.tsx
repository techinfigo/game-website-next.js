'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const FacultyShowcase: React.FC = () => {
  return (
    <section className="py-8 lg:py-10 bg-slate-300 overflow-hidden relative border-t border-slate-300">
       
       <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
             
             {/* Text Content - Width 42% */}
             <div className="lg:w-[42%] order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gameTeal/10 text-gameTeal text-[10px] font-black uppercase tracking-widest rounded-full mb-3">
                   <Award size={12} /> World Class Faculty
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 leading-tight">
                   Learn From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-600">Industry Leaders</span>
                </h2>
                
                <p className="text-sm md:text-base leading-relaxed mb-4 text-slate-600">
                   <strong className="text-slate-900">Gaurav Babu Sir</strong>, a seasoned Mechanical & Civil Expert with <span className="text-gameGoldDark font-black">13+ Years of experience</span> in teaching, has successfully cracked exams like GATE, IOCL, BPCL, and Ministry of Defence.
                </p>

                <div className="space-y-3 mb-6">
                   {[
                      { title: "Concept Telling", desc: "Collaborative approach simplifying complex topics." },
                      { title: "Proven Track Record", desc: "Consistent top ranks in GATE & ESE over the decade." },
                      { title: "Industry Expertise", desc: "Faculty with real-world PSU & Industrial experience." }
                   ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                         <div className="mt-1 w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gameTeal shrink-0 group-hover:bg-gameTeal group-hover:text-white group-hover:border-gameTeal transition-all shadow-sm">
                            <CheckCircle2 size={18} />
                         </div>
                         <div>
                            <h4 className="text-slate-900 font-black text-base">{item.title}</h4>
                            <p className="text-xs text-slate-500 leading-snug font-bold">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>

                <div className="text-slate-600 text-sm leading-relaxed mb-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                   <p className="mb-3 font-bold">
                      Alongside the renowned <strong className="text-slate-900">Gaurav Babu Sir</strong>, we have assembled the finest faculty from the Industry.
                   </p>
                   <p className="font-bold">
                      Together, we are committed to guiding you to achieve your dreams and excel in competitive exams.
                   </p>
                </div>

                <button className="bg-gameTeal text-white px-8 py-3.5 rounded-xl font-black text-base uppercase tracking-wider shadow-xl shadow-gameTeal/20 hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center gap-3 group">
                   View All Faculties <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>

             {/* Visual Composition - Width 58% */}
             <div className="lg:w-[58%] relative order-1 lg:order-2">
                
                {/* Desktop Layout (Collage) */}
                <div className="hidden lg:block relative h-[440px] w-full">
                   
                   {/* Dotted Pattern Background */}
                   <div className="absolute top-0 right-10 w-64 h-64 opacity-30 pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
                   </div>

                   {/* Secondary Image (Back) */}
                   <div className="absolute top-10 right-0 w-[55%] h-[340px] z-10">
                      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                         <Image 
                            src="/about-faculty-back.png" 
                            fill
                            className="object-cover" 
                            alt="Senior Faculty" 
                            referrerPolicy="no-referrer"
                         />
                      </div>

                      {/* Floating Badge Right (White) */}
                      <div className="absolute -bottom-4 -right-4 bg-white p-3.5 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-30 animate-[float_4s_ease-in-out_infinite_1s]">
                         <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                               {[1,2,3].map(i => (
                                  <div key={i} className="relative w-9 h-9 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                                     <Image 
                                       src={`https://i.pravatar.cc/100?img=${i+25}`} 
                                       fill 
                                       className="object-cover" 
                                       alt="Student" 
                                       referrerPolicy="no-referrer"
                                     />
                                  </div>
                               ))}
                            </div>
                            <div className="text-left">
                                <div className="text-gameTeal font-black text-lg leading-none">100k+</div>
                                <div className="text-[9px] font-black text-slate-400 uppercase tracking-wide">Students Mentored</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Main Image (Front) */}
                   <div className="absolute top-0 left-4 w-[60%] h-[380px] z-20">
                      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform -rotate-2 hover:rotate-0 transition-all duration-500 group">
                         <Image 
                            src="/about-faculty-front.png" 
                            fill
                            priority
                            className="object-cover group-hover:scale-105 transition-transform duration-700" 
                            alt="Gaurav Babu Sir" 
                            referrerPolicy="no-referrer"
                         />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 pt-16">
                           <p className="text-white font-black text-xl">Gaurav Babu Sir</p>
                        </div>
                      </div>
                      
                      {/* Floating Badge Left (Black) */}
                      <div className="absolute bottom-6 -left-8 bg-[#0f172a] text-white p-4 rounded-2xl shadow-2xl shadow-slate-900/30 border border-white/10 z-30 flex items-center gap-4 animate-[float_4s_ease-in-out_infinite]">
                         <div className="bg-gameGold text-black w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl">13+</div>
                         <div>
                            <div className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-0.5">Years of</div>
                            <div className="font-black text-base leading-none text-white">Excellence</div>
                         </div>
                      </div>
                   </div>

                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden flex flex-col gap-6 mt-8">
                   <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                      <Image 
                        src="/about-faculty-front.png" 
                        fill
                        className="object-cover"
                        alt="Gaurav Babu Sir" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 left-4 right-auto bg-[#0f172a] text-white p-3.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-3 max-w-[180px]">
                         <div className="bg-gameGold text-black w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg">13+</div>
                         <div>
                            <div className="text-[9px] text-slate-400 uppercase font-black tracking-wider">Years of</div>
                            <div className="font-black text-sm leading-none">Excellence</div>
                         </div>
                      </div>
                   </div>
                   <div className="relative w-[90%] aspect-[4/5] self-end rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                      <Image 
                        src="/about-faculty-back.png" 
                        fill
                        className="object-cover"
                        alt="Senior Faculty" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                         <div className="text-gameTeal font-black text-xl">100k+</div>
                         <div className="text-[9px] font-black uppercase tracking-wider text-slate-500">Students<br/>Mentored</div>
                      </div>
                   </div>
                </div>

             </div>

          </div>
       </div>
    </section>
  );
};

export default FacultyShowcase;
