"use client";

import React, { useState } from "react";

const FAQ_DATA = [
  {
    question: "What digital services does Pixel Engineers offer?",
    answer:
      "Pixel Engineers provides six core end-to-end digital services: Mobile App Development (iOS & Android with React Native and native code), Creative Design Solutions (UI/UX design systems, prototyping, and brand identity in Figma), Modern Web Development (Next.js, React, Node.js, and headless CMS), Data-Driven Digital Marketing (technical SEO, PPC advertising, and conversion rate optimization), Custom Enterprise Software Development (SaaS platforms, ERP/CRM systems, and scalable APIs), and Strategic IT Consulting (cloud architecture on AWS/GCP, DevOps CI/CD automation, and cybersecurity).",
  },
  {
    question: "Which modern technologies and tech stacks do you specialize in?",
    answer:
      "Our engineering team specializes in industry-leading modern technologies: Next.js, React, React Native, TypeScript, Node.js, Express, Python, PostgreSQL, MongoDB, GraphQL, REST APIs, AWS, Google Cloud Platform (GCP), Docker, and Figma for design systems. We engineer with clean code standards, modular architectures, and 99.9% uptime reliability.",
  },
  {
    question:
      "How does Pixel Engineers optimize websites for speed and low-bandwidth connections?",
    answer:
      "We apply state-of-the-art web performance and Core Web Vitals optimization techniques: modern next-gen image compression (AVIF and WebP), responsive image srcsets, native lazy loading for off-screen images and media, video stream preload controls, aggressive HTTP cache-control headers, Gzip/Brotli compression, font display swapping, and lightweight code splitting that enable lightning-fast load times even on slow 2G/3G mobile networks.",
  },
  {
    question:
      "Does Pixel Engineers collaborate with international clients remotely?",
    answer:
      "Yes, Pixel Engineers is a globally capable digital agency. We partner with startups, scaleups, and enterprise businesses across the United States, United Kingdom, Canada, Australia, Europe, and worldwide with transparent remote delivery, agile sprints, and real-time collaboration across multiple time zones.",
  },
  {
    question: "What is your project development and delivery workflow?",
    answer:
      "Our proven 4-stage engineering methodology includes: 1) Discover & Define — analyzing business goals, user journeys, and technical architecture; 2) Design & Prototype — crafting interactive Figma UI/UX prototypes and design systems; 3) Develop & Test — modular full-stack development, automated CI/CD testing, and performance optimization; and 4) Launch & Scale — deployment with continuous monitoring, analytics tracking, and ongoing growth support.",
  },
  {
    question:
      "How do I get started or request a proposal from Pixel Engineers?",
    answer:
      "You can click 'Start a Project' anywhere on our website or submit your requirements on our Contact page. Our technical leadership team will analyze your project scope, schedule a discovery consultation, and deliver an actionable roadmap and proposal within 24–48 business hours.",
  },
];

export default function FAQ({
  title = "Frequently Asked Questions",
  subtitle = "Direct answers to the most common questions regarding our engineering services, technology stack, project delivery, and performance standards.",
  badge = "AEO & Search Q&A",
  items = FAQ_DATA,
} = {}) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "80px 0 100px 0",
        borderTop: "1px solid #f0f0f0",
        background: "#ffffff",
      }}
    >
      <div className="container">
        <div style={{ margin: "0 auto" }}>
          <div className="reviews_reviews_left__MinhT">
            <h3 className="title_title___3dKt">—— FAQ</h3>
            <br />
          </div>
          <h2
            className="about_about_head_title__zA_xo"
            style={{ margin: "0 0 16px 0", fontSize: "clamp(32px, 4vw, 48px)" }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: "#666",
              margin: "0 0 44px 0",
            }}
          >
            {subtitle}
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: isOpen
                      ? "0 8px 24px rgba(0, 0, 0, 0.05)"
                      : "none",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: "100%",
                      padding: "22px 26px",
                      background: isOpen ? "#f9fafb" : "#ffffff",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: isOpen ? "#111827" : "#1f2937",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      style={{
                        fontSize: "22px",
                        lineHeight: 1,
                        color: isOpen ? "#2ca8fe" : "#9ca3af",
                        transition: "transform 0.25s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div
                      style={{
                        padding: "0 26px 22px 26px",
                        background: "#f9fafb",
                        fontSize: "15.5px",
                        lineHeight: 1.65,
                        color: "#4b5563",
                      }}
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
