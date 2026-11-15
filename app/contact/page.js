import Link from "next/link";

export const metadata = {
  title: "Contact Us | Prompt King AI",
  description: "Get in touch with the Prompt King AI team for feedback, prompt submissions, app support, or DMCA / copyright inquiries.",
};

export default function ContactPage() {
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
        <Link href="/">Home</Link> / Contact Us
      </div>

      <main className="container" style={{ maxWidth: "860px", padding: "20px 0 60px" }}>
        <article className="contentBox" style={{ marginTop: 0 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "12px" }}>Contact Prompt King AI</h1>
          <p className="lead" style={{ marginBottom: "28px" }}>
            We are always here to help. Whether you have questions regarding our prompt library, the mobile app, feedback, or legal inquiries, feel free to reach out.
          </p>

          <div className="tips" style={{ marginBottom: "32px" }}>
            <div>
              <b>General Support &amp; Feedback</b>
              <span>For prompt suggestions, website inquiries, and feature requests.</span>
              <p style={{ marginTop: "8px", fontWeight: "bold", color: "var(--primary)" }}>contact@promptkingai.com</p>
            </div>
            <div>
              <b>Android App Support</b>
              <span>For bug reports, app sync issues, or Google Play inquiries.</span>
              <p style={{ marginTop: "8px", fontWeight: "bold", color: "var(--primary)" }}>promptking32@gmail.com</p>
            </div>
            <div>
              <b>Copyright &amp; DMCA Notices</b>
              <span>For requests regarding intellectual property or content removal.</span>
              <p style={{ marginTop: "8px", fontWeight: "bold", color: "var(--primary)" }}>dmca@promptkingai.com</p>
            </div>
            <div>
              <b>Expected Response Time</b>
              <span>We usually review and reply to inquiries within 24 to 48 business hours.</span>
              <p style={{ marginTop: "8px", color: "var(--muted)" }}>Monday - Saturday (IST)</p>
            </div>
          </div>

          <h2>Send Us a Direct Message</h2>
          <form style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}>Your Full Name</label>
              <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "12px" }} required />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}>Your Email Address</label>
              <input type="email" placeholder="john@example.com" style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "12px" }} required />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}>Subject</label>
              <input type="text" placeholder="E.g., Prompt feedback, bug report, collaboration" style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "12px" }} required />
            </div>
            <div>
              <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold", fontSize: "14px" }}>Message</label>
              <textarea rows={5} placeholder="Describe your query in detail..." style={{ width: "100%", padding: "12px", border: "1px solid var(--border)", borderRadius: "12px", fontFamily: "inherit" }} required></textarea>
            </div>
            <div>
              <button type="button" className="primaryBtn" style={{ border: 0, cursor: "pointer", width: "100%", padding: "14px", fontSize: "16px" }}>
                Send Message
              </button>
            </div>
          </form>

          <div style={{ marginTop: "36px", padding: "18px", background: "#fbf8ff", borderRadius: "14px", border: "1px solid var(--border)" }}>
            <p style={{ fontSize: "13px", color: "var(--muted)", margin: 0 }}>
              <strong>Important Note:</strong> Please do not submit confidential information, banking details, or account passwords through our contact form. Our support team will never ask for your account password.
            </p>
          </div>
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
