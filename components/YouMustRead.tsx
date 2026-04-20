
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const YouMustRead: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const blogs = [
    {
      id: 5,
      title: "Preparation Hacks (Strategy) #5",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=600&q=80",
      desc: "Master the art of time management during exam pressure."
    },
    {
      id: 4,
      title: "Preparation Hacks (Strategy) #4",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=600&q=80",
      desc: "How to create short notes that actually help in revision."
    },
    {
      id: 3,
      title: "Preparation Hacks (Strategy) #3",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fit=crop&w=600&q=80",
      desc: "Understanding the psychology of competitive exams."
    },
    {
      id: 2,
      title: "Preparation Hacks (Strategy) #2",
      img: "https://images.unsplash.com/photo-1513258496098-dad22d581264?fit=crop&w=600&q=80",
      desc: "Best resources to follow for General Studies."
    },
    {
      id: 1,
      title: "Preparation Hacks (Strategy) #1",
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?fit=crop&w=600&q=80",
      desc: "Why consistency beats intensity in the long run."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#202020] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f2c537]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#075d63]/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
           
           {/* Text Content */}
           <motion.div 
             className="lg:col-span-4 relative z-10"
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[#f2c537] text-xs font-bold uppercase tracking-widest mb-6">
                 <BookOpen size={14} /> Blog & Articles
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#f2c537] mb-6 leading-tight">
                 You Must <span className="text-white">Read</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg font-medium">
                 A treasure trove of knowledge filled with expert insights, proven hacks and powerful strategies to simplify concepts, boost efficiency and excel in competitive exams with confidence.
              </p>
              
              <button className="bg-[#075d63] hover:bg-[#054a4f] text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(7,93,99,0.4)] hover:-translate-y-1 group">
                 VIEW ALL 
                 <div className="bg-[#f2c537] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={14} className="text-black" />
                 </div>
              </button>
           </motion.div>

           {/* Cards Slider Area */}
           <div className="lg:col-span-8 relative">
              
              {/* Navigation Buttons (Absolute) */}
              <button 
                onClick={() => scroll('left')}
                className="absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#f2c537] rounded-full text-black flex items-center justify-center z-20 shadow-lg hover:scale-110 transition-transform hidden lg:flex border-4 border-[#202020] group"
              >
                 <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#f2c537] rounded-full text-black flex items-center justify-center z-20 shadow-lg hover:scale-110 transition-transform hidden lg:flex border-4 border-[#202020] group"
              >
                 <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div 
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 md:mx-0 md:px-0 scroll-smooth snap-x custom-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                 {blogs.map((blog, idx) => (
                    <motion.div 
                       key={blog.id} 
                       className="min-w-[300px] md:min-w-[340px] bg-[#e0f2f1] rounded-[2rem] overflow-hidden text-slate-900 snap-center group hover:shadow-2xl hover:shadow-[#075d63]/20 transition-all duration-500 relative"
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: idx * 0.1 }}
                    >
                       <div className="h-52 overflow-hidden relative">
                          <Image 
                             src={blog.img} 
                             alt={blog.title} 
                             fill
                             className="object-cover group-hover:scale-110 transition-transform duration-700"
                             referrerPolicy="no-referrer"
                          />
                          {/* Tech Overlay Effect */}
                          <div className="absolute inset-0 bg-[#075d63]/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Floating Tag */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#075d63] shadow-lg">
                             Strategy
                          </div>
                       </div>
                       
                       <div className="p-8 relative">
                          {/* Decorative Connector */}
                          <div className="absolute -top-6 right-8 w-12 h-12 bg-[#f2c537] rounded-full flex items-center justify-center shadow-lg border-4 border-[#e0f2f1] z-10 group-hover:scale-110 transition-transform">
                             <BookOpen size={20} className="text-black" />
                          </div>

                          <h3 className="font-extrabold text-xl mb-3 leading-tight group-hover:text-[#075d63] transition-colors line-clamp-2">
                             {blog.title}
                          </h3>
                          <p className="text-slate-600 text-sm mb-6 line-clamp-2 font-medium">
                             {blog.desc}
                          </p>
                          
                          <a href="#" className="inline-flex items-center gap-2 text-sm font-black text-slate-400 hover:text-[#075d63] uppercase tracking-wide group/link transition-colors">
                             Read more 
                             <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                          </a>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default YouMustRead;
