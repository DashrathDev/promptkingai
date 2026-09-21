import PolicyPage from "@/components/PolicyPage";
import { seo } from "@/lib/site";
export const metadata = seo(
  "Cookie Policy",
  "Cookies and browser storage on this website.",
  "/cookie-policy",
);
export default function Page() {
  return (
    <PolicyPage
      title={"Cookie Policy"}
      description={"Cookies and browser storage on this website."}
      sections={[
        [
          "Current website behavior",
          "The application code does not set tracking cookies, store a browsing profile, or include analytics and advertising tags. Search state is held in memory and may be reflected in the URL. No consent banner is needed for optional trackers in this version because none are included.",
        ],
        [
          "Hosting services",
          "The hosting environment may apply security or operational controls outside the application code. The website operator should review those settings when deploying and update this page to reflect any cookies actually introduced.",
        ],
        [
          "External links",
          "Google Play and other external sites have their own cookie and privacy practices. Their policies apply when you visit them.",
        ],
        [
          "Future changes",
          "Before enabling optional analytics or advertising cookies, update this policy and provide the consent controls required for the deployment\u2019s audience and applicable rules.",
        ],
      ]}
    />
  );
}
