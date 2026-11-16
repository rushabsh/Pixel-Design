"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLink = (e, path) => {
    e.preventDefault();
    if (pathname === path) {
      if (typeof window !== "undefined") {
        if (window.lenis) {
          window.lenis.scrollTo(0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else {
      router.push(path);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className="header_header__bp5X_"
      style={{ position: "relative", zIndex: 10, width: "100%" }}
    >
      {/* Logo */}
      <div className="header_header_logo__ghx19">
        <div className="home-link_root__D9gb_">
          <Link
            className="home-link_logo__oWtLD"
            href="/"
            onClick={(e) => handleLink(e, "/")}
          >
            <Image
              className="home-link_logo_icon__C3LLf"
              src="/images/Whitelogo.webp"
              alt="logo"
              width={50}
              height={50}
              style={{ height: "auto" }}
            />
            <span className="home-link_logo_text__T3Tis">Pixel Engineers</span>
          </Link>
        </div>
      </div>

      {/* Center Nav Pill */}
      <nav className="header_header_nav__SZeKH">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => handleLink(e, item.href)}
              className="header_header_nav_item__DiFi1"
              style={{
                textDecoration: "none",
                display: "inline-block",
                opacity: isActive ? 0.6 : 1,
              }}
            >
              <span>
                <span>{item.name}</span>
                <span>{item.name}</span>
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Right spacer to balance the layout for sticky controls */}
      <div className="header_header_flex__uQxOS"></div>
    </header>
  );
}
