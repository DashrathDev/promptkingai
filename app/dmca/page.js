import Link from "next/link";
import { seo } from "@/lib/site";

export const metadata = seo(
  "DMCA / Copyright Policy",
  "Learn how to report copyright concerns relating to material on Prompt King.",
  "/dmca",
);

export default function Page() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">LEGAL CENTER</span>
      <h1>DMCA / Copyright Policy</h1>
      <p className="lead">
        Prompt King respects the intellectual property rights of creators,
        photographers, artists, publishers, and other rights holders. This
        policy explains how to report copyright concerns relating to content
        displayed on PromptKingAI.com.
      </p>
      <p className="reference-note">Last updated: September 21, 2026</p>

      <section>
        <h2>1. Respect for Copyright</h2>
        <p>
          PromptKingAI.com aims to use content responsibly and does not intend
          to knowingly publish material that infringes the rights of others. If
          you believe that content available on PromptKingAI.com infringes your
          copyright or other intellectual property rights, you may contact us
          and request a review.
        </p>
        <p>
          We take reasonable copyright concerns seriously and may remove,
          replace, restrict, or correct material where appropriate.
        </p>
      </section>

      <section>
        <h2>2. Copyright Infringement Reports</h2>
        <p>
          If you believe that your copyrighted work has been used on
          PromptKingAI.com without authorization, please submit a notice through
          our official <Link href="/contact">Contact page</Link>.
        </p>
        <p>Your report should clearly identify:</p>
        <ul>
          <li>The copyrighted work you believe has been infringed</li>
          <li>The exact PromptKingAI.com page or URL containing the material</li>
          <li>The specific image, text, prompt, or other material you are reporting</li>
          <li>Your relationship to the copyrighted work</li>
          <li>Why you believe the use is unauthorized</li>
        </ul>
        <p>
          Providing clear information helps us review the report more efficiently.
        </p>
      </section>

      <section>
        <h2>3. Information to Include</h2>
        <p>A copyright complaint should, where applicable, include:</p>
        <ul>
          <li>Your full name</li>
          <li>Your contact information and email address</li>
          <li>Identification of the original copyrighted work</li>
          <li>A link or other evidence showing the original work where available</li>
          <li>The exact URL of the allegedly infringing content on PromptKingAI.com</li>
          <li>A description of the material you want reviewed</li>
          <li>A statement explaining why you believe the use is unauthorized</li>
          <li>A statement that the information in your notice is accurate</li>
          <li>A statement that you are the copyright owner or are authorized to act on behalf of the copyright owner</li>
          <li>Your physical or electronic signature</li>
        </ul>
        <p>
          Please do not submit unrelated passwords, identification documents,
          financial details, or other sensitive information unless specifically
          necessary.
        </p>
      </section>

      <section>
        <h2>4. Good-Faith Statement</h2>
        <p>
          When submitting a copyright complaint, you should have a good-faith
          belief that the disputed use is not authorized by the copyright owner,
          an authorized agent, a valid license, or applicable law.
        </p>
        <p>
          Copyright complaints should not be submitted solely to suppress lawful
          criticism, competition, commentary, or other legitimate uses.
        </p>
      </section>

      <section>
        <h2>5. Review Process</h2>
        <p>After receiving a sufficiently detailed report, Prompt King may review:</p>
        <ul>
          <li>The reported material</li>
          <li>The page where it appears</li>
          <li>Available licensing or ownership information</li>
          <li>The information supplied by the complainant</li>
          <li>Any other relevant context</li>
        </ul>
        <p>Depending on the circumstances, we may:</p>
        <ul>
          <li>Remove the content</li>
          <li>Temporarily restrict access to it</li>
          <li>Replace an image or reference</li>
          <li>Correct attribution</li>
          <li>Update the page</li>
          <li>Request additional information</li>
          <li>Take no action if the complaint does not provide enough information or does not appear valid</li>
        </ul>
        <p>Submitting a complaint does not guarantee automatic removal.</p>
      </section>

      <section>
        <h2>6. Removal or Correction</h2>
        <p>
          If we determine that material should no longer appear on
          PromptKingAI.com, we may remove or modify it without prior notice.
          Where appropriate, we may also replace disputed material with another
          reference or update the surrounding content.
        </p>
        <p>
          Our goal is to address legitimate concerns while avoiding unnecessary
          removal of lawful material.
        </p>
      </section>

      <section>
        <h2>7. Counter-Notification</h2>
        <p>
          If content is removed or restricted following a copyright complaint
          and the affected party believes the action was made in error, they may
          contact Prompt King with a counter-notification or explanation.
        </p>
        <p>A counter-notification should clearly identify:</p>
        <ul>
          <li>The material that was removed or restricted</li>
          <li>The original page URL</li>
          <li>Why the removal is believed to be mistaken</li>
          <li>Any permission, license, ownership information, or other supporting evidence</li>
          <li>Contact information for the responding party</li>
        </ul>
        <p>
          We may review the information and decide whether the material should
          remain removed, be restored, or require further review.
        </p>
      </section>

      <section>
        <h2>8. Reference Images</h2>
        <p>
          PromptKingAI.com may display images as visual references for prompt
          style, composition, mood, clothing, lighting, or creative direction.
          Displaying a reference image does not mean Prompt King claims ownership
          of every image shown.
        </p>
        <p>
          Reference images may remain subject to the rights of their respective
          owners or licensors. Copying a prompt from PromptKingAI.com does not
          grant ownership of, or a license to, any accompanying reference
          photograph unless explicitly stated otherwise.
        </p>
      </section>

      <section>
        <h2>9. Prompt Text and Written Content</h2>
        <p>
          Copyright concerns may also relate to written material, including
          prompts, descriptions, guides, or other text. If you believe that
          substantial copyrighted text has been reproduced improperly on
          PromptKingAI.com, you may report it using the same process described in
          this policy.
        </p>
        <p>
          When submitting such a report, clearly identify both the original work
          and the specific PromptKingAI.com material you believe infringes it.
          General similarities in ideas, concepts, styles, or short/common
          phrases may not necessarily establish copyright infringement.
        </p>
      </section>

      <section>
        <h2>10. Third-Party Content and External Services</h2>
        <p>
          PromptKingAI.com may link to third-party websites, AI platforms,
          Google Play, or other independent services. Prompt King does not
          control content hosted directly by those third parties.
        </p>
        <p>
          If the disputed material is hosted entirely on another service, you
          may need to contact that service directly using its own copyright
          reporting procedure.
        </p>
      </section>

      <section>
        <h2>11. False or Misleading Claims</h2>
        <p>
          Please do not knowingly submit false, fraudulent, or misleading
          copyright complaints. A complainant is responsible for the accuracy of
          the information they provide.
        </p>
        <p>
          Misrepresenting ownership, authorization, or infringement may have
          legal consequences under applicable law.
        </p>
      </section>

      <section>
        <h2>12. Repeat or Serious Infringement Concerns</h2>
        <p>
          Where repeated or serious copyright concerns arise, Prompt King may
          take additional action where appropriate. This may include removing
          repeated infringing material, restricting content, reviewing related
          pages, or taking reasonable steps to prevent repeated publication of
          the same disputed material.
        </p>
        <p>
          Any such action will depend on the facts and circumstances involved.
        </p>
      </section>

      <section>
        <h2>13. No Designated DMCA Agent Claim</h2>
        <p>
          This page provides a practical copyright-reporting process for
          PromptKingAI.com. Unless explicitly stated otherwise, Prompt King does
          not claim through this page that it has registered or designated an
          agent with the U.S. Copyright Office under the Digital Millennium
          Copyright Act.
        </p>
        <p>
          The term DMCA is used here to help users understand the nature of the
          copyright-reporting process. Copyright complaints from users outside
          the United States may also be reviewed under applicable copyright and
          intellectual property laws.
        </p>
      </section>

      <section>
        <h2>14. No Legal Determination</h2>
        <p>
          Prompt King&apos;s review of a copyright complaint is an
          administrative content-review process. We do not act as a court and do
          not make binding legal determinations regarding ownership, fair use,
          licensing, or infringement.
        </p>
        <p>
          Complex disputes may require the parties involved to seek independent
          legal advice or pursue remedies available under applicable law.
        </p>
      </section>

      <section>
        <h2>15. Changes to This Policy</h2>
        <p>
          We may update this DMCA / Copyright Policy when our website features,
          copyright review process, content formats, or applicable legal
          requirements change. When this policy is updated, the Last updated
          date at the top of the page will be revised.
        </p>
      </section>

      <section>
        <h2>16. Contact Us</h2>
        <p>
          To report a copyright concern, please use our official{" "}
          <Link href="/contact">Contact page</Link>. When contacting us, include
          the exact page URL and enough information to identify the material
          being reported.
        </p>
        <p>
          You may also review our <Link href="/terms">Terms &amp; Conditions</Link>,{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/disclaimer">Disclaimer</Link>,{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>, and{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>
      </section>
    </article>
  );
}
