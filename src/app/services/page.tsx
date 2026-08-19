'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/common/SEO';
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
    title: 'Your Money. Your Dreams. Not Someone Else’s.',
    description:
      'We help you choose mutual funds based on your goals, risk profile and investment horizon. Whether you are starting a SIP or investing a lump sum, we help you explore suitable funds across equity, debt and hybrid categories and make an informed investment decision.',
    benefits: [
      'Professionally managed by experienced fund managers',
      'Diversification across multiple asset classes and sectors',
      'Start a SIP with as little as ₹500 per month',
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
    eyebrow: 'Guaranteed Returns',
    title: 'Secure Savings, Guaranteed Growth | FD',
    description:
      'Secure your savings with guaranteed returns through our fixed deposit schemes. Enjoy competitive interest rates with flexible tenure options ranging from 7 days to 10 years, backed by trusted financial institutions.',
    benefits: [
      '100% capital protection with guaranteed returns',
      'Competitive interest rates up to 7.5% per annum',
      'Flexible tenure from 7 days to 10 years',
      'Monthly, quarterly, or maturity interest payout options',
      'Tax-saving FD options under Section 80C',
    ],
    cta: 'APPLY FIXED DEPOSIT',
    ctaLink: '/fixed-deposit',
    imageSrc: '/services/FIX DEPOSIT.webp',
    imageAlt: 'Fixed Deposit',
  },
  {
    id: 'insurance',
    navLabel: 'Insurance',
    eyebrow: 'Protection',
    title: 'Comprehensive Coverage, Confident Living | Insurance',
    description:
      "Protect yourself and your loved ones with our comprehensive insurance solutions. From life insurance to health coverage, we offer tailored plans that provide financial security and peace of mind for life's uncertainties.",
    benefits: [
      'Comprehensive life and health insurance coverage',
      'Affordable premium plans with flexible payment options',
      'Quick and hassle-free claim settlement process',
      'Wide range of coverage options for individuals and families',
      'Expert guidance in choosing the right insurance plan',
    ],
    cta: 'APPLY INSURANCE',
    ctaLink: '/insurance',
    imageSrc: '/services/insurance.webp',
    imageAlt: 'Insurance',
  },
  {
    id: 'loan',
    navLabel: 'Loan',
    eyebrow: 'Quick Funding',
    title: 'Quick Approval, Flexible Terms | LOAN',
    description:
      'Get access to personal loans, home loans, and business loans with competitive interest rates and flexible repayment options. Our streamlined process ensures quick approval and minimal documentation.',
    benefits: [
      'Quick loan approval with minimal documentation',
      'Competitive interest rates and flexible terms',
      'Multiple loan options including personal, home, and business loans',
      'Dedicated relationship manager for personalized service',
    ],
    cta: 'APPLY LOAN',
    ctaLink: '/loan',
    imageSrc: '/services/BANK LOANS.webp',
    imageAlt: 'Loan Services',
  },
  {
    id: 'demat',
    navLabel: 'Demat Account',
    eyebrow: 'Market Access',
    title: 'Your Gateway to Stock Market | DEMAT ACCOUNT',
    description:
      'Open your Demat and Trading account to start your journey in the stock market. Trade stocks, mutual funds, ETFs, and more with our secure and user-friendly platform. Enjoy real-time market access with competitive brokerage charges.',
    benefits: [
      '100% paperless account opening process',
      'Secure digital locker for your securities',
      'Real-time market access for buying and selling',
      'Competitive brokerage charges and zero AMC',
      'User-friendly mobile and desktop trading platforms',
      'Dedicated customer support and assistance',
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
    eyebrow: 'Complete Coverage',
    title: 'Complete Financial Protection | OTHER SERVICES',
    description:
      'Beyond core investments, Stockstrail offers comprehensive additional financial services including Motor Insurance, Travel Insurance, Demat accounts, ULIPs, Guaranteed Plans, and Tax Filing. Each service is designed to provide complete protection, tax compliance, and convenience at every stage of life.',
    benefits: [
      'Motor Insurance for comprehensive vehicle protection',
      'Travel Insurance for domestic and international coverage',
      'Demat accounts for stock market participation',
      'ULIPs combining investment and life insurance',
      'Guaranteed Plans for risk-free, assured returns',
      'Seamless Tax Filing via KFintech partnership',
      'Professional guidance and transparent recommendations',
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

const ServicesPage: React.FC = () => {
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
      <SEO
        title="Services - Mutual Funds, Insurance, Fixed Deposits & Loans | Stockstrail"
        description="Explore our comprehensive financial services including Mutual Funds, Fixed Deposits, Insurance, and Loans. Expert guidance tailored to your needs."
        keywords="mutual funds services, fixed deposit, insurance plans, loans, financial services, SIP, investment services"
        url="/services"
      />

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

export default ServicesPage;
