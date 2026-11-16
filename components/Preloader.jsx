"use client";

import React, { useState, useEffect } from "react";
import LatticeLoader from "./LatticeLoader";

export default function Preloader() {
  const [status, setStatus] = useState("working");
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let current = 0;

    const timer = setInterval(() => {
      if (!isMounted) return;
      if (current < 90) {
        const inc = Math.max(1, Math.round((90 - current) * 0.12));
        current = Math.min(90, current + inc);
        setProgress(current);
      }
    }, 35);

    const handleAssetsLoaded = () => {
      clearInterval(timer);
      const finishTimer = setInterval(() => {
        if (!isMounted) return;
        current += 4;
        if (current >= 100) {
          current = 100;
          setProgress(100);
          clearInterval(finishTimer);
          setStatus("done");

          setTimeout(() => {
            if (!isMounted) return;
            setFadeOut(true);
            setTimeout(() => {
              if (!isMounted) return;
              setVisible(false);
            }, 600);
          }, 450);
        } else {
          setProgress(current);
        }
      }, 15);
    };

    if (document.readyState === "complete") {
      handleAssetsLoaded();
    } else {
      window.addEventListener("load", handleAssetsLoaded, { once: true });
    }

    const fallbackTimer = setTimeout(handleAssetsLoaded, 3000);

    return () => {
      isMounted = false;
      clearInterval(timer);
      window.removeEventListener("load", handleAssetsLoaded);
      clearTimeout(fallbackTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="site-preloader"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "#060609",
        color: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.6s",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "auto",
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <LatticeLoader
        status={status}
        elapsed={progress}
        label="Thinking"
        doneLabel="Done in"
        errorLabel="Failed after"
        pattern="orbit"
        grid={3}
        shape="round"
        doneColor="#22c55e"
        errorColor="#ef4444"
        cellSize={6}
        gap={2}
        fontSize={14}
        step={90}
        idleOpacity={0.15}
        glow={false}
        glowColor=""
        showTimer
        color="#f5f5f5"
      />
    </div>
  );
}
