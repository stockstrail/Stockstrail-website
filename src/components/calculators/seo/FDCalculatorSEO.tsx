import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

const faqs = [
  {
    question: "How is Fixed Deposit interest compounded in India?",
    answer: "Most commercial banks and corporate issuers compound fixed deposit interest on a quarterly basis. The interest earned in each quarter is added to the principal for subsequent compounding until maturity."
  },
  {
    question: "What is the difference between Cumulative and Non-Cumulative FDs?",
    answer: "Under a Cumulative FD, interest is reinvested quarterly and paid in full upon maturity. Under a Non-Cumulative FD, interest is disbursed periodically (monthly, quarterly, or annually) to provide regular cash flow."
  },
  {
    question: "Are senior citizens entitled to higher Fixed Deposit interest rates?",
    answer: "Yes, most Indian banks and AAA-rated corporate issuers offer an additional interest rate benefit of 0.25% to 0.75% per annum for senior citizens."
  },
  {
    question: "What is the tax treatment of Fixed Deposit interest?",
    answer: "Interest earned on Fixed Deposits is fully taxable as per your individual income tax slab under 'Income from Other Sources', subject to TDS deductions as per Income Tax regulations."
  }
];

export default function FDCalculatorSEO() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8">
      {/* Header Overview */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Fixed Deposit (FD) Maturity & Growth</h2>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
          Fixed Deposits remain one of India&apos;s most trusted capital preservation and guaranteed return vehicles. Understanding how compounding intervals affect your final maturity payout enables smarter allocation across tenures and issuers.
        </p>
      </div>

      {/* How to Use This Calculator */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">How to Use the FD Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              1
            </div>
            <h4 className="font-semibold text-white text-sm">Deposit Amount</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Enter the lump sum capital you intend to lock into the fixed deposit.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              2
            </div>
            <h4 className="font-semibold text-white text-sm">Interest Rate</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Set the contracted annual interest rate offered by your bank or corporate issuer.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              3
            </div>
            <h4 className="font-semibold text-white text-sm">Deposit Tenure</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Select the lock-in duration in years to match your liquidity requirements.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              4
            </div>
            <h4 className="font-semibold text-white text-sm">Check Maturity</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              View your guaranteed interest earnings and final maturity payout with quarterly compounding.
            </p>
          </div>
        </div>
      </div>

      {/* Corporate FD Opportunities Link */}
      <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 p-5 space-y-2.5">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-white text-base">Explore High-Yield Corporate Fixed Deposits</h4>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light">
            Up to 9.1% P.A.
          </span>
        </div>
        <p className="text-white/70 text-xs leading-relaxed">
          Earn higher guaranteed returns than standard savings accounts and traditional bank FDs with ICRA & CRISIL AAA-rated corporate deposits.
        </p>
        <Link
          href="/fixed-deposit"
          className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
        >
          <span>View Curated Corporate FD Plans →</span>
        </Link>
      </div>

      {/* Core Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Quarterly Compounding Advantage</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Because interest is calculated and added to the principal quarterly, the effective annual yield on a fixed deposit is slightly higher than the nominal rate. Check the <Link href="/calculators/tax" className="text-stockstrail-green-light hover:underline">Tax Calculator</Link> to estimate post-tax returns.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Bank vs Corporate Deposits</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            High-rated corporate deposits offer higher yields than traditional bank FDs. If you prefer monthly savings instead of a one-time deposit, compare with our <Link href="/calculators/rd" className="text-stockstrail-green-light hover:underline">RD Calculator</Link>.
          </p>
        </div>
      </div>

      <ServiceFAQSection faqs={faqs} />

      {/* Cross-linking navigation */}
      <RelatedCalculatorsNav currentType="fd" />
    </div>
  );
}
