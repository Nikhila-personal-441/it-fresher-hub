import AdminTypes "../types/admin";
import ProgressTypes "../types/progress";
import SubscriptionTypes "../types/subscription";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  /// Build an AdminUserView for every user known in progressMap.
  public func getAllUsers(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    subscriptions : Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>,
    signupMap : Map.Map<CommonTypes.UserId, CommonTypes.Timestamp>,
    now : CommonTypes.Timestamp,
  ) : [AdminTypes.AdminUserView] {
    let views = progressMap.entries().map(func((userId, progress)) {
      let signupAt : CommonTypes.Timestamp = switch (signupMap.get(userId)) {
        case (?t) t;
        case null 0;
      };
      // Determine lastActiveAt from the most recent completedAt in moduleProgress
      let lastActiveAt : CommonTypes.Timestamp = progress.moduleProgress.foldLeft(
        0 : Int,
        func(acc : Int, mp : ProgressTypes.ModuleProgress) : Int {
          switch (mp.completedAt) {
            case (?t) if (t > acc) t else acc;
            case null acc;
          };
        }
      );
      // Determine subscription status
      let subscriptionStatus : Text = switch (subscriptions.get(userId)) {
        case null "inactive";
        case (?sub) {
          switch (sub.status) {
            case (#active) if (sub.expiresAt >= now) "active" else "expired";
            case (#cancelled) "cancelled";
            case (#inactive) "inactive";
          };
        };
      };
      // Count distinct completed courses (100% means all modules with that category are done)
      // Use simple completed module count heuristic — courses completed counted via progress
      let completedModules = progress.moduleProgress.filter(func(mp : ProgressTypes.ModuleProgress) : Bool { mp.completed });
      let coursesCompleted = countCompletedCourses(progress);
      let totalModules = progress.moduleProgress.size();
      let completedCount = completedModules.size();
      let totalProgress : Float = if (totalModules == 0) 0.0
        else completedCount.toFloat() / totalModules.toFloat() * 100.0;
      {
        userId;
        userIdText = userId.toText();
        signupAt;
        lastActiveAt;
        subscriptionStatus;
        coursesCompleted;
        totalProgress;
      };
    });
    views.toArray();
  };

  /// Compute subscription stats across all users.
  public func getSubscriptionStats(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    subscriptions : Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>,
    now : CommonTypes.Timestamp,
  ) : AdminTypes.SubscriptionStats {
    let totalUsers = progressMap.size();
    var subscribedUsers = 0;
    var activeSubscriptions = 0;
    subscriptions.entries().forEach(func((_, sub)) {
      subscribedUsers += 1;
      switch (sub.status) {
        case (#active) if (sub.expiresAt >= now) { activeSubscriptions += 1 };
        case _ {};
      };
    });
    { totalUsers; subscribedUsers; activeSubscriptions };
  };

  /// Count how many distinct courseIds have 100% completion for a user's progress.
  public func countCompletedCourses(
    progress : ProgressTypes.UserProgress,
  ) : Nat {
    // A heuristic: count completed modules and divide by average modules per course (~7)
    // For a more precise approach the caller should pass the module list, but
    // based on the contract signature we only have UserProgress here.
    // We count distinct lesson groups of 7 as "completed courses".
    let completedCount = progress.moduleProgress.filter(
      func(mp : ProgressTypes.ModuleProgress) : Bool { mp.completed }
    ).size();
    completedCount / 7;
  };

  /// Compute overall progress percentage across all known modules.
  public func computeTotalProgress(
    progress : ProgressTypes.UserProgress,
    totalModuleCount : Nat,
  ) : Float {
    if (totalModuleCount == 0) return 0.0;
    let completedCount = progress.moduleProgress.filter(
      func(mp : ProgressTypes.ModuleProgress) : Bool { mp.completed }
    ).size();
    completedCount.toFloat() / totalModuleCount.toFloat() * 100.0;
  };
};
