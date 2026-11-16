/**
 * Pixel Engineers Centralized Design System — Breakpoints
 * Responsive media query limits matching the Next.js CSS architecture.
 */

export const BREAKPOINTS = {
  // Numeric pixel thresholds
  values: {
    xs: 375, // Small mobile
    sm: 565, // Standard mobile
    md: 768, // Tablet boundary (Mobile-desktop partition)
    lg: 991, // Laptop / Navigation collapse boundary
    xl: 1280, // Standard Desktop
    "2xl": 1600, // Large wide displays
  },

  // Media Query Strings for CSS / JS matchMedia
  media: {
    mobileOnly: "(max-width: 768px)",
    tabletOnly: "(min-width: 769px) and (max-width: 991px)",
    laptopDown: "(max-width: 991px)",
    laptopUp: "(min-width: 992px)",
    desktopUp: "(min-width: 1280px)",
    wideUp: "(min-width: 1601px)",
  },
};

export default BREAKPOINTS;
