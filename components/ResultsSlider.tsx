
'use client';

import React, { useState } from 'react';
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
      name: "Vikram Malhotra",
      rank: "AIR 8 GATE",
      exam: "ME 2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 2,
      name: "Arjun Reddy",
      rank: "AIR 2 ESE",
      exam: "CE 2023",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 3,
      name: "Aditi Rao",
      rank: "AIR 15 ESE",
      exam: "CE 2023",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 4,
      name: "Rahul Singh",
      rank: "AIR 1 GATE",
      exam: "ME 2023",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 5,
      name: "Priya Sharma",
      rank: "AIR 5 ESE",
      exam: "CE 2023",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 6,
      name: "Amit Patel",
      rank: "AIR 12 SSC",
      exam: "EE 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 7,
      name: "Neha Gupta",
      rank: "AIR 3 GATE",
      exam: "CS 2023",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=600&h=800&q=80",
    },
    {
      id: 8,
      name: "Karan Johar",
      rank: "AIR 19 GATE",
      exam: "ME 2023",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?fit=crop&w=600&h=800&q=80",
    }
  ];

  // Duplicate for seamless loop (3 sets)
  const extendedAchievers = [...achievers, ...achievers, ...achievers];

  return (
    <section className="py-16 bg-[#09090b] relative overflow-hidden">
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
                        Spotlight on our <span className="text-[#075d63]">Results</span>
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
                                <img 
                                    src={student.image} 
                                    alt={student.name} 
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
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
