import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import CalculatorsHeroSection from "@/components/calculators/CalculatorsHeroSection";
import CalculatorWidget from "@/components/calculators/CalculatorWidget";
import CalculatorsPageSEO from "@/components/calculators/seo/CalculatorsPageSEO";
import CalculatorAdvisoryBridge from "@/components/calculators/CalculatorAdvisoryBridge";

import { redirect, RedirectType } from "next/navigation";

export const metadata: Metadata = {
  title: 'Free Financial Calculators: SIP, FD, EMI & Tax | Stockstrail',
  description:
    "Use Stockstrail's free calculators for SIP, lumpsum, FD, RD, loan EMI and income tax FY 2026-27. Instant results, no login. Plan goals with realistic numbers.",
  keywords:
    "financial calculators, SIP calculator, lumpsum calculator, FD calculator, RD calculator, EMI calculator, income tax calculator, Stockstrail",
  alternates: {
    canonical: "https://www.stockstrail.in/calculators",
  },
  openGraph: {
    title: 'Free Financial Calculators: SIP, FD, EMI & Tax | Stockstrail',
    description:
      "Use Stockstrail's free calculators for SIP, lumpsum, FD, RD, loan EMI and income tax FY 2026-27. Instant results, no login. Plan goals with realistic numbers.",
    url: "https://www.stockstrail.in/calculators",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1200,
        height: 630,
        alt: "Free Financial Calculators: SIP, FD, EMI & Tax | Stockstrail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Free Financial Calculators: SIP, FD, EMI & Tax | Stockstrail',
    description:
      "Use Stockstrail's free calculators for SIP, lumpsum, FD, RD, loan EMI and income tax FY 2026-27. Instant results, no login. Plan goals with realistic numbers.",
    images: ["/og-stockstrail.png"],
  },
};

const CALC_PARAM_MAP: Record<string, string> = {
  sip: "/calculators/sip",
  fd: "/calculators/fd",
  "fixed-deposit": "/calculators/fd",
  lumpsum: "/calculators/lumpsum",
  "lump-sum": "/calculators/lumpsum",
  rd: "/calculators/rd",
  "recurring-deposit": "/calculators/rd",
  emi: "/calculators/emi",
  loan: "/calculators/emi",
  tax: "/calculators/tax",
  "income-tax": "/calculators/tax",
};

interface CalculatorsPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CalculatorsPage({ searchParams }: CalculatorsPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const query = (
    (typeof resolvedParams.tab === "string" ? resolvedParams.tab : "") ||
    (typeof resolvedParams.type === "string" ? resolvedParams.type : "") ||
    (typeof resolvedParams.calc === "string" ? resolvedParams.calc : "") ||
    (typeof resolvedParams.calculator === "string" ? resolvedParams.calculator : "") ||
    (typeof resolvedParams.t === "string" ? resolvedParams.t : "")
  ).toLowerCase().trim();

  if (query && CALC_PARAM_MAP[query]) {
    redirect(CALC_PARAM_MAP[query], RedirectType.replace);
  }

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Eye-Catching, Dedicated Showstopper Hero */}
          <CalculatorsHeroSection />

          {/* Live Interactive Calculator Engine */}
          <div className="w-full">
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-white/50">Loading calculators...</div>}>
              <CalculatorWidget initialTab="SIP" navigateOnTabChange={true} />
            </Suspense>
          </div>

          {/* Advisory Bridge */}
          <CalculatorAdvisoryBridge type="SIP" />

          {/* SEO & Internal Links */}
          <CalculatorsPageSEO />
        </div>
      </section>
    </Layout>
  );
}
