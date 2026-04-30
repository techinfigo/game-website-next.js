import React from 'react';
// Force rebuild to clear runtime chunk errors
import Hero from '@/components/Hero';
import FeaturedExams from '@/components/FeaturedExams';
import ReasonsSection from '@/components/ReasonsSection';
import EnrollmentOptions from '@/components/EnrollmentOptions';
import FAQSection from '@/components/FAQSection';
import WinnerChoiceSection from '@/components/WinnerChoiceSection';
import SpecialOffer from '@/components/SpecialOffer';
import FreeStudyMaterial from '@/components/FreeStudyMaterial';
import AchieversSection from '@/components/AchieversSection';
import YouMustRead from '@/components/YouMustRead';
import JobUpdatesSection from '@/components/JobUpdatesSection';
import CourseHero from '@/components/CourseHero';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WinnerChoiceSection />
      <SpecialOffer />
      <FeaturedExams />
      <CourseHero isSection={true} />
      <ReasonsSection />
      <FreeStudyMaterial />
      <AchieversSection />
      <EnrollmentOptions />
      <YouMustRead />
      <JobUpdatesSection />
      <FAQSection />
    </div>
  );
}
