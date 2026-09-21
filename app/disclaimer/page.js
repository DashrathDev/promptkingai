import PolicyPage from "@/components/PolicyPage";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Disclaimer",
  "Understand what Prompt King provides.",
  "/disclaimer",
);
export default function Page() {
  return (
    <PolicyPage
      title={"Disclaimer"}
      description={"Understand what Prompt King provides."}
      sections={[
        [
          "Creative inspiration",
          "Prompts and guides are starting points for exploration. They are not a promise of a particular result. The website does not generate or edit images.",
        ],
        [
          "Illustrative references",
          "Catalog images are photo style references and are not verified outputs of their accompanying prompts. The demo Trending collection is editorially selected, with no claim of measured popularity.",
        ],
        [
          "Independent tools",
          "Prompt King does not control third-party tools, their availability, pricing, policies or outputs. The presence of a link does not imply endorsement or a commercial relationship.",
        ],
        [
          "No guaranteed outcomes",
          "Search rankings, social media performance and advertising approval are not guaranteed. Evaluate any output before publishing it.",
        ],
      ]}
    />
  );
}
