"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { formatIndianWords } from "./GrowthChart";

interface CalculatorCTAProps {
  type: "SIP" | "LUMPSUM" | "FD" | "RD" | "EMI" | "TAX";
  amount: number;
  years?: number;
  expectedWealth?: number;
}

export default function CalculatorCTA({
  type,
  amount,
  years = 10,
  expectedWealth = 0,
}: CalculatorCTAProps) {
  const formattedTarget = expectedWealth > 0 ? formatIndianWords(expectedWealth) : "";

  // WhatsApp prefilled message
  const getWhatsAppMessage = () => {
    switch (type) {
      case "SIP":
        return `Hi Vikrant, I used your Stockstrail SIP calculator and want to start investing ₹${amount.toLocaleString('en-IN')}/mo to target ${formattedTarget} in ${years} years. Please help me build my customized portfolio basket.`;
      case "LUMPSUM":
        return `Hi Vikrant, I used your Stockstrail calculator and want to invest a lumpsum amount of ₹${amount.toLocaleString('en-IN')} for ${years} years. Please recommend top fund options.`;
      case "FD":
        return `Hi Vikrant, I want to invest ₹${amount.toLocaleString('en-IN')} in high-yield AAA corporate Fixed Deposits. Please share available options.`;
      case "EMI":
        return `Hi Vikrant, I am looking for low-interest Loan Against Mutual Funds (LAMF) or Home Loan options for ₹${amount.toLocaleString('en-IN')}.`;
      default:
        return `Hi Vikrant, I would like to schedule a free 1-on-1 wealth consultation with Stockstrail.`;
    }
  };

  const whatsappUrl = `https://wa.me/919736304663?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <div className="mt-8 rounded-2xl border border-stockstrail-green-light/40 bg-gradient-to-br from-[#012E27] via-[#02211C] to-[#011411] p-5 sm:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="space-y-2.5 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/40 text-stockstrail-green-light text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AMFI Registered ARN-284122 • 100% Free Advisory</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            {type === "SIP" && (
              <>
                Ready to build <span className="text-stockstrail-green-light">{formattedTarget}</span> with a ₹{amount.toLocaleString('en-IN')}/mo SIP?
              </>
            )}
            {type === "LUMPSUM" && (
              <>
                Maximize your <span className="text-stockstrail-green-light">{formatIndianWords(amount)}</span> capital with research-backed allocation.
              </>
            )}
            {type === "FD" && (
              <>
                Lock in up to <span className="text-stockstrail-green-light">9.1% p.a. guaranteed returns</span> with AAA-rated corporate FDs.
              </>
            )}
            {type === "EMI" && (
              <>
                Lower your interest burden with <span className="text-stockstrail-green-light">Loan Against Mutual Funds (9.5% p.a.)</span>.
              </>
            )}
            {type === "TAX" && (
              <>
                Save up to <span className="text-stockstrail-green-light">₹46,800 under Section 80C</span> with tax-optimized mutual funds.
              </>
            )}
          </h3>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
            Turn this calculation into a real portfolio. Get a customized, research-backed mutual fund basket picked by AMFI-registered founder <strong className="text-white">Vikrant Bhardwaj</strong> — completely free with zero distributor markups.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light" />
              Direct AMC Execution
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light" />
              100% Free Consultation
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light" />
              No Hidden Charges
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stockstrail-green-light text-black font-extrabold text-sm hover:bg-stockstrail-green-accent hover:shadow-[0_0_25px_rgba(0,255,151,0.6)] transition-all active:scale-95 text-center"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get My Plan on WhatsApp →</span>
          </a>

          <Link
            href="/lets-talk"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/10 transition-all text-center"
          >
            <span>Book Free 1-on-1 Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-stockstrail-green-light" />
          </Link>
        </div>
      </div>
    </div>
  );
}
