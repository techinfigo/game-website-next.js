
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Calendar, Clock, ChevronRight, Tag, User, 
  ArrowRight, Sparkles, Bookmark, Share2, TrendingUp, Hash, 
  ArrowLeft, Facebook, Twitter, Linkedin, Link as LinkIcon, MessageCircle
} from 'lucide-react';
import { useBlog } from '@/hooks/useBlog';
import type { BlogPost } from '@/data/blogData';

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const { posts } = useBlog();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  const categories = ['All', 'Strategy', 'Technical', 'Career', 'News', 'Motivation'];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(p => p.featured);
  const showFeatured = activeCategory === 'All' && !searchQuery;

  // --- SINGLE POST VIEW (REDESIGNED) ---
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white font-sans text-slate-900 pt-20">
        
        {/* Navigation Bar (Sticky for Article) */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 px-8 md:px-10 lg:px-12 py-4 transition-all">
           <div className="max-w-5xl mx-auto flex justify-between items-center">
              <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-slate-600 hover:text-[#075d63] font-bold text-base transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-[#075d63] group-hover:text-white transition-all">
                   <ArrowLeft size={20} />
                </div>
                <span className="hidden sm:inline">Back to Articles</span>
              </button>
              
              <div className="flex items-center gap-4">
                 <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:block">Share</span>
                 <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#1877F2] hover:text-white transition-colors"><Facebook size={18} /></button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#1DA1F2] hover:text-white transition-colors"><Twitter size={18} /></button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-colors"><Linkedin size={18} /></button>
                    <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white transition-colors"><LinkIcon size={18} /></button>
                 </div>
              </div>
           </div>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl mx-auto px-8 md:px-10 lg:px-12 pt-16 pb-12 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
           >
              <div className="flex justify-center gap-3 mb-8">
                 <span className="bg-[#075d63]/10 text-[#075d63] border border-[#075d63]/20 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest">
                    {selectedPost.category}
                 </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tight">
                 {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center justify-center gap-8 text-base text-slate-500 font-medium">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#075d63] text-white flex items-center justify-center font-bold text-sm shadow-md">
                       {selectedPost.author.charAt(0)}
                    </div>
                    <span className="text-slate-900 font-bold">{selectedPost.author}</span>
                 </div>
                 <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                 <span className="flex items-center gap-2"><Calendar size={18} /> {selectedPost.date}</span>
                 <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                 <span className="flex items-center gap-2"><Clock size={18} className="text-[#f2c537]" /> {selectedPost.readTime}</span>
              </div>
           </motion.div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-8 md:px-10 lg:px-12 mb-20">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="relative aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50"
           >
              <Image 
                 src={selectedPost.image} 
                 alt={selectedPost.title} 
                 fill
                 className="object-cover"
                 referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#075d63]/20 to-transparent mix-blend-multiply"></div>
           </motion.div>
        </div>

        {/* Content Body */}
        <div className="max-w-[800px] mx-auto px-8 md:px-10 lg:px-12 relative pb-32">
            
            {/* The Article */}
            <article className="prose prose-xl prose-slate max-w-none 
              prose-headings:font-black prose-headings:text-slate-900 prose-headings:leading-tight
              prose-p:text-slate-800 prose-p:leading-loose prose-p:text-xl
              prose-a:text-[#075d63] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-black
              prose-blockquote:border-l-4 prose-blockquote:border-l-[#f2c537] prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
              prose-img:rounded-[2rem] prose-img:shadow-xl
              prose-li:text-slate-800 prose-li:text-xl
            ">
               
               <p className="lead font-medium text-2xl md:text-3xl text-slate-900 mb-12 not-prose leading-normal border-l-4 border-[#075d63] pl-6 py-2">
                  {selectedPost.excerpt}
               </p>

               <div className="w-32 h-1.5 bg-[#f2c537] mb-12 rounded-full"></div>

               <p>
                  Preparing for competitive exams like GATE and ESE is a marathon, not a sprint. Many students start with high enthusiasm but lose momentum midway. The difference between a ranker and an average aspirant often boils down to strategy, discipline, and the ability to bounce back from setbacks.
               </p>

               <h3>1. The Power of Consistency</h3>
               <p>
                  It's a cliché for a reason. Studying for 12 hours one day and skipping the next three is less effective than studying 4 hours every single day. 
               </p>
               <p>
                  <strong className="text-[#075d63] bg-[#075d63]/10 px-2 py-0.5 rounded">Consistency builds momentum.</strong> Create a schedule that is realistic and stick to it. Use tools like the Pomodoro technique to maintain focus without burnout. Small daily improvements compound into massive results over time.
               </p>

               <blockquote className="my-12">
                  <div className="flex items-start gap-4">
                     <Sparkles className="text-[#f2c537] shrink-0 mt-1" size={32} />
                     <div>
                        <p className="text-2xl font-bold text-slate-900 mb-4">
                           "Discipline is doing what needs to be done, even if you don&apos;t want to do it."
                        </p>
                        <cite className="text-sm font-bold text-slate-500 uppercase tracking-widest not-italic">— Anonymous</cite>
                     </div>
                  </div>
               </blockquote>

               <h3>2. Concept over Rote Learning</h3>
               <p>
                  In engineering exams, questions are rarely direct repeats. They test your application of concepts. 
                  Instead of memorizing formulas, try to derive them. Understand the physical significance of terms in an equation.
               </p>
               <p>
                  For example, in Thermodynamics, don&apos;t just memorize <em>dQ = dU + dW</em>. Understand what internal energy really represents and how work transfer occurs in different processes.
               </p>

               <figure className="my-12">
                  <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden shadow-xl">
                     <Image 
                        src="/images/blog/main-hero.png" 
                        alt="Study Setup" 
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                     />
                  </div>
                  <figcaption className="text-center text-base text-slate-500 mt-4 font-medium italic">A conducive study environment helps maintain focus.</figcaption>
               </figure>

               <h3>3. The Art of Revision</h3>
               <p>
                  The human brain is designed to forget. This is where <strong>Spaced Repetition</strong> comes in. 
                  Review a topic 24 hours after learning it, then 3 days later, then a week later. 
               </p>
               <p>
                  Short notes are your best friend here. Condense a 50-page chapter into a 2-page summary sheet containing only keywords, formulas, and tricky concepts.
               </p>

               <h3>Conclusion</h3>
               <p>
                  Your journey to AIR 1 is paved with small, daily victories. Believe in the process, trust your mentors, and keep pushing forward.
                  The view from the top is worth the climb.
               </p>
            </article>

            {/* Tags */}
            <div className="mt-20 pt-10 border-t border-slate-200">
               <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Filed Under</h4>
               <div className="flex flex-wrap gap-4">
                  {selectedPost.tags.map((tag, i) => (
                     <span key={i} className="px-6 py-3 bg-slate-50 text-slate-700 rounded-xl text-base font-bold hover:bg-[#075d63] hover:text-white cursor-pointer transition-all border border-slate-200 hover:border-[#075d63] shadow-sm">
                        #{tag}
                     </span>
                  ))}
               </div>
            </div>

            {/* Author Bio Card */}
            <div className="mt-20 bg-gradient-to-br from-slate-50 to-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
               <div className="w-24 h-24 rounded-full bg-white border-4 border-[#f2c537] flex items-center justify-center text-4xl font-black text-[#075d63] shrink-0 shadow-lg">
                  {selectedPost.author.charAt(0)}
               </div>
               <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                     <h4 className="font-bold text-slate-900 text-2xl">{selectedPost.author}</h4>
                     <span className="text-[#075d63] font-bold text-xs uppercase tracking-wider bg-[#075d63]/10 px-3 py-1.5 rounded-lg mt-2 md:mt-0 inline-block">{selectedPost.authorRole}</span>
                  </div>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">
                     Passionate about simplifying complex engineering concepts and mentoring students to achieve their dream careers in PSUs and IITs.
                  </p>
                  <button className="text-[#075d63] font-bold text-base hover:underline flex items-center justify-center md:justify-start gap-2 group">
                     View Author Profile <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>

        </div>

        {/* Read Next Section */}
        <div className="bg-slate-50 py-24 px-8 md:px-10 lg:px-12 border-t border-slate-200">
           <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
                 <div className="w-10 h-1.5 bg-[#075d63] rounded-full"></div>
                 Read Next
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                 {posts.filter(p => p.id !== selectedPost.id).slice(0, 3).map(post => (
                    <div 
                       key={post.id} 
                       onClick={() => { setSelectedPost(post); window.scrollTo(0,0); }}
                       className="group cursor-pointer bg-white rounded-[2rem] p-5 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-[#075d63]/20 hover:-translate-y-2 flex flex-col h-full"
                    >
                       <div className="h-56 rounded-3xl overflow-hidden mb-6 relative shrink-0">
                          <div className="relative w-full h-full">
                             <Image 
                               src={post.image} 
                               fill
                               className="object-cover group-hover:scale-110 transition-transform duration-700" 
                               alt={post.title} 
                               referrerPolicy="no-referrer"
                             />
                          </div>
                          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#075d63] shadow-lg">
                             {post.category}
                          </div>
                       </div>
                       <h4 className="font-extrabold text-slate-900 text-xl leading-tight mb-3 group-hover:text-[#075d63] transition-colors line-clamp-2">
                          {post.title}
                       </h4>
                       <div className="mt-auto flex items-center gap-3 text-xs text-slate-400 font-bold uppercase tracking-wide">
                          <span>{post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                          <span>{post.readTime}</span>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>

      </div>
    );
  }

  // --- LIST VIEW (DEFAULT) ---
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900 selection:bg-gameTeal selection:text-white">
      
      {/* 1. Hero Section - Premium Teal Gradient */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#075d63] to-[#043f42] text-white overflow-hidden rounded-b-[3rem] shadow-2xl">
         <div className="absolute inset-0 bg-slate-900/50 opacity-10"></div>
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#043f42] via-transparent to-transparent opacity-80"></div>

         <div className="max-w-[1200px] mx-auto px-8 md:px-10 lg:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
                     <span className="w-2 h-2 rounded-full bg-[#f2c537] animate-pulse"></span>
                     <span className="text-xs font-bold uppercase tracking-widest text-[#f2c537]">The Engineering Journal</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                     Insights for the <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2c537] to-amber-200">Future Engineers</span>
                  </h1>
                  <p className="text-teal-100 text-lg leading-relaxed">
                     Expert strategies, technical deep-dives, and career guidance to help you ace GATE, ESE, and beyond.
                  </p>
               </motion.div>
            </div>

            {/* Search Bar */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2, duration: 0.6 }}
               className="max-w-2xl mx-auto relative z-20"
            >
               <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f2c537] to-[#075d63] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative bg-white rounded-2xl flex items-center p-2 shadow-xl border border-white/20">
                     <Search className="text-slate-400 ml-4 shrink-0 group-focus-within:text-[#075d63] transition-colors" size={22} />
                     <input 
                        type="text" 
                        placeholder="Search for articles, topics, or strategies..." 
                        className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 px-4 py-4 font-medium text-lg"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                     />
                     {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                           <ChevronRight size={20} className="rotate-90" />
                        </button>
                     )}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Content Area */}
      <section className="py-16 px-8 md:px-10 lg:px-12">
         <div className="max-w-[1280px] mx-auto">
            
            {/* Category Filter */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 sticky top-20 z-30 py-4 transition-all">
               <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar w-full md:w-auto mask-gradient-right">
                  {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap border ${
                           activeCategory === cat 
                           ? 'bg-[#075d63] text-white border-[#075d63] shadow-lg shadow-[#075d63]/30' 
                           : 'bg-white text-slate-600 border-slate-200 hover:border-[#075d63] hover:text-[#075d63] hover:bg-[#075d63]/5'
                        }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
               
               <div className="text-sm font-bold text-slate-400">
                  Showing {filteredPosts.length} Articles
               </div>
            </div>

            {/* Featured Post */}
            {showFeatured && featuredPost && (
               <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-16"
                  onClick={() => handlePostClick(featuredPost)}
               >
                  <div className="group relative bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
                     <div className="grid lg:grid-cols-12 gap-0">
                        <div className="lg:col-span-7 relative h-[400px] lg:h-auto overflow-hidden">
                           <Image 
                              src={featuredPost.image} 
                              alt={featuredPost.title} 
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                           />
                           <div className="absolute top-6 left-6">
                              <span className="bg-white/90 backdrop-blur-md text-[#075d63] text-xs font-black px-4 py-2 rounded-lg uppercase tracking-wider shadow-lg flex items-center gap-2 border border-[#075d63]/20">
                                 <Sparkles size={14} className="text-[#f2c537] fill-[#f2c537]" /> Featured Story
                              </span>
                           </div>
                        </div>
                        <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center bg-white relative z-10">
                           <div className="flex items-center gap-3 text-xs font-bold text-[#075d63] uppercase tracking-wider mb-4">
                              <span className="px-3 py-1 bg-[#075d63]/10 rounded-md">{featuredPost.category}</span>
                              <span className="text-slate-300">•</span>
                              <span className="text-slate-500 flex items-center gap-1"><Calendar size={12} className="text-[#f2c537]" /> {featuredPost.date}</span>
                           </div>
                           
                           <h2 className="text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-[#075d63] transition-colors">
                              {featuredPost.title}
                           </h2>
                           
                           <p className="text-slate-600 text-lg mb-8 line-clamp-3 leading-relaxed font-medium">
                              {featuredPost.excerpt}
                           </p>
                           
                           <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center gap-3">
                                 <div className="w-12 h-12 rounded-full bg-[#075d63] flex items-center justify-center text-white border-2 border-white text-lg font-bold shadow-md">
                                    {featuredPost.author.charAt(0)}
                                 </div>
                                 <div>
                                    <div className="text-sm font-bold text-slate-900">{featuredPost.author}</div>
                                    <div className="text-xs text-[#075d63] font-medium">{featuredPost.authorRole}</div>
                                 </div>
                              </div>
                              <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#075d63] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-200 group-hover:border-[#075d63]">
                                 <ArrowRight size={20} />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
            )}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post) => (
                     (showFeatured && post.featured) ? null : (
                        <motion.div
                           key={post.id}
                           layout
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, scale: 0.9 }}
                           transition={{ duration: 0.3 }}
                           onMouseEnter={() => setHoveredPost(post.id)}
                           onMouseLeave={() => setHoveredPost(null)}
                           onClick={() => handlePostClick(post)}
                           className="group bg-white rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-[#075d63]/10 transition-all duration-300 flex flex-col h-full overflow-hidden cursor-pointer hover:-translate-y-2 hover:border-[#075d63]/20"
                        >
                           <div className="relative aspect-[16/10] overflow-hidden">
                              <Image 
                                 src={post.image} 
                                 alt={post.title} 
                                 fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                                 referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-[#075d63]/20 group-hover:bg-[#075d63]/0 transition-colors"></div>
                              <div className="absolute top-4 left-4 flex gap-2">
                                 <span className="bg-white/95 backdrop-blur-sm text-[#075d63] text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-sm">
                                    {post.category}
                                 </span>
                              </div>
                           </div>

                           <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4">
                                 <div className="flex items-center gap-2 text-[#f2c537]">
                                    <Clock size={14} /> <span className="text-slate-500">{post.readTime}</span>
                                 </div>
                                 <span className="text-slate-400">{post.date}</span>
                              </div>

                              <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-[#075d63] transition-colors line-clamp-2">
                                 {post.title}
                              </h3>

                              <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                                 {post.excerpt}
                              </p>

                              <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                                 <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold border border-slate-200 group-hover:bg-[#075d63] group-hover:text-white transition-colors">
                                       {post.author.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                       <span className="text-xs font-bold text-slate-900">{post.author}</span>
                                       <span className="text-[9px] font-bold text-[#075d63] uppercase tracking-wide">{post.authorRole}</span>
                                    </div>
                                 </div>
                                 
                                 <div className={`flex gap-2 transition-all duration-300 ${hoveredPost === post.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 lg:opacity-100 lg:translate-x-0'}`}>
                                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-[#075d63] transition-colors">
                                       <Bookmark size={18} />
                                    </button>
                                    <button className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-[#f2c537] transition-colors">
                                       <Share2 size={18} />
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )
                  ))}
               </AnimatePresence>
            </div>

            {filteredPosts.length === 0 && (
               <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-200">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                     <Search size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No articles found</h3>
                  <p className="text-slate-500 mb-6">Try adjusting your search or category filter.</p>
                  <button 
                     onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                     className="text-[#075d63] font-bold hover:underline"
                  >
                     Clear all filters
                  </button>
               </div>
            )}

            {filteredPosts.length > 0 && (
               <div className="mt-20 text-center">
                  <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:border-[#075d63] hover:text-[#075d63] transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2">
                     Load More Articles <ChevronRight size={16} />
                  </button>
               </div>
            )}

         </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white border-t border-slate-100 relative overflow-hidden">
         <div className="max-w-[1000px] mx-auto px-8 md:px-10 lg:px-12 relative z-10 text-center">
            <div className="inline-block bg-[#f2c537]/10 text-[#d8b32f] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-[#f2c537]/20">
               Weekly Digest
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
               Stay Ahead of the <span className="text-[#075d63]">Curve</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto font-medium">
               Get the latest exam updates, study hacks, and success stories delivered straight to your inbox. No spam, just value.
            </p>
            
            <form className="max-w-md mx-auto relative group" onSubmit={(e) => e.preventDefault()}>
               <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-full p-2 pl-6 focus-within:border-[#075d63] focus-within:ring-4 focus-within:ring-[#075d63]/10 transition-all shadow-sm">
                  <input 
                     type="email" 
                     placeholder="Enter your email address" 
                     className="w-full bg-transparent border-none outline-none text-slate-900 placeholder-slate-400 font-medium"
                  />
                  <button className="bg-[#075d63] hover:bg-[#043f42] text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-[#075d63]/30 flex items-center gap-2 hover:-translate-x-1">
                     Subscribe <ArrowRight size={16} />
                  </button>
               </div>
               <p className="text-xs text-slate-400 mt-4 font-medium">Join 25,000+ engineers receiving our weekly insights.</p>
            </form>
         </div>
      </section>

    </div>
  );
};

export default BlogPage;
