import Link from "next/link";
import {
  Flame,
  Camera,
  UserRound,
  Users,
  Sparkles,
  Flower2,
  Bike,
  CakeSlice,
  Baby,
  Heart,
  WandSparkles,
  Image as ImageIcon,
} from "lucide-react";
import { categories } from "@/data/categories";

const icons = {
  trending: Flame,
  poster: ImageIcon,
  couple: Users,
  girls: UserRound,
  "bike-car": Bike,
  children: Baby,
  birthday: CakeSlice,
  rajasthan: Sparkles,
  northeast: Flower2,
  bridal: Heart,
  "south-india": Sparkles,
  "vintage-retro": Camera,
  premium: WandSparkles,
  "valentines-day": Heart,
  enhance: WandSparkles,
  festival: Sparkles,
};

export default function CategoryChips({ active }) {
  return (
    <nav className="category-chips" aria-label="Prompt categories">
      {categories.map((c) => {
        const Icon = icons[c.slug] || Camera;
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
