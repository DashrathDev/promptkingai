import { SITE_URL } from "@/lib/site";
import { getPromptSlugs } from "@/lib/prompt-service";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
export default async function sitemap() {
  const paths = [
    "",
    "/explore",
    "/categories",
    "/latest",
    "/blog",
    "/about",
    "/contact",
    "/faq",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/cookie-policy",
    "/editorial-policy",
    "/dmca",
    ...categories.map((c) => `/category/${c.slug}`),
    ...(await getPromptSlugs()).map((s) => `/prompt/${s}`),
    ...guides.map((g) => `/blog/${g.slug}`),
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path.includes("policy") ? "yearly" : "weekly",
    priority: path === "" ? 1 : path.startsWith("/prompt") ? 0.8 : 0.6,
  }));
}
