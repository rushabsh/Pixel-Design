/**
 * Pixel Engineers Centralized Design System — Layout
 * Centralized layout boundaries, container widths, header heights, and grid layouts.
 */

export const LAYOUT = {
  // Max Container Widths
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
    wide: "1600px",
  },

  // Content Widths
  content: {
    narrow: "680px",
    textMax: "820px",
    standard: "1200px",
    full: "100%",
  },

  // Structural Heights
  header: {
    heightDesktop: "80px",
    heightMobile: "64px",
  },

  // Footer Spacing
  footer: {
    paddingTop: "120px",
    paddingBottom: "40px",
    mobilePaddingTop: "70px",
  },

  // Grid Configurations
  grid: {
    columns: 12,
    gutterDesktop: "32px",
    gutterMobile: "16px",
  },

  // Z-Index Stacking Context
  zIndex: {
    base: 1,
    elevated: 10,
    sticky: 100,
    header: 900,
    backToTop: 9990,
    modal: 99999,
    preloader: 999999,
  },
};

export default LAYOUT;
