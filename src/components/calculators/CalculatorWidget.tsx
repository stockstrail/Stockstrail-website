"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TrendingUp, PieChart, TableProperties, Sparkles } from "lucide-react";
import GrowthChart, { YearlyDataPoint, formatIndianWords } from "./GrowthChart";
import BreakdownDonut from "./BreakdownDonut";
import YearlyBreakdownTable from "./YearlyBreakdownTable";
import EMIAmortizationChart from "./EMIAmortizationChart";
import CalculatorCTA from "./CalculatorCTA";

export type Tab = "SIP" | "LUMPSUM" | "FD" | "RD" | "EMI" | "TAX";
type ViewMode = "CHART" | "DONUT" | "TABLE";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

const formatRate = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(n);

const ValueChip = ({
  value,
  suffix,
  prefix,
  onChange,
  ariaLabel,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  onChange?: (n: number) => void;
  ariaLabel?: string;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleFocus = () => {
    setIsEditing(true);
    setEditValue(value.toString());
  };

  const handleBlur = () => {
    setIsEditing(false);
    const isRate = suffix === "%";
    let parsed = parseFloat(editValue || "0");
    if (isNaN(parsed)) parsed = 0;
    if (isRate) parsed = Math.round(parsed * 10) / 10;
    onChange?.(parsed);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isRate = suffix === "%";
    let raw = e.target.value;
    if (prefix) raw = raw.replace(prefix, "");
    if (suffix) raw = raw.replace(suffix, "").trim();

    if (isRate) {
      if (raw === "" || /^\d*\.?\d{0,1}$/.test(raw)) {
        setEditValue(raw);
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) onChange?.(parsed);
      }
    } else {
      const sanitized = raw.replace(/,/g, "").replace(/\D/g, "");
      setEditValue(sanitized);
      const parsed = parseInt(sanitized, 10);
      if (!isNaN(parsed)) onChange?.(parsed);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="relative inline-flex items-center">
      {isEditing ? (
        <input
          type="text"
          inputMode={suffix === "%" ? "decimal" : "numeric"}
          value={editValue}
          onChange={handleInput}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          className="w-28 sm:w-36 px-3 py-1.5 rounded-xl border-2 border-stockstrail-green-light bg-[#032922] text-stockstrail-green-light font-bold text-right outline-none text-sm sm:text-base shadow-[0_0_15px_rgba(0,255,151,0.3)]"
        />
      ) : (
        <span
          onClick={handleFocus}
          role="button"
          tabIndex={0}
          aria-label={ariaLabel}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-stockstrail-green-light/40 bg-stockstrail-green-light/10 text-stockstrail-green-light font-bold cursor-pointer hover:border-stockstrail-green-light hover:bg-stockstrail-green-light/20 transition-all text-sm sm:text-base min-w-[80px] sm:min-w-[100px] justify-end"
        >
          {prefix && <span className="text-white/60 text-xs sm:text-sm">{prefix}</span>}
          <span>{suffix === "%" ? formatRate(value) : formatINR(value)}</span>
          {suffix && <span className="text-white/60 text-xs sm:text-sm">{suffix}</span>}
        </span>
      )}
    </div>
  );
};

export default function CalculatorWidget({
  initialTab = "SIP",
  navigateOnTabChange = false,
}: {
  initialTab?: Tab;
  navigateOnTabChange?: boolean;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>(initialTab);
  const [viewMode, setViewMode] = useState<ViewMode>("CHART");

  useEffect(() => {
    setTab(initialTab);
  }, [initialTab]);

  const handleTabClick = (t: Tab) => {
    if (navigateOnTabChange) {
      router.push(`/calculators/${t.toLowerCase()}`);
    } else {
      setTab(t);
    }
  };

  // State Variables
  const [amount, setAmount] = useState(32500);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [emiPrincipal, setEmiPrincipal] = useState(1000000);
  const [emiRate, setEmiRate] = useState(9.5);
  const [emiYears, setEmiYears] = useState(5);

  // Tax State
  const [taxAY, setTaxAY] = useState("2026-27");
  const [taxAgeCat, setTaxAgeCat] = useState<"<60" | "60-80" | ">=80">("<60");
  const [taxIncome, setTaxIncome] = useState(1800000);
  const [tax80C, setTax80C] = useState(150000);
  const [tax80CCD1B, setTax80CCD1B] = useState(50000);
  const [tax80D, setTax80D] = useState(25000);
  const [tax80G, setTax80G] = useState(0);
  const [tax80E, setTax80E] = useState(0);
  const [tax80TTA, setTax80TTA] = useState(10000);
  const [basicSalary, setBasicSalary] = useState(0);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [isMetro, setIsMetro] = useState(false);
  const [isSalaried, setIsSalaried] = useState(true);
  const [homeLoanInterestSelf, setHomeLoanInterestSelf] = useState(0);
  const [homeLoanInterestLetOut, setHomeLoanInterestLetOut] = useState(0);

  const months = years * 12;
  const amountMax = tab === "LUMPSUM" || tab === "FD" ? 10000000 : 200000;

  // 1. SIP Calculation & Timeline
  const sip = useMemo(() => {
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const invested = amount * months;
    const value = i === 0 ? invested : amount * ((Math.pow(1 + i, months) - 1) * (1 + i)) / i;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, months]);

  const yearlySIPData = useMemo<YearlyDataPoint[]>(() => {
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const points: YearlyDataPoint[] = [];
    for (let yr = 1; yr <= years; yr++) {
      const m = yr * 12;
      const inv = amount * m;
      const val = i === 0 ? inv : amount * ((Math.pow(1 + i, m) - 1) * (1 + i)) / i;
      const ret = Math.max(0, val - inv);
      points.push({ year: yr, invested: inv, returns: ret, total: val });
    }
    return points;
  }, [amount, rate, years]);

  // 2. Lumpsum Calculation & Timeline
  const lumpsum = useMemo(() => {
    const i = rate / 100;
    const principal = amount;
    const value = principal * Math.pow(1 + i, years);
    const invested = principal;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, years]);

  const yearlyLumpsumData = useMemo<YearlyDataPoint[]>(() => {
    const i = rate / 100;
    const points: YearlyDataPoint[] = [];
    for (let yr = 1; yr <= years; yr++) {
      const val = amount * Math.pow(1 + i, yr);
      const ret = Math.max(0, val - amount);
      points.push({ year: yr, invested: amount, returns: ret, total: val });
    }
    return points;
  }, [amount, rate, years]);

  // 3. Fixed Deposit Calculation & Timeline
  const fd = useMemo(() => {
    const i = rate / 100;
    const principal = amount;
    const value = principal * Math.pow(1 + i / 4, 4 * years);
    const returns = Math.max(0, value - principal);
    return { invested: principal, returns, value };
  }, [amount, rate, years]);

  const yearlyFDData = useMemo<YearlyDataPoint[]>(() => {
    const i = rate / 100;
    const points: YearlyDataPoint[] = [];
    for (let yr = 1; yr <= years; yr++) {
      const val = amount * Math.pow(1 + i / 4, 4 * yr);
      const ret = Math.max(0, val - amount);
      points.push({ year: yr, invested: amount, returns: ret, total: val });
    }
    return points;
  }, [amount, rate, years]);

  // 4. Recurring Deposit Calculation & Timeline
  const rd = useMemo(() => {
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const n = months;
    const m = amount;
    const value = i === 0 ? m * n : m * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = m * n;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, months]);

  const yearlyRDData = useMemo<YearlyDataPoint[]>(() => {
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const points: YearlyDataPoint[] = [];
    for (let yr = 1; yr <= years; yr++) {
      const m = yr * 12;
      const inv = amount * m;
      const val = i === 0 ? inv : amount * ((Math.pow(1 + i, m) - 1) / i) * (1 + i);
      const ret = Math.max(0, val - inv);
      points.push({ year: yr, invested: inv, returns: ret, total: val });
    }
    return points;
  }, [amount, rate, years]);

  // 5. EMI Calculation
  const emiCalc = useMemo(() => {
    const R = emiRate / 100 / 12;
    const N = emiYears * 12;
    const P = emiPrincipal;
    const emi = R === 0 ? P / N : (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const total = emi * N;
    const interest = total - P;
    return { emi, total, interest, principal: P, months: N };
  }, [emiPrincipal, emiRate, emiYears]);

  // 6. Tax Calculation
  const computeHRAExemption = (basic: number, daAmt: number, hraAmt: number, rent: number, metro: boolean) => {
    if (rent <= 0 || hraAmt <= 0) return 0;
    const tenPercentRule = Math.max(0, rent - 0.1 * (basic + daAmt));
    const fiftyOrFortyPercent = (metro ? 0.5 : 0.4) * basic;
    return Math.max(0, Math.min(hraAmt, tenPercentRule, fiftyOrFortyPercent));
  };

  const taxCalc = useMemo(() => {
    const standardDeductionNew = isSalaried ? 75000 : 0;
    const standardDeductionOld = isSalaried ? 50000 : 0;
    const hraExempt = computeHRAExemption(basicSalary, da, hra, rentPaid, isMetro);
    const baseGrossOld = Math.max(0, taxIncome - standardDeductionOld - hraExempt);
    const homeLoanDeduction = Math.min(200000, homeLoanInterestSelf) + homeLoanInterestLetOut;
    const grossOld = Math.max(0, baseGrossOld - homeLoanDeduction);
    const ttaLimit = taxAgeCat === "<60" ? 10000 : 50000;
    const ttaDeduction = Math.min(tax80TTA, ttaLimit);

    const totalDeductions =
      Math.min(150000, tax80C) +
      Math.min(50000, tax80CCD1B) +
      Math.min(taxAgeCat === "<60" ? 25000 : 50000, tax80D) +
      tax80G +
      tax80E +
      ttaDeduction;
    const taxableOld = Math.max(0, grossOld - totalDeductions);
    const taxableNew = Math.max(0, taxIncome - standardDeductionNew);

    const slabTaxNew = (ti: number) => {
      let t = 0;
      const addBand = (from: number, to: number | null, r: number) => {
        const upper = to ?? ti;
        if (ti <= from) return 0;
        const band = Math.min(ti, upper) - from;
        return Math.max(0, band * r);
      };

      if (taxAY === "2025-26") {
        t += addBand(300000, 600000, 0.05);
        t += addBand(600000, 900000, 0.10);
        t += addBand(900000, 1200000, 0.15);
        t += addBand(1200000, 1500000, 0.20);
        t += addBand(1500000, null, 0.30);
        if (ti <= 700000) return 0;
        const rawTax = t;
        const excessIncome = ti - 700000;
        if (rawTax > excessIncome) return excessIncome;
        return rawTax;
      } else {
        t += addBand(400000, 800000, 0.05);
        t += addBand(800000, 1200000, 0.10);
        t += addBand(1200000, 1600000, 0.15);
        t += addBand(1600000, 2000000, 0.20);
        t += addBand(2000000, 2400000, 0.25);
        t += addBand(2400000, null, 0.30);
        if (ti <= 1200000) return 0;
        const rawTax = t;
        const excessIncome = ti - 1200000;
        if (rawTax > excessIncome) return excessIncome;
        return rawTax;
      }
    };

    const oldExemption = taxAgeCat === ">=80" ? 500000 : taxAgeCat === "60-80" ? 300000 : 250000;
    const slabTaxOld = (ti: number) => {
      let t = 0;
      const add = (from: number, to: number | null, r: number) => {
        const upper = to ?? ti;
        if (ti <= from) return 0;
        const band = Math.min(ti, upper) - from;
        return Math.max(0, band * r);
      };
      t += add(oldExemption, 500000, 0.05);
      t += add(500000, 1000000, 0.20);
      t += add(1000000, null, 0.30);
      if (ti <= 500000) {
        const rebate = Math.min(t, 12500);
        return Math.max(0, t - rebate);
      }
      return t;
    };

    const taxNew = slabTaxNew(taxableNew);
    const cessNew = taxNew * 0.04;
    const totalNew = taxNew + cessNew;
    const taxOld = slabTaxOld(taxableOld);
    const cessOld = taxOld * 0.04;
    const totalOld = taxOld + cessOld;

    return {
      hraExempt,
      taxableOld,
      taxOld,
      cessOld,
      totalOld,
      taxableNew,
      taxNew,
      cessNew,
      totalNew,
      savings: totalOld - totalNew,
    };
  }, [
    taxIncome,
    tax80C,
    tax80CCD1B,
    tax80D,
    tax80G,
    tax80E,
    tax80TTA,
    basicSalary,
    da,
    hra,
    rentPaid,
    isMetro,
    isSalaried,
    homeLoanInterestSelf,
    homeLoanInterestLetOut,
    taxAY,
    taxAgeCat,
  ]);

  const activeResult =
    tab === "SIP"
      ? sip
      : tab === "LUMPSUM"
      ? lumpsum
      : tab === "FD"
      ? fd
      : tab === "RD"
      ? rd
      : null;

  const activeYearlyData =
    tab === "SIP"
      ? yearlySIPData
      : tab === "LUMPSUM"
      ? yearlyLumpsumData
      : tab === "FD"
      ? yearlyFDData
      : tab === "RD"
      ? yearlyRDData
      : [];

  return (
    <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-[#012822]/90 via-[#011C18]/90 to-[#011411]/95 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
      {/* Top Tab Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-white/10">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {(["SIP", "LUMPSUM", "FD", "RD", "EMI", "TAX"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => handleTabClick(t)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                tab === t
                  ? "bg-stockstrail-green-light text-[#012928] shadow-[0_0_20px_rgba(0,255,151,0.5)] scale-105"
                  : "text-white/70 bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 hover:text-white hover:bg-white/10"
              }`}
            >
              {t === "SIP" ? "📈 SIP" : t === "LUMPSUM" ? "💰 Lumpsum" : t === "FD" ? "🏦 FD" : t === "RD" ? "🔄 RD" : t === "EMI" ? "💳 Loan EMI" : "📑 Income Tax"}
            </button>
          ))}
        </div>

        {/* View Mode Switcher (For Growth tabs) */}
        {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
          <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-black/40 border border-white/10 text-xs">
            <button
              onClick={() => setViewMode("CHART")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === "CHART"
                  ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Growth Graph</span>
            </button>
            <button
              onClick={() => setViewMode("DONUT")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === "DONUT"
                  ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <PieChart className="w-3.5 h-3.5" />
              <span>Breakdown</span>
            </button>
            <button
              onClick={() => setViewMode("TABLE")}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-lg font-medium transition-all ${
                viewMode === "TABLE"
                  ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light/40"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <TableProperties className="w-3.5 h-3.5" />
              <span>Schedule</span>
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Side: Interactive Controls & Sliders */}
        <div className="lg:col-span-5 space-y-6">
          {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
            <div className="space-y-6">
              {/* Amount Input */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">
                    {tab === "LUMPSUM" || tab === "FD" ? "Principal Investment" : "Monthly Investment (SIP)"}
                  </span>
                  <ValueChip
                    ariaLabel="amount"
                    value={amount}
                    prefix="₹ "
                    onChange={(n) => setAmount(Math.min(Math.max(n, 0), amountMax))}
                  />
                </div>
                <input
                  type="range"
                  min={1000}
                  max={amountMax}
                  step={tab === "LUMPSUM" || tab === "FD" ? 5000 : 500}
                  value={Math.min(amount, amountMax)}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />

                {/* Quick Presets for Amount */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(tab === "LUMPSUM" || tab === "FD"
                    ? [50000, 100000, 500000, 1000000]
                    : [2500, 5000, 10000, 25000, 50000]
                  ).map((val) => (
                    <button
                      key={val}
                      onClick={() => setAmount(val)}
                      className={`text-[11px] px-2 py-0.5 rounded-lg border transition-all ${
                        amount === val
                          ? "bg-stockstrail-green-light/20 border-stockstrail-green-light text-stockstrail-green-light font-bold"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {tab === "LUMPSUM" || tab === "FD" ? formatIndianWords(val) : `+₹${(val / 1000).toFixed(0)}k`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rate Input */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">
                    Expected Return Rate (p.a.)
                  </span>
                  <ValueChip
                    ariaLabel="rate"
                    value={rate}
                    suffix="%"
                    onChange={(n) => {
                      const minRate = tab === "RD" || tab === "FD" ? 2 : 1;
                      const maxRate = tab === "RD" || tab === "FD" ? 10 : 24;
                      setRate(Math.min(Math.max(n, minRate), maxRate));
                    }}
                  />
                </div>
                <input
                  type="range"
                  min={tab === "RD" || tab === "FD" ? 2 : 1}
                  max={tab === "RD" || tab === "FD" ? 10 : 24}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />

                {/* Quick Presets for Return Rate */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(tab === "FD" || tab === "RD"
                    ? [6.5, 7.5, 8.5]
                    : [10, 12, 14, 15]
                  ).map((val) => (
                    <button
                      key={val}
                      onClick={() => setRate(val)}
                      className={`text-[11px] px-2 py-0.5 rounded-lg border transition-all ${
                        rate === val
                          ? "bg-stockstrail-green-light/20 border-stockstrail-green-light text-stockstrail-green-light font-bold"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {val}% {val >= 14 ? "(Equity)" : val === 12 ? "(Balanced)" : "(Conservative)"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Years Input */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">
                    Time Period (Years)
                  </span>
                  <ValueChip
                    ariaLabel="years"
                    value={years}
                    suffix=" Yr"
                    onChange={(n) => setYears(Math.min(Math.max(n, 1), 35))}
                  />
                </div>
                <input
                  type="range"
                  min={1}
                  max={35}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />

                {/* Quick Presets for Years */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[3, 5, 10, 15, 20, 25].map((y) => (
                    <button
                      key={y}
                      onClick={() => setYears(y)}
                      className={`text-[11px] px-2.5 py-0.5 rounded-lg border transition-all ${
                        years === y
                          ? "bg-stockstrail-green-light/20 border-stockstrail-green-light text-stockstrail-green-light font-bold"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/30"
                      }`}
                    >
                      {y} Years
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary Cards */}
              {activeResult && (
                <div className="rounded-2xl border border-white/15 bg-black/30 p-4 sm:p-5 space-y-3 shadow-inner">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Total Invested</span>
                    <span className="font-semibold text-white text-base">
                      ₹{formatINR(activeResult.invested)}
                      <span className="text-xs text-white/40 ml-1">({formatIndianWords(activeResult.invested)})</span>
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Est. Profit (Returns)</span>
                    <span className="font-bold text-stockstrail-green-light text-base">
                      +₹{formatINR(activeResult.returns)}
                      <span className="text-xs text-stockstrail-green-light/70 ml-1">({formatIndianWords(activeResult.returns)})</span>
                    </span>
                  </div>

                  <div className="w-full h-px bg-white/10 my-2" />

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-white/50 block">Total Accumulated Wealth</span>
                      <span className="text-xl sm:text-2xl font-extrabold text-white">
                        ₹{formatINR(activeResult.value)}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-stockstrail-green-light/20 text-stockstrail-green-light font-bold text-xs border border-stockstrail-green-light/40">
                      {formatIndianWords(activeResult.value)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* EMI Controls */}
          {tab === "EMI" && (
            <div className="space-y-6">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">Loan Amount</span>
                  <ValueChip
                    ariaLabel="principal"
                    value={emiPrincipal}
                    prefix="₹ "
                    onChange={(n) => setEmiPrincipal(Math.min(Math.max(n, 10000), 50000000))}
                  />
                </div>
                <input
                  type="range"
                  min={50000}
                  max={20000000}
                  step={50000}
                  value={emiPrincipal}
                  onChange={(e) => setEmiPrincipal(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[500000, 1000000, 2500000, 5000000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setEmiPrincipal(val)}
                      className={`text-[11px] px-2 py-0.5 rounded-lg border transition-all ${
                        emiPrincipal === val
                          ? "bg-stockstrail-green-light/20 border-stockstrail-green-light text-stockstrail-green-light font-bold"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white"
                      }`}
                    >
                      {formatIndianWords(val)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">Interest Rate (p.a.)</span>
                  <ValueChip
                    ariaLabel="emurate"
                    value={emiRate}
                    suffix="%"
                    onChange={(n) => setEmiRate(Math.min(Math.max(n, 1), 25))}
                  />
                </div>
                <input
                  type="range"
                  min={5}
                  max={20}
                  step={0.1}
                  value={emiRate}
                  onChange={(e) => setEmiRate(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">Loan Tenure (Years)</span>
                  <ValueChip
                    ariaLabel="emiyears"
                    value={emiYears}
                    suffix=" Yr"
                    onChange={(n) => setEmiYears(Math.min(Math.max(n, 1), 30))}
                  />
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={emiYears}
                  onChange={(e) => setEmiYears(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/30 p-4 sm:p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Monthly Loan EMI</span>
                  <span className="font-extrabold text-stockstrail-green-light text-xl sm:text-2xl">
                    ₹{formatINR(emiCalc.emi)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/70">Total Interest Payable</span>
                  <span className="font-semibold text-amber-300">
                    ₹{formatINR(emiCalc.interest)}
                  </span>
                </div>
                <div className="w-full h-px bg-white/10 my-1" />
                <div className="flex justify-between items-center text-sm font-bold text-white">
                  <span>Total Amount Paid</span>
                  <span>₹{formatINR(emiCalc.total)}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tax Controls */}
          {tab === "TAX" && (
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3 items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/70">Financial Year:</span>
                  <select
                    value={taxAY}
                    onChange={(e) => setTaxAY(e.target.value)}
                    className="bg-[#051C17] border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-stockstrail-green-light"
                  >
                    <option value="2026-27">FY 2025-26 (AY 2026-27)</option>
                    <option value="2025-26">FY 2024-25 (AY 2025-26)</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/70">Age:</span>
                  <select
                    value={taxAgeCat}
                    onChange={(e) => setTaxAgeCat(e.target.value as any)}
                    className="bg-[#051C17] border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-stockstrail-green-light"
                  >
                    <option value="<60">&lt; 60 Years</option>
                    <option value="60-80">60 - 80 Years</option>
                    <option value=">=80">&gt;= 80 Years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wider text-xs font-semibold text-white/70">Annual Gross Income</span>
                  <ValueChip
                    ariaLabel="income"
                    value={taxIncome}
                    prefix="₹ "
                    onChange={(n) => setTaxIncome(Math.min(Math.max(n, 0), 100000000))}
                  />
                </div>
                <input
                  type="range"
                  min={200000}
                  max={10000000}
                  step={50000}
                  value={taxIncome}
                  onChange={(e) => setTaxIncome(Number(e.target.value))}
                  className="w-full accent-[#00FF97] h-2 bg-white/10 rounded-lg cursor-pointer"
                />
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {[800000, 1200000, 1500000, 2000000, 3000000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setTaxIncome(val)}
                      className={`text-[11px] px-2 py-0.5 rounded-lg border transition-all ${
                        taxIncome === val
                          ? "bg-stockstrail-green-light/20 border-stockstrail-green-light text-stockstrail-green-light font-bold"
                          : "border-white/10 bg-white/5 text-white/60 hover:text-white"
                      }`}
                    >
                      {formatIndianWords(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Deductions inputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <span className="text-[11px] text-white/60 block mb-1">Section 80C (ELSS, PF)</span>
                  <input
                    type="number"
                    max={150000}
                    value={tax80C}
                    onChange={(e) => setTax80C(Number(e.target.value))}
                    className="w-full bg-[#051C17] border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <span className="text-[11px] text-white/60 block mb-1">Section 80D (Health Ins.)</span>
                  <input
                    type="number"
                    max={100000}
                    value={tax80D}
                    onChange={(e) => setTax80D(Number(e.target.value))}
                    className="w-full bg-[#051C17] border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Graph / Donut / Table Visualizer */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[340px]">
          {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
            <div className="w-full">
              {viewMode === "CHART" && (
                <GrowthChart
                  data={activeYearlyData}
                  investedLabel={tab === "LUMPSUM" || tab === "FD" ? "Principal Invested" : "Total SIP Invested"}
                  returnsLabel="Estimated Profit"
                />
              )}
              {viewMode === "DONUT" && activeResult && (
                <BreakdownDonut
                  invested={activeResult.invested}
                  returns={activeResult.returns}
                  investedLabel={tab === "LUMPSUM" || tab === "FD" ? "Principal" : "Invested"}
                  returnsLabel="Profit Growth"
                />
              )}
              {viewMode === "TABLE" && (
                <YearlyBreakdownTable data={activeYearlyData} />
              )}
            </div>
          )}

          {tab === "EMI" && (
            <div className="w-full">
              <EMIAmortizationChart
                principal={emiPrincipal}
                rate={emiRate}
                years={emiYears}
                emi={emiCalc.emi}
              />
            </div>
          )}

          {tab === "TAX" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* New Regime Card */}
              <div className={`rounded-2xl border p-5 transition-all ${
                taxCalc.totalNew <= taxCalc.totalOld
                  ? "border-stockstrail-green-light/50 bg-gradient-to-b from-[#02352C] to-[#011C18] shadow-[0_0_20px_rgba(0,255,151,0.15)]"
                  : "border-white/10 bg-white/5"
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-base">New Tax Regime</span>
                  {taxCalc.totalNew <= taxCalc.totalOld && (
                    <span className="px-2 py-0.5 rounded-md bg-stockstrail-green-light text-[#012928] text-[10px] font-extrabold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-current" /> Recommended
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex justify-between">
                    <span className="text-white/60">Taxable Income</span>
                    <span className="font-semibold text-white">₹{formatINR(taxCalc.taxableNew)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Income Tax</span>
                    <span>₹{formatINR(taxCalc.taxNew)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Cess (4%)</span>
                    <span>₹{formatINR(taxCalc.cessNew)}</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-1.5" />
                  <div className="flex justify-between items-center text-sm font-bold text-stockstrail-green-light">
                    <span>Total Tax Payable</span>
                    <span>₹{formatINR(taxCalc.totalNew)}</span>
                  </div>
                </div>
              </div>

              {/* Old Regime Card */}
              <div className={`rounded-2xl border p-5 transition-all ${
                taxCalc.totalOld < taxCalc.totalNew
                  ? "border-stockstrail-green-light/50 bg-gradient-to-b from-[#02352C] to-[#011C18] shadow-[0_0_20px_rgba(0,255,151,0.15)]"
                  : "border-white/10 bg-white/5"
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white text-base">Old Tax Regime</span>
                  {taxCalc.totalOld < taxCalc.totalNew && (
                    <span className="px-2 py-0.5 rounded-md bg-stockstrail-green-light text-[#012928] text-[10px] font-extrabold flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-current" /> Recommended
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-xs text-white/80">
                  <div className="flex justify-between">
                    <span className="text-white/60">Taxable Income</span>
                    <span className="font-semibold text-white">₹{formatINR(taxCalc.taxableOld)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Income Tax</span>
                    <span>₹{formatINR(taxCalc.taxOld)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Cess (4%)</span>
                    <span>₹{formatINR(taxCalc.cessOld)}</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-1.5" />
                  <div className="flex justify-between items-center text-sm font-bold text-white">
                    <span>Total Tax Payable</span>
                    <span>₹{formatINR(taxCalc.totalOld)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* High-Conversion Investment CTA */}
      <CalculatorCTA
        type={tab}
        amount={tab === "EMI" ? emiPrincipal : amount}
        years={tab === "EMI" ? emiYears : years}
        expectedWealth={activeResult ? activeResult.value : 0}
      />
    </div>
  );
}
