import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Sparkles, Star, Trophy, Users, X } from "lucide-react";

const TOUR_KEY = "onboarding_tour_seen_v4";

const TOUR_SLIDES = [
  {
    emoji: "👋",
    mascot: "🤖",
    gradient: "from-blue-600/20 via-indigo-500/10 to-primary/20",
    accent: "bg-blue-500/15 border-blue-500/30 text-blue-600",
    title: "Hi! I'm your IT Career Guide",
    tag: "Welcome to IT Fresher Hub",
    body: "Ready to stop feeling like an outsider in the IT world? I'm here to help you bridge the gap between college and a real MNC job. We don't do boring theory — we build confidence.",
    highlights: [
      { icon: "💡", text: "Master the 'MNC' way of working" },
      { icon: "🗣️", text: "Learn to speak IT like a pro" },
      { icon: "💪", text: "Build a resume that gets noticed" },
    ],
    buttonText: "Let's Explore! 🚀",
  },
  {
    emoji: "🗺️",
    mascot: "🎯",
    gradient: "from-purple-600/20 via-fuchsia-500/10 to-pink-500/20",
    accent: "bg-purple-500/15 border-purple-500/30 text-purple-600",
    title: "Choose Your Path to Success",
    tag: "6 Specialized Career Tracks",
    body: "Don't get overwhelmed. Choose one of our 6 focused paths. Each one is designed by industry experts to make you job-ready in weeks, not years.",
    paths: [
      { icon: "🖥️", name: "Fundamentals" },
      { icon: "💻", name: "Programming" },
      { icon: "🧠", name: "Data & AI" },
      { icon: "☁️", name: "Cloud Ops" },
      { icon: "🔀", name: "ETL / Data Eng" },
      { icon: "💼", name: "Soft Skills" },
    ],
    highlights: [
      { icon: "✅", text: "Mandatory + Optional modules" },
      { icon: "🧪", text: "Practice quizzes for every path" },
      { icon: "📜", text: "Verified Path Certificates" },
    ],
    buttonText: "Show me more! ✨",
  },
  {
    emoji: "🎓",
    mascot: "💼",
    gradient: "from-emerald-600/20 via-green-500/10 to-teal-500/20",
    accent: "bg-emerald-500/15 border-emerald-500/30 text-emerald-600",
    title: "Get an Internship Certificate",
    tag: "Real Experience, Real Proof",
    body: "This is the game-changer. Complete our Capstone Project to simulate real IT work and earn a prestigious Internship Certificate to prove your skills to recruiters.",
    highlights: [
      { icon: "🏢", text: "Recognized by top MNCs" },
      { icon: "🚀", text: "Real-world portfolio project" },
      { icon: "💎", text: "Stand out from 1000s of freshers" },
      { icon: "📈", text: "Fast-track your job placements" },
    ],
    buttonText: "Start My Journey! 🏁",
  },
];

export function OnboardingTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const hasSeen = localStorage.getItem(TOUR_KEY);
    if (!hasSeen) {
      const timer = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleNext = () => {
    if (step < TOUR_SLIDES.length - 1) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    localStorage.setItem(TOUR_KEY, "true");
    setOpen(false);
  };

  if (!open) return null;

  const slide = TOUR_SLIDES[step];

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) handleComplete(); }}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-none bg-card rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] gap-0">
        {/* Close button */}
        <button
          type="button"
          onClick={handleComplete}
          className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-muted-foreground transition-colors"
          aria-label="Close tour"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Area */}
        <div className={`relative bg-gradient-to-br ${slide.gradient} px-8 pt-14 pb-8 text-center overflow-hidden min-h-[340px] flex flex-col items-center`}>
          {/* Animated Background Orbs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/20 blur-3xl pointer-events-none" 
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full"
            >
              {/* Mascot / Avatar Container */}
              <div className="relative mb-6 inline-block">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
                  className="w-24 h-24 rounded-3xl bg-white/40 backdrop-blur-md shadow-inner flex items-center justify-center border border-white/50"
                >
                  <span className="text-5xl">{slide.mascot}</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-primary shadow-lg flex items-center justify-center text-xl border-2 border-card"
                >
                  {slide.emoji}
                </motion.div>
              </div>

              {/* Header Info */}
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-[0.1em] mb-4 shadow-sm ${slide.accent}`}>
                <Sparkles className="w-3 h-3" />
                {slide.tag}
              </div>

              <h2 className="font-display font-black text-3xl text-foreground mb-3 leading-tight tracking-tight">
                {slide.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px] mx-auto font-medium">
                {slide.body}
              </p>

              {/* Interactive Path Grid for Slide 2 */}
              {step === 1 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-3 gap-2 mt-6 max-w-[340px] mx-auto"
                >
                  {slide.paths?.map((p, i) => (
                    <motion.div
                      key={p.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-1.5 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl p-2.5 border border-white/30 shadow-sm transition-colors"
                    >
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-[9px] font-black text-foreground leading-tight uppercase tracking-tighter">{p.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Highlights Section */}
        <div className="bg-card px-8 py-6 relative z-10">
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={`h-list-${step}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 gap-3"
              >
                {slide.highlights.map((h, i) => (
                  <motion.div
                    key={h.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1, ease: "easeOut" }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-2xl bg-muted/50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-sm border border-border/50">
                      {h.icon}
                    </div>
                    <span className="text-sm text-foreground/90 font-bold tracking-tight">{h.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Action Footer */}
        <div className="px-8 pb-8 pt-2 flex flex-col gap-6 bg-card border-t-0">
          {/* Progress & Controls */}
          <div className="flex items-center justify-between">
            {/* Custom Progress Bar */}
            <div className="flex gap-2 w-32 h-1.5 bg-muted rounded-full overflow-hidden">
              {TOUR_SLIDES.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    width: i === step ? "100%" : i < step ? "100%" : "20%",
                    backgroundColor: i <= step ? "oklch(var(--primary))" : "oklch(var(--muted))"
                  }}
                  className="h-full rounded-full flex-1 transition-colors"
                />
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleComplete}
                className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                Skip Tour
              </button>
            </div>
          </div>

          <Button
            onClick={handleNext}
            className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg shadow-[0_10px_20px_rgba(0,0,0,0.1)] group transition-all active:scale-[0.98]"
          >
            {slide.buttonText}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
