import { seo, contactEmail, PLAY_STORE_URL } from "@/lib/site";
export const metadata = seo(
  "Contact Prompt King",
  "Find the official support route for Prompt King and send content or copyright questions.",
  "/contact",
);
export default function Contact() {
  return (
    <article className="container prose page-section">
      <span className="eyebrow purple">LET’S TALK</span>
      <h1>Questions? Start here.</h1>
      <p className="lead">
        For app support, website feedback or content concerns, use the official
        Prompt King contact details.
      </p>
      <section>
        <h2>Contact the team</h2>
        {contactEmail ? (
          <p>
            Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with
            your question and the relevant page URL.
          </p>
        ) : (
          <>
            <p>
              Open the Prompt King Google Play listing and expand its App
              support section to find the developer’s current contact details.
            </p>
            <a className="button" href={PLAY_STORE_URL}>
              Open official app listing ↗
            </a>
          </>
        )}
      </section>
      <section>
        <h2>Help us understand the issue</h2>
        <p>
          Include the page URL, a short description of what happened, and your
          browser or app version where relevant. Do not send passwords, payment
          information or private reference photos.
        </p>
      </section>
      <section>
        <h2>Content and copyright concerns</h2>
        <p>
          Please identify the material you are reporting, explain your
          relationship to the work, and include a way to contact you. See our{" "}
          <a href="/dmca">copyright page</a> for the information that helps us
          review a report.
        </p>
      </section>
    </article>
  );
}
