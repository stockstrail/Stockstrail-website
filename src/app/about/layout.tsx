import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Stockstrail | Vikrant Bhardwaj, AMFI ARN-284122',
  description:
    'Meet Vikrant Bhardwaj, founder of Stockstrail, an AMFI-registered mutual fund distributor (ARN-284122) in Himachal Pradesh serving 200+ clients across India.',
  alternates: {
    canonical: 'https://www.stockstrail.in/about',
  },

  openGraph: {
    title: 'About Stockstrail | Vikrant Bhardwaj, AMFI ARN-284122',
    description:
      'Meet Vikrant Bhardwaj, founder of Stockstrail, an AMFI-registered mutual fund distributor (ARN-284122) in Himachal Pradesh serving 200+ clients across India.',
    url: 'https://www.stockstrail.in/about',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1200,
        height: 630,
        alt: 'About Stockstrail | Vikrant Bhardwaj, AMFI ARN-284122',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Stockstrail | Vikrant Bhardwaj, AMFI ARN-284122',
    description:
      'Meet Vikrant Bhardwaj, founder of Stockstrail, an AMFI-registered mutual fund distributor (ARN-284122) in Himachal Pradesh serving 200+ clients across India.',
    images: ['/og-stockstrail.png'],
  },
};

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vikrant Bhardwaj',
  jobTitle: 'Founder & AMFI-Registered Mutual Funds Distributor',
  identifier: 'ARN-284122',
  worksFor: {
    '@type': 'FinancialService',
    name: 'Stockstrail',
    url: 'https://www.stockstrail.in',
  },
  sameAs: [
    'https://www.linkedin.com/in/vikrantbhardwaj/',
    'https://www.instagram.com/stockstrail',
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(founderSchema).replace(/</g, '\\u003c'),
        }}
      />
      {children}
    </>
  );
}

