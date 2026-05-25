"use client";

import Accordion from "react-bootstrap/Accordion";
import { faq } from "@/lib/outriq-content";

export function FAQ() {
  return (
    <div id="faq" className="faq-section-three position-relative mt-150 lg-mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="title-four">
              <div className="text-uppercase mb-10">{faq.eyebrow}</div>
              <h2 className="fw-bold">{faq.headline}</h2>
            </div>
            <p className="fs-22 pe-xxl-5 mt-40 md-mt-10 mb-40">{faq.intro}</p>
            <a href="#contact" className="btn-eleven style-two">
              {faq.cta}
            </a>
          </div>
          <div className="col-lg-7">
            <Accordion
              className="accordion accordion-style-two p0 bg-transparent shadow-none ms-xl-4 md-mt-40"
              defaultActiveKey=""
            >
              {faq.items.map((item) => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>
                    <p className="fs-22">{item.answer}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
