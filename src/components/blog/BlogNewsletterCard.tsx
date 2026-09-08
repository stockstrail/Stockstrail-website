"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, BellRing, MessageCircle, Send, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

interface BlogNewsletterCardProps {
  variant?: "inline" | "full" | "compact";
  className?: string;
}

export default function BlogNewsletterCard({
  variant = "full",
  className = "",
}: BlogNewsletterCardProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
    }, 500);
  };

  if (isSubscribed) {
    return (
      <div className={`overflow-hidden rounded-3xl border-2 border-[#00ff97]/60 bg-gradient-to-br from-[#02241e] via-[#04332b] to-[#011412] p-6 sm:p-8 text-center space-y-4 shadow-2xl relative ${className}`}>
        <div className="w-14 h-14 mx-auto rounded-full bg-[#00ff97] text-[#012928] flex items-center justify-center shadow-[0_0_25px_rgba(0,255,151,0.5)] font-bold">
          <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-product-sans">
          You&apos;re Officially Subscribed! 🎉
        </h3>
        <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed font-work-sans">
          Welcome to <strong className="text-[#00ff97]">The Stockstrail Dispatch</strong>. Your weekly market intelligence report will arrive directly at <span className="text-white font-mono font-bold">{email}</span>.
        </p>
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/919736304663"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-black font-bold text-xs hover:brightness-110 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)]"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Join WhatsApp Community</span>
          </a>
          <a
            href="https://t.me/stockstrail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#229ED9] text-white font-bold text-xs hover:brightness-110 transition-all shadow-[0_0_20px_rgba(34,158,217,0.4)]"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram Alerts</span>
          </a>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`overflow-hidden rounded-2xl border-2 border-[#00ff97]/30 bg-[#031d1a] backdrop-blur-md p-5 text-left space-y-3.5 shadow-xl ${className}`}>
        <div className="flex items-center gap-2 text-[#00ff97] text-xs font-mono font-bold uppercase tracking-wider">
          <BellRing className="w-4 h-4 text-[#00ff97] animate-bounce" />
          <span>The Stockstrail Dispatch</span>
        </div>
        <h4 className="text-base font-bold text-white font-product-sans leading-snug">
          Free Weekly Market &amp; Mutual Fund Insights
        </h4>
        <p className="text-xs text-slate-300 font-work-sans leading-relaxed">
          Get weekly curated SEBI guidelines, SIP fund analysis, and tax-saving strategies straight in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2.5 pt-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            required
            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/20 text-white placeholder-white/40 text-xs focus:outline-none focus:border-[#00ff97] focus:ring-1 focus:ring-[#00ff97] transition-all"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(0,255,151,0.4)] flex items-center justify-center gap-2 font-work-sans active:scale-95"
          >
            <span>{loading ? "Subscribing..." : "Subscribe for Free Updates"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-3xl border-2 border-[#00ff97]/35 bg-gradient-to-br from-[#021f1a] via-[#053229] to-[#011614] p-6 sm:p-10 text-center relative group shadow-2xl ${className}`}>
      {/* Glowing radial background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-36 bg-[#00ff97]/20 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[#00ff97] font-mono text-xs uppercase tracking-wider font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#00ff97]" />
          <span>The Stockstrail Dispatch • Free Weekly Edition</span>
        </div>

        <h3 className="font-product-sans text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-white leading-tight">
          Smart Investing, <span className="gradient-text">Delivered Every Saturday</span>
        </h3>

        <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-work-sans">
          Receive clear, jargon-free breakdowns on mutual funds, SEBI regulatory changes, and disciplined portfolio building strategies straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your personal email..."
              required
              className="w-full pl-11 pr-4 py-3.5 rounded-full bg-black/60 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#00ff97] focus:ring-1 focus:ring-[#00ff97] transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto shrink-0 px-8 py-3.5 rounded-full bg-[#00ff97] text-[#012928] font-bold text-sm hover:bg-white hover:text-black hover:scale-105 transition-all shadow-[0_0_25px_rgba(0,255,151,0.45)] disabled:opacity-50 active:scale-95"
          >
            {loading ? "Joining..." : "Subscribe Free"}
          </button>
        </form>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-white/70 font-work-sans">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00ff97]" />
            <span>No spam ever. 100% Free. Unsubscribe anytime.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/20">•</span>
            <a
              href="https://wa.me/919736304663"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ff97] hover:text-white underline font-semibold transition-colors flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Get Instant WhatsApp Alerts</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
