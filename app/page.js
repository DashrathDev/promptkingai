import Link from "next/link";
import { blogPosts } from "./blog/blogData";

const prompts = [
  ["cinematic-black-outfit-portrait", "Cinematic Black Outfit Portrait", "Portrait", "t1"],
  ["vintage-outdoor-couple-photo", "Vintage Outdoor Couple Photo", "Couple", "t2"],
  ["luxury-blue-editorial-portrait", "Luxury Blue Editorial Portrait", "Cinematic", "t3"],
  ["traditional-golden-festive-look", "Traditional Golden Festive Look", "Festival", "t4"],
  ["moody-purple-studio-portrait", "Moody Purple Studio Portrait", "Portrait", "t5"],
  ["green-nature-cinematic-photo", "Green Nature Cinematic Photo", "Outdoor", "t6"],
  ["soft-pink-princess-portrait", "Soft Pink Princess Portrait", "Girls", "t7"],
  ["blue-sky-fashion-editorial", "Blue Sky Fashion Editorial", "Boys", "t8"],
];

export default function HomePage() {
  const featuredBlogPosts = blogPosts.slice(0, 3);

  return (
    <>
      <header className="siteHeader">
        <div className="container nav">
          <Link className="brand" href="/">
            <span className="logo">PK</span>
            <span>Prompt <b>King</b></span>
          </Link>
          <nav className="navLinks">
            <a href="#prompts">Explore</a>
            <a href="#categories">Categories</a>
            <Link href="/blog">Blog &amp; Guides</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="downloadBtn" href="#">Download App</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">✦ Fresh prompts added regularly</div>
              <h1>Discover <span>Trending AI Photo Prompts</span></h1>
              <p>
                Explore ready-to-copy prompts for cinematic portraits, couples,
                traditional looks, festivals and more. Find a style you love,
                copy the prompt, and use it in your preferred compatible AI tool.
              </p>
              <div className="heroActions">
                <a className="primaryBtn" href="#prompts">Explore Prompts</a>
                <a className="secondaryBtn" href="#">Get Prompt King App</a>
              </div>
            </div>

            <div className="heroCard">
              <div className="phone">
                <div className="phoneTop"><b>Prompt King</b><span>⌕</span></div>
                <div className="mockImage" />
                <div className="mockBody">
                  <strong>Cinematic Purple Portrait Prompt</strong>
                  <div className="mockTags"><span>Trending</span><span>Portrait</span></div>
                  <div className="copyBar"><span>Ready-to-copy prompt</span><b>COPY</b></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container searchWrap">
          <div className="searchBox">
            <span>⌕</span>
            <input placeholder="Search portrait, couple, cinematic, festival..." />
            <button>Search</button>
          </div>
        </div>

        <section id="categories">
          <div className="container">
            <div className="sectionHead">
              <div><h2>Browse Categories</h2><p>Jump straight into the style you want.</p></div>
            </div>
            <div className="chips">
              {["Trending","Portrait","Boys","Girls","Couple","Cinematic","Traditional","Festival"].map((x,i)=>
                <button className={"chip "+(i===0?"active":"")} key={x}>{x}</button>
              )}
            </div>
          </div>
        </section>

        <section id="prompts">
          <div className="container">
            <div className="sectionHead">
              <div><h2>Trending Prompts</h2><p>Popular AI photo prompt ideas from the Prompt King feed.</p></div>
              <a className="viewAll" href="#prompts">View all →</a>
            </div>
            <div className="promptGrid">
              {prompts.map(([slug,title,cat,cls]) => (
                <Link href={`/prompt/${slug}`} className="promptCard" key={slug}>
                  <div className={`thumb ${cls}`}><span className="badge">Trending</span></div>
                  <div className="cardBody">
                    <div className="cardTitle">{title}</div>
                    <div className="meta"><span>{cat}</span><b>View Prompt →</b></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="sectionHead">
              <div><h2>Built for Prompt Discovery</h2><p>Simple tools to help you find and use prompt ideas faster.</p></div>
            </div>
            <div className="features">
              <div className="feature"><span>⚡</span><h3>Trending Prompt Feed</h3><p>Discover fresh photo prompt ideas in an easy visual feed.</p></div>
              <div className="feature"><span>⧉</span><h3>One-Tap Copy</h3><p>Copy a ready-to-use prompt quickly and use it in a compatible AI tool.</p></div>
              <div className="feature"><span>⌕</span><h3>Easy Categories</h3><p>Browse portrait, couple, cinematic, festival and more.</p></div>
              <div className="feature"><span>↗</span><h3>Open in Your AI Tool</h3><p>Copy a prompt and use it with your preferred compatible AI tool.</p></div>
            </div>

            <div className="cta">
              <div>
                <h2>More prompts in your pocket.</h2>
                <p>Get the Prompt King app on Google Play and browse the latest prompt feed anytime.</p>
                <a className="playBtn" href="#">▶ Download on Google Play</a>
              </div>
              <div className="ctaArt" />
            </div>
          </div>
        </section>

        <section id="blog">
          <div className="container">
            <div className="sectionHead">
              <div>
                <h2>Prompt Guides &amp; Tutorials</h2>
                <p>Helpful articles for getting more from AI photo prompts.</p>
              </div>
              <Link className="viewAll" href="/blog">View all guides →</Link>
            </div>
            <div className="blogGrid">
              {featuredBlogPosts.map((post) => (
                <article className="blogCard" key={post.slug} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <small>{post.category}</small>
                    <h3 style={{ margin: "8px 0 10px", fontSize: "18px" }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "inherit" }}>
                        {post.title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: "14px", lineHeight: "1.6" }}>{post.summary}</p>
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: "var(--primary)", fontWeight: "bold", fontSize: "14px" }}>
                      Read Guide →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footerGrid">
          <div>
            <Link className="brand" href="/"><span className="logo">PK</span><span>Prompt <b>King</b></span></Link>
            <p>Discover trending, ready-to-copy AI photo prompts.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#prompts">Trending Prompts</a>
            <a href="#categories">Categories</a>
            <Link href="/blog">Guides &amp; Blog</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <a href="#features">Why Prompt King</a>
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
