
'use client';

import React from 'react';
import ExamPageLayout from './ExamPageLayout';
import { Microscope, MapPin, Atom, BookOpen, Backpack, Briefcase, Building2, Globe, Rocket, Star, Zap, Calendar, Trophy } from 'lucide-react';

export const PsuExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Secure a Job in Top PSUs & Research Orgs",
        subtitle: "Public Sector & R&D",
        description: "Join the elite workforce of India. Prepare for Maharatna, Navratna, Miniratna PSUs and premier research institutes like ISRO, DRDO & BARC.",
        bgGradient: "bg-gradient-to-br from-[#0f172a] to-[#1e293b]",
        icon: Briefcase,
        iconColor: "text-emerald-400"
      }}
      overview={{
        title: "PSUs & Research",
        highlight: "Careers",
        content: (
          <>
            <p>Public Sector Undertakings (PSUs) and Research Organizations offer some of the most stable, high-paying, and prestigious jobs in India for engineers.</p>
            <p>While many recruit through GATE, several organizations like ISRO, DRDO, BARC, and separate state PSUs conduct their own examinations.</p>
          </>
        ),
        stats: [
          { label: "Organisations", value: "200+" },
          { label: "Vacancies/Yr", value: "10k+" },
          { label: "Avg Package", value: "12-20 LPA" },
          { label: "Job Security", value: "100%" }
        ]
      }}
      features={[
        { title: "Maharatna PSUs", desc: "NTPC, ONGC, SAIL, BHEL, IOCL, HPCL, GAIL etc.", icon: Building2, color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Research & Development", desc: "Scientist/Engineer roles in ISRO, DRDO, BARC, CSIR.", icon: Microscope, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Separate Exams", desc: "Guidance for exams conducted independently (HAL, HPCL, BEL).", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" }
      ]}
      faqs={[
        { q: "Do all PSUs recruit through GATE?", a: "No. While many top PSUs use GATE scores, organizations like ISRO, DRDO, BARC, HPCL, BEL, and HAL often conduct their own written tests and interviews." },
        { q: "What is the age limit for PSUs?", a: "It varies. Generally, 21-28 years for General category, with relaxations for reserved categories. Some PSUs allow up to 30 years." }
      ]}
    />
  );
};

export const StateAeJeExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Serve Your State as an Engineer",
        subtitle: "State AE / JE Services",
        description: "State Public Service Commissions (PSCs) regularly recruit Assistant Engineers (AE) and Junior Engineers (JE). Secure a gazetted or non-gazetted post in your home state.",
        bgGradient: "bg-gradient-to-br from-[#064e3b] to-[#065f46]",
        icon: MapPin,
        iconColor: "text-emerald-400"
      }}
      overview={{
        title: "State",
        highlight: "Engineering Exams",
        content: (
          <>
            <p>Every state in India has its own Public Service Commission (like UPPSC, BPSC, MPSC, TNPSC) and other bodies that conduct exams for engineering posts in departments like PWD, Irrigation, and Rural Development.</p>
            <p>These exams are ideal for students who wish to work closer to home while enjoying the benefits of a government job.</p>
          </>
        ),
        stats: [
          { label: "States", value: "28+" },
          { label: "Exams/Yr", value: "50+" },
          { label: "Role", value: "AE / JE" },
          { label: "Language", value: "Regional" }
        ]
      }}
      features={[
        { title: "Home State Posting", desc: "Work in your own state with familiar culture and language.", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
        { title: "Less Competition", desc: "Competition is often lower compared to national level exams like GATE/ESE.", icon: Star, color: "text-yellow-600", bg: "bg-yellow-50" },
        { title: "Regular Recruitment", desc: "Multiple departments release notifications throughout the year.", icon: Calendar, color: "text-blue-600", bg: "bg-blue-50" }
      ]}
      faqs={[
        { q: "What is the difference between AE and JE?", a: "AE (Assistant Engineer) is a Group-A/B Gazetted post requiring B.Tech. JE (Junior Engineer) is a Group-C post requiring Diploma/B.Tech." },
        { q: "Is local language knowledge mandatory?", a: "For many state exams, knowledge of the state's official language is required or tested." }
      ]}
    />
  );
};

export const IitNeetExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Foundation for Engineering & Medical",
        subtitle: "IIT-JEE & NEET",
        description: "Start your journey to India's premier institutes like IITs and AIIMS. Comprehensive foundation courses for 11th and 12th grade students.",
        bgGradient: "bg-gradient-to-br from-[#4c1d95] to-[#5b21b6]",
        icon: Atom,
        iconColor: "text-purple-400"
      }}
      overview={{
        title: "Entrance",
        highlight: "Exams",
        content: (
          <>
            <p>IIT-JEE (Joint Entrance Examination) and NEET (National Eligibility cum Entrance Test) are the gateways to undergraduate engineering and medical courses in India.</p>
            <p>GAME Academy provides a strong conceptual foundation in Physics, Chemistry, Mathematics, and Biology to help students crack these highly competitive exams.</p>
          </>
        ),
        stats: [
          { label: "IITs/NITs", value: "100+" },
          { label: "Medical Clgs", value: "600+" },
          { label: "Aspirants", value: "25L+" },
          { label: "Success", value: "High" }
        ]
      }}
      features={[
        { title: "Conceptual Clarity", desc: "Deep understanding of PCM/PCB fundamentals.", icon: BookOpen, color: "text-purple-600", bg: "bg-purple-50" },
        { title: "Problem Solving", desc: "Advanced techniques for complex numericals.", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Mock Tests", desc: "All India level test series to gauge performance.", icon: Trophy, color: "text-blue-600", bg: "bg-blue-50" }
      ]}
      faqs={[
        { q: "When should I start preparing?", a: "Ideal time is from Class 11th, but many students start foundation courses from Class 9th or 10th." },
        { q: "Do you cover Boards syllabus?", a: "Yes, our courses are integrated to cover both Board exams (CBSE/ICSE) and competitive entrance exams." }
      ]}
    />
  );
};

export const NonTechExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Master General Studies & Aptitude",
        subtitle: "Non-Technical Exams",
        description: "Ace the Non-Tech portion of ESE, SSC, RRB, and Banking exams. Comprehensive coverage of Reasoning, Aptitude, History, Polity, and Current Affairs.",
        bgGradient: "bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]",
        icon: Globe,
        iconColor: "text-blue-400"
      }}
      overview={{
        title: "General",
        highlight: "Studies",
        content: (
          <>
            <p>Non-Technical subjects play a crucial role in almost every government exam. For ESE, it's a separate paper. For SSC-JE and RRB, it forms a significant weightage.</p>
            <p>Our Non-Tech courses are designed by specialists to help engineering students master subjects like History, Geography, Polity, Economy, and General Science efficiently.</p>
          </>
        ),
        stats: [
          { label: "Coverage", value: "100%" },
          { label: "Subjects", value: "10+" },
          { label: "Faculty", value: "Expert" },
          { label: "Relevance", value: "All Exams" }
        ]
      }}
      features={[
        { title: "Aptitude & Reasoning", desc: "Shortcuts and tricks for speed and accuracy.", icon: Zap, color: "text-yellow-600", bg: "bg-yellow-50" },
        { title: "General Awareness", desc: "Static GK and Current Affairs updated daily.", icon: Globe, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Exam Specific", desc: "Tailored content for ESE GS vs SSC GS.", icon: Star, color: "text-indigo-600", bg: "bg-indigo-50" }
      ]}
      faqs={[
        { q: "Is this course useful for Banking/CGL?", a: "Yes, the Aptitude, Reasoning, and GS portions are common across Banking, SSC CGL, and Engineering exams." },
        { q: "Do you provide current affairs?", a: "Yes, we provide monthly current affairs magazines and daily updates." }
      ]}
    />
  );
};

export const SchoolExamPage: React.FC = () => {
  return (
    <ExamPageLayout
      hero={{
        title: "Strong Foundation for Future Leaders",
        subtitle: "Class 9th - 12th",
        description: "Building strong fundamentals for school exams and setting the stage for future competitive success in Engineering and Medicine.",
        bgGradient: "bg-gradient-to-br from-[#be123c] to-[#9f1239]",
        icon: Backpack,
        iconColor: "text-rose-400"
      }}
      overview={{
        title: "School",
        highlight: "Foundation",
        content: (
          <>
            <p>The journey to cracking IIT-JEE, NEET, or UPSC begins early. Our Foundation courses for Class 9th to 12th focus on deep conceptual clarity.</p>
            <p>We ensure students excel in their School/Board exams while slowly introducing them to the rigors of competitive problem solving.</p>
          </>
        ),
        stats: [
          { label: "Grades", value: "9-12" },
          { label: "Boards", value: "CBSE/ICSE" },
          { label: "Focus", value: "STEM" },
          { label: "Results", value: "100%" }
        ]
      }}
      features={[
        { title: "Board Excellence", desc: "Complete syllabus coverage for Class 10th & 12th Boards.", icon: BookOpen, color: "text-rose-600", bg: "bg-rose-50" },
        { title: "Olympiad Prep", desc: "Preparation for NTSE, KVPY, and Olympiads.", icon: Trophy, color: "text-amber-600", bg: "bg-amber-50" },
        { title: "Future Ready", desc: "Early start for JEE/NEET aspirants.", icon: Rocket, color: "text-blue-600", bg: "bg-blue-50" }
      ]}
      faqs={[
        { q: "Which boards do you cover?", a: "We primarily focus on CBSE syllabus which aligns well with competitive exams, but concepts are universal for ICSE and State Boards." },
        { q: "Are classes live or recorded?", a: "We offer both Live interactive batches and self-paced recorded courses." }
      ]}
    />
  );
};
