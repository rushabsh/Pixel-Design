"use client";

import React, { useState, useEffect } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="button"
      aria-label="Back to Top"
      className="back-to-top-btn"
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9990,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        backgroundColor: isHovered ? "#22222a" : "rgba(15, 15, 20, 0.88)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: isHovered
          ? "1px solid rgba(255, 255, 255, 0.35)"
          : "1px solid rgba(255, 255, 255, 0.18)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: isHovered
          ? "0 10px 30px rgba(0, 0, 0, 0.5)"
          : "0 6px 20px rgba(0, 0, 0, 0.35)",
        transition:
          "opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s, border-color 0.2s",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isHovered
            ? "translateY(-3px) scale(1.08)"
            : "translateY(0) scale(1)"
          : "translateY(16px) scale(0.8)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

