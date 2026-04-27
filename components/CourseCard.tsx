
'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Star, Clock, Globe, Users, BookOpen, Layout, Headphones, ShieldCheck, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title?: string;
  branch?: string;
  rating?: number;
  targetExam?: string;
  targetAudience?: string;
  duration?: string;
  language?: string;
  mentorship?: string;
  originalPrice?: string;
  offeredPrice?: string;
  image?: string;
  highlights?: string[];
  includes?: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({
  title = "Lakshya Course",
  branch = "Mechanical Engineering",
  rating = 5,
  targetExam = "Target Exam: GATE, ESE & PSUs 2025",
  targetAudience = "Target Audience: 3rd, 4th Year & Passout Students",
  duration = "6 mo",
  language = "Hinglish",
  mentorship = "1:1 mentorship",
  originalPrice = "Rs. 2000/-",
  offeredPrice = "Rs. 999/-",
  image = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fit=crop&w=800&h=450&q=80",
  highlights = [
    "Student's feedback: 4.9/5 Average",
    "Selection: 5000+ Results in 2023",
    "Live & Rec.: 100% Syllabus Coverage"
  ],
  includes = [
    "1200+ hrs Content (Live + Rec.)",
    "Test & Assignments",
    "24/7 Support",
    "(Tech + Non Tech) Covered"
  ]
}) => {
  return (
    <div className="group relative bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-gameTeal/10 hover:scale-[1.01] transition-all duration-500 cursor-pointer max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Section: Visuals & Highlights */}
        <div className="lg:w-[40%] p-8 bg-slate-50/50 flex flex-col">
          <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden mb-8 shadow-lg">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
               <span className="text-white font-bold flex items-center gap-2">
                  Preview Course <ArrowRight size={18} />
               </span>
            </div>
          </div>

          <div className="space-y-5">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-gameTeal/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={14} className="text-gameTeal" />
                </div>
                <p className="text-slate-700 font-semibold text-sm leading-tight">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Course Details */}
        <div className="lg:w-[60%] p-8 md:p-10 flex flex-col">
          {/* Top Row */}
          <div className="flex justify-between items-center mb-6">
            <span className="px-4 py-1.5 bg-gameTeal/10 text-gameTeal text-[10px] font-black uppercase tracking-widest rounded-full border border-gameTeal/20">
              {branch}
            </span>
            <div className="flex gap-0.5 text-gameGold">
              {[...Array(3)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
          </div>

          {/* Title & Subheadings */}
          <div className="mb-8">
            <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-gameTeal transition-colors">
              {title}
            </h2>
            <div className="space-y-1">
              <p className="text-slate-500 text-sm font-bold flex items-center gap-2">
                <Layout size={14} className="text-slate-400" /> {targetExam}
              </p>
              <p className="text-slate-500 text-sm font-bold flex items-center gap-2">
                <Users size={14} className="text-slate-400" /> {targetAudience}
              </p>
            </div>
          </div>

          {/* Features Row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col items-center text-center shadow-sm group-hover:border-gameTeal/20 transition-colors">
              <Clock size={20} className="text-gameTeal mb-2" />
              <span className="text-xs font-black text-slate-900">{duration}</span>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col items-center text-center shadow-sm group-hover:border-gameTeal/20 transition-colors">
              <Globe size={20} className="text-gameTeal mb-2" />
              <span className="text-xs font-black text-slate-900">{language}</span>
            </div>
            <div className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col items-center text-center shadow-sm group-hover:border-gameTeal/20 transition-colors">
              <Headphones size={20} className="text-gameTeal mb-2" />
              <span className="text-xs font-black text-slate-900">{mentorship}</span>
            </div>
          </div>

          {/* Includes List */}
          <div className="mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Course Includes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {includes.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-gameTeal flex-shrink-0" />
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-gameTeal hover:shadow-lg hover:shadow-gameTeal/20 transition-all duration-300 flex items-center justify-center gap-3">
              View More <ArrowRight size={18} />
            </button>
            
            <div className="text-center sm:text-right">
              <p className="text-slate-400 text-sm font-bold line-through mb-1">{originalPrice}</p>
              <div className="flex items-baseline gap-2 justify-center sm:justify-end">
                <span className="text-3xl font-black text-gameTeal">{offeredPrice}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Limited Offer</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseCard;
