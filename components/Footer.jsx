"use client";

import React from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

const PixelLogo = ({ style }) => (
  <svg
    style={style}
    viewBox="0 0 64 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.1331 4.33625C30.2458 2.40903 33.0275 2.40903 34.1402 4.33626L43.3041 20.2086C44.4168 22.1358 43.0259 24.5449 40.8006 24.5449H22.4728C20.2474 24.5449 18.8565 22.1358 19.9692 20.2086L29.1331 4.33625Z"
      fill="#fff"
    />
    <path
      d="M7.82907 40.9516L0.875632 52.5406C0.49027 53.1829 0.952913 54 1.70192 54H10.9087C11.2472 54 11.5608 53.8224 11.735 53.5322L21.2147 37.7326C21.6001 37.0903 21.1374 36.2732 20.3884 36.2732H16.092C12.7072 36.2732 9.57054 38.0491 7.82907 40.9516Z"
      fill="#ececec"
    />
    <path
      d="M32.4429 36.7281L27.3684 44.8915C26.9693 45.5334 27.4309 46.3639 28.1867 46.3639H46.348C46.6938 46.3639 47.013 46.5491 47.1846 46.8494L50.9932 53.5145C51.1648 53.8147 51.4841 54 51.8299 54H62.0914C62.8452 54 63.3072 53.1734 62.9121 52.5314L55.7291 40.8591C53.9753 38.0092 50.8686 36.2732 47.5224 36.2732H33.2613C32.9282 36.2732 32.6188 36.4452 32.4429 36.7281Z"
      fill="#fff"
    />
  </svg>
);

export default function Footer() {
  const { toggleForm } = useApp();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      style={{
        width: "100%",
        padding: "0 clamp(16px, 2.5vw, 32px) clamp(16px, 2.5vw, 32px)",
        boxSizing: "border-box",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1680px",
          margin: "0 auto",
          backgroundColor: "#f4f4f6",
          borderRadius: "32px",
          padding:
            "clamp(36px, 5vw, 64px) clamp(28px, 4.5vw, 64px) clamp(24px, 3.5vw, 36px)",
          boxSizing: "border-box",
        }}
      >
        {/* Main Footer Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "48px",
          }}
        >
          {/* Left Column: Brand & Hero Message */}
          <div style={{ flex: "1 1 380px", maxWidth: "560px", minWidth: 0 }}>
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                color: "#000",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/images/PixelLogo.webp"
                  alt="Pixel Engineers Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Link>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(36px, 4.2vw, 54px)",
                fontWeight: 700,
                color: "#000",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: "28px 0 16px 0",
              }}
            >
              We would love to hear from you.
            </h2>

            {/* Subtext */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                color: "#666",
                lineHeight: 1.55,
                margin: "0 0 32px 0",
                maxWidth: "420px",
              }}
            >
              Feel free to reach out if you want to collaborate with us, or
              simply want to chat.
            </p>

            {/* Button */}
            <button
              type="button"
              onClick={() => toggleForm(true)}
              style={{
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "13px 26px",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "background-color 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2b2b2e";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#111";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Become a Client</span>
              <span style={{ fontSize: "15px", lineHeight: 1 }}>↗</span>
            </button>
          </div>

          {/* Right Columns: Links & Info */}
          <div
            style={{
              flex: "1 1 480px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "36px",
            }}
          >
            {/* Col 1: Email & Address */}
            <div style={{ minWidth: "160px", flex: "1 1 140px" }}>
              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#8e8e93",
                    marginBottom: "8px",
                  }}
                >
                  Our Email
                </div>
                <a
                  href="mailto:info@pixelengineers.com"
                  style={{
                    fontSize: "14px",
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 400,
                    wordBreak: "break-all",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  }
                >
                  info@pixelengineers.com
                </a>
              </div>

              <div style={{ marginBottom: "28px" }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#8e8e93",
                    marginBottom: "8px",
                  }}
                >
                  Phone Number
                </div>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#111",
                    textDecoration: "none",
                    fontWeight: 400,
                    wordBreak: "break-all",
                  }}
                >
                  +91 7303018407/ 9561981002
                </p>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#8e8e93",
                    marginBottom: "8px",
                  }}
                >
                  Our Address
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#111",
                    lineHeight: 1.55,
                    maxWidth: "220px",
                  }}
                >
                  San Francisco, CA 2 Embarcadero Center, 8 floor, 94111
                </div>
              </div>
            </div>

            {/* Col 2: Follow Us */}
            <div style={{ minWidth: "120px", flex: "1 1 110px" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#8e8e93",
                  marginBottom: "12px",
                }}
              >
                Follow Us
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div style={{ minWidth: "150px", flex: "1 1 140px" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#8e8e93",
                  marginBottom: "12px",
                }}
              >
                Services
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <li>
                  <Link
                    href="/services"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    Mobile development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    Web development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    UI/UX design solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    Creative Design Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#666")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                  >
                    Digital Marketing Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            marginTop: "clamp(36px, 5vw, 56px)",
            paddingTop: "20px",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "#8e8e93",
              margin: 0,
            }}
          >
            Pixel Engineers, 2026. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            type="button"
            style={{
              background: "none",
              border: "none",
              padding: 0,
              fontSize: "13px",
              fontWeight: 500,
              color: "#8e8e93",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#111")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8e8e93")}
          >
            Back to the top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
