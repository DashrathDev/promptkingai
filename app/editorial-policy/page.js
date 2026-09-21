import PolicyPage from "@/components/PolicyPage";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Editorial Policy",
  "How we approach prompt content.",
  "/editorial-policy",
);
export default function Page() {
  return (
    <PolicyPage
      title={"Editorial Policy"}
      description={"How we approach prompt content."}
      sections={[
        [
          "Useful creative context",
          "A prompt page should include an original introduction, the complete prompt, an explanation of the visual direction, practical customization ideas and relevant questions. Clear context matters as much as the reference image.",
        ],
        [
          "Accurate labels",
          "Reference photographs are labeled as illustrative. We do not present them as verified outputs unless they have actually been tested and documented. Trending content in this demonstration is an editorial selection, not a data-based popularity claim.",
        ],
        [
          "Review and corrections",
          "Prompts should be checked for consistent subject descriptions, framing, lighting and responsible reference-photo use. Report a confusing instruction, inaccurate statement or content concern through the Contact page with its URL.",
        ],
        [
          "Transparency",
          "We do not publish invented ratings, user counts or testimonials. Sponsorships and commercial relationships, if introduced, should be clearly disclosed. New content should retain the distinction between prompt discovery and image creation in another tool.",
        ],
      ]}
    />
  );
}
