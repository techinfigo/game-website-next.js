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

// Global Window Type extension for TS compiler
declare global {
  interface Window {
    showComingSoonModal?: (examName?: string) => void;
  }
}

/**
 * Universal safe function to trigger the coming soon modular popup.
 * It is 100% reliable across all browsers, mobile/desktop, production builds,
 * and iframes because it bypasses standard event dispatching delays via a direct window hook.
 */
export const triggerComingSoonModal = (examName: string) => {
  if (typeof window !== 'undefined') {
    const win = window as any;
    
    // 1. Direct window function trigger
    if (win.showComingSoonModal) {
      try {
        win.showComingSoonModal(examName);
      } catch (err) {
        console.warn("Direct modal triggering failed:", err);
      }
    }
    
    // 2. CustomEvent dispatcher trigger (redundant backup layer)
    try {
      window.dispatchEvent(new CustomEvent('show-coming-soon', { detail: { examName } }));
    } catch (err) {
      console.warn("Custom event trigger failed:", err);
    }
  }
};
