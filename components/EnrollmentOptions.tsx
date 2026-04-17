'use client';

import React from 'react';
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
    <section className="py-8 lg:py-10 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
           
           {/* Left Image Side */}
           <div className="lg:w-5/12 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group"
              >
                 <img 
                    src="/enrollment-image.png" 
                    alt="Ready to Excel" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
                 
                 {/* Overlay Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-gameTeal/90 via-gameTeal/20 to-transparent opacity-80"></div>

                 {/* Content Overlay */}
                 <div className="absolute bottom-0 left-0 w-full p-4 text-white">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                       <h3 className="text-xl font-black mb-1">Ready to Excel?</h3>
                       <p className="text-teal-50 text-xs mb-4 leading-relaxed">
                          Join the community of toppers. Get unlimited access to premium content designed for your success.
                       </p>
                       <Link 
                          href="/courses"
                          className="w-full bg-[#f2c537] text-black py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-lg"
                       >
                          Enroll Now <ArrowRight size={16} />
                       </Link>
                    </div>
                 </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:block"
              >
                 <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                       <CheckCircle2 size={16} strokeWidth={3} />
                    </div>
                    <div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase">Success Rate</div>
                       <div className="text-base font-black text-slate-900">98.5%</div>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Right Content Side */}
           <div className="lg:w-7/12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-gameTeal/5 border border-gameTeal/20 text-gameTeal text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                    <Sparkles size={12} fill="currentColor" /> Premium Features
                 </div>

                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight">
                    Ready to outsmart the competition? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">Let’s roll!</span>
                 </h2>
                 
                 <p className="text-slate-600 mb-6 leading-relaxed text-base font-medium">
                    Explore flexible enrollment options at the <span className="text-slate-900 font-bold">Best Online Institute</span> for engineering preparation. Customized to your needs including self-paced courses and expert-led programs.
                 </p>

                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {options.map((opt, i) => (
                       <motion.div 
                          key={i} 
                          className="flex flex-col items-start p-4 rounded-[1.5rem] border border-slate-100 bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-gameTeal/10 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                       >
                          <div className={`w-10 h-10 ${opt.color} rounded-xl flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform`}>
                             <opt.icon size={20} strokeWidth={1.5} />
                          </div>
                          <h4 className="font-bold text-slate-900 text-base mb-0.5 group-hover:text-gameTeal transition-colors">{opt.title}</h4>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{opt.desc}</p>
                       </motion.div>
                    ))}
                 </div>
              </motion.div>
           </div>

        </div>

      </div>
    </section>
  );
};

export default EnrollmentOptions;