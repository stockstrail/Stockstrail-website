import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceFAQSection from '@/components/services/ServiceFAQSection';

const faqs = [
    {
        question: 'How much should I invest every month?',
        answer:
            "There is no fixed amount that everyone should invest. The right monthly investment depends on your income, expenses, financial goals, existing savings and how much you can comfortably invest without putting pressure on your monthly budget.\n\nMany people start with a small SIP and increase the amount as their income grows. What matters most is choosing an amount you can continue investing regularly.\n\nBefore investing, make sure your essential expenses are covered and you have adequate emergency savings. Your investment amount should support your financial goals without affecting your day-to-day needs.\n\nStockstrail helps you look at your goals, investment horizon and risk profile before deciding how much you should invest."
    },
    {
        question: 'Can I start investing with just ₹500?',
        answer:
            'Yes. Many mutual fund SIPs allow investors to start with ₹500 per month, although the minimum amount can vary between schemes.\n\nStarting with ₹500 will not create substantial wealth overnight, but it can help you build the habit of investing regularly. As your income increases, you can gradually increase your SIP amount.\n\nThe important thing is to start with an amount that fits comfortably into your budget and stay consistent rather than waiting for the perfect time or a larger income.'
    },
    {
        question: 'How do I choose the right mutual fund?',
        answer:
            "The right mutual fund depends on what you are investing for, how long you can stay invested and how much market fluctuation you can comfortably handle.\n\nPast returns are only one part of the picture. Your financial goal, investment horizon, risk profile, asset allocation and the role the fund plays in your overall portfolio are also important.\n\nFor example, a fund suitable for a long-term retirement goal may not be appropriate for money you need in the next few years.\n\nStockstrail helps investors evaluate mutual funds in the context of their overall financial goals rather than simply choosing a fund because it recently delivered high returns."
    },
    {
        question: 'Should I invest in a SIP or a Fixed Deposit (FD)?',
        answer:
            'SIPs and Fixed Deposits serve different purposes, so there is no universal winner.\n\nA Fixed Deposit provides a predetermined interest rate and can suit people looking for predictable returns and greater stability. A SIP invests in mutual funds, where returns are market-linked and can fluctuate, making it more suitable for investors with a longer investment horizon and an ability to accept market risk.\n\nDepending on your goals, you may not need to choose only one. An FD can form part of your stable savings while a SIP can be used for long-term wealth creation.\n\nThe better question is not "SIP or FD?" but "Which option is suitable for this particular financial goal?"'
    },
    {
        question: 'How do I know my investment risk profile?',
        answer:
            "Your risk profile is influenced by several factors, including your financial goals, investment horizon, income stability, existing commitments and how comfortable you are with fluctuations in the value of your investments.\n\nTwo people of the same age can have very different risk profiles because their income, responsibilities and financial goals may be completely different.\n\nUnderstanding your risk profile before choosing investments can help you avoid taking more risk than you can comfortably handle.\n\nYou can use Stockstrail's online Risk Profile Assessment to get a starting point for understanding your investment risk preference."
    },
    {
        question: 'Why is financial planning important?',
        answer:
            'Financial planning brings your income, expenses, savings, investments, insurance, loans and future goals into one picture.\n\nWithout a plan, it is easy to invest without knowing what the money is meant to achieve, take more risk than necessary or overlook important financial priorities.\n\nA financial plan can help you prioritise goals such as building an emergency fund, buying a home, funding education, preparing for retirement or protecting your family.\n\nFinancial planning is not only for high-income earners. It can be useful at different stages of life, from your first salary to retirement.'
    },
    {
        question: 'Can I invest online from anywhere in India?',
        answer:
            'Yes. Many financial services can now be accessed digitally, including mutual fund investments, SIPs, Fixed Deposits, insurance, Demat account opening and financial consultations.\n\nStockstrail works with clients across India, so you do not need to be located near our office to discuss your financial goals or get started.\n\nThe important part is understanding what you are investing in, why you are investing and whether the solution fits your financial situation.'
    },
    {
        question: 'Why should I choose Stockstrail for financial planning?',
        answer:
            'Stockstrail takes a goal-first approach to financial decisions. Instead of starting with a particular product, we first try to understand your financial goals, investment horizon, risk profile and existing commitments.\n\nOur services include mutual funds, financial planning, Fixed Deposits, insurance, loans and other financial solutions. The objective is to help you understand your options and make decisions that fit your circumstances.\n\nStockstrail currently serves 200+ investors across Himachal Pradesh and clients across India.\n\nIf you are unsure where to start, you can discuss your situation with us before deciding on an investment or financial product.'
    },
];

export default function HomePageSEOContent() {
    return (
        <section className="py-16 sm:py-24 relative overflow-hidden isolate defer-render">
            {/* DEDICATED SECTION 3D FINANCIAL BACKGROUND */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                    src="/assets/sections/faq-bg.webp"
                    alt="Financial Knowledge Architecture"
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="100vw"
                    quality={60}
                    className="object-cover object-center opacity-35 scale-105 filter brightness-105 contrast-115 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/80 via-[#011d1c]/40 to-[#011d1c]/85" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[90%] lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

                {/* 3D Section Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>Knowledge Hub &amp; FAQ Guide</span>
                    </div>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        <span className="text-white">Personalized </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Financial Planning</span>
                        <span className="text-white"> &amp; Investment Guidance</span>
                    </h2>

                    <p className="text-white/80 max-w-3xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong>Personalized financial planning</strong> and <strong>investment guidance in India</strong> involve more than just picking financial products. Your life goals, systematic savings, <strong>mutual fund portfolio</strong>, <strong>insurance coverage</strong>, <strong>fixed deposits</strong>, and <strong>loan management</strong> all shape your financial future. Stockstrail helps you make informed decisions based on your unique circumstances.
                    </p>
                </div>

                {/* How Stockstrail works 3D Card */}
                <div className="bg-[#021716]/85 border border-white/12 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <h3
                        className="text-xl sm:text-2xl font-bold text-stockstrail-green-light mb-4 drop-shadow-sm"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        How we approach your financial decisions
                    </h3>

                    <p className="text-white/85 leading-relaxed mb-4 text-sm sm:text-base font-normal [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong>Goal-focused financial strategy:</strong> We don&apos;t believe everyone needs the same investment or financial product. The right solution depends on what you are trying to achieve, when you need the money, how much risk you can take and what your existing financial commitments look like.
                    </p>

                    <p className="text-white/85 leading-relaxed text-sm sm:text-base font-normal [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong>Holistic portfolio management:</strong> Stockstrail starts with your personal financial situation before recommending products. Depending on your needs, this may involve <strong>mutual funds</strong>, <strong>insurance</strong>, <strong>Fixed Deposits</strong>, <strong>loans</strong> or a balanced combination of financial solutions.
                    </p>
                </div>



                {/* Location / service area 3D Card */}
                <div className="bg-[#021716]/85 border border-white/12 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] space-y-6">
                    <h3
                        className="text-xl sm:text-2xl font-bold text-stockstrail-green-light mb-4 drop-shadow-sm"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        Personalized Financial Services from Himachal Pradesh to Clients Across India
                    </h3>

                    <p className="text-white/85 leading-relaxed text-sm sm:text-base font-normal">
                        <strong>Stockstrail</strong> is headquartered in Himachal Pradesh and proudly serves 200+ investors, salaried professionals, and families pan-India. Through our digital-first financial planning platform, you can plan, invest, and manage your complete wealth portfolio without location constraints.
                    </p>

                    <p className="text-white/85 leading-relaxed text-sm sm:text-base font-normal">
                        Whether starting a disciplined <Link href="/mutual-funds" className="text-stockstrail-green-light hover:underline font-semibold">Mutual Fund SIP</Link>, booking secure <Link href="/fixed-deposit" className="text-stockstrail-green-light hover:underline font-semibold">high-interest Fixed Deposits</Link>, comparing comprehensive <Link href="/insurance" className="text-stockstrail-green-light hover:underline font-semibold">Term &amp; Health Insurance policies</Link>, accessing liquidity via a <Link href="/loan" className="text-stockstrail-green-light hover:underline font-semibold">Loan Against Mutual Funds (LAMF)</Link>, or getting ready to <Link href="/open-demat" className="text-stockstrail-green-light hover:underline font-semibold">open a digital Demat Account</Link>, Stockstrail provides unbiased, transparent guidance every step of the way.
                    </p>

                    <div className="pt-4 border-t border-white/10">
                        <p className="text-base font-bold text-white mb-3">Popular Financial Resources &amp; Planning Tools:</p>
                        <div className="flex flex-wrap gap-2.5 sm:gap-3 text-xs sm:text-sm">
                            <Link href="/mutual-funds" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Mutual Funds Guide</Link>
                            <Link href="/fixed-deposit" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">FD Rates 2026</Link>
                            <Link href="/insurance" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Term &amp; Health Insurance</Link>
                            <Link href="/loan" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Loans Against Mutual Funds</Link>
                            <Link href="/check-risk-profile" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Risk Assessment Tool</Link>
                            <Link href="/calculators" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">SIP &amp; EMI Calculators</Link>
                            <Link href="/learning" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Learning Center</Link>
                            <Link href="/blog" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Financial Blog</Link>
                            <Link href="/nse-holidays" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">NSE Holiday List 2026</Link>
                            <Link href="/bse-holidays" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">BSE Holiday List 2026</Link>
                            <Link href="/commission-disclosure" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-stockstrail-green-light hover:border-stockstrail-green-light/40 transition-colors">Commission Transparency</Link>
                            <Link href="/lets-talk" className="inline-flex items-center min-h-[44px] px-4 py-2 rounded-full bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light hover:bg-stockstrail-green-light hover:text-stockstrail-bg transition-all font-semibold">Schedule Free Advisory Call →</Link>
                        </div>
                    </div>
                </div>

                {/* 3D FAQs Accordion */}
                <div className="mt-16">
                    <ServiceFAQSection faqs={faqs} />
                </div>

            </div>
        </section>
    );
}
