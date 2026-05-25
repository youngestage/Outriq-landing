import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const TARGET_NEW = 59;

function run(cmd) {
  execSync(cmd, { cwd: root, stdio: "inherit", shell: true });
}

function quote(p) {
  return `"${p.replace(/"/g, '\\"')}"`;
}

function addCommit(paths, message) {
  if (!paths.length) return;
  const existing = paths.filter((p) => fs.existsSync(path.join(root, p)));
  if (!existing.length) return;
  run(`git add -- ${existing.map(quote).join(" ")}`);
  run(`git commit -m ${JSON.stringify(message)}`);
}

const untracked = execSync("git ls-files -o --exclude-standard", {
  cwd: root,
  encoding: "utf8",
})
  .trim()
  .split(/\r?\n/)
  .filter(Boolean);

const modified = execSync("git diff --name-only", {
  cwd: root,
  encoding: "utf8",
})
  .trim()
  .split(/\r?\n/)
  .filter(Boolean);

const allPending = new Set([...untracked, ...modified]);
const claimed = new Set();

function claim(paths) {
  const out = [];
  for (const p of paths) {
    if (allPending.has(p) && !claimed.has(p)) {
      claimed.add(p);
      out.push(p);
    }
  }
  return out;
}

function claimPrefix(prefix) {
  const base = prefix.endsWith("/") ? prefix : `${prefix}/`;
  return claim([...allPending].filter((p) => p === prefix || p.startsWith(base)));
}

const batches = [];

function batch(paths, message) {
  const c = Array.isArray(paths) ? claim(paths) : paths;
  if (c.length) batches.push({ paths: c, message });
}

batch(["package.json"], "chore(deps): add carousel, motion, and bootstrap packages");
batch(["package-lock.json"], "chore(deps): update lockfile");
batch(["next.config.ts"], "chore(next): enable unoptimized images");
batch(["postcss.config.mjs"], "chore: update PostCSS config");
batch(["README.md"], "docs: document Outriq marketing site setup");
batch(["src/app/outriq-brand.css"], "style(brand): add Outriq design tokens and overrides");
batch(["src/app/globals.css"], "style: wire slick styles and brand stylesheet");
batch(claimPrefix("public/styles"), "style(template): add public Piku CSS bundle");
batch(claimPrefix("src/styles"), "style(template): add src CSS mirrors");
batch(claimPrefix("public/fonts/gordita"), "assets(fonts): add Gordita webfonts");
batch(claimPrefix("public/fonts/bootstrap-icons-1.11.1"), "assets(fonts): add Bootstrap Icons");
batch(claimPrefix("public/fonts/font-awesome-6.4.2"), "assets(fonts): add Font Awesome 6");
batch(claimPrefix("src/fonts/gordita"), "assets(fonts): add Gordita for Next bundling");
batch(["src/lib/slick-settings.ts"], "feat(ui): add slick carousel settings");
batch(["src/lib/assets.ts"], "feat(content): add shared asset constants");
batch(["src/lib/brand-assets.ts"], "feat(brand): add logo and hero asset paths");
batch(["src/lib/outriq-content.ts"], "feat(content): add Outriq marketing copy");
batch(["src/hooks/useThemeEffects.ts"], "feat(layout): add theme scroll effects hook");
batch(["src/components/layout/Header.tsx"], "feat(header): add navigation and CTAs");
batch(["src/components/layout/Footer.tsx"], "feat(footer): add footer with Kuroamai attribution");
batch(["src/components/layout/Preloader.tsx"], "feat(layout): add preloader");
batch(["src/components/layout/ThemeEffects.tsx"], "feat(layout): add theme effect wrapper");
batch(["src/components/ui/FadeIn.tsx"], "feat(ui): add fade-in animation wrapper");
batch(["src/components/ui/ScrollTop.tsx"], "feat(ui): add scroll-to-top control");
batch(["src/components/ui/VideoLightbox.tsx"], "feat(ui): add video lightbox trigger");
batch(["src/components/ui/LogoCarousel.tsx"], "feat(ui): add logo carousel wrapper");
batch(["src/components/ui/IntegrationMarquee.tsx"], "feat(ui): add integration marquee");
batch(["src/components/sections/Hero.tsx"], "feat(hero): add hero with dashboard art");
batch(["src/components/sections/Features.tsx"], "feat(features): add problem and feature blocks");
batch(["src/components/sections/AppIntegration.tsx"], "feat(integrations): add connections section");
batch(["src/components/sections/Feedback.tsx"], "feat(feedback): add testimonials section");
batch(["src/components/sections/Pricing.tsx"], "feat(pricing): add pricing plans and toggle");
batch(["src/components/sections/FAQ.tsx"], "feat(faq): add FAQ accordion section");
batch(["src/components/sections/FancyBanner.tsx"], "feat(cta): add closing banner section");
batch(["src/app/layout.tsx"], "feat(app): configure Outriq metadata and fonts");
batch(["src/app/page.tsx"], "feat(app): compose landing page sections");
batch(claimPrefix("public/outriq-logo"), "assets(brand): add Outriq logo suite");
batch(["public/320shots_so 1.png"], "assets(hero): add dashboard screenshot");
batch(["public/KuroAmai studios.svg"], "assets(footer): add Kuroamai studio logo");
batch(claimPrefix("public/images/integrations"), "assets(integrations): add partner logos");

const imagePool = claim(
  [...allPending].filter(
    (p) => p.startsWith("public/images/") && !p.startsWith("public/images/integrations/"),
  ),
);

let i = 0;
while (batches.length < TARGET_NEW && imagePool.length > 0) {
  const remainingCommits = TARGET_NEW - batches.length;
  const chunkSize = Math.max(1, Math.ceil(imagePool.length / remainingCommits));
  const chunk = imagePool.splice(0, chunkSize);
  i += 1;
  batches.push({
    paths: chunk,
    message: `assets(images): add template imagery batch ${i}`,
  });
}

const leftover = [...allPending].filter((p) => !claimed.has(p));
if (leftover.length) {
  let j = 0;
  while (leftover.length && batches.length < TARGET_NEW) {
    j += 1;
    const remainingCommits = TARGET_NEW - batches.length;
    const chunkSize = Math.max(1, Math.ceil(leftover.length / remainingCommits));
    batches.push({
      paths: leftover.splice(0, chunkSize),
      message: `chore: add remaining project files batch ${j}`,
    });
  }
}

if (batches.length !== TARGET_NEW) {
  console.error(`Expected ${TARGET_NEW} batches, got ${batches.length}`);
  console.error("Unclaimed:", [...allPending].filter((p) => !claimed.has(p)));
  process.exit(1);
}

console.log(`Creating ${batches.length} commits...`);
for (const { paths, message } of batches) {
  addCommit(paths, message);
}

const total = Number(
  execSync("git rev-list --count HEAD", { cwd: root, encoding: "utf8" }).trim(),
);
console.log(`Total commits on HEAD: ${total}`);
if (total !== TARGET_NEW + 1) {
  console.error(`Expected ${TARGET_NEW + 1} total commits, got ${total}`);
  process.exit(1);
}

const dirty = execSync("git status --porcelain", { cwd: root, encoding: "utf8" }).trim();
if (dirty) {
  console.error("Working tree not clean after replay:\n", dirty);
  process.exit(1);
}

console.log("Replay complete: 60 commits, clean tree.");
