import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ImageCarousel from '@/components/ui/ImageCarousel';

export const metadata: Metadata = {
  title: "Insurance - Term & Health Plans | Stockstrail",
  description:
    "Compare term and health insurance plans, see real-life examples, and get tailored guidance to protect your family’s finances.",
  keywords:
    "term insurance, health insurance, life cover, family protection, Stockstrail insurance",
  alternates: {
    canonical: 'https://www.stockstrail.in/insurance',
  },
  openGraph: {
    title: "Insurance - Term & Health Plans | Stockstrail",
    description:
      "Secure your family’s future with Term & Health Insurance. Compare plans and get guidance from Stockstrail.",
    url: "https://www.stockstrail.in/insurance",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: ["/stockstrail.png"],
  },
};

export default function Insurance() {
  return (
    <Layout>
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
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Get Personalised Insurance Guidance
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
                alt="Term Insurance"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h- sm:max80-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
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
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
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

            <h4 className="text-white font-semibold mt-6 mb-2">How it works</h4>
            <ol className="list-decimal list-inside text-white/80 space-y-2">
              <li>Select sum insured (₹3L - ₹10L+)</li>
              <li>Pay annual premium</li>
              <li>Use network hospitals or claim reimbursement</li>
            </ol>

            {/* Real Case Examples */}
            <div className="mt-6 rounded-2xl p-6 bg-stockstrail-bg-light/30 border border-white/10">
              <h4 className="text-white font-semibold mb-3">Health - Real Cases</h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-semibold">Mr. Sharma - Dengue</p>
                  <p>₹78,000 bill fully covered by cashless claim.</p>
                </div>

                <div>
                  <p className="font-semibold">Mrs. Kavita - Surgery</p>
                  <p>₹1.2 lakh gallbladder surgery covered.</p>
                </div>

                <div>
                  <p className="font-semibold">Young Family</p>
                  <p>₹58,000 treatment covered under family floater.</p>
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
                alt="Health Insurance"
                width={520}
                height={360}
                loading="lazy"
                className="w-full object-contain max-h- sm:max80-h-[420px] group-hover:scale-105 transition-transform duration-300 bg-white/5"
            />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* COMPARISON TABLE */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Health Insurance vs Term Insurance
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr>
                  <th className="pb-3 text-white/80">Feature</th>
                  <th className="pb-3 text-white/80">Term Insurance</th>
                  <th className="pb-3 text-white/80">Health Insurance</th>
                </tr>
              </thead>

              <tbody>
                {[
                  [
                    "Purpose",
                    "Protects family after death",
                    "Covers medical expenses during life",
                  ],
                  [
                    "Payout",
                    "Lump sum (Sum Assured)",
                    "Hospital bills & treatment costs",
                  ],
                  [
                    "Duration",
                    "10 - 40 years long-term",
                    "Annual or multi-year renewals",
                  ],
                  ["Beneficiary", "Nominee / Family", "Policyholder"],
                ].map((row, i) => (
                  <tr key={i} className="border-t border-white/6">
                    <td className="py-4 text-white/80 font-semibold">{row[0]}</td>
                    <td className="py-4 text-white/70">{row[1]}</td>
                    <td className="py-4 text-white/70">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-white/70 mt-6 text-sm text-center">
            Both play different roles - term insurance protects family income
            after death while health insurance protects your savings during
            medical emergencies. Most households benefit from having both.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHO SHOULD BUY */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold gradient-text mb-6 text-center">
            Who should consider insurance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Individuals with dependents",
              "Salaried employees with loans",
              "Single earning members",
              "Parents planning long-term safety",
              "Working individuals",
              "Families with children",
              "Senior citizens",
              "People with medical history",
            ].map((item, idx) => (
              <div
                key={idx}
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

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 bg-stockstrail-bg-light/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-3">
            Ready to protect what matters?
          </h3>
          <p className="text-white/80 mb-6">
            Share basic details and we’ll suggest the right term & health plans
            for your needs.
          </p>

          <a
            href="https://insurance.assetplus.in/284122"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
          >
            Get personalised insurance advice
          </a>
        </div>
      </section>
    </Layout>
  );
}
