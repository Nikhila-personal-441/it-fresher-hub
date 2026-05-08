import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuizQuestions, useSubmitQuiz } from "@/hooks/useQuiz";
import { formatCategory, getCategoryColor } from "@/lib/formatters";
import type { QuizAttempt } from "@/types";
import { useNavigate } from "@tanstack/react-router";
import { BookOpen, ChevronRight, Clock, Target } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";

export default function Quiz() {
  const navigate = useNavigate();
  const { data: questions, isLoading } = useQuizQuestions();
  const { mutateAsync: submitQuiz, isPending } = useSubmitQuiz();

  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const startTimeRef = useRef<number>(0);

  if (isLoading) {
    return (
      <div className="p-6 sm:p-8 max-w-2xl mx-auto space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64 rounded-2xl" />
      </div>
    );
  }

  if (!questions?.length) return null;
  const total = questions.length;

  // Start screen
  if (!started) {
    return (
      <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground">
              Corporate Readiness Quiz
            </h1>
            <p className="text-muted-foreground mt-1">
              Test your knowledge across all key IT domains.
            </p>
          </div>

          <Card className="border-border">
            <CardContent className="p-6 space-y-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary font-display">
                    {total}
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <BookOpen className="w-3 h-3" />
                    Questions
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-secondary-foreground font-display">
                    ~{Math.round(total * 0.5)}m
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    Est. Time
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-foreground font-display">
                    8
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                    <Target className="w-3 h-3" />
                    Topics
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground">
                  Topics covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "fundamentals",
                      "networking",
                      "cloud",
                      "coding",
                      "security",
                      "ai_ml",
                      "corporate",
                      "devops",
                    ] as const
                  ).map((cat) => (
                    <Badge
                      key={cat}
                      className={`text-xs border ${getCategoryColor(cat)}`}
                    >
                      {formatCategory(cat)}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                className="w-full btn-primary"
                onClick={() => {
                  setStarted(true);
                  startTimeRef.current = Date.now();
                }}
                data-ocid="btn-start-quiz"
              >
                Start Quiz <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  const question = questions[currentIndex];
  const isLast = currentIndex === total - 1;
  const progress = ((currentIndex + 1) / total) * 100;

  async function handleNext() {
    if (selectedOption === null) return;
    const attempt: QuizAttempt = {
      questionId: question.id,
      selectedIndex: selectedOption,
      isCorrect: selectedOption === question.correctIndex,
      answeredAt: BigInt(Date.now()),
    };
    const newAttempts = [...attempts, attempt];
    setAttempts(newAttempts);

    if (isLast) {
      const result = await submitQuiz(newAttempts);
      navigate({
        to: "/quiz/result",
        state: result as unknown as Record<string, unknown>,
      });
    } else {
      setCurrentIndex((p) => p + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Question {currentIndex + 1} of {total}
          </span>
          <Badge
            className={`text-xs border ${getCategoryColor(question.category)}`}
          >
            {formatCategory(question.category)}
          </Badge>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <Card className="border-border">
            <CardContent className="p-6">
              <p className="font-display font-semibold text-lg text-foreground leading-snug">
                {question.question}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-3">
            {question.options.map((option, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = i === question.correctIndex;
              let style =
                "border-border bg-card hover:border-primary/50 hover:bg-primary/5";
              if (answered) {
                if (isCorrect) style = "border-secondary bg-secondary/10";
                else if (isSelected && !isCorrect)
                  style = "border-destructive bg-destructive/10";
              } else if (isSelected) {
                style = "border-primary bg-primary/10";
              }
              const optionLabel = String.fromCharCode(65 + i);

              return (
                <button
                  key={optionLabel}
                  type="button"
                  data-ocid={`quiz-option-${i}`}
                  onClick={() => {
                    setSelectedOption(i);
                    setAnswered(true);
                  }}
                  disabled={answered}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-smooth text-sm font-medium text-foreground ${style}`}
                >
                  <span className="flex items-start gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                      {optionLabel}
                    </span>
                    <span>{option}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {answered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-xl border text-sm ${
                selectedOption === question.correctIndex
                  ? "bg-secondary/10 border-secondary/30 text-secondary-foreground"
                  : "bg-destructive/10 border-destructive/30 text-destructive"
              }`}
            >
              <p className="font-semibold mb-1">
                {selectedOption === question.correctIndex
                  ? "✅ Correct!"
                  : "❌ Not quite — here's why:"}
              </p>
              <p>{question.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      <Button
        className="w-full btn-primary"
        disabled={!answered || isPending}
        onClick={handleNext}
        data-ocid="btn-next-question"
      >
        {isPending
          ? "Submitting..."
          : isLast
            ? "Submit Quiz"
            : "Next Question →"}
      </Button>
    </div>
  );
}
