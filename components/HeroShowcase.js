"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Copy, Check, ArrowUpRight, Clapperboard, Sparkles } from "lucide-react";

const heroSlides = [
  {
    title: "Kannada Rajyotsava Festive Look",
    category: "Festival",
    lens: "85mm f/1.8 Prime",
    tag: "Trending",
    image: "/images/traditional.webp",
    link: "/category/festival",
    desc: "Golden hour sunlight, royal silk textures, authentic Karnataka cultural heritage.",
    prompt:
      "Create a photographic portrait of an adult Indian woman wearing an elegant traditional silk saree, standing in natural daylight. Soft warm sunlight, true-to-life skin tones, delicate zari embroidery.",
  },
  {
    title: "Cinematic Black Velvet Editorial",
    category: "Cinematic",
    lens: "85mm Studio Lens",
    tag: "High Contrast",
    image: "/images/black.webp",
    link: "/category/trending",
    desc: "Directional softbox key light, dramatic rim light, shallow depth of field.",
    prompt:
      "Create a photographic portrait of an adult man wearing a tailored black outfit, directional side lighting, deep shadows with visible detail, muted charcoal tones, natural skin texture.",
  },
  {
    title: "Together, In Golden Hour",
    category: "Couple",
    lens: "50mm Prime",
    tag: "Romantic",
    image: "/images/couple.webp",
    link: "/category/couple",
    desc: "Warm sunset backlighting, candid laughter, organic Kodak Portra 400 film grain.",
    prompt:
      "Create a photographic portrait of an adult couple walking close together along a quiet outdoor path at sunset, warm golden-hour backlighting, soft natural smile, cinematic composition.",
  },
  {
    title: "Royal Heritage Palace Elegance",
    category: "Heritage",
    lens: "35mm Anamorphic",
    tag: "Cultural",
    image: "/images/heritage.webp",
    link: "/category/south-india",
    desc: "Exquisite antique embroidery, temple jewelry, warm ambient palace architecture.",
    prompt:
      "Regal Indian traditional portrait in front of palace stone architecture, warm ambient festive lighting, intricate gold embroidery, authentic cultural grace, 35mm film photography.",
  },
];

export default function HeroShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const current = heroSlides[activeIdx];

  // Auto-slide every 4.5 seconds (pauses on mouse hover)
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timerRef.current);
  }, [isHovered]);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
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
      <div className="showcase-tabs">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.category}
            type="button"
            className={`showcase-tab-btn ${i === activeIdx ? "active" : ""}`}
            onClick={() => setActiveIdx(i)}
            aria-label={`Show ${slide.category} prompt`}
          >
            <span>{slide.category}</span>
          </button>
        ))}
      </div>

      <div className="hero-showcase-stage">
        {/* Floating Glass Badge Top-Left */}
        <div className="showcase-float-badge float-top-left">
          <Clapperboard size={16} />
          <span>
            A new perspective <strong>is one prompt away</strong>
          </span>
        </div>

        {/* Ambient Glow Aura */}
        <div className="showcase-ambient-glow" />

        {/* Main 3D Card */}
        <div className="showcase-card">
          {/* Laser Scanning Beam */}
          <div className="showcase-scan-beam" />

          {/* Visual Canvas */}
          <div className="showcase-image-wrap">
            <Image
              src={current.image}
              alt={current.title}
              fill
              sizes="(max-width: 639px) 90vw, 420px"
              priority
              className="showcase-img"
            />
            <div className="showcase-overlay" />

            {/* Badges on Image */}
            <div className="showcase-img-badges">
              <span className="showcase-badge-primary">{current.tag}</span>
              <span className="showcase-badge-meta">{current.lens}</span>
            </div>

            {/* Captions on Image */}
            <div className="showcase-captions">
              <span className="showcase-kicker">{current.category.toUpperCase()} PROMPTS</span>
              <h3 className="showcase-title">{current.title}</h3>
              <p className="showcase-desc">{current.desc}</p>
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
                href={current.link}
                className="showcase-view-link"
                title={`Explore ${current.category} prompts`}
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

        {/* Floating Glass Badge Bottom-Right */}
        <div className="showcase-float-badge float-bottom-right">
          <Sparkles size={16} />
          <div>
            <strong>1-Tap Tested Formula</strong>
            <small>1,420+ creators copied today</small>
          </div>
        </div>
      </div>
    </div>
  );
}
