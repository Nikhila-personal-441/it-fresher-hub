import { useAuth } from "@/contexts/AuthContext";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

interface SignInGateContextValue {
  isGateOpen: boolean;
  isDismissible: boolean;
  triggerSignInGate: () => void;
  openDismissibleGate: () => void;
  closeGate: () => void;
}

const SignInGateContext = createContext<SignInGateContextValue>({
  isGateOpen: false,
  isDismissible: false,
  triggerSignInGate: () => {},
  openDismissibleGate: () => {},
  closeGate: () => {},
});

export function SignInGateProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  // Always start closed — no auto-trigger on mount
  const [isGateOpen, setIsGateOpen] = useState(false);
  const [isDismissible, setIsDismissible] = useState(false);

  // Auto-close gate when user successfully signs in
  useEffect(() => {
    if (isAuthenticated && isGateOpen) {
      setIsGateOpen(false);
    }
  }, [isAuthenticated, isGateOpen]);

  // Handle post-logout redirect where URL contains ?signin=true
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("signin") === "true") {
      // Remove param from URL cleanly so it doesn't stay
      const newUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, newUrl);
      
      if (!isAuthenticated) {
        setIsDismissible(true);
        setIsGateOpen(true);
      }
    }
  }, [isAuthenticated]);

  // Show dismissible sign-in prompt on first-ever app visit for unauthenticated users.
  // Delayed by 4s so the onboarding tour shows first.
  useEffect(() => {
    if (isAuthenticated) return;
    const alreadyPrompted = localStorage.getItem("signin_prompted_v1");
    if (alreadyPrompted) return;

    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        localStorage.setItem("signin_prompted_v1", "true");
        setIsDismissible(true);
        setIsGateOpen(true);
      }
    }, 4000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount only


  // triggerSignInGate: used ONLY by the Upgrade/checkout flow (non-dismissible)
  // Do NOT call this from content clicks or page loads — only from PaywallModal subscribe button
  const triggerSignInGate = useCallback(() => {
    if (!isAuthenticated) {
      setIsDismissible(false);
      setIsGateOpen(true);
    }
  }, [isAuthenticated]);

  // openDismissibleGate: user-initiated sign-in (from sidebar/header Sign In button only)
  const openDismissibleGate = useCallback(() => {
    if (!isAuthenticated) {
      setIsDismissible(true);
      setIsGateOpen(true);
    }
  }, [isAuthenticated]);

  const closeGate = useCallback(() => {
    if (isDismissible || isAuthenticated) {
      setIsGateOpen(false);
    }
  }, [isDismissible, isAuthenticated]);

  return (
    <SignInGateContext.Provider
      value={{
        isGateOpen,
        isDismissible,
        triggerSignInGate,
        openDismissibleGate,
        closeGate,
      }}
    >
      {children}
    </SignInGateContext.Provider>
  );
}

export function useSignInGate() {
  return useContext(SignInGateContext);
}
