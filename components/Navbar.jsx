"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "services" },
  { name: "About Us", href: "about" },
  { name: "Contact Us", href: "contact" },
];

// Pixel Engineers Prism triangle logo
const PixelLogo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.1331 4.33625C30.2458 2.40903 33.0275 2.40903 34.1402 4.33626L43.3041 20.2086C44.4168 22.1358 43.0259 24.5449 40.8006 24.5449H22.4728C20.2474 24.5449 18.8565 22.1358 19.9692 20.2086L29.1331 4.33625Z"
      data-fill="top"
      fill="#fff"
    />
    <path
      d="M7.82907 40.9516L0.875632 52.5406C0.49027 53.1829 0.952913 54 1.70192 54H10.9087C11.2472 54 11.5608 53.8224 11.735 53.5322L21.2147 37.7326C21.6001 37.0903 21.1374 36.2732 20.3884 36.2732H16.092C12.7072 36.2732 9.57054 38.0491 7.82907 40.9516Z"
      data-fill="left"
      fill="#ececec"
    />
    <path
      d="M32.4429 36.7281L27.3684 44.8915C26.9693 45.5334 27.4309 46.3639 28.1867 46.3639H46.348C46.6938 46.3639 47.013 46.5491 47.1846 46.8494L50.9932 53.5145C51.1648 53.8147 51.4841 54 51.8299 54H62.0914C62.8452 54 63.3072 53.1734 62.9121 52.5314L55.7291 40.8591C53.9753 38.0092 50.8686 36.2732 47.5224 36.2732H33.2613C32.9282 36.2732 32.6188 36.4452 32.4429 36.7281Z"
      data-fill="right"
      fill="#fff"
    />
  </svg>
);

// Copy Email Icon
const CopyIcon = () => (
  <svg viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.25 3.35V4.1C4.25 5.1 3.85 5.5 2.85 5.5H1.9C0.9 5.5 0.5 5.1 0.5 4.1V3.15C0.5 2.15 0.9 1.75 1.9 1.75H2.65"
      data-stroke="true"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.24844 3.35H3.44844C2.84844 3.35 2.64844 3.15 2.64844 2.55V1.75L4.24844 3.35Z"
      data-stroke="true"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.89844 0.5H3.89844"
      data-stroke="true"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.75 1.25C1.75 0.835 2.085 0.5 2.5 0.5H3.155"
      data-stroke="true"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.49937 2V3.5475C5.49937 3.935 5.18437 4.25 4.79688 4.25"
      data-stroke="true"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.5 2H4.75C4.1875 2 4 1.8125 4 1.25V0.5L5.5 2Z"
      data-stroke="true"
      stroke="white"
      strokeWidth="0.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { menuActive, toggleMenu, toggleForm } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Menu Animation Lifecycle States
  const [isMenuRendered, setIsMenuRendered] = useState(false);
  const [menuAnimClass, setMenuAnimClass] = useState("");

  // Toast States
  const [toastActive, setToastActive] = useState(false);
  const [toastRendered, setToastRendered] = useState(false);
  const [toastClass, setToastClass] = useState("");

  // Scroll detection for sticky header inversion
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu Open/Close Animation State Machine matching original CSSTransition
  useEffect(() => {
    let timer;
    let raf1, raf2;

    if (menuActive) {
      setIsMenuRendered(true);
      document.body.style.overflow = "hidden";
      setMenuAnimClass("menu_enter__9sDGv");

      // Double RAF ensures initial scaleY(0) renders before enterActive transition starts
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setMenuAnimClass("menu_enterActive__0o7Bd");
        });
      });
    } else if (isMenuRendered) {
      document.body.style.overflow = "";
      setMenuAnimClass("menu_exit__icWp4");

      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setMenuAnimClass("menu_exitActive__BnoYg");
        });
      });

      // Total exit animation is 1000ms (.4s delay + .6s transform)
      timer = setTimeout(() => {
        setIsMenuRendered(false);
        setMenuAnimClass("");
      }, 1000);
    }

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [menuActive]);

  // Toast Notification State Machine
  useEffect(() => {
    let timer;
    let raf1, raf2;

    if (toastActive) {
      setToastRendered(true);
      setToastClass("menu-toast_enter__bcQhL");

      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setToastClass("menu-toast_enterActive__i_53E");
        });
      });

      timer = setTimeout(() => {
        setToastActive(false);
      }, 3000);
    } else if (toastRendered) {
      setToastClass("menu-toast_exit___t6TP");

      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => {
          setToastClass("menu-toast_exitActive__MABkP");
        });
      });

      timer = setTimeout(() => {
        setToastRendered(false);
        setToastClass("");
      }, 350);
    }

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [toastActive]);

  const handleNavClick = (href) => {
    toggleMenu(false);
    if (href === "form") {
      setTimeout(() => toggleForm(true), 400);
      return;
    }
    if (href === "about") {
      if (pathname === "/about") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/about");
      }
      return;
    }
    if (href === "services") {
      if (pathname === "/services") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/services");
      }
      return;
    }
    if (href === "contact") {
      if (pathname === "/contact") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/contact");
      }
      return;
    }
    if (href === "portfolio") {
      if (pathname === "/") {
        const el = document.getElementById("portfolio");
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 400);
        }
      } else {
        router.push("/#portfolio");
      }
      return;
    }
    if (pathname !== "/") {
      router.push(`/#${href}`);
      return;
    }
    const el = document.getElementById(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  const handleLogoClick = () => {
    toggleMenu(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("info@pixelengineers.com");
    setToastActive(true);
  };

  return (
    <>
      {/* Fixed Header Controls (Always on top with z-index: 301) */}
      <div
        className={`hero-sticky_fixed__ZuNHj ${
          scrolled ? "hero-sticky_fixedInvert__5QLdd" : ""
        }`}
      >
        <button
          onClick={() => toggleForm(true)}
          className="hero-sticky_becomeClient__Hph4c"
          type="button"
        >
          <svg>
            <use href="/images/sprite.svg#plus"></use>
          </svg>
          <span>
            <span>Learn More</span>
            <span>Learn More</span>
          </span>
        </button>

        {/* Hamburger button toggles active 'X' animation with .menu-button_buttonActive__EMO_Y */}
        <button
          onClick={() => toggleMenu(!menuActive)}
          className={`menu-button_button__hHosa hero-sticky_menuBtn__a2I5H ${
            menuActive ? "menu-button_buttonActive__EMO_Y" : ""
          }`}
          aria-label="Toggle Navigation Menu"
          type="button"
        >
          <div className="menu-button_button_block__I7CmA">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Fullscreen Overlay Navigation Menu (Exact AWSMD Architecture & Scoped Classes) */}
      {isMenuRendered && (
        <div
          data-class="modal"
          data-scroll-prevent="true"
          data-lenis-prevent="true"
          className={`none_modal__SWeNZ main-layout_main_menu__u4VZb ${menuAnimClass}`}
          onMouseDown={(e) => {
            if (e.button !== 2 && e.target === e.currentTarget) {
              toggleMenu(false);
            }
          }}
        >
          <div className="none_modal_window__KQBlG">
            <menu className="menu_menu__XFZRs">
              {/* Left Column (curtains down from top: transform-origin center top) */}
              <div className="menu_menu_left__kHQLR">
                <div
                  style={{
                    width: "70%",
                    height: "80px",
                    display: "flex",
                    alignItems: "left",
                    justifyContent: "left",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/images/PixelEngineerswhite.webp"
                    alt="Pixel Engineers Logo"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    width={100}
                    height={100}
                  />
                </div>

                <p className="menu_menu_text__RIQzS">
                  Pixel-perfect design &amp; engineering for growing businesses
                </p>
              </div>

              {/* Right Column (curtains up from bottom: transform-origin center bottom) */}
              <div className="menu_menu_expand__dWm8x">
                <header className="menu_menu_header__11xYS">
                  <PixelLogo className="menu_menu_mobile_logo__KL6VL" />
                  <h4 className="menu_menu_header_title__lvi_H">Navigation</h4>
                </header>

                <div className="menu_menu_content__p9RjY">
                  {/* Left Side: Staggered Numbered Navigation Links */}
                  <div className="menu_menu_content_left__namsq">
                    {navItems.map((item, index) => (
                      <button
                        key={item.name}
                        className="menu_menu_content_link__d2DOf"
                        onClick={() => handleNavClick(item.href)}
                        type="button"
                      >
                        <span
                          data-index={(index + 1).toString().padStart(2, "0")}
                        >
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Right Side: Socials, Email Copy & Legal Info */}
                  <div className="menu_menu_content_right__psiaT">
                    <div className="menu_menu_socials__llpxq">
                      <p className="menu_menu_socials_link__DWAUg">Email</p>

                      <div className="menu_menu_socials_email__3Wz6n">
                        <a
                          href="mailto:info@pixelengineers.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          info@pixelengineers.com
                        </a>
                        <button
                          onClick={copyEmail}
                          type="button"
                          aria-label="Copy Email"
                        >
                          <CopyIcon />
                        </button>
                      </div>
                    </div>

                    <div className="menu_menu_row__5jyoj">
                      <div className="menu_menu_copy__icvFm">
                        <p className="menu_menu_copy_policy">
                          Privacy Policy &amp; Cookies
                        </p>
                        <p className="menu_menu_copy_copyright__QMa8y">
                          © Pixel Engineers {new Date().getFullYear()}
                        </p>
                      </div>

                      <div className="menu_menu_socialsExtra__6zN0p">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="menu_menu_socialsExtra_link__Sc2EP"
                          title="DesignRush"
                        >
                          <svg>
                            <use href="/images/sprite.svg#designrush"></use>
                          </svg>
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="menu_menu_socialsExtra_link__Sc2EP"
                          title="Dribbble"
                        >
                          <svg>
                            <use href="/images/sprite.svg#dribbble"></use>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </menu>
          </div>
        </div>
      )}

      {/* Email Copied Toast Notification */}
      {toastRendered && (
        <div className={`menu-toast_toast__26zqt ${toastClass}`}>
          <div className="menu-toast_toast_container__qbWmh">
            <div className="menu-toast_toast_mark__5n91M">
              <svg
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.520508 2.99849L2.17134 4.64932L5.47884 1.34766"
                  stroke="#3fbd62"
                  data-stroke="true"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="menu-toast_toast_text__r3vgJ">
              Email copied to the clipboard.
            </p>
            <button
              className="menu-toast_toast_closeBtn__ZpibE"
              onClick={() => setToastActive(false)}
              type="button"
              aria-label="Close Toast"
            >
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.41 7.00019L12.71 2.71019C12.8037 2.61725 12.8781 2.50664 12.9289 2.38481C12.9797 2.26297 13.0058 2.13225 13.0058 2.00019C13.0058 1.86814 12.9797 1.73742 12.9289 1.61558C12.8781 1.49375 12.8037 1.38314 12.71 1.29019C12.617 1.19725 12.5064 1.12285 12.3846 1.07208C12.2627 1.02131 12.132 0.995171 12 0.995171C11.868 0.995171 11.7373 1.02131 11.6154 1.07208C11.4936 1.12285 11.383 1.19725 11.29 1.29019L7 5.59019L2.71 1.29019C2.61704 1.19725 2.50644 1.12285 2.38458 1.07208C2.26272 1.02131 2.13201 0.995171 2 0.995171C1.86799 0.995171 1.73728 1.02131 1.61542 1.07208C1.49356 1.12285 1.38296 1.19725 1.29 1.29019C1.19627 1.38314 1.12188 1.49375 1.07111 1.61558C1.02034 1.73742 0.994202 1.86814 0.994202 2.00019C0.994202 2.13225 1.02034 2.26297 1.07111 2.38481C1.12188 2.50664 1.19627 2.61725 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41019L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z"
                  fill="#2e2f30"
                  data-fill="true"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
