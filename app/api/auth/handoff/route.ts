import { NextRequest, NextResponse } from 'next/server';
import { getAdminAuth } from '@/lib/firebase-admin';
import { getCorsHeaders } from '@/lib/cors';

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: getCorsHeaders() });
}

export async function POST(req: NextRequest) {
  const res = await handlePOST(req);
  const headers = getCorsHeaders();
  Object.entries(headers).forEach(([key, value]) => res.headers.set(key, value));
  return res;
}

// Exchanges a website session's Firebase ID token for a fresh custom token the
// student portal can sign in with, so a logged-in student is not asked to log
// in again. Both apps live on the same Firebase project, so the custom token
// minted here is accepted by the portal's signInWithCustomToken.
async function handlePOST(req: NextRequest) {
  let idToken: unknown;
  try {
    ({ idToken } = await req.json());
  } catch (_) {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!idToken || typeof idToken !== 'string') {
    return NextResponse.json({ error: 'idToken required' }, { status: 400 });
  }

  let adminAuth;
  try {
    adminAuth = getAdminAuth();
  } catch (err: any) {
    const isKeyMissing = err.message?.includes('FIREBASE_SERVICE_ACCOUNT_KEY');
    return NextResponse.json({
      error: isKeyMissing
        ? 'Server is missing FIREBASE_SERVICE_ACCOUNT_KEY — add it to .env.local'
        : `Firebase Admin error: ${err.message}`,
    }, { status: 500 });
  }

  let uid: string;
  try {
    const decoded = await adminAuth.verifyIdToken(idToken);
    uid = decoded.uid;
  } catch (_) {
    // Expired, malformed, or issued by another project — never leak the reason.
    return NextResponse.json({ error: 'Invalid or expired ID token' }, { status: 401 });
  }

  try {
    const token = await adminAuth.createCustomToken(uid);
    return NextResponse.json({ token });
  } catch (err: any) {
    return NextResponse.json(
      { error: `Could not mint handoff token: ${err.message}` },
      { status: 500 }
    );
  }
}
