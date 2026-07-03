// Force white filter bf437137
// Cache bust 74c854de
'use client';

import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
    const services = [
        {
            title: "MUTUAL FUNDS",
            description:
                "Stockstrail helps you select top-performing mutual funds tailored to your risk profile and goals. Whether you want to start a monthly SIP or invest a lump sum, we guide you through equity, debt, and hybrid funds from leading AMCs.",
            icon: "/piggybank-white.webp",
            isImage: true,
        },
        {
            title: "FIXED DEPOSIT",
            description:
                "Looking for guaranteed returns without stock market risks? We assist in booking high-interest Fixed Deposits with trusted bank and NBFC partners, ensuring capital protection and predictable income.",
            icon: "/fd-white.webp",
            isImage: true,
        },
        {
            title: "INSURANCE",
            description:
                "Protect your family's future with the right coverage. Stockstrail offers unbiased advice on Term Life Insurance, Health Insurance (Mediclaim), Motor Insurance, Travel Insurance, and ULIPs to secure your financial dependents.",
            icon: "/insurance-white.webp",
            isImage: true,
        },
        {
            title: "LOAN",
            description:
                "We facilitate quick and hassle-free loans to meet your capital needs. This includes Home Loans, Business Loans, Personal Loans, and Loans Against Mutual Funds (LAMF) at competitive interest rates.",
            icon: "/loan-white.webp",
            isImage: true,
        },
        {
            title: "OTHERS",
            description:
                "In addition to our core financial services, we offer Demat Account opening and a free online Risk Profile Assessment tool to give you a personalised asset allocation strategy.",
            icon: "/others-white.webp",
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
        <section id="services" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40"></div>
                {/* Pulsing ring (hero-style) */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[700px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-[90%] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8">
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
                                        <Image unoptimized={true}
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-8 h-8 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform duration-300 brightness-0 invert"
                                            width={48}
                                            height={48}
                                            loading="lazy"
                                            decoding="async" />
                                    ) : (
                                        <span className="text-2xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
                                            {service.icon}
                                        </span>
                                    )}
                                </div>

                                {/* Text */}
                                <div className="grow text-center">
                                    <h3 className="font-product-sans text-lg sm:text-xl lg:text-2xl font-normal uppercase text-white mb-4 group-hover:text-stockstrail-green-light transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/50 font-work-sans text-xs sm:text-sm lg:text-base leading-relaxed max-w-[662px] mx-auto group-hover:text-white/70 transition-colors duration-300">
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

export default ServicesSection;
