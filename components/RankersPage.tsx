
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  college?: string;      // For custom student college/institution
}

// Optimized: Moved static data outside component to prevent re-creation on every render
const MOCK_RANKERS: Ranker[] = [
  {
    id: "1",
    name: "Anurag Tripathi",
    college: "IIT Roper",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-1.png"
  },
  {
    id: "2",
    name: "Jyoti Verma",
    college: "IIT Roorkee",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-2.png"
  },
  {
    id: "3",
    name: "Pankaj Kushwaha",
    college: "IIT ISM Dhanbaad",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-3.png"
  },
  {
    id: "4",
    name: "Tejas",
    college: "IIT Hyderabad",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-4.png"
  },
  {
    id: "5",
    name: "Kapil Sharma",
    college: "IIT Guwahati",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-5.png"
  },
  {
    id: "6",
    name: "Harshit Kumar Gupta",
    college: "IIT Delhi",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-6.png"
  },
  {
    id: "7",
    name: "Nikhil",
    college: "IIT Guwahati",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-7.png"
  },
  {
    id: "8",
    name: "Rahul",
    organisation: "IIT Kharagpur",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-8.png"
  },
  {
    id: "9",
    name: "Sumit",
    college: "IIT Hyderabad",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2024",
    image: "/rankers/ranker-9.png"
  },
  {
    id: "10",
    name: "Kamal Kishor Bharadwaj",
    college: "IIT Delhi",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-10.png"
  },
  {
    id: "11",
    name: "Pragya Sharma",
    college: "IISc Bengaluru",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-11.png"
  },
  {
    id: "12",
    name: "Ashish Ranjan",
    college: "IIT Patna",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-12.png"
  },
  {
    id: "13",
    name: "Manish Madhwal",
    college: "IIT Roorkee",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-13.png"
  },
  {
    id: "14",
    name: "Pranav Sharma",
    college: "IIT Delhi",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-14.png"
  },
  {
    id: "15",
    name: "Khusro Sheikh",
    college: "IIT Patna",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-15.png"
  },
  {
    id: "16",
    name: "Prem Narwade",
    college: "IIT Palakkad",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-16.png"
  },
  {
    id: "17",
    name: "Nagendra Pratap Chaudhary",
    college: "IIT Kharagpur",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-17.png"
  },
  {
    id: "18",
    name: "Sanaul Kazi",
    organisation: "RRB-JE Ranchi",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-18.png"
  },
  {
    id: "19",
    name: "Amit",
    organisation: "RRB-JE Bombay",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-19.png"
  },
  {
    id: "20",
    name: "Saurabh Dubey",
    college: "IIT Bhubaneswar",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2025",
    image: "/rankers/ranker-20.png"
  },
  {
    id: "21",
    name: "Mohit",
    college: "RRB-JE Mumbai",
    designation: "GATE",
    category: "GATE",
    selectionYear: "2026",
    image: "/rankers/ranker-21.png"
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
    image: "/rankers/job-1.png"
  },
  {
    id: "j2",
    name: "Dr. Sahil Garg",
    organisation: "Ministry of Defence, Indian Navy",
    designation: "Assistant Professor Indian Navy (Group A Gazetted)",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "MOD",
    image: "/rankers/job-2.png"
  },
  {
    id: "j3",
    name: "Akash Jaiswal",
    organisation: "ISRO, Bengaluru",
    designation: "Scientist -SC",
    branch: "Production & Industrial Engineering",
    selectionYear: "2021",
    category: "ISRO",
    image: "/rankers/job-3.png"
  },
  {
    id: "j4",
    name: "Deepbhai Haresh Kumar Dave",
    organisation: "ISRO, NLC",
    designation: "Scientist/Engineer 'SC' Mechanical",
    branch: "Mechanical Engineering",
    selectionYear: "2023",
    category: "ISRO",
    image: "/rankers/job-4.png"
  },
  {
    id: "j5",
    name: "Dileep Kumar Chaudhary",
    organisation: "Bhabha Atomic Research Centre",
    designation: "Scientific Officer OCES",
    branch: "Mechanical Engineering",
    selectionYear: "2020",
    category: "BARC",
    image: "/rankers/job-5.png"
  },
  {
    id: "j6",
    name: "Govind Kumar",
    organisation: "Bharat Electronics Limited",
    designation: "Deputy Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-6.png"
  },
  {
    id: "j7",
    name: "Chirag Goyal",
    organisation: "Indian Oil Corporation Ltd (IOCL)",
    designation: "Aviation Officer",
    branch: "Mechanical Engineering",
    selectionYear: "2023",
    category: "PSU",
    image: "/rankers/job-7.png"
  },
  {
    id: "j8",
    name: "Anant Kumar Gautam",
    organisation: "IOCL",
    designation: "Executive officer",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-8.png"
  },
  {
    id: "j9",
    name: "Swati Mishra",
    organisation: "Hindustan Zinc Limited",
    designation: "Assistant Manager",
    branch: "Civil Engineering",
    selectionYear: "2020",
    category: "JOB",
    image: "/rankers/job-9.png"
  },
  {
    id: "j10",
    name: "Prashant Mishra",
    organisation: "GAIL (India) Limited",
    designation: "Senior Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "PSU",
    image: "/rankers/job-10.png"
  },
  {
    id: "j11",
    name: "Suarabh Chaubey",
    organisation: "NALCO",
    designation: "Patent Examiner",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-11.png"
  },
  {
    id: "j12",
    name: "Rahul Singh Yadav",
    organisation: "NTPC",
    designation: "Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2022",
    category: "PSU",
    image: "/rankers/job-12.png"
  },
  {
    id: "j13",
    name: "Kamna Pandey",
    organisation: "NTPC Limited",
    designation: "Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2021",
    category: "PSU",
    image: "/rankers/job-13.png"
  },
  {
    id: "j14",
    name: "Aasif Procha",
    organisation: "PSPCL",
    designation: "Assistant Engineer",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "JOB",
    image: "/rankers/job-14.png"
  },
  {
    id: "j15",
    name: "Pooja H",
    organisation: "Water Resources Department",
    designation: "Assistant Engineer",
    branch: "Civil Engineering",
    selectionYear: "2022",
    category: "ESE",
    image: "/rankers/job-15.png"
  },
  {
    id: "j16",
    name: "Bhavya Malviya",
    organisation: "NTPC Kahalgaon",
    designation: "Assistant Executive Operations",
    branch: "Mechanical Engineering",
    selectionYear: "2019/2024",
    category: "PSU",
    image: "/rankers/job-16.png"
  },
  {
    id: "j17",
    name: "Rajat Rai",
    organisation: "ONGC",
    designation: "Asst. Exe. Engineer",
    branch: "Production Engineering",
    selectionYear: "2017",
    category: "PSU",
    image: "/rankers/job-17.png"
  },
  {
    id: "j18",
    name: "Garima",
    organisation: "Bharat Dynamics Limited",
    designation: "Executive Trainee",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-18.png"
  },
  {
    id: "j19",
    name: "Anjali",
    organisation: "NPCIL",
    designation: "Executive Trainee",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "BARC",
    image: "/rankers/job-19.png"
  },
  {
    id: "j20",
    name: "Sujoy Das",
    organisation: "IOCL",
    designation: "Executive Trainee | AIR 535 ME",
    branch: "Mechanical Engineering",
    selectionYear: "2024",
    category: "PSU",
    image: "/rankers/job-20.png"
  }
];

const RankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group relative flex flex-col bg-[#050505] rounded-[1rem] transition-all duration-500 overflow-hidden h-[210px] w-full border border-white/5 shadow-2xl hover:shadow-gameTeal/10"
  >
    {/* Top Image Container - Fully visible, using object-contain to prevent cropping or hiding the image */}
    <div className="relative h-[55%] w-full overflow-hidden bg-[#07090e]">
      <Image 
          src={ranker.image} 
          alt={ranker.name} 
          fill
          unoptimized
          className="object-contain p-1 transition-transform duration-1000 opacity-95 group-hover:scale-105" 
          referrerPolicy="no-referrer"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
      
      {/* Category Badge */}
      <div className="absolute top-2 left-2 z-10">
          <span className="px-1.5 py-0.5 rounded bg-gameGold text-black text-[6px] font-black uppercase tracking-widest shadow-lg">
            {ranker.category}
          </span>
      </div>
    </div>

    {/* Dedicated Bottom Info Block - Clean background, fully visible white text details utilising key space-saving styles */}
    <div className="flex-grow py-1.5 px-2.5 bg-[#050505] flex flex-col justify-center relative z-10">
      <div className="space-y-0.5 font-sans text-[10px] text-white">
        <p className="font-extrabold text-white leading-tight">
          Name : {ranker.name}
        </p>
        {ranker.college ? (
          <p className="font-extrabold text-white leading-tight">
            College : {ranker.college}
          </p>
        ) : (
          <p className="font-extrabold text-white leading-tight">
            Selected in : {ranker.organisation}
          </p>
        )}
        <p className="font-extrabold text-white leading-tight">
          Selection year : {ranker.selectionYear}
        </p>
      </div>
    </div>
  </div>
));

const JobRankerCard = React.memo(({ ranker }: { ranker: Ranker }) => (
  <div
    className="group relative flex flex-col bg-[#050505] rounded-[1rem] transition-all duration-500 overflow-hidden h-[210px] w-full border border-white/5"
  >
    {/* Top Image Section - Height adjusted to 60% for better ratio in shorter cards */}
    <div className="relative h-[60%] w-full overflow-hidden bg-[#07090e]">
      <Image 
          src={ranker.image} 
          alt={ranker.name} 
          fill
          unoptimized
          className="object-contain p-1 transition-transform duration-1000 opacity-90 group-hover:opacity-100 group-hover:scale-105" 
          referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
      
      {/* Category HUD - More compact */}
      <div className="absolute top-2 left-2">
          <div className="px-1.5 py-0.5 rounded bg-gameGold text-[#050505] text-[6px] font-black uppercase tracking-widest border border-white/10 shadow-lg">
            {ranker.category}
          </div>
      </div>
    </div>

    {/* Identity & Stats Section - Concise & Aligned */}
    <div className="flex-grow p-2.5 bg-[#050505] flex flex-col text-left justify-start -mt-2 relative z-10">
      <div className="mb-1">
        <h3 className="text-[13px] font-black text-gameGold leading-tight transition-colors line-clamp-1">
          {ranker.name}
        </h3>
        <div className="flex items-center gap-1 mt-0.5">
          <p className="text-white font-bold text-[8px] uppercase tracking-wide line-clamp-1">
            {ranker.organisation}
          </p>
        </div>
      </div>

      <div className="space-y-1 pt-1.5 border-t border-white/10">
        <div className="flex items-center gap-1">
          <p className="text-[8px] font-medium text-white italic truncate">{ranker.designation}</p>
        </div>
        
        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1 truncate">
            <p className="text-[8px] font-bold text-slate-300 uppercase truncate">{ranker.branch}</p>
          </div>
          <div className="flex items-center gap-1 shrink-0 bg-white/5 px-1 py-0.5 rounded">
            <p className="text-[8px] font-black text-gameGold">{ranker.selectionYear}</p>
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
            <Link 
              href="/#exams" 
              className="bg-white text-gameTeal px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-gameGold hover:text-black transition-all shadow-2xl hover:-translate-y-2 flex items-center justify-center gap-3 group"
            >
                START YOUR JOURNEY <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/courses" 
              className="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center"
            >
                EXPLORE COURSES
            </Link>
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
          <div key={`${item.id}-${idx}`} className="w-[175px] md:w-[180px] shrink-0">
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
               Gaurav Sir&apos;s Students in Reputed Jobs
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
