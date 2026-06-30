'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function CalculatorsPage() {
  const [activeTab, setActiveTab] = useState('SIP');

  const tabs = ['SIP', 'Lumpsum', 'FD', 'RD', 'EMI', 'Tax'];

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-product-sans font-bold gradient-text mb-6">
              Financial Calculators
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-work-sans">
              Plan your investments smartly, one step at a time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light shadow-[0_0_15px_rgba(0,255,151,0.3)] scale-105'
                    : 'bg-white/5 text-white/70 border border-transparent hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10 min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                {activeTab} Calculator
              </h2>
              <p className="text-white/60 mb-8">
                Interactive {activeTab} calculator coming soon. Use this space to plan your financial goals.
              </p>
              
              <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 text-sm sm:text-base cursor-not-allowed opacity-50">
                Calculate Now
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
