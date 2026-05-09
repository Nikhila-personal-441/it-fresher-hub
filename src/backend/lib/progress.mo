import ProgressTypes "../types/progress";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Int "mo:core/Int";

module {
  func emptyProgress(userId : CommonTypes.UserId) : ProgressTypes.UserProgress {
    {
      userId;
      moduleProgress = [];
      totalLearningHours = 0;
      lastQuizScore = null;
      lastQuizAttemptedAt = null;
      streakDays = 0;
    };
  };

  // Nanoseconds per calendar day
  let nanosPerDay : Int = 86_400_000_000_000;

  // Convert a nanosecond timestamp to a calendar day number (days since epoch)
  func toDayNumber(ts : Int) : Int { ts / nanosPerDay };

  // Given an array of ModuleProgress, calculate the streak:
  // number of consecutive calendar days (ending today or yesterday) with >= 1 completion.
  public func calculateStreak(moduleProgress : [ProgressTypes.ModuleProgress], now : Int) : Nat {
    // Collect all completion day numbers (only completed entries with a timestamp)
    let completedDays = moduleProgress.filterMap(
      func(mp) {
        if (mp.completed) {
          switch (mp.completedAt) {
            case (?ts) ?(toDayNumber(ts));
            case null null;
          };
        } else null;
      }
    );

    if (completedDays.isEmpty()) return 0;

    // Deduplicate by sorting and keeping unique days
    let sorted = completedDays.sort();
    var uniqueDays : [Int] = [];
    var prev : ?Int = null;
    sorted.forEach(func(d) {
      switch (prev) {
        case (?p) {
          if (d != p) {
            uniqueDays := uniqueDays.concat([d]);
            prev := ?d;
          };
        };
        case null {
          uniqueDays := uniqueDays.concat([d]);
          prev := ?d;
        };
      };
    });

    // uniqueDays is sorted ascending; count consecutive streak from today backward
    let todayDay = toDayNumber(now);
    let descDays = uniqueDays.reverse();

    // Start counting from todayDay or (todayDay - 1) to allow grace period
    // Streak must include today or yesterday to be active
    var streak = 0;
    var expected = todayDay;

    // If the most recent completion day is not today or yesterday, streak is 0
    switch (descDays.find(func(_) { true })) {
      case null return 0;
      case (?mostRecent) {
        if (mostRecent < todayDay - 1) return 0;
        expected := mostRecent;
      };
    };

    for (day in descDays.values()) {
      if (day == expected) {
        streak += 1;
        expected -= 1;
      } else if (day < expected) {
        // Gap — stop counting
        return streak;
      };
      // day > expected is impossible in a sorted-desc array
    };
    streak;
  };

  public func getUserProgress(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    userId : CommonTypes.UserId,
  ) : ProgressTypes.UserProgress {
    switch (progressMap.get(userId)) {
      case (?p) p;
      case null emptyProgress(userId);
    };
  };

  public func markModuleCompleted(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    userId : CommonTypes.UserId,
    moduleId : Nat,
    completedAt : CommonTypes.Timestamp,
  ) {
    let current = getUserProgress(progressMap, userId);
    // Check if already present
    let existing = current.moduleProgress.find(func(mp : ProgressTypes.ModuleProgress) : Bool {
      mp.moduleId == moduleId
    });
    let updated : [ProgressTypes.ModuleProgress] = switch existing {
      case (?_) {
        // Update the existing entry
        current.moduleProgress.map<ProgressTypes.ModuleProgress, ProgressTypes.ModuleProgress>(
          func(mp) {
            if (mp.moduleId == moduleId) {
              { mp with completed = true; completedAt = ?completedAt };
            } else mp;
          }
        );
      };
      case null {
        // Append new entry
        let newEntry : ProgressTypes.ModuleProgress = {
          moduleId;
          completed = true;
          completedAt = ?completedAt;
        };
        current.moduleProgress.concat([newEntry]);
      };
    };
    let newStreak = calculateStreak(updated, completedAt);
    progressMap.add(userId, { current with moduleProgress = updated; streakDays = newStreak });
  };

  public func updateLearningHours(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    userId : CommonTypes.UserId,
    hours : Nat,
  ) {
    let current = getUserProgress(progressMap, userId);
    progressMap.add(userId, { current with totalLearningHours = current.totalLearningHours + hours });
  };

  public func updateQuizScore(
    progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
    userId : CommonTypes.UserId,
    score : Nat,
    attemptedAt : CommonTypes.Timestamp,
  ) {
    let current = getUserProgress(progressMap, userId);
    progressMap.add(userId, { current with lastQuizScore = ?score; lastQuizAttemptedAt = ?attemptedAt });
  };
};
