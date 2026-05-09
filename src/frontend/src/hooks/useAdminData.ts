import { createActor } from "@/backend";
import type {
  AdminUserView,
  LoginEvent,
  PaymentRecord,
  SubscriptionStats,
} from "@/backend.d";
import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export type { AdminUserView, LoginEvent, PaymentRecord, SubscriptionStats };

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

export function useLoginEvents() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<LoginEvent[]>({
    queryKey: ["admin", "loginEvents"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        const events = await actor.getLoginEvents();
        // Sort most recent first
        return [...events].sort(
          (a, b) => Number(b.timestamp) - Number(a.timestamp),
        );
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 30,
    retry: false,
  });
}

export function usePaymentRecords() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PaymentRecord[]>({
    queryKey: ["admin", "paymentRecords"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        const records = await actor.getPaymentRecords();
        // Sort most recent first
        return [...records].sort(
          (a, b) => Number(b.timestamp) - Number(a.timestamp),
        );
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 30,
    retry: false,
  });
}
