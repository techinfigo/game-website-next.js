// Shared content types for admin-editable exam pages.
// Pure types only (no imports) so this file is safe to import from both
// server code (lib/examContent.ts) and client components (exam page views).

export interface HeroSlideContent {
  badge?: string;
  title?: string;
  buttonText?: string;
  imageUrl?: string;
  bgColor?: string;
}

export interface DateRowContent {
  event?: string;
  date?: string;
}

export interface FaqContent {
  q?: string;
  a?: string;
}

export interface BenefitContent {
  title?: string;
  desc?: string;
  points?: string[];
}

export interface AdvantageContent {
  title?: string;
  desc?: string;
  image?: string;
}

export interface RankerContent {
  name?: string;
  rank?: string;
  image?: string;
  videoId?: string;
}

export interface ExamPageContent {
  hero?: HeroSlideContent[];
  importantDates?: DateRowContent[];
  faqs?: FaqContent[];
  courseBenefits?: BenefitContent[];
  advantages?: AdvantageContent[];
  rankers?: RankerContent[];
}
