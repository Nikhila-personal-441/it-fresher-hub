import { useSignInGate } from "@/contexts/SignInGateContext";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, KeyRound, Loader2, Mail, ShieldCheck, User, X } from "lucide-react";
import { useState } from "react";

type AuthMode = "login" | "signup" | "forgot";

export function SignInPromptModal() {
  const { isGateOpen, isDismissible, closeGate } = useSignInGate();
  const { login, signup, resetPassword } = useAuth();

  const [mode, setMode] = useState<AuthMode>("login");

  // Email/password state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isGateOpen) return null;

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError("");
    setSuccess("");
    setLoading(false);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      if (mode === "signup") {
        if (!name.trim()) {
          setError("Please enter your name.");
          setLoading(false);
          return;
        }
        await signup(name.trim(), email.trim(), password);
      } else {
        await login(email.trim(), password);
      }
      resetForm();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Authentication failed";
      if (msg.includes("user-not-found") || msg.includes("invalid-credential")) {
        setError("Invalid email or password. Please try again.");
      } else if (msg.includes("email-already-in-use")) {
        setError("This email is already registered. Please sign in instead.");
      } else if (msg.includes("weak-password")) {
        setError("Password must be at least 6 characters.");
      } else if (msg.includes("invalid-email")) {
        setError("Please enter a valid email address.");
      } else {
        setError(msg);
      }
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      if (!email.trim()) {
        setError("Please enter your email address.");
        setLoading(false);
        return;
      }
      await resetPassword(email.trim());
      setSuccess("Password reset email sent! Check your inbox (and spam folder).");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to send reset email";
      if (msg.includes("user-not-found")) {
        setError("No account found with this email address.");
      } else if (msg.includes("invalid-email")) {
        setError("Please enter a valid email address.");
      } else if (msg.includes("too-many-requests")) {
        setError("Too many attempts. Please try again later.");
      } else {
        setError(msg);
      }
    }
    setLoading(false);
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      style={{
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(4px)",
        pointerEvents: "none",
      }}
    >
      {/* Modal card */}
      {/* biome-ignore lint/a11y/useSemanticElements: kept as accessible div */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sign in required"
        className="relative bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 mx-4 w-full max-w-sm text-center space-y-5"
        style={{ pointerEvents: "auto", zIndex: 9999 }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Close button */}
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

        {/* ─── Forgot Password Form ─── */}
        {mode === "forgot" && (
          <form onSubmit={handleForgotPassword} className="space-y-3 text-left">
            <div className="flex items-center gap-2 mb-1">
              <KeyRound className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Reset Password</h3>
            </div>
            <p className="text-xs text-muted-foreground">
              Enter your registered email address. We'll send you a link to reset your password.
            </p>
            <div>
              <label htmlFor="forgot-email" className="text-xs font-medium text-muted-foreground mb-1 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-2">
                {error}
              </p>
            )}
            {success && (
              <p className="text-xs text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-2">
                ✅ {success}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
              Send Reset Link
            </button>

            <p className="text-xs text-center text-muted-foreground">
              Remember your password?{" "}
              <button type="button" onClick={() => { setMode("login"); setError(""); setSuccess(""); }} className="text-primary font-semibold hover:underline">
                Back to Sign In
              </button>
            </p>
          </form>
        )}

        {/* ─── Email/Password Form ─── */}
        {mode !== "forgot" && (
          <form onSubmit={handleEmailSubmit} className="space-y-3 text-left">
            {mode === "signup" && (
              <div>
                <label htmlFor="signin-name" className="text-xs font-medium text-muted-foreground mb-1 block">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    id="signin-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                    required
                  />
                </div>
              </div>
            )}
            <div>
              <label htmlFor="signin-email" className="text-xs font-medium text-muted-foreground mb-1 block">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="signin-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="signin-password" className="text-xs font-medium text-muted-foreground mb-1 block">
                Password
              </label>
              <input
                id="signin-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === "signup" ? "Min 6 characters" : "Enter password"}
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                minLength={6}
                required
              />
            </div>

            {/* Forgot password link */}
            {mode === "login" && (
              <div className="text-right -mt-1">
                <button
                  type="button"
                  onClick={() => { setMode("forgot"); setError(""); setSuccess(""); }}
                  className="text-xs text-primary font-medium hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {error && (
              <p className="text-xs text-destructive bg-destructive/10 border border-destructive/20 rounded-lg p-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              data-ocid="signin-gate.sign_in_button"
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm hover:bg-primary/90 active:scale-[0.98] transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <GraduationCap className="w-4 h-4" />}
              {mode === "signup" ? "Create Account" : "Sign In"}
            </button>

            <p className="text-xs text-center text-muted-foreground">
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button type="button" onClick={() => { setMode("signup"); setError(""); }} className="text-primary font-semibold hover:underline">
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button type="button" onClick={() => { setMode("login"); setError(""); }} className="text-primary font-semibold hover:underline">
                    Sign in
                  </button>
                </>
              )}
            </p>
          </form>
        )}

        {/* Security note */}
        <div className="flex items-center gap-2 bg-primary/8 border border-primary/20 rounded-xl px-4 py-3">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <p className="text-xs text-muted-foreground text-left">
            Your account is secured with{" "}
            <span className="font-semibold text-foreground">Industry-Standard Encryption</span>
            {" "}— your credentials are always protected and never stored in plain text.
          </p>
        </div>

        <p className="text-[11px] text-muted-foreground">
          Join 1000+ freshers starting their IT journey
        </p>
      </div>
    </div>
  );
}
