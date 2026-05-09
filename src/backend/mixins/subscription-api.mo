import CommonTypes "../types/common";
import SubscriptionTypes "../types/subscription";
import AdminTypes "../types/admin";
import SubscriptionLib "../lib/subscription";
import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Nat8 "mo:core/Nat8";
import Blob "mo:core/Blob";

mixin (
  subscriptions : Map.Map<CommonTypes.UserId, SubscriptionTypes.Subscription>,
  capstones : Map.Map<CommonTypes.UserId, SubscriptionTypes.CapstoneSubscription>,
  razorpayKeys : { var keyId : Text; var keySecret : Text },
  owner : { var principal : ?CommonTypes.UserId },
  paymentRecords : List.List<AdminTypes.PaymentRecord>,
) {

  // Management canister actor type for HTTP outcalls (IC built-in)
  type IcHttpHeader = { name : Text; value : Text };
  type IcHttpRequestArgs = {
    url : Text;
    max_response_bytes : ?Nat64;
    method : { #get; #head; #post };
    headers : [IcHttpHeader];
    body : ?Blob;
    transform : ?{
      function : shared query ({
        response : { status : Nat; headers : [IcHttpHeader]; body : Blob };
        context : Blob;
      }) -> async { status : Nat; headers : [IcHttpHeader]; body : Blob };
      context : Blob;
    };
    is_replicated : ?Bool;
  };
  type IcHttpResult = { status : Nat; headers : [IcHttpHeader]; body : Blob };

  let management : actor { http_request : IcHttpRequestArgs -> async IcHttpResult } =
    actor "aaaaa-aa";

  // Check if a module is accessible — module index 0 is always free;
  // all other modules require an active lifetime base subscription.
  public shared ({ caller }) func canAccessModule(moduleIndex : Nat) : async Bool {
    SubscriptionLib.canAccessModule(subscriptions, caller, moduleIndex, owner.principal);
  };

  // Backward-compatible: check if a lesson is accessible (first 2 lessons free)
  public shared ({ caller }) func canAccessLesson(lessonIndex : Nat) : async Bool {
    SubscriptionLib.canAccessLesson(subscriptions, caller, lessonIndex, owner.principal);
  };

  // Check if the caller can access capstone content (requires base + capstone add-on)
  public shared ({ caller }) func canAccessCapstone() : async Bool {
    SubscriptionLib.canAccessCapstone(subscriptions, capstones, caller, owner.principal);
  };

  // Returns the caller's capstone subscription status
  public shared ({ caller }) func getCapstoneSubscription() : async ?SubscriptionTypes.CapstoneSubscriptionView {
    SubscriptionLib.checkCapstoneSubscription(capstones, caller);
  };

  // Returns the caller's current subscription status and metadata
  public shared ({ caller }) func checkSubscription() : async ?SubscriptionTypes.SubscriptionView {
    SubscriptionLib.checkSubscription(subscriptions, caller);
  };

  // Receives Stripe webhook event and updates subscription state accordingly.
  public shared ({ caller }) func handleStripeWebhook(
    payload : SubscriptionTypes.StripeWebhookPayload
  ) : async Bool {
    SubscriptionLib.handleStripeWebhook(subscriptions, payload);
  };

  // Links the caller's principal to a Stripe customer ID
  public shared ({ caller }) func linkStripeCustomer(stripeCustomerId : Text) : async () {
    SubscriptionLib.linkStripeCustomer(subscriptions, caller, stripeCustomerId);
  };

  // Admin: list all subscribers and their subscription details
  public query func listSubscribers() : async [SubscriptionTypes.SubscriptionView] {
    SubscriptionLib.listAll(subscriptions);
  };

  // Activates the BASE subscription for the caller after a successful Razorpay payment.
  // The frontend sends orderId and paymentId from Razorpay's success callback.
  // Rejects anonymous callers and empty parameters.
  public shared ({ caller }) func activateSubscriptionWithRazorpay(
    orderId : Text,
    paymentId : Text,
  ) : async Bool {
    if (caller.isAnonymous()) { return false };
    if (orderId == "" or paymentId == "") { return false };
    SubscriptionLib.activateSubscriptionWithRazorpay(subscriptions, caller, orderId, paymentId);
    // Record payment event — ₹199 base plan
    paymentRecords.add({
      userId = caller;
      userIdText = caller.toText();
      paymentId;
      orderId;
      amount = 199;
      plan = "Base Subscription ₹199";
      timestamp = Time.now();
      status = "success";
    });
    true;
  };

  // Creates a Razorpay order for the CAPSTONE add-on.
  // Amount: ₹499 = 49900 paise. Returns #ok(orderId) or #err(message).
  // Rejects anonymous callers.
  public shared ({ caller }) func createCapstoneOrder() : async SubscriptionTypes.RazorpayOrderResult {
    if (caller.isAnonymous()) { return #err("Not authenticated") };
    let keyId = razorpayKeys.keyId;
    if (keyId == "" or keyId == "YOUR_RAZORPAY_KEY_ID") {
      return #err("Razorpay keys not configured");
    };
    let userId = caller.toText();
    let requestBody = "{\"amount\":49900,\"currency\":\"INR\",\"receipt\":\"capstone_" # userId # "\",\"notes\":{\"platform\":\"IT Fresher Hub\",\"type\":\"capstone\"}}";
    let credentials = razorpayKeys.keyId # ":" # razorpayKeys.keySecret;
    let encodedCreds = b64Encode(credentials);
    let args : IcHttpRequestArgs = {
      url = "https://api.razorpay.com/v1/orders";
      max_response_bytes = ?2000;
      method = #post;
      headers = [
        { name = "Content-Type"; value = "application/json" },
        { name = "Authorization"; value = "Basic " # encodedCreds },
      ];
      body = ?(requestBody.encodeUtf8());
      transform = null;
      is_replicated = null;
    };
    try {
      let response = await management.http_request(args);
      if (response.status == 200) {
        let bodyText = switch (response.body.decodeUtf8()) {
          case (?t) t;
          case null { return #err("Invalid response encoding") };
        };
        switch (jsonExtractStringField(bodyText, "id")) {
          case (?id) { #ok(id) };
          case null { #err("Could not parse order_id from response") };
        };
      } else {
        #err("Razorpay API error: status " # debug_show(response.status))
      };
    } catch (_) {
      #err("HTTP outcall failed");
    };
  };

  // Activates the CAPSTONE add-on for the caller after a successful Razorpay payment.
  // Rejects anonymous callers and empty parameters.
  public shared ({ caller }) func activateCapstoneWithRazorpay(
    orderId : Text,
    paymentId : Text,
  ) : async Bool {
    if (caller.isAnonymous()) { return false };
    if (orderId == "" or paymentId == "") { return false };
    SubscriptionLib.activateCapstoneWithRazorpay(capstones, caller, orderId, paymentId);
    // Record payment event — ₹499 capstone add-on
    paymentRecords.add({
      userId = caller;
      userIdText = caller.toText();
      paymentId;
      orderId;
      amount = 499;
      plan = "Capstone Add-on ₹499";
      timestamp = Time.now();
      status = "success";
    });
    true;
  };

  // Creates a Razorpay order for the BASE subscription.
  // Amount: ₹199 = 19900 paise. Returns #ok(orderId) or #err(message).
  // Rejects anonymous callers.
  public shared ({ caller }) func createRazorpayOrder() : async SubscriptionTypes.RazorpayOrderResult {
    if (caller.isAnonymous()) { return #err("Not authenticated") };
    let keyId = razorpayKeys.keyId;
    if (keyId == "" or keyId == "YOUR_RAZORPAY_KEY_ID") {
      return #err("Razorpay keys not configured");
    };
    let userId = caller.toText();
    let requestBody = "{\"amount\":19900,\"currency\":\"INR\",\"receipt\":\"" # userId # "\",\"notes\":{\"platform\":\"IT Fresher Hub\",\"type\":\"base\"}}";
    let credentials = keyId # ":" # razorpayKeys.keySecret;
    let encodedCreds = b64Encode(credentials);
    let args : IcHttpRequestArgs = {
      url = "https://api.razorpay.com/v1/orders";
      max_response_bytes = ?2000;
      method = #post;
      headers = [
        { name = "Content-Type"; value = "application/json" },
        { name = "Authorization"; value = "Basic " # encodedCreds },
      ];
      body = ?(requestBody.encodeUtf8());
      transform = null;
      is_replicated = null;
    };
    try {
      let response = await management.http_request(args);
      if (response.status == 200) {
        let bodyText = switch (response.body.decodeUtf8()) {
          case (?t) t;
          case null { return #err("Invalid response encoding") };
        };
        // Extract order id from JSON: {"id":"order_xxx",...}
        switch (jsonExtractStringField(bodyText, "id")) {
          case (?id) { #ok(id) };
          case null { #err("Could not parse order_id from response") };
        };
      } else {
        #err("Razorpay API error: status " # debug_show(response.status))
      };
    } catch (_) {
      #err("HTTP outcall failed");
    };
  };

  // Encodes a Text string to Base64 (for HTTP Basic auth).
  private func b64Encode(input : Text) : Text {
    let table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    let tableArr = table.toArray();
    let arr = input.encodeUtf8().toArray();
    let count = arr.size();
    var result = "";
    var i = 0;
    while (i < count) {
      let b0 = arr[i].toNat();
      let b1 = if (i + 1 < count) arr[i + 1].toNat() else 0;
      let b2 = if (i + 2 < count) arr[i + 2].toNat() else 0;
      let n = b0 * 65536 + b1 * 256 + b2;
      let c0 = Text.fromChar(tableArr[n / 262144]);
      let c1 = Text.fromChar(tableArr[(n / 4096) % 64]);
      let c2 = if (i + 1 < count) Text.fromChar(tableArr[(n / 64) % 64]) else "=";
      let c3 = if (i + 2 < count) Text.fromChar(tableArr[n % 64]) else "=";
      result #= c0 # c1 # c2 # c3;
      i += 3;
    };
    result;
  };

  // Minimal JSON string field extractor: finds "fieldName":"value" pattern.
  private func jsonExtractStringField(json : Text, fieldName : Text) : ?Text {
    let needle = "\"" # fieldName # "\":\"";
    let parts = json.split(#text(needle));
    var first = true;
    var result : ?Text = null;
    for (part in parts) {
      if (first) {
        first := false;
      } else if (result == null) {
        // value ends at the next unescaped quote
        let valueParts = part.split(#char '\u{22}');
        for (vp in valueParts) {
          if (result == null) {
            result := ?vp;
          };
        };
      };
    };
    result;
  };
};
