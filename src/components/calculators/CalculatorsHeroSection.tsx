"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

interface CalculatorsHeroSectionProps {
  activeTab?: string;
  onTabSelect?: (tab: string) => void;
}

const CALCULATOR_PILLS = [
  { id: "SIP", name: "SIP Calculator", href: "/calculators/sip" },
  { id: "LUMPSUM", name: "Lumpsum Calculator", href: "/calculators/lumpsum" },
  { id: "EMI", name: "Loan EMI Calculator", href: "/calculators/emi" },
  { id: "TAX", name: "Income Tax Calculator", href: "/calculators/tax" },
  { id: "FD", name: "FD Calculator", href: "/calculators/fd" },
  { id: "RD", name: "RD Calculator", href: "/calculators/rd" },
];

export default function CalculatorsHeroSection({
  activeTab = "SIP",
  onTabSelect,
}: CalculatorsHeroSectionProps) {
  const whatsappUrl =
    "https://wa.me/919736304663?text=Hi%20Vikrant%2C%20I%20am%20using%20the%20Stockstrail%20Calculators%20and%20want%20guidance%20on%20building%20my%20portfolio.";

  return (
    <div className="relative overflow-hidden rounded-3xl border border-stockstrail-green-light/25 bg-gradient-to-b from-[#022B24] via-[#021F1B] to-[#011613] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
      {/* Background Ambient Glows */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 bg-stockstrail-green-light/15 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Simple, Clear & High-Ranking SEO Copy */}
        <div className="lg:col-span-7 space-y-5 text-left">
          {/* Trust Accreditation Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light text-xs font-semibold backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>AMFI Registered ARN-284122 • 100% Free Financial Guidance</span>
          </div>

          {/* Simple, Catchy Headline */}
          <div className="space-y-3">
            <h1
              className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white leading-[1.15] tracking-tight"
              style={{ fontFamily: "var(--font-product-sans)" }}
            >
              See How Much Your <br className="hidden sm:block" />
              <span className="gradient-text font-extrabold">
                Money Can Grow Over Time.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              Calculate your Mutual Fund SIP returns, compare Home Loan EMIs, and check your Income Tax with fast, simple, and 100% free calculators.
            </p>
          </div>

          {/* Quick Calculator Switcher Badges */}
          <div className="pt-1">
            <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-2 font-semibold">
              Choose Calculator:
            </span>
            <div className="flex flex-wrap gap-2">
              {CALCULATOR_PILLS.map((pill) => {
                const isActive = activeTab.toUpperCase() === pill.id;
                return onTabSelect ? (
                  <button
                    key={pill.id}
                    onClick={() => onTabSelect(pill.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-stockstrail-green-light text-black font-extrabold shadow-[0_0_15px_rgba(0,255,151,0.5)] scale-105"
                        : "bg-white/5 border border-white/10 text-white/70 hover:border-stockstrail-green-light/50 hover:text-white"
                    }`}
                  >
                    {pill.name}
                  </button>
                ) : (
                  <Link
                    key={pill.id}
                    href={pill.href}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-white/70 hover:border-stockstrail-green-light/50 hover:text-white transition-all duration-300"
                  >
                    {pill.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Conversion Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stockstrail-green-light text-black font-extrabold text-sm hover:bg-stockstrail-green-accent hover:shadow-[0_0_25px_rgba(0,255,151,0.55)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Talk to Vikrant on WhatsApp →</span>
            </a>

            <Link
              href="/lets-talk"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm hover:border-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-stockstrail-green-light" />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Goal & Compounding Callout Card */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-white/15 bg-black/40 backdrop-blur-xl p-5 sm:p-6 space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-stockstrail-green-light animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  SIP Wealth Growth Example
                </span>
              </div>
              <span className="text-[11px] text-stockstrail-green-light font-semibold">
                12% Expected Return
              </span>
            </div>

            {/* Visual Example Comparison */}
            <div className="space-y-3">
              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex justify-between items-center text-xs">
                <span className="text-white/60">₹10,000 / month for 10 Years</span>
                <span className="text-white font-bold text-sm">₹23.2 Lakh</span>
              </div>

              <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex justify-between items-center text-xs">
                <span className="text-white/60">₹10,000 / month for 15 Years</span>
                <span className="text-white font-bold text-sm">₹50.4 Lakh</span>
              </div>

              <div className="bg-stockstrail-green-light/10 rounded-xl p-3.5 border border-stockstrail-green-light/40 flex justify-between items-center text-xs">
                <div>
                  <span className="text-stockstrail-green-light font-bold block text-sm">
                    ₹10,000 / month for 20 Years
                  </span>
                  <span className="text-[10px] text-white/50">Total Invested: ₹24 Lakh</span>
                </div>
                <div className="text-right">
                  <span className="text-stockstrail-green-light font-black text-lg sm:text-xl block">
                    ₹1.00 Crore
                  </span>
                  <span className="text-[10px] text-stockstrail-green-light/80 font-medium">
                    +₹76 Lakh Profit
                  </span>
                </div>
              </div>
            </div>

            {/* Simple Trust Points */}
            <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-white/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light shrink-0" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light shrink-0" />
                <span>Direct Mutual Funds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light shrink-0" />
                <span>Custom Portfolio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light shrink-0" />
                <span>1-on-1 Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
