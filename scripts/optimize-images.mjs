#!/usr/bin/env node
/**
 * Walks public/ recursively and optimizes images in place (same filename/path,
 * no code changes needed elsewhere):
 *
 *  - public/rankers/**  (small grayscale thumbnails displayed ~152x215):
 *      resized down to max 400px width (2x retina headroom for a 152px display)
 *      and recompressed. These are the biggest offenders.
 *
 *  - other images over ~400KB (hero banners, about images, etc.):
 *      recompressed at high quality (~80) and capped at 1600px width if wider.
 *      Content images that are already <=1600px wide are only recompressed,
 *      never resized.
 *
 * Files under 100KB, and files whose recompression doesn't actually shrink
 * them (and don't need resizing), are left untouched.
 *
 * Usage: node scripts/optimize-images.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const RANKERS_DIR = path.join(PUBLIC_DIR, "rankers");

const MIN_SIZE_BYTES = 100 * 1024; // skip anything smaller than this
const CONTENT_THRESHOLD_BYTES = 400 * 1024; // only touch "other" images above this
const RANKERS_MAX_WIDTH = 400;
const CONTENT_MAX_WIDTH = 1600;
const QUALITY = 80;

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile()) {
      if (IMAGE_EXTS.has(path.extname(entry.name).toLowerCase())) {
        files.push(full);
      }
    }
  }
  return files;
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

async function encode(pipeline, ext) {
  if (ext === ".png") {
    return pipeline.png({ palette: true, quality: QUALITY, compressionLevel: 9, effort: 10 }).toBuffer();
  }
  if (ext === ".webp") {
    return pipeline.webp({ quality: QUALITY, effort: 6 }).toBuffer();
  }
  return pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toBuffer();
}

async function processFile(filePath) {
  const stat = await fs.stat(filePath);
  if (stat.size < MIN_SIZE_BYTES) return null;

  const isRanker = filePath.startsWith(RANKERS_DIR + path.sep);
  if (!isRanker && stat.size < CONTENT_THRESHOLD_BYTES) return null;

  const ext = path.extname(filePath).toLowerCase();
  const maxWidth = isRanker ? RANKERS_MAX_WIDTH : CONTENT_MAX_WIDTH;

  const inputBuffer = await fs.readFile(filePath);
  const metadata = await sharp(inputBuffer, { failOn: "none" }).metadata();
  const width = metadata.width ?? 0;
  const shouldResize = width > maxWidth;

  let pipeline = sharp(inputBuffer, { failOn: "none" });
  if (shouldResize) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const outBuffer = await encode(pipeline, ext);

  const worthWriting = shouldResize || outBuffer.length < stat.size;
  if (worthWriting) {
    await fs.writeFile(filePath, outBuffer);
  }

  return {
    filePath,
    category: isRanker ? "ranker" : "content",
    oldSize: stat.size,
    newSize: worthWriting ? outBuffer.length : stat.size,
    resized: shouldResize,
    dims: metadata.width && metadata.height ? `${metadata.width}x${metadata.height}` : "?",
    written: worthWriting,
  };
}

async function main() {
  const allFiles = await walk(PUBLIC_DIR);
  const results = [];
  const errors = [];

  for (const file of allFiles) {
    try {
      const res = await processFile(file);
      if (res) results.push(res);
    } catch (err) {
      errors.push({ file, err });
      console.error(`ERROR processing ${path.relative(PUBLIC_DIR, file)}: ${err.message}`);
    }
  }

  results.sort((a, b) => b.oldSize - a.oldSize);

  let totalOld = 0;
  let totalNew = 0;

  console.log(`Processed ${results.length} candidate file(s)\n`);

  for (const r of results) {
    totalOld += r.oldSize;
    totalNew += r.newSize;

    const rel = path.relative(PUBLIC_DIR, r.filePath);
    const resizeNote = r.resized ? ` [resized from ${r.dims} to max ${r.category === "ranker" ? RANKERS_MAX_WIDTH : CONTENT_MAX_WIDTH}px wide]` : "";
    const skipNote = !r.written ? " (unchanged — already optimized)" : "";

    console.log(`[${r.category}] ${rel}: ${formatBytes(r.oldSize)} -> ${formatBytes(r.newSize)}${resizeNote}${skipNote}`);
  }

  const saved = totalOld - totalNew;
  const pct = totalOld ? ((saved / totalOld) * 100).toFixed(1) : "0.0";

  console.log("\n--- Summary ---");
  console.log(`Files touched: ${results.length}`);
  console.log(`Total before: ${formatBytes(totalOld)}`);
  console.log(`Total after:  ${formatBytes(totalNew)}`);
  console.log(`Saved:        ${formatBytes(saved)} (${pct}%)`);

  if (errors.length) {
    console.log(`\n${errors.length} file(s) FAILED:`);
    for (const { file, err } of errors) {
      console.log(`  ${path.relative(PUBLIC_DIR, file)}: ${err.message}`);
    }
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
