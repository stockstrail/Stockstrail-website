import React from 'react';
import Link from 'next/link';
import HeroShowcaseCard from './HeroShowcaseCard';

const HeroSection = () => {
  const cards = [
    {
      id: 0,
      title: "Smart Financial Calculators",
      category: "Interactive Tools",
      tag: "SIP · FD · EMI · Taxes",
      description: "Compounding growth visualizers, SIP vs FD return comparisons, and loan calculators with live projection charts.",
      highlight: "₹10K/mo → ₹23.2L Growth",
      href: "/calculators",
      image: "/assets/hero/calculator-card.webp",
      icon: "🧮",
      cta: "Launch Calculators",
    },
    {
      id: 1,
      title: "Let's Talk — 1-on-1 Advisory",
      category: "Free Strategy Call",
      tag: "AMFI Registered ARN-284122",
      description: "Direct advisory discussion with Vikrant Bhardwaj. 100% unbiased, goal-aligned financial roadmaps tailored to you.",
      highlight: "● Advisors Available Online",
      href: "/lets-talk",
      image: "/assets/hero/letstalk-card.webp",
      icon: "📞",
      cta: "Book Free Session",
    },
    {
      id: 2,
      title: "Personalized Investment Services",
      category: "Comprehensive Solutions",
      tag: "5 Tailored Offerings",
      description: "Mutual Funds, Fixed Deposits, Life & Health Insurance, Loans Against Mutual Funds, and Demat accounts.",
      highlight: "Zero Hidden Fees · Goal-First",
      href: "/services",
      image: "/assets/hero/services-card.webp",
      icon: "💼",
      cta: "Explore All 5 Services",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden py-8 sm:py-14 md:min-h-[calc(100vh-76px)] md:flex md:items-center">
      {/* PURE HIGH-PERFORMANCE CSS AURORA BACKDROP (0KB HTTP Overheads, Instant Paint) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[#011413]" />
        {/* Glowing Aurora Meshes */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 20% 20%, rgba(0, 255, 151, 0.25), transparent 70%),
              radial-gradient(ellipse 50% 60% at 80% 80%, rgba(20, 184, 166, 0.22), transparent 70%),
              radial-gradient(circle 400px at 50% 40%, rgba(0, 216, 115, 0.18), transparent 60%)
            `,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#011413]/90 via-[#011716]/80 to-[#01100f]/95" />
        <div className="absolute top-[-120px] left-[-60px] w-[520px] h-[520px] bg-[color:var(--color-brand-green)]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-60px] w-[580px] h-[580px] bg-teal-500/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: CRISP 3D TYPOGRAPHY (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1.5 text-xs font-semibold text-stockstrail-green-light tracking-wider uppercase backdrop-blur-md shadow-[0_0_20px_rgba(0,255,151,0.15)]">
              <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
              <span>AMFI Registered ARN-284122</span>
              <span className="text-white/30">•</span>
              <span>Goal-First Advisory</span>
            </div>

            {/* 3D Single H1 Headline */}
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.08] drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                style={{ fontFamily: "var(--font-product-sans)" }}
              >
                Personalized <br />
                <span className="gradient-text drop-shadow-[0_0_35px_rgba(0,255,151,0.45)]">
                  Financial Planning.
                </span>
              </h1>

              {/* 3D Elevated Description Card */}
              <div className="bg-[#031d1b]/75 border border-white/15 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-[0_15px_35px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_6px_rgba(0,0,0,0.7)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <strong className="text-white font-bold">Stockstrail</strong> helps you in making confident decisions with <strong className="font-semibold"><Link href="/services" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">personalized financial planning</Link></strong>. We provide a <strong className="font-semibold"><Link href="/lets-talk" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">free consultation call</Link></strong> and help you invest in your future with <strong className="font-semibold"><Link href="/mutual-funds" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">mutual funds</Link></strong>, <strong className="font-semibold"><Link href="/calculators" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">SIPs</Link></strong>, <strong className="font-semibold"><Link href="/fixed-deposit" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">fixed deposits</Link></strong>, comprehensive <strong className="font-semibold"><Link href="/insurance" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">insurance</Link></strong>, and <strong className="font-semibold"><Link href="/loan" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">loans against mutual funds</Link></strong>. We tailor every roadmap to your goals according to your <strong className="font-semibold"><Link href="/check-risk-profile" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">risk profile</Link></strong>.
                </p>
              </div>
            </div>

            {/* Premium Dual CTA Cluster */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/lets-talk"
                aria-label="Book a free consultation session"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-full bg-stockstrail-green-light px-7 py-3.5 text-xs sm:text-sm font-bold text-black shadow-[0_0_30px_rgba(0,255,151,0.45)] hover:shadow-[0_0_45px_rgba(0,255,151,0.7)] hover:scale-105 transition-all"
                style={{ fontFamily: "var(--font-product-sans)" }}
              >
                <span>Book Free Session</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href="/check-risk-profile"
                aria-label="Check your risk profile"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 hover:border-stockstrail-green-light hover:scale-105 transition-all backdrop-blur-md"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-stockstrail-green-light">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <span>Check Risk Profile</span>
              </Link>
            </div>

            {/* Sleek 5-Star Trust Badge */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-3 text-xs text-white/80">
              <div className="flex items-center gap-1.5 bg-amber-400/10 border border-amber-400/30 px-2.5 py-1 rounded-full text-amber-400 font-bold text-[11px] shadow-sm shrink-0">
                <span>★★★★★</span>
                <span className="text-white text-[10px] ml-0.5 font-semibold">5.0</span>
              </div>
              <p className="text-[11px] text-white/80 leading-tight">
                <span className="font-semibold text-white">200+ Families Guided</span> across India with 100% Transparency
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D INTERACTIVE CARD SHOWCASE (7 cols) */}
          <div className="lg:col-span-7">
            <HeroShowcaseCard cards={cards} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
