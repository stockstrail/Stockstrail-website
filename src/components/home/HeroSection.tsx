import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="
        relative
        flex
        items-start
        lg:items-center
        justify-center
        min-h-[600px]
        px-6 sm:px-12 md:px-16 
        pt-8 sm:pt-12 md:pt-4
        overflow-hidden
      "
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stockstrail-green-light/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>
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
          Personalized  
          <br />
         Financial Planning
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
       Every financial journey is unique,
       and your financial plan should be too.

       At Stockstrail, we take the time to
       understand your goals, risk profile,
       and financial priorities before
       recommending any solution. Whether
       you're building wealth, planning for
       retirement, saving for your child's
       future, or protecting your family,
       every recommendation is tailored to
       help you invest with confidence, build
       long-term wealth, and achieve your
       financial goals.
        </p>

        {/* Subheading */}
        <h2
          className="
            text-xl sm:text-2xl lg:text-3xl
            font-medium
            mb-8
          "
        >
          <span className="gradient-text inline-block drop-shadow-md bg-white/10 px-3 py-2 rounded-lg">
            Goal-Based Planning • Smart Investing • Long-Term Wealth
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
              bg-white
              border-2 border-[#012928]
              rounded-full
              text-[#012928]
              hover:bg-white/90
              hover:-translate-y-1
              hover:shadow-lg
              transition-all
              duration-300
              font-semibold
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
    </section>
  );
};

export default HeroSection;
