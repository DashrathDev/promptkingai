import PolicyPage from "@/components/PolicyPage";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Privacy Policy",
  "How this website handles information.",
  "/privacy-policy",
);
export default function Page() {
  return (
    <PolicyPage
      title={"Privacy Policy"}
      description={"How this website handles information."}
      sections={[
        [
          "Browsing and search",
          "This version of the website does not require an account, accept photo uploads, or include analytics or advertising scripts. Search filters the demonstration catalog in your browser. If you submit a search, the search phrase may appear in the page URL and standard server access logs.",
        ],
        [
          "Hosting and technical data",
          "When a browser requests a page or image, the hosting provider processes connection information such as IP address, request time, requested URL and browser details to deliver the service and maintain its security. Retention and infrastructure settings depend on the hosting account configuration.",
        ],
        [
          "Copying prompts",
          "The Copy Prompt button writes the selected prompt to your device clipboard after you click it. The website does not read your clipboard. No uploaded photos or generated images are handled by this website.",
        ],
        [
          "External services",
          "Links to Google Play and compatible tools take you to independent services whose privacy policies apply. The Android app may have different data practices; review its own privacy information and Google Play Data safety section.",
        ],
        [
          "Your questions",
          "Use the official support route on the Contact page for privacy questions. If analytics, advertising, accounts or other data collection are introduced, this policy must be updated before those features are activated.",
        ],
      ]}
    />
  );
}
