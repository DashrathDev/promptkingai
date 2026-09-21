import PromptGrid from "@/components/PromptGrid";
import CategoryChips from "@/components/CategoryChips";
import { listPrompts } from "@/lib/prompt-service";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Latest Photo Prompts",
  "Browse the latest additions to the Prompt King photo prompt library.",
  "/latest",
);
export default async function Latest() {
  const { items } = await listPrompts();
  return (
    <div className="container page-section">
      <div className="page-heading">
        <span className="eyebrow purple">FRESH FROM THE FEED</span>
        <h1>A fresh idea is waiting.</h1>
        <p>Our latest photo prompts, starting with the newest addition.</p>
      </div>
      <CategoryChips />
      <PromptGrid prompts={items} />
    </div>
  );
}
