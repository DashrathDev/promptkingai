import { Search, ArrowRight } from "lucide-react";
export default function SearchBar({ defaultValue = "" }) {
  return (
    <form action="/explore" className="search-bar" role="search" id="search">
      <Search size={23} aria-hidden="true" />
      <label htmlFor="prompt-search" className="sr-only">
        Search photo prompts
      </label>
      <input
        id="prompt-search"
        name="q"
        type="search"
        placeholder="Search portrait, cinematic, couple, festival…"
        defaultValue={defaultValue}
        maxLength={160}
      />
      <button className="button" type="submit">
        <span>Find inspiration</span>
        <ArrowRight size={19} />
      </button>
    </form>
  );
}
