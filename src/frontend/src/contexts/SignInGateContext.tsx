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
