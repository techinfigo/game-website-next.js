
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCourseBanners, DEFAULT_COURSE_BANNERS } from '@/hooks/useCourseBanners';

const CourseMarketing: React.FC = () => {
  const { banners: fetchedBanners } = useCourseBanners();
  const banners = fetchedBanners.length > 0 ? fetchedBanners : DEFAULT_COURSE_BANNERS;
  const [currentIndex, setCurrentIndex] = useState(0);

  // The banner count can change when Firestore resolves, so keep the index in range.
  const safeIndex = currentIndex % banners.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <section className="relative w-full bg-slate-900 overflow-hidden">
      <div className="relative w-full aspect-[1.8/1] md:aspect-[2.5/1] lg:aspect-[3.5/1] max-h-[460px]">
        <AnimatePresence initial={false} custom={safeIndex}>
          <motion.img
            key={safeIndex}
            src={banners[safeIndex]}
            alt={`Offer Banner ${safeIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-y-0 left-4 flex items-center z-10">
          <button 
            onClick={prevSlide}
            className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-colors translate-y-1"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 flex items-center z-10">
          <button 
            onClick={nextSlide}
            className="bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-colors translate-y-1"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === safeIndex ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Gradient Overlay for better integration with page (optional) */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]"></div>
      </div>
    </section>
  );
};

export default CourseMarketing;
