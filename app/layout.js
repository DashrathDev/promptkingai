import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Prompt King — Discover AI Photo Prompts",
    template: "%s | Prompt King",
  },
  description:
    "Discover ready-to-copy AI photo prompts for portraits, cinematic photos, couples and more.",
  robots: { index: true, follow: true },
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
