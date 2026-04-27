'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import Image from 'next/image';
import { 
  Trophy, Target, ArrowRight, Users, 
  Award, CheckCircle2, Phone, MessageCircle,
  Wrench, Layers, Cpu, ChevronRight, Medal, Briefcase,
  Activity, Flame, Zap, BookOpen, GraduationCap, Star, Sparkles, TrendingUp, Quote as QuoteIcon, History, Landmark, Mic2, UserCheck, ShieldCheck, Lightbulb, Smartphone, Rocket, Eye, Shield, HardHat, Microscope, Compass, Atom, Settings, Calendar, ChevronLeft, ArrowUpRight, MonitorPlay, Fingerprint, Crosshair, Hexagon,
  Crown, X
} from 'lucide-react';

import FacultyShowcase from './FacultyShowcase';

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numericPart = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const suffixPart = value.replace(/[0-9]/g, '').trim();

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericPart, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [numericPart, isInView]);

  return (
    <span ref={ref}>
      {displayValue}{suffixPart ? ` ${displayValue}` : ''}
    </span>
  );
};

const AboutPage: React.FC = () => {
  const [hoveredReasonIndex, setHoveredReasonIndex] = useState<number | null>(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<any | null>(null);
  const [facultySlide, setFacultySlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-play for the new About Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.8, ease: "easeOut" as const }
  };

  const chiefMentor = { 
    name: "Gaurav Babu Sir", 
    role: "Founder & Chief Mentor",
    expLabel: "13+ YRS EXP.",
    exp: "13+ YEARS OF TEACHING EXCELLENCE",
    img: "/images/faculty/faculty-gaurav.png",
    stats: [
      { label: "Mentored 1 Lakh+ Students", icon: Users },
      { label: "GATE & ESE Expert", icon: Trophy },
      { label: "Mechanical & Civil Guru", icon: Landmark },
      { label: "Visionary Educator", icon: Lightbulb }
    ]
  };

  const facultyMembers = [
    { 
      name: "Harshit Agarwal", 
      role: "Senior Mentor",
      expLabel: "10+ YRS EXP.",
      exp: "10+ YEARS OF TEACHING EXPERIENCE",
    img: "/images/gallery/gallery-1.png",
      stats: [
        { label: "Achieved ESE AIR 63, 90", icon: Medal },
        { label: "Mentored 50k+ Students", icon: Users },
        { label: "King of Thermal Science", icon: Trophy },
        { label: "ISRO, ONGC, SAIL Letters", icon: Briefcase }
      ]
    },
    { 
      name: "Varun Sir", 
      role: "Thermal Expert",
      expLabel: "9+ YRS EXP.",
      exp: "9+ YEARS OF TEACHING EXPERIENCE",
    img: "/images/gallery/gallery-2.png",
      stats: [
        { label: "Gate Qualified AIR 80", icon: Medal },
        { label: "60,000+ Students Mentored", icon: Users },
        { label: "Mech Engineering Expert", icon: Award },
        { label: "Industrial Recognized", icon: Briefcase }
      ]
    },
    { 
      name: "Atul Vaish", 
      role: "PSU Specialist",
      expLabel: "10+ YRS EXP.",
      exp: "10+ YEARS OF TEACHING EXPERIENCE",
    img: "/images/gallery/gallery-3.png",
      stats: [
        { label: "Fluid Mechanics Expert", icon: Target },
        { label: "Industry Recognition", icon: Award },
        { label: "Mentored 15,000+ students", icon: Users },
        { label: "GATE Top Ranker", icon: Medal }
      ]
    },
    { 
      name: "Aditya Shukla", 
      role: "SOM Expert",
      expLabel: "7+ YRS EXP.",
      exp: "7+ YEARS OF TEACHING EXPERIENCE",
    img: "/images/gallery/gallery-4.png",
      stats: [
        { label: "Strength of Materials Guru", icon: Layers },
        { label: "Problem Solving Pro", icon: Zap },
        { label: "Industrial Expertise", icon: Award },
        { label: "Mentored 8,000+ students", icon: Users }
      ]
    }
  ];

  const approachSteps = [
    {
      id: 1,
      title: <>Personal<br />Mentorship</>,
      desc: "1:1 guidance to identify weak areas and craft a personalized path to national ranking with expert academic oversight.",
      icon: Users,
      color: "bg-teal-500",
      label: "START"
    },
    {
      id: 2,
      title: <>Effective<br />Learning</>,
      desc: "Our courses are designed to teach subjects from the ground up, ensuring solid fundamental concepts for competitive excellence.",
      icon: BookOpen,
      color: "bg-amber-500",
      label: "LEARN"
    },
    {
      id: 3,
      title: <>Rigorous<br />Practice</>,
      desc: "Mock tests and regular assessments help students evaluate and sharpen their exam-day skills through intensive application.",
      icon: Target,
      color: "bg-teal-500",
      label: "PRACTICE"
    },
    {
      id: 4,
      title: <>Parallel<br />Revision</>,
      desc: "A systematic approach to revision that ensures long-term retention of critical engineering topics through cyclical review.",
      icon: History,
      color: "bg-amber-500",
      label: "RETAIN"
    }
  ];

  const reasons = [
    {
      id: "01",
      title: "The Innovator - Gaurav Babu Sir",
      desc: "A GATE & ESE expert with over 13 years of experience in the Mechanical and Civil domains, he has mentored 1 lakh+ students to successfully crack top engineering exams nationwide.",
      icon: Lightbulb,
      color: "bg-[#021f21]",
    },
    {
      id: "02",
      title: "Creating Top Rankers",
      desc: "GAME consistently produces top ranks in competitive exams, empowering students to achieve academic excellence through structured guidance and proven strategies.",
      icon: Trophy,
      color: "bg-[#033438]", 
    },
    {
      id: "03",
      title: "Personalized Mentorship",
      desc: "Unlock your potential with one-to-one mentorship, fostering a strong guru-shishya bond tailored to your learning needs.",
      icon: Target,
      color: "bg-[#05494f]", 
    },
    {
      id: "04",
      title: "Unite & Upskill: THE GAME COMMUNITY",
      desc: "Connect with peers, engage in discussion forums, and master skills through collaborative learning in a supportive environment.",
      icon: Users,
      color: "bg-[#075d63]",
    },
    {
      id: "05",
      title: "Advanced Interview & Career Guidance",
      desc: "Receive post-exam support with mock interviews and career counselling for PSUs, placements, and engineering career pathways.",
      icon: Award,
      color: "bg-[#09767e]", 
    },
    {
      id: "06",
      title: "Learn on the Go, Anytime You Want",
      desc: "Get endless learning opportunities, accessible anywhere through our high-performance learning platform.",
      icon: Smartphone,
      color: "bg-[#0b8f99]", 
    },
    {
      id: "07",
      title: "India&apos;s Leading e-Learning Provider",
      desc: "A premier platform with proven success rates for GATE, ESE, PSUs, SSC JE & All-State AE Exams.",
      icon: ShieldCheck,
      color: "bg-[#0da6b1]",
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-gameTeal selection:text-white">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 flex flex-col justify-center px-8 md:px-10 lg:px-12 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-[1280px] mx-auto relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-[clamp(1rem,3vh,2rem)] lg:gap-[clamp(1.5rem,4vw,4rem)]">
            <div className="lg:w-5/12 order-2 lg:order-1 w-full">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex gap-[clamp(0.5rem,1.5vw,1rem)] items-center justify-center">
                <div className="w-2/3 h-[clamp(250px,50vh,400px)] rounded-[clamp(1.5rem,4vh,3rem)] overflow-hidden shadow-2xl relative border-4 border-slate-50">
                  <Image src="/images/gallery/gallery-hero.png" alt="Main Mentorship" fill unoptimized className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gameTeal/20 to-transparent"></div>
                </div>
                <div className="w-1/3 flex flex-col gap-[clamp(0.5rem,1.5vw,1rem)]">
                  <div className="h-[clamp(120px,24vh,195px)] rounded-[clamp(1.25rem,3vh,2.5rem)] overflow-hidden shadow-xl border-2 border-slate-50 relative">
                    <Image src="/images/gallery/student-learning.png" alt="Student Learning" fill unoptimized className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[clamp(120px,24vh,195px)] rounded-[clamp(1.25rem,3vh,2.5rem)] overflow-hidden shadow-xl border-2 border-slate-200 relative">
                    <Image src="/images/gallery/achiever-greatness.png" alt="Achiever Greatness" fill unoptimized className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-7/12 order-1 lg:order-2 flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center">
                <h1 className="text-[clamp(1.75rem,3.5vw,3.25rem)] font-black text-slate-900 leading-tight mb-[clamp(0.25rem,1vh,0.75rem)] tracking-tight">
                  Gaurav's Academy for <span className="text-[#075d63]">Mentorship & Education</span>
                </h1>

                <div className="mb-[clamp(0.25rem,1.5vh,0.75rem)]">
                  <span className="inline-block bg-[#075d63] text-white px-[clamp(0.75rem,1.5vw,1.25rem)] py-[clamp(0.375rem,0.75vh,0.5rem)] rounded-xl text-[clamp(0.875rem,1.5vw,1.25rem)] font-black italic shadow-md">
                    “Learning Engineering is now a GAME”
                  </span>
                </div>

                <h3 className="text-[clamp(0.875rem,1.25vw,1.125rem)] font-bold text-slate-700 mb-[clamp(0.125rem,0.5vh,0.25rem)] leading-relaxed">
                  Embark on your Journey to Success With Gaurav Babu Sir
                </h3>

                <div className="mb-[clamp(0.25rem,1.5vh,0.75rem)]">
                  <p className="text-slate-600 text-[clamp(0.75rem,1vw,1rem)] font-medium leading-relaxed">
                    Our Students Have achieved greatness — now, It’s <span className="text-[#075d63] font-black border-b-4 border-gameGold pb-1">YOUR TURN NEXT!</span>
                  </p>
                </div>

                <div className="space-y-[clamp(0.25rem,1vh,0.75rem)] mb-[clamp(0.75rem,2vh,1.5rem)]">
                  <p className="text-slate-600 text-[clamp(0.75rem,1vw,1rem)] font-medium leading-relaxed">
                    We focus on building strong foundations in the very essence of problem-solving, critical thinking, and resilience.
                  </p>
                  <div className="bg-[#075d63]/5 border-l-4 border-[#075d63] p-[clamp(0.5rem,1.5vh,1rem)] rounded-r-xl">
                    <p className="text-[#075d63] text-[clamp(0.875rem,1.25vw,1.125rem)] font-bold leading-relaxed">
                      We are here to produce qualified engineers; not just processing admissions.
                    </p>
                  </div>
                </div>

                <button className="bg-[#075d63] text-white px-[clamp(1.25rem,2.5vw,2rem)] py-[clamp(0.5rem,1.5vh,0.875rem)] rounded-xl font-black text-[clamp(0.7rem,0.8vw,0.8rem)] uppercase tracking-widest hover:bg-[#05494f] transition-all flex items-center justify-center w-fit gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  ENROLL NOW <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT GAME (The Origin Story) with Slider */}
      <section className="py-12 lg:py-20 px-8 md:px-10 lg:px-12 bg-white relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">
               <motion.div {...fadeInUp} className="lg:w-[60%] flex flex-col justify-center">
                  <div className="mb-10"><h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">About GAME</h2><div className="w-24 h-2.5 bg-gameTeal rounded-full"></div></div>
                  <div className="flex flex-col gap-8 text-lg lg:text-xl text-slate-600 leading-[1.8] font-medium">
                     <p>It all started with a vision to redefine the way students prepare for the biggest exams of their careers. <span className="font-black text-slate-900 underline decoration-gameGold/40 decoration-4 underline-offset-4">Gaurav Babu Sir</span>, an experienced mentor and educator, noticed a gap in how competitive exams were approached. He saw students struggling, not just with concepts, but with motivation, direction, and mentorship. With over <span className="font-black text-gameTeal">13+ years of teaching experience</span>, he knew there had to be a better way.</p>
                     <p>Thus, Gaurav's Academy for Mentorship & Education (GAME Academy) was born. GAME Academy wasn’t just created to teach, it was created to inspire, to guide, and to transform the lives of every student who walked through its doors. From humble beginnings, our academy has grown into a beacon of hope and success for thousands of Mechanical and Civil Engineering aspirants across India.</p>
                     <p className="bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-gameGold font-bold text-slate-800 shadow-sm italic">
                        Our commitment to quality education and individual attention has helped us build a strong reputation in the industry. We have a track record of producing top-ranking students who have gone on to achieve great success in their careers. We are proud to be a part of their success stories.
                     </p>
                  </div>
               </motion.div>

               {/* RE-ENGINEERED DYNAMIC SLIDER AREA - Standardized Dark Theme */}
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:w-[40%] flex items-center">
                  <div className="w-full relative h-full min-h-[550px] flex flex-col">
                    
                    <AnimatePresence mode="wait">
                      {currentSlide === 0 && (
                        <motion.div 
                          key="slide1"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="w-full h-full bg-gameBlack rounded-[3.5rem] p-12 lg:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col justify-between border border-white/5"
                        >
                          <div className="absolute inset-0 bg-graph-paper opacity-[0.03] invert pointer-events-none"></div>
                          <div className="absolute -top-24 -right-24 w-64 h-64 bg-gameTeal/10 rounded-full blur-[80px]"></div>
                          <div className="relative z-10 space-y-12">
                              <div><div className="text-gameGold font-black text-5xl mb-2 tracking-tighter">13+ Years</div><p className="text-white font-black text-[10px] uppercase tracking-[0.4em] opacity-50">Teaching Experience</p></div>
                              <div className="space-y-4"><div className="h-px bg-white/10 w-full"></div><h4 className="text-gameTeal font-black text-2xl uppercase tracking-widest leading-none">GAME Academy</h4><p className="text-slate-400 font-bold text-sm leading-relaxed">To inspire, to guide, and to transform.</p></div>
                              <div><div className="flex items-center gap-2 mb-2"><div className="w-6 h-6 rounded-lg bg-gameGold flex items-center justify-center text-black"><Trophy size={14} /></div><span className="text-white font-black text-[10px] uppercase tracking-[0.25em]">Qualified Engineers</span></div><p className="text-slate-500 text-xs font-medium">Mechanical & Civil Domains</p></div>
                          </div>
                          <div className="absolute bottom-10 right-10"><Sparkles size={40} className="text-gameGold opacity-20 animate-pulse" /></div>
                        </motion.div>
                      )}

                      {currentSlide === 1 && (
                        <motion.div 
                          key="slide2"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="w-full h-full bg-gameBlack rounded-[3.5rem] p-12 lg:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col justify-center border border-white/5"
                        >
                           <div className="w-14 h-14 rounded-2xl bg-teal-900/30 text-gameTeal flex items-center justify-center mb-10 shadow-sm border border-gameTeal/20">
                              <Users size={32} />
                           </div>
                           <h4 className="text-gameTeal font-black text-3xl uppercase tracking-tight mb-6">Mentorship Built for Success</h4>
                           <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium">
                              Every student at GAME Academy is <span className="text-gameTeal font-black underline decoration-gameGold/30 decoration-4 underline-offset-4 text-white">seen, heard, and mentored.</span> 
                              <br/><br/>
                              We focus on developing <span className="font-black text-white">problem-solving & visualization skills</span>, creating an environment where students rise together.
                           </p>
                        </motion.div>
                      )}

                      {currentSlide === 2 && (
                        <motion.div 
                          key="slide3"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="w-full h-full bg-gameBlack rounded-[3.5rem] p-12 lg:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col justify-center border border-white/5"
                        >
                           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none rotate-12">
                              <Zap size={150} className="text-gameGold" />
                           </div>
                           <div className="relative z-10 space-y-8">
                              <p className="text-white font-black text-2xl md:text-4xl leading-tight italic">
                                 “Our tagline, <span className="text-gameGold">Learning Engineering is now a GAME</span>, reflects our goal to make learning effective.”
                              </p>
                              <div className="h-1 w-20 bg-gameTeal rounded-full"></div>
                              <p className="text-teal-400 font-black text-xl md:text-2xl uppercase tracking-widest leading-snug">
                                 We provide life-changing mentorship, not just lessons.
                              </p>
                           </div>
                           {/* Decorative bottom border */}
                           <div className="absolute bottom-0 left-0 w-full h-2 bg-gameGold opacity-50"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Slider Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                       {[0, 1, 2].map((i) => (
                          <button 
                            key={i}
                            onClick={() => setCurrentSlide(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-10 bg-gameTeal' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                          />
                       ))}
                    </div>

                    {/* Manual Nav Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-10 z-30">
                       <button onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)} className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gameTeal hover:bg-gameTeal hover:text-white transition-all border border-slate-100">
                          <ChevronLeft size={24} />
                       </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-10 z-30">
                       <button onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)} className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gameTeal hover:bg-gameTeal hover:text-white transition-all border border-slate-100">
                          <ChevronRight size={24} />
                       </button>
                    </div>

                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* SECTION 3: MENTOR'S MESSAGE - PREMIUM DARK THEME REDESIGN */}
      <section className="relative py-12 lg:py-16 flex flex-col justify-center bg-gameBlack overflow-hidden">
         {/* Subtle Dotted Background Pattern for Dark Theme */}
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#075d63 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(7,93,99,0.05)_0%,transparent_50%)]"></div>
         <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gameTeal/[0.03] rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-[clamp(1.5rem,3vh,3rem)] lg:gap-[clamp(2rem,4vw,5rem)]">
               
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 className="relative lg:w-[45%] shrink-0 group w-full max-w-[400px] lg:max-w-none mx-auto"
               >
                  <div className="absolute -top-[clamp(1rem,3vh,3rem)] -left-[clamp(1rem,3vh,3rem)] w-[clamp(10rem,30vh,16rem)] h-[clamp(10rem,30vh,16rem)] border-2 border-gameTeal/20 rounded-[clamp(2rem,6vh,4rem)] -z-10 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-700"></div>
                  <div className="absolute -bottom-[clamp(1rem,3vh,3rem)] -right-[clamp(1rem,3vh,3rem)] w-[clamp(8rem,24vh,12rem)] h-[clamp(8rem,24vh,12rem)] bg-gameGold/10 rounded-full -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700 blur-2xl"></div>
                  
                  <div className="relative z-10 rounded-[clamp(2rem,6vh,4rem)] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-slate-800 border-8 border-white/5 h-[clamp(250px,50vh,450px)] w-full">
                     <Image 
                       src="/images/gallery/gallery-large.png" 
                       alt="Gaurav Babu Sir" 
                       fill
                       unoptimized
                       className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105" 
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gameBlack via-transparent to-transparent opacity-80"></div>
                     
                     <div className="absolute bottom-[clamp(1rem,3vh,2rem)] left-[clamp(1rem,3vh,2rem)] right-[clamp(1rem,3vh,2rem)]">
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-[clamp(0.5rem,1.5vh,1rem)] rounded-2xl">
                           <p className="text-gameGold font-black text-[clamp(0.5rem,1vw,0.75rem)] uppercase tracking-[0.3em] whitespace-nowrap text-center">Chief Mentor & Visionary</p>
                        </div>
                     </div>
                  </div>

                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 w-[clamp(6rem,15vh,10rem)] h-[clamp(6rem,15vh,10rem)] hidden xl:flex items-center justify-center z-20 pointer-events-none"
                  >
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                        <text className="text-[7.5px] font-black uppercase tracking-[2px] fill-gameGold opacity-40">
                           <textPath xlinkHref="#circlePath">The Winners' Choice • Mentorship • Excellence • </textPath>
                        </text>
                     </svg>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl rounded-full p-[clamp(0.5rem,1.5vh,1rem)] shadow-2xl border border-white/10">
                        <Star className="text-gameGold fill-gameGold w-[clamp(1rem,2vh,1.5rem)] h-[clamp(1rem,2vh,1.5rem)]" />
                     </div>
                  </motion.div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="lg:w-[55%] relative flex flex-col justify-center"
               >
                  <QuoteIcon size={120} className="absolute -top-[clamp(1.5rem,4vh,4rem)] -left-[clamp(1rem,4vw,4rem)] text-white opacity-[0.03] pointer-events-none w-[clamp(3rem,8vh,6rem)] h-[clamp(3rem,8vh,6rem)]" />
                  
                  <div className="relative z-10">
                     <h3 className="text-[clamp(1.25rem,2.5vw,2.25rem)] font-black text-white leading-[1.15] mb-[clamp(1rem,2vh,2rem)] tracking-tight text-left">
                        Education is not just about learning; it’s about <span className="bg-[linear-gradient(to_top,rgba(242,197,55,0.2)_35%,transparent_35%)] box-decoration-clone px-1">awakening the potential</span> within each student.
                     </h3>

                     <div className="space-y-[clamp(0.75rem,2vh,1.5rem)]">
                        <div className="flex items-start gap-[clamp(0.75rem,2vw,1.5rem)] group">
                           <div className="mt-[clamp(0.25rem,1vh,0.5rem)] w-1.5 h-[clamp(1.5rem,3vh,2.5rem)] bg-gameTeal rounded-full opacity-30 group-hover:opacity-100 transition-opacity shrink-0"></div>
                           <p className="text-[clamp(0.875rem,1.25vw,1.125rem)] text-slate-300 font-medium leading-relaxed text-justify group-hover:text-white transition-colors duration-500">
                              At <span className="text-white font-black">GAME</span>, we don’t just teach; we <span className="text-gameGold font-black underline decoration-gameTeal/50 decoration-4 underline-offset-4 text-white whitespace-nowrap">empower, inspire, and guide</span> our students to become the best versions of themselves.
                           </p>
                        </div>

                        <div className="flex items-start gap-[clamp(0.75rem,2vw,1.5rem)] group">
                           <div className="mt-[clamp(0.25rem,1vh,0.5rem)] w-1.5 h-[clamp(1.5rem,3vh,2.5rem)] bg-gameGold rounded-full opacity-30 group-hover:opacity-100 transition-opacity shrink-0"></div>
                           <p className="text-[clamp(0.875rem,1.25vw,1.125rem)] text-slate-300 font-medium leading-relaxed text-justify group-hover:text-white transition-colors duration-500">
                              My mission is simple: to help you <span className="text-white font-black whitespace-nowrap">unlock your dreams</span>, and show you that success isn’t a destination, but a journey we walk together.
                           </p>
                        </div>
                     </div>

                     <div className="mt-[clamp(1rem,3vh,2rem)] flex flex-col md:flex-row items-center md:items-end gap-[clamp(0.75rem,2vh,1.5rem)] pt-[clamp(0.75rem,2vh,1.5rem)] border-t border-white/10">
                        <div className="flex items-center gap-[clamp(0.5rem,1.5vw,1rem)]">
                           <div className="w-[clamp(2rem,4vw,4rem)] h-1 bg-gameGold rounded-full"></div>
                           <div>
                              <h4 className="text-[clamp(1.125rem,1.75vw,1.375rem)] font-black text-white leading-none mb-1 whitespace-nowrap">Gaurav Babu Sir</h4>
                              <p className="text-[clamp(0.5rem,0.75vw,0.625rem)] font-black text-slate-500 uppercase tracking-[0.4em] whitespace-nowrap">Founder & Mentor</p>
                           </div>
                        </div>
                        <div className="md:ml-auto opacity-20 group-hover:opacity-40 transition-opacity">
                           <Mic2 className="text-gameTeal w-[clamp(1.5rem,3vh,2rem)] h-[clamp(1.5rem,3vh,2rem)]" strokeWidth={1} />
                        </div>
                     </div>
                  </div>

                  <div className="absolute -bottom-[clamp(1.5rem,4vh,3rem)] -right-[clamp(1rem,4vw,3rem)] opacity-[0.02] transform rotate-180 pointer-events-none">
                     <QuoteIcon className="text-gameTeal w-[clamp(6rem,15vh,10rem)] h-[clamp(6rem,15vh,10rem)]" />
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* SECTION 5: OUR APPROACH - DYNAMIC JOURNEY ROADMAP */}
      <section className="relative py-12 lg:py-16 flex flex-col justify-center bg-slate-50 overflow-hidden border-y border-slate-100">
         <div className="absolute inset-0 bg-graph-paper opacity-[0.03] pointer-events-none"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full">
            {/* Main Title */}
            <motion.div {...fadeInUp} className="text-center mb-[clamp(1.5rem,4vh,3rem)]">
               <h2 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-black text-slate-900 tracking-tight leading-tight">
                  Your Path to <span className="text-gameTeal whitespace-nowrap">Engineering Mastery</span>
               </h2>
               <p className="text-slate-500 font-bold uppercase tracking-widest text-[clamp(0.65rem,0.9vw,0.75rem)] mt-[clamp(0.25rem,0.5vh,0.5rem)] italic">A Systematic Roadmap for Competitive Success</p>
               <div className="w-[clamp(3rem,6vw,5rem)] h-1.5 bg-gameGold mx-auto mt-[clamp(0.75rem,1.5vh,1rem)] rounded-full"></div>
            </motion.div>

            <div className="relative">
               {/* ROADMAP WEAVING SVG LINE */}
               <div className="hidden lg:block absolute top-[clamp(1.5rem,4vh,3.5rem)] left-0 w-full z-0 pointer-events-none">
                  <svg width="100%" height="160" viewBox="0 0 1200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="overflow-visible">
                    {/* Background Static Path */}
                    <path 
                      d="M150 80 C 225 80, 225 140, 300 140 S 375 80, 450 80 S 525 20, 600 20 S 675 80, 750 80 S 825 140, 900 140 S 975 80, 1050 80" 
                      stroke="#075d63" 
                      strokeWidth="2" 
                      strokeDasharray="8 8" 
                      className="opacity-10" 
                    />
                    
                    {/* Progress Path Animation */}
                    <motion.path 
                       d="M150 80 C 225 80, 225 140, 300 140 S 375 80, 450 80 S 525 20, 600 20 S 675 80, 750 80 S 825 140, 900 140 S 975 80, 1050 80" 
                       stroke="url(#pathGradient)" 
                       strokeWidth="4" 
                       strokeDasharray="15 25" 
                       initial={{ strokeDashoffset: 1000 }}
                       animate={{ strokeDashoffset: 0 }}
                       transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                       strokeLinecap="round"
                    />
                    
                    <defs>
                      <linearGradient id="pathGradient" x1="0" y1="80" x2="1200" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#075d63" />
                        <stop offset="0.5" stopColor="#f2c537" />
                        <stop offset="1" stopColor="#075d63" />
                      </linearGradient>
                    </defs>
                  </svg>
               </div>

               {/* STEPS GRID - Positioned relative to SVG nodes */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(0.75rem,1.5vw,1.5rem)] relative z-10 items-start">
                  {approachSteps.map((step, idx) => (
                    <motion.div 
                      key={step.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className={`flex flex-col items-center group ${idx === 1 ? 'lg:mt-[clamp(1.5rem,4vh,3rem)]' : idx === 3 ? 'lg:mt-[clamp(1.5rem,4vh,3rem)]' : ''}`}
                    >
                       {/* Floating Step Label */}
                       <div className="bg-white border-2 border-slate-100 shadow-sm rounded-full px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.2rem,0.4vh,0.3rem)] text-[clamp(0.6rem,0.75vw,0.75rem)] font-black text-slate-400 mb-[clamp(0.5rem,1.5vh,1rem)] group-hover:text-gameTeal group-hover:border-gameTeal transition-all uppercase tracking-[0.2em] scale-105 whitespace-nowrap">
                          {step.label}
                       </div>

                       {/* Interactive Node */}
                       <div className="relative mb-[clamp(0.75rem,2vh,1.5rem)]">
                          {/* Inner Circle */}
                          <div className={`w-[clamp(4rem,8vh,6rem)] h-[clamp(4rem,8vh,6rem)] rounded-full bg-white shadow-2xl flex items-center justify-center relative z-20 border-4 border-slate-50 group-hover:border-gameTeal transition-all duration-500 overflow-hidden`}>
                             <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${step.color}`}></div>
                             <step.icon className="w-[clamp(1.25rem,3vh,2.5rem)] h-[clamp(1.25rem,3vh,2.5rem)] text-slate-800 group-hover:text-gameTeal transition-colors group-hover:scale-110 duration-500" strokeWidth={1.5} />
                          </div>
                          
                          {/* Pulse Effect Around Node */}
                          <div className={`absolute inset-0 rounded-full border-2 ${idx % 2 === 0 ? 'border-gameTeal/20' : 'border-gameGold/20'} animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`}></div>
                          
                          {/* Step Number Badge */}
                          <div className="absolute -top-2 -right-2 w-[clamp(1.25rem,3vh,2rem)] h-[clamp(1.25rem,3vh,2rem)] bg-gameBlack rounded-full border-4 border-white flex items-center justify-center text-white text-[clamp(0.65rem,0.9vw,0.8rem)] font-black shadow-lg group-hover:bg-gameGold group-hover:text-black transition-all z-30">
                             0{step.id}
                          </div>
                       </div>

                       {/* Content Display Card */}
                       <div className="bg-white p-[clamp(0.75rem,1.5vh,1.5rem)] rounded-[clamp(1.25rem,2.5vh,2.5rem)] shadow-xl border border-slate-100 text-center w-full min-h-[clamp(130px,20vh,180px)] flex flex-col group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden group-hover:-translate-y-2">
                          <div className={`absolute top-0 left-0 w-full h-1.5 ${idx % 2 === 0 ? 'bg-gameTeal' : 'bg-gameGold'} opacity-40`}></div>
                          
                          <h4 className="text-[clamp(0.875rem,1.25vw,1.25rem)] font-black text-slate-900 mb-[clamp(0.25rem,0.5vh,0.75rem)] leading-tight uppercase tracking-tight">
                             {step.title}
                          </h4>
                          <p className="text-slate-600 text-[clamp(0.7rem,0.9vw,1rem)] font-bold leading-relaxed">
                             {step.desc}
                          </p>
                          
                          <div className="mt-auto pt-[clamp(0.5rem,1.5vh,1rem)] flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <span className="text-[clamp(0.45rem,0.6vw,0.55rem)] font-black text-gameTeal uppercase tracking-widest whitespace-nowrap">Master this stage</span>
                             <ChevronRight size={14} className="text-gameGold" />
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* PLACEMENT LOGO SLIDER - SMALL SECTION WITH THE SPECIFIED DARK TEAL COLOR */}
      <div className="py-12 bg-gameTeal border-y border-white/5 relative overflow-hidden" onMouseEnter={() => setIsMarqueePaused(true)} onMouseLeave={() => setIsMarqueePaused(false)}>
        <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 mb-8">
           <div className="flex items-center gap-4">
              <div className="h-px bg-white/10 flex-grow"></div>
              <span className="text-[10px] font-black text-gameGold uppercase tracking-[0.6em] whitespace-nowrap drop-shadow-[0_0_10px_rgba(242,197,55,0.3)]">Our Achievers Are Placed In</span>
              <div className="h-px bg-white/10 flex-grow"></div>
           </div>
        </div>
        <div className="flex overflow-hidden group">
          <motion.div 
            className="flex items-center gap-16 whitespace-nowrap px-8"
            animate={{ x: isMarqueePaused ? undefined : ["0%", "-50%"] }}
            transition={{ 
              x: {
                duration: 40, 
                repeat: Infinity, 
                ease: "linear",
              }
            }}
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                {["ONGC", "ISRO", "NTPC", "BARC", "DRDO", "L&T", "BHEL", "TATA PROJECTS", "SAIL", "GAIL", "IOCL", "BPCL", "CIL", "BEL", "NHAI", "RVNL"].map((company) => (
                  <span key={company} className="text-xl md:text-3xl font-black text-white/20 hover:text-gameGold transition-all duration-300 cursor-default tracking-tighter select-none uppercase">
                    {company}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
        {/* Subtle Blur Edge Overlays matching the Teal background */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gameTeal to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gameTeal to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* SECTION 6: MISSION & VISION - TYPOGRAPHY-FIRST REDESIGN (OUT-OF-THE-BOX) */}
      <section className="relative py-24 lg:py-32 flex flex-col justify-center bg-white overflow-hidden">
         {/* Subtle Background Ambience */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gameTeal/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full">
            {/* MISSION BLOCK */}
            <div className="flex flex-col lg:flex-row items-center gap-[clamp(1.5rem,3vh,3rem)] lg:gap-[clamp(2rem,4vw,5rem)] mb-[clamp(1.5rem,4vh,3rem)] relative">
               <div className="absolute -top-[clamp(2rem,6vh,5rem)] -left-[clamp(1rem,2vw,2.5rem)] text-[clamp(8rem,20vh,20rem)] font-black text-slate-50 pointer-events-none -z-10 leading-none">01</div>
               <motion.div {...fadeInUp} className="lg:w-[40%] shrink-0">
                  <div className="w-[clamp(3rem,6vw,5rem)] h-1.5 bg-gameTeal mb-[clamp(1rem,2vh,2rem)] rounded-full"></div>
                  <div className="inline-flex items-center gap-2 px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.25rem,0.5vh,0.375rem)] rounded-full bg-teal-50 border border-teal-100 text-gameTeal font-black text-[clamp(0.5rem,0.7vw,0.625rem)] uppercase tracking-[0.3em] mb-[clamp(0.75rem,1.5vh,1.5rem)]">
                     <Rocket size={12} className="animate-pulse" /> OUR IMPACT
                  </div>
                  <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 tracking-tighter mb-[clamp(1rem,2vh,2rem)] text-balance leading-none">Our Mission</h2>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:w-[60%]">
                  <div className="relative pl-[clamp(1.5rem,3vw,2.5rem)] border-l-4 border-gameGold py-[clamp(0.5rem,1vh,1rem)]">
                     <QuoteIcon className="absolute -top-[clamp(1rem,3vh,2.5rem)] -left-[clamp(0.75rem,1.5vw,1.5rem)] text-gameTeal/10 w-[clamp(3rem,8vh,3.75rem)] h-[clamp(3rem,8vh,3.75rem)]" />
                     <p className="text-[clamp(1.125rem,2vw,1.875rem)] text-slate-800 font-bold leading-[1.4] italic mb-[clamp(1rem,2vh,2rem)] text-balance">
                        We are committed to a community of <span className="text-gameTeal underline decoration-gameGold/40 decoration-4 underline-offset-4 not-italic">dreamers, achievers, and future leaders.</span>
                     </p>
                     <p className="text-[clamp(0.875rem,1.2vw,1.25rem)] text-slate-600 font-medium leading-relaxed text-balance">
                        Our students are part of a vibrant, thriving network that fosters collaboration, growth, and support. The energy here is unmatched—students push each other, learn together, and rise together.
                     </p>
                  </div>
               </motion.div>
            </div>

            {/* VISION BLOCK */}
            <div className="flex flex-col lg:flex-row items-center gap-[clamp(1.5rem,3vh,3rem)] lg:gap-[clamp(2rem,4vw,5rem)] mb-[clamp(1.5rem,4vh,3rem)] relative">
               <div className="absolute -top-[clamp(2rem,6vh,5rem)] -left-[clamp(1rem,2vw,2.5rem)] text-[clamp(8rem,20vh,20rem)] font-black text-slate-50 pointer-events-none -z-10 leading-none">02</div>
               <motion.div {...fadeInUp} className="lg:w-[40%] shrink-0">
                  <div className="w-[clamp(3rem,6vw,5rem)] h-1.5 bg-gameGold mb-[clamp(1rem,2vh,2rem)] rounded-full"></div>
                  <div className="inline-flex items-center gap-2 px-[clamp(0.5rem,1vw,1rem)] py-[clamp(0.25rem,0.5vh,0.375rem)] rounded-full bg-amber-50 border border-amber-100 text-gameGoldDark font-black text-[clamp(0.5rem,0.7vw,0.625rem)] uppercase tracking-[0.3em] mb-[clamp(0.75rem,1.5vh,1.5rem)]">
                     <Target size={12} /> THE BLUEPRINT
                  </div>
                  <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-slate-900 tracking-tighter mb-[clamp(1rem,2vh,2rem)] text-balance leading-none">Our Vision</h2>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="lg:w-[60%]">
                  <div className="relative pl-[clamp(1.5rem,3vw,2.5rem)] border-l-4 border-gameGold py-[clamp(0.5rem,1vh,1rem)]">
                     <p className="text-[clamp(1.125rem,2vw,1.875rem)] text-slate-800 font-bold leading-[1.4] italic mb-[clamp(1rem,2vh,2rem)] text-balance">
                        GAME was built on the belief that <span className="text-gameGoldDark not-italic">education</span> should be a catalyst for change.
                     </p>
                     <p className="text-[clamp(0.875rem,1.2vw,1.25rem)] text-slate-600 font-medium leading-relaxed text-balance">
                        We don’t just aim to help our students pass exams – we aim to empower them with the skills, knowledge, and mindset they need to excel in life. We focus on building strong foundations in problem-solving, critical thinking, and resilience through higher levels of excellence.
                     </p>
                     <div className="absolute bottom-4 right-0 opacity-[0.03] transform pointer-events-none -z-10"><Eye className="text-slate-900 w-[clamp(8rem,20vh,15.625rem)] h-[clamp(8rem,20vh,15.625rem)]" /></div>
                  </div>
               </motion.div>
            </div>

            {/* TYPOGRAPHIC CENTERPIECE: THE GAME PROMISE - REDUCED SIZE AND LINE COUNT */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative pt-[clamp(1rem,3vh,3rem)] flex flex-col items-center"
            >
               {/* Decorative Ambient Background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[clamp(10rem,30vh,24rem)] bg-gameTeal/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
               <Sparkles className="absolute top-0 right-10 text-gameGold/5 pointer-events-none w-[clamp(4rem,10vh,7.5rem)] h-[clamp(4rem,10vh,7.5rem)]" />
               <Sparkles className="absolute bottom-0 left-10 text-gameTeal/5 pointer-events-none w-[clamp(3rem,8vh,5rem)] h-[clamp(3rem,8vh,5rem)]" />
               
               <div className="relative z-10 max-w-5xl text-center flex flex-col items-center">
                  <p className="text-[clamp(1rem,2vw,2.25rem)] font-extrabold text-slate-800 leading-snug tracking-tight mb-[clamp(1.5rem,4vh,3rem)] italic px-4 max-w-4xl mx-auto">
                     “At <span className="text-gameTeal">GAME</span>, every exam is an opportunity to develop the <span className="text-gameGoldDark underline decoration-gameGold/40 decoration-4 underline-offset-8 not-italic whitespace-nowrap">mindset and skills</span> for life’s challenges. From study plans to <span className="text-gameTeal whitespace-nowrap">one-on-one mentorship</span>, we are here for every step.”
                  </p>

                  <div className="flex items-center gap-[clamp(1rem,3vw,3rem)] w-full max-w-4xl">
                     <div className="h-px bg-slate-200 flex-grow"></div>
                     <span className="text-[clamp(0.5rem,0.8vw,0.75rem)] font-black text-slate-400 uppercase tracking-[0.8em] whitespace-nowrap">THE GAME PROMISE</span>
                     <div className="h-px bg-slate-200 flex-grow"></div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* SECTION 7: VISIONARY LEADERSHIP & IMPACT (Collate Layout from Screenshot) */}
      <section id="leadership" className="relative py-24 lg:py-32 flex flex-col justify-center bg-gameBlack overflow-hidden text-white border-t border-white/5">
         {/* Noise and Gradient Overlays */}
         <div className="absolute inset-0 bg-noise opacity-[0.02]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(7,93,99,0.08)_0%,transparent_70%)]"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 w-full">
            {/* Section Header */}
            <div className="text-center mb-[clamp(1.5rem,4vh,4rem)] max-w-4xl mx-auto">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gameGold text-[clamp(0.5rem,0.7vw,0.625rem)] font-black uppercase tracking-widest mb-[clamp(1rem,2vh,1.5rem)]">
                     <Rocket size={12} className="fill-gameGold" /> The Architect of Ambition
                  </div>
                  <h2 className="text-[clamp(2rem,4vw,3.75rem)] font-black mb-[clamp(1rem,2vh,1.5rem)] leading-tight tracking-tight whitespace-nowrap">
                     Visionary Leadership <span className="text-gameTeal">& Impact</span>
                  </h2>
                  <p className="text-slate-400 text-[clamp(0.875rem,1.2vw,1.125rem)] font-medium leading-relaxed opacity-80 max-w-3xl mx-auto">
                     Gaurav Babu Sir, teaching for 13+ years, is the visionary founder of GAME Academy. Renowned for his visualized teaching protocols, he has mentored over one lakh students. Under his leadership, GAME was established in 2021 to provide elite coaching for engineering aspirants across the nation.
                  </p>
               </motion.div>
            </div>

            {/* Collage Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(0.75rem,2vh,1.5rem)] items-stretch">
               
               {/* Left Column (2 Cards) */}
               <div className="md:col-span-3 flex flex-col gap-[clamp(0.75rem,2vh,1.5rem)]">
                  <motion.div 
                     initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="bg-white/5 border border-white/10 p-[clamp(1rem,2vh,1.5rem)] rounded-[clamp(1.5rem,3vh,2rem)] flex-1 flex flex-col justify-between hover:bg-white/[0.08] transition-all group"
                  >
                     <div className="w-[clamp(2.5rem,5vh,3.5rem)] h-[clamp(2.5rem,5vh,3.5rem)] rounded-[clamp(0.5rem,1vh,0.75rem)] bg-gameTeal/20 text-gameTeal flex items-center justify-center mb-[clamp(1rem,2vh,1.5rem)]">
                        <Landmark className="w-[clamp(1.25rem,2.5vh,1.75rem)] h-[clamp(1.25rem,2.5vh,1.75rem)]" />
                     </div>
                     <div>
                        <p className="text-gameGold text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest mb-1 opacity-60">01</p>
                        <h4 className="text-[clamp(1rem,1.5vw,1.25rem)] font-black uppercase leading-tight mb-1 group-hover:text-gameGold transition-colors">Successful<br />Entrepreneur</h4>
                        <p className="text-[clamp(0.5rem,0.7vw,0.625rem)] text-slate-400 font-bold leading-relaxed">& Founder of GAME Academy</p>
                     </div>
                  </motion.div>
                  <motion.div 
                     initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                     className="bg-white/5 border border-white/10 p-[clamp(1rem,2vh,1.5rem)] rounded-[clamp(1.5rem,3vh,2rem)] flex-1 flex flex-col justify-between hover:bg-white/[0.08] transition-all group"
                  >
                     <div className="w-[clamp(2.5rem,5vh,3.5rem)] h-[clamp(2.5rem,5vh,3.5rem)] rounded-[clamp(0.5rem,1vh,0.75rem)] bg-gameGold/20 text-gameGold flex items-center justify-center mb-[clamp(1rem,2vh,1.5rem)]">
                        <Users className="w-[clamp(1.25rem,2.5vh,1.75rem)] h-[clamp(1.25rem,2.5vh,1.75rem)]" />
                     </div>
                     <div>
                        <p className="text-gameGold text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest mb-1 opacity-60">02</p>
                        <h4 className="text-[clamp(1rem,1.5vw,1.25rem)] font-black uppercase leading-tight mb-1 group-hover:text-gameGold transition-colors">Mentored<br />1 Lakh+</h4>
                        <p className="text-[clamp(0.5rem,0.7vw,0.625rem)] text-slate-400 font-bold leading-relaxed">Students Nationwide</p>
                     </div>
                  </motion.div>
               </div>

               {/* Center Column (Portrait Image) */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  className="md:col-span-6 relative h-full min-h-[clamp(200px,30vh,400px)]"
               >
                  <div className="absolute inset-0 rounded-[clamp(1.5rem,4vh,2.5rem)] overflow-hidden border border-white/10 shadow-2xl">
                     <Image 
                        src="/images/faculty/gaurav-leader.png" 
                        alt="Gaurav Babu Sir" 
                        fill
                        unoptimized
                        className="w-full h-full object-cover grayscale-[15%] brightness-90 group-hover:brightness-100 transition-all duration-700" 
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Overlay Content on Image */}
                  <div className="absolute bottom-[clamp(1rem,3vh,2rem)] left-1/2 -translate-x-1/2 w-full px-[clamp(1rem,3vw,2rem)] text-center z-10">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-gameGold text-black text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest rounded-full mb-[clamp(0.5rem,1.5vh,1rem)] shadow-xl">
                        <Sparkles size={10} className="fill-current" /> 04: The Anchor
                     </div>
                     <h3 className="text-[clamp(1.5rem,3vw,3rem)] font-black tracking-tight mb-1 whitespace-nowrap">GAURAV BABU SIR</h3>
                     <p className="text-gameTeal font-black text-[clamp(0.5rem,0.7vw,0.625rem)] uppercase tracking-[0.4em] opacity-90 whitespace-nowrap">Founder & Visionary</p>
                  </div>
               </motion.div>

               {/* Right Column (2 Cards) */}
               <div className="md:col-span-3 flex flex-col gap-[clamp(0.75rem,2vh,1.5rem)]">
                  <motion.div 
                     initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                     className="bg-white/5 border border-white/10 p-[clamp(1rem,2vh,1.5rem)] rounded-[clamp(1.5rem,3vh,2rem)] flex-1 flex flex-col justify-between hover:bg-white/[0.08] transition-all group"
                  >
                     <div className="w-[clamp(2.5rem,5vh,3.5rem)] h-[clamp(2.5rem,5vh,3.5rem)] rounded-[clamp(0.5rem,1vh,0.75rem)] bg-gameTeal/20 text-gameTeal flex items-center justify-center mb-[clamp(1rem,2vh,1.5rem)]">
                        <Mic2 className="w-[clamp(1.25rem,2.5vh,1.75rem)] h-[clamp(1.25rem,2.5vh,1.75rem)]" />
                     </div>
                     <div>
                        <p className="text-gameGold text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest mb-1 opacity-60">03</p>
                        <h4 className="text-[clamp(1rem,1.5vw,1.25rem)] font-black uppercase leading-tight mb-1 group-hover:text-gameGold transition-colors">Motivational<br />Speaker</h4>
                        <p className="text-[clamp(0.5rem,0.7vw,0.625rem)] text-slate-400 font-bold leading-relaxed">& Life Coach</p>
                     </div>
                  </motion.div>
                  <motion.div 
                     initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                     className="bg-white/5 border border-white/10 p-[clamp(1rem,2vh,1.5rem)] rounded-[clamp(1.5rem,3vh,2rem)] flex-1 flex flex-col justify-between hover:bg-white/[0.08] transition-all group"
                  >
                     <div className="w-[clamp(2.5rem,5vh,3.5rem)] h-[clamp(2.5rem,5vh,3.5rem)] rounded-[clamp(0.5rem,1vh,0.75rem)] bg-gameGold/20 text-gameGold flex items-center justify-center mb-[clamp(1rem,2vh,1.5rem)]">
                        <UserCheck className="w-[clamp(1.25rem,2.5vh,1.75rem)] h-[clamp(1.25rem,2.5vh,1.75rem)]" />
                     </div>
                     <div>
                        <p className="text-gameGold text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest mb-1 opacity-60">05</p>
                        <h4 className="text-[clamp(1rem,1.5vw,1.25rem)] font-black uppercase leading-tight mb-1 group-hover:text-gameGold transition-colors">Renowned<br />Educator</h4>
                        <p className="text-[clamp(0.5rem,0.7vw,0.625rem)] text-slate-400 font-bold leading-relaxed">Mechanical & Civil Domain</p>
                     </div>
                  </motion.div>
               </div>

               {/* Bottom Full-Width Row (2 Horizontal Cards) */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  className="md:col-span-6 bg-white/5 border border-white/10 p-[clamp(1.5rem,3vh,2rem)] rounded-[clamp(1.5rem,4vh,2.5rem)] flex items-center gap-[clamp(1rem,2vw,2rem)] hover:bg-white/[0.08] transition-all group"
               >
                  <div className="w-[clamp(3.5rem,7vh,5rem)] h-[clamp(3.5rem,7vh,5rem)] rounded-[clamp(0.75rem,1.5vh,1rem)] bg-gameTeal/20 text-gameTeal flex items-center justify-center shrink-0">
                     <Trophy className="w-[clamp(1.5rem,3vh,2.5rem)] h-[clamp(1.5rem,3vh,2.5rem)]" />
                  </div>
                  <div>
                     <p className="text-gameGold text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest mb-1 opacity-60">06</p>
                     <h4 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black uppercase leading-none mb-1 group-hover:text-gameGold transition-colors">Guiding<br />Officers</h4>
                     <p className="text-[clamp(0.6rem,0.8vw,0.75rem)] text-slate-400 font-bold leading-relaxed">IAS, ESE & Class-1 Officers</p>
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                  className="md:col-span-6 bg-[#075d63]/10 border border-gameTeal/20 p-[clamp(1.5rem,3vh,2rem)] rounded-[clamp(1.5rem,4vh,2.5rem)] flex items-center gap-[clamp(1rem,2vw,2rem)] hover:bg-[#075d63]/20 transition-all group"
               >
                  <div className="w-[clamp(3.5rem,7vh,5rem)] h-[clamp(3.5rem,7vh,5rem)] rounded-[clamp(0.75rem,1.5vh,1rem)] bg-gameGold/20 text-gameGold flex items-center justify-center shrink-0 shadow-lg">
                     <Medal className="w-[clamp(1.5rem,3vh,2.5rem)] h-[clamp(1.5rem,3vh,2.5rem)]" />
                  </div>
                  <div className="flex-1">
                     <p className="text-gameGold text-[clamp(0.4rem,0.6vw,0.5rem)] font-black uppercase tracking-widest mb-1">07: Elite Selections</p>
                     <h4 className="text-[clamp(1.25rem,2vw,1.5rem)] font-black uppercase leading-none mb-1">Cracked<br />GATE, ESE</h4>
                     <p className="text-[clamp(0.5rem,0.7vw,0.625rem)] text-teal-100 font-medium leading-relaxed opacity-70">
                        Cracked GATE, ESE and many other technical exams & selection process of premier PSUs like IOCL, BPCL and Ministry of Defence.
                     </p>
                  </div>
               </motion.div>

            </div>

            {/* Bottom Button */}
            <div className="mt-[clamp(1.5rem,4vh,4rem)] text-center">
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-gameBlack px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(0.75rem,1.5vh,1rem)] rounded-xl font-black text-[clamp(0.5rem,0.7vw,0.625rem)] uppercase tracking-[0.3em] flex items-center gap-3 mx-auto shadow-2xl hover:bg-gameGold transition-all whitespace-nowrap"
               >
                  Full Career Chronicle <ChevronRight size={16} />
               </motion.button>
            </div>
         </div>
      </section>

      <FacultyShowcase />

      {/* SECTION 8: EDUCATORS - SPOTLIGHT & CAROUSEL REDESIGN */}
      <section className="relative py-8 lg:py-10 flex flex-col justify-center bg-[#0b0c10] overflow-hidden border-t border-white/5">
         <div className="absolute inset-0 bg-graph-paper opacity-[0.03] pointer-events-none invert"></div>
         <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10 w-full">
            
            {/* Header Area */}
            <div className="text-center mb-6 lg:mb-8">
               <motion.div {...fadeInUp}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameTeal/20 border border-gameTeal/30 text-gameTeal font-black text-[10px] uppercase tracking-widest mb-2 whitespace-nowrap">
                     OUR EDUCATORS
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                     Qualified Expertise <br/> <span className="text-gameGold">& Industry Recognition</span>
                  </h2>
                  <p className="text-slate-400 text-sm font-bold max-w-3xl mx-auto leading-relaxed opacity-80">
                     Our highly qualified and experienced faculty members use innovative teaching methods and technology to deliver quality education.
                  </p>
                  <div className="w-12 h-1 bg-gameGold mx-auto rounded-full mt-4"></div>
               </motion.div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch">
               
               {/* CHIEF MENTOR SPOTLIGHT (40%) */}
               <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedFaculty(chiefMentor)}
                  className="lg:w-[40%] bg-gradient-to-br from-[#1a1c25] to-[#12141c] rounded-3xl overflow-hidden border-2 border-gameGold/20 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] group cursor-pointer relative"
               >
                  <div className="absolute top-4 right-4 z-20">
                     <div className="bg-gameGold text-black px-3 py-1 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                        CHIEF MENTOR
                     </div>
                  </div>

                  <div className="h-[280px] lg:h-[340px] relative overflow-hidden">
                     <Image 
                        src={chiefMentor.img} 
                        alt={chiefMentor.name} 
                        fill
                        unoptimized
                        className="object-cover transition-all duration-1000 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-90"></div>
                     
                     <div className="absolute bottom-4 left-6 right-6">
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-gameGold/20 border border-gameGold/30 rounded-lg mb-2">
                           <Sparkles size={12} className="text-gameGold" />
                           <span className="text-gameGold font-black text-[10px] uppercase tracking-widest">{chiefMentor.expLabel}</span>
                        </div>
                        <h3 className="text-2xl font-black text-white mb-1 leading-none tracking-tighter group-hover:text-gameGold transition-colors">
                           {chiefMentor.name}
                        </h3>
                        <p className="text-gameTeal font-black text-[10px] uppercase tracking-widest">{chiefMentor.role}</p>
                     </div>
                  </div>

                  <div className="p-4 lg:p-5 border-t border-white/5">
                     <p className="text-slate-400 text-xs font-bold leading-relaxed italic mb-4">
                        "Redefining engineering education through visualized teaching and life-changing mentorship."
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="bg-gameGold text-black px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg group-hover:bg-white transition-all">
                           View Vision
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gameGold group-hover:text-black transition-all shrink-0">
                           <ChevronRight className="w-4 h-4" strokeWidth={3} />
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* FACULTY CAROUSEL (60%) */}
               <div className="lg:w-[60%] flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                     <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-3">
                        <Users className="text-gameTeal w-4 h-4" /> Expert Faculty Team
                     </h4>
                     <div className="flex gap-2">
                        <button 
                           onClick={() => setFacultySlide(prev => Math.max(0, prev - 1))}
                           disabled={facultySlide === 0}
                           className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border shrink-0 ${facultySlide === 0 ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed' : 'bg-white/10 text-white border-white/10 hover:bg-gameTeal hover:border-gameTeal'}`}
                        >
                           <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button 
                           onClick={() => setFacultySlide(prev => Math.min(Math.ceil(facultyMembers.length / 2) - 1, prev + 1))}
                           disabled={facultySlide >= Math.ceil(facultyMembers.length / 2) - 1}
                           className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border shrink-0 ${facultySlide >= Math.ceil(facultyMembers.length / 2) - 1 ? 'bg-white/5 text-white/20 border-white/5 cursor-not-allowed' : 'bg-white/10 text-white border-white/10 hover:bg-gameTeal hover:border-gameTeal'}`}
                        >
                           <ChevronRight className="w-4 h-4" />
                        </button>
                     </div>
                  </div>

                  <div className="relative overflow-hidden flex-1">
                     <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
                        initial={false}
                        animate={{ x: 0 }}
                        key={facultySlide}
                     >
                        <AnimatePresence mode="wait">
                           {facultyMembers.slice(facultySlide * 2, facultySlide * 2 + 2).map((fac, i) => (
                              <motion.div 
                                 key={fac.name} 
                                 initial={{ opacity: 0, x: 20 }} 
                                 animate={{ opacity: 1, x: 0 }} 
                                 exit={{ opacity: 0, x: -20 }}
                                 transition={{ delay: i * 0.1 }}
                                 onClick={() => setSelectedFaculty(fac)}
                                 className="bg-[#12141c] rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col group hover:border-gameTeal/30 transition-all duration-500 cursor-pointer h-full"
                              >
                                 <div className="h-[160px] lg:h-[200px] relative overflow-hidden bg-[#0a0a0a]">
                                    <Image 
                                       src={fac.img} 
                                       alt={fac.name} 
                                       fill
                                       unoptimized
                                       className="object-cover transition-all duration-700 group-hover:scale-105" 
                                       referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141c] via-transparent to-transparent opacity-60"></div>
                                 </div>

                                 <div className="p-4 flex-1 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-gameTeal/10 border border-gameTeal/20 rounded-lg mb-2 w-fit">
                                       <Sparkles size={12} className="text-gameTeal" />
                                       <span className="text-gameTeal font-black text-[9px] uppercase tracking-widest">{fac.expLabel}</span>
                                    </div>
                                    <h4 className="text-lg font-black text-white mb-0.5 leading-tight group-hover:text-gameTeal transition-colors">
                                       {fac.name}
                                    </h4>
                                    <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest mb-4">{fac.role}</p>
                                    
                                    <div className="mt-auto flex items-center gap-3">
                                       <div className="bg-white/5 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 group-hover:bg-gameTeal group-hover:border-gameTeal transition-all">
                                          View Profile
                                       </div>
                                       <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-gameTeal transition-all shrink-0">
                                          <ChevronRight className="w-4 h-4" strokeWidth={3} />
                                       </div>
                                    </div>
                                 </div>
                              </motion.div>
                           ))}
                        </AnimatePresence>
                     </motion.div>
                  </div>

                  {/* Carousel Progress Bar */}
                  <div className="mt-4 flex items-center gap-4">
                     <div className="h-1 bg-white/10 flex-grow rounded-full overflow-hidden">
                        <motion.div 
                           className="h-full bg-gameTeal"
                           initial={{ width: "0%" }}
                           animate={{ width: `${((facultySlide + 1) / Math.ceil(facultyMembers.length / 2)) * 100}%` }}
                        />
                     </div>
                     <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">
                        {facultySlide + 1} / {Math.ceil(facultyMembers.length / 2)}
                     </span>
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* EDUCATOR MODAL - OPTIMIZED FOR ZERO-SCROLL VISIBILITY */}
      <AnimatePresence>
         {selectedFaculty && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/98 backdrop-blur-xl"
               onClick={() => setSelectedFaculty(null)}
            >
               <motion.div 
                  initial={{ scale: 0.9, opacity: 0, y: 40 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 40 }}
                  className="bg-[#12141a] w-full max-w-4xl rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col md:flex-row relative max-h-[90vh] md:max-h-[600px]"
                  onClick={e => e.stopPropagation()}
               >
                  <button 
                     onClick={() => setSelectedFaculty(null)}
                     className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/5 text-white hover:bg-white/20 transition-all border border-white/10"
                  >
                     <X size={24} />
                  </button>

                  {/* Sidebar/Image - Compacted */}
                  <div className="md:w-[40%] h-64 md:h-auto relative overflow-hidden bg-black shrink-0">
                     <Image 
                        src={selectedFaculty.img} 
                        alt={selectedFaculty.name} 
                        fill
                        unoptimized
                        className="object-cover grayscale-[10%]" 
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent"></div>
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-gameGold/10 backdrop-blur-xl border border-gameGold/30 p-4 rounded-2xl">
                          <p className="text-gameGold font-black text-[10px] uppercase tracking-[0.4em]">{selectedFaculty.role}</p>
                        </div>
                     </div>
                  </div>

                  {/* Content Area - Optimized to prevent scrolling */}
                  <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                     <span className="text-gameTeal font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-3 block opacity-70">{selectedFaculty.exp}</span>
                     <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tighter leading-none">{selectedFaculty.name}</h2>
                     
                     <div className="space-y-6">
                        <div>
                           <h4 className="text-slate-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4 flex items-center gap-4">
                              <div className="h-px bg-slate-800 flex-grow"></div>
                              CAREER MILESTONES
                              <div className="h-px bg-slate-800 flex-grow"></div>
                           </h4>
                           {/* COMPACT MILESTONE GRID */}
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {selectedFaculty.stats.map((stat: any, idx: number) => (
                                 <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-white/[0.08] transition-all">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-gameGold shrink-0 shadow-lg">
                                       <stat.icon size={14} />
                                    </div>
                                    <p className="text-slate-200 font-bold text-[11px] lg:text-xs leading-snug">{stat.label}</p>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* FINAL BIO / MESSAGE */}
                        <div className="pt-6 border-t border-white/5">
                           <p className="text-slate-400 font-medium leading-relaxed italic text-sm lg:text-base">
                              "At Gaurav’s Academy for Mentorship & Education, we believe every engineer has the potential to lead. Join us to transform your ambition into national success."
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>

      {/* REASONS SECTION - Interactive Expanding Accordion */}
      <section className="relative py-12 lg:py-16 flex flex-col justify-center bg-white overflow-hidden border-t border-slate-100">
         <div className="max-w-[1400px] mx-auto px-8 md:px-10 lg:px-12 w-full">
            
            {/* Header Section */}
            <div className="text-center mb-[clamp(1.5rem,4vh,3rem)]">
               <motion.div 
                  {...fadeInUp}
                  className="flex flex-col items-center gap-[clamp(0.25rem,0.75vh,0.5rem)]"
               >
                  <span className="text-[clamp(0.5rem,0.7vw,0.625rem)] font-black text-gameGold bg-gameBlack px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.2rem,0.4vh,0.3rem)] rounded-full uppercase tracking-[0.3em] mb-[clamp(0.15rem,0.4vh,0.25rem)] shadow-lg whitespace-nowrap">
                     <Sparkles size={12} className="inline mr-2" /> THE GAME ADVANTAGE
                  </span>
                  <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-black text-slate-900 leading-tight whitespace-nowrap">
                     7 Reasons Why We Are <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal to-teal-500">India&apos;s Leading Choice</span>
                  </h2>
                  <div className="w-[clamp(3rem,6vw,5rem)] h-1.5 bg-gameGold mx-auto mt-[clamp(0.4rem,1vh,0.75rem)] rounded-full"></div>
               </motion.div>
            </div>

            {/* Interactive Infographic - Desktop View (7 Cards) */}
            <div className="hidden lg:flex items-stretch justify-center h-[clamp(350px,50vh,550px)] w-full gap-0 overflow-visible">
               {reasons.map((reason, index) => {
                  const isActive = hoveredReasonIndex === index;
                  
                  // Logic for clip-paths based on 7 cards
                  let clipStyle = "";
                  if (index < 3) {
                     clipStyle = 'polygon(0 0, 100% 6%, 100% 94%, 0% 100%)';
                  } else if (index > 3) {
                     clipStyle = 'polygon(0 6%, 100% 0, 100% 100%, 0% 94%)';
                  } else {
                     clipStyle = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
                  }

                  return (
                     <motion.div
                        key={reason.id}
                        onMouseEnter={() => setHoveredReasonIndex(index)}
                        onMouseLeave={() => setHoveredReasonIndex(3)}
                        className={`
                           relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                           ${isActive ? 'w-[35%] z-30 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)]' : 'w-[10.8%] z-10 opacity-95'}
                           ${reason.color} flex flex-col items-center justify-center p-[clamp(0.75rem,1.5vh,1.25rem)] text-white cursor-pointer
                           border-r border-white/10 last:border-r-0
                        `}
                        style={{
                           clipPath: clipStyle,
                           transform: isActive ? 'scale(1.04)' : 'scale(1)'
                        }}
                     >
                        <div className={`flex flex-col items-center text-center w-full h-full transition-all duration-500 ${isActive ? 'px-[clamp(1rem,2vw,2rem)] justify-center' : 'px-2 justify-center py-[clamp(1rem,2vh,2rem)]'}`}>
                           
                           {/* Icon Container - Only visible when active */}
                           {isActive && (
                              <div className="w-[clamp(2.5rem,5vh,3.5rem)] h-[clamp(2.5rem,5vh,3.5rem)] rounded-2xl bg-white text-gameGold flex items-center justify-center shadow-xl transition-all duration-500 shrink-0 scale-110 mb-[clamp(1rem,2vh,2rem)]">
                                 <reason.icon className="w-[clamp(1.25rem,2.5vh,1.75rem)] h-[clamp(1.25rem,2.5vh,1.75rem)]" strokeWidth={2.5} />
                              </div>
                           )}

                           {/* ACTIVE STATE: Label -> Title -> Desc -> Button */}
                           {isActive && (
                              <motion.div 
                                 initial={{ opacity: 0 }} 
                                 animate={{ opacity: 1 }} 
                                 className="flex flex-col items-center w-full"
                              >
                                 <span className="text-[clamp(0.5rem,0.7vw,0.6rem)] font-black uppercase tracking-[0.4em] text-gameGold mb-[clamp(0.4rem,1vh,0.75rem)] block">
                                    Reason {parseInt(reason.id)}
                                 </span>
                                 <h3 className="font-black uppercase tracking-wider text-[clamp(0.875rem,1.25vw,1.25rem)] mb-[clamp(0.4rem,1vh,0.75rem)] leading-[1.2] text-center w-full mx-auto break-words px-4">
                                    {reason.title}
                                 </h3>
                                 <p className="text-teal-50 text-[clamp(0.7rem,0.9vw,0.875rem)] font-medium leading-relaxed max-w-[340px] mb-[clamp(0.75rem,2vh,1.5rem)]">
                                    {reason.desc}
                                 </p>
                                 <div className="pt-[clamp(0.75rem,1.5vh,1.25rem)] border-t border-white/10 w-full flex justify-center">
                                       <button className="bg-gameGold text-black px-[clamp(1rem,2vw,1.5rem)] py-[clamp(0.4rem,1vh,0.6rem)] rounded-xl text-[clamp(0.5rem,0.7vw,0.6rem)] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-all shadow-2xl group whitespace-nowrap">
                                          Explore <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                       </button>
                                 </div>
                              </motion.div>
                           )}

                           {/* INACTIVE STATE: Vertical Title -> Number */}
                           {!isActive && (
                              <>
                                 <div className="relative h-full flex items-center justify-center">
                                       <h3 className="font-black uppercase tracking-[0.15em] text-[clamp(0.5rem,0.7vw,0.75rem)] text-center leading-tight transform -rotate-90 origin-center opacity-70 whitespace-nowrap">
                                          {reason.title}
                                       </h3>
                                 </div>
                                 <span className="text-[clamp(0.5rem,0.8vw,0.7rem)] font-black uppercase tracking-[0.3em] opacity-40 shrink-0 whitespace-nowrap">
                                    {parseInt(reason.id)}
                                 </span>
                              </>
                           )}
                        </div>

                        {/* Decorative glow line at bottom */}
                        <div className={`absolute bottom-0 left-0 w-full h-2 bg-gameGold transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
                     </motion.div>
                  );
               })}
            </div>

            {/* Mobile View - Standard Stack */}
            <div className="lg:hidden flex flex-col gap-6">
               {reasons.map((reason, index) => (
                  <motion.div
                     key={reason.id}
                     {...fadeInUp}
                     transition={{ delay: index * 0.05 }}
                     className={`${reason.color} p-[clamp(1.5rem,3vh,2.5rem)] rounded-[clamp(1.5rem,3vh,2.5rem)] text-white shadow-xl relative overflow-hidden group`}
                  >
                     <div className="relative z-10 flex items-start gap-[clamp(1rem,2vw,2rem)]">
                        <div className="w-[clamp(2.5rem,5vh,3.5rem)] h-[clamp(2.5rem,5vh,3.5rem)] rounded-[clamp(0.75rem,1.5vh,1rem)] bg-white/10 flex items-center justify-center shrink-0 shadow-lg border border-white/20 group-active:text-gameGold transition-colors">
                           <reason.icon className="w-[clamp(1.25rem,2.5vh,1.875rem)] h-[clamp(1.25rem,2.5vh,1.875rem)]" />
                        </div>
                        <div>
                           <span className="text-[clamp(0.5rem,0.7vw,0.625rem)] font-black uppercase tracking-widest text-gameGold mb-[clamp(0.25rem,0.5vh,0.5rem)] block whitespace-nowrap">Reason {parseInt(reason.id)}</span>
                           <h3 className="text-[clamp(1.125rem,1.5vw,1.25rem)] font-black mb-[clamp(0.5rem,1vh,1rem)] leading-tight">{reason.title}</h3>
                           <p className="text-teal-50/80 text-[clamp(0.875rem,1.2vw,1rem)] font-medium leading-relaxed">{reason.desc}</p>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 lg:py-16 flex flex-col justify-center bg-white overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#075d63] rounded-[clamp(1.5rem,4vw,3rem)] p-[clamp(1.5rem,4vh,3rem)] md:p-[clamp(2rem,6vh,4rem)] text-center relative overflow-hidden shadow-2xl shadow-gameTeal/30">
               <div className="absolute top-0 right-0 w-[clamp(10rem,20vw,18rem)] h-[clamp(10rem,20vw,18rem)] bg-white/5 rounded-full blur-[80px] shadow-inner"></div>
               <div className="absolute bottom-0 left-0 w-[clamp(8rem,15vw,14rem)] h-[clamp(8rem,15vw,14rem)] bg-gameGold/10 rounded-full blur-[60px] shadow-inner"></div>
               <div className="relative z-10">
                  <h2 className="text-[clamp(1.5rem,4vw,3.5rem)] md:text-[clamp(2rem,5vw,4.5rem)] lg:text-[clamp(2.5rem,6vw,5rem)] font-black text-white mb-[clamp(0.75rem,2vh,1.5rem)] leading-[1.1] tracking-tight whitespace-nowrap">Join <span className="text-gameGold">100,000+</span> Learners <br/> and Start Your Journey Today</h2>
                  <p className="text-teal-50 text-[clamp(0.875rem,1.25vw,1.125rem)] font-medium max-w-2xl mx-auto mb-[clamp(1.5rem,4vh,3rem)] opacity-90 leading-relaxed">Don&apos;t just track exams. Master them with Gaurav Babu Sir&apos;s mentorship. India&apos;s #1 Technical Prep Community is waiting for you.</p>
                  <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,1.5vw,1rem)] justify-center">
                     <a href="https://wa.me/917668518602" target="_blank" rel="noopener noreferrer" className="bg-white text-[#075d63] px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.75rem,1.5vh,1rem)] rounded-2xl font-black uppercase tracking-widest text-[clamp(0.7rem,0.8vw,0.8rem)] hover:bg-gameGold hover:text-black transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 whitespace-nowrap"><MessageCircle size={20} className="w-[clamp(1.125rem,1.5vw,1.25rem)] h-[clamp(1.125rem,1.5vw,1.25rem)]" /> Chat on WhatsApp</a>
                     <a href="tel:+917668518602" className="bg-gameBlack text-white border-2 border-white/20 px-[clamp(1.25rem,3vw,2rem)] py-[clamp(0.75rem,1.5vh,1rem)] rounded-2xl font-black uppercase tracking-widest text-[clamp(0.7rem,0.8vw,0.8rem)] hover:bg-white hover:text-black transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 whitespace-nowrap"><Phone size={20} className="w-[clamp(1.125rem,1.5vw,1.25rem)] h-[clamp(1.125rem,1.5vw,1.25rem)]" /> Request a Call</a>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default AboutPage;