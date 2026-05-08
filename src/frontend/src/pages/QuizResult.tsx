import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuizQuestions } from "@/hooks/useQuiz";
import {
  formatCategory,
  getCategoryColor,
  getScoreLabel,
} from "@/lib/formatters";
import type { ModuleCategory, QuizResult } from "@/types";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BookOpen,
  CheckCircle2,
  RotateCcw,
  TrendingDown,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

interface CategoryStat {
  category: ModuleCategory;
  correct: number;
  total: number;
  pct: number;
}

export default function QuizResultPage() {
  const location = useLocation();
  const result = (location.state as unknown as QuizResult | null) ?? null;
  const { data: questions } = useQuizQuestions();

  if (!result) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-4xl">📊</p>
        <h2 className="font-display font-bold text-xl text-foreground">
          No quiz result found
        </h2>
        <Link to="/quiz">
          <Button>Take the Quiz</Button>
        </Link>
      </div>
    );
  }

  const { label, emoji } = getScoreLabel(result.score);
  const passed = result.score >= 60;

  // Build category-level skill gap analysis
  const categoryStats: CategoryStat[] = (() => {
    if (!questions?.length) return [];
    const map = new Map<ModuleCategory, { correct: number; total: number }>();
    for (const attempt of result.attempts) {
      const q = questions.find((q) => q.id === attempt.questionId);
      if (!q) continue;
      const cat = q.category;
      const prev = map.get(cat) ?? { correct: 0, total: 0 };
      map.set(cat, {
        correct: prev.correct + (attempt.isCorrect ? 1 : 0),
        total: prev.total + 1,
      });
    }
    return Array.from(map.entries())
      .map(([category, { correct, total }]) => ({
        category,
        correct,
        total,
        pct: Math.round((correct / total) * 100),
      }))
      .sort((a, b) => b.pct - a.pct);
  })();

  const strongAreas = categoryStats.filter((s) => s.pct >= 75);
  const weakAreas = categoryStats.filter((s) => s.pct < 50);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto space-y-6">
      {/* Hero result card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          className={`border-2 ${passed ? "border-secondary/40 bg-secondary/5" : "border-destructive/30 bg-destructive/5"}`}
        >
          <CardContent className="p-8 text-center space-y-4">
            <div className="text-5xl">{emoji}</div>
            <div>
              <h1 className="font-display font-bold text-3xl text-foreground">
                {result.score}%
              </h1>
              <p className="text-xl font-semibold text-muted-foreground">
                {label}
              </p>
            </div>

            <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${passed ? "bg-secondary" : "bg-destructive/70"}`}
                initial={{ width: 0 }}
                animate={{ width: `${result.score}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <p className="text-2xl font-bold text-secondary-foreground font-display">
                  {result.correctAnswers}
                </p>
                <p className="text-xs text-muted-foreground">Correct answers</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <p className="text-2xl font-bold text-foreground font-display">
                  {result.totalQuestions}
                </p>
                <p className="text-xs text-muted-foreground">Total questions</p>
              </div>
            </div>

            {passed ? (
              <Badge className="badge-success text-sm px-4 py-1.5">
                <Trophy className="w-4 h-4 mr-1.5 inline" /> Corporate Ready!
              </Badge>
            ) : (
              <p className="text-sm text-muted-foreground">
                Score 60% or higher to earn your Corporate Ready badge. Keep
                practicing!
              </p>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Skill gap analysis */}
      {categoryStats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-4"
          data-ocid="skill-gap-analysis"
        >
          <h2 className="font-display font-bold text-xl text-foreground">
            Skill Gap Analysis
          </h2>
          <p className="text-sm text-muted-foreground -mt-2">
            See how you performed across each knowledge domain.
          </p>

          {/* Summary tags */}
          {(strongAreas.length > 0 || weakAreas.length > 0) && (
            <div className="flex flex-wrap gap-3">
              {strongAreas.length > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/25 text-xs text-secondary-foreground font-medium">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Strong in:{" "}
                  {strongAreas
                    .map((s) => formatCategory(s.category))
                    .join(", ")}
                </div>
              )}
              {weakAreas.length > 0 && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-destructive/10 border border-destructive/25 text-xs text-destructive font-medium">
                  <TrendingDown className="w-3.5 h-3.5" />
                  Needs work:{" "}
                  {weakAreas.map((s) => formatCategory(s.category)).join(", ")}
                </div>
              )}
            </div>
          )}

          {/* Per-category bars */}
          <div className="space-y-3">
            {categoryStats.map((stat, i) => {
              const isStrong = stat.pct >= 75;
              const isWeak = stat.pct < 50;
              return (
                <motion.div
                  key={stat.category}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-card border border-border rounded-xl p-4 space-y-2"
                  data-ocid={`skill-gap-${stat.category}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`text-xs border ${getCategoryColor(stat.category)}`}
                      >
                        {formatCategory(stat.category)}
                      </Badge>
                      {isStrong && (
                        <TrendingUp className="w-3.5 h-3.5 text-secondary-foreground" />
                      )}
                      {isWeak && (
                        <TrendingDown className="w-3.5 h-3.5 text-destructive" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-bold font-display ${isStrong ? "text-secondary-foreground" : isWeak ? "text-destructive" : "text-foreground"}`}
                    >
                      {stat.correct}/{stat.total} ({stat.pct}%)
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${isStrong ? "bg-secondary" : isWeak ? "bg-destructive/70" : "bg-primary"}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                  </div>
                  {isWeak && (
                    <p className="text-xs text-muted-foreground">
                      Review the{" "}
                      <Link
                        to="/modules"
                        search={{ category: stat.category }}
                        className="text-primary hover:underline font-medium"
                      >
                        {formatCategory(stat.category)} modules
                      </Link>{" "}
                      to strengthen this area.
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Answer review */}
      <div className="space-y-3">
        <h2 className="font-display font-bold text-xl text-foreground">
          Answer Review
        </h2>
        {result.attempts.map((attempt, i) => (
          <motion.div
            key={attempt.questionId}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <Card
              className={`border ${attempt.isCorrect ? "border-secondary/30" : "border-destructive/30"}`}
              data-ocid={`result-item-${attempt.questionId}`}
            >
              <CardContent className="p-4 flex items-center gap-3">
                {attempt.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-secondary-foreground shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 text-destructive shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    Question {i + 1}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {attempt.isCorrect
                      ? "Answered correctly"
                      : "Incorrect answer"}
                  </p>
                </div>
                <Badge
                  className={
                    attempt.isCorrect
                      ? "badge-success"
                      : "bg-destructive/10 text-destructive text-xs px-2 py-0.5 rounded-full"
                  }
                >
                  {attempt.isCorrect ? "✓" : "✗"}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link to="/quiz" className="flex-1">
          <Button
            variant="outline"
            className="w-full gap-2"
            data-ocid="btn-retake-quiz"
          >
            <RotateCcw className="w-4 h-4" /> Retake Quiz
          </Button>
        </Link>
        <Link to="/modules" className="flex-1">
          <Button
            className="w-full btn-primary gap-2"
            data-ocid="btn-back-to-modules"
          >
            <BookOpen className="w-4 h-4" /> Continue Learning
          </Button>
        </Link>
      </div>
    </div>
  );
}
