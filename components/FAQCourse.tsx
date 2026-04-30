
'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQCourse: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "How can I enroll in GAME Courses?", 
      a: "Check out the Course Section, where all available courses are listed, and choose the one that best matches your goals and timeline." 
    },
    { 
      q: "Does GAME provide free content for students?", 
      a: "Yes. Students can access free learning resources on our website, mobile app, and YouTube channel. All free content is available to students across India." 
    },
    { 
      q: "Does GAME provide notes for all paid courses?", 
      a: "Yes, students can access lecture notes directly from Application in the content section of each course." 
    },
    { 
      q: "Does GAME provide notes for free YouTube lectures?", 
      a: "Yes, students can access the notes of Free YouTube lectures through the Knowledge ka Pitaara (button)" 
    },
    { 
      q: "Is GAME good for SSC-JE exams?", 
      a: "Absolutely! SSC-JE coaching at GAME is specifically designed to help candidates prepare effectively for the SSC-JE exam." 
    },
    { 
      q: "Can I crack GATE/ESE/ISRO/BARC by joining GAME?", 
      a: "Yes. GAME provides structured courses, expert guidance, and comprehensive resources to help you succeed in GATE/ESE/ISRO/BARC and other technical exams as well. Your dedication and consistent effort will be key to achieving a top score." 
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
           
           {/* Left Column - Sticky Header */}
           <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/10 text-[#075d63] text-[10px] font-black uppercase tracking-widest rounded-full mb-4">
                    <HelpCircle size={12} /> Course Queries
                 </div>
                 
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                    Got Questions? <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-500">We Help.</span>
                 </h2>
                 
                 <p className="text-slate-500 text-base mb-8 leading-relaxed font-medium max-w-md">
                    Clear your doubts about our batches, materials, and teaching style. We want you to be confident in your choice.
                 </p>
 
                 {/* Support Card */}
                 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#075d63]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                       <h4 className="text-lg font-black text-slate-900 mb-1">Need Exam Guidance?</h4>
                       <p className="text-slate-500 text-xs mb-5 font-bold">Talk to our mentors for a personalized study plan.</p>
                       
                       <div className="flex gap-3">
                          <button className="flex-1 bg-[#075d63] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#054a4f] transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                             <MessageCircle size={16} /> Chat
                          </button>
                          <button className="flex-1 bg-white text-slate-900 border border-slate-200 py-3 rounded-xl font-bold text-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                             <Phone size={16} /> Call
                          </button>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>
 
           {/* Right Column - Accordion */}
           <div className="lg:col-span-7">
              <div className="space-y-3">
                 {faqs.map((faq, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                          openIndex === i 
                          ? 'border-[#075d63] shadow-lg shadow-[#075d63]/5 ring-1 ring-[#075d63]/5' 
                          : 'border-slate-200 shadow-sm hover:border-[#075d63]/30'
                       }`}
                    >
                       <button 
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full flex justify-between items-center p-5 text-left cursor-pointer group"
                       >
                          <span className={`font-black text-base pr-4 transition-colors duration-300 ${openIndex === i ? 'text-[#075d63]' : 'text-slate-800 group-hover:text-[#075d63]'}`}>
                             {faq.q}
                          </span>
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                             openIndex === i ? 'bg-[#075d63] text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-[#075d63] group-hover:text-white'
                          }`}>
                             {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                          </div>
                       </button>
                       
                       <AnimatePresence>
                          {openIndex === i && (
                             <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                             >
                                <div className="px-5 pb-5 pt-0">
                                   <div className="h-px w-full bg-slate-100 mb-4"></div>
                                   <p className="text-slate-600 text-sm leading-relaxed font-bold">
                                      {faq.a}
                                   </p>
                                </div>
                             </motion.div>
                          )}
                       </AnimatePresence>
                    </motion.div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FAQCourse;
