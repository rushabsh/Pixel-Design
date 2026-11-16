/**
 * Pixel Engineers Centralized Design System — Shadows
 * Depth and elevation definitions for cards, modals, buttons, and floating UI.
 */

export const SHADOWS = {
  // Standard elevation levels
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",

  // Component-specific elevations
  card: "0 12px 32px rgba(0, 0, 0, 0.08)",
  cardDark: "0 12px 32px rgba(0, 0, 0, 0.4)",
  button: "0 4px 14px rgba(0, 0, 0, 0.1)",
  buttonHover: "0 6px 20px rgba(0, 0, 0, 0.15)",
  modal: "0 24px 48px -12px rgba(0, 0, 0, 0.35)",
  dropdown: "0 10px 38px -10px rgba(22, 23, 24, 0.35)",
  floating: "0 8px 32px rgba(0, 0, 0, 0.35)",
  floatingHover: "0 12px 36px rgba(0, 0, 0, 0.5)",
  glowBrand: "0 0 24px rgba(69, 65, 241, 0.4)",
};

export default SHADOWS;
