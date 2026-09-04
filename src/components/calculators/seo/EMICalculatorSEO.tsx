import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

const faqs = [
  {
    question: "How is an Equated Monthly Installment (EMI) calculated?",
    answer: "EMI is calculated using the reducing balance method based on the principal loan amount, monthly interest rate, and total loan tenure in months. Each payment covers both interest and principal repayment."
  },
  {
    question: "Why does the interest component decrease over the loan tenure?",
    answer: "As you make monthly EMI payments, the outstanding principal reduces. Since interest is charged only on the remaining balance, the interest portion of your EMI shrinks over time while the principal repayment portion expands."
  },
  {
    question: "How does prepaying a loan affect total interest outgo?",
    answer: "Making partial or full prepayments directly reduces your outstanding loan principal, significantly cutting down the total interest payable and shortening your effective loan tenure."
  },
  {
    question: "What is a Loan Against Mutual Funds (LAMF)?",
    answer: "LAMF allows investors to secure low-interest overdraft or loan limits against their mutual fund units without selling them, maintaining continuous market compounding while accessing urgent liquidity."
  }
];

export default function EMICalculatorSEO() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8">
      {/* Header Overview */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Loan Planning & Amortization Analysis</h2>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
          An Equated Monthly Installment represents a fixed payment made by a borrower to a lender each month. Evaluating your EMI and total interest outgo beforehand ensures sound debt management and cash-flow alignment.
        </p>
      </div>

      {/* How to Use This Calculator */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">How to Use the Loan EMI Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              1
            </div>
            <h4 className="font-semibold text-white text-sm">Loan Amount</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Enter the total amount you plan to borrow for home, business, or LAMF.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              2
            </div>
            <h4 className="font-semibold text-white text-sm">Interest Rate (P.A.)</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Select your loan interest rate (or click presets: 8.5% Home, 9.5% LAMF, etc.).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              3
            </div>
            <h4 className="font-semibold text-white text-sm">Loan Tenure</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Choose your repayment tenure in years to optimize your monthly cash outgo.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              4
            </div>
            <h4 className="font-semibold text-white text-sm">Review Breakdown</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Inspect your monthly EMI, Payment Split, and full year-by-year Amortization Table.
            </p>
          </div>
        </div>
      </div>

      {/* Smart Borrowing Alternative Link */}
      <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 p-5 space-y-2.5">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-white text-base">Need Cash? Don&apos;t Sell Your Mutual Funds!</h4>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light">
            Starting at 9.5% P.A.
          </span>
        </div>
        <p className="text-white/70 text-xs leading-relaxed">
          Unlock instant liquidity in hours with a Loan Against Mutual Funds (LAMF). Pay interest only on what you withdraw while your portfolio keeps growing.
        </p>
        <Link
          href="/services/loan"
          className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
        >
          <span>Explore Loan Against Mutual Funds (LAMF) →</span>
        </Link>
      </div>

      {/* Core Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Tenure vs Interest Outgo</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            A longer loan tenure reduces your monthly EMI burden but substantially increases the cumulative interest paid over the life of the loan. Choosing an optimal balance is key to debt efficiency. Also ensure your family is protected with a <Link href="/services/financial-protection" className="text-stockstrail-green-light hover:underline">Term Life Insurance Plan</Link> covering your loan liability.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2">
          <h3 className="text-lg font-semibold text-white">Amortization Trajectory</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Understanding the amortization schedule helps you track how much of your monthly EMI goes towards principal reduction versus interest cost across each year of the loan. Plan to build wealth with <Link href="/services/mutual-funds" className="text-stockstrail-green-light hover:underline">Mutual Funds</Link> to offset loan costs.
          </p>
        </div>
      </div>

      <ServiceFAQSection faqs={faqs} />

      {/* Cross-linking navigation */}
      <RelatedCalculatorsNav currentType="emi" />
    </div>
  );
}
