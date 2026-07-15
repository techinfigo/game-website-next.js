import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { phone } = await req.json();

  if (!phone || !/^\d{10}$/.test(phone)) {
    return NextResponse.json({ error: 'Valid 10-digit phone number required' }, { status: 400 });
  }

  const authKey = process.env.MSG91_AUTH_KEY;
  const templateId = process.env.MSG91_TEMPLATE_ID;

  if (!authKey || !templateId) {
    return NextResponse.json({ error: 'MSG91 credentials not configured' }, { status: 500 });
  }

  try {
    const res = await fetch('https://control.msg91.com/api/v5/otp', {
      method: 'POST',
      headers: {
        authkey: authKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        template_id: templateId,
        mobile: `91${phone}`,
        otp_length: 6,
        otp_expiry: 10,
      }),
    });

    const data = await res.json();
    if (data.type === 'success') {
      return NextResponse.json({ success: true });
    }
    return NextResponse.json({ error: data.message || 'Failed to send OTP' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
