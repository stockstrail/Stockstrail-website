'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldCheck, Landmark, Umbrella, Wallet, LineChart, type LucideIcon } from 'lucide-react';

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: '7', label: 'Core Services' },
  { value: '27+', label: 'Partner Institutions' },
  { value: '200+', label: 'Families Guided' },
  { value: '100%', label: 'Digital Process' },
];

type Chip = {
  icon: LucideIcon;
  label: string;
  className: string;
  rotate: number;
  float: 'animate-float' | 'animate-float-slow';
  delay: string;
};

const chips: Chip[] = [
  {
    icon: TrendingUp,
    label: 'SIP from ₹500',
    className: 'top-[18%] left-2 xl:left-8',
    rotate: -6,
    float: 'animate-float',
    delay: '0s',
  },
  {
    icon: ShieldCheck,
    label: 'Free Risk Check',
    className: 'top-[14%] right-2 xl:right-10',
    rotate: 5,
    float: 'animate-float-slow',
    delay: '0.6s',
  },
  {
    icon: Landmark,
    label: 'FD up to 7.5% p.a.',
    className: 'top-[46%] left-0 xl:left-4',
    rotate: 4,
    float: 'animate-float-slow',
    delay: '1.4s',
  },
  {
    icon: Umbrella,
    label: 'Life & Health Cover',
    className: 'top-[42%] right-0 xl:right-4',
    rotate: -4,
    float: 'animate-float',
    delay: '0.9s',
  },
  {
    icon: Wallet,
    label: 'Quick Loan Approval',
    className: 'bottom-[8%] left-6 xl:left-16',
    rotate: 6,
    float: 'animate-float',
    delay: '1.8s',
  },
  {
    icon: LineChart,
    label: 'Zero AMC Demat',
    className: 'bottom-[6%] right-6 xl:right-16',
    rotate: -5,
    float: 'animate-float-slow',
    delay: '0.3s',
  },
];

const ServiceHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-14 sm:pb-20">
      {/* Ambient 3D-ish background layers */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <span className="glow-blob top-[-140px] left-[-120px] h-[460px] w-[460px] lg:h-[560px] lg:w-[560px] opacity-30 animate-float" />
        <span
          className="glow-blob bottom-[-160px] right-[-140px] h-[520px] w-[520px] lg:h-[620px] lg:w-[620px] opacity-25 animate-float-slow"
          style={{ background: 'rgba(0, 229, 153, 0.15)' }}
        />
        <div
          className="grid-mesh absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      {/* Floating service chips — fill the wide gutters on laptop/desktop */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
        {chips.map((chip, i) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 24, rotate: chip.rotate }}
            animate={{ opacity: 1, y: 0, rotate: chip.rotate }}
            transition={{ duration: 0.7, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute ${chip.className}`}
          >
            <div
              className={`${chip.float} flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-3.5 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)]`}
              style={{ animationDelay: chip.delay, transform: `rotate(${chip.rotate}deg)` }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/25 text-stockstrail-green-light">
                <chip.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-xs font-work-sans font-medium text-white/80 whitespace-nowrap">
                {chip.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/40 bg-stockstrail-green-light/10 px-4 py-1.5 text-[11px] font-semibold text-stockstrail-green-light tracking-wider uppercase backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
          From Your First SIP to Your Next Big Move.
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
          From mutual funds and insurance to fixed deposits, loans and demat accounts,
          find the services you need in one place. We keep the process simple, explain your options clearly, 
          and help you choose what makes sense for you.

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
