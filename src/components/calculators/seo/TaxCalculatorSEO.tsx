import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

const faqs = [
  {
    question: "How do I choose between the Old and New Tax Regimes?",
    answer: "The New Tax Regime offers lower slab rates and a ₹75,000 standard deduction (for salaried individuals) with zero tax up to ₹12.75 lakh under Budget 2025 proposals. The Old Regime is advantageous if you claim large deductions under Section 80C, 80D, HRA, and home loan interest."
  },
  {
    question: "What is the standard deduction for salaried individuals in FY 2025-26?",
    answer: "Under the New Tax Regime, the standard deduction is ₹75,000 for salaried employees and pensioners. Under the Old Tax Regime, the standard deduction remains ₹50,000."
  },
  {
    question: "What investments qualify for Section 80C deductions?",
    answer: "Qualifying investments include ELSS (Equity Linked Savings Schemes) mutual funds, Public Provident Fund (PPF), Employee Provident Fund (EPF), National Savings Certificate (NSC), 5-year tax-saving FDs, and principal repayment on home loans, up to a maximum limit of ₹1,50,000 per financial year."
  },
  {
    question: "Can business owners and professionals switch regimes annually?",
    answer: "Salaried individuals can choose between regimes each financial year. Individuals with business or professional income can switch to the Old Regime only once in a lifetime, after which they must continue unless business income ceases."
  }
];

export default function TaxCalculatorSEO() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8">
      {/* Header Overview */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Income Tax Planning & Regime Comparison</h2>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
          Choosing the most tax-efficient regime requires an accurate comparison of your gross taxable income against eligible exemptions and chapter VI-A deductions.
        </p>
      </div>

      {/* How to Use This Calculator */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">How to Use the Tax Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              1
            </div>
            <h4 className="font-semibold text-white text-sm">Select AY & Age</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Choose the Assessment Year and your age category to load the relevant tax slabs.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              2
            </div>
            <h4 className="font-semibold text-white text-sm">Annual Income</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Enter your total annual gross income from salary, business, interest, and capital gains.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              3
            </div>
            <h4 className="font-semibold text-white text-sm">Enter Deductions</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Input eligible deductions like Section 80C (up to ₹1.5L), 80D (health insurance), etc.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              4
            </div>
            <h4 className="font-semibold text-white text-sm">Compare Regimes</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Instantly compare net tax liability under the New vs Old Regime side-by-side.
            </p>
          </div>
        </div>
      </div>

      {/* Tax Saving Strategy Cards with Direct Internal Links */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">Popular Tax Optimization Strategies</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white">Save ₹46,800 with ELSS Funds</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light font-bold">Section 80C</span>
            </div>
            <p className="text-white/70 text-xs leading-relaxed">
              ELSS (Equity Linked Savings Scheme) has the shortest lock-in period (3 years) among all 80C instruments and offers equity-grade compounding potential.
            </p>
            <Link
              href="/services/mutual-funds"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stockstrail-green-light hover:underline"
            >
              <span>Explore Top ELSS Mutual Funds →</span>
            </Link>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white">Health Insurance Deductions</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white/90 font-bold">Section 80D</span>
            </div>
            <p className="text-white/70 text-xs leading-relaxed">
              Claim up to ₹25,000 (self & family) plus up to ₹50,000 for senior citizen parents for health insurance premiums paid during the financial year.
            </p>
            <Link
              href="/services/financial-protection"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stockstrail-green-light hover:underline"
            >
              <span>Review Insurance Protection Plans →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Core Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">New Tax Regime Features</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Designed to simplify tax filing with reduced slab rates and standard rebates. Salaried taxpayers benefit from a ₹75,000 standard deduction with minimal documentation overhead.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Old Tax Regime Deductions</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Allows taxpayers with substantial eligible deductions—including <Link href="/services/mutual-funds" className="text-stockstrail-green-light hover:underline">ELSS mutual funds</Link>, <Link href="/services/fixed-deposit" className="text-stockstrail-green-light hover:underline">tax-saving FDs</Link>, health insurance, and home loan interest—to lower their effective taxable income.
          </p>
        </div>
      </div>

      <ServiceFAQSection faqs={faqs} />

      {/* Contextual Internal Linking Navigation */}
      <RelatedCalculatorsNav currentType="tax" />
    </div>
  );
}
