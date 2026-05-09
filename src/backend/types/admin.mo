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
    loginCount : Nat;
    lastLoginAt : CommonTypes.Timestamp;
    subscriptionPlan : Text;
  };

  public type SubscriptionStats = {
    totalUsers : Nat;
    subscribedUsers : Nat;
    activeSubscriptions : Nat;
    totalRevenue : Nat;
    totalPayments : Nat;
    recentSignups : Nat;
  };

  public type CourseCompletion = {
    userId : CommonTypes.UserId;
    userIdText : Text;
    courseId : Text;
    completedAt : CommonTypes.Timestamp;
    certificateId : Text;
  };

  /// A single login event recorded when a user signs in.
  public type LoginEvent = {
    userId : CommonTypes.UserId;
    userIdText : Text;
    timestamp : CommonTypes.Timestamp;
  };

  /// A payment record created on successful Razorpay payment.
  public type PaymentRecord = {
    userId : CommonTypes.UserId;
    userIdText : Text;
    paymentId : Text;
    orderId : Text;
    amount : Nat;
    plan : Text;
    timestamp : CommonTypes.Timestamp;
    status : Text;
  };
};
