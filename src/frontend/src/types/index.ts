// Core domain types for IT Fresher Hub

export type ModuleCategory =
  | "fundamentals"
  | "networking"
  | "cloud"
  | "coding"
  | "security"
  | "ai_ml"
  | "corporate"
  | "devops"
  | "python"
  | "sql"
  | "dsa"
  | "machinelearning"
  | "htmlcss"
  | "java"
  | "itfundamentals"
  | "excel"
  | "presentation"
  | "cloudaws"
  | "cybersecurity"
  | "corporateskills"
  | "trending"
  | "github"
  | "shellscripting"
  | "mncplatforms"
  | "etltools"
  | "capstone"
  | "corporateworld";

export type CourseSection =
  | "courses"
  | "corporate-world"
  | "mnc-platforms"
  | "etl-tools"
  | "capstone-project"
  | "glossary"
  | "quiz";

export interface ITModule {
  id: string;
  title: string;
  description: string;
  category: ModuleCategory;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedMinutes: number;
  topics: string[];
  completed: boolean;
  progress: number; // 0-100
  icon: string; // emoji or icon name
  isComingSoon?: boolean;
  /** @deprecated XP system removed — kept for data compatibility */
  xpReward?: number;
}

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: ModuleCategory;
  relatedTerms: string[];
  example?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: ModuleCategory;
  difficulty: "easy" | "medium" | "hard";
}

export interface QuizAttempt {
  questionId: string;
  selectedIndex: number;
  isCorrect: boolean;
  answeredAt: bigint;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number; // 0-100
  timeTakenSeconds: number;
  attempts: QuizAttempt[];
  completedAt: bigint;
}

export interface UserProgress {
  userId: string;
  completedModules: string[];
  totalLearningHours: number;
  quizScores: { moduleId: string; score: number }[];
  lastActiveAt: bigint;
  streakDays: number;
  level: "fresher" | "learner" | "practitioner" | "professional";
  moduleProgress?: Record<string, number>;
}

export type CategoryFilter = ModuleCategory | "all";

// ─── Gamification Types ────────────────────────────────────────────────────

export interface MiniChallenge {
  type: "multipleChoice" | "fillInBlank";
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface LessonContent {
  title: string;
  /** 2–3 engaging conversational paragraphs */
  content: string;
  funFact: string;
  /** @deprecated XP system removed — kept for data compatibility */
  xpReward?: number;
  miniChallenge: MiniChallenge;
}

/** Maps module id → ordered array of LessonContent */
export type ModuleLessonMap = Record<string, LessonContent[]>;

export interface LessonProgress {
  completed: boolean;
}

export interface ModuleLessonProgress {
  [lessonIndex: number]: LessonProgress;
}

// ─── Subscription / Paywall ───────────────────────────────────────────────────

export type SubscriptionPlan = "free" | "premium";
// ─── Certificate & Admin Types ────────────────────────────────────────────────

export type { CertificateView } from "@/backend.d";
export type { AdminUserView, SubscriptionStats } from "@/backend.d";

export interface SubscriptionStatus {
  active: boolean;
  activatedAt: string | null;
  expiresAt: string | null;
  plan: SubscriptionPlan;
}

export interface SubscriptionView {
  active: boolean;
  activatedAt: string | null;
  expiresAt: string | null;
  plan: SubscriptionPlan;
  daysRemaining: number | null;
}
