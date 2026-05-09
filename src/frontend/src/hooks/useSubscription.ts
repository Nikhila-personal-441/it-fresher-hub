/**
 * useSubscription — freemium paywall hook for IT Fresher Hub
 *
 * Subscription: ₹199 lifetime access (no expiry).
 * Capstone add-on: ₹499 (separate one-time purchase).
 * First module of every course is always free.
 * Subscription state is persisted in Firestore and cached in localStorage.
 *
 * Payment: Razorpay Payment Links → auto-verified via Netlify serverless function.
 */

import { useAuth } from "@/contexts/AuthContext";
import { useIsAdmin } from "@/hooks/useAuth";
import {
  activateSubscription,
  getSubscription,
  savePayment,
} from "@/lib/firestoreService";
import { useCallback, useEffect, useRef, useState } from "react";

const SUBSCRIPTION_KEY = "itfresherhub_subscription_v2";
export const PRICE_INR = 199;
export const CAPSTONE_PRICE_INR = 499;
/** Lifetime plan — no expiry */
export const SUBSCRIPTION_DAYS = 36500;

/** Razorpay hosted payment links */
export const PAYMENT_LINK_PREMIUM = "https://rzp.io/rzp/Fh1vv6rd";
export const PAYMENT_LINK_CAPSTONE = "https://rzp.io/rzp/1qfWI2Kk";

export interface SubscriptionData {
  active: boolean;
  activatedAt: string | null;
  expiresAt: string | null;
  plan: "free" | "premium";
  razorpayPaymentId?: string;
}

interface VerifyPaymentResponse {
  verified: boolean;
  paymentId?: string;
  amount?: number;
  currency?: string;
  status?: string;
  method?: string;
  email?: string;
  contact?: string;
  error?: string;
}

interface UseSubscriptionReturn {
  isSubscribed: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  subscriptionData: SubscriptionData;
  daysRemaining: number | null;
  /** Opens the ₹199 premium payment link */
  initiateCheckout: () => void;
  /** Opens the ₹499 capstone payment link */
  initiateCapstoneCheckout: () => void;
  /**
   * Verify and activate subscription using Razorpay Payment ID.
   * Calls server-side function to verify with Razorpay API.
   * Returns error message if verification fails, or null on success.
   */
  verifyAndActivate: (paymentId: string, plan: "premium" | "capstone") => Promise<string | null>;
  refreshSubscription: () => void;
  showSignInForUpgrade: boolean;
  dismissSignInForUpgrade: () => void;
  proceedAfterSignIn: () => void;
}

function computeExpiresAt(activatedAt: string): string {
  const d = new Date(activatedAt);
  d.setDate(d.getDate() + SUBSCRIPTION_DAYS);
  return d.toISOString();
}

function computeDaysRemaining(expiresAt: string | null): number | null {
  if (!expiresAt) return null;
  const now = Date.now();
  const exp = new Date(expiresAt).getTime();
  if (exp <= now) return 0;
  return Math.ceil((exp - now) / (1000 * 60 * 60 * 24));
}

function loadSubscription(): SubscriptionData {
  try {
    const raw = localStorage.getItem(SUBSCRIPTION_KEY);
    if (raw) {
      const data = JSON.parse(raw) as SubscriptionData;
      if (data.active && data.expiresAt) {
        const remaining = computeDaysRemaining(data.expiresAt);
        if (remaining !== null && remaining <= 0) {
          const expired: SubscriptionData = {
            active: false,
            activatedAt: data.activatedAt,
            expiresAt: data.expiresAt,
            plan: "free",
          };
          localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(expired));
          return expired;
        }
      }
      return data;
    }
  } catch {
    // ignore parse errors
  }
  return { active: false, activatedAt: null, expiresAt: null, plan: "free" };
}

function saveSubscriptionLocal(data: SubscriptionData) {
  localStorage.setItem(SUBSCRIPTION_KEY, JSON.stringify(data));
}

/** Free access: first module only (moduleIndex === 0). */
export function canAccessModule(
  moduleIndex: number,
  isSubscribed: boolean,
  isAdmin?: boolean,
): boolean {
  if (isAdmin) return true;
  if (moduleIndex === 0) return true;
  return isSubscribed;
}

/** Lesson-level access: first 2 lessons free. */
export function canAccessLesson(
  lessonIndex: number,
  isSubscribed: boolean,
  isAdmin?: boolean,
): boolean {
  if (isAdmin) return true;
  if (lessonIndex < 2) return true;
  return isSubscribed;
}

export function useSubscription(): UseSubscriptionReturn {
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData>(
    () => loadSubscription(),
  );
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const syncedFromBackend = useRef(false);
  const pendingCheckout = useRef<"premium" | "capstone" | null>(null);
  const [showSignInForUpgrade, setShowSignInForUpgrade] = useState(false);
  const { isAdmin } = useIsAdmin();

  // Sync subscription status from Firestore on mount
  useEffect(() => {
    if (!user || syncedFromBackend.current) return;
    syncedFromBackend.current = true;
    getSubscription(user.uid)
      .then((sub) => {
        if (sub && sub.status === "active") {
          const expiresAt =
            typeof sub.expiresAt === "string"
              ? sub.expiresAt
              : new Date(Number(sub.expiresAt)).toISOString();
          const remaining = computeDaysRemaining(expiresAt);
          if (remaining !== null && remaining > 0) {
            const synced: SubscriptionData = {
              active: true,
              activatedAt: new Date().toISOString(),
              expiresAt,
              plan: "premium",
            };
            saveSubscriptionLocal(synced);
            setSubscriptionData(synced);
          }
        }
      })
      .catch(() => {});
  }, [user]);

  // If user just signed in and there's a pending checkout, open the payment link
  useEffect(() => {
    if (isAuthenticated && pendingCheckout.current) {
      const plan = pendingCheckout.current;
      pendingCheckout.current = null;
      setShowSignInForUpgrade(false);
      const link =
        plan === "capstone" ? PAYMENT_LINK_CAPSTONE : PAYMENT_LINK_PREMIUM;
      window.open(link, "_blank", "noopener,noreferrer");
    }
  }, [isAuthenticated]);

  /**
   * Verify payment with Razorpay API (server-side) and activate subscription.
   * Returns error message string on failure, null on success.
   */
  const verifyAndActivate = useCallback(
    async (paymentId: string, plan: "premium" | "capstone"): Promise<string | null> => {
      if (!user) return "Please sign in first.";
      setIsLoading(true);

      try {
        const expectedAmount = plan === "capstone" ? CAPSTONE_PRICE_INR : PRICE_INR;

        // Call our Netlify serverless function to verify with Razorpay
        const response = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentId: paymentId.trim(), expectedAmount }),
        });

        const result: VerifyPaymentResponse = await response.json();

        if (!result.verified) {
          return result.error || "Payment verification failed. Please check your Payment ID.";
        }

        // Payment verified! Activate subscription
        const activatedAt = new Date().toISOString();
        const expiresAt = computeExpiresAt(activatedAt);

        const newData: SubscriptionData = {
          active: true,
          activatedAt,
          expiresAt,
          plan: "premium",
          razorpayPaymentId: result.paymentId ?? paymentId,
        };

        // 1. Persist locally
        saveSubscriptionLocal(newData);
        setSubscriptionData(newData);

        // 2. Persist to Firestore
        await activateSubscription(user.uid, {
          razorpayOrderId: `verified_${Date.now()}`,
          razorpayPaymentId: result.paymentId ?? paymentId,
          expiresAt,
        });

        // 3. Save payment record
        await savePayment({
          userId: user.uid,
          userEmail: user.email ?? result.email ?? "",
          amount: result.amount ?? expectedAmount,
          currency: result.currency ?? "INR",
          orderId: `verified_${Date.now()}`,
          paymentId: result.paymentId ?? paymentId,
          status: "captured",
          plan: plan === "capstone" ? "capstone" : "lifetime",
          timestamp: null,
        });

        return null; // success
      } catch (err) {
        console.error("Payment verification error:", err);
        return "Verification failed. Please try again or contact support.";
      } finally {
        setIsLoading(false);
      }
    },
    [user],
  );

  const refreshSubscription = useCallback(() => {
    setIsLoading(true);
    if (user) {
      getSubscription(user.uid)
        .then((sub) => {
          if (sub && sub.status === "active") {
            const expiresAt =
              typeof sub.expiresAt === "string"
                ? sub.expiresAt
                : new Date(Number(sub.expiresAt)).toISOString();
            const synced: SubscriptionData = {
              active: true,
              activatedAt: new Date().toISOString(),
              expiresAt,
              plan: "premium",
            };
            saveSubscriptionLocal(synced);
            setSubscriptionData(synced);
          }
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    } else {
      const data = loadSubscription();
      setSubscriptionData(data);
      setIsLoading(false);
    }
  }, [user]);

  const initiateCheckout = useCallback(() => {
    if (!isAuthenticated) {
      pendingCheckout.current = "premium";
      setShowSignInForUpgrade(true);
      return;
    }
    window.open(PAYMENT_LINK_PREMIUM, "_blank", "noopener,noreferrer");
  }, [isAuthenticated]);

  const initiateCapstoneCheckout = useCallback(() => {
    if (!isAuthenticated) {
      pendingCheckout.current = "capstone";
      setShowSignInForUpgrade(true);
      return;
    }
    window.open(PAYMENT_LINK_CAPSTONE, "_blank", "noopener,noreferrer");
  }, [isAuthenticated]);

  const dismissSignInForUpgrade = useCallback(() => {
    pendingCheckout.current = null;
    setShowSignInForUpgrade(false);
  }, []);

  const proceedAfterSignIn = useCallback(() => {
    setShowSignInForUpgrade(false);
  }, []);

  const daysRemaining = computeDaysRemaining(subscriptionData.expiresAt);
  const effectiveIsSubscribed = isAdmin || subscriptionData.active;

  return {
    isSubscribed: effectiveIsSubscribed,
    isAdmin,
    isLoading,
    subscriptionData,
    daysRemaining,
    initiateCheckout,
    initiateCapstoneCheckout,
    verifyAndActivate,
    refreshSubscription,
    showSignInForUpgrade,
    dismissSignInForUpgrade,
    proceedAfterSignIn,
  };
}

export { SUBSCRIPTION_DAYS as SUBSCRIPTION_DURATION_DAYS };
