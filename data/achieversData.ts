export type AchieverType = "Video Short" | "GATE Topper" | "Ranker" | "Job Selection";

export interface VideoShort {
  id: number;
  type: "Video Short";
  name: string;
  videoId: string;
}

export interface GateTopper {
  id: number;
  type: "GATE Topper";
  name: string;
  rank: string;
  exam: string;
  image: string;
}

export const DEFAULT_VIDEO_SHORTS: VideoShort[] = [
  { id: 1, type: "Video Short", name: "Harpreet", videoId: "_XJJgF14hRw" },
  { id: 2, type: "Video Short", name: "Mukunda Buragohain", videoId: "bmYoxNuLm2Q" },
  { id: 3, type: "Video Short", name: "Parul Singh", videoId: "nVQViykd4ww" },
  { id: 4, type: "Video Short", name: "Anurag Tripathi", videoId: "Zd4ba5fz01E" },
  { id: 5, type: "Video Short", name: "Khusro Sheikh", videoId: "uhcVp9Io1ko" },
  { id: 6, type: "Video Short", name: "Anjali", videoId: "z0LNphCRgIE" },
  { id: 7, type: "Video Short", name: "Sujoy Das", videoId: "a-PRFgprxDs" },
  { id: 8, type: "Video Short", name: "Rajesh Kumar Sahu", videoId: "8HXxfmBlyXc" },
  { id: 9, type: "Video Short", name: "Prem Narwade", videoId: "ICWWsWVg9tg" },
  { id: 10, type: "Video Short", name: "Kapil Sharma", videoId: "4glyoj_qvc8" },
  { id: 11, type: "Video Short", name: "Akash Hazra", videoId: "vIXFlicDn2w" },
];

export const DEFAULT_GATE_TOPPERS: GateTopper[] = [
  {
    id: 1,
    type: "GATE Topper",
    name: "Devansh Bajpai",
    rank: "AIR 13",
    exam: "GATE ME",
    image: "https://img.youtube.com/vi/QZC0IzzoSS0/hqdefault.jpg",
  },
  {
    id: 2,
    type: "GATE Topper",
    name: "Rohan Kulkarni",
    rank: "AIR 4",
    exam: "GATE ME",
    image: "https://img.youtube.com/vi/qzevZxEawpA/hqdefault.jpg",
  },
  {
    id: 3,
    type: "GATE Topper",
    name: "Siddhesh Gaikwad",
    rank: "AIR 2",
    exam: "GATE ME",
    image: "https://img.youtube.com/vi/nLDQgHBYTc0/hqdefault.jpg",
  },
  {
    id: 4,
    type: "GATE Topper",
    name: "Harsh Vardhan",
    rank: "AIR 26",
    exam: "GATE ME",
    image: "https://img.youtube.com/vi/7RoM5q7nte4/hqdefault.jpg",
  },
  {
    id: 5,
    type: "GATE Topper",
    name: "Praveen Kumar",
    rank: "AIR 1",
    exam: "GATE ME",
    image: "https://img.youtube.com/vi/CjFRWUCyvSI/hqdefault.jpg",
  },
  {
    id: 6,
    type: "GATE Topper",
    name: "Vikram Rathore",
    rank: "AIR 8",
    exam: "GATE ME",
    image: "https://img.youtube.com/vi/35F4plJjhFM/hqdefault.jpg",
  },
];
