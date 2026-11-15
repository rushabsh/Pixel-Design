"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";

const portfolioItems = [
  {
    id: 1,
    title: "SaaS - Website Design",
    description: "",
    type: "video",
    src: "/images/Saas-web.avif",
  },
  {
    id: 2,
    title: "Mobile Application",
    description: "",
    type: "image",
    src: "/images/RevUpBikes.avif",
  },
  {
    id: 4,
    title: "Agriculture Landing Page",
    description: "",
    type: "image",
    src: "/images/GreenGlobe.avif",
  },
  {
    id: 5,
    title: "Networking Landing Page",
    description: "",
    type: "video",
    src: "/images/Network.avif",
    objectPosition: "center 25%",
  },
  {
    id: 3,
    title: "Real Estate Landing Page",
    description: "",
    type: "video",
    src: "/images/RealEstate.avif",
    objectPosition: "center 25%",
  },
  {
    id: 6,
    title: "Application Development",
    description: "",
    type: "image",
    src: "/images/MobileAppsUI.avif",
  },
];

// Custom hook implementing the exact AWSMD vertical parallax physics on scroll
function usePortfolioParallax(forward = 1) {
  const cardRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!cardRef.current) return;
          const el = cardRef.current;
          const parent = el.parentElement;
          if (!parent) return;

          // Parallax applies on desktop / tablet (>= 768px)
          if (window.innerWidth < 768) {
            el.style.transform = "translate3d(0px, 0px, 0px)";
            ticking = false;
            return;
          }

          const offsetMagnitude = window.innerWidth <= 900 ? 75 : 150;
          const rect = parent.getBoundingClientRect();
          const centerY = rect.top + parent.offsetHeight / 2;
          const totalH = parent.offsetHeight + parent.offsetHeight / 2;
          let ratio = (centerY - window.innerHeight / 2) / totalH;

          if (ratio > 1) ratio = 1;
          if (ratio < -1) ratio = -1;

          const offset = offsetMagnitude * ratio * forward;
          el.style.transform = `translate3d(0px, ${offset.toFixed(2)}px, 0px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [forward]);

  return cardRef;
}

// Portfolio Card Item Component
function PortfolioCard({ item, forward, onOpenModal }) {
  const parallaxRef = usePortfolioParallax(forward);

  return (
    <div className="portfolio-works_portfolio_list_col__8wzEm">
      <div
        className="portfolio-item_item__iw_3C"
        ref={parallaxRef}
        onClick={onOpenModal}
      >
        <div className="portfolio-item_item_image__FYejF">
          {item.type === "video" ? (
            <div className="portfolio-video_video___rhtB">
              <video
                src={item.src}
                autoPlay
                loop
                playsInline
                muted
                preload="none"
                style={{ objectPosition: item.objectPosition || "center" }}
              />
            </div>
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>

        {/* Hover Aura Gradient */}
        <span className="portfolio-item_item_gradient__nkpb_"></span>

        {/* Info Capsule */}
        <div className="portfolio-item_item_info__KFT_6">
          <div className="portfolio-item_item_expand__BoIQW">
            <h3 className="portfolio-item_item_title__Ddlbj">{item.title}</h3>
            {item.description && (
              <p className="portfolio-item_item_subtitle__vKq0q">
                {item.description}
              </p>
            )}
          </div>
          <div className="portfolio-item_item_linkBtn__sStvs">
            <svg
              viewBox="0 0 19 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.09375 6.229H17.4467M17.4467 6.229L12.4467 1.229M17.4467 6.229L12.4467 11.229"
                data-stroke="true"
                stroke="#000"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { toggleForm } = useApp();

  // Pairs of 2 items per row matching AWSMD row-based layout
  const rows = [
    [portfolioItems[0], portfolioItems[1]],
    [portfolioItems[2], portfolioItems[3]],
    [portfolioItems[4], portfolioItems[5]],
  ];

  return (
    <section className="portfolio_portfolio__rTluk" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <header className="portfolio_portfolio_head__JnOMp">
          <div className="portfolio_portfolio_head_left">
            <h3 className="title_title___3dKt">03 — Our Portfolio</h3>
            <div className="fill-text_text__mO2i_ portfolio_portfolio_head_fillText__LsO7B">
              <p>
                Our user-centered design encourages productivity and boosts
                revenue.
              </p>
            </div>
          </div>
          <div className="portfolio_portfolio_head_right__Ine_O">
            <h2 className="portfolio_portfolio_head_title__WnjzS">
              We don't do cookie-cutter solutions
            </h2>
            <div className="portfolio_portfolio_head_controls__7PkBc">
              <button
                className="portfolio_portfolio_head_scheduleBtn__J941_"
                onClick={() => toggleForm(true)}
                type="button"
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        </header>

        {/* 6 Portfolio Showcase Cards with Alternating Parallax */}
        <ul className="portfolio-works_portfolio_list__JIK9V portfolio_portfolio_list__062x6">
          {rows.map((row, rowIdx) => (
            <li
              className="portfolio-works_portfolio_list_item__hu8_r"
              key={rowIdx}
            >
              {row.map((item, colIdx) => {
                // Alternating forward direction (+1 or -1) creates floating counter-motion
                const forward = (colIdx + rowIdx) % 2 === 0 ? -1 : 1;
                return (
                  <PortfolioCard
                    key={item.id}
                    item={item}
                    forward={forward}
                    onOpenModal={() => toggleForm(true)}
                  />
                );
              })}
            </li>
          ))}
        </ul>

        {/* Mobile Check Full Portfolio Button */}
        <button
          className="portfolio_portfolio_mobile_checkBtn__nLRLe"
          onClick={() => toggleForm(true)}
          type="button"
        >
          Check Full Portfolio
        </button>
      </div>
    </section>
  );
}
