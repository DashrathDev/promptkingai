export default function Loading() {
  return (
    <div
      className="container page-section"
      role="status"
      aria-label="Loading prompts"
    >
      <span className="sr-only">Loading prompts…</span>
      <div className="skeleton skeleton-heading" />
      <div className="prompt-grid">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}>
            <div className="skeleton skeleton-image" />
            <div className="skeleton skeleton-line" />
          </div>
        ))}
      </div>
    </div>
  );
}
