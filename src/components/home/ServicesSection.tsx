import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
    const services = [
        {
            title: "MUTUAL FUNDS",
            badge: "Wealth Growth",
            description:
                "Goal focused mutual fund investments tailored to your comfort and financial milestones. Whether starting a monthly SIP or investing a lump sum, explore top equity, debt, and hybrid funds from leading AMCs in India.",
            href: "/mutual-funds",
            icon: "/piggybank-white.webp",
            glowColor: "border-emerald-500/40 bg-emerald-500/15 shadow-[0_0_20px_rgba(0,255,151,0.2)]",
        },
        {
            title: "FIXED DEPOSIT",
            badge: "Guaranteed Returns",
            description:
                "High return fixed deposits with guaranteed interest and zero market risk. Compare and book secure bank and corporate fixed deposits with competitive interest rates and flexible payout options.",
            href: "/fixed-deposit",
            icon: "/fd-white.webp",
            glowColor: "border-amber-500/40 bg-amber-500/15 shadow-[0_0_20px_rgba(245,158,11,0.2)]",
        },
        {
            title: "INSURANCE",
            badge: "Family Protection",
            description:
                "Comprehensive term and health insurance plans to protect your family future. Get unbiased guidance on Term Life Insurance, Mediclaim, Critical Illness, and Motor Insurance tailored to your budget.",
            href: "/insurance",
            icon: "/insurance-white.webp",
            glowColor: "border-sky-500/40 bg-sky-500/15 shadow-[0_0_20px_rgba(56,189,248,0.2)]",
        },
        {
            title: "LOAN",
            badge: "Instant Cash",
            description:
                "Low interest loans against mutual funds, Home Loans, and Business Loans. Access quick liquidity without selling your investments, supported by transparent terms and fast processing.",
            href: "/loan",
            icon: "/loan-white.webp",
            glowColor: "border-purple-500/40 bg-purple-500/15 shadow-[0_0_20px_rgba(192,132,252,0.2)]",
        },
        {
            title: "OTHERS",
            badge: "Demat and Risk Quiz",
            description:
                "Free online Demat and trading account opening, tax planning guidance, and a comprehensive Risk Profile assessment to build a personalized long term asset strategy.",
            href: "/financial-protection",
            icon: "/others-white.webp",
            glowColor: "border-teal-500/40 bg-teal-500/15 shadow-[0_0_20px_rgba(20,184,166,0.2)]",
        },
    ];

    return (
        <section id="services" className="py-16 sm:py-24 relative overflow-hidden isolate defer-render">
            {/* DEDICATED SECTION 3D FINANCIAL BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/services-bg.webp"
                    alt="Financial Services Architecture"
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="100vw"
                    quality={60}
                    className="object-cover object-center opacity-35 scale-105 filter brightness-105 contrast-115 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/80 via-[#011d1c]/40 to-[#011d1c]/85" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/10 rounded-full blur-[150px]" />
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
                        <span className="text-white">Personalized Financial Planning and </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Investment Services</span>
                    </h2>

                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        Discover complete wealth solutions curated to match your family goals, time horizon, and personal comfort.
                    </p>
                </div>

                {/* 3D Elevated Service Cards */}
                <div className="space-y-5">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group relative bg-[#021716]/90 border border-white/15 hover:border-stockstrail-green-light/70 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,255,151,0.25)] hover:-translate-y-1.5 transition-all duration-300 block overflow-hidden"
                        >
                            {/* Ambient internal card glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-stockstrail-green-light/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between relative z-10 gap-4 sm:gap-6">
                                {/* Custom White Vector Icon with Rupee Badge */}
                                <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border ${service.glowColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={48}
                                        height={48}
                                        className="w-10 h-10 sm:w-11 sm:h-11 object-contain filter drop-shadow brightness-125"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center sm:text-left min-w-0">
                                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-2">
                                        <h3
                                            className="text-lg sm:text-2xl font-bold text-white group-hover:text-stockstrail-green-light transition-colors drop-shadow-md tracking-tight"
                                            style={{ fontFamily: "var(--font-product-sans)" }}
                                        >
                                            {service.title}
                                        </h3>
                                        <span className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light uppercase tracking-wider">
                                            {service.badge}
                                        </span>
                                    </div>

                                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Action Arrow */}
                                <div className="flex items-center gap-2 text-stockstrail-green-light text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform shrink-0">
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
}
