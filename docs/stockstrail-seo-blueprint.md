# Stockstrail SEO / AEO / GEO Blueprint

Prepared 9 Oct 2026 from a live read of stockstrail.in plus current search data. This document contains everything from the Excel workbook `Stockstrail_SEO_Meta_Blueprint.xlsx`: new meta titles and descriptions for 101 pages, keyword map, fix list and the AEO/GEO playbook.

## Contents

- 0. How to use this file in Google Antigravity
- 1. Implementation rules for the AI agent
- 2. Read me: rules, facts checked, limits
- 3. Metadata: main site (stockstrail.in), 49 pages
- 4. Metadata: learning subdomain (learning.stockstrail.in), 52 pages
- 5. Keyword map
- 6. Fix list
- 7. AEO / GEO playbook
- 8. QA summary

## 0. How to use this file in Google Antigravity

Antigravity works from Markdown files in your project folder (its rules, workflows and skills are all Markdown), so this document is delivered as `.md` rather than Excel.

1. Save this file inside your Stockstrail project, for example `docs/stockstrail-seo-blueprint.md`.
2. Optional: copy Section 1 into a rule file such as `.agents/rules/seo-meta.md` so the agent follows it in every session.
3. Give the agent a prompt like the one below. Start with the metadata, and have it show you a diff before changing anything else.

```text
Read docs/stockstrail-seo-blueprint.md.
Task 1: Implement the metadata in Sections 3 and 4 for every URL listed, using the exact strings under
'New title' and 'New description'. Follow the rules in Section 1.
Task 2: Implement Fix List items F1, F3, F9 and F18 only after showing me the proposed diff.
Do NOT change compliance wording (F6, F7, F8) or body copy without asking me first.
When done, list every file you changed and any URL you could not map to a route.
```

## 1. Implementation rules for the AI agent

- Use the strings in each page's **New title** and **New description** exactly as written. Do not rewrite, shorten or add the brand name again.
- Titles are final, brand included. Configure the framework so the brand is not appended a second time (Fix List F1): use an absolute title for pages that already contain the brand, or remove the suffix from per-page titles and let a template add it.
- Set the canonical tag of each page to the **URL** given. Keep the www version as canonical for stockstrail.in. Pages with an alias list in the source sheet (non-www, trailing slash, `?tab=`/`?type=` parameters) should 301 to the canonical.
- Pages marked **Indexing: NOINDEX** must output `robots: noindex, nofollow` and be excluded from the XML sitemap.
- Set Open Graph and Twitter titles and descriptions equal to the new title and description. Use a 1200x630 image (Fix List F18).
- Title target is 60 characters or fewer; description target is about 125-160 characters. The character counts are given for each page; verify them after implementation.
- Items marked Priority P1 first, then P2, then P3.
- Do not edit body copy, claims, rates or legal/compliance wording on your own. Fix List items F6, F7 and F8 need a human compliance review first.
- Slug changes and 301 redirects (Fix List F13) must only be done after the owner approves each old-to-new URL mapping.
- Some pages are time-sensitive (NSE/BSE holidays, SEBI nomination, IT layoffs post, tax calculator). Do not change their dates or figures without a source.

## 2. Read me: rules, facts checked, limits

### Rules used for every title and description

- **Brand:** 'Stockstrail' appears in every title. Home leads with the brand; other pages lead with the keyword and close with '| Stockstrail'.
- **Title length:** 60 characters or fewer so most are not cut off. Google has no fixed limit; truncation depends on pixel width.
- **Description length:** About 125-160 characters with the key point in the first ~120. Google states there is no length limit and truncates to fit the device width; it only sometimes uses your description, and descriptions are not a ranking factor. Their job is clarity and click-through.
- **Claims:** No 'best', 'top', 'guaranteed', 'unbiased', 'zero commission' or unverifiable numbers. Rates, tax and holiday facts were checked against current sources (below).
- **Compliance wording:** Stockstrail is described as an 'AMFI-registered mutual fund distributor (ARN-284122)'. Review Fix List F6-F8 with a compliance professional.

### Facts checked (9 Oct 2026) and sources

- **NSE/BSE holidays 2026:** 15 weekday equity trading holidays (Outlook Money, Tata Mutual Fund, Finology). Muhurat Trading is Sunday 8 Nov 2026, confirmed in an NSE circular; timings are announced closer to the date. Remaining 2026 closures after today: 20 Oct, 10 Nov, 24 Nov, 25 Dec.
- **Income tax FY 2026-27:** Budget 2026 (1 Feb 2026) made no change to slabs; new regime remains default; income up to ₹12 lakh effectively tax-free via the 87A rebate; standard deduction ₹75,000 (new) / ₹50,000 (old). The Income-tax Act 2025 replaces the 1961 Act from 1 Apr 2026 (Tata Capital, BankBazaar, Bajaj Finserv, Basunivesh). Verify section numbering before quoting 87A/80C.
- **Loan against mutual funds:** RBI issued revised LAMF rules on 13 Feb 2026, with a ₹1 crore cap effective July 2026 (Upstox). Market rates broadly 8-13% p.a. (JM Financial, Stable Money, Upstox). Your own pages quote 9% and 9.5%: keep one dated figure.
- **Google meta guidance:** Google Search Central, 'Control your snippets in search results': no length limit; truncated to device width; meta description used only when Google considers it more accurate than page text.
- **Google and AI search:** Google, 'Optimizing your website for generative AI features on Google Search' (15 May 2026), as summarised by Search Engine Journal, Practical Ecommerce and others: Google treats AI Overviews/AI Mode optimisation as SEO, with no additional technical requirements. These are secondary summaries, not Google's primary page.

### Limits of this work

- **No keyword-volume tool:** Keyword Planner, Semrush and Search Console were not available, so volumes are not exact. Treat the Keyword Map as a prioritised hypothesis and confirm with your own Search Console data.
- **Pages actually read live:** Home, About, Services > Mutual Funds, SIP Calculator and Blog home. Other pages were rewritten from your sheet; confirm each description matches what its page actually says before publishing.
- **Not verified:** robots.txt, XML sitemap, structured data, Core Web Vitals, backlinks, Search Console health.
- **Not legal advice:** Compliance flags (Fix List F6-F8) are for review by a qualified professional.

## 3. Metadata: main site (stockstrail.in), 49 pages

Strings in backticks are the exact values to implement. Current values are from your original sheet, for reference.

### Core

#### 1. Home Page

- **URL:** https://www.stockstrail.in
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Navigational + Commercial
- **New title (59 characters):** `Stockstrail | Financial Planning & Mutual Fund SIP in India`
- **New description (160 characters):** `Stockstrail (AMFI ARN-284122) guides families and salaried professionals on mutual fund SIPs, term & health insurance, FDs and loans. Book a free strategy call.`
- **Primary keyword:** Stockstrail (brand); financial planning India
- **Secondary / long-tail keywords:** mutual fund SIP India; mutual fund distributor Himachal Pradesh; goal based financial planning; AMFI registered distributor
- **Why this change / implementation notes:** Dropped 'India's trusted' (unverifiable superlative) and 'Expert advisory' (see compliance fix F7). Home H1 ('Smart Investing for Your Family...') has no primary keyword: suggest 'Financial Planning & Mutual Fund Guidance in India'. Add Organization + FinancialService + WebSite schema with sameAs links.
- **Current title (60 characters):** Stockstrail | Financial Planning & Investment Platform India
- **Current description:** Stockstrail (AMFI ARN-284122) is India's trusted financial planning and investment platform. Expert advisory on Mutual Funds SIP, Term Insurance, Fixed Deposits, and Loans.

#### 2. About Us

- **URL:** https://www.stockstrail.in/about
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Navigational / Trust (E-E-A-T)
- **New title (53 characters):** `About Stockstrail | Vikrant Bhardwaj, AMFI ARN-284122`
- **New description (157 characters):** `Meet Vikrant Bhardwaj, founder of Stockstrail, an AMFI-registered mutual fund distributor (ARN-284122) in Himachal Pradesh serving 200+ clients across India.`
- **Primary keyword:** about Stockstrail; Vikrant Bhardwaj
- **Secondary / long-tail keywords:** AMFI registered mutual fund distributor Himachal Pradesh; NISM Series V-A certified distributor
- **Why this change / implementation notes:** Live site currently serves an OLDER title/description than your sheet ('About Us | Stockstrail — Founder, Certifications & Our Approach'): confirm what is deployed. Put the person + credential in the title: this is the authority page AI systems cite. Remove the 'SEBI Registered' label next to the SEBI exam certificate (exam certification is not registration). Add Person schema + author page.
- **Current title (69 characters):** About Stockstrail | Financial Planning & Investment Guidance in India
- **Current description:** Learn about Stockstrail, an AMFI-registered practice founded by Vikrant Bhardwaj (ARN-284122) to make financial planning and investment decisions easier to understand, with goal-focused guidance across India.

#### 3. Services Directory

- **URL:** https://www.stockstrail.in/services
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Commercial / Navigational
- **New title (57 characters):** `Mutual Funds, Insurance, FD & Loan Services | Stockstrail`
- **New description (153 characters):** `Explore Stockstrail's services: mutual fund SIPs, term & health insurance, fixed deposits, loan against mutual funds and Demat accounts. AMFI ARN-284122.`
- **Primary keyword:** financial services India
- **Secondary / long-tail keywords:** mutual fund services; insurance FD loan services; financial planning services
- **Why this change / implementation notes:** Hub page: every service card should link to the canonical /services/... URL (About and Blog footers currently link to non-canonical /mutual-funds, /loan etc.).
- **Current title (72 characters):** Services - Mutual Funds, Insurance, Fixed Deposits & Loans | Stockstrail
- **Current description:** Explore our comprehensive financial services including Mutual Funds, Fixed Deposits, Insurance, and Loans. Expert guidance tailored to your needs.

#### 4. Let's Talk (Consultation)

- **URL:** https://www.stockstrail.in/lets-talk
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Navigational / Lead-gen
- **New title (57 characters):** `Contact Stockstrail | Book a Free Financial Planning Call`
- **New description (151 characters):** `Talk to Stockstrail about SIPs, insurance, FDs or loans. Book a free strategy call or message us on WhatsApp, Mon-Sat 9 AM-8 PM IST. No sales pressure.`
- **Primary keyword:** contact Stockstrail; free financial planning call
- **Secondary / long-tail keywords:** book financial consultation; Stockstrail phone WhatsApp; financial planner Himachal Pradesh
- **Why this change / implementation notes:** Navigational 'contact' intent + transactional CTA. Add ContactPage schema; keep name, address (Moien, Chintpurni, HP 177110), phone and hours identical to your Google Business Profile.
- **Current title (55 characters):** Let's Talk - Connect With Stockstrail Financial Experts
- **Current description:** Have questions or need assistance? Reach out to Stockstrail's financial experts today for guidance on mutual funds, insurance, and more.

### Services

#### 5. Mutual Funds Advisory

- **URL:** https://www.stockstrail.in/services/mutual-funds
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Commercial
- **New title (59 characters):** `Mutual Fund SIP & Lumpsum Investment in India | Stockstrail`
- **New description (155 characters):** `Start a mutual fund SIP or lumpsum with Stockstrail (AMFI ARN-284122). Compare equity, debt and hybrid funds, check your risk profile and book a free call.`
- **Primary keyword:** mutual fund investment India
- **Secondary / long-tail keywords:** SIP and lumpsum investment; equity debt hybrid funds; how to invest in mutual funds; mutual fund distributor
- **Why this change / implementation notes:** LIVE <title> renders 'Stockstrail | Stockstrail' (brand twice): fix the title template (F1). Dropped 'Best' (superlative; AMFI/SEBI advertising code) and 'Advisory'. Page links to the noindex /risk-profile in places: link /check-risk-profile instead.
- **Current title (72 characters):** Mutual Funds India: Best SIP & Lumpsum Investment Advisory | Stockstrail
- **Current description:** Start disciplined mutual fund investing with Stockstrail (AMFI ARN-284122). Compare SIP vs lumpsum options, equity and debt fund categories, and get personalized wealth guidance.

#### 6. Insurance Planning

- **URL:** https://www.stockstrail.in/services/insurance
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Commercial / Comparison
- **New title (54 characters):** `Compare Term & Health Insurance in India | Stockstrail`
- **New description (160 characters):** `Compare term life and health insurance in India: claim settlement ratio, cover amount, cashless hospitals and riders. Get a free policy review from Stockstrail.`
- **Primary keyword:** term insurance India
- **Secondary / long-tail keywords:** health insurance comparison; term vs health insurance; claim settlement ratio; critical illness rider
- **Why this change / implementation notes:** Removed '99%+ claim settlement' from meta: the figure varies by insurer and year; use it only if the page cites IRDAI data. Your AMFI ARN does not cover insurance: show your IRDAI licence / POSP / agency disclosure on this page (F8).
- **Current title (66 characters):** Term & Health Insurance in India: Plans & Comparison | Stockstrail
- **Current description:** Protect your family with top Term Life and Health Insurance plans in India. Compare 99%+ claim settlement ratios, cashless network hospitals, critical illness riders, and get expert advisory from Stockstrail.

#### 7. Fixed Deposits

- **URL:** https://www.stockstrail.in/services/fixed-deposit
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational + Commercial
- **New title (58 characters):** `Fixed Deposit Guide 2026: Types, Rates & Tax | Stockstrail`
- **New description (158 characters):** `Understand fixed deposits in India: bank vs corporate FDs, senior citizen rates, TDS, tax rules and FD laddering. Calculate returns, then talk to Stockstrail.`
- **Primary keyword:** fixed deposit guide
- **Secondary / long-tail keywords:** FD interest rates 2026; bank FD vs corporate FD; senior citizen FD; FD tax TDS; FD laddering
- **Why this change / implementation notes:** Year in title lifts CTR on rate queries: refresh every January. Rate claims differ across your pages (About: 'up to 7.5%'; SIP page: 'up to 9.1%'): make one dated, sourced figure (F12).
- **Current title (78 characters):** Fixed Deposit (FD) Guide 2026: Types, Interest Rates & Tax Rules | Stockstrail
- **Current description:** Complete guide to Fixed Deposits in India. Explore types of fixed deposits, Bank vs Corporate FD interest rates, senior citizen benefits, tax rules, and calculation.

#### 8. Loan Against Mutual Funds (LAMF)

- **URL:** https://www.stockstrail.in/services/loan
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Commercial
- **New title (60 characters):** `Loan Against Mutual Funds (LAMF) Rates & Apply | Stockstrail`
- **New description (156 characters):** `Borrow against your mutual funds without selling them. Check LAMF interest rates, loan-to-value, eligibility and how to apply with Stockstrail (ARN-284122).`
- **Primary keyword:** loan against mutual funds
- **Secondary / long-tail keywords:** LAMF interest rate; loan against mutual funds eligibility; LAMF vs personal loan; how to apply
- **Why this change / implementation notes:** Timely: RBI issued new LAMF rules on 13 Feb 2026 (₹1 crore cap effective July 2026): add a 'What changed in 2026' section. Meta avoids a fixed rate: market range is roughly 8-13% p.a. and your pages quote 9% (meta) and 9.5% (SIP page).
- **Current title (72 characters):** Loan Against Mutual Funds (LAMF) & Business Loans in India | Stockstrail
- **Current description:** Get instant Loan Against Mutual Funds (LAMF) without selling your investments. Compare low interest rates starting from 9%, zero foreclosure charges, and quick approval with Stockstrail.

#### 9. Financial Protection

- **URL:** https://www.stockstrail.in/services/financial-protection
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational + Commercial
- **New title (56 characters):** `Financial Protection Planning for Families | Stockstrail`
- **New description (154 characters):** `Build a family safety net: term and health insurance, emergency fund, motor and travel cover and tax-filing support. Start with a free Stockstrail review.`
- **Primary keyword:** financial protection plan
- **Secondary / long-tail keywords:** family financial protection; emergency fund planning; motor insurance; travel insurance; tax filing support
- **Why this change / implementation notes:** Overlaps with /services/insurance. Keep this as the umbrella page (emergency fund, motor/travel, tax filing) and cross-link both ways to avoid cannibalisation.
- **Current title (55 characters):** Financial Protection & Insurance Planning | Stockstrail
- **Current description:** Understand and plan your financial protection with Stockstrail. Explore insurance, emergency savings, motor and travel insurance, tax filing support and financial solutions based on your needs.

#### 10. Open Demat Account

- **URL:** https://www.stockstrail.in/services/open-demat
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Commercial / Transactional
- **New title (58 characters):** `Open Demat & Trading Account Online in India | Stockstrail`
- **New description (160 characters):** `Open a paperless Demat and trading account online with leading brokers. Learn the KYC steps, documents and charges, then get step-by-step help from Stockstrail.`
- **Primary keyword:** open demat account online
- **Secondary / long-tail keywords:** demat account documents; demat account charges; zero AMC demat account; trading account opening
- **Why this change / implementation notes:** 'Open demat account' head term is owned by brokers (Zerodha, Groww, Angel One): win with specifics (documents, charges, NRI/minor accounts, Himachal). Drop 'India's top brokers' (superlative). Disclose your partner/referral status with each broker (F8).
- **Current title (63 characters):** Open Demat Account - Start Stock Market Investing | Stockstrail
- **Current description:** Open a free Demat account with Stockstrail. Trade stocks, mutual funds, IPOs, and more with India's top brokers. Zero account opening charges, seamless KYC, and expert guidance.

### Calculators

#### 11. Calculators Hub

- **URL:** https://www.stockstrail.in/calculators
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Tool / Navigational
- **New title (60 characters):** `Free Financial Calculators: SIP, FD, EMI & Tax | Stockstrail`
- **New description (158 characters):** `Use Stockstrail's free calculators for SIP, lumpsum, FD, RD, loan EMI and income tax FY 2026-27. Instant results, no login. Plan goals with realistic numbers.`
- **Primary keyword:** financial calculators India
- **Secondary / long-tail keywords:** SIP lumpsum FD RD EMI tax calculator; free investment calculators
- **Why this change / implementation notes:** Removed 'institutional-grade' (unverifiable). Roadmap: SWP, PPF, NPS, retirement, goal and CAGR calculators are high-demand gaps (see Keyword Map).
- **Current title (69 characters):** Financial Calculators - SIP, Lumpsum, FD, RD, EMI & Tax | Stockstrail
- **Current description:** Free institutional-grade financial calculators for Indian investors. Calculate Mutual Fund SIP returns, Lumpsum wealth, Fixed Deposit interest, RD maturity, Loan EMI, and Income Tax liability.

#### 12. SIP Calculator

- **URL:** https://www.stockstrail.in/calculators/sip
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Tool
- **New title (59 characters):** `SIP Calculator with Step-Up: Estimate Returns | Stockstrail`
- **New description (157 characters):** `Free SIP calculator with step-up option. See how a monthly mutual fund SIP could grow with compounding, view the year-wise schedule and plan goals. No login.`
- **Primary keyword:** SIP calculator
- **Secondary / long-tail keywords:** step up SIP calculator; SIP return calculator; mutual fund SIP calculator; SIP calculator with inflation
- **Why this change / implementation notes:** LIVE <title> duplicates the brand ('| Stockstrail | Stockstrail'). Your page already has Step-Up, so 'step up SIP calculator' (strong mid-tail) is a legitimate target. Add an inflation-adjusted toggle to also capture 'SIP calculator with inflation'. Add WebApplication schema and an 'estimates, not guaranteed' note. 'SIP calculator' head term is dominated by Groww/ET Money/AMCs: win the long-tail first.
- **Current title (71 characters):** SIP Calculator - Calculate Mutual Fund SIP Returns Online | Stockstrail
- **Current description:** Estimate your Systematic Investment Plan (SIP) returns with Stockstrail's free SIP calculator. Plan your wealth creation with accurate compound interest projections.

#### 13. FD Calculator

- **URL:** https://www.stockstrail.in/calculators/fd
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Tool
- **New title (58 characters):** `FD Calculator: Calculate Maturity & Interest | Stockstrail`
- **New description (153 characters):** `Calculate FD maturity amount and interest with monthly, quarterly or yearly compounding. Compare bank and corporate FD returns instantly. Free, no login.`
- **Primary keyword:** FD calculator
- **Secondary / long-tail keywords:** fixed deposit calculator; FD maturity calculator; FD interest calculator; cumulative FD calculator
- **Why this change / implementation notes:** Confirm the calculator really offers monthly/quarterly/yearly compounding before shipping this description.
- **Current title (78 characters):** Fixed Deposit (FD) Calculator - Calculate FD Maturity & Interest | Stockstrail
- **Current description:** Calculate your Fixed Deposit (FD) interest earnings and maturity amount accurately with compounding options. Compare bank and corporate FD returns.

#### 14. Lumpsum Calculator

- **URL:** https://www.stockstrail.in/calculators/lumpsum
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Tool
- **New title (53 characters):** `Lumpsum Calculator: Mutual Fund Returns | Stockstrail`
- **New description (142 characters):** `Estimate the future value of a one-time mutual fund lumpsum investment. Enter amount, expected return and years to see growth. Free, no login.`
- **Primary keyword:** lumpsum calculator
- **Secondary / long-tail keywords:** lumpsum investment calculator; one time mutual fund calculator; SIP vs lumpsum calculator
- **Why this change / implementation notes:** Add a 'compare with SIP' panel: it targets the 'SIP vs lumpsum' cluster and links the two calculators.
- **Current title (73 characters):** Lumpsum Calculator - Calculate One-Time Mutual Fund Returns | Stockstrail
- **Current description:** Estimate the future value of your one-time lumpsum mutual fund investment with Stockstrail's free lumpsum return calculator.

#### 15. RD Calculator

- **URL:** https://www.stockstrail.in/calculators/rd
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Tool
- **New title (55 characters):** `RD Calculator: Recurring Deposit Maturity | Stockstrail`
- **New description (152 characters):** `Calculate recurring deposit (RD) maturity amount and interest earned on your monthly deposits. Plan savings goals with Stockstrail's free RD calculator.`
- **Primary keyword:** RD calculator
- **Secondary / long-tail keywords:** recurring deposit calculator; RD maturity calculator; RD interest calculator
- **Why this change / implementation notes:** Old meta said 'monthly compounding'; most Indian bank RDs compound quarterly. Check your calculator logic matches how banks actually compute.
- **Current title (78 characters):** Recurring Deposit (RD) Calculator - Calculate RD Maturity Online | Stockstrail
- **Current description:** Calculate your Recurring Deposit (RD) maturity amount and interest earned with monthly compounding using Stockstrail's RD calculator.

#### 16. Loan EMI Calculator

- **URL:** https://www.stockstrail.in/calculators/emi
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Tool
- **New title (60 characters):** `Loan EMI Calculator: Home, Car & Personal Loan | Stockstrail`
- **New description (152 characters):** `Calculate monthly loan EMI, total interest and the amortization schedule for home, car, personal and business loans. Free EMI calculator by Stockstrail.`
- **Primary keyword:** EMI calculator
- **Secondary / long-tail keywords:** loan EMI calculator; home loan EMI calculator; personal loan EMI; amortization schedule
- **Why this change / implementation notes:** Very high demand but dominated by banks and aggregators; pair with the learning lesson 'How EMI works' for long-tail traffic.
- **Current title (72 characters):** Loan EMI Calculator - Home, Car, Business & Personal Loans | Stockstrail
- **Current description:** Calculate your monthly loan EMI, total interest payable, and amortization schedule for home loans, business loans, and loans against mutual funds.

#### 17. Income Tax Calculator

- **URL:** https://www.stockstrail.in/calculators/tax
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Tool
- **New title (59 characters):** `Income Tax Calculator FY 2026-27 (Old vs New) | Stockstrail`
- **New description (158 characters):** `Compare old vs new tax regime for FY 2026-27 (AY 2027-28). Check slabs, standard deduction, 87A rebate and HRA exemption, and see which regime saves more tax.`
- **Primary keyword:** income tax calculator FY 2026-27
- **Secondary / long-tail keywords:** old vs new tax regime calculator; new tax regime slabs 2026-27; 87A rebate; HRA exemption calculator
- **Why this change / implementation notes:** Old meta cited Budget 2024/2025 slabs. Budget 2026 (1 Feb 2026) left slabs unchanged for FY 2026-27 and the new regime still makes income up to ₹12 lakh effectively tax-free via the 87A rebate. The Income-tax Act 2025 replaces the 1961 Act from 1 Apr 2026: many section numbers (87A, 80C) are being re-mapped, so verify before quoting them. Seasonal peak Jan-Jul.
- **Current title (76 characters):** Income Tax Calculator FY 2025-26 & 2026-27 - Old vs New Regime | Stockstrail
- **Current description:** Compare Old vs New Tax Regime under Budget 2024 and 2025 slabs. Calculate tax liability, 87A rebate, standard deduction, and HRA exemption.

### Market Tools

#### 18. NSE Holidays 2026

- **URL:** https://www.stockstrail.in/nse-holidays
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational (daily recurring)
- **New title (60 characters):** `NSE Holidays 2026: Is Share Market Open Today? | Stockstrail`
- **New description (150 characters):** `NSE and BSE holiday list 2026 with live market status: 15 trading holidays, Muhurat Trading on Sunday 8 Nov, MCX timings and upcoming market closures.`
- **Primary keyword:** NSE holidays 2026
- **Secondary / long-tail keywords:** is share market open today; stock market holidays 2026; muhurat trading 2026; MCX timings
- **Why this change / implementation notes:** Verified: 15 weekday trading holidays in 2026 (equity); Muhurat Trading is Sunday 8 Nov 2026 per NSE circular, timings to be announced. Seasonal: after 8 Nov change to 'NSE Holidays 2026 & 2027'; publish the 2027 list when NSE releases it (usually mid/late Dec). Remaining 2026 closures after today: 20 Oct, 10 Nov, 24 Nov, 25 Dec.
- **Current title (77 characters):** NSE Holidays 2026: Is Share Market Open Today? Holiday Calendar | Stockstrail
- **Current description:** Check if Indian stock market is open today. Complete NSE & BSE Holiday Calendar 2026 with 15 official trading closures, live market status, MCX timings, and Muhurat trading.

#### 19. BSE Holidays 2026

- **URL:** https://www.stockstrail.in/bse-holidays
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `BSE Holidays 2026: Stock Market Holiday List | Stockstrail`
- **New description (155 characters):** `Full BSE holiday list 2026 for equity, derivatives and commodity sessions, plus settlement holidays, upcoming closures and the Diwali Muhurat Trading date.`
- **Primary keyword:** BSE holidays 2026
- **Secondary / long-tail keywords:** BSE holiday list; Bombay Stock Exchange holidays 2026; settlement holidays 2026
- **Why this change / implementation notes:** Cross-link to /nse-holidays. NSE and BSE share the equity holiday calendar: add a one-line 'same as NSE' answer-first sentence for AI Overviews. Do not say 'Official' unless it is copied from the BSE circular.
- **Current title (83 characters):** BSE Holiday Calendar 2026: Bombay Stock Exchange Trading Holiday List | Stockstrail
- **Current description:** Official BSE Holiday List 2026. Explore Bombay Stock Exchange market holidays across Equities, Derivatives, Commodity split sessions, and settlement dates.

#### 20. Risk Profile Assessment

- **URL:** https://www.stockstrail.in/check-risk-profile
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Tool / Informational
- **New title (60 characters):** `Investor Risk Profile Test: Free 2-Minute Quiz | Stockstrail`
- **New description (151 characters):** `Take Stockstrail's free 11-question risk profile quiz. Find your risk tolerance and get an indicative equity-debt mix for your SIPs and fixed deposits.`
- **Primary keyword:** investor risk profile test
- **Secondary / long-tail keywords:** risk tolerance test; risk profile questionnaire mutual funds; what is my risk appetite
- **Why this change / implementation notes:** Removed 'SEBI-aligned' and 'recommendations': you are an AMFI distributor, not a SEBI-registered adviser. Keep 'indicative' wording and add a result-page disclaimer. Internal links elsewhere should point here, not to the noindex /risk-profile.
- **Current title (77 characters):** Free Risk Profile Assessment - Discover Your Investment Comfort | Stockstrail
- **Current description:** Take our free 2-minute SEBI-aligned 11-question risk profiling quiz. Calculate your risk tolerance score and get personalized asset allocation recommendations for mutual funds and fixed deposits.

### Blog

#### 21. Blog Home

- **URL:** https://www.stockstrail.in/blog
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (54 characters):** `Mutual Fund, SIP & Personal Finance Blog | Stockstrail`
- **New description (155 characters):** `Plain-English guides on mutual funds, SIPs, insurance, tax and SEBI rules for Indian investors, written by Stockstrail's AMFI-registered team (ARN-284122).`
- **Primary keyword:** mutual fund blog India
- **Secondary / long-tail keywords:** SIP guides; personal finance blog India; SEBI rules explained; investing for salaried
- **Why this change / implementation notes:** Live site serves an older blog title ('Financial Insights & Investment Strategies Blog | Stockstrail | Stockstrail'): confirm deployment, and fix the duplicate brand. Add category filters (Mutual Funds / Tax / Insurance / Markets) as crawlable URLs and a visible 'Start here: Mutual Funds Guide' pillar link.
- **Current title (63 characters):** Financial Insights, Mutual Funds & Wealth Journal | Stockstrail
- **Current description:** Certified financial analysis, SEBI regulations, mutual fund strategies, and salaried wealth management from AMFI Registered experts (ARN-284122).

### Blog Post

#### 22. #1 GST cut & Ayushman Bharat

- **URL:** https://www.stockstrail.in/blog/2025-best-time-family-health-government-benefits
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / News
- **New title (56 characters):** `Health Insurance GST Cut & Ayushman Bharat | Stockstrail`
- **New description (147 characters):** `How the 2025 GST reform and Ayushman Bharat expansion made health insurance cheaper for Indian families, and the steps to review or buy your cover.`
- **Primary keyword:** health insurance GST cut
- **Secondary / long-tail keywords:** Ayushman Bharat expansion; health insurance premium GST; family health cover India
- **Why this change / implementation notes:** Slug starts with '2025' and reads 'best-time...': it will look stale in 2027. Add 'Last updated' and refresh facts for 2026; consider a shorter slug with 301.
- **Current title (81 characters):** New Govt Health Benefits 2025: Ayushman Bharat & GST Cuts Explained | Stockstrail
- **Current description:** Learn how 2025's GST reforms and Ayushman Bharat expansion made health insurance cheaper and more accessible for Indian families and how to secure your cover today.

#### 23. #2 Lenskart IPO

- **URL:** https://www.stockstrail.in/blog/lenskart-ipo-investor-guide
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / News
- **New title (59 characters):** `Lenskart IPO: Risks & Takeaways for Investors | Stockstrail`
- **New description (159 characters):** `Lenskart's ₹7,278 crore IPO explained: what happened, valuation and other risks, and what retail investors should weigh now. Educational, not a recommendation.`
- **Primary keyword:** Lenskart IPO
- **Secondary / long-tail keywords:** Lenskart IPO review; Lenskart IPO risks; retail investor IPO guide
- **Why this change / implementation notes:** News-driven: traffic decays. Add a 'what happened after listing' update to keep it useful, and keep the 'not a recommendation' disclaimer (you are not a SEBI research analyst).
- **Current title (75 characters):** Lenskart IPO Explained: Should Investors Still Be Interested? | Stockstrail
- **Current description:** Lenskart's IPO made headlines with a ₹7,278 crore issue and a star-studded investor list. We break down what happened, the risks, and what it means for retail investors.

#### 24. #3 Small-cap correction

- **URL:** https://www.stockstrail.in/blog/small-cap-correction-real-portfolio-damage
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (60 characters):** `Small-Cap Correction Explained: Portfolio Risk | Stockstrail`
- **New description (154 characters):** `Small-cap stocks fell sharply while the Nifty 50 stayed near highs. Why the real damage is investor behaviour, and how to protect your portfolio and SIPs.`
- **Primary keyword:** small cap correction
- **Secondary / long-tail keywords:** small cap fall SIP; small cap mutual funds risk; Nifty vs small cap
- **Why this change / implementation notes:** Time-bound: add the date range of the correction in the first paragraph and a 'Last updated' stamp.
- **Current title (79 characters):** Small Cap Correction Explained: The Hidden Risk to Your Portfolio | Stockstrail
- **Current description:** Small-cap stocks fell sharply while Nifty 50 stayed near highs. Here's why the real damage from this correction isn't in the index — it's in undisciplined investor behaviour.

#### 25. #4 Mutual fund FAQs

- **URL:** https://www.stockstrail.in/blog/final-answers-mutual-fund-faqs-25-beginner-questions-answered-stockstrail
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational (AEO magnet)
- **New title (54 characters):** `Mutual Fund FAQs: 25+ Beginner Questions | Stockstrail`
- **New description (155 characters):** `Can you lose money in mutual funds? What is NAV? Direct or Regular plan? Clear answers to 25+ beginner mutual fund questions from Stockstrail (ARN-284122).`
- **Primary keyword:** mutual fund FAQs
- **Secondary / long-tail keywords:** mutual fund questions for beginners; can you lose money in mutual funds; what is NAV
- **Why this change / implementation notes:** Best AEO candidate on the site: each Q&A should open with a 40-60 word direct answer. The slug ('final-answers-...-stockstrail') and the on-page title ('Final Answers...') are weak: rename to 'Mutual Fund FAQs' and 301 the slug.
- **Current title (65 characters):** Mutual Fund FAQs: 25+ Beginners Questions Answered by Stockstrail
- **Current description:** Can you lose money in mutual funds? What is NAV? Should you choose Direct or Regular plans? Stockstrail answers every beginner's mutual fund question in one place.

#### 26. #5 Types of mutual funds (Ch.4)

- **URL:** https://www.stockstrail.in/blog/types-of-mutual-funds-in-india-explained-2026-guide-stockstrail
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (57 characters):** `Types of Mutual Funds in India (2026 Guide) | Stockstrail`
- **New description (142 characters):** `Understand equity, debt, hybrid, index, ELSS and sectoral mutual funds in plain English: how each type works, its risk level and who it suits.`
- **Primary keyword:** types of mutual funds in India
- **Secondary / long-tail keywords:** equity debt hybrid funds; ELSS; index funds; sectoral funds explained
- **Why this change / implementation notes:** URGENT: the current <title> is a raw slug ('Stockstrail-Mutual-Funds-Chapter-4'). This is a high-volume topic: also link it from /services/mutual-funds.
- **Current title (48 characters):** Stockstrail-Mutual-Funds-Chapter-4 | Stockstrail
- **Current description:** Confused by the types of mutual funds in India? Stockstrail breaks down equity, debt, hybrid, index, ELSS and sectoral funds in simple, plain-English terms.

#### 27. #6 India VIX

- **URL:** https://www.stockstrail.in/blog/what-is-india-vix-why-stockstrail-track-it-every-single-day
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (53 characters):** `What Is India VIX? How Investors Use It | Stockstrail`
- **New description (151 characters):** `India VIX measures expected market volatility. Learn how to read it, common mistakes to avoid, and how it can guide your SIP and mutual fund decisions.`
- **Primary keyword:** what is India VIX
- **Secondary / long-tail keywords:** India VIX meaning; VIX today; India VIX and SIP; market volatility index
- **Why this change / implementation notes:** Slug contains 'why-stockstrail-track-it-every-single-day' (brand stuffing, 41 characters). Shorten to /blog/what-is-india-vix with 301. A live VIX value widget would add repeat traffic.
- **Current title (53 characters):** What is India VIX? Why Traders Track It | Stockstrail
- **Current description:** Learn what India VIX means, why traders track it daily, common mistakes to avoid, and how Stockstrail uses it to guide mutual fund and SIP investments.

#### 28. #7 Term vs life insurance

- **URL:** https://www.stockstrail.in/blog/term-insurance-vs-life-insurance-india-2026-which-one-truly-protects-your-family-stockstrail
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / Commercial
- **New title (52 characters):** `Term vs Life Insurance in India (2026) | Stockstrail`
- **New description (155 characters):** `Term insurance or life insurance: which protects your family better? Compare premium, cover, tax rules and claim settlement ratio, then book a free review.`
- **Primary keyword:** term insurance vs life insurance
- **Secondary / long-tail keywords:** term vs endowment; term vs ULIP; best term insurance salaried; claim settlement ratio
- **Why this change / implementation notes:** Old title was 85+ chars and truncated in Google. High-volume comparison: use a comparison table (answer-first) so AI Overviews can lift it. Slug is 90+ chars: shorten with 301.
- **Current title (94 characters):** Term Insurance vs Life Insurance India 2026: Which One Truly Protects Your Family? Stockstrail
- **Current description:** Term insurance or life insurance — which actually protects your family in 2026? Compare premiums, cover, tax rules & CSR data, then book a free advisor call.

#### 29. #8 Are mutual funds safe (Ch.3)

- **URL:** https://www.stockstrail.in/blog/chapter3-are-mutual-funds-safe-understanding-mutual-fund-risk-in-india
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (55 characters):** `Are Mutual Funds Safe in India? Key Risks | Stockstrail`
- **New description (152 characters):** `Are mutual funds safe? Learn about market risk and volatility in Indian mutual funds, and how to manage them without fear or panic. Plain-English guide.`
- **Primary keyword:** are mutual funds safe
- **Secondary / long-tail keywords:** mutual fund risk India; can you lose money in mutual funds; market risk; volatility
- **Why this change / implementation notes:** Strong question-style keyword. Open the article with a 2-sentence direct answer, then the detail.
- **Current title (72 characters):** Are Mutual Funds Safe in India? Mutual Fund Risk Explained | Stockstrail
- **Current description:** Are mutual funds safe? Stockstrail explains market risk, volatility, and how to manage mutual fund risk in India without fear or panic.

#### 30. #9 20 mistakes (Ch.9)

- **URL:** https://www.stockstrail.in/blog/chapter-9-20-biggest-mutual-fund-mistakes-investors-make-stockstrail
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (54 characters):** `20 Biggest Mutual Fund Mistakes to Avoid | Stockstrail`
- **New description (146 characters):** `Most investors don't fail because of bad funds, they fail because of behaviour. See the 20 biggest mutual fund mistakes and how to avoid each one.`
- **Primary keyword:** mutual fund mistakes
- **Secondary / long-tail keywords:** common mutual fund mistakes; SIP mistakes; investing mistakes India
- **Why this change / implementation notes:** Remove 'Chapter 9' from the on-page title: chapter numbers do not help searchers. Keep the series via a pillar page (F14).
- **Current title (60 characters):** 20 Biggest Mutual Fund Mistakes Investors Make | Stockstrail
- **Current description:** Most mutual fund investors don't fail because of bad funds — they fail because of behaviour. Stockstrail lists the 20 biggest mistakes and how to avoid them.

#### 31. #10 Returns (Ch.7)

- **URL:** https://www.stockstrail.in/blog/chapter-7-how-much-return-can-you-expect-from-mutual-funds-stockstrail
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (51 characters):** `How Much Return Do Mutual Funds Give? | Stockstrail`
- **New description (146 characters):** `Mutual funds can't guarantee returns. Learn what is realistic, how compounding and market cycles work, and why time in the market beats timing it.`
- **Primary keyword:** mutual fund returns
- **Secondary / long-tail keywords:** average return mutual funds India; SIP return expectation; realistic mutual fund returns
- **Why this change / implementation notes:** Never publish a return % in meta without a dated source and a disclaimer: keep it qualitative. Link to /calculators/sip.
- **Current title (63 characters):** How Much Return Can You Expect From Mutual Funds? | Stockstrail
- **Current description:** Mutual funds don't guarantee returns — so what can you realistically expect? Stockstrail explains compounding, market cycles, and long-term wealth creation.

#### 32. #11 How MFs work (Ch.2)

- **URL:** https://www.stockstrail.in/blog/chapter-2-how-mutual-funds-actually-work-in-india-a-behind-the-scenes-guide
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (57 characters):** `How Mutual Funds Work in India: NAV & Units | Stockstrail`
- **New description (131 characters):** `See how mutual funds work behind the scenes in India: fund managers, NAV, units and regulation, explained simply for new investors.`
- **Primary keyword:** how mutual funds work
- **Secondary / long-tail keywords:** what is NAV; mutual fund units; fund manager role; mutual fund regulation SEBI
- **Why this change / implementation notes:** Pair with the learning lesson 'What is a mutual fund' via a 'Free course' link to build the cluster.
- **Current title (75 characters):** How Mutual Funds Work in India | NAV, Fund Managers Explained | Stockstrail
- **Current description:** Curious how mutual funds work behind the scenes? Stockstrail explains fund managers, NAV, units, and regulation in simple terms for Indian investors.

#### 33. #12 How to invest (Ch.1)

- **URL:** https://www.stockstrail.in/blog/how-to-invest-in-mutual-funds-in-india-the-complete-beginner-s-guide-2026
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / Commercial
- **New title (59 characters):** `How to Invest in Mutual Funds in India (2026) | Stockstrail`
- **New description (150 characters):** `New to investing? Learn how to start investing in mutual funds in India in 2026: KYC, choosing a fund, SIP or lumpsum, and avoiding beginner mistakes.`
- **Primary keyword:** how to invest in mutual funds
- **Secondary / long-tail keywords:** start mutual fund investing; mutual fund KYC; SIP for beginners; mutual funds for beginners India
- **Why this change / implementation notes:** Highest-volume blog topic you own. Make this the flagship of the pillar page and link to /services/mutual-funds with a clear CTA. Slug has 'beginner-s' (stray hyphen).
- **Current title (78 characters):** How to Invest in Mutual Funds in India (2026) | Beginner's Guide | Stockstrail
- **Current description:** New to investing? Learn how to invest in mutual funds in India with this beginner-friendly 2026 guide by Stockstrail — simple, practical, and jargon-free.

#### 34. #13 Choose a fund (Ch.6)

- **URL:** https://www.stockstrail.in/blog/chapter-6-how-to-choose-the-right-mutual-fund-in-india-2026-guide-stockstrail
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (56 characters):** `How to Choose a Mutual Fund: 10-Step Guide | Stockstrail`
- **New description (148 characters):** `Overwhelmed by thousands of mutual funds? Use Stockstrail's 10-step framework to choose a fund by goals, risk and horizon, not hype or past returns.`
- **Primary keyword:** how to choose a mutual fund
- **Secondary / long-tail keywords:** best way to select mutual fund; mutual fund selection criteria; choose SIP fund
- **Why this change / implementation notes:** Numbered framework = good featured-snippet / AI Overview format: keep the 10 steps as an <ol> with short bold step names.
- **Current title (71 characters):** How to Choose the Right Mutual Fund in India (2026 Guide) | Stockstrail
- **Current description:** Overwhelmed by thousands of mutual fund options? Stockstrail's 10-step framework shows you how to choose the right mutual fund based on your goals, not hype.

#### 35. #14 MF taxation (Ch.8)

- **URL:** https://www.stockstrail.in/blog/chapter-8-mutual-fund-taxation-in-india-2026-explained-simply-stockstrail
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Mutual Fund Tax in India (2026): LTCG & STCG | Stockstrail`
- **New description (136 characters):** `How are mutual funds taxed in India in 2026? Capital gains, holding periods, SIP taxation and dividend tax, explained in plain language.`
- **Primary keyword:** mutual fund taxation India
- **Secondary / long-tail keywords:** LTCG STCG mutual funds; equity fund tax; debt fund tax; SIP taxation; mutual fund dividend tax
- **Why this change / implementation notes:** YMYL + changes often: add 'Last reviewed' date, cite the Income Tax Department/Finance Act, and re-check after each Budget and after the Income-tax Act 2025 transition.
- **Current title (67 characters):** Mutual Fund Taxation in India (2026) Explained Simply | Stockstrail
- **Current description:** How are mutual funds taxed in India? Stockstrail breaks down capital gains, holding periods, SIP taxation, and dividend taxation in plain language.

#### 36. #15 SIP for HP salaried

- **URL:** https://www.stockstrail.in/blog/the-financial-story-of-himachal-pradesh-s-emplyoee
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / Local
- **New title (57 characters):** `SIP for Salaried People in Himachal Pradesh | Stockstrail`
- **New description (151 characters):** `How much SIP should a salaried person in Himachal Pradesh start? District-wise guide to all 12 districts with income-based SIP tables and real numbers.`
- **Primary keyword:** SIP for salaried in Himachal Pradesh
- **Secondary / long-tail keywords:** how much SIP to start; SIP amount by salary; Himachal Pradesh financial planning; HP government employee SIP
- **Why this change / implementation notes:** Your best local-SEO asset (low competition). FIX NOW: the slug has a typo ('emplyoee') and the blog-list headline reads 'Emplyoee': new slug /blog/sip-for-salaried-himachal-pradesh + 301. Create a national version ('how much SIP by salary') to capture non-HP traffic.
- **Current title (91 characters):** How Much SIP Should a Salaried Person in Himachal Pradesh Start? (2026 Guide) | Stockstrail
- **Current description:** Wondering how much SIP to start on a salaried income in Himachal Pradesh? A district-wise guide to all 12 districts, income-based SIP tables, and real numbers from Stockstrail.

#### 37. #16 SIP vs lump sum (Ch.5)

- **URL:** https://www.stockstrail.in/blog/chapter-5-sip-vs-lump-sum-which-investment-method-is-right-for-you-stockstrail
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / Comparison
- **New title (54 characters):** `SIP vs Lumpsum: Which Is Better for You? | Stockstrail`
- **New description (151 characters):** `SIP or lumpsum: which builds more wealth? See the real difference with examples, when each works best, and how to pick the right method for your goals.`
- **Primary keyword:** SIP vs lumpsum
- **Secondary / long-tail keywords:** SIP or lump sum which is better; lumpsum vs SIP returns; SIP vs lumpsum calculator
- **Why this change / implementation notes:** Spelling: use 'lumpsum' consistently (matches your calculator and the dominant search spelling). Embed the lumpsum + SIP calculators. Consolidate with the learning lesson (point the lesson's canonical or link clearly) to avoid two pages competing.
- **Current title (72 characters):** SIP vs Lump Sum: Which Investment Method Is Right for You? | Stockstrail
- **Current description:** SIP or lump sum which one builds more wealth? Stockstrail breaks down the real difference, with examples, so you can pick the right approach for your goals.

#### 38. #17 IT layoffs money plan

- **URL:** https://www.stockstrail.in/blog/indian-it-earnings-week-2026-ai-pressure-layoffs-fresher-hiring-and-what-investors-should-do-stockstrail-indian-it-layoffs-vs-fresher-hiring-smart-money-plan-for-2026
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / News
- **New title (50 characters):** `IT Layoffs 2026: A 5-Step Money Plan | Stockstrail`
- **New description (155 characters):** `IT earnings season brings layoff and fresher-hiring headlines. See what they mean for your SIP, FD and emergency fund, with a 5-step plan from Stockstrail.`
- **Primary keyword:** IT layoffs money plan
- **Secondary / long-tail keywords:** IT layoffs SIP emergency fund; fresher hiring 2026; what to do if laid off finances
- **Why this change / implementation notes:** Old description said 'TCS reports on 8 Oct' (yesterday): already stale, so the new one is evergreen. Slug is 166 characters (keyword-stuffed + duplicated): replace with /blog/it-layoffs-money-plan-2026 and 301.
- **Current title (66 characters):** Indian IT Layoffs vs Fresher Hiring: Money Plan 2026 | Stockstrail
- **Current description:** TCS reports on 8 Oct. See what IT layoffs and fresher hiring mean for your SIP, FD and emergency fund, with a 5-step plan from Stockstrail (ARN-284122).

#### 39. #18 SEBI nomination rule

- **URL:** https://www.stockstrail.in/blog/sebi-mutual-fund-nomination-rule-september-2026
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / News (YMYL)
- **New title (55 characters):** `SEBI Nomination Rules 2026: Add a Nominee | Stockstrail`
- **New description (156 characters):** `SEBI's revised nomination rules for mutual fund folios and demat accounts are now in effect (from 1 Sept 2026). See what changed, who must nominate and how.`
- **Primary keyword:** SEBI nomination rules 2026
- **Secondary / long-tail keywords:** mutual fund nominee add online; demat nomination; opt out of nomination; nomination deadline
- **Why this change / implementation notes:** STALE: the old title says 'Before September 1' but it is now 9 Oct 2026: past-deadline wording hurts trust and CTR. Rewrite the page as a 'how to add a nominee now' guide and re-verify every detail against the SEBI circular before publishing.
- **Current title (97 characters):** SEBI Mutual Fund Nomination Rule 2026: What Investors Must Check Before September 1 | Stockstrail
- **Current description:** SEBI's revised nomination rules for mutual fund folios and demat accounts take effect September 1, 2026. Learn what changes, who needs to nominate, how to opt out, and what existing investors should check.

#### 40. #19 Market down guide

- **URL:** https://www.stockstrail.in/blog/why-is-the-market-down-a-salaried-employee-s-action-guide
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / News
- **New title (57 characters):** `Market Down? 5 Steps for Salaried Investors | Stockstrail`
- **New description (150 characters):** `Markets have fallen for weeks. Here is why, and 5 practical steps every salaried professional should take, from SIPs to emergency funds and insurance.`
- **Primary keyword:** why is the market down
- **Secondary / long-tail keywords:** market crash what to do; should I stop SIP when market falls; salaried investor guide
- **Why this change / implementation notes:** Old title ended mid-phrase ('...Action'). Time-sensitive wording ('fallen for weeks'): add the date and a 'Last updated' stamp, or reword once the market recovers.
- **Current title (66 characters):** Why Is the Market Down? A Salaried Employee's Action | Stockstrail
- **Current description:** Markets have fallen for weeks. Here's why, plus 5 practical steps every salaried professional should take — from SIPs to insurance. Read the full guide.

### Legal & Trust

#### 41. Editorial Policy

- **URL:** https://www.stockstrail.in/editorial-policy
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Trust
- **New title (56 characters):** `Editorial Policy & Fact-Checking Standards | Stockstrail`
- **New description (156 characters):** `How Stockstrail researches, writes and fact-checks financial content: sources, review process, AMFI and SEBI compliance standards and how we correct errors.`
- **Primary keyword:** Stockstrail editorial policy
- **Secondary / long-tail keywords:** fact-checking standards; financial content review process; corrections policy
- **Why this change / implementation notes:** Title was already good. Description rewritten for people, not jargon ('E-E-A-T', 'financial intelligence'). Link to this page from every article footer/byline.
- **Current title (56 characters):** Editorial Policy & Fact-Checking Standards | Stockstrail
- **Current description:** Stockstrail editorial policy, E-E-A-T research methodology, AMFI & SEBI compliance standards, and fact-checking principles for financial intelligence.

#### 42. Terms & Conditions

- **URL:** https://www.stockstrail.in/terms-and-conditions
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Navigational / Legal
- **New title (56 characters):** `Terms & Conditions and Cancellation Policy | Stockstrail`
- **New description (139 characters):** `Read Stockstrail's terms of use and cancellation policy covering mutual funds, fixed deposits, insurance, loans and Demat account services.`
- **Primary keyword:** Stockstrail terms and conditions
- **Secondary / long-tail keywords:** cancellation policy; terms of use
- **Why this change / implementation notes:** Low SEO value: keep indexable for trust (YMYL sites are expected to show legal pages). Fix the stray 'Terms of Service' vs 'Terms & Conditions' naming used elsewhere on the site.
- **Current title (56 characters):** Terms and Conditions & Cancellation Policy | Stockstrail
- **Current description:** Read Stockstrail's Terms and Conditions and Cancellation Policy for all financial services including mutual funds, fixed deposits, insurance, loans, and demat accounts.

#### 43. Commission Disclosure

- **URL:** https://www.stockstrail.in/commission-disclosure
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Trust (E-E-A-T)
- **New title (50 characters):** `Commission Disclosure: How Stockstrail Earns Money`
- **New description (153 characters):** `Transparent disclosure of the commissions Stockstrail (ARN-284122) earns from mutual fund AMCs and partners, how they are paid and what it means for you.`
- **Primary keyword:** Stockstrail commission disclosure
- **Secondary / long-tail keywords:** how mutual fund distributors earn; ARN-284122 commission; trail commission
- **Why this change / implementation notes:** Old title repeated the brand ('Stockstrail Commission Disclosure | Stockstrail'). New title already contains the brand, so set it as an absolute title with no template suffix. Remove 'zero hidden fees' (absolute claim); say 'all commissions are disclosed here'.
- **Current title (47 characters):** Stockstrail Commission Disclosure | Stockstrail
- **Current description:** Transparent disclosure of Stockstrail's Mutual Funds distribution and brokerage earnings. We believe in complete transparency with zero hidden fees.

### Account & Admin

#### 44. User Sign-In

- **URL:** https://www.stockstrail.in/sign-in
- **Priority:** P1
- **Indexing:** noindex, nofollow
- **Search intent:** Navigational (account)
- **New title (21 characters):** `Sign In | Stockstrail`
- **New description (85 characters):** `Sign in to your Stockstrail account to view your risk profile and investment history.`
- **Primary keyword:** -
- **Secondary / long-tail keywords:** -
- **Why this change / implementation notes:** Currently index,follow and inheriting the home-page description (duplicate content). Set robots to noindex,nofollow and remove from the sitemap (F3).
- **Current title (43 characters):** Sign In | Stockstrail (Inherited from Root)
- **Current description:** Achieve financial independence with expert financial planning, mutual funds SIP, fixed deposits, insurance, and loan guidance from Stockstrail (AMFI ARN-284122).

#### 45. Complete Profile

- **URL:** https://www.stockstrail.in/complete-profile
- **Priority:** P1
- **Indexing:** noindex, nofollow
- **Search intent:** Navigational (account)
- **New title (35 characters):** `Complete Your Profile | Stockstrail`
- **New description (101 characters):** `Complete your Stockstrail profile to save your risk assessment and get a personalised financial plan.`
- **Primary keyword:** -
- **Secondary / long-tail keywords:** -
- **Why this change / implementation notes:** Gated page marked index,follow: set noindex,nofollow (F3).
- **Current title (52 characters):** Complete Profile | Stockstrail (Inherited from Root)
- **Current description:** Achieve financial independence with expert financial planning, mutual funds SIP, fixed deposits, insurance, and loan guidance from Stockstrail.

#### 46. Risk Questionnaire

- **URL:** https://www.stockstrail.in/risk-profile
- **Priority:** P2
- **Indexing:** noindex, nofollow
- **Search intent:** Tool (landing is /check-risk-profile)
- **New title (42 characters):** `Risk Profiling Questionnaire | Stockstrail`
- **New description (112 characters):** `Answer 11 questions to find your risk tolerance and investment horizon and get an indicative allocation profile.`
- **Primary keyword:** -
- **Secondary / long-tail keywords:** -
- **Why this change / implementation notes:** Keep noindex. But several indexable pages link here: point those links to /check-risk-profile so link equity goes to the indexable page.
- **Current title (42 characters):** Risk Profiling Questionnaire | Stockstrail
- **Current description:** Answer 11 questions to determine your risk tolerance, investment horizon, and get an indicative allocation profile aligned with Stockstrail's methodology.

#### 47. User Dashboard

- **URL:** https://www.stockstrail.in/dashboard
- **Priority:** P3
- **Indexing:** noindex, nofollow
- **Search intent:** Account
- **New title (23 characters):** `Dashboard | Stockstrail`
- **New description (46 characters):** `View your risk profile and investment history.`
- **Primary keyword:** -
- **Secondary / long-tail keywords:** -
- **Why this change / implementation notes:** Already noindex. No change needed.
- **Current title (23 characters):** Dashboard | Stockstrail
- **Current description:** View your risk profile and investment history

#### 48. Admin Sign-In

- **URL:** https://www.stockstrail.in/admin/sign-in
- **Priority:** P3
- **Indexing:** noindex, nofollow
- **Search intent:** Admin
- **New title (27 characters):** `Admin Sign In | Stockstrail`
- **New description (33 characters):** `Stockstrail administration login.`
- **Primary keyword:** -
- **Secondary / long-tail keywords:** -
- **Why this change / implementation notes:** Already noindex. Also disallow /admin/ in robots.txt (note: robots.txt does not secure it).
- **Current title (27 characters):** Admin Sign In | Stockstrail
- **Current description:** Stockstrail Administration Login

#### 49. Admin Dashboard

- **URL:** https://www.stockstrail.in/admin/dashboard
- **Priority:** P3
- **Indexing:** noindex, nofollow
- **Search intent:** Admin
- **New title (29 characters):** `Admin Dashboard | Stockstrail`
- **New description (39 characters):** `Admin panel for managing risk profiles.`
- **Primary keyword:** -
- **Secondary / long-tail keywords:** -
- **Why this change / implementation notes:** Already noindex. No change needed.
- **Current title (29 characters):** Admin Dashboard | Stockstrail
- **Current description:** Admin panel for managing risk profiles

## 4. Metadata: learning subdomain (learning.stockstrail.in), 52 pages

Same rules as Section 3. Lesson titles now lead with the search query instead of a label, and the 'Stockstrail' brand closes each title.

### Learning Hub

#### 1. Learning Home

- **URL:** https://learning.stockstrail.in
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (60 characters):** `Stockstrail Learning: Free Investing & Finance Courses India`
- **New description (153 characters):** `Free, structured courses on mutual funds, SIP, insurance, tax saving, stock market and retirement for Indian investors. No login, no ads, no sales pitch.`
- **Primary keyword:** free finance courses India
- **Secondary / long-tail keywords:** learn mutual funds free; investing course for beginners; personal finance course India
- **Why this change / implementation notes:** Remove 'SEBI-aware' (vague). Home must link to every course with descriptive anchors. Add Organization schema (publisher = Stockstrail) so the subdomain inherits brand entity; consider moving under stockstrail.in/learn long-term (F21).
- **Current title (74 characters):** Stockstrail Learning — Free Investing & Personal Finance Courses for India
- **Current description:** Free structured courses on mutual funds, SIP, insurance, tax saving, stock market, and retirement planning — built for Indian investors. No login, no ads, SEBI-aware content.

#### 2. About Learning Hub

- **URL:** https://learning.stockstrail.in/about
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Navigational / Trust
- **New title (57 characters):** `About Stockstrail Learning | Free Finance Education India`
- **New description (157 characters):** `Stockstrail Learning is a free finance education hub for Indian investors: mutual funds, SIPs, tax saving and risk profiling without jargon or sales pitches.`
- **Primary keyword:** Stockstrail Learning
- **Secondary / long-tail keywords:** free financial education India; who runs Stockstrail Learning
- **Why this change / implementation notes:** Name the author/reviewer (Vikrant Bhardwaj, ARN-284122, NISM V-A) on this page: it is the trust page for the subdomain.
- **Current title (78 characters):** About Stockstrail Learning — Free Financial Education Hub for Indian Investors
- **Current description:** Discover Stockstrail Learning — a 100% free, structured financial education hub for Indian retail investors. Learn about Mutual Funds, SIPs, Tax Saving, Risk Profiling, and Personal Finance without jargon or sales pitches.

#### 3. Categories Directory

- **URL:** https://learning.stockstrail.in/categories
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Navigational
- **New title (59 characters):** `Finance Topics & Courses: Browse All | Stockstrail Learning`
- **New description (151 characters):** `Browse finance topics on Stockstrail Learning: mutual funds, SIP, insurance, stock market, demat, tax saving, loans, retirement and financial planning.`
- **Primary keyword:** finance topics to learn
- **Secondary / long-tail keywords:** personal finance topics; investing categories
- **Why this change / implementation notes:** Old title/description were too thin to rank or earn clicks.
- **Current title (33 characters):** Categories — Stockstrail Learning
- **Current description:** Browse finance topics — mutual funds, SIP, insurance, stocks, tax, retirement and more.

#### 4. Courses Directory

- **URL:** https://learning.stockstrail.in/courses
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Navigational / Informational
- **New title (56 characters):** `All Free Finance Courses in India | Stockstrail Learning`
- **New description (147 characters):** `Browse all 12 free finance courses: mutual funds, SIP, insurance, tax saving, retirement and more. Filter by difficulty, category and reading time.`
- **Primary keyword:** free finance courses
- **Secondary / long-tail keywords:** online investing courses India; beginner finance course; free mutual fund course
- **Why this change / implementation notes:** '12' must be kept in sync with the catalogue: render it from the database (avoid hard-coding).
- **Current title (34 characters):** All Courses — Stockstrail Learning
- **Current description:** Browse every finance course on Stockstrail Learning. Filter by difficulty, category and reading time.

### Learning Category

#### 5. personal-finance-basics

- **URL:** https://learning.stockstrail.in/categories/personal-finance-basics
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (51 characters):** `Personal Finance Basics: Free Courses | Stockstrail`
- **New description (147 characters):** `Learn to manage daily money, budget well, get out of debt and choose the right insurance for your family with free personal finance basics courses.`
- **Primary keyword:** personal finance basics
- **Secondary / long-tail keywords:** budgeting course; get out of debt; insurance basics
- **Why this change / implementation notes:** DUPLICATE of /categories/personal-finance (near-identical topic). Merge into one category and 301 the other (F10).
- **Current title (54 characters):** Personal Finance Basics Courses — Stockstrail Learning
- **Current description:** Learn how to manage your daily money, budget effectively, get out of debt, and buy the right insurance protection for you and your family.

#### 6. mutual-funds

- **URL:** https://learning.stockstrail.in/categories/mutual-funds
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (54 characters):** `Mutual Fund Courses for Beginners (Free) | Stockstrail`
- **New description (135 characters):** `Free mutual fund courses and lessons: what mutual funds are, NAV, expense ratios, direct vs regular plans, SIP vs lumpsum and taxation.`
- **Primary keyword:** mutual fund course
- **Secondary / long-tail keywords:** learn mutual funds; mutual funds for beginners; NAV expense ratio
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (43 characters):** Mutual Funds Courses — Stockstrail Learning
- **Current description:** Pooled investments, NAV, expense ratios and more.

#### 7. sip

- **URL:** https://learning.stockstrail.in/categories/sip
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (53 characters):** `SIP Courses: Learn Systematic Investing | Stockstrail`
- **New description (131 characters):** `Learn how SIPs work with free lessons on rupee cost averaging, step-up SIPs, compounding and common SIP myths for Indian investors.`
- **Primary keyword:** SIP course
- **Secondary / long-tail keywords:** learn SIP; systematic investment plan basics
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (34 characters):** SIP Courses — Stockstrail Learning
- **Current description:** Systematic Investment Plans and disciplined investing.

#### 8. swp

- **URL:** https://learning.stockstrail.in/categories/swp
- **Priority:** P3
- **Indexing:** noindex, nofollow
- **Search intent:** Informational / Hub
- **New title (54 characters):** `SWP Courses: Systematic Withdrawal Plans | Stockstrail`
- **New description (130 characters):** `Learn how a Systematic Withdrawal Plan (SWP) can create regular income from your mutual fund investments, and when it makes sense.`
- **Primary keyword:** SWP mutual fund
- **Secondary / long-tail keywords:** systematic withdrawal plan; SWP vs SIP; SWP for retirement income
- **Why this change / implementation notes:** No course currently sits in this category (thin page): set noindex until an SWP course exists. SWP calculator + course is a good high-demand pair.
- **Current title (34 characters):** SWP Courses — Stockstrail Learning
- **Current description:** Systematic Withdrawal Plans for cashflow.

#### 9. insurance

- **URL:** https://learning.stockstrail.in/categories/insurance
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (52 characters):** `Insurance Courses: Term, Health & More | Stockstrail`
- **New description (148 characters):** `Free insurance courses for Indian families: term vs traditional plans, health insurance riders, claim settlement ratios and how much cover you need.`
- **Primary keyword:** insurance course
- **Secondary / long-tail keywords:** learn term insurance; health insurance basics; claim settlement ratio
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (40 characters):** Insurance Courses — Stockstrail Learning
- **Current description:** Protect your family and your wealth.

#### 10. stock-market

- **URL:** https://learning.stockstrail.in/categories/stock-market
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (48 characters):** `Stock Market Courses for Beginners | Stockstrail`
- **New description (127 characters):** `Learn how the stock market works with free beginner courses on shares, Sensex and Nifty, market cycles and long-term investing.`
- **Primary keyword:** stock market course
- **Secondary / long-tail keywords:** stock market for beginners; Sensex Nifty basics
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (43 characters):** Stock Market Courses — Stockstrail Learning
- **Current description:** Equities, indices, and how markets work.

#### 11. demat

- **URL:** https://learning.stockstrail.in/categories/demat
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (54 characters):** `Demat Account Courses: Open & Use Safely | Stockstrail`
- **New description (140 characters):** `Free lessons on how to open, use and secure a Demat and trading account in India, with NSDL and CDSL depositories explained in simple steps.`
- **Primary keyword:** demat account guide
- **Secondary / long-tail keywords:** how to open demat account; NSDL CDSL
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (45 characters):** Demat Accounts Courses — Stockstrail Learning
- **Current description:** Open, use and secure a demat account.

#### 12. personal-finance

- **URL:** https://learning.stockstrail.in/categories/personal-finance
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (58 characters):** `Personal Finance Courses: Budgeting & Saving | Stockstrail`
- **New description (125 characters):** `Free personal finance courses on budgeting, saving and healthy money habits, including the 50/30/20 rule and emergency funds.`
- **Primary keyword:** personal finance course
- **Secondary / long-tail keywords:** budgeting course; money habits; 50/30/20 rule
- **Why this change / implementation notes:** Merge with personal-finance-basics (see above) and keep this as the single canonical category.
- **Current title (47 characters):** Personal Finance Courses — Stockstrail Learning
- **Current description:** Budgeting, saving, and money habits.

#### 13. tax-saving

- **URL:** https://learning.stockstrail.in/categories/tax-saving
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (49 characters):** `Tax Saving Courses: 80C, ELSS & NPS | Stockstrail`
- **New description (136 characters):** `Free tax saving courses for Indian taxpayers: Section 80C, ELSS, NPS, health deductions and choosing between the old and new tax regime.`
- **Primary keyword:** tax saving course
- **Secondary / long-tail keywords:** 80C ELSS NPS; old vs new regime; tax planning India
- **Why this change / implementation notes:** Section numbers are being re-mapped under the Income-tax Act 2025: keep '80C' (people still search it) but explain the mapping on-page.
- **Current title (41 characters):** Tax Saving Courses — Stockstrail Learning
- **Current description:** Section 80C, ELSS, NPS and smart tax planning.

#### 14. loans

- **URL:** https://learning.stockstrail.in/categories/loans
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (58 characters):** `Loan Courses: EMI, Credit Score & Prepayment | Stockstrail`
- **New description (134 characters):** `Free loan courses: how EMIs split between interest and principal, how credit scores work, prepayment math and how to avoid debt traps.`
- **Primary keyword:** loan course
- **Secondary / long-tail keywords:** EMI explained; credit score basics; prepayment
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (36 characters):** Loans Courses — Stockstrail Learning
- **Current description:** Home, personal & credit loans decoded.

#### 15. retirement

- **URL:** https://learning.stockstrail.in/categories/retirement
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (48 characters):** `Retirement Planning Courses (Free) | Stockstrail`
- **New description (144 characters):** `Free retirement planning courses: calculate your corpus, factor in inflation and build lifelong cash flow for a stress-free retirement in India.`
- **Primary keyword:** retirement planning course
- **Secondary / long-tail keywords:** retirement corpus; retire early India
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (41 characters):** Retirement Courses — Stockstrail Learning
- **Current description:** Plan a stress-free retirement.

#### 16. financial-planning

- **URL:** https://learning.stockstrail.in/categories/financial-planning
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (56 characters):** `Financial Planning Courses: Goals & Wealth | Stockstrail`
- **New description (125 characters):** `Free financial planning courses: set goals, build an emergency fund, manage debt and match your investments to time horizons.`
- **Primary keyword:** financial planning course
- **Secondary / long-tail keywords:** goal based investing; emergency fund; wealth planning
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (49 characters):** Financial Planning Courses — Stockstrail Learning
- **Current description:** Goal-based, holistic wealth planning.

#### 17. fixed-deposits

- **URL:** https://learning.stockstrail.in/categories/fixed-deposits
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational / Hub
- **New title (59 characters):** `Fixed Deposit Courses: Rates, Tax & Laddering | Stockstrail`
- **New description (136 characters):** `Free fixed deposit courses: bank vs corporate FDs, cumulative interest, tax implications and FD laddering for safe, predictable returns.`
- **Primary keyword:** fixed deposit course
- **Secondary / long-tail keywords:** FD laddering; bank vs corporate FD; FD tax
- **Why this change / implementation notes:** Old title/description were thin: now topic-specific and benefit-led.
- **Current title (45 characters):** Fixed Deposits Courses — Stockstrail Learning
- **Current description:** Safe, predictable returns explained.

### Learning Course

#### 18. mutual-funds

- **URL:** https://learning.stockstrail.in/courses/mutual-funds
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (54 characters):** `Mutual Funds Course for Beginners (Free) | Stockstrail`
- **New description (155 characters):** `Free beginner-to-intermediate mutual fund course for Indian investors: NAV, expense ratio, direct vs regular, SIP vs lumpsum, taxation and common mistakes.`
- **Primary keyword:** mutual funds course
- **Secondary / long-tail keywords:** learn mutual funds; mutual fund basics; mutual funds for beginners India
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (68 characters):** Mutual Funds: From Zero to Confident Investor — Stockstrail Learning
- **Current description:** The complete beginner-to-intermediate guide to mutual fund investing in India.

#### 19. sip-mastery

- **URL:** https://learning.stockstrail.in/courses/sip-mastery
- **Priority:** P1
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (60 characters):** `SIP Course: Step-Up SIP & Rupee Cost Averaging | Stockstrail`
- **New description (136 characters):** `Master SIPs with a free course on rupee cost averaging, step-up SIPs, compounding and the biggest SIP myths. Built for Indian investors.`
- **Primary keyword:** SIP course
- **Secondary / long-tail keywords:** step up SIP; rupee cost averaging; SIP myths
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (66 characters):** SIP Mastery: Compounding Your Way to Wealth — Stockstrail Learning
- **Current description:** Master Systematic Investment Plans with rupee-cost averaging and step-up SIPs.

#### 20. insurance-fundamentals

- **URL:** https://learning.stockstrail.in/courses/insurance-fundamentals
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `Insurance Course: Term, Health & Claim Ratios | Stockstrail`
- **New description (135 characters):** `Learn term vs traditional plans, health insurance riders and claim settlement ratios in this free insurance course for Indian families.`
- **Primary keyword:** insurance course India
- **Secondary / long-tail keywords:** term vs traditional insurance; health insurance riders; claim settlement ratio
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (67 characters):** Insurance Decoded: Protect What Matters Most — Stockstrail Learning
- **Current description:** Term vs traditional, health insurance riders, and claim settlement ratios.

#### 21. stock-market-basics

- **URL:** https://learning.stockstrail.in/courses/stock-market-basics
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (54 characters):** `Stock Market Basics Course for Beginners | Stockstrail`
- **New description (129 characters):** `Learn how shares, Sensex, Nifty and market cycles work in this free stock market course, and build a long-term investing mindset.`
- **Primary keyword:** stock market basics
- **Secondary / long-tail keywords:** stock market for beginners; Sensex Nifty; market cycles
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (67 characters):** Stock Market 101: How Equities Create Wealth — Stockstrail Learning
- **Current description:** Demystifying shares, Sensex, Nifty, market cycles, and long-term mindset.

#### 22. demat-accounts-guide

- **URL:** https://learning.stockstrail.in/courses/demat-accounts-guide
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (54 characters):** `Demat Account Course: Open, Use & Secure | Stockstrail`
- **New description (137 characters):** `A free walkthrough to open, operate and safeguard your Demat and trading account, with NSDL and CDSL depositories explained step by step.`
- **Primary keyword:** demat account guide
- **Secondary / long-tail keywords:** how to open demat account; trading account basics
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (73 characters):** Demat & Trading Accounts: The Complete Walkthrough — Stockstrail Learning
- **Current description:** Everything you need to open, operate, and safeguard your demat account.

#### 23. tax-saving-investments

- **URL:** https://learning.stockstrail.in/courses/tax-saving-investments
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (57 characters):** `Tax Saving Course: 80C, ELSS, NPS & Regimes | Stockstrail`
- **New description (131 characters):** `Free course on tax saving in India: Section 80C, ELSS, NPS, health deductions and how to choose between the old and new tax regime.`
- **Primary keyword:** tax saving investments
- **Secondary / long-tail keywords:** 80C ELSS NPS; old vs new tax regime; tax planning salaried
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (69 characters):** Smart Tax Planning: Keep More of What You Earn — Stockstrail Learning
- **Current description:** Section 80C, ELSS, NPS, health deductions and old vs new tax regime.

#### 24. retirement-planning-101

- **URL:** https://learning.stockstrail.in/courses/retirement-planning-101
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `Retirement Planning Course: Build Your Corpus | Stockstrail`
- **New description (135 characters):** `Free retirement planning course: calculate your target corpus, beat inflation and create lifelong cash flow. Made for Indian investors.`
- **Primary keyword:** retirement planning course
- **Secondary / long-tail keywords:** retirement corpus calculator; beat inflation; retire early
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (79 characters):** Retirement Planning: Build Your Financial Freedom Corpus — Stockstrail Learning
- **Current description:** Calculate your target corpus, beat inflation, and create lifelong cashflow.

#### 25. financial-planning-basics

- **URL:** https://learning.stockstrail.in/courses/financial-planning-basics
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (53 characters):** `Financial Planning Basics Course (Free) | Stockstrail`
- **New description (145 characters):** `Learn financial planning basics: build an emergency fund, manage debt, get the right insurance and align your money with life goals. Free course.`
- **Primary keyword:** financial planning basics
- **Secondary / long-tail keywords:** emergency fund; debt management; financial goals
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (53 characters):** Financial Planning Foundations — Stockstrail Learning
- **Current description:** Build an emergency fund, manage debt, and align money with life goals.

#### 26. goal-based-investing

- **URL:** https://learning.stockstrail.in/courses/goal-based-investing
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (60 characters):** `Goal-Based Investing Course: Dreams to Numbers | Stockstrail`
- **New description (132 characters):** `Match time horizons and risk profile to goals like child education, a home or retirement with this free goal-based investing course.`
- **Primary keyword:** goal based investing
- **Secondary / long-tail keywords:** investing for child education; investing for home; time horizon investing
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (67 characters):** Goal-Based Investing: From Dreams to Numbers — Stockstrail Learning
- **Current description:** Map time horizons and risk profiles to child education, home, and wealth.

#### 27. fixed-deposits-explained

- **URL:** https://learning.stockstrail.in/courses/fixed-deposits-explained
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (57 characters):** `Fixed Deposit Course: Bank vs Corporate FDs | Stockstrail`
- **New description (144 characters):** `Free course on fixed deposits: bank vs corporate FDs, cumulative interest, tax implications and FD laddering strategies for predictable returns.`
- **Primary keyword:** fixed deposit course
- **Secondary / long-tail keywords:** FD laddering; bank vs corporate FD; FD taxation
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (70 characters):** Fixed Deposits: Safe Returns & Smart Strategies — Stockstrail Learning
- **Current description:** Bank vs corporate FDs, cumulative interest, tax implications and laddering.

#### 28. personal-finance-foundations

- **URL:** https://learning.stockstrail.in/courses/personal-finance-foundations
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Personal Finance Course: Budgeting & Savings | Stockstrail`
- **New description (142 characters):** `Master your daily money with the 50/30/20 budgeting rule, emergency savings and ways to avoid lifestyle creep. A free personal finance course.`
- **Primary keyword:** personal finance course
- **Secondary / long-tail keywords:** 50/30/20 rule; emergency savings; lifestyle creep
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (68 characters):** Personal Finance 101: Master Your Daily Money — Stockstrail Learning
- **Current description:** Budgeting rules (50/30/20), emergency savings, and avoiding lifestyle creep.

#### 29. loans-decoded

- **URL:** https://learning.stockstrail.in/courses/loans-decoded
- **Priority:** P2
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Loans Course: EMI, Credit Score & Prepayment | Stockstrail`
- **New description (131 characters):** `Learn how credit scores, EMIs and prepayment work and how to avoid debt traps. A free loans and credit course for Indian borrowers.`
- **Primary keyword:** loans and credit course
- **Secondary / long-tail keywords:** credit score basics; EMI breakdown; prepayment
- **Why this change / implementation notes:** Old title (80+ chars) was truncated. Add Course schema (name, description, provider = Stockstrail) and link every lesson from this page.
- **Current title (65 characters):** Loans & Credit: Borrow Smart, Repay Faster — Stockstrail Learning
- **Current description:** Credit score secrets, EMI breakdown, prepayment math, and avoiding debt traps.

### Learning Lesson

#### 30. mutual-funds / what-is-a-mutual-fund

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/what-is-a-mutual-fund
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `What Is a Mutual Fund? Meaning & How It Works | Stockstrail`
- **New description (156 characters):** `A mutual fund pools money from many investors into a diversified basket of securities run by a professional manager. Learn how it works in this free lesson.`
- **Primary keyword:** what is a mutual fund
- **Secondary / long-tail keywords:** mutual fund meaning; how mutual funds work; mutual fund for beginners
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (93 characters):** What is a Mutual Fund? — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** A mutual fund is a professionally managed investment vehicle that pools money from many investors and invests it across a diversified basket of securities.

#### 31. mutual-funds / history

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/history
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (60 characters):** `History of Mutual Funds in India: UTI to Today | Stockstrail`
- **New description (139 characters):** `India's mutual fund story: UTI in 1963, private AMCs in the 1990s and the SIP boom today. A quick history lesson from Stockstrail Learning.`
- **Primary keyword:** history of mutual funds in India
- **Secondary / long-tail keywords:** UTI 1963; mutual fund industry India; AMC history
- **Why this change / implementation notes:** Meta avoids the old AUM figure (the lesson says 'more than ₹60 lakh crore'). Update the on-page number to the latest AMFI month-end AUM and date-stamp it.
- **Current title (86 characters):** A Quick History — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** India's mutual fund industry started in 1963 with UTI. Private players entered in the 1990s, and today the industry manages more than ₹60 lakh crore in AUM.

#### 32. mutual-funds / types

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/types
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Types of Mutual Funds: Equity, Debt & Hybrid | Stockstrail`
- **New description (142 characters):** `Mutual funds are classified by asset class, structure and strategy. Learn the main types, equity, debt and hybrid, and which suits which goal.`
- **Primary keyword:** types of mutual funds
- **Secondary / long-tail keywords:** equity debt hybrid funds; mutual fund categories
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (92 characters):** Types of Mutual Funds — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** Funds are classified by asset class, structure, and strategy. The most useful lens for a beginner is asset class.

#### 33. mutual-funds / nav-and-expense-ratio

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/nav-and-expense-ratio
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `NAV & Expense Ratio in Mutual Funds Explained | Stockstrail`
- **New description (156 characters):** `NAV is the price of one mutual fund unit: total assets minus liabilities, divided by units outstanding. Learn NAV and how the expense ratio affects returns.`
- **Primary keyword:** what is NAV in mutual funds
- **Secondary / long-tail keywords:** expense ratio explained; NAV meaning; mutual fund cost
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (90 characters):** NAV & Expense Ratio — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** NAV (Net Asset Value) is simply the price of one unit of the mutual fund on any given day. Total assets minus liabilities divided by units outstanding.

#### 34. mutual-funds / direct-vs-regular

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/direct-vs-regular
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `Direct vs Regular Mutual Fund Plans Explained | Stockstrail`
- **New description (134 characters):** `Direct and Regular plans hold the same portfolio and fund manager but differ in expense ratio and support. Learn which plan suits you.`
- **Primary keyword:** direct vs regular mutual fund
- **Secondary / long-tail keywords:** direct plan vs regular plan; expense ratio difference; mutual fund distributor
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (94 characters):** Direct vs Regular Plans — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** Every mutual fund scheme comes in two flavours: Direct and Regular. The portfolio, fund manager, and stocks held are identical.

#### 35. mutual-funds / sip-vs-lumpsum

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/sip-vs-lumpsum
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (56 characters):** `SIP vs Lumpsum Investment: Key Differences | Stockstrail`
- **New description (141 characters):** `SIP spreads your money across market ups and downs with rupee cost averaging; lumpsum puts it to work at once. Learn when each approach fits.`
- **Primary keyword:** SIP vs lumpsum
- **Secondary / long-tail keywords:** SIP or lumpsum which is better; rupee cost averaging
- **Why this change / implementation notes:** Overlaps with blog post #16 (SIP vs Lump Sum). Differentiate: lesson = definition + quick rule; blog = deep dive + examples. Cross-link both ways.
- **Current title (85 characters):** SIP vs Lumpsum — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** SIP gives you rupee-cost averaging across market volatility; lumpsum puts money to work immediately.

#### 36. mutual-funds / taxation

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/taxation
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Mutual Fund Taxation: LTCG vs STCG Explained | Stockstrail`
- **New description (146 characters):** `Mutual fund tax depends on asset class (equity or debt) and holding period (LTCG or STCG). Learn how gains are taxed in India in this free lesson.`
- **Primary keyword:** mutual fund taxation
- **Secondary / long-tail keywords:** LTCG STCG; equity fund tax; debt fund tax
- **Why this change / implementation notes:** Overlaps with blog #14. Keep this lesson short and link to the blog for rates; re-check wording after every Budget.
- **Current title (91 characters):** Mutual Fund Taxation — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** Taxation depends on asset class (Equity vs Debt) and holding period (LTCG vs STCG).

#### 37. mutual-funds / mistakes

- **URL:** https://learning.stockstrail.in/courses/mutual-funds/mistakes
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (50 characters):** `Common Mutual Fund Mistakes to Avoid | Stockstrail`
- **New description (160 characters):** `Chasing last year's top performers, stopping SIPs in corrections and investing without clear goals. Learn the common mutual fund mistakes and how to avoid them.`
- **Primary keyword:** mutual fund mistakes
- **Secondary / long-tail keywords:** common investing mistakes; stopping SIP in correction
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (86 characters):** Common Mistakes — Mutual Funds: From Zero to Confident Investor | Stockstrail Learning
- **Current description:** Chasing top performers of last year, stopping SIP in market corrections, and investing without defining clear financial goals.

#### 38. sip-mastery / rupee-cost-averaging

- **URL:** https://learning.stockstrail.in/courses/sip-mastery/rupee-cost-averaging
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (53 characters):** `Rupee Cost Averaging Explained with SIP | Stockstrail`
- **New description (146 characters):** `When markets fall, a fixed SIP buys more units; when they rise, it buys fewer. Learn how rupee cost averaging works and what it can and cannot do.`
- **Primary keyword:** rupee cost averaging
- **Secondary / long-tail keywords:** rupee cost averaging SIP; SIP market fall; unit averaging
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (89 characters):** Rupee Cost Averaging — SIP Mastery: Compounding Your Way to Wealth | Stockstrail Learning
- **Current description:** When the market is down, your fixed monthly SIP buys more units; when the market is up, it buys fewer units.

#### 39. sip-mastery / step-up-sip

- **URL:** https://learning.stockstrail.in/courses/sip-mastery/step-up-sip
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `Step-Up SIP: What It Is & How It Grows Wealth | Stockstrail`
- **New description (158 characters):** `A step-up SIP raises your monthly investment each year, for example by 10%, and can lift your final corpus considerably. See how it works in this free lesson.`
- **Primary keyword:** step up SIP
- **Secondary / long-tail keywords:** top up SIP; step up SIP benefits; annual SIP increase
- **Why this change / implementation notes:** Old description claimed a 10% step-up 'can almost double' wealth: that is an unqualified outcome claim. Show the maths (assumptions, years, return) on the page or soften it.
- **Current title (93 characters):** The Power of Step-Up SIP — SIP Mastery: Compounding Your Way to Wealth | Stockstrail Learning
- **Current description:** Increasing your monthly SIP by just 10% each year can almost double your final wealth accumulation.

#### 40. sip-mastery / sip-myths

- **URL:** https://learning.stockstrail.in/courses/sip-mastery/sip-myths
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (55 characters):** `SIP Myths: 3 Common Misconceptions Busted | Stockstrail`
- **New description (128 characters):** `Does SIP guarantee profit? Is it only for small investors? Can you not stop it? Bust three common SIP myths in this free lesson.`
- **Primary keyword:** SIP myths
- **Secondary / long-tail keywords:** does SIP guarantee returns; can I stop SIP anytime; SIP misconceptions
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (84 characters):** 3 Big SIP Myths — SIP Mastery: Compounding Your Way to Wealth | Stockstrail Learning
- **Current description:** Debunking the myths: SIP guarantees profits, SIP is only for small investors, and you cannot stop an ongoing SIP.

#### 41. insurance-fundamentals / term-vs-traditional

- **URL:** https://learning.stockstrail.in/courses/insurance-fundamentals/term-vs-traditional
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `Term vs Traditional Insurance Plans Explained | Stockstrail`
- **New description (149 characters):** `Pure-protection term insurance gives high cover at low cost. Learn why you should not mix investment with insurance and how traditional plans differ.`
- **Primary keyword:** term vs traditional insurance
- **Secondary / long-tail keywords:** term insurance vs endowment; pure protection; insurance and investment
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (99 characters):** Term vs Traditional Insurance — Insurance Decoded: Protect What Matters Most | Stockstrail Learning
- **Current description:** Pure protection term insurance gives high cover at low cost; do not mix investment with insurance.

#### 42. insurance-fundamentals / health-insurance-checklist

- **URL:** https://learning.stockstrail.in/courses/insurance-fundamentals/health-insurance-checklist
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Health Insurance Checklist: What to Look For | Stockstrail`
- **New description (158 characters):** `Before you buy health insurance, check room rent limits, restoration benefit, pre-existing disease waiting periods and claim settlement ratio. Free checklist.`
- **Primary keyword:** health insurance checklist
- **Secondary / long-tail keywords:** what to check before buying health insurance; room rent capping; restoration benefit
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (96 characters):** Health Insurance Checklist — Insurance Decoded: Protect What Matters Most | Stockstrail Learning
- **Current description:** Look for zero room rent capping, restoration benefits, low pre-existing waiting periods, and high claim settlement ratios.

#### 43. stock-market-basics / what-is-a-stock

- **URL:** https://learning.stockstrail.in/courses/stock-market-basics/what-is-a-stock
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (52 characters):** `What Is a Stock? Meaning for Beginners | Stockstrail`
- **New description (157 characters):** `A stock is an ownership share in a business, entitling you to a fraction of its profits and equity value. Learn how stocks work in this free beginner lesson.`
- **Primary keyword:** what is a stock
- **Secondary / long-tail keywords:** what is a share; stock meaning; equity ownership
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (86 characters):** What is a Stock? — Stock Market 101: How Equities Create Wealth | Stockstrail Learning
- **Current description:** A stock is an ownership share in a business, entitling you to a fraction of the company's profits and equity value.

#### 44. stock-market-basics / indices

- **URL:** https://learning.stockstrail.in/courses/stock-market-basics/indices
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (55 characters):** `Sensex vs Nifty: Market Indices Explained | Stockstrail`
- **New description (143 characters):** `Sensex and Nifty 50 track India's top companies and act as market benchmarks. Learn how they are built and what they tell you about the market.`
- **Primary keyword:** Sensex vs Nifty
- **Secondary / long-tail keywords:** what is Nifty 50; what is Sensex; stock market index India
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (98 characters):** Understanding Sensex & Nifty — Stock Market 101: How Equities Create Wealth | Stockstrail Learning
- **Current description:** Market benchmarks track the performance of top companies in India (Nifty 50 and BSE Sensex 30).

#### 45. demat-accounts-guide / demat-basics

- **URL:** https://learning.stockstrail.in/courses/demat-accounts-guide/demat-basics
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (51 characters):** `What Is a Demat Account? How It Works | Stockstrail`
- **New description (148 characters):** `A Demat account holds your shares and securities in electronic form with NSDL or CDSL. Learn how it works and how it differs from a trading account.`
- **Primary keyword:** what is a demat account
- **Secondary / long-tail keywords:** demat vs trading account; NSDL CDSL; demat account meaning
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (100 characters):** What is a Demat Account? — Demat & Trading Accounts: The Complete Walkthrough | Stockstrail Learning
- **Current description:** Demat holds your financial securities in dematerialized electronic form with NSDL or CDSL depositories.

#### 46. tax-saving-investments / 80c-breakdown

- **URL:** https://learning.stockstrail.in/courses/tax-saving-investments/80c-breakdown
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (59 characters):** `Section 80C & ELSS: Save Tax Under Old Regime | Stockstrail`
- **New description (145 characters):** `Section 80C allows deductions up to ₹1.5 lakh under the old tax regime, and ELSS has the shortest lock-in at 3 years. Learn how to use it wisely.`
- **Primary keyword:** Section 80C ELSS
- **Secondary / long-tail keywords:** 80C deduction limit; ELSS lock-in; tax saving old regime
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (90 characters):** Section 80C & ELSS — Smart Tax Planning: Keep More of What You Earn | Stockstrail Learning
- **Current description:** Section 80C offers deductions up to ₹1.5 lakh via ELSS mutual funds with the shortest lock-in period of 3 years.

#### 47. retirement-planning-101 / corpus-calc

- **URL:** https://learning.stockstrail.in/courses/retirement-planning-101/corpus-calc
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (53 characters):** `How to Calculate Your Retirement Corpus | Stockstrail`
- **New description (146 characters):** `Factor in inflation, post-retirement expenses and life expectancy to arrive at your retirement corpus, your financial freedom number. Free lesson.`
- **Primary keyword:** retirement corpus calculation
- **Secondary / long-tail keywords:** how much corpus for retirement; freedom number; retirement planning India
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (105 characters):** Calculating Your Corpus — Retirement Planning: Build Your Financial Freedom Corpus | Stockstrail Learning
- **Current description:** Factoring inflation, monthly post-retirement expenditure, and life expectancy to arrive at your freedom number.

#### 48. financial-planning-basics / hierarchy-of-needs

- **URL:** https://learning.stockstrail.in/courses/financial-planning-basics/hierarchy-of-needs
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (54 characters):** `Financial Planning Steps: Where to Start | Stockstrail`
- **New description (154 characters):** `Start with an emergency fund and life and health insurance before volatile market investments. Learn the financial hierarchy of needs in this free lesson.`
- **Primary keyword:** financial planning steps
- **Secondary / long-tail keywords:** emergency fund before investing; financial hierarchy of needs
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (84 characters):** Financial Hierarchy of Needs — Financial Planning Foundations | Stockstrail Learning
- **Current description:** Start with emergency funds and life/health insurance before jumping into volatile market investments.

#### 49. goal-based-investing / time-horizons

- **URL:** https://learning.stockstrail.in/courses/goal-based-investing/time-horizons
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (58 characters):** `Short, Medium & Long-Term Investment Options | Stockstrail`
- **New description (150 characters):** `Short-term goals under 3 years suit liquid or debt funds, medium-term goals hybrid funds and long-term goals (7+ years) diversified equity. Learn why.`
- **Primary keyword:** investment options by time horizon
- **Secondary / long-tail keywords:** short term vs long term investment; asset allocation by goal
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (97 characters):** Matching Horizons to Assets — Goal-Based Investing: From Dreams to Numbers | Stockstrail Learning
- **Current description:** Short term (<3 yrs) in liquid/debt, medium term (3-7 yrs) in hybrid, and long term (7+ yrs) in diversified equity.

#### 50. fixed-deposits-explained / fd-laddering

- **URL:** https://learning.stockstrail.in/courses/fixed-deposits-explained/fd-laddering
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (49 characters):** `FD Laddering Strategy: How It Works | Stockstrail`
- **New description (150 characters):** `Split a lump sum across FDs of different maturities to keep liquidity while locking in higher rates. Learn how FD laddering works in this free lesson.`
- **Primary keyword:** FD laddering
- **Secondary / long-tail keywords:** fixed deposit ladder; FD strategy; FD maturity planning
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (94 characters):** FD Laddering Strategy — Fixed Deposits: Safe Returns & Smart Strategies | Stockstrail Learning
- **Current description:** Split your lump sum across multiple maturity durations to maintain liquidity while locking in higher rates.

#### 51. personal-finance-foundations / budget-50-30-20

- **URL:** https://learning.stockstrail.in/courses/personal-finance-foundations/budget-50-30-20
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (54 characters):** `50/30/20 Budget Rule Explained for India | Stockstrail`
- **New description (147 characters):** `Spend 50% on needs and 30% on wants, and save at least 20%. Learn how to apply the 50/30/20 budgeting rule on an Indian salary in this free lesson.`
- **Primary keyword:** 50/30/20 rule
- **Secondary / long-tail keywords:** 50 30 20 budget India; budgeting for salaried; savings rule
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (88 characters):** The 50/30/20 Rule — Personal Finance 101: Master Your Daily Money | Stockstrail Learning
- **Current description:** 50% for Needs, 30% for Wants, and at least 20% strictly dedicated to savings and wealth creation.

#### 52. loans-decoded / how-emi-splits

- **URL:** https://learning.stockstrail.in/courses/loans-decoded/how-emi-splits
- **Priority:** P3
- **Indexing:** index, follow
- **Search intent:** Informational
- **New title (56 characters):** `How EMI Works: Interest vs Principal Split | Stockstrail`
- **New description (139 characters):** `In the early years of a loan, most of each EMI goes to interest, not principal. Learn how an EMI splits over time and why prepayment helps.`
- **Primary keyword:** how EMI is calculated
- **Secondary / long-tail keywords:** EMI interest and principal split; loan amortization; prepayment
- **Why this change / implementation notes:** Old title (~90 chars) was truncated and led with a label, not the query. Add a link back to the parent course, next/previous lesson and a 'Try the calculator' CTA.
- **Current title (82 characters):** How EMI Splits — Loans & Credit: Borrow Smart, Repay Faster | Stockstrail Learning
- **Current description:** In the early years of a loan, most of your EMI goes toward interest rather than principal reduction.

## 5. Keyword map

**Important:** demand and competition are directional estimates from the search results seen (who ranks) and normal Indian search behaviour. Exact monthly volumes were not available. Validate in Search Console and Keyword Planner before committing effort. Winnability = realistic chance for a small, newer site: Quick win / Good / Long game / Defend.

| Cluster | Target keyword | Search intent | Est. demand (India) | Est. competition | Winnability | Target page | Action |
|---|---|---|---|---|---|---|---|
| Brand | Stockstrail | Navigational | Low | Low | Defend | Home, About, GBP, LinkedIn | Own the whole first page: Home, About, learning subdomain, Google Business Profile, LinkedIn, Facebook, Instagram, Telegram and any AMFI/directory listing, all with identical name + ARN. |
| Brand | Vikrant Bhardwaj Stockstrail / ARN-284122 | Navigational | Low | Low | Defend | About | Person schema + a dedicated author page listing credentials; reuse the same bio everywhere. |
| Local | mutual fund distributor in Himachal Pradesh | Local commercial | Low | Low | Quick win | NEW: /financial-planning-himachal-pradesh (+ Home) | One strong hub with unique local content (govt-employee scenarios, district notes, your Chintpurni office, local reviews). Avoid 12 near-identical district blocks/pages. |
| Local | financial planner Himachal Pradesh / Una / Kangra / Dharamshala / Shimla | Local commercial | Low | Low | Quick win | Same hub + short city sections | Confirm 'advisor/planner' wording with compliance first (Fix List F7). |
| Local | mutual fund distributor near me / Chintpurni | Local | Medium | Low | Quick win | Google Business Profile + About | Complete the GBP (closest category, photos, hours, services, Q&A), collect real reviews, keep NAP identical to the site. |
| Mutual funds | mutual fund investment India | Commercial | High | High | Long game | /services/mutual-funds | Support with the beginner pillar + internal links from every chapter. |
| Mutual funds | how to invest in mutual funds | Informational | Very High | Very High | Long game | Blog #12 | Flagship of the pillar page; numbered steps; answer-first intro; strong CTA to /services/mutual-funds. |
| Mutual funds | types of mutual funds | Informational | High | High | Good | Blog #5 (+ learning lesson) | Fix the raw-slug title now; add a comparison table of categories. |
| Mutual funds | SIP vs lumpsum | Informational / comparison | High | High | Good | Blog #16 (lesson links to it) | Add a comparison table and embed both calculators. |
| Mutual funds | direct vs regular mutual fund | Informational / comparison | High | High | Good | Learning lesson + blog FAQ | Your edge is honesty: explain the commission difference openly (trust + E-E-A-T). |
| Mutual funds | mutual fund taxation 2026 / LTCG STCG | Informational | High | High | Good | Blog #14 | Date-stamp and cite the Income Tax Department / Finance Act; refresh after every Budget. |
| Mutual funds | are mutual funds safe | Informational | High | Medium | Good | Blog #8 | Open with a 2-sentence direct answer; then risks, Riskometer, diversification. |
| Mutual funds | how much return do mutual funds give | Informational | High | High | Long game | Blog #10 | Keep it qualitative with disclaimers; link to the SIP calculator. |
| News | SEBI mutual fund nomination rules | News / informational | Medium (spike) | Medium | Quick win | Blog #18 | Rewrite now as a 'how to add a nominee' guide since the 1 Sept date has passed. |
| Calculators | step up SIP calculator | Tool | High | Medium | Quick win | /calculators/sip (optional /calculators/step-up-sip) | Feature already exists: put it in the title/H1 and add a worked example. |
| Calculators | SIP calculator with inflation | Tool | Medium | Medium | Quick win | /calculators/sip | Add an inflation-adjusted toggle. Competitor sipcalculator.in lists this among its top organic keywords (Semrush). |
| Calculators | SIP calculator | Tool | Very High | Very High | Long game | /calculators/sip | Dominated by Groww, ET Money, ClearTax, AMC sites. Win the long-tails above first. |
| Calculators | lumpsum calculator | Tool | High | High | Good | /calculators/lumpsum | Add a 'compare with SIP' panel. |
| Calculators | FD calculator | Tool | Very High | Very High | Long game | /calculators/fd | Differentiate: cumulative vs payout, senior-citizen rate, TDS estimate. |
| Calculators | RD calculator | Tool | High | High | Good | /calculators/rd | Check quarterly-compounding logic. |
| Calculators | EMI calculator | Tool | Very High | Very High | Long game | /calculators/emi | Add prepayment and part-payment options to stand out. |
| Calculators | income tax calculator FY 2026-27 / old vs new regime | Tool | Very High (Jan-Jul peak) | High | Good | /calculators/tax | Fresh-year pages win: keep FY 2026-27 in title/H1 and update every Budget. |
| Calculators | SWP / PPF / NPS / retirement / CAGR / gratuity / HRA calculators | Tool | High | High | Good (build) | NEW pages under /calculators/ | Prioritise SWP (fills the empty SWP learning category) and retirement (ties to your retirement course). |
| Loans | loan against mutual funds | Commercial | Medium | Medium | Good | /services/loan | Add a 'What changed in 2026' block (RBI rules of 13 Feb 2026; ₹1 crore cap effective July 2026). |
| Loans | loan against mutual funds interest rate | Commercial | Medium | Medium | Quick win | /services/loan (section) | Publish a dated range (market roughly 8-13% p.a.) with 'varies by lender, LTV and fund type'. |
| Loans | LAMF vs personal loan | Comparison | Medium | Medium | Quick win | NEW blog post | Comparison table (rate, LTV, repayment, risks) + CTA. |
| Fixed deposits | FD laddering | Informational | Medium | Low | Quick win | Learning lesson + blog | Show a ladder example in a table. |
| Fixed deposits | bank FD vs corporate FD / FD vs SIP | Comparison | High | Medium | Good | NEW comparison blog/page | Mirrors the FAQ already on your home page ('SIP or FD?'). |
| Fixed deposits | fixed deposit interest rates 2026 | Commercial | Very High | Very High | Long game | /services/fixed-deposit | Do not chase the head term (banks and aggregators own it); win FD-vs and ladder queries. |
| Insurance | term insurance vs life insurance | Comparison | High | High | Good | Blog #7 | Comparison table + CSR source citation (IRDAI) for AI Overviews. |
| Insurance | health insurance checklist / what to check before buying | Informational | Medium | Medium | Quick win | Learning lesson + blog | Checklist format wins snippets. |
| Market tools | NSE holidays 2026 / stock market holidays 2026 | Informational | High | High | Good | /nse-holidays | Answer-first summary + table; keep updated; add 2027 list in Dec. |
| Market tools | is share market open today | Informational (daily) | High | High | Long game | /nse-holidays | Live open/closed status block at the top of the page. |
| Market tools | muhurat trading 2026 | Informational (seasonal) | Medium (spike to 8 Nov) | Medium | Quick win - NOW | /nse-holidays (section) + short post | Publish before 8 Nov 2026; add the exchange-announced timing as soon as NSE/BSE release it. |
| Market tools | BSE holidays 2026 | Informational | Medium | High | Good | /bse-holidays | Cross-link with NSE page. |
| Tools | investor risk profile test / risk profile questionnaire | Tool | Medium | Medium | Quick win | /check-risk-profile | Add result-page content and a disclaimer (indicative, not advice). |
| Learning | 50/30/20 rule India | Informational | Medium | Medium | Good | Learning lesson | Add an Indian salary example table. |
| Learning | how EMI is calculated / interest vs principal split | Informational | Medium | Medium | Good | Learning lesson + EMI calculator | Link lesson <-> calculator. |
| Learning | rupee cost averaging | Informational | Medium | Medium | Good | Learning lesson | Worked 6-month example table. |
| Salary | how much SIP should I start with my salary | Informational | Medium | Low | Quick win | Blog #15 + NEW national version | Generalise your HP income tables into a national 'SIP by salary' page. |
| Demat | open demat account online | Transactional | Very High | Very High | Long game | /services/open-demat | Target long-tails: documents required, demat charges, zero AMC, NRI/minor accounts. |

## 6. Fix list

IDs (F1, F7 ...) are referenced from the notes in Sections 3 and 4. P1 = do first. Compliance items are flags for review by a qualified professional, not legal advice.

### F1. Brand name appears twice in the rendered <title> on many pages.

- **Priority:** P1
- **Area:** Title tags
- **Where / evidence:** Live pages: /services/mutual-funds, /blog, /calculators/sip all end '| Stockstrail | Stockstrail'. Home and About render correctly.
- **Recommended fix:** Use a title template ('%s | Stockstrail') and remove '| Stockstrail' from per-page titles, or set an absolute title on pages that already contain the brand.
- **Owner:** Developer

### F2. Your sheet and the live site disagree on some metadata.

- **Priority:** P1
- **Area:** Deployment
- **Where / evidence:** About live title: 'About Us | Stockstrail — Founder, Certifications & Our Approach'; Blog live title: 'Financial Insights & Investment Strategies Blog | Stockstrail | Stockstrail'. Your sheet lists different values.
- **Recommended fix:** Confirm which version is deployed, purge CDN/ISR cache, then treat the final sheet as the single source of truth.
- **Owner:** Developer

### F3. Gated pages are indexable and carry the home-page description.

- **Priority:** P1
- **Area:** Indexing
- **Where / evidence:** /sign-in and /complete-profile are 'index, follow' with inherited root meta (your sheet).
- **Recommended fix:** Set robots to noindex,nofollow and remove both from the XML sitemap.
- **Owner:** Developer

### F4. A blog post title is a raw slug.

- **Priority:** P1
- **Area:** Title tags
- **Where / evidence:** Blog #5: 'Stockstrail-Mutual-Funds-Chapter-4 | Stockstrail'.
- **Recommended fix:** Replace with the new title (see Meta - Main Site).
- **Owner:** Content

### F5. Time-bound article now reads as out of date.

- **Priority:** P1
- **Area:** Content freshness
- **Where / evidence:** Blog #18 says 'Before September 1' but today is 9 Oct 2026.
- **Recommended fix:** Rewrite as a 'how to add a nominee now' guide, re-verify against the SEBI circular, add 'Last updated'.
- **Owner:** Content

### F6. Fee and commission claims contradict your own disclosure.

- **Priority:** P1
- **Area:** Compliance / trust
- **Where / evidence:** SIP calculator page: '100% Free Advice', 'zero distributor markups', 'Direct AMC Execution', 'zero advisory fees', 'Zero-commission direct AMC investment', footer 'unbiased advice'. Home disclosure: 'we receive commissions from AMCs'. MF page FAQ: Regular plans include distribution expenses.
- **Recommended fix:** Make every page consistent with the commission disclosure. Remove absolute claims ('zero', 'unbiased', 'top-performing'). Have a compliance professional review.
- **Owner:** Founder + compliance

### F7. Titles such as 'advisor', 'SEBI-certified' and a 'SEBI Registered' label may mislead.

- **Priority:** P1
- **Area:** Compliance / trust
- **Where / evidence:** About page: label 'SEBI Registered' beside a SEBI Investor Certification exam certificate; 'SEBI-Certified Advisor'; footer 'Founder & Principal Advisor'; 'certified financial advisor'.
- **Recommended fix:** You are an AMFI-registered mutual fund distributor (ARN-284122). An exam certificate is not SEBI registration. Use 'AMFI-registered mutual fund distributor' and have compliance confirm whether 'advisor/advisory' wording is acceptable. I am not a lawyer; please verify.
- **Owner:** Founder + compliance

### F8. Disclosures for insurance, loans and Demat were not visible on the pages I read.

- **Priority:** P1
- **Area:** Regulatory disclosures
- **Where / evidence:** Pages I read show only AMFI / NISM / SEBI-exam credentials. An AMFI ARN does not cover insurance distribution, loan sourcing or broker referrals.
- **Recommended fix:** On each of those service pages show the relevant licence / partner status (for example IRDAI licence or POSP details, lending partners, broker partner relationship) next to the CTA.
- **Owner:** Founder + compliance

### F9. Footers/body links point to non-canonical or noindex URLs.

- **Priority:** P2
- **Area:** Internal links
- **Where / evidence:** About links: /mutual-funds, /fixed-deposit, /insurance, /loan, /risk-profile. Blog footer: /mutual-funds, /fixed-deposit, /insurance, /loan, /open-demat, /financial-protection, /learning. MF page links /risk-profile (noindex). About/Blog 'Learn' link uses www.learning.stockstrail.in.
- **Recommended fix:** Link straight to canonicals: /services/..., /check-risk-profile, https://learning.stockstrail.in. Avoid relying on redirects.
- **Owner:** Developer

### F10. Two near-identical learning categories.

- **Priority:** P2
- **Area:** Duplicate topics
- **Where / evidence:** /categories/personal-finance-basics and /categories/personal-finance.
- **Recommended fix:** Merge into one category and 301 the other.
- **Owner:** Content

### F11. Empty category page.

- **Priority:** P2
- **Area:** Thin pages
- **Where / evidence:** /categories/swp has no matching course.
- **Recommended fix:** noindex until an SWP course exists (then build an SWP calculator too).
- **Owner:** Content

### F12. The same fact differs between pages.

- **Priority:** P2
- **Area:** Fact consistency
- **Where / evidence:** '40+ AMCs' (Home) vs '25+ AMCs' (About). FD 'up to 7.5%' (About) vs 'up to 9.1%' (SIP page). LAMF 'from 9%' (meta) vs 'from 9.5%' (SIP page).
- **Recommended fix:** Keep one dated, sourced number in one place and reference it everywhere. Inconsistent facts hurt trust and AI answer extraction.
- **Owner:** Content

### F13. Very long, typo or keyword-stuffed blog slugs.

- **Priority:** P2
- **Area:** URLs
- **Where / evidence:** IT layoffs post slug = 166 characters; term-vs-life = 92; India VIX slug has 'why-stockstrail-track-it-every-single-day'; 'emplyoee' typo; 'chapter-N' and '-stockstrail' suffixes; 'beginner-s'.
- **Recommended fix:** Create short slugs for the worst offenders, 301 old to new, update canonicals, sitemap and internal links. Leave good URLs alone.
- **Owner:** Developer

### F14. Chapter series is scattered.

- **Priority:** P2
- **Area:** Topical authority
- **Where / evidence:** Posts titled Chapter 2-9 (and FAQs) are not tied together.
- **Recommended fix:** Build a pillar page 'Mutual Funds Guide for Beginners' linking all chapters, with next/previous links in each chapter.
- **Owner:** Content

### F15. No visible author/reviewer layer on articles.

- **Priority:** P2
- **Area:** E-E-A-T
- **Where / evidence:** Blog pages I read show no byline or review date.
- **Recommended fix:** Add author byline linking to a Vikrant Bhardwaj profile (credentials: AMFI ARN, NISM V-A), 'Last reviewed' date, and primary sources (SEBI, AMFI, RBI, NSE, IRDAI) on every article.
- **Owner:** Content

### F16. Schema coverage unknown/incomplete.

- **Priority:** P2
- **Area:** Structured data
- **Where / evidence:** Not verified for every page.
- **Recommended fix:** Add Organization/FinancialService + WebSite + BreadcrumbList site-wide; BlogPosting on articles; WebApplication on calculators; Course on learning courses; Person for the founder. Do NOT mark up your own testimonials as AggregateRating (self-serving reviews are not eligible).
- **Owner:** Developer

### F17. FAQ answers did not appear in the fetched page text.

- **Priority:** P2
- **Area:** Rendering
- **Where / evidence:** On Home, About and SIP Calculator the FAQ questions were visible but the answers were not in the text I could fetch (likely collapsed accordions).
- **Recommended fix:** In Search Console use URL Inspection > View crawled page to confirm the answers are in the server-rendered HTML. If not, render them server-side.
- **Owner:** Developer

### F18. Same OG image everywhere; one page has none.

- **Priority:** P2
- **Area:** Social / OG
- **Where / evidence:** og-stockstrail.png (1100x630) on all pages; /services/mutual-funds meta shows no og:image.
- **Recommended fix:** Use 1200x630 images, ideally per page type (service, calculator, blog, course), with og:image on every page.
- **Owner:** Design + developer

### F19. meta keywords tag is present.

- **Priority:** P3
- **Area:** Meta keywords
- **Where / evidence:** Google ignores it.
- **Recommended fix:** Optional: remove from the template to reduce noise. No SEO benefit either way.
- **Owner:** Developer

### F20. Local signals are thin.

- **Priority:** P2
- **Area:** Local SEO
- **Where / evidence:** About page repeats the same sentence for 12 districts; I could not see a Google Business Profile in my checks.
- **Recommended fix:** Claim/optimise the Google Business Profile (Moien, Chintpurni, HP 177110), keep NAP identical everywhere, collect genuine reviews, and build ONE Himachal hub page with unique local content.
- **Owner:** Founder

### F21. Learning content lives on a subdomain.

- **Priority:** P3
- **Area:** Architecture
- **Where / evidence:** learning.stockstrail.in is canonical; /learning on the main site 301s to it.
- **Recommended fix:** Consider consolidating under stockstrail.in/learn in future so authority accrues to one host. If you keep the subdomain, link to it prominently and mirror brand/entity schema.
- **Owner:** Founder + developer

### F22. Time-sensitive opportunities.

- **Priority:** P2
- **Area:** Seasonal
- **Where / evidence:** Muhurat Trading is Sunday 8 Nov 2026; NSE/BSE 2027 holiday lists usually appear mid/late Dec; tax pages peak Jan-Jul.
- **Recommended fix:** Publish the Muhurat section now, the 2027 holiday pages in Dec, and refresh tax/FD/LAMF pages each Budget or RBI/SEBI change.
- **Owner:** Content

### F23. Robots.txt, sitemap and AI-crawler rules not verified.

- **Priority:** P2
- **Area:** Crawling
- **Where / evidence:** I could not fetch these files.
- **Recommended fix:** Check robots.txt (allow Googlebot; decide on GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot), keep the XML sitemap to indexable canonical URLs only, and submit it in Google Search Console and Bing Webmaster Tools.
- **Owner:** Developer

### F24. High-demand calculator and comparison gaps.

- **Priority:** P3
- **Area:** Content roadmap
- **Where / evidence:** See Keyword Map: SWP, PPF, NPS, retirement, CAGR calculators; FD vs SIP; LAMF vs personal loan.
- **Recommended fix:** Add in the order shown in the Keyword Map.
- **Owner:** Content

## 7. AEO / GEO playbook

Google states that optimising for AI Overviews and AI Mode is still SEO, so most of this is about being clear, consistent, fresh and trustworthy.

### 1. Treat AEO/GEO as SEO

- **What to do:** Google's guide 'Optimizing your website for generative AI features on Google Search' (15 May 2026) treats AI Overviews/AI Mode as ordinary SEO: same index, no extra files or special markup required for Google.
- **Where on Stockstrail:** Whole site
- **Why it matters:** Prioritise crawlable, indexable, genuinely helpful pages over 'AI tricks'.

### 2. Answer-first writing

- **What to do:** Under every question heading put a direct 40-60 word answer first, then the detail, table or example.
- **Where on Stockstrail:** FAQs, blog posts, learning lessons
- **Why it matters:** AI Overviews and snippets lift concise, self-contained answers.

### 3. Cover the whole query fan-out

- **What to do:** For each pillar, answer the sub-questions people ask next: cost, eligibility, tax, risks, alternatives, how to start.
- **Where on Stockstrail:** LAMF, FD, MF, insurance pages
- **Why it matters:** Generative search expands one query into many sub-queries; broad coverage gives more chances to be cited.

### 4. Use tables and lists for comparisons

- **What to do:** Direct vs Regular, Term vs ULIP, FD vs RD vs SIP, Old vs New tax regime as simple HTML tables.
- **Where on Stockstrail:** Blog + learning
- **Why it matters:** Structured comparisons are easy to quote.

### 5. Make entity facts identical everywhere

- **What to do:** Name, ARN-284122, founder, address, phone, hours, services and counts (AMCs, clients) must match across site, Google Business Profile, LinkedIn, Facebook, Instagram and directories. Use sameAs in schema.
- **Where on Stockstrail:** Sitewide
- **Why it matters:** Consistent facts help search and AI systems resolve who you are.

### 6. Show real expertise and sources

- **What to do:** Named author/reviewer with credentials, 'Last reviewed' date, and links to primary sources (SEBI, AMFI, RBI, NSE, IRDAI, Income Tax Dept).
- **Where on Stockstrail:** Every article
- **Why it matters:** Financial content is YMYL: trust signals matter more.

### 7. Publish original value

- **What to do:** Your calculators, Himachal income-based SIP tables and plain-English explainers are the 'unique point of view' Google asks for. Add more local/data-driven pieces.
- **Where on Stockstrail:** Calculators, blog
- **Why it matters:** Generic rewrites of what Groww/ET Money say will not be cited.

### 8. Keep facts fresh

- **What to do:** Put the year and a last-updated date on tax, FD, LAMF and holiday pages; update after each Budget, RBI or SEBI change.
- **Where on Stockstrail:** Tax, FD, LAMF, NSE/BSE
- **Why it matters:** Stale answers (for example the SEBI nomination post) lose trust and clicks.

### 9. Structured data that matches the page

- **What to do:** Organization/FinancialService, WebSite, BreadcrumbList, BlogPosting, Person, WebApplication (calculators), Course. Keep markup consistent with visible content.
- **Where on Stockstrail:** Sitewide
- **Why it matters:** Helps understanding; not a ranking guarantee.

### 10. FAQ markup: optional

- **What to do:** Since 2023 Google shows FAQ rich results only for a few authoritative government and health sites. Keep visible FAQs for users and AI readers, but do not expect a rich result from FAQPage markup.
- **Where on Stockstrail:** FAQs
- **Why it matters:** Avoid wasted effort.

### 11. Earn real mentions

- **What to do:** Genuine third-party listings and mentions (AMFI/advisor directories, local news, LinkedIn articles, helpful answers on forums). Google warns that seeking inauthentic mentions can be treated as spam.
- **Where on Stockstrail:** Off-site
- **Why it matters:** Corroboration across sources builds authority.

### 12. Non-Google AI engines

- **What to do:** ChatGPT, Perplexity, Claude and Copilot use their own crawlers and indexes. Decide deliberately which crawlers to allow in robots.txt; llms.txt is optional and has no proven effect on Google.
- **Where on Stockstrail:** robots.txt
- **Why it matters:** Be visible where you want to be cited.

### 13. Measure it

- **What to do:** Track queries/impressions in Search Console and Bing Webmaster Tools; monthly, test 10-15 real customer prompts (for example 'how much SIP should I start in Himachal Pradesh') and log whether Stockstrail is cited.
- **Where on Stockstrail:** Process
- **Why it matters:** Turns AEO/GEO into a feedback loop.

## 8. QA summary

- Main-site pages covered: 49
- Learning pages covered: 52
- New titles over 60 characters: 0
- New descriptions (indexable pages) over 160 characters: 0
- Old titles over 60 characters: 70
- Average new title length: 54.4 characters
