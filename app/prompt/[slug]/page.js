import Link from "next/link";
import CopyPromptButton from "./CopyPromptButton";
import { promptDatabase } from "../promptData";

export async function generateStaticParams() {
  return Object.keys(promptDatabase).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const promptItem = promptDatabase[slug];
  const title = promptItem ? promptItem.title : slug.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase());
  const description = promptItem ? promptItem.lead : `Explore the ${title} AI photo prompt with usage tips and camera settings.`;

  return {
    title: `${title} | AI Photo Prompt | Prompt King`,
    description,
  };
}

export default async function PromptDetailPage({ params }) {
  const { slug } = await params;
  const promptItem = promptDatabase[slug] || {
    title: slug.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase()),
    category: "Portrait",
    tags: ["Portrait", "Cinematic", "Trending"],
    lead: "A ready-to-copy prompt for creating a premium cinematic photo with controlled lighting and realistic detail.",
    promptText: "Ultra-realistic cinematic portrait of a stylish person, natural pose, authentic skin texture with visible micro-pores, directional studio lighting, dramatic rim light, shallow depth of field, 85mm lens f/1.8, editorial photography.",
    negativePrompt: "plastic skin, oversaturated, cartoon, anime, 3d render, extra fingers, deformed hands, airbrushed, low resolution",
    lens: "85mm f/1.8 Prime Lens (Sharp facial focus with soft background bokeh)",
    lighting: "Directional softbox lighting with gentle atmospheric fill",
    palette: "Cinematic, Neutral skin tones, Clean contrast",
    modelFit: "Midjourney v6, Flux.1, Stable Diffusion XL, DALL-E 3",
  };

  const relatedPrompts = Object.entries(promptDatabase)
    .filter(([s]) => s !== slug)
    .slice(0, 4);

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
            <Link href="/blog">Blog &amp; Guides</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <a className="downloadBtn" href="#">Download App</a>
        </div>
      </header>

      <div className="container crumbs">
        <Link href="/">Home</Link> / <Link href="/#prompts">Prompts</Link> / {promptItem.category} / {promptItem.title}
      </div>

      <main className="container detailLayout">
        <article>
          <Link className="back" href="/#prompts">← Back to all prompts</Link>
          <h1 className="detailTitle">{promptItem.title}</h1>
          <p className="lead">{promptItem.lead}</p>

          <div className="tags">
            {promptItem.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="imageCard">
            <div className="detailImage">
              <span>{promptItem.title}</span>
            </div>
          </div>

          {/* Primary Prompt Section */}
          <section className="contentBox">
            <h2>AI Photo Prompt Formula</h2>
            <p>Copy this tested prompt text and paste it into Midjourney, ChatGPT Plus, or Flux:</p>
            <div className="promptBox" style={{ fontSize: "16px", fontWeight: "500", lineHeight: "1.7" }}>
              {promptItem.promptText}
            </div>
            <div className="actions">
              <CopyPromptButton text={promptItem.promptText} />
              <a className="outlineBtn" href="/blog/how-to-use-ai-photo-prompts">How to Use Prompts Guide</a>
            </div>
          </section>

          {/* Negative Prompt Section */}
          <section className="contentBox">
            <h2>Recommended Negative Prompt</h2>
            <p>Use these negative keywords to avoid artificial plastic skin, distorted anatomy, or cartoon styling:</p>
            <div className="promptBox" style={{ background: "#fff5f5", borderColor: "#fcdada", color: "#661f1f" }}>
              {promptItem.negativePrompt}
            </div>
            <div className="actions">
              <CopyPromptButton text={promptItem.negativePrompt} />
            </div>
          </section>

          {/* Photography Technical Breakdown */}
          <section className="contentBox">
            <h2>Photography Parameters &amp; Settings</h2>
            <p>Understanding the technical camera parameters behind this prompt ensures you can adapt it to any subject:</p>
            <div className="tips">
              <div>
                <b>Camera Lens &amp; Optics</b>
                <span>{promptItem.lens}</span>
              </div>
              <div>
                <b>Lighting Setup</b>
                <span>{promptItem.lighting}</span>
              </div>
              <div>
                <b>Recommended Color Palette</b>
                <span>{promptItem.palette}</span>
              </div>
              <div>
                <b>Tested AI Model Compatibility</b>
                <span>{promptItem.modelFit}</span>
              </div>
            </div>
          </section>

          {/* Customization Guide */}
          <section className="contentBox">
            <h2>How to Customize This Prompt</h2>
            <p>You can easily tweak this prompt formula to match your custom creative requirements:</p>
            <ul>
              <li><strong>Outfit &amp; Styling:</strong> Swap clothing terms (e.g. replace &apos;black outfit&apos; with &apos;linen blazer&apos; or &apos;silk saree&apos;).</li>
              <li><strong>Location / Background:</strong> Adjust the backdrop from a minimalist studio to an outdoor cafe, rainy street, or architectural lobby.</li>
              <li><strong>Aspect Ratio:</strong> Append <code>--ar 4:5</code> for Instagram portraits, or <code>--ar 16:9</code> for cinematic landscape thumbnails.</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="contentBox faq">
            <h2>Frequently Asked Questions</h2>
            <details open>
              <summary>Which AI model works best with this prompt?</summary>
              <p>This prompt is optimized for Midjourney v6 and Flux.1, but it also gives excellent results in ChatGPT DALL-E 3 and Stable Diffusion XL.</p>
            </details>
            <details>
              <summary>Can I use this image for commercial projects?</summary>
              <p>Prompt formulas themselves are open creative guidelines. However, you should review the commercial usage policies of the specific AI generator (e.g., Midjourney subscription tier) you use to render the image.</p>
            </details>
            <details>
              <summary>How do I prevent plastic-looking skin?</summary>
              <p>Keep the micro-texture keywords like &apos;visible skin pores&apos;, &apos;natural skin texture&apos;, and avoid fluff words like &apos;8k photorealistic&apos; or &apos;flawless skin&apos;.</p>
            </details>
            <details>
              <summary>Does Prompt King AI generate the images directly?</summary>
              <p>No, Prompt King AI is an educational library and discovery catalog for tested prompt text formulas. You render the images on your preferred AI tool.</p>
            </details>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sideBox appBox">
            <h3>Download Prompt King App</h3>
            <p>Save favorites, get daily prompt notifications, and copy on the go.</p>
            <a className="playBtn" href="#">▶ Download on Google Play</a>
          </div>

          <div className="sideBox">
            <h3>Related Prompts</h3>
            <div className="relatedGrid">
              {relatedPrompts.map(([relSlug, relItem]) => (
                <Link href={`/prompt/${relSlug}`} className="related" key={relSlug} style={{ color: "inherit" }}>
                  <div className="relImg" />
                  <h4>{relItem.title}</h4>
                </Link>
              ))}
            </div>
          </div>

          <div className="sideBox">
            <h3>Prompt Engineering Guides</h3>
            <ul style={{ paddingLeft: "18px", margin: "10px 0", fontSize: "14px", lineHeight: "1.8" }}>
              <li><Link href="/blog/how-to-use-ai-photo-prompts" style={{ color: "var(--primary)" }}>Beginner&apos;s Prompt Guide</Link></li>
              <li><Link href="/blog/best-cinematic-portrait-prompt-ideas" style={{ color: "var(--primary)" }}>Cinematic Portrait Ideas</Link></li>
              <li><Link href="/blog/how-to-improve-an-ai-photo-prompt" style={{ color: "var(--primary)" }}>How to Fix Bad Prompts</Link></li>
            </ul>
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
            <Link href="/contact">Contact</Link>
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
