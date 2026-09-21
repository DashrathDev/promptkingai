import Link from "next/link";
import { seo } from "@/lib/site";

export const metadata = seo(
  "Disclaimer",
  "Important information about Prompt King content, prompts, examples, and third-party AI services.",
  "/disclaimer",
);

export default function Page() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">LEGAL CENTER</span>
      <h1>Disclaimer</h1>
      <p className="lead">
        This Disclaimer explains the limitations of the information, prompts,
        examples, links, and third-party services referenced on PromptKingAI.com.
      </p>
      <p className="reference-note">Last updated: September 21, 2026</p>

      <section>
        <h2>1. General Information</h2>
        <p>
          The content published on PromptKingAI.com is provided for general
          informational and creative purposes. We make reasonable efforts to
          keep information useful and accurate, but we do not make any guarantee
          that every page, prompt, guide, example, or description will always be
          complete, current, or error-free.
        </p>
        <p>Use of the website and its content is at your own discretion.</p>
      </section>

      <section>
        <h2>2. Creative Inspiration</h2>
        <p>
          Prompt King provides ready-to-copy AI photo prompts, prompt ideas,
          guides, and visual inspiration. These materials are intended to serve
          as creative starting points.
        </p>
        <p>
          Prompt King does not guarantee that any prompt will produce a specific
          image, style, composition, quality level, or visual result. The website
          itself does not generate or edit images.
        </p>
      </section>

      <section>
        <h2>3. AI Model Performance</h2>
        <p>
          AI models and AI-powered tools can change frequently. Results may vary
          because of factors such as model updates, different AI platforms,
          prompt interpretation, settings and parameters, reference images,
          safety systems, account type or subscription level, and tool-specific
          limitations.
        </p>
        <p>
          A prompt that produces one result in one tool may produce a different
          result in another. Prompt King is not responsible for unexpected
          results, failed generations, usage limits, subscription charges, API
          charges, or other costs associated with third-party AI services.
        </p>
      </section>

      <section>
        <h2>4. Illustrative Images and References</h2>
        <p>
          Images displayed on PromptKingAI.com may be used as visual references
          to illustrate a style, mood, composition, concept, or prompt category.
          Unless specifically stated otherwise, an image shown with a prompt
          should not be interpreted as a verified output produced by that exact
          prompt.
        </p>
        <p>
          Reference images may also be subject to separate ownership, copyright,
          licensing, or third-party rights. The presence of an image on
          PromptKingAI.com does not automatically grant visitors the right to
          reproduce, republish, sell, or redistribute that image.
        </p>
      </section>

      <section>
        <h2>5. Trending and Editorial Labels</h2>
        <p>
          Some prompts or collections may be described as trending, featured,
          latest, popular, editorially selected, or similar terms. Unless a page
          specifically states that a label is based on measured usage data, such
          labels may reflect editorial organization, freshness, relevance, or
          content selection rather than independently verified popularity
          statistics.
        </p>
        <p>
          They should not be interpreted as a guarantee of social media
          performance, search demand, or future popularity.
        </p>
      </section>

      <section>
        <h2>6. Third-Party AI Tools</h2>
        <p>
          Prompt King may suggest that copied prompts can be used with compatible
          third-party AI tools. Prompt King does not own, operate, or control
          those independent services.
        </p>
        <p>We do not guarantee:</p>
        <ul>
          <li>Availability of any third-party AI platform</li>
          <li>Compatibility with every prompt</li>
          <li>Accuracy or safety of generated results</li>
          <li>Pricing or subscription terms</li>
          <li>Data handling practices</li>
          <li>Copyright or commercial-use rights granted by those services</li>
          <li>Continued availability of specific features</li>
        </ul>
        <p>
          Users should review the terms, privacy policies, pricing, and usage
          rules of the AI tool they choose to use.
        </p>
      </section>

      <section>
        <h2>7. External Links</h2>
        <p>
          PromptKingAI.com may contain links to external websites, Google Play,
          AI platforms, advertisers, or other third-party services. These links
          are provided for convenience or informational purposes.
        </p>
        <p>
          Prompt King does not control independent external websites and does
          not guarantee the accuracy, availability, security, legality, or
          completeness of information found on them. The presence of an external
          link does not necessarily imply endorsement, sponsorship, partnership,
          or commercial affiliation.
        </p>
      </section>

      <section>
        <h2>8. Prompt King Android App</h2>
        <p>
          PromptKingAI.com may link to the Prompt King Android application on
          Google Play. The website and Android app are separate services and may
          have different features, permissions, privacy disclosures, or technical
          behavior.
        </p>
        <p>
          Users should review the app&apos;s Google Play listing, Data safety
          information, Privacy Policy, and other applicable disclosures before
          installing or using the app.
        </p>
      </section>

      <section>
        <h2>9. Advertising and Monetization</h2>
        <p>
          PromptKingAI.com may use advertising services such as Google AdSense.
          Advertising displayed on the website may be supplied and controlled by
          third-party advertising providers.
        </p>
        <p>
          The appearance of an advertisement does not mean that Prompt King
          personally recommends, guarantees, or endorses the advertiser, product,
          or service. Users are responsible for evaluating any advertised product
          or service before making a purchase or providing personal information.
        </p>
      </section>

      <section>
        <h2>10. No Guaranteed Outcomes</h2>
        <p>
          Prompt King does not guarantee any particular outcome from using the
          website, prompts, guides, or external tools. This includes AI image
          quality, social media reach or engagement, viral performance, search
          engine rankings, Google Discover traffic, advertising revenue, AdSense
          approval, monetization approval, business results, or creative or
          commercial success.
        </p>
        <p>
          Examples and educational content should not be treated as promises of
          future performance.
        </p>
      </section>

      <section>
        <h2>11. Accuracy and Updates</h2>
        <p>
          Technology, AI services, advertising platforms, search engines,
          policies, and third-party tools can change over time. Information that
          was accurate when published may later become outdated.
        </p>
        <p>
          We may update, correct, replace, or remove content when appropriate,
          but we do not guarantee that every page will be updated immediately
          after an external service changes.
        </p>
      </section>

      <section>
        <h2>12. User Responsibility</h2>
        <p>
          You are responsible for how you use prompts, generated outputs,
          reference images, and third-party services. Before publishing, selling,
          or commercially using AI-generated content, you should review the
          result and make sure your intended use complies with applicable law,
          copyright and trademark rules, privacy and publicity rights, platform
          policies, third-party AI tool terms, and any applicable licensing
          requirements.
        </p>
        <p>
          You should not rely solely on AI-generated output without reviewing it
          for suitability, accuracy, or potential rights issues.
        </p>
      </section>

      <section>
        <h2>13. Professional Advice</h2>
        <p>
          Content on PromptKingAI.com is not intended to constitute legal,
          financial, tax, medical, or other regulated professional advice. If a
          decision requires professional advice, users should consult a suitably
          qualified professional.
        </p>
      </section>

      <section>
        <h2>14. Limitation of Responsibility</h2>
        <p>
          To the maximum extent permitted by applicable law, Prompt King is not
          responsible for losses or damages arising from use or inability to use
          the website, reliance on website content, use of third-party AI
          services, generated outputs, external websites, advertising links,
          service interruptions, third-party charges, unauthorized use of
          reference material, or decisions made using information found on the
          website.
        </p>
        <p>
          Nothing in this Disclaimer limits liability that cannot legally be
          limited or excluded.
        </p>
      </section>

      <section>
        <h2>15. Changes to This Disclaimer</h2>
        <p>
          We may update this Disclaimer when website features, third-party
          services, advertising practices, AI technology, or applicable legal
          requirements change. When the Disclaimer is updated, the Last updated
          date at the top of this page will be revised.
        </p>
      </section>

      <section>
        <h2>16. Contact Us</h2>
        <p>
          If you have questions about this Disclaimer or specific content on
          PromptKingAI.com, please contact Prompt King through the official{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
        <p>
          You may also review our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>,{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>,{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>, and{" "}
          <Link href="/dmca">DMCA Policy</Link>.
        </p>
      </section>
    </article>
  );
}
