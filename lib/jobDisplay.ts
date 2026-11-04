// Shared display helpers for job notifications (used by the /jobs page and the
// home "Latest Career Opportunities" teaser) so formatting stays consistent.

// Render a stored date as "1 Jan 2026". If the value can't be parsed (admin may
// type free text or stack multiple dates), it's returned unchanged.
export function formatJobDate(value?: string): string {
  if (!value) return '';
  const raw = String(value).trim();
  const t = Date.parse(raw);
  if (Number.isNaN(t)) return raw;
  return new Date(t).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// A job whose end date has passed is treated as Closed automatically, so
// expired notifications stop showing as Open without anyone editing them.
export function isJobExpired(endDate?: string): boolean {
  if (!endDate) return false;
  const t = Date.parse(String(endDate).trim());
  if (Number.isNaN(t)) return false;
  const end = new Date(t);
  end.setHours(23, 59, 59, 999);
  return end.getTime() < Date.now();
}
