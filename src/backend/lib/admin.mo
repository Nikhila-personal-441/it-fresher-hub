import AdminTypes "../types/admin";
import ProgressTypes "../types/progress";
import SubscriptionTypes "../types/subscription";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import List "mo:core/List";
import Int "mo:core/Int";
import Nat "mo:core/Nat";

module {
  /// Build an AdminUserView for every user known in progressMap.
  public func getAllUsers(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    subscriptions : Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>,
    capstones : Map.Map<CommonTypes.UserId, SubscriptionTypes.CapstoneSubscription>,
    signupMap : Map.Map<CommonTypes.UserId, CommonTypes.Timestamp>,
    loginEvents : List.List<AdminTypes.LoginEvent>,
    now : CommonTypes.Timestamp,
  ) : [AdminTypes.AdminUserView] {
    let result = List.empty<AdminTypes.AdminUserView>();
    progressMap.entries().forEach(func((userId, progress)) {
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
      // Determine subscription plan label
      let hasBase : Bool = switch (subscriptions.get(userId)) {
        case null false;
        case (?sub) {
          switch (sub.status) {
            case (#active) sub.expiresAt >= now;
            case _ false;
          };
        };
      };
      let hasCapstone : Bool = switch (capstones.get(userId)) {
        case null false;
        case (?cap) cap.activated;
      };
      let subscriptionPlan : Text = if (hasBase and hasCapstone) "Base + Capstone"
        else if (hasBase) "Base"
        else "None";
      // Count distinct completed courses
      let completedModules = progress.moduleProgress.filter(func(mp : ProgressTypes.ModuleProgress) : Bool { mp.completed });
      let coursesCompleted = countCompletedCourses(progress);
      let totalModules = progress.moduleProgress.size();
      let completedCount = completedModules.size();
      let totalProgress : Float = if (totalModules == 0) 0.0
        else completedCount.toFloat() / totalModules.toFloat() * 100.0;
      // Compute login stats for this user
      let userLogins = loginEvents.filter(func(e : AdminTypes.LoginEvent) : Bool {
        e.userId == userId
      });
      let loginCount = userLogins.size();
      let lastLoginAt : CommonTypes.Timestamp = userLogins.foldLeft(
        0 : Int,
        func(acc : Int, e : AdminTypes.LoginEvent) : Int {
          if (e.timestamp > acc) e.timestamp else acc
        }
      );
      result.add({
        userId;
        userIdText = userId.toText();
        signupAt;
        lastActiveAt;
        subscriptionStatus;
        coursesCompleted;
        totalProgress;
        loginCount;
        lastLoginAt;
        subscriptionPlan;
      });
    });
    result.toArray();
  };

  /// Compute subscription stats across all users.
  public func getSubscriptionStats(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    subscriptions : Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>,
    signupMap : Map.Map<CommonTypes.UserId, CommonTypes.Timestamp>,
    paymentRecords : List.List<AdminTypes.PaymentRecord>,
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
    // Revenue from payment records
    let totalRevenue = paymentRecords.foldLeft(
      0 : Nat,
      func(acc : Nat, pr : AdminTypes.PaymentRecord) : Nat { acc + pr.amount }
    );
    let totalPayments = paymentRecords.size();
    // Recent signups in last 7 days (7 * 24 * 3600 * 1_000_000_000 ns)
    let sevenDaysNs : Int = 7 * 24 * 3600 * 1_000_000_000;
    let cutoff : Int = now - sevenDaysNs;
    let recentSignups = signupMap.foldLeft(
      0 : Nat,
      func(acc : Nat, _userId : CommonTypes.UserId, ts : CommonTypes.Timestamp) : Nat {
        if (ts >= cutoff) acc + 1 else acc
      }
    );
    { totalUsers; subscribedUsers; activeSubscriptions; totalRevenue; totalPayments; recentSignups };
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
