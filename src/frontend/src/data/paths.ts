import { ITModule } from "@/types";
import { MOCK_MODULES } from "@/hooks/useModules";

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceINR: number;
  modules: string[]; // array of module IDs
  skills: string[];
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "path_it_fundamentals",
    title: "IT Fundamentals Path",
    description: "Master the core building blocks: hardware, OS, networking, and corporate essentials.",
    icon: "🖥️",
    priceINR: 199,
    modules: ["1", "2", "11", "17", "19", "21"], // IT Fundamentals, Networking, Cyber, Corporate, Roles, Jargon
    skills: ["Hardware", "Networking", "Security", "Corporate Communication"],
  },
  {
    id: "path_programming",
    title: "Programming Path",
    description: "Learn to code from scratch to advanced algorithms.",
    icon: "💻",
    priceINR: 199,
    modules: ["3", "5", "6", "7", "13", "14"], // Python, HTML/CSS, Java, DSA, GitHub, Shell
    skills: ["Python", "Java", "DSA", "Web Dev", "Git"],
  },
  {
    id: "path_data_analytics",
    title: "Data & Analytics Path",
    description: "Query, manipulate, and visualize data effectively.",
    icon: "📊",
    priceINR: 199,
    modules: ["4", "15", "16", "24"], // SQL, Excel, Presentation, Snowflake
    skills: ["SQL", "Excel", "Data Visualization", "Snowflake"],
  },
  {
    id: "path_cloud_devops",
    title: "Cloud & DevOps Path",
    description: "Deploy, scale, and automate modern applications.",
    icon: "☁️",
    priceINR: 199,
    modules: ["8", "12", "20", "18"], // DevOps, Cloud AWS, Agile/Scrum, Trending
    skills: ["AWS", "Docker", "CI/CD", "Agile"],
  },
  {
    id: "path_etl",
    title: "ETL & Data Engineering Path",
    description: "Build robust data pipelines and integrate systems.",
    icon: "🔀",
    priceINR: 199,
    modules: ["4", "25", "26", "24"], // SQL, Informatica, Alteryx, Snowflake
    skills: ["ETL", "Informatica", "Alteryx", "Data Warehousing"],
  },
];

export function getPathModules(pathId: string): ITModule[] {
  const path = LEARNING_PATHS.find((p) => p.id === pathId);
  if (!path) return [];
  return MOCK_MODULES.filter((m) => path.modules.includes(m.id));
}
