import { NextRequest, NextResponse } from 'next/server';
import { FieldValue } from 'firebase-admin/firestore';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';
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

async function handlePOST(req: NextRequest) {
  const { phone, otp } = await req.json();
  const formattedPhone = phone.startsWith('+') ? phone : `+91${phone}`;

  if (!phone || !/^\d{10}$/.test(phone) || !otp) {
    return NextResponse.json({ error: 'Phone and OTP required' }, { status: 400 });
  }

  const authKey = process.env.NEXT_PUBLIC_MSG91_AUTH_KEY;
  if (!authKey) {
    return NextResponse.json({ error: 'MSG91 credentials not configured' }, { status: 500 });
  }

  // Step 1: Verify OTP with MSG91
  try {
    const res = await fetch('https://control.msg91.com/api/v5/otp/verify', {
      method: 'POST',
      headers: {
        authkey: authKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile: formattedPhone.replace('+', ''), otp }),
    });
    const data = await res.json();
    if (data.type !== 'success') {
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: 'OTP verification failed', detail: err.message }, { status: 500 });
  }

  // Step 2: Find or create Firebase user by phone number
  // OTP is already verified above — any error from here is a Firebase Admin issue,
  // not an OTP issue. We return otpVerified:true so the client can show the right message.
  try {
    const adminAuth = getAdminAuth();
    const adminDb = getAdminDb();

    let uid: string;
    let isNewUser = false;

    try {
      const existing = await adminAuth.getUserByPhoneNumber(formattedPhone);
      uid = existing.uid;
    } catch (lookupErr: any) {
      if (lookupErr.code !== 'auth/user-not-found') {
        // Re-throw anything that isn't a missing-user error so the outer
        // catch can surface it properly instead of silently creating a duplicate
        throw lookupErr;
      }
      const created = await adminAuth.createUser({ phoneNumber: formattedPhone });
      uid = created.uid;
      isNewUser = true;
    }

    // Ensure Firestore doc exists — covers new users AND existing users
    // whose doc was never created or was deleted
    const userDocRef = adminDb.collection('users').doc(uid);
    const userDoc = await userDocRef.get();
    if (!userDoc.exists) {
      await userDocRef.set({
        uid,
        phoneNumber: formattedPhone,
        displayName: 'Student',
        role: 'student',
        createdAt: FieldValue.serverTimestamp(),
      });
      isNewUser = true;
    }

    const customToken = await adminAuth.createCustomToken(uid);
    const displayName = userDoc.exists ? (userDoc.data()?.displayName || 'Student') : 'Student';
    return NextResponse.json({ token: customToken, isNewUser, uid, phone: formattedPhone, name: displayName });
  } catch (err: any) {
    const isKeyMissing = err.message?.includes('FIREBASE_SERVICE_ACCOUNT_KEY');
    return NextResponse.json({
      otpVerified: true,
      error: isKeyMissing
        ? 'Server is missing FIREBASE_SERVICE_ACCOUNT_KEY — add it to .env.local'
        : `Firebase session error: ${err.message}`,
    }, { status: 500 });
  }
}
