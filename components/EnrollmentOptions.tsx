'use client';

import React from 'react';
import Image from 'next/image';
import { Layout, PenTool, FileText, Book, ClipboardList, BookOpen, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const EnrollmentOptions: React.FC = () => {
  const options = [
     { title: "Courses", icon: Layout, desc: "Live & Recorded Batches", color: "bg-blue-50 text-blue-600" },
     { title: "Test Series", icon: PenTool, desc: "Real Exam Simulation", color: "bg-amber-50 text-amber-600" },
     { title: "Lecture Notes", icon: FileText, desc: "Comprehensive PDFs", color: "bg-emerald-50 text-emerald-600" },
     { title: "Formula Sheets", icon: Book, desc: "Quick Revision Guides", color: "bg-purple-50 text-purple-600" },
     { title: "Practice Sets", icon: ClipboardList, desc: "Topic-wise Questions", color: "bg-rose-50 text-rose-600" },
     { title: "Revision Notes", icon: BookOpen, desc: "Concise Summaries", color: "bg-cyan-50 text-cyan-600" },
  ];

  return (
    <section className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gameTeal/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gameGold/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
           
           {/* Left Image Side - TIGHTENED */}
           <div className="lg:w-[40%] relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-50 group max-w-[340px] mx-auto lg:mx-0"
              >
                 <Image 
                    src="/enrollment-image.png" 
                    alt="Ready to Excel" 
                    width={600}
                    height={800}
                    unoptimized
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gameTealDark/90 via-gameTealDark/20 to-transparent"></div>

                 {/* Content Overlay - Compact */}
                 <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                       <h3 className="text-lg font-black text-white mb-1">Ready to Excel?</h3>
                       <p className="text-teal-50 text-[10px] mb-3 leading-tight opacity-90">
                          Join 10k+ achievers. Get unlimited access to premium content.
                       </p>
                       <Link 
                          href="/courses"
                          className="w-full bg-[#f2c537] text-black py-2 text-[10px] font-black uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-all shadow-lg active:scale-95"
                       >
                          Enroll Now <ArrowRight size={14} />
                       </Link>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Success Badge */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-white p-2.5 rounded-xl shadow-xl border border-slate-50 z-20 hidden md:block"
              >
                 <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                       <CheckCircle2 size={14} strokeWidth={3} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-900 leading-none">98.5% Success</span>
                       <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tight">Verified Rate</span>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Right Content Side - TIGHTENED */}
           <div className="lg:w-[60%] py-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-gameTeal/5 border border-gameTeal/20 text-gameTeal text-[9px] font-black uppercase tracking-widest rounded-md mb-2">
                    <Sparkles size={10} className="fill-gameTeal" /> Premium Features
                 </div>

                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-[1.1] tracking-tighter">
                    Ready to outsmart the competition? <br/>
                    <span className="text-gameTeal">Let's roll!</span>
                 </h2>
                 
                 <p className="text-slate-500 text-sm md:text-base font-bold mb-5 leading-relaxed max-w-xl">
                    Explore flexible enrollment options at India's trusted institute. Expert-led programs customized for your success.
                 </p>

                 <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {options.map((opt, i) => (
                       <motion.div 
                          key={i} 
                          className="flex flex-col items-center text-center p-3 rounded-2xl border border-slate-50 bg-white shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-gameTeal/30 transition-all duration-300 group cursor-pointer"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                       >
                          <div className={`w-9 h-9 ${opt.color} rounded-lg flex items-center justify-center mb-2 shadow-sm group-hover:scale-105 transition-transform`}>
                             <opt.icon size={18} strokeWidth={2} />
                          </div>
                          <h4 className="font-black text-slate-900 text-[13px] leading-tight mb-0.5 group-hover:text-gameTeal transition-colors">{opt.title}</h4>
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest opacity-80">{opt.desc}</p>
                       </motion.div>
                    ))}
                 </div>

                 {/* Quick Support / Contact Row - Added for balance */}
                 <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                       <PenTool size={14} />
                    </div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                       Flexible Learning. Professional Mentorship. <span className="text-gameTeal ml-2">Unlock Your Future.</span>
                    </p>
                 </div>
              </motion.div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default EnrollmentOptions;