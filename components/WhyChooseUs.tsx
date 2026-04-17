
'use client';

import React from 'react';
import { Share2, Presentation, Flag, BookOpen, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: "Comprehensive Resources",
      desc: "Get access to free tests, lectures, and more.",
      icon: Share2, 
    },
    {
      title: "Expert Educators",
      desc: "Learn from industry-leading experts.",
      icon: Presentation,
    },
    {
      title: "Proven Success",
      desc: "Successfully helped thousands of students to achieve their professional goals",
      icon: Flag,
    },
    {
      title: "Flexible Learning",
      desc: "Study at your own pace with easy access to materials",
      icon: BookOpen,
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16">
           
           {/* Left: Title with Composite Icon */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-5"
           >
              <div className="relative">
                 <BookOpen className="text-slate-900" size={56} strokeWidth={1.5} />
                 {/* Floating Lightbulb */}
                 <motion.div 
                   animate={{ rotate: [0, 10, 0] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -top-4 -right-3 bg-[#f2c537] rounded-full p-1.5 border-4 border-white shadow-sm"
                 >
                    <Lightbulb size={20} className="text-white fill-white" />
                 </motion.div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#075d63] tracking-tight">Why Choose Us ?</h2>
           </motion.div>

           {/* Right: Trusted Text */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="md:max-w-xs text-left"
           >
              <p className="text-slate-900 font-bold text-lg leading-snug">
                 Trusted by <span className="text-[#075d63]">25,000+ happy students</span>, who are joining us to achieve their goals.
              </p>
           </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
           {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-default"
              >
                 {/* Icon Box */}
                 <div className="w-20 h-20 rounded-2xl bg-[#075d63] flex items-center justify-center text-white mb-6 shadow-xl shadow-[#075d63]/20 group-hover:scale-110 group-hover:bg-[#054a4f] transition-all duration-300">
                    <feature.icon size={36} strokeWidth={1.5} />
                 </div>
                 
                 {/* Text Content */}
                 <h3 className="text-xl font-extrabold text-[#075d63] mb-3 group-hover:text-slate-900 transition-colors">
                    {feature.title}
                 </h3>
                 <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-[250px]">
                    {feature.desc}
                 </p>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
