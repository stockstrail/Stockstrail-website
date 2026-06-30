'use client';
import React from 'react';

const steps = [
  {
    step: 'Step 1',
    title: 'We listen',
    desc: 'A genuine, no-pressure conversation about your income, goals, responsibilities, and timeline.'
  },
  {
    step: 'Step 2',
    title: 'We assess your risk profile',
    desc: 'Our 11-question risk assessment tool identifies your risk category and recommended asset allocation instantly.'
  },
  {
    step: 'Step 3',
    title: 'We build your plan',
    desc: 'A personalised, jargon-free financial strategy covering investments, insurance, and liquidity.'
  },
  {
    step: 'Step 4',
    title: 'We execute together',
    desc: 'We handle the documentation, onboarding, and account setup across Mutual Funds, Insurance, FD, Loans, and Demat.'
  },
  {
    step: 'Step 5',
    title: 'We review and grow',
    desc: 'Regular portfolio reviews to keep your plan aligned with your evolving goals and market conditions.'
  }
];

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-in-from-top">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Our Step-by-Step </span>
            <span className="gradient-text">Financial Planning Process</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our process is simple, transparent, and completely client-driven. Here is how your financial planning journey with Stockstrail works.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/50 hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 text-white group-hover:bg-stockstrail-green-light/10 group-hover:text-stockstrail-green-light rounded-full flex items-center justify-center font-product-sans text-xl mb-6 transition-colors duration-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-product-sans text-white mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
