
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Quote, Star, Trophy, Video, MessageSquare, Sparkles, Crown, CheckCircle2, ArrowRight, X, Search, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface AchieversPageProps {
  initialFilter?: 'all' | 'video' | 'story';
}

// Optimized: Moved static data outside component to prevent re-creation on every render
export const ALL_STORIES = [
  { 
    type: 'video',
    id: 1,
    name: "Mukunda Buragohain", 
    rank: "Junior Engineer (Civil)", 
    exam: "Assam Govt. · 2025", 
    img: "https://img.youtube.com/vi/UAK_6p0SQlo/hqdefault.jpg", 
    video: "https://www.youtube.com/embed/UAK_6p0SQlo", // Standard video ID
    featured: true 
  },
  {
    type: 'whatsapp',
    id: 10,
    img: "/whatsapp-result-1.png",
    caption: "Cracked GATE Mechanical with Gaurav Babu Sir's mentorship! Best conceptual learning ever!"
  },
  { 
    type: 'video',
    id: 3,
    name: "Harpreet", 
    rank: "Asst. Environmental Engineer", 
    exam: "Haryana SPCB - Civil · 2025", 
    img: "https://img.youtube.com/vi/IadaXYQRxjM/hqdefault.jpg", 
    video: "https://www.youtube.com/embed/IadaXYQRxjM" 
  },
  {
    type: 'whatsapp',
    id: 11,
    img: "/whatsapp-result-2.png",
    caption: "Highest score in Thermal Engineering! Doubts cleared in record time on the WhatsApp group."
  },
  { 
    type: 'video',
    id: 5,
    name: "Parul Singh", 
    rank: "Junior Engineer (Civil)", 
    exam: "CPWD · 2023", 
    img: "https://img.youtube.com/vi/gnJYMXouHJs/hqdefault.jpg", 
    video: "https://www.youtube.com/embed/gnJYMXouHJs" 
  },
  {
    type: 'whatsapp',
    id: 12,
    img: "/whatsapp-result-3.png",
    caption: "Selected in IOCL as Officer! Huge thanks to Gaurav Babu Sir's test series and live classes."
  },
  { 
    type: 'video',
    id: 7,
    name: "Anurag Tripathi", 
    rank: "IIT Ropar", 
    exam: "Selection Year · 2024", 
    img: "https://img.youtube.com/vi/3rpUFtkOTWU/hqdefault.jpg", 
    video: "https://www.youtube.com/embed/3rpUFtkOTWU" 
  },
  { 
    type: 'video',
    id: 8,
    name: "Anjali", 
    rank: "AIR 556 (ME) · Executive Trainee", 
    exam: "NPCIL · 2024", 
    img: "https://img.youtube.com/vi/Etba1HTOBUI/hqdefault.jpg", 
    video: "https://www.youtube.com/embed/Etba1HTOBUI" 
  },
  {
    type: 'whatsapp',
    id: 13,
    img: "/whatsapp-result-4.png",
    caption: "Amazing response from student on Strength of Materials concepts. Understood all basic laws!"
  },
  {
    type: 'whatsapp',
    id: 14,
    img: "/whatsapp-result-5.png",
    caption: "Cracked ESE Civil Engineering! Outstanding visual lectures provided by Gaurav Sir."
  },
  {
    type: 'whatsapp',
    id: 15,
    img: "/whatsapp-result-6.png",
    caption: "Student got selected in ONGC! Sent heartfelt gratitude to the personal mentorship program."
  },
  {
    type: 'whatsapp',
    id: 16,
    img: "/whatsapp-result-7.png",
    caption: "Perfect score in Fluid Mechanics mock test series! 100% doubt resolution."
  },
  {
    type: 'whatsapp',
    id: 17,
    img: "/whatsapp-result-8.png",
    caption: "GATE score of 820+ achieved by studying exclusively with GAME Academy online batch."
  },
  {
    type: 'whatsapp',
    id: 18,
    img: "/whatsapp-result-9.png",
    caption: "Double selection letters from ISRO & BARC! Truly magical teaching modules."
  },
  {
    type: 'whatsapp',
    id: 19,
    img: "/whatsapp-result-10.png",
    caption: "Cleared PSU interviews with supreme confidence. Mentorship mocks were key."
  },
  {
    type: 'whatsapp',
    id: 20,
    img: "/whatsapp-result-11.png",
    caption: "GATE Mechanical ESE rank booster batch helped solve previous year questions easily."
  },
  {
    type: 'whatsapp',
    id: 21,
    img: "/whatsapp-result-12.png",
    caption: "Got selected in Coal India Limited (CIL)! Overwhelmed with joy and gratitude."
  },
  {
    type: 'whatsapp',
    id: 22,
    img: "/whatsapp-result-13.png",
    caption: "Conceptual clarity has reached another level. Formulas are on my fingertips!"
  },
  {
    type: 'whatsapp',
    id: 23,
    img: "/whatsapp-result-14.png",
    caption: "Late night doubt clearing session screenshots. Gaurav Sir's dedication is unparalleled!"
  },
  {
    type: 'whatsapp',
    id: 24,
    img: "/whatsapp-result-15.png",
    caption: "Selected in Ministry of Defence! Life-changing guidance from GAME expert team!"
  },
  {
    type: 'story',
    id: 201,
    name: "Jitendra",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, SSC JE / RRB JE / State AE & JE",
    quote: "Every basic to basic things was teached very well ...all faculties are amazing..... technical team will resolve your error within few hours ...",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 202,
    name: "Sahil Gupta",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO",
    quote: "Gaurav sir explains all the concepts in a very lucid, easy to understand manner he simply makes u fall in love to mechanical subjects ❤️",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 203,
    name: "Sasmita Pradhan",
    branch: "Civil",
    course: "Excellence Course | AE & JE",
    targetExams: "SSC JE / RRB JE / State AE & JE",
    quote: "Such a beautiful platform i think i m too late for knowing this app .Thank you Gaurav Babu sir and all sir nd madam to study us , Thank u sir for giving me a platform where i can achieve my goal.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 204,
    name: "Utkarsh Kumar Singh",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs",
    quote: "Gaurav Babu sir has been a very great teacher and mentor. Under his guidance I have gained a lot of confidence to crack these competitive exams. Gaurav sir is so helpful and his courses are outstanding. He is second to none. I consider myself very lucky to be a student of GAME Academy. Sir delivers the concepts in such lucid and easy manner that it is easy to understand very complex concepts, formulas and definitions. Everything is explained in such a way that it becomes very easy to grasp those.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 205,
    name: "Aryan Prakash Rai",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE",
    quote: "••The content in the course is excellent.\n••Beside this it has also helped me in maintaining patience and keeping me calm while preparing.\n••It also boosted my confidence and helped me overcome the panic situation while preparing for exams.",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 206,
    name: "Naveed Ahmad Bhat",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "First of all I want to thank you whole GAME team and also Gaurav babu sir. It was best decision I made when I join game platform. I was facing lot of difficulties in many Subjects not many overall in every subject but the way Gaurav sir teaches is totally different everyone knows ,also student end to end interaction which makes Game special. Finally I can say \"Mari toa life change kardi game nay as student of mechanical engineering\"",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 207,
    name: "Anurag Tripathi",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "It was a great experience getting enrolled in the course and learning everything from basics",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 208,
    name: "Abhishek Maddheshiya",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Crystal clear",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 209,
    name: "Kavya mandloi",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Motivated and dedicated towards my journey",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 210,
    name: "Abhiram Sharma",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE",
    quote: "Gaurav babu sir, the god of mechanical engineering we can say that, her teaching Style and the ability to deliver indepth concept is very very excellent.",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 211,
    name: "Ritik badgotya",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "Marvelous each and every point crystal clear with visiblevilization",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 212,
    name: "Ajay Tanhaji Rathod",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO",
    quote: "I had joined with Gaurav sir during my 2nd year of engineering and start following him. Before joining with him I have 0 knowledge of mechanical engineering Now I am confidently say that the college facilities from which I mug up the subject I CAN TEACH THEM THOSE SUBJECTS WHICH I MUG UP FROM THEM NOT ONLY TEACH I WIL GIVE THEM FEELING AS WELL OF THAT SUBJECT . AND THIS THINGS ARE POSSIBLE BECAUSE OF GAURAV SIR . I DON'T HAVE WORDS TO EXPLAIN YOUR ROLE IN MY LIFE.",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 213,
    name: "Subhrajit Goswami",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Gaurav sir is the reason I was able to pass in my exams. I fell in love with subjects like SOM, Manufacturing after studying them from Gaurav sir. Me and my friends we feel blessed thatbwe came to know about Gaurav sir at the right time and he saved us. His teaching is divine and as a person he is a legend, he is so good at heart, 24×7 he thinks only about the welfare of his students. I deeply feel that he works even harder than we as students do, he is more sincere for us than we ourselves. His team is as good as him, every teacher on GAME is perfect at delivering concepts . This platform deserves much more love and I'm sure very soon it will shine.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 214,
    name: "Tushar Panchal",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "I learn everything regarding gate exam from gaurav sir...it's been a great journey",
    rating: 4,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 215,
    name: "Subham Saha",
    branch: "Mechanical",
    course: "Excellence Course | AE & JE",
    targetExams: "PSUs, SSC JE / RRB JE / State AE & JE",
    quote: "Thanks to Gaurav Babu sir for making the subjects that once I found difficult now my favourite ones also Thanks to the Game team for making the learning experience smooth for me. These words aren’t enough to express my gratitude towards Gaurav Babu sir, I am always grateful to Gaurav Babu sir for guiding me in this journey",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 216,
    name: "SUJOY DAS",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Excellence life achievement. The legendary of som (Gaurav Babu), whose guidance helped me achieve my dream job at India's top PSU, IOCL, as a Grade A officer. After completing my B.Tech in 2020, I couldn't afford expensive GATE coaching (Rs. 50,000). I joined a private company, but my dreams were crushed. Two years later, I discovered Gaurav Babu's Game Academic Founder platform, which offered an affordable GATE course (Rs. 15,000). With renewed determination, I studied 15 hours a day for 5 months during this time motivation from Gaurav Babu's videos its very help us, and get result of gate 2024 excellent rank (1st attempt gate2022 rank 11777 and after studied from game academy behalf gourav babu 2nd attempt gate2024 rank 535 ).He's not only my teacher but also my guru. Thank you, Gaurav Babu, for inspiring me to crack GATE and achieve my dream.",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 217,
    name: "Aakash paudwal",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs, BARC, ISRO, SSC JE / RRB JE / State AE & JE",
    quote: "Gaurav sir hamesa basic sy padhte hy or top level tk lekr jaate hy, gaurav sir concept ky saath saath aapko ek kabil insaan,imaandaar ,manavta such ky saath bolna or ek dusre ki madad krna bhi sikhate hy,m kbhi sir sy personal nhi mila hu lekin sir sy baat krke (voice call) sy bhut motivation milta hy, m hmesha aapka rini rhunga sir Thankyou sir. M lakshya batch2.0 ka student hu app m class ky saath saath aapko whatsapp group sir ki personal mentorship bhi milti hy",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 218,
    name: "Sandesh Chavan",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, PSUs, BARC, ISRO, DRDO",
    quote: "Yes, it's really helpful to me.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 219,
    name: "Abhishek Gajanan Ingale",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "When I was wondering on you tube, with lots of confusion, then suddenly I got gaurav sirs som series,from that moment till now I am connected with gaurav sir. The unique think of game is ,this platform makes your subject ready,not for perticular exam . before joining game I was at minus level but ,now I can say that the level is 60.",
    rating: 4,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 220,
    name: "Samir khatib",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Engineering ki padhai fullfill karke padhana sikha hy ham ne sir se",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 221,
    name: "Nishant kaushik",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO",
    quote: "GAME Academy is really a flamboyant platform for gate aspirant Highly thankful for Gaurav sir ji",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 222,
    name: "Dhwanil Patel",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "In depth knowledge in preparation",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 223,
    name: "Pragya Sharma",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "The way Gaurav sir and team take lectures, helped me to gain a lot of technical knowledge of mechanical engineering subjects and everything was so helpful in solving problems of GATE previous years and variety of questions.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 224,
    name: "Mohit kumar shaw",
    branch: "Mechanical",
    course: "Excellence Course | AE & JE",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "yes ek baar ma placement hogaya",
    rating: 4,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 225,
    name: "Nishant kaushik",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO",
    quote: "Gaurav sir is god of mechanical engineering",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 226,
    name: "V NiranjanKumar",
    branch: "Others",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Excellent",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 227,
    name: "SUNEEL KUMAR",
    branch: "Mechanical",
    course: "Excellence Course | AE & JE",
    targetExams: "SSC JE / RRB JE / State AE & JE",
    quote: "After watching Sir's class I started preparing after 10 years. I am enjoying it a lot. Soon I will get a JE job.",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 228,
    name: "Abhinav Singh",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, SSC JE / RRB JE / State AE & JE",
    quote: "The course content that Gaurav sir teaches with is very sorted and well researched, therefore less book reference and reading is required. The notes that I have made in his respective subjects is very helpful in all kinds of psu and gate exams.",
    rating: 4,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 229,
    name: "Anurag Tripathi",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "It impacted a lot as i never thought that i would ever get a chance to study in an IIT but GAME and its team made a dream come true for me",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 230,
    name: "Nikhil Gaur",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs",
    quote: "Sir's teaching style is unique and in every video sir shared his experiences which helps us .",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 231,
    name: "Subhrajit Goswami",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Gaurav sir is the reason I have confidence in myself that I will be able to do it. I know if he's there with me and if I sincerely follow his steps I will surely secure a good job. His way of teaching is godly and I find a complete guide in him who can lead me to success",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 232,
    name: "Venkatsuresh",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, BARC, ISRO",
    quote: "I loved each and everything the concepts and everything. I fell in love with mechanical engineering.",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 233,
    name: "Sandesh Chavan",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, PSUs, ISRO",
    quote: "It really helpful to me. If I join to Gaurav sir during my Btech l was topper of uni. I never seen teacher like Gaurav sir.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 234,
    name: "Abhishek Kumar Singh",
    branch: "Mechanical",
    course: "Excellence Course | AE & JE",
    targetExams: "SSC JE / RRB JE / State AE & JE",
    quote: "Gaurav Babu teaching style awesome....He started any topic from basic to high level.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 235,
    name: "Bhavna Navrang",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "It helps me a lot to understand the basic concepts of Mechanical engineering subject . Bless to be a part of GAME",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 236,
    name: "Suddu kumar",
    branch: "Mechanical",
    course: "Excellence Course | AE & JE",
    targetExams: "SSC JE / RRB JE / State AE & JE",
    quote: "Kafi acha padhate hai Gaurav babu sir",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 237,
    name: "Hemant Kumar Rawate",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs",
    quote: "Yes it impacted me a lot build confidence",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 238,
    name: "Dhwanil M Patel",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Yes",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 239,
    name: "SOURAV KAR",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "PSUs, BARC, ISRO, DRDO",
    quote: "I can't say enough about Gaurav Sir's lectures.His lectures made my technical concept clear.Not only the lectures,but his positive mindset and motivation has really helped me out in my preparation journey.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 240,
    name: "Sher Khan",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs",
    quote: "Cool Mind",
    rating: 4,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 241,
    name: "Aryan Prakash Rai",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE",
    quote: "I have become more confident and the content is too good.",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 242,
    name: "Nikhil Gaur",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Gaurav sir is a true mechanical lover and the way he is teaching it's fabulous .",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 243,
    name: "Dhananjay kumar",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, SSC JE / RRB JE / State AE & JE",
    quote: "Gaurav babu is not only the best teacher for mechanical engineer but also he is also so sensitive for students who faces many problems during journey of preparation . Particularly in case of SOM, FM & production no one can replace him . He delivers his knowledge like he has taken responsibility to make me succeed. So crystal concept and illustration is given related to daily life uses. I have purchased his course GATE 2023 . I am very thankful for him .",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 244,
    name: "Prakash Rawal",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Gaurav sir is the best teacher I've ever seen before not only for teaching but also for proper way to guide even they had knew what's going on students mind. Lot of love by heart and sould.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 245,
    name: "Ashish Ranjan",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs, BARC, ISRO, DRDO",
    quote: "Genuinely, when I was in college, teachers used to skip many topics and there were several topics and a few subjects which I was unable to understand. After joining GAME those topics become easy to understand for me, I'm a slow learner.",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 246,
    name: "Abhiram Sharma",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Excellent Gaurav babu sir is a God of mechanical engineering.",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 247,
    name: "Bhavna Navrang",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "My journey was truly magical under Gaurav Sir's expert guidance. His unique teaching style brought subjects and concepts to life, making them tangible and easy to grasp.",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 248,
    name: "Venkatsuresh",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs, BARC, ISRO, DRDO",
    quote: "Yes. I am actually understanding the concepts here very well. I don't have words to express the sir's teaching but one thing is I am not giving up on my dreams.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 249,
    name: "Shashank kumar singh",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs, BARC",
    quote: "Amazing learning experience under Gaurav Sir. Concepts are crystal clear now.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 250,
    name: "Tushar Panchal",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, ISRO, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "Gaurav sir teaching helped me to change my mindset. Before preparation i always underestimate myself.. But after listening to gaurav sir..he helped me to transform myself.",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 251,
    name: "Subhrajit Goswami",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, PSUs, SSC JE / RRB JE / State AE & JE",
    quote: "Since 2021 Gaurav sir's lecture are my single source of knowledge, I have stopped looking for books, pdfs or any other platform and have single handedly followed his lectures that have allowed me to score good in my graduation exams and I'm now targeting the PSU exams for a stable job since the job I'm in right now is a fixed term contract basis.",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 252,
    name: "Sourabh Tandon",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Gaurav babu sir is the best teacher in the world because he understands students feeling and situations. Everytime he motivate us don't lose hope. Thank you sir (a+b) ka Square + bracket () square",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 253,
    name: "Rakesh Moharana",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Gaurav babu and the teams are also teaching and motivated through out our preparation journey.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 254,
    name: "Varun Rao",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE",
    quote: "Practical learning experience",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 255,
    name: "Shariq Shabbir",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Gaurav sir is my idol teacher, i want to become a better person like gaurav sir",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 256,
    name: "Sandeep Badwaik",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, PSUs, BARC, ISRO",
    quote: "I have started preparation for GATE by watching his YouTube Videos and then I have purchased his Game course. His teaching is absolutely good.",
    rating: 4,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 257,
    name: "Santanu behera",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "gaurav sir's content is super good . It help me boost my confidence",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 258,
    name: "Shreya",
    branch: "Civil",
    course: "Excellence Course | AE & JE",
    targetExams: "SSC JE / RRB JE / State AE & JE",
    quote: "Explanation were very clear and easy to understand, excellence individual support to students who need extra help.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 259,
    name: "Aniruddha Ghosh",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "I like the way of teaching, easy to catch up contents.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 260,
    name: "Manish Bhardwaj",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs, BARC, ISRO, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "Gaurav sir is an excellent teacher and mentor. Because of him only I have got the confidence to appear for the exams.",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 261,
    name: "Abhishek kumar",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, PSUs",
    quote: "I like all the courses of gaurav sir but SOM and manufacturing was very good.",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 262,
    name: "Soumya Malik",
    branch: "Mechanical",
    course: "RRB JE Course",
    targetExams: "GATE, ISRO, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "Direction change of my life",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 263,
    name: "Sanjay pandey",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE, ESE, DRDO, SSC JE / RRB JE / State AE & JE, IAS MECHANICAL OPTIONAL",
    quote: "Courses is not just limited upto competitive exam but it's useful for daily life as well ..sir teach us how to change your overall presonality.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 264,
    name: "Ubaid Amir Rizwi",
    branch: "Mechanical",
    course: "Excellence Course | AE & JE",
    targetExams: "SSC JE / RRB JE",
    quote: "He's a brilliant teacher. Only because of him I enrolled the batch for AE/JE exams. His teaching skills are impressive. He could make me understand every single topic that he taught. Unlike other teachers, Gaurav Babu sir teaches almost every subject of Mechanical except thermal part which is not everyone's cup of tea. So we love him & hatts off to him.",
    rating: 4,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 265,
    name: "Awdhesh Kumar",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Khash Gaurav babu sir se pdhna tha isliye hum join kiye, I am so lucky mujhe sir se pdhne ka moka mila, Hur ek subject sir bahut acche se pdhtae, hur ek sentence /hur ek line ka feel dilate, pdhane ke baad koi daught nhi reh jata, Gaurav babu sir kebl mujhe psnd nhi yha tk ki mae Made easy ka student reh chuka hu yha bhi sir ke chahne wale bahut hain mujhe yha kafhi students bole SOM pdhna /smjhna sir se sikhe hain hum loeg , aaj bhi made easy mae agr Production or design kisi ko smj nhi aata to bahut saare students hain jo yhi suggest krte Gaurav babu sir ke ek baar lectures dekh lo kbhi daught nhi rhega, mae library mae pdhta hu Sir ka platform or App sbhi ko bahut psnd aaya, regionable price pe esa content aaj tk kisi ne provide nhi kiya, Thank you so much, Please ase he blessing apni bnae rkhye ga,",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 266,
    name: "A M rakesh",
    branch: "Mechanical",
    course: "Lakshya Exclusive Mentorship Course",
    targetExams: "GATE, BARC, ISRO",
    quote: "This is 2nd time I enrolled in game academy , Only after joining game academy, i was able to crack my dream barc exam last time. Before joining game i wasn't able to solve problems and couldn't able to atleast crack exam to see interview panel. Thanks to GAME Academy and Gaurav sir. I will continue my preparation and let my dream come true .",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 267,
    name: "Ashok Kumar Saini",
    branch: "Civil",
    course: "RRB JE Course",
    targetExams: "GATE, SSC JE / RRB JE / State AE & JE, Rajasthan jen, aen",
    quote: "Gaurav sir ko youtube par padate dekha tha",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 268,
    name: "Rati Prakash Rout",
    branch: "Mechanical",
    course: "Lakshya Exclusive Mentorship Course",
    targetExams: "GATE, DRDO, SSC JE / RRB JE / State AE & JE",
    quote: "Superb",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 269,
    name: "Mayank Pandey",
    branch: "Mechanical",
    course: "Lakshya | 1 Yr GATE Course",
    targetExams: "GATE",
    quote: "Gaurav Babu Sir always promote the engagement of student with the engineering world by made him feel the impact of different concepts of engineering related to the impact and how they impact the world.",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 270,
    name: "Abhinav pandey",
    branch: "Mechanical",
    course: "Lakshya Pro 1 yr GATE Course",
    targetExams: "GATE, PSUs",
    quote: "Pehle kabhi feel hi ney hua saare subject alag alag padhe...... But sir n saare concept ko ek krke engineering bna dii ab mja bhi aata hai aur tough jesi koi chiz ney lgti i hope jldi hi sir ko proud krne ka mauka dunga",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 271,
    name: "Karan Kumar Jatav",
    branch: "Mechanical",
    course: "Lakshya Pro 1 yr GATE Course",
    targetExams: "GATE",
    quote: "This course and Gaurav Babu Sir have really brought a lot of clarity to my preparation. The way he teaches is so simple that even when the concepts go deep, there’s no confusion at all. His real-life examples make even the toughest topics easy to understand. If I’m a mechanical engineer today, it’s all because of Gaurav Babu Sir.",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 272,
    name: "Shivani Meena",
    branch: "Mechanical",
    course: "Foundation | 2 Yr GATE Course",
    targetExams: "GATE, PSUs, SSC JE / RRB JE / State AE & JE",
    quote: "Sir aapka teaching way bhut accha h 3 sal ke downfall ke bad dobara mene apni teyari suru ki h aapke vedio dekh ke ek new energy mili h thanku so much sir",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  },
  {
    type: 'story',
    id: 273,
    name: "Sandesh Chavan",
    branch: "Mechanical",
    course: "Aadhaaram - Engineering Mathematics Mastery Course",
    targetExams: "GATE",
    quote: "It helps me to clear my all subjects bough Gaurav sir is not only the teachers he is story tell, that way all the concepts are clear in one shirt. Thanks Gaurav sir and team.",
    rating: 5,
    img: "/images/achievers/avatar-3.png"
  },
  {
    type: 'story',
    id: 274,
    name: "Vaseem Mohammed",
    branch: "Mechanical",
    course: "Aadhaaram - Engineering Mathematics Mastery Course",
    targetExams: "GATE",
    quote: "I did mathematics from other educators prior but the quality content that gaurav babu sir provides is worth every penny. Enrolled for calculus as i didnt understood calculus from other educators i that taught but gaurav sir nailed it, he start from complete zero level .",
    rating: 5,
    img: "/images/achievers/avatar-4.png"
  },
  {
    type: 'story',
    id: 275,
    name: "DHIRAJ KUMAR",
    branch: "Mechanical",
    course: "Aadhaaram - Engineering Mathematics Mastery Course",
    targetExams: "GATE",
    quote: "Clear all the concept sequential manner",
    rating: 5,
    img: "/images/achievers/avatar-5.png"
  },
  {
    type: 'story',
    id: 276,
    name: "Rohan yadav",
    branch: "Mechanical",
    course: "Lakshya Pro 1 yr GATE Course",
    targetExams: "GATE",
    quote: "Jis topic se dar lag ta tha vo ab easy lag te he pyq toh bahut easy lag te he sir ke notes se Bahar nahi jata muge exam gourav sir ke supporte se hi exam ki study start kiya ta kiu ki un ke lecture ne sare doubt clear kar diye",
    rating: 5,
    img: "/images/achievers/avatar-1.png"
  },
  {
    type: 'story',
    id: 277,
    name: "SAYAN SAHA",
    branch: "Mechanical",
    course: "Aadhaaram - Engineering Mathematics Mastery Course",
    targetExams: "GATE, BARC, ISRO, SSC JE / RRB JE / State AE & JE",
    quote: "Since 2020, I am watching his lectures on Mechanical subjects and I found that, a student with zero knowledge will have a very strong grip on all subjects of Mechanical Engineering Stream.",
    rating: 5,
    img: "/images/achievers/avatar-2.png"
  }
];

const HERO_STATS = [
  { val: "1000+", label: "PSU selections" },
  { val: "2,000+", label: "Rank Holders" },
  { val: "10,000+", label: "Student Community" },
  { val: "4.9/5", label: "Student Rating" },
];

const FILTER_TABS = [
  { id: 'all', label: 'All Stories', icon: Sparkles },
  { id: 'video', label: 'Ranker Talks', icon: Video },
  { id: 'story', label: 'Reviews', icon: MessageSquare },
  { id: 'whatsapp', label: 'WhatsApp Feedback', icon: CheckCircle2 }
];

// Optimized: Extracted Ranker Card into a memoized sub-component - TALLER VERSION
const RankerCard = React.memo(({ item, onPlay }: { item: any, onPlay?: () => void }) => (
  <div 
    onClick={onPlay}
    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/30 border border-slate-100 hover:shadow-xl hover:shadow-gameTeal/10 transition-all duration-300 cursor-pointer h-[260px] md:h-[300px]"
  >
    <div className="relative h-full overflow-hidden">
      <Image 
        src={item.img} 
        alt={item.name} 
        fill
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
      
      {/* Clean Play Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-11 h-11 bg-[#f2c537] rounded-full flex items-center justify-center shadow-xl text-black group-hover:scale-110 transition-all duration-300">
          <Play size={18} fill="currentColor" className="ml-0.5 text-black" />
        </div>
      </div>
    </div>
  </div>
));

const TestimonialAvatar: React.FC<{ src?: string; name: string }> = ({ src, name }) => {
  const [error, setError] = React.useState(false);
  const firstLetter = name ? name.trim().charAt(0).toUpperCase() : '?';

  if (!src || error) {
    return (
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#075d63] to-teal-500 text-white flex items-center justify-center font-black text-lg shadow-inner">
        {firstLetter}
      </div>
    );
  }

  return (
    <Image 
      src={src} 
      alt={name} 
      fill
      className="w-full h-full rounded-full object-cover border-2 border-white" 
      referrerPolicy="no-referrer"
      onError={() => setError(true)}
    />
  );
};

// Optimized: Extracted Testimonial Card into a memoized sub-component - TALLER DESIGN
const TestimonialCard = React.memo(({ item }: { item: any }) => {
  const branchColor = item.branch === 'Civil' 
    ? 'bg-amber-50 text-amber-800 border-amber-200' 
    : 'bg-teal-50 text-[#075d63] border-teal-100';

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md shadow-slate-200/30 border border-slate-100 relative group hover:border-[#075d63]/30 transition-all duration-300 h-[280px] md:h-[320px] flex flex-col justify-between overflow-hidden">
      <div className="absolute top-4 right-5 opacity-5 group-hover:opacity-10 transition-opacity">
        <Quote size={40} className="text-[#075d63]" />
      </div>
      
      <div>
        <div className="flex items-center gap-3 mb-3 relative z-10">
          <div className="w-11 h-11 rounded-full p-0.5 bg-gradient-to-br from-[#075d63] to-teal-100 shadow-sm relative overflow-hidden shrink-0">
            <TestimonialAvatar src={item.img} name={item.name} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h4 className="font-extrabold text-slate-900 text-sm md:text-base leading-tight truncate">{item.name}</h4>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full border shrink-0 ${branchColor}`}>
                {item.branch || 'Mechanical'}
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider truncate mt-0.5" title={item.course}>
              {item.course || "Lakshya | 1 Yr GATE"}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2 relative z-10">
          <div className="flex gap-0.5 items-center">
            {[...Array(5)].map((_, idx) => (
              <Star 
                key={idx} 
                size={12} 
                fill={idx < (item.rating || 0) ? "#f2c537" : "none"} 
                className={idx < (item.rating || 0) ? "text-[#f2c537]" : "text-slate-200"} 
              />
            ))}
            <span className="text-[10px] font-black text-slate-500 ml-1">({item.rating || 5}/5)</span>
          </div>
          <span className="text-[9px] font-extrabold text-[#075d63] bg-[#075d63]/5 px-2 py-0.5 rounded uppercase tracking-wide truncate max-w-[120px]">
            {item.targetExams ? `${item.targetExams.split('/')[0].split(',')[0]}` : "GATE Course"}
          </span>
        </div>
      </div>

      <div className="flex-1 mt-1 overflow-y-auto scrollbar-thin relative z-10 pr-1">
        <p className="text-slate-600 leading-relaxed text-[12px] md:text-[13px] font-medium italic">
          "{item.quote}"
        </p>
      </div>
    </div>
  );
});

// WhatsApp Screenshot Card - SIMPLIFIED FOR PHONE VIEW
const WhatsAppPhoneCard = React.memo(({ item }: { item: any }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return null;
  }

  return (
    <div className="mb-4 last:mb-0 relative w-full aspect-[9/16] bg-[#e5ddd5]/45 rounded-xl shadow-sm overflow-hidden select-none">
      <Image 
        src={item.img} 
        alt={item.caption || "WhatsApp Screenshot"} 
        fill
        unoptimized
        className="w-full h-full object-contain" 
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
      />
    </div>
  );
});

// Mobile Phone Frame Component with Auto Scroll and Touch/Hover Pause
const MobilePhoneFrame = React.memo(({ children }: { children: React.ReactNode }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 0.5; // continuous scroll speed

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        const canScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
        if (canScroll) {
          scrollContainer.scrollTop += scrollSpeed;
          
          // Loop back to top smoothly if reached close to bottom
          if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight - 2) {
            scrollContainer.scrollTop = 0;
          }
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative mx-auto w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-[0_0_40px_rgba(0,0,0,0.15)] overflow-hidden"
    >
      {/* Notch/Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-800 rounded-b-xl z-30 flex items-center justify-center">
        <div className="w-8 h-1 bg-slate-700 rounded-full"></div>
      </div>
      
      {/* WhatsApp Header Mock */}
      <div className="bg-[#075e54] pt-8 pb-3 px-3 flex items-center gap-2 z-20 relative shadow-md">
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 shrink-0 bg-white/10">
          <Image 
            src="/faculty/gaurav-sir2.jpg" 
            alt="Gaurav Sir" 
            fill
            unoptimized
            className="object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-black text-[11px] leading-tight truncate">Gaurav Sir</h4>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] animate-pulse"></span>
            <span className="text-[#d8f5e1] text-[9px] font-bold">{isPaused ? 'paused' : 'online'}</span>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div 
        ref={scrollRef} 
        className="absolute inset-0 pt-24 pb-6 px-3 overflow-y-auto scrollbar-hide bg-[#e5ddd5]"
      >
        {children}
      </div>
      
      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white border-t border-slate-100 z-20 flex items-center px-4 gap-2">
         <div className="flex-1 h-8 bg-slate-100 rounded-full"></div>
         <div className="w-8 h-8 rounded-full bg-[#128c7e] flex items-center justify-center text-white font-black">
            <MessageSquare size={14} fill="currentColor" />
         </div>
      </div>
    </div>
  );
});

// Optimized: Extracted CTA Section into a memoized sub-component - HEIGHT OPTIMIZED
const AchieversCTA = React.memo(() => (
  <section className="py-12 lg:py-16 bg-gameTealDark relative overflow-hidden">
     {/* Subtle background texture/pattern */}
     <div className="absolute inset-0 bg-slate-900/50 opacity-10 pointer-events-none"></div>
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
     
     <div className="max-w-[1080px] mx-auto px-8 md:px-10 lg:px-12 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
           <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Be the Next <span className="text-gameGold">Success Story</span>
           </h2>
           <p className="text-teal-50/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students who have transformed their careers with GAME Academy. Your journey to AIR 1 starts here.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-gameTealDark px-8 py-3.5 rounded-2xl font-black text-base shadow-2xl hover:bg-gameGold hover:text-[#050505] hover:-translate-y-1 transition-all flex items-center justify-center gap-3">
                 EXPLORE COURSES 
                 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
           </div>
        </motion.div>
     </div>
  </section>
));

interface AchieversPageProps {
  initialFilter?: 'all' | 'video' | 'story';
}

const AchieversPage: React.FC<AchieversPageProps> = ({ initialFilter = 'all' }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Spreadsheet Directory state
  const [dbSearch, setDbSearch] = useState('');
  const [dbBranch, setDbBranch] = useState('all');
  const [dbCourse, setDbCourse] = useState('all');
  const [dbRating, setDbRating] = useState('all');
  const [dbPage, setDbPage] = useState(1);
  const [expandedQuotes, setExpandedQuotes] = useState<number[]>([]);

  const toggleExpandQuote = (id: number) => {
    setExpandedQuotes(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const useDraggableScroll = (loopCount: number = 3) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [hasMoved, setHasMoved] = useState(false);

    // Start in the middle for infinite loop effect
    useEffect(() => {
      if (ref.current) {
        const scrollWidth = ref.current.scrollWidth;
        ref.current.scrollLeft = scrollWidth / loopCount;
      }
    }, []);

    const onMouseDown = (e: React.MouseEvent) => {
      if (!ref.current) return;
      setIsDragging(true);
      setHasMoved(false);
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    };

    const onMouseUp = (e: React.MouseEvent) => {
      setIsDragging(false);
    };

    const onMouseMove = (e: React.MouseEvent) => {
      if (!isDragging || !ref.current) return;
      e.preventDefault();
      const x = e.pageX - ref.current.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed
      
      if (Math.abs(x - startX) > 5) {
        setHasMoved(true);
      }
      
      ref.current.scrollLeft = scrollLeft - walk;

      // Infinite loop logic
      const scrollWidth = ref.current.scrollWidth;
      const clientWidth = ref.current.clientWidth;
      const singleSetWidth = scrollWidth / loopCount;

      if (ref.current.scrollLeft <= 0) {
        ref.current.scrollLeft = singleSetWidth;
      } else if (ref.current.scrollLeft >= scrollWidth - clientWidth) {
        ref.current.scrollLeft = singleSetWidth * (loopCount - 2);
      }
    };

    const handleItemClick = (callback: () => void) => {
      if (!hasMoved) {
        callback();
      }
    };

    const scroll = (direction: 'left' | 'right') => {
      if (!ref.current) return;
      const clientWidth = ref.current.clientWidth;
      const amount = clientWidth * 0.75;
      ref.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth'
      });
    };

    return {
      events: {
        ref,
        onMouseDown,
        onMouseUp,
        onMouseLeave: onMouseUp,
        onMouseMove,
      },
      handleItemClick,
      scroll
    };
  };

  const videoSlider = useDraggableScroll();
  const textSlider = useDraggableScroll();

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Generate exactly 12 WhatsApp stories to only display the 12 screenshots with actual images.
  // We map the image names sequence to /whatsapp-result-1.png through /whatsapp-result-12.png.
  const whatsappStories = Array.from({ length: 12 }, (_, index) => {
    const originalWhatsAppItems = ALL_STORIES.filter(s => s.type === 'whatsapp');
    const originalIndex = index % Math.max(1, originalWhatsAppItems.length);
    const originalItem = originalWhatsAppItems[originalIndex] || {
      caption: `Outstanding score in the exams masterclass with Gaurav Sir! Screenshot #${index + 1}`
    };
    return {
      type: 'whatsapp',
      id: 10 + index,
      img: `/whatsapp-result-${index + 1}.png`,
      caption: originalItem.caption || `Outstanding score in the exams masterclass with Gaurav Sir! Student feedback #${index + 1}`
    };
  });
  const videoStories = ALL_STORIES.filter(s => s.type === 'video');
  const textStories = ALL_STORIES.filter(s => s.type === 'story');

  // Create looped arrays
  const loopedVideoStories = [...videoStories, ...videoStories, ...videoStories];
  const loopedTextStories = [...textStories, ...textStories, ...textStories];

  // Filtering logic for the Interactive Database spreadsheet
  const filteredDbStories = textStories.filter(story => {
    const matchesSearch = dbSearch === '' || 
      story.name?.toLowerCase().includes(dbSearch.toLowerCase()) ||
      story.course?.toLowerCase().includes(dbSearch.toLowerCase()) ||
      story.targetExams?.toLowerCase().includes(dbSearch.toLowerCase()) ||
      story.quote?.toLowerCase().includes(dbSearch.toLowerCase()) ||
      story.branch?.toLowerCase().includes(dbSearch.toLowerCase());

    const matchesBranch = dbBranch === 'all' || story.branch === dbBranch;
    
    const matchesCourse = dbCourse === 'all' || (
      dbCourse === 'lakshya' && story.course?.toLowerCase().includes('lakshya') ||
      dbCourse === 'excellence' && story.course?.toLowerCase().includes('excellence') ||
      dbCourse === 'foundation' && story.course?.toLowerCase().includes('foundation') ||
      dbCourse === 'aadhaaram' && story.course?.toLowerCase().includes('aadhaaram') ||
      dbCourse === 'mentorship' && story.course?.toLowerCase().includes('mentorship')
    );

    const matchesRating = dbRating === 'all' || (story.rating && story.rating >= parseInt(dbRating));

    return matchesSearch && matchesBranch && matchesCourse && matchesRating;
  });

  const ITEMS_PER_PAGE = 8;
  const totalPages = Math.ceil(filteredDbStories.length / ITEMS_PER_PAGE);
  const currentPageStories = filteredDbStories.slice((dbPage - 1) * ITEMS_PER_PAGE, dbPage * ITEMS_PER_PAGE);

  // Auto reset page on filter change
  useEffect(() => {
    setDbPage(1);
  }, [dbSearch, dbBranch, dbCourse, dbRating]);

  const handlePlayVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gameTeal selection:text-white -mt-20">
      
      {/* 1. Hero Section: Premium Dark Theme - HEIGHT OPTIMIZED & VISIBILITY FIXED */}
      <section className="relative px-8 md:px-10 lg:px-12 pt-44 pb-10 lg:pt-52 lg:pb-14 overflow-hidden bg-[#0f1115] text-white">
         
         {/* Background Effects */}
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gameTeal/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gameGold/5 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute inset-0 bg-slate-900/50 opacity-10"></div>

         <div className="max-w-[1200px] mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f2c537] border border-[#f2c537]/20 mb-4 shadow-lg shadow-[#f2c537]/10">
                   <Crown size={12} className="text-black fill-black" />
                   <span className="text-[9px] font-bold uppercase tracking-widest text-black">Hall of Fame</span>
                </div>

               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 tracking-tight leading-[0.9]">
                  Celebrating <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gameTeal via-teal-400 to-gameGold underline decoration-white/20 decoration-8 underline-offset-8">Excellence</span>
               </h1>

               <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed mt-4">
                  Real stories of grit, perseverance, and triumph. Meet the students who turned their dreams into reality with GAME.
               </p>

               {/* Stats Row */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-6">
                  {HERO_STATS.map((stat, i) => (
                     <div key={i} className="text-center">
                        <div className="text-2xl font-black text-white mb-0.5">{stat.val}</div>
                        <div className="text-[9px] font-bold text-[#f2c537] uppercase tracking-wider">{stat.label}</div>
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* 2. Content Grid: 30/70 Split with Sliders - HEIGHT OPTIMIZED */}
      <section className="py-6 lg:py-8 px-8 md:px-10 lg:px-12 bg-slate-50 relative overflow-hidden">
         <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-start justify-center">
               
               {/* Column 1: Mobile Phone (25%) */}
               <div className="lg:w-[25%] flex flex-col items-center">
                  <div className="w-full max-w-[240px]">
                     <div className="text-center mb-4">
                        <h3 className="text-2xl font-black text-slate-900 leading-tight">Real Conversations</h3>
                        <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">WhatsApp Feedback</p>
                     </div>
                     <MobilePhoneFrame>
                        {whatsappStories.map((item) => (
                           <WhatsAppPhoneCard key={item.id} item={item} />
                        ))}
                     </MobilePhoneFrame>
                  </div>
               </div>

               {/* Column 2: Sliders (75%) */}
               <div className="lg:w-[75%] overflow-hidden lg:h-[760px] flex flex-col justify-between py-1">
                  
                  <div className="mb-4 flex items-center justify-between px-2">
                     <div>
                        <h3 className="text-3xl font-black text-slate-900 leading-tight tracking-tight">Student Success Stories</h3>
                        <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest">Video & Written Testimonials</p>
                     </div>
                     <div className="hidden md:flex gap-2">
                        <button 
                           type="button"
                           onClick={() => { videoSlider.scroll('left'); textSlider.scroll('left'); }}
                           className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#075d63] hover:bg-slate-100 hover:border-[#075d63]/30 cursor-pointer transition-all active:scale-95"
                           aria-label="Scroll left"
                        >
                           <ArrowRight size={18} className="rotate-180" />
                        </button>
                        <button 
                           type="button"
                           onClick={() => { videoSlider.scroll('right'); textSlider.scroll('right'); }}
                           className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#075d63] hover:bg-slate-100 hover:border-[#075d63]/30 cursor-pointer transition-all active:scale-95"
                           aria-label="Scroll right"
                        >
                           <ArrowRight size={18} />
                        </button>
                     </div>
                  </div>

                  {/* Video Slider */}
                  <div className="w-full">
                     <div className="mb-2 px-2">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Ranker Talks</p>
                     </div>
                     
                     <div 
                        {...videoSlider.events}
                        className="flex gap-4 overflow-x-auto pb-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                     >
                        {loopedVideoStories.map((item, index) => (
                           <div key={`${item.id}-${index}`} className="min-w-[200px] md:min-w-[260px] snap-start">
                              <RankerCard 
                                item={item} 
                                onPlay={() => videoSlider.handleItemClick(() => handlePlayVideo(item.video))}
                              />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Text Slider */}
                  <div className="w-full">
                     <div className="mb-2 px-2">
                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Written Feedback</p>
                     </div>
                     
                     <div 
                        {...textSlider.events}
                        className="flex gap-4 overflow-x-auto pb-6 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-track]:rounded-full snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
                     >
                        {loopedTextStories.map((item, index) => (
                           <div key={`${item.id}-${index}`} className="min-w-[240px] md:min-w-[340px] snap-start">
                              <TestimonialCard item={item} />
                           </div>
                        ))}
                     </div>
                  </div>

               </div>

            </div>
         </div>
      </section>

      {/* 3. Interactive Student Feedback Database */}
      <section className="py-8 lg:py-12 px-8 md:px-10 lg:px-12 bg-white relative border-t border-slate-100">
         <div className="max-w-[1400px] mx-auto">
            
            {/* Database Header */}
            <div className="mb-8">
               <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-gameTeal/10 border border-gameTeal/20 text-[#075d63] rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                  <SlidersHorizontal size={12} /> Verified Spreadsheet Directory
               </div>
               <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Student Feedback Database
               </h2>
               <p className="text-slate-500 text-xs mt-1 max-w-xl">
                  Filter, search, and browse all {filteredDbStories.length} detailed review responses collected directly from our verified student surveys.
               </p>
            </div>

            {/* Filter controls */}
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-end">
               
               {/* Search Bar */}
               <div className="flex-1 min-w-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Search Submissions</label>
                  <div className="relative">
                     <span className="absolute inset-y-0 left-3 flex items-center text-slate-400 pointer-events-none">
                        <Search size={16} />
                     </span>
                     <input 
                        type="text" 
                        value={dbSearch}
                        onChange={(e) => setDbSearch(e.target.value)}
                        placeholder="Search student name, courses, exams, or feedback text..."
                        className="w-full pl-10 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:border-[#075d63] focus:ring-1 focus:ring-[#075d63] outline-none transition-all shadow-sm"
                     />
                  </div>
               </div>

               {/* Branch Filter */}
               <div className="w-full md:w-36 shrink-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Branch</label>
                  <select 
                     value={dbBranch}
                     onChange={(e) => setDbBranch(e.target.value)}
                     className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:border-[#075d63] focus:ring-1 focus:ring-[#075d63] outline-none transition-all shadow-sm font-semibold text-slate-800"
                  >
                     <option value="all">All Branches</option>
                     <option value="Mechanical">Mechanical</option>
                     <option value="Civil">Civil</option>
                  </select>
               </div>

               {/* Course Filter */}
               <div className="w-full md:w-44 shrink-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Course Enrolled</label>
                  <select 
                     value={dbCourse}
                     onChange={(e) => setDbCourse(e.target.value)}
                     className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:border-[#075d63] focus:ring-1 focus:ring-[#075d63] outline-none transition-all shadow-sm font-semibold text-slate-800"
                  >
                     <option value="all">All Courses</option>
                     <option value="lakshya">Lakshya Courses</option>
                     <option value="excellence">Excellence Courses</option>
                     <option value="foundation">Foundation Courses</option>
                     <option value="aadhaaram">Aadhaaram Maths</option>
                     <option value="mentorship">Mentorship Exclusive</option>
                  </select>
               </div>

               {/* Rating Filter */}
               <div className="w-full md:w-32 shrink-0">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Min Rating</label>
                  <select 
                     value={dbRating}
                     onChange={(e) => setDbRating(e.target.value)}
                     className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:border-[#075d63] focus:ring-1 focus:ring-[#075d63] outline-none transition-all shadow-sm font-semibold text-[#075d63]"
                  >
                     <option value="all">All Ratings</option>
                     <option value="5">⭐⭐⭐⭐⭐ (5.0)</option>
                     <option value="4">⭐⭐⭐⭐ (4.0+)</option>
                  </select>
               </div>

               {/* Clear Option button if any filters applied */}
               {(dbSearch !== '' || dbBranch !== 'all' || dbCourse !== 'all' || dbRating !== 'all') && (
                  <button 
                     onClick={() => {
                        setDbSearch('');
                        setDbBranch('all');
                        setDbCourse('all');
                        setDbRating('all');
                     }}
                     className="text-[10px] font-black text-rose-600 hover:text-rose-700 uppercase tracking-widest py-2.5 px-1 shrink-0 self-center"
                  >
                     Reset
                  </button>
               )}

            </div>

            {/* Structured Grid/Spreadsheet View */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden shadow-xl shadow-slate-100/50 bg-white">
               
               {/* Desktop Spreadsheet (Visible on md and up) */}
               <div className="hidden md:block overflow-x-auto">
                  <table className="w-full border-collapse text-left" id="reviews-spreadsheet">
                     <thead>
                        <tr className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider border-b border-slate-800">
                           <th className="py-4 px-5 w-[18%]">Student Name</th>
                           <th className="py-4 px-4 w-[11%] text-center">Branch</th>
                           <th className="py-4 px-4 w-[22%]">Course Enrolled</th>
                           <th className="py-4 px-4 w-[20%]">Target Exams</th>
                           <th className="py-4 px-4 w-[10%] text-center">Survey Rating</th>
                           <th className="py-4 px-5 w-[29%]">Impact & Feedback</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100 divide-dotted text-xs text-slate-700">
                        {currentPageStories.length === 0 ? (
                           <tr>
                              <td colSpan={6} className="py-12 text-center text-slate-400 font-medium text-sm">
                                 No matching student feedback responses found in the database.
                              </td>
                           </tr>
                        ) : (
                           currentPageStories.map((story) => {
                              const isCivil = story.branch === 'Civil';
                              const isExpanded = expandedQuotes.includes(story.id);
                              
                              return (
                                 <tr key={story.id} className="hover:bg-slate-50/50 transition-colors group">
                                    {/* Name Row */}
                                    <td className="py-3 px-5 font-bold text-slate-900">
                                       <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-br from-gameTeal/20 to-teal-100 relative overflow-hidden shrink-0">
                                             <TestimonialAvatar src={story.img} name={story.name} />
                                          </div>
                                          <span className="truncate">{story.name}</span>
                                       </div>
                                    </td>
                                    
                                    {/* Branch Pill */}
                                    <td className="py-3 px-4 text-center">
                                       <span className={`inline-block text-[9px] font-black px-2.5 py-0.5 rounded-full border ${
                                          isCivil 
                                             ? "bg-amber-50 text-amber-800 border-amber-200" 
                                             : "bg-teal-50 text-[#075d63] border-teal-100"
                                       }`}>
                                          {story.branch || 'Mechanical'}
                                       </span>
                                    </td>

                                    {/* Course Details */}
                                    <td className="py-3 px-4 font-semibold text-slate-800 group-hover:text-black">
                                       {story.course || 'Lakshya | 1 Yr GATE Course'}
                                    </td>

                                    {/* Target Exams List */}
                                    <td className="py-3 px-4">
                                       <div className="flex flex-wrap gap-1">
                                          {story.targetExams?.split(',').map((exam, idx) => (
                                             <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] px-1.5 py-0.5 rounded font-black uppercase tracking-wide">
                                                {exam.trim()}
                                             </span>
                                          )) || <span className="text-slate-400">-</span>}
                                       </div>
                                    </td>

                                    {/* Numeric Rating with Star */}
                                    <td className="py-3 px-4 text-center font-bold">
                                       <div className="flex items-center justify-center gap-1">
                                          <Star size={11} fill="#f2c537" className="text-[#f2c537]" />
                                          <span className="text-slate-800">{story.rating}.0</span>
                                       </div>
                                    </td>

                                    {/* Quote / Feedback Text */}
                                    <td className="py-3 px-5 relative">
                                       <div className="leading-relaxed font-semibold">
                                          {isExpanded ? (
                                             <div className="whitespace-normal">
                                                "{story.quote}"
                                                <button 
                                                   onClick={() => toggleExpandQuote(story.id)}
                                                   className="text-[10px] font-extrabold text-[#075d63] ml-2 underline uppercase hover:text-black cursor-pointer"
                                                >
                                                   Show less
                                                </button>
                                             </div>
                                          ) : (
                                             <div className="whitespace-normal">
                                                "{story.quote?.slice(0, 100)}{story.quote?.length > 100 ? '...' : ''}"
                                                {story.quote?.length > 100 && (
                                                   <button 
                                                      onClick={() => toggleExpandQuote(story.id)}
                                                      className="text-[10px] font-extrabold text-[#075d63] ml-2 underline uppercase hover:text-black cursor-pointer whitespace-nowrap"
                                                   >
                                                      Read entire text
                                                   </button>
                                                )}
                                             </div>
                                          )}
                                       </div>
                                    </td>
                                 </tr>
                              );
                           })
                        )}
                     </tbody>
                  </table>
               </div>

               {/* Mobile Dense List (Visible on mobile only) */}
               <div className="md:hidden divide-y divide-slate-100">
                  {currentPageStories.length === 0 ? (
                     <div className="py-12 text-center text-slate-400 text-xs">
                        No matching student feedback responses found.
                     </div>
                  ) : (
                     currentPageStories.map((story) => {
                        const isCivil = story.branch === 'Civil';
                        const isExpanded = expandedQuotes.includes(story.id);
                        
                        return (
                           <div key={story.id} className="p-4 bg-white hover:bg-slate-50/50">
                              <div className="flex items-center justify-between mb-2">
                                 <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-br from-gameTeal/20 to-teal-100 relative overflow-hidden shrink-0">
                                       <TestimonialAvatar src={story.img} name={story.name} />
                                    </div>
                                    <div>
                                       <h4 className="font-extrabold text-slate-900 text-sm">{story.name}</h4>
                                       <span className={`inline-block text-[8px] font-black px-1.5 py-0.5 rounded-full border ${
                                          isCivil 
                                             ? "bg-amber-50 text-amber-800 border-amber-200" 
                                             : "bg-teal-50 text-[#075d63] border-teal-100"
                                       }`}>
                                          {story.branch || 'Mechanical'}
                                       </span>
                                    </div>
                                 </div>

                                 <div className="flex items-center gap-0.5 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-lg">
                                    <Star size={10} fill="#f2c537" className="text-[#f2c537]" />
                                    <span className="text-[10px] font-bold text-slate-700">{story.rating}.0</span>
                                 </div>
                              </div>

                              <div className="space-y-1.5 text-[11px] mb-3">
                                 <div>
                                    <span className="text-slate-400 font-extrabold uppercase text-[9px] tracking-wider block">Course Enrolled:</span>
                                    <span className="font-semibold text-slate-800">{story.course}</span>
                                 </div>
                                 <div>
                                    <span className="text-slate-400 font-extrabold uppercase text-[9px] tracking-wider block">Target Exams:</span>
                                    <div className="flex flex-wrap gap-1 mt-0.5">
                                       {story.targetExams?.split(',').map((exam, idx) => (
                                          <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] px-1 py-0.2 rounded font-black uppercase">
                                             {exam.trim()}
                                          </span>
                                       ))}
                                    </div>
                                 </div>
                              </div>

                              <div className="bg-slate-50/50 p-2.5 rounded-lg border border-slate-100/50 text-[11.5px] leading-relaxed font-semibold">
                                 {isExpanded ? (
                                    <p>
                                       "{story.quote}"
                                       <button 
                                          onClick={() => toggleExpandQuote(story.id)}
                                          className="text-[9px] font-black text-[#075d63] ml-1 uppercase underline block mt-1"
                                       >
                                          Show Less
                                       </button>
                                    </p>
                                 ) : (
                                    <p>
                                       "{story.quote?.slice(0, 80)}{story.quote?.length > 80 ? '...' : ''}"
                                       {story.quote?.length > 80 && (
                                          <button 
                                             onClick={() => toggleExpandQuote(story.id)}
                                             className="text-[9px] font-black text-[#075d63] ml-1 uppercase underline inline"
                                          >
                                             Read full
                                          </button>
                                       )}
                                    </p>
                                 )}
                              </div>

                           </div>
                        );
                     })
                  )}
               </div>

            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
               <div className="flex items-center justify-between border-t border-slate-100 bg-white px-4 py-3 sm:px-6 mt-4">
                  <div className="flex flex-1 justify-between sm:hidden">
                     <button
                        onClick={() => setDbPage(p => Math.max(p - 1, 1))}
                        disabled={dbPage === 1}
                        className={`relative inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 transition-colors uppercase cursor-pointer ${
                           dbPage === 1 ? 'opacity-50 pointer-events-none' : ''
                        }`}
                     >
                        Previous
                     </button>
                     <button
                        onClick={() => setDbPage(p => Math.min(p + 1, totalPages))}
                        disabled={dbPage === totalPages}
                        className={`relative ml-3 inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-700 hover:bg-slate-50 transition-colors uppercase cursor-pointer ${
                           dbPage === totalPages ? 'opacity-50 pointer-events-none' : ''
                        }`}
                     >
                        Next
                     </button>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                     <div>
                        <p className="text-xs text-slate-500">
                           Showing <span className="font-extrabold text-slate-900">{((dbPage - 1) * ITEMS_PER_PAGE) + 1}</span> to{' '}
                           <span className="font-extrabold text-slate-900">
                              {Math.min(dbPage * ITEMS_PER_PAGE, filteredDbStories.length)}
                           </span>{' '}
                           of <span className="font-extrabold text-slate-900">{filteredDbStories.length}</span> verified submissions
                        </p>
                      </div>
                      <div>
                         <nav className="isolate inline-flex -space-x-px rounded-xl shadow-sm gap-1" aria-label="Pagination">
                            <button
                               onClick={() => setDbPage(p => Math.max(p - 1, 1))}
                               disabled={dbPage === 1}
                               className={`relative inline-flex items-center rounded-l-md px-2.5 py-1.5 text-slate-400 hover:bg-slate-50 focus:z-20 border border-slate-200 rounded-lg bg-white cursor-pointer ${
                                  dbPage === 1 ? 'opacity-40 pointer-events-none' : ''
                               }`}
                            >
                               <span className="sr-only">Previous</span>
                               <ChevronLeft size={16} />
                            </button>
                            
                            {[...Array(totalPages)].map((_, i) => (
                               <button
                                  key={i + 1}
                                  onClick={() => setDbPage(i + 1)}
                                  className={`relative inline-flex items-center px-3.5 py-1.5 text-xs font-bold rounded-lg ${
                                     dbPage === (i + 1)
                                        ? 'z-10 bg-[#075d63] text-white border border-[#075d63]'
                                        : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                                  }`}
                               >
                                  {i + 1}
                               </button>
                            ))}

                            <button
                               onClick={() => setDbPage(p => Math.min(p + 1, totalPages))}
                               disabled={dbPage === totalPages}
                               className={`relative inline-flex items-center rounded-r-md px-2.5 py-1.5 text-slate-400 hover:bg-slate-50 focus:z-20 border border-slate-200 rounded-lg bg-white cursor-pointer ${
                                  dbPage === totalPages ? 'opacity-40 pointer-events-none' : ''
                               }`}
                            >
                               <span className="sr-only">Next</span>
                               <ChevronRight size={16} />
                            </button>
                         </nav>
                      </div>
                   </div>
                </div>
             )}

          </div>
       </section>

      {/* 3. CTA Section */}
      <AchieversCTA />

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-900/95 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
              
              <iframe 
                src={activeVideo}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AchieversPage;
