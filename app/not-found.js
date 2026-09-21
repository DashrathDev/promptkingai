import Link from "next/link";
import { Compass } from "lucide-react";
export const metadata = {
  title: "Prompt not found",
  robots: { index: false, follow: true },
};
export default function NotFound() {
  return (
    <div className="container not-found">
      <span className="error-code">404</span>
      <Compass size={45} />
      <h1>Prompt not found</h1>
      <p>
        This idea may have moved. A fresh direction is waiting in the prompt
        library.
      </p>
      <Link href="/explore" className="button">
        Back to Explore →
      </Link>
    </div>
  );
}
