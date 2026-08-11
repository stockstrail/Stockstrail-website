'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceCTASection: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-[350px] bg-stockstrail-bg-light blur-185 opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 rounded-3xl p-8 sm:p-12 hover:border-stockstrail-green-light/50 hover:shadow-[0_0_50px_rgba(0,255,151,0.15)] transition-all duration-500"
      >
        <h2 className="font-product-sans text-2xl sm:text-3xl lg:text-4xl font-normal mb-4">
          <span className="text-white">Not sure where to start? </span>
          <span className="gradient-text">Let&apos;s figure it out together.</span>
        </h2>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Take our free risk assessment or talk to an AMFI-registered advisor to get a
          personalised recommendation across mutual funds, insurance, loans and more — no
          jargon, no pressure.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/lets-talk"
            className="inline-flex items-center gap-3 px-6 py-3 bg-stockstrail-green-light text-stockstrail-bg rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,151,0.45)] transition-all duration-300 font-work-sans font-bold text-sm"
          >
            Let&apos;s Talk
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link
            href="/check-risk-profile"
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-white/15 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-semibold text-sm"
          >
            Check Your Risk Profile
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceCTASection;
