export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://promptkingai.com";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.promtking.app";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

export const DEFAULT_SOCIAL_IMAGE = "/brand/prompt-king-icon.png";

export function seo(title, description, path = "/", image) {
  const socialImage = image || DEFAULT_SOCIAL_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Prompt King`,
      description,
      url: `${SITE_URL}${path}`,
      siteName: "Prompt King",
      type: "website",
      images: [{ url: `${SITE_URL}${socialImage}`, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${socialImage}`],
    },
  };
}
