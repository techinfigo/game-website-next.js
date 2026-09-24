import React from 'react';
import dynamic from 'next/dynamic';
// Force rebuild to clear runtime chunk errors
import Hero from '@/components/Hero';
import WinnerChoiceSection from '@/components/WinnerChoiceSection';

// Below-fold sections: split into their own chunks so they don't block the
// hero's JS. Still server-rendered, so content and SEO are unchanged.
const SpecialOffer = dynamic(() => import('@/components/SpecialOffer'));
const FeaturedExams = dynamic(() => import('@/components/FeaturedExams'));
const CourseHero = dynamic(() => import('@/components/CourseHero'));
const ReasonsSection = dynamic(() => import('@/components/ReasonsSection'));
const FreeStudyMaterial = dynamic(() => import('@/components/FreeStudyMaterial'));
const AchieversSection = dynamic(() => import('@/components/AchieversSection'));
const EnrollmentOptions = dynamic(() => import('@/components/EnrollmentOptions'));
const YouMustRead = dynamic(() => import('@/components/YouMustRead'));
const JobUpdatesSection = dynamic(() => import('@/components/JobUpdatesSection'));
const FAQSection = dynamic(() => import('@/components/FAQSection'));

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
