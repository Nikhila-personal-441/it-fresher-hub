import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CheckCircle2,
  MessageSquare,
  Trophy,
  Users2,
  Wrench,
} from "lucide-react";

const QUICK_FACTS = [
  { icon: "👥", label: "13 IT roles explained" },
  { icon: "🔄", label: "4 methodologies covered" },
  { icon: "🛠️", label: "10+ collaboration tools" },
  { icon: "💬", label: "30+ corporate terms" },
  { icon: "🎯", label: "Scenario-based learning" },
  { icon: "⚡", label: "Mini knowledge quizzes" },
];

interface SectionCard {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  emoji: string;
  title: string;
  description: string;
  topics: string[];
  lessonCount: number;
  free: boolean;
  accentClass: string;
  bgClass: string;
  borderClass: string;
  badgeLabel: string;
}

const SECTIONS: SectionCard[] = [
  {
    id: "roles",
    icon: Users2,
    emoji: "👨‍💼",
    title: "IT Roles & Responsibilities",
    description:
      "Discover every role in an IT company — what they do, when they act, and how they interact. Real corporate scenarios showing a day in the life of each person.",
    topics: [
      "Developer (Frontend/Backend/Full-stack)",
      "QA/Tester — all testing types",
      "Business Analyst & Project Manager",
      "DevOps, DBA, Security Analyst",
      "Support L1/L2/L3, Operations",
      "Team Lead, Scrum Master, CTO",
    ],
    lessonCount: 7,
    free: true,
    accentClass: "text-[oklch(var(--corporate-accent))]",
    bgClass: "bg-[oklch(var(--corporate-accent)/0.07)]",
    borderClass: "border-[oklch(var(--corporate-accent)/0.3)]",
    badgeLabel: "Roles & Responsibilities",
  },
  {
    id: "culture",
    icon: BookOpen,
    emoji: "🔄",
    title: "How Companies Work",
    description:
      "Understand Agile vs Waterfall, sprint planning, story creation, Scrum ceremonies, and certifications that MNCs value. Build confidence in how modern IT teams operate.",
    topics: [
      "Waterfall vs Agile — scenario comparison",
      "Scrum framework & ceremonies",
      "Sprint planning, story points, velocity",
      "JIRA, Azure DevOps, Trello, Monday.com",
      "CSM & PSM I certifications",
      "MOM writing & meeting etiquette",
    ],
    lessonCount: 5,
    free: false,
    accentClass: "text-[oklch(var(--platform-accent))]",
    bgClass: "bg-[oklch(var(--platform-accent)/0.07)]",
    borderClass: "border-[oklch(var(--platform-accent)/0.3)]",
    badgeLabel: "Methodologies & Culture",
  },
  {
    id: "tools",
    icon: Wrench,
    emoji: "🛠️",
    title: "Team Collaboration Tools",
    description:
      "Every tool you'll use on Day 1. Slack channels, Teams meetings, Confluence docs, SharePoint, Notion, Zoom — plus how to write professional meeting minutes that impress your manager.",
    topics: [
      "Slack, Microsoft Teams, Google Chat",
      "Confluence, SharePoint, Notion",
      "Zoom, Meet — video meeting best practices",
      "Meeting agenda creation & etiquette",
      "Minutes of Meeting (MOM) templates",
      "Professional email communication",
    ],
    lessonCount: 4,
    free: false,
    accentClass: "text-[oklch(var(--skill-networking))]",
    bgClass: "bg-[oklch(var(--skill-networking)/0.07)]",
    borderClass: "border-[oklch(var(--skill-networking)/0.3)]",
    badgeLabel: "Collaboration Tools",
  },
  {
    id: "jargon",
    icon: MessageSquare,
    emoji: "💬",
    title: "Corporate Jargon & Terms",
    description:
      "Never be lost in meetings again. 30+ terms decoded with real sentences you'll hear on Day 1 — source, target, legacy, SLA, KPI, hotfix, sprint, velocity, and more.",
    topics: [
      "Data & system terms: Source, Legacy, Target",
      "Deployment & environments: Dev/QA/Prod",
      "Project terms: Sprint, Backlog, Velocity",
      "Testing terms: UAT, Regression, Hotfix",
      "People terms: Stakeholder, Escalation, SOP",
      "DevOps terms: CI/CD, Pipeline, Release",
    ],
    lessonCount: 4,
    free: false,
    accentClass: "text-[oklch(var(--etl-accent))]",
    bgClass: "bg-[oklch(var(--etl-accent)/0.07)]",
    borderClass: "border-[oklch(var(--etl-accent)/0.3)]",
    badgeLabel: "Key Terms to Know",
  },
];

export default function CorporateWorld() {
  const totalLessons = SECTIONS.reduce((sum, s) => sum + s.lessonCount, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-[oklch(var(--corporate-accent))] bg-[oklch(var(--corporate-accent)/0.1)] border border-[oklch(var(--corporate-accent)/0.3)]">
              <Building2 className="w-3.5 h-3.5" />
              Corporate World
            </span>
          </div>

          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3 leading-tight">
            Welcome to the{" "}
            <span className="text-[oklch(var(--corporate-accent))]">
              Corporate World
            </span>
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-6">
            Understand how IT companies really work — from your first standup to
            your first deployment. Built for freshers entering the IT world,
            with scenario-based learning that sticks.
          </p>

          {/* Scenario teaser */}
          <div className="bg-[oklch(var(--corporate-accent)/0.06)] border border-[oklch(var(--corporate-accent)/0.25)] rounded-xl p-4 max-w-2xl">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-bold text-[oklch(var(--corporate-accent))]">
                🎯 Day 1 Scenario:
              </span>{" "}
              Your manager says:{" "}
              <em>
                "We need to fix the legacy system before the UAT sign-off in
                this sprint. Please coordinate with the L2 support team and
                update the MOM."
              </em>
              <span className="block mt-2 text-muted-foreground text-xs">
                Without this section, that sentence is gibberish. After it,
                you're the most confident fresher in the room. 💪
              </span>
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mt-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground">
              <Trophy className="w-4 h-4 text-[oklch(var(--badge-gold))]" />
              <span className="font-semibold">{totalLessons} Lessons</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/50 border border-border text-sm text-foreground">
              <CheckCircle2 className="w-4 h-4 text-[oklch(var(--capstone-accent))]" />
              <span className="font-semibold">4 Quizzes included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Facts Banner */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {QUICK_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <span>{fact.icon}</span>
                <span>{fact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Cards */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="font-display font-bold text-xl text-foreground mb-6">
          Choose a Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SECTIONS.map((sec) => (
            <div
              key={sec.id}
              className={`group relative flex flex-col rounded-2xl border-2 ${sec.borderClass} ${sec.bgClass} hover:shadow-lg transition-smooth hover:-translate-y-0.5 overflow-hidden`}
              data-ocid={`corporate-section-card-${sec.id}`}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${sec.bgClass} border ${sec.borderClass} text-2xl`}
                  >
                    {sec.emoji}
                  </div>
                  <div className="flex flex-col items-end gap-1.5">
                    {sec.free ? (
                      <Badge className="bg-[oklch(var(--capstone-accent)/0.12)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.3)] text-xs font-semibold">
                        ✓ Free Access
                      </Badge>
                    ) : (
                      <Badge className="bg-[oklch(var(--badge-gold)/0.12)] text-[oklch(var(--badge-gold))] border-[oklch(var(--badge-gold)/0.3)] text-xs font-semibold">
                        ⭐ Premium
                      </Badge>
                    )}
                  </div>
                </div>

                <p
                  className={`text-xs font-bold uppercase tracking-wider ${sec.accentClass} mb-2`}
                >
                  {sec.badgeLabel}
                </p>
                <h3 className="font-display font-bold text-lg text-foreground leading-snug mb-3">
                  {sec.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {sec.description}
                </p>
              </div>

              {/* Topics list */}
              <div className="px-6 pb-4 flex-1">
                <ul className="space-y-1.5">
                  {sec.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${sec.accentClass} bg-current`}
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card footer */}
              <div
                className={`px-6 py-4 border-t ${sec.borderClass} flex items-center justify-between`}
              >
                <span className="text-xs text-muted-foreground">
                  {sec.lessonCount} lessons + quiz
                </span>
                <Link
                  to="/corporate-world/$section"
                  params={{ section: sec.id }}
                  data-ocid={`corporate-section-start-${sec.id}`}
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className={`gap-1.5 border ${sec.borderClass} ${sec.accentClass} hover:bg-[oklch(var(--corporate-accent)/0.1)] text-sm font-semibold transition-smooth group-hover:gap-2`}
                  >
                    {sec.free ? "Start Free" : "Explore"}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Learning path hint */}
        <div className="mt-10 rounded-2xl bg-card border border-border p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[oklch(var(--corporate-accent)/0.1)] border border-[oklch(var(--corporate-accent)/0.25)] flex items-center justify-center shrink-0 text-2xl">
              🗺️
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Recommended Learning Path
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Start with <strong className="text-foreground">IT Roles</strong>{" "}
                (free) → then{" "}
                <strong className="text-foreground">How Companies Work</strong>{" "}
                → then{" "}
                <strong className="text-foreground">Collaboration Tools</strong>{" "}
                → finally{" "}
                <strong className="text-foreground">Corporate Jargon</strong>.
                By the end, you'll be the most prepared fresher in any
                interview!
              </p>
              <div className="flex flex-wrap gap-2">
                {SECTIONS.map((s, i) => (
                  <div
                    key={s.id}
                    className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${s.borderClass} ${s.bgClass}`}
                  >
                    <span
                      className={`font-bold ${s.accentClass} w-4 h-4 rounded-full flex items-center justify-center bg-current/10 text-[10px]`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-medium text-foreground">
                      {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
