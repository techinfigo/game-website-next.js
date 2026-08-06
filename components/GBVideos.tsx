
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Clock, Eye, Zap, X, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideos } from '@/hooks/useVideos';

const TAG_COLORS: Record<string, string> = {
  "GATE Strategy": "bg-red-50 text-red-600 border-red-100",
  "Basic Mechanics": "bg-amber-50 text-amber-600 border-amber-100",
  "Test Strategy": "bg-teal-50 text-teal-600 border-teal-100",
};
const DEFAULT_TAG_COLOR = "bg-slate-50 text-slate-600 border-slate-100";

const GBVideos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { videos } = useVideos();

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute inset-0 bg-slate-50/50"></div>
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#075d63]/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

       <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
             <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2c537]/10 border border-[#f2c537]/30 text-[#d8b32f] text-[10px] font-black uppercase tracking-widest mb-3">
                   <Sparkles size={12} fill="currentColor" /> Premium Insights
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                   Eye Opening <span className="text-[#075d63]">Sessions</span>
                </h2>
                <p className="text-slate-500 text-base mt-3 max-w-xl font-bold">
                  Elevate Your Engineering Journey: Master the Topper’s Blueprint with Expert Strategies, Mindset Mastery, and Precision Roadmaps by Gaurav Babu Sir.
                </p>
             </div>
             <button className="text-[#075d63] hover:text-[#043f42] font-black text-xs uppercase tracking-wider flex items-center gap-2 group transition-colors bg-slate-50 px-5 py-3 rounded-xl shadow-sm border border-slate-200 hover:border-[#075d63]/30 hover:shadow-md">
                View All Videos <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
             {videos.map((video, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer bg-slate-50 rounded-3xl p-3.5 shadow-lg shadow-slate-200/40 border border-slate-200 hover:border-[#075d63]/30 hover:shadow-xl hover:shadow-[#075d63]/5 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                  onClick={() => setSelectedVideo(video.videoId)}
                >
                   {/* Thumbnail Container */}
                   <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-white shadow-inner">
                      <Image 
                         src={video.thumbnail} 
                         alt={video.title} 
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-110" 
                         referrerPolicy="no-referrer"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Floating Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                         <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#075d63] shadow-2xl">
                            <Play size={24} className="ml-1 fill-current" />
                         </div>
                      </div>

                      {/* Tag */}
                      <div className={`absolute top-3 left-3 text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wide border shadow-sm ${TAG_COLORS[video.tag] ?? DEFAULT_TAG_COLOR}`}>
                         {video.tag}
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-black px-2 py-1 rounded-md flex items-center gap-1 shadow-md">
                         <Clock size={10} /> {video.duration}
                      </div>
                   </div>

                   {/* Content */}
                   <div className="px-1.5 pb-1.5 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">
                         <span className="flex items-center gap-1"><Eye size={10} /> {video.views}</span>
                         <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                         <span className="text-[#075d63]">Strategy</span>
                      </div>
                      
                      <h3 className="text-lg font-black text-slate-900 leading-tight mb-1.5 group-hover:text-[#075d63] transition-colors line-clamp-2">
                         {video.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 font-bold line-clamp-1 mb-4">
                         {video.subtitle}
                      </p>

                      <div className="mt-auto pt-3 border-t border-slate-200 flex items-center justify-between">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Watch Now</span>
                         <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#075d63] group-hover:text-white transition-colors border border-slate-200">
                            <Play size={12} fill="currentColor" />
                         </div>
                      </div>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>

       {/* Video Modal - Remains Dark for viewing experience */}
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
                   <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                      <X size={24} />
                   </button>
                </div>
                <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                   onClick={(e) => e.stopPropagation()}
                >
                   <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                </motion.div>
             </motion.div>
          )}
       </AnimatePresence>
    </section>
  );
};

export default GBVideos;
