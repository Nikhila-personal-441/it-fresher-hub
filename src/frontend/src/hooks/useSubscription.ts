/**
 * useSubscription — freemium paywall hook for IT Fresher Hub
 *
 * Subscription: ₹199 lifetime access (no expiry).
 * Capstone add-on: ₹499 (separate one-time purchase).
 * First module of every course is always free.
 * Subscription state is persisted in Firestore and cached in localStorage.
 *
 * Payment provider: Razorpay Standard Checkout.
 * Set VITE_RAZORPAY_KEY_ID in .env to enable live payments.
 */

import { useAuth } from "@/contexts/AuthContext";
import { useIsAdmin } from "@/hooks/useAuth";
import {
  activateSubscription,
  getSubscription,
  savePayment,
} from "@/lib/firestoreService";
import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open(): void };
  }
}

const SUBSCRIPTION_KEY = "itfresherhub_subscription_v2";
export const PRICE_INR = 199;
export const CAPSTONE_PRICE_INR = 499;
/** Lifetime plan — no expiry. Set to a large number so countdown logic never shows "expired" for active subscribers. */
export const SUBSCRIPTION_DAYS = 36500;

export interface SubscriptionData {
  active: boolean;
  activatedAt: string | null;
  expiresAt: string | null;
  plan: "free" | "premium";
  razorpayPaymentId?: string;
}

interface RazorpaySuccessPayload {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface UseSubscriptionReturn {
  isSubscribed: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  subscriptionData: SubscriptionData;
  daysRemaining: number | null;
  initiateCheckout: () => void;
  refreshSubscription: () => void;
  activateAfterPayment: (payload: RazorpaySuccessPayload) => void;
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

function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
    document.head.appendChild(script);
  });
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
  const { user, isAuthenticated, login } = useAuth();
  const syncedFromBackend = useRef(false);
  // Pending checkout after sign-in
  const pendingCheckout = useRef(false);
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

  // If user just signed in and there's a pending checkout, close the sign-in modal
  // and proceed directly to Razorpay
  useEffect(() => {
    if (isAuthenticated && pendingCheckout.current) {
      pendingCheckout.current = false;
      setShowSignInForUpgrade(false);
      void openRazorpay();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const activateAfterPayment = useCallback(
    (payload: RazorpaySuccessPayload) => {
      const activatedAt = new Date().toISOString();
      const expiresAt = computeExpiresAt(activatedAt);
      const newData: SubscriptionData = {
        active: true,
        activatedAt,
        expiresAt,
        plan: "premium",
        razorpayPaymentId: payload.razorpay_payment_id,
      };
      // 1. Persist locally so UI unlocks immediately
      saveSubscriptionLocal(newData);
      setSubscriptionData(newData);

      // 2. Persist to Firestore
      if (user) {
        activateSubscription(user.uid, {
          razorpayOrderId: payload.razorpay_order_id,
          razorpayPaymentId: payload.razorpay_payment_id,
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
          amount: PRICE_INR,
          currency: "INR",
          orderId: payload.razorpay_order_id,
          paymentId: payload.razorpay_payment_id,
          status: "captured",
          plan: "lifetime",
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

  const openRazorpay = useCallback(async () => {
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID as
      | string
      | undefined;
    const isConfigured =
      typeof razorpayKey === "string" &&
      razorpayKey.length > 0 &&
      !razorpayKey.startsWith("your_razorpay");

    if (!isConfigured) {
      console.warn(
        "[IT Fresher Hub] Razorpay key not configured. Payment skipped in demo mode. No access granted.",
      );
      return;
    }

    setIsLoading(true);
    try {
      await loadRazorpayScript();
    } catch {
      setIsLoading(false);
      return;
    }

    setIsLoading(false);

    const rzp = new window.Razorpay({
      key: razorpayKey,
      amount: 19900,
      currency: "INR",
      name: "IT Fresher Hub",
      description: "Lifetime Full Access",
      image: "/logo.png",
      theme: { color: "#6d28d9" },
      prefill: {
        email: user?.email ?? undefined,
        contact: user?.phoneNumber ?? undefined,
      },
      handler: (response: RazorpaySuccessPayload) => {
        activateAfterPayment(response);
      },
      modal: {
        ondismiss: () => {
          setIsLoading(false);
        },
      },
    });
    rzp.open();
  }, [activateAfterPayment, user]);

  const initiateCheckout = useCallback(async () => {
    // If the user is not signed in, show the explicit sign-in popup.
    // pendingCheckout ensures Razorpay opens automatically after successful sign-in.
    if (!isAuthenticated) {
      pendingCheckout.current = true;
      setShowSignInForUpgrade(true);
      return;
    }
    await openRazorpay();
  }, [isAuthenticated, openRazorpay]);

  const dismissSignInForUpgrade = useCallback(() => {
    pendingCheckout.current = false;
    setShowSignInForUpgrade(false);
  }, []);

  const proceedAfterSignIn = useCallback(() => {
    // The sign-in modal (SignInPromptModal) handles the login flow.
    // Once signed in, the useEffect above closes the modal and opens Razorpay.
    setShowSignInForUpgrade(false);
  }, []);

  const daysRemaining = computeDaysRemaining(subscriptionData.expiresAt);

  // Admin users bypass the subscription requirement — they always have full access
  const effectiveIsSubscribed = isAdmin || subscriptionData.active;

  return {
    isSubscribed: effectiveIsSubscribed,
    isAdmin,
    isLoading,
    subscriptionData,
    daysRemaining,
    initiateCheckout,
    refreshSubscription,
    activateAfterPayment,
    showSignInForUpgrade,
    dismissSignInForUpgrade,
    proceedAfterSignIn,
  };
}

export { SUBSCRIPTION_DAYS as SUBSCRIPTION_DURATION_DAYS };
