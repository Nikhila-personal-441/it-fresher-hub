import ProgressTypes "../types/progress";
import CommonTypes "../types/common";
import ProgressLib "../lib/progress";
import CertificateLib "../lib/certificate";
import ModulesLib "../lib/modules";
import Map "mo:core/Map";
import Time "mo:core/Time";
import CertificateTypes "../types/certificate";
import ModuleTypes "../types/modules";

mixin (
  progressMap : Map.Map<CommonTypes.UserId, ProgressTypes.UserProgress>,
  certificateMap : Map.Map<Text, CertificateTypes.Certificate>,
  signupMap : Map.Map<CommonTypes.UserId, CommonTypes.Timestamp>,
) {
  public query ({ caller }) func getMyProgress() : async ProgressTypes.UserProgress {
    // Record signup time on first access
    let progress = ProgressLib.getUserProgress(progressMap, caller);
    progress;
  };

  public shared ({ caller }) func markModuleCompleted(moduleId : Nat) : async () {
    let now = Time.now();
    // Record signup if first time
    if (not (progressMap.containsKey(caller))) {
      signupMap.add(caller, now);
    };
    ProgressLib.markModuleCompleted(progressMap, caller, moduleId, now);
    // Check if course completion triggers a certificate
    checkAndIssueCertificate(caller, moduleId, now);
  };

  public shared ({ caller }) func updateLearningHours(hours : Nat) : async () {
    let now = Time.now();
    if (not (progressMap.containsKey(caller))) {
      signupMap.add(caller, now);
    };
    ProgressLib.updateLearningHours(progressMap, caller, hours);
  };

  func checkAndIssueCertificate(
    caller : CommonTypes.UserId,
    completedModuleId : Nat,
    now : CommonTypes.Timestamp,
  ) {
    // Find the module that was just completed to get its category (course)
    let moduleOpt = ModulesLib.getModule(completedModuleId);
    switch (moduleOpt) {
      case null return; // unknown module, skip
      case (?m) {
        let categoryText = debug_show(m.category);
        // Get all modules in this course (same category)
        let allModules = ModulesLib.listModules();
        let courseModules = allModules.filter(
          func(mod : ModuleTypes.ITModule) : Bool {
            debug_show(mod.category) == categoryText
          }
        );
        // Get user progress
        let userProgress = ProgressLib.getUserProgress(progressMap, caller);
        // Check all course modules are completed
        let allDone = courseModules.all(
          func(mod : ModuleTypes.ITModule) : Bool {
            userProgress.moduleProgress.any(
              func(mp : ProgressTypes.ModuleProgress) : Bool {
                mp.moduleId == mod.id and mp.completed
              }
            )
          }
        );
        if (allDone and courseModules.size() > 0) {
          let courseId = categoryText;
          ignore CertificateLib.issueCertificate(certificateMap, caller, courseId, m.title, now);
        };
      };
    };
  };
};
