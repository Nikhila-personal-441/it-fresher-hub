import { g as createLucideIcon, s as useLocation, j as jsxRuntimeExports, L as Link, d as Button, m as motion, f as Badge, k as CircleCheck, B as BookOpen } from "./index-DrrDo776.js";
import { C as Card, a as CardContent } from "./card-_4TY3EGm.js";
import { u as useQuizQuestions } from "./useQuiz-Cnjaa0vt.js";
import { c as getScoreLabel, a as formatCategory, g as getCategoryColor } from "./formatters-Ci1eEvah.js";
import { T as Trophy } from "./trophy-BqwxHwfZ.js";
import { T as TrendingUp } from "./trending-up-rDq8GG56.js";
import { C as CircleX } from "./circle-x-CdR8p0ZR.js";
import "./useMutation-hdUPihXR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
function QuizResultPage() {
  const location = useLocation();
  const result = location.state ?? null;
  const { data: questions } = useQuizQuestions();
  if (!result) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl", children: "📊" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "No quiz result found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Take the Quiz" }) })
    ] });
  }
  const { label, emoji } = getScoreLabel(result.score);
  const passed = result.score >= 60;
  const categoryStats = (() => {
    if (!(questions == null ? void 0 : questions.length)) return [];
    const map = /* @__PURE__ */ new Map();
    for (const attempt of result.attempts) {
      const q = questions.find((q2) => q2.id === attempt.questionId);
      if (!q) continue;
      const cat = q.category;
      const prev = map.get(cat) ?? { correct: 0, total: 0 };
      map.set(cat, {
        correct: prev.correct + (attempt.isCorrect ? 1 : 0),
        total: prev.total + 1
      });
    }
    return Array.from(map.entries()).map(([category, { correct, total }]) => ({
      category,
      correct,
      total,
      pct: Math.round(correct / total * 100)
    })).sort((a, b) => b.pct - a.pct);
  })();
  const strongAreas = categoryStats.filter((s) => s.pct >= 75);
  const weakAreas = categoryStats.filter((s) => s.pct < 50);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: `border-2 ${passed ? "border-secondary/40 bg-secondary/5" : "border-destructive/30 bg-destructive/5"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 text-center space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-3xl text-foreground", children: [
                  result.score,
                  "%"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-semibold text-muted-foreground", children: label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-4 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  className: `h-full rounded-full ${passed ? "bg-secondary" : "bg-destructive/70"}`,
                  initial: { width: 0 },
                  animate: { width: `${result.score}%` },
                  transition: { duration: 1, ease: "easeOut" }
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl p-4 border border-border text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-secondary-foreground font-display", children: result.correctAnswers }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Correct answers" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-xl p-4 border border-border text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground font-display", children: result.totalQuestions }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Total questions" })
                ] })
              ] }),
              passed ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "badge-success text-sm px-4 py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 mr-1.5 inline" }),
                " Corporate Ready!"
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Score 60% or higher to earn your Corporate Ready badge. Keep practicing!" })
            ] })
          }
        )
      }
    ),
    categoryStats.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.3, duration: 0.5 },
        className: "space-y-4",
        "data-ocid": "skill-gap-analysis",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Skill Gap Analysis" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground -mt-2", children: "See how you performed across each knowledge domain." }),
          (strongAreas.length > 0 || weakAreas.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            strongAreas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/25 text-xs text-secondary-foreground font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5" }),
              "Strong in:",
              " ",
              strongAreas.map((s) => formatCategory(s.category)).join(", ")
            ] }),
            weakAreas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/10 border border-destructive/25 text-xs text-destructive font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5" }),
              "Needs work:",
              " ",
              weakAreas.map((s) => formatCategory(s.category)).join(", ")
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: categoryStats.map((stat, i) => {
            const isStrong = stat.pct >= 75;
            const isWeak = stat.pct < 50;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -12 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: { delay: i * 0.06 },
                className: "bg-card border border-border rounded-xl p-4 space-y-2",
                "data-ocid": `skill-gap-${stat.category}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          className: `text-xs border ${getCategoryColor(stat.category)}`,
                          children: formatCategory(stat.category)
                        }
                      ),
                      isStrong && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-3.5 h-3.5 text-secondary-foreground" }),
                      isWeak && /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-3.5 h-3.5 text-destructive" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "span",
                      {
                        className: `text-sm font-bold font-display ${isStrong ? "text-secondary-foreground" : isWeak ? "text-destructive" : "text-foreground"}`,
                        children: [
                          stat.correct,
                          "/",
                          stat.total,
                          " (",
                          stat.pct,
                          "%)"
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: `h-full rounded-full ${isStrong ? "bg-secondary" : isWeak ? "bg-destructive/70" : "bg-primary"}`,
                      initial: { width: 0 },
                      whileInView: { width: `${stat.pct}%` },
                      viewport: { once: true },
                      transition: { duration: 0.7, ease: "easeOut" }
                    }
                  ) }),
                  isWeak && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "Review the",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Link,
                      {
                        to: "/modules",
                        search: { category: stat.category },
                        className: "text-primary hover:underline font-medium",
                        children: [
                          formatCategory(stat.category),
                          " modules"
                        ]
                      }
                    ),
                    " ",
                    "to strengthen this area."
                  ] })
                ]
              },
              stat.category
            );
          }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Answer Review" }),
      result.attempts.map((attempt, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -12 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.05 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: `border ${attempt.isCorrect ? "border-secondary/30" : "border-destructive/30"}`,
              "data-ocid": `result-item-${attempt.questionId}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex items-center gap-3", children: [
                attempt.isCorrect ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-secondary-foreground shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-5 h-5 text-destructive shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-foreground", children: [
                    "Question ",
                    i + 1
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: attempt.isCorrect ? "Answered correctly" : "Incorrect answer" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: attempt.isCorrect ? "badge-success" : "bg-destructive/10 text-destructive text-xs px-2 py-0.5 rounded-full",
                    children: attempt.isCorrect ? "✓" : "✗"
                  }
                )
              ] })
            }
          )
        },
        attempt.questionId
      ))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quiz", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          variant: "outline",
          className: "w-full gap-2",
          "data-ocid": "btn-retake-quiz",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "w-4 h-4" }),
            " Retake Quiz"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          className: "w-full btn-primary gap-2",
          "data-ocid": "btn-back-to-modules",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4" }),
            " Continue Learning"
          ]
        }
      ) })
    ] })
  ] });
}
export {
  QuizResultPage as default
};
