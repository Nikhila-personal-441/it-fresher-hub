import { l as createLucideIcon, j as jsxRuntimeExports, q as Lock, y as cn, o as useParams, r as reactExports, b as useSubscription, L as Link, P as PaywallModal, i as Badge, g as Button, k as Crown, Z as Zap, p as CircleCheck } from "./index-Cmp-4xpj.js";
import { A as ArrowLeft } from "./arrow-left-IuyNjtYk.js";
import { C as CircleX } from "./circle-x-BUEJDAIo.js";
import { T as Trophy } from "./trophy-C4FON7Sw.js";
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  ["path", { d: "M12 16h.01", key: "1drbdi" }]
];
const ShieldAlert = createLucideIcon("shield-alert", __iconNode);
function ContentProtectionNotice({
  className,
  compact = false
}) {
  if (compact) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "span",
      {
        className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider bg-[oklch(var(--confidential-stamp)/0.12)] text-[oklch(var(--confidential-stamp))] border border-[oklch(var(--confidential-stamp)/0.35)]",
        "data-ocid": "content-protection-compact",
        "aria-label": "Confidential content — screenshot protection active",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-3 h-3" }),
          "Confidential"
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex items-start gap-3 px-4 py-3 rounded-lg border-2 border-[oklch(var(--confidential-stamp)/0.4)] bg-[oklch(var(--confidential-stamp)/0.06)]",
        className
      ),
      "data-ocid": "content-protection-notice",
      "aria-label": "Content protection notice",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-8 h-8 rounded-lg bg-[oklch(var(--confidential-stamp)/0.12)] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-[oklch(var(--confidential-stamp))]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-[oklch(var(--confidential-stamp))]", children: "🔒 Confidential" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-[oklch(var(--confidential-stamp)/0.8)] bg-[oklch(var(--confidential-stamp)/0.12)] px-2 py-0.5 rounded-full border border-[oklch(var(--confidential-stamp)/0.25)]", children: "Screenshot protection active" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-[oklch(var(--confidential-stamp)/0.85)] leading-snug", children: "This content is proprietary and licensed to you personally. Reproduction, sharing, or redistribution of any form is strictly prohibited." })
        ] })
      ]
    }
  );
}
function Para({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed mb-3", children });
}
function ScenarioBox({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 bg-[oklch(var(--corporate-accent)/0.06)] border-l-4 border-[oklch(var(--corporate-accent)/0.5)] rounded-r-lg p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[oklch(var(--corporate-accent))] mb-1.5", children: "📋 Real Scenario" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children })
  ] });
}
function TermBox({
  term,
  definition,
  example
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 p-3 rounded-lg bg-muted/40 border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground text-sm", children: [
      term,
      ": "
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: definition }),
    example && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs text-foreground/70 italic", children: [
      '💬 "',
      example,
      '"'
    ] })
  ] });
}
function TipBox({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 bg-[oklch(var(--capstone-accent)/0.06)] border border-[oklch(var(--capstone-accent)/0.3)] rounded-lg p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-[oklch(var(--capstone-accent))] mb-1.5", children: "💡 Pro Tip" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children })
  ] });
}
const ROLES_LESSONS = [
  {
    title: "The Builders — Developers",
    emoji: "💻",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Developers write the code that makes software work. A bank is building a mobile app — the Developer is the person who converts design mockups into a working, clickable app." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "Priya, a backend developer at a fintech company, gets a JIRA story:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"As a user, I want to see my last 5 transactions."' }),
        " She writes a REST API that fetches data from the database, tests it locally, pushes her code to GitHub, and raises a Pull Request for code review. Her frontend colleague builds the UI screen. Together, they deliver the feature in 2 days."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Types of Developers:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-foreground space-y-1.5 mb-3 ml-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Frontend Developer" }),
          " — Builds what users see. Uses React, Angular, or Vue."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Backend Developer" }),
          " — Builds server logic, APIs, databases. Uses Java, Python, Node.js."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Full-Stack Developer" }),
          " — Does both frontend & backend."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Mobile Developer" }),
          " — Builds Android/iOS apps."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "Developers report to a Team Lead, who reviews code and assigns stories. Always ask for code review — even senior developers get reviews. It's a learning opportunity, not a judgment." })
    ] })
  },
  {
    title: "The Gatekeepers — Testers & QA Engineers",
    emoji: "🔍",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "QA (Quality Assurance) Engineers ensure the software works correctly before it reaches real users. No software reaches production without passing through QA. Their superpower? Finding bugs before customers do." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "Imagine your team just finished building an online banking app. Here's how testers would test it:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Unit Testing:" }),
        ' Ravi tests the "calculateInterest" function in isolation. Input: ₹10,000 at 5% for 1 year. Expected output: ₹500. ✅ Pass.',
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Integration Testing:" }),
        " The login API connects to the database. Ravi tests: Does the login API actually fetch the correct user profile from the DB? One component alone works — but do they work together?",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "System Testing:" }),
        " The full app is tested end-to-end. Ravi logs in, checks balance, transfers ₹1,000, logs out. All screens in sequence.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "UAT (User Acceptance Testing):" }),
        ' The actual bank employees (not QA) test the app. They say: "The font is too small on the transfer screen." This gets fixed before go-live.',
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Regression Testing:" }),
        " After Priya fixes the login bug, Ravi re-runs ALL previous tests to make sure the fix didn't break anything else.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Performance Testing:" }),
        " Using JMeter, Ravi simulates 10,000 users hitting the login page simultaneously. The app must respond in under 2 seconds.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Security Testing:" }),
        " Ravi tries SQL injection on the login form: entering",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-muted px-1 rounded text-xs", children: `' OR 1=1 --` }),
        " ",
        "as a password. If the app doesn't break, the security test passes."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        'Ravi finds a critical bug: when a user has ₹0 balance, the app crashes instead of showing "Insufficient funds." He raises a',
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "defect" }),
        " in JIRA with priority",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Showstopper" }),
        " — this blocks the release until fixed."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "Manual Testing + Automation (Selenium/Cypress) + API Testing (Postman) are the 3 skills every tester needs. ISTQB certification is the industry standard for QA professionals." })
    ] })
  },
  {
    title: "Business Analyst & Project Manager",
    emoji: "📊",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Business Analyst (BA)" }),
        " bridges the gap between what the business wants and what the tech team builds. They gather requirements, write detailed specifications, and ensure everyone is aligned."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "A hospital wants a patient management system. The BA meets with doctors, nurses, and admins to understand their needs. She documents:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"A nurse must be able to view all patients on her ward, sorted by room number, with real-time medication alerts."' }),
        " ",
        "Without the BA, developers would build what they ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "think" }),
        " the hospital wants — and get it wrong."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        "The ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Project Manager (PM)" }),
        " owns the timeline, budget, and delivery. They track milestones, manage stakeholder communication, and remove blockers."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioBox, { children: `Sprint 3 is at risk — the vendor hasn't delivered the payment gateway API. The PM immediately escalates to the vendor's account manager, updates the project schedule, and sends a risk report to the client. "We may need 3 extra days — here's our mitigation plan." Clients appreciate transparency.` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "In Agile companies, the BA role often merges with the Product Owner role. Learning tools like Confluence (for requirement docs) and JIRA (for tracking stories) makes you a valuable BA from day one." })
    ] })
  },
  {
    title: "Admin, DBA, Network & Security",
    emoji: "🔧",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "These are the backbone roles — invisible when working, critical when they fail." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "System Administrator (SysAdmin):" }),
        " Manages servers, operating systems, and infrastructure. When a server goes down at 3 AM, the SysAdmin gets the alert and brings it back up."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioBox, { children: "Day 1 at work — the Admin team creates Priya's laptop image, email ID, VPN access, GitHub repository access, and JIRA account. Without them, she can't work. Admin also handles access revocation when someone leaves — critical for security." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Database Administrator (DBA):" }),
        " Manages the database — performance tuning, backups, access control, schema changes. When a query is taking 30 seconds instead of 0.5 seconds, the DBA optimizes it."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Network Engineer:" }),
        " Manages routers, switches, firewalls, and VPNs. Ensures data flows securely and fast between offices, data centers, and the cloud."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Security Analyst:" }),
        " Monitors for threats, investigates incidents, and implements security policies. If an employee's laptop is infected with malware, the Security Analyst isolates it, removes the threat, and files an incident report."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: 'Cloud computing is merging many admin roles into "Cloud Ops." A traditional SysAdmin who learns AWS/Azure becomes a Cloud Engineer — one of the highest-demand roles today.' })
    ] })
  },
  {
    title: "DevOps Engineer — The Bridge Builder",
    emoji: "🚀",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "DevOps engineers bridge the gap between Development (writing code) and Operations (running infrastructure). Their mission: make software delivery faster, safer, and more reliable through automation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "Before DevOps: Priya finishes code on Friday. The Ops team deploys it manually on Sunday night. Something breaks. By Monday, customers are complaining.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "With DevOps: Priya pushes code to GitHub. An automated pipeline (CI/CD) instantly runs all tests, builds a Docker container, and deploys to the test environment. If all checks pass, it auto-deploys to production — in 15 minutes, with zero manual steps."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Key DevOps tools:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-foreground space-y-1.5 mb-3 ml-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Jenkins / GitHub Actions" }),
          " — CI/CD pipelines"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Docker" }),
          " — Package apps into containers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Kubernetes" }),
          " — Manage and scale containers"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Terraform" }),
          " — Infrastructure as Code (create servers with code)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔷 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Prometheus + Grafana" }),
          " — Monitoring & alerts"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "DevOps is one of the highest-paying IT tracks. A fresher who knows Linux, Git, Docker, and any CI/CD tool can land a DevOps role with 15-25 LPA potential in 3-5 years." })
    ] })
  },
  {
    title: "Support, Operations & Data Engineering",
    emoji: "🛡️",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Support Engineer (L1/L2/L3):" }),
        " The first line of defense when something goes wrong for customers."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        `A customer calls: "I can't log in to the banking app."`,
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "L1 Support" }),
        " tries basic fixes — password reset, clearing cache. SLA: 30 minutes.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Still broken → ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "L2 Support" }),
        " checks server logs, finds a backend timeout. SLA: 2 hours.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Root cause unknown → ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "L3 Support" }),
        " (actual Developers) get the escalation. They fix the code. SLA: 4 hours."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Operations Team:" }),
        " Ensures 24/7 uptime of all systems. They monitor dashboards, respond to alerts, perform scheduled maintenance, and execute deployment runbooks."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Data Engineer:" }),
        " Builds pipelines that move data from source systems (databases, APIs, CRMs) to data warehouses for analytics. They use tools like Spark, Kafka, Airflow, and platforms like Snowflake."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "Starting in L1 Support is a common entry point for freshers. In 6-12 months, with learning and certifications, you can move to L2, then into Development, DevOps, or Cloud roles. The key is staying curious and documenting everything you learn." })
    ] })
  },
  {
    title: "Team Lead, Scrum Master & Senior Leadership",
    emoji: "🎯",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Every team needs a navigator. As you grow in your career, you'll encounter these leadership roles — and eventually, become one." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Team Lead (TL):" }),
        " A senior technical person who guides the team's execution. Responsibilities: code reviews, technical decisions, unblocking the team, mentoring juniors."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioBox, { children: `Daily standup: Priya says, "I'm blocked — I'm waiting for the payment gateway credentials from the vendor." The Team Lead immediately emails the vendor and escalates to the PM. Within 2 hours, the blocker is resolved. Without the TL stepping in, Priya might wait 3 days.` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scrum Master:" }),
        " Facilitates the Agile/Scrum process. They run standups, sprint planning, retrospectives. They shield the team from external distractions and remove process blockers — not just technical ones."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Senior Leadership chain:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-foreground space-y-1.5 mb-3 ml-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "👤 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Manager" }),
          " — People management, client communication, delivery tracking"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "👤 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Senior Manager / Director" }),
          " — Department-level strategy"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "👤 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "VP of Engineering" }),
          " — Engineering-wide decisions"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "👤 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "CTO (Chief Technology Officer)" }),
          " — Sets the technology vision for the entire company"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "You don't need to be a manager to lead. Technical leadership (being the go-to person for a technology, writing great docs, mentoring others) is just as valued and often leads to faster salary growth." })
    ] })
  }
];
const CULTURE_LESSONS = [
  {
    title: "Waterfall vs Agile — Battle of Methodologies",
    emoji: "🔄",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Waterfall" }),
        " is the traditional, linear approach. Complete one phase fully before the next begins: Requirements → Design → Development → Testing → Deployment. Clear, structured — but inflexible."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "A government project builds a tax filing portal using Waterfall. All requirements are locked and documented for 6 months. Developers build for 8 months. Testing takes 3 months. Deployment in month 17.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Problem: By month 12, tax laws changed. But since requirements were locked, the changes cost ₹50 lakhs to incorporate and delayed the project by 4 more months. Waterfall punishes change."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agile" }),
        " is the modern approach. Work in short cycles called Sprints (2 weeks). Build a little → test a little → get feedback → repeat. Change is welcomed, not punished."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioBox, { children: "A startup builds their ride-sharing app using Agile. Sprint 1: User registration. Sprint 2: Map view. Sprint 3: After early users complain about the map UI, the team redesigns it in Sprint 4 — no big deal, it's just one sprint. By month 4, they have a working MVP and real user feedback driving every feature." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "90% of IT companies use Agile today. Some use a hybrid — fixed requirements (Waterfall) for regulated industries, but Agile sprints for development. The real skill is knowing when to apply each." })
    ] })
  },
  {
    title: "Scrum Framework — Roles, Ceremonies & Artifacts",
    emoji: "🏉",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Scrum is the world's most popular Agile framework. It has 3 roles, 4 ceremonies, and 3 artifacts that keep teams aligned and productive." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3 Scrum Roles:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-foreground space-y-1.5 mb-3 ml-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🎯 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Product Owner (PO):" }),
          " Decides WHAT to build. Maintains the Product Backlog. Represents the business."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "🔄 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scrum Master (SM):" }),
          " Ensures the Scrum process is followed. Removes blockers. Shields the team."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "💻 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Development Team:" }),
          " Self-organizing team of 5-9 people who build the product."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "4 Scrum Ceremonies:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "Sprint Planning (Monday, 2 hrs): PO presents top priorities from backlog. Team picks stories they can complete in 2 weeks. Each story gets story points (1, 2, 3, 5, 8, 13 — Fibonacci scale based on complexity).",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Daily Standup (Every day, 15 min): Each person answers 3 questions: 1) What did I do yesterday? 2) What will I do today? 3) Any blockers? Keep it short — parking lot discussions happen AFTER.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sprint Review (Last Friday, 1 hr): Team demos completed work to stakeholders. PO decides if it meets acceptance criteria. Feedback is captured for next sprint.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sprint Retrospective (Last Friday, 1 hr): Team reflects — What went well? What needs improvement? Action items are assigned to specific people with deadlines."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "In your first job, join standups, take notes, and ask questions after. The retrospective is the most underrated ceremony — it's where team culture is shaped." })
    ] })
  },
  {
    title: "Sprint Planning — Stories, Points & JIRA",
    emoji: "📋",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        "Sprint planning is where abstract goals become concrete work. A User Story is a requirement written from the user's perspective:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: '"As a [user], I want [feature] so that [benefit]."' })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "Payment module sprint planning:",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        'Story 1: "As a customer, I want to pay using UPI so I can complete checkout without a card." Story Points: 8 (complex — 3rd party integration).',
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        'Story 2: "As a customer, I want to see payment confirmation so I know my order was placed." Story Points: 3 (simple UI + email trigger).',
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        'Story 3: "As an admin, I want to refund a payment within 24 hours." Story Points: 5 (requires refund API + audit log).',
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Total: 16 story points = team's sprint capacity. Stories with more points are split into smaller sub-tasks in JIRA."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Popular Sprint Planning Tools:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "JIRA (Atlassian)",
            definition: "Industry standard for enterprise Agile teams. Every story, bug, epic, and sprint is tracked here.",
            example: "Move ticket PAY-342 to 'In Progress' and link it to the Epic 'Payment Gateway v2'"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Azure DevOps",
            definition: "Microsoft's project management + CI/CD platform. Popular in enterprises using Microsoft tech stack.",
            example: "Create a work item linked to the release pipeline"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Trello",
            definition: "Simple Kanban boards. Great for small teams and startups.",
            example: "Move the card from 'Doing' to 'Done' after Priya's PR gets merged"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TipBox, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scrum Master Certifications:" }),
        " CSM (Certified Scrum Master by Scrum Alliance) and PSM I (Professional Scrum Master by Scrum.org) are the two gold standards. Earning one adds ₹2-5 LPA to your salary and makes you stand out in any Agile team."
      ] })
    ] })
  },
  {
    title: "Collaboration Tools — The Digital Office",
    emoji: "💬",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Modern IT teams are distributed — some in the office, some at home, some in different countries. Collaboration tools are how the work gets done." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Microsoft Teams",
            definition: "The standard for large enterprises. Chat channels, video meetings, file sharing, and Office 365 integration. You'll use this daily at most MNCs.",
            example: "Join the #backend-team channel and post the deployment status update"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Slack",
            definition: "Preferred by startups and tech companies. Faster, more integrations (GitHub, JIRA, AWS alerts). Create channels per project.",
            example: "Ravi posted in #qa-alerts: 'PAY-342 failing in UAT — @Priya can you check?'"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "JIRA",
            definition: "Project management and bug tracking. Every task is a 'ticket'. Track status (To Do → In Progress → Review → Done).",
            example: "Assign PAY-342 back to Priya with comment: 'NullPointerException on line 47 of PaymentService.java'"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Confluence",
            definition: "Documentation wiki, companion to JIRA. Technical specs, runbooks, onboarding guides, meeting notes all live here.",
            example: "The deployment runbook for the payment module is in Confluence under /DevOps/Runbooks"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioBox, { children: 'Full collaboration scenario: Ravi spots a production bug. He posts in Slack #incidents: "Login API returning 500 for 10% of users." Priya creates a JIRA ticket (PROD-891, Priority: Critical). The Ops team checks the Grafana dashboard — CPU spike detected. They restart the service. Priya documents the root cause in Confluence. The Scrum Master updates the sprint — all in 45 minutes.' })
    ] })
  },
  {
    title: "Meetings & Minutes of Meeting (MOM)",
    emoji: "📝",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Meetings are the pulse of corporate work. Knowing how to run one — and document it — separates professionals from pretenders." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Common Meeting Types:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-foreground space-y-1.5 mb-4 ml-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "📅 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Daily Standup" }),
          " — 15 min. Status, blockers, plans."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "📅 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sprint Planning" }),
          " — 2 hrs. Assign stories for next sprint."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "📅 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sprint Review" }),
          " — 1 hr. Demo to stakeholders."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "📅 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Sprint Retrospective" }),
          " — 1 hr. Team improvement discussion."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "📅 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Client Status Call" }),
          " — Weekly update on milestones, risks, deliverables."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Para, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Minutes of Meeting (MOM)" }),
        " — After any important meeting, someone sends an email summarizing what was discussed, decisions taken, and action items with owners and deadlines."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 bg-card border border-border rounded-lg p-4 text-sm font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-2", children: "📄 Sample MOM — Payment Module Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-1", children: "Date: 14-Apr-2026 | Time: 11:00 AM | Location: Teams Meeting" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-3", children: "Attendees: Priya (Dev), Ravi (QA), Suresh (Manager), Anita (PM)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-xs mb-1", children: "Discussion Points:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs mb-2", children: [
          "1. Payment API intermittently failing in UAT — 12% error rate.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "2. Root cause identified: OAuth token expiring after 30 min, not refreshing.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "3. Fix estimated: 4 hours of dev work."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-xs mb-1", children: "Decisions:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-2", children: "Fix will be prioritized above sprint stories. UAT sign-off delayed by 1 day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-xs mb-1", children: "Action Items:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-xs", children: [
          "• Priya → Fix token refresh logic → by 16-Apr EOD",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Ravi → Retest payment flow in UAT → by 17-Apr noon",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Suresh → Inform client of 1-day delay → Today by 3 PM"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "Always volunteer to write the MOM in your early career. It forces you to understand the meeting deeply and builds your professional reputation. Managers notice people who take initiative with documentation." })
    ] })
  }
];
const TOOLS_LESSONS = [
  {
    title: "Communication Platforms — Slack, Teams & Chat",
    emoji: "💬",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "On Day 1, your manager will add you to the team's communication platform. These aren't just chat apps — they're how your team thinks, coordinates, and ships work." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Microsoft Teams",
            definition: "Used by 80%+ of large enterprises. Integrated with Outlook, SharePoint, and Office 365. Teams = Groups, Channels = Topics within a group.",
            example: "@Priya can you join the 'Backend Dev' channel and check the deployment status pinned message?"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Slack",
            definition: "Popular at startups and product companies. Faster, richer integrations. Bots can auto-post GitHub PR reviews, JIRA updates, and AWS alerts.",
            example: "Set up a /jira command in Slack to create tickets without opening a browser"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Google Chat",
            definition: "Google Workspace's collaboration tool. Spaces (like channels) and integrated with Google Meet, Docs, and Calendar.",
            example: "Share the meeting notes Google Doc directly in the team Space"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Zoom",
            definition: "Video conferencing gold standard. Better video quality and breakout rooms for large meetings. Often used for client calls and all-hands meetings.",
            example: "The client demo is on Zoom — join 5 minutes early and test your audio"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScenarioBox, { children: "Priya's first day: She's added to 7 Teams channels — #general, #backend-team, #deployments, #alerts, #sprint-3, #payment-module, and #fun-fridays. Her first task: read pinned messages, mute low-priority channels with notification filtering, and introduce herself in #general. Within an hour, she knows what the team is working on and who to contact for what." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: `Create a clear status (Away / In a meeting / Focused) and use it consistently. Colleagues respect your focus time when you signal it correctly. Never leave your status as "Available" when you're in a deep focus block.` })
    ] })
  },
  {
    title: "Documentation Tools — Confluence, Notion & SharePoint",
    emoji: "📚",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "If communication tools are how teams talk, documentation tools are how teams remember. Well-documented teams onboard faster, make fewer mistakes, and build better products." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Confluence (Atlassian)",
            definition: "The standard enterprise wiki. Teams document requirements, runbooks, architecture decisions, and onboarding guides. Lives alongside JIRA.",
            example: "Before touching the payment module, read the Confluence page 'Payment Gateway Architecture v2 — Setup Guide'"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Notion",
            definition: "Modern all-in-one workspace. Combines notes, databases, kanban boards, and wikis. Popular in startups and product teams.",
            example: "The product roadmap, meeting notes, and OKRs all live in the team Notion workspace"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "SharePoint (Microsoft)",
            definition: "Enterprise document management system. Large organizations use it for HR policies, department wikis, and file storage. Integrated with Teams.",
            example: "The leave policy and expense reimbursement form are in the HR SharePoint site"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Google Docs / Drive",
            definition: "Real-time collaborative documents. Perfect for drafts, shared notes, and documents that need multiple editors simultaneously.",
            example: "We're co-authoring the technical design document — I've shared the Google Doc with you"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: `Rule of thumb: If you learned something the hard way, document it. Engineers who write great docs get noticed. When a new person joins and says "I found your runbook — it saved me 2 days," that's professional gold.` })
    ] })
  },
  {
    title: "Running Effective Meetings",
    emoji: "🎙️",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Meetings are expensive. A 1-hour meeting with 10 people costs 10 hours of productivity. Make every meeting count with these professional practices." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Before the meeting — prepare an agenda:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 bg-card border border-border rounded-lg p-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground mb-2", children: "📅 Sample Meeting Invite — Payment Review" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Subject: [ACTION REQUIRED] Payment Module UAT Review — 14 Apr, 11 AM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Objective:" }),
          " Review UAT failures and agree on fix plan.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Agenda:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "00:00–05:00 — UAT failure summary (Ravi)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "05:00–15:00 — Root cause analysis (Priya)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "15:00–25:00 — Fix timeline and resource allocation (All)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "25:00–30:00 — Action items and next steps",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Pre-read:" }),
          " JIRA bug report PAY-342 (link attached)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Required attendees:" }),
          " Priya, Ravi, Suresh",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Optional:" }),
          " Anita (PM — for timeline impact)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScenarioBox, { children: [
        "Suresh (Manager) notices Priya always shows up to meetings without pre-reading the agenda. She asks questions that were answered in the pre-read. After 2 sprints, she's not invited to client calls.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Ravi (QA), on the other hand, reads every agenda, prepares 2-3 questions, and follows up action items same day. By Sprint 5, he's presenting UAT reports directly to the client. Same team, same meetings — different outcomes based on preparation."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: 'End every meeting with: "Let me summarize the action items." Then send the MOM within 30 minutes. This single habit will make you stand out as highly professional from day one.' })
    ] })
  },
  {
    title: "Writing Minutes of Meeting (MOM) — The Full Guide",
    emoji: "📝",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Minutes of Meeting (MOM) is the official written record of a meeting. It ensures everyone leaves with the same understanding of what was decided and who does what next." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Why MOM is critical:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-foreground space-y-1.5 mb-4 ml-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Prevents misunderstandings — everyone has the same record" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Creates accountability — action items have names and deadlines" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Legal protection — client agreements are documented" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✅ Onboarding — new team members catch up on decisions made before they joined" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "MOM Structure:" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-4 bg-card border border-border rounded-lg p-4 text-xs font-mono space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm text-foreground", children: "📄 Minutes of Meeting — Sprint 3 Retrospective" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "Date: 14-Apr-2026 | Duration: 60 mins | Facilitator: Scrum Master Anita",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Attendees: Priya, Ravi, Suresh, Kiran, Divya (5 team members)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Mode: Microsoft Teams (Recording: Link attached)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "WENT WELL ✅" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "• Payment module delivered on time",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Zero showstopper bugs in UAT",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Daily standups were focused and under 15 minutes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "NEEDS IMPROVEMENT ⚠️" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "• Story point estimation was off — 3 stories not completed",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Test environment setup takes too long (2 hrs each time)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "• Code review feedback was not actionable enough"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "ACTION ITEMS 📋" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
          "1. Kiran → Automate test env setup with Docker → by 21-Apr",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "2. Priya → Create code review checklist in Confluence → by 18-Apr",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "3. Anita → Run estimation workshop with team → next sprint planning",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "4. All → Complete Agile course on Confluence wiki → by 20-Apr"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "NEXT MEETING" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Sprint 4 Planning — 17-Apr, 10 AM" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TipBox, { children: "Send the MOM within 30 minutes of the meeting ending. Use Reply-All to the original meeting invite so the email thread is complete. Always start with a brief subject like: [MOM] Sprint 3 Retro — 14 Apr." })
    ] })
  }
];
const JARGON_LESSONS = [
  {
    title: "Data & System Terms You'll Hear Daily",
    emoji: "💾",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "In IT, most conversations revolve around data moving between systems. These are the 10 terms you'll hear in your first week that will make or break your understanding of any meeting." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Source System",
            definition: "The system where data originates. The 'origin' of any data flow.",
            example: "The source system is the CRM — that's where all customer records start."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Target System",
            definition: "The destination where data is being sent or stored.",
            example: "The target is the data warehouse in Snowflake."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Legacy System",
            definition: "An old, outdated system still in use because replacing it is expensive or risky. Often runs on older technology (COBOL, Oracle 9i, on-premise servers).",
            example: "We need to migrate data from the legacy Oracle system — it's been running since 2003."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Migration",
            definition: "Moving data or entire systems from one location to another (e.g., from on-premise to cloud).",
            example: "The cloud migration to AWS will happen in phases over 6 months."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Backup",
            definition: "A copy of data saved separately in case the original is corrupted or lost.",
            example: "Restore from last night's backup — the production database got corrupted during the upgrade."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Environment (Dev / QA / UAT / Prod)",
            definition: "Different copies of the system for different purposes: DEV = developers write code here. QA = testers test here. UAT = users test here. PROD = real customers use this.",
            example: "It works in DEV and QA but fails in UAT — the PROD database connection string is different."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Downtime",
            definition: "Period when a system is unavailable, either planned (maintenance) or unplanned (outage).",
            example: "Planned downtime this Saturday 2 AM–4 AM for database patching. Notify clients."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Throughput",
            definition: "How much data or transactions a system can process per unit of time.",
            example: "Our current throughput is 500 transactions/second. Black Friday will hit 5,000 — we need to scale."
          }
        )
      ] })
    ] })
  },
  {
    title: "Deployment & Infrastructure Terms",
    emoji: "🚀",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "Understanding how software gets from a developer's laptop to a live server — and what happens when it goes wrong — is essential knowledge for every IT professional." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Deployment",
            definition: "The process of releasing new code or updates to an environment (dev, staging, or production).",
            example: "We deploy to PROD every Friday at 11 PM during the maintenance window."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Rollback",
            definition: "Reverting to a previous version of software when a deployment fails or causes issues.",
            example: "The deployment broke the login page — trigger an immediate rollback to v2.3.1."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Hotfix",
            definition: "An emergency fix deployed directly to production to resolve a critical issue, bypassing the normal sprint cycle.",
            example: "The payment bug is affecting 30% of users — we need a hotfix deployed tonight, not next sprint."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Release",
            definition: "A planned version of the software with a set of features, scheduled for deployment.",
            example: "Release 4.2 includes the new dashboard, payment retry logic, and performance improvements."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "CI/CD Pipeline",
            definition: "Continuous Integration / Continuous Deployment — automated process that builds, tests, and deploys code every time a developer pushes changes.",
            example: "Push your code — the CI/CD pipeline will run tests and deploy to QA automatically in 8 minutes."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Infrastructure as Code (IaC)",
            definition: "Managing and provisioning servers/infrastructure using code files (e.g., Terraform) instead of manual clicks.",
            example: "Don't create the AWS servers manually — update the Terraform file and run the pipeline."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Incident",
            definition: "An unplanned disruption to a service that impacts users. Classified by severity: P1 (critical, all hands on deck) to P4 (minor).",
            example: "P1 Incident declared — production database down. Incident bridge call open. Join immediately."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Change Request (CR)",
            definition: "A formal request to make a modification to a production system. Must be approved before implementation to control risk.",
            example: "Submit a Change Request for the database schema update — it needs CAB approval before we touch PROD."
          }
        )
      ] })
    ] })
  },
  {
    title: "Project & Business Terms",
    emoji: "📈",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "These are the terms your manager, clients, and stakeholders use daily. Understanding them makes you fluent in the language of corporate IT." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "SLA (Service Level Agreement)",
            definition: "A formal commitment about service quality — uptime, response times, resolution times.",
            example: "Our SLA guarantees 99.9% uptime and 4-hour resolution for P1 incidents."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "KPI (Key Performance Indicator)",
            definition: "A measurable metric used to evaluate success. Teams are assessed against their KPIs quarterly.",
            example: "Our Q1 KPI is reducing page load time from 3s to under 1s for 95th percentile users."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Stakeholder",
            definition: "Anyone who has an interest in the project's outcome — clients, managers, users, executives.",
            example: "Include all stakeholders in the demo invite — especially the product owner and the client lead."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Bandwidth",
            definition: "Team's available capacity (not internet speed — it's a metaphor for time and energy).",
            example: "We don't have bandwidth this sprint — the feature will go into next sprint's backlog."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Technical Debt",
            definition: "Code shortcuts taken to meet deadlines that need to be fixed later. Too much debt slows future development.",
            example: "We rushed this module — there's significant technical debt. We need a cleanup sprint before adding new features."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Story Points / Velocity",
            definition: "Story points = relative size of a task. Velocity = how many points a team completes per sprint.",
            example: "Our velocity is 42 points/sprint. This epic is 120 points — roughly 3 sprints."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Escalation",
            definition: "Raising an issue to a higher level of authority when it can't be resolved at the current level.",
            example: "The vendor hasn't responded in 48 hours — escalate to their account manager and CC your director."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "SOP (Standard Operating Procedure)",
            definition: "A documented step-by-step process for performing a routine task consistently.",
            example: "Follow the SOP for production deployments — it's in Confluence under /DevOps/Runbooks/Prod-Deploy."
          }
        )
      ] })
    ] })
  },
  {
    title: "SDLC, Testing & Career Terms",
    emoji: "🎯",
    content: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Para, { children: "From the software development lifecycle to terms used in your performance review — these complete your corporate vocabulary." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "SDLC (Software Development Life Cycle)",
            definition: "The complete process of planning, building, testing, and maintaining software. All methodologies (Waterfall, Agile) follow some version of SDLC.",
            example: "Where are we in the SDLC? We're in the testing phase — UAT starts Monday."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "UAT (User Acceptance Testing)",
            definition: "Final testing by actual users or business teams before the software goes live. Their sign-off approves the release.",
            example: "UAT sign-off from the finance team is required before we deploy to PROD."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Regression",
            definition: "Testing existing functionality after new changes to ensure nothing previously working is now broken.",
            example: "Anytime we change the login module, run the full regression suite — authentication is too critical to skip."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "OKR (Objectives & Key Results)",
            definition: "Goal-setting framework used by companies to align teams. Objective = what you want to achieve. Key Results = how you measure it.",
            example: "Q2 Objective: Improve platform reliability. Key Result: Reduce P1 incidents by 50%."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Onboarding",
            definition: "The process of integrating a new employee or customer into a system or organization.",
            example: "Client onboarding takes 3 weeks — account setup, data migration, and user training."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Sync / Align / Loop in",
            definition: "Corporate speak for: have a quick conversation, agree on something, or inform someone.",
            example: "Let's sync on the deployment timeline after the standup. Also, loop in the QA lead."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "EOD / COB",
            definition: "End of Day / Close of Business — means 'by end of today' when giving deadlines.",
            example: "I need the test results by EOD today — the client presentation is tomorrow morning."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TermBox,
          {
            term: "Deep Dive",
            definition: "A thorough, detailed analysis or discussion of a specific topic.",
            example: "Let's schedule a deep dive on the performance issues next week — 2 hours, bring your metrics."
          }
        )
      ] })
    ] })
  }
];
const SECTION_QUIZZES = {
  roles: [
    {
      question: "A customer reports they can't log in to the app. The L1 support engineer can't fix it. What happens next?",
      options: [
        "The developer fixes it immediately",
        "It gets escalated to L2 support",
        "The issue is closed",
        "The system is rebooted"
      ],
      correct: 1,
      explanation: "L1 → L2 → L3 is the escalation path. L2 has deeper access to logs and systems. Only if L2 can't resolve it does the developer (L3) get involved."
    },
    {
      question: "During UAT for an online banking app, bank employees test the app and say 'The font is too small on the transfer screen.' What type of testing is this?",
      options: [
        "Unit Testing",
        "Integration Testing",
        "UAT (User Acceptance Testing)",
        "Performance Testing"
      ],
      correct: 2,
      explanation: "UAT is done by actual users or business stakeholders. The bank employees ARE the users, so this is UAT. They're validating that the app meets their real-world needs."
    },
    {
      question: "Priya pushes new code to fix a payment bug. Ravi now re-runs ALL existing test cases to ensure nothing else broke. This is called:",
      options: [
        "Smoke Testing",
        "Regression Testing",
        "Performance Testing",
        "UAT"
      ],
      correct: 1,
      explanation: "Regression Testing = re-testing existing functionality after a change. It ensures your fix didn't break anything that was working before."
    },
    {
      question: "Which role is responsible for deciding WHAT features get built next in a Scrum team?",
      options: [
        "Scrum Master",
        "Development Team",
        "Product Owner",
        "Team Lead"
      ],
      correct: 2,
      explanation: "The Product Owner owns the Product Backlog and decides prioritization. They represent the business and customer needs. The Scrum Master ensures process, not product decisions."
    },
    {
      question: "A DevOps engineer's PRIMARY goal is to:",
      options: [
        "Write application features",
        "Test software manually",
        "Automate and accelerate software delivery through CI/CD pipelines",
        "Design user interfaces"
      ],
      correct: 2,
      explanation: "DevOps bridges Dev and Ops through automation. CI/CD pipelines automatically build, test, and deploy code, making delivery faster and more reliable."
    }
  ],
  culture: [
    {
      question: "A hospital management system project locks all requirements for 8 months before development starts. Which methodology is this?",
      options: ["Agile", "Scrum", "Waterfall", "Kanban"],
      correct: 2,
      explanation: "Waterfall locks requirements first, then moves linearly through design → development → testing. Agile would use iterative sprints with evolving requirements."
    },
    {
      question: "In Scrum, the Sprint Retrospective is PRIMARILY for:",
      options: [
        "Demoing completed features to stakeholders",
        "Planning the next sprint's stories",
        "The team discussing what went well and what to improve",
        "Bug triage and priority setting"
      ],
      correct: 2,
      explanation: "The Retrospective is the team's improvement meeting — focused on process, not product. Sprint Review demos to stakeholders; Planning assigns stories."
    },
    {
      question: "Story points in Scrum represent:",
      options: [
        "Exact hours needed to complete a task",
        "Relative complexity and effort of a story",
        "The number of developers assigned",
        "The financial value of a feature"
      ],
      correct: 1,
      explanation: "Story points are relative — a 5-point story is roughly twice as complex as a 3-point story. Teams use Fibonacci numbers (1, 2, 3, 5, 8, 13) to estimate complexity, not time."
    },
    {
      question: "After an important client meeting, Priya sends an email summarizing discussion, decisions, and action items. This is called:",
      options: [
        "Status Update",
        "Meeting Agenda",
        "MOM (Minutes of Meeting)",
        "Sprint Report"
      ],
      correct: 2,
      explanation: "MOM = Minutes of Meeting. It documents: what was discussed, decisions made, and action items with owners and deadlines. Sent after the meeting (not before — that's the agenda)."
    }
  ],
  tools: [
    {
      question: "Which tool is used to create and track JIRA tickets, stories, and sprints in Agile teams?",
      options: ["Confluence", "JIRA", "Slack", "SharePoint"],
      correct: 1,
      explanation: "JIRA is Atlassian's project management tool for tracking stories, bugs, and sprints. Confluence is its documentation companion. Slack is for communication."
    },
    {
      question: "You need to write a technical architecture document that multiple team members can edit simultaneously. Best tool?",
      options: [
        "Microsoft Teams chat",
        "Email attachment",
        "Google Docs",
        "Zoom recording"
      ],
      correct: 2,
      explanation: "Google Docs enables real-time collaborative editing. Multiple people can edit simultaneously and see each other's changes live. Email attachments create version conflicts."
    },
    {
      question: "What should be sent within 30 minutes after a critical client meeting?",
      options: [
        "Sprint planning document",
        "Minutes of Meeting (MOM)",
        "Deployment runbook",
        "Performance test results"
      ],
      correct: 1,
      explanation: "MOM should be sent promptly after the meeting while details are fresh. It documents decisions and action items, ensuring accountability and preventing misunderstandings."
    }
  ],
  jargon: [
    {
      question: "Your manager says 'We're migrating data from the legacy system to the target warehouse.' 'Target' means:",
      options: [
        "The old system being decommissioned",
        "The destination system where data is being moved to",
        "The backup location",
        "The development environment"
      ],
      correct: 1,
      explanation: "Source = where data comes from. Target = where data goes to. Legacy = the old system (which is the source in this case). Target = the new data warehouse."
    },
    {
      question: "A critical bug in production is affecting 40% of users right now. What kind of fix is needed?",
      options: [
        "A regular sprint story",
        "A change request for next release",
        "A hotfix",
        "A regression test"
      ],
      correct: 2,
      explanation: "A Hotfix is an emergency fix deployed immediately to production, bypassing normal sprint cycles. Used when a critical issue is affecting live users and can't wait for the next sprint."
    },
    {
      question: "When someone says 'Do we have bandwidth for this?', they mean:",
      options: [
        "Is the internet connection fast enough?",
        "Does the team have available time and capacity?",
        "Is the server powerful enough?",
        "Is the database large enough?"
      ],
      correct: 1,
      explanation: "In corporate speak, 'bandwidth' = team capacity / availability. It's borrowed from networking but used as a metaphor for human capacity. 'No bandwidth' = the team is fully booked."
    },
    {
      question: "'We're in the UAT phase.' UAT stands for:",
      options: [
        "Unit and Automation Testing",
        "User Acceptance Testing",
        "Unified Application Testing",
        "Update and Test"
      ],
      correct: 1,
      explanation: "UAT = User Acceptance Testing. Done by actual users/business team (not QA) before go-live. Their sign-off approves the release. It's the final gate before production."
    },
    {
      question: "After a deployment fails and breaks the production app, the team performs a:",
      options: ["Hotfix", "Rollback", "Regression Test", "Code Review"],
      correct: 1,
      explanation: "Rollback = reverting to the previous working version immediately after a failed deployment. It restores service fast. A hotfix is for when you want to fix forward (keep the new version but patch the bug)."
    }
  ]
};
const SECTION_META = {
  roles: {
    title: "IT Roles & Responsibilities",
    subtitle: "Who does what in an IT company — with real-world scenarios",
    emoji: "👨‍💼",
    accentVar: "--corporate-accent",
    bgVar: "--corporate-accent",
    borderVar: "--corporate-accent",
    badge: "Roles & Responsibilities"
  },
  culture: {
    title: "How IT Companies Work",
    subtitle: "Methodologies, Scrum, sprint planning & professional culture",
    emoji: "🔄",
    accentVar: "--platform-accent",
    bgVar: "--platform-accent",
    borderVar: "--platform-accent",
    badge: "Methodologies & Culture"
  },
  tools: {
    title: "Team Collaboration Tools",
    subtitle: "Every tool you'll use on Day 1 — and how to use them professionally",
    emoji: "🛠️",
    accentVar: "--skill-networking",
    bgVar: "--skill-networking",
    borderVar: "--skill-networking",
    badge: "Collaboration Tools"
  },
  jargon: {
    title: "Corporate Jargon Decoded",
    subtitle: "30+ terms you'll hear from Day 1 — explained with real scenarios",
    emoji: "💬",
    accentVar: "--etl-accent",
    bgVar: "--etl-accent",
    borderVar: "--etl-accent",
    badge: "Key Terms"
  }
};
const SECTION_LESSONS = {
  roles: ROLES_LESSONS,
  culture: CULTURE_LESSONS,
  tools: TOOLS_LESSONS,
  jargon: JARGON_LESSONS
};
function SectionQuiz({
  questions,
  accentVar
}) {
  const [state, setState] = reactExports.useState({
    answers: Array(questions.length).fill(null),
    submitted: false
  });
  const correctCount = state.submitted ? state.answers.filter((a, i) => a === questions[i].correct).length : 0;
  function handleSelect(qIdx, optIdx) {
    if (state.submitted) return;
    setState((prev) => {
      const answers = [...prev.answers];
      answers[qIdx] = optIdx;
      return { ...prev, answers };
    });
  }
  function handleSubmit() {
    setState((prev) => ({ ...prev, submitted: true }));
  }
  function handleRetry() {
    setState({ answers: Array(questions.length).fill(null), submitted: false });
  }
  const allAnswered = state.answers.every((a) => a !== null);
  const score = state.submitted ? Math.round(correctCount / questions.length * 100) : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "rounded-2xl border-2 border-border bg-card p-6",
      "data-ocid": "section-quiz",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-xl", children: "🎯" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground", children: "Section Quiz" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              questions.length,
              " questions — test your knowledge"
            ] })
          ] })
        ] }),
        state.submitted && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `mb-6 p-4 rounded-xl border-2 ${score >= 60 ? "border-[oklch(var(--capstone-accent)/0.4)] bg-[oklch(var(--capstone-accent)/0.06)]" : "border-[oklch(var(--confidential-stamp)/0.4)] bg-[oklch(var(--confidential-stamp)/0.06)]"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: `font-bold text-lg ${score >= 60 ? "text-[oklch(var(--capstone-accent))]" : "text-[oklch(var(--confidential-stamp))]"}`,
                  children: score >= 80 ? "🏆 Excellent!" : score >= 60 ? "✅ Good Job!" : "📚 Keep Learning!"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                correctCount,
                " of ",
                questions.length,
                " correct · Score: ",
                score,
                "%"
              ] })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: questions.map((q, qIdx) => {
          const selected = state.answers[qIdx];
          const isCorrect = state.submitted && selected === q.correct;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: `inline-block w-6 h-6 rounded-full text-xs flex items-center justify-center mr-2 font-bold ${state.submitted ? isCorrect ? "bg-[oklch(var(--capstone-accent)/0.15)] text-[oklch(var(--capstone-accent))]" : "bg-[oklch(var(--confidential-stamp)/0.15)] text-[oklch(var(--confidential-stamp))]" : "bg-primary/10 text-primary"}`,
                  children: qIdx + 1
                }
              ),
              q.question
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-2 ml-8", children: q.options.map((opt, optIdx) => {
              const isSelected = selected === optIdx;
              const isRight = state.submitted && optIdx === q.correct;
              const showWrong = state.submitted && isSelected && optIdx !== q.correct;
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => handleSelect(qIdx, optIdx),
                  disabled: state.submitted,
                  "data-ocid": `quiz-option-${qIdx}-${optIdx}`,
                  className: `w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-smooth ${isRight ? "border-[oklch(var(--capstone-accent)/0.5)] bg-[oklch(var(--capstone-accent)/0.08)] text-foreground font-medium" : showWrong ? "border-[oklch(var(--confidential-stamp)/0.5)] bg-[oklch(var(--confidential-stamp)/0.08)] text-foreground" : isSelected ? `border-[oklch(var(${accentVar})/0.5)] bg-[oklch(var(${accentVar})/0.08)] text-foreground font-medium` : "border-border bg-card text-foreground hover:border-[oklch(var(--primary)/0.3)] hover:bg-[oklch(var(--primary)/0.03)]"} ${state.submitted ? "cursor-default" : "cursor-pointer"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                    state.submitted && isRight && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-[oklch(var(--capstone-accent))] shrink-0" }),
                    state.submitted && showWrong && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "w-4 h-4 text-[oklch(var(--confidential-stamp))] shrink-0" }),
                    opt
                  ] })
                },
                opt
              );
            }) }),
            state.submitted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-8 p-3 rounded-lg bg-muted/50 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "💡 Explanation:" }),
              " ",
              q.explanation
            ] }) })
          ] }, q.question);
        }) }),
        !state.submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            state.answers.filter((a) => a !== null).length,
            " of",
            " ",
            questions.length,
            " answered"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              onClick: handleSubmit,
              disabled: !allAnswered,
              "data-ocid": "quiz-submit-btn",
              className: "gap-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                "Submit Answers"
              ]
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "w-4 h-4 text-[oklch(var(--badge-gold))]" }),
            score >= 80 ? "Outstanding performance! 🎉" : score >= 60 ? "Well done! Keep it up!" : "Review the content and try again!"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              onClick: handleRetry,
              variant: "outline",
              size: "sm",
              "data-ocid": "quiz-retry-btn",
              children: "Try Again"
            }
          )
        ] })
      ]
    }
  );
}
function CorporateWorldSection() {
  const { section } = useParams({ from: "/corporate-world/$section" });
  const [paywallOpen, setPaywallOpen] = reactExports.useState(false);
  const { isSubscribed } = useSubscription();
  const sectionId = section;
  const meta = SECTION_META[sectionId];
  const lessons = SECTION_LESSONS[sectionId];
  const quiz = SECTION_QUIZZES[sectionId];
  const isFreeSection = sectionId === "roles";
  if (!meta || !lessons) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Section not found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/corporate-world",
          className: "text-primary hover:underline text-sm mt-2 block",
          children: "← Back to Corporate World"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PaywallModal, { open: paywallOpen, onOpenChange: setPaywallOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "bg-card border-b border-border",
          style: { borderTop: `3px solid oklch(var(${meta.borderVar}))` },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/corporate-world",
                className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-smooth",
                "data-ocid": "back-to-corporate-world",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
                  "Corporate World"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0",
                  style: {
                    background: `oklch(var(${meta.bgVar})/0.1)`,
                    border: `2px solid oklch(var(${meta.borderVar})/0.3)`
                  },
                  children: meta.emoji
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "text-xs font-bold uppercase tracking-wide",
                      style: { color: `oklch(var(${meta.accentVar}))` },
                      children: meta.badge
                    }
                  ),
                  isFreeSection ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[oklch(var(--capstone-accent)/0.12)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.3)] text-xs", children: "✓ Free Access" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[oklch(var(--badge-gold)/0.12)] text-[oklch(var(--badge-gold))] border-[oklch(var(--badge-gold)/0.3)] text-xs", children: "⭐ Premium" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-2xl text-foreground mb-1 leading-snug", children: meta.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: meta.subtitle })
              ] })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 py-8 space-y-6", children: [
        lessons.map((lesson, idx) => {
          const accessible = idx === 0 ? true : isSubscribed;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "course-card",
              "data-ocid": `lesson-card-${idx}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0",
                        style: {
                          background: `oklch(var(${meta.bgVar})/0.1)`,
                          border: `1.5px solid oklch(var(${meta.borderVar})/0.3)`
                        },
                        children: lesson.emoji
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-xs font-semibold uppercase tracking-wide mb-0.5",
                          style: { color: `oklch(var(${meta.accentVar}))` },
                          children: [
                            "Lesson ",
                            idx + 1
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base text-foreground leading-snug", children: lesson.title })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-end gap-1.5 shrink-0", children: accessible ? /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-[oklch(var(--capstone-accent)/0.1)] text-[oklch(var(--capstone-accent))] border-[oklch(var(--capstone-accent)/0.25)] text-xs", children: "Free" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-muted text-muted-foreground border-border text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-2.5 h-2.5 mr-1" }),
                    "Premium"
                  ] }) })
                ] }),
                accessible ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  !isFreeSection && idx === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ContentProtectionNotice, { className: "mb-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-sm", children: lesson.content })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "blur-sm pointer-events-none select-none opacity-60 prose-sm max-h-40 overflow-hidden", children: lesson.content }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-4 flex flex-col items-center justify-center py-6 text-center gap-4 border border-amber-400/30 rounded-xl bg-amber-400/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-6 h-6 text-amber-500" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground text-base mb-1", children: "Upgrade to unlock" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground max-w-xs", children: [
                        "Subscribe for ₹499 to read this lesson and unlock all ",
                        lessons.length,
                        " lessons in this section."
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        size: "sm",
                        className: "gap-2 bg-amber-500 hover:bg-amber-600 text-white border-0",
                        onClick: () => setPaywallOpen(true),
                        "data-ocid": `lesson-upgrade-btn-${idx}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-3.5 h-3.5" }),
                          "Upgrade to unlock"
                        ]
                      }
                    )
                  ] })
                ] })
              ] })
            },
            lesson.title
          );
        }),
        (isFreeSection || isSubscribed) && quiz && quiz.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionQuiz,
          {
            questions: quiz,
            accentVar: `--${meta.accentVar.replace("--", "")}`
          }
        ),
        !isFreeSection && !isSubscribed && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-2xl border-2 border-[oklch(var(--badge-gold)/0.3)] bg-[oklch(var(--badge-gold)/0.05)] p-8 text-center",
            "data-ocid": "section-paywall-banner",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-[oklch(var(--badge-gold)/0.1)] flex items-center justify-center mx-auto mb-4 text-3xl", children: "🏆" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground mb-2", children: "Unlock the Full Section" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-2 max-w-md mx-auto", children: [
                "Subscribe for ₹499 to unlock all ",
                lessons.length,
                " lessons, the section quiz and earn a completion badge."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-2 mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "badge-subscription", children: [
                  "✓ ",
                  lessons.length,
                  " lessons"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-subscription", children: "✓ Section badge" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-subscription", children: "✓ Mini quiz" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-subscription", children: "✓ 45 days access" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  onClick: () => setPaywallOpen(true),
                  size: "lg",
                  className: "gap-2",
                  "data-ocid": "section-subscribe-btn",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                    "Upgrade"
                  ]
                }
              )
            ]
          }
        ),
        (isFreeSection || isSubscribed) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card border border-border p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl mb-2", children: "🎉" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg text-foreground mb-1", children: "Section Complete!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
            "You've completed",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: meta.title }),
            ". Complete the quiz above to finish this section."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/corporate-world", "data-ocid": "back-to-hub-btn", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
            "Back to Corporate World Hub"
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  CorporateWorldSection as default
};
