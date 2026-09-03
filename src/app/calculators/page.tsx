import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import CalculatorsHeroSection from "@/components/calculators/CalculatorsHeroSection";
import CalculatorWidget from "@/components/calculators/CalculatorWidget";
import CalculatorsPageSEO from "@/components/calculators/seo/CalculatorsPageSEO";
import CalculatorAdvisoryBridge from "@/components/calculators/CalculatorAdvisoryBridge";

export const metadata: Metadata = {
  title: "Financial Calculators - SIP, Lumpsum, FD, RD, EMI & Tax | Stockstrail",
  description:
    "Free institutional-grade financial calculators for Indian investors. Calculate Mutual Fund SIP returns, Lumpsum wealth, Fixed Deposit interest, RD maturity, Loan EMI, and Income Tax liability.",
  keywords:
    "financial calculators, SIP calculator, lumpsum calculator, FD calculator, RD calculator, EMI calculator, income tax calculator, Stockstrail",
  alternates: {
    canonical: "https://www.stockstrail.in/calculators",
  },
  openGraph: {
    title: "Financial Calculators - SIP, Lumpsum, FD, RD, EMI & Tax | Stockstrail",
    description:
      "Free institutional-grade financial calculators for Indian investors. Calculate Mutual Fund SIP returns, Lumpsum wealth, Fixed Deposit interest, RD maturity, Loan EMI, and Income Tax liability.",
    url: "https://www.stockstrail.in/calculators",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Stockstrail Financial Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Calculators - SIP, Lumpsum, FD, RD, EMI & Tax | Stockstrail",
    description:
      "Free institutional-grade financial calculators for Indian investors. Calculate SIP, Lumpsum, FD, RD, EMI, and Tax.",
    images: ["/og-stockstrail.png"],
  },
};

export default function CalculatorsPage() {
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
