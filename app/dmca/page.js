import PolicyPage from "@/components/PolicyPage";
import { seo } from "@/lib/site";
export const metadata = seo(
  "DMCA / Copyright",
  "Report a concern about material on Prompt King.",
  "/dmca",
);
export default function Page() {
  return (
    <PolicyPage
      title={"DMCA / Copyright"}
      description={"Report a concern about material on Prompt King."}
      sections={[
        [
          "Respect for creative work",
          "If you believe material on this website uses your work without authorization, contact us using the official support route on the Contact page. Include enough information to identify the work and the relevant website content.",
        ],
        [
          "What to include",
          "Provide your name and contact information, identify the original work, list the exact URLs you are reporting, and explain why the use is unauthorized. Include a statement that your report is accurate and that you are the rights holder or authorized to act for them, together with your electronic signature.",
        ],
        [
          "Reviewing a report",
          "Reports can be reviewed and the disputed material may be removed or corrected. We may need additional information to identify the content or understand authorization. Do not include unrelated sensitive personal information.",
        ],
        [
          "Reference image rights",
          "Reference images retain their respective rights and license conditions. Copying a prompt does not grant ownership or a license to the accompanying photograph. This page provides a reporting route and does not claim registration of a designated DMCA agent.",
        ],
      ]}
    />
  );
}
