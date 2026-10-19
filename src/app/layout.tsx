import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist_Mono, Hanken_Grotesk } from "next/font/google";
import { SITE } from "@/data/content";
import "./globals.css";

// Self-hosted variable fonts (no render-blocking request to Google at runtime).
const display = Bricolage_Grotesque({ subsets: ["latin"], axes: ["opsz"], variable: "--nf-display", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--nf-body", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--nf-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — Electrical & ICT, Addis Ababa`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "electrician Addis Ababa",
    "electrical installation Ethiopia",
    "ICT infrastructure",
    "PCB design and manufacturing",
    "electronic prototyping",
    "custom electronics",
    "24/7 emergency electrical support",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Electrical engineering",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — Electrical & ICT, Addis Ababa`,
    description: SITE.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Electrical & ICT, Addis Ababa`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#007acc",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a
          className="fixed -top-[60px] left-3 z-[200] rounded-lg bg-brand px-4 py-2.5 font-body text-sm font-medium text-white transition-[top] focus:top-3"
          href="#main"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
