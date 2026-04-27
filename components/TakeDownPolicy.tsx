
'use client';

import React, { useEffect, useState } from 'react';
import { Flag, FileText, Mail, Clock, RotateCcw, AlertTriangle, Edit, Layers, ChevronRight, Calendar, Copyright } from 'lucide-react';
import { motion } from 'framer-motion';

const TakeDownPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6', 'section-7', 'section-8'];
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
    { id: 'section-1', title: 'Purpose', icon: Flag },
    { id: 'section-2', title: 'Reporting Procedure', icon: FileText },
    { id: 'section-3', title: 'Where to Send', icon: Mail },
    { id: 'section-4', title: 'Response Time', icon: Clock },
    { id: 'section-5', title: 'Counter-Notice', icon: RotateCcw },
    { id: 'section-6', title: 'Consequences', icon: AlertTriangle },
    { id: 'section-7', title: 'Modifications', icon: Edit },
    { id: 'section-8', title: 'Other Services', icon: Layers },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-slate-50 min-h-screen">
      
      {/* Background Elements Wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-slate-100">
              <Copyright size={16} className="text-gameTeal" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Copyright & IP</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Take Down <span className="text-gameTeal">Policy</span>
           </h1>
           <p className="text-slate-600 text-lg leading-relaxed">
             At GAME The Winners' Choice, we respect intellectual property rights. This policy outlines how to report copyright infringements and our process for addressing them.
           </p>
           <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400 font-medium">
              <Calendar size={14} />
              <span>Last Updated: October 2023</span>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Column */}
          <div className="hidden lg:block lg:col-span-3 relative">
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
            
            {/* Section 1 */}
            <motion.div 
              id="section-1" 
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Flag size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">1. Purpose</h2>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  This policy is designed to guide individuals or organizations on how to submit takedown requests if they believe that their copyrighted material is being used on our website without permission. We take such complaints seriously and will act promptly to investigate and resolve them.
                </p>
                <p>
                  We are committed to maintaining the integrity of the educational content we provide, primarily targeted at Mechanical and Civil Engineers preparing for competitive exams like GATE, ESE, PSUs, SSC JE & AE.
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div 
              id="section-2"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <FileText size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">2. Reporting Copyright Infringement</h2>
              </div>
              <p className="text-slate-600 mb-6">
                 To ensure efficient processing, please include the following in your written complaint:
              </p>
              <div className="grid gap-4">
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Contact Information</h3>
                    <p className="text-sm text-slate-600">Full name, company name (if applicable), email address, and phone number.</p>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Description of Material</h3>
                    <p className="text-sm text-slate-600">Identification of infringing material with specific URLs, screenshots, or details to locate it.</p>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Proof of Ownership</h3>
                    <p className="text-sm text-slate-600">Evidence of copyright ownership or authorization to act on behalf of the owner (e.g., registration numbers).</p>
                 </div>
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Legal Statement</h3>
                    <p className="text-sm text-slate-600">A statement of good-faith belief of unauthorized use and a statement under penalty of perjury regarding accuracy.</p>
                 </div>
              </div>
            </motion.div>

            {/* Section 3 & 4 */}
            <div className="grid md:grid-cols-2 gap-8">
               <motion.div 
                 id="section-3"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Mail className="text-purple-600" />
                     <h3 className="text-xl font-bold text-slate-900">3. Where to Send</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">
                     Please submit your takedown request via email to:
                  </p>
                  <a href="mailto:info@gameacademy.in" className="inline-flex items-center gap-2 text-gameTeal font-bold bg-gameTeal/10 px-4 py-2 rounded-lg hover:bg-gameTeal/20 transition-colors">
                     info@gameacademy.in
                  </a>
               </motion.div>

               <motion.div 
                 id="section-4"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Clock className="text-orange-600" />
                     <h3 className="text-xl font-bold text-slate-900">4. Response Time</h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                     We aim to acknowledge receipt within <strong>48 hours</strong> and will resolve the issue as quickly as possible, typically within <strong>5-7 business days</strong> depending on complexity.
                  </p>
               </motion.div>
            </div>

            {/* Section 5 */}
            <motion.div 
              id="section-5"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <RotateCcw size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">5. Counter-Notice</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                 If you believe your content was removed in error, you may file a counter-notice. This must include your contact info, identification of the removed material, and a statement under penalty of perjury that you have a good faith belief the material was removed by mistake.
              </p>
            </motion.div>

            {/* Section 6 */}
            <motion.div 
              id="section-6"
              className="bg-rose-50/50 p-8 md:p-10 rounded-3xl border border-rose-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600">
                    <AlertTriangle size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">6. Consequences</h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                 Submitting false claims of copyright infringement can result in legal liability for damages, including court costs and attorney's fees. Please act responsibly and ensure your claim is valid before submitting.
              </p>
            </motion.div>

            {/* Section 7 & 8 */}
            <div className="grid md:grid-cols-2 gap-8">
               <motion.div 
                 id="section-7"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Edit className="text-cyan-600" />
                     <h3 className="text-xl font-bold text-slate-900">7. Modifications</h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                     We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting on this page.
                  </p>
               </motion.div>

               <motion.div 
                 id="section-8"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <Layers className="text-gray-600" />
                     <h3 className="text-xl font-bold text-slate-900">8. Other Services</h3>
                  </div>
                  <p className="text-slate-600 text-sm">
                     This policy applies to all services offered by GAME Academy, including our website, mobile app, and online study materials.
                  </p>
               </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TakeDownPolicy;
