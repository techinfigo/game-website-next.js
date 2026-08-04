"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Send,
  MessageCircle,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { EXAM_PAGES_DISABLED, DISABLED_EXAMPAGES_IDS } from "./examconfig";
import { useSiteSettings } from "@/hooks/useSiteSettings";

const Footer: React.FC = () => {
  const settings = useSiteSettings();

  return (
    <footer className="bg-black text-slate-400 py-16 font-sans border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" prefetch={false} className="flex items-center group">
              <div className="relative w-32 h-12">
                <Image
                  src="/game-logo.png"
                  unoptimized
                  alt="GAME Academy Logo"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              India&apos;s premier institute for Engineering Services
              preparation. We don&apos;t just teach; we mentor the future
              builders of the nation.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Youtube, url: settings.youtube },
                { Icon: Send, url: settings.telegram },
                { Icon: MessageCircle, url: settings.whatsappChannel },
                { Icon: Linkedin, url: settings.linkedin },
                { Icon: Facebook, url: settings.facebook },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gameTeal hover:text-gameGold transition-all duration-300 group border border-white/5 hover:border-gameTeal"
                >
                  <social.Icon
                    size={16}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="text-gameGold font-black mr-2">|</span> Quick
              Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", page: "about" },
                { label: "Courses", page: "courses" },
                { label: "Results", page: "rankers" },
                { label: "Reviews", page: "reviews" },
                { label: "Job Updates", page: "jobs" },
                { label: "Blogs", page: "blog" },
                { label: "Strategy", page: "hacks" },
                { label: "Resources", page: "resources" },
                { label: "Knowledge Pitara", page: "resources" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={`/${link.page}`}
                    prefetch={false}
                    className="text-sm hover:text-gameGold transition-colors flex items-center gap-1 group w-full text-left"
                  >
                    <ChevronRight
                      size={12}
                      className="text-gameTeal group-hover:text-gameGold group-hover:translate-x-0.5 transition-all"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 flex items-center">
              <span className="text-gameGold font-black mr-2">|</span> Popular
              Courses
            </h4>
            <ul className="space-y-3">
              {[
                { label: "GATE", page: "gate" },
                { label: "ESE", page: "ese" },
                { label: "PSUs / R&D", page: "psu" },
                { label: "SSC JE", page: "ssc" },
                { label: "RRB JE", page: "rrb" },
                { label: "State AE/JE", page: "state" },
                { label: "IIT-JEE / NEET", page: "iit" },
                { label: "Non Tech", page: "nontech" },
                { label: "9th - 12th", page: "school" },
              ].map((item, i) => {
                const isPageDisabled = EXAM_PAGES_DISABLED && DISABLED_EXAMPAGES_IDS.includes(item.page);
                const commonClasses = "text-sm hover:text-gameGold transition-colors flex items-center gap-2 group w-full text-left";
                const innerContent = (
                  <>
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-gameGold transition-colors"></span>
                    {item.label}
                  </>
                );

                return (
                  <li key={i}>
                    {isPageDisabled ? (
                      <button
                        type="button"
                        onClick={() => {
                          window.dispatchEvent(
                            new CustomEvent("show-coming-soon", {
                              detail: { examName: item.label },
                            }),
                          );
                        }}
                        className={commonClasses}
                      >
                        {innerContent}
                      </button>
                    ) : (
                      <Link
                        href={`/${item.page}`}
                        prefetch={false}
                        className={commonClasses}
                      >
                        {innerContent}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                <span className="text-gameGold font-black mr-2">|</span> Contact
                Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <MapPin
                    size={18}
                    className="text-gameTeal mt-0.5 shrink-0 group-hover:text-gameGold transition-colors"
                  />
                  <span className="text-sm text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                    {settings.address}
                  </span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone
                    size={18}
                    className="text-gameTeal shrink-0 group-hover:text-gameGold transition-colors"
                  />
                  <a
                    href={`tel:${settings.phone}`}
                    className="text-sm text-white font-medium group-hover:text-gameGold transition-colors"
                  >
                    {settings.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Mail
                    size={18}
                    className="text-gameTeal shrink-0 group-hover:text-gameGold transition-colors"
                  />
                  <a
                    href={`mailto:${settings.email}`}
                    className="text-sm text-white font-medium group-hover:text-gameGold transition-colors"
                  >
                    {settings.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App - Restructured */}
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-4 opacity-80 flex items-center">
                <span className="text-gameGold font-black mr-2">|</span>{" "}
                Download the App
              </h5>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={settings.androidAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-2.5 rounded-xl border border-white/10 transition-all group"
                >
                  <svg
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-5 h-5 text-white group-hover:text-gameGold transition-colors shrink-0"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-127.3 60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">
                      GET IT ON
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-gameGold transition-colors">
                      Google Play
                    </span>
                  </div>
                </a>
                <a
                  href={settings.iosAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-2.5 rounded-xl border border-white/10 transition-all group relative"
                >
                  <svg
                    viewBox="0 0 384 512"
                    fill="currentColor"
                    className="w-5 h-5 text-white group-hover:text-gameGold transition-colors shrink-0"
                  >
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-73.7-114.8-31.7-131.8zM232.1 56.9c20.7-25.2 34.2-59.8 30.3-94.5-29.9 1.2-66.1 20.3-87.5 45.3-19.2 22.3-35.9 57.7-31.4 91.4 33.1 2.6 67.9-18.9 88.6-42.2z" />
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">
                      Download on
                    </span>
                    <span className="text-xs font-bold text-white group-hover:text-gameGold transition-colors">
                      App Store
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>&copy; 2026 GAME Academy. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>
              Developed by{" "}
              <a
                href="https://techinfigo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gameGold hover:text-white transition-colors font-bold"
              >
                TECHINFIGO
              </a>
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              prefetch={false}
              className="hover:text-gameGold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              prefetch={false}
              className="hover:text-gameGold transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/refund"
              prefetch={false}
              className="hover:text-gameGold transition-colors"
            >
              Refund Policy
            </Link>
            <Link
              href="/takedown"
              prefetch={false}
              className="hover:text-gameGold transition-colors"
            >
              Takedown Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
