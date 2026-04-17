'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Lock, Eye, FileText, UserCheck, Bell, ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section-1');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'];
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
    { id: 'section-1', title: 'Collection of Information', icon: FileText },
    { id: 'section-2', title: 'Use of Information', icon: UserCheck },
    { id: 'section-3', title: 'Sharing of Information', icon: Eye },
    { id: 'section-4', title: 'Information Security', icon: Lock },
    { id: 'section-5', title: 'Choice/Opt-Out', icon: Bell },
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
              <Shield size={16} className="text-gameTeal" />
              <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Legal & Privacy</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
             Privacy <span className="text-gameTeal">Policy</span>
           </h1>
           <p className="text-slate-600 text-lg leading-relaxed">
             Your privacy is important to us. This document explains how we collect, use, and protect your personal data when you use the GAME Academy Platform.
           </p>
           <div className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-400 font-medium">
              <Calendar size={14} />
              <span>Last Updated: October 2023</span>
           </div>
        </div>

        {/* Layout Fix: Grid items stretch to fill height */}
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sidebar Column */}
          <div className="hidden lg:block lg:col-span-3 relative">
             {/* Sticky Wrapper */}
             <div className="sticky top-32 z-20">
               <div className="bg-white rounded-2xl p-2 shadow-xl shadow-slate-200/50 border border-slate-100">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-sm font-bold transition-all duration-300 group ${
                        activeSection === section.id 
                          ? 'bg-gameTeal text-white shadow-md' 
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <section.icon size={18} className={activeSection === section.id ? 'text-gameGold' : 'text-slate-400 group-hover:text-slate-600'} />
                      {section.title}
                      {activeSection === section.id && <ChevronRight size={16} className="ml-auto" />}
                    </button>
                  ))}
               </div>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* Intro Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
               <p className="text-slate-700 leading-relaxed">
                 Please carefully read the Privacy Policy governing the services available on <span className="font-bold text-gameTeal">https://gameacademy.in/</span> or via the GAME Mobile Application. By using the Platform, you consent to the data practices described in this statement.
               </p>
            </div>

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
                 <h2 className="text-2xl font-bold text-slate-900">1. Collection of Personal Information</h2>
              </div>
              
              <div className="space-y-6 text-slate-600">
                <p>We collect certain personal information to enhance our ability to serve you. This includes:</p>
                <div className="grid md:grid-cols-2 gap-4">
                   {['Name', 'Phone Number', 'Email Address', 'Service Address', 'IP Address', 'Device Info', 'Network Info', 'Institution Details'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-slate-50 px-4 py-3 rounded-xl border border-slate-200/60">
                         <div className="w-1.5 h-1.5 rounded-full bg-gameTeal"></div>
                         <span className="font-medium text-slate-800 text-sm">{item}</span>
                      </div>
                   ))}
                </div>
                <p className="text-sm bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800 leading-relaxed mt-4">
                   <strong>Note:</strong> During registration, you may be asked for username, password, graduation year, and specialty. You may also upload a profile picture.
                </p>
                <div className="text-sm space-y-4 pt-4">
                   <p><strong>1.3 Social Login:</strong> We offer registration via Facebook. This grants us access to your public profile and friend list subject to Facebook's policies.</p>
                   <p><strong>1.4 Secure Storage:</strong> We store details like username and country on unencrypted servers, but passwords are hashed and emails encrypted.</p>
                </div>
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
                    <UserCheck size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">2. Use of Personal Information</h2>
              </div>
              
              <ul className="space-y-4">
                 {[
                    "Finding third-party service providers",
                    "Internal record-keeping",
                    "Improving our products and services",
                    "Sending promotional emails about new offers",
                    "Customizing the website to your preferences"
                 ].map((use, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <ChevronRight size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                       <span className="text-slate-600">{use}</span>
                    </li>
                 ))}
              </ul>
              <p className="mt-6 text-slate-600 text-sm">
                 We also use data to resolve disputes, detect fraud, diagnose server issues, and gather demographic insights.
              </p>
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
                    <Eye size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">3. Sharing of Information</h2>
              </div>
              
              <div className="prose prose-slate max-w-none text-slate-600">
                 <p className="mb-4">
                    Your information may be shared with payment providers, regulators, or third-party agencies if required by law.
                 </p>
                 <div className="bg-amber-50/50 p-5 rounded-2xl border border-amber-100/50 space-y-3">
                    <p className="text-sm">
                       <strong>Legal Requirements:</strong> We may disclose info in good faith to respond to legal processes or protect safety/rights.
                    </p>
                    <p className="text-sm">
                       <strong>Mergers:</strong> In case of business reorganization, your data may be shared with the new entity.
                    </p>
                    <p className="text-sm">
                       <strong>Advertisers:</strong> We do NOT share personally identifiable info with advertisers, only aggregated/anonymized data.
                    </p>
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
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-600">
                    <Lock size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">4. Information Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed border-l-4 border-rose-500 pl-4 bg-rose-50/30 p-4 rounded-r-xl">
                 All personal information is securely stored on servers with password protection to prevent unauthorized access. We follow strict security protocols to protect your data.
              </p>
            </motion.div>

            {/* Section 5 */}
            <motion.div 
              id="section-5"
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 scroll-mt-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Bell size={24} />
                 </div>
                 <h2 className="text-2xl font-bold text-slate-900">5. Choice/Opt-Out</h2>
              </div>
              <p className="text-slate-600 mb-6">
                 You can opt out of receiving non-essential promotional communications from us by writing to us.
              </p>
              <a href="mailto:info@gameacademy.in" className="inline-flex items-center gap-2 text-gameTeal font-bold hover:underline bg-gameTeal/5 px-6 py-3 rounded-xl border border-gameTeal/20 transition-all hover:bg-gameTeal/10">
                 info@gameacademy.in
              </a>
            </motion.div>

            {/* Footer Note */}
            <div className="text-center pt-8 text-slate-400 text-sm">
               For more details, please refer to our Terms of Use.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;