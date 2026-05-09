// Capstone Project Lessons — "Build & Deploy Your Personal Tech Portfolio"
// 30 full, actionable lessons guiding freshers from zero to job-ready portfolio
import type { LessonContent } from "@/types";

export const CAPSTONE_LESSONS: LessonContent[] = [
  {
    title: "Welcome to Your Capstone Journey",
    content:
      "<p>Meet Rahul. He just finished all the IT Fresher Hub courses and opened LinkedIn. A recruiter's message is sitting in his inbox: <em>'We noticed your profile. Can you share any projects you've built?'</em> Rahul's heart sinks — he has knowledge, but nothing to <strong>show</strong>. That changes today.</p>" +
      "<p>In this Capstone Project you will build a <strong>Personal Tech Portfolio</strong> — a real, live website that showcases who you are, what you know, and what you can do. By the end you will have: a portfolio website deployed on the internet, a Python backend with a real database, your code hosted on GitHub, a data dashboard, and a project you can walk any recruiter through confidently.</p>" +
      "<p><strong>Your complete tech stack:</strong> Frontend — HTML5, CSS3, JavaScript. Backend — Python 3 + Flask. Database — SQLite. Deployment — Netlify (frontend) + Render.com (backend), both free. Version Control — Git + GitHub. Extras — Chart.js for data visualisation and GitHub Actions for CI/CD. Every single technology here is used in real MNC projects. When a recruiter asks 'what have you built?', you'll open your laptop, click a live link, and walk them through the code on GitHub. Game over — you win the interview.</p>",
    funFact:
      "73% of hiring managers say a live project link on a resume dramatically increases the chance of a callback, even for freshers with zero work experience. Your portfolio is your first product.",
    xpReward: 100,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Rahul wants to impress a recruiter who asks 'What have you built?' What is the BEST response?",
      options: [
        "Describe the courses he completed on Coursera",
        "Open a live portfolio website and walk through the GitHub code",
        "Explain his theoretical knowledge of Python and SQL",
        "Share his college project PDF",
      ],
      correctAnswer:
        "Open a live portfolio website and walk through the GitHub code",
      explanation:
        "Live demos and real code are infinitely more impressive than descriptions. Recruiters see hundreds of resumes — a live link with source code makes you immediately memorable.",
    },
  },

  {
    title: "Setting Up Your Development Environment",
    content:
      "<p>Priya just joined her first internship and her manager said: 'Set up your dev environment and push a hello-world by EOD.' She had no idea what that meant. Today you will — and you'll do it in 30 minutes.</p>" +
      "<p><strong>Step 1 — Install VS Code:</strong> Go to https://code.visualstudio.com, download for your OS, and install with default settings. VS Code is the most popular code editor in the world; 73% of developers use it daily.</p>" +
      "<p><strong>Step 2 — Install essential extensions:</strong> Open VS Code, press Ctrl+Shift+X, and install: <strong>Prettier</strong> (auto-formats code), <strong>GitLens</strong> (shows who wrote every line and when), <strong>Python</strong> by Microsoft (syntax highlighting and debugging), <strong>Live Server</strong> (opens HTML and auto-refreshes on save), and <strong>ESLint</strong> (catches JavaScript errors before you run the code).</p>" +
      "<p><strong>Step 3 — Create your workspace folder:</strong> Open the VS Code terminal with Ctrl+` and run: <code>mkdir ~/projects/portfolio &amp;&amp; cd ~/projects/portfolio</code>. This creates your dedicated project folder. Then type <code>code .</code> to open it in VS Code. If VS Code opens with the folder on the left sidebar, your environment is ready — this is exactly how every professional developer starts a new project.</p>",
    funFact:
      "VS Code was built by Microsoft using JavaScript and Electron — the same technology it helps you write! It's open-source, has 20,000+ extensions, and is used at Google, Facebook, Amazon, and virtually every tech company on Earth.",
    xpReward: 120,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which VS Code extension automatically formats your code to look clean and consistent?",
      options: ["GitLens", "ESLint", "Prettier", "Live Server"],
      correctAnswer: "Prettier",
      explanation:
        "Prettier is a code formatter — it auto-fixes indentation, spacing, and quotes every time you save. In teams, everyone uses Prettier so all code looks uniform regardless of who wrote it.",
    },
  },

  {
    title: "Creating Your GitHub Account & First Repository",
    content:
      "<p>Ankit's resume had a GitHub link. The interviewer clicked it, saw well-organized repositories with good READMEs, and said: 'I don't even need to ask you technical questions — your code speaks for itself.' That GitHub link got Ankit hired. Yours will too.</p>" +
      "<p><strong>Step 1 — Create your GitHub account:</strong> Go to https://github.com, click Sign up, and use a professional email. Choose a username like <em>rahulkumar-dev</em> or <em>priya-tech</em> — recruiters see this URL. <strong>Step 2 — Complete your profile:</strong> Add your full real name, a bio like 'IT Fresher | Python | Full-Stack | Open to opportunities', your city, and a professional photo.</p>" +
      "<p><strong>Step 3 — Create your portfolio repository:</strong> Click the '+' icon, select 'New repository', name it <em>my-tech-portfolio</em>, add the description 'My personal tech portfolio — built with HTML, CSS, Python, Flask and SQLite', set visibility to <strong>Public</strong> (so recruiters can see it), check 'Add a README file', and click 'Create repository'. <strong>Step 4 — Write your first README entry:</strong> Click the pencil icon on README.md and add your project title, a live demo placeholder, and your tech stack list. Click 'Commit changes' — your first commit is live!</p>",
    funFact:
      "GitHub has over 100 million repositories. Recruiters at top MNCs literally search GitHub by location and tech stack to headhunt developers — your public repositories are your silent job application running 24/7.",
    xpReward: 130,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "When creating a GitHub repository for your portfolio, which visibility setting should you choose?",
      options: [
        "Private — to protect your code",
        "Public — so recruiters can view it",
        "Internal — for team access only",
        "Draft — until it is perfect",
      ],
      correctAnswer: "Public — so recruiters can view it",
      explanation:
        "Your portfolio repo must be Public. Recruiters cannot see private repos. A private portfolio defeats the entire purpose — it's your showcase to the world.",
    },
  },

  {
    title: "Git Basics: Your First Commit",
    content:
      "<p>Imagine writing an entire essay, accidentally deleting it, and having no way to get it back. That's programming without Git. Now imagine being able to rewind any file to any point in time, or work on experimental features without breaking the working code. That's programming <em>with</em> Git — and every developer on Earth uses it.</p>" +
      '<p><strong>Installing Git:</strong> Windows — download from https://git-scm.com and install with defaults. Mac — type <code>git --version</code> in Terminal; it will prompt installation if needed. Linux — run <code>sudo apt install git</code>. <strong>Configure Git once:</strong> Run <code>git config --global user.name "Your Name"</code> and <code>git config --global user.email "youremail@gmail.com"</code>. This stamps your name on every commit you make.</p>' +
      "<p><strong>The Git Workflow — memorize this 4-step cycle:</strong> (1) <code>git status</code> — see what files changed. (2) <code>git add .</code> — stage all changed files. (3) <code>git commit -m \"Add homepage HTML structure\"</code> — save a snapshot with a clear message. (4) <code>git push origin main</code> — upload to GitHub. Clone your repo first: <code>git clone https://github.com/YOUR-USERNAME/my-tech-portfolio.git</code>. Then create a file called index.html, type 'Hello World', save it, and run the 4-step cycle. Check your GitHub repo — your file should appear within seconds!</p>",
    funFact:
      "Git was created by Linus Torvalds (who also created Linux) in just 10 days in 2005 because he was frustrated with existing version control tools. He built one of the most important tools in software history as a side project in a week and a half.",
    xpReward: 140,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Complete the git command to upload your committed changes to GitHub: git ___ origin main",
      correctAnswer: "push",
      explanation:
        "git push sends your local commits to the remote GitHub repository. The flow is: git add (stage) → git commit (save locally) → git push (upload to GitHub). Missing the push step means your changes exist only on your laptop.",
    },
  },

  {
    title: "Setting Up Python Environment",
    content:
      "<p>Sneha's team lead asked her to run a Python script to process some data. She opened her laptop, typed <code>python</code>, and got: 'python is not recognized as an internal or external command.' Embarrassing, and completely avoidable. Let's make sure that's never you.</p>" +
      "<p><strong>Step 1 — Install Python:</strong> Go to https://python.org/downloads and download Python 3.11+. During installation on Windows, <strong>CHECK 'Add Python to PATH'</strong> — this is the most commonly missed step! Verify by opening terminal and typing <code>python --version</code>. <strong>Step 2 — Verify pip:</strong> Run <code>pip --version</code>. If missing: <code>python -m ensurepip --upgrade</code>.</p>" +
      "<p><strong>Step 3 — Create a Virtual Environment:</strong> A virtual environment keeps your project packages isolated. Think of it as a clean room. Run: <code>cd ~/projects/portfolio</code> then <code>python -m venv venv</code>. <strong>Step 4 — Activate it:</strong> Windows: <code>venv\\Scripts\\activate</code>. Mac/Linux: <code>source venv/bin/activate</code>. You'll see <code>(venv)</code> in your terminal prompt. <strong>Step 5 — Install packages:</strong> Run <code>pip install flask flask-cors requests matplotlib</code>. Then freeze them: <code>pip freeze &gt; requirements.txt</code>. This file lets anyone reproduce your environment with one command: <code>pip install -r requirements.txt</code>.</p>",
    funFact:
      "Python is the #1 language for AI/ML, automation, and data science. It's used by Netflix to personalise recommendations, Instagram to run its backend, NASA for scientific computing, and Spotify for music recommendations. Learning Python is like learning to drive — it unlocks everything.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why do professional developers use a Python virtual environment for each project?",
      options: [
        "It makes Python run faster",
        "It keeps each project's packages isolated so they don't conflict with each other",
        "It automatically backs up your code",
        "It is required for Python to work on Windows",
      ],
      correctAnswer:
        "It keeps each project's packages isolated so they don't conflict with each other",
      explanation:
        "If Project A needs Flask 2.0 and Project B needs Flask 3.0, installing both globally would break one of them. Virtual environments give each project its own isolated package space — a standard practice in every professional Python project.",
    },
  },

  {
    title: "Your First Python Script",
    content:
      "<p>Vikram's manager dropped a CSV file on his desk and said: 'Give me a summary of this data by 2pm.' Vikram wrote a 20-line Python script, got the answer in minutes, and had time for lunch. His colleague who used Excel manually took 3 hours. Python pays off fast.</p>" +
      "<p>Let's write your first portfolio-related Python script. Create the file <strong>backend/data_generator.py</strong> and write a script that defines a <em>projects</em> list with dictionaries containing id, name, description, tech_stack (a list of strings), github_url, live_url, and created_at fields. Also define a <em>skills</em> list with dictionaries for name, proficiency (0-100), and category. Use Python's <code>json</code> module to save both lists to a file called <em>sample_data.json</em> using <code>json.dump(data, f, indent=2)</code>.</p>" +
      "<p>Run it with <code>python backend/data_generator.py</code>. You should see success messages and a new sample_data.json file appear. Open it in VS Code — this is real JSON data that your portfolio backend will serve. Key Python concepts used here: lists, dictionaries, f-strings, the <code>with open()</code> context manager, and the json module. Each of these appears daily in real-world Python codebases.</p>",
    funFact:
      "Python's design philosophy is 'Readability counts' — code should read almost like English. This is why Python programs are typically 3–5x shorter than equivalent Java or C++ code. Less code means fewer bugs and faster development.",
    xpReward: 130,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Python, what does the 'with open(filename, \"w\") as f:' statement do?",
      options: [
        "Reads data from a file",
        "Opens a file for writing and automatically closes it when done",
        "Creates a backup of the file",
        "Locks the file so others cannot access it",
      ],
      correctAnswer:
        "Opens a file for writing and automatically closes it when done",
      explanation:
        "The 'with' statement is a context manager. It opens the file, gives you a handle (f), and automatically closes it when the indented block finishes — even if an error occurs. This prevents file corruption from forgetting to close files.",
    },
  },

  {
    title: "Database Design: Planning Your Data",
    content:
      "<p>Before Deepa wrote a single line of SQL, her senior colleague said: 'Never touch a keyboard until your tables are drawn on paper.' That 10-minute planning session saved Deepa 3 hours of rewriting. Database design is the most important step — and most freshers skip it.</p>" +
      "<p>Think about your portfolio: what data do you need to store? Your schema has three tables. <strong>projects</strong>: id (INTEGER PRIMARY KEY), name (TEXT NOT NULL), description (TEXT), tech_stack (TEXT, stored as JSON string), github_url (TEXT), live_url (TEXT), created_at (TEXT timestamp). <strong>skills</strong>: id (INTEGER PRIMARY KEY), name (TEXT NOT NULL), proficiency (INTEGER 0-100), category (TEXT). <strong>contacts</strong>: id (INTEGER PRIMARY KEY), name (TEXT NOT NULL), email (TEXT NOT NULL), message (TEXT NOT NULL), received_at (TEXT timestamp).</p>" +
      "<p>Key design decisions: tech_stack is stored as a JSON string in SQLite (no need for a junction table at this scale). All timestamps use ISO format (2024-01-15T10:30:00) for easy parsing in Python and JavaScript. NOT NULL constraints prevent incomplete data from being saved. Drawing this schema on paper before coding is a professional habit that saves hours of refactoring later.</p>",
    funFact:
      "Edgar F. Codd invented relational databases in 1970 while working at IBM. He was ignored for years because IBM thought it would threaten their existing products. Oracle was founded specifically to build what IBM refused to. His 12 rules still guide every SQL database today.",
    xpReward: 130,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In your contacts table, why should the email column have a NOT NULL constraint?",
      options: [
        "To make the database faster",
        "To prevent rows being saved without an email — making data useless for follow-up",
        "Because SQLite requires it for all columns",
        "To encrypt the email address",
      ],
      correctAnswer:
        "To prevent rows being saved without an email — making data useless for follow-up",
      explanation:
        "A contact form submission without an email is useless — you can't reply. NOT NULL constraints enforce business rules at the database level, the last line of defence even if your application code has a bug.",
    },
  },

  {
    title: "Creating Your SQLite Database",
    content:
      "<p>Arjun's first task at his internship was: 'Set up the local database with test data so the dev team can work.' He did it in 15 minutes with Python and SQLite. His manager was impressed — 'Most freshers need a week to figure this out.' Here's exactly how Arjun did it.</p>" +
      "<p>Create the file <strong>backend/database.py</strong>. Write a <code>get_connection()</code> function that calls <code>sqlite3.connect('portfolio.db')</code> and sets <code>conn.row_factory = sqlite3.Row</code> (this allows rows to be accessed as dictionaries). Write a <code>create_tables()</code> function that uses <code>cursor.executescript()</code> to run a multi-statement SQL block creating all three tables with <code>CREATE TABLE IF NOT EXISTS</code> — the IF NOT EXISTS prevents errors when you run the script multiple times. Write a <code>seed_data()</code> function that uses <code>cursor.executemany()</code> to insert sample skills using parameterized queries with placeholders (?, ?, ?).</p>" +
      "<p>Run with <code>python backend/database.py</code>. A file called <em>portfolio.db</em> is created in your directory. Install the 'SQLite Viewer' extension in VS Code to open this .db file visually and see your tables — this is a great debugging tool during development.</p>",
    funFact:
      "SQLite is the most widely deployed database in the world — it's embedded in every Android phone, every iPhone, every macOS and Windows install, every Firefox browser, and every Adobe product. Over 1 trillion SQLite databases exist in active use right now.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In database.py, what does 'conn.row_factory = sqlite3.Row' accomplish?",
      options: [
        "It makes queries run faster",
        "It allows rows to be accessed as dictionaries (row['name']) instead of index positions (row[0])",
        "It encrypts the database",
        "It automatically backs up rows",
      ],
      correctAnswer:
        "It allows rows to be accessed as dictionaries (row['name']) instead of index positions (row[0])",
      explanation:
        "Without row_factory, you'd write row[0] to get the first column — confusing and brittle. With sqlite3.Row, you write row['name'] which is self-documenting and works even if column order changes.",
    },
  },

  {
    title: "Writing SQL Queries for Your Portfolio",
    content:
      "<p>During a technical round, the interviewer pulled up a chair and said: 'Write me a query to get all projects sorted by date, newest first.' Kavya wrote it in 10 seconds. She got the job. SQL is the most universally required skill in IT — every role touches data.</p>" +
      "<p>Create <strong>backend/queries.py</strong> with these four functions: <strong>get_all_projects()</strong> — runs <code>SELECT * FROM projects ORDER BY created_at DESC</code> and returns a list of dicts. <strong>get_skills_by_category()</strong> — runs a GROUP BY query using <code>GROUP_CONCAT(name, ', ')</code> and <code>ROUND(AVG(proficiency), 1)</code> to show skill summaries per category. <strong>add_contact(name, email, message)</strong> — runs <code>INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)</code> using parameterized queries (never use string concatenation for user input — that's SQL injection!). <strong>update_skill_proficiency(skill_id, new_proficiency)</strong> — runs an UPDATE statement with parameterized values.</p>" +
      "<p>Run the file to test: <code>python backend/queries.py</code>. You'll see your skills grouped and averaged. This is real SQL analytics — the same technique used in business intelligence reports at every MNC. Notice how every INSERT and UPDATE uses <code>?</code> placeholders, never f-strings — this prevents SQL injection attacks.</p>",
    funFact:
      "SQL was invented in 1974 by IBM researchers. Despite being 50 years old, it remains the most in-demand technical skill in job postings worldwide, beating Python, Java, and JavaScript. It's literally never going away.",
    xpReward: 150,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Complete the SQL query to get all skills sorted by proficiency, highest first: SELECT * FROM skills ORDER BY proficiency ___",
      correctAnswer: "DESC",
      explanation:
        "DESC (descending) sorts from highest to lowest. ASC (ascending, the default) sorts lowest to highest. For leaderboards, rankings, and 'top N' queries, DESC is almost always what you want.",
    },
  },

  {
    title: "Building the HTML Structure",
    content:
      "<p>The recruiter opened Sanjay's portfolio link and within 3 seconds said: 'This looks professional.' The secret? Clean, semantic HTML5 that browsers and search engines both understand perfectly. Sanjay didn't use any fancy frameworks — just solid HTML fundamentals.</p>" +
      "<p>Create <strong>frontend/index.html</strong> with these key sections: (1) <strong>&lt;nav&gt;</strong> with a logo div and navigation links (About, Skills, Projects, Contact) using anchor tags pointing to section IDs. (2) <strong>&lt;section id='hero'&gt;</strong> with an h1 greeting, a tagline paragraph, and two CTA buttons — 'See My Work' and 'Hire Me'. (3) <strong>&lt;section id='skills'&gt;</strong> with a heading and an empty div with id='skills-grid' (JavaScript will populate this). (4) <strong>&lt;section id='projects'&gt;</strong> with a heading and an empty div with id='projects-grid'. (5) <strong>&lt;section id='contact'&gt;</strong> with a form containing name input, email input, textarea, and submit button. (6) <strong>&lt;footer&gt;</strong> with your name and year.</p>" +
      "<p>Critical patterns: meta description tag for SEO ('IT Fresher — Python Developer — Open to Opportunities'), Google Fonts link in &lt;head&gt;, and the &lt;script src='app.js'&gt; tag at the bottom of &lt;body&gt; (not in head) so HTML loads first. Using semantic tags like &lt;nav&gt;, &lt;section&gt;, and &lt;footer&gt; instead of generic &lt;div&gt; improves SEO and accessibility.</p>",
    funFact:
      "Google's search algorithm reads your HTML structure to understand your page. Using semantic tags like section, nav, article instead of generic divs improves your SEO ranking — meaning more recruiters find your portfolio organically.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why is the script tag placed at the BOTTOM of the body, not in the head?",
      options: [
        "It is a security requirement",
        "So the HTML content loads and displays first before JavaScript executes — improving perceived load speed",
        "Because JavaScript only works at the bottom of HTML files",
        "To prevent the browser from caching the script",
      ],
      correctAnswer:
        "So the HTML content loads and displays first before JavaScript executes — improving perceived load speed",
      explanation:
        "When a browser hits a script tag, it stops rendering HTML until the script loads and runs. Placing scripts at the bottom means the user sees your content immediately, then JS enhances it — a core web performance principle.",
    },
  },

  {
    title: "Styling with CSS",
    content:
      "<p>Two portfolios, same content. One looks like a 1998 Geocities page. The other looks like a $5,000 agency website. The only difference? CSS. Meera spent 2 hours on CSS and received 3 interview calls. Let's make yours look agency-level.</p>" +
      "<p>Create <strong>frontend/styles.css</strong>. Start with CSS Custom Properties (variables) in the <code>:root</code> selector: define <code>--primary: #6C63FF</code> (brand purple), <code>--bg: #0A0A0F</code> (near-black background), <code>--surface: #12121A</code> (card surface), <code>--text: #E8E8F0</code> (primary text), <code>--text-muted: #8888A0</code>, <code>--border: rgba(255,255,255,0.08)</code>, <code>--radius: 12px</code>, and <code>--transition: 0.2s ease</code>. Use these variables everywhere with var(--primary) — this makes future colour changes instant.</p>" +
      "<p>Key styles to build: <strong>Navigation</strong> — fixed position, glassmorphism effect using <code>backdrop-filter: blur(20px)</code> and <code>background: rgba(10,10,15,0.85)</code>, flexbox for logo and links side-by-side. <strong>Hero</strong> — min-height: 100vh, flexbox with column direction and center alignment, large font size using <code>clamp(2.5rem, 5vw, 4rem)</code> for responsive text. <strong>Cards</strong> — background: var(--surface), border with var(--border), border-radius with var(--radius), and a hover effect using <code>transform: translateY(-4px)</code> with transition. The hover translateY gives cards a satisfying 'lift' effect that recruiters notice.</p>",
    funFact:
      "CSS was invented by Håkon Wium Lie in 1994 while working at CERN with Tim Berners-Lee (who invented the web itself). Before CSS, formatting was done with HTML attributes — imagine writing color='red' on every single element.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What is the benefit of using CSS variables (--primary, --bg, etc.) instead of hardcoding colour values?",
      options: [
        "It makes CSS load faster",
        "Changing one variable updates the colour everywhere it is used — making theme changes instant",
        "CSS variables are required for animations to work",
        "They prevent the page from flickering on load",
      ],
      correctAnswer:
        "Changing one variable updates the colour everywhere it is used — making theme changes instant",
      explanation:
        "Without variables, if you want to change your brand colour from purple to blue, you'd search-and-replace hundreds of values. With CSS variables, change --primary once and every element that uses it updates automatically. This is why design systems use tokens.",
    },
  },

  {
    title: "Making It Responsive",
    content:
      "<p>Kiran sent his portfolio link to a recruiter. The recruiter opened it on their phone, saw a broken jumbled layout, and moved on. Kiran didn't get a callback. 60% of web traffic is mobile — if your portfolio breaks on phones, you're filtering out most of your audience before they even see your skills.</p>" +
      "<p>Add responsive styles at the bottom of styles.css using the <strong>mobile-first approach</strong> — write CSS for small screens first, then use min-width media queries to enhance for larger screens. Base styles: <code>.projects-container</code> uses <code>grid-template-columns: 1fr</code> (single column on mobile). Hide nav links on mobile with <code>display: none</code>. At 768px: <code>grid-template-columns: repeat(2, 1fr)</code> for two-column tablet layout, show nav links with <code>display: flex; gap: 2rem</code>. At 1024px: <code>grid-template-columns: repeat(3, 1fr)</code> for three-column desktop, add a <code>.container</code> class with <code>max-width: 1200px; margin: 0 auto</code>.</p>" +
      "<p><strong>Testing your responsive design:</strong> Open your portfolio in Chrome, press F12, click the device toggle icon (or press Ctrl+Shift+M), and test at three breakpoints: iPhone SE (375px), iPad (768px), and Desktop (1440px). If all three look good, your responsive design is solid. Fix any overflow, cramped text, or broken layouts you find.</p>",
    funFact:
      "Google uses 'mobile-first indexing' — it crawls and ranks the mobile version of your site first. A non-responsive portfolio can actually rank lower in Google search results than a responsive one with identical content. Responsiveness is now an SEO factor.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What does 'grid-template-columns: repeat(3, 1fr)' mean in CSS Grid?",
      options: [
        "Create 3 rows, each 1 fraction of the container height",
        "Create 3 equal-width columns, each taking 1 fraction of the available width",
        "Repeat the grid layout 3 times",
        "Create 3 columns of exactly 1 pixel each",
      ],
      correctAnswer:
        "Create 3 equal-width columns, each taking 1 fraction of the available width",
      explanation:
        "1fr means 1 fraction of the available free space. repeat(3, 1fr) creates 3 equal columns that each stretch to fill the container width. If the container is 900px, each column gets 300px. This is the most common CSS Grid pattern for responsive card layouts.",
    },
  },

  {
    title: "Adding JavaScript Interactivity",
    content:
      "<p>Ravi's portfolio had everything — but it felt dead. No animations, no smooth scrolling, nothing happened when you hovered. Then he spent 2 hours adding JavaScript interactions and suddenly it felt alive. The same recruiter who skipped him came back and said: 'Your portfolio has a great feel to it.'</p>" +
      "<p>Create <strong>frontend/app.js</strong> with three core features. <strong>Smooth scrolling:</strong> use <code>document.querySelectorAll('a[href^=\"#\"]')</code> to select all anchor links, add click listeners that call <code>e.preventDefault()</code> and <code>target.scrollIntoView({ behavior: 'smooth' })</code>. <strong>Dynamic skill cards:</strong> write a <code>renderSkills(skills)</code> function that maps the skills array to HTML card strings using Array.map(), sets each card's progress bar to a CSS variable <code>data-width</code>, and uses a setTimeout of 100ms to trigger CSS transitions on the progress bars after render.</p>" +
      "<p><strong>Contact form with async submission:</strong> listen for the form's 'submit' event, call e.preventDefault(), immediately disable the submit button and change its text to 'Sending...' (prevents double-submission), use <code>fetch()</code> with method: 'POST' and JSON body to call your backend, update the button text to show success or error, and re-enable the button after 3 seconds. These three features together create the polished feel that separates professional portfolios from homework projects.</p>",
    funFact:
      "JavaScript runs in every web browser on Earth without any installation — it's the only language truly native to the web. It was written by Brendan Eich in just 10 days in 1995. Despite its rushed origin, it powers 98% of all websites and has more npm packages than any other language.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In the contact form handler, why should btn.disabled be set to true immediately after the user submits?",
      options: [
        "To prevent the button from being styled by CSS",
        "To prevent double-submission if the user clicks the button multiple times while the request is in progress",
        "It is required for fetch() to work correctly",
        "To hide the button from screen readers",
      ],
      correctAnswer:
        "To prevent double-submission if the user clicks the button multiple times while the request is in progress",
      explanation:
        "Without disabling the button, an impatient user could click Submit 5 times and create 5 duplicate contact entries in your database. Disabling on click and re-enabling after the request completes is a fundamental UX and data integrity pattern.",
    },
  },

  {
    title: "Creating a Simple Python Flask Backend",
    content:
      "<p>Tanvi's portfolio was just a static HTML file — pretty, but it couldn't do anything. When she added a Flask backend, suddenly she had a real API, a real database, and recruiters started asking: 'Did you build this entire stack yourself?' Yes. She did. And so will you.</p>" +
      "<p>Create <strong>backend/app.py</strong>. Import Flask, request, jsonify from flask, and CORS from flask_cors. Import your database and query functions. Create the Flask app with <code>app = Flask(__name__)</code>, then call <code>CORS(app)</code> — this is essential so your frontend on a different port can make requests without browser security blocks. Initialize the database on startup by calling create_tables() and seed_data().</p>" +
      "<p>Create these four routes: <strong>GET /api/health</strong> — returns <code>{'status': 'ok'}</code> (use this to verify the API is running). <strong>GET /api/projects</strong> — calls get_all_projects() and returns jsonify(result). <strong>GET /api/skills</strong> — queries skills ordered by proficiency DESC. <strong>POST /api/contact</strong> — validates that name, email, and message are all present in request.get_json(), returns 400 error if missing, calls add_contact(), and returns 201 Created. Run with <code>python backend/app.py</code> and visit http://localhost:5000/api/health in your browser — you should see the JSON response. You just built a real REST API.</p>",
    funFact:
      "Flask was created by Armin Ronacher as an April Fool's joke in 2010 — he wanted to prove you could build a web framework in a single Python file. The joke became one of the most popular Python frameworks, used by Netflix, Reddit, LinkedIn, and Airbnb.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question: "In the Flask backend, what does 'CORS(app)' accomplish?",
      options: [
        "It enables HTTPS encryption for the API",
        "It allows your frontend running on a different port to make requests to the backend without being blocked by the browser",
        "It compresses API responses for faster loading",
        "It adds authentication to all API endpoints",
      ],
      correctAnswer:
        "It allows your frontend running on a different port to make requests to the backend without being blocked by the browser",
      explanation:
        "CORS (Cross-Origin Resource Sharing) is a browser security feature that blocks requests from different origins. Your frontend at localhost:3000 calling your backend at localhost:5000 is a cross-origin request — without CORS enabled on the backend, the browser rejects it.",
    },
  },

  {
    title: "Connecting Frontend to Backend",
    content:
      "<p>This is the moment everything clicks. Until now your HTML was beautiful but static, and your Python API was running but nothing used it. Now you'll wire them together — and your portfolio becomes a real full-stack application that fetches live data from a real database.</p>" +
      "<p>Update <strong>frontend/app.js</strong>. At the top, define <code>const API_BASE = 'http://localhost:5000/api'</code>. Write a <code>loadSkills()</code> async function: use <code>await fetch(API_BASE + '/skills')</code>, parse the JSON response with <code>await res.json()</code>, pass the skills array to your <code>renderSkills()</code> function, and wrap everything in a try/catch that shows a friendly error message in the skills container if the backend is offline. Write a <code>loadProjects()</code> async function: fetch /api/projects, handle the empty array case by showing 'No projects yet', and map each project to a card HTML string including tech stack tags and GitHub/live demo links.</p>" +
      "<p>In your DOMContentLoaded event listener, call both loadSkills() and loadProjects(). Start your Flask backend (<code>python backend/app.py</code>) and open index.html with Live Server. Your skills and projects now load dynamically from the SQLite database through the Flask API into the JavaScript frontend. This three-tier architecture — database → API → frontend — is exactly how enterprise applications at every MNC are structured.</p>",
    funFact:
      "The Fetch API was introduced in 2015 to replace XMLHttpRequest, which was infamous for its verbose, confusing syntax. The concept of loading data without page refresh was called 'Ajax' in the 2000s and revolutionised the web — Gmail, Google Maps, and Facebook pioneered it. Your portfolio uses the same fundamental technique.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In the loadSkills() function, what should the 'catch' block do?",
      options: [
        "Crash the application to alert the developer",
        "Silently ignore the error and show nothing",
        "Display a user-friendly error message instead of leaving the skills section blank",
        "Automatically retry the request every 5 seconds",
      ],
      correctAnswer:
        "Display a user-friendly error message instead of leaving the skills section blank",
      explanation:
        "Graceful error handling is a professional requirement. Never let a backend failure leave a blank, unexplained section on your page. Always show the user what happened and — when possible — offer a recovery path. This is the difference between amateur and professional code.",
    },
  },

  {
    title: "Adding a Data Dashboard",
    content:
      "<p>Neha walked into her interview with a portfolio that had a live data chart showing her skill progression. The interviewer said: 'You understand data visualisation. That's exactly what we need on our analytics team.' A chart isn't just pretty — it signals that you think in data.</p>" +
      "<p>Add Chart.js to your index.html head: <code>&lt;script src='https://cdn.jsdelivr.net/npm/chart.js'&gt;&lt;/script&gt;</code>. Add a new section in HTML with id='dashboard' containing an h2 heading and a canvas element with id='skillsChart'. In app.js, write an async <code>renderSkillsChart()</code> function that fetches skills from the API, gets the canvas context with <code>document.getElementById('skillsChart').getContext('2d')</code>, and creates a <code>new Chart(ctx, config)</code> with type: 'bar'.</p>" +
      "<p>Configure the chart's data object: labels array from skills.map(s =&gt; s.name), a single dataset with data from skills.map(s =&gt; s.proficiency), dynamically generated background colors using HSL (hsl(250 + index * 15, 70%, 65%)), and borderRadius: 8 for modern rounded bars. In options: set responsive: true, disable the legend, add a title, set y-axis beginAtZero: true with max: 100. Call renderSkillsChart() in DOMContentLoaded. Reload your page — you have a live, data-driven chart powered by your SQLite database through your Flask API.</p>",
    funFact:
      "Data visualisation pioneer Edward Tufte proved that good charts communicate in seconds what pages of text take minutes to explain. The COVID-19 pandemic made data dashboards mainstream — the Johns Hopkins dashboard was visited 2 billion times in 2020 alone.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question: "In Chart.js, what does 'responsive: true' in options do?",
      options: [
        "Adds a responsive design mode to the entire page",
        "Makes the chart resize automatically to fit its container on different screen sizes",
        "Enables touch events on mobile devices",
        "Fetches new data every time the chart is resized",
      ],
      correctAnswer:
        "Makes the chart resize automatically to fit its container on different screen sizes",
      explanation:
        "Without responsive: true, the chart renders at a fixed pixel size and overflows on mobile. With it, Chart.js uses ResizeObserver to detect container size changes and redraws the chart proportionally — essential for mobile-friendly dashboards.",
    },
  },

  {
    title: "Python Data Analysis Section",
    content:
      "<p>During a data analyst interview, Pooja was asked: 'Can you show me how you'd analyse data with Python?' She opened her portfolio, scrolled to the analysis section, and showed a chart generated by her own Python script using real data. 'That's the most impressive thing I've seen from a fresher,' the interviewer said. She got an offer that day.</p>" +
      "<p>Create <strong>backend/analysis.py</strong>. At the very top, add <code>import matplotlib; matplotlib.use('Agg')</code> — the Agg backend renders charts to files without needing a screen (essential for servers). Import pyplot as plt, numpy as np, and your database connection. Write a <code>generate_skills_chart()</code> function that: queries all skills from SQLite, creates a figure with <code>fig, ax = plt.subplots(figsize=(10, 6))</code>, sets dark background colours on fig and ax, creates a horizontal bar chart with <code>ax.barh()</code> using different colours per skill category, adds value labels to each bar, styles the axes with white text and removes the top/right spines.</p>" +
      "<p>Save the output with <code>plt.savefig('../frontend/assets/skills_chart.png', dpi=150, bbox_inches='tight')</code>, then call <code>plt.close()</code> to free memory. Run with <code>python backend/analysis.py</code>. A professional chart image is saved to your frontend folder. Add it to your HTML with an img tag. This combination — Python data processing + matplotlib chart + served as an asset — is exactly how data engineering teams generate reports and dashboard exports.</p>",
    funFact:
      "Matplotlib was created in 2003 by John Hunter, a neurobiologist who needed to visualise EEG brainwave data. He built the entire library himself in his spare time. It's now used in scientific research, financial analysis, and by NASA to visualise space mission data.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why does analysis.py use 'matplotlib.use(\"Agg\")' before importing pyplot?",
      options: [
        "Agg mode makes charts render faster",
        "It switches to a non-interactive backend that saves charts to files without needing a display screen — essential for servers",
        "It enables anti-aliasing for smoother chart lines",
        "It is required to use custom colours in matplotlib",
      ],
      correctAnswer:
        "It switches to a non-interactive backend that saves charts to files without needing a display screen — essential for servers",
      explanation:
        "By default, matplotlib tries to display charts in a GUI window. On a server (no screen), this crashes. The 'Agg' backend renders directly to image files without needing any display — the standard approach for server-side chart generation in production systems.",
    },
  },

  {
    title: "Writing Your Project README",
    content:
      "<p>A recruiter clicked Arun's GitHub repo. It had great code, but no README — just a blank page with filenames. They closed the tab. The next candidate's repo had a beautiful README with screenshots and a live demo link. They got the interview. Same code, completely different first impression. A README is not optional — it is your project's front door.</p>" +
      "<p>Update your README.md with these sections: (1) <strong>Title and badges</strong> — use shields.io badges for your live demo link and GitHub source. (2) <strong>Screenshot</strong> — take a screenshot of your live portfolio (Win+Shift+S or Cmd+Shift+4), save as docs/screenshot.png, and embed with <code>![Portfolio Screenshot](docs/screenshot.png)</code>. (3) <strong>Tech stack table</strong> — a markdown table with Layer and Technology columns covering Frontend, Backend, Database, Charts, Deployment, and CI/CD. (4) <strong>Project structure</strong> — a code block showing the folder tree. (5) <strong>Run locally steps</strong> — exact commands from git clone to running the backend: clone, cd, create venv, activate, pip install -r requirements.txt, python backend/app.py.</p>" +
      "<p>The golden rule of READMEs: test your own setup instructions on a fresh environment. If a stranger can clone your repo and run the project following only your README, it's a good README. If they get stuck, it's not. This self-testing habit is what makes some developers 10x more trustworthy to work with than others.</p>",
    funFact:
      "The most-starred repository on GitHub (microsoft/vscode at 160K+ stars) has a meticulously maintained README. The second rule of open source is: code without documentation is code that doesn't exist. A good README is the difference between 0 and 1,000 GitHub stars.",
    xpReward: 130,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What are the colourful badges at the top of a professional README (Live Demo, GitHub shields) used for?",
      options: [
        "They are required by GitHub for repositories to appear in search",
        "They provide quick visual links and status indicators — making key information scannable in seconds",
        "They increase the repository star count automatically",
        "They are only decorative with no functional purpose",
      ],
      correctAnswer:
        "They provide quick visual links and status indicators — making key information scannable in seconds",
      explanation:
        "Shields.io badges give recruiters and developers instant visual information: build status, version, live demo link, license. A well-badged README signals that the author understands professional open-source practices — a strong signal for hiring.",
    },
  },

  {
    title: "Getting Your AWS Free Tier Account",
    content:
      "<p>Suresh listed 'AWS experience' on his resume based on YouTube tutorials. In the interview they asked: 'Which AWS services have you used in a real account?' Silence. Compare that to Divya, who had an actual AWS account with real services — she could speak from experience. Free Tier gives you that experience at zero cost.</p>" +
      "<p>Go to https://aws.amazon.com/free and click 'Create a Free Account'. You'll need a valid email, a phone number for OTP verification, and a credit/debit card for identity verification (you won't be charged for Free Tier services). After creating your account, explore the console. Key services to look at: <strong>S3</strong> (Simple Storage Service — store files, host static websites), <strong>EC2</strong> (Elastic Compute Cloud — virtual machines), <strong>IAM</strong> (Identity and Access Management — users and permissions), <strong>CloudWatch</strong> (monitoring and logs).</p>" +
      "<p><strong>CRITICAL — Set a billing alert immediately:</strong> Go to Billing &gt; Budgets &gt; Create Budget &gt; Zero spend budget &gt; Set email alert at $0.01. This ensures you get notified before any charge. AWS Free Tier has three types: Always Free (Lambda 1M requests/month, DynamoDB 25GB — never expires), 12 months free (EC2 t2.micro 750 hours/month, S3 5GB), and Trial periods for some services. Explore S3: create a bucket named yourname-portfolio-backup in ap-south-1 (Mumbai) for lowest latency in India — you just created cloud storage!</p>",
    funFact:
      "AWS launched in 2006 and was so profitable that it funds all of Amazon's retail operations — Amazon the online shop essentially runs as a side business subsidised by AWS. AWS represents 70% of Amazon's operating income despite being only 15% of revenue.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "When setting up an AWS Free Tier account, what is the MOST important first step to prevent unexpected charges?",
      options: [
        "Immediately deploy an EC2 instance to learn the service",
        "Set up a billing alert to notify you when spending reaches even $0.01",
        "Enable MFA on the root account",
        "Create an IAM admin user before doing anything else",
      ],
      correctAnswer:
        "Set up a billing alert to notify you when spending reaches even $0.01",
      explanation:
        "Billing alerts specifically prevent the most common fresher nightmare: forgetting a running service and getting a large unexpected bill. Set the billing alert within the first 5 minutes of account creation — before exploring any other service.",
    },
  },

  {
    title: "Deploying Your Frontend to Netlify",
    content:
      "<p>Meghna showed her portfolio to a recruiter. 'Can I see the live site?' the recruiter asked. 'It's on my laptop,' Meghna said. The recruiter moved on. A portfolio that isn't deployed isn't a portfolio — it's homework. Netlify deploys your site in under 2 minutes, for free, with a real URL on the internet.</p>" +
      "<p>Go to https://netlify.com and sign up with GitHub (recommended — it links your repos directly). In the Netlify dashboard click 'Add new site' &gt; 'Import an existing project' &gt; GitHub &gt; select your my-tech-portfolio repo. Configure: Branch to deploy: main. Base directory: frontend. Build command: (leave empty — static site, no build needed). Publish directory: frontend. Click 'Deploy site'. Netlify builds in 30-60 seconds and gives you a URL like amazing-portfolio-abc123.netlify.app.</p>" +
      "<p>Customise your domain: Site settings &gt; Domain management &gt; Options &gt; Edit site name &gt; change to yourname-portfolio. Your portfolio is now live at yourname-portfolio.netlify.app. Enable automatic deployments: every time you push to GitHub's main branch, Netlify automatically rebuilds and deploys — this is called Continuous Deployment (CD). Update your README by replacing the 'Coming soon' placeholder with your actual Netlify URL, commit and push, and update your LinkedIn profile URL field.</p>",
    funFact:
      "Netlify was founded in 2015 and pioneered the 'Jamstack' architecture. It processes over 24 billion web requests per month. GitHub Pages, Vercel, and Netlify together host over 50 million developer portfolio sites.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What happens automatically every time you push code to your GitHub main branch after linking to Netlify?",
      options: [
        "Nothing — you must manually trigger a deploy from the Netlify dashboard",
        "Netlify detects the push, rebuilds the site, and deploys the updated version within about 60 seconds",
        "GitHub sends an email to Netlify requesting a rebuild",
        "The old deployment is deleted and you must reconfigure the settings",
      ],
      correctAnswer:
        "Netlify detects the push, rebuilds the site, and deploys the updated version within about 60 seconds",
      explanation:
        "This is Continuous Deployment (CD). Netlify uses GitHub webhooks — GitHub notifies Netlify on every push, Netlify pulls the new code and deploys. Your live site always reflects your latest code automatically, which is how professional teams ship.",
    },
  },

  {
    title: "Deploying Your Flask Backend",
    content:
      "<p>Shankar's frontend was live on Netlify, but the contact form showed 'Backend offline' because his Flask app was still only running on his laptop. When he deployed the backend to Render.com's free tier, his full-stack portfolio became fully live — and two weeks later he got his first internship offer through the contact form.</p>" +
      "<p>Prepare your backend for deployment: create a file called <strong>Procfile</strong> (no extension) in the backend folder with content: <code>web: gunicorn app:app</code>. Install gunicorn: <code>pip install gunicorn</code>, then update requirements: <code>pip freeze &gt; requirements.txt</code>. Create <strong>backend/render.yaml</strong> specifying type: web, runtime: python, buildCommand: pip install -r requirements.txt, startCommand: gunicorn app:app.</p>" +
      "<p>Go to https://render.com and sign up with GitHub. In the dashboard: New + &gt; Web Service &gt; connect your GitHub repo. Configure: Name: portfolio-backend. Root Directory: backend. Runtime: Python 3. Build Command: pip install -r requirements.txt. Start Command: gunicorn app:app. Instance Type: Free. Click 'Create Web Service'. Once deployed, Render gives you a URL like https://portfolio-backend-xyz.onrender.com. Update frontend/app.js: <code>const API_BASE = 'https://portfolio-backend-xyz.onrender.com/api'</code>. Push to GitHub — Netlify auto-deploys — your complete full-stack portfolio is live on the internet!</p>",
    funFact:
      "Render.com is backed by Y Combinator (the accelerator that funded Airbnb, Dropbox, Stripe, and Reddit). Its free tier keeps services running as long as they receive requests — perfect for portfolio backends. Professional developers use it for staging environments.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why is 'gunicorn' needed to deploy Flask to Render instead of just using 'python app.py'?",
      options: [
        "Render only supports gunicorn and not Flask",
        "Gunicorn is a production WSGI server that handles multiple requests simultaneously, unlike Flask's single-threaded development server",
        "Gunicorn is required to connect to SQLite databases in the cloud",
        "Flask's built-in server does not support environment variables",
      ],
      correctAnswer:
        "Gunicorn is a production WSGI server that handles multiple requests simultaneously, unlike Flask's single-threaded development server",
      explanation:
        "Flask's built-in server (app.run()) is single-threaded and designed only for development — it can only handle one request at a time. Gunicorn spawns multiple worker processes. Flask explicitly warns: 'Do not use the development server in a production environment.'",
    },
  },

  {
    title: "Adding Your Project to LinkedIn",
    content:
      "<p>The week after Devika deployed her portfolio, she updated LinkedIn with the live link. Within 48 hours, two recruiters from MNCs sent connection requests, followed by interview requests. Her portfolio link got more responses than 3 months of applying through job boards. LinkedIn is the world's largest professional network — your portfolio needs to be visible there.</p>" +
      "<p><strong>Step 1 — Update your headline:</strong> Click the pencil icon on your name and change the headline to: 'IT Fresher | Python · Flask · SQL · HTML/CSS | Open to Opportunities'. Keywords matter — recruiters search for 'Python fresher' and 'SQL developer entry level'. <strong>Step 2 — Add to Featured section:</strong> Profile &gt; Add section &gt; Featured &gt; Links &gt; add your Netlify URL with title 'My Tech Portfolio' and the description 'Full-stack portfolio: Python backend, SQLite database, deployed on Netlify and Render. Source code on GitHub.'</p>" +
      "<p><strong>Step 3 — Add under Projects/Experience:</strong> Add a project entry titled 'Full-Stack Developer', employer 'Personal Project', with a description mentioning Python Flask REST API, SQLite database, JavaScript frontend with Chart.js, Netlify/Render deployment, and GitHub Actions CI/CD. <strong>Step 4 — Write a post:</strong> Share a post with your live link, GitHub link, the hashtags #Python #WebDevelopment #FreshersOfLinkedIn #Hiring #OpenToWork, and mention you are looking for entry-level roles. <strong>Step 5 — Request endorsements</strong> for your skills from classmates and batchmates who can vouch for your abilities.</p>",
    funFact:
      "LinkedIn has over 1 billion members and 65 million companies. Over 122 million people get interviewed through LinkedIn every year. 87% of recruiters use LinkedIn to screen candidates — your profile is your permanent digital resume.",
    xpReward: 130,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "When adding your portfolio project to LinkedIn, which section gives it the MOST visibility to recruiters?",
      options: [
        "The Interests section",
        "The About section biography text only",
        "The Featured section — which shows visual previews at the top of your profile",
        "The Licenses and Certifications section",
      ],
      correctAnswer:
        "The Featured section — which shows visual previews at the top of your profile",
      explanation:
        "The Featured section appears near the top of your LinkedIn profile, before Experience, and shows visual link previews. It's the first thing a recruiter sees after your headline and photo — prime real estate. A portfolio link here gets more clicks than anywhere else on the profile.",
    },
  },

  {
    title: "Documenting Cybersecurity Best Practices",
    content:
      "<p>Ajay pushed his code to GitHub and within 2 hours got an email: 'GitHub has detected an API key in your repository.' A bot had already scraped it and his AWS account racked up $800 in charges before he noticed. This is one of the most common and costly mistakes freshers make. Learn from Ajay's pain — protect your project from the start.</p>" +
      "<p><strong>Step 1 — Create a .gitignore file (CRITICAL):</strong> Create .gitignore in your project root and add these entries: <em>.env, .env.local, .env.production</em> (environment variables — never commit), <em>venv/, __pycache__/, *.pyc</em> (Python environment), <em>*.db, *.sqlite</em> (database files), <em>.DS_Store, Thumbs.db</em> (OS files). <strong>Step 2 — Move secrets to .env:</strong> Install python-dotenv (<code>pip install python-dotenv</code>), create a .env file with SECRET_KEY and DATABASE_URL variables, and in app.py use <code>from dotenv import load_dotenv; import os; load_dotenv(); app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')</code>.</p>" +
      "<p><strong>Step 3 — Verify HTTPS:</strong> Your Netlify URL should start with https:// — Netlify provides free SSL via Let's Encrypt automatically. A padlock in the browser confirms it. <strong>Step 4 — Add security headers:</strong> In app.py add an <code>@app.after_request</code> decorator that sets X-Content-Type-Options: nosniff and X-Frame-Options: DENY headers on every response. These two headers prevent common web attacks (MIME sniffing and clickjacking). Commit the .gitignore first before any other files to ensure secrets never accidentally get committed.</p>",
    funFact:
      "In 2023, researchers found over 847,000 secrets (API keys, passwords, tokens) leaked in public GitHub repositories. AWS automatically scans GitHub for exposed AWS keys and notifies developers — but the damage from bots is often done within minutes of the push.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "A developer accidentally commits their database password to GitHub. What should they do IMMEDIATELY?",
      options: [
        "Delete the commit and hope no one saw it",
        "Make the repository private",
        "Immediately rotate the password in the database and revoke any API keys — then remove it from git history",
        "Add the password to .gitignore and commit again",
      ],
      correctAnswer:
        "Immediately rotate the password in the database and revoke any API keys — then remove it from git history",
      explanation:
        "Deleting a commit from GitHub doesn't help — bots scan in real-time and the commit exists in git history. The ONLY safe response is to immediately invalidate the exposed credential (change password, revoke key) so it becomes useless even if seen. Then clean git history with git filter-repo.",
    },
  },

  {
    title: "DevOps: Setting Up GitHub Actions CI/CD",
    content:
      "<p>Kavitha joined a team that had GitHub Actions. Every time she pushed code, the pipeline automatically ran tests, checked code style, and flagged errors before they reached production. 'I've never written code this confidently,' she said. 'The pipeline catches mistakes before they become problems.' That's CI/CD — and you're setting it up today.</p>" +
      "<p>CI stands for Continuous Integration (every code push runs automated checks), CD stands for Continuous Deployment (passing pushes auto-deploy). Create the folder structure: <strong>.github/workflows/</strong> in your project root. Create <strong>.github/workflows/ci.yml</strong>. At the top, set the workflow name and define triggers: <code>on: push: branches: [main]</code> and <code>pull_request: branches: [main]</code>. This means the workflow runs automatically on every push to main.</p>" +
      "<p>Define two jobs. <strong>test-backend</strong> running on ubuntu-latest: checkout the code using <code>actions/checkout@v4</code>, set up Python 3.11 using <code>actions/setup-python@v4</code>, install dependencies from requirements.txt, run a quick import check (<code>python -c 'from app import app; print(\"Flask app OK\")'</code>), and run flake8 for Python linting. <strong>validate-frontend</strong>: checkout and run basic HTML validation. Commit and push this file. Go to your GitHub repo's Actions tab — you'll see your workflow running with green checkmarks for passing steps. This is the same CI setup used at Amazon, Google, and every professional software team.</p>",
    funFact:
      "Netflix runs over 4,000 CI/CD deployments per day — roughly one new deployment every 22 seconds. When you use Netflix, you may be using code that was written, tested, and deployed to production while you were reading this sentence.",
    xpReward: 170,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In GitHub Actions, what does 'on: push: branches: [main]' mean?",
      options: [
        "Run the workflow only when the main branch is deleted",
        "Run the workflow automatically every time code is pushed to the main branch",
        "Run the workflow when a new branch named main is created",
        "Send a push notification when the workflow runs",
      ],
      correctAnswer:
        "Run the workflow automatically every time code is pushed to the main branch",
      explanation:
        "GitHub Actions 'on' events define what triggers a workflow. 'push: branches: [main]' means: whenever code is pushed (git push) to the main branch, start this workflow immediately. This is how CI pipelines run automatically without anyone pressing a button.",
    },
  },

  {
    title: "Adding a Skills Assessment Section",
    content:
      "<p>Rekha completed IT Fresher Hub but didn't mention it anywhere. Bharati, who did the same courses, added a 'Certifications and Learning' section to her portfolio with a self-assessment dashboard. Recruiters loved the transparency: 'You know what you know, and you know what you don't. That's mature.' Bharati got hired. Document your journey.</p>" +
      "<p>Add a new section to index.html with id='learning'. Inside, include an h2 heading 'My Learning Journey', a short intro paragraph about honest skill assessment, and a grid of certificate cards. Each card should show an emoji icon, the course/certification name, a short description of what you learned, and tech stack tags. Create cards for: IT Fresher Hub Capstone (Python, Flask, SQLite, Git, CI/CD), AWS Cloud Concepts (S3, EC2, IAM), and any other courses you've completed.</p>" +
      "<p>Add a second Chart.js chart — a radar chart (type: 'radar') that shows your skills across different domains in a web/spider shape. Define labels for domains like Backend, Frontend, Database, DevOps, Cloud, Security. Set your honest scores (0-100) for each. Configure with a dark background, grid lines in var(--border) colour, and point colours in var(--primary). A radar chart is visually striking and immediately communicates your skill profile at a glance. Remember: recruiters respect honest 65-70% scores over inflated 95% claims from freshers — they will test you in the interview.</p>",
    funFact:
      "The Dunning-Kruger effect shows that beginners often overestimate their skills while intermediate learners underestimate theirs. Recruiters have seen thousands of candidates and instantly spot inflated self-assessments. An honest 65% Python rating from a fresher is 10x more credible than a self-rated 95%.",
    xpReward: 130,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why do recruiters prefer honest skill self-assessments over inflated ones in a portfolio?",
      options: [
        "They do not — higher scores always impress more",
        "Honest assessments demonstrate self-awareness and prevent mismatches in technical interviews",
        "LinkedIn requires honest assessments for profile completion",
        "Inflated scores disqualify you from applicant tracking systems",
      ],
      correctAnswer:
        "Honest assessments demonstrate self-awareness and prevent mismatches in technical interviews",
      explanation:
        "Claiming 95% Python proficiency as a fresher leads to a technical interview where the interviewer quickly discovers the gap — destroying trust immediately. An honest 65-70% rating says 'I know what I know and I'm growing' — exactly what great teams want in a new hire.",
    },
  },

  {
    title: "Creating Your Project Showcase Video",
    content:
      "<p>When Farid applied for a role, his application email contained: 'Live demo: [link] | GitHub: [link] | 2-min walkthrough: [YouTube link].' The hiring manager said in the interview: 'I've never received a video demo from a fresher before. I watched it three times.' A 2-minute video costs nothing to make and sets you apart from 99% of applicants.</p>" +
      "<p>Install Loom for free from https://loom.com — it records your screen and webcam simultaneously. Plan a strict 2-minute script: 0:00-0:15 introduction (name + project summary), 0:15-0:45 frontend walkthrough (scroll through the live site, hover on cards to show transitions), 0:45-1:15 backend demo (show the Flask API responses at /api/skills and /api/projects), 1:15-1:35 GitHub walkthrough (repo structure, README, Actions CI green checkmarks), 1:35-1:50 database demo (open SQLite viewer in VS Code, show the tables and data), 1:50-2:00 closing (GitHub link, availability for roles, city).</p>" +
      "<p>Practice the walkthrough twice before recording. Keep it conversational — show, don't explain. Record with Loom, export the video, and upload to YouTube with the title 'My Full-Stack Portfolio Demo | Python + Flask + SQL | IT Fresher'. Set it to Unlisted (accessible via link, not searchable). Copy the YouTube URL. In index.html, add an iframe embed for the video below your projects section. Add the YouTube link to your README, LinkedIn Featured section, and application emails.</p>",
    funFact:
      "YouTube is the second largest search engine in the world after Google. Job seekers who include a professional demo video in applications receive 34% more callbacks according to LinkedIn's own research. Video humanises your application in a sea of identical text resumes.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why should your portfolio demo video be uploaded as 'Unlisted' on YouTube instead of 'Private'?",
      options: [
        "Private videos cannot be embedded in websites",
        "Unlisted means anyone with the link can watch without a YouTube account, while Private requires specific account invitations",
        "Unlisted videos get better recommendations from the YouTube algorithm",
        "Private videos have lower video quality",
      ],
      correctAnswer:
        "Unlisted means anyone with the link can watch without a YouTube account, while Private requires specific account invitations",
      explanation:
        "Private videos require the viewer to be explicitly invited — impractical for job applications. Unlisted videos are accessible to anyone with the link (like recruiters) without any setup. Public would expose your details in YouTube search results unnecessarily.",
    },
  },

  {
    title: "Writing a Blog Post About Your Journey",
    content:
      "<p>Gayatri wrote a Hashnode blog post: 'How I Built My First Full-Stack Portfolio as an IT Fresher.' It got 3,000 reads in a week. A CTO commented: 'This is exactly the right mindset for a new developer.' Two freelance projects and one internship offer followed, all from people who found her through the blog post. Writing about what you build is the highest-leverage career move almost no fresher makes.</p>" +
      "<p>Create your blog on Hashnode (https://hashnode.com) — it's developer-focused, articles rank well on Google, and you can eventually map it to your own domain. Your first post title: <strong>'How I Built My First Full-Stack Portfolio From Scratch (As an IT Fresher)'</strong>. Structure it as: (1) What I Built — include a screenshot of your live portfolio. (2) The Challenge — explain why you needed a portfolio as a fresher with no work experience. (3) What I Learned — list 5 specific technical lessons: full-stack integration, database design, deployment, CI/CD, security. (4) The Hardest Part — be honest, this builds credibility. (5) Live Demo and Code — all three links (Netlify, GitHub, YouTube).</p>" +
      "<p>End with 'What's Next' listing your learning goals — this shows a growth mindset which is the #1 thing senior engineers look for in freshers. Publish it, share the post on LinkedIn with hashtags #Python #WebDev #FreshersOfLinkedIn #100DaysOfCode. Add the blog post link to your portfolio and resume. Each blog post you write is permanent, searchable content working 24/7 to bring opportunities to you.</p>",
    funFact:
      "The developer community says 'Learn in public.' Documenting your projects attracts job offers, mentors, collaborators, and freelance clients. Patrick McKenzie famously said 'You are almost certainly underinvesting in the documentation of your skills.'",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "What is the PRIMARY career benefit of writing a blog post about your portfolio project?",
      options: [
        "Blog posts automatically appear on your resume",
        "Writing makes your code run faster",
        "It creates discoverable content that showcases your knowledge to people who never saw your job application",
        "It is required by LinkedIn for profile completion",
      ],
      correctAnswer:
        "It creates discoverable content that showcases your knowledge to people who never saw your job application",
      explanation:
        "A good technical blog post gets indexed by Google, shared in developer communities, and found by people specifically searching for what you've built. This is inbound discovery — recruiters and companies find YOU rather than you finding them. It's permanent, compounding career leverage.",
    },
  },

  {
    title: "Interview Preparation: Explaining Your Project",
    content:
      "<p>Nikhil had a great portfolio but froze in the interview when asked: 'Walk me through your project architecture.' He stammered and couldn't clearly explain why he chose Flask over Django. The technical knowledge was there — the articulation wasn't. Preparation turns great projects into great interviews.</p>" +
      "<p>Practice answering these questions out loud — record yourself and listen back. <strong>'Tell me about a project you've built':</strong> 'I built a full-stack personal portfolio website. The frontend is HTML, CSS, and JavaScript. The backend is a Python Flask REST API connected to an SQLite database. I deployed the frontend on Netlify and the backend on Render. I also set up a GitHub Actions CI/CD pipeline. The live demo is at [URL].' <strong>'Why Flask over Django?':</strong> 'For a portfolio backend with 3-4 endpoints, Django's full ORM and admin panel would be overkill. Flask's micro-framework approach let me build exactly what I needed. For a larger project with user auth and complex models, I'd reconsider Django.'</p>" +
      "<p><strong>'How does your frontend talk to your backend?':</strong> 'The JavaScript frontend uses the Fetch API to make HTTP GET requests to Flask endpoints. For the contact form it sends POST with a JSON body. Flask validates fields, inserts to SQLite, and returns JSON. I enabled CORS so the browser allows cross-origin requests.' <strong>'What would you do differently?':</strong> 'Add proper auth, use PostgreSQL for production scalability, input sanitisation to prevent SQL injection, and write unit tests before application logic — test-driven development.' <strong>'Show me a bug you fixed':</strong> prepare one real example from your build process. Practise until the answers feel natural, not memorised.</p>",
    funFact:
      "Research by LinkedIn found that 87% of hiring managers say communication skills are as important as technical skills for developer roles. Companies want people who can explain what they built, why they built it, and what trade-offs they made.",
    xpReward: 150,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In an interview, after explaining your project, what is the BEST way to close your answer?",
      options: [
        "'That is everything I built.' and wait silently",
        "'I know this is simple compared to your team's work.'",
        "'Would you like me to walk you through the live demo or the code on GitHub?'",
        "'I am still learning and there is a lot I do not know yet.'",
      ],
      correctAnswer:
        "'Would you like me to walk you through the live demo or the code on GitHub?'",
      explanation:
        "Offering a live demo invitation shows confidence and puts your portfolio immediately in the interviewer's hands. It turns a passive answer into an interactive session — and you control the narrative of what they see. It signals preparation: you came ready to demonstrate, not just describe.",
    },
  },

  {
    title: "Getting Peer Review & Feedback",
    content:
      "<p>When Preeti showed her portfolio to a senior developer friend, he pointed out three things in 5 minutes that she'd missed in 3 weeks of building: a console error on mobile, a potential SQL injection in one query, and a colour contrast issue making text hard to read. Peer review doesn't criticise your work — it makes it bulletproof.</p>" +
      "<p>Create a 'Review Request' GitHub Issue in your repo with title 'Code Review Request — Portfolio v1.0'. In the body, list the live demo URL, and specific questions: Are the Flask API endpoints RESTful? Are there any SQL injection risks? Any JavaScript anti-patterns? Is the README complete? Share this issue link in developer communities like r/learnprogramming, Dev.to, or any IT fresher Discord servers. You'll be surprised how many senior developers are happy to give brief feedback to freshers asking specific questions.</p>" +
      "<p>Also self-review with this checklist: no secrets in git history, SQL uses parameterized queries (? placeholders, never string concatenation), no console.log() left in production code, all images have alt attributes, all user inputs validated before database insert, error handling on all API endpoints, site tested at 375px / 768px / 1024px breakpoints, README setup instructions tested on a clean environment. For each improvement, create a new branch: <code>git checkout -b improvements/peer-review-fixes</code>, make changes, commit, push, and create a Pull Request — even for your own repo. This creates a professional record of your development process.</p>",
    funFact:
      "Code review was formally introduced by Michael Fagan at IBM in 1976. Studies show it catches 60-90% of software defects before production. At Google, every single line of code is reviewed by at least one other engineer before merging — no exceptions, regardless of seniority.",
    xpReward: 140,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Why is 'git checkout -b improvements/peer-review-fixes' better than making changes directly on the main branch?",
      options: [
        "It makes git commits faster",
        "It creates an isolated branch so if something breaks, main is unaffected and the changes can be discarded",
        "GitHub requires all improvements to be on separate branches",
        "It automatically emails reviewers when you commit",
      ],
      correctAnswer:
        "It creates an isolated branch so if something breaks, main is unaffected and the changes can be discarded",
      explanation:
        "The feature branch workflow is the standard Git practice in every professional team. Main is always production-ready. All new work happens on branches. If the work is good, you merge. If it's broken, you delete the branch — main is never affected. This is how GitHub Flow works.",
    },
  },

  {
    title: "Graduation: Your Complete Portfolio",
    content:
      "<p>You did it. Thirty lessons ago, you were Rahul — with knowledge but nothing to show. Today you are someone different. You have a live full-stack website, a Python backend with a real database, automated CI/CD, a GitHub profile with real commits, a LinkedIn post getting views, a demo video, and a blog post. This isn't a toy project — this is a production-grade portfolio that most 2-year-experienced developers don't have. Let's lock it in and launch.</p>" +
      "<p><strong>Final launch checklist — complete every item:</strong> Live Site: portfolio loads in under 3 seconds on mobile, all sections visible, skills chart renders from backend data, contact form submits successfully, all links work, HTTPS active, no console errors. GitHub: repository is Public, README has live demo link and screenshot, .gitignore committed with no secrets, CI Actions is green, at least 10 meaningful commit messages (not just 'update' or 'fix'), requirements.txt is current. Career Materials: LinkedIn Featured section has portfolio link, headline updated with tech keywords, YouTube demo video embedded, blog post published and shared, resume PDF updated with all three URLs (portfolio, GitHub, LinkedIn).</p>" +
      "<p><strong>Submit to job boards TODAY:</strong> Naukri.com — update resume and add portfolio URL in the Website/Portfolio field. LinkedIn — enable Open to Work with target roles: Junior Developer, Python Developer, Web Developer, IT Support, Junior Data Analyst. Internshala — apply for developer internships with your portfolio link in every application. AngelList — create account and list yourself as available for startup roles. Every day you wait is a day a recruiter can't find you. Your portfolio is live. Your code is on GitHub. Your video is on YouTube. Your story is on Hashnode. You are now fully discoverable. Go get that job.</p>",
    funFact:
      "The average time from posting a job on LinkedIn to receiving the first application is 47 minutes. Recruiters spend an average of 6-7 seconds scanning a resume before deciding to read further. Your portfolio link in those 7 seconds is the highest-value real estate on your entire resume. You've built that asset. Now use it.",
    xpReward: 200,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You have completed your portfolio and are ready to apply. What should you do TODAY to maximise responses?",
      options: [
        "Keep polishing the portfolio for another month before sharing it",
        "Apply to 100 jobs in one day through automated tools",
        "Update LinkedIn with live demo link, enable Open to Work, apply to 5-10 targeted roles with portfolio link, and post on LinkedIn",
        "Wait for recruiters to find your portfolio organically",
      ],
      correctAnswer:
        "Update LinkedIn with live demo link, enable Open to Work, apply to 5-10 targeted roles with portfolio link, and post on LinkedIn",
      explanation:
        "Perfection is the enemy of launched. A live portfolio that is 80% perfect and actively promoted beats a 100% perfect portfolio that is hidden. Quality-targeted applications with portfolio links outperform mass-blasting by 5-10x in callback rate. Start today — every day you wait is a day a recruiter cannot find you.",
    },
  },

  // ===== NEW LESSONS: Indices 15–21 =====

  {
    title: "Adding a Real-Time Search Feature",
    content:
      "<p>Rahul's portfolio has 8 projects now. His recruiter says: 'Can you filter these by tech stack?' Rahul stares at his screen. The projects are just a hardcoded HTML list. Adding search seems complex — but it's actually one JavaScript function away.</p>" +
      '<p><strong>How it works:</strong> Every project card in your HTML has a <code>data-tags</code> attribute listing its tech stack, e.g., <code>data-tags="python flask sqlite"”</code>. Your search input listens for the <code>input</code> event. On every keystroke, it reads the current value, converts it to lowercase, then loops over all project cards and hides those whose tags don\'t include the search string.</p>' +
      '<p><strong>Step 1 — Add data attributes to your project cards:</strong> <code>&lt;div class="project-card" data-tags="python flask sqlite api"&gt;</code>. Include all relevant keywords: language, framework, database, deployment platform. <strong>Step 2 — Add the search input in your HTML:</strong> <code>&lt;input id="project-search" type="search" placeholder="Filter by tech (e.g. python, flask)"&gt;</code>. <strong>Step 3 — Write the filter function:</strong></p>' +
      "<p><code>document.getElementById('project-search').addEventListener('input', function() { const query = this.value.toLowerCase().trim(); document.querySelectorAll('.project-card').forEach(card => { const tags = card.dataset.tags || ''; card.style.display = tags.includes(query) || query === '' ? 'block' : 'none'; }); });</code></p>" +
      "<p>This is DOM manipulation — reading and modifying the browser's live HTML tree with JavaScript. It's the core skill behind every interactive webpage. Test it: type 'python' and only Python projects should appear. Type 'flask' and only Flask projects. Clear the input and all projects return. Add a results count too: <code>const visible = [...cards].filter(c => c.style.display !== 'none').length; document.getElementById('result-count').textContent = visible + ' projects found';</code></p>",
    funFact:
      "JavaScript's querySelector is called over 1 trillion times per day across all websites globally. Every time you type in a search bar, filter a dropdown, or see live results — DOM manipulation is running behind the scenes.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "You want a project card to disappear from the page without deleting it from the HTML. Which JavaScript property should you change?",
      options: [
        "card.innerHTML = ''",
        "card.style.display = 'none'",
        "card.remove()",
        "card.setAttribute('hidden', true)",
      ],
      correctAnswer: "card.style.display = 'none'",
      explanation:
        "Setting display to 'none' hides the element visually while keeping it in the DOM. You can restore it with display = 'block' anytime — perfect for filters. card.remove() deletes it permanently. card.innerHTML = '' clears its contents but leaves an empty container. The hidden attribute also works but display is more commonly used for dynamic show/hide logic.",
    },
  },

  {
    title: "Building a Contact Form with Email Notifications",
    content:
      "<p>Priya's portfolio is live but recruiters have no way to reach her directly from the site. She adds her email address in plain text — within two days she's getting spam. The right solution is a contact form that sends emails without exposing her address and without requiring her own server. Enter Formspree.</p>" +
      "<p><strong>What is Formspree?</strong> Formspree.io is a free service that accepts HTML form submissions and emails them to your address — no backend code needed. Your form submits to Formspree's server via HTTP POST, and Formspree emails the content to you. Free tier: 50 submissions per month.</p>" +
      "<p><strong>Step 1 — Create your Formspree form:</strong> Go to https://formspree.io, sign up with your email, click 'New Form', give it a name like 'Portfolio Contact'. You'll get a unique endpoint URL like <code>https://formspree.io/f/xpzgkwnb</code>.</p>" +
      "<p><strong>Step 2 — Build the HTML form:</strong></p>" +
      '<p><code>&lt;form action="https://formspree.io/f/YOUR-ID" method="POST" id="contact-form"&gt; &lt;input type="text" name="name" required placeholder="Your name"&gt; &lt;input type="email" name="email" required placeholder="your@email.com"&gt; &lt;textarea name="message" required placeholder="Your message..."&gt;&lt;/textarea&gt; &lt;button type="submit"&gt;Send Message&lt;/button&gt; &lt;/form&gt;</code></p>' +
      '<p><strong>Step 3 — Add validation:</strong> The <code>required</code> attribute handles blank fields. For email format, use <code>type="email"</code> — the browser validates the format automatically. For a friendly success/error message after submission, add a hidden result div and toggle it in JavaScript using the form\'s <code>submit</code> event with <code>fetch()</code> to submit asynchronously. <strong>Never put your real email in the form action</strong> — Formspree handles the routing securely.</p>',
    funFact:
      "The first email was sent in 1971 by Ray Tomlinson, who also invented the @ symbol convention. Contact forms became popular in the early 2000s as a way to prevent email harvesting bots from scraping plain-text email addresses from websites — a problem that still exists today.",
    xpReward: 155,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which HTTP method should a contact form use to submit data to a server?",
      options: [
        "GET — appends data to the URL",
        "POST — sends data in the request body",
        "PUT — updates existing data",
        "DELETE — removes a resource",
      ],
      correctAnswer: "POST — sends data in the request body",
      explanation:
        "POST sends form data in the HTTP request body, not in the URL. This keeps the data out of browser history and server logs, handles long messages correctly, and prevents sensitive info from appearing in URLs. GET is only for retrieving data (like search queries) — never for submitting personal information.",
    },
  },

  {
    title: "Adding Dark Mode to Your Portfolio",
    content:
      "<p>Ankit's recruiter opens his portfolio at 11pm. The white background is blinding. Two seconds later the tab is closed. Dark mode is no longer a nice-to-have — it's an accessibility and UX expectation. Here's how to add it cleanly in 15 minutes using CSS custom properties and a single JavaScript toggle.</p>" +
      "<p><strong>Step 1 — Define CSS variables for both themes:</strong></p>" +
      "<p><code>:root { --bg-color: #ffffff; --text-color: #1a1a2e; --card-bg: #f4f4f8; --accent: #6d28d9; } :root.dark { --bg-color: #0f0f1a; --text-color: #e8e8f0; --card-bg: #1a1a2e; --accent: #a78bfa; }</code></p>" +
      "<p>Now use these variables everywhere in your CSS instead of hardcoded colors: <code>body { background-color: var(--bg-color); color: var(--text-color); }</code>. When you add the <code>dark</code> class to <code>&lt;html&gt;</code>, all variables switch instantly — the entire page repaints with zero duplication.</p>" +
      '<p><strong>Step 2 — Add the toggle button:</strong> <code>&lt;button id="theme-toggle" aria-label="Toggle dark mode"&gt;🌙&lt;/button&gt;</code>. <strong>Step 3 — Write the toggle function:</strong></p>' +
      "<p><code>const toggle = document.getElementById('theme-toggle'); const root = document.documentElement; const saved = localStorage.getItem('theme'); if (saved === 'dark') { root.classList.add('dark'); toggle.textContent = '☀️'; } toggle.addEventListener('click', () => { const isDark = root.classList.toggle('dark'); localStorage.setItem('theme', isDark ? 'dark' : 'light'); toggle.textContent = isDark ? '☀️' : '🌙'; });</code></p>" +
      "<p>localStorage persists the user's preference across page reloads — so if a visitor chooses dark mode, it stays dark every time they return. Add a smooth transition: <code>body { transition: background-color 0.3s ease, color 0.3s ease; }</code>. Best practice: also check <code>window.matchMedia('(prefers-color-scheme: dark)')</code> on first load to respect the user's OS setting automatically.</p>",
    funFact:
      "Dark mode reduces battery usage by up to 63% on OLED screens (common on iPhones and Samsung Galaxy devices). Apple's 2019 iOS 13 dark mode update caused a 50% spike in dark mode adoption overnight. Today 82% of smartphone users prefer dark mode.",
    xpReward: 160,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which CSS feature lets you define a color once and reuse it everywhere, making theme switching possible without rewriting all your CSS?",
      options: [
        "CSS classes",
        "CSS custom properties (variables)",
        "CSS media queries",
        "CSS animations",
      ],
      correctAnswer: "CSS custom properties (variables)",
      explanation:
        "CSS custom properties (--variable-name) are like constants for your stylesheet. Define them in :root and use var(--variable-name) everywhere. When you change the variable's value (e.g. by adding a .dark class), every element using that variable updates instantly. Without variables, you'd have to change every hardcoded color value individually — practically impossible to maintain.",
    },
  },

  {
    title: "SEO Optimization for Your Portfolio",
    content:
      "<p>Sneha deployed her portfolio and shared the link. But when she Googled 'Sneha Python developer Mumbai', her site was nowhere. Six months later, Ankit's portfolio — with proper SEO — appears in Google's top 3 results for his name. The only difference: meta tags and semantic HTML.</p>" +
      "<p><strong>What is SEO?</strong> Search Engine Optimization tells Google and other search engines what your page is about, who it's for, and how to display it in search results. For a developer portfolio, good SEO means: (1) your name + 'developer' returns your site, (2) your LinkedIn preview shows a real title and description, (3) you appear in recruiter searches.</p>" +
      "<p><strong>Step 1 — Core meta tags in &lt;head&gt;:</strong></p>" +
      '<p><code>&lt;title&gt;Rahul Kumar — Python Developer & Full-Stack Engineer&lt;/title&gt; &lt;meta name="description" content="IT fresher with expertise in Python, Flask, SQL and AWS. Built 5+ real projects. Open to junior developer roles in Bengaluru."&gt; &lt;meta name="keywords" content="python developer, flask, SQL, AWS, fresher, full-stack, portfolio"&gt;</code></p>' +
      "<p><strong>Step 2 — Open Graph tags for social sharing:</strong></p>" +
      '<p><code>&lt;meta property="og:title" content="Rahul Kumar — Python Developer"&gt; &lt;meta property="og:description" content="Full-stack portfolio with Flask API, SQLite database and live Netlify deployment"&gt; &lt;meta property="og:image" content="https://yoursite.netlify.app/preview.png"&gt; &lt;meta property="og:url" content="https://yoursite.netlify.app"&gt;</code></p>' +
      "<p>These tags control what appears when someone shares your link on LinkedIn, WhatsApp, or Twitter. Without them, those platforms show blank previews. <strong>Step 3 — Semantic HTML:</strong> Use <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code> instead of generic <code>&lt;div&gt;</code> everywhere. Google uses these tags to understand page structure. Finally, add a <code>sitemap.xml</code> in your root with your portfolio URL — this tells Google to crawl your site faster.</p>",
    funFact:
      "Google processes over 8.5 billion searches per day. Being on the first page of results gets 10x more clicks than being on the second page. For developer portfolios, even a name search returning your site in the top 3 can be the difference between getting a callback or not.",
    xpReward: 155,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "Which HTML tag controls how your portfolio link appears when shared on LinkedIn or WhatsApp — showing a custom title, description and image preview?",
      options: [
        '&lt;meta name="keywords"&gt;',
        '&lt;meta property="og:image"&gt;',
        "Open Graph meta tags",
        "&lt;title&gt; tag",
      ],
      correctAnswer: "Open Graph meta tags",
      explanation:
        "Open Graph (og:) meta tags are read by social platforms to generate link previews. og:title sets the preview title, og:description the caption, og:image the thumbnail. Without them, LinkedIn shows a blank card when someone shares your portfolio link — which looks unprofessional. All major platforms (LinkedIn, WhatsApp, Slack, Twitter) support Open Graph.",
    },
  },

  {
    title: "Making Your Portfolio Mobile-Responsive",
    content:
      "<p>Priya emails her portfolio link to a recruiter. The recruiter opens it on their phone during commute. The text is tiny, the project cards overflow the screen, and the navigation requires zooming in. The recruiter closes it immediately. Over 60% of web traffic is now mobile — a portfolio that isn't responsive is a portfolio that fails half its viewers.</p>" +
      "<p><strong>Core concept: CSS Media Queries.</strong> A media query applies CSS rules only when the screen width matches a condition. The most common breakpoint: <code>@media (max-width: 768px) { ... }</code> — rules inside apply only on screens narrower than 768px (tablets and phones).</p>" +
      '<p><strong>Step 1 — Set the viewport meta tag (required):</strong> <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>. Without this, mobile browsers zoom out to fit the desktop layout — everything looks tiny. <strong>Step 2 — Make your project grid responsive:</strong></p>' +
      "<p><code>.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; } @media (max-width: 768px) { .projects-grid { grid-template-columns: 1fr; } }</code></p>" +
      "<p>On desktop: 3 columns. On mobile: 1 column (full width). This is 5 lines of CSS. <strong>Step 3 — Flexible typography:</strong> <code>h1 { font-size: clamp(1.5rem, 5vw, 3rem); }</code>. The <code>clamp(min, preferred, max)</code> function makes font sizes fluid — they scale between 1.5rem and 3rem based on viewport width, no media query needed. <strong>Test it:</strong> Open Chrome DevTools, press Ctrl+Shift+M to toggle device toolbar. Test your portfolio at iPhone SE (375px), iPad (768px), and desktop (1280px). Every section should be readable and usable at all three breakpoints.</p>",
    funFact:
      "In 2016, Google switched to mobile-first indexing, meaning Google now crawls and ranks your site based on its mobile version, not desktop. A portfolio that breaks on mobile doesn't just frustrate users — it also ranks lower in Google search results.",
    xpReward: 165,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "Complete the media query to apply styles only on screens narrower than 768px: @media (max-width: ___px) { ... }",
      correctAnswer: "768",
      explanation:
        "768px is the standard breakpoint for tablets and phones. Screens narrower than 768px are typically phones (320–414px) and small tablets. Common breakpoints: 480px (small phones), 768px (tablets), 1024px (small laptops), 1280px (desktop). Always test at real device sizes, not just arbitrary numbers.",
    },
  },

  {
    title: "Writing Unit Tests for Your Flask API",
    content:
      "<p>Rahul pushes a fix to his Flask API on a Friday afternoon. He didn't test one edge case — an empty message body on the contact form. By Monday, the contact form is broken and he doesn't know when it broke. In every MNC, this scenario is prevented by unit tests that run automatically on every push. Welcome to test-driven thinking.</p>" +
      "<p><strong>Why testing matters in a corporate environment:</strong> At TCS, Infosys, Amazon — code with no tests doesn't get merged. Tests are documentation that never lies: they show exactly what your code is supposed to do and prove it actually does it. A suite of tests also lets you refactor fearlessly — if all tests pass after a change, the behavior is preserved.</p>" +
      "<p><strong>Setting up pytest for Flask:</strong> <code>pip install pytest</code>. Create a file <code>test_app.py</code> in your project root. Flask has a built-in test client that lets you make real HTTP requests to your app without running a server:</p>" +
      "<p><code>import pytest\nfrom app import app\n\n@pytest.fixture\ndef client():\n    app.config['TESTING'] = True\n    with app.test_client() as client:\n        yield client\n\ndef test_health_check(client):\n    response = client.get('/api/health')\n    assert response.status_code == 200\n\ndef test_get_skills_returns_list(client):\n    response = client.get('/api/skills')\n    assert response.status_code == 200\n    data = response.get_json()\n    assert isinstance(data, list)\n    assert len(data) &gt; 0\n\ndef test_contact_form_missing_fields_returns_400(client):\n    response = client.post('/api/contact', json={})\n    assert response.status_code == 400\n\ndef test_contact_form_valid_submission(client):\n    payload = {'name': 'Test', 'email': 'test@test.com', 'message': 'Hello'}\n    response = client.post('/api/contact', json=payload)\n    assert response.status_code == 200</code></p>" +
      "<p>Run with: <code>pytest -v</code>. The <code>-v</code> flag shows each test name with pass/fail. Add your test command to GitHub Actions so tests run on every push — add <code>- run: pytest</code> to your CI workflow. If any test fails, the build is marked red and the broken code is caught before it reaches production.</p>",
    funFact:
      "Netflix runs over 4,000 automated tests before every production deployment. Amazon deploys new code every 11.7 seconds on average — only possible because automated tests catch regressions instantly. At Google, engineers write tests before writing the actual feature code (test-driven development, or TDD).",
    xpReward: 170,
    miniChallenge: {
      type: "fillInBlank",
      question:
        "What command runs pytest and shows each test name with its pass/fail status?",
      correctAnswer: "pytest -v",
      explanation:
        "pytest -v runs pytest in verbose mode, printing each test function name alongside PASSED or FAILED. Without -v, pytest just shows dots (.) for passed tests and F for failures — useful for large test suites. The -v flag is standard practice during development so you can see exactly which tests pass and which need fixing.",
    },
  },

  {
    title: "Monitoring and Logging Your Live App",
    content:
      "<p>Priya's portfolio backend on Render has been live for a week. A friend tries to submit the contact form and gets a 500 error. Priya has no idea — there's no alert, no email, no log she's been watching. In a corporate environment, silent failures cost thousands of dollars per minute. Monitoring and logging are non-negotiable production practices.</p>" +
      "<p><strong>Part 1 — Logging in Flask:</strong> Python's built-in <code>logging</code> module sends structured messages to a log file or console. Add this to your <code>app.py</code>:</p>" +
      "<p><code>import logging\nlogging.basicConfig(\n    level=logging.INFO,\n    format='%(asctime)s %(levelname)s %(name)s: %(message)s'\n)\nlogger = logging.getLogger(__name__)\n\n@app.route('/api/contact', methods=['POST'])\ndef contact():\n    try:\n        data = request.get_json()\n        logger.info(f\"Contact form received from {data.get('email')}\"  )\n        # ... process form ...\n        return jsonify({'status': 'ok'})\n    except Exception as e:\n        logger.error(f\"Contact form error: {e}\", exc_info=True)\n        return jsonify({'error': 'Internal error'}), 500</code></p>" +
      "<p><strong>Log levels (memorize these):</strong> DEBUG — detailed diagnostic info (dev only). INFO — normal operations (request received, form submitted). WARNING — something unexpected but recoverable. ERROR — a function failed but the app continues. CRITICAL — app may crash. Only log ERROR or CRITICAL for unexpected failures. Log INFO for important business events (new contact form submission, user registered).</p>" +
      "<p><strong>Part 2 — Uptime monitoring with UptimeRobot:</strong> Go to https://uptimerobot.com, create a free account, click 'Add New Monitor', choose 'HTTP(s)', enter your Render backend URL (e.g., <code>https://my-portfolio-api.onrender.com/api/health</code>), set check interval to 5 minutes. UptimeRobot pings your URL every 5 minutes and emails you within 2 minutes if it goes down. Free tier: 50 monitors. Add a <code>/api/health</code> endpoint to Flask that just returns <code>{\"status\": \"ok\"}</code> with a 200 — this is the URL UptimeRobot checks. To view your Render logs: go to Render Dashboard → your service → Logs tab. You'll see every print statement and log message in real time.</p>",
    funFact:
      "Amazon famously calculated that every 100ms of added latency costs them 1% in sales. Facebook's site reliability team monitors over 100 million metrics per second. Even for a personal project, uptime monitoring shows recruiters that you understand production engineering — not just development.",
    xpReward: 175,
    miniChallenge: {
      type: "multipleChoice",
      question:
        "In Python's logging module, which log level should you use when an unexpected exception occurs in a function but the app can continue running?",
      options: ["DEBUG", "INFO", "WARNING", "ERROR"],
      correctAnswer: "ERROR",
      explanation:
        "ERROR is the correct level for unexpected exceptions that cause a function to fail. INFO is for normal operations (user submitted form). WARNING is for unexpected but handled situations (input was empty, using default value). DEBUG is for detailed internal state during development. CRITICAL is reserved for situations where the app itself may crash (database connection lost, out of disk space).",
    },
  },
];
