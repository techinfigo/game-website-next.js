// Razorpay credentials from environment. Returns null when not configured yet,
// so the payment endpoints can degrade gracefully ("payments not set up")
// instead of crashing before the client adds their keys.
export function getRazorpayCreds(): { keyId: string; keySecret: string } | null {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return null;
  return { keyId, keySecret };
}
