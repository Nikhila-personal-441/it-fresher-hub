import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  CAPSTONE_PRICE_INR,
  PRICE_INR,
  useSubscription,
} from "@/hooks/useSubscription";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Crown,
  ExternalLink,
  KeyRound,
  Loader2,
  Lock,
  Shield,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface PaywallModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lessonTitle?: string;
}

const PREMIUM_BENEFITS = [
  {
    icon: BookOpen,
    title: "Unlock all 27 courses",
    description: "Full access to every lesson in every module — no limits",
  },
  {
    icon: Zap,
    title: "Unlock all modules and track your full progress",
    description: "See exactly how far you've come across all learning tracks",
  },
  {
    icon: Award,
    title: "Certificates & Badges",
    description: "Complete challenges and earn shareable completion badges",
  },
  {
    icon: Shield,
    title: "Content stays confidential",
    description: "Premium content is protected. Your access, your advantage.",
  },
];

export function PaywallModal({
  open,
  onOpenChange,
  lessonTitle,
}: PaywallModalProps) {
  const {
    initiateCheckout,
    initiateCapstoneCheckout,
    confirmPaymentComplete,
    isLoading,
    showSignInForUpgrade,
    dismissSignInForUpgrade,
    proceedAfterSignIn,
  } = useSubscription();
  const [agreed, setAgreed] = useState(false);
  const [paymentPending, setPaymentPending] = useState<"premium" | "capstone" | null>(null);

  const handlePayNow = () => {
    if (!agreed) return;
    initiateCheckout();
    setPaymentPending("premium");
  };

  const handleCapstonePayNow = () => {
    if (!agreed) return;
    initiateCapstoneCheckout();
    setPaymentPending("capstone");
  };

  const handleConfirmPayment = () => {
    if (!paymentPending) return;
    confirmPaymentComplete(paymentPending);
    setPaymentPending(null);
    onOpenChange(false);
  };

  return (
    <>
      {/* Sign-in prompt — only shown when the upgrade flow needs authentication first */}
      <Dialog
        open={showSignInForUpgrade}
        onOpenChange={(o) => {
          if (!o) dismissSignInForUpgrade();
        }}
      >
        <DialogContent
          className="max-w-sm p-0 overflow-hidden border-2 border-primary/30 bg-card"
          data-ocid="upgrade-signin-modal"
        >
          <div className="relative bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5 px-6 pt-7 pb-5 text-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border-2 border-primary/30 mb-4 mx-auto"
            >
              <KeyRound className="w-7 h-7 text-primary" />
            </motion.div>
            <DialogTitle className="font-display font-bold text-lg text-foreground leading-tight">
              Sign in to continue
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
              Please sign in to complete your upgrade to Premium.
            </DialogDescription>
          </div>

          <div className="px-6 py-5 space-y-3">
            <Button
              className="w-full gap-2 font-bold py-5 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all"
              onClick={proceedAfterSignIn}
              data-ocid="upgrade-signin-btn"
            >
              <KeyRound className="w-5 h-5" />
              Sign In to Continue
            </Button>
            <Button
              variant="ghost"
              className="w-full gap-1.5 text-muted-foreground hover:text-foreground"
              onClick={dismissSignInForUpgrade}
              data-ocid="upgrade-signin-cancel-btn"
            >
              <X className="w-4 h-4" /> Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="max-w-md p-0 overflow-hidden border-2 border-amber-400/30 bg-card"
          data-ocid="paywall-modal"
        >
          {/* Header gradient banner */}
          <div className="relative bg-gradient-to-br from-amber-400/20 via-primary/15 to-secondary/20 px-6 pt-7 pb-6 text-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/20 border-2 border-amber-400/40 mb-4 mx-auto"
            >
              <Lock className="w-8 h-8 text-amber-500" />
            </motion.div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-amber-500" />
              <Badge
                className="bg-amber-400/20 text-amber-600 border-amber-400/40 text-xs font-bold"
                data-ocid="paywall-premium-badge"
              >
                Premium Access
              </Badge>
            </div>

            <DialogTitle className="font-display font-bold text-xl text-foreground leading-tight">
              {lessonTitle ? (
                <>
                  Unlock{" "}
                  <span className="text-primary">
                    &ldquo;{lessonTitle}&rdquo;
                  </span>
                </>
              ) : (
                "Unlock Premium Access"
              )}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm mt-2 leading-relaxed">
              First module of each course is always free. Upgrade to unlock
              everything!
            </DialogDescription>
          </div>

          {/* Price highlight */}
          <div className="px-6 py-4 bg-muted/30 border-y border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-0.5">
                  Premium Plan
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-bold text-3xl text-foreground">
                    ₹{PRICE_INR}
                  </span>
                  <span className="text-muted-foreground text-sm line-through opacity-50">
                    ₹499
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge
                  variant="outline"
                  className="text-xs border-green-500/40 text-green-600 bg-green-500/10"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Lifetime access
                </Badge>
                <p className="text-xs text-muted-foreground">
                  Access for lifetime
                </p>
              </div>
            </div>
          </div>

          {/* Benefits list */}
          <div className="px-6 py-4 space-y-3">
            {PREMIUM_BENEFITS.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <p className="text-sm font-semibold text-foreground">
                      {benefit.title}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Content protection notice */}
          <div className="mx-6 mb-4 p-3 rounded-lg border border-[oklch(var(--confidential-stamp)/0.3)] bg-[oklch(var(--confidential-stamp)/0.05)]">
            <p className="text-xs text-[oklch(var(--confidential-stamp))] font-medium flex items-start gap-2">
              <Shield className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Confidential Content.</strong> Premium lessons are
                proprietary and protected. By subscribing, you agree not to
                reproduce, share, or screenshot course material.
              </span>
            </p>
          </div>

          {/* CTA buttons */}
          <div className="px-6 pb-6 space-y-3">
            {/* Agreement checkbox */}
            <div className="flex items-start gap-2.5">
              <Checkbox
                id="agree-terms"
                checked={agreed}
                onCheckedChange={(val) => setAgreed(!!val)}
                data-ocid="paywall-agree-checkbox"
                className="mt-0.5"
              />
              <label
                htmlFor="agree-terms"
                className="text-xs text-muted-foreground leading-snug cursor-pointer"
              >
                I agree to the content usage policy and understand that premium
                content is confidential and protected by license.
              </label>
            </div>

            {/* Payment pending state — user clicked Pay, waiting for confirmation */}
            {paymentPending ? (
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-amber-400/40 bg-amber-400/8">
                  <p className="text-xs text-amber-700 font-medium mb-1">
                    💳 Payment page opened in a new tab
                  </p>
                  <p className="text-xs text-amber-600 leading-snug">
                    Complete your ₹{paymentPending === "capstone" ? CAPSTONE_PRICE_INR : PRICE_INR} payment on Razorpay, then
                    click the button below to activate your access.
                  </p>
                </div>
                <Button
                  className="w-full gap-2 font-bold py-5 text-base rounded-xl bg-green-600 hover:bg-green-700 text-white shadow-lg transition-all"
                  onClick={handleConfirmPayment}
                  data-ocid="btn-confirm-payment"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  I've Completed Payment — Activate Access
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => setPaymentPending(null)}
                >
                  ← Go back
                </Button>
              </div>
            ) : (
              <>
                <Button
                  className="w-full gap-2 font-bold py-5 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50"
                  onClick={handlePayNow}
                  disabled={isLoading || !agreed}
                  data-ocid="btn-subscribe-now"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Crown className="w-5 h-5" />
                  )}
                  Pay ₹{PRICE_INR} · Unlock Premium
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-60" />
                </Button>

                {/* Capstone add-on upsell */}
                <div className="rounded-lg border border-amber-400/30 bg-amber-400/8 p-3 text-xs text-amber-700 mb-1">
                  <p className="font-bold mb-0.5">
                    🎓 Capstone Project Add-on — ₹{CAPSTONE_PRICE_INR}
                  </p>
                  <p className="text-amber-600 leading-snug mb-2">
                    Unlock the full 22-step Capstone Project with internship certificate.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5 text-xs border-amber-400/40 text-amber-700 hover:bg-amber-400/15"
                    onClick={handleCapstonePayNow}
                    disabled={!agreed}
                  >
                    Pay ₹{CAPSTONE_PRICE_INR} · Capstone
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-foreground"
                  onClick={() => onOpenChange(false)}
                  data-ocid="btn-paywall-dismiss"
                >
                  Maybe later — stay on free plan
                </Button>
                <div className="text-center pt-1">
                  <a
                    href="mailto:itfreshershub@gmail.com?subject=IT%20Fresher%20Hub%20Support&body=Hi%20Team%2C%0A%0AI%20need%20help%20with%3A%0A%0A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary hover:underline transition-colors"
                    data-ocid="paywall-contact-support"
                  >
                    Need help? Contact Support
                  </a>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
