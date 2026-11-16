"use client";

import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="banner_banner__ZW5Te" id="banner">
      <div className="container banner_banner_container__rPstf">
        <div className="banner_banner_display__79tyY" data-class="container">
          {/* Animated Marquee Outline Blocks */}
          <div className="marquee_marquee__ZFB97 banner_banner_marquee__XK98s">
            <div className="marquee_marquee_wrapper__OPxaX">
              <div className="marquee_marquee_item__kBXsQ">
                <div className="marquee_marquee_repeater__Yd3f3">
                  <span className="banner_banner_marquee_block___LF_T">
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
              <div className="marquee_marquee_item__kBXsQ">
                <div className="marquee_marquee_repeater__Yd3f3">
                  <span className="banner_banner_marquee_block___LF_T">
                    <span></span>
                    <span></span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Heading */}
          <h2 className="banner_banner_title__UKeo3" data-class="title">
            <span>Great Software Isn't</span>
            <span>
              Just Built
              <Image
                src="/images/MintGreen.avif"
                alt="texture"
                width={238}
                height={90}
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />
            </span>
            <span>
              <Image
                src="/images/WhiteDrums.avif"
                alt="texture"
                width={238}
                height={90}
                style={{ display: "inline-block", verticalAlign: "middle" }}
              />{" "}
              It's Engineered
            </span>
            <span>for Growth</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
