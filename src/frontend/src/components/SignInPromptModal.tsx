import { useSignInGate } from "@/contexts/SignInGateContext";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { GraduationCap, ShieldCheck, X } from "lucide-react";

export function SignInPromptModal() {
  const { isGateOpen, isDismissible, closeGate } = useSignInGate();
  const { login } = useInternetIdentity();

  if (!isGateOpen) return null;

  return (
    // Backdrop — pointer-events: none so it does NOT block the Internet Identity auth dialog
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(4px)",
        pointerEvents: "none",
      }}
    >
      {/* Modal card — pointer-events: auto so buttons are clickable */}
      {/* biome-ignore lint/a11y/useSemanticElements: <dialog> causes hydration issues with ICP; kept as accessible div */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign in required"
        className="relative bg-card border border-border rounded-2xl shadow-2xl p-8 mx-4 w-full max-w-sm text-center space-y-6"
        style={{ pointerEvents: "auto", zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close button — only shown when popup is dismissible */}
        {isDismissible && (
          <button
            type="button"
            onClick={closeGate}
            data-ocid="signin-gate.close_button"
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Dismiss sign-in prompt"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        {/* Brand mark */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-lg">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-display font-bold text-xl text-foreground">
              IT Fresher Hub
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Your IT launchpad
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <h3 className="font-display font-bold text-lg text-foreground">
            {isDismissible
              ? "Welcome! Sign in to Continue"
              : "Sign in to Access Content"}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isDismissible
              ? "Sign in with Internet Identity to track your progress, unlock content, and start your IT career journey."
              : "Create a free account in seconds using Internet Identity — no password needed. Your progress is saved across all devices."}
          </p>
        </div>

        {/* Security note */}
        <div className="flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-xl px-4 py-3">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground text-left">
            Secured by{" "}
            <span className="font-semibold text-foreground">
              Internet Identity
            </span>{" "}
            — passkeys, Face ID, or Touch ID. No passwords.
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          data-ocid="signin-gate.sign_in_button"
          onClick={() => login?.()}
          className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md cursor-pointer"
        >
          <GraduationCap className="w-4 h-4" />
          Sign in with Internet Identity
        </button>

        <p className="text-[11px] text-muted-foreground">
          Free forever · No credit card required
        </p>
      </div>
    </div>
  );
}
