import { u as useSubscription, a as useInternetIdentity, r as reactExports, j as jsxRuntimeExports, P as PaywallModal, m as motion, S as Sparkles, B as BookOpen, A as Award, G as GraduationCap, b as SubscriptionCountdown, L as Link, D as Database, c as Globe, d as Button, e as Skeleton, f as Badge, C as Crown } from "./index-DrrDo776.js";
import { u as useCertificates, C as CertificateCard, d as downloadCertificateAsPdf } from "./pdfDownload-6AlDs2fI.js";
import { C as Card, a as CardContent } from "./card-_4TY3EGm.js";
import { u as useGlossary } from "./useGlossary-RzZR3WfK.js";
import { u as useModules } from "./useModules-BqKd_e15.js";
import { u as useProgress } from "./useProgress-Bz1RUpoS.js";
import { f as formatMinutes, a as formatCategory, g as getCategoryColor } from "./formatters-Ci1eEvah.js";
import { C as Clock } from "./clock-DHhhir4a.js";
import { T as Trophy } from "./trophy-BqwxHwfZ.js";
import { B as Briefcase } from "./briefcase-CR_i2IjR.js";
import { T as Target } from "./target-Dk49P8Ee.js";
import { A as ArrowRight } from "./arrow-right-D4OuVnn7.js";
import { S as Star } from "./star-BFXzwug2.js";
import { T as TrendingUp } from "./trending-up-rDq8GG56.js";
import { U as Users } from "./users-B1Czm4KV.js";
import "./useMutation-hdUPihXR.js";
function ProgressBar({
  value,
  color = "bg-primary",
  height = "h-2"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `${height} bg-muted rounded-full overflow-hidden`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `h-full rounded-full ${color}`,
      initial: { width: 0 },
      animate: { width: `${value}%` },
      transition: { duration: 0.9, ease: "easeOut" }
    }
  ) });
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
      className: "flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-smooth hover:border-primary/20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-lg shrink-0 ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground leading-tight truncate", children: value }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: sub })
        ] })
      ]
    }
  );
}
const QUICK_LINKS = [
  {
    to: "/corporate-world",
    icon: Briefcase,
    label: "Corporate World",
    description: "Roles, agile, jargon & collaboration",
    accentClass: "bg-[oklch(var(--corporate-accent)/0.12)] text-corporate border-[oklch(var(--corporate-accent)/0.3)]",
    ocid: "quick-link-corporate"
  },
  {
    to: "/modules",
    icon: BookOpen,
    label: "Skills Hub",
    description: "Python, SQL, DevOps, Cloud & more",
    accentClass: "bg-primary/10 text-primary border-primary/25",
    ocid: "quick-link-skills"
  },
  {
    to: "/glossary",
    icon: Database,
    label: "Glossary",
    description: "50+ IT terms explained clearly",
    accentClass: "bg-[oklch(var(--skill-networking)/0.12)] text-[oklch(var(--skill-networking))] border-[oklch(var(--skill-networking)/0.3)]",
    ocid: "quick-link-glossary"
  },
  {
    to: "/quiz",
    icon: Target,
    label: "Readiness Quiz",
    description: "Test your corporate readiness",
    accentClass: "bg-secondary/15 text-secondary-foreground border-secondary/30",
    ocid: "quick-link-quiz"
  },
  {
    to: "/mnc-platforms",
    icon: Globe,
    label: "MNC Platforms",
    description: "Salesforce, Snowflake & more",
    accentClass: "bg-[oklch(var(--platform-accent)/0.1)] text-[oklch(var(--platform-accent))] border-[oklch(var(--platform-accent)/0.3)]",
    ocid: "quick-link-mnc"
  },
  {
    to: "/capstone-project",
    icon: Trophy,
    label: "Capstone Project",
    description: "Build your IT portfolio",
    accentClass: "bg-[oklch(var(--capstone-accent)/0.1)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.3)]",
    ocid: "quick-link-capstone"
  }
];
function Dashboard() {
  const { data: modules, isLoading: modulesLoading } = useModules();
  const { data: progress } = useProgress();
  const { data: glossaryTerms } = useGlossary();
  const { isSubscribed, daysRemaining } = useSubscription();
  const { data: certificates } = useCertificates();
  const { loginStatus } = useInternetIdentity();
  const [activeTab, setActiveTab] = reactExports.useState(
    "overview"
  );
  const [paywallOpen, setPaywallOpen] = reactExports.useState(false);
  const completedCount = (progress == null ? void 0 : progress.completedModules.length) ?? 0;
  const totalModules = (modules == null ? void 0 : modules.length) ?? 0;
  const overallProgress = totalModules > 0 ? Math.round(completedCount / totalModules * 100) : 0;
  const hour = (/* @__PURE__ */ new Date()).getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  const completedSet = new Set((progress == null ? void 0 : progress.completedModules) ?? []);
  const lastCompletedId = progress == null ? void 0 : progress.completedModules[progress.completedModules.length - 1];
  const inProgressModules = (() => {
    if (!modules) return [];
    const withPartial = modules.filter(
      (m) => m.progress > 0 && m.progress < 100 && !completedSet.has(m.id)
    );
    if (withPartial.length > 0) return withPartial.slice(0, 3);
    if (lastCompletedId) {
      const lastIdx = modules.findIndex((m) => m.id === lastCompletedId);
      const next = modules.slice(lastIdx + 1).find((m) => !completedSet.has(m.id));
      return next ? [next] : [];
    }
    return [];
  })();
  const featuredModules = (modules == null ? void 0 : modules.filter((m) => !completedSet.has(m.id) && !m.isComingSoon).slice(0, 3)) ?? [];
  const recentGlossary = (glossaryTerms == null ? void 0 : glossaryTerms.slice(0, 3)) ?? [];
  const corporateModules = (modules == null ? void 0 : modules.filter((m) => m.category === "corporateworld")) ?? [];
  const corporateCompleted = corporateModules.filter(
    (m) => progress == null ? void 0 : progress.completedModules.includes(m.id)
  ).length;
  const corporateProgress = corporateModules.length > 0 ? Math.round(corporateCompleted / corporateModules.length * 100) : 0;
  const skillModules = (modules == null ? void 0 : modules.filter(
    (m) => !["corporateworld", "mncplatforms", "etltools", "capstone"].includes(
      m.category
    )
  )) ?? [];
  const skillCompleted = skillModules.filter(
    (m) => progress == null ? void 0 : progress.completedModules.includes(m.id)
  ).length;
  const skillProgress = skillModules.length > 0 ? Math.round(skillCompleted / skillModules.length * 100) : 0;
  const certCount = (certificates == null ? void 0 : certificates.length) ?? 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PaywallModal, { open: paywallOpen, onOpenChange: setPaywallOpen }),
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
              className: "absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10 pointer-events-none",
              style: { background: "oklch(var(--primary))" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-secondary-foreground" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  greeting,
                  ", Learner! 🚀"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground leading-tight", children: "Ready to Level Up Today? 🚀" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm max-w-xl", children: [
                "You're on a",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                  (progress == null ? void 0 : progress.streakDays) ?? 0,
                  "-day streak"
                ] }),
                ". Keep the momentum — complete a module today to stay corporate-ready."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center bg-muted/40 rounded-xl px-6 py-4 min-w-[140px] border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Progress" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-3xl text-primary", children: [
                overallProgress,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full mt-2 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ProgressBar,
                  {
                    value: overallProgress,
                    color: "bg-primary",
                    height: "h-1.5"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground text-center", children: [
                  completedCount,
                  " / ",
                  totalModules,
                  " courses done"
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: BookOpen,
          label: "Courses Available",
          value: String(
            totalModules > 0 ? totalModules : modules === void 0 ? "…" : 0
          ),
          sub: "Across all tracks",
          color: "bg-primary/15 text-primary",
          delay: 0.05
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Award,
          label: "Completed",
          value: `${completedCount} / ${totalModules}`,
          sub: `${overallProgress}% done`,
          color: "bg-secondary/20 text-secondary-foreground",
          delay: 0.1
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: Clock,
          label: "Learning Hours",
          value: `${(progress == null ? void 0 : progress.totalLearningHours) ?? 0}h`,
          sub: "Hands-on practice",
          color: "bg-accent/20 text-accent-foreground",
          delay: 0.15
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        StatCard,
        {
          icon: GraduationCap,
          label: "Certificates",
          value: String(certCount),
          sub: certCount === 1 ? "1 course completed" : `${certCount} courses completed`,
          color: "bg-[oklch(0.65_0.18_85/0.15)] text-[oklch(0.65_0.18_85)]",
          delay: 0.2
        }
      )
    ] }),
    isSubscribed && daysRemaining !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.97 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: 0.25 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(SubscriptionCountdown, {})
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": "dashboard.overview.tab",
          onClick: () => setActiveTab("overview"),
          className: `px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors relative ${activeTab === "overview" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`,
          children: "Overview"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "dashboard.certificates.tab",
          onClick: () => setActiveTab("certificates"),
          className: `flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors ${activeTab === "certificates" ? "text-primary border-b-2 border-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-muted/40"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-3.5 h-3.5" }),
            "Certificates",
            certCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold", children: certCount })
          ]
        }
      )
    ] }),
    activeTab === "certificates" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.35 },
        className: "space-y-5",
        "data-ocid": "dashboard.certificates.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-[oklch(0.65_0.18_85)]" }),
              "My Certificates"
            ] }),
            certCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certificates", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "dashboard.view-all-certificates.link",
                className: "text-xs text-primary hover:underline",
                children: "View all →"
              }
            ) })
          ] }),
          certCount === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.97 },
              animate: { opacity: 1, scale: 1 },
              className: "border border-dashed border-border rounded-2xl p-10 text-center space-y-3",
              "data-ocid": "dashboard.certificates.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-10 h-10 text-muted-foreground mx-auto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: "No Certificates Yet" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-sm mx-auto", children: "Complete a course to earn your first certificate of completion." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "dashboard.certificates.browse-button",
                    className: "inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors",
                    children: "Browse Courses"
                  }
                ) })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: certificates == null ? void 0 : certificates.map((cert, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: i * 0.1, duration: 0.4 },
              "data-ocid": `dashboard.certificates.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CertificateCard,
                {
                  certificate: cert,
                  userName: "Learner",
                  onDownload: () => downloadCertificateAsPdf(cert, "Learner")
                }
              )
            },
            cert.id
          )) })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.3, duration: 0.4 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Quick Access" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Jump right in" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3", children: QUICK_LINKS.map((link, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 + i * 0.06, duration: 0.35 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: link.to, "data-ocid": link.ocid, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: `border rounded-xl p-3.5 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-md transition-smooth hover:-translate-y-0.5 ${link.accentClass}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold leading-tight", children: link.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] opacity-70 leading-snug mt-0.5 line-clamp-2", children: link.description })
                      ] })
                    ]
                  }
                ) })
              },
              link.to
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "xl:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Continue Learning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  "data-ocid": "cta-view-all-modules",
                  className: "gap-1 text-primary",
                  children: [
                    "All Courses ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ]
                }
              ) })
            ] }),
            modulesLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ["s1", "s2", "s3"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 rounded-xl" }, k)) }) : inProgressModules.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "border border-dashed border-border rounded-xl p-8 text-center space-y-2",
                "data-ocid": "empty-continue-learning",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8 text-muted-foreground mx-auto" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "No courses started yet" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Pick a course below and start your IT journey!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      className: "btn-primary mt-2",
                      "data-ocid": "cta-browse-courses",
                      children: "Browse Courses"
                    }
                  ) })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: inProgressModules.map((mod, i) => {
              var _a;
              const modProgress = completedSet.has(mod.id) ? 100 : mod.progress;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: -16 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: 0.1 + i * 0.08, duration: 0.4 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/modules/$id",
                      params: { id: mod.id },
                      "data-ocid": `continue-module-${mod.id}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-smooth hover:border-primary/30 cursor-pointer group", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl shrink-0", children: mod.icon }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 space-y-1.5", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate", children: mod.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-primary shrink-0", children: [
                              modProgress,
                              "%"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            ProgressBar,
                            {
                              value: modProgress,
                              color: modProgress >= 70 ? "bg-secondary" : "bg-primary",
                              height: "h-1.5"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                              formatMinutes(mod.estimatedMinutes)
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              ((_a = mod.topics) == null ? void 0 : _a.length) ?? 0,
                              " topics"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" })
                      ] })
                    }
                  )
                },
                mod.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-[oklch(var(--badge-gold))]" }),
                "Featured This Week"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  "data-ocid": "cta-view-courses",
                  className: "gap-1 text-primary",
                  children: [
                    "Explore All ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: featuredModules.map((mod, i) => {
              var _a;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: i * 0.1, duration: 0.4 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/modules/$id",
                      params: { id: mod.id },
                      "data-ocid": `featured-module-${mod.id}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full hover:shadow-md transition-smooth border-border hover:border-primary/30 cursor-pointer group relative overflow-hidden", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-primary opacity-60" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl", children: mod.icon }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Badge,
                              {
                                className: `text-xs border ${getCategoryColor(mod.category)}`,
                                children: formatCategory(mod.category)
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight text-sm", children: mod.title }),
                            !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/25", children: "1st lesson free" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: mod.description })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-muted-foreground", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                              formatMinutes(mod.estimatedMinutes)
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                              ((_a = mod.topics) == null ? void 0 : _a.length) ?? 0,
                              " topics"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all", children: [
                            "Start Learning",
                            " ",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3 h-3" })
                          ] })
                        ] })
                      ] })
                    }
                  )
                },
                mod.id
              );
            }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "Progress Overview" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Overall" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
                  overallProgress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: overallProgress, color: "bg-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-3 h-3" }),
                  " Corporate World"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-corporate", children: [
                  corporateProgress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ProgressBar,
                {
                  value: corporateProgress,
                  color: "bg-[oklch(var(--corporate-accent))]"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3" }),
                  " Skills Hub"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                  skillProgress,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: skillProgress, color: "bg-primary" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3" }),
                  " Lessons Completed"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground", children: [
                  completedCount,
                  " / ",
                  totalModules
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressBar, { value: overallProgress, color: "bg-primary" })
            ] }),
            ((progress == null ? void 0 : progress.quizScores) ?? []).length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 pt-1 border-t border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Recent Scores" }),
              progress == null ? void 0 : progress.quizScores.slice(0, 3).map((qs) => {
                const mod = modules == null ? void 0 : modules.find((m) => m.id === qs.moduleId);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center justify-between text-xs",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground truncate max-w-[130px]", children: (mod == null ? void 0 : mod.title) ?? qs.moduleId }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "badge-success text-[10px]", children: [
                        qs.score,
                        "%"
                      ] })
                    ]
                  },
                  qs.moduleId
                );
              })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-5 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-5 h-5 text-[oklch(var(--badge-gold))]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "Achievements" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: [
              {
                id: "streak",
                emoji: "🔥",
                label: `${(progress == null ? void 0 : progress.streakDays) ?? 0}d Streak`
              },
              {
                id: "done",
                emoji: "📚",
                label: `${completedCount} Done`
              },
              {
                id: "hours",
                emoji: "⏱️",
                label: `${(progress == null ? void 0 : progress.totalLearningHours) ?? 0}h Learned`
              },
              { id: "quiz", emoji: "🎯", label: "Quiz Ace" }
            ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col items-center gap-1 rounded-lg p-2 text-center border transition-smooth border-[oklch(var(--badge-gold)/0.3)] bg-[oklch(var(--badge-gold)/0.07)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: badge.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-muted-foreground leading-tight", children: badge.label })
                ]
              },
              badge.id
            )) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/10 border border-secondary/30 rounded-xl p-5 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-5 h-5 text-secondary-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "Corporate Readiness" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Take our readiness quiz and see how prepared you are for the IT workplace. 10 targeted questions." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "w-full btn-primary mt-1",
                "data-ocid": "cta-take-quiz",
                children: "Take Readiness Test"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/8 border border-primary/20 rounded-xl p-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-8 h-8 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "10,000+ Freshers Learning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Join the community and fast-track your IT career." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Glossary Spotlight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Master IT terms before your first day at work." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/glossary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              size: "sm",
              "data-ocid": "cta-view-glossary",
              className: "gap-1 text-primary",
              children: [
                "Full Glossary ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: recentGlossary.map((term, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -12 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "h-full border-border hover:border-primary/30 transition-smooth",
                "data-ocid": `glossary-card-${term.id}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-foreground", children: term.term }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Badge,
                      {
                        className: `text-xs border shrink-0 ${getCategoryColor(term.category)}`,
                        children: formatCategory(term.category)
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground line-clamp-3", children: term.definition }),
                  term.relatedTerms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 pt-1", children: term.relatedTerms.slice(0, 3).map((rt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground",
                      children: rt
                    },
                    rt
                  )) })
                ] })
              }
            )
          },
          term.id
        )) })
      ] })
    ] })
  ] });
}
export {
  Dashboard as default
};
