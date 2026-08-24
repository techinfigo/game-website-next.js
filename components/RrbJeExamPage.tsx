'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Train, MapPin, ArrowRight, CheckCircle2,
  HardHat, Wallet, Zap, TrendingUp, Sparkles,
  Minus, Plus, Landmark, Microscope, ShieldCheck, Briefcase,
  Gift, Scale, GraduationCap, HeartPulse, Building2, UserCheck, ExternalLink, Map, ListChecks, Globe, Wrench, Settings, Ruler, Box,
  Monitor, ClipboardCheck, Info, Percent, AlertCircle, Clock, Target, FileSearch, UserPlus, Heart, Calculator, Users, Eye, Stethoscope, FileText,
  X, HelpCircle
} from 'lucide-react';
import AchieversSection from './AchieversSection';
import CourseGrid from './CourseGrid';
import TestimonialsText from './TestimonialsText';

const RrbJeExamPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSection, setActiveSection] = useState('highlights');
  // CourseGrid opens on the RRB category by default.
  const [selectedExam, setSelectedExam] = useState('RRB / State AE JE');
  const [searchTerm, setSearchTerm] = useState('');

  // Hero carousel slides - placeholder picsum images, the owner will replace them with final creatives.
  const rrbSlides = [
    {
      badge: "NOTIFICATION",
      title: "RRB JE 2026 CEN Notification Awaited",
      buttonText: "Get Alerts",
      imageUrl: "https://picsum.photos/seed/rrb-je-notification/1200/800"
    },
    {
      badge: "MOCK TEST",
      title: "Free RRB-JE Mock Test",
      buttonText: "Start Test",
      imageUrl: "https://picsum.photos/seed/rrb-je-mock/1200/800"
    },
    {
      badge: "PAY SCALE",
      title: "Level-6 Pay Matrix - Rs. 35,400",
      buttonText: "Know More",
      imageUrl: "https://picsum.photos/seed/rrb-je-payscale/1200/800"
    },
    {
      badge: "RAILWAY CAREER",
      title: "Join India's 4th Largest Railway Network",
      buttonText: "Explore Zones",
      imageUrl: "https://picsum.photos/seed/rrb-je-career/1200/800"
    }
  ];

  const rrbNavTabs = [
    { label: "Why RRB JE?", id: "highlights", icon: Info },
    { label: "RRB Zones", id: "rrb-zones", icon: Map },
    { label: "Departments", id: "mech-departments", icon: Building2 },
    { label: "Exam Pattern", id: "selection-process", icon: ClipboardCheck },
    { label: "FAQs", id: "rrb-faqs", icon: HelpCircle }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % rrbSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [rrbSlides.length]);

  useEffect(() => {
    const sections = rrbNavTabs.map((item) => item.id);

    const observerOptions = {
      root: null,
      rootMargin: '-120px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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

  const keyHighlights = [
    {
      label: "Job Security",
      title: "Permanent government position with assured career progression.",
      desc: "Enjoy the ultimate stability that comes with a central government job, ensuring a secure future for you and your family with permanent tenure.",
      image: "/exam-rrb-1.png", 
      icon: ShieldCheck,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10"
    },
    {
      label: "Attractive Salary & Perks",
      title: "Pay Level 6 with regular increments, DA, HRA, medical benefits, travel allowances, and pension under NPS.",
      desc: "Financial prosperity paired with unmatched railway-specific benefits like premium medical care and national travel passes.",
      image: "/exam-rrb-2.png", 
      icon: Wallet,
      color: "text-gameGold",
      bg: "bg-gameGold/10"
    },
    {
      label: "Nationwide Opportunities",
      title: "Postings across India in various railway zones and production units.",
      desc: "Serve the nation across diverse geographies, from metropolitan hubs to production units, experiencing India's rich engineering heritage.",
      image: "/exam-rrb-3.png", 
      icon: MapPin,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10"
    },
    {
      label: "Professional Growth",
      title: "Opportunities for promotions, departmental exams, and skill development.",
      desc: "A well-defined career ladder with merit-based fast-track promotions through regular departmental examinations.",
      image: "/exam-rrb-4.png", 
      icon: TrendingUp,
      color: "text-gameGold",
      bg: "bg-gameGold/10"
    },
    {
      label: "Work with India’s Largest Employer",
      title: "Be part of the world’s 4th largest railway network.",
      desc: "Take pride in working for the Indian Railways, a global leader in transport and the backbone of the nation's logistical infrastructure.",
      image: "/exam-rrb-5.png", 
      icon: Train,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10"
    }
  ];

  const opportunitiesAdvantages = [
    {
      title: "Stable & Respected Career",
      desc: "Government job with high social recognition and lifelong stability.",
      icon: ShieldCheck,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10"
    },
    {
      title: "Comprehensive Benefits",
      items: [
        "Medical facilities for self and family",
        "Leave Travel Concession (LTC)",
        "Provident Fund and Gratuity",
        "Railway quarters or HRA"
      ],
      icon: Gift,
      color: "text-gameGold",
      bg: "bg-gameGold/10"
    },
    {
      title: "Work-Life Balance",
      desc: "Fixed working hours, gazetted holidays, and ample leave provisions.",
      icon: Scale,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10"
    },
    {
      title: "Further Advancement",
      desc: "Eligibility for promotions to Senior Section Engineer and higher administrative roles.",
      icon: TrendingUp,
      color: "text-gameGold",
      bg: "bg-gameGold/10"
    },
    {
      title: "Pension Benefits",
      desc: "Coverage under the National Pension System (NPS) for your golden years.",
      icon: Wallet,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10"
    },
    {
      title: "Training & Development",
      desc: "Regular training programs to enhance technical and managerial skills.",
      icon: GraduationCap,
      color: "text-gameGold",
      bg: "bg-gameGold/10"
    }
  ];

  const rrbZones = [
    { name: "Ahmedabad", zone: "Western Railway (WR)", website: "rrbahmedabad.gov.in" },
    { name: "Ajmer", zone: "North Western Railway (NWR)", website: "rrbajmer.gov.in" },
    { name: "Prayagraj", zone: "North Central Railway (NCR), Northern Railway (NR)", website: "rrbald.gov.in" },
    { name: "Bengaluru", zone: "South Western Railway (SWR), Rail Wheel Factory (RWF)", website: "rrbbnc.gov.in" },
    { name: "Bhopal", zone: "West Central Railway (WCR), WR", website: "rrbbhopal.gov.in" },
    { name: "Bhubaneswar", zone: "East Coast Railway (ECoR)", website: "rrbbbs.gov.in" },
    { name: "Bilaspur", zone: "South East Central Railway (SECR), Central Railway (CR)", website: "rrbbilaspur.gov.in" },
    { name: "Chandigarh", zone: "Northern Railway (NR)", website: "rrbcdg.gov.in" },
    { name: "Chennai", zone: "Southern Railway (SR), Integral Coach Factory (ICF)", website: "rrbchennai.gov.in" },
    { name: "Gorakhpur", zone: "North Eastern Railway (NER), RDSO", website: "rrbgkp.gov.in" },
    { name: "Guwahati", zone: "Northeast Frontier Railway (NFR)", website: "rrbguwahati.gov.in" },
    { name: "Jammu-Srinagar", zone: "NR, Rail Coach Factory (RCF), Diesel Modernisation Works (DMW)", website: "rrbjammu.nic.in" },
    { name: "Kolkata", zone: "Eastern Railway (ER), South Eastern Railway (SER), Metro, Chittaranjan Locomotive Works (CLW)", website: "rrbkolkata.gov.in" },
    { name: "Malda", zone: "ER, SER", website: "rrbmalda.gov.in" },
    { name: "Mumbai", zone: "CR, WR, South Central Railway (SCR)", website: "rrbmumbai.gov.in" },
    { name: "Muzaffarpur", zone: "East Central Railway (ECR)", website: "rrbmuzaffarpur.gov.in" },
    { name: "Patna", zone: "ECR", website: "rrbpatna.gov.in" },
    { name: "Ranchi", zone: "ECR, SER", website: "rrbranchi.gov.in" },
    { name: "Secunderabad", zone: "SCR, ECoR", website: "rrbsecunderabad.gov.in" },
    { name: "Siliguri", zone: "NFR", website: "rrbsiliguri.gov.in" },
    { name: "Thiruvananthapuram", zone: "SR", website: "rrbthiruvananthapuram.gov.in" }
  ];

  const mechanicalDepartments = [
    "Carriage & Wagon",
    "Mechanical (Design & Workshop)",
    "Mechanical / Power",
    "Diesel Mechanical",
    "Diesel Mechanical (Workshop)",
    "Mechanical & Mechanical (Workshop)",
    "Welder",
    "Diesel Electrical",
    "Diesel Electrical (Workshop)"
  ];

  const civilDepartments = [
    "Civil (P. Way & Bridge)",
    "Civil (Design, Drawing & Estimation)",
    "Civil (Works)",
    "Civil / Workshop",
    "Track Machine"
  ];

  const cbt1Pattern = [
    { subject: "Mathematics", marks: 30, questions: 30 },
    { subject: "General Intelligence and Reasoning", marks: 25, questions: 25 },
    { subject: "General Awareness", marks: 15, questions: 15 },
    { subject: "General Science", marks: 30, questions: 30 }
  ];

  const cbt2Pattern = [
    { subject: "General Awareness", qs: 15, marks: 15 },
    { subject: "Physics & Chemistry", qs: 15, marks: 15 },
    { subject: "Basics of Computers and Applications", qs: 10, marks: 10 },
    { subject: "Basics of Environment and Pollution Control", qs: 10, marks: 10 },
    { subject: "Technical Abilities", qs: 100, marks: 100 },
    { subject: "Advanced Trade-Specific Module", qs: 150, marks: 150 }
  ];

  const medicalStandards = [
    {
      id: "A-3",
      fitness: "Physically fit in all respects",
      vision: [
        "Distance Vision: 6/9, 6/9 with or without glasses (power of lenses not to exceed 2D).",
        "Near Vision: Sn. 0.6, 0.6 with or without glasses.",
        "Must pass test for Colour Vision, Binocular Vision, Night Vision and Mesopic vision."
      ]
    },
    {
      id: "B-1",
      fitness: "Physically fit in all respects",
      vision: [
        "Distance Vision: 6/9, 6/12 with or without glasses (power of lenses not to exceed 4D).",
        "Near Vision: Sn. 0.6, 0.6 with or without glasses when reading or close work is required.",
        "Must pass test for Colour Vision, Binocular Vision, Night Vision and Mesopic vision."
      ]
    },
    {
      id: "C-1",
      fitness: "Physically fit in all respects",
      vision: [
        "Distance Vision: 6/12, 6/18 with or without glasses.",
        "Near Vision: Sn. 0.6, 0.6 with or without glasses when reading or close work is required."
      ]
    }
  ];

  const faqs = [
    { 
      q: "Q.1 Can I prepare for the RRB-JE Exam with GAME’s Online Coaching?", 
      a: "Ans. Absolutely! GAME’s Excellence Course is specifically designed to help candidates prepare effectively for the RRB-JE exam." 
    },
    { 
      q: "Q 2. What are the branches GAME deals with?", 
      a: "Ans. As of now, GAME provides coaching for Civil Engineering and Mechanical Engineering." 
    },
    { 
      q: "Q 3. Does GAME cover non-technical parts as well?", 
      a: "Ans. Yes, we are covering the entire syllabus of the non-technical part as well." 
    },
    { 
      q: "Q 4. Why should I choose GAME for Online Coaching?", 
      a: "Ans. GAME delivers high-quality education and top-notch content for Mechanical & Civil Engineering aspirants preparing for the RRB-JE exam. Under the leadership of Gaurav Babu Sir, a distinguished educator with 13+ years of experience, our teaching philosophy focuses on building a strong academic foundation by teaching subjects from scratch with conceptual clarity and practical problem-solving techniques. With GAME, students can confidently excel in competitive exams and achieve their career aspirations." 
    },
    { 
      q: "Q 5. Does GAME provide a test series along with the course?", 
      a: "Ans. Yes, GAME provides a test series along with the course" 
    },
    { 
      q: "Q.6 Can I Prepare for the RRB-JE Exam While Working a Full-Time Job?", 
      a: "Ans. You can prepare for the RRB-JE exam while managing a full-time job with the right strategy and dedication. GAME offers flexible RRB-JE online coaching with recorded lectures, structured study plans, and expert mentorship. By utilising focused study hours during evenings and weekends, and accessing comprehensive RRB-JE resources, success is achievable even with a busy work schedule." 
    },
    { 
      q: "Q 7. How Much Time is Needed for RRB-JE Exam Preparation for Full-Timers?", 
      a: (
        <div className="space-y-4">
          <p className="font-bold">Ans. Full-time aspirants preparing for the RRB-JE exam typically require 6-8 months of focused study. Here’s an ideal timeline:</p>
          <ul className="list-disc pl-5 space-y-3 text-slate-600">
            <li><strong>4-5 months:</strong> Complete the syllabus with conceptual clarity and regular practice of standard questions.</li>
            <li><strong>1-2 months:</strong> Focus on solving previous year's question papers (PYQs), taking mock tests, and revising key topics.</li>
            <li><strong>Last 1 month:</strong> Fine-tune weak areas, improve problem-solving speed, and focus on accuracy.</li>
          </ul>
          <p>With proper planning and structured coaching support from GAME, full-time aspirants can effectively crack the RRB-JE exam within this time frame.</p>
        </div>
      )
    },
    { 
      q: "Q 8. How Much Time is Needed for RRB-JE Exam Preparation for Working Individuals?", 
      a: (
        <div className="space-y-4">
          <p className="font-bold">Ans. Working professionals can prepare for the RRB-JE exam effectively in 8-12 months with smart time management, as the RRB-JE syllabus is broader but more direct than ESE and GATE. Here’s a realistic plan:</p>
          <ul className="list-disc pl-5 space-y-3 text-slate-600">
            <li><strong>Daily Study Hours:</strong> Dedicate 2-3 hours on weekdays and 4-6 hours on weekends.</li>
            <li><strong>Syllabus Completion:</strong> Spend the first 5-6 months covering core subjects, building conceptual clarity, and practising key questions.</li>
            <li><strong>Revision and Practice:</strong> Use the next 2-3 months to solve PYQs, take mock tests, and revise key areas.</li>
          </ul>
          <p>GAME offers flexible online coaching, structured study schedules, and concise study materials, enabling working professionals to balance their jobs and RRB-JE preparation effectively.</p>
        </div>
      )
    },
    { 
      q: "Q 9. Is Coaching Necessary for Clearing the RRB-JE Exam?", 
      a: (
        <div className="space-y-4">
          <p className="font-bold">Ans. Coaching is not mandatory for clearing the RRB-JE exam, but it can be extremely beneficial, especially for candidates who require structured guidance.</p>
          <div className="space-y-3">
            <p className="font-bold text-slate-900">Self-Study vs. Coaching:</p>
            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">If you have strong concepts, discipline, and access to quality study materials, self-study can be sufficient. Coaching institutes, however, provide expert mentorship, systematic syllabus coverage, and doubt-solving sessions.</p>
            
            <p className="font-bold text-slate-900">Time Management:</p>
            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">Working professionals or students with limited time can benefit from platforms like GAME, which offer flexible online coaching, recorded lectures, and focused content.</p>
            
            <p className="font-bold text-slate-900">Competitive Edge:</p>
            <p className="text-slate-600 pl-4 border-l-2 border-slate-200">Coaching institutes provide mock tests, previous year paper analysis, and exam-specific strategies to improve speed, accuracy, and problem-solving abilities.</p>
          </div>
          <p className="font-medium text-slate-700 italic border-l-4 border-gameGold pl-4 bg-slate-50 py-3 rounded-r-xl">
            In summary, while coaching is not a necessity, it can be catalysed by providing structure, expert guidance, and consistency, ultimately enhancing your chances of success in the RRB-JE exam.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section - Design matched to GateExamPage. Carousel images are placeholders; the owner will replace them. */}
      <section className="relative pt-44 md:pt-48 pb-16 overflow-hidden bg-[#001517] text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

               {/* Left Column: Text Content */}
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-center text-left"
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 self-start">
                     <Target size={12} className="text-gameTeal" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">RRB JE 2026</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.05] tracking-tighter text-left">
                     Accelerate Your <br/>
                     <span className="text-gameTeal">Railway Career</span>
                  </h1>

                  <p className="text-base md:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed font-bold text-left">
                     Become an RRB-Junior Engineer. Better salaries, premium lifestyles, and the prestige of Indian Railways await your engineering expertise.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8 justify-start">
                     <button onClick={() => scrollToSection('highlights')} className="px-7 py-3.5 bg-gameTeal text-white font-black rounded-full hover:bg-[#007a7e] transition-all active:scale-95 shadow-xl shadow-gameTeal/20 flex items-center gap-2 group text-sm">
                        Start Preparation
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                     <button onClick={() => scrollToSection('selection-process')} className="px-7 py-3.5 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-gameBlack transition-all active:scale-95 text-sm">
                        View Syllabus
                     </button>
                  </div>

                  {/* Latest Update Widget */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-8 max-w-sm flex items-start gap-4 text-left">
                     <div className="w-9 h-9 rounded-xl bg-gameGold/10 text-gameGold flex items-center justify-center shrink-0">
                        <Sparkles size={18} className="animate-pulse" />
                     </div>
                     <div>
                        <span className="text-[7px] font-black text-gameGold uppercase tracking-widest block mb-0.5">LATEST UPDATE</span>
                        <p className="text-xs font-bold text-slate-200">RRB JE 2026 CEN notification awaited</p>
                     </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-10 border-t border-white/5 pt-6 text-left">
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">₹35,400</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Starting Pay</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">21</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">RRB Zones</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">13+ Yrs</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Mentorship</p>
                     </div>
                  </div>
               </motion.div>

               {/* Right Column: Advertisement Scroller */}
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
                           <Image
                              src={rrbSlides[activeSlide].imageUrl}
                              alt={rrbSlides[activeSlide].title}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#001c1e] via-transparent to-[#001c1e]/60"></div>

                           {/* Small badge top left */}
                           <div className="relative z-10 bg-gameGold text-gameBlack px-2 py-0.5 rounded text-[8px] font-black uppercase self-start mb-auto">
                              {rrbSlides[activeSlide].badge}
                           </div>

                           {/* Slide Title */}
                           <div className="relative z-10 text-white font-black text-xl md:text-2xl tracking-tight max-w-sm mb-4 leading-tight text-left">
                              {rrbSlides[activeSlide].title}
                           </div>

                           {/* Button bottom right corner */}
                           <div className="relative z-10 mt-auto self-end">
                              <button className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all">
                                 {rrbSlides[activeSlide].buttonText}
                                 <TrendingUp size={14} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                           </div>

                           {/* Decorative Elements */}
                           <div className="absolute top-8 right-8 opacity-20 z-10 text-white">
                              <Train size={60} />
                           </div>
                        </motion.div>
                     </AnimatePresence>

                     {/* Slide Indicators */}
                     <div className="absolute bottom-5 right-6 flex gap-1.5 z-20">
                        {rrbSlides.map((_, i) => (
                           <button
                              key={i}
                              onClick={() => setActiveSlide(i)}
                              className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-gameTeal' : 'w-1.5 bg-white/30'}`}
                           />
                        ))}
                     </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="grid grid-cols-4 gap-3 mt-4">
                     {rrbSlides.map((slide, i) => (
                        <button
                           key={i}
                           onClick={() => setActiveSlide(i)}
                           className={`relative aspect-[16/9] rounded-lg border transition-all duration-300 overflow-hidden ${
                              i === activeSlide ? 'border-gameTeal scale-105 shadow-lg shadow-gameTeal/20' : 'border-white/10 opacity-30 hover:opacity-100'
                           }`}
                        >
                           <Image
                              src={slide.imageUrl}
                              alt={slide.title}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-black/40"></div>
                           <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                              <div className="text-[5px] font-black text-white mb-1 leading-none drop-shadow-md text-center">{slide.badge}</div>
                           </div>
                        </button>
                     ))}
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* FULL WIDTH STICKY SUB-NAVIGATION - matches GateExamPage's premium scroller style */}
      <div className="sticky top-[72px] md:top-[80px] z-40 w-full bg-[#001D1F]/95 backdrop-blur-md shadow-lg border-b border-white/5">
         <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16">
               {/* Links Scroller */}
               <div
                  className="flex items-center gap-3 overflow-x-auto w-full md:w-auto py-3 scroll-smooth no-scrollbar px-2"
                  style={{ WebkitOverflowScrolling: 'touch' }}
               >
                  {rrbNavTabs.map((item) => {
                     const Icon = item.icon;
                     const isActive = activeSection === item.id;
                     return (
                        <button
                           key={item.id}
                           onClick={() => scrollToSection(item.id)}
                           className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all duration-300 active:scale-95 border relative group ${
                              isActive
                                 ? 'bg-gameTeal text-white shadow-md shadow-gameTeal/20 border-white/10'
                                 : 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                           }`}
                        >
                           <Icon size={14} className={`transition-colors duration-300 ${isActive ? 'text-gameGold' : 'text-slate-500 group-hover:text-gameTeal'}`} />
                           <span className="tracking-wide">{item.label}</span>
                        </button>
                     );
                  })}
               </div>

               {/* Enroll Button */}
               <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-white/10 shrink-0">
                  <a
                     href="https://courses.gameacademy.in/wlp/excellence-ae-je-mechanical"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-gameGold text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_4px_15px_rgba(242,197,55,0.4)] flex items-center gap-1.5 group active:scale-95"
                  >
                     <Sparkles size={12} className="fill-black animate-pulse" />
                     <span>Enroll Now</span>
                     <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Intro Section: "What is RRB JE?" */}
      <section className="py-20 px-8 md:px-10 lg:px-12 bg-white relative">
         <div className="max-w-[1000px] mx-auto">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center md:text-left"
            >
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                  <span className="text-gameTeal"></span> What is RRB JE?
               </h2>
               
               <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                  <p>
                    The Railway Recruitment Board Junior Engineer (RRB JE) examination is a centralised recruitment drive conducted by Indian Railways to hire engineering professionals for various technical posts across its vast network. Through the Centralised Employment Notice (CEN), RRB invites applications for the positions of:
                  </p>
                  
                  <ul className="grid sm:grid-cols-3 gap-4 py-4">
                     {[
                        { name: "Junior Engineer (JE)", icon: HardHat },
                        { name: "Depot Material Superintendent (DMS)", icon: Landmark },
                        { name: "Chemical & Metallurgical Assistant (CMA)", icon: Microscope }
                     ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                           <div className="w-8 h-8 rounded-lg bg-gameTeal flex items-center justify-center text-white shrink-0 shadow-sm">
                              <item.icon size={16} />
                           </div>
                           <span className="font-bold text-sm text-slate-800">{item.name}</span>
                        </li>
                     ))}
                  </ul>

                  <div className="bg-slate-900 p-6 md:p-8 rounded-[2rem] text-white border-l-8 border-gameGold shadow-xl">
                     <p>
                        These are <strong className="text-gameGold">Group 'C' posts at Level 6</strong> in the 7th CPC Pay Matrix, offering an initial pay of <strong className="text-white">Rs. 35,400/-</strong> along with other allowances and benefits as per government norms.
                     </p>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 3. KEY HIGHLIGHTS SECTION: "Why is RRB JE the Right Choice?" */}
      <section id="highlights" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-32 border-t border-slate-200">
         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     <span className="text-gameTeal"></span> Why is RRB JE the Right Choice?
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl font-bold max-w-4xl mx-auto leading-relaxed mb-6">
                    Choosing a career as an RRB JE offers unmatched stability, growth, and prestige:
                  </p>
                  <div className="inline-block bg-gameGold text-black px-6 py-2 rounded-full font-black uppercase tracking-widest text-sm shadow-md">
                     Launch your future with India's Technical Backbone!
                  </div>
               </motion.div>
            </div>

            <div className="space-y-24">
               {keyHighlights.map((item, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 50 }} 
                     whileInView={{ opacity: 1, y: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ duration: 0.6 }}
                     className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                  >
                     <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gameTeal/5 rounded-full blur-3xl transform rotate-12"></div>
                        <div className="relative rounded-[2.5rem] p-3 border border-white bg-white shadow-2xl overflow-hidden group aspect-video lg:aspect-[4/3]">
                           <Image 
                              src={item.image} 
                              alt={item.label} 
                              fill
                              className="object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                              <p className="text-lg font-black italic">Leading India's Modernization</p>
                           </div>
                        </div>
                     </div>

                     <div className="lg:w-1/2">
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white border border-slate-200 ${item.color} font-black text-xs uppercase tracking-widest mb-6 shadow-sm`}>
                           {item.label}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight group-hover:text-gameTeal transition-colors">
                           {item.title}
                        </h3>
                        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8">
                           {item.desc}
                        </p>
                        <button className="bg-gameTeal text-white px-8 py-3 rounded-xl font-bold hover:bg-gameTealDark transition-all shadow-lg flex items-center gap-2 group">
                           Join Excellence Course <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

  

      {/* SECTION 4: DIFFERENT RRB JE ZONES */}
      <section id="rrb-zones" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                     <span className="text-gameTeal"></span> Different RRB JE Zones
                  </h2>
                  <div className="prose prose-lg text-slate-600 space-y-6 max-w-4xl font-medium">
                     <p>
                        Indian Railways is divided into <strong className="text-slate-900">multiple zones and production units (PUs)</strong>, each managed by a specific Railway Recruitment Boards (RRBs). Candidates can choose <strong className="text-slate-900">one RRB</strong> during the application process, but may be allocated to any zone under that RRB based on vacancy and preference.
                     </p>
                     <div className="flex items-center gap-3 py-4 border-y border-slate-200 my-8">
                        <div className="w-12 h-12 bg-gameTeal text-white rounded-2xl flex items-center justify-center shadow-lg">
                           <ListChecks size={24} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">List of RRBs & Their Official Websites:</h3>
                     </div>
                  </div>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[20%] text-center">RRB Name</th>
                           <th className="p-6 border-r border-white/10 w-[50%]">Zone(s) Covered</th>
                           <th className="p-6 w-[30%] text-center">Official Website</th>
                        </tr>
                     </thead>
                     <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                        {rrbZones.map((rrb, i) => (
                           <tr key={i} className="hover:bg-slate-50 transition-all duration-300 group">
                              <td className="p-6 text-center font-black text-gameTeal border-r border-slate-100 bg-slate-50/30">
                                 {rrb.name}
                              </td>
                              <td className="p-6 font-bold text-slate-700 border-r border-slate-100 leading-relaxed">
                                 {rrb.zone}
                              </td>
                              <td className="p-6 text-center align-middle">
                                 <a 
                                    href={`https://${rrb.website}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-gameTeal font-black hover:bg-gameTeal hover:text-white transition-all shadow-sm border border-slate-200"
                                 >
                                    <Globe size={14} />
                                    {rrb.website}
                                    <ExternalLink size={12} className="opacity-50" />
                                 </a>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="mt-12 bg-gameTeal/5 p-8 rounded-[2.5rem] border-l-4 border-gameTeal flex items-center gap-6">
               <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gameTeal shadow-md shrink-0">
                  <Map size={32} strokeWidth={2.5} />
               </div>
               <p className="text-lg font-bold text-slate-700 leading-relaxed">
                  Choosing the right zone is a strategic decision. Consider <span className="text-gameTeal">vacancy counts, future transfer policies, and proximity to your home state</span> before finalizing your RRB selection.
               </p>
            </div>
         </div>
      </section>

      {/* SECTION 5: DEPARTMENTS FOR THE MECHANICAL BRANCH */}
      <section id="mech-departments" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     <span className="text-gameTeal"></span> Departments for the Mechanical Branch
                  </h2>
                  <div className="bg-slate-900 p-8 rounded-[2.5rem] border-l-8 border-gameGold shadow-2xl mb-12 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Settings size={120} className="text-white" />
                     </div>
                     <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed relative z-10">
                        Candidates with a <strong className="text-gameGold">Diploma/Degree in Mechanical, Production, Automobile, Manufacturing, Mechatronics, Industrial, or allied disciplines</strong> can apply for positions in the following departments:
                     </p>
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {mechanicalDepartments.map((dept, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 15 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:bg-white hover:shadow-xl hover:border-gameTeal/20 transition-all group"
                  >
                     <div className="w-10 h-10 rounded-xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shrink-0 group-hover:bg-gameTeal group-hover:text-white transition-colors">
                        <Wrench size={20} />
                     </div>
                     <span className="font-bold text-slate-800 leading-tight">{dept}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 6: DEPARTMENTS FOR THE CIVIL BRANCH */}
      <section id="civil-departments" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     <span className="text-gameTeal"></span> Departments for the Civil Branch
                  </h2>
                  <div className="bg-gameTeal p-8 rounded-[2.5rem] border-l-8 border-gameGold shadow-2xl mb-12 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Building2 size={120} className="text-white" />
                     </div>
                     <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed relative z-10">
                        Candidates with a <strong className="text-gameGold">Diploma/Degree in Civil Engineering or B.Sc in Civil Engineering</strong> can apply for positions in the following departments:
                     </p>
                  </div>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {civilDepartments.map((dept, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 15 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4 hover:bg-slate-900 hover:text-white hover:shadow-xl hover:border-slate-900 transition-all group"
                  >
                     <div className="w-10 h-10 rounded-xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shrink-0 group-hover:bg-gameGold group-hover:text-black transition-colors">
                        <Ruler size={20} />
                     </div>
                     <span className="font-bold text-slate-800 group-hover:text-white leading-tight">{dept}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 7: RRB JE SELECTION PROCESS & EXAM PATTERN */}
      <section id="selection-process" className="py-24 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-16">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                     <span className="text-gameTeal"></span> RRB JE Selection Process & Exam Pattern
                  </h2>
                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-gameTeal shadow-lg mb-12 flex items-center gap-6">
                     <div className="w-16 h-16 rounded-2xl bg-gameTeal text-white flex items-center justify-center shrink-0 shadow-md">
                        <ClipboardCheck size={32} />
                     </div>
                     <p className="text-slate-700 text-lg font-bold leading-relaxed">
                        The selection process consists of <span className="text-gameTeal">two Computer-Based Tests (CBTs)</span>, followed by Document Verification (DV) and Medical Examination.
                     </p>
                  </div>
               </motion.div>
            </div>

            <div className="space-y-24">
               {/* 7.1 1st Stage CBT */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
               >
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                        <span className="text-gameTeal">A-</span> First Stage CBT <span className="text-slate-400 font-medium text-lg">(Common for all notified posts)</span>
                     </h3>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-4 border border-white/5 shadow-xl">
                           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gameGold shrink-0">
                              <Clock size={24} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</p>
                             <p className="text-lg font-bold">90 Minutes</p>
                           </div>
                        </div>
                        <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-4 border border-white/5 shadow-xl">
                           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gameTeal shrink-0">
                              <Target size={24} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Questions</p>
                              <p className="text-lg font-bold">100 Multiple Choice</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 text-white p-6 text-center">
                        <h4 className="font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                           <Monitor size={18} className="text-gameGold" /> CBT-1 Structure & Distribution of Marks
                        </h4>
                     </div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                           <thead>
                              <tr className="bg-slate-50 text-slate-500 text-[11px] font-black uppercase tracking-widest border-b border-slate-100">
                                 <th className="p-6 border-r border-slate-100 text-center w-[15%]">Stage</th>
                                 <th className="p-6 border-r border-slate-100 w-[55%]">Subjects & CBT-1</th>
                                 <th className="p-6 border-r border-slate-100 text-center w-[15%]">Marks</th>
                                 <th className="p-6 text-center w-[15%]">Questions</th>
                              </tr>
                           </thead>
                           <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                              {cbt1Pattern.map((row, i) => (
                                 <tr key={i} className="hover:bg-gameTeal/10 transition-colors">
                                    {i === 0 && (
                                       <td rowSpan={4} className="p-6 text-center font-black text-gameTeal border-r border-slate-100 align-middle bg-slate-50/50">
                                          CBT - 1
                                       </td>
                                    )}
                                    <td className="p-6 border-r border-slate-100 font-bold">{row.subject}</td>
                                    <td className="p-6 border-r border-slate-100 text-center font-black">{row.marks}</td>
                                    <td className="p-6 text-center font-black">{row.questions}</td>
                                 </tr>
                              ))}
                              <tr className="bg-slate-900 text-white">
                                 <td colSpan={2} className="p-6 font-black text-right border-r border-white/10 uppercase tracking-widest">Total</td>
                                 <td className="p-6 text-center font-black text-2xl text-gameGold">100</td>
                                 <td className="p-6 text-center font-black text-2xl text-gameGold">100</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </motion.div>

               {/* 7.2 2nd Stage CBT */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
               >
                  <div>
                     <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                        <span className="text-gameTeal">B-</span> Second Stage CBT
                     </h3>
                     <div className="bg-gameTeal/5 p-8 rounded-[2rem] border-l-4 border-gameTeal mb-8">
                        <p className="text-slate-700 text-lg leading-relaxed font-bold">
                           Shortlisting of Candidates for the second stage CBT exam shall be based on the normalised marks obtained by them in the First Stage CBT Exam. The <span className="text-gameTeal underline decoration-2 underline-offset-4">total number of candidates to be shortlisted for the second Stage shall be 15 times</span> the community-wise total vacancy of Posts notified against the RRB as per their merit in the 1st Stage CBT.
                        </p>
                     </div>
                     <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-4 border border-white/5 shadow-xl">
                           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gameGold shrink-0">
                              <Clock size={24} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</p>
                                <p className="text-lg font-bold">120 Minutes</p>
                           </div>
                        </div>
                        <div className="bg-slate-900 text-white p-6 rounded-2xl flex items-center gap-4 border border-white/5 shadow-xl">
                           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gameTeal shrink-0">
                              <Target size={24} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Questions</p>
                              <p className="text-lg font-bold">300 Multiple Choice</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
                     <div className="bg-slate-900 text-white p-6 text-center">
                        <h4 className="font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3">
                           <Monitor size={18} className="text-gameGold" /> CBT-2 Structure & Distribution of Marks
                        </h4>
                     </div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                           <thead>
                              <tr className="bg-slate-50 text-slate-500 text-[11px] font-black uppercase tracking-widest border-b border-slate-100">
                                 <th className="p-6 border-r border-slate-100 w-[70%]">Subjects</th>
                                 <th className="p-6 border-r border-slate-100 text-center w-[15%]">No. of Questions</th>
                                 <th className="p-6 text-center w-[15%]">Marks for each Section</th>
                              </tr>
                           </thead>
                           <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                              {cbt2Pattern.map((row, i) => (
                                 <tr key={i} className="hover:bg-gameTeal/10 transition-colors">
                                    <td className="p-6 border-r border-slate-100 font-bold">{row.subject}</td>
                                    <td className="p-6 border-r border-slate-100 text-center font-black">{row.qs}</td>
                                    <td className="p-6 text-center font-black text-gameTeal">{row.marks}</td>
                                 </tr>
                              ))}
                              <tr className="bg-slate-900 text-white">
                                 <td colSpan={2} className="p-6 font-black text-right border-r border-white/10 uppercase tracking-widest">Total</td>
                                 <td className="p-6 text-center font-black text-2xl text-gameGold">300</td>

                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-6">
                     <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                        <div className="flex items-center gap-3 text-gameTeal mb-2">
                           <AlertCircle size={24} />
                           <h4 className="font-black text-sm uppercase tracking-wider">Crucial Pattern Notes</h4>
                        </div>
                        <ul className="space-y-3">
                           <li className="flex items-start gap-2 text-xs font-bold text-slate-600 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-gameTeal mt-2 shrink-0"></div>
                              <span>The section-wise distribution given in the above table is only indicative, and there may be some variations in the actual question papers.</span>
                           </li>
                           <li className="flex items-start gap-2 text-xs font-bold text-slate-600 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-gameTeal mt-2 shrink-0"></div>
                              <span>There shall be negative marking in CBT (Computer-Based Test/Examination) and  (1/3)   marks shall be deducted for each wrong answer.</span>
                           </li>
                        </ul>
                     </div>
                     <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                        <div className="flex items-center gap-3 text-gameTeal mb-2">
                           <Calculator size={24} />
                           <h4 className="font-black text-sm uppercase tracking-wider">Aids & Eligibility</h4>
                        </div>
                        <ul className="space-y-3">
                           <li className="flex items-start gap-2 text-xs font-bold text-slate-600 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-gameTeal mt-2 shrink-0"></div>
                              <span>Minimum percentage of marks for eligibility in various categories: UR - 40%, EWS - 40%, OBC(NCL) - 30%, SC - 30%, ST - 25%.</span>
                           </li>
                           <li className="flex items-start gap-2 text-xs font-bold text-slate-600 leading-relaxed">
                              <div className="w-1.5 h-1.5 rounded-full bg-gameTeal mt-2 shrink-0"></div>
                              <span>A virtual calculator will be made available on the Computer Monitor during the Second Stage CBT.</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </motion.div>

               {/* 7.3 DOCUMENT VERIFICATION (DV) */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
               >
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                     <span className="text-gameTeal">C-</span> DOCUMENT VERIFICATION (DV)
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[
                        { 
                           num: "1", 
                           title: "Shortlisting", 
                           items: ["Candidates will be shortlisted based on CBT 2 marks and merit.", "Only as many candidates as vacancies will be called for Document Verification."],
                           icon: UserCheck,
                           color: "text-gameTeal",
                           bg: "bg-gameTeal/10"
                        },
                        { 
                           num: "2", 
                           title: "Tie-Breaking Rule", 
                           items: ["An older candidate gets higher merit.", "If age is the same, order by first name (A to Z)."],
                           icon: Scale,
                           color: "text-gameGold",
                           bg: "bg-gameGold/10"
                        },
                        { 
                           num: "3", 
                           title: "Verification Process", 
                           items: ["Must bring original certificates on the given date.", "No extra time given - failure to produce documents means cancellation."],
                           icon: FileSearch,
                           color: "text-gameTeal",
                           bg: "bg-gameTeal/10"
                        },
                        { 
                           num: "4", 
                           title: "Empanelment", 
                           items: ["Based on merit after Document verification.", "Requires passing the medical exam."],
                           icon: ClipboardCheck,
                           color: "text-gameGold",
                           bg: "bg-gameGold/10"
                        },
                        { 
                           num: "5", 
                           title: "Appointment Conditions", 
                           items: ["Passing the medical fitness test.", "Verification of certificates & background check."],
                           icon: HeartPulse,
                           color: "text-gameTeal",
                           bg: "bg-gameTeal/10"
                        },
                        { 
                           num: "6", 
                           title: "Posting & Zone Allotment", 
                           items: ["Zone/unit allotted based on merit, choice, medical standard, and vacancies.", "Once allotted, no next round preference.", "RRB can post you to a zone you did not choose if needed."],
                           icon: MapPin,
                           color: "text-gameGold",
                           bg: "bg-gameGold/10"
                        }
                     ].map((step, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 flex flex-col hover:bg-white hover:shadow-xl transition-all group">
                           <div className="flex items-center justify-between mb-6">
                              <div className={`w-12 h-12 rounded-2xl ${step.bg} flex items-center justify-center ${step.color} shadow-sm group-hover:scale-110 transition-transform`}>
                                 <step.icon size={24} />
                              </div>
                              <span className="text-3xl font-black text-slate-200 group-hover:text-slate-100 transition-colors">{step.num}</span>
                           </div>
                           <h4 className="text-lg font-black text-slate-900 mb-4 group-hover:text-gameTeal transition-colors">{step.title}</h4>
                           <ul className="space-y-3">
                              {step.items.map((item, idx) => (
                                 <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-500 leading-relaxed">
                                    <div className="w-1 h-1 rounded-full bg-gameTeal mt-1.5 shrink-0"></div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="bg-[#0f1115] text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                           <GraduationCap size={120} />
                        </div>
                        <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                           <span className="text-gameGold">7.</span> Offer Letter
                        </h4>
                        <ul className="space-y-4">
                           <li className="flex items-start gap-3 text-sm font-bold text-slate-400">
                              <CheckCircle2 size={18} className="text-gameGold shrink-0" />
                              <span>RRB only recommends candidates. An appointment letter comes from the Railway Administration.</span>
                           </li>
                        </ul>
                     </div>
                     <div className="bg-[#0f1115] text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                           <Users size={120} />
                        </div>
                        <h4 className="text-xl font-black mb-6 flex items-center gap-3">
                           <span className="text-gameGold">8.</span> Waitlist & Additional Selection
                        </h4>
                        <ul className="space-y-4">
                           <li className="flex items-start gap-3 text-sm font-bold text-slate-400">
                              <CheckCircle2 size={18} className="text-gameGold shrink-0" />
                              <span>If needed, RRB may select more candidates from lower merit ranks — but this does not guarantee appointment.</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </motion.div>

               {/* SECTION 7.4: MEDICAL EXAMINATIONS (ME) */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
               >
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                     <span className="text-gameTeal">D-</span> MEDICAL EXAMINATIONS
                  </h3>

                  <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
                     <p className="text-slate-700 text-lg font-bold leading-relaxed mb-10">
                        Candidates called for Document Verification (DV) must pass the medical fitness test conducted by the Railways.
                     </p>

                     <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-full bg-gameTeal/10 flex items-center justify-center text-gameTeal">
                                 <Stethoscope size={20} />
                              </div>
                              <h4 className="font-black text-slate-900">1. Why Medical Fitness Matters?</h4>
                           </div>
                           <p className="text-sm text-slate-600 font-bold leading-relaxed">
                              Ensures candidates are fit to perform the duties of the post they are selected for. <span className="text-gameTeal">Visual Acuity (vision standards)</span> is especially important for railway service.
                           </p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 rounded-full bg-gameGold/10 flex items-center justify-center text-gameGold">
                                 <Scale size={20} />
                              </div>
                              <h4 className="font-black text-slate-900">2. Medical Standards Vary</h4>
                           </div>
                           <p className="text-sm text-slate-600 font-bold leading-relaxed">
                              Different railway job categories have different medical requirements. Candidates must meet the standard specified for their particular post.
                           </p>
                        </div>
                     </div>

                     <div className="mb-10">
                        <p className="text-slate-600 text-sm font-bold italic mb-6 border-l-4 border-gameGold pl-4">
                           The medical requirements against different medical standards for different categories are outlined below:
                        </p>

                        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
                           <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse">
                                 <thead>
                                    <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-widest font-black">
                                       <th className="p-5 border-r border-white/10 w-[10%] text-center">S. No.</th>
                                       <th className="p-5 border-r border-white/10 w-[15%] text-center">Medical Standard</th>
                                       <th className="p-5 border-r border-white/10 w-[20%] text-center">General Fitness</th>
                                       <th className="p-5 w-[55%]">Vision Standards</th>
                                    </tr>
                                 </thead>
                                 <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                                    {medicalStandards.map((std, i) => (
                                       <tr key={i} className="hover:bg-slate-50 transition-colors">
                                          <td className="p-5 text-center font-bold text-slate-400 border-r border-slate-100">{i + 1}</td>
                                          <td className="p-5 text-center font-black text-gameTeal border-r border-slate-100 bg-slate-50/30">{std.id}</td>
                                          <td className="p-5 text-center font-bold text-slate-800 border-r border-slate-100 leading-relaxed">{std.fitness}</td>
                                          <td className="p-5">
                                             <ul className="space-y-2">
                                                {std.vision.map((item, idx) => (
                                                   <li key={idx} className="flex gap-2">
                                                      <span className="text-slate-400 font-black shrink-0">{String.fromCharCode(105 + idx)}.</span>
                                                      <span className="font-medium">{item}</span>
                                                   </li>
                                                ))}
                                             </ul>
                                          </td>
                                       </tr>
                                    ))}
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>

                     <div className="grid lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                           {[
                              { 
                                 id: "3", 
                                 title: "Standards are General Guidelines", 
                                 desc: "The listed medical requirements are basic and not a complete list. For full details, check Chapter 5 of the Indian Railway Medical Manual (IRMM) Vol. I on the official railway website.",
                                 link: { text: "(link 1)", url: "https://www.rrbcdg.gov.in/" }
                              },
                              { 
                                 id: "4", 
                                 title: "Your Responsibility", 
                                 desc: "You must ensure you meet the specific medical standards for your chosen post." 
                              },
                              { 
                                 id: "5", 
                                 title: "Surgery Restrictions", 
                                 desc: "If you have had LASIK or any similar eye surgery to correct vision, you cannot apply for posts requiring Medical Standard A-3." 
                              }
                           ].map((item, i) => (
                              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 group hover:border-gameTeal transition-all">
                                 <h4 className="font-black text-slate-900 mb-3 flex items-center gap-3">
                                    <span className="text-gameTeal">{item.id}.</span> {item.title}
                                 </h4>
                                 <p className="text-xs text-slate-500 font-bold leading-relaxed">
                                    {item.desc} {item.link && (
                                       <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="text-gameTeal underline font-black ml-1">
                                          {item.link.text}
                                       </a>
                                    )}
                                 </p>
                              </div>
                           ))}
                        </div>

                        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                              <Eye size={120} />
                           </div>
                           <h4 className="text-xl font-black text-gameGold mb-6 flex items-center gap-3 relative z-10">
                              <span className="text-white">6.</span> If you've had LASIK surgery:
                           </h4>
                           <ul className="space-y-4 relative z-10">
                              <li className="flex items-start gap-3">
                                 <X size={18} className="text-gameTeal shrink-0 mt-1" />
                                 <span className="text-sm font-bold text-slate-300">You <span className="text-gameTeal uppercase">cannot be considered</span> for posts requiring Medical Standard A-3.</span>
                              </li>
                              <li className="flex items-start gap-3">
                                 <CheckCircle2 size={18} className="text-gameGold shrink-0 mt-1" />
                                 <span className="text-sm font-bold text-slate-300">You may be eligible for <span className="text-gameGold">Medical Standard B-1</span> if:</span>
                              </li>
                           </ul>
                           <div className="mt-4 ml-7 grid gap-2 relative z-10">
                              {["No surgery-related complications", "Surgery done at least 1 year ago (proof needed)", "Corneal thickness after surgery > 425 microns", "Vision meets railway standards", "Fundus should be normal", "No evidence of progressive Eye disease."].map((p, i) => (
                                 <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-400">
                                    <div className="w-1 h-1 rounded-full bg-gameGold"></div>
                                    {p}
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>

                     <div className="mt-8 grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                           <h4 className="font-black text-slate-900 mb-3 flex items-center gap-3">
                              <span className="text-gameTeal">7.</span> Ex-servicemen:
                           </h4>
                           <p className="text-xs text-slate-500 font-bold leading-relaxed">
                              Medical rules are different – check Para 534 of IRMM, Vol. I online <a href="https://www.indianrailways.gov.in" target="_blank" rel="noopener noreferrer" className="text-gameTeal underline font-black">(Click Here)</a>.
                           </p>
                        </div>
                        <div className="bg-gameTeal/10 p-6 rounded-2xl border border-gameTeal/20">
                           <h4 className="font-black text-gameTeal mb-4 flex items-center gap-3">
                              <span>8.</span> Medical failure consequences:
                           </h4>
                           <ul className="space-y-2">
                              {[
                                 "If you fail the medical, you will not be selected.",
                                 "No alternate job will be offered by the Railways.",
                                 "You may get one final chance to appeal with payment.",
                                 "The appeal result is final and binding."
                              ].map((item, i) => (
                                 <li key={i} className="flex items-start gap-2 text-[11px] font-bold text-gameTeal/80">
                                    <div className="w-1 h-1 rounded-full bg-gameTeal mt-1.5 shrink-0"></div>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>

                     <div className="mt-12 pt-10 border-t border-slate-200">
                        <h4 className="font-black text-slate-900 text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                           <Info size={16} className="text-gameGold" /> Note:
                        </h4>
                        <div className="space-y-4">
                           <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group">
                              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-gameTeal group-hover:text-white transition-colors">
                                 <Globe size={18} />
                              </div>
                              <p className="flex-1 text-sm font-bold text-slate-600">
                                 i) For Tentative Vacancies, visit the official website of the Railway Recruitment Board <a href="https://www.rrbcdg.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gameTeal underline font-black hover:text-gameTealDark ml-1">(Click Here)</a>
                              </p>
                           </div>
                           <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm group">
                              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-gameGold group-hover:text-black transition-colors">
                                 <FileText size={18} />
                              </div>
                              <p className="flex-1 text-sm font-bold text-slate-600">
                                 ii) Access RRB JE MECHANICAL & CIVIL Syllabus <button className="text-gameTeal underline font-black hover:text-black ml-1">(Click Here)</button>
                              </p>
                           </div>
                        </div>
                        <div className="mt-8 grid sm:grid-cols-2 gap-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                           <p>Link 1: <a href="https://www.rrbcdg.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gameTeal hover:underline">https://www.rrbcdg.gov.in/</a></p>
                           <p>Link 2: <a href="https://drive.google.com/drive/folders/1XdotguRhuEfFleV8rOCALA7aV7m3xyoa?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gameTeal hover:underline">RRB-JE - ME & CE Syllabus</a></p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Video testimonials ("Spotlight on our Results") - shared AchieversSection component */}
      <AchieversSection />

      {/* COURSE GRID SECTION - shared CourseGrid component, defaulted to the RRB / State AE JE category */}
      <section id="rrb-courses" className="bg-slate-50 scroll-mt-32">
        <CourseGrid
          selectedExam={selectedExam}
          setSelectedExam={setSelectedExam}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>

      {/* RRB-JE Success Stories - shared TestimonialsText component */}
      <TestimonialsText />

      {/* 8. FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-32" id="rrb-faqs">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
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
                                 <div className="pt-4 flex items-start gap-3">
                                    <img
                                       src="/gaurav-sir.png"
                                       alt="Gaurav Babu Sir"
                                       className="w-10 h-10 rounded-full object-cover object-top border-2 border-white shadow-md ring-1 ring-gameTeal/20 shrink-0"
                                    />
                                    <div className="text-slate-600 leading-relaxed font-medium">{faq.a}</div>
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 bg-gameTeal text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
         <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Your Journey to <br/> Indian Railways Starts Here!</h2>
            <p className="text-slate-100 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join thousands of students who have secured their dreams with Gaurav Babu Sir&apos;s mentorship. Enroll in our specialized RRB-JE course today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <a
                  href="https://courses.gameacademy.in/wlp/excellence-ae-je-mechanical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gameGold text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl hover:-translate-y-1"
               >
                  Enroll in Excellence Course
               </a>
               <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">Watch Free Demo</button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default RrbJeExamPage;
