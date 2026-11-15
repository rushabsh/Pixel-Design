import React from "react";

export default function HeroSkeleton() {
  return (
    <section className="hero_hero__g4i5s" id="hero-skeleton" style={{ background: "#060609" }} aria-hidden="true">
      <div
        className="hero-background_back__4MnO3"
        style={{
          background: "#08080c",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "16px 24px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Shimmer Overlay */}
        <div
          className="skeleton-shimmer-dark"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.6,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Top Header Placeholder */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ width: "150px", height: "32px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)" }} />
          <div style={{ width: "280px", height: "42px", borderRadius: "9999px", background: "rgba(255, 255, 255, 0.06)" }} />
          <div style={{ width: "120px", height: "42px", borderRadius: "9999px", background: "rgba(255, 255, 255, 0.08)" }} />
        </div>

        {/* Center / Ambient 3D Line Grid Preview */}
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "40px 0" }}>
          <div style={{ width: "260px", height: "18px", borderRadius: "6px", background: "rgba(255, 255, 255, 0.06)", marginBottom: "24px" }} />
          <div style={{ width: "70%", maxWidth: "620px", height: "72px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.12)", marginBottom: "16px" }} />
          <div style={{ width: "85%", maxWidth: "780px", height: "72px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.09)", marginBottom: "32px" }} />
          
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)" }} />
            <div style={{ width: "200px", height: "32px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.08)" }} />
          </div>
        </div>

        {/* Bottom Nav / Controls */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "flex-end", gap: "24px" }}>
          <div style={{ width: "90px", height: "18px", borderRadius: "4px", background: "rgba(255, 255, 255, 0.06)" }} />
          <div style={{ width: "110px", height: "18px", borderRadius: "4px", background: "rgba(255, 255, 255, 0.06)" }} />
          <div style={{ width: "90px", height: "18px", borderRadius: "4px", background: "rgba(255, 255, 255, 0.06)" }} />
        </div>
      </div>
    </section>
  );
}

