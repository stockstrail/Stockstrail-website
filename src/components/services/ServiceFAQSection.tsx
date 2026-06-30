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
};

const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({ 
  faqs, 
  title = "FAQ",
  subtitle = "Everything you need to know."
}) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative mt-12 border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-stockstrail-green-light/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4 text-white">
            {title}
          </h2>
          <p className="text-white/70 text-lg">
            {subtitle}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-stockstrail-green-light/50 transition-colors"
            >
              <AccordionTrigger className="text-left text-white text-lg font-work-sans py-4 hover:no-underline hover:text-stockstrail-green-light">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-base leading-relaxed pb-6 whitespace-pre-line">
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
