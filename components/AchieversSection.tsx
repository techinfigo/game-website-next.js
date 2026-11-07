'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Crown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollRef = useRef<HTMLDivElement>(null);

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

  // Tripled for a seamless loop; we keep the scroll position in the middle set.
  const extendedAchievers = [...achievers, ...achievers, ...achievers];

  // Set the starting position to the middle set ONCE (so the user can scroll
  // both ways). Kept out of the animation effect so it never resets mid-scroll.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || achievers.length === 0) return;
    const t = el.scrollWidth / 3;
    if (t > 0) el.scrollLeft = t;
  }, [achievers.length]);

  // Auto-scroll with a seamless wrap. Does NOT reset the scroll position, so
  // the manual arrow buttons and swipe work without getting snapped back.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || achievers.length === 0) return;

    let raf = 0;
    const loop = () => {
      const node = scrollRef.current;
      if (node) {
        const t = node.scrollWidth / 3;
        if (!isPaused && playingCardKey === null) {
          node.scrollLeft += 0.6;
        }
        // Seamless wrap — runs always so manual scrolling past the ends loops too.
        if (t > 0) {
          if (node.scrollLeft >= t * 2) node.scrollLeft -= t;
          else if (node.scrollLeft <= 0) node.scrollLeft += t;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [isPaused, playingCardKey, achievers.length]);

  // Arrow buttons: pause briefly so the smooth scroll isn't fought by auto-scroll.
  const scrollByDir = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsPaused(true);
    el.scrollBy({ left: dir * 420, behavior: 'smooth' });
    window.setTimeout(() => setIsPaused(false), 700);
  };

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

                <div className="flex items-center gap-2">
                    {/* Manual scroll buttons */}
                    <button
                        onClick={() => scrollByDir(-1)}
                        aria-label="Scroll left"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#f2c537] hover:text-black transition-all shadow-xl backdrop-blur-sm group"
                    >
                        <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={() => scrollByDir(1)}
                        aria-label="Scroll right"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#f2c537] hover:text-black transition-all shadow-xl backdrop-blur-sm group"
                    >
                        <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={() => handleNavigate('rankers')}
                        className="group flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f2c537] text-black text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-500/10 ml-1"
                    >
                        View All Rankers
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Scrollable reel */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto no-scrollbar px-1 py-8 cursor-grab active:cursor-grabbing"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
            >
                {extendedAchievers.map((student, i) => {
                    const cardKey = `${student.id}-${i}`;
                    const isPlaying = playingCardKey === cardKey;

                    return (
                        <div
                            key={cardKey}
                            className={`relative w-[180px] aspect-[9/16] rounded-[1.5rem] overflow-hidden flex-shrink-0 border transition-all duration-300 ${isPlaying ? 'border-[#f2c537] ring-2 ring-[#f2c537] z-30 shadow-2xl shadow-[#f2c537]/30' : 'border-white/5 cursor-pointer hover:border-white/20 hover:scale-[1.02]'}`}
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
            </div>
        </div>
    </section>
  );
};

export default AchieversSection;
