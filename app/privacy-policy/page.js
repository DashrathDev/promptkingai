import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Prompt King AI",
  description: "Privacy Policy for Prompt King AI. Learn how we handle information, use cookies, and comply with Google AdSense, GDPR, and CCPA policies.",
};

export default function PrivacyPolicyPage() {
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
        <Link href="/">Home</Link> / Privacy Policy
      </div>

      <main className="container" style={{ maxWidth: "860px", padding: "20px 0 60px" }}>
        <article className="contentBox" style={{ marginTop: 0 }}>
          <h1 style={{ fontSize: "36px", marginBottom: "8px" }}>Privacy Policy</h1>
          <p style={{ color: "var(--muted)", marginBottom: "28px" }}>
            <strong>Effective Date:</strong> November 2026 | <strong>Website:</strong> https://promptkingai.com
          </p>

          <p>
            At <strong>Prompt King AI</strong>, accessible from <strong>https://promptkingai.com</strong>, the privacy of our visitors is one of our primary priorities. This Privacy Policy document outlines the types of information that is collected and recorded by Prompt King AI and how we use it.
          </p>

          <h2>1. Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. If you do not agree with any terms, please discontinue using the platform.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information:
          </p>
          <ul>
            <li><strong>Direct Communications:</strong> If you contact us directly (e.g. via support email or our contact forms), we may receive additional information such as your name, email address, message contents, and attachments.</li>
            <li><strong>Log Files:</strong> Prompt King AI follows a standard procedure of using log files. These files log visitors when they visit websites. Information collected includes IP addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and click counts. These are not linked to personally identifiable information.</li>
          </ul>

          <h2>3. Cookies and Web Beacons</h2>
          <p>
            Like any other website, Prompt King AI uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>

          <h2>4. Google AdSense &amp; DoubleClick DART Cookies</h2>
          <p>
            Google is one of our third-party vendors on our site. It also uses cookies, known as <strong>DART cookies</strong>, to serve ads to our site visitors based upon their visit to promptkingai.com and other sites on the internet.
          </p>
          <ul>
            <li>
              Visitors may choose to decline the use of DART cookies by visiting the Google Ad and Content Network Privacy Policy at:{" "}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: "bold" }}>
                https://policies.google.com/technologies/ads
              </a>
            </li>
            <li>
              You can also manage or opt-out of personalized advertising directly through{" "}
              <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)", fontWeight: "bold" }}>
                Google Ads Settings
              </a>.
            </li>
          </ul>

          <h2>5. Third-Party Advertising Partners</h2>
          <p>
            Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Prompt King AI. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see.
          </p>
          <p>
            <strong>Note:</strong> Prompt King AI has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h2>6. Third-Party Privacy Policies</h2>
          <p>
            Prompt King AI&apos;s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information, including their practices and instructions on how to opt-out of certain options.
          </p>

          <h2>7. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have rights to request disclosure of categories of personal data collected, request deletion of collected personal data, and ensure their personal data is not sold. Prompt King AI does not sell any personal consumer data.
          </p>

          <h2>8. GDPR Data Protection Rights</h2>
          <p>
            We want to ensure you are fully aware of all of your data protection rights. Every user is entitled to:
          </p>
          <ul>
            <li><strong>Right to access:</strong> You have the right to request copies of your personal data.</li>
            <li><strong>Right to rectification:</strong> You have the right to request correction of inaccurate information.</li>
            <li><strong>Right to erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
            <li><strong>Right to data portability:</strong> You have the right to request transfer of your collected data.</li>
          </ul>

          <h2>9. Children&apos;s Privacy Protection</h2>
          <p>
            Protecting children while using the internet is an essential priority. Prompt King AI does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided such information, please contact us immediately, and we will promptly remove it from our records.
          </p>

          <h2>10. Contacting Us</h2>
          <p>
            If you have any questions about this Privacy Policy, cookie practices, or our data handling, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> promptking32@gmail.com | contact@promptkingai.com<br />
            <strong>Website:</strong> https://promptkingai.com/contact
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
