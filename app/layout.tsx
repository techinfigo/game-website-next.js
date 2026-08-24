import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import LoginModalWrapper from '@/components/LoginModalWrapper';
import FaviconManager from '@/components/FaviconManager';

import { AuthProvider } from '@/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "GAME Academy | Best Online Coaching for GATE, ESE, SSC-JE & PSUs",
  description: "Join GAME Academy for visualized learning with Gaurav Babu Sir. Top-rated online coaching for GATE, ESE, SSC-JE, and PSU exams with 14+ years of excellence.",
};

// Root layout for GAME Academy
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Catch standard error events (including script element loading errors)
                window.addEventListener('error', function(event) {
                  var message = (event && event.message) || '';
                  var target = event && event.target;
                  var isScriptError = target && target.tagName === 'SCRIPT';
                  var src = target && (target.src || target.getAttribute('src') || '');
                  
                  if (
                    message.indexOf('ChunkLoadError') > -1 ||
                    message.indexOf('Loading chunk') > -1 ||
                    message.toLowerCase().indexOf('unexpected token') > -1 ||
                    (isScriptError && (src.indexOf('_next/static/chunks') > -1 || src.indexOf('app/courses/page') > -1))
                  ) {
                    console.warn('Next.js chunk loading error or stale layout script detected, forcing auto-reload...');
                    event.preventDefault();
                    window.location.reload(true);
                  }
                }, true);

                // Catch unhandled promise rejections (Next.js lazy page load promises)
                window.addEventListener('unhandledrejection', function(event) {
                  var reason = event && event.reason;
                  var reasonStr = reason ? (reason.message || reason.toString() || '') : '';
                  
                  if (
                    reasonStr.indexOf('ChunkLoadError') > -1 ||
                    reasonStr.indexOf('Loading chunk') > -1 ||
                    reasonStr.toLowerCase().indexOf('unexpected token') > -1 ||
                    reasonStr.indexOf('Loading CSS chunk') > -1
                  ) {
                    console.warn('Next.js dynamic import chunk promise rejected, forcing auto-reload...');
                    event.preventDefault();
                    window.location.reload(true);
                  }
                });
              }
            `
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-white text-slate-900 selection:bg-gameTeal selection:text-white`}>
        <FaviconManager />
        <AuthProvider>
          <NavbarWrapper />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
          <LoginModalWrapper />
          <FloatingActions />
        </AuthProvider>
      </body>
    </html>
  );
}
