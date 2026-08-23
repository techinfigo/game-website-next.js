'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket, Globe, Target, Shield, Users, Sparkles, Briefcase, TrendingUp, Award, Building2, Coffee, Atom, Droplets, Flame, Zap, Wind, Factory, Mountain, Cpu, Ship, Plane, ScrollText, ChevronDown } from 'lucide-react';

const PsuExamPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      badge: "REGISTRATION",
      title: "GATE 2026 Registration Open",
      buttonText: "Register Now",
      imageUrl: "https://picsum.photos/seed/gate-reg/1200/800",
      bgColor: "bg-[#004d50]"
    },
    {
      badge: "MOCK TEST",
      title: "Free GATE Mock Test",
      buttonText: "Start Test",
      imageUrl: "https://picsum.photos/seed/gate-mock/1200/800",
      bgColor: "bg-[#002b2e]"
    },
    {
      badge: "PSU JOBS",
      title: "Top PSU Recruitment Through GATE",
      buttonText: "Explore Jobs",
      imageUrl: "https://picsum.photos/seed/psu-jobs/1200/800",
      bgColor: "bg-[#004d50]"
    },
    {
      badge: "IIT M.TECH",
      title: "IIT Admission Through GATE",
      buttonText: "Check Cutoffs",
      imageUrl: "https://picsum.photos/seed/iit-mtech/1200/800",
      bgColor: "bg-[#002b2e]"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gameBlack selection:bg-gameTeal selection:text-white">
      
      {/* New Hero Section */}
      <section className="relative pt-40 pb-16 overflow-hidden bg-[#001517] text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[120px] pointer-events-none"></div>
         
         <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
               
               {/* Left Column: Text Content */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                     <Target size={12} className="text-gameTeal" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">GATE Examination 2026</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.05] tracking-tighter">
                     Your Gateway to <br/>
                     <span className="text-gameTeal">Big Opportunities</span>
                  </h1>

                  <p className="text-base md:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed font-bold">
                     Unlock premium careers and prestigious lifestyles. Whether it&apos;s a PSU or an IIT — GATE is your gateway to excellence.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                     <button className="px-7 py-3.5 bg-gameTeal text-white font-black rounded-full hover:bg-[#007a7e] transition-all active:scale-95 shadow-xl shadow-gameTeal/20 flex items-center gap-2 group text-sm">
                        Start Preparation
                        <Rocket size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </button>
                     <button className="px-7 py-3.5 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-gameBlack transition-all active:scale-95 text-sm">
                        View Syllabus
                     </button>
                  </div>

                  {/* Latest Update Widget */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-8 max-w-sm flex items-start gap-4">
                     <div className="w-9 h-9 rounded-xl bg-gameGold/10 text-gameGold flex items-center justify-center shrink-0">
                        <Atom size={18} className="animate-spin-slow" />
                     </div>
                     <div>
                        <span className="text-[7px] font-black text-gameGold uppercase tracking-widest block mb-0.5">LATEST UPDATE</span>
                        <p className="text-xs font-bold text-slate-200">GATE 2026 registration closes Oct 5</p>
                     </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-10 border-t border-white/5 pt-6">
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">50K+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Aspirants</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">95%</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Success Rate</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">200+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Mentors</p>
                     </div>
                  </div>
               </motion.div>

               {/* Right Column: Advertisement Scroller */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-full flex flex-col"
               >
                  {/* Main Display Area */}
                  <div className="relative flex-grow bg-[#001c1e] rounded-[1.5rem] border border-white/10 overflow-hidden shadow-2xl min-h-[350px]">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={activeSlide}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.4 }}
                           className="absolute inset-0 flex flex-col p-8"
                        >
                           <Image 
                              src={slides[activeSlide].imageUrl} 
                              alt={slides[activeSlide].title}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#001c1e] via-transparent to-[#001c1e]/60"></div>
                           
                           {/* Small badge top left */}
                           <div className="relative z-10 bg-gameGold text-gameBlack px-2 py-0.5 rounded text-[8px] font-black uppercase mb-auto self-start">
                              {slides[activeSlide].badge}
                           </div>
                           
                           {/* Button bottom right corner */}
                           <div className="relative z-10 mt-auto self-end">
                              <button className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all">
                                 {slides[activeSlide].buttonText}
                                 <TrendingUp size={14} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                           </div>
                           
                           {/* Decorative Elements */}
                           <div className="absolute top-8 right-8 opacity-20 z-10 text-white">
                              <Atom size={60} />
                           </div>
                        </motion.div>
                     </AnimatePresence>

                     {/* Slide Indicators */}
                     <div className="absolute bottom-5 right-6 flex gap-1.5">
                        {slides.map((_, i) => (
                           <button 
                              key={i}
                              onClick={() => setActiveSlide(i)}
                              className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-gameTeal' : 'w-1.5 bg-white/30'}`}
                           />
                        ))}
                     </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-4 gap-3 mt-4">
                     {slides.map((slide, i) => (
                        <button
                           key={i}
                           onClick={() => setActiveSlide(i)}
                           className={`relative aspect-[16/9] rounded-lg border transition-all duration-300 overflow-hidden ${
                              i === activeSlide ? 'border-gameTeal scale-105 shadow-lg shadow-gameTeal/20' : 'border-white/10 opacity-30 hover:opacity-100'
                           }`}
                        >
                           <Image 
                              src={slide.imageUrl} 
                              alt={slide.title}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-black/40"></div>
                           <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                              <div className="text-[5px] font-black text-white mb-1 leading-none drop-shadow-md">{slide.badge}</div>
                           </div>
                        </button>
                     ))}
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* 1. Government Research and Development Sector Section */}
      <section className="py-24 bg-slate-200 border-t border-slate-300 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-16">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
               >
                  <div className="bg-gameTeal text-white px-4 py-1 rounded-full font-black uppercase tracking-widest text-[9px] inline-block mb-3 shadow-sm">
                    Sector Overview
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gameBlack leading-tight mb-4">
                     Government Research and <br className="hidden md:block" /> 
                     Development <span className="text-gameTeal italic">Sector</span> <span className="text-slate-400 font-light">(Govt. R&D)</span>
                  </h2>
                  <div className="w-16 h-1 bg-gameGold mx-auto rounded-full"></div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
               {/* TODO: client to upload real R&D benefit images at these paths */}
               {[
                  {
                     number: "",
                     title: "Architect of National Legacy",
                     imageIdea: "A split-screen visual: Minimalist office desk vs. powerful rocket on launch pad at dawn.",
                     tagline: "Build for a Country.",
                     icon: Rocket,
                     image: "/psu/rnd-benefit-1.png",
                     delay: 0
                  },
                  {
                     number: "",
                     title: "Cutting-Edge Frontiers",
                     imageIdea: "Dynamic infographic of satellite orbits, DNA strands, and cybersecurity shields.",
                     tagline: "One Career, Infinite Frontiers.",
                     icon: Globe,
                     image: "/psu/rnd-benefit-2.png",
                     delay: 0.1
                  },
                  {
                     number: "",
                     title: "Sovereign Impact",
                     imageIdea: "Scientist's focused eyes reflected in a console showing successful satellite deployment.",
                     tagline: "Nation Needs Your Genius.",
                     icon: Target,
                     image: "/psu/rnd-benefit-3.png",
                     delay: 0.2
                  },
                  {
                     number: "",
                     title: "Stability with a Soul",
                     imageIdea: "Researcher in a calm lab while a chaotic cityscape flashes behind them.",
                     tagline: "Focus on the Mission.",
                     icon: Shield,
                     image: "/psu/rnd-benefit-4.png",
                     delay: 0.3
                  },
                  {
                     number: "",
                     title: "Brotherhood of Best Minds",
                     imageIdea: "Diverse team of scientists in collaborative triumph within a mission control room.",
                     tagline: "Stand on Shoulders of Giants.",
                     icon: Users,
                     image: "/psu/rnd-benefit-5.png",
                     delay: 0.4
                  }
               ].map((item, index) => (
                  <BenefitImageCard
                     key={index}
                     icon={item.icon}
                     title={item.title}
                     description={item.imageIdea}
                     image={item.image}
                     footer={{ value: item.tagline, quote: true }}
                     accent="teal"
                     delay={item.delay}
                  />
               ))}
               
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="lg:flex flex-col items-center justify-center p-6 rounded-[2rem] bg-gameTeal text-white text-center shadow-lg shadow-gameTeal/20 border-2 border-white/10"
               >
                  <Sparkles size={32} className="text-gameGold mb-4 animate-pulse" />
                  <h3 className="text-xl font-black mb-2">The Mission Awaits</h3>
                  <p className="text-teal-100 font-bold text-xs leading-relaxed">
                     Connect with your destiny in Indian Infrastructure.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. Govt. R&D Organisations: ISRO, BARC, DRDO */}
      <section className="py-24 bg-slate-200 border-t border-slate-300 scroll-mt-32">
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

            <DetailedOrgCard
               icon={Rocket}
               logoSlug="isro"
               title="Indian Space Research Organisation (ISRO)"
               description="India's premier space agency, known for Chandrayaan & Mangalyaan. Your work here powers national missions."
               examSnapshot={[
                  { label: "Post", value: "Scientist/Engineer 'SC' (Electronics/Mechanical/Computer Science)." },
                  { label: "Eligibility", value: "BE/B.Tech (Minimum 65%)" },
                  { label: "Pay Scale", value: "Basic Pay Rs. 56,000 per month + other allowances." },
                  { label: "Selection", value: "Online Test (Technical + Aptitude) + Interview." }
               ]}
               lifeAtOrgHeader="Life @ ISRO"
               lifeAtOrgItems={[
                  "Work on India's biggest R&D projects — from satellites to rockets.",
                  "Job is a Mission: Build technology with national impact.",
                  "Stability & Growth: Prestigious Group A post, excellent work-life balance.",
                  "Elite Ecosystem: Learn from top scientists, global collaborations."
               ]}
            />

            <DetailedOrgCard
               icon={Atom}
               logoSlug="barc"
               iconColorClass="text-gameGold"
               title="Bhabha Atomic Research Centre (BARC)"
               description="Bhabha Atomic Research Centre (BARC) is India's premier nuclear research and development organisation under the Department of Atomic Energy (DAE). It is the heart of India's nuclear science, power, and technology programs."
               examSnapshot={[
                  { label: "Program", value: "OCES (1-year training) / DGFS (M.Tech + training) for Scientist Officer 'C'." },
                  { label: "Eligibility", value: "BE/B.Tech (60%+) in core engineering or M.Sc (60%+) in Physics, Chemistry, Biosciences, Geology." },
                  { label: "Selection", value: "Screening via Online Exam or GATE Score, followed by an Interview." },
                  { label: "Pay Scale", value: "₹74,000/- per month during training & Gross salary 1,35,000 approx. per month after training." },
                  { label: "Post-Training", value: "Guaranteed placement as Scientific Officer 'C' (Group A Gazetted Officer) in prestigious DAE units like BARC, IGCAR, NPCIL." }
               ]}
               lifeAtOrgHeader="Life @ BARC"
               lifeAtOrgItems={[
                  "Work on mission-critical national projects in nuclear energy, reactors, and advanced research.",
                  "Unmatched job security, a prestigious career, and structured growth.",
                  "Pursue an M.Tech at IIT (via DGFS) while being a paid DAE employee.",
                  "Contribute to India's energy security and technological sovereignty."
               ]}
               delay={0.2}
            />

            <DetailedOrgCard
               icon={Shield}
               logoSlug="drdo"
               title="Defence Research and Development Organisation (DRDO)"
               description="The Defence Research & Development Organisation (DRDO) is India's largest and most diverse defence research and development agency under the Ministry of Defence. Its mission is to design, develop, and produce state-of-the-art weapon systems, platforms, and allied technologies for the Indian Armed Forces."
               examSnapshot={[
                  { label: "Post", value: "Scientist 'B' (in various engineering & science streams)." },
                  { label: "Eligibility", value: "BE/B.Tech/M.Sc or equivalent (often with a valid GATE score)." },
                  { label: "Selection", value: "Typically involves shortlisting via GATE score, followed by a Written Exam (for some disciplines) and/or a Personal Interview." },
                  { label: "Pay Scale", value: "Basic Pay of ₹56,000 per month + other allowances." }
               ]}
               lifeAtOrgHeader="Life @ DRDO"
               lifeAtOrgItems={[
                  "Work on cutting-edge defence tech for missiles, radars, and combat systems with direct national impact.",
                  "Join as a respected Group 'A' officer with high job security and clear growth paths.",
                  "Collaborate with top scientists, major institutes (IITs), and the armed forces on advanced R&D.",
                  "Enjoy stability, great benefits, housing options, and the pride of securing the nation."
               ]}
               delay={0.3}
            />
         </div>
      </section>

      {/* 3. Public Sector Units (PSUs) Section */}
      <section className="py-24 bg-slate-200 border-t border-slate-300 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-6 md:px-8 lg:px-10">
            <div className="text-center mb-16">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
               >
                  <div className="bg-gameGold text-slate-900 px-4 py-1 rounded-full font-black uppercase tracking-widest text-[9px] inline-block mb-3 shadow-sm">
                    Corporate Growth
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-gameBlack leading-tight mb-4">
                     Public Sector <span className="text-gameTeal italic">Units</span> <span className="text-slate-400 font-light">(PSUs)</span>
                  </h2>
                  <div className="w-16 h-1 bg-gameTeal mx-auto rounded-full"></div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
               {/* TODO: client to upload real PSU benefit images at these paths */}
               {[
                  {
                     number: "",
                     title: "Success & Fulfilment",
                     imageIdea: "A sharp, formal blazer vs. modern tech gadgets and rewarding perks on a contemporary desk.",
                     styleDesc: "Clean, dual-tone colour scheme (blue for trust, orange for energy).",
                     icon: Briefcase,
                     image: "/psu/psu-benefit-1.png",
                     delay: 0
                  },
                  {
                     number: "",
                     title: "National Growth Forefront",
                     imageIdea: "Confident engineers at a massive project site with rising national skylines.",
                     styleDesc: "Cinematic and grand. Bold and hopeful atmosphere.",
                     icon: TrendingUp,
                     image: "/psu/psu-benefit-2.png",
                     delay: 0.1
                  },
                  {
                     number: "",
                     title: "Premium Rewards",
                     imageIdea: "A career ladder made of reward icons: promotions, salary, LTC, and housing security.",
                     styleDesc: "Visually rich 3D infographics with metallic gold and blue accents.",
                     icon: Award,
                     image: "/psu/psu-benefit-3.png",
                     delay: 0.2
                  },
                  {
                     number: "",
                     title: "Universe of Opportunities",
                     imageIdea: "Isometric PSU building with windows showing oil rigs, wind turbines, and financial charts.",
                     styleDesc: "Modern vibrant illustration showing diversity rooted in solidity.",
                     icon: Building2,
                     image: "/psu/psu-benefit-4.png",
                     delay: 0.3
                  },
                  {
                     number: "",
                     title: "Work-Life Harmony",
                     imageIdea: "Focused professional at work vs. relaxed person enjoying family time in daylight.",
                     styleDesc: "Warm, authentic photography focused on genuine smiles.",
                     icon: Coffee,
                     image: "/psu/psu-benefit-5.png",
                     delay: 0.4
                  }
               ].map((item, index) => (
                  <BenefitImageCard
                     key={index}
                     icon={item.icon}
                     title={item.title}
                     description={item.imageIdea}
                     image={item.image}
                     footer={{ label: "Style", value: item.styleDesc }}
                     accent="gold"
                     delay={item.delay}
                  />
               ))}

               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="group flex h-full"
               >
                  <div className="bg-[#0f172a] rounded-[2rem] border border-white/10 hover:border-gameGold transition-all duration-500 overflow-hidden flex flex-col w-full relative shadow-2xl">
                     <div className="p-8 flex-grow">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gameGold group-hover:scale-110 group-hover:bg-gameGold group-hover:text-white transition-all duration-500 mb-6 shadow-glow-gold/10">
                           <Building2 size={28} />
                        </div>
                        <h3 className="text-xl font-black text-white leading-tight mb-3 group-hover:text-gameGold transition-colors">
                           India&apos;s Pillars
                        </h3>
                        <p className="text-slate-400 text-sm font-bold leading-relaxed">
                           Public Sector Units (PSUs) form the core of India&apos;s industrial and socioeconomic progress.
                        </p>
                     </div>
                     <div className="p-6 pt-4 bg-white/5 border-t border-white/5">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest block mb-1">National Mission</span>
                        <p className="text-gameGold font-black text-[11px] leading-tight italic">
                           Powering the nation&apos;s future through excellence.
                        </p>
                     </div>
                     
                     {/* Decorative element */}
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                        <Building2 size={120} strokeWidth={1} className="text-white" />
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. PSU Organisations: NPCIL, ONGC, IOCL, BHEL, NTPC, GAIL, SAIL, HPCL, CIL, BEL, MDL, HAL */}
      <section className="py-24 bg-slate-200 border-t border-slate-300 scroll-mt-32">
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

            {/* NPCIL Section */}
            <DetailedOrgCard
               icon={Factory}
               logoSlug="npcil"
               title="Nuclear Power Corporation of India Limited (NPCIL)"
               description="Nuclear Power Corporation of India Limited (NPCIL) is a Public Sector Enterprise under the administrative control of the Department of Atomic Energy (DAE), Government of India."
               examSnapshot={[
                  { label: "Eligibility", value: "BE/B.Tech/M.Sc or equivalent (often with a valid GATE score)." },
                  { label: "Selection", value: "Typically involves shortlisting via GATE score & Final selection based on Personal Interview only." },
                  { label: "Pay Scale", value: "Basic Pay of ₹56,100 per month + other allowances." }
               ]}
               lifeAtOrgHeader="Life @ NPCIL"
               lifeAtOrgItems={[
                  { label: "Cutting-Edge Work", value: "Work on mission-critical national projects in nuclear energy, reactors, and advanced research." },
                  { label: "Lifestyle", value: "Unmatched job security, a prestigious career, and structured growth." }
               ]}
            />

            {/* ONGC Section */}
            <DetailedOrgCard
               icon={Droplets}
               logoSlug="ongc"
               title="Oil and Natural Gas Corporation Limited (ONGC)"
               description="ONGC (Oil and Natural Gas Corporation) is a 'Maharatna' Public Sector Enterprise and India's largest crude oil and natural gas company. It drives the nation's energy security by exploring and producing hydrocarbons."
               examSnapshot={[
                  { label: "Post", value: "Assistant Executive Engineer (AEE) at E1 level (Mechanical & Other Discipline)." },
                  { label: "Eligibility", value: "BE/B.Tech with 60% marks in relevant disciplines." },
                  { label: "Selection", value: "Computer-Based Test → Personal Interview (85% + 15% weightage)." },
                  { label: "Application", value: "Periodic notifications; online applications only." }
               ]}
               lifeAtOrgHeader="Life @ ONGC"
               lifeAtOrgItems={[
                  { label: "Prestigious Role", value: "Class-I executive position in a Maharatna PSU." },
                  { label: "High CTC", value: "Approx. ₹15 - ₹18 Lakhs per annum including allowances, PRP, housing/HRA, and post-retirement benefits." },
                  { label: "Cutting-Edge Work", value: "Engage in upstream projects involving advanced technology and sustainable practices." },
                  { label: "Growth & Stability", value: "Excellent career progression, pan-India postings, and job security." }
               ]}
            />

            {/* IOCL Section */}
            <DetailedOrgCard
               icon={Flame}
               logoSlug="iocl"
               iconColorClass="text-gameGold"
               title="Indian Oil Corporation Limited (IOCL)"
               description="IOCL is India's largest integrated oil and gas corporation, a Maharatna PSU. It fuels the nation's energy needs across refining, marketing, pipelines, and petrochemicals."
               examSnapshot={[
                  { label: "Post", value: "Junior Engineer/Officer (Diploma), Engineer/Officer (Graduate via GATE), Assistant Officer" },
                  { label: "Selection", value: "Computer-Based Test + GD/GT + Personal Interview (for Diploma) / GATE score + GD/GT + PI (for Graduates)" },
                  { label: "Key Tracks", value: "Diploma in Chemical, Mechanical, Electrical, Instrumentation; Graduate roles via GATE" }
               ]}
               lifeAtOrgHeader="Life @ IOCL"
               lifeAtOrgItems={[
                  { label: "Stability & Growth", value: "Permanent role in India's flagship energy PSU" },
                  { label: "Pay Scale", value: "Engineer/Officer ~ ₹17L CTC, Junior Engineer ~ ₹30,000 - ₹1,20,000 per month" },
                  { label: "Postings", value: "Nationwide across refineries, marketing, pipelines, R&D" },
                  { label: "Perks", value: "Housing, medical, LTA, PRP, gratuity, pension, and more" },
                  { label: "Work Impact", value: "Direct contribution to India's energy security and transition" }
               ]}
               delay={0.2}
            />

            {/* BHEL Section */}
            <DetailedOrgCard
               icon={Zap}
               logoSlug="bhel"
               title="Bharat Heavy Electricals Limited (BHEL)"
               description="BHEL is India's premier engineering and manufacturing PSU, established in 1964. It powers the nation's core sectors like energy, defence, and transportation with world-class products and services."
               examSnapshot={[
                  { label: "Posts", value: "Engineer Trainee (Graduate) & Supervisor Trainee (Diploma)" },
                  { label: "Selection", value: "Computer-Based Exam + Interview/Document Verification" },
                  { label: "Stability & Growth", value: "Permanent role in a Maharatna PSU" },
                  { label: "Pay Scale", value: "ET ~₹60,000 - ₹1,80,000 per month, ST ~ ₹33,500 - ₹1,20,000 per month." }
               ]}
               lifeAtOrgHeader="Life @ BHEL"
               lifeAtOrgItems={[
                  { label: "Posting", value: "Manufacturing units or power sites across India" },
                  { label: "Training", value: "1-year training before absorption" },
                  { label: "Lifestyle", value: "Secure job, social respect, work in nation-building projects" }
               ]}
               delay={0.3}
            />

            {/* NTPC Section */}
            <DetailedOrgCard
               icon={Zap}
               logoSlug="ntpc"
               iconColorClass="text-gameGold"
               title="National Thermal Power Corporation (NTPC)"
               description="NTPC Limited is India's largest integrated power utility, established in 1975. It has evolved from a thermal power generator into a diversified energy major across conventional and renewable generation, mining, and green energy."
               examSnapshot={[
                  { label: "Primary Route", value: "Recruitment for Executive Engineer Trainee positions is primarily through GATE scores." },
                  { label: "Selection Stages", value: "Shortlisted candidates undergo Group Discussion (5% weightage) and Personal Interview (10% weightage)." },
                  { label: "Final Merit", value: "The final selection is based on a composite score: 85% GATE score, 5% GD, and 10% PI." }
               ]}
               lifeAtOrgHeader="Life @ NTPC"
               lifeAtOrgItems={[
                  { label: "Job Profile", value: "Roles in operations, project management, and core engineering across 70+ locations in India and abroad." },
                  { label: "Pay Scale", value: "NTPC Executive Trainee salary offers a competitive package, typically in the E1 Grade pay scale of ₹40,000 - ₹1,40,000 per month +other allowances." },
                  { label: "Growth & Stability", value: "A central government job offering high job security, professional growth, and a chance to contribute to national infrastructure." },
                  { label: "Lifestyle", value: "A stable and rewarding career with a competitive salary, comprehensive perks, and a strong emphasis on organisational values like safety, innovation, and mutual respect." }
               ]}
               delay={0.4}
            />

            {/* GAIL Section */}
            <DetailedOrgCard
               icon={Wind}
               logoSlug="gail"
               title="Gas Authority of India Limited (GAIL)"
               description="GAIL (India) Limited is a Maharatna PSU and the country's flagship natural gas company, leading India's transition to clean fuel."
               examSnapshot={[
                  { label: "Entry Path", value: "Based exclusively on GATE score." },
                  { label: "Key Posts", value: "Executive Trainee in Chemical, Instrumentation, Electrical & Mechanical." },
                  { label: "Eligibility", value: "Relevant B.E./B.Tech (min. 65% marks)." }
               ]}
               lifeAtOrgHeader="Life @ GAIL"
               lifeAtOrgItems={[
                  { label: "Stable & Rewarding", value: "One-year training in E-2 grade (₹60,000–1,80,000 pay scale) with excellent benefits." },
                  { label: "Dynamic Work", value: "Pan-India postings in a technically challenging, core infrastructure sector." },
                  { label: "National Impact", value: "Direct contribution to India's energy security and green energy transition." }
               ]}
            />

            {/* SAIL Section */}
            <DetailedOrgCard
               icon={TrendingUp}
               logoSlug="sail"
               title="Steel Authority of India Limited (SAIL)"
               description="SAIL (Steel Authority of India Limited) is a Maharatna public sector enterprise and the nation's leading steel producer, driving India's industrial and infrastructural growth. It offers young engineers a prestigious career as Management Trainees with excellent growth opportunities, job security, and a chance to contribute to the core sector."
               examSnapshot={[
                  { label: "Post", value: "Management Trainee (Technical)" },
                  { label: "Eligibility", value: "Engineering degree with 65% marks (relaxation for reserved categories)" },
                  { label: "Selection", value: "Online CBT → Group Discussion → Interview." }
               ]}
               lifeAtOrgHeader="Growth & Impact"
               lifeAtOrgItems={[
                  { label: "Training & Growth", value: "1-year training as a Management Trainee, then Assistant Manager (E1 grade)." },
                  { label: "Attractive CTC", value: "Approx. ₹16-17 lakhs per annum at the minimum of the E1 grade (excluding Performance Related Pay (PRP) and location-based allowances)" },
                  { label: "Job Security", value: "Permanent role in a Maharatna PSU with opportunities for advancement." },
                  { label: "Impactful Role", value: "Contribute to core sectors like steel, infrastructure, and national development." }
               ]}
               delay={0.2}
            />

            {/* HPCL Section */}
            <DetailedOrgCard
               icon={Droplets}
               logoSlug="hpcl"
               title="Hindustan Petroleum Corporation Limited (HPCL)"
               description="HPCL is a Maharatna oil & gas giant, driving India's energy security through refining, marketing, and sustainable fuel initiatives."
               examSnapshot={[
                  { label: "Posts", value: "Various roles for Freshers & Experienced professionals in Engineering" },
                  { label: "Eligibility", value: "Varies by post (Diploma, Engineering, etc.) with a minimum of 65% marks for UR/OBC/EWS." },
                  { label: "Selection", value: "Computer-Based Test → Group Task → Personal Interview." }
               ]}
               lifeAtOrgHeader="Life @ HPCL"
               lifeAtOrgItems={[
                  { label: "Attractive CTC", value: "Ranges from ~₹10 Lakhs to ₹48 Lakhs per annum based on grade, plus PRP, HRA, and allowances." },
                  { label: "Growth & Stability", value: "Permanent role in a Maharatna PSU with clear career progression and pan-India postings." },
                  { label: "Impactful Work", value: "Contribute to India's energy security, sustainability, and infrastructure development." },
                  { label: "Lifestyle", value: "Dynamic roles, job security, excellent benefits, and the pride of powering the nation's growth." }
               ]}
               delay={0.2}
            />

            {/* Coal India Limited Section */}
            <DetailedOrgCard
               icon={Mountain}
               logoSlug="cil"
               title="Coal India Limited (CIL)"
               description="Coal India Management Trainee (CIL-MT) is a prestigious entry-level program for engineers in India's largest coal producer. It offers a stable, high-growth career in the nation's core energy sector with competitive benefits."
               examSnapshot={[
                  { label: "Two Paths", value: "Recruits via GATE scores or its own Computer-Based Test (CBT)." },
                  { label: "Eligibility", value: "BE/B.Tech (min. 60%) in core engineering streams." },
                  { label: "Pay Scale", value: "CTC of Management trainee of CIL is roughly around 16-17 Lakh per annum." }
               ]}
               lifeAtOrgHeader="Growth & Impact"
               lifeAtOrgItems={[
                  { label: "Dynamic Start", value: "Posting across CIL's national subsidiaries with structured training." },
                  { label: "Rewarding Package", value: "Competitive salary, job security, and excellent benefits from day one." },
                  { label: "National Impact", value: "Work on critical projects powering India's growth and infrastructure." }
               ]}
               delay={0.2}
            />

            {/* BEL Section */}
            <DetailedOrgCard
               icon={Cpu}
               logoSlug="bel"
               title="Bharat Electronics Limited (BEL)"
               description="Bharat Electronics Limited (BEL) is a 'Navaratna' Public Sector Undertaking (PSU) under the Ministry of Defence, Government of India. It is a leader in professional electronics across defence and strategic sectors."
               examSnapshot={[
                  { label: "Entry Posts", value: "Typically for positions like Probationary Engineer (E-II Grade), Trainee & Project Engineer often on a fixed-term contract." },
                  { label: "Eligibility", value: "B.E./B.Tech/B.Sc Engineering in a relevant discipline (first-class)" },
                  { label: "Selection", value: "Usually involves a Written Test followed by an Interview." }
               ]}
               lifeAtOrgHeader="Growth & Impact"
               lifeAtOrgItems={[
                  { label: "Pay Scale", value: "₹40,000 – 3% – ₹1,40,000 for Probationary Engineer" },
                  { label: "Competitive Package", value: "Offers an attractive pay scale, performance pay, PF, gratuity, and medical benefits." },
                  { label: "Impactful Work", value: "Offers a unique opportunity to contribute to national defence and advanced technology projects within a stable public sector environment." }
               ]}
            />

            {/* MDL Section */}
            <DetailedOrgCard
               icon={Ship}
               logoSlug="mdl"
               title="Mazagon Dock Shipbuilders (MDL)"
               description="Mazagon Dock Shipbuilders Limited (MDL) is a premier shipbuilding and defense fabrication company in India, based in Mumbai. MDL was taken over by the Government of India in 1960."
               examSnapshot={[
                  { label: "Post", value: "Executive Trainee in various disciplines." },
                  { label: "Eligibility", value: "A first-class B.Tech/B.E. degree with 60% in the relevant discipline." },
                  { label: "Selections", value: "Either through the GATE score card and Personal Interview, or Written tests and Personal Interview." }
               ]}
               lifeAtOrgHeader="Career & Benefits"
               lifeAtOrgItems={[
                  { label: "Pay Scale", value: "The selected candidates would be placed in the E-1 grade with a pay scale ranging from ₹40,000 to ₹1,40,000 per month." },
                  { label: "Growth & Stability", value: "MDL is described as a premier defence public sector unit (PSU), implying stable careers and structured growth paths." }
               ]}
               delay={0.2}
            />

            {/* HAL Section */}
            <DetailedOrgCard
               icon={Plane}
               logoSlug="hal"
               title="Hindustan Aeronautical Limited (HAL)"
               description="Hindustan Aeronautics Limited (HAL) is a major Indian aerospace and defense company. It drives the 'Make in India' initiative by designing, manufacturing, and maintaining aircraft, helicopters, and their systems."
               examSnapshot={[
                  { label: "Post", value: "Management Trainee in various disciplines." },
                  { label: "Eligibility", value: "A first-class B.Tech/B.E. degree with 60% in the relevant discipline." },
                  { label: "Selections", value: "Either through the GATE score card and Personal Interview, or Written tests and Personal Interview." }
               ]}
               lifeAtOrgHeader="Career & Benefits"
               lifeAtOrgItems={[
                  { label: "Pay Scale", value: "The selected candidates will receive a pay scale ranging from ₹40,000 to ₹1,40,000 per month." },
                  { label: "Growth & Stability", value: "HAL offers a stable, long-term career within a premier defence PSU that is actively growing through ambitious indigenous aerospace projects." }
               ]}
            />

            {/* List of PSUs Section */}
         </div>
      </section>

      <section className="py-24 bg-[#002b2e] border-t border-white/5 scroll-mt-32 relative overflow-hidden">
         {/* Global section background decor */}
         <div className="absolute -top-24 -left-24 w-[600px] h-[600px] bg-gameTeal/10 rounded-full blur-[140px]"></div>
         <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-gameGold/10 rounded-full blur-[140px]"></div>

         <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10 relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="py-10 md:py-16"
            >
               <div className="text-center mb-20 relative z-10">
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                     List of PSUs that Recruit through <span className="text-gameTeal italic">GATE EXAMS</span>
                  </h3>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
                  {/* Maharatna */}
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-[#00383c]/40 rounded-[2.5rem] border border-white/5 p-10 transition-all duration-500 flex flex-col group"
                  >
                     <div className="flex items-center gap-5 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 shadow-sm">
                           <Award size={28} />
                        </div>
                        <h4 className="text-2xl font-black text-white leading-tight">Maharatna <br/> PSUs</h4>
                     </div>
                     <ul className="space-y-4 font-bold text-slate-300 flex-grow">
                        {["Bharat Heavy Electricals Limited (BHEL)", "Bharat Petroleum Corporation Limited (BPCL)", "Coal India Limited (CIL)", "Gas Authority of India Limited (GAIL)", "Hindustan Petroleum Corporation Limited (HPCL)", "Indian Oil Corporation Limited (IOCL)", "National Thermal Power Corporation (NTPC)", "Oil and Natural Gas Corporation (ONGC)", "Steel Authority of India Limited (SAIL)", "Oil India Limited (OIL), etc."].map((psu, i) => (
                           <li key={i} className="flex items-start gap-4 group/item">
                              <span className="text-orange-400 text-[10px] font-black mt-1.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity">0{i + 1}</span> 
                              <span className="text-sm group-hover/item:text-white transition-colors">{psu}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>

                  {/* Navaratna */}
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-[#00383c]/40 rounded-[2.5rem] border border-white/5 p-10 transition-all duration-500 flex flex-col group"
                  >
                     <div className="flex items-center gap-5 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
                           <Sparkles size={28} />
                        </div>
                        <h4 className="text-2xl font-black text-white leading-tight">Navaratna <br/> PSUs</h4>
                     </div>
                     <ul className="space-y-4 font-bold text-slate-300 flex-grow">
                        {["Bharat Electronics Limited (BEL)", "Container Corporation of India Limited (CONCOR)", "Engineers India Limited (EIL)", "Hindustan Aeronautics Limited (HAL)", "Mahanagar Telephone Nigam Limited (MTNL)", "National Aluminium Company Limited (NALCO)", "National Buildings Construction Corporation Limited (NBCC)", "Neyveli Lignite Corporation Limited (NLC)", "NMDC Limited (NMDC)", "Rashtriya Ispat Nigam Limited (RINL)", "Shipping Corporation of India Limited (SCI)"].map((psu, i) => (
                           <li key={i} className="flex items-start gap-4 group/item">
                              <span className="text-blue-400 text-[10px] font-black mt-1.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity">{i < 9 ? `0${i+1}` : i+1}</span> 
                              <span className="text-sm group-hover/item:text-white transition-colors">{psu}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>

                  {/* Miniratna */}
                  <motion.div 
                    whileHover={{ y: -10 }}
                    className="bg-[#00383c]/40 rounded-[2.5rem] border border-white/5 p-10 transition-all duration-500 flex flex-col group"
                  >
                     <div className="flex items-center gap-5 mb-10">
                        <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 shadow-sm">
                           <ScrollText size={28} />
                        </div>
                        <h4 className="text-2xl font-black text-white leading-tight">Miniratna <br/> I & II PSUs</h4>
                     </div>
                     <ul className="space-y-4 font-bold text-slate-300 flex-grow">
                        {["Airports Authority of India (AAI)", "Bharat Coking Coal Limited (BCCL)", "Neyveli Lignite Corporation Limited (NLC)", "National Fertilizers Limited (NFL)", "Indian Railway Catering and Tourism Corporation (IRCTC)", "Garden Reach Shipbuilders & Engineers Limited (GRSE)", "Goa Shipyard Limited (GSL)", "Artificial Limbs Manufacturing Corporation of India (ALIMCO)", "Bharat Pumps & Compressors Limited (BPCL)", "Broadcast Engineering Consultants India Limited (BECIL)"].map((psu, i) => (
                           <li key={i} className="flex items-start gap-4 group/item">
                              <span className="text-teal-400 text-[10px] font-black mt-1.5 shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity">{i < 9 ? `0${i+1}` : i+1}</span> 
                              <span className="text-sm group-hover/item:text-white transition-colors">{psu}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-wrap gap-8 items-center justify-center relative z-10">
                  <Link href="/courses" className="inline-flex items-center justify-center px-12 py-5 bg-gameTeal text-white font-black rounded-2xl hover:bg-[#007a7e] hover:shadow-2xl hover:shadow-gameTeal/30 transition-all active:scale-95 shadow-xl shadow-gameTeal/10 text-xl uppercase tracking-[0.2em]">
                     Course Button
                  </Link>
                  <button className="px-12 py-5 border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-gameBlack transition-all active:scale-95 text-xl uppercase tracking-[0.2em]">
                     View Syllabus
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* FAQs Section */}
      <section className="py-32 bg-slate-200 border-t border-slate-300 scroll-mt-32">
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

               <div className="max-w-4xl mx-auto space-y-6">
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
                              <p>There are two main pathways:</p>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                 <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <h5 className="font-black text-gameTeal uppercase text-xs tracking-widest mb-3">(i) GATE Score Route</h5>
                                    <p className="text-sm font-bold text-slate-600">Candidates are shortlisted based on their GATE score, followed by Group Discussion and/or Personal Interview.</p>
                                 </div>
                                 <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <h5 className="font-black text-gameTeal uppercase text-xs tracking-widest mb-3">(ii) PSU's Own Exam Route</h5>
                                    <p className="text-sm font-bold text-slate-600">Candidates must clear a Computer-Based Test (CBT) conducted by the PSU, which tests both technical (domain) knowledge and general aptitude. This is followed by further stages like Interviews or Document Verification.</p>
                                 </div>
                              </div>
                           </div>
                        )
                     },
                     {
                        q: "What is the age limit to apply for these PSU recruitments?",
                        a: "The upper age limit for general category candidates is usually 26 to 28 years for entry-level graduate engineer positions. Age relaxation is provided as per government norms. It's crucial to check the specific advertisement for the exact cut-off date."
                     },
                     {
                        q: "What are the key career benefits of joining a Maharatna PSU like NTPC, IOCL, or BHEL?",
                        a: "A career in these top-tier PSUs offers high job security, structured career progression, and an excellent compensation package. This includes a good basic pay, dearness allowance, housing benefits, medical facilities, provident fund, gratuity, and performance-linked incentives."
                     },
                     {
                        q: "Where will I be posted if I get selected?",
                        a: "Postings are at the company's discretion across their Manufacturing Units, Project Sites, or Regional Offices nationwide, often in industrial or remote areas. While you may be asked for preferences during the application, the final decision is based on vacancies and merit."
                     },
                     {
                        q: "What happens after selection? Is there a training or bond period?",
                        a: "Selected candidates join as Trainees (Engineer/Supervisor) and undergo a mandatory one-year training period. After successful completion, they are absorbed into regular roles. All selected candidates must sign a service agreement bond. Leaving before this period requires paying a significant penalty."
                     },
                     {
                        q: "What are the key career benefits of joining a Maharatna PSU like NTPC, IOCL, or BHEL?",
                        a: "A career in these top-tier PSUs offers high job security, structured career progression, and an excellent compensation package. This includes a good basic pay, dearness allowance, housing benefits, medical facilities, provident fund, gratuity, and performance-linked incentives."
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
            ? 'bg-white border-gameTeal/40 shadow-[0_20px_50px_-10px_rgba(0,77,80,0.1)]' 
            : 'bg-white border-slate-300/60 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] hover:border-slate-400 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)]'
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

interface SectionItem {
  label: string;
  value: string;
}

// Benefit card styled like the GATE page's advantage cards: an image visual with a
// dark overlay so the title/description stay readable. If the image file is missing,
// it degrades gracefully to a solid teal background (no broken image).
const BenefitImageCard: React.FC<{
  icon: any;
  title: string;
  description: string;
  image: string;
  footer?: { label?: string; value: string; quote?: boolean };
  accent?: 'teal' | 'gold';
  delay?: number;
}> = ({ icon: Icon, title, description, image, footer, accent = 'teal', delay = 0 }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const accentText = accent === 'gold' ? 'text-gameGold' : 'text-gameTeal';
  const hoverBorder = accent === 'gold' ? 'hover:border-gameGold/40' : 'hover:border-gameTeal/40';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="group flex h-full"
    >
      <div className={`relative w-full min-h-[340px] rounded-[2rem] overflow-hidden border border-slate-200/60 ${hoverBorder} hover:shadow-xl transition-all duration-500 flex flex-col`}>
        {/* Image background with graceful fallback to a solid teal fill */}
        <div className="absolute inset-0 bg-gameTeal">
          {!imgFailed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title}
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
        </div>

        {/* Dark overlay keeps the title/text readable over any image (and over the teal fallback) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

        {/* Content anchored to the bottom */}
        <div className="relative z-10 mt-auto p-6 flex flex-col">
          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
            <Icon size={24} />
          </div>
          <h3 className="text-lg font-black text-white leading-tight mb-2">{title}</h3>
          <p className="text-slate-200 text-sm font-bold leading-relaxed">{description}</p>
          {footer && (
            <div className="mt-4 pt-4 border-t border-white/15">
              {footer.label && (
                <span className={`text-[8px] font-black uppercase tracking-widest ${accentText} mb-1 block`}>{footer.label}</span>
              )}
              <p className={`text-white font-black ${footer.quote ? 'text-sm italic' : 'text-xs leading-tight'}`}>
                {footer.quote ? `"${footer.value}"` : footer.value}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Syllabus PDF (Google Drive) per organisation, keyed by logo slug.
// Opened in a new tab from each org card's "View Syllabus" button.
const SYLLABUS_LINKS: Record<string, string> = {
  isro: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  barc: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  drdo: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  npcil: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  ongc: "https://drive.google.com/file/d/1-bX6C5S0Iv2ZSX7eHnQe-4buYYBomH8h/view",
  iocl: "https://drive.google.com/file/d/1wIa0PDXyMd6I7ggd_eO9OK1DlgpTNfGO/view",
  bhel: "https://drive.google.com/file/d/1tyUNZVSQtXPXbr1jrs7p2U4xWuBhhUWe/view",
  ntpc: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  gail: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  sail: "https://drive.google.com/file/d/1xFbF8V8oZ5Yv_xnjIUhkDG6PpjrDMjSS/view",
  hpcl: "https://drive.google.com/file/d/1iuSYN61FiF_W0C-Q58eqcSegiH8em9LG/view",
  cil: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  bel: "https://drive.google.com/file/d/1WBXKhxyeyLN8A7qmops09NOvweLnxmW1/view",
  mdl: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
  hal: "https://drive.google.com/file/d/1KKDmw6_PWj1WbLIm4JeYvPhEOzV3jDnS/view",
};

// Real org logos in public/, keyed by logoSlug. A slug missing from this map
// falls back to the card's Icon.
const LOGO_FILES: Record<string, string> = {
  isro: "/logo-isro.png",
  barc: "/logo-barc.png",
  drdo: "/logo-drdo.png",
  npcil: "/logo-npcil.png",
  ongc: "/logo-ongc.png",
  iocl: "/logo-iocl.png",
  bhel: "/logo-bhel.png",
  ntpc: "/logo-ntpc.png",
  gail: "/logo-gail.png",
  sail: "/logo-sail.png",
  hpcl: "/logo-hpcl.png",
  cil: "/logo-cil.png",
  bel: "/logo-bel.png",
  mdl: "/logo-mdl.png",
  hal: "/logo-hal.png",
};

const DetailedOrgCard: React.FC<{
  icon: any;
  logoSlug?: string;
  title: string;
  description: string;
  examSnapshot: SectionItem[];
  lifeAtOrgHeader: string;
  lifeAtOrgItems: (string | SectionItem)[];
  delay?: number;
  iconColorClass?: string;
}> = ({ icon: Icon, logoSlug, title, description, examSnapshot, lifeAtOrgHeader, lifeAtOrgItems, delay = 0, iconColorClass = "text-gameTeal" }) => {
  const [logoFailed, setLogoFailed] = useState(false);
  const syllabusUrl = logoSlug ? SYLLABUS_LINKS[logoSlug] : undefined;
  const logoFile = logoSlug ? LOGO_FILES[logoSlug] : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="bg-white rounded-[2.5rem] border border-slate-200/50 overflow-hidden shadow-[0_0_120px_rgba(0,0,0,0.12),0_80px_160px_-40px_rgba(0,0,0,0.35)] mt-12 first:mt-0 cursor-default"
    >
      {/* Header Area */}
      <div className="p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center bg-white">
        <div className="w-16 h-16 flex items-center justify-center shrink-0">
          {logoFile && !logoFailed ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logoFile}
              alt={`${title} logo`}
              className="w-full h-full object-contain rounded-lg"
              onError={() => setLogoFailed(true)}
            />
          ) : (
            <Icon size={28} className={iconColorClass} />
          )}
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl md:text-3xl font-black text-[#002b2e] mb-1.5 leading-tight tracking-tight">
            {title}
          </h3>
          <p className="text-slate-500 text-sm md:text-base font-bold leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left Column: Exam Snapshot */}
        <div className="p-6 md:p-10 bg-slate-50/15">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#005f63] text-white flex items-center justify-center font-black text-base shadow-lg shadow-gameTeal/10">?</div>
            <h4 className="text-sm font-black text-[#002b2e] uppercase tracking-[0.2em] px-1">EXAM SNAPSHOT:</h4>
          </div>
          <div className="space-y-4">
            {examSnapshot.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-1 md:gap-6 items-start">
                <span className="text-[10px] font-black text-gameTeal uppercase min-w-[100px] shrink-0 pt-0.5 tracking-widest">{item.label}:</span>
                <span className="text-sm font-bold text-slate-700 leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Life @ ORG */}
        <div className="p-6 md:p-10 bg-slate-50/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#f0bd2d] text-white flex items-center justify-center shadow-lg shadow-gameGold/30">
              <Sparkles size={16} fill="currentColor" />
            </div>
            <h4 className="text-sm font-black text-[#002b2e] uppercase tracking-[0.2em] px-1">{lifeAtOrgHeader}:</h4>
          </div>
          <ul className="space-y-3">
            {lifeAtOrgItems.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start group">
                <div className="w-1.5 h-1.5 rounded-full bg-gameGold mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                {typeof item === 'string' ? (
                  <p className="text-sm font-bold text-slate-700 leading-relaxed tracking-tight">{item}</p>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-gameGold uppercase mb-0.5 tracking-tighter">{item.label}</span>
                    <p className="text-sm font-bold text-slate-700 leading-relaxed tracking-tight">{item.value}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-6 md:p-8 bg-white border-t border-slate-200 flex flex-wrap gap-4 items-center justify-center">
        <Link href="/courses" className="inline-flex items-center justify-center bg-[#005f63] text-white font-black px-10 py-3 rounded-lg text-[11px] uppercase tracking-widest hover:bg-[#004d50] hover:shadow-xl hover:shadow-gameTeal/40 transition-all active:scale-95 shadow-lg shadow-gameTeal/10">
          COURSE BUTTON
        </Link>
        {syllabusUrl ? (
          <a
            href={syllabusUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-slate-200 text-slate-600 font-black px-10 py-3 rounded-lg text-[11px] uppercase tracking-widest hover:bg-slate-50 hover:border-slate-400 hover:text-gameBlack transition-all active:scale-95"
          >
            VIEW SYLLABUS
          </a>
        ) : (
          <button className="border-2 border-slate-200 text-slate-600 font-black px-10 py-3 rounded-lg text-[11px] uppercase tracking-widest hover:bg-slate-50 hover:border-slate-400 hover:text-gameBlack transition-all active:scale-95">
            VIEW SYLLABUS
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default PsuExamPage;
