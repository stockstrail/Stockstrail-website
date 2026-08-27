import React from 'react';
import dynamic from 'next/dynamic';
import PartnerLogosSection from '@/components/home/PartnerLogosSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import AboutSection from '@/components/home/AboutSection';
import CalculatorsSection from '@/components/home/CalculatorsSection';

const TestimonialsSection = dynamic(
  () => import('@/components/home/TestimonialsSection'),
  { ssr: true }
);

const HomePageSEOContent = dynamic(
  () => import('@/components/home/HomePageSEOContent'),
  { ssr: true }
);

const DisclaimerSection = dynamic(
  () => import('@/components/home/DisclaimerSection'),
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
