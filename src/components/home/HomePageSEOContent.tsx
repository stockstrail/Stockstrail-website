import React from 'react';
import Link from 'next/link';
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
        <section className="py-16 bg-stockstrail-bg">
            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                {/* Introduction */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Financial Planning &amp; Investment Guidance
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Managing money involves more than choosing an investment.
                        Your goals, savings, insurance, loans and investment decisions
                        all affect your financial future. Stockstrail helps you understand
                        these choices and make decisions based on your own circumstances.
                    </p>
                </div>

                {/* How Stockstrail works */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                        How we approach your financial decisions
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-4">
                        We don&apos;t believe everyone needs the same investment or financial
                        product. The right solution depends on what you are trying to
                        achieve, when you need the money, how much risk you can take and
                        what your existing financial commitments look like.
                    </p>

                    <p className="text-gray-300 leading-relaxed">
                        That is why Stockstrail starts with your financial situation
                        before discussing products. Depending on your needs, this may
                        involve investments, insurance, Fixed Deposits, loans or a
                        combination of different financial solutions.
                    </p>
                </div>

                {/* Key areas */}
                <div>
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-stockstrail-green-light">
                            Financial decisions we can help with
                        </h3>

                        <p className="text-gray-400 max-w-2xl mx-auto mt-3">
                            Explore the areas where Stockstrail can help you make more
                            informed financial decisions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <Link
                            href="/mutual-funds"
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/60 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white group-hover:text-stockstrail-green-light transition-colors">
                                Mutual Funds
                            </h4>

                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                Explore SIP and lumpsum investing, understand different
                                types of mutual funds and learn how they can fit into
                                long-term financial goals.
                            </p>

                            <span className="inline-block mt-4 text-sm text-stockstrail-green-light font-medium">
                                Explore Mutual Funds →
                            </span>
                        </Link>

                        <Link
                            href="/fixed-deposit"
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/60 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white group-hover:text-stockstrail-green-light transition-colors">
                                Fixed Deposits
                            </h4>

                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                Understand Fixed Deposit options, interest rates,
                                tenures and how FDs can be used for stability and
                                predictable returns.
                            </p>

                            <span className="inline-block mt-4 text-sm text-stockstrail-green-light font-medium">
                                Explore Fixed Deposits →
                            </span>
                        </Link>

                        <Link
                            href="/insurance"
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/60 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white group-hover:text-stockstrail-green-light transition-colors">
                                Insurance
                            </h4>

                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                Understand Term Life Insurance, Health Insurance,
                                Motor Insurance and other forms of financial protection.
                            </p>

                            <span className="inline-block mt-4 text-sm text-stockstrail-green-light font-medium">
                                Explore Insurance →
                            </span>
                        </Link>

                        <Link
                            href="/loan"
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/60 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white group-hover:text-stockstrail-green-light transition-colors">
                                Loans
                            </h4>

                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                Explore borrowing options including Home Loans,
                                Personal Loans, Business Loans and Loans Against
                                Mutual Funds.
                            </p>

                            <span className="inline-block mt-4 text-sm text-stockstrail-green-light font-medium">
                                Explore Loans →
                            </span>
                        </Link>

                        <Link
                            href="/financial-planning"
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/60 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white group-hover:text-stockstrail-green-light transition-colors">
                                Financial Planning
                            </h4>

                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                Bring your investments, savings, protection and
                                financial goals together through a structured plan.
                            </p>

                            <span className="inline-block mt-4 text-sm text-stockstrail-green-light font-medium">
                                Explore Financial Planning →
                            </span>
                        </Link>

                        <Link
                            href="/risk-profile"
                            className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-stockstrail-green-light/60 transition-all duration-300"
                        >
                            <h4 className="text-xl font-medium text-white group-hover:text-stockstrail-green-light transition-colors">
                                Risk Profile Assessment
                            </h4>

                            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                Understand your investment risk preference before
                                choosing investments for your financial goals.
                            </p>

                            <span className="inline-block mt-4 text-sm text-stockstrail-green-light font-medium">
                                Check Your Risk Profile →
                            </span>
                        </Link>

                    </div>
                </div>

                {/* Why Stockstrail */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                        Why people choose Stockstrail
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">
                                Clear explanations
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                                Financial products can be difficult to understand.
                                We aim to explain the important details in language
                                that is easier to follow before you make a decision.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">
                                Goals before products
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                                We start with what you are trying to achieve rather
                                than assuming a particular investment or product is
                                right for everyone.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">
                                Long-term perspective
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                                Financial decisions are rarely about one transaction.
                                We focus on choices that can make sense across your
                                changing financial priorities.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-medium text-white mb-2">
                                Personalised guidance
                            </h4>
                            <p className="text-gray-400 leading-relaxed">
                                Your income, responsibilities, goals and risk
                                tolerance are different from someone else&apos;s. Your
                                financial decisions should reflect that.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Location / service area */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-semibold text-stockstrail-green-light mb-4">
                        Financial guidance from Himachal Pradesh to clients across India
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                        Stockstrail is based in Himachal Pradesh and works with
                        investors and families across India. Much of the process can
                        be handled digitally, making it possible to discuss your
                        financial goals and investment requirements without being
                        limited by location.
                    </p>

                    <p className="text-gray-400 leading-relaxed mt-4">
                        Whether you are beginning your first SIP, reviewing existing
                        investments, looking for insurance, considering a Fixed
                        Deposit or planning for a long-term financial goal, you can
                        start by discussing your situation with us.
                    </p>
                </div>

                {/* FAQs */}
                <div className="mt-16">
                    <ServiceFAQSection faqs={faqs} />
                </div>

            </div>
        </section>
    );
}
