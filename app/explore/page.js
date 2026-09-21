import PromptExplorer from "@/components/PromptExplorer";
import CategoryChips from "@/components/CategoryChips";
import { listPrompts } from "@/lib/prompt-service";
import { seo } from "@/lib/site";
export async function generateMetadata({ searchParams }) {
  const { q } = await searchParams;
  return {
    ...seo(
      "Explore Photo Prompts",
      "Find your next visual direction with our searchable library of ready-to-copy photo prompts.",
      "/explore",
    ),
    ...(q ? { robots: { index: false, follow: true } } : {}),
  };
}
export default async function Explore({ searchParams }) {
  const { q } = await searchParams;
  const { items } = await listPrompts();
  return (
    <div className="container page-section">
      <div className="page-heading">
        <span className="eyebrow purple">THE PROMPT LIBRARY</span>
        <h1>Find your next “what if”.</h1>
        <p>
          Follow a mood, explore a style, and find the words to make it yours.
        </p>
      </div>
      <CategoryChips />
      <PromptExplorer
        prompts={items}
        initialQuery={typeof q === "string" ? q : ""}
      />
    </div>
  );
}
