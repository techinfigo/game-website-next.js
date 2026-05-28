/**
 * Configuration for exam pages status.
 * 
 * Set EXAM_PAGES_DISABLED to true to temporarily disable navigation to exam pages
 * and show a polished "Under Maintenance / Upgrading" view.
 * 
 * 🟢 TO MAKE ALL PAGES LIVE AGAIN, JUST CHANGE 'true' TO 'false' BELOW:
 */
export const EXAM_PAGES_DISABLED = true;

// List of routes/paths that correspond to the examination pages
export const DISABLED_EXAMPAGES_IDS = [
  'gate', 
  'ese', 
  'psu', 
  'ssc', 
  'rrb', 
  'state', 
  'iit', 
  'nontech', 
  'school'
];

export const EXAM_PAGES_DISABLED_MESSAGE = "Our team is currently upgrading this exam section with fresh study materials, masterclasses, and visual cheat sheets. It will be back online shortly!";
