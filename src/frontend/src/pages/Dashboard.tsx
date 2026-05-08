import { CertificateCard } from "@/components/CertificateCard";
import { PaywallModal } from "@/components/PaywallModal";
import { SubscriptionCountdown } from "@/components/SubscriptionCountdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useCertificates } from "@/hooks/useCertificates";
import { useGlossary } from "@/hooks/useGlossary";
import { useModules } from "@/hooks/useModules";
import { useProgress } from "@/hooks/useProgress";
import { useSubscription } from "@/hooks/useSubscription";
import {
  formatCategory,
  formatMinutes,
  getCategoryColor,
} from "@/lib/formatters";
import { downloadCertificateAsPdf } from "@/lib/pdfDownload";
import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Clock,
  Crown,
  Database,
  Globe,
  GraduationCap,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

// ─── Sub-components ───────────────────────────────────────────────────────

function ProgressBar({
  value,
  color = "bg-primary",
  height = "h-2",
}: {
  value: number;
  color?: string;
  height?: string;
}) {
  return (
    <div className={`${height} bg-muted rounded-full overflow-hidden`}>
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
  delay = 0,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  color: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-smooth hover:border-primary/20"
    >
      <div className={`p-2.5 rounded-lg shrink-0 ${color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-display font-bold text-lg text-foreground leading-tight truncate">
          {value}
        </p>
        {sub && <p className="text-[10px] text-muted-foreground">{sub}</p>}
      </div>
    </motion.div>
  );
}

// ─── Quick Access Card ────────────────────────────────────────────────────

interface QuickLinkConfig {
  to: string;
  icon: React.ElementType;
  label: string;
  description: string;
  accentClass: string;
  ocid: string;
}

const QUICK_LINKS: QuickLinkConfig[] = [
  {
    to: "/corporate-world",
    icon: Briefcase,
    label: "Corporate World",
    description: "Roles, agile, jargon & collaboration",
    accentClass:
      "bg-[oklch(var(--corporate-accent)/0.12)] text-corporate border-[oklch(var(--corporate-accent)/0.3)]",
    ocid: "quick-link-corporate",
  },
  {
    to: "/modules",
    icon: BookOpen,
    label: "Skills Hub",
    description: "Python, SQL, DevOps, Cloud & more",
    accentClass: "bg-primary/10 text-primary border-primary/25",
    ocid: "quick-link-skills",
  },
  {
    to: "/glossary",
    icon: Database,
    label: "Glossary",
    description: "50+ IT terms explained clearly",
    accentClass:
      "bg-[oklch(var(--skill-networking)/0.12)] text-[oklch(var(--skill-networking))] border-[oklch(var(--skill-networking)/0.3)]",
    ocid: "quick-link-glossary",
  },
  {
    to: "/quiz",
    icon: Target,
    label: "Readiness Quiz",
    description: "Test your corporate readiness",
    accentClass:
      "bg-secondary/15 text-secondary-foreground border-secondary/30",
    ocid: "quick-link-quiz",
  },
  {
    to: "/mnc-platforms",
    icon: Globe,
    label: "MNC Platforms",
    description: "Salesforce, Snowflake & more",
    accentClass:
      "bg-[oklch(var(--platform-accent)/0.1)] text-[oklch(var(--platform-accent))] border-[oklch(var(--platform-accent)/0.3)]",
    ocid: "quick-link-mnc",
  },
  {
    to: "/capstone-project",
    icon: Trophy,
    label: "Capstone Project",
    description: "Build your IT portfolio",
    accentClass:
      "bg-[oklch(var(--capstone-accent)/0.1)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.3)]",
    ocid: "quick-link-capstone",
  },
];

// ─── Main Dashboard ──────────────────────────────────────────────────────────

export default function Dashboard() {
  const { data: modules, isLoading: modulesLoading } = useModules();
  const { data: progress } = useProgress();
  const { data: glossaryTerms } = useGlossary();
  const { isSubscribed, daysRemaining } = useSubscription();
  const { data: certificates } = useCertificates();

  const { loginStatus } = useInternetIdentity();
  const _isAuthenticated = loginStatus === "success";
  const [activeTab, setActiveTab] = useState<"overview" | "certificates">(
    "overview",
  );
  const [paywallOpen, setPaywallOpen] = useState(false);

  const completedCount = progress?.completedModules.length ?? 0;
  const totalModules = modules?.length ?? 27;
  const overallProgress = Math.round((completedCount / totalModules) * 100);

  // Dynamic greeting based on time of day
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  const completedSet = new Set(progress?.completedModules ?? []);

  // "In progress" = modules with partial progress OR the next module after the last completed one.
  // Since all MOCK_MODULES have progress:0, new users always see the empty state.
  const lastCompletedId =
    progress?.completedModules[progress.completedModules.length - 1];
  const inProgressModules = (() => {
    if (!modules) return [];
    const withPartial = modules.filter(
      (m) => m.progress > 0 && m.progress < 100 && !completedSet.has(m.id),
    );
    if (withPartial.length > 0) return withPartial.slice(0, 3);
    if (lastCompletedId) {
      const lastIdx = modules.findIndex((m) => m.id === lastCompletedId);
      const next = modules
        .slice(lastIdx + 1)
        .find((m) => !completedSet.has(m.id));
      return next ? [next] : [];
    }
    return [];
  })();

  const featuredModules =
    modules
      ?.filter((m) => !completedSet.has(m.id) && !m.isComingSoon)
      .slice(0, 3) ?? [];
  const recentGlossary = glossaryTerms?.slice(0, 3) ?? [];

  const corporateModules =
    modules?.filter((m) => m.category === "corporateworld") ?? [];
  const corporateCompleted = corporateModules.filter((m) =>
    progress?.completedModules.includes(m.id),
  ).length;
  const corporateProgress =
    corporateModules.length > 0
      ? Math.round((corporateCompleted / corporateModules.length) * 100)
      : 0;

  const skillModules =
    modules?.filter(
      (m) =>
        !["corporateworld", "mncplatforms", "etltools", "capstone"].includes(
          m.category,
        ),
    ) ?? [];
  const skillCompleted = skillModules.filter((m) =>
    progress?.completedModules.includes(m.id),
  ).length;
  const skillProgress =
    skillModules.length > 0
      ? Math.round((skillCompleted / skillModules.length) * 100)
      : 0;

  const certCount = certificates?.length ?? 0;

  // Click-capture handler is inlined in the overlay div above

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-8 relative">
      <PaywallModal open={paywallOpen} onOpenChange={setPaywallOpen} />
      {/* ── Motivational Header ──────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden"
      >
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{ background: "oklch(var(--primary))" }}
        />
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <Sparkles className="w-4 h-4 text-secondary-foreground" />
              <span>{greeting}, Learner! 🚀</span>
            </div>
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-foreground leading-tight">
              Ready to Level Up Today? 🚀
            </h1>
            <p className="text-muted-foreground text-sm max-w-xl">
              You're on a{" "}
              <span className="font-semibold text-foreground">
                {progress?.streakDays ?? 0}-day streak
              </span>
              . Keep the momentum — complete a module today to stay
              corporate-ready.
            </p>
          </div>
          <div className="flex flex-col items-center bg-muted/40 rounded-xl px-6 py-4 min-w-[140px] border border-border">
            <div className="flex items-center gap-1 mb-1">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                Progress
              </span>
            </div>
            <span className="font-display font-bold text-3xl text-primary">
              {overallProgress}%
            </span>
            <div className="w-full mt-2 space-y-1">
              <ProgressBar
                value={overallProgress}
                color="bg-primary"
                height="h-1.5"
              />
              <p className="text-[10px] text-muted-foreground text-center">
                {completedCount} / {totalModules} courses done
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Stats Grid ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard
          icon={BookOpen}
          label="Courses Available"
          value="27"
          sub="Across all tracks"
          color="bg-primary/15 text-primary"
          delay={0.05}
        />
        <StatCard
          icon={Award}
          label="Completed"
          value={`${completedCount} / 27`}
          sub={`${overallProgress}% done`}
          color="bg-secondary/20 text-secondary-foreground"
          delay={0.1}
        />
        <StatCard
          icon={Clock}
          label="Learning Hours"
          value={`${progress?.totalLearningHours ?? 0}h`}
          sub="Hands-on practice"
          color="bg-accent/20 text-accent-foreground"
          delay={0.15}
        />
        <StatCard
          icon={GraduationCap}
          label="Certificates"
          value={String(certCount)}
          sub={
            certCount === 1
              ? "1 course completed"
              : `${certCount} courses completed`
          }
          color="bg-[oklch(0.65_0.18_85/0.15)] text-[oklch(0.65_0.18_85)]"
          delay={0.2}
        />
      </div>

      {/* ── Subscription Countdown ─────────────────────────── */}
      {isSubscribed && daysRemaining !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <SubscriptionCountdown />
        </motion.div>
      )}

      {/* ── Tabs ──────────────────────────────────────────────── */}
      <div className="flex items-center gap-1 border-b border-border">
        <button
          type="button"
          data-ocid="dashboard.overview.tab"
          onClick={() => setActiveTab("overview")}
          className={`px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors relative ${
            activeTab === "overview"
              ? "text-primary border-b-2 border-primary bg-primary/5"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          Overview
        </button>
        <button
          type="button"
          data-ocid="dashboard.certificates.tab"
          onClick={() => setActiveTab("certificates")}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-t-lg transition-colors ${
            activeTab === "certificates"
              ? "text-primary border-b-2 border-primary bg-primary/5"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          Certificates
          {certCount > 0 && (
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
              {certCount}
            </span>
          )}
        </button>
      </div>

      {/* ── Tab Content ─────────────────────────────────────── */}
      {activeTab === "certificates" ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-5"
          data-ocid="dashboard.certificates.section"
        >
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
              <Award className="w-5 h-5 text-[oklch(0.65_0.18_85)]" />
              My Certificates
            </h2>
            {certCount > 0 && (
              <Link to="/certificates">
                <button
                  type="button"
                  data-ocid="dashboard.view-all-certificates.link"
                  className="text-xs text-primary hover:underline"
                >
                  View all →
                </button>
              </Link>
            )}
          </div>
          {certCount === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-dashed border-border rounded-2xl p-10 text-center space-y-3"
              data-ocid="dashboard.certificates.empty_state"
            >
              <Trophy className="w-10 h-10 text-muted-foreground mx-auto" />
              <h3 className="font-display font-bold text-lg text-foreground">
                No Certificates Yet
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Complete a course to earn your first certificate of completion.
              </p>
              <Link to="/modules">
                <button
                  type="button"
                  data-ocid="dashboard.certificates.browse-button"
                  className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Browse Courses
                </button>
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {certificates?.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  data-ocid={`dashboard.certificates.item.${i + 1}`}
                >
                  <CertificateCard
                    certificate={cert}
                    userName="Learner"
                    onDownload={() => downloadCertificateAsPdf(cert, "Learner")}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      ) : (
        <>
          {/* ── Quick Access Links ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display font-bold text-xl text-foreground">
                Quick Access
              </h2>
              <span className="text-xs text-muted-foreground">
                Jump right in
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {QUICK_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.35 }}
                >
                  <Link to={link.to} data-ocid={link.ocid}>
                    <div
                      className={`border rounded-xl p-3.5 flex flex-col items-center text-center gap-2 cursor-pointer hover:shadow-md transition-smooth hover:-translate-y-0.5 ${link.accentClass}`}
                    >
                      <link.icon className="w-5 h-5" />
                      <div>
                        <p className="text-xs font-bold leading-tight">
                          {link.label}
                        </p>
                        <p className="text-[10px] opacity-70 leading-snug mt-0.5 line-clamp-2">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Main Content Grid ─────────────────────────── */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="xl:col-span-2 space-y-6">
              {/* Continue Learning */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-xl text-foreground">
                    Continue Learning
                  </h2>
                  <Link to="/modules">
                    <Button
                      variant="ghost"
                      size="sm"
                      data-ocid="cta-view-all-modules"
                      className="gap-1 text-primary"
                    >
                      All Courses <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
                {modulesLoading ? (
                  <div className="space-y-3">
                    {["s1", "s2", "s3"].map((k) => (
                      <Skeleton key={k} className="h-20 rounded-xl" />
                    ))}
                  </div>
                ) : inProgressModules.length === 0 ? (
                  <div
                    className="border border-dashed border-border rounded-xl p-8 text-center space-y-2"
                    data-ocid="empty-continue-learning"
                  >
                    <BookOpen className="w-8 h-8 text-muted-foreground mx-auto" />
                    <p className="font-medium text-foreground">
                      No courses started yet
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Pick a course below and start your IT journey!
                    </p>
                    <Link to="/modules">
                      <Button
                        size="sm"
                        className="btn-primary mt-2"
                        data-ocid="cta-browse-courses"
                      >
                        Browse Courses
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {inProgressModules.map((mod, i) => {
                      const modProgress = completedSet.has(mod.id)
                        ? 100
                        : mod.progress;
                      return (
                        <motion.div
                          key={mod.id}
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        >
                          <Link
                            to="/modules/$id"
                            params={{ id: mod.id }}
                            data-ocid={`continue-module-${mod.id}`}
                          >
                            <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-md transition-smooth hover:border-primary/30 cursor-pointer group">
                              <div className="text-3xl shrink-0">
                                {mod.icon}
                              </div>
                              <div className="flex-1 min-w-0 space-y-1.5">
                                <div className="flex items-center justify-between gap-2">
                                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                                    {mod.title}
                                  </h3>
                                  <span className="text-xs font-bold text-primary shrink-0">
                                    {modProgress}%
                                  </span>
                                </div>
                                <ProgressBar
                                  value={modProgress}
                                  color={
                                    modProgress >= 70
                                      ? "bg-secondary"
                                      : "bg-primary"
                                  }
                                  height="h-1.5"
                                />
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {formatMinutes(mod.estimatedMinutes)}
                                  </span>
                                  <span className="text-xs text-muted-foreground">
                                    {mod.topics?.length ?? 0} topics
                                  </span>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Featured This Week */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-display font-bold text-xl text-foreground flex items-center gap-2">
                    <Star className="w-5 h-5 text-[oklch(var(--badge-gold))]" />
                    Featured This Week
                  </h2>
                  <Link to="/courses">
                    <Button
                      variant="ghost"
                      size="sm"
                      data-ocid="cta-view-courses"
                      className="gap-1 text-primary"
                    >
                      Explore All <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {featuredModules.map((mod, i) => {
                    return (
                      <motion.div
                        key={mod.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                      >
                        <Link
                          to="/modules/$id"
                          params={{ id: mod.id }}
                          data-ocid={`featured-module-${mod.id}`}
                        >
                          <Card className="h-full hover:shadow-md transition-smooth border-border hover:border-primary/30 cursor-pointer group relative overflow-hidden">
                            <div className="h-1 w-full bg-primary opacity-60" />
                            <CardContent className="p-4 space-y-3">
                              <div className="flex items-start justify-between gap-2">
                                <div className="text-2xl">{mod.icon}</div>
                                <Badge
                                  className={`text-xs border ${getCategoryColor(mod.category)}`}
                                >
                                  {formatCategory(mod.category)}
                                </Badge>
                              </div>
                              <div>
                                <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors leading-tight text-sm">
                                  {mod.title}
                                </h3>
                                {!isSubscribed && (
                                  <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary border border-primary/25">
                                    1st lesson free
                                  </span>
                                )}
                                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                  {mod.description}
                                </p>
                              </div>
                              <div className="flex items-center justify-between text-xs">
                                <span className="flex items-center gap-1 text-muted-foreground">
                                  <Clock className="w-3 h-3" />
                                  {formatMinutes(mod.estimatedMinutes)}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {mod.topics?.length ?? 0} topics
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                                Start Learning{" "}
                                <ArrowRight className="w-3 h-3" />
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-5">
              {/* Progress Overview */}
              <Card className="border-border">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-display font-bold text-foreground">
                      Progress Overview
                    </h3>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground">Overall</span>
                      <span className="font-bold text-foreground">
                        {overallProgress}%
                      </span>
                    </div>
                    <ProgressBar value={overallProgress} color="bg-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Briefcase className="w-3 h-3" /> Corporate World
                      </span>
                      <span className="font-bold text-corporate">
                        {corporateProgress}%
                      </span>
                    </div>
                    <ProgressBar
                      value={corporateProgress}
                      color="bg-[oklch(var(--corporate-accent))]"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> Skills Hub
                      </span>
                      <span className="font-bold text-primary">
                        {skillProgress}%
                      </span>
                    </div>
                    <ProgressBar value={skillProgress} color="bg-primary" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <BookOpen className="w-3 h-3" /> Lessons Completed
                      </span>
                      <span className="font-bold text-foreground">
                        {completedCount} / {totalModules}
                      </span>
                    </div>
                    <ProgressBar value={overallProgress} color="bg-primary" />
                  </div>
                  {(progress?.quizScores ?? []).length > 0 && (
                    <div className="space-y-2 pt-1 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Recent Scores
                      </p>
                      {progress?.quizScores.slice(0, 3).map((qs) => {
                        const mod = modules?.find((m) => m.id === qs.moduleId);
                        return (
                          <div
                            key={qs.moduleId}
                            className="flex items-center justify-between text-xs"
                          >
                            <span className="text-muted-foreground truncate max-w-[130px]">
                              {mod?.title ?? qs.moduleId}
                            </span>
                            <Badge className="badge-success text-[10px]">
                              {qs.score}%
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Achievements */}
              <div className="bg-card border border-border rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-[oklch(var(--badge-gold))]" />
                  <h3 className="font-display font-bold text-foreground">
                    Achievements
                  </h3>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      id: "streak",
                      emoji: "🔥",
                      label: `${progress?.streakDays ?? 0}d Streak`,
                    },
                    {
                      id: "done",
                      emoji: "📚",
                      label: `${completedCount} Done`,
                    },
                    {
                      id: "hours",
                      emoji: "⏱️",
                      label: `${progress?.totalLearningHours ?? 0}h Learned`,
                    },
                    { id: "quiz", emoji: "🎯", label: "Quiz Ace" },
                  ].map((badge) => (
                    <div
                      key={badge.id}
                      className="flex flex-col items-center gap-1 rounded-lg p-2 text-center border transition-smooth border-[oklch(var(--badge-gold)/0.3)] bg-[oklch(var(--badge-gold)/0.07)]"
                    >
                      <span className="text-xl">{badge.emoji}</span>
                      <span className="text-[10px] font-medium text-muted-foreground leading-tight">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate Readiness CTA */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-secondary-foreground" />
                  <h3 className="font-display font-bold text-foreground">
                    Corporate Readiness
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Take our readiness quiz and see how prepared you are for the
                  IT workplace. 10 targeted questions.
                </p>
                <Link to="/quiz">
                  <Button
                    className="w-full btn-primary mt-1"
                    data-ocid="cta-take-quiz"
                  >
                    Take Readiness Test
                  </Button>
                </Link>
              </div>

              {/* Community CTA */}
              <div className="bg-primary/8 border border-primary/20 rounded-xl p-4 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <p className="text-sm font-bold text-foreground">
                    10,000+ Freshers Learning
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Join the community and fast-track your IT career.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Glossary Spotlight ─────────────────────────── */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display font-bold text-xl text-foreground">
                  Glossary Spotlight
                </h2>
                <p className="text-sm text-muted-foreground">
                  Master IT terms before your first day at work.
                </p>
              </div>
              <Link to="/glossary">
                <Button
                  variant="ghost"
                  size="sm"
                  data-ocid="cta-view-glossary"
                  className="gap-1 text-primary"
                >
                  Full Glossary <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recentGlossary.map((term, i) => (
                <motion.div
                  key={term.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card
                    className="h-full border-border hover:border-primary/30 transition-smooth"
                    data-ocid={`glossary-card-${term.id}`}
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-display font-bold text-foreground">
                          {term.term}
                        </h4>
                        <Badge
                          className={`text-xs border shrink-0 ${getCategoryColor(term.category)}`}
                        >
                          {formatCategory(term.category)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {term.definition}
                      </p>
                      {term.relatedTerms.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {term.relatedTerms.slice(0, 3).map((rt) => (
                            <span
                              key={rt}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                            >
                              {rt}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
