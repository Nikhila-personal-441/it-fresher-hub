import CommonTypes "../types/common";
import SubscriptionTypes "../types/subscription";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Principal "mo:core/Principal";

module {
  public type SubscriptionMap = Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>;

  // 45 days in nanoseconds (45 * 24 * 60 * 60 * 1_000_000_000)
  let days45Ns : Int = 3_888_000_000_000_000;

  // Returns true if:
  //   - moduleIndex == 0 (first module is always free), OR
  //   - user has an active subscription that has not expired (within 45-day window)
  public func canAccessModule(
    subscriptions : SubscriptionMap,
    userId : CommonTypes.UserId,
    moduleIndex : Nat,
    ownerPrincipal : ?CommonTypes.UserId,
  ) : Bool {
    // Admin always gets full access
    switch (ownerPrincipal) {
      case (?owner) if (Principal.equal(owner, userId)) { return true };
      case _ {};
    };
    if (moduleIndex == 0) { return true };
    switch (subscriptions.get(userId)) {
      case (?sub) {
        sub.status == #active and Time.now() < sub.expiresAt
      };
      case null { false };
    };
  };

  // Backward-compatible wrapper — kept so existing callers still work
  public func canAccessLesson(
    subscriptions : SubscriptionMap,
    userId : CommonTypes.UserId,
    lessonIndex : Nat,
    ownerPrincipal : ?CommonTypes.UserId,
  ) : Bool {
    // Admin always gets full access
    switch (ownerPrincipal) {
      case (?owner) if (Principal.equal(owner, userId)) { return true };
      case _ {};
    };
    if (lessonIndex < 2) { return true };
    switch (subscriptions.get(userId)) {
      case (?sub) {
        sub.status == #active and Time.now() < sub.expiresAt
      };
      case null { false };
    };
  };

  // Returns the subscription view for a given user, or null if not subscribed
  public func checkSubscription(
    subscriptions : SubscriptionMap,
    userId : CommonTypes.UserId,
  ) : ?SubscriptionTypes.SubscriptionView {
    switch (subscriptions.get(userId)) {
      case (?sub) { ?toView(sub) };
      case null { null };
    };
  };

  // Upserts subscription state based on a Stripe webhook payload
  public func handleStripeWebhook(
    subscriptions : SubscriptionMap,
    payload : SubscriptionTypes.StripeWebhookPayload,
  ) : Bool {
    let eventType = parseEventType(payload.eventType);
    switch (eventType) {
      case (#customerSubscriptionCreated) {
        switch (payload.userId) {
          case (?uid) {
            let now = Time.now();
            let sub : SubscriptionTypes.Subscription = {
              userId = uid;
              var status = #active;
              var startDate = now;
              var expiresAt = now + days45Ns;
              var renewalDate = now + days45Ns;
              var stripeCustomerId = payload.stripeCustomerId;
              var stripeSubscriptionId = payload.stripeSubscriptionId;
              var razorpayPaymentId = null;
              var razorpayOrderId = null;
            };
            subscriptions.add(uid, sub);
            true;
          };
          case null { false };
        };
      };
      case (#customerSubscriptionUpdated) {
        switch (payload.userId) {
          case (?uid) {
            switch (subscriptions.get(uid)) {
              case (?sub) {
                let now = Time.now();
                sub.status := #active;
                sub.expiresAt := now + days45Ns;
                sub.renewalDate := now + days45Ns;
                sub.stripeSubscriptionId := payload.stripeSubscriptionId;
                true;
              };
              case null {
                let now = Time.now();
                let sub : SubscriptionTypes.Subscription = {
                  userId = uid;
                  var status = #active;
                  var startDate = now;
                  var expiresAt = now + days45Ns;
                  var renewalDate = now + days45Ns;
                  var stripeCustomerId = payload.stripeCustomerId;
                  var stripeSubscriptionId = payload.stripeSubscriptionId;
                  var razorpayPaymentId = null;
                  var razorpayOrderId = null;
                };
                subscriptions.add(uid, sub);
                true;
              };
            };
          };
          case null {
            var found = false;
            subscriptions.forEach(func(_, sub) {
              if (sub.stripeCustomerId == payload.stripeCustomerId) {
                let now = Time.now();
                sub.status := #active;
                sub.expiresAt := now + days45Ns;
                sub.renewalDate := now + days45Ns;
                sub.stripeSubscriptionId := payload.stripeSubscriptionId;
                found := true;
              };
            });
            found;
          };
        };
      };
      case (#customerSubscriptionDeleted) {
        switch (payload.userId) {
          case (?uid) {
            switch (subscriptions.get(uid)) {
              case (?sub) {
                sub.status := #cancelled;
                true;
              };
              case null { false };
            };
          };
          case null {
            var found = false;
            subscriptions.forEach(func(_, sub) {
              if (sub.stripeCustomerId == payload.stripeCustomerId) {
                sub.status := #cancelled;
                found := true;
              };
            });
            found;
          };
        };
      };
      case (#invoicePaymentSucceeded) {
        switch (payload.userId) {
          case (?uid) {
            switch (subscriptions.get(uid)) {
              case (?sub) {
                let now = Time.now();
                sub.status := #active;
                sub.expiresAt := now + days45Ns;
                sub.renewalDate := now + days45Ns;
                true;
              };
              case null { false };
            };
          };
          case null {
            var found = false;
            subscriptions.forEach(func(_, sub) {
              if (sub.stripeCustomerId == payload.stripeCustomerId) {
                let now = Time.now();
                sub.status := #active;
                sub.expiresAt := now + days45Ns;
                sub.renewalDate := now + days45Ns;
                found := true;
              };
            });
            found;
          };
        };
      };
      case (#invoicePaymentFailed) {
        switch (payload.userId) {
          case (?uid) {
            switch (subscriptions.get(uid)) {
              case (?sub) {
                sub.status := #inactive;
                true;
              };
              case null { false };
            };
          };
          case null {
            var found = false;
            subscriptions.forEach(func(_, sub) {
              if (sub.stripeCustomerId == payload.stripeCustomerId) {
                sub.status := #inactive;
                found := true;
              };
            });
            found;
          };
        };
      };
      case (#unknown) { false };
    };
  };

  // Activates a subscription for the given user after a successful Razorpay payment.
  // Stores payment_id and order_id for audit trail.
  public func activateSubscriptionWithRazorpay(
    subscriptions : SubscriptionMap,
    userId : CommonTypes.UserId,
    orderId : Text,
    paymentId : Text,
  ) : () {
    let now = Time.now();
    switch (subscriptions.get(userId)) {
      case (?sub) {
        sub.status := #active;
        sub.startDate := now;
        sub.expiresAt := now + days45Ns;
        sub.renewalDate := now + days45Ns;
        sub.razorpayPaymentId := ?paymentId;
        sub.razorpayOrderId := ?orderId;
      };
      case null {
        let sub : SubscriptionTypes.Subscription = {
          userId = userId;
          var status = #active;
          var startDate = now;
          var expiresAt = now + days45Ns;
          var renewalDate = now + days45Ns;
          var stripeCustomerId = "";
          var stripeSubscriptionId = "";
          var razorpayPaymentId = ?paymentId;
          var razorpayOrderId = ?orderId;
        };
        subscriptions.add(userId, sub);
      };
    };
  };

  // Links a Stripe customer ID to a user principal
  public func linkStripeCustomer(
    subscriptions : SubscriptionMap,
    userId : CommonTypes.UserId,
    stripeCustomerId : Text,
  ) : () {
    switch (subscriptions.get(userId)) {
      case (?sub) {
        sub.stripeCustomerId := stripeCustomerId;
      };
      case null {
        let now = Time.now();
        let sub : SubscriptionTypes.Subscription = {
          userId = userId;
          var status = #inactive;
          var startDate = now;
          var expiresAt = now;
          var renewalDate = now;
          var stripeCustomerId = stripeCustomerId;
          var stripeSubscriptionId = "";
          var razorpayPaymentId = null;
          var razorpayOrderId = null;
        };
        subscriptions.add(userId, sub);
      };
    };
  };

  // Converts internal Subscription to shared-safe SubscriptionView
  public func toView(sub : SubscriptionTypes.Subscription) : SubscriptionTypes.SubscriptionView {
    {
      userId = sub.userId;
      status = sub.status;
      startDate = sub.startDate;
      expiresAt = sub.expiresAt;
      renewalDate = sub.renewalDate;
      stripeCustomerId = sub.stripeCustomerId;
      stripeSubscriptionId = sub.stripeSubscriptionId;
      razorpayPaymentId = sub.razorpayPaymentId;
      razorpayOrderId = sub.razorpayOrderId;
    };
  };

  // Returns all subscriptions as views (for admin use)
  public func listAll(subscriptions : SubscriptionMap) : [SubscriptionTypes.SubscriptionView] {
    subscriptions.entries()
      .map<(CommonTypes.UserId, SubscriptionTypes.Subscription), SubscriptionTypes.SubscriptionView>(
        func((_, sub)) { toView(sub) }
      )
      .toArray();
  };

  // Parses Stripe event type string into typed variant
  private func parseEventType(eventType : Text) : SubscriptionTypes.StripeEventType {
    if (eventType == "customer.subscription.created") { #customerSubscriptionCreated }
    else if (eventType == "customer.subscription.updated") { #customerSubscriptionUpdated }
    else if (eventType == "customer.subscription.deleted") { #customerSubscriptionDeleted }
    else if (eventType == "invoice.payment_succeeded") { #invoicePaymentSucceeded }
    else if (eventType == "invoice.payment_failed") { #invoicePaymentFailed }
    else { #unknown };
  };
};
