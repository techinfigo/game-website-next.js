'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, ArrowRight, Calendar, CheckCircle2, ShieldCheck,
  Wallet, Scale, Home, Users, Building2, GraduationCap, Landmark,
  FileText, ArrowUpRight, ChevronDown, BookOpen, HelpCircle
} from 'lucide-react';
import CourseGrid from './CourseGrid';
import TestimonialsText from './TestimonialsText';
import AchieversSection from './AchieversSection';

const StateAeJeExamPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedExam, setSelectedExam] = useState('RRB / State AE JE');
  const [searchTerm, setSearchTerm] = useState('');

  const markImageFailed = (src: string) => setFailedImages((prev) => ({ ...prev, [src]: true }));

  const scrollToCourses = () => {
    const el = document.getElementById('state-courses');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // TODO: client to upload /state/hero-*.jpg images. Until they exist the <Image>
  // fails and we fall back to the dark panel behind it.
  const stateSlides = [
    { badge: 'NOTIFICATION', title: 'State AE/JE 2026 Notifications', buttonText: 'Explore Courses', imageUrl: '/state/hero-1.jpg' },
    { badge: 'MOCK TEST', title: 'Free State AE/JE Mock Test Series', buttonText: 'Explore Courses', imageUrl: '/state/hero-2.jpg' },
    { badge: 'DEPARTMENTS', title: 'PWD, Irrigation & Rural Development Posts', buttonText: 'Explore Courses', imageUrl: '/state/hero-3.jpg' },
    { badge: 'HOME STATE', title: 'Build Your Career Close To Home', buttonText: 'Explore Courses', imageUrl: '/state/hero-4.jpg' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % stateSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [stateSlides.length]);

  // Why Choose State AE & JE — exact titles from the document; short supporting
  // line added for each. Image ideas from the document guide the photo choice.
  const advantages = [
    { num: 1, icon: ShieldCheck, title: 'Stable & Permanent Government Career', desc: 'A secure, pensionable state government post that stays with you for the long term.', image: '/state/advantage-1.webp' },
    { num: 2, icon: Building2, title: 'Direct Contribution to State Development', desc: 'Build and maintain the roads, water systems and public works your state depends on.', image: '/state/advantage-2.webp' },
    { num: 3, icon: Wallet, title: 'Attractive Pay Scale & Regular Promotions', desc: '7th CPC pay with DA, HRA and other allowances, plus a clear, time-bound promotion path.', image: '/state/advantage-3.webp' },
    { num: 4, icon: Scale, title: 'Work-Life Balance & Social Respect', desc: 'A respected engineering role that still leaves room for family, community and a settled life.', image: '/state/advantage-4.webp' },
    { num: 5, icon: Home, title: 'No Transfer Far From Home State', desc: 'Postings stay within your own state, keeping you close to your hometown.', image: '/state/advantage-5.webp' },
  ];

  // Comparison of engineering exams — verbatim from the document.
  const comparisonRows = [
    { exam: 'SSC JE 2026', level: 'Group-B (Non-Gazetted)', process: 'CBT 1 + CBT 2 (Technical)', eligibility: 'B.E./B.Tech or Diploma' },
    { exam: 'RRB JE 2026', level: 'Group-C', process: 'CBT 1 (Non-Tech) + CBT 2 (Technical)', eligibility: 'B.E./B.Tech or Diploma' },
    { exam: 'UPSC ESE 2026', level: 'Group-A (Gazetted)', process: 'Prelims + Mains + Interview', eligibility: 'B.E./B.Tech only' },
    { exam: 'State AE (e.g. UPPSC AE)', level: 'Group-B (Gazetted)', process: 'Written + Interview', eligibility: 'B.E./B.Tech only' },
  ];

  // State AE / JE exams — verbatim content from the document.
  const exams = [
    {
      title: 'Uttar Pradesh Public Service Commission (UPPSC-AE)',
      intro: 'UPPSC AE is a prestigious state engineering recruitment in Uttar Pradesh for various engineering posts in departments like Irrigation, PWD, Jal Nigam, Rural Engineering, etc.',
      details: [
        { label: 'Eligibility', value: 'BE/B.Tech in Civil, Mechanical, Electrical, or Agricultural Engineering.' },
        { label: 'Stages', value: 'Prelims → Mains → Interview' },
        { label: 'Job Security', value: 'Government engineering role with a stable career' },
        { label: 'Pay Scale', value: 'Level-10 (₹56,100–₹1,77,500 as per 7th CPC)' },
        { label: 'Postings', value: 'Across UP in key engineering departments' },
        { label: 'Work Impact', value: 'Direct contribution to state infrastructure—roads, water supply, irrigation, urban development' },
      ],
    },
    {
      title: 'Uttar Pradesh Public Service Commission (UPPSC-Polytechnic Lecturer)',
      intro: 'UPPSC conducts the Polytechnic Lecturer recruitment for Uttar Pradesh Government Polytechnics to hire teaching staff in engineering and non-engineering subjects. It is a Group-B Gazetted post under the U.P. Technical Education (Teaching) Service.',
      details: [
        { label: 'Eligibility', value: 'B.E./B.Tech with First Class in a relevant discipline (ME, CE, EE, ECE, CH, CS, etc.).' },
        { label: 'Stages', value: 'Written Exam (subject-specific + General Studies) → Interview' },
        { label: 'Job Security', value: 'Permanent government job with all benefits (pension, medical, leave, etc.).' },
        { label: 'Pay Scale', value: 'Level-9A, Entry Pay ₹56,100/- as per 7th Pay Commission.' },
        { label: 'Posting', value: 'Postings across U.P. Government Polytechnics in various districts.' },
        { label: 'Work Impact', value: 'Shape future diploma engineers through teaching, curriculum development, and student mentorship—a respected academic role with work-life balance and societal contribution.' },
      ],
    },
    {
      title: 'Madhya Pradesh Public Service Commission (MPPSC-AE)',
      intro: 'The Madhya Pradesh Public Service Commission (MPPSC) Assistant Engineer (AE) exam recruits engineers for state government departments. It offers a highly respected technical career within the public sector in MP.',
      details: [
        { label: 'Eligibility', value: 'BE/B.Tech in Civil, Mechanical, Electrical, or Agricultural Engineering.' },
        { label: 'Stages', value: 'Written Exam + Interview.' },
        { label: 'Job Security', value: 'Permanent government job with stable career growth.' },
        { label: 'Pay Scale', value: 'MP Pay Level 10 (approx. ₹56,100 – ₹1,77,500 per month).' },
        { label: 'Posting', value: 'Across various MP state departments.' },
        { label: 'Work Impact', value: 'Direct role in state infrastructure and development projects.' },
      ],
    },
    {
      title: 'MPSC AE (Maharashtra Public Service Commission)',
      intro: 'Maharashtra Engineering Services Examination, hiring AEs for Water Resources (Irrigation), PWD, and Soil and Water Conservation departments.',
      details: [
        { label: 'Eligibility', value: 'B.E. or B.Tech in the specified engineering discipline. Proficiency in reading, writing, and speaking the Marathi language is mandatory.' },
        { label: 'Stages', value: 'A rigorous three-stage process: Preliminary Examination (General Marathi, English, General Abilities), Mains Examination (two technical papers), and a Personal Interview.' },
        { label: 'Job Security', value: 'Group-A and Group-B permanent state government roles offering excellent job security and state benefits.' },
        { label: 'Pay Scale', value: 'Placed in the S-20 pay band with a starting basic pay of ₹56,100 up to ₹1,77,500.' },
        { label: 'Posting', value: 'Placements are spread across Maharashtra, ranging from metropolitan regions to rural development zones.' },
        { label: 'Work Impact', value: "Plays a definitive role in shaping Maharashtra's infrastructure by managing large-scale dams, overseeing massive state highway projects, and implementing regional water conservation strategies." },
      ],
    },
    {
      title: 'Rajasthan Public Service Commission (RPSC-AE)',
      intro: 'The Rajasthan Public Service Commission (RPSC) Assistant Engineer (AE) exam is a state-level engineering recruitment drive for various technical departments in Rajasthan.',
      details: [
        { label: 'Eligibility', value: 'BE/B.Tech in Civil, Mechanical, Electrical, or Agricultural Engineering.' },
        { label: 'Stages', value: 'Prelims → Mains → Interview' },
        { label: 'Job Security', value: 'RPSC AEN offers permanent government employment with high stability, assured promotions, and a structured career path within the state engineering services.' },
        { label: 'Pay Scale', value: 'Gross Salary ₹98,175 per month (Including DA, HRA).' },
        { label: 'Posting', value: 'AENs are posted across various state engineering departments in Rajasthan, working on public infrastructure, irrigation, roads, buildings, and rural development projects.' },
        { label: 'Work Impact', value: "As an AEN, you play a direct role in building and maintaining Rajasthan's infrastructure—contributing to sustainable development and improving public life through engineering excellence." },
      ],
    },
    {
      title: 'Rajasthan Subordinate and Ministerial Services Selection Board (RSMSSB-JE)',
      intro: 'Rajasthan Subordinate and Ministerial Services Selection Board (RSMSSB) is the state-level recruitment body of Rajasthan, responsible for selecting candidates for Group B (non-gazetted) and Group C posts across various departments of the Rajasthan Government. RSMSSB Junior Engineer (JE) recruitment is one of its major engineering-specific examinations, aimed at filling technical positions in departments such as PWD, Water Resources, PHED, and others.',
      details: [
        { label: 'Eligibility', value: 'Degree (B.E./B.Tech) or Diploma in the relevant engineering discipline (Civil, Mechanical & Electrical).' },
        { label: 'Stages', value: 'A two-stage process consisting of a Written Examination followed by Document Verification.' },
        { label: 'Job Security', value: 'This is a direct recruitment for a permanent government post under the Rajasthan state, which implies high job security.' },
        { label: 'Salary', value: '₹34,800 + other allowances' },
        { label: 'Postings', value: 'Across Rajasthan in various Departments like the Public Works Department (PWD), Water Resource Department (WRD), Public Health Engineering Department (PHED), etc.' },
        { label: 'Work Impact', value: 'The recruitment is for Junior Engineer roles in various state departments, directly contributing to public infrastructure and development projects in Rajasthan (like water resources, public works, health engineering).' },
      ],
    },
    {
      title: 'BPSC AE (Bihar Public Service Commission)',
      intro: 'Conducts recruitment for Assistant Engineers in Bihar state departments such as Road Construction, Building Construction, Public Health Engineering, and Water Resources.',
      details: [
        { label: 'Eligibility', value: 'A regular B.E. or B.Tech degree in the relevant discipline. The general age limit is usually 21 to 37 years for male candidates.' },
        { label: 'Stages', value: 'Traditionally involved a written test and interview, but recent cycles have relied entirely on a multi-paper Written Examination consisting of General English, General Hindi, General Studies, General Engineering Science, and two core Subject Papers.' },
        { label: 'Job Security', value: 'Permanent state government job with full pension and benefits.' },
        { label: 'Pay Scale', value: 'Pay Level 9 under the Bihar state matrix, featuring a Grade Pay of ₹5400 and a starting basic pay of ₹53,100.' },
        { label: 'Posting', value: 'Assigned to division offices and construction sites across different districts of Bihar.' },
        { label: 'Work Impact', value: 'Crucial role in regional development, involving the planning and execution of vital road networks, building construction, and critical flood management systems in the state.' },
      ],
    },
    {
      title: 'GPSC AE (Gujarat Public Service Commission)',
      intro: 'Recruits Class-II Assistant Engineers for the Roads and Buildings (R&B), Narmada, Water Resources, Water Supply, and Kalpsar departments of Gujarat.',
      details: [
        { label: 'Eligibility', value: 'B.E. or B.Tech in the relevant engineering field. Adequate knowledge of Gujarati or Hindi (or both) is a strict requirement.' },
        { label: 'Stages', value: 'Typically involves two stages: a Preliminary Examination (Objective type covering General Studies and Technical Syllabus) followed by a Personal Interview.' },
        { label: 'Job Security', value: 'Permanent Class-II Gazetted officer position within the Gujarat State Government.' },
        { label: 'Pay Scale', value: 'Pay Matrix Level 8 (₹44,900 to ₹1,42,400) or Level 9 depending on the specific department and state pay commission adoptions.' },
        { label: 'Posting', value: 'Postings are located anywhere within the state of Gujarat.' },
        { label: 'Work Impact', value: 'Drives the execution of rapid urban planning and infrastructure development, heavily involved in canal networks (like the Narmada project), state highway corridors, and industrial infrastructure support.' },
      ],
    },
  ];

  // Syllabus links from the source document (Google Drive). An empty string
  // means no syllabus link was provided for that exam in the document.
  const syllabusLinks: string[] = [
    'https://drive.google.com/file/d/1VjYs3LU9aNLFYlu9pHY50VjgcK5QyAdk/view?usp=sharing', // 1 UPPSC-AE
    '',                                                                                    // 2 UPPSC Polytechnic Lecturer — none in doc
    'https://drive.google.com/file/d/1L8G6KWKmGxd6Inc4-NQVKENJ_ig7B0Z4/view?usp=sharing', // 3 MPPSC-AE
    '',                                                                                    // 4 MPSC — none in doc
    'https://drive.google.com/file/d/1Bm7M3-DYzHRkwYOrV1_rypAFglYxte0R/view?usp=sharing', // 5 RPSC-AE
    'https://drive.google.com/file/d/1dHyBVFIMr2ti1HxnRNrU-pz1S2ZNqQW5/view?usp=sharing', // 6 RSMSSB-JE
    'https://drive.google.com/file/d/142RqAmChOP7vUe0SSlz1NQ_zdHxlyrPY/view?usp=sharing', // 7 BPSC
    'https://drive.google.com/file/d/1wycDAt9zmYOZPo2sfmzN7V1XEQwq7Mhu/view?usp=sharing', // 8 GPSC
  ];

  const faqs = [
    { q: 'What is the difference between AE and JE?', a: 'AE (Assistant Engineer) is a Group-A/B Gazetted post requiring B.Tech. JE (Junior Engineer) is a Group-C post requiring Diploma/B.Tech.' },
    { q: 'Is local language knowledge mandatory?', a: "For many state exams (like MPSC and GPSC), knowledge of the state's official language is required or tested." },
    { q: 'Which departments hire State AE/JE engineers?', a: 'Departments such as PWD, Irrigation / Water Resources, Jal Nigam / PHED, Rural Engineering, and Roads & Buildings recruit regularly across states.' },
  ];

  return (
    <div className="bg-slate-50">
      {/* 1. HERO */}
      <section className="relative -mt-20 pt-44 md:pt-48 pb-12 overflow-hidden bg-[#001517] text-white">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 self-start">
                <MapPin size={12} className="text-gameTeal" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">State AE/JE 2026</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.05] tracking-tighter text-left">
                Serve Your State <br />
                <span className="text-gameTeal">as an Engineer</span>
              </h1>
              <p className="text-base md:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed font-bold text-left">
                Secure a prestigious Assistant Engineer / Junior Engineer post in your home state. Lower competition, regular recruitment, and a stable government career close to home.
              </p>
              <div className="flex flex-wrap gap-4 mb-6 justify-start">
                <button onClick={scrollToCourses} className="px-7 py-3.5 bg-gameTeal text-white font-black rounded-full hover:bg-[#007a7e] transition-all active:scale-95 shadow-xl shadow-gameTeal/20 flex items-center gap-2 group text-sm">
                  Start Preparation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link href="/courses" className="px-7 py-3.5 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-gameBlack transition-all active:scale-95 text-sm flex items-center justify-center">
                  View Syllabus
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-6 max-w-sm flex items-start gap-4 text-left">
                <div className="w-9 h-9 rounded-xl bg-gameGold/10 text-gameGold flex items-center justify-center shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="text-[7px] font-black text-gameGold uppercase tracking-widest block mb-0.5">LATEST UPDATE</span>
                  <p className="text-xs font-bold text-slate-200">State AE/JE 2026 notifications releasing soon</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-10 border-t border-white/5 pt-6 text-left">
                <div><p className="text-2xl font-black text-white mb-0.5">28+</p><p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">States</p></div>
                <div><p className="text-2xl font-black text-white mb-0.5">1000+</p><p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Vacancies</p></div>
                <div><p className="text-2xl font-black text-white mb-0.5">14+</p><p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Yrs Mentorship</p></div>
              </div>
            </motion.div>

            {/* Right: Slider */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative h-full flex flex-col justify-between">
              <div
                role="button"
                tabIndex={0}
                aria-label="Jump to State AE/JE courses"
                onClick={scrollToCourses}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToCourses(); } }}
                className="relative flex-grow bg-[#001c1e] rounded-[1.5rem] border border-white/10 overflow-hidden shadow-2xl min-h-[350px] cursor-pointer"
              >
                <AnimatePresence mode="wait">
                  <motion.div key={activeSlide} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="absolute inset-0 h-full w-full">
                    {!failedImages[stateSlides[activeSlide].imageUrl] && (
                      <Image src={stateSlides[activeSlide].imageUrl} alt={stateSlides[activeSlide].title} fill className="object-cover" referrerPolicy="no-referrer" onError={() => markImageFailed(stateSlides[activeSlide].imageUrl)} />
                    )}
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-5 right-6 flex gap-1.5 z-20">
                  {stateSlides.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setActiveSlide(i); }} aria-label={`Go to slide ${i + 1}`} className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-gameTeal' : 'w-1.5 bg-white/30'}`} />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3 mt-4">
                {stateSlides.map((slide, i) => (
                  <button key={i} onClick={() => setActiveSlide(i)} aria-label={`Show slide ${i + 1}`} className={`relative aspect-[16/9] rounded-lg border bg-[#001c1e] transition-all duration-300 overflow-hidden ${i === activeSlide ? 'border-gameTeal scale-105 shadow-lg shadow-gameTeal/20' : 'border-white/10 opacity-30 hover:opacity-100'}`}>
                    {!failedImages[slide.imageUrl] && (
                      <Image src={slide.imageUrl} alt={slide.title} fill className="object-cover" referrerPolicy="no-referrer" onError={() => markImageFailed(slide.imageUrl)} />
                    )}
                    <div className="absolute inset-0 bg-black/40"></div>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE — roadmap */}
      <section className="py-20 bg-white border-t border-slate-100" id="why-state">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block">Why Choose State AE & JE</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">A Career That Keeps You <span className="text-gameTeal">Close to Home</span></h2>
          </div>

          <div className="relative">
            {/* Vertical pathway line (animated) — matches the other exam pages */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden lg:block overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="w-full bg-gradient-to-b from-gameTeal via-gameGold to-gameTeal"
              />
            </div>

            <div className="space-y-20 lg:space-y-28">
            {advantages.map((item, i) => {
              const isEven = i % 2 === 0;
              const Icon = item.icon;
              return (
                <div key={i} className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>
                  {/* Branching node on the center line */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 hidden lg:flex z-20">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-gameTeal flex items-center justify-center shadow-xl">
                      <Icon size={22} className="text-gameTeal" />
                    </div>
                  </div>
                  {/* Text */}
                  <motion.div initial={{ opacity: 0, x: isEven ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
                    <div className={`relative ${isEven ? 'lg:text-right' : 'lg:text-left'} text-left`}>
                      <div className={`absolute -top-16 ${isEven ? 'left-0 lg:left-auto lg:right-0' : 'left-0'} text-7xl font-black text-gameTeal/70 pointer-events-none z-10`}>
                        {item.num < 10 ? `0${item.num}` : item.num}
                      </div>
                      <div className="relative overflow-hidden p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100" style={{ backgroundColor: 'var(--color-gameTealDark)' }}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="relative z-10">
                          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-tight">{item.title}</h3>
                          <p className="text-slate-200 text-base md:text-lg font-bold leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  {/* Photo */}
                  <motion.div initial={{ opacity: 0, x: isEven ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="w-full lg:w-1/2">
                    <div className="relative rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl aspect-[3/2] bg-gameTealDark">
                      {!failedImages[item.image] ? (
                        <Image src={item.image} alt={item.title} fill className="object-cover" referrerPolicy="no-referrer" onError={() => markImageFailed(item.image)} />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/15">
                          <Icon size={90} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE */}
      <section className="py-16 bg-slate-50 border-t border-slate-100" id="compare">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block">Know Your Options</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900">Engineering Exams at a Glance</h2>
          </div>
          <div className="bg-white rounded-[2rem] shadow-xl border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                    <th className="p-5 border-r border-white/10 w-[22%]">Exam Name</th>
                    <th className="p-5 border-r border-white/10 w-[22%]">Level / Post</th>
                    <th className="p-5 border-r border-white/10 w-[34%]">Selection Process</th>
                    <th className="p-5 w-[22%]">Key Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 border-r border-slate-100 font-black text-slate-900">{row.exam}</td>
                      <td className="p-5 border-r border-slate-100 font-medium">{row.level}</td>
                      <td className="p-5 border-r border-slate-100 font-medium">{row.process}</td>
                      <td className="p-5 font-bold text-gameTeal">{row.eligibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATE AE / JE EXAMS */}
      <section className="py-20 bg-white border-t border-slate-100" id="state-exams">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-14">
            <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block">State AE / JE Exams</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">Major State Commissions <span className="text-gameTeal">We Cover</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exams.map((exam, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] border border-slate-200 shadow-lg hover:shadow-2xl hover:border-gameTeal/30 transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-7 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gameTeal/10 text-gameTeal flex items-center justify-center shrink-0">
                      <Landmark size={22} />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 leading-tight pt-1">{exam.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">{exam.intro}</p>

                  <div className="space-y-3 mb-7 flex-grow">
                    {exam.details.map((d, j) => (
                      <div key={j} className="flex gap-3">
                        <CheckCircle2 size={16} className="text-gameTeal shrink-0 mt-1" />
                        <p className="text-sm text-slate-700 leading-snug">
                          <span className="font-black text-slate-900">{d.label}: </span>
                          {d.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-auto pt-2">
                    <button onClick={scrollToCourses} className="flex-1 min-w-[140px] px-5 py-3 bg-gameTeal text-white font-black rounded-full text-sm hover:bg-[#007a7e] transition-all active:scale-95 flex items-center justify-center gap-2">
                      <BookOpen size={15} /> View Course
                    </button>
                    <a
                      href={syllabusLinks[i] || '#'}
                      target={syllabusLinks[i] ? '_blank' : undefined}
                      rel={syllabusLinks[i] ? 'noopener noreferrer' : undefined}
                      className="flex-1 min-w-[140px] px-5 py-3 border border-slate-300 text-slate-800 font-black rounded-full text-sm hover:border-gameTeal hover:text-gameTeal transition-all flex items-center justify-center gap-2"
                    >
                      View Syllabus <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COURSES */}
      <section className="py-16 bg-slate-50 border-t border-slate-100" id="state-courses">
        <CourseGrid
          selectedExam={selectedExam}
          setSelectedExam={setSelectedExam}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>

      {/* 6. TESTIMONIALS + ACHIEVERS (shared) */}
      <TestimonialsText />
      <AchieversSection />

      {/* 7. FAQs */}
      <section className="py-16 bg-white border-t border-slate-100" id="state-faqs">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="text-center mb-10">
            <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-3 block flex items-center justify-center gap-2"><HelpCircle size={14} /> FAQs</span>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900">State AE / JE — Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'border-gameTeal shadow-md' : 'border-slate-200 shadow-sm hover:border-gameTeal/30'}`}>
                <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                  <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-gameTeal' : 'text-slate-800'}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`shrink-0 transition-transform ${openFaqIndex === i ? 'rotate-180 text-gameTeal' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {openFaqIndex === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateAeJeExamPage;
