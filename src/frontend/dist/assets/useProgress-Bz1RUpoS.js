import { v as useActor, p as useQuery, w as createActor } from "./index-DrrDo776.js";
const emptyProgress = {
  userId: "",
  completedModules: [],
  totalLearningHours: 0,
  quizScores: [],
  lastActiveAt: BigInt(0),
  streakDays: 0,
  level: "fresher"
};
function resolveLevel(completed) {
  if (completed >= 15) return "professional";
  if (completed >= 8) return "practitioner";
  if (completed >= 3) return "learner";
  return "fresher";
}
function useProgress() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery({
    queryKey: ["progress"],
    queryFn: async () => {
      if (!actor) {
        return emptyProgress;
      }
      const raw = await actor.getMyProgress();
      const completedModules = raw.moduleProgress.filter((mp) => mp.completed).map((mp) => String(mp.moduleId));
      return {
        userId: raw.userId.toString(),
        completedModules,
        totalLearningHours: Number(raw.totalLearningHours),
        quizScores: [],
        lastActiveAt: BigInt(Date.now()),
        streakDays: Number(raw.streakDays),
        level: resolveLevel(completedModules.length)
      };
    },
    enabled: !!actor && !isFetching,
    staleTime: 1e3 * 60 * 2
  });
}
export {
  useProgress as u
};
