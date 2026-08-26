
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ExamPageLayout from './ExamPageLayout';
import { Microscope, MapPin, Atom, BookOpen, Backpack, Briefcase, Building2, Globe, Rocket, Star, Zap, Calendar, Trophy, ArrowRight, TrendingUp } from 'lucide-react';

export const PsuExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Secure a Job in Top PSUs & Research Orgs",
        subtitle: "Public Sector & R&D",
        description: "Join the elite workforce of India. Prepare for Maharatna, Navratna, Miniratna PSUs and premier research institutes like ISRO, DRDO & BARC.",
        bgGradient: "bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
        icon: Briefcase,
        iconColor: "text-emerald-400"
      }}
      overview={{
        title: "PSUs & Research",
        highlight: "Careers",
        content: (
          <>
            <p>Public Sector Undertakings (PSUs) and Research Organizations offer some of the most stable, high-paying, and prestigious jobs in India for engineers.</p>
            <p>While many recruit through GATE, several organizations like ISRO, DRDO, BARC, and separate state PSUs conduct their own examinations.</p>
          </>
        ),
        stats: [
          { label: "Organisations", value: "200+" },
          { label: "Vacancies/Yr", value: "10k+" },
          { label: "Avg Package", value: "12-20 LPA" },
          { label: "Job Security", value: "100%" }
        ]
      }}
      features={[
        { title: "Maharatna PSUs", desc: "NTPC, ONGC, SAIL, BHEL, IOCL, HPCL, GAIL etc.", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Research & Development", desc: "Scientist/Engineer roles in ISRO, DRDO, BARC, CSIR.", icon: Microscope, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Separate Exams", desc: "Guidance for exams conducted independently (HAL, HPCL, BEL).", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" }
      ]}
      faqs={[
        { q: "Do all PSUs recruit through GATE?", a: "No. While many top PSUs use GATE scores, organizations like ISRO, DRDO, BARC, HPCL, BEL, and HAL often conduct their own written tests and interviews." },
        { q: "What is the age limit for PSUs?", a: "It varies. Generally, 21-28 years for General category, with relaxations for reserved categories. Some PSUs allow up to 30 years." }
      ]}
    />
  );
};

export const StateAeJeExamPage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // TODO: client to upload /state/hero-*.jpg images
  // Until they exist the <Image> fails and we fall back to the dark panel below.
  const stateSlides = [
    {
      badge: "NOTIFICATION",
      title: "State AE/JE 2026 Notifications",
      buttonText: "Explore Courses",
      imageUrl: "/state/hero-1.jpg"
    },
    {
      badge: "MOCK TEST",
      title: "Free State AE/JE Mock Test Series",
      buttonText: "Explore Courses",
      imageUrl: "/state/hero-2.jpg"
    },
    {
      badge: "DEPARTMENTS",
      title: "PWD, Irrigation & Rural Development Posts",
      buttonText: "Explore Courses",
      imageUrl: "/state/hero-3.jpg"
    },
    {
      badge: "HOME STATE",
      title: "Build Your Career Close To Home",
      buttonText: "Explore Courses",
      imageUrl: "/state/hero-4.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % stateSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [stateSlides.length]);

  const markImageFailed = (src: string) => setFailedImages((prev) => ({ ...prev, [src]: true }));

  return (
    <>
      {/* Rich hero - structure and classes mirror the GATE/ESE/SSC/RRB exam pages */}
      <section className="relative -mt-20 pt-44 md:pt-48 pb-12 overflow-hidden bg-[#001517] text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

               {/* Left Column: Text Content */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-center text-left"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 self-start">
                     <MapPin size={12} className="text-gameTeal" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">State AE/JE 2026</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.05] tracking-tighter text-left">
                     Serve Your State <br/>
                     <span className="text-gameTeal">as an Engineer</span>
                  </h1>

                  <p className="text-base md:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed font-bold text-left">
                     Secure a prestigious Assistant Engineer / Junior Engineer post in your home state. Lower competition, regular recruitment, and a stable government career close to home.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6 justify-start">
                     <Link
                        href="/courses"
                        className="px-7 py-3.5 bg-gameTeal text-white font-black rounded-full hover:bg-[#007a7e] transition-all active:scale-95 shadow-xl shadow-gameTeal/20 flex items-center gap-2 group text-sm"
                     >
                        Start Preparation
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                     <Link
                        href="/courses"
                        className="px-7 py-3.5 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-gameBlack transition-all active:scale-95 text-sm flex items-center justify-center"
                     >
                        View Syllabus
                     </Link>
                  </div>

                  {/* Latest Update Widget */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-6 max-w-sm flex items-start gap-4 text-left">
                     <div className="w-9 h-9 rounded-xl bg-gameGold/10 text-gameGold flex items-center justify-center shrink-0">
                        <Calendar size={18} />
                     </div>
                     <div>
                        <span className="text-[7px] font-black text-gameGold uppercase tracking-widest block mb-0.5">LATEST UPDATE</span>
                        <p className="text-xs font-bold text-slate-200">State AE/JE 2026 notifications releasing soon</p>
                     </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-10 border-t border-white/5 pt-6 text-left">
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">28+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">States</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">1000+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Vacancies</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">14+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Yrs Mentorship</p>
                     </div>
                  </div>
               </motion.div>

               {/* Right Column: Image Slider */}
               <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative h-full flex flex-col justify-between"
               >
                  {/* Main Display Area */}
                  <div className="relative flex-grow bg-[#001c1e] rounded-[1.5rem] border border-white/10 overflow-hidden shadow-2xl min-h-[350px]">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={activeSlide}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.4 }}
                           className="absolute inset-0 flex flex-col p-8 justify-between h-full w-full"
                        >
                           {!failedImages[stateSlides[activeSlide].imageUrl] && (
                              <Image
                                 src={stateSlides[activeSlide].imageUrl}
                                 alt={stateSlides[activeSlide].title}
                                 fill
                                 className="object-cover"
                                 referrerPolicy="no-referrer"
                                 onError={() => markImageFailed(stateSlides[activeSlide].imageUrl)}
                              />
                           )}
                           <div className="absolute inset-0 bg-gradient-to-t from-[#001c1e] via-transparent to-[#001c1e]/60"></div>

                           {/* Button bottom right corner */}
                           <div className="relative z-10 mt-auto self-end">
                              <Link
                                 href="/courses"
                                 className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all"
                              >
                                 {stateSlides[activeSlide].buttonText}
                                 <TrendingUp size={14} className="group-hover:translate-x-1 transition-transform" />
                              </Link>
                           </div>

                           {/* Decorative Elements */}
                           <div className="absolute top-8 right-8 opacity-20 z-10 text-white">
                              <MapPin size={60} />
                           </div>
                        </motion.div>
                     </AnimatePresence>

                     {/* Slide Indicators */}
                     <div className="absolute bottom-5 right-6 flex gap-1.5 z-20">
                        {stateSlides.map((_, i) => (
                           <button
                              key={i}
                              onClick={() => setActiveSlide(i)}
                              aria-label={`Go to slide ${i + 1}`}
                              className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-gameTeal' : 'w-1.5 bg-white/30'}`}
                           />
                        ))}
                     </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-4 gap-3 mt-4">
                     {stateSlides.map((slide, i) => (
                        <button
                           key={i}
                           onClick={() => setActiveSlide(i)}
                           aria-label={`Show slide ${i + 1}`}
                           className={`relative aspect-[16/9] rounded-lg border bg-[#001c1e] transition-all duration-300 overflow-hidden ${
                              i === activeSlide ? 'border-gameTeal scale-105 shadow-lg shadow-gameTeal/20' : 'border-white/10 opacity-30 hover:opacity-100'
                           }`}
                        >
                           {!failedImages[slide.imageUrl] && (
                              <Image
                                 src={slide.imageUrl}
                                 alt={slide.title}
                                 fill
                                 className="object-cover"
                                 referrerPolicy="no-referrer"
                                 onError={() => markImageFailed(slide.imageUrl)}
                              />
                           )}
                           <div className="absolute inset-0 bg-black/40"></div>
                        </button>
                     ))}
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

    <ExamPageLayout
      hideHero
      hero={{
        title: "Serve Your State as an Engineer",
        subtitle: "State AE / JE Services",
        description: "State Public Service Commissions (PSCs) regularly recruit Assistant Engineers (AE) and Junior Engineers (JE). Secure a gazetted or non-gazetted post in your home state.",
        bgGradient: "bg-gradient-to-br from-[#075d63] to-[#0a4a4f]",
        icon: MapPin,
        iconColor: "text-teal-300"
      }}
      overview={{
        title: "State",
        highlight: "Engineering Exams",
        content: (
          <>
            <p>Every state in India has its own Public Service Commission (like UPPSC, BPSC, MPSC, TNPSC) and other bodies that conduct exams for engineering posts in departments like PWD, Irrigation, and Rural Development.</p>
            <p>These exams are ideal for students who wish to work closer to home while enjoying the benefits of a government job.</p>
          </>
        ),
        stats: [
          { label: "States", value: "28+" },
          { label: "Exams/Yr", value: "50+" },
          { label: "Role", value: "AE / JE" },
          { label: "Language", value: "Regional" }
        ]
      }}
      features={[
        { title: "Home State Posting", desc: "Work in your own state with familiar culture and language.", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Less Competition", desc: "Competition is often lower compared to national level exams like GATE/ESE.", icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
        { title: "Regular Recruitment", desc: "Multiple departments release notifications throughout the year.", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" }
      ]}
      faqs={[
        { q: "What is the difference between AE and JE?", a: "AE (Assistant Engineer) is a Group-A/B Gazetted post requiring B.Tech. JE (Junior Engineer) is a Group-C post requiring Diploma/B.Tech." },
        { q: "Is local language knowledge mandatory?", a: "For many state exams, knowledge of the state's official language is required or tested." }
      ]}
    />
    </>
  );
};

export const IitNeetExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Foundation for Engineering & Medical",
        subtitle: "IIT-JEE & NEET",
        description: "Start your journey to India's premier institutes like IITs and AIIMS. Comprehensive foundation courses for 11th and 12th grade students.",
        bgGradient: "bg-gradient-to-br from-[#4c1d95] to-[#5b21b6]",
        icon: Atom,
        iconColor: "text-purple-400"
      }}
      overview={{
        title: "Entrance",
        highlight: "Exams",
        content: (
          <>
            <p>IIT-JEE (Joint Entrance Examination) and NEET (National Eligibility cum Entrance Test) are the gateways to undergraduate engineering and medical courses in India.</p>
            <p>GAME Academy provides a strong conceptual foundation in Physics, Chemistry, Mathematics, and Biology to help students crack these highly competitive exams.</p>
          </>
        ),
        stats: [
          { label: "IITs/NITs", value: "100+" },
          { label: "Medical Clgs", value: "600+" },
          { label: "Aspirants", value: "25L+" },
          { label: "Success", value: "High" }
        ]
      }}
      features={[
        { title: "Conceptual Clarity", desc: "Deep understanding of PCM/PCB fundamentals.", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
        { title: "Problem Solving", desc: "Advanced techniques for complex numericals.", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Mock Tests", desc: "All India level test series to gauge performance.", icon: Trophy, color: "text-blue-600", bg: "bg-blue-50" }
      ]}
      faqs={[
        { q: "When should I start preparing?", a: "Ideal time is from Class 11th, but many students start foundation courses from Class 9th or 10th." },
        { q: "Do you cover Boards syllabus?", a: "Yes, our courses are integrated to cover both Board exams (CBSE/ICSE) and competitive entrance exams." }
      ]}
    />
  );
};

export const NonTechExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Master General Studies & Aptitude",
        subtitle: "Non-Technical Exams",
        description: "Ace the Non-Tech portion of ESE, SSC, RRB, and Banking exams. Comprehensive coverage of Reasoning, Aptitude, History, Polity, and Current Affairs.",
        bgGradient: "bg-gradient-to-br from-[#075d63] via-[#054a4f] to-[#043f42]",
        icon: Globe,
        iconColor: "text-teal-300"
      }}
      overview={{
        title: "General",
        highlight: "Studies",
        content: (
          <>
            <p>Non-Technical subjects play a crucial role in almost every government exam. For ESE, it's a separate paper. For SSC-JE and RRB, it forms a significant weightage.</p>
            <p>Our Non-Tech courses are designed by specialists to help engineering students master subjects like History, Geography, Polity, Economy, and General Science efficiently.</p>
          </>
        ),
        stats: [
          { label: "Coverage", value: "100%" },
          { label: "Subjects", value: "10+" },
          { label: "Faculty", value: "Expert" },
          { label: "Relevance", value: "All Exams" }
        ]
      }}
      features={[
        { title: "Aptitude & Reasoning", desc: "Shortcuts and tricks for speed and accuracy.", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-50" },
        { title: "General Awareness", desc: "Static GK and Current Affairs updated daily.", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Exam Specific", desc: "Tailored content for ESE GS vs SSC GS.", icon: Star, color: "text-indigo-600", bg: "bg-indigo-50" }
      ]}
      faqs={[
        { q: "Is this course useful for Banking/CGL?", a: "Yes, the Aptitude, Reasoning, and GS portions are common across Banking, SSC CGL, and Engineering exams." },
        { q: "Do you provide current affairs?", a: "Yes, we provide monthly current affairs magazines and daily updates." }
      ]}
    />
  );
};

export const SchoolExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Strong Foundation for Future Leaders",
        subtitle: "Class 9th - 12th",
        description: "Building strong fundamentals for school exams and setting the stage for future competitive success in Engineering and Medicine.",
        bgGradient: "bg-gradient-to-br from-[#be123c] to-[#9f1239]",
        icon: Backpack,
        iconColor: "text-rose-400"
      }}
      overview={{
        title: "School",
        highlight: "Foundation",
        content: (
          <>
            <p>The journey to cracking IIT-JEE, NEET, or UPSC begins early. Our Foundation courses for Class 9th to 12th focus on deep conceptual clarity.</p>
            <p>We ensure students excel in their School/Board exams while slowly introducing them to the rigors of competitive problem solving.</p>
          </>
        ),
        stats: [
          { label: "Grades", value: "9-12" },
          { label: "Boards", value: "CBSE/ICSE" },
          { label: "Focus", value: "STEM" },
          { label: "Results", value: "100%" }
        ]
      }}
      features={[
        { title: "Board Excellence", desc: "Complete syllabus coverage for Class 10th & 12th Boards.", icon: BookOpen, color: "text-rose-600", bg: "bg-rose-50" },
        { title: "Olympiad Prep", desc: "Preparation for NTSE, KVPY, and Olympiads.", icon: Trophy, color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Future Ready", desc: "Early start for JEE/NEET aspirants.", icon: Rocket, color: "text-blue-600", bg: "bg-blue-50" }
      ]}
      faqs={[
        { q: "Which boards do you cover?", a: "We primarily focus on CBSE syllabus which aligns well with competitive exams, but concepts are universal for ICSE and State Boards." },
        { q: "Are classes live or recorded?", a: "We offer both Live interactive batches and self-paced recorded courses." }
      ]}
    />
  );
};
