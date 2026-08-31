"use client";

import React from "react";
import { formatIndianWords } from "./GrowthChart";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

interface BreakdownDonutProps {
  invested: number;
  returns: number;
  investedLabel?: string;
  returnsLabel?: string;
}

export default function BreakdownDonut({
  invested,
  returns,
  investedLabel = "INVESTED AMOUNT",
  returnsLabel = "EST. RETURNS",
}: BreakdownDonutProps) {
  const total = Math.max(1, invested + returns);
  const multiplier = invested > 0 ? total / invested : 1;
  const growthPct = invested > 0 ? (returns / invested) * 100 : 0;
  const returnsRatio = Math.min(100, Math.max(0, (returns / total) * 100));

  return (
    <div className="flex flex-col items-center justify-center gap-5 sm:gap-6 py-2">
      <div
        className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,151,0.25)] p-1.5"
        style={{
          background: `conic-gradient(#00FF97 0% ${returnsRatio}%, rgba(255,255,255,0.15) ${returnsRatio}% 100%)`,
        }}
      >
        <div className="w-full h-full rounded-full bg-[#081C17] flex items-center justify-center flex-col text-center p-4">
          <div className="text-stockstrail-green-light text-2xl sm:text-3xl font-extrabold tracking-tight">
            {multiplier.toFixed(2)}x
          </div>
          <div className="text-white/60 text-xs sm:text-sm font-medium">
            Wealth Multiplier
          </div>
          <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/40">
            <span className="text-stockstrail-green-light font-bold text-xs">
              +{growthPct.toFixed(1)}%
            </span>
            <span className="text-white/60 text-[10px] uppercase tracking-wider">
              Gain
            </span>
          </div>
        </div>
      </div>

      {/* Legend & Breakdown Badges */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 p-3 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF97] shadow-[0_0_6px_#00FF97]" />
            <span className="text-[11px] uppercase tracking-wider text-white/70 font-medium">
              {returnsLabel}
            </span>
          </div>
          <div className="text-stockstrail-green-light font-bold text-sm sm:text-base">
            ₹{formatINR(returns)}
          </div>
          <div className="text-[10px] text-white/50">
            {formatIndianWords(returns)}
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="text-[11px] uppercase tracking-wider text-white/70 font-medium">
              {investedLabel}
            </span>
          </div>
          <div className="text-white font-bold text-sm sm:text-base">
            ₹{formatINR(invested)}
          </div>
          <div className="text-[10px] text-white/50">
            {formatIndianWords(invested)}
          </div>
        </div>
      </div>
    </div>
  );
}
