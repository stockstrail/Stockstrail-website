import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Stockstrail | Financial Planning & Investment Guidance in India',

  description:
    'Learn about Stockstrail, an AMFI-registered practice founded by Vikrant Bhardwaj (ARN-284122) to make financial planning and investment decisions easier to understand, with goal-focused guidance across India.',

  alternates: {
    canonical: 'https://www.stockstrail.in/about',
  },

  openGraph: {
    title: 'About Stockstrail | Financial Planning & Investment Guidance in India',

    description:
      'Learn about Stockstrail, an AMFI-registered practice founded by Vikrant Bhardwaj (ARN-284122) to make financial planning and investment decisions easier to understand, with goal-focused guidance across India.',

    url: 'https://www.stockstrail.in/about',

    siteName: 'Stockstrail',

    locale: 'en_IN',

    type: 'website',

    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'About Stockstrail - Financial Planning & Investment Guidance',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'About Stockstrail | Financial Planning & Investment Guidance in India',

    description:
      'Learn about Stockstrail, an AMFI-registered practice founded by Vikrant Bhardwaj (ARN-284122) to make financial planning and investment decisions easier to understand across India.',

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

