"use client";

import { useEffect } from "react";

export function useThemeEffects() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".theme-main-menu");
    const scrollTopBtn = document.querySelector<HTMLElement>(".scroll-top");

    const onScroll = () => {
      const y = window.scrollY;
      if (header) {
        header.classList.toggle("fixed", y > 24);
        header.classList.toggle("is-scrolled", y > 24);
      }
      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle("show", y > 200);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
