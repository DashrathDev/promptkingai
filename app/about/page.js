import Link from "next/link";
import { seo } from "@/lib/site";

export const metadata = seo(
  "About Prompt King",
  "Learn about Prompt King, an AI prompt discovery platform for finding, copying, and customizing creative AI photo prompts.",
  "/about",
);

export default function About() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">ABOUT PROMPT KING</span>
      <h1>Discover better prompts. Create your way.</h1>
      <p className="lead">
        Prompt King helps creators discover trending, ready-to-copy AI photo
        prompts and turn creative ideas into clearer instructions for their
        preferred AI tools.
      </p>

      <section>
        <h2>1. Who We Are</h2>
        <p>
          Prompt King is an AI prompt discovery platform built for people who
          want creative photo ideas without spending hours writing prompts from
          scratch.
        </p>
        <p>
          Our goal is simple: make useful, well-structured AI photo prompts
          easier to discover, understand, customize, and copy.
        </p>
        <p>
          Prompt King is not an AI image generator. We focus on prompt discovery
          and creative inspiration.
        </p>
      </section>

      <section>
        <h2>2. What You Can Discover</h2>
        <p>
          PromptKingAI.com brings together prompts across a growing range of
          creative styles and categories, including portrait, cinematic,
          couple, traditional, festival, bridal, vintage and retro, regional
          styles, trending creative concepts, and other photo-prompt categories.
        </p>
        <p>
          New prompts and categories may be added as creative trends and user
          interests evolve.
        </p>
      </section>

      <section>
        <h2>3. Discover. Copy. Make It Your Own.</h2>
        <p>
          Using Prompt King is designed to be simple. Browse prompts, open the
          one you like, copy the prompt text, customize it if needed, and use it
          with a compatible AI tool of your choice.
        </p>
        <p>
          Our prompt pages may also include useful context such as visual
          direction, composition, lighting, styling, and customization ideas.
        </p>
      </section>

      <section>
        <h2>4. A Prompt Discovery Experience</h2>
        <p>
          Prompt King does not generate or edit images on PromptKingAI.com.
          Instead, we help users discover the words and creative directions
          behind different photo concepts.
        </p>
        <p>
          The actual image-generation process happens through independent AI
          tools selected by the user. Different AI tools may interpret the same
          prompt differently, so results can vary.
        </p>
      </section>

      <section>
        <h2>5. Our Approach to Prompt Content</h2>
        <p>
          We aim to make prompt content clear, useful, easy to copy, easy to
          customize, relevant to the intended visual style, and helpful for both
          beginners and experienced creators.
        </p>
        <p>
          Where appropriate, prompts may be reviewed or edited for clearer
          subject descriptions, lighting, framing, styling, and overall
          consistency. You can learn more about our content standards in our{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>
      </section>

      <section>
        <h2>6. Reference Images</h2>
        <p>
          Images shown with prompts may be used as visual references for style,
          mood, clothing, composition, lighting, or creative direction.
        </p>
        <p>
          Unless specifically stated otherwise, reference images should not be
          interpreted as verified outputs produced by the exact accompanying
          prompt. Results depend on the AI tool, model, settings, reference
          material, and prompt interpretation used by the creator.
        </p>
      </section>

      <section>
        <h2>7. Trending and Featured Content</h2>
        <p>
          Prompt King may highlight prompts as Trending, Featured, Latest,
          Premium, or through other categories. These labels help organize and
          surface interesting content.
        </p>
        <p>
          Unless specifically stated as data-based, labels such as Trending or
          Featured may reflect editorial selection, freshness, relevance, or
          current creative interest rather than a real-time popularity ranking.
        </p>
      </section>

      <section>
        <h2>8. Prompt King Android App</h2>
        <p>
          Prompt King is also available as an Android app. The app makes it easy
          to browse trending AI photo prompts, explore categories, and copy
          prompts directly from your phone.
        </p>
        <p>
          You can find the official Prompt King app on Google Play through the
          download links provided on this website.
        </p>
      </section>

      <section>
        <h2>9. Built for Creators</h2>
        <p>
          Prompt King is designed for social media creators, AI photo
          enthusiasts, students, photographers, designers, content creators,
          Instagram and WhatsApp users, and anyone exploring creative AI
          prompts.
        </p>
        <p>You do not need to be an expert in prompt writing to get started.</p>
      </section>

      <section>
        <h2>10. Transparency Matters</h2>
        <p>
          We aim to clearly distinguish between prompt discovery and image
          generation, reference images and verified outputs, editorial
          selections and measured popularity, and editorial content and
          advertising.
        </p>
        <p>
          We do not intentionally publish fabricated ratings, fake testimonials,
          or unsupported performance guarantees.
        </p>
      </section>

      <section>
        <h2>11. Our Goal</h2>
        <p>
          Our goal is to make Prompt King a useful destination for discovering
          creative AI photo prompts that are easy to understand and ready to
          adapt.
        </p>
        <p>
          As AI tools and creative trends evolve, we plan to continue improving
          the prompt library, categories, guides, and overall discovery
          experience.
        </p>
      </section>

      <div className="prose-cta">
        <h2>Explore Prompt King</h2>
        <p>Looking for your next creative direction?</p>
        <Link href="/explore" className="button">
          Explore prompts →
        </Link>
        <p>
          For questions, feedback, corrections, or business-related enquiries,
          visit our <Link href="/contact">Contact page</Link>.
        </p>
      </div>
    </article>
  );
}
