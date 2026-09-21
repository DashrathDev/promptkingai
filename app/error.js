"use client";
export default function Error({ reset }) {
  return (
    <div className="container empty-state page-section">
      <h1>Let’s try that again.</h1>
      <p>We couldn’t load this page. Please retry in a moment.</p>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
