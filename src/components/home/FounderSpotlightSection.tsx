'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  MapPin, 
  Award, 
  FileCheck, 
  Eye, 
  X,
  MessageSquare,
  Building2
} from 'lucide-react';

export default function FounderSpotlightSection() {
  const [previewCert, setPreviewCert] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#021312] border-y border-white/10">
      
      {/* Subtle Warm Background Depth */}
      <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Editorial Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/15 bg-white/[0.03] text-stockstrail-green-light text-xs font-mono tracking-wider font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Certified &amp; Regulated Advisory</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Meet Your Principal Advisor: <span className="text-stockstrail-green-light">Vikrant Bhardwaj</span>
          </h2>

          <p className="text-white/70 text-xs sm:text-base leading-relaxed">
            Real financial planning is personal. When you connect with Stockstrail, you receive direct, honest guidance from an AMFI-registered distributor—not an algorithm or a quota-driven call center.
          </p>
        </div>

        {/* Main Editorial Advisory Card */}
        <div className="rounded-3xl bg-[#031d1b] border border-white/15 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT 7 COLS: FOUNDER STORY & ADVISORY NOTE */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4 text-left">
                
                {/* Advisor Tagline */}
                <div className="space-y-1 border-b border-white/10 pb-4">
                  <div className="text-xs font-mono uppercase text-stockstrail-green-light font-semibold tracking-wider">
                    AMFI ARN-284122 · NISM Certified
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    “Every rupee you save represents years of hard work for your family.”
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  <p>
                    I founded <strong>Stockstrail</strong> after seeing hardworking families get locked into confusing 20-year insurance policies or speculative stock tips that didn&apos;t align with their life goals.
                  </p>
                  <p>
                    Our approach is simple: We sit down together, assess your family cash flows, review your risk comfort, and construct a clean, disciplined roadmap across mutual funds, fixed deposits, and family insurance.
                  </p>
                </div>

                {/* 3 Real Verification Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-stockstrail-green-light block">AMFI Registered</span>
                    <span className="text-xs font-bold text-white block">ARN-284122</span>
                    <span className="text-[10px] text-white/50 block">Active &amp; Verified</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-emerald-300 block">NISM Series V-A</span>
                    <span className="text-xs font-bold text-white block">Mutual Funds</span>
                    <span className="text-[10px] text-white/50 block">National Institute of Securities</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-0.5">
                    <span className="text-[10px] uppercase font-mono text-sky-300 block">SEBI Certified</span>
                    <span className="text-xs font-bold text-white block">Investor Exam</span>
                    <span className="text-[10px] text-white/50 block">Investor Protection</span>
                  </div>
                </div>

              </div>

              {/* Founder Signoff & Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white text-sm block">Vikrant Bhardwaj</span>
                    <span className="text-xs text-white/60">Founder &amp; Principal Financial Advisor</span>
                  </div>
                  <div className="text-[11px] font-mono text-stockstrail-green-light bg-stockstrail-green-light/10 px-3 py-1 rounded-full border border-stockstrail-green-light/20">
                    ₹0 Consultation Fee
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/lets-talk"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stockstrail-green-light text-black font-bold text-xs sm:text-sm hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,255,151,0.25)]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book Free 1-on-1 Call</span>
                  </Link>

                  <a
                    href="https://wa.me/919736304663?text=Hi%20Vikrant,%20I%20would%20like%20to%20schedule%20a%20free%20portfolio%20review."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 hover:border-emerald-400 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white ml-auto transition-colors"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* RIGHT 5 COLS: VERIFIED CERTIFICATES & PHYSICAL LOCATION */}
            <div className="lg:col-span-5 bg-[#011716] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between space-y-6">
              
              {/* CERTIFICATE PREVIEWS */}
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase text-white/90 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-stockstrail-green-light" />
                    Official Regulatory Credentials
                  </span>
                  <span className="text-[10px] text-white/50">Click to expand</span>
                </div>

                {/* 2 Certificate Thumbnails */}
                <div className="grid grid-cols-2 gap-3">
                  
                  {/* NISM Certificate */}
                  <div 
                    onClick={() => setPreviewCert('/about_us/fund_distributor.webp')}
                    className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 p-2 cursor-pointer hover:border-stockstrail-green-light transition-all"
                  >
                    <div className="relative h-24 sm:h-28 w-full rounded-xl overflow-hidden bg-black/60">
                      <Image
                        src="/about_us/fund_distributor.webp"
                        alt="NISM Series V-A Certification"
                        fill
                        sizes="(max-width: 768px) 50vw, 200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                        <span className="p-1.5 rounded-full bg-black/70 text-white group-hover:scale-110 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <span className="block text-[11px] font-semibold text-white/90 pt-2 text-center truncate">
                      NISM Series V-A
                    </span>
                  </div>

                  {/* SEBI Certificate */}
                  <div 
                    onClick={() => setPreviewCert('/about_us/sebi.webp')}
                    className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 p-2 cursor-pointer hover:border-stockstrail-green-light transition-all"
                  >
                    <div className="relative h-24 sm:h-28 w-full rounded-xl overflow-hidden bg-black/60">
                      <Image
                        src="/about_us/sebi.webp"
                        alt="SEBI Investor Certification"
                        fill
                        sizes="(max-width: 768px) 50vw, 200px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors flex items-center justify-center">
                        <span className="p-1.5 rounded-full bg-black/70 text-white group-hover:scale-110 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <span className="block text-[11px] font-semibold text-white/90 pt-2 text-center truncate">
                      SEBI Examination
                    </span>
                  </div>

                </div>
              </div>

              {/* PHYSICAL OFFICE PRESENCE */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-left">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                  <div className="text-xs text-white/80 space-y-1">
                    <strong className="text-white block font-semibold">Registered Branch Office:</strong>
                    <p className="text-[11px] text-white/60 leading-relaxed">
                      Mata, Chintapurni Rd, near Punjab &amp; Sind Bank, Moien, Chintpurni, Himachal Pradesh 177110
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-white/60">
                  <span>Serving across India &amp; Global NRIs</span>
                  <a href="tel:+919736304663" className="text-stockstrail-green-light hover:underline">
                    +91 97363-04663
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* CERTIFICATE LIGHTBOX MODAL */}
      {previewCert && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewCert(null)}
        >
          <div 
            className="relative max-w-3xl w-full max-h-[90vh] bg-[#021c1a] border border-white/20 rounded-3xl p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreviewCert(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="text-base font-bold text-white mb-4 pr-10">
              Official Certification Document
            </h4>

            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden bg-black">
              <Image
                src={previewCert}
                alt="Certification full view"
                fill
                className="object-contain"
                quality={95}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-white/60">
              <span>Verified with National Institute of Securities Markets / SEBI</span>
              <button
                onClick={() => setPreviewCert(null)}
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
