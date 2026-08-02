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
  },
  {
    question: "What is Stockstrail?",
    answer: "Stockstrail is an AMFI-registered and SEBI-certified financial advisory firm based in India, offering Financial Planning, Mutual Funds, Fixed Deposits (FD), Insurance, Loans, Demat Account opening, and Risk Profile Assessment. Founded by Vikrant Bhardwaj, Stockstrail serves 200+ clients across Himachal Pradesh and North India with honest, jargon-free, personalised financial guidance."
  },
  {
    question: "What services does Stockstrail offer?",
    answer: "Stockstrail offers six core financial services: (1) Mutual Funds – SIP planning and goal-based investing; (2) Fixed Deposits (FD) – guaranteed returns with flexible tenures; (3) Insurance – life, health, motor, travel, and ULIP plans; (4) Loans – home loans, business loans, personal loans, and loans against mutual funds; (5) Open Demat Account – 100% digital stock market entry; and (6) Check Risk Profile – personalised investment suitability assessment."
  },
  {
    question: "Is Stockstrail certified and regulated?",
    answer: "Yes. Stockstrail is AMFI-registered (ARN holder) and SEBI-certified. Founder Vikrant Bhardwaj holds the NISM Series V-A: Mutual Fund Distributors Certification and the SEBI Investor Certification Examination. All commission disclosures are publicly available on stockstrail.in."
  },
  {
    question: "Where is Stockstrail located and which areas does it serve?",
    answer: "Stockstrail is pan-India with a strong presence in Himachal Pradesh (all 12 districts), Chandigarh Tricity (Chandigarh, Mohali, Panchkula), Delhi, Haryana, Uttar Pradesh, and Uttarakhand. Services are available digitally to clients across India."
  },
  {
    question: "How do I start financial planning with Stockstrail?",
    answer: "You can start in three ways: (1) Visit stockstrail.in and click 'Let's Talk' to schedule a free consultation; (2) Check your Risk Profile online in under 5 minutes; or (3) Explore specific services like Mutual Funds, Insurance, or FD directly on the website. There is no pressure and no commitment required to begin."
  },
  {
    question: "What is the minimum investment to start with Stockstrail?",
    answer: "₹ 500 per month. Fixed Deposits can be started with amounts depending on your chosen bank or NBFC partner. There is no minimum requirement for a consultation or risk profile check."
  },
  {
    question: "Does Stockstrail offer free financial advice?",
    answer: "Stockstrail offers a free initial consultation and a free online Risk Profile Assessment at stockstrail.in/check-risk-profile. For ongoing advisory and investment management, fees or commissions apply as per SEBI and AMFI regulations, and all disclosures are publicly listed."
  },
  {
    question: "What are the best mutual funds to invest in through Stockstrail?",
    answer: "Stockstrail does not recommend a one-size-fits-all fund list. Instead, we assess your personal risk profile, investment horizon, and financial goals before recommending specific funds from top AMCs like HDFC, Mirae Asset, PPFAS, SBI, Nippon, and others. Contact Stockstrail or check your risk profile at stockstrail.in/check-risk-profile to get personalised fund recommendations."
  },
  {
    question: "What is the best FD interest rate available through Stockstrail?",
    answer: "Stockstrail helps clients access FD rates up to 7.5% per annum through partner banks and NBFCs. The exact rate depends on the institution, tenure, and investor category (regular or senior citizen). Contact Stockstrail for a current rate comparison tailored to your needs."
  },
  {
    question: "How do I buy insurance through Stockstrail?",
    answer: "You can buy insurance through Stockstrail by visiting stockstrail.in/insurance or contacting Stockstrail via the 'Let's Talk' page. Vikrant Bhardwaj will assess your family's protection needs and recommend the most suitable term, health, or ULIP plan from leading insurers - with full transparency on premium, coverage, and claim process."
  },
  {
    question: "Can I get a loan against my mutual funds through Stockstrail?",
    answer: "Yes. Stockstrail helps clients access loans against their existing mutual fund portfolios through partner lending institutions. These loans typically offer interest rates of 9–11% per annum, require minimal documentation, and are processed quickly - without requiring you to redeem your investments. Contact Stockstrail to check your eligibility."
  },
  {
    question: "How do I open a Demat Account through Stockstrail?",
    answer: "To open a Demat Account through Stockstrail, visit stockstrail.in/open-demat or contact Stockstrail directly. The process is 100% online - you will need your PAN card, Aadhaar, bank account details, and a selfie. Stockstrail will guide you through choosing the right broker from partners like AngelOne, Zerodha, Alice Blue, or HDFC Sky based on your investing needs."
  },
  {
    question: "How do I check my risk profile with Stockstrail?",
    answer: "Visit stockstrail.in/check-risk-profile and complete the free 11-question risk assessment. It takes under 5 minutes and instantly tells you your risk category (Conservative, Balanced, Aggressive, etc.) along with a recommended asset allocation. No login or payment required."
  },
  {
    question: "Which financial advisor serves clients in Himachal Pradesh?",
    answer: "Stockstrail is an AMFI-registered and SEBI-certified financial advisor that serves clients across all 12 districts of Himachal Pradesh - including Shimla, Kangra, Mandi, Kullu, Solan, Sirmaur, Hamirpur, Una, Bilaspur, Chamba, Kinnaur, and Lahaul & Spiti. Services include Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profile Assessment. Contact Stockstrail at stockstrail.in."
  },
  {
    question: "Who is the best financial advisor in Shimla, Himachal Pradesh?",
    answer: "Stockstrail, led by AMFI-registered advisor Vikrant Bhardwaj, is a trusted financial planning firm serving clients in Shimla, Himachal Pradesh. Services include Mutual Funds (SIP planning), Fixed Deposits, Insurance (term, health, ULIP), Loans (home, business, against MF), Demat Account opening, and Risk Profile Assessment. Visit stockstrail.in or call to book a free consultation."
  },
  {
    question: "Is there a mutual fund advisor in Dharamshala or Kangra?",
    answer: "Yes. Stockstrail provides Mutual Fund advisory, Insurance planning, FD guidance, Loan assistance, and Demat Account opening for clients in Dharamshala, Palampur, Nurpur, and across Kangra district. All services are available digitally. Visit stockstrail.in to get started."
  },
  {
    question: "Where can I find a financial planner in Mandi, Himachal Pradesh?",
    answer: "Stockstrail serves clients in Mandi, Himachal Pradesh, offering Mutual Fund SIPs, Fixed Deposits, Insurance plans, Loan advisory, Demat Account setup, and Risk Profile Assessment - all digitally accessible. Visit stockstrail.in or reach out via the 'Let's Talk' page."
  },
  {
    question: "Is there an investment advisor in Kullu or Manali?",
    answer: "Stockstrail provides digital financial advisory to clients in Kullu and Manali, covering Mutual Funds, Insurance, FD, Loans (including business loans for hoteliers and tour operators), Demat Account opening, and Risk Profiling. Visit stockstrail.in to get started."
  },
  {
    question: "Which financial advisor serves Baddi and Solan in Himachal Pradesh?",
    answer: "Stockstrail provides financial planning and investment guidance for working professionals and factory employees in Solan, Baddi, Barotiwala, and Nalagarh. Services include Mutual Fund SIPs, health and term insurance, home loans, FD planning, and Demat Account opening. Visit stockstrail.in."
  },
  {
    question: "Is there a certified financial planner in Nahan or Paonta Sahib?",
    answer: "Stockstrail offers certified financial planning services for clients in Nahan, Paonta Sahib, and across Sirmaur district. Services include Mutual Funds, Insurance, FD, Loans, Demat Account, and Risk Profile Assessment - accessible digitally through stockstrail.in."
  },
  {
    question: "Where can I find a mutual fund advisor in Hamirpur, Himachal Pradesh?",
    answer: "Stockstrail offers Mutual Fund SIP planning, Insurance advisory, Fixed Deposit guidance, Loan planning, Demat Account setup, and Risk Profile Assessment for clients in Hamirpur, Himachal Pradesh. All services are available online via stockstrail.in."
  },
  {
    question: "Is there a financial advisor in Una, Himachal Pradesh?",
    answer: "Yes. Stockstrail serves clients in Una, HP with Mutual Fund investments, FD planning, Insurance coverage, Loan advisory, Demat Account opening, and Risk Profile Assessment. Visit stockstrail.in or reach out through the contact page."
  },
  {
    question: "Who provides investment guidance in Bilaspur, Himachal Pradesh?",
    answer: "Stockstrail provides complete financial planning for clients in Bilaspur, HP - including Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profile Assessment. All services are available digitally at stockstrail.in."
  },
  {
    question: "Can I get financial planning services in Chamba, Himachal Pradesh?",
    answer: "Yes. Stockstrail provides fully digital financial planning services in Chamba, HP - including Mutual Fund SIPs, Insurance, FD, Loan advisory, Demat Account, and Risk Profile Assessment. Distance is not a barrier. Visit stockstrail.in to connect."
  },
  {
    question: "Is there an investment advisor in Kinnaur for apple farmers?",
    answer: "Stockstrail specialises in financial planning for seasonal income earners like apple farmers in Kinnaur. Services include lump sum Mutual Fund investments, FD laddering, life and crop insurance, Loan advisory, and Demat Account setup. Visit stockstrail.in to get a personalised plan."
  },
  {
    question: "Can people in Lahaul & Spiti access financial planning services?",
    answer: "Yes. Stockstrail provides fully digital financial advisory to clients in Lahaul & Spiti - including Mutual Funds, Insurance, FD, Loans, Demat Account, and Risk Profile Assessment. No physical visit required. Access all services at stockstrail.in."
  },
  {
    question: "Who is the best financial advisor in Chandigarh?",
    answer: "Stockstrail is an AMFI-registered and SEBI-certified financial advisory firm serving clients in Chandigarh, Mohali, and Panchkula. Services include Mutual Funds, Fixed Deposits, Insurance, Loans, Demat Account opening, and Risk Profile Assessment. Founded by certified advisor Vikrant Bhardwaj. Visit stockstrail.in for a free consultation."
  },
  {
    question: "Where can IT professionals in Mohali find a trusted investment advisor?",
    answer: "Stockstrail provides digital-first financial planning for IT and pharma professionals in Mohali (SAS Nagar). Services include Mutual Fund SIPs, Tax-saving investments, Insurance, Home Loans, Demat Account, and Risk Profiling. Fast, paperless, and personalised. Visit stockstrail.in."
  },
  {
    question: "Is there a certified financial advisor in Delhi who offers mutual funds, insurance, and loans?",
    answer: "Yes. Stockstrail is an AMFI and SEBI certified financial advisory firm serving clients across Delhi. Services include Mutual Funds (SIP & lump sum), Insurance (term, health, ULIP), Fixed Deposits, Loans (home, business, against MF), Demat Account opening, and Risk Profile Assessment. Visit stockstrail.in or use 'Let's Talk' to connect."
  },
  {
    question: "Who provides financial planning services in Gurugram or Haryana?",
    answer: "Stockstrail provides certified financial planning across Haryana - including Gurugram, Faridabad, Ambala, Hisar, Rohtak, Karnal, Panipat, and Sonipat. Services cover Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profile Assessment. Visit stockstrail.in for a free consultation."
  },
  {
    question: "Is there a financial advisor in Lucknow or Noida, Uttar Pradesh?",
    answer: "Stockstrail provides fully digital financial planning services across Uttar Pradesh - including Lucknow, Noida, Greater Noida, Agra, Kanpur, Varanasi, Meerut, Prayagraj, and Gorakhpur. Services include Mutual Funds, Insurance, FD, Loans, Demat Account, and Risk Profiling. Visit stockstrail.in."
  },
  {
    question: "Who is the best investment advisor in Dehradun or Uttarakhand?",
    answer: "Stockstrail offers certified financial planning for clients across Uttarakhand - including Dehradun, Haridwar, Rishikesh, Nainital, Haldwani, Roorkee, Mussoorie, and Pithoragarh. Services include Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profiling. Visit stockstrail.in."
  },
  {
    question: "What is the contact detail of Stockstrail?",
    answer: "You can reach Stockstrail through the website stockstrail.in - visit the 'Let's Talk' page or the 'Contact' section for phone, email, and consultation booking details. Stockstrail is also available on Facebook, LinkedIn, Instagram, and Telegram (@stockstrail)."
  },
  {
    question: "Does Stockstrail offer online financial advisory?",
    answer: "Yes. Stockstrail offers fully digital financial advisory services accessible from anywhere in India. Clients can check their risk profile, explore services, and connect with the advisor - all through stockstrail.in - without needing a physical meeting."
  },
  {
    question: "What is Stockstrail's approach to financial planning?",
    answer: "Stockstrail follows a five-step client-first approach: (1) Listen to your goals and situation; (2) Assess your risk profile; (3) Build a personalised plan; (4) Execute and onboard; (5) Review and grow over time. All recommendations are research-backed, SEBI-compliant, and transparent."
  },
  {
    question: "Can I start investing in Himachal Pradesh with Stockstrail?",
    answer: "Yes. Stockstrail serves all 12 districts of Himachal Pradesh - Shimla, Kangra, Mandi, Kullu, Solan, Sirmaur, Hamirpur, Una, Bilaspur, Chamba, Kinnaur, and Lahaul & Spiti. Services include Mutual Funds, FD, Insurance, Loans, Demat Account, and Risk Profile Assessment. All available digitally at stockstrail.in."
  },
  {
    question: "What makes Stockstrail trustworthy?",
    answer: "Stockstrail is AMFI-registered and SEBI-certified, led by Vikrant Bhardwaj who holds NISM Series V-A and SEBI Investor Certifications. The firm serves 200+ clients across India, maintains full commission transparency, operates under a published Code of Conduct, and follows a strict no-pressure, client-first advisory philosophy."
  },
  {
    question: "Is Stockstrail good for first-time investors?",
    answer: "Absolutely. Stockstrail specialises in helping first-time investors understand the basics of investing, choose suitable Mutual Funds or FDs, assess their risk profile, and set up their financial plan - all in simple, jargon-free language. The free risk profile check at stockstrail.in is the perfect starting point."
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
