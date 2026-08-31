import React, { Suspense } from "react";
import type { Metadata } from "next";
import Layout from "@/components/layout/Layout";
import CalculatorWidget from "@/components/calculators/CalculatorWidget";
import CalculatorsPageSEO from "@/components/calculators/seo/CalculatorsPageSEO";

export const metadata: Metadata = {
  title: "Financial Calculators - SIP, Lumpsum, FD, RD, EMI & Tax | Stockstrail",
  description:
    "Free financial calculators for Indian investors. Calculate Mutual Fund SIP returns, Lumpsum growth, Fixed Deposit interest, RD maturity, Loan EMI, and Income Tax liability.",
  keywords:
    "financial calculators, SIP calculator, lumpsum calculator, FD calculator, RD calculator, EMI calculator, income tax calculator, Stockstrail",
  alternates: {
    canonical: "https://www.stockstrail.in/calculators",
  },
  openGraph: {
    title: "Financial Calculators - SIP, Lumpsum, FD, RD, EMI & Tax | Stockstrail",
    description:
      "Free financial calculators for Indian investors. Calculate Mutual Fund SIP returns, Lumpsum growth, Fixed Deposit interest, RD maturity, Loan EMI, and Income Tax liability.",
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
      "Free financial calculators for Indian investors. Calculate SIP, Lumpsum, FD, RD, EMI, and Tax.",
    images: ["/og-stockstrail.png"],
  },
};

export default function CalculatorsPage() {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase gradient-text">
              FINANCIAL CALCULATORS
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
              Plan your savings, wealth creation, debt management, and tax liability with accurate, easy-to-use calculators.
            </p>
          </div>

          <Suspense fallback={<div className="h-96 flex items-center justify-center text-white/50">Loading calculators...</div>}>
            <CalculatorWidget initialTab="SIP" navigateOnTabChange={false} />
          </Suspense>

          <CalculatorsPageSEO />
        </div>
      </section>
    </Layout>
  );
}
