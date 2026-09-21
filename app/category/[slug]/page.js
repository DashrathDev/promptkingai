export const dynamicParams = false;
import { notFound } from "next/navigation";
import { categories } from "@/data/categories";
import { listPrompts } from "@/lib/prompt-service";
import { seo } from "@/lib/site";
import CategoryChips from "@/components/CategoryChips";
import PromptExplorer from "@/components/PromptExplorer";
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const c = categories.find((c) => c.slug === slug);
  return c
    ? seo(`${c.name} Photo Prompts`, c.description, `/category/${slug}`)
    : { title: "Category not found", robots: { index: false } };
}
export default async function Category({ params }) {
  const { slug } = await params;
  const c = categories.find((c) => c.slug === slug);
  if (!c) notFound();
  const { items } = await listPrompts({ category: slug });
  return (
    <div className="container page-section">
      <div className="page-heading">
        <span className="eyebrow purple">EXPLORE YOUR AESTHETIC</span>
        <h1>
          {c.name} photo prompts<span className="purple">.</span>
        </h1>
        <p>{c.description}</p>
      </div>
      <CategoryChips active={slug} />
      <PromptExplorer prompts={items} />
    </div>
  );
}
