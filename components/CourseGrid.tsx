
'use client';

import React from 'react';
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
      title: "Foundation Course (ME) 2025/2026",
      tagline: "Start Early, Finish Strong",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?fit=crop&w=800&q=80",
      duration: "26 Months",
      eligibility: "2nd/3rd Year",
      features: ["1200+ Hrs Content", "Weekly Tests", "1:1 Mentorship"],
      tag: "TWO-YEAR SUBSCRIPTION",
      tagColor: "bg-[#075d63] text-white",
      price: "₹35,000",
      originalPrice: "₹50,000",
      discount: "30% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "15.2k",
      liveCount: "420",
      rating: 4.9
    },
    {
      title: "Lakshya Course (ME) GATE 2025",
      tagline: "Focused & Time Bound",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?fit=crop&w=800&q=80",
      duration: "14 Months",
      eligibility: "Final Year / Droppers",
      features: ["Targeted Syllabus", "100+ Mock Exams", "Doubt Solving"],
      tag: "BEST SELLER",
      tagColor: "bg-[#f2c537] text-black",
      price: "₹24,999",
      originalPrice: "₹35,000",
      discount: "30% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "8.5k",
      liveCount: "1,150",
      rating: 4.8
    },
    {
      title: "ESE (CE) Comprehensive 2025",
      tagline: "Engineering Services Mastery",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?fit=crop&w=800&q=80",
      duration: "18 Months",
      eligibility: "Civil Aspirants",
      features: ["Tech + Non-Tech", "Mains Answer Writing", "Interview Guide"],
      tag: "PREMIUM BATCH",
      tagColor: "bg-slate-800 text-white",
      price: "₹42,000",
      originalPrice: "₹60,000",
      discount: "30% OFF",
      category: "GATE / ESE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "4.8k",
      liveCount: "210",
      rating: 5.0
    },

    // Govt R&D
    {
      title: "ISRO Scientist/Engineer (ME)",
      tagline: "Reach for the Stars",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?fit=crop&w=800&q=80",
      duration: "6 Months",
      eligibility: "BE/B.Tech",
      features: ["ISRO Syllabus", "Previous Papers", "Interview Guidance"],
      tag: "TARGET BATCH",
      tagColor: "bg-blue-900 text-white",
      price: "₹8,999",
      originalPrice: "₹15,000",
      discount: "40% OFF",
      category: "Govt R&D",
      btnColor: "bg-blue-900 hover:bg-blue-800",
      enrolledCount: "3.2k",
      liveCount: "150",
      rating: 4.7
    },
    {
      title: "BARC OCES/DGFS Prep",
      tagline: "Nuclear Science Career",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?fit=crop&w=800&q=80",
      duration: "8 Months",
      eligibility: "GATE Qualified",
      features: ["Scientific Concepts", "Research Methodology", "Interview Focus"],
      tag: "SCIENTIFIC OFFICER",
      tagColor: "bg-teal-700 text-white",
      price: "₹10,500",
      originalPrice: "₹18,000",
      discount: "42% OFF",
      category: "Govt R&D",
      btnColor: "bg-teal-700 hover:bg-teal-800",
      enrolledCount: "1.8k",
      liveCount: "95",
      rating: 4.9
    },

    // PSUs
    {
      title: "PSU Excellence Batch (ME)",
      tagline: "HPCL, ONGC, NTPC & More",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?fit=crop&w=800&q=80",
      duration: "12 Months",
      eligibility: "Graduates",
      features: ["Technical + HR", "Group Discussions", "Aptitude"],
      tag: "JOB ORIENTED",
      tagColor: "bg-orange-600 text-white",
      price: "₹14,999",
      originalPrice: "₹25,000",
      discount: "40% OFF",
      category: "PSUs",
      btnColor: "bg-orange-600 hover:bg-orange-700",
      enrolledCount: "5.5k",
      liveCount: "300",
      rating: 4.6
    },

    // SSC JE
    {
      title: "SSC-JE (EE) Selection Batch",
      tagline: "Crack Junior Engineer Exam",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbec40b?fit=crop&w=800&q=80",
      duration: "12 Months",
      eligibility: "Diploma & Degree",
      features: ["Tech + Non-Tech", "5000+ Questions", "Bilingual Classes"],
      tag: "NEW BATCH",
      tagColor: "bg-[#f2c537] text-black",
      price: "₹12,999",
      originalPrice: "₹20,000",
      discount: "35% OFF",
      category: "SSC JE",
      btnColor: "bg-[#f2c537] hover:bg-[#d8b32f] text-black",
      enrolledCount: "12.1k",
      liveCount: "850",
      rating: 4.8
    },
    {
      title: "SSC-JE (Civil) Ranker's Batch",
      tagline: "Build Your Govt Career",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?fit=crop&w=800&q=80",
      duration: "12 Months",
      eligibility: "Civil Engineers",
      features: ["RCC, Steel, Surveying", "Short Notes", "Doubt Sessions"],
      tag: "LIVE NOW",
      tagColor: "bg-emerald-600 text-white",
      price: "₹12,999",
      originalPrice: "₹20,000",
      discount: "35% OFF",
      category: "SSC JE",
      btnColor: "bg-emerald-600 hover:bg-emerald-700",
      enrolledCount: "10.5k",
      liveCount: "720",
      rating: 4.7
    },

    // RRB JE
    {
      title: "RRB-JE (ME) Express Batch",
      tagline: "Railway Recruitment Board",
      image: "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?fit=crop&w=800&q=80",
      duration: "6 Months",
      eligibility: "Fast Track Prep",
      features: ["CBT-1 & CBT-2", "General Science", "100+ Mock Tests"],
      tag: "EXPRESS",
      tagColor: "bg-[#075d63] text-white",
      price: "₹8,999",
      originalPrice: "₹15,000",
      discount: "40% OFF",
      category: "RRB JE",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "9.3k",
      liveCount: "620",
      rating: 4.5
    },

    // State AE / JE
    {
      title: "UPPSC-AE Civil Batch",
      tagline: "State Engineering Services",
      image: "https://images.unsplash.com/photo-1591955506264-3f7a27e631e9?fit=crop&w=800&q=80",
      duration: "10 Months",
      eligibility: "B.Tech Civil",
      features: ["State Specific GK", "Hindi Language", "Technical Core"],
      tag: "STATE GOVT",
      tagColor: "bg-purple-600 text-white",
      price: "₹11,999",
      originalPrice: "₹18,000",
      discount: "33% OFF",
      category: "State AE / JE",
      btnColor: "bg-purple-600 hover:bg-purple-700",
      enrolledCount: "4.1k",
      liveCount: "250",
      rating: 4.6
    },

    // Non-Tech
    {
      title: "General Studies (GS) Master",
      tagline: "For ESE & State Exams",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?fit=crop&w=800&q=80",
      duration: "6 Months",
      eligibility: "All Branches",
      features: ["Hist, Pol, Geo, Eco", "Current Affairs", "ESE Ethics & ICT"],
      tag: "NON-TECH SPECIAL",
      tagColor: "bg-slate-200 text-slate-800",
      price: "₹5,999",
      originalPrice: "₹10,000",
      discount: "40% OFF",
      category: "Non-Tech",
      btnColor: "bg-[#075d63] hover:bg-[#043f42]",
      enrolledCount: "22k",
      liveCount: "1.5k",
      rating: 4.9
    },

    // No IIT-JEE courses - inactive
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
    <section id="course-grid" className="pt-12 pb-24 relative min-h-[600px] bg-[#f8fafc]">
       
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
       
       <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>

       <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
          
          {/* CONTROL BAR */}
          <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-2.5 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6 relative z-20">
             
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
          <div className="flex items-center justify-between mb-8 ml-2">
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
          <div className="space-y-12">
             <AnimatePresence mode="wait">
               {filteredCourses.length > 0 ? (
                 <motion.div 
                   key={selectedExam + searchTerm}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="space-y-12"
                 >
                   <div className="relative group/row">
                     <div 
                        id="course-row-0"
                        className="flex items-stretch overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-8 px-2 -mx-2 thin-scrollbar"
                     >
                        {filteredCourses.map((course) => (
                          <motion.div
                            key={course.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="snap-start h-full shrink-0 w-[calc(100%-1rem)] md:w-[calc(50%-12px)] flex"
                          >
                            <div 
                              className="group relative bg-white rounded-[2rem] border-2 border-slate-100 overflow-hidden transition-all duration-700 h-full min-h-[460px] flex flex-col md:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_rgba(7,93,99,0.12)] hover:border-gameTeal/30 cursor-pointer"
                            >
                              
                              {/* LEFT SECTION: Visuals & Highlights */}
                              <div className="md:w-[40%] flex flex-col relative overflow-hidden bg-slate-50/50">
                                  {/* Image with Overlay */}
                                  <div className="relative h-44 md:h-full overflow-hidden">
                                      <img 
                                         src={course.image} 
                                         alt={course.title} 
                                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-gameTeal/80 via-gameTeal/20 to-transparent opacity-60"></div>
                                      
                                      {/* Floating Badge */}
                                      <div className="absolute top-5 left-5 z-20">
                                         <span className={`text-[10px] font-black px-3 py-2 rounded-xl shadow-2xl uppercase tracking-widest ${course.tagColor} border border-white/30 backdrop-blur-md`}>
                                            {course.tag}
                                         </span>
                                      </div>

                                      {/* Highlights Overlay on Image (Mobile) / Bottom (Desktop) */}
                                      <div className="absolute bottom-0 left-0 w-full p-6 space-y-4 bg-gradient-to-t from-slate-900/90 to-transparent md:bg-none md:relative md:from-transparent">
                                          <div className="flex items-center gap-4 group/item">
                                              <div className="w-10 h-10 rounded-2xl bg-gameTeal/10 md:bg-gameTeal/5 border border-white/20 md:border-gameTeal/10 flex items-center justify-center text-white md:text-gameTeal shrink-0 transition-all group-hover/item:bg-gameTeal group-hover/item:text-white group-hover/item:scale-110 shadow-sm">
                                                  <MessageSquare size={18} />
                                              </div>
                                              <span className="text-[11px] font-black text-white md:text-slate-700 uppercase tracking-tight">Student's feedback</span>
                                          </div>
                                          <div className="flex items-center gap-4 group/item">
                                              <div className="w-10 h-10 rounded-2xl bg-gameTeal/10 md:bg-gameTeal/5 border border-white/20 md:border-gameTeal/10 flex items-center justify-center text-white md:text-gameTeal shrink-0 transition-all group-hover/item:bg-gameTeal group-hover/item:text-white group-hover/item:scale-110 shadow-sm">
                                                  <Trophy size={18} />
                                              </div>
                                              <span className="text-[11px] font-black text-white md:text-slate-700 uppercase tracking-tight">Selection (Results)</span>
                                          </div>
                                          <div className="flex items-center gap-4 group/item">
                                              <div className="w-10 h-10 rounded-2xl bg-gameTeal/10 md:bg-gameTeal/5 border border-white/20 md:border-gameTeal/10 flex items-center justify-center text-white md:text-gameTeal shrink-0 transition-all group-hover/item:bg-gameTeal group-hover/item:text-white group-hover/item:scale-110 shadow-sm">
                                                  <PlayCircle size={18} />
                                              </div>
                                              <span className="text-[11px] font-black text-white md:text-slate-700 uppercase tracking-tight">Live & Recorded</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
  
                              {/* RIGHT SECTION: Course Details */}
                              <div className="md:w-[60%] p-6 flex flex-col bg-white flex-1 relative">
                                  {/* Decorative Element */}
                                  <div className="absolute top-0 right-0 w-24 h-24 bg-gameTeal/5 rounded-bl-[4rem] -z-0 transition-transform group-hover:scale-110 duration-700"></div>

                                  <div className="relative z-10 flex flex-col h-full">
                                      {/* Top Row */}
                                      <div className="flex justify-between items-center mb-3">
                                           <div className="px-4 py-2 rounded-2xl bg-gameTeal text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-gameTeal/30 border border-white/10">
                                              {course.category.split(' ')[0]} Branch
                                           </div>
                                           <div className="flex items-center gap-2 bg-gameGold/5 px-3 py-1.5 rounded-xl border border-gameGold/10">
                                              <div className="flex gap-0.5">
                                                 {[1,2,3].map(i => (
                                                   <Star key={i} size={12} className="text-gameGold fill-gameGold" />
                                                 ))}
                                              </div>
                                              <span className="text-[10px] font-black text-gameGold uppercase tracking-tighter">Premium</span>
                                           </div>
                                      </div>
      
                                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-[1.1] tracking-tight group-hover:text-gameTeal transition-colors duration-300">
                                         {course.title}
                                      </h3>

                                      <div className="flex flex-col gap-2 mb-4">
                                          <div className="flex items-center gap-3 bg-gameTeal/5 p-2 rounded-xl border border-gameTeal/10">
                                              <div className="w-2 h-2 rounded-full bg-gameTeal shadow-[0_0_8px_rgba(7,93,99,0.6)]"></div>
                                              <p className="text-xs font-bold text-slate-700">
                                                  <span className="text-gameTeal/60 font-black uppercase text-[9px] tracking-wider">Exam:</span> {course.category}
                                              </p>
                                          </div>
                                          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl border border-slate-100">
                                              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                                              <p className="text-xs font-bold text-slate-700">
                                                  <span className="text-slate-400 font-black uppercase text-[9px] tracking-wider">Target:</span> {course.eligibility}
                                              </p>
                                          </div>
                                      </div>
      
                                      {/* Features Grid - Bento Style */}
                                      <div className="grid grid-cols-3 gap-2 mb-5">
                                          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all hover:bg-gameTeal/5 hover:border-gameTeal/30 group/feat">
                                              <Clock size={16} className="text-gameTeal mx-auto mb-1.5 transition-transform group-hover/feat:scale-110" />
                                              <span className="text-[10px] font-black text-slate-900 block leading-tight">{course.duration}</span>
                                          </div>
                                          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all hover:bg-gameTeal/5 hover:border-gameTeal/30 group/feat">
                                              <Globe size={16} className="text-gameTeal mx-auto mb-1.5 transition-transform group-hover/feat:scale-110" />
                                              <span className="text-[10px] font-black text-slate-900 block leading-tight">Hinglish</span>
                                          </div>
                                          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all hover:bg-gameTeal/5 hover:border-gameTeal/30 group/feat">
                                              <Users size={16} className="text-gameTeal mx-auto mb-1.5 transition-transform group-hover/feat:scale-110" />
                                              <span className="text-[10px] font-black text-slate-900 block leading-tight">1:1 Mentors</span>
                                          </div>
                                      </div>

                                      {/* Includes List */}
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 mb-5">
                                          {[
                                              "1200+ hrs Content",
                                              "Test & Assignments",
                                              "24/7 Support",
                                              "Tech + Non Tech"
                                          ].map((item, i) => (
                                              <div key={i} className="flex items-center gap-3">
                                                  <div className="w-5 h-5 rounded-full bg-gameTeal/10 flex items-center justify-center shrink-0 border border-gameTeal/20">
                                                      <CheckCircle2 size={12} className="text-gameTeal" strokeWidth={3} />
                                                  </div>
                                                  <span className="text-xs font-bold text-slate-600 truncate">{item}</span>
                                              </div>
                                          ))}
                                      </div>
      
                                      {/* Bottom Action Area */}
                                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                                          <div className="flex flex-col bg-gameTeal/5 px-3 py-1.5 rounded-xl border border-gameTeal/10">
                                              <span className="text-[9px] font-black text-slate-400 line-through tracking-widest uppercase opacity-60">
                                                  {course.originalPrice}
                                              </span>
                                              <span className="text-2xl font-black text-gameTeal tracking-tighter leading-none">
                                                  {course.price}
                                              </span>
                                          </div>

                                          <button 
                                            className="flex-1 max-w-[160px] py-3.5 rounded-xl bg-gameTeal text-white font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#043f42] transition-all duration-500 flex items-center justify-center gap-2 shadow-[0_15px_30px_-5px_rgba(7,93,99,0.4)] hover:shadow-[0_25px_50px_-10px_rgba(7,93,99,0.6)] hover:-translate-y-1.5 active:translate-y-0 border border-white/10"
                                          >
                                            Enroll Now <ChevronRight size={16} strokeWidth={3} />
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
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center text-gameTeal opacity-0 group-hover/row:opacity-100 transition-opacity z-40 hover:bg-gameTeal hover:text-white"
                     >
                        <ChevronRight size={24} className="rotate-180" />
                     </button>
                     <button 
                        onClick={() => {
                           const el = document.getElementById("course-row-0");
                           if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
                        }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-xl border border-slate-200 flex items-center justify-center text-gameTeal opacity-0 group-hover/row:opacity-100 transition-opacity z-40 hover:bg-gameTeal hover:text-white"
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
