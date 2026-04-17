'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?fit=crop&w=800&q=80",
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
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-start">
          
          {/* LEFT CONTENT AREA */}
          <div className="lg:w-[45%] sticky top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gameGold text-black text-xs font-black uppercase tracking-widest mb-4 shadow-lg">
                <User size={14} className="fill-black" /> WHO ARE WE?
              </div>

              {/* Strict two-line heading layout */}
              <div className="mb-6 flex flex-col w-fit text-left">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tighter whitespace-nowrap">
                  Gaurav’s Academy
                </h2>
                <div className="mt-2">
                  <span className="text-xl md:text-3xl lg:text-4xl font-black text-gameGold uppercase tracking-tight opacity-95 leading-none whitespace-nowrap">
                    for Mentorship and Education
                  </span>
                </div>
              </div>
              
              <div className="text-teal-300 font-black text-sm uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
                <div className="h-px bg-teal-300/30 w-12"></div>
                THE WINNER’S CHOICE
              </div>

              {/* Glass Info Box */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[2.5rem] mb-6 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                 <p className="text-white text-base md:text-lg font-bold leading-relaxed relative z-10">
                    #1 online institute for engineering preparation in India for GATE / ESE / PSUs / SSC-JE / RRB-JE / State AE-JE Exams.
                 </p>
              </div>

              {/* Slogan & Updated Exact Description */}
              <div className="space-y-6">
                 <p className="text-white text-lg md:text-xl font-black leading-tight">
                    Dominate Your Government Exam with <span className="text-gameGold">Gaurav Babu Sir –</span> India’s Trusted Exam Wizard!
                 </p>
                 <p className="text-teal-50 text-base md:text-lg leading-relaxed font-medium">
                    At Gaurav’s Academy for Mentorship & Education, we turbocharge your brain with problem-solving superpowers and visual hacks – exactly what toppers use to crack these prestigious exams. We Empower, We Inspire, and We Guide our students to become the best version of themselves through the pursuit of innovative & affordable education.
                 </p>
                 
                 {/* ACTION BAR: Strictly Two-Line Data Strip */}
                 <div className="flex flex-col xl:flex-row items-center gap-12 mt-6 pt-6 border-t border-white/10">
                    {/* Primary Anchor Button */}
                    <Link 
                       href="/about"
                       className="bg-gameGold text-black px-8 h-14 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-gameGold/20 flex items-center justify-center gap-3 group shrink-0 whitespace-nowrap"
                    >
                       MORE ABOUT US <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {/* Integrated Data Strip: Strictly 2 lines each */}
                    <div className="flex items-center gap-10 w-full lg:w-auto shrink-0">
                       <div className="hidden xl:block w-px h-10 bg-white/15"></div>
                       
                       {/* Stat Point 1: 13 Years + 100,000+ Members */}
                       <div className="flex items-center gap-4 group/stat shrink-0">
                          <div className="text-gameGold shrink-0">
                             <Users size={24} strokeWidth={2.5} className="drop-shadow-[0_0_8px_rgba(242,197,55,0.3)]" />
                          </div>
                          <div className="flex flex-col justify-center">
                             <div className="text-white font-black text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap uppercase">13 Years</div>
                             <div className="text-[10px] font-black text-teal-400 uppercase tracking-widest opacity-80 whitespace-nowrap">100,000+ Members</div>
                          </div>
                       </div>

                       <div className="hidden md:block w-px h-8 bg-white/15"></div>

                       {/* Stat Point 2: One-on-One Personal Mentorships */}
                       <div className="flex items-center gap-4 group/stat shrink-0">
                          <div className="text-teal-400 shrink-0">
                             <Target size={24} strokeWidth={2.5} className="drop-shadow-[0_0_8px_rgba(45,212,191,0.3)]" />
                          </div>
                          <div className="flex flex-col justify-center">
                             <div className="text-white font-black text-xs md:text-sm leading-tight tracking-tight whitespace-nowrap uppercase">One-on-One</div>
                             <div className="text-[10px] font-black text-teal-400 uppercase tracking-widest opacity-80 whitespace-nowrap">Personal Mentorships</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div className="lg:w-[55%] flex flex-col h-full pt-6 lg:pt-0">
            {/* Uniform Grid Tabs Header */}
            <div 
              className="grid grid-cols-2 md:grid-cols-4 items-stretch gap-2 mb-6 overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
               {tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(idx)}
                    className={`
                       min-h-[60px] h-full px-4 py-3 rounded-xl text-left transition-all duration-500 border group relative flex flex-col justify-center
                       ${activeTab === idx 
                          ? 'bg-gameGold border-gameGold shadow-xl shadow-gameGold/20 z-20' 
                          : 'bg-[#054a4f] border-white/10 hover:border-gameGold/30 z-10'
                       }
                    `}
                  >
                     <h4 className={`text-xs md:text-[13px] font-black leading-tight uppercase tracking-wider ${activeTab === idx ? 'text-black' : 'text-white'}`}>
                        {tab.label}
                     </h4>
                  </button>
               ))}
            </div>

            {/* Main Content Display Card: Flexible but avoiding overlap */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col min-h-[400px] md:min-h-[450px]"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="absolute inset-0">
                   <img 
                      src={tabs[activeTab].image} 
                      alt={tabs[activeTab].title} 
                      className="w-full h-full object-cover grayscale-[20%] opacity-40" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                <div className="absolute top-8 right-8 w-14 h-14 bg-gameGold/20 backdrop-blur-xl border border-gameGold/30 rounded-full flex items-center justify-center text-gameGold shadow-2xl">
                   <Trophy size={28} className="fill-gameGold" />
                </div>

                <div className="mt-auto p-6 md:p-8 relative z-10 text-white">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-gameGold text-black text-[9px] font-black uppercase tracking-widest rounded-md mb-3">
                      <Sparkles size={10} className="fill-black" /> CONSISTENT AIR
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black mb-4 leading-none tracking-tight">
                      {tabs[activeTab].title}
                   </h3>
                   <div className="w-16 h-1 bg-gameGold rounded-full mb-4"></div>
                   <p className="text-teal-50/90 text-base md:text-lg font-bold leading-relaxed mb-6 max-w-xl">
                      {tabs[activeTab].desc}
                   </p>
                   
                   {/* Stats Cards Row */}
                   {tabs[activeTab].stats.length > 0 && (
                     <div className="flex flex-wrap gap-4">
                        {tabs[activeTab].stats.map((stat, i) => (
                           <div key={i} className="flex-1 min-w-[180px] bg-black/40 backdrop-blur-md p-4 rounded-[2rem] border border-white/10 group-hover:bg-black/60 transition-all">
                              <div className="text-3xl font-black text-white leading-tight mb-1">
                                {stat.value}
                              </div>
                              <div className="text-[10px] font-black text-teal-300 uppercase tracking-[0.2em]">{stat.label}</div>
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