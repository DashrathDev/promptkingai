import { categories } from "@/data/categories";
import promptSeo from "@/data/prompt-seo.json";

const seoById = new Map(promptSeo.map((entry) => [entry.id, entry]));
const MIN_INDEXABLE_WORDS = 60;

function wordCount(text = "") {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

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
  const title = seoById.get(prompt.id)?.title || prompt.title;
  return `${slugify(title) || "prompt"}-${prompt.id}`;
}

function parsePromptContent(rawContent, rawDescription = "") {
  if (!rawContent || typeof rawContent !== "string") {
    return {
      prompt: rawDescription || "",
      negativePrompt: null,
      camera: null,
      lighting: null,
      colorGrade: null,
      aspectRatio: "9:16",
    };
  }

  const raw = rawContent.trim();
  const firstBrace = raw.indexOf("{");
  const lastBrace = raw.lastIndexOf("}");

  let parsed = null;
  let prefix = "";

  if (firstBrace !== -1 && lastBrace > firstBrace) {
    prefix = raw.slice(0, firstBrace).trim();
    const jsonStr = raw.slice(firstBrace, lastBrace + 1);
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      const extractField = (key) => {
        const match = jsonStr.match(new RegExp(`"${key}"\\s*:\\s*"([^"]+)"`));
        return match ? match[1] : null;
      };
      parsed = {
        recreation_prompt: extractField("recreation_prompt"),
        negative_prompt: extractField("negative_prompt"),
        camera: extractField("camera"),
        lighting: extractField("lighting"),
        color_grade: extractField("color_grade"),
      };
    }
  }

  if (parsed) {
    const promptBody =
      parsed.recreation_prompt || parsed.prompt || parsed.subject || "";
    let cleanPrompt = "";
    if (prefix && promptBody) {
      cleanPrompt =
        prefix.endsWith(".") || prefix.endsWith(",")
          ? `${prefix} ${promptBody}`
          : `${prefix}. ${promptBody}`;
    } else {
      cleanPrompt = promptBody || prefix || rawDescription;
    }

    let aspectRatio = "9:16";
    const arMatch = cleanPrompt.match(/aspect ratio\s*([0-9]+:[0-9]+)/i);
    if (arMatch) aspectRatio = arMatch[1];

    return {
      prompt: cleanPrompt.trim(),
      negativePrompt: parsed.negative_prompt || null,
      camera: parsed.camera || null,
      lighting: parsed.lighting || null,
      colorGrade: parsed.color_grade || null,
      aspectRatio,
    };
  }

  let aspectRatio = "9:16";
  const arMatch = raw.match(/aspect ratio\s*([0-9]+:[0-9]+)/i);
  if (arMatch) aspectRatio = arMatch[1];

  return {
    prompt: raw,
    negativePrompt: null,
    camera: null,
    lighting: null,
    colorGrade: null,
    aspectRatio,
  };
}

function mapPrompt(prompt, categoryName) {
  const category = categoryById(prompt.category_id);
  const name = (categoryName || category?.name || "Prompt").trim();
  const slug = category?.slug || slugify(name) || "prompt";
  const override = seoById.get(prompt.id);
  const apiDescription = (prompt.description || "").trim();
  const title = (override?.title || prompt.title || "Untitled Prompt").trim();
  const description = (
    override?.description ||
    apiDescription ||
    "Explore this creative AI photo prompt."
  ).trim();
  const hasRealContent = Boolean(prompt.content ?? true);
  // Index only prompts with substantial, unique text. New prompts added from the
  // admin panel are indexed automatically once their description is long enough.
  const indexable = override
    ? override.index !== false
    : hasRealContent && wordCount(apiDescription) >= MIN_INDEXABLE_WORDS;

  const parsedContent = parsePromptContent(prompt.content, description);
  const promptText = parsedContent.prompt || description;

  const autoStyleNotes =
    parsedContent.lighting || parsedContent.camera
      ? [parsedContent.lighting, parsedContent.camera, parsedContent.colorGrade]
          .filter(Boolean)
          .join(". ")
      : null;

  return {
    id: prompt.id,
    slug: promptSlug(prompt),
    title,
    description,
    metaDescription:
      description.length > 158
        ? `${description.slice(0, 155).replace(/\s+\S*$/, "")}…`
        : description,
    image: absoluteImageUrl(prompt.image_url),
    imageAlt: `${title} visual reference`,
    category: slug,
    categoryName: name,
    featured: Boolean(prompt.is_featured),
    isPremium: Boolean(prompt.is_premium),
    createdAt: prompt.created_at,
    updatedAt: prompt.updated_at,
    prompt: promptText,
    negativePrompt: parsedContent.negativePrompt,
    camera: parsedContent.camera,
    lighting: parsedContent.lighting,
    colorGrade: parsedContent.colorGrade,
    aspectRatio: parsedContent.aspectRatio,
    about: description,
    styleNotes: override?.styleNotes || autoStyleNotes,
    tips: override?.tips?.length ? override.tips : null,
    indexable,
    bestFor: `${name} photo ideas and creative portrait inspiration.`,
    framing: `Use ${parsedContent.aspectRatio} portrait framing as described in the prompt, or adapt to 4:5 for feed posts.`,
    customization:
      "Adjust the clothing, background, lighting, colors and composition to match your own idea.",
    tags: [],
  };
}

async function apiFetch(path) {
  const response = await fetch(`${WEB_API}${path}`, {
    next: { revalidate: 3600 },
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

  const maxPages = Math.min(first.pages || 1, 6);
  if (maxPages <= 1) return { items: first.items, total: first.total };

  const pagePromises = [];
  for (let page = 2; page <= maxPages; page += 1) {
    pagePromises.push(fetchPromptPage({ page, limit: PAGE_SIZE, categoryId, query }));
  }
  const remainingPages = await Promise.all(pagePromises);
  const items = [...first.items];
  for (const p of remainingPages) {
    if (p?.items?.length) items.push(...p.items);
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
  return items
    .map((prompt) => mapPrompt(prompt))
    .filter((prompt) => prompt.indexable)
    .map((prompt) => prompt.slug);
}
