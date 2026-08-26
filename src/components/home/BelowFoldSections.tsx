import React from 'react';
import dynamic from 'next/dynamic';
import PartnerLogosSection from '@/components/home/PartnerLogosSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import AboutSection from '@/components/home/AboutSection';
import HomePageSEOContent from '@/components/home/HomePageSEOContent';
import CalculatorsSection from '@/components/home/CalculatorsSection';
import DisclaimerSection from '@/components/home/DisclaimerSection';

const TestimonialsSection = dynamic(
  () => import('@/components/home/TestimonialsSection'),
  { ssr: true }
);

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

