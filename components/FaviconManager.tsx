"use client";

import { useEffect } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

/**
 * Applies the favicon configured in the admin panel (settings/site -> faviconUrl).
 * Next.js only emits a static favicon at build time, so the branding value has to
 * be swapped onto the <link rel="icon"> tag on the client once settings load.
 */
export default function FaviconManager() {
  const { faviconUrl } = useSiteSettings();

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!faviconUrl || faviconUrl.trim() === "") return;

    const href = faviconUrl.trim();

    const apply = (rel: string) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.rel = rel;
        document.head.appendChild(link);
      }
      if (link.href !== href) {
        link.href = href;
      }
    };

    apply("icon");
    apply("shortcut icon");
    apply("apple-touch-icon");
  }, [faviconUrl]);

  return null;
}
