import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import InteractiveRiskQuiz from '@/components/risk/InteractiveRiskQuiz';
import JsonLd from '@/components/common/JsonLd';
import { ShieldCheck, HelpCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Risk Profile Assessment - Discover Your Investment Comfort | Stockstrail',
  description:
    'Take our free 2-minute SEBI-aligned 11-question risk profiling quiz. Calculate your risk tolerance score and get personalized asset allocation recommendations for mutual funds and fixed deposits.',
  keywords:
    'risk profile assessment, risk score quiz, investment risk tolerance, asset allocation India, mutual fund risk, Stockstrail risk calculator',
  alternates: {
    canonical: 'https://www.stockstrail.in/check-risk-profile',
  },
  openGraph: {
    title: 'Free Risk Profile Assessment | Stockstrail',
    description:
      'Take our free 2-minute 11-question risk assessment and discover your ideal asset allocation between mutual funds, fixed deposits, and emergency cash.',
    url: 'https://www.stockstrail.in/check-risk-profile',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
  },
};

const quizSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: 'Stockstrail Risk Profile Assessment',
  description:
    'Free 11-question investment risk profiling tool providing personalized asset allocation recommendations for Indian investors.',
  url: 'https://www.stockstrail.in/check-risk-profile',
  provider: {
    '@type': 'FinancialService',
    name: 'Stockstrail',
    url: 'https://www.stockstrail.in',
  },
  areaServed: 'IN',
};

export default function CheckRiskProfilePage() {
  return (
    <Layout>
      <JsonLd data={quizSchema} />
      
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-20 min-h-screen bg-stockstrail-bg overflow-hidden">
        {/* Ambient Subtle Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-stockstrail-green-light/10 blur-[150px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          
          {/* PAGE HERO HEADER */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 text-stockstrail-green-light text-xs font-mono uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
              100% Free · 2-Minute Financial Tool
            </div>

            <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Discover Your Real <br className="hidden sm:inline" />
              <span className="gradient-text">Investment Risk Profile</span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Before you invest a single rupee in mutual funds or fixed deposits, understand your true comfort level with market volatility. Answer 11 simple questions to get your instant, personalized asset allocation score.
            </p>
          </div>

          {/* INTERACTIVE QUIZ ENGINE */}
          <InteractiveRiskQuiz />

          {/* BELOW QUIZ EDUCATIONAL FOOTNOTE */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left text-xs text-white/70">
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-white font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-stockstrail-green-light" />
                Why Risk Profiling Matters
              </div>
              <p className="leading-relaxed">
                Investing without knowing your risk comfort is like driving without a seatbelt. It ensures you never panic during short-term market corrections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-white font-bold flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-stockstrail-green-light" />
                Zero Sales Pitch Promise
              </div>
              <p className="leading-relaxed">
                We never push random products. Your risk profile determines the exact balance of safe fixed deposits, equity mutual funds, and emergency cash.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-white font-bold flex items-center gap-2">
                <Phone className="w-4 h-4 text-stockstrail-green-light" />
                Discuss With Vikrant
              </div>
              <p className="leading-relaxed">
                Have questions about your score? Speak directly with AMFI-registered distributor Vikrant Bhardwaj (ARN-284122) for a free review.
              </p>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
