import QuizTypes "../types/quiz";
import CommonTypes "../types/common";
import Map "mo:core/Map";
import Time "mo:core/Time";

module {
  public let seedQuestions : [QuizTypes.QuizQuestion] = [
    // Hardware & OS (3 questions)
    {
      id = 1;
      question = "Which component is often called the 'brain' of a computer?";
      options = [
        { id = 1; text = "RAM" },
        { id = 2; text = "Hard Drive" },
        { id = 3; text = "CPU" },
        { id = 4; text = "Monitor" },
      ];
      correctOptionId = 3;
    },
    {
      id = 2;
      question = "What does RAM stand for?";
      options = [
        { id = 1; text = "Read And Memorise" },
        { id = 2; text = "Random Access Memory" },
        { id = 3; text = "Rapid Application Module" },
        { id = 4; text = "Remote Access Machine" },
      ];
      correctOptionId = 2;
    },
    {
      id = 3;
      question = "Which of the following is an example of an Operating System?";
      options = [
        { id = 1; text = "Microsoft Word" },
        { id = 2; text = "Google Chrome" },
        { id = 3; text = "Ubuntu Linux" },
        { id = 4; text = "Adobe Photoshop" },
      ];
      correctOptionId = 3;
    },
    // Software & Programming (2 questions)
    {
      id = 4;
      question = "What is a 'bug' in software development?";
      options = [
        { id = 1; text = "A type of computer virus" },
        { id = 2; text = "An error in the code causing unexpected behaviour" },
        { id = 3; text = "A feature that is not yet released" },
        { id = 4; text = "A slow internet connection" },
      ];
      correctOptionId = 2;
    },
    {
      id = 5;
      question = "Which tool do developers commonly use to manage code versions and collaborate?";
      options = [
        { id = 1; text = "Notepad" },
        { id = 2; text = "Git" },
        { id = 3; text = "Excel" },
        { id = 4; text = "Zoom" },
      ];
      correctOptionId = 2;
    },
    // Networking (3 questions)
    {
      id = 6;
      question = "What does DNS do?";
      options = [
        { id = 1; text = "Protects your computer from viruses" },
        { id = 2; text = "Translates domain names into IP addresses" },
        { id = 3; text = "Speeds up your internet connection" },
        { id = 4; text = "Blocks unwanted emails" },
      ];
      correctOptionId = 2;
    },
    {
      id = 7;
      question = "You work from home and need to securely access your company's internal files. What should you use?";
      options = [
        { id = 1; text = "A VPN" },
        { id = 2; text = "A stronger Wi-Fi signal" },
        { id = 3; text = "Google Drive" },
        { id = 4; text = "An antivirus program" },
      ];
      correctOptionId = 1;
    },
    {
      id = 8;
      question = "Which device is responsible for connecting your home devices to the internet?";
      options = [
        { id = 1; text = "Monitor" },
        { id = 2; text = "Keyboard" },
        { id = 3; text = "Router" },
        { id = 4; text = "Printer" },
      ];
      correctOptionId = 3;
    },
    // Cybersecurity (3 questions)
    {
      id = 9;
      question = "You receive an email from 'your bank' asking you to click a link and enter your password. This is most likely:";
      options = [
        { id = 1; text = "A normal bank notification" },
        { id = 2; text = "A phishing attack" },
        { id = 3; text = "A software update reminder" },
        { id = 4; text = "A customer survey" },
      ];
      correctOptionId = 2;
    },
    {
      id = 10;
      question = "Which of the following makes a password MOST secure?";
      options = [
        { id = 1; text = "Using your name and birth year" },
        { id = 2; text = "password123" },
        { id = 3; text = "A mix of letters, numbers, and symbols like G7#mP!2k" },
        { id = 4; text = "A single dictionary word" },
      ];
      correctOptionId = 3;
    },
    {
      id = 11;
      question = "What is Two-Factor Authentication (2FA)?";
      options = [
        { id = 1; text = "Using two different email accounts" },
        { id = 2; text = "A method requiring two forms of verification to log in" },
        { id = 3; text = "Having two antivirus programs installed" },
        { id = 4; text = "Logging in from two devices at once" },
      ];
      correctOptionId = 2;
    },
    // Cloud Computing (2 questions)
    {
      id = 12;
      question = "Which of the following is an example of SaaS (Software as a Service)?";
      options = [
        { id = 1; text = "Buying a laptop" },
        { id = 2; text = "Installing software from a CD" },
        { id = 3; text = "Using Microsoft 365 through a browser" },
        { id = 4; text = "Connecting a USB drive" },
      ];
      correctOptionId = 3;
    },
    {
      id = 13;
      question = "A small business experiences a sudden surge in online orders. Which cloud benefit helps them handle this?";
      options = [
        { id = 1; text = "Encryption" },
        { id = 2; text = "Scalability" },
        { id = 3; text = "Phishing protection" },
        { id = 4; text = "DNS resolution" },
      ];
      correctOptionId = 2;
    },
    // IT Support (2 questions)
    {
      id = 14;
      question = "A colleague reports their computer is very slow. What is the FIRST troubleshooting step?";
      options = [
        { id = 1; text = "Buy a new computer immediately" },
        { id = 2; text = "Reinstall the operating system" },
        { id = 3; text = "Restart the computer and check for running processes" },
        { id = 4; text = "Call the hardware manufacturer" },
      ];
      correctOptionId = 3;
    },
    {
      id = 15;
      question = "What is a ticketing system used for in IT support?";
      options = [
        { id = 1; text = "Booking train tickets for employees" },
        { id = 2; text = "Tracking and managing IT support requests" },
        { id = 3; text = "Purchasing new software licenses" },
        { id = 4; text = "Monitoring employee attendance" },
      ];
      correctOptionId = 2;
    },
    // AI/ML (3 questions)
    {
      id = 16;
      question = "Netflix recommends shows based on your viewing history. Which technology powers this?";
      options = [
        { id = 1; text = "A manual editorial team" },
        { id = 2; text = "Machine Learning" },
        { id = 3; text = "Spreadsheet formulas" },
        { id = 4; text = "DNS lookup" },
      ];
      correctOptionId = 2;
    },
    {
      id = 17;
      question = "In supervised machine learning, what does the model learn from?";
      options = [
        { id = 1; text = "Random guesses" },
        { id = 2; text = "Labelled training data with known answers" },
        { id = 3; text = "Unlabelled data only" },
        { id = 4; text = "User feedback alone" },
      ];
      correctOptionId = 2;
    },
    {
      id = 18;
      question = "Which AI technology enables virtual assistants like Siri to understand spoken commands?";
      options = [
        { id = 1; text = "Blockchain" },
        { id = 2; text = "Natural Language Processing (NLP)" },
        { id = 3; text = "Spreadsheet automation" },
        { id = 4; text = "DNS" },
      ];
      correctOptionId = 2;
    },
  ];

  public func listQuestions(questions : [QuizTypes.QuizQuestion]) : [QuizTypes.QuizQuestion] {
    // Return questions without revealing correct answers
    questions.map<QuizTypes.QuizQuestion, QuizTypes.QuizQuestion>(
      func(q) { { q with correctOptionId = 0 } }
    );
  };

  public func submitAttempt(
    attempts : Map.Map<CommonTypes.UserId, QuizTypes.QuizAttempt>,
    userId : CommonTypes.UserId,
    answers : [(Nat, Nat)],
    questions : [QuizTypes.QuizQuestion],
  ) : QuizTypes.QuizAttempt {
    var score : Nat = 0;
    for ((questionId, selectedOptionId) in answers.values()) {
      switch (questions.find(func(q : QuizTypes.QuizQuestion) : Bool { q.id == questionId })) {
        case (?q) {
          if (q.correctOptionId == selectedOptionId) {
            score += 1;
          };
        };
        case null {};
      };
    };
    let attempt : QuizTypes.QuizAttempt = {
      userId;
      score;
      totalQuestions = questions.size();
      attemptedAt = Time.now();
    };
    attempts.add(userId, attempt);
    attempt;
  };

  public func getAttempt(
    attempts : Map.Map<CommonTypes.UserId, QuizTypes.QuizAttempt>,
    userId : CommonTypes.UserId,
  ) : ?QuizTypes.QuizAttempt {
    attempts.get(userId);
  };
};
