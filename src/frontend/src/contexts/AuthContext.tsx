/**
 * AuthContext — Firebase-based auth context for IT Fresher Hub.
 *
 * Provides email/password authentication with forgot-password support.
 * Admin detection: itfreshershub@gmail.com
 */

import { auth } from "@/lib/firebaseConfig";
import {
  createUserDoc,
  recordLoginEvent,
  updateUserLogin,
} from "@/lib/firestoreService";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ReactNode } from "react";

const ADMIN_EMAIL = "itfreshershub@gmail.com";

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  phoneNumber: string | null;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isLoading: boolean;
  loginStatus: "idle" | "loading" | "success" | "error";
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  isLoading: true,
  loginStatus: "idle",
  login: async () => { },
  signup: async () => { },
  resetPassword: async () => { },
  logout: async () => { },
});

function mapUser(fbUser: User | null): AuthUser | null {
  if (!fbUser) return null;
  return {
    uid: fbUser.uid,
    email: fbUser.email,
    displayName: fbUser.displayName,
    phoneNumber: fbUser.phoneNumber,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loginStatus, setLoginStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handlePostLogin = useCallback(async (fbUser: User) => {
    // Update or create user doc + record login event
    try {
      await updateUserLogin(fbUser.uid);
    } catch {
      // First login — create user doc
      await createUserDoc(fbUser.uid, {
        email: fbUser.email ?? "",
        displayName: fbUser.displayName ?? "",
      });
    }

    await recordLoginEvent(fbUser.uid, fbUser.email ?? "").catch(() => { });
  }, []);

  // Sync user state and trigger streak updates on mount/entry
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      const mapped = mapUser(fbUser);
      setUser(mapped);
      setIsLoading(false);
      setLoginStatus(mapped ? "success" : "idle");

      if (fbUser) {
        // Trigger streak/login update every time the app is opened/refreshed
        handlePostLogin(fbUser);
      }
    });
    return unsubscribe;
  }, [handlePostLogin]);

  const login = useCallback(
    async (email: string, password: string) => {
      setLoginStatus("loading");
      try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        await handlePostLogin(cred.user);
      } catch (e) {
        setLoginStatus("error");
        throw e;
      }
    },
    [handlePostLogin],
  );

  const signup = useCallback(
    async (name: string, email: string, password: string) => {
      setLoginStatus("loading");
      try {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
        await createUserDoc(cred.user.uid, { email, displayName: name });
        await recordLoginEvent(cred.user.uid, email).catch(() => { });
        const mapped = mapUser(cred.user);
        if (mapped) mapped.displayName = name;
        setUser(mapped);
        setLoginStatus("success");
      } catch (e) {
        setLoginStatus("error");
        throw e;
      }
    },
    [],
  );

  const resetPassword = useCallback(async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  }, []);


  const logout = useCallback(async () => {
    try {
      localStorage.clear();
      sessionStorage.clear();
      await signOut(auth);

      setUser(null);
      setLoginStatus("idle");
      window.location.href = "/?signin=true";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, []);


  const isAuthenticated = !!user;
  const isAdmin =
    isAuthenticated &&
    user?.email?.toLowerCase() === ADMIN_EMAIL;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        isLoading,
        loginStatus,
        login,
        signup,
        resetPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
