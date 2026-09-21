import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function PromptCard({ prompt, priority = false }) {
  return (
    <article className="prompt-card">
      <Link
        href={`/prompt/${prompt.slug}`}
        className="card-image-link"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="card-image">
          <Image
            src={prompt.image}
            alt={prompt.imageAlt}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
            priority={priority}
          />
          <span className="image-badge">{prompt.category}</span>
          <span className="card-arrow">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </Link>
      <div className="card-content">
        <span className="eyebrow">{prompt.category} / PHOTO PROMPT</span>
        <h3>
          <Link href={`/prompt/${prompt.slug}`}>{prompt.title}</Link>
        </h3>
        <Link className="text-link" href={`/prompt/${prompt.slug}`}>
          View Prompt <span aria-hidden="true">→</span>
          <span className="sr-only">: {prompt.title}</span>
        </Link>
      </div>
    </article>
  );
}
