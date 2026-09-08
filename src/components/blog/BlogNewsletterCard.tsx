"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, BellRing, MessageCircle, Send, Sparkles, ShieldCheck } from "lucide-react";

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
    // Simulate instantaneous clean newsletter registration
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
    }, 600);
  };

  if (isSubscribed) {
    return (
      <div className={`overflow-hidden rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-[#02241e] via-[#04332b] to-[#011412] p-6 sm:p-8 text-center space-y-4 shadow-2xl relative ${className}`}>
        <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-stockstrail-green">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white font-product-sans">
          You&apos;re Officially on the VIP List! 🎉
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-work-sans">
          Welcome to <strong className="text-white">The Stockstrail Dispatch</strong>. You&apos;ll receive our next high-impact market briefing directly at <span className="text-emerald-300 font-mono">{email}</span>.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://wa.me/919736304663"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold hover:bg-[#25D366]/30 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Join WhatsApp Alerts</span>
          </a>
          <a
            href="https://t.me/stockstrail"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#229ED9]/20 border border-[#229ED9]/40 text-[#229ED9] text-xs font-semibold hover:bg-[#229ED9]/30 transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram Channel</span>
          </a>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`overflow-hidden rounded-2xl border border-emerald-500/30 bg-[#031d1a]/90 backdrop-blur-md p-5 text-left space-y-3 shadow-lg ${className}`}>
        <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider">
          <BellRing className="w-3.5 h-3.5 text-[#00ff97]" />
          <span>Get Instant Updates</span>
        </div>
        <h4 className="text-base font-bold text-white font-product-sans">
          Never Miss a Market Opportunity
        </h4>
        <p className="text-xs text-slate-300 font-work-sans leading-relaxed">
          Get weekly curated SEBI guidelines, SIP fund picks, and tax hacks in your inbox.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address..."
            required
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-stockstrail-green text-black font-bold text-xs hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,151,0.25)] flex items-center justify-center gap-2"
          >
            {loading ? "Subscribing..." : "Join 15,000+ Readers →"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden rounded-3xl border border-emerald-500/35 bg-gradient-to-br from-[#021f1a] via-[#053229] to-[#011614] p-6 sm:p-10 text-center relative group shadow-2xl ${className}`}>
      {/* Subtle glowing radial background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-36 bg-stockstrail-green/15 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs uppercase tracking-wider font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#00ff97]" />
          <span>The Stockstrail Dispatch • Free Weekly Edition</span>
        </div>

        <h3 className="font-product-sans text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-white leading-tight">
          Smart Investing, <span className="gradient-text">Delivered Every Saturday</span>
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-work-sans">
          Join <strong className="text-white">15,000+ smart Indian investors</strong> who read our 3-minute breakdowns on mutual funds, SEBI regulatory changes, and portfolio building strategies.
        </p>

        <form onSubmit={handleSubmit} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <div className="relative w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your personal email..."
              required
              className="w-full pl-11 pr-4 py-3 rounded-full bg-black/50 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto shrink-0 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-[#00ff97] text-black font-bold text-sm hover:opacity-95 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,151,0.3)] disabled:opacity-50"
          >
            {loading ? "Joining..." : "Subscribe Free"}
          </button>
        </form>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60 font-work-sans">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>No spam ever. 100% Free. Unsubscribe anytime.</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white/20">•</span>
            <a
              href="https://wa.me/919736304663"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-white underline transition-colors"
            >
              Get Instant WhatsApp Alerts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
