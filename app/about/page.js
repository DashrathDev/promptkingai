import Link from "next/link";
import { seo } from "@/lib/site";

export const metadata = seo(
  "About Prompt King",
  "Learn about Prompt King, founded by Dashrath in Karnataka, India. Discover tested, culturally accurate, and cinematic AI photo prompts for creators worldwide.",
  "/about",
);

export default function About() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">ABOUT PROMPT KING</span>
      <h1>Crafted for Creators. Tested for Realism.</h1>
      <p className="lead">
        Prompt King is an Indian AI prompt discovery platform and creative hub,
        founded by Dashrath in Karnataka, India. We help photographers, digital
        artists, and social media creators turn ideas into breathtaking AI
        photos using tested, ready-to-copy prompt formulas.
      </p>

      <section>
        <h2>1. The Story Behind Prompt King</h2>
        <p>
          Prompt King was started with a simple observation: modern generative
          AI models like <strong>Google Gemini (Imagen 3), Midjourney, ChatGPT (DALL-E 3), and Flux</strong> have
          immense creative power, but getting photorealistic, consistent, and
          culturally authentic results is frustratingly difficult.
        </p>
        <p>
          Too often, mainstream AI tools produce distorted hands, plastic
          wax-like skin, or westernized interpretations of traditional Indian
          festivals, attire, and rituals. Creators were wasting hours guessing
          obscure keywords.
        </p>
        <p>
          To solve this, <strong>Dashrath</strong>, a passionate prompt researcher
          and digital creator based in <strong>Karnataka, India</strong>, began
          systematically benchmarking camera lenses, lighting ratios, and
          negative prompts. What began as a personal notebook of tested prompt
          recipes has grown into <strong>PromptKingAI.com</strong> — a free,
          open discovery resource for creators worldwide.
        </p>
      </section>

      <section>
        <h2>2. Who We Are (Leadership &amp; E-E-A-T)</h2>
        <div style={{ background: "var(--wash)", border: "1px solid var(--border)", borderRadius: "16px", padding: "24px", margin: "20px 0" }}>
          <h3 style={{ margin: "0 0 6px", fontSize: "19px", color: "var(--deep)" }}>Dashrath</h3>
          <p style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: "600", color: "var(--purple)" }}>
            Founder &amp; Lead AI Prompt Researcher | Karnataka, India
          </p>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.7" }}>
            Dashrath oversees prompt curation, parameter benchmarking, and
            editorial guidelines at Prompt King. With a deep passion for digital
            photography and generative AI, he tests prompt formulas across multiple
            AI engines to ensure authentic skin tones, natural lighting, and
            cultural fidelity for the global creative community.
          </p>
        </div>
      </section>

      <section>
        <h2>3. What You Can Discover on Prompt King</h2>
        <p>
          PromptKingAI.com brings together prompts across a rich spectrum of
          creative styles and photography genres:
        </p>
        <ul>
          <li><strong>Cultural &amp; Festive Concepts:</strong> Authentic prompts for traditional festivals (Diwali, Navratri, Eid), royal weddings, Banarasi sarees, and regional heritage looks.</li>
          <li><strong>Cinematic Portraits:</strong> Controlled lighting setups, including Rembrandt, neon noir, golden hour, and dramatic editorial studio looks.</li>
          <li><strong>Couple &amp; Milestone Photoshoots:</strong> Aesthetic outdoor, vintage 90s retro, and anniversary photoshoot concepts.</li>
          <li><strong>Modern Streetwear &amp; Fashion:</strong> Minimalist aesthetics, high-fashion magazine covers, and urban lookbooks.</li>
        </ul>
      </section>

      <section>
        <h2>4. Our Testing &amp; Editorial Standards</h2>
        <p>
          Unlike unvetted repositories, every prompt published on Prompt King
          adheres to our rigorous testing standards:
        </p>
        <ul>
          <li><strong>Multi-Model Verification:</strong> Prompts are tested on Google Gemini, Midjourney, Flux, and ChatGPT to assess consistency.</li>
          <li><strong>Optical Camera Parameters:</strong> We specify real photography gear references (e.g., 85mm portrait lenses, 35mm anamorphic, f/1.8 apertures) to produce natural depth of field rather than digital blur.</li>
          <li><strong>Texture Realism:</strong> We emphasize natural micro-skin textures, visible pores, and organic lighting to eliminate artificial plastic finishes.</li>
        </ul>
        <p>
          You can read our full methodology in our{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>
      </section>

      <section>
        <h2>5. 100% Free &amp; Transparent Access</h2>
        <p>
          Prompt King is built to be open and accessible. You do not need an
          account, paid subscription, or credit card to browse, copy, and adapt
          any prompt in our library.
        </p>
        <p>
          Prompt King is an educational prompt library and discovery resource.
          We do not render or generate images on our servers; rather, we provide
          tested instructional text formulas that creators take into compatible
          AI tools of their choice.
        </p>
      </section>

      <section>
        <h2>6. Editorial Headquarters &amp; Contact</h2>
        <p>
          We operate transparently from Karnataka, India, and welcome
          suggestions, prompt submissions, and corrections from creators
          everywhere.
        </p>
        <p>
          <strong>Official Contact:</strong> contact@promptkingai.com<br />
          <strong>Support &amp; Inquiries:</strong> Visit our <Link href="/contact">Contact Us page</Link>
        </p>
      </section>

      <div className="prose-cta">
        <h2>Explore Tested Prompts</h2>
        <p>Ready to create your next cinematic photo?</p>
        <Link href="/explore" className="button">
          Explore prompt library →
        </Link>
      </div>
    </article>
  );
}
