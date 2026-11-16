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

  // Fast & lively auto-slide every 2.8 seconds (pauses on mouse hover)
  useEffect(() => {
    if (isHovered || heroSlides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroSlides.length);
    }, 2800);
    return () => clearInterval(timerRef.current);
  }, [isHovered, heroSlides.length]);

  const switchSlide = (idx) => {
    setActiveIdx(idx);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      if (!isHovered && heroSlides.length > 1) {
        timerRef.current = setInterval(() => {
          setActiveIdx((prev) => (prev + 1) % heroSlides.length);
        }, 2800);
      }
    }
  };

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
              onClick={() => switchSlide(i)}
              aria-label={`Show ${slide.category} prompt`}
            >
              <span>{slide.category}</span>
            </button>
          ))}
        </div>
      )}

      <div className="hero-showcase-stage">
        {/* Main 3D Showcase Card */}
        <div className="showcase-card">
          {/* Edge-to-Edge Visual Canvas (No blur, sharp, fast transition) */}
          <div className="showcase-image-wrap">
            {/* Cyber Scanning Laser Beam */}
            <div className="showcase-scan-beam" />

            {/* Clean Edge-to-Edge Image with Fast Smooth Transition (Full Image Visible, Zero Crop) */}
            {current.image && (
              <Image
                key={current.image}
                src={current.image}
                alt={current.imageAlt || current.title}
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 639px) 95vw, 420px"
                priority
                className="showcase-img showcase-img-animate"
              />
            )}

            {/* Badges on Image */}
            <div className="showcase-img-badges">
              <span className="showcase-badge-primary">
                {current.tag || current.category || "Featured"}
              </span>
              <span className="showcase-badge-meta">
                {current.lens || "85mm Studio Lens"}
              </span>
            </div>
          </div>

          {/* Clean Content Info Section Below Image */}
          <div className="showcase-info">
            <span className="showcase-kicker">
              {(current.category || "TRENDING").toUpperCase()} PROMPTS
            </span>
            <h3 className="showcase-title">{current.title}</h3>
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
                    <Check size={13} />
                    <span>COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>COPY</span>
                  </>
                )}
              </button>
              <Link
                href={current.link || (current.slug ? `/prompt/${current.slug}` : `/category/${current.categorySlug || "trending"}`)}
                className="showcase-view-link"
                title={`Explore ${current.title}`}
              >
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          {/* Compatibility Trust Bar */}
          <div className="showcase-trust-bar">
            <span>Tested on:</span>
            <strong>Gemini • Midjourney • Flux • ChatGPT</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
