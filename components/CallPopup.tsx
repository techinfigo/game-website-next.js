'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { X, Phone, Copy, Check, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CallPopupProps {
  /** Phone number to display / dial. Accepts spaced or raw formats. */
  phone?: string;
  /** Controls visibility. */
  isOpen: boolean;
  /** Called when the user dismisses the popup. */
  onClose: () => void;
  /** Availability line shown under the number. Pass null to hide it. */
  availability?: string | null;
}

export const DEFAULT_PHONE = '+917668518602';

/** Strips everything except digits and a leading + — safe for a tel: href. */
export const toDialable = (phone: string) => {
  const digits = phone.replace(/[^\d]/g, '');
  return phone.trim().startsWith('+') ? `+${digits}` : digits;
};

/**
 * True for touch phones/tablets, where tel: actually opens a dialer.
 * Must only be called from an event handler — it touches window/navigator,
 * so calling it during render would break SSR and hydration.
 */
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;

  try {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return true;
  } catch {
    /* matchMedia unsupported — fall through to the checks below */
  }

  if (typeof navigator !== 'undefined' && /Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    return true;
  }

  return window.innerWidth < 768;
};

/**
 * Mobile taps go straight to the dialer; desktop clicks open the popup,
 * because a bare tel: link does nothing in most desktop browsers.
 */
export const triggerCall = (phone: string | undefined, openPopup: () => void) => {
  const number = phone && phone.trim() !== '' ? phone : DEFAULT_PHONE;

  if (isMobileDevice()) {
    window.location.href = `tel:${toDialable(number)}`;
    return;
  }

  openPopup();
};

/** Renders +917668518602 as "+91 76685 18602"; leaves other formats alone. */
const toDisplay = (phone: string) => {
  const dialable = toDialable(phone);
  const match = dialable.match(/^\+91(\d{5})(\d{5})$/);
  if (match) return `+91 ${match[1]} ${match[2]}`;
  return phone.trim();
};

const copyText = async (text: string) => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path below */
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
};

const CallPopup: React.FC<CallPopupProps> = ({
  phone = DEFAULT_PHONE,
  isOpen,
  onClose,
  availability = 'Available 10 AM - 7 PM',
}) => {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const number = phone && phone.trim() !== '' ? phone : DEFAULT_PHONE;
  const dialable = toDialable(number);
  const display = toDisplay(number);

  // Close on Escape + lock background scroll while open.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Drop the "Copied!" state whenever the popup closes.
  useEffect(() => {
    if (!isOpen) setCopied(false);
  }, [isOpen]);

  useEffect(() => () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
  }, []);

  const handleCopy = useCallback(async () => {
    const ok = await copyText(dialable);
    if (!ok) return;

    setCopied(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setCopied(false), 2000);
  }, [dialable]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 antialiased"
          role="dialog"
          aria-modal="true"
          aria-labelledby="call-popup-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-pointer"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            className="relative z-10 w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 p-8 flex flex-col items-center text-center"
          >
            {/* Ribbon accent */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#075d63] to-[#f2c537]" />

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Glowing Icon */}
            <div className="relative mb-5 mt-2">
              <div className="absolute inset-0 bg-[#075d63]/10 rounded-full blur-xl scale-125" />
              <div className="relative w-16 h-16 bg-gradient-to-tr from-[#075d63] to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#075d63]/20">
                <Phone size={28} />
              </div>
            </div>

            <h3 id="call-popup-title" className="text-2xl font-black text-slate-900 mb-1 tracking-tight">
              Call Us
            </h3>
            <p className="text-slate-500 text-xs font-medium mb-4">
              Talk to our academic counselors
            </p>

            {/* The number itself */}
            <a
              href={`tel:${dialable}`}
              className="block w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-3 mb-3 text-2xl font-black text-[#075d63] tracking-tight select-all break-all hover:border-[#075d63]/40 transition-colors"
            >
              {display}
            </a>

            {availability && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f2c537]/15 border border-[#f2c537]/30 rounded-full mb-6">
                <Clock size={12} className="text-[#8a6d0b]" />
                <span className="text-[10px] font-black text-[#8a6d0b] uppercase tracking-wider">
                  {availability}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="w-full flex flex-col gap-2.5">
              <a
                href={`tel:${dialable}`}
                className="w-full bg-[#075d63] text-white py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#043c40] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#075d63]/15 flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Call Now
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className={`w-full py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  copied
                    ? 'bg-[#075d63]/5 border-[#075d63]/30 text-[#075d63]'
                    : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50 hover:-translate-y-0.5'
                }`}
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy Number
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CallPopup;
