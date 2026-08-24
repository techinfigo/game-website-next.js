
'use client';

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Sparkles, GraduationCap, Trophy, Microscope, 
  Building2, Train, MapPin, Atom, BookOpen, Backpack, Video, 
  MessageSquare, Lightbulb, FileText, Info, Phone, MonitorPlay, Rss
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { EXAM_PAGES_DISABLED, DISABLED_EXAMPAGES_IDS } from './examconfig';
import type { StudentProfile } from '@/providers/AuthProvider';
import { auth } from '@/firebase';

// Student portal lives on its own deployment, so "My Dashboard" leaves the site.
const STUDENT_PORTAL_URL = 'https://game-student-portal.vercel.app';

const getInitials = (name: string): string =>
  name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

// Added isLoggedIn and onLogout to the NavbarProps interface
interface NavbarProps {
  openLogin: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  profile?: StudentProfile;
}

const Navbar: React.FC<NavbarProps> = ({ openLogin, isLoggedIn, onLogout, profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const studentName = profile?.name?.trim() || '';
  const studentPhone = profile?.phone?.trim() || '';
  const studentPhoto = profile?.photoURL?.trim() || '';
  const displayName = studentName || (studentPhone ? studentPhone : 'Student');
  const initials = getInitials(studentName) || 'S';

  const handleLinkClick = () => {
    setIsOpen(false);
    setMobileExpanded(null);
  };

  // "My Dashboard" hands the student's session to the portal instead of making
  // them log in again: swap the website ID token for a custom token, then pass
  // it to the portal as ?sso=. Any failure opens the portal plainly so they can
  // still log in by hand.
  const goToDashboard = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleLinkClick();

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) throw new Error('No signed-in user');

      const idToken = await currentUser.getIdToken();
      const res = await fetch('/api/auth/handoff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      if (!res.ok) throw new Error('Handoff rejected');

      const { token } = await res.json();
      if (!token) throw new Error('Handoff returned no token');

      window.location.href = `${STUDENT_PORTAL_URL}/?sso=${encodeURIComponent(token)}`;
    } catch (_) {
      window.location.href = STUDENT_PORTAL_URL;
    }
  };

  const navItems = [
    {
      name: 'Examination',
      id: 'examination',
      highlight: true,
      layout: 'grid',
      width: 'w-[520px]',
      dropdown: [
        { name: 'GATE', id: 'gate', icon: GraduationCap, desc: 'Graduate Aptitude Test' },
        { name: 'PSUs / R&D', id: 'psu', icon: Microscope, desc: 'Public Sector Jobs' },
        { name: 'ESE', id: 'ese', icon: Trophy, desc: 'Engineering Services' },
        { name: 'SSC-JE', id: 'ssc', icon: Building2, desc: 'Junior Engineer' },
        { name: 'RRB-JE', id: 'rrb', icon: Train, desc: 'Railway Recruitment' },
        { name: 'State AE/JE', id: 'state', icon: MapPin, desc: 'State Services' },
        { name: 'Non-Tech', id: 'nontech', icon: BookOpen, desc: 'General Studies' },
        { name: 'IIT-JEE / NEET', id: 'iit', icon: Atom, desc: 'Entrance Exams' },
        { name: '9th - 12th', id: 'school', icon: Backpack, desc: 'School Foundation' }
      ]
    },
    { name: 'Courses', id: 'courses' },
    { name: 'Results', id: 'rankers' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Job Updates', id: 'jobs' },
    {
      name: 'More',
      id: 'more',
      layout: 'list',
      width: 'w-64',
      dropdown: [
        { name: 'About Us', id: 'about', icon: Info, desc: 'Our Story' },
        { name: 'Strategy', id: 'hacks', icon: Lightbulb, desc: 'Tips & Tricks' },
        { name: 'Resources', id: 'resources', icon: FileText, desc: 'Downloads & Notes' }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md ${
        scrolled ? 'shadow-md py-2 border-b border-slate-100' : 'py-3'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link 
            href="/"
            prefetch={false}
            className="flex items-center cursor-pointer group" 
            onClick={handleLinkClick}
          >
            <div className="relative w-32 h-14 md:w-40 md:h-16 transition-transform group-hover:scale-105">
              <Image 
                src="/game-logo.png" 
                alt="GAME Academy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isHighlight = (item as any).highlight;
              return (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <button 
                      className={`
                        text-sm font-bold transition-all relative flex items-center gap-1.5 py-2
                        ${isHighlight 
                          ? 'px-5 rounded-full border-2 border-[#f2c537] bg-transparent text-slate-900 hover:bg-[#f2c537] hover:text-black hover:-translate-y-0.5' 
                          : `${scrolled ? 'text-slate-600 hover:text-gameTeal' : 'text-slate-700 hover:text-gameTeal'}`
                        }
                      `}
                    >
                      {isHighlight && <Sparkles size={16} className="text-[#d8b32f] group-hover:text-black transition-colors" />}
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link 
                      href={`/${item.id === 'home' ? '' : item.id}`}
                      prefetch={false}
                      onClick={handleLinkClick}
                      className={`
                        text-sm font-bold transition-all relative flex items-center gap-1.5 py-2
                        ${isHighlight 
                          ? 'px-5 rounded-full border-2 border-[#f2c537] bg-transparent text-slate-900 hover:bg-[#f2c537] hover:text-black hover:-translate-y-0.5' 
                          : `${scrolled ? 'text-slate-600 hover:text-gameTeal' : 'text-slate-700 hover:text-gameTeal'}`
                        }
                      `}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gameTeal transition-all w-0 group-hover:w-full`}></span>
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  {item.dropdown && (
                      <AnimatePresence>
                          {activeDropdown === item.name && (
                              <motion.div
                                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                  transition={{ duration: 0.2, ease: "easeOut" }}
                                  className={`absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 p-2 overflow-hidden ${item.width || 'w-64'} z-50`}
                              >
                                  {/* Hover Bridge */}
                                  <div className="absolute -top-4 left-0 w-full h-4 bg-transparent"></div>

                                  <div className={`grid ${
                                      item.layout === 'grid' 
                                      ? (item.id === 'examination' ? 'grid-cols-2 grid-flow-col grid-rows-5 gap-x-4 gap-y-1' : 'grid-cols-2 gap-2') 
                                      : 'grid-cols-1 gap-1'
                                  }`}>
                                      {item.dropdown.map((subItem) => {
                                          const isPageDisabled = EXAM_PAGES_DISABLED && DISABLED_EXAMPAGES_IDS.includes(subItem.id);
                                          const commonClasses = "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group/item hover:bg-slate-50 border border-transparent hover:border-slate-100 text-left w-full";
                                          
                                          const innerContent = (
                                              <>
                                                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                                                      item.highlight && subItem.id === 'gate' 
                                                      ? 'bg-gameTeal text-white shadow-lg shadow-gameTeal/30' 
                                                      : 'bg-slate-100 text-slate-500 group-hover/item:bg-gameTeal group-hover/item:text-white'
                                                  }`}>
                                                      {subItem.icon && <subItem.icon size={20} strokeWidth={1.5} />}
                                                  </div>
                                                  <div>
                                                      <div className="text-sm font-bold text-slate-700 group-hover/item:text-gameTeal transition-colors leading-tight">
                                                          {subItem.name}
                                                      </div>
                                                      {subItem.desc && (
                                                          <div className="text-[10px] font-medium text-slate-400 group-hover/item:text-slate-500 mt-0.5">
                                                              {subItem.desc}
                                                          </div>
                                                      )}
                                                  </div>
                                              </>
                                          );

                                          return isPageDisabled ? (
                                              <button
                                                  key={subItem.name}
                                                  type="button"
                                                  onClick={() => {
                                                      window.dispatchEvent(new CustomEvent('show-coming-soon', { detail: { examName: subItem.name } }));
                                                  }}
                                                  className={commonClasses}
                                              >
                                                  {innerContent}
                                              </button>
                                          ) : (
                                              <Link
                                                  key={subItem.name}
                                                  href={`/${subItem.id}`}
                                                  prefetch={false}
                                                  onClick={() => {
                                                      handleLinkClick();
                                                      setActiveDropdown(null);
                                                  }}
                                                  className={commonClasses}
                                              >
                                                  {innerContent}
                                              </Link>
                                          );
                                      })}
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://online.gameacademy.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gameTeal/20 text-gameTeal hover:text-white hover:bg-gameTeal hover:border-gameTeal px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group/live shadow-sm hover:shadow-md hover:shadow-gameTeal/10"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
              <Video size={16} className="text-gameTeal group-hover/live:text-white group-hover/live:scale-110 transition-all duration-300" />
              <span>Live Class</span>
            </a>

            {isLoggedIn ? (
              <div className="relative group/user">
                <button 
                  aria-label={`Logged in as ${displayName}`}
                  className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all border border-slate-200 bg-gameTeal text-white hover:opacity-90"
                >
                  {studentPhoto ? (
                    <img
                      src={studentPhoto}
                      alt={displayName}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <span className="text-sm font-bold tracking-wide">{initials}</span>
                  )}
                </button>
                
                {/* User Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 invisible group-hover/user:opacity-100 group-hover/user:visible transition-all translate-y-2 group-hover/user:translate-y-0 z-50">
                  <div className="px-4 py-2 border-b border-slate-50 mb-1">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Student Account</p>
                    <p className="text-sm font-bold text-slate-800 truncate mt-0.5">{displayName}</p>
                    {studentPhone && studentName && (
                      <p className="text-xs text-slate-500 truncate">{studentPhone}</p>
                    )}
                  </div>
                  <a 
                    href={STUDENT_PORTAL_URL}
                    onClick={goToDashboard}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-gameTeal transition-colors flex items-center gap-2"
                  >
                    <MonitorPlay size={16} /> My Dashboard
                  </a>
                  <button 
                    onClick={onLogout}
                    className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <X size={16} /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={openLogin}
                className="bg-gameTeal hover:bg-gameTealDark text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-gameTeal/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Student Login
              </button>
            )}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-slate-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl max-h-[85vh] overflow-y-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => {
                const isHighlight = (item as any).highlight;
                return (
                  <div key={item.name}>
                      {item.dropdown ? (
                          <div className="border-b border-slate-50 pb-2">
                              <button 
                                  onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                                  className={`w-full flex items-center justify-between text-lg font-bold py-3 ${isHighlight ? 'text-[#d8b32f]' : 'text-slate-700'}`}
                              >
                                  <span className="flex items-center gap-2">
                                    {isHighlight && <Sparkles size={18} />}
                                    {item.name}
                                  </span>
                                  <ChevronDown size={20} className={`transition-transform ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />
                              </button>
                              <AnimatePresence>
                                  {mobileExpanded === item.name && (
                                      <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: 'auto', opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          className="pl-2 pr-2 pb-2 grid grid-cols-1 gap-2"
                                      >
                                          {item.dropdown.map((subItem) => {
                                              const isPageDisabled = EXAM_PAGES_DISABLED && DISABLED_EXAMPAGES_IDS.includes(subItem.id);
                                              const commonClasses = "flex items-center gap-3 p-3 rounded-xl bg-slate-50 active:bg-slate-100 transition-colors text-left w-full";
                                              
                                              const innerContent = (
                                                  <>
                                                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gameTeal shadow-sm shrink-0">
                                                          {subItem.icon && <subItem.icon size={16} />}
                                                      </div>
                                                      <div>
                                                          <div className="text-sm font-bold text-slate-700">{subItem.name}</div>
                                                          <div className="text-[10px] text-slate-400 font-medium">{subItem.desc}</div>
                                                      </div>
                                                  </>
                                              );

                                              return isPageDisabled ? (
                                                  <button
                                                      key={subItem.name}
                                                      type="button"
                                                      onClick={() => {
                                                          window.dispatchEvent(new CustomEvent('show-coming-soon', { detail: { examName: subItem.name } }));
                                                      }}
                                                      className={commonClasses}
                                                  >
                                                      {innerContent}
                                                  </button>
                                              ) : (
                                                  <Link
                                                      key={subItem.name}
                                                      href={`/${subItem.id}`}
                                                      prefetch={false}
                                                      onClick={handleLinkClick}
                                                      className={commonClasses}
                                                  >
                                                      {innerContent}
                                                  </Link>
                                              );
                                          })}
                                      </motion.div>
                                  )}
                              </AnimatePresence>
                          </div>
                      ) : (
                          <Link 
                              href={`/${item.id === 'home' ? '' : item.id}`}
                              prefetch={false}
                              className="block text-lg font-bold py-3 border-b border-slate-50 text-slate-700 hover:text-gameTeal"
                              onClick={handleLinkClick}
                          >
                              {item.name}
                          </Link>
                      )}
                  </div>
                );
              })}
              <div className="pt-4 flex flex-col gap-2">
                <a 
                    href="https://online.gameacademy.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gameTeal/5 hover:bg-gameTeal hover:text-white text-gameTeal py-3 rounded-xl font-bold border border-gameTeal/10 hover:border-gameTeal transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                >
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <Video size={18} />
                    <span>Live Class</span>
                </a>

                {isLoggedIn ? (
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 px-1 py-2">
                      <span className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-gameTeal text-white border border-slate-200 shrink-0">
                        {studentPhoto ? (
                          <img
                            src={studentPhoto}
                            alt={displayName}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <span className="text-sm font-bold tracking-wide">{initials}</span>
                        )}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-bold text-slate-800 truncate">{displayName}</span>
                        {studentPhone && studentName && (
                          <span className="block text-xs text-slate-500 truncate">{studentPhone}</span>
                        )}
                      </span>
                    </div>
                    <a 
                        href={STUDENT_PORTAL_URL}
                        onClick={goToDashboard}
                        className="w-full bg-slate-50 text-slate-700 py-3.5 rounded-xl font-bold shadow-sm flex items-center justify-center gap-2 border border-slate-100"
                    >
                        <MonitorPlay size={18} /> My Dashboard
                    </a>
                    <button 
                        onClick={() => {
                          onLogout();
                          setIsOpen(false);
                        }}
                        className="w-full bg-red-50 text-red-600 py-3.5 rounded-xl font-bold shadow-sm flex items-center justify-center gap-2 border border-red-100"
                    >
                        <X size={18} /> Logout
                    </button>
                  </div>
                ) : (
                  <button 
                      onClick={() => {
                        openLogin();
                        setIsOpen(false);
                      }}
                      className="w-full bg-gameTeal text-white py-3.5 rounded-xl font-bold mt-2 shadow-lg flex items-center justify-center gap-2"
                  >
                      Student Login
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
