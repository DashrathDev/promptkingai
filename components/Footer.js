import Link from "next/link";
import Brand from "./Brand";
import { PLAY_STORE_URL } from "@/lib/site";
const groups = {
  Explore: [
    ["Trending", "/category/trending"],
    ["Latest Prompts", "/latest"],
    ["Categories", "/categories"],
    ["Blog", "/blog"],
  ],
  Company: [
    ["About Us", "/about"],
    ["Contact Us", "/contact"],
    ["FAQ", "/faq"],
    ["Download App", PLAY_STORE_URL],
  ],
  Legal: [
    ["Privacy Policy", "/privacy-policy"],
    ["Terms & Conditions", "/terms"],
    ["Disclaimer", "/disclaimer"],
    ["Cookie Policy", "/cookie-policy"],
    ["Editorial Policy", "/editorial-policy"],
    ["DMCA / Copyright", "/dmca"],
  ],
};
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>
            Your next photo idea starts here.
            <br />
            Discover a style. Copy a prompt.
            <br />
            Make it your own in a compatible AI tool.
          </p>
          <span className="footer-note">An idea is just the beginning.</span>
        </div>
        {Object.entries(groups).map(([name, links]) => (
          <div key={name}>
            <h2>{name}</h2>
            <ul>
              {links.map(([title, url]) => (
                <li key={title}>
                  <Link href={url}>{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Prompt King. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
