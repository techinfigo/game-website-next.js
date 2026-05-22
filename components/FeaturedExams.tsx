'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { 
  GraduationCap, Trophy, Briefcase, Building2, Train, MapPin, 
  BookOpen, ChevronRight, Info, ChevronLeft 
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FeaturedExamsProps {
  onNavigate?: (page: string) => void;
}

const FeaturedExams: React.FC<FeaturedExamsProps> = ({ onNavigate }) => {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      router.push(page.startsWith('/') ? page : `/${page}`);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    // Adjust startX to be relative to the container
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 320; // card width + gap
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const categories = [
    {
      id: 'ese',
      title: 'ESE',
      subtitle: 'Engineering Services Examination',
      icon: Trophy,
      color: 'text-purple-400',
      image: "/exams/ese-bg.jpg",
      logo: "/exams/ese-logo.jpg",
      action: 'ese'
    },
    {
      id: 'gate',
      title: 'GATE',
      subtitle: 'Graduate Aptitude Test in Engineering',
      icon: GraduationCap,
      color: 'text-blue-400',
      image: "/exams/gate-bg.jpg",
      logo: "/exams/gate-logo.jpg",
      action: 'gate'
    },
    {
      id: 'psu',
      title: 'PSUs / R&D',
      subtitle: 'Public Sector Undertakings / Research & Development',
      icon: Briefcase,
      color: 'text-emerald-400',
      image: "/exams/psu-bg.jpg",
      logo: "/exams/logo-bhel.png",
      action: 'psu'
    },
    {
      id: 'ssc',
      title: 'SSC JE',
      subtitle: 'Staff Selection Commission Junior Engineer',
      icon: Building2,
      color: 'text-orange-400',
      image: "/exams/ssc-bg.jpg",
      logo: "/exams/ssc-logo.jpg",
      action: 'ssc'
    },
    {
      id: 'rrb',
      title: 'RRB JE',
      subtitle: 'Railway Recruitment Board Junior Engineer',
      icon: Train,
      color: 'text-red-400',
      image: "/exams/rrb-bg.jpg",
      logo: "/exams/rrb-logo.jpg",
      action: 'rrb'
    },
    {
      id: 'state',
      title: 'State AE / JE',
      subtitle: 'State Assistant Engineer / Junior Engineer',
      icon: MapPin,
      color: 'text-cyan-400',
      image: "/exams/state-ae-je-bg.png",
      logo: "/exams/state-ae-je-logo.jpg
",
      action: 'state'
    },
    {
      id: 'non-tech',
      title: 'Non-Tech',
      subtitle: 'Non Technical Exam',
      icon: BookOpen,
      color: 'text-indigo-400',
      image: "/exams/non-tech-bg.png",
      logo: "/exams/non-tech-logo.jpg",
      action: 'nontech'
    }
  ];

  return (
    <section id="exams" className="py-8 md:py-10 bg-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.02]"></div>
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[120px] -z-10"></div>

       <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-4 md:mb-6 gap-4 md:gap-6">
             <div className="max-w-2xl">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/5 border border-[#075d63]/10 rounded-full mb-2"
                >
                   <div className="w-1 h-1 rounded-full bg-gameGold animate-pulse"></div>
                   <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em]">Select Your Goal</span>
                </motion.div>
                
                <motion.h2 
                  className="text-2xl md:text-4xl font-black text-slate-900 mb-2 leading-tight"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">Examination</span>
                </motion.h2>
                
                <motion.p 
                  className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium mt-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Gaurav's Academy for Mentorship & Education, an online institute for engineering preparation; guiding students to excel in GATE, ESE, PSUs, and JE exams.
                </motion.p>
             </div>

             {/* Navigation Buttons */}
             <div className="flex gap-2 mb-2">
                <button 
                  onClick={() => scroll('left')}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-gameTeal hover:text-white transition-all shadow-sm group"
                >
                   <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-gameTeal hover:text-white transition-all shadow-sm group"
                >
                   <ChevronRight size={18} />
                </button>
             </div>
          </div>

          {/* Sliding Cards Container */}
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth snap-x select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
             {categories.map((item, index) => (
                <motion.div
                   key={item.id}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.05 }}
                   className="min-w-[240px] md:min-w-[260px] snap-center group pointer-events-auto"
                >
                   {/* Container - Bit more rounded rounded-[3rem] */}
                   <div className="relative h-[300px] md:h-[320px] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-200/10 transition-all duration-500 isolate">
                      
                      {/* Background Image */}
                      <Image 
                         src={item.image} 
                         alt={item.title} 
                         fill
                         draggable="false"
                         className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-1000"
                         referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]"></div>
                      
                      {/* Hover Pulse Gradient */}
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gameTeal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[2]"></div>
                      
                      <div className="absolute inset-0 border-[4px] border-white/5 rounded-[2.5rem] pointer-events-none group-hover:border-white/20 transition-colors z-[3]"></div>

                      {/* Content */}
                      <div className="absolute inset-0 p-4 pb-6 flex flex-col z-[10]">
                         
                         {/* Floating Logo Container */}
                         <div className="relative w-12 h-12 mb-3 overflow-hidden flex items-center justify-center transition-all group-hover:scale-110 duration-500 rounded-xl">
                            <Image 
                              src={item.logo} 
                              alt={`${item.title} Logo`} 
                              fill
                              className="object-contain p-0.5"
                              unoptimized
                            />
                         </div>

                         <div className="mt-auto transform translate-y-[70px] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                            <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight drop-shadow-lg leading-tight transition-all">
                               {item.title}
                            </h3>
                            <p className="text-white/60 text-[9px] font-black uppercase tracking-[0.2em] mb-5 line-clamp-1 transition-all group-hover:text-white/90">
                               {item.subtitle}
                            </p>
                            
                            {/* Buttons container */}
                            <div className="space-y-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                                <button 
                                  onClick={(e) => {
                                    if (isDragging) {
                                      e.preventDefault();
                                      return;
                                    }
                                    handleNavigate(item.action);
                                  }}
                                  className="w-full bg-[#f2c537] text-black py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl active:scale-[0.98]"
                                >
                                   Explore More <ChevronRight size={14} />
                                </button>
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

export default FeaturedExams;
