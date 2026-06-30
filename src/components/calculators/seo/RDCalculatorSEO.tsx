import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

export default function RDCalculatorSEO() {
  const faqs = [
    {
      question: "How is interest calculated on a Recurring Deposit?",
      answer: "Each monthly instalment earns compound interest for its remaining tenure. Our calculator adds these together to show your total maturity value."
    },
    {
      question: "What's the difference between an RD and a Fixed Deposit?",
      answer: "An FD requires a one-time lump sum, while an RD lets you invest a fixed amount every month."
    },
    {
      question: "Is the Stockstrail RD Calculator free to use?",
      answer: "Yes, it is completely free and shows instant results."
    },
    {
      question: "Can I increase my monthly RD amount later?",
      answer: "Most banks fix the monthly instalment amount for the full tenure. Plan your amount carefully upfront."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 text-white/80 space-y-6 leading-relaxed">
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4">Stockstrail RD Calculator</h1>
        <p className="mb-4">
          Estimate your Recurring Deposit (RD) maturity value instantly. Build a disciplined saving habit with full clarity on your future returns.
        </p>
        <p className="mb-6">
          Input your monthly deposit, interest rate, and tenure to see your projected amount in seconds.
        </p>
        <Link href="/calculators" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          
          Use the RD Calculator
        
        </Link>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">What is an RD Calculator?</h2>
        <p className="mb-4">
          A Recurring Deposit lets you invest a fixed amount monthly, earning FD-like interest. It's the simplest way to build regular savings without a lump sum.
        </p>
        <p>
          Our calculator estimates your maturity value by factoring in your instalment, interest rate, and tenure.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-2 ml-2 mb-6">
          <li>Enter your monthly deposit amount.</li>
          <li>Enter the bank's interest rate.</li>
          <li>Enter your tenure in months.</li>
          <li>View your estimated maturity amount and total interest instantly.</li>
        </ol>
        
        <h3 className="text-xl font-semibold text-white/90 mb-2">Example</h3>
        <p className="mb-4">
          Depositing ₹2,000 monthly for 3 years at 7% grows your ₹72,000 investment to roughly ₹80,500.
        </p>
        <p className="bg-yellow-500/10 text-yellow-200/90 p-4 rounded-lg border border-yellow-500/20 text-sm">
          ⚠️ Note: Actual RD maturity values depend on your bank's specific compounding frequency.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>Instantly estimates maturity amount and interest earned.</li>
          <li>Helps set realistic monthly saving targets.</li>
          <li>Encourages disciplined saving without large upfront capital.</li>
          <li>Completely free and instant.</li>
        </ul>
      </div>

      <ServiceFAQSection faqs={faqs} />
    </div>
  );
}
