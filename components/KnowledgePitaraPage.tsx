
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, BookOpen, Download, Video, FileText, 
  PenTool, Star, Crown, CheckCircle2, Lock, 
  ArrowRight, Sparkles, Zap, Layout, Search, Filter, GraduationCap, Clock, Award
} from 'lucide-react';

interface BaseResource {
  id: number;
  category: string;
  title: string;
  desc: string;
  icon: any;
  color: string;
}

interface FreeResource extends BaseResource {
  type: 'free';
  action: string;
}

interface PaidResource extends BaseResource {
  type: 'paid';
  price: string;
  tag: string;
}

type Resource = FreeResource | PaidResource;

const KnowledgePitaraPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'free' | 'paid'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freeResources: FreeResource[] = [
    {
      id: 1,
      type: "free",
      category: "Video Series",
      title: "Thermodynamics Basics",
      desc: "Complete conceptual clarity for beginners.",
      icon: Video,
      color: "bg-[#075d63]/10 text-[#075d63]",
      action: "Watch Now"
    },
    {
      id: 2,
      type: "free",
      category: "PDF Notes",
      title: "GATE Formula Sheet",
      desc: "All mechanical formulas in 20 pages.",
      icon: FileText,
      color: "bg-[#f2c537]/20 text-black",
      action: "Download PDF"
    },
    {
      id: 3,
      type: "free",
      category: "PYQ Bank",
      title: "SSC-JE Last 5 Years",
      desc: "Solved papers with detailed explanations.",
      icon: BookOpen,
      color: "bg-slate-100 text-slate-700",
      action: "View Papers"
    },
    {
      id: 4,
      type: "free",
      category: "Strategy",
      title: "Topper's Roadmap",
      desc: "How to crack GATE in first attempt.",
      icon: Zap,
      color: "bg-[#075d63]/10 text-[#075d63]",
      action: "Read Guide"
    }
  ];

  const paidResources: PaidResource[] = [
    {
      id: 101,
      type: "paid",
      category: "Full Course",
      title: "GATE 2025 Foundation",
      desc: "Live classes, Hardcopy Notes, 1:1 Mentorship.",
      icon: Crown,
      color: "bg-[#f2c537] text-black",
      price: "₹24,999",
      tag: "Best Seller"
    },
    {
      id: 102,
      type: "paid",
      category: "Test Series",
      title: "All India Mock Tests",
      desc: "60+ Full length tests with deep analytics.",
      icon: PenTool,
      color: "bg-[#075d63] text-white",
      price: "₹1,499",
      tag: "Exam Ready"
    },
    {
      id: 103,
      type: "paid",
      category: "Mentorship",
      title: "Personal Guidance",
      desc: "Weekly strategy calls with Ex-IES Officers.",
      icon: Star,
      color: "bg-slate-900 text-[#f2c537]",
      price: "₹4,999",
      tag: "Exclusive"
    }
  ];

  const allResources: Resource[] = [...freeResources, ...paidResources];
  
  const displayedResources: Resource[] = activeTab === 'all' 
    ? allResources 
    : activeTab === 'free' 
      ? freeResources 
      : paidResources;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Hero Banner */}
      <section className="relative pt-4 pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900 text-white">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#075d63]/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               
               {/* Left Content */}
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                     <Sparkles size={14} className="text-[#f2c537]" />
                     <span className="text-xs font-bold uppercase tracking-widest text-[#f2c537]">Premium Learning for Free</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                     Unlock Your <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#075d63] via-teal-400 to-[#f2c537]">Knowledge Vault</span>
                  </h1>
                  
                  <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
                     Access a treasure trove of high-quality engineering resources. From detailed video lectures to topper's notes—everything you need to crack the exam.
                  </p>

                  {/* Tab Switcher */}
                  <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
                     <button 
                       onClick={() => setActiveTab('all')}
                       className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'all' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                     >
                        <Layout size={16} /> All
                     </button>
                     <button 
                       onClick={() => setActiveTab('free')}
                       className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'free' ? 'bg-[#075d63] text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                     >
                        <Sparkles size={16} /> Free Zone
                     </button>
                     <button 
                       onClick={() => setActiveTab('paid')}
                       className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'paid' ? 'bg-[#f2c537] text-black shadow-md' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                     >
                        <Crown size={16} /> Premium
                     </button>
                  </div>
               </motion.div>

               {/* Right Content: 3D Stack Visual */}
               <div className="relative h-[500px] hidden lg:flex items-center justify-center perspective-1000">
                  <motion.div 
                     initial={{ scale: 0.8, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="relative z-30 bg-white rounded-[2.5rem] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 w-80"
                  >
                     <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100 h-full flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#075d63] to-teal-600 flex items-center justify-center text-white mb-4 shadow-xl shadow-[#075d63]/20">
                           <GraduationCap size={40} />
                        </div>
                        <h3 className="text-slate-900 font-extrabold text-xl mb-1">Start Learning</h3>
                        <p className="text-slate-500 text-xs font-medium mb-6">Access premium content today</p>
                        
                        <div className="w-full space-y-3">
                           <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center"><Video size={14} /></div>
                              <div className="text-left">
                                 <div className="text-[10px] font-bold text-slate-400 uppercase">Videos</div>
                                 <div className="text-xs font-bold text-slate-900">500+ Hours</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                              <div className="w-8 h-8 rounded-full bg-[#f2c537]/20 text-black flex items-center justify-center"><Download size={14} /></div>
                              <div className="text-left">
                                 <div className="text-[10px] font-bold text-slate-400 uppercase">Notes</div>
                                 <div className="text-xs font-bold text-slate-900">PDF Downloads</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>

            </div>
         </div>
      </section>

      {/* 2. Resources Grid */}
      <section className="px-8 md:px-10 lg:px-12 py-24 bg-slate-50 relative z-20 -mt-16 rounded-t-[3rem]">
         <div className="max-w-[1200px] mx-auto">
            
            {/* Grid Header */}
            <div className="flex items-center justify-between mb-8 pl-2">
               <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Filter size={20} className="text-[#075d63]" /> 
                  {activeTab === 'all' ? 'All Resources' : activeTab === 'free' ? 'Free Materials' : 'Premium Courses'}
               </h3>
               <span className="text-sm font-medium text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
                  {displayedResources.length} Items
               </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {displayedResources.map((item) => (
                  <motion.div
                     key={item.id}
                     layout
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     transition={{ duration: 0.3 }}
                     className={`group relative rounded-[2rem] p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full overflow-hidden ${
                        item.type === 'paid' 
                           ? 'bg-white border-[#f2c537]/30 shadow-lg shadow-[#f2c537]/5' 
                           : 'bg-white border-slate-200 shadow-lg shadow-slate-200/50'
                     }`}
                  >
                     {/* Top Banner for Paid */}
                     {item.type === 'paid' && (
                        <div className="absolute top-0 right-0 bg-[#f2c537] text-black text-[10px] font-black px-3 py-1 rounded-bl-xl z-10 uppercase tracking-wider">
                           Premium
                        </div>
                     )}

                     <div className="flex justify-between items-start mb-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform ${item.color}`}>
                           <item.icon size={28} />
                        </div>
                        {item.type === 'free' && (
                           <span className="bg-[#075d63]/5 text-[#075d63] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 border border-[#075d63]/10">
                              <CheckCircle2 size={10} /> Free
                           </span>
                        )}
                     </div>

                     <div className="mb-6 flex-grow">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{item.category}</div>
                        <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-[#075d63] transition-colors">{item.title}</h3>
                        <p className="text-sm font-medium text-slate-500 leading-relaxed">
                           {item.desc}
                        </p>
                     </div>

                     <div className="mt-auto pt-6 border-t border-dashed border-slate-200 flex items-center justify-between">
                        {item.type === 'paid' ? (
                           <>
                              <div className="flex flex-col">
                                 <span className="text-xs text-slate-400 font-bold line-through">₹{parseInt(item.price.replace(/[^0-9]/g, '')) * 1.5}</span>
                                 <span className="text-xl font-black text-slate-900">{item.price}</span>
                              </div>
                              <button className="bg-gameBlack text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#f2c537] hover:text-black transition-colors flex items-center gap-2 shadow-lg">
                                 Unlock <Lock size={14} />
                              </button>
                           </>
                        ) : (
                           <>
                              <span className="text-sm font-bold text-[#075d63] flex items-center gap-1"><Sparkles size={12} /> Free Access</span>
                              <button className="bg-slate-100 text-slate-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#075d63] hover:text-white transition-colors flex items-center gap-2 group/btn">
                                 {item.action} <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                              </button>
                           </>
                        )}
                     </div>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>

    </div>
  );
};

export default KnowledgePitaraPage;
