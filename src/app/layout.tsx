import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import JsonLd from '@/components/common/JsonLd';
import FloatingWhatsAppButton from "@/components/common/FloatingWhatsAppButton";
import WebMCPRegistry from "@/components/common/WebMCPRegistry";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://www.stockstrail.in"
      : (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
  ),

  title: "Stockstrail - Financial Planning & Investment Guidance",
  description:
    "Achieve financial independence with expert financial planning, investment guidance, and advisory services from Stockstrail.",
  keywords:
    "financial planning, investment, mutual funds, insurance, loan, fixed deposit, stockstrail",
  authors: [{ name: "Stockstrail" }],
  icons: {
    icon: { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    shortcut: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.stockstrail.in",
    siteName: "Stockstrail",
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
  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Stockstrail',
    alternateName: ['Stockstrail Financial', 'Stockstrail India'],
    url: 'https://www.stockstrail.in/',
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FinancialService'],
    name: 'Stockstrail',
    image: 'https://www.stockstrail.in/stockstrail.png',
    '@id': 'https://www.stockstrail.in',
    url: 'https://www.stockstrail.in',
    telephone: '+919736304663',
    email: 'connect@stockstrail.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mata, Chintapurni Rd, near Punjab & Sind Bank, Moien',
      addressLocality: 'Chintpurni',
      addressRegion: 'Himachal Pradesh',
      postalCode: '177110',
      addressCountry: 'IN'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '09:00',
      closes: '20:00'
    },
    sameAs: [
      'https://www.facebook.com/Stockstrail',
      'https://www.instagram.com/stockstrail',
      'https://www.linkedin.com/company/stockstrail'
    ]
  };

  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || "up26ltx46a";
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={inter.variable}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#00ff97" />
        <meta name="msapplication-TileColor" content="#012928" />

        {/* Critical CSS inline styles for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body{background:#012928;color:#fff;margin:0;min-height:100vh;font-family:var(--font-inter),system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
            h1,h2,h3{font-family:var(--font-inter),system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif}
            .min-h-screen{min-height:100vh}
            .bg-stockstrail-bg{background-color:#012928}
            .text-white{color:#fff}
            .text-center{text-align:center}
            .mx-auto{margin-left:auto;margin-right:auto}
            .gradient-text{background:linear-gradient(42deg,#00ff97 0%,#007d42 70.81%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
          `
        }} />

        {/* Favicon - explicit link for Google and all browsers */}
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" sizes="any" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />

        {/* Analytics Bootstrap (GA4 + Microsoft Clarity loaded after first interaction or idle for 0ms TBT) */}
        <Script id="analytics-bootstrap" strategy="afterInteractive">
          {`(function(){
            try {
              var clarityId = ${JSON.stringify(clarityId)};
              var gaId = 'G-NS7B14241Y';
              var loaded = false;
              var opts = { passive: true };

              function removeListeners() {
                window.removeEventListener('pointerdown', load, opts);
                window.removeEventListener('keydown', load, opts);
                window.removeEventListener('scroll', load, opts);
                window.removeEventListener('touchstart', load, opts);
              }

              function load() {
                if (loaded) return;
                loaded = true;
                removeListeners();

                // Load Clarity
                if (typeof window.clarity !== 'function') {
                  window.clarity = function(){ (window.clarity.q = window.clarity.q || []).push(arguments); };
                }
                var sc = document.createElement('script');
                sc.async = true;
                sc.src = 'https://www.clarity.ms/tag/' + clarityId;
                document.head.appendChild(sc);

                // Load Google Analytics 4
                var sga = document.createElement('script');
                sga.async = true;
                sga.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
                document.head.appendChild(sga);

                window.dataLayer = window.dataLayer || [];
                function gtag(){ window.dataLayer.push(arguments); }
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', gaId);
              }

              window.addEventListener('pointerdown', load, opts);
              window.addEventListener('keydown', load, opts);
              window.addEventListener('scroll', load, opts);
              window.addEventListener('touchstart', load, opts);

              // Fallback idle load after 5 seconds
              if ('requestIdleCallback' in window) {
                requestIdleCallback(function(){ setTimeout(load, 4000); });
              } else {
                setTimeout(load, 5000);
              }
            } catch (_) {}
          })();`}
        </Script>
      </head>

      <body className="antialiased">
        <JsonLd data={webSiteSchema} />
        <JsonLd data={localBusinessSchema} />
        <WebMCPRegistry />

        <main className="relative min-h-screen">
          {children}
          <FloatingWhatsAppButton />
        </main>
      </body>
    </html>
  );
}
