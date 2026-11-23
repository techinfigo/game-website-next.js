'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ChevronRight, ChevronDown, PlayCircle, ShieldCheck,
  Timer, Search, Brain, MonitorPlay, FileText, BarChart3, Flag, Target, Smartphone, Lock
} from 'lucide-react';

// Every CTA on this gateway page opens the GAME Test Portal (Classplus).
const PORTAL_URL = 'https://courses.gameacademy.in';

function PortalButton({ label = 'Explore Test Series Portal', solid = true, className = '' }: { label?: string; solid?: boolean; className?: string }) {
  return (
    <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-black px-6 py-3.5 rounded-full transition-all ${solid ? 'bg-[#f2c537] text-[#0f2a2b] hover:brightness-105' : 'border border-white/25 text-white hover:bg-white/10'} ${className}`}>
      {label} <ArrowUpRight size={16} />
    </a>
  );
}

const EXAM_CHIPS = ['GATE', 'ESE', 'SSC JE', 'RRB JE', 'State AE / JE', 'Mechanical', 'Civil'];

const LEVELS = [
  { tag: 'Level 1', title: 'Topic tests', desc: 'Learn a topic, then check it immediately. Cheap place to make mistakes.', boss: false },
  { tag: 'Level 2', title: 'Subject tests', desc: 'Join topics together. See which subject is quietly costing you marks.', boss: false },
  { tag: 'Level 3', title: 'Full-length mocks', desc: 'Real paper, real clock. Practise speed, choices and nerves together.', boss: false },
  { tag: 'Boss level', title: 'PYQ papers', desc: 'Past exam papers show what the real examiner likes to ask.', boss: true },
];

const BENEFITS = [
  { icon: Timer, title: 'You learn the clock', desc: 'Most lost marks are lost to time, not knowledge. Mocks teach you when to skip and when to push.' },
  { icon: Search, title: 'You find the gaps early', desc: 'A wrong answer in a test costs nothing. The same one on exam day costs a rank.' },
  { icon: Brain, title: 'You build exam temperament', desc: 'By your 20th paper, a 3-hour exam feels like a normal day, not a shock.' },
];

const STEPS = [
  { n: '1', title: 'Open the portal', desc: 'One button on this page takes you straight in.' },
  { n: '2', title: 'Choose your exam and series', desc: 'Select exam, branch and series there. Check what’s included before you decide.' },
  { n: '3', title: 'Attempt, review, repeat', desc: 'Take the test, read the solutions, fix the weak topic, take the next one.' },
];

const TOUR = [
  'Find your exam and branch',
  'See what a series includes',
  'Attempt a test and read the solutions',
  'Check your performance report',
];

const INSIDE = [
  { icon: MonitorPlay, title: 'Exam-style test screen', desc: 'Practise on an interface that feels like the real online exam.' },
  { icon: FileText, title: 'Detailed solutions', desc: 'Understand each question, not only the answer key.' },
  { icon: BarChart3, title: 'Performance analysis', desc: 'See which subjects and topics are holding your score down.' },
  { icon: Flag, title: 'Rank among peers', desc: 'Know where you stand against other aspirants.' },
  { icon: Target, title: 'Mechanical and Civil focus', desc: 'Series planned by branch and exam, not one-size-fits-all.' },
  { icon: Smartphone, title: 'Practise on your phone', desc: 'Open the portal on mobile or laptop.' },
];

const FOUNDER_STATS = [
  { v: '14+', l: 'Years Teaching' },
  { v: '5000+', l: 'Selections' },
  { v: '50+', l: 'Top Ranks' },
];

// Placeholder student stories — replaced with real, permission-based selections.
const STUDENTS = [1, 2, 3, 4];

const FAQS = [
  { q: 'Why don’t I see the test series list on this page?', a: 'The list lives in the Test Portal, so you choose your exam, branch and series once, in one place, instead of choosing here and again there.' },
  { q: 'I bought a course. Do I need to buy the test series again?', a: 'In many courses the test series is already bundled. Sign in on the portal with your registered mobile number to check what is unlocked for you.' },
  { q: 'Where do I see price, validity and what’s included?', a: 'All of that is shown on the portal when you open a series, so the details are always current.' },
  { q: 'Can I try a test before buying?', a: 'Open the portal to see which free or sample tests are available for your exam.' },
  { q: 'Can I use the portal on my phone?', a: 'Yes. The portal works on both mobile and laptop.' },
  { q: 'Who do I contact if I can’t log in?', a: 'Use the support option on the portal, or reach GAME Academy support, and we’ll help you get in.' },
];

export default function TestSeriesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [openTour, setOpenTour] = useState<number | null>(0);

  return (
    <div className="bg-[#eef2ef] text-[#0f2a2b] font-sans">
      {/* ===== Hero ===== */}
      <section className="relative -mt-20 pt-32 md:pt-40 pb-24 overflow-hidden bg-gradient-to-br from-[#06403f] via-[#075d63] to-[#06403f] text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#f2c537]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <nav className="text-[11px] text-teal-200/80 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={12} /><span className="text-white">Test Series</span>
          </nav>
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f2c537]">Test Series · Real Exam Simulation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-5">
                Every Mock Is a Match.<br /><span className="text-[#f2c537]">Play It Like Exam Day.</span>
              </h1>
              <p className="text-slate-200 text-lg max-w-xl mb-7 leading-relaxed">
                Mechanical and Civil test series for GATE, ESE, SSC JE, RRB JE and State AE/JE. Pick your exam and series inside the GAME Test Portal, once, and start practising.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <PortalButton />
                <span className="text-sm text-teal-100">Already enrolled? <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-white">Sign in on the portal.</a></span>
              </div>
            </motion.div>

            {/* Portal preview card */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-2xl p-5 text-[#0f2a2b]">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f2c537]" /><span className="w-2.5 h-2.5 rounded-full bg-slate-200" /><span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="ml-2 text-[10px] font-black uppercase tracking-widest text-slate-400">GAME Test Portal</span>
              </div>
              <div className="font-black mb-3">Your practice starts here</div>
              {[['1', 'Choose your exam'], ['2', 'Choose your branch and series'], ['3', 'Attempt your first test']].map(([n, t], i) => (
                <div key={n} className={`flex items-center gap-3 px-3 py-3 rounded-xl mb-2 ${i === 1 ? 'bg-[#075d63]/8 border border-[#075d63]/30' : 'bg-slate-50'}`}>
                  <span className="w-6 h-6 rounded-full bg-[#075d63] text-white text-xs font-black flex items-center justify-center">{n}</span>
                  <span className="font-bold text-sm">{t}</span>
                </div>
              ))}
              <p className="text-[10px] text-slate-400 mt-2">A quick look at the portal — open it to see your exams and series.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exam chips strip */}
      <section className="px-5 md:px-10 lg:px-12 -mt-10 relative z-20">
        <div className="max-w-[1280px] mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-5 flex flex-col lg:flex-row lg:items-center gap-4">
          <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 shrink-0">Test series for</span>
          <div className="flex flex-wrap gap-2 flex-1">
            {EXAM_CHIPS.map((c) => <span key={c} className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-bold">{c}</span>)}
          </div>
          <p className="text-[11px] text-slate-400 lg:max-w-[220px]">Branches and packages are confirmed on the portal. These labels are information only, not selectors.</p>
        </div>
      </section>

      {/* ===== Why a test series ===== */}
      <section className="px-5 md:px-10 lg:px-12 py-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-1">Why a test series, really?</h2>
          <p className="text-sm text-slate-500 mb-6">Studying tells you what you know. A test series shows what you can do in 3 hours, under pressure.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {LEVELS.map((l) => (
              <div key={l.title} className={`rounded-2xl p-6 ${l.boss ? 'bg-[#06403f] text-white' : 'bg-white border border-slate-200'}`}>
                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-3 ${l.boss ? 'bg-[#f2c537] text-[#0f2a2b]' : 'bg-[#075d63]/10 text-[#075d63]'}`}>{l.tag}</span>
                <h3 className="text-lg font-black mb-1">{l.title}</h3>
                <p className={`text-sm leading-relaxed ${l.boss ? 'text-slate-300' : 'text-slate-500'}`}>{l.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                <b.icon size={22} className="text-[#075d63] mb-2" />
                <h3 className="font-black mb-1">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Three clicks ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-1">Your path, in three clicks</h2>
          <p className="text-sm text-slate-500 mb-6">No catalogue to browse here. The choosing happens once, inside the portal.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="w-9 h-9 rounded-full bg-[#075d63] text-white font-black flex items-center justify-center mb-3">{s.n}</div>
                <h3 className="font-black mb-1">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#fff8e1] border border-[#f2c537]/40 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="flex items-center gap-2 text-sm font-bold text-[#7a5b00]"><Lock size={15} /> Bought a course? Your test series may already be unlocked. Sign in with your registered mobile number.</span>
            <a href={PORTAL_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-1.5 text-sm font-black text-[#075d63] hover:underline">Explore Test Series Portal <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* ===== See the portal (walkthrough + tour) ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-6 items-start">
          <div className="relative rounded-2xl overflow-hidden bg-[#0f2a2b] aspect-video flex items-center justify-center">
            <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-widest bg-[#f2c537] text-[#0f2a2b] px-2 py-1 rounded">Portal walkthrough</span>
            <div className="text-center text-white/80">
              <PlayCircle size={56} className="mx-auto mb-2 text-[#f2c537]" />
              <p className="text-sm font-bold">A short tour of the portal</p>
              <p className="text-[11px] text-white/40">Walkthrough video coming soon</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-1">See the portal before you open it</h2>
            <p className="text-sm text-slate-500 mb-4">A short tour so you know what you’re walking into.</p>
            <div className="divide-y divide-slate-200 border-t border-b border-slate-200 mb-5">
              {TOUR.map((t, i) => (
                <div key={i}>
                  <button onClick={() => setOpenTour(openTour === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-3.5 text-left">
                    <span className="font-bold text-sm">{t}</span>
                    <ChevronDown size={16} className={`shrink-0 text-[#075d63] transition-transform ${openTour === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openTour === i && <p className="text-sm text-slate-500 pb-3.5 -mt-1">You’ll do this step inside the portal — open it to try it yourself.</p>}
                </div>
              ))}
            </div>
            <PortalButton solid={false} className="!text-[#075d63] !border-[#075d63]/30 hover:!bg-[#075d63]/5" />
          </div>
        </div>
      </section>

      {/* ===== Inside the portal ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-1">Inside the portal</h2>
          <p className="text-sm text-slate-500 mb-6">What students find when they open it.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INSIDE.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#075d63]/10 text-[#075d63] flex items-center justify-center shrink-0"><f.icon size={20} /></div>
                <div><h3 className="font-black mb-1">{f.title}</h3><p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Founder block ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#06403f] to-[#0f2a2b] text-white p-7 md:p-10 grid lg:grid-cols-[260px_1fr] gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c537]/10 rounded-full blur-3xl" />
          <img src="/gaurav-sir.webp" alt="Gaurav Babu Sir" referrerPolicy="no-referrer" className="relative z-10 w-full h-64 object-cover rounded-2xl border border-white/10" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#f2c537] mb-2">The mind behind the tests</div>
            <h2 className="text-2xl md:text-3xl font-black mb-3">Tests designed by <span className="text-[#f2c537]">Gaurav Babu Sir</span></h2>
            <p className="text-slate-300 italic mb-6 max-w-xl border-l-2 border-[#f2c537] pl-4">Every mock is built the way the real exam tests you — so you practise the exam, not just the syllabus.</p>
            <div className="grid grid-cols-3 gap-3 max-w-lg mb-6">
              {FOUNDER_STATS.map((s) => (
                <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-[#f2c537]">{s.v}</div>
                  <div className="text-[9px] uppercase tracking-widest text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
            <PortalButton />
          </div>
        </div>
      </section>

      {/* ===== Students ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl md:text-4xl font-black mb-1">Students who played to win</h2>
          <p className="text-sm text-slate-500 mb-6">Real selections, in their own words. Each story follows the same journey: first mock, last mock, result.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {STUDENTS.map((n) => (
              <div key={n} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center text-slate-300 text-xs font-bold">Student photo</div>
                <div className="p-5">
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest bg-[#f2c537] text-[#0f2a2b] px-2 py-0.5 rounded mb-2">Selected</span>
                  <div className="font-black text-slate-400">Student story coming soon</div>
                  <div className="text-xs text-slate-400 mb-3">Post · department · exam year</div>
                  <div className="text-xs font-bold text-slate-500 bg-slate-50 rounded-lg px-3 py-2">First mock — → Last mock —</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center"><PortalButton /></div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-5">Before you click</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {FAQS.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-4 text-left">
                  <span className="font-bold">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#075d63] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="text-sm text-slate-600 pb-4 -mt-1 leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-16">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#06403f] to-[#0f2a2b] text-white p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#f2c537]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-2">Ready to play the real thing?</h2>
            <p className="text-slate-300 mb-6">Choose your exam inside the portal and take your first test today.</p>
            <div className="flex justify-center"><PortalButton /></div>
          </div>
        </div>
        <p className="max-w-[1280px] mx-auto text-[11px] text-slate-400 mt-5 flex items-center gap-1.5">
          <ShieldCheck size={13} /> GAME Academy test series are practice tools. Results depend on each student’s effort. Official exam notices govern syllabus, pattern and dates.
        </p>
      </section>
    </div>
  );
}
