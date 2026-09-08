"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, TrendingUp, ShieldCheck } from "lucide-react";

interface AdSenseSlotProps {
  format?: "leaderboard" | "in-article" | "sidebar" | "native-banner";
  slotId?: string;
  adClient?: string;
  className?: string;
}

export default function AdSenseSlot({
  format = "in-article",
  slotId,
  adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  className = "",
}: AdSenseSlotProps) {
  const isAdSenseActive = Boolean(adClient && slotId);

  useEffect(() => {
    if (isAdSenseActive && typeof window !== "undefined") {
      try {
        // @ts-expect-error Google AdSense queue
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense push error:", err);
      }
    }
  }, [isAdSenseActive]);

  // If live AdSense is configured, render Google AdSense ins element
  if (isAdSenseActive) {
    return (
      <div className={`my-8 overflow-hidden rounded-2xl border-2 border-white/15 bg-[#031d1a] p-4 text-center ${className}`}>
        <div className="mb-2 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-300">
          <span>Advertisement</span>
          <span>Google Verified</span>
        </div>
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={adClient}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Fallback: Luxury Editorial Sponsor & Partner Card designed for Indian HNIs and Advertisers
  if (format === "leaderboard") {
    return (
      <div className={`my-8 overflow-hidden rounded-3xl border-2 border-[#00ff97]/35 bg-gradient-to-r from-[#031d1a] via-[#042823] to-[#021817] p-5 sm:p-7 shadow-2xl relative group ${className}`}>
        <div className="absolute top-0 right-0 px-3.5 py-1 bg-[#00ff97]/20 border-b border-l border-[#00ff97]/40 text-[10px] font-mono uppercase tracking-widest text-[#00ff97] font-bold rounded-bl-2xl">
          Partner Spotlight
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[11px] font-bold font-mono text-[#00ff97]">
              <Sparkles className="w-3.5 h-3.5 text-[#00ff97]" />
              <span>Reach 50,000+ Smart Indian Investors</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-product-sans">
              Looking to Feature Your Fintech or Wealth Brand?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-work-sans">
              Partner with Stockstrail to reach salaried professionals, active SIP investors, and HNIs across India.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="https://wa.me/919736304663?text=Hi%20Stockstrail%2C%20I%20am%20interested%20in%20sponsoring%20or%20advertising%20on%20your%20blog."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(0,255,151,0.45)] hover:scale-105 active:scale-95"
            >
              <span>Sponsor This Publication</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (format === "sidebar") {
    return (
      <div className={`overflow-hidden rounded-2xl border-2 border-[#00ff97]/30 bg-gradient-to-br from-[#042420] via-[#021715] to-[#010e0c] p-6 text-center space-y-4 shadow-xl relative ${className}`}>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[10px] font-mono uppercase tracking-widest text-[#00ff97] font-bold">
          <TrendingUp className="w-3.5 h-3.5 text-[#00ff97]" />
          <span>Sponsor Opportunity</span>
        </div>
        <h4 className="text-lg font-bold font-product-sans text-white leading-snug">
          Promote to 50k+ Verified Investors
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed font-work-sans">
          Get direct visibility for your fintech products, Demat platforms, or wealth tools in front of verified investors.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/919736304663?text=Hi%20Stockstrail%2C%20I%20would%20like%20to%20know%20about%20sidebar%20and%20native%20sponsorship%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,151,0.4)]"
          >
            <span>Advertise with Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="text-[10px] text-white/50 pt-1 font-mono">
          Google AdSense &amp; Direct Brand Placements
        </div>
      </div>
    );
  }

  // In-Article Native Placement
  return (
    <div className={`my-10 overflow-hidden rounded-3xl border-2 border-[#00ff97]/35 bg-gradient-to-r from-[#031d19] via-[#052d27] to-[#021815] p-6 sm:p-8 shadow-xl relative not-prose ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#00ff97]/20 text-[#00ff97] text-[10px] font-mono uppercase tracking-wider font-bold">
              Sponsored Insight
            </span>
            <span className="text-[11px] text-slate-300 font-mono">• AMFI ARN-284122</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white font-product-sans">
            Need Expert Review on Your Existing Mutual Funds or SIPs?
          </h4>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-work-sans">
            Get an unbiased, data-backed portfolio health check from Stockstrail&apos;s NISM certified mutual fund advisors. 100% Free.
          </p>
        </div>
        <div className="shrink-0 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/check-risk-profile"
            className="px-6 py-3 rounded-full bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,151,0.4)]"
          >
            Check Risk Profile
          </Link>
          <Link
            href="/lets-talk"
            className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs sm:text-sm transition-all"
          >
            Talk to Advisor →
          </Link>
        </div>
      </div>
    </div>
  );
}
