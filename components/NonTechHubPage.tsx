'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search, ArrowUpRight, ArrowRight, ArrowDown, Compass, BookOpen,
  Brain, Languages, ChevronDown, ShieldCheck
} from 'lucide-react';
import CallbackRequestModal from './CallbackRequestModal';

const COURSES_URL = 'https://courses.gameacademy.in';

type Route = 'recruitment' | 'engineering';

interface ExamCard {
  tag: string;
  title: string;
  desc: string;
  href: string;
  featured?: boolean;
}

const EXAMS: Record<Route, ExamCard[]> = {
  recruitment: [
    { tag: 'Graduate-level route', title: 'SSC CGL', desc: 'Check the specified qualifications and selection stages for each post.', href: COURSES_URL, featured: true },
    { tag: 'Post-specific routes', title: 'RRB NTPC', desc: 'Compare graduate and undergraduate post requirements before applying.', href: COURSES_URL },
    { tag: 'Different entry requirements', title: 'SSC CHSL / MTS', desc: 'Check the individual notice. Do not assume diploma equivalence.', href: COURSES_URL },
    { tag: 'Exam-specific pathways', title: 'Banking & State', desc: 'Explore the role and full subject mix. General Studies is only one part.', href: COURSES_URL },
  ],
  engineering: [
    { tag: 'Diploma / B.Tech route', title: 'SSC JE', desc: 'Junior Engineer posts via SSC — check the paper pattern and eligibility.', href: '/ssc', featured: true },
    { tag: 'Railways engineering', title: 'RRB JE', desc: 'Junior Engineer recruitment in Indian Railways. Verify post requirements.', href: '/rrb' },
    { tag: 'State services', title: 'State AE / JE', desc: 'Assistant/Junior Engineer posts in state PWD, irrigation and more.', href: '/state' },
    { tag: 'Public sector', title: 'PSU Recruitment', desc: 'Post-specific PSU hiring. Check each organisation’s own notice.', href: '/psu' },
  ],
};

const NOTICES = [
  { label: 'SSC notices', href: 'https://ssc.gov.in' },
  { label: 'RRB notices', href: 'https://www.rrbcdg.gov.in' },
  { label: 'IBPS notices', href: 'https://www.ibps.in' },
];

const SUBJECTS = [
  { title: 'General Studies', desc: 'Science / history / polity / economy / environment', tone: 'dark' },
  { title: 'Aptitude & Reasoning', desc: 'Check the required skills. Match your exam stage.', tone: 'mint' },
  { title: 'English & Other Skills', desc: 'Language, computers and skill tests vary by post.', tone: 'gold' },
];

const FAQS = [
  { q: 'Can diploma holders apply for every listed exam?', a: 'No. Each exam and post sets its own qualification. A diploma does not automatically meet a degree or 10+2-equivalence requirement — always check the official notice for the specific post.' },
  { q: 'Is General Studies enough for the full exam?', a: 'No. General Studies is only one part. Most exams also test aptitude, reasoning, English and, for engineering posts, technical subjects. Prepare for the complete paper you will face.' },
  { q: 'Where should I confirm eligibility and application dates?', a: 'Always on the recruiting authority’s official noticeboard (SSC, RRB, IBPS, state PSC). Dates and corrections can change — the official notice is final.' },
];

export default function NonTechHubPage() {
  const [route, setRoute] = useState<Route>('recruitment');
  const [q, setQ] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [guidanceOpen, setGuidanceOpen] = useState(false);

  const cards = useMemo(() => {
    const t = q.trim().toLowerCase();
    const list = EXAMS[route];
    if (!t) return list;
    return list.filter((c) => `${c.title} ${c.desc} ${c.tag}`.toLowerCase().includes(t));
  }, [route, q]);

  return (
    <div className="bg-[#f3f5f0] text-[#101821] font-sans">
      {/* ===== Hero ===== */}
      <section className="relative -mt-20 pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-[#061417] via-[#0a1f1d] to-[#101821] text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#087C70]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f2c537]">The Wider GAME · Non-Tech</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.03] tracking-tight mb-4">
                Your degree.<br /><span className="text-[#2dd4bf]">More directions.</span>
              </h1>
              <p className="text-lg font-bold text-[#2dd4bf]/90 mb-2">Explore beyond your technical subjects.</p>
              <p className="text-slate-300 max-w-md mb-7 leading-relaxed">
                Discover non-tech recruitments and the non-technical sections of engineering exams. Start with the right route.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#exams" className="inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3.5 rounded-full hover:brightness-105 transition-all">
                  Explore exams <ArrowUpRight size={17} />
                </a>
                <a href="#notices" className="inline-flex items-center gap-2 text-white/90 font-bold hover:text-white">
                  Official notices <ArrowDown size={16} />
                </a>
              </div>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-7">
                For diploma &amp; B.Tech backgrounds · check each post’s eligibility
              </p>
            </motion.div>

            {/* Orbital route diagram (decorative, original) */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[320px] hidden lg:block">
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 320" fill="none">
                <line x1="200" y1="160" x2="90" y2="70" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="200" y1="160" x2="330" y2="95" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="200" y1="160" x2="320" y2="250" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="3 4" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#f2c537] text-[#101821] font-black text-2xl flex items-center justify-center shadow-xl shadow-[#f2c537]/20">G</div>
              <div className="absolute left-[8%] top-[12%] bg-white text-[#101821] rounded-xl px-4 py-3 shadow-lg">
                <span className="text-[9px] font-black text-slate-400">01</span>
                <p className="font-black text-sm">SSC &amp; Railways</p>
              </div>
              <div className="absolute right-[4%] top-[22%] bg-white text-[#101821] rounded-xl px-4 py-3 shadow-lg">
                <span className="text-[9px] font-black text-slate-400">02</span>
                <p className="font-black text-sm">Banking &amp; State</p>
              </div>
              <div className="absolute right-[6%] bottom-[8%] bg-[#087C70] text-white rounded-xl px-4 py-3 shadow-lg">
                <span className="text-[9px] font-black text-white/60">03</span>
                <p className="font-black text-sm">Engineering + GS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Exam compass ===== */}
      <section className="px-5 md:px-10 lg:px-12 -mt-10 relative z-20">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-2">
            <Compass size={14} /> Your exam compass
          </div>
          <h2 className="text-2xl md:text-3xl font-black mb-5">Which opportunity are you exploring?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {([['recruitment', '01  Non-technical recruitments'], ['engineering', '02  Non-tech in engineering exams']] as const).map(([val, label]) => (
              <button
                key={val}
                onClick={() => { setRoute(val as Route); setQ(''); }}
                className={`text-left px-5 py-4 rounded-2xl font-black transition-all border ${
                  route === val ? 'bg-[#075d63] text-white border-[#075d63] shadow-lg' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#075d63]/40'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">Two routes, clear labels. Engineering recruitments stay distinct from non-technical jobs.</p>
        </div>
      </section>

      {/* ===== Exam cards ===== */}
      <section id="exams" className="px-5 md:px-10 lg:px-12 py-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
            <div>
              <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Explore the possibilities</div>
              <h2 className="text-2xl md:text-4xl font-black">Start with the exam. Not the sales pitch.</h2>
            </div>
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search exam or recruitment"
                className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold focus:outline-none focus:border-[#075d63]" />
            </div>
          </div>

          {cards.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 font-medium">No match in this route. Try the other tab or clear the search.</div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((c) => (
                <Link key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                  className={`group rounded-2xl p-6 border transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                    c.featured ? 'bg-[#101821] text-white border-[#101821]' : 'bg-[#e9efe9] text-[#101821] border-transparent hover:border-[#075d63]/30'
                  }`}>
                  <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${c.featured ? 'text-[#2dd4bf]' : 'text-[#075d63]'}`}>{c.tag}</div>
                  <h3 className="text-2xl font-black mb-2">{c.title}</h3>
                  <p className={`text-sm mb-4 leading-relaxed ${c.featured ? 'text-slate-300' : 'text-slate-600'}`}>{c.desc}</p>
                  <span className={`inline-flex items-center gap-1.5 text-sm font-black ${c.featured ? 'text-[#f2c537]' : 'text-[#075d63]'}`}>
                    Explore exam guide <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== Notices ===== */}
      <section id="notices" className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Stay informed. Stay accurate.</div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">Dates change. Official notices lead.</h2>
            <p className="text-sm text-slate-500">Check eligibility, dates and corrections with the recruiting authority. Live updates are published only after verification — no assumed application windows.</p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {NOTICES.map((n) => (
              <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-sm px-4 py-2.5 rounded-xl hover:border-[#075d63] hover:text-[#075d63] transition-all">
                {n.label} <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Subject mix ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">The subject mix</div>
          <h2 className="text-2xl md:text-4xl font-black mb-6">Prepare for the paper you will face.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {SUBJECTS.map((s) => {
              const Icon = s.title.includes('General') ? BookOpen : s.title.includes('Aptitude') ? Brain : Languages;
              const cls = s.tone === 'dark' ? 'bg-[#101821] text-white' : s.tone === 'gold' ? 'bg-[#f2c537] text-[#101821]' : 'bg-[#e9efe9] text-[#101821]';
              return (
                <div key={s.title} className={`rounded-2xl p-6 ${cls}`}>
                  <Icon size={22} className="mb-3 opacity-80" />
                  <h3 className="text-lg font-black mb-1">{s.title}</h3>
                  <p className={`text-sm ${s.tone === 'dark' ? 'text-slate-300' : s.tone === 'gold' ? 'text-[#101821]/70' : 'text-slate-600'}`}>{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== GS course block ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#083a33] to-[#101821] text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c537]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#f2c537] mb-2">Optional · General Studies support</div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">Build your General Studies base.</h2>
            <p className="text-[#2dd4bf] font-bold text-sm mb-1">Beyond Boundaries · GAME Academy</p>
            <p className="text-slate-300 text-sm max-w-lg">Explore the GS course. Check its topic coverage against your target exam before you enrol.</p>
          </div>
          <a href={COURSES_URL} target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3.5 rounded-xl hover:brightness-105 transition-all">
            View GS course <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-5">A few things worth asking.</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {FAQS.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-4 text-left">
                  <span className="font-bold text-[#101821]">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#075d63] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="text-sm text-slate-600 pb-4 -mt-1 leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Guidance CTA ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-16">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl md:text-2xl font-black mb-1">Need a clearer starting point?</h2>
            <p className="text-sm text-slate-500">Tell us your qualification and target exam before choosing preparation support.</p>
          </div>
          <button onClick={() => setGuidanceOpen(true)} className="shrink-0 inline-flex items-center gap-2 bg-[#075d63] text-white font-black px-6 py-3.5 rounded-xl hover:bg-[#054a4f] transition-all">
            Get guidance <ArrowRight size={16} />
          </button>
        </div>
        <p className="max-w-[1280px] mx-auto text-[11px] text-slate-400 mt-4 flex items-center gap-1.5">
          <ShieldCheck size={13} /> GAME is an independent preparation platform. Official recruitment notices govern eligibility.
        </p>
      </section>

      <CallbackRequestModal isOpen={guidanceOpen} onClose={() => setGuidanceOpen(false)} source="nontech-hub" />
    </div>
  );
}
