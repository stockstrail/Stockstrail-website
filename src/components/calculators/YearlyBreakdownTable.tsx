"use client";

import React, { useState } from "react";
import { YearlyDataPoint, formatIndianWords } from "./GrowthChart";

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(
    Math.round(n)
  );

interface YearlyBreakdownTableProps {
  data: YearlyDataPoint[];
}

export default function YearlyBreakdownTable({ data }: YearlyBreakdownTableProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedData = showAll ? data : data.slice(0, 5);

  return (
    <div className="w-full space-y-3">
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#021A15]/60">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5 text-white/60">
              <th className="py-3 px-3 sm:px-4 font-semibold">Year</th>
              <th className="py-3 px-3 sm:px-4 font-semibold">Invested (₹)</th>
              <th className="py-3 px-3 sm:px-4 font-semibold text-stockstrail-green-light">Est. Profit (₹)</th>
              <th className="py-3 px-3 sm:px-4 font-semibold text-right">Total Wealth (₹)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            {displayedData.map((row) => (
              <tr key={row.year} className="hover:bg-white/5 transition-colors">
                <td className="py-2.5 px-3 sm:px-4 font-bold text-white">
                  Yr {row.year}
                </td>
                <td className="py-2.5 px-3 sm:px-4">
                  ₹{formatINR(row.invested)}
                  <span className="text-[10px] text-white/40 block sm:inline sm:ml-1">
                    ({formatIndianWords(row.invested)})
                  </span>
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-stockstrail-green-light font-medium">
                  +₹{formatINR(row.returns)}
                  <span className="text-[10px] text-stockstrail-green-light/70 block sm:inline sm:ml-1">
                    ({formatIndianWords(row.returns)})
                  </span>
                </td>
                <td className="py-2.5 px-3 sm:px-4 text-right font-bold text-white">
                  ₹{formatINR(row.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length > 5 && (
        <div className="text-center pt-1">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-semibold text-stockstrail-green-light hover:text-stockstrail-green-accent underline underline-offset-4 cursor-pointer transition-colors"
          >
            {showAll ? "Show Less (First 5 Years)" : `View Full ${data.length}-Year Schedule (${data.length - 5} More Years) ↓`}
          </button>
        </div>
      )}
    </div>
  );
}
