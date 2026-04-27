
'use client';

import React from 'react';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';

const AchieversTalk: React.FC = () => {
  const testimonials = [
    {
       name: "Rahul Singh",
       rank: "AIR-1 (GATE ME)",
       text: "The conceptual clarity I got from Gaurav Sir is unmatched. GAME Academy transformed my preparation.",
       img: "/images/achievers/achiever-1.png"
    },
    {
       name: "Ananya Das",
       rank: "SSC-JE Selected",
       text: "The mentorship support here is what makes the difference. They guide you at every step of the journey.",
       img: "/images/achievers/achiever-2.png"
    },
    {
       name: "Vikram Patel",
       rank: "AIR-15 (ESE)",
       text: "From basics to advanced levels, the flow of content is perfect. Highly recommended for serious aspirants.",
       img: "/images/achievers/achiever-3.png"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 text-center">
         
         <div className="mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
               Don&apos;t just take our word for it. Hear from the students who have walked the path and achieved their dreams.
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow relative text-left">
                  <div className="absolute top-6 right-8 opacity-10">
                     <Quote size={40} className="text-gameTeal" />
                  </div>
                  
                  <div className="flex gap-1 text-gameGold mb-6">
                     {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                  </div>

                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                     "{t.text}"
                  </p>

                  <div className="flex items-center gap-4">
                     <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <Image 
                           src={t.img} 
                           alt={t.name} 
                           fill
                           className="object-cover" 
                           referrerPolicy="no-referrer"
                        />
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900">{t.name}</h4>
                        <p className="text-xs font-bold text-gameTeal uppercase">{t.rank}</p>
                     </div>
                  </div>
               </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default AchieversTalk;
