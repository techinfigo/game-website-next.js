"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export interface SiteSettings {
  phone: string;
  whatsappChannel: string;
  whatsappChat: string;
  email: string;
  youtube: string;
  youtubeAlt: string;
  telegram: string;
  facebook: string;
  linkedin: string;
  androidAppLink: string;
  iosAppLink: string;
  address: string;
}

const DEFAULT_SITE_SETTINGS: SiteSettings = {
  phone: "+917668518602",
  whatsappChannel: "https://whatsapp.com/channel/0029VaWNuqVJpe8gdAkinR1T",
  whatsappChat: "https://wa.me/917668518602",
  email: "info@gameacademy.in",
  youtube: "https://www.youtube.com/@gblions",
  youtubeAlt: "https://www.youtube.com/@gblionsaeje",
  telegram: "https://t.me/gamebygauravbabu",
  facebook: "https://www.facebook.com/gameacademyindia",
  linkedin: "https://www.linkedin.com/company/gameacademyindia/",
  androidAppLink: "https://clppenny.page.link/cTBm",
  iosAppLink: "https://apps.apple.com/in/app/myinstitute/id1472483563",
  address: "131, 2, Jawahar Puram Phase -1, Shahganj, Agra, Uttar Pradesh 282010",
};

export function useSiteSettings(): SiteSettings {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SITE_SETTINGS);

  useEffect(() => {
    let cancelled = false;

    getDoc(doc(db, "settings", "site"))
      .then((snapshot) => {
        if (cancelled || !snapshot.exists()) return;

        const data = snapshot.data() as Partial<Record<keyof SiteSettings, string>>;
        setSettings((prev) => {
          const merged = { ...prev };
          (Object.keys(DEFAULT_SITE_SETTINGS) as (keyof SiteSettings)[]).forEach((key) => {
            const value = data[key];
            if (typeof value === "string" && value.trim() !== "") {
              merged[key] = value;
            }
          });
          return merged;
        });
      })
      .catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  return settings;
}
