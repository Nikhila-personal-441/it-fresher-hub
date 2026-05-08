import { n as useSearch, r as reactExports, b as useSubscription, d as useInternetIdentity, j as jsxRuntimeExports, m as motion, q as Lock, g as Button, i as Badge, B as BookOpen, h as Skeleton, C as Clock, L as Link, x as Check } from "./index-Cmp-4xpj.js";
import { S as Search, I as Input } from "./input-CSn6Ssgr.js";
import { u as useModules } from "./useModules-DkUfiwxx.js";
import { g as getCategoryColor, f as formatMinutes } from "./formatters-Ci1eEvah.js";
import { S as Star } from "./star-leaXNa8G.js";
import { T as Trophy } from "./trophy-C4FON7Sw.js";
import "./useMutation-D-KepCmg.js";
const TABS = [
  {
    key: "all",
    label: "All Courses",
    icon: "🎯",
    categories: []
  },
  {
    key: "fundamentals",
    label: "Fundamentals",
    icon: "🖥️",
    categories: ["itfundamentals", "networking", "htmlcss"]
  },
  {
    key: "programming",
    label: "Programming",
    icon: "💻",
    categories: ["python", "java", "dsa", "shellscripting", "github"]
  },
  {
    key: "data",
    label: "Data & AI",
    icon: "🧠",
    categories: ["sql", "ai_ml", "machinelearning", "excel"]
  },
  {
    key: "infrastructure",
    label: "Infrastructure",
    icon: "⚙️",
    categories: ["devops", "cybersecurity"]
  },
  {
    key: "cloud",
    label: "Cloud",
    icon: "☁️",
    categories: ["cloudaws"]
  },
  {
    key: "security",
    label: "Security",
    icon: "🔒",
    categories: ["cybersecurity"]
  },
  {
    key: "career",
    label: "Career Skills",
    icon: "💼",
    categories: [
      "corporateskills",
      "presentation",
      "trending",
      "corporateworld"
    ]
  }
];
const FEATURED_IDS = /* @__PURE__ */ new Set(["3", "4", "12", "13", "8", "19"]);
const CheckIcon = Check;
const EXCLUDED_CATEGORIES = /* @__PURE__ */ new Set([
  "mncplatforms",
  "etltools",
  "capstone"
]);
function CourseCard({
  module,
  index,
  isSubscribed,
  userId
}) {
  const isFeatured = FEATURED_IDS.has(module.id);
  const categoryColor = getCategoryColor(module.category);
  const courseProgressKey = `courseProgress-${userId}-${module.id}`;
  const savedPct = (() => {
    try {
      if (!userId) return 0;
      const raw = localStorage.getItem(courseProgressKey);
      return raw ? Math.min(100, Math.max(0, Number(JSON.parse(raw)))) : 0;
    } catch {
      return 0;
    }
  })();
  const isCompleted = savedPct >= 100;
  const hasProgress = savedPct > 0;
  const btnState = isCompleted ? "completed" : hasProgress ? "continue" : "start";
  const btnConfig = {
    start: {
      label: "Start Learning",
      className: "w-full text-xs gap-1.5 bg-blue-600 hover:bg-blue-700 text-white border-0",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3.5 h-3.5" })
    },
    continue: {
      label: "Continue Learning",
      className: "w-full text-xs gap-1.5 bg-orange-500 hover:bg-orange-600 text-white border-0",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3.5 h-3.5" })
    },
    completed: {
      label: "Completed",
      className: "w-full text-xs gap-1.5 bg-green-600 hover:bg-green-700 text-white border-0",
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckIcon, { className: "w-3.5 h-3.5" })
    }
  };
  const btn = btnConfig[btnState];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3, delay: index * 0.04 },
      className: "group relative flex flex-col h-full",
      children: [
        isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -inset-px rounded-xl pointer-events-none z-0",
            style: {
              background: "linear-gradient(135deg, oklch(var(--primary)/0.4), oklch(var(--secondary)/0.3))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative z-10 flex flex-col h-full bg-card border rounded-xl overflow-hidden transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${isFeatured ? "border-primary/40 shadow-md" : "border-border shadow-sm"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-4 pt-3 pb-0 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: isFeatured && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[oklch(var(--badge-gold)/0.15)] text-[oklch(var(--badge-gold))] border border-[oklch(var(--badge-gold)/0.35)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-2.5 h-2.5 fill-current" }),
                  "Featured"
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1", children: isSubscribed ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-free text-[10px]", children: "✓ Unlocked" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-free text-[10px]", children: "1st Free" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-4 pt-3 gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl leading-none flex-shrink-0 mt-0.5", children: module.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground leading-snug line-clamp-2", children: module.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-0.5", children: module.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 items-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `inline-block px-2 py-0.5 rounded text-[10px] font-medium border ${categoryColor}`,
                      children: module.category.replace(/([A-Z])/g, " $1").replace(/([a-z])([A-Z])/g, "$1 $2").replace("_", " & ").replace(/\b\w/g, (c) => c.toUpperCase()).trim()
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `badge-difficulty-${module.difficulty} text-[10px]`,
                      children: module.difficulty
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
                  module.topics.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border",
                      children: t
                    },
                    t
                  )),
                  module.topics.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border", children: [
                    "+",
                    module.topics.length - 3,
                    " more"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    formatMinutes(module.estimatedMinutes)
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3" }),
                    module.topics.length,
                    " modules"
                  ] })
                ] }),
                hasProgress && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[10px] text-muted-foreground mb-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-2.5 h-2.5" }),
                      "Progress"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                      savedPct,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "progress-bar-fill",
                      style: { width: `${savedPct}%` }
                    }
                  ) })
                ] }),
                !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-secondary-foreground font-medium flex items-center gap-1 mt-auto", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(var(--secondary))]", children: "✦" }),
                  " First module free — no payment needed"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/modules/$id",
                  params: { id: module.id },
                  className: "block",
                  "data-ocid": `course-start-${module.id}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      className: btn.className,
                      "data-ocid": `course-btn-${btnState}-${module.id}`,
                      children: [
                        btn.icon,
                        " ",
                        btn.label
                      ]
                    }
                  )
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}
function CardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4 space-y-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-20 rounded-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-8 rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-3/4" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-14 rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-14 rounded-full" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-3 w-full" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-full rounded-lg" })
  ] });
}
function CoursesHub() {
  const search = useSearch({ from: "/courses" });
  const initialCat = search.category ?? "all";
  const [activeTab, setActiveTab] = reactExports.useState(initialCat);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [paywallOpen, setPaywallOpen] = reactExports.useState(false);
  const { isSubscribed, isAdmin, initiateCheckout } = useSubscription();
  const hasAccess = isSubscribed || isAdmin;
  const { identity } = useInternetIdentity();
  const userId = (identity == null ? void 0 : identity.getPrincipal().toText()) ?? "";
  reactExports.useEffect(() => {
    const allKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) allKeys.push(k);
    }
    for (const key of allKeys) {
      if (key.startsWith("courseProgress--") || key.startsWith("courseProgress-anon-") || key.startsWith("lessonProgress--") || key.startsWith("lessonProgress-anon-")) {
        localStorage.removeItem(key);
      }
    }
  }, []);
  const { data: allModules = [], isLoading } = useModules();
  const skillModules = reactExports.useMemo(
    () => allModules.filter((m) => !EXCLUDED_CATEGORIES.has(m.category)),
    [allModules]
  );
  const tabFilteredModules = reactExports.useMemo(() => {
    if (activeTab === "all") return skillModules;
    const tab = TABS.find((t) => t.key === activeTab);
    if (!tab || tab.categories.length === 0) return skillModules;
    return skillModules.filter(
      (m) => tab.categories.includes(m.category)
    );
  }, [skillModules, activeTab]);
  const filteredModules = reactExports.useMemo(() => {
    if (!searchQuery.trim()) return tabFilteredModules;
    const q = searchQuery.toLowerCase();
    return tabFilteredModules.filter(
      (m) => m.title.toLowerCase().includes(q) || m.description.toLowerCase().includes(q) || m.topics.some((t) => t.toLowerCase().includes(q))
    );
  }, [tabFilteredModules, searchQuery]);
  const sortedModules = reactExports.useMemo(() => {
    return [...filteredModules].sort((a, b) => {
      if (FEATURED_IDS.has(a.id) && !FEATURED_IDS.has(b.id)) return -1;
      if (!FEATURED_IDS.has(a.id) && FEATURED_IDS.has(b.id)) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [filteredModules]);
  const totalVisible = sortedModules.length;
  const totalAll = skillModules.length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    paywallOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "bg-card rounded-2xl p-7 max-w-sm w-full text-center shadow-2xl border border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Unlock Full Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-1", children: "Get unlimited access to all 27 courses, quizzes, and skill tracks." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-lg text-foreground mb-5", children: [
            "₹499",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "/ 45 days" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "text-xs text-muted-foreground space-y-1.5 mb-6 text-left bg-muted/40 rounded-lg p-3", children: [
            "All 27 courses fully unlocked",
            "Scenario-based lesson content",
            "Full progress tracking",
            "Capstone portfolio project"
          ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-secondary-foreground", children: "✦" }),
            f
          ] }, f)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                className: "flex-1",
                onClick: () => {
                  setPaywallOpen(false);
                  initiateCheckout();
                },
                "data-ocid": "paywall-subscribe",
                children: "Subscribe · ₹499"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "ghost",
                className: "flex-1",
                onClick: () => setPaywallOpen(false),
                children: "Later"
              }
            )
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🎓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "badge-subscription text-[10px]", children: "IT Fresher Hub" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground leading-tight", children: "Skills Hub" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mt-1", children: [
            totalAll,
            " industry-relevant courses ·",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "First module free" }),
            " ",
            "in every course"
          ] })
        ] }),
        !hasAccess && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "shrink-0 gap-2",
            onClick: () => setPaywallOpen(true),
            "data-ocid": "hero-subscribe",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
              " Upgrade"
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 py-6 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-start sm:items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "Search courses, topics…",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                className: "pl-9 bg-card",
                "data-ocid": "course-search"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground shrink-0", children: [
            "Showing",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: isLoading ? "…" : totalVisible }),
            " ",
            "of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: totalAll }),
            " ",
            "courses"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex flex-wrap gap-2",
            role: "tablist",
            "aria-label": "Course categories",
            children: TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  role: "tab",
                  "aria-selected": isActive,
                  onClick: () => setActiveTab(tab.key),
                  "data-ocid": `tab-${tab.key}`,
                  className: `flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border transition-all duration-150 ${isActive ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground hover:bg-primary/5"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: tab.icon }),
                    tab.label
                  ]
                },
                tab.key
              );
            })
          }
        ),
        isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map(
          (k) => /* @__PURE__ */ jsxRuntimeExports.jsx(CardSkeleton, {}, k)
        ) }) : sortedModules.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: sortedModules.map((module, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          CourseCard,
          {
            module,
            index: i,
            isSubscribed: hasAccess,
            onUpgrade: () => setPaywallOpen(true),
            userId
          },
          module.id
        )) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", "data-ocid": "courses-empty-state", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-8 h-8 text-muted-foreground opacity-50" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-lg mb-1", children: "No courses found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Try a different category or clear your search." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => {
                setActiveTab("all");
                setSearchQuery("");
              },
              children: "Clear filters"
            }
          )
        ] }),
        !isLoading && sortedModules.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 pt-4 border-t border-border text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-3 h-3 text-[oklch(var(--badge-gold))] fill-current" }),
            "Featured — recommended starting points"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
            "Requires ₹499 subscription after first module"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  CoursesHub as default
};
