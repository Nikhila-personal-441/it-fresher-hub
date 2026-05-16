import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useModules } from "@/hooks/useModules";
import { useProgress } from "@/hooks/useProgress";
import { useSubscription } from "@/hooks/useSubscription";
import { formatMinutes, getCategoryColor } from "@/lib/formatters";
import type { ITModule, ModuleCategory } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useSearch } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  Clock,
  Lock,
  Search,
  Star,
  Trophy,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { LEARNING_PATHS, LearningPath } from "@/data/paths";

// ── Tab structure ────────────────────────────────────────────────────────────

interface TabDef {
  key: string;
  label: string;
  icon: string;
  categories: ModuleCategory[];
}

const TABS: TabDef[] = [
  {
    key: "tracks",
    label: "Learning Paths",
    icon: "🚀",
    categories: [],
  },
  {
    key: "all",
    label: "All Courses",
    icon: "🎯",
    categories: [],
  },
  {
    key: "fundamentals",
    label: "Fundamentals",
    icon: "🖥️",
    categories: ["itfundamentals", "networking", "htmlcss"],
  },
  {
    key: "programming",
    label: "Programming",
    icon: "💻",
    categories: ["python", "java", "dsa", "shellscripting", "github"],
  },
  {
    key: "data",
    label: "Data & AI",
    icon: "🧠",
    categories: ["sql", "ai_ml", "machinelearning", "excel"],
  },
  {
    key: "infrastructure",
    label: "Infrastructure",
    icon: "⚙️",
    categories: ["devops", "cybersecurity"],
  },
  {
    key: "cloud",
    label: "Cloud",
    icon: "☁️",
    categories: ["cloudaws"],
  },
  {
    key: "security",
    label: "Security",
    icon: "🔒",
    categories: ["cybersecurity"],
  },
  {
    key: "career",
    label: "Career Skills",
    icon: "💼",
    categories: [
      "corporateskills",
      "presentation",
      "trending",
      "corporateworld",
    ],
  },
];

// IDs of priority "featured" courses
const FEATURED_IDS = new Set(["3", "4", "12", "13", "8", "19"]);
const CheckIcon = Check;

// Courses excluded from the skills hub (shown on dedicated pages)
const EXCLUDED_CATEGORIES = new Set<ModuleCategory>([
  "mncplatforms",
  "capstone",
]);

// ── Course Card ──────────────────────────────────────────────────────────────

function CourseCard({
  module,
  index,
  isSubscribed,
  userId,
  completedModuleIds,
}: {
  module: ITModule;
  index: number;
  isSubscribed: boolean;
  onUpgrade?: () => void;
  userId: string;
  completedModuleIds: Set<string>;
}) {
  const isFeatured = FEATURED_IDS.has(module.id);
  const categoryColor = getCategoryColor(module.category);

  // Backend completedModules wins; fall back to localStorage
  const isCompletedByBackend = completedModuleIds.has(module.id);
  const courseProgressKey = `courseProgress-${userId}-${module.id}`;
  const localPct = (() => {
    try {
      if (!userId) return 0;
      const raw = localStorage.getItem(courseProgressKey);
      return raw ? Math.min(100, Math.max(0, Number(JSON.parse(raw)))) : 0;
    } catch {
      return 0;
    }
  })();
  const savedPct = isCompletedByBackend ? 100 : localPct;

  const isCompleted = savedPct >= 100;
  const hasProgress = savedPct > 0;

  // Determine button state
  type BtnState = "start" | "continue" | "completed";
  const btnState: BtnState = isCompleted
    ? "completed"
    : hasProgress
      ? "continue"
      : "start";

  const btnConfig: Record<
    BtnState,
    { label: string; className: string; icon: React.ReactNode }
  > = {
    start: {
      label: "Start Learning",
      className:
        "w-full text-xs gap-1.5 bg-blue-600 hover:bg-blue-700 text-white border-0",
      icon: <BookOpen className="w-3.5 h-3.5" />,
    },
    continue: {
      label: "Continue Learning",
      className:
        "w-full text-xs gap-1.5 bg-orange-500 hover:bg-orange-600 text-white border-0",
      icon: <Trophy className="w-3.5 h-3.5" />,
    },
    completed: {
      label: "Completed",
      className:
        "w-full text-xs gap-1.5 bg-green-600 hover:bg-green-700 text-white border-0",
      icon: <CheckIcon className="w-3.5 h-3.5" />,
    },
  };

  const btn = btnConfig[btnState];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group relative flex flex-col h-full"
    >
      {/* Featured glow ring */}
      {isFeatured && (
        <div
          className="absolute -inset-px rounded-xl pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(135deg, oklch(var(--primary)/0.4), oklch(var(--secondary)/0.3))",
          }}
        />
      )}

      <div
        className={`relative z-10 flex flex-col h-full bg-card border rounded-xl overflow-hidden transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg ${
          isFeatured ? "border-primary/40 shadow-md" : "border-border shadow-sm"
        }`}
      >
        {/* Top badges row */}
        <div className="flex items-center justify-between px-4 pt-3 pb-0 gap-2">
          <div className="flex flex-wrap gap-1">
            {isFeatured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[oklch(var(--badge-gold)/0.15)] text-[oklch(var(--badge-gold))] border border-[oklch(var(--badge-gold)/0.35)]">
                <Star className="w-2.5 h-2.5 fill-current" />
                Featured
              </span>
            )}
          </div>
          <div className="flex gap-1">
            {isSubscribed ? (
              <span className="badge-free text-[10px]">✓ Unlocked</span>
            ) : (
              <span className="badge-free text-[10px]">1st Free</span>
            )}
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-4 pt-3 gap-2.5">
          {/* Icon + title */}
          <div className="flex items-start gap-3">
            <div className="text-3xl leading-none flex-shrink-0 mt-0.5">
              {module.icon}
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-sm text-foreground leading-snug line-clamp-2">
                {module.title}
              </h3>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-0.5">
                {module.description}
              </p>
            </div>
          </div>

          {/* Category + difficulty badges */}
          <div className="flex flex-wrap gap-1 items-center">
            <span
              className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium border ${categoryColor}`}
            >
              {module.category
                .replace(/([A-Z])/g, " $1")
                .replace(/([a-z])([A-Z])/g, "$1 $2")
                .replace("_", " & ")
                .replace(/\b\w/g, (c) => c.toUpperCase())
                .trim()}
            </span>
            <span
              className={`badge-difficulty-${module.difficulty} text-[10px]`}
            >
              {module.difficulty}
            </span>
          </div>

          {/* Topics preview */}
          <div className="flex flex-wrap gap-1">
            {module.topics.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border"
              >
                {t}
              </span>
            ))}
            {module.topics.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                +{module.topics.length - 3} more
              </span>
            )}
          </div>

          {/* Time + lesson count */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatMinutes(module.estimatedMinutes)}
            </span>
            <span className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              {module.topics.length} modules
            </span>
          </div>

          {/* Progress bar — shown if user has started */}
          {hasProgress && (
            <div className="mt-1">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                <span className="flex items-center gap-1">
                  <Trophy className="w-2.5 h-2.5" />
                  Progress
                </span>
                <span className="font-semibold text-foreground">
                  {savedPct}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${savedPct}%` }}
                />
              </div>
            </div>
          )}
          {!isSubscribed && (
            <div className="text-[10px] text-secondary-foreground font-medium flex items-center gap-1 mt-auto">
              <span className="text-[oklch(var(--secondary))]">✦</span> First
              module free — no payment needed
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="px-4 pb-4">
          <Link
            to="/modules/$id"
            params={{ id: module.id }}
            className="block"
            data-ocid={`course-start-${module.id}`}
          >
            <Button
              size="sm"
              className={btn.className}
              data-ocid={`course-btn-${btnState}-${module.id}`}
            >
              {btn.icon} {btn.label}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ── Skeleton ─────────────────────────────────────────────────────────────────

function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-3">
      <Skeleton className="h-4 w-20 rounded-full" />
      <div className="flex gap-3">
        <Skeleton className="h-8 w-8 rounded" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3 w-3/4" />
        </div>
      </div>
      <div className="flex gap-1">
        <Skeleton className="h-4 w-14 rounded-full" />
        <Skeleton className="h-4 w-14 rounded-full" />
      </div>
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-8 w-full rounded-lg" />
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function CoursesHub() {
  const search = useSearch({ from: "/courses" });
  const initialCat = (search as { category?: string }).category ?? "tracks";
  const [activeTab, setActiveTab] = useState<string>(initialCat);
  const [searchQuery, setSearchQuery] = useState("");
  const [paywallOpen, setPaywallOpen] = useState(false);
  const { isSubscribed, isAdmin, initiateCheckout } = useSubscription();
  const hasAccess = isSubscribed || isAdmin;
  const { user } = useAuth();
  const userId = user?.uid ?? "";
  const { data: progressData } = useProgress();
  const completedModuleIds = new Set(progressData?.completedModules ?? []);

  // One-time mount purge: remove any courseProgress or lessonProgress keys
  // written with an empty userId ("courseProgress--<id>", "lessonProgress--<id>")
  // or the explicit anon prefix. These cause false progress on first load.

  useEffect(() => {
    const allKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) allKeys.push(k);
    }
    for (const key of allKeys) {
      if (
        key.startsWith("courseProgress--") ||
        key.startsWith("courseProgress-anon-") ||
        key.startsWith("lessonProgress--") ||
        key.startsWith("lessonProgress-anon-")
      ) {
        localStorage.removeItem(key);
      }
    }
  }, []);
  const { data: allModules = [], isLoading } = useModules();

  // Strip out dedicated-section categories
  const skillModules = useMemo(
    () => allModules.filter((m) => !EXCLUDED_CATEGORIES.has(m.category)),
    [allModules],
  );

  // Apply tab filter
  const tabFilteredModules = useMemo(() => {
    if (activeTab === "all") return skillModules;
    const tab = TABS.find((t) => t.key === activeTab);
    if (!tab || tab.categories.length === 0) return skillModules;
    return skillModules.filter((m) =>
      tab.categories.includes(m.category as ModuleCategory),
    );
  }, [skillModules, activeTab]);

  // Apply search filter
  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return tabFilteredModules;
    const q = searchQuery.toLowerCase();
    return tabFilteredModules.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.topics.some((t) => t.toLowerCase().includes(q)),
    );
  }, [tabFilteredModules, searchQuery]);

  // Sort: featured first, then alphabetical
  const sortedModules = useMemo<ITModule[]>(() => {
    return [...filteredModules].sort((a, b) => {
      if (FEATURED_IDS.has(a.id) && !FEATURED_IDS.has(b.id)) return -1;
      if (!FEATURED_IDS.has(a.id) && FEATURED_IDS.has(b.id)) return 1;
      return a.title.localeCompare(b.title);
    });
  }, [filteredModules]);

  const totalVisible = sortedModules.length;
  const totalAll = skillModules.length;

  return (
    <>
      {/* Paywall modal */}
      {paywallOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-7 max-w-sm w-full text-center shadow-2xl border border-border"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Unlock Full Access
            </h3>
            <p className="text-sm text-muted-foreground mb-1">
              Get unlimited access to all 27 courses, quizzes, and skill tracks.
            </p>
            <p className="font-bold text-lg text-foreground mb-5">
              ₹199{" "}
              <span className="text-sm font-normal text-muted-foreground">
                / lifetime
              </span>
            </p>
            <ul className="text-xs text-muted-foreground space-y-1.5 mb-6 text-left bg-muted/40 rounded-lg p-3">
              {[
                "All 27 courses fully unlocked",
                "Scenario-based lesson content",
                "Full progress tracking",
                "Capstone portfolio project",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-secondary-foreground">✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => {
                  setPaywallOpen(false);
                  initiateCheckout();
                }}
                data-ocid="paywall-subscribe"
              >
                Subscribe · ₹199
              </Button>
              <Button
                variant="ghost"
                className="flex-1"
                onClick={() => setPaywallOpen(false)}
              >
                Later
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      <div className="min-h-screen bg-background">
        {/* Page header */}
        <div className="bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎓</span>
                  <Badge className="badge-subscription text-[10px]">
                    IT Fresher Hub
                  </Badge>
                </div>
                <h1 className="font-display font-bold text-3xl text-foreground leading-tight">
                  Skills Hub
                </h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {totalAll} industry-relevant courses ·{" "}
                  <span className="text-foreground font-medium">
                    First module free
                  </span>{" "}
                  in every course
                </p>
              </div>
              {!hasAccess && (
                <Button
                  className="shrink-0 gap-2"
                  onClick={() => setPaywallOpen(true)}
                  data-ocid="hero-subscribe"
                >
                  <BookOpen className="w-4 h-4" /> Upgrade
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
          {/* Search + count row */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                placeholder="Search courses, topics…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-card"
                data-ocid="course-search"
              />
            </div>
            <span className="text-sm text-muted-foreground shrink-0">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {isLoading ? "…" : totalVisible}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">{totalAll}</span>{" "}
              courses
            </span>
          </div>

          {/* Views vs Filters */}
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">View Mode</span>
              <div className="flex flex-wrap gap-2">
                {TABS.slice(0, 2).map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      data-ocid={`tab-${tab.key}`}
                      className={`flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold border transition-all duration-200 ${
                        isActive
                          ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                          : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-1">Filter by Category</span>
              <div className="flex flex-wrap gap-2">
                {TABS.slice(2).map((tab) => {
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      data-ocid={`tab-${tab.key}`}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-150 ${
                        isActive
                          ? "bg-secondary text-secondary-foreground border-secondary shadow-md"
                          : "bg-card text-muted-foreground border-border hover:border-secondary/40 hover:text-foreground hover:bg-secondary/5"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"].map(
                (k) => (
                  <CardSkeleton key={k} />
                ),
              )}
            </div>
          ) : activeTab === "tracks" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEARNING_PATHS.map((path, i) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-3xl">
                        {path.icon}
                      </div>
                      <Badge variant="outline" className="border-secondary text-secondary font-bold">₹{path.priceINR}</Badge>
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {path.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
                      {path.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {path.skills.map(s => (
                          <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary/5 text-secondary font-medium border border-secondary/20">
                            {s}
                          </span>
                        ))}
                      </div>
                      <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 font-medium">
                        <BookOpen className="w-3 h-3" />
                        Includes {path.mandatoryModules.length + path.optionalModules.length} Specialized Modules
                      </p>
                    </div>
                    <Link
                      to="/tracks/$id"
                      params={{ id: path.id }}
                      className="w-full"
                    >
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-5 rounded-xl gap-2">
                        View Path Details <Trophy className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : sortedModules.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {sortedModules.map((module, i) => (
                <CourseCard
                  key={module.id}
                  module={module}
                  index={i}
                  isSubscribed={hasAccess}
                  onUpgrade={() => setPaywallOpen(true)}
                  userId={userId}
                  completedModuleIds={completedModuleIds}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20" data-ocid="courses-empty-state">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-muted-foreground opacity-50" />
              </div>
              <p className="font-display font-semibold text-foreground text-lg mb-1">
                No courses found
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Try a different category or clear your search.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setActiveTab("all");
                  setSearchQuery("");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}

          {/* Legend */}
          {!isLoading && sortedModules.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Star className="w-3 h-3 text-[oklch(var(--badge-gold))] fill-current" />
                Featured — recommended starting points
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                Requires ₹199 subscription after first module
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
