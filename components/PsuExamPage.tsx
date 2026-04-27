'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Building2, Trophy, Star, ShieldCheck, 
  Wallet, TrendingUp, CheckCircle2, ArrowRight, 
  ChevronDown, Sparkles, Microscope, GraduationCap, 
  Target, Zap, Clock, FileText, Download, Info, 
  HelpCircle, Plus, Minus, Landmark, Award, 
  BarChart3, AlertCircle, Building, Rocket, 
  Users, Globe, Gem, Heart, Shield, Laptop, 
  Smartphone, ExternalLink, Calculator, Compass,
  ListChecks, BookOpen, Layers, MousePointer2,
  Book, MonitorPlay, Calendar, MapPin, Lightbulb,
  TrendingDown, History, Sigma, FileCheck, Layers as LayersIcon
} from 'lucide-react';

const PsuExamPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 130; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const gateAdvantages = [
    {
      id: "a",
      title: "Higher Education Opportunities",
      desc: "Admission to IITs, NITs, IIITs, and other top institutes for M.Tech/M.E. programs. Receive a monthly stipend of Rs. 12,400 for postgraduate studies.",
      icon: GraduationCap,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      id: "b",
      title: "PSU Recruitment",
      desc: "Direct recruitment into top Public Sector Undertakings (PSUs) like ONGC, BHEL, GAIL, NTPC, etc., with attractive salary packages and job security.",
      icon: Briefcase,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      id: "c",
      title: "Opportunities Abroad",
      desc: "Admission to international universities like National University of Singapore (NUS) and Technical University of Munich (TUM).",
      icon: Globe,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      id: "d",
      title: "Research Opportunities",
      desc: "Openings in ISRO, DRDO, CSIR, and other reputed research organizations for R&D roles.",
      icon: Microscope,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      id: "e",
      title: "Scholarships and Fellowships",
      desc: "Eligibility for AICTE/UGC scholarships and Junior Research Fellow (JRF) positions.",
      icon: Award,
      color: "text-amber-600",
      bg: "bg-amber-50"
    },
    {
      id: "f",
      title: "Teaching Careers",
      desc: "Eligibility for teaching positions in engineering colleges and universities.",
      icon: BookOpen,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      id: "g",
      title: "Career Growth in Industry",
      desc: "Better roles and higher salaries in private companies requiring advanced technical expertise.",
      icon: TrendingUp,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      id: "h",
      title: "Flexibility in Career",
      desc: "Strong preparation for other competitive exams like ESE/PSUs/SSC-JE/RRB-JE/State-level AE & JE exams.",
      icon: Layers,
      color: "text-teal-600",
      bg: "bg-teal-50"
    },
    {
      id: "i",
      title: "Prestige and Recognition",
      desc: "Being GATE-qualified adds credibility to your technical and academic background.",
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    }
  ];

  const distributionOfMarks = [
    { code: "AE, AG, BH, BT, CE, CH, CS, EC, EE, ES, IN, ME, MN, MT, NM, PE, PI, TF", ga: "15", compulsory: "85", optional: "-", total: "100" },
    { code: "CY, DA, EY, MA, PH, ST", ga: "15", compulsory: "85", optional: "-", total: "100" },
    { code: "AR: Part A is Common and Compulsory. Part B1/B2 selected during exam.", ga: "15", compulsory: "60", optional: "25", total: "100" },
    { code: "GE: Part A is Common and Compulsory. Part B1/B2 selected during exam.", ga: "15", compulsory: "55", optional: "30", total: "100" },
    { code: "GG: Part A is Common and Compulsory. Part B1/B2 chosen at application.", ga: "15", compulsory: "25", optional: "60", total: "100" },
    { code: "XE: Section A (Engg Maths) is Compulsory. Select any TWO others.", ga: "15", compulsory: "15", optional: "2 x 35", total: "100" },
    { code: "XH: Section B1 (Reasoning) is Compulsory. Select any ONE others.", ga: "15", compulsory: "25", optional: "60", total: "100" },
    { code: "XL: Section P (Chemistry) is Compulsory. Select any TWO others.", ga: "15", compulsory: "25", optional: "2 x 30", total: "100" }
  ];

  const paperCombinations = [
    { primary: "AE", secondary: "CE, ME, XE" },
    { primary: "AG", secondary: "CE" },
    { primary: "AR", secondary: "CE, GE" },
    { primary: "BM", secondary: "BT, IN" },
    { primary: "BT", secondary: "BM, XL" },
    { primary: "CE", secondary: "AE, AG, AR, ES, GE, NM, XE" },
    { primary: "CH", secondary: "ES, PE, XE" },
    { primary: "CS", secondary: "DA, EC, GE, MA, PH, ST" },
    { primary: "CY", secondary: "XE, XL" },
    { primary: "DA", secondary: "CS, EC, EE, MA, ME, PH, ST, XE" },
    { primary: "EC", secondary: "CS, DA, EE, IN, PH" },
    { primary: "EE", secondary: "DA, EC, IN, PH" },
    { primary: "ES", secondary: "CE, CH, GE" },
    { primary: "EY", secondary: "XL" },
    { primary: "GE", secondary: "AR, CE, CS, ES, GG" },
    { primary: "GG", secondary: "GE" },
    { primary: "IN", secondary: "BM, EC, EE, ME" },
    { primary: "MA", secondary: "CS, DA, PH, ST" },
    { primary: "ME", secondary: "AE, DA, IN, NM, PI, XE" },
    { primary: "MT", secondary: "XE" },
    { primary: "NM", secondary: "CE, ME" },
    { primary: "PE", secondary: "CH" },
    { primary: "PH", secondary: "CS, DA, EC, EE, MA, XE" },
    { primary: "PI", secondary: "ME, XE" },
    { primary: "ST", secondary: "CS, DA, MA, XH" },
    { primary: "XE", secondary: "AE, CE, CH, CY, DA, ME, MT, PH, PI" },
    { primary: "XH", secondary: "ST" },
    { primary: "XL", secondary: "BT, CY, EY" }
  ];

  const importantDates = [
    { event: "GATE Online Application Processing System (GOAPS) opens", day: "Wednesday", date: "August 28, 2024" },
    { event: "Closing date of regular online registration/applications", day: "Thursday", date: "September 26, 2024" },
    { event: "End of extended period for online registration/application (with late fee)", day: "Monday", date: "October 7, 2024" },
    { event: "Last date for change of Category, Paper and Examination City, adding a new test paper, and change of personal details (additional fee applicable per change)", day: "Wednesday", date: "November 6, 2024" },
    { event: "Admit Cards available for download", day: "Thursday", date: "January 2, 2025" },
    { event: "GATE 2025 Examination Dates", day: "Saturday\nSunday\nSaturday\nSunday", date: "February 1, 2025\nFebruary 2, 2025\nFebruary 15, 2025\nFebruary 16, 2025" },
    { event: "Announcement of results in the GATE Online Application Processing System (GOAPS)", day: "Wednesday", date: "March 19, 2025" },
    { event: "Score Cards available for free download", day: "Friday to Saturday", date: "March 28, 2025 to May 31, 2025" },
    { event: "Score Cards available for download by paying a fee of Rs. 500 per test paper", day: "Sunday to Wednesday", date: "June 1, 2025 to December 31, 2025" }
  ];

  const examSchedule = [
    {
      date: "Saturday, 1st February 2025",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "CS1, AG, MA" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "CS2, NM, MT, TF, IN" }
      ]
    },
    {
      date: "Sunday, 2nd February 2025",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "ME, PE, AR" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "EE" }
      ]
    },
    {
      date: "Saturday, 15th February 2025",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session – FN)", papers: "CY, AE, DA, ES, PI" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session – AN)", papers: "EC, GE, XH, BM, EY" }
      ]
    }
  ];

  const organisingInstitutes = [
    { no: 1, name: "IISc, Bangalore", year: "GATE – 1984" },
    { no: 2, name: "IIT, Madras", year: "GATE – 1985" },
    { no: 3, name: "IIT, Delhi", year: "GATE – 1986" },
    { no: 4, name: "IIT, Bombay", year: "GATE – 1987" },
    { no: 5, name: "IIT, Kharagpur", year: "GATE – 1988" },
    { no: 6, name: "IIT, Kanpur", year: "GATE – 1989" },
    { no: 7, name: "IISc, Bangalore", year: "GATE – 1990" },
    { no: 8, name: "IIT, Madras", year: "GATE – 1991" },
    { no: 9, name: "IIT, Delhi", year: "GATE – 1992" },
    { no: 10, name: "IIT, Bombay", year: "GATE – 1993" },
    { no: 11, name: "IIT, Kharagpur", year: "GATE – 1994" },
    { no: 12, name: "IIT, Kanpur", year: "GATE – 1995" },
    { no: 13, name: "IISc, Bangalore", year: "GATE – 1996" },
    { no: 14, name: "IIT, Madras", year: "GATE – 1997" },
    { no: 15, name: "IIT, Delhi", year: "GATE – 1998" },
    { no: 16, name: "IIT, Bombay", year: "GATE – 1999" },
    { no: 17, name: "IIT, Kharagpur", year: "GATE – 2000" },
    { no: 18, name: "IIT, Kanpur", year: "GATE – 2001" },
    { no: 19, name: "IISc, Bangalore", year: "GATE – 2002" },
    { no: 20, name: "IIT, Madras", year: "GATE – 2003" },
    { no: 21, name: "IIT, Delhi", year: "GATE – 2004" },
    { no: 22, name: "IIT, Bombay", year: "GATE – 2005" },
    { no: 23, name: "IIT, Kharagpur", year: "GATE – 2006" },
    { no: 24, name: "IIT, Kanpur", year: "GATE – 2007" },
    { no: 25, name: "IISc, Bangalore", year: "GATE – 2008" },
    { no: 26, name: "IIT, Roorkee", year: "GATE – 2009" },
    { no: 27, name: "IIT, Guwahati", year: "GATE – 2010" },
    { no: 28, name: "IIT, Madras", year: "GATE – 2011" },
    { no: 29, name: "IIT, Delhi", year: "GATE – 2012" },
    { no: 30, name: "IIT, Bombay", year: "GATE – 2013" },
    { no: 31, name: "IIT, Kharagpur", year: "GATE – 2014" },
    { no: 32, name: "IIT, Kanpur", year: "GATE – 2015" },
    { no: 33, name: "IISc, Bangalore", year: "GATE – 2016" },
    { no: 34, name: "IIT, Roorkee", year: "GATE – 2017" },
    { no: 35, name: "IIT, Guwahati", year: "GATE – 2018" },
    { no: 36, name: "IIT, Madras", year: "GATE – 2019" },
    { no: 37, name: "IIT, Delhi", year: "GATE – 2020" },
    { no: 38, name: "IIT, Bombay", year: "GATE – 2021" },
    { no: 39, name: "IIT, Kharagpur", year: "GATE – 2022" },
    { no: 40, name: "IIT, Kanpur", year: "GATE – 2023" },
    { no: 41, name: "IISc, Bangalore", year: "GATE – 2024" },
    { no: 42, name: "IIT, Roorkee*", year: "GATE – 2025*" },
    { no: 43, name: "IIT, Guwahati*", year: "GATE – 2026*" },
  ];

  const psuAdvantages = [
    {
      title: "Premium Salary & Perks",
      desc: "Starting packages often exceed 15-20 LPA. Includes HRA, DA, medical, furnishing, and performance-related pay (PRP).",
      icon: Wallet,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Ultimate Job Security",
      desc: "Work for the Government of India. Enjoy permanent tenure and a stable career path till retirement.",
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Social Status",
      desc: "Being a 'Public Sector Officer' commands immense respect in Indian society and within the engineering community.",
      icon: Star,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    },
    {
      title: "Work-Life Balance",
      desc: "Fixed working hours, abundant leave policies, and holiday homes across the country for family vacations.",
      icon: Heart,
      color: "text-rose-600",
      bg: "bg-rose-50"
    },
    {
      title: "Technological Edge",
      desc: "Work on massive national infrastructure, energy grids, and manufacturing units using cutting-edge technology.",
      icon: Zap,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Career Progression",
      desc: "Structured promotion policies. Move from Graduate Trainee to Manager, DG, and Director roles.",
      icon: TrendingUp,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  const maharatnaList = [
    "NTPC (National Thermal Power Corporation)",
    "ONGC (Oil and Natural Gas Corporation)",
    "SAIL (Steel Authority of India Limited)",
    "BHEL (Bharat Heavy Electricals Limited)",
    "IOCL (Indian Oil Corporation Limited)",
    "HPCL (Hindustan Petroleum Corporation Limited)",
    "BPCL (Bharat Petroleum Corporation Limited)",
    "GAIL (Gas Authority of India Limited)",
    "Power Grid Corporation of India (PGCIL)",
    "Coal India Limited (CIL)"
  ];

  const navratnaList = [
    "BEL (Bharat Electronics Limited)",
    "CONCOR (Container Corporation of India)",
    "EIL (Engineers India Limited)",
    "HAL (Hindustan Aeronautics Limited)",
    "NALCO (National Aluminium Company)",
    "NBCC (National Buildings Construction Corporation)",
    "NMDC (National Mineral Development Corporation)",
    "NLC (Neyveli Lignite Corporation)",
    "OIL (Oil India Limited)",
    "RINL (Rashtriya Ispat Nigam Limited)",
    "RVNL (Rail Vikas Nigam Limited)",
    "RCF (Rashtriya Chemicals & Fertilizers)"
  ];

  const recruitmentProcess = [
    {
      stage: "Stage 1: Shortlisting",
      method: "GATE Score / Written Test",
      desc: "Shortlist based on GATE rank. Others (like ISRO, BARC, BEL) conduct their own technical written exams.",
      icon: ListChecks,
      color: "bg-blue-600"
    },
    {
      stage: "Stage 2: Assessment",
      method: "GD & Group Tasks",
      desc: "Tests leadership, communication, and situational decision-making. Often includes psychometric testing.",
      icon: Users,
      color: "bg-purple-600"
    },
    {
      stage: "Stage 3: Selection",
      method: "Personal Interview",
      desc: "A panel of experts evaluates technical depth, core branch knowledge, and personality fitness for the PSU culture.",
      icon: Award,
      color: "bg-emerald-600"
    }
  ];

  const faqs = [
    {
      q: "What is the average GATE rank required for Maharatna PSUs?",
      a: "For General category, a rank under 200-300 in core branches like Mechanical or Civil is usually required for a call from top Maharatnas like IOCL or ONGC. For SC/ST/PwD, calls are often extended to ranks up to 1000-1500."
    },
    {
      q: "Do PSUs recruit candidates with a Diploma?",
      a: "Yes. While Graduate Trainee roles require B.Tech, most PSUs have 'Diploma Trainee' positions. These usually have separate written exams and do not require GATE."
    },
    {
      q: "What is the age limit for PSU recruitment?",
      a: "The typical upper age limit for General category candidates is 28 years. There is an age relaxation of 3 years for OBC and 5 years for SC/ST candidates."
    },
    {
      q: "Can I prepare for PSU interviews at GAME Academy?",
      a: "Yes! Gaurav Babu Sir provides specialized interview guidance sessions, mock GDs, and technical grooming specifically for PSU aspirants who have cleared the written/GATE cut-off."
    },
    {
      q: "Which PSUs conduct their own exams instead of using GATE?",
      a: "Prominent organizations like ISRO, DRDO, BARC, BEL, HAL, and Vizag Steel often conduct their own independent recruitment examinations."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#075d63] text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <Gem size={14} className="text-gameGold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gameGold">The Maharatna Dream</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                  Accelerate Your Career in <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-gameGold">
                     India's Leading PSUs
                  </span>
               </h1>

               <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  Experience the pinnacle of engineering careers. Join the backbone of India's growth and enjoy unmatched job security with a premium lifestyle.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gameGold text-black px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-white hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                     Start Prep Today <ArrowRight size={20} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                     View All Vacancies
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

      {/* STICKY SUB-NAVIGATION */}
      <div className="sticky top-[58px] z-40 w-full bg-white shadow-md border-b border-slate-100">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="flex items-center justify-between h-14">
               <div className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar mask-gradient-right w-full md:w-auto">
                  {[
                     { label: "1. Overview", id: "overview" },
                     { label: "2. Choice", id: "gate-choice" },
                     { label: "3. Advantages", id: "advantages" },
                     { label: "4. What's New", id: "whats-new" },
                     { label: "5. Dates", id: "important-dates" },
                     { label: "6. Schedule", id: "exam-schedule" },
                     { label: "7. Cut-Offs", id: "expected-cutoff" },
                     { label: "8. Organisers", id: "organisers" },
                     { label: "9. Score", id: "gate-score" },
                     { label: "10. Combinations", id: "combinations" },
                     { label: "11. Maharatnas", id: "maharatnas" },
                     { label: "12. Navratnas", id: "navratnas" },
                     { label: "13. Recruitment", id: "recruitment" },
                     { label: "14. Salary", id: "salary" },
                     { label: "15. FAQs", id: "faqs" }
                  ].map((item) => (
                     <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-slate-600 text-[10px] md:text-sm font-bold whitespace-nowrap hover:text-gameTeal hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-all"
                     >
                        {item.label}
                     </button>
                  ))}
               </div>
               <div className="hidden md:flex items-center gap-4 pl-4 border-l border-slate-100 shrink-0">
                  <button className="bg-gameTeal text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-gameTealDark transition-all shadow-lg flex items-center gap-2">
                     <Sparkles size={12} className="text-gameGold fill-gameGold" /> Enroll Now
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* 1. What is GATE? */}
      <section id="overview" className="py-24 px-8 md:px-10 lg:px-12 bg-white relative scroll-mt-32">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block">Foundation</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                     1. What is <span className="text-gameTeal">GATE?</span>
                  </h2>
                  <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                     <p>
                        The <strong className="text-slate-900">Graduate Aptitude Test in Engineering (GATE)</strong> is an examination that primarily assesses a candidate's comprehensive understanding of various undergraduate subjects in engineering and science for admission to Master's programs and jobs in public sector companies.
                     </p>
                     <p>
                        The majority of students aim to crack the GATE exam because it not only enhances their career growth but also makes their future bright and secure. 
                     </p>
                     <div className="bg-teal-50 p-8 rounded-[2rem] border-l-4 border-gameTeal text-slate-700 italic">
                        "It is a transformative opportunity for students aspiring to excel in engineering and science domains, and the GATE scorecard is also used by several Public Sector Undertakings (PSUs) to recruit applicants for distinguished jobs."
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                  className="lg:w-1/2 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
               >
                  <div className="relative bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-2xl overflow-hidden group aspect-video">
                     <Image 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=800&q=80" 
                        alt="PSU Industry" 
                        fill
                        className="rounded-[2rem] object-cover transform group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                     <div className="absolute bottom-10 left-10 right-10 text-white">
                        <div className="bg-gameGold text-black inline-block px-3 py-1 rounded-lg font-black text-[10px] uppercase tracking-widest mb-4">Industrial Excellence</div>
                        <h4 className="text-2xl font-black leading-tight">Working for the Giants of India</h4>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 2. Why is GATE the Right Choice? */}
      <section id="gate-choice" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     2. Why is <span className="text-gameTeal">GATE the Right Choice?</span>
                  </h2>
                  <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed mb-6">
                    GATE opens the door to a future full of immense possibilities. Here's what you can achieve:
                  </p>
                  <div className="inline-block bg-gameGold text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs shadow-md mb-10">
                     Opportunities and Advantages After Qualifying GATE
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {gateAdvantages.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:bg-white hover:border-gameTeal/30 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                  >
                     <div className="absolute top-4 right-6 text-4xl font-black text-slate-100 group-hover:text-gameTeal/10 transition-colors uppercase italic">{item.id}.</div>
                     <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={28} strokeWidth={2} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-gameTeal transition-colors">
                        {item.title}
                     </h3>
                     <p className="text-slate-500 text-sm font-bold leading-relaxed flex-grow">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 3. Advantages - The PSU Advantage */}
      <section id="advantages" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     3. The <span className="text-gameTeal">PSU Advantage</span>
                  </h2>
                  <p className="text-slate-600 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                    Why is every engineer's first preference a PSU job? The benefits are unmatched in the Indian job market.
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {psuAdvantages.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:bg-white hover:border-gameTeal/30 transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={28} strokeWidth={2} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-gameTeal transition-colors">
                        {item.title}
                     </h3>
                     <p className="text-slate-500 text-sm font-bold leading-relaxed flex-grow">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. What's New in GATE 2025? */}
      <section id="whats-new" className="py-24 bg-slate-900 text-white scroll-mt-32 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameGold text-black text-xs font-black uppercase tracking-widest mb-6">
                    <Zap size={14} fill="currentColor" /> Latest Update
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                     4. What's New in <span className="text-gameGold">GATE 2025?</span>
                  </h2>
               </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
               <div className="space-y-6">
                  {[
                    { label: "a. Organizing Institute", val: "IIT Roorkee.", icon: Landmark },
                    { label: "b. Subjects", val: "30 disciplines are covered, with detailed syllabi available online.", icon: Book, link: "link of syllabus" },
                    { label: "c. Two-Paper Combinations", val: "New options for interdisciplinary combinations introduced.", icon: Layers },
                    { label: "d. Mode of Exam", val: "Computer-based test (CBT).", icon: Laptop }
                  ].map((item, i) => (
                    <motion.div key={i} className="flex gap-5 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group">
                       <div className="w-12 h-12 rounded-xl bg-gameGold/20 text-gameGold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <item.icon size={24} />
                       </div>
                       <div>
                          <h4 className="text-xs font-black text-gameGold uppercase tracking-widest mb-1">{item.label}</h4>
                          <p className="text-slate-200 font-bold leading-relaxed">{item.val}</p>
                          {item.link && <button className="mt-2 text-gameGold font-black text-xs underline hover:text-white transition-colors">{item.link}</button>}
                       </div>
                    </motion.div>
                  ))}
               </div>

               <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] relative overflow-hidden">
                  <h3 className="text-xs font-black text-gameGold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                     <MonitorPlay size={16} /> e. The Computer-Based Test (CBT) will include:
                  </h3>
                  <div className="space-y-8">
                     <div className="flex gap-4">
                        <span className="text-gameGold font-black italic">i.</span>
                        <div>
                           <h4 className="font-black text-white text-lg">Multiple Choice Questions (MCQ)</h4>
                           <p className="text-slate-400 text-sm">One correct option out of four.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-gameGold font-black italic">ii.</span>
                        <div>
                           <h4 className="font-black text-white text-lg">Multiple Select Questions (MSQ)</h4>
                           <p className="text-slate-400 text-sm">One or more correct options out of four.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <span className="text-gameGold font-black italic">iii.</span>
                        <div>
                           <h4 className="font-black text-white text-lg">Numerical Answer Type (NAT)</h4>
                           <p className="text-slate-400 text-sm">Candidates must enter answers using a virtual keypad.</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-white/10 space-y-8">
                     <h3 className="text-xs font-black text-gameGold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <Award size={16} /> f. Marking Scheme/Pattern/Duration:
                     </h3>
                     <div className="flex gap-4 items-center bg-white/10 p-4 rounded-xl">
                        <Clock className="text-gameGold" />
                        <span className="font-black text-lg">Total Questions 65 / 100 M.M / 3 Hours</span>
                     </div>
                     
                     <div className="space-y-4">
                        <h4 className="text-sm font-black text-slate-300">ii. Multiple-Choice Questions (MCQ):</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                              <span className="block text-[10px] font-black uppercase text-slate-500 mb-1">1 Mark Question</span>
                              <span className="text-gameGold font-black">+1 Correct, -1/3 Wrong</span>
                           </div>
                           <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                              <span className="block text-[10px] font-black uppercase text-slate-500 mb-1">2 Mark Question</span>
                              <span className="text-gameGold font-black">+2 Correct, -2/3 Wrong</span>
                           </div>
                        </div>
                     </div>

                     <div className="p-6 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-2xl">
                        <h4 className="text-sm font-black text-emerald-400 mb-2 italic">iii. Multiple select Question (MSQ) & Numerical Answer Type (NAT) Questions:</h4>
                        <p className="text-emerald-100/80 font-bold">No negative marking; candidates receive full marks for correct answers.</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Distribution Table */}
            <div className="mt-20">
               <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-black mb-4">
                     Distribution of marks in various test papers of GATE 2025
                  </h2>
                  <div className="w-24 h-1 bg-gameGold mx-auto rounded-full"></div>
               </div>

               <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse min-w-[900px]">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-widest">
                              <th className="p-6 border-r border-white/10 w-[35%]">Paper Code</th>
                              <th className="p-6 border-r border-white/10 text-center w-[15%]">General Aptitude (GA) Marks</th>
                              <th className="p-6 border-r border-white/10 text-center w-[18%]">Subject Compulsory Section</th>
                              <th className="p-6 border-r border-white/10 text-center w-[18%]">Subject Optional Section(s)</th>
                              <th className="p-6 text-center w-[14%]">Total Marks</th>
                           </tr>
                        </thead>
                        <tbody className="text-slate-800 text-[13px] font-bold divide-y divide-slate-100">
                           {distributionOfMarks.map((row, i) => (
                              <tr key={i} className="hover:bg-teal-50 transition-colors">
                                 <td className="p-6 border-r border-slate-100 leading-relaxed font-black">{row.code}</td>
                                 <td className="p-6 border-r border-slate-100 text-center text-lg">{row.ga}</td>
                                 <td className="p-6 border-r border-slate-100 text-center text-lg">{row.compulsory}</td>
                                 <td className="p-6 border-r border-slate-100 text-center text-lg">{row.optional}</td>
                                 <td className="p-6 text-center text-2xl font-black text-gameTeal">{row.total}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
               
               <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-gameGold font-black text-lg flex items-center gap-3">
                     <Calculator size={24} /> Note - Only the on-screen virtual calculator will be allowed during the exam.
                  </p>
                  <button className="bg-gameTeal text-white px-8 py-3 rounded-xl font-bold hover:bg-gameTealDark transition-all flex items-center gap-2">
                     Try Virtual Calc <ExternalLink size={16} />
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Important Dates */}
      <section id="important-dates" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                     5. GATE 2025 <span className="text-gameTeal">Important Dates</span>
                  </h2>
                  <div className="bg-gameGold text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs inline-block mb-4 shadow-sm">
                    (Table - 3)
                  </div>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-gameTeal/10 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[55%]">Event</th>
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Day</th>
                           <th className="p-6 w-[30%] text-center">Date</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        {importantDates.map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="p-5 font-bold text-slate-800 border-r border-slate-100 leading-relaxed">
                                 {row.event}
                              </td>
                              <td className="p-5 text-center font-bold text-slate-500 border-r border-slate-100 whitespace-pre-line">
                                 {row.day}
                              </td>
                              <td className="p-5 text-center font-black text-gameTeal whitespace-pre-line">
                                 {row.date}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* 6. GATE 2025 Schedule */}
      <section id="exam-schedule" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                     6. GATE 2025 <span className="text-gameTeal">Schedule</span>
                  </h2>
                  <div className="bg-gameTeal text-white px-6 py-2 rounded-full font-black uppercase tracking-widest text-xs inline-block mb-4 shadow-md">
                    (Table - 4)
                  </div>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[25%] text-center">Day, Date</th>
                           <th className="p-6 border-r border-white/10 w-[40%] text-center">Time (IST)</th>
                           <th className="p-6 w-[35%] text-center">Test Papers</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700">
                        {examSchedule.map((day, i) => (
                           <React.Fragment key={i}>
                              {day.sessions.map((session, sIdx) => (
                                 <tr key={`${i}-${sIdx}`} className="hover:bg-teal-50/30 transition-colors border-b border-slate-100">
                                    {sIdx === 0 && (
                                       <td rowSpan={day.sessions.length} className="p-6 text-center font-black text-slate-900 border-r border-slate-100 align-middle bg-slate-50/50">
                                          {day.date}
                                       </td>
                                    )}
                                    <td className="p-6 border-r border-slate-100 font-bold text-slate-600 text-center">
                                       {session.time}
                                    </td>
                                    <td className="p-6 font-black text-gameTeal text-center">
                                       {session.papers}
                                    </td>
                                 </tr>
                              ))}
                           </React.Fragment>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* 7. GATE Expected Cut-Off Marks */}
      <section id="expected-cutoff" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     7. GATE Expected <span className="text-gameTeal">Cut-Off Marks</span>
                  </h2>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
               {/* ME Card */}
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
               >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-xl bg-gameTeal text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900">a. Mechanical Engineering (ME)</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">General</div>
                        <div className="text-2xl font-black text-gameTeal">34.7</div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">OBC-NCL</div>
                        <div className="text-2xl font-black text-gameTeal">31.2</div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">SC/ST/PwD</div>
                        <div className="text-2xl font-black text-gameTeal">23.1</div>
                     </div>
                  </div>
               </motion.div>

               {/* CE Card */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
               >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Building2 size={24} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900">b. Civil Engineering (CE)</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                     <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">General</div>
                        <div className="text-2xl font-black text-blue-600">28.2</div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">OBC-NCL</div>
                        <div className="text-2xl font-black text-blue-600">25.4</div>
                     </div>
                     <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">SC/ST/PwD</div>
                        <div className="text-2xl font-black text-blue-600">18.7</div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Insights block */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-gameTeal/10 rounded-full blur-3xl"></div>
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-4">
                     <Lightbulb className="text-gameGold" size={32} />
                     <span className="text-gameGold underline underline-offset-8 decoration-2">Insights:</span>
                  </h3>
                  <div className="space-y-8">
                     {[
                        { id: "I", text: "Cut-off marks vary slightly each year, depending on factors such as the difficulty level of the exam and the number of applicants." },
                        { id: "II", text: "Typically, General category cut-offs are 10-12% higher than SC/ST/PwD cut-offs." },
                        { id: "III", text: "The cut-offs for interdisciplinary papers, like Engineering Sciences (XE), are usually moderate in comparison to core engineering papers like ME & CE." }
                     ].map((insight, idx) => (
                        <div key={idx} className="flex gap-6 group">
                           <div className="text-2xl font-black text-gameGold/40 group-hover:text-gameGold transition-colors w-12 shrink-0">{insight.id}.</div>
                           <p className="text-slate-300 font-medium text-lg leading-relaxed group-hover:text-white transition-colors">{insight.text}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 8. Organising Institutes Table */}
      <section id="organisers" className="py-24 bg-white border-t border-slate-100 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
                     8. Year Wise List of GATE Examination Organising Institute
                  </h2>
                  <div className="w-20 h-1 bg-[#075d63] mx-auto rounded-full mb-4"></div>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">(Table-5)</p>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
               <div className="grid md:grid-cols-2 divide-x divide-slate-100">
                  {/* First Half of Table */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest border-b border-white/10">
                              <th className="p-4 border-r border-white/10 w-[15%] text-center">S. No.</th>
                              <th className="p-4 border-r border-white/10 w-[45%]">GATE Organising Institute</th>
                              <th className="p-4 w-[40%]">GATE Organising Year</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                           {organisingInstitutes.slice(0, 22).map((row, i) => (
                              <tr key={i} className="hover:bg-teal-50/50 transition-colors">
                                 <td className="p-3 text-center font-bold text-slate-400 border-r border-slate-100">{row.no}</td>
                                 <td className="p-3 font-bold text-slate-800 border-r border-slate-100">{row.name}</td>
                                 <td className="p-3 font-black text-gameTeal">{row.year}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>

                  {/* Second Half of Table */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest border-b border-white/10">
                              <th className="p-4 border-r border-white/10 w-[15%] text-center">S. No.</th>
                              <th className="p-4 border-r border-white/10 w-[45%]">GATE Organising Institute</th>
                              <th className="p-4 w-[40%]">GATE Organising Year</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                           {organisingInstitutes.slice(22).map((row, i) => (
                              <tr key={i} className="hover:bg-teal-50/50 transition-colors">
                                 <td className="p-3 text-center font-bold text-slate-400 border-r border-slate-100">{row.no}</td>
                                 <td className="p-3 font-bold text-slate-800 border-r border-slate-100">{row.name}</td>
                                 <td className="p-3 font-black text-gameTeal">{row.year}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
            <p className="mt-6 text-slate-400 text-xs font-bold text-center italic">
               * Tentative schedule. Subject to official announcement by the organising institute.
            </p>
         </div>
      </section>

      {/* 9. GATE Score (NEW SECTION) */}
      <section id="gate-score" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     9. GATE Score
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-16">
                     {/* Multi-Session Card */}
                     <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-gameTeal text-white px-4 py-1 text-[10px] font-black uppercase rounded-bl-2xl">Category A</div>
                        <h3 className="text-xl font-black text-gameTeal mb-6 flex items-center gap-2">
                           <LayersIcon size={24} /> For Multi-Session Papers:
                        </h3>
                        <ul className="space-y-4">
                           <li className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-gameTeal mt-0.5 shrink-0" />
                              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                                 <span className="text-slate-900">Actual GATE Marks:</span> These are raw marks obtained based on the marking scheme.
                              </p>
                           </li>
                           <li className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-gameTeal mt-0.5 shrink-0" />
                              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                                 <span className="text-slate-900">Normalized GATE Marks:</span> Used to adjust for variations in difficulty across sessions.
                              </p>
                           </li>
                           <li className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-gameTeal mt-0.5 shrink-0" />
                              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                                 <span className="text-slate-900">GATE Score:</span> Calculated using normalized marks.
                              </p>
                           </li>
                        </ul>
                     </div>

                     {/* Single-Session Card */}
                     <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-gameGold text-black px-4 py-1 text-[10px] font-black uppercase rounded-bl-2xl">Category B</div>
                        <h3 className="text-xl font-black text-gameTeal mb-6 flex items-center gap-2">
                           <FileCheck size={24} /> For Single-Session Papers:
                        </h3>
                        <ul className="space-y-4">
                           <li className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-gameTeal mt-0.5 shrink-0" />
                              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                                 <span className="text-slate-900">Actual GATE Marks:</span> Raw marks based on the marking scheme.
                              </p>
                           </li>
                           <li className="flex items-start gap-3">
                              <CheckCircle2 size={18} className="text-gameTeal mt-0.5 shrink-0" />
                              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                                 <span className="text-slate-900">GATE Score:</span> Directly derived from actual marks without normalization.
                              </p>
                           </li>
                        </ul>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Normalization Info & Formula */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 bg-[#00ffff] px-6 py-2 rounded-bl-3xl font-black text-slate-900 shadow-sm">9.1.1 Normalised Marks</div>
               
               <div className="mb-10 mt-6 md:mt-0">
                  <h3 className="text-2xl font-black text-slate-900 mb-6">Normalized Marks for Multi-Session Papers</h3>
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                     In GATE 2025, for multi-session papers, normalization adjusts for variations in question difficulty across sessions. It assumes similar ability distribution among candidates in all sessions, ensured by large candidate numbers and random session allocation. The normalization formula, determined by the committee, is applied to calculate normalized marks.
                  </p>
               </div>

               <div className="bg-[#0f172a] text-white p-10 rounded-[2rem] shadow-inner mb-10 overflow-x-auto border-4 border-[#00ffff]/20">
                  <div className="flex items-center justify-center min-w-[500px]">
                     <div className="text-center">
                        <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-6">Normalization Equation</p>
                        <div className="text-2xl md:text-3xl lg:text-4xl font-serif italic flex items-center gap-2">
                           <span>M&#770;<sub>ij</sub> = </span>
                           <span className="inline-block relative text-center">
                              <span className="block border-b border-white pb-2 px-4">M&#773;<sup>g</sup><sub>t</sub> - M<sup>g</sup><sub>q</sub></span>
                              <span className="block pt-2 px-4">M&#773;<sub>ti</sub> - M<sub>iq</sub></span>
                           </span>
                           <span>(M<sub>ij</sub> - M<sub>iq</sub>) + M<sup>g</sup><sub>q</sub></span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                     { variable: "Mij", text: "is the actual marks obtained by the j-th candidate in the i-th session;" },
                     { variable: "Mg_t", text: "is the average marks of the top 0.1% of the candidates considering all sessions;" },
                     { variable: "Mg_q", text: "is the sum of mean and standard deviation marks of the candidates in the paper considering all sessions;" },
                     { variable: "Mti", text: "is the average marks of the top 0.1% of the candidates in the i-th session; and" },
                     { variable: "Miq", text: "is the sum of the mean marks and standard deviation marks of the i-th session." }
                  ].map((item, i) => (
                     <div key={i} className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-serif italic font-bold text-[#075d63] shrink-0 border border-slate-200 group-hover:bg-[#075d63] group-hover:text-white transition-all">
                           {item.variable.includes('_') ? <span>{item.variable.split('_')[0]}<sup>{item.variable.split('_')[1]}</sup></span> : item.variable}
                        </div>
                        <p className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors leading-relaxed pt-1">
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* 10. Allowed Two Test Paper Combinations */}
      <section id="combinations" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="mb-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                     10. Candidates may appear in <span className="text-gameTeal">ONE or TWO GATE test papers.</span>
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                     The combination of TWO papers must be chosen from the predefined list (shown below). Only ONE application form is required, even for two papers.
                  </p>
               </motion.div>
            </div>

            <div className="text-center mb-10">
               <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                  (Table - 2) Allowed two test paper combinations in GATE 2025
               </h3>
               <div className="w-20 h-1 bg-gameGold mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden mb-12">
               <div className="grid md:grid-cols-2 divide-x divide-slate-100">
                  {/* Left Column of Table */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                              <th className="p-4 border-r border-white/10 w-[30%]">Code of Primary Paper</th>
                              <th className="p-4 w-[70%]">Codes of Papers Allowed as Secondary</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                           {paperCombinations.slice(0, 14).map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                 <td className="p-4 border-r border-slate-100 font-black text-gameTeal bg-slate-50/50">{row.primary}</td>
                                 <td className="p-4 font-bold group-hover:text-gameTeal transition-colors">{row.secondary}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
                  {/* Right Column of Table */}
                  <div className="overflow-x-auto">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                              <th className="p-4 border-r border-white/10 w-[30%]">Code of Primary Paper</th>
                              <th className="p-4 w-[70%]">Codes of Papers Allowed as Secondary</th>
                           </tr>
                        </thead>
                        <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                           {paperCombinations.slice(14).map((row, i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                 <td className="p-4 border-r border-slate-100 font-black text-gameTeal bg-slate-50/50">{row.primary}</td>
                                 <td className="p-4 font-bold group-hover:text-gameTeal transition-colors">{row.secondary}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>

            {/* Note */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="bg-white p-8 rounded-[2rem] border border-slate-200 relative shadow-sm"
            >
               <div className="flex gap-4">
                  <AlertCircle className="text-gameTeal shrink-0" size={24} />
                  <p className="text-slate-700 text-sm md:text-base font-bold leading-relaxed">
                     <strong className="text-slate-900">Note -</strong> Candidates appearing for TWO GATE papers must select a primary and a secondary paper from the allowed combinations (shown above). Changes to combinations may occur due to scheduling constraints, with refunds provided if the second paper is canceled. New combinations, if announced, can be added with an additional fee. The exam centers for the two papers may differ but will remain in the same city. No legal liability is assumed for such arrangements.
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 11. Maharatnas Section */}
      <section id="maharatnas" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-black uppercase tracking-widest mb-6">
                    <Trophy size={14} /> Top Tier
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6">11. Maharatna <br/><span className="text-gameTeal">Companies</span></h2>
                  <p className="text-slate-500 font-bold leading-relaxed">
                     These are the most powerful PSUs in India with complete financial autonomy. They are the prime recruiters for engineers through GATE.
                  </p>
               </div>
               <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {maharatnaList.map((item, i) => (
                     <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-gameTeal hover:bg-white transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-gameTeal font-black text-sm group-hover:bg-gameTeal group-hover:text-white transition-all">{i+1}</div>
                        <span className="font-bold text-slate-700 text-sm">{item}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 12. Navratnas Section */}
      <section id="navratnas" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
               <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-gameGoldDark text-xs font-black uppercase tracking-widest mb-6">
                    <Star size={14} /> High Growth
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6">12. Navratna <br/><span className="text-gameTeal">Companies</span></h2>
                  <p className="text-slate-400 font-bold leading-relaxed">
                     Navratnas have significant freedom to invest and expand. They offer incredible technical exposure in defense, aerospace, and metallurgy.
                  </p>
               </div>
               <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {navratnaList.map((item, i) => (
                     <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4 hover:border-gameGold hover:bg-white transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-gameGold text-black flex items-center justify-center font-black text-sm">{i+1}</div>
                        <span className="font-bold text-slate-700 text-sm">{item}</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 13. Recruitment Process */}
      <section id="recruitment" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">13. How to get <span className="text-gameTeal">Recruited?</span></h2>
               <p className="text-slate-500 text-lg font-bold max-w-2xl mx-auto">The journey from an aspirant to a PSU officer follows a standard three-stage process.</p>
            </div>

            <div className="relative">
               {/* Connector Line */}
               <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block -z-0"></div>
               
               <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                  {recruitmentProcess.map((step, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-xl text-center group hover:border-gameTeal transition-all"
                     >
                        <div className={`w-20 h-20 rounded-[2rem] ${step.color} text-white flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                           <step.icon size={36} />
                        </div>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{step.stage}</h4>
                        <h3 className="text-xl font-black text-slate-900 mb-4">{step.method}</h3>
                        <p className="text-slate-500 text-sm font-bold leading-relaxed">{step.desc}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 14. Salary & Lifestyle Section */}
      <section id="salary" className="py-24 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="bg-[#075d63] rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(7,93,99,0.5)]">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px]"></div>
               <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-16 items-center">
                     <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">14. The PSU <span className="text-gameGold">Premium Lifestyle</span></h2>
                        <div className="space-y-6">
                           {[
                              "Basic Pay: Rs. 50,000 - Rs. 1,60,000 (Level 10 equivalent)",
                              "CTC Range: 15 LPA to 22 LPA for freshers",
                              "Housing: Luxury PSU colonies or high HRA",
                              "Insurance: 100% medical cover for family",
                              "Allowances: Petrol, furnishing, laptop, phone"
                           ].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all">
                                 <CheckCircle2 size={24} className="text-gameGold" />
                                 <span className="font-bold text-lg">{item}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="w-full lg:w-80 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[3rem] text-center">
                        <div className="text-gameGold font-black text-5xl mb-2">Rs. 20L+</div>
                        <div className="text-xs uppercase tracking-widest font-black opacity-60 mb-8">Average CTC</div>
                        <p className="text-teal-50 text-sm font-medium leading-relaxed">
                           "A PSU job is not just a paycheck; it's a social security net and a platform to lead India's engineering future."
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 15. FAQs */}
      <section id="faqs" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">15. Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'border-gameTeal shadow-md' : 'border-slate-200 shadow-sm hover:border-gameTeal/30'}`}>
                     <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                        <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-gameTeal' : 'text-slate-800'}`}>{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaqIndex === i ? 'bg-gameTeal text-white' : 'bg-slate-100 text-slate-500'}`}>
                           {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <AnimatePresence>
                        {openFaqIndex === i && (
                           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                              <div className="px-5 pb-5 pt-0 border-t border-dashed border-slate-100 mt-2">
                                 <div className="pt-4 text-slate-600 leading-relaxed font-medium">{faq.a}</div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gameBlack text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Your Maharatna Journey <br/> Begins Here</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join the Excellence Batch for GATE & PSUs. Master the technical core and sharpen your skills with Gaurav Babu Sir.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button className="bg-gameGold text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl hover:-translate-y-1">Enroll Now</button>
               <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">Watch Demo Classes</button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default PsuExamPage;