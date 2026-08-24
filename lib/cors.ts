// The handoff endpoint mints Firebase custom tokens, so it should not be
// callable from any origin. Defaults to the student portal's subdomain; set
// PORTAL_ORIGIN when the portal runs elsewhere (local dev, preview builds).
export function getCorsHeaders() {
  const origin = process.env.PORTAL_ORIGIN || 'https://students.gameacademy.in';
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
