'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowDown, ChevronDown, ShieldCheck, Check,
  Globe, Landmark, ScrollText, TrendingUp, FlaskConical, Leaf, Newspaper, Brain,
  Video, FileText, ClipboardCheck, CalendarClock
} from 'lucide-react';

const COURSES_URL = 'https://courses.gameacademy.in'; // Game Live (Classplus) catalogue
// Beyond Boundaries: General Studies Mastery Course (exact course page).
const COURSE_URL = 'https://wpsvp.courses.store/courses/490929?filterId=1&sortId=7';

interface HeroSlide { imageUrl: string; link: string; title: string; }

// Default hero banners — placeholders until the client uploads real creatives
// in the admin panel (Exam Page Content → Non-Tech → Hero slider).
const SEED_SLIDES: HeroSlide[] = [
  { imageUrl: 'https://picsum.photos/seed/nontech-hero-1/1200/820', link: '#exams', title: 'Non-tech in engineering exams' },
  { imageUrl: 'https://picsum.photos/seed/nontech-hero-2/1200/820', link: '#exams', title: 'General studies that decides ranks' },
  { imageUrl: 'https://picsum.photos/seed/nontech-hero-3/1200/820', link: COURSE_URL, title: 'Beyond Boundaries GS course' },
  { imageUrl: 'https://picsum.photos/seed/nontech-hero-4/1200/820', link: '#exams', title: 'Start preparing now' },
];

type Route = 'all' | 'recruitment' | 'engineering';
type PillTone = 'open' | 'waiting' | 'upcoming' | 'closed';

const toneClass: Record<PillTone, string> = {
  open: 'bg-green-100 text-green-700',
  waiting: 'bg-amber-100 text-amber-700',
  upcoming: 'bg-blue-100 text-blue-700',
  closed: 'bg-slate-200 text-slate-500',
};

interface ExamCard {
  route: 'recruitment' | 'engineering';
  eligibility: string;
  status: string;
  tone: PillTone;
  title: string;
  desc: string;
  meta: string;
  href: string;
}

const CARDS: ExamCard[] = [
  { route: 'recruitment', eligibility: 'Graduate', status: 'Tier I done', tone: 'waiting', title: 'SSC CGL',
    desc: 'Non-tech: entire exam. Reasoning, GA, Quant, English. Any graduate, any branch.',
    meta: '12,256 posts. Tier I held 30 Sep–30 Oct 2026. Tier II tentatively Dec.', href: COURSES_URL },
  { route: 'recruitment', eligibility: 'Graduate · UG', status: 'Applications closed', tone: 'closed', title: 'RRB NTPC',
    desc: 'Non-tech: entire exam. Graduate (CEN 06/2026) and 12th pass (CEN 07/2026) posts.',
    meta: '3,548 graduate + 1,688 UG posts. Graduate CBT-1 expected Dec.', href: COURSES_URL },
  { route: 'recruitment', eligibility: '12th · 10th', status: 'Dec 2026', tone: 'upcoming', title: 'SSC CHSL / MTS',
    desc: 'Non-tech: entire exam. CHSL needs 12th pass, MTS needs 10th pass. A diploma or degree is not a separate route.',
    meta: 'CHSL Tier I proposed 30 Nov–31 Dec 2026. Confirm on ssc.gov.in.', href: COURSES_URL },
  { route: 'recruitment', eligibility: 'Graduate', status: 'Varies', tone: 'closed', title: 'Banking & State',
    desc: 'Non-tech: entire exam. IBPS, SBI and state recruitments. General Studies is only one part of the mix.',
    meta: 'Dates differ for every bank and state. Check the official notice.', href: COURSES_URL },
  { route: 'engineering', eligibility: 'Diploma · Degree', status: 'Paper-I done', tone: 'waiting', title: 'SSC JE',
    desc: 'Non-tech: Reasoning + General Awareness, 100 of 200 marks in Paper-I.',
    meta: 'About 1,748 posts notified (some sources say 1,699). Paper-II expected Dec 2026.', href: '/ssc' },
  { route: 'engineering', eligibility: 'Diploma · Degree', status: 'Result awaited', tone: 'waiting', title: 'RRB JE',
    desc: 'Non-tech: all of CBT-1. Maths, Reasoning, General Awareness, General Science.',
    meta: 'CEN 04/2026 · 4,029 posts (one source reports 4,487). CBT-1 result expected Dec.', href: '/rrb' },
  { route: 'engineering', eligibility: 'Degree', status: '31 Jan 2027', tone: 'upcoming', title: 'UPSC ESE (IES)',
    desc: 'Non-tech: Paper 1, 200 of 500 marks in prelims. General Studies and Engineering Aptitude.',
    meta: 'Prelims 31 Jan 2027. Paper 1 is 9:30–11:30 am.', href: '/ese' },
  { route: 'engineering', eligibility: 'Diploma · Degree', status: 'Varies by state', tone: 'closed', title: 'State AE / JE',
    desc: 'Non-tech: a General Studies paper or section in most state engineering services.',
    meta: 'Pattern and dates differ for every state. Track them on Job Updates.', href: '/state' },
];

const FACTS = [
  { big: '100', small: '200', label: 'SSC JE Paper 1', desc: 'Reasoning (50) + General Awareness (50). The other 100 are your engineering subject.', pct: 50 },
  { big: '100', small: '100', label: 'RRB JE CBT-1', desc: 'Maths, Reasoning, General Awareness and General Science. No technical questions at this stage.', pct: 100 },
  { big: '200', small: '500', label: 'UPSC ESE Prelims', desc: 'Paper 1 is General Studies and Engineering Aptitude, common to every branch.', pct: 40 },
];

const PATTERN = [
  { exam: 'SSC JE Paper-I', sections: 'Reasoning · General Awareness', questions: '50 + 50', marks: '100 of 200', share: '50%', neg: '0.25' },
  { exam: 'RRB JE CBT-1', sections: 'Maths · Reasoning · GA · General Science', questions: '30 + 25 + 15 + 30', marks: '100 of 100', share: '100%', neg: '⅓' },
  { exam: 'UPSC ESE Prelims', sections: 'Paper 1: General Studies & Engineering Aptitude', questions: 'Objective', marks: '200 of 500', share: '40%', neg: 'As per UPSC' },
  { exam: 'SSC CGL Tier I', sections: 'Reasoning · GA · Quant · English (25 each)', questions: '100', marks: '200 of 200', share: '100%', neg: '0.50' },
];

const SYLLABUS = [
  { icon: Globe, title: 'Geography', desc: 'India and world, physical and economic.' },
  { icon: Landmark, title: 'Polity & Constitution', desc: 'Structure of government, provisions, key acts.' },
  { icon: ScrollText, title: 'History & Culture', desc: 'Ancient, medieval, modern, art and culture.' },
  { icon: TrendingUp, title: 'Indian Economy', desc: 'Policies, planning, basic concepts.' },
  { icon: FlaskConical, title: 'General Science', desc: 'Basic physics, chemistry and biology.' },
  { icon: Leaf, title: 'Environment', desc: 'Issues, policies and sustainability.' },
  { icon: Newspaper, title: 'Current Affairs', desc: 'National and international events, technology.' },
  { icon: Brain, title: 'Reasoning & Maths', desc: 'Needed for SSC JE, RRB JE, CGL. Practised separately.' },
];

const PREP = [
  { t: 'Start from PYQs', d: 'Solve the last few years’ papers first to see which topics repeat in your exam.' },
  { t: 'Revise static GS weekly', d: 'History, polity and geography don’t change. Short weekly cycles beat long cramming.' },
  { t: 'Keep current affairs light', d: 'Cover the last 6–12 months in short notes. Don’t chase every news item.' },
  { t: 'Time the sections', d: 'Practise non-tech in a fixed time so it never eats your technical time.' },
];

const COURSE_FEATURES = [
  'Structured study plan by Gaurav Babu Sir', 'Recorded video lectures',
  'Doubt resolution support', 'Regular tests and assignments',
  'Practice sets', 'Offline downloads',
  'Career guidance by Gaurav Babu Sir', 'Flexible for working professionals',
];

const FAQS = [
  { q: 'Is non-tech really that important in engineering exams?', a: 'In SSC JE Paper-I it is half the marks, in RRB JE CBT-1 it is all the marks, and in ESE prelims Paper 1 it is 200 of 500. A strong technical paper can still lose to a weak non-tech one.' },
  { q: 'I am a diploma holder. Which of these can I sit?', a: 'It depends on each post. SSC JE, RRB JE and most State AE/JE posts accept a diploma; SSC CGL, RRB NTPC (graduate posts) and UPSC ESE need a degree. Always confirm the qualification in the official notice for the specific post.' },
  { q: 'Can a B.Tech student apply for SSC CGL and RRB NTPC?', a: 'Yes. Both are open to any graduate of any discipline, engineering included. They test reasoning, general awareness, quantitative aptitude and English — not your engineering subject.' },
  { q: 'How long should I give to non-tech each day?', a: 'A steady fixed block each day works better than occasional long sessions. Fit it around your technical study so neither side is neglected — consistency matters more than hours.' },
  { q: 'Does your GS course cover Reasoning and Maths?', a: 'No. It covers General Studies subjects only. Reasoning and Maths are practised separately.' },
];

const SOURCES = [
  { name: 'SSC', site: 'ssc.gov.in', note: 'JE, CGL, CHSL notices', href: 'https://ssc.gov.in' },
  { name: 'Railway (RRB)', site: 'rrbapply.gov.in', note: 'NTPC, JE, regional RRB sites', href: 'https://www.rrbapply.gov.in' },
  { name: 'UPSC', site: 'upsc.gov.in', note: 'ESE notice and admit card', href: 'https://upsc.gov.in' },
  { name: 'Banking', site: 'ibps.in · sbi.co.in/careers', note: 'IBPS and SBI notices', href: 'https://www.ibps.in' },
  { name: 'State services', site: 'State PSC / board sites', note: 'Notices differ by state', href: '/jobs' },
];

export default function NonTechHubPage() {
  const [route, setRoute] = useState<Route>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSlide, setActiveSlide] = useState(0);

  // Content the client can edit in the admin panel overrides the built-in
  // defaults when present; otherwise the approved defaults show.
  const [examCards, setExamCards] = useState<ExamCard[]>(CARDS);
  const [faqs, setFaqs] = useState(FAQS);
  const [slides, setSlides] = useState<HeroSlide[]>(SEED_SLIDES);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/page-content?page=nontech')
      .then((r) => r.json())
      .then((d) => {
        if (cancelled || !d?.content) return;
        const c = d.content;
        if (Array.isArray(c.examCards) && c.examCards.length) setExamCards(c.examCards);
        if (Array.isArray(c.faqs) && c.faqs.length) setFaqs(c.faqs);
        if (Array.isArray(c.hero) && c.hero.length) {
          setSlides(c.hero.filter((s: any) => s && s.imageUrl));
          setActiveSlide(0);
        }
      })
      .catch(() => { /* keep defaults */ });
    return () => { cancelled = true; };
  }, []);

  // Gentle auto-advance of the hero slider.
  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setActiveSlide((s) => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  // Each hero banner carries its own admin-set link.
  const openSlide = (link?: string) => {
    if (!link) return;
    if (link.startsWith('#')) {
      const el = document.getElementById(link.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (/^https?:\/\//.test(link)) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  const activeSrc = slides[Math.min(activeSlide, slides.length - 1)];
  const cards = useMemo(() => route === 'all' ? examCards : examCards.filter((c) => c.route === route), [route, examCards]);

  return (
    <div className="bg-[#eef2ef] text-[#0f2a2b] font-sans">
      {/* ===== Breadcrumb + Hero ===== */}
      <section className="relative -mt-20 pt-44 md:pt-48 pb-24 overflow-hidden bg-gradient-to-br from-[#06403f] via-[#075d63] to-[#06403f] text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#f2c537]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f2c537]">Non-Tech Exams · For Diploma &amp; B.Tech Engineers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-5">
                Half the SSC JE Paper<br /><span className="text-[#f2c537]">Isn’t Engineering.</span>
              </h1>
              <p className="text-slate-200 text-lg max-w-xl mb-7 leading-relaxed">
                Reasoning, general awareness, science and maths decide the rank in many engineering exams. Here is where they count, what is open right now, and what to study.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#exams" className="inline-flex items-center gap-2 bg-[#f2c537] text-[#0f2a2b] font-black px-6 py-3.5 rounded-full hover:brightness-105 transition-all">
                  See the exams <ArrowDown size={16} />
                </a>
                <a href="#exams" className="inline-flex items-center gap-2 border border-white/25 text-white font-bold px-6 py-3.5 rounded-full hover:bg-white/10 transition-all">
                  Which exams test non-tech? <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Hero slider (admin-managed, like the exam pages) */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full">
              {activeSrc && (
                <>
                  <div className="relative rounded-2xl border border-white/10 overflow-hidden shadow-2xl bg-white/5 aspect-[16/11]">
                    <img
                      src={activeSrc.imageUrl}
                      alt={activeSrc.title || 'Non-tech banner'}
                      referrerPolicy="no-referrer"
                      onClick={() => openSlide(activeSrc.link)}
                      className={`w-full h-full object-cover ${activeSrc.link ? 'cursor-pointer' : ''}`}
                    />
                    <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
                      {slides.map((_, i) => (
                        <button key={i} onClick={() => setActiveSlide(i)} aria-label={`Slide ${i + 1}`}
                          className={`h-1 rounded-full transition-all duration-300 ${i === activeSlide ? 'w-6 bg-[#f2c537]' : 'w-1.5 bg-white/40'}`} />
                      ))}
                    </div>
                  </div>
                  {slides.length > 1 && (
                    <div className="grid grid-cols-4 gap-2 mt-3">
                      {slides.map((s, i) => (
                        <button key={i} onClick={() => setActiveSlide(i)} aria-label={s.title || `Slide ${i + 1}`}
                          className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all duration-300 ${i === activeSlide ? 'border-[#f2c537] scale-105' : 'border-white/10 opacity-70 hover:opacity-100'}`}>
                          <img src={s.imageUrl} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Fact strip (overlaps hero) ===== */}
      <section className="px-5 md:px-10 lg:px-12 -mt-16 relative z-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-4">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-black text-[#075d63]">{f.big}</span>
                <span className="text-xl font-black text-slate-300">/ {f.small}</span>
              </div>
              <div className="font-black text-sm mb-2">{f.label}</div>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{f.desc}</p>
              <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-[#f2c537] rounded-full" style={{ width: `${f.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Route filter + exam cards ===== */}
      <section id="exams" className="px-5 md:px-10 lg:px-12 py-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-1">Which opportunity are you exploring?</h2>
          <p className="text-sm text-slate-500 mb-6">Two routes. Pick one, or see all. Check each post’s eligibility in its official notice.</p>

          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {([
              ['all', 'All exams', '8 exams'],
              ['recruitment', 'Non-technical recruitments', 'CGL · NTPC · CHSL/MTS · Banking & State · any branch'],
              ['engineering', 'Non-tech in engineering exams', 'SSC JE · RRB JE · ESE · State AE/JE · your branch'],
            ] as const).map(([val, label, sub]) => (
              <button key={val} onClick={() => setRoute(val as Route)}
                className={`text-left px-5 py-4 rounded-2xl border transition-all ${route === val ? 'bg-[#075d63] text-white border-[#075d63] shadow-lg' : 'bg-white text-slate-700 border-slate-200 hover:border-[#075d63]/40'}`}>
                <div className="font-black">{label}</div>
                <div className={`text-[11px] mt-0.5 ${route === val ? 'text-teal-100' : 'text-slate-400'}`}>{sub}</div>
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {cards.map((c) => (
              <Link key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                className="group bg-white rounded-2xl border border-slate-200 p-5 flex flex-col hover:-translate-y-0.5 hover:shadow-lg hover:border-[#075d63]/30 transition-all">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{c.eligibility}</span>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${toneClass[c.tone]}`}>{c.status}</span>
                </div>
                <h3 className="text-xl font-black mb-2 group-hover:text-[#075d63] transition-colors">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{c.desc}</p>
                <p className="text-[11px] text-slate-400 leading-relaxed mt-auto pt-3 border-t border-dashed border-slate-100">{c.meta}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pattern table ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-1">What the non-tech paper looks like</h2>
          <p className="text-sm text-slate-500 mb-5">Same subjects, very different weight in each exam.</p>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[640px]">
              <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <tr>
                  <th className="px-5 py-3">Exam / Paper</th><th className="px-5 py-3">Non-tech sections</th>
                  <th className="px-5 py-3">Questions</th><th className="px-5 py-3">Marks</th>
                  <th className="px-5 py-3">Share</th><th className="px-5 py-3">Negative</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PATTERN.map((p) => (
                  <tr key={p.exam}>
                    <td className="px-5 py-3 font-black">{p.exam}</td>
                    <td className="px-5 py-3 text-slate-600">{p.sections}</td>
                    <td className="px-5 py-3 text-slate-600">{p.questions}</td>
                    <td className="px-5 py-3 text-slate-600">{p.marks}</td>
                    <td className="px-5 py-3"><span className="font-black text-[#075d63]">{p.share}</span></td>
                    <td className="px-5 py-3 text-slate-600">{p.neg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Syllabus grid ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-1">What you actually need to study</h2>
          <p className="text-sm text-slate-500 mb-6">Common ground across these exams. Depth and mix change by exam.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SYLLABUS.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="w-10 h-10 rounded-xl bg-[#075d63]/10 text-[#075d63] flex items-center justify-center mb-3"><s.icon size={20} /></div>
                <h3 className="font-black mb-1">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Prep tips ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-1">How to prepare, simply</h2>
          <p className="text-sm text-slate-500 mb-6">Four habits that work across these exams.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PREP.map((p, i) => (
              <div key={p.t} className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="w-8 h-8 rounded-full bg-[#f2c537] text-[#0f2a2b] font-black flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-black mb-1">{p.t}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Course block ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#06403f] to-[#0f2a2b] text-white p-7 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c537]/10 rounded-full blur-3xl" />
          <div className="relative z-10 grid lg:grid-cols-[260px_1fr] gap-8 items-center lg:pl-8">
            <div className="bg-[#0f2a2b] border border-white/10 rounded-2xl p-5 text-center">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#f2c537] mb-2">Our course</div>
              <img src="/gaurav-sir.webp" alt="Gaurav Babu Sir" referrerPolicy="no-referrer" className="w-full h-40 object-cover rounded-xl mb-3" />
              <div className="font-black">Beyond Boundaries</div>
              <div className="text-xs text-teal-200">GS Mastery · Gaurav Sir</div>
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-[#f2c537] mb-1">GAME Academy Course · Non-Tech</div>
              <h2 className="text-2xl md:text-3xl font-black mb-2">Beyond Boundaries: General Studies Mastery Course</h2>
              <p className="text-slate-300 text-sm mb-5 max-w-2xl">A full General Studies course for State Engineering Services, SSC, RRB, ESE and PSU exams, planned by Gaurav Babu Sir. Built for technical students who need non-tech support.</p>

              <div className="grid grid-cols-4 gap-3 mb-6 max-w-lg">
                {[['101', 'Videos', Video], ['145', 'Files', FileText], ['60', 'Tests', ClipboardCheck], ['6/12', 'Months', CalendarClock]].map(([n, l, Icon]) => (
                  <div key={l as string} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                    {React.createElement(Icon as any, { size: 16, className: 'mx-auto mb-1 text-[#f2c537]' })}
                    <div className="font-black">{n as string}</div>
                    <div className="text-[9px] uppercase tracking-widest text-slate-400">{l as string}</div>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {COURSE_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-200"><Check size={15} className="text-[#2dd4bf] shrink-0" /> {f}</div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <a href={COURSE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#f2c537] text-[#0f2a2b] font-black px-6 py-3 rounded-xl hover:brightness-105 transition-all">
                  Choose Your Plan <ArrowRight size={16} />
                </a>
                <a href={COURSE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/20 text-white font-bold px-5 py-3 rounded-xl hover:bg-white/10 transition-all text-sm">
                  View course details
                </a>
              </div>
              <p className="text-xs text-slate-400 max-w-2xl">Covers: General Science, Current Affairs, History &amp; Culture, Geography, Polity, Economy, Environmental Science. <span className="text-slate-300 font-bold">Reasoning and Maths are not part of this course.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-5">Questions students ask</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqs.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center gap-3 py-4 text-left">
                  <img src="/gaurav-sir.webp" alt="Gaurav Babu Sir" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0" />
                  <span className="font-bold flex-1">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#075d63] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="flex gap-3 pb-4 -mt-1">
                    <span className="w-9 shrink-0" aria-hidden="true" />
                    <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Official sources ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-1">Official sources</h2>
          <p className="text-sm text-slate-500 mb-6">Confirm dates and eligibility here before you apply.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOURCES.map((s) => (
              <a key={s.name} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-[#075d63]/40 hover:shadow-md transition-all">
                <div className="font-black text-sm mb-1">{s.name}</div>
                <div className="text-[#075d63] font-bold text-sm mb-1">{s.site}</div>
                <div className="text-xs text-slate-400">{s.note}</div>
              </a>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 mt-6 flex items-center gap-1.5">
            <ShieldCheck size={13} /> GAME Academy is an independent preparation platform. Official recruitment notices govern eligibility, dates and corrections.
          </p>
        </div>
      </section>
    </div>
  );
}
