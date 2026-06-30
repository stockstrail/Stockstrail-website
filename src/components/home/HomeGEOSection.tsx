'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const geoData = [
  {
    state: 'Himachal Pradesh',
    title: 'Stockstrail Financial Planning & Investment Guidance Across Himachal Pradesh',
    intro: 'Himachal Pradesh is one of India\'s most beautiful and economically evolving states — and its people deserve access to world-class financial planning and investment guidance just as much as anyone in a metro city. Stockstrail is proud to serve clients across all 12 districts of Himachal Pradesh, offering the same standard of certified, honest, and personalised financial advisory that we deliver to clients across India.',
    locations: [
      { name: 'Shimla', desc: 'Shimla, the state capital of Himachal Pradesh, is home to thousands of government employees, professionals, and business owners whose financial potential is often untapped. Stockstrail provides comprehensive financial planning in Shimla — from Mutual Fund SIPs and tax-saving investments to term insurance and fixed deposits.' },
      { name: 'Kangra', desc: 'Kangra is Himachal Pradesh\'s most populous district, home to Dharamshala, Palampur, and a vibrant mix of government employees, teachers, farmers, and entrepreneurs. Stockstrail offers dedicated financial planning in Kangra — covering Mutual Funds, Insurance, Loans, and Demat Account opening.' },
      { name: 'Mandi', desc: 'Mandi is often called the \'Varanasi of the Hills\' and is one of Himachal\'s most culturally and economically vibrant districts. Stockstrail brings professional investment guidance in Mandi to salaried professionals, business families, and traders — offering services in Mutual Funds, FD planning, health insurance, and goal-based financial planning.' },
      { name: 'Kullu', desc: 'Kullu and Manali are among India\'s most visited tourist destinations, home to hoteliers, tour operators, apple growers, and a growing number of young professionals. Stockstrail offers financial planning services in Kullu covering business loans, motor insurance, mutual fund SIPs, and risk profile assessment.' },
      { name: 'Solan', desc: 'Solan district — home to Baddi, Barotiwala, and Nalagarh — is Himachal Pradesh\'s industrial and pharmaceutical hub, with a large population of working professionals and factory employees. Stockstrail provides expert investment guidance in Solan, helping employees in Baddi and nearby areas start SIPs, open Demat Accounts, plan insurance coverage, and access home loans.' },
      { name: 'Sirmaur', desc: 'Sirmaur district, with its mix of agriculture, small industry, and government employment, has a growing community of first-time investors. Stockstrail offers financial planning in Sirmaur — from simple SIP planning and FD guidance to term insurance and health coverage — making professional financial advisory accessible to every household in Nahan, Paonta Sahib, and across Sirmaur.' },
      { name: 'Hamirpur', desc: 'Hamirpur is known for its high literacy rate and strong tradition of government service. Stockstrail serves the people of Hamirpur with goal-based financial planning — including child education funds, retirement planning through Mutual Funds, FD laddering strategies, and risk profiling.' },
      { name: 'Una', desc: 'Una district has seen rapid industrial and commercial growth in recent years. Stockstrail brings professional investment guidance in Una — covering Mutual Fund SIPs, loan advisory, insurance solutions, and Demat Account setup.' },
      { name: 'Bilaspur', desc: 'Bilaspur, situated along the Gobind Sagar Lake, has a thriving community of government employees, fishermen, and small business owners. Stockstrail offers financial planning services in Bilaspur — including Mutual Funds, fixed deposits, loan planning, and insurance advisory.' },
      { name: 'Chamba', desc: 'Chamba is one of Himachal Pradesh\'s most remote and scenic districts — and one where access to professional financial planning has historically been limited. Stockstrail is committed to changing this by offering remote financial advisory services in Chamba, covering Mutual Funds, health and life insurance, and SIP planning.' },
      { name: 'Kinnaur', desc: 'Kinnaur is famous for its apples, its landscapes, and its resilient communities. Farmers and traders in Kinnaur earn significant seasonal income that, when invested wisely, can create lasting wealth. Stockstrail offers financial planning in Kinnaur — including lump sum Mutual Fund investments, FD planning for seasonal income, crop and life insurance, and risk-based portfolio planning.' },
      { name: 'Lahaul & Spiti', desc: 'Lahaul & Spiti is Himachal Pradesh\'s largest and most sparsely populated district — a land of extraordinary beauty and extraordinary challenges. Stockstrail provides remote financial advisory for the communities of Lahaul & Spiti, offering access to Mutual Fund investments, insurance planning, and FD guidance through digital channels.' }
    ]
  },
  {
    state: 'Chandigarh Tricity',
    title: 'Stockstrail in Chandigarh Tricity – Financial Planning for Chandigarh, Mohali & Panchkula',
    intro: 'The Chandigarh Tricity — comprising Chandigarh, Mohali (SAS Nagar), and Panchkula — is one of North India\'s most prosperous urban clusters, home to IT professionals, government employees, business owners, and a thriving middle class. Stockstrail offers comprehensive financial planning in Chandigarh — covering Mutual Funds, Insurance, FDs, Loans, and Demat Account opening — serving the entire Tricity with equal dedication.',
    locations: [
      { name: 'Chandigarh', desc: 'The Tricity\'s high-income, high-aspiration population makes it an ideal environment for disciplined, goal-based investing. Stockstrail helps Tricity residents plan for home purchases, children\'s international education, early retirement, and wealth creation — with strategies built around the specific income patterns, tax situations, and lifestyle goals of Chandigarh\'s diverse professional community.' },
      { name: 'Mohali', desc: 'Mohali\'s thriving IT sector and pharmaceutical companies attract thousands of well-paid professionals who often struggle to find time for financial planning. Stockstrail\'s investment guidance in Mohali is designed for busy professionals — offering fast, digital-first onboarding, automated SIPs, and regular portfolio updates.' },
      { name: 'Panchkula', desc: 'Panchkula, Haryana\'s planned satellite city bordering Chandigarh, is home to government officials, retired professionals, and a growing residential population. Stockstrail offers financial planning in Panchkula tailored to both the wealth-building needs of younger residents and the income-protection needs of retirees — covering FDs, health insurance, senior citizen plans, and Mutual Fund SIPs.' }
    ]
  },
  {
    state: 'Delhi',
    title: 'Stockstrail in Delhi – Financial Planning & Investment Guidance in India\'s Capital',
    intro: 'Delhi is India\'s financial, political, and cultural capital — and home to one of the most financially aware populations in the country. Stockstrail serves clients across Delhi — from Dwarka and Rohini to South Delhi and East Delhi — offering expert financial planning in Delhi that covers Mutual Funds, Insurance, Loans, FD planning, and Demat Account setup.',
    locations: [
      { name: 'Delhi-NCR', desc: 'Delhi\'s diverse population — from salaried professionals and business owners to NRI families and retirees — requires financial planning that is equally diverse and flexible. Stockstrail\'s personalised approach ensures that every Delhi client receives a plan built specifically around their income, goals, tax situation, and risk comfort.' }
    ]
  },
  {
    state: 'Haryana',
    title: 'Stockstrail in Haryana – Investment Guidance for Every City and Town',
    intro: 'Haryana is one of India\'s fastest-growing states, with a booming real estate sector, strong agricultural income, and a rapidly expanding industrial base. Stockstrail serves clients across Haryana — including Gurugram, Faridabad, Ambala, Hisar, Rohtak, Karnal, Panipat, and Sonipat — offering comprehensive investment guidance in Haryana across Mutual Funds, Insurance, Loans, and FD solutions.',
    locations: [
      { name: 'Gurugram & Haryana Regions', desc: 'Haryana\'s agricultural community, which earns significant seasonal income from crops, can benefit enormously from disciplined SIP investing and FD laddering strategies that convert seasonal windfalls into long-term wealth. Stockstrail specialises in building financial plans that work around income seasonality — a crucial consideration for Haryana\'s farming families and rural entrepreneurs.' }
    ]
  },
  {
    state: 'Uttar Pradesh',
    title: 'Stockstrail in Uttar Pradesh – Financial Planning Across India\'s Largest State',
    intro: 'Uttar Pradesh — India\'s most populous state — is home to an enormous and diverse population with a wide range of financial needs. From Noida and Greater Noida\'s IT corridor to the traders of Kanpur, the business families of Agra, and the aspirational youth of Lucknow — Stockstrail brings professional financial planning in Uttar Pradesh to every corner of this vast state.',
    locations: [
      { name: 'UP Network', desc: 'Stockstrail\'s digital-first advisory model makes it possible to serve clients in Lucknow, Varanasi, Agra, Kanpur, Meerut, Prayagraj, Gorakhpur, and beyond — without any geographical limitation. Whether you want to start a SIP, check your risk profile, open a Demat Account, or plan your insurance coverage — Stockstrail is accessible, responsive, and ready to serve you wherever you are in Uttar Pradesh.' }
    ]
  },
  {
    state: 'Uttarakhand',
    title: 'Stockstrail in Uttarakhand – Investment Guidance for the Land of Gods',
    intro: 'Uttarakhand — known for its spiritual heritage, scenic beauty, and a rapidly growing economy driven by tourism, hydropower, and a large government workforce — is a state with significant untapped investment potential. Stockstrail serves clients across Dehradun, Haridwar, Rishikesh, Nainital, Roorkee, Haldwani, and across both Garhwal and Kumaon divisions.',
    locations: [
      { name: 'Dehradun & Beyond', desc: 'From government teachers in Pauri to hotel owners in Mussoorie, from IT professionals in Dehradun to farmers in Pithoragarh — Stockstrail\'s financial planning in Uttarakhand is tailored to the unique economic landscape of each region. We help Uttarakhand residents build wealth through Mutual Funds, protect their families with insurance, grow their savings with FDs, and enter the equity market by opening Demat Accounts — with full support from our certified advisory team.' }
    ]
  }
];

const HomeGEOSection = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-stockstrail-green-light/5 blur-[150px] rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-in-from-top">
          <h2 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase mb-4">
            <span className="text-white">Financial Planning & Investment Guidance </span>
            <span className="gradient-text">Across North India</span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Stockstrail proudly serves clients across all major states and cities of North India — bringing certified, honest, and personalised financial advisory to every region.
          </p>
        </div>

        <Tabs defaultValue={geoData[0].state} className="w-full">
          <TabsList className="flex flex-wrap h-auto w-full justify-start md:justify-center gap-2 bg-transparent mb-8">
            {geoData.map((data) => (
              <TabsTrigger 
                key={data.state} 
                value={data.state}
                className="data-[state=active]:bg-stockstrail-green-light/20 data-[state=active]:text-stockstrail-green-light data-[state=active]:border-stockstrail-green-light border border-white/10 rounded-full px-6 py-2 text-white/70 hover:text-white transition-all"
              >
                {data.state}
              </TabsTrigger>
            ))}
          </TabsList>

          {geoData.map((data) => (
            <TabsContent key={data.state} value={data.state} className="focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10">
                <h3 className="text-2xl font-product-sans text-stockstrail-green-light mb-4">
                  {data.title}
                </h3>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  {data.intro}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.locations.map((loc) => (
                    <div key={loc.name} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-stockstrail-green-light/30 transition-colors">
                      <h4 className="text-white font-semibold text-xl mb-2">{loc.name}</h4>
                      <p className="text-white/70 leading-relaxed text-sm">
                        {loc.desc}
                      </p>
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

export default HomeGEOSection;
