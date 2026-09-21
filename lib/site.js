export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://promptkingai.com";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.promtking.app";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
export function seo(title, description, path = "/", image) {
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
      ...(image
        ? { images: [{ url: `${SITE_URL}${image}`, alt: title }] }
        : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      ...(image ? { images: [`${SITE_URL}${image}`] } : {}),
    },
  };
}
