'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const BackToTopButton = () => {
    const scrollToTop = () => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            suppressHydrationWarning
            className="fixed right-6 bottom-24 z-40 w-10 h-10 sm:w-12 sm:h-12 bg-[#1E1E1E] rounded-full flex items-center justify-center cursor-pointer hover:bg-stockstrail-green-light hover:scale-110 hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] transition-all duration-300 group"
        >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white -rotate-90 transition-colors duration-300" />
        </button>
    );
};

export default BackToTopButton;
