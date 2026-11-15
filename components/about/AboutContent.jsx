"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../PageHero";
import WorkTogether from "../WorkTogether";
import Banner from "../Banner";
import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import { useApp } from "@/context/AppContext";

export default function AboutContent() {
  const { toggleForm } = useApp();
  const [hoveredNode, setHoveredNode] = useState(null);

  const orbitNodes = [
    { id: "product", label: "Product", left: "77%", top: "11%" },
    { id: "opt", label: "Optimization", left: "0%", top: "46%" },
    { id: "insights", label: "Insights", left: "33%", top: "58%" },
    { id: "growth", label: "Growth", left: "38%", top: "82%" },
    { id: "ab", label: "A/B Testing", left: "76%", top: "72%" },
  ];

  return (
    <div
      className="about-page-root"
      style={{ width: "100%", background: "#fff", color: "#000" }}
    >
      {/* ============ HERO SECTION ============ */}
      <PageHero
        titleLine1="WE ARE"
        titleLine2="PIXEL"
        titleLine3="ENGINEERS"
        tagline="A tight-knit team of designers and engineers shaping digital products people remember."
        scrollToId="story"
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
              fontFamily: "Inter",
              fontSize: "clamp(64px, 11vw, 160px)",
              lineHeight: 1,
              fontWeight: 700,
              color: "#2ca8fe",
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Design meets data
          </h2>
        </div>
      </section>

      {/* ============ 01 — OUR STORY ============ */}
      <section id="story" style={{ padding: "40px 0 96px 0" }}>
        <div className="container">
          <h3 className="title_title___3dKt">01 — Our Story</h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "48px",
              marginTop: "28px",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: "1 1 540px", minWidth: 0 }}>
              <h2
                className="about_about_head_title__zA_xo"
                style={{ margin: 0, maxWidth: "680px" }}
              >
                We started with a simple belief: great products are built when
                design and engineering sit at the same table.
              </h2>
            </div>

            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontSize: "16px",
                lineHeight: 1.65,
                color: "#666",
              }}
            >
              <p style={{ margin: 0 }}>
                Pixel Engineers is a digital agency and software development
                company focused on building meaningful digital experiences. We
                combine creative thinking, modern technologies, and data-driven
                strategies to help businesses establish a strong digital
                presence and achieve measurable growth.
              </p>
              <p style={{ margin: 0 }}>
                From designing high-performing websites to developing scalable
                software and mobile applications, we turn complex business
                challenges into simple, effective digital solutions.
              </p>
              <p style={{ margin: 0 }}>
                Our approach goes beyond writing code or creating attractive
                designs. We focus on understanding your business, your audience,
                and your goals to build solutions that deliver long-term value.
              </p>
            </div>
          </div>

          {/* 3 Story Cards with Vivid Gradients */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "56px",
            }}
          >
            {/* Card 1 */}

            <div
              style={{
                position: "relative",
                flex: "1 1 320px",
                minWidth: 0,
                height: "360px",
                borderRadius: "24px",
                padding: "28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                color: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              {/* Full Card Background Image */}
              <img
                src="/images/mission.avif"
                alt="Pixel Engineers digital development"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Gradient Overlay for Text Readability */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 45%, transparent 75%)",
                }}
              />

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    opacity: 0.85,
                    fontWeight: 600,
                  }}
                >
                  Our Mission
                </div>

                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    marginTop: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  Turning Ideas Into Digital Excellence.
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                position: "relative",
                flex: "1 1 320px",
                minWidth: 0,
                height: "360px",
                borderRadius: "24px",
                padding: "28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                color: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              {/* Full Background Image */}
              <img
                src="/images/vision.avif"
                alt="Pixel Engineers vision"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Dark Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    fontSize: "13px",
                    opacity: 0.85,
                    fontWeight: 600,
                  }}
                >
                  Our Vision
                </div>

                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    marginTop: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  Building a Smarter, More Connected Digital Future.
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                position: "relative",
                flex: "1 1 320px",
                minWidth: 0,
                height: "360px",
                borderRadius: "24px",
                padding: "28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                overflow: "hidden",
                color: "#fff",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
              {/* Full Background Image */}
              <img
                src="/images/value.avif"
                alt="Pixel Engineers core values"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)",
                }}
              />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2 }}>
                <div
                  style={{
                    fontSize: "13px",
                    opacity: 0.85,
                    fontWeight: 600,
                  }}
                >
                  Our Core Values
                </div>

                <div
                  style={{
                    fontSize: "26px",
                    fontWeight: 600,
                    marginTop: "8px",
                    lineHeight: 1.2,
                  }}
                >
                  The Principles That Drive Everything We Do.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 02 — BY THE NUMBERS / WE STRIVE TO INNOVATE ============ */}
      <section
        id="numbers"
        style={{ padding: "80px 0 96px 0", borderTop: "1px solid #f0f0f0" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="title_title___3dKt" style={{ margin: 0 }}>
              02 — By the Numbers
            </h3>
            <button
              type="button"
              onClick={() => toggleForm(true)}
              style={{
                background: "#f2f2f5",
                fontSize: "14px",
                fontWeight: 500,
                padding: "12px 24px",
                borderRadius: "999px",
                border: "none",
                color: "#111",
                cursor: "pointer",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e5e5ea";
                e.currentTarget.style.transform = "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f2f2f5";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Become a Client ↗
            </button>
          </div>

          <h2
            className="about_about_head_title__zA_xo"
            style={{
              fontSize: "clamp(36px, 4.5vw, 64px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              color: "#000",
              marginTop: "20px",
              marginBottom: "48px",
              lineHeight: 1.08,
            }}
          >
            We Strive to Innovate
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "48px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left 2x2 Grid of Cards */}
            <div style={{ flex: "1 1 480px", minWidth: 0, maxWidth: "600px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "20px",
                }}
              >
                {/* Card 1 */}
                <div
                  style={{
                    background: "#f4f4f6",
                    borderRadius: "24px",
                    padding: "32px",
                    boxSizing: "border-box",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(40px, 4vw, 56px)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#000",
                      lineHeight: 1,
                    }}
                  >
                    +300
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.5,
                      marginTop: "28px",
                      maxWidth: "200px",
                    }}
                  >
                    Projects delivered for clients across industries.
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  style={{
                    background: "#f4f4f6",
                    borderRadius: "24px",
                    padding: "32px",
                    boxSizing: "border-box",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(40px, 4vw, 56px)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#000",
                      lineHeight: 1,
                    }}
                  >
                    100K
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.5,
                      marginTop: "28px",
                      maxWidth: "200px",
                    }}
                  >
                    Users reached by the products we have shipped.
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  style={{
                    background: "#f4f4f6",
                    borderRadius: "24px",
                    padding: "32px",
                    boxSizing: "border-box",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(40px, 4vw, 56px)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#000",
                      lineHeight: 1,
                    }}
                  >
                    +10
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      lineHeight: 1.5,
                      marginTop: "28px",
                      maxWidth: "200px",
                    }}
                  >
                    Years of experience in digital product design.
                  </div>
                </div>

                {/* Card 4 */}
                <div
                  style={{
                    background: "#e8fba6",
                    borderRadius: "24px",
                    padding: "32px",
                    boxSizing: "border-box",
                    minHeight: "220px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(182, 224, 42, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(40px, 4vw, 56px)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: "#000",
                      lineHeight: 1,
                    }}
                  >
                    +280
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#2f3e00",
                      lineHeight: 1.5,
                      marginTop: "28px",
                      maxWidth: "200px",
                    }}
                  >
                    Happy clients who keep coming back.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Concentric Orbit Diagram */}
            <div
              style={{
                flex: "1 1 420px",
                minWidth: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "min(100%, 460px)",
                  aspectRatio: "1/1",
                }}
              >
                {/* 3 Concentric Circles */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "1px solid #e5e5ea",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "16%",
                    borderRadius: "50%",
                    border: "1px solid #e5e5ea",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: "31%",
                    borderRadius: "50%",
                    border: "1px solid #e5e5ea",
                  }}
                />

                {/* Orbit Nodes */}
                {orbitNodes.map((node) => {
                  const isHovered = hoveredNode === node.id;
                  return (
                    <div
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      style={{
                        position: "absolute",
                        left: node.left,
                        top: node.top,
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        transform: "translate(-4px, -4px)",
                        cursor: "pointer",
                        zIndex: 5,
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <span
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#5b4fe8",
                          display: "inline-block",
                          flexShrink: 0,
                          boxShadow: isHovered ? "0 0 10px #5b4fe8" : "none",
                          transform: isHovered ? "scale(1.3)" : "scale(1)",
                          transition: "all 0.2s ease",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: isHovered ? 600 : 500,
                          color: isHovered ? "#5b4fe8" : "#444",
                          whiteSpace: "nowrap",
                          transition: "color 0.2s ease",
                        }}
                      >
                        {node.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DARK: {HOW WE} WORK TOGETHER ============ */}
      <WorkTogether
        tag="{HOW WE}"
        title="WORK TOGETHER"
        description="Making your business outstanding is a science. We take it (a) seriously and (b) creatively."
        cards={[
          {
            step: "01",
            title: "Discover",
            description:
              "We study your users, data and goals before drawing a single screen.",
          },
          {
            step: "02",
            title: "Design",
            description:
              "Interfaces and systems shaped around real behavior, tested early.",
          },
          {
            step: "03",
            title: "Build",
            description:
              "Agile sprints with working builds every cycle, no surprises at the end.",
          },
          {
            step: "04",
            title: "Grow",
            description:
              "We measure, test and iterate so the product keeps improving after launch.",
          },
        ]}
      />

      {/* ============ NUMBERS DON'T LIE BANNER (HOMEPAGE COMPONENT) ============ */}
      <Banner />

      {/* ============ 04 — WHAT OUR CLIENTS SAY (HOMEPAGE COMPONENT) ============ */}
      <Testimonials />

      {/* ============ FREQUENTLY ASKED QUESTIONS (AEO & SEARCH ENGINE OPTIMIZATION) ============ */}
      <FAQ />
    </div>
  );
}
