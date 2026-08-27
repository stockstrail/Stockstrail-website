import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CalculatorsSection() {
    const calculators = [
        {
            title: 'SIP Calculator',
            badge: 'Compounding Growth',
            description:
                'Estimate how your monthly SIP could grow over time based on your investment amount, expected return, and time period.',
            href: '/calculators/sip',
            icon: '/piggybank-white.webp',
            glowColor: 'border-emerald-500/40 bg-emerald-500/15 shadow-[0_0_15px_rgba(0,255,151,0.2)]',
        },
        {
            title: 'Lumpsum Calculator',
            badge: 'One Time Wealth',
            description:
                'See how a one time investment could grow over time based on your investment amount, expected return, and investment period.',
            href: '/calculators/lumpsum',
            icon: '/others-white.webp',
            glowColor: 'border-teal-500/40 bg-teal-500/15 shadow-[0_0_15px_rgba(20,184,166,0.2)]',
        },
        {
            title: 'FD Calculator',
            badge: 'Guaranteed Interest',
            description:
                'Calculate the interest and maturity amount for your Fixed Deposit based on the deposit amount, interest rate, and tenure.',
            href: '/calculators/fd',
            icon: '/fd-white.webp',
            glowColor: 'border-amber-500/40 bg-amber-500/15 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
        },
        {
            title: 'RD Calculator',
            badge: 'Recurring Savings',
            description:
                'Estimate the maturity amount of your Recurring Deposit based on your monthly deposit, interest rate, and tenure.',
            href: '/calculators/rd',
            icon: '/fd-white.webp',
            glowColor: 'border-sky-500/40 bg-sky-500/15 shadow-[0_0_15px_rgba(56,189,248,0.2)]',
        },
        {
            title: 'EMI Calculator',
            badge: 'Loan Schedule',
            description:
                'Calculate your monthly loan EMI and see how much you may pay in interest over the repayment period.',
            href: '/calculators/emi',
            icon: '/loan-white.webp',
            glowColor: 'border-purple-500/40 bg-purple-500/15 shadow-[0_0_15px_rgba(192,132,252,0.2)]',
        },
        {
            title: 'Tax Calculator',
            badge: 'Tax Planning',
            description:
                'Plan your investments smartly to optimize tax liability under Old and New tax regimes.',
            href: '/calculators/tax',
            icon: '/insurance-white.webp',
            glowColor: 'border-rose-500/40 bg-rose-500/15 shadow-[0_0_15px_rgba(251,113,133,0.2)]',
        },
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate defer-render">
            {/* DEDICATED SECTION 3D FINANCIAL BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/calculators-bg.webp"
                    alt="Financial Calculators Architecture"
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="100vw"
                    quality={60}
                    className="object-cover object-center opacity-35 scale-105 filter brightness-105 contrast-115 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/80 via-[#011d1c]/40 to-[#011d1c]/85" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-teal-500/10 rounded-full blur-[150px]" />
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
                            className="group relative bg-[#021716]/85 border border-white/15 hover:border-stockstrail-green-light/70 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,255,151,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden"
                        >
                            {/* Subtle internal glow */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-stockstrail-green-light/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Top Badge & Icon Row */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-14 h-14 rounded-2xl border ${calculator.glowColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                                        <Image
                                            src={calculator.icon}
                                            alt={calculator.title}
                                            width={36}
                                            height={36}
                                            className="w-9 h-9 object-contain filter drop-shadow brightness-125"
                                            loading="lazy"
                                            decoding="async"
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
}
