import Link from "next/link";
import CopyPromptButton from "./CopyPromptButton";

const promptText =
  "Ultra-realistic cinematic portrait of a stylish young man wearing a premium black outfit, confident natural pose, realistic skin texture, soft directional studio lighting, dramatic shadows, shallow depth of field, premium editorial photography, detailed facial features, natural color grading, high-end DSLR look, clean background composition.";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase());
  return {
    title,
    description: `Explore the ${title} AI photo prompt with usage tips and related prompt ideas.`,
  };
}

export default async function PromptDetailPage({ params }) {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <>
      <header className="siteHeader">
        <div className="container nav">
          <Link className="brand" href="/"><span className="logo">PK</span><span>Prompt <b>King</b></span></Link>
          <nav className="navLinks"><Link href="/#prompts">Explore</Link><Link href="/#categories">Categories</Link><Link href="/#blog">Blog</Link></nav>
          <a className="downloadBtn" href="#">Download App</a>
        </div>
      </header>

      <div className="container crumbs"><Link href="/">Home</Link> / Portrait / {title}</div>

      <main className="container detailLayout">
        <article>
          <Link className="back" href="/">← Back to prompts</Link>
          <h1 className="detailTitle">{title}</h1>
          <p className="lead">A ready-to-copy prompt for creating a premium cinematic portrait with controlled lighting, realistic detail and an editorial photography look.</p>

          <div className="tags"><span>Portrait</span><span>Cinematic</span><span>Trending</span></div>

          <div className="imageCard"><div className="detailImage">Sample image</div></div>

          <section className="contentBox">
            <h2>AI Photo Prompt</h2>
            <div className="promptBox">{promptText}</div>
            <div className="actions">
              <CopyPromptButton text={promptText} />
              <button className="outlineBtn">Open Prompt King App</button>
            </div>
          </section>

          <section className="contentBox">
            <h2>About this prompt</h2>
            <p>This prompt focuses on a polished editorial portrait style with realistic skin detail, a dark fashion look and shallow depth of field.</p>
            <div className="tips">
              <div><b>Best for</b><span>Profile photos, social portraits and cinematic posts.</span></div>
              <div><b>Suggested framing</b><span>Portrait orientation works well for mobile-first content.</span></div>
              <div><b>Customization idea</b><span>Change outfit color, background, pose or camera angle.</span></div>
              <div><b>Usage</b><span>Copy the prompt and use it with a compatible AI tool.</span></div>
            </div>
          </section>

          <section className="contentBox faq">
            <h2>Frequently asked questions</h2>
            <details open><summary>What type of image does this prompt create?</summary><p>A cinematic portrait with realistic detail and editorial lighting.</p></details>
            <details><summary>Can I customize the clothing or background?</summary><p>Yes. You can replace outfit, setting, lighting or camera details.</p></details>
            <details><summary>What aspect ratio should I use?</summary><p>Portrait ratios are a natural fit for this style.</p></details>
            <details><summary>Does Prompt King generate the image?</summary><p>No. Prompt King helps you discover and copy prompts for compatible AI tools.</p></details>
            <details><summary>Can I use this for social media ideas?</summary><p>Yes. The prompt can be adapted for creative social content.</p></details>
          </section>
        </article>

        <aside className="sidebar">
          <div className="sideBox appBox">
            <h3>Get more prompts in the app</h3>
            <p>Browse the latest Prompt King feed and discover new ready-to-copy prompts.</p>
            <a className="playBtn" href="#">▶ Download on Google Play</a>
          </div>
          <div className="sideBox">
            <h3>Related prompts</h3>
            <div className="relatedGrid">
              {["Luxury Portrait","Blue Cinematic","Soft Pink Portrait","Vintage Outdoor"].map(x => <div className="related" key={x}><div className="relImg" /><h4>{x}</h4></div>)}
            </div>
          </div>
        </aside>
      </main>
    </>
  );
}
