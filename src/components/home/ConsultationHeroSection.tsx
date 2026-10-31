'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  TrendingUp, 
  ShieldCheck, 
  Landmark, 
  Wallet, 
  BarChart3, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Lock, 
  Star, 
  MessageSquare, 
  PhoneCall, 
  Calculator,
  Compass
} from 'lucide-react';
import { addQuery } from '@/lib/database/queries';

const serviceOptions = [
  { id: 'mutual-funds', label: 'Mutual Funds SIP', icon: TrendingUp, href: '/services/mutual-funds' },
  { id: 'insurance', label: 'Term & Health Insurance', icon: ShieldCheck, href: '/services/insurance' },
  { id: 'fixed-deposit', label: 'High-Yield FDs', icon: Landmark, href: '/services/fixed-deposit' },
  { id: 'loan', label: 'Loan Against MF', icon: Wallet, href: '/services/loan' },
  { id: 'open-demat', label: 'Open Demat Account', icon: BarChart3, href: '/services/open-demat' },
  { id: 'full-planning', label: 'Full Financial Roadmap', icon: Compass, href: '/lets-talk' },
];

export default function ConsultationHeroSection() {
  const [selectedService, setSelectedService] = useState('Mutual Funds SIP');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await addQuery({
        name: name.trim(),
        phone: phone.trim(),
        email: '',
        service: selectedService,
        message: note.trim() 
          ? `[Home Consultation Hero] Goal: ${selectedService}. Note: ${note.trim()}`
          : `[Home Consultation Hero] Requested free consultation for ${selectedService}`,
      });

      if (error) {
        console.error('Submission error:', error);
      }

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting consultation:', err);
      // Still allow friendly resolution
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const text = `Hi Vikrant, I would like to book a Free Personalized Financial Consultation for *${selectedService}*. My name is *${name || 'Investor'}*.`;
    return `https://wa.me/919736304663?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="free-consultation" 
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#011413] via-[#011d1c] to-[#011413] text-white border-y border-white/5"
      aria-label="Free Financial Consultation Booking"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-stockstrail-green-light/8 rounded-full blur-[170px]" />
        <div className="absolute -top-32 right-10 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1.5 text-xs font-semibold text-stockstrail-green-light tracking-wide uppercase backdrop-blur-md shadow-[0_0_20px_rgba(0,255,151,0.15)]">
            <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
            <span>100% Free Consultation</span>
            <span className="text-white/30">•</span>
            <span className="text-white/90">AMFI Registered ARN-284122</span>
            <span className="text-white/30">•</span>
            <span className="text-stockstrail-green-light hidden sm:inline">Zero Sales Pressure</span>
          </div>
        </div>

        {/* SECTION HEADER & HUMAN CONVERSION HEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-4">
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]"
            style={{ fontFamily: 'var(--font-product-sans)' }}
          >
            Book a Free Consultation Call to Get{' '}
            <span className="gradient-text block sm:inline">Personalized Financial Consultation</span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Stop losing precious compound interest in low-yield savings. Speak 1-on-1 with certified financial expert{' '}
            <Link href="/about" className="text-white font-semibold underline decoration-stockstrail-green-light/50 underline-offset-4 hover:text-stockstrail-green-light transition-colors">
              Vikrant Bhardwaj
            </Link>{' '}
            and walk away with a custom, high-clarity financial roadmap tailored to your family milestones.
          </p>
        </div>

        {/* 2-COLUMN CONVERSION LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: PSYCHOLOGICAL COPY & INTERNAL SERVICE ECOSYSTEM (SEO POWERHOUSE) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* The Psychological Problem & Solution Narrative */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] space-y-4">
              <div className="flex items-center gap-2 text-stockstrail-green-light font-bold text-sm tracking-wide uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Why 200+ Families Choose Stockstrail</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-product-sans)' }}>
                Every Year Delayed in Low-Yield Accounts Costs Your Family Lakhs.
              </h3>
              <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                Most investors get sold products designed to enrich brokers, not their families. At Stockstrail, our fiduciary guidance connects all pieces of your financial life into one clear, inflation-beating plan. Whether you are building an emergency fund, saving for your child&apos;s education, or preparing for early retirement, you get complete clarity before investing a single rupee.
              </p>
            </div>

            {/* Complete Services Internal Linking Matrix */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stockstrail-green-light">
                Explore Our Comprehensive Financial Services
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Service 1: Mutual Funds */}
                <Link 
                  href="/services/mutual-funds"
                  className="group p-4 rounded-2xl bg-[#021716]/80 border border-white/10 hover:border-stockstrail-green-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,255,151,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-stockstrail-green-light group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                        Mutual Funds SIP
                      </h5>
                      <p className="text-xs text-white/60">
                        Top equity, debt &amp; tax-saving ELSS funds.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 2: Insurance */}
                <Link 
                  href="/services/insurance"
                  className="group p-4 rounded-2xl bg-[#021716]/80 border border-white/10 hover:border-stockstrail-green-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,255,151,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                        Term &amp; Health Insurance
                      </h5>
                      <p className="text-xs text-white/60">
                        Cashless mediclaim &amp; family life protection.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 3: Fixed Deposits */}
                <Link 
                  href="/services/fixed-deposit"
                  className="group p-4 rounded-2xl bg-[#021716]/80 border border-white/10 hover:border-stockstrail-green-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,255,151,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                        High-Yield Fixed Deposits
                      </h5>
                      <p className="text-xs text-white/60">
                        Up to 8.5%+ guaranteed return with zero risk.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 4: Loan Against Mutual Funds */}
                <Link 
                  href="/services/loan"
                  className="group p-4 rounded-2xl bg-[#021716]/80 border border-white/10 hover:border-stockstrail-green-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,255,151,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                        Loan Against MF (LAMF)
                      </h5>
                      <p className="text-xs text-white/60">
                        Instant emergency cash without selling funds.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 5: Open Demat Account */}
                <Link 
                  href="/services/open-demat"
                  className="group p-4 rounded-2xl bg-[#021716]/80 border border-white/10 hover:border-stockstrail-green-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,255,151,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                        Open Demat Account
                      </h5>
                      <p className="text-xs text-white/60">
                        100% paperless onboarding with top brokers.
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Service 6: Financial Protection & Health */}
                <Link 
                  href="/services/financial-protection"
                  className="group p-4 rounded-2xl bg-[#021716]/80 border border-white/10 hover:border-stockstrail-green-light/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,255,151,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-stockstrail-green-light transition-colors">
                        Financial Protection Plan
                      </h5>
                      <p className="text-xs text-white/60">
                        360° shield against medical inflation &amp; debt.
                      </p>
                    </div>
                  </div>
                </Link>

              </div>
            </div>

            {/* Free Calculators & Risk Profile Jump Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-white/70">
              <span className="font-semibold text-white">Free Interactive Tools:</span>
              <Link 
                href="/check-risk-profile" 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-stockstrail-green-light" />
                <span>Check Risk Score Quiz</span>
              </Link>
              <Link 
                href="/calculators/sip" 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light transition-colors"
              >
                <Calculator className="w-3.5 h-3.5 text-stockstrail-green-light" />
                <span>SIP Calculator</span>
              </Link>
              <Link 
                href="/calculators" 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-stockstrail-green-light/50 hover:text-stockstrail-green-light transition-colors"
              >
                <span>All 6 Wealth Calculators &rarr;</span>
              </Link>
            </div>

            {/* Trust Proof Badges */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block" style={{ fontFamily: 'var(--font-product-sans)' }}>
                  ₹0 Cost
                </span>
                <span className="text-xs text-white/60">No Hidden Fees</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-stockstrail-green-light block" style={{ fontFamily: 'var(--font-product-sans)' }}>
                  4.9 ★
                </span>
                <span className="text-xs text-white/60">15+ Google Reviews</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold text-white block" style={{ fontFamily: 'var(--font-product-sans)' }}>
                  15 Mins
                </span>
                <span className="text-xs text-white/60">Quick Strategy Response</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-CONVERSION INSTANT BOOKING FORM */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-stockstrail-green-light/30 bg-[#021716]/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,255,151,0.15)] space-y-6">
              
              {/* Card Header with VIP Urgency */}
              <div className="space-y-1.5 border-b border-white/10 pb-5 text-left">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    Limited: 5 Slots / Day
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Principal Advisor Active
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-product-sans)' }}>
                  Claim Your Free Consultation
                </h3>
                <p className="text-xs sm:text-sm text-white/70">
                  Select your primary financial interest and get personal advice directly from Vikrant Bhardwaj (AMFI ARN-284122).
                </p>
              </div>

              {submitted ? (
                /* SUCCESS STATE: CELEBRATION & DIRECT WHATSAPP ACTION */
                <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-stockstrail-green-light/40 flex items-center justify-center mx-auto text-stockstrail-green-light">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-product-sans)' }}>
                      Consultation Request Received!
                    </h4>
                    <p className="text-xs sm:text-sm text-white/75 max-w-sm mx-auto">
                      Thank you, <strong className="text-white">{name}</strong>. Our principal consultant will reach out via WhatsApp/Call on <strong className="text-stockstrail-green-light">{phone}</strong> shortly.
                    </p>
                  </div>

                  <div className="pt-2 space-y-3">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Connect Immediately on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-white/50 hover:text-white underline underline-offset-4"
                    >
                      Submit another consultation request
                    </button>
                  </div>
                </div>
              ) : (
                /* INTERACTIVE BOOKING FORM */
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Step 1: Service Selection Pills */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-white/90 uppercase tracking-wider block">
                      1. Select Your Service of Interest:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc.id}
                          type="button"
                          onClick={() => setSelectedService(svc.label)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-medium border text-left transition-all ${
                            selectedService === svc.label
                              ? 'bg-stockstrail-green-light/20 border-stockstrail-green-light text-white shadow-[0_0_15px_rgba(0,255,151,0.25)]'
                              : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.07] hover:text-white'
                          }`}
                        >
                          <svc.icon className={`w-3.5 h-3.5 shrink-0 ${selectedService === svc.label ? 'text-stockstrail-green-light' : 'text-white/40'}`} />
                          <span className="truncate">{svc.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Name & Phone Inputs */}
                  <div className="space-y-3.5">
                    <div>
                      <label htmlFor="hero-consult-name" className="text-xs font-semibold text-white/90 uppercase tracking-wider block mb-1">
                        2. Your Full Name:
                      </label>
                      <input
                        id="hero-consult-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none focus:border-stockstrail-green-light focus:ring-1 focus:ring-stockstrail-green-light transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="hero-consult-phone" className="text-xs font-semibold text-white/90 uppercase tracking-wider block mb-1">
                        3. WhatsApp / Phone Number:
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-stockstrail-green-light">
                          +91
                        </span>
                        <input
                          id="hero-consult-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={15}
                          className="w-full rounded-xl bg-white/[0.05] border border-white/15 pl-12 pr-4 py-3 text-sm text-white placeholder-white/35 focus:outline-none focus:border-stockstrail-green-light focus:ring-1 focus:ring-stockstrail-green-light transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="hero-consult-note" className="text-xs font-semibold text-white/70 uppercase tracking-wider block mb-1">
                        Optional Note or Target Goal:
                      </label>
                      <input
                        id="hero-consult-note"
                        type="text"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="e.g. Planning ₹15,000 monthly SIP / Retirement"
                        className="w-full rounded-xl bg-white/[0.05] border border-white/15 px-4 py-2.5 text-xs text-white placeholder-white/35 focus:outline-none focus:border-stockstrail-green-light transition-all"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-rose-400 font-medium bg-rose-500/10 border border-rose-500/20 px-3 py-2 rounded-lg">
                      {errorMsg}
                    </p>
                  )}

                  {/* Step 3: High Conversion CTA */}
                  <div className="space-y-2.5 pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full relative inline-flex items-center justify-center gap-2 rounded-2xl bg-stockstrail-green-light px-6 py-4 text-sm font-bold text-black shadow-[0_0_25px_rgba(0,255,151,0.35)] hover:shadow-[0_0_40px_rgba(0,255,151,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50"
                      style={{ fontFamily: 'var(--font-product-sans)' }}
                    >
                      <span>{submitting ? 'Securing Your Strategy Call...' : 'Book My Free Consultation Call'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="relative flex py-1 items-center">
                      <div className="flex-grow border-t border-white/10" />
                      <span className="flex-shrink mx-3 text-[11px] text-white/40 uppercase">or instant chat</span>
                      <div className="flex-grow border-t border-white/10" />
                    </div>

                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/10 hover:border-[#25D366]/50 px-4 py-3 text-xs font-semibold text-white transition-all hover:scale-[1.01]"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Chat Directly on WhatsApp (+91 97363 04663)</span>
                    </a>
                  </div>

                  {/* Micro-Security Reassurance */}
                  <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-white/50 border-t border-white/10">
                    <span className="inline-flex items-center gap-1">
                      <Lock className="w-3 h-3 text-stockstrail-green-light" />
                      100% Confidential
                    </span>
                    <span>•</span>
                    <span>Zero Spam Guarantee</span>
                    <span>•</span>
                    <span>AMFI ARN-284122</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

