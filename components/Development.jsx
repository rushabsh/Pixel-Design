"use client";

import React from "react";
import Image from "next/image";
import Ballpit from "./Ballpit";
import { useApp } from "@/context/AppContext";

export default function Development() {
  const { toggleForm } = useApp();

  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="development_dev__ZUMqF" id="development">
      {/* SVG Background Line */}
      <div className="dev-line_line__aWpS_">
        <svg
          className="dev-line_line_svg__lTEBS"
          viewBox="0 0 1728 1101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"></path>
        </svg>
      </div>

      <div
        className="development_contentbox__UjoNa"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Marquee Header */}
        <div
          className="marquee_marquee__ZFB97 development_dev_marquee__bRhyK"
          style={{ pointerEvents: "none" }}
        >
          <div className="marquee_marquee_wrapper__OPxaX">
            <div
              className="marquee_marquee_item__kBXsQ"
              style={{
                animation: "marquee_toRight__MlZ3a 20s linear infinite",
                willChange: "transform",
              }}
            >
              <div className="marquee_marquee_repeater__Yd3f3">
                <p
                  className="development_dev_marquee_text__oxpfZ"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Data driven user focused value based
                </p>
              </div>
            </div>
            <div
              className="marquee_marquee_item__kBXsQ"
              style={{
                animation: "marquee_toRight__MlZ3a 20s linear infinite",
                willChange: "transform",
              }}
            >
              <div className="marquee_marquee_repeater__Yd3f3">
                <p
                  className="development_dev_marquee_text__oxpfZ"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Data driven user focused value based
                </p>
              </div>
            </div>
            <div
              className="marquee_marquee_item__kBXsQ"
              style={{
                animation: "marquee_toRight__MlZ3a 20s linear infinite",
                willChange: "transform",
              }}
            >
              <div className="marquee_marquee_repeater__Yd3f3">
                <p
                  className="development_dev_marquee_text__oxpfZ"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Data driven user focused value based
                </p>
              </div>
            </div>
            <div
              className="marquee_marquee_item__kBXsQ"
              style={{
                animation: "marquee_toRight__MlZ3a 20s linear infinite",
                willChange: "transform",
              }}
            >
              <div className="marquee_marquee_repeater__Yd3f3">
                <p
                  className="development_dev_marquee_text__oxpfZ"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Data driven user focused value based
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Headline */}
        <div className="container development_dev_container__GvCfx">
          <div className="dev-content_dev_content__EguIn">
            <h2 className="dev-content_dev_title__nwp5r">
              <span className="dev-content_dev_title_sd__B29dd">
                {"{SMART}"} DEVELOPMENT
              </span>
              <span className="dev-content_dev_title_stars__qdKOg">**</span>
            </h2>
            <div className="dev-content_dev_bottom__wIerq">
              <p className="dev-content_dev_text__3EkeN">
                Making your business outstanding is a science. We take it (a)
                seriously and (b) creatively.
              </p>
              <div className="dev-content_dev_controls__wP5T_">
                <button
                  className="dev-content_dev_btn_white__xEXo0"
                  onClick={scrollToPortfolio}
                  type="button"
                >
                  Check Our Portfolio
                </button>
                <button
                  className="dev-content_dev_btn_gray__6rVLp"
                  onClick={() => toggleForm(true)}
                  type="button"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Phones Artwork */}
      <div
        className="development_dev_phones__imyxO"
        style={{ pointerEvents: "none", zIndex: 3 }}
      >
        <Image
          alt="phone-left"
          className="development_dev_phones_left__bMCN4"
          fill
          sizes="50vw"
          style={{
            objectFit: "contain",
          }}
          src="/images/RevUpBikesMockup.avif"
        />
        <Image
          alt="phone-right"
          className="development_dev_phones_right__HDoTA"
          fill
          sizes="50vw"
          style={{
            objectFit: "contain",
          }}
          src="/images/RevUpBike.avif"
        />
      </div>

      {/* Component inspired by Kevin Levron: https://x.com/soju22/status/1858925191671271801 */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "600px",
          width: "100%",
          marginTop: "-140px",
          zIndex: 1,
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 120px, black calc(100% - 60px), transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 120px, black calc(100% - 60px), transparent 100%)",
        }}
      >
        <Ballpit
          count={200}
          colors={["#ffffff"]}
          material="satin"
          gravity={0}
          drift={0.4}
          followCursor
          grab
          clickEffect="burst"
          minSize={0.5}
          maxSize={1}
          friction={0.9975}
          wallBounce={0.95}
          bounce={0.85}
          depth={2}
          cursorSize={1}
          lightColor="#eab308"
          lightIntensity={1}
          exposure={1}
          shadows={0.6}
          intro
        />
      </div>
    </section>
  );
}
