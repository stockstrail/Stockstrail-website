import React from 'react';
import Image from 'next/image';

const PartnerLogosSection = () => {
    const partners = [
        { name: "HDFC Mutual Fund", logo: "/logos/hdfc.webp" },
        { name: "ICICI Prudential", logo: "/logos/icici.webp" },
        { name: "SBI Mutual Fund", logo: "/logos/sbi.webp" },
        { name: "Nippon India", logo: "/logos/nippon.webp" },
        { name: "Kotak Mutual Fund", logo: "/logos/kotak.webp" },
        { name: "Axis Mutual Fund", logo: "/logos/axis.webp" },
        { name: "Mirae Asset", logo: "/logos/mirae.webp" },
        { name: "PPFAS Mutual Fund", logo: "/logos/ppfas.webp" },
        { name: "DSP Mutual Fund", logo: "/logos/dsp.webp" },
        { name: "Bandhan Mutual Fund", logo: "/logos/bandhan.webp" },
        { name: "Tata Mutual Fund", logo: "/logos/tata.webp" },
        { name: "Motilal Oswal", logo: "/logos/motilal.webp" },
        { name: "Franklin Templeton", logo: "/logos/franklin.webp" },
        { name: "Quant Mutual Fund", logo: "/logos/quant.webp" },
        { name: "Shriram Finance", logo: "/logos/shriram.webp" },
        { name: "LIC", logo: "/logos/lic.webp" },
        { name: "AssetPlus Platform", logo: "/logos/assetplus.webp" },
        { name: "AngelOne", logo: "/logos/angelone.webp" },
        { name: "Zerodha", logo: "/logos/zerodha.webp" },
    ];

    return (
        <section className="py-12 sm:py-16 relative overflow-hidden bg-[#011d1c] defer-render">
            <div className="relative z-10">
                <div className="text-center mb-8 space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>40+ AMCs &amp; Institutional Partners</span>
                    </div>

                    <h2
                        className="text-center font-bold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] px-4 sm:px-6 lg:px-8"
                        style={{ fontFamily: 'var(--font-product-sans)' }}
                    >
                        Fund Houses &amp; Platforms <span className="gradient-text">We Work With</span>
                    </h2>

                    <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto px-4">
                        Access top equity, debt, and hybrid schemes across India&apos;s leading Asset Management Companies.
                    </p>
                </div>

                <div className="w-full bg-[#0F2A2A] border-y border-[#1A3A3A] overflow-hidden hover:border-stockstrail-green-light/40 shadow-[0_10px_30px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-500">
                    <div className="partners-track animate-scroll">
                        {partners.concat(partners).map((partner, i) => (
                            <div key={`partner-${i}`} className="flex items-center justify-center px-4 sm:px-6 py-4 sm:py-4 min-w-[120px] sm:min-w-[180px] group">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="h-14 sm:h-16 w-auto object-contain group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                                    width={140}
                                    height={70}
                                    sizes="(max-width: 640px) 120px, 140px"
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
