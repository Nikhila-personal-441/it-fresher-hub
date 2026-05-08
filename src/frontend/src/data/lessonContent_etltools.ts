// ETL Tools lessons for IT Fresher Hub — 30 scenario-based lessons
import type { LessonContent } from "@/types";

export const ETL_TOOLS_LESSONS: LessonContent[] = [
  {
    title: "What is ETL? Extract, Transform, Load Explained",
    content:
      "Rahul just joined a bank's data team. On Day 1, his manager says: 'We pull customer data from 12 different systems every night and load it into our data warehouse.' Rahul nods, pretending to understand. That's ETL — Extract, Transform, Load.\n\nExtract means pulling raw data from sources — databases, APIs, flat files, spreadsheets. Transform means cleaning it: fixing date formats, removing duplicates, converting currencies. Load means pushing the clean, structured data into a destination like a data warehouse.\n\nHere's a real example: An e-commerce company extracts order data from MySQL, transforms it by calculating totals, removing cancelled orders, and converting amounts to USD, then loads it into Redshift for business reporting. ETL is why your BI dashboard shows consistent, accurate numbers every morning instead of chaos.",
    funFact:
      "ETL Developer is among the top 10 entry-level data roles in India in 2025, with starting salaries of Rs 4.5–7 LPA at MNCs like TCS, Wipro, and Accenture.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's team pulls sales data from MySQL, removes nulls and formats dates, then pushes it to Redshift. Which ETL phase is 'removing nulls and formatting dates'?",
      options: ["Extract", "Transform", "Load", "Validate"],
      correctAnswer: "Transform",
      explanation:
        "Cleaning, formatting, removing nulls, and standardizing data are all part of the Transform phase — the T in ETL.",
    },
  },
  {
    title: "ETL vs ELT: The Modern Data Architecture Shift",
    content:
      "Rahul's colleague Priya explains: 'We used to ETL everything, but now with cloud warehouses we switched to ELT.' Rahul is confused. What's the difference?\n\nTraditional ETL: Extract from source, Transform in a staging server, then Load into the warehouse. The transformation happens BEFORE loading. This made sense when warehouses were expensive and storage was limited.\n\nModern ELT: Extract from source, Load raw data directly into the cloud warehouse (like Snowflake or BigQuery), then Transform using SQL inside the warehouse. Cloud warehouses are so powerful and cheap that it's faster to load everything raw and transform later.\n\nWhen to use which: If you have sensitive data that must be cleaned before storage, use ETL. If you're working with cloud-native tools and need flexibility, ELT is faster. Tools like dbt are built specifically for the ELT pattern, using SQL transformations directly in the warehouse.",
    funFact:
      "The global data integration market (ETL and ELT tools) is worth over 13 billion USD in 2025 and growing at 12 percent annually.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's team loads raw transaction data into Snowflake first, then runs SQL transformations inside Snowflake. This is which pattern?",
      options: ["ETL", "ELT", "ETE", "LTE"],
      correctAnswer: "ELT",
      explanation:
        "ELT (Extract, Load, Transform) loads raw data into the warehouse first, then transforms it using the warehouse's own compute power. This is the modern cloud-native approach.",
    },
  },
  {
    title: "Data Warehouse Concepts: Why ETL Exists",
    content:
      "Rahul asks: 'Why can't we just query the production database directly for reports?' His manager Arjun explains with a scenario. Imagine your bank has 5 million customers. If your analytics team runs heavy SQL reports on the same database handling live ATM transactions, the database slows down and customers can't access their accounts. That's a disaster.\n\nA Data Warehouse is a separate, read-optimized database designed specifically for analytics. It's structured differently — using star schemas and dimension/fact tables — so reports run 10x faster. ETL moves data from operational databases into the warehouse on a schedule (nightly, hourly) without touching production.\n\nKey warehouse concepts: OLTP (Online Transaction Processing) databases handle live operations. OLAP (Online Analytical Processing) warehouses handle analytics. Fact tables store measurable events like sales transactions. Dimension tables store context like customer names, product categories, and dates.",
    funFact:
      "Amazon's internal data warehouse processes over 7 exabytes of data daily. That's 7 million terabytes — enough to store every movie ever made, thousands of times over.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why does Rahul's bank run ETL to move data into a warehouse instead of reporting directly from production?",
      options: [
        "Production databases are too old",
        "To avoid slowing down live operations with heavy queries",
        "Warehouses are cheaper than production databases",
        "ETL is required by banking regulations",
      ],
      correctAnswer: "To avoid slowing down live operations with heavy queries",
      explanation:
        "Running analytics on production databases can lock tables and slow down live transactions. A data warehouse is isolated for analytics — ETL keeps it updated without touching production.",
    },
  },
  {
    title: "ETL in Enterprise: Real Use Cases at Banks and Telecoms",
    content:
      "Rahul's first project: HDFC Bank needs to merge customer data from three legacy systems into one data warehouse for a 360-degree customer view. This is a classic ETL use case.\n\nBanking ETL use cases: Merging core banking, credit card, and loan data into one warehouse. Daily reconciliation of transactions. Regulatory reporting like Basel III, RBI compliance. Fraud detection by cross-referencing transaction patterns.\n\nTelecom ETL use cases: Merging call records (CDRs) from towers with customer subscription data. Calculating monthly bills from raw usage data. Network performance dashboards showing dropped call rates by region.\n\nRetail ETL: Syncing inventory from 500 stores into one central system. Daily sales dashboard showing revenue by region, product, and salesperson.\n\nIn every case, ETL is the invisible engine that makes business intelligence possible. Without it, business reports would be guesswork instead of data-driven decisions.",
    funFact:
      "JPMorgan Chase processes over 6 trillion USD in payments per year — all reconciled through ETL pipelines that run every night.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "A telecom company merges call records from towers with customer billing data to generate monthly invoices. This is a real-world use of ___ pipelines.",
      correctAnswer: "ETL",
      explanation:
        "ETL pipelines are used in telecoms to extract raw call data, transform it into billable amounts, and load it into billing systems.",
    },
  },
  {
    title: "Informatica PowerCenter: The Industry Standard ETL Tool",
    content:
      "Rahul's offer letter says: 'Required skills: Informatica PowerCenter experience preferred.' He Googles it and finds it's the most-used ETL tool in Fortune 500 companies. Time to learn.\n\nInformatica PowerCenter is the gold standard enterprise ETL tool used at banks, insurance companies, telecoms, and MNCs worldwide. It's been around since 1993 and powers some of the most critical data pipelines in the world.\n\nWhy Informatica? It handles massive data volumes, supports 100+ connectors (Oracle, SAP, Salesforce, flat files), has built-in error handling, and provides a visual interface for building pipelines without writing code. A single Informatica workflow can process 50 million records in hours.\n\nInformatica is used by Deloitte, Accenture, TCS, and Wipro for almost every banking and insurance data project. Knowing it makes you hireable for data engineering roles immediately.",
    funFact:
      "Informatica is used by 85 of the Fortune 100 companies. If you work in data at a bank or insurer, there is a very high chance Informatica is already running in that company.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul is applying for an ETL Developer role at a bank. Which tool should he prioritize learning based on industry demand?",
      options: [
        "Microsoft Excel Macros",
        "Informatica PowerCenter",
        "Notepad++",
        "Google Sheets",
      ],
      correctAnswer: "Informatica PowerCenter",
      explanation:
        "Informatica PowerCenter is the most widely used ETL tool in banking, insurance, and telecom. It's the industry standard for enterprise data pipelines.",
    },
  },
  {
    title: "Informatica Architecture: Repository, Server, Designer",
    content:
      "Rahul opens Informatica for the first time. There are four different windows and he has no idea what they do. His senior Sneha walks him through the architecture.\n\nRepository Service: The brain that stores all metadata — mappings, workflows, and configurations. Think of it as a database that remembers everything you build in Informatica.\n\nIntegration Service: The engine that actually runs ETL jobs. When you click 'Run Workflow,' the Integration Service executes the data pipeline, reads from sources, applies transformations, and writes to targets.\n\nPowerCenter Designer: Where you build mappings visually — drag and drop sources, transformations, and targets. This is where developers spend most of their time.\n\nWorkflow Monitor: A real-time dashboard showing which workflows are running, completed, or failed. You can see row counts, error logs, and performance stats here.\n\nSneha says: 'Think of it like cooking. Designer is the recipe book. Repository stores your recipes. Integration Service is the chef cooking the meal. Workflow Monitor is the kitchen display showing order status.'",
    funFact:
      "A single Informatica PowerCenter installation at a large bank can have over 10,000 mappings built over 10 years — each one a different data pipeline.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to see which ETL workflows ran successfully last night and how many rows were processed. Which Informatica component does he check?",
      options: [
        "PowerCenter Designer",
        "Repository Service",
        "Workflow Monitor",
        "Integration Service",
      ],
      correctAnswer: "Workflow Monitor",
      explanation:
        "Workflow Monitor is Informatica's real-time and historical dashboard. It shows workflow status, row counts, error logs, and execution duration.",
    },
  },
  {
    title: "Creating Your First Informatica Mapping",
    content:
      "Sneha gives Rahul his first task: 'Create a mapping to extract customer data from Oracle, filter inactive customers, and load active ones into our Teradata warehouse.' Here's how Rahul builds it step by step.\n\nStep 1 — Source Definition: Drag the Oracle CUSTOMERS table into Designer. Informatica reads the schema automatically.\n\nStep 2 — Filter Transformation: Add a Filter transformation. Set the condition: STATUS = 'ACTIVE'. Only active customers pass through.\n\nStep 3 — Expression Transformation: Add a field FULL_NAME by concatenating FIRST_NAME and LAST_NAME: FIRST_NAME || ' ' || LAST_NAME.\n\nStep 4 — Target Definition: Drag the Teradata DW_CUSTOMERS table. Map source fields to target fields by connecting them.\n\nStep 5 — Create a Session: In Workflow Designer, create a Session task linked to your mapping. Add a Start task, connect them, and create a Workflow.\n\nStep 6 — Run and Monitor: Click Run Workflow. Check Workflow Monitor. See rows loading in real time.",
    funFact:
      "Experienced Informatica developers at MNCs in India earn Rs 8–15 LPA. Certified Informatica developers can earn Rs 18–25 LPA at global banks.",
    xpReward: 110,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Rahul's Informatica mapping, which transformation removes inactive customers before loading to the warehouse?",
      options: [
        "Expression Transformation",
        "Filter Transformation",
        "Aggregator Transformation",
        "Joiner Transformation",
      ],
      correctAnswer: "Filter Transformation",
      explanation:
        "The Filter Transformation passes only rows that meet a specified condition. Setting STATUS = 'ACTIVE' filters out all inactive customers.",
    },
  },
  {
    title: "Common Informatica Transformations",
    content:
      "After building his first mapping, Rahul realizes there are dozens of transformations in Informatica's toolbox. Sneha explains the most important ones with real examples.\n\nExpression: Calculate derived values. Example: SALARY * 1.1 to compute a 10 percent raise.\n\nFilter: Pass only rows matching a condition. Example: Only rows where REGION = 'SOUTH'.\n\nAggregator: Group and aggregate data. Example: SUM(SALES) grouped by REGION — like SQL GROUP BY.\n\nJoiner: Join data from two different sources. Example: Join customer data from Oracle with transaction data from MySQL.\n\nLookup: Fetch values from a reference table. Example: Look up the CITY_NAME from a CITIES table using CITY_CODE.\n\nSequence Generator: Auto-generate unique IDs. Example: Generate a surrogate key for each new warehouse row.\n\nSorter: Sort rows by a column. Example: Sort records by DATE before loading into a time-series table.\n\nRouter: Route rows to different targets based on conditions. Example: VIP customers go to one table, regular to another.",
    funFact:
      "Informatica has over 70 built-in transformations. Most real-world ETL projects use only about 8–10 regularly.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs to calculate total sales per region from transaction data in Informatica. Which transformation should he use?",
      options: [
        "Filter Transformation",
        "Joiner Transformation",
        "Aggregator Transformation",
        "Sequence Generator",
      ],
      correctAnswer: "Aggregator Transformation",
      explanation:
        "The Aggregator Transformation performs GROUP BY operations — SUM, COUNT, AVG, MAX, MIN grouped by a column — just like SQL aggregate functions.",
    },
  },
  {
    title: "Informatica in Banking and Finance Projects",
    content:
      "Rahul is now assigned to a real project: ICICI Bank's Customer 360 initiative. The goal is to merge data from five systems — core banking, credit cards, loans, fixed deposits, and mobile app — into one unified customer profile in the data warehouse.\n\nChallenge 1: Each system uses a different customer ID format. Informatica's Lookup transformation finds the master ID by cross-referencing a golden record table.\n\nChallenge 2: Some customers appear in 3 systems with slightly different names — 'Rahul Sharma', 'R. Sharma', 'R Sharma'. Informatica's Address Validator and custom Expression transformations standardize the names.\n\nChallenge 3: The pipeline must complete by 6 AM before business hours. Sneha tunes the pipeline: partitioning the sources, increasing cache size, and enabling push-down optimization so some transformations run directly in Oracle.\n\nResult: One nightly Informatica workflow now gives the bank a complete 360-degree view of 5 million customers. The marketing team uses this for personalized product offers.",
    funFact:
      "Over 80 percent of Indian banks, including SBI, HDFC, and ICICI, use Informatica PowerCenter for their core data warehouse pipelines.",
    xpReward: 110,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "When merging customer data from 5 different banking systems, Rahul uses Informatica's ___ transformation to find the master customer ID from a golden record table.",
      correctAnswer: "Lookup",
      explanation:
        "The Lookup transformation fetches values from a reference table during the ETL run — perfect for finding master IDs or enriching records with additional attributes.",
    },
  },
  {
    title: "Talend Open Studio: Free ETL Power",
    content:
      "Rahul's startup client doesn't want to pay for Informatica's enterprise license. His colleague Arjun suggests Talend Open Studio — a free, open-source ETL tool that rivals Informatica for many use cases.\n\nTalend is a Java-based ETL tool with a visual drag-and-drop interface. The key difference from Informatica: Talend generates actual Java code from your visual design. This means you can inspect and modify the underlying code — great for custom logic that GUI tools can't handle.\n\nTalend's advantages: Free Open Studio version is production-ready. Over 900 built-in connectors. Active community with thousands of templates. Generates deployable Java JAR files you can run anywhere.\n\nTalend is widely used at mid-size companies, startups, and consulting firms. Companies like Lenovo, L'Oreal, and eBay use Talend. For a fresher, Talend is an excellent starting point — you get the ETL skills plus Java exposure.",
    funFact:
      "Talend was acquired by Qlik in 2023. Talend Open Studio remains free and is one of the most downloaded ETL tools in the world with over 7 million downloads.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What makes Talend Open Studio unique compared to Informatica PowerCenter?",
      options: [
        "It only works with Oracle databases",
        "It generates actual Java code from your visual design",
        "It requires no installation",
        "It is exclusively cloud-based",
      ],
      correctAnswer: "It generates actual Java code from your visual design",
      explanation:
        "Talend translates your visual ETL design into Java code, which you can inspect, modify, and deploy as a standalone JAR file. This gives you both visual ease and code-level control.",
    },
  },
  {
    title: "Setting Up Talend Open Studio",
    content:
      "Arjun shows Rahul how to set up Talend Open Studio. Here's the step-by-step guide.\n\nStep 1 — Download: Go to talend.com, download Talend Open Studio for Data Integration. It's a zip file (~500 MB).\n\nStep 2 — Install Java JDK: Talend requires Java 11 or higher. Download OpenJDK 11 from adoptium.net and install it. Set JAVA_HOME in environment variables.\n\nStep 3 — Launch: Extract Talend zip, run TOS_DI.exe (Windows) or ./TOS_DI.sh (Linux/Mac). First launch creates a new project — name it 'MyFirstETLProject.'\n\nStep 4 — Explore the interface: Repository panel on the left (your jobs and metadata). Design canvas in the center (drag components here). Component Properties at the bottom (configure each component).\n\nStep 5 — Add a Database Connection: Right-click on Metadata > Db Connections. Add your MySQL connection — host, port, database name, username, password. Talend will test the connection.\n\nYou're now ready to build your first Talend job!",
    funFact:
      "Talend Open Studio is the most popular free ETL tool for learning data engineering. Over 40 percent of data engineering bootcamp students learn ETL using Talend.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Talend Open Studio requires ___ to be installed because it generates and compiles Java code under the hood.",
      correctAnswer: "Java JDK",
      explanation:
        "Talend generates Java code from your visual designs and compiles it at runtime, so Java JDK (not just JRE) must be installed on your machine.",
    },
  },
  {
    title: "Building Your First Talend Job",
    content:
      "Rahul's task: Build a Talend job to read a CSV file of employee records and load them into a MySQL database. Here's how he builds it.\n\nStep 1 — Create a new Job: Right-click on Job Designs in the Repository. New Job — name it 'CSV_to_MySQL.'\n\nStep 2 — Add tFileInputDelimited: This component reads CSV files. Drag it to the canvas. In properties, set the file path, delimiter (comma), and header row.\n\nStep 3 — Add tDBOutput: This component writes to a database. Drag it to the canvas. In properties, select your MySQL connection, set the table name DW_EMPLOYEES, and set action to INSERT.\n\nStep 4 — Connect components: Right-click tFileInputDelimited, choose Row > Main, and connect to tDBOutput.\n\nStep 5 — Map columns: In tDBOutput properties, map the CSV columns (name, salary, department) to the corresponding database columns.\n\nStep 6 — Run: Click the Run button. Talend compiles the job to Java and executes. Check the Console tab for row counts and errors.\n\nCongratulations — you just built and ran an ETL pipeline!",
    funFact:
      "Talend jobs are compiled to Java bytecode, meaning they can run on any machine with Java installed — Windows, Linux, or cloud servers.",
    xpReward: 110,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Rahul's Talend job, which component is responsible for reading the CSV file of employee records?",
      options: ["tDBOutput", "tMap", "tFileInputDelimited", "tDBInput"],
      correctAnswer: "tFileInputDelimited",
      explanation:
        "tFileInputDelimited reads delimited text files like CSVs. You configure the file path, delimiter, and whether the first row contains headers.",
    },
  },
  {
    title: "Common Talend Components: tMap, tDBInput, tDBOutput",
    content:
      "Sneha tells Rahul: 'Learn these 10 Talend components and you can build 80 percent of real-world ETL jobs.' Here are the most important ones.\n\ntDBInput: Reads data from a database using a SQL query. Example: SELECT * FROM CUSTOMERS WHERE STATUS = 'ACTIVE'.\n\ntDBOutput: Writes data to a database. Actions include INSERT, UPDATE, INSERT OR UPDATE, DELETE.\n\ntFileInputDelimited: Reads CSV, TSV, or pipe-delimited files.\n\ntFileOutputDelimited: Writes output to a delimited file — great for generating reports or exports.\n\ntMap: The most powerful Talend component. Joins multiple inputs, applies transformations, filters rows, and routes to multiple outputs — all in one visual editor.\n\ntFilterRow: Filters rows based on conditions. Example: Pass only rows where SALARY > 50000.\n\ntAggregateRow: Groups and aggregates data — SUM, COUNT, AVG grouped by columns.\n\ntSortRow: Sorts rows by one or more columns.\n\ntLogRow: Logs row data to the console — invaluable for debugging.\n\ntUnite: Merges two data flows with the same schema into one.",
    funFact:
      "The tMap component is so powerful that experienced Talend developers often call it the 'Swiss Army knife' of Talend. Mastering tMap alone can make you productive on real projects.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs to join customer data from MySQL with transaction data from PostgreSQL and route VIP customers to a separate output. Which Talend component handles all of this in one place?",
      options: ["tFilterRow", "tMap", "tDBInput", "tUnite"],
      correctAnswer: "tMap",
      explanation:
        "tMap is Talend's most versatile component — it joins multiple input flows, applies transformations with expressions, filters rows, and routes to multiple output flows, all in a single visual editor.",
    },
  },
  {
    title: "Talend vs Informatica: Choosing the Right Tool",
    content:
      "Rahul's client is choosing between Talend and Informatica for their new data warehouse project. Arjun helps him evaluate both.\n\nInformatica wins when: Budget is not a constraint. The project is at a large bank or insurer with thousands of complex pipelines. The team needs enterprise support, SLA guarantees, and advanced features like data masking and data lineage. The company already uses Informatica elsewhere.\n\nTalend wins when: Budget is limited or the client wants open source. The team is comfortable with Java for custom logic. The project involves cloud integration (Talend has strong AWS/Azure connectors). The team needs to deploy ETL jobs as microservices.\n\nBoth tools support: 100+ database and file connectors. Visual drag-and-drop pipeline building. Scheduling via external schedulers. Parallel processing for performance.\n\nKey differences: Informatica is GUI-first with no code needed. Talend generates code you can customize. Informatica licenses cost Rs 20–50 lakh per year. Talend Open Studio is free. For MNC enterprise projects, Informatica dominates. For agile startups, Talend is preferred.",
    funFact:
      "In job postings on Naukri.com in 2025, Informatica is mentioned 3x more than Talend for ETL Developer roles in India — but Talend roles pay similar salaries.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A startup with a tight budget wants to build ETL pipelines with cloud integration and the ability to customize pipeline code. Which tool is the better choice?",
      options: [
        "Informatica PowerCenter",
        "Microsoft Excel",
        "Talend Open Studio",
        "Oracle SQL Developer",
      ],
      correctAnswer: "Talend Open Studio",
      explanation:
        "Talend Open Studio is free, cloud-friendly, and generates customizable Java code — making it ideal for budget-conscious teams that need flexibility.",
    },
  },
  {
    title: "Apache NiFi: Real-Time Data Ingestion",
    content:
      "Rahul's bank client has a new requirement: they need to stream ATM transaction data in real time to a fraud detection system. Batch ETL that runs at night won't cut it. His architect recommends Apache NiFi.\n\nApache NiFi is an open-source tool designed for real-time data flow automation. Unlike Informatica or Talend which are batch-oriented, NiFi excels at continuous data ingestion — processing data as it arrives, not in nightly batches.\n\nNiFi use cases: Streaming IoT sensor data from factory machines to a monitoring dashboard. Real-time ingestion of social media feeds for sentiment analysis. Continuous file transfer from branch offices to a central data lake. Moving logs from 500 servers to Elasticsearch in real time.\n\nNiFi's drag-and-drop web interface makes it easy to build data flows visually. You create processors, connect them with arrows (connections), and set policies for how data flows — retry on failure, route errors to different paths, buffer data during outages.",
    funFact:
      "Apache NiFi was originally developed by the NSA (US National Security Agency) for processing intelligence data and was donated to the Apache Foundation in 2014.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs to send ATM fraud alerts to a monitoring system as each transaction happens. Which tool is best suited for this real-time requirement?",
      options: [
        "Informatica PowerCenter",
        "Talend Open Studio",
        "Apache NiFi",
        "Microsoft SSIS",
      ],
      correctAnswer: "Apache NiFi",
      explanation:
        "Apache NiFi is designed for real-time data flow — processing data as it arrives rather than in scheduled batches. It's ideal for streaming, IoT, and continuous data ingestion scenarios.",
    },
  },
  {
    title: "NiFi Architecture: FlowFiles and Processors",
    content:
      "Sneha explains NiFi's core concepts to Rahul with a real analogy.\n\nFlowFile: Every piece of data in NiFi is a FlowFile — a packet of data with content (the actual bytes) and attributes (metadata like filename, size, timestamp). Think of it like an envelope: the letter inside is the content, the address on the outside is the attributes.\n\nProcessor: A NiFi processor is a single data operation — get a file, route it, transform it, send it to a database, etc. NiFi has 300+ built-in processors.\n\nConnection: The queue between processors. FlowFiles wait in connections until the next processor picks them up. You can set connection priorities and backpressure thresholds.\n\nProcess Group: A container for grouping related processors — like a sub-pipeline. Great for organizing complex flows.\n\nController Service: Shared configuration for database connections, SSL credentials, etc. — used by multiple processors without duplicating config.\n\nA typical NiFi flow: GetFile (reads a file) → UpdateAttribute (adds metadata) → PutDatabaseRecord (inserts into DB). Each step is a processor; FlowFiles move between them through connections.",
    funFact:
      "A single NiFi instance can process millions of FlowFiles per second and handle data flows from thousands of sources simultaneously.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In Apache NiFi, every piece of data traveling through the pipeline is wrapped in a ___, which contains both the data content and metadata attributes.",
      correctAnswer: "FlowFile",
      explanation:
        "FlowFiles are NiFi's fundamental data unit — like envelopes carrying data (content) and information about that data (attributes) through the pipeline.",
    },
  },
  {
    title: "Building a NiFi Data Pipeline",
    content:
      "Rahul's task: Use NiFi to read JSON files from a folder, parse them, and insert records into a PostgreSQL database. Here's the step-by-step.\n\nStep 1 — Access NiFi UI: Open your browser to http://localhost:8080/nifi. You see a blank canvas.\n\nStep 2 — Add GetFile Processor: Drag Processor from the toolbar. Search for GetFile. Configure Input Directory, File Filter (*.json), and Keep Source File (false to delete after reading).\n\nStep 3 — Add EvaluateJsonPath: This processor extracts fields from JSON. Configure properties: name -> $.name, salary -> $.salary, department -> $.department.\n\nStep 4 — Add PutDatabaseRecord: This inserts extracted data into PostgreSQL. Configure: Database Connection Pool (point to your DB), Table Name (employees), Statement Type (INSERT).\n\nStep 5 — Connect Processors: Draw connections between GetFile -> EvaluateJsonPath -> PutDatabaseRecord. Route failure connections to LogMessage for error logging.\n\nStep 6 — Start the flow: Select all processors, right-click Start. Watch data flow in real time as FlowFiles move through your pipeline.",
    funFact:
      "NiFi's visual interface runs entirely in the browser — no desktop installation needed. You can monitor and modify live pipelines without stopping data flow.",
    xpReward: 110,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Rahul's NiFi pipeline, which processor is responsible for inserting the parsed JSON data into PostgreSQL?",
      options: [
        "GetFile",
        "EvaluateJsonPath",
        "PutDatabaseRecord",
        "UpdateAttribute",
      ],
      correctAnswer: "PutDatabaseRecord",
      explanation:
        "PutDatabaseRecord inserts, updates, or upserts records into a relational database. It works with any JDBC-compatible database including PostgreSQL, MySQL, and Oracle.",
    },
  },
  {
    title: "NiFi for Real-Time Streaming Data",
    content:
      "Priya explains an advanced NiFi use case to Rahul: real-time streaming from Apache Kafka. Their telecom client receives 10 million CDR (Call Detail Records) per hour — far too many for batch ETL.\n\nArchitecture: Network equipment sends CDRs to Kafka topics. NiFi consumes from Kafka using ConsumeKafka processor, parses each CDR, enriches it with customer data via a LookupRecord processor, then writes to Cassandra for real-time queries and HDFS for historical storage.\n\nKey NiFi processors for streaming: ConsumeKafka — reads messages from Kafka topics. PublishKafka — publishes transformed data back to Kafka. LookupRecord — enriches data using a lookup service. SplitRecord — splits a batch of records into individual FlowFiles. MergeRecord — batches individual FlowFiles for efficient bulk writes.\n\nBackpressure management: NiFi automatically handles backpressure. If the database slows down, NiFi buffers data in memory and disk until the bottleneck clears — no data is lost. This is called the 'dataflow guarantee.'",
    funFact:
      "Apache NiFi powers real-time data ingestion at major US intelligence agencies, Fortune 500 telecoms, and companies like Cloudera and Hortonworks.",
    xpReward: 115,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs NiFi to read CDR records from Apache Kafka as they arrive. Which NiFi processor should he use?",
      options: ["GetFile", "ConsumeKafka", "PutDatabaseRecord", "SplitRecord"],
      correctAnswer: "ConsumeKafka",
      explanation:
        "ConsumeKafka is NiFi's processor for reading messages from Apache Kafka topics in real time. It supports consumer groups, offset management, and batch consumption.",
    },
  },
  {
    title: "SQL-Based ETL: Using SQL for Transformation",
    content:
      "Rahul's mentor Arjun reveals a secret: 'The most underrated ETL skill is pure SQL. Before you buy any tool, know what you can do with SQL alone.'\n\nSQL ETL patterns that every data engineer uses daily:\n\nINSERT INTO ... SELECT: The most basic ETL. Extract data with SELECT, transform inline, insert into target.\nExample: INSERT INTO dw_sales SELECT customer_id, SUM(amount) as total, MAX(date) as last_purchase FROM orders GROUP BY customer_id;\n\nCTAS (Create Table As Select): Create a new table from a query result — instant data warehousing.\nExample: CREATE TABLE monthly_summary AS SELECT MONTH(order_date) as month, SUM(revenue) FROM orders GROUP BY month;\n\nUPSERT (MERGE/INSERT OR REPLACE): Update existing rows, insert new ones atomically.\n\nWindow Functions for ETL: ROW_NUMBER() to deduplicate, LAG/LEAD to calculate deltas, RANK() to find top records per group.\n\nThese SQL patterns run inside any database — no extra tool license needed. For many small ETL jobs, a well-written SQL script is faster and cheaper than any GUI tool.",
    funFact:
      "Google, Facebook, and Amazon all use massive SQL-based ETL internally. BigQuery and Redshift are essentially 'SQL as your ETL tool' at planetary scale.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs to create a summary table of monthly revenue without a separate ETL tool. Which SQL pattern creates a new table directly from a query result?",
      options: [
        "INSERT INTO ... VALUES",
        "CREATE TABLE AS SELECT (CTAS)",
        "SELECT INTO ... WHERE",
        "UPDATE TABLE ... SET",
      ],
      correctAnswer: "CREATE TABLE AS SELECT (CTAS)",
      explanation:
        "CTAS (Create Table As Select) creates a new table and populates it with query results in a single statement — a powerful SQL-only ETL pattern.",
    },
  },
  {
    title: "CTEs for ETL: Common Table Expressions in Action",
    content:
      "Priya shows Rahul how CTEs transform messy ETL SQL into readable, maintainable pipelines.\n\nA CTE (Common Table Expression) is a temporary named result set defined with WITH. It makes complex ETL SQL readable and reusable within a single query.\n\nScenario: Rahul needs to find customers who spent more than average in the last 30 days and haven't been contacted in 6 months.\n\nWITH recent_orders AS (\n  SELECT customer_id, SUM(amount) as total_spent\n  FROM orders\n  WHERE order_date >= DATEADD(day, -30, GETDATE())\n  GROUP BY customer_id\n),\navg_spend AS (\n  SELECT AVG(total_spent) as avg_amount FROM recent_orders\n),\nhigh_value AS (\n  SELECT r.customer_id FROM recent_orders r\n  CROSS JOIN avg_spend a WHERE r.total_spent > a.avg_amount\n)\nINSERT INTO marketing_targets\nSELECT c.* FROM customers c\nJOIN high_value h ON c.id = h.customer_id\nWHERE c.last_contact_date < DATEADD(month, -6, GETDATE());\n\nEach CTE is a named step — readable as plain English, no nested subquery madness.",
    funFact:
      "CTEs were introduced in SQL:1999 but only became widely supported in the mid-2000s. They are now supported in MySQL 8+, PostgreSQL, SQL Server, Oracle, and all cloud warehouses.",
    xpReward: 100,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "A CTE in SQL starts with the keyword ___ followed by the CTE name and its definition in parentheses.",
      correctAnswer: "WITH",
      explanation:
        "CTEs begin with the WITH keyword: WITH cte_name AS (SELECT ...) SELECT * FROM cte_name. They create temporary named result sets for the duration of the query.",
    },
  },
  {
    title: "Handling Duplicates and NULLs in ETL Pipelines",
    content:
      "Rahul's pipeline loaded 1 million customer records — but the business team reports 150,000 duplicate customers in the warehouse. His manager is not happy. Sneha helps him fix it.\n\nHandling Duplicates: ROW_NUMBER() pattern — the industry standard.\nINSERT INTO dw_customers\nSELECT customer_id, name, email FROM (\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_date DESC) as rn\n  FROM stg_customers\n) WHERE rn = 1;\n\nThis keeps only the most recent record per email — deduplication complete.\n\nHandling NULLs in ETL:\n\nCoalesce for defaults: COALESCE(phone, 'NOT PROVIDED') — replaces NULLs with a default value.\n\nNULLIF for divide-by-zero: NULLIF(denominator, 0) — returns NULL instead of crashing.\n\nFILTER NULLs in critical fields: Never load records with NULL customer_id or order_id — these are primary keys.\n\nDocument NULL strategy: Every ETL pipeline should define: which fields can be NULL, what default value to use, and whether NULL records should be rejected, defaulted, or flagged for review.",
    funFact:
      "Data quality issues cost US businesses an estimated 3.1 trillion USD per year according to IBM research. Most data quality problems come from duplicates and NULLs in ETL pipelines.",
    xpReward: 105,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul uses ROW_NUMBER() OVER (PARTITION BY email ORDER BY created_date DESC) and keeps only rows where rn = 1. What does this achieve?",
      options: [
        "Sorts all records by email",
        "Keeps only the most recent record per email, removing duplicates",
        "Deletes all records with NULL emails",
        "Counts total records per email",
      ],
      correctAnswer:
        "Keeps only the most recent record per email, removing duplicates",
      explanation:
        "ROW_NUMBER() PARTITION BY email assigns rank 1 to the latest record per email. Filtering WHERE rn = 1 keeps only one record per email — the most recent — eliminating duplicates.",
    },
  },
  {
    title: "ETL Performance Optimization Tips",
    content:
      "Rahul's nightly ETL job is taking 6 hours and must finish in 2 hours before business opens. Arjun shares the performance optimization playbook.\n\nPartitioning: Split large tables into chunks and process them in parallel. Instead of loading 100 million rows as one batch, split by month and run 12 parallel threads.\n\nBulk Loading: Always use bulk load operations (BULK INSERT, COPY, Sqoop) instead of row-by-row inserts. Row-by-row insert of 1 million records takes 45 minutes; BULK INSERT takes 30 seconds.\n\nPush-Down Optimization: Instead of pulling all data to the ETL server and transforming there, push the transformation logic into the database via SQL. Let the database do what it's optimized for.\n\nIncremental Loading: Never reload all data when you only need changes. Track last run timestamp, load only new/modified records using WHERE updated_at > last_run_time.\n\nIndex Strategy: Drop indexes before bulk loading, rebuild after. Indexes slow down inserts dramatically.\n\nCaching: Cache lookup tables in memory so each row doesn't trigger a separate database query.\n\nResult: Arjun's optimizations reduced Rahul's 6-hour job to 90 minutes.",
    funFact:
      "ETL performance tuning is one of the highest-valued skills in data engineering. Senior ETL developers who can reduce a 6-hour pipeline to 1 hour save companies millions in infrastructure costs.",
    xpReward: 115,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul's ETL loads only new records since the last run using WHERE updated_at > last_run_time instead of reloading all 100 million records. This technique is called:",
      options: ["Full load", "Incremental load", "Bulk load", "Parallel load"],
      correctAnswer: "Incremental load",
      explanation:
        "Incremental loading processes only new or changed records since the last ETL run, dramatically reducing processing time and resource usage compared to full reloads.",
    },
  },
  {
    title: "AWS Glue: Serverless ETL on the Cloud",
    content:
      "Rahul's new project is 100 percent on AWS. His architect tells him: 'Forget Informatica — use AWS Glue.' It's Amazon's fully managed, serverless ETL service.\n\nAWS Glue key components:\n\nGlue Data Catalog: A central metadata repository that stores table schemas, data locations, and partition info. Like a smart library catalog for all your AWS data.\n\nGlue Crawler: Automatically scans S3 buckets, RDS tables, and Redshift schemas. Discovers data and populates the Data Catalog with schema definitions.\n\nGlue ETL Jobs: Python or Scala scripts that run on managed Apache Spark clusters. You write transformation logic; AWS handles the infrastructure.\n\nGlue Triggers: Schedule jobs by time (every night at 2 AM), on demand, or triggered by events (S3 file arrival).\n\nWorkflow: S3 gets new CSV files from the bank's branch systems -> Glue Crawler detects new files -> Glue ETL Job runs, transforms data using PySpark -> Cleaned data loaded into Redshift -> QuickSight dashboard updates automatically.\n\nCost: You pay per DPU (Data Processing Unit) hour — no license fees, no server maintenance.",
    funFact:
      "AWS Glue can automatically generate ETL code from your Glue Data Catalog schema — you just point it at source and target, and it writes the PySpark script for you.",
    xpReward: 110,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul needs AWS Glue to automatically discover and catalog schema of new files arriving in S3. Which Glue component should he configure?",
      options: [
        "Glue ETL Job",
        "Glue Trigger",
        "Glue Data Catalog",
        "Glue Crawler",
      ],
      correctAnswer: "Glue Crawler",
      explanation:
        "Glue Crawlers scan data sources (S3, RDS, Redshift) and automatically populate the Glue Data Catalog with schema information — no manual schema definition needed.",
    },
  },
  {
    title: "Azure Data Factory: Microsoft Cloud ETL",
    content:
      "Rahul joins a Microsoft-stack project. His team uses Azure, SQL Server, and Power BI — and the ETL tool is Azure Data Factory (ADF).\n\nADF is Microsoft's cloud-based ETL and data integration service. It's the Azure equivalent of AWS Glue, but with deeper integration into Microsoft's ecosystem — SQL Server, Dynamics, Sharepoint, and Power BI.\n\nADF key concepts:\n\nPipeline: A container for a set of ETL activities — like a workflow in Informatica.\n\nActivity: A single ETL step — Copy Data, Execute SQL, Run Notebook, etc. The Copy Data activity is ADF's workhorse — it moves data between 100+ supported sources and targets.\n\nDataset: A reference to data in a source or target — like pointing ADF to 'this table in this database.'\n\nLinked Service: A connection configuration — credentials and connection string for databases, blob storage, or APIs.\n\nTrigger: Schedule or event-based execution.\n\nData Flow: ADF's visual transformation designer — drag-and-drop transformations like a Spark job, no code required.\n\nRahul's pipeline: Azure Blob Storage CSV -> ADF Copy Data activity -> Azure SQL Database -> ADF Data Flow to transform -> Azure Synapse Analytics for reporting.",
    funFact:
      "Azure Data Factory has over 90 built-in connectors including Salesforce, SAP, Google Analytics, ServiceNow, and all major cloud databases.",
    xpReward: 110,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Azure Data Factory, which component stores connection credentials and connection strings for databases and storage accounts?",
      options: ["Pipeline", "Dataset", "Linked Service", "Activity"],
      correctAnswer: "Linked Service",
      explanation:
        "Linked Services in ADF are connection configurations — they store the credentials, server name, and authentication details needed to connect to a data source or target.",
    },
  },
  {
    title: "dbt: SQL-First Data Transformation",
    content:
      "Priya tells Rahul about a tool that's taking the data world by storm: dbt (data build tool). It's not a traditional ETL tool — it's a T-only tool focused entirely on the Transform step.\n\ndbt works inside your cloud data warehouse (Snowflake, BigQuery, Redshift, Databricks). You write SELECT statements as SQL models; dbt compiles them into materialized views or tables in your warehouse.\n\nWhy developers love dbt: It brings software engineering practices to SQL — version control, testing, documentation, modular reuse. Each model is a simple SQL file. Models can reference other models using ref('model_name') — dbt automatically figures out execution order.\n\nExample dbt model (stg_orders.sql):\nSELECT\n  order_id,\n  customer_id,\n  CAST(order_date AS DATE) as order_date,\n  amount * 1.18 as amount_with_tax\nFROM raw.orders\nWHERE status != 'CANCELLED'\n\ndbt tests: Every model can have tests like unique(order_id), not_null(customer_id), accepted_values(status, ['ACTIVE','CLOSED']). dbt runs tests after every build.",
    funFact:
      "dbt is the fastest-growing data tool in 2024–2025. Over 30,000 companies use dbt, and dbt Cloud is used by Airbnb, JetBlue, and GitLab for their data pipelines.",
    xpReward: 105,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "In dbt, to reference another model inside your SQL model, you use the ___ function instead of hardcoding the table name.",
      correctAnswer: "ref",
      explanation:
        "The ref() function in dbt creates dependencies between models. dbt uses ref('model_name') to resolve the correct table name and ensures models run in the correct order based on dependencies.",
    },
  },
  {
    title: "Cloud ETL vs On-Premise ETL: Pros and Cons",
    content:
      "Rahul's client is deciding between Informatica on their own servers versus AWS Glue on the cloud. Arjun walks through the tradeoffs.\n\nOn-Premise ETL (Informatica, Talend on your servers):\nPros: Full control over data — it never leaves your network (critical for banks, government). Predictable monthly cost once licensed. No internet dependency for pipeline execution.\nCons: High upfront license cost (Rs 20–50 lakh). You manage server hardware, upgrades, and scaling. Scaling up for peak load requires buying more hardware.\n\nCloud ETL (AWS Glue, ADF, Fivetran):\nPros: Pay-per-use — only pay when pipelines run. Scales automatically with data volume. No server maintenance. 100+ SaaS connectors out of the box.\nCons: Data leaves your premises — compliance review needed. Costs can spike with large volumes. Vendor lock-in risk.\n\nHybrid approach: Many large banks use Informatica on-premise for sensitive customer data pipelines and AWS Glue for less-sensitive analytics workloads. Best of both worlds.\n\nRahul's recommendation to his client: Start with cloud ETL for agility; keep sensitive customer data on-premise using Informatica.",
    funFact:
      "Over 60 percent of new ETL projects in 2025 start on cloud platforms. By 2027, analysts predict 80 percent of all ETL workloads will run in the cloud.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A bank needs to run ETL on highly sensitive customer data that cannot leave their network due to RBI compliance. Which ETL deployment is appropriate?",
      options: [
        "AWS Glue (cloud)",
        "Azure Data Factory (cloud)",
        "Informatica on-premise",
        "Google Cloud Dataflow",
      ],
      correctAnswer: "Informatica on-premise",
      explanation:
        "For data that must not leave the bank's network due to regulatory requirements, on-premise ETL tools like Informatica are necessary — cloud ETL routes data through external infrastructure.",
    },
  },
  {
    title: "Python for ETL: Building pandas Pipelines",
    content:
      "Sneha tells Rahul that many modern ETL pipelines are written in plain Python using pandas. No GUI tool needed — just code.\n\nA complete Python ETL pipeline in 20 lines:\n\nimport pandas as pd\nfrom sqlalchemy import create_engine\n\n# EXTRACT\ndf = pd.read_csv('sales_data.csv')\n\n# TRANSFORM\ndf = df.dropna(subset=['customer_id', 'amount'])\ndf = df[df['status'] == 'COMPLETED']\ndf['amount_usd'] = df['amount_inr'] / 83.5\ndf['order_month'] = pd.to_datetime(df['order_date']).dt.to_period('M')\ndf_summary = df.groupby(['order_month', 'region'])['amount_usd'].sum().reset_index()\ndf_summary.columns = ['month', 'region', 'total_revenue']\n\n# LOAD\nengine = create_engine('postgresql://user:pass@localhost/dw')\ndf_summary.to_sql('monthly_revenue', engine, if_exists='replace', index=False)\nprint(f'Loaded {len(df_summary)} rows to warehouse')\n\nPython ETL is powerful for data science teams, custom transformations, and environments where installing GUI tools is impractical.",
    funFact:
      "pandas is downloaded over 150 million times per month. It is the most widely used data manipulation library in the world — the Swiss Army knife of Python data engineering.",
    xpReward: 110,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Rahul's Python ETL pipeline, which line performs the LOAD step — pushing transformed data into the PostgreSQL warehouse?",
      options: [
        "df = pd.read_csv('sales_data.csv')",
        "df = df.dropna(subset=['customer_id'])",
        "df_summary = df.groupby(['order_month', 'region'])['amount_usd'].sum()",
        "df_summary.to_sql('monthly_revenue', engine, if_exists='replace')",
      ],
      correctAnswer:
        "df_summary.to_sql('monthly_revenue', engine, if_exists='replace')",
      explanation:
        "to_sql() is pandas' method for writing DataFrames to SQL databases using SQLAlchemy. This is the Load step — pushing transformed data into the warehouse.",
    },
  },
  {
    title: "Apache Airflow: Scheduling ETL Workflows",
    content:
      "Rahul has built 10 different ETL scripts that need to run in sequence every night: first extract raw data, then transform, then validate, then load to warehouse, then notify the team. Managing this manually is chaos. Enter Apache Airflow.\n\nApache Airflow is the industry standard for ETL workflow orchestration. You define pipelines as DAGs (Directed Acyclic Graphs) in Python. Each step is a task; dependencies between tasks define the execution order.\n\nA simple Airflow DAG example:\nwith DAG('nightly_etl', schedule_interval='0 2 * * *') as dag:\n  extract = BashOperator(task_id='extract', bash_command='python extract.py')\n  transform = PythonOperator(task_id='transform', python_callable=transform_data)\n  load = PythonOperator(task_id='load', python_callable=load_to_warehouse)\n  notify = EmailOperator(task_id='notify', to='team@company.com', subject='ETL Done')\n  extract >> transform >> load >> notify\n\nThis runs every night at 2 AM: extract -> transform -> load -> notify. If transform fails, load and notify don't run — Airflow handles the dependency chain automatically.",
    funFact:
      "Apache Airflow was built by Airbnb in 2014 and is now used by Pinterest, Spotify, Twitter, Lyft, and over 10,000 companies for scheduling data pipelines.",
    xpReward: 115,
    miniChallenge: {
      type: "multipleChoice",
      question: "In Apache Airflow, what is a DAG?",
      options: [
        "A database schema for storing ETL metadata",
        "A Directed Acyclic Graph defining tasks and their execution order",
        "A dashboard showing ETL job status",
        "A Python library for database connections",
      ],
      correctAnswer:
        "A Directed Acyclic Graph defining tasks and their execution order",
      explanation:
        "A DAG (Directed Acyclic Graph) in Airflow defines a workflow — which tasks exist, their order, and dependencies. 'Acyclic' means no circular dependencies: tasks flow in one direction.",
    },
  },
  {
    title: "ETL Career Paths: Data Engineer, ETL Developer",
    content:
      "Rahul asks Sneha: 'I know ETL now. What job titles should I apply for and what does the career path look like?'\n\nEntry-level roles (0–2 years): ETL Developer, Data Engineer, Data Integration Engineer. Salary: Rs 4–7 LPA. Tools expected: SQL, Informatica or Talend, Python basics, basic cloud knowledge.\n\nMid-level roles (2–5 years): Senior ETL Developer, Senior Data Engineer, Analytics Engineer. Salary: Rs 8–15 LPA. Tools expected: Informatica/Talend expertise, cloud ETL (Glue/ADF), Airflow, Spark, dbt.\n\nSenior/Lead roles (5+ years): Lead Data Engineer, ETL Architect, Data Platform Engineer. Salary: Rs 18–35 LPA. Responsibilities: Designing ETL architecture, choosing tools, mentoring junior developers, performance tuning.\n\nSpecialized paths: Cloud Data Engineer (AWS/Azure/GCP focused), Analytics Engineer (dbt + SQL, working closely with BI teams), Data Architect (designing data warehouse strategy).\n\nTop hiring companies for ETL in India: TCS, Wipro, Infosys, Accenture, Capgemini, Cognizant, IBM, and in-house data teams at banks like HDFC, ICICI, and Axis.",
    funFact:
      "Data Engineer is the #1 most in-demand tech role in India in 2025 according to LinkedIn's Emerging Jobs Report, with 35 percent year-over-year job growth.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul has 4 years of ETL experience with Informatica, Python, AWS Glue, and Airflow. Which role and salary range best matches his profile?",
      options: [
        "Entry-level ETL Developer at Rs 4–5 LPA",
        "Senior ETL Developer or Senior Data Engineer at Rs 8–15 LPA",
        "CTO at Rs 50 LPA",
        "Junior SQL Developer at Rs 3 LPA",
      ],
      correctAnswer:
        "Senior ETL Developer or Senior Data Engineer at Rs 8–15 LPA",
      explanation:
        "With 4 years of experience and expertise in enterprise tools, cloud ETL, and orchestration, Rahul's profile matches Senior ETL Developer or Senior Data Engineer roles paying Rs 8–15 LPA.",
    },
  },
  {
    title: "ETL Capstone: Build a CSV to Database Pipeline",
    content:
      "Final challenge: Rahul must build a complete ETL pipeline from scratch that a recruiter will be impressed by. Here's the capstone project.\n\nProject: Sales Analytics ETL Pipeline — 'RetailPulse'\n\nScenario: A retail chain has 3 years of daily sales CSVs (one per store, 500 stores). Build a pipeline that extracts all CSVs, cleans them, transforms into a star schema, loads into a PostgreSQL warehouse, and generates a dashboard-ready summary table.\n\nStep 1 — Setup: Install Python, PostgreSQL, and Apache Airflow. Create a GitHub repo 'retailpulse-etl.'\n\nStep 2 — Extract: Python script reads all CSV files from a folder using glob.glob('data/*.csv'), stacks them into one pandas DataFrame.\n\nStep 3 — Transform: Remove nulls, deduplicate by transaction_id, convert date formats, calculate revenue = quantity * unit_price, add month/year columns.\n\nStep 4 — Load: Create PostgreSQL star schema — fact_sales, dim_product, dim_store, dim_date. Load transformed data using pandas to_sql().\n\nStep 5 — Orchestrate: Wrap steps in an Airflow DAG scheduled to run daily.\n\nStep 6 — Document: Write README with architecture diagram, setup instructions, and sample output. Push to GitHub.\n\nThis project demonstrates: Python, SQL, Airflow, data warehousing, and GitHub. Every skill recruiters look for in a data engineer role.",
    funFact:
      "A well-documented ETL project on GitHub with a clear README, architecture diagram, and sample data is one of the strongest differentiators for fresher data engineering candidates in interviews.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants his ETL capstone project to run automatically every day without manual intervention. Which component should he add to his pipeline?",
      options: [
        "A cron job documented in README only",
        "An Apache Airflow DAG with a daily schedule",
        "A manual reminder in his calendar",
        "A Python while loop that runs forever",
      ],
      correctAnswer: "An Apache Airflow DAG with a daily schedule",
      explanation:
        "Apache Airflow DAGs with schedule_interval='@daily' run automatically every day, handle retries on failure, and provide a monitoring UI — making your pipeline production-grade.",
    },
  },
];
