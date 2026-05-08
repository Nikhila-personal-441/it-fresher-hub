module {
  public type GlossaryCategory = {
    #hardware;
    #software;
    #networking;
    #cybersecurity;
    #cloud;
    #itSupport;
    #aiml;
    #general;
  };

  public type Term = {
    id : Nat;
    term : Text;
    definition : Text;
    example : Text;
    category : GlossaryCategory;
  };
};
