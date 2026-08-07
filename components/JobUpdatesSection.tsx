
'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase, Building2, ArrowRight, Sparkles, ChevronRight,
  Radio, Zap, Clock, LayoutGrid, ChevronLeft, CalendarDays,
  Target, Award
} from 'lucide-react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useJobs } from '@/hooks/useJobs';
import { useSiteSettings } from '@/hooks/useSiteSettings';

interface JobUpdatesSectionProps {
  onNavigate?: (page: string) => void;
}

const JobUpdatesSection: React.FC<JobUpdatesSectionProps> = ({ onNavigate }) => {
  const settings = useSiteSettings();
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const { jobs } = useJobs();
  const recentJobs = jobs.slice(0, 6);

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      router.push(page.startsWith('/') ? page : `/${page}`);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-6 lg:py-8 bg-gameTealDark relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03] pointer-events-none invert"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/10 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-4 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 rounded-full text-gameGold text-[8px] font-black uppercase tracking-[0.2em] mb-3 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gameGold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gameGold"></span>
              </span>
              Live Job Hub
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white leading-[1.1] tracking-tighter mb-1">
              Latest Career <br/>
              <span className="text-gameGold">Opportunities</span>
            </h2>
            <p className="text-teal-50/70 text-xs md:text-sm font-bold leading-relaxed max-w-lg">
              Daily engineering job alerts from 200+ sources.
            </p>
          </motion.div>

          <div className="flex items-center gap-2 mb-1">
            <button 
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gameGold hover:text-black transition-all shadow-xl backdrop-blur-sm group"
            >
              <ChevronLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gameGold hover:text-black transition-all shadow-xl backdrop-blur-sm group"
            >
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 overflow-x-auto pb-4 pt-1 px-6 -mx-6 no-scrollbar scroll-smooth snap-x select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recentJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={(e) => {
                if (isDragging) {
                  e.preventDefault();
                  return;
                }
                handleNavigate('jobs#live-alerts');
              }}
              className="min-w-[220px] md:min-w-[240px] snap-center group relative bg-white p-3 rounded-[1.5rem] border border-white/80 transition-all duration-500 shadow-xl hover:-translate-y-2 flex flex-col cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-gameTeal group-hover:bg-gameTeal group-hover:text-white transition-all duration-500">
                  <Building2 size={16} />
                </div>
                {job.status === 'Open' && (
                  <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-gameGold/10 text-gameTealDark text-[7px] font-black uppercase tracking-widest border border-gameGold/20">
                    <Zap size={6} className="fill-gameGold" /> New
                  </span>
                )}
              </div>

              <div className="mb-2 flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[7px] font-black text-gameGoldDark uppercase tracking-wider">{job.eligibility}</span>
                </div>
                <h3 className="text-sm font-black text-slate-900 leading-tight group-hover:text-gameTeal transition-colors line-clamp-2">
                  {job.notification}
                </h3>
              </div>

              <div className="space-y-1 mb-2">
                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                   <LayoutGrid size={12} className="text-gameTeal" />
                   <span className="text-[9px] font-bold text-slate-800 truncate">{job.branches.join(', ')}</span>
                </div>

                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                   <CalendarDays size={12} className="text-gameGoldDark" />
                   <span className="text-[9px] font-black text-slate-900">{job.endDate}</span>
                </div>

                <div className="flex items-center gap-2 p-1.5 rounded-lg bg-teal-50/40 border border-teal-100/50">
                   <Clock size={12} className="text-gameTeal" />
                   <span className="text-[9px] font-black text-gameTealDark truncate">Starts: {job.startDate}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-gameTeal transition-all group/btn">
                   Details <ChevronRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </div>
                <div className="px-1.5 py-0.5 rounded-md bg-gameBlack text-white text-[6px] font-black uppercase tracking-widest group-hover:bg-gameTeal transition-colors">
                   {job.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-1 relative p-0.5 rounded-[2rem] bg-gradient-to-r from-gameGold/20 via-white/5 to-gameGold/20 overflow-hidden group"
        >
          <div className="bg-gameTealDark rounded-[1.9rem] p-3 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-4 relative z-10 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gameGold group-hover:scale-105 transition-transform duration-700">
                <Radio size={22} className="animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-0.5 tracking-tight">Stay Updated</h3>
                <p className="text-teal-50/60 text-[10px] md:text-xs font-bold max-w-md leading-relaxed">
                  Join 35k+ engineers for real-time alerts.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 relative z-10 w-full lg:w-auto">
              <a
                href={settings.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gameBlack px-6 py-2 rounded-lg font-black text-[8px] uppercase tracking-widest hover:bg-gameGold hover:text-black transition-all shadow-xl flex items-center gap-2 group/tg whitespace-nowrap active:scale-95"
              >
                Join Channel <ChevronRight size={12} className="group-hover/tg:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobUpdatesSection;
