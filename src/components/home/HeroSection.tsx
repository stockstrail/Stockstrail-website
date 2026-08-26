'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const [activeCard, setActiveCard] = useState<number>(0);

  const cards = [
    {
      id: 0,
      title: "Smart Financial Calculators",
      category: "Interactive Tools",
      tag: "SIP · FD · EMI · Taxes",
      description: "Compounding growth visualizers, SIP vs FD return comparisons, and loan calculators with live projection charts.",
      highlight: "₹10K/mo → ₹23.2L Growth",
      href: "/calculators",
      image: "/assets/hero/calculator-card.jpg",
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
      image: "/assets/hero/letstalk-card.jpg",
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
      image: "/assets/hero/services-card.jpg",
      icon: "💼",
      cta: "Explore All 5 Services",
    },
  ];

  return (
    <section className="relative z-20 overflow-hidden py-8 sm:py-14 md:min-h-[calc(100vh-76px)] md:flex md:items-center">
      {/* VIBRANT GLOWING AURORA BACKDROP */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute inset-0 opacity-25 mix-blend-screen scale-105">
          <Image
            src="/assets/hero/aurora-bg.jpg"
            alt="Fintech Aurora Glow"
            fill
            priority
            className="object-cover object-center filter saturate-150 brightness-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#011413]/90 via-[#011716]/80 to-[#01100f]/95" />
        <div className="absolute top-[-120px] left-[-60px] w-[520px] h-[520px] bg-[color:var(--color-brand-green)]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-120px] right-[-60px] w-[580px] h-[580px] bg-teal-500/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT COLUMN: CRISP 3D TYPOGRAPHY (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left animate-fade-up">

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

            {/* 4 Feature Steps */}
            <div className="grid grid-cols-4 gap-2.5 pt-1">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  ),
                  label: "Goals",
                  href: "/about",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                  label: "Risk Profile",
                  href: "/check-risk-profile",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 8h10M7 12h7M7 16h4" />
                    </svg>
                  ),
                  label: "Strategy",
                  href: "/services",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M17 7h4v4" />
                    </svg>
                  ),
                  label: "Wealth",
                  href: "/mutual-funds",
                },
              ].map((step, idx) => (
                <Link key={idx} href={step.href} className="flex flex-col items-center text-center space-y-1.5 group">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-white/80 group-hover:text-stockstrail-green-light group-hover:border-stockstrail-green-light/60 group-hover:bg-stockstrail-green-light/10 transition-all shrink-0 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-medium text-white/80 group-hover:text-stockstrail-green-light transition-colors">
                    {step.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/services"
                aria-label="Explore Our Financial Services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-stockstrail-green-light px-7 py-3.5 text-xs sm:text-sm font-bold text-black hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(0,255,151,0.4)]"
              >
                <span>Explore Our Services</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
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
          <div className="lg:col-span-7 space-y-4 animate-fade-up">

            {/* Interactive Tab Switcher Bar */}
            <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#021817]/90 border border-white/15 backdrop-blur-xl shadow-lg">
              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCard(idx)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold transition-all duration-300 ${
                    activeCard === idx
                      ? 'bg-stockstrail-green-light text-black shadow-[0_0_20px_rgba(0,255,151,0.35)] scale-[1.02]'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{card.icon}</span>
                  <span className="truncate" style={{ fontFamily: "var(--font-product-sans)" }}>
                    {card.id === 0 ? 'Calculators' : card.id === 1 ? 'Let\'s Talk' : 'Services'}
                  </span>
                </button>
              ))}
            </div>

            {/* 3D FEATURED SHOWCASE CARD */}
            <div className="relative rounded-3xl overflow-hidden border border-stockstrail-green-light/50 bg-[#021716]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,255,151,0.15)] group transition-all duration-500 hover:border-stockstrail-green-light hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_60px_rgba(0,255,151,0.25)]">

              {/* Top Banner Tag */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/70 border border-stockstrail-green-light/40 text-[10px] sm:text-xs font-bold text-stockstrail-green-light backdrop-blur-md shadow-md uppercase tracking-wider">
                  {cards[activeCard].category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-xs font-medium text-white/90 backdrop-blur-md hidden sm:inline-block">
                  {cards[activeCard].tag}
                </span>
              </div>

              {/* Floating Highlight Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-semibold text-stockstrail-green-light backdrop-blur-md shadow-md">
                {cards[activeCard].highlight}
              </div>

              {/* 3D Visual Mockup Image Display (Properly Fitted & Framed with Padding) */}
              <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden bg-[#011413] p-3 sm:p-4">
                <Image
                  src={cards[activeCard].image}
                  alt={cards[activeCard].title}
                  fill
                  priority
                  className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500 filter brightness-105 contrast-105"
                />
              </div>

              {/* Bottom Card Content & Direct Redirection Link */}
              <div className="p-5 sm:p-6 relative z-20 space-y-3 bg-[#021716] border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white group-hover:text-stockstrail-green-light transition-colors drop-shadow-md"
                      style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                      {cards[activeCard].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-lg leading-relaxed font-normal">
                      {cards[activeCard].description}
                    </p>
                  </div>

                  <Link
                    href={cards[activeCard].href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stockstrail-green-light text-black font-bold text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,151,0.4)] shrink-0 self-start sm:self-center"
                  >
                    <span>{cards[activeCard].cta}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3D PERSPECTIVE QUICK DOCK (Direct Links to Other 2 Cards) */}
            <div className="grid grid-cols-2 gap-3.5">
              {cards
                .filter((_, idx) => idx !== activeCard)
                .map((card) => (
                  <Link
                    key={card.id}
                    href={card.href}
                    className="group relative rounded-2xl overflow-hidden border border-white/15 hover:border-stockstrail-green-light/60 bg-[#021716]/80 p-3.5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,151,0.2)] flex items-center gap-3.5"
                  >
                    {/* Thumbnail Image */}
                    <div className="relative w-16 h-14 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#011413]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-stockstrail-green-light block truncate">
                        {card.category}
                      </span>
                      <h4
                        className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-stockstrail-green-light transition-colors"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                      >
                        {card.title}
                      </h4>
                      <span className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                        <span>Go to page</span>
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;



