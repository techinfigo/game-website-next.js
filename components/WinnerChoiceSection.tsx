'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Trophy, User, GraduationCap, Briefcase, Award, Star, Users, CheckCircle2, Search, Sparkles, ArrowRight, Target
} from 'lucide-react';
import Link from 'next/link';

const WinnerChoiceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(2); 
  const [isPaused, setIsPaused] = useState(false);

  const tabs = [
    {
      id: "01",
      label: "VISIONARY LEADERSHIP",
      title: "Visionary Leadership",
      desc: "Under the guidance of Gaurav Babu Sir, we implement high-level engineering protocols to ensure our students lead the industry.",
      stats: [], 
      image: "/winners-leadership.png",
      icon: User
    },
    {
      id: "02",
      label: "PROVEN METHODOLOGY",
      title: "Proven Methodology",
      desc: "Our teaching philosophy focuses on building a strong academic foundation by teaching subjects from scratch with conceptual clarity.",
      stats: [
        { label: "METHOD", value: "VISUALIZED" },
        { label: "RETENTION", value: "95%+" }
      ],
      image: "/winners-methodology.png",
      icon: GraduationCap
    },
    {
      id: "03",
      label: "UNMATCHED RESULTS",
      title: "Unmatched Results",
      desc: "Year after year, GAME students dominate GATE, ESE, and SSC-JE leaderboards. We don&apos;t just promise results; we deliver rankers.",
      stats: [
        { label: "SELECTIONS", value: "5000+" },
        { label: "TOP RANKS", value: "50+" }
      ],
      image: "/winners-results.png",
      icon: Trophy
    },
    {
      id: "04",
      label: "24/7 STUDENT SUPPORT",
      title: "24/7 Student Support",
      desc: "Get direct access to our panel of experts. We track your progress and identify weak points for maximum efficiency.",
      stats: [
        { label: "SUPPORT", value: "24/7" },
        { label: "RESOLVED", value: "10k+" }
      ],
      image: "/winners-support.png",
      icon: Briefcase
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, tabs.length]);

  const handleTabClick = (idx: number) => {
    setActiveTab(idx);
    setIsPaused(true);
  };

  return (
    <section className="py-12 md:py-16 bg-[#075d63] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT CONTENT AREA: TIGHTENED & COMPACT */}
          <div className="lg:w-[40%] flex flex-col justify-center py-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gameGold text-black text-[10px] font-black uppercase tracking-widest mb-3 shadow-lg">
                <User size={12} className="fill-black" /> WHO ARE WE?
              </div>

              {/* Tightened heading layout */}
              <div className="mb-4 flex flex-col w-fit text-left">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] tracking-tighter">
                  Gaurav’s Academy
                </h2>
                <div className="mt-1">
                  <span className="text-xl md:text-3xl font-black text-gameGold uppercase tracking-tight opacity-95 leading-none">
                    for Mentorship and Education
                  </span>
                </div>
              </div>
              
              <div className="text-teal-300 font-black text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
                <div className="h-px bg-teal-300/30 w-8"></div>
                THE WINNER’S CHOICE
              </div>

              {/* Tightened Glass Info Box */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-3xl mb-5 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <p className="text-white text-base font-bold leading-snug relative z-10">
                    #1 online institute for engineering preparation in India for GATE / ESE / PSUs / SSC-JE / RRB-JE / State AE-JE Exams.
                 </p>
              </div>

              {/* Slogan & Updated Exact Description */}
              <div className="space-y-4">
                  <p className="text-white text-lg font-black leading-tight">
                    Dominate Your Government Exam with <span className="text-gameGold">Gaurav Babu Sir –</span> India’s Trusted Exam Wizard!
                  </p>
                  <p className="text-teal-50/90 text-sm md:text-base leading-relaxed font-medium">
                    At Gaurav’s Academy, we turbocharge your brain with problem-solving superpowers and visual hacks – exactly what toppers use. We Empower, Inspire, and Guide our students through innovative & affordable education.
                  </p>
                  
                  {/* ACTION BAR: Compacted */}
                  <div className="flex flex-wrap items-center gap-6 mt-4 pt-4 border-t border-white/10">
                    <Link 
                       href="/about"
                       className="bg-gameGold text-black px-6 h-12 rounded-full font-black text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-gameGold/20 flex items-center justify-center gap-2 group shrink-0"
                    >
                       ABOUT US <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-3 group/stat">
                          <div className="text-gameGold shrink-0">
                             <Users size={20} strokeWidth={2.5} />
                          </div>
                          <div className="flex flex-col">
                             <div className="text-white font-black text-[11px] leading-none uppercase">13 Years</div>
                             <div className="text-[9px] font-bold text-teal-400 uppercase tracking-widest opacity-80">100k+ Alumni</div>
                          </div>
                       </div>

                       <div className="w-px h-6 bg-white/15"></div>

                       <div className="flex items-center gap-3 group/stat">
                          <div className="text-teal-400 shrink-0">
                             <Target size={20} strokeWidth={2.5} />
                          </div>
                          <div className="flex flex-col">
                             <div className="text-white font-black text-[11px] leading-none uppercase">One-on-One</div>
                             <div className="text-[9px] font-bold text-teal-400 uppercase tracking-widest opacity-80">Mentorships</div>
                          </div>
                       </div>
                    </div>
                  </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT AREA: REDUCED TABS WIDTH & FLEXIBLE ALIGNMENT */}
          <div className="lg:w-[60%] flex flex-col h-full self-center lg:pt-0">
            {/* Uniform Grid Tabs Header - MORE COMPACT */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 items-stretch gap-2 mb-4 overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
               {tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(idx)}
                    className={`
                       min-h-[46px] h-full px-3 py-2 rounded-xl text-left transition-all duration-500 border group relative flex flex-col justify-center
                       ${activeTab === idx 
                          ? 'bg-gameGold border-gameGold shadow-xl shadow-gameGold/20 z-20 scale-[1.02]' 
                          : 'bg-[#054a4f] border-white/10 hover:border-gameGold/30 z-10'
                       }
                    `}
                  >
                     <h4 className={`text-[10px] md:text-[11px] font-black leading-tight uppercase tracking-wider ${activeTab === idx ? 'text-black' : 'text-white text-center'}`}>
                        {tab.label}
                     </h4>
                  </button>
               ))}
            </div>

            {/* Main Content Display Card: Flexible but avoiding overlap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] flex flex-col min-h-[380px] md:min-h-[420px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="absolute inset-0">
                   <Image 
                      src={tabs[activeTab].image} 
                      alt={tabs[activeTab].title} 
                      fill
                      className="w-full h-full object-cover grayscale-[10%] opacity-40 group-hover:scale-105 transition-transform duration-[2s]" 
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 bg-gameGold/20 backdrop-blur-xl border border-gameGold/30 rounded-full flex items-center justify-center text-gameGold shadow-2xl">
                   <Trophy size={22} className="fill-gameGold" />
                </div>

                <div className="mt-auto p-6 md:p-8 relative z-10 text-white">
                   <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-gameGold text-black text-[9px] font-black uppercase tracking-widest rounded-md mb-2">
                      <Sparkles size={10} className="fill-black" /> CONSISTENT AIR
                   </div>
                   <h3 className="text-2xl md:text-4xl font-black mb-3 leading-none tracking-tight">
                      {tabs[activeTab].title}
                   </h3>
                   <div className="w-12 h-0.5 bg-gameGold rounded-full mb-4"></div>
                   <p className="text-teal-50/90 text-sm md:text-base font-bold leading-relaxed mb-6 max-w-xl">
                      {tabs[activeTab].desc}
                   </p>
                   
                   {/* Stats Cards Row - TIGHTER */}
                   {tabs[activeTab].stats.length > 0 && (
                     <div className="flex flex-wrap gap-3">
                        {tabs[activeTab].stats.map((stat, i) => (
                           <div key={i} className="flex-1 min-w-[140px] bg-black/40 backdrop-blur-md p-3 px-4 rounded-2xl border border-white/10">
                              <div className="text-2xl font-black text-white leading-tight mb-0.5">
                                {stat.value}
                              </div>
                              <div className="text-[9px] font-black text-teal-300 uppercase tracking-[0.15em]">{stat.label}</div>
                           </div>
                        ))}
                     </div>
                   )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnerChoiceSection;
