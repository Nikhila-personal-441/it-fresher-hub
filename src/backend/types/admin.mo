import CommonTypes "common";
import ProgressTypes "progress";

module {
  public type AdminUserView = {
    userId : CommonTypes.UserId;
    userIdText : Text;
    signupAt : CommonTypes.Timestamp;
    lastActiveAt : CommonTypes.Timestamp;
    subscriptionStatus : Text;
    coursesCompleted : Nat;
    totalProgress : Float;
  };

  public type SubscriptionStats = {
    totalUsers : Nat;
    subscribedUsers : Nat;
    activeSubscriptions : Nat;
  };

  public type CourseCompletion = {
    userId : CommonTypes.UserId;
    userIdText : Text;
    courseId : Text;
    completedAt : CommonTypes.Timestamp;
    certificateId : Text;
  };
};
