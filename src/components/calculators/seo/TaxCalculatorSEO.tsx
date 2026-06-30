import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

export default function TaxCalculatorSEO() {
  const faqs = [
    {
      question: "Should I choose the old or new tax regime?",
      answer: "It depends on your deductions. Our calculator compares both regimes instantly so you can see which minimizes your tax."
    },
    {
      question: "Can it account for Section 80C investments?",
      answer: "Yes, enter your Section 80C investments like FDs or ELSS to see their impact under the old regime."
    },
    {
      question: "Is the calculator updated with the latest tax rules?",
      answer: "Yes, we apply the latest applicable income tax slabs and government rules."
    },
    {
      question: "Is the Stockstrail Tax Calculator free to use?",
      answer: "Yes, it is completely free and requires no documentation."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 text-white/80 space-y-6 leading-relaxed">
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4">Stockstrail Tax Calculator</h1>
        <p className="mb-4">
          Confused about your income tax? Instantly estimate your liability and see whether the old or new regime suits you best.
        </p>
        <p className="mb-6">
          Input your annual income and deductions to get your estimated tax payable in seconds. Plan your finances and tax-saving investments ahead of time.
        </p>
        <Link href="/calculators" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          
          Use the Tax Calculator
        
        </Link>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">What is a Tax Calculator?</h2>
        <p className="mb-4">
          It estimates your tax owed based on income, deductions, and regime. The old regime offers deductions like 80C, while the new regime offers lower slab rates.
        </p>
        <p>
          Our calculator uses the latest slabs so you can compare both regimes side by side with current regulations.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-2 ml-2 mb-6">
          <li>Enter total annual income from all sources.</li>
          <li>Enter eligible deductions (e.g., Section 80C, 80D, home loan interest).</li>
          <li>Choose a tax regime to compare outcomes.</li>
          <li>View your estimated tax payable instantly.</li>
        </ol>

        <h3 className="text-xl font-semibold text-white/90 mb-2">Example</h3>
        <p className="mb-4">
          Earn ₹10,00,000 annually? With ₹1,50,000 in 80C and ₹25,000 in 80D, instantly compare liabilities to pick the optimal regime.
        </p>
        <p className="bg-yellow-500/10 text-yellow-200/90 p-4 rounded-lg border border-yellow-500/20 text-sm">
          ⚠️ Note: This is an illustrative estimate. Actual liability depends on complete income details and current tax rules.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Instantly compare old and new tax regimes.</li>
          <li>See how tax-saving investments reduce your outgo.</li>
          <li>Enable better year-round financial planning.</li>
          <li>Completely free and easy to use.</li>
        </ul>
      </div>

      <ServiceFAQSection faqs={faqs} />
    </div>
  );
}
