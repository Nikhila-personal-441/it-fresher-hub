import { useAuth } from "@/contexts/AuthContext";
import type {
  AdminUserView,
  LoginEvent,
  PaymentRecord,
  SubscriptionStats,
} from "@/backend.d";
import {
  getAllSubscriptions,
  getAllUsers,
  getLoginEvents as fsGetLoginEvents,
  getPaymentRecords as fsGetPaymentRecords,
} from "@/lib/firestoreService";
import { useQuery } from "@tanstack/react-query";

export type { AdminUserView, LoginEvent, PaymentRecord, SubscriptionStats };

export function useAdminUsers() {
  const { isAdmin } = useAuth();
  return useQuery<AdminUserView[] | null>({
    queryKey: ["admin", "users"],
    queryFn: async () => {
      try {
        const users = await getAllUsers();
        const subs = await getAllSubscriptions();
        const subsMap = new Map(subs.map((s) => [s.id, s]));

        return users.map((u) => {
          const sub = subsMap.get(u.uid);
          return {
            userId: u.uid,
            userIdText: u.email || u.uid,
            lastLoginAt: u.lastLoginAt,
            lastActiveAt: u.lastLoginAt,
            subscriptionPlan: sub?.plan ?? "free",
            coursesCompleted: BigInt(0),
            loginCount: BigInt(u.loginCount ?? 0),
            subscriptionStatus: sub?.status ?? "inactive",
            signupAt: u.createdAt,
            totalProgress: 0,
          } satisfies AdminUserView;
        });
      } catch {
        return null;
      }
    },
    enabled: isAdmin,
    staleTime: 1000 * 30,
    retry: false,
  });
}

export function useAdminStats() {
  const { isAdmin } = useAuth();
  return useQuery<SubscriptionStats | null>({
    queryKey: ["admin", "stats"],
    queryFn: async () => {
      try {
        const users = await getAllUsers();
        const subs = await getAllSubscriptions();
        const payments = await fsGetPaymentRecords();
        const activeSubs = subs.filter((s) => s.status === "active");
        const totalRevenue = payments.reduce(
          (sum, p) => sum + (p.amount || 0),
          0,
        );

        return {
          totalUsers: BigInt(users.length),
          subscribedUsers: BigInt(activeSubs.length),
          activeSubscriptions: BigInt(activeSubs.length),
          totalPayments: BigInt(payments.length),
          totalRevenue: BigInt(totalRevenue),
          recentSignups: BigInt(
            users.filter((u) => {
              if (!u.createdAt) return false;
              const ts =
                typeof u.createdAt === "object" &&
                u.createdAt !== null &&
                "toDate" in u.createdAt
                  ? (
                      u.createdAt as { toDate: () => Date }
                    ).toDate()
                  : new Date(u.createdAt as string);
              return Date.now() - ts.getTime() < 7 * 24 * 60 * 60 * 1000;
            }).length,
          ),
        } satisfies SubscriptionStats;
      } catch {
        return null;
      }
    },
    enabled: isAdmin,
    staleTime: 1000 * 30,
    retry: false,
  });
}

export function useLoginEvents() {
  const { isAdmin } = useAuth();
  return useQuery<LoginEvent[]>({
    queryKey: ["admin", "loginEvents"],
    queryFn: async () => {
      try {
        const events = await fsGetLoginEvents();
        return events.map((e) => ({
          userId: e.userId,
          userEmail: e.userEmail,
          timestamp: e.timestamp,
          userIdText: e.userEmail ?? e.userId,
        }));
      } catch {
        return [];
      }
    },
    enabled: isAdmin,
    staleTime: 1000 * 30,
    retry: false,
  });
}

export function usePaymentRecords() {
  const { isAdmin } = useAuth();
  return useQuery<PaymentRecord[]>({
    queryKey: ["admin", "paymentRecords"],
    queryFn: async () => {
      try {
        const records = await fsGetPaymentRecords();
        return records.map((r) => ({
          status: r.status,
          userId: r.userId,
          plan: r.plan,
          orderId: r.orderId,
          paymentId: r.paymentId,
          timestamp: r.timestamp,
          userIdText: r.userEmail ?? r.userId,
          amount: BigInt(r.amount ?? 0),
          userEmail: r.userEmail,
        }));
      } catch {
        return [];
      }
    },
    enabled: isAdmin,
    staleTime: 1000 * 30,
    retry: false,
  });
}
