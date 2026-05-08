import ProgressTypes "../types/progress";
import CommonTypes "../types/common";
import Map "mo:core/Map";

module {
  func emptyProgress(userId : CommonTypes.UserId) : ProgressTypes.UserProgress {
    {
      userId;
      moduleProgress = [];
      totalLearningHours = 0;
      lastQuizScore = null;
      lastQuizAttemptedAt = null;
    };
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
    progressMap.add(userId, { current with moduleProgress = updated });
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
