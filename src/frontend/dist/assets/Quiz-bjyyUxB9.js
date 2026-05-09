import { q as useNavigate, r as reactExports, j as jsxRuntimeExports, e as Skeleton, m as motion, B as BookOpen, f as Badge, d as Button } from "./index-DrrDo776.js";
import { C as Card, a as CardContent } from "./card-_4TY3EGm.js";
import { u as useQuizQuestions, a as useSubmitQuiz } from "./useQuiz-Cnjaa0vt.js";
import { a as formatCategory, g as getCategoryColor } from "./formatters-Ci1eEvah.js";
import { C as Clock } from "./clock-DHhhir4a.js";
import { T as Target } from "./target-Dk49P8Ee.js";
import { C as ChevronRight } from "./chevron-right-2msMOpKz.js";
import { A as AnimatePresence } from "./index-UbTf7HyD.js";
import "./useMutation-hdUPihXR.js";
function Quiz() {
  const navigate = useNavigate();
  const { data: questions, isLoading } = useQuizQuestions();
  const { mutateAsync: submitQuiz, isPending } = useSubmitQuiz();
  const [started, setStarted] = reactExports.useState(false);
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const [answered, setAnswered] = reactExports.useState(false);
  const [attempts, setAttempts] = reactExports.useState([]);
  const startTimeRef = reactExports.useRef(0);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 sm:p-8 max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-2xl" })
    ] });
  }
  if (!(questions == null ? void 0 : questions.length)) return null;
  const total = questions.length;
  if (!started) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl sm:text-3xl text-foreground", children: "Corporate Readiness Quiz" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Test your knowledge across all key IT domains." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-primary font-display", children: total }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-3 h-3" }),
                  "Questions"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-2xl font-bold text-secondary-foreground font-display", children: [
                  "~",
                  Math.round(total * 0.5),
                  "m"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                  "Est. Time"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-foreground font-display", children: "8" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center justify-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-3 h-3" }),
                  "Topics"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Topics covered:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                "fundamentals",
                "networking",
                "cloud",
                "coding",
                "security",
                "ai_ml",
                "corporate",
                "devops"
              ].map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `text-xs border ${getCategoryColor(cat)}`,
                  children: formatCategory(cat)
                },
                cat
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full btn-primary",
                onClick: () => {
                  setStarted(true);
                  startTimeRef.current = Date.now();
                },
                "data-ocid": "btn-start-quiz",
                children: [
                  "Start Quiz ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
                ]
              }
            )
          ] }) })
        ]
      }
    ) });
  }
  const question = questions[currentIndex];
  const isLast = currentIndex === total - 1;
  const progress = (currentIndex + 1) / total * 100;
  async function handleNext() {
    if (selectedOption === null) return;
    const attempt = {
      questionId: question.id,
      selectedIndex: selectedOption,
      isCorrect: selectedOption === question.correctIndex,
      answeredAt: BigInt(Date.now())
    };
    const newAttempts = [...attempts, attempt];
    setAttempts(newAttempts);
    if (isLast) {
      const result = await submitQuiz(newAttempts);
      navigate({
        to: "/quiz/result",
        state: result
      });
    } else {
      setCurrentIndex((p) => p + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
          "Question ",
          currentIndex + 1,
          " of ",
          total
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            className: `text-xs border ${getCategoryColor(question.category)}`,
            children: formatCategory(question.category)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "h-full bg-primary rounded-full",
          animate: { width: `${progress}%` },
          transition: { duration: 0.4 }
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.3 },
        className: "space-y-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-lg text-foreground leading-snug", children: question.question }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: question.options.map((option, i) => {
            const isSelected = selectedOption === i;
            const isCorrect = i === question.correctIndex;
            let style = "border-border bg-card hover:border-primary/50 hover:bg-primary/5";
            if (answered) {
              if (isCorrect) style = "border-secondary bg-secondary/10";
              else if (isSelected && !isCorrect)
                style = "border-destructive bg-destructive/10";
            } else if (isSelected) {
              style = "border-primary bg-primary/10";
            }
            const optionLabel = String.fromCharCode(65 + i);
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": `quiz-option-${i}`,
                onClick: () => {
                  setSelectedOption(i);
                  setAnswered(true);
                },
                disabled: answered,
                className: `w-full text-left p-4 rounded-xl border-2 transition-smooth text-sm font-medium text-foreground ${style}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold", children: optionLabel }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: option })
                ] })
              },
              optionLabel
            );
          }) }),
          answered && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 1, y: 0 },
              className: `p-4 rounded-xl border text-sm ${selectedOption === question.correctIndex ? "bg-secondary/10 border-secondary/30 text-secondary-foreground" : "bg-destructive/10 border-destructive/30 text-destructive"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold mb-1", children: selectedOption === question.correctIndex ? "✅ Correct!" : "❌ Not quite — here's why:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: question.explanation })
              ]
            }
          )
        ]
      },
      question.id
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "w-full btn-primary",
        disabled: !answered || isPending,
        onClick: handleNext,
        "data-ocid": "btn-next-question",
        children: isPending ? "Submitting..." : isLast ? "Submit Quiz" : "Next Question →"
      }
    )
  ] });
}
export {
  Quiz as default
};
