'use client';

import { loadFirebase } from './loadFirebase';

// The student portal is a separate deployment on its own subdomain. When a
// student is already logged in on the main website, we mint a one-time SSO
// token (via /api/auth/handoff) and hand them over so they are NOT asked to log
// in again. If they are not logged in (or anything fails), we send them to the
// plain portal URL and the portal handles login, preserving the destination.
const PORTAL_URL =
  process.env.NEXT_PUBLIC_STUDENT_PORTAL_URL || 'https://student.gameacademy.in';

/**
 * Navigate to a path on the student portal, carrying an SSO token when the
 * visitor is signed in on the main site. `path` may already contain a query
 * string, e.g. "/library?buy=<pdfId>" or "/purchases".
 */
export async function goToPortal(path: string): Promise<void> {
  const target = path.startsWith('/') ? path : `/${path}`;
  try {
    const { auth } = await loadFirebase();
    const user = auth.currentUser;
    if (user) {
      const idToken = await user.getIdToken();
      const res = await fetch('/api/auth/handoff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      if (res.ok) {
        const { token } = await res.json();
        if (token) {
          const sep = target.includes('?') ? '&' : '?';
          window.location.href = `${PORTAL_URL}${target}${sep}sso=${encodeURIComponent(token)}`;
          return;
        }
      }
    }
  } catch {
    /* fall through to the plain portal URL */
  }
  window.location.href = `${PORTAL_URL}${target}`;
}
