'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Trophy, ArrowRight } from 'lucide-react';

const AcingExamsSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#075d63] py-9 overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 border border-white/10 mb-4">
              <Sparkles size={14} className="text-[#f2c537]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f2c537]">
                Expert Guidance, Proven Results!
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
              Ready to ace your <br />
              <span className="text-[#f2c537]">Government Exams?</span>
            </h2>

            <p className="text-lg font-bold text-white mb-2">
              With GAME - Your Shortcut to acing exams & launching a stellar Career.
            </p>

            <p className="text-teal-50/80 text-sm mb-6 max-w-lg leading-relaxed">
              Expert-Led Courses tailored to elevate your skills, master core concepts & dominate Exams.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-[#075d63] px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 hover:bg-teal-50 transition-all shadow-xl">
                View Offers <ArrowRight size={16} />
              </button>
              <button className="border-2 border-white/20 text-white px-6 py-3 rounded-xl font-black text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
                <Trophy size={16} /> Top Rankers
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[32px] border-[10px] border-white shadow-2xl overflow-hidden group">
              <Image 
                src="/course-mentor-spotlight.png"
                unoptimized 
                alt="Gaurav Babu Sir" 
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <div className="inline-block bg-[#f2c537] text-black text-[10px] font-black px-3 py-1 rounded-md mb-4 w-fit uppercase tracking-wider">
                  Founder & Mentor
                </div>
                <h3 className="text-3xl font-black text-white mb-1">Gaurav Babu Sir</h3>
                <p className="text-white/80 text-sm font-medium">
                  11+ Years Experience • Ex-IES Officer
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#f2c537]/20 blur-3xl rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 blur-3xl rounded-full -z-10"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AcingExamsSection;
