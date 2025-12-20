'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroLogo = () => {
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as unknown as { MSStream: unknown }).MSStream);
    }, []);

    return (
        <div
            className="flex justify-center items-center gap-4 sm:gap-8 group w-full hero-logo-ios"
            style={{
                isolation: "isolate",
                transform: "translateZ(0)",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
            }}
        >
            {/* Mobile version */}
            {isIOS ? (
                /* iOS Safari: native img */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    src="/1..gif"
                    alt="Stockstrail Logo"
                    className="w-28 h-28 xs:w-32 xs:h-32 sm:hidden object-contain"
                    style={{
                        backgroundColor: "transparent",
                        display: "block",
                        willChange: "transform",
                    }}
                />
            ) : (
                /* Android / Desktop Mobile View: Next Image */
                <Image
                    src="/1..gif"
                    alt="Stockstrail Logo"
                    className="w-28 h-28 xs:w-32 xs:h-32 sm:hidden object-contain"
                    width={128}
                    height={128}
                    priority
                    sizes="(max-width: 390px) 112px, (max-width: 640px) 128px, 0px"
                    quality={90}
                    placeholder="empty"
                    unoptimized
                />
            )}

            {/* Desktop/Laptop version */}
            <Image
                src="/1..gif"
                alt="Stockstrail Logo"
                className="hidden sm:block w-36 h-36 lg:w-48 lg:h-48 group-hover:scale-110 transition-transform duration-500 object-contain"
                style={{ background: 'transparent' }}
                width={300}
                height={300}
                priority
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 192px, 300px"
                quality={90}
            />
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-start lg:items-center justify-center px-8 sm:px-12 lg:px-16 pt-8 sm:pt-8 lg:pt-0 overflow-hidden">
            {/* Background layer */}
            <div className="absolute inset-0">
                {/* Main animated blur circle with glow - DISABLED for performance */}
                <div className="absolute w-[871px] h-[887px] bg-stockstrail-bg-light rounded-full blur-100 opacity-60 ios-blur-fallback left-1/2 top-20 -translate-x-1/2" />

                {/* Floating particles - DISABLED for performance */}
                <div className="absolute top-20 left-10 w-2 h-2 bg-stockstrail-green-light/40 rounded-full" />
                <div className="absolute top-40 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full" />
                <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/20 rounded-full" />
                <div className="absolute top-1/2 right-10 w-2 h-2 bg-stockstrail-green-light/50 rounded-full" />
                <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-stockstrail-green-accent/40 rounded-full" />

                {/* Gradient mesh overlay */}
                <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-linear-to-br from-stockstrail-green-light/20 via-transparent to-stockstrail-green-accent/10" />
                </div>

                {/* Subtle animated grid pattern - DISABLED for performance */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div
                        className=""
                        style={{
                            backgroundImage:
                                "radial-gradient(circle at 1px 1px, rgba(0,255,151,0.25) 1px, transparent 0)",
                            backgroundSize: "50px 50px",
                        }}
                    />
                </div>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Logo */}
                <div className="animate-slide-in-from-top">
                    <HeroLogo />
                </div>

                {/* Heading */}
                <div className="animate-slide-in-from-top">
                    <h1 className="font-product-sans text-4xl sm:text-5xl lg:text-7xl font-normal leading-tight lg:leading-20 mb-8 group">
                        <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">
                            Embark on Your
                        </span>
                        <br />
                        <span className="text-white group-hover:text-stockstrail-green-light transition-colors duration-500">
                            Journey to Success
                        </span>
                    </h1>
                </div>

                {/* Sub text */}
                <div
                    className="animate-slide-in-from-top"
                    style={{ animationDelay: "200ms" }}
                >
                    <p className="text-white/50 text-base sm:text-lg lg:text-xl font-work-sans leading-relaxed max-w-[881px] mx-auto mb-8 group-hover:text-white/70 transition-colors duration-500">
                        Achieve financial independence with Stockstrail. Our expert guidance
                        and innovative tools help you navigate investing and reach your
                        long-term goals. Whether you&apos;re a beginner or experienced investor,
                        stay ahead and attain
                    </p>
                </div>

                {/* Subheading */}
                <div
                    className="animate-slide-in-from-top"
                    style={{ animationDelay: "300ms" }}
                >
                    <h2 className="font-product-sans text-4xl sm:text-5xl lg:text-6xl font-normal mb-8 group">
                        <span className="gradient-text group-hover:scale-105 transition-transform duration-500 inline-block">
                            Financial Freedom
                        </span>
                    </h2>
                </div>

                {/* CTA button */}
                <div
                    className="animate-slide-in-from-top lg:mb-20"
                    style={{ animationDelay: "400ms" }}
                >
                    <a
                        href="/services"
                        className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,255,151,0.4)] transition-all duration-500 font-work-sans font-medium text-base sm:text-lg group"
                    >
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
