import React from 'react';
import Link from 'next/link';

const DisclaimerSection = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Ambient Bottom Glow */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-stockstrail-green-light/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
                <div>
                    <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        Regulatory Disclosures &amp; Disclaimer
                    </h2>
                </div>

                <div className="bg-[#021716]/85 border border-white/12 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] space-y-6 text-left">
                    <p className="text-white/85 text-xs sm:text-sm lg:text-base font-normal leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong className="text-white">AMFI-registered distributor disclosure: </strong>
                        Stockstrail is operated by <strong className="text-stockstrail-green-light font-bold">Vikrant Bhardwaj</strong>, an AMFI Registered Mutual Fund Distributor (<Link href="/commission-disclosure" className="text-stockstrail-green-light font-bold hover:underline">ARN-284122</Link>). This website is intended to provide educational information and facilitate investments in <Link href="/mutual-funds" className="text-stockstrail-green-light font-medium hover:underline">mutual funds</Link> through authorised platforms.
                    </p>

                    <p className="text-white/85 text-xs sm:text-sm lg:text-base font-normal leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong className="text-white">Transparent commission policy: </strong>
                        We believe in complete transparency. The <Link href="/calculators" className="text-stockstrail-green-light font-medium hover:underline">calculators</Link>, <Link href="/learning" className="text-stockstrail-green-light font-medium hover:underline">educational content</Link>, and general financial information available on this website are provided free of charge. Wherever applicable, we receive commissions from AMCs as permitted under AMFI regulations. View our <Link href="/commission-disclosure" className="text-stockstrail-green-light font-semibold hover:underline">Commission Disclosure</Link> and <Link href="/terms-and-conditions" className="text-stockstrail-green-light font-semibold hover:underline">Terms of Service</Link>.
                    </p>

                    <p className="text-white/85 text-xs sm:text-sm lg:text-base font-normal leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong className="text-white">Statutory mutual fund risk disclaimer: </strong>
                        Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Investment decisions should always be based on your <Link href="/services" className="text-stockstrail-green-light font-medium hover:underline">financial goals</Link>, <Link href="/check-risk-profile" className="text-stockstrail-green-light font-medium hover:underline">risk appetite</Link>, and investment horizon. Past performance is not indicative of future results, and no investment can guarantee returns.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DisclaimerSection;

