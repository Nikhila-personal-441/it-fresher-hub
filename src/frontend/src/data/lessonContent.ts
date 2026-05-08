// Gamified lesson content for all IT Fresher Hub modules
import type { ModuleLessonMap } from "@/types";

import { AI_ML_LESSONS } from "./lessonContent_aiml";
import { CAPSTONE_LESSONS } from "./lessonContent_capstone";
import { CLOUD_LESSONS } from "./lessonContent_cloud";
import { CORPORATE_SKILLS_LESSONS } from "./lessonContent_corporateskills";
import { CYBERSECURITY_LESSONS } from "./lessonContent_cybersecurity";
import { DEVOPS_LESSONS } from "./lessonContent_devops";
import { DSA_LESSONS } from "./lessonContent_dsa";
import { ETL_TOOLS_LESSONS } from "./lessonContent_etltools";
import { EXCEL_LESSONS } from "./lessonContent_excel";
import { IT_FUNDAMENTALS_LESSONS } from "./lessonContent_fundamentals";
import { GITHUB_LESSONS } from "./lessonContent_github";
import { HTML_CSS_LESSONS } from "./lessonContent_htmlcss";
import { JAVA_LESSONS } from "./lessonContent_java";
import { MNC_PLATFORM_LESSONS } from "./lessonContent_mncplatforms";
import { NETWORKING_LESSONS } from "./lessonContent_networking";
import { PRESENTATION_LESSONS } from "./lessonContent_presentation";
// ─── Expanded lesson arrays from separate module files ────────────────────────
import { PYTHON_LESSONS } from "./lessonContent_python";
import { SHELL_LESSONS } from "./lessonContent_shell";
import { SQL_LESSONS } from "./lessonContent_sql";
import { TRENDING_LESSONS } from "./lessonContent_trending";

export const ALL_LESSON_CONTENT: ModuleLessonMap = {
  // ── Core skill modules (by numeric module ID) ─────────────────────────────
  "1": IT_FUNDAMENTALS_LESSONS, // IT Fundamentals          (30 lessons)
  "2": NETWORKING_LESSONS, // Networking Concepts      (35 lessons)
  "3": PYTHON_LESSONS, // Python Programming       (35 lessons)
  "4": SQL_LESSONS, // SQL & Databases          (35 lessons)
  "5": HTML_CSS_LESSONS, // HTML & CSS               (30 lessons)
  "6": JAVA_LESSONS, // Java Fundamentals        (30 lessons)
  "7": DSA_LESSONS, // Data Structures & Algos  (30 lessons)
  "8": DEVOPS_LESSONS, // DevOps Essentials        (35 lessons)
  "9": AI_ML_LESSONS, // AI & Machine Learning    (35 lessons)
  "10": AI_ML_LESSONS, // ML Deep Dive             (shares AI_ML)
  "11": CYBERSECURITY_LESSONS, // Cybersecurity Essentials (35 lessons)
  "12": CLOUD_LESSONS, // Cloud Computing & AWS    (35 lessons)
  "13": GITHUB_LESSONS, // GitHub & Version Control (35 lessons)
  "14": SHELL_LESSONS, // Shell Scripting & Linux  (30 lessons)
  "15": EXCEL_LESSONS, // Excel for IT Pros        (30 lessons)
  "16": PRESENTATION_LESSONS, // Presentation Skills      (30 lessons)
  "17": CORPORATE_SKILLS_LESSONS, // Corporate Skills         (30 lessons)
  "18": TRENDING_LESSONS, // Trending Tech in 2025    (30 lessons)
  // ── Corporate World modules ───────────────────────────────────────────────
  "19": CORPORATE_SKILLS_LESSONS, // Corporate Roles & Responsibilities
  "20": CORPORATE_SKILLS_LESSONS, // Agile, Scrum & Methodologies
  "21": CORPORATE_SKILLS_LESSONS, // Corporate Jargon & Terms
  "22": CORPORATE_SKILLS_LESSONS, // Collaboration Tools & MOM
  // ── MNC Platforms ─────────────────────────────────────────────────────────
  "23": MNC_PLATFORM_LESSONS, // Salesforce Fundamentals  (30 lessons)
  "24": MNC_PLATFORM_LESSONS, // Snowflake & Data Warehouse
  // ── ETL Tools ─────────────────────────────────────────────────────────────
  "25": ETL_TOOLS_LESSONS, // Informatica ETL          (30 lessons)
  "26": ETL_TOOLS_LESSONS, // Alteryx & Data Prep
  // ── Capstone Project ──────────────────────────────────────────────────────
  "27": CAPSTONE_LESSONS, // Capstone: Build Your IT Portfolio (31 lessons)
  // ── Category-key aliases (used by useLessonContent / useModuleLessons) ───
  python: PYTHON_LESSONS,
  sql: SQL_LESSONS,
  devops: DEVOPS_LESSONS,
  cloudaws: CLOUD_LESSONS,
  cloud: CLOUD_LESSONS,
  github: GITHUB_LESSONS,
  ai_ml: AI_ML_LESSONS,
  machinelearning: AI_ML_LESSONS,
  cybersecurity: CYBERSECURITY_LESSONS,
  networking: NETWORKING_LESSONS,
  java: JAVA_LESSONS,
  htmlcss: HTML_CSS_LESSONS,
  dsa: DSA_LESSONS,
  shellscripting: SHELL_LESSONS,
  itfundamentals: IT_FUNDAMENTALS_LESSONS,
  excel: EXCEL_LESSONS,
  presentation: PRESENTATION_LESSONS,
  corporateskills: CORPORATE_SKILLS_LESSONS,
  corporateworld: CORPORATE_SKILLS_LESSONS,
  trending: TRENDING_LESSONS,
  mncplatforms: MNC_PLATFORM_LESSONS,
  etltools: ETL_TOOLS_LESSONS,
  capstone: CAPSTONE_LESSONS,
};
