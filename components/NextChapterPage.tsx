'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Compass, ChevronDown, Download, Youtube,
  X, CheckCircle2, Loader2, AlertCircle, FlaskConical, Sigma, Leaf, Lightbulb
} from 'lucide-react';
import { useSiteSettings } from '@/hooks/useSiteSettings';

// Short orientation guides (from the agreed deliverables). Defaults link to the
// client's Drive files; the admin panel can override each with a hosted URL.
const GUIDE_SCHOOL = 'https://drive.google.com/file/d/11fVsMj_uNv78PKiAcAynnsXwbKriWM9O/view';
const GUIDE_JEE = 'https://drive.google.com/file/d/11L-eY30JMITMof4DZ7umxRp-6OkHMYvo/view';
const GUIDE_NEET = 'https://drive.google.com/file/d/1XNCN4hp3FM_KlghaiKoW956-CxQogQdq/view';
const YT_FALLBACK = 'https://www.youtube.com/@gblions'; // Gaurav Sir's channel
// Gaurav Sir's Physics playlist — the hero video and the "Watch Physics on
// YouTube" button both use this (admin can override via the Physics playlist field).
const DEFAULT_PLAYLIST = 'https://youtube.com/playlist?list=PL4z8h611VJ3DzujUrV1eQpSjue0vRJlAM';

function playlistId(url: string): string {
  const m = (url || '').match(/[?&]list=([A-Za-z0-9_-]+)/);
  return m ? m[1] : '';
}

// Hero video cards — Gaurav Sir's lessons, admin-editable (School page content).
const HERO_VIDEOS = ['CAJezRf1u9g', 'UnjCZn-Ga8M', 'ggnZchS4AZ4'];

// Accepts a YouTube URL or a bare 11-char ID and returns the video ID.
function videoId(input: string): string {
  const s = (input || '').trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(s)) return s;
  const m = s.match(/(?:v=|\/embed\/|youtu\.be\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : '';
}

type ClassLevel = '09' | '10' | '11' | '12';

const GOALS = ['School subjects', 'Foundation', 'JEE', 'NEET', 'Not sure yet'] as const;
const SUBJECTS = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'General / not sure'] as const;

const GUIDE_CARDS = [
  { n: '01', title: 'School & Boards', desc: 'Start with your syllabus, strengthen concepts and build a manageable study routine.', cta: 'Read School Guide', key: 'school' as const, tone: 'mint' },
  { n: '02', title: 'JEE', desc: 'Understand the engineering entrance pathway and how to begin preparing.', cta: 'Read JEE Guide', key: 'jee' as const, tone: 'dark' },
  { n: '03', title: 'NEET UG', desc: 'Understand the medical entrance pathway and the subjects it involves.', cta: 'Read NEET Guide', key: 'neet' as const, tone: 'mint' },
];

const LESSON_LOOP = [
  { t: 'Understand', d: 'Watch a lesson. Pause and explain the idea in your own words.' },
  { t: 'Revise', d: 'Close your notes. Recall the key idea, formula or diagram, then check it.' },
  { t: 'Practise', d: 'Attempt relevant textbook questions independently and revisit your mistakes.' },
];

const FAQS = [
  { q: 'Does GAME currently offer courses for Classes 9-12?', a: 'No. GAME does not currently offer Classes 9-12 courses. This page brings together Gaurav Babu Sir’s available Physics lessons on YouTube, introductory study guides and a form to share your learning interests.' },
  { q: 'Can I watch Gaurav Sir’s Physics lessons without joining a course?', a: 'Yes. Use the Physics playlist link on this page to watch the lessons available on YouTube. You do not need to enrol in a GAME school course.' },
  { q: 'Do I need to choose JEE or NEET now?', a: 'No. You can begin with your current school subjects and use the guides to understand your options. You can also select Not sure yet in the interest form.' },
  { q: 'What happens when I submit my learning interests?', a: 'Your response helps GAME understand your class, subject interests and learning needs. Submission is not admission, a course booking or a guarantee of personalised counselling.' },
  { q: 'Will GAME launch Classes 9-12 courses?', a: 'GAME intends to develop its school-learning offering, but no launch date or course availability is confirmed on this page. Any future announcement will explain what is available and how to access it.' },
  { q: 'Are the guides complete preparation material?', a: 'No. They are short orientation guides. Use your current school or board syllabus, prescribed learning material and the relevant official examination syllabus for detailed preparation.' },
  { q: 'Where should I confirm JEE or NEET eligibility and dates?', a: 'Use the official JEE Main, JEE Advanced and NEET UG websites. Their current notices and information bulletins take precedence over guidance PDFs or social-media posts.' },
];

export default function NextChapterPage() {
  const { youtube } = useSiteSettings();

  // Interest-form state
  const [cls, setCls] = useState<ClassLevel | null>(null);
  const [goal, setGoal] = useState('');
  const [name, setName] = useState('');
  const [board, setBoard] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [thanksOpen, setThanksOpen] = useState(false);

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [faqs, setFaqs] = useState(FAQS);
  const [heroVideos, setHeroVideos] = useState<string[]>(HERO_VIDEOS);

  // Admin-editable links (guides + playlist) override the defaults when set.
  const [links, setLinks] = useState({ school: GUIDE_SCHOOL, jee: GUIDE_JEE, neet: GUIDE_NEET, playlist: '' });

  useEffect(() => {
    let cancelled = false;
    fetch('/api/page-content?page=school')
      .then((r) => r.json())
      .then((d) => {
        if (cancelled || !d?.content) return;
        const c = d.content;
        if (Array.isArray(c.faqs) && c.faqs.length) setFaqs(c.faqs);
        if (Array.isArray(c.heroVideos)) {
          const ids = c.heroVideos.map((v: string) => videoId(v)).filter(Boolean);
          if (ids.length) setHeroVideos(ids);
        }
        setLinks((prev) => ({
          school: c.guideSchool || prev.school,
          jee: c.guideJee || prev.jee,
          neet: c.guideNeet || prev.neet,
          playlist: c.physicsPlaylist || prev.playlist,
        }));
      })
      .catch(() => { /* keep defaults */ });
    return () => { cancelled = true; };
  }, []);

  const playlistUrl = links.playlist || DEFAULT_PLAYLIST;
  const heroPlId = playlistId(playlistUrl);
  const heroEmbedSrc = heroPlId
    ? `https://www.youtube.com/embed/videoseries?list=${heroPlId}&autoplay=1&mute=1&loop=1&controls=0&disablekb=1&fs=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3`
    : (heroVideos[0] ? `https://www.youtube.com/embed/${heroVideos[0]}?autoplay=1&mute=1&loop=1&playlist=${heroVideos[0]}&rel=0&playsinline=1&modestbranding=1&controls=0&disablekb=1&fs=0&iv_load_policy=3` : '');
  const guideHref = (k: 'school' | 'jee' | 'neet') => links[k];

  const scrollToForm = () => document.getElementById('interest')?.scrollIntoView({ behavior: 'smooth' });
  const requestSubject = (s: string) => { setSubject(s); scrollToForm(); };

  const submitInterests = async () => {
    if (submitting) return;
    if (!cls) { setSubmitError('Please select your class to continue.'); return; }
    setSubmitError('');
    setSubmitting(true);
    try {
      const res = await fetch('/api/school-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ class: cls, goal, name, board, subject, topic }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error('save_failed');
      setThanksOpen(true);
    } catch {
      setSubmitError('We could not save your response. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const fieldCls = 'w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-[#101821] bg-slate-50/60 focus:bg-white focus:border-[#075d63] outline-none transition-colors';
  const fieldLabel = 'block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5';

  return (
    <div className="bg-[#f3f5f0] text-[#101821] font-sans">
      {/* ===== Hero ===== */}
      <section className="relative -mt-20 pt-44 md:pt-48 pb-16 md:pb-20 overflow-hidden bg-gradient-to-br from-[#061417] via-[#0a1f1d] to-[#101821] text-white">
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
              <p className="text-slate-300 max-w-xl mb-7 leading-relaxed">
                Build your understanding with Gaurav Babu Sir’s Physics lessons on YouTube. Read our short guides and tell us what you would like to learn next.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href={guideHref('school')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3.5 rounded-full hover:brightness-105 transition-all">
                  <Download size={17} /> Download Starter Guide
                </a>
                <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/90 font-bold hover:text-white">
                  <Youtube size={18} /> Watch Physics on YouTube
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-6 max-w-md leading-relaxed">
                Classes 9–12 courses are not currently available at GAME. This page offers learning links and introductory guidance.
              </p>
            </motion.div>

            {/* Hero lesson video — Physics playlist, auto-plays (muted) */}
            {heroEmbedSrc && (
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="relative w-full">
                <div className="absolute -inset-6 bg-[#2dd4bf]/10 rounded-[2rem] blur-2xl pointer-events-none" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black" style={{ aspectRatio: '16 / 9' }}>
                  <iframe
                    src={heroEmbedSrc}
                    title="Gaurav Sir Physics lessons"
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="flex justify-center mt-3">
                  <span className="bg-[#f2c537] text-[#101821] rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-lg">Gaurav Sir · Physics lessons</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Interest form ===== */}
      <section id="interest" className="px-5 md:px-10 lg:px-12 -mt-10 relative z-20">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8">
          <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1"><Compass size={14} /> Your learning interests</div>
          <h2 className="text-2xl md:text-3xl font-black">What would you like to learn next?</h2>
          <p className="text-sm text-slate-500 mt-1 mb-6">Share your class, interests and learning needs to help us understand what students want from GAME.</p>

          {/* Class */}
          <div className="mb-5">
            <span className={fieldLabel}>Your class</span>
            <div className="grid grid-cols-4 gap-2 max-w-md">
              {(['09', '10', '11', '12'] as ClassLevel[]).map((c) => (
                <button key={c} type="button" onClick={() => { setCls(c); setSubmitError(''); }}
                  className={`px-4 py-3 rounded-xl border text-center transition-all ${cls === c ? 'bg-[#075d63] text-white border-[#075d63] shadow-lg' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-[#075d63]/40'}`}>
                  <span className="block text-[9px] font-black uppercase tracking-widest opacity-70">Class</span>
                  <span className="block text-xl font-black">{c}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <span className={fieldLabel}>My goal</span>
            <div className="flex flex-wrap gap-2">
              {GOALS.map((g) => (
                <button key={g} type="button" onClick={() => setGoal(goal === g ? '' : g)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold border transition-all ${goal === g ? 'bg-[#101821] text-white border-[#101821]' : 'bg-white text-slate-700 border-slate-200 hover:border-[#075d63]/40'}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Name + Board */}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className={fieldLabel}>Name or preferred name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" className={fieldCls} />
            </div>
            <div>
              <label className={fieldLabel}>Board</label>
              <input value={board} onChange={(e) => setBoard(e.target.value)} placeholder="CBSE / CISCE / State Board / Other" className={fieldCls} />
            </div>
          </div>

          {/* Subject + Topic */}
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className={fieldLabel}>Subject of interest</label>
              <div className="relative">
                <select value={subject} onChange={(e) => setSubject(e.target.value)} className={`${fieldCls} appearance-none pr-10 cursor-pointer`}>
                  <option value="">Select subject</option>
                  {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className={fieldLabel}>Topic you find difficult <span className="text-slate-300">(optional)</span></label>
              <input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Tell us what you would like help learning" className={fieldCls} />
            </div>
          </div>

          <p className="text-xs text-[#075d63] font-medium mb-5">No phone or email is required for the basic learning-interest form.</p>

          {submitError && (
            <div className="mb-4 inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-2.5 text-sm font-bold">
              <AlertCircle size={15} /> {submitError}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button onClick={submitInterests} disabled={submitting}
              className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#f2c537] text-[#101821] font-black px-7 py-3 rounded-xl hover:brightness-105 transition-all disabled:opacity-70">
              {submitting ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> : <>Submit <ArrowUpRight size={16} /></>}
            </button>
            <p className="text-xs text-slate-400 leading-relaxed">Submitting shares your interests only. It is not admission, a course booking or a request for guaranteed counselling.</p>
          </div>
        </div>
      </section>

      {/* ===== Three guides ===== */}
      <section className="px-5 md:px-10 lg:px-12 py-14">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Three guides. Your next step.</div>
          <h2 className="text-2xl md:text-4xl font-black mb-6">Understand your options. Take your next step.</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {GUIDE_CARDS.map((r) => (
              <div key={r.title} className={`rounded-2xl p-6 flex flex-col ${r.tone === 'dark' ? 'bg-[#101821] text-white' : 'bg-[#e9efe9] text-[#101821]'}`}>
                <span className={`text-[10px] font-black uppercase tracking-widest mb-3 ${r.tone === 'dark' ? 'text-[#2dd4bf]' : 'text-[#075d63]'}`}>{r.n}</span>
                <h3 className="text-2xl font-black mb-2">{r.title}</h3>
                <p className={`text-sm mb-5 leading-relaxed ${r.tone === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{r.desc}</p>
                <a href={guideHref(r.key)} target="_blank" rel="noopener noreferrer" className={`mt-auto inline-flex items-center gap-1.5 text-sm font-black ${r.tone === 'dark' ? 'text-[#f2c537]' : 'text-[#075d63]'}`}>
                  {r.cta} <ArrowRight size={15} />
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
          <h2 className="text-2xl md:text-4xl font-black mb-6">Find your “aha” moment with Gaurav Sir.</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Physics (dark, featured) — verified playlist */}
            <div className="rounded-2xl p-6 bg-[#101821] text-white flex flex-col justify-between min-h-[200px]">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#2dd4bf]">01 / Physics</span>
                <h3 className="text-2xl font-black mt-2 leading-tight">See the idea.<br />Then solve it.</h3>
              </div>
              <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black text-sm px-5 py-2.5 rounded-xl hover:brightness-105 transition-all self-start">
                <Youtube size={16} /> Watch Physics Playlist
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Chemistry */}
              <div className="rounded-2xl p-6 bg-[#e9efe9] text-[#101821] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#075d63]">Chemistry</span>
                  <FlaskConical size={22} className="text-[#075d63] mt-3" />
                </div>
                <button onClick={() => requestSubject('Chemistry')} className="mt-4 inline-flex items-center gap-1 text-xs font-black text-[#075d63] self-start hover:underline">Request this subject <ArrowRight size={13} /></button>
              </div>
              {/* Mathematics */}
              <div className="rounded-2xl p-6 bg-[#f2c537] text-[#101821] flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#101821]/60">Mathematics</span>
                  <Sigma size={22} className="mt-3" />
                </div>
                <button onClick={() => requestSubject('Mathematics')} className="mt-4 inline-flex items-center gap-1 text-xs font-black self-start hover:underline">Request this subject <ArrowRight size={13} /></button>
              </div>
              {/* Biology (full width) */}
              <div className="sm:col-span-2 rounded-2xl p-6 bg-[#087C70] text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Biology</span>
                  <Leaf size={22} className="text-[#f2c537] mt-2" />
                </div>
                <button onClick={() => requestSubject('Biology')} className="inline-flex items-center gap-1 text-xs font-black text-[#f2c537] hover:underline">Request this subject <ArrowRight size={13} /></button>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">Physics links to the verified playlist. The other subject actions share your interest — they are not access to unavailable lessons.</p>
        </div>
      </section>

      {/* ===== Make each lesson count ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
          <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-5">Make each lesson count.</div>
          <div className="grid sm:grid-cols-3 gap-6">
            {LESSON_LOOP.map((s) => (
              <div key={s.t}>
                <div className="font-black text-lg mb-1">{s.t}</div>
                <div className="text-sm text-slate-500 leading-relaxed">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== For students + parents ===== */}
      <section className="px-5 md:px-10 lg:px-12 pb-14">
        <div className="max-w-[1280px] mx-auto rounded-3xl bg-gradient-to-br from-[#083a33] to-[#101821] text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c537]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#f2c537] mb-2"><Lightbulb size={13} /> For students + parents</div>
            <h2 className="text-2xl md:text-3xl font-black leading-tight">Learning starts with understanding.<br /><span className="text-[#2dd4bf]">Not a course commitment.</span></h2>
            <p className="text-slate-300 text-sm max-w-lg mt-2">Start with Gaurav Sir’s Physics lessons and our short study guides. Share your interests to help us understand what students need next.</p>
          </div>
          <button onClick={scrollToForm} className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-[#f2c537] text-[#101821] font-black px-6 py-3.5 rounded-xl hover:brightness-105 transition-all">
            Share My Learning Interests <ArrowRight size={16} />
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
                {openFaq === i && (
                  <div className="flex items-start gap-3 pb-4 -mt-1">
                    <img src="/gaurav-face.webp" alt="Gaurav Babu Sir" referrerPolicy="no-referrer" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0" />
                    <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Submit thank-you popup (shown only after the response is saved) ===== */}
      {thanksOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setThanksOpen(false)} />
          <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl p-7 text-center">
            <button onClick={() => setThanksOpen(false)} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200">
              <X size={18} />
            </button>
            <div className="w-14 h-14 rounded-full bg-[#075d63]/10 text-[#075d63] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-black text-[#101821] mb-2">Thank you</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Your interests have been shared with GAME. You can continue learning through Gaurav Sir’s available Physics lessons on YouTube.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={playlistUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f2c537] text-[#101821] font-black px-5 py-3 rounded-xl hover:brightness-105 transition-all">
                <Youtube size={17} /> Watch Physics on YouTube
              </a>
              <button onClick={() => setThanksOpen(false)} className="flex-1 inline-flex items-center justify-center font-bold text-slate-600 border border-slate-200 px-5 py-3 rounded-xl hover:bg-slate-50 transition-all">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
