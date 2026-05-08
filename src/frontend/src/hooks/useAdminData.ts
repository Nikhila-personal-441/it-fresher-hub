import { createActor } from "@/backend";
import type { AdminUserView, SubscriptionStats } from "@/backend.d";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export type { AdminUserView, SubscriptionStats };

export function useAdminUsers() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<AdminUserView[] | null>({
    queryKey: ["admin", "users"],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getAllUsersAdmin();
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 30,
    retry: false,
  });
}

export function useAdminStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<SubscriptionStats | null>({
    queryKey: ["admin", "stats"],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getSubscriptionStatsAdmin();
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 30,
    retry: false,
  });
}
