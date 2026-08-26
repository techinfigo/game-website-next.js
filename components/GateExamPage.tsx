'use client';

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  GraduationCap, Briefcase, Globe, Microscope, 
  Award, BookOpen, TrendingUp, Layers, Star, 
  ArrowRight, CheckCircle2, CheckCircle2 as CheckCircle2Icon, ChevronDown, Sparkles,
  Landmark, Book, Download, Table as TableIcon, FileText, Clock, Zap, Calculator, Calendar, BarChart3, Lightbulb, History, Trophy, AlertCircle, Building2, Rocket,
  Wallet, Gift, Laptop, MessageCircle, PenTool, Users, Plus, Minus, HelpCircle, ArrowUpRight, Menu, ExternalLink, Info, ClipboardCheck, TrendingDown, Sigma, FileCheck, Percent, Gem, Heart, ShieldCheck, Smartphone, Youtube, ExternalLink as ExternalLinkIcon, Train, HardHat, Anchor, Shield, Ticket, UserCheck, Briefcase as JobIcon,
  Play, X, Crown, Target, Layout, Sparkle, Atom
} from 'lucide-react';

import CourseGrid from './CourseGrid';
import CourseHelpSection from './CourseHelpSection';
import AchieversSection from './AchieversSection';
import TestimonialsText from './TestimonialsText';
import AppStoreButtons from './AppStoreButtons';

const GateExamPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedExam, setSelectedExam] = useState('GATE / ESE');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      badge: "REGISTRATION",
      title: "GATE 2026 Registration Open",
      buttonText: "Register Now",
      imageUrl: "https://picsum.photos/seed/gate-reg/1200/800",
      bgColor: "bg-[#004d50]"
    },
    {
      badge: "MOCK TEST",
      title: "Free GATE Mock Test",
      buttonText: "Start Test",
      imageUrl: "https://picsum.photos/seed/gate-mock/1200/800",
      bgColor: "bg-[#002b2e]"
    },
    {
      badge: "PSU JOBS",
      title: "Top PSU Recruitment Through GATE",
      buttonText: "Explore Jobs",
      imageUrl: "https://picsum.photos/seed/psu-jobs/1200/800",
      bgColor: "bg-[#004d50]"
    },
    {
      badge: "IIT M.TECH",
      title: "IIT Admission Through GATE",
      buttonText: "Check Cutoffs",
      imageUrl: "https://picsum.photos/seed/iit-mtech/1200/800",
      bgColor: "bg-[#002b2e]"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = [
      'overview',
      'gate-courses',
      'gate-hall-of-fame',
      'gate-excellence',
      'eligibility',
      'advantages',
      'updates',
      'important-dates',
      'distribution',
      'combinations',
      'exam-schedule',
      'cutoffs',
      'organisers',
      'psus',
      'gate-faqs'
    ];
    
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

  const rankers = [
    {
      name: "Abhishek Singh",
      rank: "AIR 1 - GATE ME",
      image: "/images/rankers/ranker-rk-1.png",
      videoId: "D6HOo41x2Ls"
    },
    {
      name: "Ananya Ray",
      rank: "AIR 1 - GATE ME",
      image: "/images/rankers/ranker-rk-2.png",
      videoId: "gvK9V0trlaw"
    },
    {
      name: "Siddharth S.",
      rank: "AIR 45 - ESE ME",
      image: "/images/rankers/ranker-rk-3.png",
      videoId: "Ta7gKIxxya0"
    },
    {
      name: "Megha Gupta",
      rank: "AIR 4 - ESE ME",
      image: "/images/rankers/ranker-rk-4.png",
      videoId: "D6HOo41x2Ls"
    }
  ];

  const courseBenefits = [
    {
      title: "Quality Content & Visualisation",
      desc: "Master complex theories through visualized learning. We simplify high-level engineering concepts into intuitive stories and hacks.",
      icon: Lightbulb,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5",
      points: ["Concept from Scratch", "Visualization Hacks", "Exam-Oriented Depth"]
    },
    {
      title: "The Ultimate Practice Shield",
      desc: "Crack any pattern with our exhaustive repository of PYQs, DPPs, and Mock Tests designed to simulate the actual GATE environment.",
      icon: Target,
      color: "text-gameGoldDark",
      bg: "bg-gameGold/10",
      points: ["Full-Length Mock Tests", "Topic-wise DPPs", "Previous Year Analysis"]
    },
    {
      title: "Personalized Support Ecosystem",
      desc: "You are never alone. Get direct access to Gaurav Babu Sir and a dedicated team of experts to clear your doubts within minutes.",
      icon: Users,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      points: ["1:1 Mentorship", "24/7 Doubt Support", "Strategy & Mindset Coaching"]
    },
    {
      title: "Modern Learning Analytics",
      desc: "Track your progress with our advanced dashboard. Identify your weak areas and work on them before they become obstacles.",
      icon: BarChart3,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      points: ["Real-time Performance", "Weakness Mapping", "Growth Tracking"]
    }
  ];

  // TODO: client to upload opportunity images
  const gateAdvantages = [
    {
      title: "Higher Education Opportunities",
      desc: "Admission to IITs, NITs, IIITs, and other top institutes for M.Tech/M.E. programs. Receive a monthly stipend of Rs. 12,400 during postgraduate studies.",
      icon: GraduationCap,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-1.png",
      bgImage: "/gate/opportunity-1.jpg",
    },
    {
      title: "PSU Recruitment",
      desc: "Direct recruitment into top Public Sector Undertakings (PSUs) like ONGC, BHEL, GAIL, NTPC, etc., with attractive salary packages and job security.",
      icon: Briefcase,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-2.png",
      bgImage: "/gate/opportunity-2.jpg",
    },
    {
      title: "Opportunities Abroad",
      desc: "Admission to international universities such as the National University of Singapore (NUS) and the Technical University of Munich (TUM).",
      icon: Globe,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-3.png",
      bgImage: "/gate/opportunity-3.jpg",
    },
    {
      title: "Research Opportunities",
      desc: "Openings for R&D roles in reputed research organisations like ISRO, DRDO, and BARC etc.",
      icon: Microscope,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-4.png",
      bgImage: "/gate/opportunity-4.jpg",
    },
    {
      title: "Scholarships and Fellowships",
      desc: "Eligibility for AICTE/UGC scholarships and Junior Research Fellow (JRF) positions.",
      icon: Award,
      color: "text-gameGold",
      bg: "bg-gameGold/10",
      image: "/advantage-5.png",
      bgImage: "/gate/opportunity-5.jpg",
    },
    {
      title: "Teaching Careers",
      desc: "Eligibility for teaching positions in engineering colleges and universities.",
      icon: BookOpen,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-6.png",
      bgImage: "/gate/opportunity-6.jpg",
    },
    {
      title: "Career Growth in Industry",
      desc: "Access to better roles and higher salaries in private companies that require advanced technical expertise.",
      icon: TrendingUp,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-7.png",
      bgImage: "/gate/opportunity-7.jpg",
    },
    {
      title: "Flexibility in Career",
      desc: "Strong foundational preparation for other competitive exams like ESE, SSC-JE, RRB-JE, and State-level AE & JE exams.",
      icon: Layers,
      color: "text-gameTeal",
      bg: "bg-gameTeal/10",
      image: "/advantage-8.png",
      bgImage: "/gate/opportunity-8.jpg",
    },
    {
      title: "Prestige and Recognition",
      desc: "A GATE qualification adds significant credibility to your technical and academic profile.",
      icon: Star,
      color: "text-gameGold",
      bg: "bg-gameGold/10",
      image: "/advantage-9.png",
      bgImage: "/gate/opportunity-9.jpg",
    }
  ];

  const distributionOfMarks = [
    {
      code: "AE, AG, BM, BT, CE, CH, CS, EC, EE, ES, IN, ME, MN, MT, NM, PE, PI, TF; Subject marks in these papers include questions on Engineering Mathematics (13 marks), which are paper-specific.",
      ga: "15",
      compulsory: "85",
      optional: "—",
      total: "100"
    },
    {
      code: "CY, DA, EY, MA, PH, ST",
      ga: "15",
      compulsory: "85",
      optional: "—",
      total: "100"
    },
    {
      code: "AR: Part A is Common and Compulsory. Part B1/B2 can be selected during the exam. B1 - Architecture, B2 - Planning",
      ga: "15",
      compulsory: "60",
      optional: "25",
      total: "100"
    },
    {
      code: "GE: Part A is Common and Compulsory. Part B1/B2 can be selected during the exam. B1 - Surveying and Mapping, B2 - Image Processing and Analysis",
      ga: "15",
      compulsory: "55",
      optional: "30",
      total: "100"
    },
    {
      code: "GG: Part A is Common and Compulsory. Part B1/B2 must be chosen at the time of application. B1 - Geology, B2 - Geophysics",
      ga: "15",
      compulsory: "25",
      optional: "60",
      total: "100"
    },
    {
      code: "XE: Section A (Engineering Mathematics) is Common and Compulsory. Applicants must select any TWO of the other sections during the exam.",
      ga: "15",
      compulsory: "15",
      optional: "2 x 35",
      total: "100"
    },
    {
      code: "XH: Section B1 (Reasoning and Comprehension) is Common and Compulsory. Applicants must select any ONE of the other sections at the time of application.",
      ga: "15",
      compulsory: "25",
      optional: "60",
      total: "100"
    },
    {
      code: "XL: Section P (Chemistry) is Common and Compulsory. Applicants must select any TWO of the other sections during the exam.",
      ga: "15",
      compulsory: "25",
      optional: "2 x 30",
      total: "100"
    }
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

  const gateOrganisers = [
    { no: 1, institute: "IISc, Bangalore", year: "GATE - 1984" },
    { no: 2, institute: "IIT, Madras", year: "GATE - 1985" },
    { no: 3, institute: "IIT, Delhi", year: "GATE - 1986" },
    { no: 4, institute: "IIT, Bombay", year: "GATE - 1987" },
    { no: 5, institute: "IIT, Kharagpur", year: "GATE - 1988" },
    { no: 6, institute: "IIT, Kanpur", year: "GATE - 1989" },
    { no: 7, institute: "IISc, Bangalore", year: "GATE - 1990" },
    { no: 8, institute: "IIT, Madras", year: "GATE - 1991" },
    { no: 9, institute: "IIT, Delhi", year: "GATE - 1992" },
    { no: 10, institute: "IIT, Bombay", year: "GATE - 1993" },
    { no: 11, institute: "IIT, Kharagpur", year: "GATE - 1994" },
    { no: 12, institute: "IIT, Kanpur", year: "GATE - 1995" },
    { no: 13, institute: "IISc, Bangalore", year: "GATE - 1996" },
    { no: 14, institute: "IIT, Madras", year: "GATE - 1997" },
    { no: 15, institute: "IIT, Delhi", year: "GATE - 1998" },
    { no: 16, institute: "IIT, Bombay", year: "GATE - 1999" },
    { no: 17, institute: "IIT, Kharagpur", year: "GATE - 2000" },
    { no: 18, institute: "IIT, Kanpur", year: "GATE - 2001" },
    { no: 19, institute: "IISc, Bangalore", year: "GATE - 2002" },
    { no: 20, institute: "IIT, Madras", year: "GATE - 2003" },
    { no: 21, institute: "IIT, Delhi", year: "GATE - 2004" },
    { no: 22, institute: "IIT, Bombay", year: "GATE - 2005" },
    { no: 23, institute: "IIT, Kharagpur", year: "GATE - 2006" },
    { no: 24, institute: "IIT, Kanpur", year: "GATE - 2007" },
    { no: 25, institute: "IISc, Bangalore", year: "GATE - 2008" },
    { no: 26, institute: "IIT, Roorkee", year: "GATE - 2009" },
    { no: 27, institute: "IIT, Guwahati", year: "GATE - 2010" },
    { no: 28, institute: "IIT, Madras", year: "GATE - 2011" },
    { no: 29, institute: "IIT, Delhi", year: "GATE - 2012" },
    { no: 30, institute: "IIT, Bombay", year: "GATE - 2013" },
    { no: 31, institute: "IIT, Kharagpur", year: "GATE - 2014" },
    { no: 32, institute: "IIT, Kanpur", year: "GATE - 2015" },
    { no: 33, institute: "IISc, Bangalore", year: "GATE - 2016" },
    { no: 34, institute: "IIT, Roorkee", year: "GATE - 2017" },
    { no: 35, institute: "IIT, Guwahati", year: "GATE - 2018" },
    { no: 36, institute: "IIT, Madras", year: "GATE - 2019" },
    { no: 37, institute: "IIT, Delhi", year: "GATE - 2020" },
    { no: 38, institute: "IIT, Bombay", year: "GATE - 2021" },
    { no: 39, institute: "IIT, Kharagpur", year: "GATE - 2022" },
    { no: 40, institute: "IIT, Kanpur", year: "GATE - 2023" },
    { no: 41, institute: "IISc, Bangalore", year: "GATE - 2024" },
    { no: 42, institute: "IIT, Roorkee*", year: "GATE - 2025*" },
    { no: 43, institute: "IIT, Guwahati*", year: "GATE - 2026*" },
  ];

  const psuCategories = [
    {
      title: "Maharatna PSUs",
      list: [
        "Bharat Heavy Electricals Limited (BHEL)",
        "Bharat Petroleum Corporation Limited (BPCL)",
        "Coal India Limited (CIL)",
        "Gas Authority of India Limited (GAIL)",
        "Hindustan Petroleum Corporation Limited (HPCL)",
        "Indian Oil Corporation Limited (IOCL)",
        "National Thermal Power Corporation (NTPC)",
        "Oil and Natural Gas Corporation (ONGC)",
        "Steel Authority of India Limited (SAIL)",
        "Oil India Limited (OIL), etc."
      ]
    },
    {
      title: "Navratna PSUs",
      list: [
        "Bharat Electronics Limited (BEL)",
        "Container Corporation of India Limited (CONCOR)",
        "Engineers India Limited (EIL)",
        "Hindustan Aeronautics Limited (HAL)",
        "Mahanagar Telephone Nigam Limited (MTNL)",
        "National Aluminium Company Limited (NALCO)",
        "National Buildings Construction Corporation Limited (NBCC)",
        "Neyveli Lignite Corporation Limited (NLC)",
        "NMDC Limited (NMDC)",
        "Rashtriya Ispat Nigam Limited (RINL)",
        "Shipping Corporation of India Limited (SCI)",
        "Rail Vikas Nigam Limited (RVNL)",
        "ONGC Videsh Ltd (OVL)",
        "Rashtriya Chemicals & Fertilisers Limited (RCF)",
        "IRCON International Limited (IRCON)",
        "RITES Limited (RITES), etc."
      ]
    },
    {
      title: "Miniratna Category I & II PSUs",
      list: [
        "Airports Authority of India (AAI)",
        "Bharat Coking Coal Limited (BCCL)",
        "Neyveli Lignite Corporation Limited (NLC)",
        "National Fertilisers Limited (NFL)",
        "Indian Railway Catering and Tourism Corporation (IRCTC)",
        "Garden Reach Shipbuilders & Engineers Limited (GRSE)",
        "Goa Shipyard Limited (GSL)",
        "Artificial Limbs Manufacturing Corporation of India (ALIMCO)",
        "Bharat Pumps & Compressors Limited (BPCL)",
        "Broadcast Engineering Consultants India Limited (BECIL)",
        "Engineering Projects (India) Limited (EPIL), etc."
      ]
    }
  ];

  const importantDates = [
    {
      event: "GATE Online Application Processing System (GOAPS) opens",
      date: (
        <div className="flex flex-col">
          <span className="line-through text-slate-400">August 25, 2025</span>
          <span className="font-black text-gameTeal">August 28, 2025</span>
        </div>
      )
    },
    {
      event: "Closing date of regular online registration/applications",
      date: (
        <div className="flex flex-col">
          <span className="line-through text-slate-400">September 25, 2025</span>
          <span className="font-black text-gameTeal">September 28, 2025</span>
        </div>
      )
    },
    {
      event: "End of extended period for online registration/ application (with late fee)",
      date: (
        <div className="flex flex-col">
          <span className="line-through text-slate-400">October 06, 2025</span>
          <span className="font-black text-gameTeal">October 09, 2025</span>
        </div>
      )
    },
    {
      event: "Last date for change of Category, Paper and Examination City. Adding a new test paper, and change of personal details (additional fee applicable per change)",
      date: <span className="font-black text-slate-900">November 06, 2025</span>
    },
    {
      event: "Admit Cards available for download",
      date: <span className="font-black text-slate-900">January 02, 2026</span>
    },
    {
      event: (
        <div className="flex flex-col gap-2">
          <div className="font-bold">GATE 2026 Examination Dates</div>
          <div className="text-xs bg-slate-50 p-2 rounded border border-slate-100 text-slate-500">
            Forenoon: 9:30 AM to 12:30 PM<br/>
            Afternoon: 2:30 PM to 5:30 PM
          </div>
        </div>
      ),
      date: (
        <div className="flex flex-col text-slate-700">
          <span>February 07, 2026 (Saturday)</span>
          <span>February 08, 2026 (Sunday)</span>
          <span>February 14, 2026 (Saturday)</span>
          <span>February 15, 2026 (Sunday)</span>
        </div>
      )
    },
    {
      event: "Announcement of results in the GATE Online Application Processing System (GOAPS)",
      date: <span className="font-black text-slate-900">March 19, 2026</span>
    },
    {
      event: "Score Cards available for free download",
      date: <span className="font-black text-slate-900">March 27, 2026 to May 31, 2026</span>
    },
    {
      event: "Score Cards available for download by paying a fee of Rs. 500 per test paper",
      date: <span className="font-black text-slate-900">June 01, 2026 to December 31, 2026</span>
    }
  ];

  const examSchedule = [
    {
      date: "Saturday, February 07, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session - FN)", papers: "AG, ES, GG, IN, MA, MN, TF, XE, XL" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session - AN)", papers: "AE, BT, CH, CY, GE, PH, XH" }
      ]
    },
    {
      date: "Sunday, February 08, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session - FN)", papers: "CS-1, ST" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session - AN)", papers: "CS-2, EY, NM, PE" }
      ]
    },
    {
      date: "Saturday, February 14, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session - FN)", papers: "CE-1, EE, PI" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session - AN)", papers: "BM, CE-2, ME, MT" }
      ]
    },
    {
      date: "Sunday, February 15, 2026",
      sessions: [
        { time: "9:30 am to 12:30 pm (Forenoon Session - FN)", papers: "EC" },
        { time: "2:30 pm to 5:30 pm (Afternoon Session - AN)", papers: "AR, DA" }
      ]
    }
  ];

  const faqs = [
    { 
      q: "Q.1 Is GAME's online coaching enough to crack GATE?", 
      a: "Ans. Yes, with expert faculty, live classes, comprehensive study materials, and practice tests, GAME Academy provides all the tools to succeed." 
    },
    { 
      q: "Q.2 What disciplines are covered in GAME's GATE coaching?", 
      a: "Ans. GAME offers courses for CE, ME, & XE as of now, ensuring syllabus coverage for all major disciplines." 
    },
    { 
      q: "Q.3 Are GAME's courses affordable?", 
      a: "Ans. Absolutely. GAME offers competitive pricing, making quality education accessible to all students." 
    },
    { 
      q: "Q.4 How do I enroll in GAME's GATE courses?", 
      a: "Ans. Visit our website, explore the courses, and follow the simple enrollment process to start your GATE journey." 
    },
    { 
      q: "Q.5 Can I access free GATE coaching from GAME?", 
      a: "Ans. Yes, GAME offers free online coaching through its YouTube channel to support students who may not afford paid programs." 
    },
    { 
      q: "Q.6 Various PSUs, AE-JE Exams that are exclusively for Diploma holders only / What other exams can I give after completing my Diploma?", 
      a: (
        <div className="space-y-6">
          <div className="bg-gameGold/5 rounded-xl border-2 border-slate-900 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-gameTeal/20 text-slate-900 text-[10px] uppercase tracking-widest font-black border-b-2 border-slate-900">
                    <th className="p-4 border-r-2 border-slate-900 w-[8%] text-center">Sr. No.</th>
                    <th className="p-4 border-r-2 border-slate-900 w-[25%]">Category</th>
                    <th className="p-4 border-r-2 border-slate-900 w-[37%]">Exams/Organisations</th>
                    <th className="p-4 w-[30%]">Roles/Positions</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] text-slate-700 divide-y divide-slate-900">
                  {[
                    { no: 1, cat: "Public Sector Undertakings (PSUs)", org: "DRDO, SAIL, BHEL, BEL, NTPC, GAIL, IOCL, ISRO, NPCIL, NTPC, PGCIL", roles: "Technician. Diploma Trainee Apprentice, Diploma Trainee" },
                    { no: 2, cat: "Railways", org: "RRB-JE (Railway Recruitment Board)", roles: "Junior Engineer (JE)" },
                    { no: 3, cat: "Staff Selection Commission (SSC)", org: "SSC-JE", roles: "Junior Engineer (Civil, Mechanical, Electrical)" },
                    { no: 4, cat: "State Public Service Commissions (PSC)", org: "UPPSC, MPPSC, TNPSC etc.", roles: "Junior Engineer (JE), Assistant Engineer (AE)" },
                    { no: 5, cat: "Defense Sector", org: "Indian Army (MES), Indian Navy (SSR Artificer Apprentice), Military Engineering Services (MES)", roles: "Technical Roles, Junior Engineer" },
                    { no: 6, cat: "Power Sector", org: "PGCIL, State Electricity Boards (MAHADISCOM, TANGEDCO, UPPCL)", roles: "JE. Technical Assistant" },
                    { no: 7, cat: "Road Transport & Highways", org: "National Highways Authority of India (NHAI)", roles: "Technical Roles" },
                    { no: 8, cat: "Municipal Corporations", org: "Local Bodies (eg, Public Works Departments)", roles: "Junior Engineer, Sub-Engineer" },
                    { no: 9, cat: "Apprenticeship Exams", org: "IOCL, ONGC, HAL, BEL, Tata Steel, L&T", roles: "Apprenticeship Trainee" },
                    { no: 10, cat: "State-Level Recruitment", org: "PWD, Irrigation Dept., Rural Development Dept.", roles: "JE. Technical Posts" },
                    { no: 11, cat: "Border Roads Organisation", org: "BRO", roles: "Junior Engineer. Technical Posts" },
                    { no: 12, cat: "Metro Rail Corporations", org: "DMRC, Chennai Metro, Bangalore Metro", roles: "Junior Engineer, Technician" }
                  ].map((row) => (
                    <tr key={row.no} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 text-center font-bold text-slate-400 border-r-2 border-slate-900">{row.no}.</td>
                      <td className="p-4 font-black text-slate-900 border-r-2 border-slate-900">{row.cat}</td>
                      <td className="p-4 border-r-2 border-slate-900 leading-relaxed font-medium">{row.org}</td>
                      <td className="p-4 font-bold text-gameTeal leading-tight">{row.roles}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-[lower-alpha] pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.7 What are the job opportunities for lateral entry candidates?",
      a: (
        <div className="space-y-12">
          {/* A. State Public Service Commissions (SPSC) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-gameGold text-black px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">SPSC</div>
              <p className="font-bold text-slate-800 text-lg">A.State Public Service Commissions (SPSC):</p>
            </div>
            <p className="text-slate-600 text-base leading-relaxed pl-2 border-l-4 border-slate-100">
              Many state commissions offer lateral entry pathways for advanced roles based on diploma or degree qualifications.
            </p>
            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[25%] text-center">State PSC</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[45%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">UPPSC, TNPSC, MPPSC</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer, Sub-Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma or equivalent; lateral entry for experienced candidates in technical departments.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">PWD, Irrigation Dept.</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Assistant Engineer, JE</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Lateral entry is allowed for diploma holders with significant experience.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* B. Defence Services */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center shrink-0 shadow-sm border border-gameTeal/20">
                   <Anchor size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">B. Defence Services:</h4>
             </div>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Organization</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">MES (Military Engineering Services)</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma holders with lateral entry eligibility for senior roles.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">Indian Navy, Army</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Technical Roles</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma in engineering; lateral opportunities through experience and promotions.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* C. Public Sector Undertakings (PSUs) */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center shrink-0 shadow-sm border border-gameTeal/20">
                   <Building2 size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg tracking-tight">C.PUBLIC SECTOR UNDERTAKINS (PSUs):</h4>
             </div>
             <p className="text-slate-500 text-base leading-relaxed pl-2 border-l-4 border-slate-100 font-medium">
               Lateral entry candidates with diplomas or advanced degrees can secure positions in PSUs through direct recruitment exams or experience-based roles.
             </p>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[25%] text-center">PSU</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[45%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">DRDO</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Technician, Senior Technician</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma or lateral entry qualification in engineering.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">NTPC, SAIL, GAIL</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Diploma Trainee, Supervisor</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma or equivalent qualification in relevant fields.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">PGCIL, BEL, IOCL</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Supervisor, Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma with relevant work experience.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* D. Railways */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center shrink-0 shadow-sm border border-gameTeal/20">
                   <Train size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">D. Railways:</h4>
             </div>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Exam/Recruitment</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">RRB JE (Junior Engineer)</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma holders are directly eligible; lateral entry pathways for higher posts via promotions.</td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">Senior Section Engineer</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Supervisor</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Degree holders with experience can enter mid-level posts.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* E. Metro Rail Corporations */}
          <div className="space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center shrink-0 shadow-sm border border-gameTeal/20">
                   <Ticket size={20} />
                </div>
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">E. Metro Rail Corporations:</h4>
             </div>
             <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Organization</th>
                           <th className="p-5 border-r border-white/10 w-[30%] text-center">Role</th>
                           <th className="p-5 w-[40%] text-center">Eligibility</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="p-5 border-r border-slate-200 font-black text-slate-900 text-center bg-slate-50/20 italic">DMRC, Chennai Metro, Bangalore Metro</td>
                           <td className="p-5 border-r border-slate-200 text-center font-medium">Junior Engineer</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Diploma holders are eligible for lateral promotions to higher technical posts.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>
          </div>

          {/* Q7 Concluding Note */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.8 What are the exams/Job opportunities for B.Tech Core Branches?",
      a: (
        <div className="space-y-8">
          <div className="bg-gameGold/5 rounded-xl border-2 border-slate-900 shadow-xl overflow-hidden relative">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-gameTeal/20 text-slate-900 text-[10px] uppercase tracking-widest font-black border-b-2 border-slate-900">
                    <th className="p-5 border-r-2 border-slate-900 w-[20%] text-center">Category.</th>
                    <th className="p-5 border-r-2 border-slate-900 w-[30%]">Exams/Organisations</th>
                    <th className="p-5 border-r-2 border-slate-900 w-[25%] text-center">Job Role</th>
                    <th className="p-5 w-[25%] text-center">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-[13px] text-slate-800 divide-y divide-slate-900">
                  {[
                    { cat: "Public Sector Undertakings (PSUs)", org: "GAIL, IOCL, ONGC, NTPC, SAIL, BHEL, PGCIL", role: "Graduate Trainee. Engineer, Officer", elig: "B.Tech in Mechanical/Civil + GATE Score" },
                    { cat: "Public Sector Undertakings (PSUs)", org: "ISRO (Indian Space Research Organisation)", role: "Scientist/Engineer", elig: "B.Tech with 65% or above marks." },
                    { cat: "Public Sector Undertakings (PSUs)", org: "DRDO (Defense Research and Development Organization)", role: "Scientist 'B'", elig: "B.Tech in relevant branch - GATE/DRDO Exam." },
                    { cat: "Union Public Service Exams", org: "ESE (Engineering Services Examination)", role: "Group A Engineer (Central Govt.)", elig: "B.Tech in Mechanical/Civil" },
                    { cat: "Staff Selection Exams", org: "SSC JE (Junior Engineer)", role: "Junior Engineer in Central Govt.", elig: "B.Tech in Civil/Mechanical Engineering." },
                    { cat: "Railways", org: "RRB SSE (Senior Section Engineer)", role: "Senior Section Engineer", elig: "B.Tech in Mechanical/Civil." },
                    { cat: "Railways", org: "IRSE (Indian Railway Services of Engineers)", role: "Group A Engineer", elig: "Through ESE (B.Tech required)." },
                    { cat: "State PSC Exams", org: "State AE/JE Exams (UPPSC, TNPSC, etc.)", role: "Assistant Engineer, Junior Engineer", elig: "B.Tech in Mechanical/Civil" },
                    { cat: "Defense Services", org: "Indian Army SSC Tech Entry", role: "Technical Officer", elig: "B.Tech in Mechanical/Civil." },
                    { cat: "Defense Services", org: "MES (Military Engineering Services)", role: "Junior Engineer, Assistant Engineer", elig: "B.Tech in a relevant engineering discipline" },
                    { cat: "Metro Rail Corporations", org: "DMRC, BMRC, LMRC, etc.", role: "Junior Engineer, Assistant Manager", elig: "B.Tech in Civil/Mechanical." },
                    { cat: "Power Sector", org: "PGCIL, State Electricity Boards (UPPCL, TANGEDCO, etc.)", role: "Field Engineer, Assistant Engineer", elig: "B.Tech in Electrical/Mechanical/Civil" },
                    { cat: "Construction and Infrastructure", org: "NHAI (National Highways Authority of India)", role: "Site Engineer, Assistant Engineer", elig: "B.Tech in Civil Engineering." },
                    { cat: "Construction and Infrastructure", org: "CPWD (Central Public Works Department)", role: "Assistant Engineer", elig: "B.Tech in Civil/Mechanical." },
                    { cat: "Research & Academia", org: "GATE (Graduate Aptitude Test in Engineering)", role: "M.Tech, Research Fellow, PSU Jobs", elig: "B.Tech in a relevant discipline." },
                    { cat: "Research & Academia", org: "CSIR NET", role: "Research Fellow", elig: "B.Tech followed by post-graduate studies." },
                    { cat: "Private Sector", org: "L&T, Tata Projects, Ashok Leyland, Reliance Industries", role: "Design Engineer, Project Engineer, QA/QC", elig: "B.Tech in Mechanical/Civil." },
                    { cat: "Private Sector", org: "Oil & Gas Companies (Cairn, Schlumberger, etc.)", role: "Field Engineer, Maintenance Engineer", elig: "B.Tech in Mechanical." }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center text-[11px] uppercase leading-tight">{row.cat}</td>
                      <td className="p-5 border-r-2 border-slate-900 font-bold text-gameTeal leading-snug">{row.org}</td>
                      <td className="p-5 border-r-2 border-slate-900 text-center font-medium">{row.role}</td>
                      <td className="p-5 text-center font-bold text-slate-800 leading-snug">{row.elig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Note section for Q8 */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Note :
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.9 Can lateral entry candidates give GATE/ESE/ISRO/BARC exams?",
      a: (
        <div className="space-y-12">
          <div className="bg-white rounded-xl border-2 border-slate-900 shadow-xl overflow-hidden relative">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                     <thead>
                        <tr className="bg-gameTeal/20 text-slate-900 text-[11px] font-black uppercase tracking-[0.2em] border-b-2 border-slate-900">
                           <th className="p-5 border-r-2 border-slate-900 w-[25%] text-center">Exam</th>
                           <th className="p-5 border-r-2 border-slate-900 w-[30%] text-center">Eligibility for Lateral Entry Candidates</th>
                           <th className="p-5 w-[45%] text-center">Key Criteria</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-900 bg-gameGold/5">
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">GATE</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Must have a B.Tech/B.E. degree from an AICTE/UGC- recognised institution. Final-year students are also eligible.</td>
                        </tr>
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">ESE (Engineering Services Examination)</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Requires a B.Tech/B.E. degree or equivalent from a recognised university.</td>
                        </tr>
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">ISRO</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Needs a B.Tech/B.E. degree in specific disciplines (e.g, Mechanical, Electronics, CS) with 65% minimum marks.</td>
                        </tr>
                        <tr className="hover:bg-slate-200/30 transition-colors">
                           <td className="p-5 border-r-2 border-slate-900 font-black text-slate-900 text-center italic">BARC</td>
                           <td className="p-5 border-r-2 border-slate-900 text-center font-medium">Eligible</td>
                           <td className="p-5 leading-relaxed text-center font-bold text-gameTeal">Requires a B.Tech/B.E. degree with at least 60% marks in engineering disciplines.</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

          {/* Notes for Lateral Entry Candidates for Q9 */}
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-gameGold space-y-3 shadow-inner">
            <h4 className="font-black text-slate-900 text-sm uppercase tracking-wider flex items-center gap-2">
              <Info size={18} className="text-gameTeal" /> Notes for Lateral Entry Candidates:
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-sm text-slate-600 font-bold leading-relaxed">
              <li>The B.Tech/B.E. degree must be AICTE/UGC-recognised, irrespective of whether obtained through regular or lateral entry.</li>
              <li>Ensure you meet the percentage/CGPA requirements for the specific exam.</li>
              <li>Always check the detailed eligibility criteria for the year you are applying, as they may have minor updates.</li>
              <li>The above-mentioned opportunities are the general ones; to get real-time updates, students can check the <button className="text-gameTeal font-black underline hover:text-gameTealDark decoration-2 underline-offset-4 transition-all">"Job Notification page"</button> so that students can save time without missing important job opportunities.</li>
              <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      q: "Q.10 Can a diploma holder only appear for GATE/ESE/ISRO/BARC?",
      a: "Ans. Diploma holders must complete a B.E./B.Tech. Degree to qualify for GATE, ESE, ISRO, or BARC. However, there are job opportunities like SSC JE and RRB JE tailored for diploma-level qualifications."
    },
    {
      q: "Q.11 What are the exams covered under the Lakshya Course?",
      a: "Ans. Lakshya Course is suitable for GATE/ESE/ISRO/BARC & PSUs, where in-depth technical knowledge is required."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section - Design Match to PsuExamPage */}
      <section className="relative pt-28 md:pt-32 pb-12 overflow-hidden bg-[#001517] text-white">
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
                     <Target size={12} className="text-gameTeal" />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-300">GATE Examination 2026</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-[1.05] tracking-tighter text-left">
                     Your Gateway to <br/>
                     <span className="text-gameTeal">Big Opportunities</span>
                  </h1>

                  <p className="text-base md:text-lg text-slate-400 max-w-xl mb-6 leading-relaxed font-bold text-left">
                     Unlock premium careers and prestigious lifestyles. Whether it&apos;s a PSU or an IIT — GATE is your gateway to excellence.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-6 justify-start">
                     <button 
                        onClick={() => scrollToSection('gate-courses')}
                        className="px-7 py-3.5 bg-gameTeal text-white font-black rounded-full hover:bg-[#007a7e] transition-all active:scale-95 shadow-xl shadow-gameTeal/20 flex items-center gap-2 group text-sm"
                     >
                        Start Preparation
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                     <a 
                        href="https://drive.google.com/drive/folders/1ye6UZKpRTwNnFndU8nEalq3UH4LnIg_B?usp=sharing" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-7 py-3.5 border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-gameBlack transition-all active:scale-95 text-sm flex items-center justify-center"
                     >
                        View Syllabus
                     </a>
                  </div>

                  {/* Latest Update Widget */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-6 max-w-sm flex items-start gap-4 text-left">
                     <div className="w-9 h-9 rounded-xl bg-gameGold/10 text-gameGold flex items-center justify-center shrink-0">
                        <Atom size={18} className="animate-spin-slow" />
                     </div>
                     <div>
                        <span className="text-[7px] font-black text-gameGold uppercase tracking-widest block mb-0.5">LATEST UPDATE</span>
                        <p className="text-xs font-bold text-slate-200">GATE 2026 registration closes soon</p>
                     </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-10 border-t border-white/5 pt-6 text-left">
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">50K+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Aspirants</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">95%</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Success Rate</p>
                     </div>
                     <div>
                        <p className="text-2xl font-black text-white mb-0.5">200+</p>
                        <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Mentors</p>
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
                              src={slides[activeSlide].imageUrl} 
                              alt={slides[activeSlide].title}
                              fill
                              className="object-cover"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-[#001c1e] via-transparent to-[#001c1e]/60"></div>
                           
                           {/* Button bottom right corner */}
                           <div className="relative z-10 mt-auto self-end">
                              <button className="group flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-black text-xs uppercase tracking-widest hover:bg-gameGold hover:text-gameBlack transition-all">
                                 {slides[activeSlide].buttonText}
                                 <TrendingUp size={14} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                           </div>
                           
                           {/* Decorative Elements */}
                           <div className="absolute top-8 right-8 opacity-20 z-10 text-white">
                              <Atom size={60} />
                           </div>
                        </motion.div>
                     </AnimatePresence>

                     {/* Slide Indicators */}
                     <div className="absolute bottom-5 right-6 flex gap-1.5 z-20">
                        {slides.map((_, i) => (
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
                     {slides.map((slide, i) => (
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
                        </button>
                     ))}
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

      {/* FULL WIDTH STICKY SUB-NAVIGATION - CUSTOM PREMIUM SCROLLER */}
      <div className="sticky top-[72px] md:top-[80px] z-40 w-full bg-[#001D1F]/95 backdrop-blur-md shadow-lg border-b border-white/5">
         <div className="max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between h-16">
               {/* Links Scroller */}
               <div 
                  className="flex items-center gap-3 overflow-x-auto w-full md:w-auto py-3 scroll-smooth no-scrollbar px-2"
                  style={{ 
                    WebkitOverflowScrolling: 'touch'
                  }}
               >
                  {[
                     { label: "Overview", id: "overview", icon: Info },
                     { label: "GATE Eligibility", id: "eligibility", icon: UserCheck },
                     { label: "Advantages", id: "advantages", icon: ShieldCheck },
                     { label: "Updates", id: "updates", icon: Sparkles },
                     { label: "Dates", id: "important-dates", icon: Calendar },
                     { label: "Marks Distribution", id: "distribution", icon: Sigma },
                     { label: "Combinations", id: "combinations", icon: Layers },
                     { label: "Schedule", id: "exam-schedule", icon: Clock },
                     { label: "Cutoffs", id: "cutoffs", icon: Trophy },
                     { label: "Organisers", id: "organisers", icon: Building2 },
                     { label: "PSU Jobs", id: "psus", icon: JobIcon },
                     { label: "FAQs", id: "gate-faqs", icon: HelpCircle },
                  ].map((item) => {
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
                  <button 
                     onClick={() => scrollToSection('gate-courses')}
                     className="bg-gameGold text-black px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_4px_15px_rgba(242,197,55,0.4)] flex items-center gap-1.5 group active:scale-95"
                  >
                     <Sparkles size={12} className="fill-black animate-pulse" /> 
                     <span>Enroll Now</span>
                     <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Overview - COMPACT */}
      <section id="overview" className="py-10 px-8 md:px-10 lg:px-12 bg-white relative scroll-mt-32">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-2 block">Overview</span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                     What is <span className="text-gameGoldDark">GATE?</span>
                  </h2>
                  <div className="space-y-4 text-slate-600 text-lg leading-relaxed font-medium">
                     <p>
                        The <strong className="text-slate-900">Graduate Aptitude Test in Engineering (GATE)</strong> is an examination that primarily assesses a candidate's comprehensive understanding of various undergraduate subjects in engineering and science.
                     </p>
                     <p>
                        It is used for admission to Master's programs and for recruitment in public sector companies. Most students aim to succeed in the GATE exam because it enhances their career prospects and secures a brighter future.
                     </p>
                     <p className="bg-slate-50 p-5 rounded-2xl border-l-4 border-gameTeal text-slate-700 italic">
                        "It is a transformative opportunity for those aspiring to excel in engineering and science. Furthermore, several Public Sector Undertakings (PSUs)—such as GAIL, Hindustan Petroleum, and Indian Oil—use GATE scores to recruit candidates for distinguished positions."
                     </p>
                  </div>
               </motion.div>

               <motion.div 
                  className="lg:w-1/2 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
               >
                  <div className="absolute inset-0 bg-gameTeal/5 rounded-full blur-3xl transform rotate-12"></div>
                  <div className="relative bg-white rounded-[2.5rem] p-3 border border-slate-100 shadow-2xl">
                     <img 
                        src="/prep-main.png" 
                        alt="GATE Aspirant" 
                        className="rounded-[2rem] w-full h-auto object-cover"
                     />
                     <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="w-10 h-10 rounded-full bg-gameTeal/10 flex items-center justify-center text-gameTeal">
                              <CheckCircle2 size={20} />
                           </div>
                           <div className="font-bold text-slate-900">Valid for 3 Years</div>
                        </div>
                        <p className="text-xs text-slate-500">The GATE scorecard remains valid for three years from the date of announcement of results.</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* GATE COURSE SECTION - COMPACT */}
      <section id="gate-courses" className="bg-white scroll-mt-32 border-t border-slate-100">
        <CourseGrid 
          selectedExam={selectedExam} 
          setSelectedExam={setSelectedExam}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>

      <TestimonialsText />

      {/* ACHIEVERS SECTION */}
      <div id="gate-hall-of-fame" className="scroll-mt-32">
         <AchieversSection />
      </div>

      {/* 2. CourseHelpSection (Features explaining "How do these courses help you?") */}
      <div id="gate-excellence" className="scroll-mt-32">
         <CourseHelpSection />
      </div>

      {/* GATE Eligibility Section */}
      <section id="eligibility" className="py-16 px-8 md:px-10 lg:px-12 bg-slate-50 relative scroll-mt-32 overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gameTeal/20 to-transparent"></div>
         <div className="max-w-[1200px] mx-auto relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-12"
            >
               <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-2 block">CANDIDATE ELIGIBILITY</span>
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                  Who can apply for <span className="text-gameGoldDark">GATE?</span>
               </h2>
               <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Before applying, candidates must ensure they meet the minimum qualification and eligibility criteria set by the organising institute.
               </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden"
            >
               <div className="overflow-x-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-gameTeal text-white">
                           <th className="py-5 px-8 font-bold uppercase tracking-wider text-xs">Criteria</th>
                           <th className="py-5 px-8 font-bold uppercase tracking-wider text-xs">Details</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="py-6 px-8 font-bold text-slate-900 w-1/3">Nationality</td>
                           <td className="py-6 px-8 text-slate-600 leading-relaxed">
                              Candidates must be <strong className="text-slate-900">Indian nationals</strong>. Candidates from other countries (Nepal, Bangladesh, Sri Lanka, Singapore, Ethiopia, and United Arab Emirates) are also eligible if they meet the criteria.
                           </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="py-6 px-8 font-bold text-slate-900">Age Limit</td>
                           <td className="py-6 px-8 text-slate-600 leading-relaxed">
                              There is <strong className="text-slate-900">no minimum or maximum age limit</strong> to appear for the GATE examination.
                           </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="py-6 px-8 font-bold text-slate-900">Academic Qualification</td>
                           <td className="py-6 px-8 text-slate-600 leading-relaxed">
                              <ul className="space-y-3">
                                 <li className="flex items-start gap-2">
                                    <CheckCircle2 size={16} className="text-gameTeal mt-1 shrink-0" />
                                    <span>Candidates who are in the <strong className="text-slate-900">3rd year or higher</strong> of any undergraduate degree program.</span>
                                 </li>
                                 <li className="flex items-start gap-2">
                                    <CheckCircle2 size={16} className="text-gameTeal mt-1 shrink-0" />
                                    <span>Candidates who have <strong className="text-slate-900">already completed</strong> their government-approved degree program in Engineering / Technology / Architecture / Science / Commerce / Arts.</span>
                                 </li>
                              </ul>
                           </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="py-6 px-8 font-bold text-slate-900">Attempts</td>
                           <td className="py-6 px-8 text-slate-600 leading-relaxed">
                              Candidates can appear for the GATE examination <strong className="text-slate-900">any number of times</strong>. There is no restriction on the number of attempts.
                           </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                           <td className="py-6 px-8 font-bold text-slate-900">Documents Required</td>
                           <td className="py-6 px-8 text-slate-600 leading-relaxed">
                              Scanned copy of Degree Certificate or Provisional Certificate, Mark sheets, Category Certificate (if applicable), and valid Photo ID.
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                     <AlertCircle size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Important Note</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">Eligibility depends on the specific paper you choose. Some papers may have additional requirements.</p>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                     <GraduationCap size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Final Year Students</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">Candidates in their final year can apply and must upload their marksheets for the penultimate year.</p>
                  </div>
               </div>
               <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                     <ClipboardCheck size={20} />
                  </div>
                  <div>
                     <h4 className="font-bold text-slate-900 mb-1">Certification</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">Professional certificates (e.g. AMIE) equivalent to B.E./B.Tech are also valid for eligibility.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Advantages REDESIGNED - THE ENGINEERING ROADMAP - LIGHT GRAY THEME */}
      <section id="advantages" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-32 border-t border-slate-200">
         {/* Background Blueprint Aesthetics */}
         <div className="absolute inset-0 bg-[radial-gradient(#64748b_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.05]"></div>
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5"
              style={{ backgroundImage: `linear-gradient(to right, #075d63 1px, transparent 1px), linear-gradient(to bottom, #075d63 1px, transparent 1px)`, backgroundSize: '100px 100px' }}>
         </div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-24 max-w-4xl mx-auto">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gameTeal/5 border border-gameTeal/10 text-gameTeal text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-sm">
                    <Rocket size={14} className="fill-gameTeal" /> Engineering Career Roadmap
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                     The <span className="text-gameTeal">GATE</span> Advantage
                  </h2>
                  <p className="text-slate-500 text-lg md:text-xl font-bold leading-relaxed">
                     GATE opens the door to a future full of immense possibilities. Here is your technical roadmap to achieving greatness in the world of engineering.
                  </p>
               </motion.div>
            </div>

            {/* ROADMAP PATHWAY UI */}
            <div className="relative">
               
               {/* THE VERTICAL PATHWAY LINE (Center line) */}
               <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2 hidden lg:block overflow-hidden">
                  <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: '100%' }}
                     transition={{ duration: 2, ease: "easeInOut" }}
                     className="w-full bg-gradient-to-b from-gameTeal via-gameGold to-gameTeal"
                  />
               </div>

               <div className="space-y-24 lg:space-y-32">
                  {gateAdvantages.map((item, i) => {
                     const isEven = i % 2 === 0;
                     return (
                        <div key={i} className="relative">
                           
                           {/* BRANCHING NODE - DESKTOP CENTER */}
                           <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center z-20">
                              <div className="w-10 h-10 rounded-full bg-white border-4 border-gameTeal flex items-center justify-center shadow-xl">
                                 <item.icon size={20} className={item.color} />
                              </div>
                           </div>

                           <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                              
                              {/* Content Side */}
                              <motion.div 
                                 initial={{ opacity: 0, x: isEven ? -50 : 50 }} 
                                 whileInView={{ opacity: 1, x: 0 }} 
                                 viewport={{ once: true }} 
                                 className="w-full lg:w-1/2"
                              >
                                 <div className={`relative group ${isEven ? 'text-left lg:text-right' : 'text-left'}`}>
                                    {/* Numbering */}
                                    <div className={`absolute -top-20 ${isEven ? 'left-0 lg:left-auto lg:-right-4' : 'left-0 lg:-left-4'} text-7xl font-black text-gameTeal/70 pointer-events-none z-10`}>
                                       {i + 1 < 10 ? `0${i + 1}` : i + 1}
                                    </div>
                                    
                                    <div
                                       className="relative overflow-hidden bg-cover bg-center p-8 md:p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:border-gameTeal/20 transition-all duration-500 hover:shadow-gameTeal/10 group"
                                       style={{ backgroundColor: 'var(--color-gameTealDark)', backgroundImage: `url(${item.bgImage})` }}
                                    >
                                       {/* Solid dark-teal base sits behind the photo, so the card still reads as
                                           intentional if the background image is missing or fails to load. */}
                                       {/* Dark overlay keeps text readable over the background photo */}
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/40 group-hover:from-black/90 group-hover:via-black/75 transition-colors duration-300"></div>
                                       <div className="relative z-10">
                                          <h3 className="text-3xl font-black text-white mb-6 tracking-tight leading-none group-hover:text-[#f2c537] transition-colors">
                                             {item.title}
                                          </h3>
                                          <p className="text-slate-200 text-base md:text-lg font-bold leading-relaxed mb-8">
                                             {item.desc}
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                              </motion.div>

                              {/* Image Side */}
                              <motion.div 
                                 initial={{ opacity: 0, x: isEven ? 50 : -50 }} 
                                 whileInView={{ opacity: 1, x: 0 }} 
                                 viewport={{ once: true }} 
                                 className="w-full lg:w-1/2"
                              >
                                 <div className="relative group">
                                    <div className="absolute inset-0 bg-gameTeal/10 rounded-[3rem] rotate-3 group-hover:rotate-0 transition-transform"></div>
                                    <div className="absolute inset-0 bg-gameGold/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform"></div>
                                    <div className="relative rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl h-[300px] lg:h-[400px]">
                                       <img 
                                          src={item.image} 
                                          alt={item.title} 
                                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                       />
                                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                       <div className="absolute bottom-8 left-8 right-8 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                                          <p className="text-sm font-black uppercase tracking-widest text-[#f2c537] mb-2">GATE Opportunity</p>
                                          <h4 className="text-xl font-bold">{item.title}</h4>
                                       </div>
                                    </div>
                                 </div>
                              </motion.div>

                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            {/* BOTTOM PATH FINAL HIGHLIGHT */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-32 p-1 bg-gradient-to-r from-transparent via-gameTeal/20 to-transparent rounded-[4rem]"
            >
               <div className="bg-[#075d63] p-10 md:p-16 rounded-[3.8rem] flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10 shadow-3xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
                  <div className="relative z-10 text-center md:text-left">
                     <h4 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Your technical future is waiting.</h4>
                     <p className="text-teal-50/70 font-bold text-lg">Initialize your preparation with India&apos;s most structured roadmap.</p>
                  </div>
                  <Link 
                     href="/courses"
                     className="relative z-10 bg-[#f2c537] text-black px-12 py-5 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:-translate-y-1 transition-all shrink-0 flex items-center justify-center"
                  >
                     Initialize Pre Phase
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 4. Updates */}
      <section id="updates" className="py-12 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-10">
               <span className="text-gameTeal font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Official Updates</span>
               <h2 className="text-4xl md:text-5xl font-black text-slate-900">What's New in <span className="text-gameTealDark">GATE 2026?</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Landmark size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">a. Organising Institute</h4>
                  <p className="text-xl font-black text-slate-900">IIT GUWAHATI.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><BookOpen size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">b. Subjects</h4>
                  <p className="text-base font-bold text-slate-700 leading-snug">30 disciplines are covered, with detailed syllabi available online.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gameTeal/10 text-gameTeal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Layers size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">c. Two-Paper Combinations</h4>
                  <p className="text-base font-bold text-slate-700 leading-snug">New options for interdisciplinary combinations introduced.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group lg:col-span-2">
                  <div className="w-12 h-12 rounded-xl bg-gameGold/10 text-gameGold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Zap size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">d. XE Paper Update</h4>
                  <p className="text-lg font-black text-slate-900">GATE 2026 will have a new sectional test paper on Energy Science in Engineering Sciences (XE) paper.</p>
               </div>
               <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><Laptop size={24} /></div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">e. Mode of Exam</h4>
                  <p className="text-lg font-black text-slate-900">Computer-Based Test (CBT).</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
               <div className="bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl relative overflow-hidden">
                  <h4 className="text-sm font-black text-gameTeal uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                     <Info size={16} /> F. THE COMPUTER-BASED TEST (CBT) WILL INCLUDE:
                  </h4>
                  <div className="space-y-6">
                     <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">i</div>
                        <div><h5 className="font-black text-slate-900">Multiple Choice Questions (MCQs):</h5><p className="text-slate-500 text-sm">One correct option out of four.</p></div>
                     </div>
                     <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">ii</div>
                        <div><h5 className="font-black text-slate-900">Multiple Select Questions (MSQs):</h5><p className="text-slate-500 text-sm">One or more correct options out of four.</p></div>
                     </div>
                     <div className="flex gap-5">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-400 shrink-0">iii</div>
                        <div><h5 className="font-black text-slate-900">Numerical Answer Type (NATs):</h5><p className="text-slate-500 text-sm">Candidates must enter answers using a virtual keypad.</p></div>
                     </div>
                     <div className="flex gap-5 pt-4 border-t border-slate-50 items-start">
                        <div className="flex items-center gap-3 shrink-0">
                           <Calendar size={20} className="text-gameTeal" />
                           <div className="font-black text-slate-400 w-6 flex items-center justify-center">H</div>
                        </div>
                        <div>
                           <h5 className="font-black text-slate-900">GATE 2026 Exam Schedule:</h5>
                           <p className="text-slate-500 text-sm">Dates of examination are February 7, 8, 14, and 15, 2026. The exam will be held in two sessions on these dates – forenoon and afternoon.</p>
                        </div>
                     </div>
                     <div className="flex gap-5 items-start">
                        <div className="flex items-center gap-3 shrink-0">
                           <Layers size={20} className="text-gameTeal" />
                           <div className="font-black text-slate-400 w-6 flex items-center justify-center">I</div>
                        </div>
                        <div>
                           <h5 className="font-black text-slate-900">Multiple Sessions:</h5>
                           <p className="text-slate-500 text-sm">Some test papers may have multiple sessions, but candidates will appear in ONLY ONE session per paper.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="bg-gameBlack rounded-[2.5rem] p-10 shadow-2xl text-white relative overflow-hidden">
                  <h4 className="text-sm font-black text-gameGold uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                     <Trophy size={16} /> G. MARKING SCHEME/PATTERN/DURATION:
                  </h4>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
                     <p className="text-sm font-medium text-white">I. Total Questions 65/ Maximum Marks 100 / Duration 3 Hours</p>
                  </div>
                  <div className="space-y-8">
                     <div>
                        <div className="text-xs font-black text-gameGold tracking-widest mb-3">ii. Multiple-Choice Questions (MCQs):</div>
                        <ul className="space-y-4">
                           <li className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                              <span className="text-sm font-medium">1 Mark Question</span><span className="font-black text-white">(+1 Correct) / (-1/3 Wrong)</span>
                           </li>
                           <li className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                              <span className="text-sm font-medium">2 Mark Question</span><span className="font-black text-white">(+2 Correct) / (-2/3 Wrong)</span>
                           </li>
                        </ul>
                     </div>
                     <div className="pt-6 border-t border-white/10">
                        <div className="text-xs font-black text-slate-400 tracking-widest mb-4">iii. MSQs & NATs Questions:</div>
                        <div className="flex gap-4 p-4 bg-gameTeal/10 border border-gameTeal/20 rounded-2xl">
                           <CheckCircle2Icon size={24} className="text-gameTeal shrink-0" /><p className="text-sm font-bold text-gameTealDark">No negative marking; candidates receive full marks for correct answers.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4.5. Important Dates */}
      <section id="important-dates" className="py-16 bg-slate-50 border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="mb-10 text-center">
               <span className="text-gameTeal font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Key Timelines</span>
               <h2 className="text-3xl md:text-5xl font-black text-slate-900">Important Dates & <span className="text-gameTealDark">Timelines</span></h2>
               <div className="w-20 h-1 bg-gameTeal mx-auto rounded-full mt-4"></div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest">
                           <th className="p-5 border-r border-white/10 w-[60%]">GATE 2026 Event / Milestone</th>
                           <th className="p-5 w-[40%] text-right pr-8">Date(s) / Schedule</th>
                        </tr>
                     </thead>
                     <tbody className="text-[13px] text-slate-700 divide-y divide-slate-100">
                        {importantDates.map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50 transition-colors group">
                              <td className="p-5 border-r border-slate-100 font-bold text-slate-800">{row.event}</td>
                              <td className="p-5 font-bold text-right pr-8 text-slate-700 group-hover:text-gameTeal transition-colors">{row.date}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Distribution of Marks */}
      <section id="distribution" className="py-12 bg-white border-t border-slate-100 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-10">
               <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
                  Distribution of marks in various test papers of GATE
               </h2>
            </div>
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden mb-10">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-gameTeal text-white">
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[40%]">Paper Code</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 text-center w-[15%]">General Aptitude (GA) Marks</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 text-center w-[15%]">Subject: Compulsory Section</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 text-center w-[15%]">Subject: Optional Section(s)</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest text-center w-[15%]">Total Marks</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm text-slate-700 divide-y divide-slate-100">
                        {distributionOfMarks.map((row, i) => (
                           <tr key={i} className={`hover:bg-slate-50 transition-colors ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                              <td className="p-6 border-r border-slate-100 font-bold leading-relaxed">{row.code}</td>
                              <td className="p-6 border-r border-slate-100 text-center font-black text-lg">{row.ga}</td>
                              <td className="p-6 border-r border-slate-100 text-center font-black text-lg">{row.compulsory}</td>
                              <td className="p-6 border-r border-slate-100 text-center font-black text-lg">{row.optional}</td>
                              <td className="p-6 text-center font-black text-2xl text-gameTeal">{row.total}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gameGold/10 border border-gameGold/20 rounded-2xl p-6 shadow-sm flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gameTeal shadow-sm shrink-0"><Calculator size={20} /></div>
               <p className="text-gameTeal font-bold text-lg md:text-xl"><span className="font-black">Note -</span> Only the on-screen virtual calculator will be allowed during the exam.</p>
            </motion.div>
         </div>
      </section>

      {/* RESTORED: Allowed Two Test Paper Combinations */}
      <section id="combinations" className="py-12 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-10">
               <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4">
                  Paper Combination
               </h2>
            </div>
            <div className="mb-8">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <p className="text-slate-600 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                     The combination of TWO papers must be chosen from the predefined list (shown below). Only ONE application form is required, even for two papers.
                  </p>
               </motion.div>
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

      {/* 6. GATE 2026 SCHEDULE (TABLE - 4) */}
      <section id="exam-schedule" className="py-12 bg-white border-t border-slate-200 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-10">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                  GATE 2026 Schedule
               </h2>
               <div className="w-20 h-1 bg-gameTeal mx-auto rounded-full mb-4"></div>
             
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-gameTeal text-white">
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[25%] text-center">Day, Date</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[35%] text-center">Time (IST)</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest w-[40%] text-center">Test Papers</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm text-slate-700">
                        {examSchedule.map((day, i) => (
                           <React.Fragment key={i}>
                              {day.sessions.map((session, sIdx) => (
                                 <tr key={`${i}-${sIdx}`} className={`hover:bg-slate-50 transition-colors border-b border-slate-100`}>
                                    {sIdx === 0 && (
                                       <td rowSpan={2} className="p-6 border-r border-slate-100 font-black text-slate-900 bg-slate-50/50 align-middle text-center w-[25%]">
                                          {day.date}
                                       </td>
                                    )}
                                    <td className="p-6 border-r border-slate-100 font-bold text-slate-600 text-center w-[35%]">
                                       {session.time}
                                    </td>
                                    <td className="p-6 font-black text-gameTeal leading-relaxed w-[40%] text-center">
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
                    {/* 7. CUTOFFS & SCORE */}
      <section id="cutoffs" className="py-12 bg-white border-t border-slate-200 scroll-mt-32 overflow-hidden relative">
         {/* Decorative Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gameTeal rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gameGold rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            {/* HEADER */}
            <div className="text-center mb-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gameTeal/5 border border-gameTeal/10 mb-4">
                     <TrendingUp size={14} className="text-gameTeal" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-gameTeal">Performance Metrics</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     Cutoffs & <span className="text-gameTeal">Score</span>
                  </h2>
                  <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                     Understand GATE cut-offs, score calculation, normalization method and result process.
                  </p>
               </motion.div>
            </div>

            {/* CUTOFF SECTION */}
            <div className="mb-12">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shadow-sm">
                     <BarChart3 size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                     GATE Average Cut-Off Marks (2019 – 2025)
                  </h3>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {/* ME */}
                  <motion.div 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="group bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl hover:shadow-2xl hover:border-gameTeal/20 transition-all relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <HardHat size={120} />
                     </div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                           <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs">ME</div>
                           <h4 className="text-xl font-black text-slate-900">
                              Mechanical Engineering
                           </h4>
                        </div>

                        <div className="space-y-6">
                           {[
                              { label: "General", value: "31.2", color: "bg-gameTeal" },
                              { label: "OBC-NCL", value: "28.01", color: "bg-gameTeal/70" },
                              { label: "SC/ST/PwD", value: "21.1", color: "bg-gameTeal/40" }
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between group/item">
                                 <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">{item.label}</span>
                                 <div className="flex items-center gap-4 flex-grow mx-6">
                                    <div className="h-1.5 flex-grow bg-slate-100 rounded-full overflow-hidden">
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          whileInView={{ width: `${(parseFloat(item.value) / 35) * 100}%` }}
                                          viewport={{ once: true }}
                                          className={`h-full ${item.color} rounded-full`}
                                       ></motion.div>
                                    </div>
                                 </div>
                                 <span className="font-black text-slate-900 text-xl">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>

                  {/* CE */}
                  <motion.div 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="group bg-white rounded-[2.5rem] border border-slate-200 p-10 shadow-xl hover:shadow-2xl hover:border-gameTeal/20 transition-all relative overflow-hidden"
                  >
                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Building2 size={120} />
                     </div>
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                           <div className="w-10 h-10 rounded-xl bg-gameTeal text-white flex items-center justify-center font-black text-xs">CE</div>
                           <h4 className="text-xl font-black text-slate-900">
                              Civil Engineering
                           </h4>
                        </div>

                        <div className="space-y-6">
                           {[
                              { label: "General", value: "29.94", color: "bg-gameGoldDark" },
                              { label: "OBC-NCL", value: "26.93", color: "bg-gameGoldDark/70" },
                              { label: "SC/ST/PwD", value: "19.77", color: "bg-gameGoldDark/40" }
                           ].map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between group/item">
                                 <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">{item.label}</span>
                                 <div className="flex items-center gap-4 flex-grow mx-6">
                                    <div className="h-1.5 flex-grow bg-slate-100 rounded-full overflow-hidden">
                                       <motion.div 
                                          initial={{ width: 0 }}
                                          whileInView={{ width: `${(parseFloat(item.value) / 35) * 100}%` }}
                                          viewport={{ once: true }}
                                          className={`h-full ${item.color} rounded-full`}
                                       ></motion.div>
                                    </div>
                                 </div>
                                 <span className="font-black text-slate-900 text-xl">{item.value}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               </div>

               {/* INSIGHTS */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-12 bg-slate-900 rounded-[2rem] p-10 relative overflow-hidden shadow-2xl"
               >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gameTeal/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                  <div className="relative z-10">
                     <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gameGold flex items-center justify-center text-black">
                           <Lightbulb size={20} />
                        </div>
                        <h4 className="font-black text-white text-xl uppercase tracking-tight">
                           Insights
                        </h4>
                     </div>

                     <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        <div className="flex gap-4">
                           <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-gameTeal/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-gameTeal"></div>
                           </div>
                           <p className="text-slate-300 font-medium leading-relaxed">
                              Cut-off marks vary slightly each year depending on exam difficulty and number of applicants.
                           </p>
                        </div>
                        <div className="flex gap-4">
                           <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-gameTeal/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-gameTeal"></div>
                           </div>
                           <p className="text-slate-300 font-medium leading-relaxed">
                              General category cut-offs are typically <span className="text-gameGold font-black">46-49%</span> higher than SC/ST/PwD in Mechanical.
                           </p>
                        </div>
                        <div className="flex gap-4">
                           <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-gameTeal/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-gameTeal"></div>
                           </div>
                           <p className="text-slate-300 font-medium leading-relaxed">
                              General category cut-offs are typically <span className="text-gameGold font-black">50-52%</span> higher than SC/ST/PwD in Civil.
                           </p>
                        </div>
                        <div className="flex gap-4">
                           <div className="mt-1.5 shrink-0 w-5 h-5 rounded-full bg-gameTeal/30 flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-gameTeal"></div>
                           </div>
                           <p className="text-slate-300 font-medium leading-relaxed">
                              Interdisciplinary papers like Engineering Sciences (XE) usually have moderate cut-offs compared to core engineering papers.
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* GATE SCORE */}
            <div className="mb-24">
               <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-gameGold/10 flex items-center justify-center text-gameGoldDark shadow-sm">
                     <Trophy size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                     GATE Score
                  </h3>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-[2rem] border border-slate-200 p-10 shadow-lg relative group">
                     <div className="absolute top-6 right-8 text-slate-100 group-hover:text-gameTeal/5 transition-colors">
                        <Layers size={64} />
                     </div>
                     <h4 className="font-black text-slate-900 text-xl mb-8 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-gameTeal rounded-full"></span>
                        For Multi-Session Papers
                     </h4>

                     <div className="space-y-6">
                        {[
                           { label: "Actual GATE Marks", desc: "Raw marks obtained using marking scheme." },
                           { label: "Normalised GATE Marks", desc: "Used to adjust difficulty variations across sessions." },
                           { label: "GATE Score", desc: "Calculated using normalized marks." }
                        ].map((item, idx) => (
                           <div key={idx} className="flex gap-4">
                              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-gameTeal/10 flex items-center justify-center text-gameTeal">
                                 <CheckCircle2 size={14} />
                              </div>
                              <div>
                                 <p className="font-black text-slate-900 mb-1">{item.label}</p>
                                 <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-white rounded-[2rem] border border-slate-200 p-10 shadow-lg relative group">
                     <div className="absolute top-6 right-8 text-slate-100 group-hover:text-gameGold/5 transition-colors">
                        <Layout size={64} />
                     </div>
                     <h4 className="font-black text-slate-900 text-xl mb-8 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-gameGold rounded-full"></span>
                        For Single-Session Papers
                     </h4>

                     <div className="space-y-6">
                        {[
                           { label: "Actual GATE Marks", desc: "Raw marks obtained based on marking scheme." },
                           { label: "GATE Score", desc: "Derived directly from actual marks without normalization." }
                        ].map((item, idx) => (
                           <div key={idx} className="flex gap-4">
                              <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-gameGold/10 flex items-center justify-center text-gameGoldDark">
                                 <CheckCircle2 size={14} />
                              </div>
                              <div>
                                 <p className="font-black text-slate-900 mb-1">{item.label}</p>
                                 <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* NORMALISATION & CALCULATION */}
            <div className="grid lg:grid-cols-2 gap-8 mb-24">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200"
               >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gameTeal shadow-sm border border-slate-100">
                        <Sigma size={24} />
                     </div>
                     <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                        Normalised Marks for Multi-Session Papers
                     </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                     In GATE, for multi-session papers, normalization adjusts variations in question difficulty across sessions.  
                     It assumes a similar ability distribution among candidates in all sessions ensured by large candidate numbers and random session allocation.
                  </p>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200"
               >
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gameTeal shadow-sm border border-slate-100">
                        <Calculator size={24} />
                     </div>
                     <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                        GATE Score Calculation
                     </h3>
                  </div>
                  <div className="space-y-4">
                     {[
                        "For single-session papers, the GATE Score is calculated using the actual marks obtained.",
                        "For multi-session papers, the GATE Score is calculated using normalized marks based on raw marks.",
                        "The GATE score is calculated using a formula defined by the organizing institute."
                     ].map((text, idx) => (
                        <div key={idx} className="flex gap-4">
                           <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-gameTeal"></div>
                           <p className="text-slate-600 font-medium leading-relaxed">{text}</p>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>

            {/* RESULTS & SCORECARD */}
            <div className="grid lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gameTeal/5 rounded-full blur-3xl group-hover:bg-gameTeal/10 transition-colors"></div>
                  <div className="relative z-10">
                     <div className="w-14 h-14 rounded-2xl bg-gameTeal/10 flex items-center justify-center text-gameTeal mb-6">
                        <FileCheck size={28} />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">
                        GATE Results
                     </h3>
                     <div className="space-y-6">
                        <p className="text-slate-600 font-medium leading-relaxed">
                           Results are announced on the official GATE website.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                           <p className="text-slate-900 font-bold leading-relaxed">
                              The GATE score remains valid for <span className="text-gameTeal font-black">three years</span> from the date of announcement.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-2 bg-gradient-to-br from-gameTeal to-gameTealDark text-white rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gameGold/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
                  
                  <div className="relative z-10">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                        <div className="flex items-center gap-5">
                           <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gameGold">
                              <Download size={32} />
                           </div>
                           <div>
                              <h3 className="text-3xl font-black tracking-tight">
                                 GATE 2026 Scorecard
                              </h3>
                              <p className="text-white/70 font-medium">Download your official results</p>
                           </div>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                           <Calendar size={20} className="text-gameGold" />
                           <span className="font-black text-sm uppercase tracking-widest">March 27, 2026</span>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-full bg-gameGold text-black flex items-center justify-center">
                                 <CheckCircle2 size={16} />
                              </div>
                              <h4 className="font-black text-lg">Free Download</h4>
                           </div>
                           <p className="text-white/80 font-medium leading-relaxed">
                              Qualified candidates can download their scorecard between
                              <span className="text-white font-black block mt-2 text-xl">March 27, 2026 and May 31, 2026</span>
                           </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center">
                                 <Wallet size={16} />
                              </div>
                              <h4 className="font-black text-lg">Late Download</h4>
                           </div>
                           <p className="text-white/80 font-medium leading-relaxed">
                              After May 31, candidates must pay
                              <span className="text-white font-black block mt-2 text-xl">Rs. 500 per test paper</span>
                              <span className="text-xs opacity-70 block mt-1 uppercase tracking-widest">Until December 31, 2026</span>
                           </p>
                        </div>
                     </div>

                     <div className="flex items-center gap-3 text-white/60 bg-black/20 px-6 py-4 rounded-2xl border border-white/5">
                        <Info size={20} />
                        <p className="text-sm font-bold">
                           No hard copies of the scorecard will be provided.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 8. GATE ORGANISERS */}
      <section id="organisers" className="py-12 bg-slate-50 border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
            <div className="absolute top-40 -right-20 w-96 h-96 bg-gameGold rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gameGold/10 border border-gameGold/20 mb-4">
                     <History size={14} className="text-gameGoldDark" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-gameGoldDark">Historical Data</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     GATE <span className="text-gameTeal">Organising Institutes</span>
                  </h2>
                  <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                     Year-wise list of institutes that have conducted the GATE examination since its inception.
                  </p>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                     <thead>
                        <tr className="bg-slate-900 text-white">
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[15%] text-center">S. No.</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[50%]">GATE Organising Institute</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest w-[35%] text-center">GATE Organising Year</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm text-slate-700">
                        {gateOrganisers.map((item, i) => (
                           <tr key={i} className={`hover:bg-gameTeal/5 transition-colors border-b border-slate-100 ${i % 2 === 1 ? 'bg-slate-50/50' : ''}`}>
                              <td className="p-5 border-r border-slate-100 font-bold text-slate-400 text-center">{item.no}</td>
                              <td className="p-5 border-r border-slate-100 font-black text-slate-900">{item.institute}</td>
                              <td className="p-5 font-bold text-gameTeal text-center">{item.year}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
            
            <div className="mt-8 flex items-center gap-3 text-slate-400 bg-white/50 px-6 py-4 rounded-2xl border border-slate-200 w-fit mx-auto">
               <Info size={18} />
               <p className="text-xs font-bold italic">
                  * Tentative / Upcoming Organisers
               </p>
            </div>
         </div>
      </section>

      {/* 9. PSUs THROUGH GATE */}
      <section id="psus" className="py-12 bg-white border-t border-slate-200 scroll-mt-32 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
            <div className="absolute top-20 -left-20 w-96 h-96 bg-gameTeal rounded-full blur-[100px]"></div>
         </div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-10">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gameTeal/10 border border-gameTeal/20 mb-4">
                     <Briefcase size={14} className="text-gameTeal" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-gameTeal">Career Opportunities</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                     Career Opportunities <span className="text-gameGoldDark">After GATE</span>
                  </h2>
                  <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
                     Various Central and State Public Sector Enterprises (PSUs) use the GATE score to hire candidates. 
                     Leading research institutes like ISRO, DRDO, and BARC also recruit based on GATE scores.
                  </p>
               </motion.div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
               {psuCategories.map((category, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all group"
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gameTeal shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                           <Landmark size={24} />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 leading-tight">
                           {category.title}
                        </h3>
                     </div>
                     
                     <ul className="space-y-3">
                        {category.list.map((item, i) => (
                           <li key={i} className="flex gap-3 text-sm font-medium text-slate-600">
                              <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gameTeal"></div>
                              <span>{item}</span>
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </div>

            <div className="mt-16 bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gameTeal/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center text-gameGold shrink-0">
                     <Rocket size={40} />
                  </div>
                  <div>
                     <h4 className="text-2xl font-black text-white mb-2">Research & Strategic Recruitment</h4>
                     <p className="text-slate-300 font-medium leading-relaxed">
                        Beyond PSUs, prestigious research institutes like <span className="text-gameGold font-black">ISRO, DRDO, and BARC</span> also recruit candidates based on their GATE scores, offering high-impact careers in science and technology.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 10. PREPARATION CTA */}
      <section className="py-24 bg-gameTeal text-white relative overflow-hidden">
         {/* Decorative elements - subtle glow as in screenshot */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px]"></div>
         </div>
         
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
               <div className="lg:w-2/3 text-center lg:text-left">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                  >
                     <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
                        Start your <span className="text-gameGold">GATE <br className="md:hidden" /> 2027/2028</span> <br className="hidden md:block"/>
                        Online Preparation with <br className="hidden md:block"/>
                        <span className="text-gameGold">Gaurav Babu Sir</span>
                     </h2>
                     
                     <div className="flex flex-col md:flex-row items-center gap-4 justify-center lg:justify-start">
                        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
                           <Smartphone className="text-gameGold" size={28} />
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-0.5">Available on Play Store</p>
                              <p className="text-base md:text-lg font-black">Download the <span className="text-gameGold">GAME Live</span> app now</p>
                           </div>
                        </div>
                        
                        <AppStoreButtons />
                     </div>
                  </motion.div>
               </div>
               
               <div className="lg:w-1/3 flex justify-center lg:justify-end">
                  <motion.div
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="relative"
                  >
                     <div className="absolute inset-0 bg-white/10 rounded-[2.5rem] blur-3xl animate-pulse"></div>
                     <button 
                        onClick={() => scrollToSection('gate-courses')}
                        className="relative group bg-white text-slate-900 px-12 py-10 rounded-[2.5rem] font-black text-2xl uppercase tracking-widest shadow-2xl hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-6 min-w-[320px]"
                     >
                        <div className="flex flex-col items-center">
                           <span>Check out</span>
                           <span>Courses</span>
                        </div>
                        <ArrowRight className="group-hover:translate-x-3 transition-transform" size={32} />
                     </button>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-white border-t border-slate-100" id="gate-faqs">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
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

      {/* Video Modal */}
      <AnimatePresence>
          {selectedVideo && (
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                onClick={() => setSelectedVideo(null)}
             >
                <div className="absolute top-6 right-6 z-10">
                   <button className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                      <X size={24} />
                   </button>
                </div>
                <motion.div 
                   initial={{ scale: 0.9, opacity: 0 }}
                   animate={{ scale: 1, opacity: 1 }}
                   className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                   onClick={(e) => e.stopPropagation()}
                >
                   <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                </motion.div>
             </motion.div>
          )}
       </AnimatePresence>

    </div>
  );
};

export default GateExamPage;
