import Link from "next/link";

export const metadata = {
  title: "About Us | Prompt King AI",
  description: "Learn about Prompt King AI, our mission, our prompt engineering testing process, and how we help creators make stunning AI photos.",
};

export default function AboutPage() {
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
        <Link href="/">Home</Link> / About Us
      </div>

      <main className="container" style={{ maxWidth: "860px", padding: "20px 0 60px" }}>
        <article className="contentBox" style={{ marginTop: 0 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>About Prompt King AI</h1>
          <p className="lead" style={{ marginBottom: "24px" }}>
            Connecting human imagination with generative AI to make prompt engineering simple, structured, and accessible for everyone.
          </p>

          <p>
            Welcome to <strong>Prompt King AI</strong> (promptkingai.com) — a dedicated platform and discovery hub for tested, high-fidelity AI photography prompts. We serve digital creators, photographers, graphic designers, social media editors, and AI enthusiasts across the globe.
          </p>

          <h2>Our Mission</h2>
          <p>
            With the rapid rise of modern image synthesis models like <strong>Midjourney, Stable Diffusion, Google Gemini, DALL-E 3, and Flux</strong>, creators often struggle with generic or distorted results. Small variations in lighting keywords, camera lens parameters, and framing terms can make the difference between an amateur snapshot and an editorial masterpiece.
          </p>
          <p>
            Our mission is to eliminate that guesswork. We curate, categorize, and test creative text prompts so you can achieve cinematic portraits, cultural styling, high-fashion editorials, and artistic concepts with a single click.
          </p>

          <h2>Our Testing &amp; Editorial Process (E-E-A-T Standards)</h2>
          <p>
            Every prompt featured on <strong>Prompt King AI</strong> goes through a structured human review process before publication:
          </p>
          <ul>
            <li><strong>Model Compatibility Testing:</strong> We benchmark prompts across multiple generation engines to verify consistency and identify optimal aspect ratios.</li>
            <li><strong>Parameter Breakdown:</strong> Instead of vague descriptions, our prompts specify lighting temperature (e.g., golden hour, dual-tone neon), focal lengths (35mm, 85mm portrait), and color grading profiles.</li>
            <li><strong>Ethical &amp; Safe Prompts:</strong> We strictly avoid deceptive, non-consensual, or malicious prompt engineering. We promote artistic expression, cultural aesthetics, and digital photography techniques.</li>
          </ul>

          <h2>What Makes Us Unique?</h2>
          <div className="features" style={{ margin: "24px 0", gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="feature">
              <span>🎯</span>
              <h3>Pre-Tested Accuracy</h3>
              <p>Prompts crafted to minimize AI hallucinations, unnatural skin textures, and weird hands.</p>
            </div>
            <div className="feature">
              <span>📱</span>
              <h3>Mobile Companion App</h3>
              <p>Our official Android app on Google Play makes prompt bookmarking and one-tap copying seamless on mobile.</p>
            </div>
            <div className="feature">
              <span>📚</span>
              <h3>Educational Guides</h3>
              <p>In-depth tutorials covering camera lenses, lighting styles, face consistency, and negative prompt formulas.</p>
            </div>
            <div className="feature">
              <span>✨</span>
              <h3>Rich Cultural Variety</h3>
              <p>From modern cyberpunk and studio portraits to royal festive attire and vintage retros, we cater to all styles.</p>
            </div>
          </div>

          <h2>Our Core Values &amp; Transparency</h2>
          <p>
            Prompt King AI is an independent discovery and educational resource. We do not generate or render images directly on our servers; rather, we provide creative instructional text prompts that users can input into compatible third-party generative tools.
          </p>

          <h2>Get in Touch</h2>
          <p>
            Have feedback, a prompt suggestion, or want to collaborate? We would love to hear from you:
          </p>
          <p>
            <strong>Website:</strong> https://promptkingai.com<br />
            <strong>Official Support:</strong> contact@promptkingai.com<br />
            <strong>App Inquiries:</strong> promptking32@gmail.com
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
