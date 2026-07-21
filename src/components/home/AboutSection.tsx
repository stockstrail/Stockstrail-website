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
                        Financial planning & investment guidance is not a luxury reserved for the rich - it is a necessity for every earning individual in India. At Stockstrail, we believe that every person, regardless of their background or income level, deserves a clear, honest, and personalised financial roadmap. Whether you are a young professional in Shimla, a business owner in Chandigarh, or a salaried employee in Delhi - your financial goals matter, and so does the quality of guidance you receive.
                    </p>
                </div>

                <div className="animate-slide-in-from-top" style={{ animationDelay: '400ms' }}>
                    <p className="text-white font-work-sans text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-[90%] mx-auto group-hover:text-stockstrail-green-light transition-colors duration-500">
                        Most people do not start investing because they lack money. They stay away because nobody has ever explained it to them in simple, human language. The financial world is full of jargon, commission-driven advice, and one-size-fits-all products that rarely fit anyone's actual life. Stockstrail was built to fix exactly this problem. We offer financial planning & investment guidance that starts with listening - to your goals, your concerns, your timeline, and your life situation - before recommending anything at all.
                    </p>
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
