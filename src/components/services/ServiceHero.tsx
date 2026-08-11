'use client';

import React from 'react';
import { motion } from 'framer-motion';

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: '7', label: 'Core Services' },
  { value: '27+', label: 'Partner Institutions' },
  { value: '200+', label: 'Families Guided' },
  { value: '100%', label: 'Digital Process' },
];

const ServiceHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20">
      {/* Ambient 3D-ish background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="glow-blob top-[-120px] left-[-100px] h-[420px] w-[420px] opacity-30 animate-float" />
        <span
          className="glow-blob bottom-[-140px] right-[-120px] h-[480px] w-[480px] opacity-25 animate-float-slow"
          style={{ background: 'rgba(0, 229, 153, 0.15)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/40 bg-stockstrail-green-light/10 px-4 py-1.5 text-[11px] font-semibold text-stockstrail-green-light tracking-wider uppercase backdrop-blur-md mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light animate-pulse" />
          Everything you need, one trusted partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-product-sans text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] mb-5"
        >
          <span className="text-white">Our </span>
          <span className="gradient-text">Services</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          From your first SIP to your next home loan — mutual funds, insurance, fixed
          deposits, loans, demat accounts and more. Unbiased, AMFI-registered guidance
          tailored to your goals, delivered end-to-end online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md px-4 py-4 sm:py-5 hover:border-stockstrail-green-light/40 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-product-sans font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-white/60 mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
