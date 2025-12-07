import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://stockstrail.in"),
  title: "Stockstrail - Financial Planning & Investment Guidance",
  description:
    "Achieve financial independence with expert financial planning, investment guidance, and advisory services from Stockstrail.",
  keywords:
    "financial planning, investment, mutual funds, insurance, loan, fixed deposit, stockstrail",
  authors: [{ name: "Stockstrail" }],

  // Resource hints for font performance
  other: {
    "dns-prefetch": ["https://fonts.googleapis.com", "https://fonts.gstatic.com"],
  },

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
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Extra meta not included in metadata */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Preconnect to fonts for early connection establishment */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Load fonts asynchronously with swap strategy - non-blocking */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Work+Sans:wght@300;400;500;600;700&family=Montserrat:wght@400;600;700&display=swap"
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  );
}
