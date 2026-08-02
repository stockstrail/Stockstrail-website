"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Clock, PieChart, Layers, CheckCircle2, AlertTriangle } from "lucide-react";

interface RiskLogicModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CATEGORY_DETAILS = [
  {
    name: "Conservative",
    range: "Score < 40 (or Short-Term Horizon < 3 Yrs)",
    allocation: "90% Fixed Income · 10% Equity",
    accent: "border-blue-500/40 bg-blue-500/10 text-blue-400",
    badgeBg: "bg-blue-500/20 text-blue-300",
    description: "Capital preservation, high liquidity, and minimal volatility are primary goals. Suited for investors with near-term capital needs or low risk tolerance.",
    keyPoints: [
      "Heavy allocation to Fixed Deposits, Debt Mutual Funds, and Liquid Funds",
      "Minimal 10% equity exposure to maintain purchasing power against inflation",
      "Short-term horizons (<3 yrs) are automatically capped here for capital safety",
    ]
  },
  {
    name: "Moderately Conservative",
    range: "Score 40 – 50 (or Short-Term High Tolerance)",
    allocation: "70% Fixed Income · 30% Equity",
    accent: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
    badgeBg: "bg-cyan-500/20 text-cyan-300",
    description: "Seeks modest capital growth while limiting portfolio drawdowns. Comfortable with minor short-term fluctuations for slightly higher returns.",
    keyPoints: [
      "70% stability buffer in high-grade fixed income instruments",
      "30% equity allocation primarily in Large-Cap / Hybrid funds",
      "Provides steady compounding with reduced downside exposure",
    ]
  },
  {
    name: "Moderate",
    range: "Score 51 – 70 (Horizon 3+ Years)",
    allocation: "40% Fixed Income · 60% Equity",
    accent: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400",
    badgeBg: "bg-yellow-500/20 text-yellow-300",
    description: "Balanced approach targeting long-term wealth creation alongside portfolio stability. Accepts moderate market fluctuations.",
    keyPoints: [
      "60% equity exposure for long-term inflation-beating capital appreciation",
      "40% fixed income allocation to rebalance and absorb market downturns",
      "Requires minimum 3 to 5 years investment horizon",
    ]
  },
  {
    name: "Moderately Aggressive",
    range: "Score 71 – 90 (Horizon 5+ Years)",
    allocation: "10% Fixed Income · 90% Equity (Large-Cap Focused)",
    accent: "border-orange-500/40 bg-orange-500/10 text-orange-400",
    badgeBg: "bg-orange-500/20 text-orange-300",
    description: "High growth orientation with significant market volatility tolerance. Primarily equity-focused with large-cap bias for stability.",
    keyPoints: [
      "90% equity allocation with focus on Large-Cap and Flexi-Cap funds",
      "10% liquid/cash buffer for rebalancing opportunities during market dips",
      "Suited for long-term goals (5–7+ years)",
    ]
  },
  {
    name: "Aggressive",
    range: "Score 91 – 100 (Horizon 7+ Years)",
    allocation: "10% Fixed Income · 90% Equity (Multi-Cap & Mid/Small Cap)",
    accent: "border-red-500/40 bg-red-500/10 text-red-400",
    badgeBg: "bg-red-500/20 text-red-300",
    description: "Maximum capital appreciation strategy. Willing to endure substantial short-term market drawdowns for superior long-term alpha.",
    keyPoints: [
      "90% equity diversified across Large, Mid, and Small-Cap funds",
      "Designed for investors with high capacity to absorb market drawdowns",
      "Requires long investment horizon (7–10+ years)",
    ]
  }
];

export function RiskLogicModal({ open, onOpenChange }: RiskLogicModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#031815] border-white/10 text-white max-w-5xl max-h-[90vh] overflow-y-auto custom-scrollbar">
        <DialogHeader className="pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-product-sans text-white">
                Risk Assessment Analysis Logic & Methodology
              </DialogTitle>
              <DialogDescription className="text-white/60 text-sm mt-0.5">
                Complete overview of scoring rules, horizon adjustments, category divisions, and asset allocations
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-8 pt-4">
          {/* Step 1: Scoring Engine */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-stockstrail-green-light" />
              1. Multi-Factor Scoring Engine (0 – 100 Points)
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">Financial Capacity</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-white/80 space-y-1">
                  <p>• Income stability & cashflow</p>
                  <p>• Monthly savings ratio</p>
                  <p>• Emergency fund adequacy</p>
                  <p>• Dependents & liabilities</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">Risk Tolerance</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-white/80 space-y-1">
                  <p>• Reaction to 15–20% portfolio drop</p>
                  <p>• Return vs. risk preference</p>
                  <p>• Investment experience & knowledge</p>
                  <p>• Past investment behavior</p>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-white/60 uppercase tracking-wider">Time Horizon</CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-white/80 space-y-1">
                  <p>• Goal timeline (Question 11)</p>
                  <p>• Liquidity requirement window</p>
                  <p>• Compounding capability</p>
                  <p>• Downside recovery window</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Step 2: Time Horizon Capping Rule */}
          <Card className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-amber-500/30">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-amber-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                2. Time Horizon Override Rule (Safety Mechanism)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-white/80 space-y-2">
              <p>
                Even if an investor achieves a high risk tolerance score (e.g. 85 / 100), if their investment horizon is <strong>Short Term (&lt; 3 Years)</strong>, their category is <strong>automatically capped at Conservative / Moderately Conservative</strong>.
              </p>
              <p className="text-xs text-amber-300/80 italic">
                Rationale: High equity exposure over short timeframes carries severe capital loss risk during market downturns. The algorithm prevents short-term money from being exposed to market volatility.
              </p>
            </CardContent>
          </Card>

          {/* Step 3: Category Division & Asset Allocation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <PieChart className="w-5 h-5 text-stockstrail-green-light" />
              3. Category Division Criteria & Asset Allocations
            </h3>

            <div className="space-y-4">
              {CATEGORY_DETAILS.map((cat) => (
                <div
                  key={cat.name}
                  className={`rounded-2xl border p-5 transition-all ${cat.accent}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${cat.badgeBg}`}>
                        {cat.name}
                      </span>
                      <span className="text-xs text-white/60 font-mono">
                        {cat.range}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-white">
                      {cat.allocation}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/80 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="mt-3 grid gap-1.5 sm:grid-cols-3 text-xs text-white/70">
                    {cat.keyPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-stockstrail-green-light shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 4: Summary Table */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-stockstrail-green-light" />
              Summary Mapping Table
            </h3>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-xs text-left">
                <thead className="bg-white/5 border-b border-white/10 text-white/60 uppercase">
                  <tr>
                    <th className="py-2.5 px-4">Score Range</th>
                    <th className="py-2.5 px-4">Raw Risk Profile</th>
                    <th className="py-2.5 px-4">Short Term (&lt;3 Yrs)</th>
                    <th className="py-2.5 px-4">Long Term (3+ Yrs)</th>
                    <th className="py-2.5 px-4">Target Allocation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/80">
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-4 font-mono">0 – 39</td>
                    <td className="py-2.5 px-4">Conservative</td>
                    <td className="py-2.5 px-4 text-blue-400">Conservative</td>
                    <td className="py-2.5 px-4 text-blue-400">Conservative</td>
                    <td className="py-2.5 px-4">90% Fixed Income · 10% Equity</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-4 font-mono">40 – 50</td>
                    <td className="py-2.5 px-4">Moderately Conservative</td>
                    <td className="py-2.5 px-4 text-blue-400">Conservative</td>
                    <td className="py-2.5 px-4 text-cyan-400">Moderately Conservative</td>
                    <td className="py-2.5 px-4">70% Fixed Income · 30% Equity</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-4 font-mono">51 – 70</td>
                    <td className="py-2.5 px-4">Moderate</td>
                    <td className="py-2.5 px-4 text-cyan-400">Moderately Conservative</td>
                    <td className="py-2.5 px-4 text-yellow-400">Moderate</td>
                    <td className="py-2.5 px-4">40% Fixed Income · 60% Equity</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-4 font-mono">71 – 90</td>
                    <td className="py-2.5 px-4">Moderately Aggressive</td>
                    <td className="py-2.5 px-4 text-cyan-400">Moderately Conservative</td>
                    <td className="py-2.5 px-4 text-orange-400">Moderately Aggressive</td>
                    <td className="py-2.5 px-4">10% Fixed Income · 90% Equity</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-2.5 px-4 font-mono">91 – 100</td>
                    <td className="py-2.5 px-4">Aggressive</td>
                    <td className="py-2.5 px-4 text-cyan-400">Moderately Conservative</td>
                    <td className="py-2.5 px-4 text-red-400">Aggressive</td>
                    <td className="py-2.5 px-4">10% Fixed Income · 90% Equity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
