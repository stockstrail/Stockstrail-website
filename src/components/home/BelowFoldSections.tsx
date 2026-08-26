'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// ── SEO & Core sections: static imports → immediate rendering ──
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import AboutSection from '@/components/home/AboutSection';
import HomePageSEOContent from '@/components/home/HomePageSEOContent';
import CalculatorsSection from '@/components/home/CalculatorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import DisclaimerSection from '@/components/home/DisclaimerSection';

// ── Non-SEO-critical sections: dynamic with SSR enabled ──
const PartnerLogosSection = dynamic(() => import('@/components/home/PartnerLogosSection'), {
  loading: () => <div className="h-40 bg-transparent" />,
});

export default function BelowFoldSections() {
  return (
    <>
      <PartnerLogosSection />
      <ServicesSection />
      <CalculatorsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <AboutSection />
      <HomePageSEOContent />
      <DisclaimerSection />
    </>
  );
}
