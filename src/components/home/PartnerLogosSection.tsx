'use client';

import React from 'react';
import Image from 'next/image';

const PartnerLogosSection = () => {
    const partners = [
        { name: "AngelOne", logo: "/logos/angelone.webp" },
        { name: "Alice Blue", logo: "/logos/aliceblue.webp" },
        { name: "AssetPlus", logo: "/logos/assetplus.webp" },
        { name: "Axis", logo: "/logos/axis.webp" },
        { name: "Bandhan", logo: "/logos/bandhan.webp" },
        { name: "DSP", logo: "/logos/dsp.webp" },
        { name: "Edelweiss", logo: "/logos/edelweis.webp" },
        { name: "Franklin", logo: "/logos/franklin.webp" },
        { name: "Groww", logo: "/logos/groww.webp" },
        { name: "HDFC", logo: "/logos/hdfc.webp" },
        { name: "HDFC SKY", logo: "/logos/hdfcsky.webp" },
        { name: "ICICI", logo: "/logos/icici.webp" },
        { name: "ITI", logo: "/logos/iti.webp" },
        { name: "Kotak", logo: "/logos/kotak.webp" },
        { name: "LIC", logo: "/logos/lic.webp" },
        { name: "Mirae", logo: "/logos/mirae.webp" },
        { name: "Motilal", logo: "/logos/motilal.webp" },
        { name: "Nippon", logo: "/logos/nippon.webp" },
        { name: "PB Partners", logo: "/logos/pbpartners.webp" },
        { name: "PGIM", logo: "/logos/pgim.webp" },
        { name: "PPFAS", logo: "/logos/ppfas.webp" },
        { name: "Quant", logo: "/logos/quant.webp" },
        { name: "Quantum", logo: "/logos/quantum.webp" },
        { name: "SBI", logo: "/logos/sbi.webp" },
        { name: "Shriram", logo: "/logos/shriram.webp" },
        { name: "Tata", logo: "/logos/tata.webp" },
        { name: "Zerodha", logo: "/logos/zerodha.webp" },
    ];

    return (
        <section className="py-12 sm:py-16 relative overflow-hidden bg-[#011d1c]">
            <div className="relative z-10">
                <div className="text-center mb-8 space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>Trusted Ecosystem</span>
                    </div>

                    <h2
                        className="text-center font-bold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)] px-4 sm:px-6 lg:px-8"
                        style={{ fontFamily: 'var(--font-product-sans)' }}
                    >
                        Stockstrail&apos;s <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Exclusive Partnerships</span>
                    </h2>
                </div>

                <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden hover:border-stockstrail-green-light/40 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-colors duration-500">
                    <div className="partners-track animate-scroll">
                        {partners.concat(partners).map((partner, i) => (
                            <div key={`partner-${i}`} className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[200px] group">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="h-16 sm:h-20 w-auto object-contain group-hover:scale-110 group-hover:brightness-110 transition-all duration-300"
                                    width={160}
                                    height={80}
                                    sizes="(max-width: 640px) 120px, 160px"
                                    quality={60}
                                    draggable={false}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerLogosSection;
