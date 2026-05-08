import type { AdminUserView, SubscriptionStats } from "@/backend.d";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAdminStats, useAdminUsers } from "@/hooks/useAdminData";
import { Link, useNavigate } from "@tanstack/react-router";
import {
  Activity,
  BarChart3,
  BookOpen,
  Clock,
  CreditCard,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";

function formatDate(ts: bigint): string {
  return new Date(Number(ts) / 1_000_000).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatRelative(ts: bigint): string {
  const ms = Date.now() - Number(ts) / 1_000_000;
  const mins = Math.floor(ms / 60_000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}

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

export default function AdminDashboard() {
  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const { data: stats, isLoading: statsLoading } = useAdminStats();
  const navigate = useNavigate();

  const isUnauthorized = !usersLoading && !statsLoading && users === null;

  // Redirect non-owners immediately to home
  useEffect(() => {
    if (isUnauthorized) {
      navigate({ to: "/" });
    }
  }, [isUnauthorized, navigate]);

  // Show nothing while redirect is pending
  if (isUnauthorized) return null;

  const totalUsers = stats ? Number(stats.totalUsers) : (users?.length ?? 0);
  const subscribedUsers = stats ? Number(stats.subscribedUsers) : 0;
  const activeSubscriptions = stats ? Number(stats.activeSubscriptions) : 0;
  const conversionRate =
    totalUsers > 0 ? Math.round((subscribedUsers / totalUsers) * 100) : 0;

  return (
    <div
      className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8"
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
            Monitor user activity, subscriptions, and platform health in
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

      {/* ── Stats ── */}
      {statsLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {["s1", "s2", "s3", "s4"].map((k) => (
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
            value={String(subscribedUsers)}
            sub={`${conversionRate}% conversion`}
            color="bg-emerald-500/15 text-emerald-500"
            delay={0.1}
          />
          <StatCard
            icon={Activity}
            label="Active Subscriptions"
            value={String(activeSubscriptions)}
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
        </div>
      )}

      {/* ── Users Table ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" /> All Users
            {users && (
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                ({users.length})
              </span>
            )}
          </h2>
        </div>

        <Card className="border-border" data-ocid="admin.users.table">
          <CardContent className="p-0">
            {usersLoading ? (
              <div className="p-6 space-y-3">
                {["r1", "r2", "r3", "r4"].map((k) => (
                  <Skeleton key={k} className="h-12 rounded-lg" />
                ))}
              </div>
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
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        #
                      </th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        User ID
                      </th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Status
                      </th>
                      <th className="text-right p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="text-right p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Courses
                      </th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Joined
                      </th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Last Active
                      </th>
                      <th className="text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Payment ID
                      </th>
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
                            {user.userIdText.slice(0, 16)}…
                          </code>
                        </td>
                        <td className="p-4">
                          {statusBadge(user.subscriptionStatus)}
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
                            {formatRelative(user.lastActiveAt)}
                          </span>
                        </td>
                        <td className="p-4">
                          {user.subscriptionStatus === "subscribed" ||
                          user.subscriptionStatus === "active" ? (
                            <code className="text-[10px] text-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
                              rzp_***
                            </code>
                          ) : (
                            <span className="text-xs text-muted-foreground">
                              —
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
