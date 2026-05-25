export const BRAND_NAME = "Outriq";

export const hero = {
  headlineBefore: "Work prospects ",
  headlineAccent: "smarter",
  headlineAfter: "not harder.",
  supporting:
    "Find the right companies, pick the right people, understand what matters, and send outreach that feels relevant instead of random.",
  primaryCta: "Start free trial",
  secondaryCta: "Watch demo",
  proofPoints: [
    "Find better-fit accounts faster",
    "Turn signals into useful outreach",
    "Keep research, drafts, and follow-up in one place",
  ],
} as const;

export const problemSection = {
  headline: "Stop guessing who to reach and what to say.",
  supporting:
    "Most teams waste time building lists, checking profiles, reading websites, and writing cold messages from scratch. Outriq brings that work into one system so teams can move from research to outreach with more clarity and less busywork.",
  cards: [
    {
      title: "Find the right accounts",
      body: "Build focused account lists based on the kind of customer you actually want.",
    },
    {
      title: "Understand who matters",
      body: "See the people, roles, and context that make an account worth contacting.",
    },
    {
      title: "Reach out with better timing",
      body: "Use real signals and account context to write outreach that makes sense.",
    },
  ],
} as const;

export const featureBlocks = [
  {
    title: "Build your target list",
    body: "Define the kind of company you want, then let Outriq surface matching accounts worth a closer look.",
    labels: [
      "Industry",
      "Team size",
      "Region",
      "Tools used",
      "Hiring signal",
      "Good fit",
    ],
    background: "#FFEB80",
  },
  {
    title: "Find the right people",
    body: "Move from company research to the actual people you should contact, with cleaner role matching and better contact confidence.",
    labels: [
      "Founder",
      "Sales lead",
      "Ops lead",
      "Verified contact",
      "Best first contact",
    ],
    background: "#76FFCE",
  },
  {
    title: "Turn signals into action",
    body: "Spot useful changes like hiring, growth, new launches, or tool changes, then turn them into a reason to reach out.",
    bullets: [
      "New hiring activity",
      "Team growth",
      "Product update",
      "Expansion signal",
      "Fresh outreach angle",
    ],
    background: "#D3A7FF",
  },
  {
    title: "Draft outreach faster",
    body: "Give your team a strong first draft built from account context, signals, and the reason this prospect might actually care.",
    labels: [
      "Subject option A",
      "Intro line",
      "Reason to care",
      "CTA suggestion",
      "Follow-up draft",
    ],
    background: "#efede3",
  },
] as const;

export const integrations = {
  eyebrow: "Connections",
  headline: "Outriq works with the tools your team already uses.",
  supporting:
    "Bring in account data, email, calendar activity, and outside sources so your team can work from one flow instead of jumping between tabs.",
  tools: [
    {
      name: "Apollo",
      icon: "/images/integrations/apollo.png",
    },
    {
      name: "Gmail",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png",
    },
    {
      name: "Google Calendar",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/archive/a/a5/20201015233956%21Google_Calendar_icon_%282020%29.svg/120px-Google_Calendar_icon_%282020%29.svg.png",
    },
    {
      name: "HubSpot",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Hubspotlogo.png/960px-Hubspotlogo.png",
    },
    {
      name: "Slack",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/960px-Slack_icon_2019.svg.png",
    },
    {
      name: "Supabase",
      icon: "https://img.icons8.com/color/512/supabase.png",
    },
    {
      name: "OpenAI",
      icon: "https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F3913%2FPNG%2F512%2Fopenai_logo_icon_248315.png&id=248315&pack_or_individual=pack",
    },
    {
      name: "Anthropic",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkx3OS8nRl57trR5Jw-Gnj_VkCACzY6QMIg&s",
    },
  ],
  tagline: "Connect your research, outreach, and follow-up workflow in one place.",
  cta: "Explore integrations",
} as const;

export const community = {
  accent: "10,000+",
  headlineBefore: "Join teams building a better outbound process.",
  headlineAccent: "10,000+",
  headlineFull: "Join our growing outbound community.",
  supporting:
    "From solo founders to fast-moving sales teams, Outriq helps people spend less time on list work and more time starting the right conversations.",
  cta: "See how teams use Outriq",
  testimonials: [
    {
      company: "RevPath",
      quote:
        "Outriq helped us go from random prospecting to a cleaner, more focused workflow.",
      bg: "#FFDA7C",
    },
    {
      company: "Northlane",
      quote:
        "The biggest win was context. Our outreach finally sounded like it was written for real companies, not a spreadsheet.",
      bg: "#FF90ED",
    },
    {
      company: "Fieldnote",
      quote:
        "We cut down the time spent on list building and first-draft writing almost immediately.",
      bg: "#85F8F1",
    },
  ],
} as const;

export type PricingPlan = {
  price: string;
  name: string;
  desc: string;
  cta: string;
  features: string[];
  featured?: boolean;
};

export const pricing = {
  eyebrow: "Pricing",
  headline: "Simple plans for solo operators and growing teams",
  monthlyLabel: "Monthly",
  yearlyLabel: "Yearly",
  yearlyBadge: "Save ~20%",
  monthlyPlans: [
    {
      price: "$19",
      name: "Starter",
      desc: "For solo founders and early outbound work",
      cta: "Start free trial",
      features: [
        "Build ICPs",
        "Source accounts",
        "Find contacts",
        "Track signals",
        "Draft outreach",
      ],
    },
    {
      price: "$79",
      name: "Team",
      desc: "For small teams building repeatable outbound",
      featured: true,
      cta: "Start free trial",
      features: [
        "Everything in Starter",
        "Shared workspaces",
        "Team review flows",
        "Better tracking",
        "Saved playbooks",
      ],
    },
    {
      price: "Custom",
      name: "Growth",
      desc: "For teams with larger volumes and deeper workflows",
      cta: "Talk to sales",
      features: [
        "Everything in Team",
        "Advanced permissions",
        "Approval flows",
        "Connector support",
        "Priority support",
      ],
    },
  ] satisfies PricingPlan[],
  yearlyPlans: [
    {
      price: "$190",
      name: "Starter",
      desc: "For solo founders and early outbound work",
      cta: "Start free trial",
      features: [
        "Build ICPs",
        "Source accounts",
        "Find contacts",
        "Track signals",
        "Draft outreach",
      ],
    },
    {
      price: "$790",
      name: "Team",
      desc: "For small teams building repeatable outbound",
      featured: true,
      cta: "Start free trial",
      features: [
        "Everything in Starter",
        "Shared workspaces",
        "Team review flows",
        "Better tracking",
        "Saved playbooks",
      ],
    },
    {
      price: "Custom",
      name: "Growth",
      desc: "For teams with larger volumes and deeper workflows",
      cta: "Talk to sales",
      features: [
        "Everything in Team",
        "Advanced permissions",
        "Approval flows",
        "Connector support",
        "Priority support",
      ],
    },
  ] satisfies PricingPlan[],
} as const;

export const faq = {
  eyebrow: "FAQ",
  headline: "Questions & Answers",
  intro: "Everything teams usually want to know before they start using Outriq.",
  cta: "Contact us",
  items: [
    {
      id: "faq-1",
      question: "What is Outriq?",
      answer:
        "Outriq is a platform that helps teams find prospects, understand them better, and create stronger outreach from one place.",
    },
    {
      id: "faq-2",
      question: "Who is Outriq for?",
      answer:
        "It is for founders, sales teams, growth teams, and outbound teams that want a more organized way to research and contact prospects.",
    },
    {
      id: "faq-3",
      question: "What can Outriq help me do?",
      answer:
        "It can help define your target customer, source accounts, find contacts, track useful signals, draft outreach, and keep follow-ups organized.",
    },
    {
      id: "faq-4",
      question: "Does Outriq send messages automatically?",
      answer:
        "It can support draft and review workflows first, so teams can stay in control before they automate more of the process.",
    },
    {
      id: "faq-5",
      question: "Can my team use its existing tools?",
      answer:
        "Yes. Outriq is designed to connect with outside systems through a stable connector layer so data and actions do not have to live in separate places.",
    },
    {
      id: "faq-6",
      question: "Is this only for large sales teams?",
      answer:
        "No. The platform also fits solo founders and small teams that need a better outbound process without hiring a large operations team.",
    },
  ],
} as const;

export const ctaBanner = {
  headlineBefore: "Build a better outbound system with Outriq.",
  headlineAccent: "faster",
  supporting:
    "Spend less time chasing lists and more time reaching the right people with the right message.",
  cta: "Get started",
} as const;

export const footer = {
  newsletterHeading: "Subscribe for smarter outbound ideas.",
  newsletterHeadingAccent: "smarter outbound",
  newsletterText: "Get updates, tips, and product news from the Outriq team.",
  emailPlaceholder: "Your email address",
  navPrimary: ["About", "Product", "Pricing", "Integrations", "Blog", "Contact"],
  navLegal: ["Privacy Policy", "Terms"],
  utility: ["Demo", "Partners", "Careers"],
  email: "hello@outriq.com",
  location: "Lagos, Nigeria",
  copyright: "©2026 Outriq. All rights reserved.",
  byline: "Outriq by Kuroamai",
} as const;

export const nav = {
  product: { label: "Product", href: "#features" },
  integrations: { label: "Integrations", href: "#integrations" },
  pricing: { label: "Pricing", href: "#pricing" },
  faq: { label: "FAQ", href: "#faq" },
  contact: { label: "Contact", href: "#contact" },
  login: "Login",
  getStarted: "Start free trial",
} as const;
