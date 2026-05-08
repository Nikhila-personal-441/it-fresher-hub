import { l as createLucideIcon, u as useActor, a as useQuery, c as createActor, v as useNavigate, r as reactExports, j as jsxRuntimeExports, m as motion, L as Link, h as Skeleton, B as BookOpen, C as Clock, i as Badge } from "./index-Cmp-4xpj.js";
import { C as Card, a as CardContent } from "./card-D0gvQiuv.js";
import { U as Users } from "./users-Di-yz7zx.js";
import { T as TrendingUp } from "./trending-up-wbtvTF0A.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
function useAdminUsers() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
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
    staleTime: 1e3 * 30,
    retry: false
  });
}
function useAdminStats() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
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
    staleTime: 1e3 * 30,
    retry: false
  });
}
function formatDate(ts) {
  return new Date(Number(ts) / 1e6).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}
function formatRelative(ts) {
  const ms = Date.now() - Number(ts) / 1e6;
  const mins = Math.floor(ms / 6e4);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  return `${days}d ago`;
}
function statusBadge(status) {
  switch (status) {
    case "active":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs", children: "Active" });
    case "subscribed":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-blue-500/15 text-blue-400 border-blue-500/30 text-xs", children: "Subscribed" });
    case "cancelled":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-red-500/15 text-red-400 border-red-500/30 text-xs", children: "Cancelled" });
    default:
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-muted text-muted-foreground border-border text-xs", children: "Inactive" });
  }
}
function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { delay, duration: 0.4 },
      className: "flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-smooth",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-lg shrink-0 ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-xl text-foreground leading-tight", children: value }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: sub })
        ] })
      ]
    }
  );
}
function AdminDashboard() {
  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const { data: stats, isLoading: statsLoading } = useAdminStats();
  const navigate = useNavigate();
  const isUnauthorized = !usersLoading && !statsLoading && users === null;
  reactExports.useEffect(() => {
    if (isUnauthorized) {
      navigate({ to: "/" });
    }
  }, [isUnauthorized, navigate]);
  if (isUnauthorized) return null;
  const totalUsers = stats ? Number(stats.totalUsers) : (users == null ? void 0 : users.length) ?? 0;
  const subscribedUsers = stats ? Number(stats.subscribedUsers) : 0;
  const activeSubscriptions = stats ? Number(stats.activeSubscriptions) : 0;
  const conversionRate = totalUsers > 0 ? Math.round(subscribedUsers / totalUsers * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8",
      "data-ocid": "admin.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: -16 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "bg-card border border-border rounded-2xl p-6 relative overflow-hidden",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-5 pointer-events-none",
                  style: { background: "oklch(var(--primary))" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "w-4 h-4 text-primary" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground", children: "Owner Dashboard" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: "IT Fresher Hub — Admin" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Monitor user activity, subscriptions, and platform health in real-time." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/",
                    className: "inline-flex items-center gap-1.5 mt-3 text-sm text-muted-foreground hover:text-foreground transition-colors",
                    "data-ocid": "admin.back-to-app.link",
                    children: "← Back to App"
                  }
                )
              ] })
            ]
          }
        ),
        statsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: ["s1", "s2", "s3", "s4"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Users,
              label: "Total Users",
              value: String(totalUsers),
              sub: "All signups",
              color: "bg-primary/15 text-primary",
              delay: 0.05
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: CreditCard,
              label: "Subscribed Users",
              value: String(subscribedUsers),
              sub: `${conversionRate}% conversion`,
              color: "bg-emerald-500/15 text-emerald-500",
              delay: 0.1
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Activity,
              label: "Active Subscriptions",
              value: String(activeSubscriptions),
              sub: "Paid & valid",
              color: "bg-secondary/20 text-secondary-foreground",
              delay: 0.15
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: TrendingUp,
              label: "Conversion Rate",
              value: `${conversionRate}%`,
              sub: "Free to paid",
              color: "bg-accent/20 text-accent-foreground",
              delay: 0.2
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
                " All Users",
                users && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm font-normal text-muted-foreground", children: [
                  "(",
                  users.length,
                  ")"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", "data-ocid": "admin.users.table", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: usersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 space-y-3", children: ["r1", "r2", "r3", "r4"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 rounded-lg" }, k)) }) : !users || users.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-10 text-center space-y-2",
                  "data-ocid": "admin.users.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-muted-foreground mx-auto" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No users found yet." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "#" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "User ID" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Status" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Progress" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Courses" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Joined" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Last Active" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "Payment ID" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: (users ?? []).map((user, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.tr,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: i * 0.03 },
                    className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
                    "data-ocid": `admin.users.item.${i + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-sm text-muted-foreground", children: i + 1 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-xs text-foreground font-mono bg-muted px-1.5 py-0.5 rounded", children: [
                        user.userIdText.slice(0, 16),
                        "…"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: statusBadge(user.subscriptionStatus) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "h-full rounded-full bg-primary",
                            style: {
                              width: `${Math.min(100, Math.round(user.totalProgress))}%`
                            }
                          }
                        ) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-semibold text-foreground w-10 text-right", children: [
                          Math.round(user.totalProgress),
                          "%"
                        ] })
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground flex items-center justify-end gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3 text-muted-foreground" }),
                        Number(user.coursesCompleted)
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                        formatDate(user.signupAt)
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatRelative(user.lastActiveAt) }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: user.subscriptionStatus === "subscribed" || user.subscriptionStatus === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-[10px] text-foreground font-mono bg-muted px-1.5 py-0.5 rounded", children: "rzp_***" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "—" }) })
                    ]
                  },
                  user.userIdText
                )) })
              ] }) }) }) })
            ]
          }
        )
      ]
    }
  );
}
export {
  AdminDashboard as default
};
