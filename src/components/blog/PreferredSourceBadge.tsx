"use client";

import React, { useState } from "react";
import { Star, ShieldCheck, Sparkles, ExternalLink, CheckCircle2, X, Compass, Info } from "lucide-react";

// Official Google Multi-Color G Icon
export const GoogleGIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

// Google News Colorful Newspaper Icon
export const GoogleNewsIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="3" fill="#1E293B" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6 7H14" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 11H18" stroke="#34A853" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 15H18" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" />
    <path d="M16 7H18" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

interface PreferredSourceBadgeProps {
  variant?: "pill" | "card" | "banner" | "button";
  className?: string;
}

const GOOGLE_NEWS_URL = "https://news.google.com/search?q=Stockstrail%20mutual%20funds&hl=en-IN&gl=IN&ceid=IN%3Aen";

export default function PreferredSourceBadge({
  variant = "pill",
  className = "",
}: PreferredSourceBadgeProps) {
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Variant 1: Compact Pill for Article Header
  if (variant === "pill") {
    return (
      <>
        <div className={`inline-flex items-center gap-2 flex-wrap ${className}`}>
          {/* Follow on Google News Pill */}
          <a
            href={GOOGLE_NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Follow Stockstrail on Google News for prioritized updates in Google Discover & AI Overviews"
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#03231e] hover:bg-[#063830] border border-[#00ff97]/40 text-xs text-white font-medium transition-all shadow-[0_0_15px_rgba(0,255,151,0.15)] hover:border-[#00ff97]"
          >
            <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="font-product-sans font-semibold text-[11px] sm:text-xs">Follow on Google News</span>
            <ExternalLink className="w-3 h-3 text-[#00ff97] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Preferred Source E-E-A-T Tag */}
          <button
            type="button"
            onClick={() => setShowInfoModal(true)}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-[10px] sm:text-[11px] text-emerald-300 font-mono transition-all"
            title="Learn why Stockstrail is structured as a preferred financial source"
          >
            <Star className="w-3 h-3 text-[#00ff97] fill-[#00ff97]/30" />
            <span>Preferred Source</span>
            <Info className="w-3 h-3 text-white/40" />
          </button>
        </div>

        {/* Informational Modal on Preferred Source & AI Discoverability */}
        {showInfoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg rounded-3xl bg-[#021f1c] border-2 border-[#00ff97]/50 p-6 sm:p-8 text-left text-white shadow-2xl space-y-5">
              <button
                type="button"
                onClick={() => setShowInfoModal(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#00ff97] text-[#012928] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(0,255,151,0.5)]">
                  <Star className="w-5 h-5 fill-[#012928]" />
                </div>
                <div>
                  <h3 className="font-product-sans font-bold text-lg text-white">
                    Preferred Financial Intelligence Source
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono">
                    Google Discover • AI Overviews • Top Stories
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 font-work-sans leading-relaxed">
                Stockstrail editorial content is authored and reviewed by AMFI-registered mutual fund advisors (ARN-284122) and formatted with strict E-E-A-T standards for citation in Google AI Overviews, Gemini, Perplexity, and Google Discover.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0 mt-0.5" />
                  <span><strong>Priority Google Discover:</strong> Pin Stockstrail on Google News to receive timely alerts on SEBI policy and SIP strategies.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0 mt-0.5" />
                  <span><strong>AI Overview Citation Ready:</strong> Pure factual analysis with zero sponsored bias or unverified marketing claims.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0 mt-0.5" />
                  <span><strong>AMFI &amp; NISM V-A Certified:</strong> Backed by real regulatory registrations and fiduciary standards.</span>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={GOOGLE_NEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,151,0.4)]"
                >
                  <GoogleGIcon className="w-4 h-4" />
                  <span>Follow on Google News</span>
                </a>
                <button
                  type="button"
                  onClick={() => setShowInfoModal(false)}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Variant 2: Card for Sticky Sidebar & In-Article Footers
  if (variant === "card") {
    return (
      <div className={`overflow-hidden rounded-2xl border-2 border-[#00ff97]/30 bg-gradient-to-br from-[#03231f] via-[#021815] to-[#010f0d] p-5 sm:p-6 text-left space-y-4 shadow-xl relative ${className}`}>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[10px] font-mono uppercase tracking-widest text-[#00ff97] font-bold">
            <Star className="w-3.5 h-3.5 fill-[#00ff97]" />
            <span>Preferred Source</span>
          </div>
          <GoogleGIcon className="w-4 h-4" />
        </div>

        <div className="space-y-1.5">
          <h4 className="text-base sm:text-lg font-bold font-product-sans text-white leading-snug">
            Follow on Google News &amp; Discover
          </h4>
          <p className="text-xs text-slate-300 font-work-sans leading-relaxed">
            Get instant SEBI policy updates, market trend analysis, and curated SIP picks prioritized in your Google Discover feed &amp; AI Overviews.
          </p>
        </div>

        <div className="space-y-2 pt-1 border-t border-white/10 text-[11px] text-white/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff97] shrink-0" />
            <span>E-E-A-T Verified Financial Intelligence</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff97] shrink-0" />
            <span>AMFI Registered Advisory (ARN-284122)</span>
          </div>
        </div>

        <div className="pt-2">
          <a
            href={GOOGLE_NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm hover:bg-[#00ff97] hover:text-[#012928] transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,151,0.4)] active:scale-95"
          >
            <GoogleGIcon className="w-4 h-4" />
            <span>Follow on Google News</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  // Variant 3: Sleek Editorial Ribbon Banner (Blog Top / Above Fold)
  if (variant === "banner") {
    return (
      <div className={`overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#021c17]/90 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-3.5 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-xs ${className}`}>
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[#00ff97] flex items-center justify-center shrink-0">
            <Star className="w-4 h-4 fill-[#00ff97]" />
          </div>
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="font-bold text-white font-product-sans text-sm">Preferred Financial Source</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono uppercase">AI &amp; Google News</span>
            </div>
            <p className="text-[11px] text-slate-300 font-work-sans">
              AMFI ARN-284122 verified research structured for Google Discover, Top Stories, and AI Search.
            </p>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-2.5">
          <a
            href={GOOGLE_NEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00ff97] text-[#012928] font-bold text-xs hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,151,0.3)]"
          >
            <GoogleGIcon className="w-3.5 h-3.5" />
            <span>Follow on Google News</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    );
  }

  // Variant 4: Standard Button Link
  return (
    <a
      href={GOOGLE_NEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold transition-all ${className}`}
    >
      <GoogleGIcon className="w-3.5 h-3.5" />
      <span>Follow on Google News</span>
      <ExternalLink className="w-3 h-3 text-[#00ff97]" />
    </a>
  );
}
