'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'mutual-funds',
      title: 'Mutual Funds',
      description: 'Expertly managed funds to help you achieve your long-term financial goals.',
      icon: '/assets/icons/mutual_fund.webp',
      link: '/services/mutual-funds'
    },
    {
      id: 'fixed-deposit',
      title: 'Fixed Deposits',
      description: 'Secure your savings with guaranteed returns and flexible tenures.',
      icon: '/assets/icons/fd.webp',
      link: '/services/fixed-deposit'
    },
    {
      id: 'insurance',
      title: 'Insurance',
      description: 'Comprehensive protection for your health, life, and valuable assets.',
      icon: '/assets/icons/insurance.webp',
      link: '/services/insurance'
    },
    {
      id: 'loan',
      title: 'Loans',
      description: 'Quick and hassle-free loans to meet your personal or business needs.',
      icon: '/assets/icons/loan.webp',
      link: '/services/loan'
    },
    {
      id: 'open-demat',
      title: 'Demat Account',
      description: 'Start your stock market journey with a seamless demat account setup.',
      icon: '/assets/icons/others.webp',
      link: '/open-demat'
    }
  ];

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-product-sans font-bold gradient-text mb-6">
              Our Financial Services
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-work-sans">
              Comprehensive financial solutions tailored to help you build, protect, and manage your wealth effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link href={service.link} key={service.id}>
                <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group h-full flex flex-col items-start">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                     {/* Fallback to simple circle if image not found */}
                     <div className="w-8 h-8 rounded-full bg-stockstrail-green-light/20 border border-stockstrail-green-light/50" />
                  </div>
                  <h3 className="text-2xl font-product-sans font-bold text-white mb-3 group-hover:text-stockstrail-green-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 font-work-sans leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-2 text-stockstrail-green-light font-medium group-hover:gap-3 transition-all">
                    Explore Service <span>&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
