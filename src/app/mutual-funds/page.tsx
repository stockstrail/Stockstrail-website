import type { Metadata } from 'next';
import Layout from '@/components/layout/Layout';
import Image from "next/image";
import ImageCarousel from '@/components/ui/ImageCarousel';

export const metadata: Metadata = {
  title: 'Mutual Funds Investment Guide | Grow Your Wealth with Stockstrail',
  description:
    "Learn about mutual funds, how they work, and why they're ideal for wealth creation. Get professional fund management, diversification, and low entry barriers with Stockstrail.",
  keywords:
    'mutual funds, SIP, wealth creation, investment, equity funds, debt funds, hybrid funds',
  openGraph: {
    title: 'Mutual Funds Investment Guide | Grow Your Wealth with Stockstrail',
    description:
      "Learn about mutual funds, how they work, and why they're ideal for wealth creation.",
    url: 'https://www.stockstrail.in/mutual-funds',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Funds Investment Guide | Grow Your Wealth with Stockstrail',
    description:
      "Learn about mutual funds, how they work, and why they're ideal for wealth creation.",
  },
  alternates: {
    canonical: 'https://www.stockstrail.in/mutual-funds',
  },

};

export default function MutualFunds() {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-72 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Mutual Funds. Built Around Your Goals.
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Whether you're starting a SIP or investing a lump sum, we help you explore mutual funds based on your goals, risk profile and investment horizon.
          </p>
        </div>
      </section>

      

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white/5 group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300 flex items-center justify-center">
              <div className="relative w-full aspect-video">
                <ImageCarousel
                  images={[
                    {
                      src: '/hero/mutual-funds-sip-investment.webp',
                      alt: 'SIP monthly investment of Rs 500 growing into wealth tree symbolising mutual fund returns in India',
                    },
                    {
                      src: '/hero/equity-debt-hybrid-mutual-funds.webp',
                      alt: 'Mutual fund portfolio diversification across equity debt and gold asset classes at Stockstrail',
                    }
                  ]}
                  className="w-full h-full rounded-2xl"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                What is a Mutual Fund?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
               A mutual fund brings money from many investors together and invests it across assets such as stocks, bonds and government securities. Each fund has its own investment objective and is managed by a professional fund manager.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                Think of it as a simple way to invest in a basket of investments instead of choosing every stock or bond yourself. For example, an equity mutual fund can invest across companies and sectors, giving you diversification through a single fund.
              </p>
              <p className="text-white/80 leading-relaxed">
                There are different types of mutual funds, including equity, debt and hybrid funds, with different levels of risk and objectives. The right fund depends on your goals, risk profile and investment horizon. You can invest through a SIP or a lump sum, depending on your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA after 'What is a Mutual Fund' */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Explore Mutual Funds - Start Investing
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Invest in Mutual Funds?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Start Small, Invest Regularly
              </h3>
              <p className="text-white/80">
                SIPs make it possible to start with a manageable amount and invest regularly without needing a large amount of money at once.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Professional Fund Management
              </h3>
              <p className="text-white/80">
                Experienced fund managers research and monitor the portfolio according to the fund&apos;s investment objective, so you do not have to select every security yourself.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Diversification
              </h3>
              <p className="text-white/80">
                A mutual fund can spread your money across multiple securities, companies, sectors and asset classes, reducing dependence on a single investment.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Easy Access
              </h3>
              <p className="text-white/80">
                Open-ended mutual funds generally allow investors to redeem their units on business days, subject to the scheme&apos;s terms, exit load and applicable rules.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Funds for Different Needs
              </h3>
              <p className="text-white/80">
                    With equity, debt, hybrid and other mutual fund categories available, investors can choose based on their goals, risk profile and investment horizon.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group">
              <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                Wealth Growth
              </h3>
              <p className="text-white/80">
               Mutual funds can help you build wealth over time through capital appreciation and, in some schemes, income distributions depending on the investment and market performance
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Types of Mutual Funds
          </h2>

          <div className="space-y-8">
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Equity Funds</h3>
              <p className="text-white/80 mb-4">
                Equity funds invest primarily in the shares of companies. These funds aim for long-term capital growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Suitable for:</p>
                  <p className="text-white/70">
                    Long-term investors, individuals looking to grow wealth, and those comfortable with market
                    fluctuations.
                  </p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Expected return:</p>
                  <p className="text-white/70">Typically higher, but dependent on market performance.</p>
                </div>
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Debt Funds</h3>
              <p className="text-white/80 mb-4">
                Debt funds invest in fixed-income instruments such as government bonds, corporate bonds, certificates
                of deposit, and other debt securities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Suitable for:</p>
                  <p className="text-white/70">Conservative investors, short-term goals, and individuals seeking stability.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Expected return:</p>
                  <p className="text-white/70">Moderate and relatively stable.</p>
                </div>
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-3">Hybrid Funds</h3>
              <p className="text-white/80 mb-4">
                Hybrid funds invest in a mix of equity and debt instruments. The combination provides both growth
                potential and stability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-semibold mb-2">Suitable for:</p>
                  <p className="text-white/70">New investors and those who want balanced risk and returns.</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-2">Expected return:</p>
                  <p className="text-white/70">Balanced growth with moderate stability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA after 'Types of Mutual Funds' */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-stockstrail-green-accent/5 border-2 border-stockstrail-green-accent/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-bg hover:bg-stockstrail-green-accent transition-all duration-300 font-work-sans font-medium"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
            Compare SIP Plans & Get Personalized Advice
          </a>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How Mutual Funds Work
          </h2>

          <div className="space-y-4">
            {[
              'An investor selects a mutual fund and invests either through SIP or lump sum.',
              'The fund manager pools the money of all investors.',
              'The pooled amount is invested in a diversified range of financial instruments.',
              'The value of the investments grows or falls based on market performance.',
              'Investors earn returns through capital appreciation, dividends, or interest.',
              'Investors can redeem their units at the prevailing NAV (Net Asset Value) whenever they need to exit the investment.',
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

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            SIP vs Lump Sum
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                SIP (Systematic Investment Plan)
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Investing a fixed amount every month</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Ideal for salaried individuals or beginners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Provides the benefit of rupee-cost averaging</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Builds discipline and habit of saving</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-lg">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Example:</strong> A monthly SIP of ₹2,000 for 15 years may potentially
                  grow into ₹10 - 12 lakh depending on the fund&apos;s performance.
                </p>
              </div>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">Lump Sum Investment</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Investing a large amount at once</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Suitable for those with surplus funds available</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Can be a good option if market valuations are attractive</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-stockstrail-green-light">✓</span>
                  <span>Allows immediate capital deployment</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 rounded-lg">
                <p className="text-sm text-white/80">
                  <strong className="text-white">Flexibility:</strong> You can combine both SIP and lump sum to optimize
                  your investment strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Illustrative Examples
          </h2>

          <div className="space-y-6">
            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-stockstrail-green-light font-semibold mb-2">Example 1:</p>
              <p className="text-white/80">
                Investing ₹1,000 per month for 10 years may grow to approximately ₹2 - 2.5 lakh depending on market
                conditions.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-stockstrail-green-light font-semibold mb-2">Example 2:</p>
              <p className="text-white/80">
                Investing ₹5,000 per month for 20 years may create a corpus of ₹50 - 60 lakh, assuming consistent market
                performance.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-stockstrail-green-light font-semibold mb-2">Example 3:</p>
              <p className="text-white/80">
                Investing ₹1,00,000 in a debt fund for one year may yield around ₹6,000 - 8,000 in returns, depending on
                interest rate conditions.
              </p>
            </div>

            <div className="bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <p className="text-white font-semibold mb-2 text-sm">⚠️ Disclaimer:</p>
              <p className="text-white/70 text-sm">
                These are illustrative examples only. Actual returns may vary based on market performance, fund
                selection, and investment period. Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Invest in Mutual Funds?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Individuals aiming to build long-term wealth',
              'Salaried professionals with regular income',
              "Parents planning for children's education",
              'Investors seeking higher returns than fixed deposits',
              'First-time investors who prefer professional management',
              'Anyone looking to diversify their investment portfolio',
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
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
            Understanding Risks
          </h2>

          <div className="space-y-4 mb-8">
            {[
              'Market volatility may cause fluctuations in value',
              'Returns are not guaranteed',
              'Short-term losses are possible',
              'Choosing unsuitable funds may affect performance',
            ].map((risk, index) => (
              <div key={index} className="flex gap-4 items-start bg-stockstrail-bg-light/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <span className="text-red-400 font-bold">!</span>
                <p className="text-white/80">{risk}</p>
              </div>
            ))}
          </div>

          <div className="bg-stockstrail-green-light/10 border-l-4 border-stockstrail-green-light rounded-lg p-6">
            <p className="text-white/90">
              <strong className="text-stockstrail-green-light">How to Manage Risk:</strong> These risks can be managed
              through long-term investing, diversification across different fund types, and selecting well-performing
              funds aligned with your risk profile.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Choose Stockstrail for Mutual Funds?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'AMFI-Registered', desc: 'Licensed mutual fund distributor ensuring compliance and transparency.' },
              { title: 'Transparent Guidance', desc: 'Recommendations based on your financial goals and risk tolerance.' },
              {
                title: 'Expert Selection',
                desc: 'Assistance in choosing from 100+ mutual fund schemes across all categories.',
              },
              { title: 'SIP Planning', desc: 'Customized SIP amounts tailored to your financial objectives and budget.' },
              { title: 'Paperless Process', desc: 'Simple, quick, and entirely online investment process.' },
              { title: 'Ongoing Support', desc: 'Portfolio reviews, rebalancing, and continuous support.' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            How to Start Investing in 6 Simple Steps
          </h2>

          <div className="space-y-4">
            {[
              'Share your basic details and complete KYC verification',
              'Discuss your financial goals with Stockstrail experts',
              'Choose between SIP (monthly) or lump sum investment',
              'Receive personalized fund recommendations',
              'Complete a simple online investment process',
              'Track and manage your portfolio anytime on the platform',
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
              href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
            >
              <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
              Start Your Mutual Fund Journey Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
