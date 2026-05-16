import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LEARNING_PATHS, getPathModules } from "@/data/paths";
import { useSubscription } from "@/hooks/useSubscription";
import { useProgress } from "@/hooks/useProgress";
import { useCertificates } from "@/hooks/useCertificates";
import { getPathQuizQuestions } from "@/hooks/useQuiz";
import { issueCertificate } from "@/lib/firestoreService";
import { downloadCertificateAsPdf } from "@/lib/pdfDownload";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Trophy,
  ShieldCheck,
  Award,
  ChevronRight,
  ClipboardCheck,
  Download,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { PaywallModal } from "@/components/PaywallModal";
import type { QuizQuestion } from "@/types";

// ── Path Quiz Modal ───────────────────────────────────────────────────────────

function PathQuizModal({
  pathId,
  pathTitle,
  certName,
  mode = "main",
  onClose,
  onPass,
}: {
  pathId: string;
  pathTitle: string;
  certName: string;
  mode?: "practice" | "main";
  onClose: () => void;
  onPass: () => void;
}) {
  const questions: QuizQuestion[] = getPathQuizQuestions(pathId, mode);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);

  const q = questions[current];
  const score = answers.filter(Boolean).length;
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const passed = pct >= 70;

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    const correct = idx === q.correctIndex;
    setTimeout(() => {
      const next = [...answers, correct];
      if (current < questions.length - 1) {
        setAnswers(next);
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setAnswers(next);
        setDone(true);
      }
    }, 800);
  }

  useEffect(() => {
    if (done && passed) {
      onPass();
    }
  }, [done, passed]);

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-sm w-full text-center space-y-4">
          <p className="text-muted-foreground">No questions available for this path yet.</p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-card border border-border rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-gradient-to-r from-secondary/10 to-primary/10">
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
              {mode === "practice" ? "Practice Quiz" : "Certification Exam"}
            </p>
            <h3 className="font-display font-bold text-foreground">{pathTitle}</h3>
          </div>
          <button type="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {!done ? (
            <>
              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span>Question {current + 1} of {questions.length}</span>
                <span className="font-bold text-foreground">{Math.round(((current) / questions.length) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full mb-5 overflow-hidden">
                <motion.div
                  className="h-full bg-secondary"
                  animate={{ width: `${(current / questions.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <p className="font-semibold text-foreground mb-4 leading-relaxed">{q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, i) => {
                      let cls = "w-full text-left p-3 rounded-xl border text-sm transition-all ";
                      if (selected === null) {
                        cls += "border-border hover:border-secondary/40 hover:bg-secondary/5 cursor-pointer";
                      } else if (i === q.correctIndex) {
                        cls += "border-green-500 bg-green-500/10 text-green-700";
                      } else if (i === selected) {
                        cls += "border-destructive bg-destructive/10 text-destructive";
                      } else {
                        cls += "border-border opacity-50";
                      }
                      return (
                        <button key={i} type="button" className={cls} onClick={() => handleSelect(i)}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4 py-4">
              <div className="text-6xl">{passed ? "🏆" : "😔"}</div>
              <h3 className="font-display font-bold text-2xl text-foreground">
                {passed ? "Congratulations!" : "Not quite there yet"}
              </h3>
              <p className="text-muted-foreground text-sm">
                You scored <strong className={passed ? "text-green-600" : "text-destructive"}>{pct}%</strong> ({score}/{questions.length} correct).
                {passed 
                  ? (mode === "main" ? " Your certificate is being issued!" : " Great job! You are ready for the main exam.") 
                  : " You need 70% to pass. Keep studying and try again!"}
              </p>
              <div className="flex gap-3 justify-center">
                {!passed && (
                  <Button variant="outline" onClick={() => { setCurrent(0); setAnswers([]); setSelected(null); setDone(false); }}>
                    Retry Quiz
                  </Button>
                )}
                <Button onClick={onClose}>{passed ? "View Certificate" : "Close"}</Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────

export default function TrackDetail() {
  const { id } = useParams({ from: "/tracks/$id" });
  const path = LEARNING_PATHS.find((p) => p.id === id);
  const modules = getPathModules(id || "");
  const { subscriptionData, isAdmin } = useSubscription();
  const { data: progress } = useProgress();
  const { data: certificates, refetch: refetchCerts } = useCertificates();
  const { user } = useAuth();
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [quizMode, setQuizMode] = useState<"practice" | "main">("main");
  const [quizOpen, setQuizOpen] = useState(false);
  const [certIssued, setCertIssued] = useState(false);

  if (!path) return <div className="min-h-screen flex items-center justify-center">Path not found</div>;

  const isEnrolled =
    isAdmin ||
    (Array.isArray(subscriptionData.plan)
      ? subscriptionData.plan.includes(path.id)
      : subscriptionData.plan === path.id) ||
    subscriptionData.plan === "capstone" ||
    subscriptionData.plan === "premium";

  const completedModuleIds = new Set(progress?.completedModules ?? []);
  const allMandatoryDone = path.mandatoryModules.every((id) => completedModuleIds.has(id));
  const anyOptionalDone = path.optionalModules.some((id) => completedModuleIds.has(id));
  const isFullyCompleted = allMandatoryDone && anyOptionalDone;

  const totalRequiredCount = path.mandatoryModules.length + 1; // All mandatory + at least 1 optional
  const completedCountForProgress = path.mandatoryModules.filter(id => completedModuleIds.has(id)).length + (anyOptionalDone ? 1 : 0);
  const progressPercent = Math.round((completedCountForProgress / totalRequiredCount) * 100);

  // Check if certificate already exists for this path
  const pathCert = certificates?.find((c) => c.courseId === path.id);

  async function handleQuizPass() {
    if (!user || pathCert || quizMode === "practice") return;
    try {
      await issueCertificate(user.uid, path!.id, path!.certName);
      setCertIssued(true);
      await refetchCerts();
    } catch {
      // certificate already exists or error — ignore
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <PaywallModal open={paywallOpen} onOpenChange={setPaywallOpen} />
      {quizOpen && (
        <PathQuizModal
          pathId={path.id}
          pathTitle={path.title}
          certName={path.certName}
          mode={quizMode}
          onClose={() => setQuizOpen(false)}
          onPass={handleQuizPass}
        />
      )}

      {/* Header */}
      <div className="bg-card border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
          <Link to="/courses" className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Skills Hub
          </Link>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{path.icon}</span>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold uppercase tracking-wider text-[10px]">
                  Learning Path
                </Badge>
              </div>
              <h1 className="font-display font-bold text-4xl text-foreground leading-tight">{path.title}</h1>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">{path.description}</p>
              <div className="flex flex-wrap gap-2">
                {path.skills.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-semibold text-secondary uppercase">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Enrollment card */}
            <div className="shrink-0 w-full md:w-72">
              <div className="bg-background border border-border p-6 rounded-2xl shadow-xl">
                {!isEnrolled ? (
                  <>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Enrollment Fee</p>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-display font-bold text-foreground">₹{path.priceINR}</span>
                      <span className="text-sm text-muted-foreground line-through opacity-50">₹499</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {["Full Path Access", "Path Certification Exam", "Verified Certificate", "Professional Badge"].map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-xl" onClick={() => setPaywallOpen(true)}>
                      Enroll Now
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Your Progress</p>
                        <span className="text-sm font-bold text-foreground">{progressPercent}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercent}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-secondary"
                        />
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1">
                        {allMandatoryDone ? "Mandatory modules done!" : `${path.mandatoryModules.filter(id => completedModuleIds.has(id)).length} of ${path.mandatoryModules.length} mandatory done`}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {anyOptionalDone ? "Optional requirement met!" : "Need 1 optional module"}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/5 border border-secondary/10">
                        <ShieldCheck className="w-4 h-4 text-secondary" />
                        <p className="text-[10px] font-medium text-secondary">Verified Enrollment</p>
                      </div>

                      {/* Certification download if already issued */}
                      {(pathCert || certIssued) ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/5 border border-green-500/20">
                            <Trophy className="w-4 h-4 text-green-600" />
                            <p className="text-[10px] font-bold text-green-600">Certificate Earned! 🎉</p>
                          </div>
                          {pathCert && (
                            <Button
                              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl gap-2 shadow-lg"
                              onClick={() => downloadCertificateAsPdf(pathCert, user?.displayName ?? "Learner")}
                            >
                              <Download className="w-4 h-4" /> Download Certificate
                            </Button>
                          )}
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Button
                            variant="outline"
                            className="w-full border-secondary/50 text-secondary hover:bg-secondary/5 font-bold rounded-xl gap-2"
                            onClick={() => { setQuizMode("practice"); setQuizOpen(true); }}
                          >
                            <BookOpen className="w-4 h-4" /> Take Practice Quiz
                          </Button>

                          {isFullyCompleted ? (
                            <Button
                              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl gap-2 shadow-xl"
                              onClick={() => { setQuizMode("main"); setQuizOpen(true); }}
                            >
                              <ClipboardCheck className="w-4 h-4" /> Take Final Exam
                            </Button>
                          ) : (
                            <div className="p-3 rounded-xl bg-muted/30 border border-border">
                              <p className="text-[10px] text-center text-muted-foreground italic leading-snug">
                                Complete all mandatory and at least one optional module to unlock the final certification exam.
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>

              {/* Certificate info */}
              <div className="mt-3 p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-start gap-2">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Complete all modules → Pass the path exam (70%+) → Earn your <strong className="text-foreground">{path.certName}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules list */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-secondary" />
          Included Modules ({modules.length})
        </h2>

        <div className="space-y-4">
          {modules.map((module, i) => {
            const isMandatory = path.mandatoryModules.includes(module.id);
            const isOptional = path.optionalModules.includes(module.id);
            const modPct = progress?.moduleProgress?.[module.id] ?? 0;
            const isCompleted = completedModuleIds.has(module.id) || modPct >= 100;

            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                  isCompleted ? "bg-green-500/5 border-green-500/20 shadow-sm" : "bg-card border-border hover:border-secondary/30"
                }`}
              >
                <div className="relative shrink-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${isCompleted ? "bg-green-500/10" : "bg-secondary/5"}`}>
                    {isCompleted ? "✅" : module.icon}
                  </div>
                  {isMandatory && !isCompleted && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white border-2 border-background shadow-sm" title="Mandatory">
                      !
                    </div>
                  )}
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-secondary transition-colors truncate">{module.title}</h4>
                    {isCompleted && <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[8px] py-0 h-4 uppercase">DONE</Badge>}
                    {isMandatory && !isCompleted && <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 text-[8px] py-0 h-4 uppercase">REQUIRED</Badge>}
                    {isOptional && !isCompleted && <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-[8px] py-0 h-4 uppercase">OPTIONAL</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">{module.description}</p>
                  {modPct > 0 && modPct < 100 && (
                    <div className="h-1 w-full bg-muted rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-secondary transition-all" style={{ width: `${modPct}%` }} />
                    </div>
                  )}
                </div>

                <div className="shrink-0 ml-4">
                  <Link to="/modules/$id" params={{ id: module.id }}>
                    <Button variant="ghost" size="sm" className="group-hover:bg-secondary group-hover:text-white rounded-lg">
                      {isCompleted ? "Review" : "Start"} <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
