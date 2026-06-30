import React from 'react';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const faqs = [
  {
    question: "What factors affect my EMI amount?",
    answer: "Your EMI depends on the loan amount, the interest rate, and the tenure."
  },
  {
    question: "Does a longer loan tenure mean a lower EMI?",
    answer: "Yes, a longer tenure lowers your monthly EMI but increases the total interest paid over the life of the loan."
  },
  {
    question: "Can I use the Stockstrail EMI Calculator for a business loan?",
    answer: "Yes, it works for personal, home, and business loans. Just enter the appropriate amount, rate, and tenure."
  },
  {
    question: "Is the Stockstrail EMI Calculator free to use?",
    answer: "Yes, it is completely free and provides instant results without requiring documentation."
  }
];

const EMICalculatorSEO: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/80">
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4 leading-tight">Stockstrail EMI Calculator</h1>
        <p className="leading-relaxed mb-4 text-lg">
          Instantly calculate your Equated Monthly Installment (EMI) for home, personal, or business loans.
        </p>
        <p className="leading-relaxed text-lg">
          Plan your budget before applying by seeing the exact monthly instalment and total interest payable.
        </p>
        <div className="mt-6 flex"><button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          Use the Stockstrail EMI Calculator
        </button></div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">What is an EMI Calculator?</h2>
        <p className="leading-relaxed mb-4 text-lg">
          An EMI is the fixed amount paid monthly to repay a loan, covering principal and interest. 
        </p>
        <p className="leading-relaxed text-lg">
          Our calculator automates the math, helping you compare loan options and find a repayment plan that fits your budget.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter your loan amount.</li>
          <li>Enter the annual interest rate.</li>
          <li>Enter your loan tenure.</li>
          <li>Instantly view your EMI and total interest payable.</li>
        </ol>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h3 className="text-xl font-semibold text-white/90 mb-4">Example</h3>
        <p className="leading-relaxed mb-4 text-lg">
          For a ₹20,00,000 loan at 9% interest over 20 years, your EMI is approximately ₹18,000 per month, with total interest around ₹23.2 lakh.
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90 p-4 rounded-lg">
          <span className="mr-2">⚠️</span><strong>Note:</strong> This is an estimate. Actual EMIs depend on the lender's specific terms.
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">Benefits & Who Should Use It</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
          <li>Instantly calculates your monthly EMI.</li>
          <li>Shows total interest payable to reveal true borrowing costs.</li>
          <li>Helps compare loan amounts, rates, and tenures effortlessly.</li>
        </ul>
        <p className="text-lg">
          Ideal for anyone planning to take a home, personal, or business loan and wanting to budget their monthly outgo.
        </p>
      </div>

      <ServiceFAQSection faqs={faqs} />
    </div>
  );
};

export default EMICalculatorSEO;
