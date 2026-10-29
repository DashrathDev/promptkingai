import Link from "next/link";
import { notFound } from "next/navigation";
import PromptGrid from "@/components/PromptGrid";
import CategoryChips from "@/components/CategoryChips";
import { listPrompts } from "@/lib/prompt-service";
import { seo } from "@/lib/site";

const PER_PAGE = 24;

export async function generateMetadata({ searchParams }) {
  const page = Number((await searchParams)?.page) || 1;
  const path = page > 1 ? `/latest?page=${page}` : "/latest";
  const title = page > 1 ? `Latest Photo Prompts – Page ${page}` : "Latest Photo Prompts";
  return seo(title, "Browse the latest additions to the Prompt King photo prompt library.", path);
}

export default async function Latest({ searchParams }) {
  const page = Math.max(1, Number((await searchParams)?.page) || 1);
  const { items, total } = await listPrompts({
    sort: "latest",
    limit: PER_PAGE,
    offset: (page - 1) * PER_PAGE,
  });
  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  if (page > pages) notFound();

  return (
    <div className="container page-section">
      <div className="page-heading">
        <span className="eyebrow purple">FRESH FROM THE FEED</span>
        <h1>A fresh idea is waiting.</h1>
        <p>Our latest photo prompts, starting with the newest addition.</p>
      </div>
      <CategoryChips />
      <PromptGrid prompts={items} />
      <nav className="pagination" aria-label="Latest prompts pages">
        {page > 1 ? (
          <Link className="button secondary" href={page === 2 ? "/latest" : `/latest?page=${page - 1}`} rel="prev">
            ← Newer
          </Link>
        ) : null}
        <span>
          Page {page} of {pages}
        </span>
        {page < pages ? (
          <Link className="button secondary" href={`/latest?page=${page + 1}`} rel="next">
            Older →
          </Link>
        ) : null}
      </nav>
    </div>
  );
}
