#!/usr/bin/env node
// One-time script: seed the Firestore "achievers" collection from data/achieversData.ts.
// Deletes all existing "achievers" documents first, then writes DEFAULT_VIDEO_SHORTS and
// DEFAULT_GATE_TOPPERS mapped onto the shared achiever schema (type, name, achievement,
// exam, youtubeUrl, photoUrl).
//
// Usage:
//   node scripts/seed-achievers.mjs
//
// Credentials (same source as lib/firebase-admin.ts), checked in this order:
//   1. FIREBASE_SERVICE_ACCOUNT_KEY env var containing the service account JSON
//   2. serviceAccountKey.json in the project root (gitignored)

import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { DEFAULT_VIDEO_SHORTS, DEFAULT_GATE_TOPPERS } from "../data/achieversData.ts";

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
      "       FIREBASE_SERVICE_ACCOUNT_KEY='{\"type\":\"service_account\", ...}' node scripts/seed-achievers.mjs",
      "",
      "  2. Download a service account key from Firebase Console > Project Settings > Service Accounts",
      "     (project: game-academy-2799d) and save it as serviceAccountKey.json in the project root",
      "     (already listed in .gitignore), then run:",
      "       node scripts/seed-achievers.mjs",
    ].join("\n")
  );
  process.exit(1);
}

async function deleteAllAchievers(db) {
  const achieversRef = db.collection("achievers");
  const snapshot = await achieversRef.get();

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

async function seedAchievers(db) {
  const achieversRef = db.collection("achievers");

  const videoShortDocs = DEFAULT_VIDEO_SHORTS.map(({ type, name, videoId }) => ({
    type,
    name,
    youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
    createdAt: FieldValue.serverTimestamp(),
  }));

  const gateTopperDocs = DEFAULT_GATE_TOPPERS.map(({ type, name, rank, exam, image }) => ({
    type,
    name,
    achievement: rank,
    exam,
    photoUrl: image,
    createdAt: FieldValue.serverTimestamp(),
  }));

  const allDocs = [...videoShortDocs, ...gateTopperDocs];

  let addedCount = 0;
  let batch = db.batch();
  let opsInBatch = 0;

  for (const docData of allDocs) {
    batch.set(achieversRef.doc(), docData);
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

  console.log('Deleting existing documents in "achievers"...');
  const deletedCount = await deleteAllAchievers(db);
  console.log(`Deleted ${deletedCount} existing document(s).`);

  const total = DEFAULT_VIDEO_SHORTS.length + DEFAULT_GATE_TOPPERS.length;
  console.log(`Seeding ${total} achiever(s) from data/achieversData.ts...`);
  const addedCount = await seedAchievers(db);

  console.log(`Done. Deleted ${deletedCount} document(s), added ${addedCount} document(s) to "achievers".`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed script failed:", err);
    process.exit(1);
  });
