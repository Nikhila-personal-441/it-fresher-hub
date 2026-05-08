/**
 * useAuth — admin detection for IT Fresher Hub.
 *
 * Uses getAllUsersAdmin() as the admin check: the backend only allows the owner
 * principal to call this method. If it returns data, the caller is admin;
 * if it throws/returns null they are a regular user.
 */

import { createActor } from "@/backend";
import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

/**
 * Returns { isAdmin, isLoading } for the currently authenticated user.
 * isAdmin is false for unauthenticated users and non-admin accounts.
 */
export function useIsAdmin() {
  const { loginStatus } = useInternetIdentity();
  const isAuthenticated = loginStatus === "success";
  const { actor, isFetching } = useActor(createActor);

  const { data: isAdmin = false, isLoading } = useQuery<boolean>({
    queryKey: ["isAdmin", isAuthenticated],
    queryFn: async () => {
      if (!actor) return false;
      try {
        const result = await actor.getAllUsersAdmin();
        return Array.isArray(result);
      } catch {
        return false;
      }
    },
    enabled: !!actor && !isFetching && isAuthenticated,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
    retry: false,
  });

  // Not authenticated = definitely not admin
  if (!isAuthenticated) return { isAdmin: false, isLoading: false };

  return { isAdmin, isLoading };
}
