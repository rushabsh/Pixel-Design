"use client";

import React from "react";

const defaultCards = [
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
];

export default function WorkTogether({
  tag = "{HOW WE}",
  title = "WORK TOGETHER",
  breakLine = true,
  stars = null,
  description = "Making your business outstanding is a science. We take it (a) seriously and (b) creatively.",
  cards = defaultCards,
  id,
  className = "",
  style = {},
}) {
  const cardList = cards && cards.length > 0 ? cards : defaultCards;

  const handleMouseEnter = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(145deg, #6d4fe0 0%, #a78bfa 100%)";
    e.currentTarget.style.borderColor = "transparent";
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow =
      "0 20px 45px rgba(109, 79, 224, 0.3)";

    e.currentTarget
      .querySelectorAll(".process-text")
      .forEach((el) => {
        el.style.color = "#ffffff";
      });
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.background = "#13131c";
    e.currentTarget.style.borderColor = "#23232f";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 0 rgba(109, 79, 224, 0)";

    e.currentTarget
      .querySelectorAll(".process-text")
      .forEach((el, i) => {
        el.style.color =
          i === 0 ? "#8b7cff" : i === 1 ? "#ffffff" : "#9a9aa8";
      });
  };

  return (
    <section
      className={`development_dev__ZUMqF ${className}`.trim()}
      id={id}
      style={{ minHeight: "auto", padding: "100px 0", ...style }}
    >
      <div className="container development_dev_container__GvCfx">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            width: "100%",
          }}
        >
          <h2
            className="dev-content_dev_title__nwp5r"
            style={{
              margin: 0,
              flex: "1 1 60%",
              minWidth: "300px",
              display: stars ? "inline-flex" : undefined,
              alignItems: stars ? "center" : undefined,
              gap: stars ? "16px" : undefined,
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(36px, 5.5vw, 84px)",
                lineHeight: 1.1,
                color: "#fff",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                whiteSpace: breakLine ? undefined : "nowrap",
              }}
            >
              {tag && (
                <>
                  {tag}
                  {breakLine ? <br /> : " "}
                </>
              )}
              {title}
            </span>

            {stars && (
              <span
                className="dev-content_dev_title_stars__qdKOg"
                style={{
                  fontSize: "clamp(48px, 6vw, 100px)",
                  lineHeight: 1,
                }}
              >
                {stars === true ? "**" : stars}
              </span>
            )}
          </h2>

          {description && (
            <p
              className="dev-content_dev_text__3EkeN"
              style={{
                margin: 0,
                flex: "1 1 30%",
                maxWidth: "400px",
                color: "#fff",
                fontSize: "16px",
                lineHeight: 1.45,
                textAlign: "left",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {/* Process Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "64px",
          }}
        >
          {cardList.map((card, index) => {
            const stepValue =
              card.step || card.tag || card.number || `0${index + 1}`;
            const descValue = card.description || card.text || "";

            return (
              <div
                key={index}
                style={{
                  flex: "1 1 240px",
                  minWidth: 0,
                  background: "#13131c",
                  border: "1px solid #23232f",
                  borderRadius: "24px",
                  padding: "28px",
                  boxSizing: "border-box",
                  minHeight: "260px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition:
                    "background 0.65s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.5s ease, transform 0.65s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.65s ease",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="process-text"
                  style={{
                    fontSize: "13px",
                    color: "#8b7cff",
                    fontWeight: 600,
                    transition: "color 0.5s ease",
                  }}
                >
                  {stepValue}
                </div>

                <div>
                  <div
                    className="process-text"
                    style={{
                      fontSize: "24px",
                      fontWeight: 600,
                      color: "#fff",
                      transition: "color 0.5s ease",
                    }}
                  >
                    {card.title}
                  </div>

                  {descValue && (
                    <div
                      className="process-text"
                      style={{
                        fontSize: "14px",
                        color: "#9a9aa8",
                        marginTop: "10px",
                        lineHeight: 1.55,
                        transition: "color 0.5s ease",
                      }}
                    >
                      {descValue}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

