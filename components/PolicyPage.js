import Link from "next/link";
export default function PolicyPage({ title, description, sections }) {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">PROMPT KING / WEBSITE INFORMATION</span>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
      <p className="reference-note">Last updated: September 21, 2026</p>
      {sections.map(([heading, text]) => (
        <section key={heading}>
          <h2>{heading}</h2>
          <p>{text}</p>
        </section>
      ))}
      <p>
        Questions? <Link href="/contact">Contact Prompt King →</Link>
      </p>
    </article>
  );
}
