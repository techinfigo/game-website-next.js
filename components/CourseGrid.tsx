
'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, Clock, CheckCircle2, Star, Filter, Users, BookOpen, 
  GraduationCap, Building2, Search, LayoutGrid, X, Globe, Sparkles, 
  Zap, Crown, Microscope, Briefcase, Train, MapPin, Atom, Backpack, Lock, Calendar, ChevronRight, BarChart3,
  MessageSquare, Trophy, PlayCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseGridProps {
  selectedExam: string;
  setSelectedExam: (exam: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CourseGrid: React.FC<CourseGridProps> = ({ selectedExam, setSelectedExam, searchTerm, setSearchTerm }) => {
  
  // Helper to calculate discount percentage
  const calculateDiscount = (price: string, originalPrice: string) => {
    const p = parseInt(price.replace(/[^\d]/g, ''));
    const op = parseInt(originalPrice.replace(/[^\d]/g, ''));
    if (isNaN(p) || isNaN(op) || op <= 0) return "SAVE";
    const disc = Math.round(((op - p) / op) * 100);
    return `${disc}% OFF`;
  };
  
  // Updated Category Order: SSC JE moved next to GATE / ESE
  const categories = [
    { id: 'All', label: 'All Courses', icon: LayoutGrid },
    { id: 'GATE / ESE', label: 'GATE / ESE', icon: GraduationCap },
    { id: 'SSC JE', label: 'SSC JE', icon: Building2 }, 
    { id: 'Govt R&D', label: 'Govt R&D', icon: Microscope },
    { id: 'PSUs', label: 'PSUs', icon: Briefcase },
    { id: 'RRB JE', label: 'RRB JE', icon: Train },
    { id: 'State AE / JE', label: 'State AE / JE', icon: MapPin },
    { id: 'IIT-JEE / NEET', label: 'IIT-JEE / NEET', icon: Atom },
    { id: 'Non-Tech', label: 'Non-Tech', icon: BookOpen },
    { id: 'Class 9th - 12th', label: 'Class 9th - 12th', icon: Backpack },
  ];

  const allCourses = [
    // GATE / ESE Category
    {
      title: "Lakshya Basic (ME) 2027",
      tagline: "Comprehensive Foundation for GATE & PSUs",
      image: "/courses/lakshya_basic_me_2027.png",
      duration: "12 Months",
      eligibility: "Final year / PSUs job seekers",
      features: [
        "24/7 Access to Recorded Sessions",
        "Topic-wise Assignments with solutions",
        "No Cost EMIs available",
        "Effective Study Plan by Gaurav Babu sir"
      ],
      tag: "BASIC BATCH",
      tagColor: "bg-[#075d63] text-white",
      price: "Rs. 6,999",
      originalPrice: "Rs. 13,999",
      discount: "50% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "11.2k",
      liveCount: "350",
      rating: 4.8,
      branch: "Mechanical",
      exam: "GATE / ESE / PSUs / ISRO / BARC",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "Lakshya Advance (ME) 2027",
      tagline: "Advance Practice & Concept Building",
      image: "/courses/lakshya_advance_me_2027.png",
      duration: "12 Months",
      eligibility: "Final Year / Droppers",
      features: [
        "Live & Recorded Classes",
        "Topic-wise Tests + Assignments",
        "2000+ practice questions",
        "24/7 Doubt Support"
      ],
      tag: "ADVANCE BATCH",
      tagColor: "bg-[#f2c537] text-black",
      price: "Rs. 11,999",
      originalPrice: "Rs. 23,999",
      discount: "50% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "8.5k",
      liveCount: "1,150",
      rating: 4.9,
      branch: "Mechanical",
      exam: "GATE / ESE / PSUs / ISRO / BARC",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Lakshya (ME) - Exclusive Mentorship Program",
      tagline: "1:1 Live Guided Mentorship & Learning",
      image: "/courses/lakshya_me_exclusive.png",
      duration: "15-30 Months",
      eligibility: "2nd/3rd Year",
      features: [
        "Complete Tech. + Non Tech. Coverage",
        "Live + Recorded Lectures",
        "Test + Assignments",
        "24/7 Doubt Support Group"
      ],
      tag: "EXCLUSIVE MENTORSHIP",
      tagColor: "bg-slate-800 text-white",
      price: "Rs. 14,999",
      originalPrice: "Rs. 29,999",
      discount: "50% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "5.4k",
      liveCount: "410",
      rating: 5.0,
      branch: "Mechanical",
      exam: "GATE / ESE / PSUs / ISRO / BARC / AE & JE",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Foundation Course (ME) 2027/2028",
      tagline: "Complete Two-Year Mastery Program",
      image: "/courses/foundation_me_2027_2028.png",
      duration: "24 Months",
      eligibility: "2nd/3rd Year",
      features: [
        "Live & Recorded Classes",
        "Topic-wise Tests & Assignments",
        "24/7 Doubt Support Group",
        "No Cost EMIs available"
      ],
      tag: "FOUNDATION BATCH",
      tagColor: "bg-[#075d63] text-white",
      price: "Rs. 14,999",
      originalPrice: "Rs. 29,999",
      discount: "50% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "15.2k",
      liveCount: "420",
      rating: 4.9,
      branch: "Mechanical",
      exam: "GATE / ESE / PSUs / ISRO / BARC",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Lakshya Pro - Selection Guarantee Course",
      tagline: "Guaranteed Selection or Full Refund Support",
      image: "/courses/lakshya_pro.png",
      duration: "12 Months",
      eligibility: "GATE, ESE & PSUs Aspirants",
      features: [
        "Live and recorded depth content",
        "Customise course planner for GATE",
        "Quality Question practice",
        "Guaranteed selection in GATE 2027"
      ],
      tag: "GUARANTEED SELECT",
      tagColor: "bg-[#f2c537] text-black",
      price: "Rs. 14,999",
      originalPrice: "Rs. 29,999",
      discount: "50% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "4.2k",
      liveCount: "280",
      rating: 4.9,
      branch: "Mechanical",
      exam: "GATE, ESE, PSUs",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Lakshya Course (CE)",
      tagline: "Complete Civil Engineering Specialization",
      image: "/courses/lakshya_ce.png",
      duration: "12 Months",
      eligibility: "B.Tech 1st to Final year",
      features: [
        "24/7 Recorded Sessions",
        "70+ Marks Covered",
        "Topic-wise Tests & Assignments",
        "Previous Year Questions Access"
      ],
      tag: "LAKSHYA CIVIL",
      tagColor: "bg-[#075d63] text-white",
      price: "Rs. 6,999",
      originalPrice: "Rs. 13,999",
      discount: "50% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "7.8k",
      liveCount: "135",
      rating: 4.8,
      branch: "Civil",
      exam: "GATE, PSUs",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Aadhaaram Course",
      tagline: "Basic Engineering Foundation for Semesters & Exams",
      image: "/courses/aadhaaram.png",
      duration: "12 Months",
      eligibility: "1st year to final year",
      features: [
        "Live + Recorded Sessions",
        "Topic-wise Assignments + Tests",
        "FREE General Aptitude Course",
        "24x7 Academic Support & Guidance"
      ],
      tag: "AADHAARAM BATCH",
      tagColor: "bg-emerald-600 text-white",
      price: "Rs. 999",
      originalPrice: "Rs. 3,999",
      discount: "75% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "16.5k",
      liveCount: "680",
      rating: 4.7,
      branch: "Multi-Branch",
      exam: "Semester Exams, GATE, PSUs",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "Aarambh Course - Combo (Thermal + SOM)",
      tagline: "Target Mechanical Combo Special",
      image: "/courses/aarambh_thermal_som.png",
      duration: "12 Months",
      eligibility: "B,Tech. 1st, 2nd year",
      features: [
        "Full Depth Recorded & Updated Lectures",
        "High-Quality Lecture Notes",
        "Topic-wise Test + Assignments",
        "Smart Tips to Avoid Silly Mistakes"
      ],
      tag: "COMBO BATCH",
      tagColor: "bg-orange-600 text-white",
      price: "Rs. 4,999",
      originalPrice: "Rs. 11,999",
      discount: "58% OFF",
      category: "PSUs", // Will display under PSUs filters nicely
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "3.5k",
      liveCount: "90",
      rating: 4.6,
      branch: "Mechanical",
      exam: "GATE/ ESE/PSUs / College semesters",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "Aarambh Course - Combo (EM + Maths)",
      tagline: "Solid Foundation in Mechanics & Maths",
      image: "/courses/aarambh_em_maths.png",
      duration: "6 Months",
      eligibility: "B,Tech. 1st, 2nd year",
      features: [
        "Full Depth Recorded & Updated Lectures",
        "High-Quality Lecture Notes",
        "Topic-wise Test + Assignments",
        "Tips & Tricks For Silly Mistakes"
      ],
      tag: "COMBO BATCH",
      tagColor: "bg-orange-600 text-white",
      price: "Rs. 4,009",
      originalPrice: "Rs. 8,009",
      discount: "50% OFF",
      category: "PSUs",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "2.9k",
      liveCount: "110",
      rating: 4.7,
      branch: "Mechanical",
      exam: "GATE/ ESE/PSUs / College semesters",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Aarambh Course - Combo (Surveying + SOM)",
      tagline: "Solid Foundation in Civil Surveying & SOM",
      image: "/courses/aarambh_surveying_som.png",
      duration: "6 Months",
      eligibility: "B,Tech. 1st, 2nd year",
      features: [
        "Full Depth Recorded & Updated Lectures",
        "High-Quality Lecture Notes",
        "Topic-wise Test + Assignments",
        "Tips & Tricks For Silly Mistakes"
      ],
      tag: "COMBO BATCH",
      tagColor: "bg-orange-600 text-white",
      price: "Rs. 4,009",
      originalPrice: "Rs. 8,009",
      discount: "50% OFF",
      category: "PSUs",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "1.8k",
      liveCount: "45",
      rating: 4.5,
      branch: "Civil",
      exam: "GATE/ ESE/PSUs / College semesters",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Quick Practice Course | GATE 2027",
      tagline: "Most Expected Questions Mock & Hacks",
      image: "/courses/quick_practice_gate_2027.png",
      duration: "6 Months",
      eligibility: "GATE Aspirants",
      features: [
        "Most Expected Questions",
        "Practice questions",
        "5 Time-Bound Mock Tests",
        "Important tips and tricks to save time"
      ],
      tag: "PRACTICE BATCH",
      tagColor: "bg-purple-600 text-white",
      price: "Rs. 321",
      originalPrice: "Rs. 800",
      discount: "60% OFF",
      category: "Govt R&D", // Placing under Govt R&D
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "6.3k",
      liveCount: "320",
      rating: 4.8,
      branch: "Mechanical",
      exam: "GATE",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "GATE - XE (B+E) Full Course",
      tagline: "Engineering Science Fluid Mechanics & Thermodynamics",
      image: "/courses/gate_xe_be.png",
      duration: "12 Months",
      eligibility: "B.Tech 3rd year & 4th year",
      features: [
        "Cover XE - (A + B + E)",
        "24/7 recorded access",
        "Assignments + Tests",
        "24/7 Doubt Solving Support"
      ],
      tag: "XE SPECIAL",
      tagColor: "bg-[#075d63] text-white",
      price: "Rs. 4,999",
      originalPrice: "Rs. 13,999",
      discount: "64% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "1.2k",
      liveCount: "35",
      rating: 4.9,
      branch: "Engineering Science",
      exam: "GATE - XE",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "GATE - XE (D+E) Full Course",
      tagline: "Engineering Science Solid Mechanics & Thermodynamics",
      image: "/courses/gate_xe_de.png",
      duration: "12 Months",
      eligibility: "B.Tech 3rd year & 4th year",
      features: [
        "Cover XE - (A + D + E)",
        "24/7 recorded access",
        "Assignments + Tests",
        "24/7 Doubt Support"
      ],
      tag: "XE SPECIAL",
      tagColor: "bg-[#075d63] text-white",
      price: "Rs. 4,999",
      originalPrice: "Rs. 13,999",
      discount: "64% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "0.9k",
      liveCount: "25",
      rating: 4.8,
      branch: "Engineering Science",
      exam: "GATE - XE",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "GATE - XE (B+D) Full Course",
      tagline: "Engineering Science Fluid Mechanics & Solid Mechanics",
      image: "/courses/gate_xe_bd.png",
      duration: "12 Months",
      eligibility: "B.Tech 3rd year & 4th year",
      features: [
        "Cover XE - (A + B + D)",
        "24/7 recorded access",
        "Assignments + Tests",
        "24/7 Academic Support & Guidance"
      ],
      tag: "XE SPECIAL",
      tagColor: "bg-[#075d63] text-white",
      price: "Rs. 4,999",
      originalPrice: "Rs. 13,999",
      discount: "64% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "1.1k",
      liveCount: "40",
      rating: 4.9,
      branch: "Engineering Science",
      exam: "GATE - XE",
      language: "Hinglish",
      mentorship: "No"
    },
    {
      title: "Vijeta Test Series (ME) 2027",
      tagline: "Premium High Quality Tests for ME",
      image: "/courses/vijeta_ts_me.png",
      duration: "12 Months",
      eligibility: "GATE/PSUs Aspirants",
      features: [
        "150+ Topic-Wise Tests",
        "10+ Subject-Wise Tests",
        "15+ Full-Length Tests",
        "Detailed Solutions with Explanations"
      ],
      tag: "TEST SERIES",
      tagColor: "bg-slate-700 text-white",
      price: "Rs. 480",
      originalPrice: "Rs. 1,600",
      discount: "70% OFF",
      category: "GATE / ESE",
      btnColor: "bg-slate-700 hover:bg-slate-800 text-white",
      enrolledCount: "9.2k",
      liveCount: "180",
      rating: 4.9,
      branch: "Mechanical",
      exam: "GATE, ESE, PSUs",
      language: "English",
      mentorship: "No"
    },

    // SSC JE Category
    {
      title: "Excellence Course (ME)",
      tagline: "Junior Engineer Special Batch",
      image: "/courses/excellence_me.png",
      duration: "12 Months",
      eligibility: "Diploma Final Year",
      features: [
        "Live + Recorded Sessions",
        "Tech. + Non-Tech. Coverage",
        "Topic-wise Tests & Assignments",
        "24/7 Doubt Solving Support"
      ],
      tag: "EXCELLENCE BATCH",
      tagColor: "bg-[#f2c537] text-black",
      price: "Rs. 6,999",
      originalPrice: "Rs. 13,999",
      discount: "50% OFF",
      category: "SSC JE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "12.1k",
      liveCount: "850",
      rating: 4.8,
      branch: "Mechanical",
      exam: "SSC-JE, RRB-JE, State AE-JE",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Excellence Course (CE)",
      tagline: "Junior Engineer Civil Comprehensive Batch",
      image: "/courses/excellence_ce.png",
      duration: "12 Months",
      eligibility: "Diploma Final Year",
      features: [
        "Live + Recorded Sessions",
        "Tech. + Non-Tech. Coverage",
        "Topic-wise Tests & Assignments",
        "24/7 Doubt Solving Support"
      ],
      tag: "EXCELLENCE BATCH",
      tagColor: "bg-[#f2c537] text-black",
      price: "Rs. 6,999",
      originalPrice: "Rs. 13,999",
      discount: "50% OFF",
      category: "SSC JE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "10.5k",
      liveCount: "720",
      rating: 4.7,
      branch: "Civil",
      exam: "SSC-JE, RRB-JE, State AE-JE",
      language: "Hinglish",
      mentorship: "Yes"
    },
    {
      title: "Vijeta Test Series (ME) 2027 (SSC-JE)",
      tagline: "Specialised Tests for Junior Engineer ME",
      image: "/courses/vijeta_ts_me_sscje.png",
      duration: "12 months",
      eligibility: "SSC-JE & All State AE-JE Aspirants",
      features: [
        "Tech. + Non Tech. Coverage",
        "135+ Topic-Wise Tests",
        "15+ Subject-Wise Tests",
        "20+ Full-Length Tests"
      ],
      tag: "TEST SERIES",
      tagColor: "bg-[#f2c537] text-black",
      price: "Rs. 288",
      originalPrice: "Rs. 600",
      discount: "52% OFF",
      category: "SSC JE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "4.5k",
      liveCount: "190",
      rating: 4.8,
      branch: "Mechanical",
      exam: "SSC-JE, RRB-JE, State AE-JE",
      language: "English",
      mentorship: "No"
    },
    {
      title: "Vijeta Test Series (CE) 2027 (SSC-JE)",
      tagline: "Specialised Tests for Junior Engineer CE",
      image: "/courses/vijeta_ts_ce_sscje.png",
      duration: "12 Months",
      eligibility: "SSC-JE & All State AE-JE Aspirants",
      features: [
        "Tech. + Non Tech. Coverage",
        "185+ Topic-Wise Tests",
        "15+ Subject-Wise Tests",
        "40+ Full-Length Tests"
      ],
      tag: "TEST SERIES",
      tagColor: "bg-[#f2c537] text-black",
      price: "Rs. 500",
      originalPrice: "Rs. 1,000",
      discount: "50% OFF",
      category: "State AE / JE", // Placing in State AE / JE category tab
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "5.1k",
      liveCount: "220",
      rating: 4.8,
      branch: "Civil",
      exam: "SSC-JE, RRB-JE, State AE-JE",
      language: "English",
      mentorship: "No"
    },

    // Non-Tech Category
    {
      title: "Beyond Boundaries: GS Mastery Course",
      tagline: "Master General Studies for ESE, SSC, RRB & PSUs",
      image: "/courses/beyond_boundaries_gs.png",
      duration: "12 Months",
      eligibility: "All Prep Aspirants (ME, CE, EE, CS)",
      features: [
        "Recorded Video Lectures",
        "Doubt Resolution Support",
        "Regular Tests & Assignments",
        "Top Educators from Across India"
      ],
      tag: "GS MASTERY BATCH",
      tagColor: "bg-slate-800 text-white",
      price: "Rs. 699",
      originalPrice: "Rs. 2,000",
      discount: "65% OFF",
      category: "Non-Tech",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "22k",
      liveCount: "1.5k",
      rating: 4.9,
      branch: "ME/CE/EE/CS",
      exam: "SSC, RRB, ESE & PSUs Exams",
      language: "Hinglish",
      mentorship: "Yes"
    }
  ];

  const filteredCourses = allCourses.filter(c => {
    const matchesCategory = selectedExam === 'All' || c.category === selectedExam;
    
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === "" || 
                          c.title.toLowerCase().includes(searchLower) || 
                          c.tagline.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) => 
    catId === 'All' ? allCourses.length : allCourses.filter(c => c.category === catId).length;

  return (
    <section id="course-grid" className="pt-4 pb-8 relative min-h-[400px] bg-slate-400">
       
       <style>{`
          .thin-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .thin-scrollbar::-webkit-scrollbar-track {
            background: transparent; 
          }
          .thin-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
            border: 2px solid transparent;
            background-clip: content-box;
          }
          .thin-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8;
            border: 0px solid transparent;
          }
       `}</style>

       {/* Custom Institute Pattern Background (Graduation Caps) */}
       <div 
         className="absolute inset-0 opacity-[0.05] pointer-events-none"
         style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10 L35 16 L20 22 L5 16 Z M8 17 V23 L20 28 L32 23 V17' stroke='%23075d63' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
         }}
       ></div>
       
       <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-14 relative z-10">
          
          {/* CONTROL BAR */}
          <div className="bg-white rounded-2xl border border-slate-100 p-2.5 mb-4 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-20">
             
             {/* Tabs */}
             <div className="flex overflow-x-auto thin-scrollbar w-full lg:w-auto gap-4 pb-6 lg:pb-0 items-center">
                {categories.map((cat) => {
                   const count = getCategoryCount(cat.id);
                   const isActive = selectedExam === cat.id;
                   const isDisabled = count === 0;

                   return (
                      <button
                        key={cat.id}
                        onClick={() => !isDisabled && setSelectedExam(cat.id)}
                        disabled={isDisabled}
                        className={`
                           relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold whitespace-nowrap transition-colors duration-200 select-none border
                           ${isActive 
                              ? 'bg-[#075d63] text-white border-[#075d63]' 
                              : isDisabled
                                 ? 'bg-slate-50 text-slate-400 cursor-not-allowed border-slate-200 opacity-60'
                                 : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-[#075d63] border-slate-200'
                           }
                        `}
                      >
                         <cat.icon size={15} className={isActive ? 'text-[#f2c537]' : isDisabled ? 'opacity-50' : 'text-slate-400'} />
                         {cat.label}
                         
                         {!isDisabled && (
                            <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
                               {count}
                            </span>
                         )}

                         {isDisabled && (
                            <span className="ml-1 text-[9px] uppercase tracking-wider bg-slate-200/50 text-slate-400 px-1.5 py-0.5 rounded border border-slate-200/50 font-bold">
                               Soon
                            </span>
                         )}
                      </button>
                   );
                })}
             </div>

             {/* Search */}
             <div className="relative w-full lg:w-72 group shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#075d63] transition-colors" size={18} />
                <input 
                   type="text" 
                   placeholder="Search courses..." 
                   className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-2.5 pl-10 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#075d63] focus:ring-4 focus:ring-[#075d63]/5 transition-all"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
          </div>

          {/* Heading */}
          <div className="flex items-center justify-between mb-4 ml-2">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#075d63]/10 flex items-center justify-center text-[#075d63]">
                   <LayoutGrid size={20} />
                </div>
                <div>
                   <h3 className="text-2xl font-extrabold text-slate-900 leading-none">
                      {selectedExam} Batches
                   </h3>
                   <p className="text-xs font-bold text-slate-500 mt-1">
                      {filteredCourses.length} Premium Courses Available
                   </p>
                </div>
             </div>
          </div>
          
          {/* Courses Slidable Row */}
          <div className="space-y-6">
             <AnimatePresence mode="wait">
               {filteredCourses.length > 0 ? (
                 <motion.div 
                   key={selectedExam + searchTerm}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="space-y-6"
                 >
                   <div className="relative group/row">
                     <div 
                        id="course-row-0"
                        className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-4 px-2 -mx-2 thin-scrollbar"
                     >
                        {filteredCourses.map((course) => (
                          <motion.div
                            key={course.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="snap-start h-full shrink-0 w-[calc(100%-1rem)] md:w-[calc(50%-12px)] flex"
                          >
                            <div className="group relative bg-white rounded-[2.5rem] border-2 border-slate-200/60 overflow-hidden transition-all duration-700 w-full h-full flex flex-col md:flex-row items-stretch ring-1 ring-slate-900/5 hover:border-gameTeal/30 cursor-pointer">
                              {/* LEFT SECTION: Visuals & Highlights */}
                               <div className="w-full md:w-1/2 flex flex-col relative overflow-hidden bg-gray-200 border-b md:border-b-0 md:border-r border-slate-200 min-h-[240px] md:min-h-[400px]">
                                  {/* Image with Overlay */}
                                  <div className="absolute inset-0 overflow-hidden">
                                      <Image 
                                         src={course.image} 
                                         alt={course.title} 
                                         fill
                                         unoptimized
                                         className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                                         referrerPolicy="no-referrer"
                                      />
                                      
                                      {/* Floating Badge removed as requested */}



                                      {/* Bottom Action Area (Slim & Refined) */}
                                      <div className="absolute bottom-4 left-5 z-20">
                                          <div className="flex items-center gap-3.5 bg-slate-950/80 backdrop-blur-xl px-4.5 py-2.5 rounded-[1.4rem] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] group/price transition-all duration-500 hover:bg-black hover:border-white/20">
                                              <div className="flex flex-col">
                                                  <span className="text-xl md:text-2xl font-[1000] text-white tracking-tighter leading-none">
                                                      {course.price}
                                                  </span>
                                                  <span className="text-[8px] font-black text-white/30 line-through tracking-wider uppercase mt-1">
                                                      {course.originalPrice}
                                                  </span>
                                              </div>
                                              
                                              <div className="w-[1px] h-6 bg-white/10"></div>
                                              
                                              <div className="flex items-center gap-1 bg-gameGold px-2.5 py-1.5 rounded-lg shadow-[0_4px_12px_rgba(242,197,55,0.25)] shrink-0">
                                                  <Sparkles size={8} className="text-black" />
                                                  <span className="text-[9px] font-[1000] text-black uppercase tracking-wide">
                                                      {calculateDiscount(course.price, course.originalPrice)}
                                                  </span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              {/* RIGHT SECTION: Course Details */}
                              <div className="w-full md:w-1/2 p-4 md:p-5 flex flex-col bg-white relative">
                                  {/* Section divider hint */}
                                  <div className="hidden md:block absolute -left-1 text-slate-100 z-10 font-black text-[60px] pointer-events-none opacity-20">/</div>
                                  
                                  <div className="relative z-10 flex flex-col h-full">
                                      {/* Top Row */}
                                      <div className="flex justify-between items-center mb-1.5">
                                           <div className="px-3 py-1.5 rounded-xl bg-gameTeal text-white text-[9px] font-black uppercase tracking-[0.2em] border border-white/10">
                                              {course.branch || 'Mechanical'} Branch
                                           </div>
                                           <div className="flex items-center gap-1.5 bg-gameGold/15 px-2 py-1 rounded-xl border border-gameGold/30">
                                              <div className="flex gap-0.5">
                                                 {[1,2,3].map(i => (
                                                   <Star key={i} size={10} className="text-gameGoldDark fill-gameGoldDark" />
                                                 ))}
                                              </div>
                                              <span className="text-[9px] font-black text-gameGoldDark uppercase tracking-tighter">Premium</span>
                                           </div>
                                      </div>
      
                                      <h3 className="text-md md:text-lg font-black text-slate-900 py-3 leading-[1.1] tracking-tight group-hover:text-gameTeal transition-colors duration-300 line-clamp-2">
                                         {course.title}
                                      </h3>

                                      <div className="flex flex-col gap-1 mb-2">
                                          <div className="flex items-center gap-2.5 bg-gameTeal/5 p-1.5 rounded-xl border border-gameTeal/10">
                                              <div className="w-1.5 h-1.5 rounded-full bg-gameTeal"></div>
                                              <p className="text-[11px] font-bold text-slate-700">
                                                  <span className="text-gameTeal/60 font-black uppercase text-[8px] tracking-wider">Exam:</span> {course.exam || course.category}
                                              </p>
                                          </div>
                                          <div className="flex items-center gap-2.5 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                                              <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                                              <p className="text-[11px] font-bold text-slate-700">
                                                  <span className="text-slate-400 font-black uppercase text-[8px] tracking-wider">Target:</span> {course.eligibility}
                                              </p>
                                          </div>
                                      </div>
      
                                      {/* Features Grid - Bento Style */}
                                      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
                                          <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all hover:bg-gameTeal/5 hover:border-gameTeal/30 group/feat">
                                              <Clock size={14} className="text-gameTeal mx-auto mb-1 transition-transform group-hover/feat:scale-110" />
                                              <span className="text-[9px] font-black text-slate-900 block leading-tight">{course.duration}</span>
                                          </div>
                                          <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all hover:bg-gameTeal/5 hover:border-gameTeal/30 group/feat">
                                              <Globe size={14} className="text-gameTeal mx-auto mb-1 transition-transform group-hover/feat:scale-110" />
                                              <span className="text-[9px] font-black text-slate-900 block leading-tight">{course.language || 'Hinglish'}</span>
                                          </div>
                                          <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all hover:bg-gameTeal/5 hover:border-gameTeal/30 group/feat">
                                              <Users size={14} className="text-gameTeal mx-auto mb-1 transition-transform group-hover/feat:scale-110" />
                                              <span className="text-[9px] font-black text-slate-900 block leading-tight">{course.mentorship === 'Yes' ? '1:1 Mentors' : 'Self Study'}</span>
                                          </div>
                                      </div>

                                      {/* Includes List - Aligned vertically in 1 column */}
                                      <div className="flex flex-col gap-1.5 mb-3 bg-slate-50/50 p-2.5 rounded-2xl border border-slate-100">
                                          {(course.features || []).map((item, i) => (
                                              <div key={i} className="flex items-center gap-2">
                                                  <div className="w-5 h-5 rounded-lg bg-gameTeal/10 flex items-center justify-center shrink-0 border border-gameTeal/20">
                                                      <CheckCircle2 size={12} className="text-gameTeal" strokeWidth={3} />
                                                  </div>
                                                  <span className="text-xs font-bold text-slate-700 leading-tight">{item}</span>
                                              </div>
                                          ))}
                                      </div>
      
                                      {/* Action Button */}
                                      <div className="mt-auto pt-2">
                                          <button 
                                            className="w-full py-1.5 rounded-xl bg-[#075d63] text-white font-black text-[9px] uppercase tracking-[0.15em] hover:bg-[#f2c537] hover:text-black transition-all duration-500 flex items-center justify-center gap-2 border border-gameTeal/10"
                                          >
                                            Enroll Now <ChevronRight size={12} strokeWidth={3} />
                                          </button>
                                      </div>
                                  </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                     </div>

                     {/* Navigation Arrows */}
                     <button 
                        onClick={() => {
                           const el = document.getElementById("course-row-0");
                           if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
                        }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gameTeal opacity-0 group-hover/row:opacity-100 transition-opacity z-40 hover:bg-gameTeal hover:text-white"
                     >
                        <ChevronRight size={24} className="rotate-180" />
                     </button>
                     <button 
                        onClick={() => {
                           const el = document.getElementById("course-row-0");
                           if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-gameTeal opacity-0 group-hover/row:opacity-100 transition-opacity z-40 hover:bg-gameTeal hover:text-white"
                     >
                        <ChevronRight size={24} />
                     </button>
                   </div>
                 </motion.div>

               ) : (
                 <motion.div 
                   key="empty"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="col-span-full py-32 text-center bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200 relative overflow-hidden"
                 >
                    <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                    <div className="relative z-10">
                       <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                          <Filter size={32} className="text-slate-300" />
                       </div>
                       <h3 className="text-xl font-bold text-slate-900 mb-2">No batches found</h3>
                       <p className="text-slate-500 max-w-md mx-auto mb-6 text-sm">
                          We couldn't find any courses in <strong>{selectedExam}</strong> matching your search.
                       </p>
                       <button 
                          onClick={() => {
                              setSearchTerm('');
                              setSelectedExam('GATE / ESE');
                          }}
                          className="text-[#075d63] font-bold hover:underline flex items-center justify-center gap-1 mx-auto"
                       >
                          Clear Filters <X size={14} />
                       </button>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
       </div>

    </section>
  );
};

export default CourseGrid;
