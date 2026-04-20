
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck, MessageCircle } from 'lucide-react';

const TestimonialsText: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      name: "Rohan Das",
      role: "GATE ME (AIR 45)",
      quote: "I never thought Thermodynamics could be this intuitive. The 'Foundation Course' didn't just help me crack GATE; it changed how I perceive Engineering completely.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      id: 2,
      name: "Sneha Kapoor",
      role: "SSC-JE (Selected)",
      quote: "Consistency was my biggest enemy. The daily mentorship calls and structured targets kept me on track. The test series questions were 90% similar to the actual exam.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "ESE 2023 (AIR 12)",
      quote: "For ESE, you need depth. GAME Academy provided detailed notes that covered every minute detail. The interview guidance was the cherry on top.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "GATE CS (AIR 15)",
      quote: "The coding concepts were explained so beautifully. Gaurav Sir's way of teaching is unique and very effective for students from any background.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=150&h=150&q=80",
      rating: 5
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "PSU (NTPC)",
      quote: "I cleared the NTPC interview in my first attempt. The mock interviews conducted by the panel gave me the confidence I needed to succeed.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150&q=80",
      rating: 4
    }
  ];

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
             {testimonials.map((item, index) => (
                <motion.div
                   key={item.id}
                   className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-gameTeal/10 hover:-translate-y-1 transition-all duration-300 flex flex-col relative group"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                >
                   {/* Quote Icon */}
                   <div className="absolute top-4 right-6 text-slate-100 group-hover:text-gameTeal/10 transition-colors">
                      <Quote size={36} />
                   </div>

                   {/* User Info */}
                   <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-br from-gameTeal/20 to-slate-100 shrink-0 overflow-hidden">
                         <Image 
                           src={item.image} 
                           alt={item.name} 
                           fill
                           className="rounded-full object-cover border-2 border-white"
                           referrerPolicy="no-referrer"
                         />
                      </div>
                      <div>
                         <h4 className="font-extrabold text-slate-900 text-base leading-tight">{item.name}</h4>
                         <span className="text-[10px] font-bold text-gameTeal uppercase tracking-wide flex items-center gap-1">
                            <BadgeCheck size={10} /> {item.role}
                         </span>
                      </div>
                   </div>

                   {/* Stars */}
                   <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                         <Star 
                           key={i} 
                           size={14} 
                           className={`${i < item.rating ? "fill-[#f2c537] text-[#f2c537]" : "text-slate-200"}`} 
                        />
                      ))}
                   </div>

                   {/* Text */}
                   <p className="text-slate-600 leading-relaxed font-medium text-[13px] flex-grow">
                      "{item.quote}"
                   </p>
                </motion.div>
             ))}
          </div>

       </div>
    </section>
  );
};

export default TestimonialsText;