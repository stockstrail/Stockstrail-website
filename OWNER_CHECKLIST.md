# Stockstrail.in — Owner Manual Action Checklist

The code fixes and technical SEO infrastructure have been fully implemented, verified, and deployed.
Below are the **Owner-Only Manual Steps** required in Google Search Console, Google Business Profile, and Bing Webmaster Tools to complete the permanent recovery:

---

### 1. Google Search Console (GSC)
- [ ] **Verify a Domain Property (`stockstrail.in`) via DNS TXT**:
  - In GSC, make sure you have verified a **Domain Property** (e.g. `stockstrail.in`), not just a URL-prefix property. A Domain property covers both `stockstrail.in` and `www.stockstrail.in` under one dashboard.
- [ ] **Resubmit Sitemaps in GSC**:
  - In GSC, navigate to **Indexing → Sitemaps**.
  - Remove any old or stuck sitemaps.
  - Submit: `https://www.stockstrail.in/sitemap.xml`
  - Submit: `https://www.stockstrail.in/feed.xml` (or `rss.xml`)
  - *Note:* Once submitted, you never need to manually submit them again. The new on-demand pipeline updates Google automatically.
- [ ] **Validate Fixes in Page Indexing**:
  - Go to **Indexing → Pages**.
  - If you see any "Page with redirect" errors stemming from the previous non-www sitemap entries, click into the issue and click **"Validate Fix"**.
- [ ] **Request URL Inspection & Re-Indexing for Homepage & Key Posts**:
  - Use the top search bar in GSC ("Inspect any URL in...") and test:
    1. `https://www.stockstrail.in/`
    2. `https://www.stockstrail.in/services`
    3. `https://www.stockstrail.in/blog`
  - Click **"Test Live URL"** → **"Request Indexing"** to immediately cue Googlebot to fetch the new canonical and schema markup.
- [ ] **Confirm No Manual Actions or Security Issues**:
  - Navigate to **Security & Manual Actions** in GSC.
  - Confirm both "Manual actions" and "Security issues" show a green checkmark ("No issues detected").

---

### 2. Google Business Profile (GBP) & Social Alignment
- [ ] **Update Website URL in Google Business Profile**:
  - Open your Google Business Profile dashboard for **Stockstrail**.
  - Check the **Website** field: change it from `https://stockstrail.in` to the exact canonical URL:
    `https://www.stockstrail.in/` (no tracking parameters, matching the canonical domain).
- [ ] **Update Website URL on LinkedIn Company Page**:
  - Go to your Stockstrail LinkedIn Company Page → Edit Page → Details.
  - Set the Website URL to: `https://www.stockstrail.in/`.
- [ ] **Ensure NAP Uniformity Everywhere**:
  - Ensure the business Name, Address, and Phone number are identical across GBP, website footer, and LinkedIn:
    - **Name:** Stockstrail
    - **Address:** Mata, Chintapurni Rd, near Punjab & Sind Bank, Moien, Chintpurni, Himachal Pradesh 177110
    - **Phone:** +91 97363 04663
    - **Email:** connect@stockstrail.in

---

### 3. Bing Webmaster Tools & IndexNow
- [ ] **Add Site to Bing Webmaster Tools**:
  - Add `https://www.stockstrail.in` to Bing Webmaster Tools (you can import directly from Google Search Console).
- [ ] **Verify IndexNow**:
  - The IndexNow key is already generated and hosted at:
    `https://www.stockstrail.in/c07a4a9840eb4243b74fa8764045f4df.txt`
  - In Bing Webmaster Tools, check the **IndexNow** tab to confirm it recognizes the key file. Whenever you publish a new blog in the admin panel, IndexNow will automatically notify Bing, Yandex, and Seznam.

---

### 4. Supabase (Free Tier Maintenance)
- [ ] **Monitor Database Activity**:
  - The keep-alive cron job is now configured in `vercel.json` to ping `/api/cron/keep-alive` every day at 02:00 UTC, preventing free-tier dormancy.
  - If your database traffic grows significantly, consider upgrading from Supabase Free to Supabase Pro to permanently remove connection pooling and dormancy limits.
