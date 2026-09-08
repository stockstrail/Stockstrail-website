import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, FileText, AlertCircle, RefreshCw, Award, ArrowLeft, ArrowRight, BookOpen, UserCheck, PhoneCall } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/common/JsonLd';

export const metadata: Metadata = {
  title: 'Editorial Policy & Fact-Checking Standards | Stockstrail',
  description: 'Stockstrail editorial policy, E-E-A-T research methodology, AMFI & SEBI compliance standards, and fact-checking principles for financial intelligence.',
  alternates: {
    canonical: 'https://www.stockstrail.in/editorial-policy',
  },
};

export default function EditorialPolicyPage() {
  const editorialSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Stockstrail Editorial Standards & Fact-Checking Policy',
    description: 'Editorial standards, primary source research verification, and AMFI ARN-284122 compliance methodology.',
    url: 'https://www.stockstrail.in/editorial-policy',
    publisher: {
      '@type': 'Organization',
      name: 'Stockstrail',
      url: 'https://www.stockstrail.in',
      logo: 'https://www.stockstrail.in/stockstrail.png',
      publishingPrinciples: 'https://www.stockstrail.in/editorial-policy'
    }
  };

  return (
    <Layout>
      <JsonLd data={editorialSchema} />

      <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 min-h-screen bg-[#011413] text-white">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Top Breadcrumb & Badge */}
          <div className="space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Financial Insights</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[#00ff97] text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>E-E-A-T Certified Editorial Standards</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-product-sans text-white leading-tight">
              Editorial Policy &amp; Fact-Checking Standards
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-work-sans leading-relaxed">
              At Stockstrail, our mission is to deliver actionable, objective, and legally sound financial intelligence to retail investors, salaried professionals, and families across India. We adhere to rigorous E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) standards established by regulatory bodies and major search engines.
            </p>
          </div>

          {/* Core Fiduciary Commitment Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#03231f] via-[#04332b] to-[#011614] border-2 border-[#00ff97]/35 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#00ff97]" />
              <h2 className="text-xl sm:text-2xl font-bold font-product-sans text-white">
                Our 4 Pillars of Financial Integrity
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                <div className="text-sm font-bold text-[#00ff97] flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  <span>1. Certified Authorship</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-work-sans">
                  Every financial guide and regulatory breakdown is authored and reviewed by <strong>Vikrant Bhardwaj</strong> (AMFI ARN-284122, NISM Series V-A Certified).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                <div className="text-sm font-bold text-[#00ff97] flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>2. Primary Source Verification</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-work-sans">
                  We cite only official circulars from SEBI, AMFI, RBI, NSE, BSE, and the Income Tax Department — never unverified hearsay or rumors.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                <div className="text-sm font-bold text-[#00ff97] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>3. Zero Commercial Bias</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-work-sans">
                  We accept zero payment for fund rankings or editorial placements. Mutual fund recommendations are strictly risk- and milestone-driven.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                <div className="text-sm font-bold text-[#00ff97] flex items-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  <span>4. Timely Regulatory Audits</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-work-sans">
                  When deadlines (such as nomination rules or tax filing slabs) are revised by authorities, our editorial team immediately updates all live publications.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1: Research & Fact-Checking Methodology */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-product-sans text-white border-b border-white/10 pb-3">
              1. Research &amp; Fact-Checking Methodology
            </h2>
            <p className="text-sm text-slate-200 font-work-sans leading-relaxed">
              Before any article is published on Stockstrail, our research undergoes a multi-point verification process:
            </p>
            <ul className="space-y-3 text-sm text-slate-300 font-work-sans">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ff97] shrink-0 mt-0.5" />
                <span><strong>Mathematical Verification:</strong> Compounding equations, SIP returns formulas, tax savings, and EMI calculations are audited against standard financial algorithms.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ff97] shrink-0 mt-0.5" />
                <span><strong>Regulatory Cross-Referencing:</strong> SEBI master circulars and AMFI operational guidelines are verified against official gazette releases before being simplified for retail readers.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00ff97] shrink-0 mt-0.5" />
                <span><strong>No Sensationalism / Clickbait:</strong> Headlines accurately describe the article content without misleading urgency or inflated promises.</span>
              </li>
            </ul>
          </section>

          {/* Section 2: Corrections Policy */}
          <section id="corrections" className="space-y-4">
            <h2 className="text-2xl font-bold font-product-sans text-white border-b border-white/10 pb-3">
              2. Corrections &amp; Update Policy
            </h2>
            <p className="text-sm text-slate-200 font-work-sans leading-relaxed">
              In the dynamic landscape of Indian capital markets, taxation policies and fund manager mandates evolve. When a material correction or regulatory update is required:
            </p>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300 font-work-sans">
              <p>• The article’s <code>dateModified</code> timestamp is immediately refreshed in our structured schema.</p>
              <p>• Corrections are highlighted directly within the article body for complete reader transparency.</p>
              <p>• Readers may submit factual correction requests directly to <a href="mailto:connect@stockstrail.in" className="text-[#00ff97] underline">connect@stockstrail.in</a>.</p>
            </div>
          </section>

          {/* Section 3: AI Overviews & Google Discover Structured Format */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold font-product-sans text-white border-b border-white/10 pb-3">
              3. AI Overviews &amp; Discover Search Optimization
            </h2>
            <p className="text-sm text-slate-200 font-work-sans leading-relaxed">
              Stockstrail formats its intelligence to serve as a primary reference for artificial intelligence search systems (Google AI Overviews, Gemini, Perplexity, and ChatGPT Search). Every article features semantic JSON-LD schema, entity links to the Google Knowledge Graph, and voice-accessible microdata to ensure unambiguous accuracy.
            </p>
          </section>

          {/* Direct Strategy CTA */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#021815] border border-emerald-500/30 text-center space-y-4">
            <h3 className="text-xl font-bold font-product-sans text-white">
              Have Questions Regarding SEBI Guidelines or Portfolio Strategy?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto font-work-sans">
              Speak directly with an AMFI-registered mutual fund distributor for personalized, fiduciary guidance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/lets-talk"
                className="px-6 py-3 rounded-full bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,151,0.4)]"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/blog"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all"
              >
                Read Latest Insights →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
