"use client";

import React, { useState } from "react";
import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    name: "Lexie Ernst",
    position: "CEO",
    review:
      "Pixel Engineers is a hands-on team with applicable advice beyond design. They focus on the end-user and help improve retention. They’re committed to Agile development methods, and they look into user data and user behavior when driving new features. They excel in user experience and big-picture thinking.",
    avatar: "/images/1738483700236_bc667a0a39.jpg",
  },
  {
    id: 2,
    name: "Lucas Rossi",
    position: "CEO",
    review:
      "Since launching the website, the client has gained around 10,000 subscribers. Pixel Engineers created an appealing and bold design that the client is pleased with. The team manages the project well and delivers on time.",
    avatar: "/images/1755611490935_3289400113.jpg",
  },
  {
    id: 3,
    name: "Amina Al-Saadi",
    position: "Project Manager",
    review:
      "Pixel Engineers’ professional team achieved results that the client is pleased with. They explained everything clearly, delivered on time, and communicated effectively through email, Slack, and Zoom.",
    avatar: "/images/1754283303425_11baef8c08.jpg",
  },
  {
    id: 4,
    name: "Cindy Vincent",
    position: "Project Manager",
    review:
      "The client is delighted with Pixel Engineers' work. The new website increased traffic by 35% and brought in more leads. The Pixel Engineers team consistently met deadlines and communicated well, setting them apart. Additionally, they were highly organized and kept tasks prioritized.",
    avatar: "/images/1759257775560_250d689fdc.jpg",
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx(
      (prev) => (prev - 1 + reviewsData.length) % reviewsData.length,
    );
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const current = reviewsData[currentIdx];

  return (
    <section className="reviews_reviews__4tujv" id="reviews">
      <div className="container reviews_reviews_container__m4e05">
        {/* Left Column */}
        <div className="reviews_reviews_left__MinhT">
          <h3 className="title_title___3dKt">06 — What Our Clients Say</h3>
          <p className="reviews_reviews_text__my9B6">
            We supply clients across the entire globe with improved network
            connections.
          </p>
        </div>

        {/* Right Column / Slider */}
        <div className="reviews_reviews_right__TWz4z">
          <div>
            <ul className="reviews-slider_reviews_wrapper__88QxJ">
              <li className="reviews-slider_reviews_item__PvoX5">
                <div className="reviews-block_reviews_block__NRVmE">
                  <svg
                    className="reviews-block_reviews_blockquote__pRrYT"
                    data-class="svg"
                    viewBox="0 0 64 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.2149 20.1929C29.2149 24.4096 28.4559 28.4576 26.9379 32.3369C25.4199 36.3849 23.6489 39.6739 21.6249 42.2039C19.7696 44.7339 17.6612 47.0952 15.2999 49.2879C12.9386 51.4806 11.1676 52.9986 9.98691 53.8419C8.80624 54.6852 7.96291 55.1912 7.45691 55.3599L1.38491 49.0349L4.67391 45.4929C6.02324 43.8062 7.70991 41.1076 9.73391 37.3969C12.0952 33.5176 13.1072 30.2286 12.7699 27.5299C9.39657 27.0239 6.52924 25.5059 4.16791 22.9759C1.97524 20.2772 0.878906 17.1569 0.878906 13.6149C0.878906 10.0729 2.14391 7.03691 4.67391 4.50691C7.37257 1.97691 10.6616 0.711914 14.5409 0.711914C18.7576 0.711914 22.2152 2.4829 24.9139 6.0249C27.7812 9.5669 29.2149 14.2896 29.2149 20.1929Z"
                      data-fill="true"
                    ></path>
                    <path
                      d="M63.9431 20.1929C63.9431 24.4096 63.1841 28.4576 61.6661 32.3369C60.1481 36.3849 58.3771 39.6739 56.3531 42.2039C54.4978 44.7339 52.3894 47.0952 50.0281 49.2879C47.6668 51.4806 45.8958 52.9986 44.7151 53.8419C43.5344 54.6852 42.6911 55.1912 42.1851 55.3599L36.1131 49.0349L39.4021 45.4929C40.7514 43.8062 42.4381 41.1076 44.4621 37.3969C46.8234 33.5176 47.8354 30.2286 47.4981 27.5299C44.1248 27.0239 41.2574 25.5059 38.8961 22.9759C36.7034 20.2772 35.6071 17.1569 35.6071 13.6149C35.6071 10.0729 36.8721 7.03691 39.4021 4.50691C42.1008 1.97691 45.3898 0.711914 49.2691 0.711914C53.4858 0.711914 56.9434 2.4829 59.6421 6.0249C62.5094 9.5669 63.9431 14.2896 63.9431 20.1929Z"
                      data-fill="true"
                    ></path>
                  </svg>

                  <div className="reviews-block_reviews_content__h3RlP">
                    <p
                      className="reviews-block_reviews_review__a02ZG"
                      data-class="title"
                    >
                      {current.review}
                    </p>

                    <div className="reviews-block_reviews_row__ZvyRC">
                      <div className="reviews-block_reviews_client__yksVw">
                        <Image
                          src={current.avatar}
                          alt={current.name}
                          width={78}
                          height={78}
                          className="reviews-block_reviews_client_img__2FeKE"
                        />
                        <div className="reviews-block_reviews_client_column__b94ok">
                          <h3 className="reviews-block_reviews_client_name__8hXST">
                            {current.name}
                          </h3>
                          <p className="reviews-block_reviews_client_proff__pKXNo">
                            {current.position}
                          </p>
                        </div>
                      </div>

                      <p className="reviews-block_reviews_company___hGdn"> </p>

                      <div className="reviews-block_reviews_controls__Or1ks">
                        <button
                          className="reviews-block_reviews_controls_prevBtn__q_oCj"
                          onClick={handlePrev}
                          type="button"
                          aria-label="Previous review"
                        >
                          <svg
                            viewBox="0 0 27 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M26 9.5H1M1 9.5L9 1.5M1 9.5L9 17.5"
                              data-stroke="true"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                        <button
                          className="reviews-block_reviews_controls_nextBtn__QYew9"
                          onClick={handleNext}
                          type="button"
                          aria-label="Next review"
                        >
                          <svg
                            viewBox="0 0 27 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 9.5H26M26 9.5L18 1.5M26 9.5L18 17.5"
                              data-stroke="true"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
