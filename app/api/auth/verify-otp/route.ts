import { NextRequest, NextResponse } from 'next/server';
import { FieldValue } from 'firebase-admin/firestore';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  const { phone, otp } = await req.json();

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
      body: JSON.stringify({ mobile: `91${phone}`, otp }),
    });
    const data = await res.json();
    if (data.type !== 'success') {
      return NextResponse.json({ error: 'Invalid or expired OTP' }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: 'OTP verification failed' }, { status: 500 });
  }

  // Step 2: Find or create Firebase user by phone number
  // OTP is already verified above — any error from here is a Firebase Admin issue,
  // not an OTP issue. We return otpVerified:true so the client can show the right message.
  const phoneNumber = `+91${phone}`;
  try {
    const adminAuth = getAdminAuth();
    const adminDb = getAdminDb();

    let uid: string;
    let isNewUser = false;

    try {
      const existing = await adminAuth.getUserByPhoneNumber(phoneNumber);
      uid = existing.uid;
    } catch (lookupErr: any) {
      if (lookupErr.code !== 'auth/user-not-found') {
        // Re-throw anything that isn't a missing-user error so the outer
        // catch can surface it properly instead of silently creating a duplicate
        throw lookupErr;
      }
      const created = await adminAuth.createUser({ phoneNumber });
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
        phoneNumber,
        displayName: 'Student',
        role: 'student',
        createdAt: FieldValue.serverTimestamp(),
      });
      isNewUser = true;
    }

    const customToken = await adminAuth.createCustomToken(uid);
    return NextResponse.json({ token: customToken, isNewUser });
  } catch (err: any) {
    const isKeyMissing = err.message?.includes('FIREBASE_SERVICE_ACCOUNT_KEY');
    console.error('[verify-otp] Firebase Admin error:', err.message);
    return NextResponse.json(
      {
        otpVerified: true,
        error: isKeyMissing
          ? 'Server is missing FIREBASE_SERVICE_ACCOUNT_KEY — add it to .env.local'
          : `Firebase session error: ${err.message}`,
      },
      { status: 500 }
    );
  }
}
