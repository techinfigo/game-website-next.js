export interface Job {
  id: number;
  notification: string;
  eligibility: string;
  branches: string[];
  startDate: string;
  endDate: string;
  status: 'Open' | 'Closed' | 'Yet to start';
  pdfLink?: string;
  usefulLinks?: string;
  recommendedCourse?: string;
  createdAt?: number;
}

export const DEFAULT_JOBS: Job[] = [
  {
    id: 1,
    notification: "NTPC Limited",
    eligibility: "B.Tech/BE",
    branches: ["CE"],
    startDate: "15 May 2026",
    endDate: "29 May 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1iRoWsX3VMAMRltL6xJkiR9opBVqYwPEI/view?usp=sharing",
    usefulLinks: "https://ntpc.co.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 2,
    notification: "Defence Research & Development Laboratory (DRDL) DRDO",
    eligibility: "BE/B.Tech or ME/M.Tech",
    branches: ["ME & Other Branches"],
    startDate: "Interview Dates:\n* Mechanical: 01–03 June 2026\n* Aeronautical/Aerospace: 04 June 2026\n* ECE: 05 June 2026",
    endDate: "5 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1Pqx5hh3r-OZ2zeJvXQgN9OS1uaVDsYbq/view?usp=sharing",
    usefulLinks: "https://drdo.gov.in/drdo/en",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  },
  {
    id: 3,
    notification: "Bihar Police Subordinate Services Commission",
    eligibility: "Diploma (ECE/ETC/IT/EEE)",
    branches: ["ECE/ETC/IT/EEE"],
    startDate: "21 May 2026",
    endDate: "21 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1vmeT74QMzoryjdLB69-h-IlO1gd6yhPz/view?usp=sharing",
    usefulLinks: "https://bpssc.bihar.gov.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 4,
    notification: "National Highways Authority of India (NHAI)",
    eligibility: "B.Tech/BE",
    branches: ["CE"],
    startDate: "15 May 2026",
    endDate: "15 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1OoX3rGxmhK-pUSUjdMVF3gtTi1gAo_fc/view?usp=sharing",
    usefulLinks: "https://nhai.gov.in/#/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 5,
    notification: "HPCL Rajasthan Refinery Limited (HRRL)",
    eligibility: "B.Tech/BE",
    branches: ["ME & Other Branches"],
    startDate: "14 May 2026",
    endDate: "3 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1ZWMovuktur5PaGnEC4NNr21Rduz3ayQ9/view?usp=sharing",
    usefulLinks: "https://hrrl.in/Hrrl/home.jsp",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 6,
    notification: "Railway Recruitment Board (RRB)",
    eligibility: "BE/B.Tech/Diploma",
    branches: ["ME & Other Branches"],
    startDate: "15 May 2026",
    endDate: "14 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1Cf54TjR8CpVUVR_VG6MlzlTw98egdi8u/view?usp=sharing",
    usefulLinks: "https://www.rrbapply.gov.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-mechanical"
  },
  {
    id: 7,
    notification: "Indian Army",
    eligibility: "B.Tech/BE",
    branches: ["ME", "CE & Other"],
    startDate: "13 May 2026",
    endDate: "11 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1tqQlA7C0kzdyGEcAkNy-RFN9wUTyBTeF/view?usp=sharing",
    usefulLinks: "https://joinindianarmy.nic.in/index.htm",
    recommendedCourse: ""
  },
  {
    id: 8,
    notification: "North Eastern Electric Power Corporation Limited (NEEPCO)",
    eligibility: "BE/B.Tech/AIME",
    branches: ["ME", "CE & EE"],
    startDate: "14 May 2026",
    endDate: "3 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1PNAME-ZKgBnAVeVDwiFRCPaLyKj9gEzY/view?usp=sharing",
    usefulLinks: "https://neepco.co.in/",
    recommendedCourse: ""
  },
  {
    id: 9,
    notification: "CHHATTISGARH PUBLIC SERVICE COMMISSION",
    eligibility: "B.Tech/BE",
    branches: ["ME", "CE & EE"],
    startDate: "13 May 2026",
    endDate: "11 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1YyNfjPRcCc7pj4Xf2aeOZJD5NjyOJ2SH/view?usp=sharing",
    usefulLinks: "https://psc.cg.gov.in/",
    recommendedCourse: ""
  },
  {
    id: 10,
    notification: "Assam Public Service Commission",
    eligibility: "Diploma in EE",
    branches: ["EE"],
    startDate: "11 May 2026",
    endDate: "10 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1T9m-9nNQkYBaJg4Qh4b7kZgSLPNis12V/view?usp=sharing",
    usefulLinks: "https://apscrecruitment.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 11,
    notification: "NTPC Limited (Environment)",
    eligibility: "Degree in Environment",
    branches: ["CE/Environmental Engg."],
    startDate: "8 May 2026",
    endDate: "22 May 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1SiNfQuf5jo_8NzabDtgoyyY5tuyhZi79/view?usp=sharing",
    usefulLinks: "https://careers.ntpc.co.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 12,
    notification: "Gujarat Public Service Commission (GPSC)",
    eligibility: "B.Tech/BE",
    branches: ["ME & CE"],
    startDate: "5 May 2026",
    endDate: "19 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1-3zN8ydwA5tSLiQ4ev6ETC1XTt3aJfCu/view?usp=sharing",
    usefulLinks: "https://gpsc-ojas.gujarat.gov.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-mechanical"
  },
  {
    id: 13,
    notification: "Coal India Limited (B.Tech)",
    eligibility: "B.Tech/BE",
    branches: ["ME", "CE & EE"],
    startDate: "12 May 2026",
    endDate: "11 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1zbQJwtunJF1e6TX8ueO3wLZrRwx9uLkZ/view?usp=sharing",
    usefulLinks: "http://www.coalindia.in/",
    recommendedCourse: ""
  },
  {
    id: 14,
    notification: "Coal India Limited (Higher Degree)",
    eligibility: "Higher Degree in Engg.",
    branches: ["Mining"],
    startDate: "8 May 2026",
    endDate: "7 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1BND4cnxa68zrnJSGK4IyFdTd7ZgEiWwT/view?usp=sharing",
    usefulLinks: "http://www.coalindia.in",
    recommendedCourse: ""
  },
  {
    id: 15,
    notification: "The Indian Navy",
    eligibility: "BE/B.Tech or ME/M.Tech",
    branches: ["CS/CSE/CE/IT/SS"],
    startDate: "16 May 2026",
    endDate: "1 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1oIz4n0VcuA4IdyJ8Gxt4n0vv4X8rZd2m/view?usp=sharing",
    usefulLinks: "http://www.joinindiannavy.gov.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 16,
    notification: "Rail Land Development Authority (RLDA)",
    eligibility: "B.Tech/BE",
    branches: ["CE/EE"],
    startDate: "2 May 2026",
    endDate: "22 May 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1EyzmffsIby68jeodeRL_XvIuvqJtwE0O/view?usp=sharing",
    usefulLinks: "https://rlda.indianrailways.gov.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 17,
    notification: "DRDO IRDE",
    eligibility: "B.Tech/BE",
    branches: ["ME & Other Branches"],
    startDate: "Apply within 21 days",
    endDate: "-",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/114hyIqXYmRfgMmUo-mjqKcsI0zXE4zWa/view?usp=sharing",
    usefulLinks: "https://www.drdo.gov.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  },
  {
    id: 18,
    notification: "Tripura Public Service Commission (TPSC)",
    eligibility: "B.Tech/BE",
    branches: ["CS/IT/ECE"],
    startDate: "12 May 2026",
    endDate: "5 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1v7EQw8UJGNytVyx4Kqv3ThGy9pf_xtFd/view?usp=sharing",
    usefulLinks: "https://tpsc.tripura.gov.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 19,
    notification: "Krishak Bharati Cooperative Ltd. (KRIBHCO)",
    eligibility: "B.Tech/BE",
    branches: ["ME & Other Branches"],
    startDate: "-",
    endDate: "21 May 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1j1LF9-MeZ2FGA40LA3Wuu20pyXY689Rp/view?usp=sharing",
    usefulLinks: "http://www.kribhco.net",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  },
  {
    id: 20,
    notification: "Meghalaya Energy Corporation Limited (MeECL)",
    eligibility: "B.Tech/BE",
    branches: ["Electrical / EEE / CSE / IT"],
    startDate: "22 April 2026",
    endDate: "15 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/19IdY570shGrCinDzMbyAw7U3gqUg2yth/view?usp=sharing",
    usefulLinks: "https://meecl.nic.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 21,
    notification: "National Highways & Infrastructure Development Corporation Ltd. (NHIDCL)",
    eligibility: "B.Tech/BE",
    branches: ["CE"],
    startDate: "9 May 2026",
    endDate: "8 June 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1rhqmM3oX2VmDWI-7AoG2lFCVQO4BNP1_/view?usp=sharing",
    usefulLinks: "https://www.nhidcl.com/en",
    recommendedCourse: "https://courses.gameacademy.in/wlp/laskhya-civil-course"
  },
  {
    id: 22,
    notification: "Indian Farmers Fertiliser Cooperative (IFFCO)",
    eligibility: "B.Tech/BE",
    branches: ["ME", "CE & Other"],
    startDate: "-",
    endDate: "30 April 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/10Sk0s_tD9T2ZWWHq2ReGd_vqStFWIUEl/view?usp=sharing",
    usefulLinks: "https://www.iffco.in/en/corporate",
    recommendedCourse: ""
  },
  {
    id: 23,
    notification: "Punjab National Bank (PNB)",
    eligibility: "B.Tech/BE",
    branches: ["ME", "CE & EE"],
    startDate: "21 April 2026",
    endDate: "5 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1ZRSerTahbWtMeZQE8T5rLnyRpG2QniSI/view?usp=sharing",
    usefulLinks: "https://pnb.bank.in/hi/",
    recommendedCourse: ""
  },
  {
    id: 24,
    notification: "Indo-Tibetan Border Police (ITBP)",
    eligibility: "B.Tech/BE",
    branches: ["CE"],
    startDate: "21 April 2026",
    endDate: "20 May 2026",
    status: "Open",
    pdfLink: "https://drive.google.com/file/d/1PBOaH_BYwG-NNPoBkR8Zy-ZtQDr82UoX/view?usp=sharing",
    usefulLinks: "https://www.itbpolice.nic.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 25,
    notification: "National Thermal Power Corporation (NTPC)",
    eligibility: "B.Tech/BE",
    branches: ["ME & EE"],
    startDate: "23 April 2026",
    endDate: "4 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1Hh_JKGiEwFjpcdmlsF3o5CBm70hrpwUh/view?usp=sharing",
    usefulLinks: "https://www.ntpc.co.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  },
  {
    id: 26,
    notification: "Madhya Pradesh Pollution Control Board (MPPCB)",
    eligibility: "B.Tech/BE",
    branches: ["CE/Environmental Engg."],
    startDate: "10 April 2026",
    endDate: "30 April 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1aKZtJoS6pm1QJIO7GZsgSEEfY2aFzpoo/view?usp=sharing",
    usefulLinks: "https://www.mppcb.mp.gov.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 27,
    notification: "Power Grid Corporation of India Limited",
    eligibility: "Diploma in CE & EE",
    branches: ["CE/EE"],
    startDate: "20 April 2026",
    endDate: "11 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1gXgJhw3DdgC5B-99H5YWDLNfids5nbwe/view?usp=sharing",
    usefulLinks: "https://www.powergrid.in/en/job-opportunities",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 28,
    notification: "New Mangalore Port Authority (NMPA)",
    eligibility: "B.Tech/BE",
    branches: ["ME", "CE & EE"],
    startDate: "14 April 2026",
    endDate: "4 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1PFQAYBmPYp8qinER09BjTmPOc4oFmR33/view?usp=sharing",
    usefulLinks: "https://newmangaloreport.gov.in/index.php/vacancy",
    recommendedCourse: ""
  },
  {
    id: 29,
    notification: "U.P. Co-operative Institutional Service Board, Lucknow",
    eligibility: "B.Tech/BE",
    branches: ["ME & Other Branches"],
    startDate: "25 April 2026",
    endDate: "15 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1NAmQLot4e1rxJjknMWnfnhAQUAbn07i1/view?usp=sharing",
    usefulLinks: "https://www.upcisb.upsdc.gov.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  },
  {
    id: 30,
    notification: "Punjab State Power Corporation (PSPCL)",
    eligibility: "BE/B.Tech/Diploma",
    branches: ["EE / EEE"],
    startDate: "20 April 2026",
    endDate: "10 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1P35hpJVIFe288YsvjDaY-9gF2S4UzXCM/view?usp=sharing",
    usefulLinks: "https://www.pspcl.in/Recruitment",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 31,
    notification: "SSB Sub Inspector",
    eligibility: "B.Tech/BE",
    branches: ["CE & Other Branches"],
    startDate: "21 March 2026",
    endDate: "20 April 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1QYt31CVkI9lhkwbJbaXe_ly81b_uD4TE/view?usp=sharing",
    usefulLinks: "https://recruitment.ssb.gov.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 32,
    notification: "South Eastern Coalfields Limited (SECL)",
    eligibility: "BE/B.Tech/Diploma",
    branches: ["EE"],
    startDate: "15 April 2026",
    endDate: "14 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1zQ3InQGlcXrg1aBPMHb0puHPdEhdRt7j/view?usp=sharing",
    usefulLinks: "https://secl-cil.in/jobs_secl",
    recommendedCourse: "https://courses.gameacademy.in/wlp/aadhaaram-course-new-year"
  },
  {
    id: 33,
    notification: "Nuclear Power Corporation of India Limited",
    eligibility: "B.E/B.Tech + GATE Score Card",
    branches: ["EC/EE/CS"],
    startDate: "10 April 2026",
    endDate: "30 April 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1krVnQpeCrQjZ-5elkBASKpjjl65IUukc/view?usp=sharing",
    usefulLinks: "https://npcilcareers.co.in",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  },
  {
    id: 34,
    notification: "Northern Coalfields Limited",
    eligibility: "Diploma CE",
    branches: ["CE"],
    startDate: "9 April 2026",
    endDate: "1 May 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1ISa3s9I-cns7Ld3WKQMtIZ86McXsU31k/view?usp=sharing",
    usefulLinks: "https://www.nclcil.in/data-listing/pages/recruitment",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 35,
    notification: "M.P Pollution Control Board",
    eligibility: "B.Tech/BE",
    branches: ["CE & Other Branches"],
    startDate: "10 April 2026",
    endDate: "30 April 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1oPhDUlpm-Ig3RnjxZMrTJT1DJV3sH-fY/view?usp=sharing",
    usefulLinks: "https://www.mppcb.mp.gov.in/",
    recommendedCourse: "https://courses.gameacademy.in/wlp/excellence-ae-je-civil"
  },
  {
    id: 36,
    notification: "VRDE, DRDO",
    eligibility: "B.E/B.Tech + GATE Score Card",
    branches: ["ME & EE"],
    startDate: "-",
    endDate: "30 April 2026",
    status: "Closed",
    pdfLink: "https://drive.google.com/file/d/1IJNo90ON0GpjmDwxLLjNLhmbL-wf1YNo/view?usp=sharing",
    usefulLinks: "https://www.drdo.gov.in/drdo/labs-and-establishments/vehicles-research-and-development-establishment-vrde",
    recommendedCourse: "https://courses.gameacademy.in/wlp/lakshya-advance-gate-course"
  }
];

// Backward-compatible alias for existing imports.
export const jobs = DEFAULT_JOBS;
