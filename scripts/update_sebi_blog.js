const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env.local', 'utf8');
let url = '', key = '';
env.split('\n').forEach(l => {
  if (l.startsWith('NEXT_PUBLIC_SUPABASE_URL=')) url = l.split('=')[1].trim();
  if (l.startsWith('NEXT_PUBLIC_SUPABASE_ANON_KEY=')) key = l.split('=')[1].trim();
});
const supabase = createClient(url, key);

const updatedContent = `# SEBI's New Mutual Fund Nomination Rule 2026: What You Must Do Before September 1

*By Vikrant Bhardwaj, Founder & Principal Advisor at Stockstrail (AMFI Registered Mutual Fund Distributor, ARN-284122) | Updated September 2026*

If you invest in [mutual funds](/services/mutual-funds) or hold a [demat account](/services/open-demat) in India, there's a compliance change worth thirty seconds of your attention today. **SEBI's new mutual fund nomination rule** is now in force — the regulator's revised nomination framework for demat accounts and mutual fund folios took effect on September 1, 2026, and it changes how nomination works across the country.

Here's the short version. SEBI's new mutual fund nomination rule makes it compulsory for every new single-holder demat account or mutual fund folio to carry either a nominee or a formal opt-out declaration — *"leave it blank"* is no longer an option. If you already have an existing folio with no nominee on it, don't panic: your account will not be frozen. You'll start receiving reminders until you make a choice, though, and there are good reasons — mostly for your family's sake — to make that choice sooner rather than later.

This guide walks through what **SEBI's new mutual fund nomination rule** actually changes, who needs to act and by when, and the fastest way to add or update a nominee online, whether you invest directly, through an app, or through a certified [mutual fund distributor](/services/mutual-funds).

It's cross-checked directly against SEBI's official circular rather than second-hand summaries. And if you'd rather not deal with RTA logins and OTP screens yourself, our team can add your nominee for you — free — through our [free strategy consultation](/lets-talk).

---

## What Is SEBI's New Mutual Fund Nomination Rule, Exactly?

On May 29, 2026, SEBI issued **Circular No. SEBI/HO/OIAE/OIAE_IAD-3/P/CIR/2026/12676**, comprehensively overhauling nomination for [demat accounts](/services/open-demat) and [mutual fund folios](/services/mutual-funds). It takes effect from September 1, 2026, and it supersedes 18 older circulars on the subject — some dating back to 2002 — so this single circular is now the rulebook every AMC, RTA, and depository participant has to follow.

This isn't SEBI's first attempt. A January 2025 circular tried to revamp the same framework but created operational headaches of its own — confusing witness rules, unclear online validation steps, and inconsistent forms across fund houses. The May 2026 version is SEBI's fix: simpler paperwork, clearer online methods, and a single standard form used industry-wide.

The underlying problem is massive. Billions of rupees in shares, [mutual fund units](/services/mutual-funds), and dividends sit unclaimed in India's securities markets, largely because investors never registered a nominee. When an investor passes away, families end up chasing succession certificates, legal heir documents, and court orders just to access money that was rightfully theirs. This circular is SEBI's latest attempt to close that gap.

---

## Who Actually Needs to Act — and From When

Not every investor is affected the same way. Here is how the new regulations break down:

### 1. New Investors Opening an Account From September 1
If you open a new single-holder [demat account](/services/open-demat) or [mutual fund folio](/services/mutual-funds) on or after September 1, 2026, you cannot complete the onboarding process without making an explicit choice. You must either:
- Provide verified nominee details (name, relationship, and date of birth if the nominee is a minor), or
- Formally opt out using SEBI's standard declaration form.

*Simply skipping the nomination screen, which used to be common practice, is no longer possible.*

### 2. Existing Investors Without a Nominee
This is the part most investors misunderstand. If your folio or demat account already exists and has no nominee, **it will not be frozen or restricted** because of this circular — there is no penalty or account suspension attached to the September 1 date for existing holdings.

What does change is that your fund house or depository participant must now send you reminder emails and SMS twice a year, plus a login pop-up the first time you log in each day, until you either add a nominee or confirm your declaration. It's a persistent nudge, not a lockout.

### 3. Joint Account and Folio Holders
Nomination remains entirely optional for jointly held [demat accounts](/services/open-demat) and mutual fund folios. If joint holders do wish to add or change a nominee, however, **every single holder must consent** — even on accounts operated on an *"either or survivor"* basis by one person.

---

## SEBI's New Mutual Fund Nomination Rule: Old vs New at a Glance

The table below summarizes the key operational differences before and after September 1, 2026:

| Aspect | Before Sept 1, 2026 | From Sept 1, 2026 |
| :--- | :--- | :--- |
| **Nomination on new single accounts** | Could be left blank | **Mandatory** — nominate or formally opt out |
| **Witness for a physical (wet-signature) form** | Required | **Not required** (unless using thumb impression) |
| **Maximum nominees allowed** | Varied by AMC / DP | **Standardised at 3 nominees** |
| **Online nomination methods** | Not uniformly defined | DSC, Aadhaar e-sign, or OTP-based 2FA |
| **Reminders for folios with no nominee** | Not formally required | Bi-annual SMS/email + daily login pop-up |
| **Existing folios with no nominee** | No formal reminder system | Reminded regularly — but **not frozen or restricted** |

---

## What Information Does Your Nominee Actually Need?

SEBI trimmed the paperwork down considerably. Only three fields are compulsory; everything else is optional for your convenience.

| Nominee Detail | Status | Requirement Note |
| :--- | :--- | :--- |
| **Name of nominee** | **Mandatory** | Exact legal name matching PAN/Aadhaar |
| **Relationship with investor** | **Mandatory** | Spouse, Child, Parent, Sibling, etc. |
| **Date of birth (only if nominee is a minor)** | **Mandatory** | Required to verify legal guardian |
| **Percentage share** | *Optional* | Split equally among nominees if left blank |
| **Mobile number and email** | *Optional* | Recommended for automated notification |
| **KYC identifier (Aadhaar/PAN/etc.)** | *Optional* | Speeds up eventual transmission |
| **Guardian details (for minor nominee)** | *Optional* | Name and address of the legal guardian |

If you are naming more than one nominee and skip the percentage field, the holding is divided equally, and any odd lot unit goes to whichever nominee is listed first.

---

## Your Nominee Is Not Automatically Your Legal Heir

This is the single most misunderstood concept in personal finance, and it matters far more than the compliance deadline itself.

Naming someone as your nominee **does not automatically make them the permanent legal owner** of your investments after you pass away. Under Indian succession law, as the Supreme Court affirmed in *Shakti Yezdani vs Jayanand Jayant Salgaonkar*, a nominee holds the units as a **trustee** on behalf of your legal heirs — not as an absolute beneficial owner. AMFI's official investor guidance highlights the exact same principle.

In practice, nomination makes the immediate transmission and liquidity of your [mutual funds](/services/mutual-funds) smooth and frictionless. However, it does not replace a valid Will. For complete [family financial protection](/services/financial-protection), your nomination and legal estate planning should work hand-in-hand.

---

## How to Add or Update Your Nominee Online

Updating your nomination takes only 3–5 minutes once you know which portal to use:

### A. Updating Your Mutual Fund Nomination
1. Log in to **MF Central**, **CAMS**, or **KFintech** (the RTA servicing your fund house), or use your distributor portal.
2. Verify your identity with your PAN and an OTP.
3. Open the **"Nominee"** or **"Update Nomination"** tab and select the folios you wish to update.
4. Enter the nominee's legal name, relationship, and minor DOB (if applicable). Set percentage allocations if adding up to 3 nominees.
5. Authenticate via OTP sent to your registered mobile/email, Aadhaar e-sign, or Digital Signature Certificate (DSC).
6. Download and save the digital acknowledgment receipt.

### B. Updating Your Demat Account Nomination
1. Log in to your stock broker or depository participant (CDSL/NSDL) app.
2. Navigate to **Account Settings → Profile → Manage Nominees**.
3. Fill in the nominee details and percentage split.
4. Complete the Aadhaar e-sign or OTP verification.
5. If opting for offline physical submission, you can submit the revised one-page form with your wet signature (no witness required).

---

## Demat Nomination vs Mutual Fund Nomination — Not the Same Action

Both fall under this SEBI framework, but they represent two separate records:
- **[Demat Account Nomination](/services/open-demat)**: Covers equity shares, ETFs, gold bonds, and REITs held in your demat account with your broker.
- **[Mutual Fund Folio Nomination](/services/mutual-funds)**: Covers your mutual fund folios held directly with AMCs via RTAs (CAMS/KFintech), even if viewed on common aggregators.

*If you hold both direct mutual fund folios and a demat account, ensure you verify both registries separately.*

---

## Why Add a Nominee Now, Even Without a Freeze Deadline

Even though existing folios won't be frozen, here is why updating your nomination today is essential:

1. **Stops Annoying Reminders**: Twice-yearly SMS, emails, and daily app login pop-ups will continue until a nominee is registered.
2. **Protects Your Family From Legal Delays**: Without a nominee, your legal heirs may spend 6–18 months obtaining court succession certificates, legal heir affidavits, and probate clearances.
3. **Prevents Assets Moving to IEPF**: Unclaimed dividends and units neglected over years risk being transferred to the Investor Education and Protection Fund (IEPF).
4. **Simplifies Future Liquidity**: Keeping your folios compliant ensures seamless eligibility if you ever opt for a [loan against mutual funds](/services/loan) or need urgent redemption.

---

## We'll Add Your Nominee for You — Free

If navigating RTA portals, PAN OTPs, and depository screens feels tedious, let our certified team handle it for you.

As part of our dedicated investor support, **Stockstrail will update your nominees across all mutual fund folios and demat accounts completely free of charge** — whether you are an existing client or just getting started.

- [Book a Free 1-on-1 Strategy Call](/lets-talk)
- [Message our AMFI Certified Advisor on WhatsApp](https://wa.me/919736304663)
- [Calculate your wealth potential with our SIP Calculator](/calculators/sip)
- [Take our free 2-minute Risk Profile Quiz](/check-risk-profile)

While updating your nominee, take a moment to review your complete financial safety net: ensure your [term insurance](/services/insurance), [health insurance](/services/insurance), and [emergency fixed deposits](/services/fixed-deposit) all have active, up-to-date nominees registered.

---

## Frequently Asked Questions

### Will my existing mutual fund folio or demat account be frozen if I don't add a nominee by September 1, 2026?
**No.** SEBI's May 2026 circular does not freeze or restrict existing accounts. Existing folios and demat accounts without a nominee continue operating normally. You will simply receive periodic reminders until you add a nominee.

### Is nomination compulsory when I open a new demat account or mutual fund folio after September 1, 2026?
**Yes, for single-holder accounts.** You must either specify nominee details or formally opt out using the official declaration form. Leaving the field blank is no longer allowed.

### Is nomination mandatory for jointly held mutual fund folios or demat accounts?
**No, it remains optional.** However, if joint holders choose to register or modify a nominee, all joint holders must sign and provide consent.

### How many nominees can I add to one mutual fund folio or demat account?
**Up to three nominees.** You can assign percentage shares to each (e.g. 50%, 25%, 25%). If left blank, holdings are divided equally.

### Do I need a witness to nominate someone on a physical form?
**No.** Standard physical forms with a wet signature no longer require a witness signature. A witness is only required if an investor uses a thumb impression.

### Does my nominee automatically become the legal owner of my mutual fund units after I pass away?
**No.** Under Indian succession law and Supreme Court rulings (*Shakti Yezdani case*), a nominee acts as a legal trustee on behalf of the lawful heirs. Nomination facilitates immediate transfer, but a valid Will defines ultimate inheritance.

### How do I add or change a mutual fund nominee online?
Log in to **MF Central**, **CAMS**, **KFintech**, or your distributor platform, open the Nominee section, fill in the nominee name, relationship, and minor DOB, and authenticate with an OTP or Aadhaar e-sign.

---

*Disclaimer: This article is for informational and educational purposes only and does not constitute formal legal or tax advice. Mutual fund investments are subject to market risks; please read all scheme-related documents carefully before investing. Vikrant Bhardwaj is an AMFI Registered Mutual Fund Distributor (ARN-284122) operating Stockstrail. View our [commission disclosure](/commission-disclosure) and explore our full range of [wealth planning services](/services).*
`;

const updatedFaqs = [
  {
    question: "Will my existing mutual fund folio or demat account be frozen if I don't add a nominee by September 1, 2026?",
    answer: "No. SEBI's May 2026 circular does not freeze or restrict existing accounts. Existing folios and demat accounts without a nominee continue operating normally. You will simply receive periodic reminders until you add a nominee.",
    is_published: true
  },
  {
    question: "Is nomination compulsory when I open a new demat account or mutual fund folio after September 1, 2026?",
    answer: "Yes, for single-holder accounts. You must either specify nominee details or formally opt out using the official declaration form. Leaving the field blank is no longer allowed.",
    is_published: true
  },
  {
    question: "Is nomination mandatory for jointly held mutual fund folios or demat accounts?",
    answer: "No, it remains optional. However, if joint holders choose to register or modify a nominee, all joint holders must sign and provide consent.",
    is_published: true
  },
  {
    question: "How many nominees can I add to one mutual fund folio or demat account?",
    answer: "Up to three nominees. You can assign percentage shares to each (e.g. 50%, 25%, 25%). If left blank, holdings are divided equally.",
    is_published: true
  },
  {
    question: "Do I need a witness to nominate someone on a physical form?",
    answer: "No. Standard physical forms with a wet signature no longer require a witness signature. A witness is only required if an investor uses a thumb impression.",
    is_published: true
  },
  {
    question: "Does my nominee automatically become the legal owner of my mutual fund units after I pass away?",
    answer: "No. Under Indian succession law and Supreme Court rulings (Shakti Yezdani case), a nominee acts as a legal trustee on behalf of the lawful heirs. Nomination facilitates immediate transfer, but a valid Will defines ultimate inheritance.",
    is_published: true
  },
  {
    question: "How do I add or change a mutual fund nominee online?",
    answer: "Log in to MF Central, CAMS, KFintech, or your distributor platform, open the Nominee section, fill in the nominee name, relationship, and minor DOB, and authenticate with an OTP or Aadhaar e-sign.",
    is_published: true
  }
];

async function update() {
  const { data, error } = await supabase
    .from('blogs')
    .update({
      content: updatedContent,
      faqs: updatedFaqs,
      updated_at: new Date().toISOString()
    })
    .eq('slug', 'sebi-mutual-fund-nomination-rule-september-2026')
    .select();

  if (error) {
    console.error('Update error:', error);
  } else {
    console.log('Successfully updated sebi blog! Updated rows:', data.length);
  }
}
update();
