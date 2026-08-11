'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

export type ServiceShowcaseCardProps = {
  id?: string;
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  benefits: string[];
  cta: string;
  ctaLink?: string;
  imageSrc: string;
  imageAlt: string;
  /** 'cover' for images that already carry their own opaque background (screen mockups, photos) */
  imageFit?: 'contain' | 'cover';
};

const ServiceShowcaseCard: React.FC<ServiceShowcaseCardProps> = ({
  id,
  index,
  eyebrow,
  title,
  description,
  benefits,
  cta,
  ctaLink,
  imageSrc,
  imageAlt,
  imageFit = 'contain',
}) => {
  const reverse = index % 2 === 1;

  // Pointer-driven 3D tilt for the image panel
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springConfig = { stiffness: 160, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [9, -9]), springConfig);
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), springConfig);
  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 55%)`;

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const ctaClasses =
    'inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/15 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-[1.03] transition-all duration-300 font-work-sans font-semibold text-xs sm:text-sm group/cta';

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`scroll-mt-40 relative flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 md:gap-14 items-center group`}
    >
      {/* Index watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 md:-top-10 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 text-[5.5rem] md:text-[7rem] font-product-sans font-bold text-white/[0.035] select-none leading-none"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* 3D tilt image panel */}
      <div className="relative w-full md:w-2/5 shrink-0" style={{ perspective: '1000px' }}>
        <motion.div
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className="relative aspect-[4/3] sm:aspect-square rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 overflow-hidden group-hover:border-stockstrail-green-light/60 group-hover:shadow-[0_0_40px_rgba(0,255,151,0.15)] transition-colors duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          {imageFit === 'contain' && (
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-40 h-40 bg-stockstrail-green-light/15 rounded-full blur-3xl"
              style={{ transform: 'translateZ(20px)' }}
            />
          )}
          <Image
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            fill
            className={imageFit === 'cover' ? 'object-cover' : 'object-contain p-10 sm:p-12'}
            style={{ transform: `translateZ(${imageFit === 'cover' ? 20 : 50}px)` }}
            sizes="(max-width: 768px) 90vw, 380px"
            quality={90}
          />
          {imageFit === 'cover' && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"
            />
          )}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: glare }}
          />
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-widest uppercase text-white/70"
            style={{ transform: 'translateZ(40px)' }}
          >
            {eyebrow}
          </div>
        </motion.div>
      </div>

      {/* Text content */}
      <div className="w-full md:flex-1">
        <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-product-sans font-semibold mb-3 group-hover:text-stockstrail-green-light transition-colors duration-300">
          {title}
        </h2>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
          {description}
        </p>
        <ul className="space-y-2.5 mb-8">
          {benefits.map((benefit, i) => (
            <motion.li
              key={benefit}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-3 text-white/80 text-sm sm:text-[15px] leading-relaxed"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stockstrail-green-light/15 border border-stockstrail-green-light/30">
                <Check className="h-3 w-3 text-stockstrail-green-light" strokeWidth={3} />
              </span>
              {benefit}
            </motion.li>
          ))}
        </ul>
        {ctaLink ? (
          <Link href={ctaLink} className={ctaClasses}>
            <span className="w-2 h-2 bg-stockstrail-green-accent rounded-full group-hover/cta:scale-125 group-hover/cta:animate-pulse transition-transform duration-300" />
            {cta}
            <ArrowUpRight className="h-4 w-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        ) : (
          <button type="button" className={ctaClasses}>
            <span className="w-2 h-2 bg-stockstrail-green-accent rounded-full group-hover/cta:scale-125 group-hover/cta:animate-pulse transition-transform duration-300" />
            {cta}
            <ArrowUpRight className="h-4 w-4 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-300" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceShowcaseCard;
