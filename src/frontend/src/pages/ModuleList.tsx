import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useModules } from "@/hooks/useModules";
import {
  formatCategory,
  formatMinutes,
  getCategoryColor,
  getDifficultyColor,
} from "@/lib/formatters";
import type { CategoryFilter, ModuleCategory } from "@/types";
import { Link, useSearch } from "@tanstack/react-router";
import { ChevronRight, Clock, Filter } from "lucide-react";
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

export default function ModuleList() {
  const search = useSearch({ from: "/modules" });
  const initialCategory =
    search.category && CATEGORIES.includes(search.category as CategoryFilter)
      ? (search.category as CategoryFilter)
      : "all";

  const [activeFilter, setActiveFilter] =
    useState<CategoryFilter>(initialCategory);

  const { data: modules, isLoading } = useModules(
    activeFilter === "all" ? undefined : (activeFilter as ModuleCategory),
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
          Learning Modules
        </h1>
        <p className="text-muted-foreground mt-1">
          Structured learning paths from IT basics to advanced corporate skills.
        </p>
      </motion.div>

      {/* Category filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            data-ocid={`filter-${cat}`}
            onClick={() => setActiveFilter(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-smooth border ${
              activeFilter === cat
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {formatCategory(cat)}
          </button>
        ))}
      </div>

      {/* Module grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
            <Skeleton key={k} className="h-52 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules?.map((mod, i) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                to="/modules/$id"
                params={{ id: mod.id }}
                data-ocid={`module-list-item-${mod.id}`}
              >
                <Card className="h-full hover:shadow-md transition-smooth border-border hover:border-primary/30 group cursor-pointer">
                  <CardContent className="p-5 flex flex-col gap-3 h-full">
                    <div className="flex items-start justify-between">
                      <div className="text-3xl">{mod.icon}</div>
                      <div className="flex flex-col items-end gap-1">
                        <Badge
                          className={`text-xs border ${getCategoryColor(mod.category)}`}
                        >
                          {formatCategory(mod.category)}
                        </Badge>
                        <span
                          className={`${getDifficultyColor(mod.difficulty)} px-2 py-0.5 rounded-full text-xs font-medium`}
                        >
                          {mod.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {mod.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {mod.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                      {mod.topics.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-muted text-muted-foreground">
                          +{mod.topics.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-border">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />{" "}
                        {formatMinutes(mod.estimatedMinutes)}
                      </span>
                      <span className="text-xs text-primary flex items-center gap-0.5 font-medium group-hover:gap-1.5 transition-all">
                        Start learning <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {!isLoading && modules?.length === 0 && (
        <div className="text-center py-16 space-y-3" data-ocid="empty-modules">
          <p className="text-4xl">📚</p>
          <h3 className="font-display font-bold text-foreground">
            No modules in this category yet
          </h3>
          <p className="text-muted-foreground">
            Try selecting a different category.
          </p>
          <Button variant="outline" onClick={() => setActiveFilter("all")}>
            View All Modules
          </Button>
        </div>
      )}
    </div>
  );
}
