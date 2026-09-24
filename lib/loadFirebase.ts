"use client";

// Loads the Firebase SDK (and our initialized app from @/firebase) as a separate
// chunk instead of bundling it into every page's initial JS, so it no longer
// delays first paint/hydration. Every caller shares one promise, so the app is
// still initialized exactly once.
export type FirebaseModules = {
  auth: typeof import("@/firebase").auth;
  db: typeof import("@/firebase").db;
  firebaseAuth: typeof import("firebase/auth");
  firestore: typeof import("firebase/firestore");
};

let modules: Promise<FirebaseModules> | null = null;

export function loadFirebase(): Promise<FirebaseModules> {
  if (!modules) {
    modules = Promise.all([
      import("@/firebase"),
      import("firebase/auth"),
      import("firebase/firestore"),
    ]).then(([{ auth, db }, firebaseAuth, firestore]) => ({ auth, db, firebaseAuth, firestore }));
    // Let a failed chunk download be retried by the next caller.
    modules.catch(() => {
      modules = null;
    });
  }
  return modules;
}

// Start downloading as soon as the page's JS runs rather than waiting for the
// first hook/effect to ask for it.
if (typeof window !== "undefined") {
  loadFirebase().catch(() => {});
}
