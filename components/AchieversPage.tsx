
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, Star, Trophy, Video, MessageSquare, Sparkles, Crown, CheckCircle2, ArrowRight, X } from 'lucide-react';

interface AchieversPageProps {
  initialFilter?: 'all' | 'video' | 'story';
}

// Optimized: Moved static data outside component to prevent re-creation on every render
const ALL_STORIES = [
  { 
    type: 'video',
    id: 1,
    name: "Rahul Singh", 
    rank: "AIR 1", 
    exam: "GATE ME 2023", 
    img: "/ranker-lg-1.png", 
    video: "https://www.youtube.com/embed/D6HOo41x2Ls", // Standard video ID
    featured: true 
  },
  { 
    type: 'story',
    id: 2,
    name: "Siddharth Verma", 
    exam: "GATE ME", 
    quote: "The conceptual clarity I got from Gaurav Sir is unmatched. Every complex topic was broken down into simple, digestible parts.", 
    rating: 5,
    img: "/achiever-1.png"
  },
  {
    type: 'whatsapp',
    id: 10,
    img: "/whatsapp-result-1.png",
    caption: "Incredible results shared by our student on WhatsApp!"
  },
  { 
    type: 'video',
    id: 3,
    name: "Priya Sharma", 
    rank: "AIR 5", 
    exam: "ESE CE 2023", 
    img: "/ranker-lg-2.png", 
    video: "https://www.youtube.com/embed/gvK9V0trlaw" 
  },
  { 
    type: 'story',
    id: 4,
    name: "Ananya Das", 
    exam: "SSC-JE", 
    quote: "GAME Academy doesn't just teach you subjects; they teach you how to think like an engineer. Best decision of my life.", 
    rating: 5,
    img: "/achiever-2.png"
  },
  {
    type: 'whatsapp',
    id: 11,
    img: "/whatsapp-result-2.png",
    caption: "Late night doubt clearing sessions paying off!"
  },
  { 
    type: 'video',
    id: 5,
    name: "Amit Patel", 
    rank: "AIR 12", 
    exam: "SSC EE 2023", 
    img: "/ranker-rk-5.png", 
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    type: 'story',
    id: 6,
    name: "Rajesh Kumar", 
    exam: "ESE Civil", 
    quote: "The mentorship program kept me on track when I felt lost. It's not just a coaching center, it's a family.", 
    rating: 5,
    img: "/achiever-3.png"
  },
  {
    type: 'whatsapp',
    id: 12,
    img: "/whatsapp-result-3.png",
    caption: "Another success story from our WhatsApp community."
  },
  { 
    type: 'video',
    id: 7,
    name: "Neha Gupta", 
    rank: "AIR 3", 
    exam: "GATE CS 2023", 
    img: "/ranker-rk-6.png", 
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  { 
    type: 'story',
    id: 8,
    name: "Meera Iyer", 
    exam: "PSU (IOCL)", 
    quote: "I cleared IOCL interview in my first attempt thanks to the mock interview sessions. Highly recommended!", 
    rating: 5,
    img: "/achiever-4.png"
  },
  { 
    type: 'story',
    id: 9,
    name: "Kabir Singh", 
    exam: "RRB-JE", 
    quote: "Affordable, accessible, and high quality. The free resources in Knowledge Pitaara were a lifesaver.", 
    rating: 4,
    img: "/achiever-5.png"
  }
];

const HERO_STATS = [
  { val: "1000+", label: "PSU selections" },
  { val: "2,000+", label: "rank holders" },
  { val: "10,000+", label: "student community" },
  { val: "4.9/5", label: "student rating" },
];

const FILTER_TABS = [
  { id: 'all', label: 'All Stories', icon: Sparkles },
  { id: 'video', label: 'Ranker Talks', icon: Video },
  { id: 'story', label: 'Reviews', icon: MessageSquare },
  { id: 'whatsapp', label: 'WhatsApp Feedback', icon: CheckCircle2 }
];

// Optimized: Extracted Ranker Card into a memoized sub-component - TALLER VERSION
const RankerCard = React.memo(({ item, onPlay }: { item: any, onPlay?: () => void }) => (
  <div 
    onClick={onPlay}
    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/30 border border-slate-100 hover:shadow-xl hover:shadow-gameTeal/10 transition-all duration-300 cursor-pointer h-[260px] md:h-[300px]"
  >
    <div className="relative h-full overflow-hidden">
      <Image 
        src={item.img} 
        alt={item.name} 
        fill
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-70"></div>
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-gameGold text-black flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform">
          <Play size={20} className="ml-1 fill-current" />
        </div>
      </div>

      {/* Rank Badge */}
      <div className="absolute top-3 left-3">
        <div className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-lg flex items-center gap-1.5 border border-white/50">
          <Trophy size={10} className="text-gameGold fill-gameGold" /> {item.rank}
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full p-5 text-white">
      <div className="w-8 h-0.5 bg-gameGold rounded-full mb-2"></div>
      <h3 className="text-xl font-bold mb-0.5 leading-tight">{item.name}</h3>
      <p className="text-slate-300 text-[11px] font-medium uppercase tracking-wide flex items-center gap-1.5">
        <CheckCircle2 size={12} className="text-gameTeal" /> {item.exam}
      </p>
    </div>
  </div>
));

// Optimized: Extracted Testimonial Card into a memoized sub-component - TALLER DESIGN
const TestimonialCard = React.memo(({ item }: { item: any }) => (
  <div className="bg-white p-5 rounded-2xl shadow-md shadow-slate-200/30 border border-slate-100 relative group hover:border-gameTeal/30 transition-all duration-300 h-[260px] md:h-[300px] flex flex-col justify-center">
    <div className="absolute top-4 right-5 opacity-5 group-hover:opacity-10 transition-opacity">
      <Quote size={40} className="text-gameTeal" />
    </div>
    
    <div className="flex items-center gap-3 mb-4 relative z-10">
      <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-gameTeal to-teal-100 shadow-md relative overflow-hidden">
        <Image 
          src={item.img} 
          alt={item.name} 
          fill
          className="w-full h-full rounded-full object-cover border-2 border-white" 
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h4 className="font-black text-slate-900 text-base leading-tight">{item.name}</h4>
        <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.1em]">{item.exam}</span>
      </div>
    </div>

    <div className="flex gap-1 mb-4 text-gameGold">
      {[...Array(5)].map((_, idx) => (
        <Star key={idx} size={14} fill={idx < (item.rating || 0) ? "currentColor" : "none"} className={idx < (item.rating || 0) ? "" : "text-slate-200"} />
      ))}
    </div>

    <p className="text-slate-700 leading-relaxed text-sm font-medium relative z-10 italic">
      "{item.quote}"
    </p>
  </div>
));

// WhatsApp Screenshot Card - SIMPLIFIED FOR PHONE VIEW
const WhatsAppPhoneCard = React.memo(({ item }: { item: any }) => (
  <div className="mb-4 last:mb-0 relative w-full aspect-[2/3]">
    <Image 
      src={item.img} 
      alt="WhatsApp Screenshot" 
      fill
      className="w-full h-auto rounded-2xl shadow-sm object-contain" 
      referrerPolicy="no-referrer"
    />
  </div>
));

// Mobile Phone Frame Component
const MobilePhoneFrame = React.memo(({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.15)] overflow-hidden">
    {/* Notch/Dynamic Island */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center">
      <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
    </div>
    
    {/* WhatsApp Header Mock */}
    <div className="bg-[#075e54] pt-8 pb-3 px-4 flex items-center gap-3 z-20 relative">
      <div className="w-8 h-8 rounded-full bg-white/20"></div>
      <div className="flex-1">
        <div className="w-20 h-2 bg-white/40 rounded-full mb-1"></div>
        <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
      </div>
    </div>

    {/* Scrollable Content Area */}
    <div className="absolute inset-0 pt-24 pb-6 px-3 overflow-y-auto scrollbar-hide bg-[#e5ddd5]">
      {children}
    </div>
    
    {/* Bottom Bar */}
    <div className="absolute bottom-0 left-0 w-full h-12 bg-white border-t border-slate-100 z-20 flex items-center px-4 gap-2">
       <div className="flex-1 h-8 bg-slate-100 rounded-full"></div>
       <div className="w-8 h-8 rounded-full bg-[#128c7e] flex items-center justify-center text-white">
          <MessageSquare size={14} fill="currentColor" />
       </div>
    </div>
  </div>
));

// Optimized: Extracted CTA Section into a memoized sub-component - HEIGHT OPTIMIZED
const AchieversCTA = React.memo(() => (
  <section className="py-12 lg:py-16 bg-gameTealDark relative overflow-hidden">
     {/* Subtle background texture/pattern */}
     <div className="absolute inset-0 bg-slate-900/50 opacity-10 pointer-events-none"></div>
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
     
     <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
           <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Be the Next <span className="text-gameGold">Success Story</span>
           </h2>
           <p className="text-teal-50/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their careers with GAME Academy. Your journey to AIR 1 starts here.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-gameTealDark px-8 py-3.5 rounded-2xl font-black text-base shadow-2xl hover:bg-gameGold hover:text-[#050505] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                 EXPLORE COURSES 
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </motion.div>
     </div>
  </section>
));

interface AchieversPageProps {
  initialFilter?: 'all' | 'video' | 'story';
}

const AchieversPage: React.FC<AchieversPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useDraggableScroll = (loopCount: number = 3) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasMoved, setHasMoved] = useState(false);

    // Start in the middle for infinite loop effect
    useEffect(() => {
      if (ref.current) {
        const scrollWidth = ref.current.scrollWidth;
        ref.current.scrollLeft = scrollWidth / loopCount;
      }
    }, []);

    const onMouseDown = (e: React.MouseEvent) => {
      if (!ref.current) return;
      setIsDragging(true);
      setHasMoved(false);
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    };

    const onMouseUp = (e: React.MouseEvent) => {
      setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || !ref.current) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      
      if (Math.abs(x - startX) > 5) {
        setHasMoved(true);
      }
      
      ref.current.scrollLeft = scrollLeft - walk;

      // Infinite loop logic
      const scrollWidth = ref.current.scrollWidth;
      const clientWidth = ref.current.clientWidth;
      const singleSetWidth = scrollWidth / loopCount;

      if (ref.current.scrollLeft <= 0) {
        ref.current.scrollLeft = singleSetWidth;
      } else if (ref.current.scrollLeft >= scrollWidth - clientWidth) {
        ref.current.scrollLeft = singleSetWidth * (loopCount - 2);
      }
    };

    const handleItemClick = (callback: () => void) => {
      if (!hasMoved) {
        callback();
      }
    };

    return {
      events: {
        ref,
        onMouseDown,
        onMouseUp,
        onMouseLeave: onMouseUp,
        onMouseMove,
      },
      handleItemClick
    };
  };

  const videoSlider = useDraggableScroll();
  const textSlider = useDraggableScroll();

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const whatsappStories = ALL_STORIES.filter(s => s.type === 'whatsapp');
  const videoStories = ALL_STORIES.filter(s => s.type === 'video');
  const textStories = ALL_STORIES.filter(s => s.type === 'story');

  // Create looped arrays
  const loopedVideoStories = [...videoStories, ...videoStories, ...videoStories];
  const loopedTextStories = [...textStories, ...textStories, ...textStories];

  const handlePlayVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section: Premium Dark Theme - HEIGHT OPTIMIZED & VISIBILITY FIXED */}
      <section className="relative px-8 md:px-10 lg:px-12 pt-44 pb-10 lg:pt-52 lg:pb-14 overflow-hidden bg-[#0f1115] text-white">
         
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-slate-900/50 opacity-10"></div>

         <div className="max-w-[1200px] mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
                  <Crown size={12} className="text-gameGold fill-gameGold" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gameGold">Hall of Fame</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight leading-[0.9]">
                  Celebrating <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold underline decoration-white/20 decoration-8 underline-offset-8">Excellence</span>
               </h1>

               <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed mt-4 font-semibold">
                  Mentorship-driven learning for GATE, PSU, AE/JE, and ESE aspirants
               </p>

               {/* Stats Row */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-6">
                  {HERO_STATS.map((stat, i) => (
                     <div key={i} className="text-center">
                        <div className="text-2xl font-black text-white mb-0.5">{stat.val}</div>
                        <div className="text-[9px] font-bold text-gameGold uppercase tracking-wider">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Content Grid: 30/70 Split with Sliders - HEIGHT OPTIMIZED */}
      <section className="py-6 lg:py-8 px-8 md:px-10 lg:px-12 bg-slate-50 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
               
               {/* Column 1: Mobile Phone (25%) */}
               <div className="lg:w-[25%] flex flex-col items-center">
                  <div className="w-full max-w-[240px]">
                     <div className="text-center mb-4">
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">Real Conversations</h3>
                        <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">WhatsApp Feedback</p>
                     </div>
                     <MobilePhoneFrame>
                        {whatsappStories.map((item) => (
                           <WhatsAppPhoneCard key={item.id} item={item} />
                        ))}
                     </MobilePhoneFrame>
                  </div>
               </div>

               {/* Column 2: Sliders (75%) */}
               <div className="lg:w-[75%] overflow-hidden lg:h-[760px] flex flex-col justify-between py-1">
                  
                  <div className="mb-4 flex items-center justify-between px-2">
                     <div>
                        <h3 className="text-3xl font-black text-slate-900 leading-tight tracking-tight">Student Success Stories</h3>
                        <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Video & Written Testimonials</p>
                     </div>
                     <div className="hidden md:flex gap-2">
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                           <ArrowRight size={18} className="rotate-180" />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900">
                           <ArrowRight size={18} />
                        </div>
                     </div>
                  </div>

                  {/* Video Slider */}
                  <div className="w-full">
                     <div className="mb-2 px-2">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Ranker Talks</p>
                     </div>
                     
                     <div 
                        {...videoSlider.events}
                        className="flex gap-4 overflow-x-auto pb-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                     >
                        {loopedVideoStories.map((item, index) => (
                           <div key={`${item.id}-${index}`} className="min-w-[200px] md:min-w-[260px] snap-start">
                              <RankerCard 
                                item={item} 
                                onPlay={() => videoSlider.handleItemClick(() => handlePlayVideo(item.video))}
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Text Slider */}
                  <div className="w-full">
                     <div className="mb-2 px-2">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Written Feedback</p>
                     </div>
                     
                     <div 
                        {...textSlider.events}
                        className="flex gap-4 overflow-x-auto pb-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                     >
                        {loopedTextStories.map((item, index) => (
                           <div key={`${item.id}-${index}`} className="min-w-[240px] md:min-w-[340px] snap-start">
                              <TestimonialCard item={item} />
                           </div>
                        ))}
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </section>

      {/* 3. CTA Section */}
      <AchieversCTA />

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
              
              <iframe 
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AchieversPage;
