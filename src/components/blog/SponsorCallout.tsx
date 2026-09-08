import React from "react";
import { Sparkles, Users, TrendingUp, CheckCircle, ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function SponsorCallout() {
  return (
    <div className="my-16 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-[#021c17] via-[#04332b] to-[#011412] p-8 sm:p-12 relative shadow-2xl">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff97]" />
            <span>Stockstrail Partner & Media Network</span>
          </div>

          <h3 className="font-product-sans text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-white leading-tight">
            Advertise Your Brand to <span className="gradient-text">India&apos;s Active Investors</span>
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-work-sans">
            Reach verified salaried professionals, mutual fund allocators, and wealth creators through our high-trust editorial publications, newsletters, and native sponsor slots.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <div className="text-lg sm:text-xl font-bold font-mono text-[#00ff97]">50,000+</div>
              <div className="text-[11px] text-white/60">Monthly Readers</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10">
              <div className="text-lg sm:text-xl font-bold font-mono text-[#00ff97]">82%</div>
              <div className="text-[11px] text-white/60">Salaried & HNIs</div>
            </div>
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 col-span-2 sm:col-span-1">
              <div className="text-lg sm:text-xl font-bold font-mono text-[#00ff97]">3.8 Min</div>
              <div className="text-[11px] text-white/60">Avg. Read Time</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#011412]/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 space-y-4">
          <h4 className="text-lg font-bold font-product-sans text-white">
            Get Our 2026 Media Kit
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-work-sans">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00ff97] shrink-0" />
              <span>Dedicated Sponsored Articles & Deep Dives</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00ff97] shrink-0" />
              <span>Leaderboard & High-CTR Native Banner Slots</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#00ff97] shrink-0" />
              <span>Newsletter Placements to 15,000+ Subscribers</span>
            </li>
          </ul>

          <div className="pt-3 space-y-2.5">
            <a
              href="https://wa.me/919736304663?text=Hi%20Stockstrail%2C%20I%20would%20like%20to%20request%20your%20Media%20Kit%20and%20discuss%20advertising%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00ff97] text-black font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,255,151,0.25)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
            <a
              href="mailto:connect@stockstrail.in?subject=Advertising%20%26%20Sponsorship%20Inquiry%20-%20Stockstrail"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs font-semibold transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email: connect@stockstrail.in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
