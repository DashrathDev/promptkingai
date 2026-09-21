import Image from "next/image";
import { ArrowUpRight, Smartphone, Play } from "lucide-react";
import { PLAY_STORE_URL } from "@/lib/site";

export function PlayButton() {
  return (
    <a href={PLAY_STORE_URL} className="play-button">
      <Play size={27} fill="currentColor" />
      <span>
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
      <ArrowUpRight size={20} />
    </a>
  );
}

export default function AppDownloadCTA({ compact = false }) {
  if (compact)
    return (
      <section className="sidebar-cta">
        <Smartphone size={28} />
        <h2>
          Your next idea.
          <br />
          Always with you.
        </h2>
        <p>
          Keep discovering ready-to-copy photo prompts in the Prompt King
          Android app.
        </p>
        <PlayButton />
      </section>
    );

  return (
    <section className="app-cta" aria-labelledby="app-title">
      <div className="app-cta-copy">
        <span className="eyebrow">INSPIRATION, ON THE GO</span>
        <h2 id="app-title">
          More prompts
          <br />
          in your pocket.
        </h2>
        <p>
          A little scroll. A fresh idea. Explore photo styles and ready-to-copy
          prompts with the Prompt King Android app.
        </p>
        <PlayButton />
        <span className="app-note">
          Discover → Copy → Use in your preferred AI tool
        </span>
      </div>

      <div className="app-showcase" aria-label="Prompt King Android app preview">
        <Image
          src="/images/prompt-king-app-showcase.webp"
          alt="Prompt King Android app showing trending AI photo prompts"
          width={540}
          height={960}
          sizes="(max-width: 639px) 72vw, (max-width: 1023px) 250px, 320px"
          className="app-showcase-image"
        />
      </div>
    </section>
  );
}
