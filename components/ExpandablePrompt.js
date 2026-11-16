"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CopyPrompt from "./CopyPrompt";

export default function ExpandablePrompt({
  promptText,
  isPremium = false,
  specs = {},
}) {
  const [expanded, setExpanded] = useState(false);

  // If text is short (< 300 characters), no need to collapse
  const isLong = (promptText || "").length > 300;

  return (
    <div className="prompt-card-wrapper">
      <div className="prompt-card-header">
        <div className="prompt-card-title">
          <span className="status-live-dot" />
          <span>READY-TO-COPY AI PROMPT</span>
        </div>
        {!isPremium && <CopyPrompt text={promptText} variant="quick" />}
      </div>

      <div
        className={`prompt-text-container ${
          isLong && !expanded ? "collapsed" : "expanded"
        }`}
      >
        <div className="prompt-text">{promptText}</div>
        {isLong && !expanded && <div className="prompt-fade-overlay" />}
      </div>

      {isLong && (
        <div className="prompt-expand-bar">
          <button
            type="button"
            className="prompt-expand-btn"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>Show Full Prompt</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>
      )}

      {/* Quick Specs Chips */}
      {(specs.aspectRatio ||
        specs.camera ||
        specs.lighting ||
        specs.colorGrade) && (
        <div className="prompt-specs-row">
          {specs.aspectRatio && (
            <span className="spec-tag">
              <strong>Aspect Ratio:</strong> {specs.aspectRatio}
            </span>
          )}
          {specs.camera && (
            <span className="spec-tag">
              <strong>Camera / Lens:</strong> {specs.camera}
            </span>
          )}
          {specs.lighting && (
            <span className="spec-tag">
              <strong>Lighting:</strong> {specs.lighting.split(".")[0]}
            </span>
          )}
          {specs.colorGrade && (
            <span className="spec-tag">
              <strong>Color Tone:</strong> {specs.colorGrade}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
