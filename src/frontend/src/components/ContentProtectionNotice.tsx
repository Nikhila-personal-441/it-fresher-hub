import { cn } from "@/lib/utils";
import { Lock, ShieldAlert } from "lucide-react";

interface ContentProtectionNoticeProps {
  className?: string;
  /** Compact version for inline use */
  compact?: boolean;
}

/**
 * ContentProtectionNotice — shown at the top of all premium lesson content.
 * Signals that the material is confidential and screenshot-protected.
 */
export function ContentProtectionNotice({
  className,
  compact = false,
}: ContentProtectionNoticeProps) {
  if (compact) {
    return (
      <span
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[oklch(var(--confidential-stamp)/0.12)] text-[oklch(var(--confidential-stamp))] border border-[oklch(var(--confidential-stamp)/0.35)]"
        data-ocid="content-protection-compact"
        aria-label="Confidential content — screenshot protection active"
      >
        <Lock className="w-3 h-3" />
        Confidential
      </span>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 px-4 py-3 rounded-lg border-2 border-[oklch(var(--confidential-stamp)/0.4)] bg-[oklch(var(--confidential-stamp)/0.06)]",
        className,
      )}
      data-ocid="content-protection-notice"
      aria-label="Content protection notice"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[oklch(var(--confidential-stamp)/0.12)] flex items-center justify-center">
        <ShieldAlert className="w-4 h-4 text-[oklch(var(--confidential-stamp))]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[oklch(var(--confidential-stamp))]">
            🔒 Confidential
          </span>
          <span className="text-xs font-semibold text-[oklch(var(--confidential-stamp)/0.8)] bg-[oklch(var(--confidential-stamp)/0.12)] px-2 py-0.5 rounded-full border border-[oklch(var(--confidential-stamp)/0.25)]">
            Screenshot protection active
          </span>
        </div>
        <p className="text-xs text-[oklch(var(--confidential-stamp)/0.85)] leading-snug">
          This content is proprietary and licensed to you personally.
          Reproduction, sharing, or redistribution of any form is strictly
          prohibited.
        </p>
      </div>
    </div>
  );
}
