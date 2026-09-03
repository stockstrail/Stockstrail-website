import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/common/JsonLd';
import MarketHolidaysHub from '@/components/holidays/MarketHolidaysHub';
import MarketHolidaysFAQ from '@/components/holidays/MarketHolidaysFAQ';
import { HOLIDAY_FAQS_DATA } from '@/lib/holidays/data';
import { ChevronRight, Calendar, Sparkles, Building2, RefreshCw } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NSE & BSE Holiday Calendar 2026 - Stock Market Trading Holidays India | Stockstrail',
  description:
    'Official NSE & BSE Holiday Calendar 2026. Complete list of 15 trading holidays, live market working day status, September holiday dates, MCX split sessions, and Diwali Muhurat Trading timings.',
  keywords: [
    'nse holiday calendar 2026',
    'bse holiday calendar 2026',
    'nse holiday list 2026',
    'bse holiday list 2026',
    'is today stock market holiday',
    'is today trading holiday in India',
    'is today working day in stock market',
    'share market holiday today',
    'is share market open today',
    'stock market holidays 2026',
    'market holidays in september 2026',
    'september holidays 2026',
    '7 september 2026 day',
    'central government holidays 2026',
    'central govt holidays 2026',
    'muhurat trading 2026 date and time',
    'mcx holiday list 2026',
    'stock market trading calendar India'
  ],
  alternates: {
    canonical: 'https://www.stockstrail.in/nse-holidays',
  },
  openGraph: {
    title: 'NSE & BSE Holiday Calendar 2026 | Stockstrail',
    description:
      'Official NSE & BSE trading holidays for 2026. Check real-time live trading status, equity closures, commodity sessions, and Muhurat Trading.',
    url: 'https://www.stockstrail.in/nse-holidays',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'article',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'NSE & BSE Holiday Calendar 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSE & BSE Holiday Calendar 2026 | Stockstrail',
    description:
      'Official trading holidays for the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) for 2026.',
    images: ['/og-stockstrail.png'],
  },
};

// 1. FAQ Schema for Google Rich Results & AEO Answer Engines
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
  name: 'NSE and BSE Trading Holidays Calendar 2026',
  description:
    'Official list of 15 trading holidays, 4 weekend festivals, and Muhurat Trading session schedule for Indian stock exchanges in 2026.',
  url: 'https://www.stockstrail.in/nse-holidays',
  keywords: [
    'NSE holidays 2026',
    'BSE holidays 2026',
    'Stock market trading calendar 2026',
    'Indian share market holidays',
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
      name: 'NSE & BSE Holiday Calendar 2026',
      item: 'https://www.stockstrail.in/nse-holidays',
    },
  ],
};

export default function NseHolidays() {
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
            <span className="text-emerald-400 font-semibold">NSE &amp; BSE Holiday Calendar 2026</span>
          </nav>

          {/* H1 Main Page Title */}
          <header className="space-y-4 text-left border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-product-sans leading-tight">
              NSE &amp; BSE Holiday Calendar 2026
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-4xl leading-relaxed">
              Official schedule of trading, settlement, and clearing holidays declared by the <strong>National Stock Exchange (NSE)</strong> and <strong>Bombay Stock Exchange (BSE)</strong> for the calendar year 2026.
            </p>
          </header>

          {/* Main Interactive Hub (Live AEO Status + Metrics + Tabs + Filter + Clean Table) */}
          <MarketHolidaysHub primaryExchange="NSE" />

          {/* Key Highlights & Trading Observations for 2026 (Attractive, Color-Accented Cards) */}
          <section aria-labelledby="key-notes-heading" className="p-7 sm:p-9 rounded-2xl bg-[#021817] border border-white/15 space-y-6 text-left shadow-xl">
            <div className="border-b border-white/10 pb-3">
              <h2 id="key-notes-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Key Highlights &amp; Trading Observations for 2026
              </h2>
              <p className="text-sm text-slate-300 pt-1">
                Direct answers to common questions regarding September market dates, settlement cycles, and Muhurat trading.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Card 1: September 2026 (Emerald / Mint Accent) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#042823] to-[#021817] border border-emerald-500/30 hover:border-emerald-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
                    September Schedule
                  </span>
                  <Calendar className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-emerald-400">
                  1. September 2026 Market Schedule
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    <strong>Ganesh Chaturthi (September 14, 2026 - Monday):</strong> All trading in NSE Equities, BSE, and Equity Derivatives will remain <strong>CLOSED</strong>. MCX commodity evening session will open at 5:00 PM IST.
                  </p>
                  <p>
                    <strong>September 7, 2026 (Monday):</strong> Regular working day. Both NSE and BSE will operate normally from 09:15 AM to 03:30 PM IST.
                  </p>
                </div>
              </article>

              {/* Card 2: Diwali Muhurat Trading (Gold / Amber Accent) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#261e06] to-[#021817] border border-amber-500/30 hover:border-amber-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Diwali Special
                  </span>
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-amber-400">
                  2. Diwali Muhurat Trading 2026
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    On <strong>Sunday, November 08, 2026 (Diwali Laxmi Pujan)</strong>, stock exchanges will conduct the annual 1-hour <strong>Muhurat Trading session</strong> in the evening (approx. 6:00 PM to 7:15 PM IST).
                  </p>
                  <p>
                    This ceremonial trading session marks the commencement of the new Hindu financial year, <em>Samvat 2083</em>.
                  </p>
                </div>
              </article>

              {/* Card 3: Central Govt vs Market Holidays (Sky / Cyan Accent) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#05232c] to-[#021817] border border-sky-500/30 hover:border-sky-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Banking vs Markets
                  </span>
                  <Building2 className="w-4 h-4 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-sky-400">
                  3. Central Government vs. Stock Market Holidays
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    Bank holidays operate under the <em>Negotiable Instruments Act</em>. On certain administrative bank closing dates, physical bank branches may be closed, but electronic trading on the NSE and BSE continues normally.
                  </p>
                </div>
              </article>

              {/* Card 4: T+1 Settlement & SIPs (Violet / Purple Accent) */}
              <article className="p-6 rounded-2xl bg-gradient-to-br from-[#1e0e2d] to-[#021817] border border-purple-500/30 hover:border-purple-400/50 transition-all space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold uppercase tracking-wider">
                    Settlement Rules
                  </span>
                  <RefreshCw className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-purple-400">
                  4. Mutual Fund SIPs &amp; Settlement Impact
                </h3>
                <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                  <p>
                    If your Mutual Fund SIP debit falls on a market holiday or weekend, the transaction is processed on the next business day. NAV is allotted according to the next working day closing value.
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
              <strong>Official Notice:</strong> The trading holiday schedule on this page is compiled from notifications released by the National Stock Exchange of India (NSE) and Bombay Stock Exchange (BSE). Holiday schedules and session hours are subject to change as notified by exchange circulars on <a href="https://www.nseindia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">nseindia.com</a> and <a href="https://www.bseindia.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-semibold hover:underline">bseindia.com</a>.
            </p>
            <p>
              Stockstrail is an AMFI-Registered Mutual Fund Distributor (ARN-284122) committed to transparent, goal-oriented wealth planning.
            </p>
          </footer>

        </div>
      </section>
    </Layout>
  );
}
