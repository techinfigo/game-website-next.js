// CORS for the endpoints the student portal calls cross-origin (auth handoff,
// OTP, payments). The portal can be served from its custom domain or its Vercel
// URL, so we reflect the request's Origin when it is one we trust, instead of
// hardcoding a single value. PORTAL_ORIGIN can add one more allowed origin.
const ALLOWED_ORIGINS = new Set([
  'https://student.gameacademy.in',
  'https://game-student-portal.vercel.app',
  'http://localhost:5173',
  'http://localhost:3000',
]);

export function getCorsHeaders(origin?: string | null) {
  const envOrigin = process.env.PORTAL_ORIGIN;
  let allow = 'https://student.gameacademy.in';
  if (origin && (ALLOWED_ORIGINS.has(origin) || origin === envOrigin)) {
    allow = origin;
  } else if (envOrigin) {
    allow = envOrigin;
  }
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}
