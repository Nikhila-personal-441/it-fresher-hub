import { l as createLucideIcon, n as useSearch, r as reactExports, j as jsxRuntimeExports, m as motion, h as Skeleton, L as Link, i as Badge, C as Clock, g as Button } from "./index-Cmp-4xpj.js";
import { C as Card, a as CardContent } from "./card-D0gvQiuv.js";
import { u as useModules } from "./useModules-DkUfiwxx.js";
import { a as formatCategory, g as getCategoryColor, b as getDifficultyColor, f as formatMinutes } from "./formatters-Ci1eEvah.js";
import { C as ChevronRight } from "./chevron-right-BFsfN0Tr.js";
import "./useMutation-D-KepCmg.js";
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
      d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
      key: "sc7q7i"
    }
  ]
];
const Funnel = createLucideIcon("funnel", __iconNode);
const CATEGORIES = [
  "all",
  "fundamentals",
  "networking",
  "cloud",
  "coding",
  "security",
  "ai_ml",
  "corporate",
  "devops"
];
function ModuleList() {
  const search = useSearch({ from: "/modules" });
  const initialCategory = search.category && CATEGORIES.includes(search.category) ? search.category : "all";
  const [activeFilter, setActiveFilter] = reactExports.useState(initialCategory);
  const { data: modules, isLoading } = useModules(
    activeFilter === "all" ? void 0 : activeFilter
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: "Learning Modules" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Structured learning paths from IT basics to advanced corporate skills." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Funnel, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
      CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "data-ocid": `filter-${cat}`,
          onClick: () => setActiveFilter(cat),
          className: `px-3 py-1.5 rounded-full text-xs font-medium transition-smooth border ${activeFilter === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
          children: formatCategory(cat)
        },
        cat
      ))
    ] }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: ["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-52 rounded-xl" }, k)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: modules == null ? void 0 : modules.map((mod, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: i * 0.06, duration: 0.4 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/modules/$id",
            params: { id: mod.id },
            "data-ocid": `module-list-item-${mod.id}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full hover:shadow-md transition-smooth border-border hover:border-primary/30 group cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 flex flex-col gap-3 h-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: mod.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-xs border ${getCategoryColor(mod.category)}`,
                      children: formatCategory(mod.category)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `${getDifficultyColor(mod.difficulty)} px-2 py-0.5 rounded-full text-xs font-medium`,
                      children: mod.difficulty
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground group-hover:text-primary transition-colors", children: mod.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1 line-clamp-2", children: mod.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1", children: [
                mod.topics.slice(0, 3).map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground",
                    children: topic
                  },
                  topic
                )),
                mod.topics.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground", children: [
                  "+",
                  mod.topics.length - 3,
                  " more"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  " ",
                  formatMinutes(mod.estimatedMinutes)
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-primary flex items-center gap-0.5 font-medium group-hover:gap-1.5 transition-all", children: [
                  "Start learning ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
                ] })
              ] })
            ] }) })
          }
        )
      },
      mod.id
    )) }),
    !isLoading && (modules == null ? void 0 : modules.length) === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 space-y-3", "data-ocid": "empty-modules", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl", children: "📚" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "No modules in this category yet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Try selecting a different category." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: () => setActiveFilter("all"), children: "View All Modules" })
    ] })
  ] });
}
export {
  ModuleList as default
};
