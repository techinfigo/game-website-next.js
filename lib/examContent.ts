// Server-side loader for admin-editable exam page content.
// Reads from Firestore using the Firebase Admin SDK (bypasses security rules),
// so exam pages can be rendered/ISR-cached on the server without a client read.
//
// IMPORTANT: import this ONLY from server components (e.g. app/<exam>/page.tsx),
// never from a "use client" component. Client components should import the
// TYPES from "@/lib/examContentTypes" instead.

import { getAdminDb } from './firebase-admin';
import type { ExamPageContent } from './examContentTypes';

const COLLECTION = 'examPageContent';

/**
 * Fetch the editable content document for an exam page (e.g. "gate").
 * Returns null on any failure (missing service-account env, network, no doc),
 * which signals the page to fall back to its built-in default content.
 */
export async function getExamContent(examId: string): Promise<ExamPageContent | null> {
  try {
    const snap = await getAdminDb().collection(COLLECTION).doc(examId).get();
    if (!snap.exists) return null;
    return (snap.data() as ExamPageContent) ?? null;
  } catch (err) {
    console.warn(`[examContent] falling back to defaults for "${examId}":`, err);
    return null;
  }
}
