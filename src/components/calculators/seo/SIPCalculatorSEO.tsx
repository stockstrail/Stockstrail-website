import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

const faqs = [
  {
    question: "What is a Step-Up (Top-Up) SIP and how does it work?",
    answer: "A Step-Up SIP automatically increases your monthly mutual fund investment amount at regular intervals (yearly or half-yearly) either by a fixed percentage (e.g. 10%) or a fixed rupee amount (e.g. ₹2,500). As your salary or business income rises each year, your SIP scales automatically without having to start new SIPs manually."
  },
  {
    question: "How much more wealth can a 10% annual Step-Up generate?",
    answer: "A 10% annual step-up typically increases your final maturity wealth by 40% to 60% compared to a constant SIP over a 10-15 year horizon, because a higher volume of capital enters the market during your highest earning years."
  },
  {
    question: "How does compounding work in a Systematic Investment Plan (SIP)?",
    answer: "SIP leverages compounding by reinvesting your investment returns over time. As your fund value grows, subsequent returns are earned on both your original contributions and accumulated gains, creating exponential wealth growth over longer investment horizons."
  },
  {
    question: "What expected rate of return should I assume for equity mutual funds?",
    answer: "Historically, broad-market Indian equity funds have delivered 12% to 15% annualized returns over 7-10+ year time horizons. For conservative or balanced allocation, 10% to 12% is generally considered a sensible benchmark."
  },
  {
    question: "Can I pause, increase, or stop my SIP anytime?",
    answer: "Yes. Mutual fund SIPs offer complete flexibility. You can modify your monthly instalment, pause contributions, or redeem accumulated units without penalties (subject to standard scheme exit load and capital gains taxation)."
  },
  {
    question: "How does rupee-cost averaging protect against market volatility?",
    answer: "When markets decline, your fixed monthly instalment purchases more fund units at a lower NAV. When markets rise, you purchase fewer units. Over time, this averages down your overall purchase cost without the need to time the market."
  }
];

const SIPCalculatorSEO: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8">
      {/* Header Overview */}
      <div className="border-b border-white/10 pb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Understanding Systematic Investment Plans & Step-Up Compounding
        </h2>
        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
          A Systematic Investment Plan allows investors to allocate a fixed sum into mutual funds at regular monthly intervals. With a **Step-Up (Top-Up) SIP**, you automatically increase your monthly investment as your income increases, supercharging your long-term compounding growth.
        </p>
      </div>

      {/* Step-Up SIP Highlight Box */}
      <div className="rounded-2xl border border-stockstrail-green-light/40 bg-gradient-to-r from-[#022A21] to-[#011B17] p-5 sm:p-6 space-y-3">
        <div className="flex items-center gap-2 text-stockstrail-green-light font-bold text-sm">
          <ArrowUpRight className="w-4 h-4" />
          <span>Why Smart Investors Choose Step-Up (Top-Up) SIP</span>
        </div>
        <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
          Most working professionals receive annual salary increments of 8% to 15%. By stepping up your SIP by just 10% each year, your wealth accumulates significantly faster:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="rounded-xl bg-black/40 p-3 border border-white/10 text-xs">
            <span className="text-white/50 block text-[10px]">Beat Lifestyle Inflation</span>
            <span className="font-semibold text-white">Automates savings from annual salary hikes</span>
          </div>
          <div className="rounded-xl bg-black/40 p-3 border border-white/10 text-xs">
            <span className="text-white/50 block text-[10px]">Reach Goals 5+ Years Faster</span>
            <span className="font-semibold text-stockstrail-green-light">Achieve multi-crore targets much sooner</span>
          </div>
          <div className="rounded-xl bg-black/40 p-3 border border-white/10 text-xs">
            <span className="text-white/50 block text-[10px]">Flexible Options</span>
            <span className="font-semibold text-white">Choose yearly/half-yearly, by % or fixed ₹</span>
          </div>
        </div>
      </div>

      {/* How to Use This Calculator */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white tracking-wide">How to Use the SIP & Step-Up Calculator</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 relative overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              1
            </div>
            <h4 className="font-semibold text-white text-sm">Monthly Investment</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Enter your starting monthly SIP amount using the slider or input field.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 relative overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              2
            </div>
            <h4 className="font-semibold text-white text-sm">Optional Step-Up</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Toggle Step-Up ON to increase your SIP automatically by a % or fixed ₹ every year or 6 months.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 relative overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              3
            </div>
            <h4 className="font-semibold text-white text-sm">Return Rate & Tenure</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Select your expected annual return (12-15%) and target time horizon (5 to 30 years).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 relative overflow-hidden">
            <div className="w-7 h-7 rounded-full bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold text-xs border border-stockstrail-green-light/40">
              4
            </div>
            <h4 className="font-semibold text-white text-sm">Review Timeline</h4>
            <p className="text-white/60 text-xs leading-relaxed">
              Switch between Growth Graph, Breakdown, and Yearly Schedule to inspect compounding milestones.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Link Action Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 p-5 space-y-2.5">
          <h4 className="font-bold text-white text-base">Ready to Start Your SIP?</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            Invest in top-performing large-cap, flexi-cap, and index mutual funds with zero advisory fees and direct AMC allocation.
          </p>
          <Link
            href="/mutual-funds"
            className="inline-flex items-center gap-1 text-xs font-semibold text-stockstrail-green-light hover:underline pt-1"
          >
            <span>Explore Mutual Funds Portfolios →</span>
          </Link>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2.5">
          <h4 className="font-bold text-white text-base">Check Your Risk Profile</h4>
          <p className="text-white/70 text-xs leading-relaxed">
            Take our 2-minute free SEBI-compliant risk assessment to identify the optimal equity-to-debt ratio for your goals.
          </p>
          <Link
            href="/check-risk-profile"
            className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-stockstrail-green-light hover:underline pt-1"
          >
            <span>Take Free Risk Assessment →</span>
          </Link>
        </div>
      </div>

      {/* FAQs */}
      <ServiceFAQSection faqs={faqs} />

      {/* Related Calculators & Services Nav */}
      <RelatedCalculatorsNav currentType="sip" />
    </div>
  );
};

export default SIPCalculatorSEO;
