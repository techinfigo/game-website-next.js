
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Trophy, Play, Crown, X, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Achiever {
  id: number;
  name: string;
  college?: string;
  selectionYear?: string;
  company?: string;
  designation?: string;
  organisation?: string;
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
      name: "Ashish Ranjan",
      college: "IIT Patna",
      selectionYear: "2025",
      image: "/achiever-1.png",
      videoId: "D6HOo41x2Ls"
    },
    {
      id: 2,
      name: "Khusro Sheikh",
      college: "IIT Patna",
      selectionYear: "2025",
      image: "/achiever-2.png",
      videoId: "gvK9V0trlaw"
    },
    {
      id: 3,
      name: "Prem Narwade",
      college: "IIT Palakkad",
      selectionYear: "2025",
      image: "/achiever-3.png",
      videoId: "Ta7gKIxxya0"
    },
    {
      id: 4,
      name: "Sujoy Das",
      company: "IOCL",
      designation: "Executive Trainee",
      image: "/achiever-4.png",
      videoId: "1QV1hZ7c68Y"
    },
    {
      id: 5,
      name: "Rajesh Sahu",
      organisation: "ISRO",
      designation: "Technical Assistant",
      image: "/achiever-5.png",
      videoId: "Vv9lARk4vcs"
    },
    {
      id: 6,
      name: "Kapil Sharma",
      organisation: "NLCIL",
      designation: "Executive Engineer",
      image: "/achiever-6.png",
      videoId: "bttDewEFDq4"
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
                                    className={`relative w-[220px] h-[300px] rounded-[1.5rem] overflow-hidden group flex-shrink-0 border transition-all duration-300 ${isPlaying ? 'border-[#f2c537] ring-1 ring-[#f2c537]/50' : 'border-white/5 hover:border-[#f2c537]/50 cursor-pointer'}`}
                                    onClick={() => !isPlaying && setPlayingCardKey(cardKey)}
                                >
                                    {isPlaying ? (
                                        <div className="w-full h-full relative bg-black">
                                            <iframe 
                                                width="100%" 
                                                height="100%" 
                                                src={`https://www.youtube.com/embed/${student.videoId}?autoplay=1&rel=0`} 
                                                title={student.name} 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                                className="w-full h-full"
                                            ></iframe>
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setPlayingCardKey(null);
                                                }}
                                                className="absolute top-3 right-3 p-1.5 bg-black/60 hover:bg-red-600 text-white rounded-full transition-colors z-10 backdrop-blur-sm"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            {/* Image */}
                                            <Image 
                                                src={student.image} 
                                                alt={student.name} 
                                                fill
                                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
                                                referrerPolicy="no-referrer"
                                            />
                                            
                                            {/* Dark Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50 opacity-90 group-hover:opacity-85 transition-opacity duration-300 z-10 pointer-events-none"></div>

                                            {/* Info Overlay at the Top of the Card */}
                                            <div className="absolute top-3.5 left-3.5 right-3.5 bg-black/75 backdrop-blur-md border border-white/10 px-3.5 py-3 rounded-2xl z-20 shadow-xl text-left transition-all duration-300 group-hover:border-[#f2c537]/30 group-hover:bg-black/85">
                                                <p className="text-[12px] font-black text-[#f2c537] uppercase tracking-wide leading-tight line-clamp-1">{student.name}</p>
                                                
                                                {student.college && (
                                                    <p className="text-[10px] font-bold text-white mt-1.5 leading-none">
                                                        College: <span className="font-medium text-slate-300">{student.college}</span>
                                                    </p>
                                                )}
                                                {student.company && (
                                                    <p className="text-[10px] font-bold text-white mt-1.5 leading-none">
                                                        Company: <span className="font-medium text-slate-300">{student.company}</span>
                                                    </p>
                                                )}
                                                {student.organisation && (
                                                    <p className="text-[10px] font-bold text-white mt-1.5 leading-none">
                                                        Org: <span className="font-medium text-slate-300">{student.organisation}</span>
                                                    </p>
                                                )}
                                                
                                                {student.designation && (
                                                    <p className="text-[9px] font-semibold text-slate-300 mt-1 leading-tight line-clamp-1 border-t border-white/5 pt-1.5 mt-1.5">
                                                        {student.designation}
                                                    </p>
                                                )}
                                                {student.selectionYear && (
                                                    <p className="text-[9px] font-semibold text-[#f2c537] mt-1 leading-none border-t border-white/5 pt-1.5 mt-1.5">
                                                        Year: <span className="text-white font-bold">{student.selectionYear}</span>
                                                    </p>
                                                )}
                                            </div>

                                            {/* Play Button Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 z-20">
                                                <div className="w-12 h-12 bg-[#f2c537] border border-white/20 rounded-full flex items-center justify-center shadow-lg text-black hover:scale-110 active:scale-95 transition-transform duration-250">
                                                    <Play size={20} fill="currentColor" className="ml-1 text-black" />
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
