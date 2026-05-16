import { CertificateCard } from "@/components/CertificateCard";
import { InteractiveLessonRenderer } from "@/components/InteractiveLessonRenderer";
import { PaywallModal } from "@/components/PaywallModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useCertificateQueryClient,
  useCertificates,
} from "@/hooks/useCertificates";
import {
  useMarkModuleCompleted,
  useModule,
  useModuleLessons,
} from "@/hooks/useModules";
import { canAccessLesson, useSubscription } from "@/hooks/useSubscription";
import { formatCategory, getCategoryColor } from "@/lib/formatters";
import {
  downloadCertificateAsPdf,
  downloadInternCertificateAsPdf,
} from "@/lib/pdfDownload";
import { saveProgress } from "@/lib/firestoreService";
import type { LessonProgress, ModuleLessonProgress } from "@/types";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Crown,
  Lock,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── localStorage helpers (keyed by user principal for per-account isolation) ─
const ANON_PREFIX = "anon";

function getProgressKey(moduleId: string, userId: string): string {
  // Use stable 'anon' prefix for unauthenticated sessions;
  // real principal ID when signed in — prevents cross-user bleed.
  const safeId = userId && userId.length > 0 ? userId : ANON_PREFIX;
  return `lessonProgress-${safeId}-${moduleId}`;
}

function loadProgress(moduleId: string, userId: string): ModuleLessonProgress {
  // Unauthenticated users always start with empty progress —
  // anon keys are never promoted to real progress.
  if (!userId || userId.length === 0) return {};
  try {
    const raw = localStorage.getItem(getProgressKey(moduleId, userId));
    return raw ? (JSON.parse(raw) as ModuleLessonProgress) : {};
  } catch {
    return {};
  }
}

function saveProgress(
  moduleId: string,
  userId: string,
  progress: ModuleLessonProgress,
) {
  // Only persist progress for authenticated users.
  if (!userId || userId.length === 0) return;
  localStorage.setItem(
    getProgressKey(moduleId, userId),
    JSON.stringify(progress),
  );
}

/** Remove all anon-keyed AND foreign-principal progress keys from localStorage.
 * Called whenever a real userId is confirmed to prevent stale data bleeding.
 * Collects ALL keys first (snapshot) before removing any, to avoid the
 * classic off-by-one bug where removing during iteration skips entries.
 * Clears BOTH lessonProgress-* and courseProgress-* namespaces.
 */
function clearAnonProgress(currentUserId?: string) {
  // Snapshot all localStorage keys BEFORE removing anything.
  // Removing keys during iteration shifts indices and causes skips.
  const allKeys: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k) allKeys.push(k);
  }
  for (const key of allKeys) {
    const isLessonKey = key.startsWith("lessonProgress-");
    const isCourseKey = key.startsWith("courseProgress-");
    if (!isLessonKey && !isCourseKey) continue;

    if (isLessonKey) {
      // Remove anon lessonProgress keys unconditionally.
      if (key.startsWith(`lessonProgress-${ANON_PREFIX}-`)) {
        localStorage.removeItem(key);
        continue;
      }
      // If we know the current user, remove keys belonging to OTHER principals.
      if (
        currentUserId &&
        !key.startsWith(`lessonProgress-${currentUserId}-`)
      ) {
        localStorage.removeItem(key);
      }
    }

    if (isCourseKey) {
      // courseProgress-<userId>-<moduleId> — remove anon and foreign-principal variants.
      // Anon keys have an empty-string userId segment: "courseProgress--<moduleId>"
      // or an explicit "anon" segment: "courseProgress-anon-<moduleId>".
      if (
        key.startsWith(`courseProgress-${ANON_PREFIX}-`) ||
        key.startsWith("courseProgress--")
      ) {
        localStorage.removeItem(key);
        continue;
      }
      // Remove courseProgress keys that belong to OTHER authenticated principals.
      if (
        currentUserId &&
        !key.startsWith(`courseProgress-${currentUserId}-`)
      ) {
        localStorage.removeItem(key);
      }
    }
  }
}

// ─── Lesson Progress Bar ────────────────────────────────────────────────────
function LessonProgressBar({
  current,
  total,
}: { current: number; total: number }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Lesson {current} of {total}
        </span>
        <span className="font-semibold text-foreground">{pct}% complete</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

// ─── Paywall overlay shown in content area when lesson requires subscription ─
function PaywallOverlay({
  lessonTitle,
  onUpgrade,
}: {
  lessonTitle: string;
  onUpgrade: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 px-6 text-center space-y-5"
      data-ocid="paywall-overlay"
    >
      <div className="w-20 h-20 rounded-3xl bg-amber-400/15 border-2 border-amber-400/30 flex items-center justify-center">
        <Crown className="w-10 h-10 text-amber-500" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Badge className="bg-amber-400/20 text-amber-600 border-amber-400/40 text-xs font-bold">
            Premium
          </Badge>
        </div>
        <h3 className="font-display font-bold text-xl text-foreground">
          Premium Lesson
        </h3>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          <span className="font-medium text-foreground">
            &ldquo;{lessonTitle}&rdquo;
          </span>{" "}
          is part of the premium plan. Upgrade to unlock this and all future
          lessons.
        </p>
      </div>

      <div className="bg-muted/40 border border-border rounded-xl p-4 text-left space-y-2 w-full max-w-sm">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          Premium includes
        </p>
        {[
          "All lessons in every module",
          "Full progress tracking & completion badges",
          "Scenario-based content for every topic",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
            <span className="text-sm text-foreground/80">{item}</span>
          </div>
        ))}
      </div>

      <Button
        className="gap-2 font-bold px-8 py-5 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all"
        onClick={onUpgrade}
        data-ocid="btn-upgrade-from-lesson"
      >
        <Crown className="w-5 h-5" />
        Upgrade
      </Button>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────
export default function ModuleDetail() {
  const { id } = useParams({ strict: false });
  const moduleId = id ?? "";

  // Get user identity for per-account progress isolation
  const { user } = useAuth();
  const userId = user?.uid ?? "";

  const { data: mod, isLoading } = useModule(moduleId);
  const lessons = useModuleLessons(moduleId);
  const { isSubscribed, isAdmin } = useSubscription();
  const { data: certificates } = useCertificates();

  // Progress is always empty until a real userId is confirmed —
  // never initialize from localStorage at mount time because userId
  // is "" until the identity resolves, and the save-effect would
  // overwrite real data with {} if we did.
  const [progress, setProgress] = useState<ModuleLessonProgress>({});
  // Tracks the "userId::moduleId" key for which a full load has COMPLETED.
  // Set ONLY after setProgress() has been called for that exact key.
  // Reset to "" immediately when userId or moduleId changes so a fresh
  // load is triggered and the save-effect cannot fire with stale context.
  const progressLoadedRef = useRef("");

  const [activeIndex, setActiveIndex] = useState(0);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [paywallLessonTitle, setPaywallLessonTitle] = useState<string>("");
  const [challengeVisible, setChallengeVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [readingComplete, setReadingComplete] = useState(false);
  const invalidateCertificates = useCertificateQueryClient();
  const markCompleted = useMarkModuleCompleted();
  const [certModalOpen, setCertModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const prevAllCompleted = useRef(false);
  // One-time startup purge: remove any courseProgress keys written with an
  // empty userId segment ("courseProgress--<id>") or the anon prefix.
  // These can exist from older code paths and would cause false progress
  // to appear on CoursesHub for unauthenticated or new users.

  useEffect(() => {
    const allKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) allKeys.push(k);
    }
    for (const key of allKeys) {
      if (
        key.startsWith("courseProgress--") ||
        key.startsWith(`courseProgress-${ANON_PREFIX}-`)
      ) {
        localStorage.removeItem(key);
      }
    }
  }, []);

  // Reset the loaded-ref whenever userId or moduleId changes so the load
  // effect below re-runs and the save-effect cannot fire with stale context.
  // This must be a separate effect that runs BEFORE the load effect.
  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional — reset ref whenever userId or moduleId changes
  useEffect(() => {
    progressLoadedRef.current = "";
  }, [userId, moduleId]);

  // Load progress from localStorage ONLY when we have a real, non-empty
  // userId AND haven't already loaded for this userId+moduleId combination.
  // progressLoadedRef is set AFTER setProgress() so the save-effect never
  // fires with an incomplete load context.
  useEffect(() => {
    // Guard 1: require a non-empty, non-anonymous userId before touching localStorage.
    if (!userId || userId.length === 0) {
      // Unauthenticated: always reset to empty progress and lesson 0.
      setProgress({});
      setActiveIndex(0);
      return;
    }
    const key = `${userId}::${moduleId}`;
    // Guard 2: skip if we already completed a load for this exact key.
    if (progressLoadedRef.current === key) return;
    // Step 1: purge all anon-keyed entries AND any foreign-principal entries
    // BEFORE reading our own key, so stale data cannot bleed in.
    clearAnonProgress(userId);
    // Step 2: load persisted progress for this user+module.
    const saved = loadProgress(moduleId, userId);
    // Step 3: commit the loaded state.
    setProgress(saved);
    // Step 4: mark load as complete AFTER setProgress so the save-effect
    // only activates once we have real data in state.
    progressLoadedRef.current = key;
    // Jump to first incomplete lesson (or stay at 0 if no progress exists).
    // Only set activeIndex > 0 when saved data belongs to this authenticated
    // user AND at least one lesson is explicitly marked completed.
    const completedEntries = Object.entries(saved).filter(
      ([, lp]) => (lp as LessonProgress | undefined)?.completed === true,
    );
    if (completedEntries.length === 0) {
      setActiveIndex(0);
      return;
    }
    // Find the first lesson index NOT marked completed.
    // Use only the actual saved keys range rather than a giant synthetic array.
    const maxKey = Math.max(...completedEntries.map(([k]) => Number(k)));
    let firstIncomplete = 0;
    for (let i = 0; i <= maxKey + 1; i++) {
      if (!(saved[i] as LessonProgress | undefined)?.completed) {
        firstIncomplete = i;
        break;
      }
    }
    setActiveIndex(firstIncomplete);
  }, [userId, moduleId]);

  // Persist progress to localStorage only when BOTH conditions are true
  // simultaneously (atomic check): userId is a non-empty string AND
  // progressLoadedRef matches the current userId+moduleId key.
  // This prevents the save-effect from overwriting real data with the
  // initial empty {} state that exists before the load effect runs.
  useEffect(() => {
    const key = `${userId}::${moduleId}`;
    // Atomic guard: userId must be truthy AND load must have completed for
    // this exact userId+moduleId pair before we ever write to localStorage.
    if (!userId || userId.length === 0 || progressLoadedRef.current !== key)
      return;
    saveProgress(moduleId, userId, progress);
  }, [moduleId, userId, progress]);

  // Update courseProgress key when progress changes so CoursesHub reads accurate button states
  // This effect runs AFTER completedLessonsCount is computed below — moved to after that declaration.
  const resetChallengeUi = useCallback(() => {
    setChallengeVisible(false);
    setSelectedAnswer(null);
    setAnswered(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // biome-ignore lint/correctness/useExhaustiveDependencies: resetChallengeUi is stable; we only need activeIndex as the trigger
  useEffect(() => {
    resetChallengeUi();
  }, [activeIndex]);

  // Sync readingComplete state when activeIndex or progress changes
  useEffect(() => {
    setReadingComplete(!!(progress[activeIndex] as LessonProgress | undefined)?.completed);
  }, [activeIndex, progress]);

  const activeLesson = lessons[activeIndex] ?? null;
  const lessonProgress = progress[activeIndex] as LessonProgress | undefined;
  const isLessonCompleted = !!lessonProgress?.completed;
  const activeIsAccessible = canAccessLesson(
    activeIndex,
    isSubscribed,
    isAdmin,
  );
  const completedLessonsCount = Object.values(progress).filter(
    (lp) => (lp as LessonProgress).completed,
  ).length;
  const allCompleted =
    lessons.length > 0 && completedLessonsCount === lessons.length;

  // Persist per-course progress % to localStorage so CoursesHub shows correct button state
  useEffect(() => {
    if (!userId || userId.length === 0 || lessons.length === 0) return;
    const pct = Math.round((completedLessonsCount / lessons.length) * 100);
    try {
      localStorage.setItem(
        `courseProgress-${userId}-${moduleId}`,
        JSON.stringify(pct),
      );
    } catch {
      // ignore
    }
    // Also persist to Firestore so Dashboard's "Continue Learning" reads real progress
    if (pct > 0 && pct < 100) {
      saveProgress(userId, { moduleProgress: { [moduleId]: pct } }).catch(() => {});
    }
  }, [userId, moduleId, completedLessonsCount, lessons.length]);

  const courseCertificate = certificates?.find((c) => c.courseId === moduleId);

  const certModalOpened = useRef(false);

  // When allCompleted first transitions to true, call markModuleCompleted on the backend
  // so progress is persisted, then invalidate certificates so the certificate is fetched.
  useEffect(() => {
    if (allCompleted && !prevAllCompleted.current) {
      markCompleted.mutate(moduleId);
      invalidateCertificates();
    }
    prevAllCompleted.current = allCompleted;
  }, [allCompleted, invalidateCertificates, markCompleted, moduleId]);

  // Open certificate modal once courseCertificate becomes available after completion
  useEffect(() => {
    if (allCompleted && courseCertificate && !certModalOpened.current) {
      certModalOpened.current = true;
      setCertModalOpen(true);
    }
  }, [allCompleted, courseCertificate]);

  const isUnlocked = useCallback(
    (index: number) => {
      if (index === 0) return true;
      return !!(progress[index - 1] as LessonProgress | undefined)?.completed;
    },
    [progress],
  );

  const openPaywall = (title: string) => {
    setPaywallLessonTitle(title);
    setPaywallOpen(true);
  };

  const handleLessonSelect = (index: number) => {
    const unlocked = isUnlocked(index);
    if (!unlocked) return;
    const accessible = canAccessLesson(moduleId, index, subscriptionData, isAdmin);
    if (!accessible) {
      openPaywall(lessons[index]?.title ?? "");
      return;
    }
    setActiveIndex(index);
  };

  const handleAnswer = (answer: string) => {
    if (answered || !activeLesson) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    const isCorrect = answer === activeLesson.miniChallenge.correctAnswer;
    if (isCorrect && !isLessonCompleted) {
      const updated: ModuleLessonProgress = {
        ...progress,
        [activeIndex]: { completed: true },
      };
      setProgress(updated);
    }
  };

  const goToNext = () => {
    if (activeIndex < lessons.length - 1) {
      const nextIndex = activeIndex + 1;
      const nextAccessible = canAccessLesson(nextIndex, isSubscribed, isAdmin);
      if (!nextAccessible) {
        openPaywall(lessons[nextIndex]?.title ?? "");
        return;
      }
      setActiveIndex(nextIndex);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 sm:p-8 max-w-6xl mx-auto space-y-6">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-10 w-80" />
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-96 rounded-xl" />
        </div>
      </div>
    );
  }

  if (!mod) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-4xl">🔍</p>
        <h2 className="font-display font-bold text-xl text-foreground">
          Module not found
        </h2>
        <Link to="/modules">
          <Button variant="outline">Back to Modules</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-5">
      <PaywallModal
        open={paywallOpen}
        onOpenChange={setPaywallOpen}
        lessonTitle={paywallLessonTitle}
      />

      {/* Certificate Celebration Modal */}
      <AnimatePresence>
        {certModalOpen && courseCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            data-ocid="certificate.celebration_modal"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
              onClick={() => setCertModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                type="button"
                data-ocid="certificate.close_button"
                onClick={() => setCertModalOpen(false)}
                className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close certificate"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="text-center pt-8 pb-4 px-6">
                <div className="text-5xl mb-3">🎓</div>
                <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                  Congratulations!
                </h2>
                <p className="text-muted-foreground text-sm">
                  You've completed{" "}
                  <span className="font-semibold text-foreground">
                    {mod.title}
                  </span>
                  . Here's your Intern Certificate!
                </p>
              </div>
              <div className="px-6 pb-3">
                <CertificateCard
                  certificate={courseCertificate}
                  userName="Learner"
                  isIntern
                  onDownload={() =>
                    downloadInternCertificateAsPdf(courseCertificate, "Learner")
                  }
                  compact
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-border bg-muted/20">
                <button
                  type="button"
                  data-ocid="certificate.cancel_button"
                  onClick={() => setCertModalOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    data-ocid="certificate.view-all.button"
                    onClick={() => setCertModalOpen(false)}
                    asChild
                  >
                    <Link to="/certificates">View All Certificates</Link>
                  </Button>
                  <Button
                    size="sm"
                    data-ocid="certificate.modal_download_button"
                    onClick={() =>
                      downloadInternCertificateAsPdf(
                        courseCertificate,
                        "Learner",
                      )
                    }
                    className="gap-1.5"
                  >
                    <Trophy className="w-3.5 h-3.5" /> Download PDF
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back */}
      <Link
        to="/modules"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Modules
      </Link>

      {/* Header card */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-start gap-4">
          <div className="text-4xl sm:text-5xl">{mod.icon}</div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-1.5">
              <Badge
                className={`text-xs border ${getCategoryColor(mod.category)}`}
              >
                {formatCategory(mod.category)}
              </Badge>
              <Badge variant="outline" className="text-xs gap-1">
                <BookOpen className="w-3 h-3" />
                {lessons.length} lessons
              </Badge>
              {!isSubscribed && !isAdmin && (
                <Badge className="text-xs gap-1 bg-amber-400/15 text-amber-600 border-amber-400/30">
                  <Crown className="w-3 h-3" />2 free ·{" "}
                  {Math.max(0, lessons.length - 2)} premium
                </Badge>
              )}
            </div>
            <h1 className="font-display font-bold text-xl sm:text-2xl text-foreground">
              {mod.title}
            </h1>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {mod.description}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 min-w-[120px]">
            <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/25 rounded-xl px-3 py-1.5">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="font-bold text-sm text-primary">
                {completedLessonsCount}/{lessons.length}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">lessons done</span>
          </div>
        </div>
        <div className="mt-4">
          <LessonProgressBar
            current={completedLessonsCount}
            total={lessons.length}
          />
        </div>
      </motion.div>

      {/* Mobile lesson stepper */}
      <div className="lg:hidden overflow-x-auto pb-1 -mx-4 px-4">
        <div className="flex gap-2 min-w-max">
          {lessons.map((lesson, i) => {
            const done = !!(progress[i] as LessonProgress | undefined)
              ?.completed;
            const unlocked = isUnlocked(i);
            const accessible = canAccessLesson(i, isSubscribed, isAdmin);
            const active = i === activeIndex;
            const isPremiumLocked = !isAdmin && unlocked && !accessible;
            return (
              <button
                // biome-ignore lint/suspicious/noArrayIndexKey: lesson index is stable identity
                key={i}
                type="button"
                data-ocid={`lesson-step-${i}`}
                disabled={!unlocked && !isPremiumLocked}
                onClick={() => handleLessonSelect(i)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl border text-xs font-medium transition-all min-w-[80px] ${
                  active
                    ? "border-primary bg-primary/10 text-primary shadow-[0_0_0_2px_hsl(var(--primary)/0.3)]"
                    : done
                      ? "border-green-500/30 bg-green-500/10 text-green-600"
                      : isPremiumLocked
                        ? "border-amber-400/30 bg-amber-400/10 text-amber-600 cursor-pointer"
                        : unlocked
                          ? "border-border bg-card text-muted-foreground hover:border-primary/40"
                          : "border-border bg-muted/30 text-muted-foreground/50 cursor-not-allowed"
                }`}
              >
                <span className="text-base">
                  {done ? (
                    "✅"
                  ) : isPremiumLocked ? (
                    <Crown className="w-4 h-4 text-amber-500" />
                  ) : !unlocked ? (
                    "🔒"
                  ) : (
                    `${i + 1}`
                  )}
                </span>
                <span className="truncate max-w-[72px] text-center leading-tight">
                  {lesson.title.split(":")[0].split("—")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 items-start">
        {/* Desktop sidebar */}
        <div className="hidden lg:flex flex-col gap-2 sticky top-6">
          <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide px-1 mb-1">
            Lessons
          </h3>
          {lessons.map((lesson, i) => {
            const done = !!(progress[i] as LessonProgress | undefined)
              ?.completed;
            const unlocked = isUnlocked(i);
            const accessible = canAccessLesson(i, isSubscribed, isAdmin);
            const active = i === activeIndex;
            const isPremiumLocked = !isAdmin && unlocked && !accessible;
            return (
              <motion.button
                // biome-ignore lint/suspicious/noArrayIndexKey: lesson index is stable identity
                key={i}
                data-ocid={`lesson-sidebar-${i}`}
                disabled={!unlocked && !isPremiumLocked}
                onClick={() => handleLessonSelect(i)}
                whileHover={unlocked ? { x: 2 } : {}}
                className={`w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${
                  active
                    ? "border-primary bg-primary/10 shadow-[0_0_0_2px_hsl(var(--primary)/0.25)]"
                    : done
                      ? "border-green-500/25 bg-green-500/8 hover:bg-green-500/15"
                      : isPremiumLocked
                        ? "border-amber-400/25 bg-amber-400/8 hover:bg-amber-400/15 cursor-pointer"
                        : unlocked
                          ? "border-border bg-card hover:border-primary/40 hover:bg-muted/40"
                          : "border-border bg-muted/20 cursor-not-allowed opacity-60"
                }`}
              >
                <span className="text-lg flex-shrink-0">
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  ) : isPremiumLocked ? (
                    <Crown className="w-4 h-4 text-amber-400/70" />
                  ) : !unlocked ? (
                    <Lock className="w-4 h-4 text-muted-foreground/50" />
                  ) : (
                    <span className="w-5 h-5 rounded-full border-2 border-current text-xs font-bold flex items-center justify-center text-primary">
                      {i + 1}
                    </span>
                  )}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-xs font-medium leading-tight line-clamp-2 ${
                      active
                        ? "text-primary"
                        : done
                          ? "text-foreground"
                          : isPremiumLocked
                            ? "text-amber-600"
                            : "text-muted-foreground"
                    }`}
                  >
                    {lesson.title}
                  </p>
                  {done && (
                    <span className="inline-flex items-center gap-0.5 mt-0.5 text-[10px] text-green-600 font-semibold">
                      <CheckCircle2 className="w-2.5 h-2.5" />
                      Done
                    </span>
                  )}
                  {isPremiumLocked && (
                    <span className="inline-flex items-center gap-0.5 mt-0.5 text-[10px] text-amber-500 font-semibold">
                      <Crown className="w-2.5 h-2.5" />
                      Premium
                    </span>
                  )}
                </div>
                {active && (
                  <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                )}
              </motion.button>
            );
          })}

          {allCompleted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-2 p-3 rounded-xl bg-green-500/10 border border-green-500/25 text-center"
            >
              <Trophy className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <p className="text-xs font-bold text-green-700">
                Module Complete!
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                All {lessons.length} lessons done
              </p>
            </motion.div>
          )}

          {!isSubscribed && !isAdmin && lessons.length > 2 && (
            <motion.button
              type="button"
              onClick={() => openPaywall("Premium Lessons")}
              whileHover={{ scale: 1.02 }}
              className="mt-3 p-3 rounded-xl bg-amber-400/10 border border-amber-400/25 text-center cursor-pointer hover:bg-amber-400/20 transition-colors"
              data-ocid="sidebar-upgrade-cta"
            >
              <Crown className="w-5 h-5 text-amber-500 mx-auto mb-1" />
              <p className="text-xs font-bold text-amber-600">
                Upgrade to Premium
              </p>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                ₹199 lifetime · Unlock all {lessons.length} lessons
              </p>
            </motion.button>
          )}
        </div>

        {/* Lesson content area */}
        <div ref={contentRef} className="space-y-4">
          {activeLesson ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {!activeIsAccessible ? (
                  <Card className="border-2 border-amber-400/30 bg-card overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="p-5 sm:p-6 blur-sm pointer-events-none select-none opacity-50">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                            Lesson {activeIndex + 1} of {lessons.length}
                          </p>
                          <h2 className="font-display font-bold text-lg sm:text-xl text-foreground">
                            {activeLesson.title}
                          </h2>
                          <div
                            className="text-foreground/90 leading-relaxed text-sm sm:text-base mt-3 prose-lesson line-clamp-4 opacity-70"
                            // biome-ignore lint/security/noDangerouslySetInnerHtml: content comes from trusted app data files, not user input
                            dangerouslySetInnerHTML={{
                              __html: activeLesson.content.split("\n\n")[0],
                            }}
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                      </div>
                      <PaywallOverlay
                        lessonTitle={activeLesson.title}
                        onUpgrade={() => openPaywall(activeLesson.title)}
                      />
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    <Card className="border-2 border-primary/40 bg-card">
                      <CardContent className="p-5 sm:p-6">
                        <div className="mb-4">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                            Lesson {activeIndex + 1} of {lessons.length}
                          </p>
                          <h2 className="font-display font-bold text-lg sm:text-xl text-foreground mb-3">
                            {activeLesson.title}
                          </h2>
                          <LessonProgressBar
                            current={activeIndex + 1}
                            total={lessons.length}
                          />
                        </div>
                        <InteractiveLessonRenderer 
                          content={activeLesson.content}
                          isCompleted={isLessonCompleted}
                          onReadingComplete={() => setReadingComplete(true)}
                        />
                        <AnimatePresence>
                          {readingComplete && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-5 p-4 rounded-xl bg-primary/8 border border-primary/20 flex gap-3"
                            >
                              <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">
                                  ⚡ Fun Fact
                                </p>
                                <p
                                  className="text-sm text-foreground/80 leading-relaxed"
                                  // biome-ignore lint/security/noDangerouslySetInnerHtml: content comes from trusted app data files, not user input
                                  dangerouslySetInnerHTML={{
                                    __html: activeLesson.funFact,
                                  }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </CardContent>
                    </Card>

                    {!isLessonCompleted && !challengeVisible && readingComplete && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center"
                      >
                        <Button
                          data-ocid="btn-take-challenge"
                          size="lg"
                          onClick={() => setChallengeVisible(true)}
                          className="gap-2 font-bold px-8 py-5 text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all"
                        >
                          <CheckCircle2 className="w-5 h-5" />
                          Take the Challenge!
                        </Button>
                      </motion.div>
                    )}

                    <AnimatePresence>
                      {challengeVisible && (
                        <motion.div
                          initial={{ opacity: 0, y: 16, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                        >
                          <Card className="border-2 border-primary/30 bg-card overflow-visible relative">
                            <CardContent className="p-5 sm:p-6 space-y-4">
                              <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-primary/10">
                                  <CheckCircle2 className="w-4 h-4 text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-base text-foreground">
                                  Mini Challenge
                                </h3>
                              </div>
                              <p
                                className="text-sm sm:text-base font-medium text-foreground leading-relaxed"
                                // biome-ignore lint/security/noDangerouslySetInnerHtml: content comes from trusted app data files, not user input
                                dangerouslySetInnerHTML={{
                                  __html: activeLesson.miniChallenge.question,
                                }}
                              />
                              <div
                                className="space-y-2.5"
                                data-ocid="challenge-options"
                              >
                                {(activeLesson.miniChallenge.options ?? []).map(
                                  (option, oi) => {
                                    const isCorrect =
                                      option ===
                                      activeLesson.miniChallenge.correctAnswer;
                                    const isSelected =
                                      option === selectedAnswer;
                                    let optionStyle =
                                      "border-border bg-card hover:border-primary/50 hover:bg-primary/5";
                                    if (answered) {
                                      if (isCorrect)
                                        optionStyle =
                                          "border-green-500 bg-green-500/10 text-green-700";
                                      else if (isSelected && !isCorrect)
                                        optionStyle =
                                          "border-destructive bg-destructive/10 text-destructive";
                                      else
                                        optionStyle =
                                          "border-border bg-muted/30 text-muted-foreground";
                                    }
                                    return (
                                      <motion.button
                                        // biome-ignore lint/suspicious/noArrayIndexKey: option index is stable identity for this challenge
                                        key={oi}
                                        data-ocid={`option-${oi}`}
                                        disabled={answered}
                                        onClick={() => handleAnswer(option)}
                                        whileHover={!answered ? { x: 3 } : {}}
                                        whileTap={
                                          !answered ? { scale: 0.98 } : {}
                                        }
                                        className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-3 ${optionStyle} ${!answered ? "cursor-pointer" : "cursor-default"}`}
                                      >
                                        <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                                          {String.fromCharCode(65 + oi)}
                                        </span>
                                        <span className="flex-1">{option}</span>
                                        {answered && isCorrect && (
                                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        )}
                                      </motion.button>
                                    );
                                  },
                                )}
                              </div>

                              <AnimatePresence>
                                {answered && (
                                  <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl border ${
                                      selectedAnswer ===
                                      activeLesson.miniChallenge.correctAnswer
                                        ? "bg-green-500/10 border-green-500/30"
                                        : "bg-destructive/8 border-destructive/25"
                                    }`}
                                  >
                                    <p className="font-bold text-sm mb-1">
                                      {selectedAnswer ===
                                      activeLesson.miniChallenge
                                        .correctAnswer ? (
                                        <span className="text-green-600">
                                          ✅ Correct! Lesson complete!
                                        </span>
                                      ) : (
                                        <span className="text-destructive">
                                          Not quite — but that's how we learn!
                                        </span>
                                      )}
                                    </p>
                                    <p
                                      className="text-sm text-muted-foreground leading-relaxed"
                                      // biome-ignore lint/security/noDangerouslySetInnerHtml: content comes from trusted app data files, not user input
                                      dangerouslySetInnerHTML={{
                                        __html:
                                          activeLesson.miniChallenge
                                            .explanation,
                                      }}
                                    />
                                    {selectedAnswer !==
                                      activeLesson.miniChallenge
                                        .correctAnswer && (
                                      <Button
                                        data-ocid="btn-retry-challenge"
                                        size="sm"
                                        variant="outline"
                                        className="mt-3"
                                        onClick={() => {
                                          setSelectedAnswer(null);
                                          setAnswered(false);
                                        }}
                                      >
                                        Try Again
                                      </Button>
                                    )}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {isLessonCompleted && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-green-500/10 border border-green-500/25 text-green-600 text-sm font-semibold"
                        data-ocid="lesson-completed-badge"
                      >
                        <CheckCircle2 className="w-5 h-5" />✓ Lesson Complete
                      </motion.div>
                    )}
                  </>
                )}

                {/* Navigation row */}
                <div className="flex items-center justify-between pt-1">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={activeIndex === 0}
                    onClick={() => setActiveIndex(activeIndex - 1)}
                    data-ocid="btn-prev-lesson"
                    className="gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Previous
                  </Button>
                  {activeIndex < lessons.length - 1 ? (
                    <Button
                      size="sm"
                      disabled={!activeIsAccessible || !isLessonCompleted}
                      onClick={goToNext}
                      data-ocid="btn-next-lesson"
                      className="gap-1.5"
                    >
                      Next Lesson <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      {courseCertificate && (
                        <Button
                          size="sm"
                          variant="outline"
                          data-ocid="btn-view-certificate"
                          onClick={() => setCertModalOpen(true)}
                          className="gap-1.5"
                        >
                          <Trophy className="w-4 h-4" /> View Certificate
                        </Button>
                      )}
                      <Link to="/quiz">
                        <Button
                          size="sm"
                          disabled={!activeIsAccessible || !isLessonCompleted}
                          data-ocid="cta-take-quiz-from-module"
                          className="gap-1.5"
                        >
                          <Trophy className="w-4 h-4" /> Take Module Quiz
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <Card className="border-border bg-muted/20">
              <CardContent className="p-8 text-center space-y-3">
                <p className="text-4xl">📚</p>
                <p className="text-foreground font-semibold">
                  No lessons available yet
                </p>
                <p className="text-muted-foreground text-sm">
                  Content for this module is coming soon.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Module completion celebration */}
          <AnimatePresence>
            {allCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-green-500/15 to-primary/15 border-2 border-green-500/30 text-center space-y-3"
                data-ocid="module-completion-card"
              >
                <div className="text-5xl">🏆</div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Module Complete!
                </h3>
                <p className="text-muted-foreground text-sm">
                  You completed all{" "}
                  <span className="font-bold text-primary">
                    {lessons.length} lessons
                  </span>{" "}
                  in this module. Great work!
                </p>
                <div className="flex gap-3 justify-center flex-wrap pt-2">
                  <Link to="/modules">
                    <Button
                      variant="outline"
                      size="sm"
                      data-ocid="btn-back-modules-complete"
                    >
                      ← Explore More Modules
                    </Button>
                  </Link>
                  {courseCertificate ? (
                    <Button
                      size="sm"
                      data-ocid="btn-view-certificate-from-complete"
                      onClick={() => setCertModalOpen(true)}
                      className="gap-1.5"
                    >
                      <Trophy className="w-4 h-4" /> View Certificate
                    </Button>
                  ) : (
                    <Link to="/quiz">
                      <Button
                        size="sm"
                        data-ocid="cta-quiz-from-complete"
                        className="gap-1.5"
                      >
                        <Trophy className="w-4 h-4" /> Take the Quiz
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
