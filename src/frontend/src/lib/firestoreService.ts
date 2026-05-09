/**
 * firestoreService — centralized CRUD helpers for all Firestore collections.
 */

import { db } from "@/lib/firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

// ─── Users ────────────────────────────────────────────────────────────────────

export interface UserDoc {
  email: string;
  displayName: string;
  createdAt: unknown; // Firestore server timestamp
  lastLoginAt: unknown;
  loginCount: number;
  isActive: boolean;
  phoneNumber?: string;
}

export async function createUserDoc(
  uid: string,
  data: { email: string; displayName: string; phoneNumber?: string },
) {
  await setDoc(doc(db, "users", uid), {
    email: data.email ?? "",
    displayName: data.displayName ?? "",
    phoneNumber: data.phoneNumber ?? "",
    createdAt: serverTimestamp(),
    lastLoginAt: serverTimestamp(),
    loginCount: 1,
    isActive: true,
  });
}

export async function updateUserLogin(uid: string) {
  const ref = doc(db, "users", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, {
      lastLoginAt: serverTimestamp(),
      loginCount: increment(1),
      isActive: true,
    });
  }
}

export async function getUserDoc(uid: string): Promise<UserDoc | null> {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? (snap.data() as UserDoc) : null;
}

export async function getAllUsers(): Promise<
  (UserDoc & { uid: string })[]
> {
  const snap = await getDocs(collection(db, "users"));
  return snap.docs.map((d) => ({ uid: d.id, ...(d.data() as UserDoc) }));
}

// ─── Login Events ────────────────────────────────────────────────────────────

export async function recordLoginEvent(uid: string, email: string) {
  await addDoc(collection(db, "loginEvents"), {
    userId: uid,
    userEmail: email,
    timestamp: serverTimestamp(),
  });
}

export interface LoginEventDoc {
  userId: string;
  userEmail: string;
  timestamp: unknown;
}

export async function getLoginEvents(): Promise<LoginEventDoc[]> {
  const q = query(
    collection(db, "loginEvents"),
    orderBy("timestamp", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as LoginEventDoc);
}

// ─── Progress ────────────────────────────────────────────────────────────────

export interface ProgressDoc {
  userId: string;
  completedModules: string[];
  streakDays: number;
  streakLastDate: string; // ISO date string YYYY-MM-DD
  totalLearningHours: number;
  lastActiveAt: unknown;
  moduleProgress: Record<string, number>; // moduleId → percentage
}

/**
 * Compute the new streak value based on last active date.
 *
 * - If last activity was *yesterday*, increment the streak by 1.
 * - If last activity was *today*, keep the streak unchanged.
 * - If last activity was *before yesterday*, reset the streak to 1.
 * - If there's no previous date, start at 1.
 */
function computeStreak(prev: { streakDays?: number; streakLastDate?: string }): {
  streakDays: number;
  streakLastDate: string;
} {
  const today = new Date();
  const todayStr = today.toISOString().slice(0, 10);

  if (!prev.streakLastDate) {
    return { streakDays: 1, streakLastDate: todayStr };
  }

  if (prev.streakLastDate === todayStr) {
    // Already active today — no change
    return { streakDays: prev.streakDays ?? 1, streakLastDate: todayStr };
  }

  const lastDate = new Date(prev.streakLastDate + "T00:00:00");
  const diffDays = Math.floor(
    (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  if (diffDays === 1) {
    // Consecutive day — increment
    return { streakDays: (prev.streakDays ?? 0) + 1, streakLastDate: todayStr };
  }

  // Gap > 1 day — reset
  return { streakDays: 1, streakLastDate: todayStr };
}

export async function getProgress(uid: string): Promise<ProgressDoc | null> {
  const snap = await getDoc(doc(db, "progress", uid));
  return snap.exists() ? (snap.data() as ProgressDoc) : null;
}

export async function saveProgress(uid: string, data: Partial<ProgressDoc>) {
  const ref = doc(db, "progress", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const existing = snap.data() as ProgressDoc;
    const streak = computeStreak(existing);
    await updateDoc(ref, { ...data, ...streak, lastActiveAt: serverTimestamp() });
  } else {
    await setDoc(ref, {
      userId: uid,
      completedModules: [],
      streakDays: 1,
      streakLastDate: new Date().toISOString().slice(0, 10),
      totalLearningHours: 0,
      moduleProgress: {},
      lastActiveAt: serverTimestamp(),
      ...data,
    });
  }
}

export async function markModuleComplete(uid: string, moduleId: string) {
  const ref = doc(db, "progress", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    const data = snap.data() as ProgressDoc;
    const completed = data.completedModules || [];
    if (!completed.includes(moduleId)) {
      completed.push(moduleId);
    }
    const mp = data.moduleProgress || {};
    mp[moduleId] = 100;
    const streak = computeStreak(data);
    await updateDoc(ref, {
      completedModules: completed,
      moduleProgress: mp,
      ...streak,
      lastActiveAt: serverTimestamp(),
    });
  } else {
    await setDoc(ref, {
      userId: uid,
      completedModules: [moduleId],
      streakDays: 1,
      streakLastDate: new Date().toISOString().slice(0, 10),
      totalLearningHours: 0,
      moduleProgress: { [moduleId]: 100 },
      lastActiveAt: serverTimestamp(),
    });
  }
}

export async function updateLearningHours(uid: string, hours: number) {
  const ref = doc(db, "progress", uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, {
      totalLearningHours: increment(hours),
      lastActiveAt: serverTimestamp(),
    });
  } else {
    await setDoc(ref, {
      userId: uid,
      completedModules: [],
      streakDays: 0,
      totalLearningHours: hours,
      moduleProgress: {},
      lastActiveAt: serverTimestamp(),
    });
  }
}

// ─── Subscriptions ───────────────────────────────────────────────────────────

export interface SubscriptionDoc {
  userId: string;
  status: "active" | "inactive" | "cancelled" | "pending_verification";
  plan: string;
  startDate: unknown;
  expiresAt: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  userEmail?: string;
  submittedAt?: unknown;
}

export async function getSubscription(
  uid: string,
): Promise<SubscriptionDoc | null> {
  const snap = await getDoc(doc(db, "subscriptions", uid));
  return snap.exists() ? (snap.data() as SubscriptionDoc) : null;
}

/** Submit a payment for admin verification (user-facing) */
export async function submitPaymentForVerification(
  uid: string,
  data: {
    razorpayPaymentId: string;
    plan: string;
    userEmail: string;
    expiresAt: string;
  },
) {
  await setDoc(doc(db, "subscriptions", uid), {
    userId: uid,
    status: "pending_verification",
    plan: data.plan,
    startDate: serverTimestamp(),
    submittedAt: serverTimestamp(),
    expiresAt: data.expiresAt,
    razorpayPaymentId: data.razorpayPaymentId,
    userEmail: data.userEmail,
  });
}

/** Activate subscription (admin-only) */
export async function activateSubscription(
  uid: string,
  data: {
    razorpayOrderId: string;
    razorpayPaymentId: string;
    expiresAt: string;
  },
) {
  await setDoc(doc(db, "subscriptions", uid), {
    userId: uid,
    status: "active",
    plan: "lifetime",
    startDate: serverTimestamp(),
    expiresAt: data.expiresAt,
    razorpayOrderId: data.razorpayOrderId,
    razorpayPaymentId: data.razorpayPaymentId,
  });
}

/** Admin: approve a pending subscription */
export async function approveSubscription(uid: string) {
  const ref = doc(db, "subscriptions", uid);
  await updateDoc(ref, {
    status: "active",
    startDate: serverTimestamp(),
  });
}

/** Admin: reject a pending subscription */
export async function rejectSubscription(uid: string) {
  const ref = doc(db, "subscriptions", uid);
  await updateDoc(ref, {
    status: "inactive",
  });
}

export async function getAllSubscriptions(): Promise<
  (SubscriptionDoc & { id: string })[]
> {
  const snap = await getDocs(collection(db, "subscriptions"));
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as SubscriptionDoc),
  }));
}

// ─── Payments ────────────────────────────────────────────────────────────────

export interface PaymentDoc {
  userId: string;
  userEmail: string;
  amount: number;
  currency: string;
  orderId: string;
  paymentId: string;
  status: string;
  plan: string;
  timestamp: unknown;
}

export async function savePayment(data: PaymentDoc) {
  await addDoc(collection(db, "payments"), {
    ...data,
    timestamp: serverTimestamp(),
  });
}

export async function getPaymentRecords(): Promise<PaymentDoc[]> {
  const q = query(collection(db, "payments"), orderBy("timestamp", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => d.data() as PaymentDoc);
}

// ─── Certificates ────────────────────────────────────────────────────────────

export interface CertificateDoc {
  id: string;
  userId: string;
  courseId: string;
  courseName: string;
  issuedAt: unknown;
  verificationCode: string;
}

function generateVerificationCode(uid: string, courseId: string): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const seed = `${uid}-${courseId}-${Date.now()}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  let code = "";
  for (let i = 0; i < 8; i++) {
    code += chars[Math.abs(hash * (i + 1)) % chars.length];
  }
  return `ITF-${code}`;
}

export async function issueCertificate(
  uid: string,
  courseId: string,
  courseName: string,
): Promise<CertificateDoc> {
  // Check if certificate already exists for this user + course
  const q = query(
    collection(db, "certificates"),
    where("userId", "==", uid),
    where("courseId", "==", courseId),
  );
  const existing = await getDocs(q);
  if (!existing.empty) {
    const d = existing.docs[0];
    return { id: d.id, ...(d.data() as Omit<CertificateDoc, "id">) };
  }

  const certId = `cert-${uid.slice(0, 8)}-${courseId}-${Date.now()}`;
  const cert: CertificateDoc = {
    id: certId,
    userId: uid,
    courseId,
    courseName,
    issuedAt: serverTimestamp(),
    verificationCode: generateVerificationCode(uid, courseId),
  };
  await setDoc(doc(db, "certificates", certId), cert);
  return cert;
}

export async function getUserCertificates(
  uid: string,
): Promise<CertificateDoc[]> {
  const q = query(
    collection(db, "certificates"),
    where("userId", "==", uid),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<CertificateDoc, "id">),
  }));
}

// ─── Quiz Attempts ───────────────────────────────────────────────────────────

export interface QuizAttemptDoc {
  userId: string;
  score: number;
  totalQuestions: number;
  attemptedAt: unknown;
}

export async function saveQuizAttempt(uid: string, data: QuizAttemptDoc) {
  await setDoc(doc(db, "quizAttempts", uid), {
    ...data,
    attemptedAt: serverTimestamp(),
  });
}

export async function getQuizAttempt(
  uid: string,
): Promise<QuizAttemptDoc | null> {
  const snap = await getDoc(doc(db, "quizAttempts", uid));
  return snap.exists() ? (snap.data() as QuizAttemptDoc) : null;
}

// ─── Certificate Notifications ───────────────────────────────────────────────

/**
 * Store a certificate delivery record in Firestore.
 * A real production setup would trigger a Cloud Function to send the email/SMS,
 * but for now we:
 * 1. Store the notification in a `certificateNotifications` collection.
 * 2. Open the user's mail client with a pre-filled certificate link (browser side).
 */
export interface CertNotification {
  userId: string;
  recipientEmail?: string;
  recipientPhone?: string;
  certificateId: string;
  courseName: string;
  verificationCode: string;
  sentAt: unknown;
  deliveryMethod: "email" | "sms" | "both";
}

export async function saveCertificateNotification(
  data: Omit<CertNotification, "sentAt">,
) {
  await addDoc(collection(db, "certificateNotifications"), {
    ...data,
    sentAt: serverTimestamp(),
  });
}
