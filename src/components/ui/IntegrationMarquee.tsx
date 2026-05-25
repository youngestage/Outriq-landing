"use client";

import { integrations } from "@/lib/outriq-content";

type IntegrationTool = (typeof integrations.tools)[number];

function IntegrationTile({ tool }: { tool: IntegrationTool }) {
  return (
    <div className="outriq-integration-marquee__item">
      <div className="outriq-integration-tile">
        <img
          src={tool.icon}
          alt=""
          width={48}
          height={48}
          className={`outriq-integration-tile__icon${tool.name === "OpenAI" ? " outriq-integration-tile__icon--light" : ""}`}
          referrerPolicy="no-referrer"
          onError={(e) => {
            if (tool.name === "OpenAI") {
              e.currentTarget.src = "/images/integrations/openai.png";
            }
          }}
        />
        <span className="outriq-integration-tile__name">{tool.name}</span>
      </div>
    </div>
  );
}

export function IntegrationMarquee() {
  const tools = integrations.tools;
  const loop = [...tools, ...tools];

  return (
    <div className="outriq-integration-marquee mb-40" aria-label="Integration partners">
      <div className="outriq-integration-marquee__track">
        {loop.map((tool, index) => (
          <IntegrationTile key={`${tool.name}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}
