
'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-400 py-16 font-sans border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
           
           {/* Brand Column (Span 4) */}
           <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="flex items-center group">
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
                 India&apos;s premier institute for Engineering Services preparation. We don&apos;t just teach; we mentor the future builders of the nation.
              </p>
               <div className="flex gap-3">
                  {[
                    { Icon: Youtube, url: 'https://www.youtube.com/@gblions' },
                    { id: 'telegram', url: 'https://t.me/gamebygauravbabu' },
                    { id: 'whatsapp', url: 'https://whatsapp.com/channel/0029VaWNuqVJpe8gdAkinR1T' },
                    { id: 'linkedin', url: 'https://www.linkedin.com/company/gameacademyindia/' },
                    { Icon: Facebook, url: '#' }
                  ].map((social, i) => {
                    const IconComponent = (social as any).Icon;
                    return (
                      <a key={i} href={social.url} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gameTeal hover:text-gameGold transition-all duration-300 group border border-white/5 hover:border-gameTeal">
                         {IconComponent ? (
                           <IconComponent size={16} className="group-hover:scale-110 transition-transform" />
                         ) : (social as any).id === 'telegram' ? (
                           <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                             <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                           </svg>
                         ) : (social as any).id === 'linkedin' ? (
                           <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                             <path d="M20.447 20.452H16.892V14.881C16.892 13.553 16.865 11.845 15.039 11.845C13.187 11.845 12.903 13.291 12.903 14.787V20.452H9.349V9H12.76V10.564H12.808C13.283 9.664 14.444 8.714 16.175 8.714C19.778 8.714 20.447 11.085 20.447 14.168V20.452ZM5.337 7.433C4.197 7.433 3.274 6.509 3.274 5.37C3.274 4.23 4.197 3.307 5.337 3.307C6.477 3.307 7.4 4.23 7.4 5.37C7.4 6.509 6.477 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.201 24 24 23.227 24 22.271V1.729C24 0.774 23.201 0 22.225 0Z"/>
                           </svg>
                         ) : (
                           <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                           </svg>
                         )}
                      </a>
                    );
                  } ) }
               </div>
           </div>

           {/* Quick Links (Span 2) */}
           <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                 <span className="text-gameGold font-black mr-2">|</span> Quick Links
              </h4>
              <ul className="space-y-3">
                 {[
                    { label: 'About Us', page: 'about' },
                    { label: 'Courses', page: 'courses' },
                    { label: 'Results', page: 'rankers' },
                    { label: 'Reviews', page: 'reviews' },
                    { label: 'Job Updates', page: 'jobs' },
                    { label: 'Blogs', page: 'blog' },
                    { label: 'Strategy', page: 'hacks' },
                    { label: 'Resources', page: 'resources' },
                    { label: 'Achievers', page: 'achievers' },
                    { label: 'Knowledge Pitara', page: 'pitara' }
                 ].map((link, i) => (
                    <li key={i}>
                       <Link 
                          href={`/${link.page}`}
                          className="text-sm hover:text-gameGold transition-colors flex items-center gap-1 group w-full text-left"
                       >
                          <ChevronRight size={12} className="text-gameTeal group-hover:text-gameGold group-hover:translate-x-0.5 transition-all" />
                          {link.label}
                       </Link>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Courses (Span 3) */}
           <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                 <span className="text-gameGold font-black mr-2">|</span> Popular Courses
              </h4>
              <ul className="space-y-3">
                 {[
                    { label: 'GATE', page: 'gate' },
                    { label: 'ESE', page: 'ese' },
                    { label: 'PSUs / R&D', page: 'psu' },
                    { label: 'SSC JE', page: 'ssc' },
                    { label: 'RRB JE', page: 'rrb' },
                    { label: 'State AE/JE', page: 'state' },
                    { label: 'IIT-JEE / NEET', page: 'iit' },
                    { label: 'Non Tech', page: 'nontech' },
                    { label: '9th - 12th', page: 'school' }
                 ].map((item, i) => (
                    <li key={i}>
                       <Link 
                          href={`/${item.page}`}
                          className="text-sm hover:text-gameGold transition-colors flex items-center gap-2 group w-full text-left"
                       >
                          <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-gameGold transition-colors"></span>
                          {item.label}
                       </Link>
                    </li>
                 ))}
              </ul>
           </div>

           {/* Contact Info (Span 3) */}
           <div className="lg:col-span-3 space-y-8">
              <div>
                <h4 className="text-white font-bold text-lg mb-6 flex items-center">
                   <span className="text-gameGold font-black mr-2">|</span> Contact Us
                </h4>
                <ul className="space-y-4">
                   <li className="flex items-start gap-3 group">
                      <MapPin size={18} className="text-gameTeal mt-0.5 shrink-0 group-hover:text-gameGold transition-colors" />
                      <span className="text-sm text-slate-400 leading-relaxed group-hover:text-white transition-colors">
                         131, 2, Jawahar Puram Phase -1, Shahganj, Agra, Uttar Pradesh 282010
                      </span>
                   </li>
                   <li className="flex items-center gap-3 group cursor-pointer">
                      <Phone size={18} className="text-gameTeal shrink-0 group-hover:text-gameGold transition-colors" />
                      <a href="tel:+917668518602" className="text-sm text-white font-medium group-hover:text-gameGold transition-colors">+91 76685 18602</a>
                   </li>
                   <li className="flex items-center gap-3 group cursor-pointer">
                      <Mail size={18} className="text-gameTeal shrink-0 group-hover:text-gameGold transition-colors" />
                      <a href="mailto:info@gameacademy.in" className="text-sm text-white font-medium group-hover:text-gameGold transition-colors">info@gameacademy.in</a>
                   </li>
                </ul>
              </div>

              {/* Download App - Restructured */}
              <div>
                 <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-4 opacity-80 flex items-center">
                    <span className="text-gameGold font-black mr-2">|</span> Download the App
                 </h5>
                 <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://clppenny.page.link/cTBm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-2.5 rounded-xl border border-white/10 transition-all group"
                    >
                        <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 text-white group-hover:text-gameGold transition-colors shrink-0">
                           <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-127.3 60.1-60.1L104.6 499z" />
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">GET IT ON</span>
                            <span className="text-xs font-bold text-white group-hover:text-gameGold transition-colors">Google Play</span>
                        </div>
                    </a>
                    <a 
                      href="https://apps.apple.com/in/app/myinstitute/id1472483563" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] px-3 py-2.5 rounded-xl border border-white/10 transition-all group relative"
                    >
                        <svg viewBox="0 0 384 512" fill="currentColor" className="w-5 h-5 text-white group-hover:text-gameGold transition-colors shrink-0">
                           <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-31.4-73.7-114.8-31.7-131.8zM232.1 56.9c20.7-25.2 34.2-59.8 30.3-94.5-29.9 1.2-66.1 20.3-87.5 45.3-19.2 22.3-35.9 57.7-31.4 91.4 33.1 2.6 67.9-18.9 88.6-42.2z" />
                        </svg>
                        <div className="flex flex-col items-start leading-none">
                            <span className="text-[9px] font-bold text-slate-500 group-hover:text-slate-400 transition-colors">Download on</span>
                            <span className="text-xs font-bold text-white group-hover:text-gameGold transition-colors">App Store</span>
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
                 Developed by <a href="https://techinfigo.com/" target="_blank" rel="noopener noreferrer" className="text-gameGold hover:text-white transition-colors font-bold">TECHINFIGO</a>
              </span>
           </div>
           <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gameGold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gameGold transition-colors">Terms of Use</Link>
              <Link href="/refund" className="hover:text-gameGold transition-colors">Refund Policy</Link>
              <Link href="/takedown" className="hover:text-gameGold transition-colors">Takedown Policy</Link>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
