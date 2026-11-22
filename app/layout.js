import "./globals.css";
import "./showcase.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

const GA_MEASUREMENT_ID = "G-7Q33F5DEST";
const ADSENSE_CLIENT = "ca-pub-8067826014307236";
const defaultTitle =
  "Prompt King – Free AI Photo Prompts Library | Copy & Paste";
const defaultDescription =
  "Prompt King (promptkingai.com) is the premier free library for discovering, copying, and customizing trending AI photo prompts for portraits, festivals, couples and cinematic looks. Compatible with Gemini, Midjourney & Flux.";

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
  verification: {
    google: "UxQ5mwCTTNxKpXi0rqwP54OoeL-BhUiZl23jDbbgf_o",
  },
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
      <head />
      <body>
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
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
