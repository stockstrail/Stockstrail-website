import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ImageCarousel from '@/components/ui/ImageCarousel';
import JsonLd from '@/components/common/JsonLd';

export const metadata: Metadata = {
  title: "Insurance Plans: Term, Health & Savings | Stockstrail",
  description:
    "Explore term insurance, health insurance and traditional savings plans. Compare coverage, understand waiting periods, benefits and policy terms, and explore suitable options with Stockstrail.",
  keywords:
    "term insurance, health insurance, traditional insurance, savings insurance, life insurance, health insurance plans, term insurance plans, traditional savings plans, insurance planning, Stockstrail",
  alternates: {
    canonical: "https://www.stockstrail.in/insurance",
  },
  openGraph: {
    title: "Insurance Plans: Term, Health & Savings | Stockstrail",
    description:
      "Explore term insurance, health insurance and traditional savings plans. Compare coverage, understand policy terms and explore suitable insurance options with Stockstrail.",
    url: "https://www.stockstrail.in/insurance",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: ["/og-stockstrail.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Plans: Term, Health & Savings | Stockstrail",
    description:
      "Explore term insurance, health insurance and traditional savings plans with comprehensive comparison and guidance.",
    images: ["/og-stockstrail.png"],
  },
};

const insuranceWebPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.stockstrail.in/insurance#webpage',
  url: 'https://www.stockstrail.in/insurance',
  name: 'Insurance Plans: Term, Health & Savings | Stockstrail',
  description:
    'Explore term insurance, health insurance and traditional savings plans. Compare coverage, understand waiting periods, benefits and policy terms with Stockstrail.',
  inLanguage: 'en-IN',
};

const insuranceServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': 'https://www.stockstrail.in/insurance#service',
  name: 'Stockstrail Insurance Advisory',
  description: 'Expert advice on Term Life Insurance, Health Insurance (Mediclaim), Motor, and Traditional Savings Plans.',
  url: 'https://www.stockstrail.in/insurance',
  provider: {
    '@type': 'FinancialService',
    name: 'Stockstrail',
    url: 'https://www.stockstrail.in',
  },
  areaServed: 'IN',
};

const insuranceFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I buy term insurance if I am young and have no dependants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The need for term insurance depends on your financial responsibilities rather than age alone. If nobody currently depends on your income and you have limited liabilities, your need may be different from someone supporting parents, carrying loans or planning a family. The important question is whether someone would face a significant financial loss if your income stopped."
      }
    },
    {
      "@type": "Question",
      "name": "How much term insurance cover do I actually need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no single cover amount that is right for everyone. Consider your income, dependants, outstanding loans, future financial responsibilities and the period for which your family may depend on your income. A useful starting point is to work backwards from the financial gap your family would face rather than choosing a round figure simply because it is commonly advertised."
      }
    },
    {
      "@type": "Question",
      "name": "Can my term insurance claim be rejected if I did not disclose a medical condition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-disclosure or inaccurate disclosure of material information can create problems during claim assessment. A medical test does not replace your responsibility to provide complete and accurate information during the application. Disclose your relevant medical history, lifestyle details and previous treatment honestly, and keep a copy of the information submitted with your proposal."
      }
    },
    {
      "@type": "Question",
      "name": "Does taking a medical test guarantee that my term insurance claim will be paid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A medical test is part of the insurer's underwriting process, but it does not replace the information you provide in the proposal. Your disclosures, policy terms, exclusions and applicable law can all matter when a claim is assessed. Complete and accurate disclosure is therefore important even when medical tests are required."
      }
    },
    {
      "@type": "Question",
      "name": "Is employer health insurance enough, or should I buy a personal health insurance policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Employer health insurance can provide useful protection, but its coverage depends on the employer's policy and your continued eligibility. A personal or family health insurance policy can provide additional protection that is not dependent entirely on your employment, subject to its own waiting periods, exclusions and coverage terms."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my health insurance has a waiting period for a pre-existing disease?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A disclosed pre-existing disease may be covered after the waiting period specified in the policy, subject to the product's terms. Waiting periods can vary by policy and condition, so check the applicable waiting period before buying. IRDAI currently states that the waiting period, including the pre-existing-disease waiting period, can be up to 36 months from commencement of the policy."
      }
    },
    {
      "@type": "Question",
      "name": "Can room-rent limits, co-payment or sub-limits reduce my health insurance claim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Room-rent or ICU limits, disease-specific sub-limits, co-payment and other policy restrictions can affect the amount payable under a claim. This is why comparing only the premium or sum insured can be misleading. Review the detailed policy terms and understand what portion of eligible expenses you may still have to pay."
      }
    },
    {
      "@type": "Question",
      "name": "Can I port my health insurance policy to another insurer without losing waiting-period credits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eligible health-insurance portability can allow certain credits, including applicable waiting-period and pre-existing-disease waiting-period credits, to transfer to the acquiring insurer, subject to the applicable rules and the new policy terms. Porting is generally handled around renewal, so check the prescribed timelines before making a request."
      }
    },
    {
      "@type": "Question",
      "name": "Are traditional and savings insurance plans really guaranteed-return products?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not every traditional or savings insurance plan works in the same way. Some benefits may be guaranteed under the policy, while other benefits, such as certain bonuses, may be non-guaranteed. Before buying, check the policy schedule and benefit illustration and understand exactly which benefits are guaranteed and which depend on the product terms."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I stop paying premiums on a traditional or savings insurance policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The outcome depends on the product, how long the policy has been active and its specific terms. Depending on the policy, stopping premiums can lead to consequences involving paid-up status, surrender value, lapse, revival or changes to future benefits. Before stopping premiums, check the policy documents to understand what benefits may continue, change or be lost."
      }
    }
  ]
}
export default function Insurance() {
  return (
    <Layout>
      <JsonLd data={insuranceWebPageSchema} />
      <JsonLd data={insuranceServiceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(insuranceFaqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* ========================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Insurance Isn&apos;t for Later. It&apos;s for What Matters Now.
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Explore term insurance, health insurance and traditional savings plans designed around your income, responsibilities and future goals. Understand your options, compare coverage and choose with confidence.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO + OVERVIEW */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-product-sans text-white mb-4">
              Insurance Options: Term, Health & Savings Plans
            </h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              Different insurance products protect different parts of your financial life. Term insurance can protect your family&apos;s income, health insurance can help manage medical expenses, and traditional savings plans can combine life protection with long-term policy benefits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Term Insurance",
                  desc: "Term insurance provides life cover for a defined period and can help protect your family from loss of income, loans and other financial responsibilities.",
                  link: "https://insurance.assetplus.in/284122/term",
                },
                {
                  title: "Health Insurance",
                  desc: "Health insurance helps cover eligible hospitalisation and medical treatment expenses, subject to the policy's coverage, exclusions and other terms.",
                  link: "https://insurance.assetplus.in/284122/health",
                },
                {
                  title: "Traditional & Savings Insurance",
                  desc: "Life insurance plans designed for long-term savings and policy benefits, with guaranteed or non-guaranteed benefits depending on the specific product and its terms.",
                  link: "https://www.pbpartners.com/v2/partner/vikrant-bhardwaj-una-1JFZ",
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-stockstrail-green-light text-sm hover:underline"
                    >
                      Explore {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR IMAGE + EXAMPLE */}
          <aside className="rounded-2xl p-10 bg-stockstrail-bg-light/40 border border-white/10">
            <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border border-white/10 bg-white/5">
              <ImageCarousel
                images={[
                  {
                    src: '/hero/term-health-insurance-plans.webp',
                    alt: 'Indian family protected under comprehensive life and health insurance coverage with Stockstrail',
                  },
                  {
                    src: '/hero/comprehensive-insurance-coverage.webp',
                    alt: 'Health insurance plan card for families and individuals offered by Stockstrail India',
                  }
                ]}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-white font-semibold mb-3">Quick Guide</h4>

            <div className="space-y-4 text-white/80">
              <div>
                <p className="text-white font-semibold mb-1">Term Insurance</p>
                <p className="text-sm">
                  Protects your family from loss of income and major financial responsibilities.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">Health Insurance</p>
                <p className="text-sm">
                  Helps protect your savings from eligible medical and hospitalisation expenses.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">Traditional &amp; Savings Insurance</p>
                <p className="text-sm">
                  Combines life insurance with long-term savings and policy benefits, depending on the specific product and policy terms.
                </p>
              </div>
            </div>

            <a
              href="https://insurance.assetplus.in/284122"
              className="inline-block mt-5 text-stockstrail-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light"
            >
              Explore Insurance Options
            </a>
          </aside>
        </div>
      </section>

      {/* CTA after intro overview */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="/lets-talk"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-stockstrail-green-light rounded-full text-black font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,151,0.3)] font-work-sans"
          >
            <div className="w-2.5 h-2.5 bg-black rounded-full" />
            Get Free Family Insurance Guidance
          </a>
          <a
            href="https://wa.me/919736304663?text=Hi%20Vikrant,%20I%20need%20unbiased%20advice%20on%20Term%20Insurance%20and%20Health%20Insurance."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/20 rounded-full text-white hover:border-emerald-400 hover:bg-white/10 text-sm font-medium transition-all"
          >
            <span>Ask Vikrant on WhatsApp</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TERM INSURANCE SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/services/insurance3.webp"
                alt="Family financial protection with term insurance"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-stockstrail-green-light font-semibold mb-4">
              Term Insurance: Protecting Your Family&apos;s Financial Future
            </h2>
            <p className="text-white/80 mb-4">
              Term insurance is a pure protection plan that provides life cover for a chosen period. If the insured person dies during the policy term, the nominee receives the applicable death benefit according to the policy terms. It can help protect your family from loss of income, outstanding loans and long-term financial responsibilities.
            </p>

            <h4 className="text-white font-semibold mb-2">What Can Term Insurance Protect?</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Family income if you are no longer there to provide it</li>
              <li>Outstanding home, education or other major loans</li>
              <li>Long-term financial responsibilities and future goals</li>
              <li>Financial security for people who depend on your income</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">How Term Insurance Works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Choose a sum assured based on your income, dependants, liabilities and financial goals.</li>
              <li>Select a policy term that matches the period your family may depend on your income.</li>
              <li>Declare your health, lifestyle and other relevant details honestly during the application and underwriting process.</li>
              <li>
                Pay premiums according to the selected payment schedule and keep the policy active
              </li>
              <li>If the insured person dies during the policy term, the applicable death benefit is paid to the nominee according to the policy terms.</li>
            </ol>

            {/* Real case examples */}
            <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10 mt-6">
              <h4 className="text-white font-semibold mb-3">Real-Life Situations</h4>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold text-white">Young professional with a home loan</p>
                  <p>
                    A person with a new home loan and family responsibilities can use term insurance
                    to create financial protection for outstanding liabilities and the family&apos;s
                    future income needs.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Primary income earner with dependants</p>
                  <p>
                    When a family depends mainly on one person&apos;s income, term insurance can
                    provide financial support to the nominee if the insured person dies during the
                    policy term, subject to the policy terms.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Parent planning for long-term responsibilities</p>
                  <p>
                    Parents may consider term insurance to help protect future commitments such as
                    children&apos;s education, household expenses and other long-term financial goals.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-white/70 mt-6 text-sm">
              Want to understand the difference between pure protection and
              savings-oriented life insurance? Read our{" "}
              <a
                href="/blog/term-insurance-vs-life-insurance-india-2026-which-one-truly-protects-your-family-stockstrail"
                className="text-stockstrail-green-light underline hover:no-underline"
              >
                term insurance vs life insurance guide
              </a>
              .
            </p>

            <div className="mt-6">
              <a
                href="https://insurance.assetplus.in/284122/term"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all"
              >
                Explore Term Insurance Plans
              </a>
            </div>

            {/* Mid-page CTA after Term Insurance
            <div className="mt-8">
              <a
                href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-stockstrail-green-accent/5 border-2 border-stockstrail-green-accent/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-bg hover:bg-stockstrail-green-accent transition-all duration-300 font-work-sans font-medium"
              >
                <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
                Talk to an Insurance Expert
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HEALTH INSURANCE SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* CONTENT */}
          <div className="rounded-2xl p-6 bg-stockstrail-bg-light/30">
            <h2 className="text-2xl sm:text-3xl text-stockstrail-green-light font-semibold mb-3">
              Health Insurance: Protect Your Savings From Medical Costs
            </h2>
            <p className="text-white/80 mb-4">
              Health insurance helps cover eligible hospitalisation and medical treatment expenses, subject to the policy&apos;s coverage, waiting periods, exclusions and other terms. Whether you are buying your first health insurance policy, looking beyond employer cover, or protecting your family, understanding the coverage before you buy can help you avoid costly surprises later.
            </p>

            <h4 className="text-white font-semibold mb-2"> What to Look For in Health Insurance</h4>
            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>
                Check waiting periods for pre-existing diseases and specific treatments.
              </li>
              <li>
                Review room-rent and ICU limits, disease-specific sub-limits and other coverage restrictions.
              </li>
              <li>
                Understand co-payment, exclusions and the share of eligible claim expenses you may have to pay.
              </li>
              <li>
                Check the cashless hospital network in the cities where you are likely to need treatment.
              </li>
              <li>
                Review restoration or recharge benefits and understand when they apply under the policy.
              </li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">How Health Insurance Works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Choose a health insurance plan and sum insured based on your health needs, family members and budget.</li>
              <li>Complete the application, disclose your medical history honestly, and provide any documents or medical tests required by the insurer.</li>
              <li>Pay the premium after the insurer accepts the proposal and keep the policy active by renewing it on time.</li>
              <li>When treatment is needed, use an eligible network hospital for cashless treatment where the policy and insurer&apos;s process allow it, or follow the reimbursement claim process as applicable.</li>
              <li>The insurer assesses the claim according to the policy terms, coverage, exclusions and applicable limits before approving or settling the eligible amount.</li>
            </ol>

            {/* Real Case Examples */}
            <div className="mt-6 rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10">
              <h4 className="text-white font-semibold mb-3">Real-World Situations</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold text-white">Young professional buying health insurance for the first time</p>
                  <p>
                    Even if you are healthy today, buying a personal health insurance policy early can help you secure coverage before new health conditions arise. The important part is understanding the waiting periods, exclusions, cashless network and other policy terms before choosing a plan.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Family looking beyond employer health cover</p>
                  <p>
                    Employer-provided health insurance can be useful, but its coverage may depend on your job and employer policy. A separate personal or family health insurance policy can provide additional protection, subject to its own terms, coverage and exclusions.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white">Family member with an existing health condition</p>
                  <p>
                    Pre-existing conditions can affect eligibility, waiting periods, premium or other policy terms depending on the insurer and product. Full and accurate disclosure during the application is important so the insurer can assess the risk correctly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://insurance.assetplus.in/284122/health"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-stockstrail-green-light rounded-full text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all"
              >
                Explore Health Insurance Plans
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex items-center justify-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 w-full max-w-md group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.12)] transition-all">
              <Image
                src="/services/insurance4.webp"
                alt="Family health insurance and hospitalisation protection"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRADITIONAL & SAVINGS INSURANCE SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* CONTENT */}
          <div>
            <h2 className="text-2xl sm:text-3xl text-stockstrail-green-light font-semibold mb-4">
              Traditional &amp; Savings Insurance: Protect, Save &amp; Plan
            </h2>

            <p className="text-white/80 mb-4">
              Traditional and savings-oriented life insurance plans combine life
              protection with long-term savings or other policy benefits. Depending
              on the product, benefits may be guaranteed or non-guaranteed, so it is
              important to understand the policy terms before you buy.
            </p>

            <h4 className="text-white font-semibold mb-2">
              What Are These Plans Designed For?
            </h4>

            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Long-term financial planning alongside life insurance protection</li>
              <li>Planned savings for future financial goals</li>
              <li>Policy-based benefits that depend on the specific product</li>
              <li>Options for people who prefer structured, long-term insurance plans</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">
              What Should You Check Before Buying?
            </h4>

            <ul className="list-disc list-inside text-white/80 space-y-2">
              <li>Which benefits are guaranteed and which are non-guaranteed</li>
              <li>Premium-paying term and overall policy term</li>
              <li>Maturity benefits, death benefits and applicable conditions</li>
              <li>Paid-up and surrender terms if you stop paying premiums early</li>
              <li>Charges, exclusions and other important policy conditions</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-2">
              How These Plans Work
            </h4>

            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Choose a product based on your financial goal, protection need and budget.</li>
              <li>Understand the premium-paying term, policy term and benefit structure.</li>
              <li>Review which benefits are guaranteed and which depend on the policy or declared bonuses.</li>
              <li>Pay premiums according to the selected schedule and keep the policy active.</li>
              <li>Receive applicable benefits according to the policy terms and conditions.</li>
            </ol>
          </div>

          {/* QUICK GUIDE */}
          <div className="rounded-2xl p-8 bg-stockstrail-bg-light/40 border border-white/10">
            <h4 className="text-white font-semibold mb-4">
              Before You Buy
            </h4>

            <div className="space-y-5 text-white/80">

              <div>
                <p className="text-white font-semibold mb-1">
                  Guaranteed Benefits
                </p>
                <p className="text-sm">
                  Check exactly which amounts or benefits are guaranteed under
                  the policy and when they become payable.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">
                  Non-Guaranteed Benefits
                </p>
                <p className="text-sm">
                  Some products may include benefits such as bonuses that are
                  not guaranteed and depend on the specific product terms.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">
                  Long-Term Commitment
                </p>
                <p className="text-sm">
                  Understand the premium commitment, policy duration and what
                  happens if you stop paying before the planned term.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold mb-1">
                  Read the Policy Terms
                </p>
                <p className="text-sm">
                  Compare the actual benefits, exclusions, surrender or
                  paid-up conditions and other policy terms before buying.
                </p>
              </div>

            </div>

            <a
              href="https://www.pbpartners.com/v2/partner/vikrant-bhardwaj-una-1JFZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-stockstrail-green-light underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-stockstrail-green-light"
            >
              Explore Traditional &amp; Savings Plans
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* INSURANCE COMPARISON TABLE */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-stockstrail-green-light mb-6 text-center">
            Term vs Health vs Traditional &amp; Savings Insurance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 px-4 text-white/80 font-semibold">
                    Feature
                  </th>
                  <th className="pb-4 px-4 text-white/80 font-semibold">
                    Term Insurance
                  </th>
                  <th className="pb-4 px-4 text-white/80 font-semibold">
                    Health Insurance
                  </th>
                  <th className="pb-4 px-4 text-white/80 font-semibold">
                    Traditional &amp; Savings Insurance
                  </th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Primary purpose",
                    "Protects family income and financial responsibilities",
                    "Helps cover eligible medical and hospitalisation expenses",
                    "Combines life protection with long-term savings and policy benefits",
                  ],
                  [
                    "What it protects",
                    "Dependants from financial loss after the insured person's death",
                    "Savings from eligible healthcare expenses",
                    "Long-term financial planning and policy-based benefits",
                  ],
                  [
                    "When benefits apply",
                    "Death benefit during the policy term, according to the policy terms",
                    "Eligible claims arising from covered medical treatment, subject to policy terms",
                    "Benefits payable according to the policy schedule and product terms",
                  ],
                  [
                    "Typical role",
                    "Income and liability protection",
                    "Healthcare cost protection",
                    "Long-term savings and life-insurance planning",
                  ],
                  [
                    "What to check",
                    "Sum assured, policy term, premium, exclusions and disclosure requirements",
                    "Waiting periods, exclusions, room/ICU limits, co-payment and cashless network",
                    "Guaranteed and non-guaranteed benefits, premium-paying term, policy term and surrender/paid-up conditions",
                  ],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/6 align-top">
                    <td className="py-4 px-4 text-white font-semibold">
                      {row[0]}
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      {row[1]}
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      {row[2]}
                    </td>
                    <td className="py-4 px-4 text-white/70">
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/70 mt-6 text-sm text-center max-w-4xl mx-auto">
            These products solve different financial risks. The suitable choice
            depends on your dependants, health needs, financial responsibilities,
            goals and the specific policy terms.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHICH INSURANCE MAY FIT YOUR SITUATION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-stockstrail-green-light mb-4 text-center">
            Which Insurance May Fit Your Situation?
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-center mb-8">
            Different insurance products solve different financial risks. Start with
            the risk you want to protect and then compare the policy features that
            matter for your situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3">
                Consider Term Insurance If...
              </h3>

              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>You have people who depend on your income.</li>
                <li>You have a home loan or other major financial liabilities.</li>
                <li>You want to protect your family&apos;s future financial goals.</li>
                <li>Your family would face a significant income gap if you were no longer there.</li>
              </ul>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3">
                Consider Health Insurance If...
              </h3>

              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>You want protection against eligible hospitalisation and medical expenses.</li>
                <li>You rely mainly on employer-provided health cover.</li>
                <li>You want separate protection for yourself or your family.</li>
                <li>You want to plan for healthcare costs without depending entirely on your savings.</li>
              </ul>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3">
                Consider Traditional &amp; Savings Insurance If...
              </h3>

              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>You are looking for long-term savings alongside life insurance protection.</li>
                <li>You prefer structured premium and policy commitments.</li>
                <li>You want to understand policy-based guaranteed or non-guaranteed benefits.</li>
                <li>You have a long-term financial goal that may fit the product&apos;s benefit structure.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/10">
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#021f1c] border border-stockstrail-green-light/30 text-center space-y-4 shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-product-sans">
            Have existing LIC or traditional policies? Get an honest second opinion.
          </h3>
          <p className="text-white/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Send us your policy details. We&apos;ll calculate your real inflation-adjusted returns and tell you transparently whether to keep, surrender, or restructure your cover—100% free of charge.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/lets-talk"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-stockstrail-green-light rounded-full text-black font-bold text-sm hover:bg-white hover:scale-105 transition-all duration-300 font-work-sans shadow-[0_0_20px_rgba(0,255,151,0.35)]"
            >
              Request Free Policy Review Call
            </a>
            <a
              href="https://insurance.assetplus.in/284122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 border border-white/20 text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-white/10 hover:border-emerald-400 transition-all"
            >
              <span>Instant Digital Portal</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
      {/* ========================================================= */}
      {/* INSURANCE FAQ SECTION */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-semibold text-stockstrail-green-light mb-4 text-center">
            Insurance FAQs: Questions Buyers Ask Before Choosing a Plan
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto text-center mb-8">
            Still comparing insurance options? Here are answers to practical
            questions about term insurance, health insurance and traditional
            savings plans. Learn more about{" "}
            <a
              href="/about"
              className="text-stockstrail-green-light underline hover:no-underline"
            >
              Stockstrail&apos;s approach to financial planning and insurance guidance
            </a>
            .
          </p>

          <div className="space-y-3">

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Should I buy term insurance if I am young and have no dependants?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                The need for term insurance depends on your financial
                responsibilities rather than age alone. If nobody currently
                depends on your income and you have limited liabilities, your
                need may be different from someone supporting parents, carrying
                loans or planning a family. The important question is whether
                someone would face a significant financial loss if your income
                stopped.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  How much term insurance cover do I actually need?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                There is no single cover amount that is right for everyone.
                Consider your income, dependants, outstanding loans, future
                financial responsibilities and the period for which your family
                may depend on your income. A useful starting point is to work
                backwards from the financial gap your family would face rather
                than choosing a round figure simply because it is commonly
                advertised.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Can my term insurance claim be rejected if I did not disclose a medical condition?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                Non-disclosure or inaccurate disclosure of material information
                can create problems during claim assessment. A medical test does
                not replace your responsibility to provide complete and accurate
                information during the application. Disclose your relevant
                medical history, lifestyle details and previous treatment
                honestly, and keep a copy of the information submitted with your
                proposal.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Does taking a medical test guarantee that my term insurance claim will be paid?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                No. A medical test is part of the insurer&apos;s underwriting
                process, but it does not replace the information you provide in
                the proposal. Your disclosures, policy terms, exclusions and
                applicable law can all matter when a claim is assessed. Complete
                and accurate disclosure is therefore important even when medical
                tests are required.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Is employer health insurance enough, or should I buy a personal health insurance policy?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                Employer health insurance can provide useful protection, but its
                coverage depends on the employer&apos;s policy and your continued
                eligibility. A personal or family health insurance policy can
                provide additional protection that is not dependent entirely on
                your employment, subject to its own waiting periods, exclusions
                and coverage terms.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  What happens if my health insurance has a waiting period for a pre-existing disease?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                A disclosed pre-existing disease may be covered after the
                waiting period specified in the policy, subject to the
                product&apos;s terms. Waiting periods can vary by policy and
                condition, so check the applicable waiting period before buying.
                IRDAI currently states that the waiting period, including the
                pre-existing-disease waiting period, can be up to 36 months from
                commencement of the policy.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Can room-rent limits, co-payment or sub-limits reduce my health insurance claim?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                Yes. Room-rent or ICU limits, disease-specific sub-limits,
                co-payment and other policy restrictions can affect the amount
                payable under a claim. This is why comparing only the premium or
                sum insured can be misleading. Review the detailed policy terms
                and understand what portion of eligible expenses you may still
                have to pay.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Can I port my health insurance policy to another insurer without losing waiting-period credits?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                Eligible health-insurance portability can allow certain credits,
                including applicable waiting-period and pre-existing-disease
                waiting-period credits, to transfer to the acquiring insurer,
                subject to the applicable rules and the new policy terms. Porting
                is generally handled around renewal, so check the prescribed
                timelines before making a request.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  Are traditional and savings insurance plans really guaranteed-return products?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                Not every traditional or savings insurance plan works in the same
                way. Some benefits may be guaranteed under the policy, while other
                benefits, such as certain bonuses, may be non-guaranteed. Before
                buying, check the policy schedule and benefit illustration and
                understand exactly which benefits are guaranteed and which depend
                on the product terms.
              </p>
            </details>

            <details className="group rounded-xl border border-white/10 bg-stockstrail-bg-light/30 p-5">
              <summary className="cursor-pointer list-none text-white font-semibold flex items-center justify-between gap-4">
                <span>
                  What happens if I stop paying premiums on a traditional or savings insurance policy?
                </span>
                <span className="text-stockstrail-green-light text-xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-white/70 mt-4 leading-relaxed">
                The outcome depends on the product, how long the policy has been
                active and its specific terms. Depending on the policy, stopping
                premiums can lead to consequences involving paid-up status,
                surrender value, lapse, revival or changes to future benefits.
                Before stopping premiums, check the policy documents to understand
                what benefits may continue, change or be lost.
              </p>
            </details>

          </div>
        </div>
      </section>
    </Layout>
  );
}
