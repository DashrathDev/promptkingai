import BlogPreview from "@/components/BlogPreview";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Photo Prompt Guides",
  "Practical guides to using, customizing and improving AI photo prompts.",
  "/blog",
);
export default function Blog() {
  return (
    <div className="container page-section">
      <div className="page-heading">
        <span className="eyebrow purple">THE CREATIVE NOTEBOOK</span>
        <h1>Better prompts start here.</h1>
        <p>
          Clear ideas. Thoughtful details. Practical ways to make a prompt your
          own.
        </p>
      </div>
      <BlogPreview />
    </div>
  );
}
