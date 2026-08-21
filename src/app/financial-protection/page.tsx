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

const financialProtectionSituations = [
  {
    title: "Just Started Earning",
    description:
      "You have started earning and want to do things right, but you are not sure whether you should start with insurance, savings or investments.",
  },
  {
    title: "Got Married. Things Changed.",
    description:
      "Your financial responsibilities are no longer just your own. Rent, family expenses, future plans and your partner's needs can change the protection you need.",
  },
  {
    title: "Your Health Cover Comes From Work",
    description:
      "Employer health insurance is useful, but it may not stay with you if you change jobs. It is worth knowing what you are actually covered for.",
  },
  {
    title: "You Already Have Insurance",
    description:
      "You bought a policy a few years ago, but you are not sure whether the cover is still enough. Your income, family and responsibilities may have changed since then.",
  },
  {
    title: "You Are Building Your Savings",
    description:
      "You have started investing and building wealth. The question is what happens to those savings if a major medical expense, loss of income or other unexpected event comes along.",
  },
  {
    title: "You Have Children Now",
    description:
      "School, higher education and other expenses are still years away, but the money has to be there when you need it. Your protection should support that plan.",
  },
  {
    title: "You Have a Big Loan",
    description:
      "A home loan, business loan or other large commitment means your family may have to carry the burden if something happens to your income.",
  },
  {
    title: "Retirement Is Getting Closer",
    description:
      "At this stage, it is not only about growing your money. You also need to think about healthcare, regular income and protecting what you have already built.",
  },
  {
    title: "You Work for Yourself",
    description:
      "When your income depends on your own work or business, an unexpected interruption can affect both your family expenses and your business commitments.",
  },
  {
    title: "You Simply Don't Know Where to Start",
    description:
      "You do not need to pick an insurance or investment product first. Start by looking at your income, family, loans, existing cover and future plans.",
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
            Why Choose Stockstrail for Your Financial Needs?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Advice Around Your Situation',
                desc: 'We first understand your goals, income, existing financial commitments and priorities. This helps us suggest options that fit your situation instead of taking a one-size-fits-all approach.',
              },
              {
                title: 'Compare Before You Decide',
                desc: 'Different financial products can solve different needs. We help you understand the available options, compare important features and costs, and make a decision with greater clarity.',
              },
              {
                title: 'Simple, Clear Explanations',
                desc: 'Financial products often come with terms that are difficult to understand. We explain the important details in straightforward language, including what a product offers, what it costs and what to consider before choosing it.',
              },
              {
                title: 'Support Beyond the Purchase',
                desc: 'Our role does not have to end after you choose a product. We can help you understand the next steps, organise the process and address questions that may arise later.',
              },
              {
                title: 'Multiple Financial Needs, One Place',
                desc: 'From mutual funds and insurance to fixed deposits, loans, tax-filing support and other financial services, you can discuss different financial needs with one team.',
              },
              {
                title: 'Recommendations With Your Interests in Mind',
                desc: 'We focus on whether a financial solution is appropriate for your needs, affordability and goals. The aim is to help you make a suitable decision, not simply sell you another product.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-5 text-center">
            You Plan for the Future. But What Protects You When Life Changes?
          </h2>

          <p className="max-w-3xl mx-auto text-center text-white/80 text-base sm:text-lg leading-relaxed mb-12">
            Your financial priorities change as life changes. A first salary, marriage,
            children, a home loan, ageing parents, a new business or retirement can all
            change what you need to protect. Stockstrail helps you look at your financial
            situation as a whole — so you can understand where you may have a gap and
            what deserves attention first.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {financialProtectionSituations.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <span className="text-stockstrail-green-light text-2xl font-bold">→</span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00E88F]">
              Not Sure What You Need? Start With a Conversation.
            </h2>

            <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-3xl mx-auto">
              You don&apos;t have to figure out the right financial product before you
              contact us. Tell us what&apos;s going on — your goals, responsibilities,
              existing investments or insurance, or simply what you&apos;re unsure about.
              We&apos;ll help you understand what needs attention and what you can
              consider next.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-[#003B37]/40 p-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00E88F] text-[#003B37] flex items-center justify-center font-bold">
                  01
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Tell Us What&apos;s Going On
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Share what you&apos;re trying to plan, protect or improve — even if
                    you&apos;re not sure where to begin.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#003B37]/40 p-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00E88F] text-[#003B37] flex items-center justify-center font-bold">
                  02
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    We Understand Your Situation
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    We look at your goals, income, responsibilities, existing
                    investments or insurance and what you&apos;re actually trying to
                    achieve.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#003B37]/40 p-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00E88F] text-[#003B37] flex items-center justify-center font-bold">
                  03
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Explore What Makes Sense
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    We explain the relevant options, what they do, what they cost
                    and where they may or may not fit your situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#003B37]/40 p-6">
              <div className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00E88F] text-[#003B37] flex items-center justify-center font-bold">
                  04
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Decide What You Want to Do
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    You decide the next step. If you choose to proceed, we help you
                    through the process and remain available afterwards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-white/70 mb-5">
              Not sure where to start? That&apos;s okay. Talk to us first.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/lets-talk"
                className="inline-flex items-center justify-center rounded-full border border-[#00E88F] px-7 py-3 text-[#00E88F] font-semibold transition hover:bg-[#00E88F] hover:text-[#003B37]"
              >
                Talk to Us
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=919736304663&text=Hi+Stockstrail%2C+I%27d+like+to+know+more+about+your+services%21&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#00E88F] px-7 py-3 text-[#003B37] font-semibold transition hover:opacity-90"
              >
                WhatsApp Us
              </a>
            </div>
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
