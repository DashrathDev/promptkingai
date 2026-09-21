import Link from "next/link";
import {
  Flame,
  UserRound,
  Users,
  Clapperboard,
  Sparkles,
  Flower2,
  Camera,
} from "lucide-react";
import { categories } from "@/data/categories";
const icons = [
  Flame,
  Camera,
  UserRound,
  UserRound,
  Users,
  Clapperboard,
  Flower2,
  Sparkles,
];
export default function CategoryChips({ active }) {
  return (
    <nav className="category-chips" aria-label="Prompt categories">
      {categories.map((c, i) => {
        const Icon = icons[i];
        return (
          <Link
            className={`chip ${active === c.slug ? "active" : ""}`}
            aria-current={active === c.slug ? "page" : undefined}
            href={`/category/${c.slug}`}
            key={c.slug}
          >
            <Icon size={17} />
            {c.name}
          </Link>
        );
      })}
    </nav>
  );
}
