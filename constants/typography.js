/**
 * Pixel Engineers Centralized Design System — Typography
 * Single source of truth for font families, sizes, weights, and scale.
 */

export const TYPOGRAPHY = {
  // Font Families matching CSS declarations
  fontFamily: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: '"Freigeist Con", Inter, sans-serif',
    heading: '"Plus Jakarta Sans", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  },

  // Font Sizes
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    md: "18px",
    lg: "20px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "40px",
    "4xl": "48px",
    "5xl": "60px",
    "6xl": "72px",
    hero: "clamp(3.5rem, 13vw, 9rem)",
  },

  // Font Weights
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Heights
  lineHeight: {
    none: "1",
    tight: "1.15",
    snug: "1.3",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Letter Spacing
  letterSpacing: {
    tighter: "-0.04em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.02em",
    wider: "0.05em",
  },
};

export default TYPOGRAPHY;
