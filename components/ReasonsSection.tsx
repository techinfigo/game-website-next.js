'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lightbulb, Trophy, Target, Users, Award, Smartphone, 
  ShieldCheck, ChevronRight, Sparkles
} from 'lucide-react';

const ReasonsSection: React.FC = () => {
  // We default the middle card (index 3) as expanded
  const [hoveredReasonIndex, setHoveredReasonIndex] = useState<number>(3);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const reasons = [
    {
      id: "01",
      title: "The Innovator - Gaurav Babu Sir",
      desc: "A GATE & ESE expert with over 13 years of experience in the Mechanical and Civil domains, he has mentored 1 lakh+ students to successfully crack top engineering exams nationwide.",
      icon: Lightbulb,
      color: "bg-[#021f21]", // Darkest
    },
    {
      id: "02",
      title: "Creating Top Rankers",
      desc: "GAME consistently produces top ranks in competitive exams, empowering students to achieve academic excellence through structured guidance and proven strategies.",
      icon: Trophy,
      color: "bg-[#033438]", 
    },
    {
      id: "03",
      title: "Personalized Mentorship",
      desc: "Unlock your potential with one-to-one mentorship, fostering a strong guru-shishya bond tailored to your learning needs.",
      icon: Target,
      color: "bg-[#05494f]", 
    },
    {
      id: "04",
      title: "Unite & Upskill: THE GAME COMMUNITY",
      desc: "Connect with peers, engage in discussion forums, and master skills through collaborative learning in a supportive environment.",
      icon: Users,
      color: "bg-[#075d63]", // Brand Teal
    },
    {
      id: "05",
      title: "Advanced Interview & Career Guidance",
      desc: "Receive post-exam support with mock interviews and career counselling for PSUs, placements, and engineering career pathways.",
      icon: Award,
      color: "bg-[#09767e]", 
    },
    {
      id: "06",
      title: "Learn on the Go, Anytime You Want",
      desc: "Get endless learning opportunities, accessible anywhere through our high-performance learning platform.",
      icon: Smartphone,
      color: "bg-[#0b8f99]", 
    },
    {
      id: "07",
      title: "India&apos;s Leading e-Learning Provider",
      desc: "A premier platform with proven success rates for GATE, ESE, PSUs, SSC JE & All-State AE Exams.",
      icon: ShieldCheck,
      color: "bg-[#0da6b1]", // Lightest
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-6">
          <motion.div 
            {...fadeInUp}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-black text-gameGold bg-gameBlack px-4 py-1.5 rounded-full uppercase tracking-[0.3em] mb-2 shadow-lg whitespace-nowrap">
              <Sparkles size={12} className="inline mr-2" /> THE GAME ADVANTAGE
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 leading-tight whitespace-nowrap">
              7 Reasons Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">India&apos;s Leading Choice</span>
            </h2>
            <div className="w-24 h-1.5 bg-gameGold mx-auto mt-4 rounded-full"></div>
          </motion.div>
        </div>

        {/* Interactive Infographic - Desktop View (7 Cards) */}
        <div className="hidden lg:flex items-stretch justify-center h-[380px] md:h-[420px] w-full gap-0 overflow-visible">
          {reasons.map((reason, index) => {
            const isActive = hoveredReasonIndex === index;
            
            // Logic for clip-paths based on 7 cards
            let clipStyle = "";
            if (index < 3) {
                clipStyle = 'polygon(0 0, 100% 6%, 100% 94%, 0% 100%)';
            } else if (index > 3) {
                clipStyle = 'polygon(0 6%, 100% 0, 100% 100%, 0% 94%)';
            } else {
                clipStyle = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
            }

            return (
              <motion.div
                key={reason.id}
                onMouseEnter={() => setHoveredReasonIndex(index)}
                onMouseLeave={() => setHoveredReasonIndex(3)}
                className={`
                  relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                  ${isActive ? 'w-[35%] z-30 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]' : 'w-[10.8%] z-10 opacity-95'}
                  ${reason.color} flex flex-col items-center justify-center p-6 text-white cursor-pointer
                  border-r border-white/10 last:border-r-0
                `}
                style={{
                    clipPath: clipStyle,
                    transform: isActive ? 'scale(1.04)' : 'scale(1)'
                }}
              >
                <div className={`flex flex-col items-center text-center w-full h-full transition-all duration-500 ${isActive ? 'px-10 justify-center' : 'px-2 justify-center py-12'}`}>
                  
                  {/* Icon Container - Only visible when active */}
                  {isActive && (
                    <div className="w-12 h-12 rounded-2xl bg-white text-gameGold flex items-center justify-center shadow-xl transition-all duration-500 shrink-0 scale-110 mb-4">
                      <reason.icon size={26} strokeWidth={2.5} />
                    </div>
                  )}

                  {/* ACTIVE STATE: Label -> Title -> Desc -> Button */}
                  {isActive && (
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        className="flex flex-col items-center w-full"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gameGold mb-1.5 block">
                           Reason {parseInt(reason.id)}
                        </span>
                        <h3 className="font-black uppercase tracking-wider text-base md:text-lg lg:text-xl mb-1 leading-[1.2] text-center w-full mx-auto break-words px-4">
                           {reason.title}
                        </h3>
                        <p className="text-teal-50 text-xs md:text-sm font-medium leading-relaxed max-w-[340px] mb-3">
                           {reason.desc}
                        </p>
                        <div className="pt-3 border-t border-white/10 w-full flex justify-center">
                              <button className="bg-gameGold text-black px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-2xl group whitespace-nowrap">
                                 Explore <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                        </div>
                    </motion.div>
                  )}

                  {/* INACTIVE STATE: Vertical Title -> Number */}
                  {!isActive && (
                    <>
                        <div className="relative h-full flex items-center justify-center">
                             <h3 className="font-black uppercase tracking-[0.05em] text-[9px] md:text-[10px] lg:text-[11px] text-center leading-tight transform -rotate-90 origin-center text-white/90 whitespace-nowrap drop-shadow-sm">
                                {reason.title}
                             </h3>
                        </div>
                        <span className="text-xs font-black uppercase tracking-[0.3em] opacity-40 shrink-0 whitespace-nowrap">
                           {parseInt(reason.id)}
                        </span>
                    </>
                  )}
                </div>

                {/* Decorative glow line at bottom */}
                <div className={`absolute bottom-0 left-0 w-full h-2 bg-gameGold transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View - Standard Stack */}
        <div className="lg:hidden flex flex-col gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              {...fadeInUp}
              transition={{ delay: index * 0.05 }}
              className={`${reason.color} p-6 rounded-[2rem] text-white shadow-xl relative overflow-hidden group`}
            >
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 shadow-lg border border-white/20 group-active:text-gameGold transition-colors">
                  <reason.icon size={26} />
                </div>
                <div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gameGold mb-1 block whitespace-nowrap">Reason {parseInt(reason.id)}</span>
                   <h3 className="text-lg font-black mb-2 leading-tight">{reason.title}</h3>
                   <p className="text-teal-50/80 text-sm font-medium leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReasonsSection;