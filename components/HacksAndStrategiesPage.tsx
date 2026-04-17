
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, X, ChevronRight, ChevronLeft, Lightbulb, Clock, Brain, Users, FileText, Globe, Heart, ArrowRight, Star, Target } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoId: string;
}

const HacksAndStrategiesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accordionItems = [
    {
      id: 0,
      title: "Smart Revision",
      desc: "Don't just re-read. Use Active Recall and Spaced Repetition to lock concepts in long-term memory.",
      icon: Brain,
    },
    {
      id: 1,
      title: "Time Management",
      desc: "Master the 3-hour exam window. Learn to skip tough questions and maximize easy marks first.",
      icon: Clock,
    },
    {
      id: 2,
      title: "Micro-Notes",
      desc: "Condense 100 pages into 1 sheet. The art of making crisp, high-yield revision notes.",
      icon: FileText,
    },
    {
      id: 3,
      title: "Exam Mindset",
      desc: "Conquer anxiety. Techniques to stay calm and focused during the most critical moments.",
      icon: Target,
    }
  ];

  const videos: Video[] = [
    {
      id: '1',
      title: "How to do Parallel Revision?",
      category: "Revision",
      videoId: "D6HOo41x2Ls",
      thumbnail: "https://img.youtube.com/vi/D6HOo41x2Ls/maxresdefault.jpg"
    },
    {
      id: '2',
      title: "Subject Wise Weightage in GATE Exam",
      category: "Exam Strategy",
      videoId: "1QV1hZ7c68Y",
      thumbnail: "https://img.youtube.com/vi/1QV1hZ7c68Y/maxresdefault.jpg"
    },
    {
      id: '3',
      title: "Crack GATE in 1st Attempt (Main Strategy)",
      category: "Motivation",
      videoId: "Vv9lARk4vcs",
      thumbnail: "https://img.youtube.com/vi/Vv9lARk4vcs/maxresdefault.jpg"
    },
    {
      id: '4',
      title: "How to Attempt GATE Exam?",
      category: "Exam Strategy",
      videoId: "bttDewEFDq4",
      thumbnail: "https://img.youtube.com/vi/bttDewEFDq4/maxresdefault.jpg"
    },
    {
      id: '5',
      title: "How to Avoid Silly Mistakes?",
      category: "Tips & Tricks",
      videoId: "Ta7gKIxxya0",
      thumbnail: "https://img.youtube.com/vi/Ta7gKIxxya0/maxresdefault.jpg"
    },
    {
      id: '6',
      title: "Prepare for Exams with a JOB",
      category: "Time Management",
      videoId: "gvK9V0trlaw",
      thumbnail: "https://img.youtube.com/vi/gvK9V0trlaw/maxresdefault.jpg"
    }
  ];

  const categories = ['All', ...Array.from(new Set(videos.map(v => v.category)))];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = activeCategory === 'All' || video.category === activeCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const strategies = [
    {
      icon: Lightbulb,
      title: "Simplify Complex Topics",
      points: [
        "Start with the basics to strengthen your foundation.",
        "Use real-world analogies and visual aids like flowcharts."
      ]
    },
    {
      icon: Clock,
      title: "Manage Your Time Effectively",
      points: [
        "Prioritize tasks and set a structured study schedule.",
        "Use tools like Trello or Google Calendar to stay organized."
      ]
    },
    {
      icon: Brain,
      title: "Master Problem-Solving",
      points: [
        "Clearly identify problems and break them into steps.",
        "Apply relevant theories and formulas systematically."
      ]
    },
    {
      icon: Users,
      title: "Study in Groups",
      points: [
        "Collaborate to exchange ideas and clarify concepts.",
        "Stay motivated and accountable with peers."
      ]
    },
    {
      icon: FileText,
      title: "Practice with Past Papers",
      points: [
        "Familiarize yourself with exam patterns and key topics.",
        "Solve papers under timed conditions to build confidence."
      ]
    },
    {
      icon: Globe,
      title: "Utilize Online Resources",
      points: [
        "Access video tutorials and interactive simulations.",
        "Engage with online communities for diverse insights."
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#075d63] selection:text-white">
      
      {/* 1. Hero Banner */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#075d63]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
         
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Left: Typography & Search */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-sm mb-8">
                     <div className="w-2 h-2 rounded-full bg-[#f2c537] animate-pulse"></div>
                     <span className="text-xs font-extrabold text-slate-600 uppercase tracking-widest">Mastery Series</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                     Master the Art of <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-500">
                        Engineering Exams
                     </span>
                  </h1>
                  
                  <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                     Success isn’t just about hard work, it’s about the right strategy. Explore proven hacks, time management tips, and revision techniques.
                  </p>

                  {/* Search Bar */}
                  <div className="relative max-w-md group">
                     <div className="relative bg-white border border-slate-200 rounded-2xl flex items-center p-2 shadow-xl shadow-[#075d63]/5 focus-within:border-[#075d63]/50 transition-all">
                        <Search className="text-slate-400 ml-3 shrink-0" size={20} />
                        <input 
                           type="text" 
                           placeholder="Search strategies..." 
                           className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 px-4 py-2.5 font-medium"
                           value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="bg-[#075d63] text-white p-2.5 rounded-xl hover:bg-[#043f42] transition-colors">
                           <ArrowRight size={20} />
                        </button>
                     </div>
                  </div>
               </motion.div>

               {/* Right: Vertical Accordion UI */}
               <div className="relative">
                  <div className="space-y-4">
                     {accordionItems.map((item, index) => (
                        <motion.div 
                           key={item.id}
                           className={`rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 shadow-lg ${
                              activeAccordion === index 
                              ? 'bg-white border-[#075d63]/30 shadow-[#075d63]/10 scale-105 ring-1 ring-[#075d63]/20' 
                              : `bg-white/80 border-transparent hover:bg-slate-50`
                           }`}
                           onClick={() => setActiveAccordion(index)}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: index * 0.1 }}
                        >
                           <div className="flex items-center gap-4 p-4">
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${activeAccordion === index ? 'bg-[#075d63] text-white' : 'bg-slate-100 text-slate-400'}`}>
                                 <item.icon size={24} />
                              </div>
                              <div className="flex-1">
                                 <h4 className={`font-bold text-lg ${activeAccordion === index ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {item.title}
                                 </h4>
                              </div>
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${activeAccordion === index ? 'rotate-90 bg-slate-100 text-slate-900' : 'text-slate-300'}`}>
                                 <ChevronRight size={18} />
                              </div>
                           </div>
                           
                           <AnimatePresence>
                              {activeAccordion === index && (
                                 <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                 >
                                    <div className="px-4 pb-5 pl-[4.5rem] text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-2 mt-2">
                                       {item.desc}
                                    </div>
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </motion.div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 py-20">
         
         {/* 2. Video Gallery */}
         <section className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
               <h2 className="text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#075d63]/10 rounded-xl flex items-center justify-center text-[#075d63]">
                    <Play size={20} fill="currentColor" /> 
                  </div>
                  Video Masterclass
               </h2>
               
               {/* Category Filter */}
               <div className="flex gap-2 overflow-x-auto pb-2 max-w-full custom-scrollbar">
                  {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                           activeCategory === cat 
                           ? 'bg-[#075d63] text-white shadow-lg shadow-[#075d63]/30' 
                           : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {filteredVideos.map((video) => (
                  <motion.div
                     key={video.id}
                     layout
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="group cursor-pointer"
                     onClick={() => setSelectedVideo(video)}
                  >
                     <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video mb-4 bg-slate-900">
                        <img 
                           src={video.thumbnail} 
                           alt={video.title} 
                           className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                           <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all">
                              <Play size={24} className="fill-[#075d63] text-[#075d63] ml-1" />
                           </div>
                        </div>
                     </div>
                     <h3 className="font-bold text-slate-900 leading-snug group-hover:text-[#075d63] transition-colors line-clamp-2 text-lg">
                        {video.title}
                     </h3>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* 3. Strategies Content */}
         <section className="relative">
            <div className="text-center mb-16">
               <span className="text-[#075d63] font-bold tracking-widest uppercase text-xs mb-3 block">The Roadmap</span>
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Key Strategies for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] to-teal-600">Engineering Success</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {strategies.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group hover:border-[#075d63]/20"
                  >
                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 text-[#075d63] group-hover:bg-[#075d63] group-hover:text-white transition-colors shadow-sm">
                        <item.icon size={28} />
                     </div>
                     
                     <h3 className="text-xl font-extrabold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                     
                     <ul className="space-y-3 relative z-10">
                        {item.points.map((point, idx) => (
                           <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed font-medium">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-[#f2c537]"></div>
                              {point}
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </div>
         </section>

         {/* 4. Final CTA */}
         <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-white rounded-[2.5rem] p-10 md:p-16 text-center border border-slate-200 shadow-2xl shadow-slate-200/60 relative overflow-hidden"
         >
            <div className="relative z-10 max-w-2xl mx-auto">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-6">
                  <Star size={14} className="text-[#f2c537] fill-[#f2c537]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Join The League</span>
               </div>
               
               <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">
                  Achieve Your Engineering Success with <span className="text-[#075d63]">GAME Academy</span>
               </h2>
               <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                  Ready to put these strategies into action? Our resources are designed to help you master these techniques and achieve your engineering goals.
               </p>
               <button className="bg-[#075d63] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#043f42] transition-all shadow-xl hover:shadow-[#075d63]/30 flex items-center justify-center gap-2 mx-auto group">
                  Start Your Journey Today <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
         </motion.div>

      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
         {selectedVideo && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
               onClick={() => setSelectedVideo(null)}
            >
               <div className="absolute top-6 right-6 z-10">
                  <button 
                     onClick={() => setSelectedVideo(null)}
                     className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                  >
                     <X size={24} />
                  </button>
               </div>
               <div className="w-full max-w-5xl" onClick={e => e.stopPropagation()}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10">
                     <iframe 
                        width="100%" 
                        height="100%" 
                        src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`} 
                        title={selectedVideo.title} 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                     ></iframe>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};

export default HacksAndStrategiesPage;
