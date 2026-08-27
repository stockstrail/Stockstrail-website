'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface LifeGoal {
  id: string;
  name: string;
  badge: string;
  monthlySaving: string;
  years: string;
  totalInvested: string;
  projectedWealth: string;
  wealthGained: string;
  growthShare: string;
  safetyShare: string;
  liquidShare: string;
  milestoneTarget: string;
}

const lifeGoals: LifeGoal[] = [
  {
    id: 'retirement',
    name: 'Peaceful Early Retirement',
    badge: 'Retire Early and Free',
    monthlySaving: '₹15,000 monthly',
    years: '15 Years',
    totalInvested: '₹27.0 Lakhs',
    projectedWealth: '₹1.01 Crore',
    wealthGained: '+₹74.0 Lakhs Compounded Gain',
    growthShare: '70%',
    safetyShare: '20%',
    liquidShare: '10%',
    milestoneTarget: 'Target Age 50 to 55',
  },
  {
    id: 'home',
    name: 'Buying Your Dream Home',
    badge: 'Own Your Home',
    monthlySaving: '₹20,000 monthly',
    years: '7 Years',
    totalInvested: '₹16.8 Lakhs',
    projectedWealth: '₹28.5 Lakhs',
    wealthGained: '+₹11.7 Lakhs Compounded Gain',
    growthShare: '60%',
    safetyShare: '25%',
    liquidShare: '15%',
    milestoneTarget: 'Target Year 2031',
  },
  {
    id: 'education',
    name: 'Children Higher Education',
    badge: 'College Fund',
    monthlySaving: '₹12,000 monthly',
    years: '12 Years',
    totalInvested: '₹17.2 Lakhs',
    projectedWealth: '₹48.2 Lakhs',
    wealthGained: '+₹31.0 Lakhs Compounded Gain',
    growthShare: '65%',
    safetyShare: '20%',
    liquidShare: '15%',
    milestoneTarget: 'Target Year 2036',
  },
  {
    id: 'wealth',
    name: 'Family Financial Freedom',
    badge: 'Peace of Mind',
    monthlySaving: '₹10,000 monthly',
    years: '10 Years',
    totalInvested: '₹12.0 Lakhs',
    projectedWealth: '₹27.8 Lakhs',
    wealthGained: '+₹15.8 Lakhs Compounded Gain',
    growthShare: '65%',
    safetyShare: '20%',
    liquidShare: '15%',
    milestoneTarget: '10 Year Growth Plan',
  },
];

export default function HeroShowcaseCard() {
  const [activeGoal, setActiveGoal] = useState<number>(0);
  const goal = lifeGoals[activeGoal];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-stockstrail-green-light/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* INTERACTIVE WEALTH COMPASS CARD */}
      <div className="relative rounded-3xl border border-white/20 bg-gradient-to-b from-[#032320]/95 via-[#021a18]/90 to-[#011413]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,255,151,0.08)] p-5 sm:p-7 space-y-5 overflow-hidden">
        
        {/* CARD HEADER: GOAL SWITCHER */}
        <div className="space-y-3 pb-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-stockstrail-green-light flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
              See How Your Money Grows
            </span>
            <span className="text-[11px] text-white/60">
              Select Your Life Goal
            </span>
          </div>

          {/* 4 GOAL BUTTONS */}
          <div className="grid grid-cols-2 gap-2">
            {lifeGoals.map((g, idx) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveGoal(idx)}
                className={`p-2.5 rounded-2xl text-left transition-all border text-xs font-semibold ${
                  activeGoal === idx
                    ? 'bg-stockstrail-green-light text-black border-stockstrail-green-light shadow-[0_0_15px_rgba(0,255,151,0.3)] font-bold scale-[1.02]'
                    : 'bg-white/[0.04] text-white/80 border-white/10 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                <span className="block truncate">{g.name}</span>
                <span className={`text-[10px] block mt-0.5 ${activeGoal === idx ? 'text-black/70 font-bold' : 'text-emerald-400'}`}>
                  {g.milestoneTarget}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* COMPOUNDING RESULT: SIMPLE & INSPIRING NUMBERS */}
        <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/70">
              Saving <strong className="text-white font-bold">{goal.monthlySaving}</strong> for {goal.years}
            </span>
            <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-500/30">
              {goal.badge}
            </span>
          </div>

          <div className="flex items-end justify-between gap-4 pt-1">
            <div>
              <span className="text-[11px] text-white/55 block uppercase tracking-wider">
                What Your Money Becomes
              </span>
              <p
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-0.5"
                style={{ fontFamily: 'var(--font-product-sans)' }}
              >
                {goal.projectedWealth}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-stockstrail-green-light font-bold block">
                {goal.wealthGained}
              </span>
              <span className="text-[10px] text-white/50 block">
                You Invest: {goal.totalInvested}
              </span>
            </div>
          </div>
        </div>

        {/* PORTFOLIO BALANCE: GROWTH, SAFETY, CASH */}
        <div className="space-y-2 pt-1">
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span className="font-semibold">Safe and Balanced Portfolio Mix</span>
            <span>Reviewed Every 3 Months</span>
          </div>

          <div className="flex items-center h-2.5 w-full rounded-full overflow-hidden bg-white/10">
            <div style={{ width: goal.growthShare, backgroundColor: '#00ff97' }} className="h-full rounded-l-full transition-all duration-500" />
            <div style={{ width: goal.safetyShare, backgroundColor: '#14b8a6' }} className="h-full transition-all duration-500" />
            <div style={{ width: goal.liquidShare, backgroundColor: '#38bdf8' }} className="h-full rounded-r-full transition-all duration-500" />
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px] text-white/75 pt-1 text-center">
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-stockstrail-green-light font-bold block">{goal.growthShare}</span>
              <span className="text-[10px] text-white/60">Mutual Funds for Growth</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-teal-300 font-bold block">{goal.safetyShare}</span>
              <span className="text-[10px] text-white/60">Fixed Deposits for Safety</span>
            </div>
            <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="text-sky-300 font-bold block">{goal.liquidShare}</span>
              <span className="text-[10px] text-white/60">Emergency Cash</span>
            </div>
          </div>
        </div>

        {/* FOOTER: GET CUSTOM PLAN */}
        <div className="pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-white/75">
            <p className="font-semibold text-white">Want a custom roadmap for your income?</p>
            <p className="text-[11px] text-white/55">
              Personalized asset allocation tailored to your family milestones
            </p>
          </div>

          <Link
            href="/lets-talk"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-stockstrail-green-light text-black text-xs font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,255,151,0.3)] hover:shadow-[0_0_30px_rgba(0,255,151,0.5)] hover:scale-105 transition-all shrink-0 text-center"
            style={{ fontFamily: 'var(--font-product-sans)' }}
          >
            <span>Plan This Goal</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
