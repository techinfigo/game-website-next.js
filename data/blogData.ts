export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  tags: string[];
}

export const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "5 Habits of AIR-1 Rankers That You Can Adopt Today",
    excerpt: "Success isn't an accident. Discover the daily routines, study techniques, and mindset shifts that separate the toppers from the crowd in GATE and ESE exams. It's about consistency, not intensity.",
    category: "Strategy",
    author: "Gaurav Babu",
    authorRole: "Founder & Mentor",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    image: "/images/blog/career-guidance.png",
    featured: true,
    tags: ["GATE", "Motivation", "Study Tips"]
  },
  {
    id: 2,
    title: "Thermodynamics: Understanding Entropy Like Never Before",
    excerpt: "Struggling with the Second Law? We break down Entropy into simple, visual concepts that make sense physically, not just mathematically.",
    category: "Technical",
    author: "Atul Vaish",
    authorRole: "Senior Faculty",
    date: "Oct 10, 2025",
    readTime: "12 min read",
    image: "/images/blog/upsc-prep.png",
    tags: ["Mechanical", "Concepts", "Physics"]
  },
  {
    id: 3,
    title: "SSC-JE vs RRB-JE: Which Career Path Suits You?",
    excerpt: "A detailed comparison of job profile, salary structure, promotion aspects, and work-life balance between two of India's biggest JE exams.",
    category: "Career",
    author: "Team GAME",
    authorRole: "Editorial",
    date: "Oct 08, 2025",
    readTime: "6 min read",
    image: "/images/blog/research-ops.png",
    tags: ["SSC JE", "RRB JE", "Comparison"]
  },
  {
    id: 4,
    title: "GATE 2026 Roadmap for 3rd Year Students",
    excerpt: "Starting early is your biggest advantage. Here is a month-by-month plan to balance college semesters with GATE preparation.",
    category: "Strategy",
    author: "Gaurav Babu",
    authorRole: "Founder",
    date: "Oct 05, 2025",
    readTime: "10 min read",
    image: "/images/blog/exam-success.png",
    tags: ["Roadmap", "College", "Planning"]
  },
  {
    id: 5,
    title: "The Future of Core Engineering Jobs in India",
    excerpt: "With the rise of AI and automation, how is the landscape for Mechanical and Civil engineers changing? An honest analysis.",
    category: "News",
    author: "Guest Author",
    authorRole: "Industry Expert",
    date: "Oct 01, 2025",
    readTime: "5 min read",
    image: "/images/blog/engineering-skills.png",
    tags: ["Industry", "Jobs", "Future"]
  },
  {
    id: 6,
    title: "How to Stay Motivated During the 'Dip' Phase?",
    excerpt: "Every aspirant faces a burnout phase. Learn psychological hacks to bounce back stronger when you feel like giving up.",
    category: "Motivation",
    author: "Priya Sharma",
    authorRole: "AIR-5 (ESE)",
    date: "Sep 28, 2025",
    readTime: "4 min read",
    image: "/images/blog/leadership.png",
    tags: ["Mental Health", "Focus", "Success"]
  }
];
