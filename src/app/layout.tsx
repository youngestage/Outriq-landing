import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BRAND_LOGO } from "@/lib/brand-assets";
import { BRAND_NAME } from "@/lib/outriq-content";

export const metadata: Metadata = {
  title: `${BRAND_NAME} — Smarter outbound for modern teams`,
  description:
    "Outriq helps teams find the right prospects, understand them, and reach out with better timing and context.",
  keywords:
    "outbound, sales, prospecting, outreach, ICP, account research, contact enrichment, Outriq",
  icons: {
    icon: BRAND_LOGO.icon,
  },
  openGraph: {
    siteName: BRAND_NAME,
    type: "website",
    title: `${BRAND_NAME} — Smarter outbound for modern teams`,
    description:
      "Find better-fit accounts, turn signals into outreach, and keep your workflow in one place.",
  },
};

export const viewport: Viewport = {
  themeColor: "#302f2c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Montserrat:ital,wght@0,900;1,900&family=Pacifico&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/fonts/gordita/stylesheet.css" />
        <link
          rel="stylesheet"
          href="/fonts/bootstrap-icons-1.11.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/fonts/font-awesome-6.4.2/css/all.css" />
        <link rel="stylesheet" href="/styles/bootstrap.min.css" />
        <link rel="stylesheet" href="/styles/style.min.css" />
        <link rel="stylesheet" href="/styles/responsive.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
