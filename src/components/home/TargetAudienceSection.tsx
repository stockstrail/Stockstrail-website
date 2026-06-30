'use client';
import React from 'react';

const audiences = [
  {
    title: 'Young professionals (22–35)',
    desc: 'Start early, build compounding wealth, and get your insurance in place before life gets complicated.'
  },
  {
    title: 'Families and parents',
    desc: 'Plan for your children\'s education, your home purchase, and your retirement — all in one structured, goal-based plan.'
  },
  {
    title: 'Government employees',
    desc: 'Supplement your pension with smart investments in Mutual Funds and FDs, and secure your family with comprehensive insurance.'
  },
  {
    title: 'Business owners and self-employed professionals',
    desc: 'Access business loans, plan for irregular income, and build a wealth corpus that gives you financial independence.'
  },
  {
    title: 'First-time investors',
    desc: 'We make the beginning simple, safe, and free of intimidating jargon — so you can start with confidence.'
  },
  {
    title: 'Experienced investors',
    desc: 'Already investing? We review your portfolio, identify gaps, and optimise your strategy for better long-term outcomes.'
  }
];

const TargetAudienceSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-stockstrail-bg-light/10">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-in-from-top">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Who We Serve </span>
            <span className="gradient-text">Across North India</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our clients span a wide range of life stages and professions. Stockstrail is the right partner for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/30 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-product-sans text-stockstrail-green-light mb-3">{audience.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm">{audience.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
