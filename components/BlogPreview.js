import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { allGuides as guides } from "@/data/all-guides";

const GUIDE_IMAGE_OVERRIDES = {
  "improve-an-ai-photo-prompt": "/images/improve-an-ai-photo-prompt.jpg.jpg",
};

export default function BlogPreview({ limit }) {
  const displayGuides = limit ? guides.slice(0, limit) : guides;

  return (
    <div className="blog-grid">
      {displayGuides.map((g) => {
        const guideImage = GUIDE_IMAGE_OVERRIDES[g.slug] || g.image;

        return (
          <article className="blog-card" key={g.slug}>
            <Link href={`/blog/${g.slug}`} tabIndex={-1} aria-hidden="true">
              <div className="blog-image">
                <Image
                  src={guideImage}
                  alt={`Portrait style reference for ${g.title}`}
                  fill
                  sizes="(max-width: 639px) 480px, (max-width: 1023px) 400px, 360px"
                />
                <span>{g.label}</span>
              </div>
            </Link>
            <div>
              <span className="eyebrow">PROMPT GUIDES · {g.readTime}</span>
              <h3>
                <Link href={`/blog/${g.slug}`}>
                  {g.title} <ArrowUpRight size={19} />
                </Link>
              </h3>
              <p>{g.description}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
