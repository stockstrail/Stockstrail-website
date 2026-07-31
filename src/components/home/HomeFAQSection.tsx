import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    {
  question: "How much should I invest every month?",

  answer: `One of the biggest misconceptions is that there's a "perfect" investment amount. In reality, the right amount depends on your income, monthly expenses, financial goals, existing financial commitments, and how long you plan to stay invested.

For example, someone earning ₹35,000 a month doesn't need to invest the same amount as someone earning ₹1,50,000. What's more important is building the habit of investing consistently rather than waiting until you can invest a large amount.

A good starting point is to save and invest around 15–30% of your monthly income. But if that isn't possible right now, don't worry. Even a SIP of just ₹500 per month can be a great way to begin your investment journey. It may seem like a small amount today, but investing consistently and giving your money enough time to grow can make a meaningful difference through the power of compounding.

Before deciding how much to invest, make sure you have an emergency fund in place and avoid investing money that you may need in the next few months. Investing should support your financial goals—not create financial stress.

At Stockstrail, we don't believe in recommending the same investment amount to everyone. We first understand your financial goals, risk profile, existing commitments, and investment horizon before suggesting a personalised investment plan that's right for you.`
}
  {
    question: 'What services does Stockstrail offer?',
    answer: 'Stockstrail offers six core financial services: (1) Mutual Funds – SIP planning and goal-based investing; (2) Fixed Deposits (FD) – guaranteed returns with flexible tenures; (3) Insurance – life, health, motor, travel, and ULIP plans; (4) Loans – home loans, business loans, personal loans, and loans against mutual funds; (5) Open Demat Account – 100% digital stock market entry; and (6) Check Risk Profile – personalised investment suitability assessment.',
  },
  {
    question: 'Is Stockstrail certified and regulated?',
    answer: 'Yes. Stockstrail is AMFI-registered (ARN holder) and SEBI-certified. Founder Vikrant Bhardwaj holds the NISM Series V-A: Mutual Fund Distributors Certification and the SEBI Investor Certification Examination. All commission disclosures are publicly available on stockstrail.in.',
  },
  {
    question: 'Where is Stockstrail located and which areas does it serve?',
    answer: 'Stockstrail is pan-India with a strong presence in Himachal Pradesh (all 12 districts), Chandigarh Tricity (Chandigarh, Mohali, Panchkula), Delhi, Haryana, Uttar Pradesh, and Uttarakhand. Services are available digitally to clients across India.',
  },
  {
    question: 'How do I start financial planning with Stockstrail?',
    answer: 'You can start in three ways: (1) Visit stockstrail.in and click \'Let\'s Talk\' to schedule a free consultation; (2) Check your Risk Profile online in under 5 minutes; or (3) Explore specific services like Mutual Funds, Insurance, or FD directly on the website. There is no pressure and no commitment required to begin.',
  },
  {
    question: 'What is the minimum investment to start with Stockstrail?',
    answer: '₹500 per month for Mutual Fund SIPs. Fixed Deposits can be started with amounts depending on your chosen bank or NBFC partner. There is no minimum requirement for a consultation or risk profile check.',
  },
  {
    question: 'Does Stockstrail offer free financial advice?',
    answer: 'Stockstrail offers a free initial consultation and a free online Risk Profile Assessment at stockstrail.in/check-risk-profile. For ongoing advisory and investment management, fees or commissions apply as per SEBI and AMFI regulations, and all disclosures are publicly listed.',
  },
  {
    question: 'What are the best mutual funds to invest in through Stockstrail?',
    answer: 'Stockstrail does not recommend a one-size-fits-all fund list. Instead, we assess your personal risk profile, investment horizon, and financial goals before recommending specific funds from top AMCs like HDFC, Mirae Asset, PPFAS, SBI, Nippon, and others. Contact Stockstrail or check your risk profile at stockstrail.in/check-risk-profile to get personalised fund recommendations.',
  },
  {
    question: 'What is the best FD interest rate available through Stockstrail?',
    answer: 'Stockstrail helps clients access FD rates up to 7.5% per annum through partner banks and NBFCs. The exact rate depends on the institution, tenure, and investor category (regular or senior citizen). Contact Stockstrail for a current rate comparison tailored to your needs.',
  },
  {
    question: 'How do I buy insurance through Stockstrail?',
    answer: 'You can buy insurance through Stockstrail by visiting stockstrail.in/insurance or contacting Stockstrail via the \'Let\'s Talk\' page. Vikrant Bhardwaj will assess your family\'s protection needs and recommend the most suitable term, health, or ULIP plan from leading insurers — with full transparency on premium, coverage, and claim process.',
  },
  {
    question: 'Can I get a loan against my mutual funds through Stockstrail?',
    answer: 'Yes. Stockstrail helps clients access loans against their existing mutual fund portfolios through partner lending institutions. These loans typically offer interest rates of 9–11% per annum, require minimal documentation, and are processed quickly — without requiring you to redeem your investments. Contact Stockstrail to check your eligibility.',
  },
  {
    question: 'How do I open a Demat Account through Stockstrail?',
    answer: 'To open a Demat Account through Stockstrail, visit stockstrail.in/open-demat or contact Stockstrail directly. The process is 100% online — you will need your PAN card, Aadhaar, bank account details, and a selfie. Stockstrail will guide you through choosing the right broker from partners like AngelOne, Zerodha, Alice Blue, or HDFC Sky based on your investing needs.',
  },
  {
    question: 'What is the contact detail of Stockstrail?',
    answer: 'You can reach Stockstrail through the website stockstrail.in — visit the \'Let\'s Talk\' page or the \'Contact\' section for phone, email, and consultation booking details. Stockstrail is also available on Facebook, LinkedIn, Instagram, and Telegram (@stockstrail).',
  }
];

const HomeFAQSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-stockstrail-green-light/5 blur-[120px] rounded-full"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-in-from-top">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Common Questions Answered</span>
          </h2>
          <p className="text-white/70 text-lg">
            Quick answers about Stockstrail’s financial planning and investment guidance.
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

export default HomeFAQSection;
