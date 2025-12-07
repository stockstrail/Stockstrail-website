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

  // FAVICONS
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },  
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
        url: "/og-default.png",
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
    images: ["/og-default.png"],
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
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
