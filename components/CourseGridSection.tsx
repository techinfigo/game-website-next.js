'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';

const CourseGridSection: React.FC = () => {
    const [activeBranch, setActiveBranch] = useState<'ME' | 'CE' | 'XE'>('ME');

    const gateCourses = {
        ME: [
            {
                title: "Foundation Course (ME) 2025/26",
                branch: "Mechanical Engineering",
                price: "Rs. 35,000",
                originalPrice: "Rs. 50,000",
                image: "/images/courses/course-1.png",
                includes: ["1200+ Hrs Content", "1:1 Mentorship", "Hardcopy Notes", "24/7 Doubt Support"]
            },
            {
                title: "Lakshya GATE (ME) 2025",
                branch: "Mechanical Engineering",
                price: "Rs. 24,999",
                originalPrice: "Rs. 35,000",
                image: "/images/courses/course-2.png",
                includes: ["Targeted Revision", "100+ Mock Tests", "Daily Practice Sets", "Concept Visualization"]
            }
        ],
        CE: [
            {
                title: "Civil Engineering Foundation 2025",
                branch: "Civil Engineering",
                price: "Rs. 35,000",
                originalPrice: "Rs. 50,000",
                image: "/images/courses/course-3.png",
                includes: ["Structural Analysis", "Geotechnical Depth", "Standard PYQs", "Live Doubts"]
            },
            {
                title: "Lakshya GATE (CE) 2025",
                branch: "Civil Engineering",
                price: "Rs. 24,999",
                originalPrice: "Rs. 35,000",
                image: "/images/courses/course-4.png",
                includes: ["Formula Sheets", "Doubt Support", "Rank Improvement", "PYQ Analysis"]
            }
        ],
        XE: [
            {
                title: "GATE XE Mastery 2025",
                branch: "Engineering Sciences",
                price: "Rs. 18,000",
                originalPrice: "Rs. 25,000",
                image: "/images/courses/course-5.png",
                includes: ["Maths + 2 Sections", "Fluid & Thermo", "Energy Science Add-on", "Concept Storytelling"]
            }
        ]
    };

    return (
        <section id="gate-courses" className="py-10 bg-slate-50 relative scroll-mt-32 border-t border-slate-200">
            <div className="max-w-[1280px] mx-auto px-8 md:px-10 lg:px-12">
                <div className="text-center mb-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span className="text-gameTeal font-black tracking-[0.2em] uppercase text-xs mb-2 block">Our Offerings</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
                            Premium <span className="text-gameTeal">GATE Courses</span>
                        </h2>
                        <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto mb-6">
                            Select your engineering branch to explore courses tailored for your success.
                        </p>

                        {/* Branch Select Tabs */}
                        <div className="flex justify-center gap-4 mb-10">
                            {['ME', 'CE', 'XE'].map((branch) => (
                                <button
                                    key={branch}
                                    onClick={() => setActiveBranch(branch as any)}
                                    className={`px-8 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-sm border ${activeBranch === branch
                                        ? 'bg-gameTeal text-white border-gameTeal scale-105 shadow-gameTeal/20'
                                        : 'bg-white text-slate-500 border-slate-200 hover:border-gameTeal/30 hover:text-gameTeal'
                                        }`}
                                >
                                    {branch === 'ME' ? 'Mechanical' : branch === 'CE' ? 'Civil' : 'Engg Sciences (XE)'}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="space-y-12">
                    <AnimatePresence mode="wait">
                        {gateCourses[activeBranch].map((course, i) => (
                            <motion.div
                                key={`${activeBranch}-${course.title}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <CourseCard 
                                    title={course.title}
                                    branch={course.branch}
                                    offeredPrice={course.price}
                                    originalPrice={course.originalPrice}
                                    image={course.image}
                                    includes={course.includes}
                                    targetExam="Target: GATE 2025/26"
                                    targetAudience="All B.Tech Graduates & Final Year Students"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CourseGridSection;
