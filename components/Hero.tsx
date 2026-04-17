'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PlayCircle, Star, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const students = [
  { name: "Priya Sharma", rank: "AIR 15 (ESE)", img: "/rankers/rank1.png" },
  { name: "Rahul Verma", rank: "Selected (PSU)", img: "/rankers/rank2.png" },
  { name: "Amit Patel", rank: "AIR 8 (GATE)", img: "/rankers/rank3.png" },
  { name: "Sneha Reddy", rank: "AIR 22 (ESE)", img: "/rankers/rank4.png" },
  { name: "Vikram Das", rank: "Selected (BARC)", img: "/rankers/rank5.png" },
  { name: "Ananya Ray", rank: "AIR 1 (GATE ME)", img: "/rankers/rank6.png" },
  { name: "Siddharth S.", rank: "AIR 45 (ESE)", img: "/rankers/rank7.png" },
  { name: "Kavita J.", rank: "Selected (IOCL)", img: "/rankers/rank1.png" },
  { name: "Rohan M.", rank: "AIR 12 (SSC-JE)", img: "/rankers/rank2.png" },
  { name: "Megha Gupta", rank: "AIR 4 (ESE)", img: "/rankers/rank3.png" },
  { name: "Ishaan Kohli", rank: "Selected (ONGC)", img: "/rankers/rank4.png" },
  { name: "Tanya Bisht", rank: "AIR 31 (GATE)", img: "/rankers/rank5.png" },
];

const VerticalSlider = ({ items, speed, reverse = false }: { items: typeof students, speed: number, reverse?: boolean }) => {
  const doubledItems = [...items, ...items, ...items];
  return (
    <div className="flex flex-col gap-6 h-full py-0">
      <motion.div
        animate={{ 
          y: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] 
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col gap-6"
      >
        {doubledItems.map((student, idx) => (
          <div 
            key={idx} 
            className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl border-[6px] border-white bg-white group"
          >
            <img src={student.img} className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" alt={student.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-gameGold text-black text-[8px] font-black uppercase px-2 py-0.5 rounded-md w-fit mb-1 shadow-lg">
                {student.rank}
              </div>
              <p className="text-xs font-black leading-tight drop-shadow-md">{student.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[70vh] lg:min-h-[85vh] flex flex-col pt-24 lg:pt-36 pb-0">
      
      {/* Dynamic Decor Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-end">
        <div className="grid lg:grid-cols-12 gap-8 items-end min-h-[60vh] lg:min-h-[75vh]"> 
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 text-center lg:text-left z-40 mx-auto lg:mx-0 pb-8 lg:pb-12">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full mb-6 shadow-sm">
                   <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gameGold opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gameGold"></span>
                   </span>
                   <span className="text-xs font-black text-slate-500 tracking-widest uppercase">
                      #1 ONLINE INSTITUTE FOR GATE & ESE
                   </span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.05] mb-4 tracking-tighter">
                   Crack <span className="text-gameTeal">Competitive</span> <br/>
                   Exams Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameGoldDark to-gameGold">Pro Player</span>
                </h1>
                
                <p className="text-base text-slate-500 mb-6 leading-relaxed font-bold max-w-lg mx-auto lg:mx-0">
                   Join India's most trusted mentorship platform. <br className="hidden md:block" />
                   Experience visualized learning with <br />
                   <span className="text-gameTeal font-black">Gaurav Babu Sir</span> <span className="text-slate-900 font-black">( 13+ yrs Teaching Exp. ).</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                    <Link 
                      href="/gate"
                      className="bg-gameTeal text-white px-8 md:px-12 py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_-10px_rgba(7,93,99,0.4)] hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group whitespace-nowrap"
                    >
                       SELECT OUR GOAL <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      href="/jobs"
                      className="bg-white text-slate-900 border border-slate-200 px-8 md:px-12 py-5 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-slate-50 hover:border-gameTeal/30 transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] whitespace-nowrap"
                    >
                       <Briefcase size={20} className="text-gameTeal" /> JOB UPDATES
                    </Link>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-slate-200/60">
                   <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-slate-900 leading-none mb-1.5 group-hover:text-gameTeal transition-colors">100k+</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Aspirants</div>
                   </div>
                   <div className="w-px h-10 bg-slate-200"></div>
                   <div className="group">
                      <div className="text-3xl md:text-4xl font-black text-slate-900 leading-none mb-1.5 group-hover:text-gameTeal transition-colors">5000+</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Selections</div>
                   </div>
                   <div className="w-px h-10 bg-slate-200"></div>
                   <div className="group">
                      <div className="flex items-center gap-2 text-gameGold">
                         <span className="text-3xl md:text-4xl font-black text-slate-900 leading-none mb-1.5 group-hover:text-gameTeal transition-colors">4.9</span>
                         <Star size={24} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(242,197,55,0.4)]" />
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Global Rating</div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT VISUAL AREA - Mentor touches the floor */}
          <div className="lg:col-span-7 relative h-full flex items-end justify-center">
             
             {/* 1. BACKGROUND SUCCESS WALL */}
             <div className="absolute inset-0 z-0 overflow-hidden mask-fade-top-bottom pointer-events-none opacity-40">
                <div className="flex gap-6 h-full px-4 lg:px-10 scale-90 lg:scale-100 translate-y-[-5%] lg:translate-y-0">
                   <div className="flex-1">
                      <VerticalSlider items={students.slice(0, 4)} speed={45} />
                   </div>
                   <div className="flex-1 mt-20">
                      <VerticalSlider items={students.slice(4, 8)} speed={35} reverse />
                   </div>
                   <div className="flex-1">
                      <VerticalSlider items={students.slice(8, 12)} speed={55} />
                   </div>
                   <div className="flex-1 mt-20 hidden xl:block">
                      <VerticalSlider items={students.slice(0, 4)} speed={40} reverse />
                   </div>
                </div>
             </div>

             {/* 2. MENTOR IMAGE */}
             <motion.div 
                className="relative z-30 w-full flex items-end justify-center h-full"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
             >
                <div className="relative flex items-end justify-center w-full h-full">
                    <img 
                      src="/gaurav-sir.png" 
                      alt="Gaurav Babu Sir" 
                      className="h-[70vh] lg:h-[80vh] w-auto object-contain object-bottom drop-shadow-[0_-10px_60px_rgba(0,0,0,0.1)] z-30 block mb-[-2px]"
                      onError={(e) => {
                        e.currentTarget.src = "https://www.freeiconspng.com/uploads/businessman-png-10.png";
                      }}
                    />

                    {/* Verified Badge */}
                    <motion.div 
                      initial={{ scale: 0, x: 50 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="absolute top-[35%] right-[-10%] lg:right-[-5%] bg-white/95 backdrop-blur-xl p-4 lg:p-5 rounded-[2.5rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] flex items-center gap-4 border border-white/60 z-40"
                    >
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                      <div className="text-left whitespace-nowrap">
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Verified</p>
                          <p className="text-lg font-black text-slate-900 leading-none">Ranker Results</p>
                      </div>
                    </motion.div>

                    {/* Name Plate - Refined based on screenshot */}
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }} 
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-10 py-5 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] text-center z-40 border border-slate-50 min-w-[320px]"
                    >
                      <h3 className="text-3xl font-black text-[#0f172a] tracking-tight leading-none mb-1 whitespace-nowrap">Gaurav Babu Sir</h3>
                      <div className="h-[3px] w-12 bg-gameTeal mx-auto my-4 rounded-full"></div>
                      <div className="text-[11px] font-black tracking-[0.4em] text-[#075d63] uppercase">Founder & Mentor</div>
                    </motion.div>
                </div>
             </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        .mask-fade-top-bottom {
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
        }
      `}</style>
    </section>
  );
};

export default Hero;
