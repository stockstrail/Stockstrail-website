import React from 'react';
import Link from 'next/link';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

export default function CalculatorsPageSEO() {
  const faqs = [
    {
      question: "Is the SIP Calculator free to use?",
      answer: "Yes, our SIP Calculator is completely free for planning Mutual Funds investments."
    },
    {
      question: "Can I check my Risk Profile before investing?",
      answer: "Yes, we offer a simple Risk Profile check to help you understand your investment comfort level."
    },
    {
      question: "How accurate is the FD Calculator?",
      answer: "It uses standard compound interest formulas for a close estimate of your maturity amount based on your rate and tenure."
    },
    {
      question: "Can I open a Demat Account through Stockstrail?",
      answer: "Yes, you can open a Demat Account online with our simple, guided steps."
    },
    {
      question: "Does the EMI Calculator support all loan types?",
      answer: "Yes, it helps calculate monthly instalments for home, personal, vehicle, and business loans."
    },
    {
      question: "Can I compare Insurance plans?",
      answer: "Yes, you can explore and compare Insurance options alongside your other financial planning."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 text-white/80 space-y-6 leading-relaxed">

      <ServiceFAQSection faqs={faqs} />

      <div className="bg-white/5 border border-white/10 p-4 md:p-6 rounded-xl mt-12 mb-6">
        <h4 className="text-lg font-semibold text-white/90 mb-2">Disclaimer</h4>
        <p className="text-sm text-white/70">
          All calculator results are estimates based on standard financial formulas. They are for planning purposes only and do not constitute financial or legal advice. Products are subject to market risks; please read all related documents carefully before investing.
        </p>
      </div>
    </div>
  );
}
