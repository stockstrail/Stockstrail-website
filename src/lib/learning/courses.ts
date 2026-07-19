// Data layer for the learning platform.
// Structured so a future CMS/backend can replace this module without UI changes.

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string; // emoji or short glyph token — swap for real illustration later
  accent: string; // gradient token
  thumbnail?: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answerIndex: number;
  explanation?: string;
}

export type LessonBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "ordered"; items: string[] }
  | { type: "callout"; variant: "tip" | "warning" | "note" | "mistake"; title: string; text: string }
  | { type: "definition"; term: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "formula"; title: string; formula: string; text?: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "video"; url: string; title?: string }
  | { type: "markdown"; text: string };

export interface Lesson {
  slug: string;
  title: string;
  minutes: number;
  blocks: LessonBlock[];
}

export interface Module {
  slug: string;
  title: string;
  summary?: string;
  lessons: Lesson[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string; // category slug
  difficulty: Difficulty;
  minutes: number; // total est. reading time
  hasImages: boolean;
  hasVideos: boolean;
  hasQuiz: boolean;
  updatedAt: string; // ISO date
  popularity: number; // 0-100
  thumbnailAccent: [string, string]; // gradient stops
  thumbnailGlyph: string;
  modules: Module[];
  faqs: FAQ[];
  quiz: QuizQuestion[];
  related: string[]; // course slugs
  keyTakeaways: string[];
  coverImage?: string;
  thumbnail?: string;
}

export const categories: Category[] = [
  { slug: "mutual-funds", name: "Mutual Funds", description: "Pooled investments, NAV, expense ratios and more.", icon: "MF", accent: "from-emerald-400/40 to-emerald-700/10" },
  { slug: "sip", name: "SIP", description: "Systematic Investment Plans and disciplined investing.", icon: "SIP", accent: "from-teal-400/40 to-teal-700/10" },
  { slug: "swp", name: "SWP", description: "Systematic Withdrawal Plans for cashflow.", icon: "SWP", accent: "from-cyan-400/40 to-cyan-700/10" },
  { slug: "insurance", name: "Insurance", description: "Protect your family and your wealth.", icon: "INS", accent: "from-sky-400/40 to-sky-700/10" },
  { slug: "stock-market", name: "Stock Market", description: "Equities, indices, and how markets work.", icon: "STK", accent: "from-lime-400/40 to-lime-700/10" },
  { slug: "demat", name: "Demat Accounts", description: "Open, use and secure a demat account.", icon: "DMT", accent: "from-green-400/40 to-green-700/10" },
  { slug: "personal-finance", name: "Personal Finance", description: "Budgeting, saving, and money habits.", icon: "PF", accent: "from-emerald-300/40 to-emerald-800/10" },
  { slug: "tax-saving", name: "Tax Saving", description: "Section 80C, ELSS, NPS and smart tax planning.", icon: "TAX", accent: "from-amber-300/40 to-amber-700/10" },
  { slug: "loans", name: "Loans", description: "Home, personal & credit loans decoded.", icon: "LN", accent: "from-rose-300/40 to-rose-700/10" },
  { slug: "retirement", name: "Retirement", description: "Plan a stress-free retirement.", icon: "RET", accent: "from-indigo-300/40 to-indigo-700/10" },
  { slug: "financial-planning", name: "Financial Planning", description: "Goal-based, holistic wealth planning.", icon: "FP", accent: "from-fuchsia-300/40 to-fuchsia-700/10" },
  { slug: "fixed-deposits", name: "Fixed Deposits", description: "Safe, predictable returns explained.", icon: "FD", accent: "from-yellow-300/40 to-yellow-700/10" },
];

// ---------- COURSES ----------

const mutualFundsCourse: Course = {
  slug: "mutual-funds",
  title: "Mutual Funds: From Zero to Confident Investor",
  tagline: "The complete beginner-to-intermediate guide to mutual fund investing in India.",
  description:
    "Understand what mutual funds are, how they work, the different types, how NAV and expense ratios affect returns, taxation, and common mistakes to avoid — with real Indian examples.",
  category: "mutual-funds",
  difficulty: "Beginner",
  minutes: 75,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-06-12",
  popularity: 98,
  thumbnailAccent: ["#00ff97", "#007d42"],
  thumbnailGlyph: "MF",
  keyTakeaways: [
    "A mutual fund pools money from many investors and is managed by a professional fund manager.",
    "NAV is the per-unit price and moves with the underlying portfolio.",
    "Expense ratio is deducted before returns are declared — lower is generally better.",
    "SIPs help you average cost across market cycles.",
    "Match fund category to your goal and time horizon, not to past returns.",
  ],
  modules: [
    {
      slug: "overview",
      title: "Overview",
      summary: "Set the stage for the whole course.",
      lessons: [
        {
          slug: "what-is-a-mutual-fund",
          title: "What is a Mutual Fund?",
          minutes: 6,
          blocks: [
            { type: "p", text: "A mutual fund is a professionally managed investment vehicle that pools money from many investors and invests it across a diversified basket of securities — stocks, bonds, gold, or a mix — according to a stated objective." },
            { type: "p", text: "You don't buy the underlying securities directly. Instead, you buy units of the fund. As the value of what the fund owns rises or falls, so does the NAV (Net Asset Value) of your units." },
            { type: "definition", term: "NAV (Net Asset Value)", text: "The per-unit market value of a mutual fund on a given day, calculated as (Total assets − Liabilities) ÷ Units outstanding." },
            { type: "callout", variant: "tip", title: "Think of it like this", text: "A mutual fund is a shared basket. Everyone contributes money, a professional shopper (the fund manager) fills the basket, and everyone owns a slice." },
          ],
        },
        {
          slug: "history",
          title: "A Quick History",
          minutes: 4,
          blocks: [
            { type: "p", text: "India's mutual fund industry started in 1963 with UTI. Private players entered in the 1990s, and today the industry manages more than ₹60 lakh crore in AUM, held by tens of millions of retail investors." },
            { type: "p", text: "Regulation sits with SEBI, which enforces transparency, disclosures, and risk categorization across schemes." },
          ],
        },
      ],
    },
    {
      slug: "core-concepts",
      title: "Core Concepts",
      lessons: [
        {
          slug: "types",
          title: "Types of Mutual Funds",
          minutes: 10,
          blocks: [
            { type: "p", text: "Funds are classified by asset class, structure, and strategy. The most useful lens for a beginner is asset class." },
            {
              type: "table",
              headers: ["Category", "Invests in", "Best for"],
              rows: [
                ["Equity Funds", "Stocks", "Long-term wealth (5+ years)"],
                ["Debt Funds", "Bonds, treasury bills", "Stability, short-medium term"],
                ["Hybrid Funds", "Mix of equity + debt", "Balanced risk"],
                ["Index Funds", "Track an index (Nifty 50, etc.)", "Low-cost, passive investors"],
                ["ELSS", "Equity + 3-year lock-in", "Tax saving under 80C"],
              ],
            },
            { type: "callout", variant: "note", title: "SEBI categories", text: "Under SEBI's 2017 categorization, each AMC can have only one scheme per category — making comparison much easier." },
          ],
        },
        {
          slug: "nav-and-expense-ratio",
          title: "NAV and Expense Ratio",
          minutes: 8,
          blocks: [
            { type: "h3", text: "Why the NAV doesn't tell you if a fund is 'cheap'" },
            { type: "p", text: "A ₹10 NAV fund is not cheaper than a ₹100 NAV fund. Returns depend on percentage change of the portfolio, not the absolute NAV." },
            { type: "formula", title: "Expense Ratio", formula: "Return you see  =  Portfolio return  −  Expense ratio", text: "The expense ratio is charged daily and already deducted before the NAV is published." },
            { type: "callout", variant: "warning", title: "Watch the expenses", text: "Over 20 years, a 1% higher expense ratio can eat 20%+ of your final corpus. Prefer low-cost direct plans wherever possible." },
          ],
        },
        {
          slug: "benefits-and-risks",
          title: "Benefits & Risks",
          minutes: 6,
          blocks: [
            { type: "h3", text: "Benefits" },
            { type: "list", items: [
              "Professional management",
              "Instant diversification",
              "Regulated & transparent",
              "Start with as little as ₹500 via SIP",
              "Liquidity — most schemes redeem in 1-3 days",
            ]},
            { type: "h3", text: "Risks" },
            { type: "list", items: [
              "Market risk (equity funds)",
              "Credit & interest-rate risk (debt funds)",
              "Concentration risk in sector funds",
              "Behavioural risk — panic-selling in downturns",
            ]},
          ],
        },
      ],
    },
    {
      slug: "practical",
      title: "Practical Investing",
      lessons: [
        {
          slug: "real-world-example",
          title: "A Real-world SIP Example",
          minutes: 7,
          blocks: [
            { type: "p", text: "Priya, 27, starts a ₹5,000 monthly SIP in a Nifty 50 index fund and steps it up 10% every year. She holds for 25 years." },
            { type: "formula", title: "Expected corpus", formula: "≈ ₹2.6 crore", text: "Assuming 12% CAGR and 10% annual step-up. Actual returns will vary — the point is the compounding effect of discipline + time." },
            { type: "callout", variant: "tip", title: "Automate it", text: "Set up an ECS mandate so the SIP is deducted automatically. Automation beats motivation." },
          ],
        },
        {
          slug: "taxation",
          title: "Taxation Basics",
          minutes: 6,
          blocks: [
            {
              type: "table",
              headers: ["Fund type", "Holding period", "Tax"],
              rows: [
                ["Equity", "< 1 year (STCG)", "15%"],
                ["Equity", "> 1 year (LTCG)", "10% above ₹1L / year"],
                ["Debt", "Any", "As per slab (post Apr 2023)"],
                ["ELSS", "Locked 3 years", "10% LTCG above ₹1L"],
              ],
            },
            { type: "callout", variant: "note", title: "Rules change", text: "Tax rules evolve — always confirm current rates before filing." },
          ],
        },
        {
          slug: "common-mistakes",
          title: "Common Mistakes",
          minutes: 5,
          blocks: [
            { type: "callout", variant: "mistake", title: "Chasing last year's winner", text: "The top fund of last year is usually not the top fund of next year. Focus on process and consistency." },
            { type: "callout", variant: "mistake", title: "Too many funds", text: "3-5 well-chosen funds are enough. Beyond that you are just duplicating the market." },
            { type: "callout", variant: "mistake", title: "Stopping SIP in a crash", text: "Down markets are when SIPs buy the most units. Stopping locks in the pain and skips the recovery." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Are mutual funds safe?", a: "They are regulated, but not risk-free. Equity funds fluctuate with markets; debt funds carry credit and interest-rate risk. Safety depends on the category and time horizon." },
    { q: "Can I lose all my money?", a: "In a diversified equity or debt fund, a total loss is extremely unlikely because the portfolio holds many securities. Concentrated sector funds carry more risk." },
    { q: "Direct plan vs Regular plan?", a: "Direct plans have a lower expense ratio because there's no distributor commission. Over long horizons this makes a meaningful difference." },
    { q: "How much should I invest?", a: "Start with what you can sustain. Even ₹500/month is enough to build a habit. Increase as your income grows." },
  ],
  quiz: [
    { q: "NAV of a mutual fund is best described as:", options: ["The price at which the AMC buys stocks", "The per-unit market value of the fund", "The commission paid to the distributor", "The tax on the fund"], answerIndex: 1, explanation: "NAV = (Assets − Liabilities) / Units outstanding." },
    { q: "A ₹10 NAV fund is cheaper than a ₹100 NAV fund.", options: ["True", "False"], answerIndex: 1, explanation: "NAV alone tells you nothing about future returns — percentage change matters." },
    { q: "ELSS funds have a lock-in of:", options: ["1 year", "3 years", "5 years", "No lock-in"], answerIndex: 1 },
    { q: "The expense ratio is:", options: ["Charged separately every year", "Already deducted before NAV is published", "Only charged on redemption", "Optional"], answerIndex: 1 },
  ],
  related: ["sip-mastery", "tax-saving-investments"],
};

const sipCourse: Course = {
  slug: "sip-mastery",
  title: "SIP Mastery: The Discipline of Wealth",
  tagline: "Master systematic investing — the single most reliable path to long-term wealth.",
  description: "Learn how SIPs work, why rupee-cost averaging matters, how to step-up SIPs, and how to stay the course during market volatility.",
  category: "sip",
  difficulty: "Beginner",
  minutes: 45,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-05-28",
  popularity: 92,
  thumbnailAccent: ["#00d873", "#003a39"],
  thumbnailGlyph: "SIP",
  keyTakeaways: [
    "SIPs remove market-timing from the equation.",
    "Rupee-cost averaging works best in volatile markets.",
    "A step-up SIP mirrors income growth and multiplies the final corpus.",
    "Consistency > amount in early years.",
  ],
  modules: [
    {
      slug: "sip-basics",
      title: "SIP Basics",
      lessons: [
        {
          slug: "what-is-sip",
          title: "What is a SIP?",
          minutes: 5,
          blocks: [
            { type: "p", text: "A Systematic Investment Plan (SIP) invests a fixed amount into a mutual fund at fixed intervals — usually monthly. You buy more units when NAV is low and fewer when NAV is high." },
            { type: "definition", term: "Rupee-cost averaging", text: "The natural averaging that happens when you invest a fixed rupee amount across varying price levels." },
            { type: "callout", variant: "tip", title: "Automation beats motivation", text: "Once your SIP mandate is set, the decision is made — you never need to time the market again." },
          ],
        },
        {
          slug: "step-up-sip",
          title: "Step-up SIPs",
          minutes: 6,
          blocks: [
            { type: "p", text: "A step-up (or top-up) SIP increases the monthly amount by a fixed percentage every year, mirroring salary growth." },
            { type: "formula", title: "Corpus formula", formula: "FV ≈ P × ((1+r)^n − 1) / r", text: "P = monthly SIP, r = monthly return, n = months. Step-up SIP calculators handle the annual increment." },
          ],
        },
      ],
    },
    {
      slug: "behavior",
      title: "Behavior & Psychology",
      lessons: [
        {
          slug: "surviving-a-crash",
          title: "Surviving a Market Crash",
          minutes: 5,
          blocks: [
            { type: "callout", variant: "warning", title: "The urge to stop", text: "Every crash feels different, but the playbook is the same: don't stop your SIP. That's when you buy the most units." },
            { type: "quote", text: "Time in the market beats timing the market.", author: "Peter Lynch" },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "What is the ideal SIP date?", a: "It matters less than staying consistent. Pick a date shortly after payday." },
    { q: "Can I pause a SIP?", a: "Most AMCs allow a pause of 1-3 months without cancelling the mandate." },
  ],
  quiz: [
    { q: "SIP works best because it:", options: ["Guarantees returns", "Removes market-timing decisions", "Avoids all risk", "Pays a monthly dividend"], answerIndex: 1 },
    { q: "In a falling market, a fixed SIP amount buys:", options: ["Fewer units", "The same units", "More units", "No units"], answerIndex: 2 },
  ],
  related: ["mutual-funds", "goal-based-investing"],
};

const insuranceCourse: Course = {
  slug: "insurance-fundamentals",
  title: "Insurance Fundamentals: Protect Before You Grow",
  tagline: "Understand term, health, and general insurance the smart way.",
  description: "A no-nonsense guide to how insurance works, the difference between term and traditional plans, and how much cover you really need.",
  category: "insurance",
  difficulty: "Beginner",
  minutes: 40,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-04-10",
  popularity: 84,
  thumbnailAccent: ["#00ff97", "#00d873"],
  thumbnailGlyph: "INS",
  keyTakeaways: [
    "Insurance is protection, not investment.",
    "A pure term plan gives the maximum cover per rupee.",
    "Buy health cover early — premiums scale with age & pre-existing conditions.",
    "Never mix insurance and investment in a single product.",
  ],
  modules: [
    {
      slug: "core",
      title: "Core Ideas",
      lessons: [
        {
          slug: "what-insurance-really-is",
          title: "What Insurance Really Is",
          minutes: 5,
          blocks: [
            { type: "p", text: "Insurance is risk transfer. In exchange for a small predictable cost (premium), you shift the burden of a large unpredictable loss (death, hospitalisation, accident) to the insurer's pool." },
            { type: "callout", variant: "note", title: "Rule of thumb", text: "If a loss would derail your family's finances, insure it. If not, self-insure." },
          ],
        },
        {
          slug: "term-vs-endowment",
          title: "Term vs Endowment",
          minutes: 6,
          blocks: [
            {
              type: "table",
              headers: ["", "Term Plan", "Endowment / ULIP"],
              rows: [
                ["Purpose", "Pure protection", "Protection + investment"],
                ["Cover for ₹10,000/yr", "~₹1 crore", "~₹5-10 lakh"],
                ["Returns if you survive", "Zero", "3-6%"],
                ["Verdict", "Buy this", "Avoid for wealth"],
              ],
            },
            { type: "callout", variant: "mistake", title: "Don't mix goals", text: "Buy a term plan for protection. Invest the difference in a mutual fund for wealth. The two together outperform any combined product." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "How much term cover do I need?", a: "10-15× your annual income, plus outstanding liabilities, minus liquid assets." },
    { q: "Do I need health insurance if my employer provides it?", a: "Yes — employer cover disappears when you leave the job and often isn't enough." },
  ],
  quiz: [
    { q: "The primary purpose of insurance is:", options: ["Wealth creation", "Tax saving", "Risk transfer", "Retirement planning"], answerIndex: 2 },
    { q: "For maximum protection per rupee, choose:", options: ["Endowment plan", "ULIP", "Term plan", "Money-back plan"], answerIndex: 2 },
  ],
  related: ["mutual-funds", "financial-planning-basics"],
};

const stockMarketCourse: Course = {
  slug: "stock-market-basics",
  title: "Stock Market Basics: How Markets Actually Work",
  tagline: "Demystify shares, exchanges, indices, and how trades happen behind the scenes.",
  description: "A foundational course covering equities, primary vs secondary markets, indices, order types, and market participants.",
  category: "stock-market",
  difficulty: "Beginner",
  minutes: 55,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-05-02",
  popularity: 90,
  thumbnailAccent: ["#00ff97", "#004b2a"],
  thumbnailGlyph: "STK",
  keyTakeaways: [
    "A share represents partial ownership of a business.",
    "Primary markets create shares; secondary markets trade them.",
    "Indices are portfolios that measure the market's pulse.",
    "Long-term equity returns come from earnings growth, not sentiment.",
  ],
  modules: [
    {
      slug: "shares-101",
      title: "Shares 101",
      lessons: [
        {
          slug: "what-is-a-share",
          title: "What is a Share?",
          minutes: 5,
          blocks: [
            { type: "p", text: "A share is a fractional ownership stake in a company. If a company has 1 crore shares and you hold 1 lakh, you own 1% of it — your slice of its profits, assets, and voting rights." },
            { type: "quote", text: "In the short run, the market is a voting machine. In the long run, it is a weighing machine.", author: "Benjamin Graham" },
          ],
        },
      ],
    },
    {
      slug: "markets",
      title: "Primary vs Secondary Market",
      lessons: [
        {
          slug: "ipo-and-secondary",
          title: "IPOs and Everyday Trading",
          minutes: 6,
          blocks: [
            { type: "p", text: "The primary market is where new shares are created — typically via an IPO. Once listed, shares trade between investors on the secondary market (NSE, BSE)." },
            { type: "definition", term: "IPO", text: "Initial Public Offering — the first time a company sells its shares to the public." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "How do I start investing in stocks?", a: "Open a demat + trading account with a SEBI-registered broker, complete KYC, and start with a small, diversified position." },
    { q: "Are stocks safe?", a: "Individual stocks are volatile; a well-diversified equity portfolio held long term has historically beaten inflation." },
  ],
  quiz: [
    { q: "The BSE and NSE are examples of:", options: ["Primary markets", "Secondary markets", "Debt markets", "Commodity markets"], answerIndex: 1 },
    { q: "Owning 100 shares out of 1 crore total means you own:", options: ["1%", "0.01%", "0.0001%", "0.001%"], answerIndex: 3, explanation: "100 / 1,00,00,000 = 0.001%" },
  ],
  related: ["mutual-funds", "demat-accounts-guide"],
};

const dematCourse: Course = {
  slug: "demat-accounts-guide",
  title: "Demat Accounts: Your Gateway to the Markets",
  tagline: "Everything you need to know before opening a demat account.",
  description: "Understand what a demat account is, how it differs from a trading account, charges, and how to keep it secure.",
  category: "demat",
  difficulty: "Beginner",
  minutes: 30,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-03-20",
  popularity: 75,
  thumbnailAccent: ["#00d873", "#002424"],
  thumbnailGlyph: "DMT",
  keyTakeaways: [
    "A demat account holds securities in electronic form.",
    "A trading account executes buy/sell orders — the two work together.",
    "Charges vary: opening, AMC, transaction. Compare carefully.",
  ],
  modules: [
    {
      slug: "basics",
      title: "The Basics",
      lessons: [
        {
          slug: "demat-vs-trading",
          title: "Demat vs Trading Account",
          minutes: 4,
          blocks: [
            {
              type: "table",
              headers: ["", "Demat", "Trading"],
              rows: [
                ["Role", "Stores securities", "Executes orders"],
                ["Provider", "CDSL / NSDL via DP", "Broker"],
                ["Charges", "AMC, transaction", "Brokerage, taxes"],
              ],
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Can I have multiple demat accounts?", a: "Yes — with different depository participants — but you can't have two with the same DP." },
  ],
  quiz: [
    { q: "A demat account is used to:", options: ["Store securities electronically", "Place buy/sell orders", "Get a loan", "Pay taxes"], answerIndex: 0 },
  ],
  related: ["stock-market-basics", "mutual-funds"],
};

const taxSavingCourse: Course = {
  slug: "tax-saving-investments",
  title: "Tax Saving Investments: Save Smart, Grow Smart",
  tagline: "Use Section 80C, ELSS, NPS and more to reduce tax legally.",
  description: "Compare tax-saving instruments by lock-in, return, and risk — and pick the right mix for your goals.",
  category: "tax-saving",
  difficulty: "Intermediate",
  minutes: 50,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-06-01",
  popularity: 88,
  thumbnailAccent: ["#f6c05a", "#003a39"],
  thumbnailGlyph: "TAX",
  keyTakeaways: [
    "80C offers ₹1.5L deduction — but only under the old tax regime.",
    "ELSS has the shortest lock-in (3 years) with equity upside.",
    "NPS adds an extra ₹50,000 deduction under 80CCD(1B).",
    "Old vs new regime — compute both every year.",
  ],
  modules: [
    {
      slug: "80c-toolkit",
      title: "The 80C Toolkit",
      lessons: [
        {
          slug: "80c-instruments",
          title: "80C Instruments Compared",
          minutes: 8,
          blocks: [
            {
              type: "table",
              headers: ["Instrument", "Lock-in", "Expected return", "Risk"],
              rows: [
                ["ELSS", "3 years", "10-13% (long-term)", "Market"],
                ["PPF", "15 years", "~7% (govt.)", "Very low"],
                ["EPF", "Retirement", "~8% (govt.)", "Very low"],
                ["NSC", "5 years", "~7% (govt.)", "Very low"],
                ["Tax-saver FD", "5 years", "~6-7%", "Low"],
              ],
            },
            { type: "callout", variant: "tip", title: "Best of both worlds", text: "A mix of ELSS + PPF gives growth from equity + stability from a sovereign instrument." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Does the new tax regime allow 80C?", a: "No — most deductions including 80C are unavailable under the new regime." },
  ],
  quiz: [
    { q: "The shortest lock-in among 80C options is:", options: ["PPF", "NSC", "ELSS", "Tax-saver FD"], answerIndex: 2 },
    { q: "NPS additional deduction under 80CCD(1B) is:", options: ["₹25,000", "₹50,000", "₹75,000", "₹1,00,000"], answerIndex: 1 },
  ],
  related: ["mutual-funds", "retirement-planning-101"],
};

const retirementCourse: Course = {
  slug: "retirement-planning-101",
  title: "Retirement Planning 101",
  tagline: "Design a retirement that funds itself.",
  description: "Learn how to size your retirement corpus, use NPS and EPF, and structure withdrawals to last a lifetime.",
  category: "retirement",
  difficulty: "Intermediate",
  minutes: 60,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-05-15",
  popularity: 78,
  thumbnailAccent: ["#7dd3fc", "#003a39"],
  thumbnailGlyph: "RET",
  keyTakeaways: [
    "Start early — the last 10 years contribute the most to your corpus.",
    "The 4% rule offers a simple sustainable withdrawal starting point.",
    "Health cover is non-negotiable in retirement.",
  ],
  modules: [
    {
      slug: "corpus",
      title: "Sizing the Corpus",
      lessons: [
        {
          slug: "how-much",
          title: "How Much Do You Really Need?",
          minutes: 8,
          blocks: [
            { type: "formula", title: "Retirement corpus", formula: "Corpus ≈ Annual expense × 25 – 30", text: "Adjusted for inflation to the year of retirement." },
            { type: "callout", variant: "note", title: "Personalise it", text: "Lifestyle, healthcare, dependents and location all shift the number. Treat 25× as a floor, not a ceiling." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Is NPS enough for retirement?", a: "It's a great supplement but rarely enough on its own — combine with equity mutual funds and PPF." },
  ],
  quiz: [
    { q: "The 4% rule refers to:", options: ["Annual return needed", "Sustainable withdrawal rate", "Inflation assumption", "Tax rate"], answerIndex: 1 },
  ],
  related: ["mutual-funds", "financial-planning-basics"],
};

const financialPlanningCourse: Course = {
  slug: "financial-planning-basics",
  title: "Financial Planning Basics",
  tagline: "Turn goals into a step-by-step money roadmap.",
  description: "Learn to map goals to instruments, build an emergency fund, allocate assets, and review your plan annually.",
  category: "financial-planning",
  difficulty: "Beginner",
  minutes: 50,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-06-05",
  popularity: 82,
  thumbnailAccent: ["#c084fc", "#003a39"],
  thumbnailGlyph: "FP",
  keyTakeaways: [
    "Emergency fund first, insurance second, investments third.",
    "Match instrument to goal horizon.",
    "Review yearly — never set-and-forget.",
  ],
  modules: [
    {
      slug: "hierarchy",
      title: "The Financial Hierarchy",
      lessons: [
        {
          slug: "the-order",
          title: "The Order That Matters",
          minutes: 6,
          blocks: [
            { type: "ordered", items: [
              "Emergency fund: 6× monthly expenses in a liquid fund.",
              "Insurance: adequate term + health cover.",
              "High-interest debt: pay off credit cards and personal loans.",
              "Retirement: automated long-term SIP.",
              "Goals: education, home, travel — each in its own bucket.",
            ]},
            { type: "callout", variant: "tip", title: "The bucket approach", text: "Give every rupee a job. Loose money invites lifestyle inflation." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "How often should I review my plan?", a: "Once a year, and whenever a major life event happens — job change, marriage, child, home purchase." },
  ],
  quiz: [
    { q: "The first step in a financial plan is:", options: ["Investing in equity", "Building an emergency fund", "Buying a house", "Retiring early"], answerIndex: 1 },
  ],
  related: ["mutual-funds", "insurance-fundamentals"],
};

const goalBasedCourse: Course = {
  slug: "goal-based-investing",
  title: "Goal-Based Investing",
  tagline: "Invest with a purpose, not a portfolio.",
  description: "How to align investments to specific goals — child education, home, retirement — and pick the right instrument for each horizon.",
  category: "financial-planning",
  difficulty: "Intermediate",
  minutes: 45,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-06-08",
  popularity: 70,
  thumbnailAccent: ["#f472b6", "#003a39"],
  thumbnailGlyph: "GBI",
  keyTakeaways: [
    "Every goal gets its own SIP and its own target.",
    "Match asset allocation to horizon.",
    "Rebalance yearly.",
  ],
  modules: [
    {
      slug: "goals",
      title: "Goals & Horizons",
      lessons: [
        {
          slug: "horizon-map",
          title: "The Horizon Map",
          minutes: 6,
          blocks: [
            {
              type: "table",
              headers: ["Horizon", "Ideal instrument"],
              rows: [
                ["< 3 years", "Liquid / arbitrage funds"],
                ["3-5 years", "Hybrid / conservative equity"],
                ["> 5 years", "Diversified equity / index"],
              ],
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Can one SIP fund multiple goals?", a: "Technically yes, but separating them makes tracking and decision-making easier." },
  ],
  quiz: [
    { q: "For a 2-year goal, the best instrument is usually:", options: ["Equity fund", "Liquid fund", "Sector fund", "Small-cap fund"], answerIndex: 1 },
  ],
  related: ["mutual-funds", "sip-mastery"],
};

const fdCourse: Course = {
  slug: "fixed-deposits-explained",
  title: "Fixed Deposits: Safe and Predictable",
  tagline: "Understand FDs, laddering, and where they fit in a modern portfolio.",
  description: "Learn how FDs work, taxation, senior citizen benefits, and how to build an FD ladder.",
  category: "fixed-deposits",
  difficulty: "Beginner",
  minutes: 25,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-02-14",
  popularity: 65,
  thumbnailAccent: ["#fbbf24", "#003a39"],
  thumbnailGlyph: "FD",
  keyTakeaways: [
    "FDs offer capital protection, not inflation-beating returns.",
    "Interest is fully taxable at slab rates.",
    "A ladder gives you liquidity + higher average rate.",
  ],
  modules: [
    {
      slug: "basics",
      title: "FD Basics",
      lessons: [
        {
          slug: "how-fds-work",
          title: "How FDs Work",
          minutes: 4,
          blocks: [
            { type: "p", text: "You lock a lumpsum for a fixed tenure at a fixed rate. On maturity you receive principal + interest." },
            { type: "callout", variant: "warning", title: "Watch inflation", text: "A 7% FD in a 6% inflation environment gives ~1% real return before tax." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Are FDs safe?", a: "Deposits up to ₹5 lakh per bank are insured under DICGC. Beyond that, spread across banks." },
  ],
  quiz: [
    { q: "FD interest is taxed at:", options: ["10% flat", "Your income slab rate", "0% up to ₹1L", "20%"], answerIndex: 1 },
  ],
  related: ["mutual-funds", "financial-planning-basics"],
};

const personalFinanceCourse: Course = {
  slug: "personal-finance-foundations",
  title: "Personal Finance Foundations",
  tagline: "Build money habits that quietly change your life.",
  description: "Budgeting, saving, mindful spending, and cashflow management — the invisible engine behind every wealthy person.",
  category: "personal-finance",
  difficulty: "Beginner",
  minutes: 40,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-06-18",
  popularity: 86,
  thumbnailAccent: ["#00ff97", "#00534d"],
  thumbnailGlyph: "PF",
  keyTakeaways: [
    "Pay yourself first — automate savings before spending.",
    "The 50/30/20 rule is a strong default budget.",
    "Track for 3 months to see the truth of your spending.",
  ],
  modules: [
    {
      slug: "budgeting",
      title: "Budgeting",
      lessons: [
        {
          slug: "the-50-30-20",
          title: "The 50/30/20 Rule",
          minutes: 5,
          blocks: [
            { type: "list", items: [
              "50% Needs — rent, food, utilities",
              "30% Wants — dining, travel, subscriptions",
              "20% Savings + debt repayment",
            ]},
            { type: "callout", variant: "tip", title: "Automate 20 first", text: "The moment your salary hits, move 20% into a separate account. Live on what's left." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Is budgeting restrictive?", a: "A budget is permission to spend — not a punishment. It removes guilt from money decisions." },
  ],
  quiz: [
    { q: "In the 50/30/20 rule, savings is:", options: ["10%", "20%", "30%", "50%"], answerIndex: 1 },
  ],
  related: ["mutual-funds", "financial-planning-basics"],
};

const loansCourse: Course = {
  slug: "loans-decoded",
  title: "Loans Decoded",
  tagline: "Borrow smart: rates, tenure, EMI and the true cost of credit.",
  description: "Compare loan types, understand the EMI formula, and avoid the traps that make loans quietly expensive.",
  category: "loans",
  difficulty: "Intermediate",
  minutes: 45,
  hasImages: true,
  hasVideos: false,
  hasQuiz: true,
  updatedAt: "2026-05-30",
  popularity: 72,
  thumbnailAccent: ["#fca5a5", "#003a39"],
  thumbnailGlyph: "LN",
  keyTakeaways: [
    "EMI hides a slow shift from interest to principal.",
    "Prepayment early in the tenure saves the most.",
    "Compare APR, not just headline rates.",
  ],
  modules: [
    {
      slug: "emi",
      title: "The EMI Truth",
      lessons: [
        {
          slug: "how-emi-splits",
          title: "How EMI Splits",
          minutes: 6,
          blocks: [
            { type: "formula", title: "EMI formula", formula: "EMI = P × r × (1+r)^n / ((1+r)^n − 1)", text: "In the early years, most of the EMI is interest. Prepay early to save the most." },
            { type: "callout", variant: "mistake", title: "Long tenure = low EMI", text: "Yes, but total interest paid can exceed the principal. Choose the shortest tenure you can afford." },
          ],
        },
      ],
    },
  ],
  faqs: [
    { q: "Should I prepay a home loan?", a: "If your after-tax loan rate is higher than your expected long-term investment return, yes." },
  ],
  quiz: [
    { q: "In the first year of a home loan EMI, the larger portion is:", options: ["Principal", "Interest", "Equal", "Taxes"], answerIndex: 1 },
  ],
  related: ["personal-finance-foundations", "financial-planning-basics"],
};

export const courses: Course[] = [
  mutualFundsCourse,
  sipCourse,
  insuranceCourse,
  stockMarketCourse,
  dematCourse,
  taxSavingCourse,
  retirementCourse,
  financialPlanningCourse,
  goalBasedCourse,
  fdCourse,
  personalFinanceCourse,
  loansCourse,
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedCourses(course: Course): Course[] {
  return course.related.map(getCourseBySlug).filter(Boolean) as Course[];
}

export function coursesByCategory(categorySlug: string): Course[] {
  return courses.filter((c) => c.category === categorySlug);
}
