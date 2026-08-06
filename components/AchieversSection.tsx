
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Play, Crown, X, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAchievers } from '@/hooks/useAchievers';

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
  const { videoShorts } = useAchievers();

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      router.push(`/${page}`);
    }
  };

  const achievers: Achiever[] = videoShorts.map(a => ({
    ...a,
    image: `https://i.ytimg.com/vi/${a.videoId}/maxresdefault.jpg`
  }));

  // Duplicate for seamless loop
  const extendedAchievers = [...achievers, ...achievers, ...achievers];

  return (
    <section className="py-10 lg:py-14 bg-[#09090b] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f2c537]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-2 gap-6">
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
                <div 
                  className="flex overflow-visible py-8"
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
                                    className={`relative w-[180px] aspect-[9/16] rounded-[1.5rem] overflow-hidden flex-shrink-0 border transition-all duration-300 ${isPlaying ? 'border-[#f2c537] ring-2 ring-[#f2c537] scale-110 z-30 shadow-2xl shadow-[#f2c537]/30' : 'border-white/5 cursor-pointer hover:border-white/20 hover:scale-[1.02]'}`}
                                    onClick={() => setPlayingCardKey(isPlaying ? null : cardKey)}
                                >
                                    {isPlaying ? (
                                        <div className="w-full h-full relative bg-black overflow-hidden rounded-[1.5rem]">
                                            <iframe 
                                                src={`https://www.youtube.com/embed/${student.videoId}?autoplay=1&rel=0&controls=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&showinfo=0`} 
                                                title={student.name} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                                className="w-full h-full pointer-events-auto"
                                            ></iframe>
                                            {/* Stop indicator on hover when playing */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/40 z-10 pointer-events-none">
                                                <div className="w-11 h-11 bg-[#f2c537] rounded-full flex items-center justify-center text-black shadow-xl">
                                                    <div className="flex gap-1">
                                                        <div className="w-1.5 h-4 bg-black rounded-full"></div>
                                                        <div className="w-1.5 h-4 bg-black rounded-full"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {/* Clean and Raw Thumbnail Image - Perfect fit with object-cover on 9:16 aspect ratio */}
                                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                                <Image 
                                                    src={student.image} 
                                                    alt={student.name} 
                                                    fill
                                                    className="w-full h-full object-cover transition-transform duration-500" 
                                                    referrerPolicy="no-referrer"
                                                    unoptimized
                                                />
                                            </div>
                                            
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
