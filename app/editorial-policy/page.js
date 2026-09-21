import Link from "next/link";
import { seo } from "@/lib/site";

export const metadata = seo(
  "Editorial Policy",
  "How Prompt King approaches prompt content, visual references, corrections, and editorial transparency.",
  "/editorial-policy",
);

export default function Page() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">LEGAL CENTER</span>
      <h1>Editorial Policy</h1>
      <p className="lead">
        This Editorial Policy explains how Prompt King approaches prompt
        content, visual references, guides, labels, corrections, and
        transparency on PromptKingAI.com.
      </p>
      <p className="reference-note">Last updated: September 21, 2026</p>

      <section>
        <h2>1. Purpose of This Editorial Policy</h2>
        <p>
          PromptKingAI.com is designed to help users discover useful,
          ready-to-copy AI photo prompts and related creative guidance. Our
          editorial goal is to publish content that is clear, useful, original,
          accurate, transparent, easy to understand, and relevant to the prompt
          or creative topic being presented.
        </p>
        <p>
          Prompt King is a prompt discovery platform. The website itself does
          not generate or edit images.
        </p>
      </section>

      <section>
        <h2>2. Our Editorial Principles</h2>
        <p>Content published on PromptKingAI.com should provide genuine value to visitors.</p>
        <p>We aim to avoid:</p>
        <ul>
          <li>Misleading claims</li>
          <li>Artificially exaggerated titles</li>
          <li>Fake statistics</li>
          <li>Invented user counts</li>
          <li>Fabricated reviews or testimonials</li>
          <li>Unsupported performance guarantees</li>
          <li>Content created only to attract clicks without useful context</li>
        </ul>
        <p>
          Headlines and descriptions should accurately reflect the content
          available on the page.
        </p>
      </section>

      <section>
        <h2>3. Originality and Content Quality</h2>
        <p>
          Prompt King aims to publish original descriptions, explanations,
          guides, and editorial context. Prompt pages should not exist solely as
          collections of copied text without additional value.
        </p>
        <p>Where appropriate, a prompt page may include:</p>
        <ul>
          <li>An original introduction</li>
          <li>The prompt itself</li>
          <li>An explanation of the intended visual direction</li>
          <li>Composition or lighting guidance</li>
          <li>Customization ideas</li>
          <li>Practical usage suggestions</li>
          <li>Relevant questions and answers</li>
        </ul>
        <p>
          Content should be organized so users can understand what a prompt is
          intended to achieve before using it.
        </p>
      </section>

      <section>
        <h2>4. Prompt Quality Standards</h2>
        <p>
          Before a prompt is published or featured, we aim to review it for
          clarity and usefulness. Editorial checks may include subject
          consistency, composition, camera direction, lighting instructions,
          clothing and styling details, background description, image
          orientation, conflicting instructions, unnecessary repetition,
          reference-photo instructions, and compatibility with common AI
          workflows.
        </p>
        <p>
          We may edit prompt text for readability, consistency, or clarity while
          preserving its intended creative direction.
        </p>
      </section>

      <section>
        <h2>5. Accurate Titles and Labels</h2>
        <p>
          Titles, categories, and labels should describe the content accurately.
          Prompt King may use labels such as Trending, Featured, Latest,
          Premium, category names, or editorial selections.
        </p>
        <p>
          These labels should not be interpreted as independent statistical
          claims unless a page specifically explains the data or measurement
          used. For example, a prompt labeled Trending may be editorially
          selected based on relevance, freshness, creative interest, or current
          content direction rather than verified real-time popularity data.
        </p>
      </section>

      <section>
        <h2>6. Reference Images</h2>
        <p>
          Images displayed with prompts may be used to communicate style, mood,
          framing, clothing, lighting, composition, or creative direction.
        </p>
        <p>
          Unless explicitly stated otherwise, reference images should not be
          presented as verified outputs created by the exact prompt displayed on
          the page. The purpose of a reference image is to help users understand
          the visual concept.
        </p>
        <p>
          Reference images may also be subject to separate copyright, licensing,
          or ownership rights.
        </p>
      </section>

      <section>
        <h2>7. Prompt Results and AI Outputs</h2>
        <p>
          Prompt King does not guarantee that a prompt will reproduce a
          reference image or generate an identical result. External AI models
          may interpret the same prompt differently.
        </p>
        <p>
          Results can vary because of the AI model, model version, user
          settings, reference images, aspect ratio, safety systems, prompt
          interpretation, and platform-specific features. We aim to avoid
          presenting illustrative content as a guaranteed outcome.
        </p>
      </section>

      <section>
        <h2>8. AI-Assisted Editorial Work</h2>
        <p>
          Prompt King may use AI-assisted tools as part of research, drafting,
          formatting, editing, categorization, or creative workflow. AI
          assistance does not replace our responsibility to review published
          content.
        </p>
        <p>
          Where practical, content should be checked for accuracy, relevance,
          clear wording, internal consistency, misleading claims, and obvious
          errors. AI-generated or AI-assisted text should not knowingly be
          published as factual information without appropriate review where
          factual accuracy matters.
        </p>
      </section>

      <section>
        <h2>9. Fact Checking and Verification</h2>
        <p>
          When a page contains factual claims rather than purely creative prompt
          instructions, we aim to verify those claims before publication when
          reasonably possible.
        </p>
        <p>
          This is especially important for information relating to external
          services, platform features, pricing, tool availability, policies,
          technical instructions, and legal or privacy-related information.
          Because third-party services change frequently, previously accurate
          information may become outdated and may be updated when changes become
          known.
        </p>
      </section>

      <section>
        <h2>10. Corrections and Updates</h2>
        <p>
          We welcome reports of errors, unclear instructions, outdated
          information, or other content concerns. When a meaningful error is
          identified, we may correct the text, clarify the wording, update
          outdated information, replace inaccurate labels, or remove content
          where appropriate.
        </p>
        <p>
          Minor formatting or grammar corrections may be made without a
          separate correction notice. Visitors can report issues through our
          official <Link href="/contact">Contact page</Link> and should include
          the relevant page URL whenever possible.
        </p>
      </section>

      <section>
        <h2>11. Sponsored and Commercial Content</h2>
        <p>
          If Prompt King publishes sponsored content, paid placements,
          partnerships, or other commercial material, we aim to make that
          relationship clear where disclosure is appropriate.
        </p>
        <p>
          Sponsored material should not be presented as independent editorial
          opinion without disclosure. Commercial relationships should not
          automatically determine whether a prompt or guide is described as
          useful, trending, or recommended.
        </p>
      </section>

      <section>
        <h2>12. Advertising Transparency</h2>
        <p>
          PromptKingAI.com may display advertising through services such as
          Google AdSense. Advertising is separate from our editorial content.
        </p>
        <p>
          The presence of an advertisement does not mean Prompt King endorses or
          guarantees the advertiser, product, or service. Where technically
          possible, advertising and editorial content should remain visually
          distinguishable.
        </p>
      </section>

      <section>
        <h2>13. Affiliate Links</h2>
        <p>
          If PromptKingAI.com introduces affiliate links in the future,
          appropriate disclosures should be provided where required. An
          affiliate relationship means Prompt King may receive a commission or
          other benefit if a visitor takes an action through a qualifying link.
        </p>
        <p>Affiliate relationships should not be hidden from users.</p>
      </section>

      <section>
        <h2>14. Copyright and Third-Party Rights</h2>
        <p>
          Prompt King aims to respect copyright, trademark, privacy, publicity,
          and other intellectual property rights. We do not intend to present
          third-party material as our own where we do not have the right to do
          so.
        </p>
        <p>
          If you believe content on PromptKingAI.com infringes your rights,
          please review our <Link href="/dmca">DMCA Policy</Link> or contact us
          with sufficient information to identify the material.
        </p>
      </section>

      <section>
        <h2>15. Responsible Creative Use</h2>
        <p>
          Prompt King encourages responsible use of AI prompts. Users should
          ensure that photographs, names, likenesses, logos, copyrighted
          material, or other third-party content used with external AI tools are
          used lawfully and with appropriate permission where required.
        </p>
        <p>
          Prompt King does not encourage prompts intended to deceive, harass,
          impersonate, or violate the rights of others.
        </p>
      </section>

      <section>
        <h2>16. Reviews, Ratings and Testimonials</h2>
        <p>
          Prompt King does not intentionally publish fabricated reviews, fake
          user ratings, invented download numbers, or fictional testimonials.
        </p>
        <p>
          If real user reviews, ratings, usage statistics, or testimonials are
          displayed in the future, they should be presented in a way that
          accurately reflects their source and context. Editorial content should
          not create a false impression of independent customer feedback.
        </p>
      </section>

      <section>
        <h2>17. Editorial Independence</h2>
        <p>
          Editorial decisions should primarily be based on usefulness,
          relevance, quality, clarity, user interest, content freshness, and
          creative value.
        </p>
        <p>
          Advertisers, partners, or third-party services should not receive
          undisclosed control over normal editorial conclusions or content
          labels. Where a commercial relationship materially affects content,
          appropriate disclosure should be considered.
        </p>
      </section>

      <section>
        <h2>18. Changes to This Editorial Policy</h2>
        <p>
          We may update this Editorial Policy as PromptKingAI.com develops, new
          content formats are introduced, or our editorial practices change.
          When the policy is updated, the Last updated date at the top of this
          page will be revised.
        </p>
      </section>

      <section>
        <h2>19. Contact and Corrections</h2>
        <p>
          If you identify incorrect information, a misleading label, a confusing
          prompt, a copyright concern, an outdated guide, a reference-image
          concern, or another editorial issue, please contact Prompt King through
          our official <Link href="/contact">Contact page</Link>.
        </p>
        <p>
          When reporting a content issue, including the relevant page URL and a
          brief explanation will help us review it more efficiently.
        </p>
        <p>
          You may also review our <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>,{" "}
          <Link href="/disclaimer">Disclaimer</Link>,{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>, and{" "}
          <Link href="/dmca">DMCA Policy</Link>.
        </p>
      </section>
    </article>
  );
}
