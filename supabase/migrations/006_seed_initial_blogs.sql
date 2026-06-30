-- ============================================
-- SEED DATA: Initial Blogs Migration
-- ============================================
-- This script inserts the initial 6 blogs with placeholder content.
-- Images and actual content can be updated later via the Admin Portal.
-- The slugs match the previous URLs exactly to maintain SEO/links.

INSERT INTO public.blogs (
  title, 
  slug, 
  content, 
  published, 
  meta_title
) VALUES 
(
  'Why 2025 is the Best Time to Secure Your Family''s Health Thanks to New Government Benefits',
  'why-2025-is-the-best-time-to-secure-your-family-s-health-thanks-to-new-government-benefits-6293880652213032005',
  '<p><em>Content to be updated via Admin Portal.</em></p>',
  true,
  'Why 2025 is the Best Time to Secure Your Family''s Health'
),
(
  'Why Everyone''s Suddenly Obsessed with Lenskart and Whether You Should Be Too',
  'why-everyone-s-suddenly-obsessed-with-lenskart-and-whether-you-should-be-too-6323739701164428494',
  '<p><em>Content to be updated via Admin Portal.</em></p>',
  true,
  'Why Everyone''s Suddenly Obsessed with Lenskart'
),
(
  'Small Caps are Falling, the Real Damage Happens Elsewhere',
  'small-caps-are-falling-the-real-damage-happens-elsewhere-3664227708800127350',
  '<p><em>Content to be updated via Admin Portal.</em></p>',
  true,
  'Small Caps are Falling, the Real Damage Happens Elsewhere'
),
(
  'Kotak Rural Opportunities Fund NFO Detailed Professional In-Depth Analysis 2025',
  'kotak-rural-opportunities-fund-nfo-detailed-professional-in-depth-analysis-2025-5199697390522161965',
  '<p><em>Content to be updated via Admin Portal.</em></p>',
  true,
  'Kotak Rural Opportunities Fund NFO Analysis 2025'
),
(
  'Best Mutual Fund in North India: A Complete Guide for Investors in Himachal Pradesh, Chandigarh, Delhi NCR, Haryana, UP, Uttarakhand, Jammu',
  'best-mutual-fund-in-north-india-a-complete-guide-for-investors-in-himachal-pradesh-chandigarh-delhi-ncr-haryana-up-uttarakhand-jammu-6205057072082596026',
  '<p><em>Content to be updated via Admin Portal.</em></p>',
  true,
  'Best Mutual Fund in North India: Complete Guide'
),
(
  'Muhurat Trading 2025: Your Auspicious Start to Wealth with Mutual Funds',
  'muhurat-trading-2025-your-auspicious-start-to-wealth-with-mutual-funds-5202069963648076968',
  '<p><em>Content to be updated via Admin Portal.</em></p>',
  true,
  'Muhurat Trading 2025: Start to Wealth with Mutual Funds'
)
ON CONFLICT (slug) DO NOTHING;
