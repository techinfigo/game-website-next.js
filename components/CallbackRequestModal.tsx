'use client';

import React, { useState, useEffect } from 'react';
import { X, Loader2, Check, User, Phone, GraduationCap } from 'lucide-react';

type Props = { isOpen: boolean; onClose: () => void; source?: string };

const EXAMS = ['GATE', 'ESE', 'PSUs / R&D', 'SSC-JE', 'RRB-JE', 'State AE/JE', 'Other'];

const CallbackRequestModal: React.FC<Props> = ({ isOpen, onClose, source = 'website' }) => {
  const [form, setForm] = useState({ name: '', phone: '', exam: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) { setStatus('idle'); setError(''); setForm({ name: '', phone: '', exam: '', message: '' }); }
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.phone.trim()) { setError('Please enter your name and phone number.'); return; }
    setStatus('submitting');
    try {
      const res = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data?.error || 'Something went wrong. Please try again.'); setStatus('idle'); return; }
      setStatus('success');
    } catch {
      setError('Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-[#075d63] p-6">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white"><X size={20} /></button>
          <h3 className="text-2xl font-black text-white mb-1">Request a Call Back</h3>
          <p className="text-teal-100 text-sm">Our academic counselors will reach out to you shortly.</p>
        </div>

        {status === 'success' ? (
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
              <Check size={40} strokeWidth={3} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h4>
            <p className="text-slate-500 text-sm mb-6">Sit back and relax — we will call you within 24 hours.</p>
            <button onClick={onClose} className="bg-[#075d63] text-white font-black px-8 py-3 rounded-xl text-sm hover:bg-[#054a4f] transition-all">Done</button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-6 space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><User size={16} /></span>
              <input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Full Name *" className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 focus:border-[#075d63] outline-none" />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">+91</span>
              <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="Phone Number *" className="w-full pl-12 pr-3 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 focus:border-[#075d63] outline-none" />
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><GraduationCap size={16} /></span>
              <select value={form.exam} onChange={(e) => update('exam', e.target.value)} className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 focus:border-[#075d63] outline-none bg-white">
                <option value="">Select Exam / Branch (optional)</option>
                {EXAMS.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </div>

            {error && <p className="text-red-600 text-xs font-bold bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>}

            <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#075d63] text-white font-black py-3.5 rounded-xl text-sm hover:bg-[#054a4f] transition-all flex items-center justify-center gap-2 disabled:opacity-60">
              {status === 'submitting' ? <><Loader2 size={16} className="animate-spin" /> Submitting…</> : <><Phone size={16} /> Request Call Back</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CallbackRequestModal;
