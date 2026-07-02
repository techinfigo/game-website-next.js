'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, X, PhoneCall, Loader2, Check, Star, Smartphone, Play, Eye, ChevronLeft, ChevronRight, Youtube, ExternalLink } from 'lucide-react';

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452H16.892V14.881C16.892 13.553 16.865 11.845 15.039 11.845C13.187 11.845 12.903 13.291 12.903 14.787V20.452H9.349V9H12.76V10.564H12.808C13.283 9.664 14.444 8.714 16.175 8.714C19.778 8.714 20.447 11.085 20.447 14.168V20.452ZM5.337 7.433C4.197 7.433 3.274 6.509 3.274 5.37C3.274 4.23 4.197 3.307 5.337 3.307C6.477 3.307 7.4 4.23 7.4 5.37C7.4 6.509 6.477 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.201 24 24 23.227 24 22.271V1.729C24 0.774 23.201 0 22.225 0Z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface CourseHeroProps {
  isSection?: boolean;
}

const CourseHero: React.FC<CourseHeroProps> = ({ isSection = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [callbackModal, setCallbackModal] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [youtubeMenuOpen, setYoutubeMenuOpen] = useState(false);
  
  // Community Links Data - Including WhatsApp
  const communityLinks = [
    {
      id: 'telegram',
      name: 'Telegram',
      sub: 'Quizzes',
      icon: TelegramIcon,
      hoverClass: 'hover:bg-[#229ED9] hover:border-[#229ED9]',
      iconColor: 'text-[#229ED9]',
      bgColor: 'bg-[#229ED9]/10',
      link: 'https://t.me/gamebygauravbabu'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      sub: 'Community',
      icon: WhatsAppIcon,
      hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366]',
      iconColor: 'text-[#25D366]',
      bgColor: 'bg-[#25D366]/10',
      link: 'https://whatsapp.com/channel/0029VaWNuqVJpe8gdAkinR1T'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      sub: 'Lectures',
      icon: YouTubeIcon,
      hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000]',
      iconColor: 'text-[#FF0000]',
      bgColor: 'bg-[#FF0000]/10',
      link: 'youtube-menu'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      sub: 'Jobs',
      icon: LinkedInIcon,
      hoverClass: 'hover:bg-[#0077b5] hover:border-[#0077b5]',
      iconColor: 'text-[#0077b5]',
      bgColor: 'bg-[#0077b5]/10',
      link: 'https://www.linkedin.com/company/gameacademyindia/'
    }
  ];

  // Video Stack Data
  const videos = [
    {
      id: 1,
      title: "Complete Fluid Mechanics",
      views: "1.5M+",
      duration: "40+ Lectures",
      thumbnail: "https://img.youtube.com/vi/bttDewEFDq4/maxresdefault.jpg",
      videoId: "PLzpAOaJe3cEibAI-LLEUja3q34NaQdMgb",
      tag: "Playlist"
    },
    {
      id: 2,
      title: "Strength of Materials",
      views: "1.2M+",
      duration: "50+ Lectures",
      thumbnail: "https://img.youtube.com/vi/1QV1hZ7c68Y/maxresdefault.jpg",
      videoId: "PL4z8h611VJ3CFbklGo60rhejqprcMHTSx",
      tag: "Playlist"
    },
    {
      id: 3,
      title: "Crack GATE in First Attempt",
      views: "250k+",
      duration: "45:20",
      thumbnail: "https://img.youtube.com/vi/Vv9lARk4vcs/maxresdefault.jpg",
      videoId: "Vv9lARk4vcs",
      tag: "Strategy"
    }
  ];

  // Slide Data Configuration
  const slides = [
    {
      id: 1,
      badge: "Premium Learning",
      title: <>Upskill Continuously <br/> with <span className="text-gameGold">Masterclasses</span></>,
      description: "Stay ahead with Gaurav Babu Sir&apos;s expert-led courses. Learn practical skills, master core concepts, and grow with a thriving community.",
      bgGradient: "from-[#0b8a91] to-[#075d63]",
      type: "masterclass"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(nextSlide, 6000);
      return () => clearInterval(timer);
    }
  }, [slides.length]);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
        setFormStatus('success');
        setTimeout(() => {
            setCallbackModal(false);
            setFormStatus('idle');
        }, 2000);
    }, 1500);
  };

  return (
    <section className={`relative ${isSection ? 'py-8' : 'pt-10 pb-8'} overflow-hidden bg-[#075d63] min-h-[440px] flex flex-col justify-center`}>
      
      {/* Dynamic Backgrounds */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
           <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${slides[currentSlide].bgGradient}`}></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
        </motion.div>
      </AnimatePresence>
      
      {/* Request Call Back Sticky Button */}
      <div className="absolute top-6 right-8 z-40">
         <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setCallbackModal(true)}
            className="group flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] shadow-lg hover:bg-[#f2c537] hover:text-black hover:border-[#f2c537] transition-all"
         >
            <div className="relative">
               <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
               <div className="relative w-2 h-2 rounded-full bg-green-400 group-hover:bg-black"></div>
            </div>
            Request Call Back
         </motion.button>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full">
        
        {/* Slides Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
               
               {/* Left Content */}
               <div className="text-center lg:text-left pt-0">
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-2 mx-auto lg:mx-0">
                      <Sparkles size={12} className="text-gameGold" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gameGold">{slides[currentSlide].badge}</span>
                   </div>

                   <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-2">
                      {slides[currentSlide].title}
                   </h1>
                   
                   <p className="text-teal-100 text-sm md:text-base mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      {slides[currentSlide].description}
                   </p>

                   {/* Slide Specific Content: Masterclass */}
                   {slides[currentSlide].type === 'masterclass' && (
                     <>
                        {/* JOIN COMMUNITY HEADER */}
                        <div className="flex items-center gap-4 mb-3 max-w-lg mx-auto lg:mx-0">
                           <div className="h-px bg-white/20 flex-1 lg:hidden"></div>
                           <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">JOIN OUR COMMUNITY</span>
                           <div className="h-px bg-white/20 flex-1"></div>
                        </div>
 
                        {/* Community Section - Now supports 4 icons */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-4 relative">
                           {communityLinks.map((link, i) => {
                              const isYoutube = link.id === 'youtube';
                              
                              return (
                                <div key={link.id} className="relative">
                                  <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    onClick={() => isYoutube ? setYoutubeMenuOpen(!youtubeMenuOpen) : window.open(link.link, '_blank')}
                                    className={`w-20 h-20 flex flex-col items-center justify-center text-center gap-1.5 bg-white border border-transparent rounded-2xl p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group shadow-lg ${link.hoverClass} ${isYoutube && youtubeMenuOpen ? 'ring-2 ring-[#FF0000]' : ''}`}
                                  >
                                    <div className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors duration-300 ${link.bgColor} ${link.iconColor} group-hover:bg-white`}>
                                        <link.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-[10px] leading-none mb-0.5 group-hover:text-white transition-colors">{link.name}</h4>
                                        <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wide group-hover:text-white/90 transition-colors">{link.sub}</p>
                                    </div>
                                  </motion.div>

                                  {/* YouTube Selection Menu */}
                                  {isYoutube && (
                                    <AnimatePresence>
                                      {youtubeMenuOpen && (
                                        <motion.div
                                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                          animate={{ opacity: 1, scale: 1, y: 0 }}
                                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                          className="absolute bottom-full left-0 mb-3 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 p-2"
                                        >
                                          <div className="p-3 border-b border-slate-50 bg-slate-50/50 flex justify-between items-center">
                                            <span className="text-[10px] font-black text-[#FF0000] uppercase tracking-widest">Select Channel</span>
                                            <button onClick={(e) => { e.stopPropagation(); setYoutubeMenuOpen(false); }} className="text-slate-400 hover:text-slate-600 transition-colors">
                                              <X size={14} />
                                            </button>
                                          </div>
                                          <div className="flex flex-col gap-1 mt-1">
                                            <a 
                                              href="https://www.youtube.com/@gblions" 
                                              target="_blank" 
                                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 group/chan transition-all border border-slate-100 hover:border-slate-100"
                                            >
                                              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600 group-hover/chan:bg-red-600 group-hover/chan:text-white transition-colors">
                                                <Youtube size={16} />
                                              </div>
                                              <div className="text-left">
                                                <div className="text-xs font-black text-slate-800">GATE Academy</div>
                                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Full Lectures & Concepts</div>
                                              </div>
                                              <ExternalLink size={12} className="ml-auto text-slate-300" />
                                            </a>
                                            <a 
                                              href="https://www.youtube.com/@gblionsaeje" 
                                              target="_blank" 
                                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 group/chan transition-all border border-transparent hover:border-slate-100"
                                            >
                                              <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 group-hover/chan:bg-orange-600 group-hover/chan:text-white transition-colors">
                                                <Sparkles size={16} />
                                              </div>
                                              <div className="text-left">
                                                <div className="text-xs font-black text-slate-800">SSC JE & AE</div>
                                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">Exam Updates & Tips</div>
                                              </div>
                                              <ExternalLink size={12} className="ml-auto text-slate-300" />
                                            </a>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  )}
                                </div>
                              );
                           })}
                        </div>

                        {/* App Download Strip */}
                        <div className="border-t border-white/10 pt-4 max-w-lg mx-auto lg:mx-0">
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                               <a 
                                 href="https://clppenny.page.link/cTBm" 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="flex-1 flex items-center gap-3 group/app cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-all border border-transparent hover:border-white/10"
                               >
                                  <div className="w-10 h-10 bg-gameGold rounded-xl flex items-center justify-center text-black shadow-lg group-hover/app:scale-110 transition-transform duration-300">
                                     <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-127.3 60.1-60.1L104.6 499z" />
                                     </svg>
                                  </div>
                                  <div className="text-left">
                                     <div className="text-white font-bold text-sm group-hover/app:text-gameGold transition-colors">Android App</div>
                                     <div className="text-[10px] text-teal-200">Get it on Play Store</div>
                                  </div>
                               </a>
                               <div className="hidden sm:block h-6 w-px bg-white/10"></div>
                               <a 
                                 href="https://apps.apple.com/in/app/myinstitute/id1472483563" 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="flex-1 flex items-center gap-3 group/app cursor-pointer hover:bg-white/5 p-3 rounded-2xl transition-all border border-transparent hover:border-white/10 relative"
                               >
                                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black shadow-lg group-hover/app:scale-110 transition-transform duration-300">
                                     <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-73.7-114.8-31.7-131.8zM232.1 56.9c20.7-25.2 34.2-59.8 30.3-94.5-29.9 1.2-66.1 20.3-87.5 45.3-19.2 22.3-35.9 57.7-31.4 91.4 33.1 2.6 67.9-18.9 88.6-42.2z" />
                                     </svg>
                                  </div>
                                  <div className="text-left">
                                     <div className="text-white font-bold text-sm group-hover/app:text-gameGold transition-colors">iOS App</div>
                                     <div className="text-[10px] text-teal-200">Download on App Store</div>
                                  </div>
                               </a>
                            </div>
                            <div className="mt-4 flex items-center justify-center lg:justify-start gap-4">
                               <div className="flex items-center gap-1 text-gameGold text-sm font-bold bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 shadow-sm">
                                  <Star size={14} fill="currentColor" /> 4.8 Rating
                               </div>
                               <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Trusted by 50k+ Students</div>
                            </div>
                        </div>
                     </>
                   )}
               </div>

               <div className="hidden lg:flex items-center justify-center relative w-full h-[280px] perspective-1000">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#043f42] blur-[100px] rounded-full opacity-60 pointer-events-none"></div>

                  {slides[currentSlide].type === 'masterclass' && (
                     videos.map((video, idx) => {
                        const yOffset = (idx - 1) * 70;
                        const xOffset = (idx - 1) * 45;
                        const rotation = (idx - 1) * 5;

                        return (
                           <motion.div
                              key={video.id}
                              className="absolute w-80 bg-white rounded-3xl p-3 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] cursor-pointer border border-white/10 transition-shadow"
                              style={{
                                  left: 'calc(50% - 10rem)',
                                  top: 'calc(50% - 7.5rem)',
                              }}
                              initial={{ opacity: 0, x: 100, y: 0 }}
                              animate={{ 
                                  opacity: 1, 
                                  x: xOffset,
                                  y: [yOffset, yOffset - 15, yOffset], 
                                  rotate: rotation,
                                  zIndex: idx + 10,
                              }}
                              transition={{ 
                                  opacity: { duration: 0.5, delay: 0.4 + idx * 0.1 },
                                  x: { duration: 0.5, delay: 0.4 + idx * 0.1 },
                                  rotate: { duration: 0.5, delay: 0.4 + idx * 0.1 },
                                  y: {
                                      duration: 4,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: idx * 1.5 
                                  }
                              }}
                              whileHover={{ 
                                  scale: 1.05, 
                                  zIndex: 50,
                                  rotate: 0,
                                  y: yOffset - 20,
                                  transition: { duration: 0.2 }
                              }}
                              onClick={() => setSelectedVideo(video.videoId)}
                           >
                               <div className="relative aspect-video rounded-2xl overflow-hidden mb-3 shadow-sm bg-slate-100">
                                 <Image 
                                   src={video.thumbnail} 
                                   alt={video.title} 
                                   fill
                                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                   referrerPolicy="no-referrer"
                                 />
                                 <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                    {video.duration}
                                 </div>
                              </div>

                              <div className="px-1">
                                 <div className="flex items-center justify-between mb-2">
                                    <span className={`text-[10px] font-black px-2 py-1 rounded text-white uppercase tracking-wider ${
                                       idx === 0 ? 'bg-[#f2c537] text-black' : idx === 1 ? 'bg-gameTeal' : 'bg-rose-50'
                                    }`}>
                                       {video.tag}
                                    </span>
                                    <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold">
                                       <Eye size={12} /> {video.views}
                                    </div>
                                 </div>
                                 
                                 <h3 className="text-base font-black text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-gameTeal transition-colors">
                                    {video.title}
                                 </h3>
                              </div>
                           </motion.div>
                        );
                     })
                  )}
               </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        {slides.length > 1 && (
           <>
              <div className="absolute inset-y-0 left-4 flex items-center z-20">
                <button 
                   onClick={prevSlide}
                   className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all translate-y-1"
                >
                   <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute inset-y-0 right-4 flex items-center z-20">
                <button 
                   onClick={nextSlide}
                   className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all translate-y-1"
                >
                   <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="flex justify-center gap-2 mt-6 absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                 {slides.map((_, idx) => (
                    <button
                       key={idx}
                       onClick={() => setCurrentSlide(idx)}
                       className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-gameGold' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                    />
                 ))}
              </div>
           </>
        )}

      </div>

      {/* Callback Modal */}
      <AnimatePresence>
        {callbackModal && (
           <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setCallbackModal(false)}
           >
              <motion.div 
                 initial={{ scale: 0.9, opacity: 0, y: 20 }}
                 animate={{ scale: 1, opacity: 1, y: 0 }}
                 exit={{ scale: 0.9, opacity: 0, y: 20 }}
                 className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative"
                 onClick={e => e.stopPropagation()}
              >
                 <div className="bg-[#075d63] p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                       <h3 className="text-2xl font-black text-white mb-1">Request a Call Back</h3>
                       <p className="text-teal-100 text-sm">Our academic counselors will reach out to you shortly.</p>
                    </div>
                    <button 
                       onClick={() => setCallbackModal(false)}
                       className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-20"
                    >
                       <X size={20} />
                    </button>
                 </div>

                 {formStatus === 'success' ? (
                    <div className="p-10 flex flex-col items-center text-center">
                       <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_infinite]">
                          <Check size={40} strokeWidth={3} />
                       </div>
                       <h4 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h4>
                       <p className="text-slate-500 text-sm">
                          Sit back and relax. We will call you within 24 hours.
                       </p>
                    </div>
                 ) : (
                    <form onSubmit={handleCallbackSubmit} className="p-8 space-y-5">
                       <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                          <input 
                             type="text" 
                             required 
                             placeholder="Enter your name" 
                             className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#075d63] focus:ring-1 focus:ring-[#075d63] transition-all font-medium"
                          />
                       </div>
                       <div className="space-y-1.5">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                          <div className="relative">
                             <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">+91</span>
                             <input 
                                type="tel" 
                                required 
                                placeholder="98765 43210" 
                                pattern="[0-9]{10}"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pl-12 text-slate-900 focus:outline-none focus:border-[#075d63] focus:ring-1 focus:ring-[#075d63] transition-all font-medium"
                             />
                          </div>
                       </div>
                       <button 
                          type="submit" 
                          disabled={formStatus === 'submitting'}
                          className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 mt-4 transition-all ${
                             formStatus === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-[#075d63] hover:bg-[#054a4f] hover:-translate-y-1'
                          }`}
                       >
                          {formStatus === 'submitting' ? (
                             <><Loader2 size={20} className="animate-spin" /> Submitting...</>
                          ) : (
                             <>Get a Call Back <PhoneCall size={18} /></>
                          )}
                       </button>
                    </form>
                 )}
              </motion.div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
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
                      src={selectedVideo?.startsWith('PL') 
                        ? `https://www.youtube.com/embed?listType=playlist&list=${selectedVideo}&autoplay=1` 
                        : `https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
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

export default CourseHero;
