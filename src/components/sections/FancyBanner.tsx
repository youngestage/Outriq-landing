import { BRAND_NAME, ctaBanner } from "@/lib/outriq-content";

export function FancyBanner() {
  return (
    <div className="fancy-banner-five position-relative z-1 mt-150 lg-mt-80">
      <div className="wrapper position-relative z-1 pt-110 lg-pt-80 pb-120 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-9 m-auto text-center">
              <div className="title-eight">
                <h2 className="text-white">
                  Build a better outbound system with {BRAND_NAME},{" "}
                  <span>{ctaBanner.headlineAccent}</span>.
                </h2>
              </div>
              <p className="text-white fs-28 font-manrope pe-xxl-4 mt-30 mb-55">
                {ctaBanner.supporting}
              </p>
              <a href="#" className="btn-thirteen">
                {ctaBanner.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
