export interface Offer {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  expiryDate: string;
  active: boolean;
}

export const DEFAULT_OFFER: Offer = {
  badge: "Limited-Time Power Deal",
  title: "Get Upto 50% OFF & Supercharge Your Exam Prep",
  description: "Score higher, stress less - your AIR 1 journey starts NOW!",
  ctaText: "GRAB THE DEAL",
  ctaLink: "/courses",
  imageUrl: "/special-offer-banner.png",
  expiryDate: "2026-07-31T23:59:59",
  active: true,
};
