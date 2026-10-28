'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useResources, Resource } from '@/hooks/useResources';
import {
  Play, BookOpen, FileText, Video, PenTool, Crown, Sparkles, Layout,
  Filter, ArrowRight, GraduationCap, Download, Loader2
} from 'lucide-react';

const TEAL = '#075d63';
const GOLD = '#f2c537';

// Pick an icon for a resource based on its type/category.
function iconFor(type: string, category: string) {
  const t = `${type} ${category}`.toLowerCase();
  if (t.includes('video')) return Video;
  if (t.includes('pyq') || t.includes('paper')) return BookOpen;
  if (t.includes('note') || t.includes('strategy') || t.includes('roadmap')) return PenTool;
  if (t.includes('test') || t.includes('mock')) return PenTool;
  if (t.includes('pdf')) return FileText;
  return BookOpen;
}

// Show the price in rupees. If the admin typed just a number, prefix ₹;
// if they already wrote "Rs." / "₹" / a currency, leave it as-is.
function formatPrice(p?: string): string {
  if (!p) return '';
  const s = p.trim();
  if (!s) return '';
  if (/^\d/.test(s)) return `₹${s}`;
  return s;
}

const KnowledgePitaraPage: React.FC = () => {
  const { resources, loading } = useResources();
  const [activeTab, setActiveTab] = useState<'all' | 'free' | 'paid'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const freeResources = resources.filter((r) => r.resourceKind !== 'paid');
  const paidResources = resources.filter((r) => r.resourceKind === 'paid');

  const displayed: Resource[] =
    activeTab === 'all' ? resources : activeTab === 'free' ? freeResources : paidResources;

  const videoCount = resources.filter((r) => iconFor(r.type, r.category) === Video).length;
  const pdfCount = resources.filter((r) => `${r.type} ${r.category}`.toLowerCase().includes('pdf')).length;

  const tabs: { id: 'all' | 'free' | 'paid'; label: string; icon: any; count: number }[] = [
    { id: 'all', label: 'All', icon: Layout, count: resources.length },
    { id: 'free', label: 'Free Zone', icon: Sparkles, count: freeResources.length },
    { id: 'paid', label: 'Premium', icon: Crown, count: paidResources.length },
  ];

  const openResource = (r: Resource) => {
    if (r.fileOrLink) window.open(r.fileOrLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-36 overflow-hidden bg-gradient-to-br from-slate-900 via-[#0f172a] to-slate-900 text-white">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#075d63]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f2c537]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                <Sparkles size={14} className="text-[#f2c537]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#f2c537]">Free Learning Resources</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-black mb-5 leading-[1.08] tracking-tight">
                Unlock Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5a5] via-teal-400 to-[#f2c537]">
                  Knowledge Vault
                </span>
              </h1>

              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
                Hand-picked video lectures, notes and papers from GAME Academy mentors — everything you need to crack GATE, ESE, SSC-JE and more.
              </p>

              {/* Tabs */}
              <div className="inline-flex flex-wrap p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl gap-1">
                {tabs.map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 md:px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                        active
                          ? tab.id === 'paid'
                            ? 'bg-[#f2c537] text-black shadow-md'
                            : tab.id === 'free'
                            ? 'bg-[#075d63] text-white shadow-md'
                            : 'bg-white text-slate-900 shadow-md'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <tab.icon size={16} /> {tab.label}
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-black ${active ? 'bg-black/10' : 'bg-white/10'}`}>
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Right stat card */}
            <div className="relative h-[420px] hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative z-30 bg-white rounded-[2.5rem] p-2 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] w-80"
              >
                <div className="bg-slate-50 rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#075d63] to-teal-600 flex items-center justify-center text-white mb-4 shadow-xl shadow-[#075d63]/20">
                    <GraduationCap size={40} />
                  </div>
                  <h3 className="text-slate-900 font-extrabold text-xl mb-1">Start Learning Free</h3>
                  <p className="text-slate-500 text-xs font-medium mb-6">Quality content, zero cost</p>
                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-9 h-9 rounded-full bg-[#075d63]/10 text-[#075d63] flex items-center justify-center"><Video size={16} /></div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Video Lectures</div>
                        <div className="text-sm font-black text-slate-900">{videoCount} series</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <div className="w-9 h-9 rounded-full bg-[#f2c537]/20 text-black flex items-center justify-center"><Download size={16} /></div>
                      <div className="text-left">
                        <div className="text-[10px] font-bold text-slate-400 uppercase">Notes & Papers</div>
                        <div className="text-sm font-black text-slate-900">{pdfCount} downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 md:px-10 lg:px-12 py-16 md:py-20 bg-slate-50 relative z-20 -mt-20 rounded-t-[3rem]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
              <Filter size={20} className="text-[#075d63]" />
              {activeTab === 'all' ? 'All Resources' : activeTab === 'free' ? 'Free Materials' : 'Premium Resources'}
            </h3>
            <span className="text-sm font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              {displayed.length} {displayed.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center text-slate-400 gap-3">
              <Loader2 className="w-8 h-8 animate-spin text-[#075d63]" />
              <p className="text-sm font-medium">Loading resources…</p>
            </div>
          ) : displayed.length === 0 ? (
            <div className="py-24 text-center bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <BookOpen size={28} className="text-slate-300" />
              </div>
              <p className="font-bold text-slate-900">No resources here yet</p>
              <p className="text-sm text-slate-500 mt-1">Check back soon — new material is added regularly.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayed.map((item, i) => {
                const Icon = iconFor(item.type, item.category);
                const isVideo = Icon === Video;
                const isPaid = item.resourceKind === 'paid';
                const tags = (item.examTag || '')
                  .split(',')
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .slice(0, 3);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.3) }}
                    className="group bg-white rounded-[1.75rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#075d63] to-teal-700 text-white/90">
                          <Icon size={48} strokeWidth={1.5} />
                        </div>
                      )}

                      {/* Play overlay for videos */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={22} className="text-[#075d63] fill-[#075d63] ml-0.5" />
                          </div>
                        </div>
                      )}

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        {isPaid ? (
                          <span className="bg-[#f2c537] text-black text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">Premium</span>
                        ) : (
                          <span className="bg-white/95 text-[#075d63] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow">Free</span>
                        )}
                        {isPaid && item.price && (
                          <span className="bg-slate-900 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow">{formatPrice(item.price)}</span>
                        )}
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider backdrop-blur flex items-center gap-1">
                          <Icon size={11} /> {isVideo ? 'Video' : item.type?.toUpperCase() || 'Doc'}
                        </span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-5 flex flex-col flex-grow">
                      {item.category && (
                        <div className="text-[10px] font-black text-[#075d63] uppercase tracking-widest mb-1.5">{item.category}</div>
                      )}
                      <h3 className="text-base font-extrabold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-[#075d63] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-3">{item.description}</p>

                      {tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {tags.map((t, k) => (
                            <span key={k} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">{t}</span>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-4 border-t border-dashed border-slate-200 flex items-center justify-between gap-3">
                        {isPaid ? (
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fee</span>
                            <span className="text-lg font-black text-slate-900">{formatPrice(item.price) || 'Paid'}</span>
                          </div>
                        ) : (
                          <span className="text-xs font-bold text-[#075d63] flex items-center gap-1">
                            <Sparkles size={12} /> Free Access
                          </span>
                        )}
                        <button
                          onClick={() => openResource(item)}
                          className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-sm ${
                            isPaid
                              ? 'bg-slate-900 text-white hover:bg-[#f2c537] hover:text-black'
                              : 'bg-[#075d63] text-white hover:bg-[#f2c537] hover:text-black'
                          }`}
                        >
                          {isPaid ? (
                            <>
                              {item.action || 'Unlock'} <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </>
                          ) : (
                            <>
                              {item.action || (isVideo ? 'Watch Now' : 'Open')}
                              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default KnowledgePitaraPage;
