import React from 'react';
import HeroCarousel from '@/components/ui/HeroCarousel';

const HeroSection = () => {
  const images = [
    {
      src: '/hero/home_01.png',
      alt: 'Indian family standing on hilltop at sunrise representing journey to financial freedom with Stockstrail',
    },
    {
      src: '/hero/home_02.webp',
      alt: 'Abstract upward trending investment growth chart with rupee symbols for Stockstrail homepage',
    }
  ];

  return (
    <HeroCarousel
      images={images}
      className="
        flex
        items-start
        lg:items-center
        justify-center
        min-h-[600px]
        px-6 sm:px-12 md:px-16 
        pt-8 sm:pt-12 md:pt-4
      "
    >
      {/* LCP Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mt-12 sm:mt-8 md:mt-8">
        {/* Heading */}
        <h1
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-normal
            leading-tight
            text-white
          "
        >
          Embark on Your
          <br />
          Journey to Success
        </h1>

        {/* LCP paragraph — MUST be plain, fast, and paintable */}
        <p
          className="
            mt-4
            text-[#e0e0e0]
            text-base sm:text-lg lg:text-xl
            leading-relaxed
            max-w-[880px]
            mx-auto
            mb-8
            drop-shadow-md
          "
        >
          Achieve financial independence with Stockstrail. Our expert guidance
          and innovative tools help you navigate investing and reach your
          long-term goals. Whether you&apos;re a beginner or experienced investor,
          stay ahead and attain.
        </p>

        {/* Subheading */}
        <h2
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-normal
            mb-8
          "
        >
          <span className="gradient-text inline-block drop-shadow-md bg-white/10 px-4 rounded-xl">
            Financial Freedom
          </span>
        </h2>

        {/* CTA */}
        <div className="lg:mb-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/services"
            aria-label="Learn more about our financial services"
            className="
              inline-flex
              items-center
              gap-3 sm:gap-4
              px-4 sm:px-6
              py-3 sm:py-4
              border-2 border-white/20
              rounded-full
              text-white
              hover:border-stockstrail-green-light
              hover:text-stockstrail-green-light
              bg-black/20
              backdrop-blur-sm
              transition-colors
              duration-300
              font-medium
            "
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full" />
            Learn More About Our Services
          </a>
          <a
            href="/check-risk-profile"
            aria-label="Check your risk profile"
            className="
              inline-flex
              items-center
              gap-3 sm:gap-4
              px-4 sm:px-6
              py-3 sm:py-4
              border-2
              border-white/20
              rounded-full
              text-white
              hover:border-stockstrail-green-light
              hover:text-stockstrail-green-light
              bg-black/20
              backdrop-blur-sm
              transition-all
              duration-300
              font-medium
              text-sm sm:text-base
            "
          >
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-stockstrail-green-accent rounded-full" />
            Check Your Risk Profile
          </a>
        </div>
      </div>
    </HeroCarousel>
  );
};

export default HeroSection;
