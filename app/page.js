import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Copy,
  Layers3,
  Compass,
  Check,
  Zap,
} from "lucide-react";
import HeroShowcase from "@/components/HeroShowcase";
import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import PromptGrid from "@/components/PromptGrid";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import { listPrompts } from "@/lib/prompt-service";
import { seo, PLAY_STORE_URL } from "@/lib/site";

const homeSeo = seo(
  "Prompt King – Free AI Photo Prompts Library (Copy & Paste Formulas)",
  "Discover Prompt King: Your premier free library of ready-to-copy AI photo prompts for portraits, cinematic looks, couples, festivals and creative styles. Compatible with Gemini, Midjourney & Flux.",
);

export const metadata = {
  ...homeSeo,
  title: {
    absolute:
      "Prompt King – Free AI Photo Prompts Library (Copy & Paste Formulas)",
  },
  keywords: [
    "prompt king",
    "prompt king ai",
    "promptking",
    "ai photo prompts",
    "ai portrait prompts",
    "gemini photo prompts",
    "midjourney portrait prompts",
    "flux prompts",
    "free ai prompts",
    "copy paste ai prompts",
  ],
  openGraph: {
    ...homeSeo.openGraph,
    title:
      "Prompt King – Free AI Photo Prompts Library (Copy & Paste Formulas)",
  },
  twitter: {
    ...homeSeo.twitter,
    title:
      "Prompt King – Free AI Photo Prompts Library (Copy & Paste Formulas)",
  },
};

const homepageFaqs = [
  [
    "What is Prompt King?",
    "Prompt King (promptkingai.com) is the premier free directory for discovering, copying, and customizing high-quality AI photo prompts. We curate production-tested prompt formulas for portraits, cinematic lighting, couples, and festive photography.",
  ],
  [
    "How do I use and copy prompts from Prompt King?",
    "Simply browse our trending categories, find a visual style you love, and click the 'Copy' button. You can then paste the prompt directly into your favorite AI tool (like Google Gemini, Midjourney, or Flux) and customize the clothing, lighting, or setting to make it your own.",
  ],
  [
    "Are Prompt King prompts compatible with Midjourney, Gemini and Flux?",
    "Yes! All prompt formulas on Prompt King are tested for cross-platform compatibility with Google Gemini (Imagen 3), Midjourney v6, Flux.1 (Dev & Schnell), and ChatGPT (DALL-E 3).",
  ],
  [
    "Is Prompt King free to use?",
    "Yes, Prompt King is 100% free to browse and copy prompts on promptkingai.com. We also offer a dedicated Prompt King Android app on the Google Play Store for mobile creators.",
  ],
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://promptkingai.com/#website",
      url: "https://promptkingai.com/",
      name: "Prompt King",
      alternateName: [
        "Prompt King AI",
        "PromptKing",
        "PromptKingAI",
        "promptkingai.com",
      ],
      description:
        "Discover ready-to-copy AI photo prompts for portraits, cinematic photos, festivals, couples and more.",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://promptkingai.com/explore?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://promptkingai.com/#organization",
      name: "Prompt King",
      url: "https://promptkingai.com/",
      logo: "https://promptkingai.com/brand/prompt-king-icon.png",
      sameAs: [PLAY_STORE_URL],
      founder: {
        "@type": "Person",
        name: "Dashrath",
        jobTitle: "Creative Lead & Founder",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://promptkingai.com/#faq",
      mainEntity: homepageFaqs.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
  ],
};

export default async function Home() {
  const trending = await listPrompts({ sort: "featured", limit: 4 });
  const latest = await listPrompts({ sort: "latest", limit: 12 });

  const heroCategoryConfigs = [
    { slug: "trending", label: "Trending", tag: "Hot" },
    { slug: "festival", label: "Festival", tag: "Festive" },
    { slug: "couple", label: "Couple", tag: "Romantic" },
    { slug: "girls", label: "Girls", tag: "Portrait" },
  ];

  const heroSlides = (
    await Promise.all(
      heroCategoryConfigs.map(async ({ slug, label, tag }) => {
        try {
          const res = await listPrompts({ category: slug, sort: "latest", limit: 1 });
          const item = res.items?.[0];
          if (!item) return null;
          return {
            id: item.id,
            title: item.title,
            category: label,
            categorySlug: slug,
            image: item.image,
            imageAlt: item.imageAlt || item.title,
            slug: item.slug,
            prompt: (item.prompt || item.description || "").replace(/^Description:\s*/i, ""),
            desc: item.description ? item.description.replace(/^Description:\s*/i, "") : item.title,
            lens: "85mm Studio Lens",
            tag,
            link: `/prompt/${item.slug}`,
          };
        } catch {
          return null;
        }
      })
    )
  ).filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="hero">
        {/* Animated gradient orbs */}
        <div className="hero-orb hero-orb-1" aria-hidden="true" />
        <div className="hero-orb hero-orb-2" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">
              <Sparkles size={15} /> #1 FREE AI PHOTO PROMPTS LIBRARY
            </span>
            <h1>
              Copy. Paste.{" "}
              <span className="aurora-text">
                Create.<span className="title-spark">✳</span>
              </span>
              <br />
              <span className="hero-h1-sub">AI Photo Prompts, Ready to Use</span>
            </h1>
            <p>
              Explore ready-to-copy prompts for portraits, cinematic photos,
              couples, festivals and more. Find a style you love, copy the
              prompt, and use it in your preferred AI tool.
            </p>
            {/* Stats Trust Bar */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">1,000+</span>
                <span className="hero-stat-label">AI Prompts</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">20+</span>
                <span className="hero-stat-label">Expert Guides</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">100%</span>
                <span className="hero-stat-label">Free Forever</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="#feed" className="button">
                Explore Prompts <ArrowRight size={18} />
              </Link>
              <a href={PLAY_STORE_URL} className="button button-outline">
                Download App <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-steps">
              <span>
                <Check size={15} /> Discover a style
              </span>
              <span>
                <Check size={15} /> Copy the prompt
              </span>
              <span>
                <Zap size={15} /> Create instantly
              </span>
            </div>
          </div>
          <HeroShowcase slides={heroSlides} />
        </div>
      </section>
      <div className="container discovery">
        <SearchBar />
        <div className="category-label">
          <span>FIND YOUR AESTHETIC</span>
          <Link href="/categories">
            All categories <ArrowRight size={16} />
          </Link>
        </div>
        <CategoryChips active="trending" />
      </div>
      <section id="feed" className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow purple">FRESH FROM THE FEED</span>
            <h2>New ideas just landed.</h2>
            <p>A different mood. A new story. Find what inspires you next.</p>
          </div>
          <Link href="/latest" className="text-link">
            See latest prompts <ArrowUpRight size={18} />
          </Link>
        </div>
        <PromptGrid prompts={latest.items} />
      </section>
      <section id="trending" className="latest-section">
        <div className="container section">
          <div className="section-heading">
            <div>
              <span className="eyebrow purple">THE INSPIRATION EDIT</span>
              <h2>
                Trending prompts<span className="purple">.</span>
              </h2>
              <p>A fresh perspective for your next photo idea.</p>
            </div>
            <Link href="/category/trending" className="text-link">
              Explore trending <ArrowUpRight size={18} />
            </Link>
          </div>
          <PromptGrid prompts={trending.items} />
          <p className="reference-note">
            An editorial selection · Images are illustrative style references.
          </p>
        </div>
      </section>
      <section className="container section why">
        <div className="section-heading centered">
          <div>
            <span className="eyebrow purple">
              LESS SEARCHING. MORE INSPIRATION.
            </span>
            <h2>Your creative head start.</h2>
            <p>A simpler way to find the words behind your next photo idea.</p>
          </div>
        </div>
        <div className="features">
          {[
            [
              Compass,
              "Trending Prompt Feed",
              "Find fresh visual directions in a thoughtfully organized prompt feed.",
            ],
            [
              Copy,
              "Ready-to-Copy Prompts",
              "Start with a detailed prompt. Copy it, then add your own perspective.",
            ],
            [
              Layers3,
              "Easy Categories",
              "Go straight to the portraits, moments and styles you want to explore.",
            ],
            [
              Sparkles,
              "Use With Compatible AI Tools",
              "Take your prompt to your preferred compatible tool and create there.",
            ],
          ].map(([Icon, title, body]) => (
            <article key={title}>
              <span className="feature-icon">
                <Icon size={23} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <div className="container">
        <AppDownloadCTA />
      </div>
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow purple">
              A LITTLE KNOW-HOW GOES A LONG WAY
            </span>
            <h2>Better prompts start here.</h2>
            <p>
              Practical guides to turn a visual idea into a thoughtful prompt.
            </p>
          </div>
          <Link href="/blog" className="text-link">
            All guides <ArrowUpRight size={18} />
          </Link>
        </div>
        <BlogPreview limit={3} />
        <div style={{ textAlign: "center", marginTop: "34px" }}>
          <Link href="/blog" className="button" style={{ display: "inline-flex" }}>
            Explore All Guides & Tutorials <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <div>
            <span className="eyebrow purple">FREQUENTLY ASKED QUESTIONS</span>
            <h2>About Prompt King<span className="purple">.</span></h2>
            <p>Everything you need to know about copying and using our AI photo prompts.</p>
          </div>
          <Link href="/faq" className="text-link">
            All FAQs <ArrowUpRight size={18} />
          </Link>
        </div>
        <FAQ items={homepageFaqs} />
      </section>
    </>
  );
}
