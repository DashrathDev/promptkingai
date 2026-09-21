import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Copy,
  Layers3,
  Compass,
  Check,
  Clapperboard,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import CategoryChips from "@/components/CategoryChips";
import PromptGrid from "@/components/PromptGrid";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import BlogPreview from "@/components/BlogPreview";
import { listPrompts } from "@/lib/prompt-service";
import { seo, PLAY_STORE_URL } from "@/lib/site";

const homeSeo = seo(
  "Prompt King – AI Photo Prompts",
  "Explore ready-to-copy prompts for portraits, cinematic photos, couples, festivals and more. Find your next photo idea with Prompt King.",
);

export const metadata = {
  ...homeSeo,
  title: { absolute: "Prompt King – AI Photo Prompts" },
  openGraph: {
    ...homeSeo.openGraph,
    title: "Prompt King – AI Photo Prompts",
  },
  twitter: {
    ...homeSeo.twitter,
    title: "Prompt King – AI Photo Prompts",
  },
};

export default async function Home() {
  const trending = await listPrompts({ sort: "featured", limit: 4 });
  const latest = await listPrompts({ sort: "latest", limit: 4 });
  const girls = await listPrompts({ category: "girls", limit: 1 });

  const frontPrompt = trending.items?.[0];
  const rearPrompt = girls.items?.[0] || trending.items?.[1];

  const frontPromptHref = frontPrompt?.slug ? `/prompt/${frontPrompt.slug}` : "/explore";
  const rearPromptHref = rearPrompt?.slug ? `/prompt/${rearPrompt.slug}` : "/category/girls";

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">
              <Sparkles size={15} /> A LITTLE INSPIRATION. ENDLESS
              POSSIBILITIES.
            </span>
            <h1>
              Discover Trending
              <br />
              AI Photo{" "}
              <span>
                Prompts<span className="title-spark">✳</span>
              </span>
            </h1>
            <p>
              Explore ready-to-copy prompts for portraits, cinematic photos,
              couples, festivals and more. Find a style you love, copy the
              prompt, and use it in your preferred compatible AI tool.
            </p>
            <div className="hero-buttons">
              <Link href="#trending" className="button">
                Explore Prompts <ArrowRight size={18} />
              </Link>
              <a href={PLAY_STORE_URL} className="button secondary">
                Download Prompt King App <ArrowUpRight size={17} />
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
                <Check size={15} /> Make it yours
              </span>
            </div>
          </div>
          <div className="hero-art">
            <div className="hero-orbit" />
            <div className="floating-label">
              <Clapperboard size={18} />
              <span>
                A new perspective
                <br />
                <strong>is one prompt away.</strong>
              </span>
            </div>
            <Link
              href={rearPromptHref}
              className="hero-photo rear"
              aria-label={rearPrompt ? `Explore ${rearPrompt.title}` : "Explore Girls photo prompts"}
            >
              <Image
                src={rearPrompt?.image || "/images/traditional.webp"}
                alt={rearPrompt?.imageAlt || "Girls portrait photo inspiration"}
                fill
                sizes="(max-width: 639px) 45vw, 230px"
                priority
              />
              <span>{(rearPrompt?.categoryName || "Girls").toUpperCase()} / TIMELESS</span>
            </Link>
            <Link href={frontPromptHref} className="hero-photo front">
              <Image
                src={frontPrompt?.image || "/images/black.webp"}
                alt={frontPrompt?.imageAlt || "AI photo prompt inspiration"}
                fill
                sizes="(max-width: 639px) 55vw, 290px"
                priority
              />
              <div className="hero-photo-caption">
                <span>{(frontPrompt?.categoryName || "Trending").toUpperCase()} PROMPTS</span>
                <strong>{frontPrompt?.title || "Find your next creative direction."}</strong>
                <span className="hero-photo-link">
                  Explore the prompt <ArrowUpRight size={19} />
                </span>
              </div>
            </Link>
            <div className="copy-float">
              <span>
                <Copy size={19} />
              </span>
              <div>
                <strong>Good ideas, ready to copy.</strong>
                <small>Your next creative starting point.</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container discovery">
        <SearchBar />
        <div className="category-label">
          <span>FIND YOUR AESTHETIC</span>
          <Link href="/categories">
            All categories <ArrowRight size={15} />
          </Link>
        </div>
        <CategoryChips active="trending" />
      </div>
      <section id="trending" className="section container">
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
      </section>
      <section className="latest-section">
        <div className="container section">
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
        <BlogPreview />
      </section>
    </>
  );
}
