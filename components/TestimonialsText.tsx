'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck, MessageCircle, X } from 'lucide-react';
import { ALL_STORIES } from './AchieversPage';

const TestimonialAvatar: React.FC<{ src?: string; name: string }> = ({ src, name }) => {
  const [error, setError] = React.useState(false);
  const firstLetter = name ? name.trim().charAt(0).toUpperCase() : '?';

  if (!src || error) {
    return (
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#075d63] to-teal-500 text-white flex items-center justify-center font-black text-lg shadow-inner">
        {firstLetter}
      </div>
    );
  }

  return (
    <Image 
      src={src} 
      alt={name} 
      fill
      className="rounded-full object-cover border-2 border-white" 
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
};

const TestimonialsText: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeStory, setActiveStory] = useState<any | null>(null);

  const testimonials = ALL_STORIES.filter(s => s.type === 'story').map((item) => ({
    id: item.id,
    name: item.name || 'Student',
    role: `${item.course || "Lakshya | 1 Yr GATE Course"} ${item.branch ? `(${item.branch})` : ''}`,
    quote: item.quote,
    image: item.img,
    rating: item.rating || 5
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 340; // Card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-10 lg:py-12 bg-slate-50 relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
       
       <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
             <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white border border-slate-200 rounded-full text-[#075d63] text-[10px] font-bold uppercase tracking-widest mb-3 shadow-sm">
                   <MessageCircle size={12} /> Student Voices
                </div>
                <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                   Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-500">Students & Alumni</span>
                </h2>
             </div>
 
             {/* Navigation Buttons */}
             <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#075d63] hover:text-white hover:border-[#075d63] transition-all duration-300 shadow-sm group"
                  aria-label="Previous testimonials"
                >
                   <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={() => scroll('right')} 
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#075d63] hover:text-white hover:border-[#075d63] transition-all duration-300 shadow-sm group"
                  aria-label="Next testimonials"
                >
                   <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
             </div>
          </div>

          {/* Cards Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-8 pt-1 -mx-4 px-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
             {testimonials.map((item, index) => {
                const quoteText = item.quote || '';
                const isLong = quoteText.length > 110;
                
                return (
                   <motion.div
                      key={item.id}
                      className="min-w-[280px] md:min-w-[320px] h-[215px] md:h-[225px] bg-white rounded-2xl p-5 border border-slate-100 hover:border-[#075d63]/30 hover:shadow-xl hover:shadow-[#075d63]/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: Math.min(index * 0.05, 0.4) }}
                   >
                      {/* Quote Icon */}
                      <div className="absolute top-4 right-5 text-slate-100 group-hover:text-gameTeal/10 transition-colors z-0">
                         <Quote size={28} />
                      </div>

                      {/* User Info */}
                      <div className="flex items-center gap-3 relative z-10">
                         <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-gameTeal/20 to-slate-100 shrink-0 overflow-hidden">
                            <TestimonialAvatar src={item.image} name={item.name} />
                         </div>
                         <div className="min-w-0">
                            <h4 className="font-extrabold text-slate-900 text-sm leading-tight truncate">{item.name}</h4>
                            <span className="text-[9px] font-bold text-gameTeal uppercase tracking-wide flex items-center gap-0.5 truncate max-w-[180px]" title={item.role}>
                               <BadgeCheck size={10} className="shrink-0" /> {item.role}
                            </span>
                         </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 my-2 relative z-10">
                         {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={12} 
                              className={`${i < item.rating ? "fill-[#f2c537] text-[#f2c537]" : "text-slate-200"}`} 
                           />
                         ))}
                      </div>

                      {/* Text */}
                      <p className="text-slate-600 leading-relaxed font-semibold italic text-[11.5px] md:text-[12px] flex-grow select-none relative z-10 overflow-hidden">
                         "{isLong ? `${quoteText.slice(0, 110)}...` : quoteText}"
                         {isLong && (
                            <button 
                               onClick={() => setActiveStory(item)}
                               className="text-[9px] font-black text-[#075d63] ml-1 hover:text-black underline cursor-pointer uppercase inline-block whitespace-nowrap"
                            >
                               Read More
                            </button>
                         )}
                      </p>
                   </motion.div>
                );
             })}
          </div>

          {/* Interactive Modal Backdrop & Content */}
          <AnimatePresence>
             {activeStory && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                   <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100"
                   >
                      {/* Close button */}
                      <button 
                         onClick={() => setActiveStory(null)}
                         className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-20"
                      >
                         <X size={18} />
                      </button>

                      {/* Large Quote Ornament */}
                      <div className="absolute top-6 right-8 text-slate-100 shrink-0 select-none pointer-events-none">
                         <Quote size={80} className="opacity-40 text-gameTeal/20" />
                      </div>

                      {/* Student profile info */}
                      <div className="flex items-center gap-4 mb-6 relative z-10">
                         <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-br from-gameTeal/30 to-slate-200 overflow-hidden relative">
                            <TestimonialAvatar src={activeStory.image} name={activeStory.name} />
                         </div>
                         <div>
                            <h3 className="font-extrabold text-slate-900 text-lg leading-tight">{activeStory.name}</h3>
                            <span className="text-xs font-bold text-gameTeal uppercase tracking-wide flex items-center gap-1 mt-1">
                               <BadgeCheck size={12} /> {activeStory.role}
                            </span>
                         </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4 relative z-10">
                         {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < activeStory.rating ? "fill-[#f2c537] text-[#f2c537]" : "text-slate-200"}`} 
                           />
                         ))}
                      </div>

                      {/* Full feedback Quote */}
                      <div className="max-h-[250px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 relative z-10">
                         <p className="text-slate-700 leading-relaxed font-semibold italic text-sm md:text-base">
                            "{activeStory.quote}"
                         </p>
                      </div>
                   </motion.div>
                </div>
             )}
          </AnimatePresence>

       </div>
    </section>
  );
};

export default TestimonialsText;
