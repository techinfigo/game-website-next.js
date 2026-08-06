import {
  Users, Trophy, Landmark, Lightbulb, Medal, Briefcase,
  Target, Award, Layers, Sparkles,
  type LucideIcon,
} from 'lucide-react';

export interface FacultyStat {
  label: string;
  icon: LucideIcon;
}

export interface FacultyMember {
  name: string;
  role: string;
  expLabel: string;
  exp: string;
  img: string;
  stats: FacultyStat[];
}

// Easily add, modify, or remove faculty members here
export const DEFAULT_CHIEF_MENTOR: FacultyMember = {
  name: "Gaurav Babu Sir",
  role: "Founder & Chief Mentor",
  expLabel: "14+ YRS EXP.",
  exp: "14+ Years (ME & CE) Teaching Experience in GATE/ESE",
  img: "/faculty/gaurav-sir2.jpg",
  stats: [
    { label: "Mentored 1L+ Students Across India", icon: Users },
    { label: "Specialist: Mfg Engg, SOM, FM, IE, Material Sci, Fluid Mach, Adv Mfg", icon: Target },
    { label: "Cracked: GATE, IOCL, BPCL & Ministry of Defence (IOF, GRSE, HSL)", icon: Trophy },
    { label: "Motivational Speaker & Live Coach", icon: Lightbulb }
  ]
};

export const DEFAULT_FACULTY: FacultyMember[] = [
  {
    name: "Harshit Agarwal Sir",
    role: "Thermal Science Expert",
    expLabel: "10+ YRS EXP.",
    exp: "10+ Years of Teaching Experience",
    img: "/faculty/harshit-sir.png",
    stats: [
      { label: "Achieved ESE AIR 63, 90 in consecutive years", icon: Medal },
      { label: "Mentored over 50,000 Students across India", icon: Users },
      { label: "Renowned King of Thermal Science", icon: Trophy },
      { label: "Offer letters from ISRO, ONGC, IOCL, BHEL and SAIL", icon: Briefcase }
    ]
  },
  {
    name: "Aditya Shukla Sir",
    role: "Engineering Mathematics Specialist",
    expLabel: "14+ YRS EXP.",
    exp: "14 Years of teaching experience (offline)",
    img: "/faculty/aditya-shukla-sir.png",
    stats: [
      { label: "Gate Qualified with AIR 638 in 2011", icon: Medal },
      { label: "Trained approx. 75k students for GATE/ESE across India", icon: Users },
      { label: "Post-Graduation in Applied Mathematics from DAVV, Indore", icon: Landmark },
      { label: "Expertise in Engineering Mathematics", icon: Lightbulb }
    ]
  },
  {
    name: "Atul Ranjan Sir",
    role: "Core Physics & Math Analyst",
    expLabel: "12+ YRS EXP.",
    exp: "12 years of teaching experience in GATE & ESE (offline)",
    img: "/faculty/atul-vaish-sir.png", // reusing standard/available assets elegantly
    stats: [
      { label: "Two times Gate qualified in area of expertise", icon: Medal },
      { label: "Mentored almost 20,000+ students across India", icon: Users },
      { label: "Qualified in BARC exam", icon: Trophy },
      { label: "Deals with concepts via core physics and mathematical analysis", icon: Lightbulb }
    ]
  },
  {
    name: "Hariveer Sir",
    role: "Mechanical Engineering Lead",
    expLabel: "12+ YRS EXP.",
    exp: "12+ years of teaching experience",
    img: "/faculty/hariveer-sir.png",
    stats: [
      { label: "M.TECH (CAD-CAM & Automation) NITS", icon: Landmark },
      { label: "Qualified GATE multiple times & authored practice books", icon: Medal },
      { label: "Expert: Fluid Machinery, Fluid Mechanics, Strength of Materials", icon: Target },
      { label: "Expert: Theory of Machines, Vibrations, Mechanical Design", icon: Layers }
    ]
  },
  {
    name: "Varun Sir",
    role: "Thermal & Fluids Expert",
    expLabel: "9+ YRS EXP.",
    exp: "9+ years of teaching experience",
    img: "/faculty/varun-sir.png",
    stats: [
      { label: "Gate qualified with AIR 80 in 2014", icon: Medal },
      { label: "Mentored more than 60,000+ students across India", icon: Users },
      { label: "Expert in Thermodynamics, Fluid Mechanics, Heat Transfer", icon: Target },
      { label: "Specialist in Thermal Applications & Fluid Machinery", icon: Award }
    ]
  },
  {
    name: "Vipin Sir",
    role: "Mechanical Expert & Industry Researcher",
    expLabel: "6+ YRS EXP.",
    exp: "6+ years of teaching experience",
    img: "/faculty/vipin-sir.png",
    stats: [
      { label: "M.Tech, IIT Kharagpur & M.Sc, Politecnico Di Milano, Italy", icon: Landmark },
      { label: "5+ Years Industry & Research Experience", icon: Briefcase },
      { label: "Expert: Thermodynamics, RAC, Power Plant Engineering", icon: Target },
      { label: "Expert: IC Engines, Heat & Mass Transfer", icon: Layers }
    ]
  },
  {
    name: "Ankit Jain Sir",
    role: "Civil Engineering Lead",
    expLabel: "7+ YRS EXP.",
    exp: "7+ years of teaching experience",
    img: "/faculty/ankit-jain-sir.png",
    stats: [
      { label: "Gate qualified 3 times, Qualified Ph.D Entrance in IIT Bombay/Indore", icon: Medal },
      { label: "More than 5000+ Hours of high-impact teaching experience", icon: Lightbulb },
      { label: "Expert: TOS & SA, Steel, Transportation, Concrete, SOM", icon: Target },
      { label: "Expert: FM, Hydraulics machine, Surveying, Hydrology", icon: Layers }
    ]
  },
  {
    name: "Atul Vaish Sir",
    role: "Aptitude & EE Lead Mentor",
    expLabel: "9+ YRS EXP.",
    exp: "9+ years of teaching experience",
    img: "/faculty/atul-vaish-sir.png",
    stats: [
      { label: "Teachers Excellence Award 2021 by Zee Media", icon: Award },
      { label: "Gate qualified 5 Times, Selected for IITR along with other IITs", icon: Medal },
      { label: "Cleared Different PSUs Positions like JTO, TTA", icon: Briefcase },
      { label: "Expert in Quantitative Aptitude & Reasoning, Mathematics", icon: Target }
    ]
  },
  {
    name: "Tina ma'am",
    role: "Biology & Medical Head",
    expLabel: "11+ YRS EXP.",
    exp: "11+ years of teaching experience",
    img: "/faculty/tina-maam.png",
    stats: [
      { label: "11+ years of experience in different medical exams", icon: Award },
      { label: "Specialize Prep for NEET-UG, NEET-PG etc.", icon: Target },
      { label: "Dedicated Biology Specialist Coach", icon: Sparkles },
      { label: "Highly Renowned National Medico Mentor", icon: Users }
    ]
  },
  {
    name: "Priyam Mishra Sir",
    role: "GS Subjects & Mathematics Maestro",
    expLabel: "4+ YRS EXP.",
    exp: "4+ years of teaching experience",
    img: "/faculty/priyam-mishra-sir.png",
    stats: [
      { label: "Teaching GS subjects and Maths across diverse engineering exams", icon: Sparkles },
      { label: "Expert in History, Geography, Polity, Current Affairs", icon: Target },
      { label: "Master analytical approach for general studies sections", icon: Award },
      { label: "Dynamic, visual, and highly responsive pedagogy style", icon: Lightbulb }
    ]
  }
];
