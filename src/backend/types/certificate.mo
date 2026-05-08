import CommonTypes "common";

module {
  public type Certificate = {
    id : Text;
    userId : CommonTypes.UserId;
    courseId : Text;
    courseName : Text;
    issuedAt : CommonTypes.Timestamp;
    verificationCode : Text;
  };

  public type CertificateView = {
    id : Text;
    userId : CommonTypes.UserId;
    courseId : Text;
    courseName : Text;
    issuedAt : CommonTypes.Timestamp;
    verificationCode : Text;
  };
};
