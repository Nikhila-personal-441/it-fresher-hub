// SQL Module - 35 Scenario-Based Lessons
// Priya's journey as a data analyst at TechCorp Solutions
import type { LessonContent } from "@/types";

export const SQL_LESSONS: LessonContent[] = [
  {
    title: "What is a Database? Your Data Storage Foundation",
    content:
      "Priya just joined TechCorp Solutions as a junior data analyst. On her first day, her manager Arjun asks her to pull the list of all customers who purchased in the last 30 days. Priya opens a massive Excel sheet with 50,000 rows, filters manually, and crashes the file. Arjun smiles and says, \"Welcome to your first lesson — this is why we use databases.\"\n\nA database is an organized collection of data stored electronically, designed for fast retrieval, insertion, and management. Unlike Excel, a database can handle millions of rows without breaking a sweat. It enforces rules so bad data never gets in, allows multiple users to work simultaneously, and keeps data safe through backups and access controls.\n\nIn the real world, every app you use — Swiggy, Zepto, your bank, Instagram — is powered by databases behind the scenes. When you place a Swiggy order, that order, your address, the restaurant details, the delivery partner's location — every piece of data lives in structured database tables being read and written hundreds of times per second. That's the power you're about to learn.",
    funFact:
      "The world's largest database belongs to the US Library of Congress — over 3 petabytes (3,000 TB) of data. Yet SQL can query all of it using the same commands you'll learn today.",
    xpReward: 50,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's Excel file crashes handling 50,000 rows. What makes a database better suited for this task?",
      options: [
        "Databases use colorful charts and pivot tables",
        "Databases are designed for fast, structured storage and retrieval of large data sets",
        "Databases only work on Windows servers",
        "Databases automatically email reports to managers",
      ],
      correctAnswer:
        "Databases are designed for fast, structured storage and retrieval of large data sets",
      explanation:
        "Databases are purpose-built engines optimized for storing and querying large amounts of structured data efficiently. Unlike Excel, they handle millions of rows, enforce data rules, and allow multiple users simultaneously.",
    },
  },
  {
    title: "Relational vs Non-Relational Databases",
    content:
      "Arjun shows Priya two whiteboards. The first has neat rows and columns — like a spreadsheet but super-powered. The second looks like a folder full of JSON documents, each shaped differently. He asks, \"Which one should we use for our customer orders?\" This is the relational vs non-relational debate that every IT fresher must understand.\n\nA Relational Database (SQL) stores data in tables with rows and columns — think of it like interconnected Excel sheets. MySQL, PostgreSQL, Oracle, and SQL Server are relational databases. They use SQL (Structured Query Language) to interact with data. They're perfect when your data is structured and relationships between tables matter — like linking a customer to their orders to their payments.\n\nA Non-Relational Database (NoSQL) stores data as documents (MongoDB), key-value pairs (Redis), graphs (Neo4j), or wide-column stores (Cassandra). They're flexible — each record can have different fields. Perfect for social media posts, real-time chat, product catalogs where data structure varies. In most MNCs, you'll work with both — SQL for structured transactional data, NoSQL for flexible or high-speed use cases.",
    funFact:
      "Instagram switched from PostgreSQL to a combination of PostgreSQL and Cassandra when they scaled to 1 billion users. Their photo metadata (likes, comments, timestamps) runs on Cassandra while user accounts stay in PostgreSQL.",
    xpReward: 60,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp wants to store customer orders where each order has a fixed structure: order ID, customer ID, product, amount. Which database type is most appropriate?",
      options: [
        "NoSQL document database like MongoDB",
        "Relational database like MySQL",
        "Key-value store like Redis",
        "Graph database like Neo4j",
      ],
      correctAnswer: "Relational database like MySQL",
      explanation:
        "Relational databases excel when data has a consistent, structured format with relationships between entities (customers, orders, products). The fixed schema and JOIN capabilities make MySQL the right choice here.",
    },
  },
  {
    title: "Installing MySQL: Your First Database Server",
    content:
      'Priya opens her laptop and types "how to install MySQL" into Google. She finds 47 different tutorials, all slightly different, all slightly confusing. Arjun says, "Stop. Let me show you the official way." Ten minutes later, Priya has MySQL Server and MySQL Workbench running on her laptop — and she feels like she just summoned a superpower.\n\nInstalling MySQL involves two pieces: the MySQL Server (the actual database engine that stores and processes data) and a client tool to interact with it. MySQL Workbench is the official GUI client — it lets you write queries, view tables, and manage the database visually. Alternatively, you can use the command-line client by opening your terminal and typing: mysql -u root -p\n\nAfter installation, verify everything works: open MySQL Workbench, create a new connection using host localhost, port 3306, username root, and your chosen password. Click Test Connection — if it shows green, you\'re ready. The default port 3306 is MySQL\'s address on your machine. Think of it like your house number — other programs use this port to connect to MySQL.',
    funFact:
      "MySQL was created in 1995 by a Swedish company (MySQL AB) and named after the founder's daughter, My. Today it powers over 2 million applications worldwide including WordPress, Facebook's early backend, and Twitter's initial architecture.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "The default port number for MySQL Server is ________, and you connect using the command: mysql -u root -________.",
      correctAnswer: "3306",
      explanation:
        "MySQL listens on port 3306 by default. The command 'mysql -u root -p' connects to MySQL as the root user — the '-p' flag prompts for your password. Port 3306 is MySQL's default and is used in all connection strings.",
    },
  },
  {
    title: "Creating Your First Database",
    content:
      "Priya sits down at MySQL Workbench for the first time. Arjun says, \"We need a database for our new HR system. Create it.\" Priya stares at the blank query window. This is her first real SQL command — and it's beautifully simple.\n\nIn MySQL, a database is a container that holds all your tables. Before creating any tables, you need to create a database first. The command is: CREATE DATABASE company_hr; To then use that database for all subsequent commands, type: USE company_hr; To see all existing databases, run: SHOW DATABASES; and to see all tables inside a database, run: SHOW TABLES;\n\nPriya creates the database: CREATE DATABASE techcorp_db; then USE techcorp_db; Now every SQL command she runs will operate inside techcorp_db. Think of it like walking into a folder on your computer — all actions happen inside that folder until you navigate out. Database names are case-sensitive on Linux servers, so it's a good practice to use lowercase with underscores: my_database, not MyDatabase.",
    funFact:
      "MySQL allows you to have hundreds of databases on one server, each completely isolated from the others. Large companies often have separate databases for development, testing, and production environments — all on the same server.",
    xpReward: 55,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "After creating a database named 'techcorp_db', which SQL command do you use to start working inside it?",
      correctAnswer: "USE techcorp_db",
      explanation:
        "The USE command selects a database as the active context. All subsequent SQL commands (CREATE TABLE, INSERT, SELECT) will operate within the selected database until you switch to another with another USE statement.",
    },
  },
  {
    title: "SQL Data Types: Choosing the Right Storage",
    content:
      "Arjun hands Priya a requirements document for the employee table. It needs employee ID, name, email, salary, hire date, and whether they're currently active. Priya starts creating the table and immediately runs into a question: what type of data should each column hold? This is where SQL data types come in — and choosing wrong can cause silent bugs for years.\n\nKey SQL Data Types: INT for whole numbers (employee ID, age), DECIMAL(10,2) for money (salary: up to 10 digits, 2 after decimal), VARCHAR(255) for variable-length text (name, email — 255 is max characters), CHAR(1) for fixed-length short text (gender code: 'M'/'F'), DATE for dates (hire_date: '2024-01-15'), DATETIME for date+time (created_at: '2024-01-15 09:30:00'), BOOLEAN or TINYINT(1) for true/false (is_active), and TEXT for long content (descriptions, notes).\n\nA critical rule: store money as DECIMAL, never FLOAT. Float has floating-point imprecision — 99.99 might be stored as 99.98999999. For financial data at TechCorp, this could cause accounting discrepancies worth crores. Priya learns this the hard way when her test salary calculations come out wrong by a few paise — classic FLOAT trap.",
    funFact:
      "The Y2K problem (year 2000 bug) happened because programmers stored years as 2-digit CHAR fields ('99' for 1999) to save disk space. Disk space was $1,000 per megabyte in the 1970s when those systems were built. That frugality cost the world an estimated $300 billion to fix.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to store employee salaries like 85000.50 accurately. Which data type should she use?",
      options: ["FLOAT", "INT", "DECIMAL(10,2)", "VARCHAR(20)"],
      correctAnswer: "DECIMAL(10,2)",
      explanation:
        "DECIMAL(10,2) stores exact decimal values — 10 total digits with 2 after the decimal point. FLOAT uses approximate binary representation which can cause tiny rounding errors. For financial data, always use DECIMAL.",
    },
  },
  {
    title: "CREATE TABLE: Designing Your First Table",
    content:
      "Now Priya is ready to create her first real table. Arjun reviews her design: \"You need a PRIMARY KEY on every table — that's the unique identifier for each row. Never forget it.\" Priya nods and types her first CREATE TABLE statement, which becomes the foundation of TechCorp's entire HR database.\n\nHere's the CREATE TABLE syntax Priya writes:\n\nCREATE TABLE employees (\n  employee_id INT AUTO_INCREMENT PRIMARY KEY,\n  first_name VARCHAR(50) NOT NULL,\n  last_name VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE NOT NULL,\n  salary DECIMAL(10,2) DEFAULT 0.00,\n  department VARCHAR(50),\n  hire_date DATE NOT NULL,\n  is_active BOOLEAN DEFAULT TRUE\n);\n\nKey constraints: PRIMARY KEY uniquely identifies each row. AUTO_INCREMENT automatically generates the next ID. NOT NULL means the field is required. UNIQUE prevents duplicate emails. DEFAULT sets a fallback value if none is provided. These constraints are your data's bodyguards — they stop bad data from ever entering the table.",
    funFact:
      "The concept of PRIMARY KEY comes from Edgar Codd's 1970 paper 'A Relational Model of Data for Large Shared Data Banks' which invented relational databases. Codd worked at IBM and his ideas were initially ignored by IBM management for years before becoming the foundation of modern data storage.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya adds UNIQUE NOT NULL to the email column. What does this enforce?",
      options: [
        "Email must be a valid Gmail address",
        "Every employee must have a unique, non-empty email address",
        "Email must be under 100 characters only",
        "Email can be empty but must be unique if provided",
      ],
      correctAnswer:
        "Every employee must have a unique, non-empty email address",
      explanation:
        "UNIQUE prevents two rows from having the same value. NOT NULL prevents the value from being empty/null. Together, they guarantee every employee has a distinct, filled-in email — preventing duplicate accounts and missing contact info.",
    },
  },
  {
    title: "INSERT INTO: Adding Data to Your Table",
    content:
      "The employees table exists, but it's empty. Arjun gives Priya a list of 5 employees to add. \"Put them in the database,\" he says. Priya's first INSERT command adds Rahul Sharma — and watching it appear in the database feels like magic.\n\nThe INSERT syntax is: INSERT INTO employees (first_name, last_name, email, salary, department, hire_date) VALUES ('Rahul', 'Sharma', 'rahul.sharma@techcorp.com', 75000.00, 'Engineering', '2024-01-15'); Notice you list the column names first, then the matching values — they must be in the same order. You can insert multiple rows at once by chaining VALUES: VALUES ('Priya', 'Patel', 'priya@techcorp.com', 65000, 'Analytics', '2024-02-01'), ('Arjun', 'Mehta', 'arjun@techcorp.com', 90000, 'Management', '2023-06-10');\n\nA critical real-world rule: always wrap text values in single quotes, never double quotes. Dates go in as strings in 'YYYY-MM-DD' format. And never insert a value into the PRIMARY KEY AUTO_INCREMENT column — MySQL generates it automatically. Priya tries inserting a duplicate email and gets ERROR 1062: Duplicate entry — the UNIQUE constraint working exactly as designed, protecting data integrity.",
    funFact:
      "At peak traffic, Amazon's databases process over 1 million INSERT operations per second during Prime Day sales. They use specialized database clusters where writes are distributed across dozens of servers simultaneously to handle this load.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Complete the INSERT statement: INSERT ________ employees (first_name, email) VALUES ('Sneha', 'sneha@techcorp.com');",
      correctAnswer: "INTO",
      explanation:
        "The full syntax is INSERT INTO table_name (columns) VALUES (values). INTO is required — it specifies which table you are inserting into. Omitting INTO causes a syntax error.",
    },
  },
  {
    title: "SELECT: Retrieving Your Data",
    content:
      "Priya has 20 employees in the database. Her manager Sneha (head of HR) walks over and asks, \"Can you get me all employees in the Engineering department?\" Priya opens MySQL Workbench, types her SELECT query, and in 0.001 seconds has the list. Sneha's jaw drops — she was expecting Priya to scroll through a spreadsheet for 10 minutes.\n\nSELECT is the most powerful SQL command — you'll use it in literally every data task. Basic syntax: SELECT * FROM employees; retrieves all columns for all rows. But SELECT * in production is a bad habit — it fetches unnecessary data. Better: SELECT first_name, last_name, email FROM employees; — only get what you need. To retrieve with a condition: SELECT first_name, salary FROM employees WHERE department = 'Engineering';\n\nYou can also compute on the fly: SELECT first_name, salary * 12 AS annual_salary FROM employees; — the AS keyword creates an alias for the computed column. SELECT DISTINCT department FROM employees; returns unique departments without duplicates. SELECT COUNT(*) FROM employees; counts total rows. The SELECT command is your data microscope — it lets you see exactly what you need.",
    funFact:
      "The SELECT statement was invented in 1974 by Donald Chamberlin and Raymond Boyce at IBM as part of SEQUEL (Structured English Query Language), which later became SQL. Chamberlin said he designed it to be readable by non-programmers — someone with no coding background should still understand 'SELECT name FROM employees WHERE age > 25'.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs only the first_name and salary columns from the employees table. Which query is best practice?",
      options: [
        "SELECT * FROM employees",
        "SELECT first_name, salary FROM employees",
        "GET first_name, salary FROM employees",
        "SELECT employees.all FROM table",
      ],
      correctAnswer: "SELECT first_name, salary FROM employees",
      explanation:
        "Specifying only needed columns is best practice. SELECT * fetches all columns including ones you don't need, wasting bandwidth and making queries slower. Always name the specific columns you require.",
    },
  },
  {
    title: "WHERE Clause: Filtering Your Results",
    content:
      "Sneha needs only employees earning over 70,000 rupees. Then she needs Engineering employees hired after 2023. Then she needs active employees in either Engineering or Analytics. Each request makes Priya add more conditions to her WHERE clause — and she realizes WHERE is where SQL's real power begins.\n\nWHERE filters rows before returning results. Comparison operators: = (equals), != or <> (not equals), >, <, >=, <=. Combine conditions with AND and OR: SELECT * FROM employees WHERE department = 'Engineering' AND salary > 70000; The IN operator checks a list: WHERE department IN ('Engineering', 'Analytics'); — much cleaner than multiple ORs. BETWEEN checks a range: WHERE salary BETWEEN 50000 AND 80000;\n\nPattern matching with LIKE: WHERE email LIKE '%@techcorp.com' — the % is a wildcard matching any characters. WHERE first_name LIKE 'P%' finds names starting with P. Order of operations matters: AND has higher precedence than OR, so use parentheses to group: WHERE (department = 'Engineering' OR department = 'Analytics') AND is_active = TRUE; Without parentheses, this query means something completely different.",
    funFact:
      "Facebook's news feed algorithm at its core is essentially one giant SQL-like WHERE clause filtering posts based on hundreds of conditions — your friends, your interests, engagement scores, post age, advertiser bids — all evaluated in milliseconds for each user page load.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya writes: WHERE department = 'Engineering' OR department = 'Analytics' AND salary > 60000. What does this actually filter?",
      options: [
        "All Engineering OR Analytics employees earning over 60000",
        "All Engineering employees, plus Analytics employees earning over 60000 (AND has higher precedence)",
        "Only employees earning over 60000 in both departments",
        "This query will throw a syntax error",
      ],
      correctAnswer:
        "All Engineering employees, plus Analytics employees earning over 60000 (AND has higher precedence)",
      explanation:
        "AND is evaluated before OR in SQL. Without parentheses, the query becomes: department='Engineering' OR (department='Analytics' AND salary>60000). To get the intended result, use: WHERE (department='Engineering' OR department='Analytics') AND salary>60000.",
    },
  },
  {
    title: "ORDER BY and LIMIT: Sorting and Paging",
    content:
      "Priya's manager asks for the top 5 highest-paid employees. Then the newest 10 hires. Then a list sorted alphabetically by last name. Each request is just ORDER BY and LIMIT working together — and Priya becomes the fastest person in the team to answer these ad-hoc requests.\n\nORDER BY sorts results. By default it's ascending (smallest to largest, A to Z): SELECT * FROM employees ORDER BY salary; Add DESC for descending (largest to smallest): SELECT first_name, salary FROM employees ORDER BY salary DESC; — this gives highest-paid first. Sort by multiple columns: ORDER BY department ASC, salary DESC; — sort by department alphabetically, and within each department by salary highest first.\n\nLIMIT restricts how many rows are returned: SELECT first_name, salary FROM employees ORDER BY salary DESC LIMIT 5; — top 5 earners. For pagination (showing page 2 of results), use LIMIT with OFFSET: LIMIT 10 OFFSET 10; skips the first 10 rows and returns the next 10. Page 1: OFFSET 0. Page 2: OFFSET 10. Page 3: OFFSET 20. This is exactly how Swiggy paginates your order history.",
    funFact:
      "Amazon's product search returns results so fast partly because they pre-sort and cache popular query results. Your 'sort by price: low to high' doesn't run a fresh ORDER BY on 300 million products — it uses pre-computed sorted indexes that update every few minutes.",
    xpReward: 65,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To get the 3 most recently hired employees, complete the query: SELECT * FROM employees ORDER BY hire_date ________ LIMIT 3;",
      correctAnswer: "DESC",
      explanation:
        "ORDER BY hire_date DESC sorts from most recent to oldest (descending date order). Combined with LIMIT 3, this returns only the 3 rows with the latest hire_date values — the newest employees.",
    },
  },
  {
    title: "UPDATE: Modifying Existing Records",
    content:
      "Rahul gets a promotion — his salary goes from 75,000 to 85,000 and his department changes to 'Senior Engineering'. Priya needs to update his record in the database. She writes her UPDATE statement, but then stops — Arjun looks over and says, \"Always add a WHERE clause to UPDATE. Without it, you'll update EVERY row in the table. I've seen people get fired for that.\"\n\nUPDATE syntax: UPDATE employees SET salary = 85000, department = 'Senior Engineering' WHERE employee_id = 1; The SET keyword lists the columns to change. The WHERE clause targets specific rows. Without WHERE, every employee gets the salary change — a catastrophic mistake. Best practice: before running UPDATE, run the equivalent SELECT first: SELECT * FROM employees WHERE employee_id = 1; — confirm you're targeting the right rows, THEN run UPDATE.\n\nYou can also do calculated updates: UPDATE employees SET salary = salary * 1.10 WHERE department = 'Engineering'; — give all Engineering employees a 10% raise. Or use subqueries: UPDATE employees SET is_active = FALSE WHERE hire_date < '2020-01-01' AND department = 'Legacy'; Always run in a transaction for critical updates — if something goes wrong, you can ROLLBACK before the changes are permanent.",
    funFact:
      "In 2020, a developer at a UK company accidentally ran UPDATE without a WHERE clause on their production customer database, setting every customer's account balance to the same wrong value. The company had to restore from a backup taken 6 hours earlier, losing millions of transactions. Always test UPDATE on dev first.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya runs: UPDATE employees SET salary = 90000. No WHERE clause. What happens?",
      options: [
        "Only employees with salary = 90000 are affected",
        "MySQL throws a syntax error because WHERE is required",
        "Every row in the employees table gets salary updated to 90000",
        "The query runs but affects 0 rows as a safety measure",
      ],
      correctAnswer:
        "Every row in the employees table gets salary updated to 90000",
      explanation:
        "UPDATE without WHERE affects ALL rows in the table. This is one of the most dangerous mistakes in SQL. Always verify your WHERE clause with a SELECT first, and always use transactions for critical updates.",
    },
  },
  {
    title: "DELETE: Removing Records Safely",
    content:
      "TechCorp needs to remove former employees from the system. Priya is about to run DELETE when Arjun stops her again: \"Same rule as UPDATE — no WHERE clause means you delete everything. Also, do we really want to delete them, or should we just mark them inactive?\" This moment teaches Priya the difference between hard delete and soft delete — a distinction that separates junior and senior developers.\n\nHard DELETE: DELETE FROM employees WHERE employee_id = 5; — permanently removes the row. It's gone. No undo (unless you use a transaction). Soft DELETE: instead of deleting, update a flag: UPDATE employees SET is_active = FALSE WHERE employee_id = 5; — the data stays but is hidden from normal queries. Most enterprise systems use soft delete so you can audit who was deleted and when, restore records if deleted by mistake, and comply with data regulations.\n\nIf you absolutely need to empty a whole table (for testing), use TRUNCATE TABLE employees; instead of DELETE FROM employees; — TRUNCATE is faster because it doesn't log each row deletion. But TRUNCATE also resets AUTO_INCREMENT counters, so use it only in development. DROP TABLE employees; deletes the entire table structure — that's nuclear. Only do that when you want the table completely gone.",
    funFact:
      "GDPR (General Data Protection Regulation) in Europe requires companies to permanently delete a user's personal data upon request — the 'Right to Erasure'. This forced many companies to redesign their databases from soft-delete to actual hard-delete for certain data types. Airbnb, Netflix, and Spotify all had to implement special deletion pipelines for GDPR compliance.",
    xpReward: 70,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's legal team says they need to keep all employee records for 7 years for compliance, but inactive employees shouldn't appear in normal queries. What's the best approach?",
      options: [
        "DELETE the employee record immediately after they leave",
        "Move the record to a separate backup file",
        "Use soft delete — set is_active = FALSE instead of deleting",
        "TRUNCATE the employees table and re-insert active ones",
      ],
      correctAnswer:
        "Use soft delete — set is_active = FALSE instead of deleting",
      explanation:
        "Soft delete preserves data for compliance/audit while hiding inactive records from normal queries. You can add WHERE is_active = TRUE to all regular queries. This satisfies legal retention requirements while keeping the UI clean.",
    },
  },
  {
    title: "Aggregate Functions: COUNT, SUM, AVG, MIN, MAX",
    content:
      "Sneha asks Priya for a quick summary: How many employees do we have? What's the average salary? Who earns the most and who earns the least? What's the total salary bill per month? Priya answers all five questions with one SQL query using aggregate functions — Sneha asks her to present this to the CEO tomorrow.\n\nAggregate functions summarize multiple rows into a single value. COUNT(*) counts rows: SELECT COUNT(*) AS total_employees FROM employees; SUM(salary) totals a column: SELECT SUM(salary) AS monthly_payroll FROM employees WHERE is_active = TRUE; AVG(salary) finds the average: SELECT AVG(salary) AS avg_salary FROM employees; MIN(salary) and MAX(salary) find extremes: SELECT MIN(salary), MAX(salary) FROM employees;\n\nThe difference between COUNT(*) and COUNT(column_name): COUNT(*) counts every row including nulls. COUNT(email) counts only rows where email is NOT NULL. This matters when checking for missing data: SELECT COUNT(*) - COUNT(phone_number) AS employees_missing_phone FROM employees; — this shows how many employees haven't provided their phone number. Priya uses this to generate a data quality report that impresses the entire management team.",
    funFact:
      "Amazon calculates the average customer review rating (like 4.3 out of 5 stars) using AVG() on billions of ratings in real-time. Their recommendation engine runs hundreds of aggregate queries per second to keep product rankings fresh as new reviews come in.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to find the average salary of ACTIVE employees only. Which query is correct?",
      options: [
        "SELECT AVERAGE(salary) FROM employees;",
        "SELECT AVG(salary) FROM employees WHERE is_active = TRUE;",
        "SELECT AVG(*) FROM employees WHERE is_active;",
        "SELECT SUM(salary)/COUNT(salary) FROM employees.active;",
      ],
      correctAnswer:
        "SELECT AVG(salary) FROM employees WHERE is_active = TRUE;",
      explanation:
        "AVG() is the correct function name (not AVERAGE). Adding WHERE is_active = TRUE filters to only active employees before calculating the average. The WHERE clause always filters rows before aggregate functions process them.",
    },
  },
  {
    title: "GROUP BY: Summarizing Your Data",
    content:
      "Sneha now wants the total salary bill broken down by department. Priya can't just use SUM — she needs SUM per group. This is what GROUP BY does: it splits rows into buckets and runs aggregate functions on each bucket. When Priya shows the grouped salary breakdown by department, Arjun calls it \"the most useful query in any business analyst's toolkit.\"\n\nGROUP BY syntax: SELECT department, COUNT(*) AS headcount, AVG(salary) AS avg_salary, SUM(salary) AS total_salary FROM employees GROUP BY department; The GROUP BY column must appear in SELECT. Every non-aggregated column in SELECT must be in GROUP BY — this is a fundamental SQL rule. The result has one row per unique department.\n\nYou can group by multiple columns: SELECT department, is_active, COUNT(*) FROM employees GROUP BY department, is_active; — this breaks down headcount by department AND by active/inactive status. Common mistake Priya made: SELECT department, first_name, COUNT(*) FROM employees GROUP BY department; — including first_name in SELECT without grouping by it causes an error or meaningless results. Rule: if it's not in GROUP BY, it must be inside an aggregate function.",
    funFact:
      "Google Analytics uses GROUP BY equivalent operations to aggregate your website's page views by day, hour, country, and device type. A single day's analytics for a popular website might GROUP BY across billions of event rows to produce the summary charts you see in your dashboard.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya runs: SELECT department, first_name, COUNT(*) FROM employees GROUP BY department. What's wrong?",
      options: [
        "COUNT(*) doesn't work with GROUP BY",
        "first_name must be in GROUP BY or inside an aggregate function",
        "The query is correct — it groups by department",
        "department must be listed last in SELECT",
      ],
      correctAnswer:
        "first_name must be in GROUP BY or inside an aggregate function",
      explanation:
        "In SQL's strict mode (MySQL 5.7+), every column in SELECT must either be in GROUP BY or wrapped in an aggregate function. first_name is neither, so MySQL doesn't know which employee's name to show for each department group — it's ambiguous.",
    },
  },
  {
    title: "HAVING: Filtering Grouped Results",
    content:
      "After GROUP BY gives Priya the department breakdown, Sneha says, \"I only want to see departments with more than 5 employees.\" Priya tries to add WHERE COUNT(*) > 5 and gets an error. Arjun explains: WHERE runs before groups are formed. To filter groups after GROUP BY, you need HAVING — WHERE's post-aggregation cousin.\n\nHAVING filters groups after GROUP BY creates them. Syntax: SELECT department, COUNT(*) AS headcount FROM employees GROUP BY department HAVING COUNT(*) > 5; — shows only departments with more than 5 employees. You can use any aggregate function in HAVING: HAVING AVG(salary) > 70000; shows departments where average salary exceeds 70K.\n\nWHERE vs HAVING — know the execution order. SQL processes in this order: FROM (get the table) → WHERE (filter rows) → GROUP BY (form groups) → HAVING (filter groups) → SELECT (choose columns) → ORDER BY (sort). This order explains why you can't use WHERE on aggregates — the aggregates don't exist yet when WHERE runs. Combine both: WHERE is_active = TRUE (filter active employees first), GROUP BY department, HAVING COUNT(*) > 3; (then show only departments with 3+ active employees).",
    funFact:
      "Understanding SQL execution order (FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY) is one of the most common SQL interview questions at MNCs like TCS, Infosys, Wipro, and Accenture. Many candidates fail because they think SELECT runs first — it actually runs second-to-last.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why can't you use WHERE AVG(salary) > 70000 to filter departments by average salary?",
      options: [
        "WHERE doesn't support AVG function",
        "WHERE runs before GROUP BY, so aggregates don't exist yet when WHERE is evaluated",
        "AVG can only be used in SELECT clause",
        "WHERE only works with single column comparisons",
      ],
      correctAnswer:
        "WHERE runs before GROUP BY, so aggregates don't exist yet when WHERE is evaluated",
      explanation:
        "SQL execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. WHERE evaluates before groups are formed, so there's no AVG yet to compare. Use HAVING AVG(salary) > 70000 to filter after groups are formed.",
    },
  },
  {
    title: "INNER JOIN: Combining Tables",
    content:
      "TechCorp has grown. Now there's a separate departments table and an employees table. Priya needs to show each employee's name alongside their department's full name and location. The data lives in two tables — JOIN is how you combine them. This is relational database superpower number one.\n\nThe departments table: CREATE TABLE departments (dept_id INT PRIMARY KEY, dept_name VARCHAR(100), location VARCHAR(100)); Employees have a dept_id column referencing departments. INNER JOIN returns rows where the join condition matches in BOTH tables: SELECT e.first_name, e.salary, d.dept_name, d.location FROM employees e INNER JOIN departments d ON e.dept_id = d.dept_id; The e and d are table aliases — shorter names for writing queries faster.\n\nThe ON clause specifies how tables connect — usually a foreign key matching a primary key. Employees with no matching dept_id are excluded from INNER JOIN results (that's the INNER behavior). You can join more than two tables: add another JOIN clause. Priya joins employees to departments to projects in one query: FROM employees e JOIN departments d ON e.dept_id = d.dept_id JOIN projects p ON e.employee_id = p.lead_employee_id; In most MNC reporting queries, you'll see 4-6 table JOINs.",
    funFact:
      "LinkedIn's people search that suggests 'People also viewed' or 'You might know' runs hundreds of JOIN operations across tables of 900+ million user profiles, connections, companies, and job histories — all returning in under 100 milliseconds through clever indexing and distributed database architecture.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Employees table has 100 rows. Departments table has 10 rows. Employee with dept_id = NULL has no matching department. How many rows does INNER JOIN return?",
      options: [
        "100 rows — all employees",
        "110 rows — all rows combined",
        "Only rows where dept_id matches in both tables — employees with NULL dept_id are excluded",
        "10 rows — one per department",
      ],
      correctAnswer:
        "Only rows where dept_id matches in both tables — employees with NULL dept_id are excluded",
      explanation:
        "INNER JOIN only returns rows where the ON condition is TRUE in both tables. Employees with no matching dept_id (NULL or unmatched) are silently excluded. If you need to keep all employees regardless, use LEFT JOIN.",
    },
  },
  {
    title: "LEFT and RIGHT JOIN: Including Unmatched Rows",
    content:
      "Priya runs an INNER JOIN to list employees and their departments. Then Sneha asks, \"Are there any employees who haven't been assigned to a department yet?\" INNER JOIN wouldn't show them — they'd be silently excluded. Priya needs LEFT JOIN to see ALL employees, including those without a department match.\n\nLEFT JOIN returns all rows from the LEFT (first) table, plus matching rows from the right table. Where there's no match, right table columns show NULL: SELECT e.first_name, d.dept_name FROM employees e LEFT JOIN departments d ON e.dept_id = d.dept_id; — employees with no department show NULL in dept_name. Filter specifically for unmatched rows: add WHERE d.dept_id IS NULL; — finds all employees missing a department assignment.\n\nRIGHT JOIN is the mirror: all rows from the RIGHT (second) table plus matching lefts. It's rarely used in practice because you can always rewrite a RIGHT JOIN as a LEFT JOIN by swapping table order. More useful: LEFT JOIN departments to find departments with NO employees: SELECT d.dept_name FROM departments d LEFT JOIN employees e ON d.dept_id = e.dept_id WHERE e.employee_id IS NULL; — Priya uses this to identify ghost departments in TechCorp's org chart that were never staffed.",
    funFact:
      "Most business intelligence reports use LEFT JOIN extensively to preserve completeness of the main entity (customers, products, orders). A sales report using INNER JOIN would accidentally hide products with zero sales — making the zero-revenue products invisible. LEFT JOIN with NULL checks reveals the full picture.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya needs to find all departments that currently have zero employees assigned. Which query achieves this?",
      options: [
        "SELECT d.dept_name FROM departments d INNER JOIN employees e ON d.dept_id = e.dept_id WHERE e.employee_id = 0;",
        "SELECT d.dept_name FROM departments d LEFT JOIN employees e ON d.dept_id = e.dept_id WHERE e.employee_id IS NULL;",
        "SELECT d.dept_name FROM departments d WHERE COUNT(employees) = 0;",
        "SELECT * FROM departments WHERE dept_id NOT IN employees;",
      ],
      correctAnswer:
        "SELECT d.dept_name FROM departments d LEFT JOIN employees e ON d.dept_id = e.dept_id WHERE e.employee_id IS NULL;",
      explanation:
        "LEFT JOIN keeps all departments. WHERE e.employee_id IS NULL filters to only departments with no matching employees. This pattern (LEFT JOIN + WHERE right_table.key IS NULL) is the standard way to find unmatched rows.",
    },
  },
  {
    title: "Subqueries: Queries Within Queries",
    content:
      "Priya faces a complex request: \"Find all employees earning above the company average salary.\" She can't just write WHERE salary > AVG(salary) — WHERE runs before aggregates. The solution is a subquery: run one query inside another. It's like asking a helper to calculate the average first, then using that number in the main query.\n\nA subquery is a SELECT statement nested inside another SQL statement. In WHERE clause: SELECT first_name, salary FROM employees WHERE salary > (SELECT AVG(salary) FROM employees); — the inner query calculates the average, the outer query uses that result. In SELECT clause (scalar subquery): SELECT first_name, salary, (SELECT AVG(salary) FROM employees) AS company_avg FROM employees; — adds the company average as a column on every row for comparison.\n\nCorrelated subquery — the inner query references the outer query: SELECT first_name, dept_id FROM employees e WHERE salary = (SELECT MAX(salary) FROM employees WHERE dept_id = e.dept_id); — finds the highest earner in each department. The inner query runs once for each row of the outer query using that row's dept_id. Correlated subqueries are powerful but can be slow on large tables — often better to rewrite using JOINs or window functions. Priya uses subqueries to find TechCorp employees who earn more than their department average — a query Arjun says \"most juniors can't even attempt.\"",
    funFact:
      "SQL subqueries were inspired by mathematical set theory — the concept of sets within sets. Edgar Codd, SQL's inventor, had a PhD in mathematics, which is why SQL reads almost like mathematical notation when written clearly.",
    xpReward: 90,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Complete the query to find employees earning more than the average salary: SELECT first_name FROM employees WHERE salary > (SELECT ________ FROM employees);",
      correctAnswer: "AVG(salary)",
      explanation:
        "The subquery (SELECT AVG(salary) FROM employees) calculates the company-wide average salary. The outer query then compares each employee's salary to that average. The subquery executes first, returning a single value that WHERE then uses for comparison.",
    },
  },
  {
    title: "Indexes: Making Queries Faster",
    content:
      "TechCorp's employee database has grown to 500,000 rows. Priya runs a SELECT query filtering by department and it takes 8 seconds. The CEO is waiting. Arjun looks at the query and says one word: \"Index.\" He adds one index, runs the query again — it returns in 0.02 seconds. Priya's mind is blown. This is the single biggest performance lever in SQL.\n\nAn index is a separate data structure (usually a B-Tree) that MySQL maintains alongside your table to speed up lookups. Without an index on department, MySQL reads every single row (full table scan) to find matching departments. With an index, MySQL jumps directly to matching rows. Create one: CREATE INDEX idx_department ON employees(department); For primary keys, MySQL creates an index automatically — that's why searching by employee_id is always fast.\n\nIndexes have tradeoffs: they speed up SELECT queries but slow down INSERT/UPDATE/DELETE because MySQL must update the index too. Don't index every column — only columns used frequently in WHERE, JOIN ON, and ORDER BY. Composite indexes cover multiple columns: CREATE INDEX idx_dept_salary ON employees(department, salary); — useful for queries filtering on both department and salary. To see if MySQL uses your index, run: EXPLAIN SELECT * FROM employees WHERE department = 'Engineering'; and check the key column in the output.",
    funFact:
      "A Google engineer once said that without indexes, Google Search would take 300 years to find a search result by scanning every webpage. Indexes are why Google returns results in 0.5 seconds across 50 billion indexed pages — the same B-Tree concept your MySQL database uses.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp's employees table has 1 million rows. Queries filtering by email run very slowly. What's the fastest solution?",
      options: [
        "Increase the server's RAM",
        "Split the table into smaller tables",
        "Create an index on the email column",
        "Add WHERE LIMIT 100 to all queries",
      ],
      correctAnswer: "Create an index on the email column",
      explanation:
        "CREATE INDEX idx_email ON employees(email) allows MySQL to find email matches without scanning all 1 million rows. For a column with unique values like email, an index reduces lookup time from O(n) to O(log n) — dramatically faster at scale.",
    },
  },
  {
    title: "Views: Saved Queries as Virtual Tables",
    content:
      "Sneha's HR team runs the same complex JOIN query 20 times a day to see active employee details with department names. Every time, they copy-paste 15 lines of SQL. Priya creates a VIEW — a saved query with a name. Now Sneha's team runs SELECT * FROM active_employee_details; and gets the same complex result. Priya just saved the HR team 45 minutes of copy-pasting per day.\n\nA VIEW is a named, stored SQL query that acts like a virtual table. Create one: CREATE VIEW active_employee_details AS SELECT e.employee_id, e.first_name, e.last_name, e.salary, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE e.is_active = TRUE; Now query it: SELECT * FROM active_employee_details WHERE salary > 80000; Views don't store data — each time you query a view, MySQL runs the underlying SELECT. Changes to base tables reflect immediately in the view.\n\nViews serve two key enterprise purposes: Simplicity — hide complex JOINs and filters behind simple names. Security — grant users access to a view without exposing the full table. Sneha can query active_employee_details without ever seeing the raw employees table (which might contain sensitive data). Updatable views allow INSERT/UPDATE through the view in some cases, but generally treat views as read-only. Drop a view: DROP VIEW active_employee_details;",
    funFact:
      "Banking applications make extensive use of views for security. A bank teller can access a 'customer_account_summary' view that shows balance and account type but never the underlying tables containing SSNs, full transaction history, or internal risk scores. Views are a fundamental tool for data access control.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya creates a VIEW. A new employee is inserted into the employees table. Does the view automatically reflect this new employee?",
      options: [
        "No — views are snapshots taken at creation time",
        "Yes — views run the underlying query fresh each time they are queried",
        "Only if you run REFRESH VIEW command",
        "Only if the view was created with the LIVE option",
      ],
      correctAnswer:
        "Yes — views run the underlying query fresh each time they are queried",
      explanation:
        "Views are virtual — they store the query definition, not data. Every time you SELECT from a view, MySQL executes the underlying query against the current data in the base tables. New rows inserted after view creation are immediately visible when querying the view.",
    },
  },
  {
    title: "Stored Procedures: Reusable SQL Logic",
    content:
      "Arjun asks Priya to write a script that gives annual performance bonuses to employees: 15% bonus for Engineering, 10% for all other departments. This logic needs to run every December. Rather than running the same multi-step SQL manually each time, Priya creates a stored procedure — a named, saved block of SQL logic she can call with one command.\n\nCreate a stored procedure:\nDELIMITER //\nCREATE PROCEDURE give_annual_bonus()\nBEGIN\n  UPDATE employees SET salary = salary * 1.15 WHERE department = 'Engineering' AND is_active = TRUE;\n  UPDATE employees SET salary = salary * 1.10 WHERE department != 'Engineering' AND is_active = TRUE;\nEND //\nDELIMITER ;\n\nCall it anytime: CALL give_annual_bonus(); DELIMITER changes the statement terminator because the procedure body contains semicolons.\n\nStored procedures can accept parameters: CREATE PROCEDURE get_dept_employees(IN dept_name VARCHAR(50)) BEGIN SELECT * FROM employees WHERE department = dept_name; END; Call with: CALL get_dept_employees('Engineering'); They can also have OUT parameters to return values. Stored procedures live inside the database server — they run faster than sending individual SQL statements from application code because they avoid network round-trips.",
    funFact:
      "Oracle Database, used by 77% of the Fortune 500, is famous for its stored procedure ecosystem. Many large banks have stored procedures written in Oracle PL/SQL that are over 20 years old — they've been running the same code since before most IT freshers were born, processing millions of transactions daily.",
    xpReward: 85,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To execute a stored procedure named 'give_annual_bonus', you use the command: ________ give_annual_bonus();",
      correctAnswer: "CALL",
      explanation:
        "Stored procedures are invoked using CALL procedure_name(). This executes the entire block of SQL logic stored inside the procedure. Unlike functions, procedures are called with CALL, not used in SELECT statements.",
    },
  },
  {
    title: "Triggers: Automatic Database Actions",
    content:
      "TechCorp needs an audit trail: every time an employee's salary changes, log who changed it, when, and what the old and new values were. Priya could add this logging to every application that might update salaries — but that's fragile. Instead, she creates a database trigger that fires automatically whenever salary is updated, no matter which application made the change.\n\nA trigger is a stored procedure that runs automatically in response to a database event (INSERT, UPDATE, DELETE) on a specific table. Create one:\n\nCREATE TABLE salary_audit (audit_id INT AUTO_INCREMENT PRIMARY KEY, employee_id INT, old_salary DECIMAL(10,2), new_salary DECIMAL(10,2), changed_at DATETIME DEFAULT NOW());\n\nThen create the trigger: CREATE TRIGGER log_salary_change AFTER UPDATE ON employees FOR EACH ROW BEGIN IF OLD.salary != NEW.salary THEN INSERT INTO salary_audit(employee_id, old_salary, new_salary) VALUES (NEW.employee_id, OLD.salary, NEW.salary); END IF; END;\n\nOLD refers to row values before the update. NEW refers to row values after. Trigger timing: BEFORE (runs before the operation, can modify NEW values) or AFTER (runs after, good for logging). Triggers are powerful but use sparingly — hidden logic that runs invisibly can make debugging nightmarish. Always document your triggers thoroughly so future developers know they exist.",
    funFact:
      "Banking systems use triggers extensively for fraud detection. When a transaction INSERT triggers, an automatic procedure checks if the amount exceeds recent average spending, if the location is unusual, or if multiple transactions happen within seconds — all without the application code needing to know about fraud rules.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's trigger uses OLD.salary and NEW.salary. When does a trigger have access to both OLD and NEW?",
      options: [
        "Only on INSERT triggers",
        "Only on DELETE triggers",
        "On UPDATE triggers — OLD is the before value, NEW is the after value",
        "Triggers only have access to NEW, never OLD",
      ],
      correctAnswer:
        "On UPDATE triggers — OLD is the before value, NEW is the after value",
      explanation:
        "UPDATE triggers have access to both OLD (row before update) and NEW (row after update). INSERT triggers only have NEW (there's no old value). DELETE triggers only have OLD (there's no new value). This makes UPDATE triggers perfect for change-tracking and audit logs.",
    },
  },
  {
    title: "Transactions: All-or-Nothing Operations",
    content:
      "Priya is implementing a fund transfer feature: deduct 10,000 from Rahul's account and add 10,000 to Sneha's account. She runs the deduction SQL, then her laptop crashes before running the addition. Rahul loses 10,000 that never reaches Sneha. This is exactly why transactions exist — to ensure financial operations are atomic: either both steps complete, or neither does.\n\nTransactions group multiple SQL statements into a single atomic unit. Start a transaction: START TRANSACTION; Run your statements. If all succeed: COMMIT; — changes become permanent. If anything fails: ROLLBACK; — all changes since START TRANSACTION are undone completely. The fund transfer:\nSTART TRANSACTION;\nUPDATE accounts SET balance = balance - 10000 WHERE account_id = 1;\nUPDATE accounts SET balance = balance + 10000 WHERE account_id = 2;\nCOMMIT;\nIf the second UPDATE fails, ROLLBACK reverts the first one too.\n\nTransactions follow ACID properties: Atomicity (all or nothing), Consistency (database stays valid), Isolation (concurrent transactions don't interfere), Durability (committed data persists even after crashes). ACID is the gold standard for financial systems. In application code, transactions are usually managed with try-catch blocks. Every payment you make online — UPI, NEFT, credit card — runs inside a transaction.",
    funFact:
      "On average, the global banking system processes 1.7 billion ACID-compliant transactions per day. Each UPI payment you make in India involves multiple database transactions ensuring money leaves one account and arrives in another atomically, across potentially different bank systems.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya runs START TRANSACTION, then two UPDATE statements. The second UPDATE fails due to an error. What should happen to the first UPDATE?",
      options: [
        "The first UPDATE stays committed since it succeeded",
        "Both updates are rolled back — the database reverts to pre-transaction state",
        "Only the second UPDATE is reversed; first stays",
        "The transaction auto-commits the first UPDATE and ignores the second",
      ],
      correctAnswer:
        "Both updates are rolled back — the database reverts to pre-transaction state",
      explanation:
        "Transactions are atomic — all-or-nothing. When one statement in a transaction fails and you ROLLBACK, every statement since START TRANSACTION is undone. This is Atomicity in ACID. The database returns to exactly the state it was in before the transaction began.",
    },
  },
  {
    title: "Database Normalization: 1NF, 2NF, 3NF",
    content:
      "Priya designs a table with all employee data crammed in: employee_id, name, phone1, phone2, phone3, department_name, department_head, department_budget. Arjun looks at it and shakes his head. \"This violates three normal forms. Let me show you why, and why it'll cause problems.\" Normalization is the process of structuring a database to reduce redundancy and dependency problems — every senior DBA interview asks about this.\n\nFirst Normal Form (1NF): Eliminate repeating groups and ensure each column has atomic (single) values. phone1, phone2, phone3 violates 1NF — create a separate phone_numbers table instead. Each cell should contain one value, not a list.\n\nSecond Normal Form (2NF): 1NF + every non-key attribute must depend on the ENTIRE primary key (applies when you have composite primary keys).\n\nThird Normal Form (3NF): 2NF + no transitive dependencies (non-key columns must depend ONLY on the primary key, not on other non-key columns).\n\nIn Priya's table: department_head and department_budget depend on department_name, not on employee_id. This is a transitive dependency — 3NF violation. Fix: move department data to a separate departments table. Now if the department budget changes, update one row in departments, not every employee row. The principle is: each fact should live in exactly one place.",
    funFact:
      "Edgar Codd introduced normalization theory in 1970 with 1NF. 2NF and 3NF followed shortly after. Boyce-Codd Normal Form (BCNF) was developed by Codd and Raymond Boyce in 1974. There are even 4NF, 5NF, and 6NF — but in practice, most database designs aim for 3NF as the sweet spot between correctness and practical performance.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "An employee table has columns: employee_id, name, dept_name, dept_manager. The dept_manager depends on dept_name, not directly on employee_id. Which normal form does this violate?",
      options: [
        "First Normal Form (1NF) — repeating groups",
        "Second Normal Form (2NF) — partial dependency",
        "Third Normal Form (3NF) — transitive dependency",
        "This is correctly normalized",
      ],
      correctAnswer: "Third Normal Form (3NF) — transitive dependency",
      explanation:
        "3NF requires that every non-key attribute depends directly on the primary key, not on another non-key attribute. Here, dept_manager depends on dept_name (another non-key column), not directly on employee_id. Fix by moving dept_name and dept_manager to a separate departments table.",
    },
  },
  {
    title: "ER Diagrams: Planning Your Database",
    content:
      "Before writing a single line of SQL, experienced DBAs draw Entity-Relationship (ER) diagrams. When Priya is asked to design TechCorp's new project management database from scratch, Arjun hands her a whiteboard marker and says, \"Draw the entities and relationships first. Coding before modeling is building without blueprints.\" Thirty minutes of ER diagramming saves three weeks of schema redesign later.\n\nAn Entity is a real-world object: Employee, Department, Project, Client. Each entity becomes a table. An Attribute is a property of an entity: Employee has name, salary, hire_date — these become columns. A Relationship shows how entities connect: Employee WORKS IN Department (many employees in one department). Relationships have cardinality: One-to-One (each employee has one profile), One-to-Many (one department has many employees), Many-to-Many (employees work on many projects, projects have many employees).\n\nMany-to-Many relationships need a junction table. Employee to Project becomes: employees table + projects table + employee_projects junction table (employee_id, project_id, role, start_date). ER diagrams use standard notation: rectangles for entities, ovals for attributes, diamonds for relationships, lines with crow's foot notation for cardinality. Tools like draw.io, Lucidchart, or MySQL Workbench's EER diagram feature help you draw these. Always draw ER before coding — you'll catch design flaws on paper that would be expensive to fix in production.",
    funFact:
      "Peter Chen invented ER diagrams in 1976 in a paper that has been cited over 10,000 times — making it one of the most cited computer science papers ever. Before Chen's paper, there was no standard way to visually communicate database design. His notation is now used in every database textbook and MNC design review worldwide.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "TechCorp has Employees and Projects — one employee can work on multiple projects, and one project can have multiple employees. What type of relationship is this?",
      options: ["One-to-One", "One-to-Many", "Many-to-Many", "Zero-to-Many"],
      correctAnswer: "Many-to-Many",
      explanation:
        "Many-to-Many means both sides can have multiple matching records. This requires a junction/bridge table (e.g., employee_projects with employee_id and project_id) to represent the relationship in a relational database, since a single column can't store multiple values.",
    },
  },
  {
    title: "Foreign Keys and Referential Integrity",
    content:
      "Priya inserts an employee with dept_id = 999, but there's no department with ID 999. Now the database has orphaned data — an employee pointing to a non-existent department. Queries that JOIN employees to departments produce wrong results silently. Arjun shows her how FOREIGN KEY constraints prevent this at the database level: the database physically refuses to create inconsistent data.\n\nA foreign key is a column that references the primary key of another table. Define it during table creation: CREATE TABLE employees (employee_id INT PRIMARY KEY, dept_id INT, FOREIGN KEY (dept_id) REFERENCES departments(dept_id)); Now MySQL enforces referential integrity: you CANNOT insert an employee with a dept_id that doesn't exist in departments. You CANNOT delete a department that still has employees (unless you handle cascading).\n\nCascade options control what happens when a referenced record changes. ON DELETE CASCADE: if a department is deleted, all its employees are automatically deleted too. ON DELETE SET NULL: if a department is deleted, employees' dept_id is set to NULL (they become unassigned). ON UPDATE CASCADE: if a department's primary key changes, all referencing employee rows update automatically. Choose carefully: CASCADE deletes can be dangerous — deleting one parent record might cascade-delete hundreds of child records. Most enterprise systems use SET NULL or RESTRICT (the default, which prevents deletion of referenced records).",
    funFact:
      "Referential integrity violations are one of the top causes of data quality issues in enterprise databases. A 2022 survey found that 68% of companies have discovered significant orphaned records (rows referencing non-existent parents) in their databases — often because foreign key constraints were disabled during bulk data imports and never re-enabled.",
    xpReward: 85,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya tries: DELETE FROM departments WHERE dept_id = 5. This department has 30 employees. The FK is defined with ON DELETE RESTRICT. What happens?",
      options: [
        "The department and all 30 employees are deleted",
        "Only the department is deleted; employees keep dept_id = 5",
        "MySQL blocks the delete with a foreign key constraint error",
        "Employees' dept_id is set to NULL automatically",
      ],
      correctAnswer:
        "MySQL blocks the delete with a foreign key constraint error",
      explanation:
        "ON DELETE RESTRICT (the default) prevents deleting a parent record that has child records referencing it. MySQL throws ERROR 1451: Cannot delete or update a parent row — a foreign key constraint fails. You must reassign or delete the 30 employees first.",
    },
  },
  {
    title: "Window Functions: Advanced Analytics",
    content:
      "Priya gets a tricky request: show each employee with their salary, their department's average salary, and their rank within their department by salary — all in one query. She tries GROUP BY and fails. She tries subqueries and gets something messy. Arjun says, \"You need window functions — the most powerful feature in modern SQL that separates intermediate from advanced analysts.\" After learning this, Priya becomes the go-to person for complex analytics at TechCorp.\n\nWindow functions perform calculations across a set of related rows without collapsing them (unlike GROUP BY). Syntax: function() OVER (PARTITION BY column ORDER BY column); Examples: SELECT first_name, salary, department, AVG(salary) OVER (PARTITION BY department) AS dept_avg, RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank FROM employees; — this returns every employee row PLUS their department average PLUS their rank within the department.\n\nKey window functions: ROW_NUMBER() — unique sequential number per partition. RANK() — rank with gaps for ties (1,2,2,4). DENSE_RANK() — rank without gaps (1,2,2,3). LAG(salary, 1) — previous row's salary (useful for month-over-month comparison). LEAD(salary, 1) — next row's salary. SUM(salary) OVER (PARTITION BY department ORDER BY hire_date) — running total of salary within department ordered by hire date. Window functions are heavily tested in data analyst and data engineer interviews at Google, Amazon, and all major MNCs.",
    funFact:
      "Window functions were added to the SQL standard in SQL:2003, but Oracle had proprietary equivalents since 1999. They became available in MySQL only in version 8.0 (2018). Companies still running MySQL 5.7 can't use window functions — another reason upgrading your database version matters.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya uses RANK() and two employees have the same salary in a department. They both get rank 3. What rank does the next employee get?",
      options: [
        "4 — RANK always increments by 1",
        "5 — RANK skips numbers after ties (1,2,3,3,5)",
        "3 — all tied employees share the same rank",
        "RANK throws an error when there are ties",
      ],
      correctAnswer: "5 — RANK skips numbers after ties (1,2,3,3,5)",
      explanation:
        "RANK() assigns the same rank to tied rows but skips ranks — if two rows tie for rank 3, the next distinct row gets rank 5 (skipping 4). Use DENSE_RANK() if you want no gaps: tied rows at 3,3 are followed by rank 4.",
    },
  },
  {
    title: "Connecting Python to MySQL with PyMySQL",
    content:
      "Priya has been running SQL manually in MySQL Workbench. Now Arjun says it's time to automate — the analytics pipeline needs to run queries, process results in Python, and generate Excel reports automatically. She installs PyMySQL and writes her first Python script that talks to the database. This is where SQL meets programming — and it unlocks building real applications.\n\nInstall with: pip install pymysql\nConnect: import pymysql; connection = pymysql.connect(host='localhost', user='root', password='your_password', database='techcorp_db', charset='utf8mb4')\nQuery: cursor = connection.cursor(); cursor.execute('SELECT first_name, salary FROM employees WHERE is_active = TRUE'); rows = cursor.fetchall(); for row in rows: print(row[0], row[1]); cursor.close(); connection.close()\n\nAlways use parameterized queries to prevent SQL injection: NEVER write cursor.execute(f'SELECT * FROM employees WHERE dept = {user_input}') — an attacker can inject SQL through user_input. Instead use: cursor.execute('SELECT * FROM employees WHERE department = %s', (user_input,)) — PyMySQL sanitizes the input. Use context managers for safety to automatically close connections even if exceptions occur. For pandas integration: import pandas as pd; df = pd.read_sql('SELECT * FROM employees', connection) — loads query results directly into a DataFrame for analysis.",
    funFact:
      "SQL injection is the #1 web application security vulnerability according to OWASP (Open Web Application Security Project) and has been on their Top 10 list for over 15 years. The 2008 Heartland Payment Systems breach — which exposed 130 million credit card numbers — was carried out via SQL injection. Always use parameterized queries.",
    xpReward: 90,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya writes: cursor.execute(f'SELECT * FROM employees WHERE dept = {user_input}'). What's the security problem?",
      options: [
        "f-strings don't work with SQL",
        "This is SQL injection vulnerability — user_input could contain malicious SQL code",
        "PyMySQL doesn't support f-string queries",
        "There's no problem — this is standard practice",
      ],
      correctAnswer:
        "This is SQL injection vulnerability — user_input could contain malicious SQL code",
      explanation:
        "If user_input is ' OR '1'='1, the query becomes SELECT * FROM employees WHERE dept = '' OR '1'='1' — returning ALL employees. Worse, user_input could include DROP TABLE commands. Always use parameterized queries: cursor.execute('...WHERE dept = %s', (user_input,)).",
    },
  },
  {
    title: "SQL for Data Analysis: Real Business Queries",
    content:
      "Priya's analytics role means writing SQL that answers real business questions, not just textbook queries. Arjun gives her a challenge: \"Find month-over-month growth in new hires, identify the top 3 departments by average salary, and flag any employee earning more than 150% of their department average.\" These are the queries that appear in MNC data analyst interviews and on-the-job tasks daily.\n\nMonth-over-month hires: SELECT DATE_FORMAT(hire_date, '%Y-%m') AS month, COUNT(*) AS new_hires FROM employees GROUP BY month ORDER BY month;\n\nTop 3 departments: SELECT department, AVG(salary) AS avg_salary FROM employees GROUP BY department ORDER BY avg_salary DESC LIMIT 3;\n\nEmployees earning 150%+ of dept avg (window function approach): SELECT first_name, salary, department, dept_avg FROM (SELECT first_name, salary, department, AVG(salary) OVER (PARTITION BY department) AS dept_avg FROM employees) AS subq WHERE salary > dept_avg * 1.5;\n\nDate functions are critical for business analytics: YEAR(hire_date), MONTH(hire_date), DATEDIFF(NOW(), hire_date) to get tenure in days, DATE_ADD(hire_date, INTERVAL 1 YEAR) for annual review dates. String functions: CONCAT(first_name, ' ', last_name), UPPER(email), LENGTH(phone_number). These functions turn raw database data into business insights that executives use for decisions.",
    funFact:
      "Netflix's recommendation engine at its core uses SQL-like analytics to calculate that users who watched Movie A also watched Movie B 73% of the time. Their data scientists write thousands of analytical queries per week across petabytes of viewing history — the same SQL concepts you're learning, just at massive scale.",
    xpReward: 90,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "To extract the year from a hire_date column in MySQL, the correct function is ________(hire_date).",
      correctAnswer: "YEAR",
      explanation:
        "YEAR(date_column) extracts the 4-digit year from a DATE or DATETIME value. Similarly, MONTH() extracts the month number (1-12), DAY() extracts the day, and DATE_FORMAT() formats dates into custom strings like '%Y-%m' for '2024-01'.",
    },
  },
  {
    title: "Query Optimization: EXPLAIN and Performance",
    content:
      "TechCorp's database has grown to 2 million employee records across 15 tables. Some queries now take 30+ seconds. The management team is frustrated. Priya is assigned to optimize performance. Her first tool: EXPLAIN — which shows MySQL's execution plan before running a query, revealing exactly where the bottlenecks are. This is the difference between a junior and a senior analyst.\n\nRun EXPLAIN before any slow query: EXPLAIN SELECT e.first_name, d.dept_name FROM employees e JOIN departments d ON e.dept_id = d.dept_id WHERE e.salary > 80000; The output shows: type column (ALL = full table scan, bad; ref/eq_ref = index used, good), key column (which index MySQL chose, NULL = no index), rows column (estimated rows scanned — lower is better), Extra column (Using filesort / Using temporary = performance warnings). If type = ALL, add an index on the WHERE/JOIN column.\n\nOther optimization techniques: Avoid SELECT * in production. Avoid functions on indexed columns in WHERE — WHERE YEAR(hire_date) = 2024 can't use an index on hire_date. Instead use range: WHERE hire_date BETWEEN '2024-01-01' AND '2024-12-31'. Avoid OR on multiple columns — prefer UNION. Use LIMIT to paginate instead of fetching everything. After optimization, Priya reduces TechCorp's slowest report query from 28 seconds to 0.3 seconds — a 90x speedup that earns her a performance award.",
    funFact:
      "Query optimization is such a specialized skill that dedicated 'Database Performance Engineers' earn among the highest salaries in IT — some consultants charge $500/hour just to analyze EXPLAIN outputs and tune indexes for enterprise databases. Companies like Amazon and Goldman Sachs have entire teams dedicated solely to query optimization.",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya's EXPLAIN output shows type = 'ALL' for a table with 2 million rows. What does this mean and what should she do?",
      options: [
        "ALL means all indexes are being used — this is optimal",
        "ALL means a full table scan — MySQL reads every row. She should add an index on the WHERE/JOIN column",
        "ALL is the best possible result for large tables",
        "ALL means the query returns all columns — she should use SELECT specific columns",
      ],
      correctAnswer:
        "ALL means a full table scan — MySQL reads every row. She should add an index on the WHERE/JOIN column",
      explanation:
        "type = ALL in EXPLAIN means MySQL scans every single row in the table to find matches — the worst case for performance. For a 2-million row table, this is extremely slow. Adding an appropriate index on the column used in WHERE or JOIN ON changes type to 'ref' or 'eq_ref', dramatically improving speed.",
    },
  },
  {
    title: "Database Backup and Restore",
    content:
      "It's 11 PM. TechCorp's database server crashes due to a hardware failure. All employee records, project data, and financial information could be lost. The IT team checks: last backup was taken at 6 PM. They restore from backup and only lose 5 hours of data — bad, but recoverable. If there was no backup? The company could lose years of data. Priya learns that database backup is not optional — it's existential.\n\nMySQL backup using mysqldump (export all data as SQL): mysqldump -u root -p techcorp_db > backup_2024_01_15.sql This creates a .sql file with all CREATE TABLE and INSERT statements to recreate the database. Restore: mysql -u root -p techcorp_db < backup_2024_01_15.sql Backup specific tables: mysqldump -u root -p techcorp_db employees departments > hr_backup.sql Schedule automated backups on Linux with cron: 0 2 * * * mysqldump -u root -p'password' techcorp_db > /backups/backup_$(date +%Y%m%d).sql — runs at 2 AM daily.\n\nBackup strategies: Full backup — complete database copy (slow but complete). Incremental backup — only changes since last backup (faster, smaller). Point-in-time recovery — using binary logs, restore to any specific moment. Test your backups regularly — a backup you've never restored from might be corrupt. The 3-2-1 rule: 3 copies of data, on 2 different media types, 1 copy offsite.",
    funFact:
      "GitLab famously deleted their production database by accident in January 2017 during a maintenance procedure. They had 5 backup systems in place — 4 of them were not working properly. They restored from a 6-hour-old backup and lost 300 GB of data from 5,000 projects. The post-mortem (which they published publicly) became a legendary case study in backup strategy.",
    xpReward: 80,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "The MySQL command-line tool used to export a database as a SQL backup file is called ________.",
      correctAnswer: "mysqldump",
      explanation:
        "mysqldump is MySQL's built-in backup utility. Running mysqldump -u root -p database_name > backup.sql creates a complete SQL script that recreates all tables and data. To restore: mysql -u root -p database_name < backup.sql.",
    },
  },
  {
    title: "Handling NULL Values Correctly",
    content:
      "Priya runs a query to find employees who don't have a manager: WHERE manager_id != 5. She expects to see employees with no manager (NULL manager_id). They're not there. She adds OR manager_id IS NULL and they appear. This is one of SQL's most common beginner traps: NULL is not a value — it's the absence of a value, and it behaves differently in comparisons.\n\nNULL means unknown or missing. Comparing NULL with = or != always returns NULL (unknown), not TRUE or FALSE. So WHERE manager_id = NULL returns nothing. WHERE manager_id != 5 also skips NULLs. The correct way: WHERE manager_id IS NULL or WHERE manager_id IS NOT NULL. This trips up developers in production when they expect rows to appear but NULL rows are silently excluded.\n\nFunctions for handling NULL: COALESCE(manager_id, 0) — returns first non-NULL value (so NULL becomes 0). IFNULL(phone_number, 'Not provided') — replaces NULL with a default. NULLIF(salary, 0) — returns NULL if salary equals 0 (useful to prevent division-by-zero errors). Aggregates and NULL: AVG(salary) ignores NULL rows. COUNT(*) counts NULLs. COUNT(phone_number) ignores NULLs. Use COALESCE liberally in reports to make NULL display as meaningful labels like 'N/A' or '0' rather than blank cells that confuse managers.",
    funFact:
      "C.J. Date, one of the pioneers of relational database theory, argued that NULL is a fundamental design flaw in SQL and should never have been included. He proposed a two-valued logic system instead. NULL has caused so many bugs and confusions in production systems that entire SQL style guides forbid using nullable columns without explicit justification.",
    xpReward: 80,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Priya has employees with phone_number = NULL. She runs: WHERE phone_number != '9999999999'. Are NULL phone_number employees included?",
      options: [
        "Yes — NULL is not equal to any number so they pass the filter",
        "No — NULL comparisons with != return NULL (unknown), which SQL treats as FALSE, excluding those rows",
        "Yes — IS NOT NULL is automatically implied by != comparisons",
        "It depends on the MySQL version",
      ],
      correctAnswer:
        "No — NULL comparisons with != return NULL (unknown), which SQL treats as FALSE, excluding those rows",
      explanation:
        "In SQL, NULL != anything = NULL (unknown). SQL only returns rows where the WHERE condition is TRUE. NULL is not TRUE, so NULL rows are silently excluded. To include NULL rows, explicitly add: WHERE phone_number != '9999999999' OR phone_number IS NULL.",
    },
  },
  {
    title: "SQL in Excel: Power Query and ODBC",
    content:
      "Sneha's HR team loves Excel but needs live data from the MySQL database. Every morning they export CSV files, paste them into Excel, and format reports — a 30-minute manual process. Priya connects Excel directly to MySQL using ODBC (Open Database Connectivity), so the Excel reports auto-refresh with the latest database data at the click of a button. Sneha calls it \"witchcraft.\"\n\nODBC is a standard interface that lets Excel (and other tools) talk to any database. Setup: Install MySQL ODBC Connector (download from MySQL website). In Windows: Control Panel → Administrative Tools → ODBC Data Sources → Add new DSN pointing to your MySQL server. In Excel: Data tab → Get Data → From Other Sources → From ODBC → Select your DSN. Now paste in any SQL query and Excel imports the results as a table that refreshes on demand.\n\nPower Query (Excel's built-in ETL tool) takes it further: transform data, merge tables, filter rows — all using a visual interface or M language (Power Query's formula language). You can combine data from multiple SQL queries with Power Query joins. Once set up, hit Refresh All in Excel and all queries re-run against the live database. This is the foundation of self-service BI — business teams accessing database data directly without waiting for IT to run queries. Most MNC analyst roles expect Excel + ODBC/Power Query proficiency.",
    funFact:
      "Microsoft Power BI — used by over 250,000 organizations worldwide for business intelligence — runs SQL queries behind the scenes using DirectQuery mode to pull data from SQL Server, MySQL, PostgreSQL and other databases. When an executive views a Power BI dashboard, they're seeing the results of SQL queries you or your team wrote, rendered as beautiful charts.",
    xpReward: 75,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Sneha refreshes her Excel report and it shows fresh data from MySQL automatically. What technology is making this connection possible?",
      options: [
        "VBA macros copying from MySQL Workbench",
        "ODBC (Open Database Connectivity) connecting Excel directly to MySQL",
        "Email attachments from the database server",
        "Windows sync folders automatically copying MySQL files",
      ],
      correctAnswer:
        "ODBC (Open Database Connectivity) connecting Excel directly to MySQL",
      explanation:
        "ODBC is the standard protocol allowing applications like Excel to communicate with database engines. The MySQL ODBC Connector provides the bridge. Excel Power Query or Data Connections use ODBC to run SQL queries and import results as refreshable tables.",
    },
  },
  {
    title: "Common SQL Interview Questions",
    content:
      "Priya has an interview at a top MNC next week. She asks Arjun to prep her. Over two hours, he walks her through the 20 SQL questions that appear in almost every data analyst/developer interview. These aren't tricky puzzles — they test whether you understand the fundamentals deeply. Priya answers 17 of 20 correctly and gets the job. Here are the questions every fresher must know.\n\nTop SQL Interview Questions:\n1) Difference between DELETE, TRUNCATE, DROP — DELETE removes specific rows (logged, rollbackable); TRUNCATE removes all rows fast (no WHERE); DROP removes the entire table structure.\n2) What is a self-join? Joining a table to itself: SELECT a.name, b.name as manager FROM employees a JOIN employees b ON a.manager_id = b.employee_id;\n3) Difference between UNION and UNION ALL — UNION removes duplicates; UNION ALL keeps all rows (faster).\n4) What is a correlated subquery? A subquery that references the outer query.\n5) How to find nth highest salary? SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET n-1;\n6) Difference between WHERE and HAVING? WHERE filters rows before grouping; HAVING filters groups after.\n\nMore classics: 7) Find duplicate records: SELECT email, COUNT(*) FROM employees GROUP BY email HAVING COUNT(*) > 1; 8) Find second highest salary: use subquery or DENSE_RANK. 9) What's the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN? 10) What are ACID properties? Atomicity, Consistency, Isolation, Durability. Know these cold — they appear in 90% of MNC SQL interviews.",
    funFact:
      "In a survey of 500 data analyst job interviews at MNCs including TCS, Infosys, Wipro, Cognizant, and Capgemini, 'Find the second highest salary' was asked in 76% of interviews. It's practically a rite of passage. The cleanest answer: SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
    xpReward: 95,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In an interview, they ask: 'What's the difference between UNION and UNION ALL?' What is the correct answer?",
      options: [
        "UNION combines rows; UNION ALL only works with numbers",
        "UNION removes duplicate rows from the combined result; UNION ALL keeps all rows including duplicates",
        "UNION ALL is faster because it scans more tables",
        "There is no difference — both are the same keyword",
      ],
      correctAnswer:
        "UNION removes duplicate rows from the combined result; UNION ALL keeps all rows including duplicates",
      explanation:
        "UNION performs a DISTINCT operation on combined results, removing duplicates. UNION ALL keeps everything including duplicates and is faster because it skips the deduplication step. Use UNION when you need unique results; UNION ALL when performance matters and duplicates are acceptable or impossible.",
    },
  },
  {
    title: "SQL Capstone: Employee Database System Project",
    content:
      "Priya's final challenge: design and build TechCorp's complete Employee Management Database from scratch. This is the project she'll showcase on her resume — and the interviewer at her dream company says, \"Tell me about a database project you've built.\" She walks them through this end-to-end system and gets hired on the spot. Here's the complete project you'll build.\n\nProject Overview — TechCorp Employee Management System: Build a fully normalized database with these tables: departments (dept_id, dept_name, location, budget), employees (employee_id, first_name, last_name, email, phone, salary, dept_id FK, manager_id FK self-ref, hire_date, is_active), projects (project_id, project_name, start_date, end_date, budget, status), employee_projects junction table (employee_id FK, project_id FK, role, hours_allocated), salary_audit trigger log (audit_id, employee_id, old_salary, new_salary, changed_by, changed_at).\n\nRequired deliverables:\n1) Write all CREATE TABLE statements with proper data types, constraints, and foreign keys.\n2) Insert realistic sample data (at least 20 employees, 5 departments, 8 projects).\n3) Create a VIEW called project_summary showing project name, team size, total allocated hours, and average team salary.\n4) Write a stored procedure assign_employee(emp_id, proj_id, role) that assigns an employee to a project.\n5) Create a trigger that logs salary changes to salary_audit.\n6) Write 10 business queries: top earners by department, employees on multiple projects, projects over budget, headcount trend by hire month, and more.\n7) Run EXPLAIN on your slowest query and add the appropriate index. Export as a .sql file and push to GitHub.",
    funFact:
      "The world's most iconic database project is the Northwind database — a sample business database created by Microsoft in the 1990s for teaching SQL. It has customers, orders, products, and employees tables. Millions of SQL tutorials worldwide still use Northwind examples. Your Employee Management System is a modern, fresher-relevant version of this classic teaching database.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "For the capstone project, Priya creates an employee_projects table to link employees and projects. What type of table is this called, and why is it needed?",
      options: [
        "A backup table — for safety in case the main tables are deleted",
        "A junction (bridge) table — required to represent a Many-to-Many relationship between employees and projects",
        "A temporary table — deleted after the query runs",
        "A view table — a cached copy of JOIN results",
      ],
      correctAnswer:
        "A junction (bridge) table — required to represent a Many-to-Many relationship between employees and projects",
      explanation:
        "Many-to-Many relationships can't be represented directly in relational databases. A junction table (employee_projects) holds foreign keys from both sides (employee_id, project_id) plus relationship-specific data like 'role' and 'hours_allocated'. This is a fundamental database design pattern used in virtually every enterprise application.",
    },
  },
];
