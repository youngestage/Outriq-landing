import { IntegrationMarquee } from "@/components/ui/IntegrationMarquee";
import { integrations } from "@/lib/outriq-content";

export function AppIntegration() {
  return (
    <div
      id="integrations"
      className="app-integration-one mt-170 xl-mt-150 lg-mt-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-11 m-auto">
            <div className="title-four text-center mb-95 lg-mb-40">
              <div className="text-uppercase mb-10">{integrations.eyebrow}</div>
              <h2 className="fw-bold">{integrations.headline}</h2>
              <p className="fs-22 mt-30">{integrations.supporting}</p>
            </div>
          </div>
        </div>
      </div>
      <IntegrationMarquee />
      <div className="container">
        <p className="text-center fs-22 mb-40">{integrations.tagline}</p>
        <div className="text-center">
          <a href="#" className="btn-thirteen">
            {integrations.cta}
          </a>
        </div>
      </div>
    </div>
  );
}
