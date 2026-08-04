
'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, Clock, CheckCircle2, Star, Filter, Users, BookOpen,
  GraduationCap, Building2, Search, LayoutGrid, X, Globe, Sparkles,
  Zap, Crown, Microscope, Briefcase, Train, MapPin, Atom, Backpack, Lock, Calendar, ChevronRight, BarChart3,
  MessageSquare, Trophy, PlayCircle, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCourses } from '@/hooks/useCourses';
import { DEFAULT_COURSES } from '@/data/defaultCourses';

interface CourseGridProps {
  selectedExam: string;
  setSelectedExam: (exam: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const CourseGrid: React.FC<CourseGridProps> = ({ selectedExam, setSelectedExam, searchTerm, setSearchTerm }) => {
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);
  const tabsRef = React.useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 300;
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
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
    { id: 'Govt R&D / PSUs', label: 'Govt R&D / PSUs', icon: Microscope },
    { id: 'RRB / State AE JE', label: 'RRB / State AE JE', icon: Train },
    { id: 'IIT-JEE / NEET', label: 'IIT-JEE / NEET', icon: Atom },
    { id: 'Non-Tech', label: 'Non-Tech', icon: BookOpen },
    { id: 'Class 9th - 12th', label: 'Class 9th - 12th', icon: Backpack },
    { id: 'Excellence Courses', label: 'Excellence Courses', icon: Award },
  ];

  const { courses } = useCourses(DEFAULT_COURSES);

  const filteredCourses = courses.filter(c => {
    const matchesCategory = selectedExam === 'All' || c.category === selectedExam;

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === "" ||
                          c.title.toLowerCase().includes(searchLower) ||
                          c.tagline.toLowerCase().includes(searchLower);

    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) =>
    catId === 'All' ? courses.length : courses.filter(c => c.category === catId).length;

  return (
    <section id="course-grid" className="pt-4 pb-12 relative min-h-[400px] bg-slate-50">
       
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
          <div className="bg-white rounded-3xl border border-slate-100 p-2 lg:p-3 mb-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 relative z-20 overflow-hidden shadow-sm">
             
             {/* Tabs Container with Scroll Indicators */}
             <div className="relative flex-1 min-w-0 w-full lg:w-auto flex items-center group/tabs">
                
                {/* Left Arrow Indicator */}
                <AnimatePresence>
                   {showLeftArrow && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-0 z-30 flex items-center"
                      >
                         <button
                           onClick={() => scrollTabs('left')}
                           className="w-10 h-10 rounded-full bg-[#075d63] shadow-lg border-2 border-white flex items-center justify-center text-white hover:bg-[#0a4d52] transition-all active:scale-90"
                         >
                            <ChevronRight size={20} className="rotate-180" strokeWidth={3} />
                         </button>
                      </motion.div>
                   )}
                </AnimatePresence>

                {/* Tabs Wrapper with Mask */}
                <div 
                   ref={tabsRef}
                   onScroll={checkScroll}
                   className={`flex overflow-x-auto thin-scrollbar w-full gap-3 px-2 py-1 items-center scroll-smooth ${showRightArrow ? 'tab-mask-right' : ''} ${showLeftArrow ? 'tab-mask-left' : ''}`}
                >
                   {categories.map((cat) => {
                      const count = getCategoryCount(cat.id);
                      const isActive = selectedExam === cat.id;
 
                      return (
                         <button
                           key={cat.id}
                           onClick={() => setSelectedExam(cat.id)}
                           className={`
                              relative flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 select-none border shrink-0 group
                              ${isActive 
                                 ? 'bg-[#075d63] text-white border-[#075d63] shadow-lg shadow-[#075d63]/20 z-10' 
                                 : 'bg-slate-200 text-slate-700 hover:bg-slate-300 hover:text-[#075d63] border-slate-300 shadow-sm transition-all'
                              }
                           `}
                         >
                            <cat.icon size={16} className={isActive ? 'text-[#f2c537]' : 'text-slate-400 transition-colors group-hover:text-[#075d63]'} />
                            {cat.label}
                            
                            <span className={`ml-1 text-[10px] px-2 py-0.5 rounded-lg font-black ${isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-500 border border-slate-200 shadow-sm transition-colors group-hover:border-[#075d63]/20'}`}>
                               {count}
                            </span>
                         </button>
                      );
                   })}
                </div>

                {/* Right Arrow Indicator */}
                <AnimatePresence>
                   {showRightArrow && (
                      <motion.div 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="absolute right-0 z-30 flex items-center"
                      >
                         <button
                           onClick={() => scrollTabs('right')}
                           className="w-10 h-10 rounded-full bg-[#075d63] shadow-lg border-2 border-white flex items-center justify-center text-white hover:bg-[#0a4d52] transition-all active:scale-90"
                         >
                            <ChevronRight size={20} strokeWidth={3} />
                         </button>
                      </motion.div>
                   )}
                </AnimatePresence>
             </div>

             {/* Search */}
             <div className="relative w-full lg:w-80 group shrink-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#075d63] transition-colors" size={18} />
                <input 
                   type="text" 
                   placeholder="Search courses..." 
                   className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-2.5 pl-11 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#075d63] focus:ring-4 focus:ring-[#075d63]/10 transition-all shadow-inner"
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
                                          <a 
                                            href={course.enrollLink || "https://courses.gameacademy.in"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-1.5 rounded-xl bg-[#075d63] text-white font-black text-[9px] uppercase tracking-[0.15em] hover:bg-[#f2c537] hover:text-black transition-all duration-500 flex items-center justify-center gap-2 border border-gameTeal/10 decoration-none text-center"
                                          >
                                            Enroll Now <ChevronRight size={12} strokeWidth={3} />
                                          </a>
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
