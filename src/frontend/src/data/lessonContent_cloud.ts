// Cloud / AWS — 35 scenario-based lessons for IT Fresher Hub
import type { LessonContent } from "@/types";

export const CLOUD_LESSONS: LessonContent[] = [
  // ── Lesson 1 ──────────────────────────────────────────────────────────────
  {
    title: "What is Cloud Computing? The Shift from Physical to Virtual",
    content:
      "Sneha just joined a mid-sized IT company in Pune. On her first day her manager asks her to set up a new web server for a client demo — by tomorrow morning. In the old days this meant ordering physical hardware, waiting weeks for delivery, installing an OS, configuring networking… none of which would finish in 24 hours. Sneha's manager smiles and says: 'Relax. We use cloud.' In five minutes, Sneha has a fully running server on AWS. That is cloud computing in a nutshell.\n\nCloud computing means using someone else's computers — massive data centres owned by companies like Amazon, Microsoft, or Google — over the internet, paying only for what you use, exactly when you need it. You don't own the hardware; you rent capacity. Think of it like electricity: you don't build your own power plant to get electricity at home; you pay the utility company per unit used. Cloud works the same way for compute, storage, and networking.\n\nThe real power is elasticity. When Sneha's demo finishes, she terminates the server and stops paying. If the client loves it and thousands of users sign up the next day, she can double the server count in seconds. No procurement, no capital expense, no idle hardware. That flexibility is why every modern IT company — from a two-person startup to an MNC — is on the cloud.",
    funFact:
      "AWS was originally built to solve Amazon's own infrastructure chaos. Jeff Bezos noticed internal teams were rebuilding the same plumbing over and over, so he turned it into a public service in 2006. It now earns more profit than Amazon's entire retail business.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha's company needs a server for just 48 hours to handle a product launch. What is the biggest financial advantage of using cloud over buying physical hardware?",
      options: [
        "Cloud servers are faster than physical servers",
        "You pay only for the time you use — no upfront hardware purchase",
        "Cloud has better security than a physical data centre",
        "Cloud servers never go down",
      ],
      correctAnswer:
        "You pay only for the time you use — no upfront hardware purchase",
      explanation:
        "The pay-as-you-go model is the core financial win of cloud. A physical server might cost ₹2 lakh upfront; a cloud server for 48 hours costs a few hundred rupees. This transforms IT from a capital expense to an operational expense.",
    },
  },

  // ── Lesson 2 ──────────────────────────────────────────────────────────────
  {
    title: "IaaS, PaaS, SaaS: The Three Cloud Models",
    content:
      "Arjun is explaining cloud service models to his new team. He uses a pizza analogy that everyone immediately gets. IaaS (Infrastructure as a Service) is like buying raw ingredients — AWS gives you a virtual machine, networking, and storage, but YOU install the OS, configure software, and manage everything. EC2 is IaaS. You have maximum control but also maximum responsibility.\n\nPaaS (Platform as a Service) is like a pizza kit — the dough, sauce, and cheese are ready; you just add toppings. AWS Elastic Beanstalk is PaaS: you push your application code and AWS handles the server, OS, runtime, load balancer, and auto-scaling behind the scenes. Developers love PaaS because they can focus purely on writing features.\n\nSaaS (Software as a Service) is ordering a pizza fully delivered. Gmail, Salesforce, Zoom, and Microsoft 365 are all SaaS — you just open a browser and use the software. No installation, no maintenance, no server worries. Most end-users interact exclusively with SaaS products. As an IT professional you will build on IaaS or PaaS and sell something that looks like SaaS to your clients.",
    funFact:
      "Netflix runs entirely on AWS (IaaS/PaaS). During peak hours it streams to 200+ million subscribers — all from cloud infrastructure, not a single Netflix-owned server in a data centre.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's team wants to deploy a Node.js app without worrying about server configuration. Which cloud model fits best?",
      options: [
        "IaaS — full control over the OS and networking",
        "PaaS — platform handles infrastructure, team focuses on code",
        "SaaS — just subscribe and use existing software",
        "On-premise — own and manage your own hardware",
      ],
      correctAnswer:
        "PaaS — platform handles infrastructure, team focuses on code",
      explanation:
        "PaaS lets developers deploy code without managing servers, OS patches, or scaling rules. Services like AWS Elastic Beanstalk or Heroku are perfect when you want to ship fast without becoming a sysadmin.",
    },
  },

  // ── Lesson 3 ──────────────────────────────────────────────────────────────
  {
    title: "AWS vs Azure vs GCP: Choosing Your Platform",
    content:
      "Priya's manager asks her to recommend a cloud provider for their new banking application. She researches all three major platforms: AWS, Azure, and GCP. AWS (Amazon Web Services) launched in 2006 and has the broadest service catalogue — over 200 services covering compute, storage, AI, IoT, and more. It has the largest community, the most third-party integrations, and dominates the market with roughly 31% share. Most Indian IT companies run workloads on AWS, making it the default skill employers want.\n\nAzure (Microsoft Azure) comes second with around 22% market share. Its biggest advantage is deep integration with Microsoft products — Active Directory, Office 365, SQL Server, and Teams all connect natively to Azure. Enterprises already using Windows infrastructure often choose Azure because migration is smoother. If your client runs Microsoft products, Azure certifications are valuable.\n\nGCP (Google Cloud Platform) is third at around 11% but is the go-to for data, analytics, and machine learning workloads — BigQuery, Vertex AI, and Kubernetes Engine (which Google invented) are industry leaders. Priya recommends AWS for her banking app because most of their vendor integrations are AWS-native. The right choice always depends on what your existing stack looks like.",
    funFact:
      "Google invented Kubernetes — the container orchestration system used by all three clouds — and then open-sourced it in 2014. Google essentially donated the backbone of modern cloud infrastructure to the world.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's new client has a heavy Microsoft Office 365 and Active Directory setup. Which cloud platform would integrate most smoothly?",
      options: [
        "AWS — it has the most services",
        "GCP — it has the best AI tools",
        "Azure — it integrates natively with Microsoft products",
        "All three are equally suitable",
      ],
      correctAnswer: "Azure — it integrates natively with Microsoft products",
      explanation:
        "Azure is built by Microsoft and integrates deeply with Active Directory, Office 365, and SQL Server. For Microsoft-heavy enterprises, Azure reduces migration complexity and licensing costs significantly.",
    },
  },

  // ── Lesson 4 ──────────────────────────────────────────────────────────────
  {
    title: "Why AWS Leads: Market Share and Services",
    content:
      "Rahul is preparing for interviews and wants to understand why every job description says 'AWS experience preferred.' AWS has been in the cloud business since 2006 — eight years before Azure became serious competition. That head start meant AWS built relationships with thousands of startups, enterprises, and government agencies who now run critical workloads on its platform. Changing clouds is expensive and risky, so most stay once they commit.\n\nAWS currently offers over 200 fully managed services. Need a managed Kubernetes cluster? EKS. Need serverless functions? Lambda. Need a global content delivery network? CloudFront. Need a machine learning model hosting service? SageMaker. Whatever infrastructure problem a company has, AWS likely has a dedicated service for it — which means AWS skills are transferable across almost any company.\n\nFor Indian IT freshers, AWS proficiency is a powerful differentiator. Tata Consultancy Services, Infosys, Wipro, HCL, and most product companies run significant portions of their work on AWS. The AWS Solutions Architect Associate exam is considered the golden ticket to a cloud career. Rahul prioritises learning AWS core services — EC2, S3, RDS, Lambda, and VPC — and lands three interview calls in one week.",
    funFact:
      "AWS earns more than USD 90 billion per year. Amazon's retail arm, which most people think is the core business, earns less profit than AWS alone. Cloud is literally what funds Prime Video, Alexa, and free shipping.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "AWS's serverless compute service — where you run code without managing servers — is called AWS ___.",
      correctAnswer: "Lambda",
      explanation:
        "AWS Lambda lets you run code in response to events (like an API call or a file upload) without provisioning or managing servers. You pay only for the milliseconds your code actually runs.",
    },
  },

  // ── Lesson 5 ──────────────────────────────────────────────────────────────
  {
    title: "Creating Your AWS Free Tier Account",
    content:
      "Sneha wants hands-on AWS practice but is worried about unexpected charges. Good news: AWS Free Tier gives you 12 months of free access to a generous set of services, plus some services that are free forever. Setting up an account takes about 10 minutes. Go to aws.amazon.com, click 'Create a Free Account', enter your email, choose a strong password, and provide your name and address. You will need a credit or debit card — AWS requires one for identity verification — but as long as you stay within Free Tier limits, you will not be charged.\n\nAfter account creation, AWS asks you to choose a support plan. Always select 'Basic Support (Free)' for learning purposes. Then you land on the AWS Management Console — a web dashboard with search, recently visited services, and a global navigation menu. The very first thing Sneha does is enable MFA (Multi-Factor Authentication) on her root account using Google Authenticator. This is critical: a compromised root account can run up thousands of dollars in charges in minutes.\n\nSneha also sets a Billing Alert: go to Billing and Cost Management, enable billing alerts, then create a CloudWatch alarm that emails her if charges exceed $5. This safety net lets her experiment freely without fear. One more habit: never use the root account for daily work. Immediately create an IAM user with appropriate permissions and use that for everything.",
    funFact:
      "AWS Free Tier gives you 750 hours of EC2 t2.micro or t3.micro per month, 5 GB of S3 storage, 1 million Lambda invocations per month, and much more — completely free for 12 months. Many developers run side projects entirely within Free Tier.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha has created her AWS account. What is the FIRST security action she should take?",
      options: [
        "Launch an EC2 instance immediately to test it",
        "Enable MFA on the root account",
        "Share the account credentials with her team",
        "Delete the billing alert",
      ],
      correctAnswer: "Enable MFA on the root account",
      explanation:
        "The root account has unrestricted access to everything. Enabling MFA means that even if someone steals your password, they cannot log in without your phone. This is non-negotiable security hygiene.",
    },
  },

  // ── Lesson 6 ──────────────────────────────────────────────────────────────
  {
    title: "AWS Global Infrastructure: Regions and Availability Zones",
    content:
      "Arjun's application serves customers in India, the US, and Europe. His manager explains why they use multiple AWS Regions. A Region is a geographic area where AWS has built data centres — as of 2024 there are 33 Regions worldwide, including Mumbai (ap-south-1), which opened in 2016 and is the primary Region for Indian companies. Choosing a nearby Region reduces latency: data travelling from Mumbai to your Mumbai user takes milliseconds, while data from the US takes 200+ milliseconds. For real-time apps, that difference is noticeable.\n\nEach Region contains multiple Availability Zones (AZs). An AZ is one or more physical data centres with independent power, cooling, and networking. Mumbai Region has three AZs: ap-south-1a, ap-south-1b, ap-south-1c. They are physically separate buildings kilometres apart, so a fire or flooding in one does not affect the others. When Arjun deploys his app across two AZs, if one fails, the app automatically serves traffic from the other — zero downtime.\n\nSneha's team also uses Edge Locations — smaller AWS points of presence in cities like Delhi, Chennai, and Hyderabad. Edge Locations are used by CloudFront (CDN) to cache static content close to users. When a user in Hyderabad loads an image, CloudFront serves it from the Hyderabad edge location instead of the Mumbai server, making the page load much faster.",
    funFact:
      "AWS's Mumbai Region (ap-south-1) is the most used cloud region in India. Major Indian companies like Flipkart (before acquisition by Walmart), Zomato, Swiggy, and HDFC Bank run their primary workloads there.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun needs his app to keep running even if one AWS data centre catches fire. Which architecture achieves this?",
      options: [
        "Deploy in a single Availability Zone with daily backups",
        "Deploy across two or more Availability Zones",
        "Deploy in a different country's Region",
        "Use a bigger EC2 instance",
      ],
      correctAnswer: "Deploy across two or more Availability Zones",
      explanation:
        "AZs are physically separate facilities. By spreading your app across multiple AZs, you achieve high availability — one AZ failing does not bring down your service, because others continue serving traffic.",
    },
  },

  // ── Lesson 7 ──────────────────────────────────────────────────────────────
  {
    title: "EC2: Virtual Servers in the Cloud",
    content:
      "Amazon EC2 (Elastic Compute Cloud) is the foundational AWS service — a virtual server you can start, stop, resize, and terminate via the console or CLI. Priya compares it to renting a fully furnished apartment: AWS owns the building (physical server), you rent an apartment (virtual machine), configure it how you like, and pay by the hour. When you no longer need it, you check out and stop paying.\n\nEC2 instances run on Amazon Machine Images (AMIs). An AMI is a pre-configured OS snapshot — think of it as a blueprint. You can launch a Ubuntu 22.04 LTS AMI, an Amazon Linux 2023 AMI, a Windows Server 2022 AMI, or even a custom AMI your team prepared with your app pre-installed. AMIs mean you never waste time manually installing an OS from scratch.\n\nEC2 pricing has three main models: On-Demand (pay per second, no commitment — best for unpredictable workloads), Reserved Instances (commit to 1–3 years for up to 72% discount — best for stable production apps), and Spot Instances (bid on unused AWS capacity for up to 90% discount — best for batch processing jobs that can be interrupted). Priya uses On-Demand for her dev environment and Reserved Instances in production, saving her company ₹3 lakh annually.",
    funFact:
      "The 'Elastic' in EC2 refers to how easily you can scale up or down. AWS can provision a new virtual server in under 60 seconds — something that would take weeks with physical hardware procurement in 2005.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs a server for a predictable 24/7 production workload for the next two years. Which EC2 pricing model saves the most money?",
      options: [
        "On-Demand — flexible hourly pricing",
        "Spot Instances — cheapest but can be interrupted",
        "Reserved Instances — committed pricing for up to 72% discount",
        "Dedicated Hosts — entire physical server for one customer",
      ],
      correctAnswer:
        "Reserved Instances — committed pricing for up to 72% discount",
      explanation:
        "When workloads are predictable and long-running, Reserved Instances offer the best value. You commit to one or three years in exchange for significant discounts — saving up to 72% compared to On-Demand rates.",
    },
  },

  // ── Lesson 8 ──────────────────────────────────────────────────────────────
  {
    title: "Launching Your First EC2 Instance",
    content:
      "Rahul launches his very first EC2 instance, following these exact steps in the AWS Console. Step 1: Navigate to EC2 → click 'Launch Instance'. Step 2: Name the instance 'my-first-server'. Step 3: Choose AMI — select Amazon Linux 2023 (free tier eligible). Step 4: Choose instance type — select t2.micro (1 vCPU, 1 GB RAM — free tier eligible). Step 5: Create a Key Pair named 'my-key' and download the .pem file — this is your SSH password; if you lose it you cannot access the server. Step 6: Configure networking — leave the default VPC, enable 'Allow SSH traffic from My IP'. Step 7: Click 'Launch Instance'.\n\nWithin 60 seconds the instance state shows 'running'. Rahul opens his terminal and connects: chmod 400 my-key.pem then ssh -i my-key.pem ec2-user@YOUR_PUBLIC_IP. He is now inside a Linux server running in an Amazon data centre in Mumbai. Rahul runs sudo yum update -y to update packages, then installs Nginx with sudo yum install nginx -y && sudo systemctl start nginx. He opens port 80 in the security group and visits the public IP in his browser — a web server is live on the internet!\n\nOne golden rule: when you are done experimenting, always stop or terminate the instance. A running t2.micro is free tier eligible, but forgetting about it for months can exhaust your free tier hours or trigger charges.",
    funFact:
      "AWS has over 750 different instance types across families optimised for compute, memory, storage, GPU, and networking. The largest instance, u-24tb1.metal, has 448 vCPUs and 24 TB of RAM — more computing power than most universities owned a decade ago.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To SSH into an EC2 instance, you first need to run 'chmod 400 my-key.pem'. The number 400 sets the file permissions so that only the ___ can read it.",
      correctAnswer: "owner",
      explanation:
        "chmod 400 sets read-only permission for the file owner and no permissions for anyone else. SSH refuses to connect if the key file is accessible by other users — this is a security requirement enforced by the SSH client.",
    },
  },

  // ── Lesson 9 ──────────────────────────────────────────────────────────────
  {
    title: "EC2 Instance Types: Choosing the Right Size",
    content:
      "Sneha's team is choosing EC2 instance types for different workloads and the options look overwhelming. The key insight is that instance families are named by purpose. T-family (t2, t3, t4g) are burstable general-purpose instances — great for dev environments and small web apps. They run at low baseline CPU but can burst to full CPU for short periods. The free tier t2.micro and t3.micro are T-family instances.\n\nM-family (m5, m6i, m7i) are balanced compute and memory — the workhorses of production web apps and application servers. C-family (c5, c6i) are compute-optimised — more CPU relative to memory, perfect for CPU-intensive tasks like video encoding, scientific computing, or high-traffic APIs. R-family (r5, r6i) are memory-optimised — massive RAM for in-memory databases, caching layers, and big data processing.\n\nThe number after the letter indicates the generation (higher = newer, faster, cheaper per performance). The letter after the number indicates the processor: 'i' = Intel, 'a' = AMD, 'g' = Graviton (AWS's ARM chip). Graviton instances offer up to 40% better price-performance. Sneha's team runs their web tier on c6i.xlarge (4 vCPU, 8 GB RAM), their database on r6i.large (2 vCPU, 16 GB RAM), and dev environments on t3.micro. Right-sizing alone saves them 35% on monthly bills.",
    funFact:
      "AWS Graviton processors are designed in-house by Amazon using ARM architecture, the same type of chip in your smartphone. Graviton3 instances deliver up to 40% better performance per dollar than comparable x86 instances for many workloads.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha needs an EC2 instance to run a Redis in-memory cache that requires 32 GB of RAM but minimal CPU. Which instance family should she choose?",
      options: [
        "T-family — burstable general purpose",
        "C-family — compute optimised",
        "R-family — memory optimised",
        "P-family — GPU accelerated",
      ],
      correctAnswer: "R-family — memory optimised",
      explanation:
        "R-family instances provide a high memory-to-CPU ratio, making them ideal for in-memory databases, caching layers (Redis, Memcached), and big data analytics where holding large datasets in RAM is the priority.",
    },
  },

  // ── Lesson 10 ─────────────────────────────────────────────────────────────
  {
    title: "Security Groups: Your Cloud Firewall",
    content:
      "Rahul launches an EC2 web server and wonders why the outside world cannot reach it even though Nginx is running. His senior, Arjun, explains Security Groups. A Security Group is a virtual firewall that controls inbound and outbound traffic to your EC2 instance at the packet level. Every EC2 instance must have at least one Security Group attached.\n\nSecurity Groups work on an allow-only model — there is no 'deny' rule; traffic is blocked by default unless you explicitly allow it. Arjun opens the Security Group in the console and shows Rahul: Inbound rules are empty by default except SSH. To allow web traffic, Arjun adds: Type=HTTP, Protocol=TCP, Port=80, Source=0.0.0.0/0 (anywhere). Immediately, the Nginx welcome page loads in the browser.\n\nBest practices that every AWS professional follows: Never allow SSH from 0.0.0.0/0 in production — restrict it to your company's VPN IP. Separate Security Groups for each tier: one for your web servers, one for your app servers, one for databases. Configure the database Security Group to accept MySQL traffic (port 3306) ONLY from the app server's Security Group, not from the internet. This layered defence stops attackers even if one tier is compromised.",
    funFact:
      "Security Groups are stateful — if you allow inbound traffic on port 80, the response traffic is automatically allowed out, even if there is no explicit outbound rule. Stateless firewalls (like Network ACLs) require you to define rules in both directions.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants the database EC2 instance to only accept connections from the application server, not from the internet. How should he configure the database Security Group?",
      options: [
        "Allow all inbound traffic from 0.0.0.0/0 on port 3306",
        "Allow inbound on port 3306 only from the app server's Security Group",
        "Disable the database Security Group entirely",
        "Allow inbound SSH from 0.0.0.0/0",
      ],
      correctAnswer:
        "Allow inbound on port 3306 only from the app server's Security Group",
      explanation:
        "By referencing the app server's Security Group as the source, only EC2 instances in that group can reach the database. This is called Security Group chaining and is a core AWS security best practice.",
    },
  },

  // ── Lesson 11 ─────────────────────────────────────────────────────────────
  {
    title: "Elastic IPs and Auto Scaling",
    content:
      "Priya notices that every time she stops and starts her EC2 instance the public IP address changes. This is a problem — clients have hardcoded the IP in their DNS records. The solution is an Elastic IP (EIP), a static public IPv4 address you allocate from AWS and attach to an instance. The IP stays the same across stops and starts. However, AWS charges for Elastic IPs that are allocated but NOT attached to a running instance — a small fee that encourages you not to waste public IPs.\n\nAuto Scaling is the feature that makes cloud elastic in practice. Sneha's e-commerce site gets 10x traffic during a Diwali sale. Without Auto Scaling, the fixed fleet of servers would crash. With an Auto Scaling Group (ASG), Sneha defines: minimum 2 instances, desired 2, maximum 10. She sets a scaling policy: 'Add one instance when average CPU exceeds 70% for 5 minutes.' During the Diwali spike, AWS automatically launches new instances. After the sale ends, it terminates extras down to the minimum. Sneha pays only for what was actually used.\n\nAuto Scaling works hand-in-hand with a Load Balancer. The Load Balancer distributes incoming requests across all healthy instances in the ASG, and when a new instance joins the group, the Load Balancer automatically starts sending it traffic. This combination — ASG + ELB — is the backbone of every resilient AWS architecture.",
    funFact:
      "Netflix's Auto Scaling configuration was stress-tested in 2012 when Amazon accidentally corrupted a major EBS volume cluster during a routine deployment. Netflix's ASG + multi-AZ architecture automatically rerouted traffic and the service stayed online — earning Netflix the reputation for the industry's most resilient architecture.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha's app currently runs on 2 EC2 instances during off-peak hours. During a flash sale, traffic spikes 8x. Which configuration handles this automatically without manual intervention?",
      options: [
        "Use a larger instance type (scale up)",
        "An Auto Scaling Group with CPU-based scaling policies",
        "Create 8 extra instances manually every sale",
        "Enable Elastic IPs on all instances",
      ],
      correctAnswer: "An Auto Scaling Group with CPU-based scaling policies",
      explanation:
        "An Auto Scaling Group monitors CloudWatch metrics (like CPU utilisation) and automatically launches or terminates instances to match demand. This is horizontal scaling — adding more servers rather than making one server bigger.",
    },
  },

  // ── Lesson 12 ─────────────────────────────────────────────────────────────
  {
    title: "S3: Simple Storage Service Fundamentals",
    content:
      "Amazon S3 (Simple Storage Service) is the most widely used AWS service in the world, and for good reason. It is an object storage service that can store any file — images, videos, PDFs, backups, logs, application code — at virtually unlimited scale with 99.999999999% (eleven 9s) durability. That means if you store 10 million files, you can expect to lose less than one file per 10,000 years. Sneha's company stores every customer report, every invoice, every database backup in S3.\n\nS3 organises data into buckets — think of a bucket as a top-level folder with a globally unique name. Inside buckets, you store objects (files) with keys (file paths). An object's key might be invoices/2024/january/client-123.pdf. Objects can range from 0 bytes to 5 TB. Unlike a file system, S3 is flat — there are no real nested folders, just keys that look like paths. S3 automatically replicates every object across at least three Availability Zones, which is why it is so durable.\n\nS3 has multiple storage classes for cost optimisation: S3 Standard for frequently accessed data, S3 Standard-IA (Infrequent Access) for data accessed less than once a month, S3 Glacier for long-term archival at a fraction of the cost. Sneha sets up a lifecycle policy that automatically moves files older than 90 days to S3 Standard-IA and files older than one year to Glacier — reducing storage costs by 70% with zero manual work.",
    funFact:
      "S3 stores over 300 trillion objects and handles millions of requests per second. It has been running since 2006 with zero data durability incidents. The eleven-nines (99.999999999%) durability claim means losing one object in one billion years if you stored one billion objects.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha has audit logs that must be retained for 7 years but are almost never accessed after 90 days. Which S3 storage class is most cost-effective for the older logs?",
      options: [
        "S3 Standard — fastest retrieval",
        "S3 Standard-IA — cheaper for infrequent access",
        "S3 Glacier — lowest cost for archival data",
        "Delete them after 90 days to save money",
      ],
      correctAnswer: "S3 Glacier — lowest cost for archival data",
      explanation:
        "S3 Glacier stores data at $0.004 per GB per month — about 75% cheaper than S3 Standard. Retrieval takes minutes to hours, which is acceptable for rare audit requests. S3 Lifecycle policies automate the transition from Standard to Glacier.",
    },
  },

  // ── Lesson 13 ─────────────────────────────────────────────────────────────
  {
    title: "S3 Buckets: Creating and Configuring Storage",
    content:
      "Rahul creates his first S3 bucket. In the console: navigate to S3 → click 'Create Bucket' → enter a globally unique name like rahul-fresher-hub-demo-2024 (bucket names must be globally unique across ALL AWS accounts) → choose region ap-south-1 (Mumbai) → leave 'Block all public access' ENABLED for now → click Create. Bucket names must be lowercase, 3–63 characters, only letters, numbers, and hyphens — no underscores.\n\nTo upload a file: click the bucket → Upload → drag and drop a file → Upload. The file is now stored with the key matching its filename. Rahul explores the Properties tab: he enables S3 Versioning (keeps every version of every file — vital if someone accidentally overwrites a critical document) and Server-Side Encryption using AWS-managed keys (SSE-S3), which encrypts all objects at rest automatically.\n\nRahul also enables S3 Access Logging to track who accessed what file and when — essential for security audits. He configures a lifecycle rule: move objects older than 30 days to S3 Standard-IA, and objects older than 180 days to Glacier. Finally, he sets up a CloudWatch metric to alert if the bucket storage exceeds 10 GB. These configurations turn a simple bucket into an enterprise-grade storage system in under 15 minutes.",
    funFact:
      "The most expensive S3 mistake ever recorded: an engineer accidentally deleted the wrong S3 bucket containing production data for a SaaS company. It cost 8 hours of downtime and triggered ₹2 crore in losses. S3 Versioning and MFA Delete exist precisely to prevent this.",
    xpReward: 70,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "S3 bucket names must be globally ___ across all AWS accounts worldwide, which is why you often need to include random numbers or your company name in the bucket name.",
      correctAnswer: "unique",
      explanation:
        "Because S3 bucket names form part of the URL (bucket-name.s3.amazonaws.com), they must be globally unique — like domain names. If someone already has rahul-bucket, you cannot create one with the same name.",
    },
  },

  // ── Lesson 14 ─────────────────────────────────────────────────────────────
  {
    title: "S3 Policies and Access Control",
    content:
      "Sneha's marketing team needs to access a specific S3 folder containing product images, but not the invoices folder. Her engineering team needs full access to both. Her external CDN needs to read images publicly. Sneha learns the three layers of S3 access control and how they interact.\n\nIAM Policies define what actions an AWS user or role can perform. Sneha creates an IAM policy that allows s3:GetObject on arn:aws:s3:::company-bucket/products/* and attaches it to the marketing team's IAM group. Now marketing can download product images but get AccessDenied on invoices — without any bucket-level changes.\n\nBucket Policies are JSON documents attached directly to a bucket. They control access at the bucket level, including cross-account access. Sneha adds a Bucket Policy that allows public read access to the /products/public/ folder, enabling the CDN to serve images without authentication: the Principal is set to '*' and the Action is s3:GetObject on that specific path. Bucket ACLs are the older, simpler system — AWS now recommends using Bucket Policies instead. Sneha also enables S3 Object Lock on the invoices bucket to prevent deletion or overwriting for 7 years — a requirement for financial data compliance under Indian law.",
    funFact:
      "A misconfigured S3 bucket caused the biggest data breach at Uber (57 million records) and Capital One (100 million customer records). In both cases, an overly permissive bucket policy or IAM role was exploited. AWS now surfaces misconfigured public buckets in Security Hub as a critical finding.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants the company's product images in S3 to be publicly accessible to anyone on the internet. What is the correct approach?",
      options: [
        "Make the entire bucket public using Block Public Access toggle",
        "Add a Bucket Policy allowing s3:GetObject on the specific products path with Principal set to '*'",
        "Share the AWS account credentials with the CDN",
        "Use an IAM user with public credentials",
      ],
      correctAnswer:
        "Add a Bucket Policy allowing s3:GetObject on the specific products path with Principal set to '*'",
      explanation:
        "A targeted Bucket Policy grants public read access only to the specific path you need, keeping everything else private. This is the principle of least privilege — grant exactly what's needed, nothing more.",
    },
  },

  // ── Lesson 15 ─────────────────────────────────────────────────────────────
  {
    title: "EBS Volumes: Block Storage for EC2",
    content:
      "When Rahul launches an EC2 instance, it comes with a root EBS volume — an Elastic Block Store volume, which is like a virtual hard drive attached to the server. EBS differs fundamentally from S3: EBS is block storage (like a hard drive you mount), while S3 is object storage (like a cloud drive you access via URL). EC2 applications write to EBS like they would write to any local disk — with a file system (ext4, NTFS), direct file reads/writes, and low latency.\n\nEBS volumes have different types with different performance characteristics. gp3 (General Purpose SSD) is the default for most use cases — 3,000 IOPS baseline, good for web servers and databases up to moderate scale. io2 (Provisioned IOPS SSD) offers up to 64,000 IOPS with consistent single-digit millisecond latency — used for high-performance databases like Oracle and SQL Server. st1 (Throughput Optimised HDD) is cheap spinning disk great for log processing and data warehousing.\n\nA key EBS feature: you can take EBS Snapshots — point-in-time backups stored in S3. Sneha's team takes daily snapshots of their production database EBS volume, retaining 7 days of history. If the database gets corrupted, she can restore it to yesterday's state in under 5 minutes. Snapshots are incremental — the first captures everything, subsequent ones capture only changes, making them storage-efficient.",
    funFact:
      "EBS gp3 volumes deliver 3,000 IOPS and 125 MB/s throughput at baseline — and this baseline is free with no additional charge beyond the storage price. You can provision up to 16,000 IOPS on a gp3 for $0.008 per IOPS per month.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's production database on an EC2 instance needs to survive unexpected crashes without data loss. Which EBS strategy ensures quick recovery?",
      options: [
        "Use a large instance type so it never crashes",
        "Take daily EBS Snapshots to S3 and keep 7 days of retention",
        "Store database files in S3 instead of EBS",
        "Enable Auto Scaling on the database instance",
      ],
      correctAnswer:
        "Take daily EBS Snapshots to S3 and keep 7 days of retention",
      explanation:
        "EBS Snapshots are incremental point-in-time backups stored in S3. In case of corruption or accidental deletion, you restore the volume from a snapshot in minutes. This is the standard DR (Disaster Recovery) pattern for EC2-based databases.",
    },
  },

  // ── Lesson 16 ─────────────────────────────────────────────────────────────
  {
    title: "AWS VPC: Your Private Cloud Network",
    content:
      "Arjun's team is setting up a production environment and the architect insists on a proper VPC design before touching any EC2 instances. A VPC (Virtual Private Cloud) is your own isolated private network within AWS. Think of it as building a walled office campus inside the larger AWS city — you control who enters, which buildings talk to which, and what routes lead where.\n\nEvery AWS account gets a default VPC in each Region, but production workloads should use a custom VPC. When creating a VPC, you define a CIDR block — an IP address range like 10.0.0.0/16, which gives you 65,536 private IP addresses to allocate. Resources inside the VPC communicate using these private IPs, completely isolated from other AWS accounts and the internet by default.\n\nVPCs support Peering — connecting two VPCs (even across accounts or Regions) so their resources can communicate privately. Arjun's company has a development VPC and a production VPC. By setting up VPC Peering, the developer tools in dev-VPC can access the logging system in prod-VPC without any traffic leaving AWS's private backbone. AWS PrivateLink takes this further: accessing AWS services like S3 or DynamoDB from within a VPC without traffic traversing the public internet.",
    funFact:
      "A VPC with no Internet Gateway is completely dark to the internet — no inbound, no outbound. Some financial companies run their most sensitive workloads in 'dark VPCs' with no internet connectivity, accessing only other internal AWS services via PrivateLink endpoints.",
    xpReward: 75,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "When creating a VPC, you define a ___ block (e.g., 10.0.0.0/16) which specifies the range of private IP addresses available within your virtual network.",
      correctAnswer: "CIDR",
      explanation:
        "CIDR (Classless Inter-Domain Routing) notation defines IP address ranges. 10.0.0.0/16 means all IPs from 10.0.0.0 to 10.0.255.255 — that's 65,536 addresses. Larger subnets get a smaller suffix number (/8 is bigger than /24).",
    },
  },

  // ── Lesson 17 ─────────────────────────────────────────────────────────────
  {
    title: "Subnets, Internet Gateways, and Route Tables",
    content:
      "Sneha's architect explains the internal wiring of a well-designed VPC. A Subnet is a subdivision of your VPC's IP range, confined to a single Availability Zone. Public subnets have a route to the internet; private subnets do not. The classic three-tier architecture: public subnet (Load Balancer, NAT Gateway), private app subnet (EC2 application servers), private database subnet (RDS databases). Users reach the load balancer, the load balancer reaches the app servers, the app servers reach the database — but the database never touches the internet.\n\nAn Internet Gateway (IGW) is the bridge between your VPC and the public internet. You attach one IGW to your VPC, then add a Route Table entry pointing 0.0.0.0/0 (all internet traffic) to the IGW. Any subnet with this route becomes a public subnet. Subnets without this route are private — instances there cannot receive inbound internet connections.\n\nPrivate subnet instances often need to download software updates from the internet. That is where a NAT Gateway comes in. Placed in a public subnet, the NAT Gateway allows private instances to initiate outbound internet connections (for updates, API calls) while blocking all inbound connections from the internet. Sneha's architecture places NAT Gateways in two AZs for redundancy — if one AZ loses NAT, the private instances in the other AZ still have internet access for outbound traffic.",
    funFact:
      "The standard AWS three-tier VPC architecture — public subnet (IGW), private app subnet, private DB subnet — is so fundamental that AWS provides it as a quick-launch CloudFormation template. Most AWS Well-Architected Framework designs start from this pattern.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants her EC2 app servers (in a private subnet) to download OS updates from the internet, but she does NOT want anyone from the internet to reach those servers directly. What should she use?",
      options: [
        "Attach an Internet Gateway directly to the private subnet",
        "Make the app servers' Security Group allow all inbound traffic",
        "Place a NAT Gateway in a public subnet and route private subnet traffic through it",
        "Assign Elastic IPs to each private instance",
      ],
      correctAnswer:
        "Place a NAT Gateway in a public subnet and route private subnet traffic through it",
      explanation:
        "A NAT Gateway translates private instance IP addresses to its own public IP for outbound traffic, but does NOT allow unsolicited inbound connections. Instances stay private and unreachable from the internet while still being able to make outbound requests.",
    },
  },

  // ── Lesson 18 ─────────────────────────────────────────────────────────────
  {
    title: "Route 53: DNS Management on AWS",
    content:
      "Rahul's web app is running on EC2 but the URL is an ugly IP address like 13.235.45.67. His manager says: 'Get a real domain name and use Route 53.' Route 53 is AWS's highly available, scalable DNS (Domain Name System) service. DNS is the internet's phone book — it translates human-readable domain names (fresherhub.in) into IP addresses that computers understand.\n\nRahul registers fresherhub.in through Route 53 (you can also transfer an existing domain from GoDaddy or Namecheap). He creates a Hosted Zone for the domain, which is a container for all DNS records. Then he creates an A record: fresherhub.in → 13.235.45.67. Now anyone typing fresherhub.in in a browser reaches Rahul's EC2 instance. DNS propagation takes 1–48 hours globally.\n\nRoute 53's advanced features make it indispensable for production. Routing Policies allow sophisticated traffic management: Simple (one IP), Weighted (70% to v2 servers, 30% to v1 — perfect for gradual rollouts), Latency-based (route each user to the closest Region), Failover (if primary EC2 fails health check, automatically route to backup EC2), and Geolocation (route Indian users to Mumbai, US users to Virginia). Rahul configures a Failover policy with a CloudWatch health check — if his primary server goes down, traffic automatically switches to a standby in under 60 seconds.",
    funFact:
      "Route 53's name is a clever pun: DNS resolves to port 53, and Route 66 is the famous American highway. AWS combined both into Route 53 — the 'highway' of internet routing on port 53.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to gradually shift traffic from his old server (v1) to his new server (v2), starting with 10% to v2 and increasing over weeks. Which Route 53 routing policy does this?",
      options: [
        "Latency-based routing",
        "Geolocation routing",
        "Weighted routing",
        "Failover routing",
      ],
      correctAnswer: "Weighted routing",
      explanation:
        "Weighted routing lets you split traffic by percentage across multiple records. You can set 10% to v2, verify it works, then gradually increase to 50%, 90%, 100% — this is called a canary deployment or gradual rollout.",
    },
  },

  // ── Lesson 19 ─────────────────────────────────────────────────────────────
  {
    title: "CloudFront: Content Delivery Network",
    content:
      "Priya's e-commerce site is slow for users in Delhi, Chennai, and Hyderabad even though the server is in Mumbai. The problem: every user request travels to Mumbai and back, adding 50–100ms per request. For image-heavy pages this adds seconds. CloudFront solves this by caching content at AWS Edge Locations — there are over 400 edge locations globally, including in Delhi, Chennai, Hyderabad, Bangalore, and Mumbai.\n\nSetting up CloudFront: Create a CloudFront Distribution → Origin = your S3 bucket (for static assets) or EC2/ALB (for dynamic content) → CloudFront generates a URL like d3example123.cloudfront.net. When a user in Hyderabad requests an image, CloudFront checks if it has that image cached at the Hyderabad edge location. If yes (cache hit), it serves it locally — zero trip to Mumbai. If no (cache miss), it fetches from Mumbai, caches it, and serves it — future requests are fast.\n\nCloudFront handles much more than simple caching. It provides HTTPS with free TLS certificates via AWS Certificate Manager. It blocks malicious requests via AWS WAF (Web Application Firewall) integration. It supports Lambda@Edge — running serverless code at the edge to personalise responses, perform A/B testing, or rewrite URLs without going back to origin. Priya's page load times drop from 3.2 seconds to 0.8 seconds after CloudFront, and her S3 bandwidth costs drop 60% because CloudFront serves cached content instead of S3 repeatedly.",
    funFact:
      "AWS CloudFront serves over 100 trillion requests per month globally. When you watch Prime Video, access the AWS Console, or use Twitch, you're being served by CloudFront. It's one of the most trafficked CDNs on Earth.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's users in Chennai are downloading a 5 MB product catalogue PDF frequently. With CloudFront, where does the file come from after the first request from Chennai?",
      options: [
        "Always from the origin S3 bucket in Mumbai",
        "From the Chennai edge location cache — no round trip to Mumbai needed",
        "From another user's browser cache",
        "From a database in us-east-1",
      ],
      correctAnswer:
        "From the Chennai edge location cache — no round trip to Mumbai needed",
      explanation:
        "After the first request (cache miss), CloudFront stores the PDF at the Chennai edge location. All subsequent requests from Chennai users are served locally from that edge cache until the TTL (Time To Live) expires. This dramatically reduces latency and origin server load.",
    },
  },

  // ── Lesson 20 ─────────────────────────────────────────────────────────────
  {
    title: "Elastic Load Balancer: Distributing Traffic",
    content:
      "Arjun's web app runs on three EC2 instances behind an Elastic Load Balancer (ELB). When a user visits the website, they hit the Load Balancer's single DNS name, which distributes requests across all healthy instances using round-robin by default. The Load Balancer continuously performs health checks — sending an HTTP request to /health every 30 seconds. If an instance fails to respond, ELB stops sending it traffic and AWS CloudWatch triggers an alert.\n\nAWS offers three load balancer types. Application Load Balancer (ALB) operates at Layer 7 (HTTP/HTTPS) — it can make routing decisions based on URL path, host headers, or query strings. Arjun configures path-based routing: requests to /api/* go to the API server target group, requests to /* go to the frontend server target group. This single ALB replaces what previously required two separate load balancers.\n\nNetwork Load Balancer (NLB) operates at Layer 4 (TCP/UDP) and handles millions of requests per second with ultra-low latency — it is used for real-time gaming, financial trading systems, and IoT platforms. Gateway Load Balancer (GWLB) is specialised for routing traffic through third-party security appliances. For 90% of web applications, ALB is the right choice. Sneha configures Sticky Sessions on the ALB so each user always reaches the same backend instance during their session — important for apps that store session data in memory rather than a shared database.",
    funFact:
      "AWS ELB automatically scales its own capacity to handle traffic spikes — you never have to provision the load balancer itself. During Amazon Prime Day 2023, ELB processed over 600 million requests per minute across AWS's global infrastructure.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun wants requests to /api/* to go to his API servers and requests to /static/* to go to CloudFront-backed S3. Which load balancer type supports URL path-based routing?",
      options: [
        "Network Load Balancer (NLB) — fastest performance",
        "Classic Load Balancer (CLB) — oldest, most features",
        "Application Load Balancer (ALB) — Layer 7 path-based routing",
        "Gateway Load Balancer (GWLB) — security focused",
      ],
      correctAnswer:
        "Application Load Balancer (ALB) — Layer 7 path-based routing",
      explanation:
        "ALB works at Layer 7 (application layer) and can inspect HTTP headers, paths, and host names. Path-based routing rules like 'forward /api/* to backend target group' are a core ALB feature, allowing one load balancer to replace multiple specialised ones.",
    },
  },

  // ── Lesson 21 ─────────────────────────────────────────────────────────────
  {
    title: "RDS: Managed Relational Database Service",
    content:
      "Priya used to manage a MySQL database on an EC2 instance. She was responsible for patching MySQL versions, tuning OS parameters, managing backups, handling replication — it consumed 30% of her working week. Then she migrated to Amazon RDS (Relational Database Service) and reclaimed all that time. RDS is a fully managed relational database service: AWS handles patching, backups, replication, and hardware replacement. You just manage your data.\n\nRDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora. Aurora is AWS's own MySQL/PostgreSQL-compatible engine, designed from scratch for the cloud — it is 5x faster than standard MySQL, automatically replicates across 3 AZs with 6 copies of data, and auto-scales storage up to 128 TB. Most new AWS projects use Aurora for its reliability and performance.\n\nRDS Multi-AZ deployment creates a standby replica in a different AZ. If the primary database fails (hardware issue, AZ outage), RDS automatically fails over to the standby in 60–120 seconds — no human intervention needed. Read Replicas allow offloading read-heavy queries (reports, analytics) to up to 15 replica instances, keeping the primary database fast for write operations. Priya's team creates a Read Replica specifically for the analytics team to run heavy SQL reports, ensuring the production database stays snappy for real users.",
    funFact:
      "Amazon Aurora's storage automatically grows in 10 GB increments up to 128 TB. It also continuously backs up data to S3 in real time — you can restore to any second in the past 35 days. Traditional databases require you to plan storage capacity months in advance.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's RDS MySQL primary instance fails due to a hardware issue. With Multi-AZ enabled, what happens?",
      options: [
        "The database is gone until Priya manually restores a backup",
        "RDS automatically fails over to the standby replica in 60–120 seconds",
        "All connected applications lose data permanently",
        "AWS sends an email and waits for manual approval before failover",
      ],
      correctAnswer:
        "RDS automatically fails over to the standby replica in 60–120 seconds",
      explanation:
        "Multi-AZ maintains a synchronous standby replica in another AZ. When the primary fails, RDS detects it and automatically promotes the standby to primary, updating the DNS endpoint. Applications reconnect automatically — minimal downtime, zero data loss.",
    },
  },

  // ── Lesson 22 ─────────────────────────────────────────────────────────────
  {
    title: "Setting Up RDS MySQL in AWS",
    content:
      "Rahul sets up a managed MySQL database for his application step by step. In the AWS Console: navigate to RDS → Create Database → choose Standard create → engine MySQL 8.0 → template Dev/Test (for free tier use Db.t3.micro). Under 'Availability and Durability', select Multi-AZ for production or Single DB Instance for dev. Set the Master username (admin) and a strong password (store it in AWS Secrets Manager — never hardcode in code).\n\nFor instance configuration, choose db.t3.micro (free tier eligible — 2 vCPU, 1 GB RAM). Storage: 20 GB gp2 SSD, enable storage autoscaling up to 100 GB. Connectivity: select your VPC → choose the private subnet group (database should NEVER be in a public subnet) → create a new Security Group that allows port 3306 only from your app server's Security Group. Set Initial database name: fresherhub_db.\n\nAfter 5 minutes the status shows 'Available'. Rahul copies the endpoint: fresherhub-db.xxxxx.ap-south-1.rds.amazonaws.com. He connects from his EC2 app server: mysql -h fresherhub-db.xxxxx.ap-south-1.rds.amazonaws.com -u admin -p. He creates tables, inserts data, and sees it all persist — RDS is automatically taking a daily backup to S3 with 7 days retention, just as configured. Rahul never has to think about database maintenance again.",
    funFact:
      "AWS Secrets Manager automatically rotates RDS database passwords on a schedule you define. It updates the password in both Secrets Manager and the RDS instance, and automatically updates your application's connection string — zero downtime password rotation.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul is configuring his RDS MySQL instance. In which subnet should the database be placed?",
      options: [
        "Public subnet — easier to connect from anywhere",
        "Private subnet — database should never be directly accessible from the internet",
        "The same subnet as the Load Balancer",
        "No subnet is needed for RDS",
      ],
      correctAnswer:
        "Private subnet — database should never be directly accessible from the internet",
      explanation:
        "Databases should always live in private subnets with no route to the internet. Only your application servers (in private app subnets) should be able to reach the database. This prevents direct database attacks from the internet.",
    },
  },

  // ── Lesson 23 ─────────────────────────────────────────────────────────────
  {
    title: "DynamoDB: AWS NoSQL Database",
    content:
      "Sneha's team needs to store user activity events — every button click, page view, and lesson completion from potentially millions of users. A relational database would struggle with this write volume and schema-less nature. Enter DynamoDB, AWS's fully managed NoSQL database built for massive scale and single-digit millisecond performance at any size.\n\nDynamoDB stores data as items (rows) in tables. Each item is a JSON-like document. Instead of rigid column schemas, each item can have different attributes. The only required attribute is the Primary Key — either a simple Partition Key or a composite Partition Key + Sort Key. Sneha's user_events table uses userId as Partition Key and eventTimestamp as Sort Key — she can query all events for a user ordered by time with a single API call.\n\nDynamoDB pricing has two modes: On-Demand (pay per request, no capacity planning — great for unpredictable traffic) and Provisioned (specify read/write capacity units upfront for predictable workloads at lower cost). DynamoDB Streams capture a chronological log of item-level changes — perfect for triggering Lambda functions when a new user event is written. DynamoDB Global Tables replicate data to multiple AWS Regions in under a second — Sneha's app serves Indian users from Mumbai and US users from Virginia with local-latency reads.",
    funFact:
      "Amazon.com's shopping cart runs on DynamoDB. During Prime Day 2023, DynamoDB processed 126 million requests per second at peak. Its architecture was inspired by Amazon's internal 'Dynamo' paper, which influenced the entire NoSQL movement.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants to query all events for a specific user (userId = 'u123') sorted by time. Which DynamoDB key design enables this query efficiently?",
      options: [
        "userId as Partition Key only — sort key is unnecessary",
        "eventTimestamp as Partition Key and userId as Sort Key",
        "userId as Partition Key and eventTimestamp as Sort Key",
        "Use a Global Secondary Index on every attribute",
      ],
      correctAnswer: "userId as Partition Key and eventTimestamp as Sort Key",
      explanation:
        "DynamoDB stores all items with the same Partition Key together, sorted by Sort Key. Setting userId as Partition Key means all events for that user are co-located. The Sort Key eventTimestamp enables time-sorted queries with KeyConditionExpression.",
    },
  },

  // ── Lesson 24 ─────────────────────────────────────────────────────────────
  {
    title: "ElastiCache: In-Memory Caching",
    content:
      "Arjun's e-commerce API queries the database for the product catalogue on every request. The catalogue barely changes — maybe once a day when new products are added — yet every page load fires an expensive SQL SELECT with 10 table JOINs. During a sale, this floods the RDS instance and causes query timeouts. Arjun implements ElastiCache to solve this.\n\nAWS ElastiCache is a fully managed in-memory caching service supporting two engines: Redis and Memcached. In-memory means data lives in RAM, not disk — making reads 100x faster than database queries. The pattern is simple: application checks cache first; if the data is there (cache hit), return it immediately; if not (cache miss), query the database, store the result in cache with an expiry time, then return it. Arjun caches the product catalogue JSON for 1 hour with a TTL (Time To Live) of 3600 seconds.\n\nRedis is far more capable than simple caching. It supports data structures like sorted sets (perfect for leaderboards and ranking), pub/sub messaging, and Lua scripting. Sneha uses Redis sorted sets for the IT Fresher Hub leaderboard — she runs ZADD leaderboard 1450 user123 to update a score, and ZRANGE leaderboard 0 9 WITHSCORES to get the top 10 users instantly without any database query. ElastiCache Redis in Cluster Mode automatically shards data across multiple nodes, handling billions of operations per second.",
    funFact:
      "Twitter uses Redis to power its timeline feature. Every time someone you follow tweets, Redis updates your personalised timeline in real time. Twitter's Redis cluster handles over 1 billion reads per day — all from RAM, never touching a database.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's product catalogue API is slow because it queries the database on every call. With ElastiCache, what determines how long the cached catalogue is served before the database is queried again?",
      options: [
        "Cache size limit — larger cache means longer retention",
        "TTL (Time To Live) — a configurable expiry time per cached item",
        "Number of active users",
        "The RDS instance type",
      ],
      correctAnswer:
        "TTL (Time To Live) — a configurable expiry time per cached item",
      explanation:
        "TTL is a duration in seconds after which a cache entry expires and is deleted. Setting TTL=3600 means the catalogue is served from cache for 1 hour, then the next request refreshes it from the database. This balances freshness and performance.",
    },
  },

  // ── Lesson 25 ─────────────────────────────────────────────────────────────
  {
    title: "AWS Lambda: Serverless Functions",
    content:
      "Priya has a Python script that resizes uploaded images to thumbnail size. Previously it ran on a dedicated EC2 instance that sat idle 98% of the time but still cost ₹800/month. She rewrites it as an AWS Lambda function and the cost drops to near zero. Lambda is AWS's serverless compute service — you provide a function (Python, Node.js, Java, Go, or any language via custom runtime), and Lambda runs it in response to an event. You pay only for the milliseconds your function executes.\n\nLambda's pricing: 1 million invocations per month are FREE. Beyond that, $0.20 per million requests. Memory ranges from 128 MB to 10 GB. If execution time is 200ms on average, you get 5,000 executions per second per Lambda for a function configured with 1 GB RAM — at near-zero cost. Lambda automatically scales: if 10,000 images are uploaded simultaneously, Lambda runs 10,000 parallel copies of the function without any configuration.\n\nThe Lambda execution model: an event triggers the function (S3 upload, API call, DynamoDB stream, CloudWatch schedule). Lambda provisions a micro-container, runs your code, returns the result, and destroys the container. Cold start (first invocation) takes 100ms–1s depending on runtime. Warm starts (subsequent invocations within minutes) are near-instant. Priya's image processor: S3 triggers Lambda when a new image is uploaded → Lambda reads the image → resizes it → writes the thumbnail back to S3 → done. Total cost per 100,000 images processed: under ₹5.",
    funFact:
      "The largest Lambda function deployment is at Capital One, which runs over 500 Lambda functions in production, processing millions of transactions per day. Moving from EC2 to Lambda saved them over $1 million in annual infrastructure costs.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's Lambda function resizes images. The function runs for 350ms on average and is invoked 2 million times per month. What is the approximate monthly cost for invocations?",
      options: [
        "Same as an EC2 instance running 24/7",
        "Approximately $0.20 — 1 million invocations are free, next million cost $0.20",
        "Free — Lambda is always free regardless of volume",
        "₹5,000 — serverless is always expensive",
      ],
      correctAnswer:
        "Approximately $0.20 — 1 million invocations are free, next million cost $0.20",
      explanation:
        "AWS Lambda's free tier includes 1 million requests/month. The next million at $0.20 per million = approximately $0.20 for invocation costs alone. Duration costs add a tiny amount based on memory and execution time. Total is a fraction of what an EC2 instance costs.",
    },
  },

  // ── Lesson 26 ─────────────────────────────────────────────────────────────
  {
    title: "API Gateway: Building Serverless APIs",
    content:
      "Rahul wants to build a REST API for his mobile app. Traditionally this means an EC2 server running Express.js — always on, always costing money. Rahul's senior shows him a better way: Amazon API Gateway + Lambda. API Gateway is a fully managed service that creates, publishes, secures, and monitors APIs at any scale. It sits in front of Lambda functions, receiving HTTP requests and routing them to the right function.\n\nRahul creates an API: GET /users → triggers getUsersLambda, POST /users → triggers createUserLambda, GET /lessons/{id} → triggers getLessonLambda. API Gateway handles authentication (AWS Cognito integration, API keys, or custom Lambda authorisers), rate limiting (throttle to 1000 requests per second per client), caching (cache responses for 60 seconds to reduce Lambda invocations), and CORS headers automatically.\n\nThe serverless API architecture has remarkable economics. Rahul's API handles 5 million requests per month. EC2 cost estimate: ₹3,000/month for a t3.small running 24/7. API Gateway + Lambda: API Gateway charges $3.50 per million requests = $17.50, plus Lambda compute ≈ $2 = total $19.50 or about ₹1,600/month — 47% cheaper, and it scales to 100 million requests without any configuration changes. At low traffic (a new project), it's essentially free.",
    funFact:
      "Serverless was coined by Ken Fromm and Jesse Robbins in 2012 but popularised by AWS Lambda in 2014. The term is a misnomer — there are absolutely servers; you just don't manage them. Some engineers prefer 'serverless for the developer' to clarify the concept.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's API is getting abuse — a single IP is sending 5000 requests per second and crashing his Lambda functions. Which API Gateway feature protects against this?",
      options: [
        "SSL Certificates — encrypts traffic",
        "Stage variables — different configs per environment",
        "Throttling — rate limit requests per second per client",
        "Mock integration — returns fake responses",
      ],
      correctAnswer: "Throttling — rate limit requests per second per client",
      explanation:
        "API Gateway throttling sets request rate limits. You can configure account-level throttling (10,000 req/s default) and per-method throttling. Burst limits handle temporary spikes. Requests exceeding the limit receive a 429 Too Many Requests response, protecting your Lambda functions.",
    },
  },

  // ── Lesson 27 ─────────────────────────────────────────────────────────────
  {
    title: "SQS and SNS: Message Queues and Notifications",
    content:
      "Sneha's order processing system has a problem: when a user places an order, the app must simultaneously send a confirmation email, update inventory, notify the warehouse, and generate an invoice. Calling all these services synchronously makes the checkout API slow and fragile — if the invoice service is down, the entire checkout fails. Sneha decouples the system with SQS.\n\nAmazon SQS (Simple Queue Service) is a managed message queue. Instead of calling services directly, the checkout API puts a message into an SQS queue: 'New order: {orderId: 12345, items: [...]}'. Each downstream service (email, inventory, warehouse, invoice) reads messages from the queue independently and processes them at its own pace. If the invoice service is down, messages accumulate in the queue and are processed when it recovers — no orders are lost. This is asynchronous, decoupled architecture.\n\nAmazon SNS (Simple Notification Service) is a pub/sub system — one message goes to many subscribers simultaneously. Sneha sends an 'order_placed' event to an SNS Topic. The email service, inventory service, and warehouse service all subscribe to that topic. When one SNS message is published, all three receive it simultaneously — like a group broadcast. SQS is point-to-point (producer to one queue); SNS is broadcast (one message to many destinations). The combination SNS → multiple SQS queues is the standard fan-out pattern: SNS broadcasts to several SQS queues, each read by a different service.",
    funFact:
      "Amazon SQS was the first AWS service ever launched, in November 2004 — two years before EC2. It was created to decouple Amazon's own shopping cart from its order processing system after a traffic spike crashed both simultaneously.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha's order event needs to simultaneously trigger an email service, inventory service, and warehouse service. Which architecture is most efficient?",
      options: [
        "Separate SQS queue for each service with the checkout directly writing to all three",
        "SNS Topic with SQS queues subscribed — checkout sends one SNS message, all three services receive it",
        "A single Lambda function that calls all three services sequentially",
        "Direct HTTP calls from checkout to all three services simultaneously",
      ],
      correctAnswer:
        "SNS Topic with SQS queues subscribed — checkout sends one SNS message, all three services receive it",
      explanation:
        "The SNS fan-out pattern is the standard for broadcasting one event to multiple consumers. The checkout publishes one message to SNS, which fans out to subscribed SQS queues. Each service processes its queue independently — fully decoupled, no single point of failure.",
    },
  },

  // ── Lesson 28 ─────────────────────────────────────────────────────────────
  {
    title: "AWS IAM: Identity and Access Management",
    content:
      "Arjun is the AWS account admin for his team of 12 developers and 3 testers. He needs to ensure developers can deploy code but cannot delete production databases, testers can view CloudWatch logs but cannot launch EC2 instances, and the CI/CD pipeline can write to S3 but not touch IAM. IAM (Identity and Access Management) is how he achieves this fine-grained control.\n\nIAM has four key components. Users are individual people with credentials. Groups are collections of users — Arjun creates a Developers group with deployment permissions and adds all developer users to it. Roles are identities for AWS services (not people) — the EC2 app server assumes a Role that allows writing to a specific S3 bucket; the Lambda function assumes a Role that allows reading from DynamoDB. Policies are JSON documents defining what actions on which AWS resources are allowed or denied. Arjun attaches AWS-managed policies to groups for common scenarios and writes custom policies for specific needs.\n\nThe principle of least privilege is the golden rule of IAM: grant only the minimum permissions needed for the job. Arjun's Lambda function only needs s3:PutObject on the specific thumbnails bucket — he does NOT give it full S3 access. IAM Access Analyser continuously scans all IAM policies and flags any that grant unused or overly permissive access. IAM Credential Reports list all users and their last activity — Arjun rotates any credentials unused for 90 days.",
    funFact:
      "Over 80% of AWS security incidents are caused by misconfigured IAM policies or leaked credentials, not infrastructure vulnerabilities. The AWS Shared Responsibility Model says AWS secures the infrastructure; you are responsible for IAM configuration. Most breaches happen in your half.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun's Lambda function needs to write thumbnail images to an S3 bucket. Following least privilege, which IAM permission should the Lambda Role have?",
      options: [
        "AdministratorAccess — easiest to configure",
        "AmazonS3FullAccess — covers all S3 operations",
        "s3:PutObject on arn:aws:s3:::thumbnails-bucket/* only",
        "IAMFullAccess — allows creating its own permissions",
      ],
      correctAnswer: "s3:PutObject on arn:aws:s3:::thumbnails-bucket/* only",
      explanation:
        "Least privilege means granting exactly what's needed, nothing more. The Lambda only needs to write (PutObject) to one specific bucket. Broader permissions create attack surface — if the Lambda is compromised, an attacker can only write to one bucket, not destroy everything.",
    },
  },

  // ── Lesson 29 ─────────────────────────────────────────────────────────────
  {
    title: "CloudWatch: Monitoring Your AWS Resources",
    content:
      "Sneha wakes up to find her application has been slow for 3 hours — users are complaining and the on-call team is scrambling. The culprit: a memory leak in the application caused EC2 RAM to fill up, but no one knew because there was no monitoring. Sneha spends the next day setting up CloudWatch so this never happens again.\n\nAmazon CloudWatch is AWS's native monitoring and observability service. It automatically collects metrics from all AWS services — EC2 CPU, RDS connections, Lambda errors, SQS queue depth, ELB request count — every 5 minutes for free, every 1 minute with detailed monitoring. Sneha creates CloudWatch Alarms: alert when EC2 CPU > 80% for 5 minutes, alert when RDS connections > 80 for 2 minutes, alert when Lambda error rate > 1% for 10 minutes. Alarms notify via SNS topic → email to on-call engineer.\n\nCloudWatch Logs aggregate logs from all services. Lambda automatically sends function output to CloudWatch Logs. Sneha installs the CloudWatch Logs Agent on EC2 instances to stream application logs. She creates a Log Metric Filter that counts occurrences of 'ERROR' in the logs and creates an alarm when errors exceed 10 per minute. CloudWatch Dashboards give her a single-pane view — CPU, memory (needs custom metrics), request counts, error rates, latency — all on one screen. When the memory leak reappears next month, her alarm fires within 5 minutes.",
    funFact:
      "CloudWatch can store metrics for 15 months, allowing year-over-year capacity planning. The average large AWS customer has over 10,000 CloudWatch metrics and 500 alarms. CloudWatch processes over 3 trillion metric data points per day across all AWS customers.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha wants an automatic email alert when her EC2 instance CPU stays above 85% for more than 5 minutes. Which AWS services does she use together?",
      options: [
        "CloudTrail + S3",
        "CloudWatch Alarm + SNS Topic",
        "Config + Lambda",
        "Inspector + SQS",
      ],
      correctAnswer: "CloudWatch Alarm + SNS Topic",
      explanation:
        "CloudWatch Alarm watches a metric (EC2 CPUUtilization) with a threshold and evaluation period. When the alarm triggers, it sends a notification to an SNS Topic, which delivers the email to subscribed addresses. This is the standard alerting pattern on AWS.",
    },
  },

  // ── Lesson 30 ─────────────────────────────────────────────────────────────
  {
    title: "AWS CodePipeline: CI/CD on AWS",
    content:
      "Rahul's team deploys new code by manually SSHing into EC2, pulling from Git, and restarting the server. This works when they're three developers but fails at ten — someone always forgets a step, deploys to the wrong server, or skips testing. His tech lead introduces AWS CodePipeline, a fully managed CI/CD service that automates the entire software delivery process.\n\nCodePipeline has stages: Source → Build → Test → Deploy. Source stage: CodePipeline monitors a GitHub repository; when Rahul pushes to the main branch, the pipeline triggers automatically. Build stage: AWS CodeBuild compiles the code, runs unit tests, and packages the application. If tests fail, the pipeline stops and sends an alert — bad code never reaches production. Test stage: run integration tests against a staging environment. Deploy stage: AWS CodeDeploy pushes the new version to EC2 instances using a Blue/Green deployment — spin up new instances with the new code, route 10% of traffic, verify metrics, then shift 100%.\n\nThe business value is enormous. Before CodePipeline, Rahul's team deployed once a week, taking 2 hours of manual work and causing a 10-minute downtime. After CodePipeline, they deploy 5 times a day in under 10 minutes with zero downtime. Bugs get fixed in hours instead of days. AWS CodeArtifact stores npm/Maven/pip packages privately so builds don't pull from the public internet — faster builds, reproducible builds.",
    funFact:
      "Amazon (the company) deploys code to production on average every 11.7 seconds — that's over 50 million deployments per year. This is only possible because of automated CI/CD pipelines. Continuous deployment at this scale would be literally impossible with manual processes.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's CodePipeline runs unit tests in the Build stage. A developer pushed code with a failing test. What should the pipeline do?",
      options: [
        "Deploy to production anyway and monitor for issues",
        "Stop the pipeline, notify the team, and wait for a fix before proceeding",
        "Skip the test stage and go straight to production",
        "Automatically fix the code using AI",
      ],
      correctAnswer:
        "Stop the pipeline, notify the team, and wait for a fix before proceeding",
      explanation:
        "A failing test means potentially broken code. The pipeline should gate on test results — stop, notify the developer via SNS email, and prevent deployment until the issue is fixed. This is the core value of CI: catch bugs before they reach users.",
    },
  },

  // ── Lesson 31 ─────────────────────────────────────────────────────────────
  {
    title: "AWS Cost Explorer: Managing Your Cloud Bill",
    content:
      "Sneha receives an AWS bill for ₹45,000 last month — ₹12,000 higher than expected. Her manager wants a breakdown immediately. She opens AWS Cost Explorer, the native tool for visualising, understanding, and forecasting AWS costs. Cost Explorer shows cost by service: EC2 ₹18,000, RDS ₹9,000, NAT Gateway ₹7,000, Data Transfer ₹6,000, CloudFront ₹3,000, Others ₹2,000. The NAT Gateway cost is suspicious — that's 600 GB of data processed.\n\nSneha drills into the NAT Gateway charges and discovers that an EC2 batch job is downloading 600 GB of public S3 data through the NAT Gateway every day, incurring data processing charges at $0.045/GB. The fix: configure the job to use an S3 VPC Endpoint — traffic from EC2 to S3 within the same Region is free when it uses a VPC Endpoint instead of routing through the NAT Gateway. Monthly savings: ₹7,000.\n\nAWS Cost Anomaly Detection uses machine learning to automatically detect unusual spending spikes and emails Sneha when her bill deviates from expected patterns. AWS Budgets lets her set budget alerts: email when monthly spend exceeds ₹35,000. AWS Trusted Advisor scans the account and flags cost optimisation opportunities — idle EC2 instances, underutilised Reserved Instances, old snapshots — like having a free AWS consultant running continuously. Sneha implements all recommendations and reduces the monthly bill by 28%.",
    funFact:
      "The average enterprise wastes 35% of their cloud budget on idle resources, oversized instances, and forgotten services. Cloud cost management is a dedicated career track — FinOps (Cloud Financial Operations) — with dedicated certifications and six-figure salaries.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha's EC2 instances are transferring large amounts of data to S3 via NAT Gateway, incurring high data processing charges. What is the free alternative?",
      options: [
        "Move the EC2 instances to a public subnet",
        "Use an S3 VPC Endpoint — traffic stays within AWS backbone with no data processing charges",
        "Use CloudFront to cache all S3 data",
        "Compress all data before transferring",
      ],
      correctAnswer:
        "Use an S3 VPC Endpoint — traffic stays within AWS backbone with no data processing charges",
      explanation:
        "An S3 VPC Gateway Endpoint allows EC2 instances in private subnets to access S3 directly over AWS's internal network, bypassing the NAT Gateway entirely. There is no charge for this endpoint, and you eliminate the NAT Gateway data processing fee.",
    },
  },

  // ── Lesson 32 ─────────────────────────────────────────────────────────────
  {
    title: "AWS Certifications: Which One Gets You Hired",
    content:
      "Arjun passed the AWS Solutions Architect Associate exam three months ago and has since received 8 interview calls from companies he never applied to. Recruiters search LinkedIn for AWS certification holders, and it's the most searched cloud certification keyword in Indian IT job postings. Understanding the AWS certification roadmap helps you plan your career investment wisely.\n\nThe AWS certification hierarchy has three levels: Foundational, Associate, and Professional. AWS Cloud Practitioner (Foundational) is a broad overview — 90-minute exam, no hands-on required, validates basic cloud literacy. Useful for non-technical roles (sales, project managers) but not a differentiator for technical hiring. The real career accelerators are the Associate certs: Solutions Architect Associate (SAA-C03) — the most popular cert worldwide, focuses on designing resilient, cost-effective architectures; Developer Associate — for building cloud-native applications; and SysOps Administrator Associate — for operations and deployments.\n\nFor seniors and leads: Solutions Architect Professional (the hardest AWS cert, 3 hours, highly respected), DevOps Engineer Professional. Specialty certs target niches: Database Specialty, Security Specialty, Machine Learning Specialty, Advanced Networking. Arjun's recommendation: start with Cloud Practitioner to understand the landscape, then immediately pursue Solutions Architect Associate. Study resources: AWS Skill Builder (free), Stephane Maarek's Udemy course (₹500 on sale), and practice exams by Jon Bonso. Budget 2–3 months of 1 hour/day study. Exam cost: $150 (approx ₹12,500).",
    funFact:
      "AWS certification holders earn on average 26% more than non-certified peers in the same role, according to Global Knowledge's IT Skills and Salary Report. In India, a Solutions Architect Associate certification typically adds ₹2–5 lakh to annual CTC during job changes.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Arjun is a fresher who wants to become a cloud engineer. Which AWS certification should he pursue first to maximise interview call chances?",
      options: [
        "AWS Solutions Architect Professional — most respected",
        "AWS Machine Learning Specialty — AI is trending",
        "AWS Solutions Architect Associate — most popular cert, highest job posting demand",
        "AWS Cloud Practitioner — easiest to pass",
      ],
      correctAnswer:
        "AWS Solutions Architect Associate — most popular cert, highest job posting demand",
      explanation:
        "SAA-C03 is the most in-demand AWS certification in Indian job postings. It covers core services (EC2, S3, RDS, VPC, Lambda) and architectural best practices. It's challenging enough to be respected but achievable for freshers with 2–3 months of focused preparation.",
    },
  },

  // ── Lesson 33 ─────────────────────────────────────────────────────────────
  {
    title: "AWS in Indian IT Companies: Real Use Cases",
    content:
      "Priya joins Infosys's AWS practice team and gets exposure to real client projects. She sees how India's largest IT companies use AWS across industries. Banking: HDFC Bank uses AWS for its real-time fraud detection system — ML models on SageMaker analyse every transaction in under 100ms, flagging suspicious patterns before they complete. The system processes 2 crore transactions daily. Previously this ran on expensive on-premise hardware that took 6 months to upgrade; on AWS, the ML team deploys new models in hours.\n\nE-commerce: Meesho (India's fastest-growing social commerce platform) runs entirely on AWS, using EC2 Auto Scaling and RDS Aurora for their catalogue and order management. During their BBD (Big Billion Days) equivalent sale, they scale from 500 to 2,000 EC2 instances automatically within minutes. Their data engineering team uses AWS Glue (managed ETL), S3 (data lake), and Redshift (data warehouse) to analyse seller performance and buyer behaviour across 50+ crore product interactions daily.\n\nHealthcare: Apollo Hospitals uses AWS for their patient health record management system — all records encrypted in S3 with compliance to India's DPDP Act, accessed by doctors across 70 hospitals via a CloudFront-served web app. Startup story: Zepto (10-minute grocery delivery) scaled from 0 to 1 million orders/day in 18 months using AWS Lambda and DynamoDB for their real-time inventory and order routing system — infrastructure costs scaled linearly with revenue, something impossible with on-premise hardware.",
    funFact:
      "India is one of AWS's fastest-growing markets. In 2023, AWS announced a $12.7 billion investment in India cloud infrastructure over 15 years, including expanding the Mumbai Region and opening a new Region in Hyderabad. This creates thousands of direct cloud jobs in India.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's client (a bank) needs to detect fraud in real time for each transaction, with results in under 100ms. Which AWS service combination makes this possible?",
      options: [
        "RDS MySQL with complex stored procedures",
        "SageMaker for ML model deployment + Lambda for real-time inference",
        "EC2 running a Python script on a cron job every minute",
        "S3 storing transaction logs for batch analysis",
      ],
      correctAnswer:
        "SageMaker for ML model deployment + Lambda for real-time inference",
      explanation:
        "SageMaker deploys trained ML models as endpoints. Lambda invokes the SageMaker endpoint for each transaction and gets a fraud score in milliseconds. This serverless ML inference pattern handles millions of transactions with consistent sub-100ms latency.",
    },
  },

  // ── Lesson 34 ─────────────────────────────────────────────────────────────
  {
    title: "AWS Free Tier Best Practices",
    content:
      "Rahul has been using his AWS Free Tier for two months when he notices a ₹600 charge on his account. He panics and investigates. The culprit: he left a NAT Gateway running that he created for an experiment ($0.045/hour = ₹108/day). AWS Free Tier does NOT cover NAT Gateways, Elastic IPs attached to stopped instances, or data transfer charges. Knowing exactly what is and isn't free prevents nasty surprises.\n\nFree Tier categories: 12-months free (from account creation date) — t2.micro/t3.micro EC2 (750 hours/month), 30 GB EBS, 5 GB S3, 750 hours RDS t2.micro/t3.micro MySQL/PostgreSQL, 50 GB CloudFront data. Always free (no expiry) — 1 million Lambda requests/month, 25 GB DynamoDB, 10 GB Glacier. NOT free at all: NAT Gateways ($0.045/hour + data), Elastic IPs on stopped instances, Data Transfer out to internet (first GB/month free, then $0.09/GB), Route 53 ($0.50/hosted zone/month).\n\nRahul's prevention checklist: 1. Set a Budget alert at $10/month — AWS emails him if charges approach this. 2. Install the AWS Billing widget on his console home screen to see daily charges. 3. After every experiment, terminate EC2 instances (don't just stop — stopped instances still hold EBS), release Elastic IPs, and delete NAT Gateways. 4. Check the Cost Explorer daily during learning. 5. Use AWS Nuke (open-source tool) to clean up an entire account's resources with one command when an experiment is complete.",
    funFact:
      "The most common Free Tier budget-busting mistake: leaving an Elastic IP allocated but not attached to a running instance. AWS charges $0.005/hour (about ₹9/day) for unattached EIPs to discourage IP address waste. Release them when not in use — it's under Settings in the EC2 console.",
    xpReward: 65,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to make sure he never gets a surprise AWS bill over $10 during his learning period. What is the most proactive setup?",
      options: [
        "Check the AWS bill manually at the end of each month",
        "Create an AWS Budget with a $10 threshold and email alert, plus enable Cost Anomaly Detection",
        "Delete all resources immediately after creating them",
        "Use a prepaid credit card so charges are declined when funds run out",
      ],
      correctAnswer:
        "Create an AWS Budget with a $10 threshold and email alert, plus enable Cost Anomaly Detection",
      explanation:
        "AWS Budgets sends an email BEFORE you hit the threshold — you can configure alerts at 50%, 80%, and 100% of budget. Cost Anomaly Detection uses ML to alert on unusual spending patterns even within budget. Together they ensure you're never surprised by cloud costs.",
    },
  },

  // ── Lesson 35 ─────────────────────────────────────────────────────────────
  {
    title: "AWS Capstone: Host a Static Website with S3 and CloudFront",
    content:
      "Sneha builds a complete static portfolio website and hosts it on AWS using S3 + CloudFront + Route 53 — the exact architecture used by thousands of production websites. Here is the full walkthrough she follows.\n\nStep 1 — Create S3 bucket for hosting: Create bucket named sneha-portfolio-2024 in ap-south-1. Under Properties → enable Static website hosting → Index document: index.html. Upload your HTML/CSS/JS files. Under Permissions → Bucket Policy → paste the public read policy allowing s3:GetObject on all objects. Note the S3 website endpoint: http://sneha-portfolio-2024.s3-website.ap-south-1.amazonaws.com — it works but uses HTTP and has an ugly URL.\n\nStep 2 — Create CloudFront distribution: Origin domain = S3 website endpoint. Redirect HTTP to HTTPS. Create SSL certificate in AWS Certificate Manager (us-east-1 Region — CloudFront requires certificates in us-east-1). Add Alternate Domain Name: snehaportfolio.in. Cache policy: CachingOptimised for HTML/CSS/JS, CachingDisabled for API calls. CloudFront distributes it to 400+ edge locations globally — your portfolio loads in under 1 second from anywhere in India.\n\nStep 3 — Configure Route 53: Create Hosted Zone for snehaportfolio.in. Create A record: Alias → CloudFront distribution. Update domain nameservers at your registrar to Route 53's nameservers. Wait 24 hours for DNS propagation. Sneha adds this project to her resume: 'Hosted portfolio on AWS S3 + CloudFront + Route 53 with HTTPS, global CDN, and custom domain.' Total monthly cost: under $1. Total skills demonstrated: S3, CloudFront, Route 53, IAM, ACM. Recruiters who see this know she can actually work with AWS.",
    funFact:
      "The AWS S3 + CloudFront hosting pattern is used by companies like Airbnb for their static marketing pages and by the US government for several public information websites. This architecture handles virtually unlimited traffic because CloudFront scales automatically — a tech blog going viral won't crash the site.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha requests an SSL certificate for snehaportfolio.in in AWS Certificate Manager to use with CloudFront. In which AWS Region must she create the ACM certificate?",
      options: [
        "ap-south-1 (Mumbai) — same Region as the S3 bucket",
        "us-east-1 (Virginia) — CloudFront requires certificates in us-east-1",
        "Any Region — ACM certificates are global",
        "eu-west-1 (Ireland) — closest to global users",
      ],
      correctAnswer:
        "us-east-1 (Virginia) — CloudFront requires certificates in us-east-1",
      explanation:
        "CloudFront is a global service managed from AWS's us-east-1 Region. It can only integrate with ACM certificates created in us-east-1, regardless of where your origin (S3 bucket) is. This is a common gotcha — always create CloudFront SSL certificates in us-east-1.",
    },
  },
];
