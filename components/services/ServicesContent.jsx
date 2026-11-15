"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../PageHero";
import WorkTogether from "../WorkTogether";
import Banner from "../Banner";
import FAQ from "../FAQ";
import { useApp } from "@/context/AppContext";

export default function ServicesContent() {
  const { toggleForm } = useApp();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.scrollTo(el);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className="services-page-root"
      style={{ width: "100%", background: "#fff", color: "#000" }}
    >
      {/* ============ HERO SECTION ============ */}
      <PageHero
        titleLine1="WE BUILD"
        titleLine2="AWESOME"
        titleLine3="PRODUCTS"
        tagline="Memorable websites, digital experiences and mobile apps, designed and engineered by one team."
        scrollToId="overview"
      />

      {/* ============ BIG TYPE HEADLINE ============ */}
      <section
        style={{
          padding: "56px 0 20px 0",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: " Inter",
              fontSize: "clamp(64px, 11vw, 160px)",
              lineHeight: 1,
              fontWeight: 700,
              color: "#2ca8fe",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Data driven design.
          </h2>
        </div>
      </section>

      {/* ============ 01 — OUR SERVICES OVERVIEW ============ */}
      <section id="overview" style={{ padding: "40px 0 96px 0" }}>
        <div className="container">
          <h3 className="title_title___3dKt">01 — Our Services</h3>
          <h2
            className="about_about_head_title__zA_xo"
            style={{ margin: "24px 0 16px 0", maxWidth: "980px" }}
          >
            Data-Driven Design. Technology-Driven Growth.
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.65,
              color: "#555",
              maxWidth: "840px",
              margin: "0 0 48px 0",
            }}
          >
            We&apos;re a team of creative thinkers, designers, and software
            engineers. We create memorable digital experiences, innovative
            applications, and scalable software solutions that help businesses
            move forward.
          </p>

          {/* 6 Service Cards */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <button
              type="button"
              onClick={() => scrollToSection("mobile")}
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                height: "380px",
                borderRadius: "24px",
                padding: "28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage:
                  "linear-gradient(180deg, rgba(14, 27, 77, 0.15) 0%, rgba(14, 27, 77, 0.85) 100%), url('/images/mobile.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#ffffff",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                overflow: "hidden",
                transition:
                  "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(138, 162, 255, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "13px", opacity: 0.9, fontWeight: 600 }}>
                01 — MOBILE APP DEVELOPMENT
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Mobile App Development
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.9,
                    marginTop: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  Intuitive Android and iOS applications built for seamless user
                  experiences and business growth. →
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("design")}
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                height: "380px",
                borderRadius: "24px",
                padding: "28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage:
                  "linear-gradient(180deg, rgba(58, 21, 0, 0.15) 0%, rgba(58, 21, 0, 0.85) 100%), url('/images/shift.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#ffffff",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                overflow: "hidden",
                transition:
                  "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(255, 154, 90, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "13px", opacity: 0.9, fontWeight: 600 }}>
                02 — CREATIVE DESIGN
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Creative Design Solutions
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.9,
                    marginTop: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  Human-centered UI/UX and visual experiences that make your
                  digital products stand out. →
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("web")}
              style={{
                flex: "1 1 320px",
                minWidth: 0,
                height: "380px",
                borderRadius: "24px",
                padding: "28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundImage:
                  "linear-gradient(180deg, rgba(34, 16, 77, 0.15) 0%, rgba(34, 16, 77, 0.85) 100%), url('/images/webdev.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#ffffff",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                overflow: "hidden",
                transition:
                  "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.55s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(167, 139, 250, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "13px", opacity: 0.9, fontWeight: 600 }}>
                03 — WEB DEVELOPMENT
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "Inter",
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Web Development
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    opacity: 0.9,
                    marginTop: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  Fast, scalable websites and applications designed to perform,
                  engage, and grow. →
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ============ 02 — DETAIL: MOBILE ============ */}
      <section
        id="mobile"
        style={{ padding: "80px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <h3 className="title_title___3dKt">02 — Mobile App Development</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              marginTop: "28px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0 }}
              >
                Apps That People Open Every Day.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "20px",
                  maxWidth: "540px",
                }}
              >
                We design and develop mobile applications that simplify everyday
                experiences, connect businesses with customers, and turn ideas
                into powerful digital products.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "12px",
                  maxWidth: "540px",
                }}
              >
                From intuitive interfaces to seamless functionality, we build
                applications that users enjoy using.
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 16px",
                  marginTop: "24px",
                }}
              >
                {[
                  "Native iOS & Android Architecture",
                  "Cross-Platform Apps (React Native & Flutter)",
                  "High-Performance Mobile UI/UX Design",
                  "Offline-First Storage & Local Database Sync",
                  "Push Notifications & Real-Time Messaging",
                  "App Store & Google Play Submission",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#65a30d",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "#f7fee7",
                  borderLeft: "3px solid #84cc16",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#4d7c0f",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ PERFORMANCE IMPACT
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginTop: "6px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  Average 99.8% crash-free user sessions, sub-second launch
                  times, and 4.8+ app store ratings.
                </div>
              </div>

              {/* Tags / Tech Stack */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#888",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  TECH STACK:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    React Native
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Android
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    iOS
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    API Integration
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Mobile UI/UX
                  </span>
                </div>
              </div>
              <div style={{ marginTop: "32px" }}>
                <button
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                  type="button"
                  onClick={() => toggleForm(true)}
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Start a Project</span>
                    <span>Start a Project</span>
                  </span>
                  <span className="button_button_icon__mgDpM" data-class="icon">
                    <span
                      className="button_button_circle__94IGi"
                      data-circle="true"
                    ></span>
                    <svg
                      className="button_button_icon_arrow__sBRHC"
                      data-class="arrow-2"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H12M12 6L7 1M12 6L7 11"
                        data-stroke="true"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span
                      className="button_button_svgs__XrFT4"
                      data-class="arrow"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H12M12 6L7 1M12 6L7 11"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Visual Media Container */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                height: "460px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src="/images/mobiledev.avif"
                alt="Mobile App Development"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 03 — DETAIL: DESIGN ============ */}
      <section
        id="design"
        style={{ padding: "80px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <h3 className="title_title___3dKt">03 — Creative Design Solutions</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              marginTop: "28px",
              alignItems: "center",
            }}
          >
            {/* Visual Media Container */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                height: "460px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src="/images/CreativeDesignSolutions.avif"
                alt="Creative Design Solutions"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0 }}
              >
                Design Built on How Users Really Behave.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "20px",
                  maxWidth: "540px",
                }}
              >
                Great design starts with understanding people. We combine user
                research, creative thinking, and intuitive interfaces to create
                digital experiences that feel natural, engaging, and effortless.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "12px",
                  maxWidth: "540px",
                }}
              >
                Every interaction is thoughtfully designed to improve usability
                and build stronger connections with your audience.
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 16px",
                  marginTop: "24px",
                }}
              >
                {[
                  "User Journey & Behavioral UX Research",
                  "Interactive Wireframing & Rapid Prototyping",
                  "Scalable Multi-Brand Design Systems",
                  "Usability Testing & Conversion Flow Optimization",
                  "Visual Brand Identity & Asset Design",
                  "Responsive Web & Mobile Interface Design",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#ea580c",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "#fff7ed",
                  borderLeft: "3px solid #f97316",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#c2410c",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ DESIGN PERFORMANCE IMPACT
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginTop: "6px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  Average 68% boost in user task completion speed and 2.4x
                  increase in product session engagement.
                </div>
              </div>

              {/* Tags / Design Capabilities */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#888",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  DESIGN CAPABILITIES:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    UI/UX Research
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Wireframing
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Design Systems
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Figma
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Prototyping
                  </span>
                </div>
              </div>
              <div style={{ marginTop: "32px" }}>
                <button
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                  type="button"
                  onClick={() => toggleForm(true)}
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Start a Project</span>
                    <span>Start a Project</span>
                  </span>
                  <span className="button_button_icon__mgDpM" data-class="icon">
                    <span
                      className="button_button_circle__94IGi"
                      data-circle="true"
                    ></span>
                    <svg
                      className="button_button_icon_arrow__sBRHC"
                      data-class="arrow-2"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H12M12 6L7 1M12 6L7 11"
                        data-stroke="true"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span
                      className="button_button_svgs__XrFT4"
                      data-class="arrow"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H12M12 6L7 1M12 6L7 11"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 04 — DETAIL: WEB ============ */}
      <section
        id="web"
        style={{ padding: "80px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <h3 className="title_title___3dKt">04 — Web Development</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              marginTop: "28px",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0 }}
              >
                Websites and Platforms That Scale With You.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "20px",
                  maxWidth: "540px",
                }}
              >
                We build modern, responsive, and high-performing websites that
                help businesses establish credibility and grow online.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "12px",
                  maxWidth: "540px",
                }}
              >
                From corporate websites and eCommerce platforms to custom web
                applications, our solutions combine clean development, seamless
                functionality, and scalable architecture.
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 16px",
                  marginTop: "24px",
                }}
              >
                {[
                  "Full-Stack Next.js & React Architecture",
                  "High-Converting Corporate & Marketing Sites",
                  "Scalable eCommerce Solutions (WooCommerce & Shopify)",
                  "Headless CMS & Dynamic Database Integration",
                  "Core Web Vitals & Technical SEO Optimization",
                  "Enterprise API Connectivity & Custom Portals",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#6d4fe0",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "#f5f3ff",
                  borderLeft: "3px solid #6d4fe0",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#6d4fe0",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ SPEED &amp; SCALE IMPACT
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginTop: "6px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  Average sub-second load times, 95+ Google PageSpeed score, and
                  99.9% platform availability.
                </div>
              </div>

              {/* Tags / Tech Stack */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#888",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  TECH STACK:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    React.js
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Next.js
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    WordPress
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    Node.js
                  </span>
                  <span
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "8px 18px",
                      fontSize: "13px",
                      background: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    WooCommerce
                  </span>
                </div>
              </div>
              <div style={{ marginTop: "32px" }}>
                <button
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                  type="button"
                  onClick={() => toggleForm(true)}
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Start a Project</span>
                    <span>Start a Project</span>
                  </span>
                  <span className="button_button_icon__mgDpM" data-class="icon">
                    <span
                      className="button_button_circle__94IGi"
                      data-circle="true"
                    ></span>
                    <svg
                      className="button_button_icon_arrow__sBRHC"
                      data-class="arrow-2"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H12M12 6L7 1M12 6L7 11"
                        data-stroke="true"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span
                      className="button_button_svgs__XrFT4"
                      data-class="arrow"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H12M12 6L7 1M12 6L7 11"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>

            {/* Visual Media Container */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                height: "460px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src="/images/WebDevelopement.avif"
                alt="Web Development"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 05 — DETAIL: DIGITAL MARKETING ============ */}
      <section
        id="marketing"
        style={{ padding: "80px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <h3 className="title_title___3dKt">
            05 — Digital Marketing Services
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              marginTop: "28px",
              alignItems: "center",
            }}
          >
            {/* Visual Media Container */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                height: "460px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src="/images/DigitalMarketingServices.avif"
                alt="Digital Marketing Services"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Text (Right) */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0 }}
              >
                Data-driven marketing strategies to increase visibility.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "20px",
                  maxWidth: "540px",
                }}
              >
                We help brands reach the right audience with creative campaigns,
                optimized funnels, and measurable revenue outcomes.
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 16px",
                  marginTop: "24px",
                }}
              >
                {[
                  "Search Engine Optimization (SEO & Local)",
                  "Paid Advertising (Google, Meta & LinkedIn)",
                  "Social Media Marketing & Brand Reach",
                  "Content Marketing & Inbound Strategy",
                  "Conversion Rate Optimization (CRO & Funnels)",
                  "Performance Analytics & ROI Attribution",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#059669",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "#f0fdf4",
                  borderLeft: "3px solid #10b981",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#059669",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ PROVEN IMPACT
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginTop: "6px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  Average 3.4x Return on Ad Spend (ROAS) and +140% organic
                  search visibility within 90 days.
                </div>
              </div>

              {/* Tags / Key Deliverables */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#888",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  KEY DELIVERABLES:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {[
                    "Technical SEO Audits",
                    "PPC Campaign Management",
                    "High-Converting Copywriting",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        border: "1px solid #d4d4dc",
                        borderRadius: "999px",
                        padding: "8px 18px",
                        fontSize: "13px",
                        background: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/contact"
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                  style={{ textDecoration: "none", display: "inline-flex" }}
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Explore Marketing</span>
                    <span>Explore Marketing</span>
                  </span>
                  <span className="button_button_icon__mgDpM" data-class="icon">
                    <span
                      className="button_button_circle__94IGi"
                      data-circle="true"
                    ></span>
                    <svg
                      className="button_button_icon_arrow__sBRHC"
                      data-class="arrow-2"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H12M12 6L7 1M12 6L7 11"
                        data-stroke="true"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span
                      className="button_button_svgs__XrFT4"
                      data-class="arrow"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H12M12 6L7 1M12 6L7 11"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 06 — DETAIL: SOFTWARE DEVELOPMENT ============ */}
      <section
        id="software"
        style={{ padding: "80px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <h3 className="title_title___3dKt">
            06 — Software Development Services
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              marginTop: "28px",
              alignItems: "center",
            }}
          >
            {/* Content Text (Left) */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0 }}
              >
                Build powerful, scalable and custom digital solutions.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "20px",
                  maxWidth: "540px",
                }}
              >
                From innovative web applications to enterprise systems, we turn
                complex requirements into high-performance products built to
                scale.
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 16px",
                  marginTop: "24px",
                }}
              >
                {[
                  "Custom Full-Stack Web Applications",
                  "CRM, ERP & Business Management Systems",
                  "Multi-Tenant SaaS Architecture & Platforms",
                  "Native & Cross-Platform Mobile Apps",
                  "RESTful & GraphQL API Integration",
                  "Workflow Automation & Third-Party Sync",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#6d4fe0",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "#f5f3ff",
                  borderLeft: "3px solid #7c3aed",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#7c3aed",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ ENGINEERING EXCELLENCE
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginTop: "6px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  Engineered with 99.9% uptime reliability, modular clean-code
                  standards, and enterprise data security.
                </div>
              </div>

              {/* Tags / Tech Stack */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#888",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  TECH STACK:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {[
                    "Next.js & React",
                    "Node.js / Express",
                    "PostgreSQL & MongoDB",
                    "AWS & Docker",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        border: "1px solid #d4d4dc",
                        borderRadius: "999px",
                        padding: "8px 18px",
                        fontSize: "13px",
                        background: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/contact"
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                  style={{ textDecoration: "none", display: "inline-flex" }}
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Explore Development</span>
                    <span>Explore Development</span>
                  </span>
                  <span className="button_button_icon__mgDpM" data-class="icon">
                    <span
                      className="button_button_circle__94IGi"
                      data-circle="true"
                    ></span>
                    <svg
                      className="button_button_icon_arrow__sBRHC"
                      data-class="arrow-2"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H12M12 6L7 1M12 6L7 11"
                        data-stroke="true"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span
                      className="button_button_svgs__XrFT4"
                      data-class="arrow"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H12M12 6L7 1M12 6L7 11"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            {/* Visual Media Container */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                height: "460px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src="/images/SoftwareDevelopmentServices.avif"
                alt="Software Development Services"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 07 — DETAIL: IT CONSULTING ============ */}
      <section
        id="consulting"
        style={{ padding: "80px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <h3 className="title_title___3dKt">07 — IT Consulting Services</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "60px",
              marginTop: "28px",
              alignItems: "center",
            }}
          >
            {/* Visual Media Container */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                height: "460px",
                borderRadius: "28px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Image
                src="/images/ConsultingServices.avif"
                alt="IT Consulting Services"
                fill
                loading="lazy"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content Text (Right) */}
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0 }}
              >
                Strategic technical guidance and modern infrastructure
                solutions.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "#666",
                  marginTop: "20px",
                  maxWidth: "540px",
                }}
              >
                We analyze, plan and implement the right technology stack to
                eliminate bottlenecks, cut operating overhead, and help you grow
                efficiently.
              </p>

              {/* Capabilities List */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "10px 16px",
                  marginTop: "24px",
                }}
              >
                {[
                  "Enterprise Technology Roadmap & Strategy",
                  "Digital Transformation & Legacy Modernization",
                  "Cloud Migration & Cost Optimization (AWS/GCP)",
                  "Cybersecurity Audits & Data Governance",
                  "DevOps Automation & CI/CD Pipelines",
                  "24/7 Managed Infrastructure Support & SLA",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14.5px",
                      color: "#222",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#0284c7",
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Callout */}
              <div
                style={{
                  marginTop: "24px",
                  padding: "16px 20px",
                  background: "#f0f9ff",
                  borderLeft: "3px solid #0284c7",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    color: "#0369a1",
                    textTransform: "uppercase",
                  }}
                >
                  ✦ ADVISORY IMPACT
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#374151",
                    marginTop: "6px",
                    lineHeight: 1.55,
                    fontWeight: 500,
                  }}
                >
                  Average 35% reduction in cloud infrastructure spend and zero
                  unplanned downtime across client deployments.
                </div>
              </div>

              {/* Tags / Core Advisory */}
              <div style={{ marginTop: "24px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#888",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}
                >
                  CORE ADVISORY:
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {[
                    "Cloud Infrastructure",
                    "DevOps CI/CD",
                    "Disaster Recovery",
                    "Security & Compliance",
                  ].map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        border: "1px solid #d4d4dc",
                        borderRadius: "999px",
                        padding: "8px 18px",
                        fontSize: "13px",
                        background: "#fff",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/contact"
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                  style={{ textDecoration: "none", display: "inline-flex" }}
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Explore Consulting</span>
                    <span>Explore Consulting</span>
                  </span>
                  <span className="button_button_icon__mgDpM" data-class="icon">
                    <span
                      className="button_button_circle__94IGi"
                      data-circle="true"
                    ></span>
                    <svg
                      className="button_button_icon_arrow__sBRHC"
                      data-class="arrow-2"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6H12M12 6L7 1M12 6L7 11"
                        data-stroke="true"
                        strokeWidth="1.5"
                      ></path>
                    </svg>
                    <span
                      className="button_button_svgs__XrFT4"
                      data-class="arrow"
                    >
                      <svg
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6H12M12 6L7 1M12 6L7 11"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DARK: {SMART} DEVELOPMENT ============ */}
      <WorkTogether
        tag="{SMART}"
        title="DEVELOPMENT"
        description="Making your business outstanding is a science. We take it (a) seriously and (b) creatively."
        cards={[
          {
            step: "Agile",
            title: "Scrum & lean practices",
            description:
              "Predictable delivery cadences with continuous priority alignment.",
          },
          {
            step: "Speed",
            title: "Short, visible sprints",
            description:
              "Working builds each cycle, so feedback lands while it still matters.",
          },
          {
            step: "Retention",
            title: "Built for the end user",
            description:
              "We study behavior and refine flows to improve retention.",
          },
          {
            step: "Growth",
            title: "Tested, then scaled",
            description:
              "A/B testing and insights keep the product improving after launch.",
          },
        ]}
      />

      {/* ============ 05 — PROCESS: FROM FIRST CALL TO LAUNCH ============ */}
      <section style={{ padding: "96px 0" }}>
        <div className="container">
          <h3 className="title_title___3dKt">05 — How a Project Runs</h3>
          <h2
            className="about_about_head_title__zA_xo"
            style={{ margin: "24px 0 48px" }}
          >
            From first call to launch
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {/* Step 1 */}
            <div
              style={{
                flex: "1 1 220px",
                minWidth: 0,
                borderTop: "2px solid #111111",
                paddingTop: "20px",
              }}
            >
              <div style={{ fontSize: "13px", color: "#777", fontWeight: 600 }}>
                Step 1
              </div>
              <div
                style={{ fontSize: "22px", fontWeight: 600, marginTop: "8px" }}
              >
                Discover
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.55,
                  marginTop: "10px",
                }}
              >
                Goals, users and data. We agree on what success means.
              </div>
            </div>

            {/* Step 2 */}
            <div
              style={{
                flex: "1 1 220px",
                minWidth: 0,
                borderTop: "2px solid #111111",
                paddingTop: "20px",
              }}
            >
              <div style={{ fontSize: "13px", color: "#777", fontWeight: 600 }}>
                Step 2
              </div>
              <div
                style={{ fontSize: "22px", fontWeight: 600, marginTop: "8px" }}
              >
                Design
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.55,
                  marginTop: "10px",
                }}
              >
                Flows, interfaces and prototypes you can click through early.
              </div>
            </div>

            {/* Step 3 */}
            <div
              style={{
                flex: "1 1 220px",
                minWidth: 0,
                borderTop: "2px solid #111111",
                paddingTop: "20px",
              }}
            >
              <div style={{ fontSize: "13px", color: "#777", fontWeight: 600 }}>
                Step 3
              </div>
              <div
                style={{ fontSize: "22px", fontWeight: 600, marginTop: "8px" }}
              >
                Build
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.55,
                  marginTop: "10px",
                }}
              >
                Engineering in agile sprints with regular demos.
              </div>
            </div>

            {/* Step 4 */}
            <div
              style={{
                flex: "1 1 220px",
                minWidth: 0,
                borderTop: "2px solid #6d4fe0",
                paddingTop: "20px",
              }}
            >
              <div
                style={{ fontSize: "13px", color: "#6d4fe0", fontWeight: 600 }}
              >
                Step 4
              </div>
              <div
                style={{ fontSize: "22px", fontWeight: 600, marginTop: "8px" }}
              >
                Launch &amp; grow
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: 1.55,
                  marginTop: "10px",
                }}
              >
                Release, measure, test and keep improving.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FREQUENTLY ASKED QUESTIONS (AEO & SEARCH ENGINE OPTIMIZATION) ============ */}
      <FAQ />

      {/* ============ NUMBERS DON'T LIE BANNER (HOMEPAGE COMPONENT) ============ */}
      <Banner />
    </div>
  );
}
