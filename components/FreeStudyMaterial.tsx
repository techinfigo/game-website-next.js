'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, BookOpen, Lightbulb, PlayCircle, FileText, Zap, Sparkles, Check, Crown } from 'lucide-react';

const FreeStudyMaterial: React.FC = () => {
  const features = [
    {
      title: "Free Lectures",
      desc: "High-level concept visualization for absolute clarity.",
      icon: PlayCircle,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5"
    },
    {
      title: "Topic Hacks",
      desc: "Topper-verified strategies to solve complex problems.",
      icon: Zap,
      color: "text-gameGold",
      bg: "bg-gameGold/5"
    },
    {
      title: "Exam-Ready 24/7",
      desc: "DPPs, NOTES, PYQs, Formula Sheets – accessible anytime.",
      icon: FileText,
      color: "text-blue-500",
      bg: "bg-blue-500/5"
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-slate-50 overflow-hidden relative">
      {/* Background Polish */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gameTeal/5 rounded-full blur-[80px] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

           {/* LEFT CONTENT: Visual Anchor - REDUCED HEIGHT */}
           <motion.div
             className="lg:w-[40%] relative flex justify-center lg:justify-start"
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <div className="relative bg-white p-3 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(7,93,99,0.1)] border border-slate-100 group transition-all duration-500">
                 <div className="relative w-[240px] md:w-[280px] aspect-[2/3] rounded-[1.5rem] overflow-hidden bg-slate-900 border-2 border-white shadow-inner">
                    <Image
                       src="/knowledge-pitara.png"
                       alt="Knowledge Pitara"
                       fill
                       unoptimized
                       className="object-cover group-hover:scale-105 transition-transform duration-700"
                       referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gameTealDark/40 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                       <span className="bg-gameGold text-black text-[8px] font-black uppercase px-2 py-0.5 rounded shadow-lg">100% FREE</span>
                       <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                          <BookOpen size={14} className="text-white" />
                       </div>
                    </div>
                 </div>
                 
                 {/* Sparkle Accessory */}
                 <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gameGold rounded-full flex items-center justify-center text-black shadow-lg shadow-gameGold/20 scale-90">
                    <Sparkles size={16} className="fill-white" />
                 </div>
              </div>
           </motion.div>

           {/* RIGHT CONTENT: Information Area - TIGHTENED */}
           <div className="lg:w-[60%] flex flex-col justify-center py-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 {/* Aligned Header Elements */}
                 <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-gameTeal/5 border border-gameTeal/20 text-gameTeal text-[9px] font-black uppercase tracking-widest rounded-md mb-2">
                    <Crown size={10} className="fill-gameTeal" /> Digital Library
                 </div>

                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1] mb-2 tracking-tighter">
                    Start Your <span className="text-gameTeal">Preparation Today</span>
                 </h2>

                 <p className="text-slate-500 text-sm md:text-base font-bold mb-4 leading-relaxed max-w-lg">
                    Unlock the "Knowledge Pitara"—our curated vault of visual hacks, and resources designed for toppers.
                 </p>

                 {/* Optimized Feature Grid - COMPACT */}
                 <div className="grid grid-cols-1 gap-2 mb-4">
                    {features.map((item, i) => (
                       <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-gameTeal/30 hover:shadow-lg transition-all group">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${item.bg} ${item.color} group-hover:scale-105 transition-transform`}>
                             <item.icon size={18} />
                          </div>
                          <div>
                             <h4 className="font-black text-slate-900 text-sm leading-none mb-0.5">{item.title}</h4>
                             <p className="text-slate-500 text-[10px] font-bold opacity-80">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>

                 {/* Balanced CTA Area - COMPACT */}
                 <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                    <a 
                       href="https://docs.google.com/spreadsheets/d/1xi1kyaIeNijUVVmLWXl-rzwaEUu5V8GrknNFtjOWP5s/edit?usp=sharing"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group bg-[#075d63] hover:bg-[#054a4f] text-white px-8 h-12 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-lg transition-all hover:-translate-y-1 w-full sm:w-auto"
                    >
                       ACCESS NOW <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="flex items-center gap-3">
                       <div className="flex -space-x-1.5">
                          {[21,22,23].map((i) => (
                             <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-sm relative">
                                <Image src="/gaurav-sir.png" alt="Student" fill className="object-cover" referrerPolicy="no-referrer" />
                             </div>
                          ))}
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black text-gameTeal uppercase leading-none mb-0.5">10,000+ Students</span>
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">Learning</span>
                       </div>
                    </div>
                 </div>

                 {/* Compact Tag Row */}
                 <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
                    {['FREE TESTS', 'PYQs', 'FORMULA SHEETS', 'NOTES'].map((tag, i) => (
                       <span key={i} className="px-2 py-1 bg-slate-200/50 text-[8px] font-black text-slate-500 uppercase rounded-md hover:bg-gameTeal hover:text-white transition-colors cursor-default">
                          {tag}
                       </span>
                    ))}
                 </div>
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FreeStudyMaterial;