'use client';

import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
    return (
        <section className="pt-20 sm:pt-28 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative">
            {/* Background effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-4 h-4 bg-stockstrail-green-light/20 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full"></div>
                <div className="absolute top-1/2 left-10 w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/3 right-10 w-5 h-5 bg-stockstrail-green-light/10 rounded-full"></div>
            </div>

            <div className="max-w-[90%] mx-auto text-center relative z-10">
                <div
                    className="animate-slide-in-from-top"
                    style={{ animationDelay: '100ms' }}
                >
                    <h2 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase mb-8 group">
                        <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">
                            About{' '}
                        </span>
                        <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">
                            Stockstrail
                        </span>
                    </h2>
                </div>

                <div
                    className="animate-slide-in-from-top"
                    style={{ animationDelay: '200ms' }}
                >
                    <div className="max-w-4xl mx-auto mb-10">
                        <h3 className="text-stockstrail-green-light text-lg sm:text-xl font-semibold mb-3">
                            Financial planning shouldn&apos;t be complicated.
                        </h3>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9">
                            Financial decisions can get confusing, especially when
                            you&apos;re trying to figure out where to invest, how much to
                            save, or what kind of protection you actually need.
                            Stockstrail was built to make those decisions easier to
                            understand.
                        </p>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9 mt-6">
                            That&apos;s the purpose behind Stockstrail.
                        </p>
                    </div>
                </div>

                <div
                    className="animate-slide-in-from-top"
                    style={{ animationDelay: '400ms' }}
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-stockstrail-green-light text-xl sm:text-2xl font-semibold mb-4">
                            Our approach is simple.
                        </h3>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9">
                            We don&apos;t start by asking which product you want. We
                            first look at your goals, investment horizon, risk
                            profile and existing commitments. From there, we help
                            you understand which financial options make sense for
                            you.
                        </p>

                        <h3 className="text-stockstrail-green-light text-xl sm:text-2xl font-semibold mt-10 mb-4">
                            Your goals come first.
                        </h3>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-9">
                            Whether you&apos;re starting your first SIP, planning for
                            your child&apos;s education, preparing for retirement, or
                            looking to protect your family, the right financial
                            decision depends on where you are today and where you
                            want to go.
                        </p>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed mt-6">
                            We believe successful investing isn&apos;t about chasing the
                            highest returns. It&apos;s about having a suitable financial
                            plan, staying disciplined, and giving your investments
                            enough time to work.
                        </p>

                        <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed mt-6">
                            Today, Stockstrail serves 200+ investors across Himachal
                            Pradesh and clients across India, with services covering
                            mutual funds, insurance, fixed deposits and goal-based
                            financial planning.
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold text-lg group relative z-20"
                    >
                        <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                        Explore Our Services
                    </Link>

                    <Link
                        href="/lets-talk"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-transparent border-2 border-white/30 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:-translate-y-1 transition-all duration-300 font-work-sans font-semibold text-lg group relative z-20"
                    >
                        <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300"></div>
                        Let&apos;s Talk
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
