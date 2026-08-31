"use client";

import React, { useState, useMemo } from "react";
import { formatIndianWords } from "./GrowthChart";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

export interface EMIPoint {
  year: number;
  principalPaidYear: number;
  interestPaidYear: number;
  totalPaidYear: number;
  remainingBalance: number;
}

interface EMIAmortizationChartProps {
  principal: number;
  rate: number;
  years: number;
  emi: number;
}

export default function EMIAmortizationChart({
  principal,
  rate,
  years,
  emi,
}: EMIAmortizationChartProps) {
  const [view, setView] = useState<"BREAKDOWN" | "TIMELINE" | "TABLE">("BREAKDOWN");
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const totalPayment = emi * years * 12;
  const totalInterest = Math.max(0, totalPayment - principal);
  const principalRatio = totalPayment > 0 ? (principal / totalPayment) * 100 : 100;
  const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  // Generate Year-by-Year Amortization
  const schedule = useMemo<EMIPoint[]>(() => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;
    let balance = principal;
    const points: EMIPoint[] = [];

    for (let yr = 1; yr <= years; yr++) {
      let principalInYear = 0;
      let interestInYear = 0;

      for (let m = 1; m <= 12; m++) {
        const monthNum = (yr - 1) * 12 + m;
        if (monthNum > totalMonths) break;
        const interestForMonth = monthlyRate * balance;
        const principalForMonth = Math.min(balance, emi - interestForMonth);
        balance = Math.max(0, balance - principalForMonth);
        interestInYear += interestForMonth;
        principalInYear += principalForMonth;
      }

      points.push({
        year: yr,
        principalPaidYear: principalInYear,
        interestPaidYear: interestInYear,
        totalPaidYear: principalInYear + interestInYear,
        remainingBalance: Math.max(0, balance),
      });
    }
    return points;
  }, [principal, rate, years, emi]);

  const activePoint =
    hoveredYear !== null && schedule[hoveredYear]
      ? schedule[hoveredYear]
      : schedule[0] || {
          year: 1,
          principalPaidYear: 0,
          interestPaidYear: 0,
          totalPaidYear: 0,
          remainingBalance: principal,
        };

  return (
    <div className="w-full flex flex-col gap-5">
      {/* View Toggle */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="text-xs font-semibold text-white/70 uppercase tracking-wide">
          Loan Repayment Overview
        </div>
        <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-black/40 border border-white/10 text-xs">
          <button
            onClick={() => setView("BREAKDOWN")}
            className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
              view === "BREAKDOWN"
                ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light/40"
                : "text-white/60 hover:text-white"
            }`}
          >
            Payment Split
          </button>
          <button
            onClick={() => setView("TIMELINE")}
            className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
              view === "TIMELINE"
                ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light/40"
                : "text-white/60 hover:text-white"
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => setView("TABLE")}
            className={`px-3 py-1 rounded-md font-medium transition-all cursor-pointer ${
              view === "TABLE"
                ? "bg-stockstrail-green-light/20 text-stockstrail-green-light border border-stockstrail-green-light/40"
                : "text-white/60 hover:text-white"
            }`}
          >
            Table
          </button>
        </div>
      </div>

      {view === "BREAKDOWN" && (
        <div className="flex flex-col items-center justify-center gap-6 py-2">
          {/* Donut Visualizer */}
          <div
            className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full transition-all duration-300 p-2 shadow-[0_0_30px_rgba(0,0,0,0.4)]"
            style={{
              background: `conic-gradient(#5C9EAD 0% ${principalRatio}%, #FBBF24 ${principalRatio}% 100%)`,
            }}
          >
            <div className="w-full h-full rounded-full bg-[#081C17] flex items-center justify-center flex-col text-center p-3">
              <div className="text-xs text-white/50 uppercase tracking-wider">
                Monthly EMI
              </div>
              <div className="text-stockstrail-green-light text-xl sm:text-2xl font-bold tracking-tight mt-1">
                ₹{formatINR(emi)}
              </div>
              <div className="text-[11px] text-white/60 mt-1">
                for {years * 12} Months
              </div>
            </div>
          </div>

          {/* Cards for Principal vs Interest */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-md">
            <div className="rounded-xl border border-[#5C9EAD]/40 bg-[#5C9EAD]/10 p-3.5 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C9EAD]" />
                <span className="text-[11px] uppercase tracking-wider text-white/80 font-semibold">
                  Principal Borrowed
                </span>
              </div>
              <div className="text-white font-bold text-base sm:text-lg">
                ₹{formatINR(principal)}
              </div>
              <div className="text-[10px] text-white/50">
                {principalRatio.toFixed(1)}% of total payment
              </div>
            </div>

            <div className="rounded-xl border border-amber-400/40 bg-amber-400/10 p-3.5 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-semibold">
                  Total Interest Cost
                </span>
              </div>
              <div className="text-amber-300 font-bold text-base sm:text-lg">
                ₹{formatINR(totalInterest)}
              </div>
              <div className="text-[10px] text-amber-300/60">
                {interestRatio.toFixed(1)}% of total payment
              </div>
            </div>
          </div>

          {/* Total Payment Bar */}
          <div className="w-full max-w-md bg-black/40 border border-white/10 rounded-xl p-3.5 flex justify-between items-center text-sm">
            <span className="text-white/70">Total Amount Payable</span>
            <span className="text-white font-bold text-base sm:text-lg">
              ₹{formatINR(totalPayment)}
              <span className="text-xs text-white/50 ml-1.5 font-normal">({formatIndianWords(totalPayment)})</span>
            </span>
          </div>
        </div>
      )}

      {view === "TIMELINE" && (
        <div className="space-y-4">
          <div className="rounded-xl bg-[#03241F] border border-white/10 p-3 flex justify-between items-center text-xs">
            <div>
              <span className="text-white/50 block text-[10px] uppercase">Year {activePoint.year} Principal Paid</span>
              <span className="font-semibold text-white">₹{formatINR(activePoint.principalPaidYear)}</span>
            </div>
            <div>
              <span className="text-amber-300 block text-[10px] uppercase">Year {activePoint.year} Interest Paid</span>
              <span className="font-semibold text-amber-300">₹{formatINR(activePoint.interestPaidYear)}</span>
            </div>
            <div>
              <span className="text-stockstrail-green-light block text-[10px] uppercase">Balance Remaining</span>
              <span className="font-semibold text-stockstrail-green-light">₹{formatINR(activePoint.remainingBalance)}</span>
            </div>
          </div>

          {/* Stacked Bars for Each Year */}
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {schedule.map((item, idx) => {
              const pPct = item.totalPaidYear > 0 ? (item.principalPaidYear / item.totalPaidYear) * 100 : 50;
              const iPct = 100 - pPct;

              return (
                <div
                  key={item.year}
                  onMouseEnter={() => setHoveredYear(idx)}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer ${
                    hoveredYear === idx
                      ? "border-stockstrail-green-light/60 bg-white/10"
                      : "border-white/5 bg-white/[0.02] hover:bg-white/5"
                  }`}
                >
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-bold text-white">Year {item.year}</span>
                    <span className="text-white/60">
                      Balance: <strong className="text-white">₹{formatINR(item.remainingBalance)}</strong>
                    </span>
                  </div>

                  <div className="w-full h-3 rounded-full bg-white/10 flex overflow-hidden">
                    <div
                      style={{ width: `${pPct}%` }}
                      className="bg-[#5C9EAD] h-full"
                      title={`Principal: ₹${formatINR(item.principalPaidYear)}`}
                    />
                    <div
                      style={{ width: `${iPct}%` }}
                      className="bg-[#FBBF24] h-full"
                      title={`Interest: ₹${formatINR(item.interestPaidYear)}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-white/60 px-1 pt-1">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#5C9EAD]" />
                Principal Repaid
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                Interest Cost
              </span>
            </div>
            <span>Scroll to view all years</span>
          </div>
        </div>
      )}

      {view === "TABLE" && (
        <div className="w-full overflow-x-auto rounded-xl border border-white/10 max-h-72 overflow-y-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-[#03241F] text-white/80 sticky top-0 border-b border-white/10">
              <tr>
                <th className="py-2.5 px-3">Year</th>
                <th className="py-2.5 px-3">Principal Paid</th>
                <th className="py-2.5 px-3">Interest Paid</th>
                <th className="py-2.5 px-3">Total Paid</th>
                <th className="py-2.5 px-3">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/70">
              {schedule.map((row) => (
                <tr key={row.year} className="hover:bg-white/5 transition-colors">
                  <td className="py-2 px-3 font-semibold text-white">Year {row.year}</td>
                  <td className="py-2 px-3 text-[#5C9EAD]">₹{formatINR(row.principalPaidYear)}</td>
                  <td className="py-2 px-3 text-amber-300">₹{formatINR(row.interestPaidYear)}</td>
                  <td className="py-2 px-3 text-white">₹{formatINR(row.totalPaidYear)}</td>
                  <td className="py-2 px-3 font-medium text-stockstrail-green-light">₹{formatINR(row.remainingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
