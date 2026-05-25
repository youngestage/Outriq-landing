"use client";

import { useState } from "react";
import { pricing, type PricingPlan } from "@/lib/outriq-content";

function PricingCard({
  plan,
  period,
}: {
  plan: PricingPlan;
  period: "monthly" | "yearly";
}) {
  const isCustom = plan.price === "Custom";

  return (
    <article
      className={`outriq-pricing-card${plan.featured ? " outriq-pricing-card--featured" : ""}`}
    >
      {plan.featured ? (
        <span className="outriq-pricing-card__badge">Most popular</span>
      ) : null}

      <div className="outriq-pricing-card__head">
        <h3 className="outriq-pricing-card__name">{plan.name}</h3>
        <p className="outriq-pricing-card__desc">{plan.desc}</p>
      </div>

      <div className="outriq-pricing-card__price-row">
        <span className="outriq-pricing-card__price">{plan.price}</span>
        {!isCustom ? (
          <span className="outriq-pricing-card__period">
            {period === "yearly" ? "/year" : "/month"}
          </span>
        ) : null}
      </div>

      <ul className="style-none outriq-pricing-card__features">
        {plan.features.map((feature) => (
          <li key={feature}>
            <i className="bi bi-check-lg" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className={`btn-thirteen outriq-pricing-card__cta${plan.featured ? "" : " outriq-pricing-card__cta--outline"}`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

export function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  const plans =
    period === "monthly" ? pricing.monthlyPlans : pricing.yearlyPlans;

  return (
    <section
      id="pricing"
      className="pricing-section-four outriq-pricing position-relative z-1 mt-150 lg-mt-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-9 col-lg-10 m-auto">
            <div className="title-four text-center outriq-pricing__intro">
              <div className="text-uppercase mb-10">{pricing.eyebrow}</div>
              <h2 className="fw-bold">{pricing.headline}</h2>
            </div>
          </div>
        </div>

        <div className="outriq-pricing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={period === "monthly" ? "is-active" : ""}
            aria-pressed={period === "monthly"}
            onClick={() => setPeriod("monthly")}
          >
            {pricing.monthlyLabel}
          </button>
          <button
            type="button"
            className={period === "yearly" ? "is-active" : ""}
            aria-pressed={period === "yearly"}
            onClick={() => setPeriod("yearly")}
          >
            {pricing.yearlyLabel}
          </button>
          <span className="outriq-pricing-toggle__save">{pricing.yearlyBadge}</span>
        </div>

        <div className="outriq-pricing-grid">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} period={period} />
          ))}
        </div>
      </div>
    </section>
  );
}
