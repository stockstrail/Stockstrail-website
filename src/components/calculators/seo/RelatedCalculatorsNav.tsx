import React from "react";
import Link from "next/link";
import {
  TrendingUp,
  DollarSign,
  Landmark,
  Repeat,
  CreditCard,
  ReceiptText,
  ShieldCheck,
  Briefcase,
  PieChart,
  ArrowRight,
} from "lucide-react";

interface RelatedCalculatorsNavProps {
  currentType?: string;
}

const CALCULATORS = [
  {
    type: "sip",
    name: "SIP Calculator",
    href: "/calculators/sip",
    desc: "Calculate monthly compounding returns for mutual funds.",
    icon: TrendingUp,
  },
  {
    type: "lumpsum",
    name: "Lumpsum Calculator",
    href: "/calculators/lumpsum",
    desc: "Project long-term growth of one-time capital investments.",
    icon: DollarSign,
  },
  {
    type: "fd",
    name: "Fixed Deposit (FD)",
    href: "/calculators/fd",
    desc: "Calculate quarterly compound interest & maturity values.",
    icon: Landmark,
  },
  {
    type: "rd",
    name: "Recurring Deposit (RD)",
    href: "/calculators/rd",
    desc: "Estimate guaranteed returns for regular monthly deposits.",
    icon: Repeat,
  },
  {
    type: "emi",
    name: "Loan EMI Calculator",
    href: "/calculators/emi",
    desc: "Analyze monthly EMI, total interest, and amortization.",
    icon: CreditCard,
  },
  {
    type: "tax",
    name: "Income Tax Calculator",
    href: "/calculators/tax",
    desc: "Compare Old vs New Tax Regime with latest budget slabs.",
    icon: ReceiptText,
  },
];

const RELATED_SERVICES = [
  {
    title: "Mutual Fund Portfolios",
    desc: "Zero-commission direct AMC investment & goal planning.",
    href: "/mutual-funds",
    badge: "Direct Allocation",
  },
  {
    title: "High-Yield Corporate FDs",
    desc: "AAA-rated bank & corporate fixed deposits up to 9.1% p.a.",
    href: "/fixed-deposit",
    badge: "Guaranteed",
  },
  {
    title: "Loan Against Mutual Funds",
    desc: "Instant liquidity starting at 9.5% p.a. without selling units.",
    href: "/loan",
    badge: "Low Interest",
  },
  {
    title: "Risk Profiling Assessment",
    desc: "Free SEBI-aligned risk questionnaire for asset allocation.",
    href: "/check-risk-profile",
    badge: "Free Tool",
  },
  {
    title: "Tax-Saving ELSS Funds",
    desc: "Save up to ₹46,800 in tax under Section 80C with 3-yr lock-in.",
    href: "/financial-protection",
    badge: "Section 80C",
  },
  {
    title: "Open Free Demat Account",
    desc: "Seamless, 100% paperless onboarding for Indian investors.",
    href: "/open-demat",
    badge: "Zero AMC",
  },
];

export default function RelatedCalculatorsNav({ currentType }: RelatedCalculatorsNavProps) {
  const filteredCalculators = CALCULATORS.filter((c) => c.type !== currentType);

  return (
    <div className="w-full space-y-10 pt-10 border-t border-white/10">
      {/* 1. Cross-Linked Calculators Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Explore Other Financial Calculators
          </h3>
          <Link
            href="/calculators"
            className="text-xs text-stockstrail-green-light hover:underline inline-flex items-center gap-1"
          >
            <span>All Calculators Hub</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredCalculators.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.type}
                href={c.href}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-stockstrail-green-light/50 hover:bg-stockstrail-green-light/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-stockstrail-green-light/10 text-stockstrail-green-light flex items-center justify-center border border-stockstrail-green-light/30">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-semibold text-white text-sm group-hover:text-stockstrail-green-light transition-colors">
                      {c.name}
                    </span>
                  </div>
                  <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-stockstrail-green-light font-medium">
                  <span>Calculate Now</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. Cross-Linked Financial Services & Solutions */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">
          Recommended Investment & Advisory Solutions
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {RELATED_SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-xl border border-white/10 bg-[#021F19]/80 p-4 hover:border-stockstrail-green-light/50 hover:bg-[#032A22] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-stockstrail-green-light/15 text-stockstrail-green-light border border-stockstrail-green-light/30">
                    {s.badge}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-sm group-hover:text-stockstrail-green-light transition-colors">
                  {s.title}
                </h4>
                <p className="text-white/60 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-white/70 group-hover:text-stockstrail-green-light font-medium">
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 3. Direct Advisory Consultation Banner */}
      <div className="rounded-2xl border border-stockstrail-green-light/40 bg-gradient-to-r from-[#012E27] to-[#011B17] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-stockstrail-green-light text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>AMFI Registered ARN-284122 • Stockstrail Advisory</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white">
            Need help choosing the right funds or tax strategy?
          </h4>
          <p className="text-white/70 text-xs sm:text-sm max-w-xl">
            Book a 1-on-1 confidential strategy session with certified advisors at Stockstrail to audit your existing investments and build an optimal wealth plan.
          </p>
        </div>

        <Link
          href="/lets-talk"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-extrabold text-sm sm:text-base hover:bg-stockstrail-green-light hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] cursor-pointer"
        >
          <span>Book 1-on-1 Consultation</span>
          <ArrowRight className="w-4 h-4 text-black" />
        </Link>
      </div>
    </div>
  );
}
