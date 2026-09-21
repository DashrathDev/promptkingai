import Link from "next/link";

export default function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Prompt King home">
      <img
        src="/brand/prompt-king-icon.png"
        alt=""
        width="42"
        height="42"
        aria-hidden="true"
        className="brand-logo"
      />
      <span>
        Prompt<span className="brand-light"> King</span>
        <span className="brand-dot">.</span>
      </span>
    </Link>
  );
}
