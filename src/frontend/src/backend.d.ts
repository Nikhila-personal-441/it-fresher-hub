/**
 * backend.d.ts — local type definitions (replaces ICP canister-generated types).
 *
 * These types are used across the app for consistency with Firestore documents.
 * They no longer depend on @dfinity/principal or any ICP SDK.
 */

export type Timestamp = bigint;

export interface CertificateView {
  id: string;
  verificationCode: string;
  userId: string;
  issuedAt: Timestamp | unknown;
  courseName: string;
  courseId: string;
}

export interface AdminUserView {
  lastLoginAt: Timestamp | unknown;
  userId: string;
  lastActiveAt: Timestamp | unknown;
  subscriptionPlan: string;
  coursesCompleted: bigint | number;
  loginCount: bigint | number;
  subscriptionStatus: string;
  signupAt: Timestamp | unknown;
  userIdText: string;
  totalProgress: number;
}

export interface LoginEvent {
  userId: string;
  userEmail?: string;
  timestamp: Timestamp | unknown;
  userIdText?: string;
}

export interface PaymentRecord {
  status: string;
  userId: string;
  plan: string;
  orderId: string;
  paymentId: string;
  timestamp: Timestamp | unknown;
  userIdText?: string;
  amount: bigint | number;
  userEmail?: string;
}

export interface SubscriptionStats {
  recentSignups: bigint | number;
  totalPayments: bigint | number;
  subscribedUsers: bigint | number;
  totalUsers: bigint | number;
  totalRevenue: bigint | number;
  activeSubscriptions: bigint | number;
}

export interface SubscriptionView {
  razorpayPaymentId?: string;
  status: string;
  expiresAt: Timestamp | string;
  userId: string;
  razorpayOrderId?: string;
  startDate: Timestamp | unknown;
}
