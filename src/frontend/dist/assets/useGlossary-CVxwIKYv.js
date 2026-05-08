import { a as useQuery } from "./index-Cmp-4xpj.js";
const MOCK_GLOSSARY = [
  {
    id: "g1",
    term: "API",
    definition: "Application Programming Interface — a set of rules that allows software applications to communicate with each other through defined endpoints and data formats.",
    category: "fundamentals",
    relatedTerms: ["REST", "GraphQL", "Endpoint", "JSON"],
    example: "When you log in with Google, the app uses Google's API to verify your identity."
  },
  {
    id: "g2",
    term: "Agile",
    definition: "A project management methodology emphasizing iterative development, collaboration, and adaptability over rigid planning. Teams deliver in short sprints.",
    category: "corporate",
    relatedTerms: ["Scrum", "Sprint", "Kanban", "Backlog"],
    example: "Our team runs 2-week sprints to ship features incrementally."
  },
  {
    id: "g3",
    term: "Cloud Computing",
    definition: "Delivery of computing services — servers, storage, databases, networking, software — over the internet (the cloud) on a pay-as-you-go basis.",
    category: "cloud",
    relatedTerms: ["IaaS", "PaaS", "SaaS", "AWS", "Azure"],
    example: "Google Drive stores your files in the cloud instead of on your hard drive."
  },
  {
    id: "g4",
    term: "DNS",
    definition: "Domain Name System — translates human-readable domain names (google.com) into IP addresses (142.250.80.46) that computers use to find each other.",
    category: "networking",
    relatedTerms: ["IP Address", "HTTP", "Domain", "TCP/IP"],
    example: "When you type www.google.com, DNS converts it to the server's numeric IP address."
  },
  {
    id: "g5",
    term: "Machine Learning",
    definition: "A subset of AI where systems learn from data to improve performance on tasks without being explicitly programmed for each scenario.",
    category: "ai_ml",
    relatedTerms: ["Neural Network", "Training Data", "Model", "Algorithm"],
    example: "Netflix uses ML to recommend shows based on your viewing history."
  },
  {
    id: "g6",
    term: "Version Control",
    definition: "A system that records changes to files over time so you can recall specific versions later. Git is the most widely used version control system.",
    category: "devops",
    relatedTerms: ["Git", "GitHub", "Branch", "Merge", "Commit"],
    example: "git commit -m 'fix login bug' saves a snapshot of your code changes."
  },
  {
    id: "g7",
    term: "Encryption",
    definition: "The process of converting data into a coded format that can only be read by someone with the decryption key, protecting sensitive information.",
    category: "security",
    relatedTerms: ["SSL/TLS", "HTTPS", "Cryptography", "Key"],
    example: "HTTPS encrypts your credit card details when shopping online."
  },
  {
    id: "g8",
    term: "DevOps",
    definition: "A culture and set of practices combining software development (Dev) and IT operations (Ops) to shorten development cycles and deliver features faster.",
    category: "devops",
    relatedTerms: ["CI/CD", "Docker", "Kubernetes", "Automation"],
    example: "With DevOps, code changes can go from developer to production in hours, not months."
  },
  {
    id: "g9",
    term: "Firewall",
    definition: "A network security device or software that monitors and filters incoming and outgoing network traffic based on predefined security rules.",
    category: "security",
    relatedTerms: ["Network Security", "IP Address", "Port", "Packet"],
    example: "A firewall blocks unauthorized access while allowing legitimate traffic through."
  },
  {
    id: "g10",
    term: "Containerization",
    definition: "Packaging an application and its dependencies together in a lightweight, portable container that runs consistently across any computing environment.",
    category: "devops",
    relatedTerms: ["Docker", "Kubernetes", "Virtual Machine", "Image"],
    example: "Docker containers let developers run the same app identically on any machine."
  },
  {
    id: "g11",
    term: "Sprint",
    definition: "A fixed time period (usually 1-4 weeks) in Agile/Scrum during which a team completes a set of planned tasks and delivers working software.",
    category: "corporate",
    relatedTerms: ["Agile", "Scrum", "Backlog", "Velocity"],
    example: "In our 2-week sprint, the team built the user authentication feature."
  },
  {
    id: "g12",
    term: "Neural Network",
    definition: "A computational model inspired by the human brain, consisting of interconnected layers of nodes (neurons) that learn patterns from training data.",
    category: "ai_ml",
    relatedTerms: [
      "Deep Learning",
      "Machine Learning",
      "Backpropagation",
      "Weights"
    ],
    example: "Image recognition apps use neural networks to identify faces or objects in photos."
  },
  {
    id: "g13",
    term: "REST API",
    definition: "Representational State Transfer — an architectural style for building web services that use HTTP methods (GET, POST, PUT, DELETE) to perform operations.",
    category: "fundamentals",
    relatedTerms: ["API", "HTTP", "JSON", "Endpoint", "Status Code"],
    example: "A weather app fetches current temperature using a GET request to a REST API."
  },
  {
    id: "g14",
    term: "CI/CD",
    definition: "Continuous Integration / Continuous Deployment — automated pipelines that test code changes and deploy them to production quickly and reliably.",
    category: "devops",
    relatedTerms: ["DevOps", "Automation", "Testing", "Pipeline", "Git"],
    example: "Every time code is pushed to GitHub, CI/CD automatically runs tests and deploys."
  },
  {
    id: "g15",
    term: "TCP/IP",
    definition: "Transmission Control Protocol/Internet Protocol — the foundational suite of communication protocols that governs how data is sent across the internet.",
    category: "networking",
    relatedTerms: ["DNS", "HTTP", "IP Address", "Port", "Packet"],
    example: "When you send an email, TCP/IP breaks it into packets and reassembles them at the destination."
  },
  // ─── Corporate / MNC Workplace Terms ───────────────────────────────────────
  {
    id: "g16",
    term: "SLA",
    definition: "Service Level Agreement — a formal contract between a service provider and customer defining the expected service standards, response times, and penalties for non-compliance.",
    category: "corporate",
    relatedTerms: ["KPI", "Escalation", "Incident", "MTTR"],
    example: "Our SLA with the client says we must resolve P1 tickets within 4 hours, so when the payment gateway went down at 2 AM, the on-call team was paged immediately."
  },
  {
    id: "g17",
    term: "KPI",
    definition: "Key Performance Indicator — a measurable value that shows how effectively a person, team, or organization is achieving its business objectives.",
    category: "corporate",
    relatedTerms: ["OKR", "SLA", "Dashboard", "Velocity"],
    example: "The support team's KPI was to keep customer satisfaction above 90%. When it dropped to 85%, management reviewed the root cause."
  },
  {
    id: "g18",
    term: "POC",
    definition: "Proof of Concept — a small-scale experiment or prototype built to validate that a technical idea is feasible before investing in full development.",
    category: "corporate",
    relatedTerms: ["Prototype", "MVP", "BRD", "Stakeholder"],
    example: "Before building the AI chatbot for 10,000 users, the team built a 2-day POC to verify the LLM API could handle the response time requirements."
  },
  {
    id: "g19",
    term: "EOD",
    definition: "End of Day — a deadline term used in corporate emails and tasks, meaning something should be completed by the close of business that day (typically 6 PM local time).",
    category: "corporate",
    relatedTerms: ["Action Item", "Escalation", "WFH", "Sprint"],
    example: "Your manager sends an email: 'Please share the test report EOD.' That means have it ready before the work day ends."
  },
  {
    id: "g20",
    term: "WFH",
    definition: "Work From Home — a remote work arrangement where an employee completes their job duties from their home instead of coming into the office.",
    category: "corporate",
    relatedTerms: ["Bandwidth", "Collaboration Tools", "Stand-up", "Offshore"],
    example: "On WFH days, the team joins the daily stand-up via Teams instead of gathering at the office desk."
  },
  {
    id: "g21",
    term: "Tech Lead",
    definition: "A senior developer who guides the team on technical decisions, reviews code, sets coding standards, and bridges communication between developers and management.",
    category: "corporate",
    relatedTerms: ["Scrum Master", "SME", "Stakeholder", "Sprint"],
    example: "When a fresher got stuck on a complex database query, the Tech Lead pair-programmed with them to unblock the story."
  },
  {
    id: "g22",
    term: "Stakeholder",
    definition: "Any person or group who has a vested interest in the outcome of a project — including clients, end users, managers, investors, or business partners.",
    category: "corporate",
    relatedTerms: ["BRD", "UAT", "POC", "Sprint Review"],
    example: "Before the sprint demo, the team rehearsed their presentation because three stakeholders from the client's C-suite would be watching."
  },
  {
    id: "g23",
    term: "Escalation",
    definition: "The act of raising an unresolved issue, risk, or blocker to a higher level of authority (manager, director, or client) when it cannot be handled at the current level.",
    category: "corporate",
    relatedTerms: ["SLA", "Blocker", "Incident", "SME"],
    example: "The bug was critical but the developer couldn't get approval to deploy a hotfix; they escalated to the project manager who got sign-off in 15 minutes."
  },
  {
    id: "g24",
    term: "Bandwidth",
    definition: "In corporate context, bandwidth refers to the available time, energy, or capacity of a person or team to take on additional work — not internet speed.",
    category: "corporate",
    relatedTerms: ["Blocker", "WBS", "Sprint", "Velocity"],
    example: "'Do you have bandwidth to review my PR today?' means 'Do you have free time to look at my code?'"
  },
  {
    id: "g25",
    term: "Action Item",
    definition: "A specific, assignable task that arises from a meeting, assigned to a named person with a due date. Action items are tracked in meeting minutes and follow-up emails.",
    category: "corporate",
    relatedTerms: ["EOD", "WBS", "Sprint", "MOM"],
    example: "After the retrospective, the action item 'Set up automated test reporting dashboard — Owner: Priya, Due: Friday' was added to the team tracker."
  },
  {
    id: "g26",
    term: "Dependency",
    definition: "A task, resource, or output that must exist before another task can begin. Managing dependencies is critical to prevent project delays.",
    category: "corporate",
    relatedTerms: ["Blocker", "WBS", "Sprint Planning", "Critical Path"],
    example: "The front-end team couldn't start building the checkout page because it had a dependency on the payments API being ready from the backend team."
  },
  {
    id: "g27",
    term: "Scrum Master",
    definition: "A facilitator for the Scrum team who removes blockers, organizes ceremonies (stand-ups, retrospectives, sprint planning), and protects the team from external interruptions.",
    category: "corporate",
    relatedTerms: ["Sprint", "Retrospective", "Agile", "Velocity"],
    example: "When the infrastructure team kept interrupting developers with ad-hoc requests, the Scrum Master escalated to management to protect the sprint commitment."
  },
  {
    id: "g28",
    term: "Velocity",
    definition: "A measure of how much work (in story points) a Scrum team completes per sprint. It helps predict how many features can be delivered in future sprints.",
    category: "corporate",
    relatedTerms: ["Sprint", "Story Points", "Scrum Master", "Backlog"],
    example: "The team's average velocity was 40 story points per sprint, so the product manager could estimate that the 200-point backlog would take 5 sprints to complete."
  },
  {
    id: "g29",
    term: "Blocker",
    definition: "An obstacle or issue that prevents a team member from making progress on a task. Blockers are surfaced in daily stand-ups and must be resolved quickly.",
    category: "corporate",
    relatedTerms: ["Escalation", "Dependency", "Scrum Master", "Stand-up"],
    example: "During stand-up: 'I'm blocked — I need database access credentials from the DBA team before I can continue.' The Scrum Master noted it and resolved it within the hour."
  },
  {
    id: "g30",
    term: "Retrospective",
    definition: "A Scrum ceremony held at the end of each sprint where the team reflects on what went well, what didn't, and what improvements to make next sprint.",
    category: "corporate",
    relatedTerms: ["Sprint", "Scrum Master", "Agile", "Action Item"],
    example: "In the retrospective, the team identified that unclear requirements were causing rework. The action item was to involve QA during story creation next sprint."
  },
  {
    id: "g31",
    term: "WBS",
    definition: "Work Breakdown Structure — a hierarchical decomposition of a project into smaller, manageable tasks and deliverables. It helps estimate effort and assign ownership.",
    category: "corporate",
    relatedTerms: ["Dependency", "Bandwidth", "Milestone", "BRD"],
    example: "The project manager created a WBS breaking 'Build Login Module' into sub-tasks: UI design, API development, unit tests, integration testing, and deployment."
  },
  {
    id: "g32",
    term: "SME",
    definition: "Subject Matter Expert — a person who has deep expertise in a specific domain, technology, or process, and is consulted to guide decisions or review work.",
    category: "corporate",
    relatedTerms: ["Tech Lead", "Stakeholder", "Escalation", "UAT"],
    example: "Before the data migration, the team consulted the database SME who identified three edge cases that would have caused data loss."
  },
  {
    id: "g33",
    term: "OKR",
    definition: "Objectives and Key Results — a goal-setting framework where teams define ambitious objectives and track measurable key results. Used by Google, Netflix, and many MNCs.",
    category: "corporate",
    relatedTerms: ["KPI", "Velocity", "Stakeholder", "Sprint"],
    example: "OKR: Objective — Improve app performance. Key Result — Reduce page load time from 4s to 1.5s by Q2."
  },
  {
    id: "g34",
    term: "CTC",
    definition: "Cost to Company — the total annual salary package that a company spends on an employee, including base salary, allowances, insurance, PF, and other benefits.",
    category: "corporate",
    relatedTerms: ["Offshore", "Stakeholder", "KPI", "OKR"],
    example: "The offer letter stated CTC of ₹6 LPA, but in-hand salary was ₹42,000/month after deducting PF, tax, and insurance."
  },
  {
    id: "g35",
    term: "Offshore/Onshore",
    definition: "Offshore means the development or support team is located in a different country from the client. Onshore means in the same country. Most MNCs use an offshore-onshore delivery model.",
    category: "corporate",
    relatedTerms: ["WFH", "SLA", "Scrum Master", "Stand-up"],
    example: "The client is in the US (onshore) and the development team is in India (offshore). The stand-up happens at 7 PM IST to overlap with US morning hours."
  },
  {
    id: "g36",
    term: "BRD",
    definition: "Business Requirements Document — a formal document written by business analysts that describes what a business wants built, including functional requirements, constraints, and acceptance criteria.",
    category: "corporate",
    relatedTerms: ["UAT", "WBS", "Stakeholder", "POC"],
    example: "The BRD for the new invoicing module specified that users must be able to generate PDF invoices in under 3 seconds."
  },
  {
    id: "g37",
    term: "UAT",
    definition: "User Acceptance Testing — the final phase of testing where actual end users validate that the system meets business requirements before it goes live.",
    category: "corporate",
    relatedTerms: ["Go-Live", "BRD", "Stakeholder", "Rollback"],
    example: "The client's finance team ran UAT for two weeks, testing real invoices in a staging environment, before approving the system for go-live."
  },
  {
    id: "g38",
    term: "Go-Live",
    definition: "The moment when a new system, application, or feature is officially made available to end users in the production environment for real use.",
    category: "corporate",
    relatedTerms: ["UAT", "Rollback", "Deployment", "SLA"],
    example: "After months of development and UAT, the e-commerce platform went live on a Saturday at 2 AM to minimize impact if anything went wrong."
  },
  {
    id: "g39",
    term: "Rollback",
    definition: "The process of reverting a system, database, or code to a previous stable version after a failed deployment or critical bug is detected in production.",
    category: "corporate",
    relatedTerms: ["Go-Live", "Deployment", "CI/CD", "Incident"],
    example: "The new payment feature caused checkout failures after go-live. Within 20 minutes, the team executed a rollback, restoring the previous stable version."
  },
  // ─── Core IT Fundamentals ──────────────────────────────────────────────────
  {
    id: "g40",
    term: "IDE",
    definition: "Integrated Development Environment — a software application that provides a complete workspace for developers, including code editor, debugger, and build tools in one interface.",
    category: "fundamentals",
    relatedTerms: ["Tech Stack", "Version Control", "Debugging", "Git"],
    example: "VS Code is the most popular IDE; it lets you write Python, run it, and debug errors all in one window without switching tools."
  },
  {
    id: "g41",
    term: "SDK",
    definition: "Software Development Kit — a collection of tools, libraries, documentation, and code samples that developers use to build applications for a specific platform or service.",
    category: "fundamentals",
    relatedTerms: ["API", "REST API", "IDE", "Tech Stack"],
    example: "The AWS SDK for Python (Boto3) lets you write code to create S3 buckets or spin up EC2 instances without manually calling AWS APIs."
  },
  {
    id: "g42",
    term: "JSON",
    definition: "JavaScript Object Notation — a lightweight, human-readable data format using key-value pairs, used extensively for data exchange between web services and APIs.",
    category: "fundamentals",
    relatedTerms: ["REST API", "API", "Webhook", "Payload"],
    example: `When a weather API returns data, it looks like: {"city": "Mumbai", "temp": 34, "unit": "C"}. That's JSON.`
  },
  {
    id: "g43",
    term: "Webhook",
    definition: "An automatic HTTP notification sent from one system to another when a specific event occurs. The receiving system acts on the data immediately without polling.",
    category: "fundamentals",
    relatedTerms: ["REST API", "API", "JSON", "CI/CD"],
    example: "When a payment succeeds on Stripe, Stripe sends a webhook to your server with the transaction details so you can immediately update the order status."
  },
  {
    id: "g44",
    term: "Cache",
    definition: "A temporary storage layer that holds frequently accessed data in fast memory (RAM) so future requests are served quickly without hitting the slower database.",
    category: "fundamentals",
    relatedTerms: ["Database", "Load Balancer", "Performance", "Redis"],
    example: "Amazon caches product listing pages in Redis. On sale day, millions of users see the same page without every request hitting the database."
  },
  {
    id: "g45",
    term: "Load Balancer",
    definition: "A server or service that distributes incoming network traffic across multiple backend servers to prevent any single server from being overwhelmed.",
    category: "fundamentals",
    relatedTerms: [
      "Microservices",
      "Cloud Computing",
      "Containerization",
      "SRE"
    ],
    example: "During IPL ticket booking rush, a load balancer spread 2 million requests across 50 servers, keeping the site responsive for everyone."
  },
  {
    id: "g46",
    term: "Microservices",
    definition: "An architecture where an application is broken into small, independent services that each handle one specific business function and communicate via APIs.",
    category: "fundamentals",
    relatedTerms: ["Monolith", "Containerization", "API", "Load Balancer"],
    example: "Swiggy has separate microservices for user profiles, restaurant listings, orders, and payments — each team deploys their service independently."
  },
  {
    id: "g47",
    term: "Monolith",
    definition: "A traditional application architecture where all components — UI, business logic, and database access — are tightly coupled into a single deployable unit.",
    category: "fundamentals",
    relatedTerms: ["Microservices", "Tech Stack", "Deployment", "Refactoring"],
    example: "The legacy banking app was a monolith — changing the interest calculation logic required redeploying the entire 2 GB application."
  },
  {
    id: "g48",
    term: "Tech Stack",
    definition: "The combination of programming languages, frameworks, databases, tools, and infrastructure used to build and run an application.",
    category: "fundamentals",
    relatedTerms: ["IDE", "Microservices", "Cloud Computing", "DevOps"],
    example: "Zomato's tech stack includes React (frontend), Node.js (API), PostgreSQL (database), and AWS (hosting)."
  },
  {
    id: "g49",
    term: "Open Source",
    definition: "Software whose source code is publicly available for anyone to view, use, modify, and distribute, usually under a license like MIT or Apache 2.0.",
    category: "fundamentals",
    relatedTerms: ["GitHub", "Version Control", "SDK", "Contribution"],
    example: "Linux, Python, and VS Code are all open source. Companies like Google contribute to open-source projects because they benefit from the community's improvements."
  },
  // ─── AI / ML Terms ─────────────────────────────────────────────────────────
  {
    id: "g50",
    term: "LLM",
    definition: "Large Language Model — an AI model trained on enormous amounts of text data that can understand and generate human-like language. Examples: GPT-4, Gemini, Claude.",
    category: "ai_ml",
    relatedTerms: ["Prompt Engineering", "RAG", "Hallucination", "Fine-tuning"],
    example: "When you ask ChatGPT to write a Python function, it's an LLM predicting the most statistically likely helpful code based on its training data."
  },
  {
    id: "g51",
    term: "Prompt Engineering",
    definition: "The practice of carefully designing the input text (prompt) given to an AI model to get more accurate, relevant, and useful outputs.",
    category: "ai_ml",
    relatedTerms: ["LLM", "RAG", "Hallucination", "Inference"],
    example: "Instead of asking 'Write code', a better prompt is 'Write a Python function that reads a CSV file and returns rows where sales > 10000, with error handling'. Better prompt = better output."
  },
  {
    id: "g52",
    term: "RAG",
    definition: "Retrieval Augmented Generation — an AI technique that enhances LLM responses by first searching a knowledge base for relevant documents, then using the LLM to generate answers grounded in that real data.",
    category: "ai_ml",
    relatedTerms: ["LLM", "Vector Database", "Embeddings", "Hallucination"],
    example: "A company's internal HR chatbot uses RAG — it searches the HR policy documents first, then uses an LLM to answer 'How many sick leaves do I have?' accurately."
  },
  {
    id: "g53",
    term: "Hallucination",
    definition: "A phenomenon where an AI model generates factually incorrect or fabricated information but presents it with high confidence, as if it were true.",
    category: "ai_ml",
    relatedTerms: ["LLM", "RAG", "Prompt Engineering", "Fine-tuning"],
    example: "When asked about a niche legal case, ChatGPT confidently cited three court cases — all of which were completely fabricated. This is AI hallucination."
  },
  {
    id: "g54",
    term: "Fine-tuning",
    definition: "The process of taking a pre-trained AI model and continuing to train it on a smaller, domain-specific dataset to make it better at specialized tasks.",
    category: "ai_ml",
    relatedTerms: ["LLM", "Machine Learning", "Embeddings", "MLOps"],
    example: "A hospital fine-tuned a general LLM on 50,000 medical records to make it better at understanding clinical notes — the fine-tuned model outperformed the general one significantly."
  },
  {
    id: "g55",
    term: "Embeddings",
    definition: "A numerical vector representation of text (or images/audio) that captures semantic meaning. Similar concepts have embeddings that are mathematically close to each other.",
    category: "ai_ml",
    relatedTerms: ["Vector Database", "RAG", "LLM", "Semantic Search"],
    example: "'Dog' and 'Puppy' have similar embeddings (close numbers), while 'Dog' and 'Invoice' have distant embeddings. This lets search engines find relevant documents even without exact keyword matches."
  },
  {
    id: "g56",
    term: "Vector Database",
    definition: "A specialized database designed to store, index, and search high-dimensional embedding vectors efficiently — critical for AI-powered search and RAG systems.",
    category: "ai_ml",
    relatedTerms: ["Embeddings", "RAG", "LLM", "Semantic Search"],
    example: "Pinecone and ChromaDB are vector databases. A product recommendation engine stores product embeddings in a vector DB and finds similar products in milliseconds."
  },
  {
    id: "g57",
    term: "MLOps",
    definition: "Machine Learning Operations — the practice of applying DevOps principles to ML workflows: automating model training, testing, deployment, monitoring, and retraining pipelines.",
    category: "ai_ml",
    relatedTerms: ["DevOps", "Model Drift", "Pipeline", "Inference"],
    example: "An e-commerce company's MLOps pipeline automatically retrains the recommendation model every Sunday night with the week's new purchase data and deploys it by Monday."
  },
  {
    id: "g58",
    term: "Model Drift",
    definition: "The gradual degradation in a machine learning model's accuracy over time because the real-world data patterns change after the model was trained.",
    category: "ai_ml",
    relatedTerms: ["MLOps", "Fine-tuning", "Inference", "Machine Learning"],
    example: "A fraud detection model trained before COVID flagged legitimate work-from-home IT purchases as suspicious — its training data didn't include that spending pattern. Classic model drift."
  },
  {
    id: "g59",
    term: "Inference",
    definition: "The process of using a trained machine learning model to make predictions or generate outputs on new, unseen data. Inference happens in production; training happens beforehand.",
    category: "ai_ml",
    relatedTerms: ["Machine Learning", "LLM", "MLOps", "Model Drift"],
    example: "Every time you take a photo and Google Photos labels it 'Beach' or 'Birthday Party', it's running inference on the trained image classification model."
  },
  // ─── DevOps / Cloud-Ops Terms ──────────────────────────────────────────────
  {
    id: "g60",
    term: "Pipeline",
    definition: "An automated sequence of steps that takes code from a developer's commit through building, testing, scanning, and deploying to an environment — reducing manual effort and human error.",
    category: "devops",
    relatedTerms: ["CI/CD", "Artifact", "Environment", "Canary Release"],
    example: "When a developer pushes code to GitHub, the pipeline automatically runs unit tests, builds a Docker image, and deploys to the staging environment — all in 8 minutes."
  },
  {
    id: "g61",
    term: "Artifact",
    definition: "A file or package generated as output from a build process — such as a compiled JAR file, Docker image, or ZIP archive — stored for deployment or archiving.",
    category: "devops",
    relatedTerms: ["Pipeline", "CI/CD", "Containerization", "Environment"],
    example: "After the build pipeline ran, the artifact (a Docker image tagged v2.4.1) was pushed to the company's container registry for deployment to production."
  },
  {
    id: "g62",
    term: "Environment",
    definition: "A separate, isolated setup of infrastructure and configuration for a specific stage of development. Typically: Dev (development) → Staging (testing) → Production (live users).",
    category: "devops",
    relatedTerms: ["Pipeline", "Rollback", "Go-Live", "Blue-Green Deployment"],
    example: "The bug only appeared in production because the staging environment had a different database version. Keeping environments identical prevents 'works on my machine' problems."
  },
  {
    id: "g63",
    term: "Blue-Green Deployment",
    definition: "A deployment strategy that maintains two identical production environments (Blue = current live, Green = new version). Traffic is switched to Green instantly after testing, enabling zero-downtime releases.",
    category: "devops",
    relatedTerms: ["Canary Release", "Rollback", "Environment", "Go-Live"],
    example: "During a major bank's mobile app release, they deployed v2.0 to the Green environment, ran smoke tests, then switched 100% of traffic from Blue to Green in 30 seconds with zero downtime."
  },
  {
    id: "g64",
    term: "Canary Release",
    definition: "A deployment technique where a new version is gradually rolled out to a small percentage of users first (e.g. 5%), monitored for errors, then progressively expanded to 100%.",
    category: "devops",
    relatedTerms: ["Blue-Green Deployment", "Rollback", "Pipeline", "SRE"],
    example: "Netflix rolled out a new recommendation algorithm to 5% of users in India first. After confirming watch time improved and no errors spiked, they expanded it to all regions over two weeks."
  },
  {
    id: "g65",
    term: "SRE",
    definition: "Site Reliability Engineer — an engineering role (pioneered by Google) focused on building and maintaining reliable, scalable systems by applying software engineering to operations problems.",
    category: "devops",
    relatedTerms: ["MTTR", "Incident", "Runbook", "SLA"],
    example: "When the payment service's error rate crossed 1%, the SRE's automated alert fired. They used the runbook to roll back the release and restore service in 12 minutes."
  },
  {
    id: "g66",
    term: "MTTR",
    definition: "Mean Time to Recovery — the average time it takes to restore a service or system to full operation after an incident. A key reliability metric tracked by SRE and ops teams.",
    category: "devops",
    relatedTerms: ["SRE", "Incident", "SLA", "Runbook"],
    example: "Last quarter the team's MTTR was 45 minutes. After they automated the rollback process, MTTR dropped to 8 minutes — a major improvement in reliability."
  },
  {
    id: "g67",
    term: "Incident",
    definition: "An unplanned event that disrupts or degrades the normal operation of a service — ranging from minor slowdowns to complete outages. Incidents trigger a structured response process.",
    category: "devops",
    relatedTerms: ["MTTR", "SRE", "Runbook", "Escalation"],
    example: "At 3 PM on a Monday, the company's login service started returning 500 errors for 30% of users. This triggered a SEV-1 incident — all hands on deck until resolved."
  },
  {
    id: "g68",
    term: "Runbook",
    definition: "A documented, step-by-step guide that outlines how to handle common operational tasks or respond to known incidents — reducing response time and preventing mistakes under pressure.",
    category: "devops",
    relatedTerms: ["SRE", "Incident", "MTTR", "Pipeline"],
    example: "The runbook for 'Database Connection Pool Exhausted' said: 1) Check connection count, 2) Restart connection pooler, 3) Scale read replicas if needed. The on-call engineer resolved it in 5 minutes using it."
  },
  {
    id: "g69",
    term: "Chaos Engineering",
    definition: "The practice of intentionally introducing failures (killing servers, injecting latency, cutting network links) into a system in a controlled way to discover weaknesses before they cause real outages.",
    category: "devops",
    relatedTerms: ["SRE", "Incident", "Runbook", "Microservices"],
    example: "Netflix's Chaos Monkey tool randomly terminates EC2 instances in production. This forced engineers to build resilient, self-healing services — any instance that dies should be replaced automatically."
  },
  // ─── MNC Platform-Specific Terms ──────────────────────────────────────────
  {
    id: "g70",
    term: "ETL",
    definition: "Extract, Transform, Load — a data pipeline process where data is extracted from source systems, transformed into the correct format, and loaded into a target data warehouse or database.",
    category: "fundamentals",
    relatedTerms: ["Data Warehouse", "Pipeline", "JSON", "Snowflake"],
    example: "Every night, the ETL job extracts sales records from 50 regional databases, transforms currency values to USD, and loads the clean data into the central Snowflake warehouse for reporting."
  },
  {
    id: "g71",
    term: "Data Warehouse",
    definition: "A centralized repository designed for storing large volumes of structured historical data from multiple sources, optimized for analytical queries and business intelligence reporting.",
    category: "fundamentals",
    relatedTerms: ["ETL", "Snowflake", "Pipeline", "Cache"],
    example: "The company's data warehouse stores 5 years of transaction data from 20 countries. The finance team runs monthly revenue reports against it in seconds using SQL."
  },
  {
    id: "g72",
    term: "Agile Ceremony",
    definition: "A set of structured meetings in the Scrum framework that keep teams aligned: Sprint Planning, Daily Stand-up, Sprint Review, and Sprint Retrospective.",
    category: "corporate",
    relatedTerms: ["Sprint", "Scrum Master", "Retrospective", "Backlog"],
    example: "On Monday morning, the team holds sprint planning (2 hours) to select and estimate stories. Every day at 10 AM is the 15-minute stand-up. These are Agile ceremonies."
  },
  {
    id: "g73",
    term: "Technical Debt",
    definition: "The implied cost of future rework caused by choosing a quick, easy solution now instead of the better, more time-consuming approach. Like financial debt — it compounds over time.",
    category: "fundamentals",
    relatedTerms: ["Refactoring", "Code Review", "Sprint", "Monolith"],
    example: "The team hardcoded database credentials directly in the source code to meet the deadline. This technical debt took 3 sprints to properly fix later with a secrets manager."
  },
  {
    id: "g74",
    term: "Observability",
    definition: "The ability to understand a system's internal state from its external outputs — achieved through three pillars: Logs (what happened), Metrics (how much/fast), and Traces (where in the flow).",
    category: "devops",
    relatedTerms: ["SRE", "Incident", "Pipeline", "MTTR"],
    example: "When the app slowed down, the SRE used the observability dashboard to see CPU spike in the metrics, find the slow DB query in the traces, and read the exact error in the logs — all in under 3 minutes."
  },
  // ─── Data Engineering Terms (g75–g104) ────────────────────────────────────
  {
    id: "g75",
    term: "ELT",
    definition: "Extract, Load, Transform — load raw data into a cloud warehouse first, then transform it using the warehouse's own compute power. The opposite of ETL and the preferred pattern for modern cloud warehouses like Snowflake, BigQuery, and Redshift.",
    category: "fundamentals",
    relatedTerms: ["ETL", "Data Warehouse", "Data Lake", "dbt", "Snowflake"],
    example: "Swiggy's data team loads raw order events directly into Snowflake, then uses dbt SQL models to transform them into daily revenue summaries — that's ELT."
  },
  {
    id: "g76",
    term: "Data Lake",
    definition: "A centralized storage repository that holds raw, unprocessed data in any format — structured, semi-structured, and unstructured. Data lakes store everything first and structure it later. Examples: AWS S3, Azure Data Lake Storage, Google Cloud Storage.",
    category: "fundamentals",
    relatedTerms: ["Data Warehouse", "Data Lakehouse", "ETL", "ELT", "Spark"],
    example: "Flipkart stores raw clickstream logs, app crash reports, and transaction CSVs all in S3 (their data lake) — unprocessed, cheap storage. Analysts later pick what they need."
  },
  {
    id: "g77",
    term: "Data Lakehouse",
    definition: "An architecture that combines the best of data lakes (cheap raw storage) and data warehouses (fast structured queries). Examples: Databricks Delta Lake, Apache Iceberg, Snowflake. You get raw storage AND SQL performance in one system.",
    category: "fundamentals",
    relatedTerms: ["Data Lake", "Data Warehouse", "Databricks", "ELT", "Spark"],
    example: "A startup uses Databricks Delta Lake as a lakehouse — they store raw JSON events cheaply AND run fast SQL queries on structured tables, without needing two separate systems."
  },
  {
    id: "g78",
    term: "Stream Processing",
    definition: "Processing data in real-time as it arrives, event by event, instead of waiting to accumulate a batch. Enables instant decisions like fraud detection or live dashboards. Examples: Apache Kafka, Apache Flink, Spark Structured Streaming.",
    category: "fundamentals",
    relatedTerms: [
      "Batch Processing",
      "Apache Kafka",
      "Real-Time Processing",
      "Data Pipeline"
    ],
    example: "Paytm uses stream processing to analyze each payment transaction as it happens — within milliseconds — to block fraud before the bank approves the transaction."
  },
  {
    id: "g79",
    term: "Batch Processing",
    definition: "Processing large volumes of accumulated data at scheduled intervals (hourly, nightly) rather than in real time. Efficient for large datasets where slight delay is acceptable. Examples: Spark batch jobs, Hadoop MapReduce, SSIS nightly ETL.",
    category: "fundamentals",
    relatedTerms: ["Stream Processing", "ETL", "Apache Spark", "Data Pipeline"],
    example: "Amazon runs nightly batch jobs to calculate seller commissions across 10 million orders from the day — too large to process in real-time, but results are ready by morning."
  },
  {
    id: "g80",
    term: "Data Pipeline",
    definition: "A series of automated steps that move and transform data from one or more sources to a destination. It includes extraction, validation, transformation, and loading. Data pipelines are the plumbing of every data-driven product.",
    category: "fundamentals",
    relatedTerms: ["ETL", "ELT", "Orchestration", "Workflow Scheduler"],
    example: "HDFC Bank's data pipeline runs every night: extract transactions from core banking, validate amounts, transform currencies, load into data warehouse, trigger Power BI refresh."
  },
  {
    id: "g81",
    term: "Star Schema",
    definition: "A data warehouse design pattern with a central fact table (measurable events like sales) surrounded by dimension tables (context like customers, products, dates). Optimized for fast analytical queries — less joins needed.",
    category: "fundamentals",
    relatedTerms: [
      "Snowflake Schema",
      "Data Warehouse",
      "Data Modeling",
      "OLAP"
    ],
    example: "A retail company's data warehouse uses a star schema: FACT_SALES at the center, with DIM_CUSTOMER, DIM_PRODUCT, DIM_DATE, and DIM_STORE around it — enabling fast sales analysis by any dimension."
  },
  {
    id: "g82",
    term: "Snowflake Schema",
    definition: "A normalized version of the star schema where dimension tables are further split into sub-dimensions. Reduces data redundancy but requires more joins. Named for its snowflake-like diagram shape.",
    category: "fundamentals",
    relatedTerms: ["Star Schema", "Data Warehouse", "Data Modeling", "OLAP"],
    example: "In a snowflake schema, the DIM_PRODUCT table splits into DIM_CATEGORY and DIM_BRAND sub-tables — less storage but slower queries compared to a star schema."
  },
  {
    id: "g83",
    term: "Schema",
    definition: "The structure or blueprint of a database — defining tables, columns, data types, constraints, and relationships. Think of it as the architect's plan for your data. Schema changes (like adding columns) require careful migration planning.",
    category: "fundamentals",
    relatedTerms: ["Data Modeling", "Star Schema", "Data Warehouse", "SQL"],
    example: "Before building the user table, the DBA defines the schema: id (INT, PRIMARY KEY), email (VARCHAR 255, UNIQUE, NOT NULL), created_at (TIMESTAMP DEFAULT NOW())."
  },
  {
    id: "g84",
    term: "Message Queue",
    definition: "A temporary storage buffer that holds messages between systems, enabling asynchronous communication. Producer systems add messages; consumer systems process them independently. Prevents data loss if a consumer is temporarily down. Examples: RabbitMQ, Apache Kafka, AWS SQS.",
    category: "fundamentals",
    relatedTerms: [
      "Stream Processing",
      "Apache Kafka",
      "Distributed Systems",
      "Data Pipeline"
    ],
    example: "When a user places an order on Meesho, a message is added to a queue. The inventory service, notification service, and billing service each consume the message independently — none blocking the other."
  },
  {
    id: "g85",
    term: "Distributed Systems",
    definition: "Multiple computers working together to appear as one unified system. Enables horizontal scaling by adding more machines instead of upgrading one. Every major tech platform — Uber, Netflix, Google — runs on distributed systems.",
    category: "fundamentals",
    relatedTerms: [
      "Microservices",
      "Fault Tolerance",
      "Scalability",
      "Message Queue"
    ],
    example: "Google's search engine is a distributed system — a single query triggers thousands of servers across multiple data centers working in parallel, completing in under 200 milliseconds."
  },
  {
    id: "g86",
    term: "Data Governance",
    definition: "A framework of policies, processes, and standards ensuring data quality, security, privacy, and regulatory compliance across an organization. Answers: Who owns this data? Who can access it? How long do we keep it? Is it accurate?",
    category: "fundamentals",
    relatedTerms: ["Data Catalog", "Data Lineage", "Data Quality", "GDPR"],
    example: "After RBI guidelines, ICICI Bank's data governance policy mandates that customer PAN numbers are masked in all non-production databases and only the data owner team can access raw PAN data."
  },
  {
    id: "g87",
    term: "Caching",
    definition: "Storing frequently accessed data in fast temporary memory (like RAM) to speed up retrieval and reduce load on the primary database. Cache hits return data in microseconds; database queries take milliseconds. Examples: Redis, Memcached, CDN caching.",
    category: "fundamentals",
    relatedTerms: ["Cache", "Database", "Elasticity", "Load Balancer"],
    example: "During IPL live scores, Cricbuzz caches the latest match data in Redis every second — millions of users read from cache instantly instead of hammering the database 10 million times per minute."
  },
  {
    id: "g88",
    term: "Orchestration",
    definition: "Coordinating and managing multiple data pipeline tasks — ensuring they run in the correct order, handling failures, retrying failed steps, and scheduling execution. Think of it as the conductor of a data orchestra. Examples: Apache Airflow, Prefect, Dagster.",
    category: "fundamentals",
    relatedTerms: [
      "Workflow Scheduler",
      "Data Pipeline",
      "Apache Airflow",
      "CI/CD"
    ],
    example: "Airflow orchestrates Zomato's nightly pipeline: Step 1 extract orders → Step 2 transform (only runs if Step 1 succeeds) → Step 3 load to warehouse → Step 4 trigger Power BI refresh. Failure at any step sends an alert."
  },
  {
    id: "g89",
    term: "Workflow Scheduler",
    definition: "A tool that triggers and manages when data jobs run — based on time (every night at 2 AM), on demand, or when specific events occur (a file arrives in S3). Examples: Apache Airflow DAGs, cron jobs, AWS EventBridge.",
    category: "fundamentals",
    relatedTerms: [
      "Orchestration",
      "Data Pipeline",
      "CI/CD",
      "Batch Processing"
    ],
    example: "A cron job runs 'python etl.py' every Sunday at 1 AM on a Linux server. Airflow is the enterprise upgrade — with retries, monitoring, dependency tracking, and alerting built in."
  },
  {
    id: "g90",
    term: "Real-Time Processing",
    definition: "Processing and responding to data immediately as it is generated, with minimal latency (milliseconds to seconds). Used where a delayed response has business impact — fraud detection, live pricing, autonomous vehicles.",
    category: "fundamentals",
    relatedTerms: [
      "Stream Processing",
      "Batch Processing",
      "Message Queue",
      "Apache Kafka"
    ],
    example: "HDFC Bank's credit card system does real-time processing — your transaction is approved or declined within 2 seconds because fraud models score it the moment it arrives, not in a nightly batch."
  },
  {
    id: "g91",
    term: "Data Modeling",
    definition: "The process of designing how data is structured, stored, and related in a database or warehouse. A good data model makes queries fast, updates easy, and data consistent. Includes conceptual (what data), logical (how related), and physical (exact schema) models.",
    category: "fundamentals",
    relatedTerms: ["Schema", "Star Schema", "OLAP", "OLTP", "Data Warehouse"],
    example: "Before building Naukri's database, a data modeler designs the schema: USERS, JOB_LISTINGS, APPLICATIONS, and COMPANIES tables with proper relationships and constraints — this is data modeling."
  },
  {
    id: "g92",
    term: "OLTP",
    definition: "Online Transaction Processing — databases optimized for fast inserts, updates, and deletes supporting transactional workloads like apps and websites. Designed for many small, concurrent operations. Examples: MySQL, PostgreSQL, Oracle.",
    category: "fundamentals",
    relatedTerms: ["OLAP", "Data Warehouse", "Data Modeling", "SQL"],
    example: "When you book a train ticket on IRCTC, the OLTP database records your booking, deducts a seat, and processes payment — all within 2 seconds across thousands of concurrent users."
  },
  {
    id: "g93",
    term: "OLAP",
    definition: "Online Analytical Processing — databases and warehouses optimized for complex analytical queries and aggregations across large datasets. Designed for read-heavy workloads by analysts and BI teams. Examples: Snowflake, BigQuery, Amazon Redshift.",
    category: "fundamentals",
    relatedTerms: ["OLTP", "Data Warehouse", "Star Schema", "BI"],
    example: "Myntra's OLAP warehouse answers 'What was total revenue by category, by city, by month for Q3?' in seconds — a query that would take hours or crash an OLTP database."
  },
  {
    id: "g94",
    term: "Data Partitioning",
    definition: "Dividing a large dataset into smaller, manageable chunks based on a key like date, region, or customer ID. Partitioning enables queries to scan only the relevant partition, dramatically speeding up analytical queries on massive tables.",
    category: "fundamentals",
    relatedTerms: ["Data Sharding", "Data Warehouse", "Indexing", "OLAP"],
    example: "A bank's transactions table is partitioned by year and month. Querying 'all transactions in March 2025' only scans the March 2025 partition — 100x faster than scanning 10 years of data."
  },
  {
    id: "g95",
    term: "Data Sharding",
    definition: "Horizontal splitting of data across multiple databases or servers to distribute load and improve scalability. Each shard holds a subset of the data. Different from partitioning — sharding splits across separate database instances.",
    category: "fundamentals",
    relatedTerms: [
      "Data Partitioning",
      "Distributed Systems",
      "Scalability",
      "Elasticity"
    ],
    example: "WhatsApp shards its message database by user ID — users with IDs 1–10 million go to Shard A, 10–20 million to Shard B, etc. Each shard handles a fraction of total load independently."
  },
  {
    id: "g96",
    term: "Indexing",
    definition: "Creating a data structure (like a sorted lookup table) that speeds up data retrieval operations on database tables. Without an index, every query scans every row. With an index on frequently queried columns, the database jumps directly to matching rows.",
    category: "fundamentals",
    relatedTerms: ["SQL", "OLTP", "Data Partitioning", "Database"],
    example: "Without an index, searching 100 million users by email scans every row (slow). Adding CREATE INDEX idx_email ON users(email) makes the same query 1000x faster — the database skips directly to the match."
  },
  {
    id: "g97",
    term: "Data Quality",
    definition: "Ensuring data is accurate, complete, consistent, timely, and fit for its intended purpose. Poor data quality is the #1 cause of failed analytics projects. Data quality checks run at ingestion (validate before loading) and in transformation (test after building).",
    category: "fundamentals",
    relatedTerms: ["Data Governance", "ETL", "dbt", "Data Lineage"],
    example: "A bank's data quality check finds that 5% of customer phone numbers are only 9 digits (should be 10). This triggers an alert and the records are quarantined for manual review instead of loading bad data into the warehouse."
  },
  {
    id: "g98",
    term: "Data Lineage",
    definition: "Tracking data's complete journey — its origin, every transformation it went through, and where it ended up. Data lineage lets you answer: 'Where did this dashboard number come from? What changed if I modify this model?'",
    category: "fundamentals",
    relatedTerms: ["Data Governance", "Data Catalog", "dbt", "ETL"],
    example: "When the CFO asks 'why is this revenue number different from last month?', a data lineage graph shows exactly which ETL step changed — the currency conversion formula was updated on a specific date."
  },
  {
    id: "g99",
    term: "Data Catalog",
    definition: "A centralized, searchable inventory of all data assets in an organization — tables, columns, data types, owners, descriptions, and usage stats. Helps data teams find, understand, and trust data. Examples: Apache Atlas, Alation, Google Data Catalog.",
    category: "fundamentals",
    relatedTerms: [
      "Data Governance",
      "Data Lineage",
      "Metadata",
      "Data Warehouse"
    ],
    example: "A new data analyst at Infosys searches the data catalog for 'customer churn' and finds the exact Snowflake table, who owns it, what each column means, and when it was last updated — in 30 seconds."
  },
  {
    id: "g100",
    term: "Fault Tolerance",
    definition: "A system's ability to continue operating correctly even when some components fail. Fault-tolerant systems detect failures, route around them, and self-heal without human intervention. Critical for data pipelines processing financial transactions or medical data.",
    category: "fundamentals",
    relatedTerms: ["Distributed Systems", "Scalability", "SRE", "Incident"],
    example: "Airflow marks a failed ETL task and automatically retries it 3 times. If it still fails, it sends an alert but continues running other tasks — fault tolerance in action."
  },
  {
    id: "g101",
    term: "Elasticity",
    definition: "The ability of a system to automatically scale resources up or down based on current demand — adding compute during peak load and reducing it (and cost) during quiet periods. A key advantage of cloud over on-premise infrastructure.",
    category: "fundamentals",
    relatedTerms: [
      "Scalability",
      "Cloud Computing",
      "Distributed Systems",
      "Auto-scaling"
    ],
    example: "During Diwali sale, Flipkart's cloud infrastructure automatically scales from 100 to 1,000 servers in minutes to handle 10x traffic — and scales back down after the sale, reducing cost."
  },
  {
    id: "g102",
    term: "Scalability",
    definition: "The ability of a system to handle increased load by adding resources without compromising performance. Vertical scaling adds more power to existing machines. Horizontal scaling adds more machines. Cloud systems excel at horizontal scaling.",
    category: "fundamentals",
    relatedTerms: [
      "Elasticity",
      "Distributed Systems",
      "Data Sharding",
      "Load Balancer"
    ],
    example: "LinkedIn's newsfeed is horizontally scalable — as its user base grew from 1 million to 1 billion, they added more servers rather than buying one impossibly powerful supercomputer."
  },
  {
    id: "g103",
    term: "Data Warehouse (Cloud)",
    definition: "A centralized repository optimized for analytical queries on structured data, hosted on cloud infrastructure. Scales automatically, charges per query or storage. Modern cloud warehouses like Snowflake, Redshift, and BigQuery separate storage from compute for maximum flexibility.",
    category: "fundamentals",
    relatedTerms: ["Data Lake", "Data Lakehouse", "OLAP", "ELT", "dbt"],
    example: "A startup uses BigQuery as their cloud warehouse — they pay only for the data they query, scale to petabytes without managing servers, and give every analyst SQL access through a browser."
  },
  {
    id: "g104",
    term: "dbt (data build tool)",
    definition: "An open-source transformation framework that enables data analysts and engineers to write SQL SELECT statements as models, which dbt compiles and runs inside a cloud data warehouse. Brings software engineering practices (version control, testing, documentation) to SQL transformations.",
    category: "fundamentals",
    relatedTerms: [
      "ELT",
      "Data Warehouse",
      "Snowflake",
      "Data Lineage",
      "Data Quality"
    ],
    example: "Airbnb's analytics team uses dbt to transform raw booking events in Snowflake into clean 'revenue by host city' tables. Each model has automated tests — 'booking_amount should never be null' — so dashboards always show accurate numbers."
  }
];
function useGlossary(searchQuery, category) {
  return useQuery({
    queryKey: ["glossary", searchQuery, category],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      let terms = MOCK_GLOSSARY;
      if (category) {
        terms = terms.filter((t) => t.category === category);
      }
      if (searchQuery && searchQuery.length > 0) {
        const q = searchQuery.toLowerCase();
        terms = terms.filter(
          (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q) || t.relatedTerms.some((r) => r.toLowerCase().includes(q))
        );
      }
      return terms;
    },
    staleTime: 1e3 * 60 * 10
  });
}
export {
  useGlossary as u
};
