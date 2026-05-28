'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clock, Compass } from 'lucide-react';
import { EXAM_PAGES_DISABLED_MESSAGE } from './examconfig';

export default function ComingSoonModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [examName, setExamName] = useState('');

  useEffect(() => {
    const handleShowComingSoon = (e: Event) => {
      const customEvent = e as CustomEvent<{ examName: string }>;
      if (customEvent.detail && customEvent.detail.examName) {
        setExamName(customEvent.detail.examName);
      } else {
        setExamName('Examination Page');
      }
      setIsOpen(true);
    };

    window.addEventListener('show-coming-soon', handleShowComingSoon);
    return () => {
      window.removeEventListener('show-coming-soon', handleShowComingSoon);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            id="coming-soon-backdrop"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-8 z-10 flex flex-col items-center text-center"
            id="coming-soon-card"
          >
            {/* Design Ribbon Accent */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#075d63] to-[#f2c537]" />

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-colors"
              id="coming-soon-close-btn"
            >
              <X size={20} />
            </button>

            {/* Glowing Icon Container */}
            <div className="relative mb-6 mt-2">
              <div className="absolute inset-0 bg-[#075d63]/10 rounded-full blur-xl scale-125" />
              <div className="relative w-16 h-16 bg-gradient-to-tr from-[#075d63] to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#075d63]/20">
                <Compass size={32} className="animate-spin-slow" />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#f2c537] rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <Sparkles size={10} className="text-black" />
              </div>
            </div>

            {/* Header / Meta */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/5 border border-[#075d63]/10 rounded-full mb-3">
              <Clock size={12} className="text-[#075d63]" />
              <span className="text-[10px] font-black text-[#075d63] uppercase tracking-wider">UPGRADING SECTION</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
              {examName} Page is Landing Soon!
            </h3>

            {/* Message Description */}
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 px-2 font-medium">
              {EXAM_PAGES_DISABLED_MESSAGE}
            </p>

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2.5">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#075d63] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#043c40] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#075d63]/15"
                id="coming-soon-btn-ok"
              >
                Understood, Got It
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
