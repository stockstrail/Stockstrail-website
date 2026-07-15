// "use client";

// import { useState, useMemo } from "react";
// import { useSearchParams } from "next/navigation";
// import Layout from "@/components/layout/Layout";
// import SEO from "@/components/SEO";

// type Tab = "SIP" | "LUMPSUM" | "FD" | "RD" | "EMI" | "TAX";

// const formatINR = (n: number) =>
//   new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
//     Math.round(n)
//   );

// const formatRate = (n: number) =>
//   new Intl.NumberFormat("en-IN", {
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 1,
//   }).format(n);

// const ValueChip = ({
//   value,
//   suffix,
//   prefix,
//   onChange,
//   ariaLabel,
// }: {
//   value: number;
//   suffix?: string;
//   prefix?: string;
//   onChange?: (n: number) => void;
//   ariaLabel?: string;
// }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editValue, setEditValue] = useState("");

//   const handleFocus = () => {
//     setIsEditing(true);
//     setEditValue(value.toString());
//   };

//   const handleBlur = () => {
//     setIsEditing(false);

//     const isRate = suffix === "%";
//     let parsed = parseFloat(editValue || "0");

//     if (isNaN(parsed)) parsed = 0;
//     if (isRate) parsed = Math.round(parsed * 10) / 10;

//     onChange?.(parsed);
//   };

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isRate = suffix === "%";
//     let raw = e.target.value;

//     if (prefix) raw = raw.replace(prefix, "");
//     if (suffix) raw = raw.replace(suffix, "").trim();

//     if (isRate) {
//       raw = raw.replace(/[^0-9.]/g, "");
//       const parts = raw.split(".");
//       if (parts.length > 2) {
//         raw = parts[0] + "." + parts.slice(1).join("");
//       }
//       if (parts.length === 2 && parts[1].length > 1) {
//         raw = parts[0] + "." + parts[1].substring(0, 1);
//       }
//     } else {
//       raw = raw.replace(/[^0-9]/g, "");
//     }

//     setEditValue(raw);
//     const n = parseFloat(raw || "0");
//     if (!isNaN(n)) onChange?.(n);
//   };

//   const display = isEditing
//     ? editValue
//     : suffix === "%"
//     ? `${formatRate(value)} ${suffix}`
//     : `${prefix ?? ""}${formatINR(value)}${suffix ? ` ${suffix}` : ""}`;

//   return (
//     <input
//       aria-label={ariaLabel}
//       inputMode="decimal"
//       value={display}
//       onChange={handleInput}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white/90 text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 w-[150px] sm:w-[180px] text-right"
//     />
//   );
// };

// const Donut = ({
//   invested,
//   returns,
//   investedLabel = "INVESTED AMOUNT",
//   returnsLabel = "Returns",
// }: {
//   invested: number;
//   returns: number;
//   investedLabel?: string;
//   returnsLabel?: string;
// }) => {
//   const total = Math.max(1, invested + returns);
//   const pct = (returns / total) * 100;

//   return (
//     <div className="flex flex-col items-center gap-4 sm:gap-6 group">
//       <div
//         className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(0,255,151,0.3)]"
//         style={{
//           background: `conic-gradient(#00FF97 ${pct}%, rgba(255,255,255,0.12) 0)`,
//         }}
//       >
//         <div className="absolute inset-8 sm:inset-10 rounded-full bg-[#0A1E1A]" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className="text-white text-lg sm:text-xl font-semibold">
//               {pct.toFixed(1)}%
//             </div>
//             <div className="text-white/60 text-xs sm:text-sm">
//               {returnsLabel}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/80">
//         <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
//           <span className="inline-block w-3 h-3 rounded-full bg-[#00FF97]" />
//           <span>{returnsLabel.toUpperCase()}</span>
//         </div>

//         <div className="flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
//           <span className="inline-block w-3 h-3 rounded-full bg-white/20" />
//           <span>{investedLabel.toUpperCase()}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function CalculatorsPage() {
//   const searchParams = useSearchParams();
//   const tabParam = searchParams.get("tab") as Tab | null;

//   const [tab, setTab] = useState<Tab>(() => {
//     if (
//       tabParam &&
//       ["SIP", "LUMPSUM", "FD", "RD", "EMI", "TAX"].includes(tabParam)
//     ) {
//       return tabParam;
//     }
//     return "SIP";
//   });

//   const [amount, setAmount] = useState(32500);
//   const [rate, setRate] = useState(12);
//   const [years, setYears] = useState(10);

//   const months = years * 12;
//   const amountMax = ["LUMPSUM", "FD"].includes(tab) ? 10000000 : 200000;

//   const sip = useMemo(() => {
//     const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
//     const invested = amount * months;
//     const value =
//       i === 0
//         ? invested
//         : amount *
//           (((Math.pow(1 + i, months) - 1) * (1 + i)) / i);
//     return { invested, value, returns: Math.max(0, value - invested) };
//   }, [amount, rate, months]);

//   const lumpsum = useMemo(() => {
//     const i = rate / 100;
//     const invested = amount;
//     const value = invested * Math.pow(1 + i, years);
//     return { invested, value, returns: Math.max(0, value - invested) };
//   }, [amount, rate, years]);

//   const fd = useMemo(() => {
//     const i = rate / 100;
//     const invested = amount;
//     const value = invested * Math.pow(1 + i / 4, 4 * years);
//     return { invested, value, returns: Math.max(0, value - invested) };
//   }, [amount, rate, years]);

//   const rd = useMemo(() => {
//     const i = Math.pow(1 + rate / 100, 1 / 12) - 1;
//     const n = months;
//     const m = amount;
//     const value = i === 0 ? m * n : m * ((Math.pow(1 + i, n) - 1) / i);
//     const invested = m * n;
//     return { invested, value, returns: Math.max(0, value - invested) };
//   }, [amount, rate, months]);

//   const active =
//     tab === "SIP"
//       ? sip
//       : tab === "LUMPSUM"
//       ? lumpsum
//       : tab === "FD"
//       ? fd
//       : rd;

//   return (
//     <Layout>
//       <SEO
//         title="Calculators - SIP, FD, Lumpsum, RD | Stockstrail"
//         description="Use Stockstrail calculators for SIP, lumpsum, FD, and RD investment planning."
//         url="/calculators"
//       />

//       <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-10">
//             CALCULATORS
//           </h1>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10">
//             {/* Tabs */}
//             <div className="flex flex-wrap gap-3 mb-8">
//               {(["SIP", "LUMPSUM", "FD", "RD", "EMI", "TAX"] as Tab[]).map(
//                 (t) => (
//                   <button
//                     key={t}
//                     onClick={() => setTab(t)}
//                     className={`px-4 py-1.5 rounded-full text-sm tracking-wide border transition-all duration-300 ${
//                       tab === t
//                         ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border-stockstrail-green-light shadow-[0_0_15px_rgba(0,255,151,0.3)] scale-105"
//                         : "text-white/70 border-transparent hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105"
//                     }`}
//                   >
//                     {t}
//                   </button>
//                 )
//               )}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//               {/* Left: Controls */}
//               <div className="space-y-7">
//                 {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
//                   <div className="space-y-6">
//                     {/* Amount */}
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between text-white/80">
//                         <span className="uppercase tracking-wide text-xs sm:text-sm">
//                           {tab === "LUMPSUM" || tab === "FD"
//                             ? "PRINCIPAL AMOUNT"
//                             : "MONTHLY INVESTMENT"}
//                         </span>
//                         <ValueChip
//                           ariaLabel="amount"
//                           value={amount}
//                           prefix="₹ "
//                           onChange={(n) =>
//                             setAmount(
//                               Math.min(Math.max(n, 0), amountMax)
//                             )
//                           }
//                         />
//                       </div>
//                       <input
//                         type="range"
//                         min={1000}
//                         max={amountMax}
//                         step={500}
//                         value={Math.min(amount, amountMax)}
//                         onChange={(e) =>
//                           setAmount(Number(e.target.value))
//                         }
//                         className="w-full accent-[#00FF97]"
//                       />
//                     </div>

//                     {/* Rate */}
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between text-white/80">
//                         <span className="uppercase tracking-wide text-xs sm:text-sm">
//                           EXPECTED RETURN RATE (p.a.)
//                         </span>
//                         <ValueChip
//                           ariaLabel="rate"
//                           value={rate}
//                           suffix="%"
//                           onChange={(n) =>
//                             setRate(Math.min(Math.max(n, 0), 100))
//                           }
//                         />
//                       </div>
//                       <input
//                         type="range"
//                         min={1}
//                         max={24}
//                         step={0.1}
//                         value={rate}
//                         onChange={(e) =>
//                           setRate(Number(e.target.value))
//                         }
//                         className="w-full accent-[#00FF97]"
//                       />
//                     </div>

//                     {/* Time */}
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between text-white/80">
//                         <span className="uppercase tracking-wide text-xs sm:text-sm">
//                           TIME PERIOD
//                         </span>
//                         <ValueChip
//                           ariaLabel="years"
//                           value={years}
//                           suffix="Yr"
//                           onChange={(n) =>
//                             setYears(Math.min(Math.max(n, 1), 40))
//                           }
//                         />
//                       </div>
//                       <input
//                         type="range"
//                         min={1}
//                         max={40}
//                         step={1}
//                         value={years}
//                         onChange={(e) =>
//                           setYears(Number(e.target.value))
//                         }
//                         className="w-full accent-[#00FF97]"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* Summary cards for investment tabs */}
//                 {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
//                     <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
//                       <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">
//                         Invested amount
//                       </div>
//                       <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">
//                         ₹{formatINR(active.invested)}
//                       </div>
//                     </div>
//                     <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
//                       <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">
//                         Est. returns
//                       </div>
//                       <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">
//                         ₹{formatINR(active.returns)}
//                       </div>
//                     </div>
//                     <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
//                       <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">
//                         Total value
//                       </div>
//                       <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">
//                         ₹{formatINR(active.value)}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* CTA */}
//                 <a
//                   href="#"
//                   className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group"
//                 >
//                   <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300" />
//                   INVEST NOW
//                 </a>
//               </div>

//               {/* Right: Donut chart */}
//               <div className="flex items-center justify-center">
//                 {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
//                   <Donut invested={active.invested} returns={active.returns} />
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }








'use client';

import SIPCalculatorSEO from '@/components/calculators/seo/SIPCalculatorSEO';
import LumpsumCalculatorSEO from '@/components/calculators/seo/LumpsumCalculatorSEO';
import FDCalculatorSEO from '@/components/calculators/seo/FDCalculatorSEO';
import RDCalculatorSEO from '@/components/calculators/seo/RDCalculatorSEO';
import EMICalculatorSEO from '@/components/calculators/seo/EMICalculatorSEO';
import TaxCalculatorSEO from '@/components/calculators/seo/TaxCalculatorSEO';
import CalculatorsPageSEO from '@/components/calculators/seo/CalculatorsPageSEO';


import React, { useMemo, useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';

type Tab = "SIP" | "LUMPSUM" | "FD" | "RD" | "EMI" | "TAX";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(n));

const formatRate = (n: number) =>
  new Intl.NumberFormat("en-IN", { minimumFractionDigits: 0, maximumFractionDigits: 1 }).format(n);

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

    if (isNaN(parsed)) {
      parsed = 0;
    }

    if (isRate) {
      parsed = Math.round(parsed * 10) / 10;
    }

    onChange?.(parsed);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isRate = suffix === "%";
    let raw = e.target.value;

    if (prefix) raw = raw.replace(prefix, "");
    if (suffix) raw = raw.replace(suffix, "").trim();

    if (isRate) {
      raw = raw.replace(/[^0-9.]/g, "");
      const parts = raw.split(".");
      if (parts.length > 2) {
        raw = parts[0] + "." + parts.slice(1).join("");
      }
      if (parts.length === 2 && parts[1].length > 1) {
        raw = parts[0] + "." + parts[1].substring(0, 1);
      }
    } else {
      raw = raw.replace(/[^0-9]/g, "");
    }

    setEditValue(raw);

    const n = parseFloat(raw || "0");
    if (!isNaN(n)) {
      onChange?.(n);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  };

  const display = isEditing
    ? editValue
    : suffix === "%"
      ? `${formatRate(value)}${suffix ? ` ${suffix}` : ""}`
      : `${prefix ?? ""}${formatINR(value)}${suffix ? ` ${suffix}` : ""}`;

  return onChange ? (
    <input
      aria-label={ariaLabel}
      inputMode="decimal"
      value={display}
      onChange={handleInput}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white/90 text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 w-[150px] sm:w-[180px] text-right"
    />
  ) : (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white/90 text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
      {display}
    </span>
  );
};

const Donut = ({ invested, returns, investedLabel = "INVESTED AMOUNT", returnsLabel = "Returns" }: { invested: number; returns: number; investedLabel?: string; returnsLabel?: string }) => {
  const total = Math.max(1, invested + returns);
  const multiplier = invested > 0 ? total / invested : 1; // Calculate the growth multiplier

  // Calculate the actual growth/ROI percentage: (returns / invested) × 100
  const growthPct = invested > 0 ? (returns / invested) * 100 : 0;

  // For donut visualization: calculate proportions relative to invested amount
  const investedPct = 50; // Invested amount is always 50% in the graph
  const totalPct = invested > 0 ? (total / invested) * 50 : 50; // Total value as percentage relative to invested
  const returnsPct = totalPct - investedPct; // The green portion (returns)

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 group">
      <div
        className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(0,255,151,0.3)]"
        style={{
          background: `conic-gradient(#00FF97 ${returnsPct}%, rgba(255,255,255,0.12) 0)`
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
            {/* Growth Percentage Badge */}
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

function CalculatorsPageContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const [tab, setTab] = useState<Tab>(() => {
    if (tabParam && ['SIP', 'LUMPSUM', 'FD', 'RD', 'EMI', 'TAX'].includes(tabParam)) {
      return tabParam as Tab;
    }
    return "SIP";
  });

  useEffect(() => {
    if (tabParam && ['SIP', 'LUMPSUM', 'FD', 'RD', 'EMI', 'TAX'].includes(tabParam)) {
      setTab(tabParam as Tab);
    }
  }, [tabParam]);

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
  const [taxOpen, setTaxOpen] = useState<{ income: boolean; deductions: boolean; hra: boolean }>({ income: true, deductions: false, hra: false });

  // Independent income breakdown states and salaried toggle
  const [incomeSalary, setIncomeSalary] = useState(0);
  const [incomeOther, setIncomeOther] = useState(0);
  const [incomeInterest, setIncomeInterest] = useState(0);
  const [incomeRental, setIncomeRental] = useState(0);
  const [homeLoanInterestSelf, setHomeLoanInterestSelf] = useState(0);
  const [homeLoanInterestLetOut, setHomeLoanInterestLetOut] = useState(0);
  const [isSalaried, setIsSalaried] = useState(true);

  const months = years * 12;
  const amountMax = (tab === "LUMPSUM" || tab === "FD") ? 10000000 : 200000;

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
    const emi = R === 0 ? P / N : P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
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

    // Fix 80TTA deduction with proper limits
    const ttaLimit = taxAgeCat === "<60" ? 10000 : 50000;
    const ttaDeduction = Math.min(tax80TTA, ttaLimit);

    const totalDeductions = Math.min(150000, tax80C) +
                            Math.min(50000, tax80CCD1B) +
                            Math.min(taxAgeCat === "<60" ? 25000 : 50000, tax80D) +
                            tax80G +
                            tax80E +
                            ttaDeduction;
    const taxableOld = Math.max(0, grossOld - totalDeductions);

    const taxableNew = Math.max(0, activeGrossIncome - standardDeductionNew);

    // New regime slabs and 87A rebate/marginal relief calculation
    const slabTaxNew = (ti: number) => {
      let t = 0;
      const addBand = (from: number, to: number | null, rate: number) => {
        const upper = to ?? ti;
        if (ti <= from) return 0;
        const band = Math.min(ti, upper) - from;
        return Math.max(0, band * rate);
      };

      if (taxAY === "2025-26") {
        // Budget 2024 slabs (FY 2024-25 / AY 2025-26)
        t += addBand(300000, 600000, 0.05);
        t += addBand(600000, 900000, 0.10);
        t += addBand(900000, 1200000, 0.15);
        t += addBand(1200000, 1500000, 0.20);
        t += addBand(1500000, null, 0.30);

        // Rebate under Section 87A: if taxable income <= 7L, full rebate
        if (ti <= 700000) {
          return 0;
        }
        // Marginal relief
        const rawTax = t;
        const excessIncome = ti - 700000;
        if (rawTax > excessIncome) {
          return excessIncome;
        }
        return rawTax;
      } else {
        // Budget 2025 slabs (FY 2025-26 & FY 2026-27 / AY 2026-27 & AY 2027-28)
        t += addBand(400000, 800000, 0.05);
        t += addBand(800000, 1200000, 0.10);
        t += addBand(1200000, 1600000, 0.15);
        t += addBand(1600000, 2000000, 0.20);
        t += addBand(2000000, 2400000, 0.25);
        t += addBand(2400000, null, 0.30);

        // Rebate under Section 87A: if taxable income <= 12L, full rebate
        if (ti <= 1200000) {
          return 0;
        }
        // Marginal relief
        const rawTax = t;
        const excessIncome = ti - 1200000;
        if (rawTax > excessIncome) {
          return excessIncome;
        }
        return rawTax;
      }
    };

    // Old regime with age-based exemption limits
    const oldExemption = taxAgeCat === ">=80" ? 500000 : taxAgeCat === "60-80" ? 300000 : 250000;

    const slabTaxOld = (ti: number) => {
      let t = 0;
      const add = (from: number, to: number | null, rate: number) => {
        const upper = to ?? ti;
        if (ti <= from) return 0;
        const band = Math.min(ti, upper) - from;
        return Math.max(0, band * rate);
      };
      t += add(oldExemption, 500000, 0.05);
      t += add(500000, 1000000, 0.20);
      t += add(1000000, null, 0.30);

      // Rebate under Section 87A for Old Regime: if taxable income <= 5L, rebate up to 12.5k
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
    taxIncome, tax80C, tax80CCD1B, tax80D, tax80G, tax80E, tax80TTA,
    basicSalary, da, hra, rentPaid, isMetro,
    incomeSalary, incomeOther, incomeInterest, incomeRental,
    homeLoanInterestSelf, homeLoanInterestLetOut, isSalaried, taxAY, taxAgeCat
  ]);

  const active = tab === "SIP" ? sip : tab === "LUMPSUM" ? lumpsum : tab === "FD" ? fd : tab === "RD" ? rd : undefined as any;

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-10">CALCULATORS</h1>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-10">
            <div className="flex flex-wrap gap-3 mb-8">
              {(["SIP", "LUMPSUM", "FD", "RD", "EMI", "TAX"] as Tab[]).map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-4 py-1.5 rounded-full text-sm tracking-wide border transition-all duration-300 ${tab === t
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
                        <span className="uppercase tracking-wide text-xs sm:text-sm">{tab === "LUMPSUM" || tab === "FD" ? "PRINCIPAL AMOUNT" : "MONTHLY INVESTMENT"}</span>
                        <ValueChip ariaLabel="amount" value={amount} prefix="₹ " onChange={(n) => setAmount(Math.min(Math.max(n, 0), amountMax))} />
                      </div>
                      <input type="range" min={1000} max={amountMax} step={500} value={Math.min(amount, amountMax)} onChange={(e) => setAmount(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/80">
                        <span className="uppercase tracking-wide text-xs sm:text-sm">EXPECTED RETURN RATE (p.a.)</span>
                        <ValueChip
                          ariaLabel="rate"
                          value={rate}
                          suffix="%"
                          onChange={(n) => {
                            const minRate = (tab === "RD" || tab === "FD") ? 2 : 1;
                            const maxRate = (tab === "RD" || tab === "FD") ? 10 : 24;
                            setRate(Math.min(Math.max(n, minRate), maxRate));
                          }}
                        />
                      </div>
                      <input
                        type="range"
                        min={(tab === "RD" || tab === "FD") ? 2 : 1}
                        max={(tab === "RD" || tab === "FD") ? 10 : 24}
                        step={0.1}
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full accent-[#00FF97]"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/80">
                        <span className="uppercase tracking-wide text-xs sm:text-sm">TIME PERIOD</span>
                        <ValueChip ariaLabel="years" value={years} suffix="Yr" onChange={(n) => setYears(Math.min(Math.max(n, 1), 40))} />
                      </div>
                      <input type="range" min={1} max={40} step={1} value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                    </div>
                  </div>
                )}

                {tab === "EMI" && (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/80">
                        <span className="uppercase tracking-wide text-xs sm:text-sm">LOAN AMOUNT</span>
                        <ValueChip ariaLabel="loan" value={emiPrincipal} prefix="₹ " onChange={(n) => setEmiPrincipal(Math.min(Math.max(n, 0), 100000000))} />
                      </div>
                      <input type="range" min={50000} max={100000000} step={5000} value={emiPrincipal} onChange={(e) => setEmiPrincipal(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/80">
                        <span className="uppercase tracking-wide text-xs sm:text-sm">INTEREST RATE (p.a.)</span>
                        <ValueChip ariaLabel="emi-rate" value={emiRate} suffix="%" onChange={(n) => setEmiRate(Math.min(Math.max(n, 0), 40))} />
                      </div>
                      <input type="range" min={1} max={24} step={0.1} value={emiRate} onChange={(e) => setEmiRate(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white/80">
                        <span className="uppercase tracking-wide text-xs sm:text-sm">TENURE</span>
                        <ValueChip ariaLabel="emi-years" value={emiYears} suffix="Yr" onChange={(n) => setEmiYears(Math.min(Math.max(n, 1), 40))} />
                      </div>
                      <input type="range" min={1} max={40} step={1} value={emiYears} onChange={(e) => setEmiYears(Number(e.target.value))} className="w-full accent-[#00FF97]" />
                    </div>
                  </div>
                )}

                {tab === "TAX" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-white/80">
                          <span className="uppercase tracking-wide text-xs sm:text-sm">Assessment Year</span>
                          <span className="inline-flex">
                            <select
                              value={taxAY}
                              onChange={(e) => setTaxAY(e.target.value)}
                              style={{ backgroundColor: '#0d2520', color: 'white' }}
                              className="text-white text-sm px-3 py-1 rounded-md hover:bg-[#1a3d35] hover:border-stockstrail-green-light border border-transparent focus:border-stockstrail-green-light focus:outline-none transition-all duration-300 cursor-pointer"
                            >
                              <option value="2027-28" style={{ backgroundColor: '#0d2520', color: 'white' }}>2027-28 (FY 2026-27)</option>
                              <option value="2026-27" style={{ backgroundColor: '#0d2520', color: 'white' }}>2026-27 (FY 2025-26)</option>
                              <option value="2025-26" style={{ backgroundColor: '#0d2520', color: 'white' }}>2025-26 (FY 2024-25)</option>
                            </select>
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-white/80">
                          <span className="uppercase tracking-wide text-xs sm:text-sm">Age category</span>
                          <span className="inline-flex">
                            <select
                              value={taxAgeCat}
                              onChange={(e) => setTaxAgeCat(e.target.value as any)}
                              style={{ backgroundColor: '#0d2520', color: 'white' }}
                              className="text-white text-sm px-3 py-1 rounded-md hover:bg-[#1a3d35] hover:border-stockstrail-green-light border border-transparent focus:border-stockstrail-green-light focus:outline-none transition-all duration-300 cursor-pointer"
                            >
                              <option value="<60" style={{ backgroundColor: '#0d2520', color: 'white' }}>Below 60</option>
                              <option value="60-80" style={{ backgroundColor: '#0d2520', color: 'white' }}>Senior (60-80)</option>
                              <option value=">=80" style={{ backgroundColor: '#0d2520', color: 'white' }}>Super Senior (80+)</option>
                            </select>
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-white/80">
                          <span className="uppercase tracking-wide text-xs sm:text-sm">Salaried Employee</span>
                          <input
                            type="checkbox"
                            checked={isSalaried}
                            onChange={(e) => setIsSalaried(e.target.checked)}
                            className="w-5 h-5 accent-[#00FF97] cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-white/80">
                          <span className="uppercase tracking-wide text-xs sm:text-sm">Total annual income</span>
                          <ValueChip ariaLabel="income" value={taxIncome} prefix="₹ " onChange={(n) => setTaxIncome(Math.max(0, n))} />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 overflow-hidden">
                      <button onClick={() => setTaxOpen(s => ({ ...s, income: !s.income }))} className="w-full text-left px-4 py-3 bg-white/5 text-white flex justify-between items-center">
                        <span className="font-medium">Income</span>
                        <span>{taxOpen.income ? "▴" : "▾"}</span>
                      </button>
                      {taxOpen.income && (
                        <div className="p-4 space-y-3">
                          <div className="flex items-center justify-between text-white/80"><span>Gross salary income</span><ValueChip ariaLabel="basic" value={incomeSalary} prefix="₹ " onChange={(n) => setIncomeSalary(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Annual income from other sources</span><ValueChip ariaLabel="da" value={incomeOther} prefix="₹ " onChange={(n) => setIncomeOther(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Annual income from interest</span><ValueChip ariaLabel="80tta-inc" value={incomeInterest} prefix="₹ " onChange={(n) => setIncomeInterest(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Annual income from let-out property</span><ValueChip ariaLabel="rentinc" value={incomeRental} prefix="₹ " onChange={(n) => setIncomeRental(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Interest on home loan (self-occupied)</span><ValueChip ariaLabel="homeint1" value={homeLoanInterestSelf} prefix="₹ " onChange={(n) => setHomeLoanInterestSelf(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Interest on home loan (let-out)</span><ValueChip ariaLabel="homeint2" value={homeLoanInterestLetOut} prefix="₹ " onChange={(n) => setHomeLoanInterestLetOut(Math.max(0, n))} /></div>
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl border border-white/10 overflow-hidden">
                      <button onClick={() => setTaxOpen(s => ({ ...s, deductions: !s.deductions }))} className="w-full text-left px-4 py-3 bg-white/5 text-white flex justify-between items-center">
                        <span className="font-medium">Deductions</span>
                        <span>{taxOpen.deductions ? "▴" : "▾"}</span>
                      </button>
                      {taxOpen.deductions && (
                        <div className="p-4 space-y-3">
                          <div className="flex items-center justify-between text-white/80"><span>Basic deductions u/s 80C</span><ValueChip ariaLabel="80c" value={tax80C} prefix="₹ " onChange={(n) => setTax80C(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>NPS u/s 80CCD(1B)</span><ValueChip ariaLabel="80ccd1b" value={tax80CCD1B} prefix="₹ " onChange={(n) => setTax80CCD1B(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Medical Insurance Premium u/s 80D</span><ValueChip ariaLabel="80d" value={tax80D} prefix="₹ " onChange={(n) => setTax80D(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Donation to charity u/s 80G</span><ValueChip ariaLabel="80g" value={tax80G} prefix="₹ " onChange={(n) => setTax80G(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Interest on Educational Loan u/s 80E</span><ValueChip ariaLabel="80e" value={tax80E} prefix="₹ " onChange={(n) => setTax80E(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Interest on savings (80TTA/TTB)</span><ValueChip ariaLabel="80tta" value={tax80TTA} prefix="₹ " onChange={(n) => setTax80TTA(Math.max(0, n))} /></div>
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl border border-white/10 overflow-hidden">
                      <button onClick={() => setTaxOpen(s => ({ ...s, hra: !s.hra }))} className="w-full text-left px-4 py-3 bg-white/5 text-white flex justify-between items-center">
                        <span className="font-medium">HRA Exemption</span>
                        <span>{taxOpen.hra ? "▴" : "▾"}</span>
                      </button>
                      {taxOpen.hra && (
                        <div className="p-4 space-y-3">
                          <div className="flex items-center justify-between text-white/80"><span>Basic salary (p.a.)</span><ValueChip ariaLabel="basic2" value={basicSalary} prefix="₹ " onChange={(n) => setBasicSalary(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Dearness allowance (DA)</span><ValueChip ariaLabel="da2" value={da} prefix="₹ " onChange={(n) => setDa(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>HRA received (p.a.)</span><ValueChip ariaLabel="hra2" value={hra} prefix="₹ " onChange={(n) => setHra(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Total rent paid (p.a.)</span><ValueChip ariaLabel="rent2" value={rentPaid} prefix="₹ " onChange={(n) => setRentPaid(Math.max(0, n))} /></div>
                          <div className="flex items-center justify-between text-white/80"><span>Do you live in a metro city?</span><input type="checkbox" checked={isMetro} onChange={(e) => setIsMetro(e.target.checked)} className="w-5 h-5 accent-[#00FF97]" /></div>
                        </div>
                      )}
                    </div>

                    <div>
                      <button className="mt-2 inline-flex items-center gap-3 px-6 py-3 bg-stockstrail-green-light/20 border border-stockstrail-green-light rounded-full text-white hover:bg-stockstrail-green-light/30 transition-all">CALCULATE</button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/90">
                  {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
                    <>
                      <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
                        <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">Invested amount</div>
                        <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">₹{formatINR(active.invested)}</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
                        <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">Est. returns</div>
                        <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">₹{formatINR(active.returns)}</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-4 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.2)] transition-all duration-300 group cursor-pointer">
                        <div className="text-white/60 text-xs uppercase group-hover:text-white/80 transition-colors duration-300">Total value</div>
                        <div className="text-lg group-hover:text-stockstrail-green-light transition-colors duration-300">₹{formatINR(active.value)}</div>
                      </div>
                    </>
                  )}
                  {tab === "EMI" && (
                    <>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Loan amount</div><div className="text-lg">₹{formatINR(emiCalc.principal)}</div></div>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Monthly EMI</div><div className="text-lg">₹{formatINR(emiCalc.emi)}</div></div>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Total interest</div><div className="text-lg">₹{formatINR(emiCalc.interest)}</div></div>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Total payment</div><div className="text-lg">₹{formatINR(emiCalc.total)}</div></div>
                    </>
                  )}
                  {tab === "TAX" && (
                    <>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Taxable income (New)</div><div className="text-lg">₹{formatINR(taxCalc.taxableNew)}</div></div>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Tax as per slabs</div><div className="text-lg">₹{formatINR(taxCalc.taxNew)}</div></div>
                      <div className="rounded-lg bg-white/5 p-4"><div className="text-white/60 text-xs uppercase">Total tax payable</div><div className="text-lg">₹{formatINR(taxCalc.totalNew)}</div></div>
                    </>
                  )}
                </div>

                <a href="#" className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 bg-transparent border-2 border-white/20 rounded-full text-white w-fit hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 text-sm sm:text-base group">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                  INVEST NOW
                </a>
              </div>

              <div className="flex items-center justify-center">
                {(["SIP", "LUMPSUM", "FD", "RD"] as Tab[]).includes(tab) && (
                  <Donut invested={active.invested} returns={active.returns} />
                )}
                {tab === "EMI" && (
                  <Donut investedLabel="Principal Amount" returnsLabel="Interest Amount" invested={emiCalc.principal} returns={emiCalc.interest} />
                )}
                {tab === "TAX" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                      <div className="text-white text-lg mb-2">Income Tax (New Regime)</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span>Taxable Income</span><span>₹{formatINR(taxCalc.taxableNew)}</span></div>
                        <div className="flex justify-between"><span>Tax</span><span>₹{formatINR(taxCalc.taxNew)}</span></div>
                        <div className="flex justify-between"><span>Cess (4%)</span><span>₹{formatINR(taxCalc.cessNew)}</span></div>
                        <div className="w-full h-px bg-white/10 my-2"></div>
                        <div className="flex justify-between text-white"><span>Total Tax Payable</span><span>₹{formatINR(taxCalc.totalNew)}</span></div>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80">
                      <div className="text-white text-lg mb-2">Income Tax (Old Regime)</div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between"><span>HRA Exemption</span><span>₹{formatINR(taxCalc.hraExempt)}</span></div>
                        <div className="flex justify-between"><span>Taxable Income</span><span>₹{formatINR(taxCalc.taxableOld)}</span></div>
                        <div className="flex justify-between"><span>Tax</span><span>₹{formatINR(taxCalc.taxOld)}</span></div>
                        <div className="flex justify-between"><span>Cess (4%)</span><span>₹{formatINR(taxCalc.cessOld)}</span></div>
                        <div className="w-full h-px bg-white/10 my-2"></div>
                        <div className="flex justify-between text-white"><span>Total Tax Payable</span><span>₹{formatINR(taxCalc.totalOld)}</span></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80">
              {tab === "SIP" && <SIPCalculatorSEO />}
              {tab === "LUMPSUM" && <LumpsumCalculatorSEO />}
              {tab === "FD" && <FDCalculatorSEO />}
              {tab === "RD" && <RDCalculatorSEO />}
              {tab === "EMI" && <EMICalculatorSEO />}
              {tab === "TAX" && <TaxCalculatorSEO />}
            </div>
            
            <CalculatorsPageSEO />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function CalculatorsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <CalculatorsPageContent />
    </Suspense>
  );
}
