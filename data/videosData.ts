export interface Video {
  id: number;
  title: string;
  subtitle: string;
  thumbnail: string;
  duration: string;
  views: string;
  tag: string;
  videoId: string;
}

export const DEFAULT_VIDEOS: Video[] = [
  {
    id: 1,
    title: "Crack GATE in First Attempt",
    subtitle: "Proven Strategy by Gaurav Babu Sir",
    thumbnail: "https://img.youtube.com/vi/Vv9lARk4vcs/maxresdefault.jpg",
    duration: "14:15",
    views: "245k",
    tag: "GATE Strategy",
    videoId: "Vv9lARk4vcs",
  },
  {
    id: 2,
    title: "How to Convert Units?",
    subtitle: "Visualized Units & Dimensions Guidance",
    thumbnail: "https://img.youtube.com/vi/czIYgYQkRFU/maxresdefault.jpg",
    duration: "1:08:42",
    views: "195k",
    tag: "Basic Mechanics",
    videoId: "czIYgYQkRFU",
  },
  {
    id: 3,
    title: "How to attempt GATE Test Series",
    subtitle: "Analyzing Errors & Tracking Score Improvements",
    thumbnail: "https://img.youtube.com/vi/ggnZchS4AZ4/maxresdefault.jpg",
    duration: "19:35",
    views: "135k",
    tag: "Test Strategy",
    videoId: "ggnZchS4AZ4",
  },
];
