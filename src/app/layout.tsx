import type { Metadata } from "next";
import "./globals.css";
import { Inter, Work_Sans, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "600", "700", "800"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://stockstrail.in"
  ),

  title: "Stockstrail - Financial Planning & Investment Guidance",
  description:
    "Achieve financial independence with expert financial planning, investment guidance, and advisory services from Stockstrail.",
  keywords:
    "financial planning, investment, mutual funds, insurance, loan, fixed deposit, stockstrail",
  authors: [{ name: "Stockstrail" }],

  // -----------------------------
  // CLEAN & OPTIMIZED FAVICON SETUP
  // -----------------------------
  icons: {
    icon: [
      { url: "/favicon.ico" }, // classic browser + Google fallback
      { url: "/favicon.svg", type: "image/svg+xml" }, // modern browsers
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" }, // Google recommended size
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // -----------------------------
  // SOCIAL SHARE META
  // -----------------------------
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stockstrail.in",
    title: "Stockstrail - Financial Planning & Investment Guidance",
    description:
      "Achieve financial independence with expert financial planning and investment guidance.",
    images: [
      {
        url: "/og-stockstrail.png", // Must exist in /public
        width: 1100,
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
    images: ["/og-stockstrail.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${workSans.variable} ${montserrat.variable}`}
    >
      <head>
        {/* Enhanced Viewport for iPhone & Mobile Devices */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover"
        />
        
        {/* iPhone & iOS Specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Stockstrail" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Android Chrome */}
        <meta name="theme-color" content="#00ff97" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Windows */}
        <meta name="msapplication-TileColor" content="#012928" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Disable automatic phone number detection */}
        <meta name="format-detection" content="telephone=no" />

        {/* All favicon links are now controlled by metadata.icons */}
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
