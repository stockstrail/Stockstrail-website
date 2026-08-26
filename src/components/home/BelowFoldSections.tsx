import React from 'react';
import PartnerLogosSection from '@/components/home/PartnerLogosSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import AboutSection from '@/components/home/AboutSection';
import HomePageSEOContent from '@/components/home/HomePageSEOContent';
import CalculatorsSection from '@/components/home/CalculatorsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import DisclaimerSection from '@/components/home/DisclaimerSection';

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

