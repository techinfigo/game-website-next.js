'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseGrid from './CourseGrid';
import TestimonialsText from './TestimonialsText';
import SpecialOffer from './SpecialOffer';
import CourseHelpSection from './CourseHelpSection';
import GBVideos from './GBVideos';
import ResultsSlider from './ResultsSlider';
import WinnerChoiceSection from './WinnerChoiceSection';
import { 
  Trophy, Shield, Star, Briefcase, TrendingUp, 
  CheckCircle2, ArrowRight, ChevronDown, Sparkles,
  Building2, Landmark, Users, GraduationCap, Target,
  Zap, Clock, FileText, Download, Info, HelpCircle,
  Plus, Minus, Globe, HeartPulse, Scale, Newspaper,
  Layers, Award, ShieldCheck, Microscope, Flame,
  Lightbulb, Compass, BarChart3, AlertCircle, Calendar,
  Activity, UserCheck, ClipboardList, HardHat, FileSpreadsheet, ListChecks,
  BookOpen, FolderOpen, ExternalLink as ExternalLinkIcon, Stethoscope, Eye, LayoutList, Train, Wrench,
  MonitorPlay, MessageSquare, ClipboardCheck, Wallet, Sparkle
} from 'lucide-react';

const EseExamPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedExam, setSelectedExam] = useState('ESE');
  const [searchTerm, setSearchTerm] = useState('');

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

  const comparisonData = [
    {
      feature: "Conducting Body",
      gate: "Any one of the seven IITs or IISc.",
      ese: "Union Public Service Commission (UPSC)."
    },
    {
      feature: "Objective",
      gate: "1. Admission to postgraduate programs (IITs, NITs, etc.). 2. Recruitment to Public Sector Undertakings (PSUs).",
      ese: "Recruitment to central government engineering roles in various ministries and departments."
    },
    {
      feature: "Exam Pattern",
      gate: "Single-stage exam.",
      ese: "Three stages: Prelims (Two objective-type papers), Mains (Two conventional-type papers), and Personality Test (Interview)."
    },
    {
      feature: "Engineering Disciplines",
      gate: "It covers 30 core engineering disciplines including applied sciences, AI, and humanities.",
      ese: "Limited to four branches: Mechanical, Civil, Electrical, and Electronics & Telecommunication."
    },
    {
      feature: "Eligibility",
      gate: "• Bachelor's degree required. • No age limit or restriction on attempts.",
      ese: "• Bachelor's degree required. • Age limit: 21-30 years (with relaxations). • Unlimited attempts until max age."
    },
    {
      feature: "Score Validity",
      gate: "3 Years.",
      ese: "1 Year (for recruitment purpose)."
    },
    {
      feature: "Who Should Choose",
      gate: "Aspirants aiming for higher studies, research, or PSU jobs.",
      ese: "Candidates focused on securing prestigious central government engineering roles."
    },
    {
      feature: "Difficulty Level",
      gate: "Moderate compared to ESE.",
      ese: "High due to the multi-stage selection process and limited disciplines."
    }
  ];

  const eseSchedule = [
    { event: "Release of Detailed Notification", date: "September 26, 2025" },
    { event: "Last Date for Online Applications (Revised)", date: "October 16, 2025" },
    { event: "ESE 2026 Preliminary Examination", date: "February 8, 2026" },
    { event: "ESE 2026 Mains Exam", date: "June 21, 2026" },
    { event: "Personality Test (Interview)", date: "To Be Announced" }
  ];

  const cutOffData = [
    { stage: "Prelims (500)", gen: "227", ews: "223", obc: "224", sc: "195", st: "175" },
    { stage: "Mains (1100)", gen: "557", ews: "513", obc: "524", sc: "465", st: "448" },
    { stage: "Final (1300)", gen: "738", ews: "716", obc: "705", sc: "652", st: "610" }
  ];

  const eligibilityCriteria = [
    { 
      label: "Nationality", 
      details: [
        "• Indian Citizens are eligible.",
        "• Other Candidates: Subjects of Nepal, Bhutan, Tibetan refugees, or a Person of Indian Origin (PIO) from specified countries."
      ] 
    },
    { 
      label: "Educational Qualifications", 
      details: [
        "• Bachelor's degree in Engineering (from a recognized university).",
        "• Final-year students can also apply, but must complete their degree before the Mains exam."
      ] 
    },
    { 
      label: "Age Limit", 
      details: [
        "• Minimum: 21 years",
        "• Maximum: 30 years",
        "• Age Relaxation: OBC - 3 years, SC/ST - 5 years, PwD - 10 years, Ex-servicemen - 5 years."
      ] 
    },
    { 
      label: "Number of Attempts", 
      details: [
        "• General: Unlimited attempts from 21 years to 30 years.",
        "• OBC: Unlimited attempts until the age limit is reached.",
        "• SC/ST: Unlimited attempts until the age limit is reached.",
        "• PwD: Same as SC/ST."
      ] 
    },
    { 
      label: "Physical Standards", 
      details: [
        "• Must meet the physical/medical standards prescribed by UPSC, especially for positions in Railways/Defense Services."
      ] 
    },
    { 
      label: "Engineering Disciplines", 
      details: [
        "• Mechanical Engineering (ME)",
        "• Civil Engineering (CE)",
        "• Electrical Engineering (EE)",
        "• Electronics & Telecommunication Engineering (ECE)"
      ] 
    }
  ];

  const examStructure = [
    {
      stage: "Preliminary Examination",
      type: "Objective Type (Two Papers)",
      papers: [
        { name: "Paper I: General Studies & Engineering Aptitude", marks: "200", duration: "2 hours" },
        { name: "Paper II: Engineering Discipline-specific (Mechanical, Civil, Electrical, Electronics, etc.)", marks: "300", duration: "3 hours" }
      ]
    },
    {
      stage: "Main Examination",
      type: "Conventional (Descriptive Type)",
      papers: [
        { name: "Paper I: Engineering Discipline-specific (Based on chosen branch)", marks: "300", duration: "3 hours" },
        { name: "Paper II: Engineering Discipline-specific (Based on chosen branch)", marks: "300", duration: "3 hours" }
      ]
    },
    {
      stage: "Personality Test",
      type: "Interview (Personal Interaction)",
      papers: [
        { name: "Assessment of the candidate's technical knowledge, personality, and communication skills", marks: "200", duration: "30-45 minutes" }
      ]
    }
  ];

  const medicalStandardsData = [
    { criteria: "Physical Fitness", details: "Candidates must be physically fit as per the medical standards prescribed by the UPSC. Any defect that interferes with the efficient discharge of duties can lead to disqualification." },
    { criteria: "Visual Standards", details: "Minimum required visual acuity standards for different services are set. Corrective glasses are allowed for some services." },
    { criteria: "Hearing Ability", details: "Candidates must have normal hearing ability. Hearing aids are not permitted for certain technical roles." },
    { criteria: "General Health", details: "Free from communicable diseases, chronic ailments, or any condition that could impair performance." },
    { criteria: "Height and Weight", details: "Must meet specific norms proportionate to height and weight, depending on gender. Certain variations may be permissible based on medical advice." },
    { criteria: "Special Medical Requirements", details: "Specific services (e.g., Railways, Border Roads Organization) may have additional medical criteria, such as no color blindness or certain physical endurance levels." }
  ];

  const vacancyData = [
    { discipline: "Civil", count: "199" },
    { discipline: "Mechanical", count: "85" },
    { discipline: "Electrical", count: "72" },
    { discipline: "Electronics", count: "118" },
    { discipline: "Total", count: "474", isTotal: true }
  ];

  const mechanicalServicesData = [
    { no: 1, service: "IRMS (Mechanical)", responsibilities: "Focuses on mechanical engineering roles within the Indian Railways, including infrastructure maintenance and management of mechanical assets." },
    { no: 2, service: "Central Water Engineering Service Gr. 'A'", responsibilities: "Management of water resources, planning and design of irrigation systems, water supply, and flood control." },
    { no: 3, service: "Central Power Engineering Service Gr. A & B (Mechanical Posts)", responsibilities: "Operation, maintenance, and management of power plants, electrical grids, and thermal power stations." },
    { no: 4, service: "Indian Naval Armament Service", responsibilities: "Development, testing, and maintenance of naval armaments and weapon systems for the Indian Navy." },
    { no: 5, service: "Indian Naval Material Management Service", responsibilities: "Procurement, inventory, and management of naval materials, including ships and mechanical systems." },
    { no: 6, service: "Geological Survey of India Engineering Service Gr. 'A'", responsibilities: "Surveying geological features, analyzing mineral resources, and conducting environmental impact assessments." },
    { no: 7, service: "Indian Defence Service of Engineers (Mechanical Engineering)", responsibilities: "Engineering management of defense infrastructure, equipment, and machinery for the Indian Army." },
    { no: 8, service: "Assistant Executive Engineer Group 'A' in Border Roads Engineering", responsibilities: "Construction, development, and maintenance of road infrastructure in border areas." },
    { no: 9, service: "Assistant Development Officers (Engineering)", responsibilities: "Implementation of engineering policies for development in rural areas, infrastructure projects, and more." },
    { no: 10, service: "Central Electrical & Mechanical Engineering Service", responsibilities: "Overseeing the electrical and mechanical systems in public sector undertakings and ministries." },
    { no: 11, service: "Indian Skill Development Service", responsibilities: "Planning and executing skill development programs for the nation's workforce, particularly in mechanical fields." }
  ];

  const onlineCoachingAdvantages = [
    { title: "Recorded Lectures", desc: "Complex concepts are simplified through recorded lectures, making them accessible for repeated viewing.", icon: MonitorPlay, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Doubt-Solving Sessions", desc: "Interactive sessions allow students to clarify their doubts promptly, ensuring no confusion remains.", icon: MessageSquare, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Extensive Study Materials", desc: "Access to practice questions, mock tests, and other study resources enhances the preparation process.", icon: FileText, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Regular Assessments", desc: "Frequent assessments help track progress and identify areas needing improvement.", icon: ClipboardCheck, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Flexible Learning Environment", desc: "Students can access course materials and lectures 24/7, allowing for a personalized study schedule.", icon: Clock, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Community Engagement", desc: "A vibrant student community fosters interaction and peer learning opportunities.", icon: Users, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Affordable Options", desc: "We have introduced affordable options to help graduates crack the UPSC ESE without breaking the bank.", icon: Wallet, color: "text-gameTeal", bg: "bg-gameTeal/5" }
  ];

  const keyFeatures = [
    { title: "Negative Marking", desc: "In Prelims, 1/3 of the marks will be deducted for wrong answers in Paper I and Paper II.", icon: AlertCircle, color: "text-gameGold", bg: "bg-gameGold/10" },
    { title: "Syllabus Depth", desc: "Covers basic and in-depth technical knowledge depending on the examination stage.", icon: BookOpen, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Mains", desc: "Qualifying nature for Mains; Paper I & II marks are considered for selection to the next stage.", icon: Activity, color: "text-gameTeal", bg: "bg-gameTeal/5" },
    { title: "Final Selection", desc: "Final merit list is based on combined marks from Prelims, Mains, and Personality Tests.", icon: Award, color: "text-gameGold", bg: "bg-gameGold/10" }
  ];

  const choiceAdvantages = [
    {
      title: "Prestigious Government Roles",
      desc: "Secure leadership positions in Railways, Defense, Central Engineering Services, and other top government departments.",
      icon: Building2,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5"
    },
    {
      title: "Higher Studies",
      desc: "Avail scholarships, fellowships, and study leave opportunities for advanced technical education in India and abroad.",
      icon: GraduationCap,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5"
    },
    {
      title: "Railway and Defense Careers",
      desc: "Work in key engineering roles in Indian Railways, Military Engineering Services, and other critical sectors.",
      icon: Shield,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5"
    },
    {
      title: "Nation-Building Projects",
      desc: "Contribute to large-scale infrastructure and technical advancements across the country.",
      icon: Landmark,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5"
    },
    {
      title: "Recognition and Prestige",
      desc: "Establish yourself as a top-tier engineer with job stability, high salary prospects, and clear career growth opportunities.",
      icon: Award,
      color: "text-gameGold",
      bg: "bg-gameGold/10"
    },
    {
      title: "An Edge for Other Exams",
      desc: "ESE prep builds a strong foundation, boosting success in GATE, PSUs, SSC-JE, and state-level AE/JE examinations.",
      icon: Zap,
      color: "text-gameTeal",
      bg: "bg-gameTeal/5"
    }
  ];

  const departments = [
    "Central Engineering Service (CES)",
    "Central Water Engineering Service (CWES)",
    "Indian Railway Service of Engineers (IRSE)",
    "Indian Railway Stores Service (IRSS)",
    "Central Power Engineering Service",
    "Indian Ordnance Factories Service"
  ];

  const faqs = [
    { 
      q: "Can I prepare for ESE Exams with GAME's Online Coaching?", 
      a: "Ans. Absolutely! GAME's ESE online coaching is specifically designed to help candidates prepare effectively for the ESE exam." 
    },
    { 
      q: "Why should I choose GAME for ESE Online Coaching?", 
      a: "Ans. GAME delivers high-quality education and top-notch content for Mechanical Engineering aspirants preparing for ESE and GATE exams. Under the leadership of Gaurav Babu Sir, a distinguished educator with 13+ years of experience, our teaching philosophy focuses on building a strong academic foundation by teaching subjects from scratch with conceptual clarity and practical problem-solving techniques. With GAME, students can confidently excel in competitive exams and achieve their career aspirations." 
    },
    { 
      q: "Is the GAME ESE Course 2026 affordable?", 
      a: "Ans. Yes, GAME is committed to making quality education accessible. Their ESE online coaching offers various pricing plans to suit diverse financial situations." 
    },
    { 
      q: "Can I Prepare for the ESE Exam While Working a Full-Time Job?", 
      a: "Ans. You can prepare for the ESE exam while managing a full-time job with the right strategy and dedication. Platforms like GAME offer flexible ESE online coaching with recorded lectures, structured study plans, and expert mentorship, making it easier for working professionals to balance their preparation. By dedicating focused hours during evenings and weekends, and leveraging comprehensive ESE resources, success is achievable even with a job." 
    },
    { 
      q: "How Much Time is Needed for ESE Exam Preparation for Full-Timers?", 
      a: (
        <div className="space-y-4">
          <p className="font-bold">Ans. Full-time aspirants preparing for the ESE (Engineering Services Examination) generally need 8-12 months of focused and consistent study. Here’s an ideal breakdown:</p>
          <div className="space-y-3">
             <div className="flex gap-4 p-4 bg-gameTeal/5 rounded-2xl border border-gameTeal/10 group hover:border-gameTeal transition-all">
                <div className="w-8 h-8 rounded-full bg-gameTeal text-white flex items-center justify-center font-black shrink-0 text-sm">1</div>
                <p className="text-black/60 font-medium text-sm leading-relaxed">
                   <strong className="text-black">6-7 months</strong> for completing the full syllabus, including conceptual clarity and practicing standard questions.
                </p>
             </div>
             <div className="flex gap-4 p-4 bg-gameTeal/5 rounded-2xl border border-gameTeal/10 group hover:border-gameTeal transition-all">
                <div className="w-8 h-8 rounded-full bg-gameTeal text-white flex items-center justify-center font-black shrink-0 text-sm">2</div>
                <p className="text-black/60 font-medium text-sm leading-relaxed">
                   <strong className="text-black">2-3 months</strong> for solving previous year's question papers (PYQs), taking mock tests, and focusing on revisions.
                </p>
             </div>
             <div className="flex gap-4 p-4 bg-gameTeal/5 rounded-2xl border border-gameTeal/10 group hover:border-gameTeal transition-all">
                <div className="w-8 h-8 rounded-full bg-gameTeal text-white flex items-center justify-center font-black shrink-0 text-sm">3</div>
                <p className="text-black/60 font-medium text-sm leading-relaxed">
                   <strong className="text-black">1-2 months</strong> for fine-tuning weak areas and improving speed and accuracy.
                </p>
             </div>
          </div>
          <p className="bg-gameTeal/5 p-4 rounded-xl text-xs font-bold text-gameTeal border-l-4 border-gameTeal italic">
             GAME offers a structured study plan, expert mentorship, and practice tests to help full-time aspirants optimize their preparation timeline and crack the ESE exam effectively.
          </p>
        </div>
      )
    },
    { 
      q: "How Much Time is Needed for ESE Exam Preparation for Working Individuals?", 
      a: (
        <div className="space-y-4">
          <p className="font-bold">Ans. For working professionals preparing for the ESE (Engineering Services Examination), an effective study plan typically spans 12-18 months. Balancing work and study requires careful planning and dedication:</p>
          <div className="space-y-3">
             <div className="flex gap-4 p-4 bg-gameTeal/5 rounded-2xl border border-gameTeal/10 group hover:border-gameTeal transition-all">
                <div className="w-8 h-8 rounded-full bg-gameTeal text-white flex items-center justify-center font-black shrink-0 text-sm">1</div>
                <p className="text-black/60 font-medium text-sm leading-relaxed">
                   <strong className="text-black">Daily Study Hours:</strong> Dedicate 3-4 hours on weekdays and 6-8 hours on weekends.
                </p>
             </div>
             <div className="flex gap-4 p-4 bg-gameTeal/5 rounded-2xl border border-gameTeal/10 group hover:border-gameTeal transition-all">
                <div className="w-8 h-8 rounded-full bg-gameTeal text-white flex items-center justify-center font-black shrink-0 text-sm">2</div>
                <p className="text-black/60 font-medium text-sm leading-relaxed">
                   <strong className="text-black">Syllabus Completion:</strong> Spend the first 8-10 months focusing on core subjects, conceptual clarity, and completing the syllabus.
                </p>
             </div>
             <div className="flex gap-4 p-4 bg-gameTeal/5 rounded-2xl border border-gameTeal/10 group hover:border-gameTeal transition-all">
                <div className="w-8 h-8 rounded-full bg-gameTeal text-white flex items-center justify-center font-black shrink-0 text-sm">3</div>
                <p className="text-black/60 font-medium text-sm leading-relaxed">
                   <strong className="text-black">Revision and Practice:</strong> Reserve the next 4-6 months for solving the previous year's question papers (PYQs), mock tests, and strengthening weak areas.
                </p>
             </div>
          </div>
          <p className="bg-gameTeal/5 p-4 rounded-xl text-xs font-bold text-gameTeal border-l-4 border-gameTeal italic">
             GAME provides structured online coaching, flexible study schedules, and concise content designed for working aspirants. With consistent effort and smart time management, working professionals can achieve success in the ESE exam.
          </p>
        </div>
      )
    },
    { 
      q: "Is coaching necessary for clearing the ESE exam?", 
      a: (
        <div className="space-y-6">
          <p className="font-bold">Ans. Coaching is not mandatory for clearing the ESE (Engineering Services Examination), but it can be extremely helpful, especially for aspirants who need structured guidance. Here are key points to consider:</p>
          <div className="grid gap-4">
             <div className="p-5 bg-white rounded-2xl border border-gameTeal/10 shadow-sm">
                <h4 className="font-black text-black mb-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gameTeal"></div> Self-Study vs. Coaching:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black/60 font-medium">
                   <li>If you have strong conceptual clarity, discipline, and access to quality study materials, self-study can be sufficient.</li>
                   <li>Coaching, however, provides expert guidance, regular doubt-solving sessions, and a systematic approach to cover the vast syllabus.</li>
                </ul>
             </div>
             <div className="p-5 bg-white rounded-2xl border border-gameTeal/10 shadow-sm">
                <h4 className="font-black text-black mb-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gameTeal"></div> Time Management:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black/60 font-medium">
                   <li>Working professionals or students with time constraints can benefit from coaching institutes like GAME, which offer online coaching with flexible schedules and focused content.</li>
                </ul>
             </div>
             <div className="p-5 bg-white rounded-2xl border border-gameTeal/10 shadow-sm">
                <h4 className="font-black text-black mb-2 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gameTeal"></div> Competitive Edge:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-black/60 font-medium">
                   <li>Coaching institutes provide mock tests, previous year question analysis, and exam-specific strategies that can help aspirants enhance speed, accuracy, and problem-solving abilities.</li>
                </ul>
             </div>
          </div>
          <p className="font-medium text-black/70 italic border-l-4 border-gameGold pl-4 bg-gameTeal/5 py-3 rounded-r-xl">
            In summary, while coaching is not a necessity, it can act as a catalyst for ESE preparation by providing structure, expert mentorship, and consistency.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#0f1115] text-white">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
                  <Trophy size={14} className="text-gameGold" />
                  <span className="text-xs font-bold uppercase tracking-widest text-gameGold">Class A Gazetted Officer</span>
               </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                  Lead India's <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold">
                     Engineering Excellence
                  </span>
               </h1>

               <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
                  Master the Engineering Services Examination (ESE) with India's most trusted mentors. Join the ranks of elite IES officers and build the nation.
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => scrollToSection('advantages')} className="bg-gameTeal text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl shadow-gameTeal/20 hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                     Start Prep Today <ArrowRight size={20} />
                  </button>
                  <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                     Download Syllabus
                  </button>
               </div>
            </motion.div>
         </div>
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
            <ChevronDown size={24} />
         </div>
      </section>

      {/* STICKY SUB-NAVIGATION */}
      <div className="sticky top-[58px] z-40 w-full bg-[#075d63] shadow-md border-b border-[#054a4f]">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="flex items-center justify-between h-14">
               <div className="flex items-center gap-1 md:gap-6 overflow-x-auto no-scrollbar mask-gradient-right w-full md:w-auto">
                  {[
                     { label: "Why ESE?", id: "prestige" },
                     { label: "Advantages", id: "advantages" },
                     { label: "GATE vs ESE", id: "comparison" },
                     { label: "Schedule", id: "schedule" },
                     { label: "Cut-offs", id: "cut-offs" },
                     { label: "Eligibility", id: "eligibility" },
                     { label: "Structure", id: "structure" },
                     { label: "Syllabus", id: "syllabus" },
                     { label: "Medical", id: "medical-standards" },
                     { label: "Vacancy", id: "vacancy" },
                     { label: "Mech Services", id: "mech-services" },
                     { label: "Online Prep", id: "online-coaching" },
                     { label: "Departments", id: "departments" },
                     { label: "FAQs", id: "faqs" }
                  ].map((item) => (
                     <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-white/90 text-xs md:text-sm font-bold whitespace-nowrap hover:text-[#f2c537] hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
                     >
                        {item.label}
                     </button>
                  ))}
               </div>
               <div className="hidden md:flex items-center gap-4 pl-4 border-l border-white/10 shrink-0">
                  <button 
                     className="bg-[#f2c537] text-black px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_10px_rgba(242,197,55,0.3)] flex items-center gap-2"
                  >
                     <Sparkles size={12} className="fill-black" /> Join Batch
                  </button>
               </div>
            </div>
         </div>
      </div>

      {/* 2. Prestigious Career Path (Section 1) */}
      <section id="prestige" className="py-24 px-8 md:px-10 lg:px-12 bg-white relative scroll-mt-32">
         <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
               <motion.div 
                  className="lg:w-7/12"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameTeal/5 border border-gameTeal/10 text-gameTeal text-xs font-bold uppercase tracking-widest mb-6">
                    <Star size={14} className="fill-gameTeal" /> Elite Engineering Roles
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight">
                     What Makes the ESE a <span className="text-gameTeal">Prestigious Career Path?</span>
                  </h2>
                  
                  <div className="space-y-8 text-black/80 text-lg leading-relaxed font-medium">
                     <p>
                        The <strong className="text-black">Engineering Services Examination (ESE)</strong> is a highly competitive national-level exam conducted by the <strong className="text-black">Union Public Service Commission (UPSC)</strong> for recruitment into top-tier engineering services within the Government of India.
                     </p>
                     
                     <div className="bg-gameTeal/5 p-8 rounded-[2rem] border-l-8 border-gameTeal shadow-lg">
                        <h4 className="text-gameTeal font-black uppercase tracking-widest text-xs mb-4">A Gateway to Prestigious Roles</h4>
                        <p className="text-black/80 italic">
                           "Successful candidates secure roles in prestigious departments like the Central Engineering Service (CES), Central Water Engineering Service (CWES), Indian Railway Service of Engineers (IRSE), Indian Railway Stores Service (IRSS), and several others."
                        </p>
                     </div>

                     <p>
                        ESE is conducted in three rigorous stages — <span className="font-black text-black">Prelims, Mains, and Interview</span> — to ensure that only the most competent and driven engineers are selected. 
                     </p>
                     
                     <p>
                        Aspiring engineers target ESE for its unmatched career prospects, which include <span className="text-gameTeal font-bold">exceptional growth, job security, leadership opportunities</span>, and the honor of contributing to nation-building projects.
                     </p>

                     <p className="font-bold text-xl text-black">
                        It’s more than just an exam — ESE is a gateway to a bright, secure, and impactful career for those aiming to lead in engineering domains.
                     </p>
                  </div>
               </motion.div>

               <motion.div 
                  className="lg:w-5/12 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
               >
                  <div className="relative bg-white rounded-[2.5rem] p-4 border border-gameTeal/10 shadow-2xl overflow-hidden group">
                     <img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fit=crop&w=800&q=80" 
                        alt="Infrastructure Project" 
                        className="rounded-[2rem] w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                     <div className="absolute bottom-10 left-10 right-10 text-white">
                        <div className="bg-gameGold text-black inline-block px-3 py-1 rounded-lg font-black text-[10px] uppercase tracking-widest mb-4 shadow-lg">Nation Building</div>
                        <h4 className="text-2xl font-black leading-tight">Empowering Engineers to Lead India</h4>
                     </div>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                     {[
                        { label: "Stages", i: 3, icon: Layers },
                        { label: "Authority", val: "UPSC", icon: Landmark },
                        { label: "Grade", val: "A", icon: Award },
                        { label: "Security", val: "Lifelong", icon: Shield }
                     ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-gameTeal transition-all">
                           <div className="w-10 h-10 rounded-xl bg-gameTeal/5 flex items-center justify-center text-gameTeal">
                              <item.icon size={20} />
                           </div>
                           <div>
                              <div className="text-sm font-black text-slate-900 leading-none mb-1">{item.val || item.i}</div>
                              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.label}</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 3. Why is ESE the Right Choice? (Section 2) */}
      <section id="advantages" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#075d63_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-6 tracking-tight">
                     Why is <span className="text-gameTeal">ESE the Right Choice?</span>
                  </h2>
                  <p className="text-black/70 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed mb-10">
                    The <strong className="text-black">Engineering Services Examination (ESE)</strong> offers unparalleled opportunities for engineers, making it a dream career path. Here’s what ESE-qualified candidates can achieve:
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {choiceAdvantages.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white rounded-[2.5rem] p-8 border border-gameTeal/10 shadow-sm hover:shadow-xl hover:bg-white hover:border-gameTeal/20 transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={28} strokeWidth={2} />
                     </div>
                     <h3 className="text-xl font-black text-black mb-4 leading-tight group-hover:text-gameTeal transition-colors">
                        {item.title}
                     </h3>
                     <p className="text-black/60 text-sm font-bold leading-relaxed flex-grow">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-[#0f1115] text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-gameTeal/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-black leading-relaxed italic border-l-4 border-gameGold pl-6 py-2">
                     "In essence, the <span className="text-gameGold">ESE is not just an exam</span> but a gateway to a rewarding, secure, and impactful engineering career."
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Course Grid Section */}
      <section className="bg-slate-50">
        <CourseGrid 
          selectedExam={selectedExam} 
          setSelectedExam={setSelectedExam}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </section>

      {/* Testimonials Section */}
      <TestimonialsText />

      {/* Special Offer Section */}
      <SpecialOffer />

      {/* Course Help Section */}
      <CourseHelpSection />

      {/* Eye-opening Video Section */}
      <GBVideos />

      {/* Results Section */}
      <ResultsSlider />

      {/* Winner's Choice Section */}
      <WinnerChoiceSection />

      {/* 4. GATE vs ESE Comparison Section (Section 3) */}
      <section id="comparison" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameGold/10 border border-gameGold/20 text-gameGold text-xs font-black uppercase tracking-widest mb-6">
                    <Compass size={14} className="animate-spin-slow" /> Strategic Comparison
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight">
                     GATE vs ESE: <span className="text-gameTeal">Choosing the Right Path</span>
                  </h2>
                  <p className="text-black/70 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
                     The <strong className="text-black">Graduate Aptitude Test in Engineering (GATE)</strong> and the <strong className="text-black">Engineering Services Examination (ESE)</strong> are two of the most sought-after options for engineering graduates. Here's a detailed comparison to help you make an informed decision:
                  </p>
               </motion.div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden mb-16">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[20%]">Feature</th>
                           <th className="p-6 border-r border-white/10 w-[40%] text-center">GATE</th>
                           <th className="p-6 w-[40%] text-center">ESE (IES)</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-black/80 divide-y divide-gameTeal/10">
                        {comparisonData.map((row, i) => (
                           <tr key={i} className="hover:bg-gameTeal/5 transition-all duration-300 group">
                              <td className="p-6 font-black text-black bg-gameTeal/5 border-r border-gameTeal/10">
                                 {row.feature}
                              </td>
                              <td className="p-6 font-medium text-black/70 border-r border-gameTeal/10 leading-relaxed text-center">
                                 {row.gate}
                              </td>
                              <td className="p-6 font-bold text-gameTeal leading-relaxed text-center">
                                 {row.ese}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Key Takeaways & Conclusion */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-8 bg-black rounded-[2.5rem] p-10 text-white relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                     <Lightbulb size={160} />
                  </div>
                  <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                     <span className="text-gameGold">Key Takeaways</span>
                  </h3>
                  <div className="space-y-6">
                     <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal/20 flex items-center justify-center shrink-0 group-hover:bg-gameTeal/40 transition-colors">
                           <GraduationCap size={20} className="text-gameTeal" />
                        </div>
                        <p className="text-white/70 font-medium leading-relaxed group-hover:text-white transition-colors">
                           <strong className="text-white">GATE</strong> is ideal for those interested in postgraduate studies, research, or PSU jobs, offering flexibility across a wide range of disciplines.
                        </p>
                     </div>
                     <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-gameGold/20 flex items-center justify-center shrink-0 group-hover:bg-gameGold/40 transition-colors">
                           <Trophy size={20} className="text-gameGold" />
                        </div>
                        <p className="text-white/70 font-medium leading-relaxed group-hover:text-white transition-colors">
                           <strong className="text-white">ESE</strong> is tailored for those aiming for government engineering positions, providing prestige, job security, and a chance to contribute to nation-building projects.
                        </p>
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4 bg-gameTeal rounded-[2.5rem] p-10 text-white flex flex-col justify-center items-center text-center shadow-xl shadow-gameTeal/20"
               >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                     <Target size={32} />
                  </div>
                  <p className="text-lg font-black leading-relaxed">
                     Your choice should depend on your career aspirations and strengths in handling competitive exams.
                  </p>
                  <div className="mt-8 h-1 w-12 bg-gameGold rounded-full"></div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 5. ESE 2026 Schedule (Section 4) */}
      <section id="schedule" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameTeal/5 border border-gameTeal/10 text-gameTeal text-xs font-black uppercase tracking-widest mb-6">
                    <Calendar size={14} /> Official Timeline
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                     ESE 2026 <span className="text-gameTeal">Schedule</span>
                  </h2>
                  <p className="text-black/70 text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                     Here is the updated table for the <strong className="text-gameTeal">UPSC ESE 2026</strong> with the modified application deadline:
                  </p>
               </motion.div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border-4 border-gameGold/20 overflow-hidden mb-12">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[60%]">Event</th>
                           <th className="p-6 w-[40%] text-center">Date</th>
                        </tr>
                     </thead>
                     <tbody className="text-[15px] text-black/80 divide-y divide-gameTeal/10">
                        {eseSchedule.map((row, i) => (
                           <tr key={i} className="hover:bg-gameTeal/5 transition-all duration-300">
                              <td className="p-6 font-bold text-black border-r border-gameTeal/10 leading-relaxed">
                                 {row.event}
                              </td>
                              <td className={`p-6 text-center font-black ${row.date === 'To Be Announced' ? 'text-black/40 italic' : 'text-gameTeal'}`}>
                                 {row.date}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-6 rounded-2xl border border-gameTeal/10 flex items-center gap-4 shadow-sm"
            >
               <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gameTeal shrink-0 shadow-sm">
                  <Info size={20} />
               </div>
               <p className="text-sm font-bold text-black/70 leading-relaxed">
                  <strong className="text-black">Note:</strong> These dates are based on the latest UPSC notification. Candidates are advised to regularly check the official UPSC website for any further changes.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 6. ESE Average Cut-off Marks (Section 5) */}
      <section id="cut-offs" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameGold/10 border border-gameGold/20 text-gameGold text-xs font-black uppercase tracking-widest mb-6">
                    <BarChart3 size={14} /> Performance Trends
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                     ESE Average Cut-off Marks: <br/> <span className="text-gameTeal">Mechanical Branch Previous Year Trends</span>
                  </h2>
                  <p className="text-black/70 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
                    Here is a general average trend of the <strong className="text-black">Engineering Services Examination (ESE)</strong> cut-off marks for Mechanical Engineering (ME), based on the data from recent years:
                  </p>
               </motion.div>
            </div>

            {/* Cut-off Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden mb-16 group">
               <div className="bg-black text-white p-6 text-center border-b border-white/10">
                  <h4 className="text-base font-black uppercase tracking-widest flex items-center justify-center gap-3">
                     <Building2 size={20} className="text-gameGold" /> Average ESE Cut-off Marks Trend (Mechanical Engineering - ME)
                  </h4>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-gameTeal/5 text-black/50 text-[10px] font-black uppercase tracking-[0.2em] border-b border-gameTeal/10">
                           <th className="p-6 border-r border-gameTeal/10 w-[20%] text-center" rowSpan={2}>STAGES</th>
                           <th className="p-4 text-center border-b border-gameTeal/10" colSpan={5}>CATEGORY</th>
                        </tr>
                        <tr className="bg-gameTeal/5 text-black text-xs font-black uppercase border-b border-gameTeal/10">
                           <th className="p-4 border-r border-gameTeal/10 text-center w-[16%]">Gen</th>
                           <th className="p-4 border-r border-gameTeal/10 text-center w-[16%]">EWS</th>
                           <th className="p-4 border-r border-gameTeal/10 text-center w-[16%]">OBC</th>
                           <th className="p-4 border-r border-gameTeal/10 text-center w-[16%]">SC</th>
                           <th className="p-4 text-center w-[16%]">ST</th>
                        </tr>
                     </thead>
                     <tbody className="text-[15px] text-black/80 divide-y divide-gameTeal/10">
                        {cutOffData.map((row, i) => (
                           <tr key={i} className="hover:bg-gameTeal/5 transition-all duration-300">
                              <td className="p-6 border-r border-gameTeal/10 font-black text-black bg-gameTeal/5 text-center uppercase tracking-tight">
                                 {row.stage}
                              </td>
                              <td className="p-6 border-r border-gameTeal/10 text-center font-black text-lg text-gameTeal">
                                 {row.gen}
                              </td>
                              <td className="p-6 border-r border-gameTeal/10 text-center font-bold text-black/80">
                                 {row.ews}
                              </td>
                              <td className="p-6 border-r border-gameTeal/10 text-center font-bold text-black/80">
                                 {row.obc}
                              </td>
                              <td className="p-6 border-r border-gameTeal/10 text-center font-bold text-black/50">
                                 {row.sc}
                              </td>
                              <td className="p-6 text-center font-bold text-black/50">
                                 {row.st}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Factors Section */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-7 space-y-6"
               >
                  <p className="text-black/70 font-bold leading-relaxed mb-8">
                     This table presents a rough average of the cut-off trends observed in the last 5 years. The cut-off marks for each stage (Prelims, Mains, and Final) fluctuate based on several factors, such as:
                  </p>
                  
                  <div className="space-y-4">
                     {[
                        { title: "Exam Difficulty", desc: "A tougher exam results in lower cut-off marks.", icon: Activity, color: "text-gameTeal", bg: "bg-gameTeal/5" },
                        { title: "Number of Vacancies", desc: "More vacancies generally lead to slightly lower cut-offs.", icon: Briefcase, color: "text-gameTeal", bg: "bg-gameTeal/5" },
                        { title: "Number of Candidates", desc: "The higher the number of candidates, the higher will be the competition, which can result in varying cut-offs.", icon: Users, color: "text-gameTeal", bg: "bg-gameTeal/5" }
                     ].map((factor, i) => (
                        <div key={i} className="bg-white p-5 rounded-2xl border border-gameTeal/10 flex items-center gap-5 shadow-sm group hover:border-gameTeal transition-all">
                           <div className={`w-12 h-12 rounded-xl ${factor.bg} flex items-center justify-center ${factor.color} shrink-0 group-hover:scale-110 transition-transform`}>
                              <factor.icon size={24} />
                           </div>
                           <div>
                              <h4 className="font-black text-black text-sm uppercase mb-0.5">{i+1}. {factor.title}</h4>
                              <p className="text-black/60 text-sm font-medium leading-snug">{factor.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-5 bg-gameGold/10 border-2 border-gameGold/30 p-8 rounded-[2.5rem] relative overflow-hidden"
               >
                  <Sparkles className="absolute top-6 right-6 text-gameGold opacity-40 animate-pulse" size={40} />
                  <p className="text-black text-base md:text-lg leading-relaxed font-black mb-6">
                     Reference Note:
                  </p>
                  <p className="text-black/60 text-sm md:text-base font-bold leading-relaxed mb-8">
                     "This data can serve as a useful reference for candidates preparing for the exam. However, it is essential to keep updated with the official announcements as cut-offs are ultimately determined based on the exam year's performance and vacancies."
                  </p>
                  <button className="w-full bg-[#0f1115] text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gameTeal transition-all shadow-xl">
                     Get Official Notifications
                  </button>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 7. ESE Eligibility Criteria Section (Section 6) */}
      <section id="eligibility" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameTeal/5 border border-gameTeal/10 text-gameTeal text-xs font-black uppercase tracking-widest mb-6">
                    <UserCheck size={14} /> Compliance & Standards
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                     Engineering Services Examination <br/> <span className="text-gameTeal">Eligibility Criteria 2026</span>
                  </h2>
                  <p className="text-black/70 text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed">
                    UPSC defines strict standards for aspirants. Below are the key requirements for <strong className="text-black">Age Limit, Educational Qualification, and more:</strong>
                  </p>
               </motion.div>
            </div>

            {/* Eligibility Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden mb-12">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[25%]">Eligibility Criteria</th>
                           <th className="p-6 w-[75%]">Details</th>
                        </tr>
                     </thead>
                     <tbody className="text-[15px] text-black/80 divide-y divide-gameTeal/10">
                        {eligibilityCriteria.map((row, i) => (
                           <tr key={i} className="hover:bg-gameTeal/5 transition-all duration-300">
                              <td className="p-6 border-r border-gameTeal/10 font-black text-black bg-gameTeal/5">
                                 {row.label}
                              </td>
                              <td className="p-6 space-y-3">
                                 {row.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                       <div className="w-1.5 h-1.5 rounded-full bg-gameTeal mt-2 shrink-0"></div>
                                       <p className="font-medium text-black/70 leading-relaxed">{detail}</p>
                                    </div>
                                 ))}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-gameTeal/5 p-6 rounded-2xl border-l-4 border-gameTeal flex items-center gap-4 shadow-sm"
            >
               <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-gameTeal shrink-0 shadow-sm">
                  <Info size={20} />
               </div>
               <p className="text-sm font-bold text-black/70 leading-relaxed">
                  <strong className="text-black">Important:</strong> Eligibility is determined based on the official UPSC notification. Candidates must ensure they fulfill all requirements before filling out the application form. For physical standards, candidates are advised to refer to the official medical manual provided by UPSC.
               </p>
            </motion.div>
         </div>
      </section>

      {/* 8. ESE 2026 Examination Structure (Section 7) */}
      <section id="structure" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gameTeal/5 border border-gameTeal/10 text-gameTeal text-xs font-black uppercase tracking-widest mb-6">
                    <FileSpreadsheet size={14} /> Comprehensive Assessment
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                     ESE 2026 <span className="text-gameTeal">Examination Structure</span>
                  </h2>
               </motion.div>
            </div>

            {/* Structure Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden mb-16">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Stage</th>
                           <th className="p-6 border-r border-white/10 w-[15%] text-center">Examination Type</th>
                           <th className="p-6 border-r border-white/10 w-[45%]">Details</th>
                           <th className="p-6 border-r border-white/10 w-[12.5%] text-center">Marks</th>
                           <th className="p-6 w-[12.5%] text-center">Duration</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-black/80 divide-y divide-gameTeal/10">
                        {examStructure.map((row, i) => (
                           <React.Fragment key={i}>
                              {row.papers.map((paper, pIdx) => (
                                 <tr key={`${i}-${pIdx}`} className="hover:bg-gameTeal/5 transition-colors">
                                    {pIdx === 0 && (
                                       <td rowSpan={row.papers.length} className="p-6 text-center font-black text-black border-r border-gameTeal/10 align-middle bg-gameTeal/5">
                                          {row.stage}
                                       </td>
                                    )}
                                    {pIdx === 0 && (
                                       <td rowSpan={row.papers.length} className="p-6 text-center font-bold text-black/70 border-r border-gameTeal/10 align-middle bg-gameTeal/5 leading-snug">
                                          {row.type}
                                       </td>
                                    )}
                                    <td className="p-6 font-medium border-r border-slate-100 leading-relaxed italic">
                                       {paper.name}
                                    </td>
                                    <td className="p-6 text-center font-black text-gameTeal border-r border-slate-100 text-lg">
                                       {paper.marks}
                                    </td>
                                    <td className="p-6 text-center font-bold text-slate-500 bg-slate-50/30">
                                       {paper.duration}
                                    </td>
                                 </tr>
                              ))}
                           </React.Fragment>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {keyFeatures.map((feat, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:bg-white hover:border-gameTeal/20 transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center ${feat.color} mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <feat.icon size={24} strokeWidth={2.5} />
                     </div>
                     <h4 className="text-base font-black text-slate-900 mb-3 uppercase tracking-tight group-hover:text-gameTeal transition-colors">
                        {feat.title}
                     </h4>
                     <p className="text-slate-500 text-xs font-bold leading-relaxed flex-grow">
                        {feat.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. ESE 2026 Syllabus Section (Section 8) */}
      <section id="syllabus" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-12">
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight">
                     ESE 2026 <span className="text-gameTeal">Syllabus</span>
                  </h2>
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gameTeal/10 flex flex-col md:flex-row items-center justify-between gap-10 group hover:border-gameTeal/30 transition-all duration-500">
                     <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                           <div className="w-12 h-12 rounded-2xl bg-gameTeal/5 flex items-center justify-center text-gameTeal">
                              <FolderOpen size={32} />
                           </div>
                           <h3 className="text-2xl font-black text-black">Mechanical & Civil Engineering</h3>
                        </div>
                        <p className="text-black/70 text-lg font-medium leading-relaxed max-w-xl">
                           Access the complete syllabus for Paper - I & II. Stay ahead with organized curriculum details designed for top rankers.
                        </p>
                     </div>
                     <div className="shrink-0 w-full md:w-auto">
                        <a 
                          href="https://drive.google.com/drive/folders/1ImjMD0tELIm9eaLZTUpmHy_ptgJ28Cgg?usp=sharing" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 bg-gameTeal text-white px-10 py-5 rounded-2xl font-black text-base uppercase tracking-wider hover:bg-gameTeal/90 transition-all shadow-[0_10px_30px_rgba(7,93,99,0.3)] hover:-translate-y-1 group"
                        >
                           <Download size={22} className="group-hover:animate-bounce" />
                           Download Syllabus
                        </a>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 10. ESE MEDICAL STANDARDS (Section 9) */}
      <section id="medical-standards" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight">
                     ESE Medical Standards: <span className="text-gameTeal">Eligibility and Requirements Explained</span>
                  </h2>
                  <p className="text-black/70 text-lg md:text-xl font-medium max-w-4xl leading-relaxed">
                    The <strong className="text-black">Medical Standards for ESE (Engineering Services Examination)</strong> are set by the Union Public Service Commission (UPSC) to ensure that candidates are fit to perform their duties effectively. Below is an outline of the requirements:
                  </p>
               </motion.div>
            </div>

            {/* Medical Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden mb-12">
               <div className="bg-black text-white p-6">
                  <h4 className="font-black uppercase tracking-widest text-sm flex items-center gap-3">
                     <Stethoscope size={20} className="text-gameGold" /> Key Medical Standards for ESE
                  </h4>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[900px]">
                     <thead>
                        <tr className="bg-gameTeal/5 text-black/50 text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-gameTeal/10 w-[25%]">Criteria</th>
                           <th className="p-6 w-[75%]">Details</th>
                        </tr>
                     </thead>
                     <tbody className="text-[15px] text-black/70 divide-y divide-gameTeal/5">
                        {medicalStandardsData.map((row, i) => (
                           <tr key={i} className="hover:bg-gameTeal/5 transition-colors group">
                              <td className="p-6 border-r border-gameTeal/10 font-black text-black bg-gameTeal/5">
                                 {row.criteria}
                              </td>
                              <td className="p-6 font-medium text-black/60 leading-relaxed">
                                 {row.details}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Exemptions Block */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
               <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-8 bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-sm"
               >
                  <h3 className="text-2xl font-black text-slate-900 mb-8">Exemptions and Relaxations</h3>
                  <div className="space-y-6">
                     <div className="flex gap-5 group">
                        <div className="w-10 h-10 rounded-xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shrink-0 group-hover:bg-gameTeal group-hover:text-white transition-all">
                           <Users size={20} />
                        </div>
                        <div>
                           <h4 className="font-black text-slate-900 text-base mb-1">Persons with Benchmark Disabilities (PwBD):</h4>
                           <p className="text-slate-600 text-sm leading-relaxed font-bold">
                              Eligible for specific roles in certain engineering disciplines, with detailed identification of posts suitable for candidates with disabilities (e.g., Low Vision for Electronics & Telecommunication roles).
                           </p>
                        </div>
                     </div>
                     <div className="flex gap-5 group">
                        <div className="w-10 h-10 rounded-xl bg-gameGold/10 flex items-center justify-center text-gameGold shrink-0 group-hover:bg-gameGold group-hover:text-black transition-all">
                           <HeartPulse size={20} />
                        </div>
                        <div>
                           <h4 className="font-black text-slate-900 text-base mb-1">Gender Considerations:</h4>
                           <p className="text-slate-600 text-sm leading-relaxed font-bold">
                              Standards may slightly vary for male and female candidates, particularly in weight and endurance criteria.
                           </p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4 bg-[#0f1115] text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col h-full"
               >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gameTeal/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 mb-8">
                     <Info size={32} className="text-gameGold mb-4" />
                     <p className="text-slate-300 font-medium leading-relaxed">
                        For detailed and service-specific medical standards, it is recommended to consult the official 
                        <strong className="text-white block mt-2">UPSC ESE Medical Standards Notification</strong>
                     </p>
                  </div>
                  <div className="mt-auto relative z-10 space-y-4">
                     <a 
                       href="https://upsc.gov.in/examinations/Engineering%20Services%20%28Preliminary%29%20Examination%2C%202025" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="w-full bg-gameTeal hover:bg-gameTealDark text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 transition-all shadow-xl group"
                     >
                        Official Notification <ExternalLinkIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                     </a>
                     <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Source URL</span>
                        <p className="text-[9px] text-slate-400 break-all font-mono leading-tight">https://upsc.gov.in/examinations/Engineering%20Services%20%28Preliminary%29%20Examination%2C%202025</p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 11. ESE VACANCY SECTION (Section 10) */}
      <section id="vacancy" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-12">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-8 leading-tight">
                     ESE Vacancy <span className="text-gameTeal">2026 Branch Wise</span>
                  </h2>
               </motion.div>
            </div>

            {/* Vacancy Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden max-w-3xl">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-gameTeal text-white">
                           <th className="p-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-[60%]">Disciplines</th>
                           <th className="p-6 text-sm font-black uppercase tracking-widest text-center w-[40%]">ESE-2026</th>
                        </tr>
                     </thead>
                     <tbody className="text-base text-black/70 divide-y divide-gameTeal/5">
                        {vacancyData.map((row, i) => (
                           <tr key={i} className={`hover:bg-gameTeal/5 transition-all ${row.isTotal ? 'bg-black text-white' : ''}`}>
                              <td className={`p-6 border-r ${row.isTotal ? 'border-white/10 font-black' : 'border-gameTeal/10 font-bold'}`}>
                                 {row.discipline}
                              </td>
                              <td className={`p-6 text-center font-black ${row.isTotal ? 'text-gameGold text-2xl' : 'text-gameTeal text-xl'}`}>
                                 {row.count}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* 12. ESE MECHANICAL SERVICES SECTION (Section 11) */}
      <section id="mech-services" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-12">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-tight">
                     ESE Mechanical Engineering - <br/> <span className="text-gameTeal">Departments and Services Table</span>
                  </h2>
                  <p className="text-black/70 text-lg font-medium leading-relaxed mb-10 max-w-4xl">
                     Here is a table summarizing the responsibilities for various departments under ESE Mechanical Engineering, based on the positions and roles available in the examination:
                  </p>
               </motion.div>
            </div>

            {/* Services Table */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gameTeal/10 overflow-hidden group">
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[1000px]">
                     <thead>
                        <tr className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em]">
                           <th className="p-6 border-r border-white/10 w-[8%] text-center">S. No.</th>
                           <th className="p-6 border-r border-white/10 w-[27%]">Department/Service</th>
                           <th className="p-6 w-[65%]">Responsibilities</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-black/70 divide-y divide-gameTeal/5">
                        {mechanicalServicesData.map((row, i) => (
                           <tr key={i} className="hover:bg-gameTeal/5 transition-all duration-300">
                              <td className="p-6 text-center font-black text-black/40 border-r border-gameTeal/10 bg-gameTeal/5">
                                 {row.no}
                              </td>
                              <td className="p-6 font-black text-black border-r border-gameTeal/10 group-hover:text-gameTeal transition-colors">
                                 {row.service}
                              </td>
                              <td className="p-6 leading-relaxed font-medium text-black/60 group-hover:text-black transition-colors">
                                 {row.responsibilities}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-gameTeal/5 p-8 rounded-3xl border border-gameTeal/10 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gameTeal text-white flex items-center justify-center shrink-0 shadow-lg shadow-gameTeal/20">
                     <Wrench size={24} />
                  </div>
                  <div>
                     <h4 className="font-black text-black text-lg mb-2 uppercase">Infrastructure Lead</h4>
                     <p className="text-black/60 text-sm font-bold leading-relaxed">
                        IES Mechanical officers are the backbone of railway workshops, power plants, and defense production units.
                     </p>
                  </div>
               </div>
               <div className="bg-gameTeal/5 p-8 rounded-3xl border border-gameTeal/10 flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gameGold text-black flex items-center justify-center shrink-0 shadow-lg shadow-gameGold/20">
                     <Building2 size={24} />
                  </div>
                  <div>
                     <h4 className="font-black text-black text-lg mb-2 uppercase">Administrative Power</h4>
                     <p className="text-black/60 text-sm font-bold leading-relaxed">
                        Handle policy implementation and project management in prestigious ministries like Ministry of Defence and Ministry of Jal Shakti.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 13. ELEVATE YOUR PREPARATION SECTION (Section 12) */}
      <section id="online-coaching" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gameTeal/5 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-3xl md:text-5xl font-black text-gameTeal mb-10 leading-tight text-center lg:text-left">
                     Elevate Your Preparation <br className="hidden md:block"/> with <span className="text-black">GAME's ESE Online Coaching</span>
                  </h2>
                  
                  <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                     <div className="space-y-6 text-black/70 text-lg leading-relaxed font-medium">
                        <p>
                           Aiming for a prestigious career as an <strong className="text-black">IES officer (Grade 1)</strong> can be daunting. Many candidates face challenges when it comes to selecting the right <strong className="text-gameTeal">online coaching for ESE mechanical.</strong>
                        </p>
                        <p>
                           The <strong className="text-gameTeal">best online coaching for ESE</strong> combines the expertise of top educators with innovative teaching methods, ensuring you receive quality education at an affordable price. At <strong className="text-gameTeal">GAME ESE, online coaching</strong> provides you with a well-rounded curriculum that includes practice questions, sample papers, and mock tests aimed at honing problem-solving skills.
                        </p>
                     </div>
                     <div className="space-y-6 text-black/70 text-lg leading-relaxed font-medium">
                        <p className="bg-white p-8 rounded-[2rem] border border-gameTeal/10 shadow-xl relative">
                           <Sparkle size={20} className="text-gameGold absolute top-6 right-6" />
                           This approach not only <strong className="text-black">improves speed but also enhances accuracy</strong>, which are essential factors for excelling in competitive examinations.
                           <br/><br/>
                           We are known for our commitment to providing affordable and quality education, offering <strong className="text-gameTeal">ESE online coaching</strong> that covers all aspects of the <strong className="text-Engineering Services Examination Syllabus.">Engineering Services Examination Syllabus.</strong>
                        </p>
                     </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-black mb-10 flex items-center gap-3">
                     <div className="w-10 h-10 bg-gameTeal rounded-xl flex items-center justify-center text-white shadow-lg">
                        <UserCheck size={24} />
                     </div>
                     Why Choose GAME for ESE Online Coaching?
                  </h3>
                  
                  <p className="text-black/50 font-bold mb-10 text-lg">
                     Choosing the right <strong className="text-black/70 underline decoration-gameTeal/20 decoration-4">online coaching for ESE mechanical engineering</strong> is crucial. GAME stands out as the <strong className="text-black/70 underline decoration-gameTeal/20 decoration-4">best online coaching for ESE</strong> due to its commitment to quality education. Here are some key advantages of enrolling in our ESE program:
                  </p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {onlineCoachingAdvantages.map((item, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white rounded-[2rem] p-6 border border-gameTeal/10 shadow-sm hover:shadow-2xl hover:border-gameTeal/20 transition-all duration-300 group flex flex-col h-full"
                  >
                     <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                        <item.icon size={24} strokeWidth={2.5} />
                     </div>
                     <h4 className="text-lg font-black text-black mb-3 leading-tight group-hover:text-gameTeal transition-colors">
                        {item.title}
                     </h4>
                     <p className="text-black/50 text-sm font-bold leading-relaxed flex-grow">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 14. Departments Section (Section 13) */}
      <section id="departments" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-black mb-6">Prestigious <span className="text-gameTeal">Departments</span></h2>
               <p className="text-black/70 text-lg font-medium max-w-2xl mx-auto">Successful candidates are allocated to these key government bodies based on their rank and preference.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {departments.map((dept, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-gameTeal/5 p-6 rounded-2xl border border-gameTeal/10 shadow-sm hover:shadow-xl hover:border-gameTeal/20 transition-all group flex items-center gap-4"
                  >
                     <div className="w-10 h-10 rounded-xl bg-gameTeal/10 flex items-center justify-center text-gameTeal shrink-0 group-hover:bg-gameTeal group-hover:text-white transition-colors">
                        <Building2 size={20} />
                     </div>
                     <span className="font-bold text-black/80 leading-tight">{dept}</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 15. FAQs (Section 14) */}
      <section id="faqs" className="py-24 bg-white border-t border-gameTeal/10 scroll-mt-32">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-extrabold text-black">Frequently Asked Questions</h2>
               <div className="w-20 h-1 bg-gameGold mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === i ? 'border-gameTeal shadow-md bg-white' : 'border-gameTeal/10 shadow-sm hover:border-gameTeal/30'}`}>
                     <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                        <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-gameTeal' : 'text-black/80'}`}>{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openFaqIndex === i ? 'bg-gameTeal text-white' : 'bg-gameTeal/5 text-gameTeal'}`}>
                           {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <AnimatePresence>
                        {openFaqIndex === i && (
                           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                              <div className="px-5 pb-5 pt-0 border-t border-dashed border-gameTeal/10 mt-2">
                                 <div className="pt-4 text-black/60 leading-relaxed font-medium">{faq.a}</div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 16. Final CTA */}
      <section className="py-24 bg-gameTeal text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Your Journey to <br/> IES Officer Starts Here!</h2>
            <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto font-medium">
               Join thousands of students who have secured their dreams with Gaurav Babu Sir&apos;s mentorship. Enroll in our specialized ESE course today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <button className="bg-gameGold text-black px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl hover:-translate-y-1">Enroll in Excellence Course</button>
               <button className="bg-transparent border-2 border-white/20 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">Watch Free Demo</button>
            </div>
         </div>
      </section>

    </div>
  );
};

export default EseExamPage;
