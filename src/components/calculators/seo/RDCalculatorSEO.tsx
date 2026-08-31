import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

const faqs = [
  {
    question: "How is interest calculated on a Recurring Deposit (RD)?",
    answer: "Recurring Deposit interest is calculated using quarterly compounding on each monthly instalment. The earlier instalments earn interest for the full tenure, while later instalments earn interest for their remaining respective months."
  },
  {
    question: "Can I alter the monthly deposit amount in an active RD?",
    answer: "In standard banking practice, the monthly instalment amount and tenure are locked at the time of opening the RD account and cannot be modified midway."
  },
  {
    question: "Is premature withdrawal allowed on Recurring Deposits?",
    answer: "Yes, premature closure is generally permitted by banks and post offices, subject to a nominal penalty (usually 0.5% to 1% reduction in applicable interest rate)."
  },
  {
    question: "How does an RD compare with a Mutual Fund SIP?",
    answer: "An RD provides guaranteed, fixed returns without market risk, whereas an equity or hybrid SIP carries market-linked variability with significantly higher wealth creation potential over long horizons."
  }
];

export default function RDCalculatorSEO() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8">
      {/* Header Overview */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Recurring Deposit (RD) Wealth Planning</h2>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
          A Recurring Deposit offers a disciplined, risk-free savings mechanism for individuals who wish to build a guaranteed corpus through regular monthly contributions at fixed interest rates.
        </p>
      </div>

      {/* How to Use This Calculator */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">How to Use the RD Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              1
            </div>
            <h4 className="font-semibold text-white text-sm">Monthly Deposit</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Enter the fixed amount you commit to depositing every month.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              2
            </div>
            <h4 className="font-semibold text-white text-sm">Interest Rate</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Set the guaranteed annual interest rate offered by the institution.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              3
            </div>
            <h4 className="font-semibold text-white text-sm">Deposit Tenure</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Choose the total tenure in years for your recurring savings plan.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              4
            </div>
            <h4 className="font-semibold text-white text-sm">View Total Corpus</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Instantly view your accumulated savings, total interest earned, and maturity value.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Callout with Internal Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 p-5 space-y-2.5">
          <h4 className="font-bold text-white text-base">Want Higher Returns with SIP?</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            While RDs offer guaranteed 6.5% - 7.5% returns, long-term Mutual Fund SIPs have historically generated 12% - 15% CAGR.
          </p>
          <Link
            href="/calculators/sip"
            className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
          >
            <span>Compare with SIP Calculator →</span>
          </Link>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2.5">
          <h4 className="font-bold text-white text-base">Have a Lumpsum Amount?</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            If you have a one-time capital sum available today, explore fixed deposits with quarterly compounding.
          </p>
          <Link
            href="/calculators/fd"
            className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
          >
            <span>Calculate Fixed Deposit Returns →</span>
          </Link>
        </div>
      </div>

      {/* Core Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Guaranteed Capital Accumulation</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Recurring deposits provide predictable, assured returns backed by commercial banks or post office schemes, making them ideal for short-to-medium term fixed commitments.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Systematic Cash-Flow Management</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            By setting aside a predetermined monthly instalment, investors can plan for upcoming planned expenses. Explore our <Link href="/mutual-funds" className="text-stockstrail-green-light hover:underline">Mutual Funds solutions</Link> for wealth creation.
          </p>
        </div>
      </div>

      <ServiceFAQSection faqs={faqs} />

      {/* Cross-linking navigation */}
      <RelatedCalculatorsNav currentType="rd" />
    </div>
  );
}
