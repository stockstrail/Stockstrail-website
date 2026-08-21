import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';
import ServiceGEOSection from '@/components/services/ServiceGEOSection';

export const metadata: Metadata = {
  title: 'Complete Financial Protection & Tax Filing Services by Stockstrail - Motor Insurance, Travel Insurance, ULIPs & More',
  description:
    'Comprehensive financial and protection services including Motor Insurance, Travel Insurance, ULIPs, Guaranteed Plans, and Tax Filing. Expert guidance for complete financial coverage.',
  keywords:
    'motor insurance, travel insurance, ULIPs, guaranteed return plans, mutual funds, loans, FD, risk profile, demat account, tax filing, KFintech, Stockstrail',
  alternates: {
    canonical: 'https://www.stockstrail.in/financial-protection',
  },
  openGraph: {
    title: 'Complete Financial Protection & Tax Filing Services by Stockstrail - Motor Insurance, Travel Insurance, ULIPs & More',
    description:
      'Comprehensive financial and protection services including Motor Insurance, Travel Insurance, ULIPs, Guaranteed Plans, and Tax Filing.',
    url: 'https://www.stockstrail.in/financial-protection',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Financial Protection & Tax Filing Services by Stockstrail - Motor Insurance, Travel Insurance, ULIPs & More',
    description:
      'Comprehensive financial and protection services including Motor Insurance, Travel Insurance, ULIPs, Guaranteed Plans, and Tax Filing.',
  },
};

const faqs = [
  {
    question: 'Is motor insurance mandatory for all vehicles in India?',
    answer:
      'Yes. Under the Motor Vehicles Act, 1988, third-party motor insurance is legally mandatory for all vehicles operating on Indian roads. Driving without valid insurance can result in fines and legal liability. Stockstrail helps you get the right motor insurance - third-party or comprehensive - based on your vehicle and usage.',
  },
  {
    question: 'Does travel insurance cover adventure activities like trekking in Himachal Pradesh?',
    answer:
      'Standard travel insurance policies may not automatically cover high-risk adventure activities. Stockstrail helps adventure travellers - including those visiting Himachal Pradesh and Uttarakhand for trekking, skiing, or mountaineering - find specialised travel insurance plans that explicitly include adventure sport cover, mountain rescue, and emergency evacuation.',
  },
  {
    question: 'What is the difference between a ULIP and a Guaranteed Return Plan?',
    answer:
      'A ULIP (Unit Linked Insurance Plan) invests your premium in market-linked funds - equity, debt, or hybrid - offering the potential for higher returns over the long term, but with market risk. A Guaranteed Return Plan offers a fixed, pre-determined maturity amount with zero market risk. The right choice depends on your risk appetite and financial goals.',
  },
  {
    question: 'Can I manage all my financial services - insurance, mutual funds, loans, FD - through Stockstrail?',
    answer:
      'Yes. Stockstrail is a one-stop financial services platform. In addition to motor insurance, travel insurance, ULIPs, and guaranteed plans, we also offer mutual fund investments, FD advisory, risk profile assessment, loan facilitation (LAMF, business loans, home loans), and demat account opening - all under one roof.',
  },
  {
    question: 'Does Stockstrail serve clients in remote areas of Himachal Pradesh?',
    answer:
      "Yes. Stockstrail's 100% digital process means we can serve clients in all 12 districts of Himachal Pradesh - including remote areas like Lahaul & Spiti and Kinnaur. As long as you have a smartphone and internet access, you can access our complete range of financial services.",
  },
  {
    question: 'What documents are needed to buy motor insurance through Stockstrail?',
    answer:
      'For motor insurance renewal or a new policy, you typically need your vehicle registration certificate (RC), previous insurance policy (if renewing), PAN or Aadhaar, and odometer reading for used vehicles. Stockstrail guides you through the exact documents required for your specific vehicle type and policy.',
  },
  {
    question: 'What tax benefits do ULIPs and Guaranteed Return Plans offer?',
    answer:
      'Premiums paid for ULIPs and most traditional life insurance plans qualify for deduction under Section 80C of the Income Tax Act (up to ₹1.5 lakh per year). Maturity proceeds are generally exempt under Section 10(10D), subject to applicable conditions. Consult a tax advisor for personalised guidance.',
  },
  {
    question: 'How does Stockstrail facilitate tax filing?',
    answer:
      'Stockstrail has partnered with KFintech to offer a secure, digital tax filing solution. Through this partnership, you can access KFintech\'s user-friendly tax filing platform directly, allowing you to file your Income Tax Returns (ITR), report capital gains, and manage tax documentation seamlessly.',
  },
];

export default function Others() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Financial Protection for the Things That Matter Most
          </h1>

          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Financial protection is about preparing for the financial risks that
            can affect your family, income, assets and long-term goals.
            Stockstrail helps you understand relevant protection and financial
            solutions, compare your options and make informed decisions based
            on your needs and financial situation.
          </p>

          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-base mt-5">
            From insurance and tax filing to investments and other financial
            solutions, build a more resilient financial foundation with
            Stockstrail.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/lets-talk"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
            >
              Talk to Stockstrail
            </a>

            <a
              href="#financial-protection-services"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
            >
              Explore Financial Protection
            </a>
          </div>
        </div>
      </section>

      {/* FINANCIAL PROTECTION OVERVIEW */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <Image
                src="/financial-protection2.webp"
                alt="Financial protection planning for family, income, assets and financial goals"
                width={720}
                height={420}
                loading="lazy"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                What Does Financial Protection Mean?
              </h2>

              <p className="text-white/80 leading-relaxed mb-4">
                Financial protection is about being prepared for the situations
                that can put pressure on your finances. An unexpected accident,
                damage to your vehicle, a medical emergency while travelling,
                loss of income or a major financial commitment can affect more
                than your savings. The right protection can help you manage
                these risks without losing sight of your long-term goals.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                For some people, that may mean having suitable{' '}
                <strong>motor insurance</strong> or{' '}
                <strong>travel insurance</strong>. For a family, life insurance
                may be an important part of protecting dependants and future
                financial goals. For an investor, it can also mean keeping
                enough emergency savings and understanding the risks attached
                to different investments.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Life insurance itself is not one-size-fits-all.{' '}
                <strong>Term insurance</strong> is primarily designed to provide
                life cover, while traditional and savings-oriented insurance
                plans may combine protection with other policy features. We
                cover these options in more detail on our{' '}
                <a
                  href="/insurance"
                  className="text-stockstrail-green-light hover:text-white hover:underline transition-colors"
                >
                  Insurance page
                </a>
                , where you can compare the important differences before
                making a decision.
              </p>

              <p className="text-white/80 leading-relaxed mb-4">
                Financial protection also needs to fit into the rest of your
                financial plan. Your{' '}
                <a
                  href="/mutual-funds"
                  className="text-stockstrail-green-light hover:text-white hover:underline transition-colors"
                >
                  mutual fund investments
                </a>
                , emergency savings,{' '}
                <a
                  href="/loan"
                  className="text-stockstrail-green-light hover:text-white hover:underline transition-colors"
                >
                  borrowing
                </a>
                , insurance and financial goals should make sense together,
                rather than being treated as separate decisions.
              </p>

              <p className="text-white/70 leading-relaxed">
                If you already know what you are looking for, you can explore
                the relevant options. If you are unsure which type of insurance
                or financial protection is appropriate for your situation,{' '}
                <a
                  href="/lets-talk"
                  className="text-stockstrail-green-light hover:text-white hover:underline transition-colors font-medium"
                >
                  Talk to Stockstrail
                </a>
                . We can first understand your requirement, then help you
                evaluate the relevant options.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm">
                <a
                  href="/insurance"
                  className="text-white/80 hover:text-stockstrail-green-light hover:underline transition-colors"
                >
                  Explore Insurance
                </a>

                <a
                  href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-stockstrail-green-light hover:underline transition-colors"
                >
                  Explore Insurance Options
                </a>

                <a
                  href="/lets-talk"
                  className="text-white/80 hover:text-stockstrail-green-light hover:underline transition-colors"
                >
                  Talk to Stockstrail
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL & PROTECTION SERVICES */}
      <section id="financial-protection-services" className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-4 text-center">
            Financial Protection Services That Fit Real-Life Needs
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-center leading-relaxed mb-12">
            Financial protection is different for everyone. A vehicle owner,
            a family planning a holiday, and an investor preparing their tax
            return may face very different risks. We focus on the areas where
            the right protection, documentation or guidance can make a
            practical difference.
          </p>

          <div className="space-y-8">

            {/* MOTOR INSURANCE */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Motor Insurance: Protect Your Vehicle and Your Finances
              </h3>

              <p className="text-white/80 leading-relaxed mb-5">
                Motor insurance is not only about meeting the legal requirement
                for third-party cover. The right policy can also help manage
                the financial impact of an accident, theft, fire or other
                covered damage to your vehicle. The type of cover you need
                depends on your vehicle, usage, age, value and the risks you
                are comfortable taking yourself.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    What to Understand Before Choosing a Policy
                  </h4>

                  <ul className="space-y-2 text-white/70">
                    <li>
                      • Third-party liability and the protection it provides
                    </li>
                    <li>
                      • Own-damage cover under a comprehensive policy
                    </li>
                    <li>
                      • Insured Declared Value and how it affects a claim
                    </li>
                    <li>
                      • Deductibles, exclusions and policy conditions
                    </li>
                    <li>
                      • Add-ons such as zero depreciation, roadside assistance
                      or return-to-invoice, where relevant
                    </li>
                    <li>
                      • No Claim Bonus and its effect on renewal
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">
                    When Your Requirements May Be Different
                  </h4>

                  <p className="text-white/70 leading-relaxed">
                    A new car, an older vehicle, a frequently used commercial
                    vehicle and a vehicle driven occasionally do not necessarily
                    need the same combination of cover. If you drive in areas
                    where difficult terrain, heavy rain or other local
                    conditions are part of everyday travel, those practical
                    circumstances can also be worth considering when reviewing
                    your policy.
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-5">
                Stockstrail can help you understand the difference between
                available motor insurance options and the conditions that
                matter before you choose a policy. Coverage, exclusions,
                premiums and add-ons depend on the insurer and the policy
                selected.
              </p>

              <a
                href="/lets-talk"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
              >
                Discuss Your Motor Insurance Requirement
              </a>
            </div>

            {/* TRAVEL INSURANCE */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Travel Insurance: Prepare for the Unexpected
              </h3>

              <p className="text-white/80 leading-relaxed mb-5">
                Travel insurance is designed to help with certain unexpected
                costs that can arise during a trip. Depending on the policy,
                this may include eligible medical expenses, emergency
                assistance, baggage-related losses, trip interruptions or other
                covered events. The exact protection varies by policy, so the
                exclusions and conditions matter as much as the headline
                coverage.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Situations Worth Considering
                  </h4>

                  <ul className="space-y-2 text-white/70">
                    <li>
                      • International travel where medical treatment can be
                      expensive
                    </li>
                    <li>
                      • Family holidays where several travellers are covered
                      under one plan
                    </li>
                    <li>
                      • Business trips with tight schedules and non-refundable
                      arrangements
                    </li>
                    <li>
                      • Student travel or longer stays abroad
                    </li>
                    <li>
                      • Trips involving activities that may require specific
                      adventure-sport cover
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Check the Policy Before You Travel
                  </h4>

                  <p className="text-white/70 leading-relaxed">
                    Before buying travel insurance, check the geographical
                    coverage, medical limits, exclusions, pre-existing
                    conditions, adventure activities, baggage conditions,
                    deductibles and claim requirements. A policy that looks
                    inexpensive may not provide the protection you actually
                    need for your particular trip.
                  </p>
                </div>
              </div>

              <p className="text-white/70 leading-relaxed mb-5">
                This is especially relevant for travel involving trekking,
                skiing or other higher-risk activities in places such as
                Himachal Pradesh and Uttarakhand, where standard travel
                policies may have specific exclusions or conditions.
              </p>

              <a
                href="/lets-talk"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
              >
                Discuss Your Travel Insurance Requirement
              </a>
            </div>

            {/* TAX FILING */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Income Tax Filing & Investment Tax Support
              </h3>

              <p className="text-white/80 leading-relaxed mb-5">
                Income tax filing can become more complicated once your finances include
                salary income, mutual funds, shares, dividends, bank or FD interest,
                capital gains, or income from more than one source. A return that looks
                simple at first can require you to bring together information from several
                statements and check that the details reported in your tax return are
                complete and consistent.
              </p>

              <p className="text-white/70 leading-relaxed mb-6">
                Stockstrail provides a digital tax-filing route for individuals and
                investors who want to organise their information and complete their ITR
                filing process online. This can be particularly useful if your financial
                year includes mutual fund redemptions, share-market transactions, capital
                gains, TDS, interest income or other investment-related information.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">
                    Information to Keep Ready
                  </h4>

                  <ul className="space-y-2 text-white/70 leading-relaxed">
                    <li>• Form 16 and salary-related income details</li>
                    <li>• Form 26AS and Annual Information Statement (AIS)</li>
                    <li>• Mutual fund capital gains and transaction statements</li>
                    <li>• Share-market or securities capital-gains statements</li>
                    <li>• Bank and fixed-deposit interest information</li>
                    <li>• Dividend, TDS and other income details</li>
                    <li>• Relevant deductions and supporting documents</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">
                    What You Should Check Before Filing
                  </h4>

                  <ul className="space-y-2 text-white/70 leading-relaxed">
                    <li>• Whether your income sources are completely reported</li>
                    <li>• Whether TDS details match your available records</li>
                    <li>• Whether capital gains and investment transactions are accounted for</li>
                    <li>• Whether AIS and other statements have been reviewed carefully</li>
                    <li>• Whether the applicable ITR form matches your income profile</li>
                    <li>• Whether supporting documents are available for the information reported</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-6">
                <h4 className="text-white font-semibold mb-3">
                  Especially Useful for Investors
                </h4>

                <p className="text-white/70 leading-relaxed">
                  If you invest in mutual funds or the stock market, tax filing may involve
                  more than simply entering your salary and TDS. Capital gains, dividend
                  income, investment statements and transaction records may all need to be
                  considered. The correct treatment also depends on your income, transactions
                  and the ITR form applicable to your situation.
                </p>
              </div>

              <p className="text-white/70 leading-relaxed mb-6">
                Stockstrail keeps the process digital so you can access the tax-filing
                facility online and work through your return with your financial information
                organised in one place. Tax rules and filing requirements can change from
                one assessment year to another, so the information applicable to your
                financial year should always be checked before submission. For situations
                requiring individual tax advice or complex tax interpretation, consult a
                qualified tax professional.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://gi9.in/KFINTH/v8qS3L"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start income tax filing online"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
                >
                  Start Tax Filing
                </a>

                <a
                  href="/lets-talk"
                  aria-label="Talk to Stockstrail about tax filing"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
                >
                  Talk to Stockstrail
                </a>
              </div>
            </div>

            {/* INSURANCE PLANNING */}
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Insurance Planning: Choose Protection Around Your Needs
              </h3>

              <p className="text-white/80 leading-relaxed mb-5">
                Life and health insurance decisions are closely connected to
                your income, dependants, existing liabilities and future
                responsibilities. The right type and amount of cover can be
                different for someone starting their career, a family with
                children, someone approaching retirement or a person already
                managing substantial financial commitments.
              </p>

              <p className="text-white/70 leading-relaxed mb-5">
                Stockstrail&apos;s dedicated{' '}
                <a
                  href="/insurance"
                  className="text-stockstrail-green-light hover:underline"
                >
                  Insurance page
                </a>{' '}
                covers term insurance, health insurance and traditional and
                savings-oriented insurance in greater detail. We keep the
                detailed product comparisons there rather than repeating the
                same information on this page.
              </p>

              <p className="text-white/70 leading-relaxed mb-5">
                If you are unsure which type of insurance you need, you can
                first discuss your situation with Stockstrail. We can understand
                your requirement, existing cover and financial responsibilities
                before you explore the relevant policy options.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/insurance"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
                >
                  Explore Insurance
                </a>

                <a
                  href="/lets-talk"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
                >
                  Talk to Us
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mid-page contact CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed mb-5">
            Not sure which financial service or protection option fits your
            situation? Talk to us first. We can understand your requirement and
            help you decide what to explore next.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/lets-talk"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
            >
              Talk to Us
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=919736304663&text=Hi+Stockstrail%2C+I%27d+like+to+know+more+about+your+services%21&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-work-sans font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose Stockstrail for These Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'One-Stop Financial Solution',
                desc: 'Motor insurance, travel insurance, ULIPs, guaranteed plans, mutual funds, FDs, loans, and Demat account opening - everything in one place with one trusted team.',
              },
              {
                title: 'Multi-Provider Comparison',
                desc: 'We compare plans from multiple insurance companies and financial institutions to ensure you get the best coverage and best value for your specific need.',
              },
              {
                title: 'Transparent, Jargon-Free Guidance',
                desc: 'We break down every product in simple, clear language - explaining what you are buying, what it covers, and what it costs. No hidden charges, no pressure.',
              },
              {
                title: 'End-to-End Documentation Support',
                desc: 'From filling out applications to submitting documents and tracking approvals - our team handles it all. We also guide you through the claims process.',
              },
              {
                title: 'Ongoing Support',
                desc: 'Our relationship does not end when your policy is issued. We provide support for renewals, policy reviews, fund switches, and claim settlements.',
              },
              {
                title: 'Client-Focused Recommendations',
                desc: 'Every recommendation is based on what genuinely serves your best interest - not which product pays the highest commission.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Consider Stockstrail's Financial Protection Services?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Vehicle owners across India who need mandatory and comprehensive motor insurance',
              'Frequent travellers - domestic and international - who want complete travel protection',
              'Adventure tourists in Himachal Pradesh and Uttarakhand needing specialised travel cover',
              'Long-term wealth builders who want market-linked returns through ULIPs with life cover',
              'Conservative investors who want guaranteed, predictable returns with zero market risk',
              'Parents planning for children\'s education, marriage, or other future milestones',
              'Individuals approaching retirement who want risk-free wealth accumulation',
              'Business owners wanting to protect personal and business assets comprehensively',
              'Taxpayers and investors who need error-free, secure tax filing for their capital gains and assets',
              'Anyone wanting a single financial partner for all investment and protection needs',
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <div className="text-stockstrail-green-light text-2xl font-bold">→</div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Get Started
          </h2>

          <div className="space-y-4">
            {[
              'Identify Your Need: Which service fits your current situation - motor insurance renewal, travel insurance, a ULIP, guaranteed plan, or tax filing?',
              'Discuss with Our Specialists: Connect with our advisors. Share your requirements, budget, and timeline.',
              'Receive Personalised Recommendations: We compare multiple providers and give you a clear comparison of options.',
              'Submit Documentation: Our team guides you through the documentation process for your chosen service.',
              'Ongoing Support: After enrolment, we continue to support you with renewals, fund switches, claims assistance, and more.',
            ].map((step, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
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

      <ServiceFAQSection faqs={faqs} />
      <ServiceGEOSection serviceName="Complete Financial Protection Services" />

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-white mb-4">
            Ready to Secure Your Complete Financial Future?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
            Reach out to Stockstrail today and take the first step towards complete financial protection and long-term wealth creation - with zero pressure, complete transparency, and expert guidance at every step.
          </p>
          <a
            href="/lets-talk"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
          >
            Get Personalised Recommendations
          </a>
        </div>
      </section>
    </Layout>
  );
}
