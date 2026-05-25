"use client";

import dynamic from "next/dynamic";
import type { Settings } from "react-slick";
import type { ReactNode } from "react";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

type LogoCarouselProps = {
  className: string;
  settings: Settings;
  children: ReactNode;
};

export function LogoCarousel({ className, settings, children }: LogoCarouselProps) {
  return (
    <Slider className={className} {...settings}>
      {children}
    </Slider>
  );
}
