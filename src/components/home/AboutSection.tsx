'use client';

import React from 'react';

const AboutSection = () => {
    return (
        <section className="py-4 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Enhanced background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/3 right-10 w-5 h-5 bg-stockstrail-green-light/10 rounded-full"></div>
            </div>

            <div className="max-w-[90%] mx-auto text-center relative z-10">
                <div className="animate-slide-in-from-top" style={{ animationDelay: '100ms' }}>
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8 group">
                        <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">About </span>
                        <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">Stockstrail</span>
                    </h2>
                </div>

                <div className="animate-slide-in-from-top" style={{ animationDelay: '200ms' }}>
                    <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[90%] mx-auto mb-12 group-hover:text-stockstrail-green-light transition-colors duration-500">
                        Financial planning shouldn't be complicated, confusing, or reserved only for people with large amounts of money. Every earning individual deserves access to honest financial guidance that's easy to understand and built around their unique financial goals.
                        
                        That's why Stockstrail exists.
                    </p>
                </div>

                <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
                    <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[90%] mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                        Stockstrail is an AMFI Registered Mutual Fund Distributor dedicated to helping individuals and families make informed financial decisions through personalised financial planning. Instead of recommending products first, we begin by understanding your financial goals, investment horizon, risk profile, existing financial commitments, and life priorities before suggesting suitable investment solutions.
                        Whether you're starting your first SIP, building long-term wealth, planning for your child's education, preparing for retirement, or looking to protect your family's future, every recommendation is made with one objective—to help you make confident financial decisions that support your long-term goals.
                        We believe successful investing isn't about chasing the highest returns or following market trends. It's about having the right financial plan, staying disciplined, and making informed decisions at every stage of your financial journey. That's the approach we follow with every investor we work with.
                </div>

                <div className="mt-16">
                    <a
                        href="/lets-talk"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold text-lg group relative z-20 cursor-pointer"
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

export default AboutSection;
