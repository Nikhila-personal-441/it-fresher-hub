import { PaywallModal } from "@/components/PaywallModal";
import { SubscriptionCountdown } from "@/components/SubscriptionCountdown";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSignInGate } from "@/contexts/SignInGateContext";
import { useIsAdmin } from "@/hooks/useAuth";
import { useSubscription } from "@/hooks/useSubscription";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useLocation } from "@tanstack/react-router";
import {
  BookMarked,
  Building2,
  ClipboardCheck,
  Crown,
  Database,
  Globe,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Rocket,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  to: string;
  label: string;
  icon: React.ElementType;
  dataOcid: string;
  accentClass?: string;
  search?: Record<string, string>;
};

const NAV_ITEMS: NavItem[] = [
  {
    to: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
    dataOcid: "nav-dashboard",
  },
  {
    to: "/courses",
    label: "Skills Hub",
    icon: GraduationCap,
    dataOcid: "nav-courses",
  },
  {
    to: "/corporate-world",
    label: "Corporate World",
    icon: Building2,
    dataOcid: "nav-corporate-world",
    accentClass: "text-[oklch(var(--corporate-accent))]",
  },
  {
    to: "/mnc-platforms",
    label: "MNC Platforms",
    icon: Globe,
    dataOcid: "nav-mnc-platforms",
    accentClass: "text-[oklch(var(--platform-accent))]",
  },

  {
    to: "/capstone-project",
    label: "Capstone Project",
    icon: Rocket,
    dataOcid: "nav-capstone",
    accentClass: "text-[oklch(var(--capstone-accent))]",
  },
  {
    to: "/glossary",
    label: "Glossary",
    icon: BookMarked,
    dataOcid: "nav-glossary",
  },
  {
    to: "/quiz",
    label: "Corporate Readiness Quiz",
    icon: ClipboardCheck,
    dataOcid: "nav-quiz",
  },
];

interface LayoutProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

export function Layout({ children, isLoggedIn = false }: LayoutProps) {
  const location = useLocation();
  const { logout, user } = useAuth();
  const { isSubscribed } = useSubscription();
  const { isAdmin } = useIsAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { openDismissibleGate } = useSignInGate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerDropdownRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    if (!profileDropdownOpen) return;
    function handleOutside(e: MouseEvent) {
      const target = e.target as Node;
      const inSidebar = dropdownRef.current?.contains(target) ?? false;
      const inHeader = headerDropdownRef.current?.contains(target) ?? false;
      if (!inSidebar && !inHeader) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [profileDropdownOpen]);

  // First letter of the user's email/name for the avatar
  const principalInitial = user
    ? (user.displayName?.[0] ?? user.email?.[0] ?? "U").toUpperCase()
    : "U";

  // Nav items — admin link only shown to admin users
  const visibleNavItems: NavItem[] = [
    ...NAV_ITEMS,
    ...(isAdmin
      ? [
          {
            to: "/admin",
            label: "Admin Dashboard",
            icon: Shield,
            dataOcid: "nav-admin",
            accentClass: "text-rose-500",
          } satisfies NavItem,
        ]
      : []),
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <PaywallModal open={paywallOpen} onOpenChange={setPaywallOpen} />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-foreground/40 lg:hidden"
          role="button"
          tabIndex={0}
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-30 flex flex-col w-64 bg-accent text-accent-foreground transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-accent-foreground/10">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <p className="font-display font-bold text-sm leading-tight text-accent-foreground">
              IT Fresher Hub
            </p>
            <p className="text-xs text-accent-foreground/60">
              Your IT launchpad
            </p>
          </div>
          <button
            type="button"
            className="ml-auto lg:hidden text-accent-foreground/70 hover:text-accent-foreground"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-0.5 overflow-y-auto">
          <p className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground/40 mb-2">
            Navigation
          </p>
          {visibleNavItems.map(
            ({ to, label, icon: Icon, dataOcid, accentClass, search }) => {
              const isActive =
                to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(to);

              return (
                <Link
                  key={dataOcid}
                  to={to}
                  search={search}
                  data-ocid={dataOcid}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : cn(
                          "text-accent-foreground/70 hover:bg-accent-foreground/10 hover:text-accent-foreground",
                          accentClass && !isActive ? accentClass : "",
                        ),
                  )}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1">{label}</span>
                </Link>
              );
            },
          )}
        </nav>

        {/* Subscription countdown (subscribers only) */}
        {isSubscribed && (
          <div className="px-3 pb-2">
            <SubscriptionCountdown compact />
          </div>
        )}

        {/* Upgrade CTA in sidebar (non-subscribers only) */}
        {!isSubscribed && (
          <div className="px-3 pb-2">
            <button
              type="button"
              onClick={() => setPaywallOpen(true)}
              data-ocid="sidebar-upgrade-btn"
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold bg-amber-400/15 text-amber-600 border border-amber-400/25 hover:bg-amber-400/25 transition-smooth"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Upgrade</span>
            </button>
          </div>
        )}

        {/* Auth section */}
        <div className="p-4 border-t border-accent-foreground/10">
          {isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              {/* Profile avatar — clickable to reveal Sign Out dropdown */}
              <button
                type="button"
                onClick={() => setProfileDropdownOpen((v) => !v)}
                data-ocid="sidebar-profile-btn"
                className="flex items-center gap-2 w-full px-2 py-2 rounded-lg hover:bg-accent-foreground/10 transition-smooth"
                aria-label="Profile menu"
                aria-expanded={profileDropdownOpen}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold select-none shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  }}
                  title={user?.email ?? ""}
                >
                  {principalInitial}
                </div>
                <span className="flex-1 text-sm text-accent-foreground/80 text-left">
                  My Account
                </span>
              </button>
              {/* Dropdown */}
              {profileDropdownOpen && (
                <div className="absolute bottom-full left-0 right-0 mb-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setProfileDropdownOpen(false);
                    }}
                    data-ocid="btn-logout"
                    className="flex items-center gap-2 w-full px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                  >
                    <LogOut className="w-4 h-4 text-muted-foreground" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              onClick={openDismissibleGate}
              data-ocid="sidebar-signin-btn"
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-accent-foreground/70 hover:bg-accent-foreground/10 hover:text-accent-foreground transition-smooth"
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-muted border border-border shrink-0">
                <LogIn className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
              <span>Sign in</span>
            </button>
          )}
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between px-4 sm:px-6 h-16 bg-card border-b border-border shrink-0 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden p-1.5 rounded-md hover:bg-muted transition-smooth"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden lg:block">
              <h1 className="font-display font-bold text-lg text-foreground">
                IT Fresher Hub
              </h1>
              <p className="text-xs text-muted-foreground">
                Your gateway to the IT world
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {isSubscribed ? (
              <Badge
                className="hidden sm:flex items-center gap-1 bg-amber-400/20 text-amber-600 border-amber-400/40 text-xs font-bold px-2.5 py-1"
                data-ocid="header-premium-badge"
              >
                <Crown className="w-3 h-3" />
                Premium Active
              </Badge>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPaywallOpen(true)}
                data-ocid="header-upgrade-btn"
                className="hidden sm:flex items-center gap-1.5 text-amber-600 hover:text-amber-700 hover:bg-amber-400/10 text-xs font-semibold border border-amber-400/25 h-8 px-3"
              >
                <Sparkles className="w-3 h-3" />
                Upgrade
              </Button>
            )}

            {isLoggedIn ? (
              <div className="relative" ref={headerDropdownRef}>
                {/* Profile avatar — click to reveal Sign Out dropdown */}
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen((v) => !v)}
                  data-ocid="header-profile-btn"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold select-none cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all"
                  style={{
                    background:
                      "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                  }}
                  title={user?.email ?? ""}
                  aria-label="Profile menu"
                  aria-expanded={profileDropdownOpen}
                >
                  {principalInitial}
                </button>
                {/* Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-40 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50">
                    <button
                      type="button"
                      onClick={() => {
                        logout();
                        setProfileDropdownOpen(false);
                      }}
                      data-ocid="header-btn-logout"
                      className="flex items-center gap-2 w-full px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-muted-foreground" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                type="button"
                onClick={openDismissibleGate}
                data-ocid="header-signin-btn"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-muted border border-border hover:bg-primary/10 hover:border-primary/40 transition-smooth"
                title="Sign in"
                aria-label="Sign in"
              >
                <LogIn className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            )}
          </div>
        </header>

        {/* Page content — always fully visible, no blur */}
        <div className="relative flex-1 overflow-hidden">
          <main className="h-full overflow-y-auto bg-background">
            {children}
          </main>
        </div>

        {/* Footer: contact support + branding */}
        <footer className="shrink-0 border-t border-border bg-muted/40 px-4 sm:px-6 py-3 text-center text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-1">
            <a
              href="mailto:itfreshershub@gmail.com?subject=IT%20Fresher%20Hub%20Support&body=Hi%20Team%2C%0A%0AI%20need%20help%20with%3A%0A%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
              data-ocid="footer-contact-support"
            >
              Contact Support
            </a>
          </div>
          © {new Date().getFullYear()} IT Fresher Hub. Built with ❤️ for
          aspiring IT professionals.
        </footer>
      </div>
    </div>
  );
}
