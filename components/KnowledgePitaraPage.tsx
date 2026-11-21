'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useResources, Resource } from '@/hooks/useResources';
import { usePaidPdfs } from '@/hooks/usePaidPdfs';
import {
  BookOpen, FileText, Video, PenTool, Sparkles, Layout,
  ArrowRight, Download, Search, SlidersHorizontal,
  X, Eye, ShoppingBag, Layers, PlayCircle, RotateCcw, Package
} from 'lucide-react';

// Canonical resource-type labels (approved design).
const CANON_TYPES = ['Revision Notes', 'Lecture Notes', 'Formula Sheets', 'Question Banks', 'PYQ Booklets', 'Videos'] as const;

// Classify any resource into a canonical type label.
function rtypeOf(typeStr?: string, category?: string, explicit?: string): string {
  const e = (explicit || '').trim().toLowerCase();
  if (e) {
    const hit = CANON_TYPES.find((c) => c.toLowerCase() === e || c.toLowerCase().startsWith(e));
    if (hit) return hit;
  }
  const t = `${typeStr || ''} ${category || ''} ${explicit || ''}`.toLowerCase();
  if (t.includes('video')) return 'Videos';
  if (t.includes('formula')) return 'Formula Sheets';
  if (t.includes('pyq') || t.includes('previous year') || t.includes('paper')) return 'PYQ Booklets';
  if (t.includes('lecture')) return 'Lecture Notes';
  if (t.includes('question') || t.includes('qbank') || t.includes('practice')) return 'Question Banks';
  if (t.includes('note') || t.includes('revision') || t.includes('strategy') || t.includes('roadmap')) return 'Revision Notes';
  return 'PDF';
}

function iconForType(rtype: string) {
  switch (rtype) {
    case 'Videos': return Video;
    case 'Formula Sheets': return PenTool;
    case 'PYQ Booklets': return BookOpen;
    case 'Question Banks': return Layout;
    default: return FileText;
  }
}

// Format a price. Accepts number or string; a bare number gets a ₹ prefix.
function formatPrice(p?: string | number): string {
  if (p === undefined || p === null || p === '') return '';
  const s = String(p).trim();
  if (!s) return '';
  if (/^\d/.test(s)) return `₹${s}`;
  return s;
}

// Split a tag string like "GATE / Mechanical / SOM" or "GATE, ESE" into parts.
function splitTags(s?: string): string[] {
  return (s || '').split(/[,/|]/).map((x) => x.trim()).filter(Boolean);
}

// Unified catalogue item used by the grid.
interface Item {
  id: string;
  kind: 'free' | 'paid';
  title: string;
  description: string;
  category: string;
  image?: string;
  priceNum: number;       // 0 for free
  priceLabel: string;     // "FREE" or "₹199"
  exam: string;           // first exam tag, for the Exam filter
  examTags: string[];     // all tags for chips
  branch: string;
  subject: string;
  rtype: string;
  openLink: string;       // free: the file/link; paid: buy link (portal for now)
  previewLink: string;    // paid: preview/buy link
}

const ChevronDown = () => (
  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const KnowledgePitaraPage: React.FC = () => {
  const { resources, loading: freeLoading } = useResources();
  const { pdfs: paidPdfs, loading: paidLoading } = usePaidPdfs();
  const loading = freeLoading || paidLoading;

  // ---- Filter state (persisted in the URL) ----
  const [q, setQ] = useState('');
  const [access, setAccess] = useState<'all' | 'free' | 'paid'>('all');
  const [rtype, setRtype] = useState('all');
  const [exam, setExam] = useState('all');
  const [branch, setBranch] = useState('all');
  const [subject, setSubject] = useState('all');
  const [sort, setSort] = useState<'recommended' | 'priceLow' | 'priceHigh'>('recommended');
  const [visible, setVisible] = useState(9);
  const [sheetOpen, setSheetOpen] = useState(false);

  // Read filters from the URL once, on mount.
  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      const p = new URLSearchParams(window.location.search);
      if (p.get('q')) setQ(p.get('q') as string);
      if (p.get('access')) setAccess(p.get('access') as any);
      if (p.get('type')) setRtype(p.get('type') as string);
      if (p.get('exam')) setExam(p.get('exam') as string);
      if (p.get('branch')) setBranch(p.get('branch') as string);
      if (p.get('subject')) setSubject(p.get('subject') as string);
    } catch { /* ignore */ }
  }, []);

  // Keep the URL in step with the filters (shareable, back-button friendly).
  useEffect(() => {
    try {
      const p = new URLSearchParams();
      if (q) p.set('q', q);
      if (access !== 'all') p.set('access', access);
      if (rtype !== 'all') p.set('type', rtype);
      if (exam !== 'all') p.set('exam', exam);
      if (branch !== 'all') p.set('branch', branch);
      if (subject !== 'all') p.set('subject', subject);
      const qs = p.toString();
      window.history.replaceState(null, '', qs ? `?${qs}` : window.location.pathname);
    } catch { /* ignore */ }
  }, [q, access, rtype, exam, branch, subject]);

  // ---- Build the unified item list ----
  const items: Item[] = useMemo(() => {
    const free: Item[] = resources
      .filter((r: Resource) => r.resourceKind !== 'paid')
      .map((r) => {
        const examTags = splitTags(r.examTag);
        return {
          id: `res-${r.id}`,
          kind: 'free' as const,
          title: r.title,
          description: r.description,
          category: r.category || '',
          image: r.image,
          priceNum: 0,
          priceLabel: 'FREE',
          exam: examTags[0] || '',
          examTags,
          branch: r.branch || '',
          subject: r.subject || '',
          rtype: rtypeOf(r.type, r.category),
          openLink: r.fileOrLink || '',
          previewLink: r.fileOrLink || '',
        };
      });

    const paid: Item[] = paidPdfs.map((p) => {
      const examTags = splitTags(p.examTag);
      return {
        id: `pdf-${p.id}`,
        kind: 'paid' as const,
        title: p.title,
        description: p.description,
        category: p.category || 'Premium PDF',
        image: p.thumbnailUrl,
        priceNum: p.price || 0,
        priceLabel: formatPrice(p.price) || 'Paid',
        exam: examTags[0] || '',
        examTags,
        branch: p.branch || '',
        subject: p.subject || '',
        rtype: rtypeOf(p.resourceType, p.category, p.resourceType),
        // Paid items open the on-site product/preview page (Phase 2).
        openLink: `/resources/${p.id}`,
        previewLink: `/resources/${p.id}`,
      };
    });

    return [...paid, ...free];
  }, [resources, paidPdfs]);

  // ---- Derive filter options from real inventory ----
  const examOptions = useMemo(
    () => Array.from(new Set(items.flatMap((i) => i.examTags))).sort(),
    [items]
  );
  const branchOptions = useMemo(
    () => Array.from(new Set(items.map((i) => i.branch).filter(Boolean))).sort(),
    [items]
  );
  const subjectOptions = useMemo(
    () => Array.from(new Set(items.map((i) => i.subject).filter(Boolean))).sort(),
    [items]
  );
  const typeTabs = useMemo(() => {
    const present = new Set(items.map((i) => i.rtype));
    return ['All PDFs', ...CANON_TYPES.filter((t) => present.has(t))];
  }, [items]);

  // ---- Apply filters ----
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    let list = items.filter((i) => {
      if (access !== 'all' && i.kind !== access) return false;
      if (rtype !== 'all' && i.rtype !== rtype) return false;
      if (exam !== 'all' && !i.examTags.some((t) => t.toLowerCase() === exam.toLowerCase())) return false;
      if (branch !== 'all' && i.branch.toLowerCase() !== branch.toLowerCase()) return false;
      if (subject !== 'all' && i.subject.toLowerCase() !== subject.toLowerCase()) return false;
      if (needle) {
        const hay = `${i.title} ${i.description} ${i.category} ${i.examTags.join(' ')} ${i.branch} ${i.subject}`.toLowerCase();
        if (!hay.includes(needle)) return false;
      }
      return true;
    });
    if (sort === 'priceLow') list = [...list].sort((a, b) => a.priceNum - b.priceNum);
    if (sort === 'priceHigh') list = [...list].sort((a, b) => b.priceNum - a.priceNum);
    return list;
  }, [items, q, access, rtype, exam, branch, subject, sort]);

  const shown = filtered.slice(0, visible);

  const activeChips = [
    exam !== 'all' && { key: 'exam', label: exam, clear: () => setExam('all') },
    branch !== 'all' && { key: 'branch', label: branch, clear: () => setBranch('all') },
    subject !== 'all' && { key: 'subject', label: subject, clear: () => setSubject('all') },
    rtype !== 'all' && { key: 'type', label: rtype, clear: () => setRtype('all') },
    access !== 'all' && { key: 'access', label: access === 'free' ? 'Free' : 'Paid', clear: () => setAccess('all') },
    q.trim() && { key: 'q', label: `“${q.trim()}”`, clear: () => setQ('') },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  const resetAll = () => {
    setQ(''); setAccess('all'); setRtype('all'); setExam('all'); setBranch('all'); setSubject('all');
  };

  // A reusable <select> dropdown.
  const Dropdown = ({ label, value, onChange, options, allLabel }: {
    label: string; value: string; onChange: (v: string) => void; options: string[]; allLabel: string;
  }) => (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label={label}
          className="w-full appearance-none bg-white border border-slate-200 rounded-xl pl-3.5 pr-9 py-2.5 text-sm font-bold text-slate-700 shadow-sm cursor-pointer hover:border-[#075d63]/50 focus:outline-none focus:border-[#075d63] focus:ring-2 focus:ring-[#075d63]/10 transition-all"
        >
          <option value="all">{allLabel}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown />
      </div>
    </div>
  );

  const FiltersBody = (
    <div className="space-y-4">
      <Dropdown label="Examination" value={exam} onChange={setExam} options={examOptions} allLabel="All examinations" />
      {branchOptions.length > 0 && (
        <Dropdown label="Engineering branch" value={branch} onChange={setBranch} options={branchOptions} allLabel="All branches" />
      )}
      {subjectOptions.length > 0 && (
        <Dropdown label="Subject" value={subject} onChange={setSubject} options={subjectOptions} allLabel="All subjects" />
      )}
      <div>
        <label className="block text-[11px] font-black uppercase tracking-widest text-slate-400 mb-1.5">Access</label>
        <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-xl">
          {(['all', 'free', 'paid'] as const).map((a) => (
            <button
              key={a}
              onClick={() => setAccess(a)}
              className={`py-2 rounded-lg text-xs font-black capitalize transition-all ${access === a ? 'bg-white shadow text-[#075d63]' : 'text-slate-500 hover:text-slate-700'}`}
            >
              {a === 'all' ? 'All' : a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f7f5] font-sans text-slate-900">
      {/* ===== Hero ===== */}
      <section className="relative pt-28 md:pt-36 pb-28 md:pb-32 overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900 text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#075d63]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f2c537]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Sparkles size={14} className="text-[#f2c537]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#f2c537]">Free + Premium Study PDFs</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-4 leading-[1.05] tracking-tight">
                Your next revision.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a5] via-teal-400 to-[#f2c537]">
                  Made simpler.
                </span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-7 leading-relaxed max-w-xl">
                Notes, formula sheets and question banks for GATE, ESE and JE exams. Find your subject, preview the PDF, then download or buy — all on this website.
              </p>

              {/* Search */}
              <div className="relative max-w-xl">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setVisible(9); }}
                  placeholder="Search subjects or resources, e.g. Strength of Materials"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 text-sm md:text-base font-semibold shadow-xl placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[#075d63]/30"
                />
              </div>
            </motion.div>

            {/* Study your way */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="hidden lg:block bg-white/5 border border-white/10 rounded-[2rem] p-7 backdrop-blur-md"
            >
              <div className="text-[11px] font-black uppercase tracking-[0.3em] text-[#f2c537] mb-5">Study your way</div>
              {[
                { icon: RotateCcw, t: 'Revise', d: 'Concise notes + formula sheets' },
                { icon: PenTool, t: 'Practise', d: 'Subject-wise PDF question banks' },
                { icon: Download, t: 'Access', d: 'Download or buy on the website' },
              ].map((s) => (
                <div key={s.t} className="flex items-start gap-4 py-3 border-t border-white/10 first:border-t-0">
                  <div className="w-10 h-10 rounded-xl bg-[#075d63]/30 text-teal-300 flex items-center justify-center shrink-0"><s.icon size={18} /></div>
                  <div>
                    <div className="font-black text-white">{s.t}</div>
                    <div className="text-sm text-slate-400">{s.d}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Catalogue ===== */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-12 py-10 md:py-14 relative z-20 -mt-14 md:-mt-16">
        <div className="max-w-[1280px] mx-auto">
          {/* Resource-type tabs */}
          <div className="mb-6">
            <h2 className="text-lg md:text-xl font-black text-slate-900 mb-3">Find your study material</h2>
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
              {typeTabs.map((t) => {
                const val = t === 'All PDFs' ? 'all' : t;
                const active = rtype === val;
                return (
                  <button
                    key={t}
                    onClick={() => { setRtype(val); setVisible(9); }}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                      active ? 'bg-[#075d63] text-white border-[#075d63] shadow' : 'bg-white text-slate-600 border-slate-200 hover:border-[#075d63]/40'
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr] gap-6">
            {/* Filter sidebar (desktop) */}
            <aside className="hidden lg:block">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-slate-900 flex items-center gap-2"><SlidersHorizontal size={16} className="text-[#075d63]" /> Filters</span>
                  <button onClick={resetAll} className="text-xs font-bold text-slate-400 hover:text-[#075d63] flex items-center gap-1"><RotateCcw size={12} /> Reset</button>
                </div>
                {FiltersBody}

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-500 mb-2">Looking for live mock tests?</p>
                  <Link href="/#test-series" className="text-sm font-black text-[#075d63] hover:underline inline-flex items-center gap-1">
                    Visit Test Series <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Results */}
            <div>
              {/* Results header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  {/* Mobile filter button */}
                  <button
                    onClick={() => setSheetOpen(true)}
                    className="lg:hidden inline-flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm font-bold text-slate-700 shadow-sm"
                  >
                    <SlidersHorizontal size={15} /> Filters{activeChips.length ? ` (${activeChips.length})` : ''}
                  </button>
                  <p className="text-sm font-bold text-slate-500">
                    {loading ? 'Loading…' : `${filtered.length} ${filtered.length === 1 ? 'resource' : 'resources'}`}
                  </p>
                </div>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as any)}
                    aria-label="Sort resources"
                    className="appearance-none bg-white border border-slate-200 rounded-xl pl-3 pr-8 py-2 text-sm font-bold text-slate-700 shadow-sm cursor-pointer focus:outline-none focus:border-[#075d63]"
                  >
                    <option value="recommended">Sort: Recommended</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                  </select>
                  <ChevronDown />
                </div>
              </div>

              {/* Active filter chips */}
              {activeChips.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  {activeChips.map((c) => (
                    <button key={c.key} onClick={c.clear} className="inline-flex items-center gap-1.5 bg-[#075d63]/10 text-[#075d63] text-xs font-black px-3 py-1.5 rounded-full hover:bg-[#075d63]/20">
                      {c.label} <X size={12} />
                    </button>
                  ))}
                  <button onClick={resetAll} className="text-xs font-bold text-slate-400 hover:text-[#075d63] underline ml-1">Clear all filters</button>
                </div>
              )}

              {/* Grid / states */}
              {loading ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden animate-pulse">
                      <div className="aspect-[4/3] bg-slate-100" />
                      <div className="p-5 space-y-3">
                        <div className="h-3 bg-slate-100 rounded w-1/3" />
                        <div className="h-4 bg-slate-100 rounded w-2/3" />
                        <div className="h-8 bg-slate-100 rounded w-full mt-4" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="py-20 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                    <BookOpen size={28} className="text-slate-300" />
                  </div>
                  <p className="font-black text-slate-900">No matching PDFs</p>
                  <p className="text-sm text-slate-500 mt-1">Try clearing a filter.</p>
                  <button onClick={resetAll} className="mt-4 inline-flex items-center gap-2 bg-[#075d63] text-white text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-[#054a4f]">
                    <RotateCcw size={14} /> Clear filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {shown.map((item, i) => <Card key={item.id} item={item} index={i} />)}
                  </div>

                  {visible < filtered.length && (
                    <div className="flex justify-center mt-10">
                      <button
                        onClick={() => setVisible((v) => v + 9)}
                        className="inline-flex items-center gap-2 bg-white border-2 border-[#075d63] text-[#075d63] font-black px-6 py-3 rounded-xl hover:bg-[#075d63] hover:text-white transition-all"
                      >
                        Load more resources <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* ===== Bundles ===== */}
          <div className="mt-14 bg-gradient-to-br from-[#075d63] to-teal-800 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f2c537]/10 rounded-full blur-3xl" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#f2c537] mb-2">
                  <Package size={14} /> Resource Bundles
                </div>
                <h3 className="text-2xl md:text-3xl font-black mb-2">One subject. A complete revision pack.</h3>
                <p className="text-teal-100 max-w-lg">Group compatible notes, formulas and practice PDFs into a single bundle and save.</p>
              </div>
              <Link href="/resources?type=all" className="shrink-0 inline-flex items-center gap-2 bg-[#f2c537] text-black font-black px-6 py-3.5 rounded-xl hover:brightness-105 transition-all">
                <Layers size={18} /> Explore Bundles
              </Link>
            </div>
          </div>

          {/* ===== Cross links ===== */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Link href="/courses" className="group bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between hover:border-[#075d63]/40 hover:shadow-md transition-all">
              <span className="flex items-center gap-3 font-black text-slate-900"><PlayCircle className="text-[#075d63]" size={22} /> Need classes? Explore Courses</span>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-[#075d63] group-hover:translate-x-1 transition-all" />
            </Link>
            <Link href="/#test-series" className="group bg-white rounded-2xl border border-slate-200 p-6 flex items-center justify-between hover:border-[#075d63]/40 hover:shadow-md transition-all">
              <span className="flex items-center gap-3 font-black text-slate-900"><PenTool className="text-[#075d63]" size={22} /> Need mock tests? Explore Test Series</span>
              <ArrowRight size={18} className="text-slate-400 group-hover:text-[#075d63] group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Mobile filter bottom sheet ===== */}
      {sheetOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSheetOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 max-h-[85vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-black text-slate-900 text-lg">Filters</span>
              <button onClick={() => setSheetOpen(false)} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center"><X size={18} /></button>
            </div>
            {FiltersBody}
            <div className="flex gap-3 mt-6">
              <button onClick={resetAll} className="flex-1 py-3 rounded-xl border border-slate-200 font-bold text-slate-600">Reset</button>
              <button onClick={() => setSheetOpen(false)} className="flex-1 py-3 rounded-xl bg-[#075d63] text-white font-black">Apply filters</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ---- Resource card ----
function Card({ item, index }: { item: Item; index: number }) {
  const isPaid = item.kind === 'paid';
  const Icon = iconForType(item.rtype);
  const open = (url: string) => { if (url) window.open(url, '_blank', 'noopener,noreferrer'); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Cover */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {item.image ? (
          <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#075d63] to-teal-700 text-white/90 gap-2 p-4 text-center">
            <Icon size={40} strokeWidth={1.5} />
            <span className="text-xs font-black uppercase tracking-wider opacity-90 line-clamp-2">{item.title}</span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {isPaid
            ? <span className="bg-[#f2c537] text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">{item.priceLabel}</span>
            : <span className="bg-white/95 text-[#075d63] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">Free</span>}
        </div>
        <div className="absolute top-3 right-3">
          <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur flex items-center gap-1">
            <Icon size={11} /> {item.rtype === 'PDF' ? 'PDF' : item.rtype}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        {(item.exam || item.branch) && (
          <div className="text-[10px] font-black text-[#075d63] uppercase tracking-widest mb-1.5">
            {[item.exam, item.branch].filter(Boolean).join(' / ')}
          </div>
        )}
        <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#075d63] transition-colors">{item.title}</h3>
        {item.description && <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">{item.description}</p>}

        {item.examTags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {item.examTags.slice(0, 3).map((t, k) => (
              <span key={k} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">{t}</span>
            ))}
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-dashed border-slate-200 flex items-center gap-2">
          {isPaid ? (
            <>
              <Link href={item.previewLink} className="shrink-0 inline-flex items-center gap-1.5 text-sm font-black text-[#075d63] border border-[#075d63]/30 rounded-xl px-3 py-2.5 hover:bg-[#075d63]/5 transition-all">
                <Eye size={15} /> Preview
              </Link>
              <Link href={item.openLink} className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-900 text-white text-sm font-black rounded-xl px-3 py-2.5 hover:bg-[#f2c537] hover:text-black transition-all">
                <ShoppingBag size={15} /> View &amp; Buy PDF
              </Link>
            </>
          ) : (
            <button onClick={() => open(item.openLink)} className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#075d63] text-white text-sm font-black rounded-xl px-3 py-2.5 hover:bg-[#f2c537] hover:text-black transition-all">
              <Download size={15} /> Download Free
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default KnowledgePitaraPage;
