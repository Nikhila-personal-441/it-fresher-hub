import {
  SUBSCRIPTION_DURATION_DAYS,
  useSubscription,
} from "@/hooks/useSubscription";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface SubscriptionCountdownProps {
  className?: string;
  /** Compact mode: single-line for sidebar */
  compact?: boolean;
}

/**
 * SubscriptionCountdown — displays remaining subscription days with a progress bar.
 * Turns amber/urgent when < 7 days remain.
 */
export function SubscriptionCountdown({
  className,
  compact = false,
}: SubscriptionCountdownProps) {
  const { isSubscribed, daysRemaining, subscriptionData } = useSubscription();

  if (!isSubscribed || daysRemaining === null) return null;

  const totalDays = SUBSCRIPTION_DURATION_DAYS;
  const percent = Math.max(0, Math.min(100, (daysRemaining / totalDays) * 100));
  const isUrgent = daysRemaining <= 7;
  const isExpiringSoon = daysRemaining <= 14;

  const expiresDate = subscriptionData.expiresAt
    ? new Date(subscriptionData.expiresAt).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : null;

  if (compact) {
    return (
      <div
        className={cn(
          "px-3 py-2 rounded-lg border transition-smooth",
          isUrgent
            ? "bg-amber-400/15 border-amber-400/40"
            : "bg-primary/10 border-primary/20",
          className,
        )}
        data-ocid="subscription-countdown-compact"
      >
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-1.5">
            <Clock
              className={cn(
                "w-3 h-3 shrink-0",
                isUrgent ? "text-amber-500" : "text-primary",
              )}
            />
            <span
              className={cn(
                "text-xs font-semibold",
                isUrgent ? "text-amber-600" : "text-primary",
              )}
            >
              {isUrgent ? "⚠️ " : ""}
              {daysRemaining}d remaining
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground">
            {percent.toFixed(0)}%
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              isUrgent
                ? "bg-amber-400"
                : isExpiringSoon
                  ? "bg-[oklch(var(--xp-fill))]"
                  : "bg-primary",
            )}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border p-4 transition-smooth",
        isUrgent
          ? "bg-amber-400/10 border-amber-400/40"
          : "bg-card border-border",
        className,
      )}
      data-ocid="subscription-countdown"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
            Premium Access
          </p>
          <div className="flex items-baseline gap-1.5">
            <span
              className={cn(
                "font-display font-bold text-2xl",
                isUrgent ? "text-amber-500" : "text-foreground",
              )}
            >
              {daysRemaining}
            </span>
            <span className="text-sm text-muted-foreground">days left</span>
          </div>
          {expiresDate && (
            <p className="text-xs text-muted-foreground mt-0.5">
              Expires {expiresDate}
            </p>
          )}
        </div>
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center border-2",
            isUrgent
              ? "bg-amber-400/15 border-amber-400/40"
              : "bg-primary/10 border-primary/25",
          )}
        >
          <Clock
            className={cn(
              "w-5 h-5",
              isUrgent ? "text-amber-500" : "text-primary",
            )}
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Used</span>
          <span>
            {totalDays - daysRemaining} / {totalDays} days
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              isUrgent
                ? "bg-amber-400"
                : isExpiringSoon
                  ? "bg-[oklch(var(--xp-fill))]"
                  : "bg-primary",
            )}
            style={{ width: `${100 - percent}%` }}
          />
        </div>
      </div>

      {isUrgent && (
        <p className="text-xs font-semibold text-amber-600 flex items-center gap-1.5 mt-2">
          ⚠️ Subscription expiring soon — renew to keep access!
        </p>
      )}
    </div>
  );
}
