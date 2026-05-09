import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StripeWebhookPayload {
    stripeSubscriptionId: string;
    userId?: UserId;
    stripeCustomerId: string;
    eventType: string;
}
export type Timestamp = bigint;
export interface SubscriptionView {
    razorpayPaymentId?: string;
    status: SubscriptionStatus;
    expiresAt: Timestamp;
    stripeSubscriptionId: string;
    userId: UserId;
    stripeCustomerId: string;
    razorpayOrderId?: string;
    renewalDate: Timestamp;
    startDate: Timestamp;
}
export interface QuizQuestion {
    id: bigint;
    correctOptionId: bigint;
    question: string;
    options: Array<QuizOption>;
}
export interface PaymentRecord {
    status: string;
    userId: UserId;
    plan: string;
    orderId: string;
    paymentId: string;
    timestamp: Timestamp;
    userIdText: string;
    amount: bigint;
}
export interface LoginEvent {
    userId: UserId;
    timestamp: Timestamp;
    userIdText: string;
}
export interface SubscriptionStats {
    recentSignups: bigint;
    totalPayments: bigint;
    subscribedUsers: bigint;
    totalUsers: bigint;
    totalRevenue: bigint;
    activeSubscriptions: bigint;
}
export interface UserProgress {
    lastQuizScore?: bigint;
    userId: UserId;
    streakDays: bigint;
    moduleProgress: Array<ModuleProgress>;
    lastQuizAttemptedAt?: Timestamp;
    totalLearningHours: bigint;
}
export type RazorpayOrderResult = {
    __kind__: "ok";
    ok: string;
} | {
    __kind__: "err";
    err: string;
};
export interface AdminUserView {
    lastLoginAt: Timestamp;
    userId: UserId;
    lastActiveAt: Timestamp;
    subscriptionPlan: string;
    coursesCompleted: bigint;
    loginCount: bigint;
    subscriptionStatus: string;
    signupAt: Timestamp;
    userIdText: string;
    totalProgress: number;
}
export interface CertificateView {
    id: string;
    verificationCode: string;
    userId: UserId;
    issuedAt: Timestamp;
    courseName: string;
    courseId: string;
}
export type UserId = Principal;
export interface Lesson {
    title: string;
    description: string;
    durationMinutes: bigint;
}
export interface QuizAttempt {
    userId: UserId;
    score: bigint;
    totalQuestions: bigint;
    attemptedAt: Timestamp;
}
export interface Term {
    id: bigint;
    term: string;
    example: string;
    category: GlossaryCategory;
    definition: string;
}
export interface CapstoneSubscriptionView {
    razorpayPaymentId?: string;
    activated: boolean;
    activatedAt: Timestamp;
    userId: UserId;
    razorpayOrderId?: string;
}
export interface QuizOption {
    id: bigint;
    text: string;
}
export interface CourseCompletion {
    completedAt: Timestamp;
    userId: UserId;
    certificateId: string;
    userIdText: string;
    courseId: string;
}
export interface ModuleProgress {
    moduleId: bigint;
    completedAt?: Timestamp;
    completed: boolean;
}
export interface ITModule {
    id: bigint;
    title: string;
    difficulty: string;
    description: string;
    lessons: Array<Lesson>;
    isComingSoon: boolean;
    topics: Array<string>;
    estimatedHours: bigint;
    category: ModuleCategory;
    estimatedMinutes: bigint;
}
export enum GlossaryCategory {
    aiml = "aiml",
    cloud = "cloud",
    networking = "networking",
    hardware = "hardware",
    itSupport = "itSupport",
    cybersecurity = "cybersecurity",
    software = "software",
    general = "general"
}
export enum ModuleCategory {
    dsa = "dsa",
    sql = "sql",
    aiml = "aiml",
    java = "java",
    cloud = "cloud",
    mncplatforms = "mncplatforms",
    htmlcss = "htmlcss",
    capstonePproject = "capstonePproject",
    shellscripting = "shellscripting",
    networking = "networking",
    trending = "trending",
    devops = "devops",
    hardware = "hardware",
    excel = "excel",
    corporateskills = "corporateskills",
    itSupport = "itSupport",
    cybersecurity = "cybersecurity",
    software = "software",
    etltools = "etltools",
    cloudaws = "cloudaws",
    presentation = "presentation",
    python = "python",
    corporateWorld = "corporateWorld",
    machinelearning = "machinelearning",
    github = "github",
    itfundamentals = "itfundamentals"
}
export enum SubscriptionStatus {
    active = "active",
    cancelled = "cancelled",
    inactive = "inactive"
}
export interface backendInterface {
    activateCapstoneWithRazorpay(orderId: string, paymentId: string): Promise<boolean>;
    activateSubscriptionWithRazorpay(orderId: string, paymentId: string): Promise<boolean>;
    canAccessCapstone(): Promise<boolean>;
    canAccessLesson(lessonIndex: bigint): Promise<boolean>;
    canAccessModule(moduleIndex: bigint): Promise<boolean>;
    checkSubscription(): Promise<SubscriptionView | null>;
    createCapstoneOrder(): Promise<RazorpayOrderResult>;
    createRazorpayOrder(): Promise<RazorpayOrderResult>;
    getAllUsersAdmin(): Promise<Array<AdminUserView>>;
    getCapstoneSubscription(): Promise<CapstoneSubscriptionView | null>;
    getCertificate(id: string): Promise<CertificateView | null>;
    getCourseCompletions(): Promise<Array<CourseCompletion>>;
    getLoginEvents(): Promise<Array<LoginEvent>>;
    getModule(moduleId: bigint): Promise<ITModule | null>;
    getMyCertificates(): Promise<Array<CertificateView>>;
    getMyProgress(): Promise<UserProgress>;
    getMyQuizAttempt(): Promise<QuizAttempt | null>;
    getPaymentRecords(): Promise<Array<PaymentRecord>>;
    getSubscriptionStatsAdmin(): Promise<SubscriptionStats>;
    getTerm(termId: bigint): Promise<Term | null>;
    getTermsByCategory(category: GlossaryCategory): Promise<Array<Term>>;
    getUserProgressAdmin(userId: UserId): Promise<UserProgress | null>;
    handleStripeWebhook(payload: StripeWebhookPayload): Promise<boolean>;
    linkStripeCustomer(stripeCustomerId: string): Promise<void>;
    listGlossaryTerms(): Promise<Array<Term>>;
    listModules(): Promise<Array<ITModule>>;
    listQuizQuestions(): Promise<Array<QuizQuestion>>;
    listSubscribers(): Promise<Array<SubscriptionView>>;
    markCourseComplete(courseId: string, courseName: string): Promise<CertificateView>;
    markModuleCompleted(moduleId: bigint): Promise<void>;
    recordLoginEvent(): Promise<void>;
    searchGlossary(searchText: string): Promise<Array<Term>>;
    setOwner(): Promise<void>;
    setRazorpayKeys(keyId: string, keySecret: string): Promise<boolean>;
    submitQuizAttempt(answers: Array<[bigint, bigint]>): Promise<QuizAttempt>;
    updateLearningHours(hours: bigint): Promise<void>;
}
