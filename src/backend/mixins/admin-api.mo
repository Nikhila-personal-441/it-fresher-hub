import AdminTypes "../types/admin";
import ProgressTypes "../types/progress";
import SubscriptionTypes "../types/subscription";
import CommonTypes "../types/common";
import AdminLib "../lib/admin";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import List "mo:core/List";
import CertificateLib "../lib/certificate";
import CertificateTypes "../types/certificate";
import Runtime "mo:core/Runtime";

mixin (
  owner : { var principal : ?CommonTypes.UserId },
  progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
  subscriptions : Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>,
  signupMap : Map.Map<CommonTypes.UserId, CommonTypes.Timestamp>,
  razorpayKeys : { var keyId : Text; var keySecret : Text },
  courseCompletions : Map.Map<Text, List.List<AdminTypes.CourseCompletion>>,
  certificateMap : Map.Map<Text, CertificateTypes.Certificate>,
) {
  func isOwner(caller : CommonTypes.UserId) : Bool {
    switch (owner.principal) {
      case (?p) Principal.equal(p, caller);
      case null false;
    };
  };

  /// One-time owner bootstrap — first caller becomes the owner.
  public shared ({ caller }) func setOwner() : async () {
    switch (owner.principal) {
      case null { owner.principal := ?caller };
      case (?_) {}; // owner already set, silently ignore
    };
  };

  /// Admin: set Razorpay API credentials. Owner-only.
  public shared ({ caller }) func setRazorpayKeys(keyId : Text, keySecret : Text) : async Bool {
    if (not isOwner(caller)) { return false };
    razorpayKeys.keyId := keyId;
    razorpayKeys.keySecret := keySecret;
    true;
  };

  /// Admin: list all users with their status.
  public query ({ caller }) func getAllUsersAdmin() : async [AdminTypes.AdminUserView] {
    if (not isOwner(caller)) return [];
    AdminLib.getAllUsers(progressMap, subscriptions, signupMap, Time.now());
  };

  /// Admin: full progress record for a specific user.
  public query ({ caller }) func getUserProgressAdmin(userId : CommonTypes.UserId) : async ?ProgressTypes.UserProgress {
    if (not isOwner(caller)) return null;
    progressMap.get(userId);
  };

  /// Admin: aggregate subscription stats.
  public query ({ caller }) func getSubscriptionStatsAdmin() : async AdminTypes.SubscriptionStats {
    if (not isOwner(caller)) return { totalUsers = 0; subscribedUsers = 0; activeSubscriptions = 0 };
    AdminLib.getSubscriptionStats(progressMap, subscriptions, Time.now());
  };

  /// Mark a course as complete for the caller and auto-issue an intern certificate.
  /// Records the completion so admin can view it via getCourseCompletions().
  public shared ({ caller }) func markCourseComplete(courseId : Text, courseName : Text) : async CertificateTypes.CertificateView {
    if (caller.isAnonymous()) { Runtime.trap("Not authenticated") };
    let now = Time.now();
    // Issue (or retrieve existing) certificate
    let cert = CertificateLib.issueCertificate(certificateMap, caller, courseId, courseName, now);
    // Record this user's completion in courseCompletions map
    let entry : AdminTypes.CourseCompletion = {
      userId = caller;
      userIdText = caller.toText();
      courseId;
      completedAt = now;
      certificateId = cert.id;
    };
    switch (courseCompletions.get(courseId)) {
      case (?list) { list.add(entry) };
      case null {
        let list = List.empty<AdminTypes.CourseCompletion>();
        list.add(entry);
        courseCompletions.add(courseId, list);
      };
    };
    { id = cert.id; userId = cert.userId; courseId = cert.courseId; courseName = cert.courseName; issuedAt = cert.issuedAt; verificationCode = cert.verificationCode };
  };

  /// Admin: get all course completions, grouped by courseId. Returns flat list.
  public query ({ caller }) func getCourseCompletions() : async [AdminTypes.CourseCompletion] {
    if (not isOwner(caller)) return [];
    let all = List.empty<AdminTypes.CourseCompletion>();
    courseCompletions.entries().forEach(func((_, completions)) {
      completions.forEach(func(entry) { all.add(entry) });
    });
    all.toArray();
  };
};
