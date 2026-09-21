"use client";
import { useState } from "react";

export default function CopyPromptButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button className="copyBtn" onClick={copyPrompt}>
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}
