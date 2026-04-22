
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Target, Laptop, Users, CheckCircle2
} from 'lucide-react';

const CourseHelpSection: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const features = [
    {
      id: 1,
      title: "Mastery Toolkit",
      subtitle: "QUALITY CONTENT & RESOURCES",
      description: "Access high-quality content, class notes, study material, PYQs analysis, and a structured course planner.",
      points: ["Quality Content", "Class Notes & Study Material", "PYQs Analysis", "Structured Course Planner"],
      tags: ["Quality Content", "Class Notes", "PYQs", "Planner"],
      icon: BookOpen,
      bgGradient: "from-[#075d63] to-[#0a4d52]",
      images: [
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
      ]
    },
    {
      id: 2,
      title: "Exam-Edge",
      subtitle: "TEST SERIES & MOCKS",
      description: "Sharpen your skills with topic-wise tests, full-length mock exams, and comprehensive performance analysis.",
      points: ["Topic-wise Tests & Assignments", "Full-length Mock Exams", "Comprehensive Test Series", "Inclusive pre-exam practice series"],
      tags: ["Mock Tests", "Analysis", "Ranking"],
      icon: Target,
      bgGradient: "from-[#b48e0b] to-[#8c6d09]",
      images: [
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=400"
      ]
    },
    {
      id: 3,
      title: "Flexi-learn",
      subtitle: "LIVE & PRE-RECORDED",
      description: "Learn at your own pace with self-paced learning, live & pre-recorded sessions, and interactive classes.",
      points: ["Self-paced learning", "Live & Pre-recorded sessions", "Interactive Classes + Practice", "24/7 Dedicated Doubt support"],
      tags: ["Self-paced", "Live Sessions", "Doubt Support"],
      icon: Laptop,
      bgGradient: "from-[#053d41] to-[#075d63]",
      images: [
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400",
        "https://picsum.photos/seed/online-learning/400/400",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=400"
      ]
    },
    {
      id: 4,
      title: "Success Support",
      subtitle: "PERSONAL GUIDANCE",
      description: "Get individual focus from Gaurav Babu Sir with tailored course progress training and adaptive learning.",
      points: ["Personal Guidance from Gaurav Babu Sir", "Individual focus & exam updates", "Tailored course progress training", "Adaptive Learning Strategies"],
      tags: ["Mentorship", "Individual Focus", "Adaptive Learning"],
      icon: Users,
      bgGradient: "from-[#8c6d09] to-[#b48e0b]",
      images: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400"
      ]
    }
  ];

  return (
    <section className="py-6 lg:py-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-6">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#075d63]/5 border border-[#075d63]/10 text-[#075d63] text-[10px] font-bold uppercase tracking-widest mb-3">
                 <CheckCircle2 size={12} /> Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                 How do these courses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-[#b48e0b]">help you?</span>
              </h2>
           </motion.div>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[480px]">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              layout
              onClick={() => setActiveId(feature.id)}
              onMouseEnter={() => setActiveId(feature.id)}
              className={`relative rounded-[1.5rem] overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group
                ${activeId === feature.id ? 'lg:flex-[3.5] h-[440px] lg:h-auto' : 'lg:flex-[0.7] h-[80px] lg:h-auto hover:lg:flex-[0.9]'}
              `}
            >
              {/* Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-90 transition-opacity duration-500`}></div>
              
              {/* Background Pattern/Noise */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

              {/* Content Container */}
              <div className="relative h-full w-full p-5 md:p-8 flex overflow-hidden">
                
                {/* Collapsed State Content (Vertical Text) */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${activeId === feature.id ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                   <div className="flex flex-col items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/10">
                         <feature.icon size={20} />
                      </div>
                      <h3 className="text-xl font-black text-white/40 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap hidden lg:block">
                         {feature.title}
                      </h3>
                      {/* Mobile Only Title for Collapsed State */}
                      <h3 className="text-lg font-bold text-white lg:hidden">
                         {feature.title}
                      </h3>
                   </div>
                </div>

                {/* Expanded State Content */}
                <div className={`w-full h-full flex flex-col md:flex-row gap-8 transition-all duration-500 delay-100 ${activeId === feature.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                   
                   {/* Text Content */}
                   <div className="flex-1 flex flex-col justify-center text-white z-10 min-w-[280px]">
                      <h3 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
                         {feature.title}
                      </h3>
                      
                      {/* Points List */}
                      <ul className="space-y-4">
                        {feature.points.map((point, i) => (
                          <li key={i} className="flex items-center gap-3 text-white/90 text-lg font-bold">
                            <div className="w-2 h-2 rounded-full bg-gameGold shadow-[0_0_10px_rgba(242,197,55,0.5)]"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                   </div>

                   {/* Image Collage Content */}
                   <div className="flex-1 relative hidden md:flex items-center justify-center">
                      <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition-transform duration-700 grid grid-cols-2 grid-rows-2 gap-1">
                         {feature.images.map((img, i) => (
                           <div key={i} className="relative w-full h-full">
                              <Image 
                                src={img} 
                                alt={`${feature.title} collage ${i}`} 
                                fill
                                className="object-cover"
                                referrerPolicy="no-referrer"
                              />
                           </div>
                         ))}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                         
                         {/* Floating Badge for Exam-Edge style */}
                         {feature.id === 2 && (
                           <div className="absolute bottom-6 left-6 bg-black text-[#f2c537] text-[10px] font-bold px-4 py-2 rounded-full shadow-xl z-20 flex items-center gap-2 border border-white/10">
                             <Target size={12} /> Top 5% Rank
                           </div>
                         )}
                      </div>
                   </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CourseHelpSection;
