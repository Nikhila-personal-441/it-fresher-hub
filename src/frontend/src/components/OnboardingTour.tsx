import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAuth } from "@/contexts/AuthContext";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Compass, BookOpen, Trophy, ArrowRight, Check } from "lucide-react";

const TOUR_SLIDES = [
  {
    icon: Compass,
    title: "Industry-Ready IT Training",
    description: "Your structured hub to transform from a fresher into a job-ready IT Professional. No fluff, just real skills.",
  },
  {
    icon: BookOpen,
    title: "Practical Skill Tracks",
    description: "Master Python, SQL, Cloud, DevOps, and MNC Platforms through hands-on lessons and real workplace scenarios.",
  },
  {
    icon: Trophy,
    title: "Verified Career Assets",
    description: "Gain professional path certificates and a massive Internship Certificate by completing your own full-stack Capstone Project.",
  },
];

export function OnboardingTour() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (user) {
      const hasSeenTour = localStorage.getItem(`onboarding_tour_seen_${user.uid}`);
      if (!hasSeenTour) {
        setOpen(true);
      }
    }
  }, [user]);

  const handleNext = () => {
    if (step < TOUR_SLIDES.length - 1) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handleComplete = () => {
    if (user) {
      localStorage.setItem(`onboarding_tour_seen_${user.uid}`, "true");
    }
    setOpen(false);
  };

  if (!open) return null;

  const currentSlide = TOUR_SLIDES[step];

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) handleComplete(); }}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-2 border-primary/30 bg-card rounded-2xl">
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 px-6 pt-10 pb-8 text-center h-56 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
                <currentSlide.icon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display font-bold text-xl text-foreground mb-2">
                {currentSlide.title}
              </h2>
              <p className="text-muted-foreground text-sm max-w-[280px] leading-relaxed">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="p-6 bg-card border-t border-border flex items-center justify-between">
          <div className="flex gap-1.5">
            {TOUR_SLIDES.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === step ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleComplete} className="text-xs text-muted-foreground">
              Skip
            </Button>
            <Button onClick={handleNext} size="sm" className="gap-1.5">
              {step < TOUR_SLIDES.length - 1 ? (
                <>Next <ArrowRight className="w-3.5 h-3.5" /></>
              ) : (
                <>Get Started <Check className="w-3.5 h-3.5" /></>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
