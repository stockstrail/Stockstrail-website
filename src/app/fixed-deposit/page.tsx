import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ImageCarousel from '@/components/ui/ImageCarousel';

export const metadata: Metadata = {
  title: "Fixed Deposits (FD): Rates, Types, Tax & Withdrawal | Stockstrail",
  description:
    "Understand fixed deposits, FD interest payouts, tenures, tax-saving FDs, premature withdrawal, deposit insurance and how to compare FD options before investing.",
  keywords:
    "fixed deposit, FD, fixed deposit investment, FD interest rates, FD maturity, tax saving fixed deposit, senior citizen FD, cumulative FD, non cumulative FD, FD premature withdrawal",
  alternates: {
    canonical: "https://www.stockstrail.in/fixed-deposit",
  },
  openGraph: {
    title: "Fixed Deposits (FD): Rates, Types, Tax & Withdrawal | Stockstrail",
    description:
      "Understand FD rates, payout options, tax-saving FDs, withdrawal rules, deposit insurance and how to compare fixed deposit options.",
    url: "https://www.stockstrail.in/fixed-deposit",
    siteName: "Stockstrail",
    type: "website",
    locale: "en_IN",
    images: ["/stockstrail.png"],
  },
};

export default function FixedDeposit() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Fixed Deposits: Know the Rate. Understand the Trade-Offs.
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Fixed deposits can offer predictable interest for a chosen tenure, making
  them useful for planned goals, regular income and money you do not want
  exposed to market fluctuations. Before you invest, understand the rate,
  tenure, tax, liquidity and withdrawal conditions.
          </p>
        </div>
      </section>


      {/* What is Fixed Deposit */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300 flex items-center justify-center">
              <div className="relative w-full aspect-video">
                <ImageCarousel
                  images={[
                    {
                      src: '/hero/fixed-deposit-investment-planning.webp',
                      alt: 'Fixed deposit secure guaranteed returns 7.5 percent per annum with Stockstrail India',
                    },
                    {
                      src: '/hero/guaranteed-returns-fd-schemes.webp',
                      alt: 'Fixed deposit tenure options from 7 days to 10 years flexible investment timeline at Stockstrail',
                    }
                  ]}
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                What is a Fixed Deposit?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
  A Fixed Deposit (FD) is a bank deposit in which you place a lump sum for a
  chosen tenure at an interest rate specified when the deposit is opened.
  The deposit is intended to be held until maturity, when the principal and
  applicable interest are paid according to the deposit terms.
</p>

<p className="text-white/80 leading-relaxed mb-4">
  Because the interest rate is fixed according to the FD terms, the maturity
  value can be easier to plan for than market-linked investments. However,
  the actual return you receive can be affected by factors such as premature
  withdrawal, tax and the bank&apos;s deposit conditions.
</p>

<p className="text-white/80 leading-relaxed">
  FDs can be useful for money assigned to a known time horizon, regular-income
  needs or conservative savings. They are not automatically the best choice
  for every goal, so the tenure, liquidity requirement, tax impact and
  alternatives should be considered before investing.
</p>
            </div>
          </div>
        </div>
      </section>

         {/* CTA after 'What is a Fixed Deposit' */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Quick FD Setup - Open Now
          </a>
        </div>
      </section>

      {/* Why Invest in Fixed Deposits */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Invest in Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
    title: "Predictable Interest",
    desc: "The interest rate is specified when the FD is opened, helping you estimate the maturity value according to the deposit terms.",
  },
  {
    title: "Low Market Volatility",
    desc: "Unlike market-linked investments, a standard fixed-rate FD does not change in value because stock or bond prices move.",
  },
  {
    title: "Choose Your Tenure",
    desc: "Banks offer different deposit tenures, allowing you to match the FD to a planned time horizon.",
  },
  {
    title: "Regular or Maturity Income",
    desc: "Depending on the deposit, interest may be paid periodically or accumulated and paid with the principal at maturity.",
  },
  {
    title: "Useful for Planned Goals",
    desc: "An FD can be considered for money earmarked for known expenses when capital stability and a defined time horizon are important.",
  },
  {
    title: "DICGC Protection",
    desc: "Eligible deposits with an insured bank are covered by DICGC up to ₹5 lakh per depositor per bank, including principal and interest, subject to the applicable rules.",
  },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Fixed Deposits */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Types of Fixed Deposits to Know
          </h2>

          <div className="space-y-8">
            {[
               {
    title: "Regular Fixed Deposit",
    desc: "A standard FD where you deposit a lump sum for a chosen tenure at an interest rate specified by the bank.",
    sub: "Suitable when you want predictable interest and a defined maturity date.",
  },
  {
    title: "Tax-Saving Fixed Deposit",
    desc: "An FD with a five-year lock-in that may qualify for deduction under Section 80C, subject to applicable tax rules.",
    sub: "Useful for eligible taxpayers who want a tax-saving investment with a fixed lock-in.",
  },
  {
  title: "Senior Citizen Fixed Deposit",
  desc: "Many banks offer an additional interest rate for eligible senior citizens, with the actual rate depending on the bank and deposit terms.",
  sub: "May suit eligible senior citizens looking for predictable interest or regular income.",
},
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.desc}</p>
                <p className="text-white/70 text-sm">
                  <strong>Suitable for:</strong> {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA after 'Types of Fixed Deposits' */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stockstrail-green-accent/5 border-2 border-stockstrail-green-accent/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-bg hover:bg-stockstrail-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Compare FD Rates & Start Now
          </a>
        </div>
      </section>

      {/* How Fixed Deposits Work */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How Fixed Deposits Work
          </h2>

          <div className="space-y-4">
            {[
              "Select the investment amount and tenure.",
              "Deposit the lump sum in the FD account.",
              "Bank pays interest at a fixed rate.",
              "At maturity, receive principal + interest.",
              "Renew or withdraw the FD.",
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-stockstrail-green-light/30"
              >
                <div className="shrink-0 w-8 h-8 bg-stockstrail-green-light rounded-full flex items-center justify-center text-black font-semibold">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Payout Options */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Interest Payout Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cumulative */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Cumulative FD
              </h3>
              <p className="text-white/80 mb-4">
               Interest is accumulated during the deposit tenure and paid along with the
  principal at maturity, according to the bank&apos;s deposit and compounding
  terms.
              </p>
              <div className="bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-lg p-4">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Best for:</strong> People who do not need
regular interest income and want to receive the accumulated amount at maturity.
                </p>
              </div>
            </div>

            {/* Non-Cumulative */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Non-Cumulative FD
              </h3>
             <p className="text-white/80 mb-4">
  Interest is paid periodically according to the payout frequency selected
  under the deposit terms, such as monthly, quarterly, half-yearly or annually.
</p>
              <div className="bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-lg p-4">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Best for:</strong> People who prefer
periodic interest income instead of waiting until maturity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculations */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Fixed Deposit Interest &amp; Maturity Examples
          </h2>

          <div className="space-y-6">
            {[
             {
    title: "Example 1: Simple One-Year FD",
    desc: "Illustration: ₹1,00,000 deposited for 1 year at a hypothetical 7% annual interest rate. If the deposit terms use annual interest for this example, the interest would be ₹7,000 and the maturity amount would be ₹1,07,000.",
    value: "",
  },
  {
    title: "Example 2: Cumulative FD",
    desc: "Illustration: ₹5,00,000 deposited for 3 years at a hypothetical 7.5% annual rate with quarterly compounding. The maturity amount would be approximately ₹6.25 lakh, before considering any applicable tax.",
    value: "",
  },
  {
    title: "Example 3: Non-Cumulative FD",
    desc: "Illustration: ₹2,00,000 at a hypothetical 8% annual rate. The annual interest would be ₹16,000, or about ₹1,333 per month if the bank's payout frequency and terms provide monthly interest.",
    value: "",
  },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30"
              >
                <p className="text-stockstrail-green-light font-semibold mb-2">
                  {item.title}
                </p>
                <p className="text-white/80">
                  {item.desc}
                  <strong className="text-stockstrail-green-light">
                    {item.value}
                  </strong>
                </p>
              </div>
            ))}

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="text-white font-semibold mb-2 text-sm">Illustrative only</p>
              <p className="text-white/70 text-sm">
                These examples use hypothetical interest rates to explain how FD interest
    and maturity values can work. Actual rates, compounding frequency, payout
    method and maturity amount depend on the bank, deposit type and applicable
    terms. Tax may also affect the post-tax return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premature Withdrawal */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Fixed Deposit Premature Withdrawal: What Happens If You Need Your Money Early
          </h2>

          <div className="space-y-4">
            {[
               "Premature withdrawal may be allowed, but the applicable conditions depend on the bank and the specific FD.",
               "The interest payable on early withdrawal may be lower than the original contracted rate, depending on the bank's terms and the period the deposit remained with the bank.",
               "A premature-withdrawal penalty may apply. Banks must have a Board-approved policy and disclose the applicable penalty components to depositors.",
               "Before breaking an FD early, check the withdrawal rules, revised interest rate, penalty and tax implications so you know the actual amount you will receive.",
             ].map((point, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <span className="shrink-0 inline-flex items-center px-3 py-1 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/5 text-stockstrail-green-light text-xs font-semibold uppercase tracking-wide">
                  Important
                </span>
                <p className="text-white/80">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Invest */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Consider Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Individuals who prefer safe investments",
              "Senior citizens looking for stable income",
              "Parents saving for short-term goals",
              "Low risk tolerance investors",
              "Individuals wanting guaranteed returns",
              "People parking surplus money safely",
              "Saving for specific future expenses",
              "Diversifying beyond volatile assets",
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
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

      {/* Why Choose Stockstrail */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose Stockstrail for Fixed Deposits?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Compare Rates",
                desc: "Easy comparison of FD rates across banks.",
              },
              {
                title: "Expert Guidance",
                desc: "Personalized recommendations based on goals.",
              },
              {
                title: "Best Rates",
                desc: "Access to competitive FD returns up to 7.5%+.",
              },
              {
                title: "Flexible Tenure",
                desc: "Choose tenures from 7 days to 10+ years.",
              },
              {
                title: "Paperless Process",
                desc: "Simple online application with minimal documents.",
              },
              {
                title: "Renewal Reminders",
                desc: "Notifications for maturity & reinvestment.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to start */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Start a Fixed Deposit
          </h2>

          <div className="space-y-4">
            {[
              "Decide the deposit amount.",
              "Select tenure (3m, 6m, 1y, 3y, 5y, etc.).",
              "Choose cumulative or periodic payout.",
              "Complete the FD application with Stockstrail.",
              "Receive FD receipt with maturity details.",
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <div className="shrink-0 w-10 h-10 bg-stockstrail-green-light rounded-full flex items-center justify-center text-black font-bold text-lg">
                  {index + 1}
                </div>
                <p className="text-white/80 pt-1">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/lets-talk"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
            >
              <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              Start Your Fixed Deposit Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
