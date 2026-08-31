"use client";

import React, { useState, useMemo } from "react";

export interface YearlyDataPoint {
  year: number;
  invested: number;
  returns: number;
  total: number;
}

interface GrowthChartProps {
  data: YearlyDataPoint[];
  investedLabel?: string;
  returnsLabel?: string;
  currencySymbol?: string;
}

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

export const formatIndianWords = (n: number): string => {
  const abs = Math.abs(n);
  if (abs >= 10000000) {
    return `₹${(n / 10000000).toFixed(2)} Cr`;
  }
  if (abs >= 100000) {
    return `₹${(n / 100000).toFixed(2)} Lakh`;
  }
  if (abs >= 1000) {
    return `₹${(n / 1000).toFixed(1)}k`;
  }
  return `₹${formatINR(n)}`;
};

export default function GrowthChart({
  data,
  investedLabel = "Invested Amount",
  returnsLabel = "Est. Returns",
  currencySymbol = "₹",
}: GrowthChartProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const finalPoint = data[data.length - 1] || { year: 1, invested: 0, returns: 0, total: 0 };
  const activePoint = hoveredIdx !== null && data[hoveredIdx] ? data[hoveredIdx] : finalPoint;

  const maxTotal = useMemo(() => {
    const max = Math.max(...data.map((d) => d.total), 1);
    return max * 1.05; // 5% headroom for aesthetic spacing
  }, [data]);

  // Chart dimensions
  const svgWidth = 600;
  const svgHeight = 260;
  const padLeft = 45;
  const padRight = 20;
  const padTop = 25;
  const padBottom = 35;

  const chartWidth = svgWidth - padLeft - padRight;
  const chartHeight = svgHeight - padTop - padBottom;

  const points = useMemo(() => {
    if (!data.length) return [];
    return data.map((d, index) => {
      const x = padLeft + (index / Math.max(1, data.length - 1)) * chartWidth;
      const yTotal = padTop + chartHeight - (d.total / maxTotal) * chartHeight;
      const yInvested = padTop + chartHeight - (d.invested / maxTotal) * chartHeight;
      return { ...d, x, yTotal, yInvested, index };
    });
  }, [data, chartWidth, chartHeight, maxTotal, padLeft, padTop]);

  // Build SVG Paths for smooth Area & Line
  const totalAreaPath = useMemo(() => {
    if (points.length < 2) return "";
    let p = `M ${points[0].x} ${padTop + chartHeight} L ${points[0].x} ${points[0].yTotal}`;
    for (let i = 1; i < points.length; i++) {
      p += ` L ${points[i].x} ${points[i].yTotal}`;
    }
    p += ` L ${points[points.length - 1].x} ${padTop + chartHeight} Z`;
    return p;
  }, [points, padTop, chartHeight]);

  const totalLinePath = useMemo(() => {
    if (points.length < 2) return "";
    let p = `M ${points[0].x} ${points[0].yTotal}`;
    for (let i = 1; i < points.length; i++) {
      p += ` L ${points[i].x} ${points[i].yTotal}`;
    }
    return p;
  }, [points]);

  const investedAreaPath = useMemo(() => {
    if (points.length < 2) return "";
    let p = `M ${points[0].x} ${padTop + chartHeight} L ${points[0].x} ${points[0].yInvested}`;
    for (let i = 1; i < points.length; i++) {
      p += ` L ${points[i].x} ${points[i].yInvested}`;
    }
    p += ` L ${points[points.length - 1].x} ${padTop + chartHeight} Z`;
    return p;
  }, [points, padTop, chartHeight]);

  const investedLinePath = useMemo(() => {
    if (points.length < 2) return "";
    let p = `M ${points[0].x} ${points[0].yInvested}`;
    for (let i = 1; i < points.length; i++) {
      p += ` L ${points[i].x} ${points[i].yInvested}`;
    }
    return p;
  }, [points]);

  // Y-axis ticks (4 levels)
  const yTicks = useMemo(() => {
    return [0, 0.33, 0.66, 1].map((pct) => {
      const val = maxTotal * pct;
      const y = padTop + chartHeight - pct * chartHeight;
      return { val, y };
    });
  }, [maxTotal, padTop, chartHeight]);

  // X-axis label step to avoid clutter
  const xLabels = useMemo(() => {
    if (data.length <= 8) return points;
    const step = Math.ceil(data.length / 6);
    return points.filter((p, i) => i === 0 || i === points.length - 1 || i % step === 0);
  }, [points, data.length]);

  const multiplier = activePoint.invested > 0 ? activePoint.total / activePoint.invested : 1;
  const profitPct = activePoint.invested > 0 ? (activePoint.returns / activePoint.invested) * 100 : 0;

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Interactive Metric Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-stockstrail-green-light/15 via-[#03362E]/60 to-[#01221D]/80 border border-stockstrail-green-light/30 rounded-2xl p-3 sm:p-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-stockstrail-green-light/20 text-stockstrail-green-light font-bold text-xs sm:text-sm border border-stockstrail-green-light/40">
            Year {activePoint.year}
          </span>
          <span className="text-white/60 text-xs sm:text-sm hidden sm:inline">
            {hoveredIdx !== null ? "Timeline Inspection" : "Final Projected Wealth"}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-5 text-right">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
              Total Wealth
            </div>
            <div className="text-stockstrail-green-light font-bold text-base sm:text-xl">
              {currencySymbol}{formatINR(activePoint.total)}
              <span className="text-xs text-white/70 font-normal ml-1 hidden sm:inline">
                ({formatIndianWords(activePoint.total)})
              </span>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden sm:block" />

          <div className="hidden sm:block">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
              Wealth Multiplier
            </div>
            <div className="text-white font-semibold text-sm sm:text-base text-stockstrail-green-accent">
              {multiplier.toFixed(2)}x <span className="text-xs text-stockstrail-green-light font-medium">(+{profitPct.toFixed(0)}%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* SVG Compounding Visual Area Chart */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-[#021A15]/70 p-2 sm:p-4 overflow-hidden">
        {/* Glow backdrop effect behind chart */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-stockstrail-green-light/5 rounded-full blur-3xl pointer-events-none" />

        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible select-none"
          onMouseLeave={() => setHoveredIdx(null)}
          onTouchEnd={() => setHoveredIdx(null)}
        >
          <defs>
            {/* Gradient for Total Wealth (Top layer - glowing vibrant green) */}
            <linearGradient id="wealthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF97" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#00FF97" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#00FF97" stopOpacity="0.0" />
            </linearGradient>

            {/* Gradient for Invested Amount (Bottom layer - solid base) */}
            <linearGradient id="investedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#256B5C" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#11332C" stopOpacity="0.2" />
            </linearGradient>

            {/* Glow filter for the active line */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Horizontal Grid lines & Y-ticks */}
          {yTicks.map((tick, i) => (
            <g key={i}>
              <line
                x1={padLeft}
                y1={tick.y}
                x2={svgWidth - padRight}
                y2={tick.y}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeDasharray={i === 0 ? "none" : "3,3"}
              />
              <text
                x={padLeft - 6}
                y={tick.y + 3}
                fill="rgba(255, 255, 255, 0.4)"
                fontSize="10"
                textAnchor="end"
              >
                {formatIndianWords(tick.val)}
              </text>
            </g>
          ))}

          {/* Invested Area & Line (Bottom base) */}
          <path d={investedAreaPath} fill="url(#investedGradient)" />
          <path
            d={investedLinePath}
            fill="none"
            stroke="#4E9E8C"
            strokeWidth="2"
            strokeDasharray="4,4"
            opacity="0.8"
          />

          {/* Total Wealth Area & Line (Top compounding wave) */}
          <path d={totalAreaPath} fill="url(#wealthGradient)" />
          <path
            d={totalLinePath}
            fill="none"
            stroke="#00FF97"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* X-axis Labels */}
          {xLabels.map((p) => (
            <text
              key={p.year}
              x={p.x}
              y={svgHeight - 8}
              fill={activePoint.year === p.year ? "#00FF97" : "rgba(255, 255, 255, 0.5)"}
              fontSize="11"
              fontWeight={activePoint.year === p.year ? "bold" : "normal"}
              textAnchor="middle"
            >
              Yr {p.year}
            </text>
          ))}

          {/* Hover Crosshair & Data Pins */}
          {points.map((p) => {
            const isHovered = hoveredIdx === p.index;
            const isLast = hoveredIdx === null && p.index === points.length - 1;
            const isActive = isHovered || isLast;

            return (
              <g key={p.year}>
                {/* Invisible wide capture area for easy hover on mobile/desktop */}
                <rect
                  x={p.x - chartWidth / (points.length * 2)}
                  y={padTop}
                  width={chartWidth / Math.max(1, points.length - 1)}
                  height={chartHeight}
                  fill="transparent"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(p.index)}
                  onTouchStart={() => setHoveredIdx(p.index)}
                />

                {isActive && (
                  <g pointerEvents="none">
                    {/* Vertical guideline */}
                    <line
                      x1={p.x}
                      y1={padTop}
                      x2={p.x}
                      y2={padTop + chartHeight}
                      stroke="#00FF97"
                      strokeWidth="1.5"
                      strokeDasharray="3,3"
                      opacity="0.8"
                    />

                    {/* Total Wealth glowing pin */}
                    <circle
                      cx={p.x}
                      cy={p.yTotal}
                      r="6"
                      fill="#00FF97"
                      stroke="#021A15"
                      strokeWidth="2"
                    />
                    <circle
                      cx={p.x}
                      cy={p.yTotal}
                      r="10"
                      fill="#00FF97"
                      opacity="0.3"
                    />

                    {/* Invested pin */}
                    <circle
                      cx={p.x}
                      cy={p.yInvested}
                      r="4"
                      fill="#79BCAE"
                      stroke="#021A15"
                      strokeWidth="1.5"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Tooltip Card */}
        {hoveredIdx !== null && (
          <div className="mt-2 sm:mt-3 grid grid-cols-3 gap-2 bg-black/40 border border-white/10 rounded-xl p-2.5 text-center text-xs">
            <div>
              <span className="text-white/50 block text-[10px] uppercase">Invested So Far</span>
              <span className="font-semibold text-white">₹{formatINR(activePoint.invested)}</span>
            </div>
            <div>
              <span className="text-stockstrail-green-light block text-[10px] uppercase">Est. Profit (Gains)</span>
              <span className="font-semibold text-stockstrail-green-light">+₹{formatINR(activePoint.returns)}</span>
            </div>
            <div>
              <span className="text-white/50 block text-[10px] uppercase">Total Portfolio</span>
              <span className="font-bold text-stockstrail-green-accent">₹{formatINR(activePoint.total)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Legend & Insight */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-white/70 px-1">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#00FF97] shadow-[0_0_8px_#00FF97]" />
            <span className="text-white font-medium">{returnsLabel} (Profit Growth)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#4E9E8C]" />
            <span>{investedLabel} (Your Capital)</span>
          </div>
        </div>

        <div className="text-white/50 text-xs italic">
          💡 Hover or touch any year to inspect your compounding wealth.
        </div>
      </div>
    </div>
  );
}
