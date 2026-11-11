import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Stockstrail | Book a Free Financial Planning Call',
  description:
    'Talk to Stockstrail about SIPs, insurance, FDs or loans. Book a free strategy call or message us on WhatsApp, Mon-Sat 9 AM-8 PM IST. No sales pressure.',
  keywords: "contact stockstrail, let's talk, financial experts, mutual funds advice, insurance guidance",
  alternates: {
    canonical: 'https://www.stockstrail.in/lets-talk',
  },
  openGraph: {
    title: 'Contact Stockstrail | Book a Free Financial Planning Call',
    description:
      'Talk to Stockstrail about SIPs, insurance, FDs or loans. Book a free strategy call or message us on WhatsApp, Mon-Sat 9 AM-8 PM IST. No sales pressure.',
    url: 'https://www.stockstrail.in/lets-talk',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1200,
        height: 630,
        alt: 'Contact Stockstrail | Book a Free Financial Planning Call',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Stockstrail | Book a Free Financial Planning Call',
    description:
      'Talk to Stockstrail about SIPs, insurance, FDs or loans. Book a free strategy call or message us on WhatsApp, Mon-Sat 9 AM-8 PM IST. No sales pressure.',
    images: ['/og-stockstrail.png'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: "Let's Talk - Stockstrail Advisory Consultation",
  description: 'Connect directly with Stockstrail founder and AMFI-registered financial advisors.',
  url: 'https://www.stockstrail.in/lets-talk',
  mainEntity: {
    '@type': 'FinancialService',
    name: 'Stockstrail',
    telephone: '+919736304663',
    email: 'connect@stockstrail.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mata, Chintapurni Rd, near Punjab & Sind Bank, Moien',
      addressLocality: 'Chintpurni',
      addressRegion: 'Himachal Pradesh',
      postalCode: '177110',
      addressCountry: 'IN',
    },
  },
};

export default function LetsTalkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}
