import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Prompt King home">
      <Image
        src="/brand/prompt-king-icon.svg"
        alt=""
        width={42}
        height={42}
        aria-hidden="true"
        priority
      />
      <span>
        Prompt<span className="brand-light"> King</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
