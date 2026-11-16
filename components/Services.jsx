"use client";

import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="services_services__6fE9H" id="services">
      <div className="container">
        <h3 className="title_title___3dKt">01 — Our Services</h3>
        <div className="fill-text_text__mO2i_ services_services_subtext__Fi5ij">
          <p>
            As a tight-knit team of experts, we create memorable and emotional
            websites, digital experiences, native apps and many more.
          </p>
        </div>

        <ul className="services_services_list__t3JEd">
          {/* Service 1 */}
          <li className="services_services_list_item__MAD4_">
            <a
              href="#services"
              className="services-item_service__PQmRI"
              style={{ backgroundColor: "#E4E3DF", position: "relative" }}
            >
              <Image
                alt="background"
                className="services-item_service_img__w1TdE cls-img"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                src="/images/mobileapp.webp"
              />
              <div className="services-item_service_container__Dx0k0">
                <h2 className="services-item_service_title__a8ZZn">
                  Mobile App Development <br />
                </h2>
                <p
                  className="services-item_service_text__LncZ8"
                  data-text="true"
                >
                  Many years of expertise in mobile development allow us to
                  design architecture and create bespoke native applications for
                  Apple iOS and Google Android.
                </p>
                <ul className="services-item_service_tags__p_OYM">
                  <li className="services-item_service_tags_item__bh3Dt">
                    Swift
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    React Native
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    FlutterJS
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    Kotlin
                  </li>
                </ul>
              </div>
            </a>
          </li>

          {/* Service 2 */}
          <li className="services_services_list_item__MAD4_">
            <a
              href="#services"
              className="services-item_service__PQmRI"
              style={{ backgroundColor: "#F1AE86", position: "relative" }}
            >
              <Image
                alt="background"
                className="services-item_service_img__w1TdE cls-img"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                src="/images/development.webp"
              />
              <div className="services-item_service_container__Dx0k0">
                <h2 className="services-item_service_title__a8ZZn">
                  Solid Design Solutions <br />
                </h2>
                <p
                  className="services-item_service_text__LncZ8"
                  data-text="true"
                >
                  We're driven by user‑centered design that drives productivity
                  and increases revenue. Our expertise and ingenuity are
                  remarkable, yet we always strive to outdo and outperform our
                  previous achievements.
                </p>
                <ul className="services-item_service_tags__p_OYM">
                  <li className="services-item_service_tags_item__bh3Dt">
                    Figma
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    Adobe AfterEffects
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    Adobe Illustrator
                  </li>
                </ul>
              </div>
            </a>
          </li>

          {/* Service 3 */}
          <li className="services_services_list_item__MAD4_">
            <a
              href="#services"
              className="services-item_service__PQmRI"
              style={{ backgroundColor: "#90A6D0", position: "relative" }}
            >
              <Image
                alt="background"
                className="services-item_service_img__w1TdE cls-img"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
                src="/images/webdevelopment.webp"
              />
              <div className="services-item_service_container__Dx0k0">
                <h2 className="services-item_service_title__a8ZZn">
                  Web <br /> Development <br />
                </h2>
                <p
                  className="services-item_service_text__LncZ8"
                  data-text="true"
                >
                  Our adaptive design components are built using perfectly
                  structured and readable code. We make sure that the
                  development solutions are well-optimized and work flawlessly
                  across devices and browsers.
                </p>
                <ul className="services-item_service_tags__p_OYM">
                  <li className="services-item_service_tags_item__bh3Dt">
                    ReactJS
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    VueJS
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    NodeJS
                  </li>
                  <li className="services-item_service_tags_item__bh3Dt">
                    Webflow
                  </li>
                </ul>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
