/**
 * Pixel Engineers Centralized Design System — Spacing
 * Consistent spacing scale for margins, paddings, gaps, and component structure.
 */

export const SPACING = {
  // Base scale (4px grid)
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  base: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "32px",
  "3xl": "40px",
  "4xl": "48px",
  "5xl": "64px",
  "6xl": "80px",
  "7xl": "96px",
  "8xl": "120px",

  // Component-specific Spacing
  component: {
    btnPaddingSm: "10px 20px",
    btnPaddingMd: "14px 28px",
    btnPaddingLg: "16px 32px",
    inputPadding: "16px 20px",
    cardPaddingSm: "20px",
    cardPaddingMd: "32px",
    cardPaddingLg: "48px",
  },

  // Section Spacing
  section: {
    mobile: "60px",
    tablet: "80px",
    desktop: "120px",
    heroPadding: "12px",
  },

  // Layout Gaps
  gap: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    grid: "40px",
  },
};

export default SPACING;
