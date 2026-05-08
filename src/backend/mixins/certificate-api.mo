import CertificateTypes "../types/certificate";
import CommonTypes "../types/common";
import CertificateLib "../lib/certificate";
import Map "mo:core/Map";

mixin (certificateMap : Map.Map<Text, CertificateTypes.Certificate>) {
  /// Return all certificates earned by the caller.
  public query ({ caller }) func getMyCertificates() : async [CertificateTypes.CertificateView] {
    CertificateLib.getCertificatesForUser(certificateMap, caller);
  };

  /// Look up a certificate by its id (public, no auth required for verification).
  public query func getCertificate(id : Text) : async ?CertificateTypes.CertificateView {
    CertificateLib.getCertificateById(certificateMap, id);
  };
};

