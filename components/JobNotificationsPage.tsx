'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Bell, Sparkles, Send, Briefcase, 
  Clock, ClipboardList, BellRing, Settings2, Headphones,
  Info, Search, Filter, Lock, ExternalLink as ExternalLinkIcon, Calendar,
  Building2, ChevronRight, GraduationCap, Trophy,
  Zap, CheckCircle2, Plus, Minus, HelpCircle, FileText
} from 'lucide-react';
import FeaturedExams from './FeaturedExams';

import { useRouter } from 'next/navigation';
import { useJobs } from '@/hooks/useJobs';
import { useSiteSettings } from '@/hooks/useSiteSettings';

interface JobNotificationsPageProps {
  isLoggedIn: boolean;
  openLogin: (view?: 'login' | 'register') => void;
  onNavigate?: (page: string) => void;
}

// ==============================================================
// 🌟 EASY IMAGES CUSTOMIZATION 🌟
// Change any of the paths below to update the avatars on the page!
// You can use a local path (like "/avatar-1.png") or any web link.
// ==============================================================
const AVATAR_IMAGES = [
  '/avatar-1.png', // Avatar 1
  '/avatar-2.png', // Avatar 2
  '/avatar-3.png', // Avatar 3
  '/avatar-4.png', // Avatar 4
];

const HeaderAvatar = ({ index }: { index: number }) => {
  const [error, setError] = useState(false);
  const fallbacks = [
    { letter: 'A', bg: 'from-amber-400 to-orange-500' },
    { letter: 'S', bg: 'from-teal-400 to-[#075d63]' },
    { letter: 'K', bg: 'from-blue-400 to-indigo-600' },
    { letter: 'P', bg: 'from-fuchsia-400 to-pink-600' },
  ];
  const item = fallbacks[(index - 1) % fallbacks.length];
  const avatarSrc = AVATAR_IMAGES[(index - 1) % AVATAR_IMAGES.length];

  return (
    <div className="relative w-10 h-10 rounded-full border-2 border-[#075d63] bg-slate-200 overflow-hidden shadow-lg flex items-center justify-center shrink-0">
      {!error && avatarSrc ? (
        <Image 
          src={avatarSrc} 
          alt={`User Avatar ${index}`} 
          fill
          unoptimized
          className="object-cover" 
          referrerPolicy="no-referrer"
          onError={() => setError(true)}
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${item.bg} text-white flex items-center justify-center text-xs font-black`}>
          {item.letter}
        </div>
      )}
    </div>
  );
};

const JobNotificationsPage: React.FC<JobNotificationsPageProps> = ({ isLoggedIn, openLogin, onNavigate }) => {
  const settings = useSiteSettings();
  const router = useRouter();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Closed'>('All');
  const { jobs } = useJobs();

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      router.push(`/${page}`);
    }
  };

  const findItems = [
    { title: "Timely Notifications", icon: Clock, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" },
    { title: "Detailed Information", icon: ClipboardList, color: "text-gameGoldDark", glow: "shadow-gameGold/20", bg: "bg-amber-50" },
    { title: "Exam Alerts", icon: BellRing, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" },
    { title: "Customized Listings", icon: Settings2, color: "text-gameGoldDark", glow: "shadow-gameGold/20", bg: "bg-amber-50" },
    { title: "Comprehensive Support", icon: Headphones, color: "text-gameTeal", glow: "shadow-gameTeal/20", bg: "bg-teal-50" }
  ];



  // Client-side search and status filter engine for seamless lookups
  const filteredJobs = jobs.filter(job => {
    const sQuery = searchQuery.trim().toLowerCase();
    const matchesSearch = !sQuery || 
      job.notification.toLowerCase().includes(sQuery) || 
      job.eligibility.toLowerCase().includes(sQuery) ||
      job.branches.some(b => b.toLowerCase().includes(sQuery));
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const categories = [
    { name: "GATE", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50", desc: "Graduate Aptitude Test in Engineering" },
    { name: "SSC-JE", icon: Building2, color: "text-amber-600", bg: "bg-amber-50", desc: "Staff Selection Commission Junior Engineer" },
    { name: "ESE", icon: Trophy, color: "text-emerald-600", bg: "bg-emerald-50", desc: "Engineering Services Examination" }
  ];

  const faqs = [
    {
      q: "How to Stay Updated About latest govt jobs exams Notifications with GAME Academy?",
      a: (
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Subscribe:</strong> Sign up for free alerts to catch mechanical engineering latest govt jobs and more.</li>
          <li><strong>Bookmark:</strong> Keep our page handy to check regular updates.</li>
          <li><strong>Preparation Support:</strong> Join GAME Academy expert training programs to ace competitive exams.</li>
        </ul>
      )
    },
    {
      q: "What job categories are listed on GAME Academy's job notification?",
      a: "We list government and private sector opportunities, including roles for civil and mechanical engineers, along with exam schedules and preparation materials."
    },
    {
      q: "How frequently does GAME Academy update job notifications?",
      a: "We update job listings daily to ensure you never miss the latest openings."
    },
    {
      q: "How can GAME Academy help with exam preparation?",
      a: "We offer targeted courses that prepare you for competitive exams like GATE, ESE, SSC-JE, PSU, with live sessions and practice tests."
    },
    {
      q: "How can I get personalized support for mechanical and civil engineering latest govt jobs?",
      a: "Our team offers one-on-one assistance, from job applications to interview prep, ensuring you’re ready for every opportunity."
    },
    {
      q: "Why should I choose GAME Academy?",
      a: (
        <div className="space-y-4">
          <p>We combine expertise, innovative tools, and tailored support to ensure you succeed in securing the best engineering jobs.</p>
          <p>Gaurav Babu Sir is not just an educator; he is a mentor and a visionary leader in the field of competitive exam preparation. Over the past 12 years, he has guided and inspired lakhs of students, helping them achieve excellence in their studies and secure high-paying jobs in esteemed organizations. His mentorship has produced thousands of successful results, shaping countless careers and setting a gold standard in education.</p>
          <p>Under the guidance of Gaurav Babu Sir, we at GAME Academy offer a comprehensive course designed to meet diverse preparation needs, whether for GATE, ESE, PSUs, AE & JE exams and competitive exams or to crack any interview. Personalized guidance, combined with structured learning, ensures that every student is equipped to excel in their preparation journey and emerge as a top performer.</p>
        </div>
      )
    },
    {
      q: "Various PSUs, AE-JE Exams that are exclusively for Diploma holders only / What other exams can I give after completing my Diploma?",
      a: (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
            <thead>
              <tr className="bg-white/10 text-gameGold">
                <th className="border border-white/20 p-2">Sr. No.</th>
                <th className="border border-white/20 p-2">Category</th>
                <th className="border border-white/20 p-2">Exams/Organizations</th>
                <th className="border border-white/20 p-2">Roles/Positions</th>
              </tr>
            </thead>
            <tbody className="text-teal-50">
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>1.</td>
                <td className="border border-white/20 p-2" rowSpan={2}>Public Sector Undertakings (PSUs)</td>
                <td className="border border-white/20 p-2">DRDO, SAIL, BHEL, BEL, NTPC, GAIL, IOCL, ISRO, NPCIL</td>
                <td className="border border-white/20 p-2">Technician, Diploma Trainee Apprentice</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">NTPC, PGCIL</td>
                <td className="border border-white/20 p-2">Diploma Trainee</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">2.</td>
                <td className="border border-white/20 p-2">Railways</td>
                <td className="border border-white/20 p-2">RRB JE (Railway Recruitment Board)</td>
                <td className="border border-white/20 p-2">Junior Engineer (JE)</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">3.</td>
                <td className="border border-white/20 p-2">Staff Selection Commission (SSC)</td>
                <td className="border border-white/20 p-2">SSC JE</td>
                <td className="border border-white/20 p-2">Junior Engineer (Civil, Mechanical, Electrical)</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">4.</td>
                <td className="border border-white/20 p-2">State Public Service Commissions (PSC)</td>
                <td className="border border-white/20 p-2">UPPSC, MPPSC, TNPSC etc.</td>
                <td className="border border-white/20 p-2">Junior Engineer (JE), Assistant Engineer (AE)</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>5.</td>
                <td className="border border-white/20 p-2" rowSpan={2}>Defense Sector</td>
                <td className="border border-white/20 p-2">Indian Army (MES), Indian Navy (SSR Artificer Apprentice)</td>
                <td className="border border-white/20 p-2">Technical Roles</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Military Engineering Services (MES)</td>
                <td className="border border-white/20 p-2">Junior Engineer</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">6.</td>
                <td className="border border-white/20 p-2">Power Sector</td>
                <td className="border border-white/20 p-2">PGCIL, State Electricity Boards (MAHADISCOM, TANGEDCO, UPPCL)</td>
                <td className="border border-white/20 p-2">JE, Technical Assistant</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">7.</td>
                <td className="border border-white/20 p-2">Road Transport & Highways</td>
                <td className="border border-white/20 p-2">National Highways Authority of India (NHAI)</td>
                <td className="border border-white/20 p-2">Technical Roles</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">8.</td>
                <td className="border border-white/20 p-2">Municipal Corporations</td>
                <td className="border border-white/20 p-2">Local Bodies (eg. Public Works Departments)</td>
                <td className="border border-white/20 p-2">Junior Engineer, Sub-Engineer</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">9.</td>
                <td className="border border-white/20 p-2">Apprenticeship Exams</td>
                <td className="border border-white/20 p-2">IOCL, ONGC, HAL, BOL, Tata Steel, L&T</td>
                <td className="border border-white/20 p-2">Apprenticeship Trainee</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">10.</td>
                <td className="border border-white/20 p-2">State-Level Recruitment</td>
                <td className="border border-white/20 p-2">PWD, Irrigation Dept., Rural Development Dept</td>
                <td className="border border-white/20 p-2">JE, Technical Posts</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">11.</td>
                <td className="border border-white/20 p-2">Border Roads Organization</td>
                <td className="border border-white/20 p-2">BRO</td>
                <td className="border border-white/20 p-2">Junior Engineer, Technical Posts</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">12.</td>
                <td className="border border-white/20 p-2">Metro Rail Corporations</td>
                <td className="border border-white/20 p-2">DMRC, Chennai Metro, Bangalore Metro</td>
                <td className="border border-white/20 p-2">Junior Engineer, Technician</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 space-y-2 text-sm text-teal-50/80">
             <p><strong className="text-gameGold">Note:</strong></p>
             <ol className="list-decimal pl-5 space-y-1">
               <li>The above-mentioned listed opportunities are the general ones, to get real-time updates students can check the table above so that students can save time without missing the important job opportunities.</li>
               <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
             </ol>
          </div>
        </div>
      )
    },
    {
      q: "What are the job opportunities for lateral entry candidates?",
      a: (
        <div className="space-y-6">
          <div>
            <p className="font-bold text-gameGold mb-2">A. State Public Service Commissions (PSC):</p>
            <p className="mb-4">Many state commissions offer lateral entry pathways for advanced roles based on diploma or degree qualifications.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
                <thead>
                  <tr className="bg-white/10 text-gameGold">
                    <th className="border border-white/20 p-2">State PSC</th>
                    <th className="border border-white/20 p-2">Role</th>
                    <th className="border border-white/20 p-2">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-teal-50">
                  <tr>
                    <td className="border border-white/20 p-2">UPPSC, TNPSC MPPSC</td>
                    <td className="border border-white/20 p-2">Junior Engineer, Sub-Engineer</td>
                    <td className="border border-white/20 p-2">Diploma or equivalent; lateral entry for experienced candidates in technical departments.</td>
                  </tr>
                  <tr>
                    <td className="border border-white/20 p-2">PWD, Irrigation Dept</td>
                    <td className="border border-white/20 p-2">Assistant Engineer, JE</td>
                    <td className="border border-white/20 p-2">Lateral entry allowed for diploma holders with significant experience</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="font-bold text-gameGold mb-2">B. Defense Services:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
                <thead>
                  <tr className="bg-white/10 text-gameGold">
                    <th className="border border-white/20 p-2">Organization</th>
                    <th className="border border-white/20 p-2">Role</th>
                    <th className="border border-white/20 p-2">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-teal-50">
                  <tr>
                    <td className="border border-white/20 p-2">MES (Military Engineering Services)</td>
                    <td className="border border-white/20 p-2">Junior Engineer</td>
                    <td className="border border-white/20 p-2">Diploma holders with lateral entry eligibility for senior roles.</td>
                  </tr>
                  <tr>
                    <td className="border border-white/20 p-2">Indian Navy, Army</td>
                    <td className="border border-white/20 p-2">Technical Roles</td>
                    <td className="border border-white/20 p-2">Diploma in engineering; lateral opportunities through experience and promotions.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="font-bold text-gameGold mb-2">C. Public Sector Undertakings (PSUs):</p>
            <p className="mb-4">Lateral entry candidates with diplomas or advanced degrees can secure positions in PSUs through direct recruitment exams or experience-based roles.</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
                <thead>
                  <tr className="bg-white/10 text-gameGold">
                    <th className="border border-white/20 p-2">PSU</th>
                    <th className="border border-white/20 p-2">Role</th>
                    <th className="border border-white/20 p-2">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-teal-50">
                  <tr>
                    <td className="border border-white/20 p-2">DRDO</td>
                    <td className="border border-white/20 p-2">Technician, Senior Technician</td>
                    <td className="border border-white/20 p-2">Diploma or lateral entry qualification in engineering.</td>
                  </tr>
                  <tr>
                    <td className="border border-white/20 p-2">NTPC, SAIL, GAIL</td>
                    <td className="border border-white/20 p-2">Diploma Trainee, Supervisor</td>
                    <td className="border border-white/20 p-2">Diploma or equivalent qualification in relevant fields.</td>
                  </tr>
                  <tr>
                    <td className="border border-white/20 p-2">PGCIL, BEL, IOCL</td>
                    <td className="border border-white/20 p-2">Supervisor, Junior Engineer</td>
                    <td className="border border-white/20 p-2">Diploma with relevant work experience.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="font-bold text-gameGold mb-2">D. Railways:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
                <thead>
                  <tr className="bg-white/10 text-gameGold">
                    <th className="border border-white/20 p-2">Exam/Recruitment</th>
                    <th className="border border-white/20 p-2">Role</th>
                    <th className="border border-white/20 p-2">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-teal-50">
                  <tr>
                    <td className="border border-white/20 p-2">RRB JE (Junior Engineer)</td>
                    <td className="border border-white/20 p-2">Junior Engineer</td>
                    <td className="border border-white/20 p-2">Diploma holders directly eligible; lateral entry pathways for higher posts via promotions.</td>
                  </tr>
                  <tr>
                    <td className="border border-white/20 p-2">Senior Section Engineer</td>
                    <td className="border border-white/20 p-2">Supervisor</td>
                    <td className="border border-white/20 p-2">Degree holders with experience can enter mid-level posts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <p className="font-bold text-gameGold mb-2">E. Metro Rail Corporations:</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
                <thead>
                  <tr className="bg-white/10 text-gameGold">
                    <th className="border border-white/20 p-2">Organization</th>
                    <th className="border border-white/20 p-2">Role</th>
                    <th className="border border-white/20 p-2">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="text-teal-50">
                  <tr>
                    <td className="border border-white/20 p-2">DMRC, Chennai Metro, Bangalore Metro</td>
                    <td className="border border-white/20 p-2">Junior Engineer</td>
                    <td className="border border-white/20 p-2">Diploma holders eligible for lateral promotions to higher technical posts.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-teal-50/80">
             <p><strong className="text-gameGold text-lg">Note :</strong></p>
             <ol className="list-decimal pl-5 space-y-1">
               <li>The above-mentioned listed opportunities are the general ones, to get real-time updates students can check "link of the table" so that students can save time without missing the important job opportunities.</li>
               <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
             </ol>
          </div>
        </div>
      )
    },
    {
      q: "What are the exams/Job opportunities for B-Tech core branches?",
      a: (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
            <thead>
              <tr className="bg-white/10 text-gameGold">
                <th className="border border-white/20 p-2">Category</th>
                <th className="border border-white/20 p-2">Exams/Organizations</th>
                <th className="border border-white/20 p-2">Job Role</th>
                <th className="border border-white/20 p-2">Eligibility</th>
              </tr>
            </thead>
            <tbody className="text-teal-50">
              <tr>
                <td className="border border-white/20 p-2" rowSpan={3}>Public Sector Undertakings (PSUs)</td>
                <td className="border border-white/20 p-2">SAIL, IOCL, ONGC, NTPC, SAIL, BHEL, PGCIL</td>
                <td className="border border-white/20 p-2">Graduate Trainee Engineer, Officer</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical/Civil + GATE Score</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">ISRO (Indian Space Research Organization)</td>
                <td className="border border-white/20 p-2">Scientist/Engineer</td>
                <td className="border border-white/20 p-2">B.Tech with 65% or above marks.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">DRDO (Defense Research and Development Organization)</td>
                <td className="border border-white/20 p-2">Scientist 'B'</td>
                <td className="border border-white/20 p-2">B.Tech in relevant branch + GATE/DRDO Exam.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Union Public Service Exams</td>
                <td className="border border-white/20 p-2">ESE (Engineering Services Examination)</td>
                <td className="border border-white/20 p-2">Group A Engineer (Central Govt.)</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical/Civil</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Staff Selection Exams</td>
                <td className="border border-white/20 p-2">SSC JE (Junior Engineer)</td>
                <td className="border border-white/20 p-2">Junior Engineer in Central Govt.</td>
                <td className="border border-white/20 p-2">B.Tech in Civil/Mechanical Engineering.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>Railways</td>
                <td className="border border-white/20 p-2">RRB SSE (Senior Section Engineer)</td>
                <td className="border border-white/20 p-2">Senior Section Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical/Civil.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">IRSE (Indian Railway Services of Engineers)</td>
                <td className="border border-white/20 p-2">Group A Engineer</td>
                <td className="border border-white/20 p-2">Through ESE (B.Tech required).</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">State PSC Exams</td>
                <td className="border border-white/20 p-2">State AE/JE Exams (UPPSC, TNPSC, etc.)</td>
                <td className="border border-white/20 p-2">Assistant Engineer, Junior Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical/Civil</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>Defence Services</td>
                <td className="border border-white/20 p-2">Indian Army SSC Tech Entry</td>
                <td className="border border-white/20 p-2">Technical Officer</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical/Civil.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">MES (Military Engineering Services)</td>
                <td className="border border-white/20 p-2">Junior Engineer, Assistant Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in relevant engineering discipline</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Metro Rail Corporations</td>
                <td className="border border-white/20 p-2">DMRC, BMRC, LMRC, etc.</td>
                <td className="border border-white/20 p-2">Junior Engineer, Assistant Manager</td>
                <td className="border border-white/20 p-2">B.Tech in Civil/Mechanical.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Power Sector</td>
                <td className="border border-white/20 p-2">PGCIL, State Electricity Boards (UPPCL, TANGEDCO, etc.)</td>
                <td className="border border-white/20 p-2">Field Engineer, Assistant Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in Electrical/Mechanical/Civil.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>Construction and Infrastructure</td>
                <td className="border border-white/20 p-2">NHAI (National Highways Authority of India)</td>
                <td className="border border-white/20 p-2">Site Engineer, Assistant Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in Civil Engineering.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">CPWD (Central Public Works Department)</td>
                <td className="border border-white/20 p-2">Assistant Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in Civil/Mechanical.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>Research & Academia</td>
                <td className="border border-white/20 p-2">GATE (Graduate Aptitude Test in Engineering)</td>
                <td className="border border-white/20 p-2">M.Tech, Research Fellow, PhD Jobs</td>
                <td className="border border-white/20 p-2">B.Tech in relevant discipline.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">CSIR NET</td>
                <td className="border border-white/20 p-2">Research Fellow</td>
                <td className="border border-white/20 p-2">B.Tech followed by post-graduate studies.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2" rowSpan={2}>Private Sector</td>
                <td className="border border-white/20 p-2">L&T, Tata Projects, Ashok Leyland, Reliance Industries</td>
                <td className="border border-white/20 p-2">Design Engineer, Project Engineer, QA/QC</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical/Civil.</td>
              </tr>
              <tr>
                <td className="border border-white/20 p-2">Oil & Gas Companies (Cairn, Schlumberger, etc.)</td>
                <td className="border border-white/20 p-2">Field Engineer, Maintenance Engineer</td>
                <td className="border border-white/20 p-2">B.Tech in Mechanical.</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 space-y-2 text-sm text-teal-50/80">
             <p><strong className="text-gameGold text-lg">Note :</strong></p>
             <ol className="list-decimal pl-5 space-y-1">
               <li>The above-mentioned listed opportunities are the general ones, to get real-time updates students can check "link of the table" so that students can save time without missing the important job opportunities.</li>
               <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
             </ol>
          </div>
        </div>
      )
    },
    {
      q: "Can lateral entry candidates give GATE/ESE/ISRO/BARC exams?",
      a: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-white/20 text-sm text-left">
              <thead>
                <tr className="bg-white/10 text-gameGold">
                  <th className="border border-white/20 p-2">Exam</th>
                  <th className="border border-white/20 p-2">Eligibility for Lateral Entry Candidates</th>
                  <th className="border border-white/20 p-2">Key Criteria</th>
                </tr>
              </thead>
              <tbody className="text-teal-50">
                <tr>
                  <td className="border border-white/20 p-2">GATE</td>
                  <td className="border border-white/20 p-2">Eligible</td>
                  <td className="border border-white/20 p-2">Must have a B.Tech/B.E. degree from an AICTE/UGC- recognized institution. Final-year students are also eligible.</td>
                </tr>
                <tr>
                  <td className="border border-white/20 p-2">ESE (Engineering Services Examination)</td>
                  <td className="border border-white/20 p-2">Eligible</td>
                  <td className="border border-white/20 p-2">Requires a B.Tech/B.E. degree or equivalent from a recognized university.</td>
                </tr>
                <tr>
                  <td className="border border-white/20 p-2">ISRO</td>
                  <td className="border border-white/20 p-2">Eligible</td>
                  <td className="border border-white/20 p-2">Needs a B.Tech/B.E. degree in specific disciplines (e.g., Mechanical, Electronics, CS) with 65% minimum marks.</td>
                </tr>
                <tr>
                  <td className="border border-white/20 p-2">BARC</td>
                  <td className="border border-white/20 p-2">Eligible</td>
                  <td className="border border-white/20 p-2">Requires a B.Tech/B.E. degree with at least 60% marks in engineering disciplines.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 space-y-2 text-sm text-teal-50/80">
             <p><strong className="text-gameGold text-lg">Notes for Lateral Entry Candidates:</strong></p>
             <ol className="list-decimal pl-5 space-y-1">
               <li>The B.Tech/B.E. degree must be AICTE/UGC-recognized, irrespective of whether obtained through regular or lateral entry.</li>
               <li>Ensure you meet the percentage/CGPA requirements for the specific exam.</li>
               <li>Always check the detailed eligibility criteria for the year you are applying, as they may have minor updates.</li>
             </ol>
          </div>

          <div className="mt-4 space-y-2 text-sm text-teal-50/80">
             <ol className="list-decimal pl-5 space-y-1" start={4}>
               <li>The above-mentioned listed opportunities are the general ones, to get real-time updates students can check "link of the table" so that students can save time without missing the important job opportunities.</li>
               <li>The detailed syllabus of these exams is timely updated so that all the information is available in a single place.</li>
             </ol>
          </div>
        </div>
      )
    },
    {
      q: "Can a diploma holder only appear for GATE/ESE/ISRO/BARC ?",
      a: "Diploma holders must complete a B.E./B.Tech degree to qualify for GATE, ESE, ISRO, or BARC. However, there are job opportunities like SSC JE and RRB JE tailored for diploma-level qualifications."
    }
  ];



  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* SECTION 1: Banner Section (Hero) - OPTIMIZED HEIGHT & VISIBILITY */}
      <section className="relative pt-40 pb-4 lg:pt-48 lg:pb-6 overflow-hidden bg-gradient-to-br from-[#075d63] via-[#054a4f] to-[#043f42] text-white">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gameGold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.07] pointer-events-none"></div>
        
        <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <motion.div 
              className="lg:w-7/12 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-[#f2c537] text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-2xl backdrop-blur-xl">
                <div className="relative">
                  <Bell size={16} className="animate-bounce" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                Real-Time Alerts Activated
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-[0.9] tracking-tighter">
                NEVER MISS A <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c537] via-amber-200 to-[#f2c537] bg-[length:200%_auto] animate-shimmer">
                  CAREER MOVE
                </span> <br/>
                AGAIN.
              </h1>
              
              <p className="text-teal-50 text-base md:text-xl font-bold mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0 opacity-90">
                We track every PSU, SSC, and State AE/JE notification across India. Focus on your preparation, we&apos;ll handle the alerts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <button 
                  onClick={() => openLogin('register')}
                  className="w-full sm:w-auto bg-[#f2c537] text-black px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(242,197,55,0.3)] hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                   Sign Up for Alerts <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                   <div className="flex -space-x-3">
                      {[1,2,3,4].map(i => (
                        <HeaderAvatar key={i} index={i} />
                      ))}
                   </div>
                   <div className="flex flex-col">
                      <span className="text-sm font-black text-white leading-none">25k+</span>
                      <span className="text-[10px] font-bold text-teal-200 uppercase tracking-widest">Engineers Alerts</span>
                   </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-5/12 hidden lg:flex justify-center"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
            >
              <div className="relative w-80 h-[380px] bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.3)] flex flex-col items-center p-6 lg:p-8 overflow-hidden animate-float">
                 <div className="w-16 h-16 bg-[#f2c537] rounded-2xl flex items-center justify-center text-black mb-4 shadow-[0_20px_40px_rgba(242,197,55,0.4)] transform -rotate-6">
                    <Briefcase size={32} strokeWidth={2.5} />
                 </div>
                 
                 <h3 className="text-2xl font-black text-white text-center mb-1 tracking-tight">Live Feed</h3>
                 <div className="w-12 h-1 bg-gameGold rounded-full mb-6"></div>
                 
                 <div className="w-full space-y-3">
                    {[
                      { title: "ONGC Recruitment 2025", status: "Live", color: "bg-green-400" },
                      { title: "SSC-JE 2026 Calendar", status: "Expected", color: "bg-amber-400" },
                      { title: "ISRO Scientist 'B'", status: "Closing Soon", color: "bg-red-400" }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (idx * 0.1) }}
                        className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-colors cursor-default"
                      >
                        <div className="flex items-center gap-3">
                           <div className={`w-2.5 h-2.5 rounded-full ${item.color} ${item.status === 'Live' ? 'animate-pulse' : ''}`}></div>
                           <span className="text-[11px] font-black uppercase tracking-widest text-teal-50">{item.title}</span>
                        </div>
                        <ChevronRight size={14} className="text-white/30 group-hover:text-gameGold transition-colors" />
                      </motion.div>
                    ))}
                 </div>
                 
                 <div className="mt-auto pt-4 w-full">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4"></div>
                    <div className="flex items-center justify-center gap-2 text-[10px] font-black text-gameGold uppercase tracking-[0.3em]">
                       <Sparkles size={14} /> System Synced
                    </div>
                 </div>
                 
                 {/* Decorative Elements */}
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-gameGold/20 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gameTeal/30 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* SECTION 2: What You Will Find on This Page? - COMPACT */}
      <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
         <svg className="absolute top-1/2 left-0 w-full h-24 text-slate-100 hidden lg:block -translate-y-full pointer-events-none" viewBox="0 0 1200 100" fill="none">
            <path d="M-50,50 Q300,0 600,50 T1250,50" stroke="currentColor" strokeWidth="3" strokeDasharray="12 12" />
         </svg>

         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-12">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
               >
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-none">
                    What You Will <span className="text-gameTeal">Find Here?</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gameGold mx-auto rounded-full mt-2"></div>
               </motion.div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 items-start">
               {findItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center gap-4 group w-28 md:w-36"
                  >
                     <div className="w-14 h-14 md:w-16 md:h-16 bg-[#075d63] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-teal-900/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-teal-900/20">
                        <item.icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                     </div>
                     <h3 className="text-xs md:text-sm font-bold text-[#075d63] text-center leading-tight">
                        {item.title}
                     </h3>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: Introduction Section - OPTIMIZED & DARKENED */}
      <section className="py-10 lg:py-12 bg-slate-200 border-y border-slate-300 overflow-hidden relative">
         <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#075d63]/10 text-[#075d63] text-xs font-black uppercase tracking-widest rounded-full mb-4">
                  <Info size={14} /> Career Information Hub
               </div>
               <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  Get All the Latest <span className="text-[#075d63]">Job Notifications</span>
               </h2>
               <p className="text-slate-600 text-base md:text-xl leading-relaxed font-medium">
                  GAME Academy brings you all latest government job notifications & examination updates to keep you informed about career opportunities on time. Whether you’re an engineering graduate or an experienced professional, we ensure you are informed of every opportunity in the government and private sectors.
               </p>
               <div className="mt-8 flex justify-center">
                  <div className="w-16 h-1 bg-[#f2c537] rounded-full"></div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* SECTION 4: Job Notification Table - UPDATED WITH GATED ACCESS AND 10-ROW VISIBILITY */}
      <section id="live-alerts" className="py-12 bg-white relative overflow-hidden scroll-mt-20">
         <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
               <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                     Live Job Alerts & <span className="text-[#075d63]">Notifications</span>
                  </h2>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Stay ahead in the race with real-time career updates</p>
               </div>
               <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                     <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                     <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Org, Post or Branch..." 
                        className="w-full bg-white border border-slate-200 rounded-xl px-10 py-2.5 text-sm focus:outline-none focus:border-[#075d63] transition-all" 
                     />
                  </div>
                  <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl">
                     {(['All', 'Open', 'Closed'] as const).map((filter) => (
                        <button
                           key={filter}
                           onClick={() => setStatusFilter(filter)}
                           className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${
                              statusFilter === filter
                                 ? 'bg-[#075d63] text-white shadow-md'
                                 : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                           }`}
                        >
                           {filter}
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden relative">
               
               {/* 🖥️ DESKTOP VIEW: Sleek 5-Column Table (No Horizontal Scroll) */}
               <div className="hidden lg:block overflow-y-auto h-[800px] no-scrollbar">
                  <table className="w-full text-left border-collapse table-fixed">
                     <thead className="sticky top-0 z-30">
                        <tr className="bg-[#fdfbf6] text-slate-900 text-[13px] font-bold border-b-2 border-gameGold">
                           <th className="p-4 border-r border-slate-200 w-[12%] text-center">Sr. No & Status</th>
                           <th className="p-4 border-r border-slate-200 w-[38%]">Job Announcement</th>
                           <th className="p-4 border-r border-slate-200 w-[20%]">Important Dates</th>
                           <th className="p-4 border-r border-slate-200 w-[16%] text-center font-bold">Official Links</th>
                           <th className="p-4 w-[14%] text-center font-bold">Recommended Course</th>
                        </tr>
                     </thead>
                     <tbody className="text-[14px] text-slate-700 divide-y divide-slate-100 relative bg-white">
                        {filteredJobs.map((job, idx) => (
                           <tr 
                             key={job.id} 
                             className={`transition-all duration-300 border-b border-slate-100 ${!isLoggedIn && idx > 2 ? 'blur-[4px] opacity-30 select-none pointer-events-none' : 'hover:bg-slate-50/80'}`}
                           >
                              {/* Sr No & Status Badge */}
                              <td className="p-4 border-r border-slate-100 text-center">
                                 <div className="flex flex-col items-center justify-center gap-1.5">
                                    <span className="font-bold text-slate-400 text-sm">#{String(job.id).padStart(2, '0')}</span>
                                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                                       job.status === 'Closed' 
                                          ? 'bg-rose-50 text-rose-600 border border-rose-100' 
                                          : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                                    }`}>
                                       <span className={`w-1.5 h-1.5 rounded-full ${job.status === 'Closed' ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500 animate-bounce'}`}></span>
                                       {job.status}
                                    </span>
                                 </div>
                              </td>

                              {/* Job Details (Title & Badges) */}
                              <td className="p-4 border-r border-slate-100">
                                 <div className="flex flex-col gap-2">
                                    <div className="font-extrabold text-slate-800 leading-tight text-sm">
                                       {job.notification}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 items-center mt-1">
                                       {job.eligibility && (
                                          <span className="text-[10px] font-bold bg-[#075d63]/5 text-[#075d63] px-2 py-0.5 rounded-md border border-[#075d63]/10">
                                             {job.eligibility}
                                          </span>
                                       )}
                                       {job.branches && job.branches.map((branch, bIdx) => (
                                          <span key={bIdx} className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2 py-0.5 rounded-md border border-amber-200">
                                             {branch}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </td>

                              {/* Dates Stack */}
                              <td className="p-4 border-r border-slate-100">
                                 <div className="flex flex-col gap-1 text-[12px] font-medium text-slate-600">
                                    <div className="flex items-start gap-1">
                                       <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0 mt-0.5">Start:</span>
                                       <span className="font-bold text-slate-700 whitespace-pre-line leading-tight">{job.startDate}</span>
                                     </div>
                                     <div className="flex items-center gap-1 border-t border-dashed border-slate-100 pt-1">
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider shrink-0">End:</span>
                                        <span className="font-black text-rose-600 whitespace-nowrap">{job.endDate}</span>
                                     </div>
                                  </div>
                               </td>

                               {/* Quick Action Buttons */}
                               <td className="p-4 border-r border-slate-100 text-center">
                                  <div className="flex flex-row items-center justify-center gap-1.5">
                                     {job.pdfLink ? (
                                        <a 
                                           href={job.pdfLink} 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-black text-rose-700 bg-rose-50 border border-rose-100 hover:bg-rose-100 hover:scale-105 active:scale-95 transition-all shadow-sm"
                                           title="View PDF Document"
                                        >
                                           <FileText size={13} />
                                           <span>PDF</span>
                                        </a>
                                     ) : (
                                        <span className="text-slate-300">-</span>
                                     )}

                                     {job.usefulLinks ? (
                                        <a 
                                           href={job.usefulLinks} 
                                           target="_blank" 
                                           rel="noopener noreferrer" 
                                           className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-black text-[#075d63] bg-[#075d63]/5 border border-[#075d63]/10 hover:bg-[#075d63]/10 hover:scale-105 active:scale-95 transition-all shadow-sm"
                                           title="Official Website / Apply Link"
                                        >
                                           <span>Apply</span> <ExternalLinkIcon size={11} />
                                        </a>
                                     ) : (
                                        <span className="text-slate-300">-</span>
                                     )}
                                  </div>
                               </td>

                               {/* recommendedCourse Link */}
                               <td className="p-4 text-center">
                                  {job.recommendedCourse ? (
                                     <a 
                                        href={job.recommendedCourse.startsWith('http') ? job.recommendedCourse : 'https://clppenny.page.link/cTBm'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-black text-amber-900 bg-[#fdfbf6] border border-amber-300 hover:bg-amber-100 hover:scale-105 active:scale-95 transition-all shadow-sm whitespace-nowrap"
                                     >
                                        <span>Start Prep Now</span>
                                     </a>
                                  ) : (
                                     <span className="text-slate-300">-</span>
                                  )}
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>

                {/* 📱 MOBILE & TABLET VIEW: Staggered Dynamic Cards (No Horizontal Scroll) */}
                <div className="block lg:hidden overflow-y-auto h-[800px] no-scrollbar p-4 md:p-6 space-y-4 bg-slate-50/10">
                   {filteredJobs.map((job, idx) => (
                      <div 
                         key={job.id} 
                         className={`bg-white border border-slate-200/80 rounded-2xl p-5 hover:border-slate-300 transition-all duration-300 shadow-sm flex flex-col gap-3 relative ${
                            !isLoggedIn && idx > 2 ? 'blur-[4px] opacity-30 select-none pointer-events-none' : ''
                         }`}
                      >
                         {/* Header metadata row */}
                         <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                               #{String(job.id).padStart(2, '0')}
                            </span>
                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black ${
                               job.status === 'Closed' 
                                  ? 'bg-rose-50 text-rose-600 border border-rose-100' 
                                  : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                            }`}>
                               <span className={`w-1.5 h-1.5 rounded-full ${job.status === 'Closed' ? 'bg-rose-500 animate-pulse' : 'bg-emerald-500 animate-bounce'}`}></span>
                               {job.status}
                            </span>
                         </div>

                         {/* Title and Organization */}
                         <div>
                            <h4 className="font-extrabold text-slate-950 text-base leading-snug">
                               {job.notification}
                            </h4>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                               {job.eligibility && (
                                  <span className="text-[10px] font-bold bg-[#075d63]/5 text-[#075d63] px-2.5 py-0.5 rounded-lg border border-[#075d63]/10">
                                     {job.eligibility}
                                  </span>
                               )}
                               {job.branches && job.branches.map((branch, bIdx) => (
                                  <span key={bIdx} className="text-[10px] font-bold bg-amber-50 text-amber-700 px-2.5 py-0.5 rounded-lg border border-amber-200">
                                     {branch}
                                  </span>
                               ))}
                            </div>
                         </div>

                         {/* Dates layout */}
                         <div className="bg-slate-50 rounded-xl p-3 grid grid-cols-2 gap-3 text-xs border border-slate-100 mt-1">
                            <div className="flex flex-col">
                               <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Start Date</span>
                               <span className="font-bold text-slate-700 mt-0.5 whitespace-pre-line leading-tight">{job.startDate}</span>
                            </div>
                            <div className="flex flex-col border-l border-slate-200 pl-3">
                               <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">End Date</span>
                               <span className="font-extrabold text-rose-600 mt-0.5 whitespace-nowrap">{job.endDate}</span>
                            </div>
                         </div>

                         {/* Adaptive layout for links and recommended course */}
                         <div className="flex flex-wrap sm:flex-nowrap gap-2 pt-2 border-t border-slate-100 mt-1">
                            {job.pdfLink ? (
                               <a 
                                  href={job.pdfLink} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="flex-1 min-w-[70px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-black text-rose-700 bg-rose-50 border border-rose-100 hover:bg-rose-100 transition-all shadow-sm"
                               >
                                  <FileText size={14} />
                                  <span>PDF</span>
                               </a>
                            ) : (
                               <span className="text-slate-300 text-xs py-2">-</span>
                            )}

                            {job.usefulLinks ? (
                               <a 
                                  href={job.usefulLinks} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="flex-1 min-w-[70px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-black text-[#075d63] bg-[#075d63]/5 border border-[#075d63]/10 hover:bg-[#075d63]/10 transition-all shadow-sm"
                               >
                                  <span>Apply</span> <ExternalLinkIcon size={12} />
                               </a>
                            ) : (
                               <span className="text-slate-300 text-xs py-2">-</span>
                            )}

                            {job.recommendedCourse && (
                               <a 
                                  href={job.recommendedCourse.startsWith('http') ? job.recommendedCourse : 'https://clppenny.page.link/cTBm'}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl text-xs font-black text-amber-900 bg-[#fdfbf6] border border-amber-300 hover:bg-amber-100 transition-all shadow-sm text-center"
                               >
                                  <span>Start Prep Now</span>
                               </a>
                            )}
                         </div>
                      </div>
                   ))}
                </div>

               {/* LOGIN GRADIENT OVERLAY - Adjusted to start after row 3 and cover full scroll area */}
               {!isLoggedIn && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
                     {/* Gradient Mask that fades exactly after the 3rd row */}
                     <div className="absolute inset-x-0 bottom-0 top-[280px] bg-gradient-to-t from-white via-white/95 to-transparent backdrop-blur-[1px]"></div>
                     
                     {/* Login CTA Card - Prominently Centered */}
                     <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative z-30 p-1 rounded-[2.5rem] bg-gradient-to-br from-gameGold via-gameTeal to-gameGold shadow-2xl pointer-events-auto scale-110"
                     >
                        <div className="bg-white rounded-[2.3rem] p-8 md:p-10 flex flex-col items-center text-center max-w-sm border border-slate-100">
                           <div className="w-16 h-16 rounded-2xl bg-gameGold flex items-center justify-center text-black mb-6 shadow-xl shadow-yellow-500/20 transform -rotate-3">
                              <Lock size={32} strokeWidth={2.5} />
                           </div>
                           <h3 className="text-2xl font-black text-slate-900 mb-3 leading-tight tracking-tight">
                              Login to Unlock All <span className="text-gameTeal">250+ Job Alerts</span>
                           </h3>
                           <p className="text-sm text-slate-500 font-bold mb-8 leading-relaxed">
                              Get instant access to salary details, eligibility checks, and official application links.
                           </p>
                           <button 
                              onClick={() => openLogin()}
                              className="w-full bg-gameTeal text-white py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-gameTealDark hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
                           >
                              Login Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                           </button>
                           <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Free for all GAME Aspirants</p>
                        </div>
                     </motion.div>
                  </div>
               )}
            </div>
         </div>
      </section>

      {/* SECTION 5: Featured Exams Section */}
      <FeaturedExams onNavigate={onNavigate} />

      {/* SECTION 8: FAQ Section - UPDATED BACKGROUND TO THEME COLOR */}
      <section className="py-24 bg-gameTeal text-white relative overflow-hidden border-t border-white/10">
         {/* Background pattern matching other dark sections */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
         
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center mb-16">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-gameGold text-xs font-black uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm border border-white/10">
                     <HelpCircle size={14} /> Knowledge Hub
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    Frequently Asked <span className="text-gameGold">Questions</span>
                  </h2>
                  <div className="w-24 h-1.5 bg-gameGold mx-auto rounded-full"></div>
               </motion.div>
            </div>
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <div key={i} className={`bg-white/5 border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${openFaqIndex === i ? 'border-gameGold bg-white/10 shadow-lg' : 'border-white/10 shadow-sm hover:border-white/30'}`}>
                     <button onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} className="w-full flex justify-between items-center p-5 text-left">
                        <span className={`font-bold text-base md:text-lg pr-4 ${openFaqIndex === i ? 'text-gameGold' : 'text-teal-50'}`}>{faq.q}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                           openFaqIndex === i ? 'bg-gameGold text-black rotate-180' : 'bg-white/10 text-white'
                        }`}>
                           {openFaqIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                     </button>
                     <AnimatePresence>
                        {openFaqIndex === i && (
                           <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                           >
                              <div className="px-6 pb-6 pt-0">
                                 <div className="h-px w-full bg-white/10 mb-4"></div>
                                 <div className="text-teal-50/80 leading-relaxed font-medium">
                                    {faq.a}
                                 </div>
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>



      {/* FINAL CTA Section - COMPACT */}
      <section className="py-12 lg:py-16 bg-gameTeal text-white relative overflow-hidden">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
         <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2c537] text-black text-[10px] font-black uppercase tracking-widest rounded-full mb-4 shadow-lg">
                  <Zap size={12} fill="currentColor" /> Ready to Crack the Code?
               </div>
               <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">Don&apos;t Just Track Jobs. <br/> <span className="text-gameGold">Master the Exam.</span></h2>
               <p className="text-teal-50 text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed font-medium">
                  Join India&apos;s most trusted Excellence Course with Gaurav Babu Sir and secure your position in the next recruitment cycle.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => handleNavigate('courses')}
                    className="bg-[#f2c537] text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                  >
                     Enroll in GAME Courses <ChevronRight size={18} />
                  </button>
                  <a
                     href={settings.telegram}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="bg-transparent border-2 border-white/20 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                  >
                     <Bell size={18} /> Join Telegram Alerts
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default JobNotificationsPage;
