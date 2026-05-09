/**
 * useAuth — re-exports from AuthContext for backward compatibility.
 *
 * Admin detection: email === "itfreshershub@gmail.com"
 */

import { useAuth } from "@/contexts/AuthContext";

/**
 * Returns { isAdmin, isLoading } for the currently authenticated user.
 * isAdmin is true only for itfreshershub@gmail.com.
 */
export function useIsAdmin() {
  const { isAdmin, isLoading } = useAuth();
  return { isAdmin, isLoading };
}
