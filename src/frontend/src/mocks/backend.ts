import { 
  AdminUserView,
  CertificateView,
  GlossaryCategory,
  ModuleCategory,
  SubscriptionStats,
  SubscriptionStatus,
 } from "../backend";
import type { 
  CourseCompletion,
  ITModule,
  QuizAttempt,
  QuizQuestion,
  SubscriptionView,
  Term,
  UserProgress,
  backendInterface,
 } from "../backend";

const now = BigInt(Date.now()) * BigInt(1_000_000);
const day45 = now + BigInt(45) * BigInt(24) * BigInt(60) * BigInt(60) * BigInt(1_000_000_000);

const sampleModules: ITModule[] = [
  {
    id: BigInt(1),
    title: "Python for IT Freshers",
    description: "Master Python from scratch with real-world scenarios used in IT companies.",
    difficulty: "Beginner",
    lessons: [
      { title: "Introduction to Python", description: "Setup and first program", durationMinutes: BigInt(30) },
      { title: "Variables & Data Types", description: "Learn core types", durationMinutes: BigInt(45) },
      { title: "Control Flow", description: "If/else, loops", durationMinutes: BigInt(40) },
    ],
    isComingSoon: false,
    topics: ["Variables", "Functions", "OOP", "File I/O"],
    estimatedHours: BigInt(10),
    category: ModuleCategory.python,
    estimatedMinutes: BigInt(600),
  },
  {
    id: BigInt(2),
    title: "SQL Mastery",
    description: "Learn SQL with hands-on queries used in real MNC databases.",
    difficulty: "Beginner",
    lessons: [
      { title: "What is a Database?", description: "RDBMS concepts", durationMinutes: BigInt(30) },
      { title: "SELECT Queries", description: "Fetching data", durationMinutes: BigInt(45) },
    ],
    isComingSoon: false,
    topics: ["SELECT", "JOINs", "Aggregations", "Stored Procedures"],
    estimatedHours: BigInt(8),
    category: ModuleCategory.sql,
    estimatedMinutes: BigInt(480),
  },
  {
    id: BigInt(3),
    title: "Corporate World",
    description: "Understand IT roles, methodologies, sprint planning, and corporate culture.",
    difficulty: "Beginner",
    lessons: [
      { title: "IT Roles Overview", description: "Developer, Tester, Admin, Operations", durationMinutes: BigInt(40) },
      { title: "Agile & Scrum", description: "Sprint planning, stories, standups", durationMinutes: BigInt(50) },
    ],
    isComingSoon: false,
    topics: ["Roles", "Agile", "Scrum", "Communication"],
    estimatedHours: BigInt(6),
    category: ModuleCategory.corporateWorld,
    estimatedMinutes: BigInt(360),
  },
  {
    id: BigInt(4),
    title: "Cloud Computing & AWS",
    description: "Deep-dive into AWS core services used by MNCs globally.",
    difficulty: "Intermediate",
    lessons: [
      { title: "Cloud Concepts", description: "IaaS, PaaS, SaaS explained", durationMinutes: BigInt(35) },
      { title: "AWS Core Services", description: "EC2, S3, RDS, Lambda", durationMinutes: BigInt(60) },
    ],
    isComingSoon: false,
    topics: ["EC2", "S3", "RDS", "Lambda", "VPC"],
    estimatedHours: BigInt(12),
    category: ModuleCategory.cloudaws,
    estimatedMinutes: BigInt(720),
  },
  {
    id: BigInt(5),
    title: "DevOps Fundamentals",
    description: "CI/CD pipelines, Docker, Kubernetes and DevOps culture.",
    difficulty: "Intermediate",
    lessons: [
      { title: "What is DevOps?", description: "Culture and practices", durationMinutes: BigInt(30) },
      { title: "Git & CI/CD", description: "Version control and pipelines", durationMinutes: BigInt(50) },
    ],
    isComingSoon: false,
    topics: ["Docker", "Kubernetes", "Jenkins", "Git"],
    estimatedHours: BigInt(10),
    category: ModuleCategory.devops,
    estimatedMinutes: BigInt(600),
  },
  {
    id: BigInt(6),
    title: "AI & Machine Learning",
    description: "From basics to real ML models with Python.",
    difficulty: "Advanced",
    lessons: [
      { title: "Intro to AI", description: "What is AI, types", durationMinutes: BigInt(30) },
      { title: "Machine Learning Concepts", description: "Supervised/unsupervised learning", durationMinutes: BigInt(45) },
    ],
    isComingSoon: false,
    topics: ["Regression", "Classification", "Neural Networks"],
    estimatedHours: BigInt(15),
    category: ModuleCategory.aiml,
    estimatedMinutes: BigInt(900),
  },
  {
    id: BigInt(7),
    title: "MNC Platforms",
    description: "AWS, Azure, GCP, Salesforce, Snowflake, Alteryx and more.",
    difficulty: "Intermediate",
    lessons: [
      { title: "AWS Overview", description: "Core services recap", durationMinutes: BigInt(45) },
    ],
    isComingSoon: true,
    topics: ["AWS", "Azure", "GCP", "Salesforce", "Snowflake"],
    estimatedHours: BigInt(20),
    category: ModuleCategory.mncplatforms,
    estimatedMinutes: BigInt(1200),
  },
  {
    id: BigInt(8),
    title: "Capstone Project",
    description: "Build a full resume-worthy project integrating all course concepts.",
    difficulty: "Advanced",
    lessons: [
      { title: "Project Setup", description: "GitHub, VS Code, Cloud trial", durationMinutes: BigInt(60) },
    ],
    isComingSoon: true,
    topics: ["GitHub", "Cloud", "SQL", "Python", "DevOps"],
    estimatedHours: BigInt(30),
    category: ModuleCategory.capstonePproject,
    estimatedMinutes: BigInt(1800),
  },
];

const sampleTerms: Term[] = [
  {
    id: BigInt(1),
    term: "Legacy System",
    definition: "An old system or application still in use that may be difficult to update or replace.",
    example: "The bank still runs on a legacy COBOL system from the 1980s.",
    category: GlossaryCategory.software,
  },
  {
    id: BigInt(2),
    term: "Source",
    definition: "The origin point from which data is extracted in ETL or data migration processes.",
    example: "The source database is Oracle; target is Snowflake.",
    category: GlossaryCategory.general,
  },
  {
    id: BigInt(3),
    term: "Backup",
    definition: "A copy of data stored separately to prevent data loss.",
    example: "The team performs daily backups of the production database.",
    category: GlossaryCategory.general,
  },
];

const sampleQuizQuestions: QuizQuestion[] = [
  {
    id: BigInt(1),
    question: "What does CI/CD stand for?",
    correctOptionId: BigInt(2),
    options: [
      { id: BigInt(1), text: "Continuous Installation / Continuous Deployment" },
      { id: BigInt(2), text: "Continuous Integration / Continuous Deployment" },
      { id: BigInt(3), text: "Code Integration / Code Delivery" },
      { id: BigInt(4), text: "Continuous Integration / Code Delivery" },
    ],
  },
  {
    id: BigInt(2),
    question: "Which AWS service is used for object storage?",
    correctOptionId: BigInt(3),
    options: [
      { id: BigInt(1), text: "EC2" },
      { id: BigInt(2), text: "RDS" },
      { id: BigInt(3), text: "S3" },
      { id: BigInt(4), text: "Lambda" },
    ],
  },
];

const sampleProgress: UserProgress = {
  userId: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  moduleProgress: [],
  lastQuizScore: BigInt(0),
  lastQuizAttemptedAt: BigInt(0),
  totalLearningHours: BigInt(0),
};

const sampleSubscription: SubscriptionView = {
  userId: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  status: SubscriptionStatus.active,
  expiresAt: day45,
  renewalDate: day45,
  startDate: now,
  stripeSubscriptionId: "sub_test_123",
  stripeCustomerId: "cus_test_456",
};

const sampleAdminUser: AdminUserView = {
  userId: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  userIdText: "2vxsx-fae",
  signupAt: now,
  lastActiveAt: now,
  subscriptionStatus: "active",
  coursesCompleted: BigInt(2),
  totalProgress: 40.0,
};

const sampleCertificate: CertificateView = {
  id: "2vxsx-fae:python:" + now.toString(),
  verificationCode: "ABCD1234",
  userId: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
  issuedAt: now,
  courseName: "Python for IT Freshers",
  courseId: "python",
};

const sampleSubscriptionStats: SubscriptionStats = {
  totalUsers: BigInt(42),
  subscribedUsers: BigInt(18),
  activeSubscriptions: BigInt(15),
};

export const mockBackend: backendInterface = {
  canAccessLesson: async (lessonIndex: bigint) => lessonIndex < BigInt(2),
  canAccessModule: async (moduleIndex: bigint) => moduleIndex === BigInt(0),
  checkSubscription: async () => sampleSubscription,
  getAllUsersAdmin: async () => [sampleAdminUser],
  getCertificate: async (_id: string) => sampleCertificate,
  getMyCertificates: async () => [sampleCertificate],
  getSubscriptionStatsAdmin: async () => sampleSubscriptionStats,
  getUserProgressAdmin: async () => sampleProgress,
  setOwner: async () => undefined,
  getModule: async (moduleId: bigint) => sampleModules.find(m => m.id === moduleId) ?? null,
  getMyProgress: async () => sampleProgress,
  getMyQuizAttempt: async () => ({
    userId: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
    score: BigInt(8),
    totalQuestions: BigInt(10),
    attemptedAt: now,
  } as QuizAttempt),
  getTerm: async (termId: bigint) => sampleTerms.find(t => t.id === termId) ?? null,
  getTermsByCategory: async (category: GlossaryCategory) => sampleTerms.filter(t => t.category === category),
  handleStripeWebhook: async () => true,
  linkStripeCustomer: async () => undefined,
  listGlossaryTerms: async () => sampleTerms,
  listModules: async () => sampleModules,
  listQuizQuestions: async () => sampleQuizQuestions,
  listSubscribers: async () => [sampleSubscription],
  markModuleCompleted: async () => undefined,
  markCourseComplete: async (_courseId: string, _courseName: string) => sampleCertificate,
  getCourseCompletions: async (): Promise<Array<CourseCompletion>> => [],
  searchGlossary: async (searchText: string) =>
    sampleTerms.filter(t =>
      t.term.toLowerCase().includes(searchText.toLowerCase()) ||
      t.definition.toLowerCase().includes(searchText.toLowerCase())
    ),
  submitQuizAttempt: async () => ({
    userId: { _isPrincipal: true, toText: () => "2vxsx-fae" } as any,
    score: BigInt(8),
    totalQuestions: BigInt(10),
    attemptedAt: now,
  } as QuizAttempt),
  updateLearningHours: async () => undefined,
  activateSubscriptionWithRazorpay: async (_orderId: string, _paymentId: string) => true,
  createRazorpayOrder: async () => ({ ok: "order_test123" } as any),
  setRazorpayKeys: async (_keyId: string, _keySecret: string) => true,
};
