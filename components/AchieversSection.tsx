
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Play, Crown, X, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Achiever {
  id: number;
  name: string;
  image: string;
  videoId: string;
}

interface AchieversSectionProps {
  onNavigate?: (page: string) => void;
}

const AchieversSection: React.FC<AchieversSectionProps> = ({ onNavigate }) => {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const [playingCardKey, setPlayingCardKey] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      router.push(`/${page}`);
    }
  };

  const achievers: Achiever[] = [
    {
      id: 1,
      name: "Short 1",
      image: "https://img.youtube.com/vi/ZrmsiLyxumA/hqdefault.jpg",
      videoId: "ZrmsiLyxumA"
    },
    {
      id: 2,
      name: "Short 2",
      image: "https://img.youtube.com/vi/8VgAYyFJ2pw/hqdefault.jpg",
      videoId: "8VgAYyFJ2pw"
    },
    {
      id: 3,
      name: "Short 3",
      image: "https://img.youtube.com/vi/3rpUFtkOTWU/hqdefault.jpg",
      videoId: "3rpUFtkOTWU"
    },
    {
      id: 4,
      name: "Short 4",
      image: "https://img.youtube.com/vi/Etba1HTOBUI/hqdefault.jpg",
      videoId: "Etba1HTOBUI"
    },
    {
      id: 5,
      name: "Short 5",
      image: "https://img.youtube.com/vi/35F4plJjhFM/hqdefault.jpg",
      videoId: "35F4plJjhFM"
    },
    {
      id: 6,
      name: "Short 6",
      image: "https://img.youtube.com/vi/QZC0IzzoSS0/hqdefault.jpg",
      videoId: "QZC0IzzoSS0"
    },
    {
      id: 7,
      name: "Short 7",
      image: "https://img.youtube.com/vi/qzevZxEawpA/hqdefault.jpg",
      videoId: "qzevZxEawpA"
    },
    {
      id: 8,
      name: "Short 8",
      image: "https://img.youtube.com/vi/nLDQgHBYTc0/hqdefault.jpg",
      videoId: "nLDQgHBYTc0"
    },
    {
      id: 9,
      name: "Short 9",
      image: "https://img.youtube.com/vi/7RoM5q7nte4/hqdefault.jpg",
      videoId: "7RoM5q7nte4"
    },
    {
      id: 10,
      name: "Short 10",
      image: "https://img.youtube.com/vi/CjFRWUCyvSI/hqdefault.jpg",
      videoId: "CjFRWUCyvSI"
    },
    {
      id: 11,
      name: "Short 11",
      image: "https://img.youtube.com/vi/57n5RJ1qT08/hqdefault.jpg",
      videoId: "57n5RJ1qT08"
    },
    {
      id: 12,
      name: "Short 12",
      image: "https://img.youtube.com/vi/cHDgQ1_c9eg/hqdefault.jpg",
      videoId: "cHDgQ1_c9eg"
    },
    {
      id: 13,
      name: "Short 13",
      image: "https://img.youtube.com/vi/oICGmQUIivg/hqdefault.jpg",
      videoId: "oICGmQUIivg"
    }
  ];

  // Duplicate for seamless loop
  const extendedAchievers = [...achievers, ...achievers, ...achievers];

  return (
    <section className="py-10 lg:py-14 bg-[#09090b] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0f1115] to-[#09090b] pointer-events-none z-0"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f2c537]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                       <Crown size={14} className="text-[#f2c537] fill-[#f2c537]" />
                       <span className="text-[#f2c537] text-[10px] font-black tracking-[0.3em] uppercase">HALL OF FAME</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                        Spotlight on our <span className="text-[#075d63]">Results</span>
                    </h2>
                </div>
                
                <button 
                    onClick={() => handleNavigate('rankers')}
                    className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f2c537] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-500/10"
                >
                    View All Rankers 
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full -mx-6 md:mx-0">
                {/* Fade Gradients for Carousel */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none"></div>

                <div 
                  className="flex overflow-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div 
                        className="flex gap-4 pl-6"
                        animate={{
                            x: (isPaused || playingCardKey !== null) ? undefined : ["0%", "-33.33%"] 
                        }}
                        transition={{
                            x: {
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            }
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {extendedAchievers.map((student, i) => {
                            const cardKey = `${student.id}-${i}`;
                            const isPlaying = playingCardKey === cardKey;

                            return (
                                <div 
                                    key={cardKey}
                                    className={`relative w-[210px] h-[310px] rounded-[1.5rem] overflow-hidden flex-shrink-0 border ${isPlaying ? 'border-[#f2c537] ring-1 ring-[#f2c537]/50' : 'border-white/5 cursor-pointer'}`}
                                    onClick={() => !isPlaying && setPlayingCardKey(cardKey)}
                                >
                                    {isPlaying ? (
                                        <div className="w-full h-full relative bg-black overflow-hidden rounded-[1.5rem]">
                                            <iframe 
                                                src={`https://www.youtube.com/embed/${student.videoId}?autoplay=1&rel=0&controls=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&showinfo=0`} 
                                                title={student.name} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                                className="w-full h-full object-cover pointer-events-none"
                                            ></iframe>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPlayingCardKey(null);
                                                }}
                                                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-red-600 text-white rounded-full transition-colors z-30 backdrop-blur-sm border border-white/10 pointer-events-auto"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            {/* Clean and Raw Thumbnail Image - No hover grayscale/scale/transition */}
                                            <Image 
                                                src={student.image} 
                                                alt={student.name} 
                                                fill
                                                className="w-full h-full object-cover" 
                                                referrerPolicy="no-referrer"
                                            />
                                            
                                            {/* Static Play Button Icon Overlay in the Center */}
                                            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                                <div className="w-11 h-11 bg-[#f2c537] rounded-full flex items-center justify-center shadow-xl text-black">
                                                    <Play size={18} fill="currentColor" className="ml-0.5 text-black" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AchieversSection;
