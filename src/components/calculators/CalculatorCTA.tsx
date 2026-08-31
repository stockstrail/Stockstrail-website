"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
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
        return `Hi Vikrant, I used the Stockstrail calculator and want to start a SIP of ₹${amount.toLocaleString('en-IN')}/mo to target ${formattedTarget} in ${years} years. Please help me select top mutual funds.`;
      case "LUMPSUM":
        return `Hi Vikrant, I want to invest a lumpsum amount of ₹${amount.toLocaleString('en-IN')} with Stockstrail for ${years} years.`;
      case "FD":
        return `Hi Vikrant, I want to invest ₹${amount.toLocaleString('en-IN')} in high-yield Fixed Deposits. Please share options.`;
      case "EMI":
        return `Hi Vikrant, I am looking for low-interest Loan against Mutual Funds (LAMF) or Home Loan options for ₹${amount.toLocaleString('en-IN')}.`;
      default:
        return `Hi Vikrant, I would like to schedule a free 1-on-1 financial planning call with Stockstrail.`;
    }
  };

  const whatsappUrl = `https://wa.me/919736304663?text=${encodeURIComponent(getWhatsAppMessage())}`;

  return (
    <div className="mt-8 rounded-2xl border border-stockstrail-green-light/40 bg-gradient-to-br from-[#012E27] via-[#02211C] to-[#011411] p-5 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/40 text-stockstrail-green-light text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AMFI Registered ARN-284122 • Zero Advisory Fee</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {type === "SIP" && (
              <>
                Ready to build <span className="text-stockstrail-green-light">{formattedTarget}</span> with a ₹{amount.toLocaleString('en-IN')}/mo SIP?
              </>
            )}
            {type === "LUMPSUM" && (
              <>
                Maximize your <span className="text-stockstrail-green-light">{formatIndianWords(amount)}</span> with goal-based portfolio allocation.
              </>
            )}
            {type === "FD" && (
              <>
                Lock in high-yield guaranteed returns with AAA-rated bank & corporate FDs.
              </>
            )}
            {type === "EMI" && (
              <>
                Need instant liquidity without selling your funds? Explore low-interest LAMF.
              </>
            )}
            {type === "TAX" && (
              <>
                Optimize your tax under 80C, 80D, and NPS with customized tax planning.
              </>
            )}
          </h3>

          <p className="text-white/70 text-xs sm:text-sm">
            Talk directly with founder <strong className="text-white">Vikrant Bhardwaj</strong> for personalized, unbiased mutual fund guidance and zero-brokerage portfolio reviews.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-white/60">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light" />
              100% Honest Advice
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light" />
              Direct AMC Allocation
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
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stockstrail-green-light text-[#012928] font-bold text-sm hover:bg-stockstrail-green-accent hover:shadow-[0_0_20px_rgba(0,255,151,0.5)] transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Start on WhatsApp →</span>
          </a>

          <Link
            href="/lets-talk"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white font-semibold text-sm hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/10 transition-all text-center"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5 text-stockstrail-green-light" />
          </Link>
        </div>
      </div>
    </div>
  );
}
