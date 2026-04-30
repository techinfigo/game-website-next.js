
'use client';

import React, { useState } from 'react';
import CourseHero from './CourseHero';
import AcingExamsSection from './AcingExamsSection';
import CourseGrid from './CourseGrid';
import ReasonsSection from './ReasonsSection';
import ResultsSlider from './ResultsSlider';
import FacultyShowcase from './FacultyShowcase';
import SpecialOffer from './SpecialOffer';
import GBVideos from './GBVideos';
import ReferEarn from './ReferEarn';
import FAQCourse from './FAQCourse';
import TestimonialsText from './TestimonialsText';
import CourseHelpSection from './CourseHelpSection';
import FinalCTA from './FinalCTA';
import CourseMarketing from './CourseMarketing';

const CoursesPage: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-slate-400 font-sans text-slate-900">
      
      {/* 1. CourseMarketing (The main Hero/Banner section) */}
      <CourseMarketing />
      
      {/* 1.5 Acing Exams Section (Mentor Introduction) */}
      <AcingExamsSection />
      
      {/* 2. CourseGrid (The list of batches/courses with filters) */}
      <CourseGrid 
        selectedExam={selectedExam} 
        setSelectedExam={setSelectedExam}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* 3. TestimonialsText (Success stories carousel) */}
      <TestimonialsText />

      {/* 4. CourseHelpSection (Features explaining "How do these courses help you?") */}
      <CourseHelpSection />

      {/* 5. CourseHero (Masterclass slider & Request Callback) */}
      <CourseHero />

      {/* 6. ResultsSlider (Hall of Fame/Rankers marquee) */}
      <ResultsSlider />

      {/* 7. SpecialOffer (Limited Time Offer banner) */}
      <SpecialOffer />

      {/* 8. ReasonsSection (The "7 Reasons" circular infographic) */}
      <ReasonsSection />

      {/* 9. FacultyShowcase (Faculty introduction section) */}
      <FacultyShowcase />

      {/* 10. GBVideos (Video Masterclass/Strategy videos) */}
      <GBVideos />

      {/* 12. ReferEarn (Referral program section) */}
      <ReferEarn />

      {/* 13. FAQCourse (Course-specific FAQs) */}
      <FAQCourse />

      {/* 14. FinalCTA (Bottom "Start Your Journey" call to action) */}
      <FinalCTA />
    </div>
  );
};

export default CoursesPage;
