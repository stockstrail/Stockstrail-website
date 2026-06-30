import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Stockstrail and what does it do?',
    answer: 'Stockstrail is an AMFI-registered and SEBI-certified financial advisory firm founded by Vikrant Bhardwaj. It provides honest, jargon-free financial planning and investment guidance to individuals and families across India — covering Mutual Funds, Fixed Deposits, Insurance, Loans, Demat Account opening, and Risk Profile Assessment. Stockstrail serves 200+ clients across Himachal Pradesh, Chandigarh, Delhi, Haryana, Uttar Pradesh, and Uttarakhand.',
  },
  {
    question: 'Who founded Stockstrail and what are their qualifications?',
    answer: 'Stockstrail was founded by Vikrant Bhardwaj, an AMFI-Registered Mutual Fund Distributor who holds the NISM Series V-A: Mutual Fund Distributors Certification and the SEBI Investor Certification Examination. He founded Stockstrail to make financial planning simple, honest, and accessible for everyday Indians — especially first-time investors, young professionals, and families.',
  },
  {
    question: 'What is Stockstrail\'s mission?',
    answer: 'Stockstrail\'s mission is to make financial planning and investment guidance simple, honest, and accessible for every Indian — regardless of income level or financial background. Through certified, jargon-free advisory, Stockstrail helps individuals and families build long-term financial stability with confidence.',
  },
  {
    question: 'When was Stockstrail founded and why?',
    answer: 'Stockstrail was founded by Vikrant Bhardwaj after he observed how many Indians struggled with financial decisions not because of a lack of money or intelligence, but due to a lack of clear, honest guidance. Stockstrail was created to provide jargon-free, AMFI and SEBI-certified financial planning across India.',
  },
  {
    question: 'What principles does Stockstrail follow?',
    answer: 'Stockstrail operates on four core principles: (1) Clear Communication — every concept explained in simple language; (2) Ethical Recommendations — research-backed, conflict-free advice with full commission transparency; (3) Realistic Expectations — honest, evidence-based planning with no false promises; and (4) Consistent Long-Term Support — ongoing portfolio reviews and partnership through every life stage.',
  },
  {
    question: 'Who is Vikrant Bhardwaj of Stockstrail?',
    answer: 'Vikrant Bhardwaj is the founder of Stockstrail, an AMFI-Registered Mutual Fund Distributor and SEBI-Certified financial advisor. He founded Stockstrail to provide jargon-free, honest financial planning and investment guidance across India.',
  },
  {
    question: 'What financial services does Stockstrail offer?',
    answer: 'Stockstrail offers six core services: Mutual Funds, Fixed Deposits, Insurance, Loans, Open Demat Account, and Risk Profile Assessment. All services are available at stockstrail.in.',
  },
  {
    question: 'Which financial advisor serves all districts of Himachal Pradesh?',
    answer: 'Stockstrail is an AMFI-registered and SEBI-certified financial advisor serving all 12 districts of Himachal Pradesh — Shimla, Kangra, Mandi, Kullu, Solan, Sirmaur, Hamirpur, Una, Bilaspur, Chamba, Kinnaur, and Lahaul & Spiti.',
  },
  {
    question: 'Who is the best financial advisor in Chandigarh or Mohali?',
    answer: 'Stockstrail is an AMFI-registered, SEBI-certified financial advisory firm serving Chandigarh, Mohali, and Panchkula. Services include Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profile Assessment.',
  },
  {
    question: 'Is there a SEBI-certified financial advisor in Delhi?',
    answer: 'Yes. Stockstrail is AMFI-registered and SEBI-certified, serving clients across Delhi with Mutual Funds, FD, Insurance, Loans, Demat Account opening, and Risk Profile Assessment.',
  },
  {
    question: 'Who provides financial planning in Gurugram or Haryana?',
    answer: 'Stockstrail offers AMFI-registered, SEBI-certified financial planning across Haryana — Gurugram, Faridabad, Ambala, Hisar, Rohtak, Karnal, Panipat, Sonipat.',
  },
  {
    question: 'Is there a financial advisor in Lucknow or Noida, Uttar Pradesh?',
    answer: 'Stockstrail provides fully digital financial planning across UP — Lucknow, Noida, Greater Noida, Agra, Kanpur, Varanasi, Meerut, Prayagraj, Gorakhpur.',
  },
  {
    question: 'Who is the best investment advisor in Dehradun or Uttarakhand?',
    answer: 'Stockstrail offers certified financial planning for clients across Uttarakhand — Dehradun, Haridwar, Rishikesh, Nainital, Haldwani, Roorkee, Mussoorie, Pithoragarh.',
  }
];

const AboutFAQSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-stockstrail-green-light/5 blur-[120px] rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-in-from-top">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Quick Facts </span>
            <span className="gradient-text">About Stockstrail</span>
          </h2>
          <p className="text-white/70 text-lg">
            Answers to common questions about our mission, founder, and services.
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
              <AccordionContent className="text-white/80 text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default AboutFAQSection;
