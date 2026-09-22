import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { guides } from "@/data/guides";

const GUIDE_IMAGE_OVERRIDES = {
  "improve-an-ai-photo-prompt": "/images/improve-an-ai-photo-prompt.jpg.jpg",
};

export default function BlogPreview() {
  return (
    <div className="blog-grid">
      {guides.map((g) => {
        const guideImage = GUIDE_IMAGE_OVERRIDES[g.slug] || g.image;

        return (
          <article className="blog-card" key={g.slug}>
            <Link href={`/blog/${g.slug}`} tabIndex={-1} aria-hidden="true">
              <div className="blog-image">
                <Image
                  src={guideImage}
                  alt={`Portrait style reference for ${g.title}`}
                  fill
                  sizes="(max-width: 639px) 100vw, 33vw"
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
