import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowRight, Facebook, Linkedin, Instagram, Send, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

const BackToTopButton = dynamic(() => import('./BackToTopButton'), {
  loading: () => null
});

const StockstrailLogo = () => (
  <div className="flex items-center gap-2.5">
    <svg
      width="32"
      height="35"
      viewBox="0 0 32 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
    >
      <rect
        x="3.74097"
        y="16.0264"
        width="20.8942"
        height="3.71985"
        fill="url(#paint0_linear)"
      />
      <path
        d="M1.15294 18.553C0.922293 18.3223 0.923909 17.9479 1.15654 17.7192L15.5948 3.52791C16.0954 3.03584 16.8991 3.0393 17.3955 3.53568L18.6805 4.82068C19.183 5.32315 19.1794 6.13889 18.6726 6.63701L6.52575 18.5761C5.032 20.0444 2.63398 20.034 1.15294 18.553Z"
        fill="#00D873"
      />
      <path
        d="M20.498 0.96257C20.9132 0.86584 21.2857 1.23841 21.189 1.65361L19.7088 8.0073C19.6064 8.447 19.0607 8.6029 18.7414 8.2837L13.868 3.41016C13.5487 3.09092 13.7046 2.54519 14.1443 2.44276L20.498 0.96257Z"
        fill="#00D873"
      />
      <path
        d="M30.5214 17.0648C30.6657 17.209 30.6647 17.4433 30.5192 17.5863L15.742 32.1108C15.3414 32.5044 14.6985 32.5017 14.3014 32.1046L12.6547 30.4578C12.2527 30.0559 12.2555 29.4033 12.6609 29.0048L24.8337 17.0402C26.415 15.4859 28.9536 15.4969 30.5214 17.0648Z"
        fill="#00D873"
      />
      <path
        d="M11.0196 34.4984C10.6044 34.5951 10.2318 34.2225 10.3286 33.8073L11.8087 27.4536C11.9112 27.0139 12.4569 26.858 12.7761 27.1773L17.6496 32.0508C17.9688 32.37 17.8129 32.9157 17.3733 33.0182L11.0196 34.4984Z"
        fill="#00D873"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-8.8767"
          y1="14.2993"
          x2="25.1661"
          y2="20.3933"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00D873" />
          <stop offset="1" stopColor="#00D873" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
    <div className="flex items-baseline">
      <span className="text-white font-product-sans text-[26px] font-bold">Stocks</span>
      <span className="text-white font-product-sans text-[26px] font-normal">trail</span>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#011413] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 w-full text-white/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* TOP MAIN 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUMN 1: BRAND & CREDENTIALS (4 COLS) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <StockstrailLogo />
            </Link>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              Personalized financial planning and wealth guidance for Indian families and global NRIs. Transparent, unbiased advice focused on your family milestones.
            </p>

            {/* Regulatory Badge */}
            <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-stockstrail-green-light font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>AMFI Registered Distributor</span>
              </div>
              <div className="text-white/80 font-mono text-[11px]">
                ARN-284122 · NISM Series V-A Certified
              </div>
              <div className="text-white/50 text-[10px]">
                Founder &amp; Principal Advisor: Vikrant Bhardwaj
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stockstrail on Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-stockstrail-green-light hover:text-black flex items-center justify-center text-white/70 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/stockstrail/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stockstrail on LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-stockstrail-green-light hover:text-black flex items-center justify-center text-white/70 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/stockstrail/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stockstrail on Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-stockstrail-green-light hover:text-black flex items-center justify-center text-white/70 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/stockstrail"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stockstrail on Telegram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-stockstrail-green-light hover:text-black flex items-center justify-center text-white/70 transition-all"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: FINANCIAL SERVICES (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stockstrail-green-light">
              Financial Solutions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/services/mutual-funds" className="hover:text-stockstrail-green-light transition-colors">
                  Mutual Funds SIP &amp; Lumpsum
                </Link>
              </li>
              <li>
                <Link href="/services/fixed-deposit" className="hover:text-stockstrail-green-light transition-colors">
                  Fixed Deposits (FD) Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/insurance" className="hover:text-stockstrail-green-light transition-colors">
                  Term &amp; Health Insurance
                </Link>
              </li>
              <li>
                <Link href="/services/loan" className="hover:text-stockstrail-green-light transition-colors">
                  Loan Against Mutual Funds (LAMF)
                </Link>
              </li>
              <li>
                <Link href="/services/open-demat" className="hover:text-stockstrail-green-light transition-colors">
                  Demat &amp; Trading Account
                </Link>
              </li>
              <li>
                <Link href="/services/financial-protection" className="hover:text-stockstrail-green-light transition-colors">
                  Comprehensive Wealth Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: PLANNING TOOLS & KNOWLEDGE (2 COLS) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stockstrail-green-light">
              Tools &amp; Learning
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/check-risk-profile" className="hover:text-stockstrail-green-light transition-colors flex items-center gap-1.5 font-medium text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-stockstrail-green-light" />
                  Free Risk Score Quiz
                </Link>
              </li>
              <li>
                <Link href="/calculators/sip" className="hover:text-stockstrail-green-light transition-colors">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/lumpsum" className="hover:text-stockstrail-green-light transition-colors">
                  Lumpsum Calculator
                </Link>
              </li>
              <li>
                <Link href="/calculators/fd" className="hover:text-stockstrail-green-light transition-colors">
                  FD Calculator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-stockstrail-green-light transition-colors">
                  Financial Insights Blog
                </Link>
              </li>
              <li>
                <Link href="/learning" className="hover:text-stockstrail-green-light transition-colors">
                  Stockstrail Academy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT & OFFICE (3 COLS) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stockstrail-green-light">
              Connect With Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919736304663" className="hover:text-stockstrail-green-light font-semibold text-white block">
                    +91 97363-04663
                  </a>
                  <span className="text-[11px] text-white/50">Mon–Sat 9:00 AM – 8:00 PM IST</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                <a href="mailto:connect@stockstrail.in" className="hover:text-stockstrail-green-light text-white break-all">
                  connect@stockstrail.in
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                <span className="text-[11px] text-white/70 leading-relaxed">
                  Mata, Chintapurni Rd, near Punjab &amp; Sind Bank, Moien, Chintpurni, Himachal Pradesh 177110
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/lets-talk"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stockstrail-green-light text-black text-xs font-bold hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,151,0.2)]"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* STATUTORY REGULATORY & COMPLIANCE STRIP */}
        <div className="pt-8 border-t border-white/10 space-y-4 text-xs text-white/60">
          <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
            <p className="font-semibold text-white/80">
              Regulatory Disclosures &amp; Statutory Risk Notice:
            </p>
            <p className="text-[11px] text-white/60 leading-relaxed">
              <strong>Stockstrail</strong> is an AMFI-Registered Mutual Fund Distributor (ARN-284122). We distribute mutual funds and financial products and receive standard commissions from Asset Management Companies (AMCs) as disclosed in our commission schedule. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px]">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/about" className="hover:text-stockstrail-green-light transition-colors">
                About Stockstrail
              </Link>
              <Link href="/commission-disclosure" className="hover:text-stockstrail-green-light transition-colors">
                Commission Disclosure
              </Link>
              <a href="/CoC/revisedcoc.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-stockstrail-green-light transition-colors">
                Code of Conduct
              </a>
              <Link href="/terms-and-conditions" className="hover:text-stockstrail-green-light transition-colors">
                Terms &amp; Conditions
              </Link>
              <Link href="/nse-holidays" className="hover:text-stockstrail-green-light transition-colors">
                Market Holidays
              </Link>
            </div>

            <p className="text-white/40">
              © 2026 Stockstrail. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>

      <BackToTopButton />
    </footer>
  );
}
