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
  PATH_PRICE_INR,
  PRICE_INR,
  useSubscription,
} from "@/hooks/useSubscription";
import { LEARNING_PATHS } from "@/data/paths";
import { useUserDiscountAccess } from "@/hooks/useCoupons";
import { useAuth } from "@/contexts/AuthContext";
import { activateSubscription } from "@/lib/firestoreService";
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
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

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
    isLoading,
    showSignInForUpgrade,
    dismissSignInForUpgrade,
    proceedAfterSignIn,
    isSubscribed,
    paymentError,
    clearPaymentError,
  } = useSubscription();
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState<"choose" | "processing" | "success">("choose");
  const [paymentPlan, setPaymentPlan] = useState<string>("premium");
  const [isFetchingUrl, setIsFetchingUrl] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const { user } = useAuth();

  const { data: discountAccess } = useUserDiscountAccess();
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [processingTime, setProcessingTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === "processing") {
      setProcessingTime(10);
      timer = setInterval(() => {
        setProcessingTime(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [step]);

  const handleApplyCoupon = () => {
    setCouponError("");
    const code = couponCode.toUpperCase().trim();
    if (!code) {
      setDiscountPercent(0);
      return;
    }

    if (code === "ADMIN" && discountAccess?.discount_100) {
      setDiscountPercent(100);
      return;
    }
    if (code === "IFH100" && discountAccess?.discount_100) {
      setDiscountPercent(100);
      return;
    }
    if (code === "IFH75" && discountAccess?.discount_75) {
      setDiscountPercent(75);
      return;
    }
    if (code === "IFH50" && discountAccess?.discount_50) {
      setDiscountPercent(50);
      return;
    }
    if (code === "IFH25" && discountAccess?.discount_25) {
      setDiscountPercent(25);
      return;
    }

    setDiscountPercent(0);
    setCouponError("Invalid coupon code or you don't have access.");
  };

  const handlePayNow = async (plan: string) => {
    try {
      if (!agreed) return;

      setPaymentPlan(plan);
      clearPaymentError();
      setIsFetchingUrl(true);
      setStep("processing");

      const baseAmount =
        plan === "capstone"
          ? CAPSTONE_PRICE_INR
          : plan.startsWith("path_")
          ? PATH_PRICE_INR
          : PRICE_INR;
      
      const amount = Math.max(0, Math.floor(baseAmount * (1 - discountPercent / 100)));

      // 100% OFF Bypass
      if (amount === 0) {
        if (user) {
          const expiresAt = new Date();
          expiresAt.setDate(expiresAt.getDate() + 36500); // lifetime
          await activateSubscription(user.uid, {
            razorpayOrderId: "COUPON_100",
            razorpayPaymentId: "COUPON_100",
            expiresAt: expiresAt.toISOString(),
          });
          localStorage.setItem(
              "itfresherhub_subscription_v2",
              JSON.stringify({
                  active: true,
                  plan,
                  activatedAt: new Date().toISOString(),
              }),
          );
          setStep("success");
          window.location.reload();
          return;
        }
      }

      const response = await fetch("/api/create-payment-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount * 100, // Razorpay expects paise
          plan,
          name: user?.displayName || "",
          email: user?.email || "",
          return_url: window.location.origin + "/payment-success"
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Could not initialize payment",
        );
      }

      if (data.url) {
        setPaymentUrl(data.url);
        window.location.href = data.url;
        
        // Wait 10 seconds before allowing the user to click the manual link
        setTimeout(() => {
          setIsFetchingUrl(false);
        }, 10000);
      } else {
        throw new Error("Payment link not received");
      }
    } catch (error: any) {
      console.error(error);
      setIsFetchingUrl(false);
      setStep("choose");
    }
  };

  useEffect(() => {
    if (!open) return;
    if (isSubscribed) setStep("success");
  }, [isSubscribed, open]);

  const resetModal = () => {
    setStep("choose");
    clearPaymentError();
  };

  return (
    <>
      {/* Sign-in prompt */}
      <Dialog open={showSignInForUpgrade} onOpenChange={(o) => { if (!o) dismissSignInForUpgrade(); }}>
        <DialogContent className="max-w-sm p-0 overflow-hidden border-2 border-primary/30 bg-card" data-ocid="upgrade-signin-modal">
          <div className="relative bg-gradient-to-br from-primary/15 via-secondary/10 to-primary/5 px-6 pt-7 pb-5 text-center">
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border-2 border-primary/30 mb-4 mx-auto">
              <KeyRound className="w-7 h-7 text-primary" />
            </motion.div>
            <DialogTitle className="font-display font-bold text-lg text-foreground leading-tight">Sign in to continue</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm mt-1.5 leading-relaxed">Please sign in to complete your upgrade to Premium.</DialogDescription>
          </div>
          <div className="px-6 py-5 space-y-3">
            <Button className="w-full gap-2 font-bold py-5 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg" onClick={proceedAfterSignIn}>
              <KeyRound className="w-5 h-5" /> Sign In to Continue
            </Button>
            <Button variant="ghost" className="w-full gap-1.5 text-muted-foreground hover:text-foreground" onClick={dismissSignInForUpgrade}>
              <X className="w-4 h-4" /> Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main paywall modal */}
      <Dialog open={open} onOpenChange={(o) => { if (!o) resetModal(); onOpenChange(o); }}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-2 border-amber-400/30 bg-card" data-ocid="paywall-modal">
          {/* Header */}
          <div className="relative bg-gradient-to-br from-amber-400/20 via-primary/15 to-secondary/20 px-6 pt-7 pb-6 text-center">
            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-smooth z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-400/20 border-2 border-amber-400/40 mb-4 mx-auto">
              {step === "success" ? <CheckCircle2 className="w-8 h-8 text-green-500" /> : <Lock className="w-8 h-8 text-amber-500" />}
            </motion.div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="w-4 h-4 text-amber-500" />
              <Badge className="bg-amber-400/20 text-amber-600 border-amber-400/40 text-xs font-bold">Premium Access</Badge>
            </div>
            <DialogTitle className="font-display font-bold text-xl text-foreground leading-tight">
              {step === "success" ? "Payment Verified! 🎉" : lessonTitle ? (
                <>Unlock <span className="text-primary">&ldquo;{lessonTitle}&rdquo;</span></>
              ) : "Unlock Premium Access"}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm mt-2 leading-relaxed">
              {step === "success"
                ? "Your premium access has been activated. Enjoy all courses!"
                : "First module of each course is always free. Upgrade to unlock everything!"}
            </DialogDescription>
          </div>

          {/* ─── Step: Success ─── */}
          {step === "success" && (
            <div className="px-6 py-6 space-y-4">
              <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/8 text-center">
                <ShieldCheck className="w-10 h-10 text-green-500 mx-auto mb-2" />
                <h3 className="font-display font-bold text-foreground mb-1">Access Activated!</h3>
                <p className="text-xs text-muted-foreground leading-snug">
                  Your payment has been verified with Razorpay and your premium access is now active. All courses and features are unlocked.
                </p>
              </div>
              <Button className="w-full font-bold py-4 rounded-xl" onClick={() => { resetModal(); onOpenChange(false); }}>
                Start Learning
              </Button>
            </div>
          )}

          {/* ─── Step: Choose plan ─── */}
          {step === "choose" && (
            <>
              {/* 3-Tier Pricing Grid */}
              <div className="px-6 py-4 grid grid-cols-1 gap-3">
                {/* Tier 1: Basic */}
                <div 
                  onClick={() => setPaymentPlan("premium")}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-smooth ${
                    paymentPlan === "premium" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px]">Tier 1 — Basic</Badge>
                    <span className="font-display font-bold text-lg">₹{PRICE_INR}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">Lifetime Course Access</h3>
                  <p className="text-[10px] text-muted-foreground leading-tight">Full access to all 27 courses & lessons. No certificates.</p>
                </div>

                {/* Tier 2: Paths */}
                <div 
                  onClick={() => setPaymentPlan("path_it_fundamentals")}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-smooth ${
                    paymentPlan.startsWith("path_") ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/30"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px] border-secondary text-secondary">Tier 2 — Path</Badge>
                    <span className="font-display font-bold text-lg">₹{PATH_PRICE_INR}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">Professional Certification</h3>
                  <p className="text-[10px] text-muted-foreground leading-tight">Course access + Path-specific exam + Verified Certificate.</p>
                </div>

                {/* Tier 3: Capstone */}
                <div 
                  onClick={() => setPaymentPlan("capstone")}
                  className={`cursor-pointer p-4 rounded-xl border-2 transition-smooth relative overflow-hidden ${
                    paymentPlan === "capstone" ? "border-[oklch(var(--capstone-accent))] bg-[oklch(var(--capstone-accent)/0.05)]" : "border-border hover:border-[oklch(var(--capstone-accent)/0.3)]"
                  }`}
                >
                  <div className="absolute top-0 right-0 bg-[oklch(var(--capstone-accent))] text-white text-[8px] font-bold py-1 px-4 rounded-bl-lg">POPULAR</div>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px] border-[oklch(var(--capstone-accent))] text-[oklch(var(--capstone-accent))]">Tier 3 — Master</Badge>
                    <span className="font-display font-bold text-lg">₹{CAPSTONE_PRICE_INR}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">Internship Certificate</h3>
                  <p className="text-[10px] text-muted-foreground leading-tight">Everything + 22-step Capstone Project + Ultimate Certificate.</p>
                </div>
              </div>

              {/* Path Selection (Visible only if Tier 2 is selected) */}
              {paymentPlan.startsWith("path_") && (
                <div className="mx-6 mb-4 p-4 rounded-xl bg-secondary/5 border border-secondary/20">
                  <p className="text-xs font-bold text-secondary mb-3">Select your Certification Path:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {LEARNING_PATHS.map((path) => (
                      <button
                        key={path.id}
                        onClick={() => setPaymentPlan(path.id)}
                        className={`text-left p-2 rounded-lg text-[10px] border transition-smooth flex items-center justify-between ${
                          paymentPlan === path.id ? "bg-secondary text-white border-secondary" : "bg-card border-border hover:border-secondary/40"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{path.icon}</span> 
                          <span>{path.title}</span>
                        </span>
                        {paymentPlan === path.id && <CheckCircle2 className="w-3 h-3" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Coupon */}
              <div className="mx-6 mb-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 text-[10px] rounded-lg border border-border bg-background px-3 py-1.5"
                  />
                  <Button variant="outline" size="sm" className="h-8 text-[10px]" onClick={handleApplyCoupon}>Apply</Button>
                </div>
                {couponError && <p className="text-[10px] text-destructive mt-1">{couponError}</p>}
                {discountPercent > 0 && <p className="text-[10px] text-green-500 font-semibold mt-1">Discount applied: {discountPercent}% OFF</p>}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6 space-y-3">
                <div className="flex items-start gap-2.5">
                  <Checkbox id="agree-terms" checked={agreed} onCheckedChange={(val) => setAgreed(!!val)} className="mt-0.5" />
                  <label htmlFor="agree-terms" className="text-[10px] text-muted-foreground leading-snug cursor-pointer">
                    I agree to the content usage policy and understand that premium content is confidential.
                  </label>
                </div>

                <Button
                  className={`w-full gap-2 font-bold py-5 text-base rounded-xl shadow-lg disabled:opacity-50 transition-smooth ${
                    paymentPlan === "capstone" 
                      ? "bg-[oklch(var(--capstone-accent))] hover:bg-[oklch(var(--capstone-accent)/0.9)] text-white" 
                      : paymentPlan.startsWith("path_")
                      ? "bg-secondary hover:bg-secondary/90 text-white"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  onClick={() => handlePayNow(paymentPlan)}
                  disabled={isLoading || isFetchingUrl || !agreed}
                  data-ocid="btn-subscribe-now"
                >
                  {(isLoading || isFetchingUrl) ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
                  Pay ₹{Math.max(0, Math.floor((paymentPlan === "capstone" ? CAPSTONE_PRICE_INR : paymentPlan.startsWith("path_") ? PATH_PRICE_INR : PRICE_INR) * (1 - discountPercent / 100)))} · Get Started
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-60" />
                </Button>

                <Button variant="ghost" className="w-full text-[10px] h-auto text-muted-foreground hover:text-foreground" onClick={() => onOpenChange(false)}>Maybe later — stay on free plan</Button>
              </div>
                <div className="text-center pt-1">
                  <a href="mailto:itfreshershub@gmail.com?subject=IT%20Fresher%20Hub%20Support" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary hover:underline">Need help? Contact Support</a>
                </div>
              </div>
            </>
          )}

          {/* ─── Step: Verify payment ─── */}
          {step === "processing" && (
            <div className="px-6 py-6 space-y-4">
              <div className="p-3 rounded-lg border border-primary/30 bg-primary/5">
                <p className="text-xs text-foreground font-medium mb-1">💳 Complete payment in Razorpay</p>
                <p className="text-xs text-muted-foreground leading-snug">
                  Complete your ₹{Math.max(0, Math.floor((paymentPlan === "capstone" ? CAPSTONE_PRICE_INR : paymentPlan.startsWith("path_") ? PATH_PRICE_INR : PRICE_INR) * (1 - discountPercent / 100)))} payment on Razorpay.
                  After successful payment, we’ll verify it automatically and unlock your content instantly.
                </p>
              </div>

              {processingTime > 0 ? (
                <p className="text-[10px] text-center text-muted-foreground">
                  Opening Razorpay secure checkout in {processingTime}s...
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-[10px] text-center text-muted-foreground">
                    Didn't see the payment window?
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full h-9 text-xs border-primary text-primary hover:bg-primary/5"
                    onClick={() => handlePayNow(paymentPlan)}
                  >
                    Open Razorpay Again
                  </Button>
                </div>
              )}

              {processingTime > 0 ? (
                <p className="text-[10px] text-center text-muted-foreground">
                  Opening Razorpay secure checkout in {processingTime}s...
                </p>
              ) : (
                <div className="space-y-2">
                  <p className="text-[10px] text-center text-muted-foreground">
                    Didn't see the payment window?
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full h-9 text-xs border-primary text-primary hover:bg-primary/5"
                    onClick={() => handlePayNow(paymentPlan)}
                  >
                    Open Razorpay Again
                  </Button>
                </div>
              )}

              {paymentError && (
                <p className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-2">
                  {paymentError}
                </p>
              )}

              <div className="flex items-center gap-2 bg-green-500/8 border border-green-500/20 rounded-lg px-3 py-2">
                <ShieldCheck className="w-4 h-4 text-green-500 shrink-0" />
                <p className="text-[11px] text-muted-foreground">
                  <strong className="text-foreground">Auto-verified</strong> — we check with Razorpay's servers. Fake IDs won't work.
                </p>
              </div>

              <Button
                className="w-full gap-2 font-bold py-4 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg disabled:opacity-50"
                onClick={() => paymentUrl ? (window.location.href = paymentUrl) : handlePayNow(paymentPlan)}
                disabled={isLoading || isFetchingUrl || !agreed}
              >
                {(isLoading || isFetchingUrl) ? <Loader2 className="w-4 h-4 animate-spin" /> : <ExternalLink className="w-4 h-4" />}
                {(isLoading || isFetchingUrl) ? "Redirecting to Razorpay... Please wait" : "Click here if not redirected automatically"}
              </Button>

              <Button variant="ghost" className="w-full text-xs text-muted-foreground" onClick={resetModal}>
                ← Go back
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
