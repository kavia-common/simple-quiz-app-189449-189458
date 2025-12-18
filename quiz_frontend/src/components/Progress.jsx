import React from "react";

/**
 * Progress display for quiz navigation.
 * Shows current question number and a visual progress bar.
 */
export default function Progress({ current, total }) {
  const safeTotal = Math.max(1, total);
  const pct = Math.round((current / safeTotal) * 100);

  return (
    <div className="progress" aria-label="Quiz progress">
      <div className="progressTop">
        <span className="progressLabel">Question</span>
        <span className="progressValue" aria-live="polite">
          {current} / {total}
        </span>
      </div>

      <div className="progressTrack" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
        <div className="progressFill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
