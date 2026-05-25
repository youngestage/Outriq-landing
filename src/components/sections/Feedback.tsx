import { community } from "@/lib/outriq-content";

export function Feedback() {
  return (
    <div className="feedback-section-five position-relative z-1 mt-150 lg-mt-80">
      <div className="wrapper position-relative z-1 pt-150 lg-pt-80 pb-150 lg-pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-eight pe-xxl-3">
                <h2 className="text-white">
                  Join our <span>{community.accent} </span>
                  growing outbound community.
                </h2>
              </div>
              <p className="text-white fs-28 font-manrope pe-xxl-4 mt-30 mb-55 md-mb-40">
                {community.supporting}
              </p>
              <a href="#" className="btn-thirteen">
                {community.cta}
              </a>
            </div>
            <div className="col-lg-6">
              <div className="feedback-wrapper md-mt-50">
                {community.testimonials.map((item) => (
                  <div
                    key={item.company}
                    className="feedback-block"
                    style={{ background: item.bg }}
                  >
                    <div className="outriq-testimonial-brand">{item.company}</div>
                    <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src="/images/shape_46.svg" alt="" className="shapes shape_01" />
        <img src="/images/shape_47.svg" alt="" className="shapes shape_02" />
      </div>
    </div>
  );
}
