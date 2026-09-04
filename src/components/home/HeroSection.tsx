import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HeroShowcaseCard = dynamic(() => import('./HeroShowcaseCard'), {
  ssr: true,
  loading: () => (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#021716]/60 p-6 min-h-[420px] animate-pulse" />
  ),
});

export default function HeroSection() {
  return (
    <section className="relative z-20 overflow-hidden pt-8 pb-16 sm:py-16 md:py-20 md:min-h-[calc(100vh-80px)] md:flex md:items-center">
      {/* Subtle Background Lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[#011413]" />
        <div className="absolute top-[-80px] left-[10%] w-[500px] h-[500px] bg-stockstrail-green-light/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-80px] right-[10%] w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT COLUMN: GOAL FOCUSED & PERSONALIZED COPY */}
          <div className="lg:col-span-6 space-y-6 text-left">

            {/* Goal-Based Personalized Planning Badge (Zero Hyphens) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1.5 text-xs font-semibold text-stockstrail-green-light tracking-wide uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
              <span>Goal Focused Financial Planning</span>
              <span className="text-white/40">|</span>
              <span className="text-white/90">Custom Portfolios for Every Milestone</span>
            </div>

            {/* Inspiring, Emotional Headline */}
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.12]"
                style={{ fontFamily: "var(--font-product-sans)" }}
              >
                Smart Investing for Your Family. <br />
                <span className="gradient-text font-extrabold">
                  Clear, Honest Guidance.
                </span>
              </h1>

              {/* Natural, Flowing Global & Inclusive Copy */}
              <p className="text-sm sm:text-base text-white/80 leading-relaxed font-normal max-w-xl">
                We help families and working professionals build long term wealth safely. From starting your monthly <Link href="/services/mutual-funds" className="text-white hover:text-stockstrail-green-light underline decoration-stockstrail-green-light/40 underline-offset-4 font-medium transition-colors">Mutual Fund SIPs</Link> to secure <Link href="/services/fixed-deposit" className="text-white hover:text-stockstrail-green-light underline decoration-stockstrail-green-light/40 underline-offset-4 font-medium transition-colors">Fixed Deposits</Link> and <Link href="/services/insurance" className="text-white hover:text-stockstrail-green-light underline decoration-stockstrail-green-light/40 underline-offset-4 font-medium transition-colors">family protection</Link>, get personal guidance tailored to your life goals with zero sales pressure.
              </p>
            </div>

            {/* Welcoming Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/lets-talk"
                aria-label="Start your financial plan"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-stockstrail-green-light px-7 py-3.5 text-sm font-bold text-black shadow-[0_0_25px_rgba(0,255,151,0.35)] hover:shadow-[0_0_35px_rgba(0,255,151,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
                style={{ fontFamily: "var(--font-product-sans)" }}
              >
                <span>Start Your Financial Plan</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/check-risk-profile"
                aria-label="Take the free 2 minute risk score quiz"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white/10 hover:border-stockstrail-green-light px-6 py-3.5 text-sm font-semibold text-white hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-stockstrail-green-light">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <span>Check Your Risk Score (Free)</span>
              </Link>
            </div>

            {/* 4 Simple Trust Points without hyphens */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div>
                <span className="text-lg sm:text-xl font-bold text-white block" style={{ fontFamily: "var(--font-product-sans)" }}>
                  100% Free
                </span>
                <span className="text-[11px] text-white/60">First Strategy Call</span>
              </div>

              <div>
                <span className="text-lg sm:text-xl font-bold text-white block" style={{ fontFamily: "var(--font-product-sans)" }}>
                  200+
                </span>
                <span className="text-[11px] text-white/60">Families Guided</span>
              </div>

              <div>
                <span className="text-lg sm:text-xl font-bold text-stockstrail-green-light block" style={{ fontFamily: "var(--font-product-sans)" }}>
                  ARN 284122
                </span>
                <span className="text-[11px] text-white/60">AMFI Registered</span>
              </div>

              <div>
                <span className="text-lg sm:text-xl font-bold text-white block" style={{ fontFamily: "var(--font-product-sans)" }}>
                  Zero
                </span>
                <span className="text-[11px] text-white/60">Sales Pressure</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE INTERACTIVE WEALTH COMPASS */}
          <div className="lg:col-span-6">
            <HeroShowcaseCard />
          </div>

        </div>
      </div>
    </section>
  );
}
