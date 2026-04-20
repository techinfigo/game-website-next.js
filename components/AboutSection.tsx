
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
           
           {/* Image Grid */}
           <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                 <div className="relative h-64 w-full">
                     <Image 
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?fit=crop&w=400&h=500&q=80" 
                        alt="Engineering Students" 
                        fill
                        className="rounded-2xl shadow-lg object-cover" 
                        referrerPolicy="no-referrer"
                     />
                  </div>
                 <div className="bg-gameTeal p-6 rounded-2xl text-white text-center">
                    <div className="text-4xl font-black mb-1">13+</div>
                    <div className="text-xs font-bold uppercase tracking-wider opacity-80">Years Experience</div>
                 </div>
              </div>
              <div className="space-y-4">
                 <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-slate-100">
                    <div className="text-4xl font-black text-gameGoldDark mb-1">100k+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Students Mentored</div>
                 </div>
                 <div className="relative h-64 w-full">
                     <Image 
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?fit=crop&w=400&h=500&q=80" 
                        alt="Classroom Learning" 
                        fill
                        className="rounded-2xl shadow-lg object-cover" 
                        referrerPolicy="no-referrer"
                     />
                  </div>
              </div>
           </div>

           {/* Content */}
           <div className="lg:w-1/2">
              <span className="text-gameTeal font-bold tracking-widest uppercase text-xs mb-2 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                 Empowering Engineers to <br/> <span className="text-gameGoldDark">Build the Future</span>
              </h2>
              
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                 GAME (Gaurav’s Academy for Mentorship & Education) is not just a coaching institute; it's a revolution in engineering education. Founded by Gaurav Babu Sir, we are dedicated to providing accessible, high-quality, and result-oriented mentorship.
              </p>

              <div className="space-y-4 mb-10">
                 {[
                    "Expert Faculty with 10+ years of experience",
                    "Concept-oriented teaching methodology",
                    "Focus on Problem Solving & Visualization",
                    "Affordable & Accessible to all"
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-6 h-6 rounded-full bg-gameTeal/10 flex items-center justify-center text-gameTeal shrink-0">
                          <CheckCircle2 size={14} strokeWidth={3} />
                       </div>
                       <span className="font-bold text-slate-700">{item}</span>
                    </div>
                 ))}
              </div>

              <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
                 More About Us <ArrowRight size={18} />
              </button>
           </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
