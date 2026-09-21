import Link from "next/link";
import { Crown } from "lucide-react";
export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Prompt King home">
      <span className="brand-mark">
        <Crown size={23} strokeWidth={1.8} />
      </span>
      <span>
        Prompt<span className="brand-light"> King</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
