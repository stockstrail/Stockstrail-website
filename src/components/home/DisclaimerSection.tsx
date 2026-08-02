'use client';

import React from 'react';

const DisclaimerSection = () => {
    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/20 rounded-full"></div>
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
                            <span className="text-white">Stockstrail is operated by </span>
                            <span className="text-stockstrail-green-light inline-block font-bold">Vikrant Bhardwaj</span>
                            <span className="text-white">, an AMFI Registered Mutual Fund Distributor (</span>
                            <span className="text-stockstrail-green-light inline-block font-bold">ARN-284122</span>
                            <span className="text-white">). This website is intended to provide educational information and facilitate investments in mutual funds through authorised platforms.</span>
                        </p>
                    </div>

                    <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                            <span className="text-white">We believe in complete transparency. The calculators, educational content, and general financial information available on this website are provided free of charge. Wherever applicable, we receive commissions from Asset Management Companies (AMCs) as permitted under AMFI regulations. These commissions do not result in any additional cost to investors.</span>
                        </p>
                    </div>

                    <div className="animate-slide-in-from-top" style={{ animationDelay: '600ms' }}>
                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-5xl mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                            <span className="text-white">Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Investment decisions should always be based on your financial goals, risk appetite, and investment horizon. Past performance is not indicative of future results, and no investment can guarantee returns.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DisclaimerSection;
