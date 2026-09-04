'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Landmark, 
  ShieldCheck, 
  Wallet, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    title: "MUTUAL FUNDS",
    badge: "Wealth Growth",
    description:
      "Goal-focused mutual fund investments tailored to your comfort and financial milestones. Whether starting a monthly SIP or investing a lump sum, explore top equity, debt, and hybrid funds from leading AMCs in India.",
    href: "/services/mutual-funds",
    icon: TrendingUp,
    accentColor: "from-emerald-400 to-cyan-500",
    glowColor: "rgba(0, 255, 151, 0.35)",
    badgeColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  },
  {
    title: "FIXED DEPOSIT",
    badge: "Guaranteed Returns",
    description:
      "High return fixed deposits with guaranteed interest and zero market risk. Compare and book secure bank and corporate fixed deposits with competitive interest rates and flexible payout options.",
    href: "/services/fixed-deposit",
    icon: Landmark,
    accentColor: "from-amber-400 to-emerald-400",
    glowColor: "rgba(245, 158, 11, 0.35)",
    badgeColor: "bg-amber-500/15 border-amber-500/30 text-amber-400",
  },
  {
    title: "INSURANCE",
    badge: "Family Protection",
    description:
      "Comprehensive term and health insurance plans to protect your family's future. Get unbiased guidance on Term Life Insurance, Mediclaim, Critical Illness, and Motor Insurance tailored to your budget.",
    href: "/services/insurance",
    icon: ShieldCheck,
    accentColor: "from-teal-400 to-emerald-500",
    glowColor: "rgba(56, 189, 248, 0.35)",
    badgeColor: "bg-teal-500/15 border-teal-500/30 text-teal-400",
  },
  {
    title: "LOAN",
    badge: "Instant Cash",
    description:
      "Low interest loans against mutual funds (LAMF), Home Loans, and Business Loans. Access quick liquidity without selling your investments, supported by transparent terms and fast processing.",
    href: "/services/loan",
    icon: Wallet,
    accentColor: "from-purple-400 to-pink-500",
    glowColor: "rgba(192, 132, 252, 0.35)",
    badgeColor: "bg-purple-500/15 border-purple-500/30 text-purple-400",
  },
  {
    title: "OTHERS",
    badge: "Demat & Risk Quiz",
    description:
      "Free online Demat and trading account opening, tax planning guidance, and a comprehensive Risk Profile assessment to build a personalized long-term asset strategy.",
    href: "/services/financial-protection",
    icon: Sparkles,
    accentColor: "from-emerald-400 to-teal-400",
    glowColor: "rgba(20, 184, 166, 0.35)",
    badgeColor: "bg-stockstrail-green-light/15 border-stockstrail-green-light/30 text-stockstrail-green-light",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden isolate defer-render">
      {/* 3D AERIAL TRAIL BACKDROP WITH VIBRANT EMERALD CANOPY DEPTH */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Forest Trail Canvas */}
        <div className="relative w-full h-full">
          <Image
            src="/assets/sections/services-trail-bg.png"
            alt="Stockstrail Journey & Financial Road"
            fill
            loading="lazy"
            decoding="async"
            sizes="100vw"
            quality={95}
            className="object-cover object-center scale-105 filter brightness-95 contrast-125 transition-transform duration-1000 ease-out"
          />
          {/* Depth Overlays to enhance 3D layer contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#011413]/90 via-[#011413]/65 to-[#011413]/95" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#011413]/40 to-[#011413]/90" />
        </div>

        {/* Ambient Emerald & Cyan Glow Spheres */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[160px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[92%] lg:max-w-7xl mx-auto">
        {/* 3D Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/40 bg-stockstrail-green-light/10 px-4 py-1.5 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-xl shadow-[0_0_20px_rgba(0,255,151,0.2)]">
            <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
            <span>Comprehensive Financial Ecosystem</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]"
            style={{ fontFamily: "var(--font-product-sans)" }}
          >
            <span className="text-white">Personalized Financial Planning and </span>
            <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-stockstrail-green-light bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,255,151,0.4)]">
              Investment Services
            </span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-work-sans">
            Discover complete wealth solutions curated to match your family goals, time horizon, and personal comfort.
          </p>
        </div>

        {/* 3D Floating Elevated Service Cards */}
        <div className="space-y-4 sm:space-y-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={index}
                href={service.href}
                className="group relative rounded-3xl p-[1px] block transition-all duration-500 hover:-translate-y-1.5"
                style={{ perspective: '1000px' }}
              >
                {/* 3D Border Glow Gradient on Hover */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-70 group-hover:opacity-100 group-hover:from-emerald-400/50 group-hover:via-teal-400/50 group-hover:to-stockstrail-green-light/50 transition-all duration-500 blur-[0.5px]" 
                />

                {/* Main Card Surface */}
                <div className="relative rounded-3xl bg-[#021816]/85 backdrop-blur-2xl p-5 sm:p-7 border border-white/10 group-hover:border-transparent transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,255,151,0.25)] overflow-hidden">
                  
                  {/* Subtle Forest Canopy Vignette inside Card */}
                  <div className="absolute -right-10 -bottom-10 w-72 h-72 opacity-25 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none rounded-full overflow-hidden">
                    <Image
                      src="/assets/sections/services-trail-bg.png"
                      alt=""
                      fill
                      className="object-cover object-right-bottom scale-125 filter blur-[1px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between relative z-10 gap-4 sm:gap-6">
                    {/* 3D Holographic Icon Pod */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/5 shrink-0 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#072e2a] to-[#011816] flex items-center justify-center relative overflow-hidden border border-white/10">
                        {/* Trail miniature backdrop */}
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity">
                          <Image
                            src="/assets/sections/services-trail-bg.png"
                            alt=""
                            fill
                            className="object-cover object-center scale-150"
                          />
                        </div>
                        <div className="absolute inset-0 bg-[#021917]/60" />
                        
                        {/* 3D Vector Icon */}
                        <IconComponent 
                          className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 transition-transform duration-300 group-hover:scale-110 filter drop-shadow-[0_0_12px_rgba(0,255,151,0.8)]" 
                          strokeWidth={2.2}
                        />
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="flex-1 text-center sm:text-left min-w-0">
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-2">
                        <h3
                          className="text-lg sm:text-2xl font-bold text-white group-hover:text-stockstrail-green-light transition-colors drop-shadow-md tracking-tight"
                          style={{ fontFamily: "var(--font-product-sans)" }}
                        >
                          {service.title}
                        </h3>
                        <span className={`text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border ${service.badgeColor} uppercase tracking-wider backdrop-blur-md shadow-sm`}>
                          {service.badge}
                        </span>
                      </div>

                      <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal font-work-sans">
                        {service.description}
                      </p>
                    </div>

                    {/* 3D Action Arrow */}
                    <div className="flex items-center gap-2 text-stockstrail-green-light text-xs font-bold uppercase tracking-wider group-hover:translate-x-1.5 transition-transform shrink-0">
                      <span className="hidden sm:inline font-work-sans">Explore</span>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-stockstrail-green-light group-hover:text-black flex items-center justify-center text-white transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.4)] border border-white/15 group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(0,255,151,0.5)]">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
