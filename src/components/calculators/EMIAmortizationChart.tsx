"use client";

import React, { useState, useMemo } from "react";
import { formatIndianWords } from "./GrowthChart";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

export interface EMIPoint {
  year: number;
  principalPaid: number;
  interestPaid: number;
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
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  // Generate Year-by-Year Amortization Schedule
  const schedule = useMemo<EMIPoint[]>(() => {
    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;
    let balance = principal;
    let cumulativeInterest = 0;
    let cumulativePrincipal = 0;
    const points: EMIPoint[] = [];

    for (let m = 1; m <= totalMonths; m++) {
      const interestForMonth = monthlyRate * balance;
      const principalForMonth = Math.min(balance, emi - interestForMonth);
      balance = Math.max(0, balance - principalForMonth);
      cumulativeInterest += interestForMonth;
      cumulativePrincipal += principalForMonth;

      if (m % 12 === 0 || m === totalMonths) {
        points.push({
          year: Math.ceil(m / 12),
          principalPaid: cumulativePrincipal,
          interestPaid: cumulativeInterest,
          remainingBalance: balance,
        });
      }
    }
    return points;
  }, [principal, rate, years, emi]);

  const activePoint =
    hoveredYear !== null && schedule[hoveredYear]
      ? schedule[hoveredYear]
      : schedule[schedule.length - 1] || {
          year: years,
          principalPaid: principal,
          interestPaid: 0,
          remainingBalance: 0,
        };

  // SVG Chart Setup
  const svgWidth = 600;
  const svgHeight = 240;
  const padLeft = 45;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 30;

  const chartWidth = svgWidth - padLeft - padRight;
  const chartHeight = svgHeight - padTop - padBottom;
  const maxVal = Math.max(principal, ...schedule.map((s) => s.interestPaid + s.principalPaid), 1);

  const points = useMemo(() => {
    return schedule.map((d, index) => {
      const x = padLeft + (index / Math.max(1, schedule.length - 1)) * chartWidth;
      const yBalance = padTop + chartHeight - (d.remainingBalance / maxVal) * chartHeight;
      const yInterest = padTop + chartHeight - (d.interestPaid / maxVal) * chartHeight;
      return { ...d, x, yBalance, yInterest, index };
    });
  }, [schedule, chartWidth, chartHeight, maxVal, padLeft, padTop]);

  // Balance Line Path
  const balancePath = useMemo(() => {
    if (points.length < 2) return "";
    let p = `M ${points[0].x} ${points[0].yBalance}`;
    for (let i = 1; i < points.length; i++) {
      p += ` L ${points[i].x} ${points[i].yBalance}`;
    }
    return p;
  }, [points]);

  // Interest Line Path
  const interestPath = useMemo(() => {
    if (points.length < 2) return "";
    let p = `M ${points[0].x} ${points[0].yInterest}`;
    for (let i = 1; i < points.length; i++) {
      p += ` L ${points[i].x} ${points[i].yInterest}`;
    }
    return p;
  }, [points]);

  const interestRatio = principal > 0 ? (activePoint.interestPaid / principal) * 100 : 0;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Interactive Metric Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-stockstrail-green-light/15 via-[#03362E]/60 to-[#01221D]/80 border border-stockstrail-green-light/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-stockstrail-green-light/20 text-stockstrail-green-light font-bold text-xs sm:text-sm border border-stockstrail-green-light/40">
            Year {activePoint.year} of {years}
          </span>
          <span className="text-white/60 text-xs sm:text-sm">
            Loan Amortization
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-right">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
              Loan Balance Left
            </div>
            <div className="text-white font-bold text-base sm:text-lg">
              ₹{formatINR(activePoint.remainingBalance)}
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden sm:block" />

          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
              Cumulative Interest
            </div>
            <div className="text-amber-400 font-bold text-base sm:text-lg">
              ₹{formatINR(activePoint.interestPaid)}
              <span className="text-xs text-white/60 font-normal ml-1 hidden sm:inline">
                ({interestRatio.toFixed(0)}% of loan)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Amortization Trajectory */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-[#021A15]/70 p-2 sm:p-4 overflow-hidden">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible select-none"
          onMouseLeave={() => setHoveredYear(null)}
        >
          {/* Grid lines */}
          {[0, 0.5, 1].map((pct, i) => {
            const y = padTop + chartHeight - pct * chartHeight;
            return (
              <g key={i}>
                <line
                  x1={padLeft}
                  y1={y}
                  x2={svgWidth - padRight}
                  y2={y}
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeDasharray="3,3"
                />
                <text
                  x={padLeft - 6}
                  y={y + 3}
                  fill="rgba(255, 255, 255, 0.4)"
                  fontSize="10"
                  textAnchor="end"
                >
                  {formatIndianWords(maxVal * pct)}
                </text>
              </g>
            );
          })}

          {/* Remaining Balance (Decreasing blue/teal curve) */}
          <path
            d={balancePath}
            fill="none"
            stroke="#00FF97"
            strokeWidth="3"
          />

          {/* Interest Paid (Increasing amber curve) */}
          <path
            d={interestPath}
            fill="none"
            stroke="#FBBF24"
            strokeWidth="2.5"
            strokeDasharray="4,4"
          />

          {/* X Axis Labels */}
          {points.map((p) => (
            <text
              key={p.year}
              x={p.x}
              y={svgHeight - 6}
              fill={activePoint.year === p.year ? "#00FF97" : "rgba(255, 255, 255, 0.5)"}
              fontSize="10"
              fontWeight={activePoint.year === p.year ? "bold" : "normal"}
              textAnchor="middle"
            >
              Yr {p.year}
            </text>
          ))}

          {/* Interactive Hover pins */}
          {points.map((p) => {
            const isHovered = hoveredYear === p.index;
            const isLast = hoveredYear === null && p.index === points.length - 1;
            const isActive = isHovered || isLast;

            return (
              <g key={p.year}>
                <rect
                  x={p.x - chartWidth / (points.length * 2)}
                  y={padTop}
                  width={chartWidth / Math.max(1, points.length - 1)}
                  height={chartHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredYear(p.index)}
                  onTouchStart={() => setHoveredYear(p.index)}
                />

                {isActive && (
                  <g pointerEvents="none">
                    <line
                      x1={p.x}
                      y1={padTop}
                      x2={p.x}
                      y2={padTop + chartHeight}
                      stroke="#00FF97"
                      strokeWidth="1.5"
                      strokeDasharray="2,2"
                    />
                    <circle cx={p.x} cy={p.yBalance} r="5" fill="#00FF97" />
                    <circle cx={p.x} cy={p.yInterest} r="5" fill="#FBBF24" />
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {hoveredYear !== null && (
          <div className="mt-2 grid grid-cols-3 gap-2 bg-black/40 border border-white/10 rounded-xl p-2 text-center text-xs">
            <div>
              <span className="text-white/50 block text-[10px]">Principal Repaid</span>
              <span className="font-semibold text-white">₹{formatINR(activePoint.principalPaid)}</span>
            </div>
            <div>
              <span className="text-amber-400 block text-[10px]">Interest Paid</span>
              <span className="font-semibold text-amber-400">₹{formatINR(activePoint.interestPaid)}</span>
            </div>
            <div>
              <span className="text-stockstrail-green-light block text-[10px]">Balance Left</span>
              <span className="font-semibold text-stockstrail-green-light">₹{formatINR(activePoint.remainingBalance)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between text-xs text-white/70 px-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#00FF97]" />
            <span className="text-white font-medium">Loan Balance Left</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FBBF24]" />
            <span className="text-amber-300">Interest Paid So Far</span>
          </div>
        </div>
        <div className="text-white/50 hidden sm:inline">
          💡 Hover to see year-by-year loan amortization.
        </div>
      </div>
    </div>
  );
}
