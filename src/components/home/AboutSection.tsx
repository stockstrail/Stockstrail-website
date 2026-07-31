'use client';

import React from 'react';

const AboutSection = () => {
    return (
        <section className="pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
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
                 <div className="max-w-4xl mx-auto mb-10">
                     <h3 className="text-stockstrail-green-light text-lG sm:text-xl font-semibold mb-3">
                         Financial planning shouldn't be complicated.
                     </h3>

                     <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9">
                         Financial planning shouldn't be confusing or reserved only for people with large amounts of money. Every earning individual deserves honest financial guidance that's easy to understand and built around their unique financial goals.
                     </p>

                     <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9 mt-6">
                        That's the purpose behind Stockstrail.
                     </p>
                 </div>
                </div>

                <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
                    <div className="max-w-4xl mx-auto">

                        <h3 className="text-stockstrail-green-light text-xl sm:text-2xl font-semibold mb-4">
                            Our approach is simple.
                        </h3>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9">
                           At Stockstrail, we don't recommend products first. We begin by understanding your financial goals, investment horizon, risk profile, existing financial commitments, and life priorities before recommending solutions that genuinely fit your needs.
                        </p>

                        <h3 className="text-stockstrail-green-light text-xl sm:text-2xl font-semibold mt-10 mb-4">
                            Helping you build long-term financial confidence.
                        </h3>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9">
                           Whether you're starting your first SIP, building long-term wealth, planning for your child's education, preparing for retirement, or protecting your family's future, every recommendation is designed to help you make confident financial decisions.
                        </p>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed mt-6">
                           We believe successful investing isn't about chasing the highest returns. It's about having the right financial plan, staying disciplined, and staying invested for the long term.
                        </p>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed mt-6">
                           Today, Stockstrail proudly serves 200+ investors across Himachal Pradesh and clients throughout India, helping individuals and families build wealth through disciplined financial planning, mutual funds, insurance, fixed deposits, and goal-based investment strategies.
                        </p>
                    </div>
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
