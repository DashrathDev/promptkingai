import "./globals.css";

export const metadata = {
  title: {
    default: "Prompt King AI — Trending AI Photo Prompts",
    template: "%s | Prompt King AI",
  },
  description:
    "Discover trending, ready-to-copy AI photo prompts for portraits, cinematic photos, couples, festivals and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
