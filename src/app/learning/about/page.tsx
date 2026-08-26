import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Stockstrail Learning — Free Financial Education Hub for Indian Investors",
  description: "Discover Stockstrail Learning — a 100% free, structured financial education hub for Indian retail investors. Learn about Mutual Funds, SIPs, Tax Saving, Risk Profiling, and Personal Finance without jargon or sales pitches.",
  keywords: [
    "Stockstrail Learning",
    "Financial Education India",
    "Free Mutual Funds Course",
    "SIP Guide India",
    "Personal Finance Education",
    "SEBI Investor Education",
    "Financial Literacy India",
    "Tax Saving 80C ELSS",
    "Vikrant Bhardwaj Stockstrail",
    "Indian Retail Investor Guide"
  ],
  alternates: {
    canonical: "https://www.learning.stockstrail.in/about",
  },
  openGraph: {
    title: "About Stockstrail Learning — Free Financial Education Hub for Indian Investors",
    description: "A 100% free, structured financial education platform by Stockstrail. Master Mutual Funds, SIPs, Tax Planning, and Wealth Building with zero jargon and zero paywalls.",
    url: "https://www.learning.stockstrail.in/about",
    siteName: "Stockstrail Learning",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Stockstrail Learning — Free Financial Education Hub",
    description: "Structured, jargon-free personal finance and mutual fund courses for Indian investors. 100% free forever.",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Learning Home",
            "item": "https://www.learning.stockstrail.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://www.learning.stockstrail.in/about"
          }
        ]
      },
      {
        "@type": "EducationalOrganization",
        "name": "Stockstrail Learning",
        "url": "https://www.learning.stockstrail.in",
        "description": "Stockstrail Learning is the free financial education portal by Stockstrail, providing structured courses on mutual funds, SIPs, insurance, and tax planning for Indian retail investors.",
        "parentOrganization": {
          "@type": "FinancialService",
          "name": "Stockstrail",
          "url": "https://www.stockstrail.in"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Stockstrail Learning?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Stockstrail Learning is a 100% free, distraction-free educational hub created by Stockstrail. It offers structured, step-by-step courses on mutual funds, SIPs, personal finance, tax planning (Section 80C, 80D), and asset allocation specifically for Indian retail investors."
            }
          },
          {
            "@type": "Question",
            "name": "Is Stockstrail Learning completely free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Stockstrail Learning is completely free forever. There are no paywalls, no pop-up advertisements, no premium subscriptions, and no login requirements. Anyone can access all courses and lessons immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Is the course content aligned with Indian market rules and SEBI guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every lesson is written specifically for the Indian context using INR currency examples, SEBI fund categorisations, AMFI guidelines, and current Indian Income Tax Act regulations."
            }
          },
          {
            "@type": "Question",
            "name": "How does Stockstrail Learning connect to Stockstrail's main advisory services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Stockstrail Learning provides self-paced education. When you are ready to execute your financial plan, the main Stockstrail platform connects you with AMFI-registered Mutual Fund Distributor Vikrant Bhardwaj for objective, goal-based portfolio construction."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="relative overflow-hidden bg-stockstrail-bg text-white">
        {/* Glow backdrop blob */}
        <span className="glow-blob top-[-80px] left-1/2 -translate-x-1/2 h-[480px] w-[600px] pointer-events-none opacity-40" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 pt-12 pb-20 animate-fade-up space-y-16">
          
          {/* BREADCRUMB & HERO */}
          <header className="space-y-6">
            <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learning" className="hover:text-white transition-colors">Learning</Link>
              <span>/</span>
              <span className="text-stockstrail-green-light font-medium">About</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)]/10 border border-[color:var(--color-brand-green)]/30 px-3.5 py-1 text-xs font-semibold text-[color:var(--color-brand-green)] uppercase tracking-wider">
              ✦ About Stockstrail Learning
            </div>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-white tracking-tight"
              style={{ fontFamily: "var(--font-product-sans)" }}
            >
              Democratising Financial Literacy for <span className="gradient-text font-bold">Every Indian Investor.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed">
              We created Stockstrail Learning to bridge the massive gap between earning money and growing wealth in India. No paywalls, no pop-ups, no hidden product pitches — just structured, actionable, and jargon-free financial knowledge built for real life.
            </p>

            {/* KEY METRICS / STATS BAR */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { label: "100% Free", sub: "No Paywalls or Login" },
                { label: "India-First", sub: "INR, Tax & SEBI Rules" },
                { label: "Zero Ads", sub: "100% Unbiased Content" },
                { label: "Structured", sub: "Courses vs Random Blogs" },
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="card-surface rounded-2xl p-4 border border-white/10 text-center hover:border-[color:var(--color-brand-green)]/40 transition-all duration-300"
                >
                  <div className="text-lg sm:text-xl font-bold text-stockstrail-green-light">{stat.label}</div>
                  <div className="text-xs text-white/60 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </header>

          {/* THE PROBLEM WE SOLVE */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="max-w-3xl space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
                Why Traditional Financial Advice Fails Retail Investors
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Most people across India do not avoid investing because they lack money. They stay away because personal finance content is either overly technical, buried under sales agendas, or fragmented across hundreds of clickbait blog posts.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Traditional Blogs */}
              <div className="card-surface rounded-2xl p-6 border border-red-500/20 bg-red-950/10 space-y-4">
                <div className="flex items-center gap-2 text-red-400 font-semibold text-base">
                  <span className="text-lg">✕</span> Traditional Financial Content
                </div>
                <ul className="space-y-3 text-sm text-white/70 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span><strong>Scattered & Fragmented:</strong> Isolated blog posts that leave you wondering where to actually begin.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span><strong>Product-Driven Pitches:</strong> Articles written to push high-commission ULIPs, credit cards, or risky trading apps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span><strong>US-Centric Advice:</strong> Content referencing 401(k)s or Roth IRAs that doesn&apos;t apply to Indian tax laws.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">•</span>
                    <span><strong>Intimidating Jargon:</strong> Complex financial terms used to make advisors sound smart and readers feel lost.</span>
                  </li>
                </ul>
              </div>

              {/* Stockstrail Learning */}
              <div className="card-surface rounded-2xl p-6 border border-[color:var(--color-brand-green)]/30 bg-[color:var(--color-brand-green)]/5 space-y-4">
                <div className="flex items-center gap-2 text-stockstrail-green-light font-semibold text-base">
                  <span className="text-lg">✓</span> The Stockstrail Learning Way
                </div>
                <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-stockstrail-green-light mt-0.5">•</span>
                    <span><strong>Structured Pathways:</strong> Sequential courses designed to build complete money mastery step-by-step.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stockstrail-green-light mt-0.5">•</span>
                    <span><strong>Zero Commercial Bias:</strong> No affiliate links, no paywalls, and no sponsored fund recommendations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stockstrail-green-light mt-0.5">•</span>
                    <span><strong>100% India-Centric:</strong> Built around Indian Income Tax (80C, 80D, LTCG), SEBI rules, and Indian AMCs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-stockstrail-green-light mt-0.5">•</span>
                    <span><strong>Jargon-Free Clarity:</strong> Real-life rupee examples, visual summary tables, and knowledge-check quizzes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* OUR FOUR CORE PILLARS */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-stockstrail-green-light font-semibold">Our Philosophy</div>
              <h2 className="text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
                The Four Pillars of Stockstrail Learning
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Every lesson, quiz, and guide on this platform is crafted around four uncompromising commitments to our readers.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  num: "01",
                  title: "India-Specific Context",
                  desc: "We write exclusively for Indian retail investors. From Section 80C deductions and Direct vs. Regular mutual fund expense ratios to SEBI's riskometer guidelines, every rule and calculation reflects Indian financial realities."
                },
                {
                  num: "02",
                  title: "Structured Curriculum Architecture",
                  desc: "Instead of random blog browsing, our learning hub operates like a structured academy. Lessons are organised into logical modules with key takeaways, real-world examples, and quick knowledge assessments."
                },
                {
                  num: "03",
                  title: "Complete Unbiased Open Access",
                  desc: "Financial education should never be behind a paywall. Stockstrail Learning is 100% free with no account setup required. We show zero pop-up ads and never sell your contact information."
                },
                {
                  num: "04",
                  title: "Bridge from Learning to Action",
                  desc: "Knowledge is most valuable when executed properly. Our courses empower you to make independent choices, while seamlessly offering access to certified advisory when you need personalized portfolio guidance."
                }
              ].map((pillar) => (
                <div 
                  key={pillar.num} 
                  className="card-surface rounded-2xl p-6 border border-white/10 hover:border-stockstrail-green-light/40 transition-all duration-300 space-y-3 group"
                >
                  <div className="text-2xl font-bold text-stockstrail-green-light/40 group-hover:text-stockstrail-green-light transition-colors">
                    {pillar.num}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CURRICULUM ARCHITECTURE */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-stockstrail-green-light font-semibold">Knowledge Tracks</div>
              <h2 className="text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
                What You Will Master Here
              </h2>
              <p className="text-base text-white/70 leading-relaxed">
                Our curriculum spans every critical dimension of personal finance and wealth management in India.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mutual Funds & SIPs",
                  desc: "Learn NAV, expense ratios, equity vs debt allocation, SIP compounding, and direct plans.",
                  href: "/learning/courses/mutual-funds-guide"
                },
                {
                  title: "Tax Saving Strategies",
                  desc: "Master Section 80C, 80D, ELSS, PPF, NPS, and capital gains tax optimization (LTCG/STCG).",
                  href: "/learning/courses/tax-saving-investments"
                },
                {
                  title: "Risk & Asset Profiling",
                  desc: "Understand how to evaluate risk tolerance, asset allocation split, and rebalancing principles.",
                  href: "/learning/courses/risk-management-basics"
                },
                {
                  title: "Insurance & Shielding",
                  desc: "Decode term life vs. ULIPs, health insurance coverage, and protecting family assets.",
                  href: "/learning/courses/insurance-planning"
                },
                {
                  title: "Emergency Cash & FD",
                  desc: "Build a 6-month safety net, emergency liquid reserves, and smart FD laddering.",
                  href: "/learning/courses/emergency-fund-building"
                },
                {
                  title: "Retirement & SWP",
                  desc: "Plan inflation-adjusted retirement corpuses and systematic withdrawal plans for monthly income.",
                  href: "/learning/courses/retirement-planning-india"
                }
              ].map((track, idx) => (
                <div key={idx} className="card-surface rounded-2xl p-5 border border-white/10 hover:border-stockstrail-green-light/40 transition-all duration-300 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{track.title}</h3>
                    <p className="text-xs text-white/65 leading-relaxed">{track.desc}</p>
                  </div>
                  <Link 
                    href={track.href} 
                    className="inline-flex items-center gap-1.5 text-xs text-stockstrail-green-light font-medium hover:text-white transition-colors"
                  >
                    Start Track →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* EDITORIAL STANDARDS & SEBI COMPLIANCE */}
          <section className="card-surface rounded-2xl p-8 border border-white/10 space-y-6 bg-white/[0.02]">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
                Our Editorial Standards & Accuracy Promise
              </h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Stockstrail Learning content is developed by financial professionals with hands-on advisory experience. We uphold rigorous editorial standards to ensure every line of text is accurate, objective, and compliant with regulatory guidelines.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 text-xs text-white/75">
              <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-1">
                <div className="font-semibold text-white text-sm mb-1">SEBI-Aware Content</div>
                <p>Aligned with SEBI investor education principles and official AMFI categorization rules.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-1">
                <div className="font-semibold text-white text-sm mb-1">Regular Tax Updates</div>
                <p>Continuously updated whenever Union Budgets or tax slabs alter investment returns.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/5 space-y-1">
                <div className="font-semibold text-white text-sm mb-1">Fact-Checked Numbers</div>
                <p>All calculations, historical return charts, and tax deductions are rigorously verified.</p>
              </div>
            </div>
          </section>

          {/* CONNECTION TO MAIN STOCKSTRAIL PLATFORM */}
          <section className="card-surface rounded-3xl p-8 sm:p-10 border border-[color:var(--color-brand-green)]/30 bg-gradient-to-b from-[color:var(--color-brand-green)]/10 to-transparent space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-block px-3 py-1 bg-stockstrail-green-light/20 border border-stockstrail-green-light/30 rounded-full text-xs font-semibold text-stockstrail-green-light">
                THE MAIN STOCKSTRAIL PLATFORM
              </div>
              <h2 className="text-3xl sm:text-4xl font-normal text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
                From Financial Education to <span className="gradient-text font-bold">Personalized Execution</span>
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Stockstrail Learning is the educational wing of <strong>Stockstrail</strong> — an AMFI-Registered Mutual Fund Distributor founded by <strong>Vikrant Bhardwaj</strong> (NISM Series V-A certified).
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                While Stockstrail Learning gives you the knowledge to understand your money, the main Stockstrail advisory platform helps you construct, review, and manage a goal-based portfolio tailored to your unique life circumstances.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <Link 
                href="/about" 
                className="p-5 rounded-2xl bg-black/30 border border-white/10 hover:border-stockstrail-green-light transition-all group"
              >
                <div className="text-stockstrail-green-light font-semibold text-sm group-hover:text-white transition-colors">
                  Main About Page →
                </div>
                <p className="text-xs text-white/60 mt-1">Read Stockstrail&apos;s story, founder credentials & advisory philosophy.</p>
              </Link>

              <Link 
                href="/check-risk-profile" 
                className="p-5 rounded-2xl bg-black/30 border border-white/10 hover:border-stockstrail-green-light transition-all group"
              >
                <div className="text-stockstrail-green-light font-semibold text-sm group-hover:text-white transition-colors">
                  Check Risk Profile →
                </div>
                <p className="text-xs text-white/60 mt-1">Free 5-minute online risk assessment tool for Indian investors.</p>
              </Link>

              <Link 
                href="/lets-talk" 
                className="p-5 rounded-2xl bg-black/30 border border-white/10 hover:border-stockstrail-green-light transition-all group"
              >
                <div className="text-stockstrail-green-light font-semibold text-sm group-hover:text-white transition-colors">
                  Schedule Consultation →
                </div>
                <p className="text-xs text-white/60 mt-1">Connect directly with certified advisor Vikrant Bhardwaj.</p>
              </Link>
            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="space-y-8 border-t border-white/10 pt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-stockstrail-green-light font-semibold">Got Questions?</div>
              <h2 className="text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {[
                {
                  q: "What is Stockstrail Learning, and who is it for?",
                  a: "Stockstrail Learning is a free, structured financial education hub created by Stockstrail. It is built for Indian retail investors, salaried professionals, first-time savers, and families who want clear, jargon-free knowledge about mutual funds, SIPs, insurance, and tax planning."
                },
                {
                  q: "Is there any cost, subscription, or login required?",
                  a: "No. Stockstrail Learning is 100% free forever. There are no subscriptions, no paywalls, no login barriers, and no advertisement pop-ups. You can read any course or lesson immediately."
                },
                {
                  q: "How are your courses different from reading finance blogs or watching videos?",
                  a: "Most blogs and videos offer scattered, opinionated, or US-focused advice. Our courses are structured sequentially like a curriculum — complete with step-by-step pathways, Indian tax examples, summary tables, and knowledge checks."
                },
                {
                  q: "Who writes and reviews the learning content?",
                  a: "Our content is curated by experienced financial advisory professionals and certified advisors at Stockstrail, strictly adhering to SEBI investor education guidelines and AMFI regulations."
                },
                {
                  q: "Can I get personalized financial planning after reading the courses?",
                  a: "Yes! If you want personalized advice, you can visit the main Stockstrail platform (stockstrail.in) to check your risk profile or book a consultation with AMFI-registered Mutual Fund Distributor Vikrant Bhardwaj."
                }
              ].map((faq, idx) => (
                <div key={idx} className="card-surface rounded-2xl p-6 border border-white/10 space-y-2">
                  <h3 className="text-base font-semibold text-white">{faq.q}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CALL TO ACTION */}
          <footer className="text-center pt-8 border-t border-white/10 space-y-6">
            <h2 className="text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              Ready to start your financial journey?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-base">
              Explore our free courses or connect with Stockstrail for certified financial planning.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <Link 
                href="/learning/courses" 
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-7 py-3.5 text-sm font-semibold text-[color:var(--color-brand-bg)] hover:bg-white transition-all shadow-lg hover:scale-105"
              >
                Explore All Free Courses →
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
              >
                Visit Main Website About Page
              </Link>
            </div>
          </footer>

        </div>
      </section>
    </>
  );
}
