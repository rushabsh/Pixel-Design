"use client";

import React, { useState } from "react";
import Link from "next/link";
import PageHero from "../PageHero";
import WorkTogether from "../WorkTogether";
import Testimonials from "../Testimonials";
import FAQ from "../FAQ";
import { useApp } from "@/context/AppContext";

export default function ContactContent() {
  const { toggleForm } = useApp();
  const [selectedInterest, setSelectedInterest] = useState(
    "Mobile app development",
  );
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    "Mobile app development",
    "Design solutions",
    "Web development",
    "Something else",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email) {
      alert("Please enter your name and email.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div
      className="contact-page-root"
      style={{ width: "100%", background: "#fff", color: "#000" }}
    >
      {/* ============ HERO SECTION ============ */}
      <PageHero
        titleLine1="BUILDING"
        titleLine2="SOMETHING"
        titleLine3="GREAT"
        tagline="Feel free to reach out if you want to collaborate with us, or simply want to chat."
        scrollToId="contact-form"
      />

      {/* ============ 01 — GET IN TOUCH / FORM + DETAILS ============ */}
      <section id="contact-form" style={{ padding: "80px 0 100px 0" }}>
        <div className="container">
          <h3 className="title_title___3dKt">01 — Get in Touch</h3>
          <h2
            className="about_about_head_title__zA_xo"
            style={{ margin: "20px 0 50px 0", maxWidth: "780px" }}
          >
            We would love to hear from you.
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              alignItems: "flex-start",
            }}
          >
            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              style={{
                flex: "3 1 540px",
                minWidth: 0,
                background: "#f4f4f6",
                borderRadius: "28px",
                padding: "36px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: "#666",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Full name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "52px",
                      border: "1px solid #d9d9e0",
                      borderRadius: "14px",
                      background: "#ffffff",
                      padding: "0 16px",
                      fontSize: "15px",
                      outline: "none",
                    }}
                  />
                </div>

                <div style={{ flex: "1 1 220px", minWidth: 0 }}>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontSize: "13px",
                      color: "#666",
                      marginBottom: "8px",
                      fontWeight: 500,
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      height: "52px",
                      border: "1px solid #d9d9e0",
                      borderRadius: "14px",
                      background: "#ffffff",
                      padding: "0 16px",
                      fontSize: "15px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Interest Selection Pills */}
              <div
                style={{
                  marginTop: "24px",
                  fontSize: "13px",
                  color: "#666",
                  fontWeight: 500,
                }}
              >
                I&apos;m interested in
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "10px",
                }}
              >
                {interestOptions.map((opt) => {
                  const isSelected = selectedInterest === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedInterest(opt)}
                      style={{
                        background: isSelected ? "#000000" : "#ffffff",
                        color: isSelected ? "#ffffff" : "#111111",
                        border: isSelected
                          ? "1px solid #000000"
                          : "1px solid #d9d9e0",
                        borderRadius: "999px",
                        padding: "10px 18px",
                        fontSize: "13px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {/* Project Details Textarea */}
              <div style={{ marginTop: "24px" }}>
                <label
                  htmlFor="msg"
                  style={{
                    display: "block",
                    fontSize: "13px",
                    color: "#666",
                    marginBottom: "8px",
                    fontWeight: 500,
                  }}
                >
                  Tell us about your project
                </label>
                <textarea
                  id="msg"
                  placeholder="What are you building, and what does success look like?"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    height: "150px",
                    border: "1px solid #d9d9e0",
                    borderRadius: "14px",
                    background: "#ffffff",
                    padding: "16px",
                    fontSize: "15px",
                    resize: "vertical",
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Action Row */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "16px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "24px",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    color: "#777",
                    maxWidth: "300px",
                    lineHeight: 1.5,
                  }}
                >
                  {submitted ? (
                    <span style={{ color: "#16a34a", fontWeight: 600 }}>
                      Message sent! We will reply shortly.
                    </span>
                  ) : (
                    "We reply to every message, usually within 24 hours."
                  )}
                </span>

                <button
                  type="submit"
                  className="button_button__aZ_6A button_button_dark__eR8z9 button_button_arrow__F1hNQ"
                >
                  <span className="button_button_text__yxufZ" data-class="text">
                    <span>Send Message</span>
                    <span>Send Message</span>
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
            </form>

            {/* Details Column */}
            <div
              style={{
                flex: "2 1 320px",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Email Card */}
              <div
                style={{
                  background:
                    "linear-gradient(160deg, #e3d9ff 0%, #a78bfa 100%)",
                  borderRadius: "24px",
                  padding: "28px",
                  boxSizing: "border-box",
                  color: "#22104d",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{ fontSize: "13px", opacity: 0.75, fontWeight: 600 }}
                >
                  Email us
                </div>
                <div
                  style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    marginTop: "8px",
                  }}
                >
                  info@pixelengineers.com
                </div>
              </div>

              {/* Address Card */}
              <div
                style={{
                  background: "#f4f4f6",
                  borderRadius: "24px",
                  padding: "28px",
                  boxSizing: "border-box",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{ fontSize: "13px", color: "#777", fontWeight: 600 }}
                >
                  Visit us
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    marginTop: "8px",
                    lineHeight: 1.4,
                  }}
                >
                  Global Digital Agency &amp; Engineering Studio
                </div>
              </div>

              {/* Call Us Card */}
              <div
                style={{
                  background: "#e9f9a8",
                  borderRadius: "24px",
                  padding: "28px",
                  boxSizing: "border-box",
                  color: "#3d4a00",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-4px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{ fontSize: "13px", opacity: 0.75, fontWeight: 600 }}
                >
                  Call us
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 500,
                    marginTop: "8px",
                  }}
                >
                  +91 7303018407 / 9561981002
                </div>
              </div>

              {/* Follow Us Card */}
              <div
                style={{
                  background: "#f4f4f6",
                  borderRadius: "24px",
                  padding: "28px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    color: "#777",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  Follow us
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "10px 16px",
                      fontSize: "13px",
                      background: "#ffffff",
                      color: "#111111",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: "1px solid #d4d4dc",
                      borderRadius: "999px",
                      padding: "10px 16px",
                      fontSize: "13px",
                      background: "#ffffff",
                      color: "#111111",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ DARK: {WHAT'S} NEXT ============ */}
      <WorkTogether
        tag="{WHAT'S}"
        title="NEXT"
        breakLine={false}
        stars="**"
        description={null}
        cards={[
          {
            step: "01",
            title: "We read your message",
            description:
              "A real person reviews it and replies with questions or next steps.",
          },
          {
            step: "02",
            title: "We set up a call",
            description:
              "A short conversation about your goals, users and timeline.",
          },
          {
            step: "03",
            title: "We send a proposal",
            description: "Scope, approach and a plan to start building.",
          },
        ]}
      />

      {/* ============ 02 — TESTIMONIALS (HOMEPAGE COMPONENT) ============ */}
      <Testimonials />

      {/* ============ FREQUENTLY ASKED QUESTIONS (AEO & SEARCH ENGINE OPTIMIZATION) ============ */}
      <FAQ />
    </div>
  );
}
