import React from "react";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/learn/site-chrome";
import JsonLd from "@/components/common/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://learning.stockstrail.in"),
  title: {
    default: "Stockstrail Learning — Free Investing & Personal Finance Courses for India",
    template: "%s | Stockstrail Learning",
  },
  description:
    "Free structured courses on mutual funds, SIP, insurance, tax saving, stock market, and retirement planning — built for Indian investors. 100% free forever, SEBI-aware content.",
  keywords: [
    "Stockstrail Learning",
    "free finance courses India",
    "mutual funds course",
    "SIP investing guide",
    "tax saving 80C ELSS",
    "financial literacy India",
    "SEBI investor education",
    "retirement planning India",
    "personal finance academy",
  ],
  authors: [{ name: "Stockstrail", url: "https://www.stockstrail.in" }],
  creator: "Stockstrail",
  publisher: "Stockstrail Learning",
  category: "finance",
  applicationName: "Stockstrail Learning",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    shortcut: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://learning.stockstrail.in",
    siteName: "Stockstrail Learning",
    title: "Stockstrail Learning — Free Investing & Personal Finance Courses for India",
    description:
      "Free structured courses on mutual funds, SIP, insurance, tax saving, stock market, and retirement planning — built for Indian investors.",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Stockstrail Learning — Free Investing & Personal Finance Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stockstrail Learning — Free Investing & Personal Finance Courses for India",
    description:
      "Free structured courses on mutual funds, SIP, insurance, tax saving, stock market, and retirement planning — built for Indian investors.",
    images: ["/og-stockstrail.png"],
  },
};

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Stockstrail Learning",
    url: "https://learning.stockstrail.in",
    description:
      "Stockstrail Learning is a free financial education academy providing structured courses on mutual funds, SIP, insurance, and personal finance for Indian retail investors.",
    parentOrganization: {
      "@type": "FinancialService",
      name: "Stockstrail",
      url: "https://www.stockstrail.in",
    },
  };

  return (
    <div className="min-h-screen bg-stockstrail-bg flex flex-col">
      <JsonLd data={educationalOrgSchema} />
      <SiteHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

