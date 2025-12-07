'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { addReview, getRandomReviews } from '@/lib/reviews';
import { Review } from '@/lib/supabase';

const HeroLogo = () => (
  <div className="flex justify-center items-center gap-4 sm:gap-8 group w-full">
    {/* Mobile version */}
    <Image
      src="/1..gif"
      alt="Stockstrail Logo"
      className="w-32 h-32 sm:hidden group-hover:scale-110 transition-transform duration-500 object-contain"
      width={128}
      height={128}
      priority
      sizes="(max-width: 640px) 128px, 0px"
    />
    {/* Desktop/Laptop version */}
    <Image
      src="/1..gif"
      alt="Stockstrail Logo"
      className="hidden sm:block w-36 h-36 lg:w-48 lg:h-48 group-hover:scale-110 transition-transform duration-500 object-contain"
      width={300}
      height={300}
      priority
      sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 300px"
    />
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center px-8 sm:px-12 lg:px-16 pt-8 sm:pt-8 lg:pt-0 overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0">
        {/* Main animated blur circle with glow */}
        <div className="absolute w-[871px] h-[887px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 left-1/2 top-20 -translate-x-1/2 animate-pulse-glow" />

        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-stockstrail-green-light/40 rounded-full animate-bounce-gentle" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/20 rounded-full animate-bounce" />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-stockstrail-green-light/50 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-stockstrail-green-accent/40 rounded-full animate-bounce-gentle" />

        {/* Gradient mesh overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-linear-to-br from-stockstrail-green-light/20 via-transparent to-stockstrail-green-accent/10" />
        </div>

        {/* Subtle animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full grid-mesh"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0,255,151,0.25) 1px, transparent 0)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="animate-slide-in-from-top">
          <HeroLogo />
        </div>

        {/* Heading */}
        <div className="animate-slide-in-from-top">
          <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight lg:leading-20 mb-8 group">
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">
              Embark on Your
            </span>
            <br />
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">
              Journey to Success
            </span>
          </h1>
        </div>

        {/* Sub text */}
        <div
          className="animate-slide-in-from-top"
          style={{ animationDelay: "200ms" }}
        >
          <p className="text-white/50 text-lg sm:text-xl font-work-sans leading-relaxed max-w-[881px] mx-auto mb-8 group-hover:text-white/70 transition-colors duration-500">
            Achieve financial independence with Stockstrail. Our expert guidance
            and innovative tools help you navigate investing and reach your
            long-term goals. Whether you&apos;re a beginner or experienced investor,
            stay ahead and attain
          </p>
        </div>

        {/* Subheading */}
        <div
          className="animate-slide-in-from-top"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal mb-8 group">
            <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">
              Financial Freedom
            </span>
          </h2>
        </div>

        {/* CTA button */}
        <div
          className="animate-slide-in-from-top lg:mb-20"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-base sm:text-lg group"
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

// Partner Logos Section
const PartnerLogosSection = () => {
  const partners = [
    { name: "AngelOne", logo: "/logos/angelone.webp" },
    { name: "Alice Blue", logo: "/logos/aliceblue.webp" },
    { name: "AssetPlus", logo: "/logos/assetplus.webp" },
    { name: "Axis", logo: "/logos/axis.webp" },
    { name: "Bandhan", logo: "/logos/bandhan.webp" },
    { name: "DSP", logo: "/logos/dsp.webp" },
    { name: "Edelweiss", logo: "/logos/edelweis.webp" },
    { name: "Franklin", logo: "/logos/franklin.webp" },
    { name: "Groww", logo: "/logos/groww.webp" },
    { name: "HDFC", logo: "/logos/hdfc.webp" },
    { name: "HDFC SKY", logo: "/logos/hdfcsky.webp" },
    { name: "ICICI", logo: "/logos/icici.webp" },
    { name: "ITI", logo: "/logos/iti.webp" },
    { name: "Kotak", logo: "/logos/kotak.webp" },
    { name: "LIC", logo: "/logos/lic.webp" },
    { name: "Mirae", logo: "/logos/mirae.webp" },
    { name: "Motilal", logo: "/logos/motilal.webp" },
    { name: "Nippon", logo: "/logos/nippon.webp" },
    { name: "PB Partners", logo: "/logos/pbpartners.webp" },
    { name: "PGIM", logo: "/logos/pgim.webp" },
    { name: "PPFAS", logo: "/logos/ppfas.webp" },
    { name: "Quant", logo: "/logos/quant.webp" },
    { name: "Quantum", logo: "/logos/quantum.webp" },
    { name: "SBI", logo: "/logos/sbi.webp" },
    { name: "Shriram", logo: "/logos/shriram.webp" },
    { name: "Tata", logo: "/logos/tata.webp" },
    { name: "Zerodha", logo: "/logos/zerodha.webp" },
  ];

  return (
  <section className="py-16 relative overflow-hidden lg:pt-32">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/4 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="relative z-10">
        <div className="animate-slide-in-from-top">
          <h3 className="text-center font-product-sans text-5xl sm:text-6xl font-normal uppercase gradient-text mb-10 px-4 sm:px-6 lg:px-8 group hover:scale-105 transition-transform duration-500">
          OUR PARTNERS
        </h3>
        </div>
        <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden hover:border-stockstrail-green-light/30 transition-colors duration-500">
          <div className="partners-track animate-scroll">
            {partners.concat(partners).map((partner, i) => (
              <div key={`partner-${i}`} className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[200px] group">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-20 sm:h-24 w-auto object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                  width={192}
                  height={92}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "MUTUAL FUNDS",
      description:
        "Our expertly managed funds offer a convenient way to grow your wealth over time, with the potential for long-term returns and minimal risk.",
      icon: "/piggybank.webp",
      isImage: true,
    },
    {
      title: "FIXED DEPOSIT",
      description:
        "Secure your savings with guaranteed returns through our fixed deposit schemes, offering competitive interest rates and flexible tenure options.",
        icon: "/fd.webp",
        isImage: true,
    },
    {
      title: "INSURANCE",
      description:
        "Protect yourself and your loved ones from life's uncertainties with our comprehensive insurance plans.",
        icon: "/insurance.webp",
        isImage: true,
    },
    {
      title: "LOAN",
      description:
        "Get quick approval for personal, home, and business loans with competitive interest rates and flexible repayment terms.",
        icon: "/loan.webp",
        isImage: true,
    },
    {
      title: "OTHERS",
      description:
        "In addition to our core financial services, we also offer a range of other solutions to support your financial well-being.",
        icon: "/others.webp",
        isImage: true,
    },
  ];

  const getHref = (title: string) => {
    if (title.includes("MUTUAL FUNDS")) return "/services/mutual-funds";
    if (title.includes("FIXED DEPOSIT")) return "/services/fixed-deposit";
    if (title.includes("INSURANCE")) return "/services/insurance";
    if (title.includes("LOAN")) return "/services/loan";
    if (title.includes("OTHERS")) return "/services/others";
    return "/services";
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
        {/* Pulsing ring (hero-style) */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 animate-pulse-glow pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-8">
            <span className="text-white">Invest your </span>
            <span className="gradient-text">money</span>
            <span className="text-white"> on the go</span>
          </h2>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="relative">
              <div className="bg-stockstrail-bg border-2 border-white/13 rounded-[105px] p-4 sm:p-8 flex flex-col sm:flex-row items-center group hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
                
                {/* Icon / Image */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 shrink-0 group-hover:scale-110 group-hover:bg-stockstrail-green-light/20 transition-all duration-300">
                  {service.isImage ? (
                    <Image
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
                      width={48}
                      height={48}
                    />
                  ) : (
                    <span className="text-2xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div className="grow text-center">
                  <h3 className="font-product-sans text-xl sm:text-2xl font-normal uppercase text-white mb-4 group-hover:text-stockstrail-green-light transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-work-sans text-sm sm:text-base leading-relaxed max-w-[662px] mx-auto group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Link */}
                <a
                  href={getHref(service.title)}
                  className="w-16 h-16 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mt-4 sm:mt-0 sm:ml-8 shrink-0 group-hover:bg-stockstrail-gradient group-hover:scale-110 transition-all duration-300 cursor-pointer"
                  aria-label={`${service.title} link`}
                >
                  <svg
                    width="24"
                    height="24"
                    className="sm:w-[35px] sm:h-[35px] group-hover:scale-110 transition-transform duration-300"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.44141 28.6037L29.0414 7.00366M29.0414 7.00366H12.8414M29.0414 7.00366V23.2037"
                      stroke="white"
                      strokeWidth="2.16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Calculators Section
const CalculatorsSection = () => {
  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate the maturity amount of your Systematic Investment Plan with compound growth.",
      icon: "/logos/sip.webp",
      isImage: true,
      href: "/calculators?tab=SIP",
    },
    {
      title: "Lumpsum Calculator",
      description: "Find out how your one-time investment will grow over time with market returns.",
      icon: "/logos/lumpsum.webp",
      isImage: true,
      href: "/calculators?tab=LUMPSUM",
    },
    {
      title: "FD Calculator",
      description: "Calculate interest earned on your Fixed Deposit and maturity amount.",
      icon: "/logos/fd.webp",
      isImage: true,
      href: "/calculators?tab=FD",
    },
    {
      title: "RD Calculator",
      description: "Plan your Recurring Deposit investments and track growth over time.",
      icon: "/logos/rd.webp",
      isImage: true,
      href: "/calculators?tab=RD",
    },
    {
      title: "EMI Calculator",
      description: "Calculate your monthly EMI for loans and plan your repayment strategy.",
      icon: "/logos/emi.webp",
      isImage: true,
      href: "/calculators?tab=EMI",
    },
    {
      title: "Tax Calculator",
      description: "Estimate your tax liability and optimize your investment for tax savings.",
      icon: "/logos/tax.webp",
      isImage: true,
      href: "/calculators?tab=TAX",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
        {/* Pulsing ring (hero-style) behind Calculators header */}
        <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[620px] h-[620px] bg-stockstrail-bg-light rounded-full blur-100 opacity-50 animate-pulse-glow pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-6">
            <span className="text-white">Financial </span>
            <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-white/70 text-lg sm:text-xl font-work-sans max-w-2xl mx-auto">
            Use our free calculators to plan your investments, loans, and savings with precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calculator, index) => (
            <a
              key={index}
              href={calculator.href}
              className="group relative bg-stockstrail-bg border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-stockstrail-green-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {calculator.isImage ? (
                    <Image
                      src={calculator.icon}
                      alt={`${calculator.title} icon`}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                      width={80}
                      height={80}
                    />
                  ) : (
                    <div className="text-5xl">{calculator.icon}</div>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-product-sans text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-stockstrail-green-light transition-colors duration-300">
                  {calculator.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm sm:text-base font-work-sans leading-relaxed mb-6 grow group-hover:text-white/80 transition-colors duration-300">
                  {calculator.description}
                </p>

                {/* Button */}
                <div className="inline-flex items-center gap-2 text-stockstrail-green-light font-work-sans font-semibold text-sm sm:text-base group-hover:gap-4 transition-all duration-300">
                  <span>Open Calculator</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/calculators"
            className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group"
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
            View All Calculators
          </a>
        </div>
      </div>
    </section>
  );
};

// Why Choose Section
const WhyChooseSection = () => {
  const features = [
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-3.svg",
      title: "GOAL PLANNING",
      delay: "0ms",
    },
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-4.svg",
      title: "FREE CONSULTATION",
      delay: "200ms",
    },
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-2.svg",
      title: "BANK LEVEL\nSECURITY",
      delay: "400ms",
    },
    {
      icon: "https://c.animaapp.com/mfilofkpBLsyal/img/frame-1.svg",
      title: "SAFE AND\nSECURE",
      delay: "600ms",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
        {/* Pulsing ring (hero-style) behind Why Choose header */}
        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-[640px] h-[640px] bg-stockstrail-bg-light rounded-full blur-100 opacity-55 animate-pulse-glow pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase">
            <span className="text-white">Why Choose </span>
            <span className="gradient-text">StocksTrail</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="translate-y-[-1rem] animate-fade-in opacity-0 bg-[#012928] border-2 border-[#ffffff21] backdrop-blur-[50px] backdrop-brightness-100 [-webkit-backdrop-filter:blur(50px)_brightness(100%)] rounded-[100px] md:rounded-[200px] h-[250px] md:h-[307px] w-full max-w-[250px] mx-auto transition-all duration-300 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-white/20 hover:scale-105 group cursor-pointer"
              style={
                { "--animation-delay": feature.delay } as React.CSSProperties
              }
            >
              <div className="flex flex-col items-center justify-center gap-4 md:gap-5 h-full p-6 md:p-8">
                <Image
                  className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(0,255,151,0.5)]"
                  alt="Feature icon"
                  src={feature.icon}
                  width={48}
                  height={48}
                />
                <div className="font-normal text-white text-lg md:text-xl text-center tracking-[0] leading-[26px] md:leading-[30px] whitespace-pre-line transition-all duration-300 group-hover:text-[#00FF97] group-hover:drop-shadow-[0_0_10px_rgba(0,255,151,0.3)]">
                  {feature.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragDelta, setDragDelta] = useState(0);
  const dragging = React.useRef(false);
  const lastWheelTs = React.useRef(0);

  const defaultTestimonials = useMemo(() => [
    {
      id: 1,
      created_at: new Date().toISOString(),
      name: "Olivia Carter",
      company: "Financial Services",
      position: "Financial Analyst",
      comment: "One of the best investment firms in Sydney with highly knowledgeable, professional and friendly staff.",
      rating: 4,
    },
    {
      id: 2,
      created_at: new Date().toISOString(),
      name: "Sarah Johnson",
      company: "Investment Group",
      position: "Long-term Investor",
      comment: "Stockstrail helped me build a diversified portfolio that has consistently outperformed my expectations. Their expertise in mutual funds is unmatched.",
      rating: 4.5,
    },
    {
      id: 3,
      created_at: new Date().toISOString(),
      name: "Michael Chen",
      company: "Tech Solutions",
      position: "Business Owner",
      comment: "The team's personalized approach and transparent communication made me feel confident about my financial decisions. Highly recommended!",
      rating: 5,
    },
    {
      id: 4,
      created_at: new Date().toISOString(),
      name: "Priya Sharma",
      company: "Software Corp",
      position: "Software Engineer",
      comment: "From SIP planning to tax optimization, Stockstrail covers all aspects of financial planning. Their calculators are incredibly helpful.",
      rating: 4.5,
    },
    {
      id: 5,
      created_at: new Date().toISOString(),
      name: "Rajesh Kumar",
      company: "Retirement Planning",
      position: "Retired Professional",
      comment: "The fixed deposit rates offered through Stockstrail are competitive, and the process is completely hassle-free. Great service!",
      rating: 4,
    },
  ], []);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        const { data, error } = await getRandomReviews(5);
        
        if (error) {
          console.error('Error loading reviews:', error);
          setTestimonials(defaultTestimonials);
        } else if (data && data.length > 0) {
          setTestimonials(data);
        } else {
          setTestimonials(defaultTestimonials);
        }
      } catch (error) {
        console.error('Error loading reviews:', error);
        setTestimonials(defaultTestimonials);
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, [defaultTestimonials]);

  useEffect(() => {
    if (loading || testimonials.length === 0) return;
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [loading, testimonials.length]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <svg
            key={i}
            className="w-6 h-6 text-stockstrail-green-light"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <svg
            key={i}
            className="w-6 h-6 text-stockstrail-green-light"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#3f3f3f" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-${i})`}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="w-6 h-6 text-gray-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    return stars;
  };

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    position: "",
    comment: "",
    rating: 0,
  });
  const [formError, setFormError] = useState("");

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (value: number) => {
    setForm((prev) => ({ ...prev, rating: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.name || !form.position || !form.comment || !form.rating) {
      setFormError("Please fill all required fields and select a star rating.");
      return;
    }
    
    setFormError("");
    setSubmitting(true);
    
    try {
      const reviewData = {
        name: form.name,
        company: form.company || null,
        position: form.position,
        comment: form.comment,
        rating: form.rating,
      };
      
      const { error } = await addReview(reviewData);
      
      if (error) {
        throw error;
      }
      
      setShowForm(false);
      setForm({ name: "", company: "", position: "", comment: "", rating: 0 });
      
      const { data: newReviews, error: reloadError } = await getRandomReviews(5);
      if (!reloadError && newReviews && newReviews.length > 0) {
        setTestimonials(newReviews);
      }
      
      alert("Thank you for your review! Your feedback has been submitted successfully.");
      
    } catch (error) {
      console.error('Error submitting review:', error);
      setFormError("Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal uppercase mb-16">
          <span className="text-white">What our </span>
          <span className="gradient-text inline-block">client</span>
          <span className="text-white"> says</span>
        </h2>

        <div className="relative">
          {/* Testimonial Card with slide animation & touch support */}
          <div
            className="bg-white/5 backdrop-blur-lg rounded-2xl max-w-2xl mx-auto hover:bg-white/10 hover:scale-105 transition-all duration-500 overflow-hidden select-none"
            onTouchStart={e => { dragging.current = true; setDragStartX(e.touches[0].clientX); }}
            onTouchMove={e => {
              if (dragging.current && dragStartX !== null) {
                setDragDelta(e.touches[0].clientX - dragStartX);
              }
            }}
            onTouchEnd={() => {
              dragging.current = false;
              if (Math.abs(dragDelta) > 60) {
                if (dragDelta > 0) {
                  setCurrentTestimonial((prev) =>
                    testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                  );
                } else {
                  setCurrentTestimonial((prev) =>
                    testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                  );
                }
              }
              setDragStartX(null);
              setDragDelta(0);
            }}
            onMouseDown={e => {
              dragging.current = true; setDragStartX(e.clientX);
            }}
            onMouseMove={e => {
              if (dragging.current && dragStartX !== null) {
                setDragDelta(e.clientX - dragStartX);
              }
            }}
            onMouseUp={() => {
              dragging.current = false;
              if (Math.abs(dragDelta) > 60) {
                if (dragDelta > 0) {
                  setCurrentTestimonial((prev) =>
                    testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                  );
                } else {
                  setCurrentTestimonial((prev) =>
                    testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                  );
                }
              }
              setDragStartX(null);
              setDragDelta(0);
            }}
            onMouseLeave={() => { dragging.current = false; setDragStartX(null); setDragDelta(0); }}
            onWheel={(e) => {
              const now = Date.now();
              if (lastWheelTs.current && now - lastWheelTs.current < 500) return;
              if (Math.abs(e.deltaX) > 10) {
                lastWheelTs.current = now;
                if (e.deltaX > 0) {
                  setCurrentTestimonial((prev) =>
                    testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                  );
                } else {
                  setCurrentTestimonial((prev) =>
                    testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                  );
                }
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                e.preventDefault();
                setCurrentTestimonial((prev) =>
                  testimonials.length > 0 ? (prev + 1) % testimonials.length : prev
                );
              }
              if (e.key === 'ArrowLeft') {
                e.preventDefault();
                setCurrentTestimonial((prev) =>
                  testimonials.length > 0 ? (prev - 1 + testimonials.length) % testimonials.length : prev
                );
              }
            }}
            tabIndex={0}
            style={{ cursor: dragStartX !== null ? 'grabbing' : 'grab', touchAction: 'pan-y' }}
          >
            {loading ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-stockstrail-green-light"></div>
              </div>
            ) : (
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((t, idx) => (
                  <div key={idx} className="min-w-full shrink-0 basis-full">
                    <div className="p-8">
                    {/* ⭐ Dynamic Star Ratings */}
                    <div className="flex items-center justify-center mb-6 space-x-1">
                      {renderStars(t?.rating || 0)}
                    </div>

                    <blockquote className="text-white text-lg leading-relaxed mb-6">
                      &quot;{t?.comment || ''}&quot;
                    </blockquote>

                    <div className="text-white/70 text-sm">
                      — {t?.name || ''}, {t?.position || ''}
                      {t?.company && (
                        <span className="text-white/50"> at {t?.company}</span>
                      )}
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-stockstrail-green-light scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

           {/* Add a review button and dropdown form */}
           <div className="mt-8 flex flex-col items-center">
             {!showForm && (
               <button
                 className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group"
                 onClick={() => setShowForm(true)}
                 style={{ pointerEvents: 'auto' }}
               >
                 <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                 Add a review
               </button>
             )}
            {showForm && (
              <>
                <form
                  className="mt-4 w-full max-w-md bg-white/10 rounded-xl p-6 shadow-lg flex flex-col gap-4 animate-dropdown"
                  onSubmit={handleFormSubmit}
                >
                <div className="flex flex-col text-left">
                  <label className="text-white font-medium mb-1">Name<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light"
                    required
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-white font-medium mb-1">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleFormChange}
                    className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-white font-medium mb-1">Position<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleFormChange}
                    className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light"
                    required
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-white font-medium mb-1">Comment<span className="text-red-500">*</span></label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleFormChange}
                    className="px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light"
                    rows={3}
                    required
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-white font-medium mb-1">Star Rating<span className="text-red-500">*</span></label>
                  <div className="flex gap-2 mt-1">
                    {[1,2,3,4,5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${form.rating >= star ? "bg-stockstrail-green-light border-stockstrail-green-light" : "bg-white/10 border-white/30"}`}
                        onClick={() => handleRatingChange(star)}
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                {formError && <div className="text-red-500 text-sm mt-2">{formError}</div>}
                 <button
                   type="submit"
                   disabled={submitting}
                   className="mt-4 px-6 py-2 bg-stockstrail-green-light text-black rounded-full font-semibold shadow hover:bg-stockstrail-green-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {submitting ? (
                     <div className="flex items-center gap-2">
                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                       Submitting...
                     </div>
                   ) : (
                     'Submit Review'
                   )}
                 </button>
                </form>
                <button
                  className="mt-4 inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium group"
                  onClick={() => setShowForm(false)}
                  style={{ pointerEvents: 'auto' }}
                >
                  <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-5 h-5 bg-stockstrail-green-light/10 rounded-full animate-bounce-gentle"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-slide-in-from-top" style={{ animationDelay: '100ms' }}>
          <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8 group">
            <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">About </span>
            <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">StocksTrail</span>
        </h2>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
          <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto mb-12 group-hover:text-stockstrail-green-light transition-colors duration-500">
          We ensure a secure and safe mutual fund investment platform through a structured and disciplined approach. We offer a wide range of services, including Mutual Funds, Insurance, Fixed Deposits, and more, combining top-tier proprietary and third-party products.
        </p>
        </div>
        
        <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
          <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
          Our goal is to provide quick transaction services tailored to your profile and risk appetite. Partner with us to develop a savings and investment habit, along with a protection plan that helps you achieve your investment goals according to your specific needs. Our advice ensures you choose the best schemes under the SEBI-defined riskometer.
        </p>
        </div>
        
        <div className="mt-16">
          <a 
            href="/lets-talk" 
            className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-lg group relative z-20 cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

// Disclaimer Section
const DisclaimerSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-slide-in-from-top">
          <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8 text-white group hover:scale-105 transition-transform duration-500">
          DISCLAIMER
        </h2>
        </div>
        
        <div className="space-y-8 text-center">
          <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
            <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
              <span className="text-white">www.stockstrail.in</span>
              <span className="text-white"> is the official website of </span>
              <span className="gradient-text inline-block">Vikrant Bhardwaj</span>
              <span className="text-white">, who is registered under </span>
              <span className="gradient-text inline-block">ARN-284122</span>
              <span className="text-white"> as an AMFI Registered Mutual Fund Distributor. This website is intended to provide educational and informative content related to investments and also facilitates online transactions in Mutual Funds.</span>
            </p>
          </div>

          <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
            <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
              <span className="text-white">We do not charge any fees for the calculators or information provided on this website. Our earnings come in the form of commissions received from the respective Mutual Fund companies.</span>
            </p>
          </div>

          <div className="animate-slide-in-from-top" style={{ animationDelay: '600ms' }}>
            <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
              <span className="text-white">Please note that investments in Mutual Funds are subject to market risks. The website does not guarantee any specific returns, financial outcomes, or achievement of investment goals.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
export default function Home() {
  return (
    <Layout>
      <div className="overflow-x-hidden">
        {/* SEO handled via Next.js metadata in `src/app/layout.tsx` */}
        <HeroSection />
        <PartnerLogosSection />
        <ServicesSection />
        <CalculatorsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <AboutSection />
        <DisclaimerSection />
      </div>
    </Layout>
  );
}
