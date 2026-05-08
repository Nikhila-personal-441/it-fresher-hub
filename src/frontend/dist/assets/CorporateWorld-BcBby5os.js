import { l as createLucideIcon, B as BookOpen, W as Wrench, j as jsxRuntimeExports, z as Building2, p as CircleCheck, i as Badge, L as Link, g as Button } from "./index-Cmp-4xpj.js";
import { T as Trophy } from "./trophy-C4FON7Sw.js";
import { A as ArrowRight } from "./arrow-right-yO5WTT37.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 21a8 8 0 0 0-16 0", key: "3ypg7q" }],
  ["circle", { cx: "10", cy: "8", r: "5", key: "o932ke" }],
  ["path", { d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3", key: "10s06x" }]
];
const UsersRound = createLucideIcon("users-round", __iconNode);
const QUICK_FACTS = [
  { icon: "👥", label: "13 IT roles explained" },
  { icon: "🔄", label: "4 methodologies covered" },
  { icon: "🛠️", label: "10+ collaboration tools" },
  { icon: "💬", label: "30+ corporate terms" },
  { icon: "🎯", label: "Scenario-based learning" },
  { icon: "⚡", label: "Mini knowledge quizzes" }
];
const SECTIONS = [
  {
    id: "roles",
    icon: UsersRound,
    emoji: "👨‍💼",
    title: "IT Roles & Responsibilities",
    description: "Discover every role in an IT company — what they do, when they act, and how they interact. Real corporate scenarios showing a day in the life of each person.",
    topics: [
      "Developer (Frontend/Backend/Full-stack)",
      "QA/Tester — all testing types",
      "Business Analyst & Project Manager",
      "DevOps, DBA, Security Analyst",
      "Support L1/L2/L3, Operations",
      "Team Lead, Scrum Master, CTO"
    ],
    lessonCount: 7,
    free: true,
    accentClass: "text-[oklch(var(--corporate-accent))]",
    bgClass: "bg-[oklch(var(--corporate-accent)/0.07)]",
    borderClass: "border-[oklch(var(--corporate-accent)/0.3)]",
    badgeLabel: "Roles & Responsibilities"
  },
  {
    id: "culture",
    icon: BookOpen,
    emoji: "🔄",
    title: "How Companies Work",
    description: "Understand Agile vs Waterfall, sprint planning, story creation, Scrum ceremonies, and certifications that MNCs value. Build confidence in how modern IT teams operate.",
    topics: [
      "Waterfall vs Agile — scenario comparison",
      "Scrum framework & ceremonies",
      "Sprint planning, story points, velocity",
      "JIRA, Azure DevOps, Trello, Monday.com",
      "CSM & PSM I certifications",
      "MOM writing & meeting etiquette"
    ],
    lessonCount: 5,
    free: false,
    accentClass: "text-[oklch(var(--platform-accent))]",
    bgClass: "bg-[oklch(var(--platform-accent)/0.07)]",
    borderClass: "border-[oklch(var(--platform-accent)/0.3)]",
    badgeLabel: "Methodologies & Culture"
  },
  {
    id: "tools",
    icon: Wrench,
    emoji: "🛠️",
    title: "Team Collaboration Tools",
    description: "Every tool you'll use on Day 1. Slack channels, Teams meetings, Confluence docs, SharePoint, Notion, Zoom — plus how to write professional meeting minutes that impress your manager.",
    topics: [
      "Slack, Microsoft Teams, Google Chat",
      "Confluence, SharePoint, Notion",
      "Zoom, Meet — video meeting best practices",
      "Meeting agenda creation & etiquette",
      "Minutes of Meeting (MOM) templates",
      "Professional email communication"
    ],
    lessonCount: 4,
    free: false,
    accentClass: "text-[oklch(var(--skill-networking))]",
    bgClass: "bg-[oklch(var(--skill-networking)/0.07)]",
    borderClass: "border-[oklch(var(--skill-networking)/0.3)]",
    badgeLabel: "Collaboration Tools"
  },
  {
    id: "jargon",
    icon: MessageSquare,
    emoji: "💬",
    title: "Corporate Jargon & Terms",
    description: "Never be lost in meetings again. 30+ terms decoded with real sentences you'll hear on Day 1 — source, target, legacy, SLA, KPI, hotfix, sprint, velocity, and more.",
    topics: [
      "Data & system terms: Source, Legacy, Target",
      "Deployment & environments: Dev/QA/Prod",
      "Project terms: Sprint, Backlog, Velocity",
      "Testing terms: UAT, Regression, Hotfix",
      "People terms: Stakeholder, Escalation, SOP",
      "DevOps terms: CI/CD, Pipeline, Release"
    ],
    lessonCount: 4,
    free: false,
    accentClass: "text-[oklch(var(--etl-accent))]",
    bgClass: "bg-[oklch(var(--etl-accent)/0.07)]",
    borderClass: "border-[oklch(var(--etl-accent)/0.3)]",
    badgeLabel: "Key Terms to Know"
  }
];
function CorporateWorld() {
  const totalLessons = SECTIONS.reduce((sum, s) => sum + s.lessonCount, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-[oklch(var(--corporate-accent))] bg-[oklch(var(--corporate-accent)/0.1)] border border-[oklch(var(--corporate-accent)/0.3)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3.5 h-3.5" }),
        "Corporate World"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl md:text-4xl text-foreground mb-3 leading-tight", children: [
        "Welcome to the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(var(--corporate-accent))]", children: "Corporate World" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base max-w-2xl leading-relaxed mb-6", children: "Understand how IT companies really work — from your first standup to your first deployment. Built for freshers entering the IT world, with scenario-based learning that sticks." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[oklch(var(--corporate-accent)/0.06)] border border-[oklch(var(--corporate-accent)/0.25)] rounded-xl p-4 max-w-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[oklch(var(--corporate-accent))]", children: "🎯 Day 1 Scenario:" }),
        " ",
        "Your manager says:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"We need to fix the legacy system before the UAT sign-off in this sprint. Please coordinate with the L2 support team and update the MOM."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-2 text-muted-foreground text-xs", children: "Without this section, that sentence is gibberish. After it, you're the most confident fresher in the room. 💪" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-[oklch(var(--badge-gold))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold", children: [
            totalLessons,
            " Lessons"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-[oklch(var(--capstone-accent))]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "4 Quizzes included" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/30 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2", children: QUICK_FACTS.map((fact) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-1.5 text-sm text-muted-foreground",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fact.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: fact.label })
        ]
      },
      fact.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground mb-6", children: "Choose a Section" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: SECTIONS.map((sec) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `group relative flex flex-col rounded-2xl border-2 ${sec.borderClass} ${sec.bgClass} hover:shadow-lg transition-smooth hover:-translate-y-0.5 overflow-hidden`,
          "data-ocid": `corporate-section-card-${sec.id}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 pb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-12 h-12 rounded-xl flex items-center justify-center ${sec.bgClass} border ${sec.borderClass} text-2xl`,
                    children: sec.emoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-end gap-1.5", children: sec.free ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[oklch(var(--capstone-accent)/0.12)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.3)] text-xs font-semibold", children: "✓ Free Access" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[oklch(var(--badge-gold)/0.12)] text-[oklch(var(--badge-gold))] border-[oklch(var(--badge-gold)/0.3)] text-xs font-semibold", children: "⭐ Premium" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `text-xs font-bold uppercase tracking-wider ${sec.accentClass} mb-2`,
                  children: sec.badgeLabel
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground leading-snug mb-3", children: sec.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: sec.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-4 flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: sec.topics.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-xs text-muted-foreground",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `w-1.5 h-1.5 rounded-full shrink-0 ${sec.accentClass} bg-current`
                    }
                  ),
                  topic
                ]
              },
              topic
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `px-6 py-4 border-t ${sec.borderClass} flex items-center justify-between`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                    sec.lessonCount,
                    " lessons + quiz"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: "/corporate-world/$section",
                      params: { section: sec.id },
                      "data-ocid": `corporate-section-start-${sec.id}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          size: "sm",
                          variant: "outline",
                          className: `gap-1.5 border ${sec.borderClass} ${sec.accentClass} hover:bg-[oklch(var(--corporate-accent)/0.1)] text-sm font-semibold transition-smooth group-hover:gap-2`,
                          children: [
                            sec.free ? "Start Free" : "Explore",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-3.5 h-3.5" })
                          ]
                        }
                      )
                    }
                  )
                ]
              }
            )
          ]
        },
        sec.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 rounded-2xl bg-card border border-border p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-[oklch(var(--corporate-accent)/0.1)] border border-[oklch(var(--corporate-accent)/0.25)] flex items-center justify-center shrink-0 text-2xl", children: "🗺️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-2", children: "Recommended Learning Path" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: [
            "Start with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "IT Roles" }),
            " ",
            "(free) → then",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "How Companies Work" }),
            " ",
            "→ then",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Collaboration Tools" }),
            " ",
            "→ finally",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Corporate Jargon" }),
            ". By the end, you'll be the most prepared fresher in any interview!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: SECTIONS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: `flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${s.borderClass} ${s.bgClass}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: `font-bold ${s.accentClass} w-4 h-4 rounded-full flex items-center justify-center bg-current/10 text-[10px]`,
                    children: i + 1
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                  s.title.split(" ")[0],
                  " ",
                  s.title.split(" ")[1]
                ] })
              ]
            },
            s.id
          )) })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  CorporateWorld as default
};
