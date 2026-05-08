import CommonTypes "common";

module {
  public type ModuleProgress = {
    moduleId : Nat;
    completed : Bool;
    completedAt : ?CommonTypes.Timestamp;
  };

  public type UserProgress = {
    userId : CommonTypes.UserId;
    moduleProgress : [ModuleProgress];
    totalLearningHours : Nat;
    lastQuizScore : ?Nat;
    lastQuizAttemptedAt : ?CommonTypes.Timestamp;
  };
};
