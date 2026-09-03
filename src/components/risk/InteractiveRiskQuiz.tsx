'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  TrendingUp, 
  PieChart, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Lock, 
  Phone, 
  Compass, 
  ChevronRight, 
  ChevronLeft,
  MessageSquare,
  Loader2,
  UserCheck,
  Award,
  Check
} from 'lucide-react';
import { addQuery } from '@/lib/database/queries';
import { trackCustomEvent } from '@/lib/tracking/utm';
import { getCurrentUser, signInWithGoogle, createClient } from '@/lib/supabase/client';

export type RiskCategory = 
  | 'Conservative'
  | 'Moderately Conservative'
  | 'Moderate'
  | 'Moderately Aggressive'
  | 'Aggressive';

interface QuestionOption {
  id: string;
  label: string;
  desc?: string;
  score: number;
}

interface Question {
  id: string;
  title: string;
  category: string;
  options: QuestionOption[];
}

const riskQuestions: Question[] = [
  {
    id: 'q1',
    category: 'Financial Capacity',
    title: 'What percentage of your monthly income (after loan EMIs and bills) do you comfortably save & invest for the long term?',
    options: [
      { id: 'a', label: 'Less than 5%', desc: 'Budget is currently tight with limited surplus', score: 1 },
      { id: 'b', label: '5% to 10%', desc: 'Steady, manageable monthly savings', score: 4 },
      { id: 'c', label: '10% to 20%', desc: 'Disciplined and consistent surplus', score: 7 },
      { id: 'd', label: 'More than 20%', desc: 'High savings capacity with low liabilities', score: 10 },
    ],
  },
  {
    id: 'q2',
    category: 'Liquidity Needs',
    title: 'How much of your total investment portfolio might you need to withdraw in the next 3 to 5 years?',
    options: [
      { id: 'a', label: 'More than 30%', desc: 'Major upcoming expense (marriage, property downpayment)', score: 1 },
      { id: 'b', label: '20% – 30%', desc: 'Moderate upcoming liquidity requirement', score: 4 },
      { id: 'c', label: '10% – 20%', desc: 'Minor expected withdrawals', score: 7 },
      { id: 'd', label: 'Less than 10%', desc: 'Long-term corpus with virtually no immediate need', score: 10 },
    ],
  },
  {
    id: 'q3',
    category: 'Income Stability',
    title: 'How stable and secure do you feel about your salary, professional, or business income continuing for the next 10 years?',
    options: [
      { id: 'a', label: 'Uncertain / Cyclical', desc: 'Irregular cash flows or sector volatility', score: 1 },
      { id: 'b', label: 'Somewhat secure', desc: 'Moderate career or business stability', score: 4 },
      { id: 'c', label: 'Fairly secure', desc: 'Established profession with dependable income', score: 7 },
      { id: 'd', label: 'Very secure & Growing', desc: 'Highly stable career, government, or strong business', score: 10 },
    ],
  },
  {
    id: 'q4',
    category: 'Savings Attitude',
    title: 'Which statement best describes your real-life approach to saving and investing?',
    options: [
      { id: 'a', label: 'Lifestyle comes first', desc: 'I prefer enjoying today and will save more later', score: 1 },
      { id: 'b', label: 'I want to save, but liabilities hold me back', desc: 'High commitments limit monthly surplus', score: 4 },
      { id: 'c', label: 'Fixed monthly SIP + Lump sum savings', desc: 'Disciplined regular saving plus investing yearly bonuses', score: 7 },
      { id: 'd', label: 'Uncompromised monthly percentage', desc: 'Pay myself first before any lifestyle expense', score: 10 },
    ],
  },
  {
    id: 'q5',
    category: 'Return Expectations',
    title: 'To beat inflation and earn above-FD returns (11–14% CAGR), one must accept market fluctuations. Your view?',
    options: [
      { id: 'a', label: 'Strongly Disagree', desc: 'I strictly want capital guarantee with zero negative days', score: 1 },
      { id: 'b', label: 'Disagree', desc: 'I dislike watching my portfolio value drop, even temporarily', score: 4 },
      { id: 'c', label: 'Agree', desc: 'I understand ups & downs are necessary to beat 6% inflation', score: 7 },
      { id: 'd', label: 'Strongly Agree', desc: 'Volatile periods are the real price of building massive compounding', score: 10 },
    ],
  },
  {
    id: 'q6',
    category: 'Risk Tolerance',
    title: 'How would you describe your personal emotional comfort when dealing with investments?',
    options: [
      { id: 'a', label: 'Strict Capital Protection', desc: 'Safety of principal is 100% priority', score: 1 },
      { id: 'b', label: 'Cautious Growth', desc: 'Can tolerate very small, brief dips but not substantial drops', score: 4 },
      { id: 'c', label: 'Balanced Long-Term Growth', desc: 'Comfortable with short-term swings if the 5-year outlook is solid', score: 7 },
      { id: 'd', label: 'High Conviction Wealth Creation', desc: 'Short-term market corrections are buying opportunities', score: 10 },
    ],
  },
  {
    id: 'q7',
    category: 'Market Correction Reaction',
    title: 'If a temporary market correction causes your equity portfolio to drop by 20% over 6 months, what would you do?',
    options: [
      { id: 'a', label: 'Panic & Sell Everything', desc: 'Move all proceeds to bank fixed deposits', score: 1 },
      { id: 'b', label: 'Stop SIPs & Sell Underperformers', desc: 'Pause investments and wait for total stability', score: 4 },
      { id: 'c', label: 'Stay Calm & Do Nothing', desc: 'Continue monthly SIPs knowing markets recover over time', score: 7 },
      { id: 'd', label: 'Deploy Additional Surplus', desc: 'Buy high-quality mutual funds at lower valuations', score: 10 },
    ],
  },
  {
    id: 'q8',
    category: 'Investment Experience',
    title: 'What is your actual track record with equity mutual funds and capital markets?',
    options: [
      { id: 'a', label: 'Complete Beginner (Zero Experience)', desc: 'Money has only been in Bank FDs, PPF, or Gold', score: 1 },
      { id: 'b', label: 'Basic / Occasional Investor', desc: 'Have done 1 or 2 SIPs or tax-saving ELSS schemes', score: 4 },
      { id: 'c', label: 'Experienced Investor (3+ years)', desc: 'Active in mutual funds across market bull and bear cycles', score: 7 },
      { id: 'd', label: 'Advanced & Seasoned Investor (5+ years)', desc: 'Comfortable across multi-asset portfolios and stock cycles', score: 10 },
    ],
  },
  {
    id: 'q9',
    category: 'Emergency Cushion',
    title: 'Do you have 3 to 6 months of household expenses safely kept in emergency liquid funds or FDs?',
    options: [
      { id: 'a', label: 'No emergency buffer', desc: 'Zero liquid savings; would need to liquidate investments', score: 1 },
      { id: 'b', label: 'Less than 3 months buffer', desc: 'Minimal emergency reserves', score: 4 },
      { id: 'c', label: '3 to 6 months fully funded', desc: 'Solid emergency cushion in high-yield liquid funds', score: 7 },
      { id: 'd', label: 'More than 6 months funded + Term Insurance', desc: 'Complete safety cushion + pure term cover in place', score: 10 },
    ],
  },
  {
    id: 'q10',
    category: 'Decision Style',
    title: 'When planning major financial investments, what is your primary decision-making method?',
    options: [
      { id: 'a', label: 'Follow Bank RM or Agent recommendations', desc: 'Rely on bank staff advice without deep personal check', score: 1 },
      { id: 'b', label: 'Tips from friends & social media', desc: 'Follow what colleagues or YouTube creators are doing', score: 4 },
      { id: 'c', label: 'Guided by Certified Professional', desc: 'Work with an AMFI-registered advisor to create an unbiased plan', score: 7 },
      { id: 'd', label: 'Self-researched with deep analysis', desc: 'Analyze data independently and make structured choices', score: 10 },
    ],
  },
  {
    id: 'q11',
    category: 'Time Horizon (Crucial)',
    title: 'When is the earliest you anticipate needing a substantial portion of this invested money?',
    options: [
      { id: 'a', label: 'Less than 3 years', desc: 'Short-term milestone (requires safety & capital preservation)', score: 0 },
      { id: 'b', label: '3 to 5 years', desc: 'Medium-term goal (hybrid / balanced allocation)', score: 0 },
      { id: 'c', label: '5 to 7 years', desc: 'Long-term goal (ideal for equity wealth compounding)', score: 0 },
      { id: 'd', label: '7 to 10 years', desc: 'Extended horizon (children higher education / house fund)', score: 0 },
      { id: 'e', label: 'More than 10 years', desc: 'Peaceful retirement / generational family wealth', score: 0 },
    ],
  },
];

const horizonLabels: Record<string, string> = {
  a: 'Short term (< 3 Years)',
  b: 'Medium term (3 – 5 Years)',
  c: 'Long term (5 – 7 Years)',
  d: 'Extended (7 – 10 Years)',
  e: 'Generational (10+ Years)',
};

interface ProfileBlueprint {
  title: RiskCategory;
  tagline: string;
  equityShare: number;
  debtShare: number;
  liquidShare: number;
  expectedCagr: string;
  suitability: string;
  fundMix: string[];
  recommendation: string;
}

const profileData: Record<RiskCategory, ProfileBlueprint> = {
  Conservative: {
    title: 'Conservative',
    tagline: 'Capital Preservation & Guaranteed Stability',
    equityShare: 15,
    debtShare: 75,
    liquidShare: 10,
    expectedCagr: '7.0% – 8.5%',
    suitability: 'Ideal for investors nearing retirement, those with short-term goals (< 3 years), or those who value peaceful sleep over market volatility.',
    fundMix: [
      'High-rated Bank & Corporate Fixed Deposits (55%)',
      'Short Duration / Arbitrage & Banking Debt Funds (20%)',
      'Large Cap / Conservative Hybrid Mutual Funds (15%)',
      'Liquid Emergency Fund (10%)',
    ],
    recommendation: 'Your focus should be on capital safety, regular interest cash-flows, and tax efficiency, keeping equity exposure strictly limited to large-cap bluechip funds to counter inflation.',
  },
  'Moderately Conservative': {
    title: 'Moderately Conservative',
    tagline: 'Cautious Compounding with Downside Buffer',
    equityShare: 35,
    debtShare: 55,
    liquidShare: 10,
    expectedCagr: '9.0% – 10.5%',
    suitability: 'Suitable for conservative investors with a 3 to 5 year horizon seeking better returns than traditional FDs without taking full equity risk.',
    fundMix: [
      'Multi-Asset Allocation & Equity Savings Funds (25%)',
      'Large Cap Index & Bluechip Mutual Funds (10%)',
      'Corporate Bonds & High-Interest Fixed Deposits (55%)',
      'Emergency Cash Reserves (10%)',
    ],
    recommendation: 'A blend of Multi-Asset Mutual Funds with high-grade Fixed Deposits offers predictable growth while keeping maximum drawdowns gentle.',
  },
  Moderate: {
    title: 'Moderate',
    tagline: 'Balanced Wealth Creation & Safe Stability',
    equityShare: 60,
    debtShare: 30,
    liquidShare: 10,
    expectedCagr: '11.0% – 13.0%',
    suitability: 'The golden balance for most Indian families with a 5 to 7 year horizon—capturing India’s economic growth while maintaining an FD safety net.',
    fundMix: [
      'Flexi Cap & Large & Mid Cap Mutual Funds (35%)',
      'Nifty 50 & Nifty Next 50 Index Funds (25%)',
      'Fixed Deposits & Short Duration Debt Funds (30%)',
      'Liquid Emergency Fund (10%)',
    ],
    recommendation: 'A 60:40 equity-debt ratio balances high compounding potential with steady safety. Rebalancing once a year locks in market gains safely.',
  },
  'Moderately Aggressive': {
    title: 'Moderately Aggressive',
    tagline: 'Growth-Focused Long-Term Wealth Accumulation',
    equityShare: 75,
    debtShare: 15,
    liquidShare: 10,
    expectedCagr: '12.5% – 14.5%',
    suitability: 'Designed for working professionals and growing families with 7+ years horizon aiming for significant wealth creation (Child Education / Early Retirement).',
    fundMix: [
      'Flexi Cap & Focused Equity Funds (30%)',
      'Mid Cap & Small Cap Mutual Funds (25%)',
      'Large Cap Index Funds (20%)',
      'Fixed Deposits / Debt Funds (15%)',
      'Emergency Liquid Fund (10%)',
    ],
    recommendation: 'Disciplined monthly SIPs in diversified Flexi Cap and Mid Cap schemes will compound wealth rapidly. Maintain 6 months of living expenses in FDs so market dips never force early redemptions.',
  },
  Aggressive: {
    title: 'Aggressive',
    tagline: 'Maximum Long-Term Capital Growth',
    equityShare: 85,
    debtShare: 10,
    liquidShare: 5,
    expectedCagr: '13.5% – 16.0%',
    suitability: 'Best for investors with 10+ years horizon, high earnings security, and high emotional resilience to market cycles.',
    fundMix: [
      'Quality Mid Cap & Small Cap Funds (40%)',
      'Flexi Cap & Active Value Funds (30%)',
      'Large Cap / Broad Market Index Funds (15%)',
      'Safe Debt & Liquid Cash (15%)',
    ],
    recommendation: 'Maximize monthly SIP discipline and step up contributions by 10% each year. Avoid emotional tinkering during temporary bear phases.',
  },
};

export default function InteractiveRiskQuiz() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  // User Profile State from Google Auth & Supabase
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<{ full_name: string | null; email: string; phone_number: string | null } | null>(null);
  const [checkingUser, setCheckingUser] = useState<boolean>(true);
  const [hasSavedToDb, setHasSavedToDb] = useState<boolean>(false);

  // Total score calculation (first 10 questions, each 1-10)
  const score = useMemo(() => {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
      const qId = `q${i}`;
      const selected = answers[qId];
      if (selected) {
        const q = riskQuestions.find((item) => item.id === qId);
        const opt = q?.options.find((o) => o.id === selected);
        if (opt) total += opt.score;
      }
    }
    return total;
  }, [answers]);

  // Determine category based on score and time horizon
  const profileBlueprint: ProfileBlueprint = useMemo(() => {
    const horizon = answers['q11']; // 'a' through 'e'
    
    let cat: RiskCategory = 'Moderate';
    if (score < 35) cat = 'Conservative';
    else if (score < 52) cat = 'Moderately Conservative';
    else if (score < 72) cat = 'Moderate';
    else if (score < 88) cat = 'Moderately Aggressive';
    else cat = 'Aggressive';

    // Time horizon constraint: if horizon is < 3 years ('a'), force Conservative for safety
    if (horizon === 'a') cat = 'Conservative';
    else if (horizon === 'b' && (cat === 'Aggressive' || cat === 'Moderately Aggressive')) {
      cat = 'Moderate';
    }

    return profileData[cat];
  }, [score, answers]);

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === riskQuestions.length;

  // 1. Check user authentication on mount & resume pending answers if returning from Google login
  useEffect(() => {
    const initAuth = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          setUser(currentUser);
          const supabase = createClient();
          const { data: userProf } = await supabase
            .from('profiles')
            .select('full_name, email, phone_number')
            .eq('id', currentUser.id)
            .single();

          if (userProf) {
            setProfile(userProf);
          }

          // Check if user just returned from Google OAuth / complete-profile with pending answers
          if (typeof window !== 'undefined') {
            const saved = sessionStorage.getItem('pending_risk_answers');
            if (saved) {
              try {
                const parsed = JSON.parse(saved);
                setAnswers(parsed);
                setShowResult(true);
                sessionStorage.removeItem('pending_risk_answers');
              } catch (e) {
                console.error('Error parsing pending answers:', e);
              }
            }
          }
        }
      } catch (err) {
        console.error('Error checking user:', err);
      } finally {
        setCheckingUser(false);
      }
    };

    initAuth();
  }, []);

  // 2. Save result to database when user is authenticated & quiz is complete
  useEffect(() => {
    const saveCompletedAssessment = async () => {
      if (showResult && user && profile && !hasSavedToDb && isComplete) {
        try {
          // Convert answers map to responses array
          const responseList = Object.entries(answers).map(([key, val]) => ({
            question_key: key,
            option_selected: val,
          }));

          // Call API to save attempt
          await fetch('/api/risk/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              responses: responseList,
              score,
              riskCategory: profileBlueprint.title,
              investmentHorizon: horizonLabels[answers['q11'] || 'c'],
            }),
          });

          // Also record query in queries table with real verified email & phone
          await addQuery({
            name: profile.full_name || user.email || 'Verified User',
            phone: profile.phone_number || 'Google Verified',
            email: user.email || 'risk-assessment@stockstrail.in',
            service: `Risk Assessment (${profileBlueprint.title} - ${score}/100)`,
            message: `Completed 11-question Risk Assessment with Google Login. Score: ${score}/100, Category: ${profileBlueprint.title}, Horizon: ${horizonLabels[answers['q11'] || 'c']}.`,
          });

          setHasSavedToDb(true);
        } catch (err) {
          console.error('Error saving assessment to database:', err);
        }
      }
    };

    saveCompletedAssessment();
  }, [showResult, user, profile, hasSavedToDb, isComplete, answers, score, profileBlueprint]);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    
    // Auto-advance to next question after small delay for smooth feel
    if (currentStep < riskQuestions.length - 1) {
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
      }, 250);
    }
  };

  const handleCalculateClick = () => {
    setShowResult(true);
    trackCustomEvent('risk_quiz_completed', {
      score,
      category: profileBlueprint.title,
      horizon: answers['q11'] || 'c',
    });
  };

  const handleGoogleSignIn = async () => {
    setAuthLoading(true);
    try {
      await signInWithGoogle('/check-risk-profile?resume=true');
    } catch (err) {
      console.error('Google sign in error:', err);
      setAuthLoading(false);
    }
  };

  const handleWhatsAppShare = () => {
    const horizonText = horizonLabels[answers['q11'] || 'c'];
    const userName = profile?.full_name || 'there';
    const msg = `Hi Vikrant, I just took the Stockstrail Risk Score Quiz!%0A%0A*My Results:*%0A- *Name:* ${userName}%0A- *Risk Score:* ${score}/100%0A- *Category:* ${profileBlueprint.title}%0A- *Horizon:* ${horizonText}%0A- *Recommended Mix:* ${profileBlueprint.equityShare}% Equity / ${profileBlueprint.debtShare}% Debt / ${profileBlueprint.liquidShare}% Cash%0A%0AI would like a free 1-on-1 portfolio roadmap based on this.`;
    
    trackCustomEvent('whatsapp_chat_initiated', {
      source_page: 'risk_quiz_results',
      risk_category: profileBlueprint.title,
      score,
    });

    window.open(`https://wa.me/919736304663?text=${msg}`, '_blank');
  };

  // 1. Loading State while checking auth
  if (checkingUser) {
    return (
      <div className="w-full max-w-xl mx-auto p-12 rounded-3xl bg-[#021817] border border-white/10 text-center space-y-4">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-400 mx-auto" />
        <p className="text-sm text-slate-300 font-medium">Checking authentication status...</p>
      </div>
    );
  }

  // 2. MANDATORY GOOGLE AUTH GATE (If user is NOT signed in, display prominent Google Sign-In Card)
  if (!user) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300 text-center">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#032420] via-[#021817] to-[#011413] border border-emerald-500/40 shadow-2xl space-y-7">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mx-auto">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Free · Google Verification Required</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-product-sans leading-tight">
              Sign In with Google to Begin Your Assessment
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              We provide this comprehensive SEBI-aligned financial evaluation completely free. Signing in with Google ensures your personalized score and asset allocation report are safely saved to your verified account.
            </p>
          </div>

          {/* Value Props Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 text-left text-xs text-slate-200">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Real Risk Score (0–100 Scale)</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Personalized Asset Allocation</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Zero Spam Promise (AMFI Registered)</span>
            </div>
          </div>

          {/* Big Mandatory Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={authLoading}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer disabled:opacity-50"
          >
            {authLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-slate-900" />
                <span>Connecting with Google...</span>
              </>
            ) : (
              <>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span>Continue with Google</span>
              </>
            )}
          </button>

          <p className="text-xs text-slate-400">
            By continuing, you agree to verified identity authentication. We never sell or share your data.
          </p>

        </div>

      </div>
    );
  }

  const currentQ = riskQuestions[currentStep];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* AUTH STATUS HEADER PILL */}
      <div className="flex items-center justify-between p-3.5 px-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <UserCheck className="w-4 h-4 text-emerald-400" />
          <span>
            Verified Account: <strong>{profile?.full_name || user.email}</strong>
            {profile?.phone_number && <span className="text-emerald-400 font-mono"> (+91 {profile.phone_number})</span>}
          </span>
        </div>

        <span className="text-xs text-slate-400 font-mono">
          SEBI-Aligned 11-Step Assessment
        </span>
      </div>

      {!showResult ? (
        <div className="space-y-8">
          
          {/* PROGRESS HEADER */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>Question {currentStep + 1} of {riskQuestions.length}</span>
                <span className="text-white/40">|</span>
                <span className="text-white/70">{currentQ.category}</span>
              </div>
              <div className="text-white/60 font-mono">
                {Math.round(((currentStep + 1) / riskQuestions.length) * 100)}% Complete
              </div>
            </div>

            {/* Visual Progress Track */}
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / riskQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* QUESTION CARD */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#021817] border border-white/15 shadow-2xl space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                Assessment Step {currentStep + 1}
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                {currentQ.title}
              </h2>
            </div>

            {/* 4 OPTIONS */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt) => {
                const isSelected = answers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleSelect(currentQ.id, opt.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/15 border-emerald-400 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.06] hover:border-white/30 text-white/85'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected 
                            ? 'bg-emerald-400 text-black font-bold' 
                            : 'bg-white/10 text-white/70'
                        }`}>
                          {opt.id.toUpperCase()}
                        </span>
                        <span className="font-semibold text-sm sm:text-base text-white">
                          {opt.label}
                        </span>
                      </div>
                      {opt.desc && (
                        <p className="text-xs text-white/60 pl-9 font-normal">
                          {opt.desc}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 mt-1">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected 
                          ? 'border-emerald-400 bg-emerald-400 text-black' 
                          : 'border-white/30'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* STEP NAVIGATION BUTTONS */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <button
                type="button"
                disabled={currentStep === 0}
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>

              {currentStep < riskQuestions.length - 1 ? (
                <button
                  type="button"
                  disabled={!answers[currentQ.id]}
                  onClick={() => setCurrentStep((s) => s + 1)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-400 text-black text-xs font-bold disabled:opacity-30 disabled:pointer-events-none transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer"
                >
                  Next Question
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!isComplete}
                  onClick={handleCalculateClick}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  See My Risk Score &amp; Allocation
                </button>
              )}
            </div>

          </div>

          {/* TRUST FOOTER */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/60 text-center">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Free · Real Verified Account</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>SEBI &amp; NISM Aligned Methodology</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Zero Spam Promise</span>
            </div>
          </div>

        </div>
      ) : (
        /* ================= RESULT VIEW ================= */
        <div className="space-y-8 animate-in fade-in duration-500 text-left">
          
          {/* RESULT HEADER CARD */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#021817] border border-emerald-500/40 shadow-2xl space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ASSESSMENT COMPLETE · VERIFIED PROFILE
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  Your Investment Profile: <span className="text-emerald-400">{profileBlueprint.title}</span>
                </h2>
                <p className="text-white/70 text-sm">
                  {profileBlueprint.tagline} · Time Horizon: <strong>{horizonLabels[answers['q11'] || 'c']}</strong>
                </p>
              </div>

              {/* Score Dial Badge */}
              <div className="flex flex-col items-center sm:items-end shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-black/50 border border-emerald-500/30 flex flex-col items-center justify-center text-center p-2">
                  <span className="text-[10px] text-white/50 uppercase font-mono">Risk Score</span>
                  <span className="text-3xl font-extrabold text-emerald-400 font-mono">
                    {score}
                  </span>
                  <span className="text-[9px] text-white/40 font-mono">out of 100</span>
                </div>
              </div>
            </div>

            {/* ASSET ALLOCATION BAR & PIE BREAKDOWN */}
            <div className="space-y-4 p-5 sm:p-7 rounded-2xl bg-black/40 border border-white/10">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-emerald-400" />
                  Recommended Asset Allocation
                </span>
                <span className="text-emerald-400 font-mono text-xs">
                  Expected Long-Term Return: {profileBlueprint.expectedCagr} CAGR
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-4 w-full rounded-full overflow-hidden bg-white/10 flex">
                <div 
                  style={{ width: `${profileBlueprint.equityShare}%` }} 
                  className="bg-emerald-400 h-full transition-all duration-700" 
                  title={`Equity Mutual Funds: ${profileBlueprint.equityShare}%`}
                />
                <div 
                  style={{ width: `${profileBlueprint.debtShare}%` }} 
                  className="bg-teal-400 h-full transition-all duration-700" 
                  title={`Fixed Deposits & Debt: ${profileBlueprint.debtShare}%`}
                />
                <div 
                  style={{ width: `${profileBlueprint.liquidShare}%` }} 
                  className="bg-sky-400 h-full transition-all duration-700" 
                  title={`Emergency Cash: ${profileBlueprint.liquidShare}%`}
                />
              </div>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-lg font-bold text-emerald-400 block">{profileBlueprint.equityShare}%</span>
                  <span className="text-white/80 font-medium block">Equity Mutual Funds</span>
                  <span className="text-[10px] text-white/50">For wealth compounding</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-lg font-bold text-teal-300 block">{profileBlueprint.debtShare}%</span>
                  <span className="text-white/80 font-medium block">Fixed Deposits &amp; Debt</span>
                  <span className="text-[10px] text-white/50">For capital preservation</span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-lg font-bold text-sky-300 block">{profileBlueprint.liquidShare}%</span>
                  <span className="text-white/80 font-medium block">Emergency Liquid Cash</span>
                  <span className="text-[10px] text-white/50">Instant liquidity</span>
                </div>
              </div>
            </div>

            {/* ADVISORY IMPLICATIONS & SUGGESTED PORTFOLIO MIX */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-left">
              <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  Profile Suitability &amp; Strategy
                </h3>
                <p className="text-white/75 leading-relaxed text-xs sm:text-sm">
                  {profileBlueprint.suitability}
                </p>
                <p className="text-white/60 leading-relaxed text-xs pt-1 border-t border-white/5">
                  {profileBlueprint.recommendation}
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Suggested Fund Categories
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                  {profileBlueprint.fundMix.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 1-ON-1 CONSULTATION ACTION CTA */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#032420] via-[#021817] to-[#011413] border border-emerald-500/30 space-y-4 text-left">
              <div className="space-y-1">
                <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                  Direct Expert Advisory
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Discuss Your Personalized Portfolio with Vikrant Bhardwaj
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Your results have been saved to your verified account ({user?.email}). Connect directly on WhatsApp with AMFI-registered distributor Vikrant (ARN-284122) for a customized fund selection &amp; FD roadmap.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppShare}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss on WhatsApp</span>
                  <span>→</span>
                </button>

                <Link
                  href="/lets-talk"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>Book Free Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RETAKE BUTTON */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => {
                  setAnswers({});
                  setCurrentStep(0);
                  setShowResult(false);
                  setHasSavedToDb(false);
                }}
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Retake Assessment
              </button>

              <span className="text-xs text-slate-400 font-mono">
                AMFI ARN-284122 Verified
              </span>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
