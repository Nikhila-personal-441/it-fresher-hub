module {
  public type ModuleCategory = {
    // Original 7
    #hardware;
    #software;
    #networking;
    #cybersecurity;
    #cloud;
    #itSupport;
    #aiml;
    // New categories
    #python;
    #sql;
    #devops;
    #dsa;
    #machinelearning;
    #htmlcss;
    #java;
    #itfundamentals;
    #excel;
    #presentation;
    #cloudaws;
    #corporateskills;
    #trending;
    #github;
    #shellscripting;
    #mncplatforms;
    #etltools;
    #capstonePproject;
    #corporateWorld;
  };

  public type Lesson = {
    title : Text;
    description : Text;
    durationMinutes : Nat;
  };

  public type ITModule = {
    id : Nat;
    title : Text;
    description : Text;
    category : ModuleCategory;
    difficulty : Text; // "Beginner" | "Intermediate" | "Advanced"
    estimatedMinutes : Nat;
    topics : [Text];
    lessons : [Lesson];
    estimatedHours : Nat;
    isComingSoon : Bool;
  };
};
