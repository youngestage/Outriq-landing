"use client";

import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { YOUTUBE_EMBED } from "@/lib/assets";

type VideoLightboxProps = {
  className?: string;
  children: React.ReactNode;
};

export function VideoLightbox({ className, children }: VideoLightboxProps) {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='outriq-video']", {});
    return () => Fancybox.unbind("[data-fancybox='outriq-video']");
  }, []);

  return (
    <a
      className={className}
      data-fancybox="outriq-video"
      href={YOUTUBE_EMBED}
    >
      {children}
    </a>
  );
}
