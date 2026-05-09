import { ALL_LESSON_CONTENT } from "@/data/lessonContent";
import { useAuth } from "@/contexts/AuthContext";
import {
  markModuleComplete,
  issueCertificate,
} from "@/lib/firestoreService";
import type { ITModule, LessonContent, ModuleCategory } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

// Full 27-course catalog for IT Fresher Hub
const MOCK_MODULES: ITModule[] = [
  // ── Core Skills ───────────────────────────────────────────────
  {
    id: "1",
    title: "IT Fundamentals",
    description:
      "Master the core building blocks: hardware, software, OS, and networking essentials every IT professional needs.",
    category: "itfundamentals",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Hardware Components",
      "Operating Systems",
      "File Systems",
      "Basic Networking",
    ],
    completed: false,
    progress: 0,
    icon: "🖥️",
    xpReward: 200,
  },
  {
    id: "2",
    title: "Networking Concepts",
    description:
      "Understand TCP/IP, DNS, HTTP, and how data travels across the internet and corporate networks.",
    category: "networking",
    difficulty: "beginner",
    estimatedMinutes: 280,
    topics: ["TCP/IP", "DNS & HTTP", "Firewalls", "VPN & Subnets"],
    completed: false,
    progress: 0,
    icon: "🌐",
    xpReward: 250,
  },
  {
    id: "3",
    title: "Python Programming",
    description:
      "Write real Python from day one — variables, loops, functions, file handling, and mini automation scripts.",
    category: "python",
    difficulty: "beginner",
    estimatedMinutes: 280,
    topics: [
      "Variables & Data Types",
      "Control Flow",
      "Functions",
      "File I/O",
      "OOP Basics",
    ],
    completed: false,
    progress: 0,
    icon: "🐍",
    xpReward: 300,
  },
  {
    id: "4",
    title: "SQL & Databases",
    description:
      "Query, manipulate, and design databases. From SELECT to JOINs, indexes, and stored procedures.",
    category: "sql",
    difficulty: "beginner",
    estimatedMinutes: 280,
    topics: [
      "SELECT Basics",
      "JOINs",
      "Aggregations",
      "Indexes",
      "Stored Procedures",
    ],
    completed: false,
    progress: 0,
    icon: "🗃️",
    xpReward: 280,
  },
  {
    id: "5",
    title: "HTML & CSS",
    description:
      "Build web pages from scratch. Understand semantic HTML, Flexbox, Grid, and responsive design.",
    category: "htmlcss",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Semantic HTML",
      "CSS Selectors",
      "Flexbox & Grid",
      "Responsive Design",
    ],
    completed: false,
    progress: 0,
    icon: "🎨",
    xpReward: 220,
  },
  {
    id: "6",
    title: "Java Fundamentals",
    description:
      "Learn OOP concepts through Java — classes, inheritance, interfaces, and exception handling.",
    category: "java",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "OOP Principles",
      "Classes & Objects",
      "Interfaces",
      "Collections",
      "Exception Handling",
    ],
    completed: false,
    progress: 0,
    icon: "☕",
    xpReward: 320,
  },
  {
    id: "7",
    title: "Data Structures & Algorithms",
    description:
      "Crack technical interviews: arrays, linked lists, trees, sorting algorithms, and Big-O analysis.",
    category: "dsa",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "Arrays & Strings",
      "Linked Lists",
      "Trees & Graphs",
      "Sorting",
      "Big-O Notation",
    ],
    completed: false,
    progress: 0,
    icon: "🧩",
    xpReward: 400,
  },
  {
    id: "8",
    title: "DevOps Essentials",
    description:
      "Understand Git, Docker, CI/CD pipelines, and how modern teams ship software reliably at scale.",
    category: "devops",
    difficulty: "intermediate",
    estimatedMinutes: 280,
    topics: [
      "Git Workflows",
      "Docker Basics",
      "CI/CD Pipelines",
      "Infrastructure as Code",
    ],
    completed: false,
    progress: 0,
    icon: "⚙️",
    xpReward: 350,
  },
  {
    id: "9",
    title: "AI & Machine Learning Basics",
    description:
      "Demystify AI — from regression to neural networks, understand how models learn from data.",
    category: "ai_ml",
    difficulty: "intermediate",
    estimatedMinutes: 280,
    topics: [
      "ML Fundamentals",
      "Supervised Learning",
      "Neural Nets",
      "Prompt Engineering",
    ],
    completed: false,
    progress: 0,
    icon: "🤖",
    xpReward: 380,
  },
  {
    id: "10",
    title: "Machine Learning Deep Dive",
    description:
      "Go beyond basics: model training, evaluation, feature engineering, and deploying ML models.",
    category: "machinelearning",
    difficulty: "advanced",
    estimatedMinutes: 280,
    topics: [
      "Feature Engineering",
      "Model Evaluation",
      "Overfitting & Regularization",
      "Model Deployment",
    ],
    completed: false,
    progress: 0,
    icon: "🧠",
    xpReward: 450,
  },
  {
    id: "11",
    title: "Cybersecurity Essentials",
    description:
      "Protect systems and data: understand threats, encryption, secure coding, and compliance basics.",
    category: "cybersecurity",
    difficulty: "intermediate",
    estimatedMinutes: 280,
    topics: ["Threat Types", "Encryption", "Authentication", "OWASP Top 10"],
    completed: false,
    progress: 0,
    icon: "🔒",
    xpReward: 300,
  },
  {
    id: "12",
    title: "Cloud Computing & AWS",
    description:
      "Explore AWS key services: EC2, S3, Lambda, RDS — and understand cloud architecture patterns.",
    category: "cloudaws",
    difficulty: "beginner",
    estimatedMinutes: 280,
    topics: [
      "Cloud Models",
      "EC2 & S3",
      "Lambda & Serverless",
      "RDS & DynamoDB",
      "IAM Security",
    ],
    completed: false,
    progress: 0,
    icon: "☁️",
    xpReward: 350,
  },
  {
    id: "13",
    title: "GitHub & Version Control",
    description:
      "Create repositories, manage branches, resolve conflicts, and collaborate using GitHub like a pro.",
    category: "github",
    difficulty: "beginner",
    estimatedMinutes: 280,
    topics: [
      "Git Init & Clone",
      "Branching",
      "Pull Requests",
      "Conflict Resolution",
      "GitHub Actions",
    ],
    completed: false,
    progress: 0,
    icon: "🐙",
    xpReward: 250,
  },
  {
    id: "14",
    title: "Shell Scripting & Linux",
    description:
      "Automate tasks with bash scripts, navigate the Linux filesystem, and manage processes like a sysadmin.",
    category: "shellscripting",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "Bash Basics",
      "File Management",
      "Loops & Conditionals",
      "Process Management",
      "Cron Jobs",
    ],
    completed: false,
    progress: 0,
    icon: "🐚",
    xpReward: 280,
  },
  {
    id: "15",
    title: "Excel for IT Professionals",
    description:
      "Master Excel formulas, pivot tables, VLOOKUP, and data visualization for real workplace scenarios.",
    category: "excel",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "VLOOKUP & HLOOKUP",
      "Pivot Tables",
      "Conditional Formatting",
      "Charts & Graphs",
      "Macros Basics",
    ],
    completed: false,
    progress: 0,
    icon: "📊",
    xpReward: 200,
  },
  {
    id: "16",
    title: "Presentation & Communication Skills",
    description:
      "Create impactful presentations, speak confidently in meetings, and craft executive-ready slides.",
    category: "presentation",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Story Structure",
      "Slide Design Principles",
      "Data Visualization",
      "Public Speaking Tips",
    ],
    completed: false,
    progress: 0,
    icon: "🎤",
    xpReward: 180,
  },
  {
    id: "17",
    title: "Corporate Skills",
    description:
      "Thrive in the workplace: email etiquette, agile workflows, meeting culture, and professional networking.",
    category: "corporateskills",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Email Etiquette",
      "Agile & Scrum",
      "Meeting Culture",
      "Time Management",
    ],
    completed: false,
    progress: 0,
    icon: "💼",
    xpReward: 200,
  },
  {
    id: "18",
    title: "Trending Tech in 2025",
    description:
      "Stay ahead: GenAI, Edge Computing, Quantum basics, Web3, and what's hot in the industry right now.",
    category: "trending",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Generative AI",
      "Edge Computing",
      "Web3 & Blockchain",
      "Quantum Computing Basics",
    ],
    completed: false,
    progress: 0,
    icon: "📈",
    xpReward: 220,
  },
  // ── Corporate World Track ─────────────────────────────────────
  {
    id: "19",
    title: "Corporate Roles & Responsibilities",
    description:
      "Understand every role in an IT company — from developer to support — and what they actually do day-to-day.",
    category: "corporateworld",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Developer Roles",
      "Testing Roles",
      "Operations & Support",
      "Management Hierarchy",
    ],
    completed: false,
    progress: 0,
    icon: "🏢",
    xpReward: 180,
  },
  {
    id: "20",
    title: "Agile, Scrum & Methodologies",
    description:
      "How companies build software: Waterfall vs Agile, sprint planning, story creation, and Scrum master certification.",
    category: "corporateworld",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Waterfall vs Agile",
      "Scrum Framework",
      "Sprint Planning",
      "JIRA & Tools",
      "Scrum Master Cert",
    ],
    completed: false,
    progress: 0,
    icon: "🔄",
    xpReward: 200,
  },
  {
    id: "21",
    title: "Corporate Jargon & Terms",
    description:
      "Never be lost in meetings again — master 50+ corporate IT terms like legacy, source, target, and UAT.",
    category: "corporateworld",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: ["Data Terms", "Project Terms", "Testing Terms", "Infra Terms"],
    completed: false,
    progress: 0,
    icon: "📖",
    xpReward: 150,
  },
  {
    id: "22",
    title: "Collaboration Tools & MOM",
    description:
      "Master Teams, Slack, and Zoom. Learn to run effective meetings and write professional minutes of meeting.",
    category: "corporateworld",
    difficulty: "beginner",
    estimatedMinutes: 240,
    topics: [
      "Slack & Teams",
      "Meeting Etiquette",
      "Minutes of Meeting",
      "Google Workspace",
    ],
    completed: false,
    progress: 0,
    icon: "💬",
    xpReward: 160,
  },
  // ── MNC Platforms Track ────────────────────────────────────────
  {
    id: "23",
    title: "Salesforce Fundamentals",
    description:
      "Understand CRM concepts and Salesforce platform — the most-demanded enterprise cloud skill globally.",
    category: "mncplatforms",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "CRM Concepts",
      "Salesforce Objects",
      "Apex Basics",
      "Salesforce Admin",
    ],
    completed: false,
    progress: 0,
    icon: "☁️",
    xpReward: 300,
  },
  {
    id: "24",
    title: "Snowflake & Modern Data Warehousing",
    description:
      "Learn how MNCs store and query massive datasets using Snowflake, the cloud-native data platform.",
    category: "mncplatforms",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "Snowflake Architecture",
      "Virtual Warehouses",
      "Time Travel",
      "Data Sharing",
    ],
    completed: false,
    progress: 0,
    icon: "❄️",
    xpReward: 320,
  },
  // ── ETL Tools Track ───────────────────────────────────────────
  {
    id: "25",
    title: "Informatica ETL",
    description:
      "The industry-standard ETL tool used in banks and enterprises for data migration and integration.",
    category: "etltools",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "ETL Concepts",
      "Informatica PowerCenter",
      "Mappings & Workflows",
      "Error Handling",
    ],
    completed: false,
    progress: 0,
    icon: "🔀",
    xpReward: 350,
  },
  {
    id: "26",
    title: "Alteryx & Data Prep",
    description:
      "Blend, prepare, and analyze data without writing code — used widely by data analysts in MNCs.",
    category: "etltools",
    difficulty: "intermediate",
    estimatedMinutes: 240,
    topics: [
      "Alteryx Workflow",
      "Data Blending",
      "Predictive Tools",
      "Output Connectors",
    ],
    completed: false,
    progress: 0,
    icon: "📦",
    xpReward: 300,
  },
  // ── Capstone Project ──────────────────────────────────────────
  {
    id: "27",
    title: "Capstone: Build Your IT Portfolio",
    description:
      "Set up GitHub, VS Code, a database, a cloud trial, and deploy a full project that wows recruiters.",
    category: "capstone",
    difficulty: "advanced",
    estimatedMinutes: 310,
    topics: [
      "GitHub Setup",
      "VS Code & Tools",
      "Cloud Free Tier",
      "Database Setup",
      "Deploy & Showcase",
    ],
    completed: false,
    progress: 0,
    icon: "🚀",
    xpReward: 500,
  },
];

export function useModules(category?: ModuleCategory) {
  return useQuery<ITModule[]>({
    queryKey: ["modules", category],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      if (category) {
        return MOCK_MODULES.filter((m) => m.category === category);
      }
      return MOCK_MODULES;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useModule(id: string) {
  return useQuery<ITModule | undefined>({
    queryKey: ["module", id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      return MOCK_MODULES.find((m) => m.id === id);
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
}

export function useMarkModuleCompleted() {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  return useMutation({
    mutationFn: async (moduleId: string) => {
      if (!user) throw new Error("Not authenticated");
      // Persist completion to Firestore
      await markModuleComplete(user.uid, moduleId);
      // Issue certificate for the completed module
      const mod = MOCK_MODULES.find((m) => m.id === moduleId);
      if (mod) {
        await issueCertificate(user.uid, moduleId, mod.title);
      }
      return moduleId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["modules"] });
      queryClient.invalidateQueries({ queryKey: ["progress"] });
      queryClient.invalidateQueries({ queryKey: ["certificates"] });
    },
  });
}

export function useLessonContent(
  moduleId: string,
  lessonIndex: number,
): LessonContent | null {
  const lessons = ALL_LESSON_CONTENT[moduleId];
  if (!lessons || lessonIndex < 0 || lessonIndex >= lessons.length) return null;
  return lessons[lessonIndex];
}

export function useModuleLessons(moduleId: string): LessonContent[] {
  return ALL_LESSON_CONTENT[moduleId] ?? [];
}

export { MOCK_MODULES };
