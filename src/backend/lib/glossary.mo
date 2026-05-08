import GlossaryTypes "../types/glossary";
import List "mo:core/List";

module {
  let seedTerms : [GlossaryTypes.Term] = [
    // Hardware (5)
    { id = 1; term = "CPU"; definition = "Central Processing Unit — the brain of the computer that executes instructions."; example = "When you open an app, the CPU processes all the calculations needed to run it."; category = #hardware },
    { id = 2; term = "RAM"; definition = "Random Access Memory — temporary, fast memory that stores data your computer is currently using."; example = "Having 16GB of RAM means your computer can run many programs at once without slowing down."; category = #hardware },
    { id = 3; term = "SSD"; definition = "Solid State Drive — a fast storage device with no moving parts that stores your files permanently."; example = "Upgrading from a hard drive to an SSD makes your laptop boot in seconds instead of minutes."; category = #hardware },
    { id = 4; term = "GPU"; definition = "Graphics Processing Unit — a chip designed to handle visual rendering and parallel computations."; example = "Gamers use powerful GPUs to display smooth, high-quality graphics in video games."; category = #hardware },
    { id = 5; term = "Motherboard"; definition = "The main circuit board that connects all hardware components inside a computer."; example = "The CPU, RAM, and storage all plug into the motherboard to communicate with each other."; category = #hardware },

    // Software (6)
    { id = 6; term = "Operating System"; definition = "System software that manages hardware resources and provides services for other programs."; example = "Windows 11 is an operating system that lets you run apps like Chrome and Microsoft Word."; category = #software },
    { id = 7; term = "API"; definition = "Application Programming Interface — a set of rules that lets different software applications communicate."; example = "A weather app uses a weather API to fetch current temperature data from a remote server."; category = #software },
    { id = 8; term = "Bug"; definition = "An error or flaw in software code that causes unexpected behaviour."; example = "A bug in a banking app might show the wrong account balance until the developer fixes it."; category = #software },
    { id = 9; term = "Open Source"; definition = "Software whose source code is freely available for anyone to view, modify, and distribute."; example = "Linux is open-source, meaning developers worldwide contribute to improving it for free."; category = #software },
    { id = 10; term = "Version Control"; definition = "A system that records changes to code over time so you can revisit or restore earlier versions."; example = "Git lets a team of developers work on the same project without overwriting each other's changes."; category = #software },
    { id = 11; term = "IDE"; definition = "Integrated Development Environment — a software tool for writing, testing, and debugging code."; example = "Developers use VS Code (an IDE) to write Python code with helpful features like auto-complete."; category = #software },

    // Networking (8)
    { id = 12; term = "IP Address"; definition = "A unique numerical label assigned to each device connected to a computer network."; example = "Your home router has an IP address like 192.168.1.1 that identifies it on the local network."; category = #networking },
    { id = 13; term = "DNS"; definition = "Domain Name System — translates human-readable domain names into IP addresses."; example = "When you type 'google.com', DNS converts it to an IP address your browser can connect to."; category = #networking },
    { id = 14; term = "Bandwidth"; definition = "The maximum amount of data that can be transmitted over a network connection in a given time."; example = "A 100 Mbps internet connection has enough bandwidth to stream HD video on several devices."; category = #networking },
    { id = 15; term = "Firewall"; definition = "A security system that monitors and controls incoming and outgoing network traffic based on rules."; example = "A firewall blocks suspicious traffic from reaching your computer, like unauthorised login attempts."; category = #networking },
    { id = 16; term = "VPN"; definition = "Virtual Private Network — encrypts your internet connection and hides your online activity."; example = "Employees use a VPN to securely access company files when working from home."; category = #networking },
    { id = 17; term = "Protocol"; definition = "A set of rules that governs how data is transmitted between devices on a network."; example = "HTTP is the protocol your browser uses to request web pages from servers."; category = #networking },
    { id = 18; term = "Latency"; definition = "The delay between sending a request and receiving a response over a network."; example = "High latency in online gaming causes a 'lag', where your actions take time to register."; category = #networking },
    { id = 19; term = "Router"; definition = "A networking device that forwards data packets between computer networks."; example = "Your home Wi-Fi router connects all your devices to the internet through your ISP."; category = #networking },

    // Cybersecurity (7)
    { id = 20; term = "Phishing"; definition = "A cyberattack where attackers trick people into revealing sensitive info via fake emails or websites."; example = "You receive an email pretending to be your bank asking you to 'verify' your password — that's phishing."; category = #cybersecurity },
    { id = 21; term = "Malware"; definition = "Malicious software designed to disrupt, damage, or gain unauthorised access to systems."; example = "Ransomware is a type of malware that locks your files and demands payment to unlock them."; category = #cybersecurity },
    { id = 22; term = "Encryption"; definition = "The process of converting data into a coded format that can only be read by authorised parties."; example = "WhatsApp uses end-to-end encryption so only you and the recipient can read your messages."; category = #cybersecurity },
    { id = 23; term = "Two-Factor Authentication"; definition = "A security method requiring two forms of verification to access an account."; example = "Logging into Gmail with your password and then confirming via your phone is 2FA."; category = #cybersecurity },
    { id = 24; term = "Vulnerability"; definition = "A weakness in a system that can be exploited by attackers to gain unauthorised access."; example = "Outdated software often has known vulnerabilities that hackers can exploit if not patched."; category = #cybersecurity },
    { id = 25; term = "Patch"; definition = "A software update that fixes known bugs, security vulnerabilities, or improves performance."; example = "Microsoft releases monthly patches to fix security issues discovered in Windows."; category = #cybersecurity },
    { id = 26; term = "Social Engineering"; definition = "Manipulating people into revealing confidential information through psychological tricks."; example = "A caller pretending to be IT support and asking for your password is social engineering."; category = #cybersecurity },

    // Cloud (6)
    { id = 27; term = "Cloud Computing"; definition = "Delivering computing services (storage, servers, software) over the internet on a pay-as-you-go basis."; example = "Using Google Drive to store files online instead of on your hard drive is cloud computing."; category = #cloud },
    { id = 28; term = "SaaS"; definition = "Software as a Service — software delivered via the internet without local installation."; example = "Microsoft 365 is SaaS — you access Word and Excel through a browser or app without installing a local copy."; category = #cloud },
    { id = 29; term = "IaaS"; definition = "Infrastructure as a Service — renting virtualised computing resources like servers and storage online."; example = "A startup uses AWS EC2 (IaaS) to rent virtual servers instead of buying physical hardware."; category = #cloud },
    { id = 30; term = "Scalability"; definition = "The ability of a system to handle increased load by adding resources."; example = "An e-commerce site scales up its cloud servers during Black Friday to handle millions of visitors."; category = #cloud },
    { id = 31; term = "Containerisation"; definition = "Packaging software and its dependencies together so it runs consistently across any environment."; example = "Docker lets developers ship an app as a container that works the same on any computer or server."; category = #cloud },
    { id = 32; term = "DevOps"; definition = "A culture and practice combining development and IT operations to shorten delivery cycles."; example = "A DevOps team automates testing and deployment so new features reach users within hours."; category = #cloud },

    // IT Support (5)
    { id = 33; term = "Help Desk"; definition = "A support service that handles technical problems and queries from users within an organisation."; example = "When your office printer stops working, you raise a ticket with the IT help desk for assistance."; category = #itSupport },
    { id = 34; term = "Ticketing System"; definition = "Software used to track, manage, and resolve IT support requests."; example = "ServiceNow is a ticketing system where employees log issues and IT tracks their resolution."; category = #itSupport },
    { id = 35; term = "SLA"; definition = "Service Level Agreement — a contract defining the expected level and speed of service delivery."; example = "An SLA might state that critical IT issues must be resolved within 4 hours."; category = #itSupport },
    { id = 36; term = "Remote Desktop"; definition = "Technology that lets you control one computer from another over a network."; example = "An IT support agent uses Remote Desktop to fix a colleague's software issue without visiting their desk."; category = #itSupport },
    { id = 37; term = "ITIL"; definition = "IT Infrastructure Library — a framework of best practices for delivering IT services."; example = "Companies follow ITIL to structure their IT support processes, from incident management to change management."; category = #itSupport },

    // AI/ML (8)
    { id = 38; term = "Artificial Intelligence"; definition = "The simulation of human intelligence processes by computer systems."; example = "A chatbot that answers customer queries without human input uses artificial intelligence."; category = #aiml },
    { id = 39; term = "Machine Learning"; definition = "A branch of AI where systems learn from data to improve their performance over time."; example = "Netflix uses machine learning to recommend shows based on what you have previously watched."; category = #aiml },
    { id = 40; term = "Neural Network"; definition = "A computing system loosely inspired by the human brain, made of layers of connected nodes."; example = "Neural networks power image recognition, helping apps identify objects in photos."; category = #aiml },
    { id = 41; term = "Training Data"; definition = "The dataset used to teach a machine learning model to recognise patterns."; example = "An AI spam filter is trained on thousands of spam and non-spam emails to learn the difference."; category = #aiml },
    { id = 42; term = "Algorithm"; definition = "A step-by-step set of instructions or rules that a computer follows to solve a problem."; example = "Google's search algorithm ranks web pages to show you the most relevant results first."; category = #aiml },
    { id = 43; term = "Natural Language Processing"; definition = "AI technology that enables computers to understand, interpret, and generate human language."; example = "Siri and Alexa use NLP to understand voice commands and respond in natural speech."; category = #aiml },
    { id = 44; term = "Deep Learning"; definition = "A subset of ML using multi-layered neural networks to learn complex patterns from large datasets."; example = "Self-driving cars use deep learning to recognise pedestrians, traffic lights, and road signs."; category = #aiml },
    { id = 45; term = "Model Accuracy"; definition = "A measure of how often a machine learning model makes correct predictions."; example = "A disease diagnosis AI with 95% accuracy correctly identifies a condition 95 out of 100 times."; category = #aiml },

    // General (7)
    { id = 46; term = "Database"; definition = "An organised collection of structured data, typically stored electronically."; example = "A school stores student records (names, grades, attendance) in a database for easy retrieval."; category = #general },
    { id = 47; term = "Server"; definition = "A computer or system that provides resources, data, or services to other computers over a network."; example = "When you visit a website, a web server sends the page content to your browser."; category = #general },
    { id = 48; term = "Backup"; definition = "A copy of data stored separately to protect against loss due to hardware failure or accidents."; example = "Setting up automatic daily backups means you won't lose your work if your laptop crashes."; category = #general },
    { id = 49; term = "Cache"; definition = "Temporary storage that speeds up data retrieval by storing frequently used information nearby."; example = "Your browser caches images from websites you visit often so they load faster next time."; category = #general },
    { id = 50; term = "Byte"; definition = "A unit of digital information equal to 8 bits, used to measure storage and data sizes."; example = "A typical text message is just a few hundred bytes, while a photo is several megabytes (millions of bytes)."; category = #general },
    { id = 51; term = "Boolean"; definition = "A data type with only two possible values: true or false."; example = "A checkbox in a form is a boolean — it's either checked (true) or unchecked (false)."; category = #general },
    { id = 52; term = "Debugging"; definition = "The process of finding and fixing errors (bugs) in software code."; example = "A developer spends the afternoon debugging because the app crashes whenever a user logs out."; category = #general },

    // Corporate jargon (30 new terms)
    { id = 53; term = "Source"; definition = "The origin system or database from which data is extracted in a data pipeline."; example = "In an ETL job, the source is the legacy CRM database and the target is the new data warehouse."; category = #general },
    { id = 54; term = "Legacy System"; definition = "An outdated but still operational technology system that a company depends on."; example = "A bank runs a legacy COBOL system from the 1980s — migrating it is a multi-year project."; category = #general },
    { id = 55; term = "Target"; definition = "The destination system where transformed data is loaded after processing."; example = "After cleansing customer records in Talend, the target is a Snowflake data warehouse table."; category = #general },
    { id = 56; term = "Deployment"; definition = "The process of releasing software or infrastructure changes to a live environment."; example = "The team scheduled the deployment for Sunday at midnight to minimise user impact."; category = #general },
    { id = 57; term = "Rollback"; definition = "Reverting a system to a previous stable state after a failed deployment."; example = "The new release caused critical errors, so the team did a rollback to the previous version within minutes."; category = #general },
    { id = 58; term = "KPI"; definition = "Key Performance Indicator — a measurable value that shows how effectively a goal is being achieved."; example = "The support team's KPI is to resolve 95% of incidents within the agreed SLA window."; category = #general },
    { id = 59; term = "Sprint"; definition = "A fixed-length iteration (usually 1–2 weeks) in Agile where a set of tasks is completed."; example = "The team committed to building the login feature during this two-week sprint."; category = #general },
    { id = 60; term = "Scrum"; definition = "An Agile framework that organises work into sprints with defined ceremonies and roles."; example = "Every morning the team runs a 15-minute scrum standup to share progress and blockers."; category = #general },
    { id = 61; term = "Standup"; definition = "A brief daily meeting where each team member shares what they did yesterday, today, and any blockers."; example = "During the standup, a developer mentioned they were blocked waiting for database credentials."; category = #general },
    { id = 62; term = "Retrospective"; definition = "A Scrum ceremony at the end of a sprint to reflect on what went well and what needs improvement."; example = "In the retrospective the team agreed to write unit tests before submitting pull requests."; category = #general },
    { id = 63; term = "Stakeholder"; definition = "Anyone who has an interest in or is affected by a project's outcome."; example = "The project stakeholders include the product manager, the client, and the QA lead."; category = #general },
    { id = 64; term = "Escalation"; definition = "The process of raising an unresolved issue to a higher authority for faster resolution."; example = "When the critical bug wasn't fixed after 24 hours, the client escalated it to the account manager."; category = #general },
    { id = 65; term = "SOP"; definition = "Standard Operating Procedure — a documented step-by-step process for a routine task."; example = "The IT team follows an SOP to onboard every new employee, ensuring no step is skipped."; category = #general },
    { id = 66; term = "UAT"; definition = "User Acceptance Testing — final testing done by end users to verify the system meets requirements."; example = "Before go-live, the finance team performed UAT on the new payroll module for two weeks."; category = #general },
    { id = 67; term = "QA"; definition = "Quality Assurance — the process of ensuring a product meets defined quality standards before release."; example = "The QA team ran 200 test cases on the new feature before it was approved for production."; category = #general },
    { id = 68; term = "CI/CD"; definition = "Continuous Integration / Continuous Delivery — automating the process of building, testing, and deploying code."; example = "With CI/CD, every commit to main triggers automated tests and deploys to staging within minutes."; category = #general },
    { id = 69; term = "Pipeline"; definition = "An automated sequence of steps that moves code or data from one stage to the next."; example = "The data pipeline extracts records from the CRM, transforms them, and loads them into the DWH nightly."; category = #general },
    { id = 70; term = "Incident"; definition = "An unplanned interruption or reduction in the quality of an IT service."; example = "A production database going offline at 2 AM is an incident that triggers an on-call alert."; category = #general },
    { id = 71; term = "Change Request"; definition = "A formal proposal to modify a system, process, or service in a controlled manner."; example = "Before updating the firewall rules, the engineer submitted a change request for CAB approval."; category = #general },
    { id = 72; term = "ITSM"; definition = "IT Service Management — the set of policies and processes for delivering IT services to end users."; example = "The company uses ServiceNow as its ITSM platform to manage incidents, changes, and assets."; category = #general },
    { id = 73; term = "SDLC"; definition = "Software Development Life Cycle — the structured process of planning, creating, testing, and deploying software."; example = "The SDLC for the new mobile app took 9 months from requirements gathering to production release."; category = #general },
    { id = 74; term = "Kanban"; definition = "A visual workflow management method using cards on a board to track work items."; example = "The support team uses a Kanban board with columns: To Do, In Progress, and Done."; category = #general },
    { id = 75; term = "Velocity"; definition = "In Agile, the amount of work a team completes in a single sprint, measured in story points."; example = "The team's average velocity is 40 story points per sprint, used for release planning."; category = #general },
    { id = 76; term = "Story Points"; definition = "A unit of estimation in Agile that measures the effort and complexity of a user story."; example = "A simple bug fix might be 1 story point, while a new payment integration could be 8."; category = #general },
    { id = 77; term = "PRD"; definition = "Product Requirements Document — a document describing a product's purpose, features, and requirements."; example = "The product manager shared the PRD with the development team before sprint planning began."; category = #general },
    { id = 78; term = "BRD"; definition = "Business Requirements Document — a formal document describing business needs and the solution required to meet them."; example = "The client's BRD listed 50 requirements the new CRM integration had to fulfil."; category = #general },
    { id = 79; term = "Hotfix"; definition = "An urgent patch applied directly to a production system to fix a critical bug."; example = "A hotfix was deployed on Friday evening to stop users from being accidentally logged out."; category = #general },
    { id = 80; term = "Release"; definition = "A versioned deployment of software that introduces new features or fixes to an environment."; example = "Release 2.4.1 of the app added dark mode and fixed three high-priority bugs."; category = #general },
    { id = 81; term = "Environment"; definition = "A distinct configuration of infrastructure used at a specific stage: dev, staging, or production."; example = "Features are built in dev, tested in staging, and only promoted to production after QA sign-off."; category = #general },
    { id = 82; term = "Velocity (data)"; definition = "In data pipelines, the speed at which data is generated and must be processed."; example = "A stock trading platform has high-velocity data — millions of price ticks per second must be processed in real time."; category = #general },

    // General — corporate/business terms (new batch)
    { id = 83; term = "SLA"; definition = "Service Level Agreement — a contract defining expected service quality between provider and client."; example = "Our team's SLA says P1 incidents must be resolved within 2 hours, so the on-call engineer was paged immediately."; category = #general },
    { id = 84; term = "POC"; definition = "Proof of Concept — a small prototype built to test whether an idea is technically feasible before full development."; example = "We built a POC in 3 days to prove the third-party API integration would work before committing a full sprint to it."; category = #general },
    { id = 85; term = "Blocker"; definition = "An obstacle that prevents a team member from making progress on their task."; example = "I raised a blocker in standup — I need database access credentials before I can continue my story."; category = #general },
    { id = 86; term = "Scrum Master"; definition = "A facilitator who runs the Scrum process, organises ceremonies, and removes blockers for the team."; example = "Our Scrum Master scheduled the sprint retrospective and followed up with the infra team to unblock the deployment issue."; category = #general },
    { id = 87; term = "OKR"; definition = "Objectives and Key Results — a goal-setting framework pairing a qualitative objective with measurable key results."; example = "Team OKR: Objective — Improve deployment speed. Key Result — Reduce average deploy time from 2 hours to 30 minutes."; category = #general },
    { id = 88; term = "Action Item"; definition = "A specific task assigned to a named person during a meeting, with an agreed deadline."; example = "The action item from today's meeting: Ravi to send the updated BRD to the client by EOD tomorrow."; category = #general },
    { id = 89; term = "Go-Live"; definition = "The moment a new system, feature, or product is officially released to real end users in production."; example = "Our go-live date is March 15th — all UAT sign-offs and rollback plans must be ready before then."; category = #general },
    { id = 90; term = "Offshore"; definition = "A team or resource working from a country different from the client or headquarter location."; example = "Our offshore team in Hyderabad builds the product while the onshore team in New York handles client meetings."; category = #general },
    { id = 91; term = "SME"; definition = "Subject Matter Expert — a person with deep domain knowledge consulted during design or problem-solving."; example = "For questions about the banking compliance module, the team consulted an SME with 10 years of financial systems experience."; category = #general },
    { id = 92; term = "WFH"; definition = "Work From Home — a remote work arrangement where an employee works from their home instead of the office."; example = "Tuesdays and Thursdays are WFH days for our team; everyone connects over Teams and Slack."; category = #general },
    { id = 93; term = "Bandwidth (capacity)"; definition = "In corporate context, the available time and mental capacity a person has to take on new work."; example = "Sorry, I don't have bandwidth for that new initiative this sprint — I'm already at full capacity."; category = #general },
    { id = 94; term = "Deliverable"; definition = "A tangible output or result that must be produced and handed over as part of a project."; example = "The project deliverables for this phase are the wireframes, the BRD, and a working prototype by Friday."; category = #general },
    { id = 95; term = "Sign-off"; definition = "Formal approval from a stakeholder or client confirming that a deliverable meets expectations."; example = "We cannot move to production until we receive sign-off from the client's QA lead on all test scenarios."; category = #general },
    { id = 96; term = "Onboarding"; definition = "The process of integrating a new employee or client into a team, system, or platform."; example = "IT onboarding for new joiners includes setting up their laptop, email, VPN access, and tool permissions."; category = #general },
    { id = 97; term = "ETA"; definition = "Estimated Time of Arrival — used in corporate settings to mean the expected completion time of a task or fix."; example = "The manager asked for an ETA on the bug fix; the developer committed to delivering it by 3 PM."; category = #general },
    { id = 98; term = "EOD"; definition = "End of Day — a deadline meaning the task should be completed before the working day ends."; example = "Please share the meeting notes with all stakeholders by EOD today."; category = #general },
    { id = 99; term = "Dependency"; definition = "A task or system that must be completed or available before another task can start."; example = "The frontend integration is blocked because of a dependency on the backend API, which isn't ready yet."; category = #general },
    { id = 100; term = "Runbook"; definition = "A step-by-step operational guide that any team member can follow to handle a routine task or incident."; example = "Our runbook for database failover has 12 steps — even a new on-call engineer can execute it without prior experience."; category = #general },
    { id = 101; term = "MTTR"; definition = "Mean Time to Recovery — the average time taken to restore service after an incident."; example = "After adding better monitoring and a runbook, our MTTR for P1 incidents dropped from 4 hours to 45 minutes."; category = #general },
    { id = 102; term = "SRE"; definition = "Site Reliability Engineer — a role focused on keeping production systems reliable, scalable, and highly available."; example = "Our SRE team responded to the outage alert, identified a memory leak, and had the service restored within 23 minutes."; category = #general },

    // Software — dev/coding terms (new batch)
    { id = 103; term = "JSON"; definition = "JavaScript Object Notation — a lightweight, human-readable text format for exchanging data between systems."; example = "The API response came back as JSON: { 'name': 'Ravi', 'role': 'developer', 'active': true }."; category = #software },
    { id = 104; term = "REST"; definition = "Representational State Transfer — a widely used architecture for building web APIs using standard HTTP methods."; example = "Our REST API uses GET to fetch user data, POST to create records, and DELETE to remove them."; category = #software },
    { id = 105; term = "Webhook"; definition = "An automatic HTTP callback sent by one system to another when a specific event occurs."; example = "When a Stripe payment succeeds, Stripe fires a webhook to our backend to activate the user's subscription instantly."; category = #software },
    { id = 106; term = "Containerisation"; definition = "Packaging an application together with all its dependencies so it runs consistently across any environment."; example = "We containerised our app with Docker so it behaves identically on a developer's laptop and on the production server."; category = #software },
    { id = 107; term = "Microservices"; definition = "An architecture where an application is split into small, independently deployable services each handling one function."; example = "Our e-commerce platform has separate microservices for orders, payments, notifications, and user profiles."; category = #software },
    { id = 108; term = "Tech Stack"; definition = "The combination of programming languages, frameworks, and tools used to build a software application."; example = "Our startup's tech stack is React for the frontend, Node.js for the backend, and PostgreSQL for the database."; category = #software },
    { id = 109; term = "SDK"; definition = "Software Development Kit — a collection of pre-built tools, libraries, and documentation for building apps on a specific platform."; example = "We used the AWS SDK to add S3 file uploads to our app without writing low-level HTTP calls."; category = #software },
    { id = 110; term = "Git Branch"; definition = "A parallel version of a codebase where developers can make changes without affecting the main code."; example = "The developer created a feature branch called 'login-redesign' to build the new UI without breaking main."; category = #software },
    { id = 111; term = "Pull Request"; definition = "A request for team members to review and merge code changes from one branch into another."; example = "After finishing the feature, the developer raised a pull request and two teammates reviewed the code before it was merged."; category = #software },
    { id = 112; term = "Code Review"; definition = "A process where one or more developers read and evaluate another developer's code before it is merged."; example = "During code review, the senior developer spotted a SQL injection vulnerability and asked for a fix."; category = #software },
    { id = 113; term = "ETL"; definition = "Extract, Transform, Load — a data integration process that moves data from source systems to a target data warehouse."; example = "The nightly ETL job extracts sales data from the CRM, transforms it into a unified format, and loads it into Snowflake."; category = #software },
    { id = 114; term = "Data Warehouse"; definition = "A large centralised repository that stores structured data from multiple sources for reporting and analysis."; example = "The business team queries the Snowflake data warehouse every morning to review overnight sales figures."; category = #software },

    // AI/ML — new terms
    { id = 115; term = "LLM"; definition = "Large Language Model — an AI model trained on massive amounts of text data to understand and generate human language."; example = "ChatGPT is an LLM that can write code, summarise documents, translate languages, and answer technical questions."; category = #aiml },
    { id = 116; term = "Prompt Engineering"; definition = "The skill of crafting precise inputs to an AI model to get better, more accurate, or more useful outputs."; example = "Instead of asking 'summarise this', a well-engineered prompt is 'summarise this report in 3 bullet points for a non-technical manager'."; category = #aiml },
    { id = 117; term = "Hallucination"; definition = "When an AI model generates incorrect, fabricated, or nonsensical information with apparent confidence."; example = "The AI hallucinated a fake research paper citation — it gave a real-looking title and author that simply did not exist."; category = #aiml },
    { id = 118; term = "Fine-tuning"; definition = "Further training a pre-built AI model on domain-specific data to improve its performance for a particular task."; example = "We fine-tuned a base language model on our support ticket history so it answers product questions accurately."; category = #aiml },
    { id = 119; term = "MLOps"; definition = "Applying DevOps practices to machine learning: versioning models, automating training pipelines, and monitoring production models."; example = "Our MLOps pipeline automatically retrains the fraud detection model every week using the latest transaction data."; category = #aiml },
    { id = 120; term = "Model Drift"; definition = "A gradual decline in a machine learning model's accuracy as real-world data patterns change over time."; example = "Our sales prediction model started drifting six months after launch because consumer behaviour shifted post-pandemic."; category = #aiml },
    { id = 121; term = "Embedding"; definition = "A numerical vector that represents text or other data in a form that AI models can process for similarity search."; example = "We used text embeddings to build a search feature that finds support tickets similar to a new incoming complaint."; category = #aiml },
    { id = 122; term = "RAG"; definition = "Retrieval-Augmented Generation — an AI technique that combines document search with text generation for accurate, grounded answers."; example = "Our RAG system searches internal policy documents first, then generates a response based only on those retrieved documents."; category = #aiml },
    { id = 123; term = "Inference"; definition = "Running a trained AI model on new input data to generate predictions or outputs."; example = "Model training happens once a week, but inference happens in real time — every user message triggers an inference call."; category = #aiml },
    { id = 124; term = "Generative AI"; definition = "A class of AI models that can create new content — text, images, code, or audio — based on a given prompt."; example = "The design team used generative AI to create 20 logo concepts in minutes instead of days."; category = #aiml },

    // Cloud — new operations terms
    { id = 125; term = "IaC"; definition = "Infrastructure as Code — managing and provisioning cloud resources by writing code rather than clicking through a console."; example = "We use Terraform IaC scripts to spin up 50 EC2 instances, configure networking, and set IAM roles with one command."; category = #cloud },
    { id = 126; term = "Blue-Green Deployment"; definition = "A release strategy running two identical production environments and switching traffic between them for zero downtime."; example = "We deployed the new version to the green environment, ran smoke tests, then switched the load balancer from blue to green."; category = #cloud },
    { id = 127; term = "Canary Release"; definition = "Gradually rolling out a new version to a small percentage of users before a full production rollout."; example = "We released the redesigned checkout page to 5% of users first; after 24 hours with no errors, we rolled it out to everyone."; category = #cloud },
    { id = 128; term = "Auto-scaling"; definition = "Automatically increasing or decreasing cloud compute resources in response to real-time demand."; example = "During peak shopping hours, auto-scaling added 10 more server instances; they were removed automatically at night."; category = #cloud },
    { id = 129; term = "Serverless"; definition = "A cloud execution model where the provider manages all infrastructure and you only pay for actual code execution time."; example = "We deployed our image resizing logic as an AWS Lambda serverless function — it costs nothing when idle and scales automatically."; category = #cloud },
    { id = 130; term = "Load Balancer"; definition = "A service that distributes incoming network traffic evenly across multiple servers to prevent overload."; example = "The load balancer splits user requests across 4 application servers so no single server gets overwhelmed."; category = #cloud },
    { id = 131; term = "CDN"; definition = "Content Delivery Network — a globally distributed network of servers that delivers content to users from the nearest location."; example = "Using a CDN, our app's images load in under 100ms for users in India, the US, and Europe alike."; category = #cloud },
    { id = 132; term = "Availability Zone"; definition = "An isolated data centre location within a cloud region used to provide redundancy and high availability."; example = "We deploy our app across 3 availability zones so if one data centre fails, the others keep the service running."; category = #cloud },
  ];

  public func initTerms(terms : List.List<GlossaryTypes.Term>) {
    for (t in seedTerms.values()) {
      terms.add(t);
    };
  };

  public func listTerms(terms : List.List<GlossaryTypes.Term>) : [GlossaryTypes.Term] {
    terms.toArray();
  };

  public func getTermsByCategory(terms : List.List<GlossaryTypes.Term>, category : GlossaryTypes.GlossaryCategory) : [GlossaryTypes.Term] {
    terms.toArray().filter(func(t : GlossaryTypes.Term) : Bool {
      switch (t.category, category) {
        case (#hardware, #hardware) true;
        case (#software, #software) true;
        case (#networking, #networking) true;
        case (#cybersecurity, #cybersecurity) true;
        case (#cloud, #cloud) true;
        case (#itSupport, #itSupport) true;
        case (#aiml, #aiml) true;
        case (#general, #general) true;
        case _ false;
      };
    });
  };

  public func searchTerms(terms : List.List<GlossaryTypes.Term>, searchText : Text) : [GlossaryTypes.Term] {
    let lower = searchText.toLower();
    terms.toArray().filter(func(t : GlossaryTypes.Term) : Bool {
      t.term.toLower().contains(#text lower) or t.definition.toLower().contains(#text lower);
    });
  };

  public func getTerm(terms : List.List<GlossaryTypes.Term>, termId : Nat) : ?GlossaryTypes.Term {
    terms.find(func(t : GlossaryTypes.Term) : Bool { t.id == termId });
  };
};
