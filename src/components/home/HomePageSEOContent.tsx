import React from 'react';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const faqs = [
  {
    question: "How much should I invest every month?",
    answer: "There is no fixed amount that everyone should invest. The right monthly investment depends on your income, financial goals, monthly expenses, emergency savings, and comfort with investment risk.\n\nThe most important decision isn't how much you invest—it's whether you can invest consistently. Many investors begin with a small monthly SIP and gradually increase it as their income grows. Starting early and staying invested for the long term usually has a greater impact on wealth creation than waiting until you can invest a larger amount.\n\nBefore investing, ensure your essential expenses are covered and you have an emergency fund in place. Then choose an investment amount that comfortably fits your budget and can continue every month without affecting your lifestyle.\n\nAt Stockstrail, we help investors create personalised investment plans based on their financial goals, investment horizon, and risk profile—not on generic rules or one-size-fits-all recommendations.\n\nRemember: The best investment amount isn't the highest amount you can invest today—it's the amount you can continue investing every month for years."
  },
  {
    question: "Can I start investing with just ₹500?",
    answer: "Absolutely. Many mutual funds allow you to start a Systematic Investment Plan (SIP) with just ₹500 per month, making investing accessible even if you're just beginning your financial journey.\n\nWhile ₹500 alone won't create significant wealth overnight, it helps you build one of the most valuable financial habits—investing consistently. As your income grows, you can gradually increase your monthly investment without changing your long-term investment strategy.\n\nInstead of waiting until you have more money, focus on building the habit of investing regularly. Time in the market is often more valuable than trying to invest a larger amount later.\n\nAt Stockstrail, we help investors choose suitable investment options based on their financial goals, investment horizon, and risk profile, so they can start confidently and grow steadily over time.\n\nRemember: A small investment started today is often more valuable than a bigger investment that's delayed for years."
  },
  {
    question: "How do I choose the right mutual fund?",
    answer: "Choosing the right mutual fund isn't about selecting the fund with the highest past returns. The best mutual fund is one that matches your financial goals, investment horizon, and risk tolerance.\n\nFor example, someone investing for retirement over the next 20 years may choose a different fund than someone saving for a house in five years. Factors such as your investment objective, asset allocation, and ability to handle market fluctuations are often more important than short-term performance.\n\nAvoid choosing a mutual fund based on social media recommendations, recent returns, or what others are investing in. A fund that performs well for one investor may not be suitable for another.\n\nAt Stockstrail, we recommend mutual funds only after understanding your financial goals, risk profile, and investment timeline—helping you build a portfolio that's designed for your needs, not based on market trends.\n\nRemember: The right mutual fund isn't the one with the highest return—it's the one that helps you achieve your financial goals."
  },
  {
    question: "Should I invest in SIP or Fixed Deposit (FD)?",
    answer: "There is no one-size-fits-all answer. A Systematic Investment Plan (SIP) and a Fixed Deposit (FD) serve different financial purposes, and the right choice depends on your goals, investment timeline, and comfort with risk.\n\nA Fixed Deposit offers predictable returns and is generally suitable for short-term goals or for investors who prefer stability. A SIP invests in mutual funds and is designed for long-term wealth creation, where returns are market-linked and may fluctuate in the short term. Historically, equity mutual funds have had the potential to outperform traditional fixed-income investments over longer investment periods, although returns are never guaranteed.\n\nMany investors don't need to choose one over the other. A balanced financial plan can include both—using FDs for stability and emergency savings, while SIPs help build long-term wealth.\n\nAt Stockstrail, we help you decide the right mix of SIPs and Fixed Deposits based on your financial goals, investment horizon, and risk profile rather than recommending the same solution to everyone.\n\nRemember: Don't ask which investment is better. Ask which investment is better for your goal."
  },
  {
    question: "How do I know my investment risk profile?",
    answer: "Your investment risk profile is determined by your financial goals, investment horizon, income stability, existing commitments, and how comfortable you are with market fluctuations. It isn't based on your age alone or the returns you expect.\n\nFor example, two people of the same age may have completely different risk profiles because their financial responsibilities, income, and long-term goals are different. Understanding your risk profile helps you choose investments that match your comfort level and reduces the chances of making emotional decisions during market ups and downs.\n\nA proper risk assessment should always be the first step before selecting any mutual fund or investment product.\n\nAt Stockstrail, you can complete a free online risk profile assessment to understand your investor category and receive guidance that's aligned with your financial goals and investment journey.\n\nRemember: The best investment isn't the one with the highest return—it's the one you can stay invested in with confidence."
  },
  {
    question: "Why is financial planning important?",
    answer: "Financial planning helps you make informed decisions about your money instead of relying on guesswork or reacting to market trends. It brings together your income, expenses, savings, investments, insurance, loans, and future goals into a structured plan that supports long-term financial stability.\n\nWithout a financial plan, it's easy to invest without a clear objective, overlook important risks, or miss milestones such as buying a home, funding your child's education, or preparing for retirement. A well-designed financial plan helps you prioritise these goals while making the best use of your available resources.\n\nFinancial planning isn't only for high-income earners or experienced investors. Whether you're starting your first job, growing your family, or planning for retirement, having a clear roadmap can help you make better financial decisions at every stage of life.\n\nAt Stockstrail, financial planning begins with understanding your goals, risk profile, and life priorities before recommending any investment or financial product.\n\nRemember: A good investment can help you grow your money, but a good financial plan helps you achieve your life goals."
  },
  {
    question: "Can I invest online from anywhere in India?",
    answer: "Yes. Today, most financial services—including SIPs, lumpsum mutual fund investments, Fixed Deposits (FDs), insurance, Demat account opening, and financial planning—can be completed securely online from anywhere in India.\n\nThe most important factor is not your location but choosing a trusted financial advisor who understands your financial goals and provides ongoing guidance. Digital investing makes it easy to complete documentation, track your portfolio, review your investments, and receive expert support without visiting a physical office.\n\nWhether you're investing through a monthly SIP, making a one-time lumpsum investment, or planning for long-term financial goals, a personalised investment strategy is more important than where you live.\n\nStockstrail provides personalised financial planning and investment guidance to clients across India through a secure digital process, making investing simple, transparent, and accessible wherever you are.\n\nRemember: The right financial guidance should be available wherever you are—and every investment should begin with a plan, not a product."
  },
  {
    question: "Why should I choose Stockstrail for financial planning?",
    answer: "Choosing a financial advisor isn't just about finding someone who can recommend investments—it's about finding someone who understands your goals and helps you make informed financial decisions over the long term.\n\nStockstrail has helped 200+ clients and families across India build personalised financial plans based on their financial goals, risk profile, and investment horizon. Before recommending Mutual Funds, SIPs, lumpsum investments, Fixed Deposits, insurance, or any other financial solution, we first understand your financial situation, existing commitments, and long-term objectives. This ensures every recommendation is practical, transparent, and tailored to your needs—not influenced by short-term market trends or one-size-fits-all advice.\n\nWhether you're starting your investment journey, planning for your child's education, preparing for retirement, or building long-term wealth, our focus remains the same: helping you make confident financial decisions through honest guidance and disciplined planning.\n\nRemember: The right financial advisor doesn't just help you invest—they help you make better financial decisions for life."
  }
];

export default function HomePageSEOContent() {
  return (
    <div className="py-16 bg-stockstrail-bg">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stockstrail – Financial Planning &amp; Investment Guidance
          </h2>
          <p className="text-gray-400 max-w-[90%] mx-auto">
            Financial planning &amp; investment guidance is not a luxury reserved for the rich - it is a necessity for every earning individual in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">Our Core Philosophy</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most people do not start investing because they lack money. They stay away because nobody has ever explained it to them in simple, human language. The financial world is full of jargon, commission-driven advice, and one-size-fits-all products that rarely fit anyone's actual life.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Stockstrail was built to fix exactly this problem. We offer <em>financial planning &amp; investment guidance</em> that starts with listening - to your goals, your concerns, your timeline, and your life situation - before recommending anything at all.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">Stockstrail's Four Pillars</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-stockstrail-green-light mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white block">Clarity</strong>
                  We explain everything in plain language. No jargon. No confusion. Just clear answers.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-stockstrail-green-light mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white block">Ethics</strong>
                  Our recommendations are research-backed and conflict-free.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-stockstrail-green-light mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white block">Realistic expectations</strong>
                  We build disciplined, sustainable financial plans that deliver results over time.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-stockstrail-green-light mr-3 mt-1">✓</span>
                <div>
                  <strong className="text-white block">Long-term support</strong>
                  We are a long-term partner who reviews your portfolio and stays with you through every life stage.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-6 text-center">Serving Clients Across North India</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Himachal Pradesh</h4>
              <p className="text-sm text-gray-400">Serving all 12 districts including Shimla, Kangra, Mandi, Kullu, Solan, Sirmaur, and more. From government employees to local businesses.</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Chandigarh Tricity</h4>
              <p className="text-sm text-gray-400">Expert investment guidance for IT professionals, government employees, and business owners in Chandigarh, Mohali, and Panchkula.</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Delhi NCR</h4>
              <p className="text-sm text-gray-400">Comprehensive financial planning for India's capital covering mutual funds, insurance, loans, and demat account setup.</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Haryana</h4>
              <p className="text-sm text-gray-400">Investment guidance for Gurugram, Faridabad, Ambala, Hisar, Rohtak, and other major cities tailored to salaried &amp; agricultural income.</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Uttar Pradesh</h4>
              <p className="text-sm text-gray-400">Digital-first financial planning across India's largest state including Noida, Lucknow, Kanpur, Agra, and Varanasi.</p>
            </div>
            
            <div className="space-y-2">
              <h4 className="text-lg font-medium text-white">Uttarakhand</h4>
              <p className="text-sm text-gray-400">Trusted advisory for Dehradun, Haridwar, Rishikesh, and beyond, supporting the region's professionals and tourism sector.</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">Our Complete Range of Services</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Stockstrail offers a comprehensive suite of financial solutions that covers every aspect of your financial life. Every service is delivered with the same commitment: clarity, honesty, and results.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <h5 className="font-medium text-white">Mutual Funds</h5>
              <p className="text-xs text-gray-400 mt-1">SIP &amp; Goal-based</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <h5 className="font-medium text-white">Fixed Deposits</h5>
              <p className="text-xs text-gray-400 mt-1">Guaranteed Returns</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <h5 className="font-medium text-white">Insurance</h5>
              <p className="text-xs text-gray-400 mt-1">Life &amp; Health</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <h5 className="font-medium text-white">Loans</h5>
              <p className="text-xs text-gray-400 mt-1">Smart Borrowing</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <h5 className="font-medium text-white">Demat Account</h5>
              <p className="text-xs text-gray-400 mt-1">100% Digital</p>
            </div>
            <div className="p-4 bg-black/20 rounded-lg border border-white/5">
              <h5 className="font-medium text-white">Risk Profile</h5>
              <p className="text-xs text-gray-400 mt-1">Free Assessment</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <ServiceFAQSection faqs={faqs} />
        </div>
      </div>
    </div>
  );
}
