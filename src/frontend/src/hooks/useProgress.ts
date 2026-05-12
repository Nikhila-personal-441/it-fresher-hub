import { useAuth } from "@/contexts/AuthContext";
import {
  getProgress,
  markModuleComplete as fsMarkModuleComplete,
  saveProgress,
  updateLearningHours as fsUpdateLearningHours,
} from "@/lib/firestoreService";
import type { UserProgress } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const emptyProgress: UserProgress = {
  userId: "",
  completedModules: [],
  totalLearningHours: 0,
  quizScores: [],
  lastActiveAt: BigInt(0),
  streakDays: 0,
  level: "fresher",
};

function resolveLevel(completed: number): UserProgress["level"] {
  if (completed >= 15) return "professional";
  if (completed >= 8) return "practitioner";
  if (completed >= 3) return "learner";
  return "fresher";
}

export function useProgress() {
  const { user, isAuthenticated } = useAuth();
  return useQuery<UserProgress>({
    queryKey: ["progress", user?.uid],
    queryFn: async () => {
      if (!user) return emptyProgress;
      const progress = await getProgress(user.uid);
      if (!progress) return { ...emptyProgress, userId: user.uid };
      const completedModules = progress.completedModules || [];
      return {
        userId: user.uid,
        completedModules,
        totalLearningHours: progress.totalLearningHours || 0,
        quizScores: [],
        lastActiveAt: BigInt(Date.now()),
        streakDays: progress.streakDays || 0,
        level: resolveLevel(completedModules.length),
        moduleProgress: progress.moduleProgress || {},
      };
    },
    enabled: isAuthenticated,
    staleTime: 1000 * 60 * 2,
  });
}

export function useUpdateLearningHours() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (hours: number) => {
      if (!user) return;
      await fsUpdateLearningHours(user.uid, hours);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["progress"] });
    },
  });
}

export function getLevelInfo(level: UserProgress["level"]) {
  const levels = {
    fresher: { label: "Fresher", color: "badge-progress", minScore: 0 },
    learner: { label: "Learner", color: "badge-progress", minScore: 25 },
    practitioner: {
      label: "Practitioner",
      color: "badge-success",
      minScore: 60,
    },
    professional: {
      label: "Professional",
      color: "badge-success",
      minScore: 85,
    },
  };
  return levels[level];
}
