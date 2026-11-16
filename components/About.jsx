"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";

// Exact circles configuration from original AWSMD module 18455
const circlesData = [
  {
    percent: 100,
    disabled: true,
    words: [],
    text: {
      bold: "Solid Strategy",
      paragraph:
        "Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights",
    },
  },
  {
    percent: 85.4,
    words: [
      { label: "A/B Testing", degree: 150 },
      { label: "Growth", degree: 225, main: true },
      { label: "Experiments", degree: 265 },
      { label: "Optimization", degree: 300 },
    ],
    text: {
      bold: "Using agile data analysis",
      paragraph:
        "Using agile data analysis supported by data science, our process has proven to deliver constant business growth",
    },
  },
  {
    percent: 68.14,
    words: [
      { label: "Development", degree: 140 },
      { label: "Visual Design", degree: 175 },
      { label: "Insights", degree: 225, main: true },
      { label: "User Experience", degree: 265 },
      { label: "Innovations", degree: 290 },
    ],
    text: {
      bold: "Ideas have to be manifested,",
      paragraph:
        "Ideas have to be manifested, tested and proven to work. Continued experiments are one of our key drivers",
    },
  },
  {
    percent: 42,
    words: [
      { label: "Product", degree: 45, main: true },
      { label: "Data Science", degree: 130 },
      { label: "UX Research", degree: 205 },
      { label: "UX Strategy", degree: 270 },
    ],
    text: {
      bold: "Solid Strategy",
      paragraph:
        "Solid Strategy aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights",
    },
  },
];

const stats = [
  {
    video: "/media/volchek-color.mp4",
    title: "+300",
    text: "We have successfully completed a total of 300+ projects",
  },
  {
    video: "/media/pruzina-color.mp4",
    title: "100K",
    text: "We’ve gathered dozens of reviews from the clients and + 100k reviews from their users",
  },
  {
    video: "/media/time-color.mp4",
    title: "+10",
    text: "Years of experience",
  },
  {
    video: "/media/ball-color.mp4",
    title: "+280",
    text: "Team members all over the world",
  },
];

const partners = [
  { name: "uber", src: "/images/uber.391ab754.svg" },
  { name: "oracle", src: "/images/oracle.f6c579b2.svg" },
  { name: "gofundme", src: "/images/gofundme.d15a4c9e.svg" },
  { name: "nutanix", src: "/images/nutanix.76cbb1b9.svg" },
  { name: "upside", src: "/images/upside.3fc33722.svg" },
  { name: "intel", src: "/images/intel.0d9f9c40.svg" },
  { name: "new-balance", src: "/images/new-balance.9bcd089f.svg" },
  { name: "statefarm", src: "/images/statefarm.91373514.svg" },
  { name: "crosslead", src: "/images/crosslead.2cd4c2e3.png" },
  { name: "voldis", src: "/images/voldis.21ec3317.png" },
];

// Helper to compute (top, right) percentage coordinates on circle circumference
function getPointCoord(degree) {
  const rad = (degree * Math.PI) / 180;
  // radius = 50%
  const sin = 50 * Math.sin(rad);
  const cos = 50 * Math.cos(rad);
  const x = 50 - sin;
  const y = 50 - cos;
  return { top: `${y.toFixed(2)}%`, right: `${x.toFixed(2)}%` };
}

// Single Word / Dot Node along the circle
function CirclePoint({ point, centerDegree, progress, isMobile }) {
  // Interpolate angle from centerDegree to point.degree during hover fan-out
  const currentDegree = isMobile
    ? point.degree
    : centerDegree + (point.degree - centerDegree) * progress;

  const { top, right } = getPointCoord(currentDegree);

  return (
    <p
      className={`about-circle-point_point__QSQD7 about-circle_circle_point__Us3Ru ${point.main
        ? "about-circle-point_pointMain__Ub44Y about-circle_circle_pointMain__3zIYl"
        : ""
        }`}
      style={{ top, right }}
      data-label={point.label}
      data-point={point.main ? "true" : undefined}
    />
  );
}

// Interactive Concentric Circle Component
function ConcentricCircle({
  circle,
  index,
  isActive,
  onHover,
  onLeave,
  isMobile,
}) {
  const [progress, setProgress] = useState(isMobile ? 1 : 0);
  const animRef = useRef(null);

  // Geometric offset so all circles meet tangentially at 45 degrees in top-right
  const factor = 1 - Math.SQRT1_2; // 1 - (1 / √2) ≈ 0.2928932
  const offset = ((100 - circle.percent) / 2) * factor;

  const style = {
    width: `${circle.percent}%`,
    height: `${circle.percent}%`,
    top: `${offset.toFixed(3)}%`,
    right: `${offset.toFixed(3)}%`,
  };

  const mainWord = circle.words.find((w) => w.main);
  const centerDegree = mainWord ? mainWord.degree : 0;

  useEffect(() => {
    if (isMobile) {
      setProgress(1);
      return;
    }

    let startTime;
    const duration = 500; // ms

    if (isActive) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const p = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - p, 3);
        setProgress(eased);
        if (p < 1) {
          animRef.current = requestAnimationFrame(animate);
        }
      };
      animRef.current = requestAnimationFrame(animate);
    } else {
      setProgress(0);
      cancelAnimationFrame(animRef.current);
    }

    return () => cancelAnimationFrame(animRef.current);
  }, [isActive, isMobile]);

  return (
    <div
      className={`about-circle_circle__0EHtI about-graph_item__P4WQV ${circle.disabled ? "about-circle_circle_disabled" : ""
        } ${isActive ? "about-circle_circleActive__LBZXo" : ""}`}
      style={style}
      data-circle="true"
      onMouseEnter={() => {
        if (!circle.disabled) onHover(index);
      }}
      onMouseLeave={() => {
        if (!circle.disabled) onLeave();
      }}
    >
      {circle.words.map((word) => (
        <CirclePoint
          key={word.label}
          point={word}
          centerDegree={centerDegree}
          progress={progress}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

export default function About() {
  const { toggleForm } = useApp();
  const [activeCircleIndex, setActiveCircleIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentCircle = circlesData[activeCircleIndex] || circlesData[1];

  return (
    <section className="about_about__XlgJl" id="about">
      <div className="container">
        <h3 className="title_title___3dKt">02 — About Us</h3>

        <div className="about_about_head__4ZGI9">
          <h2 className="about_about_head_title__zA_xo">We Strive to Innovate</h2>
          <button
            className="button_button__aZ_6A button_button_light__M6d2_ button_button_arrow__F1hNQ about_about_head_btn__IwLFZ"
            type="button"
            onClick={() => toggleForm(true)}
          >
            <span className="button_button_text__yxufZ" data-class="text">
              <span>Become a Client</span>
              <span>Become a Client</span>
            </span>
            <span className="button_button_icon__mgDpM" data-class="icon">
              <span className="button_button_circle__94IGi" data-circle="true"></span>
              <svg
                className="button_button_icon_arrow__sBRHC"
                data-class="arrow-2"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5"></path>
              </svg>
              <span className="button_button_svgs__XrFT4" data-class="arrow">
                <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5"></path>
                </svg>
              </span>
            </span>
          </button>
        </div>

        <div className="about_about_content__H2qJ9">
          {/* Left Column: Synchronized Text & 3D Video Stats */}
          <div className="about_about_content_left__6bbCk">
            <div className="swiper about_about_swiper__WqQvP">
              <div className="swiper-wrapper">
                <div className="swiper-slide about_about_swiper_slide__21mN0">
                  <p
                    className="about_about_fillText__DBoU3"
                    data-text={currentCircle.text.bold}
                  >
                    {currentCircle.text.paragraph}
                  </p>
                </div>
              </div>
            </div>

            <h3 className="about_about_list_title__eaHUj">Some Number About Us</h3>
            <ul className="about_about_list__bNvFa">
              {stats.map((s, idx) => (
                <li className="about_about_list_item__wnM0G" key={idx}>
                  <div className="about-card_card__lHD1X">
                    <video
                      className="about-card_card_webm__71N60"
                      playsInline
                      autoPlay
                      loop
                      muted
                      preload="none"
                    >
                      <source src={s.video} type="video/mp4" />
                    </video>
                    <div className="about-card_card_container__jEZJ6">
                      <h3 className="about-card_card_title__E5QW0">{s.title}</h3>
                      <p className="about-card_card_text__559FE">{s.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Exact Concentric Circles Interactive Diagram */}
          <div className="about_about_content_right__Jr2SE">
            <div className="about-graph_circle__oCxRN">
              <div className="about-graph_box__kOXeL">
                {circlesData.map((circle, idx) => (
                  <ConcentricCircle
                    key={circle.percent}
                    circle={circle}
                    index={idx}
                    isActive={activeCircleIndex === idx}
                    onHover={(i) => setActiveCircleIndex(i)}
                    onLeave={() => setActiveCircleIndex(1)}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
