'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate">
            {/* DEDICATED SECTION 3D BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/about-bg.jpg"
                    alt="About Section Architectural Backdrop"
                    fill
                    unoptimized
                    className="object-cover object-center opacity-50 scale-105 filter brightness-110 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/70 via-[#011d1c]/40 to-[#011d1c]/80" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10 space-y-10">
                {/* 3D Section Header */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>Our Philosophy &amp; Mission</span>
                    </div>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        <span className="text-white">About </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Stockstrail</span>
                    </h2>
                </div>

                {/* 3D Glass Cards */}
                <div className="space-y-8 text-left">
                    {/* Card 1 */}
                    <div className="bg-[#021716]/85 border border-white/12 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                        <h3
                            className="text-stockstrail-green-light text-lg sm:text-xl font-bold mb-3 tracking-tight drop-shadow-sm"
                            style={{ fontFamily: "var(--font-product-sans)" }}
                        >
                            Financial planning shouldn&apos;t be complicated.
                        </h3>
                        <p className="text-white/85 text-sm sm:text-base lg:text-lg font-normal leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                            <strong className="text-white">Personalized financial planning in India</strong> shouldn&apos;t be complicated. Financial decisions can get confusing, especially when you&apos;re trying to figure out where to invest, how much to save in <strong className="font-semibold"><Link href="/mutual-funds" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">mutual funds</Link></strong>, or what kind of <strong className="font-semibold"><Link href="/insurance" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">insurance protection</Link></strong> you actually need. Stockstrail was built to make those decisions easier, transparent, and goal-focused.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#021716]/85 border border-white/12 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] space-y-6">
                        <div>
                            <h3
                                className="text-stockstrail-green-light text-lg sm:text-xl font-bold mb-2 tracking-tight drop-shadow-sm"
                                style={{ fontFamily: "var(--font-product-sans)" }}
                            >
                                Our approach is simple. Your goals come first.
                            </h3>
                            <p className="text-white/85 text-sm sm:text-base lg:text-lg font-normal leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                                We don&apos;t start by asking which product you want. We first look at your milestones, investment horizon, <strong className="font-semibold"><Link href="/check-risk-profile" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">risk profile assessment</Link></strong>, and existing commitments. From there, we help you understand which financial options make sense for you.
                            </p>
                        </div>

                        <div>
                            <p className="text-white/85 text-sm sm:text-base lg:text-lg font-normal leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                                Whether you&apos;re starting your first <strong className="font-semibold"><Link href="/mutual-funds" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">SIP</Link></strong>, planning for your child&apos;s education, preparing for retirement, or looking to protect your family, we believe successful investing is about having a suitable financial plan, staying disciplined, and using our <strong className="font-semibold"><Link href="/calculators" className="text-white hover:text-stockstrail-green-light transition-colors no-underline">financial calculators</Link></strong> to project long-term compounding.
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                                Today, Stockstrail serves 200+ investors across Himachal Pradesh and clients across India with services covering <Link href="/mutual-funds" className="text-stockstrail-green-light font-semibold hover:underline">mutual funds</Link>, <Link href="/insurance" className="text-stockstrail-green-light font-semibold hover:underline">insurance</Link>, <Link href="/fixed-deposit" className="text-stockstrail-green-light font-semibold hover:underline">fixed deposits</Link>, <Link href="/loan" className="text-stockstrail-green-light font-semibold hover:underline">loans</Link>, and <Link href="/open-demat" className="text-stockstrail-green-light font-semibold hover:underline">demat accounts</Link>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3D Action Buttons */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/about"
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-stockstrail-green-light rounded-full text-black font-bold text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_25px_rgba(0,255,151,0.35)]"
                    >
                        <span>Read Our Full Story</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/[0.04] border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 hover:border-stockstrail-green-light hover:scale-105 transition-all backdrop-blur-md"
                    >
                        <span>Explore All Services</span>
                        <svg className="w-4 h-4 text-stockstrail-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        href="/lets-talk"
                        className="inline-flex items-center gap-3 px-8 py-3.5 bg-white/[0.04] border border-white/20 rounded-full text-white font-semibold text-sm hover:bg-white/10 hover:border-stockstrail-green-light hover:scale-105 transition-all backdrop-blur-md"
                    >
                        <span>Let&apos;s Talk 1-on-1</span>
                        <svg className="w-4 h-4 text-stockstrail-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
