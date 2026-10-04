
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Banners are fetched on the server (app/courses/page.tsx) and passed in, so
// they are present on first paint — no late load, no layout shift. Only banners
// configured in the admin panel are shown; there are no built-in fallbacks.
const CourseMarketing: React.FC<{ banners?: string[] }> = ({ banners = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
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

  // No banners configured in the admin panel → show nothing, just keep the
  // spacing that clears the fixed navbar so the next section isn't hidden.
  if (banners.length === 0) {
    return <div className="pt-20 md:pt-24" aria-hidden />;
  }

  const safeIndex = currentIndex % banners.length;

  return (
    <section className="relative w-full bg-white overflow-hidden pt-20 md:pt-24">
      <div className="relative w-full aspect-[1400/300]">
        <AnimatePresence initial={false}>
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

        {/* Navigation Arrows — only shown when there is more than one banner */}
        {banners.length > 1 && (
          <>
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
          </>
        )}

        {/* Gradient Overlay for better integration with page (optional) */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.2)]"></div>
      </div>
    </section>
  );
};

export default CourseMarketing;
