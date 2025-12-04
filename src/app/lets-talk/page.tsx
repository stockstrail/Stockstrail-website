'use client';

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { addQuery } from '@/lib/queries';
import { Facebook, Linkedin, Instagram, Send } from 'lucide-react';

const ContactCard = () => {
  return (
    <div className="w-full bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
      <h2 className="text-2xl font-product-sans mb-6">
        <span className="text-white">Get in </span>
        <span className="gradient-text">touch</span>
      </h2>
      <div className="space-y-4 text-white/90">
        <div>
          <div className="text-white/60 text-sm mb-1">Email</div>
          <a href="mailto:stockstrail@gmail.com" className="underline hover:text-stockstrail-green-light transition-colors">stockstrail@gmail.com</a>
        </div>
        <div>
          <div className="text-white/60 text-sm mb-1">WhatsApp</div>
          <a href="https://wa.me/919736304663" target="_blank" rel="noopener noreferrer" className="underline hover:text-stockstrail-green-light transition-colors">+91 97363-04663</a>
        </div>
        <div>
          <div className="text-white/60 text-sm mb-1">Mobile No.</div>
          <a href="tel:+919736304663" className="underline hover:text-stockstrail-green-light transition-colors">+91 97363-04663</a>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-white/80 text-sm uppercase tracking-widest mb-2">Socials</h4>
        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform duration-300"><Facebook className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/company/stockstrail/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform duration-300"><Linkedin className="w-6 h-6" /></a>
          <a href="http://instagram.com/stockstrail/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform duration-300"><Instagram className="w-6 h-6" /></a>
          <a href="https://t.me/stockstrail" target="_blank" rel="noopener noreferrer" className="text-white hover:text-stockstrail-green-light hover:scale-110 transition-transform duration-300"><Send className="w-6 h-6" /></a>
        </div>
      </div>
    </div>
  );
};

export default function LetsTalk() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name || !form.phone || !form.email || !form.service || !form.message) {
      setError("Please fill all fields.");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await addQuery({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        message: form.message,
      });
      if (error) throw error as any;
      setSuccess("Thank you! We received your query.");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      const message = (err as any)?.message || (typeof err === 'string' ? err : null) || "Failed to submit. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="absolute inset-0">
          <div className="absolute w-[800px] h-[800px] bg-stockstrail-bg-light rounded-full blur-100 opacity-40 left-1/2 -translate-x-1/2 top-24" />
          <div className="absolute top-20 left-10 w-3 h-3 bg-stockstrail-green-light/30 rounded-full animate-ping" />
          <div className="absolute bottom-24 right-20 w-3 h-3 bg-stockstrail-green-accent/30 rounded-full animate-bounce" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-product-sans text-4xl sm:text-5xl font-normal uppercase">
              <span className="text-white">Let&apos;s </span>
              <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-white/70 mt-3">Ask your query and we&apos;ll get back shortly.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left: Form */}
            <div className="w-full bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
              <h2 className="text-2xl font-product-sans mb-6">
                <span className="text-white">Ask your </span>
                <span className="gradient-text">query</span>
              </h2>
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label className="block text-white/80 mb-2">Name<span className="text-red-500">*</span></label>
                  <input name="name" value={form.name} onChange={onChange} required className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light" />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Phone Number<span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={onChange} required className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light" />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Email<span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light" />
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Service<span className="text-red-500">*</span></label>
                  <select name="service" value={form.service} onChange={onChange} required className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light">
                    <option value="" className="bg-[#0b1c1b]">Select a service</option>
                    <option value="Mutual Funds" className="bg-[#0b1c1b]">Mutual Funds</option>
                    <option value="Fixed Deposit" className="bg-[#0b1c1b]">Fixed Deposit</option>
                    <option value="Insurance" className="bg-[#0b1c1b]">Insurance</option>
                    <option value="Loan" className="bg-[#0b1c1b]">Loan</option>
                    <option value="Open Demat" className="bg-[#0b1c1b]">Open Demat</option>
                    <option value="Others" className="bg-[#0b1c1b]">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white/80 mb-2">Message<span className="text-red-500">*</span></label>
                  <textarea name="message" value={form.message} onChange={onChange} rows={4} required className="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none focus:border-stockstrail-green-light" />
                </div>
                {error && <div className="text-red-500 text-sm">{error}</div>}
                {success && <div className="text-green-400 text-sm">{success}</div>}
                <button type="submit" disabled={submitting} className="mt-2 px-6 py-3 bg-transparent border-2 border-white/20 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:bg-stockstrail-green-light/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Right: Contact Card */}
            <ContactCard />
          </div>
        </div>
      </section>
    </Layout>
  );
}
