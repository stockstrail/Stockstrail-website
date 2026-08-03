"use client";

import React from "react";
import Link from "next/link";
import { SearchBar } from "./search";

export function LearningHeroSection() {
  return (
    <section className="relative z-20 overflow-hidden py-4 sm:py-6 md:min-h-[calc(100vh-76px)] md:flex md:items-center">
      {/* BACKGROUND GLOW BLOBS & GRID */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="glow-blob top-[-100px] left-[-100px] h-[480px] w-[480px] opacity-40 animate-float" />
        <span 
          className="glow-blob bottom-[-100px] right-[-100px] h-[550px] w-[550px] opacity-35 animate-float-slow" 
          style={{ background: "rgba(0, 229, 153, 0.15)" }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,153,0.05)_0,transparent_70%)]" />
      </div>

      {/* Subtle grid lines background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* LEFT COLUMN: CONTENT, PILLS & CTAS (40% width) */}
          <div className="md:col-span-5 space-y-4 text-left animate-fade-up">
            
            {/* TOP PILL / BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-green)]/40 bg-[color:var(--color-brand-green)]/10 px-3.5 py-1 text-[11px] font-semibold text-[color:var(--color-brand-green)] tracking-wider uppercase backdrop-blur-md shadow-[0_0_12px_rgba(0,229,153,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-green)] animate-pulse" />
              <span>STRUCTURED</span>
              <span className="text-white/40">•</span>
              <span>JARGON-FREE</span>
              <span className="text-white/40">•</span>
              <span>100% FREE</span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-2">
              <h1 
                className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.08]"
                style={{ fontFamily: "var(--font-product-sans)" }}
              >
                Learn Investing <br />
                <span className="gradient-text">The Right Way.</span>
              </h1>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl">
                Master mutual funds, SIPs, tax planning, insurance, and personal finance through structured, distraction-free courses — built specifically for Indian retail investors.
              </p>
            </div>

            {/* 4 FEATURE STEPS (All 4 in 1 single horizontal row: circular badge above, text below) */}
            <div className="flex flex-row items-start justify-between w-full max-w-xl gap-2 pt-1">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" className="text-[color:var(--color-brand-green)]" />
                      <circle cx="12" cy="12" r="1" fill="currentColor" />
                    </svg>
                  ),
                  label: "Understand Your Goals",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" className="text-[color:var(--color-brand-green)]" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                  label: "Assess Your Risk",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M7 8h10M7 12h7M7 16h4" className="text-[color:var(--color-brand-green)]" />
                    </svg>
                  ),
                  label: "Structured Plan",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 17l6-6 4 4 8-8" className="text-[color:var(--color-brand-green)]" />
                      <path d="M17 7h4v4" />
                    </svg>
                  ),
                  label: "Build Wealth",
                },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-1.5 flex-1 min-w-0 group">
                  <div className="w-10 h-10 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white/80 group-hover:text-[color:var(--color-brand-green)] group-hover:border-[color:var(--color-brand-green)]/50 transition-colors shrink-0 shadow-sm">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-white/85 leading-tight text-center w-full">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            {/* SEARCH BAR INTEGRATION */}
            <div className="max-w-xl">
              <SearchBar size="md" />
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/learning/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-6 py-2.5 text-xs sm:text-sm font-bold text-[color:var(--color-brand-bg)] hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,229,153,0.35)]"
              >
                <span>Explore Free Courses</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="https://www.stockstrail.in/check-risk-profile"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[color:var(--color-brand-green)]/50 bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[color:var(--color-brand-green)]/10 hover:border-[color:var(--color-brand-green)] hover:scale-105 transition-all shadow-md backdrop-blur-sm"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-[color:var(--color-brand-green)]">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4l3 3" />
                </svg>
                <span>Check Risk Profile</span>
              </Link>
            </div>

            {/* TRUST BADGES FOOTER ROW */}
            <div className="pt-3 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] text-white/60">
              <div className="flex items-center gap-1">
                <span className="text-[color:var(--color-brand-green)] text-xs">🛡️</span>
                <span>AMFI Registered</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[color:var(--color-brand-green)] text-xs">📜</span>
                <span>SEBI Aware</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[color:var(--color-brand-green)] text-xs">👥</span>
                <span>200+ Families</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[color:var(--color-brand-green)] text-xs">🔍</span>
                <span>100% Free Hub</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE FINANCIAL DASHBOARD SHOWCASE (60% width) */}
          <div className="md:col-span-7 relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
            
            {/* Outer Glassmorphic Card Frame (Tilted clockwise) */}
            <div className="relative bg-[#021716]/90 border border-emerald-500/25 backdrop-blur-xl rounded-2xl p-5 sm:p-6 pb-16 sm:pb-16 shadow-[0_0_45px_rgba(0,0,0,0.85)] rotate-[2.5deg] hover:rotate-1 transition-transform duration-500 origin-center">
              
              {/* Internal Subtle Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[color:var(--color-brand-green)]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* 2x2 GRID OF DASHBOARD WIDGETS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">
                
                {/* WIDGET 1: GOAL PROGRESS */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md space-y-2.5 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Goal Progress</span>
                    <span className="text-[10px] text-white/50 hover:text-[color:var(--color-brand-green)] cursor-pointer">View all ›</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { icon: "🌴", title: "Retirement", pct: 75, color: "from-emerald-400 to-green-500" },
                      { icon: "🎓", title: "Child Education", pct: 60, color: "from-emerald-400 to-teal-400" },
                      { icon: "🏡", title: "Dream Home", pct: 40, color: "from-green-400 to-emerald-500" },
                      { icon: "🛡️", title: "Emergency Fund", pct: 85, color: "from-emerald-300 to-green-400" },
                    ].map((g, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-white/80 flex items-center gap-1">
                            <span className="text-[10px]">{g.icon}</span> {g.title}
                          </span>
                          <span className="font-semibold text-white/90">{g.pct}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden border border-white/10">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-400 via-[color:var(--color-brand-green)] to-teal-300 rounded-full shadow-[0_0_8px_rgba(0,229,153,0.7)] transition-all duration-1000" 
                            style={{ width: `${g.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WIDGET 2: RISK PROFILE GAUGE */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md flex flex-col justify-between hover:border-emerald-500/30 transition-all min-h-[165px]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Risk Profile</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-green)] animate-ping" />
                  </div>

                  {/* Semi-circular Gauge Meter */}
                  <div className="relative my-2 flex flex-col items-center justify-center">
                    <svg viewBox="0 0 100 55" className="w-36 h-18">
                      <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="9"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 10 50 A 40 40 0 0 1 72 20"
                        fill="none"
                        stroke="url(#gaugeGradientCompact)"
                        strokeWidth="9"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gaugeGradientCompact" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10B981" />
                          <stop offset="50%" stopColor="#00E599" />
                          <stop offset="100%" stopColor="#A855F7" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="text-center -mt-5">
                      <div className="text-xs font-bold text-white tracking-wide">Moderate</div>
                    </div>
                  </div>

                  <p className="text-[10px] text-white/60 text-center leading-tight">
                    Balanced long-term growth
                  </p>
                </div>

                {/* WIDGET 3: SIP GROWTH TREND CHART */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md space-y-2 hover:border-emerald-500/30 transition-all min-h-[165px]">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-white">SIP Growth</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[8px] text-[color:var(--color-brand-green)]">
                      Slow Projection
                    </span>
                  </div>

                  <div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight">₹ 12,45,000</div>
                    <div className="text-[9px] font-medium text-[color:var(--color-brand-green)] flex items-center gap-1">
                      <span>▲ +18.5%</span>
                      <span className="text-white/40">(All-time)</span>
                    </div>
                  </div>

                  {/* Area Chart SVG */}
                  <div className="h-12 w-full pt-1">
                    <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="chartGradientCompact" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E599" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#00E599" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 50 Q 40 45, 70 35 T 130 25 T 200 8 L 200 60 L 0 60 Z"
                        fill="url(#chartGradientCompact)"
                      />
                      <path
                        d="M 0 50 Q 40 45, 70 35 T 130 25 T 200 8"
                        fill="none"
                        stroke="#00E599"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="200" cy="8" r="3.5" fill="#00E599" />
                      <circle cx="200" cy="8" r="7" fill="#00E599" className="animate-ping opacity-75" />
                    </svg>
                  </div>
                </div>

                {/* WIDGET 4: ASSET ALLOCATION DONUT */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md flex flex-col justify-between hover:border-emerald-500/30 transition-all min-h-[165px]">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-white">Asset Allocation</span>
                    <span className="text-[9px] text-white/50">View Details ›</span>
                  </div>

                  <div className="flex items-center gap-2.5 my-1">
                    {/* SVG Donut */}
                    <div className="w-13 h-13 shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3B82F6" strokeWidth="4.5" strokeDasharray="60 40" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#EAB308" strokeWidth="4.5" strokeDasharray="30 70" strokeDashoffset="-60" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F97316" strokeWidth="4.5" strokeDasharray="5 95" strokeDashoffset="-90" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8B5CF6" strokeWidth="4.5" strokeDasharray="5 95" strokeDashoffset="-95" />
                      </svg>
                    </div>

                    {/* Legend list */}
                    <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[9px] flex-1">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-white/70">Equity</span>
                        <span className="text-white font-semibold ml-auto">60%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span className="text-white/70">Debt</span>
                        <span className="text-white font-semibold ml-auto">30%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span className="text-white/70">Gold</span>
                        <span className="text-white font-semibold ml-auto">5%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        <span className="text-white/70">Others</span>
                        <span className="text-white font-semibold ml-auto">5%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* FLOATING OVERLAY BADGE (Moved to bottom right corner without overlapping widgets) */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-4 z-30 bg-[#06332F]/98 border border-emerald-400/50 backdrop-blur-2xl rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-base text-[color:var(--color-brand-green)] shrink-0">
                  🛡️
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">Retirement Corpus</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-green)] animate-pulse" />
                    <span className="text-[9px] font-semibold text-[color:var(--color-brand-green)] uppercase">On Track</span>
                  </div>
                  <div className="text-[11px] text-white/70 mt-0.5">
                    Projected Corpus: <span className="text-white font-bold text-[11px]">₹ 1.2 Cr+</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
