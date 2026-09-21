import FAQ from "@/components/FAQ";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Frequently Asked Questions",
  "Answers about discovering, copying and customizing photo prompts with Prompt King.",
  "/faq",
);
export default function FaqPage() {
  return (
    <div className="container prose page-section">
      <span className="eyebrow purple">GOOD QUESTIONS</span>
      <h1>A little clarity before you create.</h1>
      <FAQ
        items={[
          [
            "What is Prompt King?",
            "Prompt King is a photo prompt discovery website and Android app. Browse styles, read a prompt, copy it, and use it in your preferred compatible AI tool.",
          ],
          [
            "Does Prompt King generate the image?",
            "No. Prompt King helps users discover and copy prompts that can be used with compatible AI tools.",
          ],
          [
            "Can I change a prompt?",
            "Yes. Customize the clothing, background, lighting or framing to fit your own idea.",
          ],
          [
            "Will the result match the reference photo?",
            "Not necessarily. The photos are illustrative style references. Results vary by tool, settings, references and your prompt changes.",
          ],
          [
            "How do I download the app?",
            "Use any Download App or Google Play button on this site to open the official Prompt King Android app listing.",
          ],
        ]}
      />
    </div>
  );
}
