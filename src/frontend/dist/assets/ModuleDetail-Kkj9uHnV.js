import { i as useParams, a as useInternetIdentity, u as useSubscription, r as reactExports, j as jsxRuntimeExports, e as Skeleton, L as Link, d as Button, P as PaywallModal, m as motion, X, f as Badge, B as BookOpen, C as Crown, k as CircleCheck, l as Lock, S as Sparkles, n as canAccessLesson } from "./index-DrrDo776.js";
import { u as useCertificates, a as useCertificateQueryClient, C as CertificateCard, b as downloadInternCertificateAsPdf } from "./pdfDownload-6AlDs2fI.js";
import { C as Card, a as CardContent } from "./card-_4TY3EGm.js";
import { a as useModule, b as useMarkModuleCompleted, c as useModuleLessons } from "./useModules-BqKd_e15.js";
import { a as formatCategory, g as getCategoryColor } from "./formatters-Ci1eEvah.js";
import { A as AnimatePresence } from "./index-UbTf7HyD.js";
import { T as Trophy } from "./trophy-BqwxHwfZ.js";
import { A as ArrowLeft } from "./arrow-left-EcfAP_Tl.js";
import { C as ChevronRight } from "./chevron-right-2msMOpKz.js";
import { A as ArrowRight } from "./arrow-right-D4OuVnn7.js";
import "./useMutation-hdUPihXR.js";
const ANON_PREFIX = "anon";
function getProgressKey(moduleId, userId) {
  const safeId = userId && userId.length > 0 ? userId : ANON_PREFIX;
  return `lessonProgress-${safeId}-${moduleId}`;
}
function loadProgress(moduleId, userId) {
  if (!userId || userId.length === 0) return {};
  try {
    const raw = localStorage.getItem(getProgressKey(moduleId, userId));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
function saveProgress(moduleId, userId, progress) {
  if (!userId || userId.length === 0) return;
  localStorage.setItem(
    getProgressKey(moduleId, userId),
    JSON.stringify(progress)
  );
}
function clearAnonProgress(currentUserId) {
  const allKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k) allKeys.push(k);
  }
  for (const key of allKeys) {
    const isLessonKey = key.startsWith("lessonProgress-");
    const isCourseKey = key.startsWith("courseProgress-");
    if (!isLessonKey && !isCourseKey) continue;
    if (isLessonKey) {
      if (key.startsWith(`lessonProgress-${ANON_PREFIX}-`)) {
        localStorage.removeItem(key);
        continue;
      }
      if (currentUserId && !key.startsWith(`lessonProgress-${currentUserId}-`)) {
        localStorage.removeItem(key);
      }
    }
    if (isCourseKey) {
      if (key.startsWith(`courseProgress-${ANON_PREFIX}-`) || key.startsWith("courseProgress--")) {
        localStorage.removeItem(key);
        continue;
      }
      if (currentUserId && !key.startsWith(`courseProgress-${currentUserId}-`)) {
        localStorage.removeItem(key);
      }
    }
  }
}
function LessonProgressBar({
  current,
  total
}) {
  const pct = total > 0 ? Math.round(current / total * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Lesson ",
        current,
        " of ",
        total
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
        pct,
        "% complete"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "h-full bg-primary rounded-full",
        initial: { width: 0 },
        animate: { width: `${pct}%` },
        transition: { duration: 0.6, ease: "easeOut" }
      }
    ) })
  ] });
}
function PaywallOverlay({
  lessonTitle,
  onUpgrade
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      className: "flex flex-col items-center justify-center py-12 px-6 text-center space-y-5",
      "data-ocid": "paywall-overlay",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-3xl bg-amber-400/15 border-2 border-amber-400/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-10 h-10 text-amber-500" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-amber-400/20 text-amber-600 border-amber-400/40 text-xs font-bold", children: "Premium" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: "Premium Lesson" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm max-w-xs leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
              "“",
              lessonTitle,
              "”"
            ] }),
            " ",
            "is part of the premium plan. Upgrade to unlock this and all future lessons."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted/40 border border-border rounded-xl p-4 text-left space-y-2 w-full max-w-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Premium includes" }),
          [
            "All lessons in every module",
            "Full progress tracking & completion badges",
            "Scenario-based content for every topic"
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-green-500 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/80", children: item })
          ] }, item))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            className: "gap-2 font-bold px-8 py-5 text-base rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all",
            onClick: onUpgrade,
            "data-ocid": "btn-upgrade-from-lesson",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-5 h-5" }),
              "Upgrade"
            ]
          }
        )
      ]
    }
  );
}
function ModuleDetail() {
  const { id } = useParams({ strict: false });
  const moduleId = id ?? "";
  const { identity } = useInternetIdentity();
  const userId = (identity == null ? void 0 : identity.getPrincipal().toText()) ?? "";
  const { data: mod, isLoading } = useModule(moduleId);
  const lessons = useModuleLessons(moduleId);
  const { isSubscribed, isAdmin } = useSubscription();
  const { data: certificates } = useCertificates();
  const [progress, setProgress] = reactExports.useState({});
  const progressLoadedRef = reactExports.useRef("");
  const [activeIndex, setActiveIndex] = reactExports.useState(0);
  const [paywallOpen, setPaywallOpen] = reactExports.useState(false);
  const [paywallLessonTitle, setPaywallLessonTitle] = reactExports.useState("");
  const [challengeVisible, setChallengeVisible] = reactExports.useState(false);
  const [selectedAnswer, setSelectedAnswer] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const invalidateCertificates = useCertificateQueryClient();
  const markCompleted = useMarkModuleCompleted();
  const [certModalOpen, setCertModalOpen] = reactExports.useState(false);
  const contentRef = reactExports.useRef(null);
  const prevAllCompleted = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const allKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k) allKeys.push(k);
    }
    for (const key of allKeys) {
      if (key.startsWith("courseProgress--") || key.startsWith(`courseProgress-${ANON_PREFIX}-`)) {
        localStorage.removeItem(key);
      }
    }
  }, []);
  reactExports.useEffect(() => {
    progressLoadedRef.current = "";
  }, [userId, moduleId]);
  reactExports.useEffect(() => {
    var _a;
    if (!userId || userId.length === 0) {
      setProgress({});
      setActiveIndex(0);
      return;
    }
    const key = `${userId}::${moduleId}`;
    if (progressLoadedRef.current === key) return;
    clearAnonProgress(userId);
    const saved = loadProgress(moduleId, userId);
    setProgress(saved);
    progressLoadedRef.current = key;
    const completedEntries = Object.entries(saved).filter(
      ([, lp]) => (lp == null ? void 0 : lp.completed) === true
    );
    if (completedEntries.length === 0) {
      setActiveIndex(0);
      return;
    }
    const maxKey = Math.max(...completedEntries.map(([k]) => Number(k)));
    let firstIncomplete = 0;
    for (let i = 0; i <= maxKey + 1; i++) {
      if (!((_a = saved[i]) == null ? void 0 : _a.completed)) {
        firstIncomplete = i;
        break;
      }
    }
    setActiveIndex(firstIncomplete);
  }, [userId, moduleId]);
  reactExports.useEffect(() => {
    const key = `${userId}::${moduleId}`;
    if (!userId || userId.length === 0 || progressLoadedRef.current !== key)
      return;
    saveProgress(moduleId, userId, progress);
  }, [moduleId, userId, progress]);
  const resetChallengeUi = reactExports.useCallback(() => {
    var _a;
    setChallengeVisible(false);
    setSelectedAnswer(null);
    setAnswered(false);
    (_a = contentRef.current) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  reactExports.useEffect(() => {
    resetChallengeUi();
  }, [activeIndex]);
  const activeLesson = lessons[activeIndex] ?? null;
  const lessonProgress = progress[activeIndex];
  const isLessonCompleted = !!(lessonProgress == null ? void 0 : lessonProgress.completed);
  const activeIsAccessible = canAccessLesson(
    activeIndex,
    isSubscribed,
    isAdmin
  );
  const completedLessonsCount = Object.values(progress).filter(
    (lp) => lp.completed
  ).length;
  const allCompleted = lessons.length > 0 && completedLessonsCount === lessons.length;
  reactExports.useEffect(() => {
    if (!userId || userId.length === 0 || lessons.length === 0) return;
    const pct = Math.round(completedLessonsCount / lessons.length * 100);
    try {
      localStorage.setItem(
        `courseProgress-${userId}-${moduleId}`,
        JSON.stringify(pct)
      );
    } catch {
    }
  }, [userId, moduleId, completedLessonsCount, lessons.length]);
  const courseCertificate = certificates == null ? void 0 : certificates.find((c) => c.courseId === moduleId);
  const certModalOpened = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (allCompleted && !prevAllCompleted.current) {
      markCompleted.mutate(moduleId);
      invalidateCertificates();
    }
    prevAllCompleted.current = allCompleted;
  }, [allCompleted, invalidateCertificates, markCompleted, moduleId]);
  reactExports.useEffect(() => {
    if (allCompleted && courseCertificate && !certModalOpened.current) {
      certModalOpened.current = true;
      setCertModalOpen(true);
    }
  }, [allCompleted, courseCertificate]);
  const isUnlocked = reactExports.useCallback(
    (index) => {
      var _a;
      if (index === 0) return true;
      return !!((_a = progress[index - 1]) == null ? void 0 : _a.completed);
    },
    [progress]
  );
  const openPaywall = (title) => {
    setPaywallLessonTitle(title);
    setPaywallOpen(true);
  };
  const handleLessonSelect = (index) => {
    var _a;
    const unlocked = isUnlocked(index);
    if (!unlocked) return;
    const accessible = canAccessLesson(index, isSubscribed, isAdmin);
    if (!accessible) {
      openPaywall(((_a = lessons[index]) == null ? void 0 : _a.title) ?? "");
      return;
    }
    setActiveIndex(index);
  };
  const handleAnswer = (answer) => {
    if (answered || !activeLesson) return;
    setSelectedAnswer(answer);
    setAnswered(true);
    const isCorrect = answer === activeLesson.miniChallenge.correctAnswer;
    if (isCorrect && !isLessonCompleted) {
      const updated = {
        ...progress,
        [activeIndex]: { completed: true }
      };
      setProgress(updated);
    }
  };
  const goToNext = () => {
    var _a;
    if (activeIndex < lessons.length - 1) {
      const nextIndex = activeIndex + 1;
      const nextAccessible = canAccessLesson(nextIndex, isSubscribed, isAdmin);
      if (!nextAccessible) {
        openPaywall(((_a = lessons[nextIndex]) == null ? void 0 : _a.title) ?? "");
        return;
      }
      setActiveIndex(nextIndex);
    }
  };
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 max-w-6xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-6 w-32" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-80" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 rounded-xl" })
      ] })
    ] });
  }
  if (!mod) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl", children: "🔍" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl text-foreground", children: "Module not found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", children: "Back to Modules" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-8 max-w-6xl mx-auto space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaywallModal,
      {
        open: paywallOpen,
        onOpenChange: setPaywallOpen,
        lessonTitle: paywallLessonTitle
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: certModalOpen && courseCertificate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        "data-ocid": "certificate.celebration_modal",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              className: "absolute inset-0 bg-foreground/60 backdrop-blur-sm",
              onClick: () => setCertModalOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9, y: 24 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 12 },
              transition: { duration: 0.35, ease: "easeOut" },
              className: "relative z-10 w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "certificate.close_button",
                    onClick: () => setCertModalOpen(false),
                    className: "absolute top-3 right-3 z-20 p-1.5 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors",
                    "aria-label": "Close certificate",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-8 pb-4 px-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-1", children: "Congratulations!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                    "You've completed",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: mod.title }),
                    ". Here's your Intern Certificate!"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CertificateCard,
                  {
                    certificate: courseCertificate,
                    userName: "Learner",
                    isIntern: true,
                    onDownload: () => downloadInternCertificateAsPdf(courseCertificate, "Learner"),
                    compact: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 px-6 py-4 border-t border-border bg-muted/20", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      "data-ocid": "certificate.cancel_button",
                      onClick: () => setCertModalOpen(false),
                      className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
                      children: "Close"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "outline",
                        "data-ocid": "certificate.view-all.button",
                        onClick: () => setCertModalOpen(false),
                        asChild: true,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/certificates", children: "View All Certificates" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        "data-ocid": "certificate.modal_download_button",
                        onClick: () => downloadInternCertificateAsPdf(
                          courseCertificate,
                          "Learner"
                        ),
                        className: "gap-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3.5 h-3.5" }),
                          " Download PDF"
                        ]
                      }
                    )
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/modules",
        className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Back to Modules"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: -12 },
        animate: { opacity: 1, y: 0 },
        className: "bg-card border border-border rounded-2xl p-5 sm:p-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl", children: mod.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mb-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    className: `text-xs border ${getCategoryColor(mod.category)}`,
                    children: formatCategory(mod.category)
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "text-xs gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3" }),
                  lessons.length,
                  " lessons"
                ] }),
                !isSubscribed && !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "text-xs gap-1 bg-amber-400/15 text-amber-600 border-amber-400/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3 h-3" }),
                  "2 free ·",
                  " ",
                  Math.max(0, lessons.length - 2),
                  " premium"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-xl sm:text-2xl text-foreground", children: mod.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1 line-clamp-2", children: mod.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-1 min-w-[120px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 bg-primary/10 border border-primary/25 rounded-xl px-3 py-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-sm text-primary", children: [
                  completedLessonsCount,
                  "/",
                  lessons.length
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "lessons done" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            LessonProgressBar,
            {
              current: completedLessonsCount,
              total: lessons.length
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden overflow-x-auto pb-1 -mx-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 min-w-max", children: lessons.map((lesson, i) => {
      var _a;
      const done = !!((_a = progress[i]) == null ? void 0 : _a.completed);
      const unlocked = isUnlocked(i);
      const accessible = canAccessLesson(i, isSubscribed, isAdmin);
      const active = i === activeIndex;
      const isPremiumLocked = !isAdmin && unlocked && !accessible;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": `lesson-step-${i}`,
          disabled: !unlocked && !isPremiumLocked,
          onClick: () => handleLessonSelect(i),
          className: `flex flex-col items-center gap-1 px-3 py-2 rounded-xl border text-xs font-medium transition-all min-w-[80px] ${active ? "border-primary bg-primary/10 text-primary shadow-[0_0_0_2px_hsl(var(--primary)/0.3)]" : done ? "border-green-500/30 bg-green-500/10 text-green-600" : isPremiumLocked ? "border-amber-400/30 bg-amber-400/10 text-amber-600 cursor-pointer" : unlocked ? "border-border bg-card text-muted-foreground hover:border-primary/40" : "border-border bg-muted/30 text-muted-foreground/50 cursor-not-allowed"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: done ? "✅" : isPremiumLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 text-amber-500" }) : !unlocked ? "🔒" : `${i + 1}` }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[72px] text-center leading-tight", children: lesson.title.split(":")[0].split("—")[0].trim() })
          ]
        },
        i
      );
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex flex-col gap-2 sticky top-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-sm text-muted-foreground uppercase tracking-wide px-1 mb-1", children: "Lessons" }),
        lessons.map((lesson, i) => {
          var _a;
          const done = !!((_a = progress[i]) == null ? void 0 : _a.completed);
          const unlocked = isUnlocked(i);
          const accessible = canAccessLesson(i, isSubscribed, isAdmin);
          const active = i === activeIndex;
          const isPremiumLocked = !isAdmin && unlocked && !accessible;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              "data-ocid": `lesson-sidebar-${i}`,
              disabled: !unlocked && !isPremiumLocked,
              onClick: () => handleLessonSelect(i),
              whileHover: unlocked ? { x: 2 } : {},
              className: `w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center gap-3 ${active ? "border-primary bg-primary/10 shadow-[0_0_0_2px_hsl(var(--primary)/0.25)]" : done ? "border-green-500/25 bg-green-500/8 hover:bg-green-500/15" : isPremiumLocked ? "border-amber-400/25 bg-amber-400/8 hover:bg-amber-400/15 cursor-pointer" : unlocked ? "border-border bg-card hover:border-primary/40 hover:bg-muted/40" : "border-border bg-muted/20 cursor-not-allowed opacity-60"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg flex-shrink-0", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-500" }) : isPremiumLocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 text-amber-400/70" }) : !unlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-muted-foreground/50" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full border-2 border-current text-xs font-bold flex items-center justify-center text-primary", children: i + 1 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-xs font-medium leading-tight line-clamp-2 ${active ? "text-primary" : done ? "text-foreground" : isPremiumLocked ? "text-amber-600" : "text-muted-foreground"}`,
                      children: lesson.title
                    }
                  ),
                  done && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 mt-0.5 text-[10px] text-green-600 font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-2.5 h-2.5" }),
                    "Done"
                  ] }),
                  isPremiumLocked && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-0.5 mt-0.5 text-[10px] text-amber-500 font-semibold", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-2.5 h-2.5" }),
                    "Premium"
                  ] })
                ] }),
                active && /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-primary flex-shrink-0" })
              ]
            },
            i
          );
        }),
        allCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "mt-2 p-3 rounded-xl bg-green-500/10 border border-green-500/25 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-6 h-6 text-green-600 mx-auto mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-green-700", children: "Module Complete!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                "All ",
                lessons.length,
                " lessons done"
              ] })
            ]
          }
        ),
        !isSubscribed && !isAdmin && lessons.length > 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: () => openPaywall("Premium Lessons"),
            whileHover: { scale: 1.02 },
            className: "mt-3 p-3 rounded-xl bg-amber-400/10 border border-amber-400/25 text-center cursor-pointer hover:bg-amber-400/20 transition-colors",
            "data-ocid": "sidebar-upgrade-cta",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-5 h-5 text-amber-500 mx-auto mb-1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-amber-600", children: "Upgrade to Premium" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: [
                "₹199 lifetime · Unlock all ",
                lessons.length,
                " lessons"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: contentRef, className: "space-y-4", children: [
        activeLesson ? /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 16 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -16 },
            transition: { duration: 0.25 },
            className: "space-y-4",
            children: [
              !activeIsAccessible ? /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-amber-400/30 bg-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 sm:p-6 blur-sm pointer-events-none select-none opacity-50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1", children: [
                      "Lesson ",
                      activeIndex + 1,
                      " of ",
                      lessons.length
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg sm:text-xl text-foreground", children: activeLesson.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "text-foreground/90 leading-relaxed text-sm sm:text-base mt-3 prose-lesson",
                        dangerouslySetInnerHTML: {
                          __html: `${activeLesson.content.split("</p>")[0]}</p>`
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  PaywallOverlay,
                  {
                    lessonTitle: activeLesson.title,
                    onUpgrade: () => openPaywall(activeLesson.title)
                  }
                )
              ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-primary/40 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 sm:p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1", children: [
                      "Lesson ",
                      activeIndex + 1,
                      " of ",
                      lessons.length
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg sm:text-xl text-foreground mb-3", children: activeLesson.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      LessonProgressBar,
                      {
                        current: activeIndex + 1,
                        total: lessons.length
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 6 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.1 },
                      className: "prose-lesson text-foreground/90 leading-relaxed text-sm sm:text-base space-y-3",
                      dangerouslySetInnerHTML: {
                        __html: activeLesson.content
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 8 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.4 },
                      className: "mt-5 p-4 rounded-xl bg-primary/8 border border-primary/20 flex gap-3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-primary flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-primary uppercase tracking-wide mb-1", children: "⚡ Fun Fact" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-sm text-foreground/80 leading-relaxed",
                              dangerouslySetInnerHTML: {
                                __html: activeLesson.funFact
                              }
                            }
                          )
                        ] })
                      ]
                    }
                  )
                ] }) }),
                !isLessonCompleted && !challengeVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 8 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    className: "flex justify-center",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        "data-ocid": "btn-take-challenge",
                        size: "lg",
                        onClick: () => setChallengeVisible(true),
                        className: "gap-2 font-bold px-8 py-5 text-base rounded-xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
                          "Take the Challenge!"
                        ]
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: challengeVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 16, scale: 0.97 },
                    animate: { opacity: 1, y: 0, scale: 1 },
                    exit: { opacity: 0, scale: 0.95 },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-2 border-primary/30 bg-card overflow-visible relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 sm:p-6 space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-1.5 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground", children: "Mini Challenge" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-sm sm:text-base font-medium text-foreground leading-relaxed",
                          dangerouslySetInnerHTML: {
                            __html: activeLesson.miniChallenge.question
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "space-y-2.5",
                          "data-ocid": "challenge-options",
                          children: (activeLesson.miniChallenge.options ?? []).map(
                            (option, oi) => {
                              const isCorrect = option === activeLesson.miniChallenge.correctAnswer;
                              const isSelected = option === selectedAnswer;
                              let optionStyle = "border-border bg-card hover:border-primary/50 hover:bg-primary/5";
                              if (answered) {
                                if (isCorrect)
                                  optionStyle = "border-green-500 bg-green-500/10 text-green-700";
                                else if (isSelected && !isCorrect)
                                  optionStyle = "border-destructive bg-destructive/10 text-destructive";
                                else
                                  optionStyle = "border-border bg-muted/30 text-muted-foreground";
                              }
                              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                motion.button,
                                {
                                  "data-ocid": `option-${oi}`,
                                  disabled: answered,
                                  onClick: () => handleAnswer(option),
                                  whileHover: !answered ? { x: 3 } : {},
                                  whileTap: !answered ? { scale: 0.98 } : {},
                                  className: `w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all flex items-center gap-3 ${optionStyle} ${!answered ? "cursor-pointer" : "cursor-default"}`,
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0", children: String.fromCharCode(65 + oi) }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: option }),
                                    answered && isCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-500 flex-shrink-0" })
                                  ]
                                },
                                oi
                              );
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: answered && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 8 },
                          animate: { opacity: 1, y: 0 },
                          className: `p-4 rounded-xl border ${selectedAnswer === activeLesson.miniChallenge.correctAnswer ? "bg-green-500/10 border-green-500/30" : "bg-destructive/8 border-destructive/25"}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm mb-1", children: selectedAnswer === activeLesson.miniChallenge.correctAnswer ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-600", children: "✅ Correct! Lesson complete!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "Not quite — but that's how we learn!" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "p",
                              {
                                className: "text-sm text-muted-foreground leading-relaxed",
                                dangerouslySetInnerHTML: {
                                  __html: activeLesson.miniChallenge.explanation
                                }
                              }
                            ),
                            selectedAnswer !== activeLesson.miniChallenge.correctAnswer && /* @__PURE__ */ jsxRuntimeExports.jsx(
                              Button,
                              {
                                "data-ocid": "btn-retry-challenge",
                                size: "sm",
                                variant: "outline",
                                className: "mt-3",
                                onClick: () => {
                                  setSelectedAnswer(null);
                                  setAnswered(false);
                                },
                                children: "Try Again"
                              }
                            )
                          ]
                        }
                      ) })
                    ] }) })
                  }
                ) }),
                isLessonCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-green-500/10 border border-green-500/25 text-green-600 text-sm font-semibold",
                    "data-ocid": "lesson-completed-badge",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
                      "✓ Lesson Complete"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    disabled: activeIndex === 0,
                    onClick: () => setActiveIndex(activeIndex - 1),
                    "data-ocid": "btn-prev-lesson",
                    className: "gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                      " Previous"
                    ]
                  }
                ),
                activeIndex < lessons.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    disabled: !activeIsAccessible || !isLessonCompleted,
                    onClick: goToNext,
                    "data-ocid": "btn-next-lesson",
                    className: "gap-1.5",
                    children: [
                      "Next Lesson ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                  courseCertificate && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      variant: "outline",
                      "data-ocid": "btn-view-certificate",
                      onClick: () => setCertModalOpen(true),
                      className: "gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
                        " View Certificate"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "sm",
                      disabled: !activeIsAccessible || !isLessonCompleted,
                      "data-ocid": "cta-take-quiz-from-module",
                      className: "gap-1.5",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
                        " Take Module Quiz"
                      ]
                    }
                  ) })
                ] })
              ] })
            ]
          },
          activeIndex
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-8 text-center space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl", children: "📚" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "No lessons available yet" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Content for this module is coming soon." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: allCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9, y: 20 },
            animate: { opacity: 1, scale: 1, y: 0 },
            className: "p-6 rounded-2xl bg-gradient-to-br from-green-500/15 to-primary/15 border-2 border-green-500/30 text-center space-y-3",
            "data-ocid": "module-completion-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl", children: "🏆" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: "Module Complete!" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
                "You completed all",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-primary", children: [
                  lessons.length,
                  " lessons"
                ] }),
                " ",
                "in this module. Great work!"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 justify-center flex-wrap pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/modules", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    "data-ocid": "btn-back-modules-complete",
                    children: "← Explore More Modules"
                  }
                ) }),
                courseCertificate ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    "data-ocid": "btn-view-certificate-from-complete",
                    onClick: () => setCertModalOpen(true),
                    className: "gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
                      " View Certificate"
                    ]
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/quiz", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    "data-ocid": "cta-quiz-from-complete",
                    className: "gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4" }),
                      " Take the Quiz"
                    ]
                  }
                ) })
              ] })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
export {
  ModuleDetail as default
};
