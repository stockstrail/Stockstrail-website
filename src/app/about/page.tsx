'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/common/JsonLd';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  FileText,
  Clock,
  HeartHandshake,
  BadgeCheck,
  Target,
  Compass,
  MapPin,
  Calendar,
  Layers,
  BookOpen,
  Calculator,
  Scale,
  X,
  ExternalLink,
  Users,
  Percent,
  Check,
  TrendingUp,
  Award,
  Sparkles,
  AlertCircle,
  HelpCircle,
  Briefcase,
  PiggyBank,
  Building2,
  UserCheck,
  Globe2,
  GraduationCap,
} from 'lucide-react';

export default function AboutPage() {
  const [activeCertificate, setActiveCertificate] = useState<string | null>(null);

  // FAQ structured dataset for visible accordion and JSON-LD schema
  const faqs = [
    {
      question: 'What is Stockstrail and what can you help me with?',
      answer:
        'Stockstrail is an AMFI-Registered Mutual Fund Distributor (ARN-284122) founded by Vikrant Bhardwaj. We help everyday Indian families, working professionals, and global NRIs manage their money with complete honesty. We help you invest in mutual funds and SIPs, choose safe fixed deposits, protect your family with term insurance, get loans against mutual funds, open demat accounts, and check your investment risk comfort for free.',
    },
    {
      question: 'Who founded Stockstrail and what are his qualifications?',
      answer:
        'Stockstrail was founded by Vikrant Bhardwaj. He is an AMFI-Registered Mutual Fund Distributor (ARN-284122), holds the NISM Series V-A Mutual Fund Distributors Certification from the National Institute of Securities Markets, and has cleared the SEBI – Investor Certification Examination. He personally conducts client consultations and guides investment portfolios.',
    },
    {
      question: 'Do you work with NRIs and clients outside North India?',
      answer:
        'Yes, absolutely. A large number of our clients work with us digitally from cities across India—such as Mumbai, Bengaluru, Pune, Hyderabad, Delhi-NCR, Kolkata, Chennai, and tier-2/tier-3 towns—as well as NRIs living in the US, UK, UAE, Singapore, Canada, and Australia. We provide 100% online onboarding, video consultations over Google Meet or Zoom, and 24/7 mobile app portfolio tracking.',
    },
    {
      question: 'Do you charge any fee for consultations or portfolio reviews?',
      answer:
        'No. All initial consultations, risk assessments, and portfolio reviews at Stockstrail are 100% free (₹0). When you invest in mutual funds through our distributor code, we receive a standard commission directly from Asset Management Companies (AMCs) at zero extra cost to you. Our full commission schedule is openly published on our website.',
    },
    {
      question: 'How do you decide which mutual funds or investments to suggest?',
      answer:
        'We never start by selling a fund. First, we sit down with you to understand your monthly salary, living expenses, existing bank deposits, insurance policies, and when you will need the money. Only after understanding your real life do we suggest the right mix of mutual funds, safe deposits, and insurance.',
    },
    {
      question: 'Why should I take the free Risk Profile Assessment?',
      answer:
        'Because everyone has a different comfort level with money. If you take too much risk, you might panic when markets drop temporarily. If you take too little risk, inflation eats your savings. Our free 5-minute online quiz helps you find the right balance between equity mutual funds and safe deposits.',
    },
    {
      question: 'Can I get quick emergency money without selling my mutual funds?',
      answer:
        'Yes. Through our Loan Against Mutual Funds facility, you can get instant emergency credit at low interest rates without selling your mutual fund units or stopping your monthly SIP growth.',
    },
    {
      question: 'Where can I read your official disclosures and code of conduct?',
      answer:
        'We believe in 100% openness. You can read our full Commission Disclosure at stockstrail.in/commission-disclosure, view our revised Code of Conduct at stockstrail.in/CoC/revisedcoc.pdf, and read our Terms & Conditions at stockstrail.in/terms-and-conditions.',
    },
  ];

  // Comprehensive JSON-LD Schema Graph for SEO, AEO & GEO
  const jsonLdGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': 'https://www.stockstrail.in/about#webpage',
        url: 'https://www.stockstrail.in/about',
        name: 'About Stockstrail | Financial Planning & Investment Guidance in India',
        description:
          'Learn about Stockstrail—an AMFI-registered mutual fund distributor (ARN-284122) founded by Vikrant Bhardwaj. Honest, goal-first mutual fund, insurance, and financial planning across India.',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.stockstrail.in/#website',
          name: 'Stockstrail',
          url: 'https://www.stockstrail.in',
        },
        mainEntity: {
          '@type': 'FinancialService',
          '@id': 'https://www.stockstrail.in/#organization',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.stockstrail.in',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'About',
              item: 'https://www.stockstrail.in/about',
            },
          ],
        },
      },
      {
        '@type': ['FinancialService', 'Organization'],
        '@id': 'https://www.stockstrail.in/#organization',
        name: 'Stockstrail',
        url: 'https://www.stockstrail.in',
        logo: 'https://www.stockstrail.in/stockstrail.png',
        image: 'https://www.stockstrail.in/og-stockstrail.png',
        description:
          'Pan-India financial planning and investment guidance practice with deep roots in Himachal Pradesh and strong accessibility across North India. AMFI Registered Mutual Fund Distributor ARN-284122.',
        telephone: '+919736304663',
        email: 'connect@stockstrail.in',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Mata, Chintapurni Rd, near Punjab & Sind Bank, Moien',
          addressLocality: 'Chintpurni',
          addressRegion: 'Himachal Pradesh',
          postalCode: '177110',
          addressCountry: 'IN',
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'India',
          },
        ],
        founder: {
          '@type': 'Person',
          '@id': 'https://www.stockstrail.in/#founder',
          name: 'Vikrant Bhardwaj',
          jobTitle: 'Founder & AMFI-Registered Mutual Fund Distributor',
          hasCredential: [
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'AMFI Registration ARN-284122',
              credentialCategory: 'Mutual Fund Distributor',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Association of Mutual Funds in India (AMFI)',
              },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'NISM-Series-V-A: Mutual Fund Distributors Certification',
              recognizedBy: {
                '@type': 'Organization',
                name: 'National Institute of Securities Markets (NISM)',
              },
            },
            {
              '@type': 'EducationalOccupationalCredential',
              name: 'SEBI – Investor Certification Examination',
              recognizedBy: {
                '@type': 'Organization',
                name: 'Securities and Exchange Board of India (SEBI)',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.stockstrail.in/about#faq',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <Layout>
      <JsonLd data={jsonLdGraph} />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: CATCHY, NATURAL HUMAN TONE (RESIDENTS & NRIS) */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pb-24 bg-stockstrail-bg border-b border-white/10">
        {/* Subtle Ambient Lighting */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[360px] bg-stockstrail-green-light/10 blur-[150px] rounded-full" />
          <div className="absolute top-10 right-10 w-72 h-72 bg-stockstrail-green-accent/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-7">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
            <span className="text-stockstrail-green-light text-xs font-mono uppercase tracking-wider font-semibold">
              ABOUT STOCKSTRAIL · AMFI ARN-284122
            </span>
          </div>

          {/* Main Catchy Display Headline (Universal & Non-Region Specific) */}
          <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] max-w-4xl mx-auto">
            Grow your family&apos;s wealth. <br className="hidden sm:inline" />
            <span className="gradient-text">With advice you can finally trust.</span>
          </h1>

          {/* Deeply relatable, human-written hero paragraph with natural service links */}
          <p className="text-white/85 text-base sm:text-lg lg:text-xl font-work-sans leading-relaxed max-w-3xl mx-auto">
            Every rupee you save is meant for your family’s future—your children’s education, a comfortable home, or a peaceful retirement. We help you invest with complete peace of mind: choosing the right{' '}
            <Link href="/mutual-funds" className="text-stockstrail-green-light font-medium underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
              mutual funds
            </Link>{' '}
            for steady growth, protecting your loved ones with simple{' '}
            <Link href="/insurance" className="text-stockstrail-green-light font-medium underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
              term insurance
            </Link>
            , and keeping emergency cash safe in high-interest{' '}
            <Link href="/fixed-deposit" className="text-stockstrail-green-light font-medium underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
              fixed deposits
            </Link>
            . We listen first, explain everything in simple words, and never push products you don’t need.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/lets-talk"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-stockstrail-green-light text-[#002622] font-semibold text-sm hover:bg-stockstrail-green-accent transition-all shadow-[0_0_25px_rgba(0,255,151,0.25)] hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              Schedule Free Consultation
            </Link>

            <Link
              href="/check-risk-profile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all backdrop-blur-sm"
            >
              Check Your Risk Profile
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/80 hover:text-stockstrail-green-light text-sm font-medium py-2 px-3 transition-colors"
            >
              Explore All Services →
            </Link>
          </div>

          {/* Metric Trust Strip */}
          <div className="pt-8 border-t border-white/10 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-left">
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-stockstrail-green-light shrink-0" />
              <div>
                <div className="text-white text-xs font-semibold">AMFI Registered</div>
                <div className="text-white/50 text-[11px] font-mono">ARN-284122</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <Users className="w-5 h-5 text-stockstrail-green-light shrink-0" />
              <div>
                <div className="text-white text-xs font-semibold">200+ Families & NRIs</div>
                <div className="text-white/50 text-[11px]">Guided Personally</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <Percent className="w-5 h-5 text-stockstrail-green-light shrink-0" />
              <div>
                <div className="text-white text-xs font-semibold">₹0 Advisory Fee</div>
                <div className="text-white/50 text-[11px]">Zero Hidden Cost</div>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
              <Award className="w-5 h-5 text-stockstrail-green-light shrink-0" />
              <div>
                <div className="text-white text-xs font-semibold">NISM & SEBI</div>
                <div className="text-white/50 text-[11px]">Certified Founder</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OUR PURPOSE & STORY: DEEP EMOTIONAL STORYTELLING (WHY WE OPENED) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/[0.015] border-b border-white/10 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              OUR PURPOSE & STORY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white leading-tight">
              Built to solve the gap between what people earn and what they actually save.
            </h2>
            <p className="text-white/75 text-base sm:text-lg font-work-sans">
              Most people in India are capable earners, but underconfident investors. Here is why Stockstrail was born.
            </p>
          </div>

          {/* Story Narrative Box */}
          <div className="bg-[#01221f]/90 border border-white/15 rounded-3xl p-7 sm:p-10 shadow-2xl space-y-6 text-left font-work-sans text-white/90 text-base sm:text-lg leading-relaxed">
            <p>
              Stockstrail was not started to sell financial products. It was born to solve a real, everyday struggle: the huge gap between what people earn through years of hard work and what their money actually does for them.
            </p>
            <p>
              Most people in India earn well, but feel anxious when it comes to investing. They keep extra savings in low-interest bank accounts because the stock market seems confusing. They buy expensive 15 or 20-year insurance policies because a friendly agent promised &ldquo;guaranteed money,&rdquo; only to realize later that inflation ate away most of the gains. And almost everyone quietly blames themselves—feeling as if they are simply not smart enough with money.
            </p>
            <p className="text-stockstrail-green-light font-medium">
              It was never your fault. The financial world was simply built to sell products with high commissions, using heavy jargon that made agents sound clever and families feel lost.
            </p>
            <p>
              Stockstrail was founded to give families the exact opposite experience. Whether you are a government teacher in Shimla, an engineer in Bengaluru, a small business owner in Delhi, an orchardist in Himachal, or an NRI working late nights in Dubai—our first step is always to <strong>listen, not sell</strong>.
            </p>
            <p>
              We sit with you to understand your real life: your monthly salary, your family responsibilities, and the dreams you have for your children. Then, and only then, do we suggest a simple, safe roadmap you can understand in 5 minutes.
            </p>
          </div>

          {/* Persona Grid: "Who We Help Build Financial Confidence" */}
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-product-sans font-bold text-white">
                Who We Help Build Financial Confidence
              </h3>
              <p className="text-white/60 text-sm font-work-sans mt-1">
                Whether you are starting your first job or planning for retirement, we have a clear path for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stockstrail-green-light/10 text-stockstrail-green-light flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="font-product-sans font-bold text-white text-base">
                    Young Salaried Professionals (22-35)
                  </h4>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-work-sans">
                  Starting your career, earning well, but unsure where to begin investing. We give you a simple, honest starting point with goal-mapped SIPs and tax-saving ELSS.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stockstrail-green-light/10 text-stockstrail-green-light flex items-center justify-center font-bold">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <h4 className="font-product-sans font-bold text-white text-base">
                    Parents & Growing Families
                  </h4>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-work-sans">
                  Juggling multiple goals at once: children’s higher education, buying a dream home, and planning for retirement. We structure your savings so all goals are funded on time.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-stockstrail-green-light/30 bg-stockstrail-green-light/[0.02] transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stockstrail-green-light/20 text-stockstrail-green-light flex items-center justify-center font-bold">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-product-sans font-bold text-white text-base">
                    Global NRIs & Expats
                  </h4>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-work-sans">
                  Working in the US, UK, UAE, Singapore, or Canada and looking for a reliable partner in India to manage NRE/NRO mutual funds, FDs, and family protection back home.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stockstrail-green-light/10 text-stockstrail-green-light flex items-center justify-center font-bold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-product-sans font-bold text-white text-base">
                    Government Employees & Teachers
                  </h4>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-work-sans">
                  Looking to supplement regular pensions and GPF with smart, safe mutual funds and high-interest fixed deposits that beat inflation year after year.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stockstrail-green-light/10 text-stockstrail-green-light flex items-center justify-center font-bold">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h4 className="font-product-sans font-bold text-white text-base">
                    Business Owners & Self-Employed
                  </h4>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-work-sans">
                  Managing irregular monthly cash flows, needing emergency business liquidity buffers through loans against mutual funds, and building secure family wealth.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-stockstrail-green-light/10 text-stockstrail-green-light flex items-center justify-center font-bold">
                    <Scale className="w-4 h-4" />
                  </div>
                  <h4 className="font-product-sans font-bold text-white text-base">
                    Experienced Investors & Retirees
                  </h4>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-work-sans">
                  Already investing in mutual funds, stocks, or LIC policies but wanting an honest, free second opinion to remove underperforming funds and cut hidden costs.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE REAL PROBLEM: SIMPLE, RELATABLE, HUMAN COMPARISON */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="max-w-3xl text-left space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              THE REALITY OF FINANCIAL ADVICE
            </div>
            <h2 className="text-3xl sm:text-4xl font-product-sans font-bold text-white leading-tight">
              Why making money decisions often feels so difficult.
            </h2>
            <p className="text-white/75 text-base font-work-sans">
              And how we do things differently to help you invest with complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left items-stretch">
            
            {/* The Common Trap */}
            <div className="p-7 sm:p-9 rounded-3xl bg-red-950/15 border border-red-500/25 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" />
                    WHAT USUALLY HAPPENS
                  </div>
                  <span className="text-[11px] text-red-400/80 font-mono">Costly Mistakes</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-product-sans font-bold text-white leading-snug">
                  What Usually Happens: Being Sold Plans You Don&apos;t Really Need
                </h3>

                <ul className="space-y-3.5 text-sm text-white/75 font-work-sans">
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Expensive Insurance Plans:</strong> Being sold 15 or 20-year policies that promise guaranteed returns but barely beat bank interest rates, locking up your money for decades.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Random Advice & Videos:</strong> Starting mutual funds or SIPs based on random social media videos or tips from friends without knowing when you will actually need the money.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Savings Losing Value:</strong> Keeping too much hard-earned cash sitting in normal savings accounts where rising prices eat away its purchasing power every year.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>NRI Confusion:</strong> NRIs finding it difficult to open Indian investment accounts or worrying about whether their family back home is being given honest advice.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Nobody Helps Later:</strong> When market prices go down, the bank sales agent who sold you the fund has usually changed jobs and no longer picks up your calls.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-red-500/20 text-xs text-red-300/70 font-mono">
                Result: Less money saved, locked funds, and constant worry.
              </div>
            </div>

            {/* The Stockstrail Way */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#012623] border border-stockstrail-green-light/40 flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light text-xs font-mono font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    HOW WE HELP YOU
                  </div>
                  <span className="text-[11px] text-stockstrail-green-light font-mono font-semibold">Simple & Honest</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-product-sans font-bold text-white leading-snug">
                  The Stockstrail Way: Clear Advice Tailored to Your Real Life
                </h3>

                <ul className="space-y-3.5 text-sm text-white/85 font-work-sans">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                    <span><strong>We Listen to You First:</strong> Before we suggest any investment, we sit down with you to understand your income, expenses, loans, family needs, and future plans.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                    <span><strong>Simple & Right Choices:</strong> We help you put your money where it belongs: good mutual funds for long-term growth, safe fixed deposits for emergency cash, and term insurance to protect your family.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                    <span><strong>Easy Online Setup for Everyone:</strong> Everything is done online from your phone in a few minutes, whether you live in Delhi, Bangalore, Himachal, or abroad in the US, UK, or Dubai.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                    <span><strong>You Talk Directly to the Founder:</strong> You speak directly with Vikrant Bhardwaj (ARN-284122). No junior sales agents, no sales quotas, and no consultation fee (₹0).</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-stockstrail-green-light font-mono font-semibold">
                  Result: Total peace of mind and steady wealth creation for your family.
                </span>
              </div>
            </div>

          </div>

          {/* Reassurance Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <div className="text-white font-product-sans font-bold text-base">
                Have old policies or mutual funds and want a free second opinion?
              </div>
              <div className="text-white/60 text-xs font-work-sans">
                Send them over to us. We will look at them honestly and tell you what to keep and what to change, for free.
              </div>
            </div>
            <Link
              href="/lets-talk"
              className="px-6 py-3 rounded-full bg-stockstrail-green-light text-[#002622] text-xs font-semibold hover:bg-stockstrail-green-accent transition-all shrink-0 shadow-[0_0_15px_rgba(0,255,151,0.2)]"
            >
              Get Free Portfolio Review
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. MEET VIKRANT BHARDWAJ: FOUNDER PROFILE & VISIBLE OFFICIAL CERTIFICATES */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/[0.015] relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              FOUNDER & LEAD ADVISOR
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              Meet Vikrant Bhardwaj — Founder & Lead Financial Advisor
            </h2>
            <p className="text-white/70 text-base font-work-sans">
              AMFI-Registered Mutual Fund Distributor (ARN-284122) & Certified Financial Investment Professional
            </p>
          </div>

          <div className="bg-[#01221f]/95 border border-white/15 rounded-3xl p-7 sm:p-10 shadow-2xl space-y-10 text-left">
            
            {/* Bio Narrative in warm, real-life, emotional human voice */}
            <div className="space-y-6 text-white/90 font-work-sans text-base sm:text-lg leading-relaxed border-b border-white/10 pb-8">
              <p>
                I grew up watching the people around me work tirelessly for every single rupee. My neighbors and family friends were government teachers, small shopkeepers, hospital nurses, and salaried office workers. They woke up early, kept monthly expense diaries, and sacrificed their own small wishes just so their children could go to good colleges and have a secure future.
              </p>
              
              <p>
                Yet, when it came to investing that hard-earned money, almost everyone was getting misled.
              </p>

              <p>
                I saw parents paying heavy yearly premiums for 20-year insurance policies after a bank agent promised them &ldquo;guaranteed returns&rdquo;—only to find out years later that the maturity money would barely pay for a couple of semesters of college fees. I saw young professionals leaving lakhs of rupees sitting idle in normal bank savings accounts because the stock market felt like gambling. And I saw relatives lose money in random WhatsApp stock tips because nobody had ever sat down to teach them how steady, safe investing actually works.
              </p>

              <p className="text-stockstrail-green-light font-medium">
                The saddest part was that people blamed themselves. They thought they were just &ldquo;bad with numbers.&rdquo;
              </p>

              <p>
                The truth is, nobody ever took the time to explain things simply. The finance industry was busy selling complicated products with high commissions, using heavy English jargon so everyday families would feel confused and just sign the papers.
              </p>

              <p>
                I started Stockstrail to change this completely.
              </p>

              <p>
                When you sit down with me—whether over a video call from Dubai or at a quiet table in Himachal—I never start by selling you a mutual fund or a policy. I start by asking about your life. What are your monthly expenses? What worries keep you awake at night? When will your daughter need her college fees? When do you want to retire peacefully?
              </p>

              <p>
                Only after understanding your real family needs do we create a simple plan together. We pick good{' '}
                <Link href="/mutual-funds" className="text-stockstrail-green-light underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
                  Mutual Funds
                </Link>{' '}
                to grow your wealth, safe{' '}
                <Link href="/fixed-deposit" className="text-stockstrail-green-light underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
                  Fixed Deposits
                </Link>{' '}
                for emergency money, and pure{' '}
                <Link href="/insurance" className="text-stockstrail-green-light underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
                  Term Insurance
                </Link>{' '}
                so your family is always protected. And before you invest a single rupee, you can{' '}
                <Link href="/check-risk-profile" className="text-stockstrail-green-light underline decoration-stockstrail-green-light/40 hover:text-white transition-colors">
                  check your risk comfort for free
                </Link>.
              </p>

              <p>
                When you reach out to Stockstrail, you will never talk to a call center executive or a junior salesperson. You will talk directly to me. Because your life’s savings deserve someone who cares about your family’s future as much as you do.
              </p>

              {/* Professional Certifications List */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-stockstrail-green-light uppercase tracking-wider font-semibold">
                  Official Regulatory Credentials
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/80 font-work-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span><strong>AMFI Registered:</strong> ARN-284122</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span><strong>NISM Series V-A:</strong> Qualified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span><strong>SEBI Certified:</strong> Investor Exam</span>
                  </div>
                </div>
              </div>

              {/* High-Impact Founder Quote */}
              <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-r from-[#012f2c] via-[#012623] to-[#01221f] border-l-4 border-stockstrail-green-light border-y border-r border-white/15 text-white shadow-2xl space-y-4">
                <div className="text-stockstrail-green-light text-3xl font-serif leading-none">
                  “
                </div>
                <p className="text-white text-base sm:text-lg lg:text-xl font-product-sans font-medium leading-relaxed italic">
                  You work 8 to 10 hours every day to earn for your family. My promise is simple: I will never treat your life’s savings like a sales quota. When you ask me for advice, I will only tell you what I would tell my own parents or my own family.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10 text-xs">
                  <div className="font-mono text-stockstrail-green-light font-bold text-sm">
                    — Vikrant Bhardwaj, Founder
                  </div>
                  <div className="text-white/50 font-mono">
                    AMFI ARN-284122 · NISM & SEBI Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Certifications Section (Visible Cards with Preview Lightbox) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-product-sans font-bold text-white flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-stockstrail-green-light" />
                    Verified Official Certifications & Regulatory Registration
                  </h3>
                  <p className="text-white/60 text-xs font-work-sans mt-0.5">
                    Official certifications issued by NISM and SEBI for Vikrant Bhardwaj. Click any certificate to view in full resolution.
                  </p>
                </div>
                <span className="text-xs font-mono text-stockstrail-green-light bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 px-3 py-1 rounded-full w-fit">
                  AMFI ARN-284122 · Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Certificate 1: NISM Series V-A */}
                <div
                  onClick={() => setActiveCertificate('/about_us/fund_distributor.jpg')}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-stockstrail-green-light/60 transition-all cursor-pointer group space-y-4 shadow-lg"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveCertificate('/about_us/fund_distributor.jpg')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-product-sans font-bold text-base group-hover:text-stockstrail-green-light transition-colors">
                        NISM Series V-A: Mutual Fund Distributors
                      </h4>
                      <div className="text-white/50 text-xs font-work-sans">
                        National Institute of Securities Markets (NISM)
                      </div>
                    </div>
                    <span className="text-xs text-stockstrail-green-light font-mono font-bold flex items-center gap-1">
                      View <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-stockstrail-green-light/30 transition-colors">
                    <Image
                      src="/about_us/fund_distributor.jpg"
                      alt="NISM Series V-A Mutual Fund Distributors Certification for Vikrant Bhardwaj"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-[11px] text-white/60 font-mono">
                    Registration No: NISM-202300189380 · AMFI ARN-284122
                  </div>
                </div>

                {/* Certificate 2: SEBI Investor Exam */}
                <div
                  onClick={() => setActiveCertificate('/about_us/sebi.jpg')}
                  className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-stockstrail-green-light/60 transition-all cursor-pointer group space-y-4 shadow-lg"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveCertificate('/about_us/sebi.jpg')}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-white font-product-sans font-bold text-base group-hover:text-stockstrail-green-light transition-colors">
                        SEBI – Investor Certification Examination
                      </h4>
                      <div className="text-white/50 text-xs font-work-sans">
                        Securities and Exchange Board of India & NISM
                      </div>
                    </div>
                    <span className="text-xs text-stockstrail-green-light font-mono font-bold flex items-center gap-1">
                      View <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-stockstrail-green-light/30 transition-colors">
                    <Image
                      src="/about_us/sebi.jpg"
                      alt="SEBI Investor Certification Examination for Vikrant Bhardwaj"
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="text-[11px] text-white/60 font-mono">
                    Joint SEBI & NISM Certification for Investor Guidance
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Consultation CTA Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-sm text-white/80 font-work-sans">
                Want Vikrant to review your existing mutual funds, insurance policies, or fixed deposits?
              </div>
              <Link
                href="/lets-talk"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stockstrail-green-light text-[#002622] font-semibold text-sm hover:bg-stockstrail-green-accent transition-all shrink-0"
              >
                <Phone className="w-4 h-4" />
                Schedule Free Portfolio Checkup
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW WE WORK: EDITORIAL 3-PHASE ADVISORY JOURNEY (NO AI 5-CARD GRID) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              HOW WE WORK TOGETHER
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              How We Work: What Happens From Your First Call to Your Lifelong Plan
            </h2>
            <p className="text-white/70 text-base sm:text-lg font-work-sans">
              No pressure, no confusing terms, and zero upfront fees. Here is our straightforward 3-phase journey.
            </p>
          </div>

          <div className="space-y-8 text-left">
            
            {/* Phase 1: Getting Clarity */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light font-mono font-bold text-sm flex items-center justify-center">
                    01
                  </span>
                  <h3 className="text-xl font-product-sans font-bold text-white">
                    Phase 1: Getting Clarity & Setting Real Goals
                  </h3>
                </div>
                <span className="text-xs font-mono text-stockstrail-green-light bg-stockstrail-green-light/10 px-3 py-1 rounded-full w-fit">
                  Before a single rupee moves
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono text-stockstrail-green-light uppercase">
                    Step 1 · The First 30 Minutes
                  </div>
                  <h4 className="text-lg font-product-sans font-bold text-white">
                    Step 1: We Listen, Not Pitch (The First 30 Minutes)
                  </h4>
                  <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                    You tell us what you want to achieve—buying a home, children’s college fund, saving taxes under 80C, or retirement. We review your current salary, bank FDs, and existing LIC policies without any judgment.
                  </p>
                  <div className="pt-2 text-xs text-white/50 font-mono">
                    ✓ Outcome: 100% clarity on where your money stands today.
                  </div>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="text-xs font-mono text-stockstrail-green-light uppercase">
                    Step 2 · Your Comfort Zone
                  </div>
                  <h4 className="text-lg font-product-sans font-bold text-white">
                    Step 2: Finding Your Risk Comfort & Real Timelines
                  </h4>
                  <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                    We evaluate how much market fluctuation you are comfortable with and attach every rupee to a specific time horizon so you never panic during short-term market corrections.
                  </p>
                  <div className="pt-2 text-xs text-white/50 font-mono">
                    ✓ Outcome: An asset allocation that lets you sleep peacefully.
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Action & Clean Online Setup */}
            <div className="p-7 sm:p-9 rounded-3xl bg-[#01221f]/90 border border-stockstrail-green-light/30 space-y-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-stockstrail-green-light text-[#002622] font-mono font-bold text-sm flex items-center justify-center">
                    02
                  </span>
                  <h3 className="text-xl font-product-sans font-bold text-white">
                    Phase 2: Clean Setup & Clear Choices
                  </h3>
                </div>
                <span className="text-xs font-mono text-stockstrail-green-light bg-stockstrail-green-light/10 px-3 py-1 rounded-full w-fit">
                  100% Online & Paperless
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs font-mono text-stockstrail-green-light uppercase">
                    Step 3 · Simple Choices
                  </div>
                  <h4 className="text-lg font-product-sans font-bold text-white">
                    Step 3: Hand-Picked Plans Explained in Simple Words
                  </h4>
                  <p className="text-white/75 text-sm font-work-sans leading-relaxed">
                    We select suitable mutual funds, safe fixed deposits, and pure term life insurance. We explain exactly <em>why</em> each option was chosen in simple language before you start.
                  </p>
                  <div className="pt-2 text-xs text-stockstrail-green-light font-mono">
                    ✓ Outcome: Zero hidden commissions, zero jargon.
                  </div>
                </div>

                <div className="space-y-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-xs font-mono text-stockstrail-green-light uppercase">
                    Step 4 · 10-Minute Setup
                  </div>
                  <h4 className="text-lg font-product-sans font-bold text-white">
                    Step 4: 100% Digital Account Setup on Your Phone
                  </h4>
                  <p className="text-white/75 text-sm font-work-sans leading-relaxed">
                    Whether you are in Delhi, Bangalore, Himachal, or abroad in the US or UAE, we complete your KYC online through authorized portals with zero physical paperwork.
                  </p>
                  <div className="pt-2 text-xs text-stockstrail-green-light font-mono">
                    ✓ Outcome: 24/7 mobile access to your investments.
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Lifelong Partnership */}
            <div className="p-7 sm:p-9 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light font-mono font-bold text-sm flex items-center justify-center">
                    03
                  </span>
                  <h3 className="text-xl font-product-sans font-bold text-white">
                    Phase 3: Lifelong Partnership & Ongoing Reviews
                  </h3>
                </div>
                <span className="text-xs font-mono text-white/60 bg-white/5 px-3 py-1 rounded-full w-fit">
                  Ongoing Support
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-product-sans font-bold text-white">
                  Step 5: Lifelong Reviews & Direct Founder Access
                </h4>
                <p className="text-white/75 text-sm sm:text-base font-work-sans leading-relaxed">
                  Financial planning is not a one-time transaction. As your salary grows, tax rules update, or market cycles fluctuate, we do periodic check-ins to keep your investments aligned with your life goals. You always have direct 1-on-1 access to founder Vikrant Bhardwaj—never an automated bot.
                </p>
                <div className="pt-2 text-xs text-stockstrail-green-light font-mono">
                  ✓ Outcome: Steady long-term compounding with someone you know by name.
                </div>
              </div>
            </div>

          </div>

          {/* Interactive CTA Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#012f2c] to-[#01221f] border border-stockstrail-green-light/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
            <div className="space-y-1 max-w-xl">
              <div className="text-white font-product-sans font-bold text-lg sm:text-xl">
                Ready to review where your money stands?
              </div>
              <div className="text-white/70 text-xs sm:text-sm font-work-sans">
                It takes 5 minutes to start. Check your risk comfort online or schedule a free chat with Vikrant.
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/check-risk-profile"
                className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-white text-xs font-medium hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all backdrop-blur-sm"
              >
                Check Risk Profile Free
              </Link>
              <Link
                href="/lets-talk"
                className="px-6 py-3 rounded-full bg-stockstrail-green-light text-[#002622] text-xs font-semibold hover:bg-stockstrail-green-accent transition-all shadow-[0_0_15px_rgba(0,255,151,0.25)]"
              >
                Talk to Us (₹0 Fee)
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SERVICES & SOLUTIONS: PLAIN-LANGUAGE VALUE MATRIX */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/[0.015] relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              WHAT WE HELP YOU WITH
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              Complete Financial Solutions for Every Goal
            </h2>
            <p className="text-white/70 text-base font-work-sans">
              Every investment has a clear purpose to protect and grow your family’s money.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* 1. Mutual Funds */}
            <Link
              href="/mutual-funds"
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/[0.02] transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-stockstrail-green-light font-semibold uppercase">
                  Long-Term Growth & SIPs
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Mutual Funds & Systematic Investment Plans (SIP)
                </h3>
                <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                  Carefully picked mutual funds to help your savings grow faster than inflation, save tax under Section 80C, and build wealth for future goals.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-mono font-semibold group-hover:translate-x-1 transition-transform">
                <span>Explore Mutual Funds</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 2. Fixed Deposits */}
            <Link
              href="/fixed-deposit"
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/[0.02] transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-stockstrail-green-light font-semibold uppercase">
                  Safe & Regular Income
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Safe Corporate & Bank Fixed Deposits (FD)
                </h3>
                <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                  Compare safe corporate and bank fixed deposits for guaranteed interest payouts and complete capital security.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-mono font-semibold group-hover:translate-x-1 transition-transform">
                <span>Compare Fixed Deposits</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 3. Insurance Protection */}
            <Link
              href="/insurance"
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/[0.02] transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-stockstrail-green-light font-semibold uppercase">
                  Family Protection
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Pure Term Life & Comprehensive Health Insurance
                </h3>
                <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                  High-cover pure Term Life Insurance and comprehensive Health Insurance without mixing confusing investment traps into family safety.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-mono font-semibold group-hover:translate-x-1 transition-transform">
                <span>Get Insurance Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 4. Loans Against MF */}
            <Link
              href="/loan"
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/[0.02] transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-stockstrail-green-light font-semibold uppercase">
                  Emergency Cash
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Instant Loan Against Mutual Funds
                </h3>
                <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                  Get instant emergency money at low interest rates against your mutual funds without selling your units or breaking your SIPs.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-mono font-semibold group-hover:translate-x-1 transition-transform">
                <span>Explore Loan Facility</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 5. Paperless Demat */}
            <Link
              href="/open-demat"
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/60 hover:bg-stockstrail-green-light/[0.02] transition-all flex flex-col justify-between group space-y-5"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-stockstrail-green-light font-semibold uppercase">
                  100% Online Account
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  100% Paperless Online Demat Account
                </h3>
                <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                  Open a free demat account in 10 minutes through authorized partners with zero paperwork and instant mobile app access.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-mono font-semibold group-hover:translate-x-1 transition-transform">
                <span>Open Demat Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* 6. Risk Profile Assessment */}
            <Link
              href="/check-risk-profile"
              className="p-6 sm:p-7 rounded-3xl bg-[#012623] border border-stockstrail-green-light/40 hover:border-stockstrail-green-light hover:bg-stockstrail-green-light/[0.06] transition-all flex flex-col justify-between group space-y-5 shadow-xl"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/20 border border-stockstrail-green-light/40 flex items-center justify-center text-stockstrail-green-light">
                  <Scale className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-stockstrail-green-light font-bold uppercase">
                  Free 5-Minute Quiz
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Free Online Investment Risk Profile Assessment
                </h3>
                <p className="text-white/80 text-sm font-work-sans leading-relaxed">
                  Take our free 5-minute online quiz to find out your comfort with risk and discover the best asset mix for your goals.
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-mono font-bold group-hover:translate-x-1 transition-transform">
                <span>Check Risk Profile Free</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. GEOGRAPHIC PRESENCE: REDESIGNED WITH RICH REGIONAL CONTEXT & INTERNAL LINKS */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              OUR REACH & ACCESSIBILITY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              Our Reach: Digital Worldwide with Strong Regional Presence
            </h2>
            <p className="text-white/70 text-base font-work-sans">
              Born in Himachal Pradesh, strong on-ground presence across North India, and digital wealth guidance nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            
            {/* 1. Pan-India Advisory (Primary) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#01221f] border border-stockstrail-green-light/30 flex flex-col justify-between space-y-6 shadow-2xl relative">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light text-xs font-mono font-semibold uppercase">
                  01 · PAN-INDIA & GLOBAL NRIS
                </div>
                <h3 className="text-2xl font-product-sans font-bold text-white">
                  Digital Across All of India & Abroad
                </h3>
                <p className="text-white/80 text-sm font-work-sans leading-relaxed">
                  Over 60% of our clients work with us digitally. Location is never a barrier to transparent financial planning.
                </p>
                <div className="space-y-2.5 text-xs text-white/75 font-work-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span>Active clients in Delhi, Mumbai, Bengaluru, Pune, Hyderabad, and Kolkata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span>100% paperless digital KYC & onboarding via authorized portals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span>1-on-1 video consultations on Google Meet and Zoom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                    <span>Serving global non-resident Indians (NRIs) managing Indian wealth</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] text-white/50 font-mono">
                  Relevant Services:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/mutual-funds" className="text-stockstrail-green-light hover:underline">Mutual Funds</Link> ·{' '}
                  <Link href="/open-demat" className="text-stockstrail-green-light hover:underline">Demat Account</Link> ·{' '}
                  <Link href="/check-risk-profile" className="text-stockstrail-green-light hover:underline">Risk Profile</Link>
                </div>
              </div>
            </div>

            {/* 2. North India Accessibility (Secondary) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-mono font-semibold uppercase">
                  02 · REGIONAL ACCESSIBILITY
                </div>
                <h3 className="text-2xl font-product-sans font-bold text-white">
                  Strong North India Ties
                </h3>
                <p className="text-white/75 text-sm font-work-sans leading-relaxed">
                  Our strongest on-ground presence with regular in-person meetings across key North Indian hubs.
                </p>
                <div className="space-y-2 text-xs text-white/70 font-work-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span><strong>Himachal Pradesh & Chandigarh Tricity</strong> (Mohali, Panchkula)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span><strong>Punjab</strong> (Ludhiana, Jalandhar, Amritsar, Patiala)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span><strong>Haryana & Delhi-NCR</strong> (Gurugram, Noida, Faridabad, Karnal)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span><strong>Uttarakhand</strong> (Dehradun, Haridwar, Rishikesh, Haldwani)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] text-white/50 font-mono">
                  Explore Planning:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/fixed-deposit" className="text-stockstrail-green-light hover:underline">Fixed Deposits</Link> ·{' '}
                  <Link href="/insurance" className="text-stockstrail-green-light hover:underline">Insurance Cover</Link> ·{' '}
                  <Link href="/lets-talk" className="text-stockstrail-green-light hover:underline">Book Meeting</Link>
                </div>
              </div>
            </div>

            {/* 3. Himachal Pradesh Roots (Origin) */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs font-mono font-semibold uppercase">
                  03 · ORIGIN & FOUNDATION
                </div>
                <h3 className="text-2xl font-product-sans font-bold text-white">
                  Himachal Pradesh Roots
                </h3>
                <p className="text-white/75 text-sm font-work-sans leading-relaxed">
                  Stockstrail was born in Himachal Pradesh, built on guiding local teachers, healthcare workers, and entrepreneurs.
                </p>
                <div className="space-y-2 text-xs text-white/70 font-work-sans">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span>Shimla, Solan, Kangra, and Dharamshala</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span>Mandi, Kullu-Manali, and Sirmaur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span>Hamirpur, Una, Bilaspur, and Chamba</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                    <span>Kinnaur and Lahaul-Spiti</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <div className="text-[11px] text-white/50 font-mono">
                  Trust & Governance:
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link href="/commission-disclosure" className="text-stockstrail-green-light hover:underline">Disclosures</Link> ·{' '}
                  <a href="/CoC/revisedcoc.pdf" target="_blank" className="text-stockstrail-green-light hover:underline">Code of Conduct</a> ·{' '}
                  <Link href="/learning" className="text-stockstrail-green-light hover:underline">Learning Hub</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. WHY STOCKSTRAIL: 6 TRUST PILLARS (PLAIN & HONEST) */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/[0.015] relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              WHY PEOPLE TRUST US
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              Why Families Trust Stockstrail: Built on Advice, Not Sales Quotas
            </h2>
            <p className="text-white/70 text-base font-work-sans">
              Here is why families and NRIs choose to work with Stockstrail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            {/* Pillar 1 */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-product-sans font-bold text-white">
                ₹0 Consultation & Financial Planning Fee
              </h3>
              <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                We never charge you for portfolio checkups or advice. Standard distributor commissions from mutual fund companies are openly declared.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-product-sans font-bold text-white">
                Direct 1-on-1 Access to Founder Vikrant Bhardwaj
              </h3>
              <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                You speak directly with Vikrant Bhardwaj (ARN-284122), a certified financial professional who understands your family’s real circumstances personally.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-product-sans font-bold text-white">
                Simple, Clear Explanations with Zero Jargon
              </h3>
              <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                We explain where every single rupee goes in simple words so you never feel confused or left in the dark about your money.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-product-sans font-bold text-white">
                Your Real Life Goals & Family Safety Come First
              </h3>
              <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                We never start with a product. We start with what you need: buying a home, children’s higher education, or a peaceful retirement.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-product-sans font-bold text-white">
                Lifelong Partnership Through Every Market Cycle
              </h3>
              <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                Investing is not a one-time transaction. When markets drop or your income grows, we do regular checkups to keep you on track.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-product-sans font-bold text-white">
                100% Registered with AMFI (ARN-284122) & Certified
              </h3>
              <p className="text-white/70 text-sm font-work-sans leading-relaxed">
                Fully registered with the Association of Mutual Funds in India (ARN-284122) and verified NISM/SEBI certified for your safety.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. RADICAL TRANSPARENCY: "READ BEFORE YOU DECIDE" */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/15 rounded-3xl p-8 sm:p-12 text-left">
            <div className="max-w-3xl mb-10 space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 text-stockstrail-green-light text-xs font-mono uppercase tracking-wider font-semibold">
                COMPLETE OPENNESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-bold text-white leading-tight">
                Complete Transparency: Disclosures, Code of Conduct & Legal Terms
              </h2>
              <p className="text-white/75 text-base font-work-sans leading-relaxed">
                Trust in money management comes from total honesty. Before you invest a single rupee with Stockstrail, you can read our official disclosures, code of conduct, and terms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/commission-disclosure"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-stockstrail-green-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    AMFI Mandated
                  </div>
                  <h3 className="text-lg font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors mb-1.5">
                    Mutual Fund Commission Disclosure
                  </h3>
                  <p className="text-white/60 text-xs font-work-sans leading-relaxed">
                    View our complete mutual fund distribution commission schedule across equity, debt, and hybrid schemes.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Disclosure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <a
                href="/CoC/revisedcoc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-stockstrail-green-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    Our Code
                  </div>
                  <h3 className="text-lg font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors mb-1.5">
                    Stockstrail Code of Conduct (PDF)
                  </h3>
                  <p className="text-white/60 text-xs font-work-sans leading-relaxed">
                    Review our formal commitments to client privacy, conflict mitigation, and honest communication.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-semibold group-hover:translate-x-1 transition-transform">
                  <span>View PDF</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              <Link
                href="/terms-and-conditions"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-stockstrail-green-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    Legal & Privacy
                  </div>
                  <h3 className="text-lg font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors mb-1.5">
                    Terms & Conditions & Privacy Policy
                  </h3>
                  <p className="text-white/60 text-xs font-work-sans leading-relaxed">
                    Read our terms of service, paperless KYC verification policies, and user data protection commitments.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Read Terms</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/lets-talk"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-stockstrail-green-light text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                    Direct Help
                  </div>
                  <h3 className="text-lg font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors mb-1.5">
                    Schedule a Free Consultation
                  </h3>
                  <p className="text-white/60 text-xs font-work-sans leading-relaxed">
                    Schedule a conversation directly with Vikrant Bhardwaj to discuss any investment or account query.
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-stockstrail-green-light font-semibold group-hover:translate-x-1 transition-transform">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. STOCKSTRAIL LEARNING & FREE FINANCIAL TOOLS */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white/[0.015] relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              FREE FINANCIAL LEARNING
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              Free Financial Education, Calculators & Planning Guides
            </h2>
            <p className="text-white/70 text-base font-work-sans">
              Explore our free guides, calculators, and articles at your own pace.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <Link
              href="/learning"
              className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/50 transition-all group hover:-translate-y-1 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Stockstrail Learning Hub & Free Mini-Courses
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-work-sans">
                  Free mini-courses covering Mutual Funds, SIP compounding, Section 80C/80D tax planning, and insurance basics.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-stockstrail-green-light font-mono font-medium">
                100% Free · No Paywalls
              </div>
            </Link>

            <Link
              href="/calculators"
              className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/50 transition-all group hover:-translate-y-1 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Interactive Financial Planning Calculators
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-work-sans">
                  Simulate SIP growth, lump-sum compounding, FD interest payouts, RD maturity, and loan EMIs in real time.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-stockstrail-green-light font-mono font-medium">
                Instant Interactive Simulations
              </div>
            </Link>

            <Link
              href="/blog"
              className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/50 transition-all group hover:-translate-y-1 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-stockstrail-green-light/10 border border-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-product-sans font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                  Practical Real-World Guides & Articles
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-work-sans">
                  Practical case studies, market perspectives, and clear breakdowns of common financial questions and tax updates.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 text-xs text-stockstrail-green-light font-mono font-medium">
                Practical Real-World Guides
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SEARCH-FRIENDLY & FACT-CHECKED FAQ SECTION */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <div className="text-stockstrail-green-light text-xs font-mono tracking-widest uppercase font-semibold">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white">
              Frequently Asked Questions About Stockstrail & Financial Guidance
            </h2>
            <p className="text-white/70 text-base font-work-sans">
              Direct, honest answers about our qualifications, fees, and how we work.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3.5 text-left">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 data-[state=open]:border-stockstrail-green-light/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-white text-base sm:text-lg font-product-sans py-5 hover:no-underline hover:text-stockstrail-green-light transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 text-sm sm:text-base leading-relaxed pb-6 font-work-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. FINAL CALL TO ACTION: HUMAN & CONVERSATIONAL */}
      {/* ========================================================================= */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 text-center relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#012f2c] to-[#01221f] border border-stockstrail-green-light/30 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-xl space-y-6">
          <div className="inline-block px-3.5 py-1 rounded-full bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light text-xs font-mono uppercase tracking-wider font-semibold">
            START YOUR CONVERSATION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-product-sans font-bold text-white leading-tight">
            Ready to Take the First Step Toward Your Family&apos;s Financial Future?
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto font-work-sans leading-relaxed">
            Tell us where you are today. We will help you understand what makes practical sense for your family’s future, with zero sales pressure and complete transparency.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/lets-talk"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-stockstrail-green-light text-[#002622] font-semibold text-sm hover:bg-stockstrail-green-accent transition-all shadow-[0_0_20px_rgba(0,255,151,0.3)] hover:scale-105"
            >
              Talk to Stockstrail
            </Link>

            <Link
              href="/check-risk-profile"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium text-sm hover:border-stockstrail-green-light hover:text-stockstrail-green-light transition-all backdrop-blur-sm"
            >
              Check Your Risk Profile
            </Link>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 font-work-sans">
            <span>📞 Call: <a href="tel:+919736304663" className="text-white hover:text-stockstrail-green-light underline">+91 97363-04663</a></span>
            <span>✉️ Email: <a href="mailto:connect@stockstrail.in" className="text-white hover:text-stockstrail-green-light underline">connect@stockstrail.in</a></span>
            <span>AMFI ARN-284122</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CERTIFICATE LIGHTBOX / FULL SCREEN MODAL */}
      {/* ========================================================================= */}
      {activeCertificate && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveCertificate(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Official Certificate Preview"
        >
          <div
            className="relative max-w-3xl w-full bg-[#01221f] border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2 text-white font-product-sans font-bold text-lg">
                <ShieldCheck className="w-5 h-5 text-stockstrail-green-light" />
                <span>Verified Official Certificate</span>
              </div>
              <button
                onClick={() => setActiveCertificate(null)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/50 border border-white/10 mb-4">
              <Image
                src={activeCertificate}
                alt="Official Certification for Vikrant Bhardwaj"
                fill
                className="object-contain p-2"
              />
            </div>

            <p className="text-white/60 text-xs text-center font-work-sans">
              National Institute of Securities Markets (NISM) & SEBI certified verification for Vikrant Bhardwaj (AMFI ARN-284122).
            </p>
          </div>
        </div>
      )}
    </Layout>
  );
}
