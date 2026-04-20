
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Trophy, User, ArrowRight, Crown, 
  Medal, Quote
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
}

// Optimized: Moved static data outside component to prevent re-creation on every render
const MOCK_RANKERS: Ranker[] = [
  {
    id: "1",
    name: "Abhishek Singh",
    designation: "AIR 1 - GATE 2024",
    category: "GATE",
    description: "The conceptual depth and visualization techniques provided by Gaurav Sir are unmatched. It made the toughest subjects feel like a game.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=600&q=80",
    feedbackUrl: "#",
    videoUrl: "https://youtube.com/watch?v=1"
  },
  {
    id: "2",
    name: "Sneha Reddy",
    designation: "AIR 15 - ESE 2023",
    category: "ESE",
    description: "ESE requires a different level of consistency. The structured roadmap at GAME Academy kept me focused through all three stages.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=600&q=80",
    feedbackUrl: "#"
  },
  {
    id: "3",
    name: "Vikram Malhotra",
    designation: "Selected - ONGC",
    category: "PSU",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=600&q=80",
    videoUrl: "https://youtube.com/watch?v=3"
  },
  {
    id: "4",
    name: "Ananya Das",
    designation: "Selected - SSC JE (CPWD)",
    category: "SSC-JE",
    description: "The Excellence Course for SSC JE is a complete package. The non-tech part was handled exceptionally well.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=600&q=80",
    feedbackUrl: "#",
    videoUrl: "https://youtube.com/watch?v=5"
  },
  {
    id: "5",
    name: "Rahul Verma",
    designation: "AIR 8 - GATE 2024",
    category: "GATE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=600&q=80",
    feedbackUrl: "#"
  },
  {
    id: "6",
    name: "Amit Patel",
    designation: "AIR 22 - ESE 2023",
    category: "ESE",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=600&q=80",
    videoUrl: "https://youtube.com/watch?v=6"
  }
];

const RankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group flex flex-col bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:border-gameTeal/20 transition-all duration-500 overflow-hidden h-full"
  >
    {/* Image Box - Shorter Aspect Ratio */}
    <div className="relative aspect-[1/1] overflow-hidden bg-slate-100 shrink-0">
      <Image 
          src={ranker.image} 
          alt={ranker.name} 
          fill
          className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
          referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
      
      {/* HUD Over Image */}
      <div className="absolute top-4 left-4 flex flex-col gap-1.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-gameGold shadow-2xl group-hover:rotate-12 transition-transform duration-500">
            <Medal size={16} />
          </div>
          <span className="px-2 py-0.5 rounded-md bg-gameTeal text-white text-[8px] font-black uppercase tracking-widest shadow-lg border border-white/10 w-fit">
            {ranker.category}
          </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 lg:p-5 text-white">
          <h3 className="text-xl lg:text-2xl font-black mb-0.5 leading-none tracking-tight group-hover:text-gameGold transition-colors">
            {ranker.name}
          </h3>
          <p className="text-slate-300 text-[8px] font-black uppercase tracking-[0.2em]">
            {ranker.designation}
          </p>
      </div>
    </div>

    {/* Content Body - Compact Padding */}
    <div className="p-4 lg:p-5 flex flex-col flex-grow relative z-10">
      {ranker.description && (
          <div className="mb-4 relative">
            <Quote size={20} className="absolute -top-2 -left-2 text-slate-100 opacity-50 pointer-events-none" />
            <p className="text-slate-500 text-[11px] lg:text-xs font-bold leading-relaxed italic relative z-10 pl-3 border-l-2 border-gameGold line-clamp-3">
                {ranker.description}
            </p>
          </div>
      )}
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

const MarqueeRow = ({ items, direction = 'left' }: { items: Ranker[], direction?: 'left' | 'right' }) => {
  // Triple the items to ensure a seamless loop even on large screens
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="relative flex overflow-hidden py-6">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="w-[300px] shrink-0">
            <RankerCard ranker={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const RankersPage: React.FC = () => {
  const [rankers, setRankers] = useState<Ranker[]>([]);
  const [loading, setLoading] = useState(true);

  // DATA FETCH: Fetching directly from the simulated sheet source
  useEffect(() => {
    const fetchRankersFromSheet = async () => {
      setLoading(true);
      try {
        // Simulating the fetch behavior with high-quality mock data representing the sheet
        await new Promise(resolve => setTimeout(resolve, 1000));
        setRankers(MOCK_RANKERS);
      } catch (error) {
        console.error("Error updating rankers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRankersFromSheet();
    window.scrollTo(0, 0);
  }, []);

  // Split rankers into two rows
  const row1 = useMemo(() => rankers.slice(0, Math.ceil(rankers.length / 2)), [rankers]);
  const row2 = useMemo(() => rankers.slice(Math.ceil(rankers.length / 2)), [rankers]);

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

      {/* SLIDING ROWS SECTION */}
      <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
         <div className="max-w-full mx-auto relative z-10">
            {loading ? (
               <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => <RankerSkeleton key={i} />)}
               </div>
            ) : rankers.length > 0 ? (
               <div className="space-y-8">
                  <MarqueeRow items={row1} direction="left" />
                  <MarqueeRow items={row2} direction="right" />
               </div>
            ) : (
               <div className="max-w-[1280px] mx-auto px-8">
                  <EmptyState onClear={() => {}} />
               </div>
            )}
         </div>
      </section>

      <RankersCTA />

    </div>
  );
};

export default RankersPage;
