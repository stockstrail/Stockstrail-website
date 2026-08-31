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
    return max * 1.05;
  }, [data]);

  // Chart dimensions
  const svgWidth = 600;
  const svgHeight = 250;
  const padLeft = 50;
  const padRight = 20;
  const padTop = 20;
  const padBottom = 32;

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

  // Build SVG Paths
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

  // Y-axis ticks
  const yTicks = useMemo(() => {
    return [0, 0.33, 0.66, 1].map((pct) => {
      const val = maxTotal * pct;
      const y = padTop + chartHeight - pct * chartHeight;
      return { val, y };
    });
  }, [maxTotal, padTop, chartHeight]);

  // X-axis labels
  const xLabels = useMemo(() => {
    if (data.length <= 8) return points;
    const step = Math.ceil(data.length / 6);
    return points.filter((p, i) => i === 0 || i === points.length - 1 || i % step === 0);
  }, [points, data.length]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Top Professional Summary Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#03241F]/80 border border-white/10 rounded-xl p-3 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-stockstrail-green-light/15 text-stockstrail-green-light font-bold text-xs border border-stockstrail-green-light/30">
            Year {activePoint.year}
          </span>
          <span className="text-white/60 text-xs">
            {hoveredIdx !== null ? "Timeline View" : "Projected Maturity"}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-right">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
              Total Value
            </div>
            <div className="text-stockstrail-green-light font-bold text-base sm:text-lg">
              {currencySymbol}{formatINR(activePoint.total)}
              <span className="text-xs text-white/60 font-normal ml-1 hidden sm:inline">
                ({formatIndianWords(activePoint.total)})
              </span>
            </div>
          </div>

          <div className="h-7 w-px bg-white/10 hidden sm:block" />

          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-white/50">
              Est. Returns
            </div>
            <div className="text-white font-semibold text-sm sm:text-base">
              +{currencySymbol}{formatINR(activePoint.returns)}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Chart with Distinct Color Separation */}
      <div className="relative w-full rounded-2xl border border-white/10 bg-[#021A15]/80 p-3 sm:p-4 overflow-hidden">
        <svg
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="w-full h-auto overflow-visible select-none"
          onMouseLeave={() => setHoveredIdx(null)}
          onTouchEnd={() => setHoveredIdx(null)}
        >
          <defs>
            {/* 1. Est. Returns / Total Wealth: Vibrant Emerald Green Gradient */}
            <linearGradient id="wealthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00FF97" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#00FF97" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00FF97" stopOpacity="0.0" />
            </linearGradient>

            {/* 2. Invested Amount: Distinct Steel / Slate Blue Gradient */}
            <linearGradient id="investedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#386A7A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#1E3E47" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
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

          {/* Invested Area & Line (Steel Slate Blue) */}
          <path d={investedAreaPath} fill="url(#investedGradient)" />
          <path
            d={investedLinePath}
            fill="none"
            stroke="#5C9EAD"
            strokeWidth="2"
            strokeDasharray="4,4"
          />

          {/* Total Wealth Area & Line (Emerald Green) */}
          <path d={totalAreaPath} fill="url(#wealthGradient)" />
          <path
            d={totalLinePath}
            fill="none"
            stroke="#00FF97"
            strokeWidth="2.5"
          />

          {/* X-axis Labels */}
          {xLabels.map((p) => (
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

          {/* Hover Capture */}
          {points.map((p) => {
            const isHovered = hoveredIdx === p.index;
            const isLast = hoveredIdx === null && p.index === points.length - 1;
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
                  onMouseEnter={() => setHoveredIdx(p.index)}
                  onTouchStart={() => setHoveredIdx(p.index)}
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
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                    <circle cx={p.x} cy={p.yTotal} r="5" fill="#00FF97" stroke="#021A15" strokeWidth="2" />
                    <circle cx={p.x} cy={p.yInvested} r="4" fill="#5C9EAD" stroke="#021A15" strokeWidth="1.5" />
                  </g>
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover Detail Card */}
        {hoveredIdx !== null && (
          <div className="mt-2.5 grid grid-cols-3 gap-2 bg-[#011B16]/90 border border-white/10 rounded-xl p-2.5 text-center text-xs">
            <div>
              <span className="text-white/50 block text-[10px] uppercase">Invested Amount</span>
              <span className="font-semibold text-white">₹{formatINR(activePoint.invested)}</span>
            </div>
            <div>
              <span className="text-stockstrail-green-light block text-[10px] uppercase">Est. Returns</span>
              <span className="font-semibold text-stockstrail-green-light">+₹{formatINR(activePoint.returns)}</span>
            </div>
            <div>
              <span className="text-white/50 block text-[10px] uppercase">Total Value</span>
              <span className="font-bold text-stockstrail-green-accent">₹{formatINR(activePoint.total)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Clean Professional Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/70 px-1">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#00FF97] shadow-[0_0_6px_#00FF97]" />
            <span className="text-white font-medium">{returnsLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#5C9EAD]" />
            <span className="text-white/80">{investedLabel}</span>
          </div>
        </div>

        <div className="text-white/40 text-[11px]">
          Hover or tap on any year to inspect compounding values.
        </div>
      </div>
    </div>
  );
}
