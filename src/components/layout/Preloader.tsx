"use client";

import { useEffect, useState } from "react";
import { BRAND_LOGO } from "@/lib/brand-assets";
import { BRAND_NAME } from "@/lib/outriq-content";

const LETTERS = ["O", "U", "T", "R", "I", "Q"] as const;

export function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);
    if (document.readyState === "complete") {
      const t = setTimeout(hide, 400);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", hide);
    const fallback = setTimeout(hide, 2500);
    return () => {
      window.removeEventListener("load", hide);
      clearTimeout(fallback);
    };
  }, []);

  if (hidden) return null;

  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="icon">
          <img
            src={BRAND_LOGO.icon}
            alt={BRAND_NAME}
            className="m-auto d-block"
          />{" "}
          <span />
        </div>
        <div className="txt-loading">
          {LETTERS.map((letter) => (
            <span
              key={letter}
              data-text-preloader={letter}
              className="letters-loading"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
