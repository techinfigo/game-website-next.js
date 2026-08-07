#!/usr/bin/env node
/**
 * Scans public/ recursively for .png/.jpg/.jpeg files over SIZE_THRESHOLD_BYTES.
 * For each, writes:
 *   - a sibling .webp (quality ~80)
 *   - an overwritten original (same name/ext) re-encoded as optimized JPEG/PNG,
 *     resized so the longest side is at most MAX_DIMENSION (no upscaling)
 *
 * Usage:
 *   node scripts/optimize-images.mjs           # dry run (default, no writes)
 *   node scripts/optimize-images.mjs --apply   # actually write files
 */

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const SIZE_THRESHOLD_BYTES = 400 * 1024; // 400KB
const MAX_DIMENSION = 1920;
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 82;

const APPLY = process.argv.includes("--apply");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        files.push(full);
      }
    }
  }
  return files;
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)}KB`;
}

async function processFile(filePath) {
  const stat = await fs.stat(filePath);
  if (stat.size <= SIZE_THRESHOLD_BYTES) return null;

  const ext = path.extname(filePath).toLowerCase();
  const isPng = ext === ".png";
  const webpPath = filePath.slice(0, -ext.length) + ".webp";

  // Read fully into memory first so libvips never holds a handle on the
  // source path — on Windows, overwriting a file sharp is still reading
  // from (even after toBuffer() resolves) can intermittently fail.
  const inputBuffer = await fs.readFile(filePath);

  const metadata = await sharp(inputBuffer, { failOn: "none" }).metadata();
  const longestSide = Math.max(metadata.width ?? 0, metadata.height ?? 0);
  const shouldResize = longestSide > MAX_DIMENSION;

  const resizeOpts = shouldResize
    ? { width: MAX_DIMENSION, height: MAX_DIMENSION, fit: "inside", withoutEnlargement: true }
    : null;

  // Build the optimized WebP buffer
  let webpPipeline = sharp(inputBuffer, { failOn: "none" });
  if (resizeOpts) webpPipeline = webpPipeline.resize(resizeOpts);
  webpPipeline = webpPipeline.webp({ quality: WEBP_QUALITY });

  // Build the optimized original-format buffer (overwrite in place)
  let originalPipeline = sharp(inputBuffer, { failOn: "none" });
  if (resizeOpts) originalPipeline = originalPipeline.resize(resizeOpts);
  originalPipeline = isPng
    ? originalPipeline.png({ quality: JPEG_QUALITY, compressionLevel: 9 })
    : originalPipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const [webpBuffer, originalBuffer] = await Promise.all([
    webpPipeline.toBuffer(),
    originalPipeline.toBuffer(),
  ]);

  const result = {
    filePath,
    webpPath,
    oldSize: stat.size,
    newOriginalSize: originalBuffer.length,
    newWebpSize: webpBuffer.length,
    resized: shouldResize,
    dimensions: `${metadata.width}x${metadata.height}`,
  };

  if (APPLY) {
    await writeFileWithRetry(webpPath, webpBuffer);
    // Only overwrite original if it's actually smaller — never make it bigger.
    if (originalBuffer.length < stat.size) {
      await writeFileWithRetry(filePath, originalBuffer);
    } else {
      result.originalSkipped = true;
    }
  }

  return result;
}

async function writeFileWithRetry(filePath, buffer, retries = 10, delayMs = 1000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await fs.writeFile(filePath, buffer);
      return;
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

async function main() {
  const targetArgs = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  const allFiles = targetArgs.length
    ? targetArgs.map((a) => path.resolve(PUBLIC_DIR, a))
    : await walk(PUBLIC_DIR);
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
  let totalNewOriginal = 0;
  let totalNewWebp = 0;

  console.log(`${APPLY ? "APPLYING" : "DRY RUN"} — ${results.length} file(s) over ${formatBytes(SIZE_THRESHOLD_BYTES)}\n`);

  for (const r of results) {
    totalOld += r.oldSize;
    totalNewOriginal += r.newOriginalSize;
    totalNewWebp += r.newWebpSize;

    const rel = path.relative(PUBLIC_DIR, r.filePath);
    const relWebp = path.relative(PUBLIC_DIR, r.webpPath);
    const resizeNote = r.resized ? ` [resized from ${r.dimensions}]` : "";
    const skipNote = r.originalSkipped ? " (original NOT overwritten — new size was not smaller)" : "";

    console.log(
      `${rel}: ${formatBytes(r.oldSize)} -> ${formatBytes(r.newOriginalSize)} (original)${resizeNote}${skipNote}`
    );
    console.log(`  + ${relWebp}: ${formatBytes(r.newWebpSize)} (new webp)`);
  }

  const savedOriginal = totalOld - totalNewOriginal;
  const pctOriginal = totalOld ? ((savedOriginal / totalOld) * 100).toFixed(1) : "0.0";

  console.log("\n--- Summary ---");
  console.log(`Files processed: ${results.length}`);
  console.log(`Total old size:            ${formatBytes(totalOld)}`);
  console.log(`Total new original size:   ${formatBytes(totalNewOriginal)} (${pctOriginal}% reduction)`);
  console.log(`Total new webp size (add): ${formatBytes(totalNewWebp)}`);
  console.log(`Net disk delta if applied: ${formatBytes(totalNewOriginal + totalNewWebp - totalOld)} (originals replaced + webp added alongside)`);

  if (!APPLY) {
    console.log("\nThis was a DRY RUN. No files were written. Re-run with --apply to write changes.");
  }

  if (errors.length) {
    console.log(`\n${errors.length} file(s) FAILED — re-run the script to retry them:`);
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
