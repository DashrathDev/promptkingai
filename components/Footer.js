import Link from "next/link";
import Brand from "./Brand";
import { PLAY_STORE_URL } from "@/lib/site";
import { Mail, Sparkles, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";

const footerSections = [
  {
    title: "Popular Styles",
    links: [
      ["Trending Prompts", "/category/trending"],
      ["Festival Specials", "/category/festival"],
      ["Romantic Couple", "/category/couple"],
      ["Girls Portraits", "/category/girls"],
      ["All Categories", "/categories"],
      ["Latest Additions", "/latest"],
    ],
  },
  {
    title: "Guides & Learning",
    links: [
      ["AI Photo Guides", "/blog"],
      ["Camera Angles & Framing", "/blog/ai-photo-prompt-camera-angles-framing"],
      ["Cinematic Lighting Ideas", "/blog/cinematic-portrait-prompt-ideas"],
      ["How to Use AI Prompts", "/blog/how-to-use-ai-photo-prompts"],
      ["Frequently Asked Questions", "/faq"],
      ["Explore All Prompts", "/explore"],
    ],
  },
  {
    title: "Company & Trust",
    links: [
      ["About Us", "/about"],
      ["Editorial Policy", "/editorial-policy"],
      ["Contact Support", "/contact"],
      ["DMCA / Copyright", "/dmca"],
      ["Google Play App", PLAY_STORE_URL],
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      ["Privacy Policy", "/privacy-policy"],
      ["Terms & Conditions", "/terms"],
      ["Disclaimer", "/disclaimer"],
      ["Cookie Policy", "/cookie-policy"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Main Grid */}
      <div className="container footer-grid">
        {/* Brand & Mission Column */}
        <div className="footer-brand-col">
          <Brand />
          <p className="footer-bio">
            Your premier directory for production-ready AI photo prompts.
            Curated, tested, and crafted for creators, photographers, and visual storytellers.
          </p>

          <div className="footer-badges">
            <span className="footer-badge">
              <Sparkles size={15} /> Tested on Gemini, Midjourney & Flux
            </span>
            <span className="footer-badge">
              <ShieldCheck size={15} /> Original Tested Formulas
            </span>
          </div>

          <div className="footer-contact-box">
            <a href="mailto:contact@promptkingai.com" className="footer-email-link">
              <Mail size={16} />
              <span>contact@promptkingai.com</span>
            </a>
            <a href={PLAY_STORE_URL} className="footer-app-cta" target="_blank" rel="noopener noreferrer">
              <span>Get Android App</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="footer-nav-columns">
          {footerSections.map((section) => (
            <div key={section.title} className="footer-col">
              <h3 className="footer-heading">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map(([title, url]) => (
                  <li key={title}>
                    <Link
                      href={url}
                      {...(url.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance & E-E-A-T Disclaimer Banner */}
      <div className="container footer-disclaimer-wrap">
        <div className="footer-disclaimer-card">
          <p className="footer-disclaimer-text">
            <strong>Disclaimer:</strong> Prompt King is an independent creative prompt catalog and educational resource. All prompts and style directions are created for artistic experimentation with compatible generative AI tools (such as Google Gemini, Midjourney, Flux.1, and ChatGPT). Prompt King is not affiliated with or endorsed by Midjourney Inc., Google LLC, Black Forest Labs, or OpenAI. All third-party trademarks and logos belong to their respective owners.
          </p>
          <p className="footer-author-text">
            Curated with editorial integrity by <strong>Dashrath (Creative Lead)</strong> &bull; Based in Karnataka, India.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-wrap">
        <div className="container footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} <strong>Prompt King</strong>. All rights reserved.
          </p>
          <div className="footer-legal-quick">
            <Link href="/privacy-policy">Privacy</Link>
            <span className="footer-dot">&bull;</span>
            <Link href="/terms">Terms</Link>
            <span className="footer-dot">&bull;</span>
            <Link href="/disclaimer">Disclaimer</Link>
            <span className="footer-dot">&bull;</span>
            <Link href="/contact">Contact</Link>
          </div>
          <p className="footer-love">
            Made with <Heart size={13} className="heart-icon" /> for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
