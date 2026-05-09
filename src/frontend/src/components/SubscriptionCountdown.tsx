import { useSubscription } from "@/hooks/useSubscription";
import { cn } from "@/lib/utils";
import { Crown } from "lucide-react";

interface SubscriptionCountdownProps {
  className?: string;
  /** Compact mode: single-line for sidebar */
  compact?: boolean;
}

/**
 * SubscriptionCountdown — displays active premium status.
 * Lifetime plan: no expiry countdown shown.
 */
export function SubscriptionCountdown({
  className,
  compact = false,
}: SubscriptionCountdownProps) {
  const { isSubscribed } = useSubscription();

  if (!isSubscribed) return null;

  if (compact) {
    return (
      <div
        className={cn(
          "px-3 py-2 rounded-lg border bg-primary/10 border-primary/20 transition-smooth",
          className,
        )}
        data-ocid="subscription-countdown-compact"
      >
        <div className="flex items-center gap-1.5">
          <Crown className="w-3 h-3 shrink-0 text-primary" />
          <span className="text-xs font-semibold text-primary">
            Premium · Lifetime
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-xl border p-4 bg-card border-border transition-smooth",
        className,
      )}
      data-ocid="subscription-countdown"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
            Premium Access
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display font-bold text-2xl text-foreground">
              Lifetime
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            No expiry · Full access forever
          </p>
        </div>
        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 bg-primary/10 border-primary/25">
          <Crown className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Progress bar — shows 100% active for lifetime */}
      <div className="mt-3">
        <div className="flex justify-between text-xs text-muted-foreground mb-1">
          <span>Status</span>
          <span>Active</span>
        </div>
        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
