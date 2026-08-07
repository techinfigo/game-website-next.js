'use client';

import React, { useEffect, useState } from 'react';
import { RefreshCw, Ban, FileText, Clock, AlertTriangle, Mail, ChevronRight, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const RefundPolicy: React.FC = () => {
  const settings = useSiteSettings();
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'section-1', title: 'Eligibility for Refund', icon: CheckCircle2 },
    { id: 'section-2', title: 'Non-Refundable Circumstances', icon: Ban },
    { id: 'section-3', title: 'Refund Request Procedure', icon: FileText },
    { id: 'section-4', title: 'Cancellation of Enrollment', icon: AlertTriangle },
    { id: 'section-5', title: 'Refund Timeline', icon: Clock },
    { id: 'section-6', title: 'Course Content Usage', icon: AlertTriangle },
    { id: 'section-7', title: 'Contact Us', icon: Mail },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-slate-50 min-h-screen">
      {/* Background Elements Wrapper - Handles overflow for bg only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4"></div>
         <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[80px] translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-slate-100">
              <RefreshCw size={16} className="text-gameTeal" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Financial Policy</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Refund <span className="text-gameTeal">Policy</span>
           </h1>
           <p className="text-slate-600 text-lg leading-relaxed">
             At GAME, we strive to provide high-quality education. We understand that certain situations may require a refund. Below is our detailed policy to ensure transparency.
           </p>
           <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400 font-medium">
              <Calendar size={14} />
              <span>Last Updated: October 2023</span>
           </div>
        </div>

        {/* Layout Fix: Removed 'items-start' so columns stretch to full height */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Column: Stretches to height of content */}
          <div className="hidden lg:block lg:col-span-3 relative">
             {/* Sticky Inner Container */}
             <div className="sticky top-32 z-20">
               <div className="bg-white rounded-2xl p-2 shadow-xl shadow-slate-200/50 border border-slate-100 max-h-[calc(100vh-10rem)] overflow-y-auto custom-scrollbar">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold transition-all duration-300 group text-left ${
                        activeSection === section.id 
                          ? 'bg-gameTeal text-white shadow-md' 
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <section.icon size={18} className={`shrink-0 ${activeSection === section.id ? 'text-gameGold' : 'text-slate-400 group-hover:text-slate-600'}`} />
                      <span className="truncate">{section.title}</span>
                      {activeSection === section.id && <ChevronRight size={16} className="ml-auto shrink-0" />}
                    </button>
                  ))}
               </div>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <motion.div 
              id="section-1" 
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">1. Eligibility for Refund</h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 mb-4">Refunds will only be processed under the following conditions:</p>
                <div className="grid gap-4">
                   {[
                      { title: "Technical Issues", desc: "If you face technical problems preventing access that we cannot resolve." },
                      { title: "Duplicate Payment", desc: "In case of double payments, we will process a full refund after verification." },
                      { title: "Course Unavailability", desc: "If a purchased course is no longer available or discontinued." },
                      { title: "Unsatisfactory Access", desc: "If unsatisfied within 7 days and <20% content accessed (Subject to change)." }
                   ].map((item, i) => (
                      <div key={i} className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100 flex gap-4">
                         <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                         <div>
                            <h3 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              id="section-2"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                    <Ban size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">2. Non-Refundable Circumstances</h2>
              </div>
              <ul className="space-y-3">
                 {[
                    "Change of Mind after purchase.",
                    "Accessed or downloaded more than 20% of the course.",
                    "Subscription-based services once the period has started.",
                    "Promotional Discounts & Offers / Coupon Code purchases.",
                    "Test Series, Downloadable Materials, or Hard Copy resources.",
                    "Failure to pass exams or dissatisfaction with results."
                 ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                       <Ban size={16} className="text-rose-400 mt-0.5 shrink-0" />
                       <span className="text-slate-600 text-sm">{item}</span>
                    </li>
                 ))}
              </ul>
            </motion.div>

            <motion.div 
              id="section-3"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <FileText size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">3. Refund Request Procedure</h2>
              </div>
              <div className="space-y-6">
                 <div className="relative pl-8 border-l-2 border-blue-100 space-y-8">
                    {[
                       { step: "1", title: "Submit Request", desc: `Email ${settings.email} within 7 days. Include Name, Course, Order ID & Reason.` },
                       { step: "2", title: "Verification", desc: "Our team will verify your claim and course progress." },
                       { step: "3", title: "Approval/Denial", desc: "We will inform you via email within 7-10 business days." },
                       { step: "4", title: "Processing", desc: "If approved, refund is processed within 5-7 business days." }
                    ].map((step, i) => (
                       <div key={i} className="relative">
                          <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-blue-100 border-2 border-white text-blue-600 flex items-center justify-center text-xs font-bold shadow-sm">
                             {step.step}
                          </div>
                          <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                          <p className="text-slate-600 text-sm">{step.desc}</p>
                       </div>
                    ))}
                 </div>
              </div>
            </motion.div>

            <motion.div 
              id="section-4"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <AlertTriangle size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">4. Cancellation of Enrollment</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-amber-50 p-5 rounded-2xl border border-amber-100">
                    <h3 className="font-bold text-amber-900 mb-2">Within 7 Days</h3>
                    <p className="text-amber-800/80 text-sm">Eligible for refund if criteria met.</p>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">After 7 Days</h3>
                    <p className="text-slate-500 text-sm">No refunds allowed regardless of reason.</p>
                 </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
               <motion.div 
                 id="section-5"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Clock className="text-purple-600" />
                     <h3 className="text-xl font-bold text-slate-900">5. Refund Timeline</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Refunds are generally processed within <strong>7-10 business days</strong> after approval. Delays may depend on your bank or payment provider.
                  </p>
               </motion.div>

               <motion.div 
                 id="section-6"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <AlertTriangle className="text-red-600" />
                     <h3 className="text-xl font-bold text-slate-900">6. Usage Policy</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     Access is <strong>Non-Transferable</strong>. Sharing access or downloading/distributing materials is a violation and may lead to termination without refund.
                  </p>
               </motion.div>
            </div>

            <motion.div 
              id="section-7"
              className="bg-gameTeal/5 p-8 md:p-10 rounded-3xl border border-gameTeal/20 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gameTeal shadow-sm">
                    <Mail size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">7. Contact Us</h2>
              </div>
              <p className="text-slate-600 mb-6">
                 For any refund, cancellation, or technical assistance inquiries, please contact us at:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <a href={`mailto:${settings.email}`} className="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 hover:border-gameTeal transition-colors group">
                    <Mail className="text-slate-400 group-hover:text-gameTeal transition-colors" />
                    <span className="font-medium text-slate-900">{settings.email}</span>
                 </a>
                 <div className="flex-1 bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Support Hours</div>
                    <div className="text-sm font-bold text-slate-900">Mon - Fri, 10:00 AM – 6:00 PM</div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;