'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

type ServiceGEOSectionProps = {
  serviceName: string; // e.g., "Mutual Fund SIP & Investment Advisory"
  serviceUrl?: string; // e.g., "/mutual-funds"
};

const geoStates = [
  {
    state: 'Himachal Pradesh',
    locations: ['Shimla', 'Kangra', 'Mandi', 'Kullu', 'Solan', 'Sirmaur', 'Hamirpur', 'Una', 'Bilaspur', 'Chamba', 'Kinnaur', 'Lahaul & Spiti']
  },
  {
    state: 'Chandigarh Tricity',
    locations: ['Chandigarh', 'Mohali', 'Panchkula']
  },
  {
    state: 'Delhi',
    locations: ['Delhi']
  },
  {
    state: 'Haryana',
    locations: ['Gurugram', 'Faridabad', 'Ambala', 'Hisar', 'Rohtak', 'Karnal', 'Panipat']
  },
  {
    state: 'Uttar Pradesh',
    locations: ['Lucknow', 'Noida', 'Greater Noida', 'Agra', 'Kanpur', 'Varanasi', 'Meerut', 'Prayagraj', 'Gorakhpur']
  },
  {
    state: 'Uttarakhand',
    locations: ['Dehradun', 'Haridwar', 'Rishikesh', 'Nainital', 'Haldwani', 'Roorkee']
  }
];

const ServiceGEOSection: React.FC<ServiceGEOSectionProps> = ({ 
  serviceName,
  serviceUrl = "/lets-talk"
}) => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stockstrail-green-light/5 blur-[150px] rounded-full pointer-events-none"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Serving Across </span>
            <span className="gradient-text">North India</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Stockstrail provides certified {serviceName} fully digitally, with the same quality of personalised, honest guidance regardless of where you live.
          </p>
        </div>

        <Tabs defaultValue={geoStates[0].state} className="w-full">
          <TabsList className="flex flex-wrap h-auto w-full justify-start md:justify-center gap-2 bg-transparent mb-8">
            {geoStates.map((data) => (
              <TabsTrigger 
                key={data.state} 
                value={data.state}
                className="data-[state=active]:bg-stockstrail-green-light/20 data-[state=active]:text-stockstrail-green-light data-[state=active]:border-stockstrail-green-light border border-white/10 rounded-full px-6 py-2 text-white/70 hover:text-white transition-all"
              >
                {data.state}
              </TabsTrigger>
            ))}
          </TabsList>

          {geoStates.map((data) => (
            <TabsContent key={data.state} value={data.state} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.locations.map((loc) => (
                    <div key={loc} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-stockstrail-green-light/30 transition-colors flex flex-col justify-between">
                      <div>
                        <h4 className="text-white font-semibold text-xl mb-2 flex items-center gap-2">
                          <span className="text-stockstrail-green-light">📍</span> {loc}
                        </h4>
                        <p className="text-white/70 leading-relaxed text-sm mb-4">
                          If you are in {loc} looking for {serviceName} — Stockstrail is your certified advisor.
                        </p>
                      </div>
                      <Link 
                        href={serviceUrl}
                        className="text-stockstrail-green-light font-medium text-sm hover:underline flex items-center gap-1 group"
                      >
                        Get Started <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServiceGEOSection;
