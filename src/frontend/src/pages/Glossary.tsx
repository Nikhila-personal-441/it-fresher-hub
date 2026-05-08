import { PaywallModal } from "@/components/PaywallModal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useGlossary } from "@/hooks/useGlossary";
import { useSubscription } from "@/hooks/useSubscription";
import { formatCategory, getCategoryColor } from "@/lib/formatters";
import type { CategoryFilter, GlossaryTerm, ModuleCategory } from "@/types";
import { BookMarked, ChevronDown, ChevronUp, Lock, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CATEGORIES: CategoryFilter[] = [
  "all",
  "fundamentals",
  "networking",
  "cloud",
  "coding",
  "security",
  "ai_ml",
  "corporate",
  "devops",
];

function TermCard({ term }: { term: GlossaryTerm }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card
      className="border-border hover:border-primary/30 transition-smooth"
      data-ocid={`glossary-term-${term.id}`}
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookMarked className="w-4 h-4 text-primary shrink-0" />
            <h3 className="font-display font-bold text-foreground truncate">
              {term.term}
            </h3>
          </div>
          <Badge
            className={`text-xs border shrink-0 ${getCategoryColor(term.category)}`}
          >
            {formatCategory(term.category)}
          </Badge>
        </div>

        <p
          className={`text-sm text-muted-foreground ${expanded ? "" : "line-clamp-2"}`}
        >
          {term.definition}
        </p>

        {term.example && expanded && (
          <div className="bg-muted/50 rounded-lg p-3 border border-border">
            <p className="text-xs font-semibold text-muted-foreground mb-1">
              💡 Example
            </p>
            <p className="text-sm text-foreground">{term.example}</p>
          </div>
        )}

        {term.relatedTerms.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {term.relatedTerms.map((rt) => (
              <span
                key={rt}
                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
              >
                {rt}
              </span>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 font-medium transition-colors mt-1"
          data-ocid={`glossary-expand-${term.id}`}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3 h-3" /> Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-3 h-3" /> Show more
            </>
          )}
        </button>
      </CardContent>
    </Card>
  );
}

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { isSubscribed, isAdmin } = useSubscription();

  const { data: terms, isLoading } = useGlossary(
    search,
    activeCategory === "all" ? undefined : (activeCategory as ModuleCategory),
  );

  const FREE_LIMIT = 10;
  const visibleTerms = terms?.slice(0, FREE_LIMIT) ?? [];
  const lockedTerms = terms?.slice(FREE_LIMIT) ?? [];
  const hasLockedTerms = !isSubscribed && !isAdmin && lockedTerms.length > 0;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      <PaywallModal open={paywallOpen} onOpenChange={setPaywallOpen} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
          IT Glossary
        </h1>
        <p className="text-muted-foreground mt-1">
          {terms?.length ?? 0} terms — clear definitions for every IT concept
          you&apos;ll encounter.
          {!isSubscribed && !isAdmin && terms && terms.length > FREE_LIMIT && (
            <span className="ml-1 text-amber-600 font-medium">
              First {FREE_LIMIT} free · Upgrade to unlock all {terms.length}{" "}
              terms.
            </span>
          )}
        </p>
      </motion.div>

      {/* Search bar */}
      <div className="relative max-w-lg">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search terms, definitions, examples..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
          data-ocid="glossary-search"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            data-ocid={`glossary-filter-${cat}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-smooth border ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {formatCategory(cat)}
          </button>
        ))}
      </div>

      {/* Terms grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
            <Skeleton key={k} className="h-40 rounded-xl" />
          ))}
        </div>
      ) : terms && terms.length > 0 ? (
        <div className="space-y-4">
          {/* Free terms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(isSubscribed || isAdmin ? terms : visibleTerms).map((term, i) => (
              <motion.div
                key={term.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
              >
                <TermCard term={term} />
              </motion.div>
            ))}
          </div>

          {/* Locked terms: blurred + upgrade prompt */}
          {hasLockedTerms && (
            <div className="relative">
              {/* Blurred preview grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 blur-sm pointer-events-none select-none">
                {lockedTerms.slice(0, 6).map((term) => (
                  <TermCard key={term.id} term={term} />
                ))}
              </div>

              {/* Upgrade overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-center bg-card/95 border border-amber-400/40 rounded-2xl p-6 shadow-lg max-w-sm mx-auto">
                  <div className="w-12 h-12 rounded-full bg-amber-400/20 border-2 border-amber-400/40 flex items-center justify-center">
                    <Lock className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-base">
                      {lockedTerms.length} more terms locked
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Upgrade to access all {terms.length} terms with full
                      definitions, examples, and related concepts.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm flex items-center gap-2 transition-colors"
                    onClick={() => setPaywallOpen(true)}
                    data-ocid="glossary-upgrade-btn"
                  >
                    <Lock className="w-4 h-4" />
                    Upgrade to Unlock All
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16 space-y-3" data-ocid="empty-glossary">
          <p className="text-4xl">📖</p>
          <h3 className="font-display font-bold text-foreground">
            No terms found
          </h3>
          <p className="text-muted-foreground">
            Try a different search term or clear the filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
            }}
            className="btn-secondary text-sm"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
