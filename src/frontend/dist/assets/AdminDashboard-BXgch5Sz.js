import { g as createLucideIcon, v as useActor, p as useQuery, w as createActor, r as reactExports, q as useNavigate, j as jsxRuntimeExports, m as motion, L as Link, e as Skeleton, _ as LogIn, B as BookOpen, f as Badge } from "./index-DrrDo776.js";
import { C as Card, a as CardContent } from "./card-_4TY3EGm.js";
import { U as Users } from "./users-B1Czm4KV.js";
import { T as TrendingUp } from "./trending-up-rDq8GG56.js";
import { C as Clock } from "./clock-DHhhir4a.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    { d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z", key: "q3az6g" }
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }]
];
const Receipt = createLucideIcon("receipt", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6"
    }
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }]
];
const Wallet = createLucideIcon("wallet", __iconNode);
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
function useLoginEvents() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["admin", "loginEvents"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        const events = await actor.getLoginEvents();
        return [...events].sort(
          (a, b) => Number(b.timestamp) - Number(a.timestamp)
        );
      } catch {
        return [];
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: 1e3 * 30,
    retry: false
  });
}
function usePaymentRecords() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["admin", "paymentRecords"],
    queryFn: async () => {
      if (!actor) return [];
      try {
        const records = await actor.getPaymentRecords();
        return [...records].sort(
          (a, b) => Number(b.timestamp) - Number(a.timestamp)
        );
      } catch {
        return [];
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
function formatDateTime(ts) {
  const d = new Date(Number(ts) / 1e6);
  return `${d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  })} ${d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}`;
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
function formatRupees(paise) {
  return `₹${(Number(paise) / 100).toLocaleString("en-IN")}`;
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
function planBadge(plan) {
  if (plan === "premium") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-500/15 text-purple-400 border-purple-500/30 text-xs", children: "Base ₹199" });
  }
  if (plan === "capstone" || plan === "base+capstone") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-500/15 text-amber-400 border-amber-500/30 text-xs", children: "Base + Capstone" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-muted text-muted-foreground border-border text-xs", children: "None" });
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
function TableSkeleton({
  rows = 4,
  cols = 6
}) {
  const rowKeys = Array.from({ length: rows }, (_, i) => `skel-r${i}`);
  const colKeys = Array.from({ length: cols }, (_, j) => `skel-c${j}`);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 space-y-3", children: rowKeys.map((rk) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: colKeys.map((ck) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 flex-1 rounded-lg" }, `${rk}-${ck}`)) }, rk)) });
}
function aggregateLoginCounts(events) {
  const map = /* @__PURE__ */ new Map();
  for (const e of events) {
    const key = e.userIdText;
    const existing = map.get(key);
    if (!existing) {
      map.set(key, { count: 1, lastAt: e.timestamp });
    } else {
      existing.count += 1;
      if (e.timestamp > existing.lastAt) existing.lastAt = e.timestamp;
    }
  }
  return map;
}
function AdminDashboard() {
  const [activeTab, setActiveTab] = reactExports.useState("users");
  const { data: users, isLoading: usersLoading } = useAdminUsers();
  const { data: stats, isLoading: statsLoading } = useAdminStats();
  const { data: loginEvents = [], isLoading: loginsLoading } = useLoginEvents();
  const { data: paymentRecords = [], isLoading: paymentsLoading } = usePaymentRecords();
  const navigate = useNavigate();
  const querySettled = !usersLoading;
  const isUnauthorized = querySettled && users === null;
  reactExports.useEffect(() => {
    if (isUnauthorized) void navigate({ to: "/" });
  }, [isUnauthorized, navigate]);
  if (isUnauthorized) return null;
  const totalUsers = stats ? Number(stats.totalUsers) : (users == null ? void 0 : users.length) ?? 0;
  const subscribedU = stats ? Number(stats.subscribedUsers) : 0;
  const activeSubs = stats ? Number(stats.activeSubscriptions) : 0;
  const totalRevenue = stats ? stats.totalRevenue : 0n;
  const totalPayments = stats ? Number(stats.totalPayments) : paymentRecords.length;
  const recentSignups = stats ? Number(stats.recentSignups) : 0;
  const conversionRate = totalUsers > 0 ? Math.round(subscribedU / totalUsers * 100) : 0;
  const loginAggregates = aggregateLoginCounts(loginEvents);
  const uniqueLoginUsers = loginAggregates.size;
  const displayRevenue = totalRevenue > 0n ? formatRupees(totalRevenue) : paymentRecords.length > 0 ? formatRupees(paymentRecords.reduce((acc, r) => acc + r.amount, 0n)) : "₹0";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6",
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Monitor user logins, payments, subscriptions, and platform health in real-time." }),
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
        statsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [0, 1, 2, 3, 4, 5, 6, 7].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
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
              value: String(subscribedU),
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
              value: String(activeSubs),
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
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: IndianRupee,
              label: "Total Revenue",
              value: displayRevenue,
              sub: "All payments combined",
              color: "bg-green-500/15 text-green-500",
              delay: 0.25
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Receipt,
              label: "Total Payments",
              value: String(totalPayments),
              sub: "Transactions processed",
              color: "bg-blue-500/15 text-blue-500",
              delay: 0.3
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: LogIn,
              label: "Login Events",
              value: String(loginEvents.length),
              sub: `${uniqueLoginUsers} unique users`,
              color: "bg-violet-500/15 text-violet-500",
              delay: 0.35
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            StatCard,
            {
              icon: Wallet,
              label: "New Users (7 days)",
              value: String(recentSignups),
              sub: "Recent signups",
              color: "bg-orange-500/15 text-orange-500",
              delay: 0.4
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.45, duration: 0.4 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex gap-1 bg-muted border border-border rounded-xl p-1 w-fit mb-6 shadow-sm",
                  "data-ocid": "admin.tabs",
                  children: [
                    { id: "users", label: "All Users", icon: Users },
                    { id: "logins", label: "Login Events", icon: LogIn },
                    { id: "payments", label: "Payment Records", icon: Receipt }
                  ].map(({ id, label, icon: Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setActiveTab(id),
                      "data-ocid": `admin.${id}.tab`,
                      className: `flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === id ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground hover:bg-card"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }),
                        label
                      ]
                    },
                    id
                  ))
                }
              ),
              activeTab === "users" && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", "data-ocid": "admin.users.table", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: usersLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableSkeleton, { rows: 5, cols: 8 }) : !users || users.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: [
                  "#",
                  "User ID",
                  "Status",
                  "Plan",
                  "Logins",
                  "Progress",
                  "Courses",
                  "Joined",
                  "Last Login"
                ].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "th",
                  {
                    className: `p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider ${i >= 5 ? "text-right" : "text-left"}`,
                    children: h
                  },
                  h
                )) }) }),
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
                        user.userIdText.slice(0, 14),
                        "…"
                      ] }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: statusBadge(user.subscriptionStatus) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: planBadge(user.subscriptionPlan) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold text-foreground flex items-center gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-3 h-3 text-muted-foreground" }),
                        Number(user.loginCount)
                      ] }) }),
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
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: user.lastLoginAt && Number(user.lastLoginAt) > 0 ? formatRelative(user.lastLoginAt) : formatRelative(user.lastActiveAt) }) })
                    ]
                  },
                  user.userIdText
                )) })
              ] }) }) }) }),
              activeTab === "logins" && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", "data-ocid": "admin.logins.table", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: loginsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableSkeleton, { rows: 5, cols: 4 }) : loginEvents.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-10 text-center space-y-2",
                  "data-ocid": "admin.logins.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "w-8 h-8 text-muted-foreground mx-auto" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No login events recorded yet." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-b border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: loginEvents.length }),
                  " ",
                  "total login events from",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: uniqueLoginUsers }),
                  " ",
                  "unique users — sorted most recent first"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: ["#", "User ID", "Login Time", "Logins (total)"].map(
                    (h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                        children: h
                      },
                      h
                    )
                  ) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: loginEvents.map((event, i) => {
                    const agg = loginAggregates.get(event.userIdText);
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.tr,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: Math.min(i * 0.02, 0.5) },
                        className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
                        "data-ocid": `admin.logins.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-sm text-muted-foreground", children: i + 1 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-xs text-foreground font-mono bg-muted px-1.5 py-0.5 rounded", children: [
                            event.userIdText.slice(0, 14),
                            "…"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                            formatDateTime(event.timestamp)
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-violet-500/15 text-violet-400 border-violet-500/30 text-xs", children: [
                            (agg == null ? void 0 : agg.count) ?? 1,
                            " logins"
                          ] }) })
                        ]
                      },
                      `${event.userIdText}-${event.timestamp}`
                    );
                  }) })
                ] })
              ] }) }) }),
              activeTab === "payments" && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", "data-ocid": "admin.payments.table", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: paymentsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableSkeleton, { rows: 5, cols: 6 }) : paymentRecords.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-10 text-center space-y-2",
                  "data-ocid": "admin.payments.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Receipt, { className: "w-8 h-8 text-muted-foreground mx-auto" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "No payment records yet." })
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 border-b border-border bg-muted/30 flex flex-wrap gap-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total Revenue" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-green-400", children: displayRevenue })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Transactions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: paymentRecords.length })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avg. Order Value" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-bold text-foreground", children: paymentRecords.length > 0 ? formatRupees(
                      paymentRecords.reduce(
                        (a, r) => a + r.amount,
                        0n
                      ) / BigInt(paymentRecords.length)
                    ) : "₹0" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border", children: [
                    "#",
                    "User ID",
                    "Plan",
                    "Amount",
                    "Payment ID",
                    "Order ID",
                    "Date",
                    "Status"
                  ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "th",
                    {
                      className: "text-left p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
                      children: h
                    },
                    h
                  )) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: paymentRecords.map(
                    (record, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.tr,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: Math.min(i * 0.02, 0.5) },
                        className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
                        "data-ocid": `admin.payments.item.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4 text-sm text-muted-foreground", children: i + 1 }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-xs text-foreground font-mono bg-muted px-1.5 py-0.5 rounded", children: [
                            record.userIdText.slice(0, 14),
                            "…"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: record.plan === "capstone" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-500/15 text-amber-400 border-amber-500/30 text-xs", children: "Capstone ₹499" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-purple-500/15 text-purple-400 border-purple-500/30 text-xs", children: "Base ₹199" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-green-400", children: formatRupees(record.amount) }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-[10px] text-foreground font-mono bg-muted px-1.5 py-0.5 rounded", children: [
                            record.paymentId.slice(0, 18),
                            "…"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded", children: [
                            record.orderId.slice(0, 16),
                            "…"
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                            formatDateTime(record.timestamp)
                          ] }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 text-xs capitalize", children: record.status }) })
                        ]
                      },
                      record.paymentId
                    )
                  ) })
                ] })
              ] }) }) })
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
