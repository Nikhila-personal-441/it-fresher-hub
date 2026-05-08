import { PaywallModal } from "@/components/PaywallModal";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  GitMerge,
  Layers,
  Lock,
  Star,
  Terminal,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface WorkflowStep {
  stepNum: number;
  title: string;
  description: string;
}

interface KeyComponent {
  name: string;
  description: string;
}

interface DeepDive {
  howItWorks: string;
  workflow: WorkflowStep[];
  keyComponents: KeyComponent[];
  useCases: string[];
  commands: { cmd: string; desc: string }[];
  comparison: string;
  /** Legacy dbt sections for backward compat */
  title?: string;
  sections?: { heading: string; content: string; items?: string[] }[];
}

interface EtlTool {
  name: string;
  abbr: string;
  color: string;
  category: string;
  tagline: string;
  what: string;
  whenToUse: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  industryUsage: string;
  concepts: string[];
  scenario: string;
  companies: string[];
  salary: string;
  demand: "Very High" | "High" | "Medium";
  deepDive: DeepDive;
}

const ETL_TOOLS: EtlTool[] = [
  {
    name: "Informatica PowerCenter",
    abbr: "INFO",
    color: "#FF6D00",
    category: "Enterprise ETL",
    tagline: "The enterprise standard — banks, insurance, telecom",
    what: "Informatica PowerCenter is the most widely deployed enterprise ETL tool. It connects to 100+ source systems, applies complex business rules during transformation, and loads clean data into warehouses — reliably, at scale, with full audit trails.",
    whenToUse:
      "When your company needs to migrate millions of records, comply with data governance standards, or build production-grade pipelines that can't fail.",
    difficulty: "Intermediate",
    industryUsage: "Banking, Insurance, Telecom, Healthcare",
    concepts: [
      "Source Qualifier",
      "Expression Transformation",
      "Lookup",
      "Joiner",
      "Aggregator",
      "Workflow Manager",
      "Repository",
    ],
    scenario:
      "🏦 Scenario: HDFC Bank is migrating 10 years of customer transaction data from an old Oracle system to Teradata. Informatica reads 50 million rows nightly, masks card numbers, converts currencies, validates account formats, and loads clean data — all automated, with error logs sent to the DBA team each morning.",
    companies: ["TCS", "Wipro", "IBM", "Accenture", "Capgemini"],
    salary: "₹6–22 LPA",
    demand: "Very High",
    deepDive: {
      howItWorks:
        "Informatica PowerCenter uses a client-server architecture with a central Repository Server, Integration Service, and PowerCenter Client. The Designer tool lets you build source-to-target mappings graphically. The Workflow Manager schedules and orchestrates execution. Metadata is stored in the Repository, making it fully auditable and re-usable.",
      workflow: [
        {
          stepNum: 1,
          title: "Connect to Source",
          description:
            "Define source connections — Oracle, SQL Server, flat files, or mainframe systems.",
        },
        {
          stepNum: 2,
          title: "Create Mapping",
          description:
            "Build visual source-to-target mappings in PowerCenter Designer with transformation logic.",
        },
        {
          stepNum: 3,
          title: "Define Transformations",
          description:
            "Apply business rules using Joiner, Lookup, Expression, Aggregator transformations.",
        },
        {
          stepNum: 4,
          title: "Create Session & Workflow",
          description:
            "Wrap the mapping into a Session; chain Sessions into a Workflow with ordering.",
        },
        {
          stepNum: 5,
          title: "Schedule & Monitor",
          description:
            "Schedule the Workflow via Workflow Manager, monitor runs in real time.",
        },
        {
          stepNum: 6,
          title: "Review Logs",
          description:
            "Inspect session logs for row counts, rejected records, and error details.",
        },
      ],
      keyComponents: [
        {
          name: "Repository Service",
          description:
            "Central metadata store — holds all mappings, transformations, and workflow definitions.",
        },
        {
          name: "Integration Service",
          description:
            "Executes workflows and data movement — the processing engine of PowerCenter.",
        },
        {
          name: "PowerCenter Designer",
          description:
            "GUI tool to build source-to-target mappings with drag-and-drop transformations.",
        },
        {
          name: "Workflow Manager",
          description:
            "Schedules and orchestrates the execution order of sessions and tasks.",
        },
        {
          name: "PowerCenter Monitor",
          description:
            "Real-time monitoring dashboard for running workflows, row counts, and errors.",
        },
        {
          name: "Source Qualifier",
          description:
            "Represents data from a relational source — generates the SQL query to extract data.",
        },
      ],
      useCases: [
        "Banking: Migrate 50M customer records from legacy Oracle to Teradata nightly.",
        "Healthcare: Master data management across 10 regional hospital systems.",
        "Retail: Consolidate POS data from 500 stores into a central data warehouse.",
        "Telecom: Bill calculation ETL processing 200M call records per night.",
      ],
      commands: [
        {
          cmd: "pmrep connect",
          desc: "Connect to the Informatica repository from CLI.",
        },
        {
          cmd: "pmcmd startworkflow",
          desc: "Start a workflow from the command line — used in scheduler scripts.",
        },
        {
          cmd: "infacmd ms StartService",
          desc: "Start a specific Informatica service via admin CLI.",
        },
        {
          cmd: "pmpasswd",
          desc: "Encrypt passwords for use in pmcmd connection strings.",
        },
        {
          cmd: "pmrep listobjects",
          desc: "List all mappings, sessions, and workflows in the repository.",
        },
      ],
      comparison:
        "Compared to Talend, Informatica requires less programming knowledge but costs significantly more in licensing. Informatica dominates in large enterprises where governance and support SLAs matter.",
    },
  },
  {
    name: "Talend",
    abbr: "TAL",
    color: "#1E88E5",
    category: "Open Source ETL",
    tagline: "Popular open-source ETL with modern UI",
    what: "Talend is a popular open-source ETL platform with a visual, drag-and-drop job designer. It generates Java code behind the scenes, making it fast to deploy and easy to maintain. Talend Open Studio is free; Talend Data Fabric adds enterprise features.",
    whenToUse:
      "Mid-size tech companies and startups needing enterprise ETL without enterprise pricing. Also great when you want to learn ETL without spending money.",
    difficulty: "Beginner",
    industryUsage: "Retail, Tech Startups, E-commerce, Media",
    concepts: [
      "tMap Component",
      "tDBInput/Output",
      "Job Design",
      "Metadata Management",
      "Cloud Pipelines",
      "Contexts/Variables",
    ],
    scenario:
      "🛍 Scenario: A fashion e-commerce startup uses Talend to sync inventory data from their ERP every hour into Snowflake. When a product goes out of stock, the Talend job detects the change, transforms the record, and updates the data warehouse — keeping the analytics team's dashboards accurate in near real-time.",
    companies: ["Infosys", "HCL", "Tech Mahindra", "Mphasis"],
    salary: "₹5–16 LPA",
    demand: "High",
    deepDive: {
      howItWorks:
        "Talend uses a code-generation approach — every job you design in the graphical studio is compiled to native Java code. This makes jobs portable and fast. Talend connects to 900+ sources and targets via tComponents. Jobs run on any Java-enabled machine or container without needing a dedicated Talend server.",
      workflow: [
        {
          stepNum: 1,
          title: "Define Job",
          description:
            "Create a new job in Talend Open Studio — name it and set the Java version.",
        },
        {
          stepNum: 2,
          title: "Drag Components",
          description:
            "Drag tDBInput, tFileInput, or API components onto the canvas from the palette.",
        },
        {
          stepNum: 3,
          title: "Configure Connections",
          description:
            "Set up metadata connections for databases, files, or REST APIs using the Metadata Manager.",
        },
        {
          stepNum: 4,
          title: "Add tMap Transform",
          description:
            "Use tMap to visually map input columns to output columns and apply filter/expression logic.",
        },
        {
          stepNum: 5,
          title: "Run & Debug",
          description:
            "Run the job in the Studio with real-time row-count statistics and error rows highlighted.",
        },
        {
          stepNum: 6,
          title: "Export to Production",
          description:
            "Export the job as a standalone JAR and deploy to server or container.",
        },
      ],
      keyComponents: [
        {
          name: "tDBInput / tDBOutput",
          description:
            "Read from / write to any JDBC-compatible database (MySQL, Oracle, Postgres, SQL Server).",
        },
        {
          name: "tMap",
          description:
            "The core transformation component — visual column mapping with expression filters and multi-output routing.",
        },
        {
          name: "tFileInput / tFileOutput",
          description:
            "Read and write CSV, Excel, XML, JSON, and flat files with format configuration.",
        },
        {
          name: "Job Designer",
          description:
            "Canvas-based drag-and-drop IDE where components are connected with row/trigger links.",
        },
        {
          name: "Metadata Manager",
          description:
            "Central store for reusable connection definitions — change once, update everywhere.",
        },
        {
          name: "Contexts & Variables",
          description:
            "Parameterize jobs for dev/staging/prod environments without changing job logic.",
        },
      ],
      useCases: [
        "Open-source ETL for startups: Free alternative to Informatica for small data volumes.",
        "Cloud migration: Move on-premise database data to Snowflake or Redshift.",
        "Data quality: Profile and cleanse master data before loading to CRM or ERP.",
        "API integration: Pull data from REST APIs and load into relational databases.",
      ],
      commands: [
        {
          cmd: "java -jar job.jar --context=prod",
          desc: "Run an exported Talend job JAR with a specific context (environment) parameter.",
        },
        {
          cmd: "mvn talend:build",
          desc: "Build Talend jobs using the Maven plugin — integrates with CI/CD pipelines.",
        },
        {
          cmd: "talend-studio -nosplash",
          desc: "Launch Talend Studio in headless mode for scripted job generation.",
        },
        {
          cmd: "./run_job.sh --context_param DB_HOST=prod",
          desc: "Override a context variable at runtime via shell script wrapper.",
        },
        {
          cmd: "tLogCatcher",
          desc: "Component that captures and routes errors/warnings to a log file or database table.",
        },
      ],
      comparison:
        "Talend generates native Java — making it more portable than Informatica PowerCenter. It lacks the enterprise governance features but is free for Open Studio, making it the top choice for budget-conscious teams.",
    },
  },
  {
    name: "SSIS (SQL Server Integration Services)",
    abbr: "SSIS",
    color: "#CC2936",
    category: "Microsoft ETL",
    tagline: "Microsoft's built-in ETL — free with SQL Server",
    what: "SSIS is Microsoft's ETL tool included with SQL Server. If your company runs on the Microsoft stack, SSIS is usually the first ETL tool you'll encounter. It uses a visual designer in Visual Studio and integrates seamlessly with SQL Server, Azure, and Excel.",
    whenToUse:
      "When the company already uses SQL Server and wants a zero-cost ETL solution that integrates natively with Windows and Azure services.",
    difficulty: "Beginner",
    industryUsage:
      "Government, Healthcare, Retail, Finance (Microsoft-stack companies)",
    concepts: [
      "Control Flow",
      "Data Flow Task",
      "Connection Managers",
      "Transformations",
      "Variables/Parameters",
      "SSIS Catalog",
      "Deployment Models",
    ],
    scenario:
      "🏥 Scenario: A hospital chain uses SSIS to pull patient admission data from 5 regional hospitals every night, standardize the date formats and hospital codes, and load everything into a central SQL Server data warehouse — giving the operations team a unified view of capacity across all locations by 6 AM.",
    companies: [
      "Cognizant",
      "HCL",
      "Every Microsoft-stack enterprise",
      "State governments",
    ],
    salary: "₹4–14 LPA",
    demand: "High",
    deepDive: {
      howItWorks:
        "SSIS uses a drag-and-drop designer in Visual Studio to create Data Flow Tasks connected by Control Flow. Packages are saved as XML files (.dtsx) and deployed to the SSIS Catalog or scheduled via SQL Agent. The Control Flow defines execution order; the Data Flow Task handles row-by-row transformation between sources and destinations.",
      workflow: [
        {
          stepNum: 1,
          title: "Create SSIS Project",
          description:
            "New SSIS project in Visual Studio — creates a .dtsx package file for each ETL flow.",
        },
        {
          stepNum: 2,
          title: "Design Control Flow",
          description:
            "Add Execute SQL Task, Data Flow Task, For Each Loop, and Script Task to control execution.",
        },
        {
          stepNum: 3,
          title: "Configure Data Flow",
          description:
            "Inside the Data Flow Task, add Source, Transformation, and Destination components.",
        },
        {
          stepNum: 4,
          title: "Add Transformations",
          description:
            "Use Derived Column, Lookup, Sort, Aggregate, Union All to transform data mid-flight.",
        },
        {
          stepNum: 5,
          title: "Deploy to Catalog",
          description:
            "Deploy .dtsx packages to the SSIS Catalog (SSISDB) in SQL Server for centralized management.",
        },
        {
          stepNum: 6,
          title: "Schedule via SQL Agent",
          description:
            "Create a SQL Server Agent job to run the package on a schedule with email alerts on failure.",
        },
      ],
      keyComponents: [
        {
          name: "Control Flow",
          description:
            "Top-level orchestration — sequences tasks and handles execution logic with precedence constraints.",
        },
        {
          name: "Data Flow Task",
          description:
            "Container for row-level data movement — Source → Transform → Destination pipeline.",
        },
        {
          name: "Connection Managers",
          description:
            "Reusable connection definitions for SQL Server, Oracle, Excel, flat files, and web services.",
        },
        {
          name: "SSIS Catalog (SSISDB)",
          description:
            "SQL Server database for storing, deploying, and monitoring all SSIS packages.",
        },
        {
          name: "Execute SQL Task",
          description:
            "Run any SQL statement as part of the control flow — truncate tables, call stored procedures.",
        },
        {
          name: "Foreach Loop Container",
          description:
            "Iterate over files in a folder or rows in a dataset, processing each item in a loop.",
        },
      ],
      useCases: [
        "SQL Server to data warehouse: Nightly ETL moving transactional data to SSAS cubes.",
        "Excel/CSV file imports: Load multiple Excel reports from a shared folder into SQL Server.",
        "On-premise data migration: Move legacy Access/FoxPro databases into SQL Server.",
        "SharePoint list integration: Sync SharePoint list changes with SQL Server tables.",
      ],
      commands: [
        {
          cmd: "dtexec /FILE package.dtsx",
          desc: "Run an SSIS package directly from the command line (useful in SQL Agent steps).",
        },
        {
          cmd: 'dtexec /SERVER . /PACKAGE "SSISDB\\Folder\\pkg"',
          desc: "Execute a package deployed to the SSIS Catalog on the local server.",
        },
        {
          cmd: "dtutil /FILE pkg.dtsx /COPY SQL;SSISDB\\Folder",
          desc: "Copy a .dtsx package file to the SSIS Catalog using dtutil.",
        },
        {
          cmd: "EXEC catalog.start_execution @execution_id",
          desc: "Start a catalog execution programmatically via T-SQL.",
        },
        {
          cmd: "SELECT * FROM catalog.executions",
          desc: "Query execution history from the SSIS Catalog in SSMS.",
        },
      ],
      comparison:
        "SSIS is free with SQL Server and deeply integrated with the Microsoft ecosystem, but it's Windows-only and struggles with non-Microsoft sources. Azure Data Factory is Microsoft's modern cloud successor to SSIS.",
    },
  },
  {
    name: "Apache Kafka",
    abbr: "KFK",
    color: "#000000",
    category: "Real-Time Streaming",
    tagline: "Process millions of events per second in real-time",
    what: "Apache Kafka is not a traditional ETL tool — it's a distributed event streaming platform. Instead of batch-loading data once a day, Kafka streams data continuously in real-time. Think of it as a highway for data: events flow through at millions per second.",
    whenToUse:
      "When you need real-time data: fraud detection, live stock prices, user activity tracking, IoT sensor data, or any scenario where a 1-hour batch delay is unacceptable.",
    difficulty: "Advanced",
    industryUsage: "Fintech, E-commerce, Telecom, Ride-hailing, Social Media",
    concepts: [
      "Topics",
      "Producers",
      "Consumers",
      "Partitions",
      "Offsets",
      "Consumer Groups",
      "Kafka Streams",
      "Kafka Connect",
    ],
    scenario:
      "💳 Scenario: A fintech company uses Kafka to detect fraudulent transactions in real-time. Every card swipe generates an event that flows through Kafka in under 50 milliseconds. A fraud detection model consumes this stream, scores the transaction, and blocks suspicious ones — all before the payment terminal responds to the customer.",
    companies: ["Swiggy", "Zomato", "PayTM", "Flipkart", "LinkedIn", "Uber"],
    salary: "₹10–30 LPA",
    demand: "Very High",
    deepDive: {
      howItWorks:
        "Kafka is built on a publish-subscribe model. Producers send messages to Topics, which are partitioned and replicated across Brokers for fault tolerance. Consumers subscribe to topics and read messages in real time. ZooKeeper (or KRaft in newer versions) manages cluster metadata. Kafka retains messages for a configurable retention period, enabling replay of historical events.",
      workflow: [
        {
          stepNum: 1,
          title: "Producer Publishes Event",
          description:
            "Application sends a JSON/Avro event to a named Kafka Topic (e.g., 'payments.transactions').",
        },
        {
          stepNum: 2,
          title: "Stored in Partition",
          description:
            "Kafka routes the event to one of the topic's partitions based on message key or round-robin.",
        },
        {
          stepNum: 3,
          title: "Replicated to Brokers",
          description:
            "The partition leader replicates the message to follower brokers for fault tolerance.",
        },
        {
          stepNum: 4,
          title: "Consumer Group Polls",
          description:
            "Consumer applications poll the partition for new messages — each partition is read by one consumer in the group.",
        },
        {
          stepNum: 5,
          title: "Offset Committed",
          description:
            "After processing, the consumer commits its offset — tracking which messages have been processed.",
        },
        {
          stepNum: 6,
          title: "Downstream Write",
          description:
            "Processed event is written to a database, sent to an API, or triggers a business action.",
        },
      ],
      keyComponents: [
        {
          name: "Producer API",
          description:
            "Client library for publishing events to Kafka topics from any application or service.",
        },
        {
          name: "Consumer API",
          description:
            "Client library for subscribing to topics and processing events in order within each partition.",
        },
        {
          name: "Kafka Broker",
          description:
            "Server that stores and serves partitions — a cluster typically has 3–5 brokers for high availability.",
        },
        {
          name: "Topic + Partitions",
          description:
            "Topics are logical channels divided into partitions for parallel processing and horizontal scaling.",
        },
        {
          name: "Kafka Streams",
          description:
            "Java library for building real-time stream processing applications directly on Kafka topics.",
        },
        {
          name: "Kafka Connect",
          description:
            "Framework for connecting Kafka to external systems (databases, S3, Elasticsearch) via pre-built connectors.",
        },
      ],
      useCases: [
        "Real-time fraud detection: Score every card transaction in under 50ms before approval.",
        "Log aggregation: Centralize application logs from 1000+ microservices into a single stream.",
        "Event sourcing: Record every state change as an immutable event for microservice architectures.",
        "IoT data ingestion: Handle millions of sensor readings per second from connected devices.",
      ],
      commands: [
        {
          cmd: "kafka-topics.sh --create --topic payments",
          desc: "Create a new Kafka topic named 'payments' with default partition and replication settings.",
        },
        {
          cmd: "kafka-console-producer.sh --topic payments",
          desc: "Send test messages to a topic from the terminal — useful for development testing.",
        },
        {
          cmd: "kafka-console-consumer.sh --topic payments --from-beginning",
          desc: "Read all messages from a topic from the beginning for debugging.",
        },
        {
          cmd: "kafka-consumer-groups.sh --describe --group my-app",
          desc: "Show consumer group lag — how many messages are waiting to be processed.",
        },
        {
          cmd: "kafka-configs.sh --alter --entity-type topics",
          desc: "Modify topic configuration (retention period, max message size, compaction).",
        },
      ],
      comparison:
        "Kafka is not a batch ETL tool — it's for continuous event streams. Compared to RabbitMQ, Kafka retains messages after consumption (enabling replay), handles much higher throughput, and supports consumer groups for parallel processing.",
    },
  },
  {
    name: "Apache Spark",
    abbr: "SPRK",
    color: "#E25A1C",
    category: "Big Data Processing",
    tagline: "100x faster than Hadoop — the big data standard",
    what: "Apache Spark is a distributed big data processing engine. It can process terabytes of data in minutes by splitting work across hundreds of machines. Spark supports SQL, Python (PySpark), Scala, and machine learning — making it the engine behind most modern data lakes.",
    whenToUse:
      "When your data is too large for a single machine — think 100GB+ datasets, complex transformations, or ML model training at scale.",
    difficulty: "Advanced",
    industryUsage: "Big Tech, Banks, E-commerce, Telecom, Healthcare Analytics",
    concepts: [
      "RDDs",
      "DataFrames",
      "Spark SQL",
      "PySpark",
      "SparkSession",
      "Spark Streaming",
      "MLlib",
      "DAG Execution",
    ],
    scenario:
      "📦 Scenario: Flipkart runs PySpark jobs on their data lake every night to analyze 500 million product interactions from the day — clicks, searches, purchases, returns. The job calculates personalized product recommendations for each user, which update overnight. Without Spark, this would take days instead of 2 hours.",
    companies: [
      "Amazon",
      "Databricks",
      "Accenture",
      "Goldman Sachs",
      "Netflix",
    ],
    salary: "₹12–35 LPA",
    demand: "Very High",
    deepDive: {
      howItWorks:
        "Spark processes data in-memory using a DAG (Directed Acyclic Graph) execution engine. Data is divided into RDDs or DataFrames and processed across worker nodes in parallel. The Driver Program creates a SparkSession, allocates resources from the Cluster Manager (YARN/Kubernetes/Standalone), and sends tasks to Executors. Lazy evaluation means transformations are only computed when an action (collect, write, count) is triggered.",
      workflow: [
        {
          stepNum: 1,
          title: "Load Data",
          description:
            "Read from CSV, Parquet, JSON, Delta, or JDBC sources into a Spark DataFrame.",
        },
        {
          stepNum: 2,
          title: "Apply Transformations",
          description:
            "Chain lazy transformations: filter(), join(), groupBy(), agg(), select(), withColumn().",
        },
        {
          stepNum: 3,
          title: "Spark Builds DAG",
          description:
            "Spark constructs a DAG of transformations — nothing runs yet, just a logical plan.",
        },
        {
          stepNum: 4,
          title: "Catalyst Optimization",
          description:
            "The Catalyst Optimizer rewrites the DAG into an efficient physical execution plan.",
        },
        {
          stepNum: 5,
          title: "Executors Process Partitions",
          description:
            "Tasks are sent to Executors across the cluster — each processes one DataFrame partition in parallel.",
        },
        {
          stepNum: 6,
          title: "Write Output",
          description:
            "Action triggers execution: write results to Parquet, Delta Lake, JDBC, or S3.",
        },
      ],
      keyComponents: [
        {
          name: "SparkSession",
          description:
            "Entry point for all Spark operations — creates DataFrames, runs SQL, and manages the cluster connection.",
        },
        {
          name: "DataFrame / Dataset",
          description:
            "Distributed table abstraction — like a SQL table across hundreds of machines. DataFrames are the primary Spark API.",
        },
        {
          name: "RDD (Resilient Distributed Dataset)",
          description:
            "Low-level distributed collection — fault-tolerant and re-computable. Foundation of all Spark abstractions.",
        },
        {
          name: "Spark SQL",
          description:
            "Run standard SQL queries on DataFrames — integrates with Hive Metastore and Delta Lake.",
        },
        {
          name: "PySpark",
          description:
            "Python API for Spark — the most popular way to write Spark jobs using familiar pandas-like syntax.",
        },
        {
          name: "Spark Streaming / Structured Streaming",
          description:
            "Process real-time data streams from Kafka, S3, or sockets as micro-batches.",
        },
      ],
      useCases: [
        "Large-scale data transformation: Process 500GB+ datasets that can't fit in pandas.",
        "Machine learning pipelines: Train models on billions of rows using Spark MLlib.",
        "Log processing: Analyze petabyte-scale application logs for anomaly detection.",
        "Real-time streaming analytics: Process Kafka streams with Structured Streaming.",
      ],
      commands: [
        {
          cmd: "spark-submit job.py --master yarn",
          desc: "Submit a PySpark job to a YARN cluster — standard production deployment method.",
        },
        {
          cmd: "pyspark",
          desc: "Start an interactive PySpark shell for development and data exploration.",
        },
        {
          cmd: "df.filter(df.amount > 100)",
          desc: "Filter rows — lazy transformation, only runs when an action is called.",
        },
        {
          cmd: "df.groupBy('category').agg(sum('revenue'))",
          desc: "Group and aggregate data — equivalent to SQL GROUP BY with SUM.",
        },
        {
          cmd: "df.write.parquet('s3://bucket/output')",
          desc: "Write results as columnar Parquet format to S3 — the standard big data output format.",
        },
      ],
      comparison:
        "Spark is 100x faster than Hadoop MapReduce for most workloads due to in-memory processing. Compared to Pandas, Spark scales to datasets that don't fit in RAM. Databricks is a managed cloud platform built around Spark.",
    },
  },
  {
    name: "dbt (data build tool)",
    abbr: "dbt",
    color: "#FF694A",
    category: "Modern Transformation",
    tagline: "SQL-first transformation — the modern data engineer's tool",
    what: "dbt (data build tool) focuses purely on the Transform step of ETL. You write SQL models, and dbt handles running them in the right order, testing data quality, and documenting your data lineage. It works on top of Snowflake, BigQuery, Redshift — turning your warehouse into a transformation engine.",
    whenToUse:
      "When your data is already in a cloud warehouse and you need clean, tested, documented transformation logic. Used by every modern data team.",
    difficulty: "Beginner",
    industryUsage: "Tech Companies, Fintech, E-commerce, Analytics Agencies",
    concepts: [
      "Models (SQL files)",
      "Refs & Sources",
      "Tests (schema.yml)",
      "Snapshots",
      "Seeds",
      "Macros",
      "dbt Cloud",
      "Data Lineage",
    ],
    scenario:
      "📊 Scenario: A SaaS company's analytics team uses dbt to transform raw Stripe payment events in Snowflake into clean 'revenue by customer' tables. Each SQL model is tested — 'this column should never be null', 'this amount should always be positive' — so dashboards are always accurate. When a bug is found, the lineage graph shows exactly which dashboards were affected.",
    companies: [
      "Airbnb",
      "Spotify",
      "GitLab",
      "Looker",
      "Data teams everywhere",
    ],
    salary: "₹10–28 LPA",
    demand: "High",
    deepDive: {
      howItWorks:
        "dbt operates entirely inside your data warehouse — it doesn't move data, it transforms data already in the warehouse using SQL SELECT statements. Each model is a .sql file that defines a transformation. dbt compiles your models into CREATE TABLE AS SELECT (CTAS) or CREATE VIEW statements and runs them in dependency order based on ref() calls. It tracks data lineage automatically.",
      workflow: [
        {
          stepNum: 1,
          title: "Write SQL Model",
          description:
            "Create a .sql file with a SELECT statement — e.g., stg_orders.sql that cleans raw order data.",
        },
        {
          stepNum: 2,
          title: "Define Dependencies",
          description:
            "Use ref('model_name') to depend on another model — dbt builds a dependency DAG automatically.",
        },
        {
          stepNum: 3,
          title: "Configure Tests",
          description:
            "In schema.yml, add not_null, unique, accepted_values, or custom SQL tests for data quality.",
        },
        {
          stepNum: 4,
          title: "Run dbt build",
          description:
            "dbt compiles SQL, runs models in dependency order, and executes tests after each model.",
        },
        {
          stepNum: 5,
          title: "Inspect Lineage",
          description:
            "Run dbt docs generate + serve to visualize the full lineage graph in the browser.",
        },
        {
          stepNum: 6,
          title: "Deploy to Production",
          description:
            "Schedule dbt build in dbt Cloud or Airflow — models materialize as tables/views in the warehouse.",
        },
      ],
      keyComponents: [
        {
          name: "Models (.sql files)",
          description:
            "Plain SELECT statements that define transformations — each file becomes a table or view.",
        },
        {
          name: "Sources",
          description:
            "Declare raw tables already in your warehouse so dbt can track their freshness and lineage.",
        },
        {
          name: "Tests (schema.yml)",
          description:
            "Automated data quality checks — not_null, unique, accepted_values — run after every build.",
        },
        {
          name: "Snapshots",
          description:
            "Track slowly changing dimensions over time — captures how a record looked at different points in history.",
        },
        {
          name: "Macros (Jinja)",
          description:
            "Reusable SQL snippets with Jinja templating — write once, use across many models.",
        },
        {
          name: "dbt Cloud",
          description:
            "Managed platform for scheduling, IDE, docs, and job monitoring — no server setup required.",
        },
      ],
      useCases: [
        "E-commerce revenue reporting: Transform raw Stripe events into clean daily revenue tables.",
        "Marketing attribution: Build multi-touch attribution models from ad platform data.",
        "Healthcare claims: Transform raw claims data into HIPAA-compliant reporting tables.",
        "SaaS product analytics: Model user events into feature adoption and retention metrics.",
      ],
      commands: [
        {
          cmd: "dbt run",
          desc: "Execute all models — materializes SQL as tables or views in the data warehouse.",
        },
        {
          cmd: "dbt test",
          desc: "Run all data quality tests — fails if not_null, unique, or custom checks break.",
        },
        {
          cmd: "dbt build",
          desc: "Run + Test together — the recommended production command; stops on first failure.",
        },
        {
          cmd: "dbt docs generate",
          desc: "Create documentation site with column descriptions and full data lineage graph.",
        },
        {
          cmd: "dbt docs serve",
          desc: "Open docs in browser — visualize your entire data model and all dependencies.",
        },
      ],
      comparison:
        "dbt doesn't extract or load data — it only transforms. It works alongside Fivetran (for loading) and Snowflake/BigQuery (for storage). Compared to writing stored procedures, dbt adds version control, testing, and lineage tracking.",
    },
  },
  {
    name: "Azure Data Factory",
    abbr: "ADF",
    color: "#0078D4",
    category: "Cloud ETL",
    tagline: "Microsoft's cloud ETL — connect 90+ data sources",
    what: "Azure Data Factory (ADF) is Microsoft's cloud-native data integration service. Build ETL pipelines visually without writing code — connect SQL Server, Salesforce, SAP, REST APIs, and 90+ more. ADF pipelines orchestrate data movement and transformation across the entire Azure ecosystem.",
    whenToUse:
      "When the company is on Azure and needs to move data between Azure services — SQL Database, Synapse Analytics, Blob Storage — or to/from on-premise systems.",
    difficulty: "Intermediate",
    industryUsage: "Enterprise companies on Microsoft Azure stack",
    concepts: [
      "Pipelines",
      "Activities",
      "Datasets",
      "Linked Services",
      "Triggers",
      "Data Flows",
      "Integration Runtime",
      "Mapping",
    ],
    scenario:
      "🏛 Scenario: An insurance company uses ADF to pull daily claims data from SAP on-premise, transform it using a Mapping Data Flow (remove duplicates, standardize codes), and load it into Azure Synapse Analytics. The Power BI team's dashboards then show real-time claims analytics — all without a single line of code in the pipeline.",
    companies: ["Cognizant", "Accenture", "Capgemini", "Microsoft partners"],
    salary: "₹7–20 LPA",
    demand: "High",
    deepDive: {
      howItWorks:
        "ADF uses Pipelines containing Activities to orchestrate data movement and transformation. Linked Services define connections to sources/sinks. Datasets define the data schema. Integration Runtimes (Azure IR or Self-hosted IR for on-prem) execute the work. ADF can trigger runs on schedule, on event (blob arrives), or via REST API.",
      workflow: [
        {
          stepNum: 1,
          title: "Create Linked Services",
          description:
            "Define connections to sources (SQL Server, SAP, Salesforce) and sinks (Synapse, Blob, Cosmos DB).",
        },
        {
          stepNum: 2,
          title: "Define Datasets",
          description:
            "Schema definitions for each source and target — tells ADF the structure of the data.",
        },
        {
          stepNum: 3,
          title: "Build Pipeline",
          description:
            "Drag Activities onto the pipeline canvas: Copy Activity for movement, Lookup, ForEach, Set Variable.",
        },
        {
          stepNum: 4,
          title: "Add Data Flows",
          description:
            "Visual transformation designer — join, aggregate, derived column, filter without writing code.",
        },
        {
          stepNum: 5,
          title: "Configure Triggers",
          description:
            "Schedule triggers, tumbling window triggers, or event-based triggers (file arrives in blob).",
        },
        {
          stepNum: 6,
          title: "Monitor in ADF",
          description:
            "Monitor pipeline runs, activity durations, and data volumes in the ADF Monitoring hub.",
        },
      ],
      keyComponents: [
        {
          name: "Pipeline",
          description:
            "Logical grouping of activities that together perform a unit of work — equivalent to a workflow.",
        },
        {
          name: "Copy Activity",
          description:
            "The primary data movement engine — copies data from source to sink with schema mapping.",
        },
        {
          name: "Linked Service",
          description:
            "Connection string definition for any data store or compute service.",
        },
        {
          name: "Data Flow",
          description:
            "Visual, code-free transformation designer — generates Spark code under the hood.",
        },
        {
          name: "Integration Runtime",
          description:
            "Compute infrastructure for executing activities — Azure IR (cloud) or Self-hosted IR (on-prem).",
        },
        {
          name: "Trigger",
          description:
            "Schedule, tumbling window, or event-based mechanism that starts pipeline runs automatically.",
        },
      ],
      useCases: [
        "Azure Blob to Synapse Analytics: Load daily file dumps into the cloud data warehouse.",
        "On-prem SQL Server to Azure: Lift-and-shift database migration with minimal downtime.",
        "REST API ingestion: Pull data from Salesforce, HubSpot, or custom APIs on a schedule.",
        "Multi-cloud consolidation: Integrate data from AWS S3 and GCP into a central Azure store.",
      ],
      commands: [
        {
          cmd: "az datafactory pipeline run --name MyPipeline",
          desc: "Trigger a pipeline run from Azure CLI — useful in CI/CD or scheduled bash scripts.",
        },
        {
          cmd: "az datafactory trigger start --name MyTrigger",
          desc: "Activate a defined trigger to start auto-scheduling pipeline runs.",
        },
        {
          cmd: "az datafactory pipeline-run show --run-id <id>",
          desc: "Check the status and duration of a specific pipeline run.",
        },
        {
          cmd: "az datafactory activity-run query-by-pipeline-run",
          desc: "Get activity-level details for a pipeline run — useful for debugging failures.",
        },
        {
          cmd: "ARM template deployment",
          desc: "Deploy full ADF infrastructure as code using JSON ARM templates in CI/CD pipelines.",
        },
      ],
      comparison:
        "ADF is Microsoft's cloud-native replacement for SSIS. Unlike SSIS, ADF is serverless and requires no Windows infrastructure. For heavy custom transformations, ADF Data Flows are less flexible than writing Spark code in Databricks.",
    },
  },
  {
    name: "AWS Glue",
    abbr: "GLUE",
    color: "#FF9900",
    category: "Cloud ETL",
    tagline: "Serverless ETL on AWS — auto-generates PySpark code",
    what: "AWS Glue is Amazon's fully managed, serverless ETL service. Point it at an S3 bucket, and Glue will automatically discover your data schema (Crawler), catalog it, and generate PySpark transformation code for you. You just edit and run — no infrastructure to manage.",
    whenToUse:
      "When your data lives in S3 or AWS services and you need fast ETL without managing servers. Great for data lake architectures on AWS.",
    difficulty: "Intermediate",
    industryUsage: "AWS-native companies, E-commerce, Media, Startups",
    concepts: [
      "Crawlers",
      "Data Catalog",
      "Glue Jobs (PySpark)",
      "DynamicFrames",
      "Glue Studio",
      "Triggers",
      "Bookmarks",
    ],
    scenario:
      "🛒 Scenario: An e-commerce company dumps 10 GB of daily order logs into S3. AWS Glue Crawlers run at midnight, auto-detect the schema, and trigger a Glue Job that cleans the data (removes test orders, standardizes product IDs) and loads it into Amazon Redshift. The analytics team wakes up to fresh, clean data every morning.",
    companies: [
      "Amazon",
      "Capital One",
      "Major AWS-native companies",
      "Deloitte AWS practice",
    ],
    salary: "₹8–22 LPA",
    demand: "High",
    deepDive: {
      howItWorks:
        "AWS Glue is serverless — no servers to provision. The Glue Data Catalog stores metadata (table definitions, schemas). Crawlers automatically discover source schemas and populate the catalog. ETL Jobs are written in PySpark or Python Shell and run on managed Spark clusters. Glue Studio provides a visual drag-and-drop job builder. You pay per DPU-hour (Data Processing Unit) only when jobs run.",
      workflow: [
        {
          stepNum: 1,
          title: "Crawler Discovers Schema",
          description:
            "A Glue Crawler scans S3, RDS, or DynamoDB and auto-detects column names and types.",
        },
        {
          stepNum: 2,
          title: "Data Catalog Updated",
          description:
            "Discovered schemas are stored in the Glue Data Catalog — a central metadata repository.",
        },
        {
          stepNum: 3,
          title: "Create Glue Job",
          description:
            "Build an ETL job visually in Glue Studio or write PySpark script — select source/target from catalog.",
        },
        {
          stepNum: 4,
          title: "Transform Data",
          description:
            "Apply DynamicFrame operations: drop nulls, map types, join datasets, filter rows.",
        },
        {
          stepNum: 5,
          title: "Schedule or Trigger",
          description:
            "Run on a schedule (cron), trigger after crawler completes, or invoke via EventBridge.",
        },
        {
          stepNum: 6,
          title: "Monitor in CloudWatch",
          description:
            "View logs, DPU usage, and job duration in CloudWatch — set alarms on job failures.",
        },
      ],
      keyComponents: [
        {
          name: "Data Catalog",
          description:
            "Central metadata repository — stores table definitions, schemas, and partitions for S3 data lakes.",
        },
        {
          name: "Crawler",
          description:
            "Auto-discovers data schemas from S3, RDS, DynamoDB and keeps the Data Catalog up to date.",
        },
        {
          name: "ETL Job (PySpark)",
          description:
            "Spark-based transformation code that reads from the catalog, transforms, and writes to the target.",
        },
        {
          name: "Glue Studio",
          description:
            "Visual drag-and-drop job designer — generates PySpark code you can extend manually.",
        },
        {
          name: "DynamicFrame",
          description:
            "AWS Glue's version of a Spark DataFrame — handles schema inconsistencies more flexibly.",
        },
        {
          name: "Glue Workflow",
          description:
            "Orchestrate multiple crawlers and jobs in sequence with dependencies and triggers between them.",
        },
      ],
      useCases: [
        "S3 data lake ETL: Clean and transform raw logs landing in S3 for Athena querying.",
        "Redshift loading: Transform and load data from S3 into Amazon Redshift tables.",
        "Lake Formation governance: Catalog all data assets and enforce row/column-level access.",
        "Serverless batch processing: Run daily aggregations without managing any Spark infrastructure.",
      ],
      commands: [
        {
          cmd: "aws glue start-job-run --job-name MyETLJob",
          desc: "Trigger a Glue ETL job run from the command line.",
        },
        {
          cmd: "aws glue get-job-runs --job-name MyETLJob",
          desc: "List all runs for a job — see status, duration, and DPU usage.",
        },
        {
          cmd: "aws glue start-crawler --name MyCrawler",
          desc: "Manually start a crawler to update schema metadata in the Data Catalog.",
        },
        {
          cmd: "glueContext.create_dynamic_frame.from_catalog()",
          desc: "PySpark: Read a table from the Glue Data Catalog into a DynamicFrame.",
        },
        {
          cmd: "datasink.writeFrame(dynamic_frame)",
          desc: "PySpark: Write a DynamicFrame to the target (S3, Redshift, RDS).",
        },
      ],
      comparison:
        "AWS Glue is serverless and auto-scales, making it simpler than managing your own Spark cluster on EMR. For complex transformations requiring full Spark control, AWS EMR with PySpark is more flexible. Glue is ideal for data lake ETL where simplicity matters.",
    },
  },
  {
    name: "Pentaho",
    abbr: "PEN",
    color: "#3D6B8C",
    category: "Open Source ETL",
    tagline: "Free, powerful ETL for small teams and startups",
    what: "Pentaho Data Integration (PDI), also called Kettle, is an open-source ETL tool that's been around since 2006. It's free, has a rich graphical job designer, and supports databases, files, web services, and cloud sources. Used widely in smaller companies and open-source enthusiast teams.",
    whenToUse:
      "Small teams needing free ETL with solid features. Also popular in academic settings and companies migrating off proprietary tools.",
    difficulty: "Beginner",
    industryUsage: "SMEs, Startups, NGOs, Healthcare (budget-conscious)",
    concepts: [
      "Transformations",
      "Jobs",
      "Steps",
      "Hops",
      "Spoon (GUI)",
      "Database Connections",
      "Metadata",
    ],
    scenario:
      "🏫 Scenario: A university uses Pentaho to consolidate student enrollment data from 3 different student information systems into one reporting database. A nightly ETL job pulls data from Oracle, PostgreSQL, and Excel files, harmonizes student IDs, and loads a clean master table — which powers the administration dashboard.",
    companies: [
      "Mid-size companies",
      "Government agencies",
      "Educational institutions",
    ],
    salary: "₹4–12 LPA",
    demand: "Medium",
    deepDive: {
      howItWorks:
        "Pentaho Data Integration uses a visual drag-and-drop interface called Spoon to build Transformations and Jobs. Transformations process rows of data through a series of Steps. Jobs orchestrate Transformations and other tasks in sequence. The Kettle engine runs locally or on the Pentaho Server. Pentaho supports 100+ input/output formats and a rich library of transformation steps with no coding required.",
      workflow: [
        {
          stepNum: 1,
          title: "Open Spoon Designer",
          description:
            "Launch the Spoon GUI — the canvas-based IDE for building Transformations and Jobs.",
        },
        {
          stepNum: 2,
          title: "Create Transformation",
          description:
            "New Transformation on the canvas — this is the row-level data processing unit.",
        },
        {
          stepNum: 3,
          title: "Add Input Step",
          description:
            "Drag a Table Input, CSV File Input, or Excel Input step and configure the source.",
        },
        {
          stepNum: 4,
          title: "Chain Processing Steps",
          description:
            "Connect Lookup, String Operations, Calculator, Value Mapper steps to transform rows.",
        },
        {
          stepNum: 5,
          title: "Add Output Step",
          description:
            "Connect Table Output or Text File Output step — configure the target schema and write mode.",
        },
        {
          stepNum: 6,
          title: "Create Job to Schedule",
          description:
            "Build a Job that chains Transformations, sets execution order, and handles success/failure routing.",
        },
      ],
      keyComponents: [
        {
          name: "Spoon Designer",
          description:
            "Desktop GUI for building Transformations and Jobs — the primary development tool.",
        },
        {
          name: "Transformation",
          description:
            "Row-level data processing pipeline — steps are connected in a streaming network, not sequential.",
        },
        {
          name: "Job",
          description:
            "Orchestration unit that sequences Transformations and scripts with conditional execution logic.",
        },
        {
          name: "Steps",
          description:
            "Individual processing nodes: Table Input, String Replace, Sort Rows, Group By, JavaScript.",
        },
        {
          name: "Pentaho Server",
          description:
            "Enterprise deployment server for scheduling, monitoring, and managing Pentaho jobs centrally.",
        },
        {
          name: "Kettle Engine",
          description:
            "The runtime engine that executes Transformations and Jobs — can run embedded or as a standalone service.",
        },
      ],
      useCases: [
        "University data consolidation: Merge enrollment data from Oracle, PostgreSQL, and Excel nightly.",
        "Open-source ETL for mid-size firms: Replace expensive Informatica licenses with free Pentaho.",
        "Report data preparation: Clean and aggregate data from multiple sources for business reports.",
        "Legacy system migration: Move data from old Access/FoxPro databases to modern SQL Server.",
      ],
      commands: [
        {
          cmd: "pan.sh -file=transformation.ktr",
          desc: "Run a Pentaho Transformation from command line (Pan is the transformation runner).",
        },
        {
          cmd: "kitchen.sh -file=job.kjb",
          desc: "Run a Pentaho Job from command line (Kitchen is the job runner).",
        },
        {
          cmd: "pan.sh -file=t.ktr -log=INFO",
          desc: "Run transformation with INFO level logging — useful for monitoring in production.",
        },
        {
          cmd: "carte.sh hostname port",
          desc: "Start the Carte microservices server for remote job execution.",
        },
        {
          cmd: "import.sh -rep=myrepo -dir=/jobs",
          desc: "Import repository objects from a folder for deployment to Pentaho server.",
        },
      ],
      comparison:
        "Pentaho is free and beginner-friendly compared to Informatica but lacks enterprise governance features. It handles smaller data volumes than Spark or Kafka. Ideal for organizations that need ETL capabilities without budget for commercial tools.",
    },
  },
  {
    name: "Ab Initio",
    abbr: "ABI",
    color: "#1A237E",
    category: "Enterprise ETL",
    tagline: "Wall Street's secret weapon — high-performance ETL",
    what: "Ab Initio is a high-performance, parallel ETL platform used in financial services and large enterprises where performance and reliability are non-negotiable. It can process billions of records in hours. It's expensive and rarely discussed publicly — which makes knowing about it a differentiator in interviews.",
    whenToUse:
      "When processing multi-billion record datasets for banks, credit card companies, or large telecom firms where batch ETL must complete in a 2-hour overnight window.",
    difficulty: "Advanced",
    industryUsage: "Investment Banks, Credit Card Companies, Large Telecom",
    concepts: [
      "Graphs",
      "Components",
      "Co>Operating System",
      "GDE (GUI)",
      "Sandboxes",
      "Rollout",
      "Control>Center",
    ],
    scenario:
      "💰 Scenario: A major US credit card company uses Ab Initio to process 50 million transactions every night — checking for fraud patterns, calculating daily interest, updating credit scores, and generating customer statements. The entire batch must complete between midnight and 5 AM. Ab Initio does it in 3 hours using 200 parallel processes.",
    companies: [
      "Citibank",
      "JP Morgan",
      "Verizon",
      "AT&T",
      "Large banks worldwide",
    ],
    salary: "₹12–35 LPA",
    demand: "High",
    deepDive: {
      howItWorks:
        "Ab Initio is an enterprise-grade parallel processing ETL platform. The GDE (Graphical Development Environment) lets developers build dataflow graphs visually. Components are parallelized automatically — each can run on multiple CPUs/partitions simultaneously. The Co>Operating System manages distributed execution across a compute cluster. Ab Initio is known for handling extremely large volumes: billions of records per hour with strict batch window requirements.",
      workflow: [
        {
          stepNum: 1,
          title: "Design Graph in GDE",
          description:
            "Use the Graphical Development Environment to drag components and connect them into a dataflow graph.",
        },
        {
          stepNum: 2,
          title: "Define Components",
          description:
            "Configure input, transformation, join, sort, aggregate, and output components with their parameters.",
        },
        {
          stepNum: 3,
          title: "Configure Parallelism",
          description:
            "Set the degree of parallelism (DOP) — how many CPUs/partitions each component runs on simultaneously.",
        },
        {
          stepNum: 4,
          title: "Compile Graph",
          description:
            "Compile the graph using 'air make' — catches syntax and configuration errors before runtime.",
        },
        {
          stepNum: 5,
          title: "Test in Sandbox",
          description:
            "Run against a small data subset in a sandbox environment — verify logic and performance.",
        },
        {
          stepNum: 6,
          title: "Deploy via EME",
          description:
            "Promote to production through the Enterprise Meta-Environment (EME) — controlled release process.",
        },
      ],
      keyComponents: [
        {
          name: "GDE (Graphical Development Environment)",
          description:
            "Visual IDE for building Ab Initio dataflow graphs — drag-and-drop components onto the canvas.",
        },
        {
          name: "Components",
          description:
            "Pre-built processing units: Join, Rollup, Sort, Reformat, Filter, Gather, Partition.",
        },
        {
          name: "Co>Operating System",
          description:
            "Ab Initio's distributed execution runtime — manages parallelism, data flow, and resource allocation.",
        },
        {
          name: "EME (Enterprise Meta-Environment)",
          description:
            "Central repository for source code, configurations, and deployment management.",
        },
        {
          name: "Metadata Hub",
          description:
            "Tracks data lineage, impact analysis, and technical metadata across all Ab Initio graphs.",
        },
        {
          name: "Control>Center",
          description:
            "Operations dashboard for scheduling, monitoring, and managing Ab Initio batch jobs in production.",
        },
      ],
      useCases: [
        "Bank transaction processing: Process 50M+ transactions nightly with fraud checks and interest calculations.",
        "Telecom billing (CDRs): Process billions of Call Detail Records for billing within tight overnight windows.",
        "Insurance claims: Run complex actuarial and claims processing pipelines at massive scale.",
        "Government data processing: Handle national-scale data aggregations with strict SLA requirements.",
      ],
      commands: [
        {
          cmd: "air run graph.mp",
          desc: "Execute an Ab Initio graph from the command line.",
        },
        {
          cmd: "air make graph.mp",
          desc: "Compile the graph — resolves component references and validates configuration.",
        },
        {
          cmd: "air sandbox create",
          desc: "Create a sandbox environment for testing graphs with smaller data subsets.",
        },
        {
          cmd: "m_dump -input file.dat",
          desc: "Dump the contents of an Ab Initio data file for debugging.",
        },
        {
          cmd: "show_plan graph.mp",
          desc: "Display the execution plan — how components will be parallelized and scheduled.",
        },
      ],
      comparison:
        "Ab Initio is significantly more powerful than Informatica PowerCenter for ultra-high-volume batch processing, but it's proprietary, expensive, and rarely discussed publicly. Knowing Ab Initio is a major differentiator when interviewing at large financial institutions.",
    },
  },
];

const DIFFICULTY_STYLES: Record<string, string> = {
  Beginner: "badge-difficulty-beginner",
  Intermediate: "badge-difficulty-intermediate",
  Advanced: "badge-difficulty-advanced",
};

const DEMAND_COLORS: Record<string, string> = {
  "Very High": "text-[oklch(var(--capstone-accent))]",
  High: "text-[oklch(var(--skill-cloud))]",
  Medium: "text-[oklch(var(--corporate-accent))]",
};

// ── Visual Workflow Renderer ──────────────────────────────────────────────────

function WorkflowSteps({
  steps,
  color,
}: { steps: WorkflowStep[]; color: string }) {
  return (
    <div className="space-y-2">
      {steps.map((step, i) => (
        <div key={step.stepNum} className="flex items-start gap-2">
          <div className="flex flex-col items-center shrink-0">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: color }}
            >
              {step.stepNum}
            </div>
            {i < steps.length - 1 && (
              <div
                className="w-0.5 h-3 mt-1"
                style={{ backgroundColor: `${color}40` }}
              />
            )}
          </div>
          <div className="pb-1">
            <p className="text-xs font-semibold text-foreground leading-tight">
              {step.title}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Premium Blur Overlay ──────────────────────────────────────────────────────

function PremiumBlurOverlay({ onUpgrade }: { onUpgrade: () => void }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 rounded-lg">
      <div className="absolute inset-0 backdrop-blur-sm bg-background/70 rounded-lg" />
      <div className="relative flex flex-col items-center gap-2 text-center px-4">
        <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center">
          <Lock className="w-5 h-5 text-amber-500" />
        </div>
        <p className="text-sm font-bold text-foreground">Premium Content</p>
        <p className="text-xs text-muted-foreground max-w-xs">
          Detailed workflow, components, commands &amp; more
        </p>
        <Button
          size="sm"
          className="mt-1 gap-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold"
          onClick={onUpgrade}
          data-ocid="etl-deep-dive-upgrade-btn"
        >
          <Lock className="w-3.5 h-3.5" />
          Upgrade to View
        </Button>
      </div>
    </div>
  );
}

// ── ETL Card ──────────────────────────────────────────────────────────────────

function EtlCard({
  tool,
  onUpgrade,
}: { tool: EtlTool; onUpgrade: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [showDeepDive, setShowDeepDive] = useState(false);
  const { isSubscribed, isAdmin } = useSubscription();
  const hasAccess = isSubscribed || isAdmin;

  return (
    <div
      className="course-card p-5"
      data-ocid={`etl-card-${tool.abbr.toLowerCase()}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-sm"
          style={{ backgroundColor: tool.color }}
        >
          {tool.abbr}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap mb-1">
            <h3 className="font-display font-bold text-base text-foreground leading-tight">
              {tool.name}
            </h3>
            <span
              className="text-xs px-2 py-0.5 rounded font-medium"
              style={{
                backgroundColor: `${tool.color}18`,
                color: tool.color,
              }}
            >
              {tool.category}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{tool.tagline}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-3 text-xs">
        <span className={`font-semibold ${DEMAND_COLORS[tool.demand]}`}>
          <Zap className="w-3 h-3 inline mr-1" />
          Demand: {tool.demand}
        </span>
        <span className="badge-subscription">{tool.salary}</span>
        <span className={DIFFICULTY_STYLES[tool.difficulty]}>
          {tool.difficulty}
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {tool.what}
      </p>

      {/* Scenario */}
      <div className="p-3 rounded-lg bg-muted/40 border border-border mb-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {tool.scenario}
        </p>
      </div>

      <button
        type="button"
        className="flex items-center gap-1.5 text-xs font-semibold text-[oklch(var(--etl-accent))] hover:opacity-80 transition-smooth w-full justify-between"
        onClick={() => setExpanded(!expanded)}
        data-ocid={`etl-expand-${tool.abbr.toLowerCase()}`}
      >
        <span>
          {expanded ? "Show less" : "See key concepts, companies & when to use"}
        </span>
        {expanded ? (
          <ChevronUp className="w-3.5 h-3.5" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5" />
        )}
      </button>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-border space-y-3">
          <div>
            <p className="text-xs font-semibold text-foreground mb-1.5">
              🎯 When to use it
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {tool.whenToUse}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-1.5">
              🏭 Industries
            </p>
            <p className="text-xs text-muted-foreground">
              {tool.industryUsage}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-1.5">
              ⚙️ Key Concepts
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tool.concepts.map((c) => (
                <span
                  key={c}
                  className="text-xs px-2 py-0.5 rounded-full bg-[oklch(var(--etl-accent)/0.08)] text-[oklch(var(--etl-accent))] border border-[oklch(var(--etl-accent)/0.2)]"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-1.5">
              🏢 Hiring Companies
            </p>
            <div className="flex flex-wrap gap-1.5">
              {tool.companies.map((co) => (
                <span
                  key={co}
                  className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
                >
                  {co}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Deep Dive Section — all tools */}
      <div className="mt-3 pt-3 border-t border-border">
        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-bold w-full justify-between py-1"
          style={{ color: tool.color }}
          onClick={() => setShowDeepDive(!showDeepDive)}
          data-ocid={`etl-deepdive-toggle-${tool.abbr.toLowerCase()}`}
        >
          <span className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" />
            Deep Dive: How {tool.name.split(" ")[0]} Works
          </span>
          {showDeepDive ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>

        {showDeepDive && (
          <div className="mt-3 space-y-4 relative">
            {/* Always show how-it-works; rest is behind premium gate */}
            <div
              className="p-3 rounded-lg border"
              style={{
                backgroundColor: `${tool.color}08`,
                borderColor: `${tool.color}28`,
              }}
            >
              <p
                className="text-xs font-bold mb-1.5"
                style={{ color: tool.color }}
              >
                How It Works
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {tool.deepDive.howItWorks}
              </p>
            </div>

            {/* Premium-gated content */}
            <div className="relative">
              {/* Preview of content (always rendered for blur) */}
              <div
                className={
                  hasAccess ? "" : "blur-sm pointer-events-none select-none"
                }
              >
                {/* Workflow Steps */}
                <div
                  className="p-3 rounded-lg border mb-3"
                  style={{
                    backgroundColor: `${tool.color}05`,
                    borderColor: `${tool.color}20`,
                  }}
                >
                  <p
                    className="text-xs font-bold mb-2 flex items-center gap-1.5"
                    style={{ color: tool.color }}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                    Step-by-Step Workflow
                  </p>
                  <WorkflowSteps
                    steps={tool.deepDive.workflow}
                    color={tool.color}
                  />
                </div>

                {/* Key Components */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Layers
                      className="w-3.5 h-3.5"
                      style={{ color: tool.color }}
                    />
                    Key Components
                  </p>
                  <div className="grid grid-cols-1 gap-1.5">
                    {tool.deepDive.keyComponents.map((comp) => (
                      <div
                        key={comp.name}
                        className="flex items-start gap-2 p-2 rounded-lg bg-muted/30 border border-border"
                      >
                        <span
                          className="text-xs font-bold shrink-0 px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: `${tool.color}15`,
                            color: tool.color,
                          }}
                        >
                          {comp.name.split(" ")[0]}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-foreground">
                            {comp.name}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {comp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Star
                      className="w-3.5 h-3.5"
                      style={{ color: tool.color }}
                    />
                    Real-World Use Cases
                  </p>
                  <ul className="space-y-1">
                    {tool.deepDive.useCases.map((uc) => (
                      <li
                        key={uc.slice(0, 25)}
                        className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5"
                      >
                        <span
                          className="shrink-0 mt-0.5"
                          style={{ color: tool.color }}
                        >
                          ▸
                        </span>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Commands */}
                <div className="mb-3">
                  <p className="text-xs font-bold text-foreground mb-2 flex items-center gap-1.5">
                    <Code2
                      className="w-3.5 h-3.5"
                      style={{ color: tool.color }}
                    />
                    Key Commands &amp; Operations
                  </p>
                  <div className="space-y-1.5">
                    {tool.deepDive.commands.map((cmd) => (
                      <div
                        key={cmd.cmd}
                        className="flex items-start gap-3 p-2 rounded-lg bg-muted/50 border border-border"
                      >
                        <code
                          className="text-xs font-mono font-bold shrink-0 px-1.5 py-0.5 rounded max-w-[140px] truncate"
                          style={{
                            backgroundColor: `${tool.color}15`,
                            color: tool.color,
                          }}
                          title={cmd.cmd}
                        >
                          {cmd.cmd}
                        </code>
                        <span className="text-xs text-muted-foreground leading-relaxed">
                          {cmd.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comparison */}
                <div
                  className="p-2.5 rounded-lg border"
                  style={{
                    backgroundColor: `${tool.color}06`,
                    borderColor: `${tool.color}20`,
                  }}
                >
                  <p
                    className="text-xs font-bold mb-1"
                    style={{ color: tool.color }}
                  >
                    vs. Similar Tools
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {tool.deepDive.comparison}
                  </p>
                </div>
              </div>

              {/* Paywall overlay */}
              {!hasAccess && <PremiumBlurOverlay onUpgrade={onUpgrade} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function EtlTools() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [paywallOpen, setPaywallOpen] = useState(false);

  const categories = [
    "All",
    "Enterprise ETL",
    "Open Source ETL",
    "Cloud ETL",
    "Real-Time Streaming",
    "Big Data Processing",
    "Modern Transformation",
    "Microsoft ETL",
  ];
  const filtered =
    activeFilter === "All"
      ? ETL_TOOLS
      : ETL_TOOLS.filter((t) => t.category === activeFilter);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <PaywallModal open={paywallOpen} onOpenChange={setPaywallOpen} />

      {/* Intro banner */}
      <div className="mb-6 p-4 rounded-xl bg-[oklch(var(--etl-accent)/0.08)] border border-[oklch(var(--etl-accent)/0.25)] flex items-start gap-3">
        <Star className="w-5 h-5 text-[oklch(var(--etl-accent))] shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-[oklch(var(--etl-accent))]">
            ETL: The Backbone of Every Data Project
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Every tool below includes what it does, when MNCs use it, key
            concepts, and a real workplace scenario. Expand each card to see
            full details. Deep-dive sections require Premium access.
          </p>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Database className="w-5 h-5 text-[oklch(var(--etl-accent))]" />
          <span className="text-sm font-semibold text-[oklch(var(--etl-accent))] uppercase tracking-wide">
            ETL Tools
          </span>
        </div>
        <h1 className="font-display font-bold text-3xl text-foreground mb-3">
          ETL &amp; Data Integration Tools
        </h1>
        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-5">
          ETL means{" "}
          <strong className="text-foreground">Extract, Transform, Load</strong>{" "}
          — the backbone of every data project. Mastering one ETL tool opens the
          door to data engineering roles paying ₹8–35 LPA at top MNCs.
        </p>

        {/* ETL Concept explainer */}
        <div className="p-5 rounded-xl bg-card border border-border mb-5">
          <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[oklch(var(--etl-accent))]" />
            What is ETL? (with a real scenario)
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            An e-commerce company gets orders from 5 different systems — their
            website, mobile app, Amazon marketplace, Flipkart, and retail
            stores. Each system stores data in a different format. ETL combines
            all of them:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                step: "Extract",
                icon: "📤",
                color: "var(--skill-cloud)",
                desc: "Pull raw data from 5 systems — website DB, mobile app API, Amazon exports, Flipkart CSV, store SQL",
              },
              {
                step: "Transform",
                icon: "🔄",
                color: "var(--etl-accent)",
                desc: "Standardize formats — unify date formats, convert currencies, remove duplicates, validate phone numbers",
              },
              {
                step: "Load",
                icon: "📥",
                color: "var(--capstone-accent)",
                desc: "Load clean, unified data into one data warehouse — ready for analytics and business reporting",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-3 rounded-lg border text-center"
                style={{
                  backgroundColor: `oklch(var(${item.color})/0.06)`,
                  borderColor: `oklch(var(${item.color})/0.2)`,
                }}
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <p
                  className="text-xs font-bold mb-1"
                  style={{ color: `oklch(var(${item.color}))` }}
                >
                  {item.step}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
            <GitMerge className="w-4 h-4 text-[oklch(var(--etl-accent))]" />
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Result:</strong> Instead of
              analysts opening 5 different systems, they query one clean
              warehouse — and the analytics team can answer "how many total
              orders did we get today?" in seconds.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: "10", label: "ETL Tools Covered" },
            { value: "₹6–35 LPA", label: "Salary range" },
            { value: "1 Tool", label: "Enough to get hired" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-3 rounded-xl bg-[oklch(var(--etl-accent)/0.06)] border border-[oklch(var(--etl-accent)/0.15)] text-center"
            >
              <p className="font-display font-bold text-lg text-[oklch(var(--etl-accent))]">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div
        className="flex flex-wrap gap-2 mb-6"
        data-ocid="etl-category-filter"
      >
        {categories.map((cat) => (
          <button
            type="button"
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-smooth border ${
              activeFilter === cat
                ? "bg-[oklch(var(--etl-accent))] text-white border-[oklch(var(--etl-accent))]"
                : "bg-muted text-muted-foreground border-border hover:border-[oklch(var(--etl-accent)/0.4)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tool cards */}
      <div className="space-y-5 mb-8">
        {filtered.map((tool) => (
          <EtlCard
            key={tool.name}
            tool={tool}
            onUpgrade={() => setPaywallOpen(true)}
          />
        ))}
      </div>

      {/* Career paths */}
      <div className="p-5 rounded-xl bg-card border border-border mb-6">
        <p className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 text-[oklch(var(--etl-accent))]" />
          ETL Career Path for Freshers
        </p>
        <div className="space-y-2">
          {[
            {
              id: "fresher",
              role: "ETL Developer (Fresher)",
              tools: "Informatica / Talend / SSIS",
              salary: "₹4–8 LPA",
              timeline: "0–2 years",
            },
            {
              id: "engineer",
              role: "Data Engineer",
              tools: "Spark + dbt + Kafka",
              salary: "₹8–18 LPA",
              timeline: "2–4 years",
            },
            {
              id: "senior",
              role: "Senior Data Engineer",
              tools: "Cloud ETL + Architecture",
              salary: "₹18–30 LPA",
              timeline: "4–7 years",
            },
            {
              id: "architect",
              role: "Data Architect / Lead",
              tools: "Full Stack Data",
              salary: "₹28–50 LPA",
              timeline: "7+ years",
            },
          ].map((item, i) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-muted/30 border border-border"
            >
              <div className="w-6 h-6 rounded-full bg-[oklch(var(--etl-accent)/0.15)] text-[oklch(var(--etl-accent))] flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-foreground">
                  {item.role}
                </p>
                <p className="text-xs text-muted-foreground">{item.tools}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-semibold text-[oklch(var(--capstone-accent))]">
                  {item.salary}
                </p>
                <p className="text-xs text-muted-foreground">{item.timeline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
