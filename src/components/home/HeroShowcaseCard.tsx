'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardItem {
  id: number;
  title: string;
  category: string;
  tag: string;
  description: string;
  highlight: string;
  href: string;
  image: string;
  icon: string;
  cta: string;
}

interface HeroShowcaseCardProps {
  cards: CardItem[];
}

export default function HeroShowcaseCard({ cards }: HeroShowcaseCardProps) {
  const [activeCard, setActiveCard] = useState<number>(0);
  const card = cards[activeCard] || cards[0];

  return (
    <div className="space-y-4 animate-fade-up">
      {/* Interactive Tab Switcher Bar */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#021817]/90 border border-white/15 backdrop-blur-xl shadow-lg">
        {cards.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActiveCard(idx)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 min-h-[44px] rounded-xl text-xs font-semibold transition-all duration-300 ${
              activeCard === idx
                ? 'bg-stockstrail-green-light text-black shadow-[0_0_20px_rgba(0,255,151,0.35)] scale-[1.02]'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>{item.icon}</span>
            <span className="truncate" style={{ fontFamily: "var(--font-product-sans)" }}>
              {item.id === 0 ? 'Calculators' : item.id === 1 ? "Let's Talk" : 'Services'}
            </span>
          </button>
        ))}
      </div>

      {/* 3D FEATURED SHOWCASE CARD */}
      <div className="relative rounded-3xl overflow-hidden border border-stockstrail-green-light/50 bg-[#021716]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,255,151,0.15)] group transition-all duration-500 hover:border-stockstrail-green-light hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_60px_rgba(0,255,151,0.25)]">
        {/* Top Banner Tag */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-black/70 border border-stockstrail-green-light/40 text-[10px] sm:text-xs font-bold text-stockstrail-green-light backdrop-blur-md shadow-md uppercase tracking-wider">
            {card.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-xs font-medium text-white/90 backdrop-blur-md hidden sm:inline-block">
            {card.tag}
          </span>
        </div>

        {/* Floating Highlight Badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[10px] font-semibold text-stockstrail-green-light backdrop-blur-md shadow-md">
          {card.highlight}
        </div>

        {/* 3D Visual Mockup Image Display */}
        <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden bg-[#011413] p-3 sm:p-4">
          <Image
            src={card.image}
            alt={card.title}
            fill
            priority
            unoptimized
            loading="eager"
            className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-500 filter brightness-105 contrast-105"
          />
        </div>

        {/* Bottom Card Content & Direct Redirection Link */}
        <div className="p-5 sm:p-6 relative z-20 space-y-3 bg-[#021716] border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p
                className="text-xl sm:text-2xl font-bold text-white group-hover:text-stockstrail-green-light transition-colors drop-shadow-md"
                style={{ fontFamily: "var(--font-product-sans)" }}
              >
                {card.title}
              </p>
              <p className="text-xs sm:text-sm text-white/75 mt-1 max-w-lg leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
            <Link
              href={card.href}
              aria-label={`${card.cta} - ${card.title}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-full bg-stockstrail-green-light text-black text-xs font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(0,255,151,0.4)] hover:shadow-[0_0_35px_rgba(0,255,151,0.6)] hover:scale-105 transition-all shrink-0"
              style={{ fontFamily: "var(--font-product-sans)" }}
            >
              <span>{card.cta}</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
