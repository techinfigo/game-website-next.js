// Shared display helpers for job notifications (used by the /jobs page and the
// home "Latest Career Opportunities" teaser) so formatting stays consistent.

// Parse a stored date string into a timestamp (ms), handling the formats the
// admin may produce or that may exist in older data:
//   - ISO from the date picker:        2026-01-15
//   - Day-first with / . or -:         15/01/2026, 15-01-2026, 15.01.2026
//   - Month name:                      1 Jan 2026, 15 January 2026
// Returns null when it can't be understood.
export function parseJobDate(value?: string): number | null {
  if (!value) return null;
  const raw = String(value).trim();
  if (!raw) return null;

  // ISO: yyyy-mm-dd (also yyyy/mm/dd, yyyy.mm.dd)
  let m = raw.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})$/);
  if (m) {
    const d = new Date(+m[1], +m[2] - 1, +m[3]);
    return isNaN(d.getTime()) ? null : d.getTime();
  }
  // Day-first: dd-mm-yyyy, dd/mm/yyyy, dd.mm.yyyy (Indian convention)
  m = raw.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (m) {
    const d = new Date(+m[3], +m[2] - 1, +m[1]);
    return isNaN(d.getTime()) ? null : d.getTime();
  }
  // Month-name forms and anything else the engine understands (1 Jan 2026 etc.)
  const t = Date.parse(raw);
  return Number.isNaN(t) ? null : t;
}

// Render a stored date as "1 Jan 2026". If the value can't be parsed (admin may
// type free text or stack multiple dates), it's returned unchanged.
export function formatJobDate(value?: string): string {
  if (!value) return '';
  const raw = String(value).trim();
  const t = parseJobDate(raw);
  if (t === null) return raw;
  return new Date(t).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// A job whose end date has passed is treated as Closed automatically, so
// expired notifications stop showing as Open without anyone editing them.
export function isJobExpired(endDate?: string): boolean {
  const t = parseJobDate(endDate);
  if (t === null) return false;
  const end = new Date(t);
  end.setHours(23, 59, 59, 999); // the last date is inclusive — closes after that day ends
  return end.getTime() < Date.now();
}
