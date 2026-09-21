import Link from "next/link";
import { seo } from "@/lib/site";
export const metadata = seo(
  "About Prompt King",
  "Get to know Prompt King, a place to discover and copy creative AI photo prompts.",
  "/about",
);
export default function About() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">IDEAS COME FIRST</span>
      <h1>A starting point for your next creative idea.</h1>
      <p className="lead">
        Prompt King helps you find the words behind the photo you have in mind.
      </p>
      <section>
        <h2>Discover. Copy. Make it your own.</h2>
        <p>
          Browse portrait, cinematic, couple, traditional and festival styles.
          Each prompt page combines a written creative brief with context,
          framing suggestions and practical ways to customize it. You can copy
          the prompt and use it in your preferred compatible AI tool.
        </p>
      </section>
      <section>
        <h2>A prompt discovery experience</h2>
        <p>
          Prompt King does not generate or edit images. We focus on helping you
          explore creative directions and understand how a prompt is put
          together. The Android app brings prompt discovery to your phone.
        </p>
      </section>
      <section>
        <h2>Context matters</h2>
        <p>
          Style reference photos are illustrative. The result you get elsewhere
          depends on your selected tool, references and settings. The current
          website catalog is an editorial demo collection, and its trending
          section is an editorial selection rather than a popularity ranking.
        </p>
      </section>
      <div className="prose-cta">
        <h2>Find a direction that feels like you.</h2>
        <Link href="/explore" className="button">
          Explore prompts →
        </Link>
      </div>
    </article>
  );
}
