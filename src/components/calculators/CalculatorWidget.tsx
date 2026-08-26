"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

export type Tab = "SIP" | "LUMPSUM" | "FD" | "RD" | "EMI" | "TAX";

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
          className="w-28 sm:w-36 px-3 py-1.5 rounded-lg border-2 border-stockstrail-green-light bg-stockstrail-green-light/10 text-stockstrail-green-light font-semibold text-right outline-none text-sm sm:text-base"
        />
      ) : (
        <span
          onClick={handleFocus}
          role="button"
          tabIndex={0}
          aria-label={ariaLabel}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 text-stockstrail-green-light font-semibold cursor-pointer hover:border-stockstrail-green-light hover:bg-stockstrail-green-light/20 transition-colors text-sm sm:text-base min-w-[70px] sm:min-w-[90px] justify-end"
        >
          {prefix && <span className="text-white/60 text-xs sm:text-sm">{prefix}</span>}
          <span>{suffix === "%" ? formatRate(value) : formatINR(value)}</span>
          {suffix && <span className="text-white/60 text-xs sm:text-sm">{suffix}</span>}
        </span>
      )}
    </div>
  );
};

const Donut = ({
  invested,
  returns,
  investedLabel = "INVESTED AMOUNT",
  returnsLabel = "Returns",
}: {
  invested: number;
  returns: number;
  investedLabel?: string;
  returnsLabel?: string;
}) => {
  const total = Math.max(1, invested + returns);
  const multiplier = invested > 0 ? total / invested : 1;
  const growthPct = invested > 0 ? (returns / invested) * 100 : 0;
  const investedPct = 50;
  const totalPct = invested > 0 ? (total / invested) * 50 : 50;
  const returnsPct = totalPct - investedPct;

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 group">
      <div
        className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(0,255,151,0.3)]"
        style={{
          background: `conic-gradient(#00FF97 ${returnsPct}%, rgba(255,255,255,0.12) 0)`,
        }}
      >
        <div className="absolute inset-8 sm:inset-10 rounded-full bg-[#0A1E1A] group-hover:bg-[#0A1E1A]/90 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-stockstrail-green-light text-2xl sm:text-3xl font-semibold group-hover:text-stockstrail-green-accent transition-colors duration-300">
              {multiplier.toFixed(2)}x
            </div>
            <div className="text-white/60 text-xs sm:text-sm group-hover:text-white/80 transition-colors duration-300 mb-2">
              Returns
            </div>
            <div className="inline-flex items-center gap-1 px-1 py-0.5 rounded-full bg-gradient-to-r from-stockstrail-green-light/20 to-stockstrail-green-accent/20 border border-stockstrail-green-light/30 group-hover:border-stockstrail-green-light group-hover:shadow-[0_0_15px_rgba(0,255,151,0.4)] transition-all duration-300">
              <span className="text-white/70 text-xs sm:text-xs font-bold group-hover:scale-110 transition-transform duration-300">
                {growthPct.toFixed(1)}%
              </span>
              <span className="text-white/50 text-[9px] sm:text-xs uppercase tracking-wider">
                Growth
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80">
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#00FF97] group-hover:shadow-[0_0_10px_rgba(0,255,151,0.5)] transition-all duration-300" />
          <span className="group-hover:text-white transition-colors duration-300">{returnsLabel.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
          <span className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors duration-300" />
          <span className="group-hover:text-white transition-colors duration-300">{investedLabel.toUpperCase()}</span>
        </div>
      </div>
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

  const [amount, setAmount] = useState(32500);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [emiPrincipal, setEmiPrincipal] = useState(1000000);
  const [emiRate, setEmiRate] = useState(10);
  const [emiYears, setEmiYears] = useState(5);
  const [taxAY, setTaxAY] = useState("2026-27");
  const [taxAgeCat, setTaxAgeCat] = useState<"<60" | "60-80" | ">=80">("<60");
  const [taxIncome, setTaxIncome] = useState(1800000);
  const [tax80C, setTax80C] = useState(0);
  const [tax80CCD1B, setTax80CCD1B] = useState(0);
  const [tax80D, setTax80D] = useState(0);
  const [tax80G, setTax80G] = useState(0);
  const [tax80E, setTax80E] = useState(0);
  const [tax80TTA, setTax80TTA] = useState(0);
  const [basicSalary, setBasicSalary] = useState(0);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(0);
  const [rentPaid, setRentPaid] = useState(0);
  const [isMetro, setIsMetro] = useState(false);
  const [taxOpen, setTaxOpen] = useState<{ income: boolean; deductions: boolean; hra: boolean }>({
    income: true,
    deductions: false,
    hra: false,
  });

  const [incomeSalary, setIncomeSalary] = useState(0);
  const [incomeOther, setIncomeOther] = useState(0);
  const [incomeInterest, setIncomeInterest] = useState(0);
  const [incomeRental, setIncomeRental] = useState(0);
  const [homeLoanInterestSelf, setHomeLoanInterestSelf] = useState(0);
  const [homeLoanInterestLetOut, setHomeLoanInterestLetOut] = useState(0);
  const [isSalaried, setIsSalaried] = useState(true);

  const months = years * 12;
  const amountMax = tab === "LUMPSUM" || tab === "FD" ? 10000000 : 200000;

  const sip = useMemo(() => {
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const invested = amount * months;
    const value = i === 0 ? invested : amount * ((Math.pow(1 + i, months) - 1) * (1 + i)) / i;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, months]);

  const lumpsum = useMemo(() => {
    const i = rate / 100;
    const principal = amount;
    const value = principal * Math.pow(1 + i, years);
    const invested = principal;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, years]);

  const fd = useMemo(() => {
    const i = rate / 100;
    const principal = amount;
    const value = principal * Math.pow(1 + i / 4, 4 * years);
    const returns = Math.max(0, value - principal);
    return { invested: principal, returns, value };
  }, [amount, rate, years]);

  const rd = useMemo(() => {
    const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
    const n = months;
    const m = amount;
    const value = i === 0 ? m * n : m * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = m * n;
    const returns = Math.max(0, value - invested);
    return { invested, returns, value };
  }, [amount, rate, months]);

  const emiCalc = useMemo(() => {
    const R = emiRate / 100 / 12;
    const N = emiYears * 12;
    const P = emiPrincipal;
    const emi = R === 0 ? P / N : (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const total = emi * N;
    const interest = total - P;
    return { emi, total, interest, principal: P, months: N };
  }, [emiPrincipal, emiRate, emiYears]);

  const computeHRAExemption = (basic: number, daAmt: number, hraAmt: number, rent: number, metro: boolean) => {
    if (rent <= 0 || hraAmt <= 0) return 0;
    const tenPercentRule = Math.max(0, rent - 0.1 * (basic + daAmt));
    const fiftyOrFortyPercent = (metro ? 0.5 : 0.4) * basic;
    return Math.max(0, Math.min(hraAmt, tenPercentRule, fiftyOrFortyPercent));
  };

  const taxCalc = useMemo(() => {
    const totalCalculatedIncome = incomeSalary + incomeOther + incomeInterest + incomeRental;
    const activeGrossIncome = totalCalculatedIncome > 0 ? totalCalculatedIncome : taxIncome;
    const standardDeductionNew = isSalaried ? 75000 : 0;
    const standardDeductionOld = isSalaried ? 50000 : 0;
    const hraExempt = computeHRAExemption(basicSalary, da, hra, rentPaid, isMetro);
    const baseGrossOld = Math.max(0, activeGrossIncome - standardDeductionOld - hraExempt);
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
    const taxableNew = Math.max(0, activeGrossIncome - standardDeductionNew);

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
    incomeSalary,
    incomeOther,
    incomeInterest,
    incomeRental,
    homeLoanInterestSelf,
    homeLoanInterestLetOut,
    isSalaried,
    taxAY,
    taxAgeCat,
  ]);

  const active =
    tab === "SIP"
      ? sip
      : tab === "LUMPSUM"
      ? lumpsum
      : tab === "FD"
      ? fd
      : tab === "RD"
      ? rd
      : (undefined as any);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10">
      <div className="flex flex-wrap gap-3 mb-8">
        {(["SIP", "LUMPSUM", "FD", "RD", "EMI", "TAX"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => handleTabClick(t)}
            className={`px-4 py-1.5 rounded-full text-sm tracking-wide border transition-all duration-300 ${
              tab === t
                ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border-stockstrail-green-light shadow-[0_0_15px_rgba(0,255,151,0.3)] scale-105"
                : "text-white/70 border-transparent hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-7">
          {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">
                    {tab === "LUMPSUM" || tab === "FD" ? "PRINCIPAL AMOUNT" : "MONTHLY INVESTMENT"}
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
                  step={500}
                  value={Math.min(amount, amountMax)}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">EXPECTED RETURN RATE (p.a.)</span>
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
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">TIME PERIOD (Years)</span>
                  <ValueChip
                    ariaLabel="years"
                    value={years}
                    suffix=" Yr"
                    onChange={(n) => setYears(Math.min(Math.max(n, 1), 40))}
                  />
                </div>
                <input
                  type="range"
                  min={1}
                  max={40}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex justify-between text-white/80 text-sm sm:text-base">
                  <span>Invested Amount</span>
                  <span className="font-semibold text-white">₹{formatINR(active.invested)}</span>
                </div>
                <div className="flex justify-between text-white/80 text-sm sm:text-base">
                  <span>Est. Returns</span>
                  <span className="font-semibold text-stockstrail-green-light">₹{formatINR(active.returns)}</span>
                </div>
                <div className="w-full h-px bg-white/10 my-2" />
                <div className="flex justify-between text-white text-base sm:text-lg font-bold">
                  <span>Total Value</span>
                  <span className="gradient-text">₹{formatINR(active.value)}</span>
                </div>
              </div>
            </div>
          )}

          {tab === "EMI" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">LOAN AMOUNT</span>
                  <ValueChip
                    ariaLabel="principal"
                    value={emiPrincipal}
                    prefix="₹ "
                    onChange={(n) => setEmiPrincipal(Math.min(Math.max(n, 10000), 50000000))}
                  />
                </div>
                <input
                  type="range"
                  min={10000}
                  max={50000000}
                  step={10000}
                  value={emiPrincipal}
                  onChange={(e) => setEmiPrincipal(Number(e.target.value))}
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">RATE OF INTEREST (p.a.)</span>
                  <ValueChip
                    ariaLabel="emurate"
                    value={emiRate}
                    suffix="%"
                    onChange={(n) => setEmiRate(Math.min(Math.max(n, 1), 30))}
                  />
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={0.1}
                  value={emiRate}
                  onChange={(e) => setEmiRate(Number(e.target.value))}
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">LOAN TENURE (Years)</span>
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
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex justify-between text-white/80 text-sm sm:text-base">
                  <span>Monthly EMI</span>
                  <span className="font-semibold text-stockstrail-green-light">₹{formatINR(emiCalc.emi)}</span>
                </div>
                <div className="flex justify-between text-white/80 text-sm sm:text-base">
                  <span>Total Interest</span>
                  <span className="font-semibold text-white">₹{formatINR(emiCalc.interest)}</span>
                </div>
                <div className="w-full h-px bg-white/10 my-2" />
                <div className="flex justify-between text-white text-base sm:text-lg font-bold">
                  <span>Total Payment</span>
                  <span className="gradient-text">₹{formatINR(emiCalc.total)}</span>
                </div>
              </div>
            </div>
          )}

          {tab === "TAX" && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/80">Assessment Year:</span>
                  <select
                    value={taxAY}
                    onChange={(e) => setTaxAY(e.target.value)}
                    className="bg-[#0A1E1A] border border-white/20 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-stockstrail-green-light"
                  >
                    <option value="2026-27">2026-27 (FY 2025-26)</option>
                    <option value="2025-26">2025-26 (FY 2024-25)</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/80">Age Category:</span>
                  <select
                    value={taxAgeCat}
                    onChange={(e) => setTaxAgeCat(e.target.value as any)}
                    className="bg-[#0A1E1A] border border-white/20 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-stockstrail-green-light"
                  >
                    <option value="<60">&lt; 60 Years</option>
                    <option value="60-80">60 - 80 Years</option>
                    <option value=">=80">&gt;= 80 Years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/80">
                  <span className="uppercase tracking-wide text-xs sm:text-sm">ANNUAL GROSS INCOME</span>
                  <ValueChip
                    ariaLabel="income"
                    value={taxIncome}
                    prefix="₹ "
                    onChange={(n) => setTaxIncome(Math.min(Math.max(n, 0), 100000000))}
                  />
                </div>
                <input
                  type="range"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={taxIncome}
                  onChange={(e) => setTaxIncome(Number(e.target.value))}
                  className="w-full accent-[#00FF97]"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="flex justify-between text-white/80 text-sm sm:text-base">
                  <span>Standard Deduction (New)</span>
                  <span className="font-semibold text-white">₹{isSalaried ? "75,000" : "0"}</span>
                </div>
                <div className="flex justify-between text-white/80 text-sm sm:text-base">
                  <span>Standard Deduction (Old)</span>
                  <span className="font-semibold text-white">₹{isSalaried ? "50,000" : "0"}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center">
          {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
            <Donut invested={active.invested} returns={active.returns} />
          )}
          {tab === "EMI" && (
            <Donut
              investedLabel="Principal Amount"
              returnsLabel="Interest Amount"
              invested={emiCalc.principal}
              returns={emiCalc.interest}
            />
          )}
          {tab === "TAX" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                <div className="text-white text-lg mb-2">Income Tax (New Regime)</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Taxable Income</span>
                    <span>₹{formatINR(taxCalc.taxableNew)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{formatINR(taxCalc.taxNew)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cess (4%)</span>
                    <span>₹{formatINR(taxCalc.cessNew)}</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-2" />
                  <div className="flex justify-between text-white">
                    <span>Total Tax Payable</span>
                    <span>₹{formatINR(taxCalc.totalNew)}</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                <div className="text-white text-lg mb-2">Income Tax (Old Regime)</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>HRA Exemption</span>
                    <span>₹{formatINR(taxCalc.hraExempt)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxable Income</span>
                    <span>₹{formatINR(taxCalc.taxableOld)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹{formatINR(taxCalc.taxOld)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cess (4%)</span>
                    <span>₹{formatINR(taxCalc.cessOld)}</span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-2" />
                  <div className="flex justify-between text-white">
                    <span>Total Tax Payable</span>
                    <span>₹{formatINR(taxCalc.totalOld)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
