/**
 * Pixel Engineers Centralized Design System — Transitions & Motion
 * Unified curves and durations matching Lenis and AWSMD UI motion curves.
 */

export const TRANSITIONS = {
  // Durations
  duration: {
    fast: "150ms",
    base: "200ms",
    normal: "300ms",
    slow: "500ms",
    curtain: "600ms",
    smoothScroll: "1200ms",
  },

  // Easing Functions
  easing: {
    default: "cubic-bezier(0.16, 1, 0.3, 1)", // Natural deceleration
    easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
    easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)", // Curtains & rolling transitions
    smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    linear: "linear",
  },

  // Pre-composed transition presets
  presets: {
    hover: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
    transform: "transform 300ms cubic-bezier(0.16, 1, 0.3, 1)",
    fade: "opacity 300ms cubic-bezier(0.16, 1, 0.3, 1)",
    overlay: "opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), visibility 600ms",
    color: "background-color 200ms ease, color 200ms ease, border-color 200ms ease",
  },
};

export default TRANSITIONS;
