import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Guide Not Found | Prompt King AI",
    };
  }
  return {
    title: `${post.title} | Prompt King AI`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

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
        <Link href="/">Home</Link> / <Link href="/blog">Guides</Link> / {post.title}
      </div>

      <main className="container detailLayout" style={{ padding: "20px 0 60px" }}>
        <article>
          <Link className="back" href="/blog">← Back to all guides</Link>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
            <span className="eyebrow" style={{ fontSize: "11px", padding: "4px 10px" }}>{post.category}</span>
            <span style={{ fontSize: "13px", color: "var(--muted)" }}>{post.readTime} • {post.date}</span>
          </div>
          <h1 className="detailTitle" style={{ fontSize: "clamp(28px, 4vw, 42px)", marginBottom: "16px" }}>
            {post.title}
          </h1>
          <p className="lead" style={{ fontSize: "18px", color: "var(--muted)", marginBottom: "28px" }}>
            {post.summary}
          </p>

          <div className="contentBox" style={{ marginTop: 0, lineHeight: "1.8", color: "#2d2833" }}>
            {post.content.split("\n\n").map((paragraph, index) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith("## ")) {
                return <h2 key={index} style={{ fontSize: "24px", margin: "32px 0 14px", color: "var(--dark)" }}>{trimmed.replace("## ", "")}</h2>;
              }
              if (trimmed.startsWith("### ")) {
                return <h3 key={index} style={{ fontSize: "19px", margin: "24px 0 10px", color: "var(--text)" }}>{trimmed.replace("### ", "")}</h3>;
              }
              if (trimmed.startsWith("> *")) {
                return (
                  <blockquote key={index} style={{ background: "#f6f0fc", borderLeft: "4px solid var(--primary)", padding: "14px 18px", borderRadius: "8px", margin: "18px 0", fontStyle: "italic" }}>
                    {trimmed.replace(/^> \*/, "").replace(/\*$/, "")}
                  </blockquote>
                );
              }
              if (trimmed.startsWith("* ") || trimmed.startsWith("1. ")) {
                const items = trimmed.split("\n").filter(Boolean);
                return (
                  <ul key={index} style={{ paddingLeft: "24px", margin: "14px 0" }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ marginBottom: "8px" }}>
                        {item.replace(/^(\* |\d+\. )/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (trimmed === "---") {
                return <hr key={index} style={{ border: 0, borderTop: "1px solid var(--border)", margin: "32px 0" }} />;
              }
              return <p key={index} style={{ marginBottom: "16px" }}>{trimmed}</p>;
            })}

            <div style={{ marginTop: "40px", padding: "20px", background: "#f8f5fc", borderRadius: "16px", border: "1px solid var(--border)" }}>
              <h3 style={{ margin: "0 0 8px", fontSize: "17px" }}>Editorial Note from Prompt King</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--muted)" }}>
                This guide was researched and published by the Prompt King AI editorial team. We test our prompt strategies across Midjourney, ChatGPT DALL-E, and Stable Diffusion to provide tested recommendations for creators.
              </p>
            </div>
          </div>
        </article>

        <aside className="sidebar">
          <div className="sideBox appBox">
            <h3>Download Prompt King App</h3>
            <p>Get ready-to-copy prompts in your pocket with the official companion Android app.</p>
            <a className="playBtn" href="#">▶ Download on Google Play</a>
          </div>

          <div className="sideBox">
            <h3>More Guides &amp; Tutorials</h3>
            <div style={{ display: "grid", gap: "12px", marginTop: "12px" }}>
              {otherPosts.map((op) => (
                <div key={op.slug} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "10px" }}>
                  <small style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "11px" }}>{op.category}</small>
                  <h4 style={{ margin: "4px 0", fontSize: "14px" }}>
                    <Link href={`/blog/${op.slug}`} style={{ color: "inherit" }}>
                      {op.title}
                    </Link>
                  </h4>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>{op.readTime}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
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
