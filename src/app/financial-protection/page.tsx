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
    canonical: '/financial-protection',
  },
  openGraph: {
    title: 'Complete Financial Protection & Tax Filing Services by Stockstrail - Motor Insurance, Travel Insurance, ULIPs & More',
    description:
      'Comprehensive financial and protection services including Motor Insurance, Travel Insurance, ULIPs, Guaranteed Plans, and Tax Filing.',
    url: 'https://stockstrail.in/financial-protection',
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
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Complete Financial Protection Services
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Complete Financial Protection Services by Stockstrail go far beyond investments and loans. Whether you need to protect your vehicle, secure your travel plans, build long-term wealth through market-linked insurance products, file your taxes easily, or create guaranteed returns for your future - Stockstrail brings all of these solutions under one trusted platform.
          </p>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <Image
                src="/financial-protection2.webp"
                alt="Financial Protection Services"
                width={720}
                height={420}
                loading="lazy"
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                Complete Financial Protection Services by Stockstrail
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Most people think of insurance only when something goes wrong. But real financial planning means protecting your assets, health, vehicles, and life goals before emergencies arise. That is exactly why Complete Financial Protection Services by Stockstrail are designed - to ensure you, your family, and your assets are always covered.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                At Stockstrail, we offer a full financial ecosystem. In addition to <strong>Motor Insurance</strong>, <strong>Travel Insurance</strong>, <strong>ULIPs</strong>, <strong>Guaranteed Return Plans</strong>, and <strong>Tax Filing</strong>, we also help you invest in <strong>Mutual Funds</strong>, open a <strong>Demat Account</strong>, access <strong>Loans</strong>, explore <strong>Fixed Deposits (FD)</strong>, and check your <strong>Risk Profile</strong>. We are your one-stop financial partner.
              </p>
              <p className="text-white/80 leading-relaxed">
                We serve clients across all stages of life and across pan India, with a special focus on Himachal Pradesh, Chandigarh Tricity, Delhi, Haryana, Uttar Pradesh, and Uttarakhand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA after intro */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Explore Additional Services - Get Help
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Our Financial & Protection Services
          </h2>

          <div className="space-y-8">
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Motor Insurance by Stockstrail - Protect Your Vehicle Across India</h3>
              <p className="text-white/80 mb-4">
                <strong>Motor insurance</strong> is a financial protection policy that covers your vehicle against accidents, theft, fire, natural disasters, and damage caused by or to third parties. In India, having at least third-party motor insurance is a legal mandate under the Motor Vehicles Act, 1988. But beyond legal compliance, motor insurance is essential financial protection against massive repair bills.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white font-semibold mb-2">Coverage Types:</p>
                  <ul className="space-y-2 text-white/70">
                    <li><strong>• Third-Party Liability:</strong> Minimum legal requirement covering damage or injury to a third party.</li>
                    <li><strong>• Comprehensive Motor Insurance:</strong> Complete protection for your own vehicle and third-party liability against accidents, theft, fire, natural and man-made disasters.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Key Add-On Covers:</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• <strong>Zero Depreciation:</strong> Claims settled at full repair cost without deducting vehicle depreciation.</li>
                    <li>• <strong>Roadside Assistance:</strong> 24/7 help for breakdowns and emergency towing.</li>
                    <li>• <strong>Engine Protection:</strong> Covers engine damage due to flooding or oil leaks.</li>
                    <li>• <strong>Return to Invoice:</strong> Receive original invoice value if stolen or total loss.</li>
                    <li>• <strong>NCB Protection & Personal Accident Cover</strong></li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-sm text-white/80">
                <strong>Why It Matters More in Hilly Terrain:</strong> For residents of Himachal Pradesh and Uttarakhand, motor insurance is an essential safety net. Mountain roads, hairpin bends, landslide-prone areas, and extreme weather conditions make vehicle damage or accidents significantly more likely. Stockstrail helps hill region vehicle owners get the right coverage with add-ons suited to high-altitude driving conditions.
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Travel Insurance by Stockstrail - Financial Safety for Every Journey</h3>
              <p className="text-white/80 mb-4">
                <strong>Travel insurance</strong> is a short-term financial protection plan that covers unexpected expenses and losses during domestic or international travel. Holidays are meant to be enjoyable - but medical emergencies abroad, lost baggage, or cancelled flights can turn a trip into a financial nightmare.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white font-semibold mb-2">Coverage Includes:</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>• Medical Emergency:</strong> Hospitalisation, treatment, and medical evacuation abroad.</li>
                    <li><strong>• Baggage Loss/Delay:</strong> Compensation for lost or delayed luggage.</li>
                    <li><strong>• Trip Cancellation:</strong> Refunds for non-recoverable booking costs due to emergencies.</li>
                    <li><strong>• Passport Loss Assistance:</strong> Cost of obtaining emergency travel documents.</li>
                    <li><strong>• Personal Accident Protection:</strong> Lump-sum compensation for accidental death or disability.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Who Should Buy?</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Families on domestic or international vacation</li>
                    <li>• Students going abroad for education</li>
                    <li>• Frequent business travellers</li>
                    <li>• Senior citizens travelling</li>
                    <li>• Adventure travellers (trekking, skiing)</li>
                    <li>• Anyone travelling internationally</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-sm text-white/80">
                <strong>Adventure Travel in HP & Uttarakhand:</strong> These regions are famous for trekking, skiing, and rafting. Standard policies may not cover high-risk sports. Stockstrail helps adventure travellers get policies that specifically cover trekking accidents, mountain rescue operations, altitude sickness treatment, and emergency evacuation.
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Traditional Life Insurance Plans - ULIPs & Guaranteed Return Plans</h3>
              <p className="text-white/80 mb-6">
                Traditional life insurance plans combine the dual benefits of life insurance protection and long-term wealth creation in a single product. These are ideal for individuals who want a disciplined financial plan that protects their family while building wealth for future goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-stockstrail-bg-light/50 rounded-lg p-6 border border-white/5">
                  <h4 className="text-white font-semibold text-lg mb-3">ULIPs (Unit Linked Insurance Plans)</h4>
                  <p className="text-white/80 text-sm mb-4">A portion of your premium goes towards life coverage and the remaining is invested in market-linked funds (equity, debt, or hybrid).</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>• Dual benefit:</strong> Life cover + market-linked investment</li>
                    <li><strong>• Fund flexibility & switching:</strong> Choose from and switch between equity, debt, or hybrid</li>
                    <li><strong>• Tax benefits:</strong> Section 80C deduction & Section 10(10D) exemption</li>
                    <li><strong>• Long-term wealth:</strong> Great for a 10 - 15+ year horizon</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-4">
                    <strong>Ideal for:</strong> Long-term investors comfortable with market risk, seeking tax benefits and market-linked returns.
                  </p>
                </div>

                <div className="bg-stockstrail-bg-light/50 rounded-lg p-6 border border-white/5">
                  <h4 className="text-white font-semibold text-lg mb-3">Guaranteed Return Plans</h4>
                  <p className="text-white/80 text-sm mb-4">Life insurance products that promise a fixed, pre-determined maturity amount regardless of market conditions.</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>• Guaranteed maturity:</strong> Fixed, assured amount with zero market risk</li>
                    <li><strong>• Life cover:</strong> Protection included throughout policy term</li>
                    <li><strong>• Tax benefits:</strong> Section 80C deduction & Section 10(10D) exemption</li>
                    <li><strong>• Goal-based planning:</strong> Ideal for children's education, marriage, or retirement</li>
                  </ul>
                  <p className="text-white/60 text-xs mt-4">
                    <strong>Ideal for:</strong> Conservative investors seeking certainty, stable returns, and risk-free wealth accumulation.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Tax Filing Services by Stockstrail - Partnered with KFintech</h3>
              <p className="text-white/80 mb-4">
                Filing your taxes correctly is vital to maintaining a clean financial profile and avoiding legal notices. Stockstrail has partnered with <strong>KFintech</strong> to provide a simplified, swift, and highly secure online tax filing experience. You can report your income, capital gains, investments, and claim appropriate deductions effortlessly.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-white font-semibold mb-2">Key Features:</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li><strong>• Direct Integration:</strong> Access the tax filing module securely through KFintech's official portal.</li>
                    <li><strong>• Investment Reporting:</strong> Seamlessly declare mutual funds, stock market trades, and capital gains.</li>
                    <li><strong>• Guided Digital Process:</strong> 100% paperless filing with clear step-by-step assistance.</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Why It Matters for Investors:</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Underreporting capital gains from stock market and mutual fund investments is one of the most common reasons for getting income tax notices. The integrated KFintech portal ensures that your investment transactions are captured accurately, helping you remain compliant while optimizing your tax benefits.
                  </p>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-sm text-white/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <strong>Get Started with Tax Filing:</strong> You can access your personalized tax filing link now. Share this link with your investors and start your process.
                </div>
                <a
                  href="https://gi9.in/KFINTH/v8qS3L"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 bg-stockstrail-green-accent text-[#012928] hover:bg-stockstrail-green-light rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                >
                  File Taxes via KFintech
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA after 'Our Financial & Protection Services' */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stockstrail-green-accent/5 border-2 border-stockstrail-green-accent/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-bg hover:bg-stockstrail-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Get Help Choosing The Right Service
          </a>
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
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
          >
            Get Personalised Recommendations
          </a>
        </div>
      </section>
    </Layout>
  );
}
