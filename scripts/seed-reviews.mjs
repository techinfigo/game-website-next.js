#!/usr/bin/env node
// One-time script: seed the Firestore "reviews" collection from the story-type items
// in ALL_STORIES (components/AchieversPage.tsx).
//
// ALL_STORIES lives inside a .tsx file that also contains JSX further down, so it can't
// be `import`-ed directly by plain Node (no JSX transform available here). The ALL_STORIES
// array itself, however, is plain JS object-literal data with no JSX/TS syntax in it, so
// this script extracts that array's source text directly from the file and evaluates it
// in isolation, rather than re-transcribing 70+ testimonials by hand (error-prone).
//
// Usage:
//   node scripts/seed-reviews.mjs
//
// Credentials (same source as lib/firebase-admin.ts), checked in this order:
//   1. FIREBASE_SERVICE_ACCOUNT_KEY env var containing the service account JSON
//   2. serviceAccountKey.json in the project root (gitignored)

import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ID = "game-academy-2799d";
const BATCH_LIMIT = 400; // Firestore max batch write size is 500; stay under it.

function loadServiceAccount() {
  const envKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (envKey && envKey.trim() !== "") {
    try {
      return JSON.parse(envKey);
    } catch (err) {
      console.error("FIREBASE_SERVICE_ACCOUNT_KEY is set but is not valid JSON:", err.message);
      process.exit(1);
    }
  }

  const localKeyPath = join(__dirname, "..", "serviceAccountKey.json");
  if (existsSync(localKeyPath)) {
    try {
      return JSON.parse(readFileSync(localKeyPath, "utf8"));
    } catch (err) {
      console.error(`Found ${localKeyPath} but it is not valid JSON:`, err.message);
      process.exit(1);
    }
  }

  console.error(
    [
      "No Firebase service account credentials found.",
      "",
      `This script needs admin access to project "${PROJECT_ID}". Provide credentials one of two ways:`,
      "",
      "  1. Set FIREBASE_SERVICE_ACCOUNT_KEY to the service account JSON (same credential lib/firebase-admin.ts reads):",
      "       FIREBASE_SERVICE_ACCOUNT_KEY='{\"type\":\"service_account\", ...}' node scripts/seed-reviews.mjs",
      "",
      "  2. Download a service account key from Firebase Console > Project Settings > Service Accounts",
      "     (project: game-academy-2799d) and save it as serviceAccountKey.json in the project root",
      "     (already listed in .gitignore), then run:",
      "       node scripts/seed-reviews.mjs",
    ].join("\n")
  );
  process.exit(1);
}

function loadAllStories() {
  const achieversPagePath = join(__dirname, "..", "components", "AchieversPage.tsx");
  if (!existsSync(achieversPagePath)) {
    console.error(`Could not find ${achieversPagePath}.`);
    process.exit(1);
  }

  const source = readFileSync(achieversPagePath, "utf8");
  const match = source.match(/export const ALL_STORIES = (\[[\s\S]*?\n\]);/);

  if (!match) {
    console.error(
      "Could not locate the ALL_STORIES array in components/AchieversPage.tsx. " +
        "Its shape may have changed since this script was written — aborting rather than guessing."
    );
    process.exit(1);
  }

  let allStories;
  try {
    const script = new vm.Script(`(${match[1]})`);
    allStories = script.runInNewContext({});
  } catch (err) {
    console.error(
      "Found the ALL_STORIES array but failed to evaluate it as plain data:",
      err.message
    );
    process.exit(1);
  }

  if (!Array.isArray(allStories)) {
    console.error("ALL_STORIES did not evaluate to an array — aborting.");
    process.exit(1);
  }

  return allStories;
}

async function deleteAllReviews(db) {
  const reviewsRef = db.collection("reviews");
  const snapshot = await reviewsRef.get();

  let deletedCount = 0;
  let batch = db.batch();
  let opsInBatch = 0;

  for (const doc of snapshot.docs) {
    batch.delete(doc.ref);
    opsInBatch++;
    deletedCount++;

    if (opsInBatch >= BATCH_LIMIT) {
      await batch.commit();
      batch = db.batch();
      opsInBatch = 0;
    }
  }

  if (opsInBatch > 0) {
    await batch.commit();
  }

  return deletedCount;
}

async function seedReviews(db, stories) {
  const reviewsRef = db.collection("reviews");

  let addedCount = 0;
  let batch = db.batch();
  let opsInBatch = 0;

  for (const story of stories) {
    const docData = {
      studentName: story.name ?? "Student",
      course: story.course ?? "",
      branch: story.branch ?? "",
      reviewText: story.quote ?? "",
      photoUrl: story.img ?? "",
      rating: story.rating ?? 5,
      createdAt: FieldValue.serverTimestamp(),
    };

    batch.set(reviewsRef.doc(), docData);
    opsInBatch++;
    addedCount++;

    if (opsInBatch >= BATCH_LIMIT) {
      await batch.commit();
      batch = db.batch();
      opsInBatch = 0;
    }
  }

  if (opsInBatch > 0) {
    await batch.commit();
  }

  return addedCount;
}

async function main() {
  const serviceAccount = loadServiceAccount();
  const allStories = loadAllStories();
  const storyItems = allStories.filter((item) => item.type === "story");

  console.log(`Extracted ${allStories.length} total ALL_STORIES item(s), ${storyItems.length} of type "story".`);

  if (serviceAccount.project_id && serviceAccount.project_id !== PROJECT_ID) {
    console.error(
      `Service account belongs to project "${serviceAccount.project_id}", expected "${PROJECT_ID}". Aborting.`
    );
    process.exit(1);
  }

  initializeApp({
    credential: cert(serviceAccount),
    projectId: PROJECT_ID,
  });
  const db = getFirestore();

  console.log(`Connected to project "${PROJECT_ID}".`);

  console.log('Deleting existing documents in "reviews"...');
  const deletedCount = await deleteAllReviews(db);
  console.log(`Deleted ${deletedCount} existing document(s).`);

  console.log(`Seeding ${storyItems.length} review(s) from ALL_STORIES (type: "story")...`);
  const addedCount = await seedReviews(db, storyItems);

  console.log(`Done. Deleted ${deletedCount} document(s), added ${addedCount} document(s) to "reviews".`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed script failed:", err);
    process.exit(1);
  });
