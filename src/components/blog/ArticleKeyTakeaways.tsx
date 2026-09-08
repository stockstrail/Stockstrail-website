"use client";

import React, { useState } from "react";
import { Sparkles, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck, Zap } from "lucide-react";

interface KeyTakeawaysProps {
  title: string;
  points: string[];
  fastAnswer?: string;
  category?: string;
  className?: string;
}

export default function ArticleKeyTakeaways({
  title,
  points,
  fastAnswer,
  category = "Mutual Funds & Regulations",
  className = "",
}: KeyTakeawaysProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!points || points.length === 0) return null;

  return (
    <section
      id="key-takeaways"
      aria-label="Executive Summary and Key Takeaways for AI & Readers"
      className={`my-6 overflow-hidden rounded-3xl border-2 border-[#00ff97]/40 bg-gradient-to-br from-[#02231e] via-[#04332b] to-[#011614] p-5 sm:p-7 shadow-2xl relative not-prose ${className}`}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-[#00ff97]/10 blur-3xl rounded-full pointer-events-none" />

      {/* Header Bar */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#00ff97] text-[#012928] flex items-center justify-center font-bold shadow-[0_0_15px_rgba(0,255,151,0.5)]">
            <Zap className="w-4 h-4 fill-[#012928]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold font-product-sans text-white">
                Executive Summary &amp; Key Takeaways
              </h3>
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[#00ff97] font-mono uppercase font-bold">
                AI &amp; Quick Read
              </span>
            </div>
            <p className="text-[11px] text-emerald-300/80 font-mono">
              E-E-A-T Verified • Fact-Checked by AMFI ARN-284122
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
          aria-label={isOpen ? "Collapse key takeaways" : "Expand key takeaways"}
        >
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Direct Query Answer (Featured Snippet Optimized) */}
      {fastAnswer && isOpen && (
        <div className="mt-4 p-3.5 rounded-2xl bg-black/40 border border-[#00ff97]/30 text-xs sm:text-sm text-slate-100 font-work-sans leading-relaxed relative z-10">
          <span className="font-bold text-[#00ff97] block font-mono text-[11px] uppercase tracking-wider mb-1">
            ⚡ Direct Fast Answer:
          </span>
          {fastAnswer}
        </div>
      )}

      {/* Bullet Points */}
      {isOpen && (
        <ul className="mt-4 space-y-2.5 relative z-10 text-xs sm:text-sm text-slate-200 font-work-sans">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0 mt-0.5" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
