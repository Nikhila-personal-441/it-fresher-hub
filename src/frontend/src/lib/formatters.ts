import type { ModuleCategory } from "@/types";

export function formatCategory(category: ModuleCategory | "all"): string {
  const labels: Record<ModuleCategory | "all", string> = {
    all: "All Topics",
    fundamentals: "IT Fundamentals",
    networking: "Networking",
    cloud: "Cloud Computing",
    coding: "Coding",
    security: "Cybersecurity",
    ai_ml: "AI & Machine Learning",
    corporate: "Corporate Skills",
    devops: "DevOps",
    python: "Python",
    sql: "SQL",
    dsa: "DSA",
    machinelearning: "Machine Learning",
    htmlcss: "HTML & CSS",
    java: "Java",
    itfundamentals: "IT Fundamentals",
    excel: "Excel",
    presentation: "Presentation",
    cloudaws: "Cloud & AWS",
    cybersecurity: "Cybersecurity",
    corporateskills: "Corporate Skills",
    trending: "Trending Tech",
    github: "GitHub",
    shellscripting: "Shell Scripting",
    mncplatforms: "MNC Platforms",
    etltools: "ETL Tools",
    capstone: "Capstone Project",
    corporateworld: "Corporate World",
  };
  return labels[category] ?? category;
}

export function getCategoryColor(category: ModuleCategory): string {
  const colors: Record<ModuleCategory, string> = {
    fundamentals: "bg-primary/15 text-primary border-primary/30",
    networking: "bg-secondary/15 text-secondary-foreground border-secondary/30",
    cloud: "bg-primary/10 text-primary border-primary/20",
    coding: "bg-accent/15 text-accent-foreground border-accent/30",
    security: "bg-destructive/10 text-destructive border-destructive/20",
    ai_ml: "bg-secondary/20 text-secondary-foreground border-secondary/40",
    corporate: "bg-muted text-muted-foreground border-border",
    devops: "bg-accent/10 text-accent-foreground border-accent/20",
    python: "bg-primary/15 text-primary border-primary/30",
    sql: "bg-secondary/15 text-secondary-foreground border-secondary/30",
    dsa: "bg-accent/10 text-accent-foreground border-accent/20",
    machinelearning:
      "bg-secondary/20 text-secondary-foreground border-secondary/40",
    htmlcss: "bg-primary/10 text-primary border-primary/20",
    java: "bg-destructive/10 text-destructive border-destructive/20",
    itfundamentals: "bg-primary/15 text-primary border-primary/30",
    excel: "bg-muted text-muted-foreground border-border",
    presentation: "bg-muted text-muted-foreground border-border",
    cloudaws: "bg-primary/10 text-primary border-primary/20",
    cybersecurity: "bg-destructive/10 text-destructive border-destructive/20",
    corporateskills: "bg-muted text-muted-foreground border-border",
    trending: "bg-secondary/15 text-secondary-foreground border-secondary/30",
    github: "bg-accent/15 text-accent-foreground border-accent/30",
    shellscripting: "bg-accent/10 text-accent-foreground border-accent/20",
    mncplatforms: "bg-primary/10 text-primary border-primary/20",
    etltools: "bg-accent/15 text-accent-foreground border-accent/30",
    capstone: "bg-secondary/20 text-secondary-foreground border-secondary/40",
    corporateworld: "bg-muted text-muted-foreground border-border",
  };
  return colors[category] ?? "bg-muted text-muted-foreground border-border";
}

export function getDifficultyColor(
  difficulty: "beginner" | "intermediate" | "advanced",
): string {
  const colors = {
    beginner: "badge-success",
    intermediate: "badge-progress",
    advanced:
      "bg-destructive/10 text-destructive px-2.5 py-1 rounded-full text-xs font-medium",
  };
  return colors[difficulty];
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function getScoreLabel(score: number): { label: string; emoji: string } {
  if (score >= 90) return { label: "Excellent!", emoji: "🏆" };
  if (score >= 75) return { label: "Great Job!", emoji: "🌟" };
  if (score >= 60) return { label: "Good Effort", emoji: "👍" };
  if (score >= 40) return { label: "Keep Practicing", emoji: "💪" };
  return { label: "Keep Learning", emoji: "📚" };
}

export function categoryIcon(category: ModuleCategory): string {
  const icons: Record<ModuleCategory, string> = {
    fundamentals: "🖥️",
    networking: "🌐",
    cloud: "☁️",
    coding: "💻",
    security: "🔒",
    ai_ml: "🤖",
    corporate: "💼",
    devops: "⚙️",
    python: "🐍",
    sql: "🗃️",
    dsa: "🧩",
    machinelearning: "🧠",
    htmlcss: "🎨",
    java: "☕",
    itfundamentals: "🖥️",
    excel: "📊",
    presentation: "🎤",
    cloudaws: "☁️",
    cybersecurity: "🔒",
    corporateskills: "💼",
    trending: "📈",
    github: "🐙",
    shellscripting: "🐚",
    mncplatforms: "🌍",
    etltools: "🔀",
    capstone: "🚀",
    corporateworld: "🏢",
  };
  return icons[category] ?? "📚";
}
