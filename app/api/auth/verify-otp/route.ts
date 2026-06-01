import { NextRequest, NextResponse } from 'next/server';
import { FieldValue } from 'firebase-admin/firestore';
import { getAdminAuth, getAdminDb } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  console.log('[verify-otp] FIREBASE_SERVICE_ACCOUNT_KEY first 20 chars:', key ? key.slice(0, 20) : 'NOT SET');

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
    console.log('[verify-otp] MSG91 response:', JSON.stringify(data));
    if (data.type !== 'success') {
      const body = { error: 'Invalid or expired OTP' };
      console.log('[verify-otp] returning 400:', JSON.stringify(body));
      return NextResponse.json(body, { status: 400 });
    }
  } catch (err: any) {
    const body = { error: 'OTP verification failed', detail: err.message };
    console.log('[verify-otp] returning 500 (MSG91 fetch threw):', JSON.stringify(body));
    return NextResponse.json(body, { status: 500 });
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
    const displayName = userDoc.exists ? (userDoc.data()?.displayName || 'Student') : 'Student';
    const body = { token: customToken, isNewUser, uid, phone: phoneNumber, name: displayName };
    console.log('[verify-otp] returning 200 — uid:', uid, 'isNewUser:', isNewUser, 'token length:', customToken.length);
    return NextResponse.json(body);
  } catch (err: any) {
    const isKeyMissing = err.message?.includes('FIREBASE_SERVICE_ACCOUNT_KEY');
    const body = {
      otpVerified: true,
      error: isKeyMissing
        ? 'Server is missing FIREBASE_SERVICE_ACCOUNT_KEY — add it to .env.local'
        : `Firebase session error: ${err.message}`,
    };
    console.error('[verify-otp] returning 500 (Firebase Admin):', JSON.stringify(body));
    return NextResponse.json(body, { status: 500 });
  }
}
