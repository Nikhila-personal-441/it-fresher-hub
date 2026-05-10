import { Layout } from "@/components/Layout";
import { PwaInstallPrompt } from "@/components/PwaInstallPrompt";
import { SignInPromptModal } from "@/components/SignInPromptModal";
import { Skeleton } from "@/components/ui/skeleton";
import { SignInGateProvider } from "@/contexts/SignInGateContext";
import { useAuth } from "@/contexts/AuthContext";
import { useIsAdmin } from "@/hooks/useAuth";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useNavigate,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import PaymentSuccess from "./pages/PaymentSuccess";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const ModuleList = lazy(() => import("@/pages/ModuleList"));
const ModuleDetail = lazy(() => import("@/pages/ModuleDetail"));
const Glossary = lazy(() => import("@/pages/Glossary"));
const Quiz = lazy(() => import("@/pages/Quiz"));
const QuizResult = lazy(() => import("@/pages/QuizResult"));
const CoursesHub = lazy(() => import("@/pages/CoursesHub"));
const CorporateWorld = lazy(() => import("@/pages/CorporateWorld"));
const CorporateWorldSection = lazy(
  () => import("@/pages/CorporateWorldSection"),
);
const MncPlatforms = lazy(() => import("@/pages/MncPlatforms"));
const EtlTools = lazy(() => import("@/pages/EtlTools"));
const CapstoneProject = lazy(() => import("@/pages/CapstoneProject"));
const AdminDashboard = lazy(() => import("@/pages/AdminDashboard"));
const Certificates = lazy(() => import("@/pages/Certificates"));

function PageLoader() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-96" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {["m1", "m2", "m3", "m4", "m5", "m6"].map((key) => (
          <Skeleton key={key} className="h-40 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

function AdminGuard() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { isAdmin, isLoading } = useIsAdmin();
  const navigate = useNavigate({ from: "/admin" });

  // Still determining auth or identity state — show loader, never redirect
  const authPending = authLoading || isLoading;

  if (authPending) {
    return <PageLoader />;
  }

  if (!isAdmin) {
    void navigate({ to: "/" });
    return null;
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <AdminDashboard />
    </Suspense>
  );
}

function AppLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <SignInGateProvider>
      <Layout isLoggedIn={isAuthenticated}>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Layout>
      <SignInPromptModal />
    </SignInGateProvider>
  );
}

const rootRoute = createRootRoute({ component: AppLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});
const coursesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/courses",
  component: CoursesHub,
  validateSearch: (search: Record<string, unknown>): { category?: string } => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
});
const modulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/modules",
  component: ModuleList,
  validateSearch: (search: Record<string, unknown>): { category?: string } => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
});
const moduleDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/modules/$id",
  component: ModuleDetail,
});
const corporateWorldRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/corporate-world",
  component: CorporateWorld,
});
const corporateWorldSectionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/corporate-world/$section",
  component: CorporateWorldSection,
});
const mncPlatformsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/mnc-platforms",
  component: MncPlatforms,
});
const etlToolsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/etl-tools",
  component: EtlTools,
});
const capstoneProjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/capstone-project",
  component: CapstoneProject,
});
const glossaryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/glossary",
  component: Glossary,
});
const quizRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz",
  component: Quiz,
});
const quizResultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/quiz/result",
  component: QuizResult,
});
const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin",
  component: AdminGuard,
});
const certificatesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/certificates",
  component: Certificates,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  coursesRoute,
  modulesRoute,
  moduleDetailRoute,
  corporateWorldRoute,
  corporateWorldSectionRoute,
  mncPlatformsRoute,
  etlToolsRoute,
  capstoneProjectRoute,
  glossaryRoute,
  quizRoute,
  quizResultRoute,
  adminRoute,
  certificatesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PwaInstallPrompt />
    </>
  );
}
