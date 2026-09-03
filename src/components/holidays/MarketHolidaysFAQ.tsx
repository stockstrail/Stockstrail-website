'use client';

import React from 'react';
import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HOLIDAY_FAQS_DATA } from '@/lib/holidays/data';

export default function MarketHolidaysFAQ() {
  return (
    <section aria-labelledby="faq-section-heading" className="p-7 sm:p-9 rounded-2xl bg-[#021817] border border-white/15 space-y-6 text-left shadow-xl">
      <div className="border-b border-white/10 pb-4">
        <h2 id="faq-section-heading" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Frequently Asked Questions (NSE &amp; BSE Holidays)
        </h2>
        <p className="text-sm text-slate-300 pt-1">
          Essential answers covering Indian exchange schedules, settlement cycles, September dates, and Muhurat trading.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-3">
        {HOLIDAY_FAQS_DATA.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border border-white/10 rounded-xl px-5 py-1 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
          >
            <AccordionTrigger className="text-white hover:text-emerald-400 font-bold text-sm sm:text-base text-left hover:no-underline py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-slate-200 leading-relaxed pb-4 pt-1 border-t border-white/5 font-normal">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
