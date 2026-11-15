import Link from "next/link";
import { blogPosts } from "./blogData";

export const metadata = {
  title: "AI Photo Prompt Guides & Tutorials | Prompt King AI",
  description: "Learn how to write better AI prompts, master cinematic lighting, camera angles, and maintain face consistency with expert tutorials.",
};

export default function BlogListingPage() {
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
        <Link href="/">Home</Link> / Guides &amp; Blog
      </div>

      <main className="container" style={{ padding: "20px 0 60px" }}>
        <div className="sectionHead" style={{ marginBottom: "34px" }}>
          <div>
            <h1 style={{ fontSize: "38px", margin: "0 0 10px" }}>Prompt King Guides &amp; Tutorials</h1>
            <p style={{ fontSize: "17px", color: "var(--muted)" }}>
              In-depth articles, camera settings breakdowns, and techniques to help you master AI photography and prompt engineering.
            </p>
          </div>
        </div>

        <div className="blogGrid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {blogPosts.map((post) => (
            <article key={post.slug} className="blogCard" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <small style={{ color: "var(--primary)", fontWeight: "800", textTransform: "uppercase" }}>{post.category}</small>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontSize: "20px", lineHeight: "1.3", margin: "0 0 12px" }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "inherit" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6", margin: "0 0 18px" }}>
                  {post.summary}
                </p>
              </div>
              <div>
                <Link href={`/blog/${post.slug}`} className="viewAll" style={{ fontSize: "14px", fontWeight: "700" }}>
                  Read Full Guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
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
