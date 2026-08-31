import React from 'react';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import RelatedCalculatorsNav from './RelatedCalculatorsNav';

export default function CalculatorsPageSEO() {
  const faqs = [
    {
      question: "Are Stockstrail financial calculators completely free to use?",
      answer: "Yes, all Stockstrail calculators (SIP, Lumpsum, FD, RD, Loan EMI, and Income Tax) are 100% free and require no login or personal documentation."
    },
    {
      question: "How accurate are the compounding and tax projections?",
      answer: "All tools strictly follow standard regulatory and mathematical formulas (including Indian income tax slab revisions and quarterly bank FD compounding standards)."
    },
    {
      question: "Can I receive direct guidance on investing after calculating my goals?",
      answer: "Yes, you can schedule a free 1-on-1 strategy call with AMFI-registered founder Vikrant Bhardwaj (ARN-284122) for personalized portfolio guidance."
    },
    {
      question: "Can I check my Risk Profile before investing?",
      answer: "Yes, you can take our free 2-minute SEBI-aligned Risk Profile questionnaire to determine your ideal asset allocation."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 text-white/80 space-y-8 leading-relaxed">
      <ServiceFAQSection faqs={faqs} />

      <RelatedCalculatorsNav />

      <div className="bg-white/5 border border-white/10 p-4 md:p-5 rounded-xl text-xs text-white/60">
        <strong className="text-white block mb-1">Regulatory & Disclaimer Information:</strong>
        Mutual fund investments and financial instruments are subject to market risks. Please read all scheme-related documents carefully before investing. Historical performance and calculator projections are for illustrative purposes only and do not guarantee future returns.
      </div>
    </div>
  );
}
