// API boundary. Pages and components depend on these functions, not the fixture file.
// Replace the implementations with server-side fetch + validation when the API contract is known.
import { prompts } from "@/data/prompts";
export async function listPrompts({
  query = "",
  category,
  sort = "latest",
  limit,
  offset = 0,
} = {}) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  let results = prompts.filter(
    (p) =>
      (!category ||
        (category === "trending"
          ? p.featured
          : p.category === category || p.tags.includes(category))) &&
      terms.every((t) =>
        `${p.title} ${p.description} ${p.category} ${p.tags.join(" ")}`
          .toLowerCase()
          .includes(t),
      ),
  );
  results = [...results].sort((a, b) =>
    sort === "featured"
      ? Number(b.featured) - Number(a.featured)
      : Date.parse(b.createdAt) - Date.parse(a.createdAt),
  );
  return {
    items: results.slice(offset, limit ? offset + limit : undefined),
    total: results.length,
  };
}
export async function getPrompt(slug) {
  return prompts.find((p) => p.slug === slug) || null;
}
export async function getRelatedPrompts(prompt, limit = 4) {
  const all = prompts.filter((p) => p.id !== prompt.id);
  return all
    .sort(
      (a, b) =>
        Number(b.category === prompt.category) -
        Number(a.category === prompt.category),
    )
    .slice(0, limit);
}
export async function getPromptSlugs() {
  return prompts.map((p) => p.slug);
}
