import "./globals.css";
import "./showcase.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEFAULT_SOCIAL_IMAGE, SITE_URL } from "@/lib/site";

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
      <body>
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
