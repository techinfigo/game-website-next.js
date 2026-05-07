'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Globe, Target, Shield, Users, Sparkles, Briefcase, TrendingUp, Award, Building2, Coffee, Atom, Droplets, Flame, Zap, Wind, Factory, Mountain, Cpu, Ship, Plane, ScrollText, ChevronDown } from 'lucide-react';

const PsuExamPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gameBlack selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* Hero Section Placeholder */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-[#075d63] text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <Sparkles size={14} className="text-gameGold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gameGold">Under Construction</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                  PSU Recruitment <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-gameGold">
                     New Guidelines
                  </span>
               </h1>

               <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  We are rebuilding this section with the latest 2025-26 recruitment content. Stay tuned for the new structure.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 1. Government Research and Development Sector Section */}
      <section className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-20">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
               >
                  <div className="bg-gameTeal text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px] inline-block mb-4 shadow-sm">
                    Sector Overview
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gameBlack leading-[1.1] mb-6">
                     Government Research and <br className="hidden md:block" /> 
                     Development <span className="text-gameTeal italic">Sector</span> <span className="text-slate-400 font-light">(Govt. R&D)</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gameGold mx-auto rounded-full"></div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  {
                     number: "1-",
                     title: "Be the Architect of National Legacy, Not Just a Coder in a Cubicle.",
                     imageIdea: "A split-screen visual. Left side: A sleek, minimalist but anonymous office desk with a code editor. Right side: A powerful, wide-angle shot from behind an engineer at dawn, looking up at a majestic rocket on the launch pad, their silhouette small against its grandeur.",
                     tagline: "Build for a Company. Or Build for a Country.",
                     icon: Rocket,
                     delay: 0
                  },
                  {
                     number: "2.",
                     title: "Unparalleled Depth & Breadth of Cutting-Edge Work.",
                     imageIdea: "A dynamic, circular infographic morphing between four iconic symbols: a satellite orbit transforming into a double-helix DNA strand, morphing into a composite material weave, and then into a cybersecurity shield. All is contained within the silhouette of India's map.",
                     tagline: "One Career, Infinite Frontiers.",
                     icon: Globe,
                     delay: 0.1
                  },
                  {
                     number: "3.",
                     title: "The Ultimate Confluence of Intellectual Challenge & Sovereign Impact.",
                     imageIdea: "An intense, close-up shot of a young scientist's eyes, reflected in the visor of a space helmet or the screen of a radar console. In the reflection, we see not their face, but the abstract visual of a successful missile interception or a satellite deployment.",
                     tagline: "The Nation's Most Critical Problems Need Your Genius.",
                     icon: Target,
                     delay: 0.2
                  },
                  {
                     number: "4.",
                     title: "Stability with a Soul: A Career Immune to Market Volatility.",
                     imageIdea: "A serene, time-lapse shot. In the foreground, a researcher in a lab coat calmly takes notes, bathed in steady light. Outside the window behind them, a dynamic cityscape with stock market graphs flashes and changes rapidly, but the researcher's world remains focused and undisturbed.",
                     tagline: "In a World of Noise, Focus on the Mission.",
                     icon: Shield,
                     delay: 0.3
                  },
                  {
                     number: "5.",
                     title: "A Brotherhood / Sisterhood of the Best Minds, Driven by Passion.",
                     imageIdea: "A powerful, low-angle group shot. Not posing, but caught in a moment of collaborative triumph—a diverse team of young and senior scientists in a control room, all looking up at a large successful data screen, one senior scientist with a hand on a young recruit's shoulder.",
                     tagline: "Stand on the Shoulders of Giants. And Let Others Stand on Yours.",
                     icon: Users,
                     delay: 0.4
                  }
               ].map((item, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: item.delay, duration: 0.6 }}
                     className="group flex h-full"
                  >
                     <div className="bg-white rounded-[2.5rem] border border-slate-200 hover:border-gameTeal/30 hover:shadow-2xl hover:shadow-gameTeal/5 transition-all duration-500 overflow-hidden flex flex-col w-full">
                        {/* Upper Content */}
                        <div className="p-8 pb-4">
                           <div className="flex items-start justify-between mb-8">
                              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-gameTeal group-hover:bg-gameTeal group-hover:text-white transition-all duration-500 shadow-inner">
                                 <item.icon size={28} />
                              </div>
                              <span className="text-4xl font-black text-slate-100 group-hover:text-gameTeal/10 transition-colors pointer-events-none">{item.number}</span>
                           </div>
                           <h3 className="text-xl font-black text-gameBlack leading-tight mb-6 group-hover:text-gameTeal transition-colors">
                              {item.title}
                           </h3>
                        </div>

                        {/* Middle Content - Detail */}
                        <div className="px-8 flex-grow">
                           <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-gameTeal/[0.02] transition-colors relative">
                              <span className="absolute -top-3 left-4 text-[9px] font-black uppercase tracking-[0.2em] text-gameTeal bg-white border border-gameTeal/20 px-2 py-0.5 rounded-full">Visual Concept</span>
                              <p className="text-slate-500 text-sm font-bold leading-relaxed">
                                 {item.imageIdea}
                              </p>
                           </div>
                        </div>

                        {/* Lower Content - Tagline */}
                        <div className="p-8 pt-6 mt-4 border-t border-slate-100 bg-slate-50/30">
                           <p className="text-gameBlack font-black italic leading-tight text-lg">
                              &quot;{item.tagline}&quot;
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}
               
               {/* Decorative card to fill grid if needed or just as secondary CTA */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-gameTeal text-white text-center shadow-xl shadow-gameTeal/20 border-4 border-white/10"
               >
                  <Sparkles size={48} className="text-gameGold mb-6 animate-pulse" />
                  <h3 className="text-2xl font-black mb-4">The Mission Awaits</h3>
                  <p className="text-teal-100 font-bold text-sm leading-relaxed mb-8">
                     Connect with your direct destiny in Indian Research & Infrastructure.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. Public Sector Units (PSUs) Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-20">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
               >
                  <div className="bg-gameGold text-slate-900 px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px] inline-block mb-4 shadow-sm">
                    Corporate Growth
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gameBlack leading-[1.1] mb-6">
                     Public Sector <span className="text-gameTeal italic">Units</span> <span className="text-slate-400 font-light">(PSUs)</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gameTeal mx-auto rounded-full"></div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  {
                     number: "1-",
                     title: "The Best of Both Worlds: Professional Success and Personal Fulfilment.",
                     imageIdea: "A split-image or a clever composite. Left side: A sharp, formal blazer lay over an office chair with a government seal embossed on the wall. Right side: A modern tech gadget (like a sleek tablet) and a performance bonus cheque on a contemporary desk. The central figure (a confident young professional) seamlessly bridges both halves.",
                     styleDesc: "Clean, dual-tone colour scheme (deep blue for trust/prestige, and vibrant orange for energy/reward). Conveys balance and the best of both.",
                     icon: Briefcase,
                     delay: 0
                  },
                  {
                     number: "2-",
                     title: "Be at the Forefront of National Growth.",
                     imageIdea: "A dynamic, low-angle shot of a diverse group of confident engineers/executives in hard hats or business attire, walking confidently at a massive project site (like a refinery or a solar farm). Superimposed faintly in the skyline are iconic Indian landmarks and rising graphs.",
                     styleDesc: "Cinematic, inspiring, and grand. Use a wide-angle lens to emphasise scale. Filter: Bold and hopeful.",
                     icon: TrendingUp,
                     delay: 0.1
                  },
                  {
                     number: "3-",
                     title: "Accelerated Growth & Premium Rewards.",
                     imageIdea: "A symbolic \"career ladder\" graphic, but each rung is made of different reward icons—a graduation cap (promotion), a gold coin (salary), a car key (allowances), a family at a holiday destination (LTC), a house (security). An arrow shoots up the ladder rapidly.",
                     styleDesc: "Infographic-inspired but visually rich and 3D. Metallic gold and blue accents to denote premium value.",
                     icon: Award,
                     delay: 0.2
                  },
                  {
                     number: "4-",
                     title: "A Universe of Opportunities Under One Roof.",
                     imageIdea: "An isometric illustration of a large, impressive \"PSU Headquarters\" building. From its many windows, icons representing different industries are emerging—oil rigs, wind turbines, satellite dishes, financial charts, railway networks—all connected to one central, strong foundation.",
                     styleDesc: "Modern flat illustration, vibrant but organised. Shows diversity rooted in solidity.",
                     icon: Building2,
                     delay: 0.3
                  },
                  {
                     number: "5-",
                     title: "Work-Life Harmony with Substance.",
                     imageIdea: "A split-screen storytelling image. Top half (Work): A focused professional in a lab or control room, solving a complex problem. Bottom half (Life): The same person, relaxed and smiling, enjoying a hobby (trekking/reading/with family) in daylight. The transition between halves is soft and natural.",
                     styleDesc: "Warm, authentic, and relatable photography. Focus on genuine smiles and a sense of fulfilment in both frames.",
                     icon: Coffee,
                     delay: 0.4
                  }
               ].map((item, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: item.delay, duration: 0.6 }}
                     className="group flex h-full"
                  >
                     <div className="bg-white rounded-[2.5rem] border border-slate-200 hover:border-gameGold/30 hover:shadow-2xl hover:shadow-gameGold/5 transition-all duration-500 overflow-hidden flex flex-col w-full">
                        {/* Upper Content */}
                        <div className="p-8 pb-4">
                           <div className="flex items-start justify-between mb-8">
                              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-gameGold group-hover:bg-gameGold group-hover:text-white transition-all duration-500 shadow-inner">
                                 <item.icon size={28} />
                              </div>
                              <span className="text-4xl font-black text-slate-100 group-hover:text-gameGold/10 transition-colors pointer-events-none">{item.number}</span>
                           </div>
                           <h3 className="text-xl font-black text-gameBlack leading-tight mb-6 group-hover:text-gameGold transition-colors">
                              {item.title}
                           </h3>
                        </div>

                        {/* Middle Content - Detail */}
                        <div className="px-8 flex-grow space-y-6">
                           <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-gameGold/[0.02] transition-colors relative">
                              <span className="absolute -top-3 left-4 text-[9px] font-black uppercase tracking-[0.2em] text-gameGold bg-white border border-gameGold/20 px-2 py-0.5 rounded-full">Visual Concept</span>
                              <p className="text-slate-500 text-sm font-bold leading-relaxed">
                                 {item.imageIdea}
                              </p>
                           </div>
                        </div>

                        {/* Lower Content - Style */}
                        <div className="p-8 pt-6 mt-4 border-t border-slate-100 bg-slate-50/30">
                           <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">Atmosphere & Style</span>
                           <p className="text-gameBlack font-bold leading-tight text-sm italic">
                              {item.styleDesc}
                           </p>
                        </div>
                     </div>
                  </motion.div>
               ))}

               {/* Secondary card to fill grid */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="hidden lg:flex flex-col items-center justify-center p-8 rounded-[2.5rem] border-4 border-dashed border-slate-200 text-center"
               >
                  <Building2 size={48} className="text-slate-200 mb-6" />
                  <h3 className="text-2xl font-black text-slate-300 mb-4">India&apos;s Pillars</h3>
                  <p className="text-slate-400 font-bold text-sm leading-relaxed">
                     Modern infrastructure built on the bedrock of Public Sector excellence.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. Detailed Organization Section: ISRO */}
      <section className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gameBlack leading-[1.1] mb-4">
                     GOVERNMENT <span className="text-gameTeal">R&D</span> <br /> SECTOR
                  </h2>
                  <div className="w-24 h-1.5 bg-gameGold mx-auto rounded-full"></div>
               </motion.div>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Rocket size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           Indian Space Research Organisation (ISRO)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           India&apos;s premier space agency, known for Chandrayaan & Mangalyaan. Your work here powers national missions.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Scientist/Engineer 'SC' (Electronics/Mechanical/Computer Science)." },
                           { label: "Eligibility", value: "BE/B.Tech (Minimum 65%)" },
                           { label: "Pay Scale", value: "Basic Pay Rs. 56,000 per month + other allowances." },
                           { label: "Selection", value: "Online Test (Technical + Aptitude) + Interview." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ ISRO */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ ISRO:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           "Work on India's biggest R&D projects — from satellites to rockets.",
                           "Job is a Mission: Build technology with national impact.",
                           "Stability & Growth: Prestigious Group A post, excellent work-life balance.",
                           "Elite Ecosystem: Learn from top scientists, global collaborations."
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-4">
                              <div className="w-2 h-2 rounded-full bg-gameGold mt-2 shrink-0"></div>
                              <p className="text-slate-700 font-bold leading-tight">{item}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* BARC Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameGold/10 flex items-center justify-center text-gameGold shadow-inner shrink-0">
                        <Atom size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           Bhabha Atomic Research Centre (BARC)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           Bhabha Atomic Research Centre (BARC) is India&apos;s premier nuclear research and development organisation under the Department of Atomic Energy (DAE). It is the heart of India&apos;s nuclear science, power, and technology programs.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Program", value: "OCES (1-year training) / DGFS (M.Tech + training) for Scientist Officer 'C'." },
                           { label: "Eligibility", value: "BE/B.Tech (60%+) in core engineering or M.Sc (60%+) in Physics, Chemistry, Biosciences, Geology." },
                           { label: "Selection", value: "Screening via Online Exam or GATE Score, followed by an Interview." },
                           { label: "Pay Scale", value: "₹74,000/- per month during training & Gross salary 1,35,000 approx. per month after training." },
                           { label: "Post-Training", value: "Guaranteed placement as Scientific Officer 'C' (Group A Gazetted Officer) in prestigious DAE units like BARC, IGCAR, NPCIL." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ BARC */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ BARC:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           "Work on mission-critical national projects in nuclear energy, reactors, and advanced research.",
                           "Unmatched job security, a prestigious career, and structured growth.",
                           "Pursue an M.Tech at IIT (via DGFS) while being a paid DAE employee.",
                           "Contribute to India's energy security and technological sovereignty."
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-4">
                              <div className="w-2 h-2 rounded-full bg-gameGold mt-2 shrink-0"></div>
                              <p className="text-slate-700 font-bold leading-tight">{item}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* DRDO Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Shield size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           Defence Research and Development Organisation (DRDO)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           The Defence Research & Development Organisation (DRDO) is India&apos;s largest and most diverse defence research and development agency under the Ministry of Defence. Its mission is to design, develop, and produce state-of-the-art weapon systems, platforms, and allied technologies for the Indian Armed Forces.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Scientist 'B' (in various engineering & science streams)." },
                           { label: "Eligibility", value: "BE/B.Tech/M.Sc or equivalent (often with a valid GATE score)." },
                           { label: "Selection", value: "Typically involves shortlisting via GATE score, followed by a Written Exam (for some disciplines) and/or a Personal Interview." },
                           { label: "Pay Scale", value: "Basic Pay of ₹56,000 per month + other allowances." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ DRDO */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ DRDO:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           "Work on cutting-edge defence tech for missiles, radars, and combat systems with direct national impact.",
                           "Join as a respected Group 'A' officer with high job security and clear growth paths.",
                           "Collaborate with top scientists, major institutes (IITs), and the armed forces on advanced R&D.",
                           "Enjoy stability, great benefits, housing options, and the pride of securing the nation."
                        ].map((item, i) => (
                           <li key={i} className="flex items-start gap-4">
                              <div className="w-2 h-2 rounded-full bg-gameGold mt-2 shrink-0"></div>
                              <p className="text-slate-700 font-bold leading-tight">{i + 1}. {item}</p>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 4. Detailed PSU Exams Section: ONGC, IOCL */}
      <section className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gameBlack leading-[1.1] mb-4 uppercase">
                     PSUs <span className="text-gameTeal">Exams</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gameGold mx-auto rounded-full"></div>
               </motion.div>
            </div>

            {/* ONGC Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Droplets size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           1- Oil and Natural Gas Corporation Limited (ONGC)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           ONGC (Oil and Natural Gas Corporation) is a &apos;Maharatna&apos; Public Sector Enterprise and India&apos;s largest crude oil and natural gas company. It drives the nation&apos;s energy security by exploring and producing hydrocarbons.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Assistant Executive Engineer (AEE) at E1 level (Mechanical & Other Discipline)." },
                           { label: "Eligibility", value: "BE/B.Tech with 60% marks in relevant disciplines." },
                           { label: "Selection", value: "Computer-Based Test → Personal Interview (85% + 15% weightage)." },
                           { label: "Application", value: "Periodic notifications; online applications only." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ ONGC */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ ONGC:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Prestigious Role", value: "Class-I executive position in a Maharatna PSU." },
                           { label: "High CTC", value: "Approx. ₹15 - ₹18 Lakhs per annum including allowances, PRP, housing/HRA, and post-retirement benefits." },
                           { label: "Cutting-Edge Work", value: "Engage in upstream projects involving advanced technology and sustainable practices." },
                           { label: "Growth & Stability", value: "Excellent career progression, pan-India postings, and job security." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* IOCL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameGold/10 flex items-center justify-center text-gameGold shadow-inner shrink-0">
                        <Flame size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           2- Indian Oil Corporation of India Limited (IOCL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           IOCL is India&apos;s largest integrated oil and gas corporation, a Maharatna PSU. It fuels the nation&apos;s energy needs across refining, marketing, pipelines, and petrochemicals.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Junior Engineer/Officer (Diploma), Engineer/Officer (Graduate via GATE), Assistant Officer" },
                           { label: "Selection", value: "Computer-Based Test + GD/GT + Personal Interview (for Diploma) / GATE score + GD/GT + PI (for Graduates)" },
                           { label: "Key Tracks", value: "Diploma in Chemical, Mechanical, Electrical, Instrumentation; Graduate roles via GATE" }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ IOCL */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ IOCL:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Stability & Growth", value: "Permanent role in India's flagship energy PSU" },
                           { label: "Pay Scale", value: "Engineer/Officer ~ ₹17L CTC, Junior Engineer ~ ₹30,000 - ₹1,20,000 per month" },
                           { label: "Postings", value: "Nationwide across refineries, marketing, pipelines, R&D" },
                           { label: "Perks", value: "Housing, medical, LTA, PRP, gratuity, pension, and more" },
                           { label: "Work Impact", value: "Direct contribution to India's energy security and transition" }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* BHEL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Zap size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           3- Bharat Heavy Electricals Limited (BHEL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           BHEL is India&apos;s premier engineering and manufacturing PSU, established in 1964. It powers the nation&apos;s core sectors like energy, defence, and transportation with world-class products and services.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Posts", value: "Engineer Trainee (Graduate) & Supervisor Trainee (Diploma)" },
                           { label: "Selection", value: "Computer-Based Exam + Interview/Document Verification" },
                           { label: "Stability & Growth", value: "Permanent role in a Maharatna PSU" },
                           { label: "Pay Scale", value: "ET ~₹60,000 - ₹1,80,000 per month, ST ~ ₹33,500 - ₹1,20,000 per month." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ BHEL */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ BHEL:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Posting", value: "Manufacturing units or power sites across India" },
                           { label: "Training", value: "1-year training before absorption" },
                           { label: "Lifestyle", value: "Secure job, social respect, work in nation-building projects" }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* NTPC Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameGold/10 flex items-center justify-center text-gameGold shadow-inner shrink-0">
                        <Zap size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           4- National Thermal Power Corporation (NTPC)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           NTPC Limited is India&apos;s largest integrated power utility, established in 1975. It has evolved from a thermal power generator into a diversified energy major across conventional and renewable generation, mining, and green energy.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Exam Snapshot:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Primary Route", value: "Recruitment for Executive Engineer Trainee positions is primarily through GATE scores." },
                           { label: "Selection Stages", value: "Shortlisted candidates undergo Group Discussion (5% weightage) and Personal Interview (10% weightage)." },
                           { label: "Final Merit", value: "The final selection is based on a composite score: 85% GATE score, 5% GD, and 10% PI." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ NTPC */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Life @ NTPC:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Job Profile", value: "Roles in operations, project management, and core engineering across 70+ locations in India and abroad." },
                           { label: "Pay Scale", value: "NTPC Executive Trainee salary offers a competitive package, typically in the E1 Grade pay scale of ₹40,000 - ₹1,40,000 per month +other allowances." },
                           { label: "Growth & Stability", value: "A central government job offering high job security, professional growth, and a chance to contribute to national infrastructure." },
                           { label: "Lifestyle", value: "A stable and rewarding career with a competitive salary, comprehensive perks, and a strong emphasis on organisational values like safety, innovation, and mutual respect." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* GAIL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Wind size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           5- Gas Authority of India Limited (GAIL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           GAIL (India) Limited is a Maharatna PSU and the country&apos;s flagship natural gas company, leading India&apos;s transition to clean fuel.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Info Column 1 */}
                  <div className="p-8 md:p-12">
                     <ul className="space-y-6">
                        {[
                           { label: "Entry Path", value: "Based exclusively on GATE score." },
                           { label: "Key Posts", value: "Executive Trainee in Chemical, Instrumentation, Electrical & Mechanical." },
                           { label: "Eligibility", value: "Relevant B.E./B.Tech (min. 65% marks)." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-4">
                              <div className="w-2 min-w-[8px] h-2 rounded-full bg-gameTeal mt-3 shrink-0"></div>
                              <div className="flex flex-col">
                                 <span className="font-black text-gameTeal uppercase tracking-widest text-xs mb-1">{detail.label}:</span>
                                 <span className="text-slate-700 font-bold leading-relaxed">{detail.value}</span>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Info Column 2 */}
                  <div className="p-8 md:p-12">
                     <ul className="space-y-6">
                        {[
                           { label: "Stable & Rewarding", value: "One-year training in E-2 grade (₹60,000–1,80,000 pay scale) with excellent benefits." },
                           { label: "Dynamic Work", value: "Pan-India postings in a technically challenging, core infrastructure sector." },
                           { label: "National Impact", value: "Direct contribution to India's energy security and green energy transition." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-4">
                              <div className="w-2 min-w-[8px] h-2 rounded-full bg-gameGold mt-3 shrink-0"></div>
                              <div className="flex flex-col">
                                 <span className="font-black text-gameGold uppercase tracking-widest text-xs mb-1">{detail.label}:</span>
                                 <span className="text-slate-700 font-bold leading-relaxed">{detail.value}</span>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* SAIL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameGold/10 flex items-center justify-center text-gameGold shadow-inner shrink-0">
                        <Factory size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           6- Steel Authority of India Limited (SAIL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           SAIL (Steel Authority of India Limited) is a Maharatna public sector enterprise and the nation&apos;s leading steel producer, driving India&apos;s industrial and infrastructural growth. It offers young engineers a prestigious career as Management Trainees with excellent growth opportunities, job security, and a chance to contribute to the core sector.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Exam Snapshot */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Details:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Management Trainee (Technical)" },
                           { label: "Eligibility", value: "Engineering degree with 65% marks (relaxation for reserved categories)" },
                           { label: "Selection", value: "Online CBT → Group Discussion → Interview." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Life @ SAIL */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Growth & Impact:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Training & Growth", value: "1-year training as a Management Trainee, then Assistant Manager (E1 grade)." },
                           { label: "Attractive CTC", value: "Approx. ₹16-17 lakhs per annum at the minimum of the E1 grade (excluding Performance Related Pay (PRP) and location-based allowances)" },
                           { label: "Job Security", value: "Permanent role in a Maharatna PSU with opportunities for advancement." },
                           { label: "Impactful Role", value: "Contribute to core sectors like steel, infrastructure, and national development." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* HPCL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Droplets size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           7- Hindustan Petroleum Corporation Limited (HPCL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           HPCL is a Maharatna oil & gas giant, driving India&apos;s energy security through refining, marketing, and sustainable fuel initiatives.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Info Column 1 */}
                  <div className="p-8 md:p-12">
                     <ul className="space-y-6">
                        {[
                           { label: "Posts", value: "Various roles for Freshers & Experienced professionals in Engineering" },
                           { label: "Eligibility", value: "Varies by post (Diploma, Engineering, etc.) with a minimum of 65% marks for UR/OBC/EWS." },
                           { label: "Selection", value: "Computer-Based Test → Group Task → Personal Interview." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-4">
                              <div className="w-2 min-w-[8px] h-2 rounded-full bg-gameTeal mt-3 shrink-0"></div>
                              <div className="flex flex-col">
                                 <span className="font-black text-gameTeal uppercase tracking-widest text-xs mb-1">{detail.label}:</span>
                                 <span className="text-slate-700 font-bold leading-relaxed">{detail.value}</span>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Info Column 2 */}
                  <div className="p-8 md:p-12">
                     <ul className="space-y-6">
                        {[
                           { label: "Attractive CTC", value: "Ranges from ~₹10 Lakhs to ₹48 Lakhs per annum based on grade, plus PRP, HRA, and allowances." },
                           { label: "Growth & Stability", value: "Permanent role in a Maharatna PSU with clear career progression and pan-India postings." },
                           { label: "Impactful Work", value: "Contribute to India's energy security, sustainability, and infrastructure development." },
                           { label: "Lifestyle", value: "Dynamic roles, job security, excellent benefits, and the pride of powering the nation's growth." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-4">
                              <div className="w-2 min-w-[8px] h-2 rounded-full bg-gameGold mt-3 shrink-0"></div>
                              <div className="flex flex-col">
                                 <span className="font-black text-gameGold uppercase tracking-widest text-xs mb-1">{detail.label}:</span>
                                 <span className="text-slate-700 font-bold leading-relaxed">{detail.value}</span>
                              </div>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* Coal India Limited Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameGold/10 flex items-center justify-center text-gameGold shadow-inner shrink-0">
                        <Mountain size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           8- Coal India Limited (CIL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           Coal India Management Trainee (CIL-MT) is a prestigious entry-level program for engineers in India&apos;s largest coal producer. It offers a stable, high-growth career in the nation&apos;s core energy sector with competitive benefits.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Details */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Details:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Two Paths", value: "Recruits via GATE scores or its own Computer-Based Test (CBT)." },
                           { label: "Eligibility", value: "BE/B.Tech (min. 60%) in core engineering streams." },
                           { label: "Pay Scale", value: "CTC of Management trainee of CIL is roughly around 16-17 Lakh per annum." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Growth & Impact */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Growth & Impact:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Dynamic Start", value: "Posting across CIL's national subsidiaries with structured training." },
                           { label: "Rewarding Package", value: "Competitive salary, job security, and excellent benefits from day one." },
                           { label: "National Impact", value: "Work on critical projects powering India's growth and infrastructure." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* BEL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Cpu size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           9- Bharat Electronics Limited (BEL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           Bharat Electronics Limited (BEL) is a &apos;Navaratna&apos; Public Sector Undertaking (PSU) under the Ministry of Defence, Government of India. It is a leader in professional electronics across defence and strategic sectors.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Career & Application */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           <Target size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Career Path:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Entry Posts", value: "Typically for positions like Probationary Engineer (E-II Grade), Trainee & Project Engineer often on a fixed-term contract." },
                           { label: "Eligibility", value: "B.E./B.Tech/B.Sc Engineering in a relevant discipline (first-class)" },
                           { label: "Selection", value: "Usually involves a Written Test followed by an Interview." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Benefits & Impact */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Growth & Impact:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Pay Scale", value: "₹40,000 – 3% – ₹1,40,000 for Probationary Engineer" },
                           { label: "Competitive Package", value: "Offers an attractive pay scale, performance pay, PF, gratuity, and medical benefits." },
                           { label: "Impactful Work", value: "Offers a unique opportunity to contribute to national defence and advanced technology projects within a stable public sector environment." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* MDL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameGold/10 flex items-center justify-center text-gameGold shadow-inner shrink-0">
                        <Ship size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           10- Mazagon Dock Shipbuilders (MDL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           Mazagon Dock Shipbuilders Limited (MDL) is a premier shipbuilding and defense fabrication company in India, based in Mumbai. MDL was taken over by the Government of India in 1960.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Entry & Selection */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Entry Details:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Executive Trainee in various disciplines." },
                           { label: "Eligibility", value: "A first-class B.Tech/B.E. degree with 60% in the relevant discipline." },
                           { label: "Selections", value: "Either through the GATE score card and Personal Interview, or Written tests and Personal Interview." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Growth & Pay */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Career & Benefits:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Pay Scale", value: "The selected candidates would be placed in the E-1 grade with a pay scale ranging from ₹40,000 to ₹1,40,000 per month." },
                           { label: "Growth & Stability", value: "MDL is described as a premier defence public sector unit (PSU), implying stable careers and structured growth paths." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* HAL Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-slate-50 rounded-[3rem] border border-slate-200 overflow-hidden shadow-sm mt-16"
            >
               {/* Organization Header */}
               <div className="p-8 md:p-12 bg-white border-b border-slate-200">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                     <div className="w-20 h-20 rounded-3xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-inner shrink-0">
                        <Plane size={40} />
                     </div>
                     <div>
                        <h3 className="text-2xl md:text-4xl font-black text-gameBlack mb-4 leading-tight">
                           11- Hindustan Aeronautical Limited (HAL)
                        </h3>
                        <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-3xl">
                           Hindustan Aeronautics Limited (HAL) is a major Indian aerospace and defense company. It drives the &apos;Make in India&apos; initiative by designing, manufacturing, and maintaining aircraft, helicopters, and their systems.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Details Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  {/* Entry & Selection */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black">
                           ?
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Entry Details:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Post", value: "Management Trainee in various disciplines." },
                           { label: "Eligibility", value: "A first-class B.Tech/B.E. degree with 60% in the relevant discipline." },
                           { label: "Selections", value: "Either through the GATE score card and Personal Interview, or Written tests and Personal Interview." }
                        ].map((detail, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameTeal min-w-[120px] shrink-0 text-sm">{detail.label}:</span>
                              <span className="text-slate-700 font-bold">{detail.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Growth & Pay */}
                  <div className="p-8 md:p-12">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-slate-900 flex items-center justify-center">
                           <Sparkles size={20} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack uppercase tracking-wider">Career & Benefits:</h4>
                     </div>
                     <ul className="space-y-6">
                        {[
                           { label: "Pay Scale", value: "The selected candidates will receive a pay scale ranging from ₹40,000 to ₹1,40,000 per month." },
                           { label: "Growth & Stability", value: "HAL offers a stable, long-term career within a premier defence PSU that is actively growing through ambitious indigenous aerospace projects." }
                        ].map((item, i) => (
                           <li key={i} className="flex flex-col md:flex-row md:items-start gap-2">
                              <span className="font-black text-gameGold min-w-[120px] shrink-0 text-sm">{item.label}:</span>
                              <span className="text-slate-700 font-bold">{item.value}</span>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="p-8 md:p-12 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>

            {/* List of PSUs Section */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="mt-24"
            >
               <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-5xl font-black text-gameBlack mb-4 leading-tight">
                     List of PSUs that Recruit <br className="hidden md:block" /> through GATE EXAMS
                  </h3>
                  <p className="text-gameGold font-black text-lg uppercase tracking-widest">
                     Note: Take the content from GATE page, as shown below
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  {/* Maharatna */}
                  <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                           <Award size={24} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack">1. Maharatna PSUs</h4>
                     </div>
                     <ul className="space-y-3 font-bold text-slate-600 flex-grow">
                        {["Bharat Heavy Electricals Limited (BHEL)", "Bharat Petroleum Corporation Limited (BPCL)", "Coal India Limited (CIL)", "Gas Authority of India Limited (GAIL)", "Hindustan Petroleum Corporation Limited (HPCL)", "Indian Oil Corporation Limited (IOCL)", "National Thermal Power Corporation (NTPC)", "Oil and Natural Gas Corporation (ONGC)", "Steel Authority of India Limited (SAIL)", "Oil India Limited (OIL), etc."].map((psu, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <span className="text-orange-500 text-xs font-black">{i + 1}.</span> {psu}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Navaratna */}
                  <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                           <Sparkles size={24} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack">2. Navaratna PSUs</h4>
                     </div>
                     <ul className="space-y-3 font-bold text-slate-600 flex-grow">
                        {["Bharat Electronics Limited (BEL)", "Container Corporation of India Limited (CONCOR)", "Engineers India Limited (EIL)", "Hindustan Aeronautics Limited (HAL)", "Mahanagar Telephone Nigam Limited (MTNL)", "National Aluminium Company Limited (NALCO)", "National Buildings Construction Corporation Limited (NBCC)", "Neyveli Lignite Corporation Limited (NLC)", "NMDC Limited (NMDC)", "Rashtriya Ispat Nigam Limited (RINL)", "Shipping Corporation of India Limited (SCI)"].map((psu, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <span className="text-blue-500 text-xs font-black">{i + 1}.</span> {psu}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Miniratna */}
                  <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-500 flex items-center justify-center shrink-0">
                           <ScrollText size={24} />
                        </div>
                        <h4 className="text-xl font-black text-gameBlack leading-tight">3. Miniratna Category <br/> I & II PSUs</h4>
                     </div>
                     <ul className="space-y-3 font-bold text-slate-600 flex-grow">
                        {["Airports Authority of India (AAI)", "Bharat Coking Coal Limited (BCCL)", "Neyveli Lignite Corporation Limited (NLC)", "National Fertilizers Limited (NFL)", "Indian Railway Catering and Tourism Corporation (IRCTC)", "Garden Reach Shipbuilders & Engineers Limited (GRSE)", "Goa Shipyard Limited (GSL)", "Artificial Limbs Manufacturing Corporation of India (ALIMCO)", "Bharat Pumps & Compressors Limited (BPCL)", "Broadcast Engineering Consultants India Limited (BECIL)"].map((psu, i) => (
                           <li key={i} className="flex items-center gap-3">
                              <span className="text-teal-500 text-xs font-black">{i + 1}.</span> {psu}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-wrap gap-4 items-center justify-center">
                  <button className="px-10 py-5 bg-gameTeal text-white font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gameTeal/20 text-lg uppercase tracking-widest">
                     Course Button
                  </button>
                  <button className="px-10 py-5 border-4 border-slate-200 text-gameBlack font-black rounded-2xl hover:bg-slate-50 active:scale-105 transition-all text-lg uppercase tracking-widest">
                     View More
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* FAQs Section */}
      <section className="py-32 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="pb-20"
            >
               <div className="text-center mb-24">
                  <div className="bg-gameTeal text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-[10px] inline-block mb-4 shadow-lg shadow-gameTeal/20">
                    Your Questions Answered
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black text-gameBlack mb-8 leading-[1.1]">
                     FREQUENTLY ASKED <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-400 italic">QUESTIONS (FAQs)</span>
                  </h3>
                  <div className="w-24 h-2 bg-gameGold mx-auto rounded-full"></div>
               </div>

               <div className="max-w-4xl mx-auto space-y-4">
                  {[
                     {
                        q: "Is there a single course that can prepare me for both GATE and the separate exams for top PSUs?",
                        a: "Yes. Since top PSUs recruit either through GATE scores or their own competitive exams, you need a dual-strategy course. The Lakshya(ME) Exclusive Mentorship Programme offers exactly that—a holistic curriculum covering advanced engineering concepts for GATE alongside quantitative aptitude, reasoning, and general awareness for PSU-specific tests. It's the streamlined way to prepare for all opportunities simultaneously."
                     },
                     {
                        q: "Can final-year students apply for these PSU recruitments?",
                        a: "Yes, candidates in their final year/semester are typically eligible to apply. However, if shortlisted, they must provide proof of passing the qualifying exam (final degree/diploma mark sheet) by a specified deadline or at the time of the interview/document verification."
                     },
                     {
                        q: "How does the selection process generally work for these top PSUs?",
                        a: (
                           <div className="space-y-4">
                              <p>There are two main pathways for selection:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                 <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <h5 className="font-black text-gameTeal uppercase text-xs tracking-widest mb-3">(i) GATE Score Route</h5>
                                    <p className="text-sm font-bold text-slate-600">Candidates are shortlisted based on their GATE score, followed by Group Discussion and/or Personal Interview.</p>
                                 </div>
                                 <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <h5 className="font-black text-gameTeal uppercase text-xs tracking-widest mb-3">(ii) PSU's Own Exam Route</h5>
                                    <p className="text-sm font-bold text-slate-600">Candidates must clear a Computer-Based Test (CBT) conducted by the PSU, testing technical knowledge and general aptitude.</p>
                                 </div>
                              </div>
                           </div>
                        )
                     },
                     {
                        q: "What is the age limit to apply for these PSU recruitments?",
                        a: "The upper age limit for general category candidates is usually 26 to 28 years for entry-level graduate engineer positions. Age relaxation is provided as per government norms for OBC, SC, ST, and PwD candidates. It's crucial to check the specific advertisement for the exact cut-off date."
                     },
                     {
                        q: "What are the key career benefits of joining a Maharatna PSU like NTPC, IOCL, or BHEL?",
                        a: "A career in these top-tier PSUs offers high job security, structured career progression, and an excellent compensation package. This includes a good basic pay, dearness allowance, housing benefits, medical facilities, provident fund, gratuity, and performance-linked incentives that often surpass private sector counterparts for core engineering roles."
                     },
                     {
                        q: "Where will I be posted if I get selected?",
                        a: "Postings are at the company's discretion across their Manufacturing Units, Project Sites, or Regional Offices nationwide, often in industrial or remote areas. While you may be asked for preferences during the application, the final decision is based on vacancies and merit. Many PSUs provide excellent township facilities for employees."
                     }
                  ].map((faq, index) => <FAQItem key={index} faq={faq} index={index + 1} />)}
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

const FAQItem: React.FC<{ faq: { q: string; a: React.ReactNode }; index: number }> = ({ faq, index }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div 
         className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
            isOpen 
            ? 'bg-white border-gameTeal/30 shadow-xl shadow-gameTeal/5' 
            : 'bg-white border-slate-200 hover:border-slate-300'
         }`}
      >
         <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
         >
            <div className="flex items-center gap-6">
               <span className={`text-lg font-black shrink-0 transition-colors duration-500 ${isOpen ? 'text-gameTeal' : 'text-slate-300'}`}>
                  {index < 10 ? `0${index}` : index}
               </span>
               <h4 className="text-lg md:text-xl font-black text-gameBlack group-hover:text-gameTeal transition-colors leading-tight">
                  {faq.q}
               </h4>
            </div>
            <div className={`shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
               isOpen ? 'bg-gameTeal text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'
            }`}>
               <ChevronDown size={20} />
            </div>
         </button>
         
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
               >
                  <div className="px-6 md:px-8 pb-8 md:pb-10 ml-0 md:ml-12 border-t border-slate-50 pt-6">
                     <div className="text-slate-600 font-bold text-lg leading-relaxed max-w-3xl">
                        {faq.a}
                     </div>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

export default PsuExamPage;
