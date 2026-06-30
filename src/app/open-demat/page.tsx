import React from 'react';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';
import Image from 'next/image';

const brokers = [
  { key: 'angelone', name: 'AngelOne', href: 'https://angelone.in' },
  { key: 'zerodha', name: 'Zerodha', href: 'https://zerodha.com' },
  { key: 'groww', name: 'Groww', href: 'https://groww.in' },
  { key: 'upstox', name: 'Upstox', href: 'https://upstox.com' },
];

export default function OpenDematPage() {
  return (
    <Layout>
      <SEO 
        title="Open Demat Account | Stockstrail"
        description="Open your free Demat account with Stockstrail today and start investing in stocks, IPOs, and mutual funds seamlessly."
      />
      
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[60vh] flex flex-col justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stockstrail-green-light/10 text-stockstrail-green-light font-medium text-sm mb-8 border border-stockstrail-green-light/20">
            <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
            Start Your Investment Journey
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-product-sans font-bold gradient-text mb-6 leading-tight">
            Open a Demat Account in Minutes
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-work-sans mb-10 leading-relaxed">
            Choose from India's top brokers like AngelOne, Zerodha, and Groww. We provide end-to-end guidance to set up your account completely free of cost.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#brokers" className="inline-flex items-center justify-center px-8 py-4 bg-stockstrail-green-light hover:bg-stockstrail-green-accent text-black font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,255,151,0.2)] hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] hover:-translate-y-1 w-full sm:w-auto">
              Compare Brokers
            </a>
            <a href="/lets-talk" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all duration-300 w-full sm:w-auto">
              Need Help?
            </a>
          </div>
        </div>
      </section>

      {/* Who Should Open */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-black/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-product-sans font-bold text-white mb-4">
              Who Should Open a Demat Account?
            </h2>
            <div className="w-24 h-1 bg-stockstrail-green-light mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "First-time investors looking to enter the stock market",
              "Individuals wanting to apply for IPOs easily",
              "Mutual fund investors preferring demat-held units",
              "Traders interested in equity, F&O, or commodity trading",
              "Anyone wanting to build long-term wealth through equities",
              "Young earners starting their investment journey early"
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-stockstrail-green-light/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-stockstrail-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white/80 font-medium group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-product-sans font-bold text-white mb-4">
              Why Open Your Account With Us?
            </h2>
            <div className="w-24 h-1 bg-stockstrail-green-light mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Multiple Broker Options", desc: "Choose from AngelOne, Zerodha, Groww, HDFC SKY, Alice Blue, and more top brokers." },
              { title: "Zero Opening Charges", desc: "We help you open your Demat account completely free of cost with most partner brokers." },
              { title: "Quick eKYC Process", desc: "Complete the entire account opening process online in under 15 minutes with Aadhaar-based eKYC." },
              { title: "Expert Guidance", desc: "Our team guides you through broker selection, account setup, and your first investment." },
              { title: "Ongoing Support", desc: "Get continuous assistance with trading platforms, portfolio queries, and account management." },
              { title: "Trusted & Transparent", desc: "No hidden charges, no unnecessary upsells. We recommend what's genuinely best for you." }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/40 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-lg bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 mb-6 flex items-center justify-center group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full shadow-[0_0_10px_rgba(0,255,151,0.8)]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brokers List */}
      <section id="brokers" className="relative px-4 sm:px-6 lg:px-8 py-20 bg-black/40 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-product-sans font-bold text-white mb-4">Choose Your Preferred Platform</h2>
            <p className="text-white/60">Select from India's most trusted discount and full-service brokers.</p>
          </div>
          
          <div className="space-y-4">
            {brokers.map((broker) => (
              <div key={broker.key} className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-stockstrail-green-light/50 transition-all duration-300 group">
                <div className="flex items-center gap-6 mb-4 sm:mb-0">
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center text-white/50 font-bold uppercase tracking-wider group-hover:bg-white/20 transition-colors">
                    {broker.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{broker.name}</h3>
                    <p className="text-sm text-stockstrail-green-light">Zero Account Opening Fee*</p>
                  </div>
                </div>
                <a 
                  href={broker.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-stockstrail-green-light hover:text-black transition-all duration-300 text-center"
                >
                  Open Account
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
