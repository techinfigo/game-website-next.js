'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Users, Trophy, Landmark, Lightbulb, Medal, Briefcase, 
  Target, Award, Layers, Zap, Sparkles, ChevronRight, ChevronLeft, X 
} from 'lucide-react';

// Easily add, modify, or remove faculty members here
export const chiefMentor = { 
  name: "Gaurav Babu Sir", 
  role: "Founder & Chief Mentor",
  expLabel: "13+ YRS EXP.",
  exp: "13+ YEARS OF TEACHING EXCELLENCE",
  img: "/faculty/gaurav-sir2.jpg",
  stats: [
    { label: "Mentored 1 Lakh+ Students", icon: Users },
    { label: "GATE & ESE Expert", icon: Trophy },
    { label: "Mechanical & Civil Guru", icon: Landmark },
    { label: "Visionary Educator", icon: Lightbulb }
  ]
};

export const facultyMembers = [
  { 
    name: "Harshit Agarwal", 
    role: "Senior Mentor",
    expLabel: "10+ YRS EXP.",
    exp: "10+ YEARS OF TEACHING EXPERIENCE",
    img: "/faculty/harshit-sir.png",
    stats: [
      { label: "Achieved ESE AIR 63, 90", icon: Medal },
      { label: "Mentored 50k+ Students", icon: Users },
      { label: "King of Thermal Science", icon: Trophy },
      { label: "ISRO, ONGC, SAIL Letters", icon: Briefcase }
    ]
  },
  { 
    name: "Varun Sir", 
    role: "Thermal Expert",
    expLabel: "9+ YRS EXP.",
    exp: "9+ YEARS OF TEACHING EXPERIENCE",
    img: "/faculty/varun-sir.png",
    stats: [
      { label: "Gate Qualified AIR 80", icon: Medal },
      { label: "60,000+ Students Mentored", icon: Users },
      { label: "Mech Engineering Expert", icon: Award },
      { label: "Industrial Recognized", icon: Briefcase }
    ]
  },
  { 
    name: "Atul Vaish", 
    role: "PSU Specialist",
    expLabel: "10+ YRS EXP.",
    exp: "10+ YEARS OF TEACHING EXPERIENCE",
    img: "/faculty/atul-vaish-sir.png",
    stats: [
      { label: "Fluid Mechanics Expert", icon: Target },
      { label: "Industry Recognition", icon: Award },
      { label: "Mentored 15,000+ students", icon: Users },
      { label: "GATE Top Ranker", icon: Medal }
    ]
  },
  { 
    name: "Aditya Shukla", 
    role: "SOM Expert",
    expLabel: "7+ YRS EXP.",
    exp: "7+ YEARS OF TEACHING EXPERIENCE",
    img: "/faculty/aditya-shukla-sir.png",
    stats: [
      { label: "Strength of Materials Guru", icon: Layers },
      { label: "Problem Solving Pro", icon: Zap },
      { label: "Industrial Expertise", icon: Award },
      { label: "Mentored 8,000+ students", icon: Users }
    ]
  },
  { 
    name: "Abhishek Singh Sir", 
    role: "Civil Engineering Lead",
    expLabel: "11+ YRS EXP.",
    exp: "11+ YEARS OF CIVIL DESIGN & R&D",
    img: "/avatar-1.png",
    stats: [
      { label: "Achieved ESE AIR 12", icon: Medal },
      { label: "Structural Analysis Guru", icon: Layers },
      { label: "Mentored 40k+ Students", icon: Users },
      { label: "Ex-IES Officer, CPWD Dept.", icon: Briefcase }
    ]
  },
  { 
    name: "Priyanka Ma'am", 
    role: "General Aptitude Head",
    expLabel: "8+ YRS EXP.",
    exp: "8+ YEARS OF QUANT & APTITUDE MENTORSHIP",
    img: "/avatar-2.png",
    stats: [
      { label: "Logical Reasoning Specialist", icon: Lightbulb },
      { label: "Tuned 25,000+ Aspirants", icon: Users },
      { label: "Quantitative Aptitude Pro", icon: Target },
      { label: "National Pedagogy Award", icon: Award }
    ]
  },
  { 
    name: "Pradeep Rawat Sir", 
    role: "Electrical Machines Expert",
    expLabel: "12+ YRS EXP.",
    exp: "12+ YEARS OF CORE ELECTRICAL INDUCTION",
    img: "/avatar-3.png",
    stats: [
      { label: "Power Systems Specialist", icon: Layers },
      { label: "BSNL JTO & ESE Merit List", icon: Medal },
      { label: "Mentored 35,000+ Engineers", icon: Users },
      { label: "Ex-PowerGrid Senior Engineer", icon: Briefcase }
    ]
  },
  { 
    name: "Dr. Mukul Dixit", 
    role: "Manufacturing Tech Lead",
    expLabel: "15+ YRS EXP.",
    exp: "15+ YEARS OF POST-GRADUATE R&D",
    img: "/avatar-4.png",
    stats: [
      { label: "Ph.D. in Metrology & Robotics", icon: Landmark },
      { label: "Published 4 Master Manuals", icon: Lightbulb },
      { label: "Material Science Innovator", icon: Target },
      { label: "Inspirational Research Mentor", icon: Trophy }
    ]
  },
  { 
    name: "Neeraj Kumar Sir", 
    role: "Fluid Mechanics Maestro",
    expLabel: "10+ YRS EXP.",
    exp: "10+ YEARS OF GATE & ESE EXCELLENCE",
    img: "/avatar-1.png",
    stats: [
      { label: "GATE Scorer 99.8 Percentile", icon: Medal },
      { label: "Hydraulics & Turbomachinery Pro", icon: Award },
      { label: "Mentored 30k+ GATE Students", icon: Users },
      { label: "Top-Rated Technical Coach", icon: Trophy }
    ]
  },
  { 
    name: "Sanjay Rathi Sir", 
    role: "Electronics & Network Leader",
    expLabel: "16+ YRS EXP.",
    exp: "16+ YEARS OF CORE SCIENTIFIC EDUCATION",
    img: "/avatar-2.png",
    stats: [
      { label: "Superb Network Pedagogy", icon: Sparkles },
      { label: "Ex-IES Officer, Class-1", icon: Briefcase },
      { label: "Mentored over 1 Lakh Engineers", icon: Users },
      { label: "Co-Authored 3 GATE Guidebooks", icon: Lightbulb }
    ]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.8, ease: "easeOut" as const }
};

export default function EducatorsSection() {
  const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);
  const [facultySlide, setFacultySlide] = useState(0);

  const totalSlides = Math.ceil(facultyMembers.length / 2);

  return (
    <div id="educators-spotlight">
      {/* SECTION 8: EDUCATORS - SPOTLIGHT & CAROUSEL REDESIGN */}
      <section className="relative py-8 lg:py-10 flex flex-col justify-center bg-[#0b0c10] overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 bg-graph-paper opacity-[0.03] pointer-events-none invert"></div>
         <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full" id="educators-container">
            
            {/* Header Area */}
            <div className="text-center mb-6 lg:mb-8">
               <motion.div {...fadeInUp}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameTeal/20 border border-gameTeal/30 text-gameTeal font-black text-[10px] uppercase tracking-widest mb-2 whitespace-nowrap">
                     OUR EDUCATORS
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                     Qualified Expertise <br/> <span className="text-gameGold">& Industry Recognition</span>
                  </h2>
                  <p className="text-slate-400 text-sm font-bold max-w-3xl mx-auto leading-relaxed opacity-80">
                     Our highly qualified and experienced faculty members use innovative teaching methods and technology to deliver quality education.
                  </p>
                  <div className="w-12 h-1 bg-gameGold mx-auto rounded-full mt-4"></div>
               </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
               
               {/* CHIEF MENTOR SPOTLIGHT (40%) */}
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedFaculty(chiefMentor)}
                  className="lg:w-[40%] bg-gradient-to-br from-[#1a1c25] to-[#12141c] rounded-3xl overflow-hidden border-2 border-gameGold/20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] group cursor-pointer relative"
               >
                  <div className="absolute top-4 right-4 z-20">
                     <div className="bg-gameGold text-black px-3 py-1 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                        CHIEF MENTOR
                     </div>
                  </div>

                  <div className="h-[280px] lg:h-[340px] relative overflow-hidden">
                     <Image 
                        src={chiefMentor.img} 
                        alt={chiefMentor.name} 
                        fill
                        className="object-cover object-top transition-all duration-1000 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-90"></div>
                     
                     <div className="absolute bottom-4 left-6 right-6">
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-gameGold/20 border border-gameGold/30 rounded-lg mb-2">
                           <Sparkles size={12} className="text-gameGold" />
                           <span className="text-gameGold font-black text-[10px] uppercase tracking-widest">{chiefMentor.expLabel}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-1 leading-none tracking-tighter group-hover:text-gameGold transition-colors">
                           {chiefMentor.name}
                        </h3>
                        <p className="text-gameTeal font-black text-[10px] uppercase tracking-widest">{chiefMentor.role}</p>
                     </div>
                  </div>

                  <div className="p-4 lg:p-5 border-t border-white/5">
                     <p className="text-slate-400 text-xs font-bold leading-relaxed italic mb-4">
                        "Redefining engineering education through visualized teaching and life-changing mentorship."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="bg-gameGold text-black px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg group-hover:bg-white transition-all">
                           View Vision
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gameGold group-hover:text-black transition-all shrink-0">
                           <ChevronRight className="w-4 h-4" strokeWidth={3} />
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* FACULTY CAROUSEL (60%) */}
               <div className="lg:w-[60%] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-3">
                        <Users className="text-gameGold w-4 h-4" /> Expert Faculty Team
                     </h4>
                     <div className="flex gap-2">
                        <button 
                           onClick={() => setFacultySlide(prev => (prev - 1 + totalSlides) % totalSlides)}
                           className="w-8 h-8 rounded-full flex items-center justify-center transition-all border shrink-0 bg-white/10 text-white border-white/10 hover:bg-gameGold hover:border-gameGold hover:text-black"
                        >
                           <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button 
                           onClick={() => setFacultySlide(prev => (prev + 1) % totalSlides)}
                           className="w-8 h-8 rounded-full flex items-center justify-center transition-all border shrink-0 bg-white/10 text-white border-white/10 hover:bg-gameGold hover:border-gameGold hover:text-black"
                        >
                           <ChevronRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>

                  <div className="relative overflow-hidden flex-1">
                     <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
                        initial={false}
                        animate={{ x: 0 }}
                        key={facultySlide}
                     >
                        <AnimatePresence mode="wait">
                           {facultyMembers.slice(facultySlide * 2, facultySlide * 2 + 2).map((fac, i) => (
                              <motion.div 
                                 key={fac.name} 
                                 initial={{ opacity: 0, x: 20 }} 
                                 animate={{ opacity: 1, x: 0 }} 
                                 exit={{ opacity: 0, x: -20 }}
                                 transition={{ delay: i * 0.1 }}
                                 onClick={() => setSelectedFaculty(fac)}
                                 className="bg-[#12141c] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col group hover:border-gameGold/30 transition-all duration-500 cursor-pointer h-full"
                              >
                                 <div className="h-[220px] lg:h-[280px] relative overflow-hidden bg-[#0a0a0a]">
                                    <Image 
                                       src={fac.img} 
                                       alt={fac.name} 
                                       fill
                                       className="object-cover object-top transition-all duration-700 group-hover:scale-105" 
                                       referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-60"></div>
                                 </div>

                                 <div className="p-4 flex-1 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-gameGold/10 border border-gameGold/20 rounded-lg mb-2 w-fit">
                                       <Sparkles size={12} className="text-gameGold" />
                                       <span className="text-gameGold font-black text-[9px] uppercase tracking-widest">{fac.expLabel}</span>
                                    </div>
                                    <h4 className="text-lg font-black text-white mb-0.5 leading-tight group-hover:text-gameGold transition-colors">
                                       {fac.name}
                                    </h4>
                                    <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest mb-4">{fac.role}</p>
                                    
                                    <div className="mt-auto flex items-center gap-3">
                                       <div className="bg-white/5 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 group-hover:bg-gameGold group-hover:border-gameGold group-hover:text-black transition-all">
                                          View Profile
                                       </div>
                                       <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gameGold group-hover:text-black transition-all shrink-0">
                                          <ChevronRight className="w-4 h-4" strokeWidth={3} />
                                       </div>
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </AnimatePresence>
                     </motion.div>
                  </div>

                  {/* Carousel Progress Bar */}
                  <div className="mt-4 flex items-center gap-4">
                     <div className="h-1 bg-white/10 flex-grow rounded-full overflow-hidden">
                        <motion.div 
                           className="h-full bg-gameGold"
                           initial={{ width: "0%" }}
                           animate={{ width: `${((facultySlide + 1) / totalSlides) * 100}%` }}
                        />
                     </div>
                     <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">
                        {facultySlide + 1} / {totalSlides}
                     </span>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* EDUCATOR MODAL - OPTIMIZED FOR ZERO-SCROLL VISIBILITY */}
      <AnimatePresence>
         {selectedFaculty && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/98 backdrop-blur-xl"
               onClick={() => setSelectedFaculty(null)}
            >
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 40 }}
                  className="bg-[#12141a] w-full max-w-4xl rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col md:flex-row relative max-h-[90vh] md:max-h-[600px]"
                  onClick={e => e.stopPropagation()}
               >
                  <button 
                     onClick={() => setSelectedFaculty(null)}
                     className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/5 text-white hover:bg-white/20 transition-all border border-white/10"
                  >
                     <X size={24} />
                  </button>

                  {/* Sidebar/Image - Compacted */}
                  <div className="md:w-[40%] h-64 md:h-auto relative overflow-hidden bg-black shrink-0">
                     <Image 
                        src={selectedFaculty.img} 
                        alt={selectedFaculty.name} 
                        fill
                        className="object-cover grayscale-[10%]" 
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-gameGold/10 backdrop-blur-xl border border-gameGold/30 p-4 rounded-2xl">
                          <p className="text-gameGold font-black text-[10px] uppercase tracking-[0.4em]">{selectedFaculty.role}</p>
                        </div>
                     </div>
                  </div>

                  {/* Content Area - Optimized to prevent scrolling */}
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                     <span className="text-gameTeal font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-3 block opacity-70">{selectedFaculty.exp}</span>
                     <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-none">{selectedFaculty.name}</h2>
                     
                     <div className="space-y-6">
                        <div>
                           <h4 className="text-slate-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                              <div className="h-px bg-slate-800 flex-grow"></div>
                              CAREER MILESTONES
                              <div className="h-px bg-slate-800 flex-grow"></div>
                           </h4>
                           {/* COMPACT MILESTONE GRID */}
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {selectedFaculty.stats.map((stat: any, idx: number) => (
                                 <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/[0.08] transition-all">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gameGold shrink-0 shadow-lg">
                                       <stat.icon size={14} />
                                    </div>
                                    <p className="text-slate-200 font-bold text-[11px] lg:text-xs leading-snug">{stat.label}</p>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* FINAL BIO / MESSAGE */}
                        <div className="pt-6 border-t border-white/5">
                           <p className="text-slate-400 font-medium leading-relaxed italic text-sm lg:text-base">
                              "At Gaurav’s Academy for Mentorship & Education, we believe every engineer has the potential to lead. Join us to transform your ambition into national success."
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
}
