'use client';

import React, { useEffect, useState } from 'react';
import { FileText, User, Shield, CreditCard, AlertTriangle, Gavel, Book, Globe, ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsOfUse: React.FC = () => {
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
    { id: 'section-1', title: 'Introduction', icon: FileText },
    { id: 'section-2', title: 'User Accounts', icon: User },
    { id: 'section-3', title: 'Intellectual Property', icon: Shield },
    { id: 'section-4', title: 'User Conduct', icon: Globe },
    { id: 'section-5', title: 'Payments & Refunds', icon: CreditCard },
    { id: 'section-6', title: 'Limitation of Liability', icon: AlertTriangle },
    { id: 'section-7', title: 'Termination', icon: Book },
    { id: 'section-8', title: 'Governing Law', icon: Gavel },
  ];

  return (
    <section className="relative pt-32 pb-20 bg-slate-50 min-h-screen">
      
      {/* Background Elements Wrapper - Handles overflow for bg only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-slate-100">
              <Gavel size={16} className="text-gameTeal" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Legal Agreement</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Terms of <span className="text-gameTeal">Use</span>
           </h1>
           <p className="text-slate-600 text-lg leading-relaxed">
             Welcome to GAME Academy. By accessing our platform, you agree to these terms tailored to ensure a safe and productive learning environment.
           </p>
           <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400 font-medium">
              <Calendar size={14} />
              <span>Last Updated: October 2023</span>
           </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Navigation - Sticky */}
          <div className="hidden lg:block lg:col-span-3 relative h-full">
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
                    <FileText size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
              </div>
              
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  These Terms of Use ("Terms") govern your use of the GAME Academy website, mobile application, and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms.
                </p>
                <p>
                  If you do not agree to these Terms, please do not use the Platform. We reserve the right to modify these Terms at any time, and such modifications shall be effective immediately upon posting on the Platform.
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
                    <User size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">2. User Accounts</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Registration</h3>
                    <p className="text-sm text-slate-600">You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
                 </div>
                 <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2">Security</h3>
                    <p className="text-sm text-slate-600">You agree to notify us immediately of any unauthorized use of your account. GAME Academy is not liable for any loss arising from your failure to comply.</p>
                 </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div 
              id="section-3"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <Shield size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">3. Intellectual Property</h2>
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">
                 The content on the Platform, including but not limited to text, graphics, logos, videos, study materials, and software, is the property of GAME Academy and is protected by copyright and other intellectual property laws.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5 flex gap-4 items-start">
                 <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={20} />
                 <div>
                    <h4 className="font-bold text-amber-900 mb-1">Restrictions</h4>
                    <p className="text-sm text-amber-800/80">You may not reproduce, distribute, modify, create derivative works of, publicly display, or commercially exploit any content without our express written permission.</p>
                 </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div 
              id="section-4"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Globe size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">4. User Conduct</h2>
              </div>
              
              <ul className="space-y-4 text-slate-600">
                 {[
                    "Use the Platform for lawful purposes only.",
                    "Do not harass, abuse, or harm another person.",
                    "Do not share your account credentials with others.",
                    "Do not attempt to reverse engineer any part of the Platform.",
                    "Do not upload malicious code or viruses."
                 ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                       <span>{item}</span>
                    </li>
                 ))}
              </ul>
            </motion.div>

            {/* Section 5 */}
            <motion.div 
              id="section-5"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                 <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600">
                    <CreditCard size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">5. Payments & Refunds</h2>
              </div>
              <p className="text-slate-600 mb-4">
                 All payments are processed securely. Course fees are detailed at the time of purchase.
              </p>
              <p className="text-slate-600">
                 For details regarding refunds, please refer to our <a href="#" className="text-gameTeal font-bold hover:underline">Refund Policy</a>. Generally, refunds are only available under specific conditions such as technical errors or within a limited window as described.
              </p>
            </motion.div>

            {/* Section 6 & 7 & 8 */}
            <div className="space-y-8">
               <motion.div 
                 id="section-6"
                 className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
               >
                  <div className="flex items-center gap-3 mb-4">
                     <AlertTriangle className="text-orange-500" />
                     <h3 className="text-xl font-bold text-slate-900">6. Limitation of Liability</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                     GAME Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Platform.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 gap-8">
                  <motion.div 
                    id="section-7"
                    className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <Book className="text-purple-500" />
                        <h3 className="text-xl font-bold text-slate-900">7. Termination</h3>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                     </p>
                  </motion.div>

                  <motion.div 
                    id="section-8"
                    className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
                  >
                     <div className="flex items-center gap-3 mb-4">
                        <Gavel className="text-gray-700" />
                        <h3 className="text-xl font-bold text-slate-900">8. Governing Law</h3>
                     </div>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                     </p>
                  </motion.div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;