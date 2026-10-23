import { getAdminDb } from '@/lib/firebase-admin';

// Smallest amount Razorpay will accept for an order (₹1 = 100 paise). A coupon
// can never take the payable amount below this.
export const MIN_PAYABLE = 1;

export interface CouponOutcome {
  valid: boolean;
  reason?: string;
  code?: string;
  docId?: string;
  originalAmount: number;
  discount: number;
  finalAmount: number;
}

/**
 * Validates a coupon code against an amount (in rupees) using the Admin SDK,
 * and returns the discount and final payable amount. All coupon rules are
 * enforced here on the server, so the client can never fake a discount.
 */
export async function applyCoupon(codeRaw: string | undefined | null, amount: number): Promise<CouponOutcome> {
  const base: CouponOutcome = { valid: false, originalAmount: amount, discount: 0, finalAmount: amount };

  const code = (codeRaw || '').trim().toUpperCase();
  if (!code) return { ...base, reason: 'No coupon applied.' };

  const db = getAdminDb();
  const snap = await db.collection('coupons').where('code', '==', code).limit(1).get();
  if (snap.empty) return { ...base, reason: 'Invalid coupon code.' };

  const doc = snap.docs[0];
  const c = doc.data() as any;

  if (c.active === false) return { ...base, reason: 'This coupon is no longer active.' };
  if (c.expiresAt && new Date(c.expiresAt).getTime() < Date.now()) {
    return { ...base, reason: 'This coupon has expired.' };
  }
  if (typeof c.maxUses === 'number' && c.maxUses > 0 && (Number(c.usedCount) || 0) >= c.maxUses) {
    return { ...base, reason: 'This coupon has reached its usage limit.' };
  }
  if (typeof c.minAmount === 'number' && c.minAmount > 0 && amount < c.minAmount) {
    return { ...base, reason: `This coupon needs a minimum order of ₹${c.minAmount}.` };
  }

  let discount = 0;
  if (c.type === 'percent') {
    discount = Math.floor((amount * (Number(c.value) || 0)) / 100);
  } else {
    discount = Math.floor(Number(c.value) || 0);
  }
  if (discount < 0) discount = 0;
  // Never let the payable amount drop below Razorpay's minimum.
  const maxDiscount = Math.max(0, amount - MIN_PAYABLE);
  if (discount > maxDiscount) discount = maxDiscount;

  const finalAmount = amount - discount;
  return { valid: true, code, docId: doc.id, originalAmount: amount, discount, finalAmount };
}
