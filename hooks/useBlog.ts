"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import { DEFAULT_POSTS, type BlogPost } from "@/data/blogData";

export type { BlogPost };

export function useBlog(): { posts: BlogPost[]; loading: boolean } {
  const [posts, setPosts] = useState<BlogPost[]>(DEFAULT_POSTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getDocs(collection(db, "blog"))
      .then((snapshot) => {
        if (cancelled || snapshot.empty) return;

        const published = snapshot.docs.filter((doc) => doc.data().published !== false);

        const fetched = published.map((doc, idx) => {
          const data = doc.data() as Record<string, unknown>;
          return {
            id: idx + 1,
            title: (data.title as string) ?? "",
            excerpt: (data.excerpt as string) ?? "",
            category: (data.category as string) ?? "",
            author: (data.author as string) ?? "",
            authorRole: (data.authorRole as string) ?? "",
            date: (data.publishedDate as string) ?? "",
            readTime: (data.readTime as string) ?? "",
            image: (data.coverImageUrl as string) ?? "",
            featured: (data.featured as boolean) ?? false,
            tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
          } as BlogPost;
        });

        if (fetched.length > 0) setPosts(fetched);
      })
      .catch(console.error)
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { posts: loading ? DEFAULT_POSTS : posts, loading };
}
