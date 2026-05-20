'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PlayCircle, Star, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const students = [
  { name: "Akshay Pillay", org: "Govt. of India", designation: "Sub Collector & SDM", img: "/rankers/ranker-1.png" },
  { name: "Dr. Sahil Garg", org: "Ministry of Defence", designation: "Group A Gazetted / Asst. Prof", img: "/rankers/ranker-2.png" },
  { name: "Akash Jaiswal", org: "ISRO, Bengaluru", designation: "Scientist - SC", img: "/rankers/ranker-3.png" },
  { name: "Deepbhai Haresh Kumar Dave", org: "ISRO, NLC", designation: "Scientist/Engineer 'SC'", img: "/rankers/ranker-4.png" },
  { name: "Dileep Kumar Chaudhary", org: "BARC", designation: "Scientific Officer OCES", img: "/rankers/ranker-5.png" },
  { name: "Govind Kumar", org: "Bharat Electronics Ltd", designation: "Deputy Engineer", img: "/rankers/ranker-6.png" },
  { name: "Chirag Goyal", org: "IOCL", designation: "Aviation Officer", img: "/rankers/ranker-7.png" },
  { name: "Anant Kumar Gautam", org: "IOCL", designation: "Executive Officer", img: "/rankers/ranker-8.png" },
  { name: "Swati Mishra", org: "Hindustan Zinc Ltd", designation: "Assistant Manager", img: "/rankers/ranker-9.png" },
  { name: "Prashant Mishra", org: "GAIL (India) Ltd", designation: "Senior Engineer", img: "/rankers/ranker-10.png" },
  { name: "Suarabh Chaubey", org: "NALCO", designation: "Patent Examiner", img: "/rankers/ranker-11.png" },
  { name: "Rahul Singh Yadav", org: "NTPC", designation: "Engineer", img: "/rankers/ranker-12.png" },
  { name: "Kamna Pandey", org: "NTPC Limited", designation: "Engineer", img: "/rankers/ranker-13.png" },
  { name: "Aasif Procha", org: "PSPCL", designation: "Assistant Engineer", img: "/rankers/ranker-14.png" },
  { name: "Pooja H", org: "WRD", designation: "Assistant Engineer", img: "/rankers/ranker-15.png" },
  { name: "Bhavya Malviya", org: "NTPC Kahalgaon", designation: "Asst. Exec Operations", img: "/rankers/ranker-16.png" },
  { name: "Rajat Rai", org: "ONGC", designation: "Asst. Exe. Engineer", img: "/rankers/ranker-17.png" },
  { name: "Garima", org: "Bharat Dynamics Ltd", designation: "Executive Trainee", img: "/rankers/ranker-18.png" },
  { name: "Anjali", org: "NPCIL", designation: "Executive Trainee", img: "/rankers/ranker-19.png" },
  { name: "Sujoy Das", org: "IOCL", designation: "Executive Trainee", img: "/rankers/ranker-20.png" },
  { name: "Abhishek Kumar", org: "NPCIL", designation: "ET - Mechanical", img: "/rankers/ranker-21.png" },
  { name: "Parul Singh", org: "CPWD", designation: "Junior Engineer", img: "/rankers/ranker-1.png" },
  { name: "Neelam Kushwaha", org: "SSC (Irrigation)", designation: "Junior Engineer", img: "/rankers/ranker-2.png" },
  { name: "Ankit Kumar", org: "BARC", designation: "Stipendiary Trainee", img: "/rankers/ranker-3.png" },
  { name: "Vijay Pal", org: "NTPC", designation: "Engg. Exec Trainee", img: "/rankers/ranker-4.png" },
  { name: "Vindhyeshwari Upadhyay", org: "BHEL & RRB-JE", designation: "Junior Engineer", img: "/rankers/ranker-5.png" },
  { name: "Akash Gupta", org: "NTPC", designation: "Engg. Exec Trainee", img: "/rankers/ranker-6.png" },
  { name: "Deepak Devlal", org: "DIAT", designation: "Aerospace Engg", img: "/rankers/ranker-7.png" },
  { name: "Abhishek Kumar", org: "NTPC", designation: "Engg. Exec Trainee", img: "/rankers/ranker-8.png" },
  { name: "Pankaj Kushwah", org: "BARC", designation: "Scientific Assistant", img: "/rankers/ranker-9.png" },
  { name: "Sangeeta", org: "BARC", designation: "Scientific Assistant", img: "/rankers/ranker-10.png" },
  { name: "Pushp Kumar Singh", org: "RSSB", designation: "Junior Engineer", img: "/rankers/ranker-11.png" },
  { name: "Aditi Rathore", org: "ONGC", designation: "Asst. Exe. Engineer", img: "/rankers/ranker-12.png" },
  { name: "Smaranika Moharana", org: "OPSC", designation: "Asst. Exe. Engineer", img: "/rankers/ranker-13.png" },
  { name: "Abhishek Tiwari", org: "BHEL", designation: "Executive Trainee", img: "/rankers/ranker-14.png" },
  { name: "Mukunda Buragohain", org: "Assam Govt", designation: "Junior Engineer", img: "/rankers/ranker-15.png" },
  { name: "Harpreet", org: "HSPCB", designation: "Asst. Env. Engineer", img: "/rankers/ranker-16.png" },
  { name: "Kapil Sharma", org: "NLCIL", designation: "Executive Engineer", img: "/rankers/ranker-17.png" },
  { name: "Rajesh Sahu", org: "ISRO", designation: "Technical Assistant", img: "/rankers/ranker-18.png" },
  { name: "Monu Kumar", org: "Coal India Ltd", designation: "Management Trainee", img: "/rankers/ranker-19.png" }
];

const VerticalSlider = ({ items, speed, reverse = false }: { items: typeof students, speed: number, reverse?: boolean }) => {
  const doubledItems = [...items, ...items, ...items];
  return (
    <div className="flex flex-col gap-4 h-full py-0">
      <motion.div
        animate={{ 
          y: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] 
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex flex-col gap-4"
      >
        {doubledItems.map((student, idx) => (
          <div 
            key={idx} 
            className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden relative shadow-xl border-[4px] border-white bg-white group"
          >
            <Image 
              src={student.img} 
              alt={student.name} 
              fill
              unoptimized
              className="object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white z-10 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-[12px] font-black leading-tight drop-shadow-lg text-white">{student.name}</p>
                <div className="flex items-center">
                  <span className="bg-gameGold text-black text-[8px] font-black uppercase px-1.5 py-0.5 rounded shadow-md w-fit truncate max-w-full">
                    {student.org}
                  </span>
                </div>
                <p className="text-[9px] font-black text-white/90 uppercase tracking-tight line-clamp-1 border-l-2 border-gameGold/60 pl-1.5 leading-none">
                   {student.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden min-h-[550px] lg:min-h-[650px] flex flex-col pt-20 lg:pt-28 pb-0">
      
      {/* Dynamic Decor Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gameGold/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[450px] lg:min-h-[550px]"> 
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 text-center lg:text-left z-40 mx-auto lg:mx-0 py-4">
             <motion.div
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
             >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full mb-4 shadow-sm">
                   <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gameGold opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-gameGold"></span>
                   </span>
                   <span className="text-[10px] font-black text-slate-500 tracking-widest uppercase">
                      #1 GATE & ESE INSTITUTE
                   </span>
                </div>

                <h1 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1] mb-2 tracking-tighter">
                   Crack <span className="text-gameTeal">Competitive</span> <br/>
                   Exams Like a <span className="text-gameGold">Pro Player</span>
                </h1>
                
                <p className="text-sm text-slate-500 mb-4 leading-relaxed font-bold max-w-md mx-auto lg:mx-0">
                   Join India's trusted mentorship platform. Visualized learning with <br />
                   <span className="text-gameTeal font-black">Gaurav Babu Sir</span> <span className="text-slate-900 font-black px-1">(14+ yrs Exp).</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mb-6">
                    <Link 
                      href="#exams"
                      className="bg-gameTeal text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl hover:bg-gameTealDark hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                    >
                       SELECT GOAL <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      href="/jobs"
                      className="bg-white text-slate-900 border border-slate-100 px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                    >
                       <Briefcase size={16} className="text-gameTeal" /> JOB UPDATES
                    </Link>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 border-t border-slate-100">
                   <div className="group">
                      <div className="text-2xl font-black text-slate-900 leading-none mb-1 group-hover:text-gameTeal transition-colors line-clamp-1">100k+</div>
                      <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Aspirants</div>
                   </div>
                   <div className="w-px h-8 bg-slate-100"></div>
                   <div className="group">
                      <div className="text-2xl font-black text-slate-900 leading-none mb-1 group-hover:text-gameTeal transition-colors line-clamp-1">5000+</div>
                      <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Selections</div>
                   </div>
                   <div className="w-px h-8 bg-slate-100"></div>
                   <div className="group">
                      <div className="flex items-center gap-1 text-gameGold">
                         <span className="text-2xl font-black text-slate-900 leading-none mb-1 group-hover:text-gameTeal transition-colors line-clamp-1">4.9</span>
                         <Star size={18} fill="currentColor" />
                      </div>
                      <div className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em]">Rating</div>
                   </div>
                </div>
             </motion.div>
          </div>

          {/* RIGHT VISUAL AREA */}
          <div className="lg:col-span-7 relative h-full flex items-end justify-center">
             
             <div className="absolute inset-0 z-0 overflow-hidden mask-fade-top-bottom pointer-events-none opacity-30 scale-90">
                <div className="flex gap-4 h-full px-4 lg:px-8">
                   <div className="flex-1">
                      <VerticalSlider items={students.slice(0, 13)} speed={45} />
                   </div>
                   <div className="flex-1 mt-12">
                      <VerticalSlider items={students.slice(13, 26)} speed={35} reverse />
                   </div>
                   <div className="flex-1">
                      <VerticalSlider items={students.slice(26, 40)} speed={55} />
                   </div>
                </div>
             </div>

             <motion.div 
                className="relative z-30 w-full flex items-end justify-center h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
             >
                <div className="relative flex items-end justify-center w-full h-full max-h-[500px] lg:max-h-[600px]">
                    <div className="relative h-[55vh] lg:h-[65vh] w-full">
                        <Image 
                          src="/gaurav-sir.png" 
                          alt="Gaurav Babu Sir" 
                          fill
                          priority
                          unoptimized
                          className="object-contain object-bottom drop-shadow-[0_-5px_30px_rgba(0,0,0,0.1)] z-30"
                          referrerPolicy="no-referrer"
                        />
                    </div>

                    <motion.div 
                      initial={{ scale: 0, x: 30 }}
                      animate={{ scale: 1, x: 0 }}
                      transition={{ delay: 1.2, type: "spring" }}
                      className="absolute top-[30%] right-[-5%] bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl flex items-center gap-3 border border-white z-40 scale-75 lg:scale-100"
                    >
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                          <CheckCircle2 size={16} strokeWidth={3} />
                      </div>
                      <div className="text-left">
                          <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Verified</p>
                          <p className="text-sm font-black text-slate-900 leading-none">Ranker Results</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }} 
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-2xl text-center z-40 border border-slate-50 min-w-[240px] scale-90 lg:scale-100"
                    >
                      <h3 className="text-xl font-black text-[#0f172a] tracking-tight leading-none mb-1">Gaurav Babu Sir</h3>
                      <div className="h-[2px] w-8 bg-gameTeal mx-auto my-2 rounded-full"></div>
                      <div className="text-[9px] font-black tracking-[0.3em] text-[#075d63] uppercase">Founder & Mentor</div>
                    </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
