'use client';

import React from 'react';
import { Phone, Smartphone, MessageCircle, Apple, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSiteSettings } from '@/hooks/useSiteSettings';

const FloatingActions: React.FC = () => {
  const settings = useSiteSettings();

  const actions = [
    {
      id: 'whatsapp',
      icon: (
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'bg-[#25D366]',
      glow: 'shadow-[#25D366]/40',
      label: 'WhatsApp',
      href: 'https://wa.me/919027615394',
      pulse: true
    },
    {
      id: 'call',
      icon: <Phone size={20} />,
      color: 'bg-gameTeal',
      glow: 'shadow-gameTeal/40',
      label: 'Call Us',
      href: `tel:${settings.phone}`,
    },
    {
      id: 'android',
      icon: (
        <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-127.3 60.1-60.1L104.6 499z" />
        </svg>
      ),
      color: 'bg-slate-800',
      glow: 'shadow-slate-800/40',
      label: 'Android App',
      href: settings.androidAppLink,
    },
    {
      id: 'ios',
      icon: (
        <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-73.7-114.8-31.7-131.8zM232.1 56.9c20.7-25.2 34.2-59.8 30.3-94.5-29.9 1.2-66.1 20.3-87.5 45.3-19.2 22.3-35.9 57.7-31.4 91.4 33.1 2.6 67.9-18.9 88.6-42.2z" />
        </svg>
      ),
      color: 'bg-slate-900',
      glow: 'shadow-slate-900/40',
      label: 'iOS App',
      href: settings.iosAppLink,
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2.5 items-end">
      {actions.map((action, index) => (
        <motion.a
          key={action.id}
          href={action.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 20, opacity: 0, scale: 0.6 }}
          animate={{ x: 0, opacity: 1, scale: 0.8 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ 
            scale: 1.1, 
            opacity: 1,
            transition: { duration: 0.2 }
          }}
          className={`
            ${action.color} text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center 
            group relative transition-all duration-300 border border-white/20 backdrop-blur-sm
            hover:${action.glow} hover:shadow-2xl
          `}
          title={action.label}
        >
          {/* Pulse Effect for WhatsApp */}
          {action.pulse && (
            <span className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-20 group-hover:opacity-40"></span>
          )}
          
          <div className="relative z-10">
            {action.icon}
          </div>
          
          {/* Label on hover */}
          <span className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-bold rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-all duration-300 translate-x-4 group-hover:translate-x-0 border border-white/10">
            {action.label}
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900/90 rotate-45"></div>
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingActions;
