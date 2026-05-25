"use client";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BRAND_LOGO } from "@/lib/brand-assets";
import { nav, BRAND_NAME } from "@/lib/outriq-content";

const NAV_LINKS = [
  nav.product,
  nav.integrations,
  nav.pricing,
  nav.faq,
  nav.contact,
] as const;

export function Header() {
  return (
    <header className="theme-main-menu menu-style-six white-vr sticky-menu menu-overlay">
      <div className="inner-content gap-one">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-flex align-items-center">
                <img src={BRAND_LOGO.wordmarkOnDark} alt={BRAND_NAME} />
              </Link>
            </div>
            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li>
                  <a
                    href="#"
                    className="login-btn-four fw-500 d-flex align-items-center tran3s"
                  >
                    <span>{nav.login}</span>
                  </a>
                </li>
                <li className="d-none d-md-inline-block ms-4">
                  <a href="#" className="btn-thirteen">
                    {nav.getStarted}
                  </a>
                </li>
              </ul>
            </div>
            <Navbar expand="lg" className="p0 order-lg-2 ms-lg-5">
              <Navbar.Toggle aria-controls="navbarNav" />
              <Navbar.Collapse id="navbarNav" className="ms-lg-5">
                <Nav className="align-items-lg-center">
                  <li className="d-block d-lg-none">
                    <div className="logo">
                      <Link href="/" className="d-block">
                        <img src={BRAND_LOGO.wordmarkOnDark} alt={BRAND_NAME} />
                      </Link>
                    </div>
                  </li>
                  {NAV_LINKS.map((item) => (
                    <li key={item.href} className="nav-item">
                      <a className="nav-link" href={item.href}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </header>
  );
}
