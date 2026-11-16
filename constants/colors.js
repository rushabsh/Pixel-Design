/**
 * Pixel Engineers Centralized Design System — Colors
 * Single source of truth for the entire application.
 */

export const COLORS = {
  // Brand & Accent Colors
  primary: "#4541f1", // Signature pixel purple-blue
  primaryHover: "#3733d8",
  brandBlue: "#3b48f6", // Vibrant electric blue
  brandCyan: "#2ca8fe", // Accent cyan / meta theme color
  accentIndigo: "#6366f1", // Topography interactive glow

  // Neutral Backgrounds
  background: {
    base: "#ffffff",
    surfaceLight: "#f9fafb",
    surfaceMuted: "#f1f2f5",
    dark: "#060609", // Primary dark canvas
    darkCard: "#08080c", // Card background
    darkSurface: "#0d0f11", // Raised dark surface
    darkElevated: "#121218", // Floating dark elements / modals
    darkShimmer: "#1a1d24", // Dark skeleton shimmer
  },

  // Typography & Content Colors
  text: {
    primary: "#000000",
    secondary: "#242424",
    muted: "#71717a",
    subtle: "#8e8e93",
    light: "#ffffff",
    lightMuted: "#f5f5f5",
    lightSubtle: "rgba(255, 255, 255, 0.7)",
    lightDisabled: "rgba(255, 255, 255, 0.4)",
  },

  // Borders & Dividers
  border: {
    light: "#e5e7eb",
    dark: "#242424",
    darkSubtle: "rgba(255, 255, 255, 0.12)",
    darkMedium: "rgba(255, 255, 255, 0.18)",
    darkHover: "rgba(255, 255, 255, 0.35)",
  },

  // System & Feedback Status
  status: {
    success: "#22c55e",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
  },
};

export default COLORS;
