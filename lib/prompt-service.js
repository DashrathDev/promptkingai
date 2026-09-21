import { categories } from "@/data/categories";

const API_BASE = "https://royalprompts.online";
const WEB_API = `${API_BASE}/api/web`;
const PAGE_SIZE = 50;

function slugify(value = "") {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function categoryById(id) {
  return categories.find((category) => category.id === id) || null;
}

function categoryBySlug(slug) {
  return categories.find((category) => category.slug === slug) || null;
}

function absoluteImageUrl(path) {
  if (!path) return "/images/placeholder.webp";
  if (/^https?:\/\//i.test(path)) return path;
  return `${API_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

function promptSlug(prompt) {
  return `${slugify(prompt.title) || "prompt"}-${prompt.id}`;
}

function mapPrompt(prompt, categoryName) {
  const category = categoryById(prompt.category_id);
  const name = (categoryName || category?.name || "Prompt").trim();
  const slug = category?.slug || slugify(name) || "prompt";
  const description = (prompt.description || "Explore this creative AI photo prompt.").trim();

  return {
    id: prompt.id,
    slug: promptSlug(prompt),
    title: (prompt.title || "Untitled Prompt").trim(),
    description,
    image: absoluteImageUrl(prompt.image_url),
    imageAlt: `${(prompt.title || "AI photo prompt").trim()} visual reference`,
    category: slug,
    categoryName: name,
    featured: Boolean(prompt.is_featured),
    isPremium: Boolean(prompt.is_premium),
    createdAt: prompt.created_at,
    updatedAt: prompt.updated_at,
    prompt: prompt.content ?? null,
    about: description,
    bestFor: `${name} photo ideas and creative portrait inspiration.`,
    framing: "Use the aspect ratio or framing described in the prompt, then adapt it for your intended platform.",
    customization: "Adjust the clothing, background, lighting, colors and composition to match your own idea.",
    tags: [],
  };
}

async function apiFetch(path) {
  const response = await fetch(`${WEB_API}${path}`, {
    next: { revalidate: 300 },
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`Prompt API request failed with status ${response.status}`);
  }

  return response.json();
}

async function fetchPromptPage({ page = 1, limit = PAGE_SIZE, categoryId, query } = {}) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(Math.min(limit, PAGE_SIZE)),
  });

  if (categoryId) params.set("category_id", categoryId);
  if (query) params.set("search", query);

  return apiFetch(`/prompts?${params.toString()}`);
}

async function fetchAllPrompts({ categoryId, query } = {}) {
  const first = await fetchPromptPage({ page: 1, limit: PAGE_SIZE, categoryId, query });
  if (!first) return { items: [], total: 0 };

  const items = [...first.items];
  for (let page = 2; page <= first.pages; page += 1) {
    const next = await fetchPromptPage({ page, limit: PAGE_SIZE, categoryId, query });
    if (next?.items?.length) items.push(...next.items);
  }

  return { items, total: first.total };
}

export async function listPrompts({
  query = "",
  category,
  sort = "latest",
  limit,
  offset = 0,
} = {}) {
  const selectedCategory = category ? categoryBySlug(category) : null;
  if (category && !selectedCategory) return { items: [], total: 0 };

  const needsFullSet = !limit || sort === "featured" || offset > 0;
  const data = needsFullSet
    ? await fetchAllPrompts({ categoryId: selectedCategory?.id, query })
    : await fetchPromptPage({
        page: 1,
        limit: Math.min(limit, PAGE_SIZE),
        categoryId: selectedCategory?.id,
        query,
      });

  let items = (data?.items || []).map((prompt) => mapPrompt(prompt));

  if (sort === "featured") {
    items = [...items].sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) ||
        Date.parse(b.createdAt || 0) - Date.parse(a.createdAt || 0),
    );
  } else {
    items = [...items].sort(
      (a, b) => Date.parse(b.createdAt || 0) - Date.parse(a.createdAt || 0),
    );
  }

  const end = limit ? offset + limit : undefined;
  return {
    items: items.slice(offset, end),
    total: data?.total || items.length,
  };
}

export async function getPrompt(slug) {
  const match = slug.match(/([a-f0-9]{24})$/i);
  if (!match) return null;

  const prompt = await apiFetch(`/prompts/${match[1]}`);
  return prompt ? mapPrompt(prompt, prompt.category_name) : null;
}

export async function getRelatedPrompts(prompt, limit = 4) {
  const category = categoryBySlug(prompt.category);
  const { items } = await listPrompts({
    category: category?.slug,
    sort: "latest",
  });

  return items.filter((item) => item.id !== prompt.id).slice(0, limit);
}

export async function getPromptSlugs() {
  const { items } = await fetchAllPrompts();
  return items.map((prompt) => promptSlug(prompt));
}
