'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import { Phone, Mail } from 'lucide-react';

export default function LetsTalkPage() {
  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-product-sans font-bold gradient-text mb-6">
              Let's Talk
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto font-work-sans">
              Have questions or need assistance? We're here to help. Reach out to us today.
            </p>
          </div>

          <div className="bg-stockstrail-bg-light/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/70 text-sm font-medium">Full Name</label>
                  <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-stockstrail-green-light transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/70 text-sm font-medium">Email Address</label>
                  <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-stockstrail-green-light transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/70 text-sm font-medium">Subject</label>
                <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-stockstrail-green-light transition-colors" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/70 text-sm font-medium">Message</label>
                <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-stockstrail-green-light transition-colors resize-none" placeholder="Tell us more about your inquiry..."></textarea>
              </div>
              <button type="button" className="w-full bg-stockstrail-green-light hover:bg-stockstrail-green-accent text-black font-semibold py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,255,151,0.2)] hover:shadow-[0_0_30px_rgba(0,255,151,0.4)]">
                Send Message
              </button>
            </form>
          </div>

          {/* SEO Content Section Below Form */}
          <div className="mt-20 space-y-12">
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-white gradient-text">Why Talk to Us?</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                The single best financial decision you can make is simply starting the conversation. No commitments. Not signing anything. Just talking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>Clarity:</strong> A clear picture of your current financial situation.</div></li>
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>Honest options:</strong> Realistic paths forward in plain language.</div></li>
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>Actionable steps:</strong> A specific starting point (e.g., SIP, insurance).</div></li>
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>No pressure:</strong> Useful knowledge with zero obligation.</div></li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6 hover:border-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4">Why Trust Us?</h3>
                <ul className="space-y-4 text-white/70">
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>Certified Advisor:</strong> NISM Series V-A Certified & SEBI compliant.</div></li>
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>AMFI Registered:</strong> ARN-284122 Official Mutual Fund Distributor.</div></li>
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>Transparent:</strong> Full commission disclosures publicly available.</div></li>
                  <li className="flex gap-3"><span className="text-stockstrail-green-light">✓</span> <div><strong>Experienced:</strong> Serving clients across the region with a focus on trust.</div></li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">How We Can Help</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Mutual Funds & SIP</h4>
                  <p className="text-white/60 text-sm">Portfolio review, ELSS, and choosing funds starting at ₹500/month.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Fixed Deposits</h4>
                  <p className="text-white/60 text-sm">Best rates across partner banks, laddering, and tax-saving options.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Insurance</h4>
                  <p className="text-white/60 text-sm">Term life, health insurance, ULIPs, and guaranteed savings plans.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Loans</h4>
                  <p className="text-white/60 text-sm">Home, business, personal, and loans against mutual funds.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Demat Accounts</h4>
                  <p className="text-white/60 text-sm">100% digital Demat and Trading account opening assistance.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Risk Profiling</h4>
                  <p className="text-white/60 text-sm">Free assessment for optimal asset allocation tailored to your goals.</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
              <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="bg-white/5 border border-white/10 rounded-lg group">
                  <summary className="p-5 font-bold text-white cursor-pointer select-none">Is a consultation free?</summary>
                  <div className="px-5 pb-5 text-white/70 leading-relaxed">
                    Yes. The initial consultation is completely free - no fees, no charges, and no obligations. You can call, WhatsApp, or email us.
                  </div>
                </details>
                <details className="bg-white/5 border border-white/10 rounded-lg group">
                  <summary className="p-5 font-bold text-white cursor-pointer select-none">What happens when I fill the contact form?</summary>
                  <div className="px-5 pb-5 text-white/70 leading-relaxed">
                    Our advisor will review your message and reply within 12 hours, or call you to schedule a 20 - 30 minute discussion. No automated spam or sales pressure.
                  </div>
                </details>
                <details className="bg-white/5 border border-white/10 rounded-lg group">
                  <summary className="p-5 font-bold text-white cursor-pointer select-none">How quickly do you respond?</summary>
                  <div className="px-5 pb-5 text-white/70 leading-relaxed">
                    We typically respond to form submissions and messages on the same day. Phone calls are answered directly during working hours.
                  </div>
                </details>
              </div>
            </div>

            <div className="text-center space-y-4 pt-4">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-white/80">
                <div className="flex items-center gap-2 font-medium">
                  <Phone className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                  <span>+91 97363-04663</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Mail className="w-4 h-4 text-stockstrail-green-light shrink-0" />
                  <span>connect@stockstrail.in</span>
                </div>
              </div>
              <div className="text-sm text-white/50 pt-2 max-w-lg mx-auto">
                Operating under SEBI guidelines • AMFI Registered ARN-284122
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
