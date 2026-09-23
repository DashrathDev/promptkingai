export const dynamicParams = false;
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allGuides as guides } from "@/data/all-guides";
import { seo } from "@/lib/site";
import styles from "./author.module.css";

const GUIDE_IMAGE_OVERRIDES = {
  "improve-an-ai-photo-prompt": "/images/improve-an-ai-photo-prompt.jpg.jpg",
};

function getGuideImage(g) {
  return GUIDE_IMAGE_OVERRIDES[g.slug] || g.image;
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  return g
    ? seo(g.title, g.description, `/blog/${slug}`, getGuideImage(g))
    : { title: "Guide not found", robots: { index: false } };
}
export default async function Guide({ params }) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  if (!g) notFound();

  const faqSchema = g.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: g.faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      }
    : null;

  const isWideGuideThumbnail = [
    "how-to-use-ai-photo-prompts",
    "cinematic-portrait-prompt-ideas",
    "improve-an-ai-photo-prompt",
    "keep-face-consistent-ai-photos",
    "ai-photo-prompt-camera-angles-framing",
  ].includes(g.slug);

  const guideImage = getGuideImage(g);

  return (
    <article className="container prose page-section">
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <Link href="/blog" className="back-link">
        ← All guides
      </Link>
      <span className="eyebrow purple detail-eyebrow">
        {g.label} · {g.readTime}
      </span>
      <h1>{g.title}</h1>
      <p className="lead">{g.description}</p>
      <div
        className="guide-hero"
        style={
          isWideGuideThumbnail
            ? { aspectRatio: "16 / 9", height: "auto" }
            : undefined
        }
      >
        <Image
          src={guideImage}
          alt={`Illustrative portrait reference for ${g.title}`}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
      {g.intro?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {g.sections.map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
      {g.faqs?.length ? (
        <section>
          <h2>Frequently Asked Questions</h2>
          {g.faqs.map(([question, answer]) => (
            <div key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </div>
          ))}
        </section>
      ) : null}
      <div className="prose-cta">
        <h2>Put an idea into words.</h2>
        <p>Find a prompt, change a detail, and explore a new direction.</p>
        <Link href="/explore" className="button">
          Explore prompts →
        </Link>
      </div>
      <section className={styles.authorBox} aria-labelledby="about-author-heading">
        <span className="eyebrow purple">ABOUT THE AUTHOR</span>
        <h2 id="about-author-heading">Dashrath</h2>
        <p>
          Developer and creator behind Prompt King, building practical tools and
          educational resources for AI photo creators. He focuses on app
          development, web development, prompt discovery, and clear guides for
          better AI photo prompting.
        </p>
      </section>
    </article>
  );
}
