'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Clock, ArrowLeft, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { EXAM_PAGES_DISABLED, DISABLED_EXAMPAGES_IDS, EXAM_PAGES_DISABLED_MESSAGE } from './examconfig';

interface ExamPagesGuardProps {
  children: React.ReactNode;
}

export default function ExamPagesGuard({ children }: ExamPagesGuardProps) {
  const pathname = usePathname();
  
  // Extract the first segment of the path (e.g. "gate" from "/gate" or "/gate/anything")
  const pathSegment = pathname?.split('/').filter(Boolean)[0];

  const isExamPageDisabled = 
    EXAM_PAGES_DISABLED && 
    pathSegment && 
    DISABLED_EXAMPAGES_IDS.includes(pathSegment);

  if (isExamPageDisabled) {
    // Get the name of the exam for display
    const examNamesMap: Record<string, string> = {
      gate: 'GATE (Graduate Aptitude Test in Engineering)',
      ese: 'ESE (Engineering Services Exam)',
      psu: 'PSUs / R&D Jobs',
      ssc: 'SSC JE (Junior Engineer)',
      rrb: 'RRB JE (Railway Recruitment Board)',
      state: 'State AE/JE',
      iit: 'IIT-JEE / NEET Foundation',
      nontech: 'GS Mastery (Non-Tech)',
      school: '9th - 12th School Foundation'
    };
    
    const currentExamName = examNamesMap[pathSegment] || "Examination Series";

    return (
      <div className="min-h-[85vh] flex items-center justify-center bg-slate-50 py-16 px-6 relative overflow-hidden" id="exam-guard-container">
        {/* Subtle decorative background circles */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#075d63]/5 pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#075d63]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#f2c537]/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 z-10 flex flex-col items-center text-center"
          id="exam-guard-card"
        >
          {/* Accent strip on top */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#075d63] to-[#f2c537]" />

          {/* Compass Icon */}
          <div className="relative mb-8 mt-2" id="exam-guard-icon-container">
            <div className="absolute inset-0 bg-[#075d63]/10 rounded-full blur-xl scale-125" />
            <div className="relative w-20 h-20 bg-gradient-to-tr from-[#075d63] to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#075d63]/20">
              <Compass size={40} className="animate-spin" style={{ animationDuration: '30s' }} />
            </div>
            <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#f2c537] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Sparkles size={14} className="text-black" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#075d63]/5 border border-[#075d63]/10 rounded-full mb-6">
            <Clock size={13} className="text-[#075d63]" />
            <span className="text-[11px] font-black text-[#075d63] uppercase tracking-widest">SECTION UPGRADE IN PROGRESS</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-3 tracking-tight leading-tight">
            {currentExamName}
          </h1>

          <h2 className="text-base md:text-lg font-bold text-[#075d63] mb-6">
            Prepping new study materials, syllabus trackers and features!
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 max-w-lg font-medium">
            {EXAM_PAGES_DISABLED_MESSAGE}
          </p>

          {/* Feature highlights to build anticipation */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
            <div className="flex gap-3">
              <span className="text-[#f2c537] font-bold text-lg select-none">✦</span>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1">Visual Study Planners</h4>
                <p className="text-[11px] text-slate-500 font-mediumLeading leading-relaxed">Organized timelines mapping syllabus topics directly with past exams.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[#f2c537] font-bold text-lg select-none">✦</span>
              <div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1">Concept Cheat Sheets</h4>
                <p className="text-[11px] text-slate-500 font-mediumLeading leading-relaxed">Bite-sized PDFs designed by Gaurav Babu Sir to make tough concepts painless.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 bg-[#075d63] text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#043c40] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#075d63]/15"
              id="exam-guard-home-btn"
            >
              <ArrowLeft size={14} strokeWidth={2.5} /> Back to Home
            </Link>
            <Link 
              href="/courses"
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
              id="exam-guard-courses-btn"
            >
              Explore Launched Courses <GraduationCap size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
