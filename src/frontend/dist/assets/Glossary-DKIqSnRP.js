import { r as reactExports, b as useSubscription, j as jsxRuntimeExports, P as PaywallModal, m as motion, h as Skeleton, q as Lock, t as BookMarked, i as Badge } from "./index-Cmp-4xpj.js";
import { C as Card, a as CardContent } from "./card-D0gvQiuv.js";
import { S as Search, I as Input } from "./input-CSn6Ssgr.js";
import { u as useGlossary } from "./useGlossary-CVxwIKYv.js";
import { a as formatCategory, g as getCategoryColor } from "./formatters-Ci1eEvah.js";
import { C as ChevronUp, a as ChevronDown } from "./chevron-up-iNraULA1.js";
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
function TermCard({ term }) {
  const [expanded, setExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "border-border hover:border-primary/30 transition-smooth",
      "data-ocid": `glossary-term-${term.id}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { className: "w-4 h-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground truncate", children: term.term })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              className: `text-xs border shrink-0 ${getCategoryColor(term.category)}`,
              children: formatCategory(term.category)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: `text-sm text-muted-foreground ${expanded ? "" : "line-clamp-2"}`,
            children: term.definition
          }
        ),
        term.example && expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/50 rounded-lg p-3 border border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground mb-1", children: "💡 Example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: term.example })
        ] }),
        term.relatedTerms.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: term.relatedTerms.map((rt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border",
            children: rt
          },
          rt
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setExpanded(!expanded),
            className: "flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors mt-1",
            "data-ocid": `glossary-expand-${term.id}`,
            children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-3 h-3" }),
              " Show less"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3 h-3" }),
              " Show more"
            ] })
          }
        )
      ] })
    }
  );
}
function Glossary() {
  const [search, setSearch] = reactExports.useState("");
  const [activeCategory, setActiveCategory] = reactExports.useState("all");
  const [paywallOpen, setPaywallOpen] = reactExports.useState(false);
  const { isSubscribed, isAdmin } = useSubscription();
  const { data: terms, isLoading } = useGlossary(
    search,
    activeCategory === "all" ? void 0 : activeCategory
  );
  const FREE_LIMIT = 10;
  const visibleTerms = (terms == null ? void 0 : terms.slice(0, FREE_LIMIT)) ?? [];
  const lockedTerms = (terms == null ? void 0 : terms.slice(FREE_LIMIT)) ?? [];
  const hasLockedTerms = !isSubscribed && !isAdmin && lockedTerms.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PaywallModal, { open: paywallOpen, onOpenChange: setPaywallOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: "IT Glossary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1", children: [
            (terms == null ? void 0 : terms.length) ?? 0,
            " terms — clear definitions for every IT concept you'll encounter.",
            !isSubscribed && !isAdmin && terms && terms.length > FREE_LIMIT && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-1 text-amber-600 font-medium", children: [
              "First ",
              FREE_LIMIT,
              " free · Upgrade to unlock all ",
              terms.length,
              " ",
              "terms."
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          type: "search",
          placeholder: "Search terms, definitions, examples...",
          value: search,
          onChange: (e) => setSearch(e.target.value),
          className: "pl-9",
          "data-ocid": "glossary-search"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "data-ocid": `glossary-filter-${cat}`,
        onClick: () => setActiveCategory(cat),
        className: `px-3 py-1.5 rounded-full text-xs font-medium transition-smooth border ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"}`,
        children: formatCategory(cat)
      },
      cat
    )) }),
    isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: ["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-40 rounded-xl" }, k)) }) : terms && terms.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: (isSubscribed || isAdmin ? terms : visibleTerms).map((term, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: i * 0.04, duration: 0.35 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(TermCard, { term })
        },
        term.id
      )) }),
      hasLockedTerms && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 blur-sm pointer-events-none select-none", children: lockedTerms.slice(0, 6).map((term) => /* @__PURE__ */ jsxRuntimeExports.jsx(TermCard, { term }, term.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center bg-card/95 border border-amber-400/40 rounded-2xl p-6 shadow-lg max-w-sm mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-amber-400/20 border-2 border-amber-400/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-6 h-6 text-amber-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-foreground text-base", children: [
              lockedTerms.length,
              " more terms locked"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1", children: [
              "Upgrade to access all ",
              terms.length,
              " terms with full definitions, examples, and related concepts."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              className: "px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center gap-2 transition-colors",
              onClick: () => setPaywallOpen(true),
              "data-ocid": "glossary-upgrade-btn",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4" }),
                "Upgrade to Unlock All"
              ]
            }
          )
        ] }) })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-16 space-y-3", "data-ocid": "empty-glossary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl", children: "📖" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "No terms found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Try a different search term or clear the filter." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => {
            setSearch("");
            setActiveCategory("all");
          },
          className: "btn-secondary text-sm",
          children: "Clear filters"
        }
      )
    ] })
  ] });
}
export {
  Glossary as default
};
