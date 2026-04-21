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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=800&q=80",
      action: 'ese'
    },
    {
      id: 'gate',
      title: 'GATE',
      subtitle: 'Graduate Aptitude Test in Engineering',
      icon: GraduationCap,
      color: 'text-blue-400',
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?fit=crop&w=800&q=80",
      action: 'gate'
    },
    {
      id: 'psu',
      title: 'PSUs / R&D',
      subtitle: 'Public Sector Undertakings / Research & Development',
      icon: Briefcase,
      color: 'text-emerald-400',
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=800&q=80",
      action: 'psu'
    },
    {
      id: 'ssc',
      title: 'SSC JE',
      subtitle: 'Staff Selection Commission Junior Engineer',
      icon: Building2,
      color: 'text-orange-400',
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fit=crop&w=800&q=80",
      action: 'ssc'
    },
    {
      id: 'rrb',
      title: 'RRB JE',
      subtitle: 'Railway Recruitment Board Junior Engineer',
      icon: Train,
      color: 'text-red-400',
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?fit=crop&w=800&q=80",
      action: 'rrb'
    },
    {
      id: 'state',
      title: 'State AE / JE',
      subtitle: 'State Assistant Engineer / Junior Engineer',
      icon: MapPin,
      color: 'text-cyan-400',
      image: "https://images.unsplash.com/photo-1541888941294-e8367f65b508?fit=crop&w=800&q=80",
      action: 'state'
    },
    {
      id: 'non-tech',
      title: 'Non-Tech',
      subtitle: 'Non Technical Exam',
      icon: BookOpen,
      color: 'text-indigo-400',
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fit=crop&w=800&q=80",
      action: 'nontech'
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-white relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
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
                   <div className="relative h-[260px] md:h-[280px] rounded-[2rem] overflow-hidden bg-slate-900 border border-slate-200/10 transition-all duration-500 isolate">
                      
                      {/* Background Image */}
                      <Image 
                         src={item.image} 
                         alt={item.title} 
                         fill
                         draggable="false"
                         className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                         referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                      <div className="absolute inset-0 border-[4px] border-white/5 rounded-[2rem] pointer-events-none group-hover:border-gameGold/20 transition-colors"></div>

                      {/* Content */}
                      <div className="absolute inset-0 p-4 pb-5 flex flex-col">
                         
                         {/* Floating Icon */}
                         <div className={`w-9 h-9 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2 group-hover:bg-white group-hover:text-gameTeal transition-all ${item.color}`}>
                            <item.icon size={16} strokeWidth={2} />
                         </div>

                         <div className="mt-auto">
                            <h3 className="text-xl font-black text-white mb-0.5 tracking-tight drop-shadow-lg leading-tight">
                               {item.title}
                            </h3>
                            <p className="text-white/60 text-[8px] font-black uppercase tracking-[0.15em] mb-2 line-clamp-1">
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
                                    handleNavigate('courses');
                                  }}
                                  className="w-full bg-[#f2c537] text-black py-2 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl active:scale-[0.98]"
                                >
                                   Explore <ChevronRight size={12} />
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
