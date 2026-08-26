'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceQuickNav, { type QuickNavItem } from '@/components/services/ServiceQuickNav';
import ServiceShowcaseCard, {
  type ServiceShowcaseCardProps,
} from '@/components/services/ServiceShowcaseCard';
import ServiceCTASection from '@/components/services/ServiceCTASection';

type ServiceData = Omit<ServiceShowcaseCardProps, 'index'> & { navLabel: string };

const services: ServiceData[] = [
  {
    id: 'mutual-funds',
    navLabel: 'Mutual Funds',
    eyebrow: 'Goal-Based Investing',
    title: 'Your Money. Your Dreams. Not Someone Else\u2019s.',
    description:
      'We help you choose mutual funds based on your goals, risk profile and investment horizon. Whether you are starting a SIP or investing a lump sum, we help you explore suitable funds across equity, debt and hybrid categories and make an informed investment decision.',
    benefits: [
      'Professionally managed by experienced fund managers',
      'Diversification across multiple asset classes and sectors',
      'Start a SIP with as little as \u20b9500 per month',
      'Mutual fund options across equity, debt and hybrid categories',
      'Regular portfolio review to keep your investments aligned with your needs',
    ],
    cta: 'EXPLORE MUTUAL FUNDS',
    ctaLink: '/mutual-funds',
    imageSrc: '/services/MUTUAL FUNDS.webp',
    imageAlt: 'Mutual Funds',
  },
  {
    id: 'risk-profile',
    navLabel: 'Risk Profile',
    eyebrow: 'Risk Assessment',
    title: 'Know Your Risk First. Then Choose Your Investment.',
    description:
      'Understand how much investment risk suits you with our 11-question risk assessment. Get a clear risk profile based on your risk tolerance, investment preferences and financial goals before choosing your investments.',
    benefits: [
      'Comprehensive 11-question risk profiling assessment',
      'Instant risk category assessment from Conservative to Aggressive',
      'Understand your risk tolerance and investment preferences',
      'Consider your investment horizon alongside your risk profile',
      'Personalized asset allocation recommendations based on your risk profile',
    ],
    cta: 'TAKE RISK ASSESSMENT',
    ctaLink: '/check-risk-profile',
    imageSrc: '/services/RISK PROFILE.webp',
    imageAlt: 'Risk Profile Assessment',
  },
  {
    id: 'fd',
    navLabel: 'Fixed Deposit',
    eyebrow: 'Fixed Deposit',
    title: 'Fixed Returns. Clear Expectations.| FD',
    description:
      'Looking for predictable returns without market-linked fluctuations? We help you explore Fixed Deposit options based on your tenure, interest rate and income needs, so you can choose an option that fits your financial plan.',
    benefits: [
      'Fixed interest rates with assured returns',
      'Flexible tenure options to suit different financial needs',
      'Competitive interest rates across available FD options',
      'Monthly, quarterly, or maturity-based interest payout options',
      'Tax-saving FD options under Section 80C,subject to eligibility',
      'FD options for different income and savings needs',
    ],
    cta: 'EXPLORE FIXED DEPOSITS',
    ctaLink: '/fixed-deposit',
    imageSrc: '/services/FIX DEPOSIT.webp',
    imageAlt: 'Fixed Deposit',
  },
  {
    id: 'insurance',
    navLabel: 'Insurance',
    eyebrow: 'Protection',
    title: 'Protect What Matters. Be Ready for What\u2019s Ahead | Insurance',
    description:
      'Protect your family, income and health with the right insurance cover. We help you compare term and health insurance options based on your coverage needs, budget and life stage, so you can choose protection that fits your financial plan.',
    benefits: [
      'Term and health insurance options for individuals and families',
      'Affordable premium options with flexible payment choices',
      'Coverage tailored to your protection needs and budget',
      'Expert support in comparing and choosing suitable plans',
      'Dedicated claim assistance with documentation and claim support',
    ],
    cta: 'EXPLORE INSURANCE',
    ctaLink: '/insurance',
    imageSrc: '/services/insurance.webp',
    imageAlt: 'Insurance',
  },
  {
    id: 'loan',
    navLabel: 'Loan',
    eyebrow: 'Loan Options',
    title: 'Need Funds? Explore the Right Loan for You.',
    description:
      'From Loan Against Mutual Funds to personal, home and business loans, we help you explore suitable borrowing options based on your needs, eligibility and repayment capacity.',
    benefits: [
      'Loan Against Mutual Funds for eligible mutual fund holdings',
      'Access liquidity without necessarily redeeming your investments',
      'Funding options for personal needs, a new home or growing a business',
      'Loan options based on your needs, eligibility and repayment capacity',
      'Support with documentation and the loan application process',
    ],
    cta: 'EXPLORE LOAN OPTIONS',
    ctaLink: '/loan',
    imageSrc: '/services/BANK LOANS.webp',
    imageAlt: 'Loan Services',
  },
  {
    id: 'demat',
    navLabel: 'Demat Account',
    eyebrow: 'Market Access',
    title: 'Ready to Start Investing in Stocks? Start with the Right Account| DEMAT ACCOUNT',
    description:
      'Open a Demat and Trading Account through our partner platforms and get ready to invest in stocks, ETFs and other market-linked securities. We help you understand the account-opening process and choose an option that suits your investing needs.',
    benefits: [
      'Start your stock market journey with a digital Demat & Trading Account',
      'Access stocks, ETFs and other market-linked investments',
      'Choose from multiple Demat account options',
      'Simple, paperless KYC and account opening',
      'Easy access through digital trading platforms',
      'Get started with investing once your account is active',
    ],
    cta: 'OPEN DEMAT ACCOUNT',
    ctaLink: '/open-demat',
    imageSrc: '/services/da.webp',
    imageAlt: 'Demat Account',
    imageFit: 'cover',
  },
  {
    id: 'others',
    navLabel: 'Other Services',
    eyebrow: 'More Services',
    title: 'More Ways to Protect, Plan & Grow.| OTHER SERVICES',
    description:
      'From motor insurance and tax filing to traditional savings policies and travel insurance, Stockstrail helps you take care of the important financial needs that often get overlooked. And there\u2019s more to explore as your needs evolve.',
    benefits: [
      'Motor insurance for cars, bikes and other vehicles',
      'Tax filing support to help you file correctly and on time',
      'Traditional savings and guaranteed-return insurance plans',
      'ULIP options for insurance and market-linked investment needs',
      'Travel insurance for domestic and international trips',
      'Professional support with documentation, renewals and other service needs',
    ],
    cta: 'EXPLORE OTHER SERVICES',
    ctaLink: '/financial-protection',
    imageSrc: '/services/OTHER SERVICES.webp',
    imageAlt: 'Other Services',
  },
];

const quickNavItems: QuickNavItem[] = services.map((s) => ({
  id: s.id as string,
  label: s.navLabel,
}));

const partners = [
  { name: 'AngelOne', logo: '/logos/angelone.webp' },
  { name: 'Alice Blue', logo: '/logos/aliceblue.webp' },
  { name: 'AssetPlus', logo: '/logos/assetplus.webp' },
  { name: 'Axis', logo: '/logos/axis.webp' },
  { name: 'Bandhan', logo: '/logos/bandhan.webp' },
  { name: 'DSP', logo: '/logos/dsp.webp' },
  { name: 'Edelweiss', logo: '/logos/edelweis.webp' },
  { name: 'Franklin', logo: '/logos/franklin.webp' },
  { name: 'Groww', logo: '/logos/groww.webp' },
  { name: 'HDFC', logo: '/logos/hdfc.webp' },
  { name: 'HDFC SKY', logo: '/logos/hdfcsky.webp' },
  { name: 'ICICI', logo: '/logos/icici.webp' },
  { name: 'ITI', logo: '/logos/iti.webp' },
  { name: 'Kotak', logo: '/logos/kotak.webp' },
  { name: 'LIC', logo: '/logos/lic.webp' },
  { name: 'Mirae', logo: '/logos/mirae.webp' },
  { name: 'Motilal', logo: '/logos/motilal.webp' },
  { name: 'Nippon', logo: '/logos/nippon.webp' },
  { name: 'PB Partners', logo: '/logos/pbpartners.webp' },
  { name: 'PGIM', logo: '/logos/pgim.webp' },
  { name: 'PPFAS', logo: '/logos/ppfas.webp' },
  { name: 'Quant', logo: '/logos/quant.webp' },
  { name: 'Quantum', logo: '/logos/quantum.webp' },
  { name: 'SBI', logo: '/logos/sbi.webp' },
  { name: 'Shriram', logo: '/logos/shriram.webp' },
  { name: 'Tata', logo: '/logos/tata.webp' },
  { name: 'Zerodha', logo: '/logos/zerodha.webp' },
];

// duplicate for seamless marquee
const scrollingPartners = partners.concat(partners);

const ServicesPageContent: React.FC = () => {
  // Scroll to section if URL contains a hash (on load and on hash changes)
  useEffect(() => {
    const headerOffset = 150; // fixed header + sticky quick-nav rail

    const scrollToHash = () => {
      if (typeof window === 'undefined') return;
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    scrollToHash();
    const timeoutId = window.setTimeout(scrollToHash, 50);

    window.addEventListener('hashchange', scrollToHash);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Layout>
      <ServiceHero />

      {/* Main content */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-[500px] bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto">
          <ServiceQuickNav items={quickNavItems} />

          <div className="space-y-24 sm:space-y-32">
            {services.map((service, index) => (
              <ServiceShowcaseCard key={service.id} index={index} {...service} />
            ))}
          </div>

          {/* Partners marquee */}
          <section className="mt-24 sm:mt-32 overflow-hidden">
            <div className="text-center mb-8">
              <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-3">
                Our Partners
              </h2>
              <p className="text-white/60 text-sm sm:text-base">
                Backed by 27+ leading AMCs, banks and insurers across India
              </p>
            </div>
            <div
              className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden relative"
              style={{
                maskImage:
                  'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            >
              <div className="partners-track animate-scroll">
                {scrollingPartners.map((partner, i) => (
                  <div
                    key={`partner-${i}`}
                    className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[200px] group"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="h-24 sm:h-32 w-auto object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      width={256}
                      height={128}
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <ServiceCTASection />
    </Layout>
  );
};

export default ServicesPageContent;
