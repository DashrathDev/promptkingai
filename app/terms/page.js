import PolicyPage from "@/components/PolicyPage";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Terms & Conditions",
  "Guidelines for using Prompt King.",
  "/terms",
);
export default function Page() {
  return (
    <PolicyPage
      title={"Terms & Conditions"}
      description={"Guidelines for using Prompt King."}
      sections={[
        [
          "The service",
          "Prompt King provides photo prompt discovery and written creative inspiration. It does not generate or edit images. Tool compatibility and output quality are not guaranteed.",
        ],
        [
          "Responsible use",
          "Use the website and its prompts lawfully. Upload reference photos only to services you choose and only where you have permission. Do not use someone\u2019s likeness to deceive, harass or infringe their rights.",
        ],
        [
          "Content and ownership",
          "You may adapt the prompt text for your own creative workflow. Reference photographs may carry separate rights and are not licensed to you through copying a prompt. Check the chosen tool\u2019s terms for rights associated with any output.",
        ],
        [
          "Availability and changes",
          "Content and features may change, and the service may occasionally be unavailable. Informational examples are provided without a promise that any tool will produce a specific result. These terms do not exclude rights that cannot be excluded under applicable law.",
        ],
        [
          "Questions",
          "Use the Contact page for questions about these terms or a specific page.",
        ],
      ]}
    />
  );
}
