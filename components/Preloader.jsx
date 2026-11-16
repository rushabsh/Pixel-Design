"use client";

import React, { useState, useEffect } from "react";
import LatticeLoader from "./LatticeLoader";

export default function Preloader() {
  const [status, setStatus] = useState("working");
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const handleAssetsLoaded = () => {
      setTimeout(() => {
        if (!isMounted) return;
        setStatus("done");

        setTimeout(() => {
          if (!isMounted) return;
          setFadeOut(true);
          setTimeout(() => {
            if (!isMounted) return;
            setVisible(false);
          }, 600);
        }, 500);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleAssetsLoaded();
    } else {
      window.addEventListener("load", handleAssetsLoaded, { once: true });
    }

    const fallbackTimer = setTimeout(handleAssetsLoaded, 3500);

    return () => {
      isMounted = false;
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
