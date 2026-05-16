import type { ITModule } from "@/types";
import { MOCK_MODULES } from "@/hooks/useModules";

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceINR: number;
  mandatoryModules: string[]; // array of module IDs that MUST be completed
  optionalModules: string[]; // array of module IDs where AT LEAST ONE must be completed
  skills: string[];
  certName: string; // Name for the certificate issued on completion
  color: string; // accent color class hint
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "path_it_fundamentals",
    title: "IT Fundamentals Path",
    description:
      "Master the core building blocks: hardware, OS, networking, cybersecurity and corporate essentials every IT professional needs.",
    icon: "🖥️",
    priceINR: 199,
    mandatoryModules: ["1", "2", "11", "17", "19"], // IT Fundamentals, Networking, Cyber, Corporate Skills, Roles
    optionalModules: ["21"], // Jargon (Optional)
    skills: ["Hardware", "Networking", "Security", "Corporate Communication"],
    certName: "IT Fundamentals Professional Certificate",
    color: "blue",
  },
  {
    id: "path_programming",
    title: "Programming Path",
    description:
      "Learn to code from scratch to advanced algorithms — Python, Java, DSA, Git, HTML/CSS and Shell Scripting.",
    icon: "💻",
    priceINR: 199,
    mandatoryModules: ["5", "7", "13", "14"], // HTML/CSS, DSA, GitHub, Shell
    optionalModules: ["3", "6"], // Python OR Java
    skills: ["Python", "Java", "DSA", "Web Dev", "Git"],
    certName: "Programming Professional Certificate",
    color: "green",
  },
  {
    id: "path_data_ai",
    title: "Data & AI Path",
    description:
      "From SQL queries to machine learning models — master data analysis, visualization, and AI fundamentals.",
    icon: "🧠",
    priceINR: 199,
    mandatoryModules: ["4", "9", "10"], // SQL, AI/ML Basics, ML Deep Dive
    optionalModules: ["15"], // Excel (Optional)
    skills: ["SQL", "Machine Learning", "AI", "Data Analysis", "Excel"],
    certName: "Data & AI Professional Certificate",
    color: "purple",
  },
  {
    id: "path_cloud_devops",
    title: "Cloud & DevOps Path",
    description:
      "Deploy, scale, and automate modern applications on AWS with Docker, CI/CD pipelines, and Agile methodologies.",
    icon: "☁️",
    priceINR: 199,
    mandatoryModules: ["8", "12", "20"], // DevOps, Cloud AWS, Agile/Scrum
    optionalModules: ["18"], // Trending Tech (Optional)
    skills: ["AWS", "Docker", "CI/CD", "Agile"],
    certName: "Cloud & DevOps Professional Certificate",
    color: "sky",
  },
  {
    id: "path_etl",
    title: "ETL & Data Engineering Path",
    description:
      "Build robust data pipelines and integrate enterprise systems using Informatica, Alteryx, SQL and Snowflake.",
    icon: "🔀",
    priceINR: 199,
    mandatoryModules: ["4", "24", "25"], // SQL, Snowflake, Informatica
    optionalModules: ["26"], // Alteryx (Optional)
    skills: ["ETL", "Informatica", "Alteryx", "Data Warehousing", "Snowflake"],
    certName: "ETL & Data Engineering Professional Certificate",
    color: "orange",
  },
  {
    id: "path_misc",
    title: "Soft Skills & Corporate Culture",
    description:
      "Thrive in the workplace — presentations, collaboration tools, professional communication, and trending tech awareness.",
    icon: "💼",
    priceINR: 199,
    mandatoryModules: ["16", "17", "18"], // Presentation, Corporate Skills, Trending
    optionalModules: ["22"], // Collaboration Tools (Optional)
    skills: ["Presentation", "Communication", "Collaboration", "Trending Tech"],
    certName: "Corporate Readiness Certificate",
    color: "rose",
  },
];

export function getPathModules(pathId: string): ITModule[] {
  const path = LEARNING_PATHS.find((p) => p.id === pathId);
  if (!path) return [];
  const allIds = [...path.mandatoryModules, ...path.optionalModules];
  return MOCK_MODULES.filter((m) => allIds.includes(m.id));
}

export function getPathForModule(moduleId: string): LearningPath | null {
  return LEARNING_PATHS.find((p) => 
    p.mandatoryModules.includes(moduleId) || p.optionalModules.includes(moduleId)
  ) ?? null;
}
