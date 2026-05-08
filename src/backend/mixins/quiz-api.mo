import QuizTypes "../types/quiz";
import CommonTypes "../types/common";
import ProgressTypes "../types/progress";
import QuizLib "../lib/quiz";
import ProgressLib "../lib/progress";
import Map "mo:core/Map";

mixin (
  questions : [QuizTypes.QuizQuestion],
  attempts : Map.Map<CommonTypes.UserId, QuizTypes.QuizAttempt>,
  progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
) {
  public query func listQuizQuestions() : async [QuizTypes.QuizQuestion] {
    QuizLib.listQuestions(questions);
  };

  public shared ({ caller }) func submitQuizAttempt(answers : [(Nat, Nat)]) : async QuizTypes.QuizAttempt {
    let attempt = QuizLib.submitAttempt(attempts, caller, answers, questions);
    ProgressLib.updateQuizScore(progressMap, caller, attempt.score, attempt.attemptedAt);
    attempt;
  };

  public query ({ caller }) func getMyQuizAttempt() : async ?QuizTypes.QuizAttempt {
    QuizLib.getAttempt(attempts, caller);
  };
};
