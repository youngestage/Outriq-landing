import Link from "next/link";
import { BRAND_LOGO, KUROAMAI } from "@/lib/brand-assets";
import { BRAND_NAME, footer } from "@/lib/outriq-content";

export function Footer() {
  return (
    <div id="contact" className="footer-three">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xxl-5 col-lg-4 me-auto">
              <div className="footer-intro mb-30 me-xxl-5 pe-xxl-4">
                <h3>
                  Subscribe for <span>smarter outbound</span> ideas.
                </h3>
                <p className="mt-20">{footer.newsletterText}</p>
                <form action="#" className="position-relative style-two mt-30">
                  <input
                    type="email"
                    placeholder={footer.emailPlaceholder}
                  />
                  <button type="button" className="tran3s">
                    <i className="bi bi-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-nav mb-40">
                <ul className="footer-nav-link style-none">
                  {footer.navPrimary.map((label) => (
                    <li key={label}>
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <div className="footer-nav mb-40">
                <ul className="footer-nav-link style-none">
                  {footer.navLegal.map((label) => (
                    <li key={label}>
                      <a href="#">{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xxl-2 col-lg-3">
              <div className="footer-contact mb-20">
                <p className="fw-500">{footer.location}</p>
                <a
                  href={`mailto:${footer.email}`}
                  className="tel fw-500 tran3s"
                >
                  {footer.email}
                </a>
                <ul className="style-none d-flex align-items-center social-icon">
                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#" aria-label="Twitter">
                      <i className="fa-brands fa-x-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="outriq-footer-partner text-center mb-30">
            <div className="outriq-footer-partner__logos">
              <Link href="/" className="outriq-footer-partner__logo">
                <img src={BRAND_LOGO.wordmarkOnDark} alt={BRAND_NAME} />
              </Link>
              <span className="outriq-footer-partner__sep" aria-hidden>
                ×
              </span>
              <a
                href={KUROAMAI.url}
                className="outriq-footer-partner__logo outriq-footer-partner__logo--kuroamai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={KUROAMAI.logo} alt={KUROAMAI.name} />
              </a>
            </div>
            <a
              href={KUROAMAI.url}
              className="outriq-footer-partner__byline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {footer.byline}
            </a>
          </div>
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="d-flex justify-content-center align-items-center sm-mb-20">
              <ul className="style-none d-flex justify-content-center">
                {footer.utility.map((label) => (
                  <li key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="copyright-text text-center m0">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
