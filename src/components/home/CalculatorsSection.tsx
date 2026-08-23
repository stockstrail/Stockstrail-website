'use client';

import React from 'react';
import Link from 'next/link';

const CalculatorsSection = () => {
    const calculators = [
        {
            title: 'SIP Calculator',
            description:
                'Estimate how your monthly SIP could grow over time based on your investment amount, expected return and time period.',
            icon: '/logos/sip-white.webp',
            href: '/calculators?tab=SIP',
        },
        {
            title: 'Lumpsum Calculator',
            description:
                'See how a one-time investment could grow over time based on your investment amount, expected return and investment period.',
            icon: '/logos/lumpsum-white.webp',
            href: '/calculators?tab=LUMPSUM',
        },
        {
            title: 'FD Calculator',
            description:
                'Calculate the interest and maturity amount for your Fixed Deposit based on the deposit amount, interest rate and tenure.',
            icon: '/logos/fd-white.webp',
            href: '/calculators?tab=FD',
        },
        {
            title: 'RD Calculator',
            description:
                'Estimate the maturity amount of your Recurring Deposit based on your monthly deposit, interest rate and tenure.',
            icon: '/logos/rd-white.webp',
            href: '/calculators?tab=RD',
        },
        {
            title: 'EMI Calculator',
            description:
                'Calculate your monthly loan EMI and see how much you may pay in interest over the repayment period.',
            icon: '/logos/emi-white.webp',
            href: '/calculators?tab=EMI',
        },
        {
            title: 'Tax Calculator',
            description:
                'Get an estimate of your tax liability based on your income and applicable tax details.',
            icon: '/logos/tax-white.webp',
            href: '/calculators?tab=TAX',
        },
    ];

    return (
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>

                {/* Pulsing ring (hero-style) behind Calculators header */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[620px] h-[620px] bg-stockstrail-bg-light rounded-full blur-100 opacity-50 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-6">
                        <span className="text-white">Financial </span>
                        <span className="gradient-text">Calculators</span>
                    </h2>

                    <p className="text-white/70 text-sm sm:text-base lg:text-lg font-work-sans max-w-2xl mx-auto">
                        Use our free calculators to estimate returns, plan investments,
                        compare loan costs and understand your savings over time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {calculators.map((calculator, index) => (
                        <Link
                            key={index}
                            href={calculator.href}
                            className="group relative bg-stockstrail-bg border border-white/10 rounded-2xl p-8 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Background glow on hover */}
                            <div className="absolute inset-0 bg-stockstrail-green-light/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Icon */}
                                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={calculator.icon}
                                        alt={`${calculator.title} icon`}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain brightness-0 invert"
                                        width={80}
                                        height={80}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="font-product-sans text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-stockstrail-green-light transition-colors duration-300">
                                    {calculator.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/60 text-xs sm:text-sm lg:text-base font-work-sans leading-relaxed mb-6 grow group-hover:text-white/80 transition-colors duration-300">
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
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <Link
                        href="/calculators"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold group"
                    >
                        <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                        View Calculators
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CalculatorsSection;
