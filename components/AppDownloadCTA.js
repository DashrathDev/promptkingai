import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Smartphone, Play } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site";

export function PlayButton() {
  return (
    <a href={PLAY_STORE_URL} className="play-button">
      <Play size={27} fill="currentColor" />
      <span>
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
      <ArrowUpRight size={20} />
    </a>
  );
}

export default function AppDownloadCTA({ compact = false, previewPrompts = [] }) {
  if (compact)
    return (
      <section className="sidebar-cta">
        <Smartphone size={28} />
        <h2>
          Your next idea.
          <br />
          Always with you.
        </h2>
        <p>
          Keep discovering ready-to-copy photo prompts in the Prompt King
          Android app.
        </p>
        <PlayButton />
      </section>
    );

  const fallbackImages = [
    {
      image: "/images/black.webp",
      imageAlt: "Cinematic portrait reference",
    },
    {
      image: "/images/traditional.webp",
      imageAlt: "Traditional portrait reference",
    },
    {
      image: "/images/couple.webp",
      imageAlt: "Couple portrait reference",
    },
    {
      image: "/images/soft.webp",
      imageAlt: "Daylight portrait reference",
    },
  ];

  const phonePrompts = previewPrompts.length
    ? previewPrompts.slice(0, 4)
    : fallbackImages;

  return (
    <section className="app-cta" aria-labelledby="app-title">
      <div className="app-cta-copy">
        <span className="eyebrow">INSPIRATION, ON THE GO</span>
        <h2 id="app-title">
          More prompts
          <br />
          in your pocket.
        </h2>
        <p>
          A little scroll. A fresh idea. Explore photo styles and ready-to-copy
          prompts with the Prompt King Android app.
        </p>
        <PlayButton />
        <span className="app-note">
          Discover → Copy → Use in your preferred AI tool
        </span>
      </div>
      <div
        className="app-phone"
        aria-label="Prompt King feed preview using current prompt images"
      >
        <div className="phone-top">
          <span>
            Prompt King<span className="brand-dot">.</span>
          </span>
          <Smartphone size={15} />
        </div>
        <div className="phone-label">Find your next photo idea.</div>
        <div className="phone-images">
          {phonePrompts.map((prompt, i) => {
            const content = (
              <Image
                src={prompt.image}
                alt={prompt.imageAlt || prompt.title || `Prompt preview ${i + 1}`}
                fill
                sizes="160px"
              />
            );

            return prompt.slug ? (
              <Link
                href={`/prompt/${prompt.slug}`}
                key={prompt.slug}
                aria-label={`Explore ${prompt.title || "prompt"}`}
              >
                {content}
              </Link>
            ) : (
              <div key={`${prompt.image}-${i}`}>{content}</div>
            );
          })}
        </div>
        <Link href="/explore" className="phone-bottom">
          Explore photo prompts <ArrowUpRight size={16} />
        </Link>
        <small className="mockup-label">Live prompt preview</small>
      </div>
    </section>
  );
}
