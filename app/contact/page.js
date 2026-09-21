import Link from "next/link";
import { seo, contactEmail, PLAY_STORE_URL } from "@/lib/site";

export const metadata = seo(
  "Contact Prompt King",
  "Contact Prompt King for app support, website feedback, privacy requests, copyright concerns, and business enquiries.",
  "/contact",
);

export default function Contact() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">CONTACT PROMPT KING</span>
      <h1>Questions, feedback or support? Start here.</h1>
      <p className="lead">
        For app support, website feedback, content corrections, privacy requests,
        copyright concerns, or business enquiries, use the official Prompt King
        support route.
      </p>

      <section>
        <h2>1. App Support</h2>
        {contactEmail ? (
          <p>
            For Prompt King Android app support, email{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. Include the
            app version, device information, and a short description of the issue
            where relevant.
          </p>
        ) : (
          <>
            <p>
              If you need help with the Prompt King Android app, use the official
              developer contact details shown on the Google Play listing. Open
              the listing and check the App support section for the latest support
              information.
            </p>
            <a className="button" href={PLAY_STORE_URL}>
              Open official app listing ↗
            </a>
          </>
        )}
      </section>

      <section>
        <h2>2. Website Feedback</h2>
        <p>
          If you notice a website issue, broken page, incorrect prompt, display
          problem, or other technical concern, include the page URL, a short
          description of the issue, your browser or device where relevant, and a
          screenshot if it helps explain the problem.
        </p>
      </section>

      <section>
        <h2>3. Prompt and Content Corrections</h2>
        <p>
          If you find an unclear prompt, incorrect description, outdated guide,
          misleading label, broken reference, or other content error, contact us
          with the exact page URL and a brief explanation of what should be
          reviewed. For more information about our content standards, see our{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>.
        </p>
      </section>

      <section>
        <h2>4. Copyright and DMCA Concerns</h2>
        <p>
          If you believe that content on PromptKingAI.com uses your copyrighted
          work without authorization, provide enough information for us to
          identify and review the material. Include your name and contact
          information, the original work, the exact PromptKingAI.com URL, the
          material you are reporting, your relationship to the copyrighted work,
          and an explanation of why you believe the use is unauthorized.
        </p>
        <p>
          Please review our <Link href="/dmca">DMCA / Copyright Policy</Link> for
          the full reporting process.
        </p>
      </section>

      <section>
        <h2>5. Privacy Requests</h2>
        <p>
          For questions or requests relating to personal information, cookies,
          analytics, advertising, or privacy rights, use the official contact
          route. Depending on applicable law, you may be able to request access,
          correction, deletion, restriction, or other privacy-related actions.
        </p>
        <p>
          Please review our <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
          <Link href="/cookie-policy">Cookie Policy</Link> for additional
          information.
        </p>
      </section>

      <section>
        <h2>6. Business and Partnership Enquiries</h2>
        <p>
          For legitimate business, partnership, advertising, collaboration, or
          media enquiries, contact Prompt King through the official support
          details. Clearly explain your name or organization, the purpose of your
          enquiry, relevant website or company information, and how you would
          like to work with Prompt King.
        </p>
        <p>
          We do not guarantee acceptance of partnership or advertising proposals.
        </p>
      </section>

      <section>
        <h2>7. What to Include in Your Message</h2>
        <p>
          To help us understand your request, include the most relevant
          information. For website issues, include the page URL. For app issues,
          include the app version or device information when relevant. For
          copyright concerns, include details about the original work and
          reported content. For privacy requests, explain the nature of your
          request clearly.
        </p>
      </section>

      <section>
        <h2>8. Please Do Not Send Sensitive Information</h2>
        <p>Please do not send:</p>
        <ul>
          <li>Passwords</li>
          <li>OTPs or verification codes</li>
          <li>Banking details</li>
          <li>Credit or debit card details</li>
          <li>
            Government identification documents unless specifically required for
            a legitimate legal process
          </li>
          <li>Private photographs that are not necessary to explain your request</li>
        </ul>
        <p>
          Prompt King will never need your account password to respond to a normal
          support request.
        </p>
      </section>

      <section>
        <h2>9. Response Times</h2>
        <p>
          We aim to review legitimate support, content, copyright, and privacy
          enquiries within a reasonable period. Response time may vary depending
          on the type of request, information provided, volume of enquiries, and
          whether additional review is required.
        </p>
        <p>
          Submitting a request does not guarantee an immediate response or a
          particular outcome.
        </p>
      </section>

      <section>
        <h2>10. Official Prompt King Links</h2>
        <p>
          Website: <a href="https://promptkingai.com">PromptKingAI.com</a>
        </p>
        <p>
          Explore prompts: <Link href="/explore">PromptKingAI.com/explore</Link>
        </p>
        <p>
          Android app: <a href={PLAY_STORE_URL}>Prompt King on Google Play ↗</a>
        </p>
        <p>
          You may also review our <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
          <Link href="/terms">Terms &amp; Conditions</Link>,{" "}
          <Link href="/disclaimer">Disclaimer</Link>,{" "}
          <Link href="/cookie-policy">Cookie Policy</Link>,{" "}
          <Link href="/editorial-policy">Editorial Policy</Link>, and{" "}
          <Link href="/dmca">DMCA / Copyright Policy</Link>.
        </p>
      </section>

      <div className="prose-cta">
        <h2>Contact Prompt King</h2>
        {contactEmail ? (
          <a className="button" href={`mailto:${contactEmail}`}>
            Email Prompt King →
          </a>
        ) : (
          <a className="button" href={PLAY_STORE_URL}>
            Open App Support ↗
          </a>
        )}
      </div>
    </article>
  );
}
