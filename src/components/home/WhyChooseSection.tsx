import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseSectionComponent = () => {
    const features = [
        {
            icon: "/assets/icons/frame-3.svg",
            title: "Goal-First Planning",
            badge: "Tailored Strategy",
            description: "Custom investments built specifically around your family milestones and goals.",
            href: "/services",
        },
        {
            icon: "/assets/icons/frame-4.svg",
            title: "Personalized Guidance",
            badge: "Risk-Aligned",
            description: "Asset allocation calculated directly from your personal risk appetite and horizon.",
            href: "/check-risk-profile",
        },
        {
            icon: "/assets/icons/frame-2.svg",
            title: "AMFI Registered",
            badge: "ARN-284122",
            description: "Certified and compliant mutual fund distribution and advisory you can trust.",
            href: "/commission-disclosure",
        },
        {
            icon: "/assets/icons/frame-1.svg",
            title: "100% Transparency",
            badge: "Zero Bias",
            description: "Fiduciary guidance with zero hidden commissions and complete clarity.",
            href: "/about",
        },
    ];

    return (
        <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate">
            {/* DEDICATED SECTION 3D BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/whychoose-bg.webp"
                    alt="Why Choose Stockstrail Architecture"
                    fill
                    loading="lazy"
                    sizes="100vw"
                    className="object-cover object-center opacity-35 scale-105 filter brightness-105 contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/80 via-[#011d1c]/50 to-[#011d1c]/85" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-emerald-500/15 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* 3D Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>The Stockstrail Advantage</span>
                    </div>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        <span className="text-white">Why Choose </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Stockstrail</span>
                    </h2>

                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong>Trusted financial planning partner</strong> in India helping you build long-term wealth through transparent advice, AMFI-registered distributor support, and personalized guidance.
                    </p>
                </div>

                {/* 3D Elevated Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            href={feature.href}
                            className="group relative bg-[#021716]/85 border border-white/12 hover:border-stockstrail-green-light/70 rounded-3xl p-6 sm:p-7 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,255,151,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer block overflow-hidden"
                        >
                            {/* Subtle internal glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-stockstrail-green-light/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity" />

                            <div className="w-16 h-16 bg-white/[0.06] border border-white/15 rounded-2xl flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 group-hover:bg-stockstrail-green-light/20 group-hover:border-stockstrail-green-light/50 transition-all duration-300 shadow-md">
                                <Image
                                    className="w-9 h-9 transition-all duration-300 group-hover:scale-110"
                                    alt={feature.title}
                                    src={feature.icon}
                                    width={36}
                                    height={36}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30 text-stockstrail-green-light mb-2.5">
                                {feature.badge}
                            </span>

                            <h3
                                className="font-bold text-white text-lg mb-2 transition-all duration-300 group-hover:text-stockstrail-green-light drop-shadow-md"
                                style={{ fontFamily: "var(--font-product-sans)" }}
                            >
                                {feature.title}
                            </h3>

                            <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
                                {feature.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSectionComponent;
