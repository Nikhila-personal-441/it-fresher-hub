import ModuleTypes "../types/modules";
import ModulesLib "../lib/modules";

mixin () {
  public query func listModules() : async [ModuleTypes.ITModule] {
    ModulesLib.listModules();
  };

  public query func getModule(moduleId : Nat) : async ?ModuleTypes.ITModule {
    ModulesLib.getModule(moduleId);
  };
};
