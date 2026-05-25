import type { Settings } from "react-slick";

export const partnerLogoOneSettings: Settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } },
  ],
};

export const partnerLogoTwoSettings: Settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } },
  ],
};
