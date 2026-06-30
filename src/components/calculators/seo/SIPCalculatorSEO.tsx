import React from 'react';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const faqs = [
  {
    question: "How accurate is the Stockstrail SIP Calculator?",
    answer: "It gives an estimate based on your inputs. Actual returns depend on market performance."
  },
  {
    question: "Can I use the Stockstrail SIP Calculator for free?",
    answer: "Yes, it is completely free to use with no registration required."
  },
  {
    question: "What is a good expected return rate to use?",
    answer: "Historically, long-term equity Mutual Funds have averaged between 10% and 12%, but this varies based on market conditions."
  },
  {
    question: "Should I choose SIP or Lumpsum investment?",
    answer: "It depends on your cash flow. SIPs are great for regular monthly investing, while Lumpsum is ideal for one-time investments."
  }
];

const SIPCalculatorSEO: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white/80">
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-4 leading-tight">Stockstrail SIP Calculator</h1>
        <p className="leading-relaxed mb-4 text-lg">
          Estimate your Systematic Investment Plan (SIP) returns instantly. Plan your Mutual Funds journey with confidence.
        </p>
        <p className="leading-relaxed text-lg">
          Input your monthly investment, expected return, and duration to see your estimated maturity value without the manual math.
        </p>
        <div className="mt-6 flex"><button className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
          Use the Stockstrail SIP Calculator
        </button></div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">What is a SIP Calculator?</h2>
        <p className="leading-relaxed mb-4 text-lg">
          A SIP lets you invest a fixed amount in Mutual Funds every month. Over time, this builds wealth through compounding and rupee-cost averaging.
        </p>
        <p className="leading-relaxed text-lg">
          This calculator estimates what your investments could grow into by maturity, removing guesswork from financial planning.
        </p>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg">
          <li>Enter your monthly SIP amount.</li>
          <li>Enter your expected annual rate of return.</li>
          <li>Enter your investment duration.</li>
          <li>Instantly see your estimated maturity amount.</li>
        </ol>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h3 className="text-xl font-semibold text-white/90 mb-4">Example</h3>
        <p className="leading-relaxed mb-4 text-lg">
          Investing ₹5,000 monthly for 10 years at a 12% annual return turns your ₹6,00,000 investment into approximately ₹11.6 lakh.
        </p>
        <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-200/90 p-4 rounded-lg">
          <span className="mr-2">⚠️</span><strong>Note:</strong> This is an estimate. Actual returns depend on market performance.
        </div>
      </div>

      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
        <h2 className="text-2xl font-semibold text-white/90 mb-4">Benefits & Who Should Use It</h2>
        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
          <li>Instantly estimates maturity value without manual calculation.</li>
          <li>Compare different SIP amounts, tenures, and return rates.</li>
          <li>Simple long-term financial planning for anyone.</li>
        </ul>
        <p className="text-lg">
          Ideal for salaried individuals, young professionals, and parents planning long-term wealth creation or future financial goals.
        </p>
      </div>

      <ServiceFAQSection faqs={faqs} />
    </div>
  );
};

export default SIPCalculatorSEO;
