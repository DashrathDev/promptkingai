"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export default function HeroShowcase({ slides = [] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // If no dynamic slides passed, provide safe graceful fallback
  const heroSlides = slides.length > 0 ? slides : [
    {
      title: "Kannada Rajyotsava Festive Look",
      category: "Trending",
      categorySlug: "trending",
      lens: "85mm Prime",
      tag: "Trending",
      image: "/images/traditional.webp",
      link: "/category/trending",
      desc: "Festive crowds, royal traditional silk textures, authentic Karnataka cultural heritage.",
      prompt:
        "Create a photographic portrait celebrating Karnataka Rajyotsava with authentic cultural grace, soft warm sunlight, true-to-life skin tones, and rich festival colors.",
    },
  ];

  // Keep index within bounds if slides length changes
  const safeIdx = activeIdx >= heroSlides.length ? 0 : activeIdx;
  const current = heroSlides[safeIdx] || heroSlides[0];

  // Auto-slide every 5 seconds (pauses on mouse hover)
  useEffect(() => {
    if (isHovered || heroSlides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [isHovered, heroSlides.length]);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!current?.prompt) return;
    try {
      await navigator.clipboard.writeText(current.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className="hero-showcase-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Switcher Tabs */}
      {heroSlides.length > 1 && (
        <div className="showcase-tabs">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.categorySlug || slide.category || i}
              type="button"
              className={`showcase-tab-btn ${i === safeIdx ? "active" : ""}`}
              onClick={() => setActiveIdx(i)}
              aria-label={`Show ${slide.category} prompt`}
            >
              <span>{slide.category}</span>
            </button>
          ))}
        </div>
      )}

      <div className="hero-showcase-stage">
        {/* Ambient Glow Aura */}
        <div className="showcase-ambient-glow" />

        {/* Main 3D Card */}
        <div className="showcase-card">
          {/* Laser Scanning Beam */}
          <div className="showcase-scan-beam" />

          {/* Visual Canvas */}
          <div className="showcase-image-wrap">
            {current.image && (
              <Image
                src={current.image}
                alt={current.imageAlt || current.title}
                fill
                sizes="(max-width: 639px) 90vw, 440px"
                priority
                className="showcase-img"
              />
            )}
            <div className="showcase-overlay" />

            {/* Badges on Image */}
            <div className="showcase-img-badges">
              <span className="showcase-badge-primary">
                {current.tag || current.category || "Featured"}
              </span>
              <span className="showcase-badge-meta">
                {current.lens || "85mm Studio Lens"}
              </span>
            </div>

            {/* Captions on Image */}
            <div className="showcase-captions">
              <span className="showcase-kicker">
                {(current.category || "TRENDING").toUpperCase()} PROMPTS
              </span>
              <h3 className="showcase-title">{current.title}</h3>
              {current.desc && (
                <p className="showcase-desc">{current.desc}</p>
              )}
            </div>
          </div>

          {/* Prompt Terminal & Copy Box */}
          <div className="showcase-terminal">
            <div className="showcase-terminal-snippet">
              <span className="showcase-dot" />
              <p className="showcase-prompt-text">{current.prompt}</p>
            </div>
            <div className="showcase-actions">
              <button
                type="button"
                onClick={handleCopy}
                className={`showcase-copy-btn ${copied ? "copied" : ""}`}
                aria-label="Copy prompt formula"
              >
                {copied ? (
                  <>
                    <Check size={14} />
                    <span>COPIED! ✨</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>COPY</span>
                  </>
                )}
              </button>
              <Link
                href={current.link || (current.slug ? `/prompt/${current.slug}` : `/category/${current.categorySlug || "trending"}`)}
                className="showcase-view-link"
                title={`Explore ${current.title}`}
              >
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          {/* Compatibility Trust Bar */}
          <div className="showcase-trust-bar">
            <span>Tested on:</span>
            <strong>Gemini • Midjourney v6 • Flux.1 • ChatGPT</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
