import { FadeIn } from "@/components/ui/FadeIn";
import { VideoLightbox } from "@/components/ui/VideoLightbox";
import { HERO_DASHBOARD_IMAGE } from "@/lib/brand-assets";
import { hero } from "@/lib/outriq-content";

const PROOF_COLORS = ["#a2272c", "#efede3", "#a2272c"] as const;

export function Hero() {
  return (
    <div className="hero-banner-five z-1 position-relative">
      <div className="wrapper position-relative z-1 pt-200 md-pt-150 pb-130 lg-pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-10 outriq-hero-copy">
              <FadeIn>
                <h1 className="hero-heading outriq-hero-heading">
                  {hero.headlineBefore}
                  <span className="outriq-hero-accent">{hero.headlineAccent}</span>,
                  <br />
                  <span className="outriq-hero-after">{hero.headlineAfter}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="fs-28 font-manrope pt-35 pb-20 pe-xxl-5">
                  {hero.supporting}
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="d-flex align-items-center flex-wrap">
                  <a href="#" className="btn-thirteen mt-10 me-3">
                    {hero.primaryCta}
                  </a>
                  <VideoLightbox className="btn-fourteen mt-10">
                    {hero.secondaryCta}
                  </VideoLightbox>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="outriq-hero-illustration-wrap">
          <img
            src={HERO_DASHBOARD_IMAGE}
            alt="Outriq dashboard showing pending reviews, signals, and outreach drafts"
            className="illustration outriq-hero-illustration"
          />
        </div>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap mt-100 lg-mt-60 md-mt-40">
            {hero.proofPoints.map((point, i) => (
              <div
                key={point}
                className="fact-feature mt-30 d-flex align-items-center"
              >
                <div
                  className="icon d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    borderColor: PROOF_COLORS[i],
                    color: PROOF_COLORS[i],
                  }}
                >
                  <i className="bi bi-check-lg" />
                </div>
                <h3>{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
