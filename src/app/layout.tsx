import type { Metadata } from "next";
import "./globals.css";
import { Inter, Work_Sans, Montserrat } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '600', '700', '800']
});

const workSans = Work_Sans({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600', '700']
});

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://stockstrail.in"),
  title: "Stockstrail - Financial Planning & Investment Guidance",
  description:
    "Achieve financial independence with expert financial planning, investment guidance, and advisory services from Stockstrail.",
  keywords:
    "financial planning, investment, mutual funds, insurance, loan, fixed deposit, stockstrail",
  authors: [{ name: "Stockstrail" }],

  // FAVICONS with multiple formats for cross-browser compatibility
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/stockstrail.png", type: "image/png", sizes: "32x32" },
      { url: "/stockstrail.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/stockstrail.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stockstrail.in",
    title: "Stockstrail - Financial Planning & Investment Guidance",
    description:
      "Achieve financial independence with expert financial planning and investment guidance.",
    images: [
      {
        url: "/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Stockstrail OG Image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stockstrail - Financial Planning & Investment Guidance",
    description:
      "Achieve financial independence with expert financial planning and investment guidance.",
    images: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${workSans.variable} ${montserrat.variable}`}>
      <head>
        {/* Extra meta not included in metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon with cross-browser support */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/stockstrail.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/stockstrail.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/stockstrail.png" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Browser theme color */}
        <meta name="theme-color" content="#00ff97" />
        <meta name="msapplication-TileColor" content="#012928" />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
