'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  Sparkles, 
  Printer, 
  TrendingUp,
  FileText,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { trackCustomEvent } from '@/lib/tracking/utm';

export interface HolidayEntry {
  id: string;
  name: string;
  date: string;
  displayDate: string; // e.g., "26 Jan 2026"
  day: string;
  month: string;
  monthIndex: number;
  segments: string;
  clearing: string;
  description: string;
}

// 1. Official 15 Weekday Trading Holidays (NSE & BSE)
export const WEEKDAY_TRADING_HOLIDAYS_2026: HolidayEntry[] = [
  {
    id: 'h1',
    name: 'Republic Day',
    date: '2026-01-26',
    displayDate: '26 Jan 2026',
    day: 'Monday',
    month: 'January',
    monthIndex: 1,
    segments: 'Equities, F&O, Debt & Currency',
    clearing: 'Closed',
    description: 'National Holiday. All capital and derivative market operations remain closed.'
  },
  {
    id: 'h2',
    name: 'Holi',
    date: '2026-03-03',
    displayDate: '03 Mar 2026',
    day: 'Tuesday',
    month: 'March',
    monthIndex: 3,
    segments: 'Equities, F&O, Debt (MCX Evening Open at 5 PM)',
    clearing: 'Closed',
    description: 'Stock markets closed. MCX commodity evening session operates from 5:00 PM to 11:30 PM.'
  },
  {
    id: 'h3',
    name: 'Shri Ram Navami',
    date: '2026-03-26',
    displayDate: '26 Mar 2026',
    day: 'Thursday',
    month: 'March',
    monthIndex: 3,
    segments: 'Equities, F&O, Debt (MCX Evening Open at 5 PM)',
    clearing: 'Closed',
    description: 'NSE and BSE equity segments closed. Commodity evening session open.'
  },
  {
    id: 'h4',
    name: 'Shri Mahavir Jayanti',
    date: '2026-03-31',
    displayDate: '31 Mar 2026',
    day: 'Tuesday',
    month: 'March',
    monthIndex: 3,
    segments: 'Equities, F&O, Debt (MCX Evening Open at 5 PM)',
    clearing: 'Closed',
    description: 'Financial year-end market closure. MCX evening trading active.'
  },
  {
    id: 'h5',
    name: 'Good Friday',
    date: '2026-04-03',
    displayDate: '03 Apr 2026',
    day: 'Friday',
    month: 'April',
    monthIndex: 4,
    segments: 'All Segments (Equities, F&O, MCX Commodities)',
    clearing: 'Closed',
    description: 'Full day market holiday across all Indian exchanges.'
  },
  {
    id: 'h6',
    name: 'Dr. Baba Saheb Ambedkar Jayanti',
    date: '2026-04-14',
    displayDate: '14 Apr 2026',
    day: 'Tuesday',
    month: 'April',
    monthIndex: 4,
    segments: 'Equities, F&O, Currency (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Equity trading closed. MCX commodity trading active in evening (5 PM to 11:30 PM).'
  },
  {
    id: 'h7',
    name: 'Maharashtra Day / May Day',
    date: '2026-05-01',
    displayDate: '01 May 2026',
    day: 'Friday',
    month: 'May',
    monthIndex: 5,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'State exchange holiday in Mumbai. MCX evening session opens at 5:00 PM.'
  },
  {
    id: 'h8',
    name: 'Bakri Id / Eid-ul-Adha',
    date: '2026-05-28',
    displayDate: '28 May 2026',
    day: 'Thursday',
    month: 'May',
    monthIndex: 5,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Stock exchanges closed. Commodity evening session open.'
  },
  {
    id: 'h9',
    name: 'Muharram',
    date: '2026-06-26',
    displayDate: '26 Jun 2026',
    day: 'Friday',
    month: 'June',
    monthIndex: 6,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Equity and derivative markets closed. Commodity evening trading active.'
  },
  {
    id: 'h10',
    name: 'Ganesh Chaturthi',
    date: '2026-09-14',
    displayDate: '14 Sep 2026',
    day: 'Monday',
    month: 'September',
    monthIndex: 9,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Official September market closure. NSE & BSE closed; MCX opens at 5:00 PM.'
  },
  {
    id: 'h11',
    name: 'Mahatma Gandhi Jayanti',
    date: '2026-10-02',
    displayDate: '02 Oct 2026',
    day: 'Friday',
    month: 'October',
    monthIndex: 10,
    segments: 'All Segments (Equities, F&O, MCX Commodities)',
    clearing: 'Closed',
    description: 'National Holiday. Full market holiday morning and evening.'
  },
  {
    id: 'h12',
    name: 'Dussehra (Vijay Dashami)',
    date: '2026-10-20',
    displayDate: '20 Oct 2026',
    day: 'Tuesday',
    month: 'October',
    monthIndex: 10,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Stock markets closed. MCX commodity evening session open.'
  },
  {
    id: 'h13',
    name: 'Diwali - Balipratipada',
    date: '2026-11-10',
    displayDate: '10 Nov 2026',
    day: 'Tuesday',
    month: 'November',
    monthIndex: 11,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Post-Diwali market holiday. Regular trading closed; MCX evening session open.'
  },
  {
    id: 'h14',
    name: 'Prakash Gurpurb Sri Guru Nanak Dev Jayanti',
    date: '2026-11-24',
    displayDate: '24 Nov 2026',
    day: 'Tuesday',
    month: 'November',
    monthIndex: 11,
    segments: 'Equities, F&O, Debt (MCX Evening Open)',
    clearing: 'Closed',
    description: 'Stock exchanges closed. Commodity trading active in evening.'
  },
  {
    id: 'h15',
    name: 'Christmas',
    date: '2026-12-25',
    displayDate: '25 Dec 2026',
    day: 'Friday',
    month: 'December',
    monthIndex: 12,
    segments: 'All Segments (Equities, F&O, MCX Commodities)',
    clearing: 'Closed',
    description: 'Year-end public holiday. Full day closure across all exchanges.'
  },
];

// 2. Holidays Falling on Weekends (Saturday & Sunday)
export const WEEKEND_HOLIDAYS_2026 = [
  {
    name: 'Mahashivratri',
    date: '15 Feb 2026',
    day: 'Sunday',
    status: 'Standard Sunday Closure',
    notes: 'Falls on Sunday. No additional compensatory weekday holiday is granted by exchanges.'
  },
  {
    name: 'Id-Ul-Fitr (Ramadan Eid)',
    date: '21 Mar 2026',
    day: 'Saturday',
    status: 'Standard Saturday Closure',
    notes: 'Falls on Saturday. Standard weekend market closure applies.'
  },
  {
    name: 'Independence Day',
    date: '15 Aug 2026',
    day: 'Saturday',
    status: 'National Holiday (Saturday)',
    notes: 'National Holiday. Falls on Saturday.'
  },
  {
    name: 'Diwali Laxmi Pujan (Muhurat Trading)*',
    date: '08 Nov 2026',
    day: 'Sunday',
    status: 'Special 1-Hour Session',
    notes: 'Exchanges will conduct the auspicious 1-hour Muhurat Trading session in the evening (approx. 6:00 PM - 7:15 PM IST).'
  },
];

// 3. Commodity Split Sessions Guide (MCX / BSE Commodity)
export const COMMODITY_SPLIT_SESSIONS_2026 = [
  { date: '01 Jan 2026', day: 'Thursday', holiday: "New Year's Day", morning: 'Open (9 AM - 5 PM)', evening: 'Closed' },
  { date: '26 Jan 2026', day: 'Monday', holiday: 'Republic Day', morning: 'Closed', evening: 'Closed' },
  { date: '03 Mar 2026', day: 'Tuesday', holiday: 'Holi', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '26 Mar 2026', day: 'Thursday', holiday: 'Shri Ram Navami', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '31 Mar 2026', day: 'Tuesday', holiday: 'Shri Mahavir Jayanti', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '03 Apr 2026', day: 'Friday', holiday: 'Good Friday', morning: 'Closed', evening: 'Closed' },
  { date: '14 Apr 2026', day: 'Tuesday', holiday: 'Dr. Baba Saheb Ambedkar Jayanti', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '01 May 2026', day: 'Friday', holiday: 'Maharashtra Day', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '28 May 2026', day: 'Thursday', holiday: 'Bakri Id', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '26 Jun 2026', day: 'Friday', holiday: 'Muharram', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '14 Sep 2026', day: 'Monday', holiday: 'Ganesh Chaturthi', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '02 Oct 2026', day: 'Friday', holiday: 'Mahatma Gandhi Jayanti', morning: 'Closed', evening: 'Closed' },
  { date: '20 Oct 2026', day: 'Tuesday', holiday: 'Dussehra', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '10 Nov 2026', day: 'Tuesday', holiday: 'Diwali - Balipratipada', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '24 Nov 2026', day: 'Tuesday', holiday: 'Sri Guru Nanak Dev Jayanti', morning: 'Closed', evening: 'Open (5 PM - 11:30 PM)' },
  { date: '25 Dec 2026', day: 'Friday', holiday: 'Christmas', morning: 'Closed', evening: 'Closed' },
];

const MONTH_FILTERS = [
  { label: 'All Months', value: 'ALL' },
  { label: 'Jan', value: '1' },
  { label: 'Feb', value: '2' },
  { label: 'Mar', value: '3' },
  { label: 'Apr', value: '4' },
  { label: 'May', value: '5' },
  { label: 'Jun', value: '6' },
  { label: 'Aug', value: '8' },
  { label: 'Sep', value: '9' },
  { label: 'Oct', value: '10' },
  { label: 'Nov', value: '11' },
  { label: 'Dec', value: '12' },
];

export default function MarketHolidaysHub({ primaryExchange = 'NSE' }: { primaryExchange?: 'NSE' | 'BSE' }) {
  const [selectedMonth, setSelectedMonth] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeView, setActiveView] = useState<'WEEKDAYS' | 'WEEKENDS' | 'COMMODITY'>('WEEKDAYS');

  // Real-time market status state
  const [liveMarket, setLiveMarket] = useState({
    timeStr: '',
    dateStr: '',
    statusHeadline: 'Market Open (Live Trading)',
    isOpen: true,
    subText: 'Regular Trading Hours (09:15 AM – 03:30 PM IST)',
    answerSnippet: 'Yes, the Indian stock market (NSE & BSE) is currently open for regular live trading.'
  });

  useEffect(() => {
    const updateMarketState = () => {
      const now = new Date();
      // Calculate IST time (UTC + 5:30)
      const ist = new Date(now.getTime() + (now.getTimezoneOffset() + 330) * 60000);
      const day = ist.getDay();
      const mins = ist.getHours() * 60 + ist.getMinutes();

      const timeFormatted = ist.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });

      const dateFormatted = ist.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      if (day === 0 || day === 6) {
        setLiveMarket({
          timeStr: `${timeFormatted} IST`,
          dateStr: dateFormatted,
          statusHeadline: 'Market Closed (Weekend)',
          isOpen: false,
          subText: 'Standard Saturday & Sunday exchange closure.',
          answerSnippet: 'No, the Indian stock market (NSE & BSE) is closed today for the weekend. Trading resumes on Monday at 09:15 AM IST.'
        });
      } else if (mins >= 540 && mins < 555) {
        setLiveMarket({
          timeStr: `${timeFormatted} IST`,
          dateStr: dateFormatted,
          statusHeadline: 'Pre-Open Session Active',
          isOpen: true,
          subText: 'Order Entry & Price Discovery (09:00 AM – 09:15 AM)',
          answerSnippet: 'The Indian stock market is currently in the pre-open session. Regular continuous trading begins at 09:15 AM IST.'
        });
      } else if (mins >= 555 && mins < 930) {
        setLiveMarket({
          timeStr: `${timeFormatted} IST`,
          dateStr: dateFormatted,
          statusHeadline: 'Market Open (Live Trading)',
          isOpen: true,
          subText: 'Normal Trading Session (09:15 AM – 03:30 PM IST)',
          answerSnippet: 'Yes, today is an active working day. Indian stock exchanges (NSE & BSE) are open for live trading until 03:30 PM IST.'
        });
      } else {
        setLiveMarket({
          timeStr: `${timeFormatted} IST`,
          dateStr: dateFormatted,
          statusHeadline: 'Regular Trading Closed',
          isOpen: false,
          subText: 'Post Market Session · Re-opens next business day at 09:15 AM IST',
          answerSnippet: 'Regular trading hours for today have concluded. The market re-opens on the next working day at 09:15 AM IST.'
        });
      }
    };

    updateMarketState();
    const interval = setInterval(updateMarketState, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter weekday holidays
  const filteredWeekdayHolidays = useMemo(() => {
    return WEEKDAY_TRADING_HOLIDAYS_2026.filter((item) => {
      if (selectedMonth !== 'ALL' && item.monthIndex.toString() !== selectedMonth) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          item.displayDate.toLowerCase().includes(q) ||
          item.day.toLowerCase().includes(q) ||
          item.segments.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedMonth, searchQuery]);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="w-full space-y-12 font-sans text-slate-100">
      
      {/* 1. DIRECT AEO / ANSWER ENGINE SNIPPET ("Is Today Stock Market Holiday?") */}
      <section aria-labelledby="live-status-heading" className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#032420] via-[#021817] to-[#011413] border border-emerald-500/30 shadow-xl space-y-4 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <span className={`w-3.5 h-3.5 rounded-full ${liveMarket.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'}`} />
            <h2 id="live-status-heading" className="text-base sm:text-lg font-bold text-white tracking-tight">
              Is the Stock Market Open Today in India? (NSE &amp; BSE Real-Time Status)
            </h2>
          </div>

          <div className="text-xs font-mono text-emerald-300 font-bold px-3 py-1 rounded-lg bg-black/40 border border-emerald-500/20">
            {liveMarket.timeStr}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Current Date (IST): <strong>{liveMarket.dateStr}</strong></span>
          </div>
          <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
            {liveMarket.answerSnippet}
          </p>
          <p className="text-xs text-slate-400">
            Official regular market hours for Equity and Derivatives on NSE &amp; BSE: <strong>09:15 AM to 03:30 PM IST (Monday to Friday)</strong>.
          </p>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY METRICS */}
      <section aria-labelledby="calendar-metrics-heading">
        <h2 id="calendar-metrics-heading" className="sr-only">2026 Trading Calendar Overview</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="p-5 rounded-2xl bg-[#03201d] border border-emerald-500/20 shadow-sm space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
              Trading Holidays
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">15 Days</div>
            <p className="text-xs text-slate-300">Official weekday exchange closures</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#03201d] border border-emerald-500/20 shadow-sm space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block">
              Weekend Festivals
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">4 Days</div>
            <p className="text-xs text-slate-300">Falling on Saturday &amp; Sunday</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#03201d] border border-emerald-500/20 shadow-sm space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold block">
              Muhurat Trading
            </span>
            <div className="text-xl sm:text-2xl font-extrabold text-white">08 Nov 2026</div>
            <p className="text-xs text-slate-300">Sunday evening auspicious session</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#03201d] border border-emerald-500/20 shadow-sm space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
              Settlement Cycle
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">T+1 Rolling</div>
            <p className="text-xs text-slate-300">Standard Indian clearing cycle</p>
          </div>

        </div>
      </section>

      {/* 3. SECTION NAV TABS & SEARCH BAR */}
      <section aria-labelledby="main-table-heading" className="space-y-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 id="main-table-heading" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              NSE &amp; BSE Stock Market Holidays Calendar 2026
            </h2>
            <p className="text-sm sm:text-base text-slate-300 pt-1">
              Official trading and clearing calendar for Indian stock exchanges across Equity, Derivatives, and SLB segments.
            </p>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-sm font-semibold text-white transition-all cursor-pointer shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save Calendar</span>
          </button>
        </div>

        {/* View Switcher: Weekday Holidays vs Weekend Festivals vs Commodity Sessions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => { setActiveView('WEEKDAYS'); trackCustomEvent('holiday_view', { view: 'weekdays' }); }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeView === 'WEEKDAYS'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            1. Official Weekday Holidays (15 Days)
          </button>

          <button
            type="button"
            onClick={() => { setActiveView('WEEKENDS'); trackCustomEvent('holiday_view', { view: 'weekends' }); }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeView === 'WEEKENDS'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            2. Weekend Holidays (Saturday &amp; Sunday)
          </button>

          <button
            type="button"
            onClick={() => { setActiveView('COMMODITY'); trackCustomEvent('holiday_view', { view: 'commodity' }); }}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
              activeView === 'COMMODITY'
                ? 'bg-emerald-400 text-black shadow-md'
                : 'bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
          >
            3. Commodity Split Sessions (MCX)
          </button>
        </div>

        {/* VIEW 1: WEEKDAY TRADING HOLIDAYS TABLE */}
        {activeView === 'WEEKDAYS' && (
          <div className="space-y-4">
            
            {/* Filter Bar: Month Pills + Search */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-1.5">
                {MONTH_FILTERS.map((m) => (
                  <button
                    key={m.value}
                    type="button"
                    onClick={() => setSelectedMonth(m.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      selectedMonth === m.value
                        ? 'bg-white text-black font-bold'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full lg:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter by holiday, day, date..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 outline-none"
                />
              </div>
            </div>

            {/* Clean Data Table */}
            <div className="rounded-2xl border border-white/15 bg-[#021817] overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/15 bg-black/60 text-xs font-mono uppercase tracking-wider text-slate-300">
                      <th scope="col" className="py-4 px-6 font-bold">Date</th>
                      <th scope="col" className="py-4 px-5 font-bold">Day</th>
                      <th scope="col" className="py-4 px-6 font-bold">Holiday / Occasion</th>
                      <th scope="col" className="py-4 px-6 font-bold">Impacted Segments</th>
                      <th scope="col" className="py-4 px-6 font-bold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-sm sm:text-base">
                    {filteredWeekdayHolidays.length > 0 ? (
                      filteredWeekdayHolidays.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.03] transition-colors">
                          <td className="py-4 px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                            {item.displayDate}
                          </td>
                          <td className="py-4 px-5 text-slate-200 whitespace-nowrap font-medium">
                            {item.day}
                          </td>
                          <td className="py-4 px-6 font-bold text-white whitespace-normal">
                            {item.name}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-300">
                            {item.segments}
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-300 leading-relaxed max-w-xs">
                            {item.description}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-10 text-center text-slate-400 text-sm">
                          No holidays match your filter. Select &quot;All Months&quot; to view the full calendar.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Total Official Trading Holidays: <strong>15 Days</strong></span>
                <span>Showing <strong>{filteredWeekdayHolidays.length}</strong> matching entries</span>
              </div>
            </div>

          </div>
        )}

        {/* VIEW 2: WEEKEND HOLIDAYS TABLE */}
        {activeView === 'WEEKENDS' && (
          <div className="rounded-2xl border border-white/15 bg-[#021817] overflow-hidden shadow-xl">
            <div className="p-5 border-b border-white/10 bg-black/40">
              <h3 className="text-lg font-bold text-white">
                Major National &amp; Festival Holidays Falling on Weekends (2026)
              </h3>
              <p className="text-xs text-slate-300 pt-0.5">
                These major holidays coincide with regular Saturday or Sunday closures.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/15 bg-black/60 text-xs font-mono uppercase tracking-wider text-slate-300">
                    <th scope="col" className="py-4 px-6 font-bold">Holiday Name</th>
                    <th scope="col" className="py-4 px-6 font-bold">Date</th>
                    <th scope="col" className="py-4 px-5 font-bold">Day</th>
                    <th scope="col" className="py-4 px-6 font-bold">Trading Status</th>
                    <th scope="col" className="py-4 px-6 font-bold">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm sm:text-base">
                  {WEEKEND_HOLIDAYS_2026.map((item) => (
                    <tr key={item.name} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-6 font-bold text-white">
                        <div className="flex items-center gap-2">
                          {item.name.includes('Muhurat') && (
                            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                          )}
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-4 px-5 text-slate-200 whitespace-nowrap font-medium">
                        {item.day}
                      </td>
                      <td className="py-4 px-6 font-semibold text-slate-200">
                        {item.status}
                      </td>
                      <td className="py-4 px-6 text-sm text-slate-300 leading-relaxed max-w-sm">
                        {item.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* VIEW 3: COMMODITY SPLIT SESSIONS (MCX) TABLE */}
        {activeView === 'COMMODITY' && (
          <div className="rounded-2xl border border-white/15 bg-[#021817] overflow-hidden shadow-xl">
            <div className="p-5 border-b border-white/10 bg-black/40">
              <h3 className="text-lg font-bold text-white">
                Multi Commodity Exchange (MCX) Trading Schedule 2026
              </h3>
              <p className="text-xs text-slate-300 pt-0.5">
                Breakdown of Morning Sessions (9:00 AM – 5:00 PM) and Evening Sessions (5:00 PM – 11:30 PM).
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/15 bg-black/60 text-xs font-mono uppercase tracking-wider text-slate-300">
                    <th scope="col" className="py-4 px-6 font-bold">Date</th>
                    <th scope="col" className="py-4 px-5 font-bold">Day</th>
                    <th scope="col" className="py-4 px-6 font-bold">Holiday / Occasion</th>
                    <th scope="col" className="py-4 px-6 font-bold">Morning (9 AM – 5 PM)</th>
                    <th scope="col" className="py-4 px-6 font-bold">Evening (5 PM – 11:30 PM)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm sm:text-base">
                  {COMMODITY_SPLIT_SESSIONS_2026.map((item) => (
                    <tr key={item.date} className="hover:bg-white/[0.03] transition-colors">
                      <td className="py-4 px-6 font-mono font-bold text-emerald-400 whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-4 px-5 text-slate-200 whitespace-nowrap font-medium">
                        {item.day}
                      </td>
                      <td className="py-4 px-6 font-bold text-white">
                        {item.holiday}
                      </td>
                      <td className="py-4 px-6 text-sm font-semibold">
                        <span className={item.morning.includes('Closed') ? 'text-rose-400' : 'text-emerald-400'}>
                          {item.morning}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm font-semibold">
                        <span className={item.evening.includes('Closed') ? 'text-rose-400' : 'text-emerald-400'}>
                          {item.evening}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </section>

      {/* 4. STANDARD TRADING HOURS (H2) */}
      <section aria-labelledby="trading-hours-heading" className="p-6 sm:p-8 rounded-2xl bg-[#021817] border border-white/15 space-y-5 text-left">
        <div className="border-b border-white/10 pb-3">
          <h2 id="trading-hours-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Standard Market Trading Timings (NSE &amp; BSE)
          </h2>
          <p className="text-sm text-slate-300 pt-0.5">
            Indian stock exchanges follow standard session hours on all regular weekdays (Monday to Friday).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold">1. Pre-Open Session</h3>
            <p className="text-lg font-extrabold text-white">09:00 AM – 09:15 AM</p>
            <p className="text-xs text-slate-300 leading-relaxed">Order entry, price discovery &amp; matching</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold">2. Normal Trading</h3>
            <p className="text-lg font-extrabold text-white">09:15 AM – 03:30 PM</p>
            <p className="text-xs text-slate-300 leading-relaxed">Continuous equity, derivative &amp; debt trading</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold">3. Closing Session</h3>
            <p className="text-lg font-extrabold text-white">03:40 PM – 04:00 PM</p>
            <p className="text-xs text-slate-300 leading-relaxed">Weighted average closing price calculation</p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <h3 className="text-xs font-mono uppercase text-emerald-400 font-bold">4. Block Deal Windows</h3>
            <p className="text-base font-extrabold text-white">Morning: 08:45 – 09:00 AM</p>
            <p className="text-xs text-slate-300 leading-relaxed">Afternoon Window: 02:05 – 02:20 PM</p>
          </div>
        </div>
      </section>

    </div>
  );
}
