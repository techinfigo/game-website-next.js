'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Lock, Loader2, FileText, Check, ShieldCheck,
  ArrowLeft, ArrowRight, MessageCircle, ChevronRight, Eye, BookOpen, FolderDown
} from 'lucide-react';
import { goToPortal } from '@/lib/portalHandoff';

const WHATSAPP = 'https://wa.me/919027615394';

interface PdfMeta {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  price: number;
  isFree: boolean;
  examTag: string;
  branch: string;
  subject: string;
  resourceType: string;
  pages: number | null;
  language: string;
  sampleUrl: string;
  topics: string[];
  images: string[];
  purchaseIncludes: string[];
  resourceDetails: string[];
}

const DEFAULT_INCLUDES = [
  'Full version of this resource',
  'Access in My Downloads',
  'Download after confirmed payment',
  'No course app required',
];

function priceLabel(n: number) {
  return n > 0 ? `₹${n.toLocaleString('en-IN')}` : 'Free';
}

function tagList(s: string): string[] {
  return (s || '').split(/[,/|]/).map((x) => x.trim()).filter(Boolean);
}

const FAQS = [
  { q: 'Can I preview the whole PDF?', a: 'One selected sample page is free; the remaining pages unlock after purchase.' },
  { q: 'Where will I receive the PDF?', a: 'Your purchased file appears in “My Downloads” after your payment is confirmed.' },
  { q: 'Is this a course or a PDF?', a: 'This purchase is for the listed PDF only — not a course or mock test series.' },
];

export default function PdfProductPage({ id }: { id: string }) {
  const [pdf, setPdf] = useState<PdfMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    let cancelled = false;
    fetch(`/api/pdf-meta?id=${encodeURIComponent(id)}`)
      .then(async (r) => {
        const data = await r.json().catch(() => ({}));
        if (cancelled) return;
        if (!r.ok || !data?.pdf) { setNotFound(true); return; }
        setPdf(data.pdf as PdfMeta);
      })
      .catch(() => { if (!cancelled) setNotFound(true); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  const [redirecting, setRedirecting] = useState<'buy' | 'downloads' | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const goBuy = () => { setRedirecting('buy'); goToPortal(`/library?buy=${id}`); };
  const goDownloads = () => { setRedirecting('downloads'); goToPortal('/purchases'); };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f3f7f5] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <Loader2 className="w-8 h-8 animate-spin text-[#075d63]" />
          <p className="text-sm font-medium">Loading resource…</p>
        </div>
      </div>
    );
  }

  if (notFound || !pdf) {
    return (
      <div className="min-h-screen bg-[#f3f7f5] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200">
            <BookOpen size={28} className="text-slate-300" />
          </div>
          <h1 className="text-xl font-black text-slate-900 mb-1">Resource not available</h1>
          <p className="text-slate-500 text-sm mb-6">This PDF may have been removed or is no longer on sale.</p>
          <Link href="/resources" className="inline-flex items-center gap-2 bg-[#075d63] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#054a4f]">
            <ArrowLeft size={16} /> Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const crumbs = [pdf.examTag && tagList(pdf.examTag)[0], pdf.branch, pdf.subject].filter(Boolean) as string[];
  const tags = Array.from(new Set([...tagList(pdf.examTag), pdf.branch, pdf.resourceType || 'PDF'].filter(Boolean)));

  // Gallery = cover thumbnail + any admin-added images, de-duplicated.
  const gallery = Array.from(new Set([pdf.thumbnailUrl, ...pdf.images].filter(Boolean)));
  const activeSrc = gallery[Math.min(activeImg, gallery.length - 1)] || pdf.thumbnailUrl;
  // Editable lists fall back to sensible defaults when admin leaves them blank.
  const includes = pdf.purchaseIncludes.length ? pdf.purchaseIncludes : DEFAULT_INCLUDES;

  const PurchasePanel = (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
      <div className="flex items-start gap-3 mb-4">
        {pdf.thumbnailUrl ? (
          <img src={pdf.thumbnailUrl} alt="" referrerPolicy="no-referrer" className="w-16 h-20 object-cover rounded-lg border border-slate-100" />
        ) : (
          <div className="w-16 h-20 rounded-lg bg-[#075d63]/10 flex items-center justify-center text-[#075d63]"><FileText size={22} /></div>
        )}
        <div className="min-w-0">
          <h2 className="font-black text-slate-900 leading-snug line-clamp-2">{pdf.title}</h2>
          <p className="text-xs text-slate-500 mt-1">{crumbs.join(' / ') || pdf.category}</p>
          <p className="text-[11px] text-slate-400 mt-0.5">Digital PDF resource</p>
        </div>
      </div>

      <div className="py-4 border-y border-slate-100">
        <div className="text-3xl font-black text-slate-900">{priceLabel(pdf.price)}</div>
        <div className="text-[11px] text-slate-400 mt-0.5">One-time purchase on this website</div>
      </div>

      <button
        onClick={goBuy}
        disabled={redirecting === 'buy'}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-[#075d63] text-white font-black py-3.5 rounded-xl hover:bg-[#f2c537] hover:text-black transition-all disabled:opacity-70"
      >
        {redirecting === 'buy'
          ? <><Loader2 size={16} className="animate-spin" /> Taking you to checkout…</>
          : <><Lock size={16} /> Unlock Full PDF{pdf.price > 0 ? ` – ${priceLabel(pdf.price)}` : ''}</>}
      </button>

      <button
        onClick={goDownloads}
        disabled={redirecting === 'downloads'}
        className="mt-2 w-full inline-flex items-center justify-center gap-2 text-[#075d63] font-bold py-2.5 rounded-xl border border-[#075d63]/30 hover:bg-[#075d63]/5 text-sm transition-all disabled:opacity-70"
      >
        {redirecting === 'downloads'
          ? <><Loader2 size={15} className="animate-spin" /> Opening…</>
          : <><FolderDown size={15} /> Already purchased? Open My Downloads</>}
      </button>

      <div className="mt-5 space-y-2.5">
        <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">Your purchase includes</div>
        {includes.map((t) => (
          <div key={t} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
            <Check size={15} className="text-[#075d63] shrink-0" /> {t}
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <Link href="/refund" className="font-bold text-slate-500 hover:text-[#075d63] inline-flex items-center gap-1">
          Purchase &amp; refund policy <ChevronRight size={13} />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f3f7f5] font-sans text-slate-900 pb-24 lg:pb-0">
      {/* Top bar */}
      <div className="bg-slate-900 text-white pt-24 pb-10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <nav className="text-xs text-slate-400 mb-4 flex flex-wrap items-center gap-1.5">
            <Link href="/resources" className="hover:text-white">Resources</Link>
            {crumbs.map((c, i) => <span key={i} className="flex items-center gap-1.5"><ChevronRight size={12} /> {c}</span>)}
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2c537]/15 border border-[#f2c537]/30 mb-3">
            <Eye size={13} className="text-[#f2c537]" />
            <span className="text-[11px] font-black uppercase tracking-widest text-[#f2c537]">Preview before you buy</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight max-w-3xl">{pdf.title}</h1>
          {pdf.description && <p className="text-slate-300 mt-3 max-w-2xl">{pdf.description}</p>}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 -mt-6">
        <div className="grid lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* ===== Preview viewer ===== */}
          <div className="space-y-6">
            {/* Image gallery (admin-added resource images) */}
            {gallery.length > 1 && (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <span className="text-xs font-black text-slate-600 flex items-center gap-2"><Eye size={14} className="text-[#075d63]" /> Resource images</span>
                </div>
                <div className="p-4 md:p-6">
                  <div className="relative w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-50 flex items-center justify-center">
                    <img src={activeSrc} alt={pdf.title} referrerPolicy="no-referrer" className="w-full object-contain max-h-[480px]" />
                  </div>
                  <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                    {gallery.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImg(i)}
                        aria-label={`Image ${i + 1}`}
                        className={`shrink-0 w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? 'border-[#075d63]' : 'border-slate-200 hover:border-[#075d63]/40'}`}
                      >
                        <img src={src} alt="" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="text-xs font-black text-slate-600 flex items-center gap-2"><FileText size={14} className="text-[#075d63]" /> PDF Preview · Free sample page 1</span>
                <span className="text-[11px] text-slate-400">Paid PDF</span>
              </div>

              {/* Free sample page */}
              <div className="bg-slate-100 p-4 md:p-6">
                {pdf.sampleUrl ? (
                  <div className="relative w-full rounded-lg overflow-hidden border border-slate-200 bg-white" style={{ aspectRatio: '1 / 1.3' }}>
                    <iframe
                      src={`${pdf.sampleUrl}#toolbar=0&navpanes=0&view=FitH`}
                      title="Free sample page"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ) : pdf.thumbnailUrl ? (
                  <div className="relative w-full rounded-lg overflow-hidden border border-slate-200 bg-white">
                    <img src={pdf.thumbnailUrl} alt={pdf.title} referrerPolicy="no-referrer" className="w-full object-contain max-h-[520px] mx-auto" />
                    <div className="absolute top-2 left-2 bg-white/90 text-[10px] font-black text-slate-500 px-2 py-0.5 rounded">SAMPLE PAGE</div>
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-slate-400 bg-white rounded-lg border border-dashed border-slate-200">
                    <FileText size={32} className="mb-2" />
                    <p className="text-sm font-medium">Sample page coming soon</p>
                  </div>
                )}
                <p className="text-[11px] text-slate-500 mt-2 font-medium">You are viewing 1 free sample page. Pinch / zoom is available on the sample.</p>
              </div>

              {/* Locked continuation (blurred dummy placeholder — never the real file) */}
              <div className="relative border-t border-slate-100">
                <div className="p-6 md:p-10 select-none" aria-hidden="true" style={{ filter: 'blur(6px)' }}>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="h-3.5 bg-slate-200 rounded mb-3" style={{ width: `${70 + ((i * 7) % 28)}%` }} />
                  ))}
                  <div className="h-24 bg-slate-200/70 rounded-xl my-5" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-3.5 bg-slate-200 rounded mb-3" style={{ width: `${62 + ((i * 11) % 32)}%` }} />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white flex flex-col items-center justify-center text-center px-6">
                  <div className="w-14 h-14 rounded-full bg-[#075d63]/10 text-[#075d63] flex items-center justify-center mb-4"><Lock size={24} /></div>
                  <h3 className="text-lg md:text-xl font-black text-slate-900">Ready for the complete resource?</h3>
                  <p className="text-slate-500 text-sm mt-1 max-w-sm">You have seen the sample. Unlock the full PDF to continue.</p>
                  <button onClick={goBuy} disabled={redirecting === 'buy'} className="mt-5 inline-flex items-center gap-2 bg-[#075d63] text-white font-black px-6 py-3 rounded-xl hover:bg-[#f2c537] hover:text-black transition-all disabled:opacity-70">
                    {redirecting === 'buy'
                      ? <><Loader2 size={16} className="animate-spin" /> Taking you to checkout…</>
                      : <><Lock size={16} /> Unlock Full PDF{pdf.price > 0 ? ` – ${priceLabel(pdf.price)}` : ''}</>}
                  </button>
                  <p className="text-[11px] text-slate-400 mt-3">Paid pages remain locked until payment is confirmed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Sticky purchase panel (desktop) ===== */}
          <div className="lg:sticky lg:top-24 space-y-4">
            {PurchasePanel}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900 mb-1"><ShieldCheck size={16} className="text-[#075d63]" /> Have a question before buying?</div>
              <p className="text-xs text-slate-500 mb-3">Ask us about syllabus coverage, PDF access or payment support.</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-sm hover:border-[#075d63] hover:text-[#075d63] transition-all">
                <MessageCircle size={15} /> Contact GAME Support
              </a>
            </div>
          </div>
        </div>

        {/* ===== Trust sections (full width) ===== */}
        <div className="mt-8 grid lg:grid-cols-[1fr_340px] gap-6 items-start">
          <div className="space-y-6">
            {/* Know exactly what you are getting */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-black text-slate-900 mb-4">Know exactly what you are getting</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-2">Resource details</div>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {pdf.resourceDetails.length ? (
                      pdf.resourceDetails.map((d, i) => (
                        <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> {d}</li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> Format: PDF (digital download)</li>
                        {pdf.pages ? <li className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> {pdf.pages} pages</li> : null}
                        {pdf.language ? <li className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> Language: {pdf.language}</li> : null}
                        {crumbs.length ? <li className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> {crumbs.join(' · ')}</li> : null}
                        <li className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> Access in My Downloads after payment</li>
                      </>
                    )}
                  </ul>
                </div>
                {pdf.topics.length > 0 && (
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-2">Topics covered</div>
                    <ul className="space-y-1.5 text-sm text-slate-600">
                      {pdf.topics.map((t, i) => <li key={i} className="flex items-center gap-2"><Check size={14} className="text-[#075d63]" /> {t}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-black text-slate-900 mb-4">Before you unlock</h2>
              <div className="divide-y divide-slate-100">
                {FAQS.map((f) => (
                  <div key={f.q} className="py-3">
                    <div className="font-bold text-slate-900 text-sm">{f.q}</div>
                    <div className="text-sm text-slate-500 mt-1">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mentor */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <img src="/gaurav-sir.webp" alt="Gaurav Babu Sir" referrerPolicy="no-referrer" className="w-16 h-16 rounded-2xl object-cover border border-slate-100 mb-3" />
            <div className="text-[11px] font-black uppercase tracking-widest text-[#075d63] mb-1">Meet your mentor</div>
            <h3 className="font-black text-slate-900">Gaurav Babu Sir</h3>
            <p className="text-sm text-slate-500 mt-1">Founder, GAME Academy — engineering exam preparation with a focus on clear concepts and structured learning.</p>
            <Link href="/about" className="text-sm font-black text-[#075d63] hover:underline inline-flex items-center gap-1 mt-2">Meet Gaurav Sir <ArrowRight size={13} /></Link>
          </div>
        </div>
      </div>

      {/* ===== Mobile sticky bottom bar ===== */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div>
          <div className="text-lg font-black text-slate-900 leading-none">{priceLabel(pdf.price)}</div>
          <div className="text-[10px] text-slate-400">One-time · this website</div>
        </div>
        <button onClick={goBuy} disabled={redirecting === 'buy'} className="flex-1 max-w-[220px] inline-flex items-center justify-center gap-2 bg-[#075d63] text-white font-black py-3 rounded-xl hover:bg-[#054a4f] disabled:opacity-70">
          {redirecting === 'buy' ? <><Loader2 size={15} className="animate-spin" /> Opening…</> : <><Lock size={15} /> Unlock Full PDF</>}
        </button>
      </div>
    </div>
  );
}
