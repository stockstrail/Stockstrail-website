import React from "react";
import {
  TrendingUp,
  DollarSign,
  Landmark,
  Repeat,
  CreditCard,
  ReceiptText,
  CheckCircle2,
} from "lucide-react";

export type DedicatedCalcType = "sip" | "lumpsum" | "fd" | "rd" | "emi" | "tax";

interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const HERO_CONFIG: Record<DedicatedCalcType, HeroData> = {
  sip: {
    badge: "Mutual Fund SIP Growth",
    title: "SIP CALCULATOR",
    subtitle:
      "See how small monthly investments in Mutual Funds can grow into big wealth over 5, 10, or 20 years.",
    icon: TrendingUp,
    highlights: [
      "Power of monthly compounding",
      "Average cost reduction in market dips",
      "100% Free Advice • Direct Mutual Funds",
    ],
  },
  lumpsum: {
    badge: "One-Time Investment Growth",
    title: "LUMPSUM CALCULATOR",
    subtitle:
      "Calculate the future value of your one-time savings invested in top Mutual Funds.",
    icon: DollarSign,
    highlights: [
      "Full investment grows from Day 1",
      "Goal-based portfolio selection",
      "Compare easily with Fixed Deposits",
    ],
  },
  emi: {
    badge: "Loan & EMI Planning",
    title: "LOAN EMI CALCULATOR",
    subtitle:
      "Calculate your exact monthly EMI, total interest amount, and complete loan payment schedule.",
    icon: CreditCard,
    highlights: [
      "Exact Monthly EMI calculation",
      "Principal vs Interest breakdown",
      "Loan Against Mutual Funds (from 9.5% p.a.)",
    ],
  },
  tax: {
    badge: "Income Tax FY 2025-26 & 2026-27",
    title: "INCOME TAX CALCULATOR",
    subtitle:
      "Compare your tax under the New vs Old Tax Regime and see how much you can save.",
    icon: ReceiptText,
    highlights: [
      "Zero Tax up to ₹12.75 Lakh (New Regime)",
      "Instant Old vs New Regime Comparison",
      "Tax saving with Section 80C & 80D",
    ],
  },
  fd: {
    badge: "Guaranteed Return Calculator",
    title: "FIXED DEPOSIT CALCULATOR",
    subtitle:
      "Calculate your exact Fixed Deposit maturity amount and interest earned with quarterly compounding.",
    icon: Landmark,
    highlights: [
      "Standard quarterly compounding",
      "High-yield corporate FDs up to 9.1%",
      "Special Senior Citizen interest calculation",
    ],
  },
  rd: {
    badge: "Monthly Savings Calculator",
    title: "RECURRING DEPOSIT CALCULATOR",
    subtitle:
      "Calculate how much your monthly deposits will grow with guaranteed bank interest rates.",
    icon: Repeat,
    highlights: [
      "Guaranteed risk-free savings growth",
      "Fixed monthly savings planning",
      "Accurate maturity interest calculation",
    ],
  },
};

export default function DedicatedCalculatorHero({ type }: { type: DedicatedCalcType }) {
  const config = HERO_CONFIG[type] || HERO_CONFIG.sip;
  const Icon = config.icon;

  return (
    <div className="text-center space-y-5">
      {/* Category Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(0,255,151,0.15)]">
        <Icon className="w-4 h-4" />
        <span>{config.badge}</span>
      </div>

      {/* Main Title */}
      <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase gradient-text tracking-tight">
        {config.title}
      </h1>

      {/* Subtitle */}
      <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        {config.subtitle}
      </p>

      {/* Distinct 3-Point Value Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs text-white/70">
        {config.highlights.map((h, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light shrink-0" />
            <span className="text-white/80">{h}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
