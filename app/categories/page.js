import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Browse Prompt Categories",
  "Find portrait, cinematic, couple, traditional and festival photo prompt ideas.",
  "/categories",
);
export default function Categories() {
  return (
    <div className="container page-section">
      <div className="page-heading">
        <span className="eyebrow purple">FOLLOW YOUR CURIOSITY</span>
        <h1>There’s a style for every story.</h1>
        <p>Choose a direction. See where it takes you.</p>
      </div>
      <div className="category-grid">
        {categories.map((c, i) => (
          <Link key={c.slug} href={`/category/${c.slug}`}>
            <span className="category-number">0{i + 1}</span>
            <h2>
              {c.name}
              <ArrowUpRight />
            </h2>
            <p>{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
