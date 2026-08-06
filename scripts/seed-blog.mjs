#!/usr/bin/env node
// One-time script: seed the Firestore "blog" collection from data/blogData.ts.
// Deletes all existing "blog" documents first, then writes the DEFAULT_POSTS.
//
// Usage:
//   node scripts/seed-blog.mjs
//
// Credentials (same source as lib/firebase-admin.ts), checked in this order:
//   1. FIREBASE_SERVICE_ACCOUNT_KEY env var containing the service account JSON
//   2. serviceAccountKey.json in the project root (gitignored)

import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { DEFAULT_POSTS } from "../data/blogData.ts";

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
      "       FIREBASE_SERVICE_ACCOUNT_KEY='{\"type\":\"service_account\", ...}' node scripts/seed-blog.mjs",
      "",
      "  2. Download a service account key from Firebase Console > Project Settings > Service Accounts",
      "     (project: game-academy-2799d) and save it as serviceAccountKey.json in the project root",
      "     (already listed in .gitignore), then run:",
      "       node scripts/seed-blog.mjs",
    ].join("\n")
  );
  process.exit(1);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function deleteAllPosts(db) {
  const blogRef = db.collection("blog");
  const snapshot = await blogRef.get();

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

async function seedPosts(db) {
  const blogRef = db.collection("blog");

  let addedCount = 0;
  let batch = db.batch();
  let opsInBatch = 0;

  for (const post of DEFAULT_POSTS) {
    const docData = {
      title: post.title,
      slug: slugify(post.title),
      category: post.category,
      author: post.author,
      authorRole: post.authorRole,
      readTime: post.readTime,
      coverImageUrl: post.image,
      excerpt: post.excerpt,
      content: "",
      publishedDate: post.date,
      tags: post.tags,
      published: true,
      featured: post.featured ?? false,
      createdAt: FieldValue.serverTimestamp(),
    };

    batch.set(blogRef.doc(), docData);
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

  console.log('Deleting existing documents in "blog"...');
  const deletedCount = await deleteAllPosts(db);
  console.log(`Deleted ${deletedCount} existing document(s).`);

  console.log(`Seeding ${DEFAULT_POSTS.length} post(s) from data/blogData.ts...`);
  const addedCount = await seedPosts(db);

  console.log(`Done. Deleted ${deletedCount} document(s), added ${addedCount} document(s) to "blog".`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Seed script failed:", err);
    process.exit(1);
  });
