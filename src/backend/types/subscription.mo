import CommonTypes "common";

module {
  public type SubscriptionStatus = {
    #active;
    #inactive;
    #cancelled;
  };

  public type Subscription = {
    userId : CommonTypes.UserId;
    var status : SubscriptionStatus;
    var startDate : CommonTypes.Timestamp;
    var expiresAt : CommonTypes.Timestamp; // startDate + 45 days in nanoseconds
    var renewalDate : CommonTypes.Timestamp;
    var stripeCustomerId : Text;
    var stripeSubscriptionId : Text;
    var razorpayPaymentId : ?Text;  // audit: Razorpay payment_id
    var razorpayOrderId : ?Text;    // audit: Razorpay order_id
  };

  // Shared-safe view of Subscription for public API responses
  public type SubscriptionView = {
    userId : CommonTypes.UserId;
    status : SubscriptionStatus;
    startDate : CommonTypes.Timestamp;
    expiresAt : CommonTypes.Timestamp;
    renewalDate : CommonTypes.Timestamp;
    stripeCustomerId : Text;
    stripeSubscriptionId : Text;
    razorpayPaymentId : ?Text;
    razorpayOrderId : ?Text;
  };

  // Result type returned by createRazorpayOrder
  public type RazorpayOrderResult = {
    #ok : Text;  // Razorpay order_id
    #err : Text; // error message
  };

  public type StripeEventType = {
    #customerSubscriptionCreated;
    #customerSubscriptionUpdated;
    #customerSubscriptionDeleted;
    #invoicePaymentSucceeded;
    #invoicePaymentFailed;
    #unknown;
  };

  public type StripeWebhookPayload = {
    eventType : Text;
    stripeCustomerId : Text;
    stripeSubscriptionId : Text;
    userId : ?CommonTypes.UserId;
  };
};
