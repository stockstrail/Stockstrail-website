import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

const faqs = [
  {
    question: "When is a Lumpsum investment preferred over a SIP?",
    answer: "A lumpsum investment is ideal when you have surplus liquidity (such as annual bonuses, property sales, or matured investments) and a medium to long-term horizon (5+ years) to absorb short-term market cycles."
  },
  {
    question: "Can I use a Systematic Transfer Plan (STP) with a lumpsum amount?",
    answer: "Yes. Many investors park a lumpsum in a low-volatility liquid or arbitrage fund and systematically transfer fixed amounts weekly or monthly into equity funds to benefit from rupee-cost averaging."
  },
  {
    question: "How does compounding impact long-term lumpsum investments?",
    answer: "Because the entire capital starts compounding from day one, lumpsum investments can generate substantial capital appreciation over long tenures compared to staggered contributions."
  },
  {
    question: "What is the tax implication on lumpsum mutual fund redemptions?",
    answer: "For equity mutual funds held for over 12 months, long-term capital gains (LTCG) above ₹1.25 lakh per financial year are taxed at 12.5% (as per Budget 2024 amendments). Short-term gains (under 12 months) are taxed at 20%."
  }
];

const LumpsumCalculatorSEO: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8">
      {/* Header Overview */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">One-Time Lumpsum Wealth Creation</h2>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
          Investing a one-time capital amount into mutual funds allows your entire principal to participate in market compounding from day one. Proper asset allocation and tenure selection are essential to maximizing risk-adjusted returns.
        </p>
      </div>

      {/* How to Use This Calculator */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">How to Use the Lumpsum Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              1
            </div>
            <h4 className="font-semibold text-white text-sm">Principal Amount</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Enter your one-time available capital or surplus funds to be deployed.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              2
            </div>
            <h4 className="font-semibold text-white text-sm">Expected Return</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Set the estimated annual compounding rate based on your chosen fund category.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              3
            </div>
            <h4 className="font-semibold text-white text-sm">Investment Tenure</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Select the holding duration in years to give your capital maximum time to compound.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              4
            </div>
            <h4 className="font-semibold text-white text-sm">Review Multiplier</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Analyze your total expected maturity value, wealth multiplier, and annual growth curve.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Options with Internal Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 p-5 space-y-2.5">
          <h4 className="font-bold text-white text-base">Direct Mutual Fund Allocation</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            Invest directly with leading AMCs across flexi-cap, multi-asset, and hybrid portfolios with zero distributor charges.
          </p>
          <Link
            href="/mutual-funds"
            className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
          >
            <span>Explore Mutual Fund Solutions →</span>
          </Link>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2.5">
          <h4 className="font-bold text-white text-base">Prefer Fixed Returns?</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            Lock in guaranteed yields up to 9.1% p.a. with AAA-rated corporate fixed deposits from Bajaj Finance, Mahindra, and HDFC.
          </p>
          <Link
            href="/fixed-deposit"
            className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
          >
            <span>Explore High-Yield FDs →</span>
          </Link>
        </div>
      </div>

      {/* Core Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Full-Tenure Compounding</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Unlike monthly instalments where later contributions compound for shorter durations, a lumpsum investment gives 100% of your capital the maximum possible time to compound. You can also evaluate staggered contributions with our <Link href="/calculators/sip" className="text-stockstrail-green-light hover:underline">SIP Calculator</Link>.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Strategic Horizon Selection</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            For equity-oriented lumpsum investments, maintaining an investment horizon of 5 to 10+ years helps smooth out cyclical market volatility. Take our <Link href="/check-risk-profile" className="text-stockstrail-green-light hover:underline">Risk Profile Quiz</Link> to check your asset allocation.
          </p>
        </div>
      </div>

      <ServiceFAQSection faqs={faqs} />

      {/* Cross-linking navigation */}
      <RelatedCalculatorsNav currentType="lumpsum" />
    </div>
  );
};

export default LumpsumCalculatorSEO;
