"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import { DEFAULT_POSTS, type BlogPost } from "@/data/blogData";

// Live subscription to the admin-managed "blog" collection: newly published
// posts show up without a rebuild or page refresh. Newest first by createdAt,
// falling back to publishedDate for docs without a timestamp.
export function useLatestBlogPosts(limit = 6): { posts: BlogPost[]; loading: boolean } {
  const [posts, setPosts] = useState<BlogPost[]>(DEFAULT_POSTS.slice(0, limit));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "blog"),
      (snapshot) => {
        const fetched = snapshot.docs
          .map((doc) => doc.data() as Record<string, unknown>)
          .filter((data) => data.published !== false)
          .map((data) => {
            const createdAt = data.createdAt as { toMillis?: () => number } | undefined;
            const sortKey =
              createdAt?.toMillis?.() ?? (Date.parse((data.publishedDate as string) ?? "") || 0);
            return { data, sortKey };
          })
          .sort((a, b) => b.sortKey - a.sortKey)
          .slice(0, limit)
          .map(({ data }, idx) => ({
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
          } as BlogPost));

        if (fetched.length > 0) setPosts(fetched);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [limit]);

  return { posts, loading };
}
