import Link from "next/link";
import { seo } from "@/lib/site";

export const metadata = seo(
  "Terms & Conditions",
  "Read the rules and conditions for using Prompt King, its prompt content, external links, and related services.",
  "/terms",
);

export default function Page() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">LEGAL CENTER</span>
      <h1>Terms &amp; Conditions</h1>
      <p className="lead">
        These Terms &amp; Conditions explain the rules for using PromptKingAI.com
        and its prompt discovery content.
      </p>
      <p className="reference-note">Last updated: September 21, 2026</p>

      <section>
        <h2>1. About Prompt King</h2>
        <p>
          PromptKingAI.com is an AI prompt discovery website designed to help
          users explore and copy ready-to-use AI photo prompts. Prompt King does
          not generate or edit images on this website.
        </p>
        <p>
          Users may copy prompts from the website and use them with compatible
          third-party AI tools of their choice. Results produced by external AI
          tools may vary depending on the service, model, settings, uploaded
          reference material, and other factors.
        </p>
      </section>

      <section>
        <h2>2. Acceptance of These Terms</h2>
        <p>
          By accessing or using PromptKingAI.com, you agree to follow these Terms
          &amp; Conditions. If you do not agree with these terms, please stop
          using the website.
        </p>
      </section>

      <section>
        <h2>3. Eligibility and Lawful Use</h2>
        <p>
          You may use PromptKingAI.com only for lawful purposes and in accordance
          with these Terms. You are responsible for ensuring that your use of
          prompts, reference images, external AI tools, and generated outputs
          complies with applicable laws and third-party terms.
        </p>
        <p>You must not use Prompt King to:</p>
        <ul>
          <li>Violate applicable laws or regulations</li>
          <li>Harass, threaten, impersonate, or deceive others</li>
          <li>Infringe copyright, trademark, privacy, publicity, or other rights</li>
          <li>Create or distribute unlawful, defamatory, or abusive content</li>
          <li>Attempt to damage, disrupt, overload, or interfere with the website</li>
          <li>Circumvent security measures or attempt unauthorized access</li>
          <li>
            Use automated systems in a way that harms the website or other users
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual Property</h2>
        <p>
          Unless otherwise stated, Prompt King owns or controls the website
          design, branding, text, layout, original written content, and other
          materials created specifically for PromptKingAI.com.
        </p>
        <p>
          The Prompt King name, logo, branding, and related visual assets may
          not be copied, reproduced, or used in a way that falsely suggests
          sponsorship, partnership, or endorsement. All rights not expressly
          granted in these Terms are reserved.
        </p>
      </section>

      <section>
        <h2>5. Use of Prompt Content</h2>
        <p>
          Prompt King allows visitors to browse and copy prompt text for personal
          creative use.
        </p>
        <p>You may:</p>
        <ul>
          <li>Copy prompts for your own creative workflow</li>
          <li>Modify prompts to suit your own needs</li>
          <li>Use copied prompts with compatible AI tools</li>
          <li>Experiment with prompt wording and settings</li>
        </ul>
        <p>You may not, without permission:</p>
        <ul>
          <li>
            Republish large portions of the Prompt King prompt library as your
            own database
          </li>
          <li>
            Sell or commercially redistribute Prompt King prompt collections as
            substantially unchanged copies
          </li>
          <li>
            Scrape or systematically copy the website in a way that reproduces
            the service
          </li>
          <li>
            Present Prompt King content as your own original platform or product
          </li>
        </ul>
        <p>
          Individual prompt use for personal or ordinary creative purposes is
          allowed unless otherwise stated.
        </p>
      </section>

      <section>
        <h2>6. Reference Images and Third-Party Content</h2>
        <p>
          Some pages may contain images or visual references used to illustrate a
          style, mood, composition, or prompt concept. Those images may be subject
          to separate rights, licenses, or third-party terms.
        </p>
        <p>
          Viewing an image on PromptKingAI.com does not automatically transfer
          ownership or copyright in that image to you. You should not assume that
          a reference image may be downloaded, republished, sold, or reused
          outside the website unless you have the necessary rights or permission.
        </p>
      </section>

      <section>
        <h2>7. External AI Tools</h2>
        <p>
          Prompt King is not responsible for third-party AI platforms used with
          prompts copied from this website. When you leave PromptKingAI.com and
          use another service, that service&apos;s own terms, privacy policy,
          content rules, usage limits, copyright policies, and safety policies
          apply.
        </p>
        <p>Prompt King does not guarantee:</p>
        <ul>
          <li>Specific visual results</li>
          <li>Compatibility with every AI tool</li>
          <li>Accuracy of generated content</li>
          <li>Availability of any external service</li>
          <li>Ownership rights granted by external providers</li>
        </ul>
        <p>
          You are responsible for reviewing the terms of the AI service you
          choose to use.
        </p>
      </section>

      <section>
        <h2>8. Uploaded Photos and Personal Likeness</h2>
        <p>
          PromptKingAI.com itself does not require users to upload personal
          photos in order to browse or copy prompts. If you choose to upload a
          photo to an external AI service, you are responsible for making sure
          you have the right to use that photo.
        </p>
        <p>
          You should not upload or use another person&apos;s image in a way that
          violates their privacy, publicity, copyright, or other rights. Prompt
          King is not responsible for photographs or personal information
          submitted directly to third-party services.
        </p>
      </section>

      <section>
        <h2>9. Prompt King Android App</h2>
        <p>
          PromptKingAI.com may link to the Prompt King Android app on Google Play.
          The website and Android app may operate differently and may have
          separate features, terms, privacy disclosures, permissions, and data
          practices.
        </p>
        <p>
          Users should review the information provided on the Google Play listing
          and any app-specific legal pages before using the Android application.
        </p>
      </section>

      <section>
        <h2>10. Cookies, Analytics and Advertising</h2>
        <p>
          PromptKingAI.com may use cookies and similar technologies for website
          functionality, security, analytics, preferences, advertising, or
          measurement. The website may use third-party services such as Google
          Analytics, Google AdSense, hosting and security providers, and other
          technical or advertising services.
        </p>
        <p>
          When these services are active, their own terms and privacy policies
          may also apply. For more information, please review our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>.
        </p>
      </section>

      <section>
        <h2>11. Third-Party Links</h2>
        <p>
          PromptKingAI.com may contain links to external websites, Google Play,
          compatible AI tools, advertisers, or other third-party services. These
          links are provided for convenience and information.
        </p>
        <p>
          Prompt King does not control independent third-party websites and is
          not responsible for their content, availability, security, privacy
          practices, products, services, or terms. The inclusion of a link does
          not necessarily mean that Prompt King endorses or guarantees the
          external service.
        </p>
      </section>

      <section>
        <h2>12. Website Availability</h2>
        <p>
          We aim to keep PromptKingAI.com available and functioning properly, but
          uninterrupted access cannot be guaranteed. The website may occasionally
          be updated, modified, temporarily unavailable, restricted for
          maintenance, or affected by hosting or technical issues.
        </p>
        <p>
          We may add, remove, modify, or discontinue features or content without
          prior notice where reasonably necessary.
        </p>
      </section>

      <section>
        <h2>13. Accuracy of Information</h2>
        <p>
          We make reasonable efforts to keep website information useful and
          accurate. However, prompt descriptions, examples, compatibility
          information, guides, and other content may change over time.
        </p>
        <p>
          We do not guarantee that every page will always be complete, current,
          or error-free. If you find an error, you may contact us through the
          official <Link href="/contact">Contact page</Link>.
        </p>
      </section>

      <section>
        <h2>14. Disclaimer of Warranties</h2>
        <p>
          PromptKingAI.com and its content are provided on an &quot;as
          available&quot; and &quot;as is&quot; basis to the extent permitted by
          applicable law.
        </p>
        <p>We do not guarantee that:</p>
        <ul>
          <li>Every prompt will produce a particular result</li>
          <li>A prompt will work identically across different AI tools</li>
          <li>The website will always be uninterrupted or error-free</li>
          <li>External AI platforms will remain available</li>
          <li>
            Third-party services will produce safe, accurate, or suitable
            outputs
          </li>
        </ul>
        <p>
          Creative results depend on many factors outside Prompt King&apos;s
          control.
        </p>
      </section>

      <section>
        <h2>15. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Prompt King will not
          be responsible for indirect, incidental, consequential, or similar
          losses arising from use of the website or reliance on its content.
        </p>
        <p>This may include losses connected with:</p>
        <ul>
          <li>External AI services</li>
          <li>Generated outputs</li>
          <li>Third-party websites</li>
          <li>Service interruptions</li>
          <li>Loss of data</li>
          <li>Unauthorized use of reference material</li>
          <li>Decisions made based on website content</li>
        </ul>
        <p>
          Nothing in these Terms excludes or limits liability where such
          exclusion or limitation is prohibited by applicable law.
        </p>
      </section>

      <section>
        <h2>16. Indemnification</h2>
        <p>
          Where permitted by applicable law, you agree to be responsible for
          claims, losses, or expenses resulting from your unlawful use of
          PromptKingAI.com, violation of these Terms, or infringement of another
          person&apos;s rights. This does not apply where responsibility cannot
          legally be assigned to you.
        </p>
      </section>

      <section>
        <h2>17. Changes to These Terms</h2>
        <p>
          We may update these Terms &amp; Conditions when website features
          change, new services are introduced, legal requirements change,
          advertising or analytics services change, or our policies or business
          practices change.
        </p>
        <p>
          When these Terms are updated, the Last updated date at the top of the
          page will be revised. Continued use of the website after an update means
          the revised Terms apply to future use, subject to applicable law.
        </p>
      </section>

      <section>
        <h2>18. Relationship With Other Policies</h2>
        <p>
          These Terms should be read together with other Prompt King legal pages,
          including our <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>,{" "}
          <Link href="/disclaimer">Disclaimer</Link>,{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>, and{" "}
          <Link href="/dmca">DMCA Policy</Link>.
        </p>
        <p>
          If a specific policy applies to a particular issue, that policy may
          provide additional information.
        </p>
      </section>

      <section>
        <h2>19. Contact Us</h2>
        <p>
          If you have questions about these Terms &amp; Conditions, please
          contact Prompt King through our official{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </article>
  );
}
