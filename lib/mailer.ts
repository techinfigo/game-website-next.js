import nodemailer from 'nodemailer';

// SMTP transport built from environment variables. Returns null when the
// mail server isn't configured yet, so callers can degrade gracefully (the
// payment/lead flow still works; only the confirmation email is skipped).
//
// Required env (set in Vercel):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM
// Optional:
//   SMTP_SECURE ("true" for port 465), MAIL_REPLY_TO
function getTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

export function mailerConfigured(): boolean {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

type LeadInfo = { name: string; email: string; phone?: string; branch?: string; amount?: number };

// Confirmation email after a successful 1:1 Mentorship payment. Best-effort:
// never throws — a mail failure must not fail the payment verification.
export async function sendMentorshipConfirmation(lead: LeadInfo): Promise<boolean> {
  try {
    const transport = getTransport();
    if (!transport) return false;
    const from = process.env.MAIL_FROM || process.env.SMTP_USER!;
    const amountLine = lead.amount ? `<p style="margin:0 0 8px"><strong>Amount paid:</strong> ₹${lead.amount.toLocaleString('en-IN')}</p>` : '';
    await transport.sendMail({
      from,
      to: lead.email,
      replyTo: process.env.MAIL_REPLY_TO || undefined,
      subject: 'Your 1:1 Mentorship with GAME Academy is confirmed 🎉',
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
          <div style="background:#075d63;padding:24px;border-radius:14px 14px 0 0">
            <h1 style="color:#f2c537;margin:0;font-size:20px">GAME Academy</h1>
            <p style="color:#d9efec;margin:6px 0 0;font-size:13px">The Winner's Choice</p>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:0;padding:24px;border-radius:0 0 14px 14px">
            <h2 style="margin:0 0 12px;font-size:18px">Hi ${lead.name || 'there'}, your 1:1 Mentorship is confirmed!</h2>
            <p style="margin:0 0 12px;line-height:1.6;color:#475569">
              Thank you for booking a 1:1 Mentorship session with <strong>Gaurav Babu Sir</strong>.
              We have received your payment and our team will reach out to you shortly on your
              registered phone/email to schedule your session.
            </p>
            ${amountLine}
            ${lead.phone ? `<p style="margin:0 0 8px"><strong>Phone:</strong> ${lead.phone}</p>` : ''}
            ${lead.branch ? `<p style="margin:0 0 8px"><strong>Exam / Branch:</strong> ${lead.branch}</p>` : ''}
            <p style="margin:16px 0 0;line-height:1.6;color:#475569">
              If you have any questions, just reply to this email.<br/>— Team GAME Academy
            </p>
          </div>
        </div>`,
    });
    return true;
  } catch (e) {
    console.error('Mentorship confirmation email failed:', e);
    return false;
  }
}
