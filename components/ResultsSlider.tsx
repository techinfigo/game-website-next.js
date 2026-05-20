
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Trophy, Play, Pause, Crown } from 'lucide-react';

interface Achiever {
  id: number;
  name: string;
  rank: string;
  exam: string;
  image: string;
  videoUrl?: string;
}

const ResultsSlider: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const achievers: Achiever[] = [
    {
      id: 1,
      name: "Devansh Bajpai",
      rank: "AIR 13",
      exam: "GATE ME",
      image: "https://img.youtube.com/vi/QZC0IzzoSS0/hqdefault.jpg",
    },
    {
      id: 2,
      name: "Rohan Kulkarni",
      rank: "AIR 4",
      exam: "GATE ME",
      image: "https://img.youtube.com/vi/qzevZxEawpA/hqdefault.jpg",
    },
    {
      id: 3,
      name: "Siddhesh Gaikwad",
      rank: "AIR 2",
      exam: "GATE ME",
      image: "https://img.youtube.com/vi/nLDQgHBYTc0/hqdefault.jpg",
    },
    {
      id: 4,
      name: "Harsh Vardhan",
      rank: "AIR 26",
      exam: "GATE ME",
      image: "https://img.youtube.com/vi/7RoM5q7nte4/hqdefault.jpg",
    },
    {
      id: 5,
      name: "Praveen Kumar",
      rank: "AIR 1",
      exam: "GATE ME",
      image: "https://img.youtube.com/vi/CjFRWUCyvSI/hqdefault.jpg",
    },
    {
      id: 6,
      name: "Vikram Rathore",
      rank: "AIR 8",
      exam: "GATE ME",
      image: "https://img.youtube.com/vi/35F4plJjhFM/hqdefault.jpg",
    }
  ];

  // Duplicate for seamless loop (3 sets)
  const extendedAchievers = [...achievers, ...achievers, ...achievers];

  return (
    <section id="rankers" className="py-16 bg-[#09090b] relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#0f1115] to-[#09090b] pointer-events-none z-0"></div>
        
        <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <div className="text-[#f2c537] text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                       <span className="text-xs">HALL OF FAME</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                        Spotlight on our <span className="text-[#075d63]">Rankers</span>
                    </h2>
                </div>
                
                <button 
                    onClick={() => setIsPaused(!isPaused)}
                    className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:border-white/20"
                >
                    {isPaused ? <Play size={12} fill="currentColor" /> : <Pause size={12} fill="currentColor" />}
                    {isPaused ? "Resume" : "Pause"}
                </button>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full -mx-6 md:mx-0">
                {/* Fade Gradients for Carousel */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none"></div>

                <div 
                  className="flex overflow-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div 
                        className="flex gap-6 pl-6"
                        animate={{
                            x: isPaused ? undefined : ["0%", "-33.33%"] // Moving 1/3 of the total width
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
                        {extendedAchievers.map((student, i) => (
                            <div 
                                key={`${student.id}-${i}`}
                                className="relative w-[220px] h-[320px] rounded-3xl overflow-hidden cursor-pointer group flex-shrink-0 border border-white/5 hover:border-[#f2c537]/50 transition-all duration-300"
                            >
                                {/* Image */}
                                <Image 
                                    src={student.image} 
                                    alt={student.name} 
                                    fill
                                    className="object-cover transition-all duration-500 scale-100 group-hover:scale-110" 
                                    referrerPolicy="no-referrer"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                                {/* Rank Badge */}
                                <div className="absolute bottom-16 left-4 z-20">
                                   <div className="bg-[#f2c537] text-black text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1 shadow-lg">
                                      <Crown size={10} fill="currentColor" /> {student.rank}
                                   </div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 pt-8 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="text-lg font-bold text-white leading-tight mb-0.5">{student.name}</h3>
                                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                       {student.exam}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ResultsSlider;
