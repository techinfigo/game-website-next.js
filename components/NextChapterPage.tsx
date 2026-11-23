'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, ArrowDown, Compass, ChevronDown,
  BookOpen, FlaskConical, Sigma, Leaf, Lightbulb
} from 'lucide-react';
import CallbackRequestModal from './CallbackRequestModal';

const COURSES_URL = 'https://courses.gameacademy.in'; // Game Live (Classplus)
const TEST_PORTAL = 'https://courses.gameacademy.in'; // tests live on the Classplus app

type ClassLevel = '09' | '10' | '11' | '12';

// Goals offered depend on the class, per the approved design.
function goalsFor(cls: ClassLevel | null): string[] {
  if (cls === '09' || cls === '10') return ['School Science & Maths', 'Foundation', 'Explore Future Pathways'];
  if (cls === '11' || cls === '12') return ['School Science & Maths', 'JEE Preparation', 'NEET Preparation'];
  return ['School Science & Maths', 'JEE Preparation', 'NEET Preparation'];
}

const ROUTES = [
  { n: '01', title: 'School & Boards', desc: 'Build confidence in your current class. Start with the right syllabus.', href: COURSES_URL, tone: 'mint' },
  { n: '02', title: 'JEE', desc: 'Explore the engineering entrance path. Understand Main and Advanced.', href: COURSES_URL, tone: 'dark' },
  { n: '03', title: 'NEET UG', desc: 'Explore the medical entrance path. Know the syllabus and eligibility.', href: COURSES_URL, tone: 'mint' },
];

const NEXT_STEPS = [
  { title: 'Understand', desc: 'Topic explainers', href: '/resources' },
  { title: 'Revise', desc: 'Class-tagged resources', href: '/resources' },
  { title: 'Practise', desc: 'Questions for your level', href: TEST_PORTAL },
];

const FAQS = [
  { q: 'Can I start without choosing JEE or NEET?', a: 'Yes. You can begin with your class and school subjects, strengthen your fundamentals, and decide on an entrance path later.' },
  { q: 'Can I study just one subject?', a: 'Yes. Pick the subject you want to understand better — you do not have to commit to a full programme to start exploring.' },
  { q: 'Where do I check official exam rules?', a: 'For JEE and NEET, always confirm eligibility, syllabus and dates on the official examination authority’s website (NTA). This page helps you explore, not apply.' },
];

export default function NextChapterPage() {
  const [cls, setCls] = useState<ClassLevel | null>(null);
  const [goal, setGoal] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [guidanceOpen, setGuidanceOpen] = useState(false);
  const [faqs, setFaqs] = useState(FAQS);

  const goals = useMemo(() => goalsFor(cls), [cls]);

  // Admin-editable FAQs override the defaults when present.
  useEffect(() => {
    let cancelled = false;
    fetch('/api/page-content?page=school')
      .then((r) => r.json())
      .then((d) => { if (!cancelled && Array.isArray(d?.content?.faqs) && d.content.faqs.length) setFaqs(d.content.faqs); })
      .catch(() => { /* keep defaults */ });
    return () => { cancelled = true; };
  }, []);

  // Read class/goal from the URL on load (so a shared link restores the path).
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      const c = p.get('class'); const g = p.get('goal');
      if (c && ['09', '10', '11', '12'].includes(c)) setCls(c as ClassLevel);
      if (g) setGoal(g);
    } catch { /* ignore */ }
  }, []);

  // Keep the chosen goal valid when the class changes.
  useEffect(() => {
    if (goal && !goals.includes(goal)) setGoal('');
  }, [goals, goal]);

  const explorePath = () => {
    try {
      const p = new URLSearchParams();
      if (cls) p.set('class', cls);
      if (goal) p.set('goal', goal);
      const qs = p.toString();
      window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
    } catch { /* ignore */ }
    document.getElementById('routes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f3f5f0] text-[#101821] font-sans">
      {/* ===== Hero ===== */}
      <section className="relative -mt-20 pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-[#061417] via-[#0a1f1d] to-[#101821] text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#087C70]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#f2c537]">GAME · The Next Chapter</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.03] tracking-tight mb-4">
                Big questions.<br /><span className="text-[#2dd4bf]">Bigger possibilities.</span>
              </h1>
              <p className="text-lg font-bold text-[#2dd4bf]/90 mb-2">Your next chapter starts with understanding.</p>
              <p className="text-slate-300 max-w-md mb-7 leading-relaxed">
                Science &amp; Maths for Classes 9–12. Find your direction for school, JEE or NEET.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#pathfinder" className="inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3.5 rounded-full hover:brightness-105 transition-all">
                  Find my path <ArrowUpRight size={17} />
                </a>
                <a href="#concept-lab" className="inline-flex items-center gap-2 text-white/90 font-bold hover:text-white">
                  Explore subjects <ArrowDown size={16} />
                </a>
              </div>
              <p className="text-[11px] text-slate-400 uppercase tracking-widest mt-7">
                Classes 9–10 / Foundation · Classes 11–12 / School + Entrance
              </p>
            </motion.div>

            {/* Orbital artwork (decorative, original) */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[320px] hidden lg:block">
              <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 400 320" fill="none">
                <ellipse cx="230" cy="150" rx="150" ry="60" stroke="#2dd4bf" strokeWidth="1" opacity="0.4" />
                <ellipse cx="230" cy="150" rx="150" ry="60" stroke="#2dd4bf" strokeWidth="1" opacity="0.4" transform="rotate(60 230 150)" />
                <ellipse cx="230" cy="150" rx="150" ry="60" stroke="#2dd4bf" strokeWidth="1" opacity="0.4" transform="rotate(-60 230 150)" />
                <circle cx="300" cy="95" r="5" fill="#f2c537" />
                <circle cx="120" cy="175" r="5" fill="#2dd4bf" />
                <circle cx="350" cy="205" r="5" fill="#f2c537" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#f2c537] text-[#101821] font-black text-2xl flex items-center justify-center shadow-xl shadow-[#f2c537]/20">G</div>
              <div className="absolute left-[10%] bottom-[18%] bg-white text-[#101821] rounded-xl px-4 py-3 shadow-lg">
                <span className="text-[9px] font-black text-slate-400">01 / Understand</span>
                <p className="font-black text-sm">Why does it work?</p>
              </div>
              <div className="absolute right-[6%] bottom-[4%] bg-[#f2c537] text-[#101821] rounded-xl px-4 py-3 shadow-lg">
                <span className="text-[9px] font-black text-[#101821]/60">02 / Apply</span>
                <p className="font-black text-sm">Now, solve for it.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Pathfinder ===== */}
      <section id="pathfinder" className="px-5 md:px-10 lg:px-12 -mt-10 relative z-20">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-5">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1"><Compass size={14} /> Your pathfinder</div>
              <h2 className="text-2xl md:text-3xl font-black">Where are you starting?</h2>
              <p className="text-xs text-slate-400 mt-1">Choose a class. We’ll help you explore the next step.</p>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {(['09', '10', '11', '12'] as ClassLevel[]).map((c) => (
                <button key={c} onClick={() => setCls(c)}
                  className={`px-4 py-3 rounded-xl border text-center transition-all ${cls === c ? 'bg-[#075d63] text-white border-[#075d63] shadow-lg' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#075d63]/40'}`}>
                  <span className="block text-[9px] font-black uppercase tracking-widest opacity-70">Class</span>
                  <span className="block text-xl font-black">{c}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 pt-5 flex flex-col lg:flex-row lg:items-center gap-4">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 shrink-0">My goal</span>
            <div className="flex flex-wrap gap-2 flex-1">
              {goals.map((g) => (
                <button key={g} onClick={() => setGoal(g)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-all ${goal === g ? 'bg-[#101821] text-white border-[#101821]' : 'bg-white text-slate-700 border-slate-200 hover:border-[#075d63]/40'}`}>
                  {g}
                </button>
              ))}
            </div>
            <button onClick={explorePath} className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3 rounded-xl hover:brightness-105 transition-all">
              Explore my path <ArrowUpRight size={16} />
            </button>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            {cls ? <>Selected: Class {cls}{goal ? ` · ${goal}` : ''}.</> : 'Tip: start by choosing your class. The page begins with no class selected.'}
          </p>
        </div>
      </section>

      {/* ===== Routes ===== */}
      <section id="routes" className="px-5 md:px-10 lg:px-12 py-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Three directions. Your choice.</div>
          <h2 className="text-2xl md:text-4xl font-black mb-6">A clear route beats a crowded feed.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {ROUTES.map((r) => (
              <div key={r.title} className={`rounded-2xl p-6 flex flex-col ${r.tone === 'dark' ? 'bg-[#101821] text-white' : 'bg-[#e9efe9] text-[#101821]'}`}>
                <span className={`text-[10px] font-black uppercase tracking-widest mb-3 ${r.tone === 'dark' ? 'text-[#2dd4bf]' : 'text-[#075d63]'}`}>{r.n}</span>
                <h3 className="text-2xl font-black mb-2">{r.title}</h3>
                <p className={`text-sm mb-5 leading-relaxed ${r.tone === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{r.desc}</p>
                <a href={r.href} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex items-center gap-1.5 text-sm font-black ${r.tone === 'dark' ? 'text-[#f2c537]' : 'text-[#075d63]'}`}>
                  Explore the guide <ArrowUpRight size={15} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Concept Lab ===== */}
      <section id="concept-lab" className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">The Concept Lab</div>
          <h2 className="text-2xl md:text-4xl font-black mb-6">Make room for your “aha” moment.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Physics (dark, featured) */}
            <Link href="/resources" className="group rounded-2xl p-6 bg-[#101821] text-white flex flex-col justify-between min-h-[200px] hover:-translate-y-0.5 transition-all">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2dd4bf]">01 / Physics</span>
                <h3 className="text-2xl font-black mt-2 leading-tight">See the idea.<br />Then solve it.</h3>
              </div>
              <div className="flex items-end justify-between">
                <span className="inline-flex items-center gap-1.5 text-sm font-black text-[#f2c537]">Explore class topics <ArrowUpRight size={15} /></span>
                <svg width="90" height="48" viewBox="0 0 90 48" fill="none"><path d="M2 46 Q45 -6 88 46" stroke="#f2c537" strokeWidth="2" /><line x1="2" y1="46" x2="88" y2="46" stroke="#2dd4bf" strokeWidth="1" /></svg>
              </div>
            </Link>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Chemistry */}
              <Link href="/resources" className="group rounded-2xl p-6 bg-[#e9efe9] text-[#101821] flex flex-col justify-between hover:-translate-y-0.5 transition-all">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#075d63]">02 / Chemistry</span>
                  <h3 className="text-lg font-black mt-2 leading-tight">Small particles.<br />Big ideas.</h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[#075d63]">Explore <ArrowUpRight size={13} /></span>
                  <FlaskConical size={22} className="text-[#075d63]" />
                </div>
              </Link>
              {/* Mathematics */}
              <Link href="/resources" className="group rounded-2xl p-6 bg-[#f2c537] text-[#101821] flex flex-col justify-between hover:-translate-y-0.5 transition-all">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#101821]/60">03 / Mathematics</span>
                  <h3 className="text-lg font-black mt-2 leading-tight">Think it through.</h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-flex items-center gap-1 text-xs font-black">Explore <ArrowUpRight size={13} /></span>
                  <Sigma size={22} />
                </div>
              </Link>
              {/* Biology (full width) */}
              <Link href="/resources" className="group sm:col-span-2 rounded-2xl p-6 bg-[#087C70] text-white flex items-center justify-between hover:-translate-y-0.5 transition-all">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70">04 / Biology</span>
                  <h3 className="text-lg font-black mt-1">Life, explained.</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1 text-xs font-black text-[#f2c537]">Explore <ArrowUpRight size={13} /></span>
                  <Leaf size={22} />
                </div>
              </Link>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">Class 9–10: Science + Maths. Class 11–12: explore subjects relevant to your selected goal.</p>
        </div>
      </section>

      {/* ===== Next useful step ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8 grid lg:grid-cols-[1fr_2fr] gap-6 items-center">
          <div>
            <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Less scrolling. More learning.</div>
            <h2 className="text-2xl md:text-3xl font-black">Your next useful step.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {NEXT_STEPS.map((s) => (
              <Link key={s.title} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} className="group">
                <div className="font-black text-lg">{s.title}</div>
                <div className="text-sm text-slate-500 mb-1">{s.desc}</div>
                <span className="inline-flex items-center gap-1 text-sm font-black text-[#075d63]">Explore <ArrowUpRight size={14} className="group-hover:translate-x-0.5 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Parents CTA ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#083a33] to-[#101821] text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c537]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#f2c537] mb-2"><Lightbulb size={13} /> For students + parents</div>
            <h2 className="text-2xl md:text-3xl font-black mb-2">You don’t need every answer yet.</h2>
            <p className="text-slate-300 text-sm max-w-lg">Start with your class, your subjects and what you want to understand next. Explore the pathway before you choose a programme.</p>
          </div>
          <button onClick={() => setGuidanceOpen(true)} className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3.5 rounded-xl hover:brightness-105 transition-all">
            Get study guidance <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-black mb-5">A few things worth asking.</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqs.map((f, i) => (
              <div key={i}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 py-4 text-left">
                  <span className="font-bold text-[#101821]">{f.q}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#075d63] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="text-sm text-slate-600 pb-4 -mt-1 leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-slate-400 mt-6 flex items-center gap-1.5"><BookOpen size={13} /> Concept design · illustrations are original · exam rules are set by the official authorities.</p>
        </div>
      </section>

      <CallbackRequestModal isOpen={guidanceOpen} onClose={() => setGuidanceOpen(false)} source="next-chapter" />
    </div>
  );
}
