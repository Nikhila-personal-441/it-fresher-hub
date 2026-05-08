import GlossaryTypes "../types/glossary";
import GlossaryLib "../lib/glossary";
import List "mo:core/List";

mixin (terms : List.List<GlossaryTypes.Term>) {
  public query func listGlossaryTerms() : async [GlossaryTypes.Term] {
    GlossaryLib.listTerms(terms);
  };

  public query func getTermsByCategory(category : GlossaryTypes.GlossaryCategory) : async [GlossaryTypes.Term] {
    GlossaryLib.getTermsByCategory(terms, category);
  };

  public query func searchGlossary(searchText : Text) : async [GlossaryTypes.Term] {
    GlossaryLib.searchTerms(terms, searchText);
  };

  public query func getTerm(termId : Nat) : async ?GlossaryTypes.Term {
    GlossaryLib.getTerm(terms, termId);
  };
};
