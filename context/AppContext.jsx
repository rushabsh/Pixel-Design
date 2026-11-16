"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext({
  menuActive: false,
  formActive: false,
  formSubmitted: false,
  toggleMenu: () => { },
  toggleForm: () => { },
  setSubmitted: () => { },
});

export function AppProvider({ children }) {
  const [menuActive, setMenuActive] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleMenu = (val) => {
    setMenuActive((prev) => (val !== undefined ? val : !prev));
  };

  const toggleForm = (val) => {
    if (val === true) {
      if (typeof window !== "undefined") {
        window.location.href = "/contact";
      }
      return;
    }
    setFormActive(false);
  };

  const setSubmitted = (val) => {
    setFormSubmitted(val);
  };

  // Lock body scroll and pause Lenis smooth scroll when menu is active
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.lenis) {
        window.lenis.start();
      }
    };
  }, [menuActive]);

  return (
    <AppContext.Provider
      value={{
        menuActive,
        formActive,
        formSubmitted,
        toggleMenu,
        toggleForm,
        setSubmitted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

