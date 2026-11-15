import Link from "next/link";

export const metadata = {
  title: "Disclaimer | Prompt King AI",
  description: "Disclaimer for Prompt King AI regarding third-party AI image generators, trademarks, and informational prompt content.",
};

export default function DisclaimerPage() {
  return (
    <>
      <header className="siteHeader">
        <div className="container nav">
          <Link className="brand" href="/">
            <span className="logo">PK</span>
            <span>Prompt <b>King</b></span>
          </Link>
          <nav className="navLinks">
            <Link href="/#prompts">Explore</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/blog">Blog & Guides</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="downloadBtn" href="#">Download App</a>
        </div>
      </header>

      <div className="container crumbs">
        <Link href="/">Home</Link> / Disclaimer
      </div>

      <main className="container" style={{ maxWidth: "860px", padding: "20px 0 60px" }}>
        <article className="contentBox" style={{ marginTop: 0 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>Disclaimer</h1>
          <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
            <strong>Last Updated:</strong> November 2026 | <strong>Website:</strong> https://promptkingai.com
          </p>

          <h2>1. General Information Only</h2>
          <p>
            All the information on this website — <strong>https://promptkingai.com</strong> — is published in good faith and for general informational, educational, and creative inspiration purposes only. Prompt King AI does not make any warranties about the completeness, reliability, or absolute accuracy of this information.
          </p>

          <h2>2. Third-Party Trademarks &amp; Affiliation</h2>
          <p>
            Any product names, logos, brands, and other trademarks or images featured or referred to within the website (including but not limited to <em>Midjourney, OpenAI, ChatGPT, DALL-E, Stable Diffusion, Google Gemini, Flux, and Android Google Play</em>) are the property of their respective trademark holders.
          </p>
          <p>
            Prompt King AI is not affiliated with, endorsed by, sponsored by, or officially connected with Midjourney Inc., OpenAI LLC, Google LLC, Stability AI, or any other third-party AI service provider. Any references to these tools are solely for descriptive and tutorial purposes to explain tool compatibility.
          </p>

          <h2>3. External Links Disclaimer</h2>
          <p>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites.
          </p>

          <h2>4. User Responsibility &amp; Generated Output</h2>
          <p>
            Any action you take upon the information you find on this website (Prompt King AI) is strictly at your own risk. Prompt King AI will not be liable for any losses and/or damages in connection with the use of our website or third-party image generation outputs.
          </p>

          <h2>5. Consent &amp; Inquiries</h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree to its terms. If you require any more information or have questions about our site&apos;s disclaimer, please contact us at <strong>contact@promptkingai.com</strong>.
          </p>
        </article>
      </main>

      <footer>
        <div className="container footerGrid">
          <div>
            <Link className="brand" href="/"><span className="logo">PK</span><span>Prompt <b>King</b></span></Link>
            <p>Discover trending, ready-to-copy AI photo prompts.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link href="/#prompts">Trending Prompts</Link>
            <Link href="/#categories">Categories</Link>
            <Link href="/blog">Guides &amp; Blog</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/#features">Why Prompt King</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
        </div>
        <div className="container copyright">© 2026 Prompt King AI. All rights reserved.</div>
      </footer>
    </>
  );
}
