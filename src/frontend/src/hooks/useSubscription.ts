/**
 * useSubscription — freemium paywall hook for IT Fresher Hub
 *
 * Subscription: ₹199 lifetime access (no expiry).
 * Capstone add-on: ₹499 (separate one-time purchase).
 * First module of every course is always free.
 * Subscription state is persisted in Firestore and cached in localStorage.
 *
 * Payment: Razorpay Checkout SDK (in-app popup).
 * After payment success, the payment is auto-verified via a Netlify
 * serverless function, then the subscription is activated instantly.
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
export const PRICE_INR = 99;
export const PATH_PRICE_INR = 199;
export const CAPSTONE_PRICE_INR = 499;

// Bundle Pricing
export const BUNDLE_PATHS_PRICE = 249; // All Learning Paths
export const BUNDLE_PRO_PRICE = 549;   // 2 Paths + Capstone
export const BUNDLE_ALL_PRICE = 749;   // Everything (All Paths + Capstone + MNC)

/** Lifetime plan — no expiry */
export const SUBSCRIPTION_DAYS = 36500;

export interface SubscriptionData {
  active: boolean;
  activatedAt: string | null;
  expiresAt: string | null;
  plan: string | string[];
  razorpayPaymentId?: string;
}

interface UseSubscriptionReturn {
  isSubscribed: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  subscriptionData: SubscriptionData;
  daysRemaining: number | null;
  /** Opens Razorpay Checkout for ₹199 premium */
  initiateCheckout: () => void;
  /** Opens Razorpay Checkout for ₹499 capstone */
  initiateCapstoneCheckout: () => void;
  /** Opens Razorpay Checkout for a specific path */
  initiatePathCheckout: (pathId: string) => void;
  refreshSubscription: () => void;
  showSignInForUpgrade: boolean;
  dismissSignInForUpgrade: () => void;
  proceedAfterSignIn: () => void;
  /** Error message from last payment attempt */
  paymentError: string | null;
  clearPaymentError: () => void;
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
    // ignore
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

/** Free access: first module only */
export function canAccessModule(
  moduleIndex: number,
  isSubscribed: boolean,
  isAdmin?: boolean,
): boolean {
  if (isAdmin) return true;
  if (moduleIndex === 0) return true;
  return isSubscribed;
}

/** Lesson-level access: first 2 lessons free */
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
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();
  const syncedFromBackend = useRef(false);
  const pendingCheckout = useRef<string | null>(null);
  const [showSignInForUpgrade, setShowSignInForUpgrade] = useState(false);
  const { isAdmin } = useIsAdmin();

  // Sync from Firestore on mount
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
              plan: sub.plan,
            };
            saveSubscriptionLocal(synced);
            setSubscriptionData(synced);
          }
        }
      })
      .catch(() => {});
  }, [user]);

  const activateAfterVerifiedPayment = useCallback(
    async (args: {
      razorpayPaymentId: string;
      razorpayOrderId: string;
      plan: string;
      amountInr: number;
      status?: string;
    }) => {
      if (!user) return;

      const activatedAt = new Date().toISOString();
      const expiresAt = computeExpiresAt(activatedAt);

      const newData: SubscriptionData = {
        active: true,
        activatedAt,
        expiresAt,
        plan: args.plan,
        razorpayPaymentId: args.razorpayPaymentId,
      };

      saveSubscriptionLocal(newData);
      setSubscriptionData(newData);

      activateSubscription(user.uid, {
        razorpayOrderId: args.razorpayOrderId,
        razorpayPaymentId: args.razorpayPaymentId,
        expiresAt,
        plan: args.plan,
      }).catch((e) => console.warn("Failed to save subscription:", e));

      savePayment({
        userId: user.uid,
        userEmail: user.email ?? "",
        amount: args.amountInr,
        currency: "INR",
        orderId: args.razorpayOrderId,
        paymentId: args.razorpayPaymentId,
        status: args.status ?? "captured",
        plan: args.plan === "capstone" ? "capstone" : "lifetime",
        timestamp: null,
      }).catch((e) => console.warn("Failed to save payment:", e));
    },
    [user],
  );

  /** Open Razorpay Checkout popup */
  const openRazorpay = useCallback(
    async (plan: string) => {
      const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined;
      if (!razorpayKey || razorpayKey === "your_razorpay_key_id") {
        setPaymentError("Payment is not configured yet. Please contact support.");
        return;
      }

      setIsLoading(true);
      setPaymentError(null);

      try {
        await loadRazorpayScript();
      } catch {
        setPaymentError("Failed to load payment system. Please refresh and try again.");
        setIsLoading(false);
        return;
      }

      const amount = plan === "capstone" ? CAPSTONE_PRICE_INR : plan.startsWith("path_") ? PATH_PRICE_INR : PRICE_INR;
      let orderId: string | null = null;
      try {
        const orderRes = await fetch("/api/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            currency: "INR",
            plan,
            userId: user?.uid ?? null,
            userEmail: user?.email ?? null,
          }),
        });
        const orderJson = await orderRes.json();
        if (!orderRes.ok || !orderJson?.orderId) {
          throw new Error(orderJson?.error || "Failed to create Razorpay order");
        }
        orderId = String(orderJson.orderId);
      } catch {
        setPaymentError("Could not start payment. Please try again in a moment.");
        setIsLoading(false);
        return;
      }

      const rzp = new window.Razorpay({
        key: razorpayKey,
        amount: amount * 100, // Razorpay expects paise
        currency: "INR",
        order_id: orderId,
        name: "IT Fresher Hub",
        description: plan === "capstone"
          ? "Capstone Project — Full Access + Certificate"
          : plan.startsWith("path_") 
            ? "Path Certification Enrollment"
            : "Premium — Lifetime Full Access",
        image: "/favicon.ico",
        theme: { color: "#6d28d9" },
        prefill: {
          email: user?.email ?? undefined,
          name: user?.displayName ?? undefined,
        },
        handler: (response: { razorpay_payment_id: string; razorpay_order_id?: string; razorpay_signature?: string }) => {
          setIsLoading(true);
          const razorpayOrderId = response.razorpay_order_id || orderId || "";
          const razorpaySignature = response.razorpay_signature || "";
          fetch("/api/verify-razorpay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              plan,
              expectedAmount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId,
              razorpaySignature,
            }),
          })
            .then(async (r) => {
              const j = await r.json();
              if (!r.ok || !j?.verified) {
                throw new Error(j?.error || "Payment verification failed");
              }
              await activateAfterVerifiedPayment({
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId,
                plan,
                amountInr: amount,
                status: j?.status,
              });
            })
            .catch(() => {
              setPaymentError("Verification failed. If money was deducted, please contact support with your payment details.");
            })
            .finally(() => setIsLoading(false));
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          },
        },
      });

      setIsLoading(false);
      rzp.open();
    },
    [activateAfterVerifiedPayment, user],
  );

  // If user just signed in and checkout was pending, open Razorpay immediately
  useEffect(() => {
    if (isAuthenticated && pendingCheckout.current) {
      const plan = pendingCheckout.current;
      pendingCheckout.current = null;
      setShowSignInForUpgrade(false);
      void openRazorpay(plan);
    }
  }, [isAuthenticated, openRazorpay]);

  const initiateCheckout = useCallback(() => {
    if (!isAuthenticated) {
      pendingCheckout.current = "premium";
      setShowSignInForUpgrade(true);
      return;
    }
    void openRazorpay("premium");
  }, [isAuthenticated, openRazorpay]);

  const initiateCapstoneCheckout = useCallback(() => {
    if (!isAuthenticated) {
      pendingCheckout.current = "capstone";
      setShowSignInForUpgrade(true);
      return;
    }
    void openRazorpay("capstone");
  }, [isAuthenticated, openRazorpay]);

  const initiatePathCheckout = useCallback((pathId: string) => {
    if (!isAuthenticated) {
      pendingCheckout.current = pathId;
      setShowSignInForUpgrade(true);
      return;
    }
    void openRazorpay(pathId);
  }, [isAuthenticated, openRazorpay]);

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
              plan: sub.plan,
            };
            saveSubscriptionLocal(synced);
            setSubscriptionData(synced);
          }
        })
        .catch(() => {})
        .finally(() => setIsLoading(false));
    } else {
      setSubscriptionData(loadSubscription());
      setIsLoading(false);
    }
  }, [user]);

  const dismissSignInForUpgrade = useCallback(() => {
    pendingCheckout.current = null;
    setShowSignInForUpgrade(false);
  }, []);

  const proceedAfterSignIn = useCallback(() => {
    setShowSignInForUpgrade(false);
  }, []);

  const clearPaymentError = useCallback(() => setPaymentError(null), []);

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
    refreshSubscription,
    showSignInForUpgrade,
    dismissSignInForUpgrade,
    proceedAfterSignIn,
    paymentError,
    clearPaymentError,
  };
}

export { SUBSCRIPTION_DAYS as SUBSCRIPTION_DURATION_DAYS };
