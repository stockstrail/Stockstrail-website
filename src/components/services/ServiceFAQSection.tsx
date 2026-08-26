import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type FAQ = {
  question: string;
  answer: string;
};

type ServiceFAQSectionProps = {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
  titleStyle?: React.CSSProperties;
  titleClassName?: string;
};

import JsonLd from '@/components/common/JsonLd';

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({ 
  faqs, 
  title = "FAQ",
  subtitle = "Everything you need to know.",
  titleStyle,
  titleClassName
}) => {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative mt-10 border-t border-white/10">
      <JsonLd data={faqSchema} />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-stockstrail-green-light/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
            <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
            <span>Got Questions?</span>
          </div>

          <h2
            style={{ fontFamily: 'var(--font-product-sans)', ...titleStyle }}
            className={titleClassName || "text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"}
          >
            {title}
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#021716]/85 border border-white/12 rounded-2xl px-6 py-1 data-[state=open]:border-stockstrail-green-light/70 data-[state=open]:shadow-[0_10px_30px_rgba(0,255,151,0.15)] shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-xl transition-all"
            >
              <AccordionTrigger
                className="text-left text-white text-base sm:text-lg font-bold py-4 hover:no-underline hover:text-stockstrail-green-light transition-colors"
                style={{ fontFamily: 'var(--font-product-sans)' }}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-sm sm:text-base leading-relaxed pb-6 whitespace-pre-line font-normal">
                {faq.answer.replace(/^✅\s*/, '')}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default ServiceFAQSection;
