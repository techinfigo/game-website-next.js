'use client';

import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle2, User, Mail, Phone, GraduationCap, MessageSquare } from 'lucide-react';

declare global {
  interface Window { Razorpay?: any }
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') return resolve(false);
    if (window.Razorpay) return resolve(true);
    const s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

type Props = { isOpen: boolean; onClose: () => void };

const EXAMS = ['GATE', 'ESE', 'PSUs / R&D', 'SSC-JE', 'RRB-JE', 'State AE/JE', 'Other'];

const MentorshipModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', branch: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState<null | 'paid' | 'enquiry'>(null);

  useEffect(() => {
    if (isOpen) { setError(''); setDone(null); }
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const markFailed = (leadId: string, reason: string) => {
    try {
      navigator.sendBeacon?.('/api/mentorship/failed', new Blob([JSON.stringify({ leadId, reason })], { type: 'application/json' }));
    } catch {
      fetch('/api/mentorship/failed', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ leadId, reason }) }).catch(() => {});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      setError('Please fill in your name, email and phone.');
      return;
    }
    setLoading(true);
    try {
      const orderRes = await fetch('/api/mentorship/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await orderRes.json();
      if (!orderRes.ok) { setError(data?.error || 'Something went wrong. Please try again.'); setLoading(false); return; }

      // Razorpay not configured yet — lead saved as an enquiry.
      if (data.paymentsDisabled) { setDone('enquiry'); setLoading(false); return; }

      const ok = await loadRazorpay();
      if (!ok || !window.Razorpay) { setError('Could not load the payment window. Please try again.'); setLoading(false); return; }

      const rzp = new window.Razorpay({
        key: data.keyId,
        order_id: data.orderId,
        amount: data.amount,
        currency: data.currency || 'INR',
        name: 'GAME Academy',
        description: '1:1 Mentorship with Gaurav Babu Sir',
        prefill: { name: data.name, email: data.email, contact: data.phone },
        theme: { color: '#075d63' },
        handler: async (resp: any) => {
          setLoading(true);
          try {
            const v = await fetch('/api/mentorship/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                leadId: data.leadId,
                razorpay_order_id: resp.razorpay_order_id,
                razorpay_payment_id: resp.razorpay_payment_id,
                razorpay_signature: resp.razorpay_signature,
              }),
            });
            const vd = await v.json();
            if (v.ok && vd.success) setDone('paid');
            else setError('Payment received but could not be confirmed. Our team will contact you.');
          } catch {
            setError('Payment received but could not be confirmed. Our team will contact you.');
          }
          setLoading(false);
        },
        modal: { ondismiss: () => { markFailed(data.leadId, 'Checkout closed by user'); setLoading(false); } },
      });
      rzp.on('payment.failed', (r: any) => { markFailed(data.leadId, r?.error?.description || 'Payment failed'); });
      rzp.open();
      setLoading(false);
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl max-h-[92vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-[#075d63] p-6 rounded-t-3xl">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white"><X size={22} /></button>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#f2c537]">Personal Guidance</p>
          <h3 className="text-xl font-black text-white mt-1">Book Your 1:1 Mentorship</h3>
          <p className="text-teal-100 text-xs mt-1 font-medium">One-on-one session with Gaurav Babu Sir.</p>
        </div>

        {done ? (
          <div className="p-8 text-center">
            <CheckCircle2 size={56} className="text-[#075d63] mx-auto mb-4" />
            <h4 className="text-lg font-black text-slate-900 mb-2">
              {done === 'paid' ? 'Booking Confirmed! 🎉' : 'Request Received!'}
            </h4>
            <p className="text-slate-600 text-sm font-medium mb-6">
              {done === 'paid'
                ? 'Your payment was successful. A confirmation email is on its way, and our team will reach out to schedule your session.'
                : 'Thank you! Our team will contact you shortly on your phone/email to arrange your 1:1 mentorship.'}
            </p>
            <button onClick={onClose} className="bg-[#075d63] text-white font-black px-8 py-3 rounded-xl text-sm hover:bg-[#054a4f] transition-all">Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <Field icon={<User size={16} />} placeholder="Full Name *" value={form.name} onChange={(v) => update('name', v)} />
            <Field icon={<Mail size={16} />} placeholder="Email Address *" type="email" value={form.email} onChange={(v) => update('email', v)} />
            <Field icon={<Phone size={16} />} placeholder="Phone Number *" type="tel" value={form.phone} onChange={(v) => update('phone', v)} />
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><GraduationCap size={16} /></span>
              <select value={form.branch} onChange={(e) => update('branch', e.target.value)} className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 focus:border-[#075d63] outline-none bg-white">
                <option value="">Select Exam / Branch</option>
                {EXAMS.map((x) => <option key={x} value={x}>{x}</option>)}
              </select>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-4 text-slate-400"><MessageSquare size={16} /></span>
              <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={2} placeholder="Anything you'd like to tell us? (optional)" className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 focus:border-[#075d63] outline-none resize-none" />
            </div>

            {error && <p className="text-red-600 text-xs font-bold bg-red-50 border border-red-100 rounded-lg px-3 py-2">{error}</p>}

            <button type="submit" disabled={loading} className="w-full bg-[#075d63] text-white font-black py-3.5 rounded-xl text-sm hover:bg-[#054a4f] transition-all flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? <><Loader2 size={16} className="animate-spin" /> Please wait…</> : 'Proceed to Pay & Book'}
            </button>
            <p className="text-[10px] text-slate-400 text-center font-medium">Secure payment via Razorpay · You'll get an email confirmation.</p>
          </form>
        )}
      </div>
    </div>
  );
};

function Field({ icon, placeholder, value, onChange, type = 'text' }: { icon: React.ReactNode; placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 text-sm font-bold text-slate-700 focus:border-[#075d63] outline-none" />
    </div>
  );
}

export default MentorshipModal;
