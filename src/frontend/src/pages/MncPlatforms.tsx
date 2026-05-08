import { PaywallModal } from "@/components/PaywallModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import {
  BookOpen,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Globe,
  Lock,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface KeyService {
  name: string;
  description: string;
  scenario: string;
}

interface Platform {
  name: string;
  abbr: string;
  color: string;
  category: string;
  tagline: string;
  what: string;
  whyMncs: string;
  roles: string[];
  learningPath: string;
  demand: "Very High" | "High" | "Medium";
  salary: string;
  companies: string[];
  certifications: string[];
  funFact: string;
  keyServices: KeyService[];
}

const PLATFORMS: Platform[] = [
  {
    name: "Amazon Web Services",
    abbr: "AWS",
    color: "#FF9900",
    category: "Cloud",
    tagline: "Used in 80% of enterprises worldwide",
    what: "AWS is the world's most comprehensive cloud platform with 200+ services — from computing (EC2) to AI (SageMaker) to databases (RDS). Think of it as a giant digital utility company: you rent servers, storage, and AI tools by the hour instead of buying them.",
    whyMncs:
      "Cost savings, global scale, and zero hardware management. A startup can deploy a product to millions of users overnight — something impossible with on-prem servers.",
    roles: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Data Engineer",
      "Solutions Architect",
    ],
    learningPath:
      "AWS Cloud Practitioner → Solutions Architect Associate → Specialty certifications",
    demand: "Very High",
    salary: "₹8–30 LPA",
    companies: ["TCS", "Infosys", "Accenture", "Wipro", "Amazon"],
    certifications: [
      "AWS Cloud Practitioner",
      "AWS Solutions Architect",
      "AWS Developer",
    ],
    funFact:
      "AWS runs Netflix, Airbnb, LinkedIn, and NASA. If AWS goes down, half the internet feels it.",
    keyServices: [
      {
        name: "EC2 (Elastic Compute Cloud)",
        description: "Virtual servers in the cloud — rent compute by the hour.",
        scenario:
          "Ravi's team needs a server for their web app. Instead of buying hardware, they launch an EC2 instance in minutes and pay only for what they use.",
      },
      {
        name: "S3 (Simple Storage Service)",
        description: "Store and retrieve any amount of data at massive scale.",
        scenario:
          "The company stores all employee documents, backups, and logs in S3 buckets — accessible from anywhere, highly durable.",
      },
      {
        name: "Lambda",
        description:
          "Run code without managing servers — serverless computing.",
        scenario:
          "Every time a new user registers, a Lambda function automatically sends a welcome email — no server required.",
      },
      {
        name: "RDS (Relational Database Service)",
        description:
          "Managed database service for MySQL, PostgreSQL, and more.",
        scenario:
          "The product database runs on RDS MySQL — AWS handles backups, patching, and scaling automatically.",
      },
      {
        name: "CloudFront",
        description:
          "Content delivery network that serves data from the nearest location.",
        scenario:
          "A company with users in India, US, and Europe uses CloudFront so everyone gets fast load times from the closest edge server.",
      },
      {
        name: "IAM (Identity and Access Management)",
        description:
          "Control who can access what in AWS with fine-grained permissions.",
        scenario:
          "The DevOps team uses IAM roles to ensure developers can only access staging environments, never production.",
      },
    ],
  },
  {
    name: "Microsoft Azure",
    abbr: "AZ",
    color: "#0078D4",
    category: "Cloud",
    tagline: "Enterprise #1 — trusted by 95% of Fortune 500",
    what: "Azure is Microsoft's cloud — deeply integrated with Windows, Office 365, and Active Directory. Enterprises already using Microsoft products choose Azure because everything works together seamlessly.",
    whyMncs:
      "Government and banking sectors prefer Azure for compliance and Microsoft ecosystem lock-in. Also strong in hybrid cloud (on-prem + cloud mixed environments).",
    roles: [
      "Azure Developer",
      "Cloud Admin",
      "DevOps Engineer",
      "Data Analyst",
    ],
    learningPath:
      "AZ-900 Fundamentals → AZ-104 Admin → AZ-204 Developer → AZ-400 DevOps",
    demand: "Very High",
    salary: "₹8–25 LPA",
    companies: ["Cognizant", "HCL", "Capgemini", "Accenture", "Microsoft"],
    certifications: ["AZ-900", "AZ-104", "AZ-204", "AZ-400", "AZ-305"],
    funFact:
      "Azure has 60+ regions globally — more than any other cloud provider. India alone has 3 Azure data centres.",
    keyServices: [
      {
        name: "Azure Active Directory (AAD)",
        description:
          "Enterprise identity and access management — one login for all Microsoft apps.",
        scenario:
          "When Priya joins TCS, IT sets her up on Azure AD — she uses one login for email, Teams, SharePoint, and all company apps.",
      },
      {
        name: "Azure Blob Storage",
        description:
          "Unstructured data storage — cheap and massively scalable.",
        scenario:
          "The analytics team stores raw log files and images in Azure Blob — cheap, scalable, and accessible via APIs.",
      },
      {
        name: "Azure DevOps",
        description:
          "CI/CD pipelines, boards, repos — end-to-end software delivery.",
        scenario:
          "The dev team uses Azure DevOps Boards for sprints, Repos for code, and Pipelines to auto-deploy on every commit.",
      },
      {
        name: "Azure Kubernetes Service (AKS)",
        description:
          "Managed container orchestration — run and scale microservices easily.",
        scenario:
          "The microservices app runs on AKS — Azure automatically scales containers up during peak hours and down at night.",
      },
      {
        name: "Azure Functions",
        description: "Serverless compute triggered by events.",
        scenario:
          "A function triggers every time a new CSV is uploaded to storage, processes it, and saves results to the database automatically.",
      },
      {
        name: "Azure SQL Database",
        description:
          "Fully managed relational database with built-in HA and backups.",
        scenario:
          "The e-commerce app's orders run on Azure SQL — Microsoft handles backups, high availability, and security patches.",
      },
    ],
  },
  {
    name: "Google Cloud Platform",
    abbr: "GCP",
    color: "#4285F4",
    category: "Cloud",
    tagline: "AI/ML powerhouse — the cloud built by Google engineers",
    what: "GCP is Google's cloud — best known for BigQuery (world's fastest SQL analytics), Kubernetes (container orchestration it invented), and Vertex AI (ML platform). If your work involves large-scale data or AI, GCP is unmatched.",
    whyMncs:
      "Data-heavy companies and startups pick GCP for its unbeatable analytics tools. BigQuery can query terabytes of data in seconds for ₹1.",
    roles: [
      "Data Engineer",
      "ML Engineer",
      "Cloud Architect",
      "Analytics Engineer",
    ],
    learningPath:
      "Associate Cloud Engineer → Professional Data Engineer → ML Engineer",
    demand: "High",
    salary: "₹10–28 LPA",
    companies: ["Deloitte", "Infosys", "Accenture", "Google", "Spotify"],
    certifications: [
      "Associate Cloud Engineer",
      "Professional Data Engineer",
      "ML Engineer",
    ],
    funFact:
      "Google processes 3.5 billion searches/day using GCP infrastructure — including BigQuery and TPUs (custom AI chips).",
    keyServices: [
      {
        name: "BigQuery",
        description:
          "Serverless data warehouse — run SQL on billions of rows in seconds.",
        scenario:
          "The analytics team runs SQL queries on 10 billion rows of clickstream data in BigQuery in under 30 seconds with no infrastructure to manage.",
      },
      {
        name: "Cloud Storage",
        description: "Object storage for any type of data, served globally.",
        scenario:
          "All user-uploaded photos and videos are stored in Cloud Storage buckets, served globally with low latency.",
      },
      {
        name: "Cloud Functions",
        description: "Event-driven serverless computing.",
        scenario:
          "When a new order is placed, a Cloud Function fires automatically to update inventory and notify the warehouse — no servers needed.",
      },
      {
        name: "Google Kubernetes Engine (GKE)",
        description: "Managed Kubernetes cluster — Google invented Kubernetes.",
        scenario:
          "The startup's entire backend runs on GKE — pods scale from 2 to 200 automatically based on traffic.",
      },
      {
        name: "Vertex AI",
        description: "Unified ML platform to train and deploy models at scale.",
        scenario:
          "The data science team trains fraud detection models on Vertex AI and deploys them as APIs that production systems call in real time.",
      },
      {
        name: "Cloud Pub/Sub",
        description:
          "Asynchronous messaging service for event-driven architectures.",
        scenario:
          "Every sensor reading from 10,000 IoT devices is published to Pub/Sub topics — downstream services process them in parallel.",
      },
    ],
  },
  {
    name: "Salesforce",
    abbr: "SF",
    color: "#00A1E0",
    category: "CRM",
    tagline: "World's #1 CRM — used by 150,000+ companies",
    what: "Salesforce is a Customer Relationship Management (CRM) cloud — it tracks every customer interaction, manages sales pipelines, handles support tickets, and automates marketing campaigns. Imagine a super-smart notebook for every customer conversation your company ever had.",
    whyMncs:
      "Sales teams at Wipro, Infosys, and IBM use Salesforce to manage deals worth crores. It replaces dozens of spreadsheets and disconnected tools.",
    roles: [
      "Salesforce Admin",
      "Salesforce Developer",
      "Business Analyst",
      "CRM Consultant",
    ],
    learningPath:
      "Trailhead free training → Admin Cert → Platform Developer I → Architect",
    demand: "Very High",
    salary: "₹6–25 LPA",
    companies: ["Accenture", "Wipro", "TCS", "Cognizant", "Deloitte"],
    certifications: [
      "Salesforce Admin",
      "Platform Developer I",
      "Sales Cloud Consultant",
    ],
    funFact:
      "Salesforce has 100,000+ certified professionals in India. Even non-technical business analysts earn ₹12+ LPA with just the Admin cert.",
    keyServices: [
      {
        name: "Sales Cloud",
        description:
          "Manage leads, opportunities, and sales pipeline end-to-end.",
        scenario:
          "The sales team tracks every potential deal in Sales Cloud — from first contact to closed-won, with automated reminders and forecasts.",
      },
      {
        name: "Service Cloud",
        description: "Customer support and case management platform.",
        scenario:
          "When a customer raises a complaint, a case is auto-created in Service Cloud, assigned to the right agent, and tracked until resolved.",
      },
      {
        name: "Salesforce CRM",
        description:
          "360-degree view of every customer interaction and history.",
        scenario:
          "Before a sales call, Ramesh opens the CRM to see the customer's purchase history, open tickets, and last interaction — all in one place.",
      },
      {
        name: "Marketing Cloud",
        description:
          "Automated marketing campaigns based on customer behavior.",
        scenario:
          "The marketing team sends personalized email sequences to leads — an opened email triggers a follow-up automatically.",
      },
      {
        name: "Apex & Lightning",
        description:
          "Custom development platform for Salesforce — code and UI framework.",
        scenario:
          "The Salesforce developer writes Apex triggers to auto-calculate discounts when deal size exceeds a threshold.",
      },
      {
        name: "AppExchange",
        description:
          "Marketplace for pre-built Salesforce apps and integrations.",
        scenario:
          "Instead of building a document signing feature, the admin installs DocuSign from AppExchange in 10 minutes.",
      },
    ],
  },
  {
    name: "MuleSoft",
    abbr: "ML",
    color: "#00B4D8",
    category: "Integration",
    tagline: "The #1 API integration platform — connect everything",
    what: "MuleSoft connects enterprise systems that were never designed to talk to each other — SAP, Salesforce, legacy databases, REST APIs — all through reusable APIs. Think of it as a universal adapter for enterprise IT systems.",
    whyMncs:
      "Large companies have 500+ software tools that don't share data. MuleSoft builds integration pipelines so a change in SAP instantly reflects in Salesforce and vice versa.",
    roles: [
      "MuleSoft Developer",
      "Integration Architect",
      "API Developer",
      "Backend Engineer",
    ],
    learningPath:
      "MuleSoft Developer Level 1 → Level 2 → Integration Architect",
    demand: "High",
    salary: "₹9–22 LPA",
    companies: ["Infosys", "TCS", "Accenture", "Capgemini"],
    certifications: [
      "MuleSoft Developer Level 1",
      "MuleSoft Integration Architect",
    ],
    funFact:
      "Owned by Salesforce ($6.5B acquisition). One MuleSoft architect saved a bank ₹50 crore in operational costs by connecting 47 systems in 3 months.",
    keyServices: [
      {
        name: "Anypoint Platform",
        description:
          "Unified integration platform for designing, building, and managing APIs.",
        scenario:
          "The integration team builds reusable APIs on Anypoint that connect SAP, Salesforce, and a legacy ERP — changes in one system instantly reflect in others.",
      },
      {
        name: "Anypoint Studio",
        description:
          "IDE for building Mule integrations visually with drag-and-drop.",
        scenario:
          "The developer drags an HTTP connector, transforms data with DataWeave, and pushes to a database — no manual code for the boilerplate.",
      },
      {
        name: "DataWeave",
        description:
          "MuleSoft's transformation language for mapping between data formats.",
        scenario:
          "Incoming JSON from a REST API is transformed into XML that the legacy banking system understands — DataWeave handles it in 5 lines.",
      },
      {
        name: "API Manager",
        description: "Control, secure, and monitor APIs across the enterprise.",
        scenario:
          "The API Manager enforces rate limiting on external APIs so a misbehaving client can't flood the backend with requests.",
      },
      {
        name: "Anypoint Exchange",
        description:
          "Marketplace of reusable integration assets and certified connectors.",
        scenario:
          "Instead of building a Salesforce connector from scratch, the team pulls a certified connector from Exchange and deploys in an hour.",
      },
    ],
  },
  {
    name: "Snowflake",
    abbr: "SN",
    color: "#29B5E8",
    category: "Data Warehouse",
    tagline: "Cloud data warehouse — $5B+ company, growing fast",
    what: "Snowflake is a cloud-native data warehouse that separates compute from storage — you can scale query power independently from storage cost. Every business intelligence team uses it to store, query, and share data at massive scale.",
    whyMncs:
      "Snowflake lets data teams at different companies securely share live datasets without copying them — a game changer for financial services and retail analytics.",
    roles: ["Data Engineer", "Data Analyst", "BI Developer", "Cloud Architect"],
    learningPath:
      "SnowPro Core Certification → SnowPro Advanced: Data Engineer / Architect",
    demand: "High",
    salary: "₹10–30 LPA",
    companies: ["Goldman Sachs", "DoorDash", "Anthem", "Capital One"],
    certifications: [
      "SnowPro Core",
      "SnowPro Advanced: Data Engineer",
      "SnowPro Advanced: Architect",
    ],
    funFact:
      "Snowflake's IPO in 2020 was the largest software IPO in history — raising $3.4 billion in one day.",
    keyServices: [
      {
        name: "Data Warehouse",
        description:
          "Central cloud repository for all company data — query with standard SQL.",
        scenario:
          "Snowflake consolidates data from Salesforce, SAP, and web logs into one place — analysts query everything with standard SQL.",
      },
      {
        name: "Virtual Warehouses",
        description: "Compute clusters that scale independently from storage.",
        scenario:
          "Finance runs end-of-month reports on a dedicated warehouse — their heavy queries don't slow down the real-time sales dashboard.",
      },
      {
        name: "Data Sharing",
        description:
          "Share live data between Snowflake accounts without copying.",
        scenario:
          "The company shares clean sales data directly with their marketing agency's Snowflake account — no exports, always up-to-date.",
      },
      {
        name: "Time Travel",
        description: "Query historical states of data up to 90 days back.",
        scenario:
          "An analyst accidentally deleted records — they use Snowflake Time Travel to restore data from 24 hours ago in seconds.",
      },
      {
        name: "Snowpipe",
        description: "Continuous, automatic data ingestion from cloud storage.",
        scenario:
          "New transaction files landing in S3 are automatically loaded into Snowflake via Snowpipe within minutes of arrival.",
      },
      {
        name: "Snowflake Marketplace",
        description: "Buy and subscribe to live third-party datasets.",
        scenario:
          "The startup subscribes to a weather dataset on the Marketplace to enrich delivery predictions — no API integration needed.",
      },
    ],
  },
  {
    name: "Alteryx",
    abbr: "AX",
    color: "#1B67AC",
    category: "Analytics",
    tagline: "No-code analytics automation — loved by Big 4 consultants",
    what: "Alteryx is a drag-and-drop analytics platform where you connect data sources, apply transformations, and run predictive models — all without writing a single line of code. Business analysts use it to do in 20 minutes what used to take a developer 2 days.",
    whyMncs:
      "Consulting firms (KPMG, Deloitte, EY) use Alteryx to deliver rapid client insights. A financial analyst can blend Excel, SQL, and Salesforce data in one workflow.",
    roles: [
      "Business Analyst",
      "Data Analyst",
      "Financial Analyst",
      "BI Consultant",
    ],
    learningPath:
      "Alteryx Designer Core Cert → Designer Advanced → Server / Analytics Engineer",
    demand: "Medium",
    salary: "₹6–18 LPA",
    companies: ["Deloitte", "KPMG", "EY", "PwC", "Cognizant"],
    certifications: ["Alteryx Designer Core", "Alteryx Designer Advanced"],
    funFact:
      "An Alteryx workflow that automates a monthly report can save analysts 40+ hours per month — roughly 5 full working days.",
    keyServices: [
      {
        name: "Designer",
        description: "Drag-and-drop workflow builder — no coding required.",
        scenario:
          "Ananya builds a workflow that joins customer data from 5 Excel files, cleans it, and outputs a ready report — no coding needed.",
      },
      {
        name: "Data Blending",
        description:
          "Combine and merge data from multiple sources in one workflow.",
        scenario:
          "The analyst blends CRM data with billing records and web logs in Alteryx to find customers at churn risk.",
      },
      {
        name: "Predictive Analytics",
        description:
          "Built-in ML tools accessible without a data science background.",
        scenario:
          "Using Alteryx's linear regression tool, the team predicts next quarter's revenue from historical patterns — no data science degree required.",
      },
      {
        name: "Auto Insights",
        description: "Automated data storytelling that surfaces key trends.",
        scenario:
          "Auto Insights analyzes the sales dataset and surfaces the top 3 reasons revenue dropped last month — ready to paste into the management deck.",
      },
      {
        name: "Server",
        description: "Deploy and schedule workflows at enterprise scale.",
        scenario:
          "The daily reconciliation workflow runs automatically at 6 AM on Alteryx Server, emails results to finance — no manual intervention.",
      },
    ],
  },
  {
    name: "Databricks",
    abbr: "DB",
    color: "#FF3621",
    category: "Data Intelligence",
    tagline: "Unified data + AI platform — built by Apache Spark creators",
    what: "Databricks combines data engineering, data science, and machine learning in one platform. It runs on top of cloud providers (AWS/Azure/GCP) and is built around Apache Spark for processing massive datasets with Python and SQL.",
    whyMncs:
      "Data teams use Databricks to build end-to-end ML pipelines — from raw data ingestion to model training to deployment — without switching tools.",
    roles: [
      "Data Engineer",
      "ML Engineer",
      "Data Scientist",
      "Analytics Engineer",
    ],
    learningPath:
      "Databricks Fundamentals → Associate Developer for Apache Spark → Professional",
    demand: "High",
    salary: "₹12–35 LPA",
    companies: ["Shell", "Comcast", "Condé Nast", "Regeneron", "Infosys"],
    certifications: [
      "Databricks Fundamentals",
      "Associate Developer Spark Python",
      "Data Engineer Professional",
    ],
    funFact:
      "Databricks processes over 1 exabyte of data per month for its customers — that's 1 billion gigabytes.",
    keyServices: [
      {
        name: "Unified Analytics Platform",
        description:
          "Combines data engineering, ML, and analytics in one collaborative notebook.",
        scenario:
          "The data team uses Databricks to ingest raw data, run Spark transformations, train ML models, and visualize results — all in one notebook.",
      },
      {
        name: "Apache Spark",
        description:
          "Distributed data processing engine — process terabytes in minutes.",
        scenario:
          "Processing 500 GB of log files that took 4 hours in pandas finishes in 8 minutes using Spark on Databricks.",
      },
      {
        name: "Delta Lake",
        description: "Reliable, ACID-compliant storage layer for data lakes.",
        scenario:
          "Delta Lake gives the team ACID transactions on their data lake — no more corrupt files from failed pipeline runs.",
      },
      {
        name: "MLflow",
        description:
          "Open-source ML lifecycle management — track experiments and deploy models.",
        scenario:
          "Every model training run is logged in MLflow — the team compares 20 experiments and picks the best model with one click.",
      },
      {
        name: "AutoML",
        description:
          "Automated model building — tries many algorithms and picks the best.",
        scenario:
          "A business analyst without ML experience uses Databricks AutoML to build a customer churn predictor automatically.",
      },
    ],
  },
  {
    name: "ServiceNow",
    abbr: "SNW",
    color: "#62D84E",
    category: "IT Service Mgmt",
    tagline: "The backbone of enterprise IT operations — ₹8–20 LPA roles",
    what: "ServiceNow is the #1 IT Service Management (ITSM) platform. Every time an employee raises a ticket ('my laptop is broken' or 'I need access to a new tool'), that ticket lives in ServiceNow. It automates workflows, approvals, and IT operations.",
    whyMncs:
      "Large enterprises manage thousands of IT requests daily. ServiceNow handles incident management, change management, asset tracking, and HR case management in one platform.",
    roles: [
      "ServiceNow Developer",
      "ITSM Analyst",
      "Business Process Analyst",
      "IT Admin",
    ],
    learningPath:
      "CSA (System Admin) → Application Developer → Specialist (ITSM/HR/CSM)",
    demand: "Very High",
    salary: "₹7–20 LPA",
    companies: ["Deloitte", "IBM", "Capgemini", "HCL", "Accenture"],
    certifications: [
      "Certified System Admin (CSA)",
      "Certified Application Developer (CAD)",
      "CIS-ITSM",
    ],
    funFact:
      "ServiceNow calls itself the 'platform of platforms' — 85% of Fortune 500 companies use it. One ServiceNow implementation at a telecom company saved ₹200 crore/year in IT support costs.",
    keyServices: [
      {
        name: "ITSM (IT Service Management)",
        description:
          "Manage IT incidents, requests, and service delivery end-to-end.",
        scenario:
          "When the production server goes down, an incident is auto-created in ServiceNow, the on-call team is paged, and resolution steps are tracked end-to-end.",
      },
      {
        name: "ITOM (IT Operations Management)",
        description:
          "Auto-discover and map all IT infrastructure relationships.",
        scenario:
          "ServiceNow ITOM auto-discovers all servers, databases, and applications across the enterprise and maps their dependencies on a live diagram.",
      },
      {
        name: "HR Service Delivery",
        description:
          "Automate employee onboarding, offboarding, and HR workflows.",
        scenario:
          "When Priya joins, ServiceNow auto-triggers onboarding tasks: laptop provisioning, access requests, ID card — all tracked in one place.",
      },
      {
        name: "Change Management",
        description: "Control and track IT changes with approval workflows.",
        scenario:
          "Before deploying a major update, the team raises a Change Request in ServiceNow — it routes for approval, schedules a window, and tracks the rollout.",
      },
      {
        name: "App Engine",
        description:
          "Build custom business apps on the ServiceNow platform — low-code.",
        scenario:
          "The admin builds a 'Travel Request' app on App Engine in a week — employees submit, managers approve, finance tracks — no developer needed.",
      },
    ],
  },
  {
    name: "Tableau",
    abbr: "TB",
    color: "#E97627",
    category: "Data Visualization",
    tagline: "Turn raw data into boardroom-ready dashboards",
    what: "Tableau is the most powerful data visualization tool — connect any data source (Excel, SQL, Salesforce, cloud) and build interactive dashboards that reveal insights instantly. Used by every major analytics team for executive reporting.",
    whyMncs:
      "C-suite executives make billion-dollar decisions based on Tableau dashboards. Business analysts who can build compelling dashboards are highly valued.",
    roles: [
      "Business Analyst",
      "Data Analyst",
      "BI Developer",
      "Reporting Analyst",
    ],
    learningPath:
      "Tableau Desktop Specialist → Certified Associate → Certified Professional",
    demand: "High",
    salary: "₹5–18 LPA",
    companies: ["Cognizant", "Wipro", "Deloitte", "KPMG", "Capgemini"],
    certifications: [
      "Tableau Desktop Specialist",
      "Tableau Certified Associate",
    ],
    funFact:
      "A single Tableau dashboard presented at a board meeting can represent 3 weeks of analyst work — and influence a ₹100 crore budget decision.",
    keyServices: [
      {
        name: "Tableau Desktop",
        description:
          "Build interactive dashboards from any data source visually.",
        scenario:
          "The analyst drags sales data onto a canvas and builds a geographic heat map showing top-performing regions in minutes — no SQL needed.",
      },
      {
        name: "Tableau Server / Cloud",
        description:
          "Publish and share dashboards across the entire organization.",
        scenario:
          "The CFO opens their phone and sees live revenue metrics on a Tableau dashboard published by finance — auto-refreshed every hour.",
      },
      {
        name: "Tableau Prep Builder",
        description: "Visually clean and shape data before analysis.",
        scenario:
          "Prep visually shows data quality issues — duplicates, nulls, format errors — and lets the analyst fix them with drag-and-drop steps.",
      },
      {
        name: "Calculated Fields",
        description:
          "Create custom metrics and KPIs directly in the visualization.",
        scenario:
          "The analyst creates a 'Profit Margin %' calculated field combining revenue and cost — it instantly appears as a chart option across all views.",
      },
      {
        name: "Data Connectors",
        description:
          "Connect to 80+ data sources including Snowflake, Salesforce, and Excel.",
        scenario:
          "The dashboard pulls live data from Snowflake, Salesforce, and an Excel file simultaneously — one unified view for the executive team.",
      },
    ],
  },
  {
    name: "Power BI",
    abbr: "PBI",
    color: "#F2C811",
    category: "Analytics",
    tagline: "Microsoft's analytics powerhouse — free with Office 365",
    what: "Power BI is Microsoft's self-service analytics platform. Create interactive reports and dashboards connected to Excel, Azure, SQL Server, and hundreds of other sources. Since it's bundled with Microsoft 365, almost every corporate laptop already has it.",
    whyMncs:
      "Microsoft-heavy enterprises use Power BI for everything from finance reporting to operational KPIs. It's cheaper than Tableau and deeply integrated with Excel.",
    roles: [
      "Business Analyst",
      "Data Analyst",
      "Finance Analyst",
      "Operations Analyst",
    ],
    learningPath:
      "Power BI Desktop (free) → PL-300 Data Analyst Associate → DP-500 Enterprise Analytics",
    demand: "Very High",
    salary: "₹4–15 LPA",
    companies: [
      "Every Microsoft-stack company",
      "TCS",
      "HCL",
      "Infosys",
      "KPMG",
    ],
    certifications: [
      "PL-300 Power BI Data Analyst",
      "DP-500 Enterprise Analytics Expert",
    ],
    funFact:
      "Power BI has 250,000+ free data connectors. You can pull live data from Twitter, LinkedIn, and weather APIs directly into a business dashboard.",
    keyServices: [
      {
        name: "Power BI Desktop",
        description:
          "Build reports and dashboards connecting to SQL, Excel, and cloud sources.",
        scenario:
          "The operations manager builds a daily KPI dashboard connecting directly to SQL Server — it updates every morning automatically.",
      },
      {
        name: "Power Query",
        description:
          "Transform and clean data from multiple sources without code.",
        scenario:
          "Power Query merges and cleans data from 6 monthly Excel files into one table — a 3-hour manual job becomes a 1-click refresh.",
      },
      {
        name: "DAX (Data Analysis Expressions)",
        description:
          "Custom calculations and measures that power dynamic visuals.",
        scenario:
          "The analyst writes a DAX measure for Year-over-Year growth — it updates across all visuals instantly when date filters change.",
      },
      {
        name: "Power BI Service",
        description:
          "Publish and collaborate on dashboards online — accessible from any browser.",
        scenario:
          "The team publishes dashboards to Power BI Service — management can view live reports from their browser without installing anything.",
      },
      {
        name: "Power Automate Integration",
        description: "Trigger automated actions based on data thresholds.",
        scenario:
          "When sales drop below target, Power BI triggers a Power Automate flow that sends an alert to the sales manager's Teams channel.",
      },
    ],
  },
  {
    name: "SAP",
    abbr: "SAP",
    color: "#0070C0",
    category: "ERP",
    tagline: "World's #1 ERP — runs 77% of global business transactions",
    what: "SAP (Systems, Applications & Products) is the largest Enterprise Resource Planning (ERP) system. It manages every business process: finance, HR, procurement, manufacturing, supply chain — all in one integrated system.",
    whyMncs:
      "When a factory orders raw materials, processes payroll, and ships goods — SAP is coordinating all of it in real-time. It's the operating system of large companies.",
    roles: [
      "SAP Consultant",
      "SAP ABAP Developer",
      "SAP BASIS Admin",
      "Functional Consultant",
    ],
    learningPath:
      "SAP Learning Hub (free basics) → SAP FICO/SD/MM → ABAP Development → Solution Architect",
    demand: "Very High",
    salary: "₹6–28 LPA",
    companies: ["HCL", "Wipro", "TCS", "IBM", "Deloitte"],
    certifications: [
      "SAP Certified Associate",
      "SAP BASIS",
      "SAP ABAP",
      "SAP FICO",
      "SAP SD",
    ],
    funFact:
      "SAP processes $46 trillion in commercial transactions annually — more than the GDP of the US and China combined.",
    keyServices: [
      {
        name: "SAP ERP",
        description:
          "Integrate core business processes — finance, HR, procurement, manufacturing.",
        scenario:
          "When a factory orders raw materials, processes payroll, and ships goods — SAP coordinates all of it in real time across every department.",
      },
      {
        name: "SAP S/4HANA",
        description: "Next-gen real-time ERP built on in-memory HANA database.",
        scenario:
          "The finance team closes month-end in 2 days instead of 2 weeks because S/4HANA processes millions of transactions in real time.",
      },
      {
        name: "SAP Analytics Cloud",
        description: "Business intelligence and planning on top of SAP data.",
        scenario:
          "Management views live P&L, balance sheet, and cash flow in SAP Analytics Cloud — drilling from global down to individual cost centers.",
      },
      {
        name: "SAP BASIS",
        description:
          "Technical administration of SAP systems — performance, transports, patching.",
        scenario:
          "The BASIS admin applies patches, manages system performance, and handles transports between dev, QA, and production environments.",
      },
      {
        name: "SAP ABAP",
        description:
          "SAP's custom development language for building reports and workflows.",
        scenario:
          "The developer writes an ABAP program to auto-generate a custom invoice format that exports to PDF and emails the customer.",
      },
    ],
  },
  {
    name: "Oracle",
    abbr: "ORC",
    color: "#F80000",
    category: "Database + Cloud",
    tagline: "Enterprise database giant powering banks and governments",
    what: "Oracle Database is the world's most trusted enterprise database — used by banks, hospitals, and governments to store critical data. Oracle Cloud (OCI) now competes with AWS/Azure offering database-as-a-service, AI, and compute.",
    whyMncs:
      "Any company that has been in operation for 20+ years likely runs Oracle Database. Migrating or managing these databases is a high-paying specialization.",
    roles: [
      "Oracle DBA",
      "PL/SQL Developer",
      "Oracle Cloud Engineer",
      "Data Architect",
    ],
    learningPath:
      "Oracle Database Foundations → OCA → OCP → Oracle Cloud Infrastructure",
    demand: "High",
    salary: "₹7–22 LPA",
    companies: ["TCS", "Infosys", "IBM", "Cognizant", "Wipro"],
    certifications: [
      "Oracle Database SQL Certified",
      "OCI Foundations",
      "Oracle Cloud Infrastructure",
    ],
    funFact:
      "Oracle Database was the first commercially available relational database — launched in 1979. It's older than most software developers using it today.",
    keyServices: [
      {
        name: "Oracle Database",
        description:
          "World's most trusted enterprise relational database — ACID compliant.",
        scenario:
          "The banking application's core transaction ledger runs on Oracle DB — ACID compliance ensures no transaction is ever lost or duplicated.",
      },
      {
        name: "Oracle Cloud Infrastructure (OCI)",
        description: "Cloud platform optimized for Oracle workloads.",
        scenario:
          "The company migrates their Oracle database workloads to OCI for better performance and lower licensing costs compared to running on-prem.",
      },
      {
        name: "Oracle ERP Cloud",
        description: "Financial and supply chain management in the cloud.",
        scenario:
          "Finance uses Oracle ERP Cloud for procurement, accounts payable, and financial reporting — fully automated with real-time dashboards.",
      },
      {
        name: "Oracle APEX",
        description:
          "Low-code application development — build apps directly on the database.",
        scenario:
          "The team builds an internal leave management system using Oracle APEX in 3 days — no frontend framework needed, runs on the database.",
      },
      {
        name: "Oracle Analytics",
        description: "Self-service BI with natural language query support.",
        scenario:
          "The sales director types 'top 5 deals closing this month' in Oracle Analytics — an instant chart appears without writing any SQL.",
      },
    ],
  },
  {
    name: "HubSpot",
    abbr: "HS",
    color: "#FF7A59",
    category: "Marketing",
    tagline: "CRM + marketing automation for modern growth teams",
    what: "HubSpot is an all-in-one marketing, sales, and service platform. Startups and mid-size companies use it to manage email campaigns, track leads, automate follow-ups, and analyze marketing ROI — all in one place.",
    whyMncs:
      "Digital marketing teams use HubSpot to run campaigns that generate leads for sales teams. Integration with Salesforce makes it a key tool in any modern revenue stack.",
    roles: [
      "Digital Marketing Analyst",
      "CRM Admin",
      "Marketing Automation Specialist",
      "Content Analyst",
    ],
    learningPath:
      "HubSpot Academy (free) → Inbound Marketing Cert → Marketing Hub Cert",
    demand: "Medium",
    salary: "₹4–14 LPA",
    companies: [
      "Startups",
      "Tech companies",
      "Digital agencies",
      "E-commerce brands",
    ],
    certifications: [
      "HubSpot Inbound Marketing",
      "HubSpot Marketing Hub",
      "HubSpot Sales Hub",
    ],
    funFact:
      "HubSpot Academy has over 500,000 certified professionals globally — and all certifications are completely free. Perfect for freshers building their resume.",
    keyServices: [
      {
        name: "CRM (Free)",
        description:
          "Track every lead, email, call, and meeting in one place — free forever.",
        scenario:
          "The startup tracks every lead, email, call, and meeting in HubSpot CRM — the sales team sees the full history before every call.",
      },
      {
        name: "Marketing Hub",
        description:
          "Inbound marketing automation — nurture leads based on their behavior.",
        scenario:
          "Blog visitors who download an ebook are automatically added to a nurture sequence — emails sent based on their behavior over 2 weeks.",
      },
      {
        name: "Sales Hub",
        description:
          "Sales automation and pipeline management — automate follow-ups.",
        scenario:
          "Sequences send follow-up emails automatically if a prospect doesn't respond — the salesperson focuses only on hot leads.",
      },
      {
        name: "Service Hub",
        description: "Customer support ticketing with SLA tracking.",
        scenario:
          "Customer complaints from email, chat, and social are unified in HubSpot Service Hub — SLA timers track response times automatically.",
      },
      {
        name: "Content Hub",
        description: "Website and blog management — SEO-optimized publishing.",
        scenario:
          "The marketing team publishes SEO-optimized blog posts and landing pages directly in HubSpot — no developer needed.",
      },
    ],
  },
  // ── NEW PLATFORMS ──────────────────────────────────────────────────────────
  {
    name: "Azure DevOps",
    abbr: "ADO",
    color: "#0078D7",
    category: "DevOps",
    tagline: "End-to-end DevOps on Microsoft's platform",
    what: "Azure DevOps is Microsoft's complete software delivery platform — covering planning (Boards), source control (Repos), CI/CD pipelines (Pipelines), testing (Test Plans), and package management (Artifacts). It's where enterprise dev teams ship code every day.",
    whyMncs:
      "Large enterprises need traceability from requirement to deployment. Azure DevOps links work items, code commits, builds, and releases — giving managers full visibility at every stage.",
    roles: [
      "DevOps Engineer",
      "Release Manager",
      "Build Engineer",
      "Scrum Master",
    ],
    learningPath:
      "AZ-400 Microsoft DevOps Engineer Expert → GitHub Actions → Advanced Pipeline Patterns",
    demand: "Very High",
    salary: "₹8–22 LPA",
    companies: ["Microsoft", "Accenture", "HCL", "TCS", "Capgemini", "Infosys"],
    certifications: [
      "AZ-400 DevOps Engineer Expert",
      "GitHub Foundations",
      "AZ-204 Developer",
    ],
    funFact:
      "Azure DevOps Pipelines runs over 1 billion build minutes every month across enterprise customers worldwide.",
    keyServices: [
      {
        name: "Azure Boards",
        description:
          "Agile planning with Kanban boards, sprint backlogs, and work item tracking.",
        scenario:
          "The sprint team tracks user stories, bugs, and tasks on Azure Boards — the Scrum Master sees sprint velocity and blockers at a glance every morning.",
      },
      {
        name: "Azure Repos",
        description:
          "Git-based source control with pull requests and branch policies.",
        scenario:
          "No code reaches production without a peer review — branch policies in Azure Repos enforce at least two reviewers and passing CI before merge.",
      },
      {
        name: "Azure Pipelines",
        description:
          "CI/CD pipelines that build, test, and deploy automatically on every commit.",
        scenario:
          "Every push to the main branch triggers a pipeline that builds the app, runs unit tests, and deploys to staging in under 10 minutes — zero manual steps.",
      },
    ],
  },
  {
    name: "Kubernetes",
    abbr: "K8s",
    color: "#326CE5",
    category: "DevOps",
    tagline: "Container orchestration — runs the modern internet",
    what: "Kubernetes (K8s) is an open-source platform for automating deployment, scaling, and management of containerized applications. Originally created by Google, it's now the industry standard for running microservices at scale on any cloud.",
    whyMncs:
      "MNCs moved from monolith apps to microservices — dozens of small services that must be deployed, scaled, and updated independently. Kubernetes does that automatically, reducing downtime and infrastructure cost.",
    roles: [
      "Platform Engineer",
      "Site Reliability Engineer (SRE)",
      "DevOps Engineer",
      "Cloud Architect",
    ],
    learningPath:
      "Docker fundamentals → Kubernetes basics → CKA Certification → Advanced: Helm, Istio, GitOps",
    demand: "Very High",
    salary: "₹10–25 LPA",
    companies: ["Google", "Accenture", "Infosys", "Amazon", "Netflix", "Uber"],
    certifications: [
      "CKA (Certified Kubernetes Administrator)",
      "CKAD (Certified Kubernetes Application Developer)",
      "CKS (Security Specialist)",
    ],
    funFact:
      "Google runs over 2 billion containers per week on Kubernetes internally. The open-source project has over 100,000 contributors on GitHub.",
    keyServices: [
      {
        name: "Pods & Deployments",
        description:
          "Smallest deployable unit in K8s — a pod wraps one or more containers with shared storage and networking.",
        scenario:
          "The payment service runs as 10 pods behind a load balancer — when traffic spikes during a sale, K8s automatically scales to 50 pods in 30 seconds.",
      },
      {
        name: "Services & Ingress",
        description:
          "Expose and route traffic to pods using stable DNS names and load balancing.",
        scenario:
          "An Ingress resource routes api.company.com to the API pods and app.company.com to the frontend pods — all managed as YAML configuration.",
      },
      {
        name: "Helm Charts",
        description:
          "Package manager for Kubernetes — deploy complex apps with one command.",
        scenario:
          "The team uses a Helm chart to deploy a full monitoring stack (Prometheus + Grafana) to their cluster with a single helm install command.",
      },
    ],
  },
  {
    name: "Terraform",
    abbr: "TF",
    color: "#7B42BC",
    category: "DevOps",
    tagline: "Infrastructure as code — build cloud infra like software",
    what: "Terraform by HashiCorp lets you define cloud infrastructure (servers, networks, databases) as code. Instead of clicking through the AWS console, you write a config file and Terraform creates and manages everything automatically — and you can version-control your entire infrastructure.",
    whyMncs:
      "Large enterprises manage hundreds of cloud resources. With Terraform, the entire infrastructure is reproducible, auditable, and consistent across dev/staging/production — eliminating 'it works on my environment' infrastructure drift.",
    roles: [
      "Cloud Engineer",
      "DevOps Engineer",
      "Infrastructure Engineer",
      "Platform Engineer",
    ],
    learningPath:
      "HashiCorp Terraform Associate → Advanced Terraform patterns → Terragrunt & Module design",
    demand: "High",
    salary: "₹8–20 LPA",
    companies: ["Accenture", "Wipro", "TCS", "Infosys", "Deloitte", "HCL"],
    certifications: [
      "HashiCorp Terraform Associate",
      "AWS Solutions Architect (complements Terraform)",
    ],
    funFact:
      "Terraform manages infrastructure for over 3 million developers. A single Terraform apply command can provision a 100-server environment in under 5 minutes.",
    keyServices: [
      {
        name: "Terraform Core",
        description:
          "Plan and apply infrastructure changes using declarative HCL configuration files.",
        scenario:
          "The DevOps engineer runs terraform plan to preview 47 infrastructure changes before applying them — no surprises in production.",
      },
      {
        name: "Terraform State",
        description:
          "Tracks real-world infrastructure so Terraform knows what exists and what needs to change.",
        scenario:
          "State stored in an S3 bucket with DynamoDB locking ensures two engineers can't run terraform apply at the same time and corrupt the environment.",
      },
      {
        name: "Terraform Modules",
        description:
          "Reusable infrastructure components that can be shared across teams.",
        scenario:
          "The platform team creates a 'standard-vpc' module — every squad uses it to get a correctly configured network without rewriting the same code.",
      },
    ],
  },
  {
    name: "Jenkins",
    abbr: "JNK",
    color: "#D33833",
    category: "DevOps",
    tagline:
      "The original CI/CD automation server — battle-tested for 15 years",
    what: "Jenkins is an open-source automation server that builds, tests, and deploys software continuously. It's the most widely deployed CI/CD tool, with 1,800+ plugins connecting to every tool in the DevOps ecosystem — from GitHub to Kubernetes to Slack.",
    whyMncs:
      "Jenkins is the backbone of the build pipeline in thousands of enterprises. Whenever a developer commits code, Jenkins automatically runs tests and builds the artifact — catching bugs before they reach production.",
    roles: [
      "Build Engineer",
      "DevOps Engineer",
      "Release Manager",
      "Platform Engineer",
    ],
    learningPath:
      "Jenkins basics → Pipeline as Code (Jenkinsfile) → Shared Libraries → CloudBees CI",
    demand: "High",
    salary: "₹7–18 LPA",
    companies: ["TCS", "Wipro", "Infosys", "HCL", "IBM", "Cognizant"],
    certifications: ["CloudBees Jenkins Engineer", "CloudBees CI Admin"],
    funFact:
      "Jenkins was created in 2011 from a Sun Microsystems project called Hudson. It now has over 1,800 community plugins and is used in more than 300,000 installations globally.",
    keyServices: [
      {
        name: "Jenkins Pipelines (Jenkinsfile)",
        description:
          "Define CI/CD pipelines as code — version-controlled, shareable, and reproducible.",
        scenario:
          "The team's Jenkinsfile defines a 5-stage pipeline: checkout → build → unit tests → integration tests → deploy to staging — it runs automatically on every pull request.",
      },
      {
        name: "Jenkins Plugins",
        description:
          "1,800+ plugins that connect Jenkins to every tool in your stack.",
        scenario:
          "The team uses the Kubernetes plugin to spin up a fresh build agent for each pipeline run — agents start, run the build, and disappear — no idle servers.",
      },
      {
        name: "Jenkins Shared Libraries",
        description:
          "Reusable Groovy code that standardizes pipelines across all teams.",
        scenario:
          "The DevOps team writes a shared library with a standard deployToK8s step — all 15 microservice teams use it without knowing Kubernetes YAML.",
      },
    ],
  },
  {
    name: "Splunk",
    abbr: "SPK",
    color: "#E67B22",
    category: "Monitoring",
    tagline: "Log analytics and SIEM — see everything in your IT environment",
    what: "Splunk collects, indexes, and searches machine-generated data from any source — application logs, server metrics, network events, security alerts. It turns raw log data into dashboards, alerts, and investigations. Widely used for both observability (IT ops) and security (SIEM).",
    whyMncs:
      "A large bank processes 1 billion log events per day. Without Splunk, finding the root cause of an outage or detecting a security breach takes days. With Splunk, teams search and correlate in seconds.",
    roles: [
      "Security Analyst",
      "SOC Engineer",
      "Platform Admin",
      "DevOps Engineer",
    ],
    learningPath:
      "Splunk Core Certified User → Splunk Enterprise Admin → Splunk SIEM / Security Specialist",
    demand: "High",
    salary: "₹9–22 LPA",
    companies: ["Deloitte", "KPMG", "IBM", "Accenture", "Boeing", "Infosys"],
    certifications: [
      "Splunk Core Certified User",
      "Splunk Enterprise Certified Admin",
      "Splunk Certified Cybersecurity Defense Analyst",
    ],
    funFact:
      "Splunk's name comes from spelunking — exploring caves. The founders compared searching through log data to navigating dark underground passages.",
    keyServices: [
      {
        name: "Splunk Search & Reporting",
        description:
          "SPL (Search Processing Language) lets you query billions of log events like a database.",
        scenario:
          "The SOC analyst runs an SPL query to find all login attempts from a suspicious IP in the last 4 hours — results appear in under 2 seconds from 10 billion events.",
      },
      {
        name: "Splunk Dashboards",
        description:
          "Real-time visual dashboards for operations, security, and business metrics.",
        scenario:
          "The IT ops team has a Splunk dashboard showing application error rates, response times, and server CPU — refreshed every 30 seconds, visible on a wall screen.",
      },
      {
        name: "Splunk SIEM Alerts",
        description:
          "Detect security threats and anomalies with rules-based and ML-based alerts.",
        scenario:
          "A Splunk correlation rule fires when 5 failed logins from the same IP occur within 60 seconds — the SOC team gets a PagerDuty alert instantly.",
      },
    ],
  },
  {
    name: "Elastic Stack (ELK)",
    abbr: "ELK",
    color: "#F0BF00",
    category: "Monitoring",
    tagline: "Open-source log management — Elasticsearch, Logstash, Kibana",
    what: "The ELK Stack (Elasticsearch + Logstash + Kibana) is the world's most popular open-source log management and search platform. Elasticsearch stores and searches data at speed, Logstash ingests and transforms logs, and Kibana visualizes everything. Beats agents ship data from servers.",
    whyMncs:
      "Free and open-source, ELK is the go-to choice for companies that want full control over their observability data without vendor lock-in. Dev teams use it for application logging; security teams use it for SIEM.",
    roles: [
      "Data Engineer",
      "Platform Admin",
      "DevOps Engineer",
      "Security Analyst",
    ],
    learningPath:
      "ELK basics → Logstash pipelines → Elasticsearch indexing → Kibana dashboards → Elastic Certified Engineer",
    demand: "High",
    salary: "₹8–20 LPA",
    companies: ["LinkedIn", "Netflix", "Uber", "TCS", "Infosys", "HCL"],
    certifications: ["Elastic Certified Engineer", "Elastic Certified Analyst"],
    funFact:
      "Elasticsearch is the most downloaded server-side search engine with over 700 million downloads. Wikipedia uses it to power search across 55 million articles.",
    keyServices: [
      {
        name: "Elasticsearch",
        description:
          "Distributed search and analytics engine — full-text search at massive scale.",
        scenario:
          "An e-commerce site uses Elasticsearch to power product search — 50 million products searched with typo tolerance and faceted filtering in under 100ms.",
      },
      {
        name: "Logstash",
        description:
          "Data pipeline that ingests, transforms, and routes data to Elasticsearch.",
        scenario:
          "Logstash pipelines collect logs from 500 microservices, parse them into structured JSON, and ship them to Elasticsearch — all without touching application code.",
      },
      {
        name: "Kibana",
        description:
          "Visualization and dashboard platform on top of Elasticsearch.",
        scenario:
          "The DevOps team creates a Kibana dashboard showing application error rates, slow queries, and deployment events — they catch issues minutes after deployment.",
      },
    ],
  },
  {
    name: "Jira",
    abbr: "JIRA",
    color: "#0052CC",
    category: "Project Mgmt",
    tagline: "The global standard for Agile project management",
    what: "Jira by Atlassian is the most widely used project management tool in IT. Teams use it to plan sprints, track bugs, manage releases, and measure velocity. Every developer, BA, and project manager in an IT company works with Jira every single day.",
    whyMncs:
      "Jira gives project managers real-time visibility into what every team member is working on, what's blocked, and whether the sprint is on track. It integrates with Confluence, GitHub, Jenkins, and every major DevOps tool.",
    roles: [
      "Project Manager",
      "Scrum Master",
      "Business Analyst",
      "QA Engineer",
    ],
    learningPath:
      "Jira user basics → Jira Admin → Agile Project Management → PMI-ACP or PSM Certification",
    demand: "Very High",
    salary: "₹6–15 LPA",
    companies: [
      "Every IT company",
      "TCS",
      "Infosys",
      "Wipro",
      "Accenture",
      "Cognizant",
    ],
    certifications: [
      "Atlassian Certified Jira Administrator",
      "PMI-ACP",
      "Professional Scrum Master (PSM)",
    ],
    funFact:
      "Jira is used by over 300,000 companies worldwide — that's more than any other project management tool. If you join any IT company in India, you'll be using Jira on day one.",
    keyServices: [
      {
        name: "Jira Scrum Boards",
        description:
          "Visual sprint board showing To Do, In Progress, and Done columns for the team.",
        scenario:
          "During the daily standup, the team looks at the Jira scrum board — each member moves their ticket to 'In Progress' and the Scrum Master spots blockers at a glance.",
      },
      {
        name: "Jira Issue Tracking",
        description:
          "Create, assign, and track bugs, stories, tasks, and epics.",
        scenario:
          "A tester raises a critical bug in Jira, assigns it to the developer, sets priority to P1, and links it to the failing test case — the developer gets notified instantly.",
      },
      {
        name: "Jira Reporting & Dashboards",
        description:
          "Sprint velocity charts, burndown charts, and release burnup reports.",
        scenario:
          "The project manager checks the burndown chart to see the team is at 70% completion on day 8 of 10 — she flags scope creep risk to stakeholders before the sprint ends.",
      },
    ],
  },
  {
    name: "Confluence",
    abbr: "CONF",
    color: "#0747A6",
    category: "Project Mgmt",
    tagline: "Team wiki and documentation — where knowledge lives",
    what: "Confluence by Atlassian is the team documentation and collaboration platform used alongside Jira. Teams document architecture decisions, requirements, runbooks, meeting notes, and product specs in Confluence — a single searchable knowledge base for the entire organization.",
    whyMncs:
      "When a new engineer joins a project, they spend their first week reading Confluence pages. It replaces email chains and scattered Word docs with organized, searchable, versioned documentation that entire teams can collaborate on.",
    roles: [
      "Business Analyst",
      "Project Manager",
      "Technical Writer",
      "Solutions Architect",
    ],
    learningPath:
      "Confluence user basics → Space Admin → Templates & Macros → Atlassian Certified Expert",
    demand: "High",
    salary: "₹5–14 LPA",
    companies: ["TCS", "Infosys", "Wipro", "Accenture", "HCL", "IBM"],
    certifications: ["Atlassian Certified in Confluence Administration"],
    funFact:
      "Over 75,000 companies use Confluence. Atlassian's own engineering teams have over 1 million Confluence pages — the entire company's knowledge lives there.",
    keyServices: [
      {
        name: "Confluence Spaces",
        description:
          "Organized workspaces for teams, products, or projects — like folders for your documentation.",
        scenario:
          "Each product squad has their own Confluence space — engineering docs, API specs, and retrospective notes all in one place, searchable across the company.",
      },
      {
        name: "Confluence Pages & Templates",
        description:
          "Rich document pages with templates for meeting notes, requirements, and runbooks.",
        scenario:
          "The BA uses a requirements template to document the new feature — fields for acceptance criteria, business rules, and mockups are pre-structured, saving an hour.",
      },
      {
        name: "Jira + Confluence Integration",
        description:
          "Link Confluence specs directly to Jira issues for full requirement traceability.",
        scenario:
          "Each Jira epic links to its Confluence requirements page — developers click through to read the full spec without asking the BA to explain it again.",
      },
    ],
  },
  {
    name: "GitHub",
    abbr: "GH",
    color: "#24292F",
    category: "DevOps",
    tagline: "Version control + collaboration — where 100M developers build",
    what: "GitHub is the world's largest code hosting platform — built on Git. Developers push code, create pull requests, review each other's changes, and ship software via GitHub Actions (CI/CD). It's where all open-source software lives and where most companies host their private codebases.",
    whyMncs:
      "Every developer team needs a single source of truth for code. GitHub enables peer code review before merging, tracks every change in history, and automates deployment via GitHub Actions — reducing bugs and enabling fast delivery.",
    roles: [
      "Software Developer",
      "DevOps Engineer",
      "Open Source Contributor",
      "Security Engineer",
    ],
    learningPath:
      "Git & GitHub basics → Pull Requests & Code Review → GitHub Actions CI/CD → GitHub Advanced Security",
    demand: "Very High",
    salary: "₹7–20 LPA",
    companies: [
      "Every tech company",
      "Microsoft",
      "Google",
      "Amazon",
      "Infosys",
      "TCS",
    ],
    certifications: [
      "GitHub Foundations",
      "GitHub Actions",
      "GitHub Advanced Security",
    ],
    funFact:
      "GitHub has 100 million developers and hosts over 420 million repositories. Microsoft acquired it for $7.5 billion in 2018 — one of the largest developer platform acquisitions ever.",
    keyServices: [
      {
        name: "Pull Requests & Code Review",
        description:
          "Propose and review code changes before merging — with comments, approvals, and automated checks.",
        scenario:
          "No code goes to production without a PR review. Two senior engineers review Arjun's PR, suggest improvements, and approve only after the automated tests pass.",
      },
      {
        name: "GitHub Actions",
        description:
          "CI/CD platform built into GitHub — automate build, test, and deploy workflows.",
        scenario:
          "Every merged PR triggers a GitHub Actions workflow that builds the Docker image, runs tests, scans for vulnerabilities, and deploys to Kubernetes — no Jenkins needed.",
      },
      {
        name: "GitHub Issues & Projects",
        description:
          "Lightweight issue tracking and project boards for teams that don't need Jira.",
        scenario:
          "The open-source team uses GitHub Issues for bug reports and GitHub Projects for their roadmap — contributors from 30 countries collaborate asynchronously.",
      },
    ],
  },
  {
    name: "Docker",
    abbr: "DCK",
    color: "#2496ED",
    category: "DevOps",
    tagline: "Container platform — package and run apps anywhere",
    what: "Docker packages your application and all its dependencies into a container — a lightweight, portable box that runs identically on any machine. 'It works on my machine' disappears when you use Docker. Every modern deployment pipeline starts with building a Docker image.",
    whyMncs:
      "Before Docker, deploying the same app to dev, test, and production required manual configuration on each server. Docker containers are identical everywhere — deployments become predictable, fast, and repeatable at any scale.",
    roles: [
      "DevOps Engineer",
      "Backend Developer",
      "Platform Engineer",
      "Cloud Engineer",
    ],
    learningPath:
      "Docker fundamentals → Docker Compose → Dockerfile optimization → Docker Certified Associate → Kubernetes",
    demand: "Very High",
    salary: "₹8–22 LPA",
    companies: [
      "Every tech company",
      "Amazon",
      "Google",
      "Netflix",
      "TCS",
      "Wipro",
    ],
    certifications: ["Docker Certified Associate (DCA)"],
    funFact:
      "Docker was released in 2013 and changed how software is deployed. Today, over 15 million developers use Docker and there are 8 billion+ container image pulls from Docker Hub every month.",
    keyServices: [
      {
        name: "Docker Images & Containers",
        description:
          "Build immutable application images and run them as isolated containers.",
        scenario:
          "The developer writes a Dockerfile that packages the Node.js app with its exact dependencies — the same image runs on the laptop, CI server, and production Kubernetes cluster.",
      },
      {
        name: "Docker Compose",
        description:
          "Define and run multi-container applications with a single YAML file.",
        scenario:
          "A single docker-compose up command starts the web app, PostgreSQL database, Redis cache, and nginx reverse proxy — the entire dev environment in 30 seconds.",
      },
      {
        name: "Docker Hub & Registry",
        description:
          "Container image registry — store, share, and pull Docker images.",
        scenario:
          "The CI pipeline builds the image, tags it with the git commit hash, and pushes to a private Docker registry — Kubernetes pulls this exact image to production.",
      },
    ],
  },
  {
    name: "MongoDB",
    abbr: "MDB",
    color: "#00ED64",
    category: "Database",
    tagline: "NoSQL document database — flexible schema for modern apps",
    what: "MongoDB stores data as JSON-like documents instead of rows and columns — making it the go-to database for applications with complex, nested, or frequently changing data structures. It's the most popular NoSQL database and the 'M' in the MEAN/MERN stack.",
    whyMncs:
      "Traditional relational databases require a fixed schema — adding a new field requires a schema migration. MongoDB lets developers iterate fast without database changes, critical for product companies shipping features weekly.",
    roles: [
      "Backend Developer",
      "Data Engineer",
      "Full Stack Developer",
      "Database Administrator",
    ],
    learningPath:
      "MongoDB basics → Aggregation framework → MongoDB Atlas (cloud) → MongoDB Associate Developer Cert",
    demand: "High",
    salary: "₹8–20 LPA",
    companies: [
      "Forbes",
      "Toyota",
      "Bosch",
      "TCS",
      "Infosys",
      "Startup ecosystem",
    ],
    certifications: [
      "MongoDB Associate Developer",
      "MongoDB Associate Database Administrator",
    ],
    funFact:
      "MongoDB processes over 10 billion reads and writes every second across all MongoDB Atlas clusters globally. The word 'mongo' comes from 'humongous' — it was built for big data from day one.",
    keyServices: [
      {
        name: "MongoDB Documents & Collections",
        description:
          "Store flexible JSON documents in collections — no fixed schema required.",
        scenario:
          "The product catalog collection stores different attributes for electronics, clothing, and food items in the same collection — no rigid schema to fight against.",
      },
      {
        name: "Aggregation Pipeline",
        description:
          "Powerful data transformation and analytics directly in the database.",
        scenario:
          "A single aggregation pipeline groups orders by city, calculates average order value, filters to cities above ₹5,000 average, and sorts by revenue — no separate analytics tool needed.",
      },
      {
        name: "MongoDB Atlas",
        description:
          "Fully managed cloud MongoDB — multi-region, auto-scaling, with built-in search.",
        scenario:
          "The startup uses MongoDB Atlas on AWS — it handles backups, scaling, and security patching automatically while the team focuses on building features.",
      },
    ],
  },
  {
    name: "Redis",
    abbr: "RDS",
    color: "#DC382D",
    category: "Database",
    tagline: "In-memory cache — the speed layer of modern applications",
    what: "Redis is an in-memory data store that operates at sub-millisecond speed — 100x faster than a traditional database for reads. Used as a cache, session store, real-time leaderboard, pub/sub message broker, and more. If your app needs speed, Redis is involved somewhere.",
    whyMncs:
      "Database queries take 100ms+. Redis caches frequently accessed data in memory — the same query returns in under 1ms. MNCs use Redis to handle millions of requests per second without hammering the primary database.",
    roles: [
      "Backend Developer",
      "Platform Engineer",
      "Data Engineer",
      "Solutions Architect",
    ],
    learningPath:
      "Redis data structures → Redis as cache → Redis Sentinel/Cluster → Redis Certified Developer",
    demand: "High",
    salary: "₹9–22 LPA",
    companies: ["Twitter", "Instagram", "GitHub", "Snapchat", "TCS", "Infosys"],
    certifications: ["Redis Certified Developer"],
    funFact:
      "Redis is the most loved database in the Stack Overflow developer survey for 6 consecutive years. Twitter uses Redis to power timelines — 3 million reads per second from a single Redis cluster.",
    keyServices: [
      {
        name: "Redis Cache",
        description:
          "Cache database query results and API responses in memory for microsecond access.",
        scenario:
          "The product page used to call the database for every visitor. After Redis caching, 95% of requests are served from cache — page load dropped from 400ms to 8ms.",
      },
      {
        name: "Redis Data Structures",
        description:
          "Strings, lists, sets, sorted sets, hashes — rich data types beyond simple key-value.",
        scenario:
          "The real-time leaderboard uses a Redis Sorted Set — players' scores update in microseconds and the top-10 ranking is fetched in a single command without any sorting logic.",
      },
      {
        name: "Redis Pub/Sub",
        description:
          "Message broker for real-time event broadcasting between services.",
        scenario:
          "When an order ships, the orders service publishes an event to a Redis channel — the notification service and analytics service both receive it instantly without polling.",
      },
    ],
  },
  {
    name: "Workday",
    abbr: "WD",
    color: "#F6812A",
    category: "HCM/ERP",
    tagline: "Enterprise HR and finance — used by 60% of Fortune 500",
    what: "Workday is a cloud-native Human Capital Management (HCM) and financial management platform. It manages everything about employees — hiring, onboarding, payroll, performance reviews, learning, and succession planning — plus the financial operations of the company.",
    whyMncs:
      "Large enterprises can't manage 50,000 employees with spreadsheets. Workday is the single system of record for every employee, their role, compensation, performance, and career history — accessible by HR, managers, and finance in real time.",
    roles: [
      "Workday Consultant",
      "HCM Analyst",
      "HRIS Analyst",
      "Workday Integration Developer",
    ],
    learningPath:
      "Workday HCM Core Fundamentals → Workday Reporting → Integration (Studio/EIB) → Pro Certification",
    demand: "High",
    salary: "₹7–18 LPA",
    companies: ["Accenture", "Deloitte", "IBM", "Capgemini", "KPMG", "TCS"],
    certifications: [
      "Workday HCM Core",
      "Workday Financials",
      "Workday Integration",
    ],
    funFact:
      "Workday manages HR for over 10,000 organizations globally, including Netflix, Google, and Amazon. Workday consultants are among the highest paid in the HCM space — fresh Workday HCM certified professionals command ₹8+ LPA.",
    keyServices: [
      {
        name: "Workday HCM",
        description:
          "End-to-end HR management — hire to retire in one platform.",
        scenario:
          "When a new employee is hired, Workday creates their profile, triggers the onboarding checklist, sets up payroll, and grants system access — the HR team configures it once and the system handles the rest.",
      },
      {
        name: "Workday Payroll",
        description:
          "Automated payroll processing with tax calculations and compliance.",
        scenario:
          "Payroll for 50,000 employees across 12 countries runs automatically in Workday — tax rules, deductions, and compliance are built in per country.",
      },
      {
        name: "Workday Reporting & Analytics",
        description:
          "Drag-and-drop report builder with real-time workforce analytics.",
        scenario:
          "The CHRO asks for headcount by department and location — an analyst builds the report in Workday in 10 minutes without any SQL or external BI tool.",
      },
    ],
  },
  {
    name: "Microsoft Dynamics 365",
    abbr: "D365",
    color: "#002050",
    category: "CRM/ERP",
    tagline: "CRM + ERP unified — Microsoft's enterprise business platform",
    what: "Dynamics 365 is Microsoft's suite of intelligent business applications — combining CRM (Sales, Customer Service, Marketing) with ERP (Finance, Supply Chain, HR) in one platform. It's deeply integrated with Microsoft 365, Teams, and Azure AI.",
    whyMncs:
      "Companies already using Microsoft products (Office 365, Azure) choose Dynamics 365 for a unified data model — the same customer record visible in Teams, Outlook, and the field service app simultaneously.",
    roles: [
      "Dynamics 365 Consultant",
      "Power Platform Developer",
      "CRM Admin",
      "ERP Functional Consultant",
    ],
    learningPath:
      "MB-910 (CRM Fundamentals) → MB-920 (ERP Fundamentals) → MB-335 / MB-500 Specialist",
    demand: "High",
    salary: "₹8–20 LPA",
    companies: ["Accenture", "Capgemini", "HCL", "Infosys", "Wipro", "TCS"],
    certifications: [
      "MB-910 CRM Fundamentals",
      "MB-920 ERP Fundamentals",
      "MB-335 Field Service",
    ],
    funFact:
      "Dynamics 365 is used by 4 million companies worldwide. Combined with Power Platform (Power Apps, Power Automate), it enables citizen developers to build apps without writing a single line of code.",
    keyServices: [
      {
        name: "Dynamics 365 Sales",
        description:
          "AI-powered sales CRM — manage leads, opportunities, and forecasting.",
        scenario:
          "The sales rep opens Dynamics 365 on their phone before a client meeting — it shows the client's purchase history, open quotes, and an AI recommendation for the best upsell product.",
      },
      {
        name: "Dynamics 365 Finance",
        description:
          "Cloud ERP for financial operations — GL, AR, AP, and reporting.",
        scenario:
          "Finance uses Dynamics 365 to close the books 3x faster than their previous ERP — automated bank reconciliation and AI anomaly detection flag issues before month-end.",
      },
      {
        name: "Power Platform Integration",
        description:
          "Power Apps, Power Automate, and Power BI extend Dynamics 365 without custom code.",
        scenario:
          "A non-developer HR manager uses Power Apps to build a self-service leave request form that writes back to Dynamics 365 HR — approved in 2 hours, deployed company-wide.",
      },
    ],
  },
  {
    name: "Datadog",
    abbr: "DDG",
    color: "#774AA4",
    category: "Monitoring",
    tagline: "Cloud monitoring + APM — full observability in one platform",
    what: "Datadog is a cloud monitoring and observability platform covering infrastructure monitoring, application performance monitoring (APM), log management, and security. It gives engineering teams a unified view of their entire stack — from cloud VMs to Kubernetes pods to individual database queries.",
    whyMncs:
      "When a production incident occurs, engineering teams need to find the root cause in minutes. Datadog correlates metrics, traces, and logs in a single interface — reducing mean time to resolution (MTTR) from hours to minutes.",
    roles: [
      "Site Reliability Engineer (SRE)",
      "DevOps Engineer",
      "Platform Engineer",
      "Security Engineer",
    ],
    learningPath:
      "Datadog Fundamentals (free) → APM & Distributed Tracing → Datadog Certified Expert",
    demand: "High",
    salary: "₹10–24 LPA",
    companies: [
      "Stripe",
      "Peloton",
      "Samsung",
      "Accenture",
      "Infosys",
      "Deloitte",
    ],
    certifications: [
      "Datadog Fundamentals Certificate",
      "Datadog APM & Distributed Tracing",
    ],
    funFact:
      "Datadog monitors over 40 billion metrics per day. Their IPO in 2019 raised $648 million and the company now has a market cap of over $30 billion.",
    keyServices: [
      {
        name: "Infrastructure Monitoring",
        description:
          "Real-time metrics from servers, containers, and cloud services with customizable dashboards.",
        scenario:
          "The on-call engineer's Datadog dashboard shows a memory spike on 3 Kubernetes nodes at 2 AM — automated alerts fire before users notice any slowness.",
      },
      {
        name: "APM (Application Performance Monitoring)",
        description:
          "Distributed tracing to see how requests flow across every microservice.",
        scenario:
          "A customer checkout is slow. Datadog APM shows the 800ms bottleneck is in the payment microservice's database query — the engineer finds and fixes it in 15 minutes.",
      },
      {
        name: "Datadog Log Management",
        description:
          "Centralize, search, and analyze logs from every service in one place.",
        scenario:
          "After a deployment, 2% of API calls return errors. The engineer filters Datadog logs to the new build, finds a NullPointerException in one service, and rolls back in 5 minutes.",
      },
    ],
  },
  {
    name: "Looker",
    abbr: "LKR",
    color: "#4285F4",
    category: "Data Visualization",
    tagline: "Modern BI by Google — define metrics once, use everywhere",
    what: "Looker (now part of Google Cloud) is a business intelligence platform that lets data teams define metrics and business logic in LookML (a modeling language) — then every dashboard and report in the company uses the same definitions. No more conflicting revenue numbers from different teams.",
    whyMncs:
      "In large organizations, the sales team's Excel says revenue is ₹100 crore but the finance team's report says ₹95 crore — because they define revenue differently. Looker's LookML model defines revenue once, shared by everyone.",
    roles: [
      "Data Analyst",
      "BI Developer",
      "Analytics Engineer",
      "Business Analyst",
    ],
    learningPath:
      "Looker basics → LookML fundamentals → Google Cloud Looker certification → Advanced data modeling",
    demand: "High",
    salary: "₹8–20 LPA",
    companies: [
      "Google",
      "Deloitte",
      "Accenture",
      "Spotify",
      "The New York Times",
    ],
    certifications: [
      "Google Cloud Looker Business Intelligence",
      "Looker LookML Developer",
    ],
    funFact:
      "Google acquired Looker for $2.6 billion in 2019. LookML was designed so that a data model change automatically updates all downstream dashboards — no manual rework.",
    keyServices: [
      {
        name: "LookML Modeling",
        description:
          "Define business metrics and data relationships once in code — used across all dashboards.",
        scenario:
          "The data team defines 'monthly active users' in LookML once — product, marketing, and finance dashboards all show the same number from the same calculation.",
      },
      {
        name: "Looker Dashboards & Explores",
        description:
          "Self-service BI — business users explore data without writing SQL.",
        scenario:
          "A marketing manager builds their own campaign performance dashboard in Looker — filtering by channel, date, and geography — without filing a ticket to the data team.",
      },
      {
        name: "Looker Embedded Analytics",
        description:
          "Embed Looker dashboards directly inside your own product.",
        scenario:
          "The SaaS company embeds Looker dashboards into their customer portal — clients see their own usage analytics without leaving the product UI.",
      },
    ],
  },
];

const DEMAND_COLORS: Record<string, string> = {
  "Very High": "text-[oklch(var(--capstone-accent))]",
  High: "text-[oklch(var(--skill-cloud))]",
  Medium: "text-[oklch(var(--corporate-accent))]",
};

function PlatformCard({ platform }: { platform: Platform }) {
  const [expanded, setExpanded] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const { isSubscribed, isAdmin } = useSubscription();
  const hasAccess = isSubscribed || isAdmin;

  const handleExpandClick = () => {
    if (!hasAccess) {
      setShowPaywall(true);
      return;
    }
    setExpanded(!expanded);
  };

  return (
    <div
      className="course-card p-5"
      data-ocid={`platform-card-${platform.abbr.toLowerCase()}`}
    >
      {/* Header — always visible */}
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm"
          style={{ backgroundColor: platform.color }}
        >
          {platform.abbr.length > 4 ? platform.abbr.slice(0, 4) : platform.abbr}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="font-display font-bold text-base text-foreground leading-tight">
                {platform.name}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {platform.tagline}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Badge
                className="badge-category text-xs"
                style={{
                  backgroundColor: `${platform.color}18`,
                  color: platform.color,
                  borderColor: `${platform.color}35`,
                  borderWidth: "1px",
                }}
              >
                {platform.category}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Premium gated content */}
      {hasAccess ? (
        <>
          {/* Demand + Salary */}
          <div className="flex items-center gap-4 mb-3 text-xs">
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">Demand:</span>
              <strong className={DEMAND_COLORS[platform.demand]}>
                {platform.demand}
              </strong>
            </span>
            <span className="flex items-center gap-1 font-semibold text-[oklch(var(--capstone-accent))]">
              <Zap className="w-3 h-3" />
              {platform.salary}
            </span>
          </div>

          {/* What it does */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {platform.what}
          </p>

          {/* Fun fact */}
          <div className="p-2.5 rounded-lg bg-[oklch(var(--platform-accent)/0.06)] border border-[oklch(var(--platform-accent)/0.15)] mb-3">
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold text-[oklch(var(--platform-accent))]">
                💡 Did you know?{" "}
              </span>
              {platform.funFact}
            </p>
          </div>

          {/* Expand toggle */}
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-semibold text-[oklch(var(--platform-accent))] hover:opacity-80 transition-smooth w-full justify-between"
            onClick={() => setExpanded(!expanded)}
            data-ocid={`platform-expand-${platform.abbr.toLowerCase()}`}
          >
            <span>
              {expanded
                ? "Show less"
                : "See key services, roles & learning path"}
            </span>
            {expanded ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {expanded && (
            <div className="mt-3 pt-3 border-t border-border space-y-4">
              {/* Key Services */}
              <div>
                <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[oklch(var(--platform-accent))]" />{" "}
                  Key Services
                </p>
                <div className="space-y-2">
                  {platform.keyServices.map((svc) => (
                    <div
                      key={svc.name}
                      className="p-2.5 rounded-lg bg-[oklch(var(--platform-accent)/0.05)] border border-[oklch(var(--platform-accent)/0.15)]"
                    >
                      <p className="text-xs font-semibold text-foreground mb-0.5">
                        {svc.name}
                      </p>
                      <p className="text-xs text-muted-foreground mb-1">
                        {svc.description}
                      </p>
                      <p className="text-xs text-[oklch(var(--platform-accent)/0.9)] italic">
                        📌 {svc.scenario}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why MNCs use it */}
              <div>
                <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
                  <Briefcase className="w-3 h-3" /> Why MNCs use it
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {platform.whyMncs}
                </p>
              </div>

              {/* Roles */}
              <div>
                <p className="text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Roles that use this
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platform.roles.map((role) => (
                    <span
                      key={role}
                      className="text-xs px-2 py-0.5 rounded-full bg-[oklch(var(--platform-accent)/0.08)] text-[oklch(var(--platform-accent))] border border-[oklch(var(--platform-accent)/0.2)]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <p className="text-xs font-semibold text-foreground mb-1.5 flex items-center gap-1">
                  <Star className="w-3 h-3" /> Key Certifications
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platform.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hiring companies */}
              <div>
                <p className="text-xs font-semibold text-foreground mb-1.5">
                  🏢 Hiring companies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platform.companies.map((co) => (
                    <span
                      key={co}
                      className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
                    >
                      {co}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning Path */}
              <div className="p-2.5 rounded-lg bg-muted/50 border border-border">
                <p className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> Learning Path
                </p>
                <p className="text-xs text-muted-foreground">
                  {platform.learningPath}
                </p>
              </div>
            </div>
          )}
        </>
      ) : (
        // Blurred premium content overlay for non-subscribers
        <div className="relative mt-1">
          {/* Blurred preview content */}
          <div
            className="pointer-events-none select-none"
            style={{ filter: "blur(6px)", userSelect: "none" }}
            aria-hidden="true"
          >
            <div className="flex items-center gap-4 mb-3 text-xs">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-muted-foreground" />
                <span className="text-muted-foreground">Demand:</span>
                <strong className={DEMAND_COLORS[platform.demand]}>
                  {platform.demand}
                </strong>
              </span>
              <span className="flex items-center gap-1 font-semibold text-[oklch(var(--capstone-accent))]">
                <Zap className="w-3 h-3" />
                {platform.salary}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">
              {platform.what}
            </p>
            <div className="p-2.5 rounded-lg bg-[oklch(var(--platform-accent)/0.06)] border border-[oklch(var(--platform-accent)/0.15)] mb-3">
              <p className="text-xs text-muted-foreground line-clamp-2">
                💡 {platform.funFact}
              </p>
            </div>
            <div className="space-y-1.5">
              {platform.keyServices.slice(0, 2).map((svc) => (
                <div
                  key={svc.name}
                  className="p-2 rounded-lg bg-muted/40 border border-border"
                >
                  <p className="text-xs font-semibold text-foreground">
                    {svc.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {svc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lock overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-background/70 backdrop-blur-[1px]">
            <div className="flex flex-col items-center gap-2 text-center px-4">
              <div className="w-10 h-10 rounded-full bg-amber-400/15 border border-amber-400/30 flex items-center justify-center">
                <Lock className="w-5 h-5 text-amber-500" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                Premium Content
              </p>
              <p className="text-xs text-muted-foreground">
                Upgrade to see salary data, roles, certifications, key services,
                and learning path
              </p>
            </div>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 shadow-md"
              onClick={() => setShowPaywall(true)}
              data-ocid={`platform-upgrade-${platform.abbr.toLowerCase()}`}
            >
              Upgrade
            </Button>
          </div>
        </div>
      )}

      {/* Also blur the expand button for non-subscribers */}
      {!hasAccess && (
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-semibold text-[oklch(var(--platform-accent))] hover:opacity-80 transition-smooth w-full justify-between mt-3 pt-3 border-t border-border"
          onClick={handleExpandClick}
          data-ocid={`platform-expand-${platform.abbr.toLowerCase()}`}
        >
          <span>See key services, roles & learning path</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      )}

      <PaywallModal
        open={showPaywall}
        onOpenChange={setShowPaywall}
        lessonTitle={`${platform.name} — Platform Details`}
      />
    </div>
  );
}

const CATEGORY_FILTERS = [
  "All",
  "Cloud",
  "CRM",
  "Integration",
  "Data Warehouse",
  "Analytics",
  "Data Intelligence",
  "IT Service Mgmt",
  "ERP",
  "Database + Cloud",
  "Data Visualization",
  "Marketing",
  "DevOps",
  "Monitoring",
  "Project Mgmt",
  "Database",
  "HCM/ERP",
  "CRM/ERP",
];

export default function MncPlatforms() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PLATFORMS
      : PLATFORMS.filter((p) => p.category === activeFilter);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Premium notice banner */}
      <div className="mb-6 p-4 rounded-xl bg-[oklch(var(--platform-accent)/0.08)] border border-[oklch(var(--platform-accent)/0.25)] flex items-start gap-3">
        <Star className="w-5 h-5 text-[oklch(var(--platform-accent))] shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[oklch(var(--platform-accent))]">
            Know These Platforms Before Your Interview
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Each card includes key services with real workplace scenarios,
            salary ranges, certifications, and career paths. Platform names and
            categories are visible to all — upgrade to see the full details.
          </p>
        </div>
        <Badge
          className="ml-auto shrink-0"
          style={{
            backgroundColor: "oklch(var(--platform-accent)/0.15)",
            color: "oklch(var(--platform-accent))",
          }}
        >
          30 Platforms
        </Badge>
      </div>

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-5 h-5 text-[oklch(var(--platform-accent))]" />
          <span className="text-sm font-semibold text-[oklch(var(--platform-accent))] uppercase tracking-wide">
            MNC Platforms
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl text-foreground mb-3">
          The Platforms MNCs Actually Use
        </h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-4">
          Get familiar with these before your first interview. Knowing what a
          platform does — even without hands-on experience — shows interviewers
          that you understand the real corporate tech stack.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { value: "30+", label: "Enterprise Platforms" },
            { value: "80%", label: "of MNCs use AWS" },
            { value: "₹4–35 LPA", label: "Salary range" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-3 rounded-xl bg-[oklch(var(--platform-accent)/0.06)] border border-[oklch(var(--platform-accent)/0.15)] text-center"
            >
              <p className="font-display font-bold text-xl text-[oklch(var(--platform-accent))]">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Interview tip */}
        <div className="p-4 rounded-xl bg-card border border-border flex gap-3">
          <div className="text-2xl shrink-0">🎯</div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Interview Pro Tip
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              When an interviewer asks "Do you know [Platform]?" — even if you
              don't have hands-on experience, saying "I know it's used for X and
              the common roles are Y" shows awareness. That alone gets you past
              the initial screening.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        data-ocid="platform-category-filter"
      >
        {CATEGORY_FILTERS.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-smooth border ${
              activeFilter === cat
                ? "bg-[oklch(var(--platform-accent))] text-white border-[oklch(var(--platform-accent))]"
                : "bg-muted text-muted-foreground border-border hover:border-[oklch(var(--platform-accent)/0.4)]"
            }`}
            data-ocid={`platform-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Platform Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {filtered.map((platform) => (
          <PlatformCard key={platform.name} platform={platform} />
        ))}
      </div>
    </div>
  );
}
