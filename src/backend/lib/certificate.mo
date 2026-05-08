import CertificateTypes "../types/certificate";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Char "mo:core/Char";
import Nat "mo:core/Nat";
import Text "mo:core/Text";

module {
  /// Issue a new certificate for a user/course if one does not already exist.
  public func issueCertificate(
    certificateMap : Map.Map<Text, CertificateTypes.Certificate>,
    userId : CommonTypes.UserId,
    courseId : Text,
    courseName : Text,
    now : CommonTypes.Timestamp,
  ) : CertificateTypes.Certificate {
    let key = userId.toText() # ":" # courseId;
    switch (certificateMap.get(key)) {
      case (?existing) existing;
      case null {
        let id = key # ":" # now.toText();
        let verificationCode = generateVerificationCode(userId, courseId, now);
        let cert : CertificateTypes.Certificate = {
          id;
          userId;
          courseId;
          courseName;
          issuedAt = now;
          verificationCode;
        };
        certificateMap.add(key, cert);
        cert;
      };
    };
  };

  /// Return all certificates for a given user as CertificateView array.
  public func getCertificatesForUser(
    certificateMap : Map.Map<Text, CertificateTypes.Certificate>,
    userId : CommonTypes.UserId,
  ) : [CertificateTypes.CertificateView] {
    let result = certificateMap.entries()
      .filter(func((_, cert) : (Text, CertificateTypes.Certificate)) : Bool {
        Principal.equal(cert.userId, userId)
      })
      .map(
        func((_, cert)) {
          { id = cert.id; userId = cert.userId; courseId = cert.courseId; courseName = cert.courseName; issuedAt = cert.issuedAt; verificationCode = cert.verificationCode }
        }
      );
    result.toArray();
  };

  /// Look up a single certificate by id.
  public func getCertificateById(
    certificateMap : Map.Map<Text, CertificateTypes.Certificate>,
    id : Text,
  ) : ?CertificateTypes.CertificateView {
    // Linear scan — certificates are keyed by userId:courseId, not by id
    let found = certificateMap.entries()
      .find(func((_, cert) : (Text, CertificateTypes.Certificate)) : Bool {
        cert.id == id
      });
    switch (found) {
      case (?(_, cert)) ?
        { id = cert.id; userId = cert.userId; courseId = cert.courseId; courseName = cert.courseName; issuedAt = cert.issuedAt; verificationCode = cert.verificationCode };
      case null null;
    };
  };

  /// Generate a deterministic verification code from userId + courseId + timestamp.
  public func generateVerificationCode(
    userId : CommonTypes.UserId,
    courseId : Text,
    now : CommonTypes.Timestamp,
  ) : Text {
    // Deterministic code: hash the combined string into a short hex-like code
    let raw = userId.toText() # courseId # now.toText();
    var h : Nat = 5381;
    for (c in raw.toIter()) {
      let code = c.toNat32().toNat();
      h := ((h * 33) + code) % 0xFFFFFFFF;
    };
    // Format as 8-char uppercase hex
    let hex = "0123456789ABCDEF";
    var result = "";
    var val = h;
    var i = 0;
    while (i < 8) {
      let idx = val % 16;
      let ch = Text.fromChar(hex.toArray()[idx]);
      result := ch # result;
      val := val / 16;
      i += 1;
    };
    result;
  };
};
