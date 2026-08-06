#!/usr/bin/env node
// One-time script: seed the Firestore "faculty" collection from data/facultyData.ts.
// Deletes all existing "faculty" documents first, then writes DEFAULT_CHIEF_MENTOR
// (isChiefMentor: true) and all DEFAULT_FACULTY (isChiefMentor: false).
//
// Usage:
//   node scripts/seed-faculty.mjs
//
// Credentials (same source as lib/firebase-admin.ts), checked in this order:
//   1. FIREBASE_SERVICE_ACCOUNT_KEY env var containing the service account JSON
//   2. serviceAccountKey.json in the project root (gitignored)

import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { DEFAULT_CHIEF_MENTOR, DEFAULT_FACULTY } from "../data/facultyData.ts";

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
      "       FIREBASE_SERVICE_ACCOUNT_KEY='{\"type\":\"service_account\", ...}' node scripts/seed-faculty.mjs",
      "",
      "  2. Download a service account key from Firebase Console > Project Settings > Service Accounts",
      "     (project: game-academy-2799d) and save it as serviceAccountKey.json in the project root",
      "     (already listed in .gitignore), then run:",
      "       node scripts/seed-faculty.mjs",
    ].join("\n")
  );
  process.exit(1);
}

function toFacultyDoc(member, isChiefMentor) {
  return {
    name: member.name,
    role: member.role,
    expLabel: member.expLabel,
    experience: member.exp,
    photoUrl: member.img,
    stats: member.stats.map((s) => s.label),
    isChiefMentor,
    createdAt: FieldValue.serverTimestamp(),
  };
}

async function deleteAllFaculty(db) {
  const facultyRef = db.collection("faculty");
  const snapshot = await facultyRef.get();

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

async function seedFaculty(db) {
  const facultyRef = db.collection("faculty");

  const allDocs = [
    toFacultyDoc(DEFAULT_CHIEF_MENTOR, true),
    ...DEFAULT_FACULTY.map((member) => toFacultyDoc(member, false)),
  ];

  let addedCount = 0;
  let batch = db.batch();
  let opsInBatch = 0;

  for (const docData of allDocs) {
    batch.set(facultyRef.doc(), docData);
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

  console.log('Deleting existing documents in "faculty"...');
  const deletedCount = await deleteAllFaculty(db);
  console.log(`Deleted ${deletedCount} existing document(s).`);

  const total = 1 + DEFAULT_FACULTY.length;
  console.log(`Seeding ${total} faculty member(s) from data/facultyData.ts...`);
  const addedCount = await seedFaculty(db);

  console.log(`Done. Deleted ${deletedCount} document(s), added ${addedCount} document(s) to "faculty".`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed script failed:", err);
    process.exit(1);
  });
