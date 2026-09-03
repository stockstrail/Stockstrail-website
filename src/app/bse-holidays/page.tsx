import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/common/JsonLd';
import MarketHolidaysHub from '@/components/holidays/MarketHolidaysHub';
import MarketHolidaysFAQ from '@/components/holidays/MarketHolidaysFAQ';
import { HOLIDAY_FAQS_DATA } from '@/lib/holidays/data';
import { ChevronRight, Calendar, Sparkles, Building2, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'BSE & NSE Holiday Calendar 2026 - Bombay Stock Exchange Holidays | Stockstrail',
  description:
    'Official BSE & NSE Holiday Calendar for 2026. Complete calendar of Bombay Stock Exchange trading holidays across Equities, Derivatives, Commodity split sessions, and Muhurat Trading.',
  keywords: [
    'bse holiday calendar 2026',
    'nse holiday calendar 2026',
    'bse holiday list 2026',
    'nse holiday list 2026',
    'is today stock market holiday',
    'is today trading holiday in India',
    'is today working day in stock market',
    'share market holiday today',
    'is share market open today',
    'bombay stock exchange holidays',
    'market holidays in september 2026',
    'september holidays 2026',
    '7 september 2026 day',
    'central government holidays 2026',
    'muhurat trading 2026 bse',
    'mcx holiday list 2026'
  ],
  alternates: {
    canonical: 'https://www.stockstrail.in/bse-holidays',
  },
  openGraph: {
    title: 'BSE & NSE Holiday Calendar 2026 | Stockstrail',
    description:
      'Official Bombay Stock Exchange (BSE) & NSE trading holidays for 2026 across all market segments.',
    url: 'https://www.stockstrail.in/bse-holidays',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'BSE & NSE Holiday Calendar 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BSE & NSE Holiday Calendar 2026 | Stockstrail',
    description:
      'Official trading holidays for the Bombay Stock Exchange (BSE) and National Stock Exchange (NSE) for 2026.',
    images: ['/og-stockstrail.png'],
  },
};

// 1. FAQ Schema for Google Rich Snippets & AEO Answer Engines
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOLIDAY_FAQS_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

// 2. Structured Dataset Schema for Generative AI (GEO)
const datasetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'BSE and NSE Trading Holidays Calendar 2026',
  description:
    'Official list of 15 trading holidays, 4 weekend festivals, and Muhurat Trading session schedule for Bombay Stock Exchange in 2026.',
  url: 'https://www.stockstrail.in/bse-holidays',
  keywords: [
    'BSE holidays 2026',
    'NSE holidays 2026',
    'Stock market trading calendar 2026',
    'Bombay Stock Exchange holidays',
  ],
  creator: {
    '@type': 'Organization',
    name: 'Stockstrail',
    url: 'https://www.stockstrail.in',
  },
  temporalCoverage: '2026-01-01/2026-12-31',
  spatialCoverage: {
    '@type': 'Place',
    name: 'India',
  },
};

// 3. Breadcrumb Schema
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.stockstrail.in',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Market Resources',
      item: 'https://www.stockstrail.in/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'BSE & NSE Holiday Calendar 2026',
      item: 'https://www.stockstrail.in/bse-holidays',
    },
  ],
};

export default function BseHolidays() {
  return (
    <Layout>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={datasetJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="px-4 sm:px-6 lg:px-8 pt-28 pb-24 min-h-screen bg-[#010e0d] text-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-mono">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/services" className="hover:text-white transition-colors">Market Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-emerald-400 font-semibold">BSE &amp; NSE Holiday Calendar 2026</span>
          </nav>

          {/* H1 Main Page Title */}
          <header className="space-y-4 text-left border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-product-sans leading-tight">
              BSE &amp; NSE Holiday Calendar 2026
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-4xl leading-relaxed">
              Official schedule of trading, settlement, and clearing holidays observed by the <strong>Bombay Stock Exchange (BSE)</strong> and <strong>National Stock Exchange (NSE)</strong> across Equity, Derivatives, Commodity, and Electronic Gold Receipts (EGR) segments for 2026.
            </p>
          </header>

          {/* Main Interactive Hub */}
          <MarketHolidaysHub primaryExchange="BSE" />

          {/* Key Highlights & Trading Observations for 2026 (Attractive, Color-Accented Cards) */}
          <section aria-labelledby="bse-notes-heading" className="p-7 sm:p-9 rounded-2xl bg-[#021817] border border-white/15 space-y-6 text-left shadow-xl">
            <div className="border-b border-white/10 pb-3">
              <h2 id="bse-notes-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                BSE Segment Rules &amp; Operational Observations
              </h2>
              <p className="text-sm text-slate-300 pt-1">
                Detailed segment rules and session timings observed by the Bombay Stock Exchange (BSE).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Card 1: Equities & Derivatives (Emerald) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#042823] to-[#021817] border border-emerald-500/30 hover:border-emerald-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Core Markets
                  </span>
                  <Layers className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-emerald-400">
                  1. Equities, Derivatives &amp; Debt Segments
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    On all 15 official trading holidays, BSE equity and derivative order matching is suspended. Normal trading resumes at 09:15 AM on the following business day.
                  </p>
                </div>
              </article>

              {/* Card 2: Split Sessions (Amber) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#261e06] to-[#021817] border border-amber-500/30 hover:border-amber-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Commodity &amp; Gold
                  </span>
                  <Calendar className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-amber-400">
                  2. Commodity Derivatives &amp; EGR Split Sessions
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    For select holidays (such as Holi, Ram Navami, and Ganesh Chaturthi), the morning session (9 AM - 5 PM) remains closed, while the evening session (5 PM - 11:30 PM) is operational for commodities and electronic gold receipts.
                  </p>
                </div>
              </article>

              {/* Card 3: September 2026 (Sky / Cyan) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#05232c] to-[#021817] border border-sky-500/30 hover:border-sky-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold uppercase tracking-wider">
                    September Focus
                  </span>
                  <Building2 className="w-4 h-4 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-sky-400">
                  3. September 2026 BSE Trading Status
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    <strong>Ganesh Chaturthi (Sept 14, 2026):</strong> Full day closure for BSE equity and derivatives.
                  </p>
                  <p>
                    <strong>September 7, 2026:</strong> Regular trading day with standard hours (09:15 AM – 03:30 PM IST).
                  </p>
                </div>
              </article>

              {/* Card 4: Muhurat Trading (Violet / Purple) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#1e0e2d] to-[#021817] border border-purple-500/30 hover:border-purple-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Diwali 2026
                  </span>
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-purple-400">
                  4. BSE Muhurat Trading 2026
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    Special 1-hour Diwali Muhurat Trading session will be conducted on <strong>Sunday, November 08, 2026 (Diwali Laxmi Pujan)</strong> in the evening.
                  </p>
                </div>
              </article>

            </div>
          </section>

          {/* FAQ Component */}
          <MarketHolidaysFAQ />

          {/* Statutory Notice */}
          <footer className="p-6 rounded-2xl bg-black/50 border border-white/15 text-xs sm:text-sm text-slate-300 leading-relaxed text-left space-y-2">
            <p>
              <strong>Official Notice:</strong> The trading holiday schedule on this page is compiled from notifications released by the Bombay Stock Exchange (BSE) and National Stock Exchange of India (NSE). Holiday schedules are subject to revision as notified on <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">bseindia.com</a> and <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">nseindia.com</a>.
            </p>
            <p>
              Stockstrail is an AMFI-Registered Mutual Fund Distributor (ARN-284122) providing disciplined financial planning and advisory services.
            </p>
          </footer>

        </div>
      </section>
    </Layout>
  );
}
