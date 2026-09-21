export const dynamicParams = false;
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { guides } from "@/data/guides";
import { seo } from "@/lib/site";
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  return g
    ? seo(g.title, g.description, `/blog/${slug}`, g.image)
    : { title: "Guide not found", robots: { index: false } };
}
export default async function Guide({ params }) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  if (!g) notFound();
  return (
    <article className="container prose page-section">
      <Link href="/blog" className="back-link">
        ← All guides
      </Link>
      <span className="eyebrow purple detail-eyebrow">
        {g.label} · {g.readTime}
      </span>
      <h1>{g.title}</h1>
      <p className="lead">{g.description}</p>
      <div className="guide-hero">
        <Image
          src={g.image}
          alt={`Illustrative portrait reference for ${g.title}`}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
      {g.sections.map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
      <div className="prose-cta">
        <h2>Put an idea into words.</h2>
        <p>Find a prompt, change a detail, and explore a new direction.</p>
        <Link href="/explore" className="button">
          Explore prompts →
        </Link>
      </div>
    </article>
  );
}
