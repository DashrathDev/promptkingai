"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyPrompt({
  text,
  variant = "default",
  label = "Copy Prompt",
  copiedLabel = "Prompt Copied! ✨",
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  }

  if (variant === "quick") {
    return (
      <button
        type="button"
        onClick={copy}
        className={`prompt-quick-copy ${copied ? "copied" : ""}`}
        aria-label="Copy prompt formula"
      >
        {copied ? (
          <>
            <Check size={14} />
            <span>COPIED! ✨</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span>{label === "Copy Prompt" ? "COPY" : label}</span>
          </>
        )}
      </button>
    );
  }

  return (
    <div className="copy-prompt-wrap">
      <button
        type="button"
        className={`button copy-main-btn ${copied ? "copied" : ""}`}
        onClick={copy}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        <span>{copied ? copiedLabel : label}</span>
      </button>
      <span className="copy-status" role="status">
        {error
          ? "Clipboard unavailable. Select text above to copy manually."
          : copied
            ? "Ready to paste into Google Gemini, Midjourney, Flux or ChatGPT."
            : ""}
      </span>
    </div>
  );
}
