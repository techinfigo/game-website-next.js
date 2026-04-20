import React from 'react';
import { 
  Shield, Wallet, HardHat, TrendingUp, Target, Award, ShieldCheck, 
  Banknote, Scale, Flag, Coins, Building2, Newspaper, Anchor, Train, Ticket
} from 'lucide-react';

export const keyHighlights = [
  {
    label: "Prestige & Security",
    title: "A Golden Ticket to a Respected & Secure Government Career.",
    desc: "Secure a Group B (Non-Gazetted) position that commands respect in society and provides lifelong stability.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80", 
    icon: Shield,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    label: "Salary & Perks",
    title: "Attractive & Progressive Salary with Fantastic Perks",
    desc: "Enjoy Level-6 pay scale with HRA, DA, medical benefits, and a lifestyle that ensures prosperity for you and your family.",
    image: "https://images.unsplash.com/photo-1589723900234-453664d4ec18?auto=format&fit=crop&w=800&q=80", 
    icon: Wallet,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    label: "Core Sectors",
    title: "Direct Entry into India's Core Infrastructure Sectors",
    desc: "Work on massive national projects like bridges, dams, and modern railways. See your engineering impact in real-time.",
    image: "https://images.unsplash.com/photo-1503387263359-53b769212261?auto=format&fit=crop&w=800&q=80", 
    icon: HardHat,
    color: "text-gameGoldDark",
    bg: "bg-gameGold/5"
  },
  {
    label: "Career Growth",
    title: "Clear & Time-Bound Career Progression to Executive Ranks",
    desc: "Climb the ladder from Junior Engineer to Assistant Engineer, Executive Engineer, and up to Engineer-in-Chief.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80", 
    icon: TrendingUp,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    label: "Achievable Goal",
    title: "Achievable Goal with a Well-Defined Exam Pattern",
    desc: "With a structured syllabus and clarity in pattern, SSC-JE is an achievable dream for dedicated Diploma and Degree holders.",
    image: "https://images.unsplash.com/photo-1503387762-592dec5832f2?auto=format&fit=crop&w=800&q=80", 
    icon: Target,
    color: "text-gameGoldDark",
    bg: "bg-gameGold/5"
  }
];

export const sscJeCourses = [
  {
    title: "Excellence Course - Civil Engineering",
    branch: "Civil",
    price: "₹14,999",
    originalPrice: "₹24,999",
    discount: "40% OFF",
    features: ["Full Syllabus Coverage", "Live & Recorded Classes", "PYQ Analysis", "Test Series Included"],
    image: "https://images.unsplash.com/photo-1503387762-592dec5832f2?fit=crop&w=800&q=80",
    tag: "Best Seller"
  },
  {
    title: "Excellence Course - Mechanical Engineering",
    branch: "Mechanical",
    price: "₹14,999",
    originalPrice: "₹24,999",
    discount: "40% OFF",
    features: ["Full Syllabus Coverage", "Live & Recorded Classes", "PYQ Analysis", "Test Series Included"],
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?fit=crop&w=800&q=80",
    tag: "Popular"
  },
  {
    title: "Excellence Course - Electrical Engineering",
    branch: "Electrical",
    price: "₹14,999",
    originalPrice: "₹24,999",
    discount: "40% OFF",
    features: ["Full Syllabus Coverage", "Live & Recorded Classes", "PYQ Analysis", "Test Series Included"],
    image: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?fit=crop&w=800&q=80",
    tag: "Trending"
  }
];

export const sscJeResults = [
  {
    name: "Ananya Das",
    exam: "SSC-JE 2023",
    rank: "AIR 4",
    branch: "Civil",
    quote: "GAME Academy doesn't just teach you subjects; they teach you how to think like an engineer. Best decision of my life.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Amit Patel",
    exam: "SSC-JE 2023",
    rank: "AIR 12",
    branch: "Electrical",
    quote: "The conceptual clarity I got from Gaurav Sir is unmatched. Every complex topic was broken down into simple parts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Rajesh Kumar",
    exam: "SSC-JE 2022",
    rank: "AIR 25",
    branch: "Mechanical",
    quote: "The mentorship program kept me on track when I felt lost. It's not just a coaching center, it's a family.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=200&h=200&q=80"
  },
  {
    name: "Priya Sharma",
    exam: "SSC-JE 2023",
    rank: "AIR 8",
    branch: "Civil",
    quote: "The test series and PYQ analysis provided by GAME were instrumental in my success. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200&q=80"
  }
];

export const choiceReasons = [
  {
    title: "Prestigious Government Job",
    desc: "SSC-JE offers a Group B (Non-Gazetted) position, providing job satisfaction, recognition, and the opportunity to contribute to the nation’s infrastructure development.",
    icon: Award,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    title: "Job Security and Stability",
    desc: "As a government job, SSC-JE ensures unmatched job security, timely salary increments, and retirement benefits, including a pension plan.",
    icon: ShieldCheck,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    title: "Attractive Salary and Perks",
    desc: "Enjoy a lucrative salary as per the 7th Pay Commission (Pay Level-6) along with allowances like DA (Dearness Allowance), HRA (House Rent Allowance), medical facilities, and travel benefits.",
    icon: Banknote,
    color: "text-gameGoldDark",
    bg: "bg-gameGold/5"
  },
  {
    title: "Career Growth Opportunities",
    desc: "SSC-JE provides clear promotion pathways, allowing candidates to advance to higher posts such as Assistant Engineer (AE) and Executive Engineer (EE) through departmental exams and experience.",
    icon: TrendingUp,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    title: "Work-Life Balance",
    desc: "With fixed working hours, leave benefits, and structured workloads, SSC-JE ensures an excellent work-life balance for its employees.",
    icon: Scale,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    title: "Exposure to Major Projects",
    desc: "Work on prestigious government projects in departments like CPWD, MES, Railways, and Central Water Commission, gaining hands-on experience in Civil, Mechanical, and Electrical Engineering domains.",
    icon: HardHat,
    color: "text-gameGoldDark",
    bg: "bg-gameGold/5"
  },
  {
    title: "Nation-Building Contribution",
    desc: "Play a key role in critical public infrastructure projects and contribute to the country’s development in sectors like roads, bridges, water supply, and energy.",
    icon: Flag,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  },
  {
    title: "Affordable Preparation",
    desc: "SSC-JE preparation is more accessible compared to other competitive exams, making it a cost-effective path to a stable and rewarding career.",
    icon: Coins,
    color: "text-gameTeal",
    bg: "bg-gameTeal/5"
  }
];

export const detailedPostData = [
  {
    no: 1,
    org: "Border Roads Organization (BRO)",
    posts: [
      {
        name: "JE (C)",
        qual: "Degree in Civil Engineering from a recognized University/Institute; or (a) Three years Diploma in Civil Engineering from a recognized University/ Institute/ Board and (b) Two years' of working experience in Planning/ Execution/ Maintenance of Civil Engineering works."
      },
      {
        name: "JE (E & M)",
        qual: "Degree in Electrical or Mechanical Engineering from a recognized University/Institute; or (a) Three years Diploma in Electrical/ Automobile/ Mechanical Engineering from a recognized University/ Institute/ Board and (b) Two years' experience in Planning/ Execution/ Maintenance of Electrical or Mechanical Engineering works."
      }
    ],
    age: "Up to 30 years"
  },
  {
    no: 2,
    org: "Brahmaputra Board, Ministry of Jal Shakti",
    posts: [
      { name: "JE (C)", qual: "Three years Diploma in Civil Engineering from a recognized University or Institute." }
    ],
    age: "Up to 30 years"
  },
  {
    no: 3,
    org: "Central Water Commission",
    posts: [
      { name: "JE (M)", qual: "Bachelor’s Degree or Diploma in Mechanical Engineering from a recognized University or Institute." },
      { name: "JE (C)", qual: "Bachelor’s Degree or Diploma in Civil Engineering from a recognized University or Institute." }
    ],
    age: "Up to 30 years"
  },
  {
    no: 4,
    org: "Central Public Works Department (CPWD)",
    posts: [
      { name: "JE (E)", qual: "Diploma in Electrical or Mechanical Engineering from a recognized University or Institute." },
      { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized University or Institute." }
    ],
    age: "Up to 32 years"
  },
  {
    no: 5,
    org: "Central Water and Power Research Station",
    posts: [
      { name: "JE (E)", qual: "Diploma in Electrical Engineering from a recognized Institute." },
      { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized Institute." }
    ],
    age: "Up to 30 years"
  },
  {
    no: 6,
    org: "DGQA-NAVAL, Ministry of Defence",
    posts: [
      {
        name: "JE (M)",
        qual: "Degree in Mechanical Engineering from a recognized Institute; or (a) Three years Diploma in Mechanical Engineering from a recognized University or Institution plus (b) One year experience in the respective field."
      },
      {
        name: "JE (E)",
        qual: "Degree in Electrical Engineering from a recognized University; or (a) Three years Diploma in Electrical Engineering from a recognized University or Institution plus (b) One year experience in the respective field."
      }
    ],
    age: "Up to 30 years"
  },
  {
    no: 7,
    org: "Farakka Barrage Project, Ministry of Jal Shakti",
    posts: [
      { name: "JE (E)", qual: "Diploma in Electrical Engineering from a recognized University or Institute or Board." },
      { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized University or Institute or Board." }
    ],
    age: "Up to 30 years"
  },
  {
    no: 8,
    org: "Military Engineer Services (MES)",
    posts: [
      {
        name: "JE (C)",
        qual: "Degree in Civil Engineering from a recognized University; or (a) Three years Diploma in Civil Engineering from a recognized Institute or University or Board and (b) Two years' experience in Planning Execution and Maintenance of Civil Engineering works."
      },
      {
        name: "JE (E & M)",
        qual: "Degree in Electrical or Mechanical Engineering from a recognized University; or (a) Three years Diploma in Electrical or Mechanical Engineering from a recognized Institute or University or Board and (b) Two years' experience in Planning Execution and Maintenance of Electrical or Mechanical Engineering Works."
      }
    ],
    age: "Up to 30 years"
  },
  {
    no: 9,
    org: "National Technical Research Organization (NTRO)",
    posts: [
      { name: "JE (C)", qual: "Diploma in Civil Engineering from a recognized University/Institute." }
    ],
    age: "Up to 30 years"
  }
];

export const ageRelaxationData = [
  { code: 1, category: "SC/ ST", relaxation: "5 years" },
  { code: 2, category: "OBC", relaxation: "3 years" },
  { code: 3, category: "PwD (Unreserved/EWS)", relaxation: "10 years" },
  { code: 4, category: "PWD (OBC)", relaxation: "13 years" },
  { code: 5, category: "PwD (SC/ ST)", relaxation: "15 years" },
  { code: 6, category: "Ex-Servicemen (ESM)", relaxation: "3 years after deduction of the military service rendered from the actual age." },
  { code: 7, category: "Defence Personnel is disabled in operation during hostilities with any foreign country or in a disturbed area and released as a consequence thereof. (Unreserved/EWS/OBC)", relaxation: "3 years" },
  { code: 8, category: "Defence Personnel is disabled in operation during hostilities with any foreign country or in a disturbed area and released as a consequence thereof (SC/ ST).", relaxation: "8 years" }
];

export const examPatternDetailed = [
  {
    paper: "Paper-I",
    mode: "Computer Based Examination",
    subjects: [
      { name: "(i) General Intelligence and Reasoning", qs: "50 / 50" },
      { name: "(ii) General Awareness", qs: "50 / 50" },
      { name: "(iii) Part-A: General Engineering (Civil & Structural) OR Part-B: General Engineering (Electrical) OR Part-C: General Engineering (Mechanical)", qs: "100 / 100" }
    ],
    duration: "2 Hours (2 hours and 40 minutes for the candidates who are eligible for scribe as per Para-9.1, 9.2 and 9.3 mentioned in official document)"
  },
  {
    paper: "Paper-II",
    mode: "Computer Based Examination",
    subjects: [
      { name: "Part-A: General Engineering (Civil & Structural) OR Part-B: General Engineering (Electrical) OR Part-C: General Engineering (Mechanical)", qs: "100 / 300" }
    ],
    duration: "2 Hours (2 hours and 40 minutes for the candidates who are eligible for scribe as per Para-9.1, 9.2 and 9.3 mentioned in official document)"
  }
];

export const examInstructions = [
  { id: 1, title: "General Engineering Selection", desc: "Candidates must attempt Part A (Civil), Part B (Electrical), or Part C (Mechanical) in both Paper I and Paper II based on their educational stream. Failure to do so will result in rejection." },
  { id: 2, title: "Question Format", desc: "Both Paper-I and Paper-II consist of Objective Type, Multiple-choice questions in Hindi & English." },
  { id: 3, title: "Negative Marking", items: ["Paper-I: 0.25 marks deducted per wrong answer.", "Paper II: 1 mark deducted per wrong answer."] },
  { id: 4, title: "Aids Allowed", items: ["Paper-I: No aids allowed.", "Paper-II: Slide Rule, Logarithm Table, and Steam Table permitted. A Scientific Calculator will be provided in the CBE software."] },
  { id: 5, title: "Answer Keys", desc: "Tentative Answer Keys will be available on the Commission's website. Candidates can submit objections online within the given time limit by paying Rs. 100/- per question (non-refundable)." },
  { id: 6, title: "Normalisation", desc: "Marks will be normalised for exams conducted in multiple shifts. Normalised scores will be used for final merit and cut-offs." },
  { id: 7, title: "Mechanical & Electrical Papers", desc: "For common posts, scores for the Mechanical and Electrical branches in Paper-II will be normalised due to differing question papers and difficulty levels." },
  { id: 8, title: "Exam Schedule", desc: "Dates are tentative. Any changes will be updated on the Commission's website." },
  { id: 9, title: "No Re-evaluation", desc: "Requests for re-evaluation/re-checking of scores will not be entertained." }
];

export const diplomaExamsData = [
  { no: 1, category: "Public Sector Undertakings (PSUs)", exams: "IOCL, ONGC, BEL, Tata Steel, L&T", roles: "Technician, Diploma Trainee Apprentice, Diploma Trainee" },
  { no: 2, category: "Railways", exams: "RRB-JE (Railway Recruitment Board)", roles: "Junior Engineer (JE)" },
  { no: 3, category: "Staff Selection Commission (SSC)", exams: "SSC-JE", roles: "Junior Engineer (Civil, Mechanical, Electrical)" },
  { no: 4, category: "State Public Service Commissions (PSC)", exams: "UPPSC, MPPSC, TNPSC, etc.", roles: "Junior Engineer (JE), Assistant Engineer (AE)" },
  { no: 5, category: "Defense Sector", exams: "Indian Army (MES), Indian Navy (SSR Artificer Apprentice), Military Engineering Services (MES)", roles: "Technical Roles, Junior Engineer" },
  { no: 6, category: "Power Sector", exams: "PGCIL, State Electricity Boards (MAHADISCOM, TANGEDCO, UPPCL)", roles: "JE, Technical Assistant" },
  { no: 7, category: "Road Transport & Highways", exams: "National Highways Authority of India (NHAI)", roles: "Technical Roles" },
  { no: 8, category: "Municipal Corporations", exams: "Local Bodies (eg, Public Works Departments)", roles: "Junior Engineer, Sub-Engineer" },
  { no: 9, category: "Apprenticeship Exams", exams: "IOCL ONGC HAL BOL, Tata Steel, L&T", roles: "Apprenticeship Trainee" },
  { no: 10, category: "State-Level Recruitment", exams: "PWD, Irrigation Dept., Rural Development Dept.", roles: "JE, Technical Posts" },
  { no: 11, category: "Border Roads Organisation", exams: "BRO", roles: "Junior Engineer, Technical Posts" },
  { no: 12, category: "Metro Rail Corporations", exams: "DMRC, Chennai Metro, Bangalore Metro", roles: "Junior Engineer, Technician" }
];

export const faqs = [
  { q: "Q.1 Can I prepare for the SSC-JE Exams with GAME Academy’s Online Coaching?", a: "Absolutely! GAME Academy’s SSC-JE coaching (Excellence Course) is specifically designed to help candidates prepare effectively for the SSC-JE exam." },
  { q: "Q.2 What are the branches GAME Academy deals with?", a: "As of now, GAME Academy provides coaching for Civil Engineering and Mechanical Engineering." },
  { q: "Q.3 Does GAME Academy cover non-technical parts as well?", a: "Yes, we are covering the entire syllabus of the non-technical part (Reasoning, General Awareness) as well." },
  { q: "Q 4. Why should I choose GAME for Online Coaching?", a: "GAME delivers high-quality education and top-notch content for Mechanical & Civil Engineering aspirants preparing for the SSC-JE exam. Under the leadership of Gaurav Babu Sir, a distinguished educator with 13+ years of experience, our teaching philosophy focuses on building a strong academic foundation by teaching subjects from scratch with conceptual clarity and practical problem-solving techniques. With GAME, students can confidently excel in competitive exams and achieve their career aspirations." },
  { q: "Q 5. Does GAME provide a test series along with the course?", a: "Yes, GAME provides a test series along with the course" },
  { q: "Q 6. Can I Prepare for the SSC-JE Exam While Working a Full-Time Job?", a: "You can prepare for the SSC-JE exam while managing a full-time job with the right strategy and dedication. GAME offers flexible SSC-JE online coaching with recorded lectures, structured study plans, and expert mentorship. By utilising focused study hours during evenings and weekends, and accessing comprehensive SSC-JE resources, success is achievable even with a busy work schedule." },
  {
    q: "Q 7. How Much Time is Needed for SSC-JE Exam Preparation for Full-Timers?",
    a: (
      <div className="space-y-4">
        <p>Full-time aspirants preparing for the SSC-JE exam typically require 6-8 months of focused study. Here’s an ideal timeline:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>4-5 months:</strong> Complete the syllabus with conceptual clarity and regular practice of standard questions.</li>
          <li><strong>1-2 months:</strong> Focus on solving previous year's question papers (PYQs), taking mock tests, and revising key topics.</li>
          <li><strong>Last 1 month:</strong> Fine-tune weak areas, improve problem-solving speed, and focus on accuracy.</li>
        </ul>
        <p>With proper planning and structured coaching support from GAME, full-time aspirants can effectively crack the SSC-JE exam within this time frame.</p>
      </div>
    )
  },
  {
    q: "Q 8. How Much Time is Needed for SSC-JE Exam Preparation for Working Individuals?",
    a: (
      <div className="space-y-4">
        <p>Working professionals can prepare for the SSC-JE exam effectively in 8-12 months with smart time management, as the SSC-JE syllabus is broader but more direct than ESE and GATE. Here’s a realistic plan:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Daily Study Hours:</strong> Dedicate 2-3 hours on weekdays and 4-6 hours on weekends.</li>
          <li><strong>Syllabus Completion:</strong> Spend the first 5-6 months covering core subjects, building conceptual clarity, and practising key questions.</li>
          <li><strong>Revision and Practice:</strong> Use the next 2-3 months to solve PYQs, take mock tests, and revise key areas.</li>
        </ul>
        <p>GAME offers flexible online coaching, structured study schedules, and concise study materials, enabling working professionals to balance their jobs and SSC-JE preparation effectively.</p>
      </div>
    )
  },
  {
    q: "Q 9. Is Coaching Necessary for Clearing the SSC-JE Exam?",
    a: (
      <div className="space-y-6">
        <p>Coaching is not mandatory for clearing the SSC-JE exam, but it can be extremely beneficial, especially for candidates who require structured guidance.</p>
        <ul className="list-disc pl-5 space-y-6">
          <li>
            <strong className="text-slate-900">Self-Study vs. Coaching:</strong>
            <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
              <li>If you have strong concepts, discipline, and access to quality study materials, self-study can be sufficient.</li>
              <li>Coaching institutes, however, provide expert mentorship, systematic syllabus coverage, and doubt-solving sessions.</li>
            </ul>
          </li>
          <li>
            <strong className="text-slate-900">Time Management:</strong>
            <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
              <li>Working professionals or students with limited time can benefit from platforms like <strong className="text-gameTeal">GAME</strong>, which offer flexible online coaching, recorded lectures, and focused content.</li>
            </ul>
          </li>
          <li>
            <strong className="text-slate-900">Competitive Edge:</strong>
            <ul className="list-circle pl-6 mt-2 space-y-2 text-slate-600">
              <li>Coaching institutes provide mock tests, previous year paper analysis, and exam-specific strategies to improve speed, accuracy, and problem-solving abilities.</li>
            </ul>
          </li>
        </ul>
        <p className="font-medium text-slate-700 italic border-l-4 border-gameGold pl-4 bg-slate-50 py-3 rounded-r-xl">
          In summary, while coaching is not a necessity, it can be <strong className="text-gameTeal">catalysed</strong> by providing structure, expert guidance, and consistency, ultimately enhancing your chances of success in the SSC-JE exam.
        </p>
      </div>
    )
  }
];
