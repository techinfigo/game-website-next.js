
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Trophy, User, ArrowRight, Crown, 
  Medal, Quote, Building2, Briefcase, 
  GraduationCap, Calendar
} from 'lucide-react';

// Single source of truth interface based on the Rankers sheet
interface Ranker {
  id: string;
  name: string;          // Mapping: NAME
  designation: string;   // Mapping: Designation
  category: string;      // Mapping: Category (GATE, ESE, etc)
  description?: string;  // Mapping: Student Quote/Feedback
  image: string;         // Mapping: Marketing Image URL
  feedbackUrl?: string;  // Mapping: Feedback URL
  videoUrl?: string;     // Mapping: Podcast/Video URL
  organisation?: string; // For Reputed Jobs section
  branch?: string;       // For Reputed Jobs section
  selectionYear?: string; // For Reputed Jobs section
}

// Optimized: Moved static data outside component to prevent re-creation on every render
const MOCK_RANKERS: Ranker[] = [
  {
    id: "1",
    name: "Abhishek Singh",
    designation: "AIR 1 - GATE 2024",
    category: "GATE",
    description: "The conceptual depth and visualization techniques provided by Gaurav Sir are unmatched.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=600&q=80",
  },
  {
    id: "2",
    name: "Akshay Pillay",
    designation: "AIR 51 - UPSC CSE 2021",
    category: "UPSC",
    description: "The structured roadmap at GAME Academy kept me focused through all stages of CSE.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=600&q=80",
  },
  {
    id: "3",
    name: "Sneha Reddy",
    designation: "AIR 15 - ESE 2023",
    category: "ESE",
    description: "ESE requires consistency. Mentorship here is exceptional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=600&q=80",
  },
  {
    id: "4",
    name: "Vikram Malhotra",
    designation: "Selected - ONGC",
    category: "PSU",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&q=80",
  }
];

const MOCK_JOB_RANKERS: Ranker[] = [
  {
    id: "j1",
    name: "Akshay Pillay",
    organisation: "Government of India",
    designation: "Sub Collector and Sub Divisional Magistrate",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "UPSC/IAS",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=600&q=80"
  },
  {
    id: "j2",
    name: "Meera Krishnan",
    organisation: "Indian Railways",
    designation: "Assistant Divisional Engineer",
    branch: "Civil Engineering",
    selectionYear: "2023",
    category: "ESE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fit=crop&w=600&q=80"
  },
  {
    id: "j3",
    name: "Sandeep Rao",
    organisation: "ISRO",
    designation: "Scientist 'SC'",
    branch: "Mechanical Engineering",
    selectionYear: "2021",
    category: "ISRO",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=600&q=80"
  },
  {
    id: "j4",
    name: "Rohan Gupta",
    organisation: "IOCL",
    designation: "Operations Manager",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "PSU/GATE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=600&q=80"
  }
];

const RankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group relative flex flex-col bg-[#050505] rounded-[2rem] transition-all duration-500 overflow-hidden h-[380px] w-full border border-white/5 shadow-2xl hover:shadow-gameTeal/10"
  >
    {/* Full Card Image Background */}
    <Image 
        src={ranker.image} 
        alt={ranker.name} 
        fill
        className="object-cover transition-transform duration-1000 opacity-80 group-hover:opacity-100 group-hover:scale-110" 
        referrerPolicy="no-referrer"
    />
    
    {/* Black-to-Transparent Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent group-hover:from-[#050505] group-hover:via-[#050505]/70 transition-colors duration-500"></div>
    
    {/* Category Badge - Gold accented */}
    <div className="absolute top-4 left-4 z-10">
        <span className="px-2 py-0.5 rounded-md bg-gameGold text-black text-[7px] font-black uppercase tracking-widest shadow-lg">
          {ranker.category}
        </span>
    </div>

    {/* Integrated Info Block - Dark Theme */}
    <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col text-left">
      <div className="space-y-1">
        <h3 className="text-base font-black text-white leading-tight transition-colors line-clamp-1 group-hover:text-gameGold">
          {ranker.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gameTeal/40 px-1.5 py-0.5 rounded border border-gameTeal/50 backdrop-blur-sm">
            <Trophy size={9} className="text-gameGold fill-gameGold/20" />
            <span className="text-white font-black text-[8px] uppercase tracking-wider">
              {ranker.designation.split(' - ')[0]}
            </span>
          </div>
          <span className="text-white/20 text-[9px]">|</span>
          <span className="text-gameGold font-bold text-[8px] uppercase tracking-wide italic line-clamp-1">
             {ranker.designation.split(' - ')[1] || ranker.category}
          </span>
        </div>
      </div>
      
      {/* Verified Excellence Indicator */}
      <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
         <span className="text-[6px] font-black text-gameTeal uppercase tracking-[0.2em]">Verified Excellence</span>
         <div className="h-1 w-1 rounded-full bg-gameTeal animate-pulse"></div>
      </div>
    </div>
  </div>
));

const JobRankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group relative flex flex-col bg-[#050505] rounded-[2rem] transition-all duration-500 overflow-hidden h-[380px] w-full border border-white/5"
  >
    {/* Top Image Section - Increased visibility */}
    <div className="relative h-[52%] w-full overflow-hidden">
      <Image 
          src={ranker.image} 
          alt={ranker.name} 
          fill
          className="object-cover transition-transform duration-1000 opacity-90 group-hover:opacity-100 group-hover:scale-110" 
          referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      
      {/* Category HUD */}
      <div className="absolute top-3 left-3">
          <div className="px-2 py-0.5 rounded-full bg-gameGold text-[#050505] text-[7px] font-black uppercase tracking-[0.2em] border border-white/10">
            {ranker.category}
          </div>
      </div>
    </div>

    {/* Identity & Stats Section - Grouped at bottom */}
    <div className="flex-grow p-4 bg-[#050505] flex flex-col text-left justify-end">
      <div className="mb-2">
        <h3 className="text-xl font-black text-gameGold leading-tight mb-0.5 transition-colors">
          {ranker.name}
        </h3>
        <div className="flex items-center gap-1.5 opacity-90">
          <Building2 size={11} className="text-gameTeal" />
          <p className="text-gameTeal font-black text-[9px] uppercase tracking-[0.1em]">
            {ranker.organisation}
          </p>
        </div>
      </div>

      <div className="space-y-2.5 pt-3 border-t border-white/10">
        <div className="flex items-center gap-3">
          <Briefcase size={12} className="text-slate-500 shrink-0" />
          <div className="flex flex-col">
            <p className="text-[7px] uppercase font-black text-slate-500 tracking-[0.1em]">Designation</p>
            <p className="text-[10px] font-bold text-white italic leading-tight">{ranker.designation}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <GraduationCap size={12} className="text-slate-500 shrink-0" />
          <div className="flex flex-col">
            <p className="text-[7px] uppercase font-black text-slate-500 tracking-[0.1em]">Branch</p>
            <p className="text-[10px] font-black text-gameGold uppercase tracking-tight">{ranker.branch}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Calendar size={12} className="text-slate-500 shrink-0" />
          <div className="flex flex-col">
            <p className="text-[7px] uppercase font-black text-slate-500 tracking-[0.1em]">Selection Year</p>
            <p className="text-[10px] font-black text-slate-300">{ranker.selectionYear}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const EmptyState = React.memo(({ onClear }: { onClear: () => void }) => (
  <div className="col-span-full py-40 flex flex-col items-center justify-center text-center px-6">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }}
      className="w-32 h-32 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 mb-10 shadow-inner"
    >
      <User size={60} strokeWidth={1.5} />
    </motion.div>
    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">
      Rankers will be updated soon.
    </h3>
    <p className="text-slate-500 font-bold max-w-md mx-auto text-lg leading-relaxed">
      We are currently verifying the latest result sheet from GATE, ESE and other technical examinations.
    </p>
    <button 
      onClick={onClear}
      className="mt-10 px-8 py-3 rounded-xl bg-gameTeal text-white font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl"
    >
      Clear Selection
    </button>
  </div>
));

const RankersCTA = React.memo(() => (
  <section className="py-20 lg:py-24 bg-gameTeal relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#0b8a91,_transparent)] opacity-40"></div>
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
    
    <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center text-white">
      <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
      >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
            YOUR NAME COULD BE <br/>
            <span className="text-gameGold">ON THIS WALL</span>
          </h2>
          
          <p className="text-teal-50 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
            Join India's most trusted mentorship platform. Experience the visualized learning protocol that creates AIR 1s.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gameTeal px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-gameGold hover:text-black transition-all shadow-2xl hover:-translate-y-2 flex items-center justify-center gap-3 group">
                START YOUR JOURNEY <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                EXPLORE COURSES
            </button>
          </div>
      </motion.div>
    </div>
  </section>
));

const RankerSkeleton = () => (
  <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden h-full flex flex-col animate-pulse">
    <div className="aspect-[4/5] bg-slate-200" />
    <div className="p-8 space-y-4">
      <div className="h-7 bg-slate-200 rounded-full w-3/4" />
      <div className="h-4 bg-slate-100 rounded-full w-1/2" />
      <div className="space-y-2 pt-4">
        <div className="h-3 bg-slate-50 rounded-full w-full" />
        <div className="h-3 bg-slate-50 rounded-full w-5/6" />
      </div>
      <div className="mt-auto pt-8 flex gap-3">
        <div className="h-12 bg-slate-100 rounded-2xl flex-1" />
        <div className="h-12 bg-slate-100 rounded-2xl flex-1" />
      </div>
    </div>
  </div>
);

const MarqueeRow = ({ items, direction = 'left', cardType = 'ranker' }: { items: Ranker[], direction?: 'left' | 'right', cardType?: 'ranker' | 'job' }) => {
  // Multiply items to ensure a seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <div 
      className="relative flex overflow-hidden py-4 pause-on-hover pause-on-touch"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="w-[300px] shrink-0 h-full">
            {cardType === 'ranker' ? <RankerCard ranker={item} /> : <JobRankerCard ranker={item} />}
          </div>
        ))}
      </div>
    </div>
  );
};

const RankersPage: React.FC = () => {
  const [rankers, setRankers] = useState<Ranker[]>([]);
  const [jobRankers, setJobRankers] = useState<Ranker[]>([]);
  const [loading, setLoading] = useState(true);

  // DATA FETCH: Fetching directly from the simulated sheet source
  useEffect(() => {
    const fetchRankersFromSheet = async () => {
      setLoading(true);
      try {
        // Simulating the fetch behavior with high-quality mock data representing the sheet
        await new Promise(resolve => setTimeout(resolve, 1000));
        setRankers(MOCK_RANKERS);
        setJobRankers(MOCK_JOB_RANKERS);
      } catch (error) {
        console.error("Error updating rankers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankersFromSheet();
    window.scrollTo(0, 0);
  }, []);

  // Split rankers into groups for 4 rows total (2 sections x 2 rows)
  const row1 = rankers.slice(0, Math.ceil(rankers.length / 2)) || [];
  const row2 = rankers.slice(Math.ceil(rankers.length / 2)) || [];
  
  const row3 = jobRankers.slice(0, Math.ceil(jobRankers.length / 2)) || [];
  const row4 = jobRankers.slice(Math.ceil(jobRankers.length / 2)) || [];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* PREMIUM HERO SECTION - OPTIMIZED DARK THEME */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#0f1115] text-white">
         
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gameGold shadow-sm">
                    <Trophy size={16} className="fill-gameGold" />
                  </div>
                  <span className="text-[10px] font-black text-gameGold uppercase tracking-[0.3em]">Success Records</span>
               </div>

               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
                  THE HALL OF <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold underline decoration-white/20 decoration-8 underline-offset-8">EXCELLENCE</span>
               </h1>
               
               <p className="text-lg md:text-2xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed mt-8">
                  Celebrating the brilliance and hard work of students who mastered the engineering GAME.
               </p>

               <div className="flex justify-center items-center gap-4 mt-12">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                  <div className="flex -space-x-3">
                     {[1,2,3,4,5].map(i => (
                        <div key={i} className="relative w-12 h-12 rounded-full border-4 border-[#0f1115] bg-slate-800 overflow-hidden shadow-2xl">
                           <Image 
                                  src={`https://i.pravatar.cc/150?img=${i + 15}`} 
                                  alt="Achiever" 
                                  fill
                                  className="object-cover" 
                                  referrerPolicy="no-referrer"
                               />
                        </div>
                      ))}
                  </div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20 rounded-full"></div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* SECTION 1: Spotlight on our Rankers */}
      <section className="py-12 lg:py-16 bg-slate-200 relative overflow-hidden border-b border-slate-100">
         <div className="max-w-[1280px] mx-auto px-8 mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gameTeal">
               Spotlight on our Rankers
            </h2>
         </div>

         <div className="max-w-full mx-auto relative z-10">
            {loading ? (
               <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => <RankerSkeleton key={i} />)}
               </div>
            ) : rankers.length > 0 ? (
               <div className="space-y-4">
                  <MarqueeRow items={row1} direction="left" />
                  <MarqueeRow items={row2} direction="right" />
               </div>
            ) : (
               <div className="max-w-[1280px] mx-auto px-8 text-center pt-10">
                  <EmptyState onClear={() => {}} />
               </div>
            )}
         </div>
      </section>

      {/* SECTION 2: Gaurav Sir's Students in Reputed Jobs Website */}
      <section className="py-12 lg:py-16 bg-gameTealDark relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 mb-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white">
               Gaurav Sir's Students in Reputed Jobs Website
            </h2>
         </div>

         <div className="max-w-full mx-auto relative z-10">
            {loading ? (
               <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => <RankerSkeleton key={i} />)}
               </div>
            ) : jobRankers.length > 0 ? (
               <div className="space-y-4">
                  <MarqueeRow items={row3} direction="left" cardType="job" />
                  <MarqueeRow items={row4} direction="right" cardType="job" />
               </div>
            ) : null}
         </div>
      </section>

      <RankersCTA />

    </div>
  );
};

export default RankersPage;
