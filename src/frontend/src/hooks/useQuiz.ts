import type { QuizAttempt, QuizQuestion, QuizResult } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";

const MOCK_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "What does 'API' stand for in software development?",
    options: [
      "Application Programming Interface",
      "Automated Process Integration",
      "Advanced Protocol Implementation",
      "Application Process Instance",
    ],
    correctIndex: 0,
    explanation:
      "An API (Application Programming Interface) is a set of defined rules that enable different applications to communicate with each other.",
    category: "fundamentals",
    difficulty: "easy",
  },
  {
    id: "q2",
    question: "Which of the following is NOT a cloud service model?",
    options: [
      "IaaS (Infrastructure as a Service)",
      "PaaS (Platform as a Service)",
      "SaaS (Software as a Service)",
      "DaaS (Development as a Service)",
    ],
    correctIndex: 3,
    explanation:
      "The three primary cloud service models are IaaS, PaaS, and SaaS. 'DaaS' in the context of cloud commonly refers to Desktop as a Service, but it is not one of the core three models.",
    category: "cloud",
    difficulty: "easy",
  },
  {
    id: "q3",
    question: "What is the primary purpose of DNS in networking?",
    options: [
      "To encrypt data during transmission",
      "To translate domain names into IP addresses",
      "To route packets between networks",
      "To assign IP addresses to devices",
    ],
    correctIndex: 1,
    explanation:
      "DNS (Domain Name System) translates human-readable domain names like 'google.com' into numeric IP addresses that computers use to find each other on the internet.",
    category: "networking",
    difficulty: "easy",
  },
  {
    id: "q4",
    question: "In an Agile sprint, what is a 'backlog'?",
    options: [
      "A list of bugs found during testing",
      "A report of delayed tasks",
      "A prioritized list of features and tasks to be worked on",
      "A record of completed work items",
    ],
    correctIndex: 2,
    explanation:
      "A backlog in Agile is a prioritized list of work for the development team, containing features, enhancements, and bug fixes ordered by business priority.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q5",
    question: "Which Python data structure uses key-value pairs?",
    options: ["List", "Tuple", "Dictionary", "Set"],
    correctIndex: 2,
    explanation:
      "A Python dictionary stores data in key-value pairs, allowing fast lookup by key. Example: {'name': 'Alice', 'age': 25}",
    category: "coding",
    difficulty: "easy",
  },
  {
    id: "q6",
    question: "What does 'ML' stand for in AI/ML?",
    options: [
      "Multi-Level",
      "Machine Learning",
      "Model Logic",
      "Meta Language",
    ],
    correctIndex: 1,
    explanation:
      "ML stands for Machine Learning — a branch of AI where algorithms learn patterns from data to make predictions or decisions without being explicitly programmed.",
    category: "ai_ml",
    difficulty: "easy",
  },
  {
    id: "q7",
    question: "What is the purpose of HTTPS over HTTP?",
    options: [
      "Faster data transfer speeds",
      "Better browser compatibility",
      "Encrypted and secure data transmission",
      "Access to more websites",
    ],
    correctIndex: 2,
    explanation:
      "HTTPS (HyperText Transfer Protocol Secure) uses TLS/SSL encryption to secure data in transit, protecting sensitive information like passwords and credit card numbers.",
    category: "security",
    difficulty: "easy",
  },
  {
    id: "q8",
    question: "What is 'version control' used for in software development?",
    options: [
      "Managing software license versions",
      "Tracking changes to code over time and collaborating",
      "Controlling which version of an app users see",
      "Setting software release schedules",
    ],
    correctIndex: 1,
    explanation:
      "Version control systems like Git track code changes over time, enabling collaboration, rollback to previous states, and branching for parallel development.",
    category: "devops",
    difficulty: "easy",
  },
  {
    id: "q9",
    question: "In CI/CD, what does 'CI' stand for?",
    options: [
      "Code Integration",
      "Continuous Integration",
      "Collaborative Infrastructure",
      "Compiled Instance",
    ],
    correctIndex: 1,
    explanation:
      "CI stands for Continuous Integration — the practice of automatically building and testing code changes every time a developer pushes to the shared repository.",
    category: "devops",
    difficulty: "medium",
  },
  {
    id: "q10",
    question: "What is 'supervised learning' in machine learning?",
    options: [
      "Learning with a human teacher watching every step",
      "Training a model on labeled data with known correct answers",
      "A model that supervises other models",
      "Learning from real-time user feedback",
    ],
    correctIndex: 1,
    explanation:
      "Supervised learning trains ML models on labeled datasets where each input has a known correct output, allowing the model to learn to predict outputs for new, unseen data.",
    category: "ai_ml",
    difficulty: "medium",
  },

  // ── CORPORATE (15 questions) ───────────────────────────────────────────────
  {
    id: "q11",
    question:
      "Your manager asks you to send a project update 'EOD'. When should the email arrive?",
    options: [
      "Early on delivery",
      "By end of day (close of business)",
      "Every other day",
      "Email on demand",
    ],
    correctIndex: 1,
    explanation:
      "EOD stands for End of Day. In corporate communication it means you must complete or deliver something by the close of business hours that same day.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q12",
    question:
      "You disagree with a senior colleague's approach in a team meeting. What is the most professional way to handle it?",
    options: [
      "Stay silent and complain to teammates after the meeting",
      "Interrupt them immediately and explain why they are wrong",
      "Raise your concern politely with supporting data during the open Q&A",
      "Send an angry email to HR about the incident",
    ],
    correctIndex: 2,
    explanation:
      "Constructive disagreement backed by data, expressed at the right moment, is the hallmark of professional maturity. Avoid personal attacks and raise concerns through proper channels.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q13",
    question:
      "What does KPI stand for, and why is it important to a fresher joining a company?",
    options: [
      "Key Process Indicator — it tracks how many processes you complete",
      "Key Performance Indicator — it measures how well you achieve targets",
      "Knowledge Proficiency Index — it scores your technical exam results",
      "Known Problem Inventory — it lists bugs you must fix",
    ],
    correctIndex: 1,
    explanation:
      "KPI (Key Performance Indicator) is a measurable value that shows how effectively you are achieving business objectives. Understanding your KPIs helps you focus on what matters most to your team.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q14",
    question:
      "You receive an email marked 'ASAP' about a critical client report. What does ASAP mean, and what should you do first?",
    options: [
      "As Scheduled And Planned — proceed with normal priority",
      "As Soon As Possible — drop lower-priority tasks and address it immediately",
      "Assigned Senior Approval Pending — wait for your manager to respond",
      "Automated Status And Progress — check the project dashboard",
    ],
    correctIndex: 1,
    explanation:
      "ASAP means As Soon As Possible. When something is marked ASAP by a client or manager, it signals urgency — you should reprioritize accordingly and communicate any blockers immediately.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q15",
    question:
      "During your first week at a new job, your Team Lead schedules a 1-on-1 meeting. What is the best way to prepare?",
    options: [
      "Bring a list of complaints about the onboarding process",
      "Arrive with questions about your role, goals, and how success is measured",
      "Wait for them to do all the talking; freshers should not ask questions",
      "Skip it — 1-on-1 meetings are usually just formalities",
    ],
    correctIndex: 1,
    explanation:
      "A 1-on-1 with your Team Lead is a valuable opportunity to align on expectations. Come prepared with questions about your responsibilities, short-term goals, preferred communication style, and how your performance will be evaluated.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q16",
    question:
      "What does SLA stand for, and what happens if your team breaches it?",
    options: [
      "Software Launch Agreement — the product release gets delayed",
      "Service Level Agreement — the company may face penalties or lose client trust",
      "Standard Learning Assessment — your training score is affected",
      "System Log Archive — historical logs are deleted",
    ],
    correctIndex: 1,
    explanation:
      "An SLA (Service Level Agreement) is a contract that defines the expected level of service. Breaching an SLA can lead to financial penalties, damaged client relationships, or escalated complaints.",
    category: "corporate",
    difficulty: "medium",
  },
  {
    id: "q17",
    question:
      "Your manager gives you feedback that your code documentation is insufficient. How should you respond professionally?",
    options: [
      "Tell them documentation is not your responsibility",
      "Thank them, ask for specific examples, and improve within the agreed timeline",
      "Ignore the feedback — it is just an opinion",
      "Complain to your skip-level manager immediately",
    ],
    correctIndex: 1,
    explanation:
      "Receiving feedback gracefully is a critical professional skill. Acknowledge the feedback, seek clarity on what 'good' looks like, and commit to actionable improvement within a clear timeframe.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q18",
    question:
      "You are cc'd on an email thread between two senior managers discussing a project issue. Should you reply-all with your opinion?",
    options: [
      "Yes — always share your perspective to show initiative",
      "No — only reply if directly addressed or if you have critical information",
      "Yes — reply-all is the expected standard in corporate emails",
      "No — delete the email and pretend you never received it",
    ],
    correctIndex: 1,
    explanation:
      "Being cc'd means you are kept in the loop for awareness, not necessarily asked for input. Respond only if you are directly addressed or have essential information. Unnecessary reply-alls clutter inboxes.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q19",
    question:
      "A client deadline is tomorrow and you realize you cannot finish your assigned module in time. What should you do?",
    options: [
      "Stay silent and submit partial work without informing anyone",
      "Inform your manager immediately, explain the blocker, and propose options",
      "Ask a colleague to submit the work under your name",
      "Request an urgent meeting with the CEO to explain the situation",
    ],
    correctIndex: 1,
    explanation:
      "Proactive communication about risks is crucial. Inform your manager early, be transparent about blockers, and offer solutions (partial delivery, overtime, scope reduction) so the team can respond effectively.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q20",
    question:
      "What is the recommended subject line format for a professional email requesting a code review?",
    options: [
      "hey can u review my code???",
      "[Code Review Request] UserAuth module – PR #47",
      "URGENT URGENT URGENT — Need review NOW",
      "RE: RE: RE: code stuff",
    ],
    correctIndex: 1,
    explanation:
      "Professional email subjects should be specific, action-oriented, and include relevant context (module name, PR number). Vague or unprofessional subjects make it harder for busy colleagues to prioritize.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q21",
    question:
      "During a sprint retrospective, what is the purpose of the 'What went wrong?' section?",
    options: [
      "To blame individual team members for failures",
      "To identify process improvements collaboratively without personal blame",
      "To create a performance improvement plan for the worst performer",
      "To compile a list of bugs for the QA team",
    ],
    correctIndex: 1,
    explanation:
      "Retrospectives are blameless discussions. The goal of identifying what went wrong is to improve team processes, communication, and tooling — not to single out individuals.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q22",
    question:
      "Your colleague consistently interrupts you during meetings. What is the most professional first step to resolve this?",
    options: [
      "Interrupt them back with equal force",
      "Send a passive-aggressive email to the whole team",
      "Have a private, respectful one-on-one conversation with them about it",
      "Refuse to attend any future meetings",
    ],
    correctIndex: 2,
    explanation:
      "Address interpersonal conflicts through direct, private, respectful conversation first. Escalating publicly or resorting to passive-aggression damages team morale and your professional reputation.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q23",
    question: "What does 'escalation' mean in a corporate IT support context?",
    options: [
      "Increasing the priority of a software deployment",
      "Moving an unresolved issue to a higher-level team or manager for resolution",
      "Promoting a junior employee to a senior role",
      "Sending a complaint to the client",
    ],
    correctIndex: 1,
    explanation:
      "Escalation is the process of forwarding an issue that cannot be resolved at the current support level to a higher tier or authority. Knowing when and how to escalate is a key corporate skill.",
    category: "corporate",
    difficulty: "easy",
  },
  {
    id: "q24",
    question:
      "You have three tasks due today: a client report (high priority), a team training (medium priority), and internal documentation (low priority). You can only complete two. Which should you drop or defer?",
    options: [
      "The client report — it can wait until tomorrow",
      "The team training — skip it without telling anyone",
      "The internal documentation — defer it and inform your manager",
      "All three — ask for a one-week extension on everything",
    ],
    correctIndex: 2,
    explanation:
      "Effective time management means prioritizing client-facing and collaborative tasks. Low-priority internal tasks can be deferred, but you must communicate the deferral proactively to avoid surprises.",
    category: "corporate",
    difficulty: "medium",
  },
  {
    id: "q25",
    question:
      "What does a 'work-life balance' policy typically encourage in a corporate environment?",
    options: [
      "Employees should work 80+ hours a week to maximize output",
      "Setting clear boundaries between work hours and personal time to sustain productivity",
      "Mixing personal social media with professional communications freely",
      "Allowing work emails only outside office hours",
    ],
    correctIndex: 1,
    explanation:
      "Work-life balance policies recognize that sustainable high performance requires rest and recovery. Companies encourage boundaries (fixed hours, offline time) to prevent burnout and retain talent.",
    category: "corporate",
    difficulty: "easy",
  },

  // ── FUNDAMENTALS (7 questions) ────────────────────────────────────────────
  {
    id: "q26",
    question: "What is the difference between RAM and ROM in a computer?",
    options: [
      "RAM is permanent storage; ROM is temporary storage",
      "RAM is temporary volatile memory; ROM is permanent read-only memory",
      "RAM stores the operating system; ROM stores user files",
      "RAM is faster than ROM because it connects directly to the GPU",
    ],
    correctIndex: 1,
    explanation:
      "RAM (Random Access Memory) is volatile — it loses data when power is off. ROM (Read-Only Memory) is non-volatile and stores firmware that persists without power.",
    category: "fundamentals",
    difficulty: "easy",
  },
  {
    id: "q27",
    question: "Which of the following best describes an 'operating system'?",
    options: [
      "A programming language used to write applications",
      "Software that manages hardware resources and provides services for applications",
      "A type of database management system",
      "A web browser that connects to the internet",
    ],
    correctIndex: 1,
    explanation:
      "An OS (like Windows, Linux, or macOS) acts as an intermediary between hardware and user applications, managing CPU, memory, storage, and I/O devices.",
    category: "fundamentals",
    difficulty: "easy",
  },
  {
    id: "q28",
    question:
      "A fresher is asked to 'check the logs' when an application crashes. Where are logs typically stored on a Linux server?",
    options: ["/home/logs", "/etc/logs", "/var/log", "/usr/logs"],
    correctIndex: 2,
    explanation:
      "/var/log is the standard directory for log files on Linux systems. Common files include /var/log/syslog, /var/log/auth.log, and application-specific logs.",
    category: "fundamentals",
    difficulty: "medium",
  },
  {
    id: "q29",
    question: "What is the function of a compiler in software development?",
    options: [
      "It runs the program line by line during execution",
      "It translates the entire source code into machine code before execution",
      "It compresses files for faster transmission",
      "It checks for security vulnerabilities in code",
    ],
    correctIndex: 1,
    explanation:
      "A compiler translates the entire high-level source code (e.g., C, Java) into machine code (binary) before execution, producing an executable file. This differs from interpreters, which process code line by line.",
    category: "fundamentals",
    difficulty: "easy",
  },
  {
    id: "q30",
    question:
      "Your laptop has a 512 GB SSD. What does SSD stand for, and how is it different from an HDD?",
    options: [
      "Solid State Drive — uses flash memory with no moving parts, faster than HDD",
      "Super Speed Disk — spins faster than a Hard Disk Drive",
      "Shared Storage Device — stores files across a network",
      "System Software Driver — manages device drivers for hardware",
    ],
    correctIndex: 0,
    explanation:
      "SSD (Solid State Drive) uses NAND flash memory with no mechanical moving parts, resulting in faster read/write speeds, lower power consumption, and greater durability than traditional HDDs (Hard Disk Drives).",
    category: "fundamentals",
    difficulty: "easy",
  },
  {
    id: "q31",
    question: "What is the role of a file system like NTFS or ext4?",
    options: [
      "It encrypts all files stored on the drive automatically",
      "It organizes how data is stored and retrieved on a storage device",
      "It provides a graphical interface to manage files",
      "It compresses files to save space automatically",
    ],
    correctIndex: 1,
    explanation:
      "A file system (NTFS for Windows, ext4 for Linux) defines how data is named, stored, and organized on a storage medium. It tracks file locations, permissions, and metadata.",
    category: "fundamentals",
    difficulty: "medium",
  },
  {
    id: "q32",
    question:
      "Which type of software is the source code publicly available and can be freely modified?",
    options: [
      "Proprietary software",
      "Freeware",
      "Open-source software",
      "Shareware",
    ],
    correctIndex: 2,
    explanation:
      "Open-source software (e.g., Linux, Firefox, VS Code) makes its source code publicly available under a license that allows viewing, modifying, and distributing the code freely.",
    category: "fundamentals",
    difficulty: "easy",
  },

  // ── CLOUD (7 questions) ────────────────────────────────────────────────────
  {
    id: "q33",
    question:
      "Your startup wants to host a web app without managing servers. Which AWS service is most appropriate?",
    options: [
      "Amazon EC2 (manage your own virtual servers)",
      "AWS Lambda (serverless compute, no server management)",
      "Amazon Glacier (long-term archival storage)",
      "AWS Direct Connect (dedicated network connection)",
    ],
    correctIndex: 1,
    explanation:
      "AWS Lambda is a serverless compute service — you upload code and AWS handles all infrastructure, scaling, and patching. Ideal for event-driven apps where you do not want to manage servers.",
    category: "cloud",
    difficulty: "medium",
  },
  {
    id: "q34",
    question:
      "What is the difference between 'scaling up' (vertical scaling) and 'scaling out' (horizontal scaling) in the cloud?",
    options: [
      "Scaling up adds more servers; scaling out increases server size",
      "Scaling up increases the size of a single server; scaling out adds more servers",
      "Scaling up is for databases only; scaling out is for web servers",
      "They are synonyms for the same process",
    ],
    correctIndex: 1,
    explanation:
      "Vertical scaling (scale up) upgrades a single machine's CPU/RAM. Horizontal scaling (scale out) adds more machines to distribute load. Cloud platforms favor horizontal scaling for flexibility.",
    category: "cloud",
    difficulty: "medium",
  },
  {
    id: "q35",
    question:
      "A company uses Microsoft Azure Active Directory. What is its primary purpose?",
    options: [
      "Storing large files and media assets",
      "Managing user identities, authentication, and access control",
      "Running virtual machines in the cloud",
      "Monitoring application performance metrics",
    ],
    correctIndex: 1,
    explanation:
      "Azure Active Directory (AAD) is a cloud-based identity and access management service. It handles authentication (SSO), authorization, and user lifecycle management across cloud and on-premises apps.",
    category: "cloud",
    difficulty: "medium",
  },
  {
    id: "q36",
    question:
      "What type of cloud deployment model does a company use when combining its own private data center with a public cloud?",
    options: ["Community cloud", "Multi-cloud", "Hybrid cloud", "Edge cloud"],
    correctIndex: 2,
    explanation:
      "A hybrid cloud integrates private infrastructure (on-premises data center) with public cloud services, allowing data and applications to move between the two for flexibility and cost optimization.",
    category: "cloud",
    difficulty: "easy",
  },
  {
    id: "q37",
    question:
      "Which AWS service is used to store and retrieve any amount of data (objects) from anywhere on the web?",
    options: ["Amazon RDS", "Amazon S3", "Amazon EC2", "Amazon CloudFront"],
    correctIndex: 1,
    explanation:
      "Amazon S3 (Simple Storage Service) is an object storage service offering unlimited scalability, high durability, and global accessibility for storing files, backups, media, and static website assets.",
    category: "cloud",
    difficulty: "easy",
  },
  {
    id: "q38",
    question:
      "In GCP (Google Cloud Platform), what does 'BigQuery' primarily do?",
    options: [
      "Runs containerized applications",
      "Provides a serverless, highly scalable data warehouse for analytics",
      "Manages DNS and domain registrations",
      "Stores secret keys and credentials",
    ],
    correctIndex: 1,
    explanation:
      "BigQuery is GCP's fully managed, serverless data warehouse. It allows organizations to run fast SQL queries against massive datasets without provisioning or managing infrastructure.",
    category: "cloud",
    difficulty: "medium",
  },
  {
    id: "q39",
    question: "What does 'auto-scaling' mean in a cloud environment?",
    options: [
      "Automatically applying security patches to servers",
      "Automatically adjusting computing resources based on current demand",
      "Automatically migrating data between cloud regions",
      "Automatically backing up databases at scheduled intervals",
    ],
    correctIndex: 1,
    explanation:
      "Auto-scaling dynamically adds or removes compute resources (VMs, containers) in response to real-time traffic. This ensures performance during peaks and cost savings during low demand.",
    category: "cloud",
    difficulty: "easy",
  },

  // ── NETWORKING (6 questions) ───────────────────────────────────────────────
  {
    id: "q40",
    question:
      "What is the purpose of a VPN (Virtual Private Network) in a corporate setting?",
    options: [
      "To speed up internet browsing",
      "To create a secure, encrypted connection over a public network",
      "To block social media access for employees",
      "To assign static IP addresses to office devices",
    ],
    correctIndex: 1,
    explanation:
      "A VPN encrypts internet traffic and routes it through a secure server, allowing remote employees to safely access corporate resources over untrusted public networks.",
    category: "networking",
    difficulty: "easy",
  },
  {
    id: "q41",
    question:
      "A website shows a '502 Bad Gateway' error. What does this typically indicate?",
    options: [
      "Your browser is outdated",
      "The server received an invalid response from an upstream server",
      "The page does not exist on the server",
      "You are not authorized to view the page",
    ],
    correctIndex: 1,
    explanation:
      "A 502 Bad Gateway error occurs when a server acting as a gateway receives an invalid or no response from the upstream server it contacted. Common in load-balanced or proxy setups.",
    category: "networking",
    difficulty: "medium",
  },
  {
    id: "q42",
    question: "What is the role of a firewall in a network?",
    options: [
      "To speed up data transfer between servers",
      "To monitor and control incoming/outgoing network traffic based on security rules",
      "To assign IP addresses to connected devices",
      "To compress network packets for efficiency",
    ],
    correctIndex: 1,
    explanation:
      "A firewall is a network security device that monitors traffic and enforces rules to allow or block connections, protecting internal networks from unauthorized access and threats.",
    category: "networking",
    difficulty: "easy",
  },
  {
    id: "q43",
    question: "In TCP/IP, what is the difference between TCP and UDP?",
    options: [
      "TCP is wireless; UDP is wired",
      "TCP guarantees delivery and order; UDP is faster but does not guarantee delivery",
      "TCP is used only for emails; UDP is used for web browsing",
      "They are the same protocol with different names",
    ],
    correctIndex: 1,
    explanation:
      "TCP (Transmission Control Protocol) provides reliable, ordered delivery with error checking. UDP (User Datagram Protocol) is faster but connectionless — used for streaming, gaming, and DNS queries where speed matters more than guaranteed delivery.",
    category: "networking",
    difficulty: "medium",
  },
  {
    id: "q44",
    question:
      "What does bandwidth mean in the context of internet connectivity?",
    options: [
      "The physical width of the network cable",
      "The maximum rate at which data can be transferred over a network",
      "The number of devices connected to a network",
      "The signal strength of a WiFi router",
    ],
    correctIndex: 1,
    explanation:
      "Bandwidth is the maximum data transfer rate of a network or internet connection, typically measured in Mbps or Gbps. Higher bandwidth allows more data to flow simultaneously.",
    category: "networking",
    difficulty: "easy",
  },
  {
    id: "q45",
    question: "What is the purpose of DHCP in a network?",
    options: [
      "To encrypt data packets during transmission",
      "To automatically assign IP addresses to devices on a network",
      "To translate domain names into IP addresses",
      "To filter malicious traffic at the network edge",
    ],
    correctIndex: 1,
    explanation:
      "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, gateways, and DNS server information to devices when they connect to a network — eliminating the need for manual configuration.",
    category: "networking",
    difficulty: "easy",
  },

  // ── CODING (6 questions) ──────────────────────────────────────────────────
  {
    id: "q46",
    question: "Your team uses Git. What does 'git pull' do?",
    options: [
      "Pushes your local changes to the remote repository",
      "Fetches changes from the remote repository and merges them into your local branch",
      "Creates a new branch from the latest commit",
      "Discards all uncommitted local changes",
    ],
    correctIndex: 1,
    explanation:
      "'git pull' fetches the latest commits from the remote repository and automatically merges them into your current local branch, keeping your work in sync with teammates.",
    category: "coding",
    difficulty: "easy",
  },
  {
    id: "q47",
    question: "What is Big O notation used for in computer science?",
    options: [
      "Naming large objects in code",
      "Describing the worst-case time or space complexity of an algorithm",
      "Counting the number of bugs in a program",
      "Measuring the file size of compiled programs",
    ],
    correctIndex: 1,
    explanation:
      "Big O notation describes how an algorithm's runtime or memory usage grows as the input size increases. O(1) is constant, O(n) is linear, O(n²) is quadratic — essential for choosing efficient algorithms.",
    category: "coding",
    difficulty: "medium",
  },
  {
    id: "q48",
    question:
      "During a code review, your senior developer suggests 'refactoring' a function. What does this mean?",
    options: [
      "Deleting the function entirely and rewriting it in a different language",
      "Restructuring existing code to improve readability and maintainability without changing behavior",
      "Adding more features to an existing function",
      "Copying the function to another file for reuse",
    ],
    correctIndex: 1,
    explanation:
      "Refactoring means improving the internal structure of code — cleaner logic, better naming, reduced duplication — without altering what the code does externally. It reduces technical debt.",
    category: "coding",
    difficulty: "easy",
  },
  {
    id: "q49",
    question: "What is a 'stack overflow' error in programming?",
    options: [
      "A website where developers ask questions",
      "An error caused when too many function calls exceed the call stack memory limit",
      "An error caused by writing beyond an array's bounds",
      "A database query that returns too many results",
    ],
    correctIndex: 1,
    explanation:
      "A stack overflow occurs when a program's call stack runs out of space — most commonly from infinite or deeply nested recursion. The OS terminates the process to prevent memory corruption.",
    category: "coding",
    difficulty: "medium",
  },
  {
    id: "q50",
    question: "In software development, what is a 'merge conflict' in Git?",
    options: [
      "When two branches have files with the same name",
      "When two developers edit the same lines of a file in different branches",
      "When a push request is rejected by the server",
      "When a branch is deleted before merging",
    ],
    correctIndex: 1,
    explanation:
      "A merge conflict happens when Git cannot automatically reconcile differences between branches because the same lines were changed in both. Developers must manually review and resolve the conflict.",
    category: "coding",
    difficulty: "medium",
  },
  {
    id: "q51",
    question: "What is the purpose of unit testing in software development?",
    options: [
      "Testing the entire application flow end-to-end",
      "Testing individual functions or components in isolation to verify correctness",
      "Testing how many users can access the system simultaneously",
      "Testing the user interface for visual consistency",
    ],
    correctIndex: 1,
    explanation:
      "Unit testing verifies that individual functions or modules work correctly in isolation. It catches bugs early, supports refactoring with confidence, and serves as living documentation.",
    category: "coding",
    difficulty: "easy",
  },

  // ── AI / ML (5 questions) ─────────────────────────────────────────────────
  {
    id: "q52",
    question:
      "Your company wants to predict which customers are likely to churn. Which type of ML problem is this?",
    options: [
      "Clustering (unsupervised)",
      "Binary classification (supervised)",
      "Dimensionality reduction",
      "Reinforcement learning",
    ],
    correctIndex: 1,
    explanation:
      "Churn prediction is a binary classification problem: for each customer, the model predicts one of two outcomes — will churn (1) or will not churn (0) — using labeled historical data.",
    category: "ai_ml",
    difficulty: "medium",
  },
  {
    id: "q53",
    question: "What is 'data preprocessing' in a machine learning pipeline?",
    options: [
      "Deploying the trained model to production",
      "Cleaning, transforming, and formatting raw data before training a model",
      "Evaluating the model using test data",
      "Selecting the final algorithm for the project",
    ],
    correctIndex: 1,
    explanation:
      "Data preprocessing includes handling missing values, encoding categorical variables, normalizing/scaling features, and removing outliers. Quality preprocessing directly impacts model accuracy.",
    category: "ai_ml",
    difficulty: "easy",
  },
  {
    id: "q54",
    question: "What does a 'neural network' loosely mimic?",
    options: [
      "The structure of a relational database",
      "The structure and function of the human brain's neurons",
      "The topology of computer networks",
      "The architecture of a CPU",
    ],
    correctIndex: 1,
    explanation:
      "Artificial neural networks are inspired by the brain's structure of interconnected neurons. Layers of nodes transform input data through weighted connections, enabling the model to learn complex patterns.",
    category: "ai_ml",
    difficulty: "easy",
  },
  {
    id: "q55",
    question:
      "A chatbot at a bank answers customer queries 24/7. Which AI capability is it primarily using?",
    options: [
      "Computer vision",
      "Natural language processing (NLP)",
      "Reinforcement learning",
      "Generative adversarial networks (GANs)",
    ],
    correctIndex: 1,
    explanation:
      "NLP (Natural Language Processing) enables machines to understand, interpret, and generate human language. Chatbots rely on NLP to parse customer queries and produce relevant responses.",
    category: "ai_ml",
    difficulty: "easy",
  },
  {
    id: "q56",
    question: "What is 'overfitting' in machine learning?",
    options: [
      "When a model is too simple to capture patterns in data",
      "When a model learns training data so well it fails to generalize to new data",
      "When a model takes too long to train",
      "When training data contains too many features",
    ],
    correctIndex: 1,
    explanation:
      "Overfitting occurs when a model memorizes noise in the training set, achieving high training accuracy but poor performance on unseen data. Remedies include regularization, more training data, and cross-validation.",
    category: "ai_ml",
    difficulty: "medium",
  },

  // ── SECURITY (5 questions) ────────────────────────────────────────────────
  {
    id: "q57",
    question:
      "You receive an email from 'IT Support' asking you to click a link and enter your password to 'verify your account'. What type of attack is this?",
    options: [
      "Brute force attack",
      "Phishing attack",
      "SQL injection attack",
      "Man-in-the-middle attack",
    ],
    correctIndex: 1,
    explanation:
      "Phishing is a social engineering attack where attackers impersonate trusted entities to trick users into revealing credentials. Always verify requests through official channels before clicking links or entering passwords.",
    category: "security",
    difficulty: "easy",
  },
  {
    id: "q58",
    question: "What is the principle of 'least privilege' in access control?",
    options: [
      "Giving all employees full admin access to simplify IT management",
      "Granting users only the minimum access rights needed to do their job",
      "Allowing senior employees unlimited access regardless of role",
      "Restricting internet access for all employees",
    ],
    correctIndex: 1,
    explanation:
      "The principle of least privilege limits each user's access to only what is necessary for their role. This minimizes the damage from insider threats, compromised accounts, and accidental mistakes.",
    category: "security",
    difficulty: "easy",
  },
  {
    id: "q59",
    question:
      "What is two-factor authentication (2FA), and why is it important?",
    options: [
      "Using two different passwords for the same account",
      "Requiring a second form of verification (e.g., OTP) in addition to a password",
      "Logging in from two different devices simultaneously",
      "Having two IT admins approve every login request",
    ],
    correctIndex: 1,
    explanation:
      "2FA adds a second verification step (SMS OTP, authenticator app, hardware key) beyond the password. Even if a password is stolen, attackers cannot access the account without the second factor.",
    category: "security",
    difficulty: "easy",
  },
  {
    id: "q60",
    question:
      "What is 'data encryption at rest' and why do companies implement it?",
    options: [
      "Encrypting data while it is being transmitted over a network",
      "Encrypting stored data so it is unreadable without the correct decryption key",
      "Compressing data to reduce storage costs",
      "Archiving old data to offline backup drives",
    ],
    correctIndex: 1,
    explanation:
      "Encryption at rest protects stored data (databases, files, backups) by converting it into ciphertext. If storage media is stolen or a breach occurs, the data remains unreadable without the encryption key.",
    category: "security",
    difficulty: "medium",
  },

  // ── DEVOPS (5 questions) ──────────────────────────────────────────────────
  {
    id: "q61",
    question:
      "What is a Docker container, and how is it different from a virtual machine?",
    options: [
      "A container is heavier than a VM and requires more memory",
      "A container packages an app and its dependencies into a lightweight, isolated unit without a full OS",
      "A container is a type of cloud database",
      "A container and a VM are identical technologies with different names",
    ],
    correctIndex: 1,
    explanation:
      "Docker containers share the host OS kernel and are lightweight compared to VMs, which each run a full guest OS. Containers start in seconds, use less memory, and provide consistent environments.",
    category: "devops",
    difficulty: "medium",
  },
  {
    id: "q62",
    question:
      "In a CI/CD pipeline, what is the role of the 'CD' (Continuous Delivery/Deployment) stage?",
    options: [
      "Compiling and unit-testing code after each commit",
      "Automatically preparing and deploying tested code to production or staging environments",
      "Sending daily build reports to the team",
      "Monitoring application uptime after release",
    ],
    correctIndex: 1,
    explanation:
      "CD automates the delivery of validated code to target environments. Continuous Delivery deploys to staging for manual approval; Continuous Deployment goes all the way to production automatically.",
    category: "devops",
    difficulty: "medium",
  },
  {
    id: "q63",
    question: "In Scrum, what is the purpose of a 'Daily Standup' meeting?",
    options: [
      "A 2-hour deep dive into architectural decisions",
      "A short (15-minute) sync to share what you did, what you'll do, and any blockers",
      "A session where the Product Owner prioritizes the backlog",
      "A weekly retrospective on the past sprint",
    ],
    correctIndex: 1,
    explanation:
      "The Daily Standup (Daily Scrum) is a short timeboxed sync for the team to coordinate, surface blockers early, and keep the sprint on track. It is not a status report to management.",
    category: "devops",
    difficulty: "easy",
  },
  {
    id: "q64",
    question:
      "What is the purpose of application monitoring tools like Grafana or Datadog?",
    options: [
      "To write automated tests for the application",
      "To visualize metrics, alerts, and logs to detect issues before they impact users",
      "To manage source code and pull requests",
      "To deploy code changes to production servers",
    ],
    correctIndex: 1,
    explanation:
      "Monitoring tools collect and visualize metrics (CPU, error rates, response times), set up alerts for anomalies, and help teams diagnose production issues quickly — a core DevOps practice.",
    category: "devops",
    difficulty: "medium",
  },
  {
    id: "q65",
    question:
      "What is 'Infrastructure as Code' (IaC) and which tool is commonly used for it?",
    options: [
      "Writing application code that runs on cloud infrastructure; tool: Python",
      "Defining and managing cloud infrastructure through machine-readable config files; tool: Terraform",
      "Documenting server architecture in spreadsheets; tool: Excel",
      "Monitoring infrastructure health with dashboards; tool: Grafana",
    ],
    correctIndex: 1,
    explanation:
      "IaC (e.g., Terraform, AWS CloudFormation) lets teams define infrastructure (servers, networks, databases) in version-controlled config files, enabling repeatable, automated provisioning and reducing manual errors.",
    category: "devops",
    difficulty: "medium",
  },
];

export function useQuizQuestions() {
  return useQuery<QuizQuestion[]>({
    queryKey: ["quiz-questions"],
    queryFn: async () => {
      // Wire to actor.listQuizQuestions() when backend is ready
      await new Promise((r) => setTimeout(r, 300));
      return MOCK_QUESTIONS;
    },
    staleTime: 1000 * 60 * 30,
  });
}

export function useSubmitQuiz() {
  return useMutation({
    mutationFn: async (attempts: QuizAttempt[]): Promise<QuizResult> => {
      // Wire to actor.submitQuizAttempt(attempts) when backend is ready
      await new Promise((r) => setTimeout(r, 600));
      const correct = attempts.filter((a) => a.isCorrect).length;
      const result: QuizResult = {
        totalQuestions: attempts.length,
        correctAnswers: correct,
        score: Math.round((correct / attempts.length) * 100),
        timeTakenSeconds: 0,
        attempts,
        completedAt: BigInt(Date.now()),
      };
      return result;
    },
  });
}

export function useMyQuizAttempt() {
  return useQuery<QuizResult | null>({
    queryKey: ["my-quiz-attempt"],
    queryFn: async () => {
      // Wire to actor.getMyQuizAttempt() when backend is ready
      return null;
    },
    staleTime: 1000 * 60,
  });
}
