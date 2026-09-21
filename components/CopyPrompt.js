"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
export default function CopyPrompt({ text }) {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return (
    <div>
      <button className="button" onClick={copy}>
        {status === "copied" ? <Check size={18} /> : <Copy size={18} />}{" "}
        {status === "copied" ? "Prompt copied" : "Copy Prompt"}
      </button>
      <span className="copy-status" role="status">
        {status === "error"
          ? "Clipboard unavailable. Select the prompt text above and copy it manually."
          : status === "copied"
            ? "Ready to paste into your preferred tool."
            : ""}
      </span>
    </div>
  );
}
