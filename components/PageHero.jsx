"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Topography from "./Topography";

export default function PageHero({
  titleLine1 = "We create",
  titleLine2 = "Awesome",
  tagline,
  titleLine3,
  scrollToId,
  videoSrc = "/media/hero.mp4",
  poster = "/images/hero_poster.jpg",
}) {
  const pathname = usePathname();

  const scrollToSection = (id) => {
    if (!id) return;
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
    <section className="hero_hero__g4i5s" id="hero" style={{ background: "#060609" }}>
      <div className="hero-background_back__4MnO3" style={{ background: "#08080c" }}>
        {/* Topography 3D Interactive Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            background: "#08080c",
          }}
        >
          <Topography
            color="#ffffff"
            lineCount={24}
            lineWidth={1.2}
            elevation={1}
            foreground={0.2}
            tilt={32}
            speed={0.25}
            direction="forward"
            glow={0.8}
            depthOfField={0.4}
            fog={0.35}
            hoverEffect="lift"
            clickEffect="pulse"
            majorLines
            scale={1}
            detail={0.35}
            morph={0.2}
            brightness={1.1}
            markers="none"
            glitch={0}
            opacity={1}
            mouseInteraction
            mouseRadius={1}
            mouseStrength={0.6}
            trail={0.3}
            parallax={0.5}
            intro
            lightMode={false}
          />
        </div>

        <div
          className="hero-background_back_children__LcnwD"
          style={{ pointerEvents: "none" }}
        >
          {/* Header */}
          <div style={{ pointerEvents: "auto", width: "100%" }}>
            <Header />
          </div>

          {/* Hero Content */}
          <div
            className="hero_hero_content__Ay_OJ"
            style={{ pointerEvents: "none" }}
          >
            {/* Hero Left */}
            <div
              className="hero_hero_left__vy0aP"
              style={{ pointerEvents: "auto" }}
            >
              <div className="hero-title_title__2pRRz">
                <h1 className="hero-title_title_create__3kJAZ">{titleLine1}</h1>
                <p className="hero-title_title_awesome__4Eh3v">
                  {scrollToId && (
                    <button
                      className="hero-scroll-button_button__tiTEa"
                      onClick={() => scrollToSection(scrollToId)}
                      type="button"
                      aria-label="Scroll down"
                    >
                      <div>
                        <svg
                          className="hero-scroll-button_button_arrow_1__tnEtl"
                          viewBox="0 0 16 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174"
                            data-stroke="true"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                        <svg
                          className="hero-scroll-button_button_arrow_2__wF5o0"
                          viewBox="0 0 16 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174"
                            data-stroke="true"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  )}
                  {typeof titleLine2 === "string" ? (
                    <>
                      <i>{titleLine2.charAt(0)}</i>
                      {titleLine2.slice(1)}
                    </>
                  ) : (
                    titleLine2
                  )}
                </p>
                {titleLine3 && (
                  <div className="typing_typing__3R3VF hero-title_title_typing__9fWtR">
                    {titleLine3}
                  </div>
                )}
              </div>

              {/* Tagline */}
              {tagline && (
                <div className="hero_hero_row__UDnIf" style={{ display: "flex", marginTop: "20px" }}>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontWeight: 400,
                      maxWidth: "480px",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {tagline}
                  </p>
                </div>
              )}

              {/* Mobile Scroll */}
              {scrollToId && (
                <div className="hero_hero_mobile_scroll__F1kmx">
                  <button
                    className="hero-scroll-button_button__tiTEa hero_hero_mobile_scrollBtn__dTflI"
                    onClick={() => scrollToSection(scrollToId)}
                    type="button"
                    aria-label="Scroll down"
                  >
                    <div>
                      <svg
                        className="hero-scroll-button_button_arrow_1__tnEtl"
                        viewBox="0 0 16 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                      <svg
                        className="hero-scroll-button_button_arrow_2__wF5o0"
                        viewBox="0 0 16 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174"
                          data-stroke="true"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                  </button>
                  <div className="hero_hero_mobile_scrollText__2sQQc"></div>
                </div>
              )}
            </div>

            {/* Hero Right Nav */}
            <div style={{ pointerEvents: "auto" }}>
              <nav className="hero_hero_nav__Caply">
                <Link
                  href="/about"
                  className="hero_hero_nav_item__NENu1"
                  style={pathname === "/about" ? { opacity: 0.4 } : {}}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className="hero_hero_nav_item__NENu1"
                  style={pathname === "/services" ? { opacity: 0.4 } : {}}
                >
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="hero_hero_nav_item__NENu1"
                  style={pathname === "/contact" ? { opacity: 0.4 } : {}}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

