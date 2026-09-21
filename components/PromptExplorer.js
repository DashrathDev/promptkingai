"use client";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import PromptGrid from "./PromptGrid";
export default function PromptExplorer({ prompts, initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const [count, setCount] = useState(8);
  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return prompts.filter((p) =>
      terms.every((t) =>
        `${p.title} ${p.description} ${p.category} ${p.tags.join(" ")}`
          .toLowerCase()
          .includes(t),
      ),
    );
  }, [prompts, query]);
  return (
    <>
      <form
        className="search-bar"
        role="search"
        id="search"
        onSubmit={(e) => {
          e.preventDefault();
          const u = new URL(window.location.href);
          query ? u.searchParams.set("q", query) : u.searchParams.delete("q");
          window.history.replaceState(null, "", u);
        }}
      >
        <Search aria-hidden="true" />
        <label htmlFor="explore-search" className="sr-only">
          Search prompts
        </label>
        <input
          id="explore-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCount(8);
          }}
          placeholder="Search portrait, cinematic, couple, festival…"
          maxLength={160}
        />
        <button className="button" type="submit" aria-label="Apply search">
          <ArrowRight size={20} />
        </button>
      </form>
      <p className="result-count" role="status">
        {results.length} {results.length === 1 ? "prompt" : "prompts"}
        {query ? ` for “${query}”` : " to explore"}
      </p>
      {results.length ? (
        <PromptGrid prompts={results.slice(0, count)} />
      ) : (
        <div className="empty-state">
          <Search size={35} />
          <h2>No prompts found</h2>
          <p>Try a simpler style, such as portrait, couple or cinematic.</p>
          <button className="button" onClick={() => setQuery("")}>
            Clear search
          </button>
        </div>
      )}
      {results.length > count ? (
        <button
          className="button secondary load-more"
          onClick={() => setCount(count + 8)}
        >
          Load more prompts
        </button>
      ) : (
        results.length > 0 && (
          <p className="end-note">
            You’re all caught up. Explore another category for a fresh
            direction.
          </p>
        )
      )}
    </>
  );
}
