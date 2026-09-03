'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import JsonLd from '@/components/common/JsonLd';
import { addQuery } from '@/lib/database/queries';
import { trackCustomEvent } from '@/lib/tracking/utm';
import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function LetsTalk() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Mutual Funds SIP',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setError('Please enter a valid 10-digit phone/WhatsApp number.');
      return;
    }

    setSubmitting(true);
    try {
      await addQuery({
        name: form.name.trim(),
        phone: phoneDigits,
        email: form.email.trim() || 'not-provided@stockstrail.in',
        service: form.service || 'General Financial Planning',
        message: form.message.trim() || 'Requesting free financial consultation with Vikrant.',
      });

      // Prepare WhatsApp link
      const whatsappNumber = '919736304663';
      const whatsappText = `*New Consultation Request from Stockstrail Website*%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${phoneDigits}%0A*Service:* ${encodeURIComponent(form.service)}%0A*Note:* ${encodeURIComponent(form.message || 'I would like to schedule a free strategy call.')}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
      
      setSubmittedWhatsAppUrl(whatsappUrl);
      setSuccess(true);

      trackCustomEvent('generate_lead', {
        service: form.service,
        form_name: 'lets_talk_page',
      });

      setForm({ name: '', phone: '', email: '', service: 'Mutual Funds SIP', message: '' });
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Failed to submit. Please contact directly via WhatsApp or call.');
    } finally {
      setSubmitting(false);
    }
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FinancialService'],
    name: 'Stockstrail',
    image: 'https://www.stockstrail.in/stockstrail.png',
    '@id': 'https://www.stockstrail.in',
    url: 'https://www.stockstrail.in/lets-talk',
    telephone: '+919736304663',
    email: 'connect@stockstrail.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mata, Chintapurni Rd, near Punjab & Sind Bank, Moien',
      addressLocality: 'Chintpurni',
      addressRegion: 'Himachal Pradesh',
      postalCode: '177110',
      addressCountry: 'IN'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday'
      ],
      opens: '09:00',
      closes: '20:00'
    },
    sameAs: [
      'https://www.facebook.com/Stockstrail',
      'https://www.instagram.com/stockstrail',
      'https://www.linkedin.com/company/stockstrail'
    ]
  };

  return (
    <Layout>
      <JsonLd data={localBusinessSchema} />
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-20 overflow-hidden min-h-screen bg-stockstrail-bg">
        {/* Soft Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10" aria-hidden="true">
          <div className="absolute w-[700px] h-[400px] bg-stockstrail-green-light/10 rounded-full blur-[140px] left-1/2 -translate-x-1/2 top-20" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto space-y-12">
          
          {/* TOP INTRO HEADER */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 text-stockstrail-green-light text-xs font-mono uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
              100% Free Consultation · AMFI ARN-284122
            </div>

            <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Let&apos;s Build Your Family&apos;s <br className="hidden sm:inline" />
              <span className="gradient-text">Financial Future Together</span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Have questions about starting a Mutual Fund SIP, choosing high-yield Fixed Deposits, protecting your family with Term Insurance, or getting a portfolio second opinion? We&apos;re here to help with zero sales pressure.
            </p>
          </div>

          {/* GRID: LEFT CONTACT CARDS / RIGHT INTAKE FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: CONTACT DETAILS & HUMAN REASSURANCE */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Founder Promise Box */}
              <div className="p-6 rounded-3xl bg-[#021f1c] border border-stockstrail-green-light/30 space-y-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stockstrail-green-light/20 flex items-center justify-center text-stockstrail-green-light font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Our 100% Honest Promise</h3>
                    <p className="text-xs text-white/60">From Vikrant Bhardwaj, Founder</p>
                  </div>
                </div>
                <p className="text-xs text-white/80 leading-relaxed">
                  When you connect with Stockstrail, you talk directly with a certified financial professional. No call centers, no high-pressure sales pitches, and zero consultation fees.
                </p>
              </div>

              {/* Direct Touchpoints Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stockstrail-green-light block">
                    Direct Call
                  </span>
                  <a href="tel:+919736304663" className="text-sm font-bold text-white hover:text-stockstrail-green-light transition-colors flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-stockstrail-green-light" />
                    +91 97363-04663
                  </a>
                  <span className="text-[11px] text-white/50 block">Mon–Sat, 9am–8pm IST</span>
                </div>

                {/* WhatsApp */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 block">
                    Instant WhatsApp
                  </span>
                  <a 
                    href="https://wa.me/919736304663?text=Hi%20Vikrant,%20I%20would%20like%20to%20know%20more%20about%20Stockstrail%20financial%20planning."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    Chat with Us
                  </a>
                  <span className="text-[11px] text-white/50 block">Fastest response</span>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-stockstrail-green-light/40 transition-all space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-sky-400 block">
                    Official Email
                  </span>
                  <a href="mailto:connect@stockstrail.in" className="text-xs font-bold text-white hover:text-sky-300 transition-colors flex items-center gap-2 break-all">
                    <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    connect@stockstrail.in
                  </a>
                  <span className="text-[11px] text-white/50 block">Replies within 12h</span>
                </div>

                {/* Certifications */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/60 block">
                    Registration
                  </span>
                  <span className="text-xs font-bold text-white block">
                    AMFI ARN-284122
                  </span>
                  <span className="text-[11px] text-white/50 block">NISM Series V-A Certified</span>
                </div>
              </div>

              {/* Physical Branch Address */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-white/80">
                  <MapPin className="w-4 h-4 text-stockstrail-green-light shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Stockstrail Office:</span>
                    <span>Mata, Chintapurni Rd, near Punjab &amp; Sind Bank, Moien, Chintpurni, Himachal Pradesh 177110</span>
                  </div>
                </div>

                <div className="h-36 rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src="https://www.google.com/maps?q=31.803886,76.1098365&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Stockstrail Office Location"
                  />
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: STREAMLINED LEAD CAPTURE FORM */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-9 rounded-3xl bg-[#021716]/95 border border-white/15 shadow-2xl space-y-6">
                
                {!success ? (
                  <>
                    <div className="space-y-2 border-b border-white/10 pb-5">
                      <span className="text-xs font-mono text-stockstrail-green-light font-semibold uppercase tracking-wider">
                        Quick Enquiry Form
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Book Your Free Strategy Call
                      </h2>
                      <p className="text-xs sm:text-sm text-white/70">
                        Fill in your basic details below and Vikrant will reach out to discuss your goals.
                      </p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4 pt-1">
                      
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/85">
                          Full Name <span className="text-stockstrail-green-light">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="e.g. Rajesh Sharma"
                          value={form.name}
                          onChange={onChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder:text-white/35 text-sm focus:border-stockstrail-green-light outline-none transition-colors"
                        />
                      </div>

                      {/* Phone & Service Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-white/85">
                            WhatsApp / Phone <span className="text-stockstrail-green-light">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            name="phone"
                            placeholder="10-digit mobile number"
                            value={form.phone}
                            onChange={onChange}
                            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder:text-white/35 text-sm focus:border-stockstrail-green-light outline-none transition-colors"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold text-white/85">
                            Area of Interest <span className="text-stockstrail-green-light">*</span>
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={onChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#0b1c1b] border border-white/15 text-white text-sm focus:border-stockstrail-green-light outline-none transition-colors cursor-pointer"
                          >
                            <option value="Mutual Funds SIP">Mutual Funds SIP &amp; Lumpsum</option>
                            <option value="Fixed Deposit Advisory">Fixed Deposits (FD) Rates</option>
                            <option value="Term & Health Insurance">Family Insurance (Term / Health)</option>
                            <option value="Loan Against Mutual Funds">Loan Against Mutual Funds (LAMF)</option>
                            <option value="Portfolio Review">Existing Portfolio Review (Free)</option>
                            <option value="Retirement & Goal Planning">Retirement &amp; Goal Planning</option>
                            <option value="Other Financial Services">Other Services</option>
                          </select>
                        </div>
                      </div>

                      {/* Optional Email */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/85">
                          Email Address <span className="text-white/40 text-[11px] font-normal">(Optional)</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="rajesh@example.com"
                          value={form.email}
                          onChange={onChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder:text-white/35 text-sm focus:border-stockstrail-green-light outline-none transition-colors"
                        />
                      </div>

                      {/* Short Note (Optional) */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold text-white/85">
                          Any specific questions or goals? <span className="text-white/40 text-[11px] font-normal">(Optional)</span>
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          placeholder="e.g. I want to start a ₹10,000 monthly SIP for child education, or check FD interest rates."
                          value={form.message}
                          onChange={onChange}
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder:text-white/35 text-sm focus:border-stockstrail-green-light outline-none transition-colors resize-none"
                        />
                      </div>

                      {error && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 px-6 rounded-full bg-stockstrail-green-light text-black font-bold text-sm hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,255,151,0.35)] cursor-pointer disabled:opacity-50"
                      >
                        {submitting ? 'Submitting Enquiry...' : 'Schedule My Free Strategy Call →'}
                      </button>

                      <p className="text-[11px] text-white/50 text-center">
                        🔒 100% Privacy. Your details are never shared with third parties.
                      </p>

                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-stockstrail-green-light flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(0,255,151,0.2)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Thank you! Your enquiry is received.</h3>
                      <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                        Vikrant Bhardwaj will personally review your request and get back to you within a few hours.
                      </p>
                    </div>

                    {submittedWhatsAppUrl && (
                      <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3 max-w-md mx-auto">
                        <p className="text-xs text-white/70">
                          Want an immediate response? You can also connect directly on WhatsApp:
                        </p>
                        <a
                          href={submittedWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg w-full"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Chat on WhatsApp Now</span>
                        </a>
                      </div>
                    )}

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setSuccess(false)}
                        className="text-xs text-white/60 hover:text-white underline transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </Layout>
  );
}
