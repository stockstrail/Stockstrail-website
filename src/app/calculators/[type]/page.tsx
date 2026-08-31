import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import CalculatorWidget, { Tab } from "@/components/calculators/CalculatorWidget";
import DedicatedCalculatorHero, { DedicatedCalcType } from "@/components/calculators/DedicatedCalculatorHero";
import SIPCalculatorSEO from "@/components/calculators/seo/SIPCalculatorSEO";
import FDCalculatorSEO from "@/components/calculators/seo/FDCalculatorSEO";
import LumpsumCalculatorSEO from "@/components/calculators/seo/LumpsumCalculatorSEO";
import RDCalculatorSEO from "@/components/calculators/seo/RDCalculatorSEO";
import EMICalculatorSEO from "@/components/calculators/seo/EMICalculatorSEO";
import TaxCalculatorSEO from "@/components/calculators/seo/TaxCalculatorSEO";

const VALID_TYPES = ["sip", "fd", "lumpsum", "rd", "emi", "tax"] as const;
type CalculatorType = (typeof VALID_TYPES)[number];

const TYPE_METADATA: Record<
  CalculatorType,
  {
    tab: Tab;
    title: string;
    description: string;
    keywords: string;
  }
> = {
  sip: {
    tab: "SIP",
    title: "SIP Calculator - Calculate Mutual Fund SIP Returns Online | Stockstrail",
    description:
      "Estimate your Systematic Investment Plan (SIP) returns with Stockstrail's free SIP calculator. Plan your wealth creation with accurate compound interest projections.",
    keywords:
      "SIP calculator, mutual fund SIP calculator, calculate SIP returns, systematic investment plan calculator, Stockstrail SIP",
  },
  fd: {
    tab: "FD",
    title: "Fixed Deposit (FD) Calculator - Calculate FD Maturity & Interest | Stockstrail",
    description:
      "Calculate your Fixed Deposit (FD) interest earnings and maturity amount accurately with compounding options. Compare bank and corporate FD returns.",
    keywords:
      "FD calculator, fixed deposit calculator, calculate FD interest, FD maturity calculator, bank FD returns",
  },
  lumpsum: {
    tab: "LUMPSUM",
    title: "Lumpsum Calculator - Calculate One-Time Mutual Fund Returns | Stockstrail",
    description:
      "Estimate the future value of your one-time lumpsum mutual fund investment with Stockstrail's free lumpsum return calculator.",
    keywords:
      "lumpsum calculator, one time investment calculator, mutual fund lumpsum returns, lumpsum wealth calculator",
  },
  rd: {
    tab: "RD",
    title: "Recurring Deposit (RD) Calculator - Calculate RD Maturity Online | Stockstrail",
    description:
      "Calculate your Recurring Deposit (RD) maturity amount and interest earned with monthly compounding using Stockstrail's RD calculator.",
    keywords:
      "RD calculator, recurring deposit calculator, calculate RD interest, RD maturity calculator",
  },
  emi: {
    tab: "EMI",
    title: "Loan EMI Calculator - Home, Car, Business & Personal Loans | Stockstrail",
    description:
      "Calculate your monthly loan EMI, total interest payable, and amortization schedule for home loans, business loans, and loans against mutual funds.",
    keywords:
      "EMI calculator, loan EMI calculator, home loan EMI, personal loan EMI, calculate loan instalment",
  },
  tax: {
    tab: "TAX",
    title: "Income Tax Calculator FY 2025-26 & 2026-27 - Old vs New Regime | Stockstrail",
    description:
      "Compare Old vs New Tax Regime under Budget 2024 and 2025 slabs. Calculate tax liability, 87A rebate, standard deduction, and HRA exemption.",
    keywords:
      "income tax calculator, old vs new regime calculator, calculate income tax india, budget 2025 tax calculator, section 87a rebate",
  },
};

export function generateStaticParams() {
  return VALID_TYPES.map((type) => ({ type }));
}

interface Props {
  params: Promise<{ type: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const normalizedType = type.toLowerCase() as CalculatorType;
  const meta = TYPE_METADATA[normalizedType];

  if (!meta) {
    return {
      title: "Calculator Not Found | Stockstrail",
    };
  }

  const url = `https://www.stockstrail.in/calculators/${normalizedType}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url,
      siteName: "Stockstrail",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-stockstrail.png",
          width: 1100,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/og-stockstrail.png"],
    },
  };
}

export default async function DedicatedCalculatorPage({ params }: Props) {
  const { type } = await params;
  const normalizedType = type.toLowerCase() as CalculatorType;
  const config = TYPE_METADATA[normalizedType];

  if (!config) {
    notFound();
  }

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Unique, Specialized Hero for each Calculator */}
          <DedicatedCalculatorHero type={normalizedType as DedicatedCalcType} />

          {/* Interactive Calculator Engine */}
          <CalculatorWidget initialTab={config.tab} navigateOnTabChange={true} />

          {/* Dedicated SEO & Guidance Section */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 text-white/80">
            {normalizedType === "sip" && <SIPCalculatorSEO />}
            {normalizedType === "fd" && <FDCalculatorSEO />}
            {normalizedType === "lumpsum" && <LumpsumCalculatorSEO />}
            {normalizedType === "rd" && <RDCalculatorSEO />}
            {normalizedType === "emi" && <EMICalculatorSEO />}
            {normalizedType === "tax" && <TaxCalculatorSEO />}
          </div>
        </div>
      </section>
    </Layout>
  );
}
