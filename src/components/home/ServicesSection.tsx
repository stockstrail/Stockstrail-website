// Force white filter bf437137
// Cache bust 74c854de
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesSection = () => {
    const services = [
        {
            title: "MUTUAL FUNDS",
            badge: "Goal-Based Wealth",
            description:
                "Goal-based mutual fund investments tailored to your risk appetite and financial milestones. Whether starting a monthly SIP or investing a lump sum, explore top equity, debt, and hybrid funds from leading AMCs in India.",
            icon: "/services/mf.webp",
            isImage: true,
        },
        {
            title: "FIXED DEPOSIT",
            badge: "Guaranteed Returns",
            description:
                "High-return fixed deposits (FD) with guaranteed interest and zero market risk. Compare and book secure bank and NBFC fixed deposits with competitive interest rates and flexible payout options.",
            icon: "/services/fd.webp",
            isImage: true,
        },
        {
            title: "INSURANCE",
            badge: "Family Protection",
            description:
                "Comprehensive term and health insurance plans to protect your family's future. Get unbiased guidance on Term Life Insurance, Mediclaim, Critical Illness, and Motor Insurance tailored to your budget.",
            icon: "/services/insurance.webp",
            isImage: true,
        },
        {
            title: "LOAN",
            badge: "Instant Liquidity",
            description:
                "Low-interest loan against mutual funds (LAMF), Home Loans, and Business Loans. Access quick liquidity without selling your investments, supported by transparent terms and fast processing.",
            icon: "/services/loan.webp",
            isImage: true,
        },
        {
            title: "OTHERS",
            badge: "Demat & Tax Planning",
            description:
                "Free online Demat and trading account opening, tax planning guidance, and a comprehensive Risk Profile assessment to build a personalized long-term asset allocation strategy.",
            icon: "/services/others.webp",
            isImage: true,
        },
    ];

    const getHref = (title: string) => {
        if (title.includes("MUTUAL FUNDS")) return "/mutual-funds";
        if (title.includes("FIXED DEPOSIT")) return "/fixed-deposit";
        if (title.includes("INSURANCE")) return "/insurance";
        if (title.includes("LOAN")) return "/loan";
        if (title.includes("OTHERS")) return "/financial-protection";
        return "/services";
    };

    return (
        <section id="services" className="py-16 sm:py-24 relative overflow-hidden isolate">
            {/* DEDICATED SECTION 3D BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/about-bg.jpg"
                    alt="Services Section Executive Architecture"
                    fill
                    unoptimized
                    className="object-cover object-center opacity-35 scale-105 filter brightness-105 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/80 via-[#011d1c]/50 to-[#011d1c]/85" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-[90%] lg:max-w-7xl mx-auto">
                {/* 3D Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>Comprehensive Financial Ecosystem</span>
                    </div>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        <span className="text-white">Personalized Financial Planning &amp; </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Investment Services</span>
                    </h2>

                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        Discover end-to-end wealth solutions curated to match your family goals, time horizon, and risk profile.
                    </p>
                </div>

                {/* 3D Elevated Service Cards */}
                <div className="space-y-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={getHref(service.title)}
                            className="group relative bg-[#021716]/85 border border-white/12 hover:border-stockstrail-green-light/70 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,255,151,0.25)] hover:-translate-y-1.5 transition-all duration-300 block overflow-hidden"
                        >
                            {/* Ambient internal card glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-stockstrail-green-light/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between relative z-10 gap-4 sm:gap-0">
                                {/* Icon Frame */}
                                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/[0.06] border border-white/15 rounded-2xl flex items-center justify-center mb-4 sm:mb-0 sm:mr-8 shrink-0 group-hover:scale-110 group-hover:bg-stockstrail-green-light/20 group-hover:border-stockstrail-green-light/50 transition-all duration-300 shadow-md">
                                    {service.isImage ? (
                                        <Image
                                            unoptimized={true}
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300"
                                            width={56}
                                            height={56}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <span className="text-2xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left min-w-0">
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                                        <h3
                                            className="text-lg sm:text-2xl font-bold text-white group-hover:text-stockstrail-green-light transition-colors drop-shadow-md tracking-tight"
                                            style={{ fontFamily: "var(--font-product-sans)" }}
                                        >
                                            {service.title}
                                        </h3>
                                        <span className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Arrow Action Button */}
                                <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center gap-2 text-stockstrail-green-light text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform shrink-0">
                                    <span className="hidden sm:inline">Explore</span>
                                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-stockstrail-green-light group-hover:text-black flex items-center justify-center text-white transition-colors shadow-md">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
