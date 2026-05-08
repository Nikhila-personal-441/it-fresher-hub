import { createActor } from "@/backend";
import type { UserProgress } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
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
  const { actor, isFetching } = useActor(createActor);
  return useQuery<UserProgress>({
    queryKey: ["progress"],
    queryFn: async () => {
      if (!actor) {
        return emptyProgress;
      }
      const raw = await actor.getMyProgress();
      // Map backend UserProgress → frontend UserProgress
      const completedModules = raw.moduleProgress
        .filter((mp) => mp.completed)
        .map((mp) => String(mp.moduleId));
      return {
        userId: raw.userId.toString(),
        completedModules,
        totalLearningHours: Number(raw.totalLearningHours),
        quizScores: [],
        lastActiveAt: BigInt(Date.now()),
        streakDays: 0,
        level: resolveLevel(completedModules.length),
      };
    },
    enabled: !!actor && !isFetching,
    staleTime: 1000 * 60 * 2,
  });
}

export function useUpdateLearningHours() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (hours: number) => {
      if (!actor) return;
      await actor.updateLearningHours(BigInt(Math.round(hours)));
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
