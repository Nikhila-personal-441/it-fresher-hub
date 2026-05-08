import Types "../types/modules";

module {
  let allModules : [Types.ITModule] = [
    // ── Original 7 ─────────────────────────────────────────────────────────
    {
      id = 1;
      title = "Hardware & Operating Systems";
      description = "Learn the physical components of computers and how operating systems manage them. A great starting point for anyone entering the IT world!";
      category = #hardware;
      difficulty = "Beginner";
      estimatedMinutes = 120;
      topics = ["CPU & RAM", "Storage devices", "Input/Output", "Operating systems", "Windows, macOS, Linux", "File & memory management"];
      lessons = [
        { title = "What is Computer Hardware?"; description = "Explore the physical components that make up a computer — from the CPU to the keyboard."; durationMinutes = 15 },
        { title = "CPU, RAM, and Storage Explained"; description = "Understand the three pillars of computing performance and how they interact."; durationMinutes = 20 },
        { title = "Input and Output Devices"; description = "Learn how we interact with computers through keyboards, monitors, printers, and more."; durationMinutes = 12 },
        { title = "What is an Operating System?"; description = "Discover the software layer that sits between hardware and your apps."; durationMinutes = 18 },
        { title = "Windows, macOS, and Linux Overview"; description = "Compare the world's most popular operating systems with real-world scenarios."; durationMinutes = 20 },
        { title = "How OS Manages Files and Memory"; description = "See how the OS allocates resources and keeps your files organised."; durationMinutes = 15 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 2;
      title = "Software & Programming Basics";
      description = "Understand what software is, how programs work, and get introduced to programming concepts that power every app you use daily.";
      category = #software;
      difficulty = "Beginner";
      estimatedMinutes = 80;
      topics = ["Types of software", "Programming intro", "How code compiles", "Popular languages"];
      lessons = [
        { title = "What is Software?"; description = "System software vs. application software — explained with everyday examples."; durationMinutes = 10 },
        { title = "System vs Application Software"; description = "Understand how the OS and apps differ in purpose and design."; durationMinutes = 15 },
        { title = "Introduction to Programming"; description = "Write your first pseudo-code and understand what a program really is."; durationMinutes = 20 },
        { title = "How Code Becomes a Program"; description = "Follow the journey from source code through compilation to execution."; durationMinutes = 18 },
        { title = "Popular Programming Languages"; description = "Get a bird's-eye view of Python, Java, JavaScript, and when to use each."; durationMinutes = 15 },
      ];
      estimatedHours = 1;
      isComingSoon = false;
    },
    {
      id = 3;
      title = "Networking Fundamentals";
      description = "Discover how devices communicate over networks. From your home Wi-Fi to the global internet — learn how it all connects!";
      category = #networking;
      difficulty = "Beginner";
      estimatedMinutes = 103;
      topics = ["Networks basics", "IP & DNS", "LAN/WAN", "Wi-Fi", "Routers & firewalls", "TCP/IP protocols"];
      lessons = [
        { title = "What is a Network?"; description = "Learn why networks exist and how they connect billions of devices worldwide."; durationMinutes = 12 },
        { title = "IP Addresses and DNS"; description = "Understand how every device gets a unique address and how domain names resolve."; durationMinutes = 20 },
        { title = "LAN, WAN, and the Internet"; description = "Explore the difference between local networks and the global internet."; durationMinutes = 18 },
        { title = "How Wi-Fi Works"; description = "Demystify wireless communication using radio frequencies and standards."; durationMinutes = 15 },
        { title = "Routers, Switches, and Firewalls"; description = "Meet the hardware heroes that route, switch, and protect network traffic."; durationMinutes = 20 },
        { title = "Introduction to Protocols (HTTP, TCP/IP)"; description = "Learn the rules that govern how data travels across the internet."; durationMinutes = 18 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 4;
      title = "Cybersecurity Essentials";
      description = "Stay safe online! Learn about common threats like viruses and phishing, and how to protect yourself and your organisation.";
      category = #cybersecurity;
      difficulty = "Beginner";
      estimatedMinutes = 80;
      topics = ["Threats & attacks", "Password security", "Safe browsing", "Encryption basics"];
      lessons = [
        { title = "Why Cybersecurity Matters"; description = "Real-world breaches that changed how companies handle security."; durationMinutes = 12 },
        { title = "Common Threats: Viruses, Malware & Phishing"; description = "Identify and avoid the most dangerous digital threats with scenario examples."; durationMinutes = 20 },
        { title = "Strong Passwords and Authentication"; description = "Create uncrackable passwords and add extra layers of protection with 2FA."; durationMinutes = 15 },
        { title = "Safe Browsing and Email Habits"; description = "Spot suspicious links, fake websites, and social engineering tricks."; durationMinutes = 15 },
        { title = "Introduction to Encryption"; description = "Understand how data is scrambled so only the intended recipient can read it."; durationMinutes = 18 },
      ];
      estimatedHours = 1;
      isComingSoon = false;
    },
    {
      id = 5;
      title = "Cloud Computing";
      description = "Understand the cloud services that power modern businesses. Learn about AWS, Azure, and Google Cloud in plain English.";
      category = #cloud;
      difficulty = "Beginner";
      estimatedMinutes = 80;
      topics = ["Cloud models", "IaaS/PaaS/SaaS", "Cloud providers", "Storage & backup", "Benefits & risks"];
      lessons = [
        { title = "What is Cloud Computing?"; description = "Replace your mental image of 'the cloud' with a real, practical understanding."; durationMinutes = 15 },
        { title = "IaaS, PaaS, and SaaS Explained"; description = "Break down the three service models with memorable analogies."; durationMinutes = 20 },
        { title = "Popular Cloud Providers Overview"; description = "AWS, Azure, and GCP — what each one does best and where they compete."; durationMinutes = 18 },
        { title = "Cloud Storage and Backup"; description = "How cloud storage works and why backups are a business-critical habit."; durationMinutes = 15 },
        { title = "Benefits and Risks of the Cloud"; description = "Weigh cost savings and scalability against security and vendor lock-in."; durationMinutes = 12 },
      ];
      estimatedHours = 1;
      isComingSoon = false;
    },
    {
      id = 6;
      title = "IT Support & Operations";
      description = "The backbone of any IT team! Learn troubleshooting skills, ticketing systems, and how to support users effectively in a corporate environment.";
      category = #itSupport;
      difficulty = "Beginner";
      estimatedMinutes = 100;
      topics = ["IT support role", "Troubleshooting", "Ticketing systems", "Workstation setup", "Remote support", "ITIL basics"];
      lessons = [
        { title = "Role of IT Support in an Organisation"; description = "A day in the life of IT support — what they do and why it matters."; durationMinutes = 12 },
        { title = "Troubleshooting Basics"; description = "Follow a systematic approach to diagnose and resolve technical issues."; durationMinutes = 20 },
        { title = "Using Ticketing Systems"; description = "Log, track, and close support tickets like a pro using ServiceNow or Jira."; durationMinutes = 15 },
        { title = "Setting Up Workstations"; description = "Configure a laptop from scratch: OS, software, network, and security."; durationMinutes = 18 },
        { title = "Remote Support Tools"; description = "Use remote desktop tools to support users without leaving your desk."; durationMinutes = 15 },
        { title = "ITIL and IT Service Management Basics"; description = "Understand the ITIL framework and how enterprises structure their IT services."; durationMinutes = 20 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 7;
      title = "AI & Machine Learning Basics";
      description = "Demystify Artificial Intelligence and Machine Learning. Learn how AI models are trained, what they can do, and how they're transforming every industry.";
      category = #aiml;
      difficulty = "Intermediate";
      estimatedMinutes = 122;
      topics = ["What is AI", "Supervised learning", "Unsupervised learning", "Deep learning", "Real-world AI", "AI ethics"];
      lessons = [
        { title = "What is Artificial Intelligence?"; description = "From chess engines to ChatGPT — trace the evolution of AI with real examples."; durationMinutes = 15 },
        { title = "Supervised Learning Explained"; description = "Train a model step-by-step: labelled data, features, and predictions."; durationMinutes = 25 },
        { title = "Unsupervised Learning and Clustering"; description = "Discover patterns without labels — how Netflix groups viewer preferences."; durationMinutes = 22 },
        { title = "Deep Learning and Neural Networks"; description = "Peek inside the layered architecture that powers image and speech recognition."; durationMinutes = 25 },
        { title = "Real-World AI Applications"; description = "Fraud detection, medical diagnosis, autonomous vehicles — AI at work today."; durationMinutes = 20 },
        { title = "AI Ethics and Responsible Use"; description = "Bias, privacy, and accountability — the human side of building AI."; durationMinutes = 15 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },

    // ── New courses ──────────────────────────────────────────────────────────
    {
      id = 8;
      title = "Python for Beginners";
      description = "Python is the #1 language for data science, automation, and backend development. Start from zero and build real mini-projects along the way.";
      category = #python;
      difficulty = "Beginner";
      estimatedMinutes = 180;
      topics = ["Variables & types", "Control flow", "Functions", "Lists & dicts", "File I/O", "Libraries overview", "Mini project"];
      lessons = [
        { title = "Why Python? Setting Up Your Environment"; description = "Install Python & VS Code, run your first 'Hello World', understand the REPL."; durationMinutes = 20 },
        { title = "Variables, Data Types & Operators"; description = "Strings, integers, floats, booleans — with a salary calculator scenario."; durationMinutes = 25 },
        { title = "Control Flow: if, for, while"; description = "Write a student grade evaluator using conditionals and loops."; durationMinutes = 25 },
        { title = "Functions and Modules"; description = "Package reusable logic into functions; import built-in modules like math and os."; durationMinutes = 25 },
        { title = "Lists, Tuples, and Dictionaries"; description = "Manage employee records with Python collections — CRUD operations."; durationMinutes = 25 },
        { title = "File Handling and Error Management"; description = "Read and write CSV files; handle exceptions gracefully."; durationMinutes = 20 },
        { title = "Popular Libraries: NumPy, Pandas Overview"; description = "See how data professionals use Pandas for quick data analysis."; durationMinutes = 20 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 9;
      title = "SQL & Database Fundamentals";
      description = "Data lives in databases. Learn to query, manipulate, and structure data using SQL — the universal language of data.";
      category = #sql;
      difficulty = "Beginner";
      estimatedMinutes = 160;
      topics = ["Relational DB concepts", "SELECT queries", "Joins", "Aggregations", "DDL/DML", "Indexes", "Stored procedures"];
      lessons = [
        { title = "What is a Relational Database?"; description = "Tables, rows, columns — and why every company runs on a database."; durationMinutes = 15 },
        { title = "Writing Your First SELECT Query"; description = "Retrieve employee records from an HR database with WHERE and ORDER BY."; durationMinutes = 20 },
        { title = "Filtering, Sorting, and DISTINCT"; description = "Find unique customer cities and filter orders above a threshold."; durationMinutes = 20 },
        { title = "Joins: INNER, LEFT, RIGHT, FULL"; description = "Combine order and customer tables to produce meaningful reports."; durationMinutes = 25 },
        { title = "Aggregations: GROUP BY, COUNT, SUM, AVG"; description = "Calculate total sales per region — a classic business analytics query."; durationMinutes = 20 },
        { title = "DDL: Creating and Altering Tables"; description = "Design a schema for an e-commerce app from scratch."; durationMinutes = 20 },
        { title = "Indexes and Query Optimisation"; description = "Speed up slow queries on a million-row table with the right index."; durationMinutes = 20 },
        { title = "Stored Procedures and Views"; description = "Encapsulate business logic in reusable SQL objects."; durationMinutes = 20 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 10;
      title = "DevOps Essentials";
      description = "Bridge the gap between development and operations. Learn CI/CD, containers, and the tools that ship software faster and reliably.";
      category = #devops;
      difficulty = "Intermediate";
      estimatedMinutes = 200;
      topics = ["DevOps culture", "Git & version control", "CI/CD pipelines", "Docker", "Kubernetes intro", "Monitoring", "Infrastructure as code"];
      lessons = [
        { title = "What is DevOps? Culture and Mindset"; description = "Why Netflix, Amazon, and startups all swear by DevOps principles."; durationMinutes = 20 },
        { title = "Version Control with Git"; description = "Clone, branch, merge, and resolve conflicts — daily developer workflow."; durationMinutes = 25 },
        { title = "CI/CD Pipelines Explained"; description = "Automate build → test → deploy with GitHub Actions in a real project."; durationMinutes = 30 },
        { title = "Containers with Docker"; description = "Package an app into a Docker container and run it anywhere."; durationMinutes = 30 },
        { title = "Kubernetes: Orchestration at Scale"; description = "Deploy and scale containerised apps across a cluster of servers."; durationMinutes = 30 },
        { title = "Infrastructure as Code with Terraform"; description = "Provision cloud resources with code instead of clicking through a console."; durationMinutes = 25 },
        { title = "Monitoring and Observability"; description = "Set up alerts, logs, and dashboards to catch issues before users do."; durationMinutes = 20 },
        { title = "Security in DevOps (DevSecOps)"; description = "Shift security left — scan code, secrets, and containers in the pipeline."; durationMinutes = 20 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 11;
      title = "Data Structures & Algorithms Basics";
      description = "Crack technical interviews and write efficient code. Learn the fundamentals of DSA with visual explanations and coding challenges.";
      category = #dsa;
      difficulty = "Intermediate";
      estimatedMinutes = 180;
      topics = ["Arrays & strings", "Linked lists", "Stacks & queues", "Hash maps", "Trees", "Sorting algorithms", "Big-O notation"];
      lessons = [
        { title = "Why DSA Matters for Your Career"; description = "How FAANG companies use DSA questions to filter candidates — and how to prepare."; durationMinutes = 15 },
        { title = "Arrays, Strings, and Sliding Window"; description = "Solve the 'find maximum subarray sum' problem step by step."; durationMinutes = 25 },
        { title = "Linked Lists: Insertion and Traversal"; description = "Build a singly linked list from scratch and reverse it in O(n)."; durationMinutes = 25 },
        { title = "Stacks, Queues, and Real Applications"; description = "Implement a browser history using a stack; simulate a printer queue."; durationMinutes = 25 },
        { title = "Hash Maps and Collision Handling"; description = "Build a word frequency counter with a hash map — O(1) lookups explained."; durationMinutes = 25 },
        { title = "Trees: Binary Trees and BST"; description = "Search, insert, and delete in a Binary Search Tree with visual walkthroughs."; durationMinutes = 25 },
        { title = "Sorting: Bubble, Merge, and Quick Sort"; description = "Compare sorting strategies and understand when to use each one."; durationMinutes = 20 },
        { title = "Big-O Notation and Complexity Analysis"; description = "Read and write Big-O — evaluate the time and space cost of any algorithm."; durationMinutes = 20 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 12;
      title = "Machine Learning Deep Dive";
      description = "Go beyond AI basics — build real ML models. Cover the full pipeline from raw data to a deployed prediction service.";
      category = #machinelearning;
      difficulty = "Intermediate";
      estimatedMinutes = 210;
      topics = ["ML pipeline", "Feature engineering", "Regression", "Classification", "Model evaluation", "scikit-learn", "Deployment basics"];
      lessons = [
        { title = "The Machine Learning Pipeline"; description = "Data → features → model → evaluation → deployment: the end-to-end flow."; durationMinutes = 20 },
        { title = "Data Preprocessing and Feature Engineering"; description = "Clean messy real-estate data: handle nulls, encode categories, scale features."; durationMinutes = 30 },
        { title = "Linear and Logistic Regression"; description = "Predict house prices (regression) and spam emails (classification)."; durationMinutes = 30 },
        { title = "Decision Trees and Random Forests"; description = "Build an interpretable tree to classify loan approvals."; durationMinutes = 30 },
        { title = "Model Evaluation: Accuracy, Precision, Recall"; description = "Why a 99% accurate fraud detector can still be useless — confusion matrix explained."; durationMinutes = 25 },
        { title = "Hands-on with scikit-learn"; description = "Train, tune, and compare models in 50 lines of Python."; durationMinutes = 30 },
        { title = "Deploying an ML Model as an API"; description = "Wrap a trained model in a Flask API and test it with Postman."; durationMinutes = 25 },
        { title = "Introduction to NLP with Real Datasets"; description = "Sentiment analysis on product reviews — tokenisation to prediction."; durationMinutes = 20 },
      ];
      estimatedHours = 4;
      isComingSoon = false;
    },
    {
      id = 13;
      title = "HTML & CSS for Beginners";
      description = "Every web page starts with HTML and CSS. Learn to build modern, responsive web pages from a blank file to a polished layout.";
      category = #htmlcss;
      difficulty = "Beginner";
      estimatedMinutes = 150;
      topics = ["HTML structure", "Semantic tags", "CSS selectors", "Box model", "Flexbox & Grid", "Responsive design", "Animations"];
      lessons = [
        { title = "Your First Web Page: HTML Structure"; description = "DOCTYPE, html, head, body — create a personal profile page from scratch."; durationMinutes = 20 },
        { title = "Semantic HTML: Making Content Meaningful"; description = "Use header, main, article, nav to build accessible, SEO-friendly pages."; durationMinutes = 20 },
        { title = "CSS Selectors and Specificity"; description = "Target exactly the element you want — class, id, pseudo-class selectors."; durationMinutes = 20 },
        { title = "The Box Model: Margin, Padding, Border"; description = "Understand why elements don't line up — and how to fix it."; durationMinutes = 20 },
        { title = "Flexbox: One-Dimensional Layouts"; description = "Build a navigation bar and card grid using flex properties."; durationMinutes = 25 },
        { title = "CSS Grid: Two-Dimensional Layouts"; description = "Design a magazine-style page layout with grid areas."; durationMinutes = 25 },
        { title = "Responsive Design and Media Queries"; description = "Make your page look great on mobile, tablet, and desktop."; durationMinutes = 20 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 14;
      title = "Java Programming";
      description = "Java runs on billions of devices. Learn object-oriented programming, core Java syntax, and build small applications used in enterprise systems.";
      category = #java;
      difficulty = "Intermediate";
      estimatedMinutes = 200;
      topics = ["Java basics", "OOP concepts", "Collections", "Exception handling", "File I/O", "Threads intro", "Maven basics"];
      lessons = [
        { title = "Java Setup and First Program"; description = "Install JDK, configure VS Code, and run Hello World from the command line."; durationMinutes = 15 },
        { title = "Variables, Operators, and Control Flow"; description = "Build a simple ATM simulator with if-else and switch statements."; durationMinutes = 25 },
        { title = "Classes, Objects, and Constructors"; description = "Model a Bank Account with fields, methods, and a constructor."; durationMinutes = 30 },
        { title = "Inheritance, Interfaces, and Polymorphism"; description = "Extend the Bank Account into Savings and Current accounts."; durationMinutes = 30 },
        { title = "Collections: ArrayList, HashMap, Set"; description = "Manage a student roster using Java Collections Framework."; durationMinutes = 25 },
        { title = "Exception Handling and Custom Exceptions"; description = "Throw and catch exceptions in a file-processing workflow."; durationMinutes = 20 },
        { title = "File I/O and Streams"; description = "Read a CSV file and write processed output using Java I/O."; durationMinutes = 25 },
        { title = "Introduction to Threads and Concurrency"; description = "Run background tasks without freezing the main application."; durationMinutes = 30 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 15;
      title = "IT Fundamentals";
      description = "A complete survival guide for freshers entering an IT company. Understand how corporate IT works, from infrastructure to ITIL.";
      category = #itfundamentals;
      difficulty = "Beginner";
      estimatedMinutes = 130;
      topics = ["IT roles", "Corporate infrastructure", "Ticketing", "ITSM", "SLA & KPI", "Change management", "IT governance"];
      lessons = [
        { title = "Corporate IT Roles and Responsibilities"; description = "Who does what — developer, tester, admin, support, manager, team lead."; durationMinutes = 20 },
        { title = "IT Infrastructure: Servers, Network, Storage"; description = "How data centres work and why 99.9% uptime SLAs matter."; durationMinutes = 20 },
        { title = "ITSM and ITIL v4 Overview"; description = "Service strategy, design, transition, operation — the lifecycle of an IT service."; durationMinutes = 20 },
        { title = "Incident and Change Management"; description = "Log an incident, escalate it, resolve it, and document the change."; durationMinutes = 20 },
        { title = "SLAs, KPIs, and Reporting"; description = "Measure IT performance with meaningful metrics and avoid SLA breaches."; durationMinutes = 20 },
        { title = "IT Security Policies and Compliance"; description = "GDPR, ISO 27001, and the policies every employee must follow."; durationMinutes = 15 },
        { title = "IT Governance: Decisions and Accountability"; description = "Who approves infrastructure changes and why a governance board exists."; durationMinutes = 15 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 16;
      title = "Excel for IT Professionals";
      description = "Excel is used in every corporate team. Master the formulas, pivot tables, and dashboards that impress hiring managers and managers alike.";
      category = #excel;
      difficulty = "Beginner";
      estimatedMinutes = 150;
      topics = ["Essential formulas", "VLOOKUP/XLOOKUP", "Pivot tables", "Conditional formatting", "Charts", "Data validation", "Macros intro"];
      lessons = [
        { title = "Excel Basics and Navigation Shortcuts"; description = "Move, select, and format data 10× faster with keyboard shortcuts."; durationMinutes = 15 },
        { title = "Essential Formulas: SUM, IF, COUNTIF, SUMIF"; description = "Calculate KPIs for a fictional sales team using core formulas."; durationMinutes = 25 },
        { title = "VLOOKUP and XLOOKUP"; description = "Join two tables to match employee IDs with their department names."; durationMinutes = 20 },
        { title = "Pivot Tables and Pivot Charts"; description = "Summarise 10,000 transaction rows into an executive dashboard in minutes."; durationMinutes = 25 },
        { title = "Conditional Formatting and Data Bars"; description = "Highlight overdue tasks and top performers automatically."; durationMinutes = 15 },
        { title = "Data Validation and Drop-down Lists"; description = "Create a bug-tracking sheet that only accepts valid inputs."; durationMinutes = 15 },
        { title = "Introduction to Excel Macros (VBA)"; description = "Automate a repetitive monthly report with a simple macro."; durationMinutes = 20 },
        { title = "Creating Professional Reports and Dashboards"; description = "Combine charts, slicers, and KPIs into a board-ready dashboard."; durationMinutes = 15 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 17;
      title = "Presentation & Communication Skills";
      description = "Your ideas are only as powerful as how you present them. Learn to structure, design, and deliver presentations that get results.";
      category = #presentation;
      difficulty = "Beginner";
      estimatedMinutes = 120;
      topics = ["Story structure", "Slide design", "Data visualisation", "Public speaking", "Meeting facilitation", "MOM writing"];
      lessons = [
        { title = "The Story Arc: How to Structure Any Presentation"; description = "Use the 'situation → complication → resolution' framework for any topic."; durationMinutes = 20 },
        { title = "Slide Design Principles (Less is More)"; description = "Transform a cluttered slide into a clean, impactful visual."; durationMinutes = 20 },
        { title = "Visualising Data: Charts that Convince"; description = "Choose the right chart type — bar, line, pie — and avoid misleading visuals."; durationMinutes = 20 },
        { title = "Public Speaking: Voice, Pace, and Body Language"; description = "Deliver a 2-minute introduction confidently — tips and a practice framework."; durationMinutes = 20 },
        { title = "Facilitating Meetings Effectively"; description = "Open, run, and close a meeting so everyone leaves with clear actions."; durationMinutes = 20 },
        { title = "Writing Minutes of Meeting (MOM)"; description = "Capture decisions and action items in a clear, professional format."; durationMinutes = 20 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 18;
      title = "AWS Cloud Services";
      description = "Amazon Web Services powers a third of the internet. Learn the most important AWS services used by developers and architects every day.";
      category = #cloudaws;
      difficulty = "Intermediate";
      estimatedMinutes = 210;
      topics = ["AWS global infra", "EC2 & S3", "RDS & DynamoDB", "Lambda & serverless", "VPC & networking", "IAM security", "CloudWatch", "Well-Architected"];
      lessons = [
        { title = "AWS Global Infrastructure: Regions and AZs"; description = "Understand availability zones and why they matter for disaster recovery."; durationMinutes = 20 },
        { title = "EC2: Virtual Machines in the Cloud"; description = "Launch, connect, and configure a virtual server in under 10 minutes."; durationMinutes = 25 },
        { title = "S3: Object Storage at Scale"; description = "Store, retrieve, and version files — host a static website on S3."; durationMinutes = 25 },
        { title = "RDS and DynamoDB: Managed Databases"; description = "When to choose relational vs NoSQL in the context of a real app."; durationMinutes = 25 },
        { title = "Lambda and Serverless Architecture"; description = "Run code without managing servers — build an image thumbnail generator."; durationMinutes = 30 },
        { title = "VPC: Building Your Own Cloud Network"; description = "Subnets, route tables, security groups — create a secure 3-tier architecture."; durationMinutes = 25 },
        { title = "IAM: Roles, Policies, and Least Privilege"; description = "Control who can do what in your AWS account — avoid over-permissioned roles."; durationMinutes = 25 },
        { title = "CloudWatch: Monitoring and Alerts"; description = "Set up dashboards and alarms to get notified before things break."; durationMinutes = 20 },
        { title = "AWS Well-Architected Framework"; description = "The five pillars — operational excellence, security, reliability, performance, cost."; durationMinutes = 15 },
      ];
      estimatedHours = 4;
      isComingSoon = false;
    },
    {
      id = 19;
      title = "Cybersecurity Advanced";
      description = "Go beyond basics — learn penetration testing concepts, OWASP Top 10, network security, and how organisations defend against real attacks.";
      category = #cybersecurity;
      difficulty = "Intermediate";
      estimatedMinutes = 180;
      topics = ["OWASP Top 10", "Network attacks", "Pen testing intro", "Incident response", "Zero trust", "SOC overview", "Compliance"];
      lessons = [
        { title = "OWASP Top 10: Web Application Vulnerabilities"; description = "SQL injection, XSS, broken auth — see each attack in a demo scenario."; durationMinutes = 25 },
        { title = "Network Attacks: MITM, DDoS, Port Scanning"; description = "Understand how attackers map and exploit corporate networks."; durationMinutes = 25 },
        { title = "Introduction to Penetration Testing"; description = "Reconnaissance → exploitation → reporting: the ethical hacker's workflow."; durationMinutes = 25 },
        { title = "Incident Response: Detect, Contain, Recover"; description = "Walk through a ransomware incident from initial alert to post-mortem."; durationMinutes = 25 },
        { title = "Zero Trust Security Model"; description = "Never trust, always verify — why perimeter security alone no longer works."; durationMinutes = 20 },
        { title = "Security Operations Centre (SOC) Overview"; description = "What SOC analysts do all day and the tools they use (SIEM, SOAR)."; durationMinutes = 20 },
        { title = "Compliance: GDPR, ISO 27001, PCI-DSS"; description = "The laws and standards that govern how companies handle data."; durationMinutes = 20 },
        { title = "Building a Personal Security Lab"; description = "Set up Kali Linux and practise ethical hacking on legal targets."; durationMinutes = 20 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 20;
      title = "Corporate World & Work Culture";
      description = "Understand how IT companies operate — from Agile sprints to MOM writing. Everything a fresher needs to hit the ground running on Day 1.";
      category = #corporateWorld;
      difficulty = "Beginner";
      estimatedMinutes = 130;
      topics = ["Corporate roles", "Agile & Scrum", "Waterfall vs Agile", "Sprint planning", "Jira & tools", "Collaboration tools", "MOM writing"];
      lessons = [
        { title = "Corporate Roles and Org Structure"; description = "Developer, tester, BA, PM, scrum master, architect — who reports to whom."; durationMinutes = 20 },
        { title = "SDLC Methodologies: Waterfall vs Agile"; description = "When is a waterfall still used, and why Agile dominates modern IT."; durationMinutes = 20 },
        { title = "Sprint Planning: Stories, Epics, and Velocity"; description = "Break a feature into user stories, estimate story points, and fill the sprint."; durationMinutes = 25 },
        { title = "Scrum Ceremonies: Standup, Review, Retro"; description = "What to say in each ceremony and how to add value as a fresher."; durationMinutes = 20 },
        { title = "Collaboration Tools: Teams, Slack, Confluence"; description = "Daily use of communication and documentation tools in corporate teams."; durationMinutes = 15 },
        { title = "Creating Meetings and Writing MOM"; description = "Invite the right people, set an agenda, and document outcomes professionally."; durationMinutes = 15 },
        { title = "Scrum Master Certification and Career Path"; description = "CSM vs PSM — cost, exam format, and why it boosts your salary."; durationMinutes = 15 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 21;
      title = "Corporate Skills for Freshers";
      description = "The soft skills that separate top performers. Email etiquette, time management, stakeholder communication, and professional presence.";
      category = #corporateskills;
      difficulty = "Beginner";
      estimatedMinutes = 120;
      topics = ["Professional email", "Time management", "Stakeholder comms", "Conflict resolution", "Feedback culture", "Personal branding", "Networking"];
      lessons = [
        { title = "Professional Email Etiquette"; description = "Write emails that get replies — subject lines, tone, and clear CTAs."; durationMinutes = 20 },
        { title = "Time Management and Prioritisation"; description = "Eisenhower matrix, time-blocking, and avoiding the urgency trap."; durationMinutes = 20 },
        { title = "Stakeholder Communication and Expectation Setting"; description = "Update your manager, keep clients informed, and avoid surprise escalations."; durationMinutes = 20 },
        { title = "Giving and Receiving Feedback"; description = "Use the SBI model to give feedback that actually changes behaviour."; durationMinutes = 20 },
        { title = "Conflict Resolution in Teams"; description = "De-escalate a disagreement with a colleague using proven techniques."; durationMinutes = 20 },
        { title = "Personal Branding on LinkedIn"; description = "Optimise your profile so recruiters find you even when you're not looking."; durationMinutes = 20 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 22;
      title = "GitHub & Version Control";
      description = "Every developer needs Git. Learn version control from scratch, create repositories, collaborate via pull requests, and maintain a portfolio on GitHub.";
      category = #github;
      difficulty = "Beginner";
      estimatedMinutes = 140;
      topics = ["Git basics", "Branching strategy", "Pull requests", "Merge conflicts", "GitHub Actions intro", "Open source contributions", "GitHub portfolio"];
      lessons = [
        { title = "Git Concepts: Repository, Commit, Branch"; description = "Understand what Git is solving — version history, collaboration, rollback."; durationMinutes = 15 },
        { title = "Installing Git and Your First Repository"; description = "git init, add, commit — create and track your first project."; durationMinutes = 20 },
        { title = "Branching and Merging Strategy"; description = "Feature branches, git flow, and when to use main vs develop."; durationMinutes = 25 },
        { title = "Push, Pull, and Remote Repositories"; description = "Push your local repo to GitHub; pull your colleague's changes."; durationMinutes = 20 },
        { title = "Pull Requests and Code Review"; description = "Open a PR, review changes, approve or request revisions."; durationMinutes = 20 },
        { title = "Resolving Merge Conflicts"; description = "Scenario: two developers edited the same file — resolve it step by step."; durationMinutes = 20 },
        { title = "Building a GitHub Portfolio for Recruiters"; description = "Pin repos, write great READMEs, and make your profile recruiter-ready."; durationMinutes = 20 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 23;
      title = "Shell Scripting & Linux CLI";
      description = "Automate repetitive tasks, manage servers, and impress DevOps teams. Learn Bash scripting from basic commands to writing production scripts.";
      category = #shellscripting;
      difficulty = "Intermediate";
      estimatedMinutes = 160;
      topics = ["Linux commands", "File & permissions", "Variables & loops", "Functions", "Cron jobs", "Log analysis", "Deployment scripts"];
      lessons = [
        { title = "Linux Command Line Survival Guide"; description = "ls, cd, cp, mv, rm, grep, pipe — navigate a Linux server confidently."; durationMinutes = 20 },
        { title = "File Permissions: chmod, chown"; description = "Understand rwx permissions and fix a 'permission denied' error."; durationMinutes = 20 },
        { title = "Writing Your First Bash Script"; description = "Variables, echo, and shebang — automate a daily file backup."; durationMinutes = 25 },
        { title = "Control Flow: if, for, while in Bash"; description = "Loop through log files and flag errors with a shell script."; durationMinutes = 25 },
        { title = "Functions and Script Organisation"; description = "Refactor a long script into reusable functions with parameters."; durationMinutes = 20 },
        { title = "Cron Jobs: Scheduling Automation"; description = "Schedule a database backup every night at 2 AM with crontab."; durationMinutes = 15 },
        { title = "Analysing Logs and Generating Reports"; description = "Use grep, awk, and sed to extract meaningful data from access logs."; durationMinutes = 20 },
        { title = "Deployment Script for a Web Application"; description = "Write a script that pulls code, installs dependencies, and restarts a service."; durationMinutes = 15 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 24;
      title = "Trending Technologies";
      description = "Stay ahead of the curve. Explore blockchain, AR/VR, edge computing, quantum computing, and the tech trends shaping the next decade of IT.";
      category = #trending;
      difficulty = "Beginner";
      estimatedMinutes = 120;
      topics = ["Blockchain & Web3", "AR/VR/Metaverse", "Edge computing", "Quantum computing intro", "IoT", "Low-code/no-code", "Generative AI"];
      lessons = [
        { title = "Blockchain and Web3 for Non-Developers"; description = "Smart contracts, NFTs, and decentralised apps — hype vs reality."; durationMinutes = 20 },
        { title = "AR, VR, and the Metaverse"; description = "From Meta Quest to enterprise training simulations — where it's heading."; durationMinutes = 20 },
        { title = "Edge Computing and IoT"; description = "Why processing data at the source (rather than the cloud) changes everything."; durationMinutes = 20 },
        { title = "Introduction to Quantum Computing"; description = "Qubits, superposition, and entanglement — explained without the physics degree."; durationMinutes = 20 },
        { title = "Low-Code and No-Code Platforms"; description = "Build an app without writing code — when it works and when it doesn't."; durationMinutes = 20 },
        { title = "Generative AI: LLMs, Diffusion Models"; description = "How ChatGPT and Stable Diffusion work at a conceptual level."; durationMinutes = 20 },
      ];
      estimatedHours = 2;
      isComingSoon = false;
    },
    {
      id = 25;
      title = "MNC Platforms & Enterprise Tools";
      description = "The enterprise platforms that MNCs use every day — Salesforce, Snowflake, SAP, ServiceNow, Alteryx and more. Get recruiter-ready knowledge.";
      category = #mncplatforms;
      difficulty = "Intermediate";
      estimatedMinutes = 180;
      topics = ["Salesforce CRM", "Snowflake DWH", "SAP basics", "ServiceNow ITSM", "Alteryx analytics", "Azure basics", "GCP basics", "Magellan/MicroStrategy"];
      lessons = [
        { title = "Salesforce: CRM for Enterprises"; description = "Leads, opportunities, dashboards — how sales teams use Salesforce daily."; durationMinutes = 25 },
        { title = "Snowflake: Cloud Data Warehouse"; description = "Virtual warehouses, time travel, and zero-copy cloning — Snowflake's killer features."; durationMinutes = 25 },
        { title = "SAP: ERP at Scale"; description = "FI, MM, SD modules — how SAP manages finance and supply chains in MNCs."; durationMinutes = 25 },
        { title = "ServiceNow: ITSM Platform"; description = "Incidents, changes, CMDB — what ServiceNow admins and analysts actually do."; durationMinutes = 25 },
        { title = "Alteryx: No-Code Analytics Automation"; description = "Blend, cleanse, and analyse data with drag-and-drop workflows."; durationMinutes = 25 },
        { title = "Azure and GCP: Quick Comparison with AWS"; description = "Choose the right cloud for a given scenario — strengths of each platform."; durationMinutes = 20 },
        { title = "MicroStrategy & Tableau: BI Platforms"; description = "Dashboards, reports, and self-service analytics in the enterprise."; durationMinutes = 15 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 26;
      title = "ETL Tools & Data Pipelines";
      description = "Data doesn't move itself. Learn the ETL tools that power enterprise data pipelines — Informatica, Talend, Apache Spark, and more.";
      category = #etltools;
      difficulty = "Intermediate";
      estimatedMinutes = 180;
      topics = ["ETL concepts", "Informatica PowerCenter", "Talend", "Apache Spark basics", "Apache Kafka intro", "dbt", "Data pipeline best practices"];
      lessons = [
        { title = "ETL vs ELT: What Changed and Why"; description = "How cloud data warehouses shifted extract-transform-load to extract-load-transform."; durationMinutes = 20 },
        { title = "Informatica PowerCenter Basics"; description = "Source, target, mapping, session — design a simple data pipeline."; durationMinutes = 25 },
        { title = "Talend: Open-Source ETL for Beginners"; description = "Build a job that reads a CSV and loads it into a database."; durationMinutes = 25 },
        { title = "Apache Spark for Big Data Processing"; description = "Distributed computing, RDDs, and DataFrames — process a million rows in seconds."; durationMinutes = 30 },
        { title = "Apache Kafka: Real-Time Data Streaming"; description = "Producers, consumers, topics — stream clickstream data in real time."; durationMinutes = 25 },
        { title = "dbt: Data Build Tool for Analysts"; description = "Write SQL models, test, and document your data warehouse transformations."; durationMinutes = 20 },
        { title = "Data Quality, Lineage, and Governance"; description = "Ensure your pipeline produces trustworthy data that stakeholders rely on."; durationMinutes = 15 },
        { title = "Designing a Modern Data Stack"; description = "Combine ingestion, transformation, and serving layers in a reference architecture."; durationMinutes = 20 },
      ];
      estimatedHours = 3;
      isComingSoon = false;
    },
    {
      id = 27;
      title = "Capstone Project: Build & Deploy Your Portfolio";
      description = "Apply everything you have learned. Create a GitHub account, set up a local development environment, build a full-stack mini project, and deploy it — ready to showcase on your resume.";
      category = #capstonePproject;
      difficulty = "Intermediate";
      estimatedMinutes = 240;
      topics = ["Environment setup", "GitHub account", "Database setup", "Python/SQL project", "Version control", "Cloud free tier", "Portfolio README"];
      lessons = [
        { title = "Setting Up Your Development Environment"; description = "Install VS Code, Python, Node.js, Git, and a local database on your machine."; durationMinutes = 30 },
        { title = "Creating Your GitHub Account and First Repo"; description = "Sign up, configure SSH keys, and push your first commit."; durationMinutes = 20 },
        { title = "Building the Backend: Python + SQL Mini App"; description = "Create a simple employee management system with CRUD operations."; durationMinutes = 60 },
        { title = "Version Control: Branching and Pull Requests"; description = "Use feature branches, open PRs, and merge with a clean commit history."; durationMinutes = 20 },
        { title = "Deploying to the Cloud (Free Tier)"; description = "Push your app to AWS, Render, or Railway using a free tier account."; durationMinutes = 30 },
        { title = "Writing a Recruiter-Ready README"; description = "Document your project with screenshots, architecture diagrams, and setup steps."; durationMinutes = 20 },
        { title = "Showcasing Your Project on LinkedIn and Resume"; description = "Add a GitHub link, write a project summary, and create a LinkedIn post."; durationMinutes = 20 },
        { title = "Code Review and Best Practices Checklist"; description = "Review your own code for readability, error handling, and security gaps."; durationMinutes = 20 },
        { title = "What Comes Next: Learning Path for Your Role"; description = "Personalised next steps based on whether you want dev, data, cloud, or security."; durationMinutes = 20 },
      ];
      estimatedHours = 4;
      isComingSoon = false;
    },
  ];

  public func listModules() : [Types.ITModule] {
    allModules;
  };

  public func getModule(moduleId : Nat) : ?Types.ITModule {
    allModules.find(func(m) { m.id == moduleId });
  };
};
