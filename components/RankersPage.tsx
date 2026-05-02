
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  ArrowRight
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
const MOCK_RANKERS: Ranker[] = Array.from({ length: 30 }, (_, i) => ({
    id: `${i + 1}`,
    name: [
      "Abhishek Singh", "Akshay Pillay", "Sneha Reddy", "Vikram Malhotra", 
      "Priya Sharma", "Rahul Verma", "Ananya Iyer", "Karthik Raja",
      "Sowmya Rao", "Nitin Gadkari", "Arjun Mehra", "Ishita Dutta",
      "Manish Pandey", "Riya Sen", "Aditya Roy", "Kavya Nair",
      "Siddharth Malhotra", "Tara Sutaria", "Varun Dhawan", "Alia Bhatt",
      "Ranbir Kapoor", "Kareena Kapoor", "Saif Ali Khan", "Taimur Ali",
      "Shah Rukh Khan", "Salman Khan", "Aamir Khan", "Hrithik Roshan",
      "Pankaj Tripathi", "Nawazuddin Siddiqui"
    ][i] || `Ranker ${i + 1}`,
    designation: [
      "AIR 1 - GATE 2024", "AIR 51 - UPSC CSE 2021", "AIR 15 - ESE 2023", "Selected - ONGC",
      "AIR 12 - BARC", "AIR 8 - GATE ME", "AIR 4 - ISRO", "AIR 22 - ESE EE",
      "AIR 5 - GATE CE", "AIR 11 - HPCL", "AIR 3 - DRDO", "AIR 45 - GATE CS",
      "AIR 2 - ESE ME", "AIR 18 - GAIL", "AIR 33 - NPCIL", "AIR 7 - GATE IN",
      "AIR 9 - BEL", "AIR 27 - ESE CE", "AIR 14 - GATE CH", "AIR 31 - SAIL",
      "AIR 6 - GATE AE", "AIR 19 - ESE IN", "AIR 25 - PSU ME", "AIR 4 - GATE XE",
      "AIR 1 - ESE EE", "AIR 10 - ISRO ME", "AIR 22 - GATE MT", "AIR 40 - BARC",
      "AIR 3 - ESE CE", "AIR 15 - GATE PI"
    ][i] || `Ranker Designation ${i + 1}`,
    category: ["GATE", "UPSC", "ESE", "PSU", "BARC", "ISRO", "DRDO"][i % 7],
    description: "The conceptual depth and visualization techniques provided by Gaurav Sir are unmatched.",
    image: `/rankers/ranker-${i + 1}.jpg`,
}));

const MOCK_JOB_RANKERS: Ranker[] = [
  {
    id: "j1",
    name: "Akshay Pillay",
    organisation: "Government of India",
    designation: "Sub Collector and Sub Divisional Magistrate",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "UPSC/IAS",
    image: "/rankers/job-1.jpg"
  },
  {
    id: "j2",
    name: "Dr. Sahil Garg",
    organisation: "Ministry of Defence, Indian Navy",
    designation: "Assistant Professor Indian Navy (Group A Gazetted)",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "MOD",
    image: "/rankers/job-2.jpg"
  },
  {
    id: "j3",
    name: "Akash Jaiswal",
    organisation: "ISRO, Bengaluru",
    designation: "Scientist -SC",
    branch: "Production & Industrial Engineering",
    selectionYear: "2021",
    category: "ISRO",
    image: "/rankers/job-3.jpg"
  },
  {
    id: "j4",
    name: "Deepbhai Haresh Kumar Dave",
    organisation: "ISRO, NLC",
    designation: "Scientist/Engineer 'SC' Mechanical",
    branch: "Mechanical Engineering",
    selectionYear: "2023",
    category: "ISRO",
    image: "/rankers/job-4.jpg"
  },
  {
    id: "j5",
    name: "Dileep Kumar Chaudhary",
    organisation: "Bhabha Atomic Research Centre",
    designation: "Scientific Officer OCES",
    branch: "Mechanical Engineering",
    selectionYear: "2020",
    category: "BARC",
    image: "/rankers/job-5.jpg"
  },
  {
    id: "j6",
    name: "Govind Kumar",
    organisation: "Bharat Electronics Limited",
    designation: "Deputy Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-6.jpg"
  },
  {
    id: "j7",
    name: "Chirag Goyal",
    organisation: "Indian Oil Corporation Ltd (IOCL)",
    designation: "Aviation Officer",
    branch: "Mechanical Engineering",
    selectionYear: "2023",
    category: "PSU",
    image: "/rankers/job-7.jpg"
  },
  {
    id: "j8",
    name: "Anant Kumar Gautam",
    organisation: "IOCL",
    designation: "Executive officer",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-8.jpg"
  },
  {
    id: "j9",
    name: "Swati Mishra",
    organisation: "Hindustan Zinc Limited",
    designation: "Assistant Manager",
    branch: "Civil Engineering",
    selectionYear: "2020",
    category: "JOB",
    image: "/rankers/job-9.jpg"
  },
  {
    id: "j10",
    name: "Prashant Mishra",
    organisation: "GAIL (India) Limited",
    designation: "Senior Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "PSU",
    image: "/rankers/job-10.jpg"
  },
  {
    id: "j11",
    name: "Suarabh Chaubey",
    organisation: "NALCO",
    designation: "Patent Examiner",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-11.jpg"
  },
  {
    id: "j12",
    name: "Rahul Singh Yadav",
    organisation: "NTPC",
    designation: "Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "PSU",
    image: "/rankers/job-12.jpg"
  },
  {
    id: "j13",
    name: "Kamna Pandey",
    organisation: "NTPC Limited",
    designation: "Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2021",
    category: "PSU",
    image: "/rankers/job-13.jpg"
  },
  {
    id: "j14",
    name: "Aasif Procha",
    organisation: "PSPCL",
    designation: "Assistant Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "JOB",
    image: "/rankers/job-14.jpg"
  },
  {
    id: "j15",
    name: "Pooja H",
    organisation: "Water Resources Department",
    designation: "Assistant Engineer",
    branch: "Civil Engineering",
    selectionYear: "2022",
    category: "ESE",
    image: "/rankers/job-15.jpg"
  },
  {
    id: "j16",
    name: "Bhavya Malviya",
    organisation: "NTPC Kahalgaon",
    designation: "Assistant Executive Operations",
    branch: "Mechanical Engineering",
    selectionYear: "2019/2024",
    category: "PSU",
    image: "/rankers/job-16.jpg"
  },
  {
    id: "j17",
    name: "Rajat Rai",
    organisation: "ONGC",
    designation: "Asst. Exe. Engineer",
    branch: "Production Engineering",
    selectionYear: "2017",
    category: "PSU",
    image: "/rankers/job-17.jpg"
  },
  {
    id: "j18",
    name: "Garima",
    organisation: "Bharat Dynamics Limited",
    designation: "Executive Trainee",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-18.jpg"
  },
  {
    id: "j19",
    name: "Anjali",
    organisation: "NPCIL",
    designation: "Executive Trainee",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "BARC",
    image: "/rankers/job-19.jpg"
  },
  {
    id: "j20",
    name: "Sujoy Das",
    organisation: "IOCL",
    designation: "Executive Trainee | AIR 535 ME",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-20.jpg"
  }
];

const RankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group relative flex flex-col bg-[#050505] rounded-[1.2rem] transition-all duration-500 overflow-hidden h-[260px] w-full border border-white/5 shadow-2xl hover:shadow-gameTeal/10"
  >
    {/* Full Card Image Background */}
    <Image 
        src={ranker.image} 
        alt={ranker.name} 
        fill
        unoptimized
        className="object-cover transition-transform duration-1000 opacity-80 group-hover:opacity-100 group-hover:scale-110" 
        referrerPolicy="no-referrer"
    />
    
    {/* Gradient Overlay Adjusted for smaller height */}
    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent transition-colors duration-500"></div>
    
    {/* Category Badge - More compact */}
    <div className="absolute top-3 left-3 z-10">
        <span className="px-2 py-0.5 rounded-md bg-gameGold text-black text-[7px] font-black uppercase tracking-widest shadow-lg">
          {ranker.category}
        </span>
    </div>

    {/* Integrated Info Block - Tighter spacing */}
    <div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col text-left">
      <div className="space-y-1">
        <h3 className="text-[15px] font-black text-white leading-tight transition-colors line-clamp-1 group-hover:text-gameGold">
          {ranker.name}
        </h3>
        
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="flex items-center gap-1 bg-gameTeal/40 px-1.5 py-0.5 rounded border border-gameTeal/50 backdrop-blur-sm">
            <span className="text-white font-black text-[8px] uppercase tracking-wider">
              {ranker.designation.split(' - ')[0]}
            </span>
          </div>
          <span className="text-white/40 text-[9px]">|</span>
          <span className="text-gameGold font-bold text-[8px] uppercase tracking-wide italic line-clamp-1">
             {ranker.designation.split(' - ')[1] || ranker.category}
          </span>
        </div>
      </div>
      
      {/* Verified Excellence Indicator - Minimalist */}
      <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
         <span className="text-[6px] font-black text-gameTeal uppercase tracking-[0.2em]">Verified Excellence</span>
         <div className="h-1 w-1 rounded-full bg-gameTeal"></div>
      </div>
    </div>
  </div>
));

const JobRankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group relative flex flex-col bg-[#050505] rounded-[1.2rem] transition-all duration-500 overflow-hidden h-[260px] w-full border border-white/5"
  >
    {/* Top Image Section - Increased height to 65% for better visibility */}
    <div className="relative h-[65%] w-full overflow-hidden">
      <Image 
          src={ranker.image} 
          alt={ranker.name} 
          fill
          unoptimized
          className="object-cover transition-transform duration-1000 opacity-90 group-hover:opacity-100 group-hover:scale-110" 
          referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
      
      {/* Category HUD - More compact */}
      <div className="absolute top-3 left-3">
          <div className="px-2 py-0.5 rounded-md bg-gameGold text-[#050505] text-[7px] font-black uppercase tracking-widest border border-white/10 shadow-lg">
            {ranker.category}
          </div>
      </div>
    </div>

    {/* Identity & Stats Section - Concise & Aligned */}
    <div className="flex-grow p-3 bg-[#050505] flex flex-col text-left justify-start -mt-3 relative z-10">
      <div className="mb-2">
        <h3 className="text-[15px] font-black text-gameGold leading-tight transition-colors line-clamp-1">
          {ranker.name}
        </h3>
        <div className="flex items-center gap-1.5 opacity-80 mt-0.5">
          <p className="text-gameTeal font-bold text-[9px] uppercase tracking-wide line-clamp-1">
            {ranker.organisation}
          </p>
        </div>
      </div>

      <div className="space-y-1.5 pt-2 border-t border-white/10">
        <div className="flex items-center gap-2">
          <p className="text-[9px] font-medium text-white italic truncate">{ranker.designation}</p>
        </div>
        
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <p className="text-[9px] font-bold text-slate-300 uppercase truncate">{ranker.branch}</p>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 bg-white/5 px-1.5 py-0.5 rounded">
            <p className="text-[9px] font-black text-gameGold">{ranker.selectionYear}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
));

const EmptyState = React.memo(({ onClear }: { onClear: () => void }) => (
  <div className="col-span-full py-40 flex flex-col items-center justify-center text-center px-6">
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

const MarqueeRow = ({ items, direction = 'left', cardType = 'ranker', speed = 60 }: { items: Ranker[], direction?: 'left' | 'right', cardType?: 'ranker' | 'job', speed?: number }) => {
  const [isPaused, setIsPaused] = useState(false);
  
  if (!items || items.length === 0) return null;
  
  // Multiply items to ensure a seamless loop - 8x to handle any screen width
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
  
  return (
    <div 
      className="relative flex overflow-hidden py-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex gap-4 w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? 'paused' : 'running'
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div key={`${item.id}-${idx}`} className="w-[220px] shrink-0">
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
  const [hasMounted, setHasMounted] = useState(false);

  // DATA FETCH: Fetching directly from the simulated sheet source
  useEffect(() => {
    setHasMounted(true);
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

  // Performance guard: Don't render complex interactive content until mounted
  if (!hasMounted) {
    return <div className="min-h-screen bg-[#0f1115]" />;
  }

  // Updated slicing to match user specific counts (10 in row 1, 20 in row 2 for rankers; 10+10 for jobs)
  const row1 = rankers.slice(0, 10) || [];
  const row2 = rankers.slice(10, 30) || [];
  
  const row3 = jobRankers.slice(0, 10) || [];
  const row4 = jobRankers.slice(10, 20) || [];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* PREMIUM HERO SECTION - HEIGHT OPTIMIZED & VISIBILITY FIXED */}
      <section id="banner" className="relative pt-44 pb-14 lg:pt-56 lg:pb-20 overflow-hidden bg-[#0f1115] text-white">
         
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4">
                  <span className="text-[9px] font-black text-gameGold uppercase tracking-[0.3em]">Success Records</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tighter leading-[0.9]">
                  THE HALL OF <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold underline decoration-white/20 decoration-8 underline-offset-8">EXCELLENCE</span>
               </h1>
               
               <p className="text-base md:text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed mt-4">
                  Celebrating the brilliance and hard work of students who mastered the engineering GAME.
               </p>
            </motion.div>
         </div>
      </section>

      {/* SECTION 1: Toppers Showcase / Featured Rankers - Detailed Profiles */}
      <section className="py-8 lg:py-10 bg-gameTealDark relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 mb-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 tracking-tight">
               Gaurav Sir&apos;s Students in Reputed Jobs Website
            </h2>
         </div>

         <div className="max-w-full mx-auto relative z-10">
            {loading ? (
               <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[...Array(4)].map((_, i) => <RankerSkeleton key={i} />)}
               </div>
            ) : jobRankers.length > 0 ? (
               <div className="space-y-4">
                  <MarqueeRow items={row3} direction="left" speed={120} cardType="job" />
                  <MarqueeRow items={row4} direction="right" speed={120} cardType="job" />
               </div>
            ) : null}
         </div>
      </section>

      {/* SECTION 2: Results Carousel / Slider - Wide Array of Success */}
      <section className="py-8 lg:py-10 bg-slate-200 relative overflow-hidden border-b border-slate-300">
         <div className="max-w-[1280px] mx-auto px-8 mb-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gameTeal mb-2 tracking-tight">
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
                  <MarqueeRow items={row1} direction="left" speed={100} />
                  <MarqueeRow items={row2} direction="right" speed={100} />
               </div>
            ) : (
               <div className="max-w-[1280px] mx-auto px-8 text-center pt-10">
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
