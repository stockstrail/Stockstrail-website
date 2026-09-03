'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';

interface CalculatorAdvisoryBridgeProps {
  type: string;
}

export default function CalculatorAdvisoryBridge({ type }: CalculatorAdvisoryBridgeProps) {
  const calcName = type.toUpperCase();

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#021f1c] via-[#021615] to-[#011413] border border-stockstrail-green-light/30 shadow-xl space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-stockstrail-green-light font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Projections into Reality</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Need help selecting the best {calcName} investments?
          </h3>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 shrink-0">
          <ShieldCheck className="w-4 h-4 text-stockstrail-green-light" />
          <span>AMFI ARN-284122 Guidance</span>
        </div>
      </div>

      <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal">
        Calculators give you mathematical projections, but market compounding requires disciplined asset allocation, periodic rebalancing, and choosing low-expense ratio schemes. Speak with Vikrant Bhardwaj for a 100% free personalized investment blueprint.
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          href="/lets-talk"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stockstrail-green-light text-black text-xs sm:text-sm font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,255,151,0.3)]"
        >
          <Phone className="w-4 h-4" />
          <span>Schedule Free Advisory Call</span>
        </Link>

        <a
          href={`https://wa.me/919736304663?text=Hi%20Vikrant,%20I%20used%20the%20Stockstrail%20${calcName}%20calculator%20and%20would%20like%20guidance%20on%20my%20portfolio.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Discuss on WhatsApp</span>
        </a>

        <Link
          href="/check-risk-profile"
          className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-stockstrail-green-light ml-auto transition-colors"
        >
          <span>Check Your 2-Min Risk Profile</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
