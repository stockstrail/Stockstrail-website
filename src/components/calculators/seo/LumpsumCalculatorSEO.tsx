import React from 'react';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const faqs = [
  {
    question: "How is a Lumpsum investment different from a SIP?",
    answer: "Lumpsum means investing your entire amount at once, while SIP spreads it across monthly instalments."
  },
  {
    question: "How accurate is the Stockstrail Lumpsum Calculator?",
    answer: "It provides an estimate based on your inputs. Actual returns depend on market performance."
  },
  {
    question: "Is a Lumpsum investment riskier than a Fixed Deposit?",
    answer: "Yes, since Lumpsum investments go into market-linked Mutual Funds, returns aren't guaranteed like an FD."
  },
  {
    question: "Can I use the Stockstrail Lumpsum Calculator for free?",
    answer: "Yes, the calculator is completely free to use and provides instant results."
  }
];

const LumpsumCalculatorSEO: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/80">
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4 leading-tight">Stockstrail Lumpsum Calculator</h1>
        <p className="leading-relaxed mb-4 text-lg">
          Estimate the future value of a one-time investment in Mutual Funds instantly.
        </p>
        <p className="leading-relaxed text-lg">
          Input your investment amount, expected return, and duration to project your maturity value and plan your wealth-building journey.
        </p>
        <div className="mt-6 flex"><button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          Use the Stockstrail Lumpsum Calculator
        </button></div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">What is a Lumpsum Calculator?</h2>
        <p className="leading-relaxed mb-4 text-lg">
          A lumpsum investment means committing your entire amount at once. This calculator estimates its future value based on expected return and time invested.
        </p>
        <p className="leading-relaxed text-lg">
          It gives you a clear picture of compound growth before you commit your funds.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter your one-time investment amount.</li>
          <li>Enter your expected annual rate of return.</li>
          <li>Enter your investment duration in years.</li>
          <li>Instantly see your estimated maturity value.</li>
        </ol>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h3 className="text-xl font-semibold text-white/90 mb-4">Example</h3>
        <p className="leading-relaxed mb-4 text-lg">
          A one-time investment of ₹1,00,000 for 10 years at a 12% expected annual return could grow to approximately ₹3.1 lakh.
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90 p-4 rounded-lg">
          <span className="mr-2">⚠️</span><strong>Note:</strong> This is an estimate. Actual returns depend on market conditions.
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">Lumpsum vs SIP</h2>
        <div className="overflow-x-auto rounded-lg border border-white/10 mt-4">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white/5">
              <tr>
                <th className="border-b border-white/10 py-3 px-4 font-semibold text-white/90">Feature</th>
                <th className="border-b border-white/10 py-3 px-4 font-semibold text-white/90">Lumpsum</th>
                <th className="border-b border-white/10 py-3 px-4 font-semibold text-white/90">SIP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 text-white/80">Style</td>
                <td className="py-3 px-4 text-white/80">One-time</td>
                <td className="py-3 px-4 text-white/80">Fixed monthly</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 text-white/80">Best for</td>
                <td className="py-3 px-4 text-white/80">Surplus funds</td>
                <td className="py-3 px-4 text-white/80">Regular income</td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4 text-white/80">Risk</td>
                <td className="py-3 px-4 text-white/80">Higher</td>
                <td className="py-3 px-4 text-white/80">Lower (averaging)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">Benefits & Who Should Use It</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
          <li>Compare investment amounts, tenures, and return rates.</li>
          <li>Plan efficiently with bonuses, inheritances, or matured FD amounts.</li>
          <li>Get a quick, no-obligation projection.</li>
        </ul>
        <p className="text-lg">
          Ideal for anyone with a surplus of funds available immediately, looking to maximize long-term compound growth.
        </p>
      </div>

      <ServiceFAQSection faqs={faqs} />
    </div>
  );
};

export default LumpsumCalculatorSEO;
