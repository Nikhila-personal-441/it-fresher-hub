import { g as createLucideIcon, r as reactExports, u as useSubscription, a as useInternetIdentity, j as jsxRuntimeExports, P as PaywallModal, m as motion, X, d as Button, R as Rocket, Z as Zap, k as CircleCheck, f as Badge, l as Lock } from "./index-DrrDo776.js";
import { u as useCertificates, a as useCertificateQueryClient, C as CertificateCard, b as downloadInternCertificateAsPdf } from "./pdfDownload-6AlDs2fI.js";
import { b as useMarkModuleCompleted } from "./useModules-BqKd_e15.js";
import { A as AnimatePresence } from "./index-UbTf7HyD.js";
import { T as Trophy } from "./trophy-BqwxHwfZ.js";
import { L as Layers, C as CodeXml } from "./layers-6TmZClFN.js";
import { S as Star } from "./star-BFXzwug2.js";
import { C as Clock } from "./clock-DHhhir4a.js";
import "./useMutation-hdUPihXR.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef"
    }
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }]
];
const Github = createLucideIcon("github", __iconNode);
const SAMPLE_PROJECTS = [
  {
    id: "sales-pipeline",
    emoji: "📈",
    title: "Sales Data Pipeline with Python & SQL",
    tagline: "ETL pipeline for daily sales reporting",
    description: "A fresher-built ETL pipeline that extracts sales data from CSV files, transforms it using Python (pandas) to clean, aggregate, and validate records, then loads it into a PostgreSQL database. Power BI connects directly to the database to display three live dashboards: monthly revenue, product mix, and 12-month sales trends.",
    stack: ["Python 3.11", "pandas", "SQLAlchemy", "PostgreSQL", "Power BI"],
    features: [
      "Automated daily pipeline with PostgreSQL as the central data store",
      "Power BI dashboard with 3 charts: monthly revenue, product mix, trends",
      "Data validation: checks for nulls, duplicate records, negative amounts",
      "KPI SQL views for monthly revenue, top products, and customer lifetime value",
      "Processes 50,000+ sales records per run in under 2 minutes"
    ],
    resumeBullet: "Built an automated ETL pipeline processing 50,000+ sales records daily using Python and PostgreSQL, with a Power BI dashboard showing real-time KPIs — reducing manual reporting from 2 hours to 5 minutes.",
    githubMock: "github.com/priya-sharma/sales-data-pipeline",
    difficulty: "Beginner",
    domain: "Data Engineering",
    tasks: [
      {
        title: "Design database schema",
        description: "Map out tables for customers, products, orders, and transactions. Define primary keys, foreign keys, and relationships between tables. Draw an ER diagram using draw.io or dbdiagram.io before writing any SQL. Deliverable: ER diagram saved as PNG in the /docs folder.",
        techStack: ["draw.io", "dbdiagram.io", "PostgreSQL"],
        estimatedTime: "2 hours"
      },
      {
        title: "Set up Python environment",
        description: "Create a virtual environment using python -m venv venv. Install pandas, sqlalchemy, psycopg2-binary, and python-dotenv. Configure a .env file for database credentials. Add .env and __pycache__/ to .gitignore so secrets never reach GitHub.",
        techStack: ["Python", "pip", "venv", "psycopg2"],
        estimatedTime: "30 min"
      },
      {
        title: "Write CSV extraction script",
        description: "Build a Python script to read raw sales CSV files into pandas DataFrames. Handle encoding issues (UTF-8 vs Latin-1) and missing values gracefully. Log each file's record count and any skipped rows to a run_log.txt for auditability.",
        techStack: ["pandas", "Python"],
        estimatedTime: "3 hours"
      },
      {
        title: "Transform and clean data",
        description: "Use pandas to normalize date formats (all to YYYY-MM-DD), standardize product names (strip whitespace, fix capitalization), and remove exact duplicate rows. Log every transformation step to a transformations.log file so the pipeline is fully auditable.",
        techStack: ["pandas", "NumPy"],
        estimatedTime: "4 hours"
      },
      {
        title: "Load into PostgreSQL",
        description: "Write a SQLAlchemy load script using to_sql() with if_exists='append' for incremental loads. Implement upsert logic using ON CONFLICT DO UPDATE so re-running the pipeline on the same day does not create duplicate records.",
        techStack: ["SQLAlchemy", "PostgreSQL", "psycopg2"],
        estimatedTime: "3 hours"
      },
      {
        title: "Create KPI SQL views",
        description: "Write SQL views for: monthly_revenue (SUM grouped by month), top_products_by_revenue (ranked by total sales), and customer_ltv (lifetime value per customer). Add indexes on date and customer_id columns to keep queries under 500ms.",
        techStack: ["PostgreSQL", "SQL"],
        estimatedTime: "3 hours"
      },
      {
        title: "Build Power BI connection",
        description: "Download Power BI Desktop (free). Use the PostgreSQL connector to connect directly to your database. Import the three KPI views as queries. Configure a daily data refresh schedule so the dashboard stays current automatically.",
        techStack: ["Power BI Desktop", "PostgreSQL connector"],
        estimatedTime: "2 hours"
      },
      {
        title: "Design 3 dashboard charts",
        description: "Build three visuals in Power BI: a clustered bar chart for monthly sales revenue, a pie chart showing product category mix (% of revenue), and a line chart tracking revenue trends over 12 months. Add slicers for region and date range filters.",
        techStack: ["Power BI", "DAX"],
        estimatedTime: "3 hours"
      },
      {
        title: "Write README documentation",
        description: "Document the project in README.md: project overview, architecture diagram (pipeline flow from CSV to PostgreSQL to Power BI), setup steps, environment variable table, and a screenshot of the Power BI dashboard. Include sample SQL queries readers can run.",
        techStack: ["Markdown", "GitHub"],
        estimatedTime: "2 hours"
      },
      {
        title: "Deploy to cloud",
        description: "Push the pipeline code to a public GitHub repository. Provision an AWS RDS PostgreSQL db.t3.micro instance (free-tier eligible). Run the pipeline against the RDS database and confirm the Power BI dashboard connects to the cloud database. Share the live dashboard URL and write a LinkedIn post about what you built.",
        techStack: ["AWS RDS", "GitHub", "LinkedIn"],
        estimatedTime: "3 hours"
      }
    ]
  },
  {
    id: "flask-api",
    emoji: "☁️",
    title: "Cloud-Deployed Flask API with AWS",
    tagline: "REST API deployed to production on EC2",
    description: "A production-ready REST API built with Python Flask that serves a product catalog with full CRUD operations. Deployed on AWS EC2 with an RDS MySQL backend and S3 for image storage. Includes JWT authentication, HTTPS via Nginx, and auto-scaling configuration.",
    stack: ["Python", "Flask", "MySQL (AWS RDS)", "AWS EC2", "Nginx", "JWT"],
    features: [
      "8 REST API endpoints: GET, POST, PUT, DELETE for products and categories",
      "JWT token-based authentication and authorization",
      "HTTPS deployment with SSL certificate via Let's Encrypt",
      "S3 integration for product image upload and retrieval",
      "Serving 200+ daily requests with 99.9% uptime on free tier"
    ],
    resumeBullet: "Deployed a Flask REST API on AWS EC2 with RDS MySQL database, JWT auth, and Nginx reverse proxy serving 200+ daily requests with 99.9% uptime.",
    githubMock: "github.com/arjun-patel/flask-product-api",
    difficulty: "Intermediate",
    domain: "Backend & Cloud",
    tasks: [
      {
        title: "Design REST API endpoints and data models",
        description: "Define all 8 routes (GET /products, POST /products, PUT /products/:id, DELETE /products/:id, POST /auth/login, GET /categories, etc.). Draw a request-response table showing method, URL, auth required, request body, and response shape for each endpoint.",
        techStack: ["Postman", "draw.io"],
        estimatedTime: "2 hours"
      },
      {
        title: "Set up Flask project structure with Blueprints",
        description: "Organize the project into blueprints: auth, products, categories. Use a factory function pattern (create_app) for testability. Configure .env for all secrets and a config.py that loads environment-specific settings.",
        techStack: ["Python", "Flask", "python-dotenv"],
        estimatedTime: "2 hours"
      },
      {
        title: "Implement database models with SQLAlchemy ORM",
        description: "Create SQLAlchemy models for Product, Category, and User. Define relationships, add __repr__ methods for debugging, and write the initial Alembic migration to create the schema on a fresh database.",
        techStack: ["SQLAlchemy", "Alembic", "MySQL"],
        estimatedTime: "3 hours"
      },
      {
        title: "Build CRUD endpoint handlers with input validation",
        description: "Implement all product CRUD endpoints. Validate request data using Marshmallow schemas: required fields, max lengths, and numeric ranges. Return proper HTTP status codes: 201 for creation, 404 for not found, 422 for validation errors.",
        techStack: ["Flask", "Marshmallow"],
        estimatedTime: "5 hours"
      },
      {
        title: "Implement JWT authentication",
        description: "Add a login endpoint that returns a signed JWT on successful authentication. Protect write endpoints (POST, PUT, DELETE) with a decorator that validates the JWT. Tokens expire in 24 hours; include a refresh endpoint.",
        techStack: ["Flask-JWT-Extended", "bcrypt"],
        estimatedTime: "3 hours"
      },
      {
        title: "Dockerize the app",
        description: "Write a Dockerfile that builds a slim Python image, copies requirements and source, and exposes port 5000. Write a docker-compose.yml that starts the Flask app alongside a local PostgreSQL container. Test that docker-compose up --build brings the full stack online in one command.",
        techStack: ["Docker", "docker-compose", "Python"],
        estimatedTime: "3 hours"
      },
      {
        title: "Write unit and integration tests with pytest",
        description: "Achieve 80%+ test coverage: unit tests for business logic and model methods, integration tests that spin up a test database container and exercise each endpoint end-to-end. Mock the S3 client in tests using moto library.",
        techStack: ["pytest", "moto", "Flask test client"],
        estimatedTime: "4 hours"
      },
      {
        title: "Deploy to AWS EC2 with RDS MySQL backend",
        description: "Launch an EC2 t2.micro instance and an RDS db.t3.micro MySQL instance in a private subnet. Configure Security Groups so only the EC2 instance can reach RDS on port 3306. Use Gunicorn as the WSGI server running 4 workers.",
        techStack: ["AWS EC2", "AWS RDS", "Gunicorn", "Linux"],
        estimatedTime: "4 hours"
      },
      {
        title: "Configure Nginx reverse proxy and HTTPS",
        description: "Install Nginx on EC2 to proxy requests to Gunicorn on port 8000. Obtain a free SSL certificate from Let's Encrypt using Certbot and configure auto-renewal with a cron job. Test HTTPS with SSL Labs to achieve at least an A grade.",
        techStack: ["Nginx", "Let's Encrypt", "Certbot"],
        estimatedTime: "2 hours"
      },
      {
        title: "Set up CloudWatch monitoring and alerts",
        description: "Enable CloudWatch monitoring on the EC2 instance. Create alarms for CPU > 80% and 5xx error rate > 1%. Configure SNS to send an email alert when any alarm fires. Screenshot the CloudWatch dashboard for your portfolio.",
        techStack: ["AWS CloudWatch", "AWS SNS"],
        estimatedTime: "2 hours"
      },
      {
        title: "Document with Postman",
        description: "Create a Postman collection with one request per endpoint. Add example request bodies, auth headers, and expected response samples for each request. Export the collection as postman_collection.json and commit it to the repository. Write a README with: architecture diagram, local Docker setup steps, environment variable table, and the live EC2 URL.",
        techStack: ["Postman", "Markdown", "GitHub"],
        estimatedTime: "2 hours"
      }
    ]
  },
  {
    id: "dbt-project",
    emoji: "🔧",
    title: "dbt Data Transformation Project",
    tagline: "15+ SQL models transforming e-commerce data in Snowflake",
    description: "Used dbt Core to transform raw e-commerce data in Snowflake, building a clean analytics layer for a sales dashboard. Covers staging, intermediate, and mart layers with automated tests on every model. Generated dbt docs show full data lineage from raw events to final dashboards.",
    stack: ["dbt Core", "Snowflake", "SQL", "Git", "dbt Cloud"],
    features: [
      "15+ dbt models across staging, intermediate, and mart layers",
      "30+ automated data quality tests (not_null, unique, accepted_values)",
      "Full dbt docs generated with visual lineage graph",
      "Seeds for reference data (product categories, region codes)",
      "Snapshots tracking slowly changing customer addresses over time"
    ],
    resumeBullet: "Built dbt transformation pipeline with 15+ SQL models and 30+ automated data quality tests on Snowflake, enabling sub-second analytics queries on 5M+ records.",
    githubMock: "github.com/sneha-iyer/dbt-ecommerce-transforms",
    difficulty: "Intermediate",
    domain: "Data Engineering",
    tasks: [
      {
        title: "Set up Snowflake trial account and load raw e-commerce data",
        description: "Create a Snowflake 30-day trial, set up a warehouse (XS size), and load three raw tables: raw_orders, raw_customers, and raw_products using the Snowflake web UI's file upload. Confirm row counts match source CSVs.",
        techStack: ["Snowflake", "SQL"],
        estimatedTime: "2 hours"
      },
      {
        title: "Install dbt Core and configure profiles.yml",
        description: "Install dbt-snowflake via pip. Create a profiles.yml with your Snowflake connection details (account, database, schema, warehouse, role). Run dbt debug to confirm the connection is successful before writing any models.",
        techStack: ["dbt Core", "Python", "Snowflake"],
        estimatedTime: "1 hour"
      },
      {
        title: "Build staging models that clean and rename raw columns",
        description: "Create stg_orders.sql, stg_customers.sql, and stg_products.sql in the models/staging/ directory. Each model casts columns to correct types, renames snake_case, and filters out test/cancelled records. Use sources.yml to reference raw tables.",
        techStack: ["dbt", "SQL", "Snowflake"],
        estimatedTime: "3 hours"
      },
      {
        title: "Build intermediate models that join and enrich staged data",
        description: "Create int_orders_with_customers.sql and int_orders_with_products.sql. Each model joins two staging tables and adds business-logic columns (e.g., order_total, days_to_deliver). Use Jinja ref() to reference upstream models.",
        techStack: ["dbt", "SQL", "Jinja"],
        estimatedTime: "4 hours"
      },
      {
        title: "Build mart models for the analytics dashboard",
        description: "Create fct_orders.sql (one row per order with all metrics), dim_customers.sql (customer lifetime value, total orders), and dim_products.sql (top sellers, category rollup). These are the tables the BI tool will query directly.",
        techStack: ["dbt", "SQL"],
        estimatedTime: "4 hours"
      },
      {
        title: "Add 30+ data quality tests with schema.yml",
        description: "Write schema.yml files for all models. Add not_null and unique tests on primary keys, accepted_values test on status columns, and relationships tests to verify foreign key integrity. Run dbt test and fix any failing tests.",
        techStack: ["dbt", "YAML"],
        estimatedTime: "3 hours"
      },
      {
        title: "Create seeds for reference data",
        description: "Add CSV seed files for product_categories.csv and region_codes.csv. Load them with dbt seed and join them in mart models using ref('product_categories'). This demonstrates managing reference/lookup data in dbt.",
        techStack: ["dbt", "CSV"],
        estimatedTime: "1 hour"
      },
      {
        title: "Implement a dbt snapshot for slowly changing dimensions",
        description: "Create a snapshot for customer addresses using the timestamp strategy. Configure unique_key = customer_id and updated_at column. Run dbt snapshot twice with a changed record to verify the historical record is preserved with valid_from and valid_to columns.",
        techStack: ["dbt snapshots", "Snowflake"],
        estimatedTime: "2 hours"
      },
      {
        title: "Generate and publish dbt documentation",
        description: "Add descriptions for every model and column in schema.yml. Run dbt docs generate and dbt docs serve to view the lineage graph in the browser. Screenshot the DAG (Directed Acyclic Graph) — this visual is impressive on a portfolio.",
        techStack: ["dbt docs", "HTML"],
        estimatedTime: "2 hours"
      },
      {
        title: "Deploy dbt project to dbt Cloud and schedule daily runs",
        description: "Create a free dbt Cloud account, connect to the GitHub repository, and configure a job that runs dbt run + dbt test every day at 7 AM. Screenshot the successful job run log for your portfolio and README.",
        techStack: ["dbt Cloud", "GitHub"],
        estimatedTime: "2 hours"
      },
      {
        title: "Write the README and push everything to GitHub",
        description: "The README should explain: what the project does, the data model architecture diagram, how to run locally, dbt commands reference, and a link to the hosted dbt docs site (deployed via GitHub Pages or Netlify). Include screenshots of the lineage graph and a sample query result.",
        techStack: ["GitHub", "Markdown"],
        estimatedTime: "2 hours"
      }
    ]
  },
  {
    id: "portfolio-site",
    emoji: "🌐",
    title: "Personal Tech Portfolio Website",
    tagline: "Fully responsive portfolio hosted on GitHub Pages",
    description: "A polished personal portfolio site showcasing projects, skills, and work experience. Built with HTML, CSS, and vanilla JavaScript — no frameworks needed. Features responsive design, smooth scroll animations, a downloadable resume, and a working contact form. Deployed for free on GitHub Pages with a custom domain.",
    stack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Formspree"],
    features: [
      "Fully responsive — looks great on mobile, tablet, and desktop",
      "Projects section with live demo links and GitHub links for each project",
      "Skills section with animated progress bars",
      "Downloadable resume PDF linked directly from the page",
      "Working contact form via Formspree (no backend required)"
    ],
    resumeBullet: "Developed and deployed a personal tech portfolio website using HTML/CSS/JS on GitHub Pages, showcasing 4 projects with live demos and receiving 300+ profile visits.",
    githubMock: "github.com/rahul-dev/portfolio-website",
    difficulty: "Beginner",
    domain: "Web Development",
    tasks: [
      {
        title: "Plan the site structure and wireframe each section",
        description: "Sketch (paper or Figma free tier) the layout of 5 sections: Hero, About, Projects, Skills, and Contact. Decide on a color palette (2 primary colors + 1 accent), typography, and spacing. Planning before coding saves 50% of refactoring time.",
        techStack: ["Figma (free)", "Paper sketch"],
        estimatedTime: "1 hour"
      },
      {
        title: "Build the HTML semantic structure",
        description: "Create index.html using semantic tags: header, nav, main, section (one per section), article, footer. Every image must have a meaningful alt attribute for accessibility. Validate the HTML at validator.w3.org before adding any CSS.",
        techStack: ["HTML5"],
        estimatedTime: "2 hours"
      },
      {
        title: "Style the layout with CSS Flexbox and Grid",
        description: "Use CSS Grid for the overall page layout and Flexbox for the navigation and project cards row. Define CSS custom properties (variables) for colors and fonts at the :root level. Never use magic numbers — store spacing in variables.",
        techStack: ["CSS3", "Flexbox", "CSS Grid"],
        estimatedTime: "4 hours"
      },
      {
        title: "Make the site fully responsive with media queries",
        description: "Add breakpoints at 768px (tablet) and 480px (mobile). The navigation must collapse into a hamburger menu on mobile. Project cards must stack in a single column on small screens. Test on Chrome DevTools mobile simulator.",
        techStack: ["CSS media queries", "JavaScript"],
        estimatedTime: "3 hours"
      },
      {
        title: "Build the Projects section with 3+ real projects",
        description: "Each project card must show: project name, 2-sentence description, tech stack badges, a GitHub link, and a live demo link. If no live demo exists, deploy it (GitHub Pages, Vercel free tier, or Streamlit Cloud) before adding the card.",
        techStack: ["HTML", "CSS", "JavaScript"],
        estimatedTime: "3 hours"
      },
      {
        title: "Add animated skill progress bars with JavaScript",
        description: "Create a Skills section with bars that animate from 0% to the target value when the section scrolls into the viewport. Use the IntersectionObserver API — this modern JavaScript API is a common interview topic and avoids jQuery dependency.",
        techStack: ["JavaScript", "IntersectionObserver API"],
        estimatedTime: "2 hours"
      },
      {
        title: "Integrate a working contact form using Formspree",
        description: "Sign up at Formspree.io (free plan: 50 submissions/month). Replace your form's action attribute with your Formspree endpoint. Add client-side validation: required fields, email format check, and a success/error message shown after submission.",
        techStack: ["HTML forms", "Formspree", "JavaScript"],
        estimatedTime: "2 hours"
      },
      {
        title: "Add smooth scroll animations and page polish",
        description: "Add scroll-behavior: smooth to the CSS so navbar links scroll smoothly. Add a 'Back to top' button that appears after scrolling 400px. Implement a dark/light mode toggle that saves the preference to localStorage.",
        techStack: ["JavaScript", "CSS animations"],
        estimatedTime: "2 hours"
      },
      {
        title: "Optimize performance: images, SEO, and Open Graph tags",
        description: "Compress all images to under 100KB using TinyPNG. Add meta description, keywords, and Open Graph tags (og:title, og:image) so the site looks good when shared on LinkedIn. Run Google PageSpeed Insights and achieve a score above 85.",
        techStack: ["HTML meta", "TinyPNG", "PageSpeed Insights"],
        estimatedTime: "2 hours"
      },
      {
        title: "Deploy to GitHub Pages and set up a custom domain",
        description: "Enable GitHub Pages from the repository settings (branch: main, folder: root). If you own a domain, add a CNAME record pointing to username.github.io. Add the custom domain in GitHub settings to enable HTTPS. Share the live URL on LinkedIn and your resume.",
        techStack: ["GitHub Pages", "DNS", "HTTPS"],
        estimatedTime: "1 hour"
      }
    ]
  },
  {
    id: "streamlit-glossary",
    emoji: "📊",
    title: "Data Engineering Terms Dashboard",
    tagline: "Searchable glossary app deployed on Streamlit Cloud",
    description: "A Python + Streamlit web app that displays a searchable, filterable glossary of 100+ data engineering terms with real-world examples. Deployed publicly on Streamlit Cloud with a shareable link. Includes a bookmark feature, dark mode, and a category filter. Built in a weekend and accessed by 500+ users organically.",
    stack: ["Python", "Streamlit", "pandas", "Streamlit Cloud"],
    features: [
      "100+ data engineering terms with definitions and real-world examples",
      "Live search filtering as you type",
      "Category filter: ETL, Cloud, AI/ML, DevOps, Corporate",
      "Bookmark terms to a personal favourites list (session state)",
      "Accessed by 500+ users after sharing on LinkedIn"
    ],
    resumeBullet: "Built and deployed a Streamlit data engineering glossary app with 100+ terms, featuring live search and category filters, accessed by 500+ users within 2 weeks of launch.",
    githubMock: "github.com/ananya-reddy/de-glossary-app",
    difficulty: "Beginner",
    domain: "Python & Data Apps",
    tasks: [
      {
        title: "Define the data model: 100+ terms in a structured CSV",
        description: "Create glossary.csv with columns: term, definition, category (ETL/Cloud/AI/DevOps/Corporate), example (real-world usage sentence), and difficulty (Beginner/Intermediate/Advanced). Populate at least 30 terms before building the app.",
        techStack: ["Excel / Google Sheets", "CSV"],
        estimatedTime: "3 hours"
      },
      {
        title: "Set up Python environment and build a bare-bones Streamlit app",
        description: "Create a venv, install streamlit and pandas. Write a minimal app.py that loads the CSV and displays a raw table. Run streamlit run app.py to confirm the dev server starts. This validates the environment before adding features.",
        techStack: ["Python", "Streamlit", "pandas"],
        estimatedTime: "1 hour"
      },
      {
        title: "Add a live search text input with real-time filtering",
        description: "Use st.text_input to capture the user's search query. Filter the DataFrame using str.contains on the term and definition columns (case-insensitive). Display matching results count above the table so users know how many terms match.",
        techStack: ["Streamlit", "pandas"],
        estimatedTime: "1 hour"
      },
      {
        title: "Add category multi-select filter and difficulty badge",
        description: "Use st.multiselect to let users filter by one or more categories. Add a colored badge in each row showing difficulty (green=Beginner, yellow=Intermediate, red=Advanced). Combine search and category filters so both work simultaneously.",
        techStack: ["Streamlit", "pandas", "HTML in Streamlit"],
        estimatedTime: "2 hours"
      },
      {
        title: "Build the term detail card with real-world example",
        description: "When a user clicks a term row (or types an exact match), show a full-width detail card with the definition, category, real-world example sentence, and a 'Related terms' list. Use st.expander for collapsible detail views.",
        techStack: ["Streamlit", "pandas"],
        estimatedTime: "2 hours"
      },
      {
        title: "Implement bookmark feature using Streamlit session_state",
        description: "Add a bookmark icon button next to each term. Use st.session_state to maintain the user's favourites list during the session. Show a 'Bookmarks' tab in the sidebar with all saved terms. This demonstrates stateful UX without a database.",
        techStack: ["Streamlit", "session_state"],
        estimatedTime: "2 hours"
      },
      {
        title: "Add analytics: track and display most-viewed terms",
        description: "Use a JSON file (read/write) to persist view counts per term across sessions. Display a 'Trending this week' sidebar widget showing the top 5 most-viewed terms. This demonstrates lightweight server-side persistence without a full database.",
        techStack: ["Python", "JSON", "Streamlit"],
        estimatedTime: "2 hours"
      },
      {
        title: "Add dark mode toggle and custom CSS theming",
        description: "Use Streamlit's built-in theme config in .streamlit/config.toml to enable a dark theme option. Add custom CSS via st.markdown with unsafe_allow_html to style term cards with a border and subtle background color.",
        techStack: ["Streamlit", "CSS"],
        estimatedTime: "1 hour"
      },
      {
        title: "Write a requirements.txt and deploy to Streamlit Cloud",
        description: "Generate requirements.txt with pip freeze. Push the project to a public GitHub repository. Go to share.streamlit.io, connect your GitHub account, select the repo, and deploy. The app goes live in under 5 minutes — share the URL immediately.",
        techStack: ["Streamlit Cloud", "GitHub"],
        estimatedTime: "1 hour"
      },
      {
        title: "Write the README and share on LinkedIn to get 500+ users",
        description: "Write a README with screenshots, the live app URL, and usage instructions. Post on LinkedIn explaining what you built and why it's useful for data engineering freshers. Tag 3 data engineering influencers. Track user growth using Streamlit Cloud's built-in analytics dashboard.",
        techStack: ["Markdown", "LinkedIn"],
        estimatedTime: "1 hour"
      }
    ]
  }
];
const PROJECT_STEPS = [
  {
    step: 1,
    icon: "📧",
    title: "Create a Professional Email & Identity",
    duration: "30 minutes",
    difficulty: "Easy",
    description: "Your professional email is your digital business card. Every recruiter, company, and tool will use it. Set this up first — it becomes the foundation for every account you create.",
    tasks: [
      "Create a professional Gmail: firstname.lastname@gmail.com (avoid nicknames like coolcoder99@gmail.com)",
      "Set up email signature with: Full Name | Phone | LinkedIn | GitHub URL",
      "Enable Google 2-Factor Authentication for security",
      "Create a LinkedIn profile — add your email, location, and 'Open to Work'",
      "Use this same email for all developer accounts (GitHub, AWS, etc.)"
    ],
    tools: ["Gmail", "LinkedIn", "Google Authenticator"],
    skills: ["Professional Identity", "Digital Security", "Personal Branding"],
    output: "✅ Professional email + LinkedIn profile set up and ready",
    tip: "Recruiters Google your name before calling you. A professional email + LinkedIn profile shows you're serious about your career."
  },
  {
    step: 2,
    icon: "🐙",
    title: "Create Your GitHub Account & First Repository",
    duration: "1 hour",
    difficulty: "Easy",
    description: "GitHub is your professional coding portfolio. Every line of code you write from now on should be here. When recruiters see a well-maintained GitHub with real projects, it replaces the need for a long resume.",
    tasks: [
      "Create account at github.com using your professional email",
      "Add a profile picture, bio (e.g., 'Aspiring Data Engineer | Python | SQL | AWS'), and location",
      "Install Git on your computer from git-scm.com",
      "Run your first Git commands: git config --global user.name and user.email",
      "Create repository 'it-portfolio' with a README.md",
      "Add your first commit: echo '# My IT Portfolio' > README.md && git add . && git commit -m 'Initial commit'",
      "Push to GitHub: git remote add origin [url] && git push -u origin main"
    ],
    tools: ["GitHub", "Git CLI", "VS Code (optional)"],
    skills: ["Version Control", "Git Basics", "Professional Portfolio"],
    output: "✅ GitHub profile live with your first repository and README",
    tip: "A GitHub profile with 10+ commits in different repositories is worth more in an interview than 3 years of theoretical knowledge."
  },
  {
    step: 3,
    icon: "💻",
    title: "Set Up Your Development Environment",
    duration: "2 hours",
    difficulty: "Easy",
    description: "Install the same tools that developers at Google, Amazon, and Microsoft use. Getting comfortable with VS Code is a career skill — you'll use it every single day as a developer.",
    tasks: [
      "Install VS Code from code.visualstudio.com (free, the #1 IDE globally)",
      "Install Python 3.11+ from python.org (check 'Add to PATH' during install)",
      "Install Node.js LTS from nodejs.org (required for many web tools)",
      "Install Git from git-scm.com if not already done",
      "Install VS Code extensions: Python (Microsoft), GitLens, Prettier, Python Debugger",
      "Verify installs: open Terminal and type 'python --version', 'git --version', 'node --version'",
      "Create your first Python script: print('Hello, Corporate World!') and run it",
      "Commit this script to your GitHub repository"
    ],
    tools: [
      "VS Code",
      "Python 3.11+",
      "Node.js",
      "Git",
      "Terminal / Command Prompt"
    ],
    skills: ["IDE Usage", "Dev Environment Setup", "Command Line Basics"],
    output: "✅ Fully working developer environment — Python and Git running on your machine",
    tip: "When you walk into an interview and they ask 'can you set up a dev environment?' — being able to say 'yes, I use VS Code with Python and Git' immediately shows technical credibility."
  },
  {
    step: 4,
    icon: "🗄️",
    title: "Install MySQL & Practice Real SQL",
    duration: "3 hours",
    difficulty: "Medium",
    description: "SQL is the most demanded skill in data jobs. 80% of IT job descriptions mention SQL. By building a real database from scratch, you'll have something to show — and real experience to talk about in interviews.",
    tasks: [
      "Install MySQL Community Server (free) from mysql.com/downloads",
      "Install MySQL Workbench for GUI access (easier than command line to start)",
      "Connect to MySQL: username 'root', set a password during install",
      "Create database: CREATE DATABASE student_tracker;",
      "Create tables: students (id, name, email, phone, enrollment_date), courses (id, name, instructor, credits), enrollments (student_id, course_id, grade, completion_date)",
      "Insert 10+ realistic records into each table",
      "Write 10 SQL queries: SELECT with WHERE, JOIN students+enrollments, GROUP BY with COUNT, ORDER BY grade, HAVING clause, nested subquery",
      "Export your SQL file (File > Export) and push to GitHub as 'database/student_tracker.sql'"
    ],
    tools: [
      "MySQL Community Server",
      "MySQL Workbench",
      "VS Code SQLTools extension"
    ],
    skills: [
      "SQL Queries",
      "Database Design",
      "Data Modeling",
      "CRUD Operations"
    ],
    output: "✅ Working MySQL database with 3 tables, 30+ records, and 10 SQL queries on GitHub",
    tip: "In your resume: 'Designed a relational database with 3 normalized tables, wrote 10+ complex SQL queries including JOINs, GROUP BY, and subqueries.' That's a real bullet point recruiters love."
  },
  {
    step: 5,
    icon: "🐍",
    title: "Build the Python Backend (Flask REST API)",
    duration: "1 week",
    difficulty: "Medium",
    description: "Now the real project begins. You'll build a Student Course Tracker web application using Python Flask. This is a full REST API — the same kind of backend that powers apps like Swiggy, Udemy, and LinkedIn.",
    tasks: [
      "Install Flask: pip install flask flask-cors pymysql python-dotenv",
      "Create project structure: app.py, config.py, routes/students.py, routes/courses.py, .env",
      "Configure .env file with database credentials (NEVER commit this to GitHub — add to .gitignore)",
      "Build REST API endpoints: GET /students, POST /students, GET /students/:id, PUT /students/:id, DELETE /students/:id",
      "Build course enrollment endpoint: POST /enroll (link student to course with grade)",
      "Build analytics endpoint: GET /dashboard (total students, enrolled courses, average grade)",
      "Add input validation: check email format, phone number length, required fields",
      "Write 5 unit tests with pytest: test each API endpoint returns correct status code",
      "Test all endpoints using Postman or curl commands",
      "Commit with meaningful messages: 'feat: add student enrollment API endpoint'"
    ],
    tools: ["Python Flask", "pymysql", "pytest", "Postman", "python-dotenv"],
    skills: [
      "REST API Design",
      "Python Backend",
      "Database Connectivity",
      "Unit Testing",
      "Git Workflow"
    ],
    output: "✅ Working Python Flask REST API with 7+ endpoints, tests passing, and code on GitHub",
    tip: "When an interviewer asks 'have you built APIs?' — you can walk them through your Student Tracker API, explain each endpoint, and show the pytest results. That's a full interview story."
  },
  {
    step: 6,
    icon: "☁️",
    title: "Create AWS Free Tier Account & Deploy to Cloud",
    duration: "3 hours",
    difficulty: "Hard",
    description: "Deploy your application to the cloud — this is the step that separates candidates who 'learned coding' from candidates who 'deployed to production.' AWS Free Tier gives you 12 months of free compute.",
    tasks: [
      "Create AWS account at aws.amazon.com/free (requires credit/debit card for verification — won't be charged on free tier)",
      "Set up IAM user with least-privilege access (never use root account for daily work)",
      "Launch EC2 t2.micro instance: choose Ubuntu 22.04, configure security group to allow ports 22 (SSH) and 5000 (Flask)",
      "Connect via SSH: ssh -i your-key.pem ubuntu@your-ec2-public-ip",
      "On EC2: install Python, pip, Git; clone your GitHub repository",
      "Install dependencies: pip install -r requirements.txt",
      "Install MySQL on EC2 and recreate your database",
      "Run Flask app: python app.py --host=0.0.0.0 (accessible from internet)",
      "Take a screenshot of your API response from the browser — showing your public EC2 IP",
      "Add EC2 public URL to your GitHub README"
    ],
    tools: [
      "AWS Free Tier",
      "EC2 t2.micro",
      "IAM",
      "SSH Terminal",
      "Ubuntu Linux"
    ],
    skills: [
      "Cloud Deployment",
      "Linux Terminal",
      "AWS Console",
      "Security Groups",
      "SSH"
    ],
    output: "✅ Live application on AWS with a public URL — accessible from anywhere in the world",
    tip: "Resume bullet: 'Deployed a Python Flask REST API on AWS EC2 with MySQL database, accessible via public endpoint.' Recruiters at cloud-focused companies will be impressed."
  },
  {
    step: 7,
    icon: "📄",
    title: "Write Your README & Polish Your Profile",
    duration: "2 hours",
    difficulty: "Easy",
    description: "A great README transforms your code from 'just files' into a professional project. Recruiters spend 30 seconds on each GitHub profile — your README is your pitch. Write it like a product page, not a textbook.",
    tasks: [
      "Add these sections to README.md: Project Title, Tech Stack, What it does (2 sentences), Architecture diagram, How to run locally (step-by-step), API endpoints table (method, route, description), Screenshots, Live URL",
      "Add a .gitignore file excluding: .env, __pycache__/, *.pyc, node_modules/",
      "Add requirements.txt: pip freeze > requirements.txt",
      "Pin the 'it-portfolio' repository on your GitHub profile",
      "Update your LinkedIn: add this project to 'Featured' section with a screenshot",
      "Write your resume bullet points (see examples below)"
    ],
    tools: ["Markdown", "GitHub Profile Editor", "LinkedIn"],
    skills: [
      "Technical Documentation",
      "Project Presentation",
      "Personal Branding"
    ],
    output: "✅ Professional README with tech stack, setup instructions, and live URL",
    tip: "Your README is the first thing a recruiter reads. Write it assuming the reader has never heard of Flask or MySQL — explain like you're teaching a friend."
  }
];
const SKILL_COVERAGE = [
  { skill: "Python", icon: "🐍", color: "var(--skill-python)", level: 85 },
  { skill: "SQL", icon: "🗄️", color: "var(--skill-sql)", level: 80 },
  {
    skill: "Git & GitHub",
    icon: "🐙",
    color: "var(--skill-github)",
    level: 90
  },
  { skill: "REST APIs", icon: "🔌", color: "var(--skill-devops)", level: 75 },
  { skill: "Cloud (AWS)", icon: "☁️", color: "var(--skill-cloud)", level: 65 },
  {
    skill: "Linux Terminal",
    icon: "💻",
    color: "var(--skill-networking)",
    level: 60
  },
  { skill: "Documentation", icon: "📝", color: "var(--skill-dsa)", level: 85 },
  { skill: "Unit Testing", icon: "✅", color: "var(--skill-ai)", level: 70 }
];
const RESUME_BULLETS = [
  "Built and deployed a Student Course Tracker REST API using Python Flask and MySQL, hosted on AWS EC2",
  "Designed a 3-table relational database with 10+ SQL queries including JOINs, GROUP BY, and subqueries",
  "Implemented 7 RESTful API endpoints with input validation and pytest unit tests (5 test cases, 100% passing)",
  "Deployed application to AWS EC2 (t2.micro, Ubuntu 22.04) and configured security groups for secure access",
  "Managed codebase using Git with 20+ meaningful commits and documented setup in a professional README"
];
const DIFFICULTY_STYLES = {
  Easy: "badge-difficulty-beginner",
  Medium: "badge-difficulty-intermediate",
  Hard: "badge-difficulty-advanced",
  Beginner: "badge-difficulty-beginner",
  Intermediate: "badge-difficulty-intermediate",
  Advanced: "badge-difficulty-advanced"
};
const DOMAIN_COLORS = {
  "Data Engineering": "#FF694A",
  "Backend & Cloud": "#0078D4",
  "Web Development": "#4CAF50",
  "Python & Data Apps": "#E25A1C"
};
function SampleProjectModal({
  onClose
}) {
  const [activeProject, setActiveProject] = reactExports.useState(SAMPLE_PROJECTS[0].id);
  const project = SAMPLE_PROJECTS.find((p) => p.id === activeProject) ?? SAMPLE_PROJECTS[0];
  const domainColor = DOMAIN_COLORS[project.domain] ?? "#888";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      style: { backgroundColor: "rgba(0,0,0,0.6)" },
      "data-ocid": "sample-projects.dialog",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-5 border-b border-border shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 text-[oklch(var(--capstone-accent))]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-base text-foreground", children: "Sample Projects — Real Fresher Portfolios" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "w-8 h-8 rounded-full flex items-center justify-center bg-muted hover:bg-muted/60 transition-smooth",
              "data-ocid": "sample-projects.close_button",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 text-muted-foreground" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row flex-1 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex sm:flex-col gap-1 p-3 border-b sm:border-b-0 sm:border-r border-border overflow-x-auto sm:overflow-y-auto shrink-0 sm:w-56", children: SAMPLE_PROJECTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveProject(p.id),
              "data-ocid": `sample-projects.tab.${p.id}`,
              className: `flex items-start gap-2 text-left px-3 py-2 rounded-lg text-xs font-medium transition-smooth shrink-0 sm:shrink ${activeProject === p.id ? "bg-[oklch(var(--capstone-accent)/0.12)] text-[oklch(var(--capstone-accent))] border border-[oklch(var(--capstone-accent)/0.3)]" : "text-muted-foreground hover:bg-muted/60 border border-transparent"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base shrink-0", children: p.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-snug", children: p.title })
              ]
            },
            p.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0",
                  style: { backgroundColor: `${domainColor}15` },
                  children: project.emoji
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base text-foreground leading-tight mb-1", children: project.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs px-2 py-0.5 rounded font-medium",
                      style: {
                        backgroundColor: `${domainColor}18`,
                        color: domainColor
                      },
                      children: project.domain
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: DIFFICULTY_STYLES[project.difficulty], children: project.difficulty })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: project.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-3.5 h-3.5", style: { color: domainColor } }),
                "Tech Stack"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: project.stack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "text-xs px-2 py-0.5 rounded-full border font-medium",
                  style: {
                    backgroundColor: `${domainColor}10`,
                    borderColor: `${domainColor}30`,
                    color: domainColor
                  },
                  children: tech
                },
                tech
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-3.5 h-3.5 text-[oklch(var(--capstone-accent))]" }),
                "Key Features"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: project.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-xs text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheck,
                      {
                        className: "w-3.5 h-3.5 shrink-0 mt-0.5",
                        style: { color: domainColor }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: f })
                  ]
                },
                f.slice(0, 30)
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ExternalLink,
                  {
                    className: "w-3.5 h-3.5",
                    style: { color: domainColor }
                  }
                ),
                "Project Tasks (",
                project.tasks.length,
                " detailed steps)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: project.tasks.map((task, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-3 rounded-lg border",
                  style: {
                    backgroundColor: `${domainColor}06`,
                    borderColor: `${domainColor}20`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 mb-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs font-bold shrink-0 w-5 h-5 rounded-full flex items-center justify-center",
                          style: {
                            backgroundColor: `${domainColor}20`,
                            color: domainColor
                          },
                          children: i + 1
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: task.title })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed ml-7", children: task.description }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1 mt-1.5 ml-7", children: [
                      task.techStack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-1.5 py-0.5 rounded",
                          style: {
                            backgroundColor: `${domainColor}12`,
                            color: domainColor
                          },
                          children: t
                        },
                        t
                      )),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground ml-auto flex items-center gap-0.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                        " ",
                        task.estimatedTime
                      ] })
                    ] })
                  ]
                },
                task.title
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "p-3 rounded-lg border",
                style: {
                  backgroundColor: `${domainColor}08`,
                  borderColor: `${domainColor}25`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs font-bold mb-1.5",
                      style: { color: domainColor },
                      children: "💼 Resume bullet you can copy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed italic", children: [
                    '"',
                    project.resumeBullet,
                    '"'
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-2.5 rounded-lg bg-muted/40 border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-4 h-4 text-muted-foreground shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono truncate", children: project.githubMock }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-xs ml-auto shrink-0", children: "Sample" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 border-t border-border flex items-center justify-between shrink-0 bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "💡 These are real project ideas built by freshers like you. Use them as inspiration." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              size: "sm",
              onClick: onClose,
              style: {
                backgroundColor: "oklch(var(--capstone-accent))",
                color: "white"
              },
              "data-ocid": "sample-projects.confirm_button",
              children: "Start Building"
            }
          )
        ] })
      ] })
    }
  );
}
function StepCard({
  step,
  isActive,
  isSubscribed,
  isAdmin,
  isCompleted,
  onMarkComplete,
  onUpgrade,
  onClick
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      className: `course-card border-2 transition-smooth ${isCompleted ? "border-green-500/40 bg-green-500/5" : isActive ? "border-[oklch(var(--capstone-accent)/0.5)] bg-[oklch(var(--capstone-accent)/0.03)]" : "border-border"}`,
      "data-ocid": `capstone-step-${step.step}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "w-full text-left p-5 focus:outline-none",
            onClick,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-10 h-10 rounded-xl flex items-center justify-center text-xl ${isCompleted ? "bg-green-500/15 border-2 border-green-500/40" : isActive ? "bg-[oklch(var(--capstone-accent)/0.15)] border-2 border-[oklch(var(--capstone-accent)/0.4)]" : "bg-muted border border-border"}`,
                  children: isCompleted ? "✅" : step.icon
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-[oklch(var(--capstone-accent))] uppercase tracking-wider", children: [
                    "Step ",
                    step.step
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: DIFFICULTY_STYLES[step.difficulty], children: step.difficulty }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
                    " ",
                    step.duration
                  ] }),
                  isCompleted && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-green-600 flex items-center gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3" }),
                    " Done"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm text-foreground mb-1", children: step.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed line-clamp-2", children: step.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 ml-2", children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-green-500" }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-[oklch(var(--capstone-accent))]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full border-2 border-border" }) })
            ] })
          }
        ),
        isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pb-5 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: step.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `space-y-4 ${!isSubscribed && !isAdmin ? "blur-sm pointer-events-none select-none" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-foreground mb-2 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-[oklch(var(--capstone-accent))]" }),
                      "Tasks to complete"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: step.tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "li",
                      {
                        className: "flex items-start gap-2 text-xs text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 w-1.5 h-1.5 rounded-full bg-[oklch(var(--capstone-accent))] shrink-0 mt-1.5" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: task })
                        ]
                      },
                      task
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-1.5", children: "🛠 Tools Used" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: step.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20",
                          children: t
                        },
                        t
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-1.5", children: "💡 Skills Gained" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: step.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-2 py-0.5 rounded-full bg-[oklch(var(--capstone-accent)/0.08)] text-[oklch(var(--capstone-accent))] border border-[oklch(var(--capstone-accent)/0.2)]",
                          children: s
                        },
                        s
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-[oklch(var(--capstone-accent)/0.06)] border border-[oklch(var(--capstone-accent)/0.2)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-[oklch(var(--capstone-accent))] mb-1", children: "🎯 What you deliver" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: step.output })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 rounded-lg bg-muted/40 border border-border flex gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm shrink-0", children: "💬" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "Interview tip: " }),
                      step.tip
                    ] })
                  ] })
                ]
              }
            ),
            !isSubscribed && !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-lg bg-card/70 backdrop-blur-[2px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 text-center px-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-[oklch(var(--capstone-accent)/0.12)] border border-[oklch(var(--capstone-accent)/0.3)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-5 h-5 text-[oklch(var(--capstone-accent))]" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: "Premium Content" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Upgrade to see tasks, tools, skills & interview tips" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  size: "sm",
                  onClick: (e) => {
                    e.stopPropagation();
                    onUpgrade();
                  },
                  className: "gap-1.5",
                  style: {
                    backgroundColor: "oklch(var(--capstone-accent))",
                    color: "white"
                  },
                  "data-ocid": `capstone-step-upgrade-btn-${step.step}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3.5 h-3.5" }),
                    "Upgrade"
                  ]
                }
              )
            ] })
          ] }),
          (isSubscribed || isAdmin) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                onMarkComplete();
              },
              "data-ocid": `capstone-step-complete-btn-${step.step}`,
              className: `flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-smooth border ${isCompleted ? "bg-green-500/10 text-green-600 border-green-500/30 hover:bg-green-500/20" : "bg-[oklch(var(--capstone-accent)/0.1)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.3)] hover:bg-[oklch(var(--capstone-accent)/0.2)]"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                isCompleted ? "Undo Complete" : "Mark Step Complete"
              ]
            }
          ) })
        ] })
      ]
    }
  );
}
const CAPSTONE_MODULE_ID = "capstone";
function CapstoneProject() {
  const [activeStep, setActiveStep] = reactExports.useState(1);
  const [completedSteps, setCompletedSteps] = reactExports.useState(/* @__PURE__ */ new Set());
  const [showSampleProjects, setShowSampleProjects] = reactExports.useState(false);
  const [paywallOpen, setPaywallOpen] = reactExports.useState(false);
  const [certModalOpen, setCertModalOpen] = reactExports.useState(false);
  const { isSubscribed, isAdmin } = useSubscription();
  const { data: certificates } = useCertificates();
  const invalidateCertificates = useCertificateQueryClient();
  const markCompleted = useMarkModuleCompleted();
  const { identity } = useInternetIdentity();
  const certTriggered = reactExports.useRef(false);
  const capstoneCert = certificates == null ? void 0 : certificates.find(
    (c) => c.courseId === CAPSTONE_MODULE_ID
  );
  const allStepsCompleted = (isSubscribed || isAdmin) && completedSteps.size === PROJECT_STEPS.length;
  reactExports.useEffect(() => {
    if (allStepsCompleted && !certTriggered.current) {
      certTriggered.current = true;
      markCompleted.mutate(CAPSTONE_MODULE_ID);
      invalidateCertificates();
    }
  }, [allStepsCompleted, invalidateCertificates, markCompleted]);
  reactExports.useEffect(() => {
    if (allStepsCompleted && capstoneCert && !certModalOpen) {
      setCertModalOpen(true);
    }
  }, [allStepsCompleted, capstoneCert, certModalOpen]);
  const toggleStepComplete = (stepNum) => {
    if (!isSubscribed && !isAdmin) return;
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepNum)) {
        next.delete(stepNum);
      } else {
        next.add(stepNum);
      }
      return next;
    });
  };
  function handleViewSampleProjects() {
    if (!isSubscribed && !isAdmin) {
      setPaywallOpen(true);
    } else {
      setShowSampleProjects(true);
    }
  }
  const userName = identity ? `${(identity.getPrincipal().toText()[0] ?? "L").toUpperCase()}earner` : "Learner";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PaywallModal, { open: paywallOpen, onOpenChange: setPaywallOpen }),
    showSampleProjects && /* @__PURE__ */ jsxRuntimeExports.jsx(SampleProjectModal, { onClose: () => setShowSampleProjects(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: certModalOpen && capstoneCert && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        "data-ocid": "capstone.cert_modal",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute inset-0 bg-foreground/60 backdrop-blur-sm",
              onClick: () => setCertModalOpen(false)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9, y: 24 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 12 },
              transition: { duration: 0.35, ease: "easeOut" },
              className: "relative z-10 w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setCertModalOpen(false),
                    "data-ocid": "capstone.cert_close_button",
                    className: "absolute top-3 right-3 z-20 p-1.5 rounded-full bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors",
                    "aria-label": "Close",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center pt-8 pb-4 px-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "🎓" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-foreground mb-1", children: "Capstone Complete!" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "You've finished all 7 steps. Here's your Intern Certificate!" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CertificateCard,
                  {
                    certificate: capstoneCert,
                    userName,
                    isIntern: true,
                    onDownload: () => downloadInternCertificateAsPdf(capstoneCert, userName),
                    compact: true
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end gap-2 px-6 py-4 border-t border-border bg-muted/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    size: "sm",
                    "data-ocid": "capstone.cert_download_button",
                    onClick: () => downloadInternCertificateAsPdf(capstoneCert, userName),
                    className: "gap-1.5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-3.5 h-3.5" }),
                      " Download Intern Certificate"
                    ]
                  }
                ) })
              ]
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "w-5 h-5 text-[oklch(var(--capstone-accent))]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-[oklch(var(--capstone-accent))] uppercase tracking-wide", children: "Capstone Project" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-3xl text-foreground mb-3", children: "Build Your IT Portfolio — Impress Recruiters" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground max-w-2xl leading-relaxed mb-5", children: [
        "One project that touches every skill: Python, SQL, Git, Cloud, Testing, and Documentation. By the end, you'll have a",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "live, deployed application" }),
        " ",
        "on your GitHub and resume."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl bg-card border-2 border-[oklch(var(--capstone-accent)/0.3)] mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl", children: "🎓" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-lg text-foreground", children: "Student Course Tracker" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A full-stack web application with Python backend, MySQL database, REST API, and AWS deployment" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          { icon: "⏱", label: "Timeline", value: "2–3 Weeks" },
          { icon: "💰", label: "Cost", value: "₹0 (Free tier)" },
          { icon: "📊", label: "Difficulty", value: "Beginner+" },
          { icon: "🎯", label: "Goal", value: "Resume-ready" }
        ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center p-2.5 rounded-lg bg-[oklch(var(--capstone-accent)/0.06)] border border-[oklch(var(--capstone-accent)/0.15)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl mb-1", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-[oklch(var(--capstone-accent))]", children: item.value })
            ]
          },
          item.label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-muted/30 border border-border mb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-[oklch(var(--capstone-accent))]" }),
          "Skills this project covers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: SKILL_COVERAGE.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-foreground flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: skill.icon }),
              " ",
              skill.skill
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
              skill.level,
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "progress-bar", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "progress-bar-fill",
              style: {
                width: `${skill.level}%`,
                background: `oklch(var(${skill.color}))`
              }
            }
          ) })
        ] }, skill.skill)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "p-4 rounded-xl border-2 border-dashed border-[oklch(var(--capstone-accent)/0.4)] bg-[oklch(var(--capstone-accent)/0.04)] flex items-center gap-4 mb-5",
          "data-ocid": "capstone-sample-banner",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl shrink-0", children: "👀" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Need inspiration? See 5 real sample projects with 10+ tasks each" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Full tech stacks, step-by-step task lists, and copy-paste resume bullets." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleViewSampleProjects,
                className: "shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg transition-smooth",
                style: {
                  backgroundColor: "oklch(var(--capstone-accent)/0.12)",
                  color: "oklch(var(--capstone-accent))",
                  border: "1px solid oklch(var(--capstone-accent)/0.3)"
                },
                "data-ocid": "capstone-sample-preview-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "w-3.5 h-3.5" }),
                  "View Projects"
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-card border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-4 h-4 text-[oklch(var(--capstone-accent))]" }),
          "Full Tech Stack"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
          "Python 3.11",
          "Flask",
          "MySQL",
          "pytest",
          "Git",
          "GitHub",
          "AWS EC2",
          "Ubuntu Linux",
          "REST API",
          "Postman",
          "VS Code"
        ].map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-xs px-2.5 py-1 rounded-full bg-[oklch(var(--capstone-accent)/0.08)] text-[oklch(var(--capstone-accent))] border border-[oklch(var(--capstone-accent)/0.2)]",
            children: tech
          },
          tech
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-xl text-foreground mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-5 h-5 text-[oklch(var(--capstone-accent))]" }),
        "Project Journey — 7 Steps"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
        "Click any step to expand it and see the full task list.",
        (isSubscribed || isAdmin) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[oklch(var(--capstone-accent))] font-semibold", children: "Mark each step complete to earn your Intern Certificate!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: PROJECT_STEPS.map((step) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        StepCard,
        {
          step,
          isActive: activeStep === step.step,
          isSubscribed,
          isAdmin,
          isCompleted: completedSteps.has(step.step),
          onMarkComplete: () => toggleStepComplete(step.step),
          onUpgrade: () => setPaywallOpen(true),
          onClick: () => setActiveStep(activeStep === step.step ? null : step.step)
        },
        step.step
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 rounded-xl bg-card border border-border mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold text-base text-foreground mb-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-[oklch(var(--capstone-accent))]" }),
        "What you'll write on your resume"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-3", children: "These are real bullet points based on what you'll build. Copy and adapt them for your resume." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: RESUME_BULLETS.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-start gap-2 text-sm text-muted-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 w-1.5 h-1.5 rounded-full bg-[oklch(var(--capstone-accent))] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: bullet })
          ]
        },
        bullet.slice(0, 40)
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 p-3 rounded-lg bg-[oklch(var(--capstone-accent)/0.06)] border border-[oklch(var(--capstone-accent)/0.2)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "text-[oklch(var(--capstone-accent))]", children: [
          "🎯 Recruiter perspective:",
          " "
        ] }),
        `"This candidate built and deployed a full-stack application — Python backend, SQL database, unit tests, and cloud deployment. They didn't just learn from YouTube; they actually shipped something. That's rare in freshers."`
      ] }) })
    ] })
  ] });
}
export {
  CapstoneProject as default
};
