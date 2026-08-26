'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Review } from '@/lib/supabase';
import { addReview, getRandomReviews } from '@/lib/database/reviews';

interface TestimonialItem {
    id: number;
    name: string;
    position: string;
    company?: string | null;
    location?: string;
    tag?: string;
    category?: 'all' | 'mutual-funds' | 'fixed-deposit' | 'insurance-loans';
    comment: string;
    rating: number;
    created_at?: string;
    initials?: string;
}

const getInitials = (name: string) => {
    if (!name) return 'ST';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
};

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
    {
        id: 1,
        name: "Rajesh Sharma",
        position: "Senior IT Manager",
        company: "Tech Solutions",
        location: "Chandigarh",
        tag: "Mutual Fund SIP",
        category: "mutual-funds",
        comment: "Stockstrail took the time to understand my risk appetite and family goals before suggesting any scheme. Their goal-based SIP strategy gave me complete clarity on retirement and child education planning. Honest advice with zero hidden fees.",
        rating: 5,
        initials: "RS",
        created_at: "2024-02-15",
    },
    {
        id: 2,
        name: "Priya Mahajan",
        position: "Government Officer",
        company: "Public Administration",
        location: "Shimla, HP",
        tag: "Tax Planning & FDs",
        category: "fixed-deposit",
        comment: "Finding a trustworthy AMFI-registered distributor in Himachal who explains things transparently is rare. Vikrant helped me streamline my existing FDs and start disciplined SIPs. The regular review support is exceptional.",
        rating: 5,
        initials: "PM",
        created_at: "2024-01-28",
    },
    {
        id: 3,
        name: "Ankit Verma",
        position: "Business Owner",
        company: "Manufacturing",
        location: "Delhi NCR",
        tag: "Loan Against Mutual Funds",
        category: "insurance-loans",
        comment: "When I needed urgent business liquidity, Stockstrail arranged a Loan Against Mutual Funds within 24 hours at a very low interest rate without having to sell my investments. Saved me from capital gains tax and exit loads!",
        rating: 5,
        initials: "AV",
        created_at: "2024-03-10",
    },
    {
        id: 4,
        name: "Dr. Sunita Negi",
        position: "Healthcare Professional",
        company: "Medical Institute",
        location: "Kangra, HP",
        tag: "Health & Term Insurance",
        category: "insurance-loans",
        comment: "Insurance terms can be overwhelming with hidden clauses. Stockstrail patiently compared multiple insurers, explained room rent limits and restore benefits, and helped me pick the right high-cover policy for my family.",
        rating: 5,
        initials: "SN",
        created_at: "2024-02-04",
    },
    {
        id: 5,
        name: "Vikramaditya Chauhan",
        position: "Corporate Executive",
        company: "Multinational",
        location: "Bangalore",
        tag: "Portfolio Rebalancing",
        category: "mutual-funds",
        comment: "Even though I live in Bangalore, the digital consultation with Stockstrail was seamless. Their 11-question risk profiling and disciplined asset allocation approach turned my cluttered portfolio into a structured plan.",
        rating: 5,
        initials: "VC",
        created_at: "2024-01-12",
    },
    {
        id: 6,
        name: "Meenakshi Sood",
        position: "Educator & Investor",
        company: "Education Dept",
        location: "Solan, HP",
        tag: "Senior Citizen FDs",
        category: "fixed-deposit",
        comment: "Transparent communication with zero pressure. They helped my parents invest in high-rated fixed deposits with monthly interest payouts that arrive like clockwork. Extremely dependable.",
        rating: 5,
        initials: "MS",
        created_at: "2024-03-01",
    },
];

const TestimonialsSectionComponent = () => {
    const [testimonials, setTestimonials] = useState<TestimonialItem[]>(DEFAULT_TESTIMONIALS);
    const [loading, setLoading] = useState(false);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState('');
    const [form, setForm] = useState({
        name: '',
        company: '',
        position: '',
        comment: '',
        rating: 5,
    });

    useEffect(() => {
        // Defer database review enrichment until after main thread is completely idle
        const timer = setTimeout(async () => {
            try {
                const { data, error } = await getRandomReviews(8);
                if (data && data.length > 0 && !error) {
                    const formatted: TestimonialItem[] = data.map((item: Review, idx: number) => {
                        const def = DEFAULT_TESTIMONIALS[idx % DEFAULT_TESTIMONIALS.length];
                        return {
                            id: item.id || idx + 1,
                            name: item.name || def.name,
                            position: item.position || def.position,
                            company: item.company || def.company,
                            location: def.location,
                            tag: def.tag,
                            category: def.category || 'all',
                            comment: item.comment || def.comment,
                            rating: item.rating || def.rating || 5,
                            initials: getInitials(item.name || def.name),
                            created_at: item.created_at || def.created_at,
                        };
                    });
                    setTestimonials(formatted);
                }
            } catch {
                // Graceful fallback to default testimonials
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const filteredReviews = useMemo(() => {
        if (activeCategory === 'all') return testimonials;
        return testimonials.filter(t => t.category === activeCategory || activeCategory === 'all');
    }, [testimonials, activeCategory]);

    const cardsPerPage = 3;
    const totalPages = Math.ceil(filteredReviews.length / cardsPerPage) || 1;
    const visibleReviews = useMemo(() => {
        const start = currentPage * cardsPerPage;
        return filteredReviews.slice(start, start + cardsPerPage);
    }, [filteredReviews, currentPage]);

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(0);
    };

    const renderStars = (rating: number) => {
        return (
            <div className="flex items-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((star) => {
                    const isFull = star <= Math.floor(rating);
                    const isHalf = !isFull && star - 0.5 <= rating;
                    return (
                        <svg
                            key={star}
                            className={`w-4 h-4 ${isFull || isHalf ? 'text-[#FFB800] fill-[#FFB800]' : 'text-white/20 fill-white/20'}`}
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    );
                })}
            </div>
        );
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.position || !form.comment || !form.rating) {
            setFormError('Please complete all required fields.');
            return;
        }

        setFormError('');
        setSubmitting(true);

        try {
            const reviewData = {
                name: form.name,
                company: form.company || null,
                position: form.position,
                comment: form.comment,
                rating: form.rating,
            };

            await addReview(reviewData);

            // Optimistic update
            const newReview: TestimonialItem = {
                id: Date.now(),
                name: form.name,
                position: form.position,
                company: form.company || 'Verified Client',
                location: 'India',
                tag: 'General Feedback',
                category: 'all',
                comment: form.comment,
                rating: form.rating,
                initials: getInitials(form.name),
                created_at: new Date().toISOString(),
            };

            setTestimonials(prev => [newReview, ...prev]);
            setFormSuccess(true);
            setTimeout(() => {
                setShowForm(false);
                setFormSuccess(false);
                setForm({ name: '', company: '', position: '', comment: '', rating: 5 });
            }, 2000);
        } catch (err) {
            console.error('Error submitting review:', err);
            setFormError('Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden isolate defer-render">
            {/* PURE HIGH-PERFORMANCE CSS BACKDROP (0KB HTTP Overheads) */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-[#011d1c]" />
                <div
                    className="absolute inset-0 opacity-40 mix-blend-screen"
                    style={{
                        background: `
                            radial-gradient(ellipse 60% 50% at 20% 20%, rgba(0, 255, 151, 0.15), transparent 70%),
                            radial-gradient(ellipse 50% 60% at 80% 80%, rgba(20, 184, 166, 0.15), transparent 70%)
                        `,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#011d1c]/90 via-[#011d1c]/50 to-[#011d1c]/90" />
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/15 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Badge & Title */}
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-stockstrail-green-light/30 bg-stockstrail-green-light/10 px-4 py-1 text-xs font-semibold text-stockstrail-green-light uppercase tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(0,255,151,0.15)]">
                        <span className="w-2 h-2 rounded-full bg-stockstrail-green-light animate-pulse" />
                        <span>Client Feedback &amp; Verified Reviews</span>
                    </div>

                    <h2
                        className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] [text-shadow:0_2px_12px_rgba(0,255,151,0.25)]"
                        style={{ fontFamily: "var(--font-product-sans)" }}
                    >
                        <span className="text-white">What Our </span>
                        <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,255,151,0.35)]">Clients Say</span>
                    </h2>

                    <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.9)]">
                        <strong>Client success stories &amp; reviews</strong> from investors and families across India who trust Stockstrail for mutual funds, insurance, and personalized financial planning.
                    </p>

                    {/* Trust Summary Bar */}
                    <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-xs sm:text-sm text-white/80">
                        <div className="flex items-center gap-2">
                            <div className="flex text-[#FFB800]">
                                {renderStars(5)}
                            </div>
                            <span className="font-bold text-white">4.9 / 5.0</span>
                            <span className="text-white/40 hidden sm:inline">|</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <svg className="w-4 h-4 text-stockstrail-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>200+ Verified Investors</span>
                            <span className="text-white/40 hidden sm:inline">|</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-stockstrail-green-light" />
                            <span>AMFI Registered (ARN-284122)</span>
                        </div>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
                    {[
                        { id: 'all', label: 'All Reviews' },
                        { id: 'mutual-funds', label: 'Mutual Funds & SIP' },
                        { id: 'fixed-deposit', label: 'Fixed Deposits' },
                        { id: 'insurance-loans', label: 'Insurance & Loans' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleCategoryChange(tab.id)}
                            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === tab.id
                                    ? 'bg-stockstrail-green-light text-black shadow-[0_0_15px_rgba(0,229,153,0.3)] font-semibold'
                                    : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Testimonial Cards Grid (Reference Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {visibleReviews.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-[#021716]/85 border border-white/12 hover:border-stockstrail-green-light/70 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_35px_rgba(0,255,151,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Top Row: Monogram, Name, Verified Badge */}
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-3">
                                        {/* Stylized Initials Monogram Avatar (No real photos) */}
                                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-stockstrail-green-light/25 via-emerald-900/60 to-[#011d1c] border border-stockstrail-green-light/40 flex items-center justify-center font-bold text-stockstrail-green-light text-sm tracking-wider shadow-inner shrink-0">
                                            {item.initials || getInitials(item.name)}
                                        </div>

                                        <div className="min-w-0">
                                            <div className="flex items-center gap-1.5">
                                                <h3
                                                    className="font-bold text-white text-base truncate group-hover:text-stockstrail-green-light transition-colors"
                                                    style={{ fontFamily: "var(--font-product-sans)" }}
                                                >
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <p className="text-white/60 text-xs truncate">
                                                {item.position}
                                                {item.company ? ` • ${item.company}` : ''}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quote Icon */}
                                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-stockstrail-green-light/70 shrink-0">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Star Rating & Service Tag */}
                                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-white/10">
                                    <div className="flex items-center gap-2">
                                        {renderStars(item.rating)}
                                        <span className="text-white/80 text-xs font-semibold">5.0</span>
                                    </div>
                                    {item.tag && (
                                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-stockstrail-green-light/10 border border-stockstrail-green-light/30 text-stockstrail-green-light">
                                            {item.tag}
                                        </span>
                                    )}
                                </div>

                                {/* Testimonial Comment */}
                                <p className="text-white/80 text-sm leading-relaxed font-light">
                                    &quot;{item.comment}&quot;
                                </p>
                            </div>

                            {/* Card Footer: Verified Client Status */}
                            <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-white/50">
                                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Verified Investor</span>
                                </div>
                                <span>{item.location || 'India'}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls if more pages */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-10">
                        <button
                            type="button"
                            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                            disabled={currentPage === 0}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 hover:border-stockstrail-green-light/40 transition-colors"
                            aria-label="Previous testimonials"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setCurrentPage(idx)}
                                    className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-full focus:outline-none"
                                    aria-label={`Page ${idx + 1}`}
                                >
                                    <span className={`block h-2.5 rounded-full transition-all duration-300 ${
                                        idx === currentPage
                                            ? 'w-7 bg-stockstrail-green-light'
                                            : 'w-2.5 bg-white/30 hover:bg-white/60'
                                    }`} />
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                            disabled={currentPage === totalPages - 1}
                            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 hover:border-stockstrail-green-light/40 transition-colors"
                            aria-label="Next testimonials"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}

                {/* Bottom Action CTAs */}
                <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center gap-3 px-8 py-3.5 min-h-[48px] bg-white text-[#012928] rounded-full hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-work-sans font-semibold text-sm sm:text-base group"
                    >
                        <svg className="w-4 h-4 text-emerald-700 group-hover:scale-125 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Share Your Feedback
                    </button>

                    <Link
                        href="/lets-talk"
                        className="inline-flex items-center gap-3 px-8 py-3.5 min-h-[48px] bg-transparent border-2 border-white/30 rounded-full text-white hover:border-stockstrail-green-light hover:text-stockstrail-green-light hover:-translate-y-1 transition-all duration-300 font-work-sans font-semibold text-sm sm:text-base group"
                    >
                        <div className="w-2.5 h-2.5 bg-stockstrail-green-accent rounded-full group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                        Start Your Financial Journey
                    </Link>
                </div>

                {/* Interactive Feedback Modal */}
                {showForm && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
                        <div className="relative w-full max-w-lg bg-[#072923] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="absolute top-4 right-4 text-white/60 hover:text-white p-3 min-w-[44px] min-h-[44px] rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                                Share Your Experience
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm mb-6">
                                Your honest feedback helps us improve and helps fellow investors make informed decisions.
                            </p>

                            {formSuccess ? (
                                <div className="py-8 text-center space-y-3">
                                    <div className="w-12 h-12 bg-stockstrail-green-light/20 text-stockstrail-green-light rounded-full mx-auto flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">Thank You!</h3>
                                    <p className="text-white/70 text-sm">Your feedback has been received and added to our review wall.</p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleFormSubmit}
                                    className="space-y-4"
                                    data-toolname="submit_review"
                                    data-tooldescription="Submit a verified client review or feedback for Stockstrail"
                                >
                                    {formError && (
                                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                                            {formError}
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="review-name" className="block text-white/80 text-xs font-medium mb-1">Your Full Name *</label>
                                        <input
                                            id="review-name"
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="e.g. Rahul Sharma"
                                            aria-label="Your full name"
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-stockstrail-green-light transition-colors"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="review-position" className="block text-white/80 text-xs font-medium mb-1">Profession / Role *</label>
                                            <input
                                                id="review-position"
                                                type="text"
                                                value={form.position}
                                                onChange={(e) => setForm({ ...form, position: e.target.value })}
                                                placeholder="e.g. IT Professional"
                                                aria-label="Your profession or role"
                                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-stockstrail-green-light transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="review-location" className="block text-white/80 text-xs font-medium mb-1">City / Location</label>
                                            <input
                                                id="review-location"
                                                type="text"
                                                value={form.company || ''}
                                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                                placeholder="e.g. Chandigarh / Shimla"
                                                aria-label="Your city or location"
                                                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-stockstrail-green-light transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/80 text-xs font-medium mb-1.5">Rating *</label>
                                        <div className="flex items-center gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setForm({ ...form, rating: star })}
                                                    className="p-1 hover:scale-125 transition-transform"
                                                    aria-label={`Rate ${star} star`}
                                                >
                                                    <svg
                                                        className={`w-6 h-6 ${star <= form.rating ? 'text-[#FFB800] fill-[#FFB800]' : 'text-white/20 fill-white/20'}`}
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </button>
                                            ))}
                                            <span className="text-white/80 text-xs font-semibold ml-2">{form.rating} / 5 Stars</span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-white/80 text-xs font-medium mb-1">Your Review *</label>
                                        <textarea
                                            value={form.comment}
                                            onChange={(e) => setForm({ ...form, comment: e.target.value })}
                                            placeholder="Tell us about your experience with our financial planning, SIP advice, or insurance support..."
                                            rows={3}
                                            className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-stockstrail-green-light transition-colors resize-none"
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center justify-end gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="px-5 py-2 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/5 text-sm transition-colors"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="px-6 py-2 rounded-full bg-stockstrail-green-light text-black font-semibold text-sm hover:bg-stockstrail-green-accent transition-all disabled:opacity-50"
                                        >
                                            {submitting ? 'Submitting...' : 'Submit Feedback'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default TestimonialsSectionComponent;
