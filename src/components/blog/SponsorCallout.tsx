import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, RefreshCw, CheckCircle2, ArrowRight, MessageCircle, PhoneCall } from "lucide-react";

export default function SponsorCallout() {
  return (
    <div className="my-16 overflow-hidden rounded-3xl border-2 border-[#00ff97]/30 bg-gradient-to-br from-[#021c17] via-[#04332b] to-[#011412] p-8 sm:p-12 relative shadow-2xl">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#00ff97]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-mono font-bold uppercase tracking-wider text-[#00ff97]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00ff97]" />
            <span>AMFI Registered Distributor • ARN-284122</span>
          </div>

          <h3 className="font-product-sans text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-white leading-tight">
            Build Disciplined Wealth with <span className="gradient-text">Goal-Based Financial Planning</span>
          </h3>

          <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-work-sans">
            Whether you are starting your first ₹1,000 monthly SIP or seeking a second opinion on an existing portfolio, Stockstrail provides honest, data-backed guidance tailored directly to your family&apos;s financial milestones.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-3">
            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#00ff97]">
                <Target className="w-4 h-4" />
                <span>Goal-First</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Portfolios mapped to retirement, child education, and emergency funds.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#00ff97]">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero Pressure</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Transparent distributor disclosures and zero sales push.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#00ff97]">
                <RefreshCw className="w-4 h-4" />
                <span>Periodic Review</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                Quarterly portfolio check-ups and disciplined rebalancing.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#011412]/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-emerald-500/35 space-y-4 shadow-xl">
          <h4 className="text-lg font-bold font-product-sans text-white">
            Schedule a Free Strategy Call
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-work-sans">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0" />
              <span>100% Free Initial Portfolio Audit</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0" />
              <span>Personal Risk Profile &amp; Asset Allocation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00ff97] shrink-0" />
              <span>NISM Certified Wealth Advisor Support</span>
            </li>
          </ul>

          <div className="pt-2 space-y-2.5">
            <Link
              href="/lets-talk"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00ff97] text-[#012928] font-bold text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(0,255,151,0.45)] active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#012928]" />
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919736304663?text=Hi%20Stockstrail%2C%20I%20would%20like%20to%20consult%20with%20an%20advisor%20regarding%20my%20mutual%20fund%20investments."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white text-xs font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#00ff97]" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
