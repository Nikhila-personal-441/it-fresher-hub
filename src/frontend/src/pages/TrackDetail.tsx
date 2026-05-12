import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LEARNING_PATHS, getPathModules } from "@/data/paths";
import { useSubscription } from "@/hooks/useSubscription";
import { useProgress } from "@/hooks/useProgress";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, CheckCircle2, Trophy, ShieldCheck, Award, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { PaywallModal } from "@/components/PaywallModal";

export default function TrackDetail() {
  const { id } = useParams({ from: "/tracks/$id" });
  const path = LEARNING_PATHS.find((p) => p.id === id);
  const modules = getPathModules(id || "");
  const { subscriptionData, isAdmin } = useSubscription();
  const { data: progress } = useProgress();
  const [paywallOpen, setPaywallOpen] = useState(false);

  if (!path) return <div className="min-h-screen flex items-center justify-center">Path not found</div>;

  const isEnrolled = isAdmin || (Array.isArray(subscriptionData.plan) 
    ? subscriptionData.plan.includes(path.id) 
    : subscriptionData.plan === path.id) || subscriptionData.plan === "capstone" || subscriptionData.plan === "premium";

  const completedModulesCount = modules.filter(m => progress?.completedModules.includes(m.id)).length;
  const progressPercent = Math.round((completedModulesCount / modules.length) * 100);
  const isFullyCompleted = completedModulesCount === modules.length;

  return (
    <div className="min-h-screen bg-background pb-20">
      <PaywallModal open={paywallOpen} onOpenChange={setPaywallOpen} />
      
      {/* Header */}
      <div className="bg-card border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="max-w-5xl mx-auto px-6 py-12 relative z-10">
          <Link to="/courses" className="inline-flex items-center text-sm text-muted-foreground hover:text-secondary mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Skills Hub
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{path.icon}</span>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold uppercase tracking-wider text-[10px]">
                  Professional Path
                </Badge>
              </div>
              <h1 className="font-display font-bold text-4xl text-foreground leading-tight">
                {path.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                {path.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {path.skills.map(s => (
                  <span key={s} className="px-3 py-1 rounded-full bg-secondary/5 border border-secondary/10 text-[10px] font-semibold text-secondary uppercase">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <div className="bg-background border border-border p-6 rounded-2xl shadow-xl w-full md:w-72">
                {!isEnrolled ? (
                  <>
                    <div className="mb-4">
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest mb-1">Enrollment Fee</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-display font-bold text-foreground">₹{path.priceINR}</span>
                        <span className="text-sm text-muted-foreground line-through opacity-50">₹499</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {['Full Path Access', 'Certification Exam', 'Verified Certificate', 'Professional Badge'].map(f => (
                        <li key={f} className="flex items-center gap-2 text-[10px] text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-6 rounded-xl"
                      onClick={() => setPaywallOpen(true)}
                    >
                      Enroll Now
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">Your Progress</p>
                        <span className="text-sm font-bold text-foreground">{progressPercent}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${progressPercent}%` }}
                          className="h-full bg-secondary"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 p-3 rounded-xl bg-secondary/5 border border-secondary/10">
                        <ShieldCheck className="w-4 h-4 text-secondary" />
                        <p className="text-[10px] font-medium text-secondary">Verified Enrollment</p>
                      </div>
                      {isFullyCompleted ? (
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-xl gap-2">
                          Take Path Exam <Award className="w-4 h-4" />
                        </Button>
                      ) : (
                        <p className="text-[10px] text-center text-muted-foreground italic">
                          Complete all {modules.length} modules to unlock exam
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-secondary" />
          Included Modules ({modules.length})
        </h2>

        <div className="space-y-4">
          {modules.map((module, i) => {
            const isCompleted = progress?.completedModules.includes(module.id);
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`group flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 ${
                  isCompleted ? "bg-green-500/5 border-green-500/20" : "bg-card border-border hover:border-secondary/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 ${
                  isCompleted ? "bg-green-500/10" : "bg-secondary/5"
                }`}>
                  {isCompleted ? "✅" : module.icon}
                </div>
                
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-secondary transition-colors truncate">
                      {module.title}
                    </h4>
                    {isCompleted && <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[8px] py-0 h-4 uppercase">COMPLETED</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {module.description}
                  </p>
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
