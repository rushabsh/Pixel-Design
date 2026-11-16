/**
 * Pixel Engineers Centralized Design System — Shared Styles
 * Genuinely shared styling objects and patterns used across components.
 */

import { COLORS } from "./colors.js";
import { RADIUS } from "./radius.js";
import { TRANSITIONS } from "./transitions.js";
import { SHADOWS } from "./shadows.js";

export const STYLES = {
  // Frosted Glass UI Pattern
  glassDark: {
    backgroundColor: "rgba(15, 15, 20, 0.88)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: `1px solid ${COLORS.border.darkMedium}`,
  },

  // Centering Flex Helper
  flexCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // Pill Button Standard Base
  pillButtonDark: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.pill,
    border: `1px solid ${COLORS.border.dark}`,
    padding: "14px 28px",
    backgroundColor: "transparent",
    color: COLORS.text.primary,
    cursor: "pointer",
    transition: TRANSITIONS.presets.hover,
  },

  // Shimmer Dark Background Definition
  skeletonShimmerDark: {
    background: `linear-gradient(90deg, ${COLORS.background.darkSurface} 0%, ${COLORS.background.darkShimmer} 50%, ${COLORS.background.darkSurface} 100%)`,
    backgroundSize: "200% 100%",
  },

  // Shimmer Light Background Definition
  skeletonShimmerLight: {
    background: "linear-gradient(90deg, #f1f2f5 0%, #e1e3e8 50%, #f1f2f5 100%)",
    backgroundSize: "200% 100%",
  },

  // Floating Action Button
  fab: {
    position: "fixed",
    zIndex: 9990,
    borderRadius: RADIUS.full,
    boxShadow: SHADOWS.floating,
    cursor: "pointer",
  },
};

export default STYLES;
