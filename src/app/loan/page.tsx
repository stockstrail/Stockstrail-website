import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ImageCarousel from "@/components/ui/ImageCarousel";

export const metadata: Metadata = {
  title: "Loans - LAMF, Business & Home Loans | Stockstrail",
  description:
    "Explore Loan Against Mutual Funds, business loans, and home loans with expert guidance, clear terms, and support through the application process.",
  keywords:
    "loan against mutual funds, LAMF, loan against mutual funds India, business loan, home loan, personal loan, Stockstrail loans",
  alternates: {
    canonical: "https://www.stockstrail.in/loan",
  },
  openGraph: {
    title: "Loans - LAMF, Business & Home Loans | Stockstrail",
    description:
      "Access funds without unnecessarily selling investments. Explore LAMF, business loans and home loans with clear, practical guidance.",
    url: "https://www.stockstrail.in/loan",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: ["/stockstrail.png"],
  },
};

const loanFaqs = [
  {
    q: "I need money for a few months. Should I redeem my mutual funds or take a loan against them?",
    a: "It depends on the amount, expected repayment period, loan cost, fund type, taxes or exit load on redemption, and your ability to repay. For a short-term need, a Loan Against Mutual Funds (LAMF) can be worth comparing with redemption and other borrowing options because your units remain pledged instead of being sold. The loan cost and risks should be checked before choosing.",
  },
  {
    q: "How much loan can I actually get against my mutual funds?",
    a: "You generally cannot borrow the full market value of your mutual funds. The available loan limit depends on the lender, eligible mutual fund schemes, the value of the pledged units, applicable loan-to-value limits, and your application profile. The final sanctioned or withdrawable amount can therefore be lower than an initial eligibility estimate.",
  },
  {
    q: "What happens to my mutual funds if the market falls after I take a LAMF?",
    a: "A fall in the value of pledged mutual funds can reduce the available collateral cover. Depending on the lender's terms, you may have to add collateral, reduce the outstanding loan, or take another permitted action. If the required cover is not maintained, the lender may have rights under the loan agreement to recover its dues.",
  },
  {
    q: "Do I pay interest on the full LAMF limit or only the amount I use?",
    a: "This depends on the structure of the facility. Some products charge interest based on the amount actually drawn, while other loan structures can work differently. Always check the lender's interest calculation, minimum usage rules, fees, and repayment terms before accepting the facility.",
  },
  {
    q: "Can I repay a loan against mutual funds early and get my mutual fund units released?",
    a: "Usually, the pledged units are released after the outstanding dues and applicable charges are settled, subject to the lender's process and loan agreement. Check for any foreclosure, processing, documentation, or other applicable charges before taking the loan.",
  },
  {
    q: "What should I check before accepting a loan offer?",
    a: "Do not compare offers only on the headline interest rate. Check the sanctioned amount, interest calculation, processing and other charges, tenure, prepayment or foreclosure terms, collateral requirements, consequences of a fall in collateral value, repayment schedule, and the lender's terms in the final loan documents.",
  },
];

export default function Loan() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loanFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <Layout>
     <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-stockstrail-bg-light blur-3xl opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-stockstrail-bg-light/30 px-4 py-2 text-sm text-white/70 mb-6">
              Personal Loans | Home Loans | Business Loans | Loan Against Mutual Funds
            </div>

            <h1 className="font-product-sans text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight uppercase gradient-text mb-6">
              Loan Options for Your Financial Needs
            </h1>

            <p className="text-white/80 max-w-3xl leading-relaxed text-lg sm:text-xl">
              Compare borrowing options based on eligibility, cost, repayment
              capacity and risk — including Loan Against Mutual Funds for eligible
              investors who want to explore liquidity without immediately
              redeeming their investments.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#loan-guidance"
                className="inline-flex items-center justify-center rounded-lg bg-stockstrail-green-light px-6 py-3 font-semibold text-black hover:opacity-90 transition"
              >
                Explore Loan Options
              </a>

              <a
                href="/lets-talk"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition"
              >
                Talk to Stockstrail
              </a>
            </div>

            <p className="mt-5 text-sm text-white/50 max-w-2xl">
              Loan approval, interest rates, eligibility and terms are determined
              by the respective lending institution and applicable conditions.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO + OVERVIEW */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-4">
              Loans - Complete Service Overview
            </h2>

            <p className="text-white/80 mb-4 leading-relaxed">
              Financial needs can arise at any stage - whether you are
              expanding a business, buying a home, or handling a short-term
              cash requirement. Before selling investments or choosing a loan,
              it helps to compare the cost, repayment period, collateral and
              overall suitability of each option.
            </p>

            <p className="text-white/80 mb-4 leading-relaxed">
              Stockstrail provides practical loan guidance across selected
              lending options. We help you understand the loan structure,
              documentation, lender terms and repayment considerations before
              you proceed. Approval, rates, tenure, loan amount and eligibility
              are subject to the lender and applicant profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Loan Against Mutual Funds (LAMF)",
                  desc: "Pledge eligible mutual fund units to access liquidity without immediately redeeming those investments.",
                  link: "/lets-talk",
                },
                {
                  title: "Business Loans",
                  desc: "Explore funding for working capital, expansion, inventory, machinery and other business requirements.",
                  link: "/lets-talk",
                },
                {
                  title: "Home Loans",
                  desc: "Explore financing for buying, constructing or renovating a home, subject to lender eligibility and property checks.",
                  link: "/lets-talk",
                },
                {
                  title: "Loan Guidance & Support",
                  desc: "Understand documentation, costs, repayment terms and available lender options before applying.",
                  link: "/lets-talk",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-stockstrail-bg-light/30 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{item.desc}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="text-stockstrail-green-light hover:underline text-sm"
                    >
                      Explore {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="rounded-2xl p-8 sm:p-10 bg-stockstrail-bg-light/40 border border-white/10">
            <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <ImageCarousel
                images={[
                  {
                    src: "/hero/business-home-personal-loans.webp",
                    alt: "Business and home loan guidance at Stockstrail",
                  },
                  {
                    src: "/hero/loan-against-mutual-funds.webp",
                    alt: "Loan Against Mutual Funds guidance at Stockstrail",
                  },
                ]}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="text-white font-semibold mb-3">Before You Borrow</h4>
            <p className="text-white/80 mb-2">
              The amount you can borrow, interest rate, fees, tenure and
              collateral requirements vary by lender and applicant. Compare the
              complete cost rather than looking only at the advertised rate.
            </p>

            <a
              href="/lets-talk"
              className="text-stockstrail-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light"
            >
              Get personalised loan guidance
            </a>
          </aside>
        </div>
      </section>

      {/* CTA after intro overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Apply For A Loan - Quick Start
          </a>
        </div>
      </section>

      {/* LAMF SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/loan4.webp"
                alt="Loan Against Mutual Funds"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h-[420px] sm:max-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-stockstrail-green-light font-semibold mb-4">
              Loan Against Mutual Funds - What & Why
            </h2>

            <p className="text-white/80 mb-4">
              LAMF lets you borrow by pledging eligible mutual fund units as
              collateral. Instead of immediately redeeming the units, you use
              them as security for the loan, subject to the lender's terms.
            </p>

            <h4 className="text-white font-semibold mb-2">Key Points</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>No need to immediately redeem the pledged investments</li>
              <li>
                Loan amount depends on eligible schemes and applicable
                loan-to-value limits
              </li>
              <li>
                Interest rate and fees vary by lender and applicant profile
              </li>
              <li>
                Market movements can affect the value of the pledged
                collateral
              </li>
              <li>
                Repayment and release of the pledge follow the lender&apos;s
                terms
              </li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">
              How LAMF Works
            </h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Eligible mutual fund units are pledged as collateral.</li>
              <li>The lender assesses the collateral and applicant profile.</li>
              <li>The lender communicates the available loan facility.</li>
              <li>Funds are disbursed according to the approved facility.</li>
              <li>The pledge is released after the applicable dues are settled.</li>
            </ol>

            {/* CASE STUDIES */}
            <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10 mt-6">
              <h4 className="text-white font-semibold mb-3">
                Practical Scenarios
              </h4>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">
                    Short-Term Cash Requirement
                  </p>
                  <p>
                    An investor needs money for a few months and wants to
                    compare LAMF with redeeming part of the mutual fund
                    portfolio.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Business Working Capital</p>
                  <p>
                    A business owner needs temporary working capital and
                    compares the total cost and flexibility of LAMF with other
                    borrowing options.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Investment Portfolio Liquidity</p>
                  <p>
                    An investor wants to understand whether borrowing against
                    eligible investments is suitable before selling units for a
                    temporary cash need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUSINESS & HOME LOANS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              Business & Home Loans - What & Why
            </h2>

            {/* BUSINESS LOANS */}
            <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2 mt-4">
              Business Loans
            </h3>
            <p className="text-white/80 mb-3">
              Business loans can be used for working capital, expansion,
              inventory, equipment and other eligible business requirements.
              Eligibility and terms depend on the lender and business profile.
            </p>

            <h4 className="text-white font-semibold mb-2">
              What Lenders Commonly Review
            </h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2 mb-4">
              <li>Business and income documentation</li>
              <li>Credit history and repayment capacity</li>
              <li>Business vintage, turnover and financial stability</li>
              <li>Loan purpose, amount and applicable security requirements</li>
            </ol>

            {/* HOME LOANS */}
            <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2 mt-6">
              Home Loans
            </h3>
            <p className="text-white/80 mb-3">
              Home loans can support eligible purchases, construction or
              renovation. Lenders generally assess income, credit profile,
              property documents, valuation and repayment capacity.
            </p>

            <h4 className="text-white font-semibold mb-2">
              What Lenders Commonly Review
            </h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Income and identity documents</li>
              <li>Credit profile and repayment capacity</li>
              <li>Property documents and valuation</li>
              <li>Loan amount, tenure and applicable conditions</li>
            </ol>

            {/* CASES */}
            <div className="mt-6 rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10">
              <h4 className="text-white font-semibold mb-3">
                Practical Examples
              </h4>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">Business Working Capital</p>
                  <p>
                    A business owner needs funds before a seasonal sales cycle
                    and compares loan cost, tenure and repayment capacity
                    before borrowing.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Home Purchase</p>
                  <p>
                    A home buyer compares the loan amount, EMI, tenure, total
                    interest and property-related conditions before accepting a
                    home loan offer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/loan3.webp"
                alt="Business and Home Loans"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h-[420px] sm:max-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stockstrail-green-accent/5 border-2 border-stockstrail-green-accent/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-bg hover:bg-stockstrail-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Check Loan Options & Start Application
          </a>
        </div>
      </section>

      {/* WHO SHOULD CONSIDER LOANS */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Who Should Consider Loans?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Mutual fund investors comparing liquidity options",
              "Business owners needing working capital",
              "Entrepreneurs comparing loan offers",
              "Property buyers seeking long-term financing",
              "Professionals facing a temporary cash requirement",
              "Borrowers comparing secured and unsecured options",
              "Businesses with seasonal cash-flow needs",
              "Borrowers who want to understand total borrowing costs before applying",
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10"
              >
                <div className="text-stockstrail-green-light text-2xl font-bold">
                  →
                </div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STOCKSTRAIL */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Why Choose Stockstrail for Loan Assistance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Practical Guidance",
                desc: "We help you compare loan options against your requirement, repayment capacity and timeline.",
              },
              {
                title: "Offer Comparison",
                desc: "We help you look beyond the headline rate and understand the overall loan cost and terms.",
              },
              {
                title: "Documentation Support",
                desc: "We help you understand the documents generally required for the selected loan process.",
              },
              {
                title: "Clear Explanations",
                desc: "We explain charges, repayment structures, collateral conditions and other important terms.",
              },
              {
                title: "Profile-Based Guidance",
                desc: "The discussion considers your requirement, income profile, existing obligations and objectives.",
              },
              {
                title: "Application Support",
                desc: "We can assist with the process and help you understand the next steps communicated by the lender.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10 text-center"
              >
                <h3 className="text-white font-semibold mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-8 text-center">
            How to Get Started with a Loan
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Discuss Your Requirement",
                desc: "Share the amount you need, purpose and expected repayment timeline.",
              },
              {
                step: "2",
                title: "Compare Suitable Loan Options",
                desc: "Understand whether LAMF, business loan, home loan or another borrowing option fits the requirement.",
              },
              {
                step: "3",
                title: "Review Eligibility & Documents",
                desc: "Check the lender's eligibility criteria, documentation, charges and applicable conditions.",
              },
              {
                step: "4",
                title: "Review the Final Offer",
                desc: "Before accepting, check the sanctioned amount, interest, fees, tenure and repayment terms.",
              },
              {
                step: "5",
                title: "Proceed with the Lender",
                desc: "Complete the lender's application and verification process. Disbursement is subject to lender approval.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-2xl bg-stockstrail-green-light text-black font-semibold">
                  {item.step}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL-WORLD FAQ */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-4 text-center">
            Loan Questions People Actually Ask
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-center mb-8">
            Practical answers to common borrowing decisions around Loan Against
            Mutual Funds, repayment, collateral risk and comparing loan offers.
          </p>

          <div className="space-y-4">
            {loanFaqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 p-5 text-left text-white font-semibold">
                  <span>{faq.q}</span>
                  <span className="shrink-0 text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-white/75 leading-7">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Need help comparing your loan options?
          </h3>
          <p className="text-white/80 mb-6">
            Share your requirement and we can help you understand the relevant
            loan options, costs and next steps before you proceed.
          </p>

          <a
            href="/lets-talk"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
          >
            Get personalised loan guidance
          </a>
        </div>
      </section>

      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </Layout>
  );
}