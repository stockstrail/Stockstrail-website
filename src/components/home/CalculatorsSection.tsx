'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CalculatorsSection = () => {
    const calculators = [
        {
            title: 'SIP Calculator',
            badge: 'Compounding',
            description:
                'Estimate how your monthly SIP could grow over time based on your investment amount, expected return and time period.',
            icon: '/services/mf.webp',
            href: '/calculators/sip',
        },
        {
            title: 'Lumpsum Calculator',
            badge: 'One-Time Growth',
            description:
                'See how a one-time investment could grow over time based on your investment amount, expected return and investment period.',
            icon: '/services/mf.webp',
            href: '/calculators/lumpsum',
        },
        {
            title: 'FD Calculator',
            badge: 'Guaranteed Interest',
            description:
                'Calculate the interest and maturity amount for your Fixed Deposit based on the deposit amount, interest rate and tenure.',
            icon: '/services/fd.webp',
            href: '/calculators/fd',
        },
        {
            title: 'RD Calculator',
            badge: 'Recurring Savings',
            description:
                'Estimate the maturity amount of your Recurring Deposit based on your monthly deposit, interest rate and tenure.',
            icon: '/services/fd.webp',
            href: '/calculators/rd',
        },
        {
            title: 'EMI Calculator',
            badge: 'Loan Schedule',
            description:
                'Calculate your monthly loan EMI and see how much you may pay in interest over the repayment period.',
            icon: '/services/loan.webp',
            href: '/calculators/emi',
        },
        {
            title: 'Tax Calculator',
            badge: 'Tax Optimization',
            description:
                'Plan your investments smartly to optimize tax liability under Old and New tax regimes.',
            icon: '/services/others.webp',
            href: '/calculators/tax',
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate">
            {/* DEDICATED SECTION 3D BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/calculators-bg.webp"
                    alt="Calculators Section Architecture"
                    fill
                    loading="lazy"
                    sizes="100vw"
                    className="object-cover object-center opacity-35 scale-105 filter brightness-105 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/80 via-[#011d1c]/50 to-[#011d1c]/85" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-teal-500/15 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* 3D Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>Smart Wealth Tools</span>
                    </div>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        <span className="text-white">Financial </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Calculators</span>
                    </h2>

                    <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong>Free online financial calculators</strong> to estimate your investment returns, forecast <strong>mutual fund SIP growth</strong>, compute <strong>FD and RD maturity values</strong>, and calculate <strong>loan EMIs</strong> with precision.
                    </p>
                </div>

                {/* 3D Grid of Calculators */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {calculators.map((calculator, index) => (
                        <Link
                            key={index}
                            href={calculator.href}
                            className="group relative bg-[#021716]/85 border border-white/12 hover:border-stockstrail-green-light/70 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,255,151,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            {/* Subtle internal glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-stockstrail-green-light/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Top Badge & Icon Row */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-14 h-14 bg-white/[0.06] border border-white/15 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-stockstrail-green-light/20 group-hover:border-stockstrail-green-light/50 transition-all duration-300 shadow-md">
                                        <Image
                                            src={calculator.icon}
                                            alt={`${calculator.title} icon`}
                                            className="w-9 h-9 object-contain group-hover:scale-110 transition-transform duration-300"
                                            width={36}
                                            height={36}
                                            loading="lazy"
                                        />
                                    </div>
                                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light">
                                        {calculator.badge}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-stockstrail-green-light transition-colors duration-300 drop-shadow-md"
                                    style={{ fontFamily: "var(--font-product-sans)" }}
                                >
                                    {calculator.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6 grow font-normal">
                                    {calculator.description}
                                </p>

                                {/* Bottom Link CTA */}
                                <div className="flex items-center justify-between text-xs font-bold text-stockstrail-green-light uppercase tracking-wider group-hover:translate-x-1 transition-transform border-t border-white/10 pt-3 mt-auto">
                                    <span>Calculate Now</span>
                                    <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-stockstrail-green-light group-hover:text-black flex items-center justify-center text-white transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* 3D Bottom CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                    <Link
                        href="/calculators"
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-stockstrail-green-light rounded-full text-black font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(0,255,151,0.35)]"
                    >
                        <span>Explore All 6 Calculators</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        href="/mutual-funds"
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/[0.04] border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 hover:border-stockstrail-green-light hover:scale-105 transition-all backdrop-blur-md"
                    >
                        <span>Start Mutual Fund SIP</span>
                        <svg className="w-4 h-4 text-stockstrail-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CalculatorsSection;
