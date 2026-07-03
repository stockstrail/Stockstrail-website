import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ServiceFAQSection from "@/components/services/ServiceFAQSection";
import ServiceGEOSection from "@/components/services/ServiceGEOSection";

const faqs = [
  {
    question: "How do I open a Demat Account through Stockstrail?",
    answer: "Visit stockstrail.in/open-demat and select your preferred broker partner (AngelOne, Zerodha, Alice Blue, HDFC Sky, or Groww). Complete the online KYC — PAN, Aadhaar, bank details, selfie — in under 15 minutes. Stockstrail's advisor will help you choose the right broker and guide you on your first investments after account activation."
  },
  {
    question: "What documents are required to open a Demat account?",
    answer: "To open a Demat account, you need a PAN card, an Aadhaar card (linked to your mobile number for OTP verification), a canceled cheque or bank statement (for bank proof), and a signature on a blank piece of paper. The entire process is 100% paperless and digital."
  },
  {
    question: "Are there any charges for opening a Demat account?",
    answer: "Stockstrail partners with several top brokers that offer Zero Account Opening Fees. While opening the account is often free, brokers may charge a nominal Annual Maintenance Charge (AMC), though some of our partners provide Zero AMC options for the first year or for lifetime under specific conditions."
  },
  {
    question: "Can I open multiple Demat accounts?",
    answer: "Yes, you can open multiple Demat accounts with different brokers using the same PAN card. However, you cannot open more than one Demat account with the exact same broker."
  },
  {
    question: "Is it safe to hold shares in a Demat account?",
    answer: "Absolutely. Demat accounts in India are maintained by government-regulated depositories (CDSL or NSDL) and monitored by SEBI. Your shares are held securely in electronic format, eliminating the risks of physical damage, theft, or forgery associated with paper certificates."
  }
];

export const metadata: Metadata = {
  title: "Open Demat Account - Start Stock Market Investing | Stockstrail",
  description:
    "Open a free Demat account with Stockstrail. Trade stocks, mutual funds, IPOs, and more with India's top brokers. Zero account opening charges, seamless KYC, and expert guidance.",
  keywords:
    "demat account, open demat, stock trading, share market, IPO, equity investment, stockstrail, online trading",
  alternates: {
    canonical: "/open-demat",
  },
  openGraph: {
    title: "Open Demat Account - Start Stock Market Investing | Stockstrail",
    description:
      "Open a free Demat account and start investing in stocks, IPOs, and mutual funds. Zero charges, quick KYC, expert support.",
    url: "https://stockstrail.in/open-demat",
    type: "website",
    locale: "en_IN",
    images: ["/stockstrail.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Demat Account - Start Stock Market Investing | Stockstrail",
    description:
      "Open a free Demat account and start investing in stocks, IPOs, and mutual funds. Zero charges, quick KYC, expert support.",
  },
};

const brokers = [
  {
    name: "Dhan",
    key: "dhan",
    href: "https://join.dhan.co/?invite=PFGYA81275",
    logoSrc: "/logos/dhan.webp",
  },
  {
    name: "Angel One",
    key: "angelone",
    href: "https://angel-one.onelink.me/Wjgr/1d71tbln",
    logoSrc: "/logos/angelone.webp",
    highlight: true,
  },
  {
    name: "Alice Blue",
    key: "aliceblue",
    href: "https://ekyc.aliceblueonline.com/?source=EKOL716",
    logoSrc: "/logos/aliceblue.webp",
  },
  // {
  //   name: "HDFC SKY",
  //   key: "hdfc-sky",
  //   href: "https://www.hdfcsky.com/open-demat-account",
  //   logoSrc: "/logos/hdfcsky.webp",
  // },
  {
    name: "Zerodha",
    key: "zerodha",
    href: "https://zerodha.com/open-account?c=FBX218",
    logoSrc: "/logos/zerodha.webp",
  },

];

const Row = ({ name, href, logoSrc, highlight = false }: { name: string; href: string; logoSrc?: string; highlight?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group block rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 sm:px-7 py-3 sm:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:bg-white/[0.14] hover:border-stockstrail-green-light/50 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] hover:scale-[1.02] transition-all duration-300"
    aria-label={`Open account with ${name}`}
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="h-12 sm:h-16 w-36 sm:w-60 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group-hover:bg-white/10 group-hover:border-stockstrail-green-light/30 transition-all duration-300 relative">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={`${name} logo`}
              width={240}
              height={64}
              className="h-full w-auto max-w-full object-contain px-1 sm:px-2 group-hover:scale-105 transition-transform duration-300"
            />
          ) : null}
          {!logoSrc && (
            <span className="text-white text-sm sm:text-base font-medium group-hover:text-stockstrail-green-light transition-colors duration-300">{name}</span>
          )}
        </div>
        <div className="text-white text-base sm:text-xl font-medium group-hover:text-stockstrail-green-light transition-colors duration-300">{name}</div>
      </div>
      <div
        className={
          `inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,255,151,0.4)] ${highlight
            ? 'bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)] group-hover:shadow-[0_0_25px_rgba(0,255,151,0.6)]'
            : 'bg-white/10 group-hover:bg-[radial-gradient(ellipse_at_center,_#00FF97_0%,_#007D42_100%)]'
          }`
        }
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform duration-300">
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </a>
);


export default function OpenDemat() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-96 bg-stockstrail-bg-light blur-185 opacity-40" />
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-product-sans text-2xl sm:text-4xl lg:text-6xl font-normal uppercase gradient-text mb-6">
            Open Your Demat Account
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed text-lg">
            Start your stock market journey with a free Demat account. Trade
            equities, IPOs, mutual funds, and more with India&apos;s leading
            brokers through Stockstrail.
          </p>
        </div>
      </section>

      {/* What is a Demat Account */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur-sm group hover:border-stockstrail-green-light/50 hover:shadow-[0_0_40px_rgba(0,255,151,0.15)] transition-all duration-500 flex items-center justify-center">
              <Image
                src="/hero/open-demat-account-online.webp"
                alt="What is a Demat Account"
                width={720}
                height={420}
                loading="lazy"
                className="w-full h-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold text-stockstrail-green-light mb-6">
                What is a Demat Account?
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                A Demat (Dematerialized) account is an electronic account that
                holds your shares, bonds, mutual funds, and other securities in
                digital format. Just like a bank account holds your money, a
                Demat account holds your investments.
              </p>
              <p className="text-white/80 leading-relaxed mb-4">
                It eliminates the need for physical share certificates and makes
                buying, selling, and transferring securities seamless and secure.
                Every investor in India needs a Demat account to participate in
                the stock market.
              </p>
              <p className="text-white/80 leading-relaxed">
                At Stockstrail, we help you open a Demat account with trusted
                brokers, guide you through the entire process, and provide
                ongoing support for your investment journey.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Open a Demat Account */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Open a Demat Account?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Stock Market Access",
                desc: "Buy and sell shares of companies listed on NSE and BSE directly from your account.",
              },
              {
                title: "IPO Participation",
                desc: "Apply for Initial Public Offerings (IPOs) and get allotted shares directly in your Demat account.",
              },
              {
                title: "Mutual Fund Holdings",
                desc: "Hold mutual fund units in dematerialized form for easy tracking and management.",
              },
              {
                title: "Safe & Secure",
                desc: "Digital storage eliminates risks of theft, damage, or forgery associated with physical certificates.",
              },
              {
                title: "Easy Transfers",
                desc: "Transfer securities instantly between accounts without paperwork or delays.",
              },
              {
                title: "Single Dashboard",
                desc: "View all your investments - stocks, bonds, ETFs, and mutual funds - in one place.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* What Can You Do with a Demat Account */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            What Can You Do with a Demat Account?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Trading & Investing
              </h3>
              <ul className="space-y-3 text-white/80">
                <li>• Buy and sell stocks on NSE & BSE</li>
                <li>• Invest in Exchange Traded Funds (ETFs)</li>
                <li>• Trade in futures and options (F&O)</li>
                <li>• Apply for IPOs and new fund offers</li>
                <li>• Invest in government and corporate bonds</li>
              </ul>
            </div>

            <div className="bg-stockstrail-bg-light/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                Portfolio Management
              </h3>
              <ul className="space-y-3 text-white/80">
                <li>• Track all investments in a single dashboard</li>
                <li>• Receive dividends and bonuses directly</li>
                <li>• Transfer shares between Demat accounts</li>
                <li>• Pledge shares as collateral for loans</li>
                <li>• Set up Systematic Investment Plans (SIPs)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Open a Demat Account */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 bg-stockstrail-bg-light/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Who Should Open a Demat Account?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "First-time investors looking to enter the stock market",
              "Individuals wanting to apply for IPOs",
              "Mutual fund investors preferring demat-held units",
              "Traders interested in equity, F&O, or commodity trading",
              "NRIs looking to invest in Indian markets",
              "Anyone wanting to build long-term wealth through equities",
              "Professionals seeking portfolio diversification",
              "Young earners starting their investment journey early",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-lg p-5 border border-white/10 hover:border-stockstrail-green-light/30 transition-all duration-300"
              >
                <div className="text-stockstrail-green-light text-2xl font-bold">
                  →
                </div>
                <p className="text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Stockstrail */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-product-sans font-semibold gradient-text mb-12 text-center">
            Why Open Demat Account with Stockstrail?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multiple Broker Options",
                desc: "Choose from AngelOne, Zerodha, Groww, HDFC SKY, Alice Blue, and more top brokers.",
              },
              {
                title: "Zero Opening Charges",
                desc: "We help you open your Demat account completely free of cost with most partner brokers.",
              },
              {
                title: "Quick eKYC Process",
                desc: "Complete the entire account opening process online in under 15 minutes with Aadhaar-based eKYC.",
              },
              {
                title: "Expert Guidance",
                desc: "Our team guides you through broker selection, account setup, and your first investment.",
              },
              {
                title: "Ongoing Support",
                desc: "Get continuous assistance with trading platforms, portfolio queries, and account management.",
              },
              {
                title: "Trusted & Transparent",
                desc: "No hidden charges, no unnecessary upsells. We recommend what's genuinely best for you.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-stockstrail-green-light/30 hover:shadow-[0_0_24px_rgba(0,255,151,0.12)] transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-stockstrail-green-light mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm group-hover:text-white/90 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broker list */}
      <section id="brokers" className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-white text-3xl sm:text-4xl">Choose your preferred platform</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {brokers.map((b) => (
            <Row key={b.key} name={b.name} href={b.href} logoSrc={(b as any).logoSrc} highlight={Boolean((b as any).highlight)} />
          ))}
        </div>
      </section>

      <ServiceFAQSection faqs={faqs} />
      <ServiceGEOSection serviceName="Demat Account Opening" />
    </Layout>
  );
}



// {/* CTA after intro */}
// <section className="px-4 sm:px-6 lg:px-8 py-8">
//   <div className="max-w-6xl mx-auto text-center">
//     <a
//       href="https://flow.assetplus.in/client_onboarding/?advisor=659a79c11af778e82872513a"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 hover:scale-105 transition-all duration-300 font-work-sans font-medium"
//     >
//       <div className="w-3 h-3 bg-stockstrail-green-accent rounded-full" />
//       Open Free Demat Account - Get Started
//     </a>
//   </div>
// </section>
