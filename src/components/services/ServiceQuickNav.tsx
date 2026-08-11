'use client';

import React, { useEffect, useRef, useState } from 'react';

export type QuickNavItem = { id: string; label: string };

const SCROLL_OFFSET = 150; // fixed header (80px) + sticky quick-nav rail

const ServiceQuickNav: React.FC<{ items: QuickNavItem[] }> = ({ items }) => {
  const [active, setActive] = useState(items[0]?.id ?? '');
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-160px 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const activeBtn = railRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    activeBtn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [active]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-20 z-30 -mx-4 sm:-mx-6 lg:-mx-8 mb-14 sm:mb-20">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -inset-y-3 bg-stockstrail-bg/70 backdrop-blur-md mask-[linear-gradient(to_bottom,black_60%,transparent)]"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-stockstrail-bg to-transparent sm:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-stockstrail-bg to-transparent sm:hidden" />
        <div
          ref={railRef}
          className="flex items-center gap-2 overflow-x-auto hide-scrollbar px-4 sm:px-0 sm:justify-center py-3"
        >
          <div className="flex items-center gap-1.5 bg-stockstrail-bg/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                data-id={item.id}
                onClick={() => handleClick(item.id)}
                aria-current={active === item.id}
                className={`relative whitespace-nowrap rounded-full px-4 py-2 text-xs sm:text-sm font-work-sans font-medium transition-all duration-300 ${
                  active === item.id
                    ? 'bg-stockstrail-green-light text-stockstrail-bg shadow-[0_0_20px_rgba(0,255,151,0.4)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceQuickNav;
