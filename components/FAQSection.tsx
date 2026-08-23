
'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone, ArrowRight, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteSettings } from '@/hooks/useSiteSettings';
import CallPopup, { triggerCall } from './CallPopup';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [callOpen, setCallOpen] = useState(false);
  const settings = useSiteSettings();

  const faqs = [
    { 
      q: "For what examinations I can choose Gaurav’s Academy ?", 
      a: "Gaurav’s Academy is the leading online education platform for GATE/ESE/PSU’s/AE & JE exams. We also provide free study material, paid courses subscription, live classes and recorded content, one on one membership with Gaurav Babu Sir, test series and practice sets with latest Exam Patterns." 
    },
    { 
      q: "Who is the founder of Gaurav’s Academy ?", 
      a: "Gaurav Babu Sir is the founder of Gaurav’s Academy who has been teaching for more than 14+ years." 
    },
    { 
      q: "How can I enroll in Gaurav’s Academy Courses?", 
      a: "Students can visit the Enroll Now option where they can find the different Courses which are available and can choose according to their preferences." 
    },
    { 
      q: "Does Gaurav’s Academy  provide live lectures?", 
      a: "Yes, we provide live Scheduled Lectures by our best faculties with 24/7 recorded lecture access." 
    },
    { 
      q: "Does Gaurav’s Academy  provide notes for all classes?", 
      a: "Yes, Students can access the notes on our Gaurav’s Academy Live application." 
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]"></div>
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
           
           {/* Left Column - Sticky Header */}
           <div className="lg:col-span-5 lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/10 text-[#075d63] text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                    <HelpCircle size={14} /> Support Center
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                    Frequently Asked <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-500">Questions</span>
                 </h2>
                 
                 <p className="text-slate-500 text-lg mb-8 leading-relaxed font-medium">
                    Everything you need to know about our courses, mentorship, and platform. Can't find the answer you're looking for?
                 </p>

                 {/* Support Card */}
                 <div className="bg-white p-5 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#f2c537]/10 rounded-full blur-2xl group-hover:bg-[#f2c537]/20 transition-colors"></div>
                    
                    <div className="relative z-10">
                       <h4 className="text-xl font-bold text-slate-900 mb-2">Still in doubt?</h4>
                       <p className="text-slate-500 text-sm mb-6">Chat with our academic counselors for personalized guidance.</p>
                       
                       <div className="flex gap-3">
                          <a href="https://wa.me/919027615394" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#075d63] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#054a4f] transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1">
                             <MessageCircle size={18} /> Chat Now
                          </a>
                          <button
                             type="button"
                             onClick={() => triggerCall(settings.phone, () => setCallOpen(true))}
                             className="flex-1 bg-slate-50 text-slate-900 border border-slate-200 py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 cursor-pointer"
                          >
                             <Phone size={18} /> Call Us
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
                          ? 'border-[#075d63] shadow-lg shadow-[#075d63]/10 ring-1 ring-[#075d63]/10' 
                          : 'border-slate-200 shadow-sm hover:border-[#075d63]/50'
                       }`}
                    >
                       <button 
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className="w-full flex justify-between items-center p-5 text-left cursor-pointer"
                       >
                          <span className={`font-bold text-lg pr-4 ${openIndex === i ? 'text-[#075d63]' : 'text-slate-800'}`}>
                             {faq.q}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                             openIndex === i ? 'bg-[#075d63] text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-[#075d63]/10'
                          }`}>
                             {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                          </div>
                       </button>
                       
                       <AnimatePresence>
                          {openIndex === i && (
                             <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                             >
                                <div className="px-5 pb-5 pt-0">
                                   <div className="h-px w-full bg-slate-100 mb-4"></div>
                                   <p className="text-slate-600 leading-relaxed font-medium">
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

      <CallPopup
        isOpen={callOpen}
        onClose={() => setCallOpen(false)}
        phone={settings.phone}
      />
    </section>
  );
};

export default FAQSection;
