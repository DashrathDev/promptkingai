import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Camera,
  Scan,
  SlidersHorizontal,
  ClipboardList,
  LockKeyhole,
} from "lucide-react";
import { getPrompt, getRelatedPrompts } from "@/lib/prompt-service";
import { seo, PLAY_STORE_URL, SITE_URL } from "@/lib/site";
import { categories } from "@/data/categories";
import CopyPrompt from "@/components/CopyPrompt";
import FAQ from "@/components/FAQ";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import RelatedPrompts from "@/components/RelatedPrompts";

function safeJsonLd(value) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export async function generateMetadata({ params }) {
  const p = await getPrompt((await params).slug);
  return p
    ? seo(p.title, p.description, `/prompt/${p.slug}`, p.image)
    : { title: "Prompt not found", robots: { index: false } };
}

export default async function PromptPage({ params }) {
  const p = await getPrompt((await params).slug);
  if (!p) notFound();

  const related = await getRelatedPrompts(p);
  const cat = categories.find((c) => c.slug === p.category);
  const categoryName = cat?.name || p.categoryName;
  const faq = [
    [
      "What type of image does this prompt create?",
      `In a compatible AI tool, this prompt is intended as a starting point for ${p.description.charAt(0).toLowerCase() + p.description.slice(1)} Results depend on the tool, settings and references you use.`,
    ],
    [
      "Can I customize the clothing or background?",
      "Yes. Replace the clothing, setting or colors in the prompt with your own choices. Keep descriptions consistent and adjust one detail at a time.",
    ],
    [
      "What aspect ratio works best?",
      `Start with ${p.framing}. A 4:5 ratio works well for a portrait feed post. Adjust the crop for your intended platform and your tool’s available settings.`,
    ],
    [
      "Does Prompt King generate the image?",
      "No. Prompt King helps users discover and copy prompts that can be used with compatible AI tools.",
    ],
    [
      "Can I use this for social media ideas?",
      "Yes. Use it as creative inspiration and customize the result for your audience. Use photos you have permission to upload, and check your chosen tool’s terms before publishing.",
    ],
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `${SITE_URL}/category/${p.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: p.title,
        item: `${SITE_URL}/prompt/${p.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <div className="container detail-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />

      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href={`/category/${p.category}`}>{categoryName}</Link>
        <span>/</span>
        <span aria-current="page">{p.title}</span>
      </nav>

      <div className="detail-layout">
        <article className="detail-main">
          <Link href="/explore" className="back-link">
            <ArrowLeft size={16} /> Back to prompts
          </Link>

          <span className="eyebrow purple detail-eyebrow">
            YOUR NEXT CREATIVE STARTING POINT
          </span>
          <h1>{p.title}</h1>

          <div className="tags">
            <Link href={`/category/${p.category}`}>{p.categoryName}</Link>
          </div>

          <figure className="detail-figure">
            <div className="detail-image">
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 66vw"
              />
            </div>
            <figcaption>
              Illustrative style reference. Results will vary by tool, settings
              and customization.
            </figcaption>
          </figure>

          <section className="prompt-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow purple">YOUR IDEA STARTS WITH WORDS</span>
                <h2>AI Photo Prompt</h2>
              </div>
            </div>

            {p.isPremium ? (
              <div className="prompt-text">
                <LockKeyhole size={20} aria-hidden="true" />
                <p>
                  This is a Premium prompt. Open Prompt King on Google Play to
                  access it through the app.
                </p>
              </div>
            ) : (
              <>
                <div className="prompt-text">{p.prompt}</div>
                <div className="copy-actions">
                  <CopyPrompt text={p.prompt} />
                  <a href={PLAY_STORE_URL} className="button">
                    Download Prompt King App <ArrowUpRight size={17} />
                  </a>
                </div>
              </>
            )}

            {p.isPremium ? (
              <div className="copy-actions">
                <a href={PLAY_STORE_URL} className="button">
                  Get Prompt King App <ArrowUpRight size={17} />
                </a>
              </div>
            ) : null}

            <p className="reference-note">
              Want more trending photo prompts? Discover them in the Prompt King
              Android app on Google Play.
            </p>
          </section>

          <section className="content-section">
            <h2>About this prompt</h2>
            <p>{p.about}</p>
          </section>

          <div className="info-grid">
            {[
              [Camera, "Best for", p.bestFor],
              [Scan, "Suggested framing", p.framing],
              [SlidersHorizontal, "Customization ideas", p.customization],
              [
                ClipboardList,
                "How to use",
                "Copy the prompt, adapt it to your idea, and paste it into your preferred compatible AI tool. Follow that tool’s instructions for reference photos.",
              ],
            ].map(([Icon, title, body]) => (
              <section key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{body}</p>
              </section>
            ))}
          </div>

          <section className="content-section">
            <h2>A few helpful answers.</h2>
            <FAQ items={faq} />
          </section>
        </article>

        <aside className="detail-sidebar" aria-label="More inspiration">
          <AppDownloadCTA compact />
          <section className="sidebar-panel">
            <h2>Another direction?</h2>
            {related.slice(0, 3).map((r) => (
              <Link className="mini-prompt" key={r.id} href={`/prompt/${r.slug}`}>
                <Image src={r.image} alt={r.imageAlt} width={70} height={88} />
                <span>
                  <small>{r.categoryName}</small>
                  <strong>{r.title}</strong>
                  <span>View prompt →</span>
                </span>
              </Link>
            ))}
          </section>
          <section className="sidebar-panel">
            <h2>Find your aesthetic</h2>
            <div className="sidebar-categories">
              {categories.map((c) => (
                <Link href={`/category/${c.slug}`} key={c.slug}>
                  {c.name}
                  <ArrowUpRight size={15} />
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <RelatedPrompts prompts={related} />
      <AppDownloadCTA />
    </div>
  );
}
