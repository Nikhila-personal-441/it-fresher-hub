import GlossaryTypes "types/glossary";
import QuizTypes "types/quiz";
import CommonTypes "types/common";
import ProgressTypes "types/progress";
import SubscriptionTypes "types/subscription";
import GlossaryLib "lib/glossary";
import QuizLib "lib/quiz";
import List "mo:core/List";
import Map "mo:core/Map";



import ModulesApi "mixins/modules-api";
import GlossaryApi "mixins/glossary-api";
import QuizApi "mixins/quiz-api";
import ProgressApi "mixins/progress-api";
import SubscriptionApi "mixins/subscription-api";
import CertificateTypes "types/certificate";
import CertificateApi "mixins/certificate-api";
import AdminApi "mixins/admin-api";
import AdminTypes "types/admin";



actor {
  let terms = List.empty<GlossaryTypes.Term>();
  let quizQuestions : [QuizTypes.QuizQuestion] = QuizLib.seedQuestions;
  let quizAttempts = Map.empty<CommonTypes.UserId, QuizTypes.QuizAttempt>();
  let progressMap = Map.empty<CommonTypes.UserId, ProgressTypes.UserProgress>();
  let subscriptions = Map.empty<CommonTypes.UserId, SubscriptionTypes.Subscription>();
  let certificateMap = Map.empty<Text, CertificateTypes.Certificate>();
  let signupMap = Map.empty<CommonTypes.UserId, CommonTypes.Timestamp>();
  let owner = { var principal : ?CommonTypes.UserId = null };
  let razorpayKeys = { var keyId : Text = "YOUR_RAZORPAY_KEY_ID"; var keySecret : Text = "YOUR_RAZORPAY_KEY_SECRET" };
  let courseCompletions = Map.empty<Text, List.List<AdminTypes.CourseCompletion>>();

  // Seed glossary terms once (guard prevents re-seeding on upgrade)
  if (terms.isEmpty()) {
    GlossaryLib.initTerms(terms);
  };

  include ModulesApi();
  include GlossaryApi(terms);
  include QuizApi(quizQuestions, quizAttempts, progressMap);
  include ProgressApi(progressMap, certificateMap, signupMap);
  include SubscriptionApi(subscriptions, razorpayKeys, owner);
  include CertificateApi(certificateMap);
  include AdminApi(owner, progressMap, subscriptions, signupMap, razorpayKeys, courseCompletions, certificateMap);
};
