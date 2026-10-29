import "./globals.css";
import "./showcase.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopOnRouteChange from "@/components/ScrollToTopOnRouteChange";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-7Q33F5DEST";
const ADSENSE_CLIENT = "ca-pub-8067826014307236";
const defaultTitle = "Prompt King — Discover AI Photo Prompts";
const defaultDescription =
  "Discover ready-to-copy AI photo prompts for portraits, cinematic photos, couples and more.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Prompt King",
  title: {
    default: defaultTitle,
    template: "%s | Prompt King",
  },
  description: defaultDescription,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  other: { "google-adsense-account": ADSENSE_CLIENT },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: "Prompt King",
    type: "website",
    images: [
      {
        url: `${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`,
        alt: "Prompt King — Discover AI Photo Prompts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <ScrollToTopOnRouteChange />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
