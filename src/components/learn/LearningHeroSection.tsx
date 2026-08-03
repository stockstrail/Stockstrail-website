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

          {/* LEFT COLUMN: CONTENT, PILLS & CTAS (5 cols) */}
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

            {/* 4 FEATURE STEPS */}
            <div className="flex flex-row items-start justify-between w-full max-w-xl gap-2 pt-1">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  ),
                  label: "Pick a Free Course",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
                    </svg>
                  ),
                  label: "Watch & Learn",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  ),
                  label: "Apply Knowledge",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 17l6-6 4 4 8-8" />
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

            {/* SEARCH BAR */}
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
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-brand-green)]" />
                <span>15+ Free Courses</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-brand-green)]" />
                <span>5 Categories</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-brand-green)]" />
                <span>AMFI Aware Content</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-brand-green)]" />
                <span>100% Free Hub</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: LEARNING DASHBOARD (7 cols) */}
          <div className="md:col-span-7 relative animate-fade-up" style={{ animationDelay: "0.1s" }}>

            {/* Outer Glassmorphic Card Frame (Tilted clockwise) */}
            <div className="relative bg-[#021716]/90 border border-emerald-500/25 backdrop-blur-xl rounded-2xl p-5 sm:p-6 pb-16 sm:pb-16 shadow-[0_0_45px_rgba(0,0,0,0.85)] rotate-[2.5deg] hover:rotate-1 transition-transform duration-500 origin-center">

              {/* Ambient Glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[color:var(--color-brand-green)]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between mb-3.5 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400/70" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400/70" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-[9px] text-white/30 font-mono tracking-widest uppercase">Learning Dashboard</span>
                <span className="text-[9px] text-[color:var(--color-brand-green)]/60 font-semibold">● Free</span>
              </div>

              {/* 2×2 GRID OF WIDGETS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative z-10">

                {/* WIDGET 1: COURSE CATEGORIES PROGRESS */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md space-y-2.5 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Course Categories</span>
                    <span className="text-[10px] text-white/50 hover:text-[color:var(--color-brand-green)] cursor-pointer">View all ›</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { title: "Mutual Funds", lessons: "6 lessons", pct: 80 },
                      { title: "SIP & FD Basics", lessons: "4 lessons", pct: 65 },
                      { title: "Tax Planning", lessons: "3 lessons", pct: 50 },
                      { title: "Insurance Guide", lessons: "3 lessons", pct: 45 },
                    ].map((g, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="text-white/80 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[color:var(--color-brand-green)]" />
                            {g.title}
                          </span>
                          <span className="text-white/50">{g.lessons}</span>
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
                    <span className="text-xs font-semibold text-white">Know Your Risk Type</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-green)] animate-ping" />
                  </div>

                  {/* Semi-circular Gauge */}
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
                        stroke="url(#gaugeGradLearning)"
                        strokeWidth="9"
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gaugeGradLearning" x1="0%" y1="0%" x2="100%" y2="0%">
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
                    Find your ideal investment style
                  </p>
                </div>

                {/* WIDGET 3: LEARNING STATS */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md space-y-2 hover:border-emerald-500/30 transition-all min-h-[165px]">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-white">Content Library</span>
                    <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[8px] text-[color:var(--color-brand-green)]">
                      Always Growing
                    </span>
                  </div>

                  <div>
                    <div className="text-sm sm:text-base font-bold text-white tracking-tight">25+ Lessons</div>
                    <div className="text-[9px] font-medium text-[color:var(--color-brand-green)] flex items-center gap-1">
                      <span>5 Categories</span>
                      <span className="text-white/40">• Avg 8 min/lesson</span>
                    </div>
                  </div>

                  {/* Mini Bar Chart — lesson distribution */}
                  <div className="h-12 w-full pt-1">
                    <svg viewBox="0 0 200 60" className="w-full h-full overflow-visible">
                      <defs>
                        <linearGradient id="barGradLearn" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E599" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#00E599" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      {/* Bar chart: 5 category bars */}
                      {[
                        { x: 10, h: 45, label: "MF" },
                        { x: 50, h: 35, label: "SIP" },
                        { x: 90, h: 28, label: "Tax" },
                        { x: 130, h: 28, label: "Ins" },
                        { x: 170, h: 20, label: "FD" },
                      ].map((bar) => (
                        <g key={bar.x}>
                          <rect
                            x={bar.x}
                            y={60 - bar.h}
                            width="28"
                            height={bar.h}
                            rx="4"
                            fill="url(#barGradLearn)"
                          />
                          <text
                            x={bar.x + 14}
                            y="58"
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.35)"
                            fontSize="8"
                          >
                            {bar.label}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* WIDGET 4: COURSE TOPICS DONUT */}
                <div className="bg-[#04201E]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 shadow-md flex flex-col justify-between hover:border-emerald-500/30 transition-all min-h-[165px]">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-white">Topic Coverage</span>
                    <span className="text-[9px] text-white/50">All Courses ›</span>
                  </div>

                  <div className="flex items-center gap-2.5 my-1">
                    {/* SVG Donut */}
                    <div className="w-14 h-14 shrink-0">
                      <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#10B981" strokeWidth="4.5" strokeDasharray="40 60" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#3B82F6" strokeWidth="4.5" strokeDasharray="20 80" strokeDashoffset="-40" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F59E0B" strokeWidth="4.5" strokeDasharray="20 80" strokeDashoffset="-60" />
                        <circle cx="18" cy="18" r="15.915" fill="none" stroke="#8B5CF6" strokeWidth="4.5" strokeDasharray="20 80" strokeDashoffset="-80" />
                      </svg>
                    </div>

                    <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 text-[9px] flex-1">
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-white/70">Mutual Funds</span>
                        <span className="text-white font-semibold ml-auto">40%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-white/70">Tax</span>
                        <span className="text-white font-semibold ml-auto">20%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="text-white/70">Insurance</span>
                        <span className="text-white font-semibold ml-auto">20%</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                        <span className="text-white/70">SIP & FD</span>
                        <span className="text-white font-semibold ml-auto">20%</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* FLOATING OVERLAY BADGE */}
              <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-4 sm:right-4 z-30 bg-[#06332F]/98 border border-emerald-400/50 backdrop-blur-2xl rounded-2xl p-3 shadow-2xl flex items-center gap-3 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="text-[color:var(--color-brand-green)]">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">100% Free to Learn</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-green)] animate-pulse" />
                    <span className="text-[9px] font-semibold text-[color:var(--color-brand-green)] uppercase">No Login</span>
                  </div>
                  <div className="text-[11px] text-white/70 mt-0.5">
                    Browse freely • <span className="text-white font-bold text-[11px]">Start any course now</span>
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
