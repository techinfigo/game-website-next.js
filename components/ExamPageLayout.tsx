
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Star, CheckCircle2, BookOpen, 
  Calendar, Trophy, Building2, Plus, Minus,
  LucideIcon
} from 'lucide-react';

export interface ExamPageProps {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    bgGradient: string;
    icon: LucideIcon;
    iconColor: string;
  };
  overview: {
    title: string;
    highlight: string;
    content: React.ReactNode;
    stats: { label: string; value: string }[];
  };
  features: {
    title: string;
    desc: string;
    icon: LucideIcon;
    color: string;
    bg: string;
  }[];
  pattern?: {
    title: string;
    stages: {
      name: string;
      type: string;
      details: string[];
    }[];
  };
  faqs: { q: string; a: string }[];
}

const ExamPageLayout: React.FC<ExamPageProps> = ({ hero, overview, features, pattern, faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Hero Section */}
      <section className={`relative pt-24 pb-32 overflow-hidden text-white ${hero.bgGradient}`}>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full blur-[100px] pointer-events-none"></div>

         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <hero.icon size={14} className={hero.iconColor} />
                  <span className={`text-xs font-bold uppercase tracking-widest ${hero.iconColor}`}>{hero.subtitle}</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                  {hero.title}
               </h1>

               <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  {hero.description}
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-100 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                     Start Preparation <ArrowRight size={20} />
                  </button>
                  <button className="bg-black/20 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-black/30 transition-all">
                     View Syllabus
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Overview Section */}
      <section className="py-24 px-8 md:px-10 lg:px-12 bg-white relative">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-slate-500 font-bold tracking-widest uppercase text-xs mb-3 block">Overview</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                     {overview.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500">{overview.highlight}</span>
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                     {overview.content}
                  </div>
               </motion.div>

               <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                     {overview.stats.map((stat, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:border-slate-300 transition-colors">
                           <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                           <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Opportunities / Features */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                  Key <span className="text-slate-500">Opportunities</span>
               </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.bg} ${item.color}`}>
                        <item.icon size={28} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Exam Pattern (Optional) */}
      {pattern && (
         <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">{pattern.title}</h2>
               </div>
               <div className="grid md:grid-cols-3 gap-8">
                  {pattern.stages.map((stage, i) => (
                     <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase">{stage.type}</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 mt-2">{stage.name}</h3>
                        <ul className="space-y-3">
                           {stage.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                                 <CheckCircle2 size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                 {detail}
                              </li>
                           ))}
                        </ul>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      )}

      {/* 5. FAQs */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'border-slate-900 shadow-md' : 'border-slate-200 shadow-sm'}`}>
                     <button 
                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                        className="w-full flex justify-between items-center p-5 text-left"
                     >
                        <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-slate-900' : 'text-slate-700'}`}>
                           {faq.q}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaqIndex === i ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-500'}`}>
                           {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     
                     <AnimatePresence>
                        {openFaqIndex === i && (
                           <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                           >
                              <div className="px-5 pb-5 pt-0 border-t border-dashed border-slate-100 mt-2">
                                 <div className="pt-4 text-slate-600 leading-relaxed font-medium">
                                    {faq.a}
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default ExamPageLayout;
