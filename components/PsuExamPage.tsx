'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Shield, Microscope, Target, Users, 
  ArrowRight, CheckCircle2, Zap, 
  Sparkles, Globe, Brain, Cpu, Database,
  Gem, TrendingUp, Wallet, Landmark, Heart
} from 'lucide-react';

// --- DATA FROM PDF PAGE 1 (STRICTLY FROM SCREENSHOT) ---
const GOVT_RD_FEATURES = [
  {
    id: 1,
    title: "1- Be the Architect of National Legacy, Not Just a Coder in a Cubicle.",
    tagline: "Build for a Company. Or Build for a Country.",
    imageIdea: "Image Idea: A split-screen visual. Left side: A sleek, minimalist but anonymous office desk with a code editor. Right side: A powerful, wide-angle shot from behind an engineer at dawn, looking up at a majestic rocket on the launch pad, their silhouette small against its grandeur.",
    icon: Rocket,
    image: "https://picsum.photos/seed/legacy/1200/800"
  },
  {
    id: 2,
    title: "2. Unparalleled Depth & Breadth of Cutting-Edge Work.",
    tagline: "One Career, Infinite Frontiers.",
    imageIdea: "Image Idea: A dynamic, circular infographic morphing between four iconic symbols: a satellite orbit transforming into a double-helix DNA strand, morphing into a composite material weave, and then into a cybersecurity shield. All is contained within the silhouette of India's map.",
    icon: Cpu,
    image: "https://picsum.photos/seed/cuttingedge/1200/800"
  },
  {
    id: 3,
    title: "3. The Ultimate Confluence of Intellectual Challenge & Sovereign Impact.",
    tagline: "The Nation's Most Critical Problems Need Your Genius.",
    imageIdea: "Image Idea: An intense, close-up shot of a young scientist's eyes, reflected in the visor of a space helmet or the screen of a radar console. In the reflection, we see not their face, but the abstract visual of a successful missile interception or a satellite deployment.",
    icon: Brain,
    image: "https://picsum.photos/seed/sovereign/1200/800"
  },
  {
    id: 4,
    title: "4. Stability with a Soul: A Career Immune to Market Volatility.",
    tagline: "In a World of Noise, Focus on the Mission.",
    imageIdea: "Image Idea: A serene, time-lapse shot. In the foreground, a researcher in a lab coat calmly takes notes, bathed in steady light. Outside the window behind them, a dynamic cityscape with stock market graphs flashes and changes rapidly, but the researcher's world remains focused and undisturbed.",
    icon: Shield,
    image: "https://picsum.photos/seed/stability/1200/800"
  },
  {
    id: 5,
    title: "5. A Brotherhood / Sisterhood of the Best Minds, Driven by Passion.",
    tagline: "Stand on the Shoulders of Giants. And Let Others Stand on Yours.",
    imageIdea: "Image Idea: A powerful, low-angle group shot. Not posing, but caught in a moment of collaborative triumph—a diverse team of young and senior scientists in a control room, all looking up at a large successful data screen, one senior scientist with a hand on a young recruit's shoulder.",
    icon: Users,
    image: "https://picsum.photos/seed/teamwork/1200/800"
  }
];

export default function PsuExamPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    window.scrollTo(0, 0);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-gameTeal selection:text-white">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gameBlack">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gameTeal/10 border border-gameTeal/20 text-gameTeal mb-8">
              <Sparkles size={16} />
              <span className="text-xs font-black uppercase tracking-widest">Premium Career Pathways</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.85]">
              PSUs / Govt. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-gameGold to-gameTeal">R&D CAREERS</span>
            </h1>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl font-bold leading-relaxed mb-12 uppercase tracking-widest italic">
              "Build for a Company. Or Build for a Country."
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-xl shadow-gameGold/10">
                Join Lakshya (ME)
              </button>
              <button className="px-10 py-5 bg-gameTeal text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-gameTeal transition-all duration-300">
                Explore Segments
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GOVT R&D SECTION */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 text-gameTeal mb-6 font-black uppercase tracking-widest text-sm">
                <div className="h-[2px] w-12 bg-gameTeal"></div>
                Primary Impact Sector
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gameBlack tracking-tighter leading-tight italic uppercase relative inline-block">
                <span className="relative z-10">Government Research and Development Sector </span>
                <span className="text-gameTeal relative z-10">(Govt. R&D)</span>
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-gameGold/20 -rotate-1 z-0"></div>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <p className="text-slate-500 font-bold max-w-sm ml-auto text-lg leading-relaxed italic border-r-4 border-gameGold pr-6">
                "Not Just a Coder in a Cubicle." <br />
                The Nation&apos;s Most Critical Problems Need Your Genius.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-20">
            {GOVT_RD_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center bg-white p-8 lg:p-12 rounded-[4rem] border border-slate-100 hover:shadow-[0_20px_50px_-20px_rgba(30,174,152,0.3)] transition-all duration-700`}
              >
                <div className="lg:w-1/2">
                   <div className="inline-block px-6 py-2 bg-gameGold/10 border border-gameGold/20 rounded-full text-gameGoldDark font-black text-xs uppercase tracking-widest mb-8">
                     Segment {feature.id}
                   </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gameBlack mb-8 leading-tight tracking-tighter italic group-hover:text-gameTeal transition-colors">
                    <span className="bg-gameGold/20 px-2 py-1">{feature.title}</span>
                  </h3>
                  
                  <div className="space-y-6 mb-10">
                    <p className="text-slate-600 font-bold text-lg leading-relaxed italic bg-slate-50 p-6 rounded-3xl border-l-4 border-gameTeal">
                       {feature.imageIdea}
                    </p>
                    <p className="text-gameTeal font-black text-2xl italic tracking-tight underline decoration-gameGold/40 decoration-4 underline-offset-8">
                       &ldquo;{feature.tagline}&rdquo;
                    </p>
                  </div>

                  <button className="flex items-center gap-3 text-gameBlack font-black uppercase text-sm tracking-widest hover:text-gameTeal transition-colors group/btn">
                    Explore Opportunities <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>

                <div className="lg:w-1/2 w-full relative aspect-[16/10] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gameBlack/60 to-transparent"></div>
                  <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                    <feature.icon size={32} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* PUBLIC SECTOR UNITS (PSU) SECTION */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 text-gameTeal mb-6 font-black uppercase tracking-widest text-sm">
                <div className="h-[2px] w-12 bg-gameTeal"></div>
                Industrial Powerhouse Sector
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gameBlack tracking-tighter leading-tight italic uppercase">
                Public Sector Units <span className="text-gameTeal">(PSUs)</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <p className="text-slate-500 font-bold max-w-sm ml-auto text-lg leading-relaxed italic border-r-4 border-gameTeal pr-6">
                The backbone of the Indian economy. Experience the perfect blend of professional excellence and personal stability.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "1- The Best of Both Worlds: Professional Success and Personal Fulfilment.",
                tagline: "Clean, dual-tone colour scheme (deep blue for trust/prestige, and vibrant orange for energy/reward).",
                image: "https://picsum.photos/seed/psu-1/800/600",
                icon: Gem,
                color: "bg-gameTeal"
              },
              {
                id: 2,
                title: "2- Be at the Forefront of National Growth.",
                tagline: "Cinematic, inspiring, and grand. Emphasises scale and professional growth.",
                image: "https://picsum.photos/seed/psu-2/800/600",
                icon: TrendingUp,
                color: "bg-gameGoldDark"
              },
              {
                id: 3,
                title: "3- Accelerated Growth & Premium Rewards.",
                tagline: "Visually rich and 3D. Metallic accents to denote premium value and success.",
                image: "https://picsum.photos/seed/psu-3/800/600",
                icon: Wallet,
                color: "bg-gameGold"
              },
              {
                id: 4,
                title: "4- A Universe of Opportunities Under One Roof.",
                tagline: "Vibrant but organised. Shows diversity rooted in industrial solidity.",
                image: "https://picsum.photos/seed/psu-4/800/600",
                icon: Landmark,
                color: "bg-gameBlack"
              },
              {
                id: 5,
                title: "5- Work-Life Harmony with Substance.",
                tagline: "Warm, authentic, and relatable. Focus on genuine sense of fulfilment.",
                image: "https://picsum.photos/seed/psu-5/800/600",
                icon: Heart,
                color: "bg-rose-500"
              }
            ].map((psu, idx) => (
              <motion.div
                key={psu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-gameTeal/10 transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={psu.image} 
                    alt={psu.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute top-8 left-8 w-14 h-14 ${psu.color} text-white rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <psu.icon size={28} />
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black text-gameBlack mb-4 leading-tight group-hover:text-gameTeal transition-colors italic">
                    {psu.title}
                  </h3>
                  <p className="text-slate-500 font-bold text-sm leading-relaxed italic border-l-2 border-gameGold/30 pl-4 uppercase tracking-wider">
                    {psu.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED ORGANIZATIONS - GOVT R&D */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-8xl font-black text-gameBlack mb-8 tracking-tighter uppercase italic">
              Government R&D <br /> <span className="text-gameTeal">Deep Dives</span>
            </h2>
            <p className="text-slate-500 font-bold text-lg max-w-2xl leading-relaxed uppercase tracking-[0.2em] italic border-l-4 border-gameGold pl-6">
              Exploring India's premier scientific & strategic organizations where you become a national architect.
            </p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            
            {/* ISRO */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-gameBlack rounded-[5rem] p-8 lg:p-24 text-white overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gameTeal text-white font-black text-[11px] uppercase tracking-[0.2em] mb-12 shadow-lg shadow-gameTeal/20">
                    <Rocket size={16} /> National Space Agency
                  </div>
                  <h2 className="text-4xl lg:text-7xl font-black mb-8 tracking-tighter italic uppercase leading-[0.9]">Indian Space Research Organisation (ISRO)</h2>
                  <p className="text-slate-400 font-bold text-xl mb-12 leading-relaxed italic border-l-4 border-gameTeal pl-8">
                    India's premier space agency, known for Chandrayaan & Mangalyaan. Your work here powers national missions and global prestige.
                  </p>

                  <div className="space-y-6 mb-16">
                     <h4 className="text-gameGold font-black uppercase text-xs tracking-[0.3em] mb-8 flex items-center gap-3">
                        <Zap size={16} fill="currentColor" /> Life @ ISRO:
                     </h4>
                     {[
                       "Work on India's biggest R&D projects — from satellites to rockets.",
                       "Job is a Mission: Build technology with direct national impact.",
                       "Stability & Growth: Prestigious Group A post, excellent balance.",
                       "Elite Ecosystem: Learn from top scientists in a global environment."
                     ].map((point, i) => (
                       <div key={i} className="flex gap-5 items-start group/item transition-all">
                          <CheckCircle2 size={24} className="text-gameTeal shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                          <span className="text-slate-300 font-bold text-lg md:text-xl italic">{point}</span>
                       </div>
                     ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-6 pt-10 border-t border-white/10">
                    <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-gameGold/10">
                      Join Gate Preparation
                    </button>
                    <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-gameBlack transition-all">
                      View Detailed Snapshot
                    </button>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-3xl rounded-[4rem] p-10 lg:p-16 border border-white/10 relative shadow-2xl">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-gameTeal/20 blur-[50px]"></div>
                  <h3 className="text-2xl font-black text-gameTeal mb-12 uppercase tracking-[0.2em] border-b border-white/10 pb-8 flex items-center gap-4 italic">
                    <Target size={28} /> Exam Snapshot:
                  </h3>
                  <div className="space-y-10">
                    {[
                      { label: "Designation", value: "Scientist/Engineer 'SC' (Electronics/Mechanical/Computer Science)." },
                      { label: "Eligibility Criteria", value: "BE/B.Tech with Minimum 65% aggregate." },
                      { label: "Starting Package", value: "Basic Pay Rs. 56,000 + DA + HRA + Other Allowances." },
                      { label: "Selection Process", value: "Intense Online Test + Performance-based Interview." }
                    ].map((item, i) => (
                      <div key={i} className="group/snap">
                        <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.25em] block mb-3 group-hover/snap:text-gameTeal transition-colors">{item.label}</span>
                        <span className="text-2xl font-black group-hover/snap:text-gameGold transition-colors tracking-tight leading-tight">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BARC */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-[5rem] p-8 lg:p-24 border border-slate-200 group relative overflow-hidden shadow-sm"
            >
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-gameTeal/5 rounded-full blur-[100px]"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/2">
                   <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gameGold text-gameBlack font-black text-[11px] uppercase tracking-[0.2em] mb-12 shadow-lg shadow-gameGold/20">
                    <Cpu size={16} /> Nuclear Science Authority
                  </div>
                  <h2 className="text-4xl lg:text-7xl font-black text-gameBlack mb-10 tracking-tighter uppercase italic leading-[0.9]">Bhabha Atomic Research Centre (BARC)</h2>
                  <p className="text-slate-500 font-bold text-xl mb-12 leading-relaxed italic border-l-4 border-gameTeal pl-8">
                    BARC is the heart of India's nuclear science, power, and technology programs under the Department of Atomic Energy (DAE).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {[
                      "Mission-critical national projects in nuclear energy and advanced reactors.",
                      "Unmatched job security and structured professional growth hierarchy.",
                      "Pursue M.Tech at IIT (via DGFS) while being a paid employee.",
                      "Direct contribution to India's energy technological sovereignty."
                    ].map((point, i) => (
                       <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                          <CheckCircle2 size={24} className="text-gameTeal mb-6" />
                          <span className="text-slate-700 font-black text-lg leading-snug italic block">{point}</span>
                       </div>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <button className="px-10 py-5 bg-gameTeal text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameBlack transition-all shadow-xl shadow-gameTeal/10">
                      Explore Lakshya (ME)
                    </button>
                    <button className="px-10 py-5 bg-white text-slate-500 border border-slate-200 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-100 transition-all">
                      View Recruitment Info
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2">
                   <div className="bg-gameBlack rounded-[4rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden group/snap">
                      <div className="absolute top-0 right-0 w-48 min-h-48 bg-gameTeal/10 rounded-full blur-[60px] group-hover/snap:scale-150 transition-transform duration-1000"></div>
                      <h3 className="text-2xl font-black text-gameTeal mb-12 uppercase tracking-[0.2em] border-b border-white/5 pb-8 flex items-center gap-4 italic font-black">
                        <Target size={28} /> Selection Flow:
                      </h3>
                      <div className="space-y-12">
                        {[
                          { label: "Programs Offered", value: "OCES (1-year training) / DGFS (M.Tech + training) for Scientific Officer." },
                          { label: "Eligibility", value: "BE/B.Tech (60%+) or M.Sc (60%+) in specific science streams." },
                          { label: "Starting CTC", value: "₹74,000/- during training. approx ₹1,35,000/- Gross after placement." },
                          { label: "Career Path", value: "Scientific Officer 'C' (Group A Gazetted Office) in elite DAE units." }
                        ].map((item, i) => (
                          <div key={i} className="group/item">
                            <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.25em] block mb-3 group-hover/item:text-gameTeal transition-colors">{item.label}</span>
                            <span className="text-xl font-black leading-tight block group-hover/item:text-gameGold transition-colors uppercase tracking-tight">{item.value}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* DRDO */}
            <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gameBlack rounded-[5rem] p-10 lg:p-24 overflow-hidden relative group shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
              
              <div className="relative z-10 text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gameTeal text-white font-black text-[11px] uppercase tracking-[0.2em] mb-12 shadow-lg shadow-gameTeal/20">
                  <Shield size={16} /> Defence Innovation Leader
                </div>
                <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 tracking-tighter uppercase italic leading-[0.85]">Defence Research and Development Organisation (DRDO)</h2>
                <p className="text-slate-400 font-bold text-xl md:text-2xl leading-relaxed mb-20 italic max-w-4xl mx-auto border-x border-white/5 px-10">
                  DRDO is India's largest defence R&D agency under the Ministry of Defence. Its mission is to design, develop, and produce state-of-the-art weapon systems and platforms for the Brave.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                   {[
                     { label: "Primary Entry", value: "Scientist 'B' Entry Post." },
                     { label: "Core Requirements", value: "BE/B.Tech/M.Sc + Valid GATE." },
                     { label: "Hiring Matrix", value: "GATE Score + Written exam + Interview." },
                     { label: "Pay Authority", value: "₹56,000 Basic (7th CPC Level 10)." }
                   ].map((item, i) => (
                     <div key={i} className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2.5rem] group/card hover:bg-white hover:border-white transition-all duration-500">
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] block mb-5 group-hover/card:text-gameTeal transition-colors">{item.label}</span>
                        <span className="text-white font-black text-lg group-hover/card:text-gameBlack transition-colors uppercase leading-tight italic">{item.value}</span>
                     </div>
                   ))}
                </div>

                <div className="bg-white rounded-[4rem] p-12 lg:p-20 text-left shadow-2xl relative">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-10">
                    <h3 className="text-3xl lg:text-5xl font-black text-gameBlack uppercase tracking-tighter italic">
                      Life @ <span className="text-gameTeal">DRDO</span>:
                    </h3>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-gameTeal/10 flex items-center justify-center text-gameTeal"><Zap size={24} /></div>
                       <div className="w-12 h-12 rounded-2xl bg-gameGold/10 flex items-center justify-center text-gameGold"><Shield size={24} /></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     {[
                       "Work on cutting-edge defence tech for missiles, radars, and combat systems.",
                       "Join as a respected Group 'A' officer with high security and clear growth.",
                       "Collaborate with top scientists and military leaders on advanced innovation.",
                       "Enjoy stability, housing in premium enclaves, and national pride."
                     ].map((item, i) => (
                       <div key={i} className="flex gap-6 items-start p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:bg-white transition-all duration-500 group/list">
                          <div className="w-12 h-12 rounded-2xl bg-gameTeal/10 text-gameTeal flex items-center justify-center font-black shrink-0 group-hover/list:bg-gameTeal group-hover/list:text-white transition-all">{i+1}</div>
                          <span className="text-slate-600 font-bold text-lg md:text-xl leading-relaxed italic">{item}</span>
                       </div>
                     ))}
                  </div>
                  <div className="mt-20 flex flex-wrap justify-center gap-8">
                    <button className="px-12 py-6 bg-gameTeal text-white rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-gameBlack transition-all shadow-xl shadow-gameTeal/20">
                      View Courses for DRDO
                    </button>
                    <button className="px-12 py-6 bg-slate-100 text-slate-500 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-slate-200 transition-all">
                      More Information
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAJOR PSUS - IOCL & BHEL */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gameTeal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="space-y-24">
            {/* IOCL */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-8 lg:p-20 border border-slate-100 shadow-xl overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gameGold/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-8 py-3 bg-gameGold text-gameBlack font-black text-2xl uppercase tracking-tighter italic mb-10 skew-x-[-12deg]">
                  2- Indian Oil Corporation of India Limited (IOCL)
                </div>
                
                <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed italic max-w-4xl border-l-4 border-gameTeal pl-8">
                  IOCL is India&apos;s largest integrated oil and gas corporation, a Maharatna PSU. It fuels the nation&apos;s energy needs across refining, marketing, pipelines, and petrochemicals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
                  {[
                    { label: "Post", value: "Junior Engineer/Officer (Diploma), Engineer/Officer (Graduate via GATE), Assistant Officer" },
                    { label: "Selection", value: "Computer-Based Test + GD/GT + Personal Interview (for Diploma) / GATE score + GD/GT + PI (for Graduates)" },
                    { label: "Key Tracks", value: "Diploma in Chemical, Mechanical, Electrical, Instrumentation; Graduate roles via GATE" },
                    { label: "Stability & Growth", value: "Permanent role in India's flagship energy PSU" },
                    { label: "Pay Scale", value: "Engineer/Officer ~₹17L CTC, Junior Engineer ~₹30,000 - ₹1,20,000 per month" },
                    { label: "Postings", value: "Nationwide across refineries, marketing, pipelines, R&D" },
                    { label: "Perks", value: "Housing, medical, LTA, PRP, gratuity, pension, and more" },
                    { label: "Work Impact", value: "Direct contribution to India's energy security and transition" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group/item">
                       <div className="w-2.5 h-2.5 rounded-full bg-gameTeal mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                       <div className="space-y-1">
                         <span className="text-gameBlack font-black uppercase text-xs tracking-widest block">{item.label}:</span>
                         <span className="text-slate-600 font-bold text-lg leading-snug block italic">{item.value}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameBlack hover:text-white transition-all shadow-xl shadow-gameGold/10">
                    Course Button
                  </button>
                  <button className="px-10 py-5 bg-gameBlack text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameTeal transition-all flex items-center gap-4">
                    View More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* BHEL */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-8 lg:p-20 border border-slate-100 shadow-xl overflow-hidden relative group"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gameTeal/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-8 py-3 bg-gameGold text-gameBlack font-black text-2xl uppercase tracking-tighter italic mb-10 skew-x-[-12deg]">
                  3- Bharat Heavy Electricals Limited (BHEL)
                </div>
                
                <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed italic max-w-4xl border-l-4 border-gameTeal pl-8">
                  BHEL is India&apos;s premier engineering and manufacturing PSU, established in 1964. It powers the nation&apos;s core sectors like energy, defence, and transportation with world-class products and services.
                </p>
                <br />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
                  {[
                    { label: "Posts", value: "Engineer Trainee (Graduate) & Supervisor Trainee (Diploma)" },
                    { label: "Selection", value: "Computer-Based Exam + Interview/Document Verification" },
                    { label: "Stability & Growth", value: "Permanent role in a Maharatna PSU" },
                    { label: "Pay Scale", value: "ET ~₹60,000 - ₹1,80,000 per month, ST ~₹33,500 - ₹1,20,000 per month." },
                    { label: "Posting", value: "Manufacturing units or power sites across India" },
                    { label: "Training", value: "1-year training before absorption" },
                    { label: "Lifestyle", value: "Secure job, social respect, work in nation-building projects" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group/item">
                       <div className="w-2.5 h-2.5 rounded-full bg-gameGold mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                       <div className="space-y-1">
                         <span className="text-gameBlack font-black uppercase text-xs tracking-widest block">{item.label}:</span>
                         <span className="text-slate-600 font-bold text-lg leading-snug block italic">{item.value}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameBlack hover:text-white transition-all shadow-xl shadow-gameGold/10">
                    Course Button
                  </button>
                  <button className="px-10 py-5 bg-gameBlack text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all flex items-center gap-4">
                    View More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* NTPC */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-8 lg:p-20 border border-slate-100 shadow-xl overflow-hidden relative group"
            >
              <div className="absolute top-0 left-0 w-64 h-64 bg-gameGold/5 rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-8 py-3 bg-gameGold text-gameBlack font-black text-2xl uppercase tracking-tighter italic mb-10 skew-x-[-12deg]">
                  4- National Thermal Power Corporation (NTPC)
                </div>
                
                <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed italic max-w-4xl border-l-4 border-gameTeal pl-8">
                  NTPC Limited is India&apos;s largest integrated power utility, established in 1975. It has evolved from a thermal power generator into a diversified energy major across conventional and renewable generation, mining, and green energy
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
                  {[
                    { label: "Primary Route", value: "Recruitment for Executive Engineer Trainee positions is primarily through GATE scores." },
                    { label: "Selection Stages", value: "Shortlisted candidates undergo Group Discussion (5% weightage) and Personal Interview (10% weightage)." },
                    { label: "Final Merit", value: "The final selection is based on a composite score: 85% GATE score, 5% GD, and 10% PI." },
                    { label: "Job Profile", value: "Roles in operations, project management, and core engineering across 70+ locations in India and abroad." },
                    { label: "Pay Scale", value: "NTPC Executive Trainee salary offers a competitive package, typically in the E1 Grade pay scale of ₹40,000 - ₹1,40,000 per month + other allowances." },
                    { label: "Growth & Stability", value: "A central government job offering high job security, professional growth, and a chance to contribute to national infrastructure." },
                    { label: "Lifestyle", value: "A stable and rewarding career with a competitive salary, comprehensive perks, and a strong emphasis on organisational values like safety, innovation, and mutual respect." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group/item">
                       <div className="w-2.5 h-2.5 rounded-full bg-gameGold mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                       <div className="space-y-1">
                         <span className="text-gameBlack font-black uppercase text-xs tracking-widest block">{item.label}:</span>
                         <span className="text-slate-600 font-bold text-lg leading-snug block italic">{item.value}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameBlack hover:text-white transition-all shadow-xl shadow-gameGold/10">
                    Course Button
                  </button>
                  <button className="px-10 py-5 bg-gameBlack text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all flex items-center gap-4">
                    View More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* GAIL */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-8 lg:p-20 border border-slate-100 shadow-xl overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gameTeal/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-8 py-3 bg-gameGold text-gameBlack font-black text-2xl uppercase tracking-tighter italic mb-10 skew-x-[-12deg]">
                  5- Gas Authority of India Limited (GAIL)
                </div>
                
                <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed italic max-w-4xl border-l-4 border-gameTeal pl-8">
                  GAIL (India) Limited is a Maharatna PSU and the country&apos;s flagship natural gas company, leading India&apos;s transition to clean fuel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
                  {[
                    { label: "Entry Path", value: "Based exclusively on GATE score." },
                    { label: "Key Posts", value: "Executive Trainee in Chemical, Instrumentation, Electrical & Mechanical." },
                    { label: "Eligibility", value: "Relevant B.E./B.Tech (min. 65% marks)." },
                    { label: "Stable & Rewarding", value: "One-year training in E-2 grade (₹60,000 - 1,80,000 pay scale) with excellent benefits." },
                    { label: "Dynamic Work", value: "Pan-India postings in a technically challenging, core infrastructure sector." },
                    { label: "National Impact", value: "Direct contribution to India&apos;s energy security and green energy transition." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group/item">
                       <div className="w-2.5 h-2.5 rounded-full bg-gameTeal mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                       <div className="space-y-1">
                         <span className="text-gameBlack font-black uppercase text-xs tracking-widest block">{item.label}:</span>
                         <span className="text-slate-600 font-bold text-lg leading-snug block italic">{item.value}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameBlack hover:text-white transition-all shadow-xl shadow-gameGold/10">
                    Course Button
                  </button>
                  <button className="px-10 py-5 bg-gameBlack text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameTeal transition-all flex items-center gap-4">
                    View More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* SAIL */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[4rem] p-8 lg:p-20 border border-slate-100 shadow-xl overflow-hidden relative group"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gameGold/5 rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-8 py-3 bg-gameGold text-gameBlack font-black text-2xl uppercase tracking-tighter italic mb-10 skew-x-[-12deg]">
                  6- Steel Authority of India Limited (SAIL)
                </div>
                
                <p className="text-slate-500 font-bold text-lg mb-12 leading-relaxed italic max-w-4xl border-l-4 border-gameTeal pl-8">
                  SAIL (Steel Authority of India Limited) is a Maharatna public sector enterprise and the nation&apos;s leading steel producer, driving India&apos;s industrial and infrastructural growth. It offers young engineers a prestigious career as Management Trainees with excellent growth opportunities, job security, and a chance to contribute to the core sector.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-16">
                  {[
                    { label: "Post", value: "Management Trainee (Technical)" },
                    { label: "Eligibility", value: "Engineering degree with 65% marks (relaxation for reserved categories)" },
                    { label: "Selection", value: "Online CBT -> Group Discussion -> Interview." },
                    { label: "Training & Growth", value: "1-year training as a Management Trainee, then Assistant Manager (E1 grade)." },
                    { label: "Attractive CTC", value: "Approx. ₹16-17 lakhs per annum at the minimum of the E1 grade (excluding Performance Related Pay (PRP) and location-based allowances)" },
                    { label: "Job Security", value: "Permanent role in a Maharatna PSU with opportunities for advancement." },
                    { label: "Impactful Role", value: "Contribute to core sectors like steel, infrastructure, and national development." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group/item">
                       <div className="w-2.5 h-2.5 rounded-full bg-gameGold mt-2 shrink-0 group-hover/item:scale-150 transition-transform"></div>
                       <div className="space-y-1">
                         <span className="text-gameBlack font-black uppercase text-xs tracking-widest block">{item.label}:</span>
                         <span className="text-slate-600 font-bold text-lg leading-snug block italic">{item.value}</span>
                       </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <button className="px-10 py-5 bg-gameGold text-gameBlack rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameBlack hover:text-white transition-all shadow-xl shadow-gameGold/10">
                    Course Button
                  </button>
                  <button className="px-10 py-5 bg-gameBlack text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all flex items-center gap-4">
                    View More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
