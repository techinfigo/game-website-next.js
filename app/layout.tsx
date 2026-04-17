import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import LoginModalWrapper from '@/components/LoginModalWrapper';

import { AuthProvider } from '@/providers/AuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "GAME Academy | Best Online Coaching for GATE, ESE, SSC-JE & PSUs",
  description: "Join GAME Academy for visualized learning with Gaurav Babu Sir. Top-rated online coaching for GATE, ESE, SSC-JE, and PSU exams with 13+ years of excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen bg-white text-slate-900 selection:bg-gameTeal selection:text-white`}>
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
