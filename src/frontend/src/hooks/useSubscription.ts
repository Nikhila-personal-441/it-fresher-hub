/**
 * useSubscription — freemium paywall hook for IT Fresher Hub
 *
 * Subscription: ₹199 lifetime access (no expiry).
 * Capstone add-on: ₹499 (separate one-time purchase).
 * First module of every course is always free.
 * Subscription state is persisted in Firestore and cached in localStorage.
 *
 * Payment: Razorpay Payment Links (hosted by Razorpay).
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
  /** Called after user confirms payment is done */
  confirmPaymentComplete: (plan: "premium" | "capstone") => void;
  refreshSubscription: () => void;
  /** True when the upgrade flow needs the user to sign in first */
  showSignInForUpgrade: boolean;
  /** Dismiss the sign-in-for-upgrade modal without proceeding */
  dismissSignInForUpgrade: () => void;
  /** Trigger sign-in from the sign-in modal */
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

/**
 * Free access: first module only (moduleIndex === 0).
 * All other modules require subscription.
 * Admin users (isAdmin=true) always get full access.
 */
export function canAccessModule(
  moduleIndex: number,
  isSubscribed: boolean,
  isAdmin?: boolean,
): boolean {
  if (isAdmin) return true;
  if (moduleIndex === 0) return true;
  return isSubscribed;
}

/** Lesson-level access: first 2 lessons free.
 * Admin users (isAdmin=true) always get full access.
 */
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
  // Pending checkout after sign-in
  const pendingCheckout = useRef<"premium" | "capstone" | null>(null);
  // Controls the explicit sign-in popup shown in the upgrade flow
  const [showSignInForUpgrade, setShowSignInForUpgrade] = useState(false);

  // Admin bypass: admins always have full access without needing a subscription
  const { isAdmin } = useIsAdmin();

  // Sync subscription status from Firestore on mount (once user is ready)
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
      .catch(() => {
        /* Firestore unavailable — rely on localStorage */
      });
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

  /** Activate subscription after user confirms payment */
  const confirmPaymentComplete = useCallback(
    (plan: "premium" | "capstone") => {
      const activatedAt = new Date().toISOString();
      const expiresAt = computeExpiresAt(activatedAt);
      const paymentId = `rzplink_${Date.now()}`;

      const newData: SubscriptionData = {
        active: true,
        activatedAt,
        expiresAt,
        plan: "premium",
        razorpayPaymentId: paymentId,
      };

      // 1. Persist locally so UI unlocks immediately
      saveSubscriptionLocal(newData);
      setSubscriptionData(newData);

      // 2. Persist to Firestore
      if (user) {
        activateSubscription(user.uid, {
          razorpayOrderId: `rzplink_${plan}_${Date.now()}`,
          razorpayPaymentId: paymentId,
          expiresAt,
        }).catch((err) => {
          console.warn(
            "[IT Fresher Hub] Failed to persist subscription to Firestore:",
            err,
          );
        });

        // 3. Save payment record
        savePayment({
          userId: user.uid,
          userEmail: user.email ?? "",
          amount: plan === "capstone" ? CAPSTONE_PRICE_INR : PRICE_INR,
          currency: "INR",
          orderId: `rzplink_${plan}_${Date.now()}`,
          paymentId,
          status: "captured",
          plan: plan === "capstone" ? "capstone" : "lifetime",
          timestamp: null,
        }).catch((err) => {
          console.warn("[IT Fresher Hub] Failed to save payment record:", err);
        });
      }
    },
    [user],
  );

  const refreshSubscription = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const data = loadSubscription();
      setSubscriptionData(data);
      setIsLoading(false);
    }, 500);
  }, []);

  /** Open premium ₹199 payment link */
  const initiateCheckout = useCallback(() => {
    if (!isAuthenticated) {
      pendingCheckout.current = "premium";
      setShowSignInForUpgrade(true);
      return;
    }
    window.open(PAYMENT_LINK_PREMIUM, "_blank", "noopener,noreferrer");
  }, [isAuthenticated]);

  /** Open capstone ₹499 payment link */
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

  // Admin users bypass the subscription requirement
  const effectiveIsSubscribed = isAdmin || subscriptionData.active;

  return {
    isSubscribed: effectiveIsSubscribed,
    isAdmin,
    isLoading,
    subscriptionData,
    daysRemaining,
    initiateCheckout,
    initiateCapstoneCheckout,
    confirmPaymentComplete,
    refreshSubscription,
    showSignInForUpgrade,
    dismissSignInForUpgrade,
    proceedAfterSignIn,
  };
}

export { SUBSCRIPTION_DAYS as SUBSCRIPTION_DURATION_DAYS };
