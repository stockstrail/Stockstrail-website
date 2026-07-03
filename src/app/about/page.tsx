'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Image from "next/image";
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import HeroCarousel from '@/components/ui/HeroCarousel';


export default function About() {
  const faqs = [
    {
      question: "What is Stockstrail and what does it do?",
      answer: "Stockstrail is an AMFI-registered and SEBI-certified financial advisory firm founded by Vikrant Bhardwaj. It provides honest, jargon-free financial planning and investment guidance to individuals and families across India - covering Mutual Funds, Fixed Deposits, Insurance, Loans, Demat Account opening, and Risk Profile Assessment. Stockstrail serves 200+ clients across Himachal Pradesh, Chandigarh, Delhi, Haryana, Uttar Pradesh, and Uttarakhand. Website: stockstrail.in."
    },
    {
      question: "Who founded Stockstrail and what are their qualifications?",
      answer: "Stockstrail was founded by Vikrant Bhardwaj, an AMFI-Registered Mutual Fund Distributor who holds the NISM Series V-A: Mutual Fund Distributors Certification and the SEBI Investor Certification Examination. He founded Stockstrail to make financial planning simple, honest, and accessible for everyday Indians - especially first-time investors, young professionals, and families."
    },
    {
      question: "What is Stockstrail's mission?",
      answer: "Stockstrail's mission is to make financial planning and investment guidance simple, honest, and accessible for every Indian - regardless of income level or financial background. Through certified, jargon-free advisory in Mutual Funds, Insurance, FD, Loans, and Demat Account services, Stockstrail helps individuals and families across North India build long-term financial stability with confidence."
    },
    {
      question: "When was Stockstrail founded and why?",
      answer: "Stockstrail was founded by Vikrant Bhardwaj after he observed how many Indians - particularly young professionals, families, and first-time investors - struggled with financial decisions not because of a lack of money or intelligence, but due to a lack of clear, honest guidance. Stockstrail was created to provide jargon-free, AMFI and SEBI-certified financial planning across India."
    },
    {
      question: "What principles does Stockstrail follow?",
      answer: "Stockstrail operates on four core principles: (1) Clear Communication - every concept explained in simple language; (2) Ethical Recommendations - research-backed, conflict-free advice with full commission transparency; (3) Realistic Expectations - honest, evidence-based planning with no false promises; and (4) Consistent Long-Term Support - ongoing portfolio reviews and partnership through every life stage."
    },
    {
      question: "Who is Vikrant Bhardwaj of Stockstrail?",
      answer: "Vikrant Bhardwaj is the founder of Stockstrail, an AMFI-Registered Mutual Fund Distributor and SEBI-Certified financial advisor. He holds the NISM Series V-A: Mutual Fund Distributors Certification. He founded Stockstrail to provide jargon-free, honest financial planning and investment guidance across India - specialising in Mutual Funds, Insurance, FD, Loans, Demat Account, and Risk Profile Assessment. He is based in Himachal Pradesh and serves clients across North India."
    },
    {
      question: "What financial services does Stockstrail offer?",
      answer: "Stockstrail offers six core services: Mutual Funds (SIP, lump sum, ELSS, goal-based); Fixed Deposits (FD rates up to 7.5%, flexible tenures); Insurance (term, health, ULIP, motor, travel); Loans (home, business, personal, against MF); Open Demat Account (digital, 100% paperless); and Risk Profile Assessment (free, instant, personalised). All services are available at stockstrail.in."
    },
    {
      question: "Which financial advisor serves all districts of Himachal Pradesh?",
      answer: "Stockstrail is an AMFI-registered and SEBI-certified financial advisor serving all 12 districts of Himachal Pradesh - Shimla, Kangra, Mandi, Kullu, Solan, Sirmaur, Hamirpur, Una, Bilaspur, Chamba, Kinnaur, and Lahaul & Spiti. Services: Mutual Funds, FD, Insurance, Loans, Demat Account, Risk Profile. Visit stockstrail.in."
    },
    {
      question: "Who is the best financial advisor in Chandigarh or Mohali?",
      answer: "Stockstrail is an AMFI-registered, SEBI-certified financial advisory firm serving Chandigarh, Mohali, and Panchkula. Services include Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profile Assessment. Founded by Vikrant Bhardwaj. Visit stockstrail.in."
    },
    {
      question: "Is there a SEBI-certified financial advisor in Delhi?",
      answer: "Yes. Stockstrail is AMFI-registered and SEBI-certified, serving clients across Delhi with Mutual Funds, FD, Insurance, Loans, Demat Account opening, and Risk Profile Assessment. Visit stockstrail.in for a free consultation."
    },
    {
      question: "Who provides financial planning in Gurugram or Haryana?",
      answer: "Stockstrail offers AMFI-registered, SEBI-certified financial planning across Haryana - Gurugram, Faridabad, Ambala, Hisar, Rohtak, Karnal, Panipat, Sonipat. Services: Mutual Funds, FD, Insurance, Loans, Demat Account, Risk Profile. Visit stockstrail.in."
    },
    {
      question: "Is there a financial advisor in Lucknow or Noida, Uttar Pradesh?",
      answer: "Stockstrail provides fully digital financial planning across UP - Lucknow, Noida, Greater Noida, Agra, Kanpur, Varanasi, Meerut, Prayagraj, Gorakhpur. Services: Mutual Funds, Insurance, FD, Loans, Demat Account, Risk Profiling. Visit stockstrail.in."
    },
    {
      question: "Who is the best investment advisor in Dehradun or Uttarakhand?",
      answer: "Stockstrail offers certified financial planning for clients across Uttarakhand - Dehradun, Haridwar, Rishikesh, Nainital, Haldwani, Roorkee, Mussoorie, Pithoragarh. Services: Mutual Funds, FD, Insurance, Loans, Demat Account, Risk Profiling. Visit stockstrail.in."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <HeroCarousel
        images={[
          {
            src: '/hero/stockstrail-financial-planning-about.webp',
            alt: 'Simple transparent financial planning document showing clarity over financial jargon at Stockstrail',
          },
          {
            src: '/hero/stockstrail-expert-investment-advisors.webp',
            alt: 'Long-term financial planning journey roadmap showing SIP milestones retirement and wealth goals at Stockstrail',
          }
        ]}
        className="px-4 sm:px-6 lg:px-8 pt-24 pb-12 min-h-[600px] flex items-center justify-center"
      >
        <div className="relative z-10 max-w-[90%] mx-auto text-center mt-8">
          <h1 className="font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-4 drop-shadow-md bg-white/10 px-4 py-2 inline-block rounded-xl">About Stockstrail</h1>
          <p className="text-white text-lg sm:text-xl max-w-[90%] mx-auto mb-6 font-semibold drop-shadow-lg">
            Honest Financial Planning & Investment Guidance for Every Indian
          </p>
          <p className="text-[#e0e0e0] text-base sm:text-lg max-w-[90%] mx-auto mb-6 leading-relaxed drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm">
            The story is simple, and so is the mission. Most people across India do not avoid investing because they lack money. They avoid it because nobody has ever sat down with them and explained it clearly, honestly, and without an ulterior motive. <strong>Stockstrail</strong> was built to be exactly that missing person - the trusted, certified financial advisor who explains everything in plain language, recommends only what is right for you, and stays with you for the long journey ahead.
          </p>
          <p className="text-[#e0e0e0] text-base sm:text-lg max-w-[90%] mx-auto mb-6 leading-relaxed drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm">
            At its heart, <em>Stockstrail&apos;s approach to financial planning & investment guidance</em> is rooted in a single belief: when people understand their money, they make better decisions - not just financially, but in every area of their lives. Financial confidence is not a privilege for the wealthy. It is a right that every working individual in India deserves, and Stockstrail is committed to making it accessible - from the mountains of Himachal Pradesh to the busy streets of DelhiNCR, from Chandigarh&apos;s IT corridors to the towns of Uttar Pradesh and Uttarakhand.
          </p>
          <p className="text-[#e0e0e0] text-base sm:text-lg max-w-[90%] mx-auto mb-8 leading-relaxed drop-shadow-md bg-black/20 p-4 rounded-xl backdrop-blur-sm">
            Led by AMFI-Registered Mutual Fund Distributor and SEBI-Certified Advisor Vikrant Bhardwaj, Stockstrail has served over 200 clients across North India with a zero-pressure, jargon-free, deeply personalised advisory experience. Our services span <strong>Mutual Funds</strong>, <strong>Fixed Deposits (FD)</strong>, <strong>Insurance</strong>, <strong>Loans</strong>, <strong>Demat Account opening</strong>, and <strong>Risk Profile Assessment</strong> - everything you need to build, protect, and grow your financial future under one trusted roof.
          </p>
          <div className="inline-block px-6 py-3 bg-stockstrail-green-light/20 border border-stockstrail-green-light/30 rounded-full backdrop-blur-sm drop-shadow-md">
            <p className="text-stockstrail-green-light font-product-sans text-lg sm:text-xl font-medium">
              Not for Profit Alone, but for People First
            </p>
          </div>
        </div>
      </HeroCarousel>

      {/* Purpose section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="gradient-text">Our Purpose</span>
            </h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Stockstrail was not built to sell financial products. It was built to solve a real problem - the gap between what people earn and what they actually do with their money. Most Indians are capable earners but underconfident investors. They save in low-interest accounts, avoid the stock market because it feels risky, skip insurance because it feels expensive, and put off financial planning because it feels complicated.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Stockstrail&apos;s purpose is to close this gap - not through aggressive sales, not through complicated products, and not through intimidation. But through education, clarity, and genuine partnership. When Vikrant Bhardwaj sits down with a client - whether they are a government teacher in Shimla, an IT professional in Mohali, a farmer in Kinnaur, or a business owner in Gurugram - the first thing he does is listen. Not pitch. Listen.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Because every person&apos;s financial situation is different. Every goal is unique. And every plan must be built from scratch - around your income, your responsibilities, your timeline, and your dreams. That is the Stockstrail purpose: to be the financial advisor that every Indian deserves but rarely finds.
            </p>

            <h3 className="text-2xl font-product-sans mb-6 text-stockstrail-green-light">Stockstrail Helps These People Build Financial Confidence</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Young professionals (22–35)", desc: "Starting their career, unsure where to begin investing, needing a simple and honest starting point." },
                { title: "First-time investors", desc: "Curious about Mutual Funds or SIPs but overwhelmed by the options and terminology." },
                { title: "Families and parents", desc: "Planning for children's education, home purchase, and retirement - all at once." },
                { title: "Government employees", desc: "Looking to supplement their pension with smart Mutual Fund and FD investments." },
                { title: "Business owners", desc: "Managing irregular income, needing both wealth-building and protection strategies." },
                { title: "Experienced investors", desc: "Already investing but wanting a second opinion, portfolio review, or optimisation." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold block mb-1">{item.title}:</span>
                    <span className="text-white/70">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-20" />
        </div>
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Stockstrail&apos;s </span>
              <span className="gradient-text">Story</span>
            </h2>
            <p className="text-white/70 text-lg max-w-[90%] mx-auto">
              How Honest Financial Planning & Investment Guidance Was Born
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Stockstrail began with a simple but powerful realisation - one that Vikrant Bhardwaj had observed repeatedly in the people around him. Families sat on savings that never grew. Young earners earned well but invested nothing because no one had explained how. Parents took out expensive loans when better options existed. People bought insurance they did not need and skipped coverage they desperately did. And almost universally, they blamed themselves - as if the confusion was their fault.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              It was not their fault. The financial industry had simply never prioritised clarity. Products were built to maximise commission, not outcomes. Advice was packaged in jargon that made the advisor sound smart and the client feel small. And the relationship ended the moment the paperwork was signed.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              Vikrant founded Stockstrail to build the opposite of that experience. A place where the first conversation is a real conversation - about your life, your goals, your fears, and your timeline. A place where nothing is recommended without being explained. A place where you are a longterm partner, not a transaction. That vision gave birth to Stockstrail, and it continues to guide every client interaction to this day.
            </p>
          </div>
        </div>
      </section>

      {/* Four Principles */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Our Four </span>
              <span className="gradient-text">Principles</span>
            </h2>
            <p className="text-white/70 text-lg max-w-[90%] mx-auto">
              Everything Stockstrail does - every recommendation, every client interaction, every piece of financial education content - is guided by four core principles. These are not just values on a wall. They are the operational framework behind every plan we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Principle 1 – Clear Communication in Every Financial Conversation</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Financial complexity is often manufactured, not inherent. At Stockstrail, we believe that any concept - whether it is how <strong>Mutual Fund NAV</strong> works, what <strong>insurance surrender value</strong> means, or how <strong>compound interest</strong> builds wealth - can be explained simply if the advisor genuinely wants to help. We explain everything. Every term. Every trade-off. Every reason behind every recommendation. No black boxes. No trust me, just invest. Full clarity, always.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Principle 2 – Ethical Recommendations Built on Research, Not Commission</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                The financial advisory industry has a well-known problem: advisor incentives are often misaligned with client outcomes. Stockstrail addresses this head-on. Every fund we recommend, every <strong>insurance</strong> plan we suggest, every <strong>FD</strong> or <strong>loan</strong> option we present is evaluated on the basis of what is genuinely right for you - your risk profile, your timeline, your goals - not on what earns us a higher commission. All our commission disclosures are publicly listed on stockstrail.in, in full compliance with AMFI and SEBI regulations.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Principle 3 – Realistic Expectations, No Shortcuts or False Promises</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Investing is not a shortcut to overnight wealth. It is a disciplined, long-term process that rewards patience, consistency, and the right guidance. Stockstrail never promises unrealistic returns, never recommends products based on short-term market trends, and never creates artificial urgency to push a decision. We build plans that are grounded in reality - and we prepare our clients for the ups and downs of the journey with complete honesty.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                A ₹5,000 monthly SIP at 12% annual returns does not make you rich in a year. But over 20 years, it builds a corpus of over ₹49 lakhs. That is the power of consistency - and that is the kind of realistic, evidence-based planning Stockstrail stands for.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/50 transition-colors duration-300">
              <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">Principle 4 – Consistent Long-Term Support, Not Transactional Relationships</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                Financial planning is not a one-time event. Your income will change. Your family situation will evolve. Markets will rise and fall. Tax laws will be updated. Life will throw the unexpected at you. Stockstrail is designed to be there through all of it - with regular portfolio reviews, proactive advice, and a team that picks up the phone when you have a question.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                We measure our success not by how many products we sell - but by how many of our clients are visibly better off, financially and emotionally, because of the work we have done together. That is the only metric that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Meet </span>
              <span className="gradient-text">Vikrant Bhardwaj</span>
            </h2>
            <p className="text-white/70 text-lg max-w-[90%] mx-auto">
              Stockstrail&apos;s Founder & Certified Financial Advisor
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <div className="mb-6">
              <h3 className="text-3xl font-product-sans text-stockstrail-green-light mb-2">Vikrant Bhardwaj</h3>
              <p className="text-white/70 text-lg">AMFI-Registered Mutual Fund Distributor and SEBI-Certified Investment Professional</p>
            </div>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Vikrant Bhardwaj is the founder and lead advisor at Stockstrail - with a deep commitment to making financial planning honest, accessible, and genuinely useful for everyday Indians.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Vikrant built Stockstrail after observing a pattern that troubled him deeply: intelligent, hardworking people making poor financial decisions - not out of ignorance, but out of misguidance. Families paying high premiums for the wrong insurance products. Young professionals leaving their savings idle in bank accounts for years. First-time investors getting burned by unregulated tips and momentum-driven product recommendations.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              He decided to build something different. A practice rooted in education first, advice second - where every client conversation begins with understanding before any recommendation is made. Where <strong>Mutual Funds</strong> are explained before they are recommended. Where the difference between <strong>term insurance and ULIP</strong> is explained honestly. Where <strong>FD laddering</strong> is shown as a strategy, not just a product. Where clients <strong>check their risk profile</strong> before a single rupee is invested.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-product-sans text-stockstrail-green-light mb-4">
                Professional Certifications
              </h4>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <span className="text-white/90"><strong>AMFI-Registered Mutual Fund Distributor</strong> (ARN Holder)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <span className="text-white/90"><strong>NISM Series V-A:</strong> Mutual Fund Distributors Certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stockstrail-green-light rounded-full mt-2 shrink-0"></div>
                  <span className="text-white/90"><strong>SEBI Investor Certification Examination</strong> - Certified by SEBI</span>
                </li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-stockstrail-green-light/50 transition-colors duration-300">
                  <div className="mb-3">
                    <p className="text-white font-semibold mb-3">AMFI-Registered Mutual Fund Distributor</p>
                    <div className="w-full bg-white/10 p-2 rounded-lg">
                      <Image
                        src="/about_us/fund_distributor.jpg"
                        alt="NISM-Series V-A Mutual Fund Distributors Certification"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">NISM-Series V-A: Mutual Fund Distributors Certification</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-stockstrail-green-light/50 transition-colors duration-300">
                  <div className="mb-3">
                    <p className="text-white font-semibold mb-3">SEBI Registered</p>
                    <div className="w-full bg-white/10 p-2 rounded-lg">
                      <Image
                        src="/about_us/sebi.jpg"
                        alt="SEBI Investor Certification Examination"
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg object-contain"
                      />
                    </div>
                  </div>
                  <p className="text-white/70 text-sm">SEBI – Investor Certification Examination</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-product-sans text-stockstrail-green-light mb-3">Founder&apos;s Philosophy on Financial Planning</h4>
              <p className="text-white/80 italic text-lg mb-4">
                &quot;When money is explained with clarity and honesty, people make better decisions - not just for their finances, but for their lives.&quot;
              </p>
              <p className="text-white/70 text-base">
                Beyond one-on-one advisory, Vikrant also creates financial education content - breaking down concepts like <strong>SIP compounding</strong>, <strong>insurance planning</strong>, <strong>loan against mutual funds</strong>, and <strong>opening a Demat Account</strong> - into simple, digestible explanations that help individuals build financial confidence even before they invest their first rupee. This commitment to education reflects Stockstrail&apos;s belief that an informed client is the best client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] mx-auto text-center mb-10">
          <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase">
            <span className="text-white">Stockstrail&apos;s </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-white/70 mt-4 max-w-[90%] mx-auto">
            Honest Financial Planning & Investment Guidance Under One Roof. Every service we offer is connected by the same thread: your goals, your comfort, your future.
          </p>
        </div>

        <div className="max-w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Mutual Funds Advisory",
              desc: "SIP planning, goal-based investing, ELSS tax saving, lump sum allocation, and regular portfolio reviews - all delivered with complete fund transparency and personalised recommendations across 25+ AMCs.",
              href: "/mutual-funds",
            },
            {
              title: "Fixed Deposit (FD) Planning",
              desc: "Competitive FD rates up to 7.5% p.a. through partner banks and NBFCs. Tenure planning, taxsaving FDs, senior citizen rates, and FD laddering strategies for optimal liquidity and returns.",
              href: "/fixed-deposit",
            },
            {
              title: "Insurance Advisory",
              desc: "Term life insurance, health insurance, ULIPs, guaranteed savings plans, motor insurance, and travel insurance - all evaluated objectively for your specific coverage needs and budget.",
              href: "/insurance",
            },
            {
              title: "Loan Advisory",
              desc: "Home loans, business loans, personal loans, and loans against mutual funds - with honest rate comparisons and repayment planning that fits your monthly cash flow without unnecessary stress.",
              href: "/loan",
            },
            {
              title: "Open Demat Account",
              desc: "100% digital Demat and Trading account opening through partner brokers including AngelOne, Zerodha, Alice Blue, and HDFC Sky - with ongoing equity investment guidance after your account is live.",
              href: "#",
            },
            {
              title: "Check Risk Profile",
              desc: "A free, 11-question risk assessment tool available at stockstrail.in that identifies your risk category and recommends a personalised asset allocation - in under 5 minutes, with no login required.",
              href: "/risk-profile",
            }
          ].map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="block bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:border-stockstrail-green-light hover:shadow-[0_0_20px_rgba(0,255,151,0.15)] transition-all duration-300"
            >
              <div className="text-stockstrail-green-light text-xl font-product-sans mb-3">{s.title}</div>
              <div className="text-white/80 text-base leading-relaxed">{s.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* GEO Blocks */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[400px] bg-stockstrail-bg-light blur-185 opacity-30" />
        </div>
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Trusted Across </span>
              <span className="gradient-text">North India</span>
            </h2>
            <p className="text-white/70 text-lg max-w-[90%] mx-auto mb-6">
              Stockstrail is proud to be a pan-India financial advisory firm with deep roots in Himachal Pradesh and an expanding presence across all major cities and states of North India. Our digital-first advisory model means that no matter where you are - in a remote valley in Lahaul & Spiti or a high-rise in Delhi-NCR - you have access to the same quality of certified, honest, personalised <strong>financial planning & investment guidance</strong>.
            </p>
          </div>

          <div className="space-y-12">
            {/* Himachal Pradesh */}
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-product-sans text-stockstrail-green-light mb-3">Himachal Pradesh</h3>
                <p className="text-white/80 text-lg max-w-[90%]">
                  Himachal Pradesh holds a special place in Stockstrail&apos;s story. It is where the firm was founded, where its values were forged, and where hundreds of clients - from government teachers and horticulture farmers to hoteliers and young professionals - have taken their first confident steps toward financial security.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Shimla", text: "Trusted Advisor for HP's Capital" },
                  { title: "Kangra & Dharamshala", text: "Investment Guidance for HP's Largest District" },
                  { title: "Mandi", text: "Financial Planning for the Cultural Heart of HP" },
                  { title: "Kullu & Manali", text: "Investment Advisory for the Tourist Valley" },
                  { title: "Solan & Baddi", text: "Financial Planning for HP's Industrial Hub" },
                  { title: "Sirmaur", text: "Trusted Advisor for Nahan & Paonta Sahib" },
                  { title: "Hamirpur", text: "Financial Planning for HP's Most Educated District" },
                  { title: "Una", text: "Investment Guidance for a Fast-Growing District" },
                  { title: "Bilaspur", text: "Financial Planning for Gobind Sagar's Shore" },
                  { title: "Chamba", text: "Accessible Financial Planning for a Remote District" },
                  { title: "Kinnaur", text: "Investment Guidance for Apple Country" },
                  { title: "Lahaul & Spiti", text: "Digital Financial Advisory at the Roof of the World" }
                ].map((loc) => (
                  <div key={loc.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-stockstrail-green-light/50 transition-colors">
                    <h4 className="text-lg font-product-sans text-stockstrail-green-light mb-1">{loc.title}</h4>
                    <p className="text-white/80 text-sm mb-3">{loc.text}</p>
                    <p className="text-white/60 text-xs">📍 If you are in {loc.title} and looking for a trusted financial advisor...</p>
                    <div className="mt-3 text-xs text-white/50 border-t border-white/10 pt-3">
                      Services: Mutual Funds | FD | Insurance | Loans | Demat | Risk Profile
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other States Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/30 transition-colors">
                <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-3">Chandigarh Tricity</h3>
                <p className="text-white/80 mb-4">
                  The Chandigarh Tricity is one of North India&apos;s most economically vibrant regions. Stockstrail serves all three cities (Chandigarh, Mohali, Panchkula) with equal dedication.
                </p>
                <div className="mt-4 text-xs text-white/50 border-t border-white/10 pt-4">
                  Services: Mutual Funds | FD | Insurance | Loans | Demat | Risk Profile
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/30 transition-colors">
                <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-3">Delhi</h3>
                <p className="text-white/80 mb-4">
                  Delhi&apos;s diverse and financially active population deserves advisory that is equally flexible and personalised. Stockstrail serves clients across South Delhi, Dwarka, Rohini, East Delhi, and beyond.
                </p>
                <div className="mt-4 text-xs text-white/50 border-t border-white/10 pt-4">
                  Services: Mutual Funds | FD | Insurance | Loans | Demat | Risk Profile
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/30 transition-colors">
                <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-3">Haryana</h3>
                <p className="text-white/80 mb-4">
                  From Gurugram&apos;s corporate towers to Ambala&apos;s trade markets, Stockstrail serves clients across Gurugram, Faridabad, Ambala, Hisar, Rohtak, Karnal, Panipat, and Sonipat.
                </p>
                <div className="mt-4 text-xs text-white/50 border-t border-white/10 pt-4">
                  Services: Mutual Funds | FD | Insurance | Loans | Demat | Risk Profile
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/30 transition-colors">
                <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-3">Uttar Pradesh</h3>
                <p className="text-white/80 mb-4">
                  Stockstrail brings certified financial planning to clients across UP (Lucknow, Noida, Agra, Kanpur, Varanasi, Meerut, Prayagraj, Gorakhpur) through a fully digital advisory model.
                </p>
                <div className="mt-4 text-xs text-white/50 border-t border-white/10 pt-4">
                  Services: Mutual Funds | FD | Insurance | Loans | Demat | Risk Profile
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light/30 transition-colors md:col-span-1 lg:col-span-2">
                <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-3">Uttarakhand</h3>
                <p className="text-white/80 mb-4">
                  Uttarakhand&apos;s mix of government workforce and growing IT presence creates wide financial planning needs. We serve clients across Dehradun, Haridwar, Rishikesh, Nainital, Haldwani, and Roorkee.
                </p>
                <div className="mt-4 text-xs text-white/50 border-t border-white/10 pt-4">
                  Services: Mutual Funds | FD | Insurance | Loans | Demat | Risk Profile
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by 200+ */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[90%] mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase mb-4">
              <span className="text-white">Trusted by </span>
              <span className="gradient-text">200+ Clients</span>
            </h2>
            <p className="text-white/70 text-lg max-w-[90%] mx-auto">
              Certified, and Completely Transparent
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 hover:border-stockstrail-green-light/50 transition-colors duration-300">
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Stockstrail&apos;s track record speaks through its clients. Over 200 individuals and families across India have trusted Stockstrail with their financial futures - and they have stayed because they have seen real, measurable progress. Higher portfolio values. Adequate insurance coverage. Smart borrowing. Confident first-time equity investments. These are not abstract promises - they are real outcomes from real plans built with real people.
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Stockstrail operates under full AMFI and SEBI regulatory compliance. Every commission earned is disclosed publicly. Every recommendation is documented and explained. And every client - whether investing ₹500 a month or ₹50 lakh as a lump sum - receives the same standard of honest, certified, and personalised advisory.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-center">
              {[
                "AMFI Registered",
                "SEBI Certified",
                "NISM V-A",
                "Transparent",
                "Pan-India",
                "200+ Clients",
                "Client-First"
              ].map((badge, i) => (
                <div key={i} className="px-5 py-2 bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-full text-stockstrail-green-light font-semibold">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[300px] bg-stockstrail-bg-light blur-185 opacity-30" />
        </div>
        <div className="max-w-[90%] mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
          <h3 className="text-3xl font-product-sans mb-4">
            <span className="text-white">Connect with Stockstrail – Start Your </span>
            <span className="gradient-text">Financial Planning Journey Today</span>
          </h3>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Whether you are in Shimla or Lucknow, Chandigarh or Chamba, Delhi or Dehradun - Stockstrail is ready to listen, ready to explain, and ready to build a financial plan that genuinely works for your life. No jargon. No pressure. No one-size-fits-all templates. Just honest <strong>financial planning & investment guidance</strong> from a certified advisor who actually cares about your financial future.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/lets-talk" className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 font-work-sans font-medium group">
              <div className="w-2 h-2 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
              Let&apos;s Talk
            </a>
            <a href="/risk-profile" className="inline-flex items-center gap-3 px-6 py-3 bg-stockstrail-green-light text-stockstrail-bg rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,151,0.4)] transition-all duration-300 font-work-sans font-bold">
              Check Your Risk Profile
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <ServiceFAQSection faqs={faqs} title="About Stockstrail FAQs" subtitle="Frequently asked questions about our advisory services" />
    </Layout>
  );
}
