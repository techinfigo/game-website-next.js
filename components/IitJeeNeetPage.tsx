'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowDown, ChevronRight, ChevronDown, ShieldCheck, MessageCircle, AlertTriangle, Check
} from 'lucide-react';

// Status chip colours for the updates table.
const CHIP: Record<string, string> = {
  announced: 'bg-green-100 text-green-700',
  reported: 'bg-amber-100 text-amber-700',
  awaited: 'bg-red-100 text-red-700',
  notconfirmed: 'bg-purple-100 text-purple-700',
};
const WHATSAPP_CHANNEL = 'https://wa.me/919027615394';

interface UpdateRow { exam: string; update: string; status: string; tone: string; }
interface Faq { q: string; a: string; }

const DEFAULT_LAST_CHECKED = '24 Nov 2026';
const DEFAULT_DEADLINE = 'JEE Main Session 1: the late-fee window ends on 26 November 2026. Confirm on jeemain.nta.nic.in.';

const DEFAULT_UPDATES: UpdateRow[] = [
  { exam: 'JEE Main 2027 · Session 1 · Application', update: 'Regular window closed on 22 Nov 2026. A late-fee window (₹500 plus the application fee) is reported for 23–28 Nov. Corrections 27–29 Nov.', status: 'Reported', tone: 'reported' },
  { exam: 'JEE Main 2027 · Session 1 · Exam', update: '20, 21, 22, 23, 24 and 28 January 2027, in two shifts (9 am–12 pm and 3 pm–6 pm). Admit card not yet released.', status: 'Dates announced', tone: 'announced' },
  { exam: 'JEE Main 2027 · Session 2', update: 'Applications 5 Jan–3 Feb 2027, exam 2–7 April 2027, as per the reported NTA calendar.', status: 'Reported', tone: 'reported' },
  { exam: 'JEE Advanced 2027', update: 'Exam on 23 May 2027, conducted by IIT Delhi. A basic on-screen calculator is allowed. Registration dates are not announced yet.', status: 'Date announced', tone: 'announced' },
  { exam: 'NEET UG 2027 · Dates', update: 'NTA has not published the notification, application window or exam date. Some media expect an early-May exam, but this is unofficial.', status: 'Awaited', tone: 'awaited' },
  { exam: 'NEET UG 2027 · Mode', update: 'The Education Minister said in May 2026 that NEET will be computer-based from 2027. A 4 Nov 2026 report says the mode is not finalised and the exam-reform task force has been given time till January 2027.', status: 'Not confirmed', tone: 'notconfirmed' },
];

const DEFAULT_FAQS: Faq[] = [
  { q: 'When is JEE Main 2027?', a: 'Session 1 is on 20, 21, 22, 23, 24 and 28 January 2027. Session 2 is reported for 2–7 April 2027. Confirm on jeemain.nta.nic.in.' },
  { q: 'Can I still apply for JEE Main Session 1?', a: 'The regular window closed on 22 Nov 2026. A late-fee window is reported until 26–28 Nov. Check the official site for the exact closing date and fee.' },
  { q: 'When is JEE Advanced 2027?', a: 'Reported for 23 May 2027, conducted by IIT Delhi. Registration dates are not announced yet.' },
  { q: 'How many attempts do I get?', a: 'JEE Main: up to three consecutive years. JEE Advanced: a maximum of two attempts in two consecutive years. NEET UG: no cap on attempts in recent notices.' },
  { q: 'When is NEET UG 2027?', a: 'NTA has not published the notification or exam date yet. Some media expect an early-May exam, but this is unofficial until the bulletin is out.' },
  { q: 'Will NEET UG 2027 be computer-based?', a: 'Not confirmed. A CBT shift from 2027 was announced in 2026, but a later report says it is not finalised. Wait for NTA’s bulletin.' },
  { q: 'Can I take both JEE and NEET?', a: 'Yes, if you meet each exam’s eligibility and the dates don’t clash. JEE leads to engineering; NEET leads to medical, dental and AYUSH.' },
  { q: 'Is this an official notice?', a: 'No. This page is a general guide. Exam dates and rules are set by NTA, IIT Delhi, JoSAA and MCC, and can change.' },
];

// Hero banner slides — full designed images set by the admin panel
// (pageContent/iit.hero). Placeholders until the client uploads creatives.
interface HeroSlide { imageUrl: string; link?: string; title?: string; }
const SEED_SLIDES: HeroSlide[] = [
  { imageUrl: 'https://picsum.photos/seed/iit-hero-1/1200/820', link: '#updates', title: 'JEE Main 2027 updates' },
  { imageUrl: 'https://picsum.photos/seed/iit-hero-2/1200/820', link: '#updates', title: 'JEE Advanced 2027' },
  { imageUrl: 'https://picsum.photos/seed/iit-hero-3/1200/820', link: '#updates', title: 'NEET UG 2027' },
  { imageUrl: 'https://picsum.photos/seed/iit-hero-4/1200/820', link: '#compare', title: 'Compare the exams' },
];

const FACTS = [
  { big: '2', label: 'JEE Main sessions a year', sub: 'January and April' },
  { big: '180', label: 'NEET UG questions', sub: '720 marks in recent papers' },
  { big: '23 May', label: 'JEE Advanced 2027', sub: 'Conducted by IIT Delhi' },
];

const COMPARE = [
  { tag: 'Engineering', title: 'JEE Main', rows: [['By', 'NTA'], ['Leads to', 'NITs, IIITs, GFTIs; route to JEE Advanced'], ['Paper', '75 questions · 300 marks · 3 hrs'], ['Marking', '+4 / −1'], ['Attempts', '3 years, 2 sessions each'], ['2027', 'January and April']] },
  { tag: 'Engineering', title: 'JEE Advanced', rows: [['By', 'IIT Delhi (2027)'], ['Leads to', 'The IITs'], ['Paper', '2 compulsory papers · 3 hrs each'], ['Marking', 'Varies by section'], ['Attempts', '2 in 2 consecutive years'], ['2027', '23 May']] },
  { tag: 'Medical', title: 'NEET UG', rows: [['By', 'NTA'], ['Leads to', 'MBBS, BDS, AYUSH'], ['Paper', '180 questions · 720 marks · 3 hrs (recent pattern)'], ['Marking', '+4 / −1'], ['Attempts', 'No limit in recent notices'], ['2027', 'Dates awaited']] },
];

const JEE_STAGES = [
  { n: '1', title: 'JEE Main', desc: 'Two sessions a year. Up to three consecutive years of attempts. No age limit.' },
  { n: '2', title: 'JEE Advanced', desc: 'Top 2.5 lakh JEE Main rankers (B.E./B.Tech paper). 23 May 2027. Two attempts in two years.' },
  { n: '3', title: 'JoSAA counselling', desc: 'Seat allotment for IITs, NITs, IIITs and GFTIs, after results. 2027 schedule not announced.' },
];

const JEE_PAPERS = [
  ['Paper 1 · B.E./B.Tech', 'Physics, Chemistry, Maths: 20 MCQs + 5 numerical each', '75', '300'],
  ['Paper 2A · B.Arch', 'Maths 25, Aptitude 50, Drawing 2', '77', '400'],
  ['Paper 2B · B.Planning', 'Maths 25, Aptitude 50, Planning 25', '100', '400'],
];

const NEET_FACTS = [
  { big: '17+', desc: 'Minimum age by 31 Dec of the exam year. No upper limit in recent notices.' },
  { big: 'PCB + English', desc: 'Class 12 with Physics, Chemistry, Biology/Biotech and English.' },
  { big: '50 / 40 / 45%', desc: 'Minimum marks: General / reserved / General PwD (recent notices).' },
  { big: 'No limit', desc: 'No cap on attempts in recent notices.' },
];

const PREP = [
  { t: 'Start from the syllabus', d: 'Download the official brochure and tick off topics.' },
  { t: 'NCERT as your base', d: 'Especially for NEET Biology and Chemistry.' },
  { t: 'Class 11 is half the exam', d: 'Do not leave it for the last months.' },
  { t: 'Solve PYQs early', d: 'See the style, depth and repeat topics.' },
  { t: 'Practise in real format', d: 'Take mocks on a screen, not only on paper.' },
  { t: 'Keep an error log', d: 'Note why each mistake happened. Review weekly.' },
  { t: 'Plan revision early', d: 'Revise after days, then after weeks.' },
  { t: 'Protect board marks', d: 'NEET and JoSAA both set Class 12 minimums.' },
];

const SOURCES = [
  { name: 'JEE Main & NEET', site: 'jeemain.nta.nic.in · neet.nta.nic.in', href: 'https://jeemain.nta.nic.in' },
  { name: 'JEE Advanced', site: 'jeeadv.ac.in', href: 'https://jeeadv.ac.in' },
  { name: 'Engineering counselling', site: 'josaa.nic.in', href: 'https://josaa.nic.in' },
  { name: 'Medical counselling', site: 'mcc.nic.in', href: 'https://mcc.nic.in' },
];

export default function IitJeeNeetPage() {
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [tab, setTab] = useState<'jee' | 'neet'>('jee');

  const [updates, setUpdates] = useState<UpdateRow[]>(DEFAULT_UPDATES);
  const [faqs, setFaqs] = useState<Faq[]>(DEFAULT_FAQS);
  const [lastChecked, setLastChecked] = useState(DEFAULT_LAST_CHECKED);
  const [deadline, setDeadline] = useState(DEFAULT_DEADLINE);
  const [slides, setSlides] = useState<HeroSlide[]>(SEED_SLIDES);

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [slides.length]);

  // Each hero banner carries its own admin-set link.
  const openSlide = (link?: string) => {
    if (!link) return;
    if (link.startsWith('#')) {
      document.getElementById(link.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else if (/^https?:\/\//.test(link)) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = link;
    }
  };

  useEffect(() => {
    let cancelled = false;
    fetch('/api/page-content?page=iit').then((r) => r.json()).then((d) => {
      if (cancelled || !d?.content) return;
      const c = d.content;
      if (Array.isArray(c.hero) && c.hero.length) {
        const imgs = c.hero.filter((s: any) => s && s.imageUrl);
        if (imgs.length) { setSlides(imgs); setSlide(0); }
      }
      if (Array.isArray(c.updates) && c.updates.length) setUpdates(c.updates);
      if (Array.isArray(c.faqs) && c.faqs.length) setFaqs(c.faqs);
      if (typeof c.lastChecked === 'string' && c.lastChecked.trim()) setLastChecked(c.lastChecked);
      if (typeof c.deadlineNote === 'string') setDeadline(c.deadlineNote);
    }).catch(() => {});
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="bg-[#eef2ef] text-[#0f2a2b] font-sans">
      {/* ===== Hero ===== */}
      <section className="relative -mt-20 pt-44 md:pt-48 pb-24 overflow-hidden bg-gradient-to-br from-[#06403f] via-[#075d63] to-[#06403f] text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#f2c537]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <nav className="text-[11px] text-teal-200/80 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white">Home</Link><ChevronRight size={12} />
            <span>Examination</span><ChevronRight size={12} /><span className="text-white">IIT JEE / NEET</span>
          </nav>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f2c537]">IIT JEE · NEET UG · 2027</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-[1.02] tracking-tight mb-4">
                IIT JEE &amp; NEET:<br /><span className="text-[#f2c537]">Everything in One Place</span>
              </h1>
              <p className="text-slate-200 max-w-xl mb-7 leading-relaxed">
                Dates, eligibility, exam pattern and counselling for JEE Main, JEE Advanced and NEET UG. Every entry is marked as announced, reported or awaited, and we update it as official notices come out.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a href="#updates" className="inline-flex items-center gap-2 bg-white text-[#0f2a2b] font-black px-6 py-3.5 rounded-full hover:bg-slate-100 transition-all">Check Latest Updates <ArrowDown size={16} /></a>
                <a href="#compare" className="inline-flex items-center gap-2 border border-white/25 text-white font-bold px-6 py-3.5 rounded-full hover:bg-white/10 transition-all">Compare the Exams</a>
              </div>
              {updates[0] && (
                <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3 max-w-md">
                  <span className="w-6 h-6 rounded-md bg-[#f2c537] text-[#0f2a2b] flex items-center justify-center shrink-0"><AlertTriangle size={14} /></span>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#f2c537]">Latest update · {lastChecked}</div>
                    <p className="text-sm text-slate-200 line-clamp-2">{updates[0].exam} — {updates[0].update}</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Hero banner slider — admin-editable images */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden h-[300px] border border-white/10 bg-[#0f2a2b]">
              {slides.map((s, i) => (
                <div
                  key={i}
                  onClick={() => i === slide && openSlide(s.link)}
                  role={s.link ? 'link' : undefined}
                  aria-label={s.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${i === slide ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${s.link ? 'cursor-pointer' : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.imageUrl} alt={s.title || 'IIT JEE / NEET banner'} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
              ))}
              {slides.length > 1 && (
                <div className="absolute bottom-5 right-5 flex gap-1.5 z-10">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === slide ? 'w-5 bg-[#f2c537]' : 'w-1.5 bg-white/40'}`} />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fact strip */}
      <section className="px-5 md:px-10 lg:px-12 -mt-12 relative z-20">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-4">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6">
              <div className="text-3xl font-black text-[#075d63] mb-1">{f.big}</div>
              <div className="font-black text-sm">{f.label}</div>
              <div className="text-xs text-slate-400">{f.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Latest updates ===== */}
      <section id="updates" className="px-5 md:px-10 lg:px-12 py-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Stay current</div>
          <h2 className="text-2xl md:text-3xl font-black mb-1">Latest updates</h2>
          <p className="text-sm text-slate-500 mb-5">Each entry says how firm it is: announced, reported, awaited or not confirmed.</p>
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="hidden md:grid grid-cols-[1fr_2fr_140px] gap-4 px-5 py-3 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span>Exam</span><span>Update</span><span>Status</span>
            </div>
            <div className="divide-y divide-slate-100">
              {updates.map((u, i) => (
                <div key={i} className="grid md:grid-cols-[1fr_2fr_140px] gap-2 md:gap-4 px-5 py-4 items-start">
                  <span className="font-black text-sm">{u.exam}</span>
                  <span className="text-sm text-slate-600 leading-relaxed">{u.update}</span>
                  <span className={`justify-self-start text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-full ${CHIP[u.tone] || 'bg-slate-200 text-slate-500'}`}>{u.status}</span>
                </div>
              ))}
            </div>
          </div>
          {deadline && deadline.trim() && (
            <div className="mt-3 bg-[#fff8e1] border border-[#f2c537]/40 rounded-xl px-4 py-3 text-sm font-bold text-[#7a5b00]">⏳ {deadline}</div>
          )}
          <p className="text-[11px] text-slate-400 mt-3">Last checked {lastChecked} · Dates come from NTA and news reports and can change. Always confirm on the official site.</p>
        </div>
      </section>

      {/* ===== Compare ===== */}
      <section id="compare" className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Compare</div>
          <h2 className="text-2xl md:text-3xl font-black mb-1">JEE and NEET at a glance</h2>
          <p className="text-sm text-slate-500 mb-6">JEE leads to engineering and architecture seats. NEET leads to medical, dental and AYUSH seats.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {COMPARE.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl border border-slate-200 p-5">
                <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 ${c.tag === 'Medical' ? 'bg-[#f2c537]/20 text-[#7a5b00]' : 'bg-[#075d63]/10 text-[#075d63]'}`}>{c.tag}</span>
                <h3 className="text-lg font-black mb-3">{c.title}</h3>
                <ul className="space-y-1.5 text-sm">
                  {c.rows.map(([k, v]) => <li key={k}><span className="font-bold text-slate-700">{k}:</span> <span className="text-slate-500">{v}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== JEE / NEET detail tabs ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex gap-2 mb-6">
            {([['jee', 'JEE: Class 12 → IIT or NIT'], ['neet', 'NEET UG: MBBS, BDS, AYUSH']] as const).map(([v, l]) => (
              <button key={v} onClick={() => setTab(v)} className={`px-4 py-2 rounded-xl text-sm font-bold border ${tab === v ? 'bg-[#075d63] text-white border-[#075d63]' : 'bg-white text-slate-600 border-slate-200'}`}>{l}</button>
            ))}
          </div>

          {tab === 'jee' ? (
            <div>
              <div className="grid md:grid-cols-3 gap-4 mb-5">
                {JEE_STAGES.map((s) => (
                  <div key={s.n} className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="w-9 h-9 rounded-full bg-[#075d63] text-white font-black flex items-center justify-center mb-3">{s.n}</div>
                    <h3 className="font-black mb-1">{s.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto mb-5">
                <table className="w-full text-left text-sm min-w-[560px]">
                  <thead className="bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <tr><th className="px-5 py-3">Paper</th><th className="px-5 py-3">Sections</th><th className="px-5 py-3">Questions</th><th className="px-5 py-3">Marks</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {JEE_PAPERS.map((r) => (
                      <tr key={r[0]}><td className="px-5 py-3 font-bold">{r[0]}</td><td className="px-5 py-3 text-slate-600">{r[1]}</td><td className="px-5 py-3 text-slate-600">{r[2]}</td><td className="px-5 py-3 text-slate-600">{r[3]}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-black mb-2">JEE Advanced eligibility (2027)</h3>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {['Among the top 2,50,000 in JEE Main 2027 (B.E./B.Tech paper), by category', 'Born on or after 1 Oct 2002 (5-year relaxation for SC, ST and PwD)', 'Class 12 first appeared in 2026 or 2027, with Physics, Chemistry and Maths', 'At most 2 attempts, in 2 consecutive years'].map((x) => <li key={x} className="flex gap-2"><Check size={14} className="text-[#075d63] mt-0.5 shrink-0" />{x}</li>)}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-black mb-2">JoSAA seat criteria</h3>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {['Seats in IITs, NITs, IIITs and GFTIs', 'Register on josaa.nic.in after results', '75% in Class 12, or top 20 percentile (as in recent years)', '65% for SC, ST and PwD candidates (as in recent years)'].map((x) => <li key={x} className="flex gap-2"><Check size={14} className="text-[#075d63] mt-0.5 shrink-0" />{x}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm text-slate-500 mb-5 max-w-3xl">The single national entrance test for medical, dental and AYUSH undergraduate seats, conducted by NTA. Details below follow recent notices; the 2027 bulletin will confirm them.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                {NEET_FACTS.map((f) => (
                  <div key={f.big} className="bg-white rounded-2xl border border-slate-200 p-5">
                    <div className="text-lg font-black text-[#075d63] mb-1">{f.big}</div>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 p-5 mb-5">
                <div className="font-black mb-3">Question split (recent pattern): 180 questions · 720 marks · 3 hours</div>
                <div className="flex rounded-lg overflow-hidden text-white text-xs font-bold text-center">
                  <div className="py-2" style={{ width: '25%', background: '#1e40af' }}>Physics 45</div>
                  <div className="py-2" style={{ width: '25%', background: '#047857' }}>Chemistry 45</div>
                  <div className="py-2" style={{ width: '50%', background: '#d9a404' }}>Biology 90 (Botany 45 + Zoology 45)</div>
                </div>
                <p className="text-xs text-slate-400 mt-2">+4 for correct, −1 for wrong, 0 if unattempted.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 flex items-start gap-3">
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded-full bg-purple-100 text-purple-700 shrink-0 mt-0.5">Not confirmed</span>
                <div>
                  <div className="font-black mb-1">Will NEET 2027 be computer-based?</div>
                  <p className="text-sm text-slate-600">Not confirmed. A CBT shift from 2027 was announced in May 2026, but a 4 Nov 2026 report says it is not finalised and the exam may stay pen-and-paper. Shifts, centres and normalisation are not announced. Wait for NTA’s bulletin.</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">Counselling: MCC handles all-India quota seats; state authorities handle state quota seats.</p>
            </div>
          )}
        </div>
      </section>

      {/* ===== Prep ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Study smart</div>
          <h2 className="text-2xl md:text-3xl font-black mb-1">How to prepare, without the noise</h2>
          <p className="text-sm text-slate-500 mb-6">A small set of habits matters more than any single resource.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PREP.map((p, i) => (
              <div key={p.t} className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="w-8 h-8 rounded-full bg-[#075d63]/10 text-[#075d63] font-black flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-black mb-1">{p.t}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[900px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Support centre</div>
          <h2 className="text-2xl md:text-3xl font-black mb-5">Frequently asked questions</h2>
          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqs.map((f, i) => (
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

      {/* ===== Official sources ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Verify</div>
          <h2 className="text-2xl md:text-3xl font-black mb-6">Official sources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SOURCES.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-[#075d63]/40 hover:shadow-md transition-all">
                <div className="font-black text-sm mb-1">{s.name}</div>
                <div className="text-[#075d63] font-bold text-sm break-words">{s.site}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WhatsApp alert ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#06403f] to-[#0f2a2b] text-white p-7 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div>
            <h2 className="text-xl md:text-2xl font-black mb-1">Get exam alerts first</h2>
            <p className="text-slate-300 text-sm">Join the GAME Academy WhatsApp channel for JEE and NEET date updates.</p>
          </div>
          <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex items-center gap-2 bg-[#f2c537] text-[#0f2a2b] font-black px-6 py-3.5 rounded-xl hover:brightness-105 transition-all">
            <MessageCircle size={17} /> Join WhatsApp Channel
          </a>
        </div>
        <p className="max-w-[1280px] mx-auto text-[11px] text-slate-400 mt-5 flex items-center gap-1.5">
          <ShieldCheck size={13} /> This page is a general guide and is not an official notice. Exam dates and rules are set by NTA, IIT Delhi, JoSAA and MCC and can change.
        </p>
      </section>
    </div>
  );
}
