import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const faqs = [
  {
    question: "How is FD interest calculated?",
    answer: "FD interest is typically compounded quarterly. The calculator factors in your deposit, rate, tenure, and compounding frequency."
  },
  {
    question: "Can I use the Stockstrail FD Calculator for a Senior Citizen FD?",
    answer: "Yes, simply enter the higher Senior Citizen interest rate to see the adjusted maturity value."
  },
  {
    question: "What's the difference between cumulative and non-cumulative FD?",
    answer: "Cumulative adds interest to the principal for payout at maturity. Non-cumulative pays out interest periodically."
  },
  {
    question: "Is the Stockstrail FD Calculator free to use?",
    answer: "Yes, it is completely free and provides instant results without documentation."
  }
];

export default function FDCalculatorSEO() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/80">
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4 leading-tight">Stockstrail FD Calculator</h1>
        <p className="leading-relaxed mb-4 text-lg">
          Instantly calculate your Fixed Deposit (FD) maturity amount before you book.
        </p>
        <p className="leading-relaxed text-lg">
          Remove the guesswork from FD planning. Compare banks, tenures, and payout options effortlessly.
        </p>
        <div className="mt-6 flex">
          <Link href="/calculators" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          
            Use the Stockstrail FD Calculator
          
        </Link>
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">What is an FD Calculator?</h2>
        <p className="leading-relaxed mb-4 text-lg">
          A Fixed Deposit provides a guaranteed interest rate on a lump sum over a fixed tenure. 
        </p>
        <p className="leading-relaxed text-lg">
          This calculator estimates your exact maturity value instantly, factoring in compounding frequency, helping you choose the best plan.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter your deposit amount.</li>
          <li>Enter the interest rate offered.</li>
          <li>Enter your tenure.</li>
          <li>Choose cumulative or non-cumulative payout.</li>
          <li>Instantly see your maturity amount and total interest.</li>
        </ol>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h3 className="text-xl font-semibold text-white/90 mb-4">Example</h3>
        <p className="leading-relaxed mb-4 text-lg">
          Depositing ₹1,00,000 for 3 years at a 7.5% cumulative rate yields approximately ₹1,24,000 at maturity.
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90 p-4 rounded-lg">
          <span className="mr-2">⚠️</span><strong>Note:</strong> This is an estimate. Actual values depend on the bank's specific compounding method.
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">Benefits & Who Should Use It</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
          <li>Compare rates and tenures across different banks.</li>
          <li>Plan effectively between cumulative and non-cumulative payouts.</li>
          <li>Calculate returns for Senior Citizen or Tax-Saving FDs.</li>
        </ul>
        <p className="text-lg">
          Ideal for anyone booking a new Fixed Deposit, senior citizens comparing payout options, or investors seeking safe, guaranteed returns.
        </p>
      </div>

      <ServiceFAQSection faqs={faqs} />
    </div>
  );
}
