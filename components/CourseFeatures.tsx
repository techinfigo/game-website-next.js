
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Zap, PenTool, ArrowRight, CheckCircle2, Smartphone } from 'lucide-react';

const CourseFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  const features = [
    {
      id: 0,
      icon: Layers,
      title: "Conceptual Foundation",
      subtitle: "Build Strong Basics",
      desc: "We focus on building a strong conceptual foundation, ensuring you understand the 'Why' and 'How' behind every engineering principle through visualized learning.",
      points: ["Concept Visualization", "Fundamental Clarity", "Layered Learning"],
      gradient: "from-[#075d63] to-[#043f42]",
      accent: "text-[#075d63]",
      bgImage: "/images/courses/feature-1.png"
    },
    {
      id: 1,
      icon: Zap,
      title: "Problem Solving",
      subtitle: "Sharpen Skills",
      desc: "Sharpen your problem-solving skills with rigorous practice. Learn to tackle complex questions with speed and accuracy using proven techniques.",
      points: ["Critical Thinking", "Speed Techniques", "Accuracy Improvement"],
      gradient: "from-[#f2c537] to-[#d8b32f]",
      accent: "text-[#f2c537]",
      bgImage: "/images/courses/feature-2.png"
    },
    {
      id: 2,
      icon: PenTool,
      title: "Exam Alignment",
      subtitle: "Latest Patterns",
      desc: "Stay ahead of the curve. Our content is fully aligned with the latest exam patterns and syllabus updates to ensure focused preparation.",
      points: ["Trend Analysis", "Pattern Updates", "Focused Syllabus"],
      gradient: "from-slate-700 to-slate-900",
      accent: "text-white",
      bgImage: "/images/courses/feature-3.png"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Background Ambience - Light Theme */}
       <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#075d63]/5 rounded-full blur-[150px] pointer-events-none"></div>

       <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-block"
             >
                <span className="text-[#075d63] font-black tracking-[0.2em] uppercase text-xs mb-4 block">The GAME Advantage</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
                   At GAME, our courses are <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-500">designed to:</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                   Choose the course that best fits your timeline and Target Exam, and let GAME be your partner in achieving a top score. 
                   Get started now for a comprehensive and structured preparation journey!
                </p>
             </motion.div>
          </div>

          {/* Interactive Accordion Layout */}
          <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px] mb-16">
             {features.map((feature, index) => (
                <motion.div
                   key={feature.id}
                   layout
                   onClick={() => setActiveFeature(index)}
                   onHoverStart={() => setActiveFeature(index)}
                   className={`relative rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group ${
                      activeFeature === index ? 'lg:flex-[3]' : 'lg:flex-[1]'
                   } flex flex-col h-[400px] lg:h-full border border-slate-200 shadow-xl`}
                >
                   {/* Background Image with Overlay */}
                   <div className="absolute inset-0">
                      <Image 
                        src={feature.bgImage} 
                        alt={feature.title} 
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b ${feature.gradient} mix-blend-multiply opacity-90`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                   </div>

                   {/* Content Container */}
                   <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                      
                      {/* Icon & Title Area */}
                      <div className="mb-auto">
                         <div className={`w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 shadow-xl ${
                            activeFeature === index ? 'scale-100' : 'scale-90 opacity-80'
                         } transition-all duration-500`}>
                            <feature.icon size={32} className="text-white" />
                         </div>
                         
                         {/* Vertical Title for Inactive State (Desktop) */}
                         {activeFeature !== index && (
                            <div className="hidden lg:block absolute bottom-12 left-8 transform origin-bottom-left -rotate-90 w-max">
                               <h3 className="text-2xl font-bold text-white/70 tracking-wider whitespace-nowrap uppercase">
                                  {feature.title}
                               </h3>
                            </div>
                         )}
                      </div>

                      {/* Active Content */}
                      <AnimatePresence mode="wait">
                         <motion.div
                            layout
                            className="space-y-4"
                         >
                            <h3 className={`text-3xl md:text-4xl font-black text-white leading-none ${activeFeature !== index ? 'lg:hidden' : ''}`}>
                               {feature.title}
                            </h3>
                            
                            {activeFeature === index && (
                               <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                               >
                                  <div className={`text-sm font-bold uppercase tracking-widest mb-3 ${feature.accent}`}>
                                     {feature.subtitle}
                                  </div>
                                  <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-6 max-w-xl font-medium">
                                     {feature.desc}
                                  </p>
                                  
                                  {/* Points */}
                                  <div className="flex flex-wrap gap-3 mb-6">
                                     {feature.points.map((point, i) => (
                                        <span key={i} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white">
                                           <CheckCircle2 size={12} className={feature.accent} /> {point}
                                        </span>
                                     ))}
                                  </div>
                               </motion.div>
                            )}
                         </motion.div>
                      </AnimatePresence>
                   </div>
                </motion.div>
             ))}
          </div>

          <div className="text-center">
             <button className="bg-[#075d63] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#043f42] transition-all shadow-xl shadow-[#075d63]/20 hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto group">
                Download the GAME Live App Now 
                <Smartphone size={20} className="group-hover:rotate-12 transition-transform" />
             </button>
          </div>

       </div>
    </section>
  );
};

export default CourseFeatures;
