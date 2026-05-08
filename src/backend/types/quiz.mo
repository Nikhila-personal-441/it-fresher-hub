import CommonTypes "common";

module {
  public type QuizOption = {
    id : Nat;
    text : Text;
  };

  public type QuizQuestion = {
    id : Nat;
    question : Text;
    options : [QuizOption];
    correctOptionId : Nat;
  };

  public type QuizAttempt = {
    userId : CommonTypes.UserId;
    score : Nat;
    totalQuestions : Nat;
    attemptedAt : CommonTypes.Timestamp;
  };
};
