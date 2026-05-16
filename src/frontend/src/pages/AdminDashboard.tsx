import type {
  AdminUserView,
  LoginEvent,
  PaymentRecord,
  SubscriptionStats,
} from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useAdminStats,
  useAdminUsers,
  useLoginEvents,
  usePaymentRecords,
} from "@/hooks/useAdminData";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock,
  CreditCard,
  IndianRupee,
  LogIn,
  Receipt,
  TrendingUp,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  approveSubscription,
  rejectSubscription,
} from "@/lib/firestoreService";
import { useQueryClient } from "@tanstack/react-query";
import { AdminCouponsTab } from "./AdminCouponsTab";

type Tab = "users" | "logins" | "payments" | "coupons";

// ── Formatters ──────────────────────────────────────────────────────────────
/** Convert any timestamp (Firestore, bigint-nanos, Date, string) into a Date */
function toDate(ts: unknown): Date {
  if (ts === null || ts === undefined) return new Date(0);
  if (ts instanceof Date) return ts;
  if (typeof ts === "object" && ts !== null && "toDate" in ts) {
    return (ts as { toDate: () => Date }).toDate();
  }
  if (typeof ts === "bigint") {
    const n = Number(ts);
    // ICP nanosecond timestamps are > 1e15
    return new Date(n > 1e15 ? n / 1_000_000 : n);
  }
  if (typeof ts === "number") {
    return new Date(ts > 1e15 ? ts / 1_000_000 : ts);
  }
  return new Date(String(ts));
}

function formatDate(ts: unknown): string {
  return toDate(ts).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatDateTime(ts: unknown): string {
  const d = toDate(ts);
  return `${d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })} ${d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`;
}

function formatRelative(ts: unknown): string {
  const ms = Date.now() - toDate(ts).getTime();
  const mins = Math.floor(ms / 60_000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

function formatRupees(paise: bigint | number): string {
  return `₹${(Number(paise) / 100).toLocaleString("en-IN")}`;
}

// ── Sub-components ──────────────────────────────────────────────────────────
function statusBadge(status: string) {
  switch (status) {
    case "active":
      return (
        <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs">
          Active
        </Badge>
      );
    case "subscribed":
      return (
        <Badge className="bg-blue-500/15 text-blue-400 border-blue-500/30 text-xs">
          Subscribed
        </Badge>
      );
    case "pending_verification":
      return (
        <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/30 text-xs animate-pulse">
          ⏳ Pending
        </Badge>
      );
    case "cancelled":
      return (
        <Badge className="bg-red-500/15 text-red-400 border-red-500/30 text-xs">
          Cancelled
        </Badge>
      );
    default:
      return (
        <Badge className="bg-muted text-muted-foreground border-border text-xs">
          Inactive
        </Badge>
      );
  }
}

function planBadge(plan: string) {
  if (plan === "bundle_paths") {
    return <Badge className="bg-blue-500/15 text-blue-400 border-blue-500/30 text-xs">Core Bundle</Badge>;
  }
  if (plan === "bundle_pro") {
    return <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs">Pro Bundle</Badge>;
  }
  if (plan === "bundle_all") {
    return <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/30 text-xs">Master Bundle</Badge>;
  }
  if (plan === "premium" || plan === "base") {
    return <Badge className="bg-purple-500/15 text-purple-400 border-purple-500/30 text-xs">Base Plan</Badge>;
  }
  if (plan === "capstone" || plan === "base+capstone") {
    return <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/30 text-xs">Capstone Plan</Badge>;
  }
  if (plan.startsWith("path_")) {
    return <Badge className="bg-blue-500/15 text-blue-400 border-blue-500/30 text-xs">Single Path</Badge>;
  }
  return (
    <Badge className="bg-muted text-muted-foreground border-border text-xs">
      {plan || "None"}
    </Badge>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-smooth"
    >
      <div className={`p-2.5 rounded-lg shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-display font-bold text-xl text-foreground leading-tight">
          {value}
        </p>
        {sub && <p className="text-[10px] text-muted-foreground">{sub}</p>}
      </div>
    </motion.div>
  );
}

// ── Loading rows ──────────────────────────────────────────────────────────
function TableSkeleton({
  rows = 4,
  cols = 6,
}: { rows?: number; cols?: number }) {
  const rowKeys = Array.from({ length: rows }, (_, i) => `skel-r${i}`);
  const colKeys = Array.from({ length: cols }, (_, j) => `skel-c${j}`);
  return (
    <div className="p-6 space-y-3">
      {rowKeys.map((rk) => (
        <div key={rk} className="flex gap-3">
          {colKeys.map((ck) => (
            <Skeleton key={`${rk}-${ck}`} className="h-9 flex-1 rounded-lg" />
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Helpers for login aggregation ────────────────────────────────────────
function aggregateLoginCounts(
  events: LoginEvent[],
): Map<string, { count: number; lastAt: unknown }> {
  const map = new Map<string, { count: number; lastAt: unknown }>();
  for (const e of events) {
    const key = e.userIdText ?? e.userId;
    const existing = map.get(key);
    if (!existing) {
      map.set(key, { count: 1, lastAt: e.timestamp });
    } else {
      existing.count += 1;
      if (typeof e.timestamp === "bigint" && typeof existing.lastAt === "bigint" && e.timestamp > existing.lastAt) existing.lastAt = e.timestamp;
    }
  }
  return map;
}

// ── Main component ───────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("users");

  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const { data: stats, isLoading: statsLoading } = useAdminStats();
  const { data: loginEvents = [], isLoading: loginsLoading } = useLoginEvents();
  const { data: paymentRecords = [], isLoading: paymentsLoading } =
    usePaymentRecords();
  const navigate = useNavigate();

  // Only treat as unauthorized once the query has settled AND explicitly returned null
  // (null = backend rejected the call = not admin). While loading, show the dashboard skeleton.
  const querySettled = !usersLoading;
  const isUnauthorized = querySettled && users === null;

  useEffect(() => {
    if (isUnauthorized) void navigate({ to: "/" });
  }, [isUnauthorized, navigate]);

  if (isUnauthorized) return null;

  // Stats
  const totalUsers = stats ? Number(stats.totalUsers) : (users?.length ?? 0);
  const subscribedU = stats ? Number(stats.subscribedUsers) : 0;
  const activeSubs = stats ? Number(stats.activeSubscriptions) : 0;
  const totalRevenue = stats ? Number(stats.totalRevenue) : 0;
  const totalPayments = stats
    ? Number(stats.totalPayments)
    : paymentRecords.length;
  const recentSignups = stats ? Number(stats.recentSignups) : 0;
  const conversionRate =
    totalUsers > 0 ? Math.round((subscribedU / totalUsers) * 100) : 0;

  // Login aggregates
  const loginAggregates = aggregateLoginCounts(loginEvents);
  const uniqueLoginUsers = loginAggregates.size;

  // Total revenue from payment records as fallback
  const displayRevenue =
    totalRevenue > 0
      ? formatRupees(totalRevenue)
      : paymentRecords.length > 0
        ? formatRupees(paymentRecords.reduce((acc, r) => acc + Number(r.amount), 0))
        : "₹0";

  return (
    <div
      className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6"
      data-ocid="admin.page"
    >
      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden"
      >
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 pointer-events-none"
          style={{ background: "oklch(var(--primary))" }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              Owner Dashboard
            </span>
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
            IT Fresher Hub — Admin
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitor user logins, payments, subscriptions, and platform health in
            real-time.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-ocid="admin.back-to-app.link"
          >
            ← Back to App
          </Link>
        </div>
      </motion.div>

      {/* ── Stats grid ── */}
      {statsLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((k) => (
            <Skeleton key={k} className="h-20 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatCard
            icon={Users}
            label="Total Users"
            value={String(totalUsers)}
            sub="All signups"
            color="bg-primary/15 text-primary"
            delay={0.05}
          />
          <StatCard
            icon={CreditCard}
            label="Subscribed Users"
            value={String(subscribedU)}
            sub={`${conversionRate}% conversion`}
            color="bg-emerald-500/15 text-emerald-500"
            delay={0.1}
          />
          <StatCard
            icon={Activity}
            label="Active Subscriptions"
            value={String(activeSubs)}
            sub="Paid & valid"
            color="bg-secondary/20 text-secondary-foreground"
            delay={0.15}
          />
          <StatCard
            icon={TrendingUp}
            label="Conversion Rate"
            value={`${conversionRate}%`}
            sub="Free to paid"
            color="bg-accent/20 text-accent-foreground"
            delay={0.2}
          />
          <StatCard
            icon={IndianRupee}
            label="Total Revenue"
            value={displayRevenue}
            sub="All payments combined"
            color="bg-green-500/15 text-green-500"
            delay={0.25}
          />
          <StatCard
            icon={Receipt}
            label="Total Payments"
            value={String(totalPayments)}
            sub="Transactions processed"
            color="bg-blue-500/15 text-blue-500"
            delay={0.3}
          />
          <StatCard
            icon={LogIn}
            label="Login Events"
            value={String(loginEvents.length)}
            sub={`${uniqueLoginUsers} unique users`}
            color="bg-violet-500/15 text-violet-500"
            delay={0.35}
          />
          <StatCard
            icon={Wallet}
            label="New Users (7 days)"
            value={String(recentSignups)}
            sub="Recent signups"
            color="bg-orange-500/15 text-orange-500"
            delay={0.4}
          />
        </div>
      )}

      {/* ── Tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        <div
          className="flex gap-1 bg-muted border border-border rounded-xl p-1 w-fit mb-6 shadow-sm"
          data-ocid="admin.tabs"
        >
          {(
            [
              { id: "users", label: "All Users", icon: Users },
              { id: "logins", label: "Login Events", icon: LogIn },
              { id: "payments", label: "Payment Records", icon: Receipt },
              { id: "coupons", label: "Coupons", icon: CreditCard },
            ] as { id: Tab; label: string; icon: React.ElementType }[]
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              data-ocid={`admin.${id}.tab`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* ── Users tab ── */}
        {activeTab === "users" && (
          <Card className="border-border" data-ocid="admin.users.table">
            <CardContent className="p-0">
              {usersLoading ? (
                <TableSkeleton rows={5} cols={8} />
              ) : !users || users.length === 0 ? (
                <div
                  className="p-10 text-center space-y-2"
                  data-ocid="admin.users.empty_state"
                >
                  <Users className="w-8 h-8 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground text-sm">
                    No users found yet.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        {[
                          "#",
                          "User ID",
                          "Status",
                          "Plan",
                          "Logins",
                          "Progress",
                          "Courses",
                          "Joined",
                          "Last Login",
                        ].map((h, i) => (
                          <th
                            key={h}
                            className={`p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider ${
                              i >= 5 ? "text-right" : "text-left"
                            }`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(users ?? []).map((user: AdminUserView, i: number) => (
                        <motion.tr
                          key={user.userIdText}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.03 }}
                          className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                          data-ocid={`admin.users.item.${i + 1}`}
                        >
                          <td className="p-4 text-sm text-muted-foreground">
                            {i + 1}
                          </td>
                          <td className="p-4">
                            <code className="text-xs text-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                              {user.userIdText.slice(0, 14)}…
                            </code>
                          </td>
                          <td className="p-4">
                            {statusBadge(user.subscriptionStatus)}
                          </td>
                          <td className="p-4">
                            {planBadge(user.subscriptionPlan)}
                          </td>
                          <td className="p-4">
                            <span className="text-sm font-semibold text-foreground flex items-center gap-1">
                              <LogIn className="w-3 h-3 text-muted-foreground" />
                              {Number(user.loginCount)}
                            </span>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-primary"
                                  style={{
                                    width: `${Math.min(100, Math.round(user.totalProgress))}%`,
                                  }}
                                />
                              </div>
                              <span className="text-xs font-semibold text-foreground w-10 text-right">
                                {Math.round(user.totalProgress)}%
                              </span>
                            </div>
                          </td>
                          <td className="p-4 text-right">
                            <span className="text-sm font-semibold text-foreground flex items-center justify-end gap-1">
                              <BookOpen className="w-3 h-3 text-muted-foreground" />
                              {Number(user.coursesCompleted)}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {formatDate(user.signupAt)}
                            </span>
                          </td>
                          <td className="p-4">
                            <span className="text-xs text-muted-foreground">
                              {user.lastLoginAt && Number(user.lastLoginAt) > 0
                                ? formatRelative(user.lastLoginAt)
                                : formatRelative(user.lastActiveAt)}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ── Login Events tab ── */}
        {activeTab === "logins" && (
          <Card className="border-border" data-ocid="admin.logins.table">
            <CardContent className="p-0">
              {loginsLoading ? (
                <TableSkeleton rows={5} cols={4} />
              ) : loginEvents.length === 0 ? (
                <div
                  className="p-10 text-center space-y-2"
                  data-ocid="admin.logins.empty_state"
                >
                  <LogIn className="w-8 h-8 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground text-sm">
                    No login events recorded yet.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="px-4 py-3 border-b border-border bg-muted/30">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {loginEvents.length}
                      </span>{" "}
                      total login events from{" "}
                      <span className="font-semibold text-foreground">
                        {uniqueLoginUsers}
                      </span>{" "}
                      unique users — sorted most recent first
                    </p>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        {["#", "User ID", "Login Time", "Logins (total)"].map(
                          (h) => (
                            <th
                              key={h}
                              className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                            >
                              {h}
                            </th>
                          ),
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {loginEvents.map((event: LoginEvent, i: number) => {
                        const agg = loginAggregates.get(event.userIdText ?? event.userId);
                        return (
                          <motion.tr
                            key={`${event.userIdText}-${event.timestamp}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: Math.min(i * 0.02, 0.5) }}
                            className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                            data-ocid={`admin.logins.item.${i + 1}`}
                          >
                            <td className="p-4 text-sm text-muted-foreground">
                              {i + 1}
                            </td>
                            <td className="p-4">
                              <code className="text-xs text-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                                {(event.userIdText ?? event.userId).slice(0, 14)}…
                              </code>
                            </td>
                            <td className="p-4">
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatDateTime(event.timestamp)}
                              </span>
                            </td>
                            <td className="p-4">
                              <Badge className="bg-violet-500/15 text-violet-400 border-violet-500/30 text-xs">
                                {agg?.count ?? 1} logins
                              </Badge>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* ── Payment Records tab ── */}
        {activeTab === "payments" && (
          <Card className="border-border" data-ocid="admin.payments.table">
            <CardContent className="p-0">
              {paymentsLoading ? (
                <TableSkeleton rows={5} cols={6} />
              ) : paymentRecords.length === 0 ? (
                <div
                  className="p-10 text-center space-y-2"
                  data-ocid="admin.payments.empty_state"
                >
                  <Receipt className="w-8 h-8 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground text-sm">
                    No payment records yet.
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  {/* Revenue summary */}
                  <div className="px-4 py-3 border-b border-border bg-muted/30 flex flex-wrap gap-6">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Total Revenue
                      </p>
                      <p className="text-lg font-bold text-green-400">
                        {displayRevenue}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Transactions
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {paymentRecords.length}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Avg. Order Value
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        {paymentRecords.length > 0
                          ? formatRupees(
                              paymentRecords.reduce(
                                (a, r) => a + Number(r.amount),
                                0,
                              ) / paymentRecords.length,
                            )
                          : "₹0"}
                      </p>
                    </div>
                  </div>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        {[
                          "#",
                          "User ID",
                          "Plan",
                          "Amount",
                          "Payment ID",
                          "Order ID",
                          "Date",
                          "Status",
                        ].map((h) => (
                          <th
                            key={h}
                            className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {paymentRecords.map(
                        (record: PaymentRecord, i: number) => (
                          <motion.tr
                            key={record.paymentId}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: Math.min(i * 0.02, 0.5) }}
                            className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                            data-ocid={`admin.payments.item.${i + 1}`}
                          >
                            <td className="p-4 text-sm text-muted-foreground">
                              {i + 1}
                            </td>
                            <td className="p-4">
                              <code className="text-xs text-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                                {(record.userIdText ?? record.userId).slice(0, 14)}…
                              </code>
                            </td>
                            <td className="p-4">
                              {planBadge(record.plan)}
                            </td>
                            <td className="p-4">
                              <span className="text-sm font-bold text-green-400">
                                {formatRupees(record.amount)}
                              </span>
                            </td>
                            <td className="p-4">
                              <code className="text-[10px] text-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                                {record.paymentId.slice(0, 18)}…
                              </code>
                            </td>
                            <td className="p-4">
                              <code className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                                {record.orderId.slice(0, 16)}…
                              </code>
                            </td>
                            <td className="p-4">
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {formatDateTime(record.timestamp)}
                              </span>
                            </td>
                            <td className="p-4">
                              <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs capitalize">
                                {record.status}
                              </Badge>
                            </td>
                          </motion.tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        )}
        {/* ── Coupons tab ── */}
        {activeTab === "coupons" && <AdminCouponsTab />}
      </motion.div>
    </div>
  );
}
